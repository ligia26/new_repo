(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_itineraries_itineraries_module_ts"],{

/***/ 95116:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/itineraries/add-edit-itinerary/add-edit-itinerary.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditItineraryComponent": () => (/* binding */ AddEditItineraryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_itinerary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-itinerary.component.html?ngResource */ 91627);
/* harmony import */ var _add_edit_itinerary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-itinerary.component.scss?ngResource */ 13486);
/* harmony import */ var _add_edit_itinerary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_edit_itinerary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _services_itineraries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/itineraries.service */ 61295);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/modalmedia.service */ 34864);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/location.service */ 63712);
/* harmony import */ var _resources_services_resources_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/_services/resources.service */ 39266);















let AddEditItineraryComponent = class AddEditItineraryComponent {
  constructor(itinerariesService, fb, translate, toastService, modalService, modalMediaService, route, router, locationService, resourceService) {
    this.itinerariesService = itinerariesService;
    this.fb = fb;
    this.translate = translate;
    this.toastService = toastService;
    this.modalService = modalService;
    this.modalMediaService = modalMediaService;
    this.route = route;
    this.router = router;
    this.locationService = locationService;
    this.resourceService = resourceService;
    this.isEditMode = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.countries = [];
    this.cities = [];
  }
  ngOnInit() {
    this.initForm();
    this.listenToRoute();
    this.listenToMedia();
    this.getAllAttributesForItinerary();
    this.getAllResourceTypes();
    this.getCountries();
  }
  listenToRoute() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(route => {
      if (route.has('itineraryId')) {
        this.isEditMode = true;
        return this.itinerariesService.getItineraryById(route.get('itineraryId'));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) return;
        this.itineraryData = res;
        this.getCities(res.resources[0].country);
        this.itineraryForm.patchValue(this.itineraryData);
        this.getCoordinates(this.itineraryForm.get('resources.0.city').value);
      },
      error: () => {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_FOUND"), "error");
      }
    });
  }
  listenToMedia() {
    this.modalMediaService.currentImagesArray.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe(array => {
      if (array.length) {
        if (array?.[0]?.for === 'itinerary-featuredImg') {
          this.itineraryForm.get('featuredImage').setValue(array[0].selectedMedia);
        } else {
          this.itineraryForm.get('images').setValue(array);
        }
      }
    });
  }
  removeImage(imageIndex) {
    const modifiedImgArray = this.itineraryForm.get('images').value.slice();
    modifiedImgArray.splice(imageIndex, 1);
    this.modalMediaService.changeImageArray(modifiedImgArray);
  }
  openMedia(content) {
    // this.modalMediaService.sendImagesToService([this.domainImagesForm.value]);
    this.modalService.open(content, {
      centered: true,
      size: 'xl'
    });
  }
  getAllAttributesForItinerary() {
    this.itinerariesService.getCategoryAttributes().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe(res => [this.journeyThemeAttributes, this.typeOfDestinationAttributes, this.typeOfJourneyAttributes] = res);
  }
  getAllResourceTypes() {
    this.rentalBookingResourceTypes$ = this.itinerariesService.getRentalBookingResourceTypes();
    this.menuResourceTypes$ = this.itinerariesService.getMenuResourceTypes();
    this.ticketBookingResourceTypes$ = this.itinerariesService.getTicketBookingResourceTypes();
  }
  initForm() {
    this.itineraryForm = this.fb.group({
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      images: [null],
      featuredImage: [null],
      //
      journeyThemeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      typeOfDestinationId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      typeOfJourneyId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      //
      accommodationResourceTypes: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      eatAndDrinksResourceTypes: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      dayActivityResourceTypes: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      eveningActivityResourceTypes: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      status: ['active'],
      //
      resources: this.fb.array([this.fb.group({
        country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        geographicalCoordinates: this.fb.group({
          longitude: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
          latitude: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
        })
      })]),
      recommendation: [null]
    });
  }
  getCoordinates(event) {
    console.log('get coord', event);
    const name = {
      name: event
    };
    this.resourceService.getCityFilter(0, -1, null, null, name).subscribe({
      next: city => {
        console.log('get coord 2', city);
        this.itineraryForm.get('resources.0.geographicalCoordinates.latitude').patchValue(city.content[0].geographicalCoordinates.latitude);
        this.itineraryForm.get('resources.0.geographicalCoordinates.longitude').patchValue(city.content[0].geographicalCoordinates.longitude);
      }
    });
  }
  submitItinerary() {
    console.log(this.itineraryForm.value);
    this.itineraryForm.markAllAsTouched();
    if (this.itineraryForm.valid) {
      if (!this.isEditMode) {
        this.itinerariesService.createItinerary(this.itineraryForm.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: res => {
            if (res.success) {
              this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), "Successfully created itinerary", "success");
              void this.router.navigate(['../list'], {
                relativeTo: this.route
              });
            }
          },
          error: () => {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
          }
        });
      } else {
        this.itinerariesService.updateItinerary(this.itineraryData.id, this.itineraryForm.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: res => {
            if (res.success) {
              this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), "Successfully updated itinerary", "success");
              void this.router.navigate(['../list'], {
                relativeTo: this.route
              });
            }
          },
          error: () => {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
          }
        });
      }
    } else {
      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("ERROR.REQUIRED-ALL"), "error");
    }
  }
  getCountries() {
    this.locationService.getAllCountries().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: countries => {
        this.countries = countries;
        // console.log(this.countries)
      }
    });
  }

  getCities(event) {
    const country = {
      country: event.value ? event.value : event
    };
    this.locationService.getCityFilter(0, -1, null, null, country).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: cities => {
        this.cities = cities.content;
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_itineraries_service__WEBPACK_IMPORTED_MODULE_2__.ItinerariesService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal
  }, {
    type: _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_4__.ModalMediaService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
  }, {
    type: _shared_services_location_service__WEBPACK_IMPORTED_MODULE_5__.LocationService
  }, {
    type: _resources_services_resources_service__WEBPACK_IMPORTED_MODULE_6__.ResourcesService
  }];
};
AddEditItineraryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-add-edit-itinerary',
  template: _add_edit_itinerary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_4__.ModalMediaService],
  styles: [(_add_edit_itinerary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddEditItineraryComponent);


/***/ }),

