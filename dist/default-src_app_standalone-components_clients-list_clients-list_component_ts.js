(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_standalone-components_clients-list_clients-list_component_ts"],{

/***/ 82882:
/*!****************************************************!*\
  !*** ./src/app/shared/_services/modals.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);



let ModalService = class ModalService {
  constructor() {
    // Functions For Changes Detection
    this.listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.listChangedObs = this.listChanged.asObservable();
  }
  // Trigger list changes
  triggerUserListChanges(message) {
    // Change the subject value
    this.listChanged.next(message);
  }
  // Set the element id
  setElementId(elementId) {
    this.elementId = elementId;
  }
  setElementInfo(elementInfo) {
    this.elementInfo = elementInfo;
  }
  // Return the element id value
  getElementId() {
    return this.elementId;
  }
  getElementInfo() {
    console.log('element info', this.elementInfo);
    return this.elementInfo;
  }
};
ModalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ModalService);


/***/ }),

/***/ 32290:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/mat-table-responsive/mat-table-responsive.directive.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatTableResponsiveDirective": () => (/* binding */ MatTableResponsiveDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68951);




let MatTableResponsiveDirective = class MatTableResponsiveDirective {
  constructor(table, renderer) {
    this.table = table;
    this.renderer = renderer;
    this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.theadChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
    this.tbodyChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.theadObserver = new MutationObserver(() => this.theadChanged$.next(true));
    this.tbodyObserver = new MutationObserver(() => this.tbodyChanged$.next(true));
  }
  ngOnInit() {
    this.thead = this.table.nativeElement.querySelector('thead');
    this.tbody = this.table.nativeElement.querySelector('tbody');
    this.theadObserver.observe(this.thead, {
      characterData: true,
      subtree: true
    });
    this.tbodyObserver.observe(this.tbody, {
      childList: true
    });
  }
  ngAfterViewInit() {
    /**
     * Set the "data-column-name" attribute for every body row cell, either on
     * thead row changes (e.g. language changes) or tbody rows changes (add, delete).
     */
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.theadChanged$, this.tbodyChanged$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => ({
      headRow: this.thead.rows.item(0),
      bodyRows: this.tbody.rows
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(({
      headRow,
      bodyRows
    }) => ({
      columnNames: [...headRow.children].map(headerCell => headerCell.textContent),
      rows: [...bodyRows].map(row => [...row.children])
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.onDestroy$)).subscribe(({
      columnNames,
      rows
    }) => rows.forEach(rowCells => rowCells.forEach(cell => this.renderer.setAttribute(cell, 'data-column-name', columnNames[cell.cellIndex]))));
  }
  ngOnDestroy() {
    this.theadObserver.disconnect();
    this.tbodyObserver.disconnect();
    this.onDestroy$.next(true);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2
  }];
};
MatTableResponsiveDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Directive)({
  selector: '[appMatTableResponsive]'
})], MatTableResponsiveDirective);


/***/ }),

/***/ 94494:
/*!******************************************************************************!*\
  !*** ./src/app/standalone-components/clients-list/clients-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsListComponent": () => (/* binding */ ClientsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _clients_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients-list.component.html?ngResource */ 27526);
/* harmony import */ var _clients_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients-list.component.scss?ngResource */ 51279);
/* harmony import */ var _clients_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clients_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/userData.service */ 32763);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _shared_mat_table_responsive_mat_table_responsive_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/mat-table-responsive/mat-table-responsive.directive */ 32290);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);






















