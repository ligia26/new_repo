(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_shared__services_resource-filter_service_ts-src_app_standalone-components_dashboard-h-29d14b"],{

/***/ 41682:
/*!*************************************************************!*\
  !*** ./src/app/shared/_services/resource-filter.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceFilterService": () => (/* binding */ ResourceFilterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32673);




let ResourceFilterService = class ResourceFilterService {
  constructor(http) {
    this.http = http;
    // resource type state
    this.resourceTypeState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.resourceTypeObs$ = this.resourceTypeState.asObservable();
    // resources pagination and filters state
    this.resourceListState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.resourceListObs$ = this.resourceListState.asObservable();
    // resource template state
    this.resourceTemplateState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.resourceTemplateObs$ = this.resourceTemplateState.asObservable();
    // selected resource state
    this.resourceState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.resourceObs$ = this.resourceState.asObservable();
    // filters
    this.filtersObj = null;
    // data we save from filter-bar component, but don't use to filter resources
    this.savedFilters = null;
    // pagination
    this.pageNr = 0;
    this.pageSize = 10;
    // used for the modal in the itineraries
    this.resourceFromItinerary = null;
  }
  checkIfItineraryModal() {
    return !!this.resourceFromItinerary;
  }
  setResourceFromItinerary(resource) {
    this.resourceFromItinerary = resource;
  }
  getResourceFromItinerary() {
    return structuredClone(this.resourceFromItinerary);
  }
  initServiceStates() {
    this.resourceTypeState.next(null);
    this.resourceListState.next(null);
    this.resourceTemplateState.next(null);
    this.resourceState.next(null);
    this.filtersObj = null;
    this.savedFilters = null;
    this.resourceFromItinerary = null;
  }
  getResourceTypeById(resourceTypeId) {
    this.filtersObj = {
      resourceTypeId: resourceTypeId,
      status: 'active'
    };
    this.savedFilters = null;
    return this.http.get('/bestinform/getResourceTypeById?resourceTypeId=' + resourceTypeId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(res => {
      if (res) {
        this.resourceTypeState.next(res);
        return this.resourceTypeObs$;
      }
    }));
  }
  setResourceType(resourceType) {
    this.resourceTypeState.next(resourceType);
  }
  getAllCitiesRecommended(city) {
    return this.http.get('/bestinform/getAllCitiesRecommended?city=' + city);
  }
  listResourceFiltered(page, size, sort, dir) {
    this.pageNr = page;
    this.pageSize = size;
    this.sortBy = sort;
    this.sortDirection = dir;
    return this.http.post('/bestinform/listResourceFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, this.filtersObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(res => {
      if (res) {
        this.resourceListState.next(res);
        return this.resourceListObs$;
      }
    }));
  }
  updateFilters(newFilters) {
    this.filtersObj = {
      ...this.filtersObj,
      ...newFilters
    };
    return this.http.post('/bestinform/listResourceFiltered?page=' + this.pageNr + '&size=' + this.pageSize + '&sort=' + this.sortBy + '&dir=' + this.sortDirection, this.filtersObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(res => {
      if (res) {
        this.resourceListState.next(res);
        return this.resourceListObs$;
      }
    }));
  }
  getResourceTemplateByResourceTypeId(resourceTypeId) {
    return this.http.post('/bestinform/listResourceTemplateFiltered?page=0&size=1', {
      resourceTypeId: resourceTypeId
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(res => {
      if (res?.content?.length > 0) {
        this.resourceTemplateState.next(res.content[0]);
        return this.resourceTemplateObs$;
      } else {
        this.resourceTemplateState.next(null);
        return this.resourceTemplateObs$;
      }
    }));
  }
  updateSavedFilters(newFilters) {
    this.savedFilters = {
      ...newFilters
    };
  }
  getSavedFilters() {
    return this.savedFilters;
  }
  isValidResource(resource) {
    return 'domain' in resource && 'categoryId' in resource && 'resourceTypeId' in resource;
  }
  getResourceById(resourceId) {
    // const resourceFromHistory = history.state;
    // if (this.isValidResource(resourceFromHistory) && resourceFromHistory.id === resourceId) {
    //     this.resourceState.next(resourceFromHistory);
    //     return this.resourceObs$;
    // }
    if (this.checkIfItineraryModal()) {
      this.resourceState.next(this.resourceFromItinerary);
      return this.resourceObs$;
    }
    return this.http.get('/bestinform/getResourceById?resourceId=' + resourceId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(res => {
      if (res) {
        this.resourceState.next(res);
      }
      return this.resourceObs$;
    }));
  }
  getFilterAttributeFromTemplate(templateId) {
    return this.http.get('/bestinform/getFilterAttributeFromTemplate?templateId=' + templateId);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};
ResourceFilterService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], ResourceFilterService);


/***/ }),

/***/ 54021:
/*!**************************************************************************************!*\
  !*** ./src/app/standalone-components/dashboard-header/dashboard-header.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardHeaderComponent": () => (/* binding */ DashboardHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-header.component.html?ngResource */ 88876);
/* harmony import */ var _dashboard_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-header.component.scss?ngResource */ 75770);
/* harmony import */ var _dashboard_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







