"use strict";
(self["webpackChunkmoneyguard"] = self["webpackChunkmoneyguard"] || []).push([["main"],{

/***/ 3925:
/*!**************************************************!*\
  !*** ./src/_components/about/about.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);





const _c0 = function () { return { version: "2.6.0" }; };
class AboutComponent {
    constructor(translate) {
        this.translate = translate;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 11, vars: 8, consts: [["src", "assets/icons/icon-35x35.png", "alt", "MoneyGuard", 2, "float", "left"], ["mat-dialog-title", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MoneyGuard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, "about.version", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "about.close"));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: [".mat-card[_ngcontent-%COMP%] {\n    margin-bottom: 10px;    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgICAgXG59Il19 */"] });


/***/ }),

/***/ 480:
/*!**********************************************************!*\
  !*** ./src/_components/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _services_componentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/componentBase */ 4945);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about/about.component */ 3925);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/url.constants */ 263);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ 8907);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 9975);



















class DashboardComponent extends _services_componentBase__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
    constructor(_userService, router, _datePipe, changeDetectorRef, media, translate, aboutDialog) {
        super(changeDetectorRef, media);
        this._userService = _userService;
        this.router = router;
        this._datePipe = _datePipe;
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
        this.translate = translate;
        this.aboutDialog = aboutDialog;
        this.userName = '';
        this.actualPageTitle = '';
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd))
            .subscribe((event) => {
            this.actualPageTitle = this.getPageTitle(event.url);
        });
    }
    ngOnInit() {
        this._subscriptions.add(this._userService.userName
            .subscribe((username) => {
            this.userName = username;
        }));
    }
    routeDiario() {
        const today = this._datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DASHBOARD, _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DIARIO, today]);
    }
    routeMensual() {
        const month = this._datePipe.transform(new Date(), 'yyyy-MM');
        this.router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DASHBOARD, _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.MENSUAL, month, 'none']);
    }
    routeAnual() {
        this.router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DASHBOARD, _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.ANUAL, new Date().getFullYear(), 'none']);
    }
    routeHistorico() {
        this.router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DASHBOARD, _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.HISTORICO]);
    }
    routeConceptos() {
        this.router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DASHBOARD, _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.CONCEPTOS]);
    }
    routeUserProfile() {
        this.router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DASHBOARD, _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.USERS, _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.USERPROFILE]);
    }
    logout() {
        this._userService.logout();
        this.router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.LOGIN]);
    }
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        super.ngOnDestroy();
    }
    about() {
        this.aboutDialog.open(_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, {
            width: '250px'
        });
    }
    getPageTitle(url) {
        const prefix = '/' + _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DASHBOARD + '/';
        if (url.startsWith(prefix + _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DIARIO)) {
            return ' - ' + this.translate.instant('menu.daily');
        }
        if (url.startsWith(prefix + _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.MENSUAL)) {
            return ' - ' + this.translate.instant('menu.monthly');
        }
        if (url.startsWith(prefix + _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.ANUAL)) {
            return ' - ' + this.translate.instant('menu.annual');
        }
        if (url.startsWith(prefix + _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.HISTORICO)) {
            return ' - ' + this.translate.instant('menu.historic');
        }
        if (url.startsWith(prefix + _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.CONCEPTOS)) {
            return ' - ' + this.translate.instant('menu.concepts');
        }
        if (url.startsWith(prefix + _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.USERS + '/' + _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.USERPROFILE)) {
            return ' - ' + this.translate.instant('menu.profile');
        }
        return '';
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 31, consts: [[1, "main-container"], ["color", "primary", 1, "main-toolbar"], ["mat-icon-button", "", 3, "click"], ["src", "assets/icons/icon-35x35.png", "alt", "MoneyGuard"], [1, "main-app-name"], [2, "font-size", "smaller"], [1, "example-spacer"], [1, "main-sidenav-container"], ["fixedTopGap", "56", 3, "fixedInViewport", "click"], ["snav", ""], ["mat-list-item", "", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "MoneyGuard");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-sidenav-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-sidenav", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_mat_sidenav_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_15_listener() { return ctx.routeDiario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_20_listener() { return ctx.routeMensual(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_25_listener() { return ctx.routeAnual(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "airplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_30_listener() { return ctx.routeHistorico(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "blur_linear");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_35_listener() { return ctx.routeConceptos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "add_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_41_listener() { return ctx.routeUserProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "person_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_46_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_52_listener() { return ctx.about(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "content_paste");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("main-is-mobile", ctx.isMobile());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.actualPageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-top", ctx.isMobile() ? 56 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fixedInViewport", ctx.isMobile());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 15, "menu.daily"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 17, "menu.monthly"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 19, "menu.annual"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 21, "menu.historic"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 23, "menu.concepts"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](45, 25, "menu.profile"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](50, 27, "menu.logout"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](56, 29, "menu.about"), " ");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenav, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.main-is-mobile[_ngcontent-%COMP%]   .main-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n}\n\nh1.main-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;  \n}\n\n.main-is-mobile[_ngcontent-%COMP%]   h1.main-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: smaller;  \n}\n\n.main-is-mobile[_ngcontent-%COMP%]   h3.main-app-name[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.main-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.main-is-mobile[_ngcontent-%COMP%]   .main-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\nmat-icon[_ngcontent-%COMP%]{\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm1haW4taXMtbW9iaWxlIC5tYWluLXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG59XG5cbmgxLm1haW4tYXBwLW5hbWUge1xuICBtYXJnaW4tbGVmdDogOHB4OyAgXG59XG5cbi5tYWluLWlzLW1vYmlsZSBoMS5tYWluLWFwcC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZm9udC1zaXplOiBzbWFsbGVyOyAgXG59XG5cbi5tYWluLWlzLW1vYmlsZSBoMy5tYWluLWFwcC1uYW1lIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLm1haW4tc2lkZW5hdi1jb250YWluZXIge1xuICBmbGV4OiAxO1xufVxuXG4ubWFpbi1pcy1tb2JpbGUgLm1haW4tc2lkZW5hdi1jb250YWluZXIge1xuICBmbGV4OiAxIDAgYXV0bztcbn1cblxuLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5tYXQtaWNvbntcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuIl19 */"] });


/***/ }),

