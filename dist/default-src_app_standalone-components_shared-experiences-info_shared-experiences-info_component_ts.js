(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_standalone-components_shared-experiences-info_shared-experiences-info_component_ts"],{

/***/ 8546:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/after-create-delete/after-create-delete.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AfterCreateDeleteComponent": () => (/* binding */ AfterCreateDeleteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _after_create_delete_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./after-create-delete.component.html?ngResource */ 42375);
/* harmony import */ var _after_create_delete_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./after-create-delete.component.scss?ngResource */ 3796);
/* harmony import */ var _after_create_delete_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_after_create_delete_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/shared-experiences.service */ 229);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);










let AfterCreateDeleteComponent = class AfterCreateDeleteComponent {
  constructor(sharedExperienceService, activeModalService, modalService) {
    this.sharedExperienceService = sharedExperienceService;
    this.activeModalService = activeModalService;
    this.modalService = modalService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.getSharedExperience();
  }
  getSharedExperience() {
    this.sharedExperienceService.getSharedExperienceById(this.sharedExperienceId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: experience => {
        this.sharedExperienceSlug = experience?.slug;
      }
    });
  }
  closeModal() {
    // this.modalService.close()
    // this.modalService.dismiss();
    this.modalService.dismissAll();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    // this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_2__.SharedExperiencesService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    create: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    sharedExperienceId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  };
};
AfterCreateDeleteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-after-create-delete',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink],
  template: _after_create_delete_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal],
  styles: [(_after_create_delete_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AfterCreateDeleteComponent);


/***/ }),

/***/ 75925:
/*!****************************************************************************************************!*\
  !*** ./src/app/standalone-components/shared-experiences-info/shared-experiences-info.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedExperiencesInfoComponent": () => (/* binding */ SharedExperiencesInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shared_experiences_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-experiences-info.component.html?ngResource */ 84506);
/* harmony import */ var _shared_experiences_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-experiences-info.component.scss?ngResource */ 38002);
/* harmony import */ var _shared_experiences_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_experiences_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/resources.service */ 3145);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/userData.service */ 32763);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/_services/shared-experiences.service */ 229);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _features_shared_experiences_components_after_create_delete_after_create_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/shared-experiences/_components/after-create-delete/after-create-delete.component */ 8546);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_features_domain_listing_components_shared_exp_map_shared_exp_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/features/domain-listing/_components/shared-exp-map/shared-exp-map.component */ 57603);


















let SharedExperiencesInfoComponent = class SharedExperiencesInfoComponent {
  constructor(resourceService, translate, userDataService, modalService, activeModalService, sharedExperienceService, toastService, matDialog) {
    this.resourceService = resourceService;
    this.translate = translate;
    this.userDataService = userDataService;
    this.modalService = modalService;
    this.activeModalService = activeModalService;
    this.sharedExperienceService = sharedExperienceService;
    this.toastService = toastService;
    this.matDialog = matDialog;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.readMore = true;
    this.isHost = false;
    this.isProvider = false;
  }
  ngOnInit() {
    this.getResource();
    this.checkLanguage();
    this.getResTypeName();
    console.log('EXPERIENTA DIN INPUT', this.experience);
  }
  openModal(content) {
    this.modalService.open(content, {
      centered: true,
      size: "sm"
    });
    console.log('da');
  }
  openModalRef(content) {
    this.modalService.open(content, {
      centered: true,
      size: 'xl'
    });
  }
  openMap() {
    this.matDialog.open(src_app_features_domain_listing_components_shared_exp_map_shared_exp_map_component__WEBPACK_IMPORTED_MODULE_7__.SharedExpMapComponent, {
      width: "100%",
      height: "90%",
      data: {
        experienceData: this.experience
        // coordinate: this.experience.geographicalCoordinates
        // resourceCoordinatesData:this.coordinatesData,
        // filterData: this.selectedCity
      }
    });
  }

  checkIfHost() {
    this.userDataService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: user => {
        if (this.experience.userId === user.id) {
          this.isHost = true;
        }
        if (user.roles.includes('ROLE_PROVIDER')) {
          this.isProvider = true;
        }
      }
    });
  }
  cancelExperience() {
    this.sharedExperienceService.deleteSharedExperience(this.experience.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: response => {
        if (response.success) {
          this.openModalRef(this.after);
        }
      }
    });
    this.openModalRef(this.after);
  }
  checkLanguage() {
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
  }
  getResource() {
    this.resourceService.getResourceById(this.experience.resourceId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: resource => {
        console.log('resursa', resource);
        this.resource = resource;
        this.checkIfHost();
      }
    });
  }
  getResTypeName() {
    this.resourceService.getResourceTypeById(this.resource?.resourceTypeId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: resType => {
        this.resType = resType;
      }
    });
  }
  changeReadMore() {
    this.readMore = !this.readMore;
  }
  leaveExperience() {
    this.sharedExperienceService.leaveSharedExperience(this.experience.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: resp => {
        if (resp.success) {
          this.toastService.showToast('Success', 'Ai parasit aceasta experienta!', "success");
          this.modalService.dismissAll();
        }
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbActiveModal
  }, {
    type: _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_4__.SharedExperiencesService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog
  }];
  static #_2 = this.propDecorators = {
    experience: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    showMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    after: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
      args: ['after']
    }]
  };
};
SharedExperiencesInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-shared-experiences-info',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink, _features_shared_experiences_components_after_create_delete_after_create_delete_component__WEBPACK_IMPORTED_MODULE_6__.AfterCreateDeleteComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule],
  template: _shared_experiences_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbActiveModal],
  styles: [(_shared_experiences_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SharedExperiencesInfoComponent);


/***/ }),

