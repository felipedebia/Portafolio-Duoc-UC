import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MensajeSOS } from 'src/app/models/mensajesSos';
import { AlertSOSService } from 'src/app/services/alert.service';
import { UIHelper } from 'src/app/services/uihelper.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-modal-sos',
  templateUrl: './modal-sos.page.html',
  styleUrls: ['./modal-sos.page.scss'],
})
export class ModalSosPage implements OnInit {

  alertas:MensajeSOS[] = [];

  constructor(private sos:AlertSOSService, private modal:ModalController, private helper:UIHelper) { }

  ngOnInit() {
    this.load();
  }

  async load(){
    try {
      const request = await this.sos.getMensajes();
      this.alertas = request.data;
    } catch (error) {

    }
  }

  async close(){
    this.modal.dismiss('x');
  }

  async send(alert:MensajeSOS){
    const loader = await this.helper.showLoader();
    try {
      //loader.message = this.lang.text['cargando_localizacion'];
      loader.message = 'cargando localizacion';
      const location = await Geolocation.getCurrentPosition();
      //loader.message = this.lang.text['sos_enviando'];
      const request = await this.sos.postAlerta(alert.idMensaje,location.coords.latitude,location.coords.longitude);
      await loader.dismiss();
      await this.helper.showAlert(request.data[0].mensajeVuelta);
      this.modal.dismiss();
    } catch (error) {
      await loader.dismiss();
      if (error instanceof GeolocationPositionError) {
        this.helper.showError({msg:error.message});
      }
      else{
        this.helper.showError(error);
      }
    }
  }


}
