(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_standalone-components_resource-card_resource-card_component_ts"],{

/***/ 55732:
/*!********************************************!*\
  !*** ./src/app/shared/_pipes/find.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPipe": () => (/* binding */ FindPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let FindPipe = class FindPipe {
  transform(list, callback) {
    if (list && list.length > 0) {
      let foundValue;
      list.forEach(element => {
        if (callback(element)) {
          foundValue = callback(element);
        }
      });
      return foundValue;
    } else {
      return null;
    }
  }
};
FindPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'find',
  standalone: true
})], FindPipe);


/***/ }),

/***/ 40462:
/*!********************************************************************************!*\
  !*** ./src/app/standalone-components/resource-card/resource-card.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceCardComponent": () => (/* binding */ ResourceCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resource_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-card.component.html?ngResource */ 14998);
/* harmony import */ var _resource_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource-card.component.scss?ngResource */ 16764);
/* harmony import */ var _resource_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resource_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_pipes_find_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_pipes/find.pipe */ 55732);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/resources.service */ 3145);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);











let ResourceCardComponent = class ResourceCardComponent {
  constructor(resourcesService, toastService, translate) {
    this.resourcesService = resourcesService;
    this.toastService = toastService;
    this.translate = translate;
    this.allowedToClickBtn = true;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  filterStartHour(attribute) {
    if (attribute.attributeName === 'Ora de inceput') {
      return attribute.attributeValue.toString();
    }
    return null;
  }
  filterStartDate(attribute) {
    if (attribute.attributeName === 'Data de inceput') {
      return attribute.attributeValue.toString();
    }
    return null;
  }
  toggleFavorite() {
    if (!this.allowedToClickBtn) return;
    this.allowedToClickBtn = false;
    if (!this.resource.favorite) {
      this.resourcesService.addResourceToFavorite(this.resource.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: () => {
          this.resource.favorite = true;
          this.allowedToClickBtn = true;
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), `Added ${this.resource.title} to favorites`, 'success');
        },
        error: () => {
          this.allowedToClickBtn = true;
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant('TOAST.SERVER-ERROR'), 'error');
        }
      });
    } else {
      this.resourcesService.deleteResourceFromFavorite(this.resource.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: () => {
          this.resource.favorite = false;
          this.allowedToClickBtn = true;
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), `Removed ${this.resource.title} from favorites`, 'success');
        },
        error: () => {
          this.allowedToClickBtn = true;
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant('TOAST.SERVER-ERROR'), 'error');
        }
      });
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__.ResourcesService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
  }];
  static #_2 = this.propDecorators = {
    resource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }]
  };
};
ResourceCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-resource-card',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_pipes_find_pipe__WEBPACK_IMPORTED_MODULE_2__.FindPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  template: _resource_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_resource_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResourceCardComponent);


/***/ }),

