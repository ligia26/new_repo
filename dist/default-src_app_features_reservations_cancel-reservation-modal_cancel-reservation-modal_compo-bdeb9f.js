(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_features_reservations_cancel-reservation-modal_cancel-reservation-modal_compo-bdeb9f"],{

/***/ 61723:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/reservations/cancel-reservation-modal/cancel-reservation-modal.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelReservationModalComponent": () => (/* binding */ CancelReservationModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cancel_reservation_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-reservation-modal.component.html?ngResource */ 2492);
/* harmony import */ var _cancel_reservation_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-reservation-modal.component.scss?ngResource */ 810);
/* harmony import */ var _cancel_reservation_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cancel_reservation_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);
/* harmony import */ var src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/reservations.service */ 84803);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);












let CancelReservationModalComponent = class CancelReservationModalComponent {
  constructor(userService, reservationService, activeModal, modalService, toastService, router, route) {
    this.userService = userService;
    this.reservationService = reservationService;
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.toastService = toastService;
    this.router = router;
    this.route = route;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.reason = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(20), this.noWhitespaceValidator]);
  }
  ngOnInit() {
    this.reservationId = this.modalService.getElementId();
    this.getCurrentUser();
  }
  //no white space validator
  noWhitespaceValidator(control) {
    const isWhitespace = (control && control.value && control.value.toString() || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {
      'whitespace': true
    };
  }
  //get current user role, for redirect after close modal"
  getCurrentUser() {
    this.userService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.userData = res;
        this.userData.roles.forEach(role => {
          this.userRole = role;
        });
      }
    });
  }
  getReservationById(id) {
    //resourceId used for reservation list(queryParams), after cancel-reservation
    this.reservationService.getReservationById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        //go to confirmation page after cancel the reservation
        if (this.userRole === 'ROLE_STAFF') {
          this.router.navigate(['/private/staff/reservations/cancelled-reservation/' + res.resourceId]);
        } else if (this.userRole === 'ROLE_SUPER_ADMIN') {
          this.router.navigate(['/private/admin/reservations/cancelled-reservation/' + res.resourceId]);
        } else if (this.userRole === 'ROLE_PROVIDER') {
          this.router.navigate(['/private/provider/reservations/cancelled-reservation/' + res.resourceId]);
        } else {
          this.router.navigate(['/client/dashboard/my-bookings']);
        }
      }
    });
  }
  cancelReservation(reservationId) {
    // this.reservationId = this.modalService.getElementId();
    const reasonVal = this.reason.value;
    this.reservationService.changeReservationStatus('canceled', reservationId, reasonVal).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log('asta dupa ce am cancelat rezervarea', res);
        this.modalService.triggerUserListChanges(true);
        this.toastService.showToast('Succes', 'Rezervare anulata cu succes!', 'success');
        this.closeModal();
      },
      error: err => {
        console.log('eroarea dupa ce am cancelat rezervarea', err);
        this.toastService.showToast('Eroare', 'A aparut o problema!', 'error');
      }
    });
  }
  confirmCancellation() {
    this.reason.markAsTouched();
    if (this.reason.invalid) return;
    //  this.cancelReservation(this.reservationId);
    //  this.getReservationById(this.reservationId);
    this.reservationService.changeReservationStatus('canceled', this.reservationId, this.reason.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.reservationService.getReservationById(this.reservationId))).subscribe(res => {
      console.log(res);
      this.toastService.showToast('Succes', 'Rezervare anulata cu succes!', 'success');
      // Code to execute after both cancelReservation and getReservationById are done
      if (this.userRole === 'ROLE_STAFF') {
        this.router.navigate(['/private/staff/reservations/cancelled-reservation/' + res.resourceId]);
      } else if (this.userRole === 'ROLE_SUPER_ADMIN') {
        this.router.navigate(['/private/admin/reservations/cancelled-reservation/' + res.resourceId]);
      } else if (this.userRole === 'ROLE_PROVIDER') {
        this.router.navigate(['/private/provider/reservations/cancelled-reservation/' + res.resourceId]);
      } else {
        this.router.navigate(['/client/dashboard/my-bookings']);
      }
      // this.closeModal();
    });

    this.closeModal();
    // //resourceId used for reservation list(queryParams), after cancel-reservation
    // this.reservationService.getReservationById(this.reservationId)
    // .pipe(takeUntil(this.ngUnsubscribe))
    // .subscribe({
    //   next: (res:any)=>{
    //     //go to confirmation page after cancel the reservation
    //     if(this.userRole ==='ROLE_STAFF'){
    //       this.router.navigate(['/private/staff/reservations/cancelled-reservation/'+res.resourceId]);
    //     }else if(this.userRole ==='ROLE_SUPER_ADMIN'){
    //       this.router.navigate(['/private/admin/reservations/cancelled-reservation/'+res.resourceId])
    //     }else if(this.userRole ==='ROLE_PROVIDER'){
    //       this.router.navigate(['/private/provider/reservations/cancelled-reservation/'+res.resourceId])
    //     }else{
    //       this.router.navigate(['/client/dashboard/my-bookings'])
    //       return; 
    //     }
    //   }}
    // );
    console.log("confirmed cancellation");
  }
  // Close modal
  closeModal() {
    this.activeModal.close();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService
  }, {
    type: src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__.ReservationsService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbActiveModal
  }, {
    type: src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalService
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
  }];
};
CancelReservationModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-cancel-reservation-modal',
  template: _cancel_reservation_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_cancel_reservation_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CancelReservationModalComponent);


