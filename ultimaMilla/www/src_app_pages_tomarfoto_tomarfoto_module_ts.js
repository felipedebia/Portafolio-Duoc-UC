(self["webpackChunkUltimaMilla"] = self["webpackChunkUltimaMilla"] || []).push([["src_app_pages_tomarfoto_tomarfoto_module_ts"],{

/***/ 4021:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    CameraSource["Prompt"] = "PROMPT";
    CameraSource["Camera"] = "CAMERA";
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 7673:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4021);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4028)).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5458:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* binding */ FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* binding */ FilesystemEncoding)
/* harmony export */ });
var Directory;
(function (Directory) {
    /**
     * The Documents directory
     * On iOS it's the app's documents directory.
     * Use this directory to store user-generated content.
     * On Android it's the Public Documents folder, so it's accessible from other apps.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     * On iOS it will use the Documents directory
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["Data"] = "DATA";
    /**
     * The Cache directory
     * Can be deleted in cases of low memory, so use this directory to write app-specific files
     * that your app can re-create easily.
     *
     * @since 1.0.0
     */
    Directory["Cache"] = "CACHE";
    /**
     * The external directory
     * On iOS it will use the Documents directory
     * On Android it's the directory on the primary shared/external
     * storage device where the application can place persistent files it owns.
     * These files are internal to the applications, and not typically visible
     * to the user as media.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["External"] = "EXTERNAL";
    /**
     * The external storage directory
     * On iOS it will use the Documents directory
     * On Android it's the primary shared/external storage directory.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));
var Encoding;
(function (Encoding) {
    /**
     * Eight-bit UCS Transformation Format
     *
     * @since 1.0.0
     */
    Encoding["UTF8"] = "utf8";
    /**
     * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
     * Unicode character set
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["ASCII"] = "ascii";
    /**
     * Sixteen-bit UCS Transformation Format, byte order identified by an
     * optional byte-order mark
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */
const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */
const FilesystemEncoding = Encoding;
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 1977:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 5458);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 5075)).then(m => new m.FilesystemWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5852:
/*!*************************************************************!*\
  !*** ./src/app/pages/tomarfoto/tomarfoto-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TomarfotoPageRoutingModule": () => (/* binding */ TomarfotoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tomarfoto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tomarfoto.page */ 3745);




const routes = [
    {
        path: '',
        component: _tomarfoto_page__WEBPACK_IMPORTED_MODULE_0__.TomarfotoPage
    }
];
let TomarfotoPageRoutingModule = class TomarfotoPageRoutingModule {
};
TomarfotoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TomarfotoPageRoutingModule);



/***/ }),

/***/ 639:
/*!*****************************************************!*\
  !*** ./src/app/pages/tomarfoto/tomarfoto.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TomarfotoPageModule": () => (/* binding */ TomarfotoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tomarfoto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tomarfoto-routing.module */ 5852);
/* harmony import */ var _tomarfoto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tomarfoto.page */ 3745);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-useful-swiper */ 9254);









let TomarfotoPageModule = class TomarfotoPageModule {
};
TomarfotoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tomarfoto_routing_module__WEBPACK_IMPORTED_MODULE_0__.TomarfotoPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_8__.NgxUsefulSwiperModule
        ],
        declarations: [_tomarfoto_page__WEBPACK_IMPORTED_MODULE_1__.TomarfotoPage]
    })
], TomarfotoPageModule);



/***/ }),

/***/ 3745:
/*!***************************************************!*\
  !*** ./src/app/pages/tomarfoto/tomarfoto.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TomarfotoPage": () => (/* binding */ TomarfotoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tomarfoto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tomarfoto.page.html */ 8808);
/* harmony import */ var _tomarfoto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tomarfoto.page.scss */ 6968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/photo.service */ 1957);
/* harmony import */ var _services_uihelper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/uihelper.service */ 1196);
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.config.service */ 3730);







