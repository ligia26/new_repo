(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["common"],{

/***/ 36052:
/*!*********************************************************************!*\
  !*** ./src/app/features/editorials/_services/editorials.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorialsService": () => (/* binding */ EditorialsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let EditorialsService = class EditorialsService {
  constructor(http) {
    this.http = http;
    this.baseApiUrl = "/bestinform/uploadEditorialImage";
  }
  //udate the editorial
  updateEditorial(editorialId, editorial) {
    return this.http.put('/bestinform/updateEditorial?editorialId=' + editorialId, editorial);
  }
  //change editorial status
  changeEditorialStatus(editorialId, status) {
    return this.http.put('/bestinform/changeEditorialStatus?editorialId=' + editorialId + '&status=' + status, {});
  }
  // Returns an observable
  uploadEditorialImage(editorialId, file) {
    // Create form data
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append("file", file);
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl + '?editorialId=' + editorialId, formData);
  }
  //create editorial
  addEditorial(editorial) {
    return this.http.post('/bestinform/addEditorial', editorial);
  }
  //get all editorials
  listEditorialFiltered(page, size, sort, dir, filterParams) {
    return this.http.post('/bestinform/listEditorialFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filterParams);
  }
  //get editorial by slug
  getEditorialBySlug(slug) {
    return this.http.get('/bestinform/getEditorialBySlug?slug=' + slug);
  }
  //get editorial By Id
  getEditorialById(editorialId) {
    return this.http.get('/bestinform/getEditorialById?editorialId=' + editorialId);
  }
  //deletePaymentDocument
  deleteEditorialById(editorialId) {
    return this.http.delete('/bestinform/deleteEditorialById?editorialId=' + editorialId);
  }
  getUserById(userId) {
    return this.http.get("/bestinform/getUserById?userId=" + userId);
  }
  getCurrentUser() {
    return this.http.get("/bestinform/getCurrentUser");
  }
  getEditorialCategories() {
    return this.http.get('/bestinform/getEditorialCategories');
  }
  getEditorialCategoriesById(id) {
    return this.http.get('/bestinform/getEditorialCategoryById?categoryId=' + id);
  }
  getEditorialSubcategoriesByCategoryId(id) {
    return this.http.get('/bestinform/getEditorialSubcategoriesForCategory?categoryId=' + id);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
EditorialsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], EditorialsService);


/***/ }),

/***/ 61295:
/*!***********************************************************************!*\
  !*** ./src/app/features/itineraries/_services/itineraries.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItinerariesService": () => (/* binding */ ItinerariesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);





let ItinerariesService = class ItinerariesService {
  setItineraryState(itinerary) {
    this.itineraryState = itinerary;
  }
  getItineraryById(itineraryId) {
    if (this.itineraryState?.id === itineraryId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.itineraryState);
    }
    return this.http.get('/bestinform/getItineraryById?itineraryId=' + itineraryId);
  }
  constructor(http) {
    this.http = http;
    this.itineraryState = null;
  }
  createItinerary(itinerary) {
    return this.http.post('/bestinform/createItinerary', itinerary);
  }
  updateItinerary(itineraryId, itineraryData) {
    return this.http.put('/bestinform/updateItinerary?itineraryId=' + itineraryId, itineraryData);
  }
  /**
   * returns in this order:
   * journeyTheme
   * typeOfDestination
   * typeOfJourney
   */
  getCategoryAttributes() {
    return this.http.get('/bestinform/getSystemSetting').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(systemSettings => {
      const attributesByCategoryId$ = [];
      if (systemSettings.journeyThemeCategoryId) {
        attributesByCategoryId$.push(this.getAttributesByCategoryId(systemSettings.journeyThemeCategoryId));
      } else {
        attributesByCategoryId$.push((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null));
      }
      if (systemSettings.typeOfDestinationCategoryId) {
        attributesByCategoryId$.push(this.getAttributesByCategoryId(systemSettings.typeOfDestinationCategoryId));
      } else {
        attributesByCategoryId$.push((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null));
      }
      if (systemSettings.typeOfJourneyCategoryId) {
        attributesByCategoryId$.push(this.getAttributesByCategoryId(systemSettings.typeOfJourneyCategoryId));
      } else {
        attributesByCategoryId$.push((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(attributesByCategoryId$);
    }));
  }
  getAttributesByCategoryId(categoryId) {
    return this.http.post('/bestinform/listAttributesFiltered?page=0&size=-1', {
      categoryId: categoryId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(attributePagination => attributePagination.content));
  }
  getAllResourceTypes() {
    return this.http.get('/bestinform/getAllResourceTypes');
  }
  getRentalBookingResourceTypes() {
    return this.http.get('/bestinform/getRentalBookingResourceTypes');
  }
  getTicketBookingResourceTypes() {
    return this.http.get('/bestinform/getTicketBookingResourceTypes');
  }
  getMenuResourceTypes() {
    return this.http.get('/bestinform/getMenuResourceTypes');
  }
  listItinerariesFiltered(page, size, sort, dir, filterParams) {
    return this.http.post('/bestinform/listItineraryFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filterParams);
  }
  deleteItineraryById(itineraryId) {
    return this.http.delete('/bestinform/deleteItineraryById?itineraryId=' + itineraryId);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }];
};
ItinerariesService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], ItinerariesService);


