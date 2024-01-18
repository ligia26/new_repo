(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_features_jobs__components_view-job_view-job_component_ts"],{

/***/ 10981:
/*!****************************************************************************!*\
  !*** ./src/app/features/jobs/_components/apply-job/apply-job.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyJobComponent": () => (/* binding */ ApplyJobComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _apply_job_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply-job.component.html?ngResource */ 54484);
/* harmony import */ var _apply_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-job.component.scss?ngResource */ 91234);
/* harmony import */ var _apply_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apply_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _services_cv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cv.service */ 97309);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/toast.service */ 62941);









let ApplyJobComponent = class ApplyJobComponent {
  constructor(fb, dialogRef, userData, route, jobId, cvService, router, toastService) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.userData = userData;
    this.route = route;
    this.jobId = jobId;
    this.cvService = cvService;
    this.router = router;
    this.toastService = toastService;
  }
  ngOnInit() {
    console.log(this.userData.userData);
    this.formInit();
    this.userForm.patchValue(this.userData.userData);
    this.getServiceData();
  }
  formInit() {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      country: ''
    });
  }
  getServiceData() {
    this.cvService.getCurrentUserCV().subscribe({
      next: currentCv => {
        this.currentCv = currentCv;
        console.log(currentCv);
      }
    });
  }
  navigateToCv() {
    console.log(this.route);
    this.router.navigate(['../../my-cv'], {
      relativeTo: this.route.route
    });
    this.dialogRef.close();
  }
  applyToJob() {
    this.cvService.applyToJob(this.jobId.jobId).subscribe({
      next: response => {
        if (response.success) {
          this.toastService.showToast('Succes', 'Ai aplicat la acest job', 'success');
          this.dialogRef.close();
          this.router.navigate(['../../my-cv'], {
            relativeTo: this.route.route
          });
        }
      },
      error: err => {
        if (err.reason === 'alreadyExists') {
          this.toastService.showToast('Error', 'Ai aplicat deja la acest job!', 'error');
        } else if (err.reason === 'cannotApplyToYourJob') {
          this.toastService.showToast('Error', 'Nu poti aplica la propriul job!', 'error');
        } else if (err.reason === 'notAvailable') {
          this.toastService.showToast('Error', 'Acest job nu este valabil!', 'error');
        } else {
          this.toastService.showToast('Error', 'Nu poti aplica la acest job!', 'error');
        }
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA]
    }]
  }, {
    type: _services_cv_service__WEBPACK_IMPORTED_MODULE_2__.CVService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }];
};
ApplyJobComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-apply-job',
  template: _apply_job_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_apply_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ApplyJobComponent);


/***/ }),

/***/ 73758:
/*!**************************************************************************!*\
  !*** ./src/app/features/jobs/_components/view-job/view-job.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewJobComponent": () => (/* binding */ ViewJobComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_job_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-job.component.html?ngResource */ 52729);
/* harmony import */ var _view_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-job.component.scss?ngResource */ 94830);
/* harmony import */ var _view_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/job.service */ 88659);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apply-job/apply-job.component */ 10981);










let ViewJobComponent = class ViewJobComponent {
  constructor(router, route, jobService, userDataService, dialog) {
    this.router = router;
    this.route = route;
    this.jobService = jobService;
    this.userDataService = userDataService;
    this.dialog = dialog;
    this.isJobProvider = false;
    this.alreadyApplied = false;
    this.isStaff = false;
    this.isAdmin = false;
  }
  ngOnInit() {
    this.getJobData();
  }
  getJobData() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => {
      if (params.get('id')) {
        return this.jobService.getResourceById(params.get('id'));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)('');
      }
    })).subscribe(job => {
      console.log('GET JOB', job);
      this.job = job;
      this.checkJobProvider(job.userId);
      this.getJobCandidates();
    });
  }
  checkJobProvider(userId) {
    this.userDataService.getCurrentUser().subscribe({
      next: currentUser => {
        this.currentUser = currentUser;
        this.isStaff = this.currentUser.roles.includes('ROLE_STAFF');
        this.isAdmin = this.currentUser.roles.includes('ROLE_SUPER_ADMIN');
        if (currentUser.id === userId) {
          this.isJobProvider = true;
        } else {
          this.isJobProvider = false;
          this.getJobCandidates(currentUser.id);
        }
      }
    });
  }
  getJobCandidates(currentUserId) {
    this.jobService.getCandidates(this.job.id).subscribe({
      next: candidatesList => {
        console.log('candidades', candidatesList);
        this.candidatesList = candidatesList;
        this.checkIfUserApplied(candidatesList, currentUserId);
      }
    });
  }
  checkIfUserApplied(candidatesList, currentUserId) {
    candidatesList.forEach(candidate => {
      if (candidate.id === currentUserId) {
        this.alreadyApplied = true;
      }
    });
  }
  openApplyModal() {
    this.dialog.open(_apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_4__.ApplyJobComponent, {
      width: '1500px',
      height: '750px',
      data: {
        userData: this.currentUser,
        route: this.route,
        jobId: this.job.id
      }
    });
  }
  navigateToEditJob() {
    this.router.navigate(['../../edit/', this.job.id], {
      relativeTo: this.route
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _services_job_service__WEBPACK_IMPORTED_MODULE_2__.JobService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog
  }];
};
ViewJobComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-view-job',
  template: _view_job_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_view_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ViewJobComponent);


