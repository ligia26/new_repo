(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_system-logs_system-logs_module_ts"],{

/***/ 41751:
/*!****************************************************************!*\
  !*** ./src/app/features/system-logs/_services/logs.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsService": () => (/* binding */ LogsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let LogsService = class LogsService {
  constructor(http) {
    this.http = http;
  }
  listLogsFiltered(page, size, sort, dir, filterParams) {
    return this.http.post('/bestinform/listLogsFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filterParams);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
LogsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], LogsService);


/***/ }),

/***/ 53863:
/*!***********************************************************************!*\
  !*** ./src/app/features/system-logs/logs-list/logs-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsListComponent": () => (/* binding */ LogsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _logs_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logs-list.component.html?ngResource */ 58612);
/* harmony import */ var _logs_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logs-list.component.scss?ngResource */ 39868);
/* harmony import */ var _logs_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logs_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/modals.service */ 82882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_logs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/logs.service */ 41751);











let LogsListComponent = class LogsListComponent {
  constructor(logsService, ngbModalService, modalService, router, cdr, datepipe) {
    this.logsService = logsService;
    this.ngbModalService = ngbModalService;
    this.modalService = modalService;
    this.router = router;
    this.cdr = cdr;
    this.datepipe = datepipe;
    // Mat Table
    this.displayedColumns = ['date', 'action', 'user'];
    this.dataList = [];
    this.pageItems = [10, 25, 100];
    this.filterActionType = undefined;
    // Mat Table - pagination, sorting, filtering
    this.page = 0;
    this.sorting = "date";
    this.dir = 'desc';
    this.pageSize = 10;
    this.actionTypes = [{
      value: 'create',
      title: 'creare'
    }, {
      value: 'update',
      title: 'actualizare'
    }, {
      value: 'delete',
      title: 'ștergere'
    }, {
      value: 'changeAttributeOrder',
      title: 'schimbare ordine atribut'
    }, {
      value: 'changeMediaStatus',
      title: 'schimbare status media'
    }, {
      value: 'deleteProductAttachment',
      title: 'ștergere atașament produs'
    }, {
      value: 'buySubscription',
      title: 'cumpărare subscribtie'
    }, {
      value: 'cancelSubscription',
      title: 'anulare subscribtie'
    }, {
      value: 'changePurchasedSubscriptionStatus',
      title: 'schimbare status subscribtie'
    }, {
      value: 'makeAutoRenewTrue',
      title: 'activare reînnoire automată subscribtie'
    }, {
      value: 'changeValidityStatus',
      title: 'schimbare status validitate'
    }, {
      value: 'changeReservationStatus',
      title: 'schimbare status rezervare'
    }, {
      value: 'updateReservation',
      title: 'actualizare rezervare'
    }, {
      value: 'changeResourceStatus',
      title: 'schimbare status resursa'
    }, {
      value: 'changeResourceCategoryEnableForListStatus',
      title: 'schimbare status de vizibilitate in listă pentru categorie de resurse'
    }, {
      value: 'deleteResourceFeatureImage',
      title: 'ștergere imagine reprezentativă resursă'
    }, {
      value: 'deleteParticipantFromSharedExperience',
      title: 'ștergere participant din shared experience'
    }, {
      value: 'leaveSharedExperience',
      title: 'părăsire shared experience'
    }, {
      value: 'changeStatus',
      title: 'schimbare status'
    }, {
      value: 'disableThreadComment',
      title: 'dezactivare postarea de comentarii în thread'
    }, {
      value: 'changeTripStatus',
      title: 'schimbare status trip'
    }, {
      value: 'addUser',
      title: 'adăugare user'
    }, {
      value: 'updateUser',
      title: 'actualizare user'
    }, {
      value: 'changeUserPassword',
      title: 'schimbare parolă utilizator'
    }, {
      value: 'changeUserStatus',
      title: 'schimbare status utilizator'
    }, {
      value: 'changeActiveStatus',
      title: 'schimbare status cont'
    }, {
      value: 'updateUserPreferences',
      title: 'schimbare preferinte utilizator'
    }];
  }
  ngOnInit() {
    // Initialize Data
    this.initiateData();
    // Listen to List Changes
    this.listChanges();
  }
  getDataList() {
    const filterObj = {
      activityTpe: this.filterActionType,
      userName: this.filterName
    };
    this.logsService.listLogsFiltered(this.page, this.pageSize, this.sorting, this.dir, filterObj).subscribe(data => {
      this.dataList = data["content"];
      console.log('Logs', this.dataList);
      this.totalElements = data["totalElements"];
    });
  }
  // Listen to data changes and refresh the user list
  listChanges() {
    this.modalService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get Documents List
        this.getDataList();
        this.cdr.detectChanges();
      }
    });
  }
  applyFilter(event) {
    console.log('apply filter', event);
    if (event?.direction) {
      this.dir = event.direction === 'desc' || event.direction === '' ? 'desc' : 'asc';
      this.sorting = event.active;
      // Go to first page
      this.paginator.firstPage();
      // Listen to layout changes
      this.cdr.detectChanges();
      // Get All Documents List
      this.getDataList();
    } else {
      this.paginator.firstPage();
      this.getDataList();
    }
  }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Documents List
    this.getDataList();
  }
  // Filter List
  filterData() {
    // Go to first page
    this.paginator.firstPage();
    // Get All Documents List
    this.getDataList();
  }
  // Sort List
  announceSortChange(sortState) {
    if (sortState.direction) {
      this.sorting = sortState.active;
      this.dir = sortState.direction;
      // Go to first page
      this.paginator.firstPage();
      // Listen to layout changes
      this.cdr.detectChanges();
      // Get All Documents List
      this.getDataList();
    }
  }
  //initialize data
  initiateData() {
    this.getDataList();
    // Data Loaded
    this.dataLoaded = true;
    // Change Detection
    this.cdr.detectChanges();
  }
  closeModal() {
    this.ngbModalService.dismissAll();
  }
  clearfilterName() {
    this.filterName = undefined;
  }
  clearFields() {
    this.filterName = undefined;
    this.filterActionType = undefined;
    this.paginator.firstPage();
    this.getDataList();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_logs_service__WEBPACK_IMPORTED_MODULE_3__.LogsService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal
  }, {
    type: _shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_8__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, {
        static: true
      }]
    }]
  };
};
LogsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-logs-list',
  template: _logs_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: [(_logs_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LogsListComponent);


/***/ }),