/***/ }),

/***/ 89219:
/*!************************************************************************!*\
  !*** ./src/app/features/landing-bestinform/landing-service.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingService": () => (/* binding */ LandingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let LandingService = class LandingService {
  constructor(http) {
    this.http = http;
  }
  createLandingContact(formBody) {
    return this.http.post('/bestinform/createLandingContact', formBody);
  }
  updateLandingSubscription(formBody) {
    return this.http.put('/bestinform/updateLandingSubscription', formBody);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
LandingService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], LandingService);


/***/ }),

/***/ 18832:
/*!********************************************************************************!*\
  !*** ./src/app/standalone-components/user-settings/user-settings.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsComponent": () => (/* binding */ UserSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-settings.component.html?ngResource */ 54967);
/* harmony import */ var _user_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-settings.component.scss?ngResource */ 18841);
/* harmony import */ var _user_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/_services/localStorage.service */ 72538);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);








// import {MatFormFieldModule} from "@angular/material/form-field";

// import {MatSelectModule} from "@angular/material/select";
// import {MatInputModule} from "@angular/material/input";








let UserSettingsComponent = class UserSettingsComponent {
  constructor(route, router, fb, toastService, userService, localStorage) {
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.toastService = toastService;
    this.userService = userService;
    this.localStorage = localStorage;
    this.form = this.fb.group({
      language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      distanceUnitMeasure: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      temperatureUnitMeasure: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      enablePushNotifications: [null],
      // enableLocation: [null],
      enableSharedResource: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      // acceptTermsAndConditions: [null, Validators.requiredTrue],
      // twoFactorAuthentication:[null],
      colorMode: [null]
    });
  }
  getCurrentSettings() {
    this.userService.getCurrentSetting().subscribe(resp => {
      console.log('setari', resp);
      this.form.patchValue(resp);
    });
  }
  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(res => {
      console.log('user', res);
      this.currentUser = res;
      this.getCurrentSettings();
    });
  }
  ngOnInit() {
    this.getCurrentUser();
  }
  submit() {
    if (this.form.valid) {
      this.userService.updateCurrentSetting(this.form.value).subscribe(resp => {
        console.log('TRimis setari');
        console.log(resp);
        if (resp.success) {
          this.toastService.showToast('Succes', 'Setările au fost modificate! Site-ul se va actualiza cu noile setări.', 'success');
          this.localStorage.set('langFromStorage', this.form.value.language);
          this.localStorage.set('colorMode', this.form.value.colorMode);
          setTimeout(() => {
            location.reload();
          }, 3000);
        } else {
          this.toastService.showToast('Eroare', 'Eroare de la server!', 'error');
        }
      }, () => {
        this.toastService.showToast('Eroare', 'Eroare de la server!', 'error');
      });
    } else {
      this.toastService.showToast('Eroare', 'Trebuie să completați toate câmpurile obligatorii și să acceptați termenii și condițiile', 'error');
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService
  }];
};
UserSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-user-settings',
  template: _user_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLegacyFormFieldModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatLegacyCheckboxModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_13__.MatLegacyInputModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_14__.MatLegacySelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggleModule, _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_4__.DashboardHeaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule],
  styles: [(_user_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserSettingsComponent);


/***/ }),