/***/ }),

/***/ 97309:
/*!*******************************************************!*\
  !*** ./src/app/features/jobs/_services/cv.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CVService": () => (/* binding */ CVService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let CVService = class CVService {
  refreshExperienceListData() {
    return this.refreshExperienceList$.asObservable();
  }
  experienceListData() {
    return this.experienceList$.asObservable();
  }
  addExperienceToList(experience) {
    this.experienceList$.next(this.experienceList$.getValue().concat(experience));
  }
  refreshEducationListData() {
    return this.refreshEducationList$.asObservable();
  }
  addEducationToList(education) {
    this.educationList$.next(this.educationList$.getValue().concat(education));
  }
  refreshCertificationListData() {
    return this.refreshCertificationList$.asObservable();
  }
  addCertificationToList(certification) {
    this.certificationList$.next(this.certificationList$.getValue().concat(certification));
  }
  constructor(http) {
    this.http = http;
    this.experienceList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.refreshExperienceList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.educationList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.refreshEducationList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.certificationList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.refreshCertificationList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  }
  getCurrentUserCV() {
    return this.http.get('/bestinform/getCurrentUserCV');
  }
  getCvByUserId(userId) {
    return this.http.get('/bestinform/getCVByUserId?userId=' + userId);
  }
  updateCurrentUserCV(userCv) {
    return this.http.put('/bestinform/updateCurrentUserCV', userCv);
  }
  createCv(userCv) {
    return this.http.post('/bestinform/createCV', userCv);
  }
  deleteCvAvatar() {
    return this.http.put('/bestinform/deleteCvAvatar', {});
  }
  uploadCVAvatar(file) {
    return this.http.post('/bestinform/uploadCvAvatar', file);
  }
  uploadCVFile(file) {
    return this.http.post('/bestinform/uploadUserCv', file);
  }
  applyToJob(resourceId) {
    return this.http.post('/bestinform/createJobApplication?resourceId=' + resourceId, {});
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
CVService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], CVService);


/***/ }),

/***/ 88659:
/*!********************************************************!*\
  !*** ./src/app/features/jobs/_services/job.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobService": () => (/* binding */ JobService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let JobService = class JobService {
  constructor(http) {
    this.http = http;
  }
  getResourceTypesByDomainId(domainId) {
    return this.http.get('/bestinform/getResourceTypesByDomainId?domainId=' + domainId);
  }
  getListOfDomains() {
    return this.http.get('/bestinform/getListOfDomains');
  }
  getListTemplateFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listResourceTemplateFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  getAttributesFromTemplate(templateId) {
    return this.http.get('/bestinform/getAttributesFromTemplate?resourceTemplateId=' + templateId);
  }
  //RESOURCE REQ
  addResource(data, userId) {
    if (userId) {
      return this.http.post('/bestinform/addResource?userId=' + userId, data);
    } else {
      return this.http.post('/bestinform/addResource', data);
    }
  }
  updateResource(id, data) {
    return this.http.put('/bestinform/updateResource?resourceId=' + id, data);
  }
  getResourceById(id) {
    return this.http.get('/bestinform/getResourceById?resourceId=' + id);
  }
  uploadResourceImage(resourceId, file) {
    return this.http.post('/bestinform/uploadResourceImage?resourceId=' + resourceId, file);
  }
  getCandidates(resourceId) {
    return this.http.get('/bestinform/getUserListJobApplication?resourceId=' + resourceId);
  }
  getListCvFilteredpage(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listCVFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  deleteJob(resourceId) {
    return this.http.delete('/bestinform/deleteResource?resourceId=' + resourceId);
  }
  deleteCvById(cvId) {
    return this.http.delete('/bestinform/deleteCvById?cvId=' + cvId);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
JobService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], JobService);


/***/ }),

