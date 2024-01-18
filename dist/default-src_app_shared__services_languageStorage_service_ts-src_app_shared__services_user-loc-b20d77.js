(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_shared__services_languageStorage_service_ts-src_app_shared__services_user-loc-b20d77"],{

/***/ 31345:
/*!*************************************************************!*\
  !*** ./src/app/shared/_services/languageStorage.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageStorageService": () => (/* binding */ LanguageStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _userData_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userData.service */ 32763);




let LanguageStorageService = class LanguageStorageService {
  constructor(userDataService) {
    this.userDataService = userDataService;
    // Functions For Changes Detection
    this.languageChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.languageChangedObs = this.languageChanged.asObservable();
    // You can now use methods and properties of ServiceA within ServiceB
  }
  // Trigger list changes
  triggerUserLanguageChanges(lang) {
    console.log('trigger', lang);
    this.userDataService.getCurrentSetting().subscribe(resp => {
      console.log('resp settings', resp);
      if (resp) {
        resp.language = lang;
        this.userDataService.updateCurrentSetting(resp).subscribe(newResp => {
          console.log('updated settings', resp, newResp);
          location.reload();
        });
      } else {
        location.reload();
      }
    });
    // // Change the subject value
    // this.languageChanged.next(lang);
  }
  static #_ = this.ctorParameters = () => [{
    type: _userData_service__WEBPACK_IMPORTED_MODULE_0__.UserDataService
  }];
};
LanguageStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], LanguageStorageService);


/***/ }),

/***/ 22587:
/*!***********************************************************!*\
  !*** ./src/app/shared/_services/user-location.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLocationService": () => (/* binding */ UserLocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _standalone_components_confirm_location_confirm_location_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../standalone-components/confirm-location/confirm-location.component */ 28193);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_standalone_components_deny_location_deny_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/standalone-components/deny-location/deny-location.component */ 66871);
/* harmony import */ var src_app_standalone_components_suggested_gps_location_suggested_gps_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/standalone-components/suggested-gps-location/suggested-gps-location.component */ 79791);











let UserLocationService = class UserLocationService {
  constructor(http, ngbModal, toastService, translate) {
    this.http = http;
    this.ngbModal = ngbModal;
    this.toastService = toastService;
    this.translate = translate;
  }
  checkUserCoordinates() {
    console.log('daca locatia este activa ajungem aici');
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.findClosestCity(position.coords.latitude, position.coords.longitude).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(city => this.detectedCity = city), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.getCurrentUser())).subscribe({
          next: user => {
            if (user) this.currentUser = user;
            // daca userul nu are city salvat sau daca difera fata de cel detectat
            if (!user.city || user.city !== this.detectedCity.name || user.country !== this.detectedCity.country) {
              const modalRef = this.ngbModal.open(_standalone_components_confirm_location_confirm_location_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmLocationComponent, {
                centered: true,
                size: 'sm',
                backdrop: 'static'
              });
              modalRef.componentInstance.detectedCity = this.detectedCity;
              modalRef.componentInstance.hasCity = user.city;
              modalRef.closed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
                next: res => {
                  this.updateCurrentUser({
                    ...this.currentUser,
                    city: res?.location,
                    country: res?.country,
                    currentGeographicalCoordinates: res?.geographicalCoordinates
                  }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
                    next: res => {
                      if (res.success) {
                        console.log('locatia a fost mofificata', res);
                        //this.toastService.showToast(
                        // this.translate.instant("TOAST.SUCCESS"),
                        // 'Successfully updated your location',
                        // "success"
                        //);
                      }
                    },

                    error: () => {
                      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
                    }
                  });
                }
              });
            }
          }
        });
      }, error => {
        if (error.code === error.PERMISSION_DENIED) {
          // User denied access to their location
          console.log('User denied access to location');
          this.getCurrentUser().subscribe(user => {
            if (user) this.currentUser = user;
            if (!user.city) {
              const modalRef = this.ngbModal.open(src_app_standalone_components_deny_location_deny_location_component__WEBPACK_IMPORTED_MODULE_2__.DenyLocationComponent, {
                centered: true,
                size: 'sm',
                backdrop: 'static'
              });
              // modalRef.componentInstance.detectedCity = this.detectedCity;
              modalRef.componentInstance.userData = user;
              modalRef.closed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
                next: res => {
                  this.updateCurrentUser({
                    ...this.currentUser,
                    city: res?.location,
                    country: res?.country,
                    currentGeographicalCoordinates: res?.geographicalCoordinates
                  }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
                    next: res => {
                      if (res.success) {
                        console.log('locatia a fost mofificata', res);
                        //this.toastService.showToast(
                        // this.translate.instant("TOAST.SUCCESS"),
                        // 'Successfully updated your location',
                        // "success"
                        //);
                      }
                    },

                    error: () => {
                      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
                    }
                  });
                }
              });
            } else {
              this.ngbModal.open(src_app_standalone_components_suggested_gps_location_suggested_gps_location_component__WEBPACK_IMPORTED_MODULE_3__.SuggestedGPSLocationComponent, {
                centered: true,
                size: 'sm',
                backdrop: 'static'
              });
            }
          });
        } else {
          // Handle other errors
          console.log('Error occurred while retrieving location:', error.message);
        }
      });
    }
    const permissionStatus = navigator?.permissions?.query({
      name: 'geolocation'
    });
    // const hasPermission = permissionStatus?.state // Dynamic value
    console.log('permission status', permissionStatus);
  }
  findClosestCity(latitude, longitude) {
    return this.http.post('/bestinform/findClosestCity?latitude=' + latitude + '&longitude=' + longitude, {});
  }
  getCurrentUser() {
    return this.http.get('/bestinform/getCurrentUser');
  }
  updateCurrentUser(user) {
    return this.http.put("/bestinform/updateCurrentUser", user);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
  }, {
    type: _toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
  }];
};
UserLocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
  providedIn: 'root'
})], UserLocationService);