/***/ 2229:
/*!************************************************************!*\
  !*** ./src/app/features/system-logs/system-logs.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemLogsModule": () => (/* binding */ SystemLogsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _logs_list_logs_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logs-list/logs-list.component */ 53863);








const routes = [{
  path: 'list',
  component: _logs_list_logs_list_component__WEBPACK_IMPORTED_MODULE_2__.LogsListComponent
}];
let SystemLogsModule = class SystemLogsModule {};
SystemLogsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_logs_list_logs_list_component__WEBPACK_IMPORTED_MODULE_2__.LogsListComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__.DashboardHeaderComponent]
})], SystemLogsModule);


/***/ }),

/***/ 39868:
/*!************************************************************************************!*\
  !*** ./src/app/features/system-logs/logs-list/logs-list.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\ntable {\n  width: 100%;\n}\n\n.card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.table-container {\n  padding: 24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header {\n  padding-top: 44.5px;\n  padding-bottom: 42.5px;\n  border-color: transparent;\n  background-color: rgb(237, 239, 245);\n}\n\n.card.custom-table.gutter-b {\n  border: none;\n}\n\n@media only screen and (min-width: 992px) {\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted {\n    max-width: 300px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted {\n    max-width: 120px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  td.mat-cell.cdk-cell.cdk-column-category.mat-column-category.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-date.mat-column-date.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-authors.mat-column-authors.ng-star-inserted {\n    max-width: 50px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\ni.fa-search {\n  color: rgba(36, 57, 138, 0.24);\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\na.title-link {\n  text-decoration: none;\n  color: #24398A;\n  font-weight: 500;\n}\n\n.logs-table .mat-column-date.mat-header-cell,\n.logs-table .mat-column-date.mat-cell {\n  min-width: 200px !important;\n}\n\n.logs-table .mat-column-user.mat-header-cell,\n.logs-table .mat-column-user.mat-cell {\n  min-width: 300px !important;\n  text-align: right;\n}\n\n:host ::ng-deep .logs-table .mat-header-cell.mat-column-user .mat-sort-header-container {\n  justify-content: end !important;\n  flex-direction: row-reverse !important;\n}\n\n.user-avatar img {\n  width: 30px;\n  margin-left: 10px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/system-logs/logs-list/logs-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAhBA;EACE,WAAA;AAmBF;;AAfE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDLQ;ACuBZ;;AAdA;EACE,aAAA;EACA,kBAAA;EACA,6BAAA;AAiBF;;AAdA;EACE,mBAAA;EACA,sBAAA;EACA,yBAAA;EACA,oCAAA;AAiBF;;AAdA;EACE,YAAA;AAiBF;;AAbA;EAEE;IACE,gBAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAeF;AACF;AAZA;EAGE;IACE,gBAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAYF;EATA;;;IAGE,eAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAWF;AACF;AARA;EACE,8BAAA;AAUF;;AAPA;;;;;;IAAA;AAQA;EACE,qBAAA;EACA,cD5Ec;EC6Ed,gBAAA;AASF;;AANA;;EAEE,2BAAA;AASF;;AALA;;EAEE,2BAAA;EACA,iBAAA;AAQF;;AALA;EACE,+BAAA;EACA,sCAAA;AAQF;;AALA;EACE,WAAA;EACA,iBAAA;AAQF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import '/src/app/theme/styles/components/colors';\ntable{\n  width:100%;\n}\n\n.card-body {\n  & > p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 140%;\n    letter-spacing: -0.02em;\n    color: $paragraph;\n  }\n}\n\n.table-container{\n  padding:24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header{\n  padding-top: 44.5px;\n  padding-bottom: 42.5px;\n  border-color:transparent;\n  background-color: rgba(237, 239, 245, 1);\n}\n\n.card.custom-table.gutter-b{\n  border:none;\n}\n\n\n@media only screen and (min-width:992px){\n  //title cell\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted{\n    max-width: 300px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\n@media only screen and (min-width:992px) and (max-width: 1199px){\n\n\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted{\n    max-width: 120px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  td.mat-cell.cdk-cell.cdk-column-category.mat-column-category.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-date.mat-column-date.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-authors.mat-column-authors.ng-star-inserted{\n    max-width: 50px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\ni.fa-search{\n  color: rgba($primary-color, 0.24);\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\n\na.title-link{\n  text-decoration: none;\n  color:$primary-color;\n  font-weight: 500;\n}\n\n.logs-table .mat-column-date.mat-header-cell,\n.logs-table .mat-column-date.mat-cell {\n  min-width: 200px !important;\n}\n\n\n.logs-table .mat-column-user.mat-header-cell,\n.logs-table .mat-column-user.mat-cell {\n  min-width: 300px !important;\n  text-align: right;\n}\n\n:host ::ng-deep .logs-table .mat-header-cell.mat-column-user .mat-sort-header-container {\n  justify-content: end !important;\n  flex-direction: row-reverse !important;\n}\n\n.user-avatar img{\n  width: 30px;\n  margin-left: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 58612:
/*!************************************************************************************!*\
  !*** ./src/app/features/system-logs/logs-list/logs-list.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container mb-5\">\n    <app-dashboard-header pageTitleOne=\"Istoric Acțiuni\"\n                          [buttonBackRoute]=\"'../../dashboard'\">\n    </app-dashboard-header>\n    <div class=\"card custom-table gutter-b\">\n\n        <!----Table---------------------------------------------------------------------------->\n        <div *ngIf=\"dataLoaded\">\n            <div class=\"row filterRow\">\n                <div class=\"col-12 col-lg-7\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Nume utilizator</mat-label>\n                                <input matInput [(ngModel)]=filterName (keydown.enter)=\"applyFilter()\">\n                                <mat-icon matSuffix (click)=\"clearfilterName()\">highlight_off</mat-icon>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Tip actiune</mat-label>\n                                <mat-select [(ngModel)]=\"filterActionType\">\n                                    <mat-option [value]=\"undefined\">-</mat-option>\n                                    <mat-option *ngFor=\"let action of actionTypes\" [value]=\"action.value\">{{action.title}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"col-12 col-lg-5 d-flex align-items-center justify-content-end gap-2\">\n                    <button type=\"button\" class=\"btn-round btn-color-outline\" id=\"clearFilterBtn\" (click)=\"clearFields()\" matTooltip=\"{{'RESOURCE.RESET-FILTERS' | translate}}\"><i\n                            class=\"fas fa-sync\"></i></button>\n                    <button type=\"button\" id=\"id-resources-filter\" class=\"btn-long btn-color-fill\" (click)=\"applyFilter()\">{{'BTN.FILTER' | translate}}\n                        <i class=\"fas fa-filter\"></i></button>\n                </div>\n\n\n            </div>\n\n\n            <div class=\" row tableContent\">\n\n                <table class=\"editorals-table-class logs-table\" mat-table matSort appMatTableResponsive [dataSource]=\"dataList\" (matSortChange) = applyFilter($event)>\n                    <!--Create data-->\n                    <ng-container matColumnDef=\"date\">\n                        <th mat-header-cell mat-sort-header *matHeaderCellDef>Data și Ora</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.CREATION_DATE'|translate}}\">\n                            <ng-container [ngSwitch]=\"element.objectType\">\n                                <span *ngSwitchCase=\"'resourceAttribute'\">\n                                       <i class=\"fas fa-diamond\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'resource'\">\n                                       <i class=\"fas fa-mountain\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'resourceTemplate'\">\n                                       <i class=\"fas fa-file-archive\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'attributeCategory'\">\n                                       <i class=\"fas fa-clipboard-list\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'resourceAttributes'\">\n                                       <i class=\"fas fa-diamond\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'bookingTimePicker'\">\n                                       <i class=\"fas fa-clock\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'bookingTimeSlot'\">\n                                       <i class=\"fas fa-business-time\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'city'\">\n                                      <i class=\"fas fa-city\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'conversation'\">\n                                      <i class=\"fas fa-comments\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'country'\">\n                                      <i class=\"fas fa-flag\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'cv'\">\n                                      <i class=\"fas fa-address-book\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'domain'\">\n                                      <i class=\"fas fa-grip-horizontal\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'editorialCategory'\">\n                                      <i class=\"fas fa-folder-plus\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'editorial'\">\n                                      <i class=\"fas fa-newspaper\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'editorialSubcategory'\">\n                                      <i class=\"fas fa-list\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'footer'\">\n                                      <i class=\"fas fa-border-all\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'forum'\">\n                                      <i class=\"fas fa-table-list\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'itinerary'\">\n                                      <i class=\"fas fa-route\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'location'\">\n                                      <i class=\"fas fa-map-marked\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'media'\">\n                                      <i class=\"fas fa-photo-video\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'menu'\">\n                                      <i class=\"fas fa-utensils\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'notificationTemplate'\">\n                                      <i class=\"fas fa-envelope-open\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'paymentRequest'\">\n                                      <i class=\"fas fa-comment-dollar\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'product'\">\n                                      <i class=\"fas fa-book\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'purchasedSubscription'\">\n                                      <i class=\"fas fa-hand-holding-usd\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'reservation'\">\n                                      <i class=\"fas fa-receipt\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'resourceCategory'\">\n                                      <i class=\"fas fa-folder\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'resourceType'\">\n                                     <i class=\"fas fa-folder-open\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'roomItem'\">\n                                    <i class=\"fas fa-bed\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'secondaryPage'\">\n                                    <i class=\"fas fa-file-alt\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'sharedExperience'\">\n                                    <i class=\"fas fa-users\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'subscription'\">\n                                    <i class=\"fas fa-piggy-bank\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'systemSettings'\">\n                                    <i class=\"fas fa-gear\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'threadComment'\">\n                                    <i class=\"fas fa-comment\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'ticket'\">\n                                    <i class=\"fas fa-ticket-alt\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'tripReservation'\">\n                                    <i class=\"fas fa-hotel\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'trip'\">\n                                    <i class=\"fas fa-suitcase-rolling\"></i>\n                                </span>\n                                <span *ngSwitchCase=\"'user'\">\n                                    <i class=\"fas fa-user\"></i>\n                                </span>\n                            </ng-container>\n                            {{element.date | date:'dd/MM/yyyy HH:mm'}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"action\">\n                        <th mat-header-cell *matHeaderCellDef > Acțiune</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"actiune\">\n                            A fost\n\n                            <ng-container [ngSwitch]=\"element.activityType\">\n                                <span *ngSwitchCase=\"'create'\">creat</span>\n                                <span *ngSwitchCase=\"'update'\">actualizat</span>\n                                <span *ngSwitchCase=\"'delete'\">șters</span>\n                                <span *ngSwitchCase=\"'changeAttributeOrder'\">schimbată ordinea pentru</span>\n                                <span *ngSwitchCase=\"'changeMediaStatus'\">schimbat statusul pentru</span>\n                                <span *ngSwitchCase=\"'deleteProductAttachment'\">șters un atașament pentru</span>\n                                <span *ngSwitchCase=\"'buySubscription'\">cumpărat</span>\n                                <span *ngSwitchCase=\"'cancelSubscription'\">anulat</span>\n                                <span *ngSwitchCase=\"'changePurchasedSubscriptionStatus'\">schimbat statusul pentru</span>\n                                <span *ngSwitchCase=\"'makeAutoRenewTrue'\">activată reînnoirea automată pentru</span>\n                                <span *ngSwitchCase=\"'changeValidityStatus'\">schimbată valabilitatea pentru</span>\n                                <span *ngSwitchCase=\"'changeReservationStatus'\">schimbat statusul pentru</span>\n                                <span *ngSwitchCase=\"'updateReservation'\">actualizat</span>\n                                <span *ngSwitchCase=\"'changeResourceStatus'\">schimbat statusul pentru</span>\n                                <span *ngSwitchCase=\"'changeResourceCategoryEnableForListStatus'\">schimbat statusul de vizibilitate in listă pentru</span>\n                                <span *ngSwitchCase=\"'deleteResourceFeatureImage'\">ștearsă imaginea pentru</span>\n                                <span *ngSwitchCase=\"'deleteParticipantFromSharedExperience'\">șters un participant din</span>\n                                <span *ngSwitchCase=\"'leaveSharedExperience'\">părăsit</span>\n                                <span *ngSwitchCase=\"'changeStatus'\">schimbat statusul pentru</span>\n                                <span *ngSwitchCase=\"'disableThreadComment'\">dezactivată postarea de comentarii pentru</span>\n                                <span *ngSwitchCase=\"'changeTripStatus'\">schimbat statusul pentru</span>\n                                <span *ngSwitchCase=\"'addUser'\">schimbat statusul pentru</span>\n                                <span *ngSwitchCase=\"'updateUser'\">schimbat statusul pentru</span>\n                                <span *ngSwitchCase=\"'changeUserPassword'\">schimbat statusul pentru</span>\n                                <span *ngSwitchCase=\"'changeUserStatus'\">schimbat statusul pentru</span>\n                                <span *ngSwitchCase=\"'changeActiveStatus'\">schimbat statusul pentru</span>\n                                <span *ngSwitchCase=\"'updateUserPreferences'\">schimbat statusul pentru</span>\n\n                            </ng-container>\n\n                            elementul de tip\n                            <ng-container [ngSwitch]=\"element.objectType\">\n                                <span *ngSwitchCase=\"'resourceAttribute'\">atribut resursă</span>\n                                <span *ngSwitchCase=\"'resource'\">resursă</span>\n                                <span *ngSwitchCase=\"'resourceTemplate'\">template resursă</span>\n                                <span *ngSwitchCase=\"'attributeCategory'\">atribut categorie</span>\n                                <span *ngSwitchCase=\"'resourceAttributes'\">atribute resursă</span>\n                                <span *ngSwitchCase=\"'bookingTimePicker'\">time picker</span>\n                                <span *ngSwitchCase=\"'bookingTimeSlot'\">time slot</span>\n                                <span *ngSwitchCase=\"'city'\">oraș</span>\n                                <span *ngSwitchCase=\"'conversation'\">conversație</span>\n                                <span *ngSwitchCase=\"'country'\">țară</span>\n                                <span *ngSwitchCase=\"'cv'\">CV</span>\n                                <span *ngSwitchCase=\"'domain'\">domeniu</span>\n                                <span *ngSwitchCase=\"'editorialCategory'\">categorie editorial</span>\n                                <span *ngSwitchCase=\"'editorial'\">editorial</span>\n                                <span *ngSwitchCase=\"'editorialSubcategory'\">subcategorie editorial</span>\n                                <span *ngSwitchCase=\"'footer'\">footer</span>\n                                <span *ngSwitchCase=\"'forum'\">forum</span>\n                                <span *ngSwitchCase=\"'itinerary'\">itinerariu</span>\n                                <span *ngSwitchCase=\"'location'\">locație</span>\n                                <span *ngSwitchCase=\"'media'\">media</span>\n                                <span *ngSwitchCase=\"'menu'\">meniu</span>\n                                <span *ngSwitchCase=\"'notificationTemplate'\">notificare șablon</span>\n                                <span *ngSwitchCase=\"'paymentRequest'\">cerere plată</span>\n                                <span *ngSwitchCase=\"'product'\">produs</span>\n                                <span *ngSwitchCase=\"'purchasedSubscription'\">achiziție abonament</span>\n                                <span *ngSwitchCase=\"'reservation'\">rezervare</span>\n                                <span *ngSwitchCase=\"'resourceCategory'\">categorie resursă</span>\n                                <span *ngSwitchCase=\"'resourceType'\">tip de resursă</span>\n                                <span *ngSwitchCase=\"'roomItem'\">cameră</span>\n                                <span *ngSwitchCase=\"'secondaryPage'\">pagină secundară</span>\n                                <span *ngSwitchCase=\"'sharedExperience'\">experiență la comun</span>\n                                <span *ngSwitchCase=\"'subscription'\">abonament</span>\n                                <span *ngSwitchCase=\"'systemSettings'\">setări sistem</span>\n                                <span *ngSwitchCase=\"'threadComment'\">comentariu</span>\n                                <span *ngSwitchCase=\"'ticket'\">bilet</span>\n                                <span *ngSwitchCase=\"'tripReservation'\">rezervare călătorie</span>\n                                <span *ngSwitchCase=\"'trip'\">călătorie</span>\n                                <span *ngSwitchCase=\"'user'\">utilizator</span>\n                            </ng-container>\n                            <span *ngIf=\"!element.objectName.includes('For resourceId')\" class=\"mx-1\">cu identificatorul {{element.objectName}} ({{element.objectId}})</span>\n                            <span *ngIf=\"element.objectName.includes('For resourceId')\" class=\"mx-1\">pentru resursa cu id-ul {{element.objectName | slice:15}}.</span>\n\n                        </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"user\">\n                        <th mat-header-cell *matHeaderCellDef> Utilizator</th>\n                        <td mat-cell  *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.AUTHOR'|translate}}\">\n                            <span>{{element.userName}}</span>\n                            <span class=\"user-avatar\" *ngIf=\"element.userAvatar?.filePath\">\n                                <img [src]=\"element.userAvatar.filePath\" alt=\"user avatar\" class=\"img-fluid\"/>\n                            </span>\n                            </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n\n\n                <!--Pagination-->\n                <mat-paginator\n                        [pageSizeOptions]=\"pageItems\"\n                        [length]=\"totalElements\"\n                        [pageSize]=\"pageSize\"\n                        (page)=\"pageChanged($event)\"\n                >\n                </mat-paginator>\n\n            </div>\n            <!-- Table container -->\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_system-logs_system-logs_module_ts.js.map