/***/ 91234:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/apply-job/apply-job.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.container-apply {\n  overflow: hidden;\n}\n.container-apply .row {\n  height: 750px;\n}\n.container-apply .row .container-user {\n  padding: 50px 120px;\n  background-color: var(--primary-background);\n}\n.container-apply .row .container-user img {\n  height: 45px;\n  width: 194px;\n}\n.container-apply .row .cv-data {\n  background-color: var(--secondary-background);\n  height: 100%;\n}\n.container-apply .row .cv-data .container-cv {\n  padding: 50px 120px;\n}\n.container-apply .row .cv-data .container-cv .cv-completion {\n  margin-bottom: 50px;\n  padding: 24px;\n  background-color: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0 4px 8px rgba(35, 31, 32, 0.08);\n  border-radius: 24px;\n}\n.container-apply .row .cv-data .container-cv .cv-completion .directions {\n  color: #231F20;\n  font-weight: 400;\n}\n.container-apply .row .cv-data .container-cv .cv-completion .progress {\n  width: 96px;\n  height: 96px;\n  border-radius: 100%;\n  border: 8px solid #FFCC29;\n  background-color: var(--primary-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  font-weight: 700;\n}\n.container-apply .row .cv-data .container-cv .cv-completion p {\n  color: #24398A;\n  font-weight: 700;\n  font-size: 16px;\n}\n.container-apply .row .cv-data .container-cv .cv-completion i {\n  font-size: 16px;\n  font-weight: 900;\n  line-height: unset;\n}\n.container-apply .row .cv-data .container-cv .cv-completion i.fa-times {\n  color: #EA4335;\n}\n.container-apply .row .cv-data .container-cv .cv-completion i.fa-check {\n  color: #2CCEA7;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/jobs/_components/apply-job/apply-job.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACE,gBAAA;AAiBF;AAfC;EACE,aAAA;AAiBH;AAhBG;EACE,mBAAA;EACA,2CAAA;AAkBL;AAhBK;EACE,YAAA;EACA,YAAA;AAkBP;AAdG;EACE,6CAAA;EACA,YAAA;AAgBL;AAdK;EACE,mBAAA;AAgBP;AAbO;EACE,mBAAA;EACA,aAAA;EACA,2CAAA;EACA,yCAAA;EACA,4CAAA;EACA,mBAAA;AAeT;AAbS;EACE,cD9BH;EC+BG,gBAAA;AAeX;AAZS;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,2CAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AAcX;AAXS;EACE,cDpDK;ECqDL,gBAAA;EACA,eAAA;AAaX;AAVS;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;AAYX;AATS;EACE,cDxBK;ACmChB;AARS;EACE,cD7BC;ACuCZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n\n.container-apply {\n  overflow: hidden;\n\n .row{\n   height: 750px;\n   .container-user {\n     padding: 50px 120px;\n     background-color: var(--primary-background);\n\n     img {\n       height: 45px;\n       width: 194px;\n     }\n   }\n\n   .cv-data {\n     background-color: var(--secondary-background);\n     height: 100%;\n\n     .container-cv {\n       padding: 50px 120px;\n\n\n       .cv-completion {\n         margin-bottom: 50px;\n         padding: 24px;\n         background-color: var(--primary-background);\n         border: 1px solid rgba(36, 57, 138, 0.16);\n         box-shadow: 0 4px 8px rgba(35, 31, 32, 0.08);\n         border-radius: 24px;\n\n         .directions {\n           color: $title;\n           font-weight: 400;\n         }\n\n         .progress {\n           width: 96px;\n           height: 96px;\n           border-radius: 100%;\n           border: 8px solid $secondary-color;\n           background-color: var(--primary-background);\n           display: flex;\n           justify-content: center;\n           align-items: center;\n           font-size: 20px;\n           font-weight: 700;\n         }\n\n         p {\n           color: $primary-color;\n           font-weight: 700;\n           font-size: 16px;\n         }\n\n         i {\n           font-size: 16px;\n           font-weight: 900;\n           line-height: unset;\n         }\n\n         i.fa-times {\n           color: $dislike-color;\n         }\n\n         i.fa-check {\n           color: $like-color;\n         }\n\n\n       }\n     }\n   }\n }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 94830:
/*!***************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/view-job/view-job.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.48), rgba(35, 31, 32, 0.48));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.resource-title-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.resource-title-bar a {\n  text-decoration: none;\n}\n.resource-title-bar a:hover {\n  color: var(--primary-background);\n}\n.resource-title-bar .resource-title {\n  margin-bottom: 0;\n  color: #24398A;\n  font-size: clamp(1.25rem, 2vw + 1rem, 2.5rem);\n}\n.resource-title-bar .label-applied {\n  font-size: 20px;\n  border: 1px solid #69C98C;\n  background-color: rgba(105, 201, 140, 0.3);\n  border-radius: 8px;\n  padding: 0 10px;\n  color: #69C98C;\n}\n\n.container .title-section {\n  margin-bottom: 36px;\n  position: relative;\n  font-size: 24px;\n  font-weight: 600;\n}\n.container .title-section:after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  max-width: 160px;\n  height: 2px;\n  background-color: #FFCC29;\n}\n.container .section-subtitle {\n  font-size: 20px;\n  font-weight: 700;\n}\n.container .img-icon {\n  width: 16px;\n  aspect-ratio: 1/1;\n  margin-right: 5px;\n}\n.container p .label-name {\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/jobs/_components/view-job/view-job.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAfE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAiBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF;;AAZA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAeF;AAbE;EACE,qBAAA;AAeJ;AAbI;EACE,gCAAA;AAeN;AAXE;EACE,gBAAA;EACA,cDjDY;ECkDZ,6CAAA;AAaJ;AAVE;EACE,eAAA;EACA,yBAAA;EACA,0CAAA;EACA,kBAAA;EACA,eAAA;EACA,cDlCU;AC8Cd;;AAPE;EACE,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;AAUJ;AARI;EACE,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,gBAAA;EAEA,WAAA;EACA,yBD9EY;ACuFlB;AALE;EACE,eAAA;EACA,gBAAA;AAOJ;AAJE;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;AAMJ;AAFI;EACE,gBAAA;AAIN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.resource-title-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    text-decoration: none;\n\n    &:hover {\n      color: var(--primary-background);\n    }\n  }\n\n  .resource-title {\n    margin-bottom: 0;\n    color: $primary-color;\n    font-size: clamp(1.25rem, 2vw + 1rem, 2.5rem);\n  }\n\n  .label-applied{\n    font-size: 20px;\n    border: 1px solid $active-color;\n    background-color: rgba($active-color, 0.3);\n    border-radius: 8px;\n    padding: 0 10px;\n    color:$active-color;\n  }\n}\n\n.container {\n  .title-section {\n    margin-bottom: 36px;\n    position: relative;\n    font-size: 24px;\n    font-weight: 600;\n\n    &:after {\n      content: '';\n      display: inline-block;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      max-width: 160px;\n      //margin: 0 auto;\n      height: 2px;\n      background-color: $secondary-color;\n    }\n  }\n\n  .section-subtitle {\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  .img-icon {\n    width: 16px;\n    aspect-ratio: 1/1;\n    margin-right: 5px;\n  }\n\n  p {\n    .label-name {\n      font-weight: 500;\n    }\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 54484:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/apply-job/apply-job.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-apply\">\n    <div class=\"row\">\n        <div class=\"col-12 col-lg-6 user-data\">\n            <div class=\"container-user\">\n                <div class=\"logo d-flex flex-column\">\n                    <img src=\"assets/images/logos/logo-bestinform-blue.png\" class=\"mb-5\">\n                    <h4>{{'JOBS.APPLY-TO-JOB' | translate}}</h4>\n                    <p class=\"mb-4\">{{'JOBS.APPLY-INFO' | translate}}</p>\n\n                    <p class=\"mb-0\"><b>{{'JOBS.PROFILE-DETAILS' | translate}}</b></p>\n                    <form [formGroup]=\"userForm\">\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>{{'USER.FIRSTNAME' | translate}}</mat-label>\n                            <input matInput formControlName=\"firstName\">\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>{{'USER.LASTNAME' | translate}}</mat-label>\n                            <input matInput formControlName=\"lastName\">\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>Email</mat-label>\n                            <input matInput formControlName=\"email\">\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>{{'USER.PHONE' | translate}}</mat-label>\n                            <input matInput formControlName=\"telephone\">\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>{{'USER.COUNTRY' | translate}}</mat-label>\n                            <input matInput formControlName=\"country\">\n                        </mat-form-field>\n\n                        <div class=\"d-flex justify-content-center\">\n                            <button class=\"btn-long btn-color-outline w-75\"><i class=\"fas fa-arrow-left me-2\"></i>{{'BTN.CANCEL' | translate}}\n                            </button>\n                        </div>\n\n                    </form>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"col-12 col-lg-6 cv-data\">\n            <div class=\"container-cv d-flex flex-column\">\n                <div class=\"cv-completion\">\n                    <div class=\"d-flex justify-content-sm-between align-items-center flex-wrap justify-content-center\">\n                        <h1>{{'JOBS.CV-STATUS' | translate}}</h1>\n                        <div class=\"progress mb-2\">70%</div>\n                    </div>\n\n                    <div class=\"sections\">\n                        <p class=\"directions\">{{'JOBS.CV-DIR' | translate}}</p>\n\n                        <div class=\"cv-category-completion d-flex justify-content-between\">\n                            <p>{{'TITLES.PROFILE-IMG' | translate}}</p>\n                            <i class=\"fas fa-check\" *ngIf=\"currentCv?.avatar?.filePath\"></i>\n                            <i class=\"fas fa-times\" *ngIf=\"!currentCv?.avatar?.filePath\"></i>\n                        </div>\n\n                        <div class=\"cv-category-completion d-flex justify-content-between\">\n                            <p>{{'JOBS.SUMMARY' | translate}}</p>\n                            <i class=\"fas fa-check\" *ngIf=\"currentCv?.description\"></i>\n                            <i class=\"fas fa-times\"\n                               *ngIf=\"!currentCv?.description\"></i>\n                        </div>\n                        <div class=\"cv-category-completion d-flex justify-content-between\">\n                            <p>Contact</p>\n                            <i class=\"fas fa-check\" *ngIf=\"currentCv?.email\"></i>\n                            <i class=\"fas fa-times\" *ngIf=\"!currentCv?.email\"></i>\n                        </div>\n                        <div class=\"cv-category-completion d-flex justify-content-between\">\n                            <p>{{'JOBS.EXPERIENCE' | translate}}</p>\n                            <i class=\"fas fa-check\" *ngIf=\"currentCv?.experience?.length > 0\"></i>\n                            <i class=\"fas fa-times\" *ngIf=\"currentCv?.experience?.length === 0\"></i>\n                        </div>\n                        <div class=\"cv-category-completion d-flex justify-content-between\">\n                            <p>{{'JOBS.EDUCATION' | translate}}</p>\n                            <i class=\"fas fa-check\" *ngIf=\"currentCv?.education?.length > 0\"></i>\n                            <i class=\"fas fa-times\" *ngIf=\"currentCv?.education?.length === 0\"></i>\n                        </div>\n                        <div class=\"cv-category-completion d-flex justify-content-between\">\n                            <p>{{'JOBS.CERTIFICATION' | translate}}</p>\n                            <i class=\"fas fa-check\" *ngIf=\"currentCv?.certificationsAndDegrees?.length > 0\"></i>\n                            <i class=\"fas fa-times\" *ngIf=\"currentCv?.certificationsAndDegrees?.length === 0\"></i>\n                        </div>\n\n                        <button class=\"btn-long btn-color-fill w-100\" (click)=\"navigateToCv()\">{{'JOBS.COMPLETE-CV' | translate}}<i class=\"fas fa-arrow-right ms-2\"></i></button>\n                    </div>\n                </div>\n                <div class=\"d-flex justify-content-center\">\n                    <button class=\"btn-long btn-color-fill w-75\" (click)=\"applyToJob()\"><i class=\"fas fa-check me-2\"></i>{{'JOBS.APPLY-NOW' | translate}}</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 52729:
/*!***************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/view-job/view-job.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n\n    <div class=\"background-container\">\n        <img [src]=\"job?.featuredImage?.filePath\" alt=\"category-background-image\">\n    </div>\n\n    <div class=\"content-container\">\n        <div class=\"container\">\n            <div class=\"resource-title-bar\">\n                <div class=\"job-title\">\n                    <h3 class=\"resource-title\">\n                        {{ job?.title | titlecase }}\n                    </h3>\n\n                    <p class=\"resource-subtitle mb-0\">{{job?.date | date : \"dd.MM.yyyy\"}}</p>\n                </div>\n\n\n                <button *ngIf=\"!isJobProvider && !alreadyApplied && !isStaff && !isAdmin\"\n                        (click)=\"openApplyModal()\"\n                        class=\"btn-auto btn-color-fill\">\n                    Aplica acum\n                    <i class=\"fas fa-angle-right\"></i>\n                </button>\n\n                <button *ngIf=\"isJobProvider\"\n                        (click)=\"navigateToEditJob()\"\n                        class=\"btn-auto btn-color-fill\">\n                    Editeaza jobul\n                    <i class=\"fas fa-angle-right\"></i>\n                </button>\n\n                <p class=\"label-applied\" *ngIf=\"alreadyApplied\">Ai aplicat la acest job!</p>\n            </div>\n        </div>\n\n        <div class=\"container\">\n            <div class=\"job-section mb-3\">\n                <p class=\"title-section\">Despre</p>\n                <p class=\"section-subtitle\">Descrierea Job-ului</p>\n                <p class=\"text-data\" [innerHTML]=\"job?.description\"></p>\n                <p class=\"section-subtitle\">Locatie</p>\n                <p class=\"text-data\"><i\n                        class=\"fas fa-map-marker-alt me-2\"></i>{{job?.address + ', ' + job?.city + ', ' + job?.country}}\n                </p>\n\n            </div>\n\n            <div class=\"job-section\">\n                <p class=\"title-section\">Informatii generale</p>\n                <div *ngFor=\"let tab of job?.attributes\" class=\"mb-3\">\n                    <div class=\"row\" *ngIf=\"tab.tabName === 'general_info'\">\n                        <p class=\"section-subtitle\" *ngIf=\"tab.tabAttributes.length > 0\">Informatii generale</p>\n                        <div *ngFor=\"let attribute  of tab.tabAttributes\">\n                            <div class=\"d-flex justify-content-start align-items-center\">\n                                <img [src]=\"attribute.attributeIconPath\" class=\"img-icon\">\n                                <p class=\"mb-0\"><span class=\"label-name\">{{attribute.attributeName}}\n                                    : </span>{{attribute.attributeValue}}</p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" *ngIf=\"tab.tabName === 'about'\">\n                        <p class=\"section-subtitle\" *ngIf=\"tab.tabAttributes.length > 0\">Criterii</p>\n                        <div *ngFor=\"let attribute  of tab.tabAttributes\">\n                            <div class=\"d-flex justify-content-start align-items-center\">\n                                <img [src]=\"attribute.attributeIconPath\" class=\"img-icon\">\n                                <p class=\"mb-0\"><span class=\"label-name\">{{attribute.attributeName}}\n                                    : </span>{{attribute.attributeValue}}</p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" *ngIf=\"tab.tabName === 'facilities'\">\n                        <p class=\"section-subtitle\" *ngIf=\"tab.tabAttributes.length > 0\">Beneficii</p>\n                        <div class=\"mb-0\" *ngFor=\"let attribute  of tab.tabAttributes\">\n                            <div class=\"d-flex justify-content-start align-items-center\">\n                                <img [src]=\"attribute.attributeIconPath\" class=\"img-icon\">\n                                <p class=\"mb-0\"><span class=\"label-name\">{{attribute.attributeName}}\n                                    : </span>{{attribute.attributeValue}}</p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" *ngIf=\"tab.tabName === 'contact'\">\n                        <p class=\"section-subtitle\" *ngIf=\"tab.tabAttributes.length > 0\">Contact</p>\n                        <div *ngFor=\"let attribute  of tab.tabAttributes\">\n                            <div class=\"d-flex justify-content-start align-items-center\">\n                                <img [src]=\"attribute.attributeIconPath\" class=\"img-icon\">\n                                <p class=\"mb-0\"><span class=\"label-name\">{{attribute.attributeName}}\n                                    : </span>{{attribute.attributeValue}}</p>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n\n            <div class=\"job-section\" *ngIf=\"isJobProvider && candidatesList?.length > 0\">\n                <p class=\"title-section\">Candidati</p>\n                <div *ngFor=\"let candidate of candidatesList\">\n                    <app-display-user class=\"w-100\" [userId]=\"candidate.id\" [showMenu]=\"true\" [menuType]=\"'job'\"></app-display-user>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_jobs__components_view-job_view-job_component_ts.js.map