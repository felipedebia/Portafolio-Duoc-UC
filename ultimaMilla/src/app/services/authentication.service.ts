import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { APIURL } from 'src/environments/environment';
import { JwtResponse } from '../models/jwt-response';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<JwtResponse>;
  public currentUser: Observable<JwtResponse>;
  //usuario:Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<JwtResponse>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): JwtResponse {
    //console.log("ACASSSS",this.currentUserSubject.value);
    return this.currentUserSubject.value;
  }

  login(viaje:string, patente: string) {
    //return this.http.post<any>(`http://api-sqool.rodrigosalcedo.cl/api/token`,
    const options ={
      correo:  viaje,
      password_bind: patente
  
    // usua_password:password
    };
    return this.http.post<JwtResponse>(APIURL+`/api_usuarios/login`,options
    )
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user.data[0]));
        this.currentUserSubject.next(user.data[0]);
        return user;
      },msg => {
        return msg;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('local');
    this.currentUserSubject.next(null);

  }
}
