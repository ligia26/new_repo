(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_standalone-components_change-pass_change-pass_component_ts-src_app_standalone-f14a88"],{

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

/***/ 49247:
/*!****************************************************************************!*\
  !*** ./src/app/standalone-components/change-pass/change-pass.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePassComponent": () => (/* binding */ ChangePassComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_pass_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-pass.component.html?ngResource */ 79305);
/* harmony import */ var _change_pass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-pass.component.scss?ngResource */ 57155);
/* harmony import */ var _change_pass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_change_pass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);











let ChangePassComponent = class ChangePassComponent {
  constructor(formBuilder, userData, toastService, translate, router) {
    this.formBuilder = formBuilder;
    this.userData = userData;
    this.toastService = toastService;
    this.translate = translate;
    this.router = router;
    this.hide = true;
    this.hideCurrent = true;
    this.hideOld = true;
    this.twoFA = false;
  }
  ngOnInit() {
    this.formInit();
    this.getCurrentUserSettings();
  }
  getCurrentUserSettings() {
    this.userData.getCurrentSetting().subscribe({
      next: userSettings => {
        this.currentSettings = userSettings;
        this.twoFA = userSettings.twoFactorAuthentication;
        console.log(userSettings);
      }
    });
  }
  updateTwoFA() {
    console.log('2fa', this.twoFA);
    this.userData.updateCurrentSetting({
      ...this.currentSettings,
      twoFactorAuthentication: this.twoFA
    }).subscribe({
      next: resp => {
        this.toastService.showToast('Success', this.twoFA ? 'Autentificarea in doi pasi a fost activata!' : 'Autentificarea in doi pasi a fost dezactivata!', 'success');
      }
    });
  }
  formInit() {
    this.changePassForm = this.formBuilder.group({
      oldPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
      newPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
      confPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])]
    }, {
      validator: this.checkPasswords
    });
  }
  onSaveClick() {
    console.log('merge');
    const oldPass = this.changePassForm.value.oldPassword;
    const newPass = this.changePassForm.value.newPassword;
    console.log(oldPass, newPass);
    this.changePassForm.markAllAsTouched();
    if (this.changePassForm.valid) {
      this.userData.changePassword(oldPass, newPass).subscribe(res => {
        console.log('PAROLA A FOST SCHIMBATA');
        if (res.success === true) {
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.CHANGE-PASS.SUCCESS"), "success");
          // this.router.navigate(['/private/staff/account']);
          // section o sa fie client sau private, iar role o sa fie rolul userului dar doar pe sectiunea private
          const [section, role] = this.router.url.split('/').slice(1, 3);
          if (section === 'client') {
            void this.router.navigate(['/client/dashboard']);
          } else if (section === 'private' && role) {
            void this.router.navigate(['private', role, 'dashboard']);
          }
        }
      }, error => {
        console.log('PAROLA NUUU A FOST SCHIMBATA');
        if (error.error.reason === "invalidOldPassword") {
          console.log('1');
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.CHANGE-PASS.INVALID-OLD-PASS"), "error");
        } else if (error.error.reason === "notLoggedIn") {
          console.log('2');
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.CHANGE-PASS.NOT-LOGGEDIN"), "error");
        } else if (error.error.reason === "invalidPassword") {
          console.log('3');
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.CHANGE-PASS.INVALID-PASS"), "error");
        } else if (error.error.reason === "cannotUseAnOldPassword") {
          console.log('4');
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.CHANGE-PASS.PASSWORD-USED"), "error");
        } else if (error.error.reason === "sendResetUserPassword") {
          console.log('4');
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.CHANGE-PASS.PASSWORD-USED"), "error");
        } else if (error.error.reason === "accountNotActive") {
          console.log('4');
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.CHANGE-PASS.NOT-ACTIVE"), "error");
        }
      });
    }
  }
  checkPasswords(control) {
    const password = control.get('newPassword');
    const oldPassword = control.get('oldPassword');
    const confPassword = control.get('confPassword');
    const nameRegexp = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const numbers = /[1234567890]/;
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const whiteSpace = /[" "]/;
    //Confirmation ok
    if (password.value?.length > 0 && confPassword.value?.length > 0 && password.value !== confPassword.value) {
      confPassword.setErrors({
        passInvalid: true
      });
      //Password empty, confirmation filled
    } else if (password.value?.length > 0 && confPassword.value?.length === 0) {
      confPassword.setErrors({
        emptySecond: true
      });
      //Password filled, confirmation empty
    } else if (password.value?.length === 0 && confPassword.value?.length > 0) {
      password.setErrors({
        emptyFirst: true
      });
    }
    if (oldPassword.value === password.value) {
      password.setErrors({
        samePass: true
      });
    }
    //Password required
    if (password.value === null) {
      password.setErrors({
        requiredPass: true
      });
    }
    //Confirmation required
    if (confPassword.value === null) {
      confPassword.setErrors({
        requiredConf: true
      });
    }
    //Min length password
    if (password.value?.length < 8) {
      password.setErrors({
        passMin: true
      });
    }
    //Max length password
    if (password.value?.length > 16) {
      password.setErrors({
        passMax: true
      });
    }
    //At least a special character
    if (password.value && !nameRegexp.test(password.value)) {
      password.setErrors({
        specialCharacter: true
      });
    }
    //At least a digit
    if (password.value && !numbers.test(password.value)) {
      password.setErrors({
        number: true
      });
    }
    //At least an upper case
    if (password.value && !upper.test(password.value)) {
      password.setErrors({
        upper: true
      });
    }
    //At least a lower case
    if (password.value && !lower.test(password.value)) {
      password.setErrors({
        lower: true
      });
    }
    //No whitespaces
    if (password.value && whiteSpace.test(password.value)) {
      password.setErrors({
        whiteSpace: true
      });
    }
    return;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }];
};
ChangePassComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-change-pass',
  standalone: true,
  imports: [_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_4__.DashboardHeaderComponent, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule],
  template: _change_pass_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_change_pass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ChangePassComponent);