/***/ 1176:
/*!************************************************************!*\
  !*** ./src/app/features/itineraries/itineraries.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItinerariesModule": () => (/* binding */ ItinerariesModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _add_edit_itinerary_add_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-itinerary/add-edit-itinerary.component */ 95116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _list_itineraries_list_itineraries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-itineraries/list-itineraries.component */ 72931);














const routes = [{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
}, {
  path: 'add',
  component: _add_edit_itinerary_add_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_0__.AddEditItineraryComponent
}, {
  path: 'edit',
  redirectTo: 'list',
  pathMatch: "full"
}, {
  path: 'edit/:itineraryId',
  component: _add_edit_itinerary_add_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_0__.AddEditItineraryComponent
}, {
  path: 'list',
  component: _list_itineraries_list_itineraries_component__WEBPACK_IMPORTED_MODULE_3__.ListItinerariesComponent
}];
let ItinerariesModule = class ItinerariesModule {};
ItinerariesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_add_edit_itinerary_add_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_0__.AddEditItineraryComponent, _list_itineraries_list_itineraries_component__WEBPACK_IMPORTED_MODULE_3__.ListItinerariesComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__.DashboardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_11__.MatLegacyInputModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_13__.MatLegacySelectModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
})], ItinerariesModule);


/***/ }),

/***/ 72931:
/*!*************************************************************************************!*\
  !*** ./src/app/features/itineraries/list-itineraries/list-itineraries.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItinerariesComponent": () => (/* binding */ ListItinerariesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _list_itineraries_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-itineraries.component.html?ngResource */ 10056);
/* harmony import */ var _list_itineraries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-itineraries.component.scss?ngResource */ 13052);
/* harmony import */ var _list_itineraries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_list_itineraries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/modals.service */ 82882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_itineraries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/itineraries.service */ 61295);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);














let ListItinerariesComponent = class ListItinerariesComponent {
  constructor(dataService, ngbModalService, modalService, router, route, cdr, toastService, datepipe, modal) {
    this.dataService = dataService;
    this.ngbModalService = ngbModalService;
    this.modalService = modalService;
    this.router = router;
    this.route = route;
    this.cdr = cdr;
    this.toastService = toastService;
    this.datepipe = datepipe;
    this.modal = modal;
    // Mat Table
    this.displayedColumns = ['id', 'title', 'date', 'typeOfDestination', 'typeOfJourney', 'journeyTheme', 'actions'];
    this.editorialsList = [];
    this.pageItems = [10, 25, 100];
    // Mat Table - Filter Forms
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    // Mat Table - pagination, sorting, filtering
    this.page = 0;
    this.sorting = "date";
    this.dir = 'desc';
    this.pageSize = 10;
  }
  ngOnInit() {
    // Initialize Data
    this.initiateData();
  }
  getList() {
    // Filter Data
    const filterData = {
      name: this.searchFilter.value !== '' ? this.searchFilter.value : null,
      excludedStatus: "clientItinerary"
    };
    this.dataService.listItinerariesFiltered(this.page, this.pageSize, this.sorting, this.dir, filterData).subscribe(data => {
      console.log(data);
      this.editorialsList = data["content"];
      this.totalElements = data["totalElements"];
      //this.totalElements=data.content.length;
      console.log(this.editorialsList);
    });
  }
  applyFilter(event) {
    if (event.direction) {
      this.dir = event.direction === 'desc' || event.direction === '' ? 'asc' : 'desc';
      this.sorting = event.active;
      // Go to first page
      this.paginator.firstPage();
      // Listen to layout changes
      this.cdr.detectChanges();
      // Get All Documents List
      this.getList();
    }
  }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Documents List
    this.getList();
  }
  // Filter List
  filterData() {
    // Go to first page
    this.paginator.firstPage();
    // Get All Documents List
    this.getList();
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
      this.getList();
    }
  }
  //initialize data
  initiateData() {
    this.getList();
    // Data Loaded
    this.dataLoaded = true;
    // Change Detection
    this.cdr.detectChanges();
  }
  goToEditItinerary(itinerary) {
    this.dataService.setItineraryState(itinerary);
    void this.router.navigate(['../edit', itinerary.id], {
      relativeTo: this.route
    });
  }
  deleteItinerary(element) {
    console.log('element', element);
    this.dataService.deleteItineraryById(element).subscribe({
      next: resp => {
        if (resp.success) {
          this.toastService.showToast('Success', 'Itinerariul a fost sters!', 'success');
          this.closeModal();
          this.getList();
        } else {
          this.toastService.showToast('Error', 'Itinerariul NU a putut fi sters!', "error");
        }
      },
      error: err => {
        console.log(err);
        this.toastService.showToast('Error', 'Itinerariul NU a putut fi sters!', "error");
      }
    });
  }
  openModal(modal, data) {
    this.modal.open(modal);
  }
  closeModal() {
    this.modal.closeAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_itineraries_service__WEBPACK_IMPORTED_MODULE_4__.ItinerariesService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal
  }, {
    type: _shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, {
        static: true
      }]
    }]
  };
};
ListItinerariesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-list-itineraries',
  template: _list_itineraries_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [(_list_itineraries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ListItinerariesComponent);


/***/ }),

