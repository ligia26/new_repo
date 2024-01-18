(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_settings_settings_module_ts"],{

/***/ 56867:
/*!******************************************************!*\
  !*** ./src/app/features/settings/settings.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-settings/system-settings.component */ 28769);
/* harmony import */ var src_app_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/_services/user-roles.guard */ 16070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);









const routes = [{
  path: 'system-settings',
  component: _system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_0__.SystemSettingsComponent,
  canActivate: [src_app_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_1__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_STAFF', 'ROLE_SUPER_ADMIN']
  }
}];
let SettingsModule = class SettingsModule {};
SettingsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_0__.SystemSettingsComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_2__.DashboardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
})], SettingsModule);


/***/ }),

/***/ 28769:
/*!********************************************************************************!*\
  !*** ./src/app/features/settings/system-settings/system-settings.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemSettingsComponent": () => (/* binding */ SystemSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _system_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-settings.component.html?ngResource */ 28335);
/* harmony import */ var _system_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-settings.component.scss?ngResource */ 70045);
/* harmony import */ var _system_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_system_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_domains_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/domains.service */ 58820);
/* harmony import */ var src_app_shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/modalmedia.service */ 34864);
/* harmony import */ var src_app_shared_services_resources_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/resources.service */ 3145);
/* harmony import */ var src_app_shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/system-settings.service */ 42912);
/* harmony import */ var src_app_shared_services_templates_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_services/templates.service */ 71453);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);















