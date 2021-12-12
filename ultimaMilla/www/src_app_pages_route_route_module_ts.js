(self["webpackChunkUltimaMilla"] = self["webpackChunkUltimaMilla"] || []).push([["src_app_pages_route_route_module_ts"],{

/***/ 5636:
/*!*****************************************************!*\
  !*** ./src/app/pages/route/route-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutePageRoutingModule": () => (/* binding */ RoutePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _route_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route.page */ 2872);




const routes = [
    {
        path: '',
        component: _route_page__WEBPACK_IMPORTED_MODULE_0__.RoutePage
    }
];
let RoutePageRoutingModule = class RoutePageRoutingModule {
};
RoutePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RoutePageRoutingModule);



/***/ }),

/***/ 4332:
/*!*********************************************!*\
  !*** ./src/app/pages/route/route.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutePageModule": () => (/* binding */ RoutePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _route_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-routing.module */ 5636);
/* harmony import */ var _route_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route.page */ 2872);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-useful-swiper */ 9254);









let RoutePageModule = class RoutePageModule {
};
RoutePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _route_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_8__.NgxUsefulSwiperModule
        ],
        declarations: [_route_page__WEBPACK_IMPORTED_MODULE_1__.RoutePage]
    })
], RoutePageModule);



/***/ }),

/***/ 2872:
/*!*******************************************!*\
  !*** ./src/app/pages/route/route.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutePage": () => (/* binding */ RoutePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_route_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./route.page.html */ 5854);
/* harmony import */ var _route_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route.page.scss */ 7498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local.service */ 5298);
/* harmony import */ var src_app_services_uihelper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/uihelper.service */ 1196);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/geolocation */ 1091);
/* harmony import */ var src_app_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.config.service */ 3730);








let RoutePage = class RoutePage {
    constructor(localService, helper, app) {
        this.localService = localService;
        this.helper = helper;
        this.app = app;
        this.cargandoLocales = false;
        this.cargaError = '';
        this.locales = [];
        this.fecha = new Date();
        this.googlemaps = "https://www.google.com/maps/dir/";
        this.config = {
            slidesPerView: 3,
            spaceBetween: 10,
            direction: 'vertical',
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        };
        this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        //this.cargaLocales();
    }
    ionViewWillEnter() {
        this.cargaLocales();
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.refresh();
            event.target.complete();
        });
    }
    refresh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var loader = yield this.helper.showLoader("Cargando");
            yield this.cargaLocales();
            loader.dismiss();
        });
    }
    cargaLocales() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var loader = yield this.helper.showLoader("Cargando");
            this.cargandoLocales = true;
            try {
                this.localjson = JSON.parse('{"idRuta":1416006,"fhViaje":"2024-07-05T22:00:00","conductor":"7296614-7-RICARDO HOLASCO QUEZADA MUÑOZ","origen":"Puerto Valparaiso","idLocal":10281,"codigo":"7681","local":"Centro Saam huechuraba","direccion":"Dominicos 7171","secuencia":1,"viaje":609185,"patenteTracto":"BKVK90","patenteCarro":"JC2374","rutaEstado":1,"rpIdEstadoEntrega":14,"idRp":2343594,"inicioDescarga":"","finDescarga":""}');
                //const req = await this.localService.getLocales(viaje, patente);
                this.locales.push(this.localjson, this.localjson, this.localjson, this.localjson);
                loader.dismiss();
                //this.locales=[req.data[0],req.data[0],req.data[0],req.data[0]]
            }
            catch (error) {
                loader.dismiss();
                this.helper.showError(error);
            }
            this.agregarmapa();
        });
    }
    abrirmapa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // stop here if form is invalid
            const usarGPS = 1;
            var loader = yield this.helper.showLoader("Cargando");
            //alert(usarGPS)
            const permisos = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.checkPermissions();
            if (usarGPS == 1) {
                if (permisos.location == 'denied' || permisos.location == 'prompt') {
                    yield loader.dismiss();
                    this.helper.showError("debe tener el GPS activo y permitir el uso de este a la aplicacion");
                    return;
                }
                else {
                    try {
                        yield loader.dismiss();
                        const location = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.getCurrentPosition();
                        const dir = encodeURIComponent('dominicos 7171, huechuraba');
                        const mapaURL = `${this.googlemaps}${location.coords.latitude},${location.coords.longitude}/${dir} `;
                        window.open(mapaURL, '_system');
                    }
                    catch (_a) {
                        console.log("fallo la creacion de la url del mapa");
                    }
                }
            }
            else if (permisos.location == 'denied' || permisos.location == 'prompt') {
                yield loader.dismiss();
                const dir = encodeURIComponent('dominicos 7171, huechuraba');
                const mapaURL = `${this.googlemaps}${dir} `;
                window.open(mapaURL, '_system');
            }
            else {
                yield loader.dismiss();
                const location = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.getCurrentPosition();
                const dir = encodeURIComponent('dominicos 7171, huechuraba');
                const mapaURL = `${this.googlemaps}${location.coords.latitude},${location.coords.longitude}/${dir} `;
                window.open(mapaURL, '_system');
            }
        });
    }
    agregarmapa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.locales) {
                try {
                    const location = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.getCurrentPosition();
                    for (let index = 0; index < this.locales.length; index++) {
                        const direccion = encodeURIComponent('dominicos 7171, huechuraba');
                        this.locales[index].mapaURL = `${this.googlemaps}${location.coords.latitude},${location.coords.longitude}/${direccion} `;
                    }
                }
                catch (_a) {
                    console.log("fallo la creacion de la url del mapa");
                }
            }
        });
    }
};
RoutePage.ctorParameters = () => [
    { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService },
    { type: src_app_services_uihelper_service__WEBPACK_IMPORTED_MODULE_3__.UIHelper },
    { type: src_app_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__.AppConfigService }
];
RoutePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-route',
        template: _raw_loader_route_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_route_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RoutePage);



