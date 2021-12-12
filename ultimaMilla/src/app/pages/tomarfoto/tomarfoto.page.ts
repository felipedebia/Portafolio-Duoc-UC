import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore from 'swiper';
import { PhotoService } from '../../services/photo.service';
import { Imagen } from 'src/app/models/imagenModel';
import { Foto } from '../../models/webviewPath';
import { Local } from 'src/app/models/local';
import { UIHelper } from '../../services/uihelper.service';
import { AppConfigService } from '../../services/app.config.service';



@Component({
  selector: 'app-tomarfoto',
  templateUrl: './tomarfoto.page.html',
  styleUrls: ['./tomarfoto.page.scss'],
})
export class TomarfotoPage implements OnInit {

  fotosLista=this.fotoService.fotos.length;
  MaxImagenes=3;

  constructor(public fotoService: PhotoService, private helper:UIHelper, public app:AppConfigService ) { }

  ngOnInit() {
  }

  config: SwiperOptions = {
    slidesPerView:3,
    spaceBetween:10,

    direction:'vertical',
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
  }; 

  ionViewDidLeave(){
    this.fotoService.fotos= [];
    this.fotosLista=this.fotoService.fotos.length;
  }

  async tomarFoto(){
    if (this.fotoService.fotos.length==3) {
      this.helper.showAlert("ya cuenta con la cantidad maxima de imagenes para enviar");

      
    }else{
      await this.fotoService.addNewToGallery()
      this.fotosLista=this.fotoService.fotos.length;
    }
  }

 async guardarFotos(){

    var local: Local;
    if (this.fotoService.fotos.length!=0) {

      
      var loader = await this.helper.showLoader('Subiendo');
      try {

        this.fotoService.fotos= [];
        loader.dismiss();
        this.helper.showAlert("Imagenes subidas Correctamente");
  
      } catch (error) {
        loader.dismiss();
        this.helper.showError(error);
        
      }
    } else {
      this.helper.showAlert("error");
    }

  }

  async remove(img:any){
    const ind = this.fotoService.fotos.indexOf(img);
    this.fotoService.fotos.splice(ind,1);
    this.fotosLista=this.fotoService.fotos.length;

  }

}