let TomarfotoPage = class TomarfotoPage {
    constructor(fotoService, helper, app) {
        this.fotoService = fotoService;
        this.helper = helper;
        this.app = app;
        this.fotosLista = this.fotoService.fotos.length;
        this.MaxImagenes = 3;
        this.config = {
            slidesPerView: 3,
            spaceBetween: 10,
            direction: 'vertical',
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        };
    }
    ngOnInit() {
    }
    ionViewDidLeave() {
        this.fotoService.fotos = [];
        this.fotosLista = this.fotoService.fotos.length;
    }
    tomarFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.fotoService.fotos.length == 3) {
                this.helper.showAlert("ya cuenta con la cantidad maxima de imagenes para enviar");
            }
            else {
                yield this.fotoService.addNewToGallery();
                this.fotosLista = this.fotoService.fotos.length;
            }
        });
    }
    guardarFotos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var local;
            if (this.fotoService.fotos.length != 0) {
                var loader = yield this.helper.showLoader('Subiendo');
                try {
                    this.fotoService.fotos = [];
                    loader.dismiss();
                    this.helper.showAlert("Imagenes subidas Correctamente");
                }
                catch (error) {
                    loader.dismiss();
                    this.helper.showError(error);
                }
            }
            else {
                this.helper.showAlert("error");
            }
        });
    }
    remove(img) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const ind = this.fotoService.fotos.indexOf(img);
            this.fotoService.fotos.splice(ind, 1);
            this.fotosLista = this.fotoService.fotos.length;
        });
    }
};
TomarfotoPage.ctorParameters = () => [
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: _services_uihelper_service__WEBPACK_IMPORTED_MODULE_3__.UIHelper },
    { type: _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__.AppConfigService }
];
TomarfotoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tomarfoto',
        template: _raw_loader_tomarfoto_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tomarfoto_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TomarfotoPage);



/***/ }),

/***/ 1957:
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/camera */ 7673);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 1977);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _uihelper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uihelper.service */ 1196);
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.config.service */ 3730);









