(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_jobs-dashboard_jobs-dashboard_module_ts"],{

/***/ 40690:
/*!**************************************************************************************!*\
  !*** ./src/app/features/jobs-dashboard/candidates-list/candidates-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidatesListComponent": () => (/* binding */ CandidatesListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _candidates_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candidates-list.component.html?ngResource */ 74904);
/* harmony import */ var _candidates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./candidates-list.component.scss?ngResource */ 73410);
/* harmony import */ var _candidates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_candidates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _shared_services_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/modals.service */ 82882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _jobs_services_job_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../jobs/_services/job.service */ 88659);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);

















let CandidatesListComponent = class CandidatesListComponent {
  constructor(ngbModalService, resourcesService, modalService, router, cdr, datepipe, userService, modal, toastService, jobService) {
    this.ngbModalService = ngbModalService;
    this.resourcesService = resourcesService;
    this.modalService = modalService;
    this.router = router;
    this.cdr = cdr;
    this.datepipe = datepipe;
    this.userService = userService;
    this.modal = modal;
    this.toastService = toastService;
    this.jobService = jobService;
    // Mat Table
    this.displayedColumns = ['id', 'name', 'isPublic', 'actions'];
    this.dataList = [];
    this.myList = [];
    this.pageItems = [10, 25, 100];
    //on destroy component
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    // Mat Table - Filter Forms
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('');
    // Mat Table - pagination, sorting, filtering
    this.page = 0;
    this.sorting = "date";
    this.dir = 'desc';
    this.pageSize = 10;
  }
  ngOnInit() {
    // Initialize Data
    this.initiateData();
    // Listen to List Changes
    this.listChanges();
  }
  initiateData() {
    this.resourcesService.getListOfDomains().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: domain => {
        domain.forEach(element => {
          if (element.key === 'jobs') {
            this.jobDomainId = element.id;
          }
        });
        console.log('id job', this.jobDomainId);
        this.getData();
        // Data Loaded
        this.dataLoaded = true;
        // Change Detection
        this.cdr.detectChanges();
      }
    });
  }
  getData() {
    const filterObj = {
      name: this.searchFilter.value === '' ? null : this.searchFilter.value
    };
    this.jobService.getListCvFilteredpage(this.page, this.pageSize, this.sorting, this.dir, filterObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: resp => {
        this.dataList = resp.content;
        this.totalElements = resp.totalElements;
        console.log('obiectul', filterObj);
      }
    });
  }
  // Listen to data changes and refresh the user list
  listChanges() {
    this.modalService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get All Job List
        this.getData();
        this.cdr.detectChanges();
        this.modalService.triggerUserListChanges(false);
      }
    });
  }
  // Filter List
  filterData() {
    // Go to first page
    this.paginator.firstPage();
    // this.page=0;
    // Get All Job List
    this.getData();
  }
  // Sort List
  announceSortChange(sortState) {
    if (sortState.direction) {
      this.sorting = sortState.active;
      this.dir = sortState.direction;
      // Go to first page
      this.paginator.firstPage();
      // this.page=0;
      // Listen to layout changes
      this.cdr.detectChanges();
      // Get All job List
      this.getData();
    }
  }
  applyFilter(event) {
    if (event.direction) {
      this.dir = event.direction === 'desc' || event.direction === '' ? 'asc' : 'desc';
      this.sorting = event.active;
      // Go to first page
      this.paginator.firstPage();
      // this.page=0;
      // Listen to layout changes
      this.cdr.detectChanges();
      // Get All Documents List
      this.getData();
    }
  }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Job List
    this.getData();
  }
  changeStatus(elementId, status) {
    console.log('change status', elementId, status);
    this.resourcesService.changeStatusForResource(elementId, status).subscribe({
      next: resp => {
        if (resp.success) {
          this.modalService.triggerUserListChanges(true);
          this.toastService.showToast('Success', 'Vizibilitatea CV-ului a fost modificată!', 'success');
          this.modal.closeAll();
        }
      },
      error: err => {
        console.log(err);
        this.toastService.showToast('Error', 'Vizibilitatea CV-ului NU a fost modificată!', "error");
      }
    });
  }
  deleteElement(elementId) {
    console.log('test', elementId);
    this.jobService.deleteCvById(elementId).subscribe({
      next: resp => {
        if (resp.success) {
          this.modalService.triggerUserListChanges(true);
          this.toastService.showToast('Success', 'CV-ul a fost sters!', 'success');
          this.modal.closeAll();
        }
      },
      error: err => {
        console.log(err);
        this.toastService.showToast('Error', 'CV-ul NU a putut fi sters!', "error");
      }
    });
  }
  downloadCv(cv) {
    console.log('cv', cv);
    const link = document.createElement('a');
    link.href = cv.filePath;
    link.download = cv.fileName;
    link.target = '_blank';
    link.click();
  }
  openModal(modal, data) {
    this.modal.open(modal);
    this.statusInput = data;
  }
  closeModal() {
    this.modal.closeAll();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }, {
    type: _shared_services_modals_service__WEBPACK_IMPORTED_MODULE_3__.ModalService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
  }, {
    type: _jobs_services_job_service__WEBPACK_IMPORTED_MODULE_6__.JobService
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_15__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, {
        static: true
      }]
    }]
  };
};
CandidatesListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-candidates-list',
  template: _candidates_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal],
  styles: [(_candidates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CandidatesListComponent);


/***/ }),

