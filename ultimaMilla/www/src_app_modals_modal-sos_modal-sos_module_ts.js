(self["webpackChunkUltimaMilla"] = self["webpackChunkUltimaMilla"] || []).push([["src_app_modals_modal-sos_modal-sos_module_ts"],{

/***/ 3951:
/*!**************************************************************!*\
  !*** ./src/app/modals/modal-sos/modal-sos-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSosPageRoutingModule": () => (/* binding */ ModalSosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modal_sos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-sos.page */ 1468);




const routes = [
    {
        path: '',
        component: _modal_sos_page__WEBPACK_IMPORTED_MODULE_0__.ModalSosPage
    }
];
let ModalSosPageRoutingModule = class ModalSosPageRoutingModule {
};
ModalSosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalSosPageRoutingModule);



/***/ }),

/***/ 4721:
/*!******************************************************!*\
  !*** ./src/app/modals/modal-sos/modal-sos.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSosPageModule": () => (/* binding */ ModalSosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_sos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-sos-routing.module */ 3951);
/* harmony import */ var _modal_sos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-sos.page */ 1468);







let ModalSosPageModule = class ModalSosPageModule {
};
ModalSosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_sos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalSosPageRoutingModule
        ],
        declarations: [_modal_sos_page__WEBPACK_IMPORTED_MODULE_1__.ModalSosPage]
    })
], ModalSosPageModule);



/***/ }),

/***/ 1468:
/*!****************************************************!*\
  !*** ./src/app/modals/modal-sos/modal-sos.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSosPage": () => (/* binding */ ModalSosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modal_sos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal-sos.page.html */ 2289);
/* harmony import */ var _modal_sos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-sos.page.scss */ 6517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_uihelper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/uihelper.service */ 1196);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/geolocation */ 1091);








let ModalSosPage = class ModalSosPage {
    constructor(sos, modal, helper) {
        this.sos = sos;
        this.modal = modal;
        this.helper = helper;
        this.alertas = [];
    }
    ngOnInit() {
        this.load();
    }
    load() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const request = yield this.sos.getMensajes();
                this.alertas = request.data;
            }
            catch (error) {
            }
        });
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.modal.dismiss('x');
        });
    }
    send(alert) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loader = yield this.helper.showLoader();
            try {
                //loader.message = this.lang.text['cargando_localizacion'];
                loader.message = 'cargando localizacion';
                const location = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.getCurrentPosition();
                //loader.message = this.lang.text['sos_enviando'];
                const request = yield this.sos.postAlerta(alert.idMensaje, location.coords.latitude, location.coords.longitude);
                yield loader.dismiss();
                yield this.helper.showAlert(request.data[0].mensajeVuelta);
                this.modal.dismiss();
            }
            catch (error) {
                yield loader.dismiss();
                if (error instanceof GeolocationPositionError) {
                    this.helper.showError({ msg: error.message });
                }
                else {
                    this.helper.showError(error);
                }
            }
        });
    }
};
ModalSosPage.ctorParameters = () => [
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertSOSService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_uihelper_service__WEBPACK_IMPORTED_MODULE_3__.UIHelper }
];
ModalSosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-modal-sos',
        template: _raw_loader_modal_sos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_sos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalSosPage);



/***/ }),

/***/ 6517:
/*!******************************************************!*\
  !*** ./src/app/modals/modal-sos/modal-sos.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1zb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2289:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-sos/modal-sos.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content fullscreen scrollY=\"false\">\n    <div class=\"page\">\n        <div class=\"v-stack\">\n            <h2>SOS</h2>\n            <div class=\"box link\" *ngFor=\"let i of alertas\" (click)=\"send(i)\">\n                <h2 class=\"title\">{{i.descripcion}}</h2>\n            </div>\n\n            <div class=\"box link\" style=\"width: 25%;\" (click)=\"close()\">\n                <h2 class=\"title\">X</h2>\n            </div>\n        </div>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-sos_modal-sos_module_ts.js.map