/***/ 39266:
/*!*******************************************************************!*\
  !*** ./src/app/features/resources/_services/resources.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesService": () => (/* binding */ ResourcesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);





let ResourcesService = class ResourcesService {
  constructor(http) {
    this.http = http;
    this.resourceId$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.bookingType$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    //cazare
    // resourceTemplateType$ = new BehaviorSubject({
    //     domain: "63bfcca765dc3f3863af755c",
    //     categoryId: "63d2ae569d6ce304608d1a88",
    //     resourceTypeId: "63d8d4a9d2180d7935acb4e0"
    // });
    //tickets
    // resourceTemplateType$ = new BehaviorSubject({
    //     domain: "63bfcca765dc3f3863af755c",
    //     categoryId: "63f46cb490ee904cfdad0c38",
    //     resourceTypeId: "63f46d1190ee904cfdad0c3a"
    // });
    //restaurants
    // resourceTemplateType$ = new BehaviorSubject({
    //     domain: "63bfcca765dc3f3863af755c",
    //     categoryId: "63dbb183df393f737216183c",
    //     resourceTypeId: "63dbb18cdf393f737216183d"
    // });
    this.resourceTemplateType$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.settingsTripsItineraries$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.tripsItinerariesObject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.resourceTemplateData$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.attributesFromResourceTemplate$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    // Resource Form
    this.generalInformationForm$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({}));
    this.facilitiesForm$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({}));
    this.filesForm$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({}));
    this.facilitiesByCategory$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.timetable$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this.bookingPolicies$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this.resourceData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      featuredImage: undefined,
      images: [],
      videos: []
    });
    this.externalUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.accommodationPolicy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this.relatedResources$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.setupListener$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.generalInfoListener$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.policyRentalListener$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.policyMenuListener$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.policyListener$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.travelId$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.medicalId$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.educationId$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
  }
  listenForSetup() {
    return this.setupListener$.asObservable();
  }
  listenForGeneralInfo() {
    return this.generalInfoListener$.asObservable();
  }
  listenForPolicyRental() {
    return this.policyRentalListener$.asObservable();
  }
  listenForPolicyMenu() {
    return this.policyMenuListener$.asObservable();
  }
  listenForPolicy() {
    return this.policyListener$.asObservable();
  }
  /** Stepper Listener*/
  getTemplateType() {
    return this.resourceTemplateType$.asObservable();
  }
  getResourceId() {
    return this.resourceId$.asObservable();
  }
  getBookingType() {
    return this.bookingType$.asObservable();
  }
  getFacilitiesByCategory() {
    return this.facilitiesByCategory$.asObservable();
  }
  getAttributesData() {
    return this.attributesFromResourceTemplate$.asObservable();
  }
  addTripsId(tripId) {
    this.settingsTripsItineraries$.next(this.settingsTripsItineraries$.getValue().concat(tripId));
  }
  /** Add Template  */
  addTemplate(templateType) {
    this.resourceTemplateType$.next(templateType);
  }
  /** API Requests  */
  getListOfDomains() {
    return this.http.get('/bestinform/getListOfDomains');
  }
  getAllResourceCategoriesByResourceDomain(id) {
    return this.http.get('/bestinform/getAllResourceCategoriesByResourceDomain?resourceDomain=' + id);
  }
  getAllResourceTypesByResourceCategory(id) {
    return this.http.get('/bestinform/getAllResourceTypesByResourceCategory?resourceCategoryId=' + id);
  }
  getListResourceTemplateFiltered(page, size, sort, dir, filterParams) {
    const sortAfter = sort.length > 0 ? '&sort=' + sort : '';
    const filterDir = dir.length > 0 ? '&dir=' + dir : '';
    return this.http.post('/bestinform/listResourceTemplateFiltered?page=' + page + '&size=' + size + sortAfter + filterDir, filterParams);
  }
  getAttributesFromTemplate(id) {
    return this.http.get('/bestinform/getAttributesFromTemplate?resourceTemplateId=' + id);
  }
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
  getAttributes(data) {
    return this.http.post('/bestinform/getAttributes', data);
  }
  getAttributesByNames(data) {
    return this.http.post('/bestinform/getAttributesByNames', data);
  }
  uploadResourceImage(resourceId, file) {
    return this.http.post('/bestinform/uploadResourceImage?resourceId=' + resourceId, file);
  }
  uploadDocAttachements(resourceId, type, file) {
    return this.http.post('/bestinform/uploadDocAttachments?resourceId=' + resourceId + '&type=' + type, file);
  }
  // uploadDocAttachements(resourceId: string, type: boolean, file: object) {
  //     return this.http.post('/bestinform/uploadDocAttachments?resourceId=' + resourceId + '&image=' + type, file);
  // }
  getAttributeById(attrId) {
    return this.http.get('/bestinform/getAttributeById?attributeId=' + attrId);
  }
  changeStatusForResource(resourceId, status) {
    return this.http.put('/bestinform/changeResourceStatus?resourceId=' + resourceId + '&status=' + status, {});
  }
  //LOCATION
  getAllCountries() {
    return this.http.get('/bestinform/getAllCountries');
  }
  getCityFilter(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listCityFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  getTimepickerByResourceId(resourceId) {
    return this.http.get('/bestinform/getBookingTimePickerByResourceId?resourceId=' + resourceId);
  }
  //Related res
  addRelatedresources(targetResourceId, eventId) {
    return this.http.put('/bestinform/addRelatedResource?targetResourceId=' + targetResourceId + '&eventId=' + eventId, {});
  }
  removeRelatedResource(eventId, targetResourceId) {
    return this.http.put('/bestinform/removeRelatedResource?eventId=' + eventId + '&targetResourceId=' + targetResourceId, {});
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};
ResourcesService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], ResourcesService);


