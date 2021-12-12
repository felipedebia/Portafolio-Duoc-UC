(self["webpackChunkUltimaMilla"] = self["webpackChunkUltimaMilla"] || []).push([["src_app_pages_route-detail_route-detail_module_ts"],{

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3646);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 4662);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent
        ],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./footer.component.html */ 2517);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 2251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FooterComponent);



/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 7911);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 4993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.config.service */ 3730);






let HeaderComponent = class HeaderComponent {
    constructor(router, app) {
        this.router = router;
        this.app = app;
    }
    ngOnInit() { }
    onClick() {
        this.router.navigateByUrl('alerta', { replaceUrl: true });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_app_config_service__WEBPACK_IMPORTED_MODULE_2__.AppConfigService }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderComponent);



/***/ }),

/***/ 438:
/*!*******************************************************************!*\
  !*** ./src/app/pages/route-detail/route-detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteDetailPageRoutingModule": () => (/* binding */ RouteDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _route_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-detail.page */ 1579);




const routes = [
    {
        path: '',
        component: _route_detail_page__WEBPACK_IMPORTED_MODULE_0__.RouteDetailPage
    }
];
let RouteDetailPageRoutingModule = class RouteDetailPageRoutingModule {
};
RouteDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RouteDetailPageRoutingModule);



/***/ }),

/***/ 3146:
/*!***********************************************************!*\
  !*** ./src/app/pages/route-detail/route-detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteDetailPageModule": () => (/* binding */ RouteDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _route_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-detail-routing.module */ 438);
/* harmony import */ var _route_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-detail.page */ 1579);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let RouteDetailPageModule = class RouteDetailPageModule {
};
RouteDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _route_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.RouteDetailPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_route_detail_page__WEBPACK_IMPORTED_MODULE_1__.RouteDetailPage]
    })
], RouteDetailPageModule);



/***/ }),

/***/ 1579:
/*!*********************************************************!*\
  !*** ./src/app/pages/route-detail/route-detail.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteDetailPage": () => (/* binding */ RouteDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_route_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./route-detail.page.html */ 3243);
/* harmony import */ var _route_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-detail.page.scss */ 651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local.service */ 5298);
/* harmony import */ var src_app_services_uihelper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/uihelper.service */ 1196);
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.config.service */ 3730);










let RouteDetailPage = class RouteDetailPage {
    constructor(formBuilder, ActivatedRoute, authenticationService, router, localService, helper, app) {
        this.formBuilder = formBuilder;
        this.ActivatedRoute = ActivatedRoute;
        this.authenticationService = authenticationService;
        this.router = router;
        this.localService = localService;
        this.helper = helper;
        this.app = app;
        this.actualizando = false;
        this.cargaError = '';
        this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.refresh();
            event.target.complete();
        });
    }
    refresh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var loader = yield this.helper.showLoader("cargando");
            yield this.cargaLocal();
            loader.dismiss();
        });
    }
    cargaLocal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var rplocal = this.local.idRp;
            var loader = yield this.helper.showLoader(this.app.textos.loading);
            try {
                const req = yield this.localService.getLocal(rplocal);
                this.local = req.data[0];
                loader.dismiss();
            }
            catch (error) {
                loader.dismiss();
                this.helper.showError(error);
            }
            this.actualizando = false;
        });
    }
    iniciarDescarga() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // var rplocal = this.local.idRp
            var loader = yield this.helper.showLoader("cargando");
            try {
                //const req = await this.localService.inicioDescarga(rplocal);
                this.inicioDescarga = 1;
                this.fechaInicio = new Date;
                loader.dismiss();
                this.helper.showAlert("descarga iniciada correctamente");
            }
            catch (error) {
                loader.dismiss();
                this.helper.showError(error);
            }
        });
    }
    finalizarDescarga() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // var rplocal = this.local.idRp
            var loader = yield this.helper.showLoader("cargando");
            try {
                //const req = await this.localService.finDescarga(rplocal);
                //this.local= req.data[0];
                this.finDescarga = 1;
                this.fechaFin = new Date;
                loader.dismiss();
                this.helper.showAlert("descarga finalizada correctamente");
            }
            catch (error) {
                loader.dismiss();
                this.helper.showError(error);
            }
        });
    }
};
RouteDetailPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService },
    { type: src_app_services_uihelper_service__WEBPACK_IMPORTED_MODULE_4__.UIHelper },
    { type: _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__.AppConfigService }
];
RouteDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-route-detail',
        template: _raw_loader_route_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_route_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RouteDetailPage);



/***/ }),

/***/ 2251:
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".footer {\n  background-color: #FAFAFA;\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n}\n\n.icon-footer {\n  height: 2rem;\n  width: auto;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbi1mb290ZXIge1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iXX0= */");

/***/ }),

