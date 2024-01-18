(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_private_private_module_ts-src_app_shared__services_languageStorage_service_ts"],{

/***/ 14750:
/*!*******************************************************!*\
  !*** ./src/app/features/private/private.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateComponent": () => (/* binding */ PrivateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _private_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private.component.html?ngResource */ 54677);
/* harmony import */ var _private_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private.component.scss?ngResource */ 74744);
/* harmony import */ var _private_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_private_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let PrivateComponent = class PrivateComponent {
  constructor(router) {
    this.router = router;
    this.showMenu = true;
  }
  ngOnInit() {
    if (this.router.url.includes('/editorials/view')) {
      this.showMenu = false;
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
PrivateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-private',
  template: _private_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_private_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PrivateComponent);


/***/ }),

/***/ 13599:
/*!****************************************************!*\
  !*** ./src/app/features/private/private.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateModule": () => (/* binding */ PrivateModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _private_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private.component */ 14750);
/* harmony import */ var _standalone_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../standalone-components/header/header.component */ 46346);
/* harmony import */ var _standalone_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../standalone-components/menu/menu.component */ 68390);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/user-roles.guard */ 16070);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _standalone_components_domains_selector_domains_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../standalone-components/domains-selector/domains-selector.component */ 70209);
/* harmony import */ var _standalone_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../standalone-components/footer/footer.component */ 5754);












const routes = [{
  path: '',
  component: _private_component__WEBPACK_IMPORTED_MODULE_0__.PrivateComponent,
  children: [{
    path: 'admin',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared__services_reservations_service_ts-src_app_standalone-components_all-no-f71d7e"), __webpack_require__.e("default-src_app_shared__services_staff_service_ts-node_modules_randexp_lib_randexp_js"), __webpack_require__.e("default-src_app_standalone-components_clients-list_clients-list_component_ts"), __webpack_require__.e("src_app_features_role-admin_role-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../role-admin/role-admin.module */ 50362)).then(m => m.RoleAdminModule),
    canActivate: [_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_3__.UserRolesGuard],
    data: {
      allowedRoles: ['ROLE_SUPER_ADMIN']
    }
  }, {
    path: 'staff',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared__services_reservations_service_ts-src_app_standalone-components_all-no-f71d7e"), __webpack_require__.e("default-src_app_standalone-components_change-pass_change-pass_component_ts-src_app_standalone-f14a88"), __webpack_require__.e("default-src_app_standalone-components_clients-list_clients-list_component_ts"), __webpack_require__.e("src_app_features_role-staff_role-staff_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../role-staff/role-staff.module */ 58439)).then(m => m.RoleStaffModule),
    canActivate: [_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_3__.UserRolesGuard],
    data: {
      allowedRoles: ['ROLE_STAFF']
    }
  }, {
    path: 'provider',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared__services_reservations_service_ts-src_app_standalone-components_all-no-f71d7e"), __webpack_require__.e("default-src_app_standalone-components_change-pass_change-pass_component_ts-src_app_standalone-f14a88"), __webpack_require__.e("default-src_app_features_role-provider_view-provider-messages_view-provider-messages_componen-fb491b"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_role-provider_role-provider_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../role-provider/role-provider.module */ 64916)).then(m => m.RoleProviderModule),
    canActivate: [_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_3__.UserRolesGuard],
    data: {
      allowedRoles: ['ROLE_PROVIDER', 'ROLE_SUPER_ADMIN']
    }
  }, {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }]
}];
let PrivateModule = class PrivateModule {};
PrivateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_private_component__WEBPACK_IMPORTED_MODULE_0__.PrivateComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _standalone_components_domains_selector_domains_selector_component__WEBPACK_IMPORTED_MODULE_5__.DomainsSelectorComponent, _standalone_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _standalone_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent, _standalone_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent]
})], PrivateModule);


/***/ }),

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

/***/ 74744:
/*!********************************************************************!*\
  !*** ./src/app/features/private/private.component.scss?ngResource ***!
  \********************************************************************/
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

/***/ 54677:
/*!********************************************************************!*\
  !*** ./src/app/features/private/private.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header></app-header>\n<app-menu *ngIf=\"showMenu\"></app-menu>\n<div class=\"inner-app-content\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_private_private_module_ts-src_app_shared__services_languageStorage_service_ts.js.map