/***/ 30020:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/jobs-dashboard/jobs-dashboard-list/jobs-dashboard-list.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsDashboardListComponent": () => (/* binding */ JobsDashboardListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _jobs_dashboard_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs-dashboard-list.component.html?ngResource */ 93939);
/* harmony import */ var _jobs_dashboard_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs-dashboard-list.component.scss?ngResource */ 58236);
/* harmony import */ var _jobs_dashboard_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jobs_dashboard_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);
/* harmony import */ var src_app_shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/resources.service */ 3145);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
















let JobsDashboardListComponent = class JobsDashboardListComponent {
  constructor(ngbModalService, resourcesService, modalService, router, cdr, datepipe, userService, modal, toastService) {
    this.ngbModalService = ngbModalService;
    this.resourcesService = resourcesService;
    this.modalService = modalService;
    this.router = router;
    this.cdr = cdr;
    this.datepipe = datepipe;
    this.userService = userService;
    this.modal = modal;
    this.toastService = toastService;
    // Mat Table
    this.displayedColumns = ['id', 'title', 'provider', 'date&hour', 'status', 'views', 'actions'];
    this.dataList = [];
    this.myList = [];
    this.pageItems = [10, 25, 100];
    //on destroy component
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    // Mat Table - Filter Forms
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
    // Mat Table - pagination, sorting, filtering
    this.page = 0;
    this.sorting = "lastUpdateDate";
    this.dir = 'desc';
    this.pageSize = 10;
  }
  ngOnInit() {
    // Initialize Data
    this.initiateData();
    // Listen to List Changes
    this.listChanges();
  }
  initiateData() {
    this.resourcesService.getListOfDomains().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: domain => {
        domain.forEach(element => {
          if (element.key === 'jobs') {
            this.jobDomainId = element.id;
          }
        });
        console.log('id job', this.jobDomainId);
        this.getJobList();
        // Data Loaded
        this.dataLoaded = true;
        // Change Detection
        this.cdr.detectChanges();
      }
    });
  }
  getJobList() {
    const filterObj = {
      title: this.searchFilter.value === '' ? null : this.searchFilter.value,
      domain: this.jobDomainId
    };
    this.resourcesService.listResourceFiltered(this.page, this.pageSize, this.sorting, this.dir, filterObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: jobList => {
        this.dataList = jobList.content;
        this.totalElements = jobList.totalElements;
        console.log('din job list, obiectul', filterObj);
      }
    });
  }
  // Listen to data changes and refresh the user list
  listChanges() {
    this.modalService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get All Job List
        this.getJobList();
        this.cdr.detectChanges();
        this.modalService.triggerUserListChanges(false);
      }
    });
  }
  // Filter List
  filterData() {
    // Go to first page
    // this.paginator.firstPage();
    this.page = 0;
    // Get All Job List
    this.getJobList();
  }
  // Sort List
  announceSortChange(sortState) {
    if (sortState.direction) {
      this.sorting = sortState.active;
      this.dir = sortState.direction;
      // Go to first page
      // this.paginator.firstPage();
      this.page = 0;
      // Listen to layout changes
      this.cdr.detectChanges();
      // Get All job List
      this.getJobList();
    }
  }
  applyFilter(event) {
    if (event.direction) {
      this.dir = event.direction === 'desc' || event.direction === '' ? 'asc' : 'desc';
      if (event.active === 'provider') {
        this.sorting = 'userId';
      } else if (event.active === 'date&hour') {
        this.sorting = 'date';
      } else {
        this.sorting = event.active;
      }
      // Go to first page
      // this.paginator.firstPage();
      this.page = 0;
      // Listen to layout changes
      this.cdr.detectChanges();
      // Get All Documents List
      this.getJobList();
    }
  }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Job List
    this.getJobList();
  }
  changeStatus(jobId, status) {
    console.log('change status', jobId, status);
    this.resourcesService.changeStatusForResource(jobId, status).subscribe({
      next: resp => {
        if (resp.success) {
          this.modalService.triggerUserListChanges(true);
          this.toastService.showToast('Success', 'Statusul resursei a fost modificat!', 'success');
          this.modal.closeAll();
        }
      },
      error: err => {
        console.log(err);
        if (err.error.reason === 'invalidId') {
          this.toastService.showToast('Error', 'Această resursă nu mai există în baza de date!', "error");
        }
        if (err.error.reason === 'notLoggedIn' || err.error.reason === 'tokenExpired') {
          this.toastService.showToast('Error', 'Pentru a finaliza această acțiune trebuie să fii logat!', "error");
        }
      }
    });
  }
  openModal(modal, data) {
    this.modal.open(modal);
    this.statusInput = data;
  }
  closeModal() {
    this.modal.closeAll();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal
  }, {
    type: src_app_shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__.ResourcesService
  }, {
    type: src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, {
        static: true
      }]
    }]
  };
};
JobsDashboardListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-jobs-dashboard-list',
  template: _jobs_dashboard_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal],
  styles: [(_jobs_dashboard_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], JobsDashboardListComponent);