/***/ 3796:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/after-create-delete/after-create-delete.component.scss?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.container-data {\n  background-color: var(--primary-background);\n  padding: 148px 0;\n  text-align: center;\n}\n.container-data .icon {\n  width: 112px;\n  aspect-ratio: 1/1;\n  background-color: rgba(36, 57, 138, 0.08);\n  border-radius: 100px;\n}\n.container-data .icon i {\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.48) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-fill-color: transparent;\n  font-size: 48px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/shared-experiences/_components/after-create-delete/after-create-delete.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,2CAAA;EACA,gBAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,YAAA;EACA,iBAAA;EACA,yCAAA;EACA,oBAAA;AAkBJ;AAhBI;EACE,oHAAA;EACA,6BAAA;EACA,oCAAA;EACA,4BAAA;EACA,eAAA;AAkBN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.container-data{\n  background-color: var(--primary-background);\n  padding: 148px 0;\n  text-align: center;\n\n  .icon{\n    width: 112px;\n    aspect-ratio: 1/1;\n    background-color: rgba($primary-color, 0.08);\n    border-radius: 100px;\n\n    i{\n      background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.48) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      text-fill-color: transparent;\n      font-size: 48px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 38002:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/standalone-components/shared-experiences-info/shared-experiences-info.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.container-experience .short-info {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  padding: 8px;\n  margin-bottom: 24px;\n}\n.container-experience .short-info .left-side h4 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.container-experience .short-info .left-side .time {\n  color: rgba(36, 57, 138, 0.72);\n  font-weight: 400;\n}\n.container-experience .short-info .right-side {\n  width: 96px;\n  aspect-ratio: 1/1;\n  border-radius: 8px;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.48) 0%, rgba(0, 178, 255, 0) 100%), url('backgr-shared-exp.jpeg'), #24398A;\n  background-blend-mode: normal, luminosity, normal;\n  background-position: center;\n  background-size: cover;\n  box-shadow: 0 12px 16px rgba(13, 68, 148, 0.48);\n}\n.container-experience .short-info .right-side .month {\n  color: rgba(255, 255, 255, 0.72);\n  font-weight: 400;\n}\n.container-experience .short-info .right-side .day {\n  font-size: 24px;\n  font-weight: 800;\n  color: #FFCC29;\n}\n.container-experience .description {\n  margin-bottom: 24px;\n}\n.container-experience .description .descr-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n.container-experience .description .more {\n  cursor: pointer;\n  color: #24398A;\n  font-weight: 700;\n}\n.container-experience .location-info {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  padding: 8px;\n  margin-bottom: 24px;\n}\n.container-experience .location-info .left-side h4 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n.container-experience .location-info button.map-button {\n  width: 96px;\n  height: 96px;\n  color: var(--primary-background);\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.48) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  font-size: 14px;\n}\n.container-experience .location-info button.map-button i {\n  font-size: 24px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/shared-experiences-info/shared-experiences-info.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdE;EACE,yCAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;AAiBJ;AAdM;EACE,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,4BAAA;AAgBR;AAdM;EACE,8BAAA;EACA,gBAAA;AAgBR;AAZI;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,mJAAA;EAEA,iDAAA;EACA,2BAAA;EACA,sBAAA;EAEA,+CAAA;AAYN;AAVM;EACE,gCAAA;EACA,gBAAA;AAYR;AATM;EACE,eAAA;EACA,gBAAA;EACA,cDzCU;ACoDlB;AANE;EACE,mBAAA;AAQJ;AANI;EACE,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,4BAAA;AAQN;AALI;EACE,eAAA;EACA,cD9DU;EC+DV,gBAAA;AAON;AAHE;EACE,yCAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;AAKJ;AAFM;EACE,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,4BAAA;AAIR;AAAI;EACE,WAAA;EACA,YAAA;EACA,gCAAA;EACA,oHAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;AAEN;AADM;EACE,eAAA;AAGR","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.container-experience{\n  .short-info{\n    border: 1px solid rgba($primary-color, 0.16);\n    border-radius: 8px;\n    padding:8px;\n    margin-bottom: 24px;\n\n    .left-side{\n      h4{\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        line-clamp: 2;\n        -webkit-box-orient: vertical;\n      }\n      .time{\n        color:rgba($primary-color, 0.72);\n        font-weight: 400;\n      }\n    }\n\n    .right-side{\n      width: 96px;\n      aspect-ratio: 1/1;\n      border-radius: 8px;\n      background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.48) 0%, rgba(0, 178, 255, 0) 100%),  url('~src/assets/images/others/images-client/backgr-shared-exp.jpeg'), $primary-color;\n      //background: linear-gradient(to right, rgba(0, 178, 255, 0.48),rgba( $primary-color, 0.8)), url('~src/assets/images/others/images-client/backgr-shared-exp.jpeg');\n      background-blend-mode: normal, luminosity, normal;\n      background-position: center;\n      background-size: cover;\n\n      box-shadow: 0 12px 16px rgba(13, 68, 148, 0.48);\n\n      .month{\n        color: rgba($background-primary, 0.72);\n        font-weight: 400;\n      }\n\n      .day{\n        font-size:24px;\n        font-weight: 800;\n        color: $secondary-color;\n      }\n    }\n  }\n\n  .description{\n    margin-bottom: 24px;\n\n    .descr-text{\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      line-clamp: 1;\n      -webkit-box-orient: vertical;\n    }\n\n    .more{\n      cursor: pointer;\n      color: $primary-color;\n      font-weight: 700;\n    }\n  }\n\n  .location-info{\n    border: 1px solid rgba($primary-color, 0.16);\n    border-radius: 8px;\n    padding: 8px;\n    margin-bottom: 24px;\n\n    .left-side{\n      h4{\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 1;\n        line-clamp: 1;\n        -webkit-box-orient: vertical;\n      }\n    }\n\n    button.map-button{\n      width: 96px;\n      height: 96px;\n      color: var(--primary-background);\n      background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.48) 0%, rgba(0, 178, 255, 0) 100%), $primary-color;\n      border-radius: 8px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      border:none;\n      font-size: 14px;\n      i{\n        font-size: 24px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 42375:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/after-create-delete/after-create-delete.component.html?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-data d-flex flex-column justify-content-center align-items-center\">\n    <div class=\"icon d-flex justify-content-center align-items-center mb-4\">\n        <i *ngIf=\"create\" class=\"far fa-smile\"></i>\n        <i *ngIf=\"!create\" class=\"far fa-frown\"></i>\n    </div>\n    <div *ngIf=\"create\" class=\"w-75 d-flex flex-column justify-content-center align-items-center\">\n        <h1>{{'SHARED-EXPERIENCES.CREATE-SUCCESS' | translate}}</h1>\n        <p>{{'SHARED-EXPERIENCES.CREATE-SUCCESS-INFO' | translate}}</p>\n        <button *ngIf=\"sharedExperienceSlug\" (click)=\"closeModal()\" class=\"btn-color-fill btn-long\" routerLink=\"../lobby/{{sharedExperienceSlug}}\">{{'SHARED-EXPERIENCES.GO-TO-LOBBY' | translate}}<i class=\"fas fa-arrow-right\"></i></button>\n    </div>\n\n    <div *ngIf=\"!create\" class=\"w-75 d-flex flex-column justify-content-center align-items-center\">\n        <h1>{{'SHARED-EXPERIENCES.DELETE-SUCCESS' | translate}}</h1>\n        <p>{{'SHARED-EXPERIENCES.DELETE-SUCCESS-INFO' | translate}}</p>\n        <button class=\"btn-color-fill btn-long\" routerLink=\"../../list\" (click)=\"closeModal()\">{{'BTN.CONTINUE' | translate}}<i class=\"fas fa-arrow-right\"></i></button>\n    </div>\n\n</div>";

/***/ }),

