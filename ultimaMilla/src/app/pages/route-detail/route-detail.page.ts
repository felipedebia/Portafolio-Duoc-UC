import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalService } from 'src/app/services/local.service';
import { UIHelper } from 'src/app/services/uihelper.service';
import { Local } from '../../models/local';
import { AppConfigService } from '../../services/app.config.service';


@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.page.html',
  styleUrls: ['./route-detail.page.scss'],
})
export class RouteDetailPage implements OnInit {
  
  actualizando = false;
  cargaError = '';
  local:Local;
  fechaViaje:Date;
  fechaInicio:Date;
  fechaFin:Date;
  currentuser:any;
  inicioDescarga:number;
  finDescarga:number;
  

  constructor(
    private formBuilder: FormBuilder,
    private ActivatedRoute : ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router,
    private localService: LocalService,
    private helper:UIHelper,
    public app:AppConfigService
  ) {
    
    this.currentuser = JSON.parse(localStorage.getItem('currentUser'));

  } 

  ngOnInit() {

  }



  async doRefresh(event){
    await this.refresh();
    event.target.complete();
  }

  async refresh()
  {
    var loader = await this.helper.showLoader("cargando");
    await this.cargaLocal();
    loader.dismiss();
  }

  async cargaLocal(){

    var rplocal = this.local.idRp
    var loader = await this.helper.showLoader(this.app.textos.loading);
    try {
      const req = await this.localService.getLocal(rplocal);
      this.local= req.data[0];
      loader.dismiss();

    } catch (error) {
      loader.dismiss();
      this.helper.showError(error);
      
    }
    this.actualizando=false
  }

  async iniciarDescarga(){
   // var rplocal = this.local.idRp
    var loader = await this.helper.showLoader("cargando");
    
    try {
      //const req = await this.localService.inicioDescarga(rplocal);
      this.inicioDescarga=1;
      this.fechaInicio=new Date;
      loader.dismiss();
      this.helper.showAlert("descarga iniciada correctamente")
    } catch (error) {
      loader.dismiss();
      this.helper.showError(error);
    }
  }

  async finalizarDescarga(){
   // var rplocal = this.local.idRp
    var loader = await this.helper.showLoader("cargando");

    try {
      //const req = await this.localService.finDescarga(rplocal);
      //this.local= req.data[0];
      this.finDescarga=1;
      this.fechaFin=new Date;
      loader.dismiss();
      this.helper.showAlert("descarga finalizada correctamente")

    } catch (error) {
      loader.dismiss();
      this.helper.showError(error);
    }
  }

}