/***/ }),

/***/ 94798:
/*!******************************************************************!*\
  !*** ./src/app/features/jobs-dashboard/jobs-dashboard.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsDashboardModule": () => (/* binding */ JobsDashboardModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _jobs_dashboard_list_jobs_dashboard_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs-dashboard-list/jobs-dashboard-list.component */ 30020);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _jobs_components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jobs/_components/view-job/view-job.component */ 73758);
/* harmony import */ var _candidates_list_candidates_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./candidates-list/candidates-list.component */ 40690);















const routes = [
// {
//     path: '',
//     redirectTo: 'jobs-dashboard-list',
//     pathMatch: "full"
//
// },
{
  path: 'list',
  component: _jobs_dashboard_list_jobs_dashboard_list_component__WEBPACK_IMPORTED_MODULE_0__.JobsDashboardListComponent,
  pathMatch: "full"
}, {
  path: 'candidates',
  component: _candidates_list_candidates_list_component__WEBPACK_IMPORTED_MODULE_4__.CandidatesListComponent,
  pathMatch: "full"
}, {
  path: 'view/:id',
  component: _jobs_components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_3__.ViewJobComponent,
  pathMatch: "full"
}];
let JobsDashboardModule = class JobsDashboardModule {};
JobsDashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_jobs_dashboard_list_jobs_dashboard_list_component__WEBPACK_IMPORTED_MODULE_0__.JobsDashboardListComponent, _candidates_list_candidates_list_component__WEBPACK_IMPORTED_MODULE_4__.CandidatesListComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), src_app_standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__.DashboardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__.MatLegacyInputModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_14__.MatLegacySelectModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
})], JobsDashboardModule);


/***/ }),