/***/ }),

/***/ 63712:
/*!******************************************************!*\
  !*** ./src/app/shared/_services/location.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let LocationService = class LocationService {
  constructor(http) {
    this.http = http;
  }
  getAllCountries() {
    return this.http.get('/bestinform/getAllCountries');
  }
  getCityFilter(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listCityFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
LocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: "root"
})], LocationService);


/***/ }),

/***/ 13486:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/itineraries/add-edit-itinerary/add-edit-itinerary.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.custom-card {\n  background: var(--primary-background);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 24px;\n}\n.custom-card h2 {\n  margin-bottom: 0;\n}\n.custom-card form > div.row {\n  row-gap: 24px;\n}\n\np {\n  margin-bottom: 0;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.upload-image-col .thumbnail-button {\n  width: 100%;\n  height: 350px;\n  background-color: rgba(36, 57, 138, 0.04);\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n}\n.upload-image-col .thumbnail-button i {\n  font-size: 64px;\n}\n.upload-image-col .thumbnail-button span {\n  font-size: 16px;\n  font-weight: 400;\n}\n.upload-image-col .img-thumbnail {\n  height: 350px;\n  max-height: 350px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.upload-image-col .img-thumbnail img {\n  height: 348px;\n  max-height: 348px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n\n.btn-add-images {\n  width: 100%;\n  height: 200px;\n  background-color: rgba(36, 57, 138, 0.04);\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n}\n.btn-add-images i {\n  font-size: 64px;\n}\n.btn-add-images p {\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.gallery-image-container {\n  position: relative;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n  height: 200px;\n  width: 100%;\n}\n.gallery-image-container img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.btn-thumbnail {\n  right: 10px;\n  top: 10px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: var(--primary-background);\n  background: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n}\n.btn-thumbnail i {\n  color: var(--primary-background);\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/itineraries/add-edit-itinerary/add-edit-itinerary.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,qCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAbA;EACE,gBAAA;AAgBF;;AAbA;EACE,WAAA;AAgBF;;AAZE;EACE,WAAA;EACA,aAAA;EACA,yCAAA;EACA,yCAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AAeJ;AAbI;EACE,eAAA;AAeN;AAZI;EACE,eAAA;EACA,gBAAA;AAcN;AAVE;EACE,aAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AAYJ;AAVI;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AAYN;;AAPA;EACE,WAAA;EACA,aAAA;EACA,yCAAA;EACA,yCAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AAUF;AARE;EACE,eAAA;AAUJ;AAPE;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AASJ;;AALA;EACE,kBAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;AAQF;AANE;EACE,YAAA;EACA,WAAA;EACA,iBAAA;EACA,uBAAA;AAQJ;;AAJA;EACE,WAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,gCAAA;EACA,mCAAA;EACA,mBAAA;AAOF;AANE;EACE,gCAAA;AAQJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.custom-card {\n  background: var(--primary-background);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 24px;\n\n  h2 {\n    margin-bottom: 0;\n  }\n\n  form > div.row {\n    row-gap: 24px;\n  }\n}\n\np {\n  margin-bottom: 0;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.upload-image-col {\n  .thumbnail-button {\n    width: 100%;\n    height: 350px;\n    background-color: rgba($primary-color, 0.04);\n    border: 2px solid rgba($primary-color, 0.08);\n    border-radius: 8px;\n    color: rgba($primary-color, 0.08);\n    font-size: 24px;\n    font-weight: 600;\n\n    i {\n      font-size: 64px;\n    }\n\n    span {\n      font-size: 16px;\n      font-weight: 400;\n    }\n  }\n\n  .img-thumbnail {\n    height: 350px;\n    max-height: 350px;\n    border: 1px solid rgba($primary-color, 0.16);\n    border-radius: 8px;\n    position: relative;\n    padding: 0;\n\n    img {\n      height: 348px;\n      max-height: 348px;\n      border-radius: 8px;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n}\n\n.btn-add-images {\n  width: 100%;\n  height: 200px;\n  background-color: rgba($primary-color, 0.04);\n  border: 2px solid rgba($primary-color, 0.08);\n  border-radius: 8px;\n  color: rgba($primary-color, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n\n  i {\n    font-size: 64px;\n  }\n\n  p {\n    margin-bottom: 0;\n    font-size: 16px;\n    font-weight: 400;\n  }\n}\n\n.gallery-image-container {\n  position: relative;\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n  height: 200px;\n  width: 100%;\n\n  img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n}\n\n.btn-thumbnail {\n  right:10px;\n  top: 10px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: var(--primary-background);\n  background: rgba($primary-color, 0.16);\n  border-radius: 100%;\n  i{\n    color:var(--primary-background);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 13052:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/itineraries/list-itineraries/list-itineraries.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\ntd.mat-column-title {\n  font-weight: 400 !important;\n  color: #231F20 !important;\n  cursor: context-menu;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/itineraries/list-itineraries/list-itineraries.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2BAAA;EACA,yBAAA;EACA,oBAAA;AAkBJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import '/src/app/theme/styles/components/colors';\n\ntd.mat-column-title {\n    font-weight: 400 !important;\n    color: $paragraph!important;\n    cursor: context-menu;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 91627:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/itineraries/add-edit-itinerary/add-edit-itinerary.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--suppress TypeScriptUnresolvedVariable -->\n<div class=\"container\">\n    <app-dashboard-header\n            [pageTitleOne]=\"isEditMode ? 'Editare itinerariu' : 'Adaugare itinerariu'\"\n            [buttonBackRoute]=\"isEditMode ? '../../list' : '../list'\"\n            (buttonCall)=\"submitItinerary()\"\n    >\n    </app-dashboard-header>\n\n    <div class=\"custom-card mb-4\">\n        <form [formGroup]=\"itineraryForm\" (ngSubmit)=\"submitItinerary()\">\n            <div class=\"row\">\n\n                <h2>\n                    Informatii generale\n                </h2>\n\n                <!--itinerary name-->\n                <div class=\"col-12 col-lg-6\">\n                    <p>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Nume itinerariu</mat-label>\n                            <input formControlName=\"name\" matInput placeholder=\"Nume itinerariu\">\n                            <mat-icon *ngIf=\"itineraryForm.get('name').value\"\n                                      (click)=\"itineraryForm.get('name').setValue(null)\"\n                                      role=\"button\" matSuffix>clear</mat-icon>\n                            <mat-error *ngIf=\"itineraryForm.get('name').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </p>\n                </div>\n\n                <!--itinerary description-->\n                <div class=\"col-12\">\n                    <p>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Descriere itinerariu</mat-label>\n                            <textarea formControlName=\"description\"\n                                      placeholder=\"Descriere itinerariu\"\n                                      matInput\n                                      cdkTextareaAutosize\n                                      cdkAutosizeMinRows=\"1\"\n                                      cdkAutosizeMaxRows=\"20\"\n                            ></textarea>\n                            <mat-icon *ngIf=\"itineraryForm.get('description').value\"\n                                      (click)=\"itineraryForm.get('description').setValue(null)\"\n                                      role=\"button\" matSuffix>clear</mat-icon>\n                            <mat-error *ngIf=\"itineraryForm.get('description').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </p>\n                </div>\n\n\n                <h2>\n                    Galerie\n                </h2>\n\n                <!--itinerary featured image-->\n                <div class=\"col-12 upload-image-col\">\n\n                    <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                    <button *ngIf=\"!itineraryForm.get('featuredImage').value?.filePath\"\n                            class=\"thumbnail-button\n                                   d-flex flex-column align-items-center justify-content-center\"\n                            type=\"button\"\n                            (click)=\"openMedia(featuredImageModal)\"\n                            id=\"btnChangeItineraryFeaturedImg\">\n                        <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}} <span>1400 x 1400px</span>\n                    </button>\n\n                    <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                    <div *ngIf=\"itineraryForm.get('featuredImage').value?.filePath\" class=\"img-thumbnail\">\n                        <img class=\"img-fluid w-100\"\n                             [src]=\"itineraryForm.get('featuredImage').value?.filePath\" alt=\"thumbnail\">\n                        <button\n                                (click)=\"itineraryForm.get('featuredImage').setValue(null)\"\n                                type=\"button\"\n                                id=\"btnRemoveItineraryFeaturedImg\"\n                                class=\"btn-thumbnail position-absolute\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </div>\n                </div>\n\n                <ng-template #featuredImageModal let-modal>\n                    <app-choose-media [category]=\"'image'\"\n                                      [multipleSelect]=\"false\"\n                                      [for]=\"'itinerary-featuredImg'\"\n                                      [modalRef]=\"modal\"></app-choose-media>\n                </ng-template>\n\n\n                <!--itinerary images-->\n                <div class=\"col-12 col-lg-3\">\n                    <button (click)=\"openMedia(imagesModal)\"\n                            class=\"btn-add-images\n                                   d-flex flex-column align-items-center justify-content-center\"\n                            type=\"button\"\n                    >\n                        <i class=\"far fa-image\"></i>\n                        <p>\n                            Insert images here\n                        </p>\n                    </button>\n                </div>\n\n                <ng-container *ngIf=\"itineraryForm.get('images').value as images\">\n                    <div class=\"col-12 col-lg-3\"\n                         *ngFor=\"let image of images; let index = index\"\n                    >\n                        <div class=\"gallery-image-container\">\n                            <img [src]=\"image.filePath\" alt=\"gallery image\">\n                            <button class=\"btn-thumbnail position-absolute\"\n                                    type=\"button\"\n                                    (click)=\"removeImage(index)\"\n                            >\n                                <i class=\"fas fa-times\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </ng-container>\n\n\n                <ng-template #imagesModal let-modal>\n                    <app-choose-media [category]=\"'image'\"\n                                      [multipleSelect]=\"true\"\n                                      [modalRef]=\"modal\"></app-choose-media>\n                </ng-template>\n\n                <h2>\n                    Informatii calatorie\n                </h2>\n\n                <!--itinerary journey theme-->\n                <div class=\"col-12 col-lg-6\">\n                    <ng-container *ngIf=\"journeyThemeAttributes\">\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Journey theme</mat-label>\n                            <mat-select formControlName=\"journeyThemeId\">\n                                <mat-option *ngFor=\"let attribute of journeyThemeAttributes\" [value]=\"attribute.id\">\n                                    {{ attribute.name }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"itineraryForm.get('journeyThemeId').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </ng-container>\n                </div>\n\n                <!--itinerary type of destination-->\n                <div class=\"col-12 col-lg-6\">\n                    <ng-container *ngIf=\"typeOfDestinationAttributes\">\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Type of destination</mat-label>\n                            <mat-select formControlName=\"typeOfDestinationId\">\n                                <mat-option *ngFor=\"let attribute of typeOfDestinationAttributes\" [value]=\"attribute.id\">\n                                    {{ attribute.name }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"itineraryForm.get('typeOfDestinationId').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </ng-container>\n                </div>\n\n                <!--itinerary type of journey-->\n                <div class=\"col-12 col-lg-6\">\n                    <ng-container *ngIf=\"typeOfJourneyAttributes\">\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Type of journey</mat-label>\n                            <mat-select formControlName=\"typeOfJourneyId\">\n                                <mat-option *ngFor=\"let attribute of typeOfJourneyAttributes\" [value]=\"attribute.id\">\n                                    {{ attribute.name }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"itineraryForm.get('typeOfJourneyId').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </ng-container>\n                </div>\n\n\n                <h2>\n                    Activitati\n                </h2>\n\n\n                <ng-container *ngIf=\"(rentalBookingResourceTypes$ | async) as rentalBookingResourceTypes\">\n                    <!--itinerary accommodation-->\n                    <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Accommodation</mat-label>\n                                <mat-select formControlName=\"accommodationResourceTypes\" multiple>\n                                    <mat-option *ngFor=\"let resourceType of rentalBookingResourceTypes\" [value]=\"resourceType.id\">\n                                        {{ resourceType.nameEn }}\n                                    </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"itineraryForm.get('accommodationResourceTypes').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            </mat-form-field>\n                    </div>\n                </ng-container>\n\n                <ng-container *ngIf=\"(menuResourceTypes$ | async) as menuResourceTypes\">\n                    <!--itinerary eat and drinks-->\n                    <div class=\"col-12 col-lg-6\">\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Eat and drinks</mat-label>\n                            <mat-select formControlName=\"eatAndDrinksResourceTypes\" multiple>\n                                <mat-option *ngFor=\"let resourceType of menuResourceTypes\" [value]=\"resourceType.id\">\n                                    {{ resourceType.nameEn }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"itineraryForm.get('eatAndDrinksResourceTypes').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </div>\n                </ng-container>\n\n                <ng-container *ngIf=\"(ticketBookingResourceTypes$ | async) as ticketBookingResourceTypes\">\n                    <!--itinerary day activity-->\n                    <div class=\"col-12 col-lg-6\">\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Day activity</mat-label>\n                            <mat-select formControlName=\"dayActivityResourceTypes\" multiple>\n                                <mat-option *ngFor=\"let resourceType of ticketBookingResourceTypes\" [value]=\"resourceType.id\">\n                                    {{ resourceType.nameEn }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"itineraryForm.get('dayActivityResourceTypes').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </div>\n\n                    <!--itinerary evening activity-->\n                    <div class=\"col-12 col-lg-6\">\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Evening activity</mat-label>\n                            <mat-select formControlName=\"eveningActivityResourceTypes\" multiple>\n                                <mat-option *ngFor=\"let resourceType of ticketBookingResourceTypes\" [value]=\"resourceType.id\">\n                                    {{ resourceType.nameEn }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"itineraryForm.get('eveningActivityResourceTypes').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </div>\n                </ng-container>\n\n\n                <h2>\n                    Altele\n                </h2>\n\n                <ng-container [formArrayName]=\"'resources'\">\n                    <ng-container *ngFor=\"let resource of itineraryForm.get('resources')?.controls; let i = index\" [formGroupName]=\"i\">\n                        <!--country-->\n                        <div class=\"col-12 col-lg-6\">\n                            <p>\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>Country</mat-label>\n                                    <mat-select formControlName=\"country\" (selectionChange)=\"getCities($event)\">\n                                        <mat-option *ngFor=\"let country of countries\" [value]=\"country\">\n                                            {{country}}\n                                        </mat-option>\n                                    </mat-select>\n                                    <mat-icon *ngIf=\"itineraryForm.get('resources')?.controls[i].get('country').value\"\n                                              (click)=\"itineraryForm.get('resources')?.controls[i].get('country').setValue(null)\"\n                                              role=\"button\" matSuffix>clear</mat-icon>\n                                    <mat-error *ngIf=\"itineraryForm.get('resources')?.controls[i].get('country').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                </mat-form-field>\n                            </p>\n                        </div>\n\n                        <!--city-->\n                        <div class=\"col-12 col-lg-6\">\n                            <p>\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>City</mat-label>\n                                    <mat-select formControlName=\"city\" (selectionChange)=\"getCoordinates($event.value)\">\n                                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.name\" >\n                                            {{city.name}}\n                                        </mat-option>\n                                    </mat-select>\n                                    <mat-icon *ngIf=\"itineraryForm.get('resources')?.controls[i].get('city').value\"\n                                              (click)=\"itineraryForm.get('resources')?.controls[i].get('city').setValue(null)\"\n                                              role=\"button\" matSuffix>clear</mat-icon>\n                                    <mat-error *ngIf=\"itineraryForm.get('resources')?.controls[i].get('city').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                </mat-form-field>\n                            </p>\n                        </div>\n                        <ng-container [formGroupName]=\"'geographicalCoordinates'\">\n                        <div class=\"col-12 col-lg-6\">\n                            <p>\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>Latitude</mat-label>\n                                    <input formControlName=\"latitude\" matInput>\n                                    <mat-icon *ngIf=\"itineraryForm.get('resources.0.geographicalCoordinates.latitude').value\"\n                                              (click)=\"itineraryForm.get('resources.0.geographicalCoordinates.latitude').setValue(null)\"\n                                              role=\"button\" matSuffix>clear</mat-icon>\n                                    <mat-error *ngIf=\"itineraryForm.get('resources.0.geographicalCoordinates.latitude').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n\n                                </mat-form-field>\n                            </p>\n                        </div>\n                        <div class=\"col-12 col-lg-6\">\n                            <p>\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>Longitude</mat-label>\n                                    <input formControlName=\"longitude\" matInput>\n                                    <mat-icon *ngIf=\"itineraryForm.get('resources.0.geographicalCoordinates.longitude').value\"\n                                              (click)=\"itineraryForm.get('resources.0.geographicalCoordinates.longitude').setValue(null)\"\n                                              role=\"button\" matSuffix>clear</mat-icon>\n                                    <mat-error *ngIf=\"itineraryForm.get('resources.0.geographicalCoordinates.longitude').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                </mat-form-field>\n                            </p>\n                        </div>\n                        </ng-container>\n                    </ng-container>\n                </ng-container>\n\n                <!--itinerary recommendation-->\n                <div class=\"col-12\">\n                    <p>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Recommendation</mat-label>\n                            <textarea formControlName=\"recommendation\"\n                                      placeholder=\"Recommendation\"\n                                      matInput\n                                      cdkTextareaAutosize\n                                      cdkAutosizeMinRows=\"1\"\n                                      cdkAutosizeMaxRows=\"20\"\n                            ></textarea>\n                            <mat-icon *ngIf=\"itineraryForm.get('recommendation').value\"\n                                      (click)=\"itineraryForm.get('recommendation').setValue(null)\"\n                                      role=\"button\" matSuffix>clear</mat-icon>\n                            <mat-error *ngIf=\"itineraryForm.get('recommendation').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </p>\n                </div>\n\n            </div>\n        </form>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 10056:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/itineraries/list-itineraries/list-itineraries.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Itinerarii\"\n        [buttonAddRoute]=\"'../../itineraries/add'\">\n        </app-dashboard-header>\n    </div>\n\n    <div class=\"container\">\n        <!----Table---------------------------------------------------------------------------->\n        <div *ngIf=\"dataLoaded\">\n            <div class=\"row filterRow\">\n                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                    <input matInput type=\"text\" [formControl]=\"searchFilter\" (keydown.enter)=\"filterData()\" placeholder=\"Căutare\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"row tableContent\">\n\n                <table class=\"editorals-table-class\" mat-table matSort appMatTableResponsive [dataSource]=\"editorialsList\" (matSortChange) = applyFilter($event)>\n\n                    <!--Number-->\n                    <ng-container matColumnDef=\"id\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> # </th>\n                        <td mat-cell *matCellDef=\"let element; let i=index\" attr.data-column-name=\"#\"> {{ (i + 1) + pageSize * page}} </td>\n                    </ng-container>\n\n                    <!--Title-->\n                    <ng-container matColumnDef=\"title\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'FIELD.TITLE'| translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.TITLE'| translate}}\" >{{element.name}} </td>\n                    </ng-container>\n\n                    <!--Category-->\n                    <ng-container matColumnDef=\"typeOfDestination\">\n                        <th mat-header-cell *matHeaderCellDef> Tip destinație</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"\"> {{element.typeOfDestinationName}}</td>\n                    </ng-container>\n\n                    <!--Category-->\n                    <ng-container matColumnDef=\"typeOfJourney\">\n                        <th mat-header-cell *matHeaderCellDef>Tip de călătorie</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"\"> {{element.typeOfJourneyName}}</td>\n                    </ng-container>\n\n                    <!--Category-->\n                    <ng-container matColumnDef=\"journeyTheme\">\n                        <th mat-header-cell *matHeaderCellDef>Temă de călătorie</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"\"> {{element.journeyThemeName}}</td>\n                    </ng-container>\n\n<!--                    &lt;!&ndash;Category&ndash;&gt;-->\n<!--                    <ng-container matColumnDef=\"category\">-->\n<!--                        <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.CATEGORY'|translate}}</th>-->\n<!--                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"\"> {{element.category}}</td>-->\n<!--                    </ng-container>-->\n\n\n\n                    <!--Create data-->\n                    <ng-container matColumnDef=\"date\">\n                        <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.CREATION_DATE'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.CREATION_DATE'|translate}}\">{{element.date | date:'dd/MM/yyyy'}}</td>\n                    </ng-container>\n\n\n                    <!--actions-->\n                    <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> {{'FIELD.ACTIONS'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index\" data-column-name=\"Acțiuni\">\n                            <div class=\" d-flex actions-container py-2\" >\n\n                                <!--Edit button-->\n                                <button class=\"btn-round btn-no-outline\"\n                                        (click)=\"goToEditItinerary(element)\"\n                                        matTooltip=\"Editează\" id=\"editEditorial_{{i}}\">\n                                    <i class=\"fa fa-pen\"></i>\n                                </button>\n\n                                <button class=\"btn-round btn-no-outline\"\n                                        (click)=\"openModal(deleteModal, element.status)\"\n                                        matTooltip=\"Sterge\" id=\"editEditorial_{{i}}\">\n                                    <i class=\"fa fa-trash\"></i>\n                                </button>\n                                <ng-template #deleteModal let-c=\"close\" let-d=\"dismiss\">\n                                    <div class=\"modal-card card\">\n                                        <div class=\"card-header border-0\">\n                                            <h3 class=\"m-0\">\n                                                {{element.name}}\n                                            </h3>\n                                        </div>\n\n                                        <div class=\"card-body\">\n                                            <div class=\"card-event card\">\n                                                <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">\n                                                    <h5>Sunteti sigur ca doriti sa stergeti acest itinerariu?</h5>\n                                                </div>\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"card-footer border-0\">\n                                            <div class=\"row\">\n                                                <div class=\"col-12 col-sm-6\">\n                                                    <button class=\"btn-auto btn-color-outline w-100\"\n                                                            (click)=\"closeModal()\">\n                                                        <i class=\"fas fa-times\"></i>\n                                                        {{ 'BTN.CANCEL' | translate}}\n                                                    </button>\n                                                </div>\n\n                                                <div class=\"col-12 col-sm-6\">\n                                                    <button class=\"btn-auto btn-color-fill w-100\"\n                                                            (click)=\"deleteItinerary(element.id)\">\n                                                        <i class=\"fas fa-check\"></i>\n                                                        {{ 'BTN.CONFIRM' | translate}}\n                                                    </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </div>\n                        </td>\n\n                    </ng-container>\n\n\n\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n\n\n                <!--Pagination-->\n                <mat-paginator\n                        [pageSizeOptions]=\"pageItems\"\n                        [length]=\"totalElements\"\n                        [pageSize]=\"pageSize\"\n                        (page)=\"pageChanged($event)\"\n                >\n                </mat-paginator>\n\n            </div>\n            <!-- Table container -->\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_itineraries_itineraries_module_ts.js.map