/***/ }),

/***/ 32763:
/*!******************************************************!*\
  !*** ./src/app/shared/_services/userData.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataService": () => (/* binding */ UserDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _localStorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.service */ 72538);




let UserDataService = class UserDataService {
  constructor(http, localStorage) {
    this.http = http;
    this.localStorage = localStorage;
    this.baseApiUrl = "/bestinform/uploadUserContract";
    this.baseCoverImgApiUrl = "/bestinform/uploadUserCoverImage";
    this.baseAvatarImgApiUrl = "/bestinform/uploadAvatar";
  }
  // Returns an observable
  //upload contract for any user id
  uploadUserContract(userId, file) {
    // Create form data
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append("file", file);
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl + '?userId=' + userId, formData);
  }
  //upload contract for current user
  uploadCurrentUserContract(file) {
    // Create form data
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append("file", file);
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData);
  }
  uploadUserCoverImage(coverFile) {
    // Create form data
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append("coverFile", coverFile);
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseCoverImgApiUrl, formData);
  }
  uploadUserAvatar(file) {
    // Create form data
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append("file", file);
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseAvatarImgApiUrl, formData);
  }
  addUser(user) {
    return this.http.post("/bestinform/addUser", user);
  }
  getJWTToken() {
    return this.localStorage.get('token');
  }
  getCurrentUser() {
    return this.http.get("/bestinform/getCurrentUser");
  }
  getUserById(userId) {
    return this.http.get("/bestinform/getUserById?userId=" + userId);
  }
  updateCurrentUser(user) {
    return this.http.put("/bestinform/updateCurrentUser", user);
  }
  updateUser(userId, user) {
    return this.http.put("/bestinform/updateUser?userId=" + userId, user);
  }
  deleteUser(userId) {
    return this.http.delete('/bestinform/deleteUser?userId=' + userId);
  }
  uploadAvatar(image) {
    return this.http.post("/bestinform/uploadAvatar", image);
  }
  // uploadUserCoverImage(coverFile){
  //     return this.http.post("/bestinform/uploadUserCoverImage",coverFile);
  // }
  deleteProfileImage() {
    return this.http.put("/bestinform/deleteProfileImage", {});
  }
  changeUserStatus(userId, approvedStatus) {
    return this.http.put("/bestinform/changeUserStatus?userId=" + userId + '&approvedStatus=' + approvedStatus, {});
  }
  changePassword(oldPassword, newPassword) {
    return this.http.put("/bestinform/changePassword", {
      oldPassword: oldPassword,
      newPassword: newPassword
    });
  }
  updateUserProfile(user) {
    return this.http.put("/bestinform/updateUserProfile", user);
  }
  sendRegistrationEmail(userId) {
    return this.http.get("/bestinform/sendRegistrationEmail?userId=" + userId);
  }
  getCurrentSetting() {
    return this.http.get("/bestinform/getCurrentSetting");
  }
  updateCurrentSetting(setting) {
    return this.http.put("/bestinform/updateCurrentSetting", setting);
  }
  listUsersFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listUsersFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters ? filters : {});
  }
  executeRecurringPayments() {
    return this.http.post('/bestinform/executeRecurringPayments', {});
  }
  changeActiveStatus(targetUserId, accept) {
    return this.http.put('/bestinform/changeActiveStatus?targetUserId=' + targetUserId + '&accept=' + accept, {});
  }
  getAllCountries() {
    return this.http.get('/bestinform/getAllCountries');
  }
  listCityFiltered(page, size, filters) {
    return this.http.post('/bestinform/listCityFiltered?page=' + page + '&size=' + size, filters);
  }
  getCurrentPurchasedSubscription() {
    return this.http.get('/bestinform/getCurrentPurchasedSubscription');
  }
  listPurchasedSubscriptionsFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listPurchasedSubscriptionsFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  cancelSubscription(subId) {
    return this.http.post('/bestinform/cancelSubscription?purchasedSubscriptionId=' + subId, {});
  }
  makeAutoRenewTrue(subscriptionId) {
    return this.http.put('/bestinform/makeAutoRenewTrue?purchasedSubscriptionId=' + subscriptionId, {});
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }, {
    type: _localStorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService
  }];
};
UserDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: "root"
})], UserDataService);


