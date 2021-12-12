(self["webpackChunkUltimaMilla"] = self["webpackChunkUltimaMilla"] || []).push([["src_app_pages_loader_loader_module_ts"],{

/***/ 7377:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/definitions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 2138:
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7377);

const App = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('App', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_app_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 6141)).then(m => new m.AppWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1314:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 2810:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Device": () => (/* binding */ Device)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1314);

const Device = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Device', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_device_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7811)).then(m => new m.DeviceWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1369:
/*!*******************************************************!*\
  !*** ./src/app/pages/loader/loader-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPageRoutingModule": () => (/* binding */ LoaderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.page */ 7281);




const routes = [
    {
        path: '',
        component: _loader_page__WEBPACK_IMPORTED_MODULE_0__.LoaderPage
    }
];
let LoaderPageRoutingModule = class LoaderPageRoutingModule {
};
LoaderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoaderPageRoutingModule);



/***/ }),

/***/ 8487:
/*!***********************************************!*\
  !*** ./src/app/pages/loader/loader.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPageModule": () => (/* binding */ LoaderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _loader_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader-routing.module */ 1369);
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.page */ 7281);







let LoaderPageModule = class LoaderPageModule {
};
LoaderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loader_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoaderPageRoutingModule
        ],
        declarations: [_loader_page__WEBPACK_IMPORTED_MODULE_1__.LoaderPage]
    })
], LoaderPageModule);



/***/ }),

/***/ 7281:
/*!*********************************************!*\
  !*** ./src/app/pages/loader/loader.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPage": () => (/* binding */ LoaderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_loader_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./loader.page.html */ 4846);
/* harmony import */ var _loader_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.page.scss */ 5219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.config.service */ 3730);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/app */ 2138);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/device */ 2810);
/* harmony import */ var _services_uihelper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/uihelper.service */ 1196);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);










let LoaderPage = class LoaderPage {
    constructor(app, helper, router) {
        this.app = app;
        this.helper = helper;
        this.router = router;
        this.params = [];
        this.cargaron = false;
    }
    ngOnInit() {
        this.router.navigateByUrl('login', { replaceUrl: true });
    }
    cargarTodo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.checkVersion();
                yield this.app.TieneIdioma();
                yield this.app.getParams();
                yield this.app.ListarIcons();
                this.app.Listaidiomas();
            }
            catch (error) {
                this.helper.showError(error);
            }
            if (this.app.cargaron) {
                this.router.navigateByUrl('login', { replaceUrl: true });
            }
        });
    }
    checkVersion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const request = yield this.app.getLastVersion();
                const versionData = request.data[0];
                const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_5__.Device.getInfo();
                if (versionData.moveVersionCode > src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.VERSION_CODE) {
                    const alert = yield this.helper.confirm(`Nueva versión disponible: ${versionData.moveVersion} ${versionData.moveCambios}`, 'Actualizar', 'Cerrar');
                    if (alert) {
                        if (info.platform == 'ios') {
                            window.open(versionData.moveVersionLinkIOS, '_system');
                        }
                        else {
                            window.open(versionData.moveVersionLinkIOS, '_system');
                        }
                        location.reload();
                    }
                    else {
                        _capacitor_app__WEBPACK_IMPORTED_MODULE_3__.App.exitApp();
                    }
                }
            }
            catch (error) {
            }
        });
    }
};
LoaderPage.ctorParameters = () => [
    { type: _services_app_config_service__WEBPACK_IMPORTED_MODULE_2__.AppConfigService },
    { type: _services_uihelper_service__WEBPACK_IMPORTED_MODULE_6__.UIHelper },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
LoaderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-loader',
        template: _raw_loader_loader_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_loader_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoaderPage);



/***/ }),

/***/ 5219:
/*!***********************************************!*\
  !*** ./src/app/pages/loader/loader.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".fondo {\n  background-color: #1b6db1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.spinner {\n  height: 10%;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoibG9hZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI2ZGIxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ 4846:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loader/loader.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n    <div class=\"fondo\">\n        <img src=\"../assets/icon/icons/spinnertransparente.gif\" class=\"spinner\">\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_loader_loader_module_ts.js.map