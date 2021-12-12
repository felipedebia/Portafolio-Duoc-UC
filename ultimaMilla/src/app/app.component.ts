import { Component } from '@angular/core';
import { VERSION_CODE } from 'src/environments/environment';
import { AppConfigService } from './services/app.config.service';
import { UIHelper } from './services/uihelper.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { App } from '@capacitor/app';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private settings:AppConfigService,private helper:UIHelper) {
    //this.init();
  }
 
/*   async init(){
    this.checkVersion();
  } */

/*   public async checkVersion()
  {
    try {
      const request = await this.settings.getLastVersion();
      const versionData = request.data[0];
      
      if(versionData.moveVersionCode > VERSION_CODE )
      {
        const alert = await this.helper.confirm(`Nueva versión disponible: ${versionData.moveVersion} ${versionData.moveCambios}`,'Actualizar','Cerrar');
        if(alert)
        {
          window.open('http://play.google.com', '_system');
          location.reload();
        }
        else{
          App.exitApp();
        }
      }
    } catch (error) {
      console.log(error);
    }
  } */

 
}