/***/ 84506:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/standalone-components/shared-experiences-info/shared-experiences-info.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-experience\">\n    <div class=\"event-title d-flex justify-content-between align-items-center\">\n        <h4>Event</h4>\n        <div *ngIf=\"isHost && showMenu\" class=\"menu-host\">\n            <button type=\"button\" mat-icon-button  [matMenuTriggerFor]=\"menuHost\" class=\"btn-round btn-no-outline\"><i class=\"fas fa-ellipsis-v\" ></i></button>\n            <mat-menu #menuHost=\"matMenu\">\n<!--                <button mat-menu-item><i class=\"fas fa-user-plus me-2\"></i>Invite participant </button>-->\n<!--                <button mat-menu-item><i class=\"fas fa-share me\"></i> Share experience</button>-->\n                <button *ngIf=\"!isProvider\" mat-menu-item routerLink=\"../../edit/{{experience.slug}}\"><i class=\"fas fa-pen me\"></i> Modify experience</button>\n                <button mat-menu-item (click)=\"openModal(cancelExperienceModal)\"><i class=\"fas fa-ban me\"></i> Cancel experience</button>\n            </mat-menu>\n\n            <ng-template #cancelExperienceModal let-c=\"close\" let-d=\"dismiss\">\n                <div class=\"modal-card card\">\n                    <div class=\"card-header border-0\">\n                        <h3 class=\"m-0\">Sure you want to cancel your shared experience?\n                        </h3>\n                    </div>\n\n                    <div class=\"card-body\">\n                        <p>This action will remove the event from the shared experiences section and all the data from chat.</p>\n                    </div>\n\n                    <div class=\"card-footer border-0\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-sm-6\">\n                                <button class=\"btn-auto btn-color-outline w-100\"\n                                        id=\"btn-dismiss-cancel\"\n                                        (click)=\"d()\">\n                                    <i class=\"fas fa-times\"></i>\n                                    {{ 'BTN.CANCEL' | translate}}\n                                </button>\n                            </div>\n\n                            <div class=\"col-12 col-sm-6\">\n                                <button class=\"btn-auto btn-color-fill w-100\"\n                                        id=\"btn-confirm-cancel\"\n                                        (click)=\"cancelExperience()\"\n                                >\n                                    <i class=\"fas fa-check\"></i>\n                                    {{ 'BTN.CONFIRM' | translate}}\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </ng-template>\n        </div>\n        <div *ngIf=\"!isHost && showMenu\" class=\"menu-guest\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menuGuest\" class=\"btn-round btn-no-outline\"><i class=\"fas fa-ellipsis-v\" ></i></button>\n            <mat-menu #menuGuest=\"matMenu\">\n<!--                <button mat-menu-item><i class=\"fas fa-share me\"></i> Share Experience</button>-->\n                <button mat-menu-item (click)=\"openModal(leaveExperienceModal)\"><i class=\"fas fa-running me\"></i> Leave Experience</button>\n            </mat-menu>\n\n            <ng-template #leaveExperienceModal let-c=\"close\" let-d=\"dismiss\">\n                <div class=\"modal-card card\">\n                    <div class=\"card-header border-0\">\n                        <h3 class=\"m-0\">Are you sure you want to leave the experience?\n                        </h3>\n                    </div>\n\n                    <div class=\"card-body\">\n                        <p>This action will remove yourself from the shared experience, but the messages in the chat will remain.</p>\n                    </div>\n\n                    <div class=\"card-footer border-0\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-sm-6\">\n                                <button class=\"btn-auto btn-color-outline w-100\"\n                                        id=\"btn-dismiss-leave\"\n                                        (click)=\"d()\">\n                                    <i class=\"fas fa-times\"></i>\n                                    {{ 'BTN.CANCEL' | translate}}\n                                </button>\n                            </div>\n\n                            <div class=\"col-12 col-sm-6\">\n                                <button class=\"btn-auto btn-color-fill w-100\"\n                                        id=\"btn-confirm-leave\"\n                                        (click)=\"leaveExperience()\"\n                                >\n                                    <i class=\"fas fa-check\"></i>\n                                    {{ 'BTN.CONFIRM' | translate}}\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </ng-template>\n        </div>\n    </div>\n\n    <div class=\"short-info d-flex justify-content-between\">\n        <div class=\"left-side w-75 d-flex flex-column justify-content-between\">\n            <h4 class=\"mb-0\">{{experience?.name}}</h4>\n            <p class=\"mb-0 time\"><i class=\"far fa-clock me-2\"></i>{{experience.startHour}}</p>\n        </div>\n        <div class=\"right-side d-flex justify-content-center align-items-center flex-column\">\n            <div *ngIf=\"experience?.endDate === null\">\n                <p class=\"mb-0 month d-flex justify-content-center\">{{experience?.startDate | date:'MMM'}}</p>\n                <p class=\"mb-0 day\">{{experience?.startDate | date:'dd'}}</p>\n            </div>\n            <!--if the event lasts several days -->\n            <div *ngIf=\"experience?.endDate !== null\" >\n                <div *ngIf=\"experience?.endDate !== null\" class=\"d-flex justify-content-center align-items-center gap-2\">\n                    <p class=\"mb-0 month d-flex justify-content-center\">{{experience?.startDate | date:'MMM'}}</p>\n                    <p *ngIf=\"(experience?.endDate | date:'MMM') !==(experience?.startDate | date:'MMM')\" class=\"mb-0 month\"> {{experience?.endDate | date:'MMM'}}</p>\n                </div>\n                <div *ngIf=\"experience?.endDate !== null\" class=\"d-flex align-items-center gap-2\">\n                    <p class=\"mb-0 day\">{{experience?.startDate | date:'d'}} - {{experience?.endDate | date:'d'}} </p>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n    <h4 *ngIf=\"experience?.description\">About</h4>\n    <div *ngIf=\"experience?.description\" class=\"description\">\n        <p [ngClass]=\"readMore ? 'descr-text mb-0' : 'mb-0'\">{{experience?.description}}</p>\n        <p class=\"more\" (click)=\"changeReadMore()\">{{readMore ? 'Read more' : 'Show less'}}</p>\n    </div>\n    <h4 *ngIf=\"!isProvider\">Location</h4>\n    <div class=\"location-info d-flex justify-content-between\" *ngIf=\"!isProvider\">\n        <div class=\"left-side w-75 d-flex flex-column justify-content-between\">\n            <h4 class=\"mb-0\">{{resource?.title}}</h4>\n            <p class=\"mb-0\">{{currentLanguage === 'ro' ? resType?.nameRo : resType?.nameEn}}</p>\n            <p class=\"mb-0\"><i class=\"fas fa-map-marker-alt\"></i> {{resource?.address+', ' + resource?.city+', '+ resource?.country}}</p>\n        </div>\n        <button class=\"map-button\" (click)=\"openMap()\"><i class=\"fas fa-map-marked-alt\"></i> See map</button>\n    </div>\n</div>\n\n\n<ng-template #after>\n    <app-after-create-delete [create]=\"false\" ></app-after-create-delete>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_standalone-components_shared-experiences-info_shared-experiences-info_component_ts.js.map