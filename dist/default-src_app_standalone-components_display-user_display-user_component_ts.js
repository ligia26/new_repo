(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_standalone-components_display-user_display-user_component_ts"],{

/***/ 4177:
/*!******************************************************************************!*\
  !*** ./src/app/standalone-components/display-user/display-user.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayUserComponent": () => (/* binding */ DisplayUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _display_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-user.component.html?ngResource */ 30050);
/* harmony import */ var _display_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-user.component.scss?ngResource */ 1842);
/* harmony import */ var _display_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_display_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/userData.service */ 32763);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/shared-experiences.service */ 229);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);













let DisplayUserComponent = class DisplayUserComponent {
  constructor(userDataService, sharedExperienceService, modalService, translate, router, route) {
    this.userDataService = userDataService;
    this.sharedExperienceService = sharedExperienceService;
    this.modalService = modalService;
    this.translate = translate;
    this.router = router;
    this.route = route;
    this.refreshPage = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.getUserData();
  }
  getUserData() {
    this.userDataService.getUserById(this.userId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: user => {
        this.user = user;
        console.log(user);
      }
    });
  }
  openModal(content) {
    this.modalService.open(content, {
      centered: true,
      size: "sm"
    });
  }
  respondToRequest(accepted) {
    console.log(this.experienceId);
    this.sharedExperienceService.respondToRequest(this.experienceId, this.userId, accepted).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: resp => {
        console.log('dupa accept/reject', resp);
        if (resp.success) {
          this.refreshPage.emit(true);
        }
      }
    });
  }
  kickParticipant() {
    this.sharedExperienceService.deleteParticipantFromExperience(this.experienceId, this.userId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: response => {
        if (response.success) {
          this.refreshPage.emit(true);
          this.modalService.dismissAll();
        }
      }
    });
  }
  downloadCv() {
    const link = document.createElement('a');
    const cv = this.menuType === 'candidate' ? this.candidate.pdfCv : this.user.cv;
    link.href = cv.filePath;
    link.download = cv.fileName;
    link.target = '_blank';
    link.click();
  }
  navigateToCv() {
    const userId = this.menuType === 'candidate' ? this.candidate.userId : this.user.id;
    this.router.navigate([this.menuType === 'candidate' ? '../cv' : '../../cv', userId], {
      relativeTo: this.route
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_3__.SharedExperiencesService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }];
  static #_2 = this.propDecorators = {
    userId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    isAdmin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    showMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    menuType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    experienceId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    candidate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    refreshPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  };
};
DisplayUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-display-user',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
  template: _display_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_display_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DisplayUserComponent);


/***/ }),