let ClientsListComponent = class ClientsListComponent {
  constructor(userService, modal, toastService, modalService, cdr) {
    this.userService = userService;
    this.modal = modal;
    this.toastService = toastService;
    this.modalService = modalService;
    this.cdr = cdr;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.displayedColumns = ['id', 'name', 'registrationDate', 'email', 'package', 'status', 'approvedStatus', 'actions'];
    this.pageSizeArray = [10, 25, 100];
    this.pageSize = 25;
    this.sorting = 'registrationDate';
    this.dir = 'desc';
    this.pageNumber = 0;
    this.dataSource = [];
    this.isAdmin = false;
    this.isStaff = false;
  }
  ngOnInit() {
    this.getClients();
    this.getCurrentUserRole();
    this.listChanged();
  }
  listChanged() {
    this.modalService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get Documents List
        this.getClients();
        this.cdr.detectChanges();
      }
    });
    this.modalService.triggerUserListChanges(false);
  }
  getClients() {
    const filter = {
      roles: ["ROLE_CLIENT"]
    };
    this.userService.listUsersFiltered(this.pageNumber, this.pageSize, this.sorting, this.dir, filter).subscribe({
      next: usersList => {
        this.dataSource = usersList.content;
        this.totalElements = usersList.totalElements;
      }
    });
  }
  getCurrentUserRole() {
    this.userService.getCurrentUser().subscribe({
      next: user => {
        if (user.roles.includes('ROLE_SUPER_ADMIN')) {
          this.isAdmin = true;
          this.isStaff = false;
        }
        if (user.roles.includes('ROLE_STAFF')) {
          this.isAdmin = false;
          this.isStaff = true;
        }
      }
    });
  }
  pageChanged(event) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getClients();
  }
  changeStatus(elementId, status) {
    console.log(elementId, status);
    this.userService.changeActiveStatus(elementId, status).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: () => {
        this.toastService.showToast("Success", "Statusul clientului a fost schimbat!", "success");
        this.modalService.triggerUserListChanges(true);
      },
      error: () => {
        this.toastService.showToast("Error", "A aparut o eroare!", "error");
      }
    });
    //close the modal
    this.closeModal();
  }
  openModal(modal, data) {
    this.modal.open(modal);
    this.statusInput = data;
  }
  closeModal() {
    this.modal.closeAll();
  }
  updateApprovedStatus(id, event) {
    console.log('id: ', id, ' event: ', event["checked"]);
    const approvedStatus = event["checked"] ? 'approved' : 'pending';
    this.userService.changeUserStatus(id, approvedStatus).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: () => {
        this.toastService.showToast("Success", "Statusul clientului a fost schimbat!", "success");
        this.modalService.triggerUserListChanges(true);
      },
      error: () => {
        this.toastService.showToast("Error", "A aparut o eroare!", "error");
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
  }, {
    type: src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_5__.ModalService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, {
        static: true
      }]
    }]
  };
};
ClientsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-clients-list',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__.MatLegacyPaginatorModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__.MatLegacyTableModule, _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_3__.DashboardHeaderComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggleModule],
  template: _clients_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_shared_mat_table_responsive_mat_table_responsive_directive__WEBPACK_IMPORTED_MODULE_4__.MatTableResponsiveDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModal, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  styles: [(_clients_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientsListComponent);


/***/ }),