/***/ }),

/***/ 25560:
/*!******************************************************!*\
  !*** ./src/app/shared/_services/settings.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsService": () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let SettingsService = class SettingsService {
  constructor(http) {
    this.http = http;
  }
  getCurrentSettings() {
    return this.http.get('/bestinform/getCurrentSetting');
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
SettingsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], SettingsService);


/***/ }),

/***/ 52311:
/*!*******************************************************!*\
  !*** ./src/app/shared/_services/smartbill.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartBillService": () => (/* binding */ SmartBillService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.service */ 25560);




let SmartBillService = class SmartBillService {
  constructor(http, settingService) {
    // this.settingService.getSettings().subscribe((settingsData: any) => {
    //
    //     this.settingsData = settingsData;
    //     this.userEmail = settingsData.smartBillEmail;
    //     this.userToken = settingsData.smartBillToken;
    //
    //     this.httpHeaderOptions = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'authorization': 'Basic ' + btoa(this.userEmail + ":" + this.userToken)
    //         })
    //     };
    //
    //     this.getHttpOptions = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/xml',
    //             'Accept': 'application/xml, application/octet-stream',
    //             'authorization': 'Basic ' + btoa(this.userEmail + ":" + this.userToken),
    //             'Content-Disposition': 'attachment'
    //         })
    //     }
    // })
    this.http = http;
    this.settingService = settingService;
    this.userEmail = "bestinform.eu@yahoo.com";
    this.userToken = "002|99f836f3345e942bb685edeb6b149355";
    this.httpHeaderOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': 'Basic ' + btoa(this.userEmail + ":" + this.userToken)
      })
    };
    this.getHttpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/xml',
        'Accept': 'application/xml, application/octet-stream',
        'authorization': 'Basic ' + btoa(this.userEmail + ":" + this.userToken),
        'Content-Disposition': 'attachment'
      })
    };
  }
  // createInvoice(invoiceData: any) {
  //     return this.http.post('https://ws.smartbill.ro/SBORO/api/invoice', invoiceData, this.httpHeaderOptions);
  // }
  //
  // createProformaInvoice(proformaData: any) {
  //     return this.http.post('https://ws.smartbill.ro/SBORO/api/estimate', proformaData, this.httpHeaderOptions);
  // }
  //
  // sendInvoiceEmail(invoiceEmail: any) {
  //     return this.http.post('https://ws.smartbill.ro/SBORO/api/document/send', invoiceEmail, this.httpHeaderOptions);
  // }
  downloadFile(seriesName, seriesNumber) {
    return this.http.get('https://ws.smartbill.ro/SBORO/api/invoice/pdf?cif=RO28554014&seriesname=' + seriesName + '&number=' + seriesNumber, {
      headers: this.getHttpOptions.headers,
      responseType: 'blob'
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }, {
    type: _settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService
  }];
};
SmartBillService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], SmartBillService);


/***/ }),

/***/ 40018:
/*!***************************************************!*\
  !*** ./src/app/shared/_services/trips.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripsService": () => (/* binding */ TripsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);




let TripsService = class TripsService {
  constructor(http) {
    this.http = http;
    // Functions For Changes Detection
    this.listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.listChangedObs = this.listChanged.asObservable();
  }
  // Trigger list changes
  triggerListChanges(message) {
    // Change the subject value
    this.listChanged.next(message);
  }
  listTripReservationsFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listTripReservationsFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  //Reservations
  getTripReservationById(tripReservationId) {
    return this.http.get('/bestinform/getTripReservationById?tripReservationId=' + tripReservationId);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
TripsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], TripsService);


/***/ }),

/***/ 65226:
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }
  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }
  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);
    try {
      b.send();
    } catch (a) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
    a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
    g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
      var i = f.URL || f.webkitURL,
        j = document.createElement("a");
      g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
        i.revokeObjectURL(j.href);
      }, 4E4), setTimeout(function () {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
      if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
        var i = document.createElement("a");
        i.href = f, i.target = "_blank", setTimeout(function () {
          e(i);
        });
      }
    } : function (b, d, e, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
      var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function () {
          var a = k.result;
          a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
        }, k.readAsDataURL(b);
      } else {
        var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
        g ? g.location = m : location.href = m, g = null, setTimeout(function () {
          l.revokeObjectURL(m);
        }, 4E4);
      }
    });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

/***/ }),

