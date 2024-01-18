(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_domain-listing_domain-listing_module_ts"],{

/***/ 18645:
/*!**********************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_services/itineraries.store.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItinerariesStore": () => (/* binding */ ItinerariesStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 89196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10745);





let ItinerariesStore = class ItinerariesStore {
  constructor(http) {
    this.http = http;
    this.itineraryFilters = null;
    this.itineraryExtraInfo = null;
    this.itinerary = null;
    this.recommendedItinerary = null;
    this.themeAttributes = null;
    this.typeDictionary = null;
    this.itineraryResourceTypes = null;
    this.resourceTypesByStep = null;
    this.newItinerary = null;
    this.temporaryData = null;
    this.activitiesTypes = null;
    // START: ITINERARY STATE
    this.destinationIndex = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    this.destinationIndex$ = this.destinationIndex.asObservable();
    void (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(this.getResourceTypeDictionary());
  }
  resetStoreStates() {
    this.itineraryFilters = null;
    this.itineraryExtraInfo = null;
    this.itinerary = null;
    this.recommendedItinerary = null;
    this.themeAttributes = null;
    this.itineraryResourceTypes = null;
    this.resourceTypesByStep = null;
    this.newItinerary = null;
    this.temporaryData = null;
    this.activitiesTypes = null;
  }
  getSystemSetting() {
    return this.http.get('/bestinform/getSystemSetting');
  }
  getAttributesByCategoryId(categoryId, sort, dir) {
    return this.http.post('/bestinform/listAttributesFiltered?page=0&size=-1&sort=' + sort + '&dir=' + dir, {
      categoryId: categoryId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(pagination => pagination.content));
  }
  listItineraryFiltered(page, size, sort, dir) {
    return this.http.post('/bestinform/listItineraryFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, {
      ...this.itineraryFilters,
      status: 'active'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(pagination => pagination.content));
  }
  setThemeAttributes(attributes) {
    this.themeAttributes = [];
    this.themeAttributes = [...attributes];
  }
  setItineraryFilters(itineraryFilters) {
    this.itineraryFilters = {
      ...this.itineraryFilters,
      ...itineraryFilters
    };
  }
  setItineraryExtraInfo(itineraryExtraInfo) {
    this.itineraryExtraInfo = {
      ...this.itineraryExtraInfo,
      ...itineraryExtraInfo
    };
  }
  getItineraryExtraInfo() {
    return this.itineraryExtraInfo ? {
      ...this.itineraryExtraInfo
    } : null;
  }
  getItineraryResourceTypeWithName() {
    return this.http.get('/bestinform/getItineraryResourceTypeWithName').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(itineraryResourceTypes => this.itineraryResourceTypes = itineraryResourceTypes), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
  }
  getResourceTypeDictionary() {
    if (this.typeDictionary && this.resourceTypesByStep) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([this.typeDictionary, this.resourceTypesByStep]);
    } else {
      // this.typeDictionary = [];
      return this.getItineraryResourceTypeWithName().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resourceTypesGroups => {
        Object.entries(resourceTypesGroups).forEach(typeGroup => {
          if (typeGroup[1]?.length > 0) {
            this.resourceTypesByStep = {
              ...this.resourceTypesByStep,
              [typeGroup[0]]: []
            };
            typeGroup[1].forEach(typeNamePair => {
              this.typeDictionary = {
                ...this.typeDictionary,
                [typeNamePair.resourceTypeId]: typeNamePair.resourceTypeName
              };
              this.resourceTypesByStep[typeGroup[0]].push(typeNamePair.resourceTypeId);
            });
          }
        });
        return [this.typeDictionary, this.resourceTypesByStep];
      }));
    }
  }
  getResourcesByResourceTypes(resourceTypeIds) {
    return this.http.post('/bestinform/listResourceFiltered?page=0&size=3', {
      resourceTypeIds: resourceTypeIds,
      geographicalCoordinates: this.itineraryExtraInfo.destinations[0].location.geographicalCoordinates,
      status: 'active',
      forItinerary: true,
      attributes: this.themeAttributes.map(attribute => {
        return {
          attributeName: attribute.name,
          attributeValue: 'true'
        };
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(pagination => pagination.content));
  }
  getResourcesForManualItinerary(typeGroup) {
    return this.getResourceTypeDictionary().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(firstRes => {
      const [typeDictionary, resourceTypesByStep] = firstRes;
      if (typeDictionary && resourceTypesByStep) {
        return this.getResourcesByResourceTypes(resourceTypesByStep[typeGroup]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resources => {
          switch (typeGroup) {
            case 'itineraryAccommodationResourceTypes':
              {
                const res = resources.reduce((group, resource) => {
                  if (!group[resource.resourceTypeId]) {
                    group[resource.resourceTypeId] = {
                      resourceTypeId: resource.resourceTypeId,
                      resourceTypeName: typeDictionary[resource.resourceTypeId],
                      resources: []
                    };
                  }
                  group[resource.resourceTypeId].resources.push(resource);
                  return group;
                }, {});
                const resAsArray = Object.values(res);
                return resAsArray;
              }
            default:
              {
                return resources.map(resource => {
                  return {
                    ...resource,
                    resourceTypeName: typeDictionary[resource.resourceTypeId]
                  };
                });
              }
          }
        }));
      }
    }));
  }
  getResourcesByIds(resourcesIds) {
    return this.http.post('/bestinform/getResourcesByIds', resourcesIds);
  }
  setItinerary(itinerary) {
    this.itinerary = itinerary;
  }
  setRecommendedItinerary(itinerary) {
    this.recommendedItinerary = itinerary;
    // side effect - every time we set the itinerary data, we make sure that we use the first destination
    this.destinationIndex.next(0);
    // side effect - every time we set the itinerary data, we make sure that we use the first day in the itinerary
    //             - and we initialize the dayState observable
    this.dayState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.recommendedItinerary.resources[0].startDate);
    this.dayState$ = this.dayState.asObservable();
  }
  setDestinationIndex(newDestinationIndex) {
    this.destinationIndex.next(newDestinationIndex);
  }
  setDayState(newDayState) {
    this.dayState.next(newDayState);
  }
  getRecommendedItinerary() {
    return structuredClone(this.recommendedItinerary);
  }
  setTemporaryData(itineray) {
    this.temporaryData = itineray;
  }
  getTemporaryData() {
    return this.temporaryData;
  }
  setActivitiesType(activitiesType) {
    this.activitiesTypes = activitiesType;
  }
  getActivitiesType() {
    return this.activitiesTypes;
  }
  setNewItinerary(itinerary) {
    this.newItinerary = itinerary;
  }
  getNewItinerary() {
    return structuredClone(this.newItinerary);
  }
  // request pt itinerariul manual
  getResourcesForItinerary() {
    const body = {
      rooms: this.itineraryExtraInfo.roomsNumber,
      adults: this.itineraryExtraInfo.adultsNumber,
      children: this.itineraryExtraInfo.childrenNumber,
      breakfastHour: this.itineraryExtraInfo.breakfastHour,
      lunchHour: this.itineraryExtraInfo.lunchHour,
      dinnerHour: this.itineraryExtraInfo.dinnerHour,
      journeyThemeId: this.itineraryFilters.journeyThemeId,
      typeOfDestinationId: this.itineraryFilters.typeOfDestinationId,
      typeOfJourneyId: this.itineraryFilters.typeOfJourneyId,
      locations: this.itineraryExtraInfo.destinations.map(destination => {
        return {
          startDate: destination.startDate.format('YYYY-MM-DD'),
          endDate: destination.endDate.format('YYYY-MM-DD'),
          country: destination.location.country,
          city: destination.location.city,
          geographicalCoordinates: destination.location.geographicalCoordinates
        };
      })
    };
    return this.http.post('/bestinform/getResourcesForItinerary', body);
  }
  getItineraryWithRecommendations() {
    const body = {
      itineraryId: this.itinerary.id,
      startDate: this.itineraryExtraInfo.startDate.format('YYYY-MM-DD'),
      endDate: this.itineraryExtraInfo.endDate.format('YYYY-MM-DD'),
      rooms: this.itineraryExtraInfo.roomsNumber,
      adults: this.itineraryExtraInfo.adultsNumber,
      children: this.itineraryExtraInfo.childrenNumber,
      breakfastHour: this.itineraryExtraInfo.breakfastHour,
      lunchHour: this.itineraryExtraInfo.lunchHour,
      dinnerHour: this.itineraryExtraInfo.dinnerHour
    };
    return this.http.post('/bestinform/getItineraryWithRecommendations', body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(itinerary => this.setRecommendedItinerary(itinerary)));
  }
  getRoadTripWithRecommendations() {
    const body = {
      rooms: this.itineraryExtraInfo.roomsNumber,
      adults: this.itineraryExtraInfo.adultsNumber,
      children: this.itineraryExtraInfo.childrenNumber,
      breakfastHour: this.itineraryExtraInfo.breakfastHour,
      lunchHour: this.itineraryExtraInfo.lunchHour,
      dinnerHour: this.itineraryExtraInfo.dinnerHour,
      journeyThemeId: this.itineraryFilters.journeyThemeId,
      typeOfDestinationId: this.itineraryFilters.typeOfDestinationId,
      typeOfJourneyId: this.itineraryFilters.typeOfJourneyId,
      locations: this.itineraryExtraInfo.destinations.map(destination => {
        return {
          startDate: destination.startDate.format('YYYY-MM-DD'),
          endDate: destination.endDate.format('YYYY-MM-DD'),
          country: destination.location.country,
          city: destination.location.city,
          geographicalCoordinates: destination.location.geographicalCoordinates
        };
      })
    };
    return this.http.post('/bestinform/getRoadTripWithRecommendations', body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(itinerary => this.setRecommendedItinerary(itinerary)));
  }
  getEmptyItinerary() {
    const newItinerary = {
      name: null,
      description: null,
      images: null,
      featuredImage: null,
      journeyThemeId: this.itineraryFilters.journeyThemeId,
      typeOfDestinationId: this.itineraryFilters.typeOfDestinationId,
      typeOfJourneyId: this.itineraryFilters.typeOfJourneyId,
      transportResourceTypes: null,
      accommodationResourceTypes: null,
      eatAndDrinksResourceTypes: null,
      dayActivityResourceTypes: null,
      eveningActivityResourceTypes: null,
      startDate: this.itineraryExtraInfo.destinations[0].startDate.format('YYYY-MM-DD'),
      endDate: this.itineraryExtraInfo.destinations[0].endDate.format('YYYY-MM-DD'),
      resources: [{
        location: null,
        country: this.itineraryExtraInfo.destinations[0].location.country,
        city: this.itineraryExtraInfo.destinations[0].location.city,
        geographicalCoordinates: this.itineraryExtraInfo.destinations[0].location.geographicalCoordinates,
        startDate: this.itineraryExtraInfo.destinations[0].startDate.format('YYYY-MM-DD'),
        endDate: this.itineraryExtraInfo.destinations[0].endDate.format('YYYY-MM-DD'),
        transportResources: null,
        accommodationResource: null,
        eatAndDrinksResource: null,
        dayActivityResource: null,
        eveningActivityResource: null,
        accommodationResourceRecommended: null,
        eatAndDrinkResourcesRecommended: [],
        dayActivityResourcesRecommended: [],
        eveningActivityResourcesRecommended: []
      }],
      startLocation: null,
      endLocation: null,
      slug: null,
      status: null,
      recommendation: null,
      transportPrice: 0,
      eatAndDrinkPrice: 0,
      accommodationPrice: 0,
      dayActivityPrice: 0,
      eveningActivityPrice: 0,
      transportPaidAmount: 0,
      eatAndDrinkPaidAmount: 0,
      accommodationPaidAmount: 0,
      dayActivityPaidAmount: 0,
      eveningActivityPaidAmount: 0
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(newItinerary).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(itinerary => {
      return this.getResourcesForItinerary().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resources => {
        const itineraryWithData = {
          ...itinerary,
          resources: resources
        };
        return itineraryWithData;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(itinerary => this.setRecommendedItinerary(itinerary)));
    }));
  }
  createItinerary(itinerary) {
    return this.http.post('/bestinform/createItinerary', itinerary);
  }
  createItineraryReservation(itineraryReservation) {
    return this.http.post('/bestinform/createItineraryReservation', itineraryReservation);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
  }];
};
ItinerariesStore = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], ItinerariesStore);


/***/ }),

/***/ 59705:
/*!****************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_services/trips.store.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripsStore": () => (/* binding */ TripsStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 19337);




let TripsStore = class TripsStore {
  constructor(http) {
    this.http = http;
    // START: COUNTRY
    this.countryState = null;
    // END: CITY
    // START: TRIPS
    this.tripState = null;
    // END: TRIPS
    // START: GUESTS
    this.guestsState = null;
    // END: GUESTS
    // START: HOTEL
    this.hotelState = null;
    // END: HOTEL
    // START: ROOMS
    this.roomsState = new Map();
  }
  setCountryState(country) {
    this.countryState = {
      ...country
    };
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
  // END: COUNTRY
  // START: CITY
  getLocationListByCountryId(countryId) {
    return this.http.get('/bestinform/getLocationListByCountryId?countryId=' + countryId);
  }
  listTripsFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listTripsFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  setTripState(trip) {
    this.tripState = {
      ...trip
    };
  }
  getTripState() {
    return this.tripState;
  }
  getTripById(tripId) {
    if (this.tripState?.id === tripId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.tripState);
    }
    return this.http.get('/bestinform/getTripById?tripId=' + tripId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(trip => this.setTripState(trip)));
  }
  setGuestsState(guestsState) {
    this.guestsState = {
      ...guestsState
    };
  }
  getGuestsState() {
    return {
      ...this.guestsState
    };
  }
  setHotelState(newName) {
    this.hotelState = newName;
  }
  getHotelState() {
    return this.hotelState;
  }
  resetRoomsState() {
    this.roomsState.clear();
  }
  getRoomsState() {
    return this.roomsState;
  }
  increaseRoomQuantity(room) {
    if (!this.roomsState.has(room)) {
      this.roomsState.set(room, 1);
      return;
    }
    this.roomsState.set(room, this.roomsState.get(room) + 1);
  }
  decreaseRoomQuantity(room) {
    if (this.roomsState.get(room) === 1) {
      this.roomsState.delete(room);
      return;
    }
    this.roomsState.set(room, this.roomsState.get(room) - 1);
  }
  // END: ROOMS
  createTripReservation(tripReservation) {
    return this.http.post('/bestinform/createTripReservation?tripId=' + this.tripState.id, tripReservation);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};
TripsStore = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], TripsStore);


/***/ }),

/***/ 7289:
/*!****************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/activities/activities.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesComponent": () => (/* binding */ ActivitiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activities.component.html?ngResource */ 16724);
/* harmony import */ var _activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities.component.scss?ngResource */ 83357);
/* harmony import */ var _activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ActivitiesComponent = class ActivitiesComponent {};
ActivitiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-activities',
  template: _activities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ActivitiesComponent);


/***/ }),

/***/ 56301:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/banner-client/banner-client.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerClientComponent": () => (/* binding */ BannerClientComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _banner_client_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner-client.component.html?ngResource */ 55309);
/* harmony import */ var _banner_client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner-client.component.scss?ngResource */ 81894);
/* harmony import */ var _banner_client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_banner_client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let BannerClientComponent = class BannerClientComponent {};
BannerClientComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-banner-client',
  template: _banner_client_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_banner_client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BannerClientComponent);


/***/ }),

/***/ 94193:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/editorials-carousel/editorials-carousel.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorialsCarouselComponent": () => (/* binding */ EditorialsCarouselComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _editorials_carousel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editorials-carousel.component.html?ngResource */ 97699);
/* harmony import */ var _editorials_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editorials-carousel.component.scss?ngResource */ 72237);
/* harmony import */ var _editorials_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editorials_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_features_editorials_services_editorials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/editorials/_services/editorials.service */ 36052);






let EditorialsCarouselComponent = class EditorialsCarouselComponent {
  constructor(editorialsService) {
    this.editorialsService = editorialsService;
    this.editorialTypeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.categoryList = [];
    // carousel config
    this.customOptions = {
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      autoplay: true,
      dots: false,
      navSpeed: 700,
      center: false,
      margin: 24,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 3
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    };
  }
  ngOnInit() {
    this.getEditorialCategories();
    console.log('merge');
  }
  getEditorialCategories() {
    this.editorialsService.getEditorialCategories().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: categories => {
        this.categoryList = categories;
      }
    });
  }
  sendCategoryType(value) {
    this.editorialTypeEvent.emit(value);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_features_editorials_services_editorials_service__WEBPACK_IMPORTED_MODULE_2__.EditorialsService
  }];
  static #_2 = this.propDecorators = {
    currentUser: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    editorialsList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    editorialTypeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  };
};
EditorialsCarouselComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-editorials-carousel',
  template: _editorials_carousel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_editorials_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditorialsCarouselComponent);


/***/ }),

/***/ 33753:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/editorials-section/editorials-section.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorialsSectionComponent": () => (/* binding */ EditorialsSectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _editorials_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editorials-section.component.html?ngResource */ 76925);
/* harmony import */ var _editorials_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editorials-section.component.scss?ngResource */ 93216);
/* harmony import */ var _editorials_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editorials_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _editorials_services_editorials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../editorials/_services/editorials.service */ 36052);





let EditorialsSectionComponent = class EditorialsSectionComponent {
  constructor(editorialService) {
    this.editorialService = editorialService;
  }
  ngOnInit() {
    this.editorials = [];
    this.editorialService.listEditorialFiltered(0, 4, "date", "asc", {}).subscribe(editorials => {
      console.log('editorial', editorials);
      editorials["content"].forEach(editorial => {
        console.log(editorial.featuredImage);
        this.editorials.push({
          imgPath: editorial.featuredImage.filePath === "string" || editorial.featuredImage.filePath === null ? "../../assets/images/others/images-client/editoriale1.jpg" : editorial.featuredImage.filePath,
          title: editorial.title,
          tags: [editorial.tags],
          author: editorial.authors[0],
          date: editorial.date
        });
      });
      console.log("array", this.editorials);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _editorials_services_editorials_service__WEBPACK_IMPORTED_MODULE_2__.EditorialsService
  }];
};
EditorialsSectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-editorials-section',
  template: _editorials_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_editorials_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditorialsSectionComponent);


/***/ }),

/***/ 68475:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/events-carousel/events-carousel.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsCarouselComponent": () => (/* binding */ EventsCarouselComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _events_carousel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-carousel.component.html?ngResource */ 62785);
/* harmony import */ var _events_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-carousel.component.scss?ngResource */ 48270);
/* harmony import */ var _events_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_events_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/resources.service */ 3145);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);







let EventsCarouselComponent = class EventsCarouselComponent {
  constructor(resourceServices) {
    this.resourceServices = resourceServices;
    this.resourceTypeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.categoryList = [];
    // carousel config
    this.customOptions = {
      loop: false,
      autoplay: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      center: false,
      margin: 24,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 3
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    };
  }
  ngOnInit() {
    this.getResourceTypeByCategory();
  }
  getResourceTypeByCategory() {
    this.resourceServices.getAllResourceTypesByResourceCategory(this.categoryId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.categoryList = res;
      }
    });
  }
  sendCategoryType(value) {
    this.resourceTypeEvent.emit(value);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }];
  static #_2 = this.propDecorators = {
    currentUser: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    eventsList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    categoryId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    resourceTypeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  };
};
EventsCarouselComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-events-carousel',
  template: _events_carousel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_events_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EventsCarouselComponent);


/***/ }),

/***/ 3148:
/*!******************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/experiences/experiences.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperiencesComponent": () => (/* binding */ ExperiencesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _experiences_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experiences.component.html?ngResource */ 10008);
/* harmony import */ var _experiences_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiences.component.scss?ngResource */ 99811);
/* harmony import */ var _experiences_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_experiences_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ExperiencesComponent = class ExperiencesComponent {};
ExperiencesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-experiences',
  template: _experiences_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_experiences_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ExperiencesComponent);


/***/ }),

/***/ 5411:
/*!********************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/job-tradings/job-tradings.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobTradingsComponent": () => (/* binding */ JobTradingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _job_tradings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-tradings.component.html?ngResource */ 42700);
/* harmony import */ var _job_tradings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-tradings.component.scss?ngResource */ 16289);
/* harmony import */ var _job_tradings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_job_tradings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let JobTradingsComponent = class JobTradingsComponent {};
JobTradingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-job-tradings',
  template: _job_tradings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_job_tradings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], JobTradingsComponent);


/***/ }),

/***/ 35564:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/popular-locations/popular-locations.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopularLocationsComponent": () => (/* binding */ PopularLocationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _popular_locations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popular-locations.component.html?ngResource */ 69885);
/* harmony import */ var _popular_locations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popular-locations.component.scss?ngResource */ 16234);
/* harmony import */ var _popular_locations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_popular_locations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





let PopularLocationsComponent = class PopularLocationsComponent {
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {
    console.log(this.translate.instant('TOAST.SUCCESS'));
  }
  static #_ = this.ctorParameters = () => [{
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService
  }];
};
PopularLocationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-popular-locations',
  template: _popular_locations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_popular_locations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PopularLocationsComponent);


/***/ }),

/***/ 87120:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-filter-bar/resource-filter-bar.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceFilterBarComponent": () => (/* binding */ ResourceFilterBarComponent)
/* harmony export */ });
/* harmony import */ var _Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resource_filter_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource-filter-bar.component.html?ngResource */ 23544);
/* harmony import */ var _resource_filter_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource-filter-bar.component.scss?ngResource */ 81654);
/* harmony import */ var _resource_filter_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resource_filter_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_services_user_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/_services/user-location.service */ 22587);












let ResourceFilterBarComponent = class ResourceFilterBarComponent {
  constructor(resourceFilterService, myComponentRef, fb, datePipe, userLocationService, cdr) {
    this.resourceFilterService = resourceFilterService;
    this.myComponentRef = myComponentRef;
    this.fb = fb;
    this.datePipe = datePipe;
    this.userLocationService = userLocationService;
    this.cdr = cdr;
    this.resourceTemplate = null;
    this.recommendedCities = null;
    this.cityToSearch = null;
    this.allFilterOptionsFalse = true;
    // filter names
    this.filterSelection = {
      location: false,
      date: false,
      guests: false
    };
    this.accIsOpen = false;
    this.activeFilter = '';
    this.currentUser = null;
    this.tabIndex = 0;
    this.filtersSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.currentDay = moment__WEBPACK_IMPORTED_MODULE_4__();
    this.nextDay = this.currentDay.clone().add(1, 'days');
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.secondLocation = false;
  }
  ngOnInit() {
    this.getCurrentUserLocation().then(() => {
      this.listenToResourceType();
      this.listenToResourceTemplate();
      this.submitFilters();
    });
  }
  /*@HostListener('document:click', ['$event'])
  clickOutside(event) {
      if(!this.myComponentRef.nativeElement.contains(event.target)) {
          if (this.accIsOpen) {
              this.filterSelection[this.activeFilter] = false;
              this.activeFilter = '';
              this.accordionRef.toggle('ngb-panel');
              this.accIsOpen = false;
          }
      }
  }*/
  getCurrentUserLocation() {
    var _this = this;
    return (0,_Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.currentUser = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this.userLocationService.getCurrentUser());
      _this.initFilterForm();
    })();
  }
  //set current location if no location found
  currentLocationFct() {
    this.userLocationService.getCurrentUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        // this.currentCity=res.city;
        // this.currentGeoCoord=res.currentGeographicalCoordinates;
        this.filterForm.get('location').patchValue(res.city);
        this.filterForm.get('geographicalCoordinates').patchValue(res.currentGeographicalCoordinates);
      }
    });
  }
  initFilterForm() {
    const today = new Date();
    today.setMinutes(Math.ceil(today.getMinutes() / 15 + (today.getMinutes() % 15 === 0 ? 1 : 0)) * 15);
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    this.currentGeoCoord = this.currentUser.currentGeographicalCoordinates;
    this.currentCity = this.currentUser.city;
    this.filterForm = this.fb.group({
      location: [this.currentUser.city],
      geographicalCoordinates: [this.currentUser.currentGeographicalCoordinates],
      dateAsDay: [moment__WEBPACK_IMPORTED_MODULE_4__(today, 'DD-MM-YYYY')],
      dateAsHour: [moment__WEBPACK_IMPORTED_MODULE_4__(today, 'DD MM YYYY HH:mm')],
      startDate: [moment__WEBPACK_IMPORTED_MODULE_4__(today, 'DD-MM-YYYY')],
      endDate: [moment__WEBPACK_IMPORTED_MODULE_4__(tomorrow, 'DD-MM-YYYY')],
      startHour: [moment__WEBPACK_IMPORTED_MODULE_4__(today, 'DD MM YYYY HH:mm')],
      endHour: [moment__WEBPACK_IMPORTED_MODULE_4__(tomorrow, 'DD MM YYYY HH:mm')],
      // guests filter options
      adultsNumber: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1)],
      childrenNumber: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0)],
      roomsNumber: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1)]
    });
  }
  updateFormValue(formControlName, value) {
    this.filterForm.get(formControlName).patchValue(value);
    if (this.filterForm.get('geographicalCoordinates').value) {
      this.toggleFilter('date');
    }
  }
  decreaseNrGuests(formControlName) {
    let currentValue = this.filterForm.get(formControlName).value;
    if (currentValue === 0) {
      return;
    }
    this.filterForm.get(formControlName).patchValue(--currentValue);
  }
  increaseNrGuests(formControlName) {
    let currentValue = this.filterForm.get(formControlName).value;
    this.filterForm.get(formControlName).patchValue(++currentValue);
  }
  submitFilters() {
    this.filtersSubmitted.emit();
    let filtersToSend;
    // we close the ngb accordion and reset the activeFilter
    if (this.activeFilter !== '') this.toggleFilter(this.activeFilter);
    if (this.resourceTemplate && this.resourceTypeData) {
      if (this.resourceTypeData?.filterOption?.location) {
        filtersToSend = {
          // city: this.filterForm.get('location').value ? this.filterForm.get('location').value : null
          geographicalCoordinates: this.filterForm.get('geographicalCoordinates').value || null
        };
        /*const currentUserNewLoc:User= {...this.currentUser,
            city:this.filterForm.get('location').value,
            currentGeographicalCoordinates: this.filterForm.get('geographicalCoordinates').value }
          this.userLocationService.updateCurrentUser(currentUserNewLoc)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe({
            next:(res:any)=>{
                console.log('succes la update coord', res)
            },
            error:(error:any)=>{
                console.log('eroare la coordonate', error);
            }
        });
         this.userLocationService.getCurrentUser()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe({
            next:(res:User)=>{
                this.currentUser=res;
             },
            error:(error:any)=>{
                console.log('eroare la currentUser', error);
            }
        });
         // console.log("noile coordonate", this.filterForm.get('geographicalCoordinates').value);
         console.log('userul cu noua locatie',this.currentUser);*/
      }

      if (this.resourceTemplate.bookingType === 'rentalBooking') {
        filtersToSend = {
          ...filtersToSend,
          rentalBookingSearchFilterDTO: {
            roomNumber: this.resourceTypeData?.filterOption?.adultChildrenAndRoomNumber ? this.filterForm.get('roomsNumber').value : null,
            adults: this.resourceTypeData?.filterOption?.adultChildrenAndRoomNumber || this.resourceTypeData?.filterOption?.adultChildrenNumber || this.resourceTypeData?.filterOption?.adultNumber ? this.filterForm.get('adultsNumber').value : null,
            children: this.resourceTypeData?.filterOption?.adultChildrenAndRoomNumber || this.resourceTypeData?.filterOption?.adultChildrenNumber ? this.filterForm.get('childrenNumber').value : null,
            startTime: this.resourceTypeData?.filterOption?.dateInterval ? this.datePipe.transform(this.filterForm.get('startDate').value.toDate(), 'yyyy-MM-dd') : null,
            endTime: this.resourceTypeData?.filterOption?.dateInterval ? this.datePipe.transform(this.filterForm.get('endDate').value.toDate(), 'yyyy-MM-dd') : null
          }
        };
      }
      if (this.resourceTemplate.bookingType === 'serviceBookingTimeSlots') {
        filtersToSend = {
          ...filtersToSend,
          bookingTimeSlotDate: this.resourceTypeData?.filterOption?.dateAsDay ? this.datePipe.transform(this.filterForm.get('dateAsDay').value.toDate(), 'yyyy-MM-dd') : null
        };
      }
      if (this.resourceTemplate.bookingType === 'menu') {
        filtersToSend = {
          ...filtersToSend,
          timePickerSearch: {
            timePickerDate: this.resourceTypeData?.filterOption?.dateAsHour ? this.datePipe.transform(this.filterForm.get('dateAsHour').value.toDate(), 'yyyy-MM-dd') : null,
            timePickerHour: this.resourceTypeData?.filterOption?.dateAsHour ? this.datePipe.transform(this.filterForm.get('dateAsHour').value.toDate(), 'HH:mm') : null,
            adults: this.resourceTypeData?.filterOption?.adultChildrenAndRoomNumber || this.resourceTypeData?.filterOption?.adultChildrenNumber || this.resourceTypeData?.filterOption?.adultNumber ? this.filterForm.get('adultsNumber').value : null,
            child: this.resourceTypeData?.filterOption?.adultChildrenAndRoomNumber || this.resourceTypeData?.filterOption?.adultChildrenNumber ? this.filterForm.get('childrenNumber').value : null
          }
        };
      }
      if (this.resourceTemplate.bookingType === 'culturalBooking') {
        filtersToSend = {
          ...filtersToSend,
          eventDate: this.resourceTypeData?.filterOption?.dateAsDay ? this.datePipe.transform(this.filterForm.get('dateAsDay').value.toDate(), 'yyyy-MM-dd') : null
        };
      }
    }
    this.resourceFilterService.updateSavedFilters(this.filterForm.value);
    this.resourceFilterService.updateFilters(filtersToSend).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe();
  }
  listenToResourceType() {
    this.resourceFilterService.resourceTypeObs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (res.filterOption) {
          for (const key of Object.keys(res.filterOption)) {
            if (res.filterOption[key] === true) {
              this.allFilterOptionsFalse = false;
            }
          }
        }
        this.resourceTypeData = res;
      }
    });
  }
  listenToResourceTemplate() {
    this.resourceFilterService.resourceTemplateObs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceTemplate = res;
      }
    });
  }
  searchForCities() {
    if (!this.cityToSearch || this.cityToSearch?.length < 3) {
      this.recommendedCities = null;
      //set user current location, if no location selected
      // this.currentLocationFct();
      this.filterForm.get('location').patchValue(this.currentUser.city);
      this.filterForm.get('geographicalCoordinates').patchValue(this.currentUser.currentGeographicalCoordinates);
      return;
    }
    this.resourceFilterService.getAllCitiesRecommended(this.cityToSearch).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      if (!res) return;
      this.recommendedCities = [...res];
    });
  }
  toggleFilter(filterName) {
    // acc is closed, we open it and modify the active filter
    if (!this.accIsOpen) {
      this.filterSelection[filterName] = true;
      this.activeFilter = filterName;
      this.accIsOpen = true;
      this.accordionRef.toggle('ngb-panel');
      return;
    }
    // acc is open and we click the active filter
    if (this.accIsOpen && this.activeFilter === filterName) {
      this.activeFilter = '';
      this.filterSelection[filterName] = false;
      this.accordionRef.toggle('ngb-panel');
      this.accIsOpen = false;
      return;
    }
    // acc is open and we click a different filter
    if (this.accIsOpen && this.activeFilter !== filterName) {
      this.filterSelection[this.activeFilter] = false;
      this.filterSelection[filterName] = true;
      this.activeFilter = filterName;
      return;
    }
  }
  startDateChanged(event, nextElementRef) {
    if (!moment__WEBPACK_IMPORTED_MODULE_4__(event.value).isSameOrAfter(this.nextDay, 'day')) {
      this.nextDay = moment__WEBPACK_IMPORTED_MODULE_4__(event.value).clone().add(1, 'days');
      return;
    } else {
      this.nextDay = moment__WEBPACK_IMPORTED_MODULE_4__(event.value).clone().add(1, 'days');
      this.filterForm.get('endDate').patchValue(this.nextDay);
      nextElementRef.open();
    }
  }
  endDateChanged(event) {
    this.nextDay = moment__WEBPACK_IMPORTED_MODULE_4__(event.value).clone();
    this.toggleFilter('guests');
  }
  startHourChanged(event, nextElementRef) {
    if (!moment__WEBPACK_IMPORTED_MODULE_4__(event.value).isSameOrAfter(this.nextDay, 'hour')) return;
    this.nextDay = moment__WEBPACK_IMPORTED_MODULE_4__(event.value).clone().add(1, 'days');
    this.filterForm.get('endHour').patchValue(this.nextDay);
    nextElementRef.open();
  }
  endHourChanged(event) {
    this.nextDay = moment__WEBPACK_IMPORTED_MODULE_4__(event.value).clone();
    this.toggleFilter('guests');
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    // localStorage.removeItem('filterFormData');
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_3__.ResourceFilterService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe
  }, {
    type: _shared_services_user_location_service__WEBPACK_IMPORTED_MODULE_5__.UserLocationService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }];
  static #_2 = this.propDecorators = {
    accordionRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['acc']
    }],
    filtersSubmitted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }]
  };
};
ResourceFilterBarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-resource-filter-bar',
  template: _resource_filter_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [(_resource_filter_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ResourceFilterBarComponent);


/***/ }),

/***/ 34027:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-information/resource-information.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceInformationComponent": () => (/* binding */ ResourceInformationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resource_information_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-information.component.html?ngResource */ 2921);
/* harmony import */ var _resource_information_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource-information.component.scss?ngResource */ 82985);
/* harmony import */ var _resource_information_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resource_information_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/Map */ 29272);
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/View */ 75939);
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/proj */ 63815);
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/layer/Tile */ 65833);
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/source/OSM */ 74121);
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/layer/Vector */ 79995);
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/source/Vector */ 33535);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol */ 6788);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom */ 83733);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style */ 864);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style */ 44483);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style */ 95567);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/control */ 8569);


















let ResourceInformationComponent = class ResourceInformationComponent {
  constructor(resourceFilterService) {
    this.resourceFilterService = resourceFilterService;
    this.resourceData = null;
    this.resourceContact = null;
    this.tabAttributesListByCategory = [];
    this.isValidCoords = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.listenForResource();
  }
  listenForResource() {
    this.resourceFilterService.resourceObs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceData = {
          ...res
        };
        console.log(this.resourceData);
        // vedem daca exista tabul de contact
        if (this.resourceData?.attributes) {
          this.resourceData.attributes.forEach(attribute => {
            if (attribute.tabName === 'contact') {
              this.resourceContact = attribute;
              return;
            }
          });
        }
        // daca avem tabul de contact, il separam in functie de attributeCategory
        if (this.resourceContact) {
          this.resourceContact.tabAttributes.forEach(tabAttribute => {
            this.pushToCategory(tabAttribute);
          });
        }
        const lat = this.resourceData?.geographicalCoordinates?.latitude;
        const long = this.resourceData?.geographicalCoordinates?.longitude;
        if (lat && long && lat >= -90 && lat <= 90 && long >= -180 && long <= 180) {
          this.isValidCoords = true;
          this.initMap();
        }
      }
    });
  }
  pushToCategory(tabAttribute) {
    if (this.tabAttributesListByCategory.length > 0) {
      for (let index = 0; index < this.tabAttributesListByCategory.length; index++) {
        if (this.tabAttributesListByCategory[index][0].attributeCategory === tabAttribute.attributeCategory) {
          this.tabAttributesListByCategory[index].push(tabAttribute);
          return;
        }
      }
      this.tabAttributesListByCategory[this.tabAttributesListByCategory.length - 1].push(tabAttribute);
      console.log('tab attr', this.tabAttributesListByCategory);
      return;
    } else {
      this.tabAttributesListByCategory.push([tabAttribute]);
      console.log('tab attr', this.tabAttributesListByCategory);
      return;
    }
  }
  initMap() {
    const resourceFeature = new ol__WEBPACK_IMPORTED_MODULE_6__["default"]({
      geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_7__["default"]((0,ol_proj__WEBPACK_IMPORTED_MODULE_3__.fromLonLat)([+this.resourceData.geographicalCoordinates.longitude, +this.resourceData.geographicalCoordinates.latitude]))
    });
    resourceFeature.setStyle(new ol_style__WEBPACK_IMPORTED_MODULE_8__["default"]({
      text: new ol_style__WEBPACK_IMPORTED_MODULE_9__["default"]({
        text: '\uf3c5',
        font: '900 35px "Font Awesome 5 Free"',
        textBaseline: 'bottom',
        fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["default"]({
          color: 'red'
        })
      })
    }));
    // open layers map init
    this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_11__["default"]({
      view: new ol_View__WEBPACK_IMPORTED_MODULE_12__["default"]({
        center: (0,ol_proj__WEBPACK_IMPORTED_MODULE_3__.fromLonLat)([+this.resourceData.geographicalCoordinates.longitude, +this.resourceData.geographicalCoordinates.latitude]),
        zoom: 15
      }),
      layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_13__["default"]({
        source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_14__["default"]()
      }), new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_15__["default"]({
        source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_16__["default"]({
          features: [resourceFeature]
        })
      })],
      controls: [new ol_control__WEBPACK_IMPORTED_MODULE_17__["default"]()]
    });
  }
  ngAfterViewInit() {
    if (this.map && this.isValidCoords) {
      this.map.setTarget('ol-map');
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__.ResourceFilterService
  }];
};
ResourceInformationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: 'app-resource-information',
  template: _resource_information_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_resource_information_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResourceInformationComponent);


/***/ }),

/***/ 20656:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-list-map/resource-list-map.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceListMapComponent": () => (/* binding */ ResourceListMapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resource_list_map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-list-map.component.html?ngResource */ 70161);
/* harmony import */ var _resource_list_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource-list-map.component.scss?ngResource */ 55510);
/* harmony import */ var _resource_list_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resource_list_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Map */ 29272);
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/View */ 75939);
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/proj */ 63815);
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Tile */ 65833);
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/source/OSM */ 74121);
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/layer/Vector */ 79995);
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Vector */ 33535);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol */ 18580);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/style */ 864);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style */ 44483);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style */ 95567);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/control */ 8569);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_shared_services_resources_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/resources.service */ 3145);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





















let ResourceListMapComponent = class ResourceListMapComponent {
  // points:Array<Feature>=[];
  constructor(resourcesService, data, translate, route, router, resourceFilterService) {
    this.resourcesService = resourcesService;
    this.data = data;
    this.translate = translate;
    this.route = route;
    this.router = router;
    this.resourceFilterService = resourceFilterService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.dataLoaded = false;
    this.domainId = null;
    this.categoryId = null;
    this.resourceTypeId = null;
    this.currentLanguage = null;
    this.resourceTypeData = null;
    this.resourceTemplate = null;
    this.resourcesCoorinateList = [];
    this.geometryPointsList = [];
    this.resourcesList = [];
    this.modelCard = [];
    this.points = this.data.coordinate;
    this.coordData = this.data.resourceCoordinatesData;
    this.filterData = this.data.filterData;
  }
  ngOnInit() {
    this.initMap();
    console.log('punteleeee', this.points);
    console.log('coordData', this.coordData);
    console.log('datele din filtruu', this.filterData);
  }
  initMap() {
    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    const closer = document.getElementById('popup-closer');
    //popup
    // const overlay=new Overlay({
    //   element:container,
    //   autoPan: true,
    //   positioning: 'center-center',
    //   stopEvent: false,
    // });
    const straitSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_6__["default"]({
      wrapX: true
    });
    // Check if geographical coordinates are null
    if (this.filterData.geographicalCoordinates === null || this.filterData.geographicalCoordinates?.longitude === null || this.filterData.geographicalCoordinates?.latitude === null) {
      // If coordinates are null, set default center and zoom for the world map
      this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_7__["default"]({
        view: new ol_View__WEBPACK_IMPORTED_MODULE_8__["default"]({
          center: (0,ol_proj__WEBPACK_IMPORTED_MODULE_3__.fromLonLat)([0, 0]),
          zoom: 2 // Adjust the zoom level as needed
        }),

        layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_9__["default"]({
          source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_10__["default"]()
        }), new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_11__["default"]({
          source: straitSource
        }), new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_11__["default"]({
          source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_6__["default"]({
            features: this.points
          }),
          style: new ol_style__WEBPACK_IMPORTED_MODULE_12__["default"]({
            text: new ol_style__WEBPACK_IMPORTED_MODULE_13__["default"]({
              text: '\uf3c5',
              font: '900 35px "Font Awesome 5 Free"',
              textBaseline: 'bottom',
              fill: new ol_style__WEBPACK_IMPORTED_MODULE_14__["default"]({
                color: 'red'
              })
            })
          })
        })],
        controls: [new ol_control__WEBPACK_IMPORTED_MODULE_15__["default"]()]
      });
    } else {
      // If coordinates are not null, use the provided coordinates
      this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_7__["default"]({
        view: new ol_View__WEBPACK_IMPORTED_MODULE_8__["default"]({
          center: (0,ol_proj__WEBPACK_IMPORTED_MODULE_3__.fromLonLat)([this.filterData.geographicalCoordinates.longitude, this.filterData.geographicalCoordinates.latitude]),
          zoom: 13
        }),
        layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_9__["default"]({
          source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_10__["default"]()
        }), new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_11__["default"]({
          source: straitSource
        }), new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_11__["default"]({
          source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_6__["default"]({
            features: this.points
          }),
          style: new ol_style__WEBPACK_IMPORTED_MODULE_12__["default"]({
            text: new ol_style__WEBPACK_IMPORTED_MODULE_13__["default"]({
              text: '\uf3c5',
              font: '900 35px "Font Awesome 5 Free"',
              textBaseline: 'bottom',
              fill: new ol_style__WEBPACK_IMPORTED_MODULE_14__["default"]({
                color: 'red'
              })
            })
          })
        })],
        controls: [new ol_control__WEBPACK_IMPORTED_MODULE_15__["default"]()]
      });
    }
    const popup = new ol__WEBPACK_IMPORTED_MODULE_16__["default"]({
      element: container,
      autoPan: true
    });
    this.map.addOverlay(popup);
    // display popup on click
    this.map.on('click', function (e) {
      const feature = this.forEachFeatureAtPixel(e.pixel, function (feat, layer) {
        return feat;
      });
      if (feature && feature.get('type') === 'Point') {
        const coordinate = e.coordinate; //default projection is EPSG:3857 you may want to use ol.proj.transform
        content.innerHTML = feature.get('desc');
        popup.setPosition(coordinate);
      } else {
        popup.setPosition(undefined);
      }
    });
    closer.onclick = function () {
      popup.setPosition(undefined);
      closer.blur();
      return false;
    };
  }
  ngAfterViewInit() {
    console.log("in ngAfterViewInit");
    if (this.map) {
      this.map.setTarget('ol-map');
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_resources_service__WEBPACK_IMPORTED_MODULE_4__.ResourcesService
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MAT_DIALOG_DATA]
    }]
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__.ResourceFilterService
  }];
  static #_2 = this.propDecorators = {
    list: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input
    }],
    pop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
      args: ['pop', {
        static: false
      }]
    }]
  };
};
ResourceListMapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-resource-list-map',
  template: _resource_list_map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_resource_list_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResourceListMapComponent);


/***/ }),

/***/ 67871:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-tabs/resource-tabs.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceTabsComponent": () => (/* binding */ ResourceTabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resource_tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-tabs.component.html?ngResource */ 7810);
/* harmony import */ var _resource_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource-tabs.component.scss?ngResource */ 31750);
/* harmony import */ var _resource_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resource_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _view_simple_resource_booking_type_tab_items_booking_type_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../view-simple-resource/booking-type-tab-items/booking-type-items.service */ 32553);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/_services/system-settings.service */ 42912);













let ResourceTabsComponent = class ResourceTabsComponent {
  constructor(resourceFilterService, resourcesService, bookingItemsService, settingsService, route, fb) {
    this.resourceFilterService = resourceFilterService;
    this.resourcesService = resourcesService;
    this.bookingItemsService = bookingItemsService;
    this.settingsService = settingsService;
    this.route = route;
    this.fb = fb;
    this.resourceTypeData = null;
    this.resourceData = null;
    this.savedFilters = null;
    // for the about tab
    this.resourceGeneralInfo = null;
    this.resourceFacilities = null;
    this.resourceAbout = null;
    this.hasFacilitiesTrue = false;
    // check if there are any filter options in the resource type, so we know if we hide the search button
    this.allFilterOptionsFalse = true;
    this.currentDay = moment__WEBPACK_IMPORTED_MODULE_5__();
    this.nextDay = this.currentDay.clone().add(1, 'days');
    this.isItineraryModal = false;
    this.activeTabHasChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }
  ngOnInit() {
    this.checkIfItineraryModal();
    this.initFilterForm();
    this.listenForResource();
    this.listerForResourceType();
    this.getSystemSettings();
  }
  checkIfItineraryModal() {
    this.isItineraryModal = this.resourceFilterService.checkIfItineraryModal();
  }
  getSystemSettings() {
    this.settingsService.getSystemSetting().subscribe(resp => {
      console.log('Setari', resp);
      this.eventCategoryId = resp.eventCategoryId;
    });
  }
  listenForResource() {
    this.resourceFilterService.resourceObs$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(resource => {
      if (resource) {
        this.bookingItemsService.setResourceId(resource.id);
        console.log('model', resource);
        if (resource.bookingType === 'menu') {
          return this.resourcesService.getTimepickerByResourceId(resource.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(timepicker => {
            this.bookingItemsService.setBookingTimePickerId(timepicker.id);
            return {
              ...resource,
              bookingTimePickerId: timepicker.id
            };
          }));
        } else if (resource.bookingType === 'culturalBooking' && resource.culturalBookingIds) {
          this.bookingItemsService.setCulturalBookingId(resource.culturalBookingIds[0]);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(resource);
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(resource); // Return null if the condition is not true
        }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log('resource tabs', res);
        this.resourceData = {
          ...res
        };
        // cand ajungem pe view event
        if (this.route.snapshot.queryParams?.book === 'ticket' && this.resourceData?.startDate) {
          const eventDate = moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.resourceData.startDate), 'DD-MM-YYYY');
          this.filterForm.get('dateAsDay').patchValue(eventDate);
          this.bookingItemsService.updateFormValues(this.filterForm.value);
        }
        if (this.resourceData?.bookingType === 'rentalBooking') {
          this.filterForm.addValidators(this.startEndDateValidator);
        }
        if (this.resourceData?.relatedResources?.length > 0) {
          this.relatedResourcesObs$ = this.resourcesService.listResourceFiltered(0, -1, null, null, {
            relatedResource: this.resourceData.id
          });
        }
        if (this.resourceData?.attributes) {
          console.log('ATRIBUTE RES', this.resourceData?.attributes);
          this.resourceData.attributes.forEach(attribute => {
            if (attribute.tabName === 'general_info') {
              this.resourceGeneralInfo = attribute;
            }
            if (attribute.tabName === 'about') {
              this.resourceAbout = attribute;
            }
            if (attribute.tabName === 'facilities') {
              this.resourceFacilities = attribute;
              this.countFacilities(attribute.tabAttributes);
            }
            if (this.resourceGeneralInfo && this.resourceFacilities) {
              return;
            }
          });
        }
      }
    });
  }
  startEndDateValidator(form) {
    const startDate = form.get('startDate');
    const endDate = form.get('endDate');
    if (endDate.value && startDate.value > endDate.value) {
      startDate.setErrors({
        startDateIsHigher: true
      });
    } else {
      startDate.setErrors(null);
    }
    return;
  }
  listerForResourceType() {
    // const resourceTypeId = this.route.snapshot.paramMap.get('resourceTypeId');
    this.resourceFilterService.resourceTypeObs$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      if (!res) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(null);
        // return this.resourcesService.getResourceTypeById(resourceTypeId);
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) return;
        this.resourceTypeData = {
          ...res
        };
        if (res?.filterOption) {
          for (const key of Object.keys(res.filterOption)) {
            if (res.filterOption[key] === true && key !== 'location') {
              this.allFilterOptionsFalse = false;
            }
          }
        }
      }
    });
  }
  initFilterForm() {
    const today = new Date();
    today.setMinutes(Math.ceil(today.getMinutes() / 15 + (today.getMinutes() % 15 === 0 ? 1 : 0)) * 15);
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    this.filterForm = this.fb.group({
      // date filter options
      dateAsDay: [moment__WEBPACK_IMPORTED_MODULE_5__(today, 'DD-MM-YYYY')],
      dateAsHour: [moment__WEBPACK_IMPORTED_MODULE_5__(today, 'DD MM YYYY HH:mm')],
      startDate: [moment__WEBPACK_IMPORTED_MODULE_5__(today, 'DD-MM-YYYY')],
      endDate: [moment__WEBPACK_IMPORTED_MODULE_5__(tomorrow, 'DD-MM-YYYY')],
      startHour: [moment__WEBPACK_IMPORTED_MODULE_5__(today, 'DD MM YYYY HH:mm')],
      endHour: [moment__WEBPACK_IMPORTED_MODULE_5__(tomorrow, 'DD MM YYYY HH:mm')],
      // guests filter options
      adultsNumber: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(1)],
      childrenNumber: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(0)],
      roomsNumber: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(1)]
    });
    this.savedFilters = this.resourceFilterService.getSavedFilters();
    this.filterForm.patchValue(this.savedFilters);
    this.bookingItemsService.updateFormValues(this.filterForm.value);
  }
  decreaseNrGuests(formControlName) {
    let currentValue = this.filterForm.get(formControlName).value;
    if (currentValue === 0) {
      return;
    }
    this.filterForm.get(formControlName).patchValue(--currentValue);
  }
  increaseNrGuests(formControlName) {
    let currentValue = this.filterForm.get(formControlName).value;
    this.filterForm.get(formControlName).patchValue(++currentValue);
  }
  applyFilters() {
    if (!this.filterForm.valid) {
      this.filterForm.markAllAsTouched();
      return;
    }
    this.bookingItemsService.updateFormValues(this.filterForm.value);
  }
  activeTabHasChanged(event) {
    this.activeTabId = event;
    this.activeTabHasChangedEvent.emit(event);
  }
  startDateChanged(event, nextElementRef) {
    if (!moment__WEBPACK_IMPORTED_MODULE_5__(event.value).isSameOrAfter(this.nextDay, 'day')) {
      this.nextDay = moment__WEBPACK_IMPORTED_MODULE_5__(event.value).clone().add(1, 'days');
      return;
    } else {
      this.nextDay = moment__WEBPACK_IMPORTED_MODULE_5__(event.value).clone().add(1, 'days');
      this.filterForm.get('endDate').patchValue(this.nextDay);
      nextElementRef.open();
    }
  }
  endDateChanged(event) {
    this.nextDay = moment__WEBPACK_IMPORTED_MODULE_5__(event.value).clone();
  }
  startHourChanged(event, nextElementRef) {
    if (!moment__WEBPACK_IMPORTED_MODULE_5__(event.value).isSameOrAfter(this.nextDay, 'hour')) return;
    this.nextDay = moment__WEBPACK_IMPORTED_MODULE_5__(event.value).clone().add(1, 'days');
    this.filterForm.get('endHour').patchValue(this.nextDay);
    nextElementRef.open();
  }
  endHourChanged(event) {
    this.nextDay = moment__WEBPACK_IMPORTED_MODULE_5__(event.value).clone();
  }
  countFacilities(facilitiesAttr) {
    console.log('FACILITIES TAB', facilitiesAttr);
    facilitiesAttr.forEach(attr => {
      if (attr.attributeValue === 'true') {
        this.hasFacilitiesTrue = true;
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__.ResourceFilterService
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__.ResourcesService
  }, {
    type: _view_simple_resource_booking_type_tab_items_booking_type_items_service__WEBPACK_IMPORTED_MODULE_4__.BookingTypeItemsService
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_6__.SystemSettingsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
  }];
  static #_2 = this.propDecorators = {
    activeTabId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    activeTabHasChangedEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }]
  };
};
ResourceTabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-resource-tabs',
  template: _resource_tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_resource_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResourceTabsComponent);


/***/ }),

/***/ 22434:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resources-carousel/resources-carousel.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesCarouselComponent": () => (/* binding */ ResourcesCarouselComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resources_carousel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources-carousel.component.html?ngResource */ 19257);
/* harmony import */ var _resources_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources-carousel.component.scss?ngResource */ 66181);
/* harmony import */ var _resources_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);










let ResourcesCarouselComponent = class ResourcesCarouselComponent {
  constructor(resourceFilterService, resourcesService, currentUserService, translate) {
    this.resourceFilterService = resourceFilterService;
    this.resourcesService = resourcesService;
    this.currentUserService = currentUserService;
    this.translate = translate;
    this.resourceType = null;
    this.resourceTemplate = null;
    this.resourcesList = [];
    this.resourcesLoaded = false;
    this.currentUser = null;
    // carousel config
    this.customOptions = {
      autoplay: true,
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      dotsEach: 4,
      nav: false,
      navSpeed: 700,
      center: false,
      margin: 24,
      autoWidth: false,
      responsive: {
        0: {
          items: 1
        },
        576: {
          autoWidth: true,
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        },
        1200: {
          autoWidth: true,
          items: 5
        }
      }
    };
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.listenToResourceTemplate();
    this.listenToResourceType();
    this.getCurrentUser();
    this.checkLanguage();
  }
  listenToResourceTemplate() {
    this.resourceFilterService.resourceTemplateObs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceTemplate = {
          ...res
        };
      }
    });
  }
  listenToResourceType() {
    this.resourceFilterService.resourceTypeObs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) return;
        this.resourceType = res;
        this.getResourceRecommendations();
      }
    });
  }
  getResourceRecommendations() {
    this.resourcesService.listResourceFiltered(0, 10, null, null, {
      resourceTypeId: this.resourceType.id,
      bestForMe: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourcesList = res.content.slice();
        this.resourcesLoaded = true;
      }
    });
  }
  getCurrentUser() {
    this.currentUserService.getCurrentUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentUser = {
          ...res
        };
      }
    });
  }
  checkLanguage() {
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__.ResourceFilterService
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__.ResourcesService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }];
};
ResourcesCarouselComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-resources-carousel',
  template: _resources_carousel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_resources_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResourcesCarouselComponent);


/***/ }),

/***/ 2903:
/*!************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resources-list/resources-list.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesListComponent": () => (/* binding */ ResourcesListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resources_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources-list.component.html?ngResource */ 81722);
/* harmony import */ var _resources_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources-list.component.scss?ngResource */ 4330);
/* harmony import */ var _resources_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);








let ResourcesListComponent = class ResourcesListComponent {
  constructor(resourceFilterService, translate) {
    this.resourceFilterService = resourceFilterService;
    this.translate = translate;
    this.paginationInfo = null;
    this.resourceType = null;
    this.resourceListObs$ = this.resourceFilterService.resourceListObs$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(resourceList => {
      this.paginationInfo = resourceList;
    }));
    this.resourcesList = [];
    this.resourceTemplate = null;
    // pagination
    this.pageNr = 0;
    this.pageSize = 10;
    this.sortByProperty = null;
    this.sortDirection = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.onResize();
  }
  ngOnInit() {
    this.listenToResourceTemplate();
    this.listenToResourceType();
    // this.getResourcesList();
    this.checkLanguage();
  }
  onResize() {
    this.screenWidth = window.innerWidth;
  }
  listenToResourceTemplate() {
    this.resourceFilterService.resourceTemplateObs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceTemplate = res;
      }
    });
  }
  listenToResourceType() {
    this.resourceFilterService.resourceTypeObs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceType = res;
      }
    });
  }
  getResourcesList() {
    this.resourceFilterService.listResourceFiltered(this.pageNr, this.pageSize, this.sortByProperty, this.sortDirection).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (this.resourcesPaginator && this.paginationInfo?.totalElements !== res.totalElements) {
          this.resourcesPaginator.firstPage();
        }
        this.paginationInfo = res;
        this.resourcesList = res.content;
        console.log('lista resuressss', this.resourcesList);
      }
    });
  }
  checkLanguage() {
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
  }
  onSortChange(event) {
    console.log('SORTARE DUPA:', event);
    if (event.value === 'titleAsc') {
      this.sortByProperty = 'title';
      this.sortDirection = 'asc';
    } else if (event.value === 'titleDesc') {
      this.sortByProperty = 'title';
      this.sortDirection = 'desc';
    }
    // this.sortByProperty = event.value;
    // this.sortDirection = 'asc';
    if (this.resourcesPaginator.pageIndex !== 0) {
      this.resourcesPaginator.firstPage();
      return;
    }
    this.getResourcesList();
  }
  onPaginationChange(event) {
    if (event.pageSize !== this.pageSize) {
      this.pageSize = event.pageSize;
      this.resourcesPaginator.firstPage();
    }
    this.pageNr = event.pageIndex;
    this.getResourcesList();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__.ResourceFilterService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
  }];
  static #_2 = this.propDecorators = {
    resourcesPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['resourcesPaginator']
    }],
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener,
      args: ['window:resize', ['$event']]
    }]
  };
};
ResourcesListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-resources-list',
  template: _resources_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_resources_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResourcesListComponent);


/***/ }),

/***/ 40904:
/*!****************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/sale/sale.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleComponent": () => (/* binding */ SaleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sale_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale.component.html?ngResource */ 81492);
/* harmony import */ var _sale_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale.component.scss?ngResource */ 11234);
/* harmony import */ var _sale_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sale_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SaleComponent = class SaleComponent {};
SaleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-sale',
  template: _sale_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_sale_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SaleComponent);


/***/ }),

/***/ 37719:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/sidebar-filters/sidebar-filters.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarFiltersComponent": () => (/* binding */ SidebarFiltersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sidebar_filters_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-filters.component.html?ngResource */ 51696);
/* harmony import */ var _sidebar_filters_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-filters.component.scss?ngResource */ 9247);
/* harmony import */ var _sidebar_filters_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidebar_filters_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);










let SidebarFiltersComponent = class SidebarFiltersComponent {
  constructor(resourceFilterService, fb, route) {
    this.resourceFilterService = resourceFilterService;
    this.fb = fb;
    this.route = route;
    this.filtersSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.filterAttributes = null;
    this.resourceTitleToSearch = null;
    this.resourceAttributesToSearch = null;
    this.filtersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
    this.anyFilterSelected = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.showFilters = true;
    this.onResize();
  }
  ngOnInit() {
    this.getResourceType();
    this.listenForTemplateIdAndGetFilterAttributes();
  }
  onResize() {
    this.screenWidth = window.innerWidth;
    this.showFilters = this.screenWidth >= 992;
  }
  listenForTemplateIdAndGetFilterAttributes() {
    this.resourceFilterService.resourceTemplateObs$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(template => {
      if (template && template.id) {
        return this.resourceFilterService.getFilterAttributeFromTemplate(template.id);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) {
          return;
        }
        this.filterAttributes = [...res];
        console.log('aici avem lista de atribute', this.filterAttributes);
        this.initFilterForm();
      }
    });
  }
  initFilterForm() {
    if (!this.filterAttributes) {
      return;
    }
    // DO NOT DELETE
    /*this.filterAttributes.forEach( attribute => {
        if (attribute.valueType === 'select') {
            this.filtersForm.addControl(attribute.name, this.fb.control(false));
         } else if (attribute.valueType === 'multiple-select') {
            const newFormGroup = this.fb.group({});
            if (attribute.valueOptions) {
                attribute.valueOptions.forEach( valueOption => {
                    newFormGroup.addControl(valueOption, this.fb.control(false));
                });
            }
            this.filtersForm.addControl(attribute.name, newFormGroup);
        }
    });*/
    this.filterAttributes.forEach(attribute => {
      const newFormGroup = this.fb.group({});
      if (attribute.valueOptions) {
        attribute.valueOptions.forEach(valueOption => {
          newFormGroup.addControl(valueOption, this.fb.control(false));
        });
      }
      this.filtersForm.addControl(attribute.name, newFormGroup);
    });
    this.listenToFormChanges();
  }
  listenToFormChanges() {
    this.filtersForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(newValue => {
      for (const objectKey of Object.keys(newValue)) {
        const formControls = newValue[objectKey];
        this.anyFilterSelected = Object.values(formControls).some(value => value === true);
        console.log('anyFilterSelected', this.anyFilterSelected);
        if (this.anyFilterSelected) {
          break;
        }
      }
    });
  }
  searchByTitle() {
    const filtersToSend = {
      title: this.resourceTitleToSearch
    };
    this.resourceFilterService.updateFilters(filtersToSend).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe();
  }
  applyFilters() {
    this.filtersSubmitted.emit();
    const filtersToSend = {
      attributes: []
    };
    Object.keys(this.filtersForm.controls).forEach(abstractControlName => {
      const abstractControl = this.filtersForm.get(abstractControlName);
      // DO NOT DELETE
      /*if (abstractControl instanceof FormControl) {
          if (abstractControl.value) {
              filtersToSend.attributes.push({
                  attributeName: abstractControlName,
                  attributeValue: abstractControl.value
              });
          }
      } else if (abstractControl instanceof FormGroup) {
          const attributeValues = Object.keys(abstractControl.controls).map( control => {
              if (this.filtersForm.get([abstractControlName, control]).value) {
                  return control;
              }
              return null;
          }).filter( value => value);
           if (attributeValues.length > 0) {
              filtersToSend.attributes.push({
                  attributeName: abstractControlName,
                  attributeValue: attributeValues.join(',')
              });
          }
      }*/
      if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup) {
        const attributeValues = Object.keys(abstractControl.controls).map(control => {
          if (this.filtersForm.get([abstractControlName, control]).value) {
            return control;
          }
          return null;
        }).filter(value => value);
        if (attributeValues.length > 0) {
          filtersToSend.attributes.push({
            attributeName: abstractControlName,
            attributeValue: attributeValues.join(',')
          });
        }
      }
    });
    if (filtersToSend.attributes.length === 0) {
      this.resourceFilterService.updateFilters({
        attributes: null
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe();
      return;
    }
    this.resourceFilterService.updateFilters(filtersToSend).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe();
  }
  getResourceType() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: params => {
        this.resourceTypeId = params.get('resourceTypeId');
        this.resourceFilterService.getResourceTypeById(this.resourceTypeId).subscribe(res => {
          this.resouceTypeNameEn = res?.nameEn;
        });
      }
    });
  }
  titleCaseWord(word) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
  resetFilters() {
    this.filtersForm.reset();
    this.resourceFilterService.updateFilters({
      attributes: null
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__.ResourceFilterService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }];
  static #_2 = this.propDecorators = {
    filtersSubmitted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['window:resize', ['$event']]
    }]
  };
};
SidebarFiltersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-sidebar-filters',
  template: _sidebar_filters_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe],
  styles: [(_sidebar_filters_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SidebarFiltersComponent);


/***/ }),

/***/ 94762:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/toggle-sections/toggle-sections.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleSectionsComponent": () => (/* binding */ ToggleSectionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _toggle_sections_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-sections.component.html?ngResource */ 33504);
/* harmony import */ var _toggle_sections_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-sections.component.scss?ngResource */ 51702);
/* harmony import */ var _toggle_sections_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toggle_sections_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ToggleSectionsComponent = class ToggleSectionsComponent {
  constructor() {
    this.tabIndex = Tabs.tabExplore;
  }
  ngOnInit() {
    this.setTab(Tabs.tabExplore);
  }
  setTab(tab) {
    this.tabIndex = tab;
  }
  onValChange(value) {
    console.log('toggle', value);
  }
};
ToggleSectionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-toggle-sections',
  template: _toggle_sections_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_toggle_sections_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ToggleSectionsComponent);

var Tabs;
(function (Tabs) {
  Tabs[Tabs["tabEvents"] = 0] = "tabEvents";
  Tabs[Tabs["tabExplore"] = 1] = "tabExplore";
  Tabs[Tabs["tabEditorials"] = 2] = "tabEditorials";
})(Tabs || (Tabs = {}));

/***/ }),

/***/ 97024:
/*!****************************************************************************************!*\
  !*** ./src/app/features/domain-listing/category-listing/category-listing.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListingComponent": () => (/* binding */ CategoryListingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_listing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-listing.component.html?ngResource */ 65401);
/* harmony import */ var _category_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-listing.component.scss?ngResource */ 38134);
/* harmony import */ var _category_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_category_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/system-settings.service */ 42912);











let CategoryListingComponent = class CategoryListingComponent {
  constructor(route, resourcesService, router, toastService, translate, settingsService) {
    this.route = route;
    this.resourcesService = resourcesService;
    this.router = router;
    this.toastService = toastService;
    this.translate = translate;
    this.settingsService = settingsService;
    this.categoryData = null;
    this.colArray = [];
    this.listOfResourceTypes = [];
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.checkLanguage();
    this.checkRoute();
  }
  checkLanguage() {
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
  }
  checkRoute() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(params => {
      if (params.has('domainId')) {
        this.domainId = params.get('domainId');
      }
      if (params.has('categoryId')) {
        this.categoryId = params.get('categoryId');
        return this.resourcesService.getResourceCategoryById(this.categoryId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(resourceData => {
          this.categoryData = resourceData;
          console.log('CATEGORY DATA', this.categoryData);
          return this.resourcesService.getAllResourceTypesByResourceCategory(this.categoryId);
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.listOfResourceTypes = res;
        console.log('List of res 0', this.listOfResourceTypes);
        if (this.categoryData.hasFitnessForum && this.categoryData.hasNutritionForum) {
          this.settingsService.getSystemSetting().subscribe(resp => {
            if (resp.fitnessForum.enable) {
              this.listOfResourceTypes.push({
                nameRo: resp.fitnessForum.nameRo,
                nameEn: resp.fitnessForum.nameEn,
                image: resp.fitnessForum.image,
                routeOption: 'forum/fitness'
              });
            }
            if (resp.nutritionForum.enable) {
              this.listOfResourceTypes.push({
                nameRo: resp.nutritionForum.nameRo,
                nameEn: resp.nutritionForum.nameEn,
                image: resp.nutritionForum.image,
                routeOption: 'forum/nutrition'
              });
            }
            console.log('List of res 1', this.listOfResourceTypes);
            this.colArray = [];
            this.generateColArray(this.listOfResourceTypes.length);
          });
        } else {
          console.log('List of res 2', this.listOfResourceTypes);
          this.colArray = [];
          this.generateColArray(this.listOfResourceTypes.length);
        }
      },
      error: () => {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
        void this.router.navigate(['/client/domain', this.domainId]);
      }
    });
  }
  generateColArray(nrOfElements) {
    const colMatrix = [[]];
    let colRow = 0;
    if (nrOfElements <= 5) {
      for (let i = 0; i < nrOfElements; i++) {
        if (colMatrix[colRow]) {
          if (colMatrix[colRow].length < 2) {
            colMatrix[colRow].push(6);
          } else {
            colMatrix.push([6]);
            colRow++;
          }
        }
      }
    } else {
      for (let i = 0; i < nrOfElements; i++) {
        if (colMatrix[colRow]) {
          if (colMatrix[colRow].length < 3) {
            colMatrix[colRow].push(6);
          } else {
            colMatrix.push([6]);
            colRow++;
          }
        }
      }
    }
    colMatrix.forEach(row => {
      row.forEach(() => {
        this.colArray.push(12 / row.length);
      });
    });
    console.log(colMatrix);
    console.log(this.colArray);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_4__.SystemSettingsService
  }];
};
CategoryListingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-category-listing',
  template: _category_listing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_category_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CategoryListingComponent);


/***/ }),

/***/ 89265:
/*!*********************************************************************!*\
  !*** ./src/app/features/domain-listing/domain-listing.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainListingComponent": () => (/* binding */ DomainListingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _domain_listing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain-listing.component.html?ngResource */ 72985);
/* harmony import */ var _domain_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain-listing.component.scss?ngResource */ 58811);
/* harmony import */ var _domain_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_domain_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/resources.service */ 3145);
/* harmony import */ var _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/domains.service */ 58820);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/_services/auth.service */ 56566);
/* harmony import */ var _shared_services_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/_services/events.service */ 18100);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _editorials_services_editorials_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editorials/_services/editorials.service */ 36052);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/_services/system-settings.service */ 42912);















const travelAndEntertainmentId = "63bfcca765dc3f3863af755c";
let DomainListingComponent = class DomainListingComponent {
  constructor(route, router, resourcesService, domainsService, toastService, translate, authService, eventsService, editorialsService, systemSettingsService, cdr) {
    this.route = route;
    this.router = router;
    this.resourcesService = resourcesService;
    this.domainsService = domainsService;
    this.toastService = toastService;
    this.translate = translate;
    this.authService = authService;
    this.eventsService = eventsService;
    this.editorialsService = editorialsService;
    this.systemSettingsService = systemSettingsService;
    this.cdr = cdr;
    this.isTravelDomain = false;
    this.eventTypeId = undefined;
    this.editorialTypeId = undefined;
    this.resourceTitle = null;
    this.resourceFiltersBody = null;
    this.filteredResources = null;
    this.fetchingFilteredResources = false;
    this.categoryId = null;
    this.systemSettingData = null;
    this.colMatrix = [];
    this.previousIndexForMatrix = 1;
    this.equalizedMatrix = [];
    this.domainLoaded = false;
    // paginare rezultate
    this.pageSize = 10;
    this.pageSizeOptions = [10, 15, 20];
    this.pageIndex = 0;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.console = console;
  }
  ngOnInit() {
    // this.domainChanges();
    this.checkForDomainId();
  }
  domainChanges() {
    this.domainsService.domainChangedChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // this.videoPath=undefined;
        this.checkForDomainId();
        // Get Documents List
        this.cdr.detectChanges();
      }
    });
  }
  getDomainVideo() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: params => {
        this.domainsService.getDomainById(params.get('domainId')).subscribe(res => {
          this.console.log('domeniul se schimba?', params.get('domainId'));
          this.videoPath = res.video.filePath;
          console.log('video din get domain video', this.videoPath);
        });
      }
    });
  }
  setEventType(event) {
    // console.log('evenimentul');
    // console.log(event);
    this.eventTypeId = event;
    this.eventsService.listResourceFiltered(0, 10, null, null, {
      categoryId: this.systemSettingData.eventCategoryId,
      resourceTypeId: this.eventTypeId,
      status: 'active'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log('lista noua', res);
        this.eventsList = res.content;
      }
    });
  }
  setEditorialType(event) {
    // console.log('evenimentul');
    // console.log(event);
    this.editorialTypeId = event;
    // console.log('id editorial',  this.editorialTypeId);
    this.editorialsService.listEditorialFiltered(0, 10, null, null, {
      category: this.editorialTypeId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.editorialsList = res.content;
        // console.log('lista noua', this.editorialsList);
      }
    });
  }

  checkForDomainId() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(params => {
      if (params.get('domainId')) {
        // resetam filtrele pt bara de search
        this.resourceFiltersBody = {
          domain: params.get('domainId'),
          status: 'active'
        };
        this.resourceTitle = null;
        this.filteredResources = null;
        this.categoryId = null;
        if (!this.systemSettingData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)([this.domainsService.getDomainById(params.get('domainId')), this.resourcesService.getAllResourceCategoriesByResourceDomain(params.get('domainId'), true), this.systemSettingsService.getSystemSetting().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.take)(1))]);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)([this.domainsService.getDomainById(params.get('domainId')), this.resourcesService.getAllResourceCategoriesByResourceDomain(params.get('domainId'), true)]);
      } else {
        return this.router.navigate([`/client/domain/${travelAndEntertainmentId}`]);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (typeof res !== 'boolean') {
          if (!this.systemSettingData) {
            this.videoPath = undefined;
            [this.currentDomain, this.listOfCategories, this.systemSettingData] = res;
            this.videoPath = res[0].video.filePath;
            this.cdr.detectChanges;
            this.console.log('videoPath1', this.videoPath);
          } else {
            this.videoPath = undefined;
            [this.currentDomain, this.listOfCategories] = res;
            this.videoPath = res[0].video.filePath;
            this.cdr.detectChanges;
            this.console.log('videoPath2', this.videoPath);
          }
          this.domainLoaded = true;
          // ascundem acel card gol de la jobs
          if (this.currentDomain.key === 'jobs') {
            this.listOfCategories = [];
          }
          if (this.currentDomain.id === travelAndEntertainmentId) {
            this.isTravelDomain = true;
            this.authService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(user => {
              if (!user) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(null);
              }
              this.currentUser = user;
              return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)([this.eventsService.listResourceFiltered(0, 10, null, null, {
                categoryId: this.systemSettingData.eventCategoryId,
                resourceTypeId: this.eventTypeId,
                status: 'active'
              }), this.editorialsService.listEditorialFiltered(0, 10, null, null, {})]);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
              next: resources => {
                if (resources) {
                  [this.eventsList, this.editorialsList] = [resources[0].content, resources[1].content];
                }
              },
              error: () => {
                this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
              }
            });
          } else {
            this.isTravelDomain = false;
          }
          // medical forum
          if (this.currentDomain.key === 'healthcare' && this.systemSettingData.medicalForum.enable) {
            this.listOfCategories.push({
              nameRo: this.systemSettingData.medicalForum.nameRo,
              nameEn: this.systemSettingData.medicalForum.nameEn,
              image: this.systemSettingData.medicalForum.image,
              nextRoute: 'forum/medical'
            });
          }
          // trips
          if (this.currentDomain.key === 'travel' && this.systemSettingData.trip.enable) {
            this.listOfCategories.push({
              nameRo: this.systemSettingData.trip.nameRo,
              nameEn: this.systemSettingData.trip.nameEn,
              image: this.systemSettingData.trip.image,
              nextRoute: 'trips'
            });
          }
          // jobs
          if (this.currentDomain.key === 'jobs') {
            // my CV
            if (this.systemSettingData.jobOptions.myCv.enable) {
              this.listOfCategories.push({
                nameRo: this.systemSettingData.jobOptions.myCv.nameRo,
                nameEn: this.systemSettingData.jobOptions.myCv.nameEn,
                image: this.systemSettingData.jobOptions.myCv.image,
                nextRoute: 'jobs/my-cv'
              });
            }
            // job offers
            if (this.systemSettingData.jobOptions.jobOffers.enable) {
              this.listOfCategories.push({
                nameRo: this.systemSettingData.jobOptions.jobOffers.nameRo,
                nameEn: this.systemSettingData.jobOptions.jobOffers.nameEn,
                image: this.systemSettingData.jobOptions.jobOffers.image,
                nextRoute: 'jobs/job-offers'
              });
            }
            // view candidates
            if (this.systemSettingData.jobOptions.candidates.enable) {
              this.listOfCategories.push({
                nameRo: this.systemSettingData.jobOptions.candidates.nameRo,
                nameEn: this.systemSettingData.jobOptions.candidates.nameEn,
                image: this.systemSettingData.jobOptions.candidates.image,
                nextRoute: 'jobs/candidates'
              });
            }
            // my job offers
            if (this.systemSettingData.jobOptions.myJobOffers.enable) {
              this.listOfCategories.push({
                nameRo: this.systemSettingData.jobOptions.myJobOffers.nameRo,
                nameEn: this.systemSettingData.jobOptions.myJobOffers.nameEn,
                image: this.systemSettingData.jobOptions.myJobOffers.image,
                nextRoute: 'jobs/my-job-offers'
              });
            }
          }
          // shared experiences
          if (this.currentDomain.key === 'travel' && this.systemSettingData.sharedExperience.enable) {
            this.listOfCategories.push({
              nameRo: this.systemSettingData.sharedExperience.nameRo,
              nameEn: this.systemSettingData.sharedExperience.nameEn,
              image: this.systemSettingData.sharedExperience.image,
              nextRoute: 'shared-experiences'
            });
          }
          if (this.listOfCategories?.length > 0) {
            this.maxNrOfRows = this.listOfCategories.length / 4 <= 3 ? 3 : Math.ceil(this.listOfCategories.length / 4);
            this.indexForMatrix = 2;
            this.previousIndexForMatrix = 1;
            this.colMatrix = [];
            this.equalizedMatrix = [];
            this.calculateColMatrix(this.listOfCategories.length);
          }
          console.log('CATEGORII', this.listOfCategories);
        }
      },
      error: () => {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
      }
    });
  }
  onTitleChange(event) {
    const inputText = event.trim();
    if (!inputText || inputText?.length === 0) {
      this.filteredResources = null;
      this.categoryId = null;
    }
  }
  myFunction(event) {
    console.log(event);
  }
  searchResourcesByTitle(titleToSearch) {
    console.log('se activeaza');
    this.fetchingFilteredResources = true;
    if (titleToSearch) {
      this.resourceTitle = titleToSearch.trim();
    }
    if (!this.resourceTitle) {
      this.filteredResources = null;
      this.categoryId = null;
      return;
    }
    this.resourceFiltersBody = {
      ...this.resourceFiltersBody,
      title: this.resourceTitle,
      categoryId: this.categoryId
    };
    console.log(this.resourceFiltersBody);
    this.resourcesService.listResourceFiltered(this.pageIndex, this.pageSize, 'title', 'asc', this.resourceFiltersBody).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.fetchingFilteredResources = false;
        this.filteredResources = {
          ...res
        };
      }
    });
  }
  calculateColMatrix(nrOfColumns) {
    do {
      this.pushToMatrixRow();
      nrOfColumns--;
    } while (nrOfColumns > 0);
    console.log(this.colMatrix);
    this.equalizeMatrix();
    console.log(this.equalizedMatrix);
  }
  pushToMatrixRow() {
    // debugger;
    if (this.colMatrix.length <= this.maxNrOfRows && this.currentMatrixLength() <= 5) {
      for (let i = 0; i < this.maxNrOfRows; i++) {
        if (this.colMatrix[i]) {
          if (this.colMatrix[i].length < 2) {
            this.colMatrix[i].push(6);
            break;
          }
        } else {
          this.colMatrix.push([6]);
          break;
        }
      }
    } else {
      if (this.listOfCategories.length - this.currentMatrixLength() > 1) {
        if (this.indexForMatrix === 0) {
          if (this.matrixIsFull()) {
            this.colMatrix.push([6]);
            this.previousIndexForMatrix = 0;
            this.indexForMatrix = this.colMatrix.length - 1;
          } else if (this.colMatrix[this.colMatrix.length - 1].length === 4 && this.colMatrix[this.colMatrix.length - 2].length === 3) {
            this.colMatrix[this.colMatrix.length - 2].push(6);
            this.previousIndexForMatrix = 0;
            this.indexForMatrix = this.colMatrix.length - 2;
          } else if (this.currentMatrixLength() > 12 && this.colMatrix[this.colMatrix.length - 1].length < 4) {
            this.colMatrix[this.colMatrix.length - 1].push(6);
            this.indexForMatrix = this.colMatrix.length - 1;
          } else {
            this.colMatrix[this.colMatrix.length - 1].push(6);
            this.previousIndexForMatrix = 0;
            this.indexForMatrix = this.colMatrix.length - 1;
          }
        } else {
          if (this.matrixIsFull()) {
            this.colMatrix.push([6]);
            this.previousIndexForMatrix = this.indexForMatrix;
            this.indexForMatrix = this.colMatrix.length - 1;
          } else if (this.colMatrix[this.indexForMatrix - 1].length === 4 && this.colMatrix[this.indexForMatrix - 2].length === 3) {
            this.colMatrix[this.indexForMatrix - 2].push(6);
            this.previousIndexForMatrix = this.indexForMatrix;
            this.indexForMatrix -= 2;
          } else if (this.currentMatrixLength() > 12 && this.colMatrix[this.colMatrix.length - 1].length < 4) {
            this.colMatrix[this.colMatrix.length - 1].push(6);
            this.indexForMatrix = this.colMatrix.length - 1;
          } else {
            this.colMatrix[this.indexForMatrix - 1].push(6);
            this.previousIndexForMatrix = this.indexForMatrix;
            this.indexForMatrix--;
          }
          /*this.colMatrix[this.indexForMatrix-1].push(6);
          this.previousIndexForMatrix = this.indexForMatrix;
          this.indexForMatrix--;*/
        }
      } else {
        if (this.indexForMatrix !== 0) {
          if (this.colMatrix[this.previousIndexForMatrix].length === 4 && this.colMatrix[this.indexForMatrix].length === 3) {
            this.colMatrix[this.indexForMatrix].push(6);
          } else if (this.colMatrix[this.previousIndexForMatrix].length < 4) {
            this.colMatrix[this.previousIndexForMatrix].push(6);
          } else if (this.currentMatrixLength() > 12 && this.colMatrix[this.colMatrix.length - 1].length < 4) {
            this.colMatrix[this.colMatrix.length - 1].push(6);
            this.indexForMatrix = this.colMatrix.length - 1;
          } else {
            this.colMatrix.push([6]);
          }
        } else {
          if (this.colMatrix[this.previousIndexForMatrix].length === 4 && this.colMatrix[this.colMatrix.length - 1].length === 3) {
            this.colMatrix[this.colMatrix.length - 1].push(6);
          } else if (this.colMatrix[this.previousIndexForMatrix].length < 4) {
            this.colMatrix[this.previousIndexForMatrix].push(6);
          } else if (this.currentMatrixLength() > 12 && this.colMatrix[this.colMatrix.length - 1].length < 4) {
            this.colMatrix[this.colMatrix.length - 1].push(6);
            this.indexForMatrix = this.colMatrix.length - 1;
          } else {
            this.colMatrix.push([6]);
          }
        }
      }
    }
  }
  currentMatrixLength() {
    const initialValue = 0;
    return this.colMatrix.reduce((accumulator, currentValue) => accumulator + currentValue.length, initialValue);
  }
  matrixIsFull() {
    return this.currentMatrixLength() % 4 === 0 && this.currentMatrixLength() >= 12;
  }
  equalizeMatrix() {
    this.colMatrix.forEach(row => {
      row.forEach(() => {
        this.equalizedMatrix.push(12 / row.length);
      });
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }, {
    type: _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_3__.DomainsService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService
  }, {
    type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
  }, {
    type: _shared_services_events_service__WEBPACK_IMPORTED_MODULE_6__.EventsService
  }, {
    type: _editorials_services_editorials_service__WEBPACK_IMPORTED_MODULE_7__.EditorialsService
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_8__.SystemSettingsService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef
  }];
};
DomainListingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-domain-listing',
  template: _domain_listing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_domain_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DomainListingComponent);


/***/ }),

/***/ 71622:
/*!******************************************************************!*\
  !*** ./src/app/features/domain-listing/domain-listing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainListingModule": () => (/* binding */ DomainListingModule),
/* harmony export */   "MY_FORMATS": () => (/* binding */ MY_FORMATS),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _domain_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain-listing.component */ 89265);
/* harmony import */ var _components_banner_client_banner_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/banner-client/banner-client.component */ 56301);
/* harmony import */ var _components_toggle_sections_toggle_sections_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/toggle-sections/toggle-sections.component */ 94762);
/* harmony import */ var _components_popular_locations_popular_locations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/popular-locations/popular-locations.component */ 35564);
/* harmony import */ var _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/activities/activities.component */ 7289);
/* harmony import */ var _components_editorials_section_editorials_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/editorials-section/editorials-section.component */ 33753);
/* harmony import */ var _components_sale_sale_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/sale/sale.component */ 40904);
/* harmony import */ var _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/experiences/experiences.component */ 3148);
/* harmony import */ var _components_job_tradings_job_tradings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/job-tradings/job-tradings.component */ 5411);
/* harmony import */ var _components_events_carousel_events_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/events-carousel/events-carousel.component */ 68475);
/* harmony import */ var _components_editorials_carousel_editorials_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/editorials-carousel/editorials-carousel.component */ 94193);
/* harmony import */ var _standalone_components_domains_selector_domains_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../standalone-components/domains-selector/domains-selector.component */ 70209);
/* harmony import */ var _standalone_components_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../standalone-components/category-card/category-card.component */ 56386);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _standalone_components_resource_card_resource_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../standalone-components/resource-card/resource-card.component */ 40462);
/* harmony import */ var _standalone_components_editorial_card_editorial_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../standalone-components/editorial-card/editorial-card.component */ 5325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _standalone_components_static_category_listing_static_category_listing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../standalone-components/static-category-listing/static-category-listing.component */ 91887);
/* harmony import */ var _category_listing_category_listing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category-listing/category-listing.component */ 97024);
/* harmony import */ var _resource_listing_resource_listing_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resource-listing/resource-listing.component */ 13800);
/* harmony import */ var _components_resource_filter_bar_resource_filter_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_components/resource-filter-bar/resource-filter-bar.component */ 87120);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _components_sidebar_filters_sidebar_filters_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_components/sidebar-filters/sidebar-filters.component */ 37719);
/* harmony import */ var _components_resources_list_resources_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_components/resources-list/resources-list.component */ 2903);
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 20820);
/* harmony import */ var _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular-material-components/moment-adapter */ 73047);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material-moment-adapter */ 77118);
/* harmony import */ var _components_resources_carousel_resources_carousel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_components/resources-carousel/resources-carousel.component */ 22434);
/* harmony import */ var _standalone_components_resource_card_with_template_resource_card_with_template_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../standalone-components/resource-card-with-template/resource-card-with-template.component */ 25520);
/* harmony import */ var _view_simple_resource_view_simple_resource_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./view-simple-resource/view-simple-resource.component */ 40506);
/* harmony import */ var _components_resource_tabs_resource_tabs_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_components/resource-tabs/resource-tabs.component */ 67871);
/* harmony import */ var _components_resource_information_resource_information_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_components/resource-information/resource-information.component */ 34027);
/* harmony import */ var _standalone_components_room_card_room_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../standalone-components/room-card/room-card.component */ 68105);
/* harmony import */ var _transportation_plane_tickets_plane_tickets_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./transportation/plane-tickets/plane-tickets.component */ 39145);
/* harmony import */ var _view_simple_resource_booking_type_tab_items_rooms_list_rooms_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./view-simple-resource/booking-type-tab-items/rooms-list/rooms-list.component */ 38229);
/* harmony import */ var _view_simple_resource_booking_type_tab_items_tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./view-simple-resource/booking-type-tab-items/tickets-list/tickets-list.component */ 16160);
/* harmony import */ var _transportation_available_plane_tickets_list_available_plane_tickets_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./transportation/available-plane-tickets-list/available-plane-tickets-list.component */ 30301);
/* harmony import */ var _standalone_components_tickets_filter_sidebar_tickets_filter_sidebar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../standalone-components/tickets-filter-sidebar/tickets-filter-sidebar.component */ 39977);
/* harmony import */ var src_app_standalone_components_ticket_filter_plus_sidebar_ticket_filter_plus_sidebar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/standalone-components/ticket-filter-plus-sidebar/ticket-filter-plus-sidebar.component */ 57497);
/* harmony import */ var _transportation_components_available_ticket_card_available_ticket_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./transportation/components/available-ticket-card/available-ticket-card.component */ 74745);
/* harmony import */ var _transportation_components_location_card_location_card_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./transportation/components/location-card/location-card.component */ 17641);
/* harmony import */ var _standalone_components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../standalone-components/checkout/checkout.component */ 13311);
/* harmony import */ var _standalone_components_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../standalone-components/booking-confirmation/booking-confirmation.component */ 33741);
/* harmony import */ var _transportation_train_tickets_train_tickets_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./transportation/train-tickets/train-tickets.component */ 29198);
/* harmony import */ var _transportation_available_train_tickets_list_available_train_tickets_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./transportation/available-train-tickets-list/available-train-tickets-list.component */ 42573);
/* harmony import */ var _view_simple_resource_booking_type_tab_items_menu_menu_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./view-simple-resource/booking-type-tab-items/menu/menu.component */ 50237);
/* harmony import */ var _view_simple_resource_booking_type_tab_items_time_slots_list_time_slots_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./view-simple-resource/booking-type-tab-items/time-slots-list/time-slots-list.component */ 91053);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _view_simple_resource_booking_type_tab_items_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./view-simple-resource/booking-type-tab-items/products-list/products-list.component */ 99160);
/* harmony import */ var _standalone_components_images_gallery_images_gallery_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../standalone-components/images-gallery/images-gallery.component */ 99781);
/* harmony import */ var _view_simple_resource_booking_type_tab_items_picker_items_picker_items_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./view-simple-resource/booking-type-tab-items/picker-items/picker-items.component */ 85691);
/* harmony import */ var _components_resource_list_map_resource_list_map_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./_components/resource-list-map/resource-list-map.component */ 20656);
/* harmony import */ var _components_shared_exp_map_shared_exp_map_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./_components/shared-exp-map/shared-exp-map.component */ 57603);
/* harmony import */ var _view_simple_resource_booking_type_tab_items_seat_selection_seat_selection_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./view-simple-resource/booking-type-tab-items/seat-selection/seat-selection.component */ 41247);
/* harmony import */ var _standalone_components_seats_viewer_seats_viewer_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../standalone-components/seats-viewer/seats-viewer.component */ 43209);
/* harmony import */ var _transportation_car_rentals_car_rentals_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./transportation/car-rentals/car-rentals.component */ 65838);
/* harmony import */ var _transportation_available_car_rentals_list_available_car_rentals_list_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./transportation/available-car-rentals-list/available-car-rentals-list.component */ 37640);






























































const routes = [{
  path: '',
  component: _domain_listing_component__WEBPACK_IMPORTED_MODULE_0__.DomainListingComponent,
  pathMatch: "full"
}, {
  path: ':domainId',
  component: _domain_listing_component__WEBPACK_IMPORTED_MODULE_0__.DomainListingComponent,
  pathMatch: "full"
}, {
  path: ':domainId/shared-experiences',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_standalone-components_display-user_display-user_component_ts"), __webpack_require__.e("default-src_app_standalone-components_shared-experiences-info_shared-experiences-info_component_ts"), __webpack_require__.e("src_app_features_shared-experiences_shared-experiences_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../shared-experiences/shared-experiences.module */ 88653)).then(m => m.SharedExperiencesModule)
}, {
  path: ':domainId/trips',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_client-trips-itineraries_client-trips-itineraries_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../client-trips-itineraries/client-trips-itineraries.module */ 82586)).then(m => m.ClientTripsItinerariesModule)
}, {
  path: ':domainId/jobs',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_standalone-components_display-user_display-user_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_chips_mjs"), __webpack_require__.e("default-src_app_features_jobs__components_view-job_view-job_component_ts"), __webpack_require__.e("default-src_app_features_jobs_jobs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../jobs/jobs.module */ 87596)).then(m => m.JobsModule)
}, {
  path: ':domainId/forum',
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_features_forums_forums_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../forums/forums.module */ 79470)).then(m => m.ForumsModule)
}, {
  path: ':domainId/:staticCategories',
  component: _standalone_components_static_category_listing_static_category_listing_component__WEBPACK_IMPORTED_MODULE_16__.StaticCategoryListingComponent
}, {
  path: ':domainId/category/:categoryId',
  component: _category_listing_category_listing_component__WEBPACK_IMPORTED_MODULE_17__.CategoryListingComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/plane-tickets',
  component: _transportation_plane_tickets_plane_tickets_component__WEBPACK_IMPORTED_MODULE_28__.PlaneTicketsComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/available-plane-tickets',
  component: _transportation_available_plane_tickets_list_available_plane_tickets_list_component__WEBPACK_IMPORTED_MODULE_31__.AvailablePlaneTicketsListComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/available-plane-tickets/checkout/:planeId',
  component: _standalone_components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_36__.CheckoutComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/train-tickets',
  component: _transportation_train_tickets_train_tickets_component__WEBPACK_IMPORTED_MODULE_38__.TrainTicketsComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/available-train-tickets',
  component: _transportation_available_train_tickets_list_available_train_tickets_list_component__WEBPACK_IMPORTED_MODULE_39__.AvailableTrainTicketsListComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/available-train-tickets/checkout/:trainId',
  component: _standalone_components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_36__.CheckoutComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/car-rentals',
  component: _transportation_car_rentals_car_rentals_component__WEBPACK_IMPORTED_MODULE_49__.CarRentalsComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/available-car-rentals',
  component: _transportation_available_car_rentals_list_available_car_rentals_list_component__WEBPACK_IMPORTED_MODULE_50__.AvailableCarRentalsListComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/available-car-rentals/checkout/:carId',
  component: _standalone_components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_36__.CheckoutComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/resource-type/:resourceTypeId',
  component: _resource_listing_resource_listing_component__WEBPACK_IMPORTED_MODULE_18__.ResourceListingComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/resource-type/:resourceTypeId/resources-map',
  component: _components_resource_list_map_resource_list_map_component__WEBPACK_IMPORTED_MODULE_45__.ResourceListMapComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/resource-type/:resourceTypeId/view/:resourceId',
  component: _view_simple_resource_view_simple_resource_component__WEBPACK_IMPORTED_MODULE_24__.ViewSimpleResourceComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/resource-type/:resourceTypeId/view/:resourceId/checkout',
  component: _standalone_components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_36__.CheckoutComponent,
  pathMatch: "full"
}, {
  path: ':domainId/category/:categoryId/forum',
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_features_forums_forums_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../forums/forums.module */ 79470)).then(m => m.ForumsModule)
}];
// If using Moment
const CUSTOM_MOMENT_FORMATS = {
  parse: {
    dateInput: 'DD MM YYYY HH:mm'
  },
  display: {
    dateInput: 'DD MM YYYY HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};
const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY'
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY'
  }
};
let DomainListingModule = class DomainListingModule {};
DomainListingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_51__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_52__.NgModule)({
  declarations: [_domain_listing_component__WEBPACK_IMPORTED_MODULE_0__.DomainListingComponent, _components_banner_client_banner_client_component__WEBPACK_IMPORTED_MODULE_1__.BannerClientComponent, _components_toggle_sections_toggle_sections_component__WEBPACK_IMPORTED_MODULE_2__.ToggleSectionsComponent, _components_popular_locations_popular_locations_component__WEBPACK_IMPORTED_MODULE_3__.PopularLocationsComponent, _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_4__.ActivitiesComponent, _components_editorials_section_editorials_section_component__WEBPACK_IMPORTED_MODULE_5__.EditorialsSectionComponent, _components_sale_sale_component__WEBPACK_IMPORTED_MODULE_6__.SaleComponent, _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_7__.ExperiencesComponent, _components_job_tradings_job_tradings_component__WEBPACK_IMPORTED_MODULE_8__.JobTradingsComponent, _components_events_carousel_events_carousel_component__WEBPACK_IMPORTED_MODULE_9__.EventsCarouselComponent, _components_editorials_carousel_editorials_carousel_component__WEBPACK_IMPORTED_MODULE_10__.EditorialsCarouselComponent, _category_listing_category_listing_component__WEBPACK_IMPORTED_MODULE_17__.CategoryListingComponent, _resource_listing_resource_listing_component__WEBPACK_IMPORTED_MODULE_18__.ResourceListingComponent, _components_resource_filter_bar_resource_filter_bar_component__WEBPACK_IMPORTED_MODULE_19__.ResourceFilterBarComponent, _components_sidebar_filters_sidebar_filters_component__WEBPACK_IMPORTED_MODULE_20__.SidebarFiltersComponent, _components_resources_list_resources_list_component__WEBPACK_IMPORTED_MODULE_21__.ResourcesListComponent, _components_resources_carousel_resources_carousel_component__WEBPACK_IMPORTED_MODULE_22__.ResourcesCarouselComponent, _view_simple_resource_view_simple_resource_component__WEBPACK_IMPORTED_MODULE_24__.ViewSimpleResourceComponent, _components_resource_tabs_resource_tabs_component__WEBPACK_IMPORTED_MODULE_25__.ResourceTabsComponent, _components_resource_information_resource_information_component__WEBPACK_IMPORTED_MODULE_26__.ResourceInformationComponent, _transportation_plane_tickets_plane_tickets_component__WEBPACK_IMPORTED_MODULE_28__.PlaneTicketsComponent, _transportation_available_plane_tickets_list_available_plane_tickets_list_component__WEBPACK_IMPORTED_MODULE_31__.AvailablePlaneTicketsListComponent, _transportation_components_available_ticket_card_available_ticket_card_component__WEBPACK_IMPORTED_MODULE_34__.AvailableTicketCardComponent, _transportation_components_location_card_location_card_component__WEBPACK_IMPORTED_MODULE_35__.LocationCardComponent, _view_simple_resource_booking_type_tab_items_rooms_list_rooms_list_component__WEBPACK_IMPORTED_MODULE_29__.RoomsListComponent, _view_simple_resource_booking_type_tab_items_tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_30__.TicketsListComponent, _transportation_train_tickets_train_tickets_component__WEBPACK_IMPORTED_MODULE_38__.TrainTicketsComponent, _transportation_available_train_tickets_list_available_train_tickets_list_component__WEBPACK_IMPORTED_MODULE_39__.AvailableTrainTicketsListComponent, _view_simple_resource_booking_type_tab_items_menu_menu_component__WEBPACK_IMPORTED_MODULE_40__.MenuComponent, _view_simple_resource_booking_type_tab_items_time_slots_list_time_slots_list_component__WEBPACK_IMPORTED_MODULE_41__.TimeSlotsListComponent, _view_simple_resource_booking_type_tab_items_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_42__.ProductsListComponent, _view_simple_resource_booking_type_tab_items_picker_items_picker_items_component__WEBPACK_IMPORTED_MODULE_44__.PickerItemsComponent, _components_resource_list_map_resource_list_map_component__WEBPACK_IMPORTED_MODULE_45__.ResourceListMapComponent, _components_shared_exp_map_shared_exp_map_component__WEBPACK_IMPORTED_MODULE_46__.SharedExpMapComponent, _transportation_car_rentals_car_rentals_component__WEBPACK_IMPORTED_MODULE_49__.CarRentalsComponent, _transportation_available_car_rentals_list_available_car_rentals_list_component__WEBPACK_IMPORTED_MODULE_50__.AvailableCarRentalsListComponent, _view_simple_resource_booking_type_tab_items_seat_selection_seat_selection_component__WEBPACK_IMPORTED_MODULE_47__.SeatSelectionComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_53__.CommonModule, _standalone_components_domains_selector_domains_selector_component__WEBPACK_IMPORTED_MODULE_11__.DomainsSelectorComponent, _standalone_components_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_12__.CategoryCardComponent, _standalone_components_resource_card_resource_card_component__WEBPACK_IMPORTED_MODULE_13__.ResourceCardComponent, _standalone_components_editorial_card_editorial_card_component__WEBPACK_IMPORTED_MODULE_14__.EditorialCardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_54__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__.SharedModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_55__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__.NgbPanelHeader, _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_57__.NgxMatMomentModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_58__.NgxMatDatetimePickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_59__.MatMomentDateModule, _standalone_components_resource_card_with_template_resource_card_with_template_component__WEBPACK_IMPORTED_MODULE_23__.ResourceCardWithTemplateComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__.NgbNavOutlet, _standalone_components_tickets_filter_sidebar_tickets_filter_sidebar_component__WEBPACK_IMPORTED_MODULE_32__.TicketsFilterSidebarComponent, src_app_standalone_components_ticket_filter_plus_sidebar_ticket_filter_plus_sidebar_component__WEBPACK_IMPORTED_MODULE_33__.TicketFilterPlusSidebarComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__.NgbNavOutlet, _standalone_components_room_card_room_card_component__WEBPACK_IMPORTED_MODULE_27__.RoomCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_60__.FormsModule, _standalone_components_images_gallery_images_gallery_component__WEBPACK_IMPORTED_MODULE_43__.ImagesGalleryComponent, _standalone_components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_36__.CheckoutComponent, _standalone_components_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_37__.BookingConfirmationComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_56__.NgbPopoverModule, _standalone_components_seats_viewer_seats_viewer_component__WEBPACK_IMPORTED_MODULE_48__.SeatsViewerComponent],
  exports: [_components_activities_activities_component__WEBPACK_IMPORTED_MODULE_4__.ActivitiesComponent],
  providers: [{
    provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_58__.NGX_MAT_DATE_FORMATS,
    useValue: CUSTOM_MOMENT_FORMATS
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_61__.DateAdapter,
    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_59__.MomentDateAdapter,
    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_61__.MAT_DATE_LOCALE]
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_61__.MAT_DATE_FORMATS,
    useValue: MY_FORMATS
  }]
})], DomainListingModule);


/***/ }),

/***/ 13800:
/*!****************************************************************************************!*\
  !*** ./src/app/features/domain-listing/resource-listing/resource-listing.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceListingComponent": () => (/* binding */ ResourceListingComponent),
/* harmony export */   "scrollFactory": () => (/* binding */ scrollFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resource_listing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-listing.component.html?ngResource */ 98814);
/* harmony import */ var _resource_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource-listing.component.scss?ngResource */ 82422);
/* harmony import */ var _resource_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resource_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _components_resource_list_map_resource_list_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_components/resource-list-map/resource-list-map.component */ 20656);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol */ 6788);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom */ 83733);
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/proj */ 63815);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);















function scrollFactory(overlay) {
  return () => overlay.scrollStrategies.block();
}
let ResourceListingComponent = class ResourceListingComponent {
  // private ngUnsubscribe = new Subject<void>();
  constructor(route, router, resourceFilterService, translate, matDialog, overlay) {
    this.route = route;
    this.router = router;
    this.resourceFilterService = resourceFilterService;
    this.translate = translate;
    this.matDialog = matDialog;
    this.overlay = overlay;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.points = [];
    this.coordinatesData = [];
    this.resourceListObs$ = this.resourceFilterService.resourceListObs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: myList => {
        this.points = [];
        this.selectedCity = this.resourceFilterService.getSavedFilters();
        console.log('aciaciaci', this.selectedCity);
        this.coordinatesData = myList?.content;
        console.log('Lista mea din listing', this.coordinatesData);
        if (this.coordinatesData !== undefined) {
          this.coordinatesData.forEach(element => {
            if (element.geographicalCoordinates !== null) {
              const point = new ol__WEBPACK_IMPORTED_MODULE_7__["default"]({
                geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_8__["default"]((0,ol_proj__WEBPACK_IMPORTED_MODULE_4__.fromLonLat)([element.geographicalCoordinates.longitude, element.geographicalCoordinates.latitude])),
                type: 'Point',
                desc: '<div class="resource-card-map d-flex flex-column justify-content-start align-items-start"><a style="text-decoration:none; color:inherit" href="/client/domain/' + element.domain + '/category/' + element.categoryId + '/resource-type/' + element.resourceTypeId + '/view/' + element.id + '"><img width="300px" height="192px" src="' + element?.featuredImage?.filePath + '"/> ' + ' <h3>' + element?.title + ' </h3> <h4>' + element?.resourceCategoryName + ' </h4>  <p> <i class="fas fa-map-marker" style="margin-right:5px"></i>' + element?.address + '</p>  <p>' + (element?.shortDescription !== null ? element?.shortDescription : 'Nu există descriere!') + '</p> </a></div>'
              });
              this.points.push(point);
            }
          });
        }
      }
    });
    //   selectedCity = this.resourceFilterService.getSavedFilters();
    this.domainId = null;
    this.categoryId = null;
    this.resourceTypeId = null;
    this.currentLanguage = null;
    this.resourceTypeData = null;
    this.resourceTemplate = null;
  }
  ngOnInit() {
    this.initResourceFilterService();
    this.checkForLanguage();
    this.checkRouteForResourceId();
  }
  initResourceFilterService() {
    this.resourceFilterService.initServiceStates();
  }
  checkForLanguage() {
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
  }
  checkRouteForResourceId() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(params => {
      if (params.has('domainId')) {
        this.domainId = params.get('domainId');
      }
      if (params.has('categoryId')) {
        this.categoryId = params.get('categoryId');
      }
      if (params.has('resourceTypeId')) {
        this.resourceTypeId = params.get('resourceTypeId');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([this.resourceFilterService.getResourceTypeById(this.resourceTypeId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.take)(1)), this.resourceFilterService.getResourceTemplateByResourceTypeId(this.resourceTypeId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.take)(1))]);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        [this.resourceTypeData, this.resourceTemplate] = res;
      },
      error: () => {
        void this.router.navigate(['/client/domain', this.domainId]);
      }
    });
  }
  scrollResourcesListIntoView() {
    this.resourcesListRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  openMap() {
    this.matDialog.open(_components_resource_list_map_resource_list_map_component__WEBPACK_IMPORTED_MODULE_3__.ResourceListMapComponent, {
      width: "100%",
      height: "90%",
      panelClass: 'map-dialog',
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      data: {
        coordinate: this.points,
        resourceCoordinatesData: this.coordinatesData,
        filterData: this.selectedCity
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__.ResourceFilterService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.Overlay
  }];
  static #_2 = this.propDecorators = {
    resourcesListRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
      args: ['resourcesList']
    }]
  };
};
ResourceListingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-resource-listing',
  template: _resource_listing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_resource_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResourceListingComponent);


/***/ }),

/***/ 37640:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/available-car-rentals-list/available-car-rentals-list.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvailableCarRentalsListComponent": () => (/* binding */ AvailableCarRentalsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _available_car_rentals_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./available-car-rentals-list.component.html?ngResource */ 43902);
/* harmony import */ var _available_car_rentals_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./available-car-rentals-list.component.scss?ngResource */ 93616);
/* harmony import */ var _available_car_rentals_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_available_car_rentals_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AvailableCarRentalsListComponent = class AvailableCarRentalsListComponent {};
AvailableCarRentalsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-available-car-rentals-list',
  template: _available_car_rentals_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_available_car_rentals_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AvailableCarRentalsListComponent);


/***/ }),

/***/ 30301:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/available-plane-tickets-list/available-plane-tickets-list.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvailablePlaneTicketsListComponent": () => (/* binding */ AvailablePlaneTicketsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _available_plane_tickets_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./available-plane-tickets-list.component.html?ngResource */ 6167);
/* harmony import */ var _available_plane_tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./available-plane-tickets-list.component.scss?ngResource */ 87761);
/* harmony import */ var _available_plane_tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_available_plane_tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_app_shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/tickets.service */ 16591);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);







let AvailablePlaneTicketsListComponent = class AvailablePlaneTicketsListComponent {
  constructor(ticketsService, route) {
    this.ticketsService = ticketsService;
    this.route = route;
    this.ticketList = [];
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    // this.getTicketsList();
    this.route.queryParams.subscribe(params => {
      console.log('params flights', params);
      const lowerCaseFlightObject = {};
      Object.keys(params).forEach(key => {
        lowerCaseFlightObject[key.toLowerCase()] = params[key];
      });
      console.log('lower', lowerCaseFlightObject);
      this.flightReqBody = {
        originLocationCode: lowerCaseFlightObject.originlocationcode.toUpperCase(),
        destinationLocationCode: lowerCaseFlightObject.destinationlocationcode.toUpperCase(),
        departureDate: lowerCaseFlightObject.departuredate,
        returnDate: lowerCaseFlightObject.returndate ? lowerCaseFlightObject.returndate : null,
        adults: +lowerCaseFlightObject.adults,
        children: +lowerCaseFlightObject.children,
        travelClass: lowerCaseFlightObject.travelclass.toUpperCase(),
        maxResultsNumber: lowerCaseFlightObject.maxresultsnumber
      };
      console.log('flightReqBody', this.flightReqBody);
      this.ticketsService.getFlightOffer(this.flightReqBody).subscribe(flights => {
        console.log('flights: ', flights);
        this.flights = flights;
      });
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__.TicketService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }];
};
AvailablePlaneTicketsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-available-plane-tickets-list',
  template: _available_plane_tickets_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_available_plane_tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AvailablePlaneTicketsListComponent);


/***/ }),

/***/ 42573:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/available-train-tickets-list/available-train-tickets-list.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvailableTrainTicketsListComponent": () => (/* binding */ AvailableTrainTicketsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _available_train_tickets_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./available-train-tickets-list.component.html?ngResource */ 83139);
/* harmony import */ var _available_train_tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./available-train-tickets-list.component.scss?ngResource */ 94236);
/* harmony import */ var _available_train_tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_available_train_tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/tickets.service */ 16591);






let AvailableTrainTicketsListComponent = class AvailableTrainTicketsListComponent {
  constructor(ticketsService) {
    this.ticketsService = ticketsService;
    this.ticketList = [];
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.getTicketsList();
    this.getTrainTicketForm();
  }
  getTicketsList() {
    this.ticketsService.getTrainTickets().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.ticketList = res;
        console.log('lista din lista: ', this.ticketList);
      }
    });
  }
  //get form Data
  getTrainTicketForm() {
    //to do:in functie de ce trimitem din formular, trebuie sa cautam ticketele disponibile. 
    this.trainTicketForm = this.ticketsService.getTrainFormValues();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__.TicketService
  }];
};
AvailableTrainTicketsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-available-train-tickets-list',
  template: _available_train_tickets_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_available_train_tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AvailableTrainTicketsListComponent);


/***/ }),

/***/ 65838:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/car-rentals/car-rentals.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRentalsComponent": () => (/* binding */ CarRentalsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _car_rentals_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-rentals.component.html?ngResource */ 74670);
/* harmony import */ var _car_rentals_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-rentals.component.scss?ngResource */ 16115);
/* harmony import */ var _car_rentals_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_car_rentals_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);






let CarRentalsComponent = class CarRentalsComponent {
  constructor(fb, router, route) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.minDate = new Date();
  }
  ngOnInit() {
    this.formInit();
  }
  formInit() {
    this.rentalForm = this.fb.group({
      pickUpLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      dropOffLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      pickUpDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      dropOffDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  checkAvailability() {
    this.rentalForm.markAllAsTouched();
    if (this.rentalForm.valid) {
      console.log('valid');
      this.router.navigate(['../available-car-rentals'], {
        relativeTo: this.route
      });
    } else {
      console.log(this.rentalForm);
      return;
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
CarRentalsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-car-rentals',
  template: _car_rentals_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_car_rentals_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CarRentalsComponent);


/***/ }),

/***/ 74745:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/components/available-ticket-card/available-ticket-card.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvailableTicketCardComponent": () => (/* binding */ AvailableTicketCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _available_ticket_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./available-ticket-card.component.html?ngResource */ 86427);
/* harmony import */ var _available_ticket_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./available-ticket-card.component.scss?ngResource */ 37125);
/* harmony import */ var _available_ticket_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_available_ticket_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/tickets.service */ 16591);








let AvailableTicketCardComponent = class AvailableTicketCardComponent {
  constructor(ticketsService, router, route) {
    this.ticketsService = ticketsService;
    this.router = router;
    this.route = route;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    //plane Tickets
    this.ticketList = [];
    this.isCarList = false;
    this.isTrainList = false;
    this.isPlaneList = false;
  }
  ngOnInit() {
    this.getTickets();
  }
  getTickets() {
    // console.log('ruta mea',this.router.url.includes('train'));
    if (this.router.url.includes('train')) {
      this.getTrainTicketsList();
      this.isTrainList = true;
    } else if (this.router.url.includes('plane')) {
      this.getPlaneTicketsList();
      this.isPlaneList = true;
    } else if (this.router.url.includes('car')) {
      this.isCarList = true;
      this.getCarList();
    }
  }
  getCarList() {
    console.log('cars');
    this.ticketsService.getCars().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        // console.log('lista masini',res);
        this.ticketList = res;
        this.firstTicket = this.ticketList[0];
      }
    });
  }
  getPlaneTicketsList() {
    this.ticketsService.getPlaneTickets().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        // console.log('lista avioane',res);
        this.ticketList = res;
        this.firstTicket = this.ticketList[0];
      }
    });
  }
  getTrainTicketsList() {
    this.ticketsService.getTrainTickets().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        // console.log('lista trenuri',res);
        this.ticketList = res;
        this.firstTicket = this.ticketList[0];
      }
    });
  }
  goToCheckout(transportId) {
    if (this.isCarList) {
      this.router.navigate(['../available-car-rentals/checkout/' + transportId], {
        relativeTo: this.route
      });
    } else if (this.isPlaneList) {
      this.router.navigate(['../available-plane-tickets/checkout/' + transportId], {
        relativeTo: this.route
      });
    } else if (this.isTrainList) {
      this.router.navigate(['../available-train-tickets/checkout/' + transportId], {
        relativeTo: this.route
      });
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__.TicketService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }];
};
AvailableTicketCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-available-ticket-card',
  template: _available_ticket_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_available_ticket_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AvailableTicketCardComponent);


/***/ }),

/***/ 17641:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/components/location-card/location-card.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationCardComponent": () => (/* binding */ LocationCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _location_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-card.component.html?ngResource */ 42511);
/* harmony import */ var _location_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-card.component.scss?ngResource */ 8890);
/* harmony import */ var _location_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_location_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let LocationCardComponent = class LocationCardComponent {};
LocationCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-location-card',
  template: _location_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_location_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LocationCardComponent);


/***/ }),

/***/ 39145:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/plane-tickets/plane-tickets.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaneTicketsComponent": () => (/* binding */ PlaneTicketsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _plane_tickets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plane-tickets.component.html?ngResource */ 42895);
/* harmony import */ var _plane_tickets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plane-tickets.component.scss?ngResource */ 56169);
/* harmony import */ var _plane_tickets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plane_tickets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_app_shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/tickets.service */ 16591);









let PlaneTicketsComponent = class PlaneTicketsComponent {
  constructor(formBuilder, router, ticketService, titleCasePipe, datePipe) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.ticketService = ticketService;
    this.titleCasePipe = titleCasePipe;
    this.datePipe = datePipe;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.roundTrip = false;
    this.minDate = new Date();
    this.adultsNumber = 0;
    this.childrenNumber = 0;
    this.cityToSearch = null;
    this.recommendedDepartureAirport = null;
    this.recommendedArrivalAirport = null;
    // filter names
    this.filterSelection = {
      departure: true,
      return: false
    };
    this.accIsOpen = false;
    this.activeFilter = '';
    //check travelCLass buttons
    this.invalidFields = [];
  }
  ngOnInit() {
    this.initFormGroup();
  }
  initFormGroup() {
    this.airplaneTicketForm = this.formBuilder.group({
      departureAirport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      arrivalAirport: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min]],
      departureDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      returnDate: [null],
      travelClass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      passengersAdults: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)],
      passengersChildren: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]
    });
  }
  //when you change the toggle for round or one way trips
  changeTab(event) {
    if (event) {
      this.adultsNumber = 0;
      this.childrenNumber = 0;
      this.airplaneTicketForm.reset();
      this.airplaneTicketForm.markAsUntouched();
    }
    this.roundTrip = event === 'roundTrips' ? true : false;
    if (this.roundTrip === true) {
      this.airplaneTicketForm.get('returnDate').addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
    } else {
      this.airplaneTicketForm.get('returnDate').clearValidators();
    }
  }
  //set the number of person
  incrementNumberAdults() {
    this.airplaneTicketForm.patchValue({
      passengersAdults: this.airplaneTicketForm.get('passengersAdults').value + 1
    });
  }
  //set the number of person
  decrementNumberAdults() {
    this.airplaneTicketForm.patchValue({
      passengersAdults: this.airplaneTicketForm.get('passengersAdults').value - 1
    });
  }
  //set the number of children
  incrementNumberChildren() {
    this.airplaneTicketForm.patchValue({
      passengersChildren: this.airplaneTicketForm.get('passengersChildren').value + 1
    });
  }
  //set the number of children
  decrementNumberChildren() {
    this.airplaneTicketForm.patchValue({
      passengersChildren: this.airplaneTicketForm.get('passengersChildren').value - 1
    });
  }
  findInvalidControls() {
    this.invalidFields = [];
    const controls = this.airplaneTicketForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        this.invalidFields.push(name);
      }
    }
    this.travelClass = this.invalidFields.includes('travelClass');
    // console.log('INVALIDE', this.invalidFields);
  }

  updateFormValue(formControlName, value) {
    this.initialDeparture = this.airplaneTicketForm.value.departureAirport;
    this.initialArrival = this.airplaneTicketForm.value.arrivalAirport;
    this.airplaneTicketForm.get(formControlName).patchValue(value);
    this.recommendedDepartureAirport = null;
    this.recommendedArrivalAirport = null;
  }
  getCityCodeDeparture() {
    if (!this.airplaneTicketForm.value.departureAirport || this.airplaneTicketForm.value.departureAirport.length < 3) {
      this.recommendedDepartureAirport = null;
      return;
    } else if (this.airplaneTicketForm.value.departureAirport !== this.initialDeparture) {
      this.ticketService.getCityCode(this.airplaneTicketForm.value.departureAirport).subscribe(cityCode => {
        const filteredAirports = cityCode.filter(item => item.type === "AIRPORT");
        this.recommendedDepartureAirport = filteredAirports.map(({
          name,
          cityName,
          countryName,
          iataCode
        }) => ({
          airportName: name,
          cityName,
          countryName,
          airportIataCode: iataCode
        }));
      });
    }
  }
  getCityCodeArrival() {
    if (!this.airplaneTicketForm.value.arrivalAirport || this.airplaneTicketForm.value.arrivalAirport.length < 3) {
      this.recommendedArrivalAirport = null;
      return;
    } else if (this.airplaneTicketForm.value.arrivalAirport !== this.initialArrival) {
      this.ticketService.getCityCode(this.airplaneTicketForm.value.arrivalAirport).subscribe(cityCode => {
        const filteredAirports = cityCode.filter(item => item.type === "AIRPORT");
        this.recommendedArrivalAirport = filteredAirports.map(({
          name,
          cityName,
          countryName,
          iataCode
        }) => ({
          airportName: name,
          cityName,
          countryName,
          airportIataCode: iataCode
        }));
      });
    }
  }
  //submit form
  checkAvilability() {
    // const objToSend=this.airplaneTicketForm.value;
    this.airplaneTicketForm.get('departureAirport').value;
    const objToSend = {
      originLocationCode: this.airplaneTicketForm.get('departureAirport').value,
      destinationLocationCode: this.airplaneTicketForm.get('arrivalAirport').value,
      departureDate: this.datePipe.transform(this.airplaneTicketForm.get('departureDate').value, 'yyyy-MM-dd'),
      returnDate: this.datePipe.transform(this.airplaneTicketForm.get('returnDate').value, 'yyyy-MM-dd'),
      adults: this.airplaneTicketForm.get('passengersAdults').value,
      children: this.airplaneTicketForm.get('passengersChildren').value,
      travelClass: this.airplaneTicketForm.get('travelClass').value,
      maxResultsNumber: 50
    };
    console.log(objToSend);
    this.airplaneTicketForm.markAllAsTouched();
    // this.ticketService.setTrainFormData(this.airplaneTicketForm);
    //is form valid
    if (this.airplaneTicketForm.valid) {
      if (this.airplaneTicketForm.get('passengersChildren').value !== 0 || this.airplaneTicketForm.get('passengersAdults').value !== 0) {
        this.router.navigate([`/client/domain/63bfcca765dc3f3863af755c/category/63dbb1a4df393f7372161842/available-plane-tickets`], {
          queryParams: objToSend
        });
      }
    } else {
      this.findInvalidControls();
      // Mark all inputs as touched
    }
    // console.log("formular trimis");
    // console.log(objToSend);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: src_app_shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__.TicketService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe
  }];
  static #_2 = this.propDecorators = {
    accordionRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['acc']
    }]
  };
};
PlaneTicketsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-plane-tickets',
  template: _plane_tickets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: [(_plane_tickets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PlaneTicketsComponent);


/***/ }),

/***/ 29198:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/train-tickets/train-tickets.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainTicketsComponent": () => (/* binding */ TrainTicketsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _train_tickets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./train-tickets.component.html?ngResource */ 19950);
/* harmony import */ var _train_tickets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./train-tickets.component.scss?ngResource */ 40932);
/* harmony import */ var _train_tickets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_train_tickets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/tickets.service */ 16591);







let TrainTicketsComponent = class TrainTicketsComponent {
  constructor(formBuilder, router, ticketService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.ticketService = ticketService;
    this.oneWay = true;
    this.adultsNumber = 0;
    this.childrenNumber = 0;
    this.minDate = new Date();
    //check travelCLass buttons
    this.invalidFields = [];
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.trainTicketForm = this.formBuilder.group({
      departureTrainStation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      arrivalTrainStation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      departureDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min]],
      returnDate: [''],
      travelClass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      passengersAdults: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)],
      passengersChildren: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]
    });
  }
  //when you change the toggle for round or one way trips
  changeTab(event) {
    if (event) {
      // this.trainTicketForm.reset();
      this.adultsNumber = 0;
      this.childrenNumber = 0;
      this.trainTicketForm.reset();
      this.trainTicketForm.markAsUntouched();
    }
    this.oneWay = event === 'oneWay' ? true : false;
    if (this.oneWay === false) {
      this.trainTicketForm.get('returnDate').addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
    } else {
      this.trainTicketForm.get('returnDate').clearValidators();
    }
  }
  //set the number of person
  incrementNumberAdults() {
    this.trainTicketForm.patchValue({
      passengersAdults: this.trainTicketForm.get('passengersAdults').value + 1
    });
  }
  //set the number of person
  decrementNumberAdults() {
    this.trainTicketForm.patchValue({
      passengersAdults: this.trainTicketForm.get('passengersAdults').value - 1
    });
  }
  //set the number of children
  incrementNumberChildren() {
    this.trainTicketForm.patchValue({
      passengersChildren: this.trainTicketForm.get('passengersChildren').value + 1
    });
  }
  //set the number of children
  decrementNumberChildren() {
    this.trainTicketForm.patchValue({
      passengersChildren: this.trainTicketForm.get('passengersChildren').value - 1
    });
  }
  findInvalidControls() {
    this.invalidFields = [];
    const controls = this.trainTicketForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        this.invalidFields.push(name);
      }
    }
    this.travelClass = this.invalidFields.includes('travelClass');
    // console.log('INVALIDE', this.invalidFields);
  }
  //submit form
  checkAvilability() {
    const objToSend = this.trainTicketForm.value;
    this.trainTicketForm.markAllAsTouched();
    //set train ticket info and send it to list
    this.ticketService.setTrainFormData(this.trainTicketForm);
    //is form valid
    if (this.trainTicketForm.valid) {
      if (this.trainTicketForm.get('passengersChildren').value !== 0 || this.trainTicketForm.get('passengersAdults').value !== 0) {
        //check type of ticket: Round Trips/ One way
        if (this.oneWay) {
          this.trainTicketForm.patchValue(objToSend);
        } else if (!this.oneWay) {
          this.trainTicketForm.patchValue(objToSend);
        }
        //go to avilability tickets
        this.router.navigate([`/client/domain/63bfcca765dc3f3863af755c/category/63dbb1a4df393f7372161842/available-train-tickets`]);
        // console.log(objToSend);
      }
    } else {
      console.log('formular invalid');
      this.findInvalidControls();
      // Mark all inputs as touched
    }
    // console.log("formular trimis");
    // console.log(objToSend);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: src_app_shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__.TicketService
  }];
};
TrainTicketsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-train-tickets',
  template: _train_tickets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_train_tickets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TrainTicketsComponent);


/***/ }),

/***/ 32553:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/booking-type-items.service.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingTypeItemsService": () => (/* binding */ BookingTypeItemsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 19337);




let BookingTypeItemsService = class BookingTypeItemsService {
  constructor(http) {
    this.http = http;
    this.formValuesState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.formValuesObs$ = this.formValuesState.asObservable();
    this.resourceId = null;
    this.bookingTimePickerId = null;
    this.culturalBookingId = null;
    // START: ROOMS
    this.roomState = new Map();
    // END: ROOMS
    // START: TICKETS
    this.ticketState = new Map();
    // END: TICKETS
    // START: CULTURAL ROOM
    this.selectedSeats = [];
    this.selectedCulturalRoom = null;
    // END: CULTURAL ROOM
    // START: TIME SLOTS
    this.timeSlotState = new Map();
    // END: TIME SLOTS
    // START: PICKER ITEMS
    this.guestsState = null;
    this.guestsPrice = 0;
    // END: PICKER ITEMS
    // START: PRODUCTS
    this.productState = new Map();
  }
  updateFormValues(formValues) {
    this.formValuesState.next(formValues);
  }
  getFormValues() {
    return this.formValuesObs$;
  }
  setResourceId(resourceId) {
    this.resourceId = resourceId;
  }
  setBookingTimePickerId(bookingTimePickerId) {
    this.bookingTimePickerId = bookingTimePickerId;
  }
  resetRoomState() {
    this.roomState.clear();
  }
  setRoomQuantity(room, quantity) {
    this.roomState.set(room, quantity);
  }
  increaseRoomQuantity(room) {
    if (!this.roomState.has(room)) {
      this.roomState.set(room, 1);
      return;
    }
    this.roomState.set(room, this.roomState.get(room) + 1);
  }
  decreaseRoomQuantity(room) {
    if (this.roomState.get(room) === 1) {
      this.roomState.delete(room);
      return;
    }
    this.roomState.set(room, this.roomState.get(room) - 1);
  }
  getRoomState() {
    return this.roomState;
  }
  getOurRecommendationRooms(reqBody) {
    this.resetRoomState();
    return this.http.post('/bestinform/getOurRecommendationRooms?resourceId=' + this.resourceId, reqBody);
  }
  getAvailableRooms(startTime, endTime) {
    this.resetRoomState();
    return this.http.post('/bestinform/getAvailableRooms?resourceId=' + this.resourceId + '&startTime=' + startTime + '&endTime=' + endTime, {});
  }
  getRoomListByResourceId() {
    this.resetRoomState();
    return this.http.get('/bestinform/getRoomListByResourceId?resourceId=' + this.resourceId);
  }
  createReservationRentalBooking(rentalBooking) {
    return this.http.post('/bestinform/createReservationRentalBooking?resourceId=' + this.resourceId, rentalBooking);
  }
  resetTicketState() {
    this.ticketState.clear();
  }
  increaseTicketQuantity(ticket) {
    if (!this.ticketState.has(ticket)) {
      this.ticketState.set(ticket, 1);
      return;
    }
    this.ticketState.set(ticket, this.ticketState.get(ticket) + 1);
  }
  decreaseTicketQuantity(ticket) {
    if (this.ticketState.get(ticket) === 1) {
      this.ticketState.delete(ticket);
      return;
    }
    this.ticketState.set(ticket, this.ticketState.get(ticket) - 1);
  }
  getTicketState() {
    return this.ticketState;
  }
  getTicketListByResourceId() {
    this.resetTicketState();
    return this.http.get('/bestinform/getTicketListByResourceId?resourceId=' + this.resourceId);
  }
  getAvailableResourceTickets(date) {
    this.resetTicketState();
    return this.http.post('/bestinform/getAvailableResourceTickets?resourceId=' + this.resourceId + '&date=' + date, {});
  }
  createReservationTicketBooking(ticketBooking) {
    return this.http.post('/bestinform/createReservationTicketBooking?resourceId=' + this.resourceId, ticketBooking);
  }
  getSelectedCulturalRoom() {
    return {
      ...this.selectedCulturalRoom
    };
  }
  setSelectedCulturalRoom(newCulturalRoom) {
    this.selectedCulturalRoom = newCulturalRoom;
  }
  getSelectedSeats() {
    return this.selectedSeats.slice();
  }
  setSelectedSeats(newSelectedSeats) {
    this.selectedSeats = [...newSelectedSeats];
  }
  resetCulturalRoomState() {
    this.selectedSeats = [];
    this.selectedCulturalRoom = null;
  }
  setCulturalBookingId(newId) {
    this.culturalBookingId = newId;
  }
  getResourceCulturalRooms() {
    this.resetCulturalRoomState();
    return this.http.get('/bestinform/getResourceCulturalRooms?resourceId=' + this.resourceId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(culturalRooms => this.setSelectedCulturalRoom(culturalRooms[0])));
  }
  getCulturalRoomById() {
    this.resetCulturalRoomState();
    return this.http.get('/bestinform/getCulturalRoomById?culturalRoomId=' + this.culturalBookingId);
  }
  createReservationCulturalBooking(culturalBooking) {
    return this.http.post('/bestinform/createReservationCulturalBooking?culturalRoomId=' + this.culturalBookingId, culturalBooking);
  }
  setTimeSlotState(timeSlot, availableTimeSlot) {
    this.timeSlotState.set(timeSlot, availableTimeSlot);
  }
  resetTimeSlotState() {
    this.timeSlotState.clear();
  }
  getTimeSlotState() {
    return this.timeSlotState;
  }
  getBookingTimeSlotListByResourceId() {
    this.resetTimeSlotState();
    return this.http.get('/bestinform/getBookingTimeSlotListByResourceId?resourceId=' + this.resourceId);
  }
  getAvailableSlotsByDate(timeSlotId, date) {
    return this.http.get('/bestinform/getAvailableSlotsByDate?bookingTimeSlotId=' + timeSlotId + '&date=' + date);
  }
  createReservationTimeSlot(timeSlotBooking) {
    return this.http.post('/bestinform/createReservationTimeSlot', timeSlotBooking);
  }
  setGuestsState(guestsState) {
    this.guestsState = {
      ...guestsState
    };
  }
  getGuestsState() {
    return {
      ...this.guestsState
    };
  }
  resetGuestsState() {
    this.guestsState = null;
  }
  setGuestsPrice(price) {
    this.guestsPrice = price;
  }
  getGuestsPrice() {
    return this.guestsPrice;
  }
  resetGuestsPrice() {
    this.guestsPrice = 0;
  }
  getTimepickerByResourceId() {
    return this.http.get('/bestinform/getBookingTimePickerByResourceId?resourceId=' + this.resourceId);
  }
  getAvailablePickerItems(date, hour) {
    this.resetGuestsState();
    return this.http.get('/bestinform/getAvailablePickerItems?bookingTimePickerId=' + this.bookingTimePickerId + '&date=' + date + '&hour=' + hour);
  }
  createReservationTimePicker(timePickerReservation) {
    return this.http.post('/bestinform/createReservationTimePicker?resourceId=' + this.resourceId, timePickerReservation);
  }
  setProductState(product) {
    this.productState.set(product, 1);
  }
  getProductState() {
    return this.productState;
  }
  resetProductState() {
    this.productState.clear();
  }
  getProductListByResourceId() {
    this.resetProductState();
    return this.http.get('/bestinform/getProductListByResourceId?resourceId=' + this.resourceId);
  }
  createReservationProduct(productBooking) {
    return this.http.post('/bestinform/createReservationProduct?resourceId=' + this.resourceId, productBooking);
  }
  // END: PRODUCTS
  //START: MENU
  getResourceMenu() {
    return this.http.get('/bestinform/getResourceMenu?resourceId=' + this.resourceId);
  }
  //END: MENU
  //STRIPE
  executeStripeOneTimePayment(reservationId) {
    return this.http.post('/bestinform/executeOneTimePaymentReservation?reservationId=' + reservationId, {});
  }
  executeOneTimePaymentTripReservation(reservationId) {
    return this.http.post('/bestinform/executeOneTimePaymentTripReservation?tripReservationId=' + reservationId, {});
  }
  executeOneTimePaymentItinerary(itineraryId) {
    return this.http.post('/bestinform/executeOneTimePaymentItinerary?itineraryId=' + itineraryId, {});
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};
BookingTypeItemsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], BookingTypeItemsService);


/***/ }),

/***/ 50237:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/menu/menu.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.html?ngResource */ 67696);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss?ngResource */ 88323);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_features_resources_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/resources/_services/resources.service */ 39266);
/* harmony import */ var _booking_type_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../booking-type-items.service */ 32553);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var _client_trips_itineraries_services_itineraries_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../client-trips-itineraries/_services/itineraries.store */ 18645);










let MenuComponent = class MenuComponent {
  constructor(activeRoute, resourceFilterService, itinerariesStore, resourcesService, bookingTypeItemsService) {
    this.activeRoute = activeRoute;
    this.resourceFilterService = resourceFilterService;
    this.itinerariesStore = itinerariesStore;
    this.resourcesService = resourcesService;
    this.bookingTypeItemsService = bookingTypeItemsService;
    this.menuItems = [];
    this.categoryItems = [];
    this.menuSingle = [];
    this.isItineraryModal = false;
    this.resourceFromItinerary = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.checkIfItineraryModal();
    this.setResourceId();
  }
  checkIfItineraryModal() {
    this.isItineraryModal = this.resourceFilterService.checkIfItineraryModal();
    if (this.isItineraryModal) {
      this.resourceFromItinerary = this.resourceFilterService.getResourceFromItinerary();
    }
  }
  getResourceById(id) {
    this.resourcesService.getResourceById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      console.log('RESURSA MEA', res);
      this.resource = res;
      this.currency = this.resource.currency === null ? 'EUR' : this.resource.currency;
    });
  }
  //get id from path than set it for _services
  setResourceId() {
    this.activeRoute.params.subscribe(params => {
      this.resourceId = this.isItineraryModal ? this.resourceFromItinerary.id : params['resourceId'];
      this.bookingTypeItemsService.setResourceId(this.resourceId);
      //get the menu
      if (this.resourceId) {
        //get resource for id
        this.getResourceById(this.resourceId);
        this.getMenuByResourceId();
      }
    });
  }
  getMenuByResourceId() {
    this.bookingTypeItemsService.getResourceMenu().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      console.log('res', res);
      if (!res) return;
      console.log('menu', res);
      this.menu = res;
      this.menuItems = this.menu.items;
      this.menuItems.forEach(category => {
        console.log('categ', category);
        this.categoryItems.push(category.subCategories);
      });
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_4__.ResourceFilterService
  }, {
    type: _client_trips_itineraries_services_itineraries_store__WEBPACK_IMPORTED_MODULE_5__.ItinerariesStore
  }, {
    type: src_app_features_resources_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }, {
    type: _booking_type_items_service__WEBPACK_IMPORTED_MODULE_3__.BookingTypeItemsService
  }];
};
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-menu',
  template: _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MenuComponent);


/***/ }),

/***/ 85691:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/picker-items/picker-items.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickerItemsComponent": () => (/* binding */ PickerItemsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _picker_items_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker-items.component.html?ngResource */ 85090);
/* harmony import */ var _picker_items_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picker-items.component.scss?ngResource */ 83243);
/* harmony import */ var _picker_items_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_picker_items_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _booking_type_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-type-items.service */ 32553);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var _client_trips_itineraries_services_itineraries_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../client-trips-itineraries/_services/itineraries.store */ 18645);














let PickerItemsComponent = class PickerItemsComponent {
  constructor(bookingItemsService, resourceFilterService, itinerariesStore, router, route, datePipe, toastService, translate, fb) {
    this.bookingItemsService = bookingItemsService;
    this.resourceFilterService = resourceFilterService;
    this.itinerariesStore = itinerariesStore;
    this.router = router;
    this.route = route;
    this.datePipe = datePipe;
    this.toastService = toastService;
    this.translate = translate;
    this.fb = fb;
    this.availablePickerItems = null;
    this.ignoreAvailability = false;
    this.formValues = null;
    this.guestsForm = this.fb.group({
      adultsNumber: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)],
      childrenNumber: [0]
    });
    this.isItineraryModal = false;
    /*eatAndDrinkData: EatAndDrinkResourceRecommended = null;
    resourceFromItinerary: Resource = null;*/
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.optionsTodayPayment = 0;
  }
  ngOnInit() {
    this.checkIfItineraryModal();
    this.listenToFormValues();
  }
  checkIfItineraryModal() {
    this.isItineraryModal = this.resourceFilterService.checkIfItineraryModal();
    /*if (this.isItineraryModal) {
        firstValueFrom(this.itinerariesStore.destinationIndex$).then(index => {
            this.eatAndDrinkData = this.itinerariesStore.getTemporaryData().resources[index]?.eatAndDrinkResourcesRecommended;
            this.resourceFromItinerary = this.resourceFilterService.getResourceFromItinerary();
        });
    }*/
  }

  listenToFormValues() {
    this.bookingItemsService.getFormValues().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) {
          return;
        }
        this.formValues = res;
        this.guestsForm.patchValue(this.formValues);
        this.optionsTodayPayment = 0;
        this.getAvailablePickerItems();
      }
    });
  }
  getAvailablePickerItems() {
    this.bookingItemsService.getAvailablePickerItems(this.datePipe.transform(this.formValues.dateAsHour.toDate(), 'yyyy-MM-dd'), this.datePipe.transform(this.formValues.dateAsHour.toDate(), 'HH:mm')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (res.success) {
          this.bookingPolicies = res.bookingPolicies;
          if (this.bookingPolicies) {
            if (this.bookingPolicies?.depositRequiredAmount !== 0) {
              this.optionsTodayPayment = this.bookingPolicies?.depositRequiredAmount;
            }
          }
          this.bookingItemsService.getTimepickerByResourceId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
            next: timepicker => {
              if (timepicker?.ignoreAvailability) {
                // punem o limita foarte mare de invitati
                this.availablePickerItems = 100000;
                this.ignoreAvailability = true;
              } else {
                this.availablePickerItems = +res.reason;
                this.ignoreAvailability = false;
              }
            }
          });
        } else {
          this.availablePickerItems = 0;
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_ENOUGH"), 'error');
        }
      },
      error: () => {
        this.availablePickerItems = 0;
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_ENOUGH"), 'error');
      }
    });
  }
  decreaseNrGuests(formControlName) {
    let currentValue = this.guestsForm.get(formControlName).value;
    if (currentValue === 0) {
      return;
    }
    this.guestsForm.get(formControlName).patchValue(--currentValue);
    /*if (this.bookingPolicies) {
        if (this.bookingPolicies?.depositRequiredAmount !== 0) {
            const price = (this.bookingPolicies?.depositRequiredAmount);
            this.optionsTodayPayment = this.optionsTodayPayment - price;
        }
    }*/
  }

  increaseNrGuests(formControlName) {
    let currentValue = this.guestsForm.get(formControlName).value;
    if (this.maxNrOfGuestsReached()) return;
    this.guestsForm.get(formControlName).patchValue(++currentValue);
    /*if (this.bookingPolicies) {
        if (this.bookingPolicies?.depositRequiredAmount !== 0) {
            const price = (this.bookingPolicies?.depositRequiredAmount);
            this.optionsTodayPayment = this.optionsTodayPayment + price;
        }
    }*/
  }

  maxNrOfGuestsReached() {
    const adultsNumber = this.guestsForm.get('adultsNumber').value;
    const childrenNumber = this.guestsForm.get('childrenNumber').value;
    return adultsNumber + childrenNumber === this.availablePickerItems;
  }
  confirmSelection() {
    if (!this.guestsForm.valid) {
      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Select at least one adult", "error");
      return;
    }
    this.bookingItemsService.setGuestsState(this.guestsForm.value);
    this.bookingItemsService.setGuestsPrice(this.optionsTodayPayment);
    void this.router.navigate(['checkout'], {
      relativeTo: this.route
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _booking_type_items_service__WEBPACK_IMPORTED_MODULE_2__.BookingTypeItemsService
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_4__.ResourceFilterService
  }, {
    type: _client_trips_itineraries_services_itineraries_store__WEBPACK_IMPORTED_MODULE_5__.ItinerariesStore
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }];
};
PickerItemsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-picker-items',
  template: _picker_items_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [(_picker_items_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PickerItemsComponent);


/***/ }),

/***/ 99160:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/products-list/products-list.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListComponent": () => (/* binding */ ProductsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _products_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-list.component.html?ngResource */ 74459);
/* harmony import */ var _products_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-list.component.scss?ngResource */ 90617);
/* harmony import */ var _products_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_products_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _booking_type_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-type-items.service */ 32553);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);








let ProductsListComponent = class ProductsListComponent {
  constructor(bookingItemsService, router, route) {
    this.bookingItemsService = bookingItemsService;
    this.router = router;
    this.route = route;
    this.products = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.getProductList();
  }
  getProductList() {
    this.bookingItemsService.getProductListByResourceId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.products = [...res];
      }
    });
  }
  selectProduct(product) {
    this.bookingItemsService.setProductState(product);
    void this.router.navigate(['checkout'], {
      relativeTo: this.route
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _booking_type_items_service__WEBPACK_IMPORTED_MODULE_2__.BookingTypeItemsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }];
};
ProductsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-products-list',
  template: _products_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_products_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProductsListComponent);


/***/ }),

/***/ 38229:
/*!************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/rooms-list/rooms-list.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsListComponent": () => (/* binding */ RoomsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rooms_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rooms-list.component.html?ngResource */ 91427);
/* harmony import */ var _rooms_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms-list.component.scss?ngResource */ 98128);
/* harmony import */ var _rooms_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rooms_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _booking_type_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-type-items.service */ 32553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var _client_trips_itineraries_services_itineraries_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../client-trips-itineraries/_services/itineraries.store */ 18645);











let RoomsListComponent = class RoomsListComponent {
  constructor(bookingItemsService, resourceFilterService, datePipe, router, route, itinerariesStore) {
    this.bookingItemsService = bookingItemsService;
    this.resourceFilterService = resourceFilterService;
    this.datePipe = datePipe;
    this.router = router;
    this.route = route;
    this.itinerariesStore = itinerariesStore;
    this.formValues = null;
    this.recommendedRooms = null;
    this.recommendedRoomsPrice = 0;
    this.availableRooms = null;
    this.availableRoomsTotalPrice = 0;
    this.totalNights = null;
    this.recommendedRoomsNr = 0;
    this.nrOfPeopleForRecommendedRooms = 0;
    this.selectedRoomsNr = 0;
    this.nrOfPeopleForSelectedRooms = 0;
    this.isItineraryModal = false;
    this.accommodationData = null;
    this.roomSelection = [];
    this.resourceFromItinerary = null;
    this.roomDictionary = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.recTodayPayment = 0;
    this.optionsTodayPayment = 0;
  }
  ngOnInit() {
    this.checkIfItineraryModal();
    this.listenToFormValues();
  }
  checkIfItineraryModal() {
    this.isItineraryModal = this.resourceFilterService.checkIfItineraryModal();
    if (this.isItineraryModal) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.itinerariesStore.destinationIndex$).then(index => {
        this.accommodationData = this.itinerariesStore.getTemporaryData().resources[index]?.accommodationResourceRecommended;
        this.resourceFromItinerary = this.resourceFilterService.getResourceFromItinerary();
      });
    }
  }
  checkIfRoomsSelected() {
    if (this.accommodationData && this.resourceFromItinerary) {
      if (this.accommodationData.resourceId !== this.resourceFromItinerary.id) {
        return;
      } else {
        this.accommodationData.items.forEach(room => {
          /*this.availableRoomsTotalPrice += room.pricePerItem * room.quantity;
          this.selectedRoomsNr += room.quantity;*/
          this.availableRooms.forEach(availableRoom => {
            if (availableRoom.id === room.itemId) {
              // this.nrOfPeopleForSelectedRooms += availableRoom.maximumAdultPeople;
              this.handleNewRoomNr({
                room: availableRoom,
                number: availableRoom.totalPrice
              });
            }
          });
          this.roomDictionary = {
            ...this.roomDictionary,
            [room.itemId]: room.quantity
          };
        });
        this.roomSelection = [];
        if (this.availableRooms?.length > 0 && this.roomDictionary) {
          this.availableRooms.forEach(room => {
            if (this.roomDictionary?.[room.id]) {
              this.roomSelection.push({
                bedType: room.bedType,
                changePolicies: room.changePolicies,
                bookingPolicies: room.bookingPolicies,
                itemId: room.id,
                itemName: room.name,
                pricePerItem: room.totalPrice,
                quantity: this.roomDictionary[room.id]
              });
            }
          });
        }
        console.log(this.roomDictionary);
      }
    }
  }
  listenToFormValues() {
    this.bookingItemsService.getFormValues().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) {
          return;
        }
        this.formValues = res;
        console.log('test form');
        console.log(res);
        this.optionsTodayPayment = 0;
        this.recTodayPayment = 0;
        if (this.formValues?.startDate && this.formValues?.endDate) {
          if (this.formValues?.adultsNumber >= 1 && this.formValues?.roomsNumber >= 1 && !this.isItineraryModal) {
            this.getOurRecommendationRooms();
          }
          this.getAvailableRooms();
          // for recommended rooms
          this.recommendedRoomsPrice = 0;
          this.recommendedRoomsNr = 0;
          this.nrOfPeopleForRecommendedRooms = 0;
          // for all available rooms
          this.availableRoomsTotalPrice = 0;
          this.selectedRoomsNr = 0;
          this.nrOfPeopleForSelectedRooms = 0;
        } else {
          this.getAllRooms();
        }
      }
    });
  }
  getOurRecommendationRooms() {
    this.recTodayPayment = 0;
    if (!this.formValues.startDate || !this.formValues.endDate) {
      return;
    }
    if (this.formValues.adultsNumber === 0 || this.formValues.roomsNumber === 0) {
      return;
    }
    this.bookingItemsService.getOurRecommendationRooms({
      roomNumber: this.formValues.roomsNumber,
      adults: this.formValues.adultsNumber,
      children: this.formValues.childrenNumber,
      startTime: this.datePipe.transform(this.formValues.startDate.toDate(), 'YYYY-MM-dd'),
      endTime: this.datePipe.transform(this.formValues.endDate.toDate(), 'YYYY-MM-dd')
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      this.recommendedRooms = res?.items.slice();
      console.log('REC ROOMS', this.recommendedRooms);
      this.recommendedRoomsPrice = res?.totalPrice;
      if (this.recommendedRooms?.length > 0) {
        this.recommendedRooms.forEach(room => {
          this.recommendedRoomsNr += room?.itemsForBooking?.length;
          this.nrOfPeopleForRecommendedRooms += room?.maximumAdultPeople * room?.itemsForBooking?.length;
          if (room.bookingPolicies) {
            if (room.bookingPolicies?.advanceFullPayment) {
              const price = room.itemsForBooking.length * room.totalPrice;
              this.recTodayPayment += this.recTodayPayment + price;
            } else if (room.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
              const price = room.itemsForBooking.length * (room.totalPrice * room.bookingPolicies?.advancePartialPaymentPercentage / 100);
              this.recTodayPayment = this.recTodayPayment + price;
            } else if (room.bookingPolicies?.depositRequiredAmount !== 0) {
              const price = room.itemsForBooking.length * room.bookingPolicies?.depositRequiredAmount;
              this.recTodayPayment = this.recTodayPayment + price;
            } else if (room.bookingPolicies?.depositRequiredPercentage !== 0) {
              const price = room.itemsForBooking.length * (room.totalPrice * room.bookingPolicies?.depositRequiredPercentage / 100);
              this.recTodayPayment = this.recTodayPayment + price;
            }
          }
        });
      }
    });
  }
  getAvailableRooms() {
    if (!this.formValues.startDate || !this.formValues.endDate) {
      return;
    }
    this.bookingItemsService.getAvailableRooms(this.datePipe.transform(this.formValues.startDate.toDate(), 'YYYY-MM-dd'), this.datePipe.transform(this.formValues.endDate.toDate(), 'YYYY-MM-dd')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      this.availableRooms = res?.items.slice();
      this.totalNights = res?.totalNights;
      if (this.availableRooms?.length > 0) {
        this.checkIfRoomsSelected();
      }
    });
  }
  getAllRooms() {
    this.bookingItemsService.getRoomListByResourceId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      this.availableRooms = [...res];
    });
  }
  handleNewRoomNr(event) {
    console.log('new room', event);
    this.availableRoomsTotalPrice += event.number;
    if (event.number > 0) {
      if (event.room.bookingPolicies) {
        if (event.room.bookingPolicies?.advanceFullPayment) {
          const price = event.room.totalPrice;
          this.optionsTodayPayment = this.optionsTodayPayment + price;
        } else if (event.room.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
          const price = event.room.totalPrice * event.room.bookingPolicies?.advancePartialPaymentPercentage / 100;
          this.optionsTodayPayment = this.optionsTodayPayment + price;
        } else if (event.room.bookingPolicies?.depositRequiredAmount !== 0) {
          const price = event.room.bookingPolicies?.depositRequiredAmount;
          this.optionsTodayPayment = this.optionsTodayPayment + price;
          console.log('am intrat la depoz');
        } else if (event.room.bookingPolicies?.depositRequiredPercentage !== 0) {
          const price = event.room.totalPrice * event.room.bookingPolicies?.depositRequiredPercentage / 100;
          this.optionsTodayPayment = this.optionsTodayPayment + price;
        }
      }
      this.selectedRoomsNr++;
      this.nrOfPeopleForSelectedRooms += event.room?.maximumAdultPeople;
      this.bookingItemsService.increaseRoomQuantity(event.room);
      if (this.isItineraryModal) {
        if (this.roomSelection.length === 0) {
          this.roomSelection.push({
            bedType: event.room.bedType,
            changePolicies: event.room.changePolicies,
            bookingPolicies: event.room.bookingPolicies,
            itemId: event.room.id,
            itemName: event.room.name,
            pricePerItem: event.room.totalPrice,
            quantity: 1
          });
        } else {
          for (let i = 0; i < this.roomSelection.length; i++) {
            if (this.roomSelection[i].itemId === event.room.id) {
              this.roomSelection[i] = {
                ...this.roomSelection[i],
                quantity: this.roomSelection[i].quantity + 1
              };
              return;
            }
          }
          this.roomSelection.push({
            bedType: event.room.bedType,
            changePolicies: event.room.changePolicies,
            bookingPolicies: event.room.bookingPolicies,
            itemId: event.room.id,
            itemName: event.room.name,
            pricePerItem: event.room.totalPrice,
            quantity: 1
          });
        }
      }
    }
    if (event.number < 0) {
      this.selectedRoomsNr--;
      this.nrOfPeopleForSelectedRooms -= event.room?.maximumAdultPeople;
      if (event.room.bookingPolicies) {
        if (event.room.bookingPolicies?.advanceFullPayment) {
          const price = event.room.totalPrice;
          this.optionsTodayPayment = this.optionsTodayPayment - price;
        } else if (event.room.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
          const price = event.room.totalPrice * event.room.bookingPolicies?.advancePartialPaymentPercentage / 100;
          this.optionsTodayPayment = this.optionsTodayPayment - price;
        } else if (event.room.bookingPolicies?.depositRequiredAmount !== 0) {
          const price = event.room.bookingPolicies?.depositRequiredAmount;
          this.optionsTodayPayment = this.optionsTodayPayment - price;
        } else if (event.room.bookingPolicies?.depositRequiredPercentage !== 0) {
          const price = event.room.totalPrice * event.room.bookingPolicies?.depositRequiredPercentage / 100;
          this.optionsTodayPayment = this.optionsTodayPayment - price;
        }
      }
      this.bookingItemsService.decreaseRoomQuantity(event.room);
      if (this.isItineraryModal) {
        if (this.roomSelection?.length > 0) {
          for (let i = 0; i < this.roomSelection.length; i++) {
            if (this.roomSelection[i].itemId === event.room.id) {
              if (this.roomSelection[i].quantity === 1) {
                this.roomSelection.splice(i, 1);
              } else {
                this.roomSelection[i] = {
                  ...this.roomSelection[i],
                  quantity: this.roomSelection[i].quantity - 1
                };
              }
            }
          }
        }
      }
    }
  }
  reserveRecommendedRooms() {
    if (this.recommendedRooms) {
      this.bookingItemsService.resetRoomState();
      this.recommendedRooms.forEach(room => {
        const nrOfRooms = room?.itemsForBooking?.length;
        if (nrOfRooms > 0) {
          this.bookingItemsService.setRoomQuantity(room, nrOfRooms);
        }
      });
      void this.router.navigate(['checkout'], {
        relativeTo: this.route
      });
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _booking_type_items_service__WEBPACK_IMPORTED_MODULE_2__.BookingTypeItemsService
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_3__.ResourceFilterService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: _client_trips_itineraries_services_itineraries_store__WEBPACK_IMPORTED_MODULE_4__.ItinerariesStore
  }];
};
RoomsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-rooms-list',
  template: _rooms_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [(_rooms_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoomsListComponent);


/***/ }),

/***/ 41247:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/seat-selection/seat-selection.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeatSelectionComponent": () => (/* binding */ SeatSelectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _seat_selection_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seat-selection.component.html?ngResource */ 4364);
/* harmony import */ var _seat_selection_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seat-selection.component.scss?ngResource */ 36809);
/* harmony import */ var _seat_selection_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_seat_selection_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _booking_type_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-type-items.service */ 32553);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/_services/resource-filter.service */ 41682);










let SeatSelectionComponent = class SeatSelectionComponent {
  constructor(bookingItemsService, toastService, router, route, resourceFilterService) {
    this.bookingItemsService = bookingItemsService;
    this.toastService = toastService;
    this.router = router;
    this.route = route;
    this.resourceFilterService = resourceFilterService;
    this.resourceData = null;
    this.culturalRoom = null;
    this.selectedSeats = [];
    this.totalPrice = 0;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.getCulturalRoomData();
  }
  getCulturalRoomData() {
    this.bookingItemsService.getResourceCulturalRooms().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(culturalRooms => culturalRooms[0]), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.culturalRoom = res;
        this.listenForResource();
      },
      error: () => {
        this.toastService.showToast('error', 'No tickets information was found', 'error');
      }
    });
  }
  listenForResource() {
    this.resourceFilterService.resourceObs$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceData = {
          ...res
        };
      }
    });
  }
  handleSeatSelection(event) {
    this.totalPrice = 0;
    this.selectedSeats = [...event];
    if (this.selectedSeats.length > 0) {
      this.selectedSeats.forEach(seat => {
        this.totalPrice += this.getCulturalRoomSeatPrice(seat);
      });
    }
  }
  getCulturalRoomSeatPrice(seat) {
    if (!this.resourceData.bookingPolicies) return 0;
    if (this.resourceData.bookingPolicies?.advanceFullPayment) {
      return seat.price;
    } else if (this.resourceData?.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
      return seat.price * this.resourceData?.bookingPolicies?.advancePartialPaymentPercentage / 100;
    } else if (this.resourceData?.bookingPolicies?.depositRequiredAmount !== 0) {
      return this.resourceData?.bookingPolicies?.depositRequiredAmount;
    } else if (this.resourceData?.bookingPolicies?.depositRequiredPercentage !== 0) {
      return seat.price * this.resourceData.bookingPolicies?.depositRequiredPercentage / 100;
    } else {
      return 0;
    }
  }
  confirmSeats() {
    this.bookingItemsService.setSelectedSeats(this.selectedSeats);
    void this.router.navigate(['checkout'], {
      relativeTo: this.route
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _booking_type_items_service__WEBPACK_IMPORTED_MODULE_2__.BookingTypeItemsService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_4__.ResourceFilterService
  }];
};
SeatSelectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-seat-selection',
  template: _seat_selection_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_seat_selection_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SeatSelectionComponent);


/***/ }),

/***/ 16160:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/tickets-list/tickets-list.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsListComponent": () => (/* binding */ TicketsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tickets_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets-list.component.html?ngResource */ 33142);
/* harmony import */ var _tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets-list.component.scss?ngResource */ 64266);
/* harmony import */ var _tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _booking_type_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-type-items.service */ 32553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var _client_trips_itineraries_services_itineraries_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../client-trips-itineraries/_services/itineraries.store */ 18645);










let TicketsListComponent = class TicketsListComponent {
  constructor(bookingItemsService, resourceFilterService, itinerariesStore, datePipe) {
    this.bookingItemsService = bookingItemsService;
    this.resourceFilterService = resourceFilterService;
    this.itinerariesStore = itinerariesStore;
    this.datePipe = datePipe;
    this.availableTickets = null;
    this.selectedTickets = new Map();
    this.selectedTicketsPrice = 0;
    this.selectedTicketsLength = 0;
    this.formValues = null;
    this.isItineraryModal = false;
    this.activitiesType = null;
    this.activitiesData = null;
    this.ticketSelection = [];
    this.resourceFromItinerary = null;
    this.ticketDictionary = null;
    this.selectedDay = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.optionsTodayPayment = 0;
  }
  ngOnInit() {
    this.checkIfItineraryModal();
    this.listenToFormValues();
  }
  checkIfItineraryModal() {
    this.isItineraryModal = this.resourceFilterService.checkIfItineraryModal();
    this.activitiesType = this.itinerariesStore.getActivitiesType() === 'day' ? 'dayActivityResourcesRecommended' : 'eveningActivityResourcesRecommended';
    if (this.isItineraryModal) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.itinerariesStore.destinationIndex$).then(index => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.itinerariesStore.dayState$).then(date => {
          this.selectedDay = date;
          this.resourceFromItinerary = this.resourceFilterService.getResourceFromItinerary();
          if (this.itinerariesStore.getTemporaryData().resources[index]?.[this.activitiesType]) {
            this.activitiesData = this.itinerariesStore.getTemporaryData().resources[index]?.[this.activitiesType].find(resource => resource.resourceId === this.resourceFromItinerary.id);
          }
        });
      });
    }
  }
  checkIfTicketsSelected() {
    if (this.activitiesData && this.resourceFromItinerary) {
      if (this.activitiesData?.items?.length > 0) {
        const ticketsForSelectedDay = this.activitiesData.items.find(item => item.date === this.selectedDay);
        if (!ticketsForSelectedDay?.items || ticketsForSelectedDay?.items?.length === 0) return;
        ticketsForSelectedDay.items.forEach(ticket => {
          /*this.selectedTicketsPrice += ticket.price * ticket.quantity;
          this.selectedTicketsLength += ticket.quantity;*/
          this.ticketDictionary = {
            ...this.ticketDictionary,
            [ticket.itemId]: ticket.quantity
          };
        });
        console.log('TICKET DICTIONARY', this.ticketDictionary);
        this.ticketSelection = [];
        if (this.availableTickets?.length > 0 && this.ticketDictionary) {
          this.availableTickets.forEach(ticket => {
            if (this.ticketDictionary?.[ticket.id]) {
              /*this.ticketSelection.push({
                  itemId: ticket.id,
                  itemName: ticket.name,
                  changePolicies: ticket.changePolicies,
                  // TODO: ce trebuie luat din ticket si pus aici?
                  seatNumber: '',
                  price: ticket.price,
                  quantity: this.ticketDictionary[ticket.id]
              });*/
              for (let i = 0; i < this.ticketDictionary[ticket.id]; i++) {
                this.increaseNrTickets(ticket);
              }
            }
          });
        }
      }
    }
  }
  listenToFormValues() {
    this.bookingItemsService.getFormValues().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) {
          return;
        }
        this.formValues = res;
        if (this.formValues?.dateAsDay) {
          this.getAvailableTickets(this.datePipe.transform(this.formValues.dateAsDay.toDate(), 'YYYY-MM-dd'));
        } else {
          this.getAvailableTickets(this.datePipe.transform(new Date(), 'YYYY-MM-dd'));
        }
      }
    });
  }
  getAvailableTickets(date) {
    this.optionsTodayPayment = 0;
    this.selectedTicketsPrice = 0;
    this.bookingItemsService.getAvailableResourceTickets(date).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.availableTickets = [...res];
        if (this.availableTickets?.length > 0) {
          this.availableTickets.forEach(ticket => {
            this.selectedTickets.set(ticket, 0);
          });
          this.checkIfTicketsSelected();
        }
      }
    });
  }
  decreaseNrTickets(ticket) {
    const ticketQuantity = this.selectedTickets.get(ticket);
    if (ticketQuantity === 0) {
      return;
    }
    this.selectedTickets.set(ticket, ticketQuantity - 1);
    this.selectedTicketsLength--;
    this.selectedTicketsPrice -= ticket.price;
    if (ticket.bookingPolicies) {
      if (ticket.bookingPolicies?.advanceFullPayment) {
        const price = ticket.price;
        this.optionsTodayPayment = this.optionsTodayPayment - price;
      } else if (ticket.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
        const price = ticket.price * ticket.bookingPolicies?.advancePartialPaymentPercentage / 100;
        this.optionsTodayPayment = this.optionsTodayPayment - price;
      } else if (ticket.bookingPolicies?.depositRequiredAmount !== 0) {
        const price = ticket.bookingPolicies?.depositRequiredAmount;
        this.optionsTodayPayment = this.optionsTodayPayment - price;
      } else if (ticket.bookingPolicies?.depositRequiredPercentage !== 0) {
        const price = ticket.price * ticket.bookingPolicies?.depositRequiredPercentage / 100;
        this.optionsTodayPayment = this.optionsTodayPayment - price;
      }
    }
    this.bookingItemsService.decreaseTicketQuantity(ticket);
    if (this.isItineraryModal) {
      if (this.ticketSelection?.length > 0) {
        for (let i = 0; i < this.ticketSelection.length; i++) {
          if (this.ticketSelection[i].itemId === ticket.id) {
            if (this.ticketSelection[i].quantity === 1) {
              this.ticketSelection.splice(i, 1);
            } else {
              this.ticketSelection[i] = {
                ...this.ticketSelection[i],
                quantity: this.ticketSelection[i].quantity - 1
              };
            }
          }
        }
      }
    }
    console.log(this.ticketSelection);
  }
  increaseNrTickets(ticket) {
    const ticketQuantity = this.selectedTickets.get(ticket);
    if (ticket.limit && ticketQuantity === ticket.ticketsLimit) {
      return;
    }
    this.selectedTickets.set(ticket, ticketQuantity + 1);
    this.selectedTicketsLength++;
    this.selectedTicketsPrice += ticket.price;
    if (ticket.bookingPolicies) {
      if (ticket.bookingPolicies?.advanceFullPayment) {
        const price = ticket.price;
        this.optionsTodayPayment = this.optionsTodayPayment + price;
      } else if (ticket.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
        const price = ticket.price * ticket.bookingPolicies?.advancePartialPaymentPercentage / 100;
        this.optionsTodayPayment = this.optionsTodayPayment + price;
      } else if (ticket.bookingPolicies?.depositRequiredAmount !== 0) {
        const price = ticket.bookingPolicies?.depositRequiredAmount;
        this.optionsTodayPayment = this.optionsTodayPayment + price;
      } else if (ticket.bookingPolicies?.depositRequiredPercentage !== 0) {
        const price = ticket.price * ticket.bookingPolicies?.depositRequiredPercentage / 100;
        this.optionsTodayPayment = this.optionsTodayPayment + price;
      }
    }
    this.bookingItemsService.increaseTicketQuantity(ticket);
    if (this.isItineraryModal) {
      if (this.ticketSelection.length === 0) {
        this.ticketSelection.push({
          itemId: ticket.id,
          itemName: ticket.name,
          changePolicies: ticket.changePolicies,
          bookingPolicies: ticket.bookingPolicies,
          seatNumber: '',
          price: ticket.price,
          quantity: 1
        });
      } else {
        for (let i = 0; i < this.ticketSelection.length; i++) {
          if (this.ticketSelection[i].itemId === ticket.id) {
            this.ticketSelection[i] = {
              ...this.ticketSelection[i],
              quantity: this.ticketSelection[i].quantity + 1
            };
            console.log(this.ticketSelection);
            return;
          }
        }
        this.ticketSelection.push({
          itemId: ticket.id,
          itemName: ticket.name,
          changePolicies: ticket.changePolicies,
          bookingPolicies: ticket.bookingPolicies,
          seatNumber: '',
          price: ticket.price,
          quantity: 1
        });
      }
    }
    console.log(this.ticketSelection);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _booking_type_items_service__WEBPACK_IMPORTED_MODULE_2__.BookingTypeItemsService
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_3__.ResourceFilterService
  }, {
    type: _client_trips_itineraries_services_itineraries_store__WEBPACK_IMPORTED_MODULE_4__.ItinerariesStore
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
  }];
};
TicketsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-tickets-list',
  template: _tickets_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [(_tickets_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TicketsListComponent);


/***/ }),

/***/ 91053:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/time-slots-list/time-slots-list.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeSlotsListComponent": () => (/* binding */ TimeSlotsListComponent)
/* harmony export */ });
/* harmony import */ var _Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _time_slots_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-slots-list.component.html?ngResource */ 33118);
/* harmony import */ var _time_slots_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-slots-list.component.scss?ngResource */ 64956);
/* harmony import */ var _time_slots_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_time_slots_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _booking_type_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../booking-type-items.service */ 32553);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/_services/toast.service */ 62941);











let TimeSlotsListComponent = class TimeSlotsListComponent {
  constructor(bookingItemsService, router, route, datePipe, toastService) {
    this.bookingItemsService = bookingItemsService;
    this.router = router;
    this.route = route;
    this.datePipe = datePipe;
    this.toastService = toastService;
    this.allTimeSlots = null;
    this.availableTimeSlotsMap = new Map();
    this.selectedTimeSlot = null;
    this.formValues = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.listenToFormValues();
  }
  listenToFormValues() {
    this.bookingItemsService.getFormValues().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)((a, b) => JSON.stringify(a) === JSON.stringify(b)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) {
          return;
        }
        this.formValues = res;
        this.getBookingTimeSlots();
      }
    });
  }
  getBookingTimeSlots() {
    this.bookingItemsService.getBookingTimeSlotListByResourceId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.availableTimeSlotsMap = new Map();
        this.allTimeSlots = [...res];
        this.selectedTimeSlot = [];
        if (this.allTimeSlots) {
          this.allTimeSlots.forEach(timeSlot => {
            this.availableTimeSlotsMap.set(timeSlot, []);
            this.selectedTimeSlot.push(null);
          });
        }
        if (this.formValues?.dateAsDay) {
          this.getAvailableSlotsByDate();
        }
      }
    });
  }
  getAvailableSlotsByDate() {
    var _this = this;
    if (this.allTimeSlots && this.formValues?.dateAsDay) {
      this.allTimeSlots.forEach( /*#__PURE__*/function () {
        var _ref = (0,_Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (timeSlot) {
          const availableTimeSlots = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this.bookingItemsService.getAvailableSlotsByDate(timeSlot.id, _this.datePipe.transform(_this.formValues.dateAsDay.toDate(), 'yyyy-MM-dd'))).catch(() => {
            _this.toastService.showToast('error', `Nu exista ore disponibile pentru ${timeSlot.name}`, 'error');
          });
          if (availableTimeSlots) {
            _this.availableTimeSlotsMap.set(timeSlot, availableTimeSlots);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
  resetOtherRadioGroups(timeSlotIndex) {
    if (!this.selectedTimeSlot) {
      return;
    }
    for (let i = 0; i < this.selectedTimeSlot.length; i++) {
      if (i !== timeSlotIndex) {
        this.selectedTimeSlot[i] = null;
      }
    }
  }
  bookTimeSlot(timeSlot, timeSlotIndex) {
    console.log('time slot trimis', timeSlot);
    this.bookingItemsService.setTimeSlotState(timeSlot, this.selectedTimeSlot[timeSlotIndex]);
    void this.router.navigate(['checkout'], {
      relativeTo: this.route
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _booking_type_items_service__WEBPACK_IMPORTED_MODULE_3__.BookingTypeItemsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }];
};
TimeSlotsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-time-slots-list',
  template: _time_slots_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [(_time_slots_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TimeSlotsListComponent);


/***/ }),

/***/ 40506:
/*!************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/view-simple-resource.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSimpleResourceComponent": () => (/* binding */ ViewSimpleResourceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_simple_resource_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-simple-resource.component.html?ngResource */ 77546);
/* harmony import */ var _view_simple_resource_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-simple-resource.component.scss?ngResource */ 98140);
/* harmony import */ var _view_simple_resource_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_simple_resource_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);











let ViewSimpleResourceComponent = class ViewSimpleResourceComponent {
  constructor(route, resourceFilterService, resourcesService, router, translate, toastService) {
    this.route = route;
    this.resourceFilterService = resourceFilterService;
    this.resourcesService = resourcesService;
    this.router = router;
    this.translate = translate;
    this.toastService = toastService;
    this.allowedToClickBtn = true;
    this.resourceData = null;
    this.activeResourceTabId = 1;
    this.isItineraryModal = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.checkIfItineraryModal();
    this.checkRoute();
  }
  checkIfItineraryModal() {
    this.isItineraryModal = this.resourceFilterService.checkIfItineraryModal();
  }
  checkRoute() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(params => {
      if (params.has('domainId')) {
        this.domainId = params.get('domainId');
      }
      if (params.has('categoryId')) {
        this.categoryId = params.get('categoryId');
      }
      if (params.has('resourceTypeId')) {
        this.resourceTypeId = params.get('resourceTypeId');
      }
      if (params.has('resourceId')) {
        this.resourceId = params.get('resourceId');
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => {
      return this.resourceFilterService.getResourceById(this.resourceId);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceData = {
          ...res
        };
        this.roundedReviewPercentage = Math.ceil(this.resourceData.proReviewsPercentage / 20) * 20;
        // doar pt afisarea numelui tipului de resursa
        this.resourceFilterService.resourceTypeObs$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(resourceType => {
          if (!resourceType) {
            return this.resourcesService.getResourceTypeById(res.resourceTypeId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(resourceType => this.resourceFilterService.setResourceType(resourceType)));
          }
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(resourceType);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(resourceType => {
          console.log('call for resource type');
          this.resourceTypeName = resourceType.nameEn;
          this.route.queryParams.subscribe({
            next: queryParams => {
              console.log('qp', queryParams);
              if (queryParams.book === 'ticket') {
                this.navigateToBookingTypeTab();
              }
            }
          });
        });
      },
      error: () => {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
        void this.router.navigate([`/client/domain/${this.domainId}`]);
      }
    });
  }
  toggleFavorite() {
    if (!this.allowedToClickBtn) return;
    this.allowedToClickBtn = false;
    if (!this.resourceData.favorite) {
      this.resourcesService.addResourceToFavorite(this.resourceData.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: () => {
          this.resourceData.favorite = true;
          this.allowedToClickBtn = true;
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), `Added ${this.resourceData.title} to favorites`, 'success');
        },
        error: () => {
          this.allowedToClickBtn = true;
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant('TOAST.SERVER-ERROR'), 'error');
        }
      });
    } else {
      this.resourcesService.deleteResourceFromFavorite(this.resourceData.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: () => {
          this.resourceData.favorite = false;
          this.allowedToClickBtn = true;
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), `Removed ${this.resourceData.title} from favorites`, 'success');
        },
        error: () => {
          this.allowedToClickBtn = true;
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant('TOAST.SERVER-ERROR'), 'error');
        }
      });
    }
  }
  navigateToBookingTypeTab() {
    this.activeResourceTabId = this.resourceData.bookingType === 'menu' && this.resourceData.bookingTimePickerId ? 4 : 2;
    this.resourceTabs.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__.ResourceFilterService
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_4__.ResourcesService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }];
  static #_2 = this.propDecorators = {
    resourceTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: ['resourceTabs']
    }]
  };
};
ViewSimpleResourceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-view-simple-resource',
  template: _view_simple_resource_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_view_simple_resource_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ViewSimpleResourceComponent);


/***/ }),

/***/ 73798:
/*!**************************************************************!*\
  !*** ./src/app/shared/_pipes/price-booking-policies.pipe.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceBookingPoliciesPipe": () => (/* binding */ PriceBookingPoliciesPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let PriceBookingPoliciesPipe = class PriceBookingPoliciesPipe {
  transform(price, bookingPolicies, quantity) {
    if (!bookingPolicies) return 0;
    if (bookingPolicies?.advanceFullPayment) {
      return price * quantity;
    } else if (bookingPolicies?.advancePartialPaymentPercentage !== 0) {
      return price * quantity * bookingPolicies.advancePartialPaymentPercentage / 100;
    } else if (bookingPolicies?.depositRequiredAmount !== 0) {
      return bookingPolicies.depositRequiredAmount;
    } else if (bookingPolicies?.depositRequiredPercentage !== 0) {
      return price * quantity * bookingPolicies?.depositRequiredPercentage / 100;
    } else {
      return 0;
    }
  }
};
PriceBookingPoliciesPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'priceBookingPolicies',
  standalone: true
})], PriceBookingPoliciesPipe);


/***/ }),

/***/ 1752:
/*!***********************************************************!*\
  !*** ./src/app/shared/_services/category-path.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPathService": () => (/* binding */ CategoryPathService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let CategoryPathService = class CategoryPathService {
  constructor() {
    this.categoriesPath = {
      trips: {
        pageNameRo: 'Călătorii & Itinerarii',
        pageNameEn: 'Trips & Itineraries',
        backendName: 'tripOptions',
        parentImagePath: 'trip',
        children: {
          itineraries: {
            pageNameRo: 'Alegeți tematica itinerariului',
            pageNameEn: 'Select the theme of the itinerary',
            backendName: 'itinerary',
            nextRouteSection: 'itineraries-theme'
          },
          itineraries_configurator: {
            pageNameRo: 'Configurație itinerariu',
            pageNameEn: 'Itinerary configurator',
            backendName: 'configuratorItinerary',
            nextRouteSection: 'itineraries-config'
          },
          holiday_offers: {
            pageNameRo: 'Oferte călătorii',
            pageNameEn: 'Holiday offers',
            backendName: 'holidayOffer',
            nextRouteSection: 'holiday-offers'
          }
        }
      }
    };
  }
  // returnam numele paginii in ro, apoi en si ruta de urmarit pt obiectul din setari
  getInfoFromRoutePath(path, obj = this.categoriesPath, pathToSettings = []) {
    const currentObjKey = path[0];
    let pageNameRo = obj[currentObjKey]?.pageNameRo;
    let pageNameEn = obj[currentObjKey]?.pageNameEn;
    for (const key of Object.keys(obj)) {
      if (key === currentObjKey) {
        pageNameRo = obj[key].pageNameRo;
        pageNameEn = obj[key].pageNameEn;
        pathToSettings.push(obj[key].backendName);
        if (typeof obj[key] === 'object' && obj[key].children && path.length > 1) {
          return this.getInfoFromRoutePath(path.splice(1), obj[key].children, pathToSettings);
        }
      }
    }
    return [pageNameRo, pageNameEn, pathToSettings, obj[currentObjKey].parentImagePath ? [obj[currentObjKey].parentImagePath] : pathToSettings];
  }
  getImageFromSettingsObject(path, settings) {
    const currentPath = path[0];
    let image = null;
    for (const key of Object.keys(settings)) {
      if (key === currentPath) {
        image = settings[key].image;
        if (typeof settings[key] === 'object' && path.length > 1) {
          return this.getImageFromSettingsObject(path.splice(1), settings[key]);
        }
      }
    }
    return image;
  }
  getInfoFromObjectPath(path, obj = this.categoriesPath, pathOfCategories) {
    const currentPath = path[0];
    for (const key of Object.keys(obj)) {
      if (key === currentPath) {
        if (typeof obj[key] === 'object') {
          return this.getInfoFromObjectPath(path.splice(1), obj[key], pathOfCategories);
        }
      }
    }
    let categoryData = {};
    const categoryDictionary = this.getCategoryPathFromSettingsPath(pathOfCategories.slice());
    for (const key of Object.keys(obj)) {
      if (!['image', 'enable', 'nameRo', 'nameEn'].includes(key)) {
        categoryData = {
          ...categoryData,
          [categoryDictionary[key].keyName]: {
            ...obj[key],
            nextRouteSection: categoryDictionary[key].nextRouteSection
          }
        };
      }
    }
    console.log(categoryDictionary);
    console.log(categoryData);
    console.log(pathOfCategories);
    return categoryData;
  }
  getCategoryPathFromSettingsPath(pathOfCategories, obj = this.categoriesPath) {
    let categoryDict = {};
    const currentPath = pathOfCategories[0];
    for (const key of Object.keys(obj)) {
      if (key === currentPath) {
        if (typeof obj[key] === 'object') {
          return this.getCategoryPathFromSettingsPath(pathOfCategories.splice(1), obj[key].children);
        }
      }
    }
    for (const key of Object.keys(obj)) {
      categoryDict = {
        ...categoryDict,
        [obj[key].backendName]: {
          keyName: key,
          nextRouteSection: obj[key].nextRouteSection ? obj[key].nextRouteSection : null
        }
      };
    }
    console.log(categoryDict);
    return categoryDict;
  }
};
CategoryPathService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], CategoryPathService);


/***/ }),

/***/ 18100:
/*!****************************************************!*\
  !*** ./src/app/shared/_services/events.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsService": () => (/* binding */ EventsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let EventsService = class EventsService {
  // private headerOptions = { headers: new HttpHeaders().set('Content-Type', 'multipart/form-data') };
  constructor(http) {
    this.http = http;
  }
  listResourceFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listResourceFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters ? filters : {});
  }
  // addResource(resourceObj) {
  //   return this.http.post('/bestinform/addResource', resourceObj);
  // }
  addResource(data, userId) {
    if (userId) {
      return this.http.post('/bestinform/addResource?userId=' + userId, data);
    } else {
      return this.http.post('/bestinform/addResource', data);
    }
  }
  updateResource(resourceId, resourceObj) {
    return this.http.put('/bestinform/updateResource?resourceId=' + resourceId, resourceObj);
  }
  getResourceById(resourceId) {
    return this.http.get('/bestinform/getResourceById?resourceId=' + resourceId);
  }
  getResourceBySlug(resourceSlug) {
    return this.http.get('/bestinform/getResourceBySlug?slug=' + resourceSlug);
  }
  uploadResourceImage(resourceId, file) {
    return this.http.post('/bestinform/uploadResourceImage?resourceId=' + resourceId, file);
  }
  uploadDocAttachements(resourceId, type, file) {
    return this.http.post('/bestinform/uploadDocAttachments?resourceId=' + resourceId + '&type=' + type, file);
  }
  deleteResource(resourceId) {
    return this.http.delete('/bestinform/deleteResource?resourceId=' + resourceId);
  }
  changeResourceStatus(resourceId, status) {
    return this.http.put('/bestinform/changeResourceStatus?resourceId=' + resourceId + '&status=' + status, {});
  }
  addRelatedresources(targetResourceId, eventId) {
    return this.http.put('/bestinform/addRelatedResource?targetResourceId=' + targetResourceId + '&eventId=' + eventId, {});
  }
  removeRelatedResource(eventId, targetResourceId) {
    return this.http.put('/bestinform/removeRelatedResource?eventId=' + eventId + '&targetResourceId=' + targetResourceId, {});
  }
  deleteResourceFeatureImage(resourceId) {
    return this.http.delete('/bestinform/deleteResourceFeatureImage?resourceId=' + resourceId);
  }
  createResourceNotification(resourceId) {
    return this.http.post('/bestinform/createResourceNotification?resourceId=' + resourceId, {});
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
EventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], EventsService);


/***/ }),

/***/ 16591:
/*!*****************************************************!*\
  !*** ./src/app/shared/_services/tickets.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketService": () => (/* binding */ TicketService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let TicketService = class TicketService {
  constructor(http) {
    this.http = http;
  }
  getPlaneTickets() {
    return this.http.get('/bestinform/getPlaneTickets');
  }
  getTrainTickets() {
    return this.http.get('/bestinform/getTrainTickets');
  }
  getCars() {
    return this.http.get('/bestinform/getCars');
  }
  setTrainFormData(values) {
    this.formValues = {
      ...values
    };
  }
  getTrainFormValues() {
    return this.formValues;
  }
  //filght offer ----amadeus controler
  getFlightOffer(filghtObj) {
    return this.http.post('/bestinform/getFlights', filghtObj);
  }
  // getReservationBySlug
  getCityCode(city) {
    return this.http.get('/bestinform/getCityCode?city=' + city);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
TicketService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], TicketService);


/***/ }),

/***/ 56386:
/*!********************************************************************************!*\
  !*** ./src/app/standalone-components/category-card/category-card.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryCardComponent": () => (/* binding */ CategoryCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-card.component.html?ngResource */ 83454);
/* harmony import */ var _category_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-card.component.scss?ngResource */ 10533);
/* harmony import */ var _category_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_category_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 68951);








let CategoryCardComponent = class CategoryCardComponent {
  constructor(translate) {
    this.translate = translate;
    this.selected = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngOnInit() {
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService
  }];
  static #_2 = this.propDecorators = {
    imgPath: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    nameEn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    nameRo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
CategoryCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-category-card',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
  template: _category_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_category_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CategoryCardComponent);


/***/ }),

/***/ 13311:
/*!**********************************************************************!*\
  !*** ./src/app/standalone-components/checkout/checkout.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _checkout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.component.html?ngResource */ 33662);
/* harmony import */ var _checkout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.component.scss?ngResource */ 16486);
/* harmony import */ var _checkout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_checkout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _features_domain_listing_view_simple_resource_booking_type_tab_items_booking_type_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/domain-listing/view-simple-resource/booking-type-tab-items/booking-type-items.service */ 32553);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _features_client_trips_itineraries_services_trips_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/client-trips-itineraries/_services/trips.store */ 59705);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/_services/system-settings.service */ 42912);
/* harmony import */ var _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/legacy-slide-toggle */ 43921);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _features_client_trips_itineraries_services_itineraries_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../features/client-trips-itineraries/_services/itineraries.store */ 18645);
/* harmony import */ var _shared_pipes_price_booking_policies_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/_pipes/price-booking-policies.pipe */ 73798);
/* harmony import */ var _shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/_services/tickets.service */ 16591);


























let CheckoutComponent = class CheckoutComponent {
  constructor(resourceFilterService, userDataService, fb, router, route, bookingItemsService, toastService, translate, datePipe, tripsStore, systemSettingsService, itinerariesStore, transportService) {
    this.resourceFilterService = resourceFilterService;
    this.userDataService = userDataService;
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.bookingItemsService = bookingItemsService;
    this.toastService = toastService;
    this.translate = translate;
    this.datePipe = datePipe;
    this.tripsStore = tripsStore;
    this.systemSettingsService = systemSettingsService;
    this.itinerariesStore = itinerariesStore;
    this.transportService = transportService;
    this.resourceData = null;
    this.bookingType = null;
    this.currentUserData = null;
    this.systemSettings = null;
    this.userDetailsForm = this.fb.group({
      firstName: [null],
      lastName: [null],
      email: [null],
      telephone: [null],
      country: [null]
    });
    this.specialRequest = null;
    this.filterFormValues = null;
    this.totalPrice = 0;
    this.loyaltyPointsInCurrencySpent = 0;
    this.loyaltyPointsInCurrencyGained = 0;
    this.useLoyaltyPoints = false;
    // checkout items depending on booking type
    this.ticketState = null;
    this.numberOfTickets = 0;
    this.ticketsPrice = 0;
    this.culturalRoomState = null;
    this.selectedSeats = null;
    this.culturalTicketsPrice = 0;
    this.roomState = null;
    this.numberOfRooms = 0;
    this.roomsPrice = 0;
    this.numberOfAdults = 0;
    this.timeSlotState = null;
    this.selectedTimeSlot = null;
    this.selectedAvailableTimeSlot = null;
    this.selectedTimeSlotMinutes = null;
    this.productState = null;
    this.selectedProduct = null;
    this.selectedProductQuantity = null;
    this.guestsState = null;
    // trips state
    this.tripState = null;
    this.tripGuestsState = null;
    this.hotelState = null;
    this.tripRoomsState = null;
    this.tripTotalPrice = 0;
    // itineraries state
    this.itineraryState = null;
    this.itineraryExtraInfo = null;
    this.itineraryTotalPrice = 0;
    this.carState = false;
    this.carTotalPrice = 0;
    this.ticketsState = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
  }
  ngOnInit() {
    this.verifyCheckoutType();
    this.getCurrentUserData();
    this.getSystemSettings();
  }
  verifyCheckoutType() {
    console.log('HERE', this.router.url.includes('itinerary'));
    const currentRoute = this.route.snapshot.paramMap;
    // resursa normala
    if (currentRoute.has('resourceId')) {
      this.checkoutType = 'resource';
      this.listenToFilterFormValues();
      this.listenForResource();
      // trip
    } else if (currentRoute.has('tripId')) {
      this.checkoutType = 'trip';
      this.tripState = this.tripsStore.getTripState();
      this.tripGuestsState = this.tripsStore.getGuestsState();
      this.hotelState = this.tripsStore.getHotelState();
      this.tripRoomsState = this.tripsStore.getRoomsState();
      for (const entry of this.tripRoomsState.entries()) {
        this.tripTotalPrice += entry[0].price * entry[1];
      }
      this.totalPrice = this.tripTotalPrice;
      if (!this.tripState) {
        void this.router.navigate(['../'], {
          relativeTo: this.route
        });
      }
      // itinerariu
    } else if (currentRoute.has('carId')) {
      this.checkoutType = 'transport';
      this.carState = true;
      this.totalPrice = this.carTotalPrice;
      this.getCarData(currentRoute.get('carId'));
    } else if (currentRoute.has('trainId')) {
      this.checkoutType = 'transport';
      this.ticketsState = true;
      this.totalPrice = this.carTotalPrice;
      this.getTrainData(currentRoute.get('trainId'));
    } else if (currentRoute.has('planeId')) {
      this.checkoutType = 'transport';
      this.ticketsState = true;
      this.totalPrice = this.carTotalPrice;
      this.getPlaneData(currentRoute.get('planeId'));
    } else {
      this.checkoutType = 'itinerary';
      this.itineraryState = this.itinerariesStore.getNewItinerary();
      this.itineraryExtraInfo = this.itinerariesStore.getItineraryExtraInfo();
      if (!this.itineraryState) {
        void this.router.navigate(['client', 'domain', this.route.snapshot.paramMap.get('domainId'), 'trips']);
        return;
      }
      this.itineraryTotalPrice += this.itineraryState.transportPrice + this.itineraryState.accommodationPrice + this.itineraryState.eatAndDrinkPrice + this.itineraryState.dayActivityPrice + this.itineraryState.eveningActivityPrice;
      this.totalPrice += this.itineraryState.transportPaidAmount + this.itineraryState.accommodationPaidAmount + this.itineraryState.eatAndDrinkPaidAmount + this.itineraryState.dayActivityPaidAmount + this.itineraryState.eveningActivityPaidAmount;
    }
  }
  getCarData(carId) {
    this.transportService.getCars().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: carList => {
        this.currentCar = carList.find(car => car.id == carId);
        this.totalPrice += this.currentCar?.price;
      }
    });
  }
  getPlaneData(planeId) {
    this.transportService.getPlaneTickets().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: planeList => {
        this.currentTicket = planeList.find(plane => plane.transportNumber == planeId.toUpperCase());
        this.totalPrice += this.currentTicket?.price;
      }
    });
  }
  getTrainData(trainId) {
    this.transportService.getTrainTickets().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: trainList => {
        this.currentTicket = trainList.find(train => train.transportNumber == trainId.toUpperCase());
        this.totalPrice += this.currentTicket?.price;
      }
    });
  }
  listenForResource() {
    this.resourceFilterService.resourceObs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) {
          void this.router.navigate(['../'], {
            relativeTo: this.route
          });
        }
        this.resourceData = {
          ...res
        };
        console.log('RESOURCE DATA: ', this.resourceData);
        this.bookingType = this.resourceData?.bookingType;
        if (this.bookingType === 'ticketBooking') {
          this.ticketState = this.bookingItemsService.getTicketState();
          this.ticketState.forEach((value, key) => {
            console.log('ticket', value, key);
            this.numberOfTickets += value;
            this.ticketsPrice += value * key.price;
            if (key.bookingPolicies) {
              if (key.bookingPolicies?.advanceFullPayment) {
                this.totalPrice += value * key.price;
              } else if (key.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
                this.totalPrice += value * (key.price * key.bookingPolicies?.advancePartialPaymentPercentage / 100);
              } else if (key.bookingPolicies?.depositRequiredAmount !== 0) {
                this.totalPrice += value * key.bookingPolicies?.depositRequiredAmount;
              } else if (key.bookingPolicies?.depositRequiredPercentage !== 0) {
                this.totalPrice += value * (key.price * key.bookingPolicies?.depositRequiredPercentage / 100);
              }
            }
          });
        }
        if (this.bookingType === 'culturalBooking') {
          this.culturalRoomState = this.bookingItemsService.getSelectedCulturalRoom();
          this.selectedSeats = this.bookingItemsService.getSelectedSeats();
          this.culturalTicketsPrice = this.selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
          if (this.resourceData?.bookingPolicies) {
            if (this.resourceData.bookingPolicies?.advanceFullPayment) {
              this.totalPrice = this.culturalTicketsPrice;
            } else if (this.resourceData?.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
              this.totalPrice = this.culturalTicketsPrice * this.resourceData?.bookingPolicies?.advancePartialPaymentPercentage / 100;
            } else if (this.resourceData?.bookingPolicies?.depositRequiredAmount !== 0) {
              this.totalPrice = this.resourceData?.bookingPolicies?.depositRequiredAmount;
            } else if (this.resourceData?.bookingPolicies?.depositRequiredPercentage !== 0) {
              this.totalPrice = this.culturalTicketsPrice * this.resourceData.bookingPolicies?.depositRequiredPercentage / 100;
            }
          }
        }
        if (this.bookingType === 'rentalBooking') {
          this.roomState = this.bookingItemsService.getRoomState();
          console.log('CAMERE PT TOTAL ', this.roomState);
          this.roomState.forEach((value, key) => {
            this.numberOfRooms += value;
            this.roomsPrice += value * key.totalPrice;
            this.numberOfAdults += key.maximumAdultPeople * value;
            if (key.bookingPolicies) {
              if (key.bookingPolicies?.advanceFullPayment) {
                this.totalPrice += value * key.totalPrice;
              } else if (key.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
                this.totalPrice += value * (key.totalPrice * key.bookingPolicies?.advancePartialPaymentPercentage / 100);
              } else if (key.bookingPolicies?.depositRequiredAmount !== 0) {
                this.totalPrice += value * key.bookingPolicies?.depositRequiredAmount;
              } else if (key.bookingPolicies?.depositRequiredPercentage !== 0) {
                this.totalPrice += value * (key.totalPrice * key.bookingPolicies?.depositRequiredPercentage / 100);
              }
            }
          });
        }
        if (this.bookingType === 'serviceBookingTimeSlots') {
          this.timeSlotState = this.bookingItemsService.getTimeSlotState();
          for (const entry of this.timeSlotState.entries()) {
            this.selectedTimeSlot = entry[0];
            this.selectedAvailableTimeSlot = entry[1];
            if (this.selectedTimeSlot.bookingPolicies) {
              if (this.selectedTimeSlot.bookingPolicies?.advanceFullPayment) {
                this.totalPrice += this.selectedTimeSlot.price;
              } else if (this.selectedTimeSlot.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
                this.totalPrice += this.selectedTimeSlot.price * this.selectedTimeSlot.bookingPolicies?.advancePartialPaymentPercentage / 100;
              } else if (this.selectedTimeSlot.bookingPolicies?.depositRequiredAmount !== 0) {
                this.totalPrice += this.selectedTimeSlot.bookingPolicies?.depositRequiredAmount;
              } else if (this.selectedTimeSlot.bookingPolicies?.depositRequiredPercentage !== 0) {
                this.totalPrice += this.selectedTimeSlot.price * this.selectedTimeSlot.bookingPolicies?.depositRequiredPercentage / 100;
              }
            }
          }
          this.calculateLengthOfTimeSlot();
        }
        if (this.bookingType === 'productsList') {
          this.productState = this.bookingItemsService.getProductState();
          for (const entry of this.productState.entries()) {
            this.selectedProduct = entry[0];
            this.selectedProductQuantity = entry[1];
          }
          this.totalPrice = this.selectedProduct.price;
        }
        if (this.bookingType === 'menu') {
          this.guestsState = this.bookingItemsService.getGuestsState();
          this.totalPrice = this.bookingItemsService.getGuestsPrice();
        }
      }
    });
  }
  getCurrentUserData() {
    this.userDataService.getCurrentUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentUserData = {
          ...res
        };
        this.userDetailsForm.patchValue(this.currentUserData);
        this.userDetailsForm.get('country').patchValue(this.currentUserData?.billingAddress?.country);
        if (this.checkoutType === 'itinerary') return;
        this.useLoyaltyPoints = this.currentUserData.loyaltyPoints > 0 && this.totalPrice > 0;
        this.disabledLoyaltyPoints = this.currentUserData.loyaltyPoints === 0 || this.totalPrice === 0;
        if (this.useLoyaltyPoints) {
          this.loyaltyPointsInCurrencySpent = this.currentUserData.loyaltyPoints * this.systemSettings.percentageLoyaltyPointsSpend;
          this.loyaltyPointsInCurrencyGained = this.systemSettings.percentageLoyaltyPointsGain * (this.totalPrice - this.loyaltyPointsInCurrencySpent);
        }
      }
    });
  }
  getSystemSettings() {
    this.systemSettingsService.systemSetting$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(res => {
      if (!res) {
        return this.systemSettingsService.getSystemSetting();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.systemSettings = {
          ...res
        };
        console.log(this.systemSettings);
      }
    });
  }
  listenToFilterFormValues() {
    this.bookingItemsService.getFormValues().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) {
          return;
        }
        this.filterFormValues = {
          ...res
        };
        // here we check for missing default values
        if (!this.filterFormValues.dateAsDay) {
          this.filterFormValues.dateAsDay = moment__WEBPACK_IMPORTED_MODULE_5__();
        }
      }
    });
  }
  calculateLengthOfTimeSlot() {
    const endHour = new Date();
    const startHour = new Date();
    endHour.setHours(+this.selectedAvailableTimeSlot.endHour.split(':')[0]);
    endHour.setMinutes(+this.selectedAvailableTimeSlot.endHour.split(':')[1]);
    startHour.setHours(+this.selectedAvailableTimeSlot.startHour.split(':')[0]);
    startHour.setMinutes(+this.selectedAvailableTimeSlot.startHour.split(':')[1]);
    this.selectedTimeSlotMinutes = (endHour.getTime() - startHour.getTime()) / 60000;
  }
  checkReservationType() {
    if (this.tripState) {
      this.createTripReservation();
    } else if (this.itineraryState) {
      this.createItineraryReservation();
    } else {
      this.createResourceReservation();
    }
  }
  createTripReservation() {
    const tripReservation = {
      adults: this.tripGuestsState.adultsNumber,
      children: this.tripGuestsState.childrenNumber,
      hotelName: this.hotelState,
      loyaltyPoints: this.useLoyaltyPoints,
      items: Array.from(this.tripRoomsState).map(([key, value]) => {
        return {
          name: key.name,
          quantity: value
        };
      })
    };
    this.tripsStore.createTripReservation(tripReservation).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (res.success) {
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.BOOKING.SUCCESS"), "success");
          console.log('TRIP checkout', res);
          // void this.router.navigate(['/client/booking-confirmation'], {relativeTo: this.route});
          this.bookingItemsService.executeOneTimePaymentTripReservation(res.reason).subscribe(resp => {
            const redirectUrl = resp.reason;
            window.location.href = redirectUrl;
          });
        }
      },
      error: err => {
        switch (err.reason) {
          case 'notAvailable':
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_AVAILABLE"), "error");
            break;
          case 'notExists':
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_FOUND"), "error");
            break;
          case 'invalidId':
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.INVALID_ID"), "error");
            break;
          default:
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
        }
      }
    });
  }
  createItineraryReservation() {
    console.log('Itinerary state:', {
      ...this.itineraryState,
      adults: this.itineraryExtraInfo.adultsNumber,
      children: this.itineraryExtraInfo.childrenNumber
    });
    this.itinerariesStore.createItineraryReservation({
      ...this.itineraryState,
      adults: this.itineraryExtraInfo.adultsNumber,
      children: this.itineraryExtraInfo.childrenNumber
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (res.success) {
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.BOOKING.SUCCESS"), "success");
          console.log('ITINERARY checkout', res);
          // void this.router.navigate(['/client/booking-confirmation'], {relativeTo: this.route});
          this.bookingItemsService.executeOneTimePaymentItinerary(this.itineraryState.itineraryId).subscribe(resp => {
            const redirectUrl = resp.reason;
            window.location.href = redirectUrl;
          });
        }
      },
      error: err => {
        switch (err.reason) {
          case 'notAvailable':
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_AVAILABLE"), "error");
            break;
          case 'notExists':
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_FOUND"), "error");
            break;
          case 'invalidId':
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.INVALID_ID"), "error");
            break;
          default:
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
        }
      }
    });
  }
  createResourceReservation() {
    if (this.bookingType === 'ticketBooking') {
      const ticketBooking = {
        tickets: Array.from(this.ticketState).map(([key, value]) => {
          return {
            itemId: key.id,
            quantity: value
          };
        }),
        date: this.datePipe.transform(this.filterFormValues.dateAsDay.toDate(), 'yyyy-MM-dd'),
        loyaltyPoints: this.useLoyaltyPoints,
        specialRequest: this.specialRequest
      };
      this.bookingItemsService.createReservationTicketBooking(ticketBooking).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          if (res.success) {
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.BOOKING.SUCCESS"), "success");
            // void this.router.navigate(['../booking-confirmation'], {relativeTo: this.route});
            this.bookingItemsService.executeStripeOneTimePayment(res.reason).subscribe(resp => {
              if (resp.reason === 'bookingWithoutPayment') {
                void this.router.navigate(['/client/booking-confirmation']);
              } else {
                const redirectUrl = resp.reason;
                window.location.href = redirectUrl;
              }
            });
          }
        },
        error: err => {
          switch (err.error.reason) {
            case 'notEnoughTickets':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.ERROR_NR_TICKETS"), "error");
              break;
            case 'invalidId':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.INVALID_ID"), "error");
              break;
            case 'invalidDateToBookTicket':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.INVALID_DATE"), "error");
              break;
            case 'notAvailable':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_AVAILABLE"), "error");
              break;
            case 'seatNotFound':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_FOUND"), "error");
              break;
            default:
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
          }
        }
      });
    }
    if (this.bookingType === 'culturalBooking') {
      // TODO: ce date punem?
      const culturalBooking = {
        seats: this.selectedSeats,
        date: moment__WEBPACK_IMPORTED_MODULE_5__(this.resourceData?.startDate).format('YYYY-MM-DD'),
        loyaltyPoints: this.useLoyaltyPoints
      };
      this.bookingItemsService.createReservationCulturalBooking(culturalBooking).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          if (res.success) {
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.BOOKING.SUCCESS"), "success");
            // void this.router.navigate(['../booking-confirmation'], {relativeTo: this.route});
            this.bookingItemsService.executeStripeOneTimePayment(res.reason).subscribe(resp => {
              if (resp.reason === 'bookingWithoutPayment') {
                void this.router.navigate(['/client/booking-confirmation']);
              } else {
                const redirectUrl = resp.reason;
                window.location.href = redirectUrl;
              }
            });
          }
        },
        error: err => {
          switch (err.error.reason) {
            case 'notAvailable':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_AVAILABLE"), "error");
              break;
            case 'invalidId':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.INVALID_ID"), "error");
              break;
            case 'seatNotFound':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_FOUND"), "error");
              break;
            default:
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
          }
        }
      });
    }
    if (this.bookingType === 'rentalBooking') {
      const rentalBooking = {
        items: Array.from(this.roomState).map(([key, value]) => {
          return {
            itemId: key.id,
            quantity: value
          };
        }),
        start: this.datePipe.transform(this.filterFormValues.startDate.toDate(), 'yyyy-MM-dd'),
        end: this.datePipe.transform(this.filterFormValues.endDate.toDate(), 'yyyy-MM-dd'),
        adults: this.numberOfAdults,
        children: this.filterFormValues.childrenNumber,
        loyaltyPoints: this.useLoyaltyPoints,
        specialRequest: this.specialRequest
      };
      this.bookingItemsService.createReservationRentalBooking(rentalBooking).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          console.log(res);
          if (res.success) {
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.BOOKING.SUCCESS"), "success");
            // void this.router.navigate(['../booking-confirmation'], {relativeTo: this.route});
            this.bookingItemsService.executeStripeOneTimePayment(res.reason).subscribe(resp => {
              if (resp.reason === 'bookingWithoutPayment') {
                void this.router.navigate(['/client/booking-confirmation']);
              } else {
                const redirectUrl = resp.reason;
                window.location.href = redirectUrl;
              }
            });
          }
        },
        error: err => {
          console.log(err);
          switch (err.error.reason) {
            case 'invalidId':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.INVALID_ID"), "error");
              break;
            case 'notAvailable':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_AVAILABLE"), "error");
              break;
            case 'itemNotFound':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_FOUND"), "error");
              break;
            case 'notEnoughItems':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_ENOUGH"), "error");
              break;
            case 'notEnoughRoomForPeople':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_ENOUGH"), "error");
              break;
            case 'rentForMinimumStayOrMore':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.RENT_MIN_STAY"), "error");
              break;
            case 'unavailableRoom':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_AVAILABLE"), "error");
              break;
            default:
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
          }
        }
      });
    }
    if (this.bookingType === 'serviceBookingTimeSlots') {
      const timeSlotBooking = {
        itemsNumber: 1,
        date: this.datePipe.transform(this.filterFormValues.dateAsDay.toDate(), 'yyyy-MM-dd'),
        hour: this.selectedAvailableTimeSlot.startHour,
        loyaltyPoints: this.useLoyaltyPoints,
        bookingTimeSlotId: this.selectedTimeSlot.id,
        specialRequest: this.specialRequest
      };
      this.bookingItemsService.createReservationTimeSlot(timeSlotBooking).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          console.log(res);
          if (res.success) {
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.BOOKING.SUCCESS"), "success");
            // void this.router.navigate(['../booking-confirmation'], {relativeTo: this.route});
            this.bookingItemsService.executeStripeOneTimePayment(res.reason).subscribe(resp => {
              if (resp.reason === 'bookingWithoutPayment') {
                void this.router.navigate(['/client/booking-confirmation']);
              } else {
                const redirectUrl = resp.reason;
                window.location.href = redirectUrl;
              }
            });
          }
        },
        error: err => {
          switch (err.error.reason) {
            case 'invalidId':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.INVALID_ID"), "error");
              break;
            case 'notAvailable':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_AVAILABLE"), "error");
              break;
            case 'wrongTimeEntered':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.INVALID_DATE"), "error");
              break;
            case 'notAvailableItems':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_AVAILABLE"), "error");
              break;
            case 'timeSlotNotAvailable':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_AVAILABLE"), "error");
              break;
            default:
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
          }
        }
      });
    }
    if (this.bookingType === 'productsList') {
      const productBooking = {
        products: [this.selectedProduct.id],
        loyaltyPoints: this.useLoyaltyPoints,
        specialRequest: this.specialRequest
      };
      this.bookingItemsService.createReservationProduct(productBooking).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          if (res.success) {
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.BOOKING.SUCCESS"), "success");
            // void this.router.navigate(['../booking-confirmation'], {relativeTo: this.route});
            this.bookingItemsService.executeStripeOneTimePayment(res.reason).subscribe(resp => {
              if (resp.reason === 'bookingWithoutPayment') {
                // void this.router.navigate(['/client/booking-confirmation']);
                // temporary fix
                void this.router.navigate(['/client/dashboard/profile'], {
                  queryParams: {
                    tab: 'courses'
                  }
                });
              } else {
                const redirectUrl = resp.reason;
                window.location.href = redirectUrl;
              }
            });
          }
        },
        error: err => {
          switch (err.error.reason) {
            case 'invalidId':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.INVALID_ID"), "error");
              break;
            case 'notAvailable':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_AVAILABLE"), "error");
              break;
            case 'productNotFound':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_FOUND"), "error");
              break;
            default:
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
          }
        }
      });
    }
    if (this.bookingType === 'menu') {
      const timePickerReservation = {
        adults: this.guestsState.adultsNumber,
        children: this.guestsState.childrenNumber,
        loyaltyPoints: this.useLoyaltyPoints,
        specialRequest: this.specialRequest,
        // TODO: FORMATUL ASTA NU REPREZINTA ORA CORECTA
        time: this.datePipe.transform(this.filterFormValues.dateAsHour.toDate(), 'yyyy-MM-dd') + 'T' + this.datePipe.transform(this.filterFormValues.dateAsHour.toDate(), 'HH:mm') + 'Z'
      };
      console.log('time picker res', timePickerReservation);
      this.bookingItemsService.createReservationTimePicker(timePickerReservation).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          console.log('res time picker', res);
          if (res.success) {
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.BOOKING.SUCCESS"), "success");
            // void this.router.navigate(['../booking-confirmation'], {relativeTo: this.route});
            this.bookingItemsService.executeStripeOneTimePayment(res.reason).subscribe(resp => {
              if (resp.reason === 'bookingWithoutPayment') {
                void this.router.navigate(['/client/booking-confirmation']);
              } else {
                const redirectUrl = resp.reason;
                window.location.href = redirectUrl;
              }
            });
          }
        },
        error: err => {
          switch (err.error.reason) {
            case 'invalidId':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.INVALID_ID"), "error");
              break;
            case 'notAvailable':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.NOT_AVAILABLE"), "error");
              break;
            case 'wronglyEnteredNumberOfPeople':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.ERROR_NR_PEOPLE"), "error");
              break;
            case 'wrongTimeEntered':
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.BOOKING.INVALID_DATE"), "error");
              break;
            default:
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
          }
        }
      });
    }
  }
  recalculateTotalPrice() {
    if (this.useLoyaltyPoints) {
      this.loyaltyPointsInCurrencySpent = this.currentUserData.loyaltyPoints * this.systemSettings.percentageLoyaltyPointsSpend;
      this.loyaltyPointsInCurrencyGained = this.systemSettings.percentageLoyaltyPointsGain * (this.totalPrice - this.loyaltyPointsInCurrencySpent);
    } else {
      this.loyaltyPointsInCurrencySpent = 0;
      this.loyaltyPointsInCurrencyGained = 0;
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_2__.ResourceFilterService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute
  }, {
    type: _features_domain_listing_view_simple_resource_booking_type_tab_items_booking_type_items_service__WEBPACK_IMPORTED_MODULE_4__.BookingTypeItemsService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe
  }, {
    type: _features_client_trips_itineraries_services_trips_store__WEBPACK_IMPORTED_MODULE_7__.TripsStore
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_8__.SystemSettingsService
  }, {
    type: _features_client_trips_itineraries_services_itineraries_store__WEBPACK_IMPORTED_MODULE_9__.ItinerariesStore
  }, {
    type: _shared_services_tickets_service__WEBPACK_IMPORTED_MODULE_11__.TicketService
  }];
};
CheckoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
  selector: 'app-checkout',
  standalone: true,
  template: _checkout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.TitleCasePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_24__.MatLegacySelectModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_25__.MatLegacyInputModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatLegacySlideToggleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule, _shared_pipes_price_booking_policies_pipe__WEBPACK_IMPORTED_MODULE_10__.PriceBookingPoliciesPipe],
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe],
  styles: [(_checkout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CheckoutComponent);


/***/ }),

/***/ 5325:
/*!**********************************************************************************!*\
  !*** ./src/app/standalone-components/editorial-card/editorial-card.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorialCardComponent": () => (/* binding */ EditorialCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _editorial_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editorial-card.component.html?ngResource */ 94961);
/* harmony import */ var _editorial_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editorial-card.component.scss?ngResource */ 62612);
/* harmony import */ var _editorial_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editorial_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);






let EditorialCardComponent = class EditorialCardComponent {
  constructor() {
    this.notFoundImg = "https://static.onecms.io/wp-content/uploads/sites/47/2020/12/18/cross-eyed-cat-2000.jpg";
  }
  static #_ = this.propDecorators = {
    editorial: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
EditorialCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-editorial-card',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule],
  template: _editorial_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_editorial_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditorialCardComponent);


/***/ }),

/***/ 99781:
/*!**********************************************************************************!*\
  !*** ./src/app/standalone-components/images-gallery/images-gallery.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesGalleryComponent": () => (/* binding */ ImagesGalleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _images_gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images-gallery.component.html?ngResource */ 35735);
/* harmony import */ var _images_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images-gallery.component.scss?ngResource */ 23560);
/* harmony import */ var _images_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);





let ImagesGalleryComponent = class ImagesGalleryComponent {
  static #_ = this.propDecorators = {
    images: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
ImagesGalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-images-gallery',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
  template: _images_gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_images_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ImagesGalleryComponent);


/***/ }),

/***/ 91887:
/*!****************************************************************************************************!*\
  !*** ./src/app/standalone-components/static-category-listing/static-category-listing.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticCategoryListingComponent": () => (/* binding */ StaticCategoryListingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _static_category_listing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-category-listing.component.html?ngResource */ 49244);
/* harmony import */ var _static_category_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static-category-listing.component.scss?ngResource */ 83707);
/* harmony import */ var _static_category_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_category_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var _shared_services_category_path_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/category-path.service */ 1752);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/resources.service */ 3145);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/_services/system-settings.service */ 42912);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category-card/category-card.component */ 56386);













let StaticCategoryListingComponent = class StaticCategoryListingComponent {
  constructor(categoryPath, route, router, resourcesService, systemSettings, translate) {
    this.categoryPath = categoryPath;
    this.route = route;
    this.router = router;
    this.resourcesService = resourcesService;
    this.systemSettings = systemSettings;
    this.translate = translate;
    this.nextRoute = '';
    this.pageNameRo = null;
    this.pageNameEn = null;
    this.pathToSettings = [];
    this.pathToImg = [];
    this.previousCategoryImg = null;
    this.listOfCategoryData = [];
    this.categoryData = null;
    this.colArray = [];
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.checkLanguage();
    this.checkRouteForCategories();
  }
  checkLanguage() {
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
  }
  checkRouteForCategories() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(params => {
      if (params.has('domainId')) {
        this.domainId = params.get('domainId');
      }
      if (params.has('staticCategories')) {
        this.staticCategories = params.get('staticCategories').split(',');
        return this.systemSettings.getSystemSetting();
      }
      this.staticCategories = [this.route.snapshot.data.module];
      return this.systemSettings.getSystemSetting();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.listOfCategoryData = [];
        this.categoryData = null;
        this.nextRoute = '';
        [this.pageNameRo, this.pageNameEn, this.pathToSettings, this.pathToImg] = this.categoryPath.getInfoFromRoutePath(this.staticCategories.slice());
        this.categoryData = this.categoryPath.getInfoFromObjectPath(this.pathToSettings.slice(), res, this.staticCategories.slice());
        this.previousCategoryImg = this.categoryPath.getImageFromSettingsObject(this.pathToImg, res);
        for (const key of Object.keys(this.categoryData)) {
          this.listOfCategoryData.push(key);
        }
        this.staticCategories.forEach(category => {
          this.nextRoute = this.nextRoute + category + ',';
        });
        this.colArray = [];
        this.generateColArray(this.listOfCategoryData.length);
      },
      error: () => {
        void this.router.navigate(['/client/domain', this.domainId]);
      }
    });
  }
  generateColArray(nrOfElements) {
    const colMatrix = [[]];
    let colRow = 0;
    if (nrOfElements <= 5) {
      for (let i = 0; i < nrOfElements; i++) {
        if (colMatrix[colRow]) {
          if (colMatrix[colRow].length < 2) {
            colMatrix[colRow].push(6);
          } else {
            colMatrix.push([6]);
            colRow++;
          }
        }
      }
    } else {
      for (let i = 0; i < nrOfElements; i++) {
        if (colMatrix[colRow]) {
          if (colMatrix[colRow].length < 3) {
            colMatrix[colRow].push(6);
          } else {
            colMatrix.push([6]);
            colRow++;
          }
        }
      }
    }
    colMatrix.forEach(row => {
      row.forEach(() => {
        this.colArray.push(12 / row.length);
      });
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_category_path_service__WEBPACK_IMPORTED_MODULE_2__.CategoryPathService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__.ResourcesService
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_4__.SystemSettingsService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
  }];
};
StaticCategoryListingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-static-category-listing',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_5__.CategoryCardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink],
  template: _static_category_listing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_static_category_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], StaticCategoryListingComponent);


/***/ }),

/***/ 57497:
/*!**********************************************************************************************************!*\
  !*** ./src/app/standalone-components/ticket-filter-plus-sidebar/ticket-filter-plus-sidebar.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketFilterPlusSidebarComponent": () => (/* binding */ TicketFilterPlusSidebarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ticket_filter_plus_sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-filter-plus-sidebar.component.html?ngResource */ 60785);
/* harmony import */ var _ticket_filter_plus_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-filter-plus-sidebar.component.scss?ngResource */ 32690);
/* harmony import */ var _ticket_filter_plus_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ticket_filter_plus_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);







let TicketFilterPlusSidebarComponent = class TicketFilterPlusSidebarComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.filterForm = this.formBuilder.group({
      italian: [false],
      indian: [false],
      lebanese: [false],
      asian: [false],
      mediteraneean: [false],
      price1: [false],
      price2: [false],
      price3: [false],
      price4: [false],
      price5: [false],
      karaoke: [false],
      dj: [false],
      liveMusic: [false],
      standUp: [false],
      freeParking: [false],
      inner: [false],
      outer: [false]
    });
  }
  getFilterData() {
    const filter = {
      italian: this.filterForm.controls.italian.value,
      indian: this.filterForm.controls.indian.value,
      lebanese: this.filterForm.controls.lebanese.value,
      asian: this.filterForm.controls.asian.value,
      mediteraneean: this.filterForm.controls.mediteraneean.value,
      price1: this.filterForm.controls.price1.value,
      price2: this.filterForm.controls.price2.value,
      price3: this.filterForm.controls.price3.value,
      price4: this.filterForm.controls.price4.value,
      price5: this.filterForm.controls.price5.value,
      karaoke: this.filterForm.controls.karaoke.value,
      dj: this.filterForm.controls.dj.value,
      liveMusic: this.filterForm.controls.liveMusic.value,
      standUp: this.filterForm.controls.standUp.value,
      freeParking: this.filterForm.controls.freeParking.value,
      inner: this.filterForm.controls.inner.value,
      outer: this.filterForm.controls.outer.value
    };
    this.filterForm.setValue(filter);
    console.log('OBIECT FORM:', filter);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
  }];
};
TicketFilterPlusSidebarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-ticket-filter-plus-sidebar',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
  template: _ticket_filter_plus_sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_ticket_filter_plus_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TicketFilterPlusSidebarComponent);


/***/ }),

/***/ 39977:
/*!**************************************************************************************************!*\
  !*** ./src/app/standalone-components/tickets-filter-sidebar/tickets-filter-sidebar.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsFilterSidebarComponent": () => (/* binding */ TicketsFilterSidebarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tickets_filter_sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets-filter-sidebar.component.html?ngResource */ 44310);
/* harmony import */ var _tickets_filter_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets-filter-sidebar.component.scss?ngResource */ 51972);
/* harmony import */ var _tickets_filter_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tickets_filter_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);







let TicketsFilterSidebarComponent = class TicketsFilterSidebarComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.filterForm = this.formBuilder.group({
      mostPopular: [false],
      highestRating: [false],
      lowestRating: [false],
      highPrice: [false],
      lowPrice: [false],
      rate1: [false],
      rate2: [false],
      rate3: [false],
      rate4: [false]
    });
  }
  getFilterData() {
    const filter = {
      mostPopular: this.filterForm.controls.mostPopular.value,
      highestRating: this.filterForm.controls.highestRating.value,
      lowestRating: this.filterForm.controls.lowestRating.value,
      highPrice: this.filterForm.controls.highPrice.value,
      lowPrice: this.filterForm.controls.lowPrice.value,
      rate1: this.filterForm.controls.rate1.value,
      rate2: this.filterForm.controls.rate2.value,
      rate3: this.filterForm.controls.rate3.value,
      rate4: this.filterForm.controls.rate4.value
    };
    this.filterForm.setValue(filter);
    console.log('OBIECT FORM:', filter);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
  }];
};
TicketsFilterSidebarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-tickets-filter-sidebar',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
  template: _tickets_filter_sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tickets_filter_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TicketsFilterSidebarComponent);


/***/ }),

/***/ 83357:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/activities/activities.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.row {\n  width: 100%;\n  background-color: #f4f5f9;\n  padding: 24px 0;\n}\n.row .p-title {\n  font-size: 32px;\n  font-weight: 700;\n}\n.row .divider {\n  margin-top: 24px;\n  margin-bottom: 24px;\n  background-color: #236BB4;\n  height: 2px;\n  width: 100px;\n}\n.row .description {\n  color: #231F20;\n}\n@media (max-width: 1400px) {\n  .row .container .card-custom {\n    margin-right: 20px;\n  }\n}\n@media (max-width: 576px) {\n  .row .container .card-custom {\n    margin-right: 0;\n    align-items: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/activities/activities.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,yBAAA;EACA,eAAA;AAkBF;AAhBE;EACE,eAAA;EACA,gBAAA;AAkBJ;AAfE;EACE,gBAAA;EACA,mBAAA;EACA,yBDgBc;ECfd,WAAA;EACA,YAAA;AAiBJ;AAdE;EACE,cDfQ;AC+BZ;AAZI;EADF;IAEI,kBAAA;EAeJ;AACF;AAbI;EALF;IAMI,eAAA;IACA,mBAAA;EAgBJ;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n.row{\n  width: 100%;\n  background-color: #f4f5f9;\n  padding:24px 0;\n\n  .p-title{\n    font-size:32px;\n    font-weight: 700;\n  }\n\n  .divider{\n    margin-top:24px;\n    margin-bottom:24px;\n    background-color:$inprogress-color;\n    height: 2px;\n    width: 100px;\n  }\n\n  .description{\n    color:$paragraph;\n  }\n\n  .container .card-custom{\n    @media(max-width: 1400px){\n      margin-right:20px;\n    }\n\n    @media(max-width:576px){\n      margin-right: 0;\n      align-items: center;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 81894:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/banner-client/banner-client.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".row {\n  width: 100%;\n}\n.row .container-fluid {\n  height: 560px;\n  background: url('banner.jpg'), linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24));\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.row .container-fluid h1 {\n  color: white;\n}\n.row .container-fluid p {\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/app/features/domain-listing/_components/banner-client/banner-client.component.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;AACF;AAAE;EACE,aAAA;EACA,wFAAA;EAEA,2BAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AACJ;AACI;EACE,YAAA;AACN;AACI;EACE,YAAA;AACN","sourcesContent":[".row{\n  width: 100%;\n  .container-fluid{\n    height: 560px;\n    background:url(\"../../../../../assets/images/others/banner.jpg\"),\n    linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24));\n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    h1{\n      color:white;\n    }\n    p{\n      color:white;\n    }\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 72237:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/editorials-carousel/editorials-carousel.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.best-events-title {\n  margin-bottom: 6px;\n  color: #231F20;\n}\n.best-events-title span {\n  color: #24398A;\n}\n\n.yellow-divider {\n  display: block;\n  width: 100px;\n  height: 0px;\n  border: 2px solid #FCCC3D;\n  margin-bottom: 12px;\n}\n\n.location-description {\n  margin-bottom: 12px;\n}\n.location-description p, .location-description span {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n}\n.location-description span {\n  color: #24398A;\n}\n\n.filters {\n  margin-bottom: 12px;\n}\n\nimg.category-icon {\n  height: 15px;\n  width: auto;\n}\n\n.btn-color-outline:focus {\n  background: rgba(36, 57, 138, 0.24);\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/editorials-carousel/editorials-carousel.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,cDCM;ACiBR;AAhBE;EACE,cDNY;ACwBhB;;AAdA;EACE,cAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;AAiBF;;AAdA;EACE,mBAAA;AAiBF;AAfE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAiBJ;AAdE;EACE,cD5BY;AC4ChB;;AAZA;EACE,mBAAA;AAeF;;AAZA;EACE,YAAA;EACA,WAAA;AAeF;;AAXE;EACE,mCAAA;AAcJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n.best-events-title {\n  margin-bottom: 6px;\n  color: $title;\n\n  span {\n    color: $primary-color;\n  }\n}\n\n.yellow-divider {\n  display: block;\n  width: 100px;\n  height: 0px;\n  border: 2px solid $pending-color;\n  margin-bottom: 12px;\n}\n\n.location-description {\n  margin-bottom: 12px;\n\n  p, span {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 140%;\n  }\n\n  span {\n    color: $primary-color;\n  }\n}\n\n.filters {\n  margin-bottom: 12px;\n}\n\nimg.category-icon{\n  height: 15px;\n  width:auto;\n}\n\n.btn-color-outline {\n  &:focus {\n    background: rgba($primary-color, 24%);\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 93216:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/editorials-section/editorials-section.component.scss?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.row {\n  width: 100%;\n  background-color: #f4f5f9;\n  padding: 24px 0;\n}\n.row .p-title {\n  font-size: 32px;\n  font-weight: 700;\n}\n.row .divider {\n  margin-top: 24px;\n  margin-bottom: 24px;\n  background-color: #236BB4;\n  height: 2px;\n  width: 100px;\n}\n.row .description {\n  color: #231F20;\n}\n@media (max-width: 1400px) {\n  .row .container .card-custom {\n    margin-right: 20px;\n  }\n}\n@media (max-width: 576px) {\n  .row .container .card-custom {\n    margin-right: 0;\n    align-items: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/editorials-section/editorials-section.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,yBAAA;EACA,eAAA;AAkBF;AAhBE;EACE,eAAA;EACA,gBAAA;AAkBJ;AAfE;EACE,gBAAA;EACA,mBAAA;EACA,yBDgBc;ECfd,WAAA;EACA,YAAA;AAiBJ;AAdE;EACE,cDfQ;AC+BZ;AAZI;EADF;IAEI,kBAAA;EAeJ;AACF;AAbI;EALF;IAMI,eAAA;IACA,mBAAA;EAgBJ;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n.row{\n  width: 100%;\n  background-color: #f4f5f9;\n  padding:24px 0;\n\n  .p-title{\n    font-size:32px;\n    font-weight: 700;\n  }\n\n  .divider{\n    margin-top:24px;\n    margin-bottom:24px;\n    background-color:$inprogress-color;\n    height: 2px;\n    width: 100px;\n  }\n\n  .description{\n    color:$paragraph;\n  }\n\n  .container .card-custom{\n    @media(max-width: 1400px){\n      margin-right:20px;\n    }\n\n    @media(max-width:576px){\n      margin-right: 0;\n      align-items: center;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 48270:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/events-carousel/events-carousel.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.best-events-title {\n  margin-bottom: 6px;\n  color: #231F20;\n}\n.best-events-title span {\n  color: #24398A;\n}\n\n.yellow-divider {\n  display: block;\n  width: 100px;\n  height: 0px;\n  border: 2px solid #FCCC3D;\n  margin-bottom: 12px;\n}\n\nimg.category-icon {\n  height: 15px;\n  width: auto;\n}\n\n.location-description {\n  margin-bottom: 12px;\n}\n.location-description p, .location-description span {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n}\n.location-description span {\n  color: #24398A;\n}\n\n.btn-color-outline:focus {\n  background: rgba(36, 57, 138, 0.24);\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/events-carousel/events-carousel.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,cDCM;ACiBR;AAhBE;EACE,cDNY;ACwBhB;;AAdA;EACE,cAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;AAiBF;;AAdA;EACE,YAAA;EACA,WAAA;AAiBF;;AAdA;EACE,mBAAA;AAiBF;AAfE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAiBJ;AAdE;EACE,cDjCY;ACiDhB;;AAXE;EACE,mCAAA;AAcJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n.best-events-title {\n  margin-bottom: 6px;\n  color: $title;\n\n  span {\n    color: $primary-color;\n  }\n}\n\n.yellow-divider {\n  display: block;\n  width: 100px;\n  height: 0px;\n  border: 2px solid $pending-color;\n  margin-bottom: 12px;\n}\n\nimg.category-icon{\n  height: 15px;\n  width:auto;\n}\n\n.location-description {\n  margin-bottom: 12px;\n\n  p, span {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 140%;\n  }\n\n  span {\n    color: $primary-color;\n  }\n}\n\n.btn-color-outline {\n  &:focus {\n    background: rgba($primary-color, 24%);\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 99811:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/experiences/experiences.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.experiences-container {\n  padding-bottom: 96px;\n  padding-top: 96px;\n  background: linear-gradient(0deg, rgba(237, 240, 250, 0.9), rgba(237, 240, 250, 0.9)), url('inspire.jpg');\n}\n.experiences-container .container .p-title {\n  font-size: 32px;\n  font-weight: 700;\n}\n.experiences-container .container .p-title span {\n  color: #24398A;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/experiences/experiences.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,oBAAA;EACA,iBAAA;EACA,yGAAA;AAkBF;AAfI;EACE,eAAA;EACA,gBAAA;AAiBN;AAhBM;EACE,cDXQ;AC6BhB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n.experiences-container {\n  padding-bottom: 96px;\n  padding-top: 96px;\n  background:linear-gradient(0deg, rgba($background-secondary, 0.9), rgba($background-secondary, 0.9)), url(\"../../../../../assets/images/others/inspire.jpg\");\n\n  .container{\n    .p-title{\n      font-size:32px;\n      font-weight: 700;\n      span{\n        color:$primary-color;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 16289:
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/job-tradings/job-tradings.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.jobs-section {\n  width: 100%;\n  padding-bottom: 96px;\n  padding-top: 96px;\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('jobs.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jobs-section .container .p-title {\n  font-size: 32px;\n  font-weight: 700;\n}\n.jobs-section .container .description {\n  font-size: 16px;\n  font-weight: 400;\n}\n.jobs-section .job {\n  border: 1px solid #231F20;\n  border-radius: 100px;\n  padding: 15px 24px;\n}\n.jobs-section .more {\n  background-color: var(--primary-background);\n  color: #231F20;\n  border-radius: 8px;\n  border: 1px solid var(--primary-background);\n  font-size: 16px;\n  font-weight: 600;\n  padding: 12px 48px;\n  box-shadow: 5px 10px 5px rgba(35, 31, 32, 0.1);\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/job-tradings/job-tradings.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACE,WAAA;EACA,oBAAA;EACA,iBAAA;EACA,sGAAA;EACA,4BAAA;EACA,sBAAA;AAiBF;AAdI;EACE,eAAA;EACA,gBAAA;AAgBN;AAbI;EACE,eAAA;EACA,gBAAA;AAeN;AAVE;EACE,yBAAA;EACA,oBAAA;EACA,kBAAA;AAYJ;AATE;EACE,2CAAA;EACA,cD3BI;EC4BJ,kBAAA;EACA,2CAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,8CAAA;AAWJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n\n.jobs-section {\n  width: 100%;\n  padding-bottom: 96px;\n  padding-top: 96px;\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(\"../../../../../assets/images/others/jobs.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  .container{\n    .p-title{\n      font-size:32px;\n      font-weight: 700;\n    }\n\n    .description{\n      font-size:16px;\n      font-weight: 400;\n    }\n\n\n  }\n  .job{\n    border:1px solid $title;\n    border-radius: 100px;\n    padding:15px 24px;\n  }\n\n  .more{\n    background-color: var(--primary-background);\n    color:$title;\n    border-radius: 8px;\n    border:1px solid var(--primary-background);\n    font-size:16px;\n    font-weight: 600;\n    padding:12px 48px;\n    box-shadow: 5px 10px 5px rgba($title,0.1) ;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 16234:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/popular-locations/popular-locations.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.locations-container {\n  background-color: var(--primary-background);\n  padding: 24px 0;\n}\n.locations-container .p-title {\n  font-size: 32px;\n  font-weight: 700;\n}\n.locations-container .divider {\n  margin-top: 24px;\n  margin-bottom: 24px;\n  background-color: #FFCC29;\n  height: 2px;\n  width: 100px;\n}\n.locations-container .description {\n  color: #231F20;\n}\n@media (max-width: 1400px) {\n  .locations-container .container .card-custom {\n    margin-right: 20px;\n  }\n}\n@media (max-width: 576px) {\n  .locations-container .container .card-custom {\n    margin-right: 0;\n    align-items: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/popular-locations/popular-locations.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,2CAAA;EACA,eAAA;AAkBF;AAhBE;EACE,eAAA;EACA,gBAAA;AAkBJ;AAfE;EACE,gBAAA;EACA,mBAAA;EACA,yBDXc;ECYd,WAAA;EACA,YAAA;AAiBJ;AAdE;EACE,cDdQ;AC8BZ;AAZI;EADF;IAEI,kBAAA;EAeJ;AACF;AAbI;EALF;IAMI,eAAA;IACA,mBAAA;EAgBJ;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n.locations-container{\n  background-color: var(--primary-background);\n  padding:24px 0;\n\n  .p-title{\n    font-size:32px;\n    font-weight: 700;\n  }\n\n  .divider{\n    margin-top:24px;\n    margin-bottom:24px;\n    background-color:$secondary-color;\n    height: 2px;\n    width: 100px;\n  }\n\n  .description{\n    color:$paragraph;\n  }\n\n  .container .card-custom{\n    @media(max-width: 1400px){\n      margin-right:20px;\n    }\n\n    @media(max-width:576px){\n      margin-right: 0;\n      align-items: center;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 81654:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-filter-bar/resource-filter-bar.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n:host ::ng-deep .closed-accordion .accordion-item {\n  border-radius: 90px !important;\n}\n\n:host ::ng-deep .open-accordion .accordion-item {\n  border-radius: 45px !important;\n}\n\n.accordion-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 24px;\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .accordion-header {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.filter-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 1200px) {\n  .filter-list {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n.filter-list > .filter-selector + .filter-selector {\n  border-left: 1px solid rgba(36, 57, 138, 0.48);\n}\n@media (max-width: 1200px) {\n  .filter-list > .filter-selector + .filter-selector {\n    border: none;\n  }\n}\n\n.filter-selector {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  height: 48px;\n  gap: 16px;\n  color: #24398A;\n  /*&:hover {\n    i, p {\n      transform: scale(1.05);\n    }\n  }*/\n}\n.filter-selector i {\n  font-weight: 900;\n  font-size: 24px;\n  line-height: 24px;\n}\n.filter-selector p {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 20px;\n  margin-bottom: 0;\n}\n\n.location-filter-input {\n  border: none;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 20px;\n  color: #24398A;\n  width: 10ch;\n}\n\n.active-filter p {\n  text-decoration: underline;\n}\n\n.btn-search {\n  height: 50px;\n  padding: 0 48px;\n  border-radius: 100px;\n}\n.btn-search i {\n  font-size: 20px;\n  color: var(--primary-background);\n}\n\n.panel-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 20px;\n  color: #231F20;\n}\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n}\n.destination-element p {\n  color: #858495;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.destination-element .destination-icon {\n  border: 1px solid #858495;\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.destination-element .destination-icon i {\n  color: #858495;\n  font-size: 22px;\n}\n.destination-element:hover, .destination-element:focus {\n  background-color: rgba(36, 57, 138, 0.2);\n  transition: 0.3s ease-in-out;\n  outline: transparent;\n}\n.destination-element:hover .destination-icon, .destination-element:focus .destination-icon {\n  border: 1px solid #24398A;\n  background-color: var(--primary-background);\n}\n.destination-element:hover .destination-icon i, .destination-element:focus .destination-icon i {\n  color: #24398A;\n}\n.destination-element:hover p, .destination-element:focus p {\n  color: #231F20;\n}\n\n.row-gap {\n  row-gap: 24px;\n}\n\n.guests-selector {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border: 1px solid #858495;\n  border-radius: 8px;\n}\n.guests-selector button {\n  border: 1px solid #858495;\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.guests-selector button i {\n  color: #24398A;\n  font-size: 24px;\n}\n.guests-selector button:hover {\n  background-color: #24398A;\n  transition: 0.3s ease-in-out;\n}\n.guests-selector button:hover i {\n  color: var(--primary-background);\n}\n.guests-selector button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.guests-selector p {\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.datepickers-container .row {\n  row-gap: 24px;\n}\n.datepickers-container .mat-form-field {\n  width: 100% !important;\n}\n\n::ng-deep .ngx-mat-timepicker form {\n  display: flex !important;\n  justify-content: center !important;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/resource-filter-bar/resource-filter-bar.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,8BAAA;AAkBF;;AAfA;EACE,8BAAA;AAkBF;;AAfA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;AAkBF;AAhBE;EAPF;IAQI,eAAA;IACA,uBAAA;EAmBF;AACF;;AAhBA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAmBF;AAjBE;EALF;IAMI,eAAA;IACA,uBAAA;EAoBF;AACF;AAlBE;EACE,8CAAA;AAoBJ;AAlBI;EAHF;IAII,YAAA;EAqBJ;AACF;;AAjBA;EACE,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;EACA,cDjDc;ECmDd;;;;IAAA;AAuBF;AAjBE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAmBJ;AAhBE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAkBJ;;AAdA;EACE,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD5Ec;EC6Ed,WAAA;AAiBF;;AAbE;EACE,0BAAA;AAgBJ;;AAZA;EACE,YAAA;EACA,eAAA;EACA,oBAAA;AAeF;AAbE;EACE,eAAA;EACA,gCAAA;AAeJ;;AAXA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDhGU;AC8GZ;;AAXA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AAcF;;AAXA;EACE,eAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,iBAAA;EACA,SAAA;AAcF;AAZE;EACE,cD7FY;EC8FZ,eAAA;EACA,gBAAA;EACA,gBAAA;AAcJ;AAXE;EACE,yBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAaJ;AAXI;EACE,cD7GU;EC8GV,eAAA;AAaN;AATE;EACE,wCAAA;EACA,4BAAA;EACA,oBAAA;AAWJ;AATI;EACE,yBAAA;EACA,2CAAA;AAWN;AAVM;EACE,cDtJQ;ACkKhB;AARI;EACE,cDtJM;ACgKZ;;AALA;EACE,aAAA;AAQF;;AALA;EACE,WAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,aAAA;EAEA,yBAAA;EACA,kBAAA;AAOF;AALE;EACE,yBAAA;EACA,2CAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAOJ;AALI;EACE,cDzLU;EC0LV,eAAA;AAON;AAJI;EACE,yBD9LU;EC+LV,4BAAA;AAMN;AALM;EACE,gCAAA;AAOR;AAHI;EACE,mBAAA;EACA,YAAA;AAKN;AADE;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AAGJ;;AAEE;EACE,aAAA;AACJ;AAEE;EACE,sBAAA;AAAJ;;AAIA;EACE,wBAAA;EACA,kCAAA;AADF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n:host ::ng-deep .closed-accordion .accordion-item {\n  border-radius: 90px !important;\n}\n\n:host ::ng-deep .open-accordion .accordion-item {\n  border-radius: 45px !important;\n}\n\n.accordion-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 24px;\n  gap: 12px;\n\n  @media(max-width: 1200px){\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.filter-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media(max-width: 1200px) {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  & > .filter-selector + .filter-selector {\n    border-left: 1px solid rgba(36, 57, 138, 0.48);\n\n    @media(max-width: 1200px) {\n      border: none;\n    }\n  }\n}\n\n.filter-selector {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  height: 48px;\n  gap: 16px;\n  color: $primary-color;\n\n  /*&:hover {\n    i, p {\n      transform: scale(1.05);\n    }\n  }*/\n\n  i {\n    font-weight: 900;\n    font-size: 24px;\n    line-height: 24px;\n  }\n\n  p {\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 20px;\n    margin-bottom: 0;\n  }\n}\n\n.location-filter-input {\n  border: none;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 20px;\n  color: $primary-color;\n  width: 10ch;\n}\n\n.active-filter {\n  p {\n    text-decoration: underline;\n  }\n}\n\n.btn-search {\n  height: 50px;\n  padding: 0 48px;\n  border-radius: 100px;\n\n  i {\n    font-size: 20px;\n    color: var(--primary-background);\n  }\n}\n\n.panel-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 20px;\n  color: $paragraph;\n}\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n\n  p {\n    color: $inactive-color;\n    font-size: 18px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .destination-icon {\n    border: 1px solid $inactive-color;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      color: $inactive-color;\n      font-size: 22px;\n    }\n  }\n\n  &:hover, &:focus {\n    background-color: rgba($primary-color, 0.2);\n    transition: 0.3s ease-in-out;\n    outline: transparent;\n\n    .destination-icon {\n      border: 1px solid $primary-color;\n      background-color: var(--primary-background);\n      i {\n        color: $primary-color;\n      }\n    }\n\n    p {\n      color: $paragraph;\n    }\n  }\n}\n\n.row-gap {\n  row-gap: 24px;\n}\n\n.guests-selector {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n\n  border: 1px solid $inactive-color;\n  border-radius: 8px;\n\n  button {\n    border: 1px solid $inactive-color;\n    background-color: var(--primary-background);\n    border-radius: 8px;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      color: $primary-color;\n      font-size: 24px;\n    }\n\n    &:hover {\n      background-color: $primary-color;\n      transition: 0.3s ease-in-out;\n      i {\n        color: var(--primary-background);\n      }\n    }\n\n    &:disabled {\n      cursor: not-allowed;\n      opacity: 0.5;\n    }\n  }\n\n  p {\n    margin-bottom: 0;\n    font-size: 16px;\n    font-weight: 700;\n  }\n}\n\n.datepickers-container {\n  .row {\n    row-gap: 24px;\n  }\n\n  .mat-form-field {\n    width: 100% !important;\n  }\n}\n\n::ng-deep .ngx-mat-timepicker form {\n  display: flex !important;\n  justify-content: center !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 82985:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-information/resource-information.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.contact-info-card {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 16px;\n  border: 1px solid rgba(35, 31, 32, 0.24);\n  border-radius: 8px;\n}\n\n.info-section {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.info-section .section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.info-section .section-row {\n  display: flex;\n  gap: 4px;\n}\n.info-section .section-row img {\n  width: 20px;\n  height: auto;\n  object-fit: contain;\n}\n.info-section .section-row p {\n  margin-bottom: 0;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n#ol-map {\n  height: 200px;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/resource-information/resource-information.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EACA,SAAA;EACA,wCAAA;EACA,kBAAA;AAkBF;;AAfA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAkBF;AAhBE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDhBI;ACkCR;AAfE;EACE,aAAA;EACA,QAAA;AAiBJ;AAfI;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AAiBN;AAdI;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDlCM;ACkDZ;;AAXA;EACE,aAAA;EACA,WAAA;AAcF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.contact-info-card {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 16px;\n  border: 1px solid rgba($title, 0.24);\n  border-radius: 8px;\n}\n\n.info-section {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  .section-title {\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 140%;\n    letter-spacing: -0.02em;\n    color: $title;\n  }\n\n  .section-row {\n    display: flex;\n    gap: 4px;\n\n    img {\n      width: 20px;\n      height: auto;\n      object-fit: contain;\n    }\n\n    p {\n      margin-bottom: 0;\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n    }\n  }\n}\n\n#ol-map {\n  height: 200px;\n  width: 100%;\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 55510:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-list-map/resource-list-map.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.map-container {\n  min-height: 100vw;\n}\n\n.info-section {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.info-section .section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.info-section .section-row {\n  display: flex;\n  gap: 4px;\n}\n.info-section .section-row img {\n  width: 20px;\n  height: auto;\n  object-fit: contain;\n}\n.info-section .section-row p {\n  margin-bottom: 0;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n#ol-map {\n  height: 100vh;\n  width: 100%;\n}\n\n.ol-popup {\n  position: absolute;\n  background-color: white;\n  /*--webkit-filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));*/\n  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));\n  padding: 15px;\n  border-radius: 10px;\n  border: 1px solid #cccccc;\n  bottom: 12px;\n  left: -50px;\n  width: 335px;\n}\n\n.ol-popup:after, .ol-popup:before {\n  top: 100%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.ol-popup:after {\n  border-top-color: white;\n  border-width: 10px;\n  left: 48px;\n  margin-left: -10px;\n}\n\n.ol-popup:before {\n  border-top-color: #cccccc;\n  border-width: 11px;\n  left: 48px;\n  margin-left: -11px;\n}\n\n.ol-popup-closer {\n  text-decoration: none;\n  position: absolute;\n  top: 2px;\n  right: 8px;\n}\n\n.ol-popup-closer:after {\n  content: \"x\";\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/resource-list-map/resource-list-map.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,iBAAA;AAkBF;;AAdA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAiBF;AAfE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDZI;AC6BR;AAdE;EACE,aAAA;EACA,QAAA;AAgBJ;AAdI;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AAgBN;AAbI;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cD9BM;AC6CZ;;AAVA;EACE,aAAA;EACA,WAAA;AAaF;;AACA;EACE,kBAAA;EACA,uBAAA;EACA,2DAAA;EACA,iDAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AAEF;;AAYA;EACE,SAAA;EACA,yBAAA;EACA,YAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,oBAAA;AATF;;AAyBA;EACE,uBAAA;EACA,kBAAA;EACA,UAAA;EACA,kBAAA;AAtBF;;AAyBA;EACE,yBAAA;EACA,kBAAA;EACA,UAAA;EACA,kBAAA;AAtBF;;AAwBA;EACE,qBAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;AArBF;;AAwBA;EACE,YAAA;AArBF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.map-container{\n  min-height:100vw;\n}\n\n\n.info-section {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  .section-title {\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 140%;\n    letter-spacing: -0.02em;\n    color: $title;\n  }\n\n  .section-row {\n    display: flex;\n    gap: 4px;\n\n    img {\n      width: 20px;\n      height: auto;\n      object-fit: contain;\n    }\n\n    p {\n      margin-bottom: 0;\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n    }\n  }\n}\n\n#ol-map {\n  height: 100vh;\n  width: 100%;\n}\n\n// .ol-popup{\n//   position: absolute;\n//   background-color: white;\n//   padding:15px;\n//   border-radius: 7px;\n//   border:1px solid var(--secondary-background);\n//   bottom:12px;\n//   left:-50px;\n//   min-width: 280px\n// }\n\n.ol-popup {\n  position: absolute;\n  background-color: white;\n  /*--webkit-filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));*/\n  filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));\n  padding: 15px;\n  border-radius: 10px;\n  border: 1px solid #cccccc;\n  bottom: 12px;\n  left: -50px;\n  width: 335px;\n  // min-width: 180px;\n}\n\n// .ol-popup:after, .ol-popup:before{\n//   top:100%;\n//   border:solid transparent;\n//   content:\" \";\n//   height: 0px;\n//   width:0px;\n//   position: absolute;\n//   pointer-events: none;\n// }\n\n.ol-popup:after, .ol-popup:before {\n  top: 100%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n// .ol-popup:after{\n//   border-top-color: white;\n//   border-width: 10px;\n//   left:48px;\n//   margin-left:-10px;\n// }\n\n// .ol-popup:before{\n//   border-top-color: white;\n//   border-width: 11px;\n//   left:48px;\n//   margin-left:-11px;\n// }\n\n.ol-popup:after {\n  border-top-color: white;\n  border-width: 10px;\n  left: 48px;\n  margin-left: -10px;\n}\n\n.ol-popup:before {\n  border-top-color: #cccccc;\n  border-width: 11px;\n  left: 48px;\n  margin-left: -11px;\n}\n.ol-popup-closer{\n  text-decoration: none;\n  position: absolute;\n  top: 2px;\n  right:8px;\n}\n\n.ol-popup-closer:after{\n  content: \"x\";\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 31750:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-tabs/resource-tabs.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.nav-pills {\n  border: 1px solid rgba(36, 57, 138, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n}\n.nav-pills > .nav-item {\n  flex-grow: 1;\n}\n.nav-pills > .nav-item .nav-link {\n  text-align: center;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 38px;\n  padding: 6px 0;\n  border-radius: 8px;\n}\n.nav-pills > .nav-item .nav-link.active {\n  background-color: #24398A;\n  color: var(--primary-background);\n}\n\n.about-tab {\n  padding-top: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.about-tab .date-time-group p {\n  color: #231F20;\n  font-weight: 700;\n  font-size: 20px;\n  margin-bottom: 8px;\n}\n.about-tab .date-time-group span {\n  color: #231F20;\n  font-weight: 400;\n  font-size: 16px;\n}\n.about-tab .info-group h4 {\n  color: #231F20;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  margin-bottom: 8px;\n}\n.about-tab .info-group p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 160%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  margin-bottom: 0;\n}\n.about-tab .info-group .icon-text-container .icon-text-group {\n  display: flex;\n  align-items: center;\n}\n.about-tab .info-group .icon-text-container .icon-text-group img {\n  width: 20px;\n  height: auto;\n}\n\n.booking-type-tab {\n  padding-top: 32px;\n}\n.booking-type-tab form {\n  margin-bottom: 24px;\n}\n.booking-type-tab .mat-form-field {\n  width: 100% !important;\n}\n.booking-type-tab .guests-container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.booking-type-tab .guests-container .guests-selector {\n  display: flex;\n  flex-shrink: 0;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border: 1px solid #858495;\n  border-radius: 8px;\n}\n.booking-type-tab .guests-container .guests-selector button {\n  border: 1px solid #858495;\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.booking-type-tab .guests-container .guests-selector button i {\n  color: #24398A;\n  font-size: 24px;\n}\n.booking-type-tab .guests-container .guests-selector button:hover {\n  background-color: #24398A;\n  transition: 0.3s ease-in-out;\n}\n.booking-type-tab .guests-container .guests-selector button:hover i {\n  color: var(--primary-background);\n}\n.booking-type-tab .guests-container .guests-selector button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.booking-type-tab .guests-container .guests-selector p {\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.related-resources-tab {\n  padding-top: 32px;\n}\n.related-resources-tab .row {\n  row-gap: 24px;\n}\n.related-resources-tab .related-resource-card {\n  width: 100%;\n  box-shadow: 0 4px 8px rgba(35, 31, 32, 0.08);\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n}\n.related-resources-tab .related-resource-card .img-container {\n  height: 178px;\n  width: 100%;\n}\n.related-resources-tab .related-resource-card .img-container img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.related-resources-tab .related-resource-card .card-text {\n  padding: 8px;\n  height: 100px;\n}\n.related-resources-tab .related-resource-card .card-text h4 {\n  color: #24398A;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 110%;\n  margin-bottom: 14px;\n}\n.related-resources-tab .related-resource-card .card-text p {\n  color: #231F20;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  margin-bottom: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n::ng-deep .ngx-mat-timepicker form {\n  display: flex !important;\n  justify-content: center !important;\n}\n\n.other-attr .info-group,\n.other-attr {\n  display: flex;\n  align-items: center;\n}\n\n.other-attr {\n  gap: 15px;\n}\n.other-attr img {\n  width: 20px;\n  height: auto;\n  margin-right: 4px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/resource-tabs/resource-tabs.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,yCAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;AAkBF;AAhBE;EACE,YAAA;AAkBJ;AAhBI;EACE,kBAAA;EACA,cDZU;ECaV,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;EACA,cAAA;EACA,kBAAA;AAiBN;AAfM;EACE,yBD1BQ;EC2BR,gCAAA;AAiBR;;AAVA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAaF;AAVI;EACE,cDtCE;ECuCF,gBAAA;EACA,eAAA;EACA,kBAAA;AAYN;AATI;EACE,cD7CE;EC8CF,gBAAA;EACA,eAAA;AAWN;AANI;EACE,cDrDE;ECsDF,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAQN;AALI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDhEM;ECiEN,gBAAA;AAON;AAAM;EACE,aAAA;EACA,mBAAA;AAER;AAAQ;EACE,WAAA;EACA,YAAA;AAEV;;AAMA;EACE,iBAAA;AAHF;AAKE;EACE,mBAAA;AAHJ;AAME;EACE,sBAAA;AAJJ;AAOE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;AALJ;AAOI;EACE,aAAA;EACA,cAAA;EACA,YAAA;EACA,mBAAA;EACA,8BAAA;EACA,aAAA;EAEA,yBAAA;EACA,kBAAA;AANN;AAQM;EACE,yBAAA;EACA,2CAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AANR;AAQQ;EACE,cDlIM;ECmIN,eAAA;AANV;AASQ;EACE,yBDvIM;ECwIN,4BAAA;AAPV;AASU;EACE,gCAAA;AAPZ;AAWQ;EACE,mBAAA;EACA,YAAA;AATV;AAaM;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AAXR;;AAiBA;EACE,iBAAA;AAdF;AAgBE;EACE,aAAA;AAdJ;AAiBE;EACE,WAAA;EACA,4CAAA;EACA,yCAAA;EACA,kBAAA;AAfJ;AAiBI;EACE,aAAA;EACA,WAAA;AAfN;AAiBM;EACE,YAAA;EACA,WAAA;EACA,iBAAA;AAfR;AAmBI;EACE,YAAA;EACA,aAAA;AAjBN;AAmBM;EACE,cD3LQ;EC4LR,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;AAjBR;AAoBM;EACE,cD9LI;EC+LJ,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EAGA,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,4BAAA;AApBR;;AA0BA;EACE,wBAAA;EACA,kCAAA;AAvBF;;AA0BA;;EAEE,aAAA;EACA,mBAAA;AAvBF;;AA0BA;EACE,SAAA;AAvBF;AAyBE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AAvBJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.nav-pills {\n  border: 1px solid rgba($primary-color, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n\n  & > .nav-item {\n    flex-grow: 1;\n\n    .nav-link {\n      text-align: center;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 20px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      height: 38px;\n      padding: 6px 0;\n      border-radius: 8px;\n\n      &.active {\n        background-color: $primary-color;\n        color: var(--primary-background);\n      }\n    }\n  }\n\n}\n\n.about-tab {\n  padding-top: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  .date-time-group {\n    p {\n      color: $title;\n      font-weight: 700;\n      font-size: 20px;\n      margin-bottom: 8px;\n    }\n\n    span {\n      color: $title;\n      font-weight: 400;\n      font-size: 16px;\n    }\n  }\n\n  .info-group {\n    h4 {\n      color: $title;\n      font-weight: 700;\n      font-size: 20px;\n      line-height: 140%;\n      margin-bottom: 8px;\n    }\n\n    p {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 160%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n      margin-bottom: 0;\n    }\n\n    .icon-text-container {\n      // gap: 12px;\n      // padding: 0px!important;\n\n      .icon-text-group {\n        display: flex;\n        align-items: center;\n        // margin-right: 12px;\n        img {\n          width: 20px;\n          height: auto;\n        }\n      }\n    }\n\n  }\n}\n\n.booking-type-tab {\n  padding-top: 32px;\n\n  form {\n    margin-bottom: 24px;\n  }\n\n  .mat-form-field {\n    width: 100% !important;\n  }\n\n  .guests-container {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n    flex-wrap: wrap;\n\n    .guests-selector {\n      display: flex;\n      flex-shrink: 0;\n      flex-grow: 1;\n      align-items: center;\n      justify-content: space-between;\n      padding: 10px;\n\n      border: 1px solid $inactive-color;\n      border-radius: 8px;\n\n      button {\n        border: 1px solid $inactive-color;\n        background-color: var(--primary-background);\n        border-radius: 8px;\n        width: 40px;\n        height: 40px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        i {\n          color: $primary-color;\n          font-size: 24px;\n        }\n\n        &:hover {\n          background-color: $primary-color;\n          transition: 0.3s ease-in-out;\n\n          i {\n            color: var(--primary-background);\n          }\n        }\n\n        &:disabled {\n          cursor: not-allowed;\n          opacity: 0.5;\n        }\n      }\n\n      p {\n        margin-bottom: 0;\n        font-size: 16px;\n        font-weight: 700;\n      }\n    }\n  }\n}\n\n.related-resources-tab {\n  padding-top: 32px;\n\n  .row {\n    row-gap: 24px;\n  }\n\n  .related-resource-card {\n    width: 100%;\n    box-shadow: 0 4px 8px rgba($title, 0.08);\n    border: 1px solid rgba($primary-color, 0.24);\n    border-radius: 8px;\n\n    .img-container {\n      height: 178px;\n      width: 100%;\n\n      img {\n        height: 100%;\n        width: 100%;\n        object-fit: cover;\n      }\n    }\n\n    .card-text {\n      padding: 8px;\n      height: 100px;\n\n      h4 {\n        color: $primary-color;\n        font-weight: 700;\n        font-size: 20px;\n        line-height: 110%;\n        margin-bottom: 14px;\n      }\n\n      p {\n        color: $paragraph;\n        font-weight: 400;\n        font-size: 16px;\n        line-height: 140%;\n        letter-spacing: -0.02em;\n\n        //max nr of lines\n        margin-bottom: 0;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        line-clamp: 2;\n        -webkit-box-orient: vertical;\n      }\n    }\n  }\n}\n\n::ng-deep .ngx-mat-timepicker form {\n  display: flex !important;\n  justify-content: center !important;\n}\n\n.other-attr .info-group,\n.other-attr {\n  display: flex;\n  align-items: center;\n}\n\n.other-attr {\n  gap: 15px;\n\n  img {\n    width: 20px;\n    height: auto;\n    margin-right: 4px;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 66181:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resources-carousel/resources-carousel.component.scss?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.best-events-title {\n  margin-bottom: 32px;\n  color: #231F20;\n}\n.best-events-title span {\n  color: #24398A;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/resources-carousel/resources-carousel.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,mBAAA;EACA,cDCM;ACiBR;AAhBE;EACE,cDNY;ACwBhB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n.best-events-title {\n  margin-bottom: 32px;\n  color: $title;\n\n  span {\n    color: $primary-color;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4330:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resources-list/resources-list.component.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.resource-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.sort-filter {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n@media (max-width: 991px) {\n  .sort-filter {\n    width: 100%;\n  }\n  .sort-filter .mat-form-field {\n    width: 100%;\n  }\n}\n\n.resource-list {\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n  padding: 24px 0;\n}\n\n.no-data-class {\n  margin-bottom: 200px;\n}\n.no-data-class img {\n  width: 80px;\n  height: 80px;\n}\n.no-data-class h4 {\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/resources-list/resources-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAhBA;EACE,aAAA;EACA,sBAAA;AAmBF;;AAhBA;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;AAmBF;AAjBE;EALF;IAMI,WAAA;EAoBF;EAlBE;IACE,WAAA;EAoBJ;AACF;;AAhBA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EACA,eAAA;AAmBF;;AAhBA;EACE,oBAAA;AAmBF;AAjBE;EACE,WAAA;EACA,YAAA;AAmBJ;AAhBE;EACE,cD9BQ;ACgDZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import '/src/app/theme/styles/components/colors';\n.resource-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.sort-filter {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media(max-width: 991px) {\n    width: 100%;\n\n    .mat-form-field {\n      width: 100%;\n    }\n  }\n}\n\n.resource-list {\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n  padding: 24px 0;\n}\n\n.no-data-class{\n  margin-bottom:200px;\n\n  img{\n    width: 80px;\n    height: 80px;\n  }\n\n  h4{\n    color:$paragraph;\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 11234:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/sale/sale.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.sale-container {\n  padding-top: 48px;\n  padding-bottom: 48px;\n  background-color: var(--primary-background);\n}\n.sale-container .sale-card {\n  border-radius: 8px;\n  background-color: #1160D7;\n}\n.sale-container .sale-card .col-text {\n  padding: 48px;\n}\n.sale-container .sale-card .col-text .title-p {\n  color: var(--primary-background);\n  font-size: 38px;\n  font-weight: 700;\n}\n.sale-container .sale-card .col-text .details {\n  color: var(--primary-background);\n  font-size: 20px;\n  font-weight: 400;\n}\n.sale-container .sale-card .col-text .more {\n  background-color: var(--primary-background);\n  color: #231F20;\n  border-radius: 8px;\n  border: 1px solid var(--primary-background);\n  font-size: 16px;\n  font-weight: 600;\n  padding: 12px 48px;\n}\n.sale-container .sale-card .col-img img {\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  height: 100%;\n}\n@media (max-width: 992px) {\n  .sale-container .sale-card .col-img {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/sale/sale.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,iBAAA;EACA,oBAAA;EACA,2CAAA;AAkBF;AAhBE;EACE,kBAAA;EACA,yBAAA;AAkBJ;AAhBI;EACE,aAAA;AAkBN;AAjBM;EACE,gCAAA;EACA,eAAA;EACA,gBAAA;AAmBR;AAhBM;EACE,gCAAA;EACA,eAAA;EACA,gBAAA;AAkBR;AAfM;EACE,2CAAA;EACA,cDtBA;ECuBA,kBAAA;EACA,2CAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AAiBR;AAZM;EACE,4BAAA;EACA,+BAAA;EACA,YAAA;AAcR;AAXM;EAPF;IAQI,aAAA;EAcN;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n.sale-container {\n  padding-top:48px;\n  padding-bottom:48px;\n  background-color: var(--primary-background);\n\n  .sale-card {\n    border-radius: 8px;\n    background-color: #1160D7;\n\n    .col-text {\n      padding:48px;\n      .title-p {\n        color: var(--primary-background);\n        font-size: 38px;\n        font-weight: 700;\n      }\n\n      .details {\n        color: var(--primary-background);\n        font-size: 20px;\n        font-weight: 400;\n      }\n\n      .more{\n        background-color: var(--primary-background);\n        color:$title;\n        border-radius: 8px;\n        border:1px solid var(--primary-background);\n        font-size:16px;\n        font-weight: 600;\n        padding:12px 48px;\n      }\n    }\n\n    .col-img{\n      img{\n        border-top-right-radius: 8px;\n        border-bottom-right-radius: 8px;\n        height: 100%;\n      }\n\n      @media(max-width: 992px){\n        display: none;\n      }\n    }\n\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9247:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/sidebar-filters/sidebar-filters.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.sidebar-container {\n  gap: 24px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.filters-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.filters-container .mat-radio-button {\n  display: block;\n}\n\n:host ::ng-deep .filters-container .mat-expansion-panel-spacing {\n  margin: 0;\n}\n:host ::ng-deep .filters-container .mat-expansion-panel {\n  box-shadow: none !important;\n}\n\n.btn-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 12px 24px;\n}\n.btn-container .btn-reset {\n  background: #EA4335;\n}\n.btn-container .btn-reset:hover {\n  background: rgba(234, 67, 53, 0.72);\n}\n.btn-container button {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/sidebar-filters/sidebar-filters.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,SAAA;AAkBF;;AAfA;EACE,WAAA;AAkBF;;AAfA;EACE,aAAA;EACA,sBAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;AAkBF;AAhBE;EACE,cAAA;AAkBJ;;AAbE;EACE,SAAA;AAgBJ;AAbE;EACE,2BAAA;AAeJ;;AAXA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,kBAAA;AAcF;AAZE;EACE,mBDEY;ACYhB;AAZI;EACE,mCAAA;AAcN;AAVE;EACE,WAAA;AAYJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.sidebar-container {\n  gap: 24px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.filters-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n\n  .mat-radio-button {\n    display: block;\n  }\n}\n\n:host ::ng-deep .filters-container {\n  .mat-expansion-panel-spacing {\n    margin: 0;\n  }\n\n  .mat-expansion-panel {\n    box-shadow: none !important;\n  }\n}\n\n.btn-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 12px 24px;\n\n  .btn-reset {\n    background: $dislike-color;\n\n    &:hover {\n      background: rgba($dislike-color, 0.72)\n    }\n  }\n\n  button {\n    width: 100%;\n  }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 51702:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/toggle-sections/toggle-sections.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.container-fluid {\n  background-color: var(--primary-background);\n  padding: 48px 0;\n}\n\n.section-explore .grid-item {\n  text-align: center;\n}\n.section-explore .grid-item a {\n  text-decoration: none;\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/_components/toggle-sections/toggle-sections.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAhBA;EACE,2CAAA;EACA,eAAA;AAmBF;;AAdI;EACE,kBAAA;AAiBN;AAfM;EACE,qBAAA;EACA,cDRA;ACyBR","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n.container-fluid{\n  background-color:var(--primary-background);\n  padding: 48px 0;\n  }\n\n\n  .section-explore{\n    .grid-item{\n      text-align: center;\n\n      a{\n        text-decoration: none;\n        color:$title;\n      }\n\n    }\n  }\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 38134:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/category-listing/category-listing.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.48), rgba(35, 31, 32, 0.48));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n.background-container .category-title {\n  font-size: 64px;\n  font-weight: 700;\n  color: var(--primary-background);\n  position: absolute;\n  bottom: 60px;\n  left: 0;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  line-height: 140%;\n  margin-bottom: 0;\n  z-index: 1;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.categories-container .row {\n  row-gap: 24px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/category-listing/category-listing.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAbE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAeJ;AAZE;EACE,eAAA;EACA,gBAAA;EACA,gCAAA;EACA,kBAAA;EACA,YAAA;EACA,OAAA;EACA,gBAAA;EACA,2BAAA;EACA,iBAAA;EACA,gBAAA;EACA,UAAA;AAcJ;;AAVA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAaF;;AATE;EACE,aAAA;AAYJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n    //backdrop-filter: blur(2px);\n    //-webkit-backdrop-filter: blur(2px);\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n\n  .category-title {\n    font-size: 64px;\n    font-weight: 700;\n    color: var(--primary-background);\n    position: absolute;\n    bottom: 60px;\n    left: 0;\n    margin-left: 50%;\n    transform: translateX(-50%);\n    line-height: 140%;\n    margin-bottom: 0;\n    z-index: 1;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.categories-container {\n  .row {\n    row-gap: 24px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 58811:
/*!**********************************************************************************!*\
  !*** ./src/app/features/domain-listing/domain-listing.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n  max-height: 560px;\n  overflow: hidden;\n}\n.background-container video {\n  width: 100%;\n}\n.background-container .domain-background-video {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  height: auto;\n  width: 100%;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.24), rgba(35, 31, 32, 0.24));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n.background-container .search-bar {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n  width: 95%;\n  max-width: 700px;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-left: 48px;\n  padding-right: 48px;\n  border-radius: 100px;\n  z-index: 2;\n  background-color: var(--primary-background);\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.categories-container .row {\n  row-gap: 24px;\n}\n\n:host ::ng-deep .search-results-tabs .mat-ink-bar {\n  background-color: #FFCC29 !important;\n}\n\n:host ::ng-deep .search-results-tabs .mat-tab-header {\n  border-bottom: none;\n}\n\n.resource-cards-container {\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n}\n\n@media (min-aspect-ratio: 16/9) {\n  video {\n    width: 100%;\n    height: auto;\n  }\n}\n@media (max-aspect-ratio: 16/9) {\n  .video {\n    width: auto;\n    height: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/domain-listing.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AAkBF;AAhBE;EACE,WAAA;AAkBJ;AAfE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EAEA,YAAA;EAEA,WAAA;AAeJ;AAZE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAcJ;AAXE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAaJ;AAVE;EACE,kBAAA;EACA,QAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;EACA,wBAAA;EAAA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EACA,UAAA;EACA,2CAAA;AAYJ;;AARA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAWF;;AAPE;EACE,aAAA;AAUJ;;AANA;EACE,oCAAA;AASF;;AANA;EACE,mBAAA;AASF;;AANA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;AASF;;AANA;EACE;IACE,WAAA;IACA,YAAA;EASF;AACF;AANA;EACE;IACE,WAAA;IACA,YAAA;EAQF;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n  max-height: 560px;\n  overflow: hidden;\n\n  video{\n    width:100%;\n  }\n\n  .domain-background-video{\n    position: absolute;\n    right:0;\n    bottom:0;\n    z-index: -1;\n\n    height: auto;\n    //max-height: 560px;\n    width: 100%;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.24), rgba($title, 0.24));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n\n  .search-bar {\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    width: 95%;\n    max-width: 700px;\n    height: fit-content;\n    padding-left: 48px;\n    padding-right: 48px;\n    border-radius: 100px;\n    z-index: 2;\n    background-color: var(--primary-background);\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.categories-container {\n  .row {\n    row-gap: 24px;\n  }\n}\n\n:host ::ng-deep .search-results-tabs .mat-ink-bar {\n  background-color: $secondary-color !important;\n}\n\n:host ::ng-deep .search-results-tabs .mat-tab-header {\n  border-bottom: none;\n}\n\n.resource-cards-container {\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n}\n\n@media (min-aspect-ratio: 16/9){\n  video{\n    width:100%;\n    height: auto;\n  }\n}\n\n@media (max-aspect-ratio: 16/9){\n  .video{\n    width:auto;\n    height: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 82422:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/resource-listing/resource-listing.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.48), rgba(35, 31, 32, 0.48));\n}\n.background-container img {\n  height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n.background-container .overlay-elements {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  row-gap: 31px;\n}\n.background-container .overlay-elements p {\n  margin-bottom: 0;\n  font-size: 64px;\n  font-weight: 700;\n  color: var(--primary-background);\n  line-height: 140%;\n}\n@media (max-width: 1200px) {\n  .background-container .overlay-elements p {\n    position: relative;\n    top: -70px;\n  }\n}\n.background-container .overlay-elements app-resource-filter-bar {\n  position: absolute;\n  top: calc(50% + 70px);\n}\n@media (max-width: 1200px) {\n  .background-container .overlay-elements app-resource-filter-bar {\n    top: 50%;\n  }\n}\n\n::ng-deep .map-dialog .mat-mdc-dialog-surface.mdc-dialog__surface {\n  overflow: hidden !important;\n}\n\n.resource-card-map img {\n  width: 320px;\n  height: 192px;\n}\n.resource-card-map h3 {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 120%;\n  color: #24398A;\n}\n.resource-card-map h4 {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 140%;\n  color: #231F20;\n}\n.resource-card-map p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n.content-container button {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.map-container {\n  height: 100px;\n  background-image: url('google-maps-blur-min.png');\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/resource-listing/resource-listing.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAbE;EACE,aAAA;EACA,WAAA;EACA,iBAAA;AAeJ;AAZE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AAcJ;AAZI;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,gCAAA;EACA,iBAAA;AAcN;AAZM;EAPF;IAQI,kBAAA;IACA,UAAA;EAeN;AACF;AAZI;EACE,kBAAA;EACA,qBAAA;AAcN;AAZM;EAJF;IAKI,QAAA;EAeN;AACF;;AATE;EACE,2BAAA;AAYJ;;AANE;EACE,YAAA;EACA,aAAA;AASJ;AANE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD7EY;ACqFhB;AANE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD9EQ;ACsFZ;AALE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cD1FQ;ACgGZ;;AAFA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAKF;AAHE;EACE,2BAAA;EAAA,sBAAA;AAKJ;;AACA;EACE,aAAA;EACA,iDAAA;AAEF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n    //backdrop-filter: blur(2px);\n    //-webkit-backdrop-filter: blur(2px);\n  }\n\n  img {\n    height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n\n  .overlay-elements {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 31px;\n\n    p {\n      margin-bottom: 0;\n      font-size: 64px;\n      font-weight: 700;\n      color: var(--primary-background);\n      line-height: 140%;\n\n      @media(max-width: 1200px) {\n        position: relative;\n        top: -70px;\n      }\n    }\n\n    app-resource-filter-bar {\n      position: absolute;\n      top: calc(50% + 70px);\n\n      @media(max-width: 1200px) {\n        top: 50%;\n      }\n    }\n  }\n\n}\n\n  ::ng-deep .map-dialog .mat-mdc-dialog-surface.mdc-dialog__surface{\n    overflow: hidden!important;\n  }\n\n\n\n.resource-card-map{\n  img{\n    width: 320px;\n    height: 192px;\n  }\n\n  h3{\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 120%;\n    color: $primary-color;\n  }\n  h4{\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 140%;\n    color: $paragraph;\n  }\n\n  p{\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 140%;\n    /* or 22px */\n\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n    color: $paragraph;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n\n  button{\n    min-width: fit-content;\n  }\n}\n\n\n\n.map-container{\n  height:100px;\n  background-image: url(\"../../../../assets/images/others/google-maps-blur-min.png\");\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 93616:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/available-car-rentals-list/available-car-rentals-list.component.scss?ngResource ***!
  \****************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.car-rentals-header {\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('available-car-rentals.png');\n  background-size: cover;\n  background-position: center;\n  height: 768px;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/transportation/available-car-rentals-list/available-car-rentals-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACE,iHAAA;EACA,sBAAA;EACA,2BAAA;EACA,aAAA;AAiBF;;AAdA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAiBF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n\n.car-rentals-header {\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(\"../../../../../assets/images/others/images-client/available-car-rentals.png\");\n  background-size: cover;\n  background-position: center;\n  height: 768px;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 87761:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/available-plane-tickets-list/available-plane-tickets-list.component.scss?ngResource ***!
  \********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\nh4 {\n  font-weight: 700;\n  font-size: 20px;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.general-ticket-card {\n  margin-bottom: 25px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(13, 68, 148, 0.24);\n  box-shadow: 0px 4px 8px rgba(35, 31, 32, 0.08);\n  border-radius: 8px;\n}\n.general-ticket-card .bkg-grey {\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n}\n.general-ticket-card .bkg-grey .hour-1 {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  opacity: 0.72;\n  margin-bottom: 0px;\n}\n.general-ticket-card .bkg-grey .hour-2 {\n  font-weight: 400;\n  font-size: 14px;\n  display: flex;\n  align-items: flex-end;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin-bottom: 0px;\n}\n.general-ticket-card .bkg-grey .hour-2 i {\n  margin-right: 5px;\n}\n.general-ticket-card .bkg-grey .type-flight {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  margin-bottom: 0px;\n}\n.general-ticket-card .bkg-grey .type-flight span {\n  color: #231F20;\n}\n.general-ticket-card .bkg-grey .type-flight.red {\n  color: #EA4335;\n}\n.general-ticket-card .bkg-grey .type-flight.green {\n  color: #34A853;\n}\n.general-ticket-card .bkg-grey .class-flight {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.general-ticket-card .bkg-white {\n  background: #FFFFFF;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.general-ticket-card .bkg-white img {\n  width: 67px;\n  height: 39px;\n  margin-right: 24px;\n}\n.general-ticket-card .bkg-white .car-img {\n  height: auto;\n  min-width: 364px;\n  object-fit: cover;\n  border-top-left-radius: 8px;\n}\n@media (max-width: 992px) {\n  .general-ticket-card .bkg-white .car-img {\n    width: 100%;\n    height: 200px;\n  }\n}\n.general-ticket-card .bkg-white .car-info {\n  padding: 10px 16px;\n}\n.general-ticket-card .bkg-white .car-info .description {\n  font-size: 16px;\n  line-height: 22px;\n  opacity: 0.56;\n}\n.general-ticket-card .bkg-white .car-info .small-info {\n  gap: 8px;\n}\n.general-ticket-card .bkg-white .car-info .small-info span {\n  color: #24398A;\n  font-size: 16px;\n  line-height: 22px;\n}\n.general-ticket-card .bkg-white .car-info .small-info span .car-door {\n  width: 15px;\n  height: 15px;\n}\n.general-ticket-card .bkg-last-line {\n  background: rgba(36, 57, 138, 0.08);\n}\n.general-ticket-card .bkg-last-line h4 {\n  font-weight: 500;\n  font-size: 28px;\n  text-align: right;\n  letter-spacing: -0.02em;\n  color: #34A853;\n  padding: 8px 50px;\n  margin-bottom: 0px;\n}\n.general-ticket-card .bkg-last-line h4 span {\n  padding: 0 5px;\n  font-weight: 400;\n  font-size: 16px;\n  text-align: right;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  opacity: 0.48;\n}\n.general-ticket-card .bkg-last-line button {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  min-height: 100%;\n}\n.general-ticket-card .label {\n  border-radius: 8px;\n  padding: 10px;\n  width: 33%;\n}\n.general-ticket-card .label p {\n  font-weight: 700;\n  font-size: 16px;\n  margin: 0px;\n  text-align: center;\n  align-items: center;\n}\n.general-ticket-card .label p i {\n  margin-right: 10px;\n}\n.general-ticket-card .label-recommended {\n  background: linear-gradient(0deg, rgba(254, 212, 0, 0.08), rgba(254, 212, 0, 0.08));\n  border: 1px solid rgba(254, 212, 0, 0.48);\n}\n.general-ticket-card .label-recommended p {\n  color: #FFCC04;\n}\n.general-ticket-card .label-cheapest {\n  background: rgba(44, 206, 167, 0.08);\n  border: 1px solid rgba(44, 206, 167, 0.48);\n}\n.general-ticket-card .label-cheapest p {\n  color: #2CCEA7;\n}\n.general-ticket-card .label-fastest {\n  background: rgba(36, 57, 138, 0.08);\n  border: 1px solid rgba(36, 57, 138, 0.48);\n}\n.general-ticket-card .label-fastest p {\n  color: #24398A;\n}\n.general-ticket-card .first-label-line {\n  padding: 10px;\n}\n.general-ticket-card .first-line {\n  height: 56px;\n}\n\n.itinerary-row {\n  border-bottom: 2px solid lightgrey;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.flight-row {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.flight-row:not(:last-child) {\n  border-bottom: 1px solid lightgrey;\n}\n\n.filter-tickets-container {\n  border: 1px solid rgba(35, 31, 32, 0.23);\n  border-radius: 8px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.filter-tickets-container h4 {\n  font-weight: 700;\n  font-size: 16px;\n  color: #231F20;\n}\n.filter-tickets-container label.mat-checkbox-layout {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 160%;\n}\n\n.direct-flight-label {\n  background: #d1edd3;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 12px;\n}\n\n.indirect-flight-label {\n  background: #edd3d1;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 12px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/transportation/available-plane-tickets-list/available-plane-tickets-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACI,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAiBJ;;AARE;EACE,gBAAA;EACA,eAAA;EAGA,uBAAA;EACA,cAAA;AASJ;;AAFA;EACE,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,yCAAA;EACA,8CAAA;EACA,kBAAA;AAKF;AAHE;EACE,4FAAA;AAKJ;AAHI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;EACA,kBAAA;AAKN;AAFI;EACE,gBAAA;EACA,eAAA;EACA,aAAA;EACA,qBAAA;EACA,kBAAA;EACA,uBAAA;EACA,cAAA;EACA,kBAAA;AAIN;AAFM;EACE,iBAAA;AAIR;AAAI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,kBAAA;AAEN;AAAM;EACE,cDrEI;ACuEZ;AACM;EACE,cAAA;AACR;AAEM;EACE,cAAA;AAAR;AAII;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;EACA,kBAAA;AAFN;AAOE;EACE,mBAAA;EACA,2BAAA;EACA,4BAAA;AALJ;AAOI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AALN;AAQI;EACE,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,2BAAA;AANN;AAQM;EANF;IAOI,WAAA;IACA,aAAA;EALN;AACF;AAQI;EACE,kBAAA;AANN;AAQM;EACE,eAAA;EACA,iBAAA;EACA,aAAA;AANR;AASM;EACE,QAAA;AAPR;AASQ;EACE,cDpIM;ECqIN,eAAA;EACA,iBAAA;AAPV;AASU;EACE,WAAA;EACA,YAAA;AAPZ;AAgBE;EACE,mCAAA;AAdJ;AAgBI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;AAdN;AAgBM;EACE,cAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;AAdR;AAkBI;EACE,8BAAA;EACA,+BAAA;EACA,2BAAA;EACA,4BAAA;EAEA,gBAAA;AAjBN;AAwBE;EACE,kBAAA;EACA,aAAA;EACA,UAAA;AAtBJ;AAwBI;EACE,gBAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AAtBN;AAwBM;EACE,kBAAA;AAtBR;AA2BE;EACE,mFAAA;EACA,yCAAA;AAzBJ;AA2BI;EACE,cAAA;AAzBN;AA8BE;EACE,oCAAA;EACA,0CAAA;AA5BJ;AA8BI;EACE,cAAA;AA5BN;AAiCE;EACE,mCAAA;EACA,yCAAA;AA/BJ;AAiCI;EACE,cAAA;AA/BN;AAoCE;EACE,aAAA;AAlCJ;AAqCE;EACE,YAAA;AAnCJ;;AAuCA;EACE,kCAAA;EACA,iBAAA;EACA,oBAAA;AApCF;;AAuCA;EACE,gBAAA;EACA,mBAAA;AApCF;;AAuCA;EACE,kCAAA;AApCF;;AAwCA;EACE,wCAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;AArCF;;AA0CE;EACE,gBAAA;EACA,eAAA;EACA,cAAA;AAvCJ;AA0CE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAxCJ;;AA6CA;EACE,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;AA1CF;;AA6CA;EACE,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;AA1CF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","\n@import \"src/app/theme/styles/components/_colors.scss\";\n\n.content-container {\n    background-color: var(--primary-background);\n    padding-top: 48px;\n    padding-bottom: 48px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    row-gap: 64px;\n  }\n  //.airplane-tickets-header{\n  //  background-image:\n  //  linear-gradient(0deg,rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)),url(\"../../../../../assets/images/others/images-client/airplane-tickets-hp.jpg\");\n  //  background-size: cover;\n  //  height:768px;\n  //}\n\n  h4{\n    font-weight: 700;\n    font-size: 20px;\n    //display: flex;\n    //align-items: center;\n    letter-spacing: -0.02em;\n    color: #231F20;\n    //margin-bottom: 13px;\n    //i{\n    //  margin-right:5px;\n    //}\n  }\n\n.general-ticket-card {\n  margin-bottom: 25px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(13, 68, 148, 0.24);\n  box-shadow: 0px 4px 8px rgba(35, 31, 32, 0.08);\n  border-radius: 8px;\n\n  .bkg-grey {\n    background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n\n    .hour-1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #231F20;\n      opacity: 0.72;\n      margin-bottom: 0px;\n    }\n\n    .hour-2 {\n      font-weight: 400;\n      font-size: 14px;\n      display: flex;\n      align-items: flex-end;\n      text-align: center;\n      letter-spacing: -0.02em;\n      color: #24398A;\n      margin-bottom: 0px;\n\n      i {\n        margin-right: 5px;\n      }\n    }\n\n    .type-flight {\n      font-weight: 700;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      margin-bottom: 0px;\n\n      span {\n        color: $paragraph;\n      }\n\n      &.red {\n        color: #EA4335;\n      }\n\n      &.green {\n        color: #34A853;\n      }\n    }\n\n    .class-flight {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #231F20;\n      margin-bottom: 0px;\n\n    }\n  }\n\n  .bkg-white {\n    background: #FFFFFF;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n\n    img {\n      width: 67px;\n      height: 39px;\n      margin-right: 24px;\n    }\n\n    .car-img {\n      height: auto;\n      min-width: 364px;\n      object-fit: cover;\n      border-top-left-radius: 8px;\n\n      @media(max-width: 992px) {\n        width: 100%;\n        height: 200px;\n      }\n    }\n\n    .car-info {\n      padding: 10px 16px;\n\n      .description {\n        font-size: 16px;\n        line-height: 22px;\n        opacity: 0.56;\n      }\n\n      .small-info {\n        gap: 8px;\n\n        span {\n          color: $primary-color;\n          font-size: 16px;\n          line-height: 22px;\n\n          .car-door{\n            width: 15px;\n            height: 15px;\n          }\n        }\n      }\n    }\n\n\n  }\n\n  .bkg-last-line {\n    background: rgba(36, 57, 138, 0.08);\n\n    h4 {\n      font-weight: 500;\n      font-size: 28px;\n      text-align: right;\n      letter-spacing: -0.02em;\n      color: #34A853;\n      padding: 8px 50px;\n      margin-bottom: 0px;\n\n      span {\n        padding: 0 5px;\n        font-weight: 400;\n        font-size: 16px;\n        text-align: right;\n        letter-spacing: -0.02em;\n        color: #24398A;\n        opacity: 0.48;\n      }\n    }\n\n    button {\n      border-bottom-left-radius: 8px;\n      border-bottom-right-radius: 8px;\n      border-top-left-radius: 0px;\n      border-top-right-radius: 0px;\n\n      min-height: 100%;\n    }\n\n  }\n\n  // first line labels\n\n  .label {\n    border-radius: 8px;\n    padding: 10px;\n    width: 33%;\n\n    p {\n      font-weight: 700;\n      font-size: 16px;\n      margin: 0px;\n      text-align: center;\n      align-items: center;\n\n      i {\n        margin-right: 10px\n      }\n    }\n  }\n\n  .label-recommended {\n    background: linear-gradient(0deg, rgba(254, 212, 0, 0.08), rgba(254, 212, 0, 0.08));\n    border: 1px solid rgba(254, 212, 0, 0.48);\n\n    p {\n      color: #FFCC04;\n\n    }\n  }\n\n  .label-cheapest {\n    background: rgba(44, 206, 167, 0.08);\n    border: 1px solid rgba(44, 206, 167, 0.48);\n\n    p {\n      color: #2CCEA7;\n    }\n\n  }\n\n  .label-fastest {\n    background: rgba(36, 57, 138, 0.08);\n    border: 1px solid rgba(36, 57, 138, 0.48);\n\n    p {\n      color: #24398A;\n    }\n  }\n\n  //first-line\n  .first-label-line {\n    padding: 10px;\n  }\n\n  .first-line {\n    height: 56px;\n  }\n\n}\n.itinerary-row {\n  border-bottom: 2px solid lightgrey;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.flight-row {\n  padding-top:5px;\n  padding-bottom: 5px;\n}\n\n.flight-row:not(:last-child) {\n  border-bottom: 1px solid lightgrey;\n}\n\n\n.filter-tickets-container{\n  border: 1px solid rgba(35, 31, 32, 0.23);\n  border-radius: 8px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  padding:10px;\n}\n\n.filter-tickets-container{\n\n  h4{\n    font-weight: 700;\n    font-size: 16px;\n    color: #231F20;\n  }\n\n  label.mat-checkbox-layout{\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 160%;\n  }\n\n}\n\n.direct-flight-label {\n  background: #d1edd3;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 12px;\n}\n\n.indirect-flight-label {\n  background: \t#edd3d1;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 12px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 94236:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/available-train-tickets-list/available-train-tickets-list.component.scss?ngResource ***!
  \********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.train-tickets-header {\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('train-list-avb.jpg');\n  background-size: cover;\n  height: 768px;\n}\n\nh4 {\n  font-weight: 700;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  margin-bottom: 13px;\n}\nh4 i {\n  margin-right: 5px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/transportation/available-train-tickets-list/available-train-tickets-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACI,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAiBJ;;AAfE;EACE,0GACA;EACA,sBAAA;EACA,aAAA;AAiBJ;;AAdE;EACE,gBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,mBAAA;AAiBJ;AAhBI;EACE,iBAAA;AAkBN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","\n@import \"src/app/theme/styles/components/_colors.scss\";\n\n.content-container {\n    background-color: var(--primary-background);\n    padding-top: 48px;\n    padding-bottom: 48px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    row-gap: 64px;\n  }\n  .train-tickets-header{\n    background-image:\n    linear-gradient(0deg,rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)),url(\"../../../../../assets/images/others/images-client/train-list-avb.jpg\");\n    background-size: cover;\n    height:768px;\n  }\n\n  h4{\n    font-weight: 700;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n    color: #231F20;\n    margin-bottom: 13px;\n    i{\n      margin-right:5px;\n    }\n  }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 16115:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/car-rentals/car-rentals.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.car-rentals-header {\n  background: url('car-rentals-header.png') center no-repeat;\n  background-size: cover;\n  height: 768px;\n}\n\n.content-container {\n  background-color: #FFFFFF;\n  padding: 48px 0;\n}\n.content-container h4 {\n  font-weight: 700;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.content-container .img-col img {\n  object-fit: cover;\n  border-radius: 8px;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/transportation/car-rentals/car-rentals.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,0DAAA;EACA,sBAAA;EACA,aAAA;AAkBF;;AAfA;EACE,yBAAA;EACA,eAAA;AAkBF;AAhBE;EACE,gBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;AAkBJ;AAfE;EACE,iBAAA;EACA,kBAAA;EACA,WAAA;AAiBJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.car-rentals-header{\n  background: url(\"../../../../../assets/images/others/images-client/car-rentals-header.png\") center no-repeat;\n  background-size: cover;\n  height:768px;\n}\n\n.content-container{\n  background-color: $background-primary;\n  padding: 48px 0;\n\n  h4{\n    font-weight: 700;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n    color: #231F20;\n  }\n\n  .img-col img{\n    object-fit: cover;\n    border-radius: 8px;\n    width: 100%;\n\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 37125:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/components/available-ticket-card/available-ticket-card.component.scss?ngResource ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.general-ticket-card {\n  margin: 24px 0px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(13, 68, 148, 0.24);\n  box-shadow: 0px 4px 8px rgba(35, 31, 32, 0.08);\n  border-radius: 8px;\n}\n.general-ticket-card .bkg-grey {\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n}\n.general-ticket-card .bkg-grey .hour-1 {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  opacity: 0.72;\n  margin-bottom: 0px;\n}\n.general-ticket-card .bkg-grey .hour-2 {\n  font-weight: 400;\n  font-size: 14px;\n  display: flex;\n  align-items: flex-end;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin-bottom: 0px;\n}\n.general-ticket-card .bkg-grey .hour-2 i {\n  margin-right: 5px;\n}\n.general-ticket-card .bkg-grey .type-flight {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  margin-bottom: 0px;\n}\n.general-ticket-card .bkg-grey .type-flight span {\n  color: #231F20;\n}\n.general-ticket-card .bkg-grey .type-flight.red {\n  color: #EA4335;\n}\n.general-ticket-card .bkg-grey .type-flight.green {\n  color: #34A853;\n}\n.general-ticket-card .bkg-grey .class-flight {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.general-ticket-card .bkg-white {\n  background: #FFFFFF;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.general-ticket-card .bkg-white img {\n  width: 67px;\n  height: 39px;\n  margin-right: 24px;\n}\n.general-ticket-card .bkg-white .car-img {\n  height: auto;\n  min-width: 364px;\n  object-fit: cover;\n  border-top-left-radius: 8px;\n}\n@media (max-width: 992px) {\n  .general-ticket-card .bkg-white .car-img {\n    width: 100%;\n    height: 200px;\n  }\n}\n.general-ticket-card .bkg-white .car-info {\n  padding: 10px 16px;\n}\n.general-ticket-card .bkg-white .car-info .description {\n  font-size: 16px;\n  line-height: 22px;\n  opacity: 0.56;\n}\n.general-ticket-card .bkg-white .car-info .small-info {\n  gap: 8px;\n}\n.general-ticket-card .bkg-white .car-info .small-info span {\n  color: #24398A;\n  font-size: 16px;\n  line-height: 22px;\n}\n.general-ticket-card .bkg-white .car-info .small-info span .car-door {\n  width: 15px;\n  height: 15px;\n}\n.general-ticket-card .bkg-last-line {\n  background: rgba(36, 57, 138, 0.08);\n}\n.general-ticket-card .bkg-last-line h4 {\n  font-weight: 500;\n  font-size: 28px;\n  text-align: right;\n  letter-spacing: -0.02em;\n  color: #34A853;\n  padding: 8px 50px;\n  margin-bottom: 0px;\n}\n.general-ticket-card .bkg-last-line h4 span {\n  padding: 0 5px;\n  font-weight: 400;\n  font-size: 16px;\n  text-align: right;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  opacity: 0.48;\n}\n.general-ticket-card .bkg-last-line button {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  min-height: 100%;\n}\n.general-ticket-card .label {\n  border-radius: 8px;\n  padding: 10px;\n  width: 33%;\n}\n.general-ticket-card .label p {\n  font-weight: 700;\n  font-size: 16px;\n  margin: 0px;\n  text-align: center;\n  align-items: center;\n}\n.general-ticket-card .label p i {\n  margin-right: 10px;\n}\n.general-ticket-card .label-recommended {\n  background: linear-gradient(0deg, rgba(254, 212, 0, 0.08), rgba(254, 212, 0, 0.08));\n  border: 1px solid rgba(254, 212, 0, 0.48);\n}\n.general-ticket-card .label-recommended p {\n  color: #FFCC04;\n}\n.general-ticket-card .label-cheapest {\n  background: rgba(44, 206, 167, 0.08);\n  border: 1px solid rgba(44, 206, 167, 0.48);\n}\n.general-ticket-card .label-cheapest p {\n  color: #2CCEA7;\n}\n.general-ticket-card .label-fastest {\n  background: rgba(36, 57, 138, 0.08);\n  border: 1px solid rgba(36, 57, 138, 0.48);\n}\n.general-ticket-card .label-fastest p {\n  color: #24398A;\n}\n.general-ticket-card .first-label-line {\n  padding: 10px;\n}\n.general-ticket-card .first-line {\n  height: 56px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/transportation/components/available-ticket-card/available-ticket-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,yCAAA;EACA,8CAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,4FAAA;AAkBJ;AAhBI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;EACA,kBAAA;AAkBN;AAfI;EACE,gBAAA;EACA,eAAA;EACA,aAAA;EACA,qBAAA;EACA,kBAAA;EACA,uBAAA;EACA,cAAA;EACA,kBAAA;AAiBN;AAfM;EACE,iBAAA;AAiBR;AAbI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,kBAAA;AAeN;AAbM;EACE,cDvCI;ACsDZ;AAZM;EACE,cAAA;AAcR;AAXM;EACE,cAAA;AAaR;AATI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;EACA,kBAAA;AAWN;AANE;EACE,mBAAA;EACA,2BAAA;EACA,4BAAA;AAQJ;AANI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AAQN;AALI;EACE,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,2BAAA;AAON;AALM;EANF;IAOI,WAAA;IACA,aAAA;EAQN;AACF;AALI;EACE,kBAAA;AAON;AALM;EACE,eAAA;EACA,iBAAA;EACA,aAAA;AAOR;AAJM;EACE,QAAA;AAMR;AAJQ;EACE,cDtGM;ECuGN,eAAA;EACA,iBAAA;AAMV;AAJU;EACE,WAAA;EACA,YAAA;AAMZ;AAGE;EACE,mCAAA;AADJ;AAGI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;AADN;AAGM;EACE,cAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;AADR;AAKI;EACE,8BAAA;EACA,+BAAA;EACA,2BAAA;EACA,4BAAA;EAEA,gBAAA;AAJN;AAWE;EACE,kBAAA;EACA,aAAA;EACA,UAAA;AATJ;AAWI;EACE,gBAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AATN;AAWM;EACE,kBAAA;AATR;AAcE;EACE,mFAAA;EACA,yCAAA;AAZJ;AAcI;EACE,cAAA;AAZN;AAiBE;EACE,oCAAA;EACA,0CAAA;AAfJ;AAiBI;EACE,cAAA;AAfN;AAoBE;EACE,mCAAA;EACA,yCAAA;AAlBJ;AAoBI;EACE,cAAA;AAlBN;AAuBE;EACE,aAAA;AArBJ;AAwBE;EACE,YAAA;AAtBJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.general-ticket-card {\n  margin: 24px 0px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(13, 68, 148, 0.24);\n  box-shadow: 0px 4px 8px rgba(35, 31, 32, 0.08);\n  border-radius: 8px;\n\n  .bkg-grey {\n    background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n\n    .hour-1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #231F20;\n      opacity: 0.72;\n      margin-bottom: 0px;\n    }\n\n    .hour-2 {\n      font-weight: 400;\n      font-size: 14px;\n      display: flex;\n      align-items: flex-end;\n      text-align: center;\n      letter-spacing: -0.02em;\n      color: #24398A;\n      margin-bottom: 0px;\n\n      i {\n        margin-right: 5px;\n      }\n    }\n\n    .type-flight {\n      font-weight: 700;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      margin-bottom: 0px;\n\n      span {\n        color: $paragraph;\n      }\n\n      &.red {\n        color: #EA4335;\n      }\n\n      &.green {\n        color: #34A853;\n      }\n    }\n\n    .class-flight {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #231F20;\n      margin-bottom: 0px;\n\n    }\n  }\n\n  .bkg-white {\n    background: #FFFFFF;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n\n    img {\n      width: 67px;\n      height: 39px;\n      margin-right: 24px;\n    }\n\n    .car-img {\n      height: auto;\n      min-width: 364px;\n      object-fit: cover;\n      border-top-left-radius: 8px;\n\n      @media(max-width: 992px) {\n        width: 100%;\n        height: 200px;\n      }\n    }\n\n    .car-info {\n      padding: 10px 16px;\n\n      .description {\n        font-size: 16px;\n        line-height: 22px;\n        opacity: 0.56;\n      }\n\n      .small-info {\n        gap: 8px;\n\n        span {\n          color: $primary-color;\n          font-size: 16px;\n          line-height: 22px;\n\n          .car-door{\n            width: 15px;\n            height: 15px;\n          }\n        }\n      }\n    }\n\n\n  }\n\n  .bkg-last-line {\n    background: rgba(36, 57, 138, 0.08);\n\n    h4 {\n      font-weight: 500;\n      font-size: 28px;\n      text-align: right;\n      letter-spacing: -0.02em;\n      color: #34A853;\n      padding: 8px 50px;\n      margin-bottom: 0px;\n\n      span {\n        padding: 0 5px;\n        font-weight: 400;\n        font-size: 16px;\n        text-align: right;\n        letter-spacing: -0.02em;\n        color: #24398A;\n        opacity: 0.48;\n      }\n    }\n\n    button {\n      border-bottom-left-radius: 8px;\n      border-bottom-right-radius: 8px;\n      border-top-left-radius: 0px;\n      border-top-right-radius: 0px;\n\n      min-height: 100%;\n    }\n\n  }\n\n  // first line labels\n\n  .label {\n    border-radius: 8px;\n    padding: 10px;\n    width: 33%;\n\n    p {\n      font-weight: 700;\n      font-size: 16px;\n      margin: 0px;\n      text-align: center;\n      align-items: center;\n\n      i {\n        margin-right: 10px\n      }\n    }\n  }\n\n  .label-recommended {\n    background: linear-gradient(0deg, rgba(254, 212, 0, 0.08), rgba(254, 212, 0, 0.08));\n    border: 1px solid rgba(254, 212, 0, 0.48);\n\n    p {\n      color: #FFCC04;\n\n    }\n  }\n\n  .label-cheapest {\n    background: rgba(44, 206, 167, 0.08);\n    border: 1px solid rgba(44, 206, 167, 0.48);\n\n    p {\n      color: #2CCEA7;\n    }\n\n  }\n\n  .label-fastest {\n    background: rgba(36, 57, 138, 0.08);\n    border: 1px solid rgba(36, 57, 138, 0.48);\n\n    p {\n      color: #24398A;\n    }\n  }\n\n  //first-line\n  .first-label-line {\n    padding: 10px;\n  }\n\n  .first-line {\n    height: 56px;\n  }\n\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8890:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/components/location-card/location-card.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.location-card-container {\n  background: #FFFFFF;\n  box-shadow: 0px 4px 8px rgba(35, 31, 32, 0.08);\n  border-radius: 0px 0px 30px 30px;\n}\n\n.location-card-container p {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  padding: 13px 0px;\n  margin-bottom: 0px;\n}\n.location-card-container p i {\n  margin-right: 15px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/transportation/components/location-card/location-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACI,mBAAA;EACA,8CAAA;EACA,gCAAA;AAiBJ;;AAbI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cDhBQ;ECiBR,iBAAA;EACA,kBAAA;AAgBR;AAfQ;EACI,kBAAA;AAiBZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","\n@import \"src/app/theme/styles/components/_colors.scss\";\n\n.location-card-container {\n    background: #FFFFFF;\n    box-shadow: 0px 4px 8px rgba(35, 31, 32, 0.08);\n    border-radius: 0px 0px 30px 30px;\n}\n\n  .location-card-container {\n    p{\n        font-weight: 500;\n        font-size: 16px;\n        line-height: 19px;\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n        color: $primary-color;\n        padding:13px 0px;\n        margin-bottom:0px;\n        i{\n            margin-right:15px;\n        }\n    }\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 56169:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/plane-tickets/plane-tickets.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.airplane-tickets-header {\n  background: url('airplane-tickets-hp.jpg') center no-repeat;\n  background-size: cover;\n  height: 768px;\n}\n\nh4 {\n  font-weight: 700;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  margin-bottom: 13px;\n}\nh4 i {\n  margin-right: 5px;\n}\n\n.img-container {\n  background: url('ariline-tickets.jpg') center no-repeat;\n  background-size: cover;\n}\n\n.visibile {\n  display: block;\n}\n\n.hidden {\n  display: none;\n}\n\n.ticket-type-group mat-button-toggle-group {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  background: var(--primary-background);\n  margin-bottom: 48px;\n}\n.ticket-type-group mat-button-toggle-group .mat-button-toggle {\n  color: #24398A;\n  border: 1px solid var(--primary-background);\n}\n.ticket-type-group mat-button-toggle-group .mat-button-toggle:focus, .ticket-type-group mat-button-toggle-group .mat-button-toggle:active, .ticket-type-group mat-button-toggle-group .mat-button-toggle:checked {\n  border: 1px solid var(--primary-background);\n  background: #24398A !important;\n  border-radius: 100px;\n  color: var(--primary-background);\n}\n.ticket-type-group .mat-button-toggle-checked {\n  background-color: #24398A !important;\n  color: #FFFFFF !important;\n  border: 1px solid var(--primary-background);\n  border-radius: 8px;\n}\n\n.travel-class-group {\n  display: flex;\n  justify-content: space-between;\n  border: none !important;\n  margin-bottom: 13px;\n  flex-wrap: wrap;\n}\n.travel-class-group .mat-button-toggle {\n  color: #24398A;\n  background-color: white;\n  border: 1px solid #24398A !important;\n  border-radius: 8px;\n  min-width: 120px;\n}\n.travel-class-group .mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n  background-color: #24398A;\n  color: white;\n}\n\n.noPassengers {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 12px;\n  margin-bottom: 13px;\n  gap: 56px;\n  height: 52px;\n  background: #FFFFFF;\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n  order: 0;\n  align-self: stretch;\n  flex-grow: 0;\n}\n.noPassengers button {\n  background-color: white;\n  color: #24398A;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  width: 35px;\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n}\n.noPassengers button:hover {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);\n  transition: ease-in-out 0.3s;\n}\n.noPassengers button:focus, .noPassengers button:active, .noPassengers button:checked {\n  background-color: #24398A;\n  color: var(--primary-background);\n  transition: 0s;\n}\n.noPassengers p {\n  margin: 0px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.1px;\n  color: #231F20;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.airport-class .location-filter-input {\n  border: none;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 20px;\n  color: #24398A;\n  width: 10ch;\n}\n.airport-class .active-filter p {\n  text-decoration: underline;\n}\n.airport-class .btn-search {\n  height: 50px;\n  padding: 0 48px;\n  border-radius: 100px;\n}\n.airport-class .btn-search i {\n  font-size: 20px;\n  color: var(--primary-background);\n}\n.airport-class .panel-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 20px;\n  color: #231F20;\n}\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n}\n.destination-element p {\n  color: #858495;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.destination-element .destination-icon {\n  border: 1px solid #858495;\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.destination-element .destination-icon i {\n  color: #858495;\n  font-size: 22px;\n}\n.destination-element:hover, .destination-element:focus {\n  background-color: rgba(36, 57, 138, 0.2);\n  transition: 0.3s ease-in-out;\n  outline: transparent;\n}\n.destination-element:hover .destination-icon, .destination-element:focus .destination-icon {\n  border: 1px solid #24398A;\n  background-color: var(--primary-background);\n}\n.destination-element:hover .destination-icon i, .destination-element:focus .destination-icon i {\n  color: #24398A;\n}\n.destination-element:hover p, .destination-element:focus p {\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/transportation/plane-tickets/plane-tickets.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACI,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAiBJ;;AAfE;EACE,2DAAA;EACA,sBAAA;EACA,aAAA;AAkBJ;;AAfE;EACE,gBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,mBAAA;AAkBJ;AAjBI;EACE,iBAAA;AAmBN;;AAfA;EACQ,uDAAA;EACA,sBAAA;AAkBR;;AAfE;EACE,cAAA;AAkBJ;;AAfE;EACE,aAAA;AAkBJ;;AANE;EAEE,yBAAA;EACA,kBAAA;EACA,qCAAA;EACA,mBAAA;AAQJ;AANI;EAEE,cD7DU;EC8DV,2CAAA;AAON;AAJM;EACE,2CAAA;EACA,8BAAA;EACA,oBAAA;EACA,gCAAA;AAMR;AAAE;EACA,oCAAA;EACA,yBAAA;EACA,2CAAA;EACA,kBAAA;AAEF;;AAGA;EACE,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AAAF;AAEE;EACE,cD5FY;EC6FZ,uBAAA;EACA,oCAAA;EACA,kBAAA;EACA,gBAAA;AAAJ;AAGE;EACE,yBDpGY;ECqGZ,YAAA;AADJ;;AAKA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,SAAA;EAEA,YAAA;EACA,mBAAA;EACA,yCAAA;EACA,kBAAA;EACA,QAAA;EACA,mBAAA;EACA,YAAA;AAHF;AAKE;EACE,uBAAA;EACA,cD3HY;EC4HZ,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,yCAAA;EACA,kBAAA;AAHJ;AAKI;EACE,yCAAA;EACA,4BAAA;AAHN;AAMG;EACG,yBD1IU;EC2IV,gCAAA;EACA,cAAA;AAJN;AAQE;EACE,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;EACA,cDlJQ;AC4IZ;;AAWA;EACE,WAAA;AARF;;AAYE;EACE,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDtKY;ECuKZ,WAAA;AATJ;AAaI;EACE,0BAAA;AAXN;AAeE;EACE,YAAA;EACA,eAAA;EACA,oBAAA;AAbJ;AAeI;EACE,eAAA;EACA,gCAAA;AAbN;AAiBE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD1LQ;AC2KZ;;AAoBA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AAjBF;;AAoBA;EACE,eAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,iBAAA;EACA,SAAA;AAjBF;AAmBE;EACE,cDzLY;EC0LZ,eAAA;EACA,gBAAA;EACA,gBAAA;AAjBJ;AAoBE;EACE,yBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAlBJ;AAoBI;EACE,cDzMU;EC0MV,eAAA;AAlBN;AAsBE;EACE,wCAAA;EACA,4BAAA;EACA,oBAAA;AApBJ;AAsBI;EACE,yBAAA;EACA,2CAAA;AApBN;AAqBM;EACE,cDlPQ;AC+NhB;AAuBI;EACE,cDlPM;AC6NZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","\n@import \"src/app/theme/styles/components/_colors.scss\";\n\n.content-container {\n    background-color: var(--primary-background);\n    padding-top: 48px;\n    padding-bottom: 48px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    row-gap: 64px;\n  }\n  .airplane-tickets-header{\n    background: url(\"../../../../../assets/images/others/images-client/airplane-tickets-hp.jpg\") center no-repeat;\n    background-size: cover;\n    height:768px;\n  }\n\n  h4{\n    font-weight: 700;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n    color: #231F20;\n    margin-bottom: 13px;\n    i{\n      margin-right:5px;\n    }\n  }\n\n.img-container{\n        background: url(\"../../../../../assets/images/others/images-client/ariline-tickets.jpg\") center no-repeat;\n        background-size: cover;\n  }\n\n  .visibile{\n    display: block;\n\n  }\n  .hidden{\n    display:none;\n  }\n\n  // .airplane-tickets-tab-group{\n  //   .mat-tab-header{\n  //     border:1px solid rgba(36, 57, 138, 0.24)!important;\n  //     border-radius: 20px;\n  //   }\n  // }\n\n//select the type of ticket: round trips or one way\n.ticket-type-group{\n  mat-button-toggle-group{\n    // width: 100%;\n    border: 1px solid $primary-color;\n    border-radius: 8px;\n    background: var(--primary-background);\n    margin-bottom: 48px;\n\n    .mat-button-toggle{\n      // width: 50%;\n      color: $primary-color;\n      border:1px solid var(--primary-background);\n\n\n      &:focus, &:active, &:checked {\n        border:1px solid var(--primary-background);\n        background: $primary-color!important;\n        border-radius: 100px;\n        color:var(--primary-background);\n      }\n\n    }\n  }\n\n  .mat-button-toggle-checked {\n  background-color: $primary-color !important;\n  color: $background-primary !important;\n  border: 1px solid var(--primary-background);\n  border-radius: 8px;\n  }\n}\n\n//set travel class\n.travel-class-group{\n  display: flex;\n  justify-content: space-between;\n  border:none!important;\n  margin-bottom: 13px;\n  flex-wrap: wrap;\n\n  .mat-button-toggle{\n    color: $primary-color;\n    background-color: white;\n    border: 1px solid $primary-color!important;\n    border-radius: 8px;\n    min-width: 120px;\n\n  }\n  .mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n    background-color: $primary-color;\n    color: white;\n  }\n}\n\n.noPassengers{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 12px;\n  margin-bottom: 13px;\n  gap: 56px;\n  // width: 756px;\n  height: 52px;\n  background: #FFFFFF;\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n  order: 0;\n  align-self: stretch;\n  flex-grow: 0;\n\n  button{\n    background-color: white;\n    color: $primary-color;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 35px;\n    width: 35px;\n    border: 1px solid rgba(36, 57, 138, 0.24);\n    border-radius: 8px;\n\n    &:hover {\n      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);\n      transition: ease-in-out 0.3s;\n    }\n\n   &:focus, &:active, &:checked {\n      background-color: $primary-color;\n      color: var(--primary-background);\n      transition: 0s;\n    }\n  }\n\n  p{\n    margin: 0px;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 24px;\n    letter-spacing: 0.1px;\n    color: $paragraph;\n  }\n\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.airport-class{\n  .location-filter-input {\n    border: none;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 20px;\n    color: $primary-color;\n    width: 10ch;\n  }\n\n  .active-filter {\n    p {\n      text-decoration: underline;\n    }\n  }\n\n  .btn-search {\n    height: 50px;\n    padding: 0 48px;\n    border-radius: 100px;\n\n    i {\n      font-size: 20px;\n      color: var(--primary-background);\n    }\n  }\n\n  .panel-title {\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 20px;\n    color: $paragraph;\n  }\n\n}\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n\n  p {\n    color: $inactive-color;\n    font-size: 18px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .destination-icon {\n    border: 1px solid $inactive-color;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      color: $inactive-color;\n      font-size: 22px;\n    }\n  }\n\n  &:hover, &:focus {\n    background-color: rgba($primary-color, 0.2);\n    transition: 0.3s ease-in-out;\n    outline: transparent;\n\n    .destination-icon {\n      border: 1px solid $primary-color;\n      background-color: var(--primary-background);\n      i {\n        color: $primary-color;\n      }\n    }\n\n    p {\n      color: $paragraph;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 40932:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/train-tickets/train-tickets.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.train-tickets-header {\n  background: url('train-ticket-hp.jpg') center no-repeat;\n  background-size: cover;\n  height: 768px;\n}\n\nh4 {\n  font-weight: 700;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  margin-bottom: 13px;\n}\nh4 i {\n  margin-right: 5px;\n}\n\n.img-container {\n  background: url('train-side.jpg') center no-repeat;\n  background-size: cover;\n}\n\n.ticket-type-group mat-button-toggle-group {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  background: var(--primary-background);\n  margin-bottom: 48px;\n}\n.ticket-type-group mat-button-toggle-group .mat-button-toggle {\n  color: #24398A;\n  border: 1px solid var(--primary-background);\n}\n.ticket-type-group mat-button-toggle-group .mat-button-toggle:focus, .ticket-type-group mat-button-toggle-group .mat-button-toggle:active, .ticket-type-group mat-button-toggle-group .mat-button-toggle:checked {\n  border: 1px solid var(--primary-background);\n  background: #24398A !important;\n  border-radius: 100px;\n  color: var(--primary-background);\n}\n.ticket-type-group .mat-button-toggle-checked {\n  background-color: #24398A !important;\n  color: #FFFFFF !important;\n  border: 1px solid var(--primary-background);\n  border-radius: 8px;\n}\n\n.travel-class-group {\n  display: flex;\n  justify-content: space-between;\n  border: none !important;\n  margin-bottom: 13px;\n  flex-wrap: wrap;\n}\n.travel-class-group .mat-button-toggle {\n  color: #24398A;\n  background-color: white;\n  border: 1px solid #24398A !important;\n  border-radius: 8px;\n  min-width: 120px;\n}\n.travel-class-group .mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n  background-color: #24398A;\n  color: white;\n}\n\n.noPassengers {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 12px;\n  margin-bottom: 13px;\n  gap: 56px;\n  height: 52px;\n  background: #FFFFFF;\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n  order: 0;\n  align-self: stretch;\n  flex-grow: 0;\n}\n.noPassengers button {\n  background-color: white;\n  color: #24398A;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  width: 35px;\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n}\n.noPassengers button:hover {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);\n  transition: ease-in-out 0.3s;\n}\n.noPassengers button:focus, .noPassengers button:active, .noPassengers button:checked {\n  background-color: #24398A;\n  color: var(--primary-background);\n  transition: 0s;\n}\n.noPassengers p {\n  margin: 0px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.1px;\n  color: #231F20;\n}\n\n.mat-form-field {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/transportation/train-tickets/train-tickets.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACI,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAiBJ;;AAfE;EACE,uDAAA;EACA,sBAAA;EACA,aAAA;AAkBJ;;AAfE;EACE,gBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,mBAAA;AAkBJ;AAjBI;EACE,iBAAA;AAmBN;;AAfA;EACQ,kDAAA;EACA,sBAAA;AAkBR;;AAdI;EAEE,yBAAA;EACA,kBAAA;EACA,qCAAA;EACA,mBAAA;AAgBN;AAdM;EAEE,cD7CQ;EC8CR,2CAAA;AAeR;AAZQ;EACE,2CAAA;EACA,8BAAA;EACA,oBAAA;EACA,gCAAA;AAcV;AARI;EACA,oCAAA;EACA,yBAAA;EACA,2CAAA;EACA,kBAAA;AAUJ;;AALE;EACE,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AAQJ;AANI;EACE,cD5EU;EC6EV,uBAAA;EACA,oCAAA;EACA,kBAAA;EACA,gBAAA;AAQN;AALI;EACE,yBDpFU;ECqFV,YAAA;AAON;;AAHE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,SAAA;EAEA,YAAA;EACA,mBAAA;EACA,yCAAA;EACA,kBAAA;EACA,QAAA;EACA,mBAAA;EACA,YAAA;AAKJ;AAHI;EACE,uBAAA;EACA,cD3GU;EC4GV,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,yCAAA;EACA,kBAAA;AAKN;AAHM;EACE,yCAAA;EACA,4BAAA;AAKR;AAFK;EACG,yBD1HQ;EC2HR,gCAAA;EACA,cAAA;AAIR;AAAI;EACE,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;EACA,cDlIM;ACoIZ;;AAEA;EACE,WAAA;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","\n@import \"src/app/theme/styles/components/_colors.scss\";\n\n.content-container {\n    background-color: var(--primary-background);\n    padding-top: 48px;\n    padding-bottom: 48px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    row-gap: 64px;\n  }\n  .train-tickets-header{\n    background: url(\"../../../../../assets/images/others/images-client/train-ticket-hp.jpg\") center no-repeat;\n    background-size: cover;\n    height:768px;\n  }\n\n  h4{\n    font-weight: 700;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n    color: #231F20;\n    margin-bottom: 13px;\n    i{\n      margin-right:5px;\n    }\n  }\n\n.img-container{\n        background: url(\"../../../../../assets/images/others/images-client/train-side.jpg\") center no-repeat;\n        background-size: cover;\n  }\n\n  .ticket-type-group{\n    mat-button-toggle-group{\n      // width: 100%;\n      border: 1px solid $primary-color;\n      border-radius: 8px;\n      background: var(--primary-background);\n      margin-bottom: 48px;\n\n      .mat-button-toggle{\n        // width: 50%;\n        color: $primary-color;\n        border:1px solid var(--primary-background);\n\n\n        &:focus, &:active, &:checked {\n          border:1px solid var(--primary-background);\n          background: $primary-color!important;\n          border-radius: 100px;\n          color:var(--primary-background);\n        }\n\n      }\n    }\n\n    .mat-button-toggle-checked {\n    background-color: $primary-color !important;\n    color: $background-primary !important;\n    border: 1px solid var(--primary-background);\n    border-radius: 8px;\n    }\n  }\n\n  //set travel class\n  .travel-class-group{\n    display: flex;\n    justify-content: space-between;\n    border:none!important;\n    margin-bottom: 13px;\n    flex-wrap: wrap;\n\n    .mat-button-toggle{\n      color: $primary-color;\n      background-color: white;\n      border: 1px solid $primary-color!important;\n      border-radius: 8px;\n      min-width: 120px;\n\n    }\n    .mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n      background-color: $primary-color;\n      color: white;\n    }\n  }\n\n  .noPassengers{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0px 12px;\n    margin-bottom: 13px;\n    gap: 56px;\n    // width: 756px;\n    height: 52px;\n    background: #FFFFFF;\n    border: 1px solid rgba(36, 57, 138, 0.24);\n    border-radius: 8px;\n    order: 0;\n    align-self: stretch;\n    flex-grow: 0;\n\n    button{\n      background-color: white;\n      color: $primary-color;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 35px;\n      width: 35px;\n      border: 1px solid rgba(36, 57, 138, 0.24);\n      border-radius: 8px;\n\n      &:hover {\n        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);\n        transition: ease-in-out 0.3s;\n      }\n\n     &:focus, &:active, &:checked {\n        background-color: $primary-color;\n        color: var(--primary-background);\n        transition: 0s;\n      }\n    }\n\n    p{\n      margin: 0px;\n      font-style: normal;\n      font-weight: 500;\n      font-size: 20px;\n      line-height: 24px;\n      letter-spacing: 0.1px;\n      color: $paragraph;\n    }\n  }\n\n.mat-form-field {\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88323:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/menu/menu.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\nh4 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\nh5 {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  color: #24398A;\n}\n\np {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/menu/menu.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDDQ;ACmBZ;;AAfA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDbY;AC+BhB;;AAfA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDfQ;ACiCZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\nh4{\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 140%;\n    letter-spacing: -0.02em;\n    color: $paragraph;\n}\n\nh5{\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 140%;\n    color: $primary-color;\n}\n\np{\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 140%;\n    color: $paragraph;\n    //opacity: 0.5 ;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83243:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/picker-items/picker-items.component.scss?ngResource ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.row-gap {\n  row-gap: 24px;\n}\n\n.guests-selector {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border: 1px solid #858495;\n  border-radius: 8px;\n}\n.guests-selector button {\n  border: 1px solid #858495;\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.guests-selector button i {\n  color: #24398A;\n  font-size: 24px;\n}\n.guests-selector button:hover {\n  background-color: #24398A;\n  transition: 0.3s ease-in-out;\n}\n.guests-selector button:hover i {\n  color: var(--primary-background);\n}\n.guests-selector button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.guests-selector p {\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/picker-items/picker-items.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDDU;ACmBZ;;AAfA;EACE,aAAA;AAkBF;;AAfA;EACE,WAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,aAAA;EAEA,yBAAA;EACA,kBAAA;AAiBF;AAfE;EACE,yBAAA;EACA,2CAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAiBJ;AAfI;EACE,cDlCU;ECmCV,eAAA;AAiBN;AAdI;EACE,yBDvCU;ECwCV,4BAAA;AAgBN;AAfM;EACE,gCAAA;AAiBR;AAbI;EACE,mBAAA;EACA,YAAA;AAeN;AAXE;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AAaJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: $paragraph;\n}\n\n.row-gap {\n  row-gap: 24px;\n}\n\n.guests-selector {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n\n  border: 1px solid $inactive-color;\n  border-radius: 8px;\n\n  button {\n    border: 1px solid $inactive-color;\n    background-color: var(--primary-background);\n    border-radius: 8px;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      color: $primary-color;\n      font-size: 24px;\n    }\n\n    &:hover {\n      background-color: $primary-color;\n      transition: 0.3s ease-in-out;\n      i {\n        color: var(--primary-background);\n      }\n    }\n\n    &:disabled {\n      cursor: not-allowed;\n      opacity: 0.5;\n    }\n  }\n\n  p {\n    margin-bottom: 0;\n    font-size: 16px;\n    font-weight: 700;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 90617:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/products-list/products-list.component.scss?ngResource ***!
  \*******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.product-cards-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.product-card {\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.img-container {\n  position: relative;\n  flex-shrink: 0;\n  overflow: hidden;\n  height: 150px;\n}\n.img-container img {\n  object-fit: cover;\n  object-position: center;\n  width: 100%;\n  height: 100%;\n}\n.img-container .favorite-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(35, 31, 32, 0.08);\n  border: 1px solid var(--primary-background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-container .favorite-btn i {\n  font-size: 14px;\n  color: var(--primary-background);\n}\n\n.top-half {\n  padding: 10px;\n}\n.top-half p {\n  font-weight: 700;\n  font-size: 20px;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin-bottom: 0;\n}\n\n.bottom-half {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.bottom-half button {\n  flex-grow: 2;\n  border-radius: unset;\n}\n.bottom-half button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.bottom-half p {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  flex-grow: 1;\n  text-align: end;\n  margin-bottom: 0;\n  color: #69C98C;\n  font-weight: 700;\n  font-size: 20px;\n}\n.bottom-half p i {\n  font-size: 16px;\n  color: #858495;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/products-list/products-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDDU;ACmBZ;;AAfA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AAkBF;;AAfA;EACE,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;AAkBF;;AAfA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,iBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;AAkBJ;AAfE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,2CAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAiBJ;AAfI;EACE,eAAA;EACA,gCAAA;AAiBN;;AAZA;EACE,aAAA;AAeF;AAdE;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cD9DY;EC+DZ,gBAAA;AAgBJ;;AAZA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;AAeF;AAbE;EACE,YAAA;EACA,oBAAA;AAeJ;AAbI;EACE,mBAAA;EACA,YAAA;AAeN;AAXE;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,cDlEU;ECmEV,gBAAA;EACA,eAAA;AAaJ;AAXI;EACE,eAAA;EACA,cDtEU;ACmFhB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: $paragraph;\n}\n\n.product-cards-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.product-card {\n  border: 1px solid rgba($primary-color, 0.24);\n  border-radius: 8px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.img-container {\n  position: relative;\n  flex-shrink: 0;\n  overflow: hidden;\n  height: 150px;\n\n  img {\n    object-fit: cover;\n    object-position: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  .favorite-btn {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    background: rgba($title, 0.08);\n    border: 1px solid var(--primary-background);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      font-size: 14px;\n      color: var(--primary-background);\n    }\n  }\n}\n\n.top-half {\n  padding: 10px;\n  p {\n    font-weight: 700;\n    font-size: 20px;\n    letter-spacing: -0.02em;\n    color: $primary-color;\n    margin-bottom: 0;\n  }\n}\n\n.bottom-half {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n\n  button {\n    flex-grow: 2;\n    border-radius: unset;\n\n    &:disabled {\n      cursor: not-allowed;\n      opacity: 0.5;\n    }\n  }\n\n  p {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 4px;\n    flex-grow: 1;\n    text-align: end;\n    margin-bottom: 0;\n    color: $active-color;\n    font-weight: 700;\n    font-size: 20px;\n\n    i {\n      font-size: 16px;\n      color: $inactive-color;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 98128:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/rooms-list/rooms-list.component.scss?ngResource ***!
  \*************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.payment-details {\n  font-size: 16px !important;\n}\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.booking-items-container {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 16px;\n  padding: 12px;\n  margin-bottom: 32px;\n}\n\n.room-price-footer p {\n  margin-bottom: 0;\n}\n.room-price-footer p:first-child {\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 140%;\n  text-align: right;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n.room-price-footer p:nth-child(2) {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 140%;\n  text-align: right;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.row {\n  row-gap: 24px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/rooms-list/rooms-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,0BAAA;AAkBF;;AAfA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDLU;ACuBZ;;AAfA;EACE,yCAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;AAkBF;;AAdE;EACE,gBAAA;AAiBJ;AAfE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,uBAAA;EACA,cD9BY;AC+ChB;AAdE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDlCQ;ACkDZ;;AAZA;EACE,aAAA;AAeF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.payment-details {\n  font-size: 16px !important;\n}\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: $paragraph;\n}\n\n.booking-items-container {\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 16px;\n  padding: 12px;\n  margin-bottom: 32px;\n}\n\n.room-price-footer {\n  p {\n    margin-bottom: 0;\n  }\n  p:first-child {\n    font-weight: 700;\n    font-size: 30px;\n    line-height: 140%;\n    text-align: right;\n    letter-spacing: -0.02em;\n    color: $primary-color;\n  }\n\n  p:nth-child(2) {\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 140%;\n    text-align: right;\n    letter-spacing: -0.02em;\n    color: $paragraph;\n  }\n}\n\n.row {\n  row-gap: 24px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 36809:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/seat-selection/seat-selection.component.scss?ngResource ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.seat-price-footer {\n  margin-top: 16px;\n}\n.seat-price-footer p {\n  margin-bottom: 0;\n}\n.seat-price-footer p:first-child {\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 140%;\n  text-align: right;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n.seat-price-footer p:nth-child(2) {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 140%;\n  text-align: right;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/seat-selection/seat-selection.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDDU;ACmBZ;;AAfA;EACE,gBAAA;AAkBF;AAhBE;EACE,gBAAA;AAkBJ;AAhBE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDrBY;ACuChB;AAfE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDzBQ;AC0CZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: $paragraph;\n}\n\n.seat-price-footer {\n  margin-top: 16px;\n\n  p {\n    margin-bottom: 0;\n  }\n  p:first-child {\n    font-weight: 700;\n    font-size: 30px;\n    line-height: 140%;\n    text-align: right;\n    letter-spacing: -0.02em;\n    color: $primary-color;\n  }\n\n  p:nth-child(2) {\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 140%;\n    text-align: right;\n    letter-spacing: -0.02em;\n    color: $paragraph;\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 64266:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/tickets-list/tickets-list.component.scss?ngResource ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.payment-details {\n  font-size: 16px !important;\n}\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.tickets-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.ticket-container {\n  padding: 10px;\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n}\n\n.ticket-name {\n  font-weight: 700;\n  font-size: 20px;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n\n.minWidthPrice {\n  min-width: 50px;\n}\n\n.minWidth {\n  min-width: 200px;\n}\n\n.item-number-selector {\n  display: flex;\n  flex-shrink: 0;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  margin-right: 24px;\n}\n.item-number-selector button {\n  border: 1px solid #858495;\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.item-number-selector button i {\n  color: #24398A;\n  font-size: 24px;\n}\n.item-number-selector button:hover {\n  background-color: #24398A;\n  transition: 0.3s ease-in-out;\n}\n.item-number-selector button:hover i {\n  color: var(--primary-background);\n}\n.item-number-selector button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.item-number-selector p {\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.ticket-price-footer p {\n  margin-bottom: 0;\n}\n.ticket-price-footer p:first-child {\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 140%;\n  text-align: right;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n.ticket-price-footer p:nth-child(2) {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 140%;\n  text-align: right;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/tickets-list/tickets-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,0BAAA;AAkBF;;AAfA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDLU;ACuBZ;;AAfA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;EACA,mBAAA;AAkBF;;AAfA;EACE,aAAA;EACA,yCAAA;EACA,kBAAA;AAkBF;;AAfA;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cD9Bc;ACgDhB;;AAdA;EACE,eAAA;AAiBF;;AAdA;EACE,gBAAA;AAiBF;;AAdA;EACE,aAAA;EACA,cAAA;EACA,YAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,kBAAA;AAiBF;AAfE;EACE,yBAAA;EACA,2CAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAiBJ;AAfI;EACE,cD9DU;EC+DV,eAAA;AAiBN;AAdI;EACE,yBDnEU;ECoEV,4BAAA;AAgBN;AAfM;EACE,gCAAA;AAiBR;AAbI;EACE,mBAAA;EACA,YAAA;AAeN;AAXE;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AAaJ;;AARE;EACE,gBAAA;AAWJ;AATE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDjGY;AC4GhB;AARE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDrGQ;AC+GZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.payment-details {\n  font-size: 16px !important;\n}\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: $paragraph;\n}\n\n.tickets-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.ticket-container {\n  padding: 10px;\n  border: 1px solid rgba($primary-color, 0.24);\n  border-radius: 8px;\n}\n\n.ticket-name {\n  font-weight: 700;\n  font-size: 20px;\n  letter-spacing: -0.02em;\n  color: $primary-color;\n\n}\n\n.minWidthPrice{\n  min-width: 50px;\n}\n\n.minWidth{\n  min-width: 200px;\n}\n\n.item-number-selector {\n  display: flex;\n  flex-shrink: 0;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  margin-right: 24px;\n\n  button {\n    border: 1px solid $inactive-color;\n    background-color: var(--primary-background);\n    border-radius: 8px;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      color: $primary-color;\n      font-size: 24px;\n    }\n\n    &:hover {\n      background-color: $primary-color;\n      transition: 0.3s ease-in-out;\n      i {\n        color: var(--primary-background);\n      }\n    }\n\n    &:disabled {\n      cursor: not-allowed;\n      opacity: 0.5;\n    }\n  }\n\n  p {\n    margin-bottom: 0;\n    font-size: 16px;\n    font-weight: 700;\n  }\n}\n\n.ticket-price-footer {\n  p {\n    margin-bottom: 0;\n  }\n  p:first-child {\n    font-weight: 700;\n    font-size: 30px;\n    line-height: 140%;\n    text-align: right;\n    letter-spacing: -0.02em;\n    color: $primary-color;\n  }\n\n  p:nth-child(2) {\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 140%;\n    text-align: right;\n    letter-spacing: -0.02em;\n    color: $paragraph;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 64956:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/time-slots-list/time-slots-list.component.scss?ngResource ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.payment-details {\n  font-size: 12px;\n  color: #858495;\n  font-weight: 400;\n}\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.time-slot-cards-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.time-slot-card {\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.top-half {\n  padding: 10px;\n}\n.top-half p {\n  font-weight: 700;\n  font-size: 20px;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin-bottom: 0;\n}\n\n.bottom-half {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.bottom-half button {\n  flex-grow: 2;\n  border-radius: unset;\n}\n.bottom-half button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.bottom-half p {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  flex-grow: 1;\n  text-align: end;\n  margin-bottom: 0;\n  color: #69C98C;\n  font-weight: 700;\n  font-size: 20px;\n}\n.bottom-half p i {\n  font-size: 16px;\n  color: #858495;\n}\n\n.time-slots-container .mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.time-slots-container .mat-radio-group .time-slot {\n  max-width: 335px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 20px;\n  padding: 8px 12px;\n}\n.time-slots-container .mat-radio-group .time-slot .mat-radio-button {\n  width: 100%;\n}\n\n:host ::ng-deep .time-slots-container .mat-radio-label {\n  justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/time-slots-list/time-slots-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,eAAA;EACA,cDwBc;ECvBd,gBAAA;AAkBF;;AAfA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDPU;ACyBZ;;AAfA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AAkBF;;AAfA;EACE,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;AAkBF;;AAfA;EACE,aAAA;AAkBF;AAjBE;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cDnCY;ECoCZ,gBAAA;AAmBJ;;AAfA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;AAkBF;AAhBE;EACE,YAAA;EACA,oBAAA;AAkBJ;AAhBI;EACE,mBAAA;EACA,YAAA;AAkBN;AAdE;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,cDvCU;ECwCV,gBAAA;EACA,eAAA;AAgBJ;AAdI;EACE,eAAA;EACA,cD3CU;AC2DhB;;AAXA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAcF;AAZE;EACE,gBAAA;EACA,yCAAA;EACA,mBAAA;EACA,iBAAA;AAcJ;AAZI;EACE,WAAA;AAcN;;AATA;EACE,8BAAA;AAYF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.payment-details{\n  font-size: 12px;\n  color: $inactive-color;\n  font-weight: 400;\n}\n\n.booking-section-title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: $paragraph;\n}\n\n.time-slot-cards-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.time-slot-card {\n  border: 1px solid rgba($primary-color, 0.24);\n  border-radius: 8px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.top-half {\n  padding: 10px;\n  p {\n    font-weight: 700;\n    font-size: 20px;\n    letter-spacing: -0.02em;\n    color: $primary-color;\n    margin-bottom: 0;\n  }\n}\n\n.bottom-half {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n\n  button {\n    flex-grow: 2;\n    border-radius: unset;\n\n    &:disabled {\n      cursor: not-allowed;\n      opacity: 0.5;\n    }\n  }\n\n  p {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 4px;\n    flex-grow: 1;\n    text-align: end;\n    margin-bottom: 0;\n    color: $active-color;\n    font-weight: 700;\n    font-size: 20px;\n\n    i {\n      font-size: 16px;\n      color: $inactive-color;\n    }\n  }\n}\n\n.time-slots-container .mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  .time-slot {\n    max-width: 335px;\n    border: 1px solid rgba($primary-color, 0.16);\n    border-radius: 20px;\n    padding: 8px 12px;\n\n    .mat-radio-button {\n      width: 100%;\n    }\n  }\n}\n\n:host ::ng-deep .time-slots-container .mat-radio-label {\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 98140:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/view-simple-resource.component.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.24), rgba(35, 31, 32, 0.24));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n.content-container .container:first-child {\n  margin-bottom: -64px;\n}\n\n.resource-title-bar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.resource-title-bar a {\n  text-decoration: none;\n}\n.resource-title-bar a:hover {\n  color: var(--primary-background);\n}\n.resource-title-bar .resource-title {\n  margin-bottom: 0;\n  color: #24398A;\n  font-size: clamp(1.25rem, 2vw + 1rem, 2.5rem);\n}\n\n.favorite-btn {\n  /*position: absolute;\n  top: 12px;\n  right: 12px;*/\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  /*display: flex;\n  align-items: center;\n  justify-content: center;*/\n}\n.favorite-btn i {\n  font-size: 14px;\n  color: var(--primary-background);\n}\n.favorite-btn.active {\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.32) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n  border: 1px solid #24398A;\n  transition: background 300ms ease-in-out, border 300ms ease-in-out;\n}\n.favorite-btn.inactive {\n  background: rgba(35, 31, 32, 0.08);\n  border: 1px solid var(--primary-background);\n}\n.favorite-btn.inactive:hover {\n  background: rgba(36, 57, 138, 0.16);\n  border-color: #24398A;\n}\n.favorite-btn.inactive:hover i {\n  color: #FFCC29;\n}\n\n.resource-subtitle {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 24px;\n  line-height: 140%;\n}\n.resource-subtitle .attributes-list span {\n  color: #231F20;\n  font-weight: 400;\n}\n.resource-subtitle .dollars span {\n  font-weight: 700;\n  letter-spacing: -2px;\n}\n.resource-subtitle .dollars:before {\n  content: \",\";\n  color: #231F20;\n  margin-left: 2px;\n  margin-right: 5px;\n}\n.resource-subtitle .percentage {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: #24398A;\n  font-weight: 500;\n  line-height: 140%;\n}\n.resource-subtitle .percentage i {\n  font-weight: 400;\n  margin-left: 8px;\n  line-height: 140%;\n}\n\n.bold-dollar {\n  color: #24398A;\n}\n\n.normal-dollar {\n  color: #858495;\n}\n\n.itinerary-modal {\n  padding: 50px 48px 0 48px;\n}\n.itinerary-modal .btn-close-modal {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  height: 40px;\n  width: 40px;\n  z-index: 5;\n}\n.itinerary-modal .background-container {\n  border-radius: 8px;\n  overflow: hidden;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domain-listing/view-simple-resource/view-simple-resource.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAdE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAgBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF;AAbE;EACE,oBAAA;AAeJ;;AAXA;EACE,aAAA;EACA,eAAA;EACA,mBAAA;AAcF;AAXE;EACE,qBAAA;AAaJ;AAZI;EACE,gCAAA;AAcN;AAVE;EACE,gBAAA;EACA,cDrDY;ECsDZ,6CAAA;AAYJ;;AARA;EACE;;eAAA;EAGA,WAAA;EACA,YAAA;EACA,mBAAA;EACA;;2BAAA;AAaF;AATE;EACE,eAAA;EACA,gCAAA;AAWJ;AARE;EACE,oHAAA;EACA,yBAAA;EACA,kEAAA;AAUJ;AAPE;EACE,kCAAA;EACA,2CAAA;AASJ;AANE;EACE,mCAAA;EACA,qBDvFY;AC+FhB;AANI;EACE,cDxFY;ACgGlB;;AAHA;EACE,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,eAAA;EACA,iBAAA;AAMF;AAHI;EACE,cDnGM;ECoGN,gBAAA;AAKN;AAAI;EACE,gBAAA;EACA,oBAAA;AAEN;AACI;EACE,YAAA;EACA,cDhHM;ECiHN,gBAAA;EACA,iBAAA;AACN;AAGE;EACE,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,cD/HY;ECgIZ,gBAAA;EACA,iBAAA;AADJ;AAGI;EACE,gBAAA;EACA,gBAAA;EACA,iBAAA;AADN;;AAeA;EACE,cDrJc;ACyIhB;;AAeA;EACE,cD9Hc;ACkHhB;;AAeA;EACE,yBAAA;AAZF;AAcE;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;AAZJ;AAeE;EACE,kBAAA;EACA,gBAAA;AAbJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.24), rgba($title, 0.24));\n    //backdrop-filter: blur(2px);\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n\n  .container:first-child {\n    margin-bottom: -64px;\n  }\n}\n\n.resource-title-bar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  //justify-content: space-between;\n\n  a {\n    text-decoration: none;\n    &:hover {\n      color: var(--primary-background);\n    }\n  }\n\n  .resource-title {\n    margin-bottom: 0;\n    color: $primary-color;\n    font-size: clamp( 1.25rem , 2vw + 1rem , 2.5rem);\n  }\n}\n\n.favorite-btn {\n  /*position: absolute;\n  top: 12px;\n  right: 12px;*/\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  /*display: flex;\n  align-items: center;\n  justify-content: center;*/\n\n  i {\n    font-size: 14px;\n    color: var(--primary-background);\n  }\n\n  &.active {\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.32) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n    border: 1px solid $primary-color;\n    transition: background 300ms ease-in-out, border 300ms ease-in-out;\n  }\n\n  &.inactive {\n    background: rgba($title, 0.08);\n    border: 1px solid var(--primary-background);\n  }\n\n  &.inactive:hover {\n    background: rgba($primary-color, 0.16);\n    border-color: $primary-color;\n\n    i {\n      color: $secondary-color;\n    }\n  }\n}\n\n.resource-subtitle {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 24px;\n  line-height: 140%;\n\n  .attributes-list {\n    span {\n      color: $paragraph;\n      font-weight: 400;\n    }\n  }\n\n  .dollars {\n    span {\n      font-weight: 700;\n      letter-spacing: -2px;\n    }\n\n    &:before {\n      content: ',';\n      color: $paragraph;\n      margin-left: 2px;\n      margin-right: 5px;\n    }\n  }\n\n  .percentage {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    color: $primary-color;\n    font-weight: 500;\n    line-height: 140%;\n\n    i {\n      font-weight: 400;\n      margin-left: 8px;\n      line-height: 140%;\n    }\n\n    //&:before {\n    //  content: ',';\n    //  color: $paragraph;\n    //  margin-left: 2px;\n    //  margin-right: 5px;\n    //  font-weight: 400;\n    //}\n  }\n\n}\n\n.bold-dollar {\n  color: $primary-color;\n}\n\n.normal-dollar {\n  color: $inactive-color;\n}\n\n.itinerary-modal {\n  padding: 50px 48px 0 48px;\n\n  .btn-close-modal {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    height: 40px;\n    width: 40px;\n    z-index: 5;\n  }\n\n  .background-container {\n    border-radius: 8px;\n    overflow: hidden;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 10533:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/category-card/category-card.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.category {\n  height: 192px;\n  width: 100%;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.category img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease-out;\n}\n.category:hover img {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n.category .selected-icon {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 24px;\n  width: 24px;\n  border: 1px solid var(--primary-background);\n  border-radius: 12px;\n  padding: 2px;\n}\n.category .selected-icon .icon-background {\n  background-color: #34A853;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.category .selected-icon .icon-background i {\n  color: var(--primary-background);\n}\n.category .text-background {\n  width: 100%;\n  padding: 15px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background: linear-gradient(266.69deg, rgba(36, 57, 138, 0) 0%, #24398A 100%);\n}\n.category .text-background h2 {\n  color: var(--primary-background);\n  margin-bottom: 0;\n  font-size: 24px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/category-card/category-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,aAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;AAkBF;AAhBE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,mCAAA;AAkBJ;AAfE;EAEE,iCAAA;AAgBJ;AAbE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,2CAAA;EACA,mBAAA;EACA,YAAA;AAeJ;AAbI;EACE,yBDUY;ECTZ,WAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAeN;AAbM;EACE,gCAAA;AAeR;AAVE;EACE,WAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,6EAAA;AAYJ;AAVI;EACE,gCAAA;EACA,gBAAA;EACA,eAAA;AAYN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.category {\n  height: 192px;\n  width: 100%;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.3s ease-out;\n  }\n\n  &:hover img {\n    //transform: scale(1.05);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  .selected-icon {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 24px;\n    width: 24px;\n    border: 1px solid var(--primary-background);\n    border-radius: 12px;\n    padding: 2px;\n\n    .icon-background {\n      background-color: $active-btn-color;\n      width: 100%;\n      height: 100%;\n      border-radius: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      i {\n        color: var(--primary-background);\n      }\n    }\n  }\n\n  .text-background {\n    width: 100%;\n    padding: 15px 12px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    background: linear-gradient(266.69deg, rgba($primary-color, 0) 0%, $primary-color 100%);\n\n    h2 {\n      color: var(--primary-background);\n      margin-bottom: 0;\n      font-size: 24px;\n    }\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 16486:
/*!***********************************************************************************!*\
  !*** ./src/app/standalone-components/checkout/checkout.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\np {\n  margin-bottom: 0;\n}\n\n.row-gap-24 {\n  row-gap: 24px;\n}\n\n.page-background {\n  background-color: var(--primary-background);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.page-title {\n  font-weight: 700;\n  font-size: clamp(1.5rem, 1.3rem + 1vw, 2.5rem);\n  line-height: 140%;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin: 48px auto;\n}\n\n.column-container {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n}\n\n.special-request-container {\n  margin: 0 -20px;\n  padding: 20px;\n  background: rgba(255, 244, 142, 0.24);\n}\n.special-request-container h3 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 160%;\n  color: #231F20;\n}\n.special-request-container p {\n  color: #231F20;\n}\n\n.section-title {\n  font-weight: 700;\n  font-size: clamp(1rem, 0.85rem + 0.75vw, 1.75rem);\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin-bottom: 40px;\n}\n.section-title i {\n  margin-right: 24px;\n}\n\n.details-group-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.details-group p {\n  color: #231F20;\n  letter-spacing: -0.02em;\n  margin: 0;\n  font-size: 16px;\n}\n.details-group p {\n  font-weight: 700;\n  line-height: 140%;\n}\n.details-group p:first-child {\n  font-weight: 400;\n  line-height: 160%;\n  opacity: 0.56;\n}\n\n.resource-img-container {\n  width: 100%;\n  height: 100%;\n  max-height: 222px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.resource-img-container img {\n  width: inherit;\n  height: inherit;\n  object-fit: cover;\n}\n\n.checkout-details-container {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.checkout-items {\n  padding: 20px 20px 8px;\n  display: flex;\n  flex-direction: column;\n}\n\n.text-you-selected {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.checkout-total-items {\n  padding: 8px 20px;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.08), rgba(36, 57, 138, 0.08)), #FFFFFF;\n}\n\n.total-items-bold {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 160%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.total-items-normal {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 160%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  opacity: 0.72;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.checkout-total-price {\n  padding: 8px 20px;\n  background: #24398A;\n}\n\n.total-price-bold {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--primary-background);\n  font-weight: 600;\n  font-size: 20px;\n  letter-spacing: -0.02em;\n}\n.total-price-bold .line-through-price {\n  text-decoration: line-through;\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--primary-background);\n  opacity: 0.72;\n}\n\n.loyalty-points-container p {\n  margin-bottom: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/checkout/checkout.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;AAkBF;;AAfA;EACE,aAAA;AAkBF;;AAfA;EACE,2CAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AAkBF;;AAfA;EACE,WAAA;AAkBF;;AAfA;EACE,gBAAA;EACA,8CAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,cAAA;EACA,iBAAA;AAkBF;;AAfA;EACE,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAkBF;;AAfA;EACE,eAAA;EACA,aAAA;EACA,qCAAA;AAkBF;AAhBE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD7CI;AC+DR;AAfE;EACE,cDhDQ;ACiEZ;;AAbA;EACE,gBAAA;EACA,iDAAA;EACA,iBAAA;EACA,uBAAA;EACA,cD9Dc;EC+Dd,mBAAA;AAgBF;AAdE;EACE,kBAAA;AAgBJ;;AAZA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AAeF;;AAXE;EACE,cDzEQ;EC0ER,uBAAA;EACA,SAAA;EACA,eAAA;AAcJ;AAZE;EACE,gBAAA;EACA,iBAAA;AAcJ;AAZE;EACE,gBAAA;EACA,iBAAA;EACA,aAAA;AAcJ;;AAVA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAaF;AAXE;EACE,cAAA;EACA,eAAA;EACA,iBAAA;AAaJ;;AATA;EACE,yCAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AAYF;;AATA;EACE,sBAAA;EACA,aAAA;EACA,sBAAA;AAYF;;AATA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cD1HU;ACsIZ;;AATA;EACE,iBAAA;EACA,4FAAA;AAYF;;AATA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDvIU;ECwIV,aAAA;EACA,mBAAA;EACA,8BAAA;AAYF;;AATA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDlJU;ECmJV,aAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAYF;;AATA;EACE,iBAAA;EACA,mBDhKc;AC4KhB;;AATA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gCAAA;EACA,gBAAA;EACA,eAAA;EACA,uBAAA;AAYF;AAVE;EACE,6BAAA;EACA,eAAA;EACA,gBAAA;EACA,gCAAA;EACA,aAAA;AAYJ;;AAPE;EACE,kBAAA;AAUJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../theme/styles/components/colors\";\n\np {\n  margin-bottom: 0;\n}\n\n.row-gap-24 {\n  row-gap: 24px;\n}\n\n.page-background {\n  background-color: var(--primary-background);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.page-title {\n  font-weight: 700;\n  font-size: clamp(1.5rem, 1.3rem + 1vw, 2.5rem);\n  line-height: 140%;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin: 48px auto;\n}\n\n.column-container {\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n}\n\n.special-request-container {\n  margin: 0 -20px;\n  padding: 20px;\n  background: rgba(255, 244, 142, 0.24);\n\n  h3 {\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 160%;\n    color: $title;\n  }\n\n  p {\n    color: $paragraph;\n  }\n}\n\n.section-title {\n  font-weight: 700;\n  font-size: clamp(1rem, 0.85rem + 0.75vw, 1.75rem);\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: $primary-color;\n  margin-bottom: 40px;\n\n  i {\n    margin-right: 24px;\n  }\n}\n\n.details-group-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.details-group {\n  p {\n    color: $paragraph;\n    letter-spacing: -0.02em;\n    margin: 0;\n    font-size: 16px;\n  }\n  p {\n    font-weight: 700;\n    line-height: 140%;\n  }\n  p:first-child {\n    font-weight: 400;\n    line-height: 160%;\n    opacity: 0.56;\n  }\n}\n\n.resource-img-container {\n  width: 100%;\n  height: 100%;\n  max-height: 222px;\n  border-radius: 8px;\n  overflow: hidden;\n\n  img {\n    width: inherit;\n    height: inherit;\n    object-fit: cover;\n  }\n}\n\n.checkout-details-container {\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.checkout-items {\n  padding: 20px 20px 8px;\n  display: flex;\n  flex-direction: column;\n}\n\n.text-you-selected {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: $paragraph;\n}\n\n.checkout-total-items {\n  padding: 8px 20px;\n  background: linear-gradient(0deg, rgba($primary-color, 0.08), rgba($primary-color, 0.08)), #FFFFFF;\n}\n\n.total-items-bold {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 160%;\n  letter-spacing: -0.02em;\n  color: $paragraph;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.total-items-normal {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 160%;\n  letter-spacing: -0.02em;\n  color: $paragraph;\n  opacity: 0.72;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.checkout-total-price {\n  padding: 8px 20px;\n  background: $primary-color;\n}\n\n.total-price-bold {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--primary-background);\n  font-weight: 600;\n  font-size: 20px;\n  letter-spacing: -0.02em;\n\n  .line-through-price {\n    text-decoration: line-through;\n    font-size: 16px;\n    font-weight: 400;\n    color: var(--primary-background);\n    opacity: 0.72;\n  }\n}\n\n.loyalty-points-container{\n  p{\n    margin-bottom: 0px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 62612:
/*!***********************************************************************************************!*\
  !*** ./src/app/standalone-components/editorial-card/editorial-card.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.resource-card {\n  border-radius: 8px;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  max-width: 240px;\n  box-shadow: 0px 4px 8px rgba(35, 31, 32, 0.08);\n  border: 1px solid rgba(36, 57, 138, 0.24);\n}\n\n.img-container {\n  width: 100%;\n  flex-shrink: 0;\n  height: 166px;\n  position: relative;\n}\n.img-container button {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(35, 31, 32, 0.08);\n  border: 1px solid var(--primary-background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-container button i {\n  font-size: 14px;\n  color: var(--primary-background);\n}\n.img-container img {\n  object-fit: cover;\n  height: 100%;\n}\n\n.resource-info {\n  padding: 8px;\n}\n.resource-info > h6 {\n  color: #24398A;\n  font-weight: 700;\n  line-height: 19px;\n  min-height: 38px;\n  margin-bottom: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.resource-info > p {\n  font-size: 12px;\n  line-height: 140%;\n  font-weight: 500;\n}\n.resource-info div p:first-child {\n  color: #24398A;\n}\n.resource-info div p:first-child span {\n  color: #231F20;\n}\n.resource-info div p {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 120%;\n  margin-bottom: 0;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/editorial-card/editorial-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,8CAAA;EACA,yCAAA;AAkBF;;AAfA;EACE,WAAA;EACA,cAAA;EACA,aAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,2CAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAkBJ;AAhBI;EACE,eAAA;EACA,gCAAA;AAkBN;AAdE;EACE,iBAAA;EACA,YAAA;AAgBJ;;AAZA;EACE,YAAA;AAeF;AAbE;EACE,cD9CY;EC+CZ,gBAAA;EACA,iBAAA;EACA,gBAAA;EAGA,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,4BAAA;AAaJ;AAVE;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;AAYJ;AARI;EACE,cDrEU;AC+EhB;AARM;EACE,cDpEA;AC8ER;AANI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAQN;;AAHA;EACE,eAAA;AAMF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.resource-card {\n  border-radius: 8px;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  max-width: 240px;\n  box-shadow: 0px 4px 8px rgba($title, 0.08);\n  border: 1px solid rgba($primary-color, 0.24);\n}\n\n.img-container {\n  width: 100%;\n  flex-shrink: 0;\n  height: 166px;\n  position: relative;\n\n  button {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    background: rgba($title, 0.08);\n    border: 1px solid var(--primary-background);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      font-size: 14px;\n      color: var(--primary-background);\n    }\n  }\n\n  img {\n    object-fit: cover;\n    height: 100%;\n  }\n}\n\n.resource-info {\n  padding: 8px;\n\n  & > h6 {\n    color: $primary-color;\n    font-weight: 700;\n    line-height: 19px;\n    min-height: 38px;\n\n    //max nr of lines\n    margin-bottom: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n  & > p {\n    font-size: 12px;\n    line-height: 140%;\n    font-weight: 500;\n  }\n\n  div {\n    & p:first-child {\n      color: $primary-color;\n\n      span {\n        color: $title;\n      }\n    }\n\n    p {\n      font-weight: 500;\n      font-size: 12px;\n      line-height: 120%;\n      margin-bottom: 0;\n    }\n  }\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 23560:
/*!***********************************************************************************************!*\
  !*** ./src/app/standalone-components/images-gallery/images-gallery.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.gallery-container {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.gallery-container .row {\n  row-gap: 24px;\n}\n.gallery-container .img-container {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.gallery-container .img-container:hover img {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n.gallery-container .img-container img {\n  height: 100%;\n  width: 100%;\n  transition: all 0.3s ease-out;\n  object-fit: cover;\n}\n.gallery-container .img-container .remaining-images {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--primary-background);\n  font-size: 48px;\n}\n.gallery-container .tall-container {\n  height: 384px;\n}\n.gallery-container .short-container {\n  height: 192px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/images-gallery/images-gallery.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,mBAAA;EACA,gBAAA;AAkBF;AAhBE;EACE,aAAA;AAkBJ;AAfE;EACE,YAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;AAiBJ;AAfI;EACE,iCAAA;AAiBN;AAdI;EACE,YAAA;EACA,WAAA;EACA,6BAAA;EACA,iBAAA;AAgBN;AAbI;EACE,kBAAA;EACA,MAAA;EACA,YAAA;EACA,WAAA;EACA,2EAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gCAAA;EACA,eAAA;AAeN;AAXE;EACE,aAAA;AAaJ;AAVE;EACE,aAAA;AAYJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.gallery-container {\n  border-radius: 10px;\n  overflow: hidden;\n\n  .row {\n    row-gap: 24px;\n  }\n\n  .img-container {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n\n    &:hover img {\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n\n    img {\n      height: 100%;\n      width: 100%;\n      transition: all 0.3s ease-out;\n      object-fit: cover;\n    }\n\n    .remaining-images {\n      position: absolute;\n      top: 0;\n      height: 100%;\n      width: 100%;\n      background: linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56));\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: var(--primary-background);\n      font-size: 48px;\n    }\n  }\n\n  .tall-container {\n    height: 384px;\n  }\n\n  .short-container {\n    height: 192px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83707:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/standalone-components/static-category-listing/static-category-listing.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n.background-container .category-title {\n  font-size: 64px;\n  font-weight: 700;\n  color: var(--primary-background);\n  position: absolute;\n  bottom: 60px;\n  left: 0;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  line-height: 140%;\n  margin-bottom: 0;\n  z-index: 1;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.categories-container .row {\n  row-gap: 24px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/static-category-listing/static-category-listing.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;AAkBJ;AAZE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAcJ;AAXE;EACE,eAAA;EACA,gBAAA;EACA,gCAAA;EACA,kBAAA;EACA,YAAA;EACA,OAAA;EACA,gBAAA;EACA,2BAAA;EACA,iBAAA;EACA,gBAAA;EACA,UAAA;AAaJ;;AATA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAYF;;AARE;EACE,aAAA;AAWJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../theme/styles/components/colors\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    //background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n    //backdrop-filter: blur(2px);\n    //-webkit-backdrop-filter: blur(2px);\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n\n  .category-title {\n    font-size: 64px;\n    font-weight: 700;\n    color: var(--primary-background);\n    position: absolute;\n    bottom: 60px;\n    left: 0;\n    margin-left: 50%;\n    transform: translateX(-50%);\n    line-height: 140%;\n    margin-bottom: 0;\n    z-index: 1;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.categories-container {\n  .row {\n    row-gap: 24px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 32690:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/standalone-components/ticket-filter-plus-sidebar/ticket-filter-plus-sidebar.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.filter-tickets-container {\n  border: 1px solid rgba(35, 31, 32, 0.23);\n  border-radius: 8px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.filter-tickets-container h4 {\n  font-weight: 700;\n  font-size: 16px;\n  color: #231F20;\n}\n.filter-tickets-container label.mat-checkbox-layout {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 160%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/ticket-filter-plus-sidebar/ticket-filter-plus-sidebar.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,wCAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;AAkBJ;;AAbI;EACI,gBAAA;EACA,eAAA;EACA,cAAA;AAgBR;AAbI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;AAeR","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.filter-tickets-container{\n    border: 1px solid rgba(35, 31, 32, 0.23);\n    border-radius: 8px;\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n    padding:10px;\n}\n\n.filter-tickets-container{\n\n    h4{\n        font-weight: 700;\n        font-size: 16px;\n        color: #231F20;\n    }\n\n    label.mat-checkbox-layout{\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 160%;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 51972:
/*!***************************************************************************************************************!*\
  !*** ./src/app/standalone-components/tickets-filter-sidebar/tickets-filter-sidebar.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.filter-tickets-container {\n  border: 1px solid rgba(35, 31, 32, 0.23);\n  border-radius: 8px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.filter-tickets-container h4 {\n  font-weight: 700;\n  font-size: 16px;\n  color: #231F20;\n}\n.filter-tickets-container label.mat-checkbox-layout {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 160%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/tickets-filter-sidebar/tickets-filter-sidebar.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,wCAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;AAkBJ;;AAbI;EACI,gBAAA;EACA,eAAA;EACA,cAAA;AAgBR;AAbI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;AAeR","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.filter-tickets-container{\n    border: 1px solid rgba(35, 31, 32, 0.23);\n    border-radius: 8px;\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n    padding:10px;\n}\n\n.filter-tickets-container{\n\n    h4{\n        font-weight: 700;\n        font-size: 16px;\n        color: #231F20;\n    }\n\n    label.mat-checkbox-layout{\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 160%;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 16724:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/activities/activities.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row container-fluid mx-0\">\n    <div class=\"col\">\n        <div class=\"container\">\n            <p class=\"p-title m-0\">{{'GENERAL.ACTIVITIES' | translate}}</p>\n            <div class=\"divider\">\n            </div>\n            <p class=\"description\">{{'GENERAL.BOOK' | translate}}Cluj-Napoca, Cluj County.</p>\n            <div class=\"container d-flex justify-content-between flex-wrap px-0\">\n                <div class=\"card-custom\">\n                    <div class=\"image-container\">\n                        <button class=\"favourite\"><i class=\"far fa-star\"></i></button>\n                        <img class=\"card-img-custom\" src=\"../../../../../assets/images/others/images-client/activitati1.jpg\">\n                    </div>\n\n                    <div class=\"card-body-custom\">\n                        <p class=\"title-custom\">Boardgames Night\n                            at GuildHall</p>\n                        <div class=\"price-rating\">\n                            <div>\n                                <span class=\"checked\">$</span>\n                                <span class=\"checked\">$</span>\n                                <span class=\"checked\">$</span>\n                                <span class=\"not-checked\">$</span>\n                                <span class=\"not-checked\">$</span>\n                            </div>\n\n                            <div class=\"rating\">\n                                <p>100%<i class=\"far fa-smile ml-2\"></i></p>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n                <div class=\"card-custom\">\n                    <div class=\"image-container\">\n                        <button class=\"favourite\"><i class=\"far fa-star\"></i></button>\n                        <img class=\"card-img-custom\" src=\"../../../../../assets/images/others/images-client/activitati2.jpg\">\n                    </div>\n\n                    <div class=\"card-body-custom\">\n                        <p class=\"title-custom\">Team Laser Tag\n                            at Laser Arena</p>\n                        <div class=\"price-rating\">\n                            <div>\n                                <span class=\"checked\">$</span>\n                                <span class=\"checked\">$</span>\n                                <span class=\"checked\">$</span>\n                                <span class=\"not-checked\">$</span>\n                                <span class=\"not-checked\">$</span>\n                            </div>\n\n                            <div class=\"rating\">\n                                <p>100%<i class=\"far fa-smile ml-2\"></i></p>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n                <div class=\"card-custom\">\n                    <div class=\"image-container\">\n                        <button class=\"favourite\"><i class=\"far fa-star\"></i></button>\n                        <img class=\"card-img-custom\" src=\"../../../../../assets/images/others/images-client/activitati3.jpg\">\n                    </div>\n\n                    <div class=\"card-body-custom\">\n                        <p class=\"title-custom\">Treasure Hunt\n                            The quest for Victory</p>\n                        <div class=\"price-rating\">\n                            <div>\n                                <span class=\"checked\">$</span>\n                                <span class=\"checked\">$</span>\n                                <span class=\"checked\">$</span>\n                                <span class=\"not-checked\">$</span>\n                                <span class=\"not-checked\">$</span>\n                            </div>\n\n                            <div class=\"rating\">\n                                <p>100%<i class=\"far fa-smile ml-2\"></i></p>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n                <div class=\"card-custom\">\n                    <div class=\"image-container\">\n                        <button class=\"favourite\"><i class=\"far fa-star\"></i></button>\n                        <img class=\"card-img-custom\" src=\"../../../../../assets/images/others/images-client/activitati4.jpg\">\n                    </div>\n\n                    <div class=\"card-body-custom\">\n                        <p class=\"title-custom\">The Mystery Cluj\n                            Submarine Escape Room</p>\n                        <div class=\"price-rating\">\n                            <div>\n                                <span class=\"checked\">$</span>\n                                <span class=\"checked\">$</span>\n                                <span class=\"checked\">$</span>\n                                <span class=\"not-checked\">$</span>\n                                <span class=\"not-checked\">$</span>\n                            </div>\n\n                            <div class=\"rating\">\n                                <p>100%<i class=\"far fa-smile ml-2\"></i></p>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n<!--                <div class=\"card-custom\">-->\n<!--                    <div class=\"image-container\">-->\n<!--                        <button class=\"favourite\"><i class=\"far fa-star\"></i></button>-->\n<!--                        <img class=\"card-img-custom\" src=\"assets/images/others/changepass.png\">-->\n<!--                    </div>-->\n\n<!--                    <div class=\"card-body-custom\">-->\n<!--                        <p class=\"title-custom\">Lorem ipsum dolor sit amet</p>-->\n<!--                        <div class=\"price-rating\">-->\n<!--                            <div>-->\n<!--                                <span class=\"checked\">$</span>-->\n<!--                                <span class=\"checked\">$</span>-->\n<!--                                <span class=\"checked\">$</span>-->\n<!--                                <span class=\"not-checked\">$</span>-->\n<!--                                <span class=\"not-checked\">$</span>-->\n<!--                            </div>-->\n\n<!--                            <div class=\"rating\">-->\n<!--                                <p>100%<i class=\"far fa-smile ml-2\"></i></p>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n\n\n<!--                </div>-->\n\n\n            </div>\n            <div class=\"more d-flex justify-content-end\">\n                <a>{{'GENERAL.SEE-MORE' | translate}} <i class=\"fas fa-arrow-right\"></i></a>\n            </div>\n        </div>\n\n    </div>\n</div>\n";

/***/ }),

/***/ 55309:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/banner-client/banner-client.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row mx-0\">\n    <div class=\"container-fluid\">\n        <h1>Explorăm lumea împreună cu tine.</h1>\n        <p>Alătură-te comunității BestInform și află unde sunt cele mai frumoase locații de relaxare din lume.</p>\n\n    </div>\n\n</div>\n";

/***/ }),

/***/ 97699:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/editorials-carousel/editorials-carousel.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <h1 class=\"best-events-title\">\n        {{ \"EDITORIALS.BEST_FOR\" | translate }}\n        <span>\n            {{ currentUser.firstName + ' ' + currentUser.lastName }}\n        </span>\n    </h1>\n\n    <span class=\"yellow-divider\"></span>\n\n    <!-- <p class=\"location-description\">\n        {{ \"EVENTS.RESERVE_LOCATION\" | translate }}\n        <span>\n            Cluj-Napoca, Cluj County.\n        </span>\n    </p> -->\n\n    <div class=\"filters d-flex align-items-center justify-content-start gap-1 flex-wrap\">\n\n        <div *ngFor=\"let category of categoryList\">\n            <button class=\"btn-auto btn-color-outline\" (click)=\"sendCategoryType(category.id)\">\n                {{category?.name}}\n                <img class=\"category-icon\" src=\"{{category?.icon?.filePath}}\">\n            </button>\n        </div>\n        <button class=\"btn-auto btn-color-outline\" (click)=\"sendCategoryType(undefined)\">\n            Toate\n            <i class=\"fas fa-globe-europe\"></i>\n        </button>\n        <!-- <button class=\"btn-auto btn-color-outline\">\n            Concerte\n            <i class=\"fas fa-microphone\"></i>\n        </button>\n\n        <button class=\"btn-auto btn-color-outline\">\n            Party\n            <i class=\"fas fa-glass-martini\"></i>\n        </button>\n\n        <button class=\"btn-auto btn-color-outline\">\n            Cultura\n            <i class=\"fas fa-paint-brush\"></i>\n        </button>\n\n        <button class=\"btn-auto btn-color-outline\">\n            Sport\n            <i class=\"fas fa-futbol\"></i>\n        </button>\n\n        <button class=\"btn-auto btn-color-outline\">\n            Familie\n            <i class=\"fas fa-home\"></i>\n        </button>\n\n        <button class=\"btn-auto btn-color-outline\">\n            Altele\n            <i class=\"fas fa-icons\"></i>\n        </button> -->\n    </div>\n\n    <owl-carousel-o [options]=\"customOptions\" (dragging)=\"isDragging = $event.dragging\">\n        <ng-container *ngFor = \"let editorial of editorialsList\">\n            <ng-template carouselSlide >\n                <app-editorial-card [editorial]=\"editorial\"  [owlRouterLink]=\"['/client/editorials/view/' + editorial.slug]\" [stopLink]=\"isDragging\"></app-editorial-card>\n            </ng-template>\n        </ng-container>\n    </owl-carousel-o>\n</div>\n";

/***/ }),

/***/ 76925:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/editorials-section/editorials-section.component.html?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row container-fluid mx-0\">\n    <div class=\"col\">\n        <div class=\"container\">\n            <p class=\"p-title m-0\">{{'GENERAL.EDITORIALS' | translate}}</p>\n            <div class=\"divider\">\n            </div>\n            <p class=\"description\">{{'GENERAL.COMMUNITY-REVIEW' | translate}}</p>\n            <div class=\"row\">\n                <div *ngFor=\"let editorial of editorials\" class=\"col-12 col-md-6 col-xl-3\" >\n                    <div class=\"card-custom\">\n                        <div class=\"image-container\">\n                            <button class=\"favourite\"><i class=\"far fa-star\"></i></button>\n                            <img class=\"card-img-custom\" src=\"{{editorial.imgPath}}\">\n                        </div>\n\n                        <div class=\"card-body-custom\">\n                            <p class=\"title-custom\">{{editorial.title}}</p>\n                            <div class=\"tags-section\">\n                                <p *ngFor=\"let tag of editorial.tags\">\n                                   {{\" \"+ tag| titlecase}}\n                                </p>\n                            </div>\n\n                            <div class=\"details\">\n                                <p class=\"by\">by <span class=\"author\">{{editorial.author}}</span></p>\n                                <p class=\"date\">{{editorial.date | date}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"more d-flex justify-content-end\">\n                <a>{{'GENERAL.SEE-MORE' | translate}} <i class=\"fas fa-arrow-right\"></i></a>\n            </div>\n        </div>\n\n    </div>\n</div>";

/***/ }),

/***/ 62785:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/events-carousel/events-carousel.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <h1 class=\"best-events-title\">\n        {{ \"EVENTS.BEST_FOR\" | translate }}\n        <span>\n            {{ currentUser.firstName + ' ' + currentUser.lastName }}\n        </span>\n    </h1>\n\n    <span class=\"yellow-divider\"></span>\n\n    <!-- <p class=\"location-description\">\n        {{ \"EVENTS.RESERVE_LOCATION\" | translate }}\n        <span>\n            Cluj-Napoca, Cluj County.\n        </span>\n    </p> -->\n\n    <div class=\"filters d-flex align-items-center justify-content-between\">\n        <div class=\"buttons d-flex align-items-center justify-content-start gap-1 flex-wrap mb-4\">\n            <div *ngFor=\"let category of categoryList\">\n                <button class=\"btn-auto btn-color-outline\" (click)=\"sendCategoryType(category.id)\">\n                    {{category?.nameRo}}\n                    <img class=\"category-icon\" src=\"{{category?.icon?.filePath}}\">\n                </button>\n            </div>\n            <button class=\"btn-auto btn-color-outline\" (click)=\"sendCategoryType(undefined)\">\n                Toate\n                <i class=\"fas fa-globe-europe\"></i>\n            </button>\n            \n            <!-- <button class=\"btn-auto btn-color-outline\">\n                Concerte\n                <i class=\"fas fa-microphone\"></i>\n            </button>\n\n            <button class=\"btn-auto btn-color-outline\">\n                Party\n                <i class=\"fas fa-glass-martini\"></i>\n            </button>\n\n            <button class=\"btn-auto btn-color-outline\">\n                Cultura\n                <i class=\"fas fa-paint-brush\"></i>\n            </button>\n\n            <button class=\"btn-auto btn-color-outline\">\n                Sport\n                <i class=\"fas fa-futbol\"></i>\n            </button>\n\n            <button class=\"btn-auto btn-color-outline\">\n                Familie\n                <i class=\"fas fa-home\"></i>\n            </button>\n\n            <button class=\"btn-auto btn-color-outline\">\n                Altele\n                <i class=\"fas fa-icons\"></i>\n            </button> -->\n        </div>\n\n        <!-- <div class=\"location-dropdown\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Location</mat-label>\n                <mat-select>\n                    <mat-option [value]=\"'Bucharest'\">Bucharest</mat-option>\n                    <mat-option [value]=\"'Galati'\">Galati</mat-option>\n                </mat-select>\n                <mat-icon matPrefix>location_on</mat-icon>\n            </mat-form-field>\n        </div> -->\n    </div>\n\n    <owl-carousel-o [options]=\"customOptions\" (dragging)=\"isDragging = $event.dragging\">\n        <ng-container *ngFor = \"let event of eventsList\">\n            <ng-template carouselSlide>\n                <app-resource-card [resource]=\"event\"  [owlRouterLink]=\"['/client/events/view/' + event.slug]\" [stopLink]=\"isDragging\"></app-resource-card>\n            </ng-template>\n        </ng-container>\n    </owl-carousel-o>\n</div>\n";

/***/ }),

/***/ 10008:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/experiences/experiences.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"experiences-container\">\n    <div class=\"container\">\n        <p class=\"p-title\">\n            {{'GENERAL.INSPIRE' | translate}}\n            <span>BestInform</span>\n        </p>\n        <div class=\"row\">\n            <div *ngFor=\"let image of [1,2,3,4]\" class=\"col-12 col-md-6 col-lg-3\">\n                <div class=\"card-custom-blue\">\n                    <div class=\"image-container-blue\">\n                        <button class=\"favourite\">\n                            <i class=\"far fa-star\"></i>\n                        </button>\n                        <img class=\"card-img-custom\" src=\"../../../../../assets/images/others/cardblue.jpg\">\n                    </div>\n                    <div class=\"card-body-custom-blue\">\n                        <p class=\"title-custom-blue\">From BestInform</p>\n                        <p class=\"description-custom-blue\">The best outdoor activity in every Romania state</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 42700:
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/job-tradings/job-tradings.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row jobs-section mx-0\">\n    <div class=\"col\">\n        <div class=\"container\">\n            <p class=\"p-title mb-0\">Job Tradings</p>\n            <p class=\"description mb-0\">Cauți un job sau pur si simplu dorești o reconversie?<br>\n                Îți punem la dispoziție o listă din care poți alege ce ți se potrivește.</p>\n            <div class=\"row d-flex justify-content-between px-0 py-4\">\n                <div class=\"col-5 col-md-2 job d-flex justify-content-between align-items-center\">\n                    <i class=\"fas fa-icons\"></i>\n                    <p class=\"mb-0\">Software</p>\n                </div>\n                <div class=\"col-5 col-md-2 job d-flex justify-content-between align-items-center\">\n                    <i class=\"fas fa-icons\"></i>\n                    <p class=\"mb-0\">Engineering</p>\n                </div>\n                <div class=\"col-5 col-md-2 job  d-flex justify-content-between align-items-center\">\n                    <i class=\"fas fa-icons\"></i>\n                    <p class=\"mb-0\">IT</p>\n                </div>\n                <div class=\"col-5 col-md-2 job d-flex justify-content-between align-items-center\">\n                    <i class=\"fas fa-icons\"></i>\n                    <p class=\"mb-0\">Retail</p>\n                </div>\n                <div class=\"col-5 col-md-2 job d-flex justify-content-between align-items-center\">\n                    <i class=\"fas fa-icons\"></i>\n                    <p class=\"mb-0\">Sales</p>\n                </div>\n            </div>\n            <button class=\"more\">Descoperă mai mult</button>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 69885:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/popular-locations/popular-locations.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"locations-container\">\n    <div class=\"container\">\n        <p class=\"p-title m-0\">\n            {{'GENERAL.POPULAR-LOCATIONS' | translate}}\n        </p>\n\n        <div class=\"divider\"></div>\n\n        <p class=\"description\">\n            {{'GENERAL.BOOK' | translate}}\n            Cluj-Napoca, Cluj County.\n        </p>\n\n        <div class=\"d-flex justify-content-between flex-wrap\">\n\n            <div class=\"card-custom\">\n                <div class=\"image-container\">\n                    <button class=\"favourite\"><i class=\"far fa-star\"></i></button>\n                    <img class=\"card-img-custom\" src=\"../../../../../assets/images/others/images-client/locatii1.jpg\">\n                </div>\n\n                <div class=\"card-body-custom\">\n                    <p class=\"title-custom\">Day Trip to Corvin Castle\n                        and Alba Carolina</p>\n                    <div class=\"price-rating\">\n                        <div>\n                            <span class=\"checked\">$</span>\n                            <span class=\"checked\">$</span>\n                            <span class=\"checked\">$</span>\n                            <span class=\"not-checked\">$</span>\n                            <span class=\"not-checked\">$</span>\n                        </div>\n\n                        <div class=\"rating\">\n                            <p>100%<i class=\"far fa-smile ml-2\"></i></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"more d-flex justify-content-end\">\n            <a>{{'GENERAL.SEE-MORE' | translate}} <i class=\"fas fa-arrow-right\"></i></a>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 23544:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-filter-bar/resource-filter-bar.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ngb-accordion *ngIf=\"resourceTypeData && !allFilterOptionsFalse\" #acc=\"ngbAccordion\"\n               [ngClass]=\"accIsOpen ? 'open-accordion' : 'closed-accordion'\">\n    <ngb-panel id=\"ngb-panel\">\n        <ng-template ngbPanelHeader>\n            <div class=\"accordion-header\">\n                <div class=\"filter-list\">\n\n                    <!--TODO: don't delete-->\n                    <div *ngIf=\"resourceTypeData?.filterOption?.location\"\n                         class=\"filter-selector\"\n                         [ngClass]=\"filterSelection.location ? 'active-filter' : null\"\n                         (click)=\"toggleFilter('location')\">\n                        <i class=\"fas fa-map-marker-alt\"></i>\n                        <p>{{ filterForm.value.location || 'All' }}</p>\n                    </div>\n\n                    <!--<div *ngIf=\"resourceTypeData?.filterOption.location\"\n                         (click)=\"locationInput.select()\"\n                         class=\"filter-selector\">\n                        <i class=\"fas fa-map-marker-alt\"></i>\n                        <input type=\"text\"\n                               class=\"location-filter-input\"\n                               #locationInput\n                               [value]=\"filterForm.get('location').value\"\n                               (input)=\"filterForm.get('location').setValue($event.target['value'])\"\n                        >\n                    </div>-->\n\n                    <div *ngIf=\"resourceTypeData?.filterOption.dateAsDay\n                                || resourceTypeData?.filterOption.dateAsHour\n                                || resourceTypeData?.filterOption.dateInterval\n                                || resourceTypeData?.filterOption.hoursInterval\"\n                         class=\"filter-selector\"\n                         [ngClass]=\"filterSelection.date ? 'active-filter' : null\"\n                         (click)=\"toggleFilter('date')\">\n                        <i class=\"fas fa-calendar-alt\"></i>\n                        <p *ngIf=\"resourceTypeData?.filterOption.dateAsDay\">\n                            {{ filterForm.controls.dateAsDay.value | date : 'dd-MM-YYYY' }}\n                        </p>\n                        <p *ngIf=\"resourceTypeData?.filterOption.dateAsHour\">\n                            {{ filterForm.controls.dateAsHour.value | date : 'dd-MM-YYYY HH:mm' }}\n                        </p>\n                        <p *ngIf=\"resourceTypeData?.filterOption.dateInterval\">\n                            {{ filterForm.controls.startDate.value | date : 'dd-MM-YYYY' }}\n                            - {{filterForm.controls.endDate.value | date : 'dd-MM-YYYY'}}\n                        </p>\n                        <p *ngIf=\"resourceTypeData?.filterOption.hoursInterval\">\n                            {{ filterForm.controls.startHour.value | date : 'dd-MM-YYYY HH:mm' }}\n                            - {{ filterForm.controls.endHour.value | date : 'dd-MM-YYYY HH:mm' }}\n                        </p>\n                    </div>\n\n                    <div *ngIf=\"resourceTypeData?.filterOption.adultChildrenAndRoomNumber\n                                || resourceTypeData?.filterOption.adultChildrenNumber\n                                || resourceTypeData?.filterOption.adultNumber\"\n                         class=\"filter-selector\"\n                         [ngClass]=\"filterSelection.guests ? 'active-filter' : null\"\n                         (click)=\"toggleFilter('guests')\">\n                        <i class=\"fas fa-user-friends\"></i>\n                        <p *ngIf=\"resourceTypeData?.filterOption.adultChildrenAndRoomNumber\">\n                            {{ filterForm.controls.adultsNumber.value + filterForm.controls.childrenNumber.value }}\n                            <span>{{ \"RESOURCE.RES-FILTERS.GUESTS\" | translate }}</span>\n                        </p>\n                        <p *ngIf=\"resourceTypeData?.filterOption.adultChildrenNumber\">\n                            {{ filterForm.controls.adultsNumber.value + filterForm.controls.childrenNumber.value }}\n                            <span>{{ \"RESOURCE.RES-FILTERS.GUESTS\" | translate }}</span>\n                        </p>\n                        <p *ngIf=\"resourceTypeData?.filterOption.adultNumber\">\n                            {{ filterForm.controls.adultsNumber.value }}\n                            <span>{{ \"RESOURCE.RES-FILTERS.GUESTS\" | translate }}</span>\n                        </p>\n                    </div>\n                </div>\n\n                <button class=\"btn-search btn-color-fill\" (click)=\"submitFilters()\">\n                    <i class=\"fas fa-search\"></i>\n                </button>\n            </div>\n        </ng-template>\n\n        <ng-template ngbPanelContent>\n            <form [formGroup]=\"filterForm\" (keyup.enter)=\"submitFilters()\">\n                <ng-container *ngIf=\"filterSelection.location\">\n                    <div class=\"container\">\n                        <p class=\"panel-title\">\n                            <i class=\"fas fa-map-marker-alt\"></i>\n                            {{ \"RESOURCE.RES-FILTERS.SELECT_DESTINATION\" | translate }}\n                        </p>\n\n                        <p class=\"m-0\">\n                            <mat-form-field class=\"w-100\" appearance=\"outline\">\n                                <mat-label>Search city</mat-label>\n                                <input [(ngModel)]=\"cityToSearch\" [ngModelOptions]=\"{standalone: true}\"\n                                       (ngModelChange)=\"searchForCities()\" matInput placeholder=\"Search city...\">\n                                <mat-icon role=\"button\" *ngIf=\"!cityToSearch\" matSuffix>search</mat-icon>\n                                <mat-icon role=\"button\" *ngIf=\"cityToSearch\" matSuffix\n                                          (click)=\"\n                                            cityToSearch = null;\n                                            recommendedCities = null;\n                                            updateFormValue('location', currentUser?.city);\n                                            updateFormValue('geographicalCoordinates', currentUser?.currentGeographicalCoordinates)\"\n                                >clear</mat-icon>\n                            </mat-form-field>\n                        </p>\n\n                        <div class=\"destinations-container\">\n                            <div *ngFor=\"let city of recommendedCities | slice : 0 : 5\"\n                                 (click)=\"updateFormValue('location', city.city);\n                                          updateFormValue('geographicalCoordinates', city.geographicalCoordinates)\"\n                                 [tabindex]=\"0\"\n                                 class=\"destination-element\">\n                            <span class=\"destination-icon\">\n                                <i class=\"fas fa-map-marker-alt\"></i>\n                            </span>\n\n                                <p>{{ city.city }}, {{ city.country }}</p>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n\n                <ng-container *ngIf=\"filterSelection.date\">\n                    <div class=\"container datepickers-container\">\n                        <p class=\"panel-title\">\n                            <i class=\"fas fa-calendar-alt\"></i>\n                            {{ \"RESOURCE.RES-FILTERS.SELECT_DATE\" | translate }}\n                        </p>\n\n                        <div *ngIf=\"resourceTypeData?.filterOption?.dateAsDay\"\n                             class=\"row\">\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_DATE'|translate}}</mat-label>\n                                    <input formControlName=\"dateAsDay\" matInput [min]=\"currentDay\"\n                                           [matDatepicker]=\"dateAsDayPicker\" (change)=\"toggleFilter('guests')\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"dateAsDayPicker\"></mat-datepicker-toggle>\n                                    <mat-datepicker #dateAsDayPicker></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"resourceTypeData?.filterOption?.dateAsHour\"\n                             class=\"row\">\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_DATE_TIME'|translate}}</mat-label>\n                                    <input matInput [min]=\"currentDay\" [ngxMatDatetimePicker]=\"dateAsHourPicker\"\n                                           placeholder=\"Choose a date\" formControlName=\"dateAsHour\" (change)=\"toggleFilter('guests')\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"dateAsHourPicker\"></mat-datepicker-toggle>\n                                    <ngx-mat-datetime-picker #dateAsHourPicker [stepMinute]=\"15\">\n                                    </ngx-mat-datetime-picker>\n                                </mat-form-field>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"resourceTypeData?.filterOption?.dateInterval\"\n                             class=\"row\">\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_START_DATE'|translate}}</mat-label>\n                                    <input formControlName=\"startDate\" matInput [min]=\"currentDay\"\n                                           [matDatepicker]=\"startDatePicker\"\n                                           (dateChange)=\"startDateChanged($event, endDatePicker)\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\n                                    <mat-datepicker #startDatePicker></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_END_DATE'|translate}}</mat-label>\n                                    <input formControlName=\"endDate\" matInput [min]=\"nextDay\"\n                                           [matDatepicker]=\"endDatePicker\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\n                                    <mat-datepicker #endDatePicker></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"resourceTypeData?.filterOption?.hoursInterval\"\n                             class=\"row\">\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_START_TIME'|translate}}</mat-label>\n                                    <input matInput [min]=\"currentDay\" [ngxMatDatetimePicker]=\"startHourPicker\"\n                                           placeholder=\"Choose a date\" formControlName=\"startHour\"\n                                           (dateChange)=\"startHourChanged($event, endHourPicker)\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"startHourPicker\"></mat-datepicker-toggle>\n                                    <ngx-mat-datetime-picker #startHourPicker>\n                                    </ngx-mat-datetime-picker>\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_END_TIME'|translate}}</mat-label>\n                                    <input matInput [min]=\"nextDay\" [ngxMatDatetimePicker]=\"endHourPicker\"\n                                           (dateChange)=\"endHourChanged($event)\"\n                                           placeholder=\"Choose a date\" formControlName=\"endHour\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"endHourPicker\"></mat-datepicker-toggle>\n                                    <ngx-mat-datetime-picker #endHourPicker>\n                                    </ngx-mat-datetime-picker>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n\n                <ng-container *ngIf=\"filterSelection.guests\">\n                    <div class=\"container\">\n                        <p class=\"panel-title\">\n                            <i class=\"fas fa-users\"></i>\n                            {{ \"RESOURCE.RES-FILTERS.SELECT_GUESTS\" | translate }}\n                        </p>\n\n                        <div class=\"row row-gap\">\n                            <div *ngIf=\"resourceTypeData?.filterOption.adultNumber\n                                        || resourceTypeData?.filterOption.adultChildrenNumber\n                                        || resourceTypeData?.filterOption.adultChildrenAndRoomNumber\"\n                                 class=\"col-12 col-lg-6\">\n                                <div class=\"guests-selector\">\n                                    <button [disabled]=\"filterForm.controls.adultsNumber.value === 1\"\n                                            (click)=\"decreaseNrGuests('adultsNumber')\">\n                                        <i class=\"fas fa-angle-left\"></i>\n                                    </button>\n                                    <p>\n                                        {{ filterForm.controls.adultsNumber.value }}\n                                        {{ \"RESOURCE.RES-FILTERS.NR_ADULTS\" | translate }}\n                                    </p>\n                                    <button (click)=\"increaseNrGuests('adultsNumber')\">\n                                        <i class=\"fas fa-angle-right\"></i>\n                                    </button>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"resourceTypeData?.filterOption.adultChildrenNumber\n                                        || resourceTypeData?.filterOption.adultChildrenAndRoomNumber\"\n                                 class=\"col-12 col-lg-6\">\n                                <div class=\"guests-selector\">\n                                    <button [disabled]=\"filterForm.controls.childrenNumber.value === 0\"\n                                            (click)=\"decreaseNrGuests('childrenNumber')\">\n                                        <i class=\"fas fa-angle-left\"></i>\n                                    </button>\n                                    <p>\n                                        {{ filterForm.controls.childrenNumber.value }}\n                                        {{ \"RESOURCE.RES-FILTERS.NR_CHILDREN\" | translate }}\n                                    </p>\n                                    <button (click)=\"increaseNrGuests('childrenNumber')\">\n                                        <i class=\"fas fa-angle-right\"></i>\n                                    </button>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"resourceTypeData?.filterOption.adultChildrenAndRoomNumber\"\n                                 class=\"col-12 col-lg-6\">\n                                <div class=\"guests-selector\">\n                                    <button [disabled]=\"filterForm.controls.roomsNumber.value === 1\"\n                                            (click)=\"decreaseNrGuests('roomsNumber')\">\n                                        <i class=\"fas fa-angle-left\"></i>\n                                    </button>\n                                    <p>\n                                        {{ filterForm.controls.roomsNumber.value }}\n                                        {{ \"RESOURCE.RES-FILTERS.NR_ROOMS\" | translate }}\n                                    </p>\n                                    <button (click)=\"increaseNrGuests('roomsNumber')\">\n                                        <i class=\"fas fa-angle-right\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n            </form>\n        </ng-template>\n\n    </ngb-panel>\n</ngb-accordion>\n\n\n";

/***/ }),

/***/ 2921:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-information/resource-information.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"resourceData\" class=\"contact-info-card\">\n\n    <div *ngFor=\"let tabAttributesList of tabAttributesListByCategory;\" class=\"info-section\">\n        <h4 class=\"section-title\">\n            {{ tabAttributesList[0].attributeCategory | titlecase }}\n        </h4>\n\n        <span *ngFor=\"let tabAttribute of tabAttributesList\" class=\"section-row\">\n            <span *ngIf=\"tabAttribute.attributeValue\" class=\"section-row\">\n                            <img #attributeImg [src]=\"tabAttribute.attributeIconPath\"\n                                 (error)=\"attributeImg.hidden = true\"\n                                 alt=\"icon {{tabAttribute.attributeName | lowercase}}\">\n            <p>\n                {{ tabAttribute.attributeName }}\n                <span *ngIf=\"tabAttribute.attributeValue.toLowerCase() !== 'true' && tabAttribute.attributeValue.toLowerCase() !== 'false'\">: {{ tabAttribute.attributeValue }} </span>\n            </p>\n            </span>\n\n        </span>\n        <span class=\"section-row\">\n            <img [src]=\"'/assets/images/others/map-marker.png'\" alt=\"icon\" />\n            <p>{{resourceData.address}}, {{resourceData.city}}, {{resourceData.country}}</p>\n        </span>\n    </div>\n\n    <div *ngIf=\"isValidCoords\"\n         class=\"info-section\">\n        <h4 class=\"section-title\">\n            Location on map\n        </h4>\n\n\n        <div id=\"ol-map\"></div>\n\n    </div>\n\n</div>\n";

/***/ }),

/***/ 70161:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-list-map/resource-list-map.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"map-container d-flex justify-content-start\">\n        <div id=\"ol-map\"></div>\n        <div id=\"popup\" class=\"ol-popup\">\n                <a href=\"#\" id=\"popup-closer\" class=\"ol-popup-closer\"></a>\n                <div id=\"popup-content\"></div>\n        </div>\n</div>";

/***/ }),

/***/ 7810:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resource-tabs/resource-tabs.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"resourceData && resourceTypeData\">\n    <ul ngbNav #nav=\"ngbNav\" [activeId]=\"activeTabId\" (activeIdChange)=\"activeTabHasChanged($event)\" [animation]=\"true\"\n        [destroyOnHide]=\"false\" class=\"nav-pills\">\n        <li *ngIf=\"resourceGeneralInfo || resourceFacilities\" [ngbNavItem]=\"1\">\n            <a ngbNavLink>\n                {{ \"RESOURCE.ABOUT_IT\" | translate }}\n            </a>\n            <ng-template ngbNavContent>\n\n                <div class=\"about-tab\">\n\n                    <div class=\"date-time-group d-flex gap-5\" *ngIf=\"resourceData?.bookingType === 'culturalBooking' || (resourceData?.bookingType === 'ticketBooking' && resourceData?.categoryId === eventCategoryId)\">\n                        <p class=\"mb-0\"><i class=\"far fa-calendar-alt me-2\"></i>Data: <span>{{resourceData.startDate | date:'dd MMMM yyyy'}}</span></p>\n                        <p class=\"mb-0\" *ngIf=\"resourceData\"><i class=\"far fa-clock me-2\"></i>Ora: <span>{{resourceData.startDate | date:'HH:mm'}}</span></p>\n                    </div>\n\n                    <div class=\"info-group\">\n                        <h4>Descriere</h4>\n                        <p>{{resourceData.description}}</p>\n                    </div>\n\n                    <ng-container *ngIf=\"resourceAbout\">\n                        <div *ngFor=\"let attribute of resourceAbout.tabAttributes\"\n                             class=\"info-group\"\n                             [ngClass]=\"attribute.attributeValue && attribute.attributeValue !== 'false' && attribute.attributeValue !== 'true' ? '' : 'd-none'\">\n                            <div *ngIf=\"attribute.attributeValue\">\n                                <h4>\n                                    {{ attribute.attributeName }}\n                                </h4>\n\n                                <p>\n                                    {{ attribute.attributeValue }}\n                                </p>\n                            </div>\n\n                        </div>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"resourceGeneralInfo\">\n                        <div *ngFor=\"let attribute of resourceGeneralInfo.tabAttributes\"\n                             class=\"info-group\"\n                             [ngClass]=\"attribute.attributeValue && attribute.attributeValue !== 'false' && attribute.attributeValue !== 'true' ? '' : 'd-none'\">\n                            <div *ngIf=\"attribute.attributeValue && attribute.attributeValue !== 'false' && attribute.attributeValue !== 'true'\">\n                                <h4>\n                                    {{ attribute.attributeName }}\n                                </h4>\n\n                                <p>\n                                    {{ attribute.attributeValue }}\n                                </p>\n                            </div>\n                        </div>\n                    </ng-container>\n\n                    <div *ngIf=\"resourceGeneralInfo\" class=\"other-attr flex-wrap\">\n                        <div *ngFor=\"let attribute of resourceGeneralInfo.tabAttributes\"\n                             class=\"info-group\"\n                             [ngClass]=\"attribute.attributeValue && attribute.attributeValue === 'true' ? '' : 'd-none'\">\n                            <ng-container *ngIf=\"(attribute.attributeValue | lowercase ) === 'true'\">\n                                <img #attributeImg [src]=\"attribute.attributeIconPath\"\n                                     (error)=\"attributeImg.hidden = true\"\n                                     alt=\"icon {{attribute.attributeName | lowercase}}\">\n                                <p>\n                                    {{ attribute.attributeName }}\n                                </p>\n                            </ng-container>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"resourceFacilities && hasFacilitiesTrue\"\n                         class=\"info-group\">\n                        <h4>\n                            {{ \"RESOURCE.FACILITIES\" | translate }}\n                        </h4>\n                        <div class=\"icon-text-container d-flex align-items-center flex-wrap\">\n                            <div *ngFor=\"let attribute of resourceFacilities.tabAttributes\" class=\"icon-text-group\">\n                                <ng-container *ngIf=\"(attribute.attributeValue | lowercase ) === 'true'\">\n                                    <img #attributeImg [src]=\"attribute.attributeIconPath\"\n                                         (error)=\"attributeImg.hidden = true\"\n                                         alt=\"icon {{attribute.attributeName | lowercase}}\">\n\n                                    <p class=\"pe-2\">\n                                        {{ attribute.attributeName }}\n                                    </p>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </ng-template>\n        </li>\n        <li *ngIf=\"resourceData.bookingType !== 'externalUrl' && resourceData.bookingType !== 'noBooking'\"\n            [ngbNavItem]=\"2\">\n            <a ngbNavLink *ngIf=\"resourceData.bookingType === 'rentalBooking'\">\n                {{ \"RESOURCE.ROOMS\" | translate }}\n            </a>\n            <a ngbNavLink *ngIf=\"resourceData.bookingType === 'ticketBooking'\">\n                {{ \"RESOURCE.TICKETS\" | translate }}\n            </a>\n            <a ngbNavLink *ngIf=\"resourceData.bookingType === 'culturalBooking'\">\n                {{ \"RESOURCE.TICKETS\" | translate }}\n            </a>\n            <a ngbNavLink *ngIf=\"resourceData.bookingType === 'serviceBookingTimeSlots'\">\n                {{ \"RESOURCE.RESERVATIONS\" | translate }}\n            </a>\n            <a ngbNavLink *ngIf=\"resourceData.bookingType === 'productsList'\">\n                {{ \"RESOURCE.BUY_NOW\" | translate }}\n            </a>\n            <a ngbNavLink *ngIf=\"resourceData.bookingType === 'menu'\">\n                {{ \"RESOURCE.MENU\" | translate }}\n            </a>\n            <ng-template ngbNavContent>\n                <div class=\"booking-type-tab\">\n                    <ng-container *ngIf=\"!isItineraryModal && resourceData.bookingType !== 'culturalBooking'\">\n                        <form [formGroup]=\"filterForm\" (ngSubmit)=\"applyFilters()\"\n                              *ngIf=\"resourceData.bookingType !== 'menu'\">\n                            <div class=\"row\">\n\n                                <ng-container\n                                        *ngIf=\"resourceTypeData?.filterOption?.dateAsDay && resourceData?.bookingType !== 'ticketBooking'\">\n                                    <div class=\"col-12 col-lg-6\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_DATE'|translate}}</mat-label>\n                                            <input formControlName=\"dateAsDay\" matInput [min]=\"currentDay\"\n                                                   [matDatepicker]=\"dateAsDayPicker\">\n                                            <mat-datepicker-toggle matSuffix\n                                                                   [for]=\"dateAsDayPicker\"></mat-datepicker-toggle>\n                                            <mat-datepicker #dateAsDayPicker></mat-datepicker>\n                                        </mat-form-field>\n                                    </div>\n                                </ng-container>\n\n                                <ng-container\n                                        *ngIf=\"resourceData?.categoryId === eventCategoryId\">\n                                    <div class=\"col-12 col-lg-6\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_DATE'|translate}}</mat-label>\n                                            <input formControlName=\"dateAsDay\" matInput [min]=\"resourceData?.startDate\"\n                                                   [max]=\"resourceData?.endDate\"\n                                                   [matDatepicker]=\"dateAsDayPicker\">\n                                            <mat-datepicker-toggle matSuffix\n                                                                   [for]=\"dateAsDayPicker\"></mat-datepicker-toggle>\n                                            <mat-datepicker #dateAsDayPicker></mat-datepicker>\n                                            <mat-error *ngIf=\"filterForm.get('dateAsDay').invalid\">Data aleasa este\n                                                invalida!\n                                            </mat-error>\n                                        </mat-form-field>\n                                    </div>\n                                </ng-container>\n\n                                <ng-container *ngIf=\"resourceTypeData?.filterOption?.dateAsHour\">\n                                    <div class=\"col-12 col-lg-6\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_DATE_TIME'|translate}}</mat-label>\n                                            <input matInput [min]=\"currentDay\" [ngxMatDatetimePicker]=\"dateAsHourPicker\"\n                                                   placeholder=\"Choose a date\" formControlName=\"dateAsHour\">\n                                            <mat-datepicker-toggle matSuffix\n                                                                   [for]=\"dateAsHourPicker\"></mat-datepicker-toggle>\n                                            <ngx-mat-datetime-picker #dateAsHourPicker>\n                                            </ngx-mat-datetime-picker>\n                                        </mat-form-field>\n                                    </div>\n                                </ng-container>\n\n                                <ng-container *ngIf=\"resourceTypeData?.filterOption?.dateInterval\">\n                                    <div class=\"col-12 col-lg-6\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_START_DATE'|translate}}</mat-label>\n                                            <!--daca apare o eroare la datepicker, sa stiti ca e legata strict de webstorm si functioneaza cum trebuie-->\n                                            <input formControlName=\"startDate\" matInput [min]=\"currentDay\"\n                                                   [matDatepicker]=\"startDatePicker\"\n                                                   (dateChange)=\"startDateChanged($event, endDatePicker)\">\n                                            <mat-error\n                                                    *ngIf=\"filterForm.get('startDate').hasError('startDateIsHigher')\">\n                                                Start date can't be higher than end date\n                                            </mat-error>\n                                            <mat-datepicker-toggle matSuffix\n                                                                   [for]=\"startDatePicker\"></mat-datepicker-toggle>\n                                            <mat-datepicker #startDatePicker></mat-datepicker>\n                                        </mat-form-field>\n                                    </div>\n\n                                    <div class=\"col-12 col-lg-6\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_END_DATE'|translate}}</mat-label>\n                                            <input formControlName=\"endDate\" matInput [min]=\"nextDay\"\n                                                   [matDatepicker]=\"endDatePicker\">\n                                            <mat-datepicker-toggle matSuffix\n                                                                   [for]=\"endDatePicker\"></mat-datepicker-toggle>\n                                            <mat-datepicker #endDatePicker></mat-datepicker>\n                                        </mat-form-field>\n                                    </div>\n                                </ng-container>\n\n                                <ng-container *ngIf=\"resourceTypeData?.filterOption?.hoursInterval\">\n                                    <div class=\"col-12 col-lg-6\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_START_TIME'|translate}}</mat-label>\n                                            <input matInput [min]=\"currentDay\" [ngxMatDatetimePicker]=\"startHourPicker\"\n                                                   placeholder=\"Choose a date\" formControlName=\"startHour\"\n                                                   (dateChange)=\"startHourChanged($event, endHourPicker)\">\n                                            <mat-datepicker-toggle matSuffix\n                                                                   [for]=\"startHourPicker\"></mat-datepicker-toggle>\n                                            <ngx-mat-datetime-picker #startHourPicker>\n                                            </ngx-mat-datetime-picker>\n                                        </mat-form-field>\n                                    </div>\n\n                                    <div class=\"col-12 col-lg-6\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_END_TIME'|translate}}</mat-label>\n                                            <input matInput [min]=\"nextDay\" [ngxMatDatetimePicker]=\"endHourPicker\"\n                                                   placeholder=\"Choose a date\" formControlName=\"endHour\"\n                                                   (dateChange)=\"endHourChanged($event)\">\n                                            <mat-datepicker-toggle matSuffix\n                                                                   [for]=\"endHourPicker\"></mat-datepicker-toggle>\n                                            <ngx-mat-datetime-picker #endHourPicker>\n                                            </ngx-mat-datetime-picker>\n                                        </mat-form-field>\n                                    </div>\n                                </ng-container>\n\n                                <div class=\"col-12\">\n                                    <div class=\"guests-container\">\n                                        <ng-container *ngIf=\"resourceTypeData?.filterOption?.adultNumber\n                                            || resourceTypeData?.filterOption?.adultChildrenNumber\n                                            || resourceTypeData?.filterOption?.adultChildrenAndRoomNumber\">\n                                            <div class=\"guests-selector\">\n                                                <button [disabled]=\"filterForm.controls.adultsNumber.value === 1\"\n                                                        (click)=\"decreaseNrGuests('adultsNumber')\"\n                                                        type=\"button\"\n                                                >\n                                                    <i class=\"fas fa-angle-left\"></i>\n                                                </button>\n                                                <p>\n                                                    {{ filterForm.controls.adultsNumber.value }}\n                                                    {{ \"RESOURCE.RES-FILTERS.NR_ADULTS\" | translate }}\n                                                </p>\n                                                <button (click)=\"increaseNrGuests('adultsNumber')\" type=\"button\">\n                                                    <i class=\"fas fa-angle-right\"></i>\n                                                </button>\n                                            </div>\n                                        </ng-container>\n\n                                        <ng-container *ngIf=\"resourceTypeData?.filterOption?.adultChildrenNumber\n                                            || resourceTypeData?.filterOption?.adultChildrenAndRoomNumber\">\n                                            <div class=\"guests-selector\">\n                                                <button [disabled]=\"filterForm.controls.childrenNumber.value === 0\"\n                                                        (click)=\"decreaseNrGuests('childrenNumber')\"\n                                                        type=\"button\"\n                                                >\n                                                    <i class=\"fas fa-angle-left\"></i>\n                                                </button>\n                                                <p>\n                                                    {{ filterForm.controls.childrenNumber.value }}\n                                                    {{ \"RESOURCE.RES-FILTERS.NR_CHILDREN\" | translate }}\n                                                </p>\n                                                <button (click)=\"increaseNrGuests('childrenNumber')\" type=\"button\">\n                                                    <i class=\"fas fa-angle-right\"></i>\n                                                </button>\n                                            </div>\n                                        </ng-container>\n\n                                        <ng-container\n                                                *ngIf=\"resourceTypeData?.filterOption?.adultChildrenAndRoomNumber\">\n                                            <div class=\"guests-selector\">\n                                                <button [disabled]=\"filterForm.controls.roomsNumber.value === 1\"\n                                                        (click)=\"decreaseNrGuests('roomsNumber')\" type=\"button\">\n                                                    <i class=\"fas fa-angle-left\"></i>\n                                                </button>\n                                                <p>\n                                                    {{ filterForm.controls.roomsNumber.value }}\n                                                    {{ \"RESOURCE.RES-FILTERS.NR_ROOMS\" | translate }}\n                                                </p>\n                                                <button (click)=\"increaseNrGuests('roomsNumber')\" type=\"button\">\n                                                    <i class=\"fas fa-angle-right\"></i>\n                                                </button>\n                                            </div>\n                                        </ng-container>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-12\">\n                                    <button *ngIf=\"!allFilterOptionsFalse\" type=\"submit\"\n                                            class=\"btn-auto btn-color-fill w-100 mt-4\">\n                                        Search\n                                    </button>\n                                </div>\n\n                            </div>\n                        </form>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"resourceData.bookingType === 'rentalBooking'\">\n                        <app-rooms-list></app-rooms-list>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"resourceData.bookingType === 'ticketBooking'\">\n                        <app-tickets-list></app-tickets-list>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"resourceData.bookingType === 'culturalBooking'\">\n                        <app-seat-selection></app-seat-selection>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"resourceData.bookingType === 'serviceBookingTimeSlots'\">\n                        <app-time-slots-list></app-time-slots-list>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"resourceData.bookingType === 'productsList'\">\n                        <app-products-list></app-products-list>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"resourceData.bookingType === 'menu'\">\n                        <app-menu></app-menu>\n                    </ng-container>\n\n                </div>\n            </ng-template>\n        </li>\n        <li *ngIf=\"resourceData?.relatedResources?.length > 0\" [ngbNavItem]=\"3\">\n            <a ngbNavLink>\n                {{ \"RESOURCE.EVENTS\" | translate }}\n            </a>\n            <ng-template ngbNavContent>\n                <div class=\"related-resources-tab\">\n                    <div class=\"row\">\n                        <div *ngFor=\"let relatedResource of (relatedResourcesObs$ | async)?.content\"\n                             class=\"col-12 col-lg-6\">\n\n                            <div class=\"related-resource-card\">\n                                <div class=\"img-container\">\n                                    <img [src]=\"relatedResource?.featuredImage?.filePath\"\n                                         alt=\"image {{relatedResource?.title}}\">\n                                </div>\n\n                                <div class=\"card-text\">\n                                    <h4>\n                                        {{ relatedResource?.title }}\n                                    </h4>\n\n                                    <p>\n                                        {{ relatedResource?.description }}\n                                    </p>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n        </li>\n        <li *ngIf=\"resourceData.bookingType === 'menu' && resourceData.bookingTimePickerId\" [ngbNavItem]=\"4\">\n            <a ngbNavLink>\n                {{ \"RESOURCE.RESERVATIONS\" | translate }}\n            </a>\n            <ng-template ngbNavContent>\n                <div class=\"booking-type-tab\">\n                    <form *ngIf=\"!isItineraryModal\" [formGroup]=\"filterForm\" (ngSubmit)=\"applyFilters()\">\n                        <div class=\"row\">\n                            <ng-container *ngIf=\"resourceTypeData?.filterOption?.dateAsHour\">\n                                <div class=\"col-12 col-lg-6\">\n                                    <mat-form-field appearance=\"outline\">\n                                        <mat-label>{{'RESOURCE.RES-FILTERS.SELECT_DATE_TIME'|translate}}</mat-label>\n                                        <input matInput [min]=\"currentDay\" [ngxMatDatetimePicker]=\"dateAsHourPicker\"\n                                               placeholder=\"Choose a date\" formControlName=\"dateAsHour\">\n                                        <mat-datepicker-toggle matSuffix\n                                                               [for]=\"dateAsHourPicker\"></mat-datepicker-toggle>\n                                        <ngx-mat-datetime-picker #dateAsHourPicker [stepMinute]=\"15\">\n                                        </ngx-mat-datetime-picker>\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n\n                            <div class=\"col-12\">\n                                <button type=\"submit\"\n                                        class=\"btn-auto btn-color-fill w-100 mt-4\">\n                                    Search\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n\n                    <app-picker-items></app-picker-items>\n                </div>\n            </ng-template>\n        </li>\n    </ul>\n\n    <div [ngbNavOutlet]=\"nav\"></div>\n</ng-container>\n";

/***/ }),

/***/ 19257:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resources-carousel/resources-carousel.component.html?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"resourceTemplate && resourcesList?.length > 0 && currentUser && resourcesLoaded\">\n    <h1 class=\"best-events-title\">\n        {{ \"RESOURCE.BEST_FOR\" | translate }}\n        <span>\n            {{ currentUser?.firstName + ' ' + currentUser?.lastName }}\n            <i class=\"fas fa-heart\"></i>\n        </span>\n    </h1>\n\n    <owl-carousel-o [options]=\"customOptions\">\n        <ng-container *ngFor = \"let resource of resourcesList\">\n            <ng-template carouselSlide [width]=\"240\">\n                <app-resource-card-with-template\n                        [routerLink]=\"['view', resource.id]\"\n                        [state]=\"resource\"\n                        [cardType]=\"'short'\"\n                        [resourceTypeName]=\"currentLanguage === 'ro' ? resourceType.nameRo : resourceType.nameEn\"\n                        [resourceData]=\"resource\"\n                        [resourceTemplate]=\"resourceTemplate\">\n                </app-resource-card-with-template>\n            </ng-template>\n        </ng-container>\n    </owl-carousel-o>\n</div>\n";

/***/ }),

/***/ 81722:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/resources-list/resources-list.component.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"(resourceListObs$ | async) as resourceList\" class=\"resource-container\">\n\n    <div class=\"sort-filter\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Sort By</mat-label>\n            <mat-select (selectionChange)=\"onSortChange($event)\">\n                <mat-option [value]=\"'titleAsc'\">Name asacending</mat-option>\n                <mat-option [value]=\"'titleDesc'\">Name descending</mat-option>\n\n            </mat-select>\n        </mat-form-field>\n\n    </div>\n\n    <div class=\"resource-list\">\n        <ng-container *ngFor=\"let resource of resourceList.content\">\n            <app-resource-card-with-template\n                    [routerLink]=\"['view', resource.id]\"\n                    [state]=\"resource\"\n                    [cardType]=\"screenWidth < 992 ? 'short-w-100' : 'long'\"\n                    [resourceTypeName]=\"currentLanguage === 'ro' ? resourceType.nameRo : resourceType.nameEn\"\n                    [resourceTemplate]=\"resourceTemplate\"\n                    [resourceData]=\"resource\">\n            </app-resource-card-with-template>\n        </ng-container>\n    </div>\n\n    <div *ngIf=\"resourceList.content.length === 0\" class=\"d-flex no-data-class justify-content-center flex-column align-items-center gap-3\">\n        <img src=\"../../../../../assets/images/others/no_data_icon.png\" >\n        <h4 class=\"text-center\">{{'GENERAL.NO_DATA'|translate}}</h4>\n    </div>\n\n    <div class=\"resource-pagination\">\n        <mat-paginator [length]=\"paginationInfo?.totalElements\"\n                       [pageSize]=\"pageSize\"\n                       [pageSizeOptions]=\"[10, 15, 20]\"\n                       (page)=\"onPaginationChange($event)\"\n                       #resourcesPaginator\n                       aria-label=\"Select page\">\n        </mat-paginator>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 81492:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/sale/sale.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"sale-container\">\n    <div class=\"container\">\n        <div class=\"sale-card d-flex\">\n            <div class=\"col-text\">\n                <p class=\"title-p mb-0\">Descarcă aplicația BESTINFORM</p>\n                <p class=\"details\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                <!-- <button class=\"btn-long btn-white-fill\">Află mai multe <i class=\"fas fa-arrow-right ml-2\"></i></button> -->\n                <div class=\"d-flex align-items-center justify-content-start gap-2 flex-wrap\">\n                    <button class=\"btn-long btn-white-fill\"><i class=\"fab fa-google-play\"></i> Get It on Google Play</button>\n                    <button class=\"btn-long btn-white-fill\"><i class=\"fab fa-apple\"></i> Download on the App Store</button>\n                </div>\n\n\n            </div>\n            <div class=\"col-img\">\n                <img src=\"../../../../../assets/images/others/sale.png\" class=\"img-fluid\">\n            </div>\n        </div>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 51696:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/sidebar-filters/sidebar-filters.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"sidebar-container d-flex flex-column-reverse flex-lg-column\">\n    <p class=\"m-0\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Search title</mat-label>\n            <input (keyup.enter)=\"searchByTitle()\" [(ngModel)]=\"resourceTitleToSearch\" matInput placeholder=\"Search in {{resouceTypeNameEn}}\">\n            <mat-icon role=\"button\" *ngIf=\"!resourceTitleToSearch\" matSuffix (click)=\"searchByTitle()\">search</mat-icon>\n            <mat-icon role=\"button\" *ngIf=\"resourceTitleToSearch\" matSuffix (click)=\"resourceTitleToSearch = null\">clear</mat-icon>\n        </mat-form-field>\n    </p>\n\n    <div *ngIf=\"filterAttributes && showFilters\" class=\"filters-container\">\n        <form (ngSubmit)=\"applyFilters()\" [formGroup]=\"filtersForm\">\n            <mat-accordion [multi]=\"true\">\n                <mat-expansion-panel *ngFor=\"let attribute of filterAttributes\" [expanded]=\"attribute.valueOptions.length <= 4\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title class=\"fw-bold\">\n                            {{ attribute.name }}\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <!-- DO NOT DELETE -->\n                    <!--<ng-container *ngIf=\"attribute.valueType === 'select'\">\n                        <mat-radio-group\n                                [formControlName]=\"attribute.name\">\n                            <mat-radio-button *ngFor=\"let valueOption of attribute.valueOptions\" [value]=\"valueOption\" color=\"primary\">\n                                {{valueOption}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"attribute.valueType === 'multiple-select'\" [formGroupName]=\"attribute.name\">\n                        <p *ngFor=\"let valueOption of attribute.valueOptions\" class=\"m-0\">\n                            <mat-checkbox [formControlName]=\"valueOption\" color=\"primary\">{{ valueOption }}</mat-checkbox>\n                        </p>\n                    </ng-container>-->\n\n                    <ng-container [formGroupName]=\"attribute.name\">\n                        <p *ngFor=\"let valueOption of attribute.valueOptions\" class=\"m-0\">\n                            <mat-checkbox [formControlName]=\"valueOption\" color=\"primary\">{{ valueOption | titlecase }}</mat-checkbox>\n                        </p>\n                    </ng-container>\n\n                </mat-expansion-panel>\n            </mat-accordion>\n\n            <div class=\"btn-container\" *ngIf=\"filterAttributes.length !== 0\">\n                <button *ngIf=\"anyFilterSelected\" (click)=\"resetFilters()\"\n                        type=\"button\"\n                        class=\"btn-auto btn-color-fill btn-reset\">\n                    <i class=\"fas fa-times\"></i>\n                    Clear Filters\n                </button>\n\n                <button type=\"submit\" class=\"btn-auto btn-color-fill\">\n                    <i class=\"fas fa-check\"></i>\n                    Apply\n                </button>\n            </div>\n        </form>\n    </div>\n\n    <button *ngIf=\"screenWidth < 992\" (click)=\"showFilters = !showFilters\" type=\"button\" class=\"btn-auto btn-color-fill\">\n        {{ showFilters ? 'Hide Filters' : 'Show Filters' }}\n    </button>\n\n</div>\n";

/***/ }),

/***/ 33504:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/toggle-sections/toggle-sections.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid row mx-0\">\n    <div class=\"col-12\">\n\n        <div class=\"container\">\n            <mat-tab-group mat-stretch-tabs=\"false\" dynamicHeight class=\"tab-homepage\" [selectedIndex]=\"tabIndex\" >\n                <mat-tab>\n                    <ng-template mat-tab-label>\n                        <i class=\"fas fa-calendar-alt mr-2\"></i>{{'GENERAL.EVENTS' | translate}}\n                    </ng-template>\n\n                    Work in progress\n                </mat-tab>\n\n                <mat-tab  >\n                    <ng-template mat-tab-label>\n                        <i class=\"fas fa-globe mr-2\"></i>{{'GENERAL.EXPLORE' | translate}}\n                    </ng-template>\n                    <div class=\"container section-explore\">\n                        <div class=\"row py-0 py-md-2\">\n                            <div class=\"col-12 col-md-4 px-2 grid-item\">\n                                <a href=\"\" >\n                                    <img src=\"../../../../../assets/images/others/1st.png\" width=\"100%\">\n                                    Food & Drinks\n                                </a>\n                            </div>\n                            <div class=\"col-12 col-md-4 px-2 grid-item\">\n                                <a>\n                                    <a href=\"\" >\n                                        <img src=\"../../../../../assets/images/others/transport.png\" width=\"100%\">\n                                        Transport\n                                    </a>\n                                </a>\n                            </div>\n                            <div class=\"col-12 col-md-4 px-2 grid-item\">\n                                <a>\n                                    <a href=\"\" >\n                                        <img src=\"../../../../../assets/images/others/accomodation.png\" width=\"100%\">\n                                        Accomodation\n                                    </a>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row py-0 py-md-2\">\n                            <div class=\"col-12 col-md-4 px-2 grid-item\">\n                                <a href=\"\" >\n                                    <img src=\"../../../../../assets/images/others/trips.png\" width=\"100%\">\n                                    Trips\n                                </a>\n                            </div>\n                            <div class=\"col-12 col-md-4 px-2 grid-item\">\n                                <a>\n                                    <a href=\"\" >\n                                        <img src=\"../../../../../assets/images/others/best.png\" width=\"100%\">\n                                        Best for you\n                                    </a>\n                                </a>\n                            </div>\n                            <div class=\"col-12 col-md-4 px-2 grid-item\">\n                                <a>\n                                    <a href=\"\" >\n                                        <img src=\"../../../../../assets/images/others/shared.png\" width=\"100%\">\n                                        Shared experience\n                                    </a>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row py-0 py-md-2\">\n                            <div class=\"col-12 col-md-4 px-2 grid-item\">\n                                <a href=\"\" >\n                                    <img src=\"../../../../../assets/images/others/attractions.png\" width=\"100%\">\n                                    Attractions\n                                </a>\n                            </div>\n                            <div class=\"col-12 col-md-4 px-2 grid-item\">\n                                <a>\n                                    <a href=\"\" >\n                                        <img src=\"../../../../../assets/images/others/cinema.png\" width=\"100%\">\n                                        Theatre & Cinema\n                                    </a>\n                                </a>\n                            </div>\n                            <div class=\"col-12 col-md-4 px-2 grid-item\">\n                                <a>\n                                    <a href=\"\" >\n                                        <img src=\"../../../../../assets/images/others/fun.png\" width=\"100%\">\n                                        Fun & More\n                                    </a>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n\n                <mat-tab>\n                    <ng-template mat-tab-label>\n                        <i class=\"fas fa-newspaper mr-2\"></i>{{'GENERAL.EDITORIALS' | translate}}\n                    </ng-template>\n\n                    Work in progress\n                </mat-tab>\n            </mat-tab-group>\n        </div>\n\n\n\n\n\n    </div>\n\n\n</div>\n";

/***/ }),

/***/ 65401:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/category-listing/category-listing.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n\n    <div *ngIf=\"categoryData\" class=\"background-container\">\n        <img [src]=\"categoryData?.image?.filePath\" alt=\"category-background-image\">\n        <p class=\"category-title\">{{ currentLanguage === 'ro' ? categoryData.nameRo : categoryData.nameEn }}</p>\n    </div>\n\n    <div class=\"content-container\">\n\n        <div *ngIf=\"listOfResourceTypes\" class=\"container categories-container\">\n            <div class=\"row\">\n                <ng-container *ngFor=\"let resourceType of listOfResourceTypes; let i = index\">\n                    <div class=\"col-12 col-md-6 col-lg-{{colArray[i]}}\">\n                        <app-category-card [imgPath]=\"resourceType?.image?.filePath\"\n                                           [nameRo]=\"resourceType?.nameRo\"\n                                           [nameEn]=\"resourceType?.nameEn\"\n                                           [routerLink]=\"resourceType?.transportOption ? resourceType.transportOption :\n                                                            resourceType?.routeOption ?  resourceType.routeOption :\n                                                             ['resource-type', resourceType.id]\"></app-category-card>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n";

/***/ }),

/***/ 72985:
/*!**********************************************************************************!*\
  !*** ./src/app/features/domain-listing/domain-listing.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\" >\n    <div *ngIf=\"currentDomain\" class=\"background-container\">\n        <div *ngIf=\"!domainLoaded\">\n            <!-- Show a loading spinner or placeholder -->\n            <p>Loading domain...</p>\n          </div>\n\n        <video *ngIf=\"domainLoaded\" autoplay loop muted plays-inline>\n            <source [src]=\"videoPath\" type=\"video/mp4\"  class=\"domain-background-video\">\n        </video>\n\n        <!-- <img [src]=\"currentDomain.image.filePath\" alt=\"domain-background-image\" > -->\n        <div class=\"search-bar\">\n            <mat-form-field class=\"w-100\" appearance=\"standard\">\n                <mat-label>Cauta resurse</mat-label>\n                <input [ngModel]=\"resourceTitle\"\n                       (ngModelChange)=\"onTitleChange($event)\"\n                       #titleInputText\n                       (keyup.enter)=\"searchResourcesByTitle(titleInputText.value)\"\n                       matInput placeholder=\"Search in {{currentDomain.nameEn}}\">\n                <mat-icon role=\"button\" *ngIf=\"!resourceTitle && !fetchingFilteredResources\" matSuffix (click)=\"searchResourcesByTitle(titleInputText.value)\">search</mat-icon>\n                <mat-icon role=\"button\" *ngIf=\"resourceTitle && !fetchingFilteredResources\" matSuffix (click)=\"resourceTitle = null; filteredResources = null; categoryId = null\">clear</mat-icon>\n                <mat-spinner *ngIf=\"fetchingFilteredResources\" [diameter]=\"21\" matSuffix></mat-spinner>\n            </mat-form-field>\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"!filteredResources; else filteredResourcesResults\">\n        <div class=\"content-container\">\n\n            <div *ngIf=\"listOfCategories\" class=\"container categories-container\">\n                <div class=\"row\">\n                    <ng-container *ngFor=\"let category of listOfCategories; let i = index\">\n                        <div class=\"col-12 col-md-6 col-lg-{{equalizedMatrix[i]}}\">\n                            <app-category-card [imgPath]=\"category?.image?.filePath\"\n                                               [nameEn]=\"category?.nameEn\"\n                                               [nameRo]=\"category?.nameRo\"\n                                               [routerLink]=\"category.nextRoute ? [category.nextRoute] : ['category', category.id]\"></app-category-card>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n\n            <app-events-carousel *ngIf=\"isTravelDomain && currentUser && eventsList\"\n                                 [currentUser]=\"currentUser\" \n                                 [eventsList]=\"eventsList\" \n                                 [categoryId]=\"systemSettingData.eventCategoryId\"\n                                 (resourceTypeEvent)=\"setEventType($event)\">\n            </app-events-carousel>\n\n            <app-editorials-carousel *ngIf=\"isTravelDomain && currentUser && editorialsList\"\n                                     [currentUser]=\"currentUser\" \n                                     [editorialsList]=\"editorialsList\"\n                                     (editorialTypeEvent)=\"setEditorialType($event)\">\n            </app-editorials-carousel>\n        </div>\n\n        <app-experiences *ngIf=\"isTravelDomain\"></app-experiences>\n\n        <app-popular-locations *ngIf=\"isTravelDomain\"></app-popular-locations>\n\n        <app-sale *ngIf=\"isTravelDomain\"></app-sale>\n    </ng-container>\n\n    <ng-template #filteredResourcesResults>\n        <div class=\"content-container\">\n            <div class=\"container\">\n                <mat-tab-group class=\"search-results-tabs\" mat-align-tabs=\"start\" [selectedIndex]=\"0\"\n                               (selectedTabChange)=\"\n                                   pageSize = 10;\n                                   pageIndex = 0;\n                                   $event.index === 0\n                                   ? categoryId = null\n                                   : categoryId = listOfCategories[$event.index - 1].id;\n                                   searchResourcesByTitle()\">\n                    <mat-tab label=\"All results\" (click)=\"searchResourcesByTitle()\">\n                        <ng-container *ngIf=\"!filteredResources?.empty; else noSearchResults\">\n                            <p>\n                                Search results matching \"{{ resourceTitle }}\"\n                            </p>\n\n                            <div class=\"resource-cards-container\">\n                                <ng-container *ngFor=\"let resource of filteredResources.content\">\n                                    <app-resource-card-with-template\n                                            [routerLink]=\"currentDomain.key !== 'jobs'\n                                                            ? ['category', resource.categoryId, 'resource-type', resource.resourceTypeId, 'view', resource.id]\n                                                            : ['jobs', 'view', resource.id]\"\n                                            [cardType]=\"'long'\"\n                                            [htmlDescription]=\"currentDomain.key === 'jobs'\"\n                                            [resourceData]=\"resource\">\n                                    </app-resource-card-with-template>\n                                </ng-container>\n                            </div>\n\n                            <mat-paginator [length]=\"filteredResources?.totalElements\"\n                                           [pageSize]=\"pageSize\"\n                                           [pageSizeOptions]=\"pageSizeOptions\"\n                                           (page)=\"pageSize = $event.pageSize; pageIndex = $event.pageIndex; searchResourcesByTitle()\"\n                                           aria-label=\"Select page\">\n                            </mat-paginator>\n                        </ng-container>\n                    </mat-tab>\n\n                    <ng-container *ngIf=\"currentDomain.key !== 'jobs'\">\n                        <ng-container *ngFor=\"let category of listOfCategories\">\n                            <ng-container *ngIf=\"category?.id\">\n                                <mat-tab [label]=\"category.nameEn\" (click)=\"searchResourcesByTitle()\">\n                                    <ng-container *ngIf=\"!filteredResources?.empty; else noSearchResults\">\n                                        <p>\n                                            Search results matching \"{{ resourceTitle }}\"\n                                        </p>\n\n                                        <div class=\"resource-cards-container\">\n                                            <ng-container *ngFor=\"let resource of filteredResources.content\">\n                                                <app-resource-card-with-template\n                                                        [routerLink]=\"['category', resource.categoryId, 'resource-type', resource.resourceTypeId, 'view', resource.id]\"\n                                                        [cardType]=\"'long'\"\n                                                        [resourceData]=\"resource\">\n                                                </app-resource-card-with-template>\n                                            </ng-container>\n                                        </div>\n\n                                        <mat-paginator [length]=\"filteredResources?.totalElements\"\n                                                       [pageSize]=\"pageSize\"\n                                                       [pageSizeOptions]=\"pageSizeOptions\"\n                                                       (page)=\"pageSize = $event.pageSize; pageIndex = $event.pageIndex; searchResourcesByTitle()\"\n                                                       aria-label=\"Select page\">\n                                        </mat-paginator>\n                                    </ng-container>\n                                </mat-tab>\n                            </ng-container>\n                        </ng-container>\n                    </ng-container>\n\n                </mat-tab-group>\n\n                <ng-template #noSearchResults>\n                    <h4 class=\"text-center\">\n                        No matching results for \"{{ resourceTitle }}\"\n                    </h4>\n                </ng-template>\n            </div>\n        </div>\n    </ng-template>\n\n</div>\n";

/***/ }),

/***/ 98814:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/resource-listing/resource-listing.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n\n    <div *ngIf=\"resourceTypeData\" class=\"background-container\">\n        <img [src]=\"resourceTypeData?.image?.filePath\" alt=\"category-background-image\">\n        <div class=\"overlay-elements\">\n            <p>{{ currentLanguage === 'ro' ? resourceTypeData.nameRo : resourceTypeData.nameEn }}</p>\n            <app-resource-filter-bar (filtersSubmitted)=\"scrollResourcesListIntoView()\"></app-resource-filter-bar>\n        </div>\n    </div>\n\n    <div class=\"content-container\">\n\n        <div class=\"container\">\n            <app-resources-carousel></app-resources-carousel>\n        </div>\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12 col-lg-3\">\n                    <div class=\"map-container d-flex justify-content-center align-items-center mb-4\">\n                        <button (click)=\"openMap()\" class=\"btn-long btn-color-fill\">See on map</button>\n                    </div>\n                    <app-sidebar-filters (filtersSubmitted)=\"scrollResourcesListIntoView()\"></app-sidebar-filters>\n                </div>\n\n                <div class=\"col-12 col-lg-9\" #resourcesList>\n                    <app-resources-list></app-resources-list>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 43902:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/available-car-rentals-list/available-car-rentals-list.component.html?ngResource ***!
  \****************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"car-rentals-header\">\n</div>\n\n<div class=\"content-container\">\n    <div class=\"container\">\n        <div class=\"d-flex justify-content-center align-items-center my-4\">\n            <h2>{{'TRANSPORT.CAR_RENT' | translate}}</h2>\n        </div>\n    </div>\n    <div class=\"d-flex gap-4 container flex-column flex-md-row\">\n        <!--filter tickets -->\n        <div class=\"col-md-3 d-flex flex-column\">\n            <app-tickets-filter-sidebar></app-tickets-filter-sidebar>\n            <app-ticket-filter-plus-sidebar></app-ticket-filter-plus-sidebar>\n        </div>\n        <!--tickets list / content-->\n        <div class=\"col-md-9\">\n            <app-location-card></app-location-card>\n            <app-available-ticket-card></app-available-ticket-card>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 6167:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/available-plane-tickets-list/available-plane-tickets-list.component.html?ngResource ***!
  \********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<div class=\"airplane-tickets-header\">\n    <!-- <img *ngIf=\"eventData?.featuredImage?.filePath\"\n    [src]=\"eventData.featuredImage.filePath\" class=\"thumbnail\" alt=\"thumbnail\"> -->\n</div>\n\n\n<div class=\"content-container\">\n    <div class=\"container\">\n        <div class=\"d-flex justify-content-center align-items-center my-4\">\n            <h2>{{'TRANSPORT.PLANE_TICKET' | translate}}</h2>\n        </div>\n    </div>\n    <div class=\"d-flex gap-4 container flex-column flex-md-row\">\n        <!--filter tickets -->\n        <div class=\"col-md-3 d-flex flex-column\">\n            <div class=\"filter-tickets-container\">\n                <h4>Tip zbor</h4>\n                <mat-checkbox>Zbor direct</mat-checkbox>\n                <mat-checkbox>Cu escală</mat-checkbox>\n\n<!--                <h4>Rating range</h4>-->\n<!--                <mat-checkbox formControlName=\"rate1\">&lt; 25%</mat-checkbox>-->\n<!--                <mat-checkbox formControlName=\"rate2\">25 - 50%</mat-checkbox>-->\n<!--                <mat-checkbox formControlName=\"rate3\">50 - 75%</mat-checkbox>-->\n<!--                <mat-checkbox formControlName=\"rate4\">>&gt; 75%</mat-checkbox>-->\n\n                <button class=\"btn-long btn-color-fill my-2\"><i class=\"fas fa-check\"></i> Apply</button>\n\n            </div>\n\n\n            <!--            <app-tickets-filter-sidebar></app-tickets-filter-sidebar>-->\n<!--            <app-ticket-filter-plus-sidebar></app-ticket-filter-plus-sidebar>-->\n        </div>\n        <!--tickets list / content-->\n        <div class=\"col-md-9\">\n<!--            <app-location-card></app-location-card>-->\n\n            <h4 *ngIf=\"!flights\">Se încarcă rezultatele...</h4>\n            <h4 *ngIf=\"flights?.length === 0\">Nu au fost găsite rezultate pentru această căutare.</h4>\n\n            <div *ngFor=\"let flight of flights\">\n\n                <div class=\"general-ticket-card\">\n                    <div class=\"bkg-grey first-line\">\n<!--                        <span *ngIf=\"flight?.oneWay\">-->\n<!--                            One Way Ticket-->\n<!--                        </span>-->\n\n<!--                        <span *ngIf=\"flight?.itineraries?.length === 1 && flight?.itineraries?.[0].direct\">-->\n<!--                            Direct Flight-->\n<!--                        </span>-->\n                    </div>\n                    <!--icon name airport-->\n                    <div class=\"bkg-white itinerary-row px-4\" *ngFor=\"let itinerary of flight.itineraries; let i = index\">\n                        <span class=\"indirect-flight-label\" *ngIf=\"!flight?.itineraries?.[i].direct\">Zbor cu escală ({{flight?.itineraries?.[i].segments.length - 1}})</span>\n                        <span class=\"direct-flight-label\" *ngIf=\"flight?.itineraries?.[i].direct\">Zbor direct</span>\n                        <div *ngFor=\"let segment of itinerary.segments\" class=\"flight-row\">\n                            <div  class=\"row align-items-center justify-space-between justify-content-between \">\n                                <div class=\"col-md-5 text-left\">\n                                    <span>{{segment.departure.dateTime | date: 'd/M/yyyy, h:mm a' }}</span>\n                                    <h4>{{segment.departure.iataCode}}</h4>\n                                </div>\n\n                                <div class=\"d-flex flex-column align-items-center middle-col col-md-2\">\n                                    <span>{{segment.company}}</span>\n                                    <span>\n                                        <i class=\"fas fa-arrow-right\"></i>\n                                    </span>\n                                    <span>{{segment.duration | flightDuration}}</span>\n\n                                </div>\n\n                                <div class=\"col-md-5 text-right\">\n                                    <span>{{segment.arrival.dateTime | date: 'd/M/yyyy, h:mm a' }}</span>\n                                    <h4>{{segment.arrival.iataCode}}</h4>\n                                </div>\n                            </div>\n\n                        </div>\n\n                    </div>\n                    <!--fly data-->\n<!--                    <div class=\"bkg-grey d-flex justify-content-between align-items-center py-2 px-4 flex-column flex-md-row\">-->\n<!--                        <div>-->\n<!--&lt;!&ndash;                            <p class=\"hour-1\"> {{ticket?.departureDate | date: \"HH:mm\"}} <i class=\"fas fa-arrow-right\"></i>  {{ticket?.arrivalDate | date: \"HH:mm\"}} </p>&ndash;&gt;-->\n<!--                        </div>-->\n<!--                        <div class=\"d-flex\">-->\n<!--                            <p class=\"hour-2 d-flex align-items-center justify-content-center px-4\"> <i class=\"far fa-clock\"></i> {{ticket?.transportDuration | minutesToHours}}</p>-->\n<!--                            <div class=\"d-flex flex-column align-items-end\" >-->\n<!--&lt;!&ndash;                                <p *ngIf=\"ticket?.stops===0\" class=\"type-flight green\">Direct</p>&ndash;&gt;-->\n<!--&lt;!&ndash;                                <p *ngIf=\"ticket?.stops>0\" class=\"type-flight red\">{{ticket?.stops}} stops</p>&ndash;&gt;-->\n<!--&lt;!&ndash;                                <p class=\"class-flight\">clasa: {{ticket?.travelClass}}</p>&ndash;&gt;-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n                    <!--book now button and price  -->\n                    <div class=\"bkg-last-line d-flex justify-content-md-end align-items-center flex-column flex-md-row\">\n                        <h4 class=\"d-flex align-items-center\"> {{flight?.totalPrice}} {{flight?.currency}} <span><i class=\"far fa-question-circle\"></i></span></h4>\n                        <button class=\"btn-long btn-color-fill\">Book now</button>\n                    </div>\n                </div>\n            </div>\n\n\n<!--            <p>OLD -&#45;&#45;&#45;&#45;&#45;&#45;</p>-->\n<!--            <app-available-ticket-card></app-available-ticket-card>-->\n\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 83139:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/available-train-tickets-list/available-train-tickets-list.component.html?ngResource ***!
  \********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<div class=\"train-tickets-header\">\n   \n</div>\n\n\n<div class=\"content-container\">\n    <div class=\"container\">\n        <div class=\"d-flex justify-content-center align-items-center my-4\">\n            <h2>{{'TRANSPORT.TRAIN_TICKET' | translate}}</h2>\n        </div>\n    </div>\n    <div class=\"d-flex gap-4 container flex-column flex-md-row\">\n        <!--filter tickets -->\n        <div class=\"col-md-3 d-flex flex-column\">\n            <app-tickets-filter-sidebar></app-tickets-filter-sidebar>\n            <app-ticket-filter-plus-sidebar></app-ticket-filter-plus-sidebar>\n        </div>\n        <!--tickets list / content-->\n        <div class=\"col-md-9\">\n            <app-location-card></app-location-card>\n            <app-available-ticket-card></app-available-ticket-card>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 74670:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/car-rentals/car-rentals.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"car-rentals-header\">\n</div>\n\n<div class=\"content-container\">\n    <div class=\"container\">\n        <div class=\"d-flex justify-content-center align-items-center my-4\">\n            <h2>{{'TRANSPORT.CAR_RENT' | translate}}</h2>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 col-lg-6 form-col\">\n\n                <form [formGroup]=\"rentalForm\">\n\n                    <h4 class=\"mb-0\"><i class=\"fas fa-car me-2\"></i> {{'TRANSPORT.SET-PICK-LOCATION'| translate}}</h4>\n                    <mat-form-field appearance=\"standard\" class=\"w-100 mb-2\">\n                        <mat-label>{{'TRANSPORT.PICK-LOCATION'| translate}}</mat-label>\n                        <input matInput placeholder=\"Pick-up location\" formControlName=\"pickUpLocation\">\n                        <i matSuffix class=\"fas fa-globe\"></i>\n                        <mat-error *ngIf=\"rentalForm.get('pickUpLocation').hasError('required')\">\n                            {{'ERROR.REQUIRED'| translate}}\n                        </mat-error>\n                    </mat-form-field>\n\n                    <h4 class=\"mb-0\"><i class=\"fas fa-car me-2\"></i> {{'TRANSPORT.SET-DROP-OFF-LOCATION'| translate}}</h4>\n                    <mat-form-field appearance=\"standard\" class=\"w-100 mb-2\">\n                        <mat-label> {{'TRANSPORT.DROP-OFF-LOCATION'| translate}}</mat-label>\n                        <input matInput placeholder=\"Drop off location\" formControlName=\"dropOffLocation\">\n                        <i matSuffix class=\"fas fa-globe\"></i>\n                        <mat-error *ngIf=\"rentalForm.get('dropOffLocation').hasError('required')\">\n                            {{'ERROR.REQUIRED'| translate}}\n                        </mat-error>\n                    </mat-form-field>\n\n                    <h4 class=\"mb-0\"><i class=\"fas fa-calendar-alt me-2\"></i> {{'TRANSPORT.SELECT-DATES'| translate}}</h4>\n\n                    <mat-form-field appearance=\"standard\" class=\"mb-2 w-100\">\n                        <mat-label>{{'TRANSPORT.DEPARTURE-DATE'| translate}}</mat-label>\n                        <input [min]=\"minDate\" formControlName=\"pickUpDate\" matInput [matDatepicker]=\"pickerDepartureDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerDepartureDate\">\n                            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #pickerDepartureDate></mat-datepicker>\n                        <mat-error *ngIf=\"rentalForm.get('pickUpDate').hasError('required')\">\n                            {{'ERROR.REQUIRED'| translate}}\n                        </mat-error>\n                    </mat-form-field>\n\n                    <!--Return date-->\n                    <mat-form-field appearance=\"standard\" class=\"w-100  mb-2\">\n                        <mat-label>{{'TRANSPORT.RETURN-DATE'| translate}}</mat-label>\n                        <input [min]=\"rentalForm.get('pickUpDate').value\" formControlName=\"dropOffDate\" matInput [matDatepicker]=\"pickerReturnDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerReturnDate\">\n                            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #pickerReturnDate></mat-datepicker>\n                        <mat-error *ngIf=\"rentalForm.get('dropOffDate').hasError('required')\">\n                            {{'ERROR.REQUIRED'| translate}}\n                        </mat-error>\n                    </mat-form-field>\n\n                    <button type=\"button\" class=\"btn-long btn-color-fill w-100\" (click)=\"checkAvailability()\" >\n                        <i class=\"fas fa-search\"></i>\n                        {{'TRANSPORT.CHECK-AVAILABILITY'| translate}}\n                    </button>\n                </form>\n            </div>\n            <div class=\"col-12 col-lg-6 img-col\">\n                <img src=\"assets/images/others/images-client/car-rentals.png\">\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 86427:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/components/available-ticket-card/available-ticket-card.component.html?ngResource ***!
  \*****************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"general-ticket-card\" *ngIf=\"!isCarList\">\n    <!--first row with buttons-->\n    <div class=\"bkg-grey first-label-line d-flex justify-content-between gap-2\">\n        <div class=\"label-recommended label\">\n            <p><i class=\"fas fa-star\"></i>\n                Recomandat</p>\n        </div>\n        <div class=\"label-cheapest label\"><p><i class=\"fas fa-dollar-sign\"></i> Cel mai ieftin</p></div>\n        <div class=\"label-fastest label\"><p><i class=\"fas fa-clock\"></i> Cel mai rapid</p></div>\n    </div>\n    <!--first empty row-->\n    <!-- <div class=\"bkg-grey first-line\">\n    </div> -->\n    <!--icon name airport-->\n    <div class=\"bkg-white d-flex justify-content-between align-items-center py-2 px-4 flex-column flex-md-row\">\n         <div class=\"d-flex justify-content-start\">\n            <img src=\"{{firstTicket?.iconPath}}\">\n            <h4>{{firstTicket?.from}}</h4>\n         </div>\n         <div>\n            <h4><i class=\"fas fa-arrow-right\"></i></h4>\n         </div>\n         <div>\n            <h4>{{firstTicket?.to}}</h4>\n         </div>\n    </div>\n    <!--fly data-->\n    <div class=\"bkg-grey d-flex justify-content-between align-items-center py-2 px-4 flex-column flex-md-row\">\n        <div>\n            <p class=\"hour-1\"> {{firstTicket?.departureDate | date: \"HH:mm\"}} <i class=\"fas fa-arrow-right\"></i>  {{firstTicket?.arrivalDate | date: \"HH:mm\"}} </p>\n        </div>\n        <div class=\"d-flex\">\n            <p class=\"hour-2 d-flex align-items-center justify-content-center px-4\"> <i class=\"far fa-clock\"></i> {{firstTicket?.transportDuration | minutesToHours}}</p>\n            <div class=\"d-flex flex-column align-items-end\" >\n                <p *ngIf=\"firstTicket?.stops===0\" class=\"type-flight green\">Direct</p>\n                <p *ngIf=\"firstTicket?.stops>0\" class=\"type-flight red\">{{firstTicket?.stops}} stops</p>\n                <p class=\"class-flight\">clasa: {{firstTicket?.travelClass}}</p>\n            </div>\n        </div>\n    </div>\n\n    <!--book now button and price    -->\n    <div class=\"bkg-last-line d-flex justify-content-md-end align-items-center flex-column flex-md-row\">\n        <h4 class=\"d-flex align-items-center\"> {{firstTicket?.price}} {{firstTicket?.currency}}  <span><i class=\"far fa-question-circle\"></i></span></h4>\n        <button class=\"btn-long btn-color-fill\" (click)=\"goToCheckout(firstTicket?.transportNumber)\">Book now</button>\n    </div>\n</div>\n\n\n<div *ngFor=\"let ticket of ticketList\">\n\n    <div class=\"general-ticket-card\" *ngIf=\"!isCarList\">\n        <div class=\"bkg-grey first-line\">\n        </div>\n        <!--icon name airport-->\n            <div class=\"bkg-white d-flex justify-content-between align-items-center py-2 px-4 flex-column flex-md-row\">\n                <div class=\"d-flex justify-content-start\">\n                   <img src=\"{{ticket?.iconPath}}\">\n                   <h4>{{ticket?.from}}</h4>\n                </div>\n                <div>\n                   <h4><i class=\"fas fa-arrow-right\"></i></h4>\n                </div>\n                <div>\n                   <h4>{{ticket?.to}}</h4>\n                </div>\n           </div>\n        <!--fly data-->\n            <div class=\"bkg-grey d-flex justify-content-between align-items-center py-2 px-4 flex-column flex-md-row\">\n                <div>\n                    <p class=\"hour-1\"> {{ticket?.departureDate | date: \"HH:mm\"}} <i class=\"fas fa-arrow-right\"></i>  {{ticket?.arrivalDate | date: \"HH:mm\"}} </p>\n                </div>\n                <div class=\"d-flex\">\n                    <p class=\"hour-2 d-flex align-items-center justify-content-center px-4\"> <i class=\"far fa-clock\"></i> {{ticket?.transportDuration | minutesToHours}}</p>\n                    <div class=\"d-flex flex-column align-items-end\" >\n                        <p *ngIf=\"ticket?.stops===0\" class=\"type-flight green\">Direct</p>\n                        <p *ngIf=\"ticket?.stops>0\" class=\"type-flight red\">{{ticket?.stops}} stops</p>\n                        <p class=\"class-flight\">clasa: {{ticket?.travelClass}}</p>\n                    </div>\n                </div>\n            </div>\n        <!--book now button and price  -->\n        <div class=\"bkg-last-line d-flex justify-content-md-end align-items-center flex-column flex-md-row\">\n            <h4 class=\"d-flex align-items-center\"> {{ticket?.price}} {{ticket?.currency}} <span><i class=\"far fa-question-circle\"></i></span></h4>\n            <button class=\"btn-long btn-color-fill\" (click)=\"goToCheckout(ticket?.transportNumber)\">Book now</button>\n        </div>\n    </div>\n\n    <div class=\"general-ticket-card\" *ngIf=\"isCarList\">\n\n        <!--icon name airport-->\n        <div class=\"bkg-white d-flex justify-content-between align-items-center flex-column flex-md-row\">\n            <div class=\"d-flex flex-column justify-content-start flex-lg-row\">\n                <img class=\"car-img\" alt=\"img\" src=\"{{ticket?.image.filePath}}\">\n                <div class=\"car-info d-flex flex-column justify-content-between\">\n                    <div class=\"top-info\">\n                        <h4>{{ticket?.name}}</h4>\n                        <p class=\"description\">{{ticket?.description}}</p>\n                    </div>\n                    <div class=\"small-info d-flex justify-content-start align-items-center flex-wrap\">\n                        <span><i class=\"fas fa-user me-1\"></i>{{ticket?.seats}}</span>\n                        <span><img src=\"assets/images/others/car-door.png\" alt=\"car-door\" class=\"car-door me-1\">{{ticket?.doors}}</span>\n                        <span><i class=\"fas fa-cog me-1\"></i>{{ticket?.transmission}}</span>\n                        <span><i class=\"fas fa-gas-pump me-1\"></i>{{ticket?.consumption}}</span>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n        <!--book now button and price  -->\n        <div class=\"bkg-last-line d-flex justify-content-md-end align-items-center flex-column flex-md-row\">\n            <h4 class=\"d-flex align-items-center\"> {{ticket?.price}} {{ticket?.currency}} / day<span><i class=\"far fa-question-circle\"></i></span></h4>\n            <button class=\"btn-long btn-color-fill\" (click)=\"goToCheckout(ticket.id)\">Book now</button>\n        </div>\n    </div>\n\n\n</div>\n\n";

/***/ }),

/***/ 42511:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/components/location-card/location-card.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"location-card-container container\">\n        <div class=\"d-flex justify-content-between align-items-center flex-column flex-md-row\">\n            <div> \n                <p><i class=\"fas fa-map-marker-alt\"></i>Timisoara, RO - Bucharest, RO</p>\n            </div>\n            <div>\n                <p><i class=\"fas fa-calendar-alt\"></i>22/07/2022 - 24/07/2022</p>\n            </div>\n            <div>\n                <p><i class=\"fas fa-user-friends\"></i>3 passengers</p>\n            </div>\n            \n        </div>    \n</div>";

/***/ }),

/***/ 42895:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/plane-tickets/plane-tickets.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<div class=\"airplane-tickets-header\">\n    <!-- <img *ngIf=\"eventData?.featuredImage?.filePath\"\n    [src]=\"eventData.featuredImage.filePath\" class=\"thumbnail\" alt=\"thumbnail\"> -->\n</div>\n\n\n<div class=\"content-container\">\n    <div class=\"container\">\n        <div class=\"d-flex justify-content-center align-items-center my-4\">\n            <h2>{{'TRANSPORT.PLANE_TICKET' | translate}}</h2>\n        </div>\n        <div class=\"row d-flex\">\n            <!--form col-->\n            <div class=\"form-container col-lg-6\">\n\n                <mat-button-toggle-group class=\"ticket-type-group w-100\" aria-label=\"Airline tickets\"  value=\"oneWay\">\n                    <mat-button-toggle class=\"w-50\" (change)=\"changeTab($event.value)\" value=\"oneWay\">One way</mat-button-toggle>\n                    <mat-button-toggle class=\"w-50\" (change)=\"changeTab($event.value)\" value=\"roundTrips\">Round trips</mat-button-toggle>\n                </mat-button-toggle-group>\n\n                <div class=\"filter-list\">\n\n                <form [formGroup]=\"airplaneTicketForm\" class=\"my-4\">\n                    <!-- Departure Airport -->\n                    <h4><i class=\"fas fa-plane\"></i> {{\"TRANSPORT.SET-DEP-AIRPORT\" | translate}}</h4>\n                    <!-- <mat-form-field>\n                        <mat-label>{{\"TRANSPORT.DEP-AIRPORT\" | translate}}</mat-label>\n                        <input matInput placeholder=\"Departure Airport\" formControlName=\"departureAirport\" >\n                            <i matSuffix class=\"fas fa-plane-departure\"></i>\n                        <mat-error *ngIf=\"airplaneTicketForm.controls.departureAirport.hasError('required')\">\n                            {{\"ERROR.REQUIRED\" | translate}}\n                        </mat-error>\n                    </mat-form-field> -->\n\n                    <mat-form-field>\n                        <mat-label>{{\"TRANSPORT.DEP-AIRPORT\" | translate}}</mat-label>\n                        <input matInput\n                        placeholder=\"Departure Airport\"\n                               formControlName=\"departureAirport\"\n                                (ngModelChange)=\"getCityCodeDeparture()\">\n                            <i matSuffix class=\"fas fa-plane-departure\"></i>\n                        <mat-error *ngIf=\"airplaneTicketForm.controls.departureAirport.hasError('required') && airplaneTicketForm.controls.departureAirport.touched\">\n                            {{\"ERROR.REQUIRED\" | translate}}\n                        </mat-error>\n                    </mat-form-field>\n\n\n\n                    <div class=\"destinations-container\" >\n                        <div *ngFor=\"let airport of recommendedDepartureAirport | slice : 0 : 5\"\n                             (click)=\"updateFormValue('departureAirport', airport.airportIataCode)\"\n                             class=\"destination-element\">\n                            <span class=\"destination-icon\">\n                                <i class=\"fas fa-map-marker-alt\"></i>\n                            </span>\n                            <p>{{ airport.airportIataCode}} - {{airport.airportName}} ({{airport.cityName}}, {{airport.countryName}})</p>\n                        </div>\n                    </div>\n\n                    <!-- Arrival Airport -->\n                    <h4><i class=\"fas fa-plane\"></i> {{\"TRANSPORT.SET-ARRIVAL-AIRPORT\" | translate}}</h4>\n<!--                    <mat-form-field>-->\n<!--                        <mat-label>{{\"TRANSPORT.ARRIVAL-AIRPORT\" | translate}}</mat-label>-->\n<!--                        <input matInput placeholder=\"Arrival Airport\" formControlName=\"arrivalAirport\">-->\n<!--                        <i matSuffix class=\"fas fa-plane-arrival\"></i>-->\n<!--                        <mat-error *ngIf=\"airplaneTicketForm.controls.departureAirport.hasError('required')\">-->\n<!--                            {{\"ERROR.REQUIRED\" | translate}}-->\n<!--                        </mat-error>-->\n<!--                    </mat-form-field>-->\n\n                    <mat-form-field>\n                        <mat-label>{{\"TRANSPORT.DEP-AIRPORT\" | translate}}</mat-label>\n                        <input matInput\n                               placeholder=\"Arrival Airport\"\n                               formControlName=\"arrivalAirport\"\n                               (ngModelChange)=\"getCityCodeArrival()\">\n                        <i matSuffix class=\"fas fa-plane-arrival\"></i>\n                        <mat-error *ngIf=\"airplaneTicketForm.controls.arrivalAirport.hasError('required') && airplaneTicketForm.controls.arrivalAirport.touched\">\n                            {{\"ERROR.REQUIRED\" | translate}}\n                        </mat-error>\n                    </mat-form-field>\n\n\n                    <div class=\"destinations-container\" >\n                        <div *ngFor=\"let airport of recommendedArrivalAirport | slice : 0 : 5\"\n                             (click)=\"updateFormValue('arrivalAirport', airport.airportIataCode)\"\n                             class=\"destination-element\">\n                            <span class=\"destination-icon\">\n                                <i class=\"fas fa-map-marker-alt\"></i>\n                            </span>\n                            <p>{{ airport.airportIataCode}} - {{airport.airportName}} ({{airport.cityName}}, {{airport.countryName}})</p>\n                        </div>\n                    </div>\n\n\n\n\n                    <!--Departure date-->\n                    <h4><i class=\"fas fa-calendar-alt\"></i>{{\"TRANSPORT.SELECT-DATES\" | translate}}</h4>\n\n                    <mat-form-field class=\"mb-2\">\n                        <mat-label>{{\"TRANSPORT.DEPARTURE-DATE\" | translate}}</mat-label>\n                        <input [min]=\"minDate\" formControlName=\"departureDate\" matInput [matDatepicker]=\"pickerDepartureDate\">\n                        <mat-hint >dd-MM-yyyy</mat-hint>\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerDepartureDate\">\n                            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #pickerDepartureDate></mat-datepicker>\n                        <mat-error *ngIf=\"airplaneTicketForm.controls.departureDate.hasError('required')\">\n                            {{\"ERROR.REQUIRED\" | translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"airplaneTicketForm.controls.departureDate.hasError('min')\">\n                            {{\"ERROR.PAST-DATE\" | translate}}\n                        </mat-error>\n                    </mat-form-field>\n\n                    <!--Return date-->\n                    <mat-form-field *ngIf=\"roundTrip\">\n                        <mat-label>{{\"TRANSPORT.RETURN-DATE-PLANE\" | translate}}</mat-label>\n                        <input formControlName=\"returnDate\" matInput [matDatepicker]=\"pickerReturnDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerReturnDate\">\n                            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #pickerReturnDate></mat-datepicker>\n                        <mat-error *ngIf=\"!roundTrip && (airplaneTicketForm.controls.returnDate.hasError('required'))\">\n                            {{\"ERROR.REQUIRED\" | translate}}\n                        </mat-error>\n                    </mat-form-field>\n\n                    <!--Set travel class-->\n                    <h4><i class=\"fas fa-star\"></i>{{\"TRANSPORT.SET-CLASS\" | translate}}</h4>\n\n                    <mat-button-toggle-group class=\"travel-class-group\" formControlName=\"travelClass\" mat-raised-button color=\"primary\">\n                        <mat-button-toggle value=\"ECONOMY\">Economy</mat-button-toggle>\n                        <mat-button-toggle value=\"PREMIUM_ECONOMY\">Economy +</mat-button-toggle>\n                        <mat-button-toggle value=\"BUSINESS\">Business</mat-button-toggle>\n                        <mat-button-toggle value=\"FIRST\">First</mat-button-toggle>\n                    </mat-button-toggle-group>\n                    <!-- <mat-error *ngIf=\"(airplaneTicketForm.get('travelClass').value === '') && (airplaneTicketForm.get('travelClass').touched)\">\n                        Acest camp este obligatoriu.\n                    </mat-error> -->\n                    <mat-error *ngIf=\"travelClass\">\n                        {{\"ERROR.REQUIRED\" | translate}}\n                    </mat-error>\n\n                    <!--Select passengers-->\n                    <!--adults-->\n                    <h4><i class=\"fas fa-users\"></i> {{\"TRANSPORT.SELECT-PASSENGERS\" | translate}}</h4>\n                    <div class=\"noPassengers\">\n\n                        <button class=\"btnPassangers \" (click)=\"decrementNumberAdults()\"><i class=\"fas fa-chevron-left\"></i></button>\n                        <p>\n                            {{airplaneTicketForm.get('passengersAdults').value === null ? 0 : airplaneTicketForm.get('passengersAdults').value}} {{\"RESERVATION.ADULTS\"| translate}}\n                        </p>\n                        <button class=\"btnPassangers\" (click)=\"incrementNumberAdults()\"><i class=\"fas fa-chevron-right\"></i></button>\n                    </div>\n                    <mat-error *ngIf=\"airplaneTicketForm.controls.passengersAdults.hasError('min')\">\n                        {{\"ERROR.REQUIRED\" | translate}}\n                    </mat-error>\n                    <div class=\"noPassengers\">\n                        <button class=\"btnPassangers \" (click)=\"decrementNumberChildren()\"><i class=\"fas fa-chevron-left\"></i></button>\n                        <p>\n                            <!-- {{this.childrenNumber}} children -->\n                            {{airplaneTicketForm.get('passengersChildren').value === null ? 0 : airplaneTicketForm.get('passengersChildren').value}} {{\"RESERVATION.CHILDREN\"| translate}}\n\n                        </p>\n                        <button class=\"btnPassangers\" (click)=\"incrementNumberChildren()\"><i class=\"fas fa-chevron-right\"></i></button>\n                    </div>\n                    <mat-error *ngIf=\"airplaneTicketForm.controls.passengersChildren.hasError('min')\">\n                        {{\"ERROR.REQUIRED\" | translate}}\n                    </mat-error>\n                    <mat-error *ngIf=\"(airplaneTicketForm.get('passengersChildren').value === 0 || airplaneTicketForm.get('passengersChildren').value === null) && (airplaneTicketForm.get('passengersAdults').value === 0 || airplaneTicketForm.get('passengersAdults').value === null) \">\n                        {{\"ERROR.PASSENGERS-NUMBER\" | translate}}\n\n                    </mat-error>\n                    <!--submit Button roundTrip form-->\n                    <div *ngIf=\"roundTrip\">\n                        <button type=\"button\" class=\"btn-long btn-color-fill w-100\"\n                        (click)=\"checkAvilability($event)\" >\n                        <i class=\"fas fa-search\"></i>\n                        {{\"TRANSPORT.CHECK-AVAILABILITY\" | translate}}\n                        </button>\n                    </div>\n\n                    <!--submit Button oneWay from-->\n                    <div *ngIf=\"!roundTrip\">\n                        <button type=\"button\" class=\"btn-long btn-color-fill w-100\"\n                        (click)=\"checkAvilability($event)\" >\n                        <i class=\"fas fa-search\"></i>\n                        {{\"TRANSPORT.CHECK-AVAILABILITY\" | translate}}\n                        </button>\n                    </div>\n\n                </form>\n\n\n\n\n            </div>\n\n            <!--Image col-->\n            <div class=\"img-container col-lg-6\">\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 19950:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/transportation/train-tickets/train-tickets.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"train-tickets-header\">\n</div>\n\n<div class=\"content-container\">\n    <div class=\"container\">\n        <div class=\"d-flex justify-content-center align-items-center my-4\">\n            <h2>{{\"TRANSPORT.TRAIN_TICKET\"|translate}}</h2>\n        </div>\n\n        <div class=\"row d-flex\">\n            <!--form col-->\n            <div class=\"form-container col-lg-6\">\n\n                <mat-button-toggle-group class=\"ticket-type-group w-100\" aria-label=\"Train tickets\"  value=\"oneWay\">\n                    <mat-button-toggle class=\"w-50\" (change)=\"changeTab($event.value)\" value=\"oneWay\">One way</mat-button-toggle>\n                    <mat-button-toggle class=\"w-50\" (change)=\"changeTab($event.value)\" value=\"roundTrips\">Round trips</mat-button-toggle>\n                </mat-button-toggle-group>\n\n                <form [formGroup]=\"trainTicketForm\" class=\"my-4\">\n                    <!--Departure Train station -->\n                    <h4><i class=\"fas fa-subway\"></i>{{\"TRANSPORT.SET-DEPARTURE-TRAIN-STATION\"|translate}}</h4>\n                    <mat-form-field>\n                        <mat-label>{{\"TRANSPORT.DEPARTURE-TRAIN-STATION\"|translate}}</mat-label>\n                        <input matInput placeholder=\"Departure Train station\" formControlName=\"departureTrainStation\">\n                            <i matSuffix class=\"fas fa-globe\"></i>\n                        <mat-error *ngIf=\"trainTicketForm.controls.departureTrainStation.hasError('required')\">\n                            {{\"ERROR.REQUIRED\"|translate}}\n                        </mat-error>\n                    </mat-form-field>\n                    <!-- Arrival Train station-->\n                    <h4><i class=\"fas fa-subway\"></i> {{\"TRANSPORT.SET-ARRIVAL-TRAIN-STATION\"|translate}}</h4>\n                    <mat-form-field>\n                        <mat-label> {{\"TRANSPORT.ARRIVAL-TRAIN-STATION\"|translate}}</mat-label>\n                        <input matInput placeholder=\"Arrival Train station\" formControlName=\"arrivalTrainStation\">\n                        <i matSuffix class=\"fas fa-globe\"></i>\n                        <mat-error *ngIf=\"trainTicketForm.controls.arrivalTrainStation.hasError('required')\">\n                            {{\"ERROR.REQUIRED\"|translate}}\n                        </mat-error>\n                    </mat-form-field>\n                    <!--Departure date-->\n                    <h4><i class=\"fas fa-calendar-alt\"></i>{{\"TRANSPORT.SELECT-DATES\"|translate}} </h4>\n\n                    <mat-form-field class=\"mb-2\">\n                        <mat-label>{{\"TRANSPORT.DEPARTURE-DATE\"|translate}} </mat-label>\n                        <input [min]=\"minDate\" formControlName=\"departureDate\" matInput [matDatepicker]=\"pickerDepartureDate\">\n                        <mat-hint>dd-MM-yyyy</mat-hint>\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerDepartureDate\">\n                            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #pickerDepartureDate></mat-datepicker>\n                        <mat-error *ngIf=\"trainTicketForm.controls.departureDate.hasError('required')\">\n                            {{\"ERROR.REQUIRED\"|translate}}\n                        </mat-error>\n                        <mat-error *ngIf=\"trainTicketForm.controls.departureDate.hasError('min')\">\n                            {{\"ERROR.PAST-DATE\"|translate}}\n                        </mat-error>\n                    </mat-form-field>\n\n                    <!--Return date-->\n                    <mat-form-field *ngIf=\"!oneWay\">\n                        <mat-label>{{\"TRANSPORT.RETURN-DATE-PLANE\"|translate}}</mat-label>\n                        <input formControlName=\"returnDate\" matInput [matDatepicker]=\"pickerReturnDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerReturnDate\">\n                            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #pickerReturnDate></mat-datepicker>\n                         <!-- <mat-error *ngIf=\"(oneWay===false) && (trainTicketForm.controls.returnDate.hasError('required'))\">  -->\n                        <mat-error *ngIf=\"trainTicketForm.controls.returnDate.hasError('required')\"> \n                            {{\"ERROR.REQUIRED\"|translate}}\n                        </mat-error>\n                    </mat-form-field>\n\n                    <!--Set travel class-->\n                    <h4><i class=\"fas fa-star\"></i>{{\"TRANSPORT.SET-CLASS\"|translate}}</h4>\n\n                    <mat-button-toggle-group class=\"travel-class-group\" formControlName=\"travelClass\" mat-raised-button color=\"primary\">\n                        <mat-button-toggle value=\"Economy\">Economy</mat-button-toggle>\n                        <mat-button-toggle value=\"Economy +\">Economy +</mat-button-toggle>\n                        <mat-button-toggle value=\"Business\">Business</mat-button-toggle>\n                        <mat-button-toggle value=\"First\">First</mat-button-toggle>\n                    </mat-button-toggle-group>\n                    <!-- <mat-error *ngIf=\"(trainTicketForm.get('travelClass').value === '') &&(trainTicketForm.get('travelClass').touched)\">\n                        {{\"ERROR.REQUIRED\"|translate}}\n                    </mat-error> -->\n                    <mat-error *ngIf=\"travelClass\">\n                        {{\"ERROR.REQUIRED\"|translate}}\n                    </mat-error>\n\n                    <!--Select passengers-->\n                    <!--adults-->\n                    <h4><i class=\"fas fa-users\"></i> {{\"TRANSPORT.SELECT-PASSENGERS\"|translate}}</h4>\n                    <div class=\"noPassengers\">\n\n                        <button class=\"btnPassangers \" (click)=\"decrementNumberAdults()\"><i class=\"fas fa-chevron-left\"></i></button>\n                        <p>\n                            {{trainTicketForm.get('passengersAdults').value === null ? 0 : trainTicketForm.get('passengersAdults').value}} {{\"RESERVATION.ADULTS\"|translate}}\n                        </p>\n                        <button class=\"btnPassangers\" (click)=\"incrementNumberAdults()\"><i class=\"fas fa-chevron-right\"></i></button>\n                    </div>\n                    <mat-error *ngIf=\"trainTicketForm.controls.passengersAdults.hasError('min')\">\n                        {{\"ERROR.REQUIRED\"|translate}}\n                    </mat-error>\n                    <div class=\"noPassengers\">\n                        <button class=\"btnPassangers \" (click)=\"decrementNumberChildren()\"><i class=\"fas fa-chevron-left\"></i></button>\n                        <p>\n                            {{trainTicketForm.get('passengersChildren').value === null ? 0 : trainTicketForm.get('passengersChildren').value}} {{\"RESERVATION.CHILDREN\"|translate}}\n                        </p>\n                        <button class=\"btnPassangers\" (click)=\"incrementNumberChildren()\"><i class=\"fas fa-chevron-right\"></i></button>\n                    </div>\n                    <mat-error *ngIf=\"trainTicketForm.controls.passengersChildren.hasError('min')\">\n                        {{\"ERROR.NEGATIVE-NUMBER\"|translate}}\n                    </mat-error>\n                    <mat-error *ngIf=\"(trainTicketForm.get('passengersChildren').value === 0 || trainTicketForm.get('passengersChildren').value === null) && (trainTicketForm.get('passengersAdults').value === 0 || trainTicketForm.get('passengersAdults').value === null) \">\n                        {{\"ERROR.PASSENGERS-NUMBER\"|translate}}\n                    </mat-error>\n                    <!--submit Button roundTrip form-->\n                    <div *ngIf=\"oneWay\">\n                        <button type=\"button\" class=\"btn-long btn-color-fill w-100\"\n                        (click)=\"checkAvilability()\" >\n                        <i class=\"fas fa-search\"></i>\n                        {{\"TRANSPORT.CHECK-AVAILABILITY\"|translate}}\n                        </button>\n                    </div>\n\n                    <!--submit Button oneWay from-->\n                    <div *ngIf=\"!oneWay\">\n                        <button type=\"button\" class=\"btn-long btn-color-fill w-100\"\n                        (click)=\"checkAvilability()\" >\n                        <i class=\"fas fa-search\"></i>\n                        {{\"TRANSPORT.CHECK-AVAILABILITY\"|translate}}\n                        </button>\n                    </div>\n\n                </form>\n\n            </div>\n\n            <!--Image col-->\n            <div class=\"img-container col-lg-6\">\n            </div>\n                \n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 67696:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/menu/menu.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<div *ngFor=\"let item of menuItems\">\n    <div class=\"my-2\">\n        <h3 class=\"my-4\">\n            {{item.categoryName}}\n        </h3>\n        <div *ngFor=\"let subcategory of item?.subCategories\">\n            <h4>\n                {{subcategory?.subCategoryName}}\n            </h4>\n            <div *ngFor=\"let item of subcategory.subCategoryItems \" class=\"d-flex justify-content-between align-items-center \">\n                <div class=\"w-75\">\n\n                    <h5>{{item.name}}</h5>\n                    <p>\n                        <span>Ingrediente: </span>{{item.ingredients}}\n                    </p>\n                    <p><span>Alergeni: </span>{{item.allergens}}</p>\n                    <p><span>Informatii nutritionale: </span>{{item.nutritionalFacts}}</p>\n                </div>\n                <div class=\"d-flex justify-content-center align-items-end flex-column w-25\">\n                    <h5>\n                        {{item.price}} {{currency}}\n                    </h5>\n                    <p>\n                        {{item.weight}} gr\n                    </p>\n                </div>\n\n            </div>\n            \n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 85090:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/picker-items/picker-items.component.html?ngResource ***!
  \*****************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"availablePickerItems && availablePickerItems > 0; else noPickerItemsAvailable\">\n    <p class=\"booking-section-title\">\n        <i class=\"fas fa-users\"></i>\n        {{ \"RESOURCE.RES-FILTERS.SELECT_GUESTS\" | translate }}\n        <ng-container *ngIf=\"!ignoreAvailability\">\n            ({{guestsForm.controls.adultsNumber.value + guestsForm.controls.childrenNumber.value}} / {{ availablePickerItems }})\n        </ng-container>\n    </p>\n\n    <div class=\"row row-gap\">\n        <div class=\"col-12 col-lg-6\">\n            <div class=\"guests-selector\">\n                <button [disabled]=\"guestsForm.controls.adultsNumber.value === 1 || isItineraryModal\"\n                        (click)=\"decreaseNrGuests('adultsNumber')\">\n                    <i class=\"fas fa-angle-left\"></i>\n                </button>\n                <p>\n                    {{ guestsForm.controls.adultsNumber.value }}\n                    {{ \"RESOURCE.RES-FILTERS.NR_ADULTS\" | translate }}\n                </p>\n                <button [disabled]=\"(guestsForm.controls.adultsNumber.value + guestsForm.controls.childrenNumber.value === availablePickerItems) || isItineraryModal\"\n                        (click)=\"increaseNrGuests('adultsNumber')\">\n                    <i class=\"fas fa-angle-right\"></i>\n                </button>\n            </div>\n        </div>\n\n        <div class=\"col-12 col-lg-6\">\n            <div class=\"guests-selector\">\n                <button [disabled]=\"guestsForm.controls.childrenNumber.value === 0 || isItineraryModal\"\n                        (click)=\"decreaseNrGuests('childrenNumber')\">\n                    <i class=\"fas fa-angle-left\"></i>\n                </button>\n                <p>\n                    {{ guestsForm.controls.childrenNumber.value }}\n                    {{ \"RESOURCE.RES-FILTERS.NR_CHILDREN\" | translate }}\n                </p>\n                <button [disabled]=\"(guestsForm.controls.adultsNumber.value + guestsForm.controls.childrenNumber.value === availablePickerItems) || isItineraryModal\"\n                        (click)=\"increaseNrGuests('childrenNumber')\">\n                    <i class=\"fas fa-angle-right\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <button *ngIf=\"!isItineraryModal\" type=\"button\" class=\"btn-auto btn-color-fill w-100 mt-4\" (click)=\"confirmSelection()\">\n        <i class=\"fas fa-check\"></i>\n        Reserve now\n    </button>\n\n    <p class=\"mt-3\" *ngIf=\"optionsTodayPayment > 0\">Veți achita suma de <strong>€ {{optionsTodayPayment | number: '1.0-2'}}</strong> reprezentând <strong>depozitul</strong> pentru rezervarea dumneavoastra.</p>\n\n    <p class=\"mt-3\" *ngIf=\"optionsTodayPayment === 0\">Astăzi nu trebuie să achitați nimic pentru rezervarea dumneavoastră. :)</p>\n\n    <button *ngIf=\"isItineraryModal\" type=\"button\" class=\"btn-auto btn-color-fill w-100 mt-4\" [matDialogClose]=\"bookingPolicies.depositRequiredAmount\">\n        <i class=\"fas fa-check\"></i>\n        Confirm selection\n    </button>\n</ng-container>\n\n<ng-template #noPickerItemsAvailable>\n    <h3 class=\"text-center\">\n        {{ \"TOAST.BOOKING.NOT_ENOUGH\" | translate }}\n    </h3>\n</ng-template>\n";

/***/ }),

/***/ 74459:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/products-list/products-list.component.html?ngResource ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"products; else noProductsAvailable\">\n    <p class=\"booking-section-title\">\n        See your options\n    </p>\n\n    <div class=\"product-cards-container\">\n        <div *ngFor=\"let product of products\" class=\"product-card\">\n            <div class=\"img-container\">\n                <img *ngIf=\"product?.images?.length > 0\"\n                     [src]=\"product?.images[0]?.filePath\" alt=\"product picture\">\n                <button class=\"favorite-btn\">\n                    <i class=\"far fa-star\"></i>\n                </button>\n            </div>\n\n            <div class=\"top-half d-flex justify-content-between align-items-center\">\n                <p>\n                    {{ product.name }}\n                </p>\n<!--                <button class=\"btn-no-outline\" matTooltip=\"Descarca atasament\" (click)=\"downloadProduct(product)\"><i class=\"fas fa-download\"></i></button>-->\n            </div>\n\n            <div class=\"bottom-half\">\n                <button class=\"btn-auto btn-color-fill\" (click)=\"selectProduct(product)\">\n                    {{ \"RESOURCE.BUY_NOW\" | translate }}\n                </button>\n\n                <p>\n                    €{{ product.price }}\n                    <i class=\"far fa-question-circle\"\n                       matTooltip=\"This price is limited only for this option\"\n                       matTooltipPosition=\"above\"></i>\n                </p>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n<ng-template #noProductsAvailable>\n    <h3 class=\"text-center\">\n        {{ \"TOAST.BOOKING.NOT_ENOUGH\" | translate }}\n    </h3>\n</ng-template>\n";

/***/ }),

/***/ 91427:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/rooms-list/rooms-list.component.html?ngResource ***!
  \*************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"recommendedRooms && !isItineraryModal\">\n    <p class=\"booking-section-title\">\n        Our recommendation\n    </p>\n\n    <div class=\"booking-items-container\">\n        <div class=\"row mb-4\">\n            <div class=\"col-12 col-lg-6\"\n                 *ngFor=\"let room of recommendedRooms\">\n                <app-room-card [room]=\"room\" [totalNights]=\"totalNights\" [recommendation]=\"true\"></app-room-card>\n            </div>\n        </div>\n\n        <div class=\"room-price-footer d-flex justify-content-between align-items-center\">\n            <div class=\"d-flex flex-column align-items-start\">\n                <p>\n                    € {{ recommendedRoomsPrice }}\n                    <span class=\"payment-details\" *ngIf=\"recTodayPayment > 0 && recTodayPayment !== recommendedRoomsPrice\">(acum veți achita doar € {{recTodayPayment | number: '1.0-2'}})</span>\n                </p>\n\n                <p>\n                    {{ recommendedRoomsNr }} rooms / max {{ nrOfPeopleForRecommendedRooms }} guests\n                </p>\n            </div>\n\n            <button type=\"button\" class=\"btn-auto btn-color-fill\" (click)=\"reserveRecommendedRooms()\">\n                <i class=\"fas fa-check\"></i>\n                Reserve now\n            </button>\n        </div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"availableRooms; else noRoomsAvailable\">\n    <p class=\"booking-section-title\">\n        See your options\n    </p>\n\n    <div class=\"row mb-4\">\n        <div class=\"col-12 col-lg-6\"\n             *ngFor=\"let room of availableRooms\">\n            <app-room-card [room]=\"room\"\n                           [reservationQty]=\"roomDictionary?.[room.id] || 0\"\n                           [totalNights]=\"totalNights\"\n                           (roomNrChange)=\"handleNewRoomNr($event)\"\n                           [recommendation]=\"false\"></app-room-card>\n        </div>\n    </div>\n\n    <div class=\"room-price-footer d-flex justify-content-between align-items-center\">\n        <div class=\"d-flex flex-column align-items-start\">\n            <p>\n                € {{ availableRoomsTotalPrice }}\n                <span class=\"payment-details\" *ngIf=\"optionsTodayPayment > 0 && optionsTodayPayment !== availableRoomsTotalPrice\">(acum veți achita doar € {{optionsTodayPayment | number: '1.0-2'}})</span>\n            </p>\n            <p>\n                {{ selectedRoomsNr }} rooms / max {{ nrOfPeopleForSelectedRooms }} guests\n            </p>\n        </div>\n\n        <button *ngIf=\"selectedRoomsNr > 0 && !isItineraryModal\" type=\"button\" class=\"btn-auto btn-color-fill\" [routerLink]=\"['checkout']\">\n            <i class=\"fas fa-check\"></i>\n            Reserve now\n        </button>\n\n        <button *ngIf=\"selectedRoomsNr > 0 && isItineraryModal\" type=\"button\" class=\"btn-auto btn-color-fill\" [matDialogClose]=\"roomSelection\">\n            <i class=\"fas fa-check\"></i>\n            Confirm selection\n        </button>\n    </div>\n</ng-container>\n\n<ng-template #noRoomsAvailable>\n    <h3 class=\"text-center\">\n        {{ \"TOAST.BOOKING.NOT_ENOUGH\" | translate }}\n    </h3>\n</ng-template>\n";

/***/ }),

/***/ 4364:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/seat-selection/seat-selection.component.html?ngResource ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"culturalRoom && resourceData; else noCulturalRoomFound\">\n    <p class=\"booking-section-title\">\n        Select your seats\n    </p>\n\n    <app-seats-viewer [culturalRoom]=\"culturalRoom\" (seatSelection)=\"handleSeatSelection($event)\"></app-seats-viewer>\n\n    <div *ngIf=\"selectedSeats.length > 0\" class=\"seat-price-footer d-flex justify-content-between align-items-center\">\n        <div class=\"d-flex flex-column align-items-start\">\n            <p>\n                Total price: €{{ totalPrice }}\n            </p>\n\n            <p>\n                Selected seats:\n                <ng-container *ngFor=\"let seat of selectedSeats; let last = last\">\n                    {{ seat.rowLabel + '_' + seat.seatColumnLabel }}\n                    <ng-container *ngIf=\"!last\">\n                        ,\n                    </ng-container>\n                </ng-container>\n            </p>\n        </div>\n\n        <button type=\"button\" class=\"btn-auto btn-color-fill\"\n                (click)=\"confirmSeats()\">\n            <i class=\"fas fa-check\"></i>\n            Reserve now\n        </button>\n    </div>\n\n</ng-container>\n\n<ng-template #noCulturalRoomFound>\n    <h3 class=\"text-center\">\n        {{ \"TOAST.BOOKING.NOT_FOUND\" | translate }}\n    </h3>\n</ng-template>\n";

/***/ }),

/***/ 33142:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/tickets-list/tickets-list.component.html?ngResource ***!
  \*****************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"availableTickets; else noTicketsAvailable\">\n    <p class=\"booking-section-title\">\n        See your options\n    </p>\n\n    <div class=\"tickets-container\">\n        <div *ngFor=\"let ticket of availableTickets\" class=\"ticket-container d-flex justify-content-between align-items-center\">\n            <p class=\"ticket-name m-0\">\n                {{ ticket.name }}\n            </p>\n\n            <div class=\"d-flex align-items-center\">\n                <div class=\"item-number-selector minWidth\">\n                    <button [disabled]=\"selectedTickets.get(ticket) === 0\"\n                            (click)=\"decreaseNrTickets(ticket)\">\n                        <i class=\"fas fa-angle-left\"></i>\n                    </button>\n                    <p>\n                        {{ selectedTickets.get(ticket) }}\n                        tickets\n                    </p>\n                    <button [disabled]=\"ticket.limit && selectedTickets.get(ticket) === ticket.ticketsLimit\"\n                            (click)=\"increaseNrTickets(ticket)\">\n                        <i class=\"fas fa-angle-right\"></i>\n                    </button>\n                </div>\n\n                <p class=\"ticket-name m-0 minWidthPrice\">\n                    €{{ ticket.price }}\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ticket-price-footer d-flex justify-content-between align-items-center\">\n        <div class=\"d-flex flex-column align-items-start\">\n            <p>\n                €{{ selectedTicketsPrice }}\n                <span class=\"payment-details\" *ngIf=\"optionsTodayPayment > 0 && optionsTodayPayment !== selectedTicketsPrice\">(acum veți plăti doar €{{optionsTodayPayment | number: '1.0-2'}})</span>\n            </p>\n\n            <p>\n                {{ selectedTicketsLength }} tickets\n            </p>\n        </div>\n\n        <button *ngIf=\"selectedTicketsLength > 0 && !isItineraryModal\" type=\"button\" class=\"btn-auto btn-color-fill\" [routerLink]=\"['checkout']\">\n            <i class=\"fas fa-check\"></i>\n            Reserve now\n        </button>\n\n        <button *ngIf=\"selectedTicketsLength > 0 && isItineraryModal\" type=\"button\" class=\"btn-auto btn-color-fill\" [matDialogClose]=\"ticketSelection\">\n            <i class=\"fas fa-check\"></i>\n            Confirm selection\n        </button>\n    </div>\n</ng-container>\n\n<ng-template #noTicketsAvailable>\n    <h3 class=\"text-center\">\n        {{ \"TOAST.BOOKING.NOT_ENOUGH\" | translate }}\n    </h3>\n</ng-template>\n";

/***/ }),

/***/ 33118:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/booking-type-tab-items/time-slots-list/time-slots-list.component.html?ngResource ***!
  \***********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"allTimeSlots && availableTimeSlotsMap?.size > 0; else noTimeSlotsAvailable\">\n    <p class=\"booking-section-title\">\n        See your options\n    </p>\n\n    <div class=\"time-slot-cards-container\">\n        <div *ngFor=\"let timeSlot of availableTimeSlotsMap | keyvalue; let timeSlotIndex = index\" class=\"time-slot-card\">\n            <div class=\"top-half\">\n                <p>\n                    {{ timeSlot.key.name }}\n                </p>\n                <span>{{timeSlot.key.description}}</span>\n\n                <div *ngIf=\"timeSlot.value\">\n                    <div class=\"time-slots-container\">\n                        <mat-radio-group [(ngModel)]=\"selectedTimeSlot[timeSlotIndex]\"\n                                         (change)=\"resetOtherRadioGroups(timeSlotIndex)\"\n                                         aria-label=\"Select a time slot\" color=\"primary\">\n                            <div *ngFor=\"let slot of timeSlot.value\" class=\"time-slot\">\n                                <mat-radio-button [value]=\"slot\" [labelPosition]=\"'before'\">\n                                    {{ slot.startHour }} - {{slot.endHour}}\n                                </mat-radio-button>\n                            </div>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"bottom-half\">\n                <button [disabled]=\"!selectedTimeSlot[timeSlotIndex]\" class=\"btn-auto btn-color-fill\" (click)=\"bookTimeSlot(timeSlot.key, timeSlotIndex)\">\n                    Book now\n                </button>\n\n                <p>\n                    €{{ timeSlot.key.price }}\n                    <span class=\"payment-details\" *ngIf=\"timeSlot.key.bookingPolicies?.advanceFullPayment\">(plătiți integral)</span>\n                    <span class=\"payment-details\" *ngIf=\"timeSlot.key.bookingPolicies?.advancePartialPaymentPercentage\">(plătiți avans €{{timeSlot.key.price * timeSlot.key.bookingPolicies?.advancePartialPaymentPercentage / 100}})</span>\n                    <span class=\"payment-details\" *ngIf=\"timeSlot.key.bookingPolicies?.depositRequiredAmount\">(plătiți depozit €{{timeSlot.key.bookingPolicies?.depositRequiredAmount}})</span>\n                    <span class=\"payment-details\" *ngIf=\"timeSlot.key.bookingPolicies?.depositRequiredPercentage\">(plătiți depozit €{{timeSlot.key.price * timeSlot.key.bookingPolicies?.depositRequiredPercentage / 100}})</span>\n                    <i class=\"far fa-question-circle\"\n                       matTooltip=\"This price is limited only for this option\"\n                       matTooltipPosition=\"above\"></i>\n                </p>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n<ng-template #noTimeSlotsAvailable>\n    <h3 class=\"text-center\">\n        {{ \"TOAST.BOOKING.NOT_ENOUGH\" | translate }}\n    </h3>\n</ng-template>\n";

/***/ }),

/***/ 77546:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/view-simple-resource/view-simple-resource.component.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"resourceData\" class=\"d-flex flex-column position-relative\" [ngClass]=\"isItineraryModal ? 'itinerary-modal' : null\">\n    <button *ngIf=\"isItineraryModal\" mat-dialog-close\n            type=\"button\"\n            class=\"btn-round btn-color-outline btn-close-modal\">\n        <i class=\"fas fa-times\"></i>\n    </button>\n\n    <div class=\"background-container\">\n        <img [src]=\"resourceData.featuredImage?.filePath\" alt=\"resource-background-image\">\n    </div>\n\n    <div class=\"content-container\">\n\n        <div class=\"container\">\n            <div class=\"resource-title-bar\">\n                <h3 class=\"resource-title me-auto\">\n                    {{ resourceData.title | titlecase }}\n                </h3>\n\n                <button class=\"favorite-btn me-2\" [ngClass]=\"resourceData?.favorite ? 'active' : 'inactive'\"\n                        (click)=\"$event.stopPropagation(); toggleFavorite()\">\n                    <i [ngClass]=\"resourceData?.favorite ? 'fas fa-star' : 'far fa-star'\"></i>\n                </button>\n\n                <button *ngIf=\"resourceData.bookingType !== 'externalUrl' && resourceData.bookingType !== 'noBooking'\"\n                        (click)=\"navigateToBookingTypeTab()\"\n                        class=\"btn-auto btn-color-fill\">\n                    {{ \"RESOURCE.BOOK_NOW\" | translate }}\n                    <i class=\"fas fa-angle-right\"></i>\n                </button>\n\n                <a *ngIf=\"resourceData.bookingType === 'externalUrl' && resourceData?.externalUrl\"\n                        [href]=\"resourceData.externalUrl\"\n                        target=\"_blank\"\n                        rel=\"noreferrer noopener\"\n                        class=\"btn-auto btn-color-fill\">\n                    Vezi mai mult\n                    <i class=\"fas fa-angle-right\"></i>\n                </a>\n            </div>\n        </div>\n\n        <div class=\"container\">\n            <div class=\"resource-subtitle\">\n                <span>{{resourceTypeName}}</span>\n<!--                <div class=\"attributes-list\">-->\n<!--                <span *ngFor=\"let val of [1,2,3,4]; let last = last\">-->\n<!--                    tag name<ng-container *ngIf=\"!last\">,</ng-container>-->\n<!--                </span>-->\n<!--                </div>-->\n\n<!--                <div class=\"dollars\">-->\n<!--                    <ng-container *ngFor=\"let val of [1, 2, 3, 4, 5]\" >-->\n<!--                <span [ngClass]=\"val * 20 <= roundedReviewPercentage ? 'bold-dollar' : 'normal-dollar'\">-->\n<!--                    $-->\n<!--                </span>-->\n<!--                    </ng-container>-->\n<!--                </div>-->\n\n<!--                <div class=\"percentage\">-->\n<!--                    {{ resourceData.proReviewsPercentage }}%-->\n<!--                    <i *ngIf=\"resourceData.proReviewsPercentage < 50\" class=\"far fa-frown\"></i>-->\n<!--                    <i *ngIf=\"resourceData.proReviewsPercentage >= 50\" class=\"far fa-smile\"></i>-->\n<!--                </div>-->\n            </div>\n        </div>\n\n        <app-images-gallery *ngIf=\"resourceData?.images?.length > 0\" [images]=\"resourceData?.images\"></app-images-gallery>\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div #resourceTabs class=\"col-12 col-lg-8\">\n                    <app-resource-tabs [activeTabId]=\"activeResourceTabId\" (activeTabHasChangedEvent)=\"activeResourceTabId = $event\"></app-resource-tabs>\n                </div>\n\n                <div class=\"col-12 col-lg-4\">\n                    <app-resource-information></app-resource-information>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n";

/***/ }),

/***/ 83454:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/category-card/category-card.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"category\" [ngStyle]=\"{'height.px': height ? height : null}\">\n    <img [src]=\"imgPath\" alt=\"category-background-image\">\n    <div *ngIf=\"selected\" class=\"selected-icon\">\n        <div class=\"icon-background\">\n            <i class=\"fas fa-check\"></i>\n        </div>\n    </div>\n    <div *ngIf=\"nameRo || nameEn\" class=\"text-background\">\n        <h2>{{ currentLanguage === 'ro' ? nameRo : nameEn}}</h2>\n    </div>\n</div>\n";

/***/ }),

/***/ 33662:
/*!***********************************************************************************!*\
  !*** ./src/app/standalone-components/checkout/checkout.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"page-background\">\n    <h1 class=\"page-title\">\n        Checkout\n    </h1>\n\n    <div class=\"container\">\n        <div class=\"row row-gap-24\">\n            <!--Booking Details-->\n            <div class=\"col-12 col-lg-8\">\n                <div class=\"column-container\">\n\n                    <!--User Details Section-->\n                    <div *ngIf=\"currentUserData\" class=\"user-details-container\">\n                        <h2 class=\"section-title\">\n                            <i class=\"fas fa-check-circle\"></i>Check your information\n                        </h2>\n\n                        <form [formGroup]=\"userDetailsForm\">\n                            <div class=\"row\">\n                                <div class=\"col-12 col-lg-6\">\n                                    <p>\n                                        <mat-form-field appearance=\"legacy\">\n                                            <mat-label>First Name</mat-label>\n                                            <input matInput formControlName=\"firstName\" placeholder=\"First Name\">\n                                            <mat-icon matSuffix>\n                                                <i class=\"fas fa-user\"></i>\n                                            </mat-icon>\n                                        </mat-form-field>\n                                    </p>\n                                </div>\n\n                                <div class=\"col-12 col-lg-6\">\n                                    <p>\n                                        <mat-form-field appearance=\"legacy\">\n                                            <mat-label>Last Name</mat-label>\n                                            <input matInput formControlName=\"lastName\" placeholder=\"Last Name\">\n                                            <mat-icon matSuffix>\n                                                <i class=\"fas fa-user\"></i>\n                                            </mat-icon>\n                                        </mat-form-field>\n                                    </p>\n                                </div>\n\n                                <div class=\"col-12 col-lg-6\">\n                                    <p>\n                                        <mat-form-field appearance=\"legacy\">\n                                            <mat-label>Email</mat-label>\n                                            <input matInput formControlName=\"email\" placeholder=\"Email\">\n                                            <mat-icon matSuffix>\n                                                <i class=\"fas fa-envelope\"></i>\n                                            </mat-icon>\n                                        </mat-form-field>\n                                    </p>\n                                </div>\n\n                                <div class=\"col-12 col-lg-6\">\n                                    <p>\n                                        <mat-form-field appearance=\"legacy\">\n                                            <mat-label>Phone</mat-label>\n                                            <input matInput formControlName=\"telephone\" placeholder=\"Phone\">\n                                            <mat-icon matSuffix>\n                                                <i class=\"fas fa-phone-alt\"></i>\n                                            </mat-icon>\n                                        </mat-form-field>\n                                    </p>\n                                </div>\n\n                                <div class=\"col-12\">\n                                    <p>\n                                        <mat-form-field appearance=\"legacy\">\n                                            <mat-label>Country/Region</mat-label>\n                                            <mat-select formControlName=\"country\">\n                                                <mat-option [value]=\"'Romania'\">Romania</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </p>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n\n                    <!--Special Request Section-->\n                    <div *ngIf=\"resourceData\" class=\"special-request-container\">\n                        <h3>\n                            <i class=\"fas fa-star\"></i>\n                            <span>\n                                Special request (optional)\n                            </span>\n                        </h3>\n\n                        <p>\n                            Special requests can’t be guaranteed, but the property will do its best to meet your needs.\n                            You can always make a special request after your booking is complete.\n                        </p>\n\n                        <p class=\"fw-bold\">\n                            Please write your request in English or Romanian.\n                        </p>\n\n                        <p>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Description</mat-label>\n                                <textarea [(ngModel)]=\"specialRequest\"\n                                          placeholder=\"Description\"\n                                          matInput\n                                          cdkTextareaAutosize\n                                          cdkAutosizeMinRows=\"1\"\n                                          cdkAutosizeMaxRows=\"20\"\n                                ></textarea>\n                                <mat-icon *ngIf=\"specialRequest\"\n                                          (click)=\"specialRequest = null\"\n                                          role=\"button\" matSuffix>clear\n                                </mat-icon>\n                            </mat-form-field>\n                        </p>\n                    </div>\n\n                    <!--Booking Details Section - For Resources-->\n                    <div *ngIf=\"resourceData && filterFormValues\" class=\"booking-details-container\">\n                        <h2 class=\"section-title\">\n                            <i class=\"fas fa-clipboard-list\"></i>Booking details\n                        </h2>\n\n                        <div class=\"row\">\n                            <div class=\"col-12 col-lg-6\">\n\n                                <div class=\"details-group-container\">\n                                    <div class=\"details-group\">\n                                        <p>Name:</p>\n                                        <p>{{ resourceData?.title | titlecase }}</p>\n                                    </div>\n\n                                    <!--ticketBooking-->\n                                    <ng-container *ngIf=\"resourceData.bookingType === 'ticketBooking'\">\n                                        <div class=\"details-group\">\n                                            <p>Date:</p>\n                                            <p>{{ filterFormValues?.dateAsDay.toDate() | date : 'd MMMM, y' }}</p>\n                                        </div>\n\n                                        <div class=\"details-group\">\n                                            <p>Number of tickets:</p>\n                                            <p>{{ numberOfTickets }}</p>\n                                        </div>\n                                    </ng-container>\n\n                                    <!--culturalBooking-->\n                                    <ng-container *ngIf=\"resourceData.bookingType === 'culturalBooking'\">\n                                        <div class=\"details-group\">\n                                            <p>Date:</p>\n                                            <p>{{ resourceData?.startDate | date : 'd MMMM HH:mm, y' }}</p>\n                                        </div>\n\n                                        <div class=\"details-group\">\n                                            <p>Number of tickets:</p>\n                                            <p>{{ selectedSeats.length }}</p>\n                                        </div>\n                                    </ng-container>\n\n                                    <!--rentalBooking-->\n                                    <ng-container *ngIf=\"resourceData.bookingType === 'rentalBooking'\">\n                                        <div class=\"details-group\">\n                                            <p>Check-in:</p>\n                                            <p>{{ filterFormValues?.startDate.toDate() | date : 'd MMMM, y' }}</p>\n                                        </div>\n\n                                        <div class=\"details-group\">\n                                            <p>Check-out:</p>\n                                            <p>{{ filterFormValues?.endDate.toDate() | date : 'd MMMM, y' }}</p>\n                                        </div>\n\n                                        <div class=\"details-group\">\n                                            <p>Number of rooms:</p>\n                                            <p>{{ numberOfRooms }}</p>\n                                        </div>\n\n                                        <div class=\"details-group\">\n                                            <p>Max number of adults:</p>\n                                            <p>{{ numberOfAdults }}</p>\n                                        </div>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"resourceData.bookingType === 'serviceBookingTimeSlots'\">\n                                        <div class=\"details-group\">\n                                            <p>Date:</p>\n                                            <p>{{ filterFormValues?.dateAsDay.toDate() | date : 'd MMMM, y' }}</p>\n                                        </div>\n\n                                        <div class=\"details-group\">\n                                            <p>Time:</p>\n                                            <p>{{ selectedAvailableTimeSlot.startHour }}\n                                                - {{ selectedAvailableTimeSlot.endHour }}</p>\n                                        </div>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"resourceData.bookingType === 'menu'\">\n                                        <div class=\"details-group\">\n                                            <p>Date:</p>\n                                            <p>{{ filterFormValues?.dateAsHour.toDate() | date : 'd MMMM, y' }}</p>\n                                        </div>\n\n                                        <div class=\"details-group\">\n                                            <p>Time:</p>\n                                            <p>{{ filterFormValues?.dateAsHour.toDate() | date : 'HH:mm' }}</p>\n                                        </div>\n\n                                        <div class=\"details-group\">\n                                            <p>Adults number:</p>\n                                            <p>{{ guestsState.adultsNumber }}</p>\n                                        </div>\n\n                                        <div *ngIf=\"guestsState?.childrenNumber > 0\" class=\"details-group\">\n                                            <p>Children number:</p>\n                                            <p>{{ guestsState.childrenNumber }}</p>\n                                        </div>\n                                    </ng-container>\n                                </div>\n\n                            </div>\n\n                            <div class=\"col-12 col-lg-6\">\n                                <div class=\"resource-img-container\">\n                                    <img [src]=\"resourceData?.featuredImage?.filePath\" alt=\"resource featured image\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--Booking Details Section - For Trips-->\n                    <div *ngIf=\"tripState\" class=\"booking-details-container\">\n                        <h2 class=\"section-title\">\n                            <i class=\"fas fa-clipboard-list\"></i>Booking details\n                        </h2>\n\n                        <div class=\"row\">\n                            <div class=\"col-12 col-lg-6\">\n\n                                <div class=\"details-group-container\">\n                                    <div class=\"details-group\">\n                                        <p>Name:</p>\n                                        <p>{{ tripState?.name | titlecase }}</p>\n                                    </div>\n\n                                    <div class=\"details-group\">\n                                        <p>Start Date:</p>\n                                        <p>{{ tripState?.startDate | date : 'd MMMM, y' }}</p>\n                                    </div>\n\n                                    <div class=\"details-group\">\n                                        <p>End Date:</p>\n                                        <p>{{ tripState?.endDate | date : 'd MMMM, y' }}</p>\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <div class=\"col-12 col-lg-6\">\n                                <div class=\"resource-img-container\">\n                                    <img [src]=\"tripState?.featuredImage?.filePath\" alt=\"trip featured image\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--Booking Details Section - For Itineraries-->\n                    <div *ngIf=\"itineraryState && itineraryExtraInfo\" class=\"booking-details-container\">\n                        <h2 class=\"section-title\">\n                            <i class=\"fas fa-clipboard-list\"></i>Booking details\n                        </h2>\n\n                        <div class=\"row\">\n                            <div class=\"col-12\"\n                                 [ngClass]=\"itineraryState?.featuredImage?.filePath ? 'col-lg-6' : 'col-lg-12'\"\n                            >\n\n                                <div class=\"details-group-container\">\n                                    <div class=\"details-group\">\n                                        <p>Itinerary Name:</p>\n                                        <p>{{ itineraryState?.name | titlecase }}</p>\n                                    </div>\n\n                                    <div class=\"details-group\">\n                                        <p>Start Date:</p>\n                                        <p>\n                                            {{ itineraryExtraInfo?.itineraryType === 'ai' ? (itineraryExtraInfo?.startDate?.toDate() | date : 'd MMMM, y')\n                                            : (itineraryExtraInfo?.destinations?.[0]?.startDate.toDate() | date : 'd MMMM, y') }}\n                                        </p>\n                                    </div>\n\n                                    <div class=\"details-group\">\n                                        <p>End Date:</p>\n                                        <p>\n                                            {{ itineraryExtraInfo?.itineraryType === 'ai' ? (itineraryExtraInfo?.endDate?.toDate() | date : 'd MMMM, y')\n                                            : (itineraryExtraInfo?.destinations?.[itineraryExtraInfo?.destinations.length - 1]?.endDate.toDate() | date : 'd MMMM, y') }}\n                                        </p>\n                                    </div>\n\n                                    <ng-container *ngFor=\"let destination of itineraryState?.resources\">\n                                        <h4 class=\"mt-4 mb-0\">\n                                            {{ destination.city }}\n                                        </h4>\n\n                                        <!--accommodation-->\n                                        <ng-container\n                                                *ngIf=\"destination?.accommodationResourceRecommended?.items?.length > 0\">\n                                            <div class=\"details-group\">\n                                                <p>{{destination?.accommodationResourceRecommended?.resourceName}}</p>\n                                                <ng-container\n                                                        *ngFor=\"let room of destination?.accommodationResourceRecommended?.items\">\n                                                    <p>\n                                                        {{ room?.itemName }}:\n                                                        €{{ room.pricePerItem | priceBookingPolicies : room.bookingPolicies : room.quantity }}\n                                                    </p>\n                                                </ng-container>\n                                            </div>\n                                        </ng-container>\n\n                                        <!--eat and drinks-->\n                                        <ng-container *ngIf=\"destination?.eatAndDrinkResourcesRecommended?.length > 0\">\n                                            <ng-container\n                                                    *ngFor=\"let resource of destination?.eatAndDrinkResourcesRecommended\">\n                                                <div class=\"details-group\">\n                                                    <p>{{ resource?.resourceName }}</p>\n                                                    <p>Price:\n                                                        €{{ resource?.dates?.length * resource?.depositAmount }}</p>\n                                                </div>\n                                            </ng-container>\n                                        </ng-container>\n\n                                        <!--day activities-->\n                                        <ng-container *ngIf=\"destination?.dayActivityResourcesRecommended?.length > 0\">\n                                            <ng-container\n                                                    *ngFor=\"let resource of destination?.dayActivityResourcesRecommended\">\n                                                <div class=\"details-group\">\n                                                    <p>{{resource?.resourceName}}</p>\n                                                    <ng-container *ngFor=\"let dateGroup of resource?.items\">\n                                                        <ng-container *ngFor=\"let item of dateGroup?.items\">\n                                                            <p>\n                                                                {{ item?.itemName }}:\n                                                                €{{ item?.price | priceBookingPolicies : item?.bookingPolicies : item?.quantity }}\n                                                            </p>\n                                                        </ng-container>\n                                                    </ng-container>\n                                                </div>\n                                            </ng-container>\n                                        </ng-container>\n\n                                        <!--evening activities-->\n                                        <ng-container\n                                                *ngIf=\"destination?.eveningActivityResourcesRecommended?.length > 0\">\n                                            <ng-container\n                                                    *ngFor=\"let resource of destination?.eveningActivityResourcesRecommended\">\n                                                <div class=\"details-group\">\n                                                    <p>{{resource?.resourceName}}</p>\n                                                    <ng-container *ngFor=\"let dateGroup of resource?.items\">\n                                                        <ng-container *ngFor=\"let item of dateGroup?.items\">\n                                                            <p>\n                                                                {{ item?.itemName }}:\n                                                                €{{ item?.price | priceBookingPolicies : item?.bookingPolicies : item?.quantity }}\n                                                            </p>\n                                                        </ng-container>\n                                                    </ng-container>\n                                                </div>\n                                            </ng-container>\n                                        </ng-container>\n                                    </ng-container>\n\n                                </div>\n\n                            </div>\n\n                            <div *ngIf=\"itineraryState?.featuredImage?.filePath\" class=\"col-12 col-lg-6\">\n                                <div class=\"resource-img-container\">\n                                    <img [src]=\"itineraryState?.featuredImage?.filePath\" alt=\"trip featured image\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"carState\" class=\"car-container\">\n                        <h2 class=\"section-title\">\n                            <i class=\"fas fa-clipboard-list\"></i>Booking details\n                        </h2>\n\n                        <div class=\"row\">\n                            <div class=\"col-12 col-lg-6\">\n\n                                <div class=\"details-group-container\">\n                                    <div class=\"details-group\">\n                                        <p>Name:</p>\n                                        <p>{{ currentCar?.name | titlecase }}</p>\n                                    </div>\n\n                                    <!--ticketBooking-->\n                                    <ng-container>\n                                        <div class=\"details-group\">\n                                            <p>Description:</p>\n                                            <p>{{ currentCar?.description }}</p>\n                                        </div>\n\n                                        <div class=\"details-group\">\n                                            <p>Consumption:</p>\n                                            <p>{{ currentCar?.consumption }}</p>\n                                        </div>\n                                    </ng-container>\n                                </div>\n\n                            </div>\n\n                            <div class=\"col-12 col-lg-6\">\n                                <div class=\"resource-img-container\">\n                                    <img [src]=\"currentCar?.image?.filePath\" alt=\"featured image\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"ticketsState\" class=\"car-container\">\n                        <h2 class=\"section-title\">\n                            <i class=\"fas fa-clipboard-list\"></i>Booking details\n                        </h2>\n\n                        <div class=\"row\">\n                            <div class=\"col-12 col-lg-6\">\n\n                                <div class=\"details-group-container\">\n                                    <div class=\"details-group\">\n                                        <p>Transport number:</p>\n                                        <p>{{ currentTicket?.transportNumber | titlecase }}</p>\n                                    </div>\n\n                                    <!--ticketBooking-->\n                                    <ng-container>\n                                        <div class=\"details-group\">\n                                            <p>Location:</p>\n                                            <p>From {{ currentTicket?.from }} to {{ currentTicket?.to }}</p>\n                                        </div>\n\n                                        <div class=\"details-group\">\n                                            <p>Date:</p>\n                                            <p>{{ currentTicket?.departureDate | date:'dd-MM-yyy' }} - {{ currentTicket.arrivalDate  | date:'dd-MM-yyy' }}</p>\n                                        </div>\n\n                                        <div class=\"details-group\">\n                                            <p>Travel class:</p>\n                                            <p>{{ currentTicket?.travelClass }}</p>\n                                        </div>\n\n\n                                    </ng-container>\n                                </div>\n\n                            </div>\n\n                            <div class=\"col-12 col-lg-6\">\n                                <div class=\"resource-img-container\">\n                                    <img [src]=\"currentTicket?.iconPath\" alt=\"featured image\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--Payment details-->\n                    <div class=\"payment-details-container\">\n                        <h2 *ngIf=\"resourceData?.bookingType !== 'menu'\" class=\"section-title\">\n                            <i class=\"fas fa-credit-card\"></i>Payment details\n                        </h2>\n                        <mat-radio-group>\n                            <mat-radio-button>Plata online rapidă și ușoară cu ajutorul cardului bancar.\n                            </mat-radio-button>\n                        </mat-radio-group>\n                        <div class=\"d-block mt-4\" *ngIf=\"checkoutType !== 'transport'\">\n                            <button type=\"button\" class=\"btn-auto btn-color-fill\" (click)=\"checkReservationType()\">\n                                <i class=\"fas fa-check\"></i>\n                                Confirm checkout\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n            <!--Checkout details - For Resources-->\n            <div *ngIf=\"resourceData\" class=\"col-12 col-lg-4\">\n                <div class=\"checkout-details-container\">\n                    <div class=\"checkout-items\">\n                        <h2 class=\"section-title\">\n                            <i class=\"fas fa-shopping-cart\"></i>Your checkout details\n                        </h2>\n\n                        <div class=\"details-group-container\">\n\n                            <!--ticketBooking-->\n                            <ng-container *ngIf=\"resourceData.bookingType === 'ticketBooking'\">\n                                <div *ngFor=\"let ticket of ticketState | keyvalue\" class=\"details-group\">\n                                    <p>Field name:</p>\n                                    <p>{{ ticket.value }} x {{ ticket.key.name }}</p>\n                                </div>\n                            </ng-container>\n\n                            <!--culturalBooking-->\n                            <ng-container *ngIf=\"resourceData.bookingType === 'culturalBooking'\">\n                                <div *ngFor=\"let seat of selectedSeats\" class=\"details-group\">\n                                    <p>Field name:</p>\n                                    <p>Row: {{ seat.rowLabel }}, Seat: {{ seat.seatColumnLabel }}: €{{ seat.price }}</p>\n                                </div>\n                            </ng-container>\n\n                            <!--rentalBooking-->\n                            <ng-container *ngIf=\"resourceData.bookingType === 'rentalBooking'\">\n                                <div *ngFor=\"let room of roomState | keyvalue\" class=\"details-group\">\n                                    <p>Field name:</p>\n                                    <p>{{ room.value }} x {{ room.key.name }}</p>\n                                </div>\n                            </ng-container>\n\n                            <!--serviceBookingTimeSlots-->\n                            <ng-container *ngIf=\"resourceData.bookingType === 'serviceBookingTimeSlots'\">\n                                <div class=\"details-group\">\n                                    <p>Field name:</p>\n                                    <p>{{ selectedTimeSlot.name }}</p>\n                                </div>\n\n                                <div class=\"details-group\">\n                                    <p>Total length of the reservation:</p>\n                                    <p>{{ selectedTimeSlotMinutes }}</p>\n                                </div>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"resourceData.bookingType === 'productsList'\">\n                                <div class=\"details-group\">\n                                    <p>Course name:</p>\n                                    <p>{{ selectedProduct.name }}</p>\n                                </div>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"resourceData.bookingType === 'menu'\">\n                                <div class=\"details-group\">\n                                    <p>Reservation: {{ resourceData.title }}</p>\n                                </div>\n\n                                <div class=\"details-group\">\n                                    <p>Time:</p>\n                                    <p>{{ filterFormValues?.dateAsHour.toDate() | date : 'd MMMM, HH:mm' }}</p>\n                                </div>\n                            </ng-container>\n\n                            <p *ngIf=\"resourceData.bookingType !== 'menu'\" class=\"text-you-selected\">\n                                You selected\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"checkout-total-items\">\n                        <ng-container *ngIf=\"resourceData.bookingType === 'ticketBooking'\">\n                            <h5 class=\"pt-2\">Subtotal</h5>\n                            <div class=\"total-items-bold\">\n                                <p>{{ numberOfTickets }} tickets</p>\n                                <p>€ {{ ticketsPrice }}</p>\n                            </div>\n                            <p class=\"text-right\" *ngIf=\"totalPrice > 0 && totalPrice !== ticketsPrice\">Acum veți achita\n                                doar € {{totalPrice}}</p>\n                            <p class=\"text-right\" *ngIf=\"totalPrice === 0\">Acum nu trebuie să achitați nimic. :)</p>\n\n                        </ng-container>\n\n                        <ng-container *ngIf=\"resourceData.bookingType === 'culturalBooking'\">\n                            <h5 class=\"pt-2\">Subtotal</h5>\n                            <div class=\"total-items-bold\">\n                                <p>{{ selectedSeats.length }} tickets</p>\n                                <p>€ {{ culturalTicketsPrice }}</p>\n                            </div>\n                            <p class=\"text-right\" *ngIf=\"totalPrice > 0 && totalPrice !== culturalTicketsPrice\">Acum veți achita doar € {{totalPrice}}</p>\n                            <p class=\"text-right\" *ngIf=\"totalPrice === 0\">Acum nu trebuie să achitați nimic. :)</p>\n\n                        </ng-container>\n\n                        <ng-container *ngIf=\"resourceData.bookingType === 'rentalBooking'\">\n                            <h5 class=\"pt-2\">Subtotal</h5>\n                            <div class=\"total-items-bold\">\n                                <p>{{ numberOfRooms }} rooms</p>\n                                <p>€ {{ roomsPrice }}</p>\n                            </div>\n                            <p class=\"text-right\" *ngIf=\"totalPrice > 0 && totalPrice !== roomsPrice\">Acum veți achita\n                                doar € {{totalPrice}}</p>\n                            <p class=\"text-right\" *ngIf=\"totalPrice === 0\">Acum nu trebuie să achitați nimic. :)</p>\n\n                        </ng-container>\n\n                        <ng-container *ngIf=\"resourceData.bookingType === 'serviceBookingTimeSlots' && timeSlotState\">\n                            <h5>Subtotal</h5>\n                            <div class=\"total-items-bold\">\n                                <p>{{ selectedTimeSlot.name }} </p>\n                                <p>€ {{ selectedTimeSlot.price }}</p>\n                            </div>\n                            <p class=\"text-right\" *ngIf=\"totalPrice > 0 && totalPrice !== selectedTimeSlot.price\">Acum\n                                veți achita doar € {{totalPrice}}\n                                <span *ngIf=\"selectedTimeSlot.bookingPolicies.advancePartialPaymentPercentage\">(avans)</span>\n                                <span *ngIf=\"selectedTimeSlot.bookingPolicies.depositRequiredPercentage\">(depozit)</span>\n                                <span *ngIf=\"selectedTimeSlot.bookingPolicies.depositRequiredAmount\">(depozit)</span>\n                            </p>\n                            <p class=\"text-right\" *ngIf=\"totalPrice === 0\">Acum nu trebuie să achitați nimic. :)</p>\n\n                        </ng-container>\n\n                        <ng-container *ngIf=\"resourceData.bookingType === 'productsList'\">\n                            <div class=\"total-items-bold\">\n                                <p>{{ selectedProduct.name }}</p>\n                                <p>€ {{ selectedProduct.price }}</p>\n                            </div>\n                        </ng-container>\n                    </div>\n\n                    <div class=\"checkout-total-price\">\n                        <div class=\"total-price-bold\">\n                            <p>Total Price:</p>\n\n                            <div class=\"d-flex align-items-center justify-content-end gap-2\"\n                                 *ngIf=\"loyaltyPointsInCurrencySpent < totalPrice\">\n                                <p>€ {{ totalPrice - (loyaltyPointsInCurrencySpent | number : '1.0-2') }}</p>\n                                <p *ngIf=\"useLoyaltyPoints\" class=\"line-through-price\">{{ totalPrice }}</p>\n                            </div>\n\n                            <div class=\"d-flex align-items-center justify-content-end gap-2\"\n                                 *ngIf=\"loyaltyPointsInCurrencySpent > totalPrice\">\n                                <p>€0</p>\n                                <p *ngIf=\"useLoyaltyPoints\" class=\"line-through-price\">{{ totalPrice }}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <ng-template [ngTemplateOutlet]=\"loyaltyPoints\"></ng-template>\n            </div>\n\n            <!--Checkout details - For Trips-->\n            <div *ngIf=\"tripState\" class=\"col-12 col-lg-4\">\n                <div class=\"checkout-details-container\">\n                    <div class=\"checkout-items\">\n                        <h2 class=\"section-title\">\n                            <i class=\"fas fa-shopping-cart\"></i>Your checkout details\n                        </h2>\n\n                        <div class=\"details-group-container\">\n\n                            <div class=\"details-group\">\n                                <p>Trip name:</p>\n                                <p>{{ tripState.name }}</p>\n                            </div>\n\n                            <div class=\"details-group\">\n                                <p>Hotel name:</p>\n                                <p>{{ hotelState }}</p>\n                            </div>\n\n                            <div class=\"details-group\">\n                                <p>Adults:</p>\n                                <p>{{ tripGuestsState.adultsNumber }}</p>\n                            </div>\n\n                            <div class=\"details-group\">\n                                <p>Children:</p>\n                                <p>{{ tripGuestsState.childrenNumber }}</p>\n                            </div>\n\n                            <div class=\"details-group\">\n                                <p>Rooms:</p>\n\n                                <ng-container *ngFor=\"let tripRoom of tripRoomsState | keyvalue\">\n                                    <p>{{ tripRoom.value }} x {{ tripRoom.key.name }}</p>\n                                </ng-container>\n                            </div>\n\n\n                            <p class=\"text-you-selected\">\n                                You selected\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"checkout-total-items\">\n\n                        <div class=\"total-items-bold\" *ngFor=\"let tripRoom of tripRoomsState | keyvalue\">\n                            <p>{{ tripRoom.key.name }}</p>\n                            <p>€ {{ tripRoom.key.price * tripRoom.value }}</p>\n                        </div>\n\n                    </div>\n\n                    <div class=\"checkout-total-price\">\n\n                        <div class=\"total-price-bold\">\n                            <p>Total Price:</p>\n\n                            <div class=\"d-flex align-items-center justify-content-end gap-2\">\n                                <p>€ {{ totalPrice - (loyaltyPointsInCurrencySpent | number : '1.0-2') }}</p>\n                                <p *ngIf=\"useLoyaltyPoints\" class=\"line-through-price\">{{ totalPrice }}</p>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n                <ng-template [ngTemplateOutlet]=\"loyaltyPoints\"></ng-template>\n            </div>\n\n            <!--Checkout details - For Itineraries-->\n            <div *ngIf=\"itineraryState && itineraryExtraInfo\" class=\"col-12 col-lg-4\">\n                <div class=\"checkout-details-container\">\n                    <div class=\"checkout-items\">\n                        <h2 class=\"section-title\">\n                            <i class=\"fas fa-shopping-cart\"></i>Your checkout details\n                        </h2>\n\n                        <div class=\"details-group-container\">\n\n                            <div class=\"details-group\">\n                                <p>Itinerary name:</p>\n                                <p>{{ itineraryState.name }}</p>\n                            </div>\n\n                            <div class=\"details-group\">\n                                <p>Adults:</p>\n                                <p>{{ itineraryExtraInfo.adultsNumber }}</p>\n                            </div>\n\n                            <div class=\"details-group\">\n                                <p>Children:</p>\n                                <p>{{ itineraryExtraInfo.childrenNumber }}</p>\n                            </div>\n\n                            <p class=\"text-you-selected\">\n                                You selected\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"checkout-total-items\">\n                        <h5 class=\"pt-2\">Subtotal</h5>\n                        <div class=\"total-items-bold\">\n                            <p>{{ itineraryState?.name }}</p>\n                            <p>€ {{ itineraryTotalPrice }}</p>\n                        </div>\n                        <p class=\"text-right\" *ngIf=\"totalPrice > 0 && totalPrice !== itineraryTotalPrice\">Acum veți\n                            achita doar € {{totalPrice}}</p>\n                        <p class=\"text-right\" *ngIf=\"totalPrice === 0\">Acum nu trebuie să achitați nimic. :)</p>\n\n                    </div>\n\n                    <div class=\"checkout-total-price\">\n\n                        <div class=\"total-price-bold\">\n                            <p>Total Price:</p>\n                            <p>€{{ totalPrice }}</p>\n                        </div>\n\n                    </div>\n                </div>\n\n                <!--<ng-template [ngTemplateOutlet]=\"loyaltyPoints\"></ng-template>-->\n\n            </div>\n\n            <!--Checkout details - For Cars-->\n            <div *ngIf=\"carState\" class=\"col-12 col-lg-4\">\n                <div class=\"checkout-details-container\">\n                    <div class=\"checkout-items\">\n                        <h2 class=\"section-title\">\n                            <i class=\"fas fa-shopping-cart\"></i>Your checkout details\n                        </h2>\n\n                        <div class=\"details-group-container\">\n\n                            <p class=\"text-you-selected\">\n                                You selected\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"checkout-total-items\">\n\n                        <ng-container>\n                            <!--                            <h5>Subtotal</h5>-->\n                            <div class=\"total-items-bold\">\n                                <p>{{ currentCar?.name }} </p>\n                                <p>€ {{ currentCar?.price }}</p>\n                            </div>\n                            <p class=\"text-right\" *ngIf=\"totalPrice === 0\">Acum nu trebuie să achitați nimic. :)</p>\n\n                        </ng-container>\n                    </div>\n\n                    <div class=\"checkout-total-price\">\n                        <div class=\"total-price-bold\">\n                            <p>Total Price:</p>\n\n                            <!--                            <div class=\"d-flex align-items-center justify-content-end gap-2\" *ngIf=\"carState\">-->\n                            <!--                                <p>€ {{ totalPrice }}</p>-->\n                            <!--                            </div>-->\n\n                            <div class=\"d-flex align-items-center justify-content-end gap-2\"\n                                 *ngIf=\"loyaltyPointsInCurrencySpent < totalPrice\">\n                                <p>€ {{ totalPrice - (loyaltyPointsInCurrencySpent | number : '1.0-2') }}</p>\n                                <p *ngIf=\"useLoyaltyPoints\" class=\"line-through-price\">{{ totalPrice }}</p>\n                            </div>\n\n                            <div class=\"d-flex align-items-center justify-content-end gap-2\"\n                                 *ngIf=\"loyaltyPointsInCurrencySpent > totalPrice\">\n                                <p>€0</p>\n                                <p *ngIf=\"useLoyaltyPoints\" class=\"line-through-price\">{{ totalPrice }}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <ng-template [ngTemplateOutlet]=\"loyaltyPoints\"></ng-template>\n            </div>\n\n            <!--Checkout details - For Tickets-->\n            <div *ngIf=\"ticketsState\" class=\"col-12 col-lg-4\">\n                <div class=\"checkout-details-container\">\n                    <div class=\"checkout-items\">\n                        <h2 class=\"section-title\">\n                            <i class=\"fas fa-shopping-cart\"></i>Your checkout details\n                        </h2>\n\n                        <div class=\"details-group-container\">\n\n                            <p class=\"text-you-selected\">\n                                You selected\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"checkout-total-items\">\n\n                        <ng-container>\n                            <!--                            <h5>Subtotal</h5>-->\n                            <div class=\"total-items-bold\">\n                                <p>{{ currentTicket?.from }} - {{currentTicket?.to}} </p>\n                                <p>€ {{ currentTicket?.price }}</p>\n                            </div>\n                            <p class=\"text-right\" *ngIf=\"totalPrice === 0\">Acum nu trebuie să achitați nimic. :)</p>\n\n                        </ng-container>\n                    </div>\n\n                    <div class=\"checkout-total-price\">\n                        <div class=\"total-price-bold\">\n                            <p>Total Price:</p>\n\n                            <!--                            <div class=\"d-flex align-items-center justify-content-end gap-2\" *ngIf=\"carState\">-->\n                            <!--                                <p>€ {{ totalPrice }}</p>-->\n                            <!--                            </div>-->\n\n                            <div class=\"d-flex align-items-center justify-content-end gap-2\"\n                                 *ngIf=\"loyaltyPointsInCurrencySpent < totalPrice\">\n                                <p>€ {{ totalPrice - (loyaltyPointsInCurrencySpent | number : '1.0-2') }}</p>\n                                <p *ngIf=\"useLoyaltyPoints\" class=\"line-through-price\">{{ totalPrice }}</p>\n                            </div>\n\n                            <div class=\"d-flex align-items-center justify-content-end gap-2\"\n                                 *ngIf=\"loyaltyPointsInCurrencySpent > totalPrice\">\n                                <p>€0</p>\n                                <p *ngIf=\"useLoyaltyPoints\" class=\"line-through-price\">{{ totalPrice }}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <ng-template [ngTemplateOutlet]=\"loyaltyPoints\"></ng-template>\n            </div>\n\n            <!--Loyalty Points Toggle-->\n            <ng-template #loyaltyPoints>\n                <div *ngIf=\"currentUserData && systemSettings\" class=\"loyalty-points-container column-container mt-4\">\n                    <mat-slide-toggle [(ngModel)]=\"useLoyaltyPoints\"\n                                      [color]=\"'primary'\"\n                                      [labelPosition]=\"'before'\"\n                                      [disabled]=\"disabledLoyaltyPoints\"\n                                      (ngModelChange)=\"recalculateTotalPrice()\">\n                        Use your loyalty points: {{currentUserData.loyaltyPoints}}\n                    </mat-slide-toggle>\n\n                    <p *ngIf=\"useLoyaltyPoints\">Your loyalty points are equivalent to:\n                        € {{ loyaltyPointsInCurrencySpent | number : '1.0-2' }}.\n                        <span *ngIf=\"totalPrice < loyaltyPointsInCurrencySpent\"> Today you will spend only {{(totalPrice / systemSettings.percentageLoyaltyPointsSpend) | number : '1.0-2' }}\n                            points, equivalent to\n                            €{{totalPrice}}.</span>\n\n                    </p>\n\n                    <p *ngIf=\"useLoyaltyPoints && loyaltyPointsInCurrencySpent < totalPrice\">\n                        You will gain:\n                        {{ loyaltyPointsInCurrencyGained | number : '1.0-2' }}\n                        loyalty points, after completing your order\n                    </p>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 94961:
/*!***********************************************************************************************!*\
  !*** ./src/app/standalone-components/editorial-card/editorial-card.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"editorial\" class=\"resource-card d-flex flex-column cursor-pointer\">\n    <div class=\"img-container\">\n        <button>\n            <i class=\"far fa-star\"></i>\n        </button>\n\n        <img [src]=\"editorial.featuredImage?.filePath ? editorial.featuredImage.filePath : notFoundImg\" alt=\"editorial image\">\n    </div>\n\n    <div class=\"resource-info\" >\n        <h6>\n            {{ editorial.title }} 1\n        </h6>\n        <p>\n            <ng-container *ngFor=\"let tag of editorial.tags; let last = last\">\n                {{ tag | titlecase }}<ng-container *ngIf=\"!last\">,</ng-container>\n            </ng-container>\n        </p>\n\n        <div class=\"d-flex align-items-center justify-content-between flex-wrap\">\n            <p>\n                {{ \"EDITORIALS.BY\" | translate}}:\n                <span>\n                    {{ editorial.username }}\n                </span>\n            </p>\n\n            <p>\n                {{ editorial.publishedDate | date : 'MMMM d, y' }}\n            </p>\n        </div>\n\n    </div>\n</div>\n";

/***/ }),

/***/ 35735:
/*!***********************************************************************************************!*\
  !*** ./src/app/standalone-components/images-gallery/images-gallery.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"images?.length > 0\" class=\"container\">\n    <div class=\"gallery-container\">\n        <div class=\"row\">\n            <ng-container *ngFor=\"let image of images | slice : 0 : 5; let index = index\">\n                <div class=\"col-12 col-md-6\"\n                     [ngClass]=\"\n                            index === 0 ? 'col-lg-8'\n                            : index === 4 ? 'col-md-12 col-lg-4'\n                            : 'col-lg-4'\">\n                    <div class=\"img-container\" [ngClass]=\" index <= 1 ? 'tall-container' : 'short-container'\">\n                        <img [src]=\"image.filePath\" alt=\"gallery image {{index}}\">\n\n                        <div class=\"remaining-images\" *ngIf=\"index === 4 && images.length > 5\">\n                            +{{ images.length - 5 }}\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 49244:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/standalone-components/static-category-listing/static-category-listing.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n\n    <div *ngIf=\"previousCategoryImg\" class=\"background-container\">\n        <img [src]=\"previousCategoryImg?.filePath\" alt=\"category-background-image\">\n        <p class=\"category-title\">{{ currentLanguage === 'ro' ? pageNameRo : pageNameEn }}</p>\n    </div>\n\n    <div class=\"content-container\">\n\n        <div *ngIf=\"listOfCategoryData\" class=\"container categories-container\">\n            <div class=\"row\">\n                <ng-container *ngFor=\"let categoryName of listOfCategoryData; let i = index\">\n                    <div class=\"col-12 col-md-6 col-lg-{{colArray[i]}}\">\n                        <app-category-card [imgPath]=\"categoryData[categoryName]?.image?.filePath\"\n                                           [nameEn]=\"categoryData[categoryName]?.nameEn\"\n                                           [nameRo]=\"categoryData[categoryName]?.nameRo\"\n                                           [routerLink]=\"categoryData[categoryName].nextRouteSection\n                                           ? categoryData[categoryName].nextRouteSection\n                                           : ['/client', 'domain', domainId, nextRoute + categoryName]\"></app-category-card>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n\n    </div>\n\n</div>";

/***/ }),

/***/ 60785:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/standalone-components/ticket-filter-plus-sidebar/ticket-filter-plus-sidebar.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"filter-tickets-container\" [formGroup]=\"filterForm\">\n    <h4>Cuisine</h4>\n   \n    <mat-checkbox formControlName=\"italian\">Italian</mat-checkbox>\n    <mat-checkbox formControlName=\"indian\">Indian</mat-checkbox>\n    <mat-checkbox formControlName=\"lebanese\">Lebanese</mat-checkbox>\n    <mat-checkbox formControlName=\"asian\">Asian</mat-checkbox>\n    <mat-checkbox formControlName=\"mediteraneean\">Mediteraneean</mat-checkbox>\n\n    <h4>Price range</h4>\n    <mat-checkbox formControlName=\"price1\"> $ </mat-checkbox>\n    <mat-checkbox formControlName=\"price2\"> $$ </mat-checkbox>\n    <mat-checkbox formControlName=\"price3\"> $$$ </mat-checkbox>\n    <mat-checkbox formControlName=\"price4\"> $$$$ </mat-checkbox>\n    <mat-checkbox formControlName=\"price5\"> $$$$$ </mat-checkbox>\n\n    <h4>Entertainment</h4>\n    <mat-checkbox formControlName=\"karaoke\">Karaoke</mat-checkbox>\n    <mat-checkbox formControlName=\"dj\">Dj</mat-checkbox>\n    <mat-checkbox formControlName=\"liveMusic\">Live music</mat-checkbox>\n    <mat-checkbox formControlName=\"standUp\">Stand-up</mat-checkbox>\n\n    <h4>Parking</h4>\n    <mat-checkbox formControlName=\"freeParking\">Free parking</mat-checkbox>\n\n    <h4>Smoking policy</h4>\n    <mat-checkbox formControlName=\"inner\">Inner</mat-checkbox>\n    <mat-checkbox formControlName=\"outer\">Outer</mat-checkbox>\n\n    <button (click)=\"getFilterData()\" class=\"btn-long btn-color-fill my-2\"><i class=\"fas fa-check\"></i> Apply</button>\n</div>\n";

/***/ }),

/***/ 44310:
/*!***************************************************************************************************************!*\
  !*** ./src/app/standalone-components/tickets-filter-sidebar/tickets-filter-sidebar.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "    <div class=\"filter-tickets-container\" [formGroup]=\"filterForm\">    \n        <h4>Cuisine</h4>\n        <mat-checkbox formControlName=\"mostPopular\">Most popular</mat-checkbox>\n        <mat-checkbox formControlName=\"highestRating\">Highest Rating</mat-checkbox>\n        <mat-checkbox formControlName=\"lowestRating\">Lowest Rating</mat-checkbox>\n        <mat-checkbox formControlName=\"highPrice\">High Price</mat-checkbox>\n        <mat-checkbox formControlName=\"lowPrice\">Low Price</mat-checkbox>\n    \n        <h4>Rating range</h4>\n        <mat-checkbox formControlName=\"rate1\">&lt; 25%</mat-checkbox>\n        <mat-checkbox formControlName=\"rate2\">25 - 50%</mat-checkbox>\n        <mat-checkbox formControlName=\"rate3\">50 - 75%</mat-checkbox>\n        <mat-checkbox formControlName=\"rate4\">>&gt; 75%</mat-checkbox>\n    \n        <button (click)=\"getFilterData()\" class=\"btn-long btn-color-fill my-2\"><i class=\"fas fa-check\"></i> Apply</button>\n    \n    </div>\n\n";

/***/ }),

/***/ 18580:
/*!************************************!*\
  !*** ./node_modules/ol/Overlay.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object.js */ 62594);
/* harmony import */ var _MapEventType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapEventType.js */ 52347);
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.js */ 87058);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extent.js */ 55407);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ 75544);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ 27425);
/**
 * @module ol/Overlay
 */







/**
 * @typedef {'bottom-left' | 'bottom-center' | 'bottom-right' | 'center-left' | 'center-center' | 'center-right' | 'top-left' | 'top-center' | 'top-right'} Positioning
 * The overlay position: `'bottom-left'`, `'bottom-center'`,  `'bottom-right'`,
 * `'center-left'`, `'center-center'`, `'center-right'`, `'top-left'`,
 * `'top-center'`, or `'top-right'`.
 */

/**
 * @typedef {Object} Options
 * @property {number|string} [id] Set the overlay id. The overlay id can be used
 * with the {@link module:ol/Map~Map#getOverlayById} method.
 * @property {HTMLElement} [element] The overlay element.
 * @property {Array<number>} [offset=[0, 0]] Offsets in pixels used when positioning
 * the overlay. The first element in the
 * array is the horizontal offset. A positive value shifts the overlay right.
 * The second element in the array is the vertical offset. A positive value
 * shifts the overlay down.
 * @property {import("./coordinate.js").Coordinate} [position] The overlay position
 * in map projection.
 * @property {Positioning} [positioning='top-left'] Defines how
 * the overlay is actually positioned with respect to its `position` property.
 * Possible values are `'bottom-left'`, `'bottom-center'`, `'bottom-right'`,
 * `'center-left'`, `'center-center'`, `'center-right'`, `'top-left'`,
 * `'top-center'`, and `'top-right'`.
 * @property {boolean} [stopEvent=true] Whether event propagation to the map
 * viewport should be stopped. If `true` the overlay is placed in the same
 * container as that of the controls (CSS class name
 * `ol-overlaycontainer-stopevent`); if `false` it is placed in the container
 * with CSS class name specified by the `className` property.
 * @property {boolean} [insertFirst=true] Whether the overlay is inserted first
 * in the overlay container, or appended. If the overlay is placed in the same
 * container as that of the controls (see the `stopEvent` option) you will
 * probably set `insertFirst` to `true` so the overlay is displayed below the
 * controls.
 * @property {PanIntoViewOptions|boolean} [autoPan=false] Pan the map when calling
 * `setPosition`, so that the overlay is entirely visible in the current viewport.
 * @property {string} [className='ol-overlay-container ol-selectable'] CSS class
 * name.
 */

/**
 * @typedef {Object} PanOptions
 * @property {number} [duration=1000] The duration of the animation in
 * milliseconds.
 * @property {function(number):number} [easing] The easing function to use. Can
 * be one from {@link module:ol/easing} or a custom function.
 * Default is {@link module:ol/easing.inAndOut}.
 */

/**
 * @typedef {Object} PanIntoViewOptions
 * @property {PanOptions} [animation={}] The animation parameters for the pan
 * @property {number} [margin=20] The margin (in pixels) between the
 * overlay and the borders of the map when panning into view.
 */

/**
 * @enum {string}
 * @protected
 */
const Property = {
  ELEMENT: 'element',
  MAP: 'map',
  OFFSET: 'offset',
  POSITION: 'position',
  POSITIONING: 'positioning'
};

/**
 * @typedef {import("./ObjectEventType").Types|'change:element'|'change:map'|'change:offset'|'change:position'|
 *   'change:positioning'} OverlayObjectEventTypes
 */

/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *   import("./Observable").OnSignature<OverlayObjectEventTypes, import("./Object").ObjectEvent, Return> &
 *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|OverlayObjectEventTypes, Return>} OverlayOnSignature
 */

/**
 * @classdesc
 * An element to be displayed over the map and attached to a single map
 * location.  Like {@link module:ol/control/Control~Control}, Overlays are
 * visible widgets. Unlike Controls, they are not in a fixed position on the
 * screen, but are tied to a geographical coordinate, so panning the map will
 * move an Overlay but not a Control.
 *
 * Example:
 *
 *     import Overlay from 'ol/Overlay.js';
 *
 *     // ...
 *     const popup = new Overlay({
 *       element: document.getElementById('popup'),
 *     });
 *     popup.setPosition(coordinate);
 *     map.addOverlay(popup);
 *
 * @api
 */
class Overlay extends _Object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {Options} options Overlay options.
   */
  constructor(options) {
    super();

    /***
     * @type {OverlayOnSignature<import("./events").EventsKey>}
     */
    this.on;

    /***
     * @type {OverlayOnSignature<import("./events").EventsKey>}
     */
    this.once;

    /***
     * @type {OverlayOnSignature<void>}
     */
    this.un;

    /**
     * @protected
     * @type {Options}
     */
    this.options = options;

    /**
     * @protected
     * @type {number|string|undefined}
     */
    this.id = options.id;

    /**
     * @protected
     * @type {boolean}
     */
    this.insertFirst = options.insertFirst !== undefined ? options.insertFirst : true;

    /**
     * @protected
     * @type {boolean}
     */
    this.stopEvent = options.stopEvent !== undefined ? options.stopEvent : true;

    /**
     * @protected
     * @type {HTMLElement}
     */
    this.element = document.createElement('div');
    this.element.className = options.className !== undefined ? options.className : 'ol-overlay-container ' + _css_js__WEBPACK_IMPORTED_MODULE_1__.CLASS_SELECTABLE;
    this.element.style.position = 'absolute';
    this.element.style.pointerEvents = 'auto';

    /**
     * @protected
     * @type {PanIntoViewOptions|undefined}
     */
    this.autoPan = options.autoPan === true ? {} : options.autoPan || undefined;

    /**
     * @protected
     * @type {{transform_: string,
     *         visible: boolean}}
     */
    this.rendered = {
      transform_: '',
      visible: true
    };

    /**
     * @protected
     * @type {?import("./events.js").EventsKey}
     */
    this.mapPostrenderListenerKey = null;
    this.addChangeListener(Property.ELEMENT, this.handleElementChanged);
    this.addChangeListener(Property.MAP, this.handleMapChanged);
    this.addChangeListener(Property.OFFSET, this.handleOffsetChanged);
    this.addChangeListener(Property.POSITION, this.handlePositionChanged);
    this.addChangeListener(Property.POSITIONING, this.handlePositioningChanged);
    if (options.element !== undefined) {
      this.setElement(options.element);
    }
    this.setOffset(options.offset !== undefined ? options.offset : [0, 0]);
    this.setPositioning(options.positioning || 'top-left');
    if (options.position !== undefined) {
      this.setPosition(options.position);
    }
  }

  /**
   * Get the DOM element of this overlay.
   * @return {HTMLElement|undefined} The Element containing the overlay.
   * @observable
   * @api
   */
  getElement() {
    return (/** @type {HTMLElement|undefined} */this.get(Property.ELEMENT)
    );
  }

  /**
   * Get the overlay identifier which is set on constructor.
   * @return {number|string|undefined} Id.
   * @api
   */
  getId() {
    return this.id;
  }

  /**
   * Get the map associated with this overlay.
   * @return {import("./Map.js").default|null} The map that the
   * overlay is part of.
   * @observable
   * @api
   */
  getMap() {
    return (/** @type {import("./Map.js").default|null} */
      this.get(Property.MAP) || null
    );
  }

  /**
   * Get the offset of this overlay.
   * @return {Array<number>} The offset.
   * @observable
   * @api
   */
  getOffset() {
    return (/** @type {Array<number>} */this.get(Property.OFFSET)
    );
  }

  /**
   * Get the current position of this overlay.
   * @return {import("./coordinate.js").Coordinate|undefined} The spatial point that the overlay is
   *     anchored at.
   * @observable
   * @api
   */
  getPosition() {
    return (/** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(Property.POSITION)
    );
  }

  /**
   * Get the current positioning of this overlay.
   * @return {Positioning} How the overlay is positioned
   *     relative to its point on the map.
   * @observable
   * @api
   */
  getPositioning() {
    return (/** @type {Positioning} */this.get(Property.POSITIONING)
    );
  }

  /**
   * @protected
   */
  handleElementChanged() {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.removeChildren)(this.element);
    const element = this.getElement();
    if (element) {
      this.element.appendChild(element);
    }
  }

  /**
   * @protected
   */
  handleMapChanged() {
    if (this.mapPostrenderListenerKey) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.removeNode)(this.element);
      (0,_events_js__WEBPACK_IMPORTED_MODULE_3__.unlistenByKey)(this.mapPostrenderListenerKey);
      this.mapPostrenderListenerKey = null;
    }
    const map = this.getMap();
    if (map) {
      this.mapPostrenderListenerKey = (0,_events_js__WEBPACK_IMPORTED_MODULE_3__.listen)(map, _MapEventType_js__WEBPACK_IMPORTED_MODULE_4__["default"].POSTRENDER, this.render, this);
      this.updatePixelPosition();
      const container = this.stopEvent ? map.getOverlayContainerStopEvent() : map.getOverlayContainer();
      if (this.insertFirst) {
        container.insertBefore(this.element, container.childNodes[0] || null);
      } else {
        container.appendChild(this.element);
      }
      this.performAutoPan();
    }
  }

  /**
   * @protected
   */
  render() {
    this.updatePixelPosition();
  }

  /**
   * @protected
   */
  handleOffsetChanged() {
    this.updatePixelPosition();
  }

  /**
   * @protected
   */
  handlePositionChanged() {
    this.updatePixelPosition();
    this.performAutoPan();
  }

  /**
   * @protected
   */
  handlePositioningChanged() {
    this.updatePixelPosition();
  }

  /**
   * Set the DOM element to be associated with this overlay.
   * @param {HTMLElement|undefined} element The Element containing the overlay.
   * @observable
   * @api
   */
  setElement(element) {
    this.set(Property.ELEMENT, element);
  }

  /**
   * Set the map to be associated with this overlay.
   * @param {import("./Map.js").default|null} map The map that the
   * overlay is part of. Pass `null` to just remove the overlay from the current map.
   * @observable
   * @api
   */
  setMap(map) {
    this.set(Property.MAP, map);
  }

  /**
   * Set the offset for this overlay.
   * @param {Array<number>} offset Offset.
   * @observable
   * @api
   */
  setOffset(offset) {
    this.set(Property.OFFSET, offset);
  }

  /**
   * Set the position for this overlay. If the position is `undefined` the
   * overlay is hidden.
   * @param {import("./coordinate.js").Coordinate|undefined} position The spatial point that the overlay
   *     is anchored at.
   * @observable
   * @api
   */
  setPosition(position) {
    this.set(Property.POSITION, position);
  }

  /**
   * Pan the map so that the overlay is entirely visible in the current viewport
   * (if necessary) using the configured autoPan parameters
   * @protected
   */
  performAutoPan() {
    if (this.autoPan) {
      this.panIntoView(this.autoPan);
    }
  }

  /**
   * Pan the map so that the overlay is entirely visible in the current viewport
   * (if necessary).
   * @param {PanIntoViewOptions} [panIntoViewOptions] Options for the pan action
   * @api
   */
  panIntoView(panIntoViewOptions) {
    const map = this.getMap();
    if (!map || !map.getTargetElement() || !this.get(Property.POSITION)) {
      return;
    }
    const mapRect = this.getRect(map.getTargetElement(), map.getSize());
    const element = this.getElement();
    const overlayRect = this.getRect(element, [(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.outerWidth)(element), (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.outerHeight)(element)]);
    panIntoViewOptions = panIntoViewOptions || {};
    const myMargin = panIntoViewOptions.margin === undefined ? 20 : panIntoViewOptions.margin;
    if (!(0,_extent_js__WEBPACK_IMPORTED_MODULE_5__.containsExtent)(mapRect, overlayRect)) {
      // the overlay is not completely inside the viewport, so pan the map
      const offsetLeft = overlayRect[0] - mapRect[0];
      const offsetRight = mapRect[2] - overlayRect[2];
      const offsetTop = overlayRect[1] - mapRect[1];
      const offsetBottom = mapRect[3] - overlayRect[3];
      const delta = [0, 0];
      if (offsetLeft < 0) {
        // move map to the left
        delta[0] = offsetLeft - myMargin;
      } else if (offsetRight < 0) {
        // move map to the right
        delta[0] = Math.abs(offsetRight) + myMargin;
      }
      if (offsetTop < 0) {
        // move map up
        delta[1] = offsetTop - myMargin;
      } else if (offsetBottom < 0) {
        // move map down
        delta[1] = Math.abs(offsetBottom) + myMargin;
      }
      if (delta[0] !== 0 || delta[1] !== 0) {
        const center = /** @type {import("./coordinate.js").Coordinate} */
        map.getView().getCenterInternal();
        const centerPx = map.getPixelFromCoordinateInternal(center);
        if (!centerPx) {
          return;
        }
        const newCenterPx = [centerPx[0] + delta[0], centerPx[1] + delta[1]];
        const panOptions = panIntoViewOptions.animation || {};
        map.getView().animateInternal({
          center: map.getCoordinateFromPixelInternal(newCenterPx),
          duration: panOptions.duration,
          easing: panOptions.easing
        });
      }
    }
  }

  /**
   * Get the extent of an element relative to the document
   * @param {HTMLElement} element The element.
   * @param {import("./size.js").Size} size The size of the element.
   * @return {import("./extent.js").Extent} The extent.
   * @protected
   */
  getRect(element, size) {
    const box = element.getBoundingClientRect();
    const offsetX = box.left + window.pageXOffset;
    const offsetY = box.top + window.pageYOffset;
    return [offsetX, offsetY, offsetX + size[0], offsetY + size[1]];
  }

  /**
   * Set the positioning for this overlay.
   * @param {Positioning} positioning how the overlay is
   *     positioned relative to its point on the map.
   * @observable
   * @api
   */
  setPositioning(positioning) {
    this.set(Property.POSITIONING, positioning);
  }

  /**
   * Modify the visibility of the element.
   * @param {boolean} visible Element visibility.
   * @protected
   */
  setVisible(visible) {
    if (this.rendered.visible !== visible) {
      this.element.style.display = visible ? '' : 'none';
      this.rendered.visible = visible;
    }
  }

  /**
   * Update pixel position.
   * @protected
   */
  updatePixelPosition() {
    const map = this.getMap();
    const position = this.getPosition();
    if (!map || !map.isRendered() || !position) {
      this.setVisible(false);
      return;
    }
    const pixel = map.getPixelFromCoordinate(position);
    const mapSize = map.getSize();
    this.updateRenderedPosition(pixel, mapSize);
  }

  /**
   * @param {import("./pixel.js").Pixel} pixel The pixel location.
   * @param {import("./size.js").Size|undefined} mapSize The map size.
   * @protected
   */
  updateRenderedPosition(pixel, mapSize) {
    const style = this.element.style;
    const offset = this.getOffset();
    const positioning = this.getPositioning();
    this.setVisible(true);
    const x = Math.round(pixel[0] + offset[0]) + 'px';
    const y = Math.round(pixel[1] + offset[1]) + 'px';
    let posX = '0%';
    let posY = '0%';
    if (positioning == 'bottom-right' || positioning == 'center-right' || positioning == 'top-right') {
      posX = '-100%';
    } else if (positioning == 'bottom-center' || positioning == 'center-center' || positioning == 'top-center') {
      posX = '-50%';
    }
    if (positioning == 'bottom-left' || positioning == 'bottom-center' || positioning == 'bottom-right') {
      posY = '-100%';
    } else if (positioning == 'center-left' || positioning == 'center-center' || positioning == 'center-right') {
      posY = '-50%';
    }
    const transform = `translate(${posX}, ${posY}) translate(${x}, ${y})`;
    if (this.rendered.transform_ != transform) {
      this.rendered.transform_ = transform;
      style.transform = transform;
    }
  }

  /**
   * returns the options this Overlay has been created with
   * @return {Options} overlay options
   */
  getOptions() {
    return this.options;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overlay);

/***/ })

}]);
//# sourceMappingURL=src_app_features_domain-listing_domain-listing_module_ts.js.map