let PhotoService = class PhotoService {
    constructor(http, router, helper, app) {
        this.http = http;
        this.router = router;
        this.helper = helper;
        this.app = app;
        this.fotos = [];
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
                reader.readAsDataURL(blob);
            };
        });
    }
    addNewToGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //Proceso para tomar la foto
            const nuevafoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                quality: 100,
                width: 1024,
                preserveAspectRatio: true,
                allowEditing: false
            });
            this.fotos.unshift({
                filepath: '',
                webviewPath: nuevafoto.webPath
            });
            this.cantidadFotos = this.fotos.length;
        });
    }
    tryPostImage(local) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var loader = yield this.helper.showLoader(this.app.textos.loading);
            var fallo = false;
            for (let i = 0; i < this.fotos.length; i++) {
                console.log("imagen ", i);
                try {
                    const interno = yield fetch(this.fotos[i].webviewPath);
                    const blob = yield interno.blob();
                    const response = yield this.postImage(local, blob);
                }
                catch (error) {
                    fallo = true;
                    break;
                }
            }
            ;
            if (!fallo) {
                loader.dismiss();
                this.helper.showToast('no se pudieron cargar las imagenes', 2000);
                this.fotos = [];
                if (!local.finDescarga || !local.inicioDescarga) {
                    this.router.navigate(['/route-detail']);
                }
                else {
                    this.router.navigate(['/route']);
                }
            }
            else {
                loader.dismiss();
                this.helper.showError(this.app.textos.ImageUploadFailErr);
            }
        });
    }
    postImage(local, foto) {
        var form = new FormData();
        form.append('id_rp', local.idRp.toString());
        form.append('id_viaje', local.idRuta.toString());
        form.append('id_cliente', local.idLocal.toString());
        form.append('image', foto, 'imagen.png');
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.APIURL}/imagen`, form).toPromise();
    }
    savePicture(cameraPhoto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //convertir foto a base64
            const base64Data = yield this.readAsBase64(cameraPhoto);
            //Escribir en el directorio --no se usara?--
            const fileName = new Date().getTime + '.jpeg';
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Data
            });
            return {
                filepath: fileName,
                webviewPath: cameraPhoto.webPath
            };
        });
    }
    readAsBase64(cameraPhoto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //convertir de blob a base64
            const response = yield fetch(cameraPhoto.webPath);
            const blob = yield response.blob();
            return yield this.convertBlobToBase64(blob);
        });
    }
};
PhotoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _uihelper_service__WEBPACK_IMPORTED_MODULE_3__.UIHelper },
    { type: _app_config_service__WEBPACK_IMPORTED_MODULE_4__.AppConfigService }
];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], PhotoService);



/***/ }),

/***/ 6968:
/*!*****************************************************!*\
  !*** ./src/app/pages/tomarfoto/tomarfoto.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: #1776bc;\n  width: 100%;\n}\n\nion-grid {\n  margin-top: 2vh;\n  margin-left: 10vw;\n  margin-right: 10vw;\n  justify-content: center;\n}\n\nion-row {\n  justify-content: center;\n}\n\nion-col {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.row1 {\n  padding: 3%;\n  border-radius: 1rem;\n  background-color: #ffffff8c;\n}\n\nion-img {\n  width: 100%;\n  height: auto;\n}\n\n@supports (object-fit: cover) {\n  ion-img {\n    height: 100%;\n    object-fit: cover;\n    object-position: center center;\n  }\n}\n\n.row2 {\n  margin-top: 4vh;\n}\n\nswiper {\n  height: 60vh;\n  width: 90vw;\n}\n\nbutton {\n  background-color: transparent;\n}\n\nbutton.delete {\n  margin: 0.5rem;\n  font-size: 2rem;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  width: 2.5rem;\n  background-color: var(--ion-color-danger);\n  height: 2.5rem;\n  color: white;\n  justify-content: center;\n  justify-items: center;\n  text-align: center;\n}\n\n.contenedor {\n  width: calc(100% - 1rem);\n  height: 17vh;\n  border: 2px solid white;\n  border-radius: 2px;\n  background-size: cover;\n  margin: 0.5rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n  animation: reveal 1s ease;\n}\n\n.opacidad {\n  opacity: 0.4;\n}\n\nion-img {\n  height: 70px;\n  width: 70px;\n  margin: 5px;\n}\n\nion-img:active {\n  box-shadow: inset 2px 3px 4px #000;\n  filter: saturate(50%);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvbWFyZm90by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxpQkFBQTtJQUNBLDhCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0VBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJ0b21hcmZvdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzE3NzZiYztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTB2dztcclxuICAgIG1hcmdpbi1yaWdodDogMTB2dztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5yb3cxIHtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YztcclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuQHN1cHBvcnRzKG9iamVjdC1maXQ6IGNvdmVyKSB7XHJcbiAgICBpb24taW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucm93MiB7XHJcbiAgICBtYXJnaW4tdG9wOiA0dmg7XHJcbn1cclxuXHJcbnN3aXBlciB7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICB3aWR0aDogOTB2dztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5idXR0b24uZGVsZXRlIHtcclxuICAgIG1hcmdpbjogLjVyZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVuZWRvciB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XHJcbiAgICBoZWlnaHQ6IDE3dmg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW46IC41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb246IHJldmVhbCAxcyBlYXNlO1xyXG59XHJcblxyXG4ub3BhY2lkYWQge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1pbWc6YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAzcHggNHB4ICMwMDA7XHJcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */");

/***/ }),

/***/ 8808:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tomarfoto/tomarfoto.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header> </app-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n        <ion-row class=\"row1\">\r\n            <swiper [config]=\"config\" slidesPerView=2 class=\"mySwiper\">\r\n                <div class=\"swiper-wrapper\">\r\n                    <div class=\"swiper-slide\" *ngFor=\"let foto of fotoService.fotos; index as position\" [style.background-image]=\"foto.webviewPath\">\r\n\r\n                        <div class=\"contenedor\" [style.background-image]=\"'url('+foto.webviewPath+')'\" width=\"auto\">\r\n                            <button class=\"delete\" (click)=\"remove(foto)\">\r\n                                X\r\n                              </button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- Add Pagination -->\r\n                <div class=\"swiper-pagination\"></div>\r\n            </swiper>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"row2\">\r\n            <ion-col size=6>\r\n                <button (click)='tomarFoto()' [disabled]=\"fotosLista==MaxImagenes\">\r\n                    <ion-img src=\"../assets/icon/icons/qmtls-17.png\" class=\"img-btn no-img icon-bd\" height=\"70\" width=\"70\" [ngClass]=\"{'opacidad': fotosLista==MaxImagenes}\"></ion-img>\r\n                </button>\r\n\r\n            </ion-col>\r\n\r\n            <ion-col size=6>\r\n\r\n                <button (click)='guardarFotos()' [disabled]=\"fotosLista==0\">\r\n                    <ion-img src=\"../assets/icon/icons/qmtls-22.png\" class=\"img-btn no-img icon-bd\" height=\"70\" width=\"70\" [ngClass]=\"{'opacidad': fotosLista==0}\"></ion-img>\r\n                </button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n    </ion-grid>\r\n</ion-content>\r\n\r\n\r\n<app-footer></app-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tomarfoto_tomarfoto_module_ts.js.map