import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiResponse } from "../models/ApiResponse";
import { Version } from "../models/version";
import { APIURL } from '../../environments/environment';
import { UIHelper } from './uihelper.service';
import { Idiomas } from '../models/ListaIdiomasModel';


@Injectable({
    providedIn: 'root'
  })
  export class AppConfigService {

    public configLoaded = false;
    public iconLoaded = false;
    public cargaron=true;
    
    public params:any;
    public textos:any;
    public idiomas:Idiomas[]=[];
    public icons:any;
    
    constructor(private router:Router,private httpClient:HttpClient,private helper:UIHelper)
    {}


     public async getLastVersion()
    { 
        return this.httpClient.get<ApiResponse<Version>>(APIURL+'/version').toPromise();
    } 

    public async getLastParams()
    { 
        return this.httpClient.get<ApiResponse<any>>(APIURL+'/Parametros').toPromise();
    } 

    public async getIdioma(idiomaId:number)
    { 
        return this.httpClient.get<ApiResponse<any>>(APIURL+'/idioma?IdiomaId='+idiomaId).toPromise();
    } 

    public async getListaIdiomas()
    { 
        return this.httpClient.get<ApiResponse<Idiomas>>(APIURL+'/ListarIdioma').toPromise();
    } 

    public async getIcons()
    { 
        return this.httpClient.get<ApiResponse<any>>(APIURL+'/ConsultaIconos').toPromise();
    } 



    async getParams(){

      try {
        var obj={};

        const resp= await this.getLastParams();
        
        resp.data.map(element=>{
          obj[element.paraId] = element.paraValor
        });

        this.params = obj;
        
      } catch (error) {
        this.cargaron=false;
        this.helper.showError(error);
      }
    }
    
    async TieneIdioma() {
      if (!localStorage.getItem("lenguajePreferido")) {
          localStorage.setItem("lenguajePreferido", "1")
      }

      try {
          var obj={};
                  
          const resp = await this.getIdioma(Number(localStorage.getItem("lenguajePreferido") ))

          resp.data.map(element=>{
          obj[element.id] = element.texto;
        });

        this.textos = obj;
        
        localStorage.setItem('Lenguaje',JSON.stringify(obj))

  
      } catch (error) {
          this.textos=JSON.parse(localStorage.getItem('Lenguaje'))
          this.helper.showError(error);
          this.cargaron=false;
      }
    }

    async Listaidiomas(){
      try {

        const resp= await this.getListaIdiomas();
        
        this.idiomas=resp.data

        
      } catch (error) {
        this.cargaron=false;
        this.helper.showError(error);
      }
  
    }

    async cambiarIdioma(idiomaId:number){

      if(Number(localStorage.getItem("lenguajePreferido"))!=idiomaId){
        localStorage.setItem("lenguajePreferido", idiomaId.toString())

        await this.TieneIdioma()

      }

    }

    async ListarIcons(){
    try{  
      var obj={};
                  
          const resp = await this.getIcons()

          resp.data.map(element=>{
          obj[element.iconId] = element.iconUrl;
        });

        this.icons = obj;
        console.log("iconos", this.icons);
        
      } catch (error) {
        this.cargaron=false;
        this.helper.showError(error);
      }
  
    }

  }