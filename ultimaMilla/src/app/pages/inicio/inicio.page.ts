import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service'; 

import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UIHelper } from '../../services/uihelper.service';
import { AppConfigService } from '../../services/app.config.service';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  lang:number = 1;

  error = '';

  constructor(

    private formBuilder: FormBuilder,
    private router: Router,
    private helper:UIHelper,
    public app:AppConfigService,
    private authenticationService: AuthenticationService
  ) {    
 }
    
    public errorMessages ={
      viaje:
         [{type: 'required', message: "debe ingresar un correo"}],
       patente:[
         {type: 'required', message: "debe ingresar una contraseña"},]
     }
   
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      viaje:["",[Validators.required, Validators.email]],
      patente:["",[Validators.required ]]
    });
  }

  get f() { return this.loginForm.controls; }

  async onSubmit() {
    var loader = await this.helper.showLoader( 'Cargando');

    this.submitted = true;

    this.authenticationService.login(this.f.viaje.value, this.f.patente.value )
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['/route']);
        loader.dismiss();
      },
      error => {
        this.error = (error.Err==true)? error.Msg: "algo fallo";
        loader.dismiss();
        this.helper.showError(error);
      }); 
    loader.dismiss();  
  }
}