/***/ }),

/***/ 28193:
/*!**************************************************************************************!*\
  !*** ./src/app/standalone-components/confirm-location/confirm-location.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmLocationComponent": () => (/* binding */ ConfirmLocationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _confirm_location_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-location.component.html?ngResource */ 28870);
/* harmony import */ var _confirm_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-location.component.scss?ngResource */ 69822);
/* harmony import */ var _confirm_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_confirm_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);















let ConfirmLocationComponent = class ConfirmLocationComponent {
  constructor(modal, resourceFilterService, fb, dialog) {
    this.modal = modal;
    this.resourceFilterService = resourceFilterService;
    this.fb = fb;
    this.dialog = dialog;
    this.recommendedCities = null;
    this.cityToSearch = null;
    this.displayChooseLocation = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    console.log('hasCity', this.hasCity);
    this.filterForm = this.fb.group({
      location: [this.detectedCity.name],
      geographicalCoordinates: [this.detectedCity.geographicalCoordinates],
      country: [this.detectedCity.country]
    });
  }
  searchForCities() {
    if (!this.cityToSearch || this.cityToSearch?.length < 3) {
      this.recommendedCities = null;
      return;
    }
    this.resourceFilterService.getAllCitiesRecommended(this.cityToSearch).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      if (!res) return;
      this.recommendedCities = [...res];
    });
  }
  updateFormValue(formControlName, value) {
    this.filterForm.get(formControlName).patchValue(value);
  }
  openModal(templateRef) {
    this.dialog.open(templateRef, {
      panelClass: 'custom-modal'
    });
    this.modal.close();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__.ResourceFilterService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog
  }];
  static #_2 = this.propDecorators = {
    detectedCity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    hasCity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }]
  };
};
ConfirmLocationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-confirm-location',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_13__.MatLegacyInputModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule],
  template: _confirm_location_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_confirm_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ConfirmLocationComponent);


/***/ }),