/***/ 51279:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/clients-list/clients-list.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.card-header {\n  padding-top: 44.5px;\n  padding-bottom: 42.5px;\n  border-color: transparent;\n}\n\n.card.custom-table.gutter-b {\n  border: none;\n}\n\n.card-event h3 {\n  max-width: 400px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/clients-list/clients-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDFM;ACmBZ;;AAdE;EACE,mBAAA;EACA,sBAAA;EACA,yBAAA;AAiBJ;;AAbE;EACE,YAAA;AAgBJ;;AAZI;EACE,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAeN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import '/src/app/theme/styles/components/colors';\n\n.card-body {\n    & > p {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n    }\n  }\n  .card-header{\n    padding-top: 44.5px;\n    padding-bottom: 42.5px;\n    border-color:transparent;\n    // background-color: rgba(237, 239, 245, 1);\n  }\n  \n  .card.custom-table.gutter-b{\n    border:none;\n  }\n  \n  .card-event{\n    h3{\n      max-width:400px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      /* autoprefixer: ignore next */\n      -webkit-box-orient: vertical;\n    }\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 27526:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/clients-list/clients-list.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <app-dashboard-header\n                pageTitleOne=\"Lista clientilor\"\n                [buttonBackRoute]=\"isStaff ? '/private/staff' : '/private/admin/dashboard'\" >\n        </app-dashboard-header>\n    </div>\n</div>\n<div class=\"container\">\n\n    <!--content-->\n    <div class=\"row tableContent\">\n        <!--Table start-->\n        <table  mat-table matSort appMatTableResponsive [dataSource]=\"dataSource\"\n               class=\"w-100\">\n\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> #</th>\n                <td data-column-name=\"#\" mat-cell\n                    *matCellDef=\"let row; let i = index;\">  {{ (pageNumber) * pageSize + i + 1 }} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Nume si prenume</th>\n                <td data-column-name=\"Nume si prenume\" mat-cell\n                    *matCellDef=\"let row\"> {{row.lastName + ' ' + row.firstName}} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"registrationDate\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Data inregistrarii</th>\n                <td data-column-name=\"Data inregistrarii\" mat-cell\n                    *matCellDef=\"let row\">{{row.registrationDate | date : 'dd.MM.yyyy'}}</td>\n            </ng-container>\n\n            <!-- Email Column -->\n            <ng-container matColumnDef=\"email\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n                <td data-column-name=\"Email\" mat-cell\n                    *matCellDef=\"let row\"> {{row.email}} </td>\n            </ng-container>\n\n            <!-- Email Column -->\n            <ng-container matColumnDef=\"package\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Pachet activ</th>\n                <td data-column-name=\"Pachet activ\" mat-cell\n                    *matCellDef=\"let row\"> {{row.subscriptionStatus}}</td>\n            </ng-container>\n\n            <!--Status column-->\n            <ng-container matColumnDef=\"status\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n                <td data-column-name=\"Status\" mat-cell *matCellDef=\"let row\">\n                            <span class=\"custom-label\"\n                                  [ngClass]=\"{\n                            'label-active' : row.activeStatus,\n                            'label-inactive' : !row.activeStatus\n                        }\">\n                                <span [ngSwitch]=\"row.activeStatus\">\n                                   <span *ngSwitchCase=\"true\">Activ</span>\n                                   <span *ngSwitchCase=\"false\">Inactiv</span>\n                                </span>\n                            </span>\n                </td>\n            </ng-container>\n\n            <!-- Email Column -->\n            <ng-container matColumnDef=\"approvedStatus\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Cont aprobat</th>\n                <td data-column-name=\"approvedStatus\" mat-cell\n                    *matCellDef=\"let row\">\n                    <mat-slide-toggle [checked]=\"row.approvedStatus === 'approved'\"\n                                      (change)=\"updateApprovedStatus(row.id, $event)\"></mat-slide-toggle>\n                </td>\n            </ng-container>\n\n             <!--actions-->\n             <ng-container matColumnDef=\"actions\">\n                <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> {{'FIELD.ACTIONS'|translate}}</th>\n                <td mat-cell *matCellDef=\"let element; let i = index\" data-column-name=\"Acțiuni\">\n                    <div class=\" d-flex actions-container py-2\" >\n\n                        <!--Change status button-->\n                        <button class=\"btn-round btn-no-outline\" matTooltip=\"Schimbă status\" (click)=\"openModal(changeStatusModal, element.status)\" id=\"changeEditorialStatus_{{i}}\">\n                            <i class=\"fas fa-toggle-on\"></i>\n                        </button>\n\n                        <!--changeStatus modal-->\n            <ng-template #changeStatusModal let-c=\"close\" let-d=\"dismiss\">\n                <div class=\"modal-card card p-4\">\n                    <div class=\"card-header border-0\">\n                        <h3 class=\"m-0\">\n                            Schimbă statusul clientului\n                        </h3>\n                    </div>\n\n                    <!-- <div class=\"card-body\"> -->\n\n                        <!-- <div class=\"\"> -->\n                            <div class=\"d-flex justify-content-center align-items-start flex-column\">\n                                <!-- <h3>#{{ (i + 1) + pageSize * (page) }} </h3> -->\n                                <!--                                        <p class=\"m-0\">{{userData?.firstName+' '+userData?.lastName}}</p>-->\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                    <mat-label>{{\"THREAD.CHANGE_STATUS\" | translate}}</mat-label>\n                                    <mat-select [(ngModel)]=\"statusInput\">\n                                        <mat-option [value]=\"true\">Activ</mat-option>\n                                        <mat-option [value]=\"false\">Inactiv</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        <!-- </div> -->\n\n                    <!-- </div> -->\n\n                    <div class=\"border-0\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-sm-6\">\n                                <button class=\"btn-auto btn-color-outline w-100\"\n                                        (click)=\"closeModal()\">\n                                    <i class=\"fas fa-times\"></i>\n                                    {{ 'BTN.CANCEL' | translate}}\n                                </button>\n                            </div>\n\n                            <div class=\"col-12 col-sm-6\">\n                                <button class=\"btn-auto btn-color-fill w-100\"\n                                        (click)=\"changeStatus(element.id, statusInput)\">\n                                    <i class=\"fas fa-check\"></i>\n                                    {{ 'BTN.CONFIRM' | translate}}\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n\n                    </div>\n                </td>\n\n            </ng-container>\n\n\n\n\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n            <!-- Row shown when there is no matching data. -->\n            <tr class=\"mat-row\" *matNoDataRow>\n\n                <td class=\"mat-cell\" colspan=\"4\">{{'PROVIDER.NO_DATA'|translate}}</td>\n            </tr>\n        </table>\n\n        <!--Pagination-->\n        <mat-paginator\n                [pageSizeOptions]=\"pageSizeArray\"\n                [length]=\"totalElements\"\n                [pageSize]=\"pageSize\"\n                (page)=\"pageChanged($event)\">\n        </mat-paginator>\n\n    </div>\n\n\n</div><!--container-fluid general-box-->\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_standalone-components_clients-list_clients-list_component_ts.js.map