/***/ 4993:
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* Transparent standard */\nion-toolbar {\n  --background: rgba(165, 165, 165, 0.514);\n  border-bottom-style: groove;\n  border-top: groove;\n  border-top-width: 2px;\n  border-bottom-width: 2px;\n}\nion-back-button {\n  color: white;\n}\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n  background: var(--ion-color-primary);\n}\n/* Remove bottom border on md */\n.header-md::after {\n  background-image: none;\n}\n/* Remove bottom border on ios */\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n.header {\n  padding-top: 2vh;\n  background-color: #1b6db1;\n}\nion-grid {\n  display: flex;\n  justify-content: space-around;\n  padding: 0px;\n  border-width: 0px;\n  align-items: baseline;\n}\nion-col {\n  padding: 0%;\n  align-items: center;\n}\n.col-centro {\n  justify-content: center;\n  text-align: center;\n}\n.col-derecha {\n  justify-content: center;\n  text-align: right;\n}\n.icon-centro {\n  width: auto;\n  height: 2rem;\n}\n.icon-derecha {\n  width: auto;\n  height: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSx5QkFBQTtBQUVBO0VBQ0ksd0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQUZKO0FBS0E7RUFDSSxZQUFBO0FBRko7QUFNQSx1Q0FBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtBQUpKO0FBUUEsK0JBQUE7QUFFQTtFQUNJLHNCQUFBO0FBTko7QUFVQSxnQ0FBQTtBQUVBO0VBQ0ksaUJBQUE7QUFSSjtBQVdBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQVJKO0FBV0E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQVJKO0FBV0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVdBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQVJKO0FBV0E7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBUkoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNlIHRoaXMgY3NzXHJcblxyXG4vKiBUcmFuc3BhcmVudCBzdGFuZGFyZCAqL1xyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNTE0KTtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGdyb292ZTtcclxuICAgIGJvcmRlci10b3A6IGdyb292ZTtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cclxuXHJcbi5zaG93LWJhY2tncm91bmQge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5cclxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gbWQgKi9cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBpb3MgKi9cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDJ2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjZkYjE7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbC1jZW50cm8ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2wtZGVyZWNoYSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uaWNvbi1jZW50cm8ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5pY29uLWRlcmVjaGEge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ 651:
/*!***********************************************************!*\
  !*** ./src/app/pages/route-detail/route-detail.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: #1776bc;\n}\n\n.mycontainer {\n  height: 100%;\n  width: 100vw;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.grilla {\n  margin-top: 2vh;\n  margin-left: 5vw;\n  margin-right: 5vw;\n  justify-content: center;\n}\n\nion-row {\n  justify-content: center;\n}\n\nion-col {\n  display: flex;\n}\n\nion-Card {\n  background-color: rgba(255, 255, 255, 0.705);\n  border-radius: 1rem;\n  display: flex;\n  width: -webkit-fill-available;\n  align-content: center;\n  flex-wrap: wrap;\n  padding: 1rem;\n  align-items: center;\n  justify-content: center;\n  margin: 0%;\n}\n\n.tituloAzul {\n  color: #004998;\n  font-weight: bold;\n  font-size: 1.5em;\n}\n\n.tituloAmarillo {\n  color: #ffa600;\n  font-weight: bold;\n  font-size: 1.3em;\n}\n\n.datoAzul {\n  color: #004998;\n}\n\n.row1 {\n  margin-bottom: 4vh;\n}\n\n.card1 {\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n}\n\n.localIcon {\n  margin-right: 5%;\n}\n\n.tituloAzul {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.row2 {\n  margin-bottom: 2vh;\n}\n\n.llegadaIcon {\n  margin-right: 5%;\n}\n\n.card3 {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n}\n\n.card4 {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n}\n\n.botonesDescarga {\n  display: flex;\n  background: transparent;\n  width: -webkit-fill-available;\n}\n\n.row5 {\n  margin-top: 2vh;\n  padding: 5px;\n}\n\n.img-start-stop {\n  height: 70px;\n  width: 70px;\n}\n\nion-card:active {\n  box-shadow: inset 2px 3px 4px #000;\n  filter: saturate(50%);\n  border-radius: 1rem;\n}\n\nion-img:active {\n  box-shadow: inset 2px 3px 4px #000;\n  filter: saturate(50%);\n  border-radius: 50%;\n}\n\nion-img {\n  height: 70px;\n  width: 70px;\n  margin: 5px;\n}\n\nion-img:active {\n  box-shadow: inset 2px 3px 4px #000;\n  filter: saturate(50%);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InJvdXRlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTc3NmJjO1xyXG59XHJcblxyXG4ubXljb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWxsYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5pb24tQ2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwJTtcclxufVxyXG5cclxuLnRpdHVsb0F6dWwge1xyXG4gICAgY29sb3I6ICMwMDQ5OTg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi50aXR1bG9BbWFyaWxsbyB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTY2LCAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxufVxyXG5cclxuLmRhdG9BenVsIHtcclxuICAgIGNvbG9yOiAjMDA0OTk4O1xyXG59XHJcblxyXG4ucm93MSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0dmg7XHJcbn1cclxuXHJcbi5jYXJkMSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcFxyXG59XHJcblxyXG4ubG9jYWxJY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi50aXR1bG9BenVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5yb3cyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxufVxyXG5cclxuLmxsZWdhZGFJY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5jYXJkMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNhcmQ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYm90b25lc0Rlc2NhcmdhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4ucm93NSB7XHJcbiAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5pbWctc3RhcnQtc3RvcCB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuaW9uLWNhcmQ6YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAzcHggNHB4ICMwMDA7XHJcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG5pb24taW1nOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggM3B4IDRweCAjMDAwO1xyXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSg1MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1pbWc6YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAzcHggNHB4ICMwMDA7XHJcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */");

/***/ }),