/***/ 66871:
/*!********************************************************************************!*\
  !*** ./src/app/standalone-components/deny-location/deny-location.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DenyLocationComponent": () => (/* binding */ DenyLocationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deny_location_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deny-location.component.html?ngResource */ 97250);
/* harmony import */ var _deny_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deny-location.component.scss?ngResource */ 34902);
/* harmony import */ var _deny_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deny_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/resource-filter.service */ 41682);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);














let DenyLocationComponent = class DenyLocationComponent {
  constructor(modal, resourceFilterService, fb, dialog) {
    this.modal = modal;
    this.resourceFilterService = resourceFilterService;
    this.fb = fb;
    this.dialog = dialog;
    this.recommendedCities = null;
    this.cityToSearch = null;
    this.displayChooseLocation = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    console.log('hasCity', this.hasCity);
    this.filterForm = this.fb.group({
      // location: [this.hasCity.name],
      // geographicalCoordinates: [this.hasCity.geographicalCoordinates],
      // country: [this.hasCity.country]
      location: [''],
      geographicalCoordinates: [''],
      country: ['']
    });
  }
  searchForCities() {
    if (!this.cityToSearch || this.cityToSearch?.length < 3) {
      this.recommendedCities = null;
      return;
    }
    this.resourceFilterService.getAllCitiesRecommended(this.cityToSearch).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      if (!res) return;
      this.recommendedCities = [...res];
    });
  }
  updateFormValue(formControlName, value) {
    this.filterForm.get(formControlName).patchValue(value);
  }
  openModal(templateRef) {
    this.dialog.open(templateRef, {
      panelClass: 'custom-modal'
    });
    this.modal.close();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
  }, {
    type: src_app_shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__.ResourceFilterService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog
  }];
  static #_2 = this.propDecorators = {
    hasCity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }]
  };
};
DenyLocationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-deny-location',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_13__.MatLegacyInputModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule],
  template: _deny_location_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_deny_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DenyLocationComponent);


/***/ }),

/***/ 79791:
/*!**************************************************************************************************!*\
  !*** ./src/app/standalone-components/suggested-gps-location/suggested-gps-location.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuggestedGPSLocationComponent": () => (/* binding */ SuggestedGPSLocationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _suggested_gps_location_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suggested-gps-location.component.html?ngResource */ 88259);
/* harmony import */ var _suggested_gps_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suggested-gps-location.component.scss?ngResource */ 1569);
/* harmony import */ var _suggested_gps_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suggested_gps_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);







let SuggestedGPSLocationComponent = class SuggestedGPSLocationComponent {
  constructor(modal) {
    this.modal = modal;
  }
  closeModal() {
    this.modal.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal
  }];
};
SuggestedGPSLocationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-suggested-gps-location',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule],
  template: _suggested_gps_location_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_suggested_gps_location_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SuggestedGPSLocationComponent);


/***/ }),

