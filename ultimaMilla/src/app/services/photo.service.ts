import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { APIURL } from 'src/environments/environment';
import { ApiResponse } from '../models/ApiResponse';
import { Local } from '../models/local';
import { Foto } from '../models/webviewPath';
import { Router } from '@angular/router';
import { UIHelper } from './uihelper.service';
import { AppConfigService } from './app.config.service';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public fotos: Foto[] = [];
  public cantidadFotos:number;

  constructor(
    private http:HttpClient,
    private router:Router,
    private helper:UIHelper,
    private app:AppConfigService
    ) { }




  public async addNewToGallery(){

    //Proceso para tomar la foto
    const nuevafoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      width:1024,
      preserveAspectRatio:true,
      allowEditing: false
      
    })

    

    this.fotos.unshift({
      filepath: '',
      webviewPath: nuevafoto.webPath
      
    });
    this.cantidadFotos= this.fotos.length;
  }

  async tryPostImage(local:Local ){
    var loader = await this.helper.showLoader(this.app.textos.loading);
    var fallo=false;
    for(let i = 0; i < this.fotos.length; i++ )
    {
      console.log("imagen ", i );
      try {
        const interno =  await fetch(this.fotos[i].webviewPath);
        const blob:Blob =  await interno.blob();  
        const response = await this.postImage(local, blob);
        
      } catch (error) {
        fallo=true;
        break
      }
    };
    if (!fallo) {
      loader.dismiss();
      this.helper.showToast('no se pudieron cargar las imagenes', 2000)
      this.fotos=[];
      if (!local.finDescarga || !local.inicioDescarga ) {
        this.router.navigate(['/route-detail'])
      }else{
      this.router.navigate(['/route'])
      }

    }else{
      loader.dismiss();
      this.helper.showError(this.app.textos.ImageUploadFailErr)
    }
  }

  postImage(local:Local, foto:Blob )
  {
    var form = new FormData();
    form.append('id_rp', local.idRp.toString())
    form.append('id_viaje', local.idRuta.toString())
    form.append('id_cliente', local.idLocal.toString())
    form.append('image',foto,'imagen.png');

    return this.http.post<ApiResponse<any>>(`${APIURL}/imagen`,form).toPromise();
    
  } 

  public async savePicture(cameraPhoto: Photo){
    //convertir foto a base64
    const base64Data = await this.readAsBase64(cameraPhoto)
    //Escribir en el directorio --no se usara?--
    const fileName = new Date().getTime+'.jpeg'
    const savedFile= await Filesystem.writeFile({
      path:fileName,
      data:base64Data,
      directory:Directory.Data
    })
    return{
      filepath:fileName,
      webviewPath: cameraPhoto.webPath
    }

  }

  public async readAsBase64(cameraPhoto:Photo){
  //convertir de blob a base64
    const response = await fetch(cameraPhoto.webPath!)
    const blob= await response.blob()

    return await this.convertBlobToBase64(blob) as string
  }

  convertBlobToBase64= (blob:Blob) => new Promise ((resolve, reject)=>{
    const reader = new FileReader
    reader.onerror=reject
    reader.onload=()=>{
      resolve(reader.result)
      reader.readAsDataURL(blob)

    }
  })

}


