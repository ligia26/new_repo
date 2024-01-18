(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_features_secondary-pages_secondary-pages_module_ts"],{

/***/ 70491:
/*!*********************************************************************!*\
  !*** ./src/app/features/secondary-pages/_services/pages.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesService": () => (/* binding */ PagesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let PagesService = class PagesService {
  constructor(http) {
    this.http = http;
  }
  listSecondaryPages() {
    return this.http.get('/bestinform/listSecondaryPage');
  }
  getSecondaryPageById(id) {
    return this.http.get('/bestinform/getSecondaryPageById?secondaryPageId=' + id);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
PagesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], PagesService);


/***/ }),

/***/ 66334:
/*!*************************************************************************************!*\
  !*** ./src/app/features/secondary-pages/privacy-policy/privacy-policy.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyComponent": () => (/* binding */ PrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _privacy_policy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.component.html?ngResource */ 96625);
/* harmony import */ var _privacy_policy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.component.scss?ngResource */ 89547);
/* harmony import */ var _privacy_policy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_privacy_policy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/pages.service */ 70491);





let PrivacyPolicyComponent = class PrivacyPolicyComponent {
  constructor(pagesService) {
    this.pagesService = pagesService;
  }
  ngOnInit() {
    this.pagesService.listSecondaryPages().subscribe(resp => {
      console.log('Lista pagini secundare');
      console.log(resp);
      const privacyPolicyId = resp.find(obj => {
        return obj.name === 'Privacy Policy';
      }).id;
      this.pagesService.getSecondaryPageById(privacyPolicyId).subscribe(page => {
        this.content = page.content;
        console.log(this.content);
      });
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_pages_service__WEBPACK_IMPORTED_MODULE_2__.PagesService
  }];
};
PrivacyPolicyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-privacy-policy',
  template: _privacy_policy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_privacy_policy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PrivacyPolicyComponent);


/***/ }),

/***/ 2951:
/*!***********************************************************************!*\
  !*** ./src/app/features/secondary-pages/secondary-pages.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryPagesComponent": () => (/* binding */ SecondaryPagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _secondary_pages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secondary-pages.component.html?ngResource */ 50376);
/* harmony import */ var _secondary_pages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondary-pages.component.scss?ngResource */ 26086);
/* harmony import */ var _secondary_pages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_secondary_pages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 38699);






let SecondaryPagesComponent = class SecondaryPagesComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.selectedValue = "ro";
    this.langName = '';
    this.currentApplicationVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appVersion;
  }
  ngOnInit() {}
  changeLang(lang) {
    this.translateService.use(lang);
    this.langName = this.getLangName(lang);
  }
  getLangName(lang) {
    if (lang == 'en') {
      return 'English';
    } else if (lang == 'ro') {
      return 'Romanian';
    } else {
      return 'English';
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService
  }];
};
SecondaryPagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-secondary-pages',
  template: _secondary_pages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_secondary_pages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SecondaryPagesComponent);


/***/ }),

/***/ 24725:
/*!********************************************************************!*\
  !*** ./src/app/features/secondary-pages/secondary-pages.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryPagesModule": () => (/* binding */ SecondaryPagesModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ 66334);
/* harmony import */ var _secondary_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secondary-pages.component */ 2951);
/* harmony import */ var _public_homepage_public_homepage_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public-homepage/public-homepage.module */ 5139);
/* harmony import */ var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms-and-conditions/terms-and-conditions.component */ 53324);











const routes = [{
  path: '',
  component: _secondary_pages_component__WEBPACK_IMPORTED_MODULE_3__.SecondaryPagesComponent,
  children: [{
    path: 'privacy-policy',
    component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_2__.PrivacyPolicyComponent
  }, {
    path: 'terms-and-conditions',
    component: _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_5__.TermsAndConditionsComponent
  }]
}];
let SecondaryPagesModule = class SecondaryPagesModule {};
SecondaryPagesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  declarations: [_secondary_pages_component__WEBPACK_IMPORTED_MODULE_3__.SecondaryPagesComponent, _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_2__.PrivacyPolicyComponent, _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_5__.TermsAndConditionsComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__.DashboardHeaderComponent, _public_homepage_public_homepage_module__WEBPACK_IMPORTED_MODULE_4__.PublicHomepageModule]
})], SecondaryPagesModule);


/***/ }),