/***/ 5592:
/*!**************************************************!*\
  !*** ./src/_components/login/login.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_JLE_Code_controlgastos_Mobile_Android_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/url.constants */ 263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ 8907);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/helper.service */ 3441);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);





















function LoginComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", lang_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](lang_r2);
  }
}

function LoginComponent_mat_spinner_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner", 19);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 30);
  }
}

class LoginComponent {
  constructor(router, formBuilder, usersService, _datePipe, _helperService, snackBar, translate) {
    this.router = router;
    this.formBuilder = formBuilder;
    this.usersService = usersService;
    this._datePipe = _datePipe;
    this._helperService = _helperService;
    this.snackBar = snackBar;
    this.translate = translate;
    this.loading = false;
    this.location = {};
    this.currentLang = this.translate.currentLang;
    this.registerUrl = '/' + _constants_url_constants__WEBPACK_IMPORTED_MODULE_1__.UrlConstants.USERS + '/' + _constants_url_constants__WEBPACK_IMPORTED_MODULE_1__.UrlConstants.REGISTRACION;

    if (this.usersService.isSessionExpired() === false) {
      this.ingresarApp();
    }

    this.location.height = window.screen.height;
    this.location.width = window.screen.width;
    this.location.appCodeName = window.navigator.appCodeName;
    this.location.appVersion = window.navigator.appVersion;
    this.location.language = window.navigator.language;
    this.location.platform = window.navigator.platform;
    this.location.userAgent = window.navigator.userAgent;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_JLE_Code_controlgastos_Mobile_Android_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loginForm = _this.formBuilder.group({
        emailFormControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
        pwdFormControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
      });
      /*
      //To get IP information
      const source$ = this._ipService.getClientIp();
          try {
        const data = await firstValueFrom(source$);
            this.location.ip = data.ip;
        this.location.city = data.city;
        this.location.region = data.region;
        this.location.region_code = data.region_code;
        this.location.country = data.country;
        this.location.country_name = data.country_name;
        this.location.continent_code = data.continent_code;
        this.location.postal = data.postal;
        this.location.latitude = data.latitude;
        this.location.longitude = data.longitude;
        this.location.timezone = data.timezone;
        this.location.utc_offset = data.utc_offset;
        this.location.country_calling_code = data.country_calling_code;
        this.location.currency = data.currency;
        this.location.languages = data.languages;
        this.location.asn = data.asn;
        this.location.org = data.org;
          } catch (error) {
        this.loading = false;
        this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
      }
      */
    })();
  }

  login() {
    var _this2 = this;

    return (0,C_JLE_Code_controlgastos_Mobile_Android_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;

      const source$ = _this2.usersService.login(_this2.loginForm.value.emailFormControl, _this2.loginForm.value.pwdFormControl, _this2.translate.currentLang);

      try {
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(source$);

        if (data === true) {
          _this2.loading = false;

          _this2.ingresarApp();
        } else {
          _this2._helperService.showSnackBarError(_this2.snackBar, _this2.translate.instant('login.accessDenied'));

          _this2.loading = false;
        }
      } catch (error) {
        _this2.loading = false;

        _this2._helperService.showSnackBarError(_this2.snackBar, _this2._helperService.getErrorMessage(error));
      }
    })();
  }

  selectLang(lang) {
    this.currentLang = lang.value;
    this.translate.use(lang.value);
  }

  ingresarApp() {
    const today = this._datePipe.transform(new Date(), 'yyyy-MM-dd');

    this.router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_1__.UrlConstants.DASHBOARD, _constants_url_constants__WEBPACK_IMPORTED_MODULE_1__.UrlConstants.DIARIO, today]);
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_3__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 41,
  vars: 24,
  consts: [[1, "loginContainer"], [1, "login"], ["id", "titleContainer"], ["id", "divTitle"], ["id", "divLang"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["novalidate", "", 1, "full-width-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "formfield-full-width"], ["matInput", "", "formControlName", "emailFormControl", 3, "placeholder"], ["matSuffix", ""], ["matInput", "", "type", "password", "formControlName", "pwdFormControl", 3, "placeholder"], [1, "buttons-section"], [1, "register-container"], ["mat-button", "", "color", "register", 3, "routerLink"], [1, "login-button-container"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"], [3, "diameter", 4, "ngIf"], [3, "value"], [3, "diameter"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "MoneyGuard");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-select", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function LoginComponent_Template_mat_select_valueChange_8_listener($event) {
        return ctx.currentLang = $event;
      })("selectionChange", function LoginComponent_Template_mat_select_selectionChange_8_listener($event) {
        return ctx.selectLang($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, LoginComponent_mat_option_9_Template, 2, 2, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "face");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "vpn_key");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "directions_run");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, LoginComponent_mat_spinner_40_Template, 1, 1, "mat-spinner", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.currentLang);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.translate.langs);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 12, "login.email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 14, "login.email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 16, "login.password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 18, "login.password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.registerUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 20, "login.register"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.loginForm.valid || ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 22, "login.login"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatSpinner],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: [".loginContainer[_ngcontent-%COMP%] {\n    padding-top: 25px;\n    text-align: center;\n  }\n\n  div.login[_ngcontent-%COMP%] {\n    width: 500px;\n    padding: 10px 10px 0px 10px;\n    border: 1px solid #BFBFBF;\n    box-shadow: 10px 10px 5px #aaaaaa;\n    display: inline-block;\n  }\n\n  .full-width-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .formfield-full-width[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n  .mat-register[_ngcontent-%COMP%] {\n    color: rgb(45, 155, 206);\n  }\n\n  .register-container[_ngcontent-%COMP%]{\n    float: left;\n    text-align: left;\n  }\n\n  .login-button-container[_ngcontent-%COMP%]{\n    float: right;\n    text-align: center;\n  }\n\n  .buttons-section[_ngcontent-%COMP%]{\n    padding-top: 10px;\n    padding-bottom: 50px;\n  }\n\n  .mat-spinner[_ngcontent-%COMP%] {\n    float:left;\n    margin: 5px 10px 0px 0px;\n  }\n\n  #titleContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  #divTitle[_ngcontent-%COMP%] {\n      align-self: center;\n      width: 100%;\n  }\n\n  #divLang[_ngcontent-%COMP%] {\n      width:5rem;\n      margin-left: 1rem;\n      align-self: center;\n      margin-left: auto;\n  }\n\n  @media only screen and (max-width: 600px) {\n    div.login[_ngcontent-%COMP%] {\n        width: 90%;\n        margin-top: 5px;\n        margin-bottom: 10px;\n        box-shadow: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjs7RUFFRDtJQUNHLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0VBQ2hDOztFQUNBO01BQ0ksa0JBQWtCO01BQ2xCLFdBQVc7RUFDZjs7RUFDQTtNQUNJLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGlCQUFpQjtFQUNyQjs7RUFLRjtJQUNJO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbkNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgZGl2LmxvZ2luIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjYWFhYWFhO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5mdWxsLXdpZHRoLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmZvcm1maWVsZC1mdWxsLXdpZHRoIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWF0LXJlZ2lzdGVyIHtcbiAgICBjb2xvcjogcmdiKDQ1LCAxNTUsIDIwNik7XG4gIH1cblxuICAucmVnaXN0ZXItY29udGFpbmVye1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAubG9naW4tYnV0dG9uLWNvbnRhaW5lcntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmJ1dHRvbnMtc2VjdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5tYXQtc3Bpbm5lciB7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBtYXJnaW46IDVweCAxMHB4IDBweCAwcHg7XG4gIH1cblxuICN0aXRsZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAjZGl2VGl0bGUge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2Rpdkxhbmcge1xuICAgICAgd2lkdGg6NXJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGRpdi5sb2dpbiB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 3054:
/*!******************************************************************!*\
  !*** ./src/_components/saldo-abierto/saldo-abierto.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaldoAbiertoComponent": () => (/* binding */ SaldoAbiertoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _saldo_item_saldo_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saldo-item/saldo-item.component */ 9665);





class SaldoAbiertoComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.itemPushed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    itemClicked(item) {
        this.itemPushed.emit(item);
    }
}
SaldoAbiertoComponent.ɵfac = function SaldoAbiertoComponent_Factory(t) { return new (t || SaldoAbiertoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
SaldoAbiertoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SaldoAbiertoComponent, selectors: [["app-saldo-abierto"]], outputs: { itemPushed: "itemPushed" }, decls: 2, vars: 1, consts: [[3, "items", "itemClicked"]], template: function SaldoAbiertoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-saldo-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("itemClicked", function SaldoAbiertoComponent_Template_app_saldo_item_itemClicked_1_listener($event) { return ctx.itemClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.data.saldos);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _saldo_item_saldo_item_component__WEBPACK_IMPORTED_MODULE_0__.SaldoItemComponent], styles: [".mat-dialog-content[_ngcontent-%COMP%]{\n    max-height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGRvLWFiaWVydG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzYWxkby1hYmllcnRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50e1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG59Il19 */"] });


/***/ }),

/***/ 9665:
/*!************************************************************!*\
  !*** ./src/_components/saldo-item/saldo-item.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaldoItemComponent": () => (/* binding */ SaldoItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/users.service */ 8907);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 9975);









function SaldoItemComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SaldoItemComponent_mat_card_0_Template_mat_card_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onGoDetails(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 12, "balance.income"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 14, item_r1.ingresos, ctx_r0._userService.userCurrency));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 17, "balance.outcome"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 19, item_r1.egresos, ctx_r0._userService.userCurrency));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("importeNegativo", item_r1.ingresos - item_r1.egresos < 0)("importePositivo", item_r1.ingresos - item_r1.egresos >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 22, "balance.balance"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](30, 24, item_r1.ingresos - item_r1.egresos, ctx_r0._userService.userCurrency), " ");
} }
class SaldoItemComponent {
    constructor(_userService, translate) {
        this._userService = _userService;
        this.translate = translate;
        this.itemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    onGoDetails(item) {
        this.itemClicked.emit(item);
    }
}
SaldoItemComponent.ɵfac = function SaldoItemComponent_Factory(t) { return new (t || SaldoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
SaldoItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SaldoItemComponent, selectors: [["app-saldo-item"]], inputs: { items: "items" }, outputs: { itemClicked: "itemClicked" }, decls: 1, vars: 1, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [2, "margin-right", "10px", "float", "left"], [1, "header"], [1, "itemTitle"], [1, "itemValue"]], template: function SaldoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SaldoItemComponent_mat_card_0_Template, 32, 27, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], styles: [".itemTitle[_ngcontent-%COMP%] {\n    float: left;\n    width: 50%;\n    font-size: 13px;\n}\n\n.itemValue[_ngcontent-%COMP%] {\n    float: right;\n    width: 50%;\n    text-align: right;\n    font-size: 13px;\n}\n\n.header[_ngcontent-%COMP%] {\n    font-size: 15px;\n    float: left;\n    margin-top: 3px;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n\n.mat-card[_ngcontent-%COMP%] {\n    margin-top: 20px;    \n    margin-bottom: 5px;    \n}\n\n.importeNegativo[_ngcontent-%COMP%]{\n    color: red;\n}\n\n.importePositivo[_ngcontent-%COMP%]{\n    color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGRvLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzYWxkby1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbVRpdGxlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLml0ZW1WYWx1ZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4ubWF0LWxpc3QtaXRlbSB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG5cbi5tYXQtY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgICAgXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyAgICBcbn1cblxuLmltcG9ydGVOZWdhdGl2b3tcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uaW1wb3J0ZVBvc2l0aXZve1xuICAgIGNvbG9yOiBncmVlbjtcbn0iXX0= */"] });