/***/ 3145:
/*!*******************************************************!*\
  !*** ./src/app/shared/_services/resources.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesService": () => (/* binding */ ResourcesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let ResourcesService = class ResourcesService {
  // Trigger list changes
  triggerListChanges(message) {
    // Change the subject value
    this.listChanged.next(message);
  }
  constructor(http) {
    this.http = http;
    // Functions For Changes Detection
    this.listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.listChangedObs = this.listChanged.asObservable();
  }
  getAttributesFromTemplate(id) {
    return this.http.get('/bestinform/getAttributesFromTemplate?resourceTemplateId=' + id);
  }
  getListOfDomains() {
    return this.http.get('/bestinform/getListOfDomains');
  }
  getResourceByDomain(resourceDomain) {
    return this.http.get('/bestinform/getAllResourceCategoriesByResourceDomain?resourceDomain=' + encodeURIComponent(resourceDomain));
  }
  getResourceCategoryById(categoryId) {
    return this.http.get('/bestinform/getResourceCategoryById?resourceCategoryId=' + categoryId);
  }
  updateResourceCategory(categoryId, resCategory) {
    return this.http.put('/bestinform/updateResourceCategory?resourceCategoryId=' + categoryId, resCategory);
  }
  getAllResourceTypes() {
    return this.http.get('/bestinform/getAllResourceTypes');
  }
  getAllResourceCategoriesByResourceDomain(domainId, hideCategories) {
    return this.http.get('/bestinform/getAllResourceCategoriesByResourceDomain?resourceDomain=' + domainId + '&hideCategories=' + (hideCategories ? hideCategories : false));
  }
  getAllResourceTypesByResourceCategory(id) {
    return this.http.get('/bestinform/getAllResourceTypesByResourceCategory?resourceCategoryId=' + id);
  }
  deleteResourceTypeById(id) {
    return this.http.delete('/bestinform/deleteResourceTypeById?resourceTypeId=' + id);
  }
  getResourceTypeById(resourceTypeId) {
    return this.http.get('/bestinform/getResourceTypeById?resourceTypeId=' + resourceTypeId);
  }
  deleteResourceCategory(resourceId) {
    return this.http.delete('/bestinform/deleteCategoryById?resourceCategoryId=' + resourceId);
  }
  getMaxOrderForCategory(domainId) {
    return this.http.get('/bestinform/getMaxOrderByDomainId?domainId=' + domainId);
  }
  getMaxOrderForResType(categoryId) {
    return this.http.get('/bestinform/getMaxOrderByCategoryId?categoryId=' + categoryId);
  }
  addResourceCategory(category) {
    return this.http.post('/bestinform/addResourceCategory', category);
  }
  // addReviewToResource(reservationId, review:boolean) {
  //     return this.http.post('/bestinform/addReviewToResource?reservationId='+reservationId+'&review='+review,{});
  // }
  //changeReservationStatus
  addReviewToResource(reservationId, review) {
    return this.http.post('/bestinform/addReviewToResource?reservationId=' + reservationId + '&review=' + review, {});
  }
  addResourceType(resType) {
    return this.http.post('/bestinform/addResourceType', resType);
  }
  listCategoryFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listResourceCategoriesFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  //resources list
  listResourceFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listResourceFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters ? filters : {});
  }
  updateResourceType(resTypeId, resType) {
    return this.http.put('/bestinform/updateResourceType?resourceTypeId=' + resTypeId, resType);
  }
  getResourceById(resourceId) {
    return this.http.get('/bestinform/getResourceById?resourceId=' + resourceId);
  }
  getAttributes(attributesList) {
    return this.http.post('/bestinform/getAttributes', attributesList);
  }
  getAttributeCategories(categoryList) {
    return this.http.post('/bestinform/getAttributeCategories', categoryList);
  }
  //Favorites resources
  getMyFavoritesResources(language) {
    return this.http.get('/bestinform/getMyFavoriteResources?language=' + language);
  }
  deleteResourceFromFavorite(resourceId) {
    return this.http.post('/bestinform/deleteResourceFromFavorites?resourceId=' + resourceId, {});
  }
  addResourceToFavorite(resourceId) {
    return this.http.post('/bestinform/addResourceToFavorites?resourceId=' + resourceId, {});
  }
  getDomainById(domainId) {
    return this.http.get('/bestinform/getDomainById?domainId=' + domainId);
  }
  //temporar
  deleteResource(resourceId) {
    return this.http.delete('/bestinform/deleteResource?resourceId=' + resourceId);
  }
  changeStatusForResource(resourceId, status) {
    return this.http.put('/bestinform/changeResourceStatus?resourceId=' + resourceId + '&status=' + status, {});
  }
  getTimepickerByResourceId(resourceId) {
    return this.http.get('/bestinform/getBookingTimePickerByResourceId?resourceId=' + resourceId);
  }
  getRoomById(roomId) {
    return this.http.get('/bestinform/getRoomById?roomItemId=' + roomId);
  }
  getProductsByResourceId(resourceId) {
    return this.http.get('/bestinform/getProductListByResourceId?resourceId=' + resourceId);
  }
  getTimeslotsByResourceId(resourceId) {
    return this.http.get('/bestinform/getBookingTimeSlotListByResourceId?resourceId=' + resourceId);
  }
  getAvailableSlotByDate(timeslotId, date) {
    return this.http.get('/bestinform/getAvailableSlotsByDate?bookingTimeSlotId=' + timeslotId + '&date=' + date);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
ResourcesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ResourcesService);


