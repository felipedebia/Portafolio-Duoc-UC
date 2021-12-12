(self["webpackChunkUltimaMilla"] = self["webpackChunkUltimaMilla"] || []).push([["src_app_pages_inicio_inicio_module_ts"],{

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

/***/ 5652:
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 5237);




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 3633:
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 5652);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 5237);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 5237:
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inicio.page.html */ 2531);
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss */ 583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _services_uihelper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/uihelper.service */ 1196);
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.config.service */ 3730);










let InicioPage = class InicioPage {
    constructor(formBuilder, router, helper, app, authenticationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.helper = helper;
        this.app = app;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.lang = 1;
        this.error = '';
        this.errorMessages = {
            viaje: [{ type: 'required', message: "debe ingresar un correo" }],
            patente: [
                { type: 'required', message: "debe ingresar una contraseña" },
            ]
        };
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            viaje: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            patente: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var loader = yield this.helper.showLoader('Cargando');
            this.submitted = true;
            this.authenticationService.login(this.f.viaje.value, this.f.patente.value)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)())
                .subscribe(data => {
                this.router.navigate(['/route']);
                loader.dismiss();
            }, error => {
                this.error = (error.Err == true) ? error.Msg : "algo fallo";
                loader.dismiss();
                this.helper.showError(error);
            });
            loader.dismiss();
        });
    }
};
InicioPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_uihelper_service__WEBPACK_IMPORTED_MODULE_3__.UIHelper },
    { type: _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__.AppConfigService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InicioPage);



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