/***/ 18841:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/user-settings/user-settings.component.scss?ngResource ***!
  \*********************************************************************************************/
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

/***/ 54967:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/user-settings/user-settings.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid client-general-box mb-5\">\n    <div  class=\"container\" >\n        <app-dashboard-header pageTitleOne=\"{{'SETTINGS' | translate}}\"\n                              (buttonCall)=\"submit()\"\n                              [buttonBackRoute]=\" currentUser?.roles.includes('ROLE_CLIENT') ? '../../dashboard/profile' : '../dashboard'\">\n        </app-dashboard-header>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form [formGroup]=\"form\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h4 class=\"py-3\">\n                                {{'GENERAL-SETTINGS' | translate}}\n                            </h4>\n                            <div class=\"px-3\">\n                                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                                    <mat-label>{{\"GENERAL.LANGUAGE\" | translate}}</mat-label>\n                                    <mat-select formControlName=\"language\">\n                                        <mat-option value=\"ro\">{{\"GENERAL.RO\" | translate}}</mat-option>\n                                        <mat-option value=\"en\">{{\"GENERAL.EN\" | translate}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                                    <mat-label>{{\"GENERAL.DISTANCE-UNIT\" | translate}}</mat-label>\n                                    <mat-select formControlName=\"distanceUnitMeasure\">\n                                        <mat-option value=\"km\">km</mat-option>\n                                        <mat-option value=\"miles\">mile</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                                    <mat-label>{{\"GENERAL.TEMP-UNIT\" | translate}}</mat-label>\n                                    <mat-select formControlName=\"temperatureUnitMeasure\">\n                                        <mat-option value=\"celsius\">Celsius</mat-option>\n                                        <mat-option value=\"fahrenheit\">Fahrenheit</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                                    <mat-label>{{\"GENERAL.CURRENCY\" | translate}}</mat-label>\n                                    <mat-select formControlName=\"currency\">\n                                        <mat-option value=\"EUR\">EURO €</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                                <mat-form-field appearance=\"legacy\" class=\"w-100\" *ngIf=\"currentUser?.roles.includes('ROLE_CLIENT')\">\n                                    <mat-label>{{\"GENERAL.EXP-PART\" | translate}}</mat-label>\n                                    <mat-select formControlName=\"enableSharedResource\">\n                                        <mat-option [value]=\"false\">NU</mat-option>\n                                        <mat-option [value]=\"true\">DA</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                                    <mat-label>Color Mode</mat-label>\n                                    <mat-select formControlName=\"colorMode\">\n                                        <mat-option [value]=\"'light'\">Day</mat-option>\n                                        <mat-option [value]=\"'dark'\">Night</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <h4 class=\"py-3\">{{'APP-SETTINGS' | translate}}\n                            </h4>\n                            <div class=\"px-3\">\n                                <mat-slide-toggle formControlName=\"enablePushNotifications\" class=\"w-100\" *ngIf=\"currentUser?.roles.includes('ROLE_CLIENT')\">{{\"GENERAL.PUSH-NOT\" | translate}}</mat-slide-toggle>\n<!--                                <mat-slide-toggle formControlName=\"enableLocation\" class=\"w-100\" *ngIf=\"currentUser?.roles.includes('ROLE_CLIENT')\">{{\"GENERAL.DETECT-LOCATION\" | translate}}</mat-slide-toggle>-->\n<!--                                <mat-slide-toggle formControlName=\"acceptTermsAndConditions\" class=\"w-100\">{{\"GENERAL.TERMS-COND\" | translate}}</mat-slide-toggle>-->\n<!--                                <mat-slide-toggle formControlName=\"twoFactorAuthentication\" class=\"w-100\">{{\"GENERAL.2FA\" | translate}}</mat-slide-toggle>-->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=common.js.map