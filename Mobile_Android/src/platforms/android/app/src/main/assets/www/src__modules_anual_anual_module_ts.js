"use strict";
(self["webpackChunkmoneyguard"] = self["webpackChunkmoneyguard"] || []).push([["src__modules_anual_anual_module_ts"],{

/***/ 559:
/*!**************************************************!*\
  !*** ./src/_components/anual/anual.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnualComponent": () => (/* binding */ AnualComponent)
/* harmony export */ });
/* harmony import */ var C_JLE_Code_controlgastos_Mobile_Android_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _saldo_abierto_saldo_abierto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../saldo-abierto/saldo-abierto.component */ 3054);
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/url.constants */ 263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _services_diario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/diario.service */ 232);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ 8907);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _sharedServices_calculationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sharedServices/calculationService */ 4455);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/helper.service */ 3441);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _saldo_saldo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../saldo/saldo.component */ 2181);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ 6131);






















function AnualComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AnualComponent_div_1_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const anio_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", anio_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](anio_r4);
  }
}

function AnualComponent_div_1_mat_expansion_panel_13_mat_spinner_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-spinner", 2);
  }
}

function AnualComponent_div_1_mat_expansion_panel_13_mat_list_8_mat_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AnualComponent_div_1_mat_expansion_panel_13_mat_list_8_mat_list_item_1_Template_p_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const detail_r9 = restoredCtx.$implicit;
      const ct_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r10.goToMonth(detail_r9.month, ct_r5.description);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AnualComponent_div_1_mat_expansion_panel_13_mat_list_8_mat_list_item_1_Template_p_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const detail_r9 = restoredCtx.$implicit;
      const ct_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r13.goToMonth(detail_r9.month, ct_r5.description);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const detail_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", detail_r9.MonthFormatted, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("importeNegativo", detail_r9.balance < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 4, detail_r9.balance, ctx_r8._userService.userCurrency));
  }
}

function AnualComponent_div_1_mat_expansion_panel_13_mat_list_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AnualComponent_div_1_mat_expansion_panel_13_mat_list_8_mat_list_item_1_Template, 7, 7, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r7.itemDetail);
  }
}

function AnualComponent_div_1_mat_expansion_panel_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function AnualComponent_div_1_mat_expansion_panel_13_Template_mat_expansion_panel_opened_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ct_r5 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r15.loadYearDetails(ct_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-panel-title", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AnualComponent_div_1_mat_expansion_panel_13_mat_spinner_7_Template, 1, 0, "mat-spinner", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, AnualComponent_div_1_mat_expansion_panel_13_mat_list_8_Template, 2, 1, "mat-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ct_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("expanded", !ctx_r3.loading && ct_r5.description === ctx_r3.openItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("id", "item" + ct_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ct_r5.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("importeNegativo", ct_r5.balance < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 8, ct_r5.balance, ctx_r3._userService.userCurrency), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.loadingDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r3.loadingDetail);
  }
}

function AnualComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function AnualComponent_div_1_Template_mat_select_valueChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r17.anioSelected = $event;
    })("selectionChange", function AnualComponent_div_1_Template_mat_select_selectionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r19.onChangeYear();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, AnualComponent_div_1_mat_option_8_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "app-saldo", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("saldoClicked", function AnualComponent_div_1_Template_app_saldo_saldoClicked_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r20.showOpenSaldo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-accordion", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, AnualComponent_div_1_mat_expansion_panel_13_Template, 9, 11, "mat-expansion-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 6, "yearScreen.year"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.anioSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.anios);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("titulo", ctx_r1.saldoTitle)("saldo", ctx_r1.saldoAnual);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.conceptosTotales);
  }
}

class AnualComponent {
  constructor(_datePipe, _diarioService, _userService, snackBar, saldoAbierto, calculationService, router, changeDetector, activeRoute, translate, _helperService) {
    this._datePipe = _datePipe;
    this._diarioService = _diarioService;
    this._userService = _userService;
    this.snackBar = snackBar;
    this.saldoAbierto = saldoAbierto;
    this.calculationService = calculationService;
    this.router = router;
    this.changeDetector = changeDetector;
    this.activeRoute = activeRoute;
    this.translate = translate;
    this._helperService = _helperService;
    this.anios = new Array();
    this.loading = false;
    this.loadingDetail = false;
    this.saldoAnual = 0;
    this.anioSelected = this.getYearFromUrl();
  }

  get saldoTitle() {
    return this.translate.instant('yearScreen.yearBalance');
  }