/***/ }),

/***/ 73410:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/jobs-dashboard/candidates-list/candidates-list.component.scss?ngResource ***!
  \***************************************************************************************************/
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

/***/ 58236:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/jobs-dashboard/jobs-dashboard-list/jobs-dashboard-list.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\ntable {\n  width: 100%;\n}\n\n.card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.table-container {\n  padding: 24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header {\n  padding-top: 44.5px;\n  padding-bottom: 42.5px;\n  border-color: transparent;\n  background-color: rgb(237, 239, 245);\n}\n\n.card.custom-table.gutter-b {\n  border: none;\n}\n\n.card-event h3 {\n  max-width: 400px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n\n@media only screen and (min-width: 992px) {\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted {\n    max-width: 300px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted {\n    max-width: 120px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  td.mat-cell.cdk-cell.cdk-column-category.mat-column-category.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-date.mat-column-date.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-authors.mat-column-authors.ng-star-inserted {\n    max-width: 50px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\ni.fa-search {\n  color: rgba(36, 57, 138, 0.24);\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\na.title-link {\n  text-decoration: none;\n  color: #24398A;\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/jobs-dashboard/jobs-dashboard-list/jobs-dashboard-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAhBA;EACE,WAAA;AAmBF;;AAfE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDLQ;ACuBZ;;AAdA;EACE,aAAA;EACA,kBAAA;EACA,6BAAA;AAiBF;;AAdA;EACE,mBAAA;EACA,sBAAA;EACA,yBAAA;EACA,oCAAA;AAiBF;;AAdA;EACE,YAAA;AAiBF;;AAbE;EACE,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAgBJ;;AAXA;EAEE;IACE,gBAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAaF;AACF;AAVA;EAGE;IACE,gBAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAUF;EAPA;;;IAGE,eAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EASF;AACF;AANA;EACE,8BAAA;AAQF;;AALA;;;;;;IAAA;AAQA;EACE,qBAAA;EACA,cDxFc;ECyFd,gBAAA;AAOF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import '/src/app/theme/styles/components/colors';\ntable{\n  width:100%;\n}\n\n.card-body {\n  & > p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 140%;\n    letter-spacing: -0.02em;\n    color: $paragraph;\n  }\n}\n\n.table-container{\n  padding:24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header{\n  padding-top: 44.5px;\n  padding-bottom: 42.5px;\n  border-color:transparent;\n  background-color: rgba(237, 239, 245, 1);\n}\n\n.card.custom-table.gutter-b{\n  border:none;\n}\n\n.card-event{\n  h3{\n    max-width:400px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    /* autoprefixer: ignore next */\n    -webkit-box-orient: vertical;\n  }\n}\n\n\n@media only screen and (min-width:992px){\n  //title cell\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted{\n    max-width: 300px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\n@media only screen and (min-width:992px) and (max-width: 1199px){\n\n\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted{\n    max-width: 120px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  td.mat-cell.cdk-cell.cdk-column-category.mat-column-category.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-date.mat-column-date.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-authors.mat-column-authors.ng-star-inserted{\n    max-width: 50px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\ni.fa-search{\n  color: rgba($primary-color, 0.24);\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\n\na.title-link{\n  text-decoration: none;\n  color:$primary-color;\n  font-weight: 500;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 74904:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/jobs-dashboard/candidates-list/candidates-list.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid mb-5\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"{{'STAFF.CANDIDATES_CV'| translate}}\"\n                              [buttonBackRoute]=\"'../../dashboard'\">\n        </app-dashboard-header>\n    </div>\n\n    <div class=\"container\">\n        <!----Table---------------------------------------------------------------------------->\n        <div *ngIf=\"dataLoaded\">\n            <div class=\"row filterRow\">\n                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                    <input matInput type=\"text\" [formControl]=\"searchFilter\" (keydown.enter)=\"filterData()\" placeholder=\"Căutare\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"row tableContent\">\n\n                <table class=\"editorals-table-class\" mat-table matSort appMatTableResponsive [dataSource]=\"dataList\" (matSortChange) = applyFilter($event)>\n                    <!-- ID Column -->\n                    <ng-container matColumnDef=\"id\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> #</th>\n                        <td data-column-name=\"id\" mat-cell\n                            *matCellDef=\"let element; let i = index;\"> {{ (i + 1) + pageSize * page }} </td>\n\n                    </ng-container>\n\n                    <!--Title-->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'FIELD.NAME'| translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.NAME'| translate}}\"> {{element.name}} </td>\n                    </ng-container>\n\n\n\n\n                    <!--Status-->\n                    <ng-container matColumnDef=\"isPublic\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Vizibilitate</th>\n                        <td attr.data-column-name='Time Status' mat-cell *matCellDef=\"let element\">\n                        <span class=\"custom-label\"\n                              [ngClass]=\"{\n                        'label-active' : element.isPublic === true,\n                        'label-pending' : element.isPublic === false\n                        }\">\n                            <span [ngSwitch]=\"element.isPublic\">\n                               <span *ngSwitchCase=\"true\">Public</span>\n                               <span *ngSwitchCase=\"false\">Ascuns</span>\n                           </span>\n                        </span></td>\n\n                    </ng-container>\n\n\n\n                    <!--actions-->\n                    <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> {{'FIELD.ACTIONS'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index\" data-column-name=\"Acțiuni\">\n                            <div class=\" d-flex actions-container py-2\" >\n\n                                <!--view button-->\n                                <button class=\"btn-round btn-no-outline\" [routerLink]=\"'../../client-jobs/cv/'+element.id\" matTooltip=\"Vizualizează CV\">\n                                    <i class=\"fa fa-eye\"></i>\n                                </button>\n\n                                <!--view button-->\n                                <button class=\"btn-round btn-no-outline\"  *ngIf=\"element?.pdfCv?.filePath\" (click)=\"downloadCv(element?.pdfCv)\" matTooltip=\"Descarcă CV\">\n                                    <i class=\"fa fa-download\"></i>\n                                </button>\n\n                                <!--Change status button-->\n                                <button class=\"btn-round btn-no-outline\" matTooltip=\"Schimbă vizibilitate\"\n                                        (click)=\"openModal(changeStatusModal, element.status)\">\n                                    <i class=\"fas fa-toggle-on\"></i>\n                                </button>\n\n                                <!--Change status button-->\n                                <button class=\"btn-round btn-no-outline\" matTooltip=\"Stergere CV\"\n                                        (click)=\"openModal(deleteModal, element.status)\">\n                                    <i class=\"fas fa-trash\"></i>\n\n                                </button>\n                            </div>\n\n                            <ng-template #changeStatusModal let-c=\"close\" let-d=\"dismiss\">\n                                <div class=\"modal-card card\">\n                                    <div class=\"card-header border-0\">\n                                        <h3 class=\"m-0\">\n                                            Schimbă vizibilitatea CV-ului\n                                        </h3>\n                                    </div>\n\n                                    <div class=\"card-body\">\n                                        <div class=\"card-event card\">\n                                            <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">\n                                                <h3>#{{ (i + 1) + pageSize * (page) }} {{element.name}}</h3>\n                                                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                                    <mat-label>Schimbă vizibilitate</mat-label>\n                                                    <mat-select [(ngModel)]=\"statusInput\">\n                                                        <mat-option [value]='false'>Ascuns</mat-option>\n                                                        <mat-option [value]='true'>Public</mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"card-footer border-0\">\n                                        <div class=\"row\">\n                                            <div class=\"col-12 col-sm-6\">\n                                                <button class=\"btn-auto btn-color-outline w-100\"\n                                                        (click)=\"closeModal()\">\n                                                    <i class=\"fas fa-times\"></i>\n                                                    {{ 'BTN.CANCEL' | translate}}\n                                                </button>\n                                            </div>\n\n                                            <div class=\"col-12 col-sm-6\">\n                                                <button class=\"btn-auto btn-color-fill w-100\"\n                                                        (click)=\"changeStatus(element.id, statusInput )\">\n                                                    <i class=\"fas fa-check\"></i>\n                                                    {{ 'BTN.CONFIRM' | translate}}\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #deleteModal let-c=\"close\" let-d=\"dismiss\">\n                                <div class=\"modal-card card\">\n                                    <div class=\"card-header border-0\">\n                                        <h3 class=\"m-0\">\n                                            Stergere CV\n                                        </h3>\n                                    </div>\n\n                                    <div class=\"card-body\">\n                                        <div class=\"card-event card\">\n                                            <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">\n                                                <h3>#{{ (i + 1) + pageSize * (page) }} {{element.name}}</h3>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"card-footer border-0\">\n                                        <div class=\"row\">\n                                            <div class=\"col-12 col-sm-6\">\n                                                <button class=\"btn-auto btn-color-outline w-100\"\n                                                        (click)=\"closeModal()\">\n                                                    <i class=\"fas fa-times\"></i>\n                                                    {{ 'BTN.CANCEL' | translate}}\n                                                </button>\n                                            </div>\n\n                                            <div class=\"col-12 col-sm-6\">\n                                                <button class=\"btn-auto btn-color-fill w-100\"\n                                                        (click)=\"deleteElement(element.id)\">\n                                                    <i class=\"fas fa-check\"></i>\n                                                    {{ 'BTN.CONFIRM' | translate}}\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                        </td>\n\n                    </ng-container>\n\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"></tr>\n                </table>\n\n\n                <!--Pagination-->\n                <mat-paginator\n                        [pageSizeOptions]=\"pageItems\"\n                        [length]=\"totalElements\"\n                        [pageSize]=\"pageSize\"\n                        (page)=\"pageChanged($event)\"\n                >\n                </mat-paginator>\n\n            </div>\n            <!-- Table container -->\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 93939:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/jobs-dashboard/jobs-dashboard-list/jobs-dashboard-list.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid mb-5\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Listă Job-uri\"\n        [buttonBackRoute]=\"'../../dashboard'\">\n        </app-dashboard-header>\n    </div>\n    \n    <div class=\"container\">\n        <!----Table---------------------------------------------------------------------------->\n        <div *ngIf=\"dataLoaded\">\n            <div class=\"row filterRow\">\n                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                    <input matInput type=\"text\" [formControl]=\"searchFilter\" (keydown.enter)=\"filterData()\" placeholder=\"Căutare\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"row tableContent\">\n\n                <table class=\"editorals-table-class\" mat-table matSort appMatTableResponsive [dataSource]=\"dataList\" (matSortChange) = applyFilter($event)>\n                    <!-- ID Column -->\n                <ng-container matColumnDef=\"id\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> #</th>\n                    <td data-column-name=\"id\" mat-cell\n                        *matCellDef=\"let element; let i = index;\"> {{ (i + 1) + pageSize * page }} </td>\n                        \n                </ng-container>\n\n                    <!--Title-->\n                    <ng-container matColumnDef=\"title\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'FIELD.TITLE'| translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.TITLE'| translate}}\"> {{element.title}} </td>\n                    </ng-container>\n\n                    <!--PROVIDER-->\n                    <ng-container matColumnDef=\"provider\">\n                        <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.PROVIDER'|translate}}</th>\n                        <td mat-cell  *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.PROVIDER'|translate}}\">{{element.userName}}</td>\n                    </ng-container>\n\n\n                    <!--Data and hour-->\n                    <ng-container matColumnDef=\"date&hour\">\n                        <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.DATE-N-HOUR'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.DATE-N-HOUR'|translate}}\">{{element.date | date:'dd/MMM/yyyy hh:mm'}}</td>\n                    </ng-container>\n\n\n                    <!--Status-->\n                    <ng-container matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n                        <td attr.data-column-name='Time Status' mat-cell *matCellDef=\"let element\">\n                        <span class=\"custom-label\"\n                              [ngClass]=\"{\n                        'label-active' : element.status === 'active',\n                        'label-pending' : element.status === 'pending_review',\n                        'label-archived' : element.status === 'archived'\n                        }\">\n                            <span [ngSwitch]=\"element.status\">\n                               <span *ngSwitchCase=\"'active'\">Activ</span>\n                               <span *ngSwitchCase=\"'pending_review'\">Pending</span>\n                               <span *ngSwitchCase=\"'archived'\">Archived</span>\n                           </span>\n                        </span></td>\n                        \n                    </ng-container>\n\n                    <!--Views column-->\n                    <ng-container matColumnDef=\"views\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Vizualizari </th>\n                        <td attr.data-column-name=\"Vizualizari\" mat-cell *matCellDef=\"let row\"><span\n                                class=\"d-flex justify-content-end me-3\">{{row.views}}</span></td>\n                    </ng-container>\n\n\n                    <!--actions-->\n                    <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> {{'FIELD.ACTIONS'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index\" data-column-name=\"Acțiuni\">\n                            <div class=\" d-flex actions-container py-2\" >\n\n                                <!--Edit button-->\n                                <!-- <button class=\"btn-round btn-no-outline\"  matTooltip=\"Editează\">\n                                    <i class=\"fa fa-pen\"></i>\n                                </button> -->\n\n                                <!--view button-->\n                                <button class=\"btn-round btn-no-outline\" [routerLink]=\"'../../client-jobs/view/'+element.id\" matTooltip=\"Vizualizează job\">\n                                    <i class=\"fa fa-eye\"></i>\n                                </button>\n\n                                <!--Change status button-->\n                                <button class=\"btn-round btn-no-outline\" matTooltip=\"Schimba status\" \n                                (click)=\"openModal(changeStatusModal, element.status)\">\n                                <i class=\"fas fa-toggle-on\"></i>\n\n                                </button>\n                            </div>\n                        \n                        <ng-template #changeStatusModal let-c=\"close\" let-d=\"dismiss\">\n                            <div class=\"modal-card card\">\n                                <div class=\"card-header border-0\">\n                                    <h3 class=\"m-0\">\n                                        Schimbă statusul Job-ului\n                                    </h3>\n                                </div>\n    \n                                <div class=\"card-body\">\n                                    <p>{{ 'TEMPLATES.DELETE-WARNING' | translate}}</p>\n    \n                                    <div class=\"card-event card\">\n                                        <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">\n                                            <h3>#{{ (i + 1) + pageSize * (page) }} {{element.title}}</h3>\n                                            <!--                                        <p class=\"m-0\">{{userData?.firstName+' '+userData?.lastName}}</p>-->\n                                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                                <mat-label>Schimbă status</mat-label>\n                                                <mat-select [(ngModel)]=\"statusInput\">\n                                                    <mat-option value=\"active\">Active</mat-option>\n                                                    <mat-option value=\"pending_review\">Pending review</mat-option>\n                                                    <mat-option value=\"archived\">Archived</mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n    \n                                </div>\n    \n                                <div class=\"card-footer border-0\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-outline w-100\"\n                                                    (click)=\"closeModal()\">\n                                                <i class=\"fas fa-times\"></i>\n                                                {{ 'BTN.CANCEL' | translate}}\n                                            </button>\n                                        </div>\n    \n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-fill w-100\"\n                                                    (click)=\"changeStatus(element.id, statusInput )\">\n                                                <i class=\"fas fa-check\"></i>\n                                                {{ 'BTN.CONFIRM' | translate}}\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </td>\n                            \n                    </ng-container>\n\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"></tr>\n                </table>\n\n\n                <!--Pagination-->\n                <mat-paginator\n                        [pageSizeOptions]=\"pageItems\"\n                        [length]=\"totalElements\"\n                        [pageSize]=\"pageSize\"\n                        (page)=\"pageChanged($event)\"\n                >\n                </mat-paginator>\n\n            </div>\n            <!-- Table container -->\n        </div>\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_features_jobs-dashboard_jobs-dashboard_module_ts.js.map