/***/ 69822:
/*!***************************************************************************************************!*\
  !*** ./src/app/standalone-components/confirm-location/confirm-location.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n}\n.destination-element p {\n  color: #858495;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.destination-element .destination-icon {\n  border: 1px solid #858495;\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.destination-element .destination-icon i {\n  color: #858495;\n  font-size: 22px;\n}\n.destination-element:hover, .destination-element:focus {\n  background-color: rgba(36, 57, 138, 0.2);\n  transition: 0.3s ease-in-out;\n  outline: transparent;\n}\n.destination-element:hover .destination-icon, .destination-element:focus .destination-icon {\n  border: 1px solid #24398A;\n  background-color: var(--primary-background);\n}\n.destination-element:hover .destination-icon i, .destination-element:focus .destination-icon i {\n  color: #24398A;\n}\n.destination-element:hover p, .destination-element:focus p {\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/confirm-location/confirm-location.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AAkBF;;AAfA;EACE,eAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,iBAAA;EACA,SAAA;AAkBF;AAhBE;EACE,cDUY;ECTZ,eAAA;EACA,gBAAA;EACA,gBAAA;AAkBJ;AAfE;EACE,yBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAiBJ;AAfI;EACE,cDNU;ECOV,eAAA;AAiBN;AAbE;EACE,wCAAA;EACA,4BAAA;EACA,oBAAA;AAeJ;AAbI;EACE,yBAAA;EACA,2CAAA;AAeN;AAdM;EACE,cD/CQ;AC+DhB;AAZI;EACE,cD/CM;AC6DZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n\n  p {\n    color: $inactive-color;\n    font-size: 18px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .destination-icon {\n    border: 1px solid $inactive-color;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      color: $inactive-color;\n      font-size: 22px;\n    }\n  }\n\n  &:hover, &:focus {\n    background-color: rgba($primary-color, 0.2);\n    transition: 0.3s ease-in-out;\n    outline: transparent;\n\n    .destination-icon {\n      border: 1px solid $primary-color;\n      background-color: var(--primary-background);\n      i {\n        color: $primary-color;\n      }\n    }\n\n    p {\n      color: $paragraph;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 34902:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/deny-location/deny-location.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n}\n.destination-element p {\n  color: #858495;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.destination-element .destination-icon {\n  border: 1px solid #858495;\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.destination-element .destination-icon i {\n  color: #858495;\n  font-size: 22px;\n}\n.destination-element:hover, .destination-element:focus {\n  background-color: rgba(36, 57, 138, 0.2);\n  transition: 0.3s ease-in-out;\n  outline: transparent;\n}\n.destination-element:hover .destination-icon, .destination-element:focus .destination-icon {\n  border: 1px solid #24398A;\n  background-color: var(--primary-background);\n}\n.destination-element:hover .destination-icon i, .destination-element:focus .destination-icon i {\n  color: #24398A;\n}\n.destination-element:hover p, .destination-element:focus p {\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/deny-location/deny-location.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AAkBF;;AAfA;EACE,eAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,iBAAA;EACA,SAAA;AAkBF;AAhBE;EACE,cDUY;ECTZ,eAAA;EACA,gBAAA;EACA,gBAAA;AAkBJ;AAfE;EACE,yBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAiBJ;AAfI;EACE,cDNU;ECOV,eAAA;AAiBN;AAbE;EACE,wCAAA;EACA,4BAAA;EACA,oBAAA;AAeJ;AAbI;EACE,yBAAA;EACA,2CAAA;AAeN;AAdM;EACE,cD/CQ;AC+DhB;AAZI;EACE,cD/CM;AC6DZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n\n  p {\n    color: $inactive-color;\n    font-size: 18px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .destination-icon {\n    border: 1px solid $inactive-color;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      color: $inactive-color;\n      font-size: 22px;\n    }\n  }\n\n  &:hover, &:focus {\n    background-color: rgba($primary-color, 0.2);\n    transition: 0.3s ease-in-out;\n    outline: transparent;\n\n    .destination-icon {\n      border: 1px solid $primary-color;\n      background-color: var(--primary-background);\n      i {\n        color: $primary-color;\n      }\n    }\n\n    p {\n      color: $paragraph;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1569:
/*!***************************************************************************************************************!*\
  !*** ./src/app/standalone-components/suggested-gps-location/suggested-gps-location.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 28870:
/*!***************************************************************************************************!*\
  !*** ./src/app/standalone-components/confirm-location/confirm-location.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-title\">Location detected</h4>\n    <button\n            type=\"button\"\n            class=\"btn-close\"\n            aria-describedby=\"modal-title\"\n            (click)=\"modal.dismiss()\"\n    ></button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"container\">\n        <p>\n            <strong>Is this your location\n                <span class=\"text-primary\">\n                    \"{{ filterForm.controls.location.value }}, {{ filterForm.controls.country.value }}\"\n                </span> ?</strong>\n        </p>\n\n        <p>\n            Otherwise, select a location from below:\n        </p>\n\n        <p>\n            <mat-form-field class=\"w-50\" appearance=\"outline\">\n                <mat-label>Search city</mat-label>\n                <input [(ngModel)]=\"cityToSearch\"\n                       (ngModelChange)=\"searchForCities()\" matInput placeholder=\"Search city...\">\n                <mat-icon role=\"button\" *ngIf=\"!cityToSearch\" matSuffix>search</mat-icon>\n                <mat-icon role=\"button\" *ngIf=\"cityToSearch\" matSuffix\n                          (click)=\"cityToSearch = null;\n                                   recommendedCities = null;\"\n                >clear</mat-icon>\n            </mat-form-field>\n        </p>\n\n        <div class=\"destinations-container\">\n            <div *ngFor=\"let city of recommendedCities | slice : 0 : 5\"\n                 (click)=\"updateFormValue('location', city.city);\n                          updateFormValue('geographicalCoordinates', city.geographicalCoordinates);\n                          updateFormValue('country', city.country)\"\n                 [tabindex]=\"0\"\n                 class=\"destination-element\">\n                            <span class=\"destination-icon\">\n                                <i class=\"fas fa-map-marker-alt\"></i>\n                            </span>\n\n                <p>{{ city.city }}, {{ city.country }}</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer justify-content-between\">\n    <button type=\"button\" class=\"btn-auto btn-dislike-fill\" (click)=\"modal.dismiss()\">No</button>\n    <button type=\"button\" class=\"btn-auto btn-color-fill\" (click)=\"modal.close(filterForm.value)\">Yes</button>\n</div>";

/***/ }),