/***/ 810:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/reservations/cancel-reservation-modal/cancel-reservation-modal.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.container {\n  padding: 32px 52px;\n  border: none;\n}\n\n@media screen and (min-width: 1020px) {\n  .container.modal-content {\n    border: none;\n  }\n}\n.modal-header {\n  border: none;\n  max-width: 615.95px;\n}\n.modal-header h4.modal-title {\n  color: #24398A !important;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 33.6px;\n  text-align: left;\n}\n\n.modal-body {\n  max-width: 615.95px;\n}\n.modal-body .modal-body-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: #231F20;\n  line-height: 22.4px;\n  text-align: left;\n}\n\n.modal-footer {\n  max-width: 615.95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n.modal-footer .button-wrapper {\n  justify-content: space-evenly;\n  max-width: 615.95px;\n  flex-wrap: wrap;\n}\n.modal-footer button.btn-long {\n  align-items: center;\n  max-width: 303px !important;\n  height: 50px;\n  margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/reservations/cancel-reservation-modal/cancel-reservation-modal.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,YAAA;AAkBF;;AAfA;EACE;IACE,YAAA;EAkBF;AACF;AAdA;EACE,YAAA;EACA,mBAAA;AAgBF;AAdE;EACE,yBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AAgBJ;;AAZA;EACE,mBAAA;AAeF;AAbE;EACE,eAAA;EACA,gBAAA;EACA,cD3BQ;EC4BR,mBAAA;EACA,gBAAA;AAeJ;;AAXA;EAEE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAaF;AAXE;EACE,6BAAA;EACA,mBAAA;EACA,eAAA;AAaJ;AAVE;EACE,mBAAA;EACA,2BAAA;EACA,YAAA;EACA,SAAA;AAYJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import '/src/app/theme/styles/components/colors';\n\n.container {\n  padding: 32px 52px;\n  border: none;\n}\n\n@media screen and (min-width: 1020px) {\n  .container.modal-content {\n    border: none;\n  }\n}\n\n\n.modal-header {\n  border: none;\n  max-width: 615.95px;\n\n  h4.modal-title {\n    color: $primary-color !important;\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 33.6px;\n    text-align: left;\n  }\n}\n\n.modal-body {\n  max-width: 615.95px;\n\n  .modal-body-text {\n    font-size: 16px;\n    font-weight: 400;\n    color: $paragraph;\n    line-height: 22.4px;\n    text-align: left;\n  }\n}\n\n.modal-footer {\n\n  max-width: 615.95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n\n  .button-wrapper {\n    justify-content: space-evenly;\n    max-width: 615.95px;\n    flex-wrap: wrap;\n  }\n\n  button.btn-long {\n    align-items: center;\n    max-width: 303px !important;\n    height: 50px;\n    margin: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2492:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/reservations/cancel-reservation-modal/cancel-reservation-modal.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid app blue\">\n    <div class=\"container modal-content\">\n        <!--Header-->\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">{{'RESERVATION.CANCELLATION-RESERVATION' | translate}}</h4>\n            <i class=\"fas fa-times\" (click)=\"closeModal()\"></i>\n        </div>\n        <!--Body-->\n        <div class=\"modal-body\">\n            <span class=\"modal-body-text\">{{'RESERVATION.CANCEL-MSG' | translate}}</span>\n\n            <p class=\"mb-0 mt-4\">\n                <mat-form-field class=\"w-100\" appearance=\"outline\">\n                    <mat-label>Motiv anulare</mat-label>\n                    <input [formControl]=\"reason\"\n                           matInput placeholder=\"Motiv anulare...\">\n                    <mat-error *ngIf=\"reason.hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                    <mat-error *ngIf=\"reason.hasError('minlength')\">Trebuie sa contina cel putin 20 caractere</mat-error>\n                    <mat-error *ngIf=\"reason.hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                    </mat-error>\n                    <mat-icon role=\"button\" *ngIf=\"reason.value\" matSuffix (click)=\"reason.setValue(null)\">clear</mat-icon>\n                </mat-form-field>\n            </p>\n        </div>\n        <!--Footer-->\n        <div class=\"p-3\">\n            <div class=\"row gap-2 gap-xl-0\">\n                <div class=\"col-12 col-xl-6\">\n                    <button type=\"button\" class=\"btn-long btn-color-outline w-100\"\n                            (click)=\"closeModal()\">\n                        <i class=\"fas fa-times\"></i>\n                        {{ 'BTN.CANCEL' | translate}}\n                    </button>\n                </div>\n\n                <div class=\"col-12 col-xl-6\">\n                    <button type=\"button\" class=\"btn-long btn-color-fill w-100\"\n                            (click)=\"confirmCancellation()\"\n                            routerLinkActive=\"active\">\n                        <i class=\"fas fa-check\"></i>\n                        {{ 'BTN.CONFIRM' | translate}}\n                    </button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_reservations_cancel-reservation-modal_cancel-reservation-modal_compo-bdeb9f.js.map