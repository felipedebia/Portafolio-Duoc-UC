import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APIURL} from "src/environments/environment";
import { ApiResponse } from "../models/ApiResponse";
import { Local } from '../models/local';
import { Viaje } from '../helpers/viaje';





@Injectable({
    providedIn: 'root'
  })
  export class LocalService{
    
    constructor(private http:HttpClient)
    {

    }
  
    getViaje(viajeId:number, ClienteGpsId: number  )
    {
        const options ={
            Viaje_id:  viajeId,
            Cliente_gps_id: ClienteGpsId
          };
      return this.http.post<ApiResponse<Viaje>>(`${APIURL}/ConsultaViaje`,options).toPromise();
      
    }

    getLocales(viaje:number, Tracto: string  )
    {
        const options ={
            Viaje:  viaje,
            tracto: Tracto
          };

      return this.http.post<ApiResponse<Local>>(`${APIURL}/ConsultaLocales`,options).toPromise();
      
    }

    getLocal(rp_id:number)
    {
        const options ={
            rp_id:  rp_id,

          };
      return this.http.post<ApiResponse<Local>>(`${APIURL}/ConsultaLocal`,options).toPromise();
    }

    inicioDescarga(rp_id:number)
    {
        const options ={
            rp_id:  rp_id,
            rp_id_estado_entrega:13

          };
      return this.http.post<ApiResponse<any>>(`${APIURL}/Descarga/iniciar`,options).toPromise();
    }

    finDescarga(rp_id:number)
    {
        const options ={
            rp_id:  rp_id,
            rp_id_estado_entrega:14

          };
      return this.http.post<ApiResponse<any>>(`${APIURL}/Descarga/terminar`,options).toPromise();
    }

}


   