(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_trips_trips_module_ts"],{

/***/ 80012:
/*!***************************************************************!*\
  !*** ./src/app/features/trips/_services/locations.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsService": () => (/* binding */ LocationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10745);




let LocationsService = class LocationsService {
  constructor(http) {
    this.http = http;
    // START: COUNTRIES
    this.countryState = null;
  }
  setCountryState(country) {
    this.countryState = country;
  }
  getCountryById(countryId) {
    if (this.countryState?.id === countryId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.countryState);
    }
    return this.http.get('/bestinform/getCountryById?countryId=' + countryId);
  }
  getCountryList() {
    return this.http.get('/bestinform/getCountryList');
  }
  addCountry(country) {
    return this.http.post('/bestinform/addCountry', country);
  }
  updateCountry(countryId, country) {
    return this.http.put('/bestinform/updateCountry?countryId=' + countryId, country);
  }
  deleteCountry(countryId) {
    return this.http.delete('/bestinform/deleteCountry?countryId=' + countryId);
  }
  // END: COUNTRIES
  // START: LOCATIONS
  getLocationListByCountryId(countryId) {
    return this.http.get('/bestinform/getLocationListByCountryId?countryId=' + countryId);
  }
  getLocationById(locationId) {
    return this.http.get('/bestinform/getLocationById?locationId=' + locationId);
  }
  addLocation(countryId, location) {
    return this.http.post('/bestinform/addLocation?countryId=' + countryId, location);
  }
  updateLocation(locationId, location) {
    return this.http.put('/bestinform/updateLocation?locationId=' + locationId, location);
  }
  deleteLocation(locationId) {
    return this.http.delete('/bestinform/deleteLocation?locationId=' + locationId);
  }
  // END: LOCATIONS
  //START:TRIPS
  addTrip(trip) {
    return this.http.post('/bestinform/addTrip', trip);
  }
  // updateTrip(tripId:string, trip:object) {
  //   return this.http.put<{success: boolean, reason: string}>('/bestinform/updateTrip?tripId='+tripId, trip);
  // }
  updateTrip(tripId, trip) {
    return this.http.put("/bestinform/updateTrip?tripId=" + tripId, trip);
  }
  getTripById(tripId) {
    return this.http.get('/bestinform/getTripById?tripId=' + tripId);
  }
  //change status
  changeTripStatus(tripId, status) {
    return this.http.put("/bestinform/changeTripStatus?tripId=" + tripId + '&status=' + status, {});
  }
  //trips list
  listTripsFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listTripsFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters ? filters : {});
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
LocationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], LocationsService);


/***/ }),

/***/ 68116:
/*!*******************************************************************************!*\
  !*** ./src/app/features/trips/add-edit-country/add-edit-country.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditCountryComponent": () => (/* binding */ AddEditCountryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_country_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-country.component.html?ngResource */ 29194);
/* harmony import */ var _add_edit_country_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-country.component.scss?ngResource */ 1761);
/* harmony import */ var _add_edit_country_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_edit_country_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/locations.service */ 80012);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/modalmedia.service */ 34864);













let AddEditCountryComponent = class AddEditCountryComponent {
  constructor(locationsService, router, route, toastService, translate, fb, modalService, modalMediaService) {
    this.locationsService = locationsService;
    this.router = router;
    this.route = route;
    this.toastService = toastService;
    this.translate = translate;
    this.fb = fb;
    this.modalService = modalService;
    this.modalMediaService = modalMediaService;
    this.countryForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      image: [{
        fileName: '',
        filePath: ''
      }, this.noImageValidator],
      description: ['']
    });
    this.newLocationForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      image: [{
        fileName: '',
        filePath: ''
      }, this.noImageValidator],
      description: ['']
    });
    this.locationsForm = this.fb.group({
      locations: this.fb.array([])
    });
    this.isEditMode = false;
    this.countryData = null;
    this.locationsData = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.listenToRoute();
    this.listenToMedia();
  }
  listenToRoute() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(route => {
      if (route.has('countryId')) {
        this.isEditMode = true;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([this.locationsService.getCountryById(route.get('countryId')), this.locationsService.getLocationListByCountryId(route.get('countryId')).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([])))]);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) return;
        [this.countryData, this.locationsData] = res;
        this.countryForm.patchValue(this.countryData);
        this.initLocationsForm();
      },
      error: () => {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_FOUND"), "error");
      }
    });
  }
  listenToMedia() {
    this.modalMediaService.currentImagesArray.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.ngUnsubscribe)).subscribe(array => {
      if (array?.[0]?.for === 'country-img') {
        this.countryForm.get('image').setValue(array[0].selectedMedia);
      } else if (array?.[0]?.for.split('-')[0] === 'location') {
        const locationIndex = array[0].for.split('-')[1];
        this.locations.controls[locationIndex].get('image').setValue(array[0].selectedMedia);
      } else if (array?.[0]?.for === 'new-location') {
        this.newLocationForm.get('image').setValue(array[0].selectedMedia);
      }
    });
  }
  noImageValidator(control) {
    return !control.value?.filePath ? {
      noImage: true
    } : null;
  }
  initLocationsForm() {
    if (this.locationsData?.length > 0) {
      this.locationsData.forEach(location => {
        this.locations.push(this.fb.group({
          name: [location?.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
          image: [{
            fileName: location?.image?.fileName,
            filePath: location?.image?.filePath
          }, this.noImageValidator],
          description: [location?.description]
        }));
      });
    } else {
      // this.locationsForm.setValue(null);
    }
  }
  get locations() {
    return this.locationsForm.get('locations');
  }
  submitCountry() {
    console.log(this.countryForm.value);
    this.countryForm.markAllAsTouched();
    if (this.countryForm.valid) {
      if (this.isEditMode) {
        this.locationsService.updateCountry(this.countryData.id, this.countryForm.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: res => {
            if (res.success) {
              this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), 'Successfully updated country', 'success');
              this.countryData = {
                ...this.countryData,
                ...this.countryForm.value
              };
            }
          },
          error: () => {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
          }
        });
      } else {
        this.locationsService.addCountry(this.countryForm.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: res => {
            if (res.success) {
              this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), 'Successfully created country', 'success');
              void this.router.navigate(['../edit', res.reason], {
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
  submitNewLocation() {
    this.newLocationForm.markAllAsTouched();
    if (this.newLocationForm.valid) {
      this.locationsService.addLocation(this.countryData.id, this.newLocationForm.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          if (res.success) {
            const newLocation = {
              id: res.reason,
              countryId: this.countryData.id,
              ...this.newLocationForm.value
            };
            this.locationsData.push({
              ...newLocation
            });
            this.locations.push(this.fb.group({
              name: [this.newLocationForm.value.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              image: [{
                fileName: this.newLocationForm.value?.image?.fileName,
                filePath: this.newLocationForm.value?.image?.filePath
              }, this.noImageValidator],
              description: [this.newLocationForm.value?.description]
            }));
            this.modalService.dismissAll();
            this.newLocationForm.reset();
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), 'Successfully created location', 'success');
          }
        },
        error: () => {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
        }
      });
    } else {
      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("ERROR.REQUIRED-ALL"), "error");
    }
  }
  updateLocation(locationIndex) {
    const selectedLocation = this.locations.controls[locationIndex];
    selectedLocation.markAllAsTouched();
    if (selectedLocation.valid) {
      this.locationsService.updateLocation(this.locationsData[locationIndex].id, selectedLocation.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          if (res.success) {
            this.locationsData[locationIndex] = {
              ...this.locationsData[locationIndex],
              ...selectedLocation.value
            };
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), 'Successfully updated location', 'success');
          }
        },
        error: () => {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
        }
      });
    } else {
      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("ERROR.REQUIRED-ALL"), "error");
    }
  }
  deleteLocation(locationIndex) {
    this.locationsService.deleteLocation(this.locationsData[locationIndex].id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.locationsData.splice(locationIndex, 1);
        this.locations.removeAt(locationIndex);
        this.modalService.dismissAll();
        this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), 'Successfully deleted location', 'success');
      },
      error: () => {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
      }
    });
  }
  openMedia(content) {
    this.modalService.open(content, {
      centered: true,
      size: 'xl'
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_locations_service__WEBPACK_IMPORTED_MODULE_2__.LocationsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal
  }, {
    type: _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_4__.ModalMediaService
  }];
};
AddEditCountryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-add-edit-country',
  template: _add_edit_country_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_4__.ModalMediaService],
  styles: [(_add_edit_country_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddEditCountryComponent);


/***/ }),

/***/ 93702:
/*!*************************************************************************!*\
  !*** ./src/app/features/trips/add-edit-trip/add-edit-trip.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditTripComponent": () => (/* binding */ AddEditTripComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_trip_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-trip.component.html?ngResource */ 42969);
/* harmony import */ var _add_edit_trip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-trip.component.scss?ngResource */ 66805);
/* harmony import */ var _add_edit_trip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_edit_trip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _services_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/locations.service */ 80012);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/modalmedia.service */ 34864);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);