/***/ }),

/***/ 22025:
/*!******************************************************************************!*\
  !*** ./src/app/standalone-components/edit-account/edit-account.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAccountComponent": () => (/* binding */ EditAccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-account.component.html?ngResource */ 76613);
/* harmony import */ var _edit_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-account.component.scss?ngResource */ 32643);
/* harmony import */ var _edit_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_edit_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);
/* harmony import */ var _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_services/resource-filter.service */ 41682);














let EditAccountComponent = class EditAccountComponent {
  constructor(userData, formBuilder, toastService, translate, router, datepipe, resourceFilterService) {
    this.userData = userData;
    this.formBuilder = formBuilder;
    this.toastService = toastService;
    this.translate = translate;
    this.router = router;
    this.datepipe = datepipe;
    this.resourceFilterService = resourceFilterService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.imgPath = "assets/images/others/user.jpg";
    this.today = new Date();
    this.recommendedCities = null;
    this.cityToSearch = null;
    this.hideCitySuggestion = false;
  }
  ngOnInit() {
    this.formInit();
    this.userInit();
  }
  userInit() {
    this.userData.getCurrentUser().subscribe(res => {
      // console.log('USEER', res);
      this.user = res;
      if (res.roles.includes('ROLE_CLIENT')) {
        this.isClient = true;
      }
      this.imgPath = res.avatar?.filePath;
      this.oldImage = res.avatar?.filePath;
      //console.log(this.user);
      this.clientAccountForm.patchValue(this.user);
      this.hideCitySuggestion = true;
      console.log(this.clientAccountForm.value);
    });
  }
  formInit() {
    this.clientAccountForm = this.formBuilder.group({
      firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      email: null,
      birthdate: null,
      gender: null,
      telephone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('[- +()0-9]+')],
      description: null,
      city: null,
      currentGeographicalCoordinates: null,
      country: null
      // location: [this.detectedCity.name],
      // geographicalCoordinates: [this.detectedCity.geographicalCoordinates],
      // country: [this.detectedCity.country]
    });

    this.clientAccountForm.get('email').disable();
  }
  onSaveClick() {
    this.clientAccountForm.markAllAsTouched();
    this.clientAccountForm.get("birthdate").setValue(this.datepipe.transform(this.clientAccountForm.value.birthdate, 'yyyy-MM-dd'));
    console.log('FORM VALUE', this.clientAccountForm.value);
    if (this.clientAccountForm.valid) {
      this.userData.updateUserProfile(this.clientAccountForm.value).subscribe(res => {
        console.log('Res edit account', res);
        if (res.success) {
          this.userInit();
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.UPDATE-CURRENT-USER.SUCCESS"), "success");
        } else {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.UPDATE-CURRENT-USER.ERROR"), "error");
        }
      }, () => {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.UPDATE-CURRENT-USER.ERROR"), "error");
      });
    } else {
      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("ERROR.REQUIRED-ALL"), "error");
    }
  }
  uploadAvatar(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    //console.log('event',file);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgPath = reader.result;
      };
      // console.log(formData);
      this.userData.uploadAvatar(formData).subscribe(res => {
        if (res.success === true) {
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.UPLOAD-AVATAR.SUCCESS"), "success");
        } else {
          console.log('eroare upload 1');
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.UPLOAD-AVATAR.ERROR"), "error");
        }
      }, error => {
        console.log('eroare upload');
        if (error.error.reason === 'fileSizeTooBig') {
          this.toastService.showToast('Error', 'Fișierul încărcat este prea mare. Trebuie să aibă maxim 2MB.', "error");
        } else {
          this.toastService.showToast('Error', 'Fișierul NU a fost încărcat!', "error");
        }
        this.imgPath = this.oldImage;
      });
    }
  }
  onDeleteAvatar() {
    this.userData.deleteProfileImage().subscribe(res => {
      // console.log(res);
      if (res.success) {
        this.imgPath = 'assets/images/others/user.jpg';
        this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.DELETE-AVATAR.SUCCESS"), "success");
      } else {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.DELETE-AVATAR.ERROR"), "error");
      }
    });
  }
  //select city
  searchForCities() {
    this.hideCitySuggestion = false;
    if (!this.cityToSearch || this.cityToSearch?.length < 3) {
      this.recommendedCities = null;
      return;
    }
    this.resourceFilterService.getAllCitiesRecommended(this.cityToSearch).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      if (!res) return;
      this.recommendedCities = [...res];
    });
  }
  updateFormValue(formControlName, value) {
    this.clientAccountForm.get(formControlName).patchValue(value);
    this.hideCitySuggestion = true;
  }
  clearFormControl(formControl) {
    this.clientAccountForm.get(formControl).patchValue(null);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe
  }, {
    type: src_app_shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_6__.ResourceFilterService
  }];
  static #_2 = this.propDecorators = {
    detectedCity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }]
  };
};
EditAccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-edit-account',
  standalone: true,
  template: _edit_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_4__.DashboardHeaderComponent, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule],
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [(_edit_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditAccountComponent);


/***/ }),