/***/ }),

/***/ 7498:
/*!*********************************************!*\
  !*** ./src/app/pages/route/route.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: #1776bc;\n}\n\n.gridprincipal {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: column;\n  margin-left: 5vw;\n  margin-right: 5vw;\n  height: -webkit-fill-available;\n}\n\n.datos-viaje {\n  margin-top: 0%;\n  align-content: center;\n  text-align: left;\n  font-weight: bold;\n}\n\n.izq {\n  padding-right: 5%;\n  border-right-style: solid;\n  border-right-width: 1px;\n  border-color: white;\n  color: #ffa600;\n  align-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.der {\n  padding-left: 5%;\n  color: white;\n  align-items: center;\n  display: flex;\n}\n\n.row {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-color: white;\n}\n\n.tituloLocales {\n  margin-top: 1%;\n  margin-bottom: 2%;\n  color: white;\n  display: flex;\n  font-weight: bold;\n  font-size: 1.3rem;\n  align-items: center;\n}\n\n.carrusel {\n  overflow: scroll;\n  justify-content: center;\n  height: 100%;\n}\n\n.swiper-slide {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 1.7vh;\n  border-radius: 1rem;\n  background: rgba(255, 255, 255, 0.671);\n  /* Center slide text vertically */\n  align-items: center;\n  font-weight: bold;\n  color: rgba(255, 145, 0, 0.986);\n}\n\n.swiper-slide2 {\n  background: transparent !important;\n  /* Center slide text vertically */\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-weight: bold;\n  color: rgba(255, 145, 0, 0.986);\n}\n\n.locales {\n  justify-content: center;\n  align-items: center;\n  margin: 1vw;\n}\n\n.mapa {\n  align-content: center;\n  justify-content: center;\n}\n\n.datoslocal {\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n}\n\n.direccionlocal {\n  font-size: small;\n}\n\n.botonesLocales {\n  flex-wrap: wrap;\n  align-self: center;\n  justify-content: flex-end;\n}\n\nbutton {\n  background-color: transparent;\n  padding: 0%;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nion-img {\n  height: 40px;\n  width: 40px;\n  margin: 5px;\n}\n\nion-grid:active {\n  box-shadow: inset 2px 3px 4px #000;\n  filter: saturate(50%);\n  border-radius: 1rem;\n}\n\nion-img:active {\n  box-shadow: inset 2px 3px 4px #000;\n  filter: saturate(50%);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtFQUNBLGlDQUFBO0VBSUEsYUFBQTtFQUlBLDZCQUFBO0VBSUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFFSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBRUkscUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBRUksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtBQUZKOztBQUtBO0VBRUksZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFNQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1BO0VBQ0ksd0JBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1BO0VBQ0ksa0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFISiIsImZpbGUiOiJyb3V0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTc3NmJjO1xyXG59XHJcblxyXG4uZ3JpZHByaW5jaXBhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICAgIG1hcmdpbi1yaWdodDogNXZ3O1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4uZGF0b3MtdmlhamUge1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5penEge1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE2NiwgMCk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0dWxvTG9jYWxlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcnJ1c2VsIHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS43dmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3MSk7XHJcbiAgICAvKiBDZW50ZXIgc2xpZGUgdGV4dCB2ZXJ0aWNhbGx5ICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDE0NSwgMCwgMC45ODYpO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLyogQ2VudGVyIHNsaWRlIHRleHQgdmVydGljYWxseSAqL1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQ1LCAwLCAwLjk4Nik7XHJcbn1cclxuXHJcbi5sb2NhbGVzIHtcclxuICAgIC8vZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMXZ3O1xyXG59XHJcblxyXG4ubWFwYSB7XHJcbiAgICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdG9zbG9jYWwge1xyXG4gICAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZGlyZWNjaW9ubG9jYWwge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmJvdG9uZXNMb2NhbGVzIHtcclxuICAgIC8vZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDAlXHJcbn1cclxuXHJcbltoaWRkZW5dIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5pb24tZ3JpZDphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDNweCA0cHggIzAwMDtcclxuICAgIGZpbHRlcjogc2F0dXJhdGUoNTAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbmlvbi1pbWc6YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAzcHggNHB4ICMwMDA7XHJcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */");

/***/ }),