  ngOnInit() {
    this.getPrimerConsumo();
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  getPrimerConsumo() {
    var _this = this;

    return (0,C_JLE_Code_controlgastos_Mobile_Android_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      const source$ = yield _this._diarioService.getPrimerConsumo();

      try {
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(source$);
        const anioPrimerConsumo = Number(data.firstTransaction.substring(0, 4));
        const anioUltimoConsumo = Number(data.lastTransaction.substring(0, 4));

        for (let _i = anioUltimoConsumo; _i >= anioPrimerConsumo; _i--) {
          _this.anios.push(_i);
        }

        _this.getData();
      } catch (error) {
        _this.loading = false;

        _this._helperService.showSnackBarError(_this.snackBar, _this._helperService.getErrorMessage(error));
      }
    })();
  }

  showOpenSaldo() {
    const saldos = [];
    const saldoItem = {
      title: 'Año' + this._helperService.toCamelCase(this._datePipe.transform(new Date(this.anioSelected, 1, 1), 'yyyy')),
      icon: 'airplay',
      ingresos: this.getIngresos(),
      egresos: this.getEgresos(),
      concept: 'anual',
      date: new Date(this.anioSelected, 1, 1)
    };
    saldos.push(saldoItem);
    this.saldoAbierto.open(_saldo_abierto_saldo_abierto_component__WEBPACK_IMPORTED_MODULE_1__.SaldoAbiertoComponent, {
      width: '500px',
      data: {
        saldos
      }
    });
  }

  loadYearDetails(row) {
    var _this2 = this;

    return (0,C_JLE_Code_controlgastos_Mobile_Android_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loadingDetail = true;
      _this2.openItem = row.description;
      _this2.itemDetail = [];

      const source$ = _this2._diarioService.getConceptosMovimAnio(row.conceptId, _this2.anioSelected);

      try {
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(source$);
        _this2.itemDetail = data;

        _this2.itemDetail.forEach(element => {
          const fecha = _this2._helperService.convertStringMMYYYYToDate(element.month);

          element.MonthFormatted = _this2._helperService.toCamelCase(_this2._datePipe.transform(fecha, 'LLLL yyyy'));
        });

        _this2.loadingDetail = false;

        _this2.router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DASHBOARD, _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.ANUAL, _this2.anioSelected, _this2.openItem], {
          replaceUrl: false
        });
      } catch (error) {
        _this2.loading = false;

        _this2._helperService.showSnackBarError(_this2.snackBar, _this2._helperService.getErrorMessage(error));
      }
    })();
  }

  onChangeYear() {
    this.router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DASHBOARD, _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.ANUAL, this.anioSelected, this.openItem], {
      replaceUrl: false
    });
    this.getData();
  }

  goToMonth(fecha, concepto) {
    const fechaFormated = this.convertMMYYYYToYYYYMM(fecha);
    this.router.navigate([_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.DASHBOARD, _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__.UrlConstants.MENSUAL, fechaFormated, concepto]);
  }

  getOpenItem() {
    return this.activeRoute.snapshot.paramMap.get('open');
  }

  scrollToItem(item) {
    setTimeout(function (itemToScroll) {
      if (itemToScroll === 'none') {
        return;
      }

      const elmnt = document.getElementById('item' + itemToScroll);

      if (elmnt === null) {
        return;
      }

      elmnt.scrollIntoView({
        block: 'start',
        behavior: 'auto'
      });
      const tt = document.getElementById('mainTable');

      if (tt !== null) {
        tt.scrollTop = tt.scrollTop - 30;
      }
    }, 1, item);
  }

  convertToNumberArray(dataIn) {
    if (dataIn !== undefined) {
      const importes = [];
      dataIn.forEach(function (value) {
        importes.push(value.balance);
      });
      return importes;
    }

    return [];
  }

  getYearFromUrl() {
    const dateUrl = this.activeRoute.snapshot.paramMap.get('anio');
    return Number(dateUrl);
  }

  getIngresos() {
    return this.calculationService.getIngresos(this.convertToNumberArray(this.conceptosTotales));
  }

  getEgresos() {
    return this.calculationService.getEgresos(this.convertToNumberArray(this.conceptosTotales));
  }

  getData() {
    var _this3 = this;

    return (0,C_JLE_Code_controlgastos_Mobile_Android_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      _this3.loading = true;

      const source$ = _this3._diarioService.getConceptosTotalAnio(_this3.anioSelected);

      try {
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(source$);
        _this3.conceptosTotales = data;
        _this3.saldoAnual = _this3.getIngresos() - _this3.getEgresos();
        _this3.loading = false;
        _this3.openItem = (_a = _this3.getOpenItem()) !== null && _a !== void 0 ? _a : '';

        _this3.scrollToItem(_this3.openItem);
      } catch (error) {
        _this3.loading = false;

        _this3._helperService.showSnackBarError(_this3.snackBar, _this3._helperService.getErrorMessage(error));
      }
    })();
  }

  convertMMYYYYToYYYYMM(fecha) {
    return fecha.substring(2, 8) + '-' + fecha.substring(0, 2);
  }

}