let SystemSettingsComponent = class SystemSettingsComponent {
  constructor(settingsService, fb, activatedRoute, router, toastService, resourcesService, modalMediaService, modalService, domainService, templatesService) {
    this.settingsService = settingsService;
    this.fb = fb;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.toastService = toastService;
    this.resourcesService = resourcesService;
    this.modalMediaService = modalMediaService;
    this.modalService = modalService;
    this.domainService = domainService;
    this.templatesService = templatesService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    //cat de atribute
    this.categoriesList = [];
    this.resourceCategoryList = [];
    this.resourceTypesList = [];
    this.attributesList = [];
    this.domainList = [];
    this.itineraryTransportResourceTypes = [];
    this.itineraryAccommodationResourceTypes = [];
    this.itineraryDayActivityResourceTypes = [];
    this.itineraryEatAndDrinksResourceTypes = [];
    this.itineraryEveningActivityResourceTypes = [];
  }
  ngOnInit() {
    console.log('UNDEFINED?', this.systemSettingsData);
    this.initList();
    this.initForm();
  }
  initForm() {
    this.systemSettingsForm = this.fb.group({
      fitnessForum: this.fb.group({
        enable: [null],
        image: [null],
        nameRo: ['', [this.noWhitespaceValidator]],
        nameEn: ['', [this.noWhitespaceValidator]]
      }),
      medicalForum: this.fb.group({
        enable: [null],
        image: [null],
        nameRo: ['', [this.noWhitespaceValidator]],
        nameEn: ['', [this.noWhitespaceValidator]]
      }),
      nutritionForum: this.fb.group({
        enable: [null],
        image: [null],
        nameRo: ['', [this.noWhitespaceValidator]],
        nameEn: ['', [this.noWhitespaceValidator]]
      }),
      nutritionForumCategory: [''],
      fitnessForumCategory: [''],
      //trips & itineraries
      trip: this.fb.group({
        image: [null],
        enable: [null],
        nameRo: ['', [this.noWhitespaceValidator]],
        nameEn: ['', [this.noWhitespaceValidator]]
      }),
      tripOptions: this.fb.group({
        configuratorItinerary: this.fb.group({
          image: [null],
          enable: [null],
          nameRo: ['', [this.noWhitespaceValidator]],
          nameEn: ['', [this.noWhitespaceValidator]]
        }),
        itinerary: this.fb.group({
          image: [null],
          enable: [null],
          nameRo: ['', [this.noWhitespaceValidator]],
          nameEn: ['', [this.noWhitespaceValidator]]
        }),
        holidayOffer: this.fb.group({
          image: [null],
          enable: [null],
          nameRo: ['', [this.noWhitespaceValidator]],
          nameEn: ['', [this.noWhitespaceValidator]]
        })
      }),
      journeyThemeCategoryId: [''],
      typeOfDestinationCategoryId: [''],
      typeOfJourneyCategoryId: [''],
      roadTripAttributeId: [''],
      itineraryTransportResourceTypes: [['']],
      itineraryAccommodationResourceTypes: [['']],
      itineraryEatAndDrinksResourceTypes: [['']],
      itineraryDayActivityResourceTypes: [['']],
      itineraryEveningActivityResourceTypes: [['']],
      //jobs
      // job: this.fb.group({
      //   image: [null],
      //   enable: [null],
      //   nameRo: ['',[this.noWhitespaceValidator]],
      //   nameEn: ['' ,[this.noWhitespaceValidator]],
      // }),
      //job option
      jobOptions: this.fb.group({
        myCv: this.fb.group({
          image: [null],
          enable: [null],
          nameRo: ['', [this.noWhitespaceValidator]],
          nameEn: ['', [this.noWhitespaceValidator]]
        }),
        jobOffers: this.fb.group({
          image: [null],
          enable: [null],
          nameRo: ['', [this.noWhitespaceValidator]],
          nameEn: ['', [this.noWhitespaceValidator]]
        }),
        candidates: this.fb.group({
          image: [null],
          enable: [null],
          nameRo: ['', [this.noWhitespaceValidator]],
          nameEn: ['', [this.noWhitespaceValidator]]
        }),
        myJobOffers: this.fb.group({
          image: [null],
          enable: [null],
          nameRo: ['', [this.noWhitespaceValidator]],
          nameEn: ['', [this.noWhitespaceValidator]]
        })
      }),
      //shared exp
      sharedExperience: this.fb.group({
        image: [null],
        enable: [null],
        nameRo: ['', [this.noWhitespaceValidator]],
        nameEn: ['', [this.noWhitespaceValidator]]
      }),
      //Special Resources Category
      culinaryPreferencesId: [''],
      eventCategoryId: [''],
      transportCategoryId: [''],
      //others
      mode: [''],
      //payment Settings
      percentageLoyaltyPointsSpend: [0],
      percentageLoyaltyPointsGain: [0],
      percentageCommission: [0],
      //billing
      smartBillEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]],
      smartBillToken: [''],
      smartBillFiscalCode: ['']
    }); //systemSettingsForm
  }

  initList() {
    //lists for select
    this.getDomainList();
    this.getCategories();
    this.getAttributes();
    this.getAllResourceTypes();
    // this.getResourceTypes();
    // this.getItineraryResourceTypeWithName();
    //media
    this.listenToMedia();
    this.getSystemSettings();
  }
  getAttributes() {
    this.templatesService.listAttributesFiltered(0, -1, '', '', '', {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        // TODO: nu cred ca requestul asta face ce trebuie, de intrebat - semnat Bogdanel
        this.attributesList = res.content;
      }
    });
  }
  getAllResourceTypes() {
    this.rentalBookingResourceTypes$ = this.settingsService.getRentalBookingResourceTypes();
    this.menuResourceTypes$ = this.settingsService.getMenuResourceTypes();
    this.ticketBookingResourceTypes$ = this.settingsService.getTicketBookingResourceTypes();
  }
  //get itinerary with name list
  getItineraryResourceTypeWithName() {
    this.settingsService.getItineraryResourceTypeWithName().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.itineraryTransportResourceTypes = res.itineraryTransportResourceTypes;
        this.itineraryAccommodationResourceTypes = res.itineraryAccommodationResourceTypes;
        this.itineraryEatAndDrinksResourceTypes = res.itineraryEatAndDrinksResourceTypes;
        this.itineraryDayActivityResourceTypes = res.itineraryDayActivityResourceTypes;
        this.itineraryEveningActivityResourceTypes = res.itineraryEveningActivityResourceTypes;
      }
    });
  }
  //get existent data, populate form
  getSystemSettings() {
    this.settingsService.getSystemSetting().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: systemData => {
        this.systemSettingsData = systemData;
        console.log('SETARI SISTEM', this.systemSettingsData);
        this.systemSettingsForm.patchValue(this.systemSettingsData);
      }
    });
  }
  //get domain list for category list
  getDomainList() {
    this.domainService.getListOfDomains().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: domains => {
        console.log(domains);
        this.domainList = domains;
        domains.forEach(domain => {
          switch (domain.key) {
            case "travel":
              this.travelDomId = domain.id;
              break;
            case "healthcare":
              this.healthDomId = domain.id;
              break;
            case " culture":
              this.cultureDomId = domain.id;
              break;
            case "education":
              this.educationDomId = domain.id;
              break;
            case "jobs":
              this.jobsDomId = domain.id;
              break;
          }
        });
        this.getResourcesCategories();
      }
    });
  }
  //get resources cat for forum categories
  getResourcesCategories() {
    this.resourcesService.listCategoryFiltered(0, -1, '', '', {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: resCategory => {
        this.resourceCategoryList = resCategory.content;
      }
    });
  }
  //get attributes category
  getCategories() {
    const filter = {
      // domainId: "idDomain"
    };
    this.templatesService.getCategoryList(0, -1, '', '', filter).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.categoriesList = res.content;
      }
    });
  }
  getResourceTypes() {
    this.resourcesService.getAllResourceTypes().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: resTypes => {
        this.resourceTypesList = resTypes;
        console.log('lista de tipuri de resurse', this.resourceTypesList);
      }
    });
  }
  //get media
  listenToMedia() {
    this.modalMediaService.currentImagesArray.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe(array => {
      if (array.length) {
        if (array?.[0]?.for === 'medicalForum-featuredImg') {
          console.log('test 1', array[0].selectedMedia);
          this.systemSettingsForm.get('medicalForum.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'fitnessForum-featuredImg') {
          this.systemSettingsForm.get('fitnessForum.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'nutritionForum-featuredImg') {
          this.systemSettingsForm.get('nutritionForum.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'trip-featuredImg') {
          this.systemSettingsForm.get('trip.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'configuratorItinerary-featuredImg') {
          this.systemSettingsForm.get('tripOptions.configuratorItinerary.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'itinerary-featuredImg') {
          this.systemSettingsForm.get('tripOptions.itinerary.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'holidayOffer-featuredImg') {
          this.systemSettingsForm.get('tripOptions.holidayOffer.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'job-featuredImg') {
          // this.systemSettingsForm.get('job.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'myCv-featuredImg') {
          this.systemSettingsForm.get('jobOptions.myCv.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'jobOffers-featuredImg') {
          this.systemSettingsForm.get('jobOptions.jobOffers.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'candidates-featuredImg') {
          this.systemSettingsForm.get('jobOptions.candidates.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'myJobOffers-featuredImg') {
          this.systemSettingsForm.get('jobOptions.myJobOffers.image').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for === 'sharedExperience-featuredImg') {
          this.systemSettingsForm.get('sharedExperience.image').setValue(array[0].selectedMedia);
        }
      }
    });
  }
  //media modal
  openMedia(content) {
    // this.modalMediaService.sendImagesToService([this.domainImagesForm.value]);
    this.modalService.open(content, {
      centered: true,
      size: 'xl'
    });
  }
  updateSystemSettings(objForm) {
    this.settingsService.updateSystemSetting(objForm).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.toastService.showToast("Success", "Setarile sistemului au fost modificate cu succes!", "success");
        this.router.navigate(['../../dashboard'], {
          relativeTo: this.activatedRoute
        });
      },
      error: err => {
        console.log(err);
        this.toastService.showToast("Error", "Setarile sistemului nu au fost modificate!", "error");
      }
    });
  }
  //no white space validator
  noWhitespaceValidator(control) {
    const isWhitespace = (control && control.value && control.value.toString() || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {
      'whitespace': true
    };
  }
  saveSettings() {
    console.log('DE TRIMIS', this.systemSettingsForm.value);
    if (this.systemSettingsForm.valid) {
      this.updateSystemSettings(this.systemSettingsForm.value);
    } else {
      // Mark all inputs as touched
      this.systemSettingsForm.markAllAsTouched();
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_5__.SystemSettingsService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService
  }, {
    type: src_app_shared_services_resources_service__WEBPACK_IMPORTED_MODULE_4__.ResourcesService
  }, {
    type: src_app_shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_3__.ModalMediaService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal
  }, {
    type: src_app_shared_services_domains_service__WEBPACK_IMPORTED_MODULE_2__.DomainsService
  }, {
    type: src_app_shared_services_templates_service__WEBPACK_IMPORTED_MODULE_6__.TemplatesService
  }];
};
SystemSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-system-settings',
  template: _system_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [src_app_shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_3__.ModalMediaService, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
  styles: [(_system_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SystemSettingsComponent);


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

/***/ 71453:
/*!*******************************************************!*\
  !*** ./src/app/shared/_services/templates.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesService": () => (/* binding */ TemplatesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let TemplatesService = class TemplatesService {
  constructor(http) {
    this.http = http;
  }
  // --------------------------------------TEMPLATES---------------------------------
  listResourceTemplateFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listResourceTemplateFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  getCategoryById(id) {
    const idArray = [id];
    return this.http.post('/bestinform/getResourceCategories', idArray);
  }
  getResourceTypeById(id) {
    const idArray = [id];
    return this.http.get('/bestinform/getResourceTypeById?resourceTypeId=' + id);
  }
  addTemplate(template) {
    return this.http.post('/bestinform/createResourceTemplate', template);
  }
  getTemplateById(id) {
    return this.http.get('/bestinform/getResourceTemplateById?resourceTemplateId=' + id);
  }
  deleteTemplate(id) {
    return this.http.delete('/bestinform/deleteResourceTemplate?resourceTemplateId=' + id);
  }
  updateTemplate(id, template) {
    return this.http.put('/bestinform/updateResourceTemplate?resourceTemplateId=' + id, template);
  }
  existsResourceForTemplate(resourceTemplateId) {
    return this.http.get('/bestinform/existsResourceForTemplate?resourceTemplateId=' + resourceTemplateId);
  }
  checkResourceTypeForTemplate(body, resourceTemplateId) {
    return this.http.post('/bestinform/checkResourceTypeForTemplate?resourceTemplateId=' + resourceTemplateId, body);
  }
  // --------------------------------ATTRIBUTE CATEG----------------------------------
  getCategoryList(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/getCategoryList?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  getAttributeCategoryById(id) {
    return this.http.get('/bestinform/getCategoryById?categoryId=' + id);
  }
  updateAttributeCategory(id, category) {
    return this.http.put('/bestinform/updateCategory?categoryId=' + id, category);
  }
  addAttributeCategory(category) {
    return this.http.post('/bestinform/addCategory', category);
  }
  deleteAttributeCategory(id) {
    return this.http.delete('/bestinform/deleteCategory?categoryId=' + id);
  }
  // --------------------------------- ATTRIBUTES ------------------------------------
  listAttributesFiltered(page, size, sort, sort2, dir, filters) {
    return this.http.post('/bestinform/listAttributesFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&sort2=' + sort2 + '&dir=' + dir, filters);
  }
  getMaxOrderByCategory(categoryId) {
    return this.http.get('/bestinform/getAttributeMaxOrderByCategoryId?categoryId=' + categoryId);
  }
  changeAttributeOrder(attributeId, order) {
    return this.http.put('/bestinform/changeAttributeOrder?attributeId=' + attributeId + '&order=' + order, {});
  }
  getAttributeById(attributeId) {
    return this.http.get('/bestinform/getAttributeById?attributeId=' + attributeId);
  }
  addAttribute(attribute) {
    return this.http.post('/bestinform/addAttribute', attribute);
  }
  updateAttribute(attributeId, attribute) {
    return this.http.put('/bestinform/updateAttribute?attributeId=' + attributeId, attribute);
  }
  deleteAttribute(attributeId) {
    return this.http.delete('/bestinform/deleteAttribute?attributeId=' + attributeId);
  }
  getResourceTypes() {
    return this.http.get('/bestinform/getAllResourceTypes');
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
TemplatesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], TemplatesService);


/***/ }),

/***/ 70045:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/settings/system-settings/system-settings.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content {\n  background-color: var(--primary-background);\n  margin-bottom: 12px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 12px;\n}\n\nh3 {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: 0.1px;\n  color: #24398A;\n  margin-top: 30px;\n}\n\nh4 {\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: 0.1px;\n  color: #24398A;\n  margin-top: 24px;\n}\n\nh5 {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 140%;\n  letter-spacing: -0.32px;\n  color: #231F20;\n}\n\n.upload-image-col .thumbnail-button {\n  width: 100%;\n  height: 350px;\n  background-color: rgba(36, 57, 138, 0.04);\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n}\n.upload-image-col .thumbnail-button i {\n  font-size: 64px;\n}\n.upload-image-col .thumbnail-button span {\n  font-size: 16px;\n  font-weight: 400;\n}\n.upload-image-col .img-thumbnail {\n  height: 350px;\n  max-height: 350px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.upload-image-col .img-thumbnail img {\n  height: 348px;\n  max-height: 348px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n\n.gallery-image-container {\n  position: relative;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n  height: 150px;\n  width: 100%;\n}\n.gallery-image-container img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.btn-thumbnail {\n  right: 10px;\n  top: 10px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: var(--primary-background);\n  background: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n}\n.btn-thumbnail i {\n  color: var(--primary-background);\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/settings/system-settings/system-settings.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,mBAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;AAkBJ;;AAdA;EACI,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,cDhBY;ECiBZ,gBAAA;AAiBJ;;AAbA;EACI,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,cDzBY;EC0BZ,gBAAA;AAgBJ;;AAdA;EACI,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;EACA,cD5BQ;AC6CZ;;AAXI;EACE,WAAA;EACA,aAAA;EACA,yCAAA;EACA,yCAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AAcN;AAZM;EACE,eAAA;AAcR;AAXM;EACE,eAAA;EACA,gBAAA;AAaR;AATI;EACE,aAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AAWN;AATM;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AAWR;;AALE;EACE,kBAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;AAQJ;AANI;EACE,YAAA;EACA,WAAA;EACA,iBAAA;EACA,uBAAA;AAQN;;AAJE;EACE,WAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,gCAAA;EACA,mCAAA;EACA,mBAAA;AAOJ;AANI;EACE,gCAAA;AAQN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.content{\n    background-color: var(--primary-background);\n    margin-bottom:12px;\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n    overflow: hidden;\n    padding: 12px;\n}\n\n//section name\nh3{\n    font-size: 24px;\n    font-weight: 600;\n    letter-spacing: 0.1px;\n    color: $primary-color ;\n    margin-top: 30px;\n\n}\n//title\nh4{\n    font-size: 20px;\n    font-weight: 600;\n    letter-spacing: 0.1px;\n    color: $primary-color ;\n    margin-top: 24px;\n}//subtitle\nh5{\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 140%;\n    letter-spacing: -0.32px;\n    color: $paragraph;\n}\n\n//featured image\n.upload-image-col{\n\n    .thumbnail-button {\n      width: 100%;\n      height: 350px;\n      background-color: rgba($primary-color, 0.04);\n      border: 2px solid rgba($primary-color, 0.08);\n      border-radius: 8px;\n      color: rgba($primary-color, 0.08);\n      font-size: 24px;\n      font-weight: 600;\n\n      i {\n        font-size: 64px;\n      }\n\n      span {\n        font-size: 16px;\n        font-weight: 400;\n      }\n    }\n\n    .img-thumbnail {\n      height: 350px;\n      max-height: 350px;\n      border: 1px solid rgba($primary-color, 0.16);\n      border-radius: 8px;\n      position: relative;\n      padding: 0;\n\n      img {\n        height: 348px;\n        max-height: 348px;\n        border-radius: 8px;\n        object-fit: cover;\n        object-position: center;\n      }\n    }\n  }\n\n  //gallery\n  .gallery-image-container {\n    position: relative;\n    border: 1px solid rgba($primary-color, 0.16);\n    border-radius: 8px;\n    overflow: hidden;\n    height: 150px;\n    width: 100%;\n\n    img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n\n  .btn-thumbnail {\n    right:10px;\n    top: 10px;\n    width: 2rem;\n    height: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    color: var(--primary-background);\n    background: rgba($primary-color, 0.16);\n    border-radius: 100%;\n    i{\n      color:var(--primary-background);\n    }\n  }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 28335:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/settings/system-settings/system-settings.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"Editează setări de sistem\"\n                          [buttonBackRoute]=\"'../../dashboard'\"\n                          (buttonCall)=\"saveSettings()\">\n    </app-dashboard-header>\n\n    <div class=\"content\">\n        <div [formGroup]=\"systemSettingsForm\" class=\"my-4\">\n            <h3>Forums</h3>\n                <div formGroupName=\"medicalForum\">\n                    <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                        <h4>Medical Forum</h4>\n                        <!--Enable-->\n                        <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                        </mat-slide-toggle>\n                    </div>\n                    <div class=\"d-flex align-items-center row\">\n                    <!--Name Ro-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba română)</mat-label>\n                        <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('medicalForum.nameRo').value\"\n                              (click)=\"systemSettingsForm.get('medicalForum.nameRo').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('medicalForum.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n\n                    <!--Name En-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba engleză)</mat-label>\n                        <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('medicalForum.nameEn').value\"\n                        (click)=\"systemSettingsForm.get('medicalForum.nameEn').setValue('')\"\n                        role=\"button\" matSuffix>clear</mat-icon>\n                        <mat-error *ngIf=\"systemSettingsForm.get('medicalForum.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                        </mat-error>\n                    </mat-form-field>\n                    </div>\n\n                    <!--Featured medical image-->\n                    <div class=\"thumbnail\">\n                        <h5>Medical forum featured image</h5>\n                        <div class=\"col-12 upload-image-col my-2\">\n\n                            <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!systemSettingsForm.get('medicalForum.image').value?.filePath\"\n                                    class=\"thumbnail-button\n                                        d-flex flex-column align-items-center justify-content-center\"\n                                    type=\"button\"\n                                    (click)=\"openMedia(medicalFeaturedImageModal)\">\n                                <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                            </button>\n\n                            <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"systemSettingsForm.get('medicalForum.image').value?.filePath\" class=\"img-thumbnail\">\n                                <img class=\"img-fluid w-100\"\n                                     [src]=\"systemSettingsForm.get('medicalForum.image').value?.filePath\">\n                                <button\n                                        (click)=\"systemSettingsForm.get('medicalForum.image').setValue(null)\"\n                                        type=\"button\"\n                                        id=\"btnRemoveItineraryFeaturedImg\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                            <ng-template #medicalFeaturedImageModal let-modal>\n                                <app-choose-media\n                                [category]=\"'image'\"\n                                [multipleSelect]=\"false\"\n                                [for]=\"'medicalForum-featuredImg'\"\n                                [modalRef]=\"modal\">\n                                </app-choose-media>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n\n                <div formGroupName=\"fitnessForum\">\n                    <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                        <h4>Fitness Forum</h4>\n                        <!--Enable-->\n                        <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                        </mat-slide-toggle>\n                    </div>\n                    <div class=\"d-flex align-items-center row\">\n                    <!--Name Ro-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba română)</mat-label>\n                        <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('fitnessForum.nameRo').value\"\n                              (click)=\"systemSettingsForm.get('fitnessForum.nameRo').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                        <mat-error *ngIf=\"systemSettingsForm.get('fitnessForum.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                        </mat-error>\n                    </mat-form-field>\n\n                    <!--Name En-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba engleză)</mat-label>\n                        <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('fitnessForum.nameEn').value\"\n                              (click)=\"systemSettingsForm.get('fitnessForum.nameEn').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('fitnessForum.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n                    </div>\n\n                    <!--Featured medical image-->\n                    <div class=\"thumbnail\">\n                        <h5>Fitness forum featured image</h5>\n                        <div class=\"col-12 upload-image-col my-2\">\n\n                            <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!systemSettingsForm.get('fitnessForum.image').value?.filePath\"\n                                    class=\"thumbnail-button\n                                        d-flex flex-column align-items-center justify-content-center\"\n                                    type=\"button\"\n                                    (click)=\"openMedia(fitnessFeaturedImageModal)\">\n                                <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                            </button>\n\n                            <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"systemSettingsForm.get('fitnessForum.image')?.value?.filePath\" class=\"img-thumbnail\">\n                                <img class=\"img-fluid w-100\"\n                                    [src]=\"systemSettingsForm.get('fitnessForum.image').value?.filePath\" alt=\"thumbnail\">\n                                <button\n                                        (click)=\"systemSettingsForm.get('fitnessForum.image').setValue(null)\"\n                                        type=\"button\"\n                                        id=\"btnRemoveItineraryFeaturedImg\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                            <ng-template #fitnessFeaturedImageModal let-modal>\n                                <app-choose-media\n                                [category]=\"'image'\"\n                                [multipleSelect]=\"false\"\n                                [for]=\"'fitnessForum-featuredImg'\"\n                                [modalRef]=\"modal\">\n                                </app-choose-media>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n\n                <!--fitness Forum Category select-->\n                <mat-form-field appearance=\"standard\" class=\"col-12\">\n                    <mat-label>Categorie Forum Fitness</mat-label>\n                    <mat-select formControlName=\"fitnessForumCategory\">\n                        <mat-option *ngFor=\"let category of resourceCategoryList\" [value]=\"category.id\">\n                        {{category.nameEn}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <div formGroupName=\"nutritionForum\">\n                    <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                        <h4>Nutrition Forum</h4>\n                        <!--Enable-->\n                        <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                        </mat-slide-toggle>\n                    </div>\n                    <div class=\"d-flex align-items-center row\">\n                    <!--Name Ro-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba română)</mat-label>\n                        <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('nutritionForum.nameRo').value\"\n                              (click)=\"systemSettingsForm.get('nutritionForum.nameRo').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                        <mat-error *ngIf=\"systemSettingsForm.get('nutritionForum.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n\n                    <!--Name En-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba engleză)</mat-label>\n                        <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('nutritionForum.nameEn').value\"\n                              (click)=\"systemSettingsForm.get('nutritionForum.nameEn').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('nutritionForum.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n                    </div>\n\n                    <div class=\"thumbnail\">\n                        <h5>Nutrition forum featured image</h5>\n                        <div class=\"col-12 upload-image-col my-2\">\n\n                            <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!systemSettingsForm.get('nutritionForum.image').value?.filePath\"\n                                    class=\"thumbnail-button\n                                        d-flex flex-column align-items-center justify-content-center\"\n                                    type=\"button\"\n                                    (click)=\"openMedia(nutritionFeaturedImageModal)\">\n                                <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                            </button>\n\n                            <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"systemSettingsForm.get('nutritionForum.image').value?.filePath\" class=\"img-thumbnail\">\n                                <img class=\"img-fluid w-100\"\n                                    [src]=\"systemSettingsForm.get('nutritionForum.image').value?.filePath\" alt=\"thumbnail\">\n                                <button\n                                        (click)=\"systemSettingsForm.get('nutritionForum.image').setValue(null)\"\n                                        type=\"button\"\n                                        id=\"btnRemoveItineraryFeaturedImg\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                            <ng-template #nutritionFeaturedImageModal let-modal>\n                                <app-choose-media\n                                [category]=\"'image'\"\n                                [multipleSelect]=\"false\"\n                                [for]=\"'nutritionForum-featuredImg'\"\n                                [modalRef]=\"modal\">\n                                </app-choose-media>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n\n                <!--nutrition Forum Category select-->\n                <mat-form-field appearance=\"standard\" class=\"col-12\">\n                    <mat-label>Categorie Forum Nutriție</mat-label>\n                    <mat-select formControlName=\"nutritionForumCategory\">\n                      <mat-option *ngFor=\"let category of resourceCategoryList\" [value]=\"category.id\">\n                        {{category.nameEn}}\n                      </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n\n\n            <h3>Trips & Itineraries</h3>\n            <div class=\"row\">\n                <!--journey Theme Category select-->\n                <mat-form-field appearance=\"standard\" class=\"col-4\">\n                    <mat-label>Tema călătoriei</mat-label>\n                    <mat-select formControlName=\"journeyThemeCategoryId\">\n                    <mat-option *ngFor=\"let category of categoriesList\" [value]=\"category.id\">\n                        {{category.name}}\n                    </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <!--type Of Destination Category select-->\n                <mat-form-field appearance=\"standard\" class=\"col-4\">\n                    <mat-label>Tipul destinației</mat-label>\n                    <mat-select formControlName=\"typeOfDestinationCategoryId\">\n                        <mat-option *ngFor=\"let category of categoriesList\" [value]=\"category.id\">\n                        {{category.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <!--type Of journey Category select-->\n                <mat-form-field appearance=\"standard\" class=\"col-4\">\n                    <mat-label>Tipul călătoriei</mat-label>\n                    <mat-select formControlName=\"typeOfJourneyCategoryId\">\n                        <mat-option *ngFor=\"let category of categoriesList\" [value]=\"category.id\">\n                        {{category.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n\n\n            <div formGroupName=\"trip\">\n                <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                    <h4>Trip</h4>\n                    <!--Enable-->\n                    <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                    </mat-slide-toggle>\n                </div>\n                <div class=\"d-flex align-items-center row\">\n                <!--Name Ro-->\n                <mat-form-field appearance=\"standard\" class=\"col-6\">\n                    <mat-label>Denumire (limba română)</mat-label>\n                    <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                    <mat-icon *ngIf=\"systemSettingsForm.get('trip.nameRo').value\"\n                              (click)=\"systemSettingsForm.get('trip.nameRo').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('trip.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                </mat-form-field>\n\n                <!--Name En-->\n                <mat-form-field appearance=\"standard\" class=\"col-6\">\n                    <mat-label>Denumire (limba engleză)</mat-label>\n                    <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                    <mat-icon *ngIf=\"systemSettingsForm.get('trip.nameEn').value\"\n                              (click)=\"systemSettingsForm.get('trip.nameEn').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('trip.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                </mat-form-field>\n                </div>\n\n                <div class=\"thumbnail\">\n                    <h5>Trip featured image</h5>\n                    <div class=\"col-12 upload-image-col my-2\">\n\n                        <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                        <button *ngIf=\"!systemSettingsForm.get('trip.image').value?.filePath\"\n                                class=\"thumbnail-button\n                                    d-flex flex-column align-items-center justify-content-center\"\n                                type=\"button\"\n                                (click)=\"openMedia(tripFeaturedImageModal)\">\n                            <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                        </button>\n\n                        <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                        <div *ngIf=\"systemSettingsForm.get('trip.image').value?.filePath\" class=\"img-thumbnail\">\n                            <img class=\"img-fluid w-100\"\n                                [src]=\"systemSettingsForm.get('trip.image').value?.filePath\" alt=\"thumbnail\">\n                            <button\n                                    (click)=\"systemSettingsForm.get('trip.image').setValue(null)\"\n                                    type=\"button\"\n                                    id=\"btnRemoveItineraryFeaturedImg\"\n                                    class=\"btn-thumbnail position-absolute\">\n                                <i class=\"fas fa-times\"></i>\n                            </button>\n                        </div>\n                        <ng-template #tripFeaturedImageModal let-modal>\n                            <app-choose-media\n                            [category]=\"'image'\"\n                            [multipleSelect]=\"false\"\n                            [for]=\"'trip-featuredImg'\"\n                            [modalRef]=\"modal\">\n                            </app-choose-media>\n                        </ng-template>\n                    </div>\n                </div>\n            </div>\n\n            <!--Trip options-->\n            <div formGroupName=\"tripOptions\">\n                <h4>Optiuni trip</h4>\n                <!-- configuratorItinerary-->\n                <div formGroupName=\"configuratorItinerary\">\n                    <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                        <h4 class=\"mt-4\">Configurator itinerariu</h4>\n                        <!--Enable-->\n                        <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                        </mat-slide-toggle>\n                    </div>\n                    <div class=\"d-flex align-items-center row\">\n                    <!--Name Ro-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba română)</mat-label>\n                        <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('tripOptions.configuratorItinerary.nameRo').value\"\n                              (click)=\"systemSettingsForm.get('tripOptions.configuratorItinerary.nameRo').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('tripOptions.configuratorItinerary.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n\n                    <!--Name En-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba engleză)</mat-label>\n                        <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('tripOptions.configuratorItinerary.nameEn').value\"\n                              (click)=\"systemSettingsForm.get('tripOptions.configuratorItinerary.nameEn').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('tripOptions.configuratorItinerary.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n                    </div>\n\n                    <div class=\"thumbnail\">\n                        <h5>Configurator itinerary featured image</h5>\n                        <div class=\"col-12 upload-image-col my-2\">\n\n                            <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!systemSettingsForm.get('tripOptions.configuratorItinerary.image')?.value?.filePath\"\n                                    class=\"thumbnail-button\n                                        d-flex flex-column align-items-center justify-content-center\"\n                                    type=\"button\"\n                                    (click)=\"openMedia(configuratorItineraryFeaturedImageModal)\">\n                                <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                            </button>\n\n                            <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"systemSettingsForm.get('tripOptions.configuratorItinerary.image').value?.filePath\" class=\"img-thumbnail\">\n                                <img class=\"img-fluid w-100\"\n                                    [src]=\"systemSettingsForm.get('tripOptions.configuratorItinerary.image').value?.filePath\" alt=\"thumbnail\">\n                                <button\n                                        (click)=\"systemSettingsForm.get('tripOptions.configuratorItinerary.image').setValue(null)\"\n                                        type=\"button\"\n                                        id=\"btnRemoveItineraryFeaturedImg\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                            <ng-template #configuratorItineraryFeaturedImageModal let-modal>\n                                <app-choose-media\n                                [category]=\"'image'\"\n                                [multipleSelect]=\"false\"\n                                [for]=\"'configuratorItinerary-featuredImg'\"\n                                [modalRef]=\"modal\">\n                                </app-choose-media>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- itinerary-->\n                <div formGroupName=\"itinerary\">\n                    <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                        <h4 class=\"mt-4\">Itinerariu</h4>\n                        <!--Enable-->\n                        <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                        </mat-slide-toggle>\n                    </div>\n                    <div class=\"d-flex align-items-center row\">\n                    <!--Name Ro-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba română)</mat-label>\n                        <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('tripOptions.itinerary.nameRo').value\"\n                              (click)=\"systemSettingsForm.get('tripOptions.itinerary.nameRo').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('tripOptions.itinerary.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n\n                    <!--Name En-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba engleză)</mat-label>\n                        <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('tripOptions.itinerary.nameEn').value\"\n                              (click)=\"systemSettingsForm.get('tripOptions.itinerary.nameEn').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('tripOptions.itinerary.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n                    </div>\n\n                    <div class=\"thumbnail\">\n                        <h5>Itinerary featured image</h5>\n                        <div class=\"col-12 upload-image-col my-2\">\n\n                            <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!systemSettingsForm.get('tripOptions.itinerary.image')?.value?.filePath\"\n                                    class=\"thumbnail-button\n                                        d-flex flex-column align-items-center justify-content-center\"\n                                    type=\"button\"\n                                    (click)=\"openMedia(itineraryFeaturedImageModal)\">\n                                <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                            </button>\n\n                            <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"systemSettingsForm.get('tripOptions.itinerary.image').value?.filePath\" class=\"img-thumbnail\">\n                                <img class=\"img-fluid w-100\"\n                                    [src]=\"systemSettingsForm.get('tripOptions.itinerary.image').value?.filePath\" alt=\"thumbnail\">\n                                <button\n                                        (click)=\"systemSettingsForm.get('tripOptions.itinerary.image').setValue(null)\"\n                                        type=\"button\"\n                                        id=\"btnRemoveItineraryFeaturedImg\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                            <ng-template #itineraryFeaturedImageModal let-modal>\n                                <app-choose-media\n                                [category]=\"'image'\"\n                                [multipleSelect]=\"false\"\n                                [for]=\"'itinerary-featuredImg'\"\n                                [modalRef]=\"modal\">\n                                </app-choose-media>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- holidayOffer-->\n                <div formGroupName=\"holidayOffer\">\n                    <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                        <h4 class=\"mt-4\">Oferte vacante</h4>\n                        <!--Enable-->\n                        <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                        </mat-slide-toggle>\n                    </div>\n                    <div class=\"d-flex align-items-center row\">\n                    <!--Name Ro-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba română)</mat-label>\n                        <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('tripOptions.holidayOffer.nameRo').value\"\n                              (click)=\"systemSettingsForm.get('tripOptions.holidayOffer.nameRo').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('tripOptions.holidayOffer.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n\n                    <!--Name En-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba engleză)</mat-label>\n                        <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('tripOptions.holidayOffer.nameEn').value\"\n                              (click)=\"systemSettingsForm.get('tripOptions.holidayOffer.nameEn').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('tripOptions.holidayOffer.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n                    </div>\n\n                    <div class=\"thumbnail\">\n                        <h5>Holiday offer featured image</h5>\n                        <div class=\"col-12 upload-image-col my-2\">\n\n                            <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!systemSettingsForm.get('tripOptions.holidayOffer.image')?.value?.filePath\"\n                                    class=\"thumbnail-button\n                                        d-flex flex-column align-items-center justify-content-center\"\n                                    type=\"button\"\n                                    (click)=\"openMedia(holidayOfferFeaturedImageModal)\">\n                                <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                            </button>\n\n                            <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"systemSettingsForm.get('tripOptions.holidayOffer.image').value?.filePath\" class=\"img-thumbnail\">\n                                <img class=\"img-fluid w-100\"\n                                    [src]=\"systemSettingsForm.get('tripOptions.holidayOffer.image').value?.filePath\" alt=\"thumbnail\">\n                                <button\n                                        (click)=\"systemSettingsForm.get('tripOptions.holidayOffer.image').setValue(null)\"\n                                        type=\"button\"\n                                        id=\"btnRemoveholidayOfferFeaturedImg\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                            <ng-template #holidayOfferFeaturedImageModal let-modal>\n                                <app-choose-media\n                                [category]=\"'image'\"\n                                [multipleSelect]=\"false\"\n                                [for]=\"'holidayOffer-featuredImg'\"\n                                [modalRef]=\"modal\">\n                                </app-choose-media>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n\n            </div><!--tripOptions-->\n\n            <!--Resources type itinerary-->\n\n            <div class=\"row\">\n                <!--road Trip Attribute -->\n                <mat-form-field appearance=\"standard\" class=\"col-4\" *ngIf=\"attributesList\">\n                    <mat-label>Road Trip</mat-label>\n                    <mat-select formControlName=\"roadTripAttributeId\">\n                        <mat-option *ngFor=\"let category of attributesList\" [value]=\"category.id\">\n                        {{category.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <!--itinerary Transport ResourceTypes-->\n                <mat-form-field appearance=\"standard\" class=\"col-4\">\n                    <mat-label>Transport (itinerarii)</mat-label>\n                    <mat-select formControlName=\"itineraryTransportResourceTypes\" multiple>\n                    <mat-option *ngFor=\"let resourceType of itineraryTransportResourceTypes\" [value]=\"resourceType?.resourceTypeId\">{{resourceType?.resourceTypeName}}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <!--itinerary Accommodation ResourceTypes-->\n                <ng-container *ngIf=\"(rentalBookingResourceTypes$ | async) as rentalBookingResourceTypes\">\n                    <mat-form-field appearance=\"standard\" class=\"col-4\">\n                        <mat-label>Cazare (itinerarii)</mat-label>\n                        <mat-select formControlName=\"itineraryAccommodationResourceTypes\" multiple>\n                        <mat-option *ngFor=\"let resourceType of rentalBookingResourceTypes\" [value]=\"resourceType?.id\">{{resourceType?.nameEn}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </ng-container>\n            </div>\n\n            <div class=\"row\">\n                <!--itinerary EatAndDrinksResource ResourceTypes-->\n                <ng-container *ngIf=\"(menuResourceTypes$ | async) as menuResourceTypes\">\n                    <mat-form-field appearance=\"standard\" class=\"col-4\">\n                        <mat-label>Mâncare și băutură (itinerarii)</mat-label>\n                        <mat-select formControlName=\"itineraryEatAndDrinksResourceTypes\" multiple>\n                        <mat-option *ngFor=\"let resourceType of menuResourceTypes\" [value]=\"resourceType?.id\">{{resourceType?.nameEn}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </ng-container>\n\n                <ng-container *ngIf=\"(ticketBookingResourceTypes$ | async) as ticketBookingResourceTypes\">\n                    <!--itinerary DayActivity ResourceTypes-->\n                    <mat-form-field appearance=\"standard\" class=\"col-4\">\n                        <mat-label>Activități de zi (itinerarii)</mat-label>\n                        <mat-select formControlName=\"itineraryDayActivityResourceTypes\" multiple>\n                        <mat-option *ngFor=\"let resourceType of ticketBookingResourceTypes\" [value]=\"resourceType?.id\">{{resourceType?.nameEn}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n\n                    <!--itinerary EveningActivity ResourceTypes-->\n                    <mat-form-field appearance=\"standard\" class=\"col-4\">\n                        <mat-label>Activități de seară (itinerarii)</mat-label>\n                        <mat-select formControlName=\"itineraryEveningActivityResourceTypes\" multiple>\n                        <mat-option *ngFor=\"let resourceType of ticketBookingResourceTypes\" [value]=\"resourceType?.id\">{{resourceType?.nameEn}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </ng-container>\n            </div>\n\n            <h3>Jobs Market</h3>\n<!--            <div formGroupName=\"job\">-->\n<!--                <div class=\"d-flex align-items-baseline justify-content-start gap-2\">-->\n<!--                    <h4>Job</h4>-->\n<!--                    &lt;!&ndash;Enable&ndash;&gt;-->\n<!--                    <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">-->\n<!--                    </mat-slide-toggle>-->\n<!--                </div>-->\n<!--                <div class=\"d-flex align-items-center row\">-->\n<!--                &lt;!&ndash;Name Ro&ndash;&gt;-->\n<!--                <mat-form-field appearance=\"standard\" class=\"col-6\">-->\n<!--                    <mat-label>Denumire (limba română)</mat-label>-->\n<!--                    <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >-->\n<!--                    <mat-icon *ngIf=\"systemSettingsForm.get('job.nameRo').value\"-->\n<!--                              (click)=\"systemSettingsForm.get('job.nameRo').setValue('')\"-->\n<!--                              role=\"button\" matSuffix>clear</mat-icon>-->\n<!--                              <mat-error *ngIf=\"systemSettingsForm.get('job.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.-->\n<!--                            </mat-error>-->\n<!--                </mat-form-field>-->\n\n<!--                &lt;!&ndash;Name En&ndash;&gt;-->\n<!--                <mat-form-field appearance=\"standard\" class=\"col-6\">-->\n<!--                    <mat-label>Denumire (limba engleză)</mat-label>-->\n<!--                    <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >-->\n<!--                    <mat-icon *ngIf=\"systemSettingsForm.get('job.nameEn').value\"-->\n<!--                              (click)=\"systemSettingsForm.get('job.nameEn').setValue('')\"-->\n<!--                              role=\"button\" matSuffix>clear</mat-icon>-->\n<!--                              <mat-error *ngIf=\"systemSettingsForm.get('job.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.-->\n<!--                            </mat-error>-->\n<!--                </mat-form-field>-->\n<!--                </div>-->\n\n<!--                <div class=\"thumbnail\">-->\n<!--                    <h5>Job featured image</h5>-->\n<!--                    <div class=\"col-12 upload-image-col my-2\">-->\n\n<!--                        &lt;!&ndash;ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL&ndash;&gt;-->\n<!--                        <button *ngIf=\"!systemSettingsForm.get('job.image').value?.filePath\"-->\n<!--                                class=\"thumbnail-button-->\n<!--                                    d-flex flex-column align-items-center justify-content-center\"-->\n<!--                                type=\"button\"-->\n<!--                                (click)=\"openMedia(jobFeaturedImageModal)\">-->\n<!--                            <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}-->\n<!--                        </button>-->\n\n<!--                        &lt;!&ndash;IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON&ndash;&gt;-->\n<!--                        <div *ngIf=\"systemSettingsForm.get('job.image').value?.filePath\" class=\"img-thumbnail\">-->\n<!--                            <img class=\"img-fluid w-100\"-->\n<!--                                [src]=\"systemSettingsForm.get('job.image').value?.filePath\" alt=\"thumbnail\">-->\n<!--                            <button-->\n<!--                                    (click)=\"systemSettingsForm.get('job.image').setValue(null)\"-->\n<!--                                    type=\"button\"-->\n<!--                                    id=\"btnRemoveItineraryFeaturedImg\"-->\n<!--                                    class=\"btn-thumbnail position-absolute\">-->\n<!--                                <i class=\"fas fa-times\"></i>-->\n<!--                            </button>-->\n<!--                        </div>-->\n<!--                        <ng-template #jobFeaturedImageModal let-modal>-->\n<!--                            <app-choose-media-->\n<!--                            [category]=\"'image'\"-->\n<!--                            [multipleSelect]=\"false\"-->\n<!--                            [for]=\"'job-featuredImg'\"-->\n<!--                            [modalRef]=\"modal\">-->\n<!--                            </app-choose-media>-->\n<!--                        </ng-template>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n\n            <div formGroupName=\"jobOptions\">\n                <!--myCv -->\n                <div formGroupName=\"myCv\">\n                    <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                        <h4 class=\"mt-4\">CV-ul meu</h4>\n                        <!--Enable-->\n                        <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                        </mat-slide-toggle>\n                    </div>\n                    <div class=\"d-flex align-items-center row\">\n                    <!--Name Ro-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba română)</mat-label>\n                        <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('jobOptions.myCv.nameRo').value\"\n                              (click)=\"systemSettingsForm.get('jobOptions.myCv.nameRo').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('jobOptions.myCv.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n\n                    <!--Name En-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba engleză)</mat-label>\n                        <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('jobOptions.myCv.nameEn').value\"\n                              (click)=\"systemSettingsForm.get('jobOptions.myCv.nameEn').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                    </mat-form-field>\n                    </div>\n\n                    <div class=\"thumbnail\">\n                        <h5>My CV featured image</h5>\n                        <div class=\"col-12 upload-image-col my-2\">\n\n                            <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!systemSettingsForm.get('jobOptions.myCv.image')?.value?.filePath\"\n                                    class=\"thumbnail-button\n                                        d-flex flex-column align-items-center justify-content-center\"\n                                    type=\"button\"\n                                    (click)=\"openMedia(CVFeaturedImageModal)\">\n                                <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                            </button>\n\n                            <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"systemSettingsForm.get('jobOptions.myCv.image').value?.filePath\" class=\"img-thumbnail\">\n                                <img class=\"img-fluid w-100\"\n                                    [src]=\"systemSettingsForm.get('jobOptions.myCv.image').value?.filePath\" alt=\"thumbnail\">\n                                <button\n                                        (click)=\"systemSettingsForm.get('jobOptions.myCv.image').setValue(null)\"\n                                        type=\"button\"\n                                        id=\"btnRemoveholidayOfferFeaturedImg\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                            <ng-template #CVFeaturedImageModal let-modal>\n                                <app-choose-media\n                                [category]=\"'image'\"\n                                [multipleSelect]=\"false\"\n                                [for]=\"'myCv-featuredImg'\"\n                                [modalRef]=\"modal\">\n                                </app-choose-media>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n\n                <!--jobOffers -->\n                <div formGroupName=\"jobOffers\">\n                    <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                        <h4 class=\"mt-4\">Oferte de joburi</h4>\n                        <!--Enable-->\n                        <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                        </mat-slide-toggle>\n                    </div>\n                    <div class=\"d-flex align-items-center row\">\n                    <!--Name Ro-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba română)</mat-label>\n                        <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('jobOptions.jobOffers.nameRo').value\"\n                              (click)=\"systemSettingsForm.get('jobOptions.jobOffers.nameRo').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('jobOptions.jobOffers.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n\n                    <!--Name En-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba engleză)</mat-label>\n                        <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('jobOptions.jobOffers.nameEn').value\"\n                              (click)=\"systemSettingsForm.get('jobOptions.jobOffers.nameEn').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('jobOptions.jobOffers.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n                    </div>\n\n                    <div class=\"thumbnail\">\n                        <h5>Oferte joburi featured image</h5>\n                        <div class=\"col-12 upload-image-col my-2\">\n\n                            <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!systemSettingsForm.get('jobOptions.jobOffers.image')?.value?.filePath\"\n                                    class=\"thumbnail-button\n                                        d-flex flex-column align-items-center justify-content-center\"\n                                    type=\"button\"\n                                    (click)=\"openMedia(jobOfferFeaturedImageModal)\">\n                                <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                            </button>\n\n                            <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"systemSettingsForm.get('jobOptions.jobOffers.image').value?.filePath\" class=\"img-thumbnail\">\n                                <img class=\"img-fluid w-100\"\n                                    [src]=\"systemSettingsForm.get('jobOptions.jobOffers.image').value?.filePath\" alt=\"thumbnail\">\n                                <button\n                                        (click)=\"systemSettingsForm.get('jobOptions.jobOffers.image').setValue(null)\"\n                                        type=\"button\"\n                                        id=\"btnRemoveholidayOfferFeaturedImg\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                            <ng-template #jobOfferFeaturedImageModal let-modal>\n                                <app-choose-media\n                                [category]=\"'image'\"\n                                [multipleSelect]=\"false\"\n                                [for]=\"'jobOffers-featuredImg'\"\n                                [modalRef]=\"modal\">\n                                </app-choose-media>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n\n                <!--candidates -->\n                <div formGroupName=\"candidates\">\n                    <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                        <h4 class=\"mt-4\">Candidati</h4>\n                        <!--Enable-->\n                        <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                        </mat-slide-toggle>\n                    </div>\n                    <div class=\"d-flex align-items-center row\">\n                    <!--Name Ro-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba română)</mat-label>\n                        <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('jobOptions.candidates.nameRo').value\"\n                              (click)=\"systemSettingsForm.get('jobOptions.candidates.nameRo').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('jobOptions.candidates.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n\n                    <!--Name En-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba engleză)</mat-label>\n                        <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('jobOptions.candidates.nameEn').value\"\n                              (click)=\"systemSettingsForm.get('jobOptions.candidates.nameEn').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                              <mat-error *ngIf=\"systemSettingsForm.get('jobOptions.candidates.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                            </mat-error>\n                    </mat-form-field>\n                    </div>\n\n                    <div class=\"thumbnail\">\n                        <h5>Candidates featured image</h5>\n                        <div class=\"col-12 upload-image-col my-2\">\n\n                            <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!systemSettingsForm.get('jobOptions.candidates.image')?.value?.filePath\"\n                                    class=\"thumbnail-button\n                                        d-flex flex-column align-items-center justify-content-center\"\n                                    type=\"button\"\n                                    (click)=\"openMedia(candidatesFeaturedImageModal)\">\n                                <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                            </button>\n\n                            <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"systemSettingsForm.get('jobOptions.candidates.image').value?.filePath\" class=\"img-thumbnail\">\n                                <img class=\"img-fluid w-100\"\n                                    [src]=\"systemSettingsForm.get('jobOptions.candidates.image').value?.filePath\" alt=\"thumbnail\">\n                                <button\n                                        (click)=\"systemSettingsForm.get('jobOptions.candidates.image').setValue(null)\"\n                                        type=\"button\"\n                                        id=\"btnRemoveholidayOfferFeaturedImg\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                            <ng-template #candidatesFeaturedImageModal let-modal>\n                                <app-choose-media\n                                [category]=\"'image'\"\n                                [multipleSelect]=\"false\"\n                                [for]=\"'candidates-featuredImg'\"\n                                [modalRef]=\"modal\">\n                                </app-choose-media>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- myJobOffers-->\n                <div formGroupName=\"myJobOffers\">\n                    <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                        <h4 class=\"mt-4\">Ofertele mele de joburi</h4>\n                        <!--Enable-->\n                        <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                        </mat-slide-toggle>\n                    </div>\n                    <div class=\"d-flex align-items-center row\">\n                    <!--Name Ro-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba română)</mat-label>\n                        <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('jobOptions.myJobOffers.nameRo').value\"\n                        (click)=\"systemSettingsForm.get('jobOptions.myJobOffers.nameRo').setValue('')\"\n                        role=\"button\" matSuffix>clear</mat-icon>\n                        <mat-error *ngIf=\"systemSettingsForm.get('jobOptions.myJobOffers.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                        </mat-error>\n                    </mat-form-field>\n\n                    <!--Name En-->\n                    <mat-form-field appearance=\"standard\" class=\"col-6\">\n                        <mat-label>Denumire (limba engleză)</mat-label>\n                        <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                        <mat-icon *ngIf=\"systemSettingsForm.get('jobOptions.myJobOffers.nameEn').value\"\n                        (click)=\"systemSettingsForm.get('jobOptions.myJobOffers.nameEn').setValue('')\"\n                        role=\"button\" matSuffix>clear</mat-icon>\n                        <mat-error *ngIf=\"systemSettingsForm.get('jobOptions.myJobOffers.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                        </mat-error>\n                    </mat-form-field>\n                    </div>\n\n                    <div class=\"thumbnail\">\n                        <h5>Ofertele mele de joburi featured image</h5>\n                        <div class=\"col-12 upload-image-col my-2\">\n\n                            <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!systemSettingsForm.get('jobOptions.myJobOffers.image')?.value?.filePath\"\n                                    class=\"thumbnail-button\n                                        d-flex flex-column align-items-center justify-content-center\"\n                                    type=\"button\"\n                                    (click)=\"openMedia(myJobOffersFeaturedImageModal)\">\n                                <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                            </button>\n\n                            <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"systemSettingsForm.get('jobOptions.myJobOffers.image').value?.filePath\" class=\"img-thumbnail\">\n                                <img class=\"img-fluid w-100\"\n                                    [src]=\"systemSettingsForm.get('jobOptions.myJobOffers.image').value?.filePath\" alt=\"thumbnail\">\n                                <button\n                                        (click)=\"systemSettingsForm.get('jobOptions.myJobOffers.image').setValue(null)\"\n                                        type=\"button\"\n                                        id=\"btnRemoveholidayOfferFeaturedImg\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                            <ng-template #myJobOffersFeaturedImageModal let-modal>\n                                <app-choose-media\n                                [category]=\"'image'\"\n                                [multipleSelect]=\"false\"\n                                [for]=\"'myJobOffers-featuredImg'\"\n                                [modalRef]=\"modal\">\n                                </app-choose-media>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n            </div><!--job Options -->\n\n            <!-- Shared Experiences-->\n            <div formGroupName=\"sharedExperience\">\n                <div class=\"d-flex align-items-baseline justify-content-start gap-2\">\n                    <h3>SharedExperience</h3>\n                    <!--Enable-->\n                    <mat-slide-toggle formControlName=\"enable\" matTooltip=\"Enable\">\n                    </mat-slide-toggle>\n                </div>\n                <div class=\"d-flex align-items-center row\">\n                <!--Name Ro-->\n                <mat-form-field appearance=\"standard\" class=\"col-6\">\n                    <mat-label>Denumire (limba română)</mat-label>\n                    <input matInput placeholder=\"Name ro\" formControlName=\"nameRo\" >\n                    <mat-icon *ngIf=\"systemSettingsForm.get('sharedExperience.nameRo').value\"\n                        (click)=\"systemSettingsForm.get('sharedExperience.nameRo').setValue('')\"\n                        role=\"button\" matSuffix>clear</mat-icon>\n                        <mat-error *ngIf=\"systemSettingsForm.get('sharedExperience.nameRo').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                        </mat-error>\n                </mat-form-field>\n\n                <!--Name En-->\n                <mat-form-field appearance=\"standard\" class=\"col-6\">\n                    <mat-label>Denumire (limba engleză)</mat-label>\n                    <input matInput placeholder=\"Name eng\" formControlName=\"nameEn\" >\n                    <mat-icon *ngIf=\"systemSettingsForm.get('sharedExperience.nameEn').value\"\n                        (click)=\"systemSettingsForm.get('sharedExperience.nameEn').setValue('')\"\n                        role=\"button\" matSuffix>clear</mat-icon>\n                        <mat-error *ngIf=\"systemSettingsForm.get('sharedExperience.nameEn').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                        </mat-error>\n                </mat-form-field>\n                </div>\n\n                <div class=\"thumbnail\">\n                    <h5>Shared Experience featured image</h5>\n                    <div class=\"col-12 upload-image-col my-2\">\n\n                        <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                        <button *ngIf=\"!systemSettingsForm.get('sharedExperience.image').value?.filePath\"\n                                class=\"thumbnail-button\n                                    d-flex flex-column align-items-center justify-content-center\"\n                                type=\"button\"\n                                (click)=\"openMedia(sharedExperienceFeaturedImageModal)\">\n                            <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                        </button>\n\n                        <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                        <div *ngIf=\"systemSettingsForm.get('sharedExperience.image').value?.filePath\" class=\"img-thumbnail\">\n                            <img class=\"img-fluid w-100\"\n                                [src]=\"systemSettingsForm.get('sharedExperience.image').value?.filePath\" alt=\"thumbnail\">\n                            <button\n                                    (click)=\"systemSettingsForm.get('sharedExperience.image').setValue(null)\"\n                                    type=\"button\"\n                                    id=\"btnRemoveItineraryFeaturedImg\"\n                                    class=\"btn-thumbnail position-absolute\">\n                                <i class=\"fas fa-times\"></i>\n                            </button>\n                        </div>\n                        <ng-template #sharedExperienceFeaturedImageModal let-modal>\n                            <app-choose-media\n                            [category]=\"'image'\"\n                            [multipleSelect]=\"false\"\n                            [for]=\"'sharedExperience-featuredImg'\"\n                            [modalRef]=\"modal\">\n                            </app-choose-media>\n                        </ng-template>\n                    </div>\n                </div>\n            </div>\n\n            <h3>Special Resources Category</h3>\n                <!--culinary Preferences -->\n                <!-- <mat-form-field>\n                    <mat-label>Preferințe culinare</mat-label>\n                    <mat-select formControlName=\"culinaryPreferencesId\">\n                        <mat-option *ngFor=\"let category of healthCategories\" [value]=\"category.id\">\n                            {{category.nameEn}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field> -->\n\n                <!--event CategoryId select-->\n                <mat-form-field appearance=\"standard\" class=\"col-12\">\n                    <mat-label>Categorie Eveniment</mat-label>\n                    <mat-select formControlName=\"eventCategoryId\">\n                    <mat-option *ngFor=\"let category of resourceCategoryList\" [value]=\"category.id\">\n                        {{category.nameRo}}\n                    </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n\n                <!--transport CategoryId select-->\n                <mat-form-field appearance=\"standard\" class=\"col-12\">\n                    <mat-label>Categorie Transport</mat-label>\n                    <mat-select formControlName=\"transportCategoryId\">\n                    <mat-option *ngFor=\"let category of resourceCategoryList\" [value]=\"category.id\">\n                        {{category.nameEn}}\n                    </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n            <h3>Others</h3>\n            <div class=\"d-flex flex-column\">\n                <h4>Mode</h4>\n                <mat-radio-group  formControlName=\"mode\" class=\"d-flex justify-content-start gap-2\">\n                <mat-radio-button value=\"dev\">\n                    Development\n                </mat-radio-button>\n                <mat-radio-button value=\"production\">\n                    Production\n                </mat-radio-button>\n                </mat-radio-group>\n            </div>\n\n\n            <h3>Payment Settings</h3>\n            <div class=\"row\">\n                <!-- percentageLoyaltyPointsSpend -->\n                <mat-form-field appearance=\"standard\" class=\"col-4\">\n                    <mat-label>Procent puncte de loialitate cheltuite</mat-label>\n                    <input matInput type=\"number\" placeholder=\"Loyalty Points Spend %\" formControlName=\"percentageLoyaltyPointsSpend\" >\n                </mat-form-field>\n\n                <!-- percentageLoyaltyPointsGain -->\n                <mat-form-field appearance=\"standard\" class=\"col-4\">\n                    <mat-label>Procent puncte de loialitate castigate</mat-label>\n                    <input matInput type=\"number\" placeholder=\"Loyalty Points Gain %\" formControlName=\"percentageLoyaltyPointsGain\" >\n                </mat-form-field>\n\n                <!-- percentageCommission -->\n                <mat-form-field appearance=\"standard\" class=\"col-4\">\n                    <mat-label>Procent comision</mat-label>\n                    <input matInput type=\"number\" placeholder=\"Commission %\" formControlName=\"percentageCommission\" >\n                </mat-form-field>\n            </div>\n            <h3>Billing</h3>\n            <div class=\"row d-flex\">\n                <!-- smartBillEmail -->\n                <mat-form-field appearance=\"standard\" class=\"col-4\">\n                    <mat-label>Email SmartBill</mat-label>\n                    <input matInput placeholder=\"SmartBill Email\" formControlName=\"smartBillEmail\" >\n                    <mat-icon *ngIf=\"systemSettingsForm.get('smartBillEmail').value\"\n                        (click)=\"systemSettingsForm.get('smartBillEmail').setValue('')\"\n                        role=\"button\" matSuffix>clear</mat-icon>\n                    <mat-error *ngIf=\"systemSettingsForm.get('smartBillEmail').hasError('email')\">{{'ERROR.EMAIL'|translate}}</mat-error>\n                    <mat-error *ngIf=\"systemSettingsForm.get('smartBillEmail').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                    </mat-error>\n                </mat-form-field>\n\n                <!-- smartBillToken -->\n                <mat-form-field appearance=\"standard\" class=\"col-4\">\n                    <mat-label>Token SmartBill</mat-label>\n                    <input matInput placeholder=\"smartBillToken\" formControlName=\"smartBillToken\" >\n                    <mat-icon *ngIf=\"systemSettingsForm.get('smartBillToken').value\"\n                        (click)=\"systemSettingsForm.get('smartBillToken').setValue('')\"\n                        role=\"button\" matSuffix>clear</mat-icon>\n                        <mat-error *ngIf=\"systemSettingsForm.get('smartBillToken').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                        </mat-error>\n                </mat-form-field>\n\n                <!-- smartBillFiscalCode -->\n                <mat-form-field appearance=\"standard\" class=\"col-4\">\n                    <mat-label>Cod fiscal SmartBill</mat-label>\n                    <input matInput placeholder=\"smartBillFiscalCode\" formControlName=\"smartBillFiscalCode\" >\n                    <mat-icon *ngIf=\"systemSettingsForm.get('smartBillFiscalCode').value\"\n                        (click)=\"systemSettingsForm.get('smartBillFiscalCode').setValue('')\"\n                        role=\"button\" matSuffix>clear</mat-icon>\n                        <mat-error *ngIf=\"systemSettingsForm.get('smartBillFiscalCode').hasError('whitespace')\">Campul nu poate conține doar spații goale.\n                        </mat-error>\n                </mat-form-field>\n            </div>\n\n\n        </div><!--form-->\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_settings_settings_module_ts.js.map