/***/ 583:
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --keyboard-offset: 0px!important;\n}\n\nion-toolbar {\n  --background: rgba(165, 165, 165, 0.514);\n  border-bottom-style: groove;\n  border-top: groove;\n  border-top-width: 2px;\n  border-bottom-width: 2px;\n}\n\n.show-background {\n  border-style: none;\n  background: var(--ion-color-primary);\n  justify-content: center;\n  align-items: center;\n}\n\n.header {\n  padding-top: 2vh;\n  background-color: #1b6db1;\n}\n\n.divheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon-centro {\n  width: auto;\n  height: 2rem;\n}\n\n.error-message {\n  text-align: center;\n}\n\n.q-select {\n  min-width: 50%;\n  text-align: center;\n  padding: 0.25rem 1rem;\n  margin-top: 0.25rem;\n  background-color: white;\n  border: 2px solid;\n  border-color: #004a9a;\n  border-radius: 20px;\n}\n\n.content {\n  display: flex;\n  background-color: #207eca;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n}\n\n.start {\n  display: none !important;\n}\n\n.card {\n  background-color: #ffffffcc;\n  border-radius: 1rem;\n}\n\nion-grid {\n  flex-direction: column;\n  display: flex;\n}\n\n.row1 {\n  display: flex;\n  justify-content: center;\n}\n\nion-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.label-datos {\n  margin-top: 1rem;\n}\n\n.principal {\n  height: 50px;\n  width: auto;\n  justify-self: center;\n}\n\n.hojaderuta {\n  margin-right: 5px;\n  height: 3rem;\n  width: 3rem;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n}\n\n/* Every row inside .login-container is defined with p tags */\n\n.login p {\n  padding: 12px;\n  width: 80%;\n  height: 80%;\n}\n\n.label {\n  border-width: 0.125rem;\n  border-right: none;\n  border-left: none;\n  border-top: none;\n  border-bottom-color: #1b6db1;\n  background: transparent;\n}\n\n.login input {\n  box-sizing: border-box;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  outline: 0;\n  font-family: inherit;\n  font-size: normal;\n  text-align: left;\n}\n\n.select {\n  display: flex;\n  justify-content: center;\n}\n\n::placeholder {\n  color: #fbb800;\n}\n\n.submit {\n  background-color: transparent;\n  color: #1f56a8;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 50%;\n}\n\nion-img {\n  height: 4rem;\n  width: 4rem;\n}\n\nion-img:active {\n  box-shadow: inset 2px 3px 4px #000;\n  filter: saturate(50%);\n  border-radius: 5rem;\n}\n\n.q-select {\n  min-width: 50%;\n  text-align: center;\n  padding: 0.25rem 1rem;\n  margin-top: 0.25rem;\n  background-color: white;\n  border: 2px solid var(--ion-color-secondary);\n  color: var(--ion-color-primary);\n  border-radius: 20px;\n}\n\n.disable {\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksd0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFHQSw2REFBQTs7QUFFQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKIiwiZmlsZSI6ImluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWtleWJvYXJkLW9mZnNldDogMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNTE0KTtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGdyb292ZTtcclxuICAgIGJvcmRlci10b3A6IGdyb292ZTtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxufVxyXG5cclxuLnNob3ctYmFja2dyb3VuZCB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDJ2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjZkYjE7XHJcbn1cclxuXHJcbi5kaXZoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24tY2VudHJvIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5xLXNlbGVjdCB7XHJcbiAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNGE5YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA3ZWNhO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnN0YXJ0IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmNjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5yb3cxIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmxhYmVsLWRhdG9zIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5wcmluY2lwYWwge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmhvamFkZXJ1dGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICB3aWR0aDogM3JlbTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG5cclxuLyogRXZlcnkgcm93IGluc2lkZSAubG9naW4tY29udGFpbmVyIGlzIGRlZmluZWQgd2l0aCBwIHRhZ3MgKi9cclxuXHJcbi5sb2dpbiBwIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuMTI1cmVtO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFiNmRiMTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmYmI4MDA7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogcmdiKDMxLCA4NiwgMTY4KTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIHdpZHRoOiA0cmVtO1xyXG59XHJcblxyXG5pb24taW1nOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggM3B4IDRweCAjMDAwO1xyXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSg1MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxufVxyXG5cclxuLnEtc2VsZWN0IHtcclxuICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLjI1cmVtIDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5kaXNhYmxlIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufSJdfQ== */");

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

/***/ 2531:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n    <div class=\"content\">\r\n\r\n        <ion-card class=\"card\">\r\n\r\n            <ion-grid>\r\n\r\n                <ion-row class=\"row1\">\r\n                    <img src=\"../assets/icon/icons/logo-maipo.png\" class=\"principal\">\r\n                </ion-row>\r\n\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <ion-row class=\"label-datos\">\r\n\r\n                        <!-- <ion-icon class=\"hojaderuta\" name=\"image\"></ion-icon> -->\r\n                        <img src=\"../assets/icon/icons/qmtls-09.png\" class=\"hojaderuta\">\r\n\r\n                        <input type=\"email\" class=\"label\" formControlName=\"viaje\" name=\"viaje\" placeholder=\"correo\" />\r\n\r\n\r\n                    </ion-row>\r\n\r\n                    <div *ngFor=\"let error of errorMessages.viaje\" class=\"error-message\">\r\n                        <ng-container *ngIf=\"f.viaje?.touched && f.viaje.errors?.required\">\r\n                            <small class=\"error-message\">{{error.message}}</small>\r\n                        </ng-container>\r\n                    </div>\r\n\r\n                    <ion-row class=\"label-datos\">\r\n\r\n                        <!-- <ion-icon class=\"hojaderuta\" name=\"image\"></ion-icon> -->\r\n                        <img src=\"../assets/icon/icons/qmtls-14.png\" class=\"hojaderuta\">\r\n                        <input class=\"label\" type=\"password\" formControlName=\"patente\" name=\"patente\" placeholder=\"clave\" oninput=\"this.value = this.value.toUpperCase()\" />\r\n\r\n\r\n                    </ion-row>\r\n\r\n                    <div *ngFor=\"let error of errorMessages.patente\" class=\"error-message\">\r\n                        <ng-container *ngIf=\"f.patente?.touched && f.patente.errors?.required\">\r\n                            <small class=\"error-message\">{{error.message}}</small>\r\n                        </ng-container>\r\n                    </div>\r\n\r\n                    <ion-row style=\"justify-content: center\">\r\n\r\n                        <!-- <ion-icon class=\"hojaderuta\" name=\"image\" ></ion-icon> -->\r\n                        <button class=\"submit\" type=\"submit\" [disabled]=\"f.viaje.errors?.required || f.patente.errors?.required\">\r\n                            <ion-img src=\"../assets/icon/icons/qmtls_next.png\" class=\"hojaderuta\"></ion-img>\r\n                        </button>\r\n\r\n                    </ion-row>\r\n\r\n                </form>\r\n\r\n            </ion-grid>\r\n        </ion-card>\r\n    </div>\r\n</ion-content>\r\n\r\n<app-footer></app-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inicio_inicio_module_ts.js.map