/***/ 57155:
/*!*****************************************************************************************!*\
  !*** ./src/app/standalone-components/change-pass/change-pass.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.card {\n  background-color: #edeff5;\n  border: none;\n}\n.card .card-header {\n  color: #24398A;\n  font-size: 32px;\n  font-weight: 700;\n  border: none;\n  background-color: #edeff5;\n}\n.card .card-body {\n  background-color: var(--primary-background);\n  border-color: var(--primary-background);\n  border-bottom: none;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  padding: 48px 100px;\n}\n.card .card-body .subtitle {\n  font-weight: 600;\n  font-size: 24px;\n}\n.card .card-body .form-column mat-form-field {\n  width: 100%;\n}\n.card .card-body img {\n  width: 100%;\n}\n@media (max-width: 992px) {\n  .card .card-body {\n    padding: 24px 50px;\n  }\n}\n.card .card-footer {\n  padding: 24px;\n  background-color: var(--primary-background);\n  border-top: none;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/change-pass/change-pass.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,yBAAA;EACA,YAAA;AAkBF;AAhBE;EACE,cDNY;ECOZ,eAAA;EACA,gBAAA;EACA,YAAA;EACA,yBAAA;AAkBJ;AAfE;EACE,2CAAA;EACA,uCAAA;EACA,mBAAA;EACA,2BAAA;EACA,4BAAA;EACA,mBAAA;AAiBJ;AAfI;EACE,gBAAA;EACA,eAAA;AAiBN;AAZM;EACE,WAAA;AAcR;AAVI;EACE,WAAA;AAYN;AATI;EAxBF;IAyBI,kBAAA;EAYJ;AACF;AATE;EACE,aAAA;EACA,2CAAA;EACA,gBAAA;EACA,8BAAA;EACA,+BAAA;AAWJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../theme/styles/components/colors\";\n\n.card {\n  background-color: #edeff5;\n  border: none;\n\n  .card-header {\n    color: $primary-color;\n    font-size: 32px;\n    font-weight: 700;\n    border: none;\n    background-color: #edeff5;\n  }\n\n  .card-body {\n    background-color: var(--primary-background);\n    border-color: var(--primary-background);\n    border-bottom: none;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    padding: 48px 100px;\n\n    .subtitle {\n      font-weight: 600;\n      font-size: 24px;\n    }\n\n    .form-column {\n\n      mat-form-field {\n        width: 100%;\n      }\n    }\n\n    img {\n      width: 100%;\n    }\n\n    @media(max-width: 992px) {\n      padding: 24px 50px;\n    }\n  }\n\n  .card-footer {\n    padding: 24px;\n    background-color: var(--primary-background);\n    border-top: none;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 32643:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/edit-account/edit-account.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.my-profile-card.card {\n  margin-bottom: 1rem;\n}\n.my-profile-card.card .card-body {\n  padding: 48px;\n}\n.my-profile-card.card .card-body .row {\n  row-gap: 1.5rem;\n}\n.my-profile-card.card .card-body .padding-correction {\n  padding: 24px 50px !important;\n}\n.my-profile-card.card .card-body .title {\n  font-weight: 700;\n  font-size: 32px;\n  color: #24398A;\n  margin-bottom: 30px;\n}\n.my-profile-card.card .card-body .avatar-data {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 24px;\n  padding: 24px;\n  margin-bottom: 54px;\n  justify-content: space-between;\n}\n@media (max-width: 1400px) {\n  .my-profile-card.card .card-body .avatar-data {\n    justify-content: center;\n  }\n}\n.my-profile-card.card .card-body .avatar-data .container-btns {\n  flex-direction: row;\n  justify-content: end;\n  row-gap: 1rem;\n}\n.my-profile-card.card .card-body .avatar-data .container-btns .btn-color-fill {\n  margin-right: 2px;\n}\n@media (max-width: 992px) {\n  .my-profile-card.card .card-body .avatar-data .container-btns .btn-color-fill {\n    margin-bottom: 5px;\n  }\n}\n@media (max-width: 1400px) {\n  .my-profile-card.card .card-body .avatar-data .container-btns {\n    margin-top: 5px;\n  }\n}\n@media (max-width: 992px) {\n  .my-profile-card.card .card-body .avatar-data .container-btns {\n    flex-direction: column;\n  }\n}\n.my-profile-card.card .card-body .avatar-data img {\n  width: 120px;\n  height: 120px;\n  padding: 0;\n  border-radius: 100px;\n  object-fit: cover;\n}\n.my-profile-card.card .card-body .avatar-data .data .directions {\n  color: #24398A;\n  font-weight: 500;\n  font-size: 24px;\n}\n.my-profile-card.card .card-body .avatar-data .data .format {\n  color: #24398A;\n  font-weight: 400;\n  font-size: 16px;\n}\n.my-profile-card.card .card-footer p {\n  margin: 0;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n.fa-times-circle, mat-icon, .mat-icon-button {\n  color: rgba(36, 57, 138, 0.2) !important;\n}\n\n.card .card-body .short-info .user-info img {\n  width: 54px;\n  height: 54px;\n  padding: 0;\n  border-radius: 100px;\n}\n\n.card .card-body .short-info .user-info .name {\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.card .card-body .short-info .user-info .email {\n  font-size: 12px;\n}\n\n.destinations-container-hidden {\n  display: none;\n}\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n}\n.destination-element p {\n  color: #858495;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.destination-element .destination-icon {\n  border: 1px solid #858495;\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.destination-element .destination-icon i {\n  color: #858495;\n  font-size: 22px;\n}\n.destination-element:hover, .destination-element:focus {\n  background-color: rgba(36, 57, 138, 0.2);\n  transition: 0.3s ease-in-out;\n  outline: transparent;\n}\n.destination-element:hover .destination-icon, .destination-element:focus .destination-icon {\n  border: 1px solid #24398A;\n  background-color: var(--primary-background);\n}\n.destination-element:hover .destination-icon i, .destination-element:focus .destination-icon i {\n  color: #24398A;\n}\n.destination-element:hover p, .destination-element:focus p {\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/edit-account/edit-account.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDRY;ECSZ,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAXA;EACE,2CAAA;AAcF;;AAVA;EACE,mBAAA;AAaF;AAPE;EACE,aAAA;AASJ;AAPI;EACE,eAAA;AASN;AANI;EACE,6BAAA;AAQN;AALI;EACE,gBAAA;EACA,eAAA;EACA,cD7CU;EC8CV,mBAAA;AAON;AAJI;EACE,yCAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAMN;AAJM;EAPF;IAQI,uBAAA;EAON;AACF;AALM;EAEE,mBAAA;EACA,oBAAA;EACA,aAAA;AAMR;AAJQ;EACE,iBAAA;AAMV;AALU;EAFF;IAGI,kBAAA;EAQV;AACF;AALQ;EAbF;IAcI,eAAA;EAQR;AACF;AANQ;EAjBF;IAkBI,sBAAA;EASR;AACF;AALM;EACE,YAAA;EACA,aAAA;EACA,UAAA;EACA,oBAAA;EACA,iBAAA;AAOR;AAFQ;EACE,cD9FM;EC+FN,gBAAA;EACA,eAAA;AAIV;AADQ;EACE,cDpGM;ECqGN,gBAAA;EACA,eAAA;AAGV;AAMI;EACE,SAAA;EACA,cDjHU;ECkHV,gBAAA;EACA,eAAA;AAJN;;AASA,gCAAA;AACA;;EAEE,wBAAA;EACA,SAAA;AANF;;AASA,YAAA;AACA;EACE,0BAAA;AANF;;AASA;EACE,wCAAA;AANF;;AASA;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AANF;;AASA;EACE,gBAAA;EACA,eAAA;AANF;;AASA;EACE,eAAA;AANF;;AASA;EACA,aAAA;AANA;;AASA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AANF;;AASA;EACE,eAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,iBAAA;EACA,SAAA;AANF;AAQE;EACE,cDjJY;ECkJZ,eAAA;EACA,gBAAA;EACA,gBAAA;AANJ;AASE;EACE,yBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAPJ;AASI;EACE,cDjKU;ECkKV,eAAA;AAPN;AAWE;EACE,wCAAA;EACA,4BAAA;EACA,oBAAA;AATJ;AAWI;EACE,yBAAA;EACA,2CAAA;AATN;AAUM;EACE,cD1MQ;ACkMhB;AAYI;EACE,cD1MM;ACgMZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../theme/styles/components/colors\";\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n\n}\n\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n\n.my-profile-card.card {\n  margin-bottom: 1rem;\n\n  .card-header {\n\n  }\n\n  .card-body {\n    padding: 48px;\n\n    .row {\n      row-gap: 1.5rem;\n    }\n\n    .padding-correction{\n      padding: 24px 50px!important;\n    }\n\n    .title {\n      font-weight: 700;\n      font-size: 32px;\n      color: $primary-color;\n      margin-bottom: 30px;\n    }\n\n    .avatar-data {\n      border: 1px solid rgba(36, 57, 138, 0.16);\n      border-radius: 24px;\n      padding: 24px;\n      margin-bottom: 54px;\n      justify-content: space-between;\n\n      @media(max-width: 1400px) {\n        justify-content: center;\n      }\n\n      .container-btns {\n\n        flex-direction: row;\n        justify-content: end;\n        row-gap: 1rem;\n\n        .btn-color-fill{\n          margin-right: 2px;\n          @media(max-width: 992px){\n            margin-bottom: 5px;\n          }\n        }\n\n        @media(max-width: 1400px){\n          margin-top:5px;\n        }\n\n        @media(max-width: 992px){\n          flex-direction: column;\n        }\n\n      }\n\n      img {\n        width: 120px;\n        height: 120px;\n        padding: 0;\n        border-radius: 100px;\n        object-fit: cover;\n      }\n\n      .data {\n\n        .directions {\n          color: $primary-color;\n          font-weight: 500;\n          font-size: 24px;\n        }\n\n        .format {\n          color: $primary-color;\n          font-weight: 400;\n          font-size: 16px;\n        }\n      }\n    }\n\n  }\n\n  .card-footer {\n\n    p {\n      margin: 0;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 16px;\n    }\n  }\n}\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n.fa-times-circle, mat-icon, .mat-icon-button{\n  color:rgba($primary-color, 20%)!important;\n}\n\n.card .card-body .short-info .user-info img {\n  width: 54px;\n  height: 54px;\n  padding: 0;\n  border-radius: 100px;\n}\n\n.card .card-body .short-info .user-info .name {\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.card .card-body .short-info .user-info .email {\n  font-size: 12px;\n}\n\n.destinations-container-hidden{\ndisplay: none;\n}\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n\n  p {\n    color: $inactive-color;\n    font-size: 18px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .destination-icon {\n    border: 1px solid $inactive-color;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      color: $inactive-color;\n      font-size: 22px;\n    }\n  }\n\n  &:hover, &:focus {\n    background-color: rgba($primary-color, 0.2);\n    transition: 0.3s ease-in-out;\n    outline: transparent;\n\n    .destination-icon {\n      border: 1px solid $primary-color;\n      background-color: var(--primary-background);\n      i {\n        color: $primary-color;\n      }\n    }\n\n    p {\n      color: $paragraph;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 79305:
/*!*****************************************************************************************!*\
  !*** ./src/app/standalone-components/change-pass/change-pass.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"{{'TITLES.NEW-PASS' | translate}}\"\n                          [buttonBackRoute]=\"'..'\">\n    </app-dashboard-header>\n<div class=\"card mb-6\">\n    <div class=\"card-body\">\n        <p class=\"subtitle mb-0\">{{'TITLES.SECURITY' | translate}}</p>\n        <p>{{'TITLES.SECURITY-DIRECTIONS' | translate}}</p>\n\n        <mat-slide-toggle [(ngModel)]=\"twoFA\" class=\"w-100\" (ngModelChange)=\"updateTwoFA()\">{{\"GENERAL.2FA\" | translate}}</mat-slide-toggle>\n\n        <div class=\"row\">\n            <div class=\"form-column col-12 col-md-6\">\n                <form [formGroup]=\"changePassForm\">\n\n                    <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                        <mat-label>{{'FIELD.OLD-PASSWORD'| translate}}</mat-label>\n                        <input matInput placeholder=\"{{'FIELD.OLD-PASSWORD'| translate}}\" formControlName=\"oldPassword\" id=\"oldPassword\"\n                               [type]=\"hideOld ? 'password' : 'text'\" required tabindex=\"1\">\n\n                        <button mat-icon-button matSuffix (click)=\"hideOld = !hideOld\" type=\"button\"\n                                class=\"text-muted\">\n                            <mat-icon>{{hideOld ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </button>\n\n                        <mat-error *ngIf=\"changePassForm.controls.oldPassword.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                        </mat-error>\n\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                        <mat-label>{{'FIELD.NEW-PASSWORD' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'FIELD.NEW-PASSWORD' | translate}}\" formControlName=\"newPassword\"\n                               [type]=\"hide ? 'password' : 'text'\" required tabindex=\"2\" autocomplete=\"false\" id=\"newPassword\">\n\n\n                        <mat-error *ngIf=\"changePassForm.get('newPassword').hasError('samePass')\">{{'ERROR.SAME-PASS-WARN' | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"changePassForm.get('newPassword').hasError('requiredPass')\">{{'ERROR.REQUIRED' | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"changePassForm.get('newPassword').hasError('passMin')\">{{'ERROR.PASS-MIN-LENGTH' | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"changePassForm.get('newPassword').hasError('passMax')\">{{'ERROR.PASS-MAX-LENGTH' | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"changePassForm.get('newPassword').hasError('emptyFirst')\">{{'ERROR.REQUIRED' | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"changePassForm.get('newPassword').hasError('specialCharacter')\">{{'ERROR.PASS-SPECIAL-CHAR' | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"changePassForm.get('newPassword').hasError('number')\">{{'ERROR.PASS-DIGIT' | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"changePassForm.get('newPassword').hasError('upper')\">{{'ERROR.PASS-UPPERCASE' | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"changePassForm.get('newPassword').hasError('lower')\">{{'ERROR.PASS-LOWERCASE' | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"changePassForm.get('newPassword').hasError('whiteSpace')\">{{'ERROR.PASS-WHITESPACE' | translate}}\n                        </mat-error>\n\n                        <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\n                            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </button>\n\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                        <mat-label>{{'FIELD.CONFIRM-NEW-PASSWORD' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'FIELD.CONFIRM-NEW-PASSWORD' | translate}}\"\n                               formControlName=\"confPassword\"  id=\"confirmNewPassword\"\n                               [type]=\"hideCurrent ? 'password' : 'text'\" required tabindex=\"3\">\n\n                        <button mat-icon-button matSuffix (click)=\"hideCurrent = !hideCurrent\" type=\"button\"\n                                class=\"text-muted\">\n                            <mat-icon>{{hideCurrent ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </button>\n\n                        <mat-error *ngIf=\"changePassForm.get('confPassword').hasError('requiredConf')\">{{'ERROR.REQUIRED' | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"changePassForm.get('confPassword').hasError('passInvalid')\">{{'ERROR.SAME-PASS-REQ' | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"changePassForm.get('confPassword').hasError('emptySecond')\">{{'ERROR.REQUIRED' | translate}}\n                        </mat-error>\n\n                    </mat-form-field>\n                </form>\n            </div>\n            <div class=\"col-12 col-md-6\">\n                <img src=\"../../../assets/images/others/changepass.png\">\n            </div>\n        </div>\n\n    </div>\n    <div class=\"card-footer d-flex justify-content-end align-items-center\">\n        <button class=\"btn-long btn-color-fill\" (click)=\"onSaveClick()\" id=\"submitChangePwd\">{{'BTN.NEXT' | translate}}<i\n                class=\"fas fa-arrow-right\"></i></button>\n    </div>\n</div>\n</div>\n";

/***/ }),

