(self["webpackChunkUltimaMilla"] = self["webpackChunkUltimaMilla"] || []).push([["src_app_pages_alerta_alerta_module_ts"],{

/***/ 9976:
/*!*******************************************************!*\
  !*** ./src/app/pages/alerta/alerta-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertaPageRoutingModule": () => (/* binding */ AlertaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _alerta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerta.page */ 6600);




const routes = [
    {
        path: '',
        component: _alerta_page__WEBPACK_IMPORTED_MODULE_0__.AlertaPage
    }
];
let AlertaPageRoutingModule = class AlertaPageRoutingModule {
};
AlertaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlertaPageRoutingModule);



/***/ }),

/***/ 7482:
/*!***********************************************!*\
  !*** ./src/app/pages/alerta/alerta.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertaPageModule": () => (/* binding */ AlertaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _alerta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerta-routing.module */ 9976);
/* harmony import */ var _alerta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerta.page */ 6600);







let AlertaPageModule = class AlertaPageModule {
};
AlertaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _alerta_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlertaPageRoutingModule
        ],
        declarations: [_alerta_page__WEBPACK_IMPORTED_MODULE_1__.AlertaPage]
    })
], AlertaPageModule);



/***/ }),

/***/ 6600:
/*!*********************************************!*\
  !*** ./src/app/pages/alerta/alerta.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertaPage": () => (/* binding */ AlertaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_alerta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alerta.page.html */ 5836);
/* harmony import */ var _alerta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerta.page.scss */ 5564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var _services_uihelper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/uihelper.service */ 1196);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/geolocation */ 1091);
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.config.service */ 3730);










let AlertaPage = class AlertaPage {
    constructor(helper, router, alertaservice, nav, app) {
        this.helper = helper;
        this.router = router;
        this.alertaservice = alertaservice;
        this.nav = nav;
        this.app = app;
        this.alertas = [];
    }
    ngOnInit() {
        this.CargarMensaje();
    }
    CargarMensaje() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const request = yield this.alertaservice.getMensajes();
                this.alertas = request.data;
            }
            catch (error) {
            }
        });
    }
    GenerarAlerta() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // stop here if form is invalid
                const usarGPS = this.app.params.GPS;
                var loader = yield this.helper.showLoader(this.app.textos.loading);
                //alert(usarGPS)
                const permisos = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.checkPermissions();
                // alert(permisos.location)
                if (permisos.location == 'denied' || permisos.location == 'prompt') {
                    yield loader.dismiss();
                    const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.getCurrentPosition();
                    const respuesta = yield this.alertaservice.postAlerta(this.alertaservice.alertaSeleccionado.idMensaje, 0, 0);
                    yield this.helper.showAlert(respuesta.data[0].mensajeVuelta);
                    this.router.navigateByUrl('route', { replaceUrl: true });
                    return;
                }
                yield loader.dismiss();
                const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.getCurrentPosition();
                const respuesta = yield this.alertaservice.postAlerta(this.alertaservice.alertaSeleccionado.idMensaje, coordinates.coords.latitude, coordinates.coords.longitude);
                yield this.helper.showAlert(respuesta.data[0].mensajeVuelta);
                this.router.navigateByUrl('route', { replaceUrl: true });
            }
            catch (error) {
                this.helper.showError(error);
            }
        });
    }
    onClick(alerta) {
        this.alertaservice.alertaSeleccionado = alerta;
        this.GenerarAlerta();
    }
};
AlertaPage.ctorParameters = () => [
    { type: _services_uihelper_service__WEBPACK_IMPORTED_MODULE_3__.UIHelper },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertSOSService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__.AppConfigService }
];
AlertaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-alerta',
        template: _raw_loader_alerta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alerta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlertaPage);



/***/ }),