let AddEditTripComponent = class AddEditTripComponent {
  // editRoomsArray=[];
  constructor(fb, toastService, translate, locationService, modalMediaService, modalService, route, datePipe, router) {
    this.fb = fb;
    this.toastService = toastService;
    this.translate = translate;
    this.locationService = locationService;
    this.modalMediaService = modalMediaService;
    this.modalService = modalService;
    this.route = route;
    this.datePipe = datePipe;
    this.router = router;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.isEditMode = false;
    //list of countries
    this.countriesList = [];
    //list of destinations / locations
    this.locationsList = [];
    this.accommodationTypeList = [];
  }
  ngOnInit() {
    this.getPathSlug();
    this.initFormGroup();
    this.listenToMedia();
  }
  //init form
  initFormGroup() {
    this.addEditTripForm = this.fb.group({
      //general info
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      countryId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      locationId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      description: [''],
      estimatedPrice: [''],
      featuredImage: [null],
      images: [[]],
      //accomodation
      accommodationType: [''],
      // nights:[''],
      offerPackage: [''],
      // attributes:[''],//de verificat
      //plecare
      //transportation
      transportType: [''],
      departure: this.fb.group({
        location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        start: [''],
        end: ['']
      }),
      arrival: this.fb.group({
        location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        start: [''],
        end: ['']
      }),
      hotelList: this.fb.group({
        hotelName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        hotelAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        starRating: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        rooms: this.fb.array([])
      }),
      //   hotelList: this.fb.array([
      //     this.fb.group({
      //       hotelName: ['',Validators.required],
      //       rooms: this.fb.array([])
      //     })
      // ]),
      //tourism recommendation
      recommendation: ['']
    });
    this.statusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    //get countries
    this.getCountriesList();
    //get current date for time picker
    this.currentDay = new Date();
  }
  //get the editorial slug from url
  getPathSlug() {
    this.route.params.subscribe(params => {
      this.tripId = params['tripId'];
      console.log('SLUG', this.tripId);
      //get editorial by slug
      if (this.tripId !== undefined) {
        this.isEditMode = true;
        this.getTripById(this.tripId);
      } else {
        console.log('NU AM SLUG');
      }
    });
  }
  //populate countries select list
  getCountriesList() {
    this.locationService.getCountryList().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.countriesList = res;
      }
    });
  }
  //on country select, call getLocationListByCountryId(country)
  getLocationListByCountryId(event) {
    if (!this.isEditMode) {
      if (event.isUserInput) {
        this.locationsList = [];
        this.locationService.getLocationListByCountryId(event.source.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: res => {
            res.forEach(location => {
              if (location.countryId === event.source.value) {
                this.locationsList.push(location);
              }
            });
          }
        });
      }
    } else {
      //if edit mode
      this.locationService.getLocationListByCountryId(this.tripData?.countryId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          this.locationsList = [];
          res.forEach(location => {
            if (location.countryId === this.tripData.countryId) {
              this.locationsList.push(location);
            }
          });
        }
      });
    }
  }
  //get trip by id to edit
  getTripById(tripId) {
    this.locationService.getTripById(tripId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log('tripul de modificat', res);
        this.tripData = res;
        this.getLocationListByCountryId();
        this.addEditTripForm.patchValue(this.tripData);
        this.addEditTripForm.get('hotelList').patchValue(this.tripData.hotelList[0]);
        this.statusForm.patchValue(this.tripData.status);
        this.slug = this.tripData.slug;
        if (this.tripData.hotelList[0].rooms) {
          this.tripData.hotelList[0].rooms.forEach(room => {
            this.rooms.push(this.fb.group({
              name: [room.name],
              image: [room.image],
              people: [room.people],
              bedType: this.fb.group({
                type: [room.bedType.type],
                quantity: [room.bedType.quantity]
              }),
              available: [room.available],
              price: [room.price]
            }));
          });
        }
      }
    });
  }
  //rooms array
  get rooms() {
    return this.addEditTripForm.get('hotelList.rooms');
  }
  //item to add in room array
  newItem() {
    return this.fb.group({
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      image: null,
      people: 0,
      bedType: this.fb.group({
        type: [''],
        quantity: 0
      }),
      available: 0,
      price: 0
    });
  }
  //add new room button
  addItem() {
    this.rooms.push(this.newItem());
  }
  //remove room
  removeItem(index) {
    this.rooms.removeAt(index);
  }
  //get media
  listenToMedia() {
    this.modalMediaService.currentImagesArray.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(array => {
      console.log('array media', array);
      if (array.length) {
        if (array?.[0]?.for === 'trip-featuredImg') {
          this.addEditTripForm.get('featuredImage').setValue(array[0].selectedMedia);
        } else if (array?.[0]?.for?.includes('roomFeaturedImg')) {
          const roomIndex = array?.[0]?.for.split('-')[1];
          this.rooms.controls[roomIndex].get('image').setValue(array[0].selectedMedia);
        } else {
          this.addEditTripForm.get('images').setValue(array);
        }
      }
    });
  }
  // delete image
  removeImage(imageIndex) {
    const modifiedImgArray = this.addEditTripForm.get('images').value.slice();
    modifiedImgArray.splice(imageIndex, 1);
    this.modalMediaService.changeImageArray(modifiedImgArray);
  }
  //media modal
  openMedia(content) {
    // this.modalMediaService.sendImagesToService([this.domainImagesForm.value]);
    this.modalService.open(content, {
      centered: true,
      size: 'xl'
    });
  }
  updateTrip(tripId, trip) {
    console.log(trip);
    const updateTrip = {
      ...trip,
      slug: this.slug,
      status: this.statusForm.value
    };
    this.locationService.updateTrip(tripId, updateTrip).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      if (res.success) {
        //list changed
        this.toastService.showToast("Succes", "Trip editat cu succes!", "success");
        this.router.navigate(['../../list'], {
          relativeTo: this.route
        });
      }
    }, error => {
      console.log(error);
      this.toastService.showToast("Eroare", "A aparut o problema!", "error");
    });
  }
  changeTripStatus(status) {
    this.locationService.changeTripStatus(this.tripId, status).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      if (res.success) {
        this.toastService.showToast("Succes", "Status editat cu succes!", "success");
      }
    }, error => {
      console.log(error);
      this.toastService.showToast("Eroare", "A aparut o problema!", "error");
    });
  }
  createTrip(trip) {
    const tripWithStatus = {
      ...trip,
      status: "pending_review",
      currency: "EUR"
    };
    console.log('form trip', tripWithStatus);
    // console.log(tripWithStatus);
    this.locationService.addTrip(tripWithStatus).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (res.success) {
          this.toastService.showToast("Succes", "Trip creat cu succes!", "success");
          this.router.navigate(['../../list'], {
            relativeTo: this.route
          });
        }
      },
      error: () => {
        this.toastService.showToast("Eroare", "A aparut o problema!", "error");
      }
    });
  }
  submitEvent() {
    //de verificat daca e valid
    this.addEditTripForm.markAllAsTouched();
    this.startDate = this.datePipe.transform(this.addEditTripForm.get('startDate').value, 'yyyy-MM-dd');
    this.endDate = this.datePipe.transform(this.addEditTripForm.get('endDate').value, 'yyyy-MM-dd');
    // const trip=this.addEditTripForm.value;
    const trip = {
      name: this.addEditTripForm.get('name').value,
      countryId: this.addEditTripForm.get('countryId').value,
      locationId: this.addEditTripForm.get('locationId').value,
      startDate: this.startDate,
      endDate: this.endDate,
      // startDate:this.addEditTripForm.get('startDate').value,
      // endDate:this.addEditTripForm.get('endDate').value,
      description: this.addEditTripForm.get('description').value,
      featuredImage: this.addEditTripForm.get('featuredImage').value,
      images: this.addEditTripForm.get('images').value,
      transportType: this.addEditTripForm.get('transportType').value,
      departure: this.addEditTripForm.get('departure').value,
      arrival: this.addEditTripForm.get('arrival').value,
      hotelList: [this.addEditTripForm.get('hotelList').value],
      accommodationType: this.addEditTripForm.get('accommodationType').value,
      offerPackage: this.addEditTripForm.get('offerPackage').value,
      recommendation: this.addEditTripForm.get('recommendation').value,
      estimatedPrice: this.addEditTripForm.get('estimatedPrice').value
    };
    if (this.addEditTripForm.valid) {
      //edit mode
      if (this.isEditMode) {
        this.updateTrip(this.tripId, trip);
        console.log('ID din Edit mode', this.tripId);
        console.log('Trip din trip mode', trip);
      } else {
        //create mote
        this.createTrip(trip);
      }
    } else {
      console.log('formularul nu e valid');
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }, {
    type: _services_locations_service__WEBPACK_IMPORTED_MODULE_2__.LocationsService
  }, {
    type: _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_4__.ModalMediaService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }];
  static #_2 = this.propDecorators = {
    accordion: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatAccordion]
    }]
  };
};
AddEditTripComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-add-edit-trip',
  template: _add_edit_trip_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_4__.ModalMediaService, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [(_add_edit_trip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddEditTripComponent);


/***/ }),

/***/ 65582:
/*!***********************************************************************!*\
  !*** ./src/app/features/trips/archive-trip/archive-trip.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchiveTripComponent": () => (/* binding */ ArchiveTripComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _archive_trip_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./archive-trip.component.html?ngResource */ 9483);
/* harmony import */ var _archive_trip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./archive-trip.component.scss?ngResource */ 96875);
/* harmony import */ var _archive_trip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_archive_trip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/locations.service */ 80012);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);










let ArchiveTripComponent = class ArchiveTripComponent {
  constructor(locationService, modalService, toastService, router, ngbActiveModal, ngbModal) {
    this.locationService = locationService;
    this.modalService = modalService;
    this.toastService = toastService;
    this.router = router;
    this.ngbActiveModal = ngbActiveModal;
    this.ngbModal = ngbModal;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.tripId = this.modalService.getElementId();
    this.getTripById(this.tripId);
  }
  archiveTrip() {
    this.locationService.changeTripStatus(this.tripId, 'inactive').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: () => {
        //anuntam ca s-a schimbat lista
        this.modalService.triggerUserListChanges(true);
        this.toastService.showToast("Success", "Trip arhivat!", "success");
      }
    });
    this.close();
  }
  //populate the modal with trip data
  getTripById(idTrip) {
    this.locationService.getTripById(idTrip).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: tripRes => {
        this.tripData = tripRes;
        //getCountryName
        this.locationService.getCountryById(this.tripData.countryId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: country => {
            this.countryName = country.name;
          }
        });
        //getLocationName
        this.locationService.getLocationById(this.tripData.locationId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: location => {
            this.locationName = location.name;
          }
        });
      }
    });
  }
  close() {
    this.ngbModal.dismissAll();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_locations_service__WEBPACK_IMPORTED_MODULE_2__.LocationsService
  }, {
    type: src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_3__.ModalService
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
  }];
};
ArchiveTripComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-archive-trip',
  template: _archive_trip_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal],
  styles: [(_archive_trip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ArchiveTripComponent);


/***/ }),

/***/ 54469:
/*!*****************************************************************!*\
  !*** ./src/app/features/trips/countries/countries.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesComponent": () => (/* binding */ CountriesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _countries_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries.component.html?ngResource */ 10209);
/* harmony import */ var _countries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries.component.scss?ngResource */ 89594);
/* harmony import */ var _countries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_countries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _services_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/locations.service */ 80012);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);









let CountriesComponent = class CountriesComponent {
  constructor(locationsService, toastService, translate, modalService) {
    this.locationsService = locationsService;
    this.toastService = toastService;
    this.translate = translate;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.countries$ = this.locationsService.getCountryList();
  }
  deleteCountry(countryId, countryIndex, countriesRef) {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this.locationsService.deleteCountry(countryId)).then(res => {
      if (res.success) {
        countriesRef.splice(countryIndex, 1);
        this.modalService.dismissAll();
        this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), 'Successfully deleted country', 'success');
      }
    }).catch(() => {
      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_locations_service__WEBPACK_IMPORTED_MODULE_2__.LocationsService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal
  }];
};
CountriesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-countries',
  template: _countries_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_countries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CountriesComponent);


/***/ }),

/***/ 87185:
/*!*****************************************************************!*\
  !*** ./src/app/features/trips/trip-list/trip-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripListComponent": () => (/* binding */ TripListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _trip_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip-list.component.html?ngResource */ 16967);
/* harmony import */ var _trip_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-list.component.scss?ngResource */ 59089);
/* harmony import */ var _trip_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trip_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _services_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/locations.service */ 80012);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _archive_trip_archive_trip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../archive-trip/archive-trip.component */ 65582);















let TripListComponent = class TripListComponent {
  constructor(locationsService, ngbModalService, modalService, router, cdr, datepipe, dialog) {
    this.locationsService = locationsService;
    this.ngbModalService = ngbModalService;
    this.modalService = modalService;
    this.router = router;
    this.cdr = cdr;
    this.datepipe = datepipe;
    this.dialog = dialog;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    // Mat Table
    this.displayedColumns = ['id', 'name', 'status', 'location', 'country', 'actions'];
    this.dataList = [];
    this.pageItems = [10, 25, 100];
    // Mat Table - Filter Forms
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
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
    this.getDataList();
    // Data Loaded
    this.dataLoaded = true;
    // Change Detection
    this.cdr.detectChanges();
  }
  listChanges() {
    this.modalService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get Documents List
        this.getDataList();
        this.cdr.detectChanges();
        this.modalService.triggerUserListChanges(false);
      }
    });
  }
  getDataList() {
    const searchObj = {
      name: this.searchFilter.value ? this.searchFilter.value : ''
    };
    this.locationsService.listTripsFiltered(this.page, this.pageSize, this.sorting, this.dir, searchObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      console.log(res.content);
      this.dataList = res.content;
      this.totalElements = res.totalElements;
    });
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
    this.page = 0;
    // Get All Documents List
    this.getDataList();
  }
  // Sort List
  applyFilter(sortState) {
    if (sortState.direction) {
      this.sorting = sortState.active;
      this.dir = sortState.direction;
      // Go to first page
      this.page = 0;
      // Listen to layout changes
      this.cdr.detectChanges();
      // Get List
      this.getDataList();
    }
  }
  // Modal - request doc
  archiveTripModal(elementId) {
    this.ngbModalService.open(_archive_trip_archive_trip_component__WEBPACK_IMPORTED_MODULE_4__.ArchiveTripComponent, {
      centered: true
    });
    this.modalService.setElementId(elementId);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_locations_service__WEBPACK_IMPORTED_MODULE_2__.LocationsService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
  }, {
    type: src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_3__.ModalService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, {
        static: true
      }]
    }]
  };
};
TripListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-trip-list',
  template: _trip_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [(_trip_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TripListComponent);


/***/ }),