/***/ }),

/***/ 2181:
/*!**************************************************!*\
  !*** ./src/_components/saldo/saldo.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaldoComponent": () => (/* binding */ SaldoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/users.service */ 8907);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




class SaldoComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.saldoClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    onClick() {
        this.saldoClicked.emit();
    }
}
SaldoComponent.ɵfac = function SaldoComponent_Factory(t) { return new (t || SaldoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService)); };
SaldoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SaldoComponent, selectors: [["app-saldo"]], inputs: { titulo: "titulo", saldo: "saldo" }, outputs: { saldoClicked: "saldoClicked" }, decls: 4, vars: 7, consts: [[1, "saldos"], ["onMouseOver", "this.style.cursor='pointer'", 3, "click"]], template: function SaldoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SaldoComponent_Template_p_click_1_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("saldoNegativo", ctx.saldo < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.titulo, ": ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, ctx.saldo, ctx._userService.userCurrency), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe], styles: [".saldoNegativo[_ngcontent-%COMP%]{\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic2FsZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWxkb05lZ2F0aXZve1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 3107:
/*!**********************************************!*\
  !*** ./src/_modules/shared/shared.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _components_saldo_saldo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../_components/saldo/saldo.component */ 2181);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _components_saldo_abierto_saldo_abierto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_components/saldo-abierto/saldo-abierto.component */ 3054);
/* harmony import */ var _components_saldo_item_saldo_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_components/saldo-item/saldo-item.component */ 9665);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
//import { MatTooltipModule } from '@angular/material//tooltip';






























class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule,
        //MatTooltipModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_saldo_saldo_component__WEBPACK_IMPORTED_MODULE_0__.SaldoComponent, _components_saldo_abierto_saldo_abierto_component__WEBPACK_IMPORTED_MODULE_1__.SaldoAbiertoComponent, _components_saldo_item_saldo_item_component__WEBPACK_IMPORTED_MODULE_2__.SaldoItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule], exports: [_components_saldo_saldo_component__WEBPACK_IMPORTED_MODULE_0__.SaldoComponent,
        _components_saldo_abierto_saldo_abierto_component__WEBPACK_IMPORTED_MODULE_1__.SaldoAbiertoComponent,
        _components_saldo_item_saldo_item_component__WEBPACK_IMPORTED_MODULE_2__.SaldoItemComponent,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule,
        //MatTooltipModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule] }); })();


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor(translate) {
        translate.addLangs(['en', 'es', 'fr']);
        translate.setDefaultLang('es');
        translate.use('es');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "httpTranslateLoader": () => (/* binding */ httpTranslateLoader)
/* harmony export */ });
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_modules/shared/shared.module */ 3107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_components/login/login.component */ 5592);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/url.constants */ 263);
/* harmony import */ var src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/guards/auth.guard */ 6982);
/* harmony import */ var src_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_components/dashboard/dashboard.component */ 480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var src_services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/users.service */ 8907);
/* harmony import */ var src_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/helper.service */ 3441);
/* harmony import */ var src_services_url_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/url.service */ 5284);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5347);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var src_interceptors_AuthInterceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/interceptors/AuthInterceptor */ 7715);
/* harmony import */ var src_components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/_components/about/about.component */ 3925);
/* harmony import */ var src_services_sumary_month_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/sumary-month.service */ 3484);
/* harmony import */ var src_services_sumary_anio_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/sumary-anio.service */ 9122);
/* harmony import */ var src_services_sumary_historico_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/sumary-historico.service */ 2137);
/* harmony import */ var src_services_diario_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/diario.service */ 232);
/* harmony import */ var src_services_concepto_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/concepto.service */ 3747);
/* harmony import */ var src_services_ip_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/services/ip.service */ 8240);
/* harmony import */ var src_sharedServices_formatingService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/sharedServices/formatingService */ 4952);
/* harmony import */ var src_sharedServices_calculationService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/sharedServices/calculationService */ 4455);
































const routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent },
    { path: src_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__.UrlConstants.LOGIN, component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent },
    { path: src_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__.UrlConstants.USERS,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src__modules_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../_modules/users/users.module */ 1087)).then(m => m.UsersModule) },
    { path: src_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__.UrlConstants.DASHBOARD, component: src_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent, canActivateChild: [src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
        children: [
            { path: src_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__.UrlConstants.DIARIO,
                loadChildren: () => __webpack_require__.e(/*! import() */ "src__modules_diario_diario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../_modules/diario/diario.module */ 5911)).then(m => m.DiarioModule) },
            { path: src_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__.UrlConstants.MENSUAL,
                loadChildren: () => __webpack_require__.e(/*! import() */ "src__modules_mensual_mensual_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../_modules/mensual/mensual.module */ 9789)).then(m => m.MensualModule) },
            { path: src_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__.UrlConstants.ANUAL,
                loadChildren: () => __webpack_require__.e(/*! import() */ "src__modules_anual_anual_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../_modules/anual/anual.module */ 4544)).then(m => m.AnualModule) },
            { path: src_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__.UrlConstants.HISTORICO,
                loadChildren: () => __webpack_require__.e(/*! import() */ "src__modules_historico_historico_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../_modules/historico/historico.module */ 652)).then(m => m.HistoricoModule) },
            { path: src_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__.UrlConstants.CONCEPTOS,
                loadChildren: () => __webpack_require__.e(/*! import() */ "src__modules_concepts_concepts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../_modules/concepts/concepts.module */ 9255)).then(m => m.ConceptsModule) },
            { path: src_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__.UrlConstants.USERS,
                loadChildren: () => __webpack_require__.e(/*! import() */ "src__modules_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../_modules/users/users.module */ 1087)).then(m => m.UsersModule) },
            { path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src__modules_diario_diario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../_modules/diario/diario.module */ 5911)).then(m => m.DiarioModule) },
        ] },
    { path: '**', redirectTo: src_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__.UrlConstants.DASHBOARD }
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [
        src_services_sumary_month_service__WEBPACK_IMPORTED_MODULE_12__.SumaryMonthService,
        src_services_sumary_anio_service__WEBPACK_IMPORTED_MODULE_13__.SumaryAnioService,
        src_services_sumary_historico_service__WEBPACK_IMPORTED_MODULE_14__.SumaryHistoricoService,
        src_services_diario_service__WEBPACK_IMPORTED_MODULE_15__.DiarioService,
        src_services_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService,
        src_services_concepto_service__WEBPACK_IMPORTED_MODULE_16__.ConceptoService,
        src_services_ip_service__WEBPACK_IMPORTED_MODULE_17__.IpService,
        src_services_helper_service__WEBPACK_IMPORTED_MODULE_8__.HelperService,
        src_sharedServices_formatingService__WEBPACK_IMPORTED_MODULE_18__.FormatingService,
        src_sharedServices_calculationService__WEBPACK_IMPORTED_MODULE_19__.CalculationService,
        src_services_url_service__WEBPACK_IMPORTED_MODULE_9__.UrlService,
        _angular_common__WEBPACK_IMPORTED_MODULE_21__.CurrencyPipe,
        _angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe,
        src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HTTP_INTERCEPTORS,
            useClass: src_interceptors_AuthInterceptor__WEBPACK_IMPORTED_MODULE_10__.AuthInterceptor,
            multi: true,
        },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__.HashLocationStrategy
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_20__.LOCALE_ID,
            useValue: window.navigator.language.split('-')[0]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateLoader,
                    useFactory: httpTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClient]
                }
            }),
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        src_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent,
        src_components_about_about_component__WEBPACK_IMPORTED_MODULE_11__.AboutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
        _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule] }); })();
// AOT compilation support
function httpTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__.TranslateHttpLoader(http);
}


/***/ }),

/***/ 263:
/*!****************************************!*\
  !*** ./src/constants/url.constants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlConstants": () => (/* binding */ UrlConstants)
/* harmony export */ });
class UrlConstants {
}
UrlConstants.DASHBOARD = 'dashboard';
UrlConstants.DIARIO = 'diario';
UrlConstants.MENSUAL = 'mensual';
UrlConstants.ANUAL = 'anual';
UrlConstants.HISTORICO = 'historico';
UrlConstants.CONCEPTOS = 'conceptos';
UrlConstants.USERPROFILE = 'profile';
UrlConstants.REGISTRACION = 'registracion';
UrlConstants.LOGIN = 'login';
UrlConstants.USERS = 'users';


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://192.168.0.12:4433/backend/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 6982:
/*!**********************************!*\
  !*** ./src/guards/auth.guard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var src_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/constants/url.constants */ 263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ 8907);




class AuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate() {
        return this.userAlowed();
    }
    canActivateChild() {
        return this.userAlowed();
    }
    userAlowed() {
        if (this.userService.isSessionExpired() === false) {
            return true;
        }
        // not logged in so redirect to login page
        this.userService.logout();
        this.router.navigate([src_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.LOGIN]);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ 7715:
/*!*********************************************!*\
  !*** ./src/interceptors/AuthInterceptor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants/url.constants */ 263);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ 8907);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);






class AuthInterceptor {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    intercept(req, next) {
        if (localStorage.getItem('alow') !== null) {
            const changedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('alow')) });
            return next.handle(changedReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)((event) => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
                    // do stuff
                    // console.log(event);
                }
            }, (err) => {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
                    if (err.status === 401) {
                        // not logged in so redirect to login page
                        this._userService.logout();
                        this._router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.LOGIN]);
                    }
                    if (err.status === 400) {
                        // business error
                    }
                }
            }));
        }
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 4945:
/*!***************************************!*\
  !*** ./src/services/componentBase.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentBase": () => (/* binding */ ComponentBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);


class ComponentBase {
    constructor(changeDetectorRef, media) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    }
    isMobile() {
        return this.mobileQuery.matches;
    }
    ngOnDestroy() {
        this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ComponentBase.ɵfac = function ComponentBase_Factory(t) { return new (t || ComponentBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.MediaMatcher)); };
