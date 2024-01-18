(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_standalone-components_resource-card-with-template_resource-card-with-template-b14844"],{

/***/ 25520:
/*!************************************************************************************************************!*\
  !*** ./src/app/standalone-components/resource-card-with-template/resource-card-with-template.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceCardWithTemplateComponent": () => (/* binding */ ResourceCardWithTemplateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resource_card_with_template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-card-with-template.component.html?ngResource */ 7076);
/* harmony import */ var _resource_card_with_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource-card-with-template.component.scss?ngResource */ 55648);
/* harmony import */ var _resource_card_with_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resource_card_with_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/resources.service */ 3145);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);










let ResourceCardWithTemplateComponent = class ResourceCardWithTemplateComponent {
  constructor(resourcesService, toastService, translate) {
    this.resourcesService = resourcesService;
    this.toastService = toastService;
    this.translate = translate;
    this.roundedReviewPercentage = null;
    this.allowedToClickBtn = true;
    this.listingAttributes = [];
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.roundedReviewPercentage = Math.ceil(this.resourceData.proReviewsPercentage / 20) * 20;
    this.getListingAttributes();
  }
  getListingAttributes() {
    this.listingAttributes = [];
    if (!this.resourceTemplate) return;
    if (this.resourceData.attributes?.length > 0) {
      this.resourceData.attributes.forEach(attribute => {
        if (attribute.tabAttributes?.length > 0) {
          attribute.tabAttributes.forEach(tabAttribute => {
            if (this.resourceTemplate?.listingSetting?.attributes?.find(element => element === tabAttribute.attributeId)) {
              this.listingAttributes.push(tabAttribute);
            }
          });
        }
      });
    }
  }
  toggleFavorite() {
    if (!this.allowedToClickBtn) return;
    this.allowedToClickBtn = false;
    if (!this.resourceData.favorite) {
      this.resourcesService.addResourceToFavorite(this.resourceData.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: () => {
          this.resourceData.favorite = true;
          this.allowedToClickBtn = true;
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), `Added ${this.resourceData.title} to favorites`, 'success');
        },
        error: () => {
          this.allowedToClickBtn = true;
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant('TOAST.SERVER-ERROR'), 'error');
        }
      });
    } else {
      this.resourcesService.deleteResourceFromFavorite(this.resourceData.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: () => {
          this.resourceData.favorite = false;
          this.allowedToClickBtn = true;
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), `Removed ${this.resourceData.title} from favorites`, 'success');
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
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
  }];
  static #_2 = this.propDecorators = {
    cardType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    resourceTypeName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    resourceData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    resourceTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    htmlDescription: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    isMyJob: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  };
};
ResourceCardWithTemplateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-resource-card-with-template',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule],
  template: _resource_card_with_template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_resource_card_with_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResourceCardWithTemplateComponent);


/***/ }),