/***/ 76860:
/*!************************************************!*\
  !*** ./src/app/features/trips/trips.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripsModule": () => (/* binding */ TripsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries/countries.component */ 54469);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _add_edit_country_add_edit_country_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-country/add-edit-country.component */ 68116);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/text-field */ 35804);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _add_edit_trip_add_edit_trip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-trip/add-edit-trip.component */ 93702);
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 20820);
/* harmony import */ var _trip_list_trip_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-list/trip-list.component */ 87185);
/* harmony import */ var _archive_trip_archive_trip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./archive-trip/archive-trip.component */ 65582);



















const routes = [{
  path: '',
  redirectTo: 'countries',
  pathMatch: 'full'
}, {
  path: 'countries',
  component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_0__.CountriesComponent
}, {
  path: 'countries/add',
  component: _add_edit_country_add_edit_country_component__WEBPACK_IMPORTED_MODULE_2__.AddEditCountryComponent
}, {
  path: 'countries/edit/:countryId',
  component: _add_edit_country_add_edit_country_component__WEBPACK_IMPORTED_MODULE_2__.AddEditCountryComponent
}, {
  path: 'add',
  component: _add_edit_trip_add_edit_trip_component__WEBPACK_IMPORTED_MODULE_4__.AddEditTripComponent
}, {
  path: 'edit/:tripId',
  component: _add_edit_trip_add_edit_trip_component__WEBPACK_IMPORTED_MODULE_4__.AddEditTripComponent
}, {
  path: 'list',
  component: _trip_list_trip_list_component__WEBPACK_IMPORTED_MODULE_5__.TripListComponent
}];
let TripsModule = class TripsModule {};
TripsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_countries_countries_component__WEBPACK_IMPORTED_MODULE_0__.CountriesComponent, _add_edit_country_add_edit_country_component__WEBPACK_IMPORTED_MODULE_2__.AddEditCountryComponent, _add_edit_trip_add_edit_trip_component__WEBPACK_IMPORTED_MODULE_4__.AddEditTripComponent, _trip_list_trip_list_component__WEBPACK_IMPORTED_MODULE_5__.TripListComponent, _archive_trip_archive_trip_component__WEBPACK_IMPORTED_MODULE_6__.ArchiveTripComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__.DashboardHeaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgOptimizedImage, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_15__.MatLegacyInputModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_16__.TextFieldModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbPanelHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbPanelToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_18__.NgxMatDatetimePickerModule]
})], TripsModule);


/***/ }),