/***/ 5854:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/route/route.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n<ion-content fullscreen>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <div class=\"gridprincipal\">\r\n        <ion-row>\r\n            <ion-grid class=\"datos-viaje\">\r\n                <ion-row class=\"row\">\r\n                    <ion-col class=\"izq \">\r\n                        <img src=\"../assets/icon/icons/qmtls-14.png\" class=\"img-btn no-img icon-bd\" height=\"40\" width=\"40\">\r\n                        <ion-col>Patentes</ion-col>\r\n\r\n                    </ion-col>\r\n                    <ion-col class=\"der\">\r\n                        bkvk90 / asdf12\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"row\">\r\n                    <ion-col class=\"izq\">\r\n                        <img src=\"../assets/icon/icons/qmtls-11.png\" class=\"img-btn no-img icon-bd\" height=\"40\" width=\"40\"> Hoja de Ruta\r\n                    </ion-col>\r\n                    <ion-col class=\"der\">\r\n                        153234\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"row\">\r\n                    <ion-col class=\"izq\">\r\n                        <img src=\"../assets/icon/icons/qmtls-14.png\" class=\"img-btn no-img icon-bd\" height=\"40\" width=\"40\">\r\n                        <ion-col>Transportista</ion-col>\r\n                    </ion-col>\r\n                    <ion-col class=\"der\">\r\n                        envios rapidos ltda\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"row\">\r\n                    <ion-col class=\"izq\">\r\n                        <img src=\"../assets/icon/icons/qmtls-11.png\" class=\"img-btn no-img icon-bd\" height=\"40\" width=\"40\">\r\n                        <ion-col>CD</ion-col>\r\n                    </ion-col>\r\n                    <ion-col class=\"der\">\r\n                        Bodega central\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"izq\">\r\n                        <img src=\"../assets/icon/icons/qmtls-14.png\" class=\"img-btn no-img icon-bd\" height=\"40\" width=\"40\">\r\n                        <ion-col>Estado</ion-col>\r\n                    </ion-col>\r\n                    <ion-col class=\"der\">\r\n                        Pendiente\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"tituloLocales\">\r\n            <img src=\"../assets/icon/icons/qmtls-15.png\" class=\"img-btn no-img icon-bd\" height=\"40\" width=\"40\">Locales\r\n        </ion-row>\r\n\r\n        <div class=\"carrusel\">\r\n            <div>\r\n                <div class=\"swiper-slide\" *ngFor=\"let local of locales; \">\r\n\r\n                    <ion-grid>\r\n                        <ion-row class=\"locales\">\r\n\r\n                            <button (click)=\"abrirmapa(local.direccion)\">\r\n                                        <ion-img src=\"../assets/icon/icons/qmtls-25.png\" class=\"img-btn no-img icon-bd\" height=\"40px\" width=\"40px\" ></ion-img>\r\n                                    </button>\r\n\r\n\r\n                            <ion-col class=datoslocal routerLink=\"/route-detail/{{local.idRp}}\">\r\n                                <div>{{local.local}} </div>\r\n                                <div class=\"direccionlocal\">{{local.direccion}}</div>\r\n                            </ion-col>\r\n\r\n                            <div class=\"botonesLocales\" routerLink=\"/route-detail/{{local.idRp}}\">\r\n                                <img [hidden]=\"(local.rpIdEstadoEntrega==13) || (local.rpIdEstadoEntrega==14)\" src=\"../assets/icon/icons/qmtls-16.png\" class=\"img-btn no-img icon-bd\" height=\"40\" width=\"40\">\r\n                                <img [hidden]=\"local.rpIdEstadoEntrega!=13 \" src=\"../assets/icon/icons/qmtls-13.png\" class=\"img-btn no-img icon-bd\" height=\"40\" width=\"40\">\r\n                                <img [hidden]=\"local.rpIdEstadoEntrega!=14 \" src=\"../assets/icon/icons/qmtls-10.png\" class=\"img-btn no-img icon-bd\" height=\"40\" width=\"40\">\r\n                            </div>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n\r\n\r\n                </div>\r\n                <div [hidden]=\"locales.length>= 2\" class=\"swiper-slide2\">\r\n\r\n                </div>\r\n                <div [hidden]=\"locales.length >= 3\" class=\"swiper-slide2\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<app-footer></app-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_route_route_module_ts.js.map