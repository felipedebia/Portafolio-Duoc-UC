import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIURL } from 'src/environments/environment';
import { ApiResponse } from '../models/ApiResponse';
import { Local } from '../models/local';


@Injectable()
export class LocalResolveService implements Resolve<ApiResponse<Local>> {
  constructor(private http: HttpClient) { }


  resolve(route: ActivatedRouteSnapshot):Observable<ApiResponse<Local>> {
  let id=route.paramMap.get('rp_id')
  const params={
    rp_id:id
  }
  return this.http.post<ApiResponse<Local>>(`${APIURL}/ConsultaLocal`,params);
  }



}