/***/ 2517:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-footer>\r\n    <div class=\"footer\">\r\n        <img src=\"../assets/icon/icons/logo-maipo.png\" class=\"icon-footer\">\r\n        <ion-title color=\"dark\"></ion-title>\r\n    </div>\r\n</ion-footer>");

/***/ }),

/***/ 7911:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"header\">\r\n\r\n    <ion-toolbar class=\"prop\">\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\" text=\"\" class=\"start\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n\r\n        <ion-grid>\r\n            <ion-col size=2>\r\n\r\n            </ion-col>\r\n            <ion-col size=4 class=\"col-centro\">\r\n                <img src=\"../assets/icon/icons/logo-maipo.png\" class=\"img-btn no-img icon-bd\" height=\"20\" width=auto class=\"icon-centro\">\r\n            </ion-col>\r\n            <ion-col size=3 class=\"col-derecha\">\r\n\r\n            </ion-col>\r\n        </ion-grid>\r\n\r\n\r\n    </ion-toolbar>\r\n\r\n</ion-header>");

/***/ }),

/***/ 3243:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/route-detail/route-detail.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n<ion-content fullscreen class=\"mycontainer\">\r\n\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-grid class=\"grilla\">\r\n        <ion-row class=\"row1\">\r\n            <ion-card class=\"card1\">\r\n                <img src=\"../assets/icon/icons/qmtls-15.png\" class=\"img-btn no-img icon-bd\" height=\"80\" width=\"80\" class=\"localIcon\">\r\n                <div>\r\n                    <div class=\"tituloAzul\">Local: VENDEDOR FALSO\r\n                    </div>\r\n                    <div class=\"datoAzul\">Direccion: CAlle Falsa 123 springfield</div>\r\n                </div>\r\n\r\n            </ion-card>\r\n        </ion-row>\r\n        <ion-row class=\"row2\">\r\n            <ion-card class=\"card2\">\r\n                <img src=\"../assets/icon/icons/qmtls-08.png\" class=\"img-btn no-img icon-bd\" height=\"70\" width=\"70\" class=\"localIcon\" class=\"llegadaIcon\">\r\n                <div>\r\n                    <div class=\"tituloAmarillo\"> LLegada estimada:\r\n                    </div>\r\n                    <label class=\"datoAzul\">'22-11-2021 - 15:00'Hrs</label>\r\n                </div>\r\n\r\n\r\n            </ion-card>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"row3\">\r\n            <ion-col size=6>\r\n                <ion-card class=\"card3\" (click)='iniciarDescarga()' [disabled]=\"inicioDescarga !=null\">\r\n                    <img src=\"../assets/icon/icons/qmtls-10.png\" class=\"img-btn no-img icon-bd img-start-stop\" height=\"70\" width=\"70\" class=\"localIcon\">\r\n                    <div class=\"tituloAmarillo\">\r\n                        Iniciar Viaje\r\n                    </div>\r\n                    <label class=\"datoAzul\">\r\n                            {{fechaInicio | date:'dd-mm-yyyy - hh:mm'}}\r\n                        </label>\r\n                </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n\r\n                <ion-card class=\"card4\" (click)='finalizarDescarga()' [disabled]=\"inicioDescarga ==null || finDescarga !=null\">\r\n                    <img src=\"../assets/icon/icons/qmtls-10.png\" class=\"img-btn no-img icon-bd img-start-stop\" height=\"70px\" width=\"70px\">\r\n                    <div class=\"tituloAmarillo\">\r\n                        Fin Viaje\r\n                    </div>\r\n                    <label class=\"datoAzul\">\r\n                            {{fechaInicio | date:'dd-mm-yyyy - hh:mm'}}\r\n                        </label>\r\n                </ion-card>\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"row5\" routerLink=\"/tomarfoto\">\r\n            <ion-img src=\"../assets/icon/icons/qmtls-17.png\" class=\"img-btn no-img icon-bd\" height=\"70px\" width=\"70px\" routerLink=\"/tomarfoto\"></ion-img>\r\n        </ion-row>\r\n\r\n    </ion-grid>\r\n</ion-content>\r\n<app-footer></app-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_route-detail_route-detail_module_ts.js.map