AnualComponent.ɵfac = function AnualComponent_Factory(t) {
  return new (t || AnualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_diario_service__WEBPACK_IMPORTED_MODULE_3__.DiarioService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_sharedServices_calculationService__WEBPACK_IMPORTED_MODULE_5__.CalculationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_6__.HelperService));
};

AnualComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AnualComponent,
  selectors: [["app-anual"]],
  decls: 2,
  vars: 2,
  consts: [["class", "loading", 4, "ngIf"], [4, "ngIf"], [1, "loading"], ["diameter", "70", "strokeWidth", "5"], [1, "header"], [1, "column"], [1, "anioSelect"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "column", "saldos"], [3, "titulo", "saldo", "saldoClicked"], ["id", "mainTable", 1, "tableContent"], [1, "conceptos-table"], [3, "expanded", "opened", 4, "ngFor", "ngForOf"], [3, "value"], [3, "expanded", "opened"], [3, "id"], [4, "ngFor", "ngForOf"], ["matLine", ""], [1, "itemDescription", 3, "click"], [1, "itemAmount", 3, "click"]],
  template: function AnualComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AnualComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AnualComponent_div_1_Template, 14, 8, "div", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatSpinner, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _saldo_saldo_component__WEBPACK_IMPORTED_MODULE_7__.SaldoComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__.MatAccordion, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__.MatExpansionPanelDescription, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatLine],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe],
  styles: [".header[_ngcontent-%COMP%] {\n  display: table;\n  margin: 0 auto;\n  clear: both;\n  width: 60%;\n  text-align: center;\n}\n\n.column[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\n\n.saldos[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.anioSelect[_ngcontent-%COMP%] {\n    width: 100px;\n    margin-left: 5px;\n    margin-top: 10px;\n}\n\n.tableContent[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    width: 100%;\n    height: 84%;\n    top: 16%;\n    overflow-y: scroll;\n    max-block-size: -webkit-fill-available;\n}\n\n.conceptos-table[_ngcontent-%COMP%] {\n    width: 60%;\n}\n\n.mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.itemDescription[_ngcontent-%COMP%] {\n    float: left;\n    font-size: small;\n}\n\n.itemAmount[_ngcontent-%COMP%] {\n    float: right;;\n    font-size: small;\n}\n\n@media only screen and (max-width: 600px) {\n    .conceptos-table[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .header[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmOztJQUVBO01BQ0UsV0FBVztJQUNiO0FBQ0oiLCJmaWxlIjoiYW51YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogNjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnNhbGRvcyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5hbmlvU2VsZWN0IHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udGFibGVDb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg0JTtcbiAgICB0b3A6IDE2JTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgbWF4LWJsb2NrLXNpemU6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5jb25jZXB0b3MtdGFibGUge1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaXRlbURlc2NyaXB0aW9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uaXRlbUFtb3VudCB7XG4gICAgZmxvYXQ6IHJpZ2h0OztcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNvbmNlcHRvcy10YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 5849:
/*!****************************************************!*\
  !*** ./src/_modules/anual/anual-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnualRoutingModule": () => (/* binding */ AnualRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_anual_anual_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../_components/anual/anual.component */ 559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: ':anio/:open', component: _components_anual_anual_component__WEBPACK_IMPORTED_MODULE_0__.AnualComponent }
];
class AnualRoutingModule {
}
AnualRoutingModule.ɵfac = function AnualRoutingModule_Factory(t) { return new (t || AnualRoutingModule)(); };
AnualRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AnualRoutingModule });
AnualRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnualRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4544:
/*!********************************************!*\
  !*** ./src/_modules/anual/anual.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnualModule": () => (/* binding */ AnualModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 3107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _anual_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anual-routing.module */ 5849);
/* harmony import */ var _components_anual_anual_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_components/anual/anual.component */ 559);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class AnualModule {
}
AnualModule.ɵfac = function AnualModule_Factory(t) { return new (t || AnualModule)(); };
AnualModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AnualModule });
AnualModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _anual_routing_module__WEBPACK_IMPORTED_MODULE_1__.AnualRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AnualModule, { declarations: [_components_anual_anual_component__WEBPACK_IMPORTED_MODULE_2__.AnualComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _anual_routing_module__WEBPACK_IMPORTED_MODULE_1__.AnualRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src__modules_anual_anual_module_ts.js.map