/***/ 53324:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/secondary-pages/terms-and-conditions/terms-and-conditions.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsComponent": () => (/* binding */ TermsAndConditionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _terms_and_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-conditions.component.html?ngResource */ 1881);
/* harmony import */ var _terms_and_conditions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-conditions.component.scss?ngResource */ 96430);
/* harmony import */ var _terms_and_conditions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_terms_and_conditions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/pages.service */ 70491);





let TermsAndConditionsComponent = class TermsAndConditionsComponent {
  constructor(pagesService) {
    this.pagesService = pagesService;
  }
  ngOnInit() {
    this.pagesService.listSecondaryPages().subscribe(resp => {
      console.log('Lista pagini secundare');
      console.log(resp);
      const privacyPolicyId = resp.find(obj => {
        return obj.name === 'Privacy Policy';
      }).id;
      this.pagesService.getSecondaryPageById(privacyPolicyId).subscribe(page => {
        this.content = page.content;
        console.log(this.content);
      });
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_pages_service__WEBPACK_IMPORTED_MODULE_2__.PagesService
  }];
};
TermsAndConditionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-terms-and-conditions',
  template: _terms_and_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_terms_and_conditions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TermsAndConditionsComponent);


/***/ }),

/***/ 89547:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/secondary-pages/privacy-policy/privacy-policy.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26086:
/*!************************************************************************************!*\
  !*** ./src/app/features/secondary-pages/secondary-pages.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.header {\n  background-color: var(--primary-background);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  top: 0;\n  z-index: 999;\n}\n.header .main-header {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n:root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.footer {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  background-color: var(--primary-background);\n  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.08);\n}\n\n/* Set top-lef and bottom-left corner radius */\n:host ::ng-deep .mat-form-field-outline-start {\n  border-radius: 30px 0 0 30px !important;\n  min-width: 30px !important;\n}\n\n/* Set top-right and bottom-right corner radius */\n:host ::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 30px 30px 0 !important;\n}\n\n:host ::ng-deep .private-footer .mat-form-field-wrapper {\n  padding-bottom: 0px !important;\n}\n\n.content-pages {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.header {\n  flex: 0 0 auto;\n}\n\n.content-body {\n  flex: 1 0 auto;\n  overflow-y: auto;\n}\n\n.footer {\n  flex: 0 0 auto;\n}\n\n.footer {\n  /* Set top-lef and bottom-left corner radius */\n  /* Set top-right and bottom-right corner radius */\n}\n.footer p {\n  color: #231F20;\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 0.875rem;\n  margin-bottom: 0.375rem;\n}\n.footer h1 {\n  color: #231F20;\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 2rem;\n  margin-bottom: 0.75rem;\n}\n.footer h5 {\n  color: #231F20;\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n}\n.footer strong {\n  font-weight: 700;\n}\n.footer .contact {\n  margin-bottom: 2.375rem;\n}\n.footer .contact div:first-child {\n  text-align: center;\n}\n.footer .contact .social-media-icons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n.footer .contact .social-media-icons i {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  margin-right: 1.625rem;\n}\n.footer .contact .social-media-icons i:nth-child(5) {\n  margin-right: 0;\n}\n.footer .menu-links div {\n  margin-bottom: 1.5rem;\n}\n.footer .menu-links div p:last-child {\n  margin-bottom: 0;\n}\n.footer .footer {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.08), rgba(36, 57, 138, 0.08)), var(--primary-background);\n}\n.footer .dropdown-toggle::after {\n  display: none;\n}\n.footer .dropdown-menu.show {\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.08), rgba(36, 57, 138, 0.08)), var(--primary-background);\n  color: #231F20;\n}\n.footer .w-fit-content {\n  width: -moz-fit-content;\n  width: fit-content;\n  flex-basis: 100%;\n}\n.footer .btn-white-fill {\n  color: rgba(35, 31, 32, 0.48);\n  border: 1px solid rgba(35, 31, 32, 0.48);\n  background: rgba(35, 31, 32, 0);\n}\n.footer .btn-white-fill i {\n  color: rgba(35, 31, 32, 0.48);\n}\n@media only screen and (min-width: 576px) {\n  .footer .w-fit-content {\n    flex-basis: 50%;\n  }\n  .footer .contact {\n    margin-bottom: 2.375rem;\n  }\n  .footer .contact div:first-child {\n    text-align: start;\n  }\n  .footer .contact .social-media-icons i {\n    margin-top: 0rem;\n    margin-bottom: 0rem;\n    margin-right: 1.625rem;\n  }\n  .footer .contact .social-media-icons i:nth-child(5) {\n    margin-right: 2.5rem;\n  }\n  .footer .contact .social-media-icons img:nth-child(6) {\n    margin-right: 0.75rem;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .footer .w-fit-content {\n    flex-basis: unset;\n  }\n}\n.footer :host ::ng-deep .mat-form-field-outline-start {\n  border-radius: 30px 0 0 30px !important;\n  min-width: 30px !important;\n}\n.footer :host ::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 30px 30px 0 !important;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/secondary-pages/secondary-pages.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EAGE,2CAAA;EACA,2CAAA;EAEA,MAAA;EACA,YAAA;AAcF;AAZE;EACE,iBAAA;EACA,oBAAA;AAcJ;;ADdA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACiBF;;ADdA;EACE,6BAAA;EACA,+BAAA;ACiBF;;ADWA;EACI,oCAAA;ACRJ;;ADWA;EACQ,kCAAA;ACRR;;AA5BA;EAGE,iBAAA;EACA,oBAAA;EACA,2CAAA;EACA,4CAAA;AA6BF;;AA3BA,8CAAA;AACA;EACE,uCAAA;EACA,0BAAA;AA8BF;;AA3BA,iDAAA;AACA;EACE,uCAAA;AA8BF;;AA3BA;EACE,8BAAA;AA8BF;;AA3BA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AA8BF;;AA3BA;EACE,cAAA;AA8BF;;AA3BA;EACE,cAAA;EACA,gBAAA;AA8BF;;AA3BA;EACE,cAAA;AA8BF;;AA3BA;EAmIE,8CAAA;EAMA,iDAAA;AAzGF;AA/BE;EACE,cDzDQ;EC0DR,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;AAiCJ;AA9BE;EACE,cDlEQ;ECmER,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,sBAAA;AAgCJ;AA7BE;EACE,cD3EQ;EC4ER,iCAAA;EACA,kBAAA;EACA,eAAA;EACA,sBAAA;AA+BJ;AA5BE;EACE,gBAAA;AA8BJ;AA3BE;EACE,uBAAA;AA6BJ;AA3BI;EACE,kBAAA;AA6BN;AA1BI;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;AA4BN;AA1BM;EACE,gBAAA;EACA,mBAAA;EACA,sBAAA;AA4BR;AA1BM;EACE,eAAA;AA4BR;AAtBI;EACE,qBAAA;AAwBN;AArBI;EACE,gBAAA;AAuBN;AAnBE;EACE,iBAAA;EACA,oBAAA;EACA,8GAAA;AAqBJ;AAlBE;EACE,aAAA;AAoBJ;AAjBE;EACE,8GAAA;EACA,cDpIQ;ACuJZ;AAhBE;EACE,uBAAA;EAAA,kBAAA;EACA,gBAAA;AAkBJ;AAfE;EACE,6BAAA;EACA,wCAAA;EACA,+BAAA;AAiBJ;AAfI;EACE,6BAAA;AAiBN;AAZE;EACE;IACE,eAAA;EAcJ;EAXE;IACE,uBAAA;EAaJ;EAXI;IACE,iBAAA;EAaN;EATM;IACE,gBAAA;IACA,mBAAA;IACA,sBAAA;EAWR;EATM;IACE,oBAAA;EAWR;EATM;IACE,qBAAA;EAWR;AACF;AANE;EACE;IACE,iBAAA;EAQJ;AACF;AAHE;EACE,uCAAA;EACA,0BAAA;AAKJ;AADE;EACE,uCAAA;AAGJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../theme/styles/components/colors\";\n\n\n.header {\n  //padding-top: 1rem;\n  //padding-bottom: 1rem;\n  background-color: var(--primary-background);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  //position:fixed;\n  top: 0;\n  z-index: 999;\n\n  .main-header {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n@import \"../../theme/styles/components/colors\";\n\n.footer {\n  //position: absolute;\n  //bottom: 0;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  background-color: var(--primary-background);\n  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.08);\n}\n/* Set top-lef and bottom-left corner radius */\n:host ::ng-deep .mat-form-field-outline-start {\n  border-radius: 30px 0 0 30px !important;\n  min-width: 30px !important;\n}\n\n/* Set top-right and bottom-right corner radius */\n:host ::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 30px 30px 0 !important;\n}\n\n:host ::ng-deep .private-footer .mat-form-field-wrapper {\n  padding-bottom: 0px !important;\n}\n\n.content-pages {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.header {\n  flex: 0 0 auto;\n}\n\n.content-body {\n  flex: 1 0 auto;\n  overflow-y: auto;\n}\n\n.footer {\n  flex: 0 0 auto;\n}\n\n.footer {\n  p {\n    color: $paragraph;\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 0.875rem;\n    margin-bottom: 0.375rem;\n  }\n\n  h1 {\n    color: $paragraph;\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 2rem;\n    margin-bottom: 0.75rem;\n  }\n\n  h5 {\n    color: $paragraph;\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-size: 1rem;\n    margin-bottom: 0.75rem;\n  }\n\n  strong {\n    font-weight: 700;\n  }\n\n  .contact {\n    margin-bottom: 2.375rem;\n\n    div:first-child {\n      text-align: center;\n    }\n\n    .social-media-icons {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-items: center;\n\n      i {\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n        margin-right: 1.625rem;\n      }\n      i:nth-child(5) {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .menu-links {\n    div {\n      margin-bottom: 1.5rem;\n    }\n\n    div p:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  .footer {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    background: linear-gradient(0deg, rgba($primary-color, 0.08), rgba($primary-color, 0.08)), var(--primary-background);\n  }\n\n  .dropdown-toggle::after {\n    display: none;\n  }\n\n  .dropdown-menu.show {\n    background: linear-gradient(0deg, rgba($primary-color, 0.08), rgba($primary-color, 0.08)), var(--primary-background);\n    color: $paragraph;\n  }\n\n  .w-fit-content {\n    width: fit-content;\n    flex-basis: 100%;\n  }\n\n  .btn-white-fill {\n    color: rgba($paragraph, 0.48);\n    border: 1px solid rgba($paragraph, 0.48);\n    background: rgba($paragraph, 0%);\n\n    i {\n      color: rgba($paragraph, 0.48);\n    }\n  }\n\n  // media queries\n  @media only screen and (min-width: 576px) {\n    .w-fit-content {\n      flex-basis: 50%;\n    }\n\n    .contact {\n      margin-bottom: 2.375rem;\n\n      div:first-child {\n        text-align: start;\n      }\n\n      .social-media-icons {\n        i {\n          margin-top: 0rem;\n          margin-bottom: 0rem;\n          margin-right: 1.625rem;\n        }\n        i:nth-child(5) {\n          margin-right: 2.5rem;\n        }\n        img:nth-child(6){\n          margin-right: 0.75rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (min-width: 992px) {\n    .w-fit-content {\n      flex-basis: unset;\n    }\n  }\n\n\n  /* Set top-lef and bottom-left corner radius */\n  :host ::ng-deep .mat-form-field-outline-start {\n    border-radius: 30px 0 0 30px !important;\n    min-width: 30px !important;\n  }\n\n  /* Set top-right and bottom-right corner radius */\n  :host ::ng-deep .mat-form-field-outline-end {\n    border-radius: 0 30px 30px 0 !important;\n  }\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 96430:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/secondary-pages/terms-and-conditions/terms-and-conditions.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 96625:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/secondary-pages/privacy-policy/privacy-policy.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Politica de confidențialitate\">\n        </app-dashboard-header>\n\n        <div [innerHTML]=\"content\" class=\"py-3 content-class\">\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 50376:
/*!************************************************************************************!*\
  !*** ./src/app/features/secondary-pages/secondary-pages.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"content-pages\">\n    <div class=\"header container-fluid\">\n        <div class=\"container main-header\">\n            <div class=\"row\">\n                <a class=\"logo col\" [routerLink]=\"'/'\" >\n                    <img src=\"\\assets\\Logo-blue.png\" alt=\"header-logo\">\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"content-body\">\n        <router-outlet></router-outlet>\n    </div>\n    <app-public-footer></app-public-footer>\n</div>\n\n";

/***/ }),

/***/ 1881:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/secondary-pages/terms-and-conditions/terms-and-conditions.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Termeni și condiții\">\n        </app-dashboard-header>\n\n        <div [innerHTML]=\"content\" class=\"py-3 content-class\">\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_secondary-pages_secondary-pages_module_ts.js.map