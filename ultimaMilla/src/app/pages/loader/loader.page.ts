import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../services/app.config.service';
import { App } from '@capacitor/app';
import { VERSION_CODE, DEFAULT_LANG } from 'src/environments/environment';
import { Device } from '@capacitor/device';
import { UIHelper } from '../../services/uihelper.service';
import { Router } from '@angular/router';
import { Parameter } from '../../models/parameter';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  params:Parameter[]=[]
  cargaron=false;

  
  constructor(public app:AppConfigService, private helper:UIHelper, private router:Router ) { }



  ngOnInit() {
    this.router.navigateByUrl('login', {replaceUrl:true});
  }

  async cargarTodo(){
    try {
     await this.checkVersion()
     await this.app.TieneIdioma()
     await this.app.getParams()
     await this.app.ListarIcons()
      this.app.Listaidiomas()

    } catch (error) {
      this.helper.showError(error);
    }
    if (this.app.cargaron) {
      this.router.navigateByUrl('login', {replaceUrl:true});
    }
  }

  async checkVersion()
  {
    try{
      const request = await this.app.getLastVersion();
      const versionData = request.data[0];
      const info = await Device.getInfo();

      
      if(versionData.moveVersionCode > VERSION_CODE )
      {
        const alert = await this.helper.confirm(`Nueva versión disponible: ${versionData.moveVersion} ${versionData.moveCambios}`,'Actualizar','Cerrar');
         if(alert)
        {
          if(info.platform == 'ios')
          {
            window.open(versionData.moveVersionLinkIOS, '_system');
          }
          else{
            window.open(versionData.moveVersionLinkIOS, '_system');
          }
          location.reload();
        }
        else{
          App.exitApp();
        } 
      }
    } catch (error) {
    }
  }

}

