import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';



 
@Injectable({
  providedIn: 'root'
})
export class UIHelper {
  


  constructor(public alertService:AlertController, private loadingService:LoadingController,private toastService:ToastController,private modalService:ModalController)
  {
    this.init();
  }

  private init(){
  }

  async showAlert(msg:string) {
    var mbox = await this.alertService.create({cssClass:'q-alert',translucent:true,message:msg,buttons:['Aceptar']});
    await mbox.present();
    return mbox;
  }


  public async showToast(msg:string,duration:number = 2000)
  {
    var toast = await this.toastService.create({cssClass:'q-alert',message:msg,duration:duration,translucent:true,position:'top'});
    await toast.present();
    return toast;
  }
  
  public async confirm(msg:string,btn_yes:string,btn_no:string){
    let myPromise = new Promise<boolean>(async (myResolve, myReject)=>{
        var alert = await this.alertService.create({cssClass:'q-alert',
          translucent:true,message:msg,buttons:[
            {
              text: btn_yes,
              handler: ()=>{
                myResolve(true); 
              },
            },
            {
              text: btn_no,
              role: 'cancel',
              handler:()=>{
                myResolve(false);
              }
            }
          ]
        });
        await alert.present();
      });
      return myPromise;
  }

  public async showModal(comp:any,props:any = {})
  {
    var modal = await this.modalService.create({component:comp,cssClass:'q-modal',componentProps:props});
    await modal.present();
    const { data } = await modal.onWillDismiss();
    return data;
  }

  public async showLoader(msg:string = null)
  {
    var loader = await this.loadingService.create({cssClass:'q-alert',message:msg,translucent:true});
    await loader.present();
    return loader;
  }

  public async showError(error:any)
  {
    var msg = (error.msg? error.msg:'Ocurrio un error inesperado');

    if(error.hasOwnProperty('code'))
    {
      if(error.code == 422)
      {
        var aHtml = '<div class="val-errors">';

        for (const i of error.data) {
          aHtml = aHtml+'<p>'+i.message+'</p>';
        }

        aHtml = aHtml+'</div>';
        msg =  msg+aHtml;
      }
    }

    var mbox = await this.alertService.create({cssClass:'q-alert',translucent:true,header:'Error',message:msg,buttons:['Aceptar']});
    await mbox.present();
    return mbox;
  }
  

}