/***/ 16764:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/resource-card/resource-card.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.resource-card {\n  border-radius: 8px;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  max-width: 240px;\n  box-shadow: 0px 4px 8px rgba(35, 31, 32, 0.08);\n  border: 1px solid rgba(36, 57, 138, 0.24);\n}\n\n.img-container {\n  width: 100%;\n  height: 166px;\n  flex-shrink: 0;\n  position: relative;\n}\n.img-container .favorite-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-container .favorite-btn i {\n  font-size: 14px;\n  color: var(--primary-background);\n}\n.img-container .favorite-btn.active {\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.32) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n  border: 1px solid #24398A;\n  transition: background 300ms ease-in-out, border 300ms ease-in-out;\n}\n.img-container .favorite-btn.inactive {\n  background: rgba(35, 31, 32, 0.08);\n  border: 1px solid var(--primary-background);\n}\n.img-container .favorite-btn.inactive:hover {\n  background: rgba(36, 57, 138, 0.16);\n  border-color: #24398A;\n}\n.img-container .favorite-btn.inactive:hover i {\n  color: #FFCC29;\n}\n.img-container img {\n  object-fit: cover;\n  height: 100%;\n}\n\n.resource-info {\n  padding: 8px;\n}\n.resource-info > h6 {\n  color: #24398A;\n  font-weight: 700;\n  line-height: 19px;\n  min-height: 38px;\n}\n.resource-info > p {\n  font-size: 12px;\n  line-height: 16px;\n  min-height: 32px;\n}\n.resource-info h6, .resource-info p {\n  margin-bottom: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.resource-info div p:first-child {\n  color: #24398A;\n}\n.resource-info div p:first-child span {\n  color: #231F20;\n}\n.resource-info div p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 120%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/resource-card/resource-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,eAAA;AAkBF;;AAfA;EACE,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,8CAAA;EACA,yCAAA;AAkBF;;AAfA;EACE,WAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAkBJ;AAhBI;EACE,eAAA;EACA,gCAAA;AAkBN;AAfI;EACE,oHAAA;EACA,yBAAA;EACA,kEAAA;AAiBN;AAdI;EACE,kCAAA;EACA,2CAAA;AAgBN;AAbI;EACE,mCAAA;EACA,qBDlDU;ACiEhB;AAbM;EACE,cDnDU;ACkElB;AAVE;EACE,iBAAA;EACA,YAAA;AAYJ;;AARA;EACE,YAAA;AAWF;AATE;EACE,cDpEY;ECqEZ,gBAAA;EACA,iBAAA;EACA,gBAAA;AAWJ;AARE;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;AAUJ;AAPE;EACE,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,4BAAA;AASJ;AALI;EACE,cD5FU;ACmGhB;AALM;EACE,cD3FA;ACkGR;AAHI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAKN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.resource-card {\n  border-radius: 8px;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  max-width: 240px;\n  box-shadow: 0px 4px 8px rgba($title, 0.08);\n  border: 1px solid rgba($primary-color, 0.24);\n}\n\n.img-container {\n  width: 100%;\n  height: 166px;\n  flex-shrink: 0;\n  position: relative;\n\n  .favorite-btn {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      font-size: 14px;\n      color: var(--primary-background);\n    }\n\n    &.active {\n      background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.32) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n      border: 1px solid $primary-color;\n      transition: background 300ms ease-in-out, border 300ms ease-in-out;\n    }\n\n    &.inactive {\n      background: rgba($title, 0.08);\n      border: 1px solid var(--primary-background);\n    }\n\n    &.inactive:hover {\n      background: rgba($primary-color, 0.16);\n      border-color: $primary-color;\n\n      i {\n        color: $secondary-color;\n      }\n    }\n  }\n\n  img {\n    object-fit: cover;\n    height: 100%;\n  }\n}\n\n.resource-info {\n  padding: 8px;\n\n  & > h6 {\n    color: $primary-color;\n    font-weight: 700;\n    line-height: 19px;\n    min-height: 38px;\n  }\n\n  & > p {\n    font-size: 12px;\n    line-height: 16px;\n    min-height: 32px;\n  }\n\n  h6, p {\n    margin-bottom: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n  div {\n    & p:first-child {\n      color: $primary-color;\n\n      span {\n        color: $title;\n      }\n    }\n\n    p {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 120%;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14998:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/resource-card/resource-card.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"resource\" class=\"resource-card d-flex flex-column cursor-pointer\">\n    <div class=\"img-container\">\n        <button class=\"favorite-btn\" [ngClass]=\"resource?.favorite ? 'active' : 'inactive'\"\n                (click)=\"$event.stopPropagation(); toggleFavorite()\">\n            <i [ngClass]=\"resource?.favorite ? 'fas fa-star' : 'far fa-star'\"></i>\n        </button>\n\n        <img [src]=\"resource.featuredImage?.filePath\" alt=\"resource image\">\n    </div>\n\n    <div class=\"resource-info\">\n        <h6>{{ resource.title }}</h6>\n        <p>{{ resource.description }}</p>\n\n        <div class=\"d-flex align-items-center justify-content-between\">\n            <p>\n                {{ \"EVENTS.STARTS\" | translate }}:\n                <span>\n                    {{ resource.attributes | find : filterStartHour }}\n                </span>\n            </p>\n\n            <p>{{ (resource.attributes | find :  filterStartDate) | date : 'd.M.yyyy' }}</p>\n        </div>\n\n        <div class=\"d-flex align-items-center justify-content-start gap-1\">\n            <i class=\"fas fa-map-marker-alt\"></i>\n            <p>{{ resource.city }}</p>\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_standalone-components_resource-card_resource-card_component_ts.js.map