ComponentBase.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComponentBase, factory: ComponentBase.ɵfac });


/***/ }),

/***/ 3747:
/*!******************************************!*\
  !*** ./src/services/concepto.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConceptoService": () => (/* binding */ ConceptoService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.service */ 5284);




class ConceptoService {
    constructor(_http, _urlService) {
        this._http = _http;
        this._urlService = _urlService;
    }
    getConceptos() {
        return this._http.get(this._urlService.urlGetConceptos())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => JSON.stringify(data)));
    }
    insertConcepto(descripcion, credito) {
        return this._http.post(this._urlService.urlInsertConcepto(), { description: descripcion,
            credit: credito });
    }
    updateConcepto(idConcepto, descripcion, credito) {
        return this._http.put(this._urlService.urlUpdateConcepto(), { description: descripcion,
            credit: credito,
            conceptId: idConcepto });
    }
}
ConceptoService.ɵfac = function ConceptoService_Factory(t) { return new (t || ConceptoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService)); };
ConceptoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConceptoService, factory: ConceptoService.ɵfac });


/***/ }),

/***/ 232:
/*!****************************************!*\
  !*** ./src/services/diario.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiarioService": () => (/* binding */ DiarioService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.service */ 5284);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





class DiarioService {
    constructor(_http, _urlService, datepipe) {
        this._http = _http;
        this._urlService = _urlService;
        this.datepipe = datepipe;
    }
    getConceptosImportes(fecha) {
        const url = this._urlService.urlGetConceptosImportes(this.datepipe.transform(fecha, 'yyyy-MM-dd'));
        return this._http.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => JSON.stringify(data)));
    }
    setConceptoImporte(fecha, importe, idConcepto, tags) {
        return this._http.post(this._urlService.urlSetConceptoImporte(), { TransactionDate: fecha.getFullYear().toString() +
                (fecha.getMonth() + 1).toString().padStart(2, '0') +
                fecha.getDate().toString().padStart(2, '0'),
            Ammount: importe,
            ConceptId: idConcepto,
            movimientoTags: tags });
    }
    getPrimerConsumo() {
        return this._http.get(this._urlService.urlGetPrimerConsumo());
    }
    getConceptosTotalMes(fecha /*YYYYMM*/) {
        return this._http.get(this._urlService.urlGetConceptosTotalMes(fecha))
            //.delay(3000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => JSON.stringify(data)));
    }
    getConceptosMovimMes(idConcepto, fecha /*YYYYMM*/) {
        return this._http.get(this._urlService.urlGetConceptosMovimMes(idConcepto, fecha))
            //.delay(3000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => JSON.stringify(data)));
    }
    getConceptosTotalAnio(anio /*YYYY*/) {
        return this._http.get(this._urlService.urlGetConceptosTotalAnio(anio))
            //.delay(3000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => JSON.stringify(data)));
    }
    getConceptosMovimAnio(idConcepto, anio /*YYYY*/) {
        return this._http.get(this._urlService.urlGetConceptosMovimAnio(idConcepto, anio))
            //.delay(3000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => JSON.stringify(data)));
    }
    getConceptosTotalHistorico() {
        return this._http.get(this._urlService.urlGetConceptosTotalHistorico())
            //.delay(3000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => JSON.stringify(data)));
    }
    getConceptosMovimHistorico(idConcepto) {
        return this._http.get(this._urlService.urlGetConceptosMovimHistorico(idConcepto))
            //.delay(3000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => JSON.stringify(data)));
    }
}
DiarioService.ɵfac = function DiarioService_Factory(t) { return new (t || DiarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe)); };
DiarioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DiarioService, factory: DiarioService.ɵfac });


/***/ }),

/***/ 3441:
/*!****************************************!*\
  !*** ./src/services/helper.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperService": () => (/* binding */ HelperService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 7514);


class HelperService {
    constructor(translate) {
        this.translate = translate;
    }
    getErrorMessage(error) {
        let message = '';
        if (error === undefined ||
            error.status === undefined) {
            return message;
        }
        switch (error.status) {
            case 0:
                message = this.translate.instant("http.cantConnectWithServer");
                break;
            case 400: /* bad request */
                message = error.error.message;
                break;
            case 401: /* Unathorized */
                message = this.translate.instant("http.sessionExpired");
                break;
            case 500: /* internal server error */
                message = this.translate.instant("http.unexpectedError", { error: error.error.ErrorTraceId });
                break;
        }
        return message;
    }
    convertStringMMYYYYToDate(fecha /* MMYYYY */) {
        const mes = Number(fecha.substring(0, 2)) - 1;
        const anio = Number(fecha.substring(2, 6));
        const retFecha = new Date(anio, mes, 1);
        return retFecha;
    }
    /* La fecha de entrada es 1980-05-13T00:00:00.000Z y la de salida 13/05/1980*/
    convertStringYYYMMDDToStringDDMMYYYY(fecha) {
        const dia = fecha.substring(8, 10);
        const mes = fecha.substring(5, 7);
        const anio = fecha.slice(0, 4);
        return dia + '/' + mes + '/' + anio;
    }
    toCamelCase(strInput) {
        if (strInput === null) {
            throw 'Invalid parameter NULL';
        }
        const str = strInput === null || strInput === void 0 ? void 0 : strInput.toString().split(' ');
        for (let i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        return str.join(' ');
    }
    showSnackBarError(snackBar, errorMessage) {
        snackBar.open(errorMessage, '', { duration: 5000, panelClass: ['error-snackbar'], direction: 'ltr', verticalPosition: 'bottom' });
    }
    showSnackBarInformation(snackBar, message) {
        snackBar.open(message, '', { duration: 2000, direction: 'ltr', verticalPosition: 'bottom' });
    }
    showSnackBarSuccess(snackBar, message) {
        snackBar.open(message, '', { duration: 2000, panelClass: ['success-snackbar'], direction: 'ltr', verticalPosition: 'bottom' });
    }
}
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
HelperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HelperService, factory: HelperService.ɵfac });