/***/ 54363:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstValueFrom": () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 14423);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 19904);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 1761:
/*!********************************************************************************************!*\
  !*** ./src/app/features/trips/add-edit-country/add-edit-country.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.custom-card {\n  background: var(--primary-background);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 24px;\n}\n.custom-card h2 {\n  margin-bottom: 0;\n}\n.custom-card form > div.row {\n  row-gap: 24px;\n}\n\np {\n  margin-bottom: 0;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.upload-image-col .thumbnail-button {\n  width: 100%;\n  height: 350px;\n  background-color: rgba(36, 57, 138, 0.04);\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n}\n.upload-image-col .thumbnail-button i {\n  font-size: 64px;\n}\n.upload-image-col .thumbnail-button span {\n  font-size: 16px;\n  font-weight: 400;\n}\n.upload-image-col .img-thumbnail {\n  height: 350px;\n  max-height: 350px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.upload-image-col .img-thumbnail img {\n  height: 348px;\n  max-height: 348px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n\n.btn-thumbnail {\n  right: 10px;\n  top: 10px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: var(--primary-background);\n  background: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n}\n.btn-thumbnail i {\n  color: var(--primary-background);\n}\n\n.location-panel-header {\n  padding: 10px 12px;\n}\n.location-panel-header p {\n  margin-bottom: 0;\n  font-weight: 700;\n  font-size: 24px;\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/trips/add-edit-country/add-edit-country.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,qCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAbA;EACE,gBAAA;AAgBF;;AAbA;EACE,WAAA;AAgBF;;AAZE;EACE,WAAA;EACA,aAAA;EACA,yCAAA;EACA,yCAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AAeJ;AAbI;EACE,eAAA;AAeN;AAZI;EACE,eAAA;EACA,gBAAA;AAcN;AAVE;EACE,aAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AAYJ;AAVI;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AAYN;;AAPA;EACE,WAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,gCAAA;EACA,mCAAA;EACA,mBAAA;AAUF;AATE;EACE,gCAAA;AAWJ;;AAPA;EACE,kBAAA;AAUF;AARE;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,cDlFQ;AC4FZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.custom-card {\n  background: var(--primary-background);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 24px;\n\n  h2 {\n    margin-bottom: 0;\n  }\n\n  form > div.row {\n    row-gap: 24px;\n  }\n}\n\np {\n  margin-bottom: 0;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.upload-image-col {\n  .thumbnail-button {\n    width: 100%;\n    height: 350px;\n    background-color: rgba($primary-color, 0.04);\n    border: 2px solid rgba($primary-color, 0.08);\n    border-radius: 8px;\n    color: rgba($primary-color, 0.08);\n    font-size: 24px;\n    font-weight: 600;\n\n    i {\n      font-size: 64px;\n    }\n\n    span {\n      font-size: 16px;\n      font-weight: 400;\n    }\n  }\n\n  .img-thumbnail {\n    height: 350px;\n    max-height: 350px;\n    border: 1px solid rgba($primary-color, 0.16);\n    border-radius: 8px;\n    position: relative;\n    padding: 0;\n\n    img {\n      height: 348px;\n      max-height: 348px;\n      border-radius: 8px;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n}\n\n.btn-thumbnail {\n  right:10px;\n  top: 10px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: var(--primary-background);\n  background: rgba($primary-color, 0.16);\n  border-radius: 100%;\n  i{\n    color:var(--primary-background);\n  }\n}\n\n.location-panel-header {\n  padding: 10px 12px;\n\n  p {\n    margin-bottom: 0;\n    font-weight: 700;\n    font-size: 24px;\n    color: $paragraph;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 66805:
/*!**************************************************************************************!*\
  !*** ./src/app/features/trips/add-edit-trip/add-edit-trip.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\nh3 {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.1px;\n  color: #24398A;\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n\n.table-container {\n  padding: 24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header {\n  padding-top: 44.5px;\n  padding-bottom: 42.5px;\n  border-color: transparent;\n  background-color: rgb(237, 239, 245);\n}\n\n.card.custom-table.gutter-b {\n  border: none;\n  padding: 24px;\n}\n\n.info-card {\n  padding: 24px;\n  gap: 24px;\n  margin-bottom: 48px;\n  background: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid var(--secondary-background);\n}\n\n.transport h4 {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.1px;\n  color: #24398A;\n}\n\n.upload-image-col .thumbnail-button {\n  width: 100%;\n  height: 350px;\n  background-color: rgba(36, 57, 138, 0.04);\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n}\n.upload-image-col .thumbnail-button i {\n  font-size: 64px;\n}\n.upload-image-col .thumbnail-button span {\n  font-size: 16px;\n  font-weight: 400;\n}\n.upload-image-col .img-thumbnail {\n  height: 350px;\n  max-height: 350px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.upload-image-col .img-thumbnail img {\n  height: 348px;\n  max-height: 348px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n\n.gallery-image-container {\n  position: relative;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n  height: 200px;\n  width: 100%;\n}\n.gallery-image-container img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.btn-thumbnail {\n  right: 10px;\n  top: 10px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: var(--primary-background);\n  background: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n}\n.btn-thumbnail i {\n  color: var(--primary-background);\n}\n\n.galery-card {\n  gap: 24px;\n  background: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid var(--secondary-background);\n  overflow: hidden;\n}\n.galery-card h4 {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  /* identical to box height, or 125% */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.1px;\n  color: black;\n}\n.galery-card .header {\n  padding: 10px;\n  border-bottom: 1px solid var(--secondary-background);\n}\n.galery-card .content {\n  padding: 24px;\n}\n\n.upload-image-col .thumbnail-button {\n  width: 100%;\n  height: 350px;\n  background-color: rgba(36, 57, 138, 0.04);\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n}\n.upload-image-col .thumbnail-button i {\n  font-size: 64px;\n}\n.upload-image-col .thumbnail-button span {\n  font-size: 16px;\n  font-weight: 400;\n}\n.upload-image-col .img-thumbnail {\n  height: 350px;\n  max-height: 350px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.upload-image-col .img-thumbnail img {\n  height: 348px;\n  max-height: 348px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n\n.btn-add-images {\n  width: 100%;\n  height: 200px;\n  background-color: rgba(36, 57, 138, 0.04);\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n}\n.btn-add-images i {\n  font-size: 64px;\n}\n.btn-add-images p {\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.gallery-image-container {\n  position: relative;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n  height: 200px;\n  width: 100%;\n}\n.gallery-image-container img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.btn-thumbnail {\n  right: 10px;\n  top: 10px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: var(--primary-background);\n  background: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n}\n.btn-thumbnail i {\n  color: var(--primary-background);\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\na.title-link {\n  text-decoration: none;\n  color: #24398A;\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/trips/add-edit-trip/add-edit-trip.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDFQ;ACmBZ;;AAbA;EACE,WAAA;AAgBF;;AAbA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;EACA,oBAAA;AAgBF;;AAbA;EACE,aAAA;EACA,kBAAA;EACA,6BAAA;AAgBF;;AAbA;EACE,mBAAA;EACA,sBAAA;EACA,yBAAA;EACA,oCAAA;AAgBF;;AAbA;EACE,YAAA;EACA,aAAA;AAgBF;;AAbA;EACE,aAAA;EACA,SAAA;EACA,mBAAA;EAEA,mBAAA;EACA,kBAAA;EACA,6CAAA;AAeF;;AANE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,cDtEY;AC+EhB;;AAHE;EACE,WAAA;EACA,aAAA;EACA,yCAAA;EACA,yCAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AAMJ;AAJI;EACE,eAAA;AAMN;AAHI;EACE,eAAA;EACA,gBAAA;AAKN;AADE;EACE,aAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AAGJ;AADI;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AAGN;;AAGA;EACE,kBAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;AAAF;AAEE;EACE,YAAA;EACA,WAAA;EACA,iBAAA;EACA,uBAAA;AAAJ;;AAIA;EACE,WAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,gCAAA;EACA,mCAAA;EACA,mBAAA;AADF;AAEE;EACE,gCAAA;AAAJ;;AAIA;EAEG,SAAA;EAED,mBAAA;EACA,kBAAA;EACA,6CAAA;EACA,gBAAA;AAHF;AAKE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,YAAA;AAJJ;AAOE;EACA,aAAA;EACE,oDAAA;AALJ;AAQE;EACI,aAAA;AANN;;AAWE;EACE,WAAA;EACA,aAAA;EACA,yCAAA;EACA,yCAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AARJ;AAUI;EACE,eAAA;AARN;AAWI;EACE,eAAA;EACA,gBAAA;AATN;AAaE;EACE,aAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AAXJ;AAaI;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AAXN;;AAgBA;EACE,WAAA;EACA,aAAA;EACA,yCAAA;EACA,yCAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AAbF;AAeE;EACE,eAAA;AAbJ;AAgBE;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AAdJ;;AAkBA;EACE,kBAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;AAfF;AAiBE;EACE,YAAA;EACA,WAAA;EACA,iBAAA;EACA,uBAAA;AAfJ;;AAmBA;EACE,WAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,gCAAA;EACA,mCAAA;EACA,mBAAA;AAhBF;AAiBE;EACE,gCAAA;AAfJ;;AAmBA;;;;;;IAAA;AAQA;EACE,qBAAA;EACA,cD3Rc;EC4Rd,gBAAA;AAjBF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import '/src/app/theme/styles/components/colors';\n\n.card-body {\n  & > p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 140%;\n    letter-spacing: -0.02em;\n    color: $paragraph;\n  }\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\nh3{\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.1px;\n  color: #24398A;\n  padding-top:14px;\n  padding-bottom:14px;\n}\n\n.table-container{\n  padding:24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header{\n  padding-top: 44.5px;\n  padding-bottom: 42.5px;\n  border-color:transparent;\n  background-color: rgba(237, 239, 245, 1);\n}\n\n.card.custom-table.gutter-b{\n  border:none;\n  padding:24px;\n}\n\n.info-card{\n  padding:24px;\n  gap: 24px;\n  margin-bottom: 48px;\n\n  background: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid var(--secondary-background);\n}\n\n// .remove-btn{\n//   top: 10px;\n//   right: 10px;\n// }\n\n.transport{\n  h4{\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 20px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    letter-spacing: 0.1px;\n    color: $primary-color;\n  }\n}\n//featured image\n.upload-image-col{\n\n  .thumbnail-button {\n    width: 100%;\n    height: 350px;\n    background-color: rgba($primary-color, 0.04);\n    border: 2px solid rgba($primary-color, 0.08);\n    border-radius: 8px;\n    color: rgba($primary-color, 0.08);\n    font-size: 24px;\n    font-weight: 600;\n\n    i {\n      font-size: 64px;\n    }\n\n    span {\n      font-size: 16px;\n      font-weight: 400;\n    }\n  }\n\n  .img-thumbnail {\n    height: 350px;\n    max-height: 350px;\n    border: 1px solid rgba($primary-color, 0.16);\n    border-radius: 8px;\n    position: relative;\n    padding: 0;\n\n    img {\n      height: 348px;\n      max-height: 348px;\n      border-radius: 8px;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n}\n\n//gallery\n.gallery-image-container {\n  position: relative;\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n  height: 200px;\n  width: 100%;\n\n  img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n}\n\n.btn-thumbnail {\n  right:10px;\n  top: 10px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: var(--primary-background);\n  background: rgba($primary-color, 0.16);\n  border-radius: 100%;\n  i{\n    color:var(--primary-background);\n  }\n}\n\n.galery-card{\n  // padding:24px;\n   gap: 24px;\n\n  background: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid var(--secondary-background);\n  overflow: hidden;\n\n  h4{\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 20px;\n    /* identical to box height, or 125% */\n\n    display: flex;\n    align-items: center;\n    text-align: center;\n    letter-spacing: 0.1px;\n    color: black;\n  }\n\n  .header{\n  padding:10px;\n    border-bottom: 1px solid var(--secondary-background);\n\n  }\n  .content{\n      padding:24px;\n  }\n}\n\n.upload-image-col {\n  .thumbnail-button {\n    width: 100%;\n    height: 350px;\n    background-color: rgba($primary-color, 0.04);\n    border: 2px solid rgba($primary-color, 0.08);\n    border-radius: 8px;\n    color: rgba($primary-color, 0.08);\n    font-size: 24px;\n    font-weight: 600;\n\n    i {\n      font-size: 64px;\n    }\n\n    span {\n      font-size: 16px;\n      font-weight: 400;\n    }\n  }\n\n  .img-thumbnail {\n    height: 350px;\n    max-height: 350px;\n    border: 1px solid rgba($primary-color, 0.16);\n    border-radius: 8px;\n    position: relative;\n    padding: 0;\n\n    img {\n      height: 348px;\n      max-height: 348px;\n      border-radius: 8px;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n}\n\n.btn-add-images {\n  width: 100%;\n  height: 200px;\n  background-color: rgba($primary-color, 0.04);\n  border: 2px solid rgba($primary-color, 0.08);\n  border-radius: 8px;\n  color: rgba($primary-color, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n\n  i {\n    font-size: 64px;\n  }\n\n  p {\n    margin-bottom: 0;\n    font-size: 16px;\n    font-weight: 400;\n  }\n}\n\n.gallery-image-container {\n  position: relative;\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n  height: 200px;\n  width: 100%;\n\n  img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n}\n\n.btn-thumbnail {\n  right:10px;\n  top: 10px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: var(--primary-background);\n  background: rgba($primary-color, 0.16);\n  border-radius: 100%;\n  i{\n    color:var(--primary-background);\n  }\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\n\na.title-link{\n  text-decoration: none;\n  color:$primary-color;\n  font-weight: 500;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 96875:
/*!************************************************************************************!*\
  !*** ./src/app/features/trips/archive-trip/archive-trip.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.container {\n  padding: 32px 52px;\n  border: none;\n}\n\n@media screen and (min-width: 1020px) {\n  .container.modal-content {\n    border: none;\n  }\n}\n.modal-header {\n  border: none;\n  max-width: 615.95px;\n}\n.modal-header h4.modal-title {\n  color: #24398A !important;\n  font-size: 24px;\n  font-weight: 600;\n  color: #231F20;\n  line-height: 33.6px;\n  text-align: left;\n}\n\n.modal-body {\n  max-width: 615.95px;\n}\n.modal-body .modal-body-text {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: rgba(35, 31, 32, 0.5);\n}\n\n.blue-card {\n  max-width: 615.95px;\n  padding: 16px;\n}\n.blue-card img {\n  height: 96px;\n  width: 96px;\n  border-radius: 50%;\n}\n.blue-card div.modal-blue-container {\n  border: solid 1px #24398A;\n  border-radius: 8px;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.08), rgba(36, 57, 138, 0.08)), #FFFFFF;\n}\n.blue-card div.modal-blue-container h4 {\n  color: #24398A !important;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 140%;\n  /* identical to box height, or 34px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n}\n.blue-card div.modal-blue-container p {\n  color: rgba(36, 57, 138, 0.8);\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n}\n.blue-card div.modal-blue-container h5 {\n  color: #24398A;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n}\n\n.modal-footer {\n  max-width: 615.95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n.modal-footer .button-wrapper {\n  justify-content: space-evenly;\n  max-width: 615.95px;\n  flex-wrap: wrap;\n}\n.modal-footer button.btn-long {\n  align-items: center;\n  max-width: 303px !important;\n  height: 50px;\n  margin: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/trips/archive-trip/archive-trip.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,YAAA;AAkBF;;AAfA;EACE;IACE,YAAA;EAkBF;AACF;AAbA;EACI,YAAA;EACA,mBAAA;AAeJ;AAbI;EACA,yBAAA;EACA,eAAA;EACE,gBAAA;EACA,cDjBM;ECkBN,mBAAA;EACA,gBAAA;AAeN;;AAZA;EACI,mBAAA;AAeJ;AAbI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,4BAAA;AAcN;;AAVE;EACE,mBAAA;EACA,aAAA;AAaJ;AAXI;EACE,YAAA;EACA,WAAA;EACA,kBAAA;AAaN;AAVQ;EACA,yBAAA;EACA,kBAAA;EACA,4FAAA;AAYR;AAVQ;EACI,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAYZ;AAVQ;EACE,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAWV;AATQ;EACE,cDhFM;ECiFN,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAUV;;AALA;EAEE,mBAAA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAOJ;AALI;EACI,6BAAA;EACA,mBAAA;EACA,eAAA;AAOR;AAJI;EACI,mBAAA;EACA,2BAAA;EACA,YAAA;EACA,WAAA;AAMR","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.container{\n  padding: 32px 52px;\n  border: none;\n}\n\n@media screen and (min-width:1020px){\n  .container.modal-content{\n    border: none;\n  }\n\n}\n\n\n.modal-header{\n    border: none;\n    max-width: 615.95px;\n\n    h4.modal-title{\n    color: $primary-color!important;\n    font-size: 24px;\n      font-weight: 600;\n      color:$paragraph;\n      line-height: 33.6px;\n      text-align:left;\n    }\n}\n.modal-body {\n    max-width: 615.95px;\n\n    .modal-body-text {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      /* or 22px */\n\n      display: flex;\n      align-items: center;\n      letter-spacing: -0.02em;\n      color: rgba($paragraph,0.5);\n    }\n  }\n\n  .blue-card{\n    max-width: 615.95px;\n    padding: 16px;\n\n    img{\n      height: 96px;\n      width:96px;\n      border-radius: 50%;\n    }\n\n        div.modal-blue-container{\n        border: solid 1px $primary-color;\n        border-radius: 8px;\n        background: linear-gradient(0deg, rgba(36, 57, 138, 0.08), rgba(36, 57, 138, 0.08)), #FFFFFF;\n\n        h4{\n            color: $primary-color!important;\n            font-weight: 700;\n            font-size: 24px;\n            line-height: 140%;\n            /* identical to box height, or 34px */\n            display: flex;\n            align-items: center;\n            letter-spacing: -0.02em;\n        }\n        p{\n          color: rgba($primary-color, 0.8);\n          font-weight: 400;\n          font-size: 16px;\n          line-height: 140%;\n          /* or 22px */\n\n          display: flex;\n          align-items: center;\n          letter-spacing: -0.02em;\n        }\n        h5{\n          color: $primary-color;\n          font-weight: 700;\n          font-size: 16px;\n          line-height: 140%;\n          /* or 22px */\n\n          display: flex;\n          align-items: center;\n          letter-spacing: -0.02em;\n        }\n    }\n  }\n\n.modal-footer{\n\n  max-width: 615.95px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n\n    .button-wrapper{\n        justify-content:space-evenly;\n        max-width: 615.95px;\n        flex-wrap: wrap;\n    }\n\n    button.btn-long{\n        align-items: center;\n        max-width: 303px!important;\n        height: 50px;\n        margin:0px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 89594:
/*!******************************************************************************!*\
  !*** ./src/app/features/trips/countries/countries.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.row-gap-24 {\n  row-gap: 24px;\n}\n\n.country-card {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16/9;\n  border-radius: 8px;\n  overflow: hidden;\n  isolation: isolate;\n}\n.country-card:before {\n  content: \"\";\n  background: linear-gradient(266.69deg, rgba(36, 57, 138, 0) 0%, #24398A 100%);\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n}\n.country-card img {\n  object-fit: cover;\n  object-position: center;\n}\n.country-card p {\n  margin: 0;\n  position: absolute;\n  bottom: 16px;\n  left: 24px;\n  color: var(--primary-background);\n  font-weight: 700;\n  font-size: 36px;\n  line-height: 140%;\n  z-index: 1;\n}\n.country-card .open-modal {\n  position: absolute;\n  top: 16px;\n  right: 24px;\n  z-index: 1;\n}\n.country-card .open-modal:hover {\n  background: rgba(36, 57, 138, 0.5);\n}\n\n.custom-card {\n  background: var(--primary-background);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 24px;\n}\n.custom-card h2 {\n  margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/trips/countries/countries.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,aAAA;AAkBF;;AAfA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,6EAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;AAkBJ;AAfE;EACE,iBAAA;EACA,uBAAA;AAiBJ;AAdE;EACE,SAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,gCAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,UAAA;AAgBJ;AAbE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;AAeJ;AAbI;EACE,kCAAA;AAeN;;AAVA;EACE,qCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;AAaF;AAXE;EACE,gBAAA;AAaJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.row-gap-24 {\n  row-gap: 24px;\n}\n\n.country-card {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16/9;\n  border-radius: 8px;\n  overflow: hidden;\n  isolation: isolate;\n\n  &:before {\n    content: '';\n    background: linear-gradient(266.69deg, rgba(36, 57, 138, 0) 0%, $primary-color 100%);\n    position: absolute;\n    inset: 0;\n    z-index: 1;\n  }\n\n  img {\n    object-fit: cover;\n    object-position: center;\n  }\n\n  p {\n    margin: 0;\n    position: absolute;\n    bottom: 16px;\n    left: 24px;\n    color: var(--primary-background);\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 140%;\n    z-index: 1;\n  }\n\n  .open-modal {\n    position: absolute;\n    top: 16px;\n    right: 24px;\n    z-index: 1;\n\n    &:hover {\n      background: rgba($primary-color, 0.5);\n    }\n  }\n}\n\n.custom-card {\n  background: var(--primary-background);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 24px;\n\n  h2 {\n    margin-bottom: 0;\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 59089:
/*!******************************************************************************!*\
  !*** ./src/app/features/trips/trip-list/trip-list.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\ntable {\n  width: 100%;\n}\n\n.content {\n  background-color: var(--primary-background);\n  margin-bottom: 34px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 24px;\n}\n\n.table-container {\n  padding: 24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n@media only screen and (min-width: 992px) {\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted {\n    max-width: 300px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted {\n    max-width: 120px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  td.mat-cell.cdk-cell.cdk-column-category.mat-column-category.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-date.mat-column-date.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-authors.mat-column-authors.ng-star-inserted {\n    max-width: 50px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\ni.fa-search {\n  color: rgba(36, 57, 138, 0.24);\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\na.title-link {\n  text-decoration: none;\n  color: #24398A;\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/trips/trip-list/trip-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAhBA;EACE,WAAA;AAmBF;;AAhBA;EACE,2CAAA;EACA,mBAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;AAmBF;;AANA;EACE,aAAA;EACA,kBAAA;EACA,6BAAA;AASF;;AAMA;EAEE;IACE,gBAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAJF;AACF;AAOA;EAGE;IACE,gBAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAPF;EAUA;;;IAGE,eAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EARF;AACF;AAWA;EACE,8BAAA;AATF;;AAYA;;;;;;IAAA;AAQA;EACE,qBAAA;EACA,cDtFc;ECuFd,gBAAA;AAVF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import '/src/app/theme/styles/components/colors';\ntable{\n  width:100%;\n}\n\n.content{\n  background-color: var(--primary-background);\n  margin-bottom:34px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 24px;\n}\n\n// .card-body {\n//   & > p {\n//     font-weight: 400;\n//     font-size: 16px;\n//     line-height: 140%;\n//     letter-spacing: -0.02em;\n//     color: $paragraph;\n//   }\n// }\n\n.table-container{\n  padding:24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n// .card-header{\n//   padding-top: 44.5px;\n//   padding-bottom: 42.5px;\n//   border-color:transparent;\n//   background-color: rgba(237, 239, 245, 1);\n// }\n\n// .card.custom-table.gutter-b{\n//   border:none;\n// }\n\n\n@media only screen and (min-width:992px){\n  //title cell\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted{\n    max-width: 300px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\n@media only screen and (min-width:992px) and (max-width: 1199px){\n\n\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted{\n    max-width: 120px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  td.mat-cell.cdk-cell.cdk-column-category.mat-column-category.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-date.mat-column-date.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-authors.mat-column-authors.ng-star-inserted{\n    max-width: 50px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\ni.fa-search{\n  color: rgba($primary-color, 0.24);\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\n\na.title-link{\n  text-decoration: none;\n  color:$primary-color;\n  font-weight: 500;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 29194:
/*!********************************************************************************************!*\
  !*** ./src/app/features/trips/add-edit-country/add-edit-country.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header\n            [pageTitleOne]=\"isEditMode ? 'Editare tara' : 'Adaugare tara'\"\n            [buttonBackRoute]=\"isEditMode ? '../../' : '../'\"\n    >\n    </app-dashboard-header>\n\n    <div class=\"custom-card mb-4\">\n        <form [formGroup]=\"countryForm\" (ngSubmit)=\"submitCountry()\">\n            <div class=\"row\">\n\n                <h2>\n                    Țară\n                </h2>\n\n                <!--country name-->\n                <div class=\"col-12 col-lg-6\">\n                    <p>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Nume țară</mat-label>\n                            <input formControlName=\"name\" matInput placeholder=\"Nume țară\">\n                            <mat-icon *ngIf=\"countryForm.get('name').value\"\n                                      (click)=\"countryForm.get('name').setValue('')\"\n                                      role=\"button\" matSuffix>clear</mat-icon>\n                            <mat-error *ngIf=\"countryForm.get('name').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </p>\n                </div>\n\n                <!--country description-->\n                <div class=\"col-12\">\n                    <p>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Descriere țară</mat-label>\n                            <textarea formControlName=\"description\"\n                                      placeholder=\"Descriere țară\"\n                                      matInput\n                                      cdkTextareaAutosize\n                                      cdkAutosizeMinRows=\"1\"\n                                      cdkAutosizeMaxRows=\"20\"\n                            ></textarea>\n                            <mat-icon *ngIf=\"countryForm.get('description').value\"\n                                      (click)=\"countryForm.get('description').setValue('')\"\n                                      role=\"button\" matSuffix>clear</mat-icon>\n                            <mat-error *ngIf=\"countryForm.get('description').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </p>\n                </div>\n\n                <!--country featured image-->\n                <div class=\"col-12 upload-image-col\">\n\n                    <p class=\"text-danger\" *ngIf=\"countryForm.get('image').hasError('noImage') && countryForm.get('image').touched\">\n                        Imaginea este obligatorie\n                    </p>\n                    <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                    <button *ngIf=\"!countryForm.get('image').value?.filePath\"\n                            class=\"thumbnail-button\n                                   d-flex flex-column align-items-center justify-content-center\"\n                            type=\"button\"\n                            (click)=\"openMedia(countryImageModal)\"\n                            id=\"btnChangeItineraryFeaturedImg\">\n                        <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}} <span>1400 x 1400px</span>\n                    </button>\n\n                    <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                    <div *ngIf=\"countryForm.get('image').value?.filePath\" class=\"img-thumbnail\">\n                        <img class=\"img-fluid w-100\"\n                             [src]=\"countryForm.get('image').value?.filePath\" alt=\"thumbnail\">\n                        <button\n                                (click)=\"countryForm.get('image').setValue(null); countryForm.get('image').markAsTouched()\"\n                                type=\"button\"\n                                id=\"btnRemoveItineraryFeaturedImg\"\n                                class=\"btn-thumbnail position-absolute\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </div>\n                </div>\n\n                <div class=\"col-12\">\n                    <button type=\"submit\" class=\"btn-auto btn-color-fill float-end mb-4\">\n                        Salveaza\n                    </button>\n                </div>\n\n                <ng-template #countryImageModal let-modal>\n                    <app-choose-media [category]=\"'image'\"\n                                      [multipleSelect]=\"false\"\n                                      [for]=\"'country-img'\"\n                                      [modalRef]=\"modal\"></app-choose-media>\n                </ng-template>\n\n            </div>\n        </form>\n\n        <ng-container *ngIf=\"countryData\">\n            <div class=\"d-flex align-items-center justify-content-between mb-4\">\n                <h2>\n                    Locatii\n                </h2>\n\n                <button type=\"button\"\n                        (click)=\"openMedia(addNewLocation)\"\n                        class=\"btn-auto btn-color-fill\">\n                    Adauga locatie\n                </button>\n            </div>\n\n            <ng-template #addNewLocation>\n                <div class=\"custom-card app blue\">\n                    <form [formGroup]=\"newLocationForm\" (ngSubmit)=\"submitNewLocation()\">\n                        <div class=\"row\">\n                            <h2>\n                                Locatie Noua\n                            </h2>\n\n                            <!--new location name-->\n                            <div class=\"col-12 col-lg-6\">\n                                <p>\n                                    <mat-form-field appearance=\"standard\">\n                                        <mat-label>Nume locatie</mat-label>\n                                        <input formControlName=\"name\" matInput placeholder=\"Nume locatie\">\n                                        <mat-icon *ngIf=\"newLocationForm.get('name').value\"\n                                                  (click)=\"newLocationForm.get('name').setValue('')\"\n                                                  role=\"button\" matSuffix>clear</mat-icon>\n                                        <mat-error *ngIf=\"newLocationForm.get('name').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                    </mat-form-field>\n                                </p>\n                            </div>\n\n                            <!--new location description-->\n                            <div class=\"col-12\">\n                                <p>\n                                    <mat-form-field appearance=\"standard\">\n                                        <mat-label>Descriere locatie</mat-label>\n                                        <textarea formControlName=\"description\"\n                                                  placeholder=\"Descriere locatie\"\n                                                  matInput\n                                                  cdkTextareaAutosize\n                                                  cdkAutosizeMinRows=\"1\"\n                                                  cdkAutosizeMaxRows=\"20\"\n                                        ></textarea>\n                                        <mat-icon *ngIf=\"newLocationForm.get('description').value\"\n                                                  (click)=\"newLocationForm.get('description').setValue('')\"\n                                                  role=\"button\" matSuffix>clear</mat-icon>\n                                        <mat-error *ngIf=\"newLocationForm.get('description').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                    </mat-form-field>\n                                </p>\n                            </div>\n\n                            <!--new location featured image-->\n                            <div class=\"col-12 upload-image-col\">\n\n                                <p class=\"text-danger\" *ngIf=\"newLocationForm.get('image').hasError('noImage') && newLocationForm.get('image').touched\">\n                                    Imaginea este obligatorie\n                                </p>\n                                <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                                <button *ngIf=\"!newLocationForm.get('image').value?.filePath\"\n                                        class=\"thumbnail-button\n                                   d-flex flex-column align-items-center justify-content-center\"\n                                        type=\"button\"\n                                        (click)=\"openMedia(newLocationImageModal);\"\n                                        id=\"btnChangeNewLocationFeaturedImg\">\n                                    <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}} <span>1400 x 1400px</span>\n                                </button>\n\n                                <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                                <div *ngIf=\"newLocationForm.get('image').value?.filePath\" class=\"img-thumbnail\">\n                                    <img class=\"img-fluid w-100\"\n                                         [src]=\"newLocationForm.get('image').value?.filePath\" alt=\"thumbnail\">\n                                    <button\n                                            (click)=\"newLocationForm.get('image').setValue(null); newLocationForm.get('image').markAsTouched()\"\n                                            type=\"button\"\n                                            id=\"btnRemoveNewLocationFeaturedImg\"\n                                            class=\"btn-thumbnail position-absolute\">\n                                        <i class=\"fas fa-times\"></i>\n                                    </button>\n                                </div>\n                            </div>\n\n                            <div class=\"col-12\">\n                                <button type=\"submit\" class=\"btn-auto btn-color-fill float-end\">\n                                    Salveaza\n                                </button>\n                            </div>\n\n                            <ng-template #newLocationImageModal let-modal>\n                                <app-choose-media [category]=\"'image'\"\n                                                  [multipleSelect]=\"false\"\n                                                  [for]=\"'new-location'\"\n                                                  [modalRef]=\"modal\"></app-choose-media>\n                            </ng-template>\n                        </div>\n                    </form>\n                </div>\n            </ng-template>\n\n            <form [formGroup]=\"locationsForm\" *ngIf=\"locationsData?.length > 0; else noLocationsMessage\">\n                <ngb-accordion formArrayName=\"locations\" [closeOthers]=\"true\" [destroyOnHide]=\"false\">\n                    <ng-container *ngFor=\"let location of locations.controls; let index = index\">\n\n                        <ngb-panel>\n                            <ng-template ngbPanelHeader let-opened=\"opened\">\n                                <div class=\"location-panel-header d-flex align-items-center justify-content-between\">\n                                    <p>\n                                        {{ location.value.name }}\n                                    </p>\n\n                                    <div class=\"d-flex gap-2 align-items-center\">\n                                        <button type=\"button\" ngbPanelToggle class=\"btn-round btn-no-outline\">\n                                            <i [ngClass]=\"opened ? 'fas fa-chevron-up' : 'fas fa-chevron-down'\"></i>\n                                        </button>\n\n                                        <button type=\"button\"\n                                                (click)=\"modalService.open(confirmDeleteLocation, {centered: true})\"\n                                                class=\"btn-round btn-no-outline\">\n                                            <i class=\"fas fa-times\"></i>\n                                        </button>\n\n                                        <ng-template #confirmDeleteLocation let-dismiss = dismiss>\n                                            <div class=\"custom-card\">\n                                                <h2>\n                                                    Are you sure you want to delete this location?\n                                                </h2>\n\n                                                <div class=\"d-flex align-items-center justify-content-center gap-4 mt-5\">\n                                                    <button type=\"button\"\n                                                            (click)=\"dismiss()\"\n                                                            class=\"btn-auto btn-color-outline\">\n                                                        No\n                                                    </button>\n\n                                                    <button type=\"button\"\n                                                            (click)=\"deleteLocation(index)\"\n                                                            class=\"btn-auto btn-color-fill\">\n                                                        Yes\n                                                    </button>\n                                                </div>\n                                            </div>\n                                        </ng-template>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template ngbPanelContent>\n                                <div [formGroupName]=\"index\" class=\"row\">\n                                    <!--location name-->\n                                    <div class=\"col-12 col-lg-6\">\n                                        <p>\n                                            <mat-form-field appearance=\"standard\">\n                                                <mat-label>Nume locatie</mat-label>\n                                                <input formControlName=\"name\" matInput placeholder=\"Nume locatie\">\n                                                <mat-icon *ngIf=\"location.get('name').value\"\n                                                          (click)=\"location.get('name').setValue('')\"\n                                                          role=\"button\" matSuffix>clear</mat-icon>\n                                                <mat-error *ngIf=\"location.get('name').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                            </mat-form-field>\n                                        </p>\n                                    </div>\n\n                                    <!--location description-->\n                                    <div class=\"col-12\">\n                                        <p>\n                                            <mat-form-field appearance=\"standard\">\n                                                <mat-label>Descriere locatie</mat-label>\n                                                <textarea formControlName=\"description\"\n                                                          placeholder=\"Descriere locatie\"\n                                                          matInput\n                                                          cdkTextareaAutosize\n                                                          cdkAutosizeMinRows=\"1\"\n                                                          cdkAutosizeMaxRows=\"20\"\n                                                ></textarea>\n                                                <mat-icon *ngIf=\"location.get('description').value\"\n                                                          (click)=\"location.get('description').setValue('')\"\n                                                          role=\"button\" matSuffix>clear</mat-icon>\n                                                <mat-error *ngIf=\"location.get('description').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                            </mat-form-field>\n                                        </p>\n                                    </div>\n\n                                    <!--location featured image-->\n                                    <div class=\"col-12 upload-image-col\">\n\n                                        <p class=\"text-danger\" *ngIf=\"location.get('image').hasError('noImage') && location.get('image').touched\">\n                                            Imaginea este obligatorie\n                                        </p>\n                                        <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                                        <button *ngIf=\"!location.get('image').value?.filePath\"\n                                                class=\"thumbnail-button\n                                                       d-flex flex-column align-items-center justify-content-center\"\n                                                type=\"button\"\n                                                (click)=\"openMedia(locationImageModal)\"\n                                                id=\"btnChangeLocationFeaturedImg\">\n                                            <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}} <span>1400 x 1400px</span>\n                                        </button>\n\n                                        <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                                        <div *ngIf=\"location.get('image').value?.filePath\" class=\"img-thumbnail\">\n                                            <img class=\"img-fluid w-100\"\n                                                 [src]=\"location.get('image').value?.filePath\" alt=\"thumbnail\">\n                                            <button\n                                                    (click)=\"location.get('image').setValue(null); location.get('image').markAsTouched()\"\n                                                    type=\"button\"\n                                                    id=\"btnRemoveLocationFeaturedImg\"\n                                                    class=\"btn-thumbnail position-absolute\">\n                                                <i class=\"fas fa-times\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-12\">\n                                        <button type=\"submit\"\n                                                (click)=\"updateLocation(index)\"\n                                                class=\"btn-auto btn-color-fill float-end mt-4\">\n                                            Salveaza\n                                        </button>\n                                    </div>\n\n                                    <ng-template #locationImageModal let-modal>\n                                        <app-choose-media [category]=\"'image'\"\n                                                          [multipleSelect]=\"false\"\n                                                          for=\"location-{{index}}\"\n                                                          [modalRef]=\"modal\"></app-choose-media>\n                                    </ng-template>\n                                </div>\n                            </ng-template>\n                        </ngb-panel>\n\n                    </ng-container>\n                </ngb-accordion>\n            </form>\n\n            <ng-template #noLocationsMessage>\n                <h3 class=\"text-center\">\n                    No locations added\n                </h3>\n            </ng-template>\n        </ng-container>\n    </div>\n</div>";

/***/ }),

/***/ 42969:
/*!**************************************************************************************!*\
  !*** ./src/app/features/trips/add-edit-trip/add-edit-trip.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container mb-5\">\n    <app-dashboard-header  [pageTitleOne]=\"isEditMode ? 'Editare trip' : 'Adăugare trip'\"\n                          [buttonBackRoute]=\"!isEditMode ? '../list' : '../../list' \"\n                          (buttonCall)=\"submitEvent()\" [buttonCallName]=\"'Salvează'\">\n    </app-dashboard-header>\n    <div [formGroup]=\"addEditTripForm\" id=\"eventForm\" (ngSubmit)=\"submitEvent()\" class=\"card custom-table gutter-b\">\n\n        <!--Informatii generale-->\n        <div class=\"d-flex justify-content-between align-items-baseline gap-2 \">\n            <h3>Informații generale</h3>\n            <mat-form-field  *ngIf=\"isEditMode\" appearance=\"standard\" class=\"w-25\">\n                <mat-label>Schimbă status</mat-label>\n                <mat-select [formControl]=\"statusForm\" (selectionChange)=\"changeTripStatus($event.value)\">\n                    <mat-option value=\"active\">Active</mat-option>\n                    <mat-option value=\"pending_review\">Pending review</mat-option>\n                    <mat-option value=\"inactive\">Inactive</mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n\n        <div class=\"info-card\">\n            <!--country name-->\n                <div class=\"col-12\">\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Denumire</mat-label>\n                            <input formControlName=\"name\" matInput placeholder=\"Denumire\">\n                            <mat-icon *ngIf=\"addEditTripForm.get('name').value\"\n                                      (click)=\"addEditTripForm.get('name').setValue('')\"\n                                      role=\"button\" matSuffix>clear</mat-icon>\n                            <mat-error *ngIf=\"addEditTripForm.get('name').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                </div>\n                <div class=\"d-flex justify-content-between gap-2\">\n                    <!--country-->\n                    <div class=\"col-6\">\n                        <mat-form-field matTooltip=\"Dacă țara dorită nu se află in listă, accesați Configurator/ Locații trips/ Adaugă, pentru a crea o noua țară. \" appearance=\"standard\">\n                            <mat-label>Țara de origine</mat-label>\n                            <mat-select formControlName=\"countryId\" >\n                                <mat-option (onSelectionChange)=\"getLocationListByCountryId($event)\" *ngFor=\"let country of countriesList\" [value]=\"country.id\">\n                                    {{country.name}}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"addEditTripForm.get('countryId').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n\n                    </div>\n\n                    <!--location-->\n                    <div class=\"col-6\">\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Destinația</mat-label>\n                                <mat-select formControlName=\"locationId\">\n                                    <mat-option *ngFor=\"let location of locationsList\" [value]=\"location.id \"> {{location.name}}\n                                    </mat-option>\n                                </mat-select>\n                            <mat-error *ngIf=\"addEditTripForm.get('locationId').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </div>\n            </div>\n            <!-- Perioada disponibilitate -->\n            <div class=\"d-flex justify-content-between gap-2\">\n                <div class=\"col-6\">\n                    <mat-form-field appearance=\"standard\">\n                        <mat-label>Începe:</mat-label>\n                        <input formControlName=\"startDate\" matInput\n                               [matDatepicker]=\"startDate\">\n                        <mat-datepicker-toggle matSuffix\n                                               [for]=\"startDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #startDate></mat-datepicker>\n                        <mat-error *ngIf=\"addEditTripForm.get('startDate').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                    <mat-form-field appearance=\"standard\">\n                        <mat-label>Se termină:</mat-label>\n                        <input \n                        [min]=\"addEditTripForm.get('startDate').value\"\n                        formControlName=\"endDate\" matInput\n                               [matDatepicker]=\"endDate\">\n                        <mat-datepicker-toggle matSuffix\n                                               [for]=\"endDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #endDate></mat-datepicker>\n                        <mat-error *ngIf=\"addEditTripForm.get('endDate').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n            <!--Description-->\n            <div class=\"col-12\">\n                    <mat-form-field appearance=\"standard\">\n                        <mat-label>Descriere</mat-label>\n                        <textarea formControlName=\"description\"\n                                  placeholder=\"Prezentare destinație\"\n                                  matInput\n                                  cdkTextareaAutosize\n                                  cdkAutosizeMinRows=\"1\"\n                                  cdkAutosizeMaxRows=\"20\"\n                        ></textarea>\n                        <mat-icon *ngIf=\"addEditTripForm.get('description').value\"\n                                  (click)=\"addEditTripForm.get('description').setValue('')\"\n                                  role=\"button\" matSuffix>clear</mat-icon>\n                    </mat-form-field>\n\n                <mat-form-field appearance=\"standard\" class=\"w-100\">\n                    <mat-label>Preț/persoană</mat-label>\n                    <input matInput placeholder=\"Preț/persoană\"\n                           formControlName=\"estimatedPrice\">\n                </mat-form-field>\n            </div>\n\n            <!--Gallery-->\n\n            <div class=\"galery-card\">\n                <div class=\"header\">\n                    <h4>Galerie foto</h4>\n                </div>\n                <div class=\"content\">\n                    <!--Featured Image--------------------------------------------------->\n                    <h4>\n                        Imagine reprezentativă\n                    </h4>\n                    <div class=\"col-12 upload-image-col\">\n\n                    <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                    <button *ngIf=\"!addEditTripForm.get('featuredImage').value?.filePath\"\n                            class=\"thumbnail-button\n                                   d-flex flex-column align-items-center justify-content-center\"\n                            type=\"button\"\n                            (click)=\"openMedia(featuredImageModal)\"\n                            id=\"btnChangeItineraryFeaturedImg\">\n                        <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}} <span>1400 x 1400px</span>\n                    </button>\n\n                    <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                    <div *ngIf=\"addEditTripForm.get('featuredImage').value?.filePath\" class=\"img-thumbnail\">\n                        <img class=\"img-fluid w-100\"\n                             [src]=\"addEditTripForm.get('featuredImage').value?.filePath\" alt=\"thumbnail\">\n                        <button\n                                (click)=\"addEditTripForm.get('featuredImage').setValue(null)\"\n                                type=\"button\"\n                                id=\"btnRemoveItineraryFeaturedImg\"\n                                class=\"btn-thumbnail position-absolute\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </div>\n                </div>\n\n                <ng-template #featuredImageModal let-modal>\n                    <app-choose-media [category]=\"'image'\"\n                                      [multipleSelect]=\"false\"\n                                      [for]=\"'trip-featuredImg'\"\n                                      [modalRef]=\"modal\"></app-choose-media>\n                </ng-template>\n                    <!--Gallery list general info----------------------------------------->\n\n                    <h4>\n                        Gallery\n                    </h4>\n\n                    <div class=\"d-flex justify-content-start gap-2 flex-wrap flex-lg-norwrap\">\n                        <div class=\"col-12 col-lg-3 \">\n                            <button (click)=\"openMedia(imagesModal)\"\n                                    class=\"btn-add-images\n                                           d-flex flex-column align-items-center justify-content-center\"\n                                    type=\"button\"\n                            >\n                                <i class=\"far fa-image\"></i>\n                                <p>\n                                    Insert images here\n                                </p>\n                            </button>\n                        </div>\n\n                        <ng-container *ngIf=\"addEditTripForm.get('images').value as images\">\n                            <div class=\"col-12 col-lg-3\"\n                                 *ngFor=\"let image of images; let index = index\">\n                                <div class=\"gallery-image-container d-flex\">\n                                    <img [src]=\"image.filePath\" alt=\"gallery image\">\n                                    <button class=\"btn-thumbnail position-absolute\"\n                                            type=\"button\"\n                                            (click)=\"removeImage(index)\"\n                                    >\n                                        <i class=\"fas fa-times\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                        </ng-container>\n\n\n                        <ng-template #imagesModal let-modal>\n                            <app-choose-media [category]=\"'image'\"\n                                              [multipleSelect]=\"true\"\n                                              [modalRef]=\"modal\"></app-choose-media>\n                        </ng-template>\n                    </div>\n                </div>\n            </div>\n        </div><!--End Gallery-->\n        <!--End Informatii generale-->\n\n\n         <!--Cazare-->\n        <h3>Cazare</h3>\n        <div class=\"info-card\">\n\n            <!--Offer Package-->\n            <div>\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>Ofertă pachet</mat-label>\n                    <textarea formControlName=\"offerPackage\"\n                              placeholder=\"Descriere ofertă\"\n                              matInput\n                              cdkTextareaAutosize\n                              cdkAutosizeMinRows=\"1\"\n                              cdkAutosizeMaxRows=\"20\"\n                    ></textarea>\n                    <mat-icon *ngIf=\"addEditTripForm.get('offerPackage').value\"\n                              (click)=\"addEditTripForm.get('offerPackage').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                </mat-form-field>\n\n             </div>\n\n            <!--accommodation type-->\n            <div class=\"d-flex justify-content-between\">\n                <mat-form-field appearance=\"standard\" class=\"w-100\">\n                    <mat-label>Tip cazare</mat-label>\n                        <mat-select formControlName=\"accommodationType\">\n                        <mat-option value=\"Hotel\">Hotel</mat-option>\n                        <mat-option value=\"Resort\">Resort</mat-option>\n                        <mat-option value=\"Apart-Hotel\">Hotel</mat-option>\n                        <mat-option value=\"Motel\">Motel</mat-option>\n                        <mat-option value=\"Vila\">Vila</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n\n            <div formGroupName=\"hotelList\">\n                <div class=\"d-flex justify-content-between gap-2 flex-wrap flex-lg-nowrap\">\n                    <!--hotel Name-->\n                    <mat-form-field appearance=\"standard\">\n                        <mat-label>Denumire cazare</mat-label>\n                        <input matInput formControlName=\"hotelName\" placeholder=\"Denumire hotel\">\n                        <mat-error *ngIf=\"addEditTripForm.get('hotelList.hotelName').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                    </mat-form-field>\n\n                    <!--star Rating-->\n                    <mat-form-field appearance=\"standard\">\n                        <mat-label>Numar stele</mat-label>\n                        <mat-select formControlName=\"starRating\">\n                            <mat-option [value]=\"1\">1 stea</mat-option>\n                            <mat-option [value]=\"2\">2 stele</mat-option>\n                            <mat-option [value]=\"3\">3 stele</mat-option>\n                            <mat-option [value]=\"4\">4 stele</mat-option>\n                            <mat-option [value]=\"5\">5 stele</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n            </div>\n\n            <div>\n                <!--Hotel address-->\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>Adresa hotel</mat-label>\n                    <input matInput formControlName=\"hotelAddress\" placeholder=\"Adresa\">\n                    <mat-error *ngIf=\"addEditTripForm.get('hotelList.hotelAddress').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                </mat-form-field>\n            </div>\n            <!--Add room button-->\n            <div class=\"d-flex justify-content-end\">\n                <button class=\"btn-long btn-color-fill\" (click)=\"addItem()\"><i class=\"fas fa-plus me-2\"></i>Adauga cameră</button>\n            </div>\n\n                <!-- Camere-->\n                <div formArrayName=\"rooms\">\n                    <div *ngFor=\"let item of rooms.controls; let itemIndex=index\">\n                        <div [formGroupName]=\"itemIndex\">\n                            <hr *ngIf=\"itemIndex > 0\"/>\n                            <div class=\"d-flex justify-content-between mt-3\">\n                                <h5>Cameră</h5>\n                                <button class=\"remove-btn btn-round btn-no-outline\" (click)=\"removeItem(itemIndex)\"><i class=\"fas fa-times\"></i></button>\n                            </div>\n\n\n                            <div class=\"room-item position-relative\">\n                                <!--Persoane si capacitate camere-->\n                                <div class=\"d-flex justify-content-between gap-2\">\n                                    <mat-form-field appearance=\"standard\" class=\"w-50\">\n                                        <mat-label>Denumirea cameră</mat-label>\n                                        <input matInput placeholder=\"Denumire cameră\"\n                                            formControlName=\"name\">\n\n                                    </mat-form-field>\n                                    <mat-form-field appearance=\"standard\" class=\"w-50\">\n                                        <mat-label>Capacitate persoane</mat-label>\n                                        <input matInput placeholder=\"Capacitate persoane\"\n                                            formControlName=\"people\">\n                                    </mat-form-field>\n                                </div>\n\n                                <!--tip paturi si numar paturi-->\n                                <div class=\"d-flex justify-content-between gap-2\" formGroupName=\"bedType\">\n                                    <mat-form-field appearance=\"standard\" class=\"w-50\">\n                                        <mat-label>Tip pat</mat-label>\n                                            <mat-select formControlName=\"type\">\n                                            <mat-option [value]=\"'Single'\">\n                                                Single\n                                            </mat-option>\n                                            <mat-option [value]=\"'Double'\">\n                                                Double\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                    <mat-form-field appearance=\"standard\" class=\"w-50\">\n                                        <mat-label>Număr paturi</mat-label>\n                                        <input matInput placeholder=\"Numar Paturi\"\n                                            formControlName=\"quantity\">\n                                    </mat-form-field>\n                                </div>\n\n                                <!--disponibilitate si pret-->\n                                <div class=\"d-flex justify-content-between gap-2\">\n                                    <mat-form-field appearance=\"standard\" class=\"w-50\">\n                                        <mat-label>Disponibilitate</mat-label>\n                                        <input matInput placeholder=\"Numar camere disponibile\"\n                                            formControlName=\"available\">\n                                    </mat-form-field>\n                                    <mat-form-field appearance=\"standard\" class=\"w-50\">\n                                        <mat-label>Preț</mat-label>\n                                        <input matInput placeholder=\"Preț\"\n                                            formControlName=\"price\">\n                                    </mat-form-field>\n                                </div>\n\n                                 <div class=\"content\">\n                                    <!--Featured Image--------------------------------------------------->\n                                    <h4>\n                                        Imagine reprezentativă\n                                    </h4>\n                                    <div class=\"col-12 upload-image-col\">\n\n                                    <!--ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                                    <button *ngIf=\"!item.value?.image\"\n                                            class=\"thumbnail-button\n                                                   d-flex flex-column align-items-center justify-content-center\"\n                                            type=\"button\"\n                                            (click)=\"openMedia(itemImgModal)\"\n                                            >\n                                        <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}} <span>1400 x 1400px</span>\n                                    </button>\n\n                                    <!--IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                                    <div *ngIf=\"item.get('image').value?.filePath\" class=\"img-thumbnail\">\n                                        <img class=\"img-fluid w-100\"\n                                             [src]=\"item.get('image').value?.filePath\" alt=\"thumbnail\">\n                                        <button\n                                                (click)=\"item.get('image').setValue(null)\"\n                                                type=\"button\"\n                                                class=\"btn-thumbnail position-absolute\">\n                                            <i class=\"fas fa-times\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n\n                                 <ng-template #itemImgModal let-modal>\n                                    <app-choose-media [category]=\"'image'\"\n                                                      [multipleSelect]=\"false\"\n                                                      [for]=\"'roomFeaturedImg-' + itemIndex\"\n                                                      [modalRef]=\"modal\"></app-choose-media>\n                                </ng-template>\n\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n\n\n        </div><!-- End Cazare-->\n\n         <!--Transport-->\n         <h3>Transport</h3>\n         <div class=\"info-card transport\">\n\n            <!--Metoda de transport-->\n            <div class=\"col-12\">\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>Metoda de transport</mat-label>\n                    <mat-select formControlName=\"transportType\" >\n                        <mat-option [value]=\"'Avion'\">\n                            Avion\n                        </mat-option>\n                        <mat-option [value]=\"'Tren'\">\n                            Tren\n                        </mat-option>\n                        <mat-option [value]=\"'Masina'\">\n                            Masina\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div>\n                <h4>Plecare</h4>\n                <!--Metoda de transport-->\n                <div class=\"col-12\" formGroupName=\"departure\">\n                    <!--Locatie-->\n                    <div class=\"col-12\" >\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Locație</mat-label>\n                            <input formControlName=\"location\" matInput placeholder=\"Locație\">\n                            <mat-icon *ngIf=\"addEditTripForm.get('departure.location').value\"\n                                      (click)=\"addEditTripForm.get('departure.location').setValue(null)\"\n                                      role=\"button\" matSuffix>clear</mat-icon>\n                            <mat-error *ngIf=\"addEditTripForm.get('departure.location').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <!-- Ore plecari /sosiri-->\n                    <div class=\"d-flex justify-content-between gap-2\">\n                        <div class=\"col-6\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Oră plecare</mat-label>\n                                <!-- <input formControlName=\"start\" type=\"time\" matInput name=\"week\" min=\"09:00\" max=\"18:00\" /> -->\n\n                                <input\n                                matInput [ngxMatDatetimePicker]=\"startHourPicker\"\n                                           placeholder=\"Choose a date\" formControlName=\"start\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"startHourPicker\"></mat-datepicker-toggle>\n                                    <ngx-mat-datetime-picker #startHourPicker>\n                                    </ngx-mat-datetime-picker>\n\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-6\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Oră sosire</mat-label>\n                                <!-- <input  formControlName=\"end\" type=\"time\" matInput name=\"week\" min=\"09:00\" max=\"18:00\" /> -->\n\n                                <input \n                                [min]=\"addEditTripForm.get('departure.start').value\"\n                                 matInput [ngxMatDatetimePicker]=\"endHourPicker\"\n                                 placeholder=\"Choose a date\" formControlName=\"end\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"endHourPicker\"></mat-datepicker-toggle>\n                                    <ngx-mat-datetime-picker #endHourPicker>\n                                    </ngx-mat-datetime-picker>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n\n                 <h4>Retur</h4>\n                 <!--sosire-->\n                <div class=\"col-12\" formGroupName=\"arrival\">\n                    <!--Locatie-->\n                    <div class=\"col-12\">\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Locație</mat-label>\n                            <input formControlName=\"location\" matInput placeholder=\"Locație\">\n                            <mat-icon *ngIf=\"addEditTripForm.get('arrival.location').value\"\n                                      (click)=\"addEditTripForm.get('arrival.location').setValue('')\"\n                                      role=\"button\" matSuffix>clear</mat-icon>\n                            <mat-error *ngIf=\"addEditTripForm.get('arrival.location').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <!-- Ore plecari /sosiri-->\n                    <div class=\"d-flex justify-content-between gap-2\">\n                        <div class=\"col-6\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Oră plecare</mat-label>\n                                <input matInput  [ngxMatDatetimePicker]=\"arrivalStartHourPicker\"\n                                           placeholder=\"Choose a date\" formControlName=\"start\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"arrivalStartHourPicker\"></mat-datepicker-toggle>\n                                    <ngx-mat-datetime-picker #arrivalStartHourPicker>\n                                    </ngx-mat-datetime-picker>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-6\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Oră sosire</mat-label>\n                                <input  \n                                [min]=\"addEditTripForm.get('arrival.start').value\"\n                                matInput  [ngxMatDatetimePicker]=\"arrivalEndHourPicker\"\n                                           placeholder=\"Choose a date\" formControlName=\"end\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"arrivalEndHourPicker\"></mat-datepicker-toggle>\n                                    <ngx-mat-datetime-picker #arrivalEndHourPicker>\n                                    </ngx-mat-datetime-picker>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n             </div>\n\n        </div><!-- End Transport-->\n\n\n        <!--Recomandari-->\n        <h3>Recomandări turistice</h3>\n        <div class=\"info-card\">\n            <div class=\"col-12\">\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>Recomandări</mat-label>\n                    <input formControlName=\"recommendation\" matInput placeholder=\"Recomandări turistice\">\n                    <mat-icon *ngIf=\"addEditTripForm.get('recommendation').value\"\n                              (click)=\"addEditTripForm.get('recommendation').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                    <mat-error *ngIf=\"addEditTripForm.get('recommendation').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 9483:
/*!************************************************************************************!*\
  !*** ./src/app/features/trips/archive-trip/archive-trip.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<div class=\"container-fluid\">\n    <div class=\"container modal-content\">\n      <!--Header-->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{\"TITLES.TRIP-ARCHIVING\" | translate}}</h4>\n      </div>\n      <!--Body-->\n      <div class=\"modal-body\">\n        <span class=\"modal-body-text\">{{\"MESSAGE.ARCHIVE-WARNING\" | translate}}</span>\n      </div>\n  \n      <!--Info card blue-->\n      <div class=\"blue-card\">\n          <div class=\"modal-blue-container d-flex\">\n            \n              <div class=\"p-2\">\n                <h4>{{tripData?.name}}, pachet</h4>\n                <div class=\"d-flex justify-content-start gap-2 align-items-center\">\n                    <p>{{locationName}}</p>\n                    <p>{{countryName}}</p>\n\n                </div>\n\n                \n              </div>\n             \n          </div>\n      </div>\n      <!--Footer-->\n      <div class=\"p-3\">\n        <div class=\"row gap-2 gap-xl-0\">\n            <div class=\"col-12 col-xl-6\">\n                <button type=\"button\" class=\"btn-long btn-color-outline w-100\"\n                (click)=\"close()\">\n                    <i class=\"fas fa-times\"></i>\n                    {{ 'BTN.CANCEL' | translate}}\n                    <!-- <ng-container *ngIf=\"isDeleteLoading === true\">\n                      <span\n                        class=\"spinner-border spinner-border-sm align-middle ms-2\"\n                      ></span>\n                    </ng-container>   -->\n                </button>\n            </div>\n\n            <div class=\"col-12 col-xl-6\">\n                <button type=\"button\" class=\"btn-long btn-color-fill w-100\"  id=\"confirmDelete\"\n                        (click)=\"archiveTrip()\">\n                    <i class=\"fas fa-check\"></i>\n                    {{ 'BTN.CONFIRM' | translate}}\n                    <!-- <ng-container *ngIf=\"isDeleteLoading === true\">\n                      <span\n                        class=\"spinner-border spinner-border-sm align-middle ms-2\"\n                      ></span>\n                    </ng-container>   -->\n                </button>\n            </div>\n\n        </div>\n      </div>\n    </div>\n    </div>\n  ";

/***/ }),

/***/ 10209:
/*!******************************************************************************!*\
  !*** ./src/app/features/trips/countries/countries.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header\n            [pageTitleOne]=\"'Țări'\"\n            [buttonAddRoute]=\"'add'\"\n    >\n    </app-dashboard-header>\n\n    <ng-container *ngIf=\"countries$ | async as countries\">\n        <div class=\"row row-gap-24\">\n            <div *ngFor=\"let country of countries; let index = index\"\n                 class=\"col-12 col-md-6\">\n\n                <div class=\"country-card\"\n                     role=\"button\"\n                     [routerLink]=\"['edit', country.id]\">\n                    <img [ngSrc]=\"country?.image?.filePath\" alt=\"country image\" fill priority>\n                    <p>\n                        {{ country.name | titlecase }}\n                    </p>\n                    <button type=\"button\"\n                            (click)=\"modalService.open(confirmDeleteCountry, {centered: true}); $event.stopPropagation()\"\n                            class=\"open-modal btn-round btn-no-outline\">\n                        <i class=\"fas fa-times\"></i>\n                    </button>\n\n                    <ng-template #confirmDeleteCountry let-dismiss = dismiss>\n                        <div class=\"custom-card\">\n                            <h2>\n                                Are you sure you want to delete this country?\n                            </h2>\n\n                            <div class=\"d-flex align-items-center justify-content-center gap-4 mt-5\">\n                                <button type=\"button\"\n                                        (click)=\"dismiss()\"\n                                        class=\"btn-auto btn-color-outline\">\n                                    No\n                                </button>\n\n                                <button type=\"button\"\n                                        (click)=\"deleteCountry(country.id, index, countries)\"\n                                        class=\"btn-auto btn-color-fill\">\n                                    Yes\n                                </button>\n                            </div>\n                        </div>\n                    </ng-template>\n                </div>\n\n            </div>\n        </div>\n    </ng-container>\n</div>\n";

/***/ }),