let DashboardHeaderComponent = class DashboardHeaderComponent {
  constructor() {
    this.isCallUsed = false;
    this.isExtraCallUsed = false;
    this.isBackCallUsed = false;
    this.buttonCall = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.buttonExtraCall = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.buttonBackCall = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  handleCall() {
    this.buttonCall.emit();
  }
  handleExtraCall() {
    this.buttonExtraCall.emit();
  }
  handleBackCall() {
    this.buttonBackCall.emit();
  }
  ngOnInit() {
    this.isBackCallUsed = this.buttonBackCall.observed;
    this.isCallUsed = this.buttonCall.observed;
    this.isExtraCallUsed = this.buttonExtraCall.observed;
  }
  static #_ = this.propDecorators = {
    pageTitleOne: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    routeTitleOne: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    pageTitleTwo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    routeTitleTwo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    pageTitleThree: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    routeTitleThree: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonBackRoute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonAddRoute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonCallName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonCall: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    buttonExtraName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonExtraCall: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    buttonBackName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonBackCall: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  };
};
DashboardHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule],
  template: _dashboard_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dashboard_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DashboardHeaderComponent);


/***/ }),

/***/ 75770:
/*!***************************************************************************************************!*\
  !*** ./src/app/standalone-components/dashboard-header/dashboard-header.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".page-titles-row h2 {\n  margin-bottom: 0;\n  opacity: 0.48;\n  cursor: pointer;\n}\n.page-titles-row h2.active-page-link {\n  opacity: 1;\n}\n.page-titles-row h2.no-pointer {\n  cursor: default;\n}\n.page-titles-row h2:not(:last-child) {\n  margin-right: 30px;\n}\n.page-titles-row h2:not(:last-child)::after {\n  content: \"/\";\n  position: absolute;\n  margin-left: 10px;\n}\n\n.titleBar {\n  padding: 35px 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/standalone-components/dashboard-header/dashboard-header.component.scss"],"names":[],"mappings":"AACE;EACE,gBAAA;EACA,aAAA;EACA,eAAA;AAAJ;AAGE;EACE,UAAA;AADJ;AAIE;EACE,eAAA;AAFJ;AAKE;EACE,kBAAA;AAHJ;AAME;EACE,YAAA;EACA,kBAAA;EACA,iBAAA;AAJJ;;AAQA;EACE,iBAAA;AALF","sourcesContent":[".page-titles-row {\n  h2 {\n    margin-bottom: 0;\n    opacity: 0.48;\n    cursor: pointer;\n  }\n\n  h2.active-page-link {\n    opacity: 1;\n  }\n\n  h2.no-pointer {\n    cursor: default;\n  }\n\n  h2:not(:last-child) {\n    margin-right: 30px;\n  }\n\n  h2:not(:last-child)::after {\n    content: '/';\n    position: absolute;\n    margin-left: 10px;\n  }\n}\n\n.titleBar {\n  padding: 35px 0px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88876:
/*!***************************************************************************************************!*\
  !*** ./src/app/standalone-components/dashboard-header/dashboard-header.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row align-items-center titleBar\">\n    <div class=\"col-xxl-7 col-xl-6 page-titles-row\">\n        <div class=\"d-flex flex-wrap\">\n            <h2 [routerLink]=\"routeTitleOne\" routerLinkActive=\"active-page-link\" [ngClass]=\"(routeTitleTwo === undefined && routeTitleThree === undefined) ? 'active-page-link no-pointer': ''\"\n                *ngIf=\"pageTitleOne\">{{pageTitleOne}}</h2>\n            <h2 [routerLink]=\"routeTitleTwo\" routerLinkActive=\"active-page-link\"\n                *ngIf=\"pageTitleTwo\">{{pageTitleTwo}}</h2>\n            <h2 [routerLink]=\"routeTitleThree\" routerLinkActive=\"active-page-link\"\n                *ngIf=\"pageTitleThree\">{{pageTitleThree}}</h2>\n        </div>\n\n    </div>\n\n    <div class=\"col-xxl-5 col-xl-6 page-buttons-row\">\n        <div class=\"d-flex flex-wrap justify-content-xl-end gap-2\">\n            <button id=\"btnBack\" type=\"button\" class=\"btn-long btn-color-outline\" [routerLink]=\"buttonBackRoute\" *ngIf=\"buttonBackRoute\">\n                <i class=\"fas fa-arrow-left\"></i>\n                {{ 'BTN.BACK' | translate}}\n            </button>\n            <button id=\"btnAdd\" class=\"btn-long btn-color-fill ms-sm-2\" type=\"button\" [routerLink]=\"buttonAddRoute\" *ngIf=\"buttonAddRoute\">\n                <i class=\"fas fa-plus\"></i>\n                {{ 'BTN.ADD' | translate }}\n            </button>\n            <button id=\"btnExtra\" type=\"button\" class=\"btn-long btn-color-fill ms-sm-2\" (click)=\"handleExtraCall()\" *ngIf=\"isExtraCallUsed && buttonExtraName\">\n                <i class=\"fas fa-pen\"></i>\n                {{buttonExtraName}}\n            </button>\n            <button id=\"btnBk\" class=\"btn-long btn-color-outline\" type=\"button\" (click)=\"handleBackCall()\" *ngIf=\"isBackCallUsed\">\n                <i class=\"fas fa-arrow-left\"></i>\n                <span *ngIf=\"!buttonBackName\">\n                    {{ 'BTN.BACK' | translate }}\n                </span>\n                <span *ngIf=\"buttonBackName\">\n                    {{buttonBackName}}\n                </span>\n            </button>\n            <button id=\"btnSave\" class=\"btn-long btn-color-fill ms-sm-2\" type=\"button\" (click)=\"handleCall()\" *ngIf=\"isCallUsed\">\n                <i class=\"fas fa-save\"></i>\n                <span *ngIf=\"!buttonCallName\">\n                    {{ 'BTN.SAVE' | translate }}\n                </span>\n                <span *ngIf=\"buttonCallName\">\n                    {{buttonCallName}}\n                </span>\n            </button>\n\n\n        </div>\n    </div>\n</div>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_shared__services_resource-filter_service_ts-src_app_standalone-components_dashboard-h-29d14b.js.map