/***/ 97250:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/deny-location/deny-location.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-title\">Choose location</h4>\n    <button\n            type=\"button\"\n            class=\"btn-close\"\n            aria-describedby=\"modal-title\"\n            (click)=\"modal.dismiss()\"\n    ></button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"container\">\n        <!-- <p>\n            <strong>Is this your location\n                <span class=\"text-primary\">\n                    \"{{ filterForm.controls.location.value }}, {{ filterForm.controls.country.value }}\"\n                </span> ?</strong>\n        </p> -->\n\n        <p>\n            Select a location from below:\n        </p>\n\n        <p>\n            <mat-form-field class=\"w-50\" appearance=\"outline\">\n                <mat-label>Search city</mat-label>\n                <input [(ngModel)]=\"cityToSearch\"\n                       (ngModelChange)=\"searchForCities()\" matInput placeholder=\"Search city...\">\n                <mat-icon role=\"button\" *ngIf=\"!cityToSearch\" matSuffix>search</mat-icon>\n                <mat-icon role=\"button\" *ngIf=\"cityToSearch\" matSuffix\n                          (click)=\"cityToSearch = null;\n                                   recommendedCities = null;\"\n                >clear</mat-icon>\n            </mat-form-field>\n        </p>\n\n        <div class=\"destinations-container\">\n            <div *ngFor=\"let city of recommendedCities | slice : 0 : 5\"\n                 (click)=\"updateFormValue('location', city.city);\n                          updateFormValue('geographicalCoordinates', city.geographicalCoordinates);\n                          updateFormValue('country', city.country)\"\n                 [tabindex]=\"0\"\n                 class=\"destination-element\">\n                            <span class=\"destination-icon\">\n                                <i class=\"fas fa-map-marker-alt\"></i>\n                            </span>\n\n                <p>{{ city.city }}, {{ city.country }}</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer justify-content-between\">\n    <button type=\"button\" class=\"btn-auto btn-dislike-fill\" (click)=\"modal.dismiss()\">No</button>\n    <button type=\"button\" class=\"btn-auto btn-color-fill\" (click)=\"modal.close(filterForm.value)\">Yes</button>\n</div>";

/***/ }),

/***/ 88259:
/*!***************************************************************************************************************!*\
  !*** ./src/app/standalone-components/suggested-gps-location/suggested-gps-location.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"p-4\">\n    <p class=\"mb-2\">Pentru o mai buna experiență de utilizare a aplicației recomandăm să permiteți accesarea localizării GPS din setările dispozitivului/browser-ului.\n    </p>\n    <button class=\"btn-close-modal btn-long btn-color-fill\" type=\"button\" mat-dialog-close=\"true\" (click)=\"closeModal()\">\n        Am înțeles!\n    </button>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared__services_languageStorage_service_ts-src_app_shared__services_user-loc-b20d77.js.map