/***/ 76613:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/edit-account/edit-account.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n\n    <app-dashboard-header pageTitleOne=\"{{'GENERAL.MY-PROFILE' | translate}}\"\n                          [buttonBackRoute]=\"'..'\"\n                          (buttonCall)=\"onSaveClick()\">\n    </app-dashboard-header>\n\n    <div class=\"my-profile-card card\">\n        <div class=\"card-header border-0\">\n\n        </div>\n\n        <div class=\"card-body\">\n            <div class=\"avatar-data d-flex flex-wrap\">\n                <div class=\"avatar\">\n                    <div class=\"row\">\n                        <img src=\"{{imgPath}}\" alt=\"Profile image\">\n                        <div class=\"data col d-flex flex-column justify-content-center\">\n                            <p class=\"directions mb-0\">{{user?.firstName + \" \" + user?.lastName}}</p>\n                            <p class=\"format mb-0\">{{'USER.SUPPORT-FORMAT' | translate}}</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"container-btns d-flex align-items-center\">\n                    <button class=\"btn-long btn-color-outline me-2\" (click)=\"onDeleteAvatar()\" id=\"deleteAvatarBtn\"><i class=\"fas fa-times\"></i>{{'BTN.CLEAR' | translate}}\n                    </button>\n\n                    <input type=\"file\" hidden accept=\".jpg,.png,.jpeg\" #avatar (change)=\"uploadAvatar($event)\">\n                    <button class=\"btn-long btn-color-fill\" (click)=\"avatar.click()\" id=\"changeProfilePicBtn\"><i\n                        class=\"fas fa-pen\"></i>{{'BTN.CHANGE' | translate}}</button>\n                </div>\n            </div>\n\n            <div class=\"avatar-data padding-correction\">\n                <p class=\"title\">{{'TITLES.PERSONAL-DATA' | translate }}</p>\n\n\n                <div class=\"container-form\">\n                    <form [formGroup]=\"clientAccountForm\">\n                        <div class=\"row\">\n                            <mat-form-field class=\"col-md-6 col-sm-6\" appearance=\"standard\">\n                                <mat-label>{{'USER.LASTNAME' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'USER.LASTNAME' | translate}}\" formControlName=\"lastName\" id=\"lastName\">\n                                <mat-error *ngIf=\"clientAccountForm.get('lastName').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n                                <i class=\"fas fa-times-circle\" type=\"button\" *ngIf=\"clientAccountForm.get('lastName').value\"\n                                   (click)=\"clearFormControl('lastName')\" matSuffix></i>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"col-md-6  col-sm-6\" appearance=\"standard\">\n                                <mat-label>{{'USER.FIRSTNAME' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'USER.FIRSTNAME' | translate}}\" formControlName=\"firstName\" id=\"firstName\">\n                                <mat-error *ngIf=\"clientAccountForm.get('firstName').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n                                <i class=\"fas fa-times-circle\" type=\"button\" *ngIf=\"clientAccountForm.get('firstName').value\"\n                                   (click)=\"clearFormControl('firstName')\" matSuffix></i>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"col-md-12  col-sm-12\" appearance=\"standard\">\n                                <mat-label>Email</mat-label>\n                                <input matInput placeholder=\"Email\" formControlName=\"email\" id=\"email\">\n                            </mat-form-field>\n\n                            <mat-form-field class=\"col-sm-12\" appearance=\"standard\">\n                                <mat-label>{{'USER.BIRTHDAY' | translate}}</mat-label>\n                                <input matInput [matDatepicker]=\"picker\" formControlName=\"birthdate\" id=\"birthdate\" [max]=\"today\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker></mat-datepicker>\n                            </mat-form-field>\n                            <!--<mat-form-field class=\"col-md-3  col-sm-3\" appearance=\"standard\">\n                                <mat-label>Type</mat-label>\n                                <mat-select>\n                                    <mat-option value=\"public\"><i\n                                            class=\"fas fa-globe-europe mr-2\"></i>{{'FIELD.PUBLIC' | translate}}</mat-option>\n                                    <mat-option value=\"private\"><i\n                                            class=\"fas fa-lock mr-2\"></i>{{'FIELD.PRIVATE' | translate}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>-->\n\n                            <mat-form-field class=\"col-sm-12\" appearance=\"standard\">\n                                <mat-label>{{'USER.PHONE' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'USER.PHONE' | translate}}\" formControlName=\"telephone\" id=\"telephone\" type=\"text\">\n                                <mat-icon matSuffix>phone</mat-icon>\n                                <mat-error *ngIf=\"clientAccountForm.get('telephone').hasError('pattern')\">Please enter only numeric characters.</mat-error>\n                            </mat-form-field>\n\n                            <!--<mat-form-field class=\"col-md-3  col-sm-3\" appearance=\"standard\" >\n                                <mat-label>Type</mat-label>\n                                <mat-select>\n                                    <mat-option value=\"public\"><i\n                                            class=\"fas fa-globe-europe mr-2\"></i>{{'FIELD.PUBLIC' | translate}}</mat-option>\n                                    <mat-option value=\"private\"><i\n                                            class=\"fas fa-lock mr-2\"></i>{{'FIELD.PRIVATE' | translate}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>-->\n\n                            <mat-form-field class=\"col-sm-12\" appearance=\"standard\">\n                                <mat-label>{{'USER.GENDER' | translate}}</mat-label>\n                                <mat-select formControlName=\"gender\" id=\"gender\">\n                                    <mat-option value=\"male\" id=\"male\">{{'USER.MALE' | translate}}</mat-option>\n                                    <mat-option value=\"female\" id=\"female\">{{'USER.FEMALE' | translate}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                            <!--<mat-form-field class=\"col-md-3  col-sm-3\" appearance=\"standard\">\n                                <mat-label>Type</mat-label>\n                                <mat-select>\n                                    <mat-option value=\"public\"><i\n                                            class=\"fas fa-globe-europe mr-2\"></i>{{'FIELD.PUBLIC' | translate}}</mat-option>\n                                    <mat-option value=\"private\"><i\n                                            class=\"fas fa-lock mr-2\"></i>{{'FIELD.PRIVATE' | translate}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>-->\n\n                            <mat-form-field class=\"col-sm-12\" appearance=\"standard\" *ngIf=\"isClient\">\n                                <mat-label>{{'USER.DESCRIPTION' | translate}}</mat-label>\n                                <textarea formControlName=\"description\" matInput id=\"descriptionEditClient\"\n                                          cdkTextareaAutosize\n                                          cdkAutosizeMinRows=\"1\"\n                                          cdkAutosizeMaxRows=\"20\"></textarea>\n                                <button *ngIf=\"clientAccountForm.get('description').value\" (click)=\"clientAccountForm.get('description').patchValue('')\"\n                                        id=\"btnClearDescriptionEditClient\" type=\"button\" mat-icon-button matSuffix>\n                                    <mat-icon>close</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <!--to do-->\n\n                            <p>\n                                <mat-form-field class=\"col-sm-12\" appearance=\"standard\">\n                                    <mat-label>Search city</mat-label>\n                                    <input formControlName=\"city\" [(ngModel)]=\"cityToSearch\"\n                                           (ngModelChange)=\"searchForCities()\" matInput placeholder=\"Search city...\">\n                                    <mat-icon role=\"button\" *ngIf=\"!cityToSearch\" matSuffix>search</mat-icon>\n                                    <mat-icon role=\"button\" *ngIf=\"cityToSearch\" matSuffix\n                                              (click)=\"cityToSearch = null;\n                                                       recommendedCities = null;\n                                                       clearFormControl('city');\n                                                       clearFormControl('currentGeographicalCoordinates');\n                                                       clearFormControl('country');\"\n                                    >clear</mat-icon>\n                                </mat-form-field>\n                            </p>\n\n                            <div [ngClass]=\"hideCitySuggestion ? 'destinations-container-hidden' : 'destinations-container'\">\n                                <div *ngFor=\"let city of recommendedCities | slice : 0 : 5\"\n                                     (click)=\"updateFormValue('city', city.city);\n                                     updateFormValue('currentGeographicalCoordinates', city.geographicalCoordinates);\n                                     updateFormValue('country', city.country)\"\n                                     class=\"destination-element\">\n                                                <span class=\"destination-icon\">\n                                                    <i class=\"fas fa-map-marker-alt\"></i>\n                                                </span>\n\n                                    <p>{{ city.city }}, {{ city.country }}</p>\n                                </div>\n                            </div>\n\n\n\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_standalone-components_change-pass_change-pass_component_ts-src_app_standalone-f14a88.js.map