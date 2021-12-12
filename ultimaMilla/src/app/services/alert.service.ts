import { UIHelper } from './uihelper.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/ApiResponse';
import { MensajeSOS } from '../models/mensajesSos';
import { APIURL} from 'src/environments/environment';
import { ModalSosPage } from '../modals/modal-sos/modal-sos.page';




@Injectable({
    providedIn: 'root'
  })
export class AlertSOSService{
    constructor(private http:HttpClient,private helper:UIHelper){}
 
    alertaSeleccionado:MensajeSOS;

    async getMensajes()
    {
        return this.http.get<ApiResponse<MensajeSOS>>(`${APIURL}/alerta`).toPromise();
    }
    
    async postAlerta(id:number,lat:number,lon:number)
    {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        const body = {
              mens_id:id,
              cond_id:currentUser.conductorId,
              cliente_gps_id:currentUser.clienteGpsId,
              lat:lat,
              lon:lon
        }
        return this.http.post<ApiResponse<MensajeSOS>>(`${APIURL}/alerta`,body).toPromise();
    }
}




