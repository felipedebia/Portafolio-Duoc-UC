import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertSOSService } from 'src/app/services/alert.service';
import { UIHelper } from '../../services/uihelper.service';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation'
import { MensajeSOS } from 'src/app/models/mensajesSos';
import { AppConfigService } from '../../services/app.config.service';


@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private helper:UIHelper,private router:Router,public alertaservice:AlertSOSService,private nav:NavController,public app:AppConfigService) { }

  alertas:MensajeSOS[] = [];

  ngOnInit() {
    this.CargarMensaje();
  }

  async CargarMensaje(){

    try {
      const request = await this.alertaservice.getMensajes();
      this.alertas = request.data;
    } catch (error) {
      
    }
  }

  async GenerarAlerta(){
    

    try {
      
    // stop here if form is invalid
    const usarGPS:number = this.app.params.GPS;
    var loader = await this.helper.showLoader( this.app.textos.loading);
    //alert(usarGPS)

    
    const permisos = await Geolocation.checkPermissions();
    // alert(permisos.location)
    if (permisos.location == 'denied' || permisos.location == 'prompt') {
      await loader.dismiss();

      const coordinates = await Geolocation.getCurrentPosition();
      const respuesta = await this.alertaservice.postAlerta(this.alertaservice.alertaSeleccionado.idMensaje,
                                                            0,0);
      await this.helper.showAlert(respuesta.data [0].mensajeVuelta);
      this.router.navigateByUrl('route',{replaceUrl:true});
      
      return;
    }
    await loader.dismiss();
      const coordinates = await Geolocation.getCurrentPosition();
      const respuesta = await this.alertaservice.postAlerta(this.alertaservice.alertaSeleccionado.idMensaje,
                                                 coordinates.coords.latitude,coordinates.coords.longitude);
      await this.helper.showAlert(respuesta.data [0].mensajeVuelta);
      this.router.navigateByUrl('route',{replaceUrl:true});
  
    } catch (error) {
      this.helper.showError(error);
    }
  }

  onClick(alerta:MensajeSOS){
    this.alertaservice.alertaSeleccionado = alerta;
    this.GenerarAlerta();
  } 

}
