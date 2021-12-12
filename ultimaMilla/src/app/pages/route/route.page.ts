import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { UIHelper } from 'src/app/services/uihelper.service';
import { Local } from '../../models/local';
import { SwiperOptions } from 'swiper';
import { Geolocation } from '@capacitor/geolocation';
import { AppConfigService } from 'src/app/services/app.config.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: ['./route.page.scss'],
})
export class RoutePage implements OnInit {

  cargandoLocales = false;
  cargaError = '';
  locales:Local[] = [];
  fecha = new Date();
  currentuser:any;
  googlemaps="https://www.google.com/maps/dir/" ;
  localjson:Local;

  constructor(
    private localService: LocalService,
    private helper:UIHelper,
    public app:AppConfigService

  ){
    this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    //this.cargaLocales();
  }

  ionViewWillEnter() {
    this.cargaLocales()
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

  async doRefresh(event){
    await this.refresh();
    event.target.complete();
  }

  async refresh()
  {
    var loader = await this.helper.showLoader("Cargando");
    await this.cargaLocales();
    loader.dismiss();
  }


  async cargaLocales(){
    var loader = await this.helper.showLoader("Cargando");
    this.cargandoLocales = true;
    try {
      this.localjson= JSON.parse('{"idRuta":1416006,"fhViaje":"2024-07-05T22:00:00","conductor":"7296614-7-RICARDO HOLASCO QUEZADA MUÑOZ","origen":"Puerto Valparaiso","idLocal":10281,"codigo":"7681","local":"Centro Saam huechuraba","direccion":"Dominicos 7171","secuencia":1,"viaje":609185,"patenteTracto":"BKVK90","patenteCarro":"JC2374","rutaEstado":1,"rpIdEstadoEntrega":14,"idRp":2343594,"inicioDescarga":"","finDescarga":""}');
      //const req = await this.localService.getLocales(viaje, patente);
      this.locales.push(this.localjson,this.localjson,this.localjson,this.localjson,)
      loader.dismiss()
      //this.locales=[req.data[0],req.data[0],req.data[0],req.data[0]]
    } catch (error) {
      loader.dismiss();
      this.helper.showError(error);
    }
    this.agregarmapa()
  }

  async abrirmapa(){

    // stop here if form is invalid
    const usarGPS:number = 1;
    var loader = await this.helper.showLoader( "Cargando");
    //alert(usarGPS)

    const permisos = await Geolocation.checkPermissions();
    if (usarGPS==1) {
      if (permisos.location == 'denied' || permisos.location == 'prompt') {
        await loader.dismiss();
        this.helper.showError("debe tener el GPS activo y permitir el uso de este a la aplicacion")
        return;
      }else{
        try{
         await loader.dismiss();
          const location = await Geolocation.getCurrentPosition();
           
            const dir = encodeURIComponent('dominicos 7171, huechuraba');
            const mapaURL=`${this.googlemaps}${location.coords.latitude},${location.coords.longitude}/${dir} `;
            window.open(mapaURL,'_system')
        }catch{
          console.log("fallo la creacion de la url del mapa");
        }
      }
    }else
    if (permisos.location == 'denied' || permisos.location == 'prompt') {
      await loader.dismiss();
           
      const dir = encodeURIComponent('dominicos 7171, huechuraba');
      const mapaURL=`${this.googlemaps}${dir} `;
      window.open(mapaURL,'_system')
    }else{
      await loader.dismiss();
      const location = await Geolocation.getCurrentPosition();
           
      const dir = encodeURIComponent('dominicos 7171, huechuraba');
      const mapaURL=`${this.googlemaps}${location.coords.latitude},${location.coords.longitude}/${dir} `;
      window.open(mapaURL,'_system')
    }

  }

  async agregarmapa(){

    if (this.locales) {
     try{
        const location = await Geolocation.getCurrentPosition();
        for (let index = 0; index < this.locales.length; index++) {
          const direccion = encodeURIComponent('dominicos 7171, huechuraba');
          this.locales[index].mapaURL=`${this.googlemaps}${location.coords.latitude},${location.coords.longitude}/${direccion} `;
        }

      }catch{
        console.log("fallo la creacion de la url del mapa");
      }
    }
  }


}