/***/ 54363:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstValueFrom": () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 14423);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 19904);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 55648:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/standalone-components/resource-card-with-template/resource-card-with-template.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.resource-card {\n  position: relative;\n  display: flex;\n  background: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(35, 31, 32, 0.08);\n  overflow: hidden;\n  cursor: pointer;\n}\n.resource-card div.status-label {\n  z-index: 9;\n  position: absolute;\n  top: 12px;\n  padding: 4px;\n  border-radius: 0 8px 8px 0px;\n  min-width: 100px;\n  text-align: center;\n}\n.resource-card .active-status {\n  background: #69C98C;\n}\n.resource-card .inactive-status {\n  background: #858495;\n}\n.resource-card .pending-status {\n  background: #FCCC3D;\n}\n.resource-card .img-container img {\n  transition: transform 0.3s ease-out;\n}\n.resource-card:hover .img-container img {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n\n.short-card, .short-w-100-card {\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 240px;\n}\n.short-card .img-container, .short-w-100-card .img-container {\n  width: 100%;\n  height: 166px;\n}\n.short-card .img-container img, .short-w-100-card .img-container img {\n  height: 100%;\n}\n.short-card .resource-info .info-header, .short-w-100-card .resource-info .info-header {\n  min-height: 48px;\n}\n.short-card .resource-info .info-header h3, .short-w-100-card .resource-info .info-header h3 {\n  font-size: 20px;\n  line-height: 24px;\n}\n\n.short-w-100-card {\n  max-width: unset;\n}\n.short-w-100-card .img-container img {\n  width: 100%;\n  object-fit: cover;\n}\n\n.long-card {\n  flex-direction: row;\n  width: 100%;\n  height: 200px;\n}\n.long-card .img-container {\n  width: 360px;\n  height: 200px;\n}\n.long-card .img-container img {\n  width: inherit;\n  height: inherit;\n}\n.long-card .resource-info {\n  width: 100%;\n}\n.long-card .resource-info .info-header h3 {\n  font-size: 24px;\n  line-height: 28px;\n}\n\n.img-container {\n  position: relative;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.img-container img {\n  object-fit: cover;\n}\n.img-container .favorite-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-container .favorite-btn i {\n  font-size: 14px;\n  color: var(--primary-background);\n}\n.img-container .favorite-btn.active {\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.32) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n  border: 1px solid #24398A;\n  transition: background 300ms ease-in-out, border 300ms ease-in-out;\n}\n.img-container .favorite-btn.inactive {\n  background: rgba(35, 31, 32, 0.08);\n  border: 1px solid var(--primary-background);\n}\n.img-container .favorite-btn.inactive:hover {\n  background: rgba(36, 57, 138, 0.16);\n  border-color: #24398A;\n}\n.img-container .favorite-btn.inactive:hover i {\n  color: #FFCC29;\n}\n\n.resource-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 8px;\n}\n.resource-info .info-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.resource-info .info-header h3 {\n  margin-bottom: 0;\n  color: #24398A;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.resource-info .info-header .reviews {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n}\n.resource-info .info-header .reviews span {\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -1px;\n}\n.resource-info .info-header .reviews .percentage {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: #231F20;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 140%;\n}\n.resource-info .info-header .reviews .percentage i {\n  margin-left: 4px;\n}\n.resource-info .attributes-list {\n  display: flex;\n  gap: 24px;\n  min-height: 22px;\n}\n.resource-info .attributes-list span {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  color: #231F20;\n}\n.resource-info .attributes-list span i {\n  font-weight: 900;\n  line-height: 22px;\n}\n.resource-info .attributes-list span p {\n  font-weight: 400;\n  margin-bottom: 0;\n  line-height: 22px;\n}\n.resource-info .description {\n  min-height: 66px;\n}\n.resource-info .description p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #231F20;\n  margin-bottom: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n.resource-info .resource-type {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 140%;\n  color: #231F20;\n}\n.resource-info .location {\n  font-size: 14px;\n  line-height: 140%;\n  font-weight: 400;\n}\n.resource-info .location i {\n  font-weight: 900;\n}\n.resource-info .location .price {\n  font-weight: 600;\n  font-size: 16px;\n  color: #24398A;\n}\n\n.bold-dollar {\n  color: #231F20;\n}\n\n.normal-dollar {\n  color: #858495;\n}\n\n.accommodation-stars .yellow-star {\n  color: #FFCC29;\n}\n.accommodation-stars .grey-star {\n  color: gray;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/resource-card-with-template/resource-card-with-template.component.scss"],"names":[],"mappings":"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","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.resource-card {\n  position: relative;\n  display: flex;\n  background: var(--primary-background);\n  border: 1px solid rgba($primary-color, 0.24);\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba($title, 0.08);\n  overflow: hidden;\n  cursor: pointer;\n\n  div.status-label {\n    z-index: 9;\n    position: absolute;\n    top: 12px;\n    padding: 4px;\n    border-radius: 0 8px 8px 0px;\n    min-width: 100px;\n    text-align: center;\n  }\n\n  .active-status {\n    background: $active-color;\n  }\n\n  .inactive-status {\n    background: $inactive-color;\n  }\n\n  .pending-status {\n    background: $pending-color;\n  }\n\n  .img-container img {\n    transition: transform 0.3s ease-out;\n  }\n\n  &:hover {\n    .img-container img {\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n  }\n}\n\n.short-card, .short-w-100-card {\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 240px;\n\n  .img-container {\n    width: 100%;\n    height: 166px;\n\n    img {\n      height: 100%;\n    }\n  }\n\n  .resource-info {\n    .info-header {\n      min-height: 48px;\n\n      h3 {\n        font-size: 20px;\n        line-height: 24px;\n      }\n    }\n  }\n}\n\n.short-w-100-card {\n  max-width: unset;\n\n  .img-container {\n    img {\n      width: 100%;\n      object-fit: cover;\n    }\n  }\n}\n\n.long-card {\n  flex-direction: row;\n  width: 100%;\n  height: 200px;\n\n  .img-container {\n    width: 360px;\n    height: 200px;\n\n    img {\n      width: inherit;\n      height: inherit;\n    }\n  }\n\n  .resource-info {\n    width: 100%;\n\n    .info-header {\n      //min-height: 56px;\n\n      h3 {\n        font-size: 24px;\n        line-height: 28px;\n      }\n    }\n  }\n}\n\n.img-container {\n  position: relative;\n  flex-shrink: 0;\n  overflow: hidden;\n\n  img {\n    object-fit: cover;\n  }\n\n  .favorite-btn {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      font-size: 14px;\n      color: var(--primary-background);\n    }\n\n    &.active {\n      background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.32) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n      border: 1px solid $primary-color;\n      transition: background 300ms ease-in-out, border 300ms ease-in-out;\n    }\n\n    &.inactive {\n      background: rgba($title, 0.08);\n      border: 1px solid var(--primary-background);\n    }\n\n    &.inactive:hover {\n      background: rgba($primary-color, 0.16);\n      border-color: $primary-color;\n\n      i {\n        color: $secondary-color;\n      }\n    }\n  }\n}\n\n.resource-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 8px;\n\n  .info-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    h3 {\n      margin-bottom: 0;\n      color: $primary-color;\n      font-weight: 700;\n\n      // max nr of lines\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      line-clamp: 2;\n      -webkit-box-orient: vertical;\n    }\n\n    .reviews {\n      display: flex;\n      flex-direction: column;\n      flex-shrink: 0;\n\n      span {\n        font-weight: 700;\n        font-size: 14px;\n        line-height: 20px;\n        letter-spacing: -1px;\n      }\n\n      .percentage {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        color: $title;\n        font-weight: 500;\n        font-size: 14px;\n        line-height: 140%;\n\n        i {\n          margin-left: 4px;\n        }\n      }\n    }\n  }\n\n  .attributes-list {\n    display: flex;\n    gap: 24px;\n    min-height: 22px;\n\n    span {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 16px;\n      color: $paragraph;\n\n      i {\n        font-weight: 900;\n        line-height: 22px;\n      }\n\n      p {\n        font-weight: 400;\n        margin-bottom: 0;\n        line-height: 22px;\n      }\n    }\n  }\n\n  .description {\n    min-height: 66px;\n    p {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 22px;\n      color: $title;\n      margin-bottom: 0;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      line-clamp: 3;\n      -webkit-box-orient: vertical;\n    }\n  }\n\n  .resource-type {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 140%;\n    color: $title;\n  }\n\n  .location {\n    font-size: 14px;\n    line-height: 140%;\n    font-weight: 400;\n    i {\n      font-weight: 900;\n    }\n\n    .price {\n      font-weight: 600;\n      font-size: 16px;\n      color: $primary-color;\n    }\n  }\n}\n\n.bold-dollar {\n  color: $title;\n}\n\n.normal-dollar {\n  color: $inactive-color;\n}\n\n.accommodation-stars{\n  .yellow-star {\n    color: $secondary-color;\n  }\n\n  .grey-star {\n    color: gray;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7076:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/standalone-components/resource-card-with-template/resource-card-with-template.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"resourceData\"\n     class=\"resource-card\"\n     [ngClass]=\"{\n        'short-card' : cardType === 'short',\n        'short-w-100-card' : cardType === 'short-w-100',\n        'long-card': cardType === 'long'\n     }\">\n    <div class=\"status-label\" *ngIf=\"isMyJob\" [ngClass]=\"resourceData?.status === 'active' ? 'active-status' :\n                                        resourceData?.status === 'pending_review' ? 'pending-status' :\n                                        resourceData?.status === 'inactive' ? 'inactive-status' : null\">\n        <span *ngIf=\"resourceData?.status === 'active'\">Activ</span>\n        <span *ngIf=\"resourceData?.status === 'pending_review'\">În așteptare</span>\n        <span *ngIf=\"resourceData?.status === 'inactive'\">Inactiv</span>\n    </div>\n    <div class=\"img-container\">\n        <img [src]=\"resourceData?.featuredImage?.filePath\" alt=\"resource picture\">\n        <button class=\"favorite-btn\" [ngClass]=\"resourceData?.favorite ? 'active' : 'inactive'\"\n                (click)=\"$event.stopPropagation(); toggleFavorite()\">\n            <i [ngClass]=\"resourceData?.favorite ? 'fas fa-star' : 'far fa-star'\"></i>\n        </button>\n    </div>\n\n    <div class=\"resource-info\">\n        <div class=\"info-header\">\n            <div class=\"d-flex flex-column flex-md-row justify-content-start align-items-baseline gap-2\">\n                <h3>\n                    {{ resourceData?.title | titlecase }}\n                </h3>\n                <div *ngIf=\"resourceData?.bookingType=== 'rentalBooking'\" class=\"accommodation-stars\">\n                    <ng-container class=\"d-flex\" *ngFor=\"let val of [1, 2, 3, 4, 5]\" >\n                        <span [ngClass]=\"val <= resourceData.stars ? 'yellow-star' : 'grey-star'\">\n                            <i class=\"fas fa-star\"></i>\n                        </span>\n                    </ng-container>\n                </div>\n\n            </div>\n\n\n            <div *ngIf=\"resourceTemplate?.listingSetting?.reviews || !resourceTemplate\"\n                 class=\"reviews\">\n                <div class=\"dollars\">\n                    <ng-container *ngFor=\"let val of [1, 2, 3, 4, 5]\" >\n                        <span [ngClass]=\"val * 20 <= roundedReviewPercentage ? 'bold-dollar' : 'normal-dollar'\">\n                            $\n                        </span>\n                    </ng-container>\n                </div>\n\n                <div class=\"percentage\">\n                    {{ resourceData.proReviewsPercentage }}%\n                    <i *ngIf=\"resourceData.proReviewsPercentage < 50\" class=\"far fa-frown\"></i>\n                    <i *ngIf=\"resourceData.proReviewsPercentage >= 50\" class=\"far fa-smile\"></i>\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf=\"listingAttributes?.length > 0\" class=\"attributes-list\">\n            <span *ngFor=\"let attribute of listingAttributes\">\n                <i class=\"fas fa-icons\"></i>\n                <p>\n                    {{ attribute.attributeName }}\n                </p>\n            </span>\n        </div>\n\n        <div *ngIf=\"cardType === 'long'\" class=\"description\">\n            <p *ngIf=\"!htmlDescription\">\n                {{ resourceData?.description }}\n            </p>\n            <p *ngIf=\"htmlDescription\" [innerHTML]=\"resourceData.description\">\n\n            </p>\n        </div>\n\n        <div *ngIf=\"resourceTemplate\" class=\"resource-type\">\n            {{ resourceTypeName | titlecase }}\n        </div>\n\n        <div *ngIf=\"!resourceTemplate\" class=\"resource-type\">\n            {{ resourceData?.resourceCategoryName | titlecase }}\n        </div>\n\n        <div *ngIf=\"resourceTemplate?.listingSetting?.location || !resourceTemplate\" class=\"location\">\n            <i class=\"fas fa-map-marker-alt\"></i>\n            {{ resourceData.city }}\n            <p class=\"d-inline-block float-end m-0 price\" *ngIf=\"resourceData?.estimatedPrice && resourceData?.estimatedPrice > 0\">\n                €{{resourceData.estimatedPrice}}\n            </p>\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_standalone-components_resource-card-with-template_resource-card-with-template-b14844.js.map