/***/ 1842:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/display-user/display-user.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.container-user {\n  margin-bottom: 10px;\n}\n.container-user .user-data .avatar img {\n  width: 56px;\n  aspect-ratio: 1/1;\n  border-radius: 100%;\n}\n.container-user .user-data .avatar i {\n  width: 16px;\n  aspect-ratio: 1/1;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  color: #FFCC29;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.48) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n  border: 2px solid var(--primary-background);\n  border-radius: 100%;\n  font-size: 6px;\n}\n.container-user .user-data .name-email {\n  padding: 0 12px;\n}\n.container-user .user-data .name-email .client-name {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n.modal-card.card > div h3 {\n  color: #231F20 !important;\n}\n.modal-card.card > div h3 span {\n  color: #24398A;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/display-user/display-user.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,mBAAA;AAkBF;AAfM;EACE,WAAA;EACA,iBAAA;EACA,mBAAA;AAiBR;AAdM;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,cDfU;ECgBV,oHAAA;EACA,2CAAA;EACA,mBAAA;EACA,cAAA;AAgBR;AAZI;EACE,eAAA;AAcN;AAbM;EACE,eAAA;EACA,gBAAA;AAeR;;AATA;EACE,2CAAA;AAYF;AAXI;EACE,yBAAA;AAaN;AAZM;EACE,cDxCQ;ACsDhB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.container-user{\n  margin-bottom: 10px;\n  .user-data{\n    .avatar{\n      img{\n        width: 56px;\n        aspect-ratio: 1/1;\n        border-radius: 100%;\n      }\n\n      i{\n        width: 16px;\n        aspect-ratio: 1/1;\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        color: $secondary-color;\n        background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.48) 0%, rgba(0, 178, 255, 0) 100%) , #24398A;\n        border: 2px solid var(--primary-background);\n        border-radius: 100%;\n        font-size: 6px;\n      }\n    }\n\n    .name-email{\n      padding: 0 12px;\n      .client-name{\n        font-size: 16px;\n        font-weight: 600;\n      }\n    }\n  }\n}\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n    h3{\n      color:$title!important;\n      span{\n        color: $primary-color;\n      }\n    }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 30050:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/display-user/display-user.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-user d-flex justify-content-between align-items-center\">\n    <div class=\"user-data d-flex justify-content-start\">\n        <div class=\"avatar position-relative\">\n            <img [src]=\"menuType === 'candidate' ? candidate?.avatar?.filePath : user?.avatar.filePath\">\n            <i *ngIf=\"isAdmin\" class=\"fas fa-crown d-flex justify-content-center align-items-center\"></i>\n        </div>\n        <div class=\"name-email\">\n            <p class=\"client-name mb-0\">{{menuType === 'candidate' ? candidate?.name : (user?.firstName+' '+user?.lastName)}}</p>\n            <p class=\"mb-0\">{{menuType === 'candidate' ? candidate?.email : user?.email}}</p>\n        </div>\n    </div>\n\n    <div *ngIf=\"showMenu && isAdmin\" class=\"menu\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"btn-round btn-no-outline\"><i class=\"fas fa-ellipsis-v\" ></i></button>\n        <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item><i class=\"fas fa-user-plus me-2\"></i>{{'SHARED-EXPERIENCES.INVITE-PARTICIPANT' | translate}}</button>\n            <button mat-menu-item><i class=\"fas fa-share me\"></i> {{'SHARED-EXPERIENCES.SHARE-EXPERIENCE' | translate}}</button>\n            <button mat-menu-item><i class=\"fas fa-pen me\"></i> {{'SHARED-EXPERIENCES.MODIFY-EXPERIENCE' | translate}}</button>\n            <button mat-menu-item><i class=\"fas fa-ban me\"></i> {{'SHARED-EXPERIENCES.CANCEL-EXPERIENCE' | translate}}</button>\n        </mat-menu>\n    </div>\n\n    <div *ngIf=\"showMenu && menuType==='pending'\" class=\"menu\">\n        <button mat-icon-button  [matMenuTriggerFor]=\"menuPending\" class=\"btn-round btn-no-outline\"><i class=\"fas fa-ellipsis-v\"></i></button>\n        <mat-menu #menuPending=\"matMenu\">\n            <button mat-menu-item (click)=\"respondToRequest(true)\"><i class=\"far fa-smile me-2\"></i>{{'SHARED-EXPERIENCES.ACCEPT-PARTICIPANT' | translate}}</button>\n            <button mat-menu-item (click)=\"respondToRequest(false)\"><i class=\"far fa-frown me\"></i>{{'SHARED-EXPERIENCES.DECLINE-PARTICIPANT' | translate}}</button>\n        </mat-menu>\n    </div>\n\n    <div *ngIf=\"showMenu && menuType==='participant'\" class=\"menu\">\n        <button mat-icon-button  [matMenuTriggerFor]=\"menuPending\" class=\"btn-round btn-no-outline\"><i class=\"fas fa-ellipsis-v\"></i></button>\n        <mat-menu #menuPending=\"matMenu\">\n            <button mat-menu-item (click)=\"openModal(kickparticipant)\"><i class=\"fas fa-user-times me-2\"></i>{{'SHARED-EXPERIENCES.KICK-PARTICIPANT' | translate}}t</button>\n        </mat-menu>\n    </div>\n\n    <div *ngIf=\"showMenu && (menuType==='job' || menuType ==='candidate')\" class=\"menu\">\n        <button mat-icon-button  [matMenuTriggerFor]=\"menuCandidate\" class=\"btn-round btn-no-outline\"><i class=\"fas fa-ellipsis-v\"></i></button>\n        <mat-menu #menuCandidate=\"matMenu\">\n            <button mat-menu-item  (click)=\"navigateToCv()\"><i class=\"far fa-eye me-2\"></i>{{'JOBS.VIEW_CV' | translate}}</button>\n            <button mat-menu-item *ngIf=\"candidate?.pdfCv?.filePath || user?.cv?.filePath\" (click)=\"downloadCv()\"><i class=\"fas fa-download me-2\"></i>{{'JOBS.DOWNLOAD_CV' | translate}}</button>\n        </mat-menu>\n    </div>\n</div>\n\n\n\n<ng-template #kickparticipant let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-card card\">\n        <div class=\"card-header border-0\">\n            <h3 class=\"m-0\">{{'SHARED-EXPERIENCES.KICK-PARTICIPANT-WARN' | translate}} <span>{{user?.firstName+' '+user?.lastName}}</span>?\n            </h3>\n        </div>\n\n        <div class=\"card-body\">\n            <p>{{'SHARED-EXPERIENCES.KICK-PARTICIPANT-INFO' | translate}}</p>\n        </div>\n\n        <div class=\"card-footer border-0\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-6\">\n                    <button class=\"btn-auto btn-color-outline w-100\"\n                            id=\"btn-dismiss-kick\"\n                            (click)=\"d()\">\n                        <i class=\"fas fa-times\"></i>\n                        {{ 'BTN.CANCEL' | translate}}\n                    </button>\n                </div>\n\n                <div class=\"col-12 col-sm-6\">\n                    <button class=\"btn-auto btn-color-fill w-100\"\n                            id=\"btn-confirm-kick\"\n                            (click)=\"kickParticipant()\"\n                    >\n                        <i class=\"fas fa-check\"></i>\n                        {{ 'BTN.CONFIRM' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ng-template>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_standalone-components_display-user_display-user_component_ts.js.map