/***/ 5564:
/*!***********************************************!*\
  !*** ./src/app/pages/alerta/alerta.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --keyboard-offset: 0px!important;\n}\n\nion-back-button {\n  color: white;\n}\n\nion-toolbar {\n  --background: rgba(165, 165, 165, 0.514);\n  border-bottom-style: groove;\n  border-top: groove;\n  border-top-width: 2px;\n  border-bottom-width: 2px;\n}\n\n.header {\n  padding-top: 2vh;\n  background-color: #1b6db1;\n}\n\n.divheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon-centro {\n  width: auto;\n  height: 2rem;\n}\n\n.content {\n  display: flex;\n  background-color: #207eca;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n}\n\n.card1 {\n  color: black;\n  background-color: rgba(165, 165, 165, 0.514);\n  width: 80%;\n  border-radius: 1rem;\n  display: flex;\n  height: 95%;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 1rem;\n  overflow-y: scroll;\n}\n\n.card2 {\n  background-color: #ffffffcc;\n  border-radius: 1rem;\n  display: flex;\n  min-height: 15%;\n  width: 95%;\n}\n\n.contenedor {\n  height: auto;\n  width: 95%;\n  display: flex;\n  justify-content: center;\n  padding-top: 2rem;\n}\n\n.box {\n  background-color: #ffffffcc;\n  border-radius: 1rem;\n  display: flex;\n  width: 95%;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDSSxnQ0FBQTtBQUNMOztBQUVDO0VBQ0ksWUFBQTtBQUNMOztBQUVDO0VBQ0ksd0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQUNMOztBQUVDO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQUNMOztBQUVDO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDTDs7QUFFQztFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0w7O0FBRUM7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNMOztBQUVDO0VBQ0ksWUFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNMOztBQUVDO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNMOztBQUVDO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUNMOztBQUVDO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxVQUFBO0VBQ0EsdUJBQUE7QUFBTCIsImZpbGUiOiJhbGVydGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1jb250ZW50IHtcclxuICAgICAtLWtleWJvYXJkLW9mZnNldDogMHB4IWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiB9XHJcbiBcclxuIGlvbi10b29sYmFyIHtcclxuICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC41MTQpO1xyXG4gICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGdyb292ZTtcclxuICAgICBib3JkZXItdG9wOiBncm9vdmU7XHJcbiAgICAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xyXG4gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuIH1cclxuIFxyXG4gLmhlYWRlciB7XHJcbiAgICAgcGFkZGluZy10b3A6IDJ2aDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI2ZGIxO1xyXG4gfVxyXG4gXHJcbiAuZGl2aGVhZGVyIHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5pY29uLWNlbnRybyB7XHJcbiAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgaGVpZ2h0OiAycmVtO1xyXG4gfVxyXG4gXHJcbiAuY29udGVudCB7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA3ZWNhO1xyXG4gICAgIGhlaWdodDogMTAwJTtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gfVxyXG4gXHJcbiAuY2FyZDEge1xyXG4gICAgIGNvbG9yOiBibGFjaztcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNTE0KTtcclxuICAgICB3aWR0aDogODAlO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBoZWlnaHQ6IDk1JTtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gfVxyXG4gXHJcbiAuY2FyZDIge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjYztcclxuICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgbWluLWhlaWdodDogMTUlO1xyXG4gICAgIHdpZHRoOiA5NSU7XHJcbiB9XHJcbiBcclxuIC5jb250ZW5lZG9yIHtcclxuICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgd2lkdGg6IDk1JTtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gfVxyXG4gXHJcbiAuYm94IHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmY2M7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIC8vbWluLWhlaWdodDogNDAlO1xyXG4gICAgIHdpZHRoOiA5NSU7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiB9Il19 */");

/***/ }),

/***/ 5836:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alerta/alerta.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"header\">\n\n    <ion-toolbar class=\"prop\">\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\" text=\"\" class=\"start\">\n            </ion-back-button>\n        </ion-buttons>\n\n\n        <div class=\"divheader\">\n            <img src=\"../assets/icon/icons/qmtls-20.png\" class=\"icon-centro\">\n        </div>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <div class=\"content\">\n        <ion-card class=\"card1\">\n            <h2>{{app.textos.AlertAlerttxt}}</h2>\n            <div class=\"contenedor\" *ngFor=\"let a of alertas\" (click)=\"onClick(a)\">\n                <div class=\"box\">\n                    <h4>{{a.descripcion}}</h4>\n                </div>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_alerta_alerta_module_ts.js.map