/***/ }),

/***/ 8240:
/*!************************************!*\
  !*** ./src/services/ip.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IpService": () => (/* binding */ IpService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class IpService {
    constructor(_http) {
        this._http = _http;
    }
    getClientIp() {
        // let url = "http://freegeoip.net/json/";
        const url = 'https://ipapi.co/json/';
        return this._http.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(data => JSON.stringify(data)));
    }
}
IpService.ɵfac = function IpService_Factory(t) { return new (t || IpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
IpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IpService, factory: IpService.ɵfac });


/***/ }),

/***/ 9122:
/*!*********************************************!*\
  !*** ./src/services/sumary-anio.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SumaryAnioService": () => (/* binding */ SumaryAnioService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.service */ 5284);




class SumaryAnioService {
    constructor(_http, _urlService) {
        this._http = _http;
        this._urlService = _urlService;
    }
    getSumary(fecha) {
        return this._http.get(this._urlService.urlGetSumaryAnual(fecha.getFullYear().toString()))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => JSON.stringify(data)));
    }
}
SumaryAnioService.ɵfac = function SumaryAnioService_Factory(t) { return new (t || SumaryAnioService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService)); };
SumaryAnioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SumaryAnioService, factory: SumaryAnioService.ɵfac });


/***/ }),

/***/ 2137:
/*!**************************************************!*\
  !*** ./src/services/sumary-historico.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SumaryHistoricoService": () => (/* binding */ SumaryHistoricoService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.service */ 5284);




class SumaryHistoricoService {
    constructor(_http, _urlService) {
        this._http = _http;
        this._urlService = _urlService;
    }
    getSumary() {
        return this._http.get(this._urlService.urlGetSumaryHistorico())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => JSON.stringify(data)));
    }
}
SumaryHistoricoService.ɵfac = function SumaryHistoricoService_Factory(t) { return new (t || SumaryHistoricoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService)); };
SumaryHistoricoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SumaryHistoricoService, factory: SumaryHistoricoService.ɵfac });


/***/ }),

/***/ 3484:
/*!**********************************************!*\
  !*** ./src/services/sumary-month.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SumaryMonthService": () => (/* binding */ SumaryMonthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.service */ 5284);




class SumaryMonthService {
    constructor(_http, _urlService) {
        this._http = _http;
        this._urlService = _urlService;
    }
    getSumary(fecha) {
        const year = fecha.getFullYear();
        return this._http.get(this._urlService.urlGetSumaryMensual(year, fecha.getMonth() + 1))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => JSON.stringify(data)));
    }
}
SumaryMonthService.ɵfac = function SumaryMonthService_Factory(t) { return new (t || SumaryMonthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService)); };
SumaryMonthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SumaryMonthService, factory: SumaryMonthService.ɵfac });


/***/ }),

/***/ 5284:
/*!*************************************!*\
  !*** ./src/services/url.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlService": () => (/* binding */ UrlService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class UrlService {
    constructor() {
        this._host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    urlGetConceptos() {
        return this._host + 'concept';
    }
    urlInsertConcepto() {
        return this._host + 'concept';
    }
    urlUpdateConcepto() {
        return this._host + 'concept';
    }
    urlGetConceptosImportes(fecha) {
        return this._host + 'transaction/' + fecha;
    }
    urlSetConceptoImporte() {
        return this._host + 'transaction';
    }
    urlGetPrimerConsumo() {
        return this._host + 'transaction/firstlast';
    }
    urlGetConceptosTotalMes(fecha) {
        return this._host + 'concept/monthly/' + fecha + '/summary';
    }
    urlGetConceptosMovimMes(idConcepto, fecha) {
        return this._host + 'concept/' + idConcepto + '/monthly/' + fecha + '/summary';
    }
    urlGetSumaryMensual(year, month) {
        return this._host + 'period/totalinout/' + year + '/' + month;
    }
    urlLogin() {
        return this._host + 'Account/login';
    }
    urlRegistracion() {
        return this._host + 'Account/signup';
    }
    urlUserUpdateProfile() {
        return this._host + 'account';
    }
    urlGetSumaryAnual(fecha) {
        return this._host + 'period/totalinout/' + fecha.toString();
    }
    urlGetConceptosTotalAnio(anio) {
        return this._host + 'concept/annual/' + anio.toString() + '/summary';
    }
    urlGetConceptosMovimAnio(idConcepto, anio) {
        return this._host + 'concept/' + idConcepto + '/annual/' + anio.toString() + '/summary';
    }
    urlGetUserProfile() {
        return this._host + 'account/';
    }
    urlGetSumaryHistorico() {
        return this._host + 'api/historico/sumary';
    }
    urlGetConceptosTotalHistorico() {
        return this._host + 'concept/historic/summary';
    }
    urlGetConceptosMovimHistorico(idConcepto) {
        return this._host + 'concept/' + idConcepto + '/historic/summary';
    }
}
UrlService.ɵfac = function UrlService_Factory(t) { return new (t || UrlService)(); };
UrlService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UrlService, factory: UrlService.ɵfac });


/***/ }),

/***/ 8907:
/*!***************************************!*\
  !*** ./src/services/users.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.service */ 5284);