/***/ 16967:
/*!******************************************************************************!*\
  !*** ./src/app/features/trips/trip-list/trip-list.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid mb-5\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Listă trip-uri\"\n        [buttonBackRoute]=\"'../../dashboard'\"\n        [buttonAddRoute]=\"'../../trips/add'\">\n    </app-dashboard-header>\n    </div>\n\n    <div class=\"container content\">\n        <!----Table---------------------------------------------------------------------------->\n        <div *ngIf=\"dataLoaded\">\n            <div class=\"row filterRow\">\n                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                    <input matInput type=\"text\" [formControl]=\"searchFilter\" (keyup.enter)=\"filterData()\" placeholder=\"Căutare\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"row tableContent\">\n\n                <table class=\"editorals-table-class\" mat-table matSort appMatTableResponsive [dataSource]=\"dataList\" (matSortChange) = applyFilter($event)>\n                    <!--id-->\n                    <ng-container matColumnDef=\"id\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> # </th>\n                        <td mat-cell *matCellDef=\"let element; let i=index\" attr.data-column-name=\"#\"> {{ (i + 1) + pageSize * page}} </td>\n                    </ng-container>\n                    <!--Title-->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'FIELD.TITLE'| translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.TITLE'| translate}}\"> {{element.name}} </td>\n                    </ng-container>\n\n                    <!--Status-->\n                    <ng-container matColumnDef=\"status\">\n                        <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.STATUS'|translate}}</th>\n                        <td mat-cell  *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.STATUS'|translate}}\"><span class=\"custom-label\"\n                            [ngClass]=\"{\n                              'label-pending' : element.status === 'pending_review',\n                              'label-active' : element.status === 'active',\n                              'label-inactive' : element.status === 'inactive'\n                              }\">\n                          <span [ngSwitch]=\"element.status\">\n                             <span *ngSwitchCase=\"'pending_review'\">În așteptare</span>\n                             <span *ngSwitchCase=\"'active'\">Activ</span>\n                             <span *ngSwitchCase=\"'inactive'\">Inactiv</span>\n                          </span>\n                      </span>\n                    </td>\n                    </ng-container>\n\n                    <!--Location-->\n                    <ng-container matColumnDef=\"location\">\n                        <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.DESTINATION'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.DESTINATION'| translate}}\"> {{element.locationName}} </td>\n                    </ng-container>\n\n                    <!--Country-->\n                    <ng-container matColumnDef=\"country\">\n                        <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.COUNTRY'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.COUNTRY'|translate}}\">{{element.countryName}}</td>\n                    </ng-container>\n\n                    <!--actions-->\n                    <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> {{'FIELD.ACTIONS'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index\" data-column-name=\"Acțiuni\">\n                            <div class=\" d-flex actions-container py-2\" >\n\n                                <!--Edit button-->\n                                <button class=\"btn-round btn-no-outline\"\n                                matTooltip=\"Editează trip\"\n                                routerLink=\"../edit/{{element.id}}\"\n                                >\n                                    <i class=\"fa fa-pen\"></i>\n                                </button>\n\n                                <button class=\"btn-round btn-no-outline\"\n                                        matTooltip=\"Rezervari\"\n                                        [routerLink]=\"'../../reservations/list'\"\n                                        [queryParams]=\"{tripid: element.id}\">\n                                    <i class=\"fas fa-list\"></i>\n                                </button>\n\n                                <!--Change status button-->\n                                <button class=\"btn-round btn-no-outline\"\n                                (click)=\"archiveTripModal(element.id)\"\n                                matTooltip=\"Arhivare trip\" >\n                                    <i class=\"fas fa-archive\"></i>\n                                </button>\n\n                            </div>\n                    </ng-container>\n\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n\n\n                <!--Pagination-->\n                <mat-paginator\n                        [pageSizeOptions]=\"pageItems\"\n                        [length]=\"totalElements\"\n                        [pageSize]=\"pageSize\"\n                        (page)=\"pageChanged($event)\"\n                >\n                </mat-paginator>\n\n            </div>\n            <!-- Table container -->\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_trips_trips_module_ts.js.map