class UsersService {
    constructor(_http, translate, _urlService) {
        this._http = _http;
        this.translate = translate;
        this._urlService = _urlService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtHelperService();
        this.userName = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
        this.setUserName(this.getUserNameFromToken());
    }
    login(email, password, language) {
        return this._http.post(this._urlService.urlLogin(), { email, password, language })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('alow', user.token);
                this.userCurrency = this.getMoneda();
                this.setUserName(this.getUserNameFromToken());
                this.setLang(this.getUserLanguageFromToken());
                return true;
            }
            return false;
        }));
    }
    register(usuario) {
        const fechanacimiento = usuario.bornDate.getFullYear().toString() +
            (usuario.bornDate.getMonth() + 1).toString().padStart(2, '0') +
            usuario.bornDate.getDate().toString().padStart(2, '0');
        return this._http.post(this._urlService.urlRegistracion(), { email: usuario.email,
            password: usuario.password,
            name: usuario.name,
            bornDate: fechanacimiento,
            currency: usuario.currency,
            language: usuario.language });
    }
    updateProfile(usuario) {
        const fechanacimiento = usuario.bornDate.getFullYear().toString() +
            (usuario.bornDate.getMonth() + 1).toString().padStart(2, '0') +
            usuario.bornDate.getDate().toString().padStart(2, '0');
        return this._http.put(this._urlService.urlUserUpdateProfile(), { email: usuario.email,
            password: usuario.password,
            name: usuario.name,
            bornDate: fechanacimiento,
            currency: usuario.currency,
            language: usuario.language });
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('alow');
    }
    isSessionExpired() {
        const token = localStorage.getItem('alow');
        if (token === null) {
            return true;
        }
        if (this.jwtHelper.isTokenExpired(token) === true) {
            return true;
        }
        return false;
    }
    getUserNameFromToken() {
        const token = localStorage.getItem('alow');
        let userName = '';
        if (token !== null) {
            userName = this.jwtHelper.decodeToken(token).user;
        }
        return userName;
    }
    setLang(lang) {
        this.translate.use(lang);
    }
    getUserLanguageFromToken() {
        const token = localStorage.getItem('alow');
        let userLang = '';
        if (token !== null) {
            userLang = this.jwtHelper.decodeToken(token).lang;
        }
        return userLang;
    }
    setUserName(userName) {
        this.userName.next(userName);
    }
    getUserId() {
        const token = localStorage.getItem('alow');
        let userId = '';
        if (token !== null) {
            userId = this.jwtHelper.decodeToken(token).id;
        }
        return userId;
    }
    getMoneda() {
        const token = localStorage.getItem('alow');
        let moneda = '';
        if (token !== null) {
            moneda = this.jwtHelper.decodeToken(token).moneda;
        }
        return moneda;
    }
    getProfile() {
        return this._http.get(this._urlService.urlGetUserProfile())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
            const user = { id: res.id,
                statusId: res.statusId,
                entryDate: res.entryDate === null ? new Date() : new Date(res.entryDate),
                name: res.name,
                language: res.language,
                currency: res.currency,
                bornDate: new Date(res.bornDate),
                email: res.email,
                password: "" };
            return user;
        }));
    }
    getAvailablesCurrencies() {
        return ['$', 'U$D', '€'];
    }
    checkPasswords(group) {
        var _a, _b;
        if (group === null) {
            throw 'group is NULL';
        }
        const pass = (_a = group.get('passwordFormControl')) === null || _a === void 0 ? void 0 : _a.value;
        const confirmPass = (_b = group.get('passwordRepeatFormControl')) === null || _b === void 0 ? void 0 : _b.value;
        return pass === confirmPass ? null : { notSame: true };
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac });


/***/ }),

/***/ 4455:
/*!**************************************************!*\
  !*** ./src/sharedServices/calculationService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculationService": () => (/* binding */ CalculationService)
/* harmony export */ });
class CalculationService {
    getIngresos(items) {
        let ingresos = 0;
        if (!items) {
            return 0;
        }
        if (items.filter(x => x > 0).length > 0) {
            ingresos = items.filter(x => x > 0)
                .map(c => c)
                .reduce((sum, current) => sum + current);
        }
        return Math.abs(ingresos);
    }
    getEgresos(items) {
        let egresos = 0;
        if (!items) {
            return 0;
        }
        if (items.filter(x => x < 0).length > 0) {
            egresos = items.filter(x => x < 0)
                .map(c => c)
                .reduce((sum, current) => sum + current);
        }
        return Math.abs(egresos);
    }
}


/***/ }),

/***/ 4952:
/*!************************************************!*\
  !*** ./src/sharedServices/formatingService.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatingService": () => (/* binding */ FormatingService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class FormatingService {
    constructor(locale) {
        this.locale = locale;
    }
    FormatNumber(data, alwaysPositive, thousandsSeparator = true) {
        let numberFormatted = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatNumber)(data, this.locale, '1.2-2');
        if (alwaysPositive) {
            numberFormatted = numberFormatted.replace('-', '');
        }
        if (!thousandsSeparator) {
            while (numberFormatted.indexOf(this.thusandsSeparator()) !== -1) {
                numberFormatted = numberFormatted.replace(this.thusandsSeparator() === '.' ? '.' : ',', '');
            }
        }
        return numberFormatted;
    }
    thusandsSeparator() {
        const n = 1.1;
        const x = n.toLocaleString(this.locale).substring(1, 2);
        if (x === ',') {
            return '.';
        }
        return ',';
    }
}
FormatingService.ɵfac = function FormatingService_Factory(t) { return new (t || FormatingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID)); };
FormatingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormatingService, factory: FormatingService.ɵfac });


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map