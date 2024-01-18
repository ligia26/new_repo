(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_client-trips-itineraries_client-trips-itineraries_module_ts"],{

/***/ 39026:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/accomodation/accomodation.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccomodationComponent": () => (/* binding */ AccomodationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _accomodation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accomodation.component.html?ngResource */ 12251);
/* harmony import */ var _accomodation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accomodation.component.scss?ngResource */ 31820);
/* harmony import */ var _accomodation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_accomodation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 58446);
/* harmony import */ var _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/itineraries.store */ 18645);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _domain_listing_view_simple_resource_view_simple_resource_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../domain-listing/view-simple-resource/view-simple-resource.component */ 40506);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/_services/resource-filter.service */ 41682);










let AccomodationComponent = class AccomodationComponent {
  constructor(modalService, itinerariesStore, resourceFilterService) {
    this.modalService = modalService;
    this.itinerariesStore = itinerariesStore;
    this.resourceFilterService = resourceFilterService;
    this.itineraryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.newItinerary = null;
    this.temporaryModalItinerary = null;
    this.itineraryExtraInfo = null;
    // accommodation specific data
    this.accommodationResources = [];
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.getItineraryData();
  }
  getItineraryData() {
    this.newItinerary = this.itinerariesStore.getRecommendedItinerary();
    this.temporaryModalItinerary = structuredClone(this.newItinerary);
    this.itineraryExtraInfo = this.itinerariesStore.getItineraryExtraInfo();
    if (this.newItinerary?.resources?.length > 1) {
      this.destinationIndexesArray = Array(this.newItinerary.resources.length).fill(null).map((x, i) => i);
    }
    this.itinerariesStore.destinationIndex$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(newIndex => this.destinationIndex = newIndex);
  }
  getResourcesForModal() {
    console.log(this.accommodationResources);
    if (this.accommodationResources?.[this.destinationIndex]?.length > 0) return;
    if (this.itineraryExtraInfo.itineraryType !== 'manual') {
      this.getResourcesForAiItinerary();
    } else {
      this.itinerariesStore.getResourcesForManualItinerary("itineraryAccommodationResourceTypes").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          this.accommodationResources[this.destinationIndex] = res.slice();
          if (!this.activeAccId) this.activeAccId = this.accommodationResources[this.destinationIndex][0].resourceTypeName;
        }
      });
    }
  }
  getResourcesForAiItinerary() {
    this.newItinerary.resources[this.destinationIndex].accommodationResource.forEach(group => {
      if (group?.resources?.length > 0) {
        this.itinerariesStore.getResourcesByIds(group.resources).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(resources => {
          const modifiedObj = {
            resourceTypeId: group.resourceTypeId,
            resourceTypeName: group.resourceTypeName,
            resources: resources
          };
          return modifiedObj;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: res => {
            if (!this.accommodationResources[this.destinationIndex]) this.accommodationResources[this.destinationIndex] = [];
            this.accommodationResources[this.destinationIndex].push(res);
            if (!this.activeAccId) this.activeAccId = this.accommodationResources[this.destinationIndex][0].resourceTypeName;
            console.log(this.accommodationResources);
          }
        });
      }
    });
  }
  setDestinationIndex(newDestinationIndex) {
    this.itinerariesStore.setDestinationIndex(newDestinationIndex);
    this.itinerariesStore.setDayState(this.newItinerary.resources[newDestinationIndex].startDate);
  }
  openModal(templateRef) {
    // this.newItinerary = this.itinerariesStore.getRecommendedItinerary();
    this.temporaryModalItinerary = structuredClone(this.newItinerary);
    this.getResourcesForModal();
    this.activeAccId = this.newItinerary.resources?.[this.destinationIndex]?.accommodationResourceRecommended?.resourceTypeName || null;
    const resourcesModal = this.modalService.open(templateRef, {
      panelClass: 'custom-modal'
    });
    resourcesModal.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(newItineraryData => {
      if (newItineraryData) {
        this.itineraryChanged.emit(newItineraryData);
        this.newItinerary = structuredClone(this.temporaryModalItinerary);
      }
    });
  }
  openResourceModal(resource, resourceIndex) {
    console.log('resursa la trimitere', resource);
    // TODO: nu sunt sigur daca trebuie sa resetam state-ul serviciului
    this.resourceFilterService.initServiceStates();
    this.itinerariesStore.setTemporaryData(this.temporaryModalItinerary);
    this.resourceFilterService.setResourceFromItinerary(resource);
    this.resourceFilterService.updateSavedFilters({
      dateAsDay: null,
      dateAsHour: null,
      startDate: this.itineraryExtraInfo.itineraryType !== 'ai' ? this.itineraryExtraInfo.destinations[this.destinationIndex].startDate : this.itineraryExtraInfo.startDate,
      endDate: this.itineraryExtraInfo.itineraryType !== 'ai' ? this.itineraryExtraInfo.destinations[this.destinationIndex].endDate : this.itineraryExtraInfo.endDate,
      startHour: null,
      endHour: null,
      adultsNumber: this.itineraryExtraInfo.adultsNumber,
      childrenNumber: this.itineraryExtraInfo.childrenNumber,
      roomsNumber: null
    });
    const resourceModal = this.modalService.open(_domain_listing_view_simple_resource_view_simple_resource_component__WEBPACK_IMPORTED_MODULE_3__.ViewSimpleResourceComponent, {
      width: '90%',
      autoFocus: false,
      maxHeight: '90vh'
    });
    resourceModal.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(roomSelection => {
      console.log('ROOM SELECTION', roomSelection);
      if (roomSelection?.length > 0) {
        console.log(this.accommodationResources, resourceIndex);
        this.temporaryModalItinerary.resources[this.destinationIndex].accommodationResourceRecommended = {
          startDate: this.itineraryExtraInfo.itineraryType !== 'ai' ? this.itineraryExtraInfo.destinations[this.destinationIndex].startDate.format('YYYY-MM-DD') : this.itineraryExtraInfo.startDate.format('YYYY-MM-DD'),
          endDate: this.itineraryExtraInfo.itineraryType !== 'ai' ? this.itineraryExtraInfo.destinations[this.destinationIndex].endDate.format('YYYY-MM-DD') : this.itineraryExtraInfo.endDate.format('YYYY-MM-DD'),
          items: roomSelection,
          resourceId: resource.id,
          resourceName: resource.title,
          resourceTypeName: this.accommodationResources[this.destinationIndex][resourceIndex].resourceTypeName
        };
        this.temporaryModalItinerary.accommodationPrice = 0;
        this.temporaryModalItinerary.accommodationPaidAmount = 0;
        this.temporaryModalItinerary.resources.forEach(location => {
          /*this.temporaryModalItinerary.accommodationPrice += location.accommodationResourceRecommended.items.reduce((newPrice, room) =>
                  newPrice + room.pricePerItem * room.quantity
              , 0);*/
          if (location.accommodationResourceRecommended.items?.length > 0) {
            location.accommodationResourceRecommended.items.forEach(room => {
              // pret total
              this.temporaryModalItinerary.accommodationPrice += room.pricePerItem * room.quantity;
              // pret in functie de booking policies
              this.temporaryModalItinerary.accommodationPaidAmount += this.getRoomDepositPrice(room);
            });
          }
        });
        console.log(this.temporaryModalItinerary);
      }
    });
  }
  getRoomDepositPrice(room) {
    if (!room.bookingPolicies) return 0;
    if (room.bookingPolicies?.advanceFullPayment) {
      return room.pricePerItem * room.quantity;
    } else if (room.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
      return room.pricePerItem * room.quantity * room.bookingPolicies?.advancePartialPaymentPercentage / 100;
    } else if (room.bookingPolicies?.depositRequiredAmount !== 0) {
      return room.bookingPolicies?.depositRequiredAmount;
    } else if (room.bookingPolicies?.depositRequiredPercentage !== 0) {
      return room.pricePerItem * room.quantity * room.bookingPolicies?.depositRequiredPercentage / 100;
    } else {
      return 0;
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_9__.MatLegacyDialog
  }, {
    type: _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__.ItinerariesStore
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_4__.ResourceFilterService
  }];
  static #_2 = this.propDecorators = {
    itineraryChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }]
  };
};
AccomodationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-accomodation',
  template: _accomodation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_accomodation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AccomodationComponent);


/***/ }),

/***/ 77972:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/day-activities/activities.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesComponent": () => (/* binding */ ActivitiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activities.component.html?ngResource */ 21071);
/* harmony import */ var _activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities.component.scss?ngResource */ 30647);
/* harmony import */ var _activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 58446);
/* harmony import */ var _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/itineraries.store */ 18645);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _domain_listing_view_simple_resource_view_simple_resource_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../domain-listing/view-simple-resource/view-simple-resource.component */ 40506);











let ActivitiesComponent = class ActivitiesComponent {
  constructor(modalService, itinerariesStore, resourceFilterService) {
    this.modalService = modalService;
    this.itinerariesStore = itinerariesStore;
    this.resourceFilterService = resourceFilterService;
    this.itineraryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.newItinerary = null;
    this.temporaryModalItinerary = null;
    this.itineraryExtraInfo = null;
    // eat and drinks specific data
    this.activeaMealId = 'Breakfast';
    this.activitiesResources = [];
    // indexul acestui array reprezinta locatia, iar obiectul reprezinta perioada in care sta cazat in locatia respectiva
    this.dateLimitsByDestination = [];
    // array de date-uri
    this.days = [];
    this.daysDictionary = {};
    // key - reprezinta data; value: daca exista resurse in ziua respectiva pt modal
    this.resourcesExistByDay = {};
    this.selectedResources = [];
    this.temporarySelectedResources = [];
    // key - resource type id; value - resource type name
    this.resourceTypeDictionary = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  ngOnInit() {
    if (this.dayActivities) {
      this.activityType = "dayActivityResource";
      this.activityTypeRecommended = "dayActivityResourcesRecommended";
    } else {
      this.activityType = "eveningActivityResource";
      this.activityTypeRecommended = "eveningActivityResourcesRecommended";
    }
    this.getItineraryData();
    this.getResourceTypeDictionary();
  }
  getItineraryData() {
    this.newItinerary = this.itinerariesStore.getRecommendedItinerary();
    this.temporaryModalItinerary = structuredClone(this.newItinerary);
    this.itineraryExtraInfo = this.itinerariesStore.getItineraryExtraInfo();
    this.createSelectedResources();
    this.newItinerary.resources.forEach(location => {
      this.dateLimitsByDestination.push({
        startDate: location.startDate,
        endDate: location.endDate
      });
      const resourcesByDateGroups = location?.[this.activityType];
      if (resourcesByDateGroups?.length > 0) {
        resourcesByDateGroups.forEach(resourcesByDate => {
          this.resourcesExistByDay = {
            ...this.resourcesExistByDay,
            [resourcesByDate.date]: false
          };
          const resourcesGroups = resourcesByDate.resources;
          if (resourcesGroups.length > 0) {
            for (const group of resourcesGroups) {
              if (group?.resources?.length > 0) {
                this.resourcesExistByDay = {
                  ...this.resourcesExistByDay,
                  [resourcesByDate.date]: true
                };
                break;
              }
            }
          }
        });
      }
    });
    this.dateLimitsByDestination.forEach(dateLimit => {
      const startDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(dateLimit.startDate);
      const endDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(dateLimit.endDate);
      const diffInDays = endDate.diff(startDate, 'days');
      if (diffInDays === 1) {
        this.days.push(startDate.format('YYYY-MM-DD'));
      } else if (diffInDays > 1) {
        for (let i = 0; i < diffInDays; i++) {
          const newDay = startDate.clone().add(i, 'days').format('YYYY-MM-DD');
          this.days.push(newDay);
        }
      }
    });
    this.days.forEach((day, index) => {
      this.daysDictionary = {
        ...this.daysDictionary,
        [day]: index
      };
    });
    console.log('date limits by destination', this.dateLimitsByDestination);
    console.log('days', this.days);
    console.log('days dictionary', this.daysDictionary);
    console.log('resources exist by day', this.resourcesExistByDay);
    this.itinerariesStore.destinationIndex$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(newIndex => this.destinationIndex = newIndex);
    this.itinerariesStore.dayState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(newDay => this.dayState = newDay);
  }
  getResourceTypeDictionary() {
    this.itinerariesStore.getResourceTypeDictionary().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceTypeDictionary = res[0];
      }
    });
  }
  createSelectedResources() {
    this.newItinerary.resources.forEach((location, locationIndex) => {
      // create the selected resources array
      if (location?.[this.activityTypeRecommended]?.length > 0) {
        location[this.activityTypeRecommended].forEach(group => {
          if (group?.items?.length > 0) {
            group.items.forEach(dateGroup => {
              this.selectedResources[locationIndex] = {
                ...this.selectedResources[locationIndex],
                [dateGroup.date]: group.resourceId
              };
            });
          }
        });
      }
    });
    this.temporarySelectedResources = structuredClone(this.selectedResources);
    console.log('RESOURCES BY DATE', this.selectedResources);
  }
  setDayState(day) {
    if (this.dateLimitsByDestination.length === 1) {
      this.itinerariesStore.setDayState(day);
      return;
    }
    for (let i = 0; i < this.dateLimitsByDestination.length; i++) {
      const startDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.dateLimitsByDestination[i].startDate);
      const endDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.dateLimitsByDestination[i].endDate);
      const currentDay = moment__WEBPACK_IMPORTED_MODULE_4___default()(day);
      if (currentDay.isBetween(startDate, endDate, undefined, '[)')) {
        this.itinerariesStore.setDestinationIndex(i);
        this.itinerariesStore.setDayState(currentDay.format('YYYY-MM-DD'));
        break;
      }
    }
  }
  openModal(templateRef) {
    this.temporaryModalItinerary = structuredClone(this.newItinerary);
    this.createSelectedResources();
    this.getResourcesForModal();
    const resourcesModal = this.modalService.open(templateRef, {
      panelClass: 'custom-modal'
    });
    resourcesModal.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(newItineraryData => {
      if (newItineraryData) {
        this.itineraryChanged.emit(newItineraryData);
        this.newItinerary = structuredClone(this.temporaryModalItinerary);
        this.selectedResources = structuredClone(this.temporarySelectedResources);
        console.log(this.newItinerary);
        console.log(this.selectedResources);
      }
    });
  }
  getResourcesForModal() {
    if (this.activitiesResources?.[this.destinationIndex]?.length > 0) return;
    this.newItinerary.resources[this.destinationIndex]?.[this.activityType].forEach((group, groupIndex) => {
      if (group.resources?.length > 0) {
        group.resources.forEach((resourceGroup, resourceGroupIndex) => {
          if (resourceGroup.resources?.length > 0) {
            this.itinerariesStore.getResourcesByIds(resourceGroup.resources).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(resources => {
              const modifiedObj = {
                resourceTypeId: resourceGroup.resourceTypeId,
                resourceTypeName: resourceGroup.resourceTypeName,
                resources: resources
              };
              return modifiedObj;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
              next: res => {
                console.log(res);
                if (!this.activitiesResources[this.destinationIndex]) this.activitiesResources[this.destinationIndex] = [];
                if (!this.activitiesResources[this.destinationIndex][groupIndex]) {
                  this.activitiesResources[this.destinationIndex][groupIndex] = {
                    date: group.date,
                    resources: []
                  };
                }
                this.activitiesResources[this.destinationIndex][groupIndex].resources = [...this.activitiesResources[this.destinationIndex][groupIndex].resources, res];
                console.log(this.activitiesResources);
              }
            });
          }
        });
      }
    });
  }
  openResourceModal(resource, date) {
    console.log('resursa la trimitere', resource);
    this.resourceFilterService.initServiceStates();
    this.itinerariesStore.setActivitiesType(this.dayActivities ? 'day' : 'evening');
    this.itinerariesStore.setTemporaryData(this.temporaryModalItinerary);
    this.resourceFilterService.setResourceFromItinerary(resource);
    this.resourceFilterService.updateSavedFilters({
      dateAsDay: moment__WEBPACK_IMPORTED_MODULE_4___default()(date),
      dateAsHour: null,
      startDate: this.itineraryExtraInfo.itineraryType === 'road-trip' ? this.itineraryExtraInfo.destinations[this.destinationIndex].startDate : this.itineraryExtraInfo.startDate,
      endDate: this.itineraryExtraInfo.itineraryType === 'road-trip' ? this.itineraryExtraInfo.destinations[this.destinationIndex].endDate : this.itineraryExtraInfo.endDate,
      startHour: null,
      endHour: null,
      adultsNumber: this.itineraryExtraInfo.adultsNumber,
      childrenNumber: this.itineraryExtraInfo.childrenNumber,
      roomsNumber: null
    });
    const resourceModal = this.modalService.open(_domain_listing_view_simple_resource_view_simple_resource_component__WEBPACK_IMPORTED_MODULE_5__.ViewSimpleResourceComponent, {
      width: '90%',
      autoFocus: false,
      maxHeight: '90vh'
    });
    resourceModal.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(ticketSelection => {
      console.log('TICKET SELECTION', ticketSelection);
      console.log('before', structuredClone(this.temporaryModalItinerary));
      console.log('before', structuredClone(this.selectedResources));
      if (!ticketSelection) return;
      let previousResourceId = null;
      const newResourceId = resource.id;
      // modificam selected resources
      if (this.temporarySelectedResources[this.destinationIndex]?.[date]) {
        previousResourceId = this.temporarySelectedResources[this.destinationIndex]?.[date];
        this.temporarySelectedResources[this.destinationIndex][date] = resource.id;
      } else {
        this.temporarySelectedResources[this.destinationIndex] = {
          ...this.temporarySelectedResources[this.destinationIndex],
          [date]: resource.id
        };
      }
      // modificam temporary itinerary
      if (previousResourceId) {
        if (previousResourceId !== newResourceId) {
          const groups = this.temporaryModalItinerary.resources[this.destinationIndex]?.[this.activityTypeRecommended];
          if (groups.length === 0) return;
          let newResourceFound = false;
          // iteram de la final spre inceput, ca sa nu ne afecteze splice-ul
          for (let i = groups.length - 1; i >= 0; i--) {
            // adaugam ticket selection pt data potrivita
            if (groups[i].resourceId === newResourceId) {
              newResourceFound = true;
              const newResourceDates = groups[i].items;
              let dateFound = false;
              for (const dateGroup of newResourceDates) {
                if (dateGroup.date === date) {
                  dateGroup.items = ticketSelection;
                  dateFound = true;
                }
              }
              if (!dateFound) {
                newResourceDates.push({
                  date: date,
                  items: ticketSelection
                });
              }
            }
            // stergem resursa veche sau doar data, dupa caz
            if (groups[i].resourceId === previousResourceId) {
              const previousResourceDates = groups[i].items;
              // stergem resursa
              if (previousResourceDates?.length === 1) {
                groups.splice(i, 1);
              }
              // stergem data
              else if (previousResourceDates?.length > 1) {
                for (const dateGroup of previousResourceDates) {
                  if (dateGroup.date === date) {
                    previousResourceDates.splice(previousResourceDates.indexOf(dateGroup), 1);
                  }
                }
              }
            }
          }
          // daca resursa nu exista inainte in arrayul de recomandate
          if (!newResourceFound) {
            groups.push({
              resourceId: resource.id,
              resourceName: resource.title,
              resourceTypeName: this.resourceTypeDictionary[resource.resourceTypeId],
              items: [{
                date: date,
                items: ticketSelection
              }]
            });
          }
        } else {
          const groups = this.temporaryModalItinerary.resources[this.destinationIndex]?.[this.activityTypeRecommended];
          if (groups.length === 0) return;
          for (let i = 0; i <= groups.length - 1; i++) {
            // modificam ticket selection pt data potrivita
            if (groups[i].resourceId === newResourceId) {
              const newResourceDates = groups[i].items;
              for (const dateGroup of newResourceDates) {
                if (dateGroup.date === date) {
                  dateGroup.items = ticketSelection;
                }
              }
            }
          }
        }
      } else {
        let groups = this.temporaryModalItinerary.resources[this.destinationIndex]?.[this.activityTypeRecommended];
        if (!groups || groups?.length === 0) {
          groups = [];
        }
        this.temporaryModalItinerary.resources[this.destinationIndex][this.activityTypeRecommended] = [...groups, {
          resourceId: resource.id,
          resourceName: resource.title,
          resourceTypeName: this.resourceTypeDictionary[resource.resourceTypeId],
          items: [{
            date: date,
            items: ticketSelection
          }]
        }];
      }
      console.log('PAID AMOUNT BEFORE', this.temporaryModalItinerary.dayActivityPaidAmount);
      // recalculam total price-urile
      if (this.dayActivities) {
        this.temporaryModalItinerary.dayActivityPrice = 0;
        this.temporaryModalItinerary.dayActivityPaidAmount = 0;
      } else {
        this.temporaryModalItinerary.eveningActivityPrice = 0;
        this.temporaryModalItinerary.eveningActivityPaidAmount = 0;
      }
      this.temporaryModalItinerary.resources.forEach(location => {
        if (location[this.activityTypeRecommended]?.length > 0) {
          location[this.activityTypeRecommended].forEach(resource => {
            if (resource.items?.length > 0) {
              resource.items.forEach(item => {
                if (item.items?.length > 0) {
                  item.items.forEach(ticket => {
                    if (this.dayActivities) {
                      // total day price
                      this.temporaryModalItinerary.dayActivityPrice += ticket.price * ticket.quantity;
                      // total day paid amount
                      this.temporaryModalItinerary.dayActivityPaidAmount += this.getTicketDepositPrice(ticket);
                    } else {
                      // total evening price
                      this.temporaryModalItinerary.eveningActivityPrice += ticket.price * ticket.quantity;
                      // total evening paid amount
                      this.temporaryModalItinerary.eveningActivityPaidAmount += this.getTicketDepositPrice(ticket);
                    }
                  });
                }
              });
            }
          });
        }
      });
      console.log('PAID AMOUNT AFTER', this.temporaryModalItinerary.dayActivityPaidAmount);
      console.log('after', structuredClone(this.temporaryModalItinerary));
      console.log('after', structuredClone(this.temporarySelectedResources));
    });
  }
  getTicketDepositPrice(ticket) {
    if (!ticket.bookingPolicies) return 0;
    if (ticket.bookingPolicies?.advanceFullPayment) {
      return ticket.price * ticket.quantity;
    } else if (ticket.bookingPolicies?.advancePartialPaymentPercentage !== 0) {
      return ticket.price * ticket.quantity * ticket.bookingPolicies?.advancePartialPaymentPercentage / 100;
    } else if (ticket.bookingPolicies?.depositRequiredAmount !== 0) {
      return ticket.bookingPolicies?.depositRequiredAmount;
    } else if (ticket.bookingPolicies?.depositRequiredPercentage !== 0) {
      return ticket.price * ticket.quantity * ticket.bookingPolicies?.depositRequiredPercentage / 100;
    } else {
      return 0;
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_10__.MatLegacyDialog
  }, {
    type: _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__.ItinerariesStore
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_3__.ResourceFilterService
  }];
  static #_2 = this.propDecorators = {
    dayActivities: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    itineraryChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }]
  };
};
ActivitiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-activities',
  template: _activities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
  styles: [(_activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ActivitiesComponent);


/***/ }),

/***/ 9464:
/*!************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/eat-and-drink/eat-and-drink.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EatAndDrinkComponent": () => (/* binding */ EatAndDrinkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _eat_and_drink_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eat-and-drink.component.html?ngResource */ 10429);
/* harmony import */ var _eat_and_drink_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eat-and-drink.component.scss?ngResource */ 77102);
/* harmony import */ var _eat_and_drink_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eat_and_drink_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 58446);
/* harmony import */ var _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/itineraries.store */ 18645);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/_services/resource-filter.service */ 41682);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ 56908);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _domain_listing_view_simple_resource_view_simple_resource_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../domain-listing/view-simple-resource/view-simple-resource.component */ 40506);











let EatAndDrinkComponent = class EatAndDrinkComponent {
  constructor(modalService, itinerariesStore, resourceFilterService) {
    this.modalService = modalService;
    this.itinerariesStore = itinerariesStore;
    this.resourceFilterService = resourceFilterService;
    this.itineraryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.newItinerary = null;
    this.temporaryModalItinerary = null;
    this.itineraryExtraInfo = null;
    // eat and drinks specific data
    this.activeaMealId = 'Breakfast';
    this.eatAndDrinksResources = [];
    // indexul acestui array reprezinta locatia, iar obiectul reprezinta perioada in care sta cazat in locatia respectiva
    this.dateLimitsByDestination = [];
    // array de date-uri
    this.days = [];
    this.daysDictionary = {};
    this.selectedResources = [];
    this.temporarySelectedResources = [];
    // key - resource type id; value - resource type name
    this.resourceTypeDictionary = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  ngOnInit() {
    this.getItineraryData();
    this.getResourceTypeDictionary();
  }
  getResourceTypeDictionary() {
    this.itinerariesStore.getResourceTypeDictionary().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceTypeDictionary = res[0];
      }
    });
  }
  getItineraryData() {
    this.newItinerary = this.itinerariesStore.getRecommendedItinerary();
    this.temporaryModalItinerary = structuredClone(this.newItinerary);
    this.itineraryExtraInfo = this.itinerariesStore.getItineraryExtraInfo();
    this.createSelectedResources();
    this.newItinerary.resources.forEach(location => {
      this.dateLimitsByDestination.push({
        startDate: location.startDate,
        endDate: location.endDate
      });
    });
    this.dateLimitsByDestination.forEach(dateLimit => {
      const startDate = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(dateLimit.startDate);
      const endDate = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(dateLimit.endDate);
      const diffInDays = endDate.diff(startDate, 'days');
      if (diffInDays === 1) {
        this.days.push(startDate.format('YYYY-MM-DD'));
      } else if (diffInDays > 1) {
        for (let i = 0; i < diffInDays; i++) {
          const newDay = startDate.clone().add(i, 'days').format('YYYY-MM-DD');
          this.days.push(newDay);
        }
      }
    });
    this.days.forEach((day, index) => {
      this.daysDictionary = {
        ...this.daysDictionary,
        [day]: index
      };
    });
    this.itinerariesStore.destinationIndex$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(newIndex => this.destinationIndex = newIndex);
    this.itinerariesStore.dayState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(newDay => this.dayState = newDay);
  }
  setDayState(day) {
    if (this.dateLimitsByDestination.length === 1) {
      this.itinerariesStore.setDayState(day);
      return;
    }
    for (let i = 0; i < this.dateLimitsByDestination.length; i++) {
      const startDate = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(this.dateLimitsByDestination[i].startDate);
      const endDate = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(this.dateLimitsByDestination[i].endDate);
      const currentDay = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(day);
      if (currentDay.isBetween(startDate, endDate, undefined, '[)')) {
        this.itinerariesStore.setDestinationIndex(i);
        this.itinerariesStore.setDayState(currentDay.format('YYYY-MM-DD'));
        break;
      }
    }
  }
  openModal(templateRef) {
    this.temporaryModalItinerary = structuredClone(this.newItinerary);
    this.createSelectedResources();
    this.getResourcesForModal();
    // active tabs
    const resourcesModal = this.modalService.open(templateRef, {
      panelClass: 'custom-modal'
    });
    resourcesModal.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(newItineraryData => {
      if (newItineraryData) {
        this.itineraryChanged.emit(newItineraryData);
        this.newItinerary = structuredClone(this.temporaryModalItinerary);
        this.selectedResources = structuredClone(this.temporarySelectedResources);
      }
    });
  }
  createSelectedResources() {
    this.newItinerary.resources.forEach((location, locationIndex) => {
      // create the selected resources array
      if (location.eatAndDrinkResourcesRecommended?.length > 0) {
        location.eatAndDrinkResourcesRecommended.forEach(group => {
          if (group?.dates?.length > 0) {
            group.dates.forEach(date => {
              if (date.hour === this.itineraryExtraInfo.breakfastHour) {
                this.selectedResources[locationIndex] = {
                  ...this.selectedResources[locationIndex],
                  [date.date]: {
                    ...this.selectedResources[locationIndex]?.[date.date],
                    ['Breakfast']: group.resourceId
                  }
                };
              } else if (date.hour === this.itineraryExtraInfo.lunchHour) {
                this.selectedResources[locationIndex] = {
                  ...this.selectedResources[locationIndex],
                  [date.date]: {
                    ...this.selectedResources[locationIndex]?.[date.date],
                    ['Lunch']: group.resourceId
                  }
                };
              } else if (date.hour === this.itineraryExtraInfo.dinnerHour) {
                this.selectedResources[locationIndex] = {
                  ...this.selectedResources[locationIndex],
                  [date.date]: {
                    ...this.selectedResources[locationIndex]?.[date.date],
                    ['Dinner']: group.resourceId
                  }
                };
              }
            });
          }
        });
      }
    });
    this.temporarySelectedResources = structuredClone(this.selectedResources);
    console.log('RESOURCES BY MOMENT', this.selectedResources);
  }
  getResourcesForModal() {
    if (this.eatAndDrinksResources?.[this.destinationIndex]?.length > 0) return;
    this.newItinerary.resources[this.destinationIndex].eatAndDrinksResource.forEach((group, groupIndex) => {
      group.dayMoments.forEach(dayMoment => {
        if (dayMoment.resources?.length > 0) {
          this.itinerariesStore.getResourcesByIds(dayMoment.resources).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(resources => {
            const modifiedObj = {
              dayMoment: dayMoment.dayMoment,
              resources: resources
            };
            return modifiedObj;
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
            next: res => {
              console.log(res);
              if (!this.eatAndDrinksResources[this.destinationIndex]) this.eatAndDrinksResources[this.destinationIndex] = [];
              if (!this.eatAndDrinksResources[this.destinationIndex][groupIndex]) {
                this.eatAndDrinksResources[this.destinationIndex][groupIndex] = {
                  day: group.day,
                  dayMoments: [{
                    dayMoment: 'Breakfast',
                    resources: []
                  }, {
                    dayMoment: 'Lunch',
                    resources: []
                  }, {
                    dayMoment: 'Dinner',
                    resources: []
                  }]
                };
              }
              if (res.dayMoment === 'Breakfast') {
                this.eatAndDrinksResources[this.destinationIndex][groupIndex].dayMoments[0].resources = res.resources;
              } else if (res.dayMoment === 'Lunch') {
                this.eatAndDrinksResources[this.destinationIndex][groupIndex].dayMoments[1].resources = res.resources;
              } else if (res.dayMoment === 'Dinner') {
                this.eatAndDrinksResources[this.destinationIndex][groupIndex].dayMoments[2].resources = res.resources;
              }
              console.log(this.eatAndDrinksResources);
            }
          });
        }
      });
    });
  }
  openResourceModal(resource, date, momentOfDay) {
    console.log('resursa la trimitere', resource);
    console.log("DATE SI MOMENT OF DAY", date, momentOfDay);
    let hour;
    switch (momentOfDay) {
      case "Breakfast":
        hour = this.itineraryExtraInfo.breakfastHour;
        break;
      case "Lunch":
        hour = this.itineraryExtraInfo.lunchHour;
        break;
      case "Dinner":
        hour = this.itineraryExtraInfo.dinnerHour;
        break;
    }
    console.log('DATA SI ORA TRIMISA', moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(date + ' ' + hour));
    this.resourceFilterService.initServiceStates();
    this.itinerariesStore.setTemporaryData(this.temporaryModalItinerary);
    this.resourceFilterService.setResourceFromItinerary(resource);
    this.resourceFilterService.updateSavedFilters({
      dateAsDay: null,
      dateAsHour: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(date + ' ' + hour),
      startDate: this.itineraryExtraInfo.itineraryType === 'road-trip' ? this.itineraryExtraInfo.destinations[this.destinationIndex].startDate : this.itineraryExtraInfo.startDate,
      endDate: this.itineraryExtraInfo.itineraryType === 'road-trip' ? this.itineraryExtraInfo.destinations[this.destinationIndex].endDate : this.itineraryExtraInfo.endDate,
      startHour: null,
      endHour: null,
      adultsNumber: this.itineraryExtraInfo.adultsNumber,
      childrenNumber: this.itineraryExtraInfo.childrenNumber,
      roomsNumber: null
    });
    const resourceModal = this.modalService.open(_domain_listing_view_simple_resource_view_simple_resource_component__WEBPACK_IMPORTED_MODULE_5__.ViewSimpleResourceComponent, {
      width: '90%',
      autoFocus: false,
      maxHeight: '90vh'
    });
    resourceModal.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(deposit => {
      if (!deposit) return;
      let previousResourceId = null;
      const newResourceId = resource.id;
      // modificam selected resources
      if (this.temporarySelectedResources[this.destinationIndex]?.[date]?.[momentOfDay]) {
        previousResourceId = this.temporarySelectedResources[this.destinationIndex]?.[date]?.[momentOfDay];
        this.temporarySelectedResources[this.destinationIndex][date][momentOfDay] = resource.id;
      } else {
        this.temporarySelectedResources[this.destinationIndex] = {
          ...this.temporarySelectedResources[this.destinationIndex],
          [date]: {
            ...this.temporarySelectedResources[this.destinationIndex]?.[date],
            [momentOfDay]: resource.id
          }
        };
      }
      console.log(this.temporarySelectedResources);
      // modificam temporary itinerary
      if (previousResourceId) {
        if (previousResourceId !== newResourceId) {
          const groups = this.temporaryModalItinerary.resources[this.destinationIndex].eatAndDrinkResourcesRecommended;
          if (groups.length === 0) return;
          let newResourceFound = false;
          // iteram de la final spre inceput, ca sa nu ne afecteze splice-ul
          for (let i = groups.length - 1; i >= 0; i--) {
            // adaugam data/ora pt resursa nou selectata
            if (groups[i].resourceId === newResourceId) {
              newResourceFound = true;
              const newResource = groups[i];
              newResource.dates.push({
                date: date,
                hour: hour
              });
            }
            // stergem resursa veche sau doar data/ora dupa caz
            if (groups[i].resourceId === previousResourceId) {
              const previousResource = groups[i];
              // stergem resursa
              if (previousResource.dates?.length === 1) {
                groups.splice(i, 1);
              }
              // stergem data/ora
              else if (previousResource.dates?.length > 1) {
                for (let dateIndex = 0; dateIndex < previousResource.dates.length; dateIndex++) {
                  const dateObject = previousResource.dates[dateIndex];
                  if (dateObject.date === date && dateObject.hour === hour) {
                    previousResource.dates.splice(dateIndex, 1);
                  }
                }
              }
            }
          }
          // daca resursa nu exista inainte in arrayul de recomandate
          if (!newResourceFound) {
            groups.push({
              dates: [{
                date: date,
                hour: hour
              }],
              depositAmount: deposit,
              resourceId: resource.id,
              resourceName: resource.title,
              resourceTypeName: this.resourceTypeDictionary[resource.resourceTypeId]
            });
          }
          console.log("GROUPS", groups);
          console.log("ITINERARY", this.temporaryModalItinerary);
          console.log("SELECTED RESOURCES", this.selectedResources);
        }
      } else {
        let groups = this.temporaryModalItinerary.resources[this.destinationIndex].eatAndDrinkResourcesRecommended;
        if (!groups || groups?.length === 0) {
          groups = [];
        }
        this.temporaryModalItinerary.resources[this.destinationIndex].eatAndDrinkResourcesRecommended = [...groups, {
          dates: [{
            date: date,
            hour: hour
          }],
          depositAmount: deposit,
          resourceId: resource.id,
          resourceName: resource.title,
          resourceTypeName: this.resourceTypeDictionary[resource.resourceTypeId]
        }];
        console.log('temporary itinerary', structuredClone(this.temporaryModalItinerary));
        console.log(groups);
      }
      // aici trebuie sa recalculam totalul pt eat and drinks price
      this.temporaryModalItinerary.eatAndDrinkPrice = 0;
      this.temporaryModalItinerary.eatAndDrinkPaidAmount = 0;
      this.temporaryModalItinerary.resources.forEach(location => {
        /*this.temporaryModalItinerary.accommodationPrice += location.accommodationResourceRecommended.items.reduce((newPrice, room) =>
                newPrice + room.pricePerItem * room.quantity
            , 0);*/
        if (location.eatAndDrinkResourcesRecommended?.length > 0) {
          location.eatAndDrinkResourcesRecommended.forEach(item => {
            // pret total
            this.temporaryModalItinerary.eatAndDrinkPrice += item.depositAmount * item.dates?.length;
            // pret in functie de booking policies
            this.temporaryModalItinerary.eatAndDrinkPaidAmount += item.depositAmount * item.dates?.length;
          });
        }
      });
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_10__.MatLegacyDialog
  }, {
    type: _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__.ItinerariesStore
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_3__.ResourceFilterService
  }];
  static #_2 = this.propDecorators = {
    itineraryChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }]
  };
};
EatAndDrinkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-eat-and-drink',
  template: _eat_and_drink_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_eat_and_drink_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EatAndDrinkComponent);


/***/ }),

/***/ 66885:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/evening-activities/evening-activities.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EveningActivitiesComponent": () => (/* binding */ EveningActivitiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _evening_activities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evening-activities.component.html?ngResource */ 73187);
/* harmony import */ var _evening_activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evening-activities.component.scss?ngResource */ 15803);
/* harmony import */ var _evening_activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_evening_activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





let EveningActivitiesComponent = class EveningActivitiesComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.active = 1;
    this.activeTypeId = 1;
    this.resDemo = [{
      id: '1',
      title: 'Le Fouget Restaurant',
      proReviewsPercentage: 100,
      address: 'Champs Elysees Boulevard',
      city: 'Paris',
      country: 'France',
      image: '/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg'
    }, {
      id: '2',
      title: 'George V Caffe',
      proReviewsPercentage: 90,
      address: 'Champs Elysees Boulevard',
      city: 'Paris',
      country: 'France',
      image: '/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg'
    }];
  }
  openModal(templateRef) {
    console.log('modal opened');
    this.modalService.open(templateRef, {
      panelClass: 'custom-modal'
    });
  }
  checkRes(itemId) {
    console.log('check item');
  }
  closeModal() {
    this.modalService.closeAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog
  }];
};
EveningActivitiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-evening-activities',
  template: _evening_activities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
  styles: [(_evening_activities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EveningActivitiesComponent);


/***/ }),

/***/ 77000:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/transport/transport.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportComponent": () => (/* binding */ TransportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transport_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transport.component.html?ngResource */ 67219);
/* harmony import */ var _transport_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transport.component.scss?ngResource */ 53073);
/* harmony import */ var _transport_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_transport_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TransportComponent = class TransportComponent {};
TransportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-transport',
  template: _transport_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_transport_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TransportComponent);


/***/ }),

/***/ 16347:
/*!****************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/city-select/city-select.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitySelectComponent": () => (/* binding */ CitySelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _city_select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city-select.component.html?ngResource */ 66551);
/* harmony import */ var _city_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city-select.component.scss?ngResource */ 13646);
/* harmony import */ var _city_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_city_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_trips_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/trips.store */ 59705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);











let CitySelectComponent = class CitySelectComponent {
  constructor(tripsStore, route, router, fb, toastService, translate) {
    this.tripsStore = tripsStore;
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.toastService = toastService;
    this.translate = translate;
    this.trips = null;
    this.filteredTripsByCityId = null;
    this.selectedTrip = null;
    this.cities = null;
    this.selectedCity = null;
    this.country = null;
    this.guestsForm = this.fb.group({
      adultsNumber: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1)],
      childrenNumber: [0]
    });
    this.confirmBtnClicked = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.getLocationListByCountryId();
  }
  getLocationListByCountryId() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(params => {
      if (params.has('countryId')) {
        this.countryId = params.get('countryId');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([this.tripsStore.getLocationListByCountryId(this.countryId), this.tripsStore.getCountryById(this.countryId)]);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) return;
        [this.cities, this.country] = res;
        if (this.cities?.length > 0) {
          this.selectedCity = this.cities[0];
          this.getTrips();
        }
      }
    });
  }
  getTrips() {
    this.tripsStore.listTripsFiltered(0, -1, null, null, {
      countryId: this.countryId,
      status: 'active'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.trips = [...res.content];
        if (this.cities?.length > 0) {
          this.filterTripsByCityId(this.cities[0].id);
        }
      }
    });
  }
  filterTripsByCityId(cityId) {
    this.selectedTrip = null;
    this.guestsForm.setValue({
      adultsNumber: 0,
      childrenNumber: 0
    });
    this.filteredTripsByCityId = this.trips.filter(trip => trip.locationId === cityId);
  }
  selectTrip(trip) {
    this.guestsForm.setValue({
      adultsNumber: 0,
      childrenNumber: 0
    });
    if (this.selectedTrip && this.selectedTrip.name === trip.name) {
      this.selectedTrip = null;
      return;
    }
    this.selectedTrip = {
      ...trip
    };
  }
  decreaseNrGuests(formControlName) {
    let currentValue = this.guestsForm.get(formControlName).value;
    if (currentValue === 0) {
      return;
    }
    this.guestsForm.get(formControlName).patchValue(--currentValue);
  }
  increaseNrGuests(formControlName) {
    let currentValue = this.guestsForm.get(formControlName).value;
    this.guestsForm.get(formControlName).patchValue(++currentValue);
  }
  confirmSelection() {
    this.confirmBtnClicked = true;
    if (!this.guestsForm.valid) {
      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Select at least one adult", "error");
      return;
    }
    this.tripsStore.setTripState(this.selectedTrip);
    this.tripsStore.setGuestsState(this.guestsForm.value);
    void this.router.navigate(['trip', this.selectedTrip.id], {
      relativeTo: this.route
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_trips_store__WEBPACK_IMPORTED_MODULE_2__.TripsStore
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
  }];
};
CitySelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-city-select',
  template: _city_select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_city_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CitySelectComponent);


/***/ }),

/***/ 82586:
/*!**************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/client-trips-itineraries.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientTripsItinerariesModule": () => (/* binding */ ClientTripsItinerariesModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _country_select_country_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-select/country-select.component */ 11460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _standalone_components_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../standalone-components/category-card/category-card.component */ 56386);
/* harmony import */ var _city_select_city_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./city-select/city-select.component */ 16347);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _trip_view_trip_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-view/trip-view.component */ 37337);
/* harmony import */ var _standalone_components_images_gallery_images_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../standalone-components/images-gallery/images-gallery.component */ 99781);
/* harmony import */ var _standalone_components_trip_room_card_trip_room_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../standalone-components/trip-room-card/trip-room-card.component */ 17091);
/* harmony import */ var _shared_pipes_cheapest_room_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/_pipes/cheapest-room.pipe */ 53499);
/* harmony import */ var _standalone_components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../standalone-components/checkout/checkout.component */ 13311);
/* harmony import */ var _standalone_components_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../standalone-components/booking-confirmation/booking-confirmation.component */ 33741);
/* harmony import */ var _standalone_components_static_category_listing_static_category_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../standalone-components/static-category-listing/static-category-listing.component */ 91887);
/* harmony import */ var _itineraries_theme_itineraries_theme_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./itineraries-theme/itineraries-theme.component */ 50735);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material-moment-adapter */ 77118);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 20820);
/* harmony import */ var _recommended_itineraries_recommended_itineraries_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recommended-itineraries/recommended-itineraries.component */ 70248);
/* harmony import */ var _edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-itinerary/edit-itinerary.component */ 24083);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _components_itinerary_steps_eat_and_drink_eat_and_drink_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/itinerary-steps/eat-and-drink/eat-and-drink.component */ 9464);
/* harmony import */ var _components_itinerary_steps_transport_transport_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_components/itinerary-steps/transport/transport.component */ 77000);
/* harmony import */ var _components_itinerary_steps_accomodation_accomodation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_components/itinerary-steps/accomodation/accomodation.component */ 39026);
/* harmony import */ var _components_itinerary_steps_day_activities_activities_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_components/itinerary-steps/day-activities/activities.component */ 77972);
/* harmony import */ var _components_itinerary_steps_evening_activities_evening_activities_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_components/itinerary-steps/evening-activities/evening-activities.component */ 66885);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 58446);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 47578);



































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
const routes = [{
  path: '',
  data: {
    module: 'trips'
  },
  component: _standalone_components_static_category_listing_static_category_listing_component__WEBPACK_IMPORTED_MODULE_9__.StaticCategoryListingComponent,
  pathMatch: "full"
},
// START: HOLIDAY OFFERS
{
  path: 'holiday-offers',
  redirectTo: 'holiday-offers/country',
  pathMatch: "full"
}, {
  path: 'holiday-offers/country',
  component: _country_select_country_select_component__WEBPACK_IMPORTED_MODULE_0__.CountrySelectComponent,
  pathMatch: "full"
}, {
  path: 'holiday-offers/country/:countryId',
  component: _city_select_city_select_component__WEBPACK_IMPORTED_MODULE_2__.CitySelectComponent,
  pathMatch: "full"
}, {
  path: 'holiday-offers/country/:countryId/trip',
  redirectTo: 'country/:countryId',
  pathMatch: "full"
}, {
  path: 'holiday-offers/country/:countryId/trip/:tripId',
  component: _trip_view_trip_view_component__WEBPACK_IMPORTED_MODULE_3__.TripViewComponent,
  pathMatch: "full"
}, {
  path: 'holiday-offers/country/:countryId/trip/:tripId/checkout',
  component: _standalone_components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__.CheckoutComponent,
  pathMatch: "full"
}, {
  path: 'holiday-offers/country/:countryId/trip/:tripId/booking-confirmation',
  component: _standalone_components_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_8__.BookingConfirmationComponent,
  pathMatch: "full"
},
// END: HOLIDAY OFFERS
// START: ITINERARIES-CONFIG
{
  path: 'itineraries-config',
  component: _itineraries_theme_itineraries_theme_component__WEBPACK_IMPORTED_MODULE_10__.ItinerariesThemeComponent,
  pathMatch: 'full',
  data: {
    itineraryType: 'manual'
  }
}, {
  path: 'itineraries-config/itinerary',
  component: _edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_12__.EditItineraryComponent,
  pathMatch: 'full'
}, {
  path: 'itineraries-config/itinerary/checkout',
  component: _standalone_components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__.CheckoutComponent,
  pathMatch: 'full'
},
// END: ITINERARIES-CONFIG
// START: AI-ITINERARIES
{
  path: 'itineraries-theme',
  component: _itineraries_theme_itineraries_theme_component__WEBPACK_IMPORTED_MODULE_10__.ItinerariesThemeComponent,
  pathMatch: "full"
}, {
  path: 'itineraries-theme/road-trip',
  component: _edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_12__.EditItineraryComponent,
  pathMatch: "full"
}, {
  path: 'itineraries-theme/road-trip/checkout',
  component: _standalone_components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__.CheckoutComponent,
  pathMatch: 'full'
}, {
  path: 'itineraries-theme/recommended',
  component: _recommended_itineraries_recommended_itineraries_component__WEBPACK_IMPORTED_MODULE_11__.RecommendedItinerariesComponent,
  pathMatch: "full"
}, {
  path: 'itineraries-theme/recommended/itinerary',
  component: _edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_12__.EditItineraryComponent,
  pathMatch: "full"
}, {
  path: 'itineraries-theme/recommended/itinerary/checkout',
  component: _standalone_components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__.CheckoutComponent,
  pathMatch: 'full'
}, {
  path: 'itineraries-theme/recommended/itinerary/transport',
  component: _components_itinerary_steps_transport_transport_component__WEBPACK_IMPORTED_MODULE_14__.TransportComponent,
  pathMatch: "full"
}, {
  path: 'itineraries-theme/recommended/itinerary/accom',
  component: _components_itinerary_steps_accomodation_accomodation_component__WEBPACK_IMPORTED_MODULE_15__.AccomodationComponent,
  pathMatch: "full"
}, {
  path: 'itineraries-theme/recommended/itinerary/eat',
  component: _components_itinerary_steps_eat_and_drink_eat_and_drink_component__WEBPACK_IMPORTED_MODULE_13__.EatAndDrinkComponent,
  pathMatch: "full"
}, {
  path: 'itineraries-theme/recommended/itinerary/day',
  component: _components_itinerary_steps_day_activities_activities_component__WEBPACK_IMPORTED_MODULE_16__.ActivitiesComponent,
  pathMatch: "full"
}, {
  path: 'itineraries-theme/recommended/itinerary/evening',
  component: _components_itinerary_steps_evening_activities_evening_activities_component__WEBPACK_IMPORTED_MODULE_17__.EveningActivitiesComponent,
  pathMatch: "full"
}
// END: AI-ITINERARIES
];

let ClientTripsItinerariesModule = class ClientTripsItinerariesModule {};
ClientTripsItinerariesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.NgModule)({
  declarations: [_country_select_country_select_component__WEBPACK_IMPORTED_MODULE_0__.CountrySelectComponent, _city_select_city_select_component__WEBPACK_IMPORTED_MODULE_2__.CitySelectComponent, _trip_view_trip_view_component__WEBPACK_IMPORTED_MODULE_3__.TripViewComponent, _itineraries_theme_itineraries_theme_component__WEBPACK_IMPORTED_MODULE_10__.ItinerariesThemeComponent, _recommended_itineraries_recommended_itineraries_component__WEBPACK_IMPORTED_MODULE_11__.RecommendedItinerariesComponent, _edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_12__.EditItineraryComponent, _components_itinerary_steps_eat_and_drink_eat_and_drink_component__WEBPACK_IMPORTED_MODULE_13__.EatAndDrinkComponent, _components_itinerary_steps_transport_transport_component__WEBPACK_IMPORTED_MODULE_14__.TransportComponent, _components_itinerary_steps_accomodation_accomodation_component__WEBPACK_IMPORTED_MODULE_15__.AccomodationComponent, _components_itinerary_steps_day_activities_activities_component__WEBPACK_IMPORTED_MODULE_16__.ActivitiesComponent, _components_itinerary_steps_evening_activities_evening_activities_component__WEBPACK_IMPORTED_MODULE_17__.EveningActivitiesComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forChild(routes), _standalone_components_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_1__.CategoryCardComponent, _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbPanelHeader, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbPanelToggle, _standalone_components_images_gallery_images_gallery_component__WEBPACK_IMPORTED_MODULE_4__.ImagesGalleryComponent, _standalone_components_trip_room_card_trip_room_card_component__WEBPACK_IMPORTED_MODULE_5__.TripRoomCardComponent, _shared_pipes_cheapest_room_pipe__WEBPACK_IMPORTED_MODULE_6__.CheapestRoomPipe, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_27__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_28__.MatLegacyInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_29__.MatMomentDateModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_30__.NgxMatTimepickerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_32__.MatLegacyDialogModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_33__.MatLegacyProgressSpinnerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavModule],
  providers: [{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MAT_DATE_FORMATS,
    useValue: MY_FORMATS
  }]
})], ClientTripsItinerariesModule);


/***/ }),

/***/ 11460:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/country-select/country-select.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountrySelectComponent": () => (/* binding */ CountrySelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _country_select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-select.component.html?ngResource */ 26548);
/* harmony import */ var _country_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-select.component.scss?ngResource */ 68488);
/* harmony import */ var _country_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_country_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _services_trips_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/trips.store */ 59705);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/system-settings.service */ 42912);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);










let CountrySelectComponent = class CountrySelectComponent {
  constructor(tripsStore, systemSettingsService, router, route, translate) {
    this.tripsStore = tripsStore;
    this.systemSettingsService = systemSettingsService;
    this.router = router;
    this.route = route;
    this.translate = translate;
    this.systemSetting = null;
    this.countries = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.getCountryList();
    this.getSystemSetting();
  }
  getCountryList() {
    this.tripsStore.getCountryList().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.countries = [...res];
      }
    });
  }
  getSystemSetting() {
    this.systemSettingsService.getSystemSetting().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.systemSetting = {
          ...res
        };
      }
    });
  }
  selectCountry(country) {
    this.tripsStore.setCountryState(country);
    void this.router.navigate([country.id], {
      relativeTo: this.route
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_trips_store__WEBPACK_IMPORTED_MODULE_2__.TripsStore
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_3__.SystemSettingsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
  }];
};
CountrySelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-country-select',
  template: _country_select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_country_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CountrySelectComponent);


/***/ }),

/***/ 24083:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/edit-itinerary/edit-itinerary.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditItineraryComponent": () => (/* binding */ EditItineraryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_itinerary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-itinerary.component.html?ngResource */ 96346);
/* harmony import */ var _edit_itinerary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-itinerary.component.scss?ngResource */ 33545);
/* harmony import */ var _edit_itinerary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_edit_itinerary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/itineraries.store */ 18645);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);











let EditItineraryComponent = class EditItineraryComponent {
  constructor(itinerariesStore, route, router, toastService, translate) {
    this.itinerariesStore = itinerariesStore;
    this.route = route;
    this.router = router;
    this.toastService = toastService;
    this.translate = translate;
    this.itineraryData = null;
    this.itineraryExtraInfo = null;
    this.newItinerary = null;
    this.itineraryName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
    this.itineraryTotalPrice = 0;
    this.itineraryPaidAmount = 0;
    this.confirmBtnDisabled = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.checkForStoreData();
  }
  checkForStoreData() {
    this.itineraryExtraInfo = this.itinerariesStore.getItineraryExtraInfo();
    if (!this.itineraryExtraInfo) {
      void this.router.navigate(['client', 'domain', this.route.snapshot.paramMap.get('domainId'), 'trips']);
    } else {
      if (this.itineraryExtraInfo.itineraryType === 'ai') {
        this.getItineraryData();
      } else if (this.itineraryExtraInfo.itineraryType === 'road-trip') {
        this.getRoadTripData();
      } else if (this.itineraryExtraInfo.itineraryType === 'manual') {
        this.getEmptyItineraryData();
      }
    }
  }
  getItineraryData() {
    this.itinerariesStore.getItineraryWithRecommendations().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.itineraryData = res;
        this.newItinerary = structuredClone(this.itineraryData);
        this.calculateTotalPrice();
        console.log(this.itineraryData);
      }
    });
  }
  getRoadTripData() {
    this.itinerariesStore.getRoadTripWithRecommendations().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.itineraryData = res;
        this.newItinerary = structuredClone(this.itineraryData);
        this.calculateTotalPrice();
        console.log(this.itineraryData);
      }
    });
  }
  getEmptyItineraryData() {
    this.itinerariesStore.getEmptyItinerary().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.itineraryData = res;
        this.newItinerary = structuredClone(this.itineraryData);
        this.calculateTotalPrice();
        console.log(this.itineraryData);
      }
    });
  }
  calculateTotalPrice() {
    this.itineraryTotalPrice = 0;
    this.itineraryTotalPrice += this.newItinerary.transportPrice + this.newItinerary.accommodationPrice + this.newItinerary.eatAndDrinkPrice + this.newItinerary.dayActivityPrice + this.newItinerary.eveningActivityPrice;
    this.itineraryPaidAmount = 0;
    this.itineraryPaidAmount += this.newItinerary.transportPaidAmount + this.newItinerary.accommodationPaidAmount + this.newItinerary.eatAndDrinkPaidAmount + this.newItinerary.dayActivityPaidAmount + this.newItinerary.eveningActivityPaidAmount;
  }
  handleItineraryChanges(event, step) {
    switch (step) {
      case "accommodation":
        {
          this.newItinerary = {
            ...this.newItinerary,
            accommodationPaidAmount: event.accommodationPaidAmount,
            accommodationPrice: event.accommodationPrice,
            resources: this.newItinerary.resources.map((location, locationIndex) => {
              return {
                ...location,
                accommodationResourceRecommended: event.resources[locationIndex].accommodationResourceRecommended
              };
            })
          };
          break;
        }
      case "eatAndDrinks":
        {
          this.newItinerary = {
            ...this.newItinerary,
            eatAndDrinkPaidAmount: event.eatAndDrinkPaidAmount,
            eatAndDrinkPrice: event.eatAndDrinkPrice,
            resources: this.newItinerary.resources.map((location, locationIndex) => {
              return {
                ...location,
                eatAndDrinkResourcesRecommended: event.resources[locationIndex].eatAndDrinkResourcesRecommended
              };
            })
          };
          break;
        }
      case "dayActivities":
        {
          this.newItinerary = {
            ...this.newItinerary,
            dayActivityPaidAmount: event.dayActivityPaidAmount,
            dayActivityPrice: event.dayActivityPrice,
            resources: this.newItinerary.resources.map((location, locationIndex) => {
              return {
                ...location,
                dayActivityResourcesRecommended: event.resources[locationIndex].dayActivityResourcesRecommended
              };
            })
          };
          break;
        }
      case "eveningActivities":
        {
          this.newItinerary = {
            ...this.newItinerary,
            eveningActivityPaidAmount: event.eveningActivityPaidAmount,
            eveningActivityPrice: event.eveningActivityPrice,
            resources: this.newItinerary.resources.map((location, locationIndex) => {
              return {
                ...location,
                eveningActivityResourcesRecommended: event.resources[locationIndex].eveningActivityResourcesRecommended
              };
            })
          };
          break;
        }
    }
    this.calculateTotalPrice();
    console.log(this.newItinerary);
  }
  confirmItinerary() {
    this.confirmBtnDisabled = true;
    this.itineraryName.markAllAsTouched();
    if (this.itineraryExtraInfo?.itineraryType !== 'ai') {
      if (this.itineraryName.invalid) {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("ERROR.REQUIRED-ALL"), "error");
        this.confirmBtnDisabled = false;
        return;
      }
      this.newItinerary.name = this.itineraryName.value;
    }
    this.itinerariesStore.createItinerary(this.newItinerary).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (res.success) {
          this.itinerariesStore.setNewItinerary({
            ...this.newItinerary,
            itineraryId: res.reason
          });
          void this.router.navigate(['checkout'], {
            relativeTo: this.route
          });
        }
      },
      error: () => {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__.ItinerariesStore
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }];
};
EditItineraryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-edit-itinerary',
  template: _edit_itinerary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_edit_itinerary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditItineraryComponent);


/***/ }),

/***/ 50735:
/*!****************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/itineraries-theme/itineraries-theme.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItinerariesThemeComponent": () => (/* binding */ ItinerariesThemeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _itineraries_theme_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itineraries-theme.component.html?ngResource */ 63895);
/* harmony import */ var _itineraries_theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itineraries-theme.component.scss?ngResource */ 89016);
/* harmony import */ var _itineraries_theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_itineraries_theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 89196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/itineraries.store */ 18645);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/moment */ 56908);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/resource-filter.service */ 41682);













let ItinerariesThemeComponent = class ItinerariesThemeComponent {
  constructor(itinerariesStore, fb, toastService, translate, router, route, resourceFilterService) {
    this.itinerariesStore = itinerariesStore;
    this.fb = fb;
    this.toastService = toastService;
    this.translate = translate;
    this.router = router;
    this.route = route;
    this.resourceFilterService = resourceFilterService;
    this.isManualItinerary = false;
    this.isRoadTrip = false;
    this.currentDay = moment_moment__WEBPACK_IMPORTED_MODULE_3__();
    this.nextDay = this.currentDay.clone().add(1, 'days');
    /*currentDay = moment('2023-06-15');
    nextDay = moment('2023-06-17');*/
    this.extraInfo = this.fb.nonNullable.group({
      startDate: [this.currentDay, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      endDate: [this.nextDay, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      adultsNumber: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      childrenNumber: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)],
      roomsNumber: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)],
      breakfastHour: ['09:00', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      lunchHour: ['13:00', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      dinnerHour: ['19:00', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      destinations: this.fb.nonNullable.array([this.fb.nonNullable.group({
        startDate: [this.currentDay, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        endDate: [this.nextDay, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        location: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }, {
        validators: this.startEndDateValidator
      })])
    }, {
      validators: this.startEndDateValidator
    });
    this.formBtnClicked = false;
    this.selectedJourneyTheme = null;
    this.selectedDestinationType = null;
    this.selectedJourneyType = null;
    this.recommendedCities = null;
    this.cityToSearch = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  ngOnInit() {
    this.itinerariesStore.resetStoreStates();
    this.checkIfManualOrAI();
    this.getInfoForItineraryGeneration();
  }
  checkIfManualOrAI() {
    if (this.route.snapshot?.data?.itineraryType === 'manual') {
      this.isManualItinerary = true;
    }
  }
  getInfoForItineraryGeneration() {
    const systemSettings$ = this.itinerariesStore.getSystemSetting().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.shareReplay)(1));
    const journeyThemes$ = systemSettings$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(systemSettings => this.itinerariesStore.getAttributesByCategoryId(systemSettings.journeyThemeCategoryId, 'roadTrip', 'asc')), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)([]));
    const typesOfDestination$ = systemSettings$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(systemSettings => this.itinerariesStore.getAttributesByCategoryId(systemSettings.typeOfDestinationCategoryId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)([]));
    const typesOfJourney$ = systemSettings$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(systemSettings => this.itinerariesStore.getAttributesByCategoryId(systemSettings.typeOfJourneyCategoryId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)([]));
    this.allData$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([systemSettings$, journeyThemes$, typesOfDestination$, typesOfJourney$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(([systemSettings, journeyThemes, typesOfDestination, typesOfJourney]) => {
      return {
        systemSettings,
        journeyThemes,
        typesOfDestination,
        typesOfJourney
      };
    }));
  }
  startEndDateValidator(form) {
    const startDate = form.get('startDate');
    const endDate = form.get('endDate');
    if (endDate.value && startDate.value >= endDate.value) {
      startDate.setErrors({
        startDateIsHigherOrEqual: true
      });
    } else {
      if (startDate.hasError('startDateIsHigherOrEqual')) {
        delete startDate.errors['startDateIsHigherOrEqual'];
        startDate.updateValueAndValidity();
      }
    }
    return;
  }
  get destinations() {
    return this.extraInfo.get('destinations');
  }
  addDestination() {
    if (this.destinations.controls.at(-1).invalid) return;
    this.cityToSearch = null;
    const lastDate = this.destinations.controls.at(-1).value.endDate;
    this.destinations.push(this.fb.group({
      startDate: [lastDate, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      endDate: [lastDate.clone().add(1, 'days'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      location: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    }, {
      validators: this.startEndDateValidator
    }));
    setTimeout(() => this.destinationsAccordion.expand((this.destinations.length - 1).toString()));
  }
  removeDestination(destinationIndex) {
    this.destinations.removeAt(destinationIndex);
  }
  searchForCities() {
    if (!this.cityToSearch || this.cityToSearch?.length < 3) {
      this.recommendedCities = null;
      return;
    }
    this.resourceFilterService.getAllCitiesRecommended(this.cityToSearch).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.ngUnsubscribe)).subscribe(res => {
      if (!res) return;
      this.recommendedCities = [...res];
    });
  }
  updateLocationValue(destinationIndex, city) {
    this.destinations.at(destinationIndex).get('location').patchValue(city);
  }
  decreaseNrGuests(formControlName) {
    let currentValue = this.extraInfo.get(formControlName).value;
    if (currentValue === 0) {
      return;
    }
    this.extraInfo.get(formControlName).patchValue(--currentValue);
  }
  increaseNrGuests(formControlName) {
    let currentValue = this.extraInfo.get(formControlName).value;
    this.extraInfo.get(formControlName).patchValue(++currentValue);
  }
  selectJourneyTheme(journeyTheme, innerAccIndex) {
    this.innerAccordions.get(innerAccIndex).collapseAll();
    this.selectedJourneyTheme = journeyTheme;
    this.selectedDestinationType = null;
    this.selectedJourneyType = null;
    this.cityToSearch = null;
    this.recommendedCities = null;
    this.formBtnClicked = false;
    this.extraInfo.reset();
  }
  confirmSelection(journeyTheme) {
    this.formBtnClicked = true;
    this.extraInfo.get('destinations').enable();
    if (!this.isManualItinerary) {
      if (!journeyTheme?.roadTrip) {
        this.isRoadTrip = false;
        this.extraInfo.get('destinations').disable();
        // this.extraInfo.removeControl('destinations');
      } else {
        this.isRoadTrip = true;
      }
    }
    this.extraInfo.updateValueAndValidity();
    this.extraInfo.markAllAsTouched();
    if (this.extraInfo.valid && this.selectedJourneyTheme && this.selectedDestinationType && this.selectedJourneyType) {
      this.itinerariesStore.setItineraryFilters({
        journeyThemeId: this.selectedJourneyTheme.id,
        typeOfDestinationId: this.selectedDestinationType.id,
        typeOfJourneyId: this.selectedJourneyType.id
      });
      this.itinerariesStore.setItineraryExtraInfo(this.extraInfo.value);
      this.itinerariesStore.setThemeAttributes([this.selectedJourneyTheme, this.selectedDestinationType, this.selectedJourneyType]);
      if (this.isManualItinerary) {
        this.itinerariesStore.setItineraryExtraInfo({
          itineraryType: 'manual'
        });
        void this.router.navigate(['itinerary'], {
          relativeTo: this.route
        });
      } else {
        if (!this.isRoadTrip) {
          this.itinerariesStore.setItineraryExtraInfo({
            itineraryType: 'ai'
          });
          void this.router.navigate(['recommended'], {
            relativeTo: this.route
          });
        } else {
          this.itinerariesStore.setItineraryExtraInfo({
            itineraryType: 'road-trip'
          });
          void this.router.navigate(['road-trip'], {
            relativeTo: this.route
          });
        }
      }
    } else {
      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("ERROR.REQUIRED-ALL"), "error");
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__.ItinerariesStore
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_5__.ResourceFilterService
  }];
  static #_2 = this.propDecorators = {
    innerAccordions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChildren,
      args: ['innerAccordion']
    }],
    destinationsAccordion: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
      args: ['destinationsAccordion']
    }]
  };
};
ItinerariesThemeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-itineraries-theme',
  template: _itineraries_theme_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_itineraries_theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ItinerariesThemeComponent);


/***/ }),

/***/ 70248:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/recommended-itineraries/recommended-itineraries.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendedItinerariesComponent": () => (/* binding */ RecommendedItinerariesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _recommended_itineraries_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recommended-itineraries.component.html?ngResource */ 86962);
/* harmony import */ var _recommended_itineraries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommended-itineraries.component.scss?ngResource */ 49378);
/* harmony import */ var _recommended_itineraries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_recommended_itineraries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/itineraries.store */ 18645);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);








let RecommendedItinerariesComponent = class RecommendedItinerariesComponent {
  constructor(itinerariesStore, route, router) {
    this.itinerariesStore = itinerariesStore;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.checkForStoreData();
  }
  checkForStoreData() {
    const extraInfo = this.itinerariesStore.getItineraryExtraInfo();
    if (!extraInfo) {
      void this.router.navigate(['../'], {
        relativeTo: this.route
      });
    } else {
      this.getItinerariesData();
    }
  }
  getItinerariesData() {
    const systemSettings$ = this.itinerariesStore.getSystemSetting();
    const itineraries$ = this.itinerariesStore.listItineraryFiltered(0, -1, null, null);
    this.data$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([systemSettings$, itineraries$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([systemSettings, itineraries]) => {
      return {
        systemSettings,
        itineraries
      };
    }));
  }
  selectItinerary(itinerary) {
    this.itinerariesStore.setItinerary(itinerary);
    void this.router.navigate(['itinerary'], {
      relativeTo: this.route
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_itineraries_store__WEBPACK_IMPORTED_MODULE_2__.ItinerariesStore
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
};
RecommendedItinerariesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-recommended-itineraries',
  template: _recommended_itineraries_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_recommended_itineraries_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RecommendedItinerariesComponent);


/***/ }),

/***/ 37337:
/*!************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/trip-view/trip-view.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripViewComponent": () => (/* binding */ TripViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _trip_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip-view.component.html?ngResource */ 47661);
/* harmony import */ var _trip_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-view.component.scss?ngResource */ 72756);
/* harmony import */ var _trip_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trip_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _services_trips_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/trips.store */ 59705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);









let TripViewComponent = class TripViewComponent {
  constructor(tripsStore, route, router, toastService) {
    this.tripsStore = tripsStore;
    this.route = route;
    this.router = router;
    this.toastService = toastService;
    this.tripId = null;
    this.tripData = null;
    this.guestsState = null;
    this.totalPrice = 0;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.getGuestsState();
    this.checkRouteForTripId();
  }
  getGuestsState() {
    this.guestsState = this.tripsStore.getGuestsState();
    if (!this.guestsState?.adultsNumber && !this.guestsState?.childrenNumber) {
      void this.router.navigate(['../../'], {
        relativeTo: this.route
      });
    }
  }
  checkRouteForTripId() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => {
      if (params.has('tripId')) {
        this.tripId = params.get('tripId');
        return this.tripsStore.getTripById(this.tripId);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) return;
        this.tripData = {
          ...res
        };
        console.log('TRIP', this.tripData);
        this.initHotelAndRoomsState();
      }
    });
  }
  initHotelAndRoomsState() {
    this.tripsStore.setHotelState(this.tripData?.hotelList[0]?.hotelName);
    this.tripsStore.resetRoomsState();
  }
  handleHotelToggle(accordionRef, panelId) {
    this.accordionRef = accordionRef;
    if (this.accordionRef.isExpanded(panelId)) {
      this.tripsStore.setHotelState(this.tripData.hotelList[+panelId].hotelName);
    }
  }
  handleNewRoomNr(event) {
    this.totalPrice += event.priceChange;
    if (event.priceChange > 0) {
      this.tripsStore.increaseRoomQuantity(event.room);
    }
    if (event.priceChange < 0) {
      this.tripsStore.decreaseRoomQuantity(event.room);
    }
  }
  confirmSelection() {
    if (this.totalPrice > 0) {
      void this.router.navigate(['checkout'], {
        relativeTo: this.route
      });
    } else {
      this.toastService.showToast('Error', 'Select at least one room', 'error');
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_trips_store__WEBPACK_IMPORTED_MODULE_2__.TripsStore
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }];
};
TripViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-trip-view',
  template: _trip_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_trip_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TripViewComponent);


/***/ }),

/***/ 53499:
/*!*****************************************************!*\
  !*** ./src/app/shared/_pipes/cheapest-room.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheapestRoomPipe": () => (/* binding */ CheapestRoomPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let CheapestRoomPipe = class CheapestRoomPipe {
  transform(rooms) {
    if (!rooms || rooms.length === 0) return;
    let cheapestRoom = rooms[0].price;
    rooms.forEach(room => {
      if (room.price < cheapestRoom) cheapestRoom = room.price;
    });
    return cheapestRoom;
  }
};
CheapestRoomPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'cheapestRoom',
  standalone: true
})], CheapestRoomPipe);


/***/ }),

/***/ 17091:
/*!**********************************************************************************!*\
  !*** ./src/app/standalone-components/trip-room-card/trip-room-card.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripRoomCardComponent": () => (/* binding */ TripRoomCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _trip_room_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip-room-card.component.html?ngResource */ 18856);
/* harmony import */ var _trip_room_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-room-card.component.scss?ngResource */ 76356);
/* harmony import */ var _trip_room_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trip_room_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







let TripRoomCardComponent = class TripRoomCardComponent {
  constructor() {
    this.tripRoomNrChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {
    this.roomsNr = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(this.tripRoom.available)]);
  }
  increaseRoomsNr() {
    let currentNr = this.roomsNr.value;
    if (currentNr === this.tripRoom.available) return;
    this.roomsNr.setValue(++currentNr);
    this.tripRoomNrChange.emit({
      priceChange: this.tripRoom.price,
      room: this.tripRoom
    });
  }
  decreaseRoomsNr() {
    let currentNr = this.roomsNr.value;
    if (currentNr === 0) return;
    this.roomsNr.setValue(--currentNr);
    this.tripRoomNrChange.emit({
      priceChange: this.tripRoom.price * -1,
      room: this.tripRoom
    });
  }
  static #_ = this.propDecorators = {
    tripRoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nrOfNights: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tripRoomNrChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  };
};
TripRoomCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-trip-room-card',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule],
  template: _trip_room_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_trip_room_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TripRoomCardComponent);


/***/ }),

/***/ 31820:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/accomodation/accomodation.component.scss?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)), radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%), linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)), url(\"/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg\");\n  background-blend-mode: normal, normal, normal, normal, normal;\n  background-size: cover;\n  height: 275px;\n}\n.step-card .step-info {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .yellow-text {\n  color: rgb(255, 204, 4);\n}\n.step-card .step-card-title {\n  margin-bottom: 8px;\n}\n.step-card .step-card-title p {\n  margin-bottom: 0;\n}\n.step-card .card-header {\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-header .step-name {\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-header .step-separator {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n  margin: 0 8px;\n}\n.step-card .card-header .step-category {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-title {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-details {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item {\n  border: 1px solid rgba(255, 255, 255, 0.56);\n  border-radius: 8px;\n  padding: 15px 10px;\n  height: 100%;\n}\n.step-card .card-body .item .overflow-ellipsis {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 99%;\n}\n.step-card .card-body .item p {\n  margin-bottom: 0;\n}\n.step-card .card-body .item .item-title {\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item .item-hour {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n  opacity: 0.72;\n}\n.step-card .card-body .item .item-resource {\n  font-weight: 700;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .item .acc-dates {\n  font-size: 10px;\n}\n.step-card .card-body .item .acc-details .acc-type, .step-card .card-body .item .acc-details .acc-separator, .step-card .card-body .item .acc-details .acc-room {\n  font-size: 10px;\n  color: #fff;\n}\n.step-card .card-body .item .acc-details .acc-separator {\n  margin: 0px 8px;\n}\n.step-card .card-body .item .acc-details .acc-room {\n  opacity: 0.7;\n}\n.step-card .card-body .time-period {\n  padding: 7px 0px;\n}\n.step-card .card-body .time-period .time-period-number .day-box:not(:last-child) {\n  margin-right: 8px;\n}\n.step-card .card-body .time-period-type {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box {\n  border: 1px solid rgb(255, 255, 255);\n  border-radius: 4px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.step-card .card-body .day-box.selected {\n  opacity: 1;\n}\n.step-card .card-body .day-box span {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box.add-new {\n  border: 1px solid rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.add-new span {\n  color: rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.disabled {\n  opacity: 0.5;\n}\n.step-card .card-footer {\n  cursor: pointer;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-footer a {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF !important;\n  cursor: pointer;\n}\n\n.nav-pills {\n  border: 1px solid rgba(36, 57, 138, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n}\n.nav-pills > .nav-item {\n  flex-grow: 1;\n}\n.nav-pills > .nav-item .nav-link {\n  text-align: center;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 38px;\n  padding: 6px 0;\n  border-radius: 8px;\n}\n.nav-pills > .nav-item .nav-link.active {\n  background-color: #24398A;\n  color: var(--primary-background);\n}\n\n.hour-container > p {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.hour-container .mat-mdc-radio-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field {\n  width: 100%;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field .mdc-radio {\n  display: none;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field label {\n  width: 100%;\n  padding-left: 0;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  padding: 4px 8px;\n  background-color: var(--primary-background);\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button label {\n  color: #24398A;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked {\n  background-color: #24398A;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked label {\n  color: var(--primary-background);\n}\n\n.custom-modal .mat-dialog-content {\n  margin: 0;\n  padding: 24px;\n}\n.custom-modal .mat-dialog-content h2.step-title {\n  text-align: center;\n}\n.custom-modal .mat-dialog-content .res-item-image {\n  width: 100%;\n  height: 135px;\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n.custom-modal .mat-dialog-content .res-item-image img {\n  width: inherit;\n  height: inherit;\n  object-fit: cover;\n  transition: transform 0.3s ease-out;\n}\n.custom-modal .mat-dialog-content .res-check {\n  border: 1px solid #fff;\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n}\n.custom-modal .mat-dialog-content .res-check .fa-check {\n  background-color: green;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-modal .mat-dialog-content .res-item {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.custom-modal .mat-dialog-content .res-item:hover .res-item-image img {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n.custom-modal .mat-dialog-content .res-item-content {\n  padding: 10px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-title {\n  font-weight: 700;\n  font-size: 16px;\n  color: #24398A;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-review, .custom-modal .mat-dialog-content .res-item-content .res-address {\n  font-size: 10px;\n  color: #231F20;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child) {\n  margin-right: 3px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child)::after {\n  content: \",\";\n}\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)), radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%), linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)), url(\"/assets/images/others/itinerary-steps/accomodation-itineraries-min.jpg\");\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/client-trips-itineraries/_components/itinerary-steps/accomodation/accomodation.component.scss","webpack://./src/app/features/client-trips-itineraries/_components/itinerary-steps/steps-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;ACfA;EACE,sBAAA;EACA,sZAAA;EAKA,6DAAA;EACA,sBAAA;EAEA,aAAA;ADaF;ACXE;EACE,eAAA;EACA,uBAAA;EACA,cAAA;ADaJ;ACTE;EACE,uBAAA;ADWJ;ACRE;EACE,kBAAA;ADUJ;ACTI;EACE,gBAAA;ADWN;ACPE;EACE,2GAAA;ADSJ;ACPI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADSN;ACNI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;ADQN;ACLI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADON;ACDI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADGN;ACDI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADGN;ACDI;EACE,2CAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;ADGN;ACDM;EACE,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA;ADGR;ACAM;EACE,gBAAA;ADER;ACCM;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADCR;ACEM;EACE,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;ADAR;ACGM;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADDR;ACIM;EACE,eAAA;ADFR;ACMQ;EACE,eAAA;EACA,WAAA;ADJV;ACOQ;EACE,eAAA;ADLV;ACQQ;EACE,YAAA;ADNV;ACYI;EACE,gBAAA;ADVN;ACYM;EACE,iBAAA;ADVR;ACaI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADXN;ACaI;EACE,oCAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;ADXN;ACaM;EACE,UAAA;ADXR;ACcM;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;ADZR;ACeI;EACE,kCAAA;ADbN;ACcM;EACE,uBAAA;ADZR;ACgBI;EACE,YAAA;ADdN;ACkBE;EACE,eAAA;EACA,2GAAA;ADhBJ;ACkBI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,yBAAA;EACA,eAAA;ADhBN;;ACqBA;EACE,yCAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;ADlBF;ACoBE;EACE,YAAA;ADlBJ;ACoBI;EACE,kBAAA;EACA,cF1MU;EE2MV,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;EACA,cAAA;EACA,kBAAA;ADnBN;ACqBM;EACE,yBFxNQ;EEyNR,gCAAA;ADnBR;;AC2BE;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;ADxBJ;AC2BE;EACE,aAAA;EACA,8BAAA;EACA,SAAA;ADzBJ;AC2BI;EACE,WAAA;ADzBN;AC2BM;EACE,aAAA;ADzBR;AC4BM;EACE,WAAA;EACA,eAAA;AD1BR;AC8BI;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,2CAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AD5BN;AC8BM;EACE,cFnQQ;EEoQR,yBAAA;UAAA,iBAAA;EACA,eAAA;AD5BR;ACgCI;EACE,yBF1QU;AC4OhB;ACgCM;EACE,gCAAA;AD9BR;;ACoCA;EACE,SAAA;EACA,aAAA;ADjCF;ACmCE;EACE,kBAAA;ADjCJ;ACoCE;EACE,WAAA;EACA,aAAA;EACA,0BAAA;EACA,gBAAA;ADlCJ;ACoCI;EACE,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mCAAA;ADlCN;ACsCE;EACE,sBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ADpCJ;ACuCE;EACE,uBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ADrCJ;ACyCE;EACE,yCAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;ADvCJ;ACyCI;EACE,iCAAA;ADvCN;AC2CE;EACE,aAAA;ADzCJ;AC2CI;EACE,gBAAA;EACA,eAAA;EACA,cFnVU;AC0ShB;AC4CI;EACE,eAAA;EACA,cAAA;AD1CN;AC6CI;EACE,iBAAA;AD3CN;AC8CI;EACE,YAAA;AD5CN;;AAnTA;EACE,sBAAA;EACA,oZAAA;AAsTF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../steps-card.component\";\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)),\n  radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%),\n  linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%),\n  linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)),\n  url('/assets/images/others/itinerary-steps/accomodation-itineraries-min.jpg');\n}\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)),\n  radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%),\n  linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%),\n  linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)),\n  url('/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg');\n  background-blend-mode: normal, normal, normal, normal, normal;\n  background-size: cover;\n\n  height: 275px;\n\n  .step-info {\n    font-size: 10px;\n    letter-spacing: -0.02em;\n    color: #FFFFFF;\n\n  }\n\n  .yellow-text {\n    color: rgba(255, 204, 4, 1);\n  }\n\n  .step-card-title {\n    margin-bottom: 8px;\n    p {\n      margin-bottom: 0;\n    }\n  }\n\n  .card-header {\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%);\n\n    .step-name {\n      font-weight: 500;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n\n    .step-separator {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFCC04;\n      margin: 0 8px;\n    }\n\n    .step-category {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n\n  }\n\n  .card-body {\n    .step-title {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n    .step-details {\n      font-weight: 400;\n      font-size: 10px;\n      letter-spacing: -0.02em;\n      color: #FFCC04;\n    }\n    .item {\n      border: 1px solid rgba(255, 255, 255, 0.56);\n      border-radius: 8px;\n      padding: 15px 10px;\n      height: 100%;\n\n      .overflow-ellipsis {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        width: calc(99%);\n      }\n\n      p {\n        margin-bottom: 0;\n      }\n\n      .item-title {\n        font-weight: 700;\n        font-size: 14px;\n        letter-spacing: -0.02em;\n        color: #FFCC04;\n      }\n\n      .item-hour {\n        font-size: 10px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n        opacity: 0.72;\n      }\n\n      .item-resource {\n        font-weight: 700;\n        font-size: 10px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n      }\n\n      .acc-dates {\n        font-size: 10px;\n      }\n\n      .acc-details {\n        .acc-type, .acc-separator, .acc-room {\n          font-size: 10px;\n          color: #fff;\n        }\n\n        .acc-separator {\n          margin: 0px 8px;\n        }\n\n        .acc-room {\n          opacity: 0.7;\n        }\n      }\n\n\n    }\n    .time-period {\n      padding: 7px 0px;\n\n      .time-period-number .day-box:not(:last-child) {\n        margin-right: 8px;\n      }\n    }\n    .time-period-type {\n      font-weight: 400;\n      font-size: 10px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n    .day-box {\n      border: 1px solid rgba(255, 255, 255, 1);\n      border-radius: 4px;\n      width: 16px;\n      height: 16px;\n      display: flex;\n      justify-content: center;\n      cursor: pointer;\n      opacity: 0.5;\n\n      &.selected {\n        opacity: 1;\n      }\n\n      span {\n        font-weight: 400;\n        font-size: 10px;\n        line-height: 14px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n      }\n    }\n    .day-box.add-new {\n      border: 1px solid rgba(255, 204, 4, 1);\n      span {\n        color: rgba(255, 204, 4, 1);\n      }\n    }\n\n    .day-box.disabled {\n      opacity: 0.5;\n    }\n  }\n\n  .card-footer {\n    cursor: pointer;\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%);\n\n    a {\n      font-weight: 400;\n      font-size: 14px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF !important;\n      cursor: pointer;\n    }\n  }\n}\n\n.nav-pills {\n  border: 1px solid rgba($primary-color, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n\n  & > .nav-item {\n    flex-grow: 1;\n\n    .nav-link {\n      text-align: center;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 20px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      height: 38px;\n      padding: 6px 0;\n      border-radius: 8px;\n\n      &.active {\n        background-color: $primary-color;\n        color: var(--primary-background);\n      }\n    }\n  }\n\n}\n\n.hour-container {\n  & > p {\n    font-size: 16px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .mat-mdc-radio-group {\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n\n    .mdc-form-field {\n      width: 100%;\n\n      .mdc-radio {\n        display: none;\n      }\n\n      label {\n        width: 100%;\n        padding-left: 0;\n      }\n    }\n\n    .mat-mdc-radio-button {\n      border: 1px solid $primary-color;\n      border-radius: 8px;\n      padding: 4px 8px;\n      background-color: var(--primary-background);\n      cursor: pointer;\n      width: 100%;\n      text-align: center;\n\n      label {\n        color: $primary-color;\n        user-select: none;\n        cursor: pointer;\n      }\n    }\n\n    .mat-mdc-radio-checked {\n      background-color: $primary-color;\n\n      label {\n        color: var(--primary-background);\n      }\n    }\n  }\n}\n\n.custom-modal .mat-dialog-content {\n  margin: 0;\n  padding: 24px;\n\n  h2.step-title {\n    text-align: center;\n  }\n\n  .res-item-image {\n    width: 100%;\n    height: 135px;\n    border-radius: 8px 8px 0 0;\n    overflow: hidden;\n\n    img {\n      width: inherit;\n      height: inherit;\n      object-fit: cover;\n      transition: transform 0.3s ease-out;\n    }\n  }\n\n  .res-check {\n    border: 1px solid #fff;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    border-radius: 50%;\n  }\n\n  .res-check .fa-check {\n    background-color: green;\n    color: #fff;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    vertical-align: middle;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n\n  .res-item {\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    border-radius: 8px;\n    margin-bottom: 10px;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n\n    &:hover .res-item-image img {\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n  }\n\n  .res-item-content {\n    padding: 10px;\n\n    .res-title {\n      font-weight: 700;\n      font-size: 16px;\n      color: $primary-color;\n    }\n\n    .res-review, .res-address {\n      font-size: 10px;\n      color: #231F20;\n    }\n\n    .res-address span:not(:last-child){\n      margin-right: 3px;\n    }\n\n    .res-address span:not(:last-child)::after{\n      content: ',';\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 30647:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/day-activities/activities.component.scss?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)), radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%), linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)), url(\"/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg\");\n  background-blend-mode: normal, normal, normal, normal, normal;\n  background-size: cover;\n  height: 275px;\n}\n.step-card .step-info {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .yellow-text {\n  color: rgb(255, 204, 4);\n}\n.step-card .step-card-title {\n  margin-bottom: 8px;\n}\n.step-card .step-card-title p {\n  margin-bottom: 0;\n}\n.step-card .card-header {\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-header .step-name {\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-header .step-separator {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n  margin: 0 8px;\n}\n.step-card .card-header .step-category {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-title {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-details {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item {\n  border: 1px solid rgba(255, 255, 255, 0.56);\n  border-radius: 8px;\n  padding: 15px 10px;\n  height: 100%;\n}\n.step-card .card-body .item .overflow-ellipsis {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 99%;\n}\n.step-card .card-body .item p {\n  margin-bottom: 0;\n}\n.step-card .card-body .item .item-title {\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item .item-hour {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n  opacity: 0.72;\n}\n.step-card .card-body .item .item-resource {\n  font-weight: 700;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .item .acc-dates {\n  font-size: 10px;\n}\n.step-card .card-body .item .acc-details .acc-type, .step-card .card-body .item .acc-details .acc-separator, .step-card .card-body .item .acc-details .acc-room {\n  font-size: 10px;\n  color: #fff;\n}\n.step-card .card-body .item .acc-details .acc-separator {\n  margin: 0px 8px;\n}\n.step-card .card-body .item .acc-details .acc-room {\n  opacity: 0.7;\n}\n.step-card .card-body .time-period {\n  padding: 7px 0px;\n}\n.step-card .card-body .time-period .time-period-number .day-box:not(:last-child) {\n  margin-right: 8px;\n}\n.step-card .card-body .time-period-type {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box {\n  border: 1px solid rgb(255, 255, 255);\n  border-radius: 4px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.step-card .card-body .day-box.selected {\n  opacity: 1;\n}\n.step-card .card-body .day-box span {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box.add-new {\n  border: 1px solid rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.add-new span {\n  color: rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.disabled {\n  opacity: 0.5;\n}\n.step-card .card-footer {\n  cursor: pointer;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-footer a {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF !important;\n  cursor: pointer;\n}\n\n.nav-pills {\n  border: 1px solid rgba(36, 57, 138, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n}\n.nav-pills > .nav-item {\n  flex-grow: 1;\n}\n.nav-pills > .nav-item .nav-link {\n  text-align: center;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 38px;\n  padding: 6px 0;\n  border-radius: 8px;\n}\n.nav-pills > .nav-item .nav-link.active {\n  background-color: #24398A;\n  color: var(--primary-background);\n}\n\n.hour-container > p {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.hour-container .mat-mdc-radio-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field {\n  width: 100%;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field .mdc-radio {\n  display: none;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field label {\n  width: 100%;\n  padding-left: 0;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  padding: 4px 8px;\n  background-color: var(--primary-background);\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button label {\n  color: #24398A;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked {\n  background-color: #24398A;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked label {\n  color: var(--primary-background);\n}\n\n.custom-modal .mat-dialog-content {\n  margin: 0;\n  padding: 24px;\n}\n.custom-modal .mat-dialog-content h2.step-title {\n  text-align: center;\n}\n.custom-modal .mat-dialog-content .res-item-image {\n  width: 100%;\n  height: 135px;\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n.custom-modal .mat-dialog-content .res-item-image img {\n  width: inherit;\n  height: inherit;\n  object-fit: cover;\n  transition: transform 0.3s ease-out;\n}\n.custom-modal .mat-dialog-content .res-check {\n  border: 1px solid #fff;\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n}\n.custom-modal .mat-dialog-content .res-check .fa-check {\n  background-color: green;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-modal .mat-dialog-content .res-item {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.custom-modal .mat-dialog-content .res-item:hover .res-item-image img {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n.custom-modal .mat-dialog-content .res-item-content {\n  padding: 10px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-title {\n  font-weight: 700;\n  font-size: 16px;\n  color: #24398A;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-review, .custom-modal .mat-dialog-content .res-item-content .res-address {\n  font-size: 10px;\n  color: #231F20;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child) {\n  margin-right: 3px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child)::after {\n  content: \",\";\n}\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)), radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%), linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)), url(\"/assets/images/others/itinerary-steps/day-activities-itineraries-min.jpg\");\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/client-trips-itineraries/_components/itinerary-steps/day-activities/activities.component.scss","webpack://./src/app/features/client-trips-itineraries/_components/itinerary-steps/steps-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;ACfA;EACE,sBAAA;EACA,sZAAA;EAKA,6DAAA;EACA,sBAAA;EAEA,aAAA;ADaF;ACXE;EACE,eAAA;EACA,uBAAA;EACA,cAAA;ADaJ;ACTE;EACE,uBAAA;ADWJ;ACRE;EACE,kBAAA;ADUJ;ACTI;EACE,gBAAA;ADWN;ACPE;EACE,2GAAA;ADSJ;ACPI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADSN;ACNI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;ADQN;ACLI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADON;ACDI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADGN;ACDI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADGN;ACDI;EACE,2CAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;ADGN;ACDM;EACE,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA;ADGR;ACAM;EACE,gBAAA;ADER;ACCM;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADCR;ACEM;EACE,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;ADAR;ACGM;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADDR;ACIM;EACE,eAAA;ADFR;ACMQ;EACE,eAAA;EACA,WAAA;ADJV;ACOQ;EACE,eAAA;ADLV;ACQQ;EACE,YAAA;ADNV;ACYI;EACE,gBAAA;ADVN;ACYM;EACE,iBAAA;ADVR;ACaI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADXN;ACaI;EACE,oCAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;ADXN;ACaM;EACE,UAAA;ADXR;ACcM;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;ADZR;ACeI;EACE,kCAAA;ADbN;ACcM;EACE,uBAAA;ADZR;ACgBI;EACE,YAAA;ADdN;ACkBE;EACE,eAAA;EACA,2GAAA;ADhBJ;ACkBI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,yBAAA;EACA,eAAA;ADhBN;;ACqBA;EACE,yCAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;ADlBF;ACoBE;EACE,YAAA;ADlBJ;ACoBI;EACE,kBAAA;EACA,cF1MU;EE2MV,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;EACA,cAAA;EACA,kBAAA;ADnBN;ACqBM;EACE,yBFxNQ;EEyNR,gCAAA;ADnBR;;AC2BE;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;ADxBJ;AC2BE;EACE,aAAA;EACA,8BAAA;EACA,SAAA;ADzBJ;AC2BI;EACE,WAAA;ADzBN;AC2BM;EACE,aAAA;ADzBR;AC4BM;EACE,WAAA;EACA,eAAA;AD1BR;AC8BI;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,2CAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AD5BN;AC8BM;EACE,cFnQQ;EEoQR,yBAAA;UAAA,iBAAA;EACA,eAAA;AD5BR;ACgCI;EACE,yBF1QU;AC4OhB;ACgCM;EACE,gCAAA;AD9BR;;ACoCA;EACE,SAAA;EACA,aAAA;ADjCF;ACmCE;EACE,kBAAA;ADjCJ;ACoCE;EACE,WAAA;EACA,aAAA;EACA,0BAAA;EACA,gBAAA;ADlCJ;ACoCI;EACE,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mCAAA;ADlCN;ACsCE;EACE,sBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ADpCJ;ACuCE;EACE,uBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ADrCJ;ACyCE;EACE,yCAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;ADvCJ;ACyCI;EACE,iCAAA;ADvCN;AC2CE;EACE,aAAA;ADzCJ;AC2CI;EACE,gBAAA;EACA,eAAA;EACA,cFnVU;AC0ShB;AC4CI;EACE,eAAA;EACA,cAAA;AD1CN;AC6CI;EACE,iBAAA;AD3CN;AC8CI;EACE,YAAA;AD5CN;;AApTA;EACE,sBAAA;EACA,sZAAA;AAuTF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../steps-card.component\";\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)),\n  radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%),\n  linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%),\n  linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)),\n  url('/assets/images/others/itinerary-steps/day-activities-itineraries-min.jpg');\n}\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)),\n  radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%),\n  linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%),\n  linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)),\n  url('/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg');\n  background-blend-mode: normal, normal, normal, normal, normal;\n  background-size: cover;\n\n  height: 275px;\n\n  .step-info {\n    font-size: 10px;\n    letter-spacing: -0.02em;\n    color: #FFFFFF;\n\n  }\n\n  .yellow-text {\n    color: rgba(255, 204, 4, 1);\n  }\n\n  .step-card-title {\n    margin-bottom: 8px;\n    p {\n      margin-bottom: 0;\n    }\n  }\n\n  .card-header {\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%);\n\n    .step-name {\n      font-weight: 500;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n\n    .step-separator {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFCC04;\n      margin: 0 8px;\n    }\n\n    .step-category {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n\n  }\n\n  .card-body {\n    .step-title {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n    .step-details {\n      font-weight: 400;\n      font-size: 10px;\n      letter-spacing: -0.02em;\n      color: #FFCC04;\n    }\n    .item {\n      border: 1px solid rgba(255, 255, 255, 0.56);\n      border-radius: 8px;\n      padding: 15px 10px;\n      height: 100%;\n\n      .overflow-ellipsis {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        width: calc(99%);\n      }\n\n      p {\n        margin-bottom: 0;\n      }\n\n      .item-title {\n        font-weight: 700;\n        font-size: 14px;\n        letter-spacing: -0.02em;\n        color: #FFCC04;\n      }\n\n      .item-hour {\n        font-size: 10px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n        opacity: 0.72;\n      }\n\n      .item-resource {\n        font-weight: 700;\n        font-size: 10px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n      }\n\n      .acc-dates {\n        font-size: 10px;\n      }\n\n      .acc-details {\n        .acc-type, .acc-separator, .acc-room {\n          font-size: 10px;\n          color: #fff;\n        }\n\n        .acc-separator {\n          margin: 0px 8px;\n        }\n\n        .acc-room {\n          opacity: 0.7;\n        }\n      }\n\n\n    }\n    .time-period {\n      padding: 7px 0px;\n\n      .time-period-number .day-box:not(:last-child) {\n        margin-right: 8px;\n      }\n    }\n    .time-period-type {\n      font-weight: 400;\n      font-size: 10px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n    .day-box {\n      border: 1px solid rgba(255, 255, 255, 1);\n      border-radius: 4px;\n      width: 16px;\n      height: 16px;\n      display: flex;\n      justify-content: center;\n      cursor: pointer;\n      opacity: 0.5;\n\n      &.selected {\n        opacity: 1;\n      }\n\n      span {\n        font-weight: 400;\n        font-size: 10px;\n        line-height: 14px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n      }\n    }\n    .day-box.add-new {\n      border: 1px solid rgba(255, 204, 4, 1);\n      span {\n        color: rgba(255, 204, 4, 1);\n      }\n    }\n\n    .day-box.disabled {\n      opacity: 0.5;\n    }\n  }\n\n  .card-footer {\n    cursor: pointer;\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%);\n\n    a {\n      font-weight: 400;\n      font-size: 14px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF !important;\n      cursor: pointer;\n    }\n  }\n}\n\n.nav-pills {\n  border: 1px solid rgba($primary-color, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n\n  & > .nav-item {\n    flex-grow: 1;\n\n    .nav-link {\n      text-align: center;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 20px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      height: 38px;\n      padding: 6px 0;\n      border-radius: 8px;\n\n      &.active {\n        background-color: $primary-color;\n        color: var(--primary-background);\n      }\n    }\n  }\n\n}\n\n.hour-container {\n  & > p {\n    font-size: 16px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .mat-mdc-radio-group {\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n\n    .mdc-form-field {\n      width: 100%;\n\n      .mdc-radio {\n        display: none;\n      }\n\n      label {\n        width: 100%;\n        padding-left: 0;\n      }\n    }\n\n    .mat-mdc-radio-button {\n      border: 1px solid $primary-color;\n      border-radius: 8px;\n      padding: 4px 8px;\n      background-color: var(--primary-background);\n      cursor: pointer;\n      width: 100%;\n      text-align: center;\n\n      label {\n        color: $primary-color;\n        user-select: none;\n        cursor: pointer;\n      }\n    }\n\n    .mat-mdc-radio-checked {\n      background-color: $primary-color;\n\n      label {\n        color: var(--primary-background);\n      }\n    }\n  }\n}\n\n.custom-modal .mat-dialog-content {\n  margin: 0;\n  padding: 24px;\n\n  h2.step-title {\n    text-align: center;\n  }\n\n  .res-item-image {\n    width: 100%;\n    height: 135px;\n    border-radius: 8px 8px 0 0;\n    overflow: hidden;\n\n    img {\n      width: inherit;\n      height: inherit;\n      object-fit: cover;\n      transition: transform 0.3s ease-out;\n    }\n  }\n\n  .res-check {\n    border: 1px solid #fff;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    border-radius: 50%;\n  }\n\n  .res-check .fa-check {\n    background-color: green;\n    color: #fff;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    vertical-align: middle;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n\n  .res-item {\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    border-radius: 8px;\n    margin-bottom: 10px;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n\n    &:hover .res-item-image img {\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n  }\n\n  .res-item-content {\n    padding: 10px;\n\n    .res-title {\n      font-weight: 700;\n      font-size: 16px;\n      color: $primary-color;\n    }\n\n    .res-review, .res-address {\n      font-size: 10px;\n      color: #231F20;\n    }\n\n    .res-address span:not(:last-child){\n      margin-right: 3px;\n    }\n\n    .res-address span:not(:last-child)::after{\n      content: ',';\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 77102:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/eat-and-drink/eat-and-drink.component.scss?ngResource ***!
  \*************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)), radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%), linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)), url(\"/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg\");\n  background-blend-mode: normal, normal, normal, normal, normal;\n  background-size: cover;\n  height: 275px;\n}\n.step-card .step-info {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .yellow-text {\n  color: rgb(255, 204, 4);\n}\n.step-card .step-card-title {\n  margin-bottom: 8px;\n}\n.step-card .step-card-title p {\n  margin-bottom: 0;\n}\n.step-card .card-header {\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-header .step-name {\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-header .step-separator {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n  margin: 0 8px;\n}\n.step-card .card-header .step-category {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-title {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-details {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item {\n  border: 1px solid rgba(255, 255, 255, 0.56);\n  border-radius: 8px;\n  padding: 15px 10px;\n  height: 100%;\n}\n.step-card .card-body .item .overflow-ellipsis {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 99%;\n}\n.step-card .card-body .item p {\n  margin-bottom: 0;\n}\n.step-card .card-body .item .item-title {\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item .item-hour {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n  opacity: 0.72;\n}\n.step-card .card-body .item .item-resource {\n  font-weight: 700;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .item .acc-dates {\n  font-size: 10px;\n}\n.step-card .card-body .item .acc-details .acc-type, .step-card .card-body .item .acc-details .acc-separator, .step-card .card-body .item .acc-details .acc-room {\n  font-size: 10px;\n  color: #fff;\n}\n.step-card .card-body .item .acc-details .acc-separator {\n  margin: 0px 8px;\n}\n.step-card .card-body .item .acc-details .acc-room {\n  opacity: 0.7;\n}\n.step-card .card-body .time-period {\n  padding: 7px 0px;\n}\n.step-card .card-body .time-period .time-period-number .day-box:not(:last-child) {\n  margin-right: 8px;\n}\n.step-card .card-body .time-period-type {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box {\n  border: 1px solid rgb(255, 255, 255);\n  border-radius: 4px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.step-card .card-body .day-box.selected {\n  opacity: 1;\n}\n.step-card .card-body .day-box span {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box.add-new {\n  border: 1px solid rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.add-new span {\n  color: rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.disabled {\n  opacity: 0.5;\n}\n.step-card .card-footer {\n  cursor: pointer;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-footer a {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF !important;\n  cursor: pointer;\n}\n\n.nav-pills {\n  border: 1px solid rgba(36, 57, 138, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n}\n.nav-pills > .nav-item {\n  flex-grow: 1;\n}\n.nav-pills > .nav-item .nav-link {\n  text-align: center;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 38px;\n  padding: 6px 0;\n  border-radius: 8px;\n}\n.nav-pills > .nav-item .nav-link.active {\n  background-color: #24398A;\n  color: var(--primary-background);\n}\n\n.hour-container > p {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.hour-container .mat-mdc-radio-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field {\n  width: 100%;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field .mdc-radio {\n  display: none;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field label {\n  width: 100%;\n  padding-left: 0;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  padding: 4px 8px;\n  background-color: var(--primary-background);\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button label {\n  color: #24398A;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked {\n  background-color: #24398A;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked label {\n  color: var(--primary-background);\n}\n\n.custom-modal .mat-dialog-content {\n  margin: 0;\n  padding: 24px;\n}\n.custom-modal .mat-dialog-content h2.step-title {\n  text-align: center;\n}\n.custom-modal .mat-dialog-content .res-item-image {\n  width: 100%;\n  height: 135px;\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n.custom-modal .mat-dialog-content .res-item-image img {\n  width: inherit;\n  height: inherit;\n  object-fit: cover;\n  transition: transform 0.3s ease-out;\n}\n.custom-modal .mat-dialog-content .res-check {\n  border: 1px solid #fff;\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n}\n.custom-modal .mat-dialog-content .res-check .fa-check {\n  background-color: green;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-modal .mat-dialog-content .res-item {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.custom-modal .mat-dialog-content .res-item:hover .res-item-image img {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n.custom-modal .mat-dialog-content .res-item-content {\n  padding: 10px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-title {\n  font-weight: 700;\n  font-size: 16px;\n  color: #24398A;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-review, .custom-modal .mat-dialog-content .res-item-content .res-address {\n  font-size: 10px;\n  color: #231F20;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child) {\n  margin-right: 3px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child)::after {\n  content: \",\";\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/client-trips-itineraries/_components/itinerary-steps/eat-and-drink/eat-and-drink.component.scss","webpack://./src/app/features/client-trips-itineraries/_components/itinerary-steps/steps-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;ACfA;EACE,sBAAA;EACA,sZAAA;EAKA,6DAAA;EACA,sBAAA;EAEA,aAAA;ADaF;ACXE;EACE,eAAA;EACA,uBAAA;EACA,cAAA;ADaJ;ACTE;EACE,uBAAA;ADWJ;ACRE;EACE,kBAAA;ADUJ;ACTI;EACE,gBAAA;ADWN;ACPE;EACE,2GAAA;ADSJ;ACPI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADSN;ACNI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;ADQN;ACLI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADON;ACDI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADGN;ACDI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADGN;ACDI;EACE,2CAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;ADGN;ACDM;EACE,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA;ADGR;ACAM;EACE,gBAAA;ADER;ACCM;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADCR;ACEM;EACE,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;ADAR;ACGM;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADDR;ACIM;EACE,eAAA;ADFR;ACMQ;EACE,eAAA;EACA,WAAA;ADJV;ACOQ;EACE,eAAA;ADLV;ACQQ;EACE,YAAA;ADNV;ACYI;EACE,gBAAA;ADVN;ACYM;EACE,iBAAA;ADVR;ACaI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADXN;ACaI;EACE,oCAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;ADXN;ACaM;EACE,UAAA;ADXR;ACcM;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;ADZR;ACeI;EACE,kCAAA;ADbN;ACcM;EACE,uBAAA;ADZR;ACgBI;EACE,YAAA;ADdN;ACkBE;EACE,eAAA;EACA,2GAAA;ADhBJ;ACkBI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,yBAAA;EACA,eAAA;ADhBN;;ACqBA;EACE,yCAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;ADlBF;ACoBE;EACE,YAAA;ADlBJ;ACoBI;EACE,kBAAA;EACA,cF1MU;EE2MV,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;EACA,cAAA;EACA,kBAAA;ADnBN;ACqBM;EACE,yBFxNQ;EEyNR,gCAAA;ADnBR;;AC2BE;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;ADxBJ;AC2BE;EACE,aAAA;EACA,8BAAA;EACA,SAAA;ADzBJ;AC2BI;EACE,WAAA;ADzBN;AC2BM;EACE,aAAA;ADzBR;AC4BM;EACE,WAAA;EACA,eAAA;AD1BR;AC8BI;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,2CAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AD5BN;AC8BM;EACE,cFnQQ;EEoQR,yBAAA;UAAA,iBAAA;EACA,eAAA;AD5BR;ACgCI;EACE,yBF1QU;AC4OhB;ACgCM;EACE,gCAAA;AD9BR;;ACoCA;EACE,SAAA;EACA,aAAA;ADjCF;ACmCE;EACE,kBAAA;ADjCJ;ACoCE;EACE,WAAA;EACA,aAAA;EACA,0BAAA;EACA,gBAAA;ADlCJ;ACoCI;EACE,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mCAAA;ADlCN;ACsCE;EACE,sBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ADpCJ;ACuCE;EACE,uBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ADrCJ;ACyCE;EACE,yCAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;ADvCJ;ACyCI;EACE,iCAAA;ADvCN;AC2CE;EACE,aAAA;ADzCJ;AC2CI;EACE,gBAAA;EACA,eAAA;EACA,cFnVU;AC0ShB;AC4CI;EACE,eAAA;EACA,cAAA;AD1CN;AC6CI;EACE,iBAAA;AD3CN;AC8CI;EACE,YAAA;AD5CN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n",":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)), radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%), linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)), url(\"/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg\");\n  background-blend-mode: normal, normal, normal, normal, normal;\n  background-size: cover;\n  height: 275px;\n}\n.step-card .step-info {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .yellow-text {\n  color: rgb(255, 204, 4);\n}\n.step-card .step-card-title {\n  margin-bottom: 8px;\n}\n.step-card .step-card-title p {\n  margin-bottom: 0;\n}\n.step-card .card-header {\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-header .step-name {\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-header .step-separator {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n  margin: 0 8px;\n}\n.step-card .card-header .step-category {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-title {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-details {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item {\n  border: 1px solid rgba(255, 255, 255, 0.56);\n  border-radius: 8px;\n  padding: 15px 10px;\n  height: 100%;\n}\n.step-card .card-body .item .overflow-ellipsis {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 99%;\n}\n.step-card .card-body .item p {\n  margin-bottom: 0;\n}\n.step-card .card-body .item .item-title {\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item .item-hour {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n  opacity: 0.72;\n}\n.step-card .card-body .item .item-resource {\n  font-weight: 700;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .item .acc-dates {\n  font-size: 10px;\n}\n.step-card .card-body .item .acc-details .acc-type, .step-card .card-body .item .acc-details .acc-separator, .step-card .card-body .item .acc-details .acc-room {\n  font-size: 10px;\n  color: #fff;\n}\n.step-card .card-body .item .acc-details .acc-separator {\n  margin: 0px 8px;\n}\n.step-card .card-body .item .acc-details .acc-room {\n  opacity: 0.7;\n}\n.step-card .card-body .time-period {\n  padding: 7px 0px;\n}\n.step-card .card-body .time-period .time-period-number .day-box:not(:last-child) {\n  margin-right: 8px;\n}\n.step-card .card-body .time-period-type {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box {\n  border: 1px solid rgb(255, 255, 255);\n  border-radius: 4px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.step-card .card-body .day-box.selected {\n  opacity: 1;\n}\n.step-card .card-body .day-box span {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box.add-new {\n  border: 1px solid rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.add-new span {\n  color: rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.disabled {\n  opacity: 0.5;\n}\n.step-card .card-footer {\n  cursor: pointer;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-footer a {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF !important;\n  cursor: pointer;\n}\n\n.nav-pills {\n  border: 1px solid rgba(36, 57, 138, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n}\n.nav-pills > .nav-item {\n  flex-grow: 1;\n}\n.nav-pills > .nav-item .nav-link {\n  text-align: center;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 38px;\n  padding: 6px 0;\n  border-radius: 8px;\n}\n.nav-pills > .nav-item .nav-link.active {\n  background-color: #24398A;\n  color: var(--primary-background);\n}\n\n.hour-container > p {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.hour-container .mat-mdc-radio-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field {\n  width: 100%;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field .mdc-radio {\n  display: none;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field label {\n  width: 100%;\n  padding-left: 0;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  padding: 4px 8px;\n  background-color: var(--primary-background);\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button label {\n  color: #24398A;\n  user-select: none;\n  cursor: pointer;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked {\n  background-color: #24398A;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked label {\n  color: var(--primary-background);\n}\n\n.custom-modal .mat-dialog-content {\n  margin: 0;\n  padding: 24px;\n}\n.custom-modal .mat-dialog-content h2.step-title {\n  text-align: center;\n}\n.custom-modal .mat-dialog-content .res-item-image {\n  width: 100%;\n  height: 135px;\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n.custom-modal .mat-dialog-content .res-item-image img {\n  width: inherit;\n  height: inherit;\n  object-fit: cover;\n  transition: transform 0.3s ease-out;\n}\n.custom-modal .mat-dialog-content .res-check {\n  border: 1px solid #fff;\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n}\n.custom-modal .mat-dialog-content .res-check .fa-check {\n  background-color: green;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-modal .mat-dialog-content .res-item {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.custom-modal .mat-dialog-content .res-item:hover .res-item-image img {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n.custom-modal .mat-dialog-content .res-item-content {\n  padding: 10px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-title {\n  font-weight: 700;\n  font-size: 16px;\n  color: #24398A;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-review, .custom-modal .mat-dialog-content .res-item-content .res-address {\n  font-size: 10px;\n  color: #231F20;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child) {\n  margin-right: 3px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child)::after {\n  content: \",\";\n}","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)),\n  radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%),\n  linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%),\n  linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)),\n  url('/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg');\n  background-blend-mode: normal, normal, normal, normal, normal;\n  background-size: cover;\n\n  height: 275px;\n\n  .step-info {\n    font-size: 10px;\n    letter-spacing: -0.02em;\n    color: #FFFFFF;\n\n  }\n\n  .yellow-text {\n    color: rgba(255, 204, 4, 1);\n  }\n\n  .step-card-title {\n    margin-bottom: 8px;\n    p {\n      margin-bottom: 0;\n    }\n  }\n\n  .card-header {\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%);\n\n    .step-name {\n      font-weight: 500;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n\n    .step-separator {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFCC04;\n      margin: 0 8px;\n    }\n\n    .step-category {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n\n  }\n\n  .card-body {\n    .step-title {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n    .step-details {\n      font-weight: 400;\n      font-size: 10px;\n      letter-spacing: -0.02em;\n      color: #FFCC04;\n    }\n    .item {\n      border: 1px solid rgba(255, 255, 255, 0.56);\n      border-radius: 8px;\n      padding: 15px 10px;\n      height: 100%;\n\n      .overflow-ellipsis {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        width: calc(99%);\n      }\n\n      p {\n        margin-bottom: 0;\n      }\n\n      .item-title {\n        font-weight: 700;\n        font-size: 14px;\n        letter-spacing: -0.02em;\n        color: #FFCC04;\n      }\n\n      .item-hour {\n        font-size: 10px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n        opacity: 0.72;\n      }\n\n      .item-resource {\n        font-weight: 700;\n        font-size: 10px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n      }\n\n      .acc-dates {\n        font-size: 10px;\n      }\n\n      .acc-details {\n        .acc-type, .acc-separator, .acc-room {\n          font-size: 10px;\n          color: #fff;\n        }\n\n        .acc-separator {\n          margin: 0px 8px;\n        }\n\n        .acc-room {\n          opacity: 0.7;\n        }\n      }\n\n\n    }\n    .time-period {\n      padding: 7px 0px;\n\n      .time-period-number .day-box:not(:last-child) {\n        margin-right: 8px;\n      }\n    }\n    .time-period-type {\n      font-weight: 400;\n      font-size: 10px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n    .day-box {\n      border: 1px solid rgba(255, 255, 255, 1);\n      border-radius: 4px;\n      width: 16px;\n      height: 16px;\n      display: flex;\n      justify-content: center;\n      cursor: pointer;\n      opacity: 0.5;\n\n      &.selected {\n        opacity: 1;\n      }\n\n      span {\n        font-weight: 400;\n        font-size: 10px;\n        line-height: 14px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n      }\n    }\n    .day-box.add-new {\n      border: 1px solid rgba(255, 204, 4, 1);\n      span {\n        color: rgba(255, 204, 4, 1);\n      }\n    }\n\n    .day-box.disabled {\n      opacity: 0.5;\n    }\n  }\n\n  .card-footer {\n    cursor: pointer;\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%);\n\n    a {\n      font-weight: 400;\n      font-size: 14px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF !important;\n      cursor: pointer;\n    }\n  }\n}\n\n.nav-pills {\n  border: 1px solid rgba($primary-color, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n\n  & > .nav-item {\n    flex-grow: 1;\n\n    .nav-link {\n      text-align: center;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 20px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      height: 38px;\n      padding: 6px 0;\n      border-radius: 8px;\n\n      &.active {\n        background-color: $primary-color;\n        color: var(--primary-background);\n      }\n    }\n  }\n\n}\n\n.hour-container {\n  & > p {\n    font-size: 16px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .mat-mdc-radio-group {\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n\n    .mdc-form-field {\n      width: 100%;\n\n      .mdc-radio {\n        display: none;\n      }\n\n      label {\n        width: 100%;\n        padding-left: 0;\n      }\n    }\n\n    .mat-mdc-radio-button {\n      border: 1px solid $primary-color;\n      border-radius: 8px;\n      padding: 4px 8px;\n      background-color: var(--primary-background);\n      cursor: pointer;\n      width: 100%;\n      text-align: center;\n\n      label {\n        color: $primary-color;\n        user-select: none;\n        cursor: pointer;\n      }\n    }\n\n    .mat-mdc-radio-checked {\n      background-color: $primary-color;\n\n      label {\n        color: var(--primary-background);\n      }\n    }\n  }\n}\n\n.custom-modal .mat-dialog-content {\n  margin: 0;\n  padding: 24px;\n\n  h2.step-title {\n    text-align: center;\n  }\n\n  .res-item-image {\n    width: 100%;\n    height: 135px;\n    border-radius: 8px 8px 0 0;\n    overflow: hidden;\n\n    img {\n      width: inherit;\n      height: inherit;\n      object-fit: cover;\n      transition: transform 0.3s ease-out;\n    }\n  }\n\n  .res-check {\n    border: 1px solid #fff;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    border-radius: 50%;\n  }\n\n  .res-check .fa-check {\n    background-color: green;\n    color: #fff;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    vertical-align: middle;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n\n  .res-item {\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    border-radius: 8px;\n    margin-bottom: 10px;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n\n    &:hover .res-item-image img {\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n  }\n\n  .res-item-content {\n    padding: 10px;\n\n    .res-title {\n      font-weight: 700;\n      font-size: 16px;\n      color: $primary-color;\n    }\n\n    .res-review, .res-address {\n      font-size: 10px;\n      color: #231F20;\n    }\n\n    .res-address span:not(:last-child){\n      margin-right: 3px;\n    }\n\n    .res-address span:not(:last-child)::after{\n      content: ',';\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 15803:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/evening-activities/evening-activities.component.scss?ngResource ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)), radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%), linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)), url(\"/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg\");\n  background-blend-mode: normal, normal, normal, normal, normal;\n  background-size: cover;\n  height: 275px;\n}\n.step-card .step-info {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .yellow-text {\n  color: rgb(255, 204, 4);\n}\n.step-card .step-card-title {\n  margin-bottom: 8px;\n}\n.step-card .step-card-title p {\n  margin-bottom: 0;\n}\n.step-card .card-header {\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-header .step-name {\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-header .step-separator {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n  margin: 0 8px;\n}\n.step-card .card-header .step-category {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-title {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-details {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item {\n  border: 1px solid rgba(255, 255, 255, 0.56);\n  border-radius: 8px;\n  padding: 15px 10px;\n  height: 100%;\n}\n.step-card .card-body .item .overflow-ellipsis {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 99%;\n}\n.step-card .card-body .item p {\n  margin-bottom: 0;\n}\n.step-card .card-body .item .item-title {\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item .item-hour {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n  opacity: 0.72;\n}\n.step-card .card-body .item .item-resource {\n  font-weight: 700;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .item .acc-dates {\n  font-size: 10px;\n}\n.step-card .card-body .item .acc-details .acc-type, .step-card .card-body .item .acc-details .acc-separator, .step-card .card-body .item .acc-details .acc-room {\n  font-size: 10px;\n  color: #fff;\n}\n.step-card .card-body .item .acc-details .acc-separator {\n  margin: 0px 8px;\n}\n.step-card .card-body .item .acc-details .acc-room {\n  opacity: 0.7;\n}\n.step-card .card-body .time-period {\n  padding: 7px 0px;\n}\n.step-card .card-body .time-period .time-period-number .day-box:not(:last-child) {\n  margin-right: 8px;\n}\n.step-card .card-body .time-period-type {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box {\n  border: 1px solid rgb(255, 255, 255);\n  border-radius: 4px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.step-card .card-body .day-box.selected {\n  opacity: 1;\n}\n.step-card .card-body .day-box span {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box.add-new {\n  border: 1px solid rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.add-new span {\n  color: rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.disabled {\n  opacity: 0.5;\n}\n.step-card .card-footer {\n  cursor: pointer;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-footer a {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF !important;\n  cursor: pointer;\n}\n\n.nav-pills {\n  border: 1px solid rgba(36, 57, 138, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n}\n.nav-pills > .nav-item {\n  flex-grow: 1;\n}\n.nav-pills > .nav-item .nav-link {\n  text-align: center;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 38px;\n  padding: 6px 0;\n  border-radius: 8px;\n}\n.nav-pills > .nav-item .nav-link.active {\n  background-color: #24398A;\n  color: var(--primary-background);\n}\n\n.hour-container > p {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.hour-container .mat-mdc-radio-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field {\n  width: 100%;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field .mdc-radio {\n  display: none;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field label {\n  width: 100%;\n  padding-left: 0;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  padding: 4px 8px;\n  background-color: var(--primary-background);\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button label {\n  color: #24398A;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked {\n  background-color: #24398A;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked label {\n  color: var(--primary-background);\n}\n\n.custom-modal .mat-dialog-content {\n  margin: 0;\n  padding: 24px;\n}\n.custom-modal .mat-dialog-content h2.step-title {\n  text-align: center;\n}\n.custom-modal .mat-dialog-content .res-item-image {\n  width: 100%;\n  height: 135px;\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n.custom-modal .mat-dialog-content .res-item-image img {\n  width: inherit;\n  height: inherit;\n  object-fit: cover;\n  transition: transform 0.3s ease-out;\n}\n.custom-modal .mat-dialog-content .res-check {\n  border: 1px solid #fff;\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n}\n.custom-modal .mat-dialog-content .res-check .fa-check {\n  background-color: green;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-modal .mat-dialog-content .res-item {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.custom-modal .mat-dialog-content .res-item:hover .res-item-image img {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n.custom-modal .mat-dialog-content .res-item-content {\n  padding: 10px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-title {\n  font-weight: 700;\n  font-size: 16px;\n  color: #24398A;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-review, .custom-modal .mat-dialog-content .res-item-content .res-address {\n  font-size: 10px;\n  color: #231F20;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child) {\n  margin-right: 3px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child)::after {\n  content: \",\";\n}\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)), radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%), linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)), url(\"/assets/images/others/itinerary-steps/evening-activities-itineraries-min.jpg\");\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/client-trips-itineraries/_components/itinerary-steps/evening-activities/evening-activities.component.scss","webpack://./src/app/features/client-trips-itineraries/_components/itinerary-steps/steps-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;ACfA;EACE,sBAAA;EACA,sZAAA;EAKA,6DAAA;EACA,sBAAA;EAEA,aAAA;ADaF;ACXE;EACE,eAAA;EACA,uBAAA;EACA,cAAA;ADaJ;ACTE;EACE,uBAAA;ADWJ;ACRE;EACE,kBAAA;ADUJ;ACTI;EACE,gBAAA;ADWN;ACPE;EACE,2GAAA;ADSJ;ACPI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADSN;ACNI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;ADQN;ACLI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADON;ACDI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADGN;ACDI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADGN;ACDI;EACE,2CAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;ADGN;ACDM;EACE,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA;ADGR;ACAM;EACE,gBAAA;ADER;ACCM;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADCR;ACEM;EACE,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;ADAR;ACGM;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADDR;ACIM;EACE,eAAA;ADFR;ACMQ;EACE,eAAA;EACA,WAAA;ADJV;ACOQ;EACE,eAAA;ADLV;ACQQ;EACE,YAAA;ADNV;ACYI;EACE,gBAAA;ADVN;ACYM;EACE,iBAAA;ADVR;ACaI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADXN;ACaI;EACE,oCAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;ADXN;ACaM;EACE,UAAA;ADXR;ACcM;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;ADZR;ACeI;EACE,kCAAA;ADbN;ACcM;EACE,uBAAA;ADZR;ACgBI;EACE,YAAA;ADdN;ACkBE;EACE,eAAA;EACA,2GAAA;ADhBJ;ACkBI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,yBAAA;EACA,eAAA;ADhBN;;ACqBA;EACE,yCAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;ADlBF;ACoBE;EACE,YAAA;ADlBJ;ACoBI;EACE,kBAAA;EACA,cF1MU;EE2MV,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;EACA,cAAA;EACA,kBAAA;ADnBN;ACqBM;EACE,yBFxNQ;EEyNR,gCAAA;ADnBR;;AC2BE;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;ADxBJ;AC2BE;EACE,aAAA;EACA,8BAAA;EACA,SAAA;ADzBJ;AC2BI;EACE,WAAA;ADzBN;AC2BM;EACE,aAAA;ADzBR;AC4BM;EACE,WAAA;EACA,eAAA;AD1BR;AC8BI;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,2CAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AD5BN;AC8BM;EACE,cFnQQ;EEoQR,yBAAA;UAAA,iBAAA;EACA,eAAA;AD5BR;ACgCI;EACE,yBF1QU;AC4OhB;ACgCM;EACE,gCAAA;AD9BR;;ACoCA;EACE,SAAA;EACA,aAAA;ADjCF;ACmCE;EACE,kBAAA;ADjCJ;ACoCE;EACE,WAAA;EACA,aAAA;EACA,0BAAA;EACA,gBAAA;ADlCJ;ACoCI;EACE,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mCAAA;ADlCN;ACsCE;EACE,sBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ADpCJ;ACuCE;EACE,uBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ADrCJ;ACyCE;EACE,yCAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;ADvCJ;ACyCI;EACE,iCAAA;ADvCN;AC2CE;EACE,aAAA;ADzCJ;AC2CI;EACE,gBAAA;EACA,eAAA;EACA,cFnVU;AC0ShB;AC4CI;EACE,eAAA;EACA,cAAA;AD1CN;AC6CI;EACE,iBAAA;AD3CN;AC8CI;EACE,YAAA;AD5CN;;AApTA;EACE,sBAAA;EACA,0ZAAA;AAuTF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../steps-card.component\";\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)),\n  radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%),\n  linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%),\n  linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)),\n  url('/assets/images/others/itinerary-steps/evening-activities-itineraries-min.jpg');\n}\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)),\n  radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%),\n  linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%),\n  linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)),\n  url('/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg');\n  background-blend-mode: normal, normal, normal, normal, normal;\n  background-size: cover;\n\n  height: 275px;\n\n  .step-info {\n    font-size: 10px;\n    letter-spacing: -0.02em;\n    color: #FFFFFF;\n\n  }\n\n  .yellow-text {\n    color: rgba(255, 204, 4, 1);\n  }\n\n  .step-card-title {\n    margin-bottom: 8px;\n    p {\n      margin-bottom: 0;\n    }\n  }\n\n  .card-header {\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%);\n\n    .step-name {\n      font-weight: 500;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n\n    .step-separator {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFCC04;\n      margin: 0 8px;\n    }\n\n    .step-category {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n\n  }\n\n  .card-body {\n    .step-title {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n    .step-details {\n      font-weight: 400;\n      font-size: 10px;\n      letter-spacing: -0.02em;\n      color: #FFCC04;\n    }\n    .item {\n      border: 1px solid rgba(255, 255, 255, 0.56);\n      border-radius: 8px;\n      padding: 15px 10px;\n      height: 100%;\n\n      .overflow-ellipsis {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        width: calc(99%);\n      }\n\n      p {\n        margin-bottom: 0;\n      }\n\n      .item-title {\n        font-weight: 700;\n        font-size: 14px;\n        letter-spacing: -0.02em;\n        color: #FFCC04;\n      }\n\n      .item-hour {\n        font-size: 10px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n        opacity: 0.72;\n      }\n\n      .item-resource {\n        font-weight: 700;\n        font-size: 10px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n      }\n\n      .acc-dates {\n        font-size: 10px;\n      }\n\n      .acc-details {\n        .acc-type, .acc-separator, .acc-room {\n          font-size: 10px;\n          color: #fff;\n        }\n\n        .acc-separator {\n          margin: 0px 8px;\n        }\n\n        .acc-room {\n          opacity: 0.7;\n        }\n      }\n\n\n    }\n    .time-period {\n      padding: 7px 0px;\n\n      .time-period-number .day-box:not(:last-child) {\n        margin-right: 8px;\n      }\n    }\n    .time-period-type {\n      font-weight: 400;\n      font-size: 10px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n    .day-box {\n      border: 1px solid rgba(255, 255, 255, 1);\n      border-radius: 4px;\n      width: 16px;\n      height: 16px;\n      display: flex;\n      justify-content: center;\n      cursor: pointer;\n      opacity: 0.5;\n\n      &.selected {\n        opacity: 1;\n      }\n\n      span {\n        font-weight: 400;\n        font-size: 10px;\n        line-height: 14px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n      }\n    }\n    .day-box.add-new {\n      border: 1px solid rgba(255, 204, 4, 1);\n      span {\n        color: rgba(255, 204, 4, 1);\n      }\n    }\n\n    .day-box.disabled {\n      opacity: 0.5;\n    }\n  }\n\n  .card-footer {\n    cursor: pointer;\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%);\n\n    a {\n      font-weight: 400;\n      font-size: 14px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF !important;\n      cursor: pointer;\n    }\n  }\n}\n\n.nav-pills {\n  border: 1px solid rgba($primary-color, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n\n  & > .nav-item {\n    flex-grow: 1;\n\n    .nav-link {\n      text-align: center;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 20px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      height: 38px;\n      padding: 6px 0;\n      border-radius: 8px;\n\n      &.active {\n        background-color: $primary-color;\n        color: var(--primary-background);\n      }\n    }\n  }\n\n}\n\n.hour-container {\n  & > p {\n    font-size: 16px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .mat-mdc-radio-group {\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n\n    .mdc-form-field {\n      width: 100%;\n\n      .mdc-radio {\n        display: none;\n      }\n\n      label {\n        width: 100%;\n        padding-left: 0;\n      }\n    }\n\n    .mat-mdc-radio-button {\n      border: 1px solid $primary-color;\n      border-radius: 8px;\n      padding: 4px 8px;\n      background-color: var(--primary-background);\n      cursor: pointer;\n      width: 100%;\n      text-align: center;\n\n      label {\n        color: $primary-color;\n        user-select: none;\n        cursor: pointer;\n      }\n    }\n\n    .mat-mdc-radio-checked {\n      background-color: $primary-color;\n\n      label {\n        color: var(--primary-background);\n      }\n    }\n  }\n}\n\n.custom-modal .mat-dialog-content {\n  margin: 0;\n  padding: 24px;\n\n  h2.step-title {\n    text-align: center;\n  }\n\n  .res-item-image {\n    width: 100%;\n    height: 135px;\n    border-radius: 8px 8px 0 0;\n    overflow: hidden;\n\n    img {\n      width: inherit;\n      height: inherit;\n      object-fit: cover;\n      transition: transform 0.3s ease-out;\n    }\n  }\n\n  .res-check {\n    border: 1px solid #fff;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    border-radius: 50%;\n  }\n\n  .res-check .fa-check {\n    background-color: green;\n    color: #fff;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    vertical-align: middle;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n\n  .res-item {\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    border-radius: 8px;\n    margin-bottom: 10px;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n\n    &:hover .res-item-image img {\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n  }\n\n  .res-item-content {\n    padding: 10px;\n\n    .res-title {\n      font-weight: 700;\n      font-size: 16px;\n      color: $primary-color;\n    }\n\n    .res-review, .res-address {\n      font-size: 10px;\n      color: #231F20;\n    }\n\n    .res-address span:not(:last-child){\n      margin-right: 3px;\n    }\n\n    .res-address span:not(:last-child)::after{\n      content: ',';\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 53073:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/transport/transport.component.scss?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)), radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%), linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)), url(\"/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg\");\n  background-blend-mode: normal, normal, normal, normal, normal;\n  background-size: cover;\n  height: 275px;\n}\n.step-card .step-info {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .yellow-text {\n  color: rgb(255, 204, 4);\n}\n.step-card .step-card-title {\n  margin-bottom: 8px;\n}\n.step-card .step-card-title p {\n  margin-bottom: 0;\n}\n.step-card .card-header {\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-header .step-name {\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-header .step-separator {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n  margin: 0 8px;\n}\n.step-card .card-header .step-category {\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-title {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .step-details {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item {\n  border: 1px solid rgba(255, 255, 255, 0.56);\n  border-radius: 8px;\n  padding: 15px 10px;\n  height: 100%;\n}\n.step-card .card-body .item .overflow-ellipsis {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 99%;\n}\n.step-card .card-body .item p {\n  margin-bottom: 0;\n}\n.step-card .card-body .item .item-title {\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFCC04;\n}\n.step-card .card-body .item .item-hour {\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n  opacity: 0.72;\n}\n.step-card .card-body .item .item-resource {\n  font-weight: 700;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .item .acc-dates {\n  font-size: 10px;\n}\n.step-card .card-body .item .acc-details .acc-type, .step-card .card-body .item .acc-details .acc-separator, .step-card .card-body .item .acc-details .acc-room {\n  font-size: 10px;\n  color: #fff;\n}\n.step-card .card-body .item .acc-details .acc-separator {\n  margin: 0px 8px;\n}\n.step-card .card-body .item .acc-details .acc-room {\n  opacity: 0.7;\n}\n.step-card .card-body .time-period {\n  padding: 7px 0px;\n}\n.step-card .card-body .time-period .time-period-number .day-box:not(:last-child) {\n  margin-right: 8px;\n}\n.step-card .card-body .time-period-type {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box {\n  border: 1px solid rgb(255, 255, 255);\n  border-radius: 4px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.step-card .card-body .day-box.selected {\n  opacity: 1;\n}\n.step-card .card-body .day-box span {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF;\n}\n.step-card .card-body .day-box.add-new {\n  border: 1px solid rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.add-new span {\n  color: rgb(255, 204, 4);\n}\n.step-card .card-body .day-box.disabled {\n  opacity: 0.5;\n}\n.step-card .card-footer {\n  cursor: pointer;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%);\n}\n.step-card .card-footer a {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #FFFFFF !important;\n  cursor: pointer;\n}\n\n.nav-pills {\n  border: 1px solid rgba(36, 57, 138, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n}\n.nav-pills > .nav-item {\n  flex-grow: 1;\n}\n.nav-pills > .nav-item .nav-link {\n  text-align: center;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 38px;\n  padding: 6px 0;\n  border-radius: 8px;\n}\n.nav-pills > .nav-item .nav-link.active {\n  background-color: #24398A;\n  color: var(--primary-background);\n}\n\n.hour-container > p {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.hour-container .mat-mdc-radio-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field {\n  width: 100%;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field .mdc-radio {\n  display: none;\n}\n.hour-container .mat-mdc-radio-group .mdc-form-field label {\n  width: 100%;\n  padding-left: 0;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  padding: 4px 8px;\n  background-color: var(--primary-background);\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-button label {\n  color: #24398A;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked {\n  background-color: #24398A;\n}\n.hour-container .mat-mdc-radio-group .mat-mdc-radio-checked label {\n  color: var(--primary-background);\n}\n\n.custom-modal .mat-dialog-content {\n  margin: 0;\n  padding: 24px;\n}\n.custom-modal .mat-dialog-content h2.step-title {\n  text-align: center;\n}\n.custom-modal .mat-dialog-content .res-item-image {\n  width: 100%;\n  height: 135px;\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n.custom-modal .mat-dialog-content .res-item-image img {\n  width: inherit;\n  height: inherit;\n  object-fit: cover;\n  transition: transform 0.3s ease-out;\n}\n.custom-modal .mat-dialog-content .res-check {\n  border: 1px solid #fff;\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n}\n.custom-modal .mat-dialog-content .res-check .fa-check {\n  background-color: green;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-modal .mat-dialog-content .res-item {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.custom-modal .mat-dialog-content .res-item:hover .res-item-image img {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n.custom-modal .mat-dialog-content .res-item-content {\n  padding: 10px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-title {\n  font-weight: 700;\n  font-size: 16px;\n  color: #24398A;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-review, .custom-modal .mat-dialog-content .res-item-content .res-address {\n  font-size: 10px;\n  color: #231F20;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child) {\n  margin-right: 3px;\n}\n.custom-modal .mat-dialog-content .res-item-content .res-address span:not(:last-child)::after {\n  content: \",\";\n}\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)), radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%), linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)), url(\"/assets/images/others/itinerary-steps/transport-itineraries.jpg-min.jpg\");\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/client-trips-itineraries/_components/itinerary-steps/transport/transport.component.scss","webpack://./src/app/features/client-trips-itineraries/_components/itinerary-steps/steps-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;ACfA;EACE,sBAAA;EACA,sZAAA;EAKA,6DAAA;EACA,sBAAA;EAEA,aAAA;ADaF;ACXE;EACE,eAAA;EACA,uBAAA;EACA,cAAA;ADaJ;ACTE;EACE,uBAAA;ADWJ;ACRE;EACE,kBAAA;ADUJ;ACTI;EACE,gBAAA;ADWN;ACPE;EACE,2GAAA;ADSJ;ACPI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADSN;ACNI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;ADQN;ACLI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADON;ACDI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADGN;ACDI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADGN;ACDI;EACE,2CAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;ADGN;ACDM;EACE,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA;ADGR;ACAM;EACE,gBAAA;ADER;ACCM;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADCR;ACEM;EACE,eAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;ADAR;ACGM;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADDR;ACIM;EACE,eAAA;ADFR;ACMQ;EACE,eAAA;EACA,WAAA;ADJV;ACOQ;EACE,eAAA;ADLV;ACQQ;EACE,YAAA;ADNV;ACYI;EACE,gBAAA;ADVN;ACYM;EACE,iBAAA;ADVR;ACaI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADXN;ACaI;EACE,oCAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;ADXN;ACaM;EACE,UAAA;ADXR;ACcM;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;ADZR;ACeI;EACE,kCAAA;ADbN;ACcM;EACE,uBAAA;ADZR;ACgBI;EACE,YAAA;ADdN;ACkBE;EACE,eAAA;EACA,2GAAA;ADhBJ;ACkBI;EACE,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,yBAAA;EACA,eAAA;ADhBN;;ACqBA;EACE,yCAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;ADlBF;ACoBE;EACE,YAAA;ADlBJ;ACoBI;EACE,kBAAA;EACA,cF1MU;EE2MV,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;EACA,cAAA;EACA,kBAAA;ADnBN;ACqBM;EACE,yBFxNQ;EEyNR,gCAAA;ADnBR;;AC2BE;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;ADxBJ;AC2BE;EACE,aAAA;EACA,8BAAA;EACA,SAAA;ADzBJ;AC2BI;EACE,WAAA;ADzBN;AC2BM;EACE,aAAA;ADzBR;AC4BM;EACE,WAAA;EACA,eAAA;AD1BR;AC8BI;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,2CAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AD5BN;AC8BM;EACE,cFnQQ;EEoQR,yBAAA;UAAA,iBAAA;EACA,eAAA;AD5BR;ACgCI;EACE,yBF1QU;AC4OhB;ACgCM;EACE,gCAAA;AD9BR;;ACoCA;EACE,SAAA;EACA,aAAA;ADjCF;ACmCE;EACE,kBAAA;ADjCJ;ACoCE;EACE,WAAA;EACA,aAAA;EACA,0BAAA;EACA,gBAAA;ADlCJ;ACoCI;EACE,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mCAAA;ADlCN;ACsCE;EACE,sBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ADpCJ;ACuCE;EACE,uBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ADrCJ;ACyCE;EACE,yCAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;ADvCJ;ACyCI;EACE,iCAAA;ADvCN;AC2CE;EACE,aAAA;ADzCJ;AC2CI;EACE,gBAAA;EACA,eAAA;EACA,cFnVU;AC0ShB;AC4CI;EACE,eAAA;EACA,cAAA;AD1CN;AC6CI;EACE,iBAAA;AD3CN;AC8CI;EACE,YAAA;AD5CN;;AApTA;EACE,sBAAA;EACA,qZAAA;AAuTF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../steps-card.component\";\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)),\n  radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%),\n  linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%),\n  linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)),\n  url('/assets/images/others/itinerary-steps/transport-itineraries.jpg-min.jpg');\n}\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.step-card {\n  background-size: cover;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.8), rgba(36, 57, 138, 0.8)),\n  radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0) 100%),\n  linear-gradient(270deg, rgba(36, 57, 138, 0) 0%, rgba(36, 57, 138, 0) 100%),\n  linear-gradient(0deg, rgba(36, 57, 138, 0.7), rgba(36, 57, 138, 0.7)),\n  url('/assets/images/others/itinerary-steps/eat-and-drinks-itineraries-min.jpg');\n  background-blend-mode: normal, normal, normal, normal, normal;\n  background-size: cover;\n\n  height: 275px;\n\n  .step-info {\n    font-size: 10px;\n    letter-spacing: -0.02em;\n    color: #FFFFFF;\n\n  }\n\n  .yellow-text {\n    color: rgba(255, 204, 4, 1);\n  }\n\n  .step-card-title {\n    margin-bottom: 8px;\n    p {\n      margin-bottom: 0;\n    }\n  }\n\n  .card-header {\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%);\n\n    .step-name {\n      font-weight: 500;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n\n    .step-separator {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFCC04;\n      margin: 0 8px;\n    }\n\n    .step-category {\n      font-weight: 400;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n\n  }\n\n  .card-body {\n    .step-title {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n    .step-details {\n      font-weight: 400;\n      font-size: 10px;\n      letter-spacing: -0.02em;\n      color: #FFCC04;\n    }\n    .item {\n      border: 1px solid rgba(255, 255, 255, 0.56);\n      border-radius: 8px;\n      padding: 15px 10px;\n      height: 100%;\n\n      .overflow-ellipsis {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        width: calc(99%);\n      }\n\n      p {\n        margin-bottom: 0;\n      }\n\n      .item-title {\n        font-weight: 700;\n        font-size: 14px;\n        letter-spacing: -0.02em;\n        color: #FFCC04;\n      }\n\n      .item-hour {\n        font-size: 10px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n        opacity: 0.72;\n      }\n\n      .item-resource {\n        font-weight: 700;\n        font-size: 10px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n      }\n\n      .acc-dates {\n        font-size: 10px;\n      }\n\n      .acc-details {\n        .acc-type, .acc-separator, .acc-room {\n          font-size: 10px;\n          color: #fff;\n        }\n\n        .acc-separator {\n          margin: 0px 8px;\n        }\n\n        .acc-room {\n          opacity: 0.7;\n        }\n      }\n\n\n    }\n    .time-period {\n      padding: 7px 0px;\n\n      .time-period-number .day-box:not(:last-child) {\n        margin-right: 8px;\n      }\n    }\n    .time-period-type {\n      font-weight: 400;\n      font-size: 10px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n    }\n    .day-box {\n      border: 1px solid rgba(255, 255, 255, 1);\n      border-radius: 4px;\n      width: 16px;\n      height: 16px;\n      display: flex;\n      justify-content: center;\n      cursor: pointer;\n      opacity: 0.5;\n\n      &.selected {\n        opacity: 1;\n      }\n\n      span {\n        font-weight: 400;\n        font-size: 10px;\n        line-height: 14px;\n        letter-spacing: -0.02em;\n        color: #FFFFFF;\n      }\n    }\n    .day-box.add-new {\n      border: 1px solid rgba(255, 204, 4, 1);\n      span {\n        color: rgba(255, 204, 4, 1);\n      }\n    }\n\n    .day-box.disabled {\n      opacity: 0.5;\n    }\n  }\n\n  .card-footer {\n    cursor: pointer;\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%);\n\n    a {\n      font-weight: 400;\n      font-size: 14px;\n      letter-spacing: -0.02em;\n      color: #FFFFFF !important;\n      cursor: pointer;\n    }\n  }\n}\n\n.nav-pills {\n  border: 1px solid rgba($primary-color, 0.48);\n  border-radius: 12px;\n  padding: 4px;\n  height: 48px;\n\n  & > .nav-item {\n    flex-grow: 1;\n\n    .nav-link {\n      text-align: center;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 20px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      height: 38px;\n      padding: 6px 0;\n      border-radius: 8px;\n\n      &.active {\n        background-color: $primary-color;\n        color: var(--primary-background);\n      }\n    }\n  }\n\n}\n\n.hour-container {\n  & > p {\n    font-size: 16px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .mat-mdc-radio-group {\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n\n    .mdc-form-field {\n      width: 100%;\n\n      .mdc-radio {\n        display: none;\n      }\n\n      label {\n        width: 100%;\n        padding-left: 0;\n      }\n    }\n\n    .mat-mdc-radio-button {\n      border: 1px solid $primary-color;\n      border-radius: 8px;\n      padding: 4px 8px;\n      background-color: var(--primary-background);\n      cursor: pointer;\n      width: 100%;\n      text-align: center;\n\n      label {\n        color: $primary-color;\n        user-select: none;\n        cursor: pointer;\n      }\n    }\n\n    .mat-mdc-radio-checked {\n      background-color: $primary-color;\n\n      label {\n        color: var(--primary-background);\n      }\n    }\n  }\n}\n\n.custom-modal .mat-dialog-content {\n  margin: 0;\n  padding: 24px;\n\n  h2.step-title {\n    text-align: center;\n  }\n\n  .res-item-image {\n    width: 100%;\n    height: 135px;\n    border-radius: 8px 8px 0 0;\n    overflow: hidden;\n\n    img {\n      width: inherit;\n      height: inherit;\n      object-fit: cover;\n      transition: transform 0.3s ease-out;\n    }\n  }\n\n  .res-check {\n    border: 1px solid #fff;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    border-radius: 50%;\n  }\n\n  .res-check .fa-check {\n    background-color: green;\n    color: #fff;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    vertical-align: middle;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n\n  .res-item {\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    border-radius: 8px;\n    margin-bottom: 10px;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n\n    &:hover .res-item-image img {\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n  }\n\n  .res-item-content {\n    padding: 10px;\n\n    .res-title {\n      font-weight: 700;\n      font-size: 16px;\n      color: $primary-color;\n    }\n\n    .res-review, .res-address {\n      font-size: 10px;\n      color: #231F20;\n    }\n\n    .res-address span:not(:last-child){\n      margin-right: 3px;\n    }\n\n    .res-address span:not(:last-child)::after{\n      content: ',';\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 13646:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/city-select/city-select.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.categories-container h1 {\n  margin-bottom: 48px;\n}\n.categories-container h2 {\n  font-size: 24px;\n  margin-bottom: 32px;\n}\n\n:host ::ng-deep .cities-container .mat-mdc-radio-group {\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n}\n:host ::ng-deep .cities-container .mat-mdc-radio-group .mdc-form-field {\n  width: 100%;\n}\n:host ::ng-deep .cities-container .mat-mdc-radio-group .mdc-form-field .mdc-radio {\n  display: none;\n}\n:host ::ng-deep .cities-container .mat-mdc-radio-group .mdc-form-field label {\n  width: 100%;\n  padding-left: 0;\n}\n\n.trips-container {\n  display: flex;\n  flex-direction: column;\n}\n.trips-container h2 {\n  color: #231F20;\n  font-weight: 400;\n}\n.trips-container h2 span {\n  font-weight: 600;\n  color: #24398A;\n}\n.trips-container h3 {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n:host ::ng-deep .trips-container .accordion {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n:host ::ng-deep .trips-container .accordion-item {\n  overflow: hidden;\n  border: 1px solid #24398A;\n  border-radius: 8px;\n}\n\n.trip-item {\n  width: 100%;\n  height: 57px;\n  border: none;\n  background-color: var(--primary-background);\n  text-align: start;\n  padding: 9px;\n  transition: ease-in-out 0.3s;\n}\n.trip-item:hover {\n  background: rgba(36, 57, 138, 0.25);\n}\n.trip-item .trip-title {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 140%;\n  color: #24398A;\n  margin-bottom: 0;\n}\n.trip-item .trip-price {\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0;\n}\n.trip-item .trip-price span:first-child {\n  font-weight: 400;\n  color: #34A853;\n}\n.trip-item .trip-price span:nth-child(2) {\n  font-weight: 400;\n  font-size: 10px;\n  color: #231F20;\n  opacity: 0.56;\n}\n\n.trip-item.opened {\n  background-color: #24398A;\n}\n.trip-item.opened .trip-title {\n  color: var(--primary-background);\n}\n.trip-item.opened .trip-price {\n  color: var(--primary-background);\n}\n.trip-item.opened .trip-price span:nth-child(2) {\n  color: var(--primary-background);\n}\n\n.guests-container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.guests-container .guests-selector {\n  display: flex;\n  flex-shrink: 0;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border: 1px solid #858495;\n  border-radius: 8px;\n}\n.guests-container .guests-selector.invalid {\n  border-color: #E64335;\n  color: #E64335;\n}\n.guests-container .guests-selector button {\n  border: 1px solid #858495;\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.guests-container .guests-selector button i {\n  color: #24398A;\n  font-size: 24px;\n}\n.guests-container .guests-selector button:hover {\n  background-color: #24398A;\n  transition: 0.3s ease-in-out;\n}\n.guests-container .guests-selector button:hover i {\n  color: var(--primary-background);\n}\n.guests-container .guests-selector button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.guests-container .guests-selector p {\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n\nbutton.continue {\n  margin-top: 24px;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0 72px;\n  margin-left: auto;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/client-trips-itineraries/city-select/city-select.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;AAkBJ;AAdE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAgBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF;;AAXE;EACE,mBAAA;AAcJ;AAXE;EACE,eAAA;EACA,mBAAA;AAaJ;;AARE;EACE,aAAA;EACA,sBAAA;EACA,aAAA;AAWJ;AATI;EACE,WAAA;AAWN;AATM;EACE,aAAA;AAWR;AARM;EACE,WAAA;EACA,eAAA;AAUR;;AAJA;EACE,aAAA;EACA,sBAAA;AAOF;AALE;EACE,cDlEI;ECmEJ,gBAAA;AAOJ;AALI;EACE,gBAAA;EACA,cD3EU;ACkFhB;AAHE;EACE,eAAA;EACA,gBAAA;AAKJ;;AADA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAIF;;AADA;EACE,gBAAA;EACA,yBAAA;EACA,kBAAA;AAIF;;AADA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,2CAAA;EACA,iBAAA;EACA,YAAA;EACA,4BAAA;AAIF;AAFE;EACE,mCAAA;AAIJ;AADE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDlHY;ECmHZ,gBAAA;AAGJ;AAAE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDrHQ;ECsHR,gBAAA;AAEJ;AAAI;EACE,gBAAA;EACA,cDlFY;ACoFlB;AACI;EACE,gBAAA;EACA,eAAA;EACA,cDhIM;ECiIN,aAAA;AACN;;AAIA;EACE,yBD5Ic;AC2IhB;AAGE;EACE,gCAAA;AADJ;AAIE;EACE,gCAAA;AAFJ;AAII;EACE,gCAAA;AAFN;;AAOA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;AAJF;AAME;EACE,aAAA;EACA,cAAA;EACA,YAAA;EACA,mBAAA;EACA,8BAAA;EACA,aAAA;EAEA,yBAAA;EACA,kBAAA;AALJ;AAOI;EACE,qBD9Hc;EC+Hd,cD/Hc;AC0HpB;AAQI;EACE,yBAAA;EACA,2CAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AANN;AAQM;EACE,cD5LQ;EC6LR,eAAA;AANR;AASM;EACE,yBDjMQ;ECkMR,4BAAA;AAPR;AAQQ;EACE,gCAAA;AANV;AAUM;EACE,mBAAA;EACA,YAAA;AARR;AAYI;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AAVN;;AAeA;EACE,gBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,eAAA;EACA,iBAAA;AAZF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    //background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.categories-container {\n  h1 {\n    margin-bottom: 48px;\n  }\n\n  h2 {\n    font-size: 24px;\n    margin-bottom: 32px;\n  }\n}\n\n:host ::ng-deep .cities-container {\n  .mat-mdc-radio-group {\n    display: flex;\n    flex-direction: column;\n    row-gap: 24px;\n\n    .mdc-form-field {\n      width: 100%;\n\n      .mdc-radio {\n        display: none;\n      }\n\n      label {\n        width: 100%;\n        padding-left: 0;\n      }\n    }\n  }\n}\n\n.trips-container {\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    color: $title;\n    font-weight: 400;\n\n    span {\n      font-weight: 600;\n      color: $primary-color;\n    }\n  }\n\n  h3 {\n    font-size: 16px;\n    font-weight: 400;\n  }\n}\n\n:host ::ng-deep .trips-container .accordion {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n:host ::ng-deep .trips-container .accordion-item {\n  overflow: hidden;\n  border: 1px solid $primary-color;\n  border-radius: 8px;\n}\n\n.trip-item {\n  width: 100%;\n  height: 57px;\n  border: none;\n  background-color: var(--primary-background);\n  text-align: start;\n  padding: 9px;\n  transition: ease-in-out 0.3s;\n\n  &:hover {\n    background: rgba($primary-color, 25%);\n  }\n\n  .trip-title {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 140%;\n    color: $primary-color;\n    margin-bottom: 0;\n  }\n\n  .trip-price {\n    font-weight: 700;\n    font-size: 12px;\n    line-height: 140%;\n    color: $paragraph;\n    margin-bottom: 0;\n\n    span:first-child {\n      font-weight: 400;\n      color: $active-btn-color;\n    }\n\n    span:nth-child(2) {\n      font-weight: 400;\n      font-size: 10px;\n      color: $paragraph;\n      opacity: 0.56;\n    }\n  }\n}\n\n.trip-item.opened {\n  background-color: $primary-color;\n\n  .trip-title {\n    color: var(--primary-background);\n  }\n\n  .trip-price {\n    color: var(--primary-background);\n\n    span:nth-child(2) {\n      color: var(--primary-background);\n    }\n  }\n}\n\n.guests-container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n\n  .guests-selector {\n    display: flex;\n    flex-shrink: 0;\n    flex-grow: 1;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n\n    border: 1px solid $inactive-color;\n    border-radius: 8px;\n\n    &.invalid {\n      border-color: $disabled-btn-color;\n      color: $disabled-btn-color;\n    }\n\n    button {\n      border: 1px solid $inactive-color;\n      background-color: var(--primary-background);\n      border-radius: 8px;\n      width: 40px;\n      height: 40px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      i {\n        color: $primary-color;\n        font-size: 24px;\n      }\n\n      &:hover {\n        background-color: $primary-color;\n        transition: 0.3s ease-in-out;\n        i {\n          color: var(--primary-background);\n        }\n      }\n\n      &:disabled {\n        cursor: not-allowed;\n        opacity: 0.5;\n      }\n    }\n\n    p {\n      margin-bottom: 0;\n      font-size: 16px;\n      font-weight: 700;\n    }\n  }\n}\n\nbutton.continue {\n  margin-top: 24px;\n  width: fit-content;\n  padding: 0 72px;\n  margin-left: auto;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 68488:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/country-select/country-select.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.categories-container h1 {\n  margin-bottom: 48px;\n}\n.categories-container .row {\n  row-gap: 24px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/client-trips-itineraries/country-select/country-select.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;AAkBJ;AAdE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAgBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF;;AAXE;EACE,mBAAA;AAcJ;AAXE;EACE,aAAA;AAaJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    //background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.categories-container {\n  h1 {\n    margin-bottom: 48px;\n  }\n\n  .row {\n    row-gap: 24px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33545:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/edit-itinerary/edit-itinerary.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.row {\n  row-gap: 24px;\n}\n\n.price-container {\n  display: flex;\n  align-items: center;\n}\n.price-container .price {\n  color: #24398A;\n  height: 60px;\n  padding: 0 24px;\n  border-bottom: 1px solid #24398A;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n.price-container .price p {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 140%;\n}\n.price-container .price span {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 140%;\n}\n.price-container button {\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/client-trips-itineraries/edit-itinerary/edit-itinerary.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;AAkBJ;AAdE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAgBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF;;AAZA;EACE,aAAA;AAeF;;AAZA;EACE,aAAA;EACA,mBAAA;AAeF;AAbE;EACE,cD1CY;EC2CZ,YAAA;EACA,eAAA;EACA,gCAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,YAAA;AAeJ;AAbI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAeN;AAZI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAcN;AAVE;EACE,oHAAA;AAYJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    //background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.row {\n  row-gap: 24px;\n}\n\n.price-container {\n  display: flex;\n  align-items: center;\n\n  .price {\n    color: $primary-color;\n    height: 60px;\n    padding: 0 24px;\n    border-bottom: 1px solid $primary-color;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-grow: 1;\n\n    p {\n      font-weight: 700;\n      font-size: 20px;\n      line-height: 140%;\n    }\n\n    span {\n      font-weight: 700;\n      font-size: 32px;\n      line-height: 140%;\n    }\n  }\n\n  button {\n    background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.56) 0%, rgba(0, 178, 255, 0) 100%), $primary-color;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 89016:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/itineraries-theme/itineraries-theme.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n:host ::ng-deep .outer-accordion-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n:host ::ng-deep .outer-accordion-container > .accordion-item {\n  overflow: hidden;\n  border: 1px solid #24398A;\n  border-radius: 8px;\n}\n\n:host ::ng-deep .outer-accordion-container > .accordion-item:has(> div.bg-warning) {\n  border: 1px solid red;\n}\n:host ::ng-deep .outer-accordion-container > .accordion-item:has(> div.bg-warning) .destination-panel button {\n  background-color: red;\n}\n\n:host ::ng-deep .outer-accordion-container > .accordion-item .accordion-body {\n  padding: 0;\n}\n\n.outer-accordion-header {\n  width: 100%;\n  border: none;\n  background: none;\n}\n\n:host ::ng-deep .outer-accordion-header app-category-card .category {\n  border-radius: 0 !important;\n}\n\n:host ::ng-deep .inner-accordion-container > .accordion-item {\n  border-radius: 0;\n}\n\n.panel-header-step {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  border: none;\n  background-color: transparent;\n}\n.panel-header-step span {\n  height: 100%;\n  color: #24398A;\n  background-color: rgba(36, 57, 138, 0.16);\n  font-size: 16px;\n  font-weight: 700;\n  width: 100px;\n  line-height: 100px;\n}\n.panel-header-step p {\n  margin-bottom: 0;\n  color: #231F20;\n  font-size: 14px;\n  font-weight: 400;\n  flex-grow: 1;\n  text-align: start;\n  margin-left: 35px;\n}\n.panel-header-step i {\n  display: none;\n  font-size: 24px;\n  color: red;\n  margin-right: 35px;\n}\n.panel-header-step.panel-warning p {\n  color: red;\n}\n.panel-header-step.panel-warning i {\n  display: inline-block;\n}\n\n.destination-panel {\n  height: 40px;\n}\n.destination-panel button {\n  border: none;\n  background-color: #24398A;\n  color: white;\n  font-size: 16px;\n  font-weight: 700;\n  height: inherit;\n}\n.destination-panel button:first-child {\n  flex-grow: 1;\n  padding: 0 8px;\n}\n.destination-panel button:first-child p {\n  text-align: start;\n}\n.destination-panel button:last-child {\n  padding: 0 8px;\n}\n\n.btn-add-destination {\n  border: 1px dashed #24398A;\n  border-radius: 8px;\n  width: 100%;\n  height: 40px;\n  color: #24398A;\n  background-color: white;\n  font-size: 16px;\n  font-weight: 700;\n}\n.btn-add-destination:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .custom-itinerary-radio-group {\n  display: flex;\n  flex-direction: column;\n}\n:host ::ng-deep .custom-itinerary-radio-group .mdc-form-field {\n  width: 100%;\n}\n:host ::ng-deep .custom-itinerary-radio-group .mdc-form-field .mdc-radio {\n  display: none;\n}\n:host ::ng-deep .custom-itinerary-radio-group .mdc-form-field label {\n  width: 100%;\n  padding-left: 0;\n}\n\n:host ::ng-deep .inner-accordion-container > .accordion-item {\n  border-radius: 0;\n  border: none;\n}\n\n:host ::ng-deep .custom-itinerary-radio-group app-category-card .category {\n  border-radius: 0;\n}\n\n:host ::ng-deep .custom-itinerary-radio-group app-category-card .category .selected-icon {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n:host ::ng-deep .custom-itinerary-radio-group app-category-card .category .text-background {\n  height: 100%;\n}\n\n.generate-itinerary {\n  width: 100%;\n  height: 100px;\n  border-radius: 0;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.mat-form-field {\n  width: 100% !important;\n}\n\n.guests-container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.guests-container .guests-selector {\n  display: flex;\n  flex-shrink: 0;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border: 1px solid #858495;\n  border-radius: 8px;\n}\n.guests-container .guests-selector button {\n  border: 1px solid #858495;\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.guests-container .guests-selector button i {\n  color: #24398A;\n  font-size: 24px;\n}\n.guests-container .guests-selector button:hover {\n  background-color: #24398A;\n  transition: 0.3s ease-in-out;\n}\n.guests-container .guests-selector button:hover i {\n  color: var(--primary-background);\n}\n.guests-container .guests-selector button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.guests-container .guests-selector p {\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.row-gap-24 {\n  row-gap: 24px;\n}\n\n:host ::ng-deep .hour-container > p {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n:host ::ng-deep .hour-container .mat-mdc-radio-group {\n  display: flex;\n  gap: 24px;\n}\n:host ::ng-deep .hour-container .mat-mdc-radio-group .mdc-form-field {\n  width: 100%;\n}\n:host ::ng-deep .hour-container .mat-mdc-radio-group .mdc-form-field .mdc-radio {\n  display: none;\n}\n:host ::ng-deep .hour-container .mat-mdc-radio-group .mdc-form-field label {\n  width: 100%;\n  padding-left: 0;\n}\n:host ::ng-deep .hour-container .mat-mdc-radio-group .mat-mdc-radio-button {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  padding: 4px 8px;\n  background-color: var(--primary-background);\n  cursor: pointer;\n}\n:host ::ng-deep .hour-container .mat-mdc-radio-group .mat-mdc-radio-button label {\n  color: #24398A;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n:host ::ng-deep .hour-container .mat-mdc-radio-group .mat-mdc-radio-checked {\n  background-color: #24398A;\n}\n:host ::ng-deep .hour-container .mat-mdc-radio-group .mat-mdc-radio-checked label {\n  color: var(--primary-background);\n}\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n}\n.destination-element p {\n  color: #858495;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.destination-element .destination-icon {\n  border: 1px solid #858495;\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.destination-element .destination-icon i {\n  color: #858495;\n  font-size: 22px;\n}\n.destination-element:hover, .destination-element:focus {\n  background-color: rgba(36, 57, 138, 0.2);\n  transition: 0.3s ease-in-out;\n  outline: transparent;\n}\n.destination-element:hover .destination-icon, .destination-element:focus .destination-icon {\n  border: 1px solid #24398A;\n  background-color: var(--primary-background);\n}\n.destination-element:hover .destination-icon i, .destination-element:focus .destination-icon i {\n  color: #24398A;\n}\n.destination-element:hover p, .destination-element:focus p {\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/client-trips-itineraries/itineraries-theme/itineraries-theme.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;AAkBJ;AAdE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAgBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF;;AAZA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAeF;;AAZA;EACE,gBAAA;EACA,yBAAA;EACA,kBAAA;AAeF;;AAZA;EACE,qBAAA;AAeF;AAbE;EACE,qBAAA;AAeJ;;AAXA;EACE,UAAA;AAcF;;AAXA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;AAcF;;AAXA;EACE,2BAAA;AAcF;;AAXA;EACE,gBAAA;AAcF;;AAXA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,6BAAA;AAcF;AAZE;EACE,YAAA;EACA,cDjFY;ECkFZ,yCAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;AAcJ;AAXE;EACE,gBAAA;EACA,cDtFQ;ECuFR,eAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;AAaJ;AAVE;EACE,aAAA;EACA,eAAA;EACA,UAAA;EACA,kBAAA;AAYJ;AARI;EACE,UAAA;AAUN;AAPI;EACE,qBAAA;AASN;;AAJA;EACE,YAAA;AAOF;AALE;EACE,YAAA;EACA,yBD1HY;EC2HZ,YAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AAOJ;AAJE;EACE,YAAA;EACA,cAAA;AAMJ;AAJI;EACE,iBAAA;AAMN;AAFE;EACE,cAAA;AAIJ;;AAAA;EACE,0BAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cDpJc;ECqJd,uBAAA;EACA,eAAA;EACA,gBAAA;AAGF;AADE;EACE,YAAA;EACA,mBAAA;AAGJ;;AACA;EACI,aAAA;EACA,sBAAA;AAEJ;AAAI;EACE,WAAA;AAEN;AAAM;EACE,aAAA;AAER;AACM;EACE,WAAA;EACA,eAAA;AACR;;AAIA;EACE,gBAAA;EACA,YAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,QAAA;EACA,2BAAA;AADF;;AAIA;EACE,YAAA;AADF;;AAIA;EACE,WAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;AADF;;AAIA;EACE,sBAAA;AADF;;AAIA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;AADF;AAGE;EACE,aAAA;EACA,cAAA;EACA,YAAA;EACA,mBAAA;EACA,8BAAA;EACA,aAAA;EAEA,yBAAA;EACA,kBAAA;AAFJ;AAII;EACE,yBAAA;EACA,2CAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAFN;AAIM;EACE,cD3OQ;EC4OR,eAAA;AAFR;AAKM;EACE,yBDhPQ;ECiPR,4BAAA;AAHR;AAIQ;EACE,gCAAA;AAFV;AAMM;EACE,mBAAA;EACA,YAAA;AAJR;AAQI;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AANN;;AAWA;EACE,aAAA;AARF;;AAYE;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;AATJ;AAYE;EACE,aAAA;EACA,SAAA;AAVJ;AAYI;EACE,WAAA;AAVN;AAYM;EACE,aAAA;AAVR;AAaM;EACE,WAAA;EACA,eAAA;AAXR;AAeI;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,2CAAA;EACA,eAAA;AAbN;AAeM;EACE,cDzSQ;EC0SR,yBAAA;UAAA,iBAAA;EACA,eAAA;AAbR;AAiBI;EACE,yBDhTU;ACiShB;AAiBM;EACE,gCAAA;AAfR;;AAqBA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AAlBF;;AAqBA;EACE,eAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,iBAAA;EACA,SAAA;AAlBF;AAoBE;EACE,cD9SY;EC+SZ,eAAA;EACA,gBAAA;EACA,gBAAA;AAlBJ;AAqBE;EACE,yBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAnBJ;AAqBI;EACE,cD9TU;EC+TV,eAAA;AAnBN;AAuBE;EACE,wCAAA;EACA,4BAAA;EACA,oBAAA;AArBJ;AAuBI;EACE,yBAAA;EACA,2CAAA;AArBN;AAsBM;EACE,cDvWQ;ACmVhB;AAwBI;EACE,cDvWM;ACiVZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    //background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n:host ::ng-deep .outer-accordion-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n:host ::ng-deep .outer-accordion-container > .accordion-item {\n  overflow: hidden;\n  border: 1px solid $primary-color;\n  border-radius: 8px;\n}\n\n:host ::ng-deep .outer-accordion-container > .accordion-item:has(> div.bg-warning) {\n  border: 1px solid red;\n\n  .destination-panel button {\n    background-color: red;\n  }\n}\n\n:host ::ng-deep .outer-accordion-container > .accordion-item .accordion-body {\n  padding: 0;\n}\n\n.outer-accordion-header {\n  width: 100%;\n  border: none;\n  background: none;\n}\n\n:host ::ng-deep .outer-accordion-header app-category-card .category {\n  border-radius: 0 !important;\n}\n\n:host ::ng-deep .inner-accordion-container > .accordion-item {\n  border-radius: 0;\n}\n\n.panel-header-step {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  border: none;\n  background-color: transparent;\n\n  span {\n    height: 100%;\n    color: $primary-color;\n    background-color: rgba($primary-color, 0.16);\n    font-size: 16px;\n    font-weight: 700;\n    width: 100px;\n    line-height: 100px;\n  }\n\n  p {\n    margin-bottom: 0;\n    color: $paragraph;\n    font-size: 14px;\n    font-weight: 400;\n    flex-grow: 1;\n    text-align: start;\n    margin-left: 35px;\n  }\n\n  i {\n    display: none;\n    font-size: 24px;\n    color: red;\n    margin-right: 35px;\n  }\n\n  &.panel-warning {\n    p {\n      color: red;\n    }\n\n    i {\n      display: inline-block;\n    }\n  }\n}\n\n.destination-panel {\n  height: 40px;\n\n  button {\n    border: none;\n    background-color: $primary-color;\n    color: white;\n    font-size: 16px;\n    font-weight: 700;\n    height: inherit;\n  }\n\n  button:first-child {\n    flex-grow: 1;\n    padding: 0 8px;\n\n    p {\n      text-align: start;\n    }\n  }\n\n  button:last-child {\n    padding: 0 8px;\n  }\n}\n\n.btn-add-destination {\n  border: 1px dashed $primary-color;\n  border-radius: 8px;\n  width: 100%;\n  height: 40px;\n  color: $primary-color;\n  background-color: white;\n  font-size: 16px;\n  font-weight: 700;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n}\n\n:host ::ng-deep .custom-itinerary-radio-group {\n    display: flex;\n    flex-direction: column;\n\n    .mdc-form-field {\n      width: 100%;\n\n      .mdc-radio {\n        display: none;\n      }\n\n      label {\n        width: 100%;\n        padding-left: 0;\n      }\n    }\n}\n\n:host ::ng-deep .inner-accordion-container > .accordion-item {\n  border-radius: 0;\n  border: none;\n}\n\n:host ::ng-deep .custom-itinerary-radio-group app-category-card .category {\n  border-radius: 0;\n}\n\n:host ::ng-deep .custom-itinerary-radio-group app-category-card .category .selected-icon {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n:host ::ng-deep .custom-itinerary-radio-group app-category-card .category .text-background {\n  height: 100%;\n}\n\n.generate-itinerary {\n  width: 100%;\n  height: 100px;\n  border-radius: 0;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.mat-form-field {\n  width: 100% !important;\n}\n\n.guests-container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n\n  .guests-selector {\n    display: flex;\n    flex-shrink: 0;\n    flex-grow: 1;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n\n    border: 1px solid $inactive-color;\n    border-radius: 8px;\n\n    button {\n      border: 1px solid $inactive-color;\n      background-color: var(--primary-background);\n      border-radius: 8px;\n      width: 40px;\n      height: 40px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      i {\n        color: $primary-color;\n        font-size: 24px;\n      }\n\n      &:hover {\n        background-color: $primary-color;\n        transition: 0.3s ease-in-out;\n        i {\n          color: var(--primary-background);\n        }\n      }\n\n      &:disabled {\n        cursor: not-allowed;\n        opacity: 0.5;\n      }\n    }\n\n    p {\n      margin-bottom: 0;\n      font-size: 16px;\n      font-weight: 700;\n    }\n  }\n}\n\n.row-gap-24 {\n  row-gap: 24px;\n}\n\n:host ::ng-deep .hour-container {\n  & > p {\n    font-size: 16px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .mat-mdc-radio-group {\n    display: flex;\n    gap: 24px;\n\n    .mdc-form-field {\n      width: 100%;\n\n      .mdc-radio {\n        display: none;\n      }\n\n      label {\n        width: 100%;\n        padding-left: 0;\n      }\n    }\n\n    .mat-mdc-radio-button {\n      border: 1px solid $primary-color;\n      border-radius: 8px;\n      padding: 4px 8px;\n      background-color: var(--primary-background);\n      cursor: pointer;\n\n      label {\n        color: $primary-color;\n        user-select: none;\n        cursor: pointer;\n      }\n    }\n\n    .mat-mdc-radio-checked {\n      background-color: $primary-color;\n\n      label {\n        color: var(--primary-background);\n      }\n    }\n  }\n}\n\n.destinations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.destination-element {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 5px;\n  gap: 16px;\n\n  p {\n    color: $inactive-color;\n    font-size: 18px;\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  .destination-icon {\n    border: 1px solid $inactive-color;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      color: $inactive-color;\n      font-size: 22px;\n    }\n  }\n\n  &:hover, &:focus {\n    background-color: rgba($primary-color, 0.2);\n    transition: 0.3s ease-in-out;\n    outline: transparent;\n\n    .destination-icon {\n      border: 1px solid $primary-color;\n      background-color: var(--primary-background);\n      i {\n        color: $primary-color;\n      }\n    }\n\n    p {\n      color: $paragraph;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 49378:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/recommended-itineraries/recommended-itineraries.component.scss?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.row {\n  row-gap: 24px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/client-trips-itineraries/recommended-itineraries/recommended-itineraries.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;AAkBJ;AAdE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAgBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF;;AAZA;EACE,aAAA;AAeF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    //background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.row {\n  row-gap: 24px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 72756:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/trip-view/trip-view.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.info-card {\n  display: flex;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 20px;\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n.info-card ul {\n  margin-top: 1rem;\n  padding-right: 2rem;\n}\n.info-card .title-container {\n  padding: 20px;\n  border-bottom: 1px solid rgba(36, 57, 138, 0.16);\n}\n.info-card .title-container h4 {\n  margin-bottom: 0;\n}\n.info-card .info-card-left {\n  outline: 1px solid rgba(36, 57, 138, 0.16);\n  flex-grow: 1;\n  flex-basis: 320px;\n}\n.info-card .info-card-right {\n  flex-grow: 1;\n  flex-basis: 320px;\n}\n\n:host ::ng-deep .hotels-container .accordion {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n:host ::ng-deep .hotels-container .accordion-item {\n  overflow: hidden;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n}\n\n.hotel-item {\n  width: 100%;\n  height: 90px;\n  border: none;\n  background-color: var(--primary-background);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  transition: ease-in-out 0.3s;\n}\n.hotel-item:hover {\n  background: rgba(36, 57, 138, 0.25);\n}\n.hotel-item .hotel-title {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 140%;\n  color: #24398A;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.hotel-item .hotel-title p {\n  margin-bottom: 0;\n}\n.hotel-item .hotel-title span {\n  letter-spacing: -3px;\n}\n.hotel-item .hotel-price {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.hotel-item .hotel-price p {\n  font-weight: 400;\n  font-size: 16px;\n  color: #231F20;\n  opacity: 0.56;\n  margin-bottom: 0;\n}\n.hotel-item .hotel-price span {\n  font-weight: 800;\n  color: #34A853;\n  font-size: 24px;\n}\n.hotel-item .hotel-price .selected-icon {\n  flex-shrink: 0;\n  height: 24px;\n  width: 24px;\n  border: 1px solid #24398A;\n  border-radius: 12px;\n  padding: 2px;\n}\n.hotel-item .hotel-price .selected-icon .icon-background {\n  background-color: #34A853;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.hotel-item .hotel-price .selected-icon .icon-background i {\n  color: var(--primary-background);\n}\n\n.checkout-bar div {\n  gap: 20px;\n}\n.checkout-bar div p {\n  font-weight: 800;\n  font-size: 24px;\n  color: #34A853;\n}\n.checkout-bar div button {\n  margin-top: -20px;\n  height: 90px;\n  margin-bottom: -21px;\n  margin-right: -20px;\n  border-radius: unset;\n  font-size: 24px;\n  font-weight: 500;\n}\n\n/*\n.hotel-item.opened {\n  background-color: $primary-color;\n\n  .hotel-title {\n    color: var(--primary-background);\n  }\n\n  .hotel-price {\n    color: var(--primary-background);\n\n    span:nth-child(2) {\n      color: var(--primary-background);\n    }\n  }\n}*/", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/client-trips-itineraries/trip-view/trip-view.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;AAkBJ;AAfE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAiBJ;;AAbA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAgBF;;AAbA;EACE,aAAA;EACA,yCAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AAgBF;AAdE;EACE,gBAAA;EACA,mBAAA;AAgBJ;AAbE;EACE,aAAA;EACA,gDAAA;AAeJ;AAdI;EACE,gBAAA;AAgBN;AAZE;EACE,0CAAA;EACA,YAAA;EACA,iBAAA;AAcJ;AAXE;EACE,YAAA;EACA,iBAAA;AAaJ;;AATA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAYF;;AATA;EACE,gBAAA;EACA,yCAAA;EACA,kBAAA;AAYF;;AATA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,2CAAA;EAEA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,4BAAA;AAWF;AATE;EACE,mCAAA;AAWJ;AARE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDhGY;ECiGZ,aAAA;EACA,mBAAA;EACA,QAAA;AAUJ;AARI;EACE,gBAAA;AAUN;AAPI;EACE,oBAAA;AASN;AALE;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AAOJ;AALI;EACE,gBAAA;EACA,eAAA;EACA,cDjHM;ECkHN,aAAA;EACA,gBAAA;AAON;AAJI;EACE,gBAAA;EACA,cDhFY;ECiFZ,eAAA;AAMN;AAHI;EACE,cAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;AAKN;AAHM;EACE,yBD7FU;EC8FV,WAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAKR;AAHQ;EACE,gCAAA;AAKV;;AAGE;EACE,SAAA;AAAJ;AAEI;EACE,gBAAA;EACA,eAAA;EACA,cDpHY;ACoHlB;AAGI;EACE,iBAAA;EACA,YAAA;EACA,oBAAA;EACA,mBAAA;EACA,oBAAA;EACA,eAAA;EACA,gBAAA;AADN;;AAMA;;;;;;;;;;;;;;;EAAA","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n\n.info-card {\n  display: flex;\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 20px;\n  flex-wrap: wrap;\n  overflow: hidden;\n\n  ul {\n    margin-top: 1rem;\n    padding-right: 2rem;\n  }\n\n  .title-container {\n    padding: 20px;\n    border-bottom: 1px solid rgba($primary-color, 0.16);\n    h4 {\n      margin-bottom: 0;\n    }\n  }\n\n  .info-card-left {\n    outline: 1px solid rgba($primary-color, 0.16);\n    flex-grow: 1;\n    flex-basis: 320px;\n  }\n\n  .info-card-right {\n    flex-grow: 1;\n    flex-basis: 320px;\n  }\n}\n\n:host ::ng-deep .hotels-container .accordion {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n:host ::ng-deep .hotels-container .accordion-item {\n  overflow: hidden;\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 8px;\n}\n\n.hotel-item {\n  width: 100%;\n  height: 90px;\n  border: none;\n  background-color: var(--primary-background);\n  //text-align: start;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  transition: ease-in-out 0.3s;\n\n  &:hover {\n    background: rgba($primary-color, 25%);\n  }\n\n  .hotel-title {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 140%;\n    color: $primary-color;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n\n    p {\n      margin-bottom: 0;\n    }\n\n    span {\n      letter-spacing: -3px;\n    }\n  }\n\n  .hotel-price {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n\n    p {\n      font-weight: 400;\n      font-size: 16px;\n      color: $paragraph;\n      opacity: 0.56;\n      margin-bottom: 0;\n    }\n\n    span {\n      font-weight: 800;\n      color: $active-btn-color;\n      font-size: 24px;\n    }\n\n    .selected-icon {\n      flex-shrink: 0;\n      height: 24px;\n      width: 24px;\n      border: 1px solid $primary-color;\n      border-radius: 12px;\n      padding: 2px;\n\n      .icon-background {\n        background-color: $active-btn-color;\n        width: 100%;\n        height: 100%;\n        border-radius: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        i {\n          color: var(--primary-background);\n        }\n      }\n    }\n  }\n}\n\n.checkout-bar {\n  div {\n    gap: 20px;\n\n    p {\n      font-weight: 800;\n      font-size: 24px;\n      color: $active-btn-color;\n    }\n\n    button {\n      margin-top: -20px;\n      height: 90px;\n      margin-bottom: -21px;\n      margin-right: -20px;\n      border-radius: unset;\n      font-size: 24px;\n      font-weight: 500;\n    }\n  }\n}\n\n/*\n.hotel-item.opened {\n  background-color: $primary-color;\n\n  .hotel-title {\n    color: var(--primary-background);\n  }\n\n  .hotel-price {\n    color: var(--primary-background);\n\n    span:nth-child(2) {\n      color: var(--primary-background);\n    }\n  }\n}*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 76356:
/*!***********************************************************************************************!*\
  !*** ./src/app/standalone-components/trip-room-card/trip-room-card.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.room-card {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(35, 31, 32, 0.08);\n  border-radius: 8px;\n}\n.room-card .img-container {\n  width: inherit;\n  height: 110px;\n  cursor: pointer;\n  overflow: hidden;\n}\n.room-card .img-container:hover img {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n.room-card .img-container img {\n  width: inherit;\n  height: inherit;\n  object-fit: cover;\n  transition: transform 0.3s ease-out;\n}\n.room-card .info-container {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n}\n.room-card .info-container .room-name {\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin-bottom: 0;\n}\n.room-card .info-container .room-size {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  opacity: 0.72;\n  margin-bottom: 4px;\n}\n.room-card .info-container .price-for {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  opacity: 0.72;\n  margin-bottom: 0;\n}\n.room-card .info-container .bold-blue-text {\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin-bottom: 0;\n}\n.room-card .info-container .guests-selector {\n  display: flex;\n  flex-shrink: 0;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border: 1px solid rgba(35, 31, 32, 0.1);\n  border-radius: 8px;\n}\n.room-card .info-container .guests-selector button {\n  border: 1px solid #858495;\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.room-card .info-container .guests-selector button i {\n  color: #24398A;\n  font-size: 24px;\n}\n.room-card .info-container .guests-selector button:hover {\n  background-color: #24398A;\n  transition: 0.3s ease-in-out;\n}\n.room-card .info-container .guests-selector button:hover i {\n  color: var(--primary-background);\n}\n.room-card .info-container .guests-selector button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.room-card .info-container .guests-selector p {\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/trip-room-card/trip-room-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,gBAAA;EACA,4CAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,cAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;AAkBJ;AAhBI;EACE,iCAAA;AAkBN;AAfI;EACE,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mCAAA;AAiBN;AAbE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AAeJ;AAbI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDrCU;ECsCV,gBAAA;AAeN;AAZI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDzCM;EC0CN,aAAA;EACA,kBAAA;AAcN;AAXI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDnDM;ECoDN,aAAA;EACA,gBAAA;AAaN;AAVI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;EACA,gBAAA;AAYN;AATI;EACE,aAAA;EACA,cAAA;EACA,YAAA;EACA,mBAAA;EACA,8BAAA;EACA,aAAA;EAEA,uCAAA;EACA,kBAAA;AAUN;AARM;EACE,yBAAA;EACA,2CAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAUR;AARQ;EACE,cD5FM;EC6FN,eAAA;AAUV;AAPQ;EACE,yBDjGM;ECkGN,4BAAA;AASV;AARU;EACE,gCAAA;AAUZ;AANQ;EACE,mBAAA;EACA,YAAA;AAQV;AAJM;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AAMR","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.room-card {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba($title, 0.08);\n  border-radius: 8px;\n\n  .img-container {\n    width: inherit;\n    height: 110px;\n    cursor: pointer;\n    overflow: hidden;\n\n    &:hover img {\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n\n    img {\n      width: inherit;\n      height: inherit;\n      object-fit: cover;\n      transition: transform 0.3s ease-out;\n    }\n  }\n\n  .info-container {\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n\n    .room-name {\n      font-weight: 700;\n      font-size: 18px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $primary-color;\n      margin-bottom: 0;\n    }\n\n    .room-size {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n      opacity: 0.72;\n      margin-bottom: 4px;\n    }\n\n    .price-for {\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n      opacity: 0.72;\n      margin-bottom: 0;\n    }\n\n    .bold-blue-text {\n      font-weight: 700;\n      font-size: 18px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: #24398A;\n      margin-bottom: 0;\n    }\n\n    .guests-selector {\n      display: flex;\n      flex-shrink: 0;\n      flex-grow: 1;\n      align-items: center;\n      justify-content: space-between;\n      padding: 10px;\n\n      border: 1px solid rgba($paragraph, 0.1);\n      border-radius: 8px;\n\n      button {\n        border: 1px solid $inactive-color;\n        background-color: var(--primary-background);\n        border-radius: 8px;\n        width: 40px;\n        height: 40px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        i {\n          color: $primary-color;\n          font-size: 24px;\n        }\n\n        &:hover {\n          background-color: $primary-color;\n          transition: 0.3s ease-in-out;\n          i {\n            color: var(--primary-background);\n          }\n        }\n\n        &:disabled {\n          cursor: not-allowed;\n          opacity: 0.5;\n        }\n      }\n\n      p {\n        margin-bottom: 0;\n        font-size: 16px;\n        font-weight: 700;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12251:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/accomodation/accomodation.component.html?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card step-card\">\n    <div class=\"card-header\">\n        <span class=\"step-name\">Step II</span>\n        <span class=\"step-separator\">-</span>\n        <span class=\"step-category\">Accommodation</span>\n    </div>\n    <div class=\"card-body d-flex flex-column\">\n        <ng-container *ngIf=\"(newItinerary.resources[destinationIndex]) as currentLocation\">\n            <div class=\"row align-items-center step-card-title\">\n                <div class=\"col\">\n                    <p class=\"step-title\">Destinations</p>\n                </div>\n                <div class=\"col text-right step-details\">\n                    <p>{{ currentLocation?.city }}, {{ currentLocation?.country }}</p>\n                </div>\n            </div>\n\n            <ng-container *ngIf=\"(currentLocation?.accommodationResourceRecommended) as accommodation; else noAccommodationMsg\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"item\">\n                            <div class=\"row item-info\">\n                                <div class=\"col\">\n                                    <p class=\"item-title\">{{ accommodation?.resourceName }}</p>\n                                </div>\n                                <div class=\"col\">\n                                    <p class=\"acc-details text-right\">\n                                        <span class=\"acc-type\">{{ accommodation.resourceTypeName }}</span>\n                                        <!--<span class=\"acc-separator\">-</span>\n                                        <span class=\"acc-room\">Deluxe double room</span>-->\n                                    </p>\n                                </div>\n\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col\">\n                                    <p class=\"item-resource mb-0\">Check-in date</p>\n                                    <p class=\"mb-0 yellow-text acc-dates\">{{ accommodation.startDate | date : 'dd MMM, YYYY' }}</p>\n                                </div>\n                                <div class=\"col text-right\">\n                                    <p class=\"item-resource mb-0\">Check-out date</p>\n                                    <p class=\"mb-0 yellow-text acc-dates\">{{ accommodation.endDate | date : 'dd MMM, YYYY' }}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n\n            <ng-template #noAccommodationMsg>\n                <p class=\"step-title\">\n                    No accommodation selected for this location\n                </p>\n            </ng-template>\n\n            <ng-container *ngIf=\"newItinerary.resources?.length > 1\">\n                <div class=\"row time-period mt-auto\">\n                    <div class=\"col time-period-type\">\n                        <span>Destination</span>\n                    </div>\n                    <div class=\"col d-flex align-items-center justify-content-end time-period-number\">\n                        <div *ngFor=\"let index of destinationIndexesArray\"\n                             class=\"day-box\"\n                             [ngClass]=\"destinationIndex === index ? 'selected' : null\"\n                             (click)=\"setDestinationIndex(index)\"\n                        >\n                            <span>{{ index + 1 }}</span>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </ng-container>\n    </div>\n    <div *ngIf=\"newItinerary.resources[destinationIndex]?.accommodationResourceRecommended || itineraryExtraInfo.itineraryType === 'manual'; else noAvailableResourcesForLocation\"\n         class=\"card-footer\" (click)=\"openModal(editAccResources)\">\n        <a>View more</a>\n    </div>\n\n    <ng-template #noAvailableResourcesForLocation>\n        <div class=\"card-footer pe-none\">\n            <p class=\"m-0 text-white\">\n                No available accommodations for the current destination\n            </p>\n        </div>\n    </ng-template>\n</div>\n\n<ng-template #editAccResources let-c=\"close\" let-d=\"dismiss\">\n    <mat-dialog-content>\n        <h2 class=\"step-title pb-4\">Step II</h2>\n        <h3 class=\"step-category\">Accomodation</h3>\n        <p class=\"mb-3\">Choose the best way to get to your destinations by adding your favourite routes and type of transportation.</p>\n\n        <ng-container *ngIf=\"accommodationResources?.[destinationIndex]?.length > 0; else noResourcesFound\">\n            <ul ngbNav #accNav=\"ngbNav\" [(activeId)]=\"activeAccId\" class=\"nav-pills\">\n                <ng-container *ngFor=\"let resourcesGroup of accommodationResources?.[destinationIndex]; let groupIndex = index\">\n                    <li [ngbNavItem]=\"resourcesGroup.resourceTypeName\">\n                        <a ngbNavLink>{{ resourcesGroup.resourceTypeName | titlecase }}</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"res-container\">\n                                <div class=\"res-item\" *ngFor=\"let res of resourcesGroup.resources; index as i\" (click)=\"openResourceModal(res, groupIndex)\">\n                                    <div class=\"res-item-image\">\n                                        <img [src]=\"res?.featuredImage?.filePath\" alt=\"\"/>\n                                    </div>\n                                    <div class=\"res-item-content\">\n                                        <div class=\"res-main-info d-flex align-items-center justify-content-between\">\n                                            <span class=\"res-title\">{{res?.title}}</span>\n                                            <span class=\"res-review\">{{res?.proReviewsPercentage}}%\n                                            <i class=\"fa fa-smile\"></i>\n                                        </span>\n                                        </div>\n                                        <div class=\"res-address\">\n                                            <span>{{res?.address}}</span>\n                                            <span>{{res?.city}}</span>\n                                            <span>{{res?.country}}</span>\n                                        </div>\n                                    </div>\n                                    <div class=\"res-check\">\n                                        <i *ngIf=\"temporaryModalItinerary.resources[destinationIndex]?.accommodationResourceRecommended?.resourceId === res.id\" class=\"fa fa-check\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </li>\n                </ng-container>\n            </ul>\n            <div [ngbNavOutlet]=\"accNav\" class=\"mt-2\"></div>\n        </ng-container>\n\n        <ng-template #noResourcesFound>\n            <p class=\"mt-4 mb-0 text-center\">\n                No accommodations found for this location\n            </p>\n        </ng-template>\n\n        <div class=\"row buttons-row\">\n            <div class=\"col\">\n                <button class=\"btn-auto btn-color-outline w-100\" matDialogClose>Anulare</button>\n            </div>\n            <div class=\"col\">\n                <button class=\"btn-auto btn-color-fill w-100\" [matDialogClose]=\"temporaryModalItinerary\">Check options</button>\n            </div>\n        </div>\n    </mat-dialog-content>\n</ng-template>\n";

/***/ }),

/***/ 21071:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/day-activities/activities.component.html?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"newItinerary\" class=\"card step-card\">\n    <div class=\"card-header\">\n        <span class=\"step-name\">{{ dayActivities ? 'Step IV' : 'Step V' }}</span>\n        <span class=\"step-separator\">-</span>\n        <span class=\"step-category\">{{ dayActivities ? 'Day Activities' : 'Evening Activities' }}</span>\n    </div>\n    <div class=\"card-body d-flex flex-column\">\n        <div class=\"row align-items-center step-card-title\">\n            <div class=\"col\">\n                <p class=\"step-title\">Attractions & experiences</p>\n            </div>\n            <div class=\"col text-right step-details\">\n                <p>{{ newItinerary.resources[0].startDate }} - {{ newItinerary.resources[newItinerary.resources.length - 1].endDate }}</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"item\">\n                    <ng-container *ngFor=\"let resourceGroup of newItinerary.resources[destinationIndex]?.[activityTypeRecommended]\">\n                        <ng-container *ngFor=\"let item of resourceGroup.items\">\n                            <p class=\"item-title\">\n                                {{ (item.date === dayState && resourceGroup.resourceId === selectedResources[destinationIndex]?.[dayState]) ? resourceGroup.resourceName : null }}\n                            </p>\n                            <p class=\"item-resource overflow-ellipsis mb-0\">\n                                {{ (item.date === dayState && resourceGroup.resourceId === selectedResources[destinationIndex]?.[dayState]) ? resourceGroup.resourceTypeName : null }}\n                            </p>\n                        </ng-container>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"!selectedResources[destinationIndex]?.[dayState]\">\n                        <p class=\"item-title\">\n                            Unassigned\n                        </p>\n                        <p class=\"item-resource overflow-ellipsis mb-0 opacity-0\">\n\n                        </p>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n        <div class=\"row time-period mt-auto\">\n            <div class=\"col time-period-type\">\n                <span>Day</span>\n            </div>\n            <div class=\"col d-flex align-items-center justify-content-end time-period-number\">\n                <div *ngFor=\"let day of days; let index = index\"\n                     [ngClass]=\"day === dayState ? 'selected' : null\"\n                     (click)=\"setDayState(day)\"\n                     class=\"day-box\">\n                    <span>{{ index + 1 }}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"resourcesExistByDay?.[dayState]; else noAvailableResourcesForLocation\"\n         class=\"card-footer\"\n         (click)=\"openModal(editResources)\">\n        <a>View more</a>\n    </div>\n\n    <ng-template #noAvailableResourcesForLocation>\n        <div class=\"card-footer pe-none\">\n            <p class=\"m-0 text-white\">\n                No available activities for the current day\n            </p>\n        </div>\n    </ng-template>\n\n</div>\n\n<ng-template #editResources let-c=\"close\" let-d=\"dismiss\">\n    <div mat-dialog-content>\n        <h2 class=\"step-title pb-4\">{{ dayActivities ? 'Step IV' : 'Step V' }}</h2>\n\n        <ng-container *ngIf=\"activitiesResources?.[destinationIndex]?.length > 0; else noResourcesFound\">\n            <ul ngbNav #nav=\"ngbNav\" [activeId]=\"dayState\" class=\"nav-pills mb-4\">\n                <ng-container *ngFor=\"let dayResourcesGroup of activitiesResources?.[destinationIndex]; let dayGroupIndex = index\">\n                    <li [ngbNavItem]=\"dayResourcesGroup?.date\">\n                        <a ngbNavLink>Day {{ daysDictionary[dayResourcesGroup?.date] + 1 }}</a>\n                        <ng-template ngbNavContent>\n                            <h3 class=\"step-category\">{{ dayActivities ? 'Recommended day activities' : 'Recommended evening activities' }}</h3>\n                            <p class=\"mb-3\">Choose the best way to get to your destinations by adding your favourite routes and type of transportation.</p>\n                            <ul ngbNav #actTypeNav=\"ngbNav\" [activeId]=\"dayResourcesGroup?.resources[0]?.resourceTypeName\" class=\"nav-pills\">\n                                <ng-container *ngFor=\"let resourceType of dayResourcesGroup?.resources\">\n                                    <li [ngbNavItem]=\"resourceType?.resourceTypeName\">\n                                        <a ngbNavLink>{{ resourceType?.resourceTypeName }}</a>\n                                        <ng-template ngbNavContent>\n                                            <div class=\"res-container\">\n                                                <ng-container *ngIf=\"resourceType?.resources?.length > 0; else noResourcesForSelectedType\">\n                                                    <div class=\"res-item\" *ngFor=\"let res of resourceType?.resources; index as i\" (click)=\"openResourceModal(res, dayResourcesGroup?.date)\">\n                                                        <div class=\"res-item-image\">\n                                                            <img [src]=\"res?.featuredImage?.filePath\" alt=\"\"/>\n                                                        </div>\n                                                        <div class=\"res-item-content\">\n                                                            <div class=\"res-main-info d-flex align-items-center justify-content-between\">\n                                                                <span class=\"res-title\">{{res.title}}</span>\n                                                                <span class=\"res-review\">{{res.proReviewsPercentage}}%\n                                                                <i class=\"fa fa-smile\"></i>\n                                                            </span>\n                                                            </div>\n                                                            <div class=\"res-address\">\n                                                                <span>{{res.address}}</span>\n                                                                <span>{{res.city}}</span>\n                                                                <span>{{res.country}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"res-check\">\n                                                            <i *ngIf=\"temporarySelectedResources[destinationIndex]?.[dayResourcesGroup?.date] === res.id\" class=\"fa fa-check\"></i>\n                                                        </div>\n                                                    </div>\n                                                </ng-container>\n\n                                                <ng-template #noResourcesForSelectedType>\n                                                    <h3 class=\"mt-4 mb-4 mb-0 text-center\">\n                                                        No activities found for this type\n                                                    </h3>\n                                                </ng-template>\n                                            </div>\n                                        </ng-template>\n                                    </li>\n                                </ng-container>\n                            </ul>\n                            <div [ngbNavOutlet]=\"actTypeNav\" class=\"mt-2\"></div>\n\n                        </ng-template>\n                    </li>\n                </ng-container>\n            </ul>\n            <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n        </ng-container>\n\n        <ng-template #noResourcesFound>\n            <p class=\"mt-4 mb-0 text-center\">\n                No activities found for this day\n            </p>\n        </ng-template>\n\n        <div class=\"row buttons-row\">\n            <div class=\"col\">\n                <button class=\"btn-auto btn-color-outline w-100\" matDialogClose>Anulare</button>\n            </div>\n            <div class=\"col\">\n                <button class=\"btn-auto btn-color-fill w-100\" [matDialogClose]=\"temporaryModalItinerary\">Check options</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n";

/***/ }),

/***/ 10429:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/eat-and-drink/eat-and-drink.component.html?ngResource ***!
  \*************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"newItinerary\" class=\"card step-card\">\n    <div class=\"card-header\">\n        <span class=\"step-name\">Step III</span>\n        <span class=\"step-separator\">-</span>\n        <span class=\"step-category\">Eat & Drink Plan</span>\n    </div>\n    <div class=\"card-body d-flex flex-column\">\n        <div class=\"row align-items-center step-card-title\">\n            <div class=\"col\">\n                <p class=\"step-title\">Eat & Drink</p>\n            </div>\n            <div class=\"col text-right step-details\">\n                <p>{{ newItinerary.resources[0].startDate }} - {{ newItinerary.resources[newItinerary.resources.length - 1].endDate }}</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <div class=\"item\">\n                    <p class=\"item-title\">Breakfast</p>\n                    <p class=\"item-hour\">{{ itineraryExtraInfo.breakfastHour }}</p>\n                        <ng-container *ngFor=\"let resourceGroup of newItinerary.resources[destinationIndex].eatAndDrinkResourcesRecommended\">\n                            <ng-container *ngFor=\"let date of resourceGroup.dates\">\n                                <p class=\"item-resource overflow-ellipsis mb-0\">\n                                    {{ (date.date === dayState && date.hour === itineraryExtraInfo.breakfastHour) ? resourceGroup.resourceName : null }}\n                                </p>\n                            </ng-container>\n                        </ng-container>\n                    <p *ngIf=\"!selectedResources[destinationIndex]?.[dayState]?.['Breakfast']\" class=\"item-resource overflow-ellipsis mb-0\">\n                        Unassigned\n                    </p>\n                </div>\n            </div>\n            <div class=\"col-4\">\n                <div class=\"item\">\n                    <p class=\"item-title\">Lunch</p>\n                    <p class=\"item-hour\">{{ itineraryExtraInfo.lunchHour }}</p>\n                        <ng-container *ngFor=\"let resourceGroup of newItinerary.resources[destinationIndex].eatAndDrinkResourcesRecommended\">\n                            <ng-container *ngFor=\"let date of resourceGroup.dates\">\n                                <p class=\"item-resource overflow-ellipsis mb-0\">\n                                    {{ (date.date === dayState && date.hour === itineraryExtraInfo.lunchHour) ? resourceGroup.resourceName : null }}\n                                </p>\n                            </ng-container>\n                        </ng-container>\n                    <p *ngIf=\"!selectedResources[destinationIndex]?.[dayState]?.['Lunch']\" class=\"item-resource overflow-ellipsis mb-0\">\n                        Unassigned\n                    </p>\n                </div>\n            </div>\n            <div class=\"col-4\">\n                <div class=\"item\">\n                    <p class=\"item-title\">Dinner</p>\n                    <p class=\"item-hour\">{{ itineraryExtraInfo.dinnerHour }}</p>\n                        <ng-container *ngFor=\"let resourceGroup of newItinerary.resources[destinationIndex].eatAndDrinkResourcesRecommended\">\n                            <ng-container *ngFor=\"let date of resourceGroup.dates\">\n                                <p class=\"item-resource overflow-ellipsis mb-0\">\n                                    {{ (date.date === dayState && date.hour === itineraryExtraInfo.dinnerHour) ? resourceGroup.resourceName : null }}\n                                </p>\n                            </ng-container>\n                        </ng-container>\n                    <p *ngIf=\"!selectedResources[destinationIndex]?.[dayState]?.['Dinner']\" class=\"item-resource overflow-ellipsis mb-0\">\n                        Unassigned\n                    </p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row time-period mt-auto\">\n            <div class=\"col time-period-type\">\n                <span>Day</span>\n            </div>\n            <div class=\"col d-flex align-items-center justify-content-end time-period-number\">\n                <div *ngFor=\"let day of days; let index = index\"\n                     [ngClass]=\"day === dayState ? 'selected' : null\"\n                     class=\"day-box\"\n                     (click)=\"setDayState(day)\"\n                >\n                    <span>{{ index + 1 }}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"newItinerary.resources[destinationIndex]?.eatAndDrinkResourcesRecommended?.length > 0 || itineraryExtraInfo.itineraryType === 'manual'; else noAvailableResourcesForLocation\"\n         class=\"card-footer\"\n         (click)=\"openModal(editResources)\">\n        <a >View more</a>\n    </div>\n\n    <ng-template #noAvailableResourcesForLocation>\n        <div class=\"card-footer pe-none\">\n            <p class=\"m-0 text-white\">\n                No available restaurants for the current day\n            </p>\n        </div>\n    </ng-template>\n</div>\n\n<ng-template #editResources let-c=\"close\" let-d=\"dismiss\">\n    <div mat-dialog-content>\n        <h2 class=\"step-title pb-4\">Step III</h2>\n\n        <ng-container *ngIf=\"eatAndDrinksResources?.[destinationIndex]?.length > 0; else noResourcesFound\">\n            <ul ngbNav #nav=\"ngbNav\" [activeId]=\"dayState\" class=\"nav-pills mb-4\">\n                <ng-container *ngFor=\"let dayResourcesGroup of eatAndDrinksResources?.[destinationIndex]; let groupIndex = index\">\n                    <li [ngbNavItem]=\"dayResourcesGroup?.day\">\n                        <a ngbNavLink>Day {{ daysDictionary[dayResourcesGroup?.day] + 1 }}</a>\n                        <ng-template ngbNavContent>\n                            <h3 class=\"step-category\">Eat & Drinks</h3>\n                            <p class=\"mb-3\">Choose the best way to get to your destinations by adding your favourite routes and type of transportation.</p>\n                            <ul ngbNav #mealNav=\"ngbNav\" [(activeId)]=\"activeaMealId\" class=\"nav-pills\">\n                                <ng-container *ngFor=\"let momentOfDay of dayResourcesGroup.dayMoments\">\n                                    <li [ngbNavItem]=\"momentOfDay.dayMoment\">\n                                        <a ngbNavLink>{{ momentOfDay.dayMoment }}</a>\n                                        <ng-template ngbNavContent>\n                                            <div class=\"res-container\">\n                                                <ng-container *ngIf=\"momentOfDay.resources?.length > 0; else noResourcesForMomentOfDay\">\n                                                    <div class=\"res-item\" *ngFor=\"let res of momentOfDay.resources; index as i\" (click)=\"openResourceModal(res, dayResourcesGroup?.day, momentOfDay.dayMoment)\">\n                                                        <div class=\"res-item-image\">\n                                                            <img [src]=\"res?.featuredImage?.filePath\" alt=\"\"/>\n                                                        </div>\n                                                        <div class=\"res-item-content\">\n                                                            <div class=\"res-main-info d-flex align-items-center justify-content-between\">\n                                                                <span class=\"res-title\">{{res.title}}</span>\n                                                                <span class=\"res-review\">{{res.proReviewsPercentage}}%\n                                                            <i class=\"fa fa-smile\"></i>\n                                                        </span>\n                                                            </div>\n                                                            <div class=\"res-address\">\n                                                                <span>{{res.address}}</span>\n                                                                <span>{{res.city}}</span>\n                                                                <span>{{res.country}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"res-check\">\n                                                            <i *ngIf=\"temporarySelectedResources[destinationIndex]?.[dayResourcesGroup?.day]?.[momentOfDay.dayMoment] === res.id\" class=\"fa fa-check\"></i>\n                                                        </div>\n                                                    </div>\n                                                </ng-container>\n\n                                                <ng-template #noResourcesForMomentOfDay>\n                                                    <h3 class=\"mt-4 mb-4 mb-0 text-center\">\n                                                        No restaurants found for this time of day\n                                                    </h3>\n                                                </ng-template>\n                                            </div>\n                                        </ng-template>\n                                    </li>\n                                </ng-container>\n                            </ul>\n                            <div [ngbNavOutlet]=\"mealNav\" class=\"mt-2\"></div>\n\n                        </ng-template>\n                    </li>\n                </ng-container>\n            </ul>\n            <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n        </ng-container>\n\n        <ng-template #noResourcesFound>\n            <p class=\"mt-4 mb-0 text-center\">\n                No restaurants found for this location\n            </p>\n        </ng-template>\n\n        <div class=\"row buttons-row\">\n            <div class=\"col\">\n                <button class=\"btn-auto btn-color-outline w-100\" matDialogClose>Anulare</button>\n            </div>\n            <div class=\"col\">\n                <button class=\"btn-auto btn-color-fill w-100\" [matDialogClose]=\"temporaryModalItinerary\">Check options</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n";

/***/ }),

/***/ 73187:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/evening-activities/evening-activities.component.html?ngResource ***!
  \***********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card step-card\">\n    <div class=\"card-header\">\n        <span class=\"step-name\">Step V</span>\n        <span class=\"step-separator\">-</span>\n        <span class=\"step-category\">Evening Activities</span>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row align-items-center step-card-title\">\n            <div class=\"col\">\n                <p class=\"step-title\">Attractions & experiences</p>\n            </div>\n            <div class=\"col text-right step-details\">\n                <p>15.06.2023 - 18.06-2023</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"item\">\n                    <p class=\"item-title\">Moulin Rouge</p>\n                    <p class=\"item-resource mb-0\">Attraction</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"item\">\n                    <p class=\"item-title\">River Dinner</p>\n                    <p class=\"item-resource mb-0\">Attraction</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row time-period\">\n            <div class=\"col time-period-type\">\n                <span>Day</span>\n            </div>\n            <div class=\"col d-flex align-items-center justify-content-end time-period-number\">\n                <div class=\"day-box\">\n                    <span>1</span>\n                </div>\n                <div class=\"day-box disabled\">\n                    <span>1</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\" (click)=\"openModal(editResources)\">\n        <a>View more</a>\n    </div>\n</div>\n\n<ng-template #editResources let-c=\"close\" let-d=\"dismiss\">\n    <div mat-dialog-content>\n        <h2 class=\"step-title pb-4\">Step V</h2>\n\n        <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-pills mb-4\">\n            <li [ngbNavItem]=\"1\">\n                <a ngbNavLink>Day 1</a>\n                <ng-template ngbNavContent>\n                    <h3 class=\"step-category\">Recommended evening activities</h3>\n                    <p class=\"mb-3\">Choose the best way to get to your destinations by adding your favourite routes and type of transportation.</p>\n                    <ul ngbNav #actTypeNav=\"ngbNav\" [(activeId)]=\"activeTypeId\" class=\"nav-pills\">\n                        <li [ngbNavItem]=\"1\">\n                            <a ngbNavLink>Attractions</a>\n                            <ng-template ngbNavContent>\n                                <div class=\"res-container\">\n                                    <div class=\"res-item\" *ngFor=\"let res of resDemo; index as i\">\n                                        <div class=\"res-item-image\">\n                                            <img [src]=\"res.image\" alt=\"\"/>\n                                        </div>\n                                        <div class=\"res-item-content\">\n                                            <div class=\"res-main-info d-flex align-items-center justify-content-between\">\n                                                <span class=\"res-title\">{{res.title}}</span>\n                                                <span class=\"res-review\">{{res.proReviewsPercentage}}%\n                                                            <i class=\"fa fa-smile\"></i>\n                                                        </span>\n                                            </div>\n                                            <div class=\"res-address\">\n                                                <span>{{res.address}}</span>\n                                                <span>{{res.city}}</span>\n                                                <span>{{res.country}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"res-check\" (click)=\"checkRes(res.id)\">\n                                            <i class=\"fa fa-check\"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n                        <li [ngbNavItem]=\"2\">\n                            <a ngbNavLink>Experiences</a>\n                            <ng-template ngbNavContent>\n                                <div class=\"res-container\">\n                                    <div class=\"res-item\" *ngFor=\"let res of resDemo; index as i\">\n                                        <div class=\"res-item-image\">\n                                            <img [src]=\"res.image\" alt=\"\"/>\n                                        </div>\n                                        <div class=\"res-item-content\">\n                                            <div class=\"res-main-info d-flex align-items-center justify-content-between\">\n                                                <span class=\"res-title\">{{res.title}}</span>\n                                                <span class=\"res-review\">{{res.proReviewsPercentage}}%\n                                                            <i class=\"fa fa-smile\"></i>\n                                                        </span>\n                                            </div>\n                                            <div class=\"res-address\">\n                                                <span>{{res.address}}</span>\n                                                <span>{{res.city}}</span>\n                                                <span>{{res.country}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"res-check\" (click)=\"checkRes(res.id)\">\n<!--                                            <i class=\"fa fa-check\"></i>-->\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n                    </ul>\n                    <div [ngbNavOutlet]=\"actTypeNav\" class=\"mt-2\"></div>\n\n                </ng-template>\n            </li>\n            <li [ngbNavItem]=\"2\">\n                <a ngbNavLink>Day 2</a>\n                <ng-template ngbNavContent>\n                    <h3 class=\"step-category\">Recommended evening activities</h3>\n                    <p class=\"mb-3\">Choose the best way to get to your destinations by adding your favourite routes and type of transportation.</p>\n                    <ul ngbNav #actTypeNav=\"ngbNav\" [(activeId)]=\"activeTypeId\" class=\"nav-pills\">\n                        <li [ngbNavItem]=\"1\">\n                            <a ngbNavLink>Attractions</a>\n                            <ng-template ngbNavContent>\n                                <div class=\"res-container\">\n                                    <div class=\"res-item\" *ngFor=\"let res of resDemo; index as i\">\n                                        <div class=\"res-item-image\">\n                                            <img [src]=\"res.image\" alt=\"\"/>\n                                        </div>\n                                        <div class=\"res-item-content\">\n                                            <div class=\"res-main-info d-flex align-items-center justify-content-between\">\n                                                <span class=\"res-title\">{{res.title}}</span>\n                                                <span class=\"res-review\">{{res.proReviewsPercentage}}%\n                                                            <i class=\"fa fa-smile\"></i>\n                                                        </span>\n                                            </div>\n                                            <div class=\"res-address\">\n                                                <span>{{res.address}}</span>\n                                                <span>{{res.city}}</span>\n                                                <span>{{res.country}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"res-check\" (click)=\"checkRes(res.id)\">\n                                            <i class=\"fa fa-check\"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n                        <li [ngbNavItem]=\"2\">\n                            <a ngbNavLink>Experiences</a>\n                            <ng-template ngbNavContent>\n                                <div class=\"res-container\">\n                                    <div class=\"res-item\" *ngFor=\"let res of resDemo; index as i\">\n                                        <div class=\"res-item-image\">\n                                            <img [src]=\"res.image\" alt=\"\"/>\n                                        </div>\n                                        <div class=\"res-item-content\">\n                                            <div class=\"res-main-info d-flex align-items-center justify-content-between\">\n                                                <span class=\"res-title\">{{res.title}}</span>\n                                                <span class=\"res-review\">{{res.proReviewsPercentage}}%\n                                                            <i class=\"fa fa-smile\"></i>\n                                                        </span>\n                                            </div>\n                                            <div class=\"res-address\">\n                                                <span>{{res.address}}</span>\n                                                <span>{{res.city}}</span>\n                                                <span>{{res.country}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"res-check\" (click)=\"checkRes(res.id)\">\n<!--                                            <i class=\"fa fa-check\"></i>-->\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n                    </ul>\n                    <div [ngbNavOutlet]=\"actTypeNav\" class=\"mt-2\"></div>\n\n                </ng-template>\n            </li>\n            <li [ngbNavItem]=\"3\">\n                <a ngbNavLink>Day 3</a>\n                <ng-template ngbNavContent>\n                    <h3 class=\"step-category\">Recommended evening activities</h3>\n                    <p class=\"mb-3\">Choose the best way to get to your destinations by adding your favourite routes and type of transportation.</p>\n                    <ul ngbNav #actTypeNav=\"ngbNav\" [(activeId)]=\"activeTypeId\" class=\"nav-pills\">\n                        <li [ngbNavItem]=\"1\">\n                            <a ngbNavLink>Attractions</a>\n                            <ng-template ngbNavContent>\n                                <div class=\"res-container\">\n                                    <div class=\"res-item\" *ngFor=\"let res of resDemo; index as i\">\n                                        <div class=\"res-item-image\">\n                                            <img [src]=\"res.image\" alt=\"\"/>\n                                        </div>\n                                        <div class=\"res-item-content\">\n                                            <div class=\"res-main-info d-flex align-items-center justify-content-between\">\n                                                <span class=\"res-title\">{{res.title}}</span>\n                                                <span class=\"res-review\">{{res.proReviewsPercentage}}%\n                                                            <i class=\"fa fa-smile\"></i>\n                                                        </span>\n                                            </div>\n                                            <div class=\"res-address\">\n                                                <span>{{res.address}}</span>\n                                                <span>{{res.city}}</span>\n                                                <span>{{res.country}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"res-check\" (click)=\"checkRes(res.id)\">\n                                            <i class=\"fa fa-check\"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n                        <li [ngbNavItem]=\"2\">\n                            <a ngbNavLink>Experiences</a>\n                            <ng-template ngbNavContent>\n                                <div class=\"res-container\">\n                                    <div class=\"res-item\" *ngFor=\"let res of resDemo; index as i\">\n                                        <div class=\"res-item-image\">\n                                            <img [src]=\"res.image\" alt=\"\"/>\n                                        </div>\n                                        <div class=\"res-item-content\">\n                                            <div class=\"res-main-info d-flex align-items-center justify-content-between\">\n                                                <span class=\"res-title\">{{res.title}}</span>\n                                                <span class=\"res-review\">{{res.proReviewsPercentage}}%\n                                                            <i class=\"fa fa-smile\"></i>\n                                                        </span>\n                                            </div>\n                                            <div class=\"res-address\">\n                                                <span>{{res.address}}</span>\n                                                <span>{{res.city}}</span>\n                                                <span>{{res.country}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"res-check\" (click)=\"checkRes(res.id)\">\n<!--                                            <i class=\"fa fa-check\"></i>-->\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n                    </ul>\n                    <div [ngbNavOutlet]=\"actTypeNav\" class=\"mt-2\"></div>\n\n                </ng-template>\n            </li>\n        </ul>\n\n        <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n        <div class=\"row buttons-row\">\n            <div class=\"col\">\n                <button class=\"btn-auto btn-color-outline w-100\" (click)=\"closeModal()\">Anulare</button>\n            </div>\n            <div class=\"col\">\n                <button class=\"btn-auto btn-color-fill w-100\">Check options</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n";

/***/ }),

/***/ 67219:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/_components/itinerary-steps/transport/transport.component.html?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card step-card\">\n    <div class=\"card-header\">\n        <span class=\"step-name\">Step I</span>\n        <span class=\"step-separator\">-</span>\n        <span class=\"step-category\">Transport</span>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row align-items-center step-card-title\">\n            <div class=\"col\">\n                <p class=\"step-title\">Car</p>\n                <span class=\"step-info\">\n                    You don’t have an option selected yet. <br>\n                    Access <strong class=\"yellow-text\">“View more”</strong> to add a route to your configuration.\n                </span>\n            </div>\n<!--            <div class=\"col text-right step-details\">-->\n<!--                <p>15.06.2023 - 18.06-2023</p>-->\n<!--            </div>-->\n        </div>\n<!--        <div class=\"row\">-->\n<!--            <div class=\"col\">-->\n<!--                <div class=\"item\">-->\n<!--                    <p class=\"item-title\">Breakfast</p>-->\n<!--                    <p class=\"item-hour\">09:00</p>-->\n<!--                    <p class=\"item-resource mb-0\">Unassigned</p>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"col\">-->\n<!--                <div class=\"item\">-->\n<!--                    <p class=\"item-title\">Lunch</p>-->\n<!--                    <p class=\"item-hour\">09:00</p>-->\n<!--                    <p class=\"item-resource mb-0\">Unassigned</p>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"col\">-->\n<!--                <div class=\"item\">-->\n<!--                    <p class=\"item-title\">Dinner</p>-->\n<!--                    <p class=\"item-hour\">09:00</p>-->\n<!--                    <p class=\"item-resource mb-0\">Unassigned</p>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--        <div class=\"row time-period\">-->\n<!--            <div class=\"col time-period-type\">-->\n<!--                <span>Day</span>-->\n<!--            </div>-->\n<!--            <div class=\"col d-flex align-items-center justify-content-end time-period-number\">-->\n<!--                <div class=\"day-box\">-->\n<!--                    <span>1</span>-->\n<!--                </div>-->\n<!--                <div class=\"day-box\">-->\n<!--                    <span>1</span>-->\n<!--                </div>-->\n<!--                <div class=\"day-box\">-->\n<!--                    <span>1</span>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n    </div>\n    <div class=\"card-footer\">\n        <a>View more</a>\n    </div>\n</div>\n";

/***/ }),

/***/ 66551:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/city-select/city-select.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n\n    <div *ngIf=\"country\" class=\"background-container\">\n        <img [src]=\"country?.image?.filePath\" alt=\"category-background-image\">\n    </div>\n\n    <div class=\"content-container\">\n\n        <div class=\"container categories-container\">\n\n            <h1 *ngIf=\"country\" class=\"text-center\">\n                {{ country.name | titlecase }} Packages\n            </h1>\n\n            <h2 class=\"text-left\">\n                {{ \"ITINERARIES.SELECT-REGION\" |translate}}\n            </h2>\n\n            <div class=\"row\">\n                <div class=\"col-12 col-md-6 col-lg-4\">\n                    <div *ngIf=\"cities\" class=\"cities-container\">\n                        <mat-radio-group [(ngModel)]=\"selectedCity\"\n                                         (change)=\"filterTripsByCityId(selectedCity.id)\">\n                            <mat-radio-button *ngFor=\"let city of cities\" [value]=\"city\">\n                                <app-category-card [imgPath]=\"city?.image?.filePath\"\n                                                   [nameRo]=\"city?.name\"\n                                                   [nameEn]=\"city?.name\"\n                                                   [height]=\"160\"\n                                                   [selected]=\"selectedCity?.id === city.id\"\n                                ></app-category-card>\n                            </mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n\n                <div class=\"col-12 col-md-6 col-lg-8\">\n                    <div *ngIf=\"trips && cities\" class=\"trips-container\">\n                        <h2>\n                            {{\"ITINERARIES.CHOSEN-CITY\" | translate}} <span>{{ selectedCity.name }}!</span>\n                        </h2>\n\n                        <h3>\n                            {{\"ITINERARIES.CHOOSE-PACKAGE\" | translate}}\n                        </h3>\n\n                        <ng-container *ngIf=\"filteredTripsByCityId?.length > 0; else noTripsForSelectedCity\">\n                            <ngb-accordion [closeOthers]=\"true\" [destroyOnHide]=\"false\">\n                                <ngb-panel *ngFor=\"let trip of filteredTripsByCityId\">\n                                    <ng-template ngbPanelHeader let-opened=\"opened\">\n                                        <button (click)=\"selectTrip(trip)\" ngbPanelToggle [class.opened]=\"opened\" class=\"trip-item\">\n                                            <p class=\"trip-title\">\n                                                {{ trip.name }}\n                                            </p>\n\n                                            <p class=\"trip-price\">\n                                                {{\"ITINERARIES.STARTING-PRICE\" | translate}} <span>€{{ trip.estimatedPrice }}</span> <span> ({{\"ITINERARIES.ONE-PERSON\" | translate}})</span>\n                                            </p>\n                                        </button>\n                                    </ng-template>\n                                    <ng-template ngbPanelContent>\n\n                                        <div class=\"guests-container\">\n                                            <div class=\"guests-selector\" [ngClass]=\"confirmBtnClicked && guestsForm.invalid ? 'invalid' : null\">\n                                                <button [disabled]=\"guestsForm.controls.adultsNumber.value === 0\"\n                                                        (click)=\"decreaseNrGuests('adultsNumber')\"\n                                                        type=\"button\"\n                                                >\n                                                    <i class=\"fas fa-angle-left\"></i>\n                                                </button>\n                                                <p>\n                                                    {{ guestsForm.controls.adultsNumber.value }}\n                                                    {{ \"RESOURCE.RES-FILTERS.NR_ADULTS\" | translate }}\n                                                </p>\n                                                <button (click)=\"increaseNrGuests('adultsNumber')\" type=\"button\">\n                                                    <i class=\"fas fa-angle-right\"></i>\n                                                </button>\n                                            </div>\n\n                                            <div class=\"guests-selector\">\n                                                <button [disabled]=\"guestsForm.controls.childrenNumber.value === 0\"\n                                                        (click)=\"decreaseNrGuests('childrenNumber')\"\n                                                        type=\"button\"\n                                                >\n                                                    <i class=\"fas fa-angle-left\"></i>\n                                                </button>\n                                                <p>\n                                                    {{ guestsForm.controls.childrenNumber.value }}\n                                                    {{ \"RESOURCE.RES-FILTERS.NR_CHILDREN\" | translate }}\n                                                </p>\n                                                <button (click)=\"increaseNrGuests('childrenNumber')\" type=\"button\">\n                                                    <i class=\"fas fa-angle-right\"></i>\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </ng-template>\n                                </ngb-panel>\n                            </ngb-accordion>\n                        </ng-container>\n\n                        <ng-template #noTripsForSelectedCity>\n                            <p class=\"text-center\">\n                                {{\"ITINERARIES.NO-TRIPS-AVAILABLE\" | translate}}\n                            </p>\n                        </ng-template>\n\n                        <button *ngIf=\"selectedTrip\"\n                                (click)=\"confirmSelection()\"\n                                class=\"continue btn-auto btn-color-fill\">\n                            {{\"BTN.CONTINUE\" | translate}}\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>";

/***/ }),

/***/ 26548:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/country-select/country-select.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n\n    <div *ngIf=\"systemSetting?.tripOptions?.holidayOffer?.image?.filePath as imgPath\" class=\"background-container\">\n        <img [src]=\"imgPath\" alt=\"category-background-image\">\n    </div>\n\n    <div class=\"content-container\">\n\n        <div *ngIf=\"countries\" class=\"container categories-container\">\n\n            <h1 class=\"text-center\">\n                {{\"ITINERARIES.COUNTRY-SELECT\" | translate}}\n            </h1>\n\n            <div class=\"row\">\n                <ng-container *ngFor=\"let country of countries\">\n                    <div class=\"col-12 col-md-6 col-lg-4\">\n                        <app-category-card [imgPath]=\"country?.image?.filePath\"\n                                           [nameRo]=\"country?.name\"\n                                           [nameEn]=\"country?.name\"\n                                           [height]=\"320\"\n                                           (click)=\"selectCountry(country)\"\n                                           ></app-category-card>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n\n    </div>\n\n</div>";

/***/ }),

/***/ 96346:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/edit-itinerary/edit-itinerary.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"itineraryData; else loadingData\">\n    <div class=\"d-flex flex-column\">\n\n        <div *ngIf=\"itineraryData?.featuredImage\" class=\"background-container\">\n            <img [src]=\"itineraryData?.featuredImage?.filePath\" alt=\"itinerary-background-image\">\n        </div>\n\n        <div class=\"content-container\">\n            <h1 class=\"text-center\">\n                Itinerary\n            </h1>\n\n            <div *ngIf=\"itineraryExtraInfo?.itineraryType !== 'ai'\" class=\"container\">\n                <h5>\n                    {{\"ITINERARIES.CONFIGURE-ITINERARY\" | translate}}\n                </h5>\n\n                <p>\n                    {{\"ITINERARIES.CREATE-EXPERIENCE\"| translate}}\n                </p>\n\n                <p class=\"m-0\">\n                    <mat-form-field class=\"w-100\" appearance=\"standard\">\n                        <mat-label>{{\"ITINERARIES.NAME\"| translate}}\n                        </mat-label>\n                        <input  [formControl]=\"itineraryName\"\n                                matInput placeholder=\"Itinerary name...\">\n                        <mat-icon role=\"button\" *ngIf=\"itineraryName.value\" matSuffix\n                                  (click)=\"itineraryName.setValue('')\">\n                            clear\n                        </mat-icon>\n                        <mat-error *ngIf=\"itineraryName.hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                    </mat-form-field>\n                </p>\n            </div>\n\n            <app-images-gallery *ngIf=\"itineraryData?.images\" [images]=\"itineraryData.images\"></app-images-gallery>\n\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <app-transport></app-transport>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <app-accomodation (itineraryChanged)=\"handleItineraryChanges($event, 'accommodation')\"></app-accomodation>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <app-eat-and-drink (itineraryChanged)=\"handleItineraryChanges($event, 'eatAndDrinks')\"></app-eat-and-drink>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <app-activities [dayActivities]=\"true\" (itineraryChanged)=\"handleItineraryChanges($event, 'dayActivities')\"></app-activities>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <app-activities [dayActivities]=\"false\" (itineraryChanged)=\"handleItineraryChanges($event, 'eveningActivities')\"></app-activities>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"container\">\n                <div class=\"price-container\">\n                    <div class=\"price\">\n                        <p class=\"m-0\">\n                            {{\"ITINERARIES.TOTAL-COST\"| translate}}\n                        </p>\n                        <span>\n                            €{{ itineraryTotalPrice }} (To be paid: €{{ itineraryPaidAmount }})\n                        </span>\n                    </div>\n\n                    <button [disabled]=\"confirmBtnDisabled\" class=\"btn-auto btn-color-fill\" type=\"button\" (click)=\"confirmItinerary()\">\n                        {{\"ITINERARIES.GENERATE-ITINERARY\"| translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n<ng-template #loadingData>\n    <div class=\"w-100 h-100 d-flex justify-content-center align-items-center\" [style.background-color]=\"'white'\">\n        <mat-spinner [diameter]=\"50\" matSuffix></mat-spinner>\n    </div>\n</ng-template>";

/***/ }),

/***/ 63895:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/itineraries-theme/itineraries-theme.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"(allData$ | async) as allData\">\n    <div class=\"d-flex flex-column\">\n\n        <div class=\"background-container\">\n            <img [src]=\"allData.systemSettings?.tripOptions?.itinerary?.image?.filePath\" alt=\"itinerary-background-image\">\n        </div>\n\n        <div class=\"content-container\">\n            <div class=\"container\">\n\n                <h1 class=\"text-center\">\n                    {{\"ITINERARIES.SELECT-THEME\" | translate}}\n                </h1>\n\n                <ngb-accordion class=\"outer-accordion-container\" [closeOthers]=\"true\" [destroyOnHide]=\"false\">\n                    <ng-container *ngFor=\"let journeyTheme of allData.journeyThemes; let innerAccIndex = index\">\n                        <ngb-panel *ngIf=\"!(isManualItinerary && journeyTheme?.roadTrip)\">\n                            <ng-template ngbPanelHeader let-opened=\"opened\">\n                                <button ngbPanelToggle\n                                        (click)=\"selectJourneyTheme(journeyTheme, innerAccIndex)\"\n                                        type=\"button\"\n                                        class=\"outer-accordion-header\">\n                                    <app-category-card [imgPath]=\"journeyTheme?.icon?.filePath\"\n                                                       [nameRo]=\"journeyTheme?.name\"\n                                                       [nameEn]=\"journeyTheme?.name\"\n                                                       [height]=\"200\"\n                                                       [selected]=\"opened\"\n                                    ></app-category-card>\n                                </button>\n                            </ng-template>\n                            <ng-template ngbPanelContent>\n\n                                <ngb-accordion #innerAccordion class=\"inner-accordion-container\" [closeOthers]=\"true\" [destroyOnHide]=\"false\">\n                                    <ngb-panel>\n                                        <ng-template ngbPanelHeader let-opened=\"opened\">\n                                            <button ngbPanelToggle\n                                                    type=\"button\"\n                                                    [ngClass]=\"formBtnClicked && !selectedDestinationType ? 'panel-warning' : null\"\n                                                    class=\"panel-header-step\">\n                                                <span> {{\"ITINERARIES.STEP\" | translate}} I</span>\n                                                <p>{{\"ITINERARIES.SELECT-DESTINATION-TYPE\" | translate}}</p>\n                                                <i class=\"fas fa-exclamation-circle\"></i>\n                                            </button>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n\n                                            <mat-radio-group [(ngModel)]=\"selectedDestinationType\"\n                                                             class=\"custom-itinerary-radio-group\">\n                                                <mat-radio-button *ngFor=\"let destinationType of allData.typesOfDestination\" [value]=\"destinationType\">\n                                                    <app-category-card [imgPath]=\"destinationType?.icon?.filePath\"\n                                                                       [nameRo]=\"destinationType?.name\"\n                                                                       [nameEn]=\"destinationType?.name\"\n                                                                       [height]=\"100\"\n                                                                       [selected]=\"selectedDestinationType?.id === destinationType.id\"\n                                                    ></app-category-card>\n                                                </mat-radio-button>\n                                            </mat-radio-group>\n\n                                        </ng-template>\n                                    </ngb-panel>\n\n                                    <ngb-panel>\n                                        <ng-template ngbPanelHeader let-opened=\"opened\">\n                                            <button ngbPanelToggle\n                                                    type=\"button\"\n                                                    [ngClass]=\"formBtnClicked && !selectedJourneyType ? 'panel-warning' : null\"\n                                                    class=\"panel-header-step\">\n                                                <span>{{\"ITINERARIES.STEP\" | translate}} II</span>\n                                                <p>{{\"ITINERARIES.SELECT-JOURNEY-TYPE\" | translate}}</p>\n                                                <i class=\"fas fa-exclamation-circle\"></i>\n                                            </button>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n\n                                            <mat-radio-group [(ngModel)]=\"selectedJourneyType\"\n                                                             class=\"custom-itinerary-radio-group\">\n                                                <mat-radio-button *ngFor=\"let journeyType of allData.typesOfJourney\" [value]=\"journeyType\">\n                                                    <app-category-card [imgPath]=\"journeyType?.icon?.filePath\"\n                                                                       [nameRo]=\"journeyType?.name\"\n                                                                       [nameEn]=\"journeyType?.name\"\n                                                                       [height]=\"100\"\n                                                                       [selected]=\"selectedJourneyType?.id === journeyType.id\"\n                                                    ></app-category-card>\n                                                </mat-radio-button>\n                                            </mat-radio-group>\n\n                                        </ng-template>\n                                    </ngb-panel>\n\n                                    <ngb-panel>\n                                        <ng-template ngbPanelHeader let-opened=\"opened\">\n                                            <button ngbPanelToggle\n                                                    type=\"button\"\n                                                    [ngClass]=\"formBtnClicked && extraInfo.invalid ? 'panel-warning' : null\"\n                                                    class=\"panel-header-step\">\n                                                <span>{{\"ITINERARIES.STEP\" | translate}} III</span>\n                                                <p>{{\"ITINERARIES.SELECT-JOURNEY-DETAILS\" | translate}}</p>\n                                                <i class=\"fas fa-exclamation-circle\"></i>\n                                            </button>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n\n                                            <div class=\"container py-3\">\n                                                <form [formGroup]=\"extraInfo\">\n                                                    <div class=\"row row-gap-24\">\n\n                                                        <div class=\"col-12\">\n                                                            <div class=\"guests-container\">\n\n                                                                <div class=\"guests-selector\">\n                                                                    <button [disabled]=\"extraInfo.controls.adultsNumber.value === 1\"\n                                                                            (click)=\"decreaseNrGuests('adultsNumber')\"\n                                                                            type=\"button\"\n                                                                    >\n                                                                        <i class=\"fas fa-angle-left\"></i>\n                                                                    </button>\n                                                                    <p>\n                                                                        {{ extraInfo.controls.adultsNumber.value }}\n                                                                        {{ \"RESOURCE.RES-FILTERS.NR_ADULTS\" | translate }}\n                                                                    </p>\n                                                                    <button (click)=\"increaseNrGuests('adultsNumber')\" type=\"button\">\n                                                                        <i class=\"fas fa-angle-right\"></i>\n                                                                    </button>\n                                                                </div>\n\n\n                                                                <div class=\"guests-selector\">\n                                                                    <button [disabled]=\"extraInfo.controls.childrenNumber.value === 0\"\n                                                                            (click)=\"decreaseNrGuests('childrenNumber')\"\n                                                                            type=\"button\"\n                                                                    >\n                                                                        <i class=\"fas fa-angle-left\"></i>\n                                                                    </button>\n                                                                    <p>\n                                                                        {{ extraInfo.controls.childrenNumber.value }}\n                                                                        {{ \"RESOURCE.RES-FILTERS.NR_CHILDREN\" | translate }}\n                                                                    </p>\n                                                                    <button (click)=\"increaseNrGuests('childrenNumber')\" type=\"button\">\n                                                                        <i class=\"fas fa-angle-right\"></i>\n                                                                    </button>\n                                                                </div>\n\n\n                                                                <div class=\"guests-selector\">\n                                                                    <button [disabled]=\"extraInfo.controls.roomsNumber.value === 1\"\n                                                                            (click)=\"decreaseNrGuests('roomsNumber')\" type=\"button\">\n                                                                        <i class=\"fas fa-angle-left\"></i>\n                                                                    </button>\n                                                                    <p>\n                                                                        {{ extraInfo.controls.roomsNumber.value }}\n                                                                        {{ \"RESOURCE.RES-FILTERS.NR_ROOMS\" | translate }}\n                                                                    </p>\n                                                                    <button (click)=\"increaseNrGuests('roomsNumber')\" type=\"button\">\n                                                                        <i class=\"fas fa-angle-right\"></i>\n                                                                    </button>\n                                                                </div>\n\n                                                            </div>\n                                                        </div>\n\n                                                        <div class=\"col-12 col-lg-4\">\n                                                            <div class=\"hour-container\">\n                                                                <p>{{\"ITINERARIES.BREAKFAST-HOUR\" | translate}}:</p>\n                                                                <mat-radio-group formControlName=\"breakfastHour\">\n                                                                    <mat-radio-button value=\"08:00\">08:00</mat-radio-button>\n                                                                    <mat-radio-button value=\"09:00\">09:00</mat-radio-button>\n                                                                    <mat-radio-button value=\"10:00\">10:00</mat-radio-button>\n                                                                </mat-radio-group>\n                                                            </div>\n                                                        </div>\n\n                                                        <div class=\"col-12 col-lg-4\">\n                                                            <div class=\"hour-container\">\n                                                                <p>{{\"ITINERARIES.LUNCH-HOUR\" | translate}}:</p>\n                                                                <mat-radio-group formControlName=\"lunchHour\">\n                                                                    <mat-radio-button value=\"12:00\">12:00</mat-radio-button>\n                                                                    <mat-radio-button value=\"13:00\">13:00</mat-radio-button>\n                                                                    <mat-radio-button value=\"14:00\">14:00</mat-radio-button>\n                                                                </mat-radio-group>\n                                                            </div>\n                                                        </div>\n\n                                                        <div class=\"col-12 col-lg-4\">\n                                                            <div class=\"hour-container\">\n                                                                <p>{{\"ITINERARIES.DINNER-HOUR\" | translate}}:</p>\n                                                                <mat-radio-group formControlName=\"dinnerHour\">\n                                                                    <mat-radio-button value=\"18:00\">18:00</mat-radio-button>\n                                                                    <mat-radio-button value=\"19:00\">19:00</mat-radio-button>\n                                                                    <mat-radio-button value=\"20:00\">20:00</mat-radio-button>\n                                                                </mat-radio-group>\n                                                            </div>\n                                                        </div>\n\n                                                        <ng-container *ngIf=\"!journeyTheme?.roadTrip && !isManualItinerary\">\n                                                            <div class=\"col-12 col-lg-6\">\n                                                                <mat-form-field appearance=\"outline\">\n                                                                    <mat-label>{{'RESERVATION.CHECK-IN'|translate}}</mat-label>\n                                                                    <!--daca apare o eroare la datepicker, sa stiti ca e legata strict de webstorm si functioneaza cum trebuie-->\n                                                                    <input formControlName=\"startDate\" matInput [min]=\"currentDay\"\n                                                                           [matDatepicker]=\"startDatePicker\"\n                                                                           (dateChange)=\"endDatePicker.open()\">\n                                                                    <mat-error *ngIf=\"extraInfo.get('startDate').hasError('startDateIsHigherOrEqual')\">\n                                                                        {{\"ITINERARIES.START-DATE-LOWER\" | translate}} \n                                                                    </mat-error>\n                                                                    <mat-datepicker-toggle matSuffix\n                                                                                           [for]=\"startDatePicker\"></mat-datepicker-toggle>\n                                                                    <mat-datepicker #startDatePicker></mat-datepicker>\n                                                                </mat-form-field>\n                                                            </div>\n\n                                                            <div class=\"col-12 col-lg-6\">\n                                                                <mat-form-field appearance=\"outline\">\n                                                                    <mat-label>{{'RESERVATION.CHECK-OUT'|translate}}</mat-label>\n                                                                    <input formControlName=\"endDate\" matInput [min]=\"nextDay\"\n                                                                           [matDatepicker]=\"endDatePicker\">\n                                                                    <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\n                                                                    <mat-datepicker #endDatePicker></mat-datepicker>\n                                                                </mat-form-field>\n                                                            </div>\n                                                        </ng-container>\n\n                                                        <ng-container *ngIf=\"journeyTheme?.roadTrip || isManualItinerary\">\n                                                            <ng-container formArrayName=\"destinations\">\n                                                                <ngb-accordion #destinationsAccordion [activeIds]=\"'0'\" class=\"outer-accordion-container\" [closeOthers]=\"true\" [destroyOnHide]=\"false\">\n                                                                    <ngb-panel *ngFor=\"let destination of destinations.controls; let destinationIndex = index\"\n                                                                               [id]=\"destinationIndex + ''\"\n                                                                               [type]=\"formBtnClicked && destinations.controls.at(destinationIndex).invalid ? 'warning' : null\"\n                                                                    >\n                                                                        <ng-template ngbPanelHeader>\n                                                                            <div class=\"destination-panel d-flex align-items-center\">\n                                                                                <button *ngIf=\"!isManualItinerary\" ngbPanelToggle\n                                                                                        type=\"button\">\n                                                                                    <p class=\"m-0\">\n                                                                                        {{\"ITINERARIES.DESTINATION\" | translate}} {{ destinationIndex + 1 }}:\n                                                                                        <ng-container *ngIf=\"destination.value.location\">\n                                                                                            {{ destination.value.location?.city }}, {{ destination.value.location?.country }}\n                                                                                        </ng-container>\n                                                                                    </p>\n                                                                                </button>\n\n                                                                                <button *ngIf=\"isManualItinerary\"\n                                                                                        type=\"button\">\n                                                                                    <p class=\"m-0\">\n                                                                                        {{\"ITINERARIES.DESTINATION\" | translate}}:\n                                                                                        <ng-container *ngIf=\"destination.value.location\">\n                                                                                            {{ destination.value.location?.city }}, {{ destination.value.location?.country }}\n                                                                                        </ng-container>\n                                                                                    </p>\n                                                                                </button>\n\n                                                                                <button *ngIf=\"destinationIndex > 0\" type=\"button\" (click)=\"removeDestination(destinationIndex)\">\n                                                                                    <i class=\"fas fa-times\"></i>\n                                                                                </button>\n                                                                            </div>\n                                                                        </ng-template>\n\n                                                                        <ng-template ngbPanelContent>\n                                                                            <ng-container [formGroupName]=\"destinationIndex\">\n                                                                                <div class=\"container pt-3\">\n                                                                                    <div class=\"row\">\n                                                                                        <div class=\"col-12 col-lg-6\">\n                                                                                            <mat-form-field appearance=\"outline\">\n                                                                                                <mat-label>{{'RESERVATION.CHECK-IN'|translate}}</mat-label>\n                                                                                                <!--daca apare o eroare la datepicker, sa stiti ca e legata strict de webstorm si functioneaza cum trebuie-->\n                                                                                                <input formControlName=\"startDate\" matInput [min]=\"currentDay\"\n                                                                                                       [matDatepicker]=\"startDatePicker\"\n                                                                                                       (dateChange)=\"endDatePicker.open()\">\n                                                                                                <mat-error *ngIf=\"extraInfo.get('startDate').hasError('startDateIsHigherOrEqual')\">\n                                                                                                    {{\"ITINERARIES.START-DATE-LOWER\" | translate}}\n                                                                                                </mat-error>\n                                                                                                <mat-datepicker-toggle matSuffix\n                                                                                                                       [for]=\"startDatePicker\"></mat-datepicker-toggle>\n                                                                                                <mat-datepicker #startDatePicker></mat-datepicker>\n                                                                                            </mat-form-field>\n                                                                                        </div>\n\n                                                                                        <div class=\"col-12 col-lg-6\">\n                                                                                            <mat-form-field appearance=\"outline\">\n                                                                                                <mat-label>{{'RESERVATION.CHECK-OUT'|translate}}</mat-label>\n                                                                                                <input formControlName=\"endDate\" matInput [min]=\"nextDay\"\n                                                                                                       [matDatepicker]=\"endDatePicker\">\n                                                                                                <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\n                                                                                                <mat-datepicker #endDatePicker></mat-datepicker>\n                                                                                            </mat-form-field>\n                                                                                        </div>\n\n                                                                                        <div class=\"col-12\">\n                                                                                            <p class=\"m-0\">\n                                                                                                <mat-form-field appearance=\"outline\">\n                                                                                                    <mat-label>{{\"ITINERARIES.SEARCH-CITY\" | translate}}</mat-label>\n                                                                                                    <input [(ngModel)]=\"cityToSearch\" [ngModelOptions]=\"{standalone: true}\"\n                                                                                                           (ngModelChange)=\"searchForCities()\" matInput placeholder=\"Search city...\">\n                                                                                                    <mat-icon role=\"button\" *ngIf=\"!cityToSearch\" matSuffix>search</mat-icon>\n                                                                                                    <mat-icon role=\"button\" *ngIf=\"cityToSearch\" matSuffix\n                                                                                                              (click)=\"cityToSearch = null;\n                                                                                                               recommendedCities = null;\"\n                                                                                                    >clear</mat-icon>\n                                                                                                </mat-form-field>\n                                                                                            </p>\n\n                                                                                            <div class=\"destinations-container\">\n                                                                                                <div *ngFor=\"let city of recommendedCities | slice : 0 : 5\"\n                                                                                                     (click)=\"updateLocationValue(destinationIndex, city); cityToSearch = null; recommendedCities = null\"\n                                                                                                     (keyup.enter)=\"updateLocationValue(destinationIndex, city); cityToSearch = null; recommendedCities = null\"\n                                                                                                     [tabindex]=\"0\"\n                                                                                                     class=\"destination-element\">\n                                                                                            <span class=\"destination-icon\">\n                                                                                                <i class=\"fas fa-map-marker-alt\"></i>\n                                                                                            </span>\n\n                                                                                                    <p>{{ city.city }}, {{ city.country }}</p>\n                                                                                                </div>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </ng-container>\n                                                                        </ng-template>\n                                                                    </ngb-panel>\n                                                                </ngb-accordion>\n                                                            </ng-container>\n\n                                                            <div *ngIf=\"!isManualItinerary\" class=\"col-12\">\n                                                                <button *ngIf=\"!isManualItinerary\"\n                                                                        [disabled]=\"destinations?.controls?.at(-1)?.invalid\" class=\"btn-add-destination\" type=\"button\" (click)=\"addDestination()\">\n                                                                        {{\"ITINERARIES.ADD-NEW-DESTINATION\" | translate}}\n                                                                    <i class=\"fas fa-plus\"></i>\n                                                                </button>\n                                                            </div>\n                                                        </ng-container>\n\n                                                    </div>\n                                                </form>\n                                            </div>\n\n                                        </ng-template>\n                                    </ngb-panel>\n\n                                    <ngb-panel>\n                                        <ng-template ngbPanelHeader>\n                                            <button type=\"button\"\n                                                    (click)=\"confirmSelection(journeyTheme)\"\n                                                    class=\"btn-auto btn-color-fill generate-itinerary\">\n                                                    {{\"ITINERARIES.GENERATE-ITINERARY\" | translate}}                                            </button>\n                                        </ng-template>\n                                    </ngb-panel>\n                                </ngb-accordion>\n\n                            </ng-template>\n                        </ngb-panel>\n                    </ng-container>\n                </ngb-accordion>\n\n            </div>\n        </div>\n\n    </div>\n</ng-container>\n";

/***/ }),

/***/ 86962:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/recommended-itineraries/recommended-itineraries.component.html?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"(data$ | async) as data; else loadingData\">\n    <div class=\"d-flex flex-column\">\n\n        <div class=\"background-container\">\n            <img [src]=\"data.systemSettings?.tripOptions?.itinerary?.image?.filePath\" alt=\"itinerary-background-image\">\n        </div>\n\n        <div class=\"content-container\">\n            <div class=\"container\">\n\n                <h1 class=\"text-center\">\n                    {{\"ITINERARIES.AI-GENERATED-LIST\" | translate}} \n                </h1>\n\n                <div *ngIf=\"data.itineraries?.length > 0; else noItinerariesFound\" class=\"row\">\n                    <div *ngFor=\"let itinerary of data.itineraries\" class=\"col-12 col-lg-4\">\n                        <app-category-card [imgPath]=\"itinerary?.featuredImage?.filePath\"\n                                           [nameRo]=\"itinerary?.name\"\n                                           [nameEn]=\"itinerary?.name\"\n                                           [height]=\"200\"\n                                           (click)=\"selectItinerary(itinerary)\"\n                        ></app-category-card>\n                    </div>\n                </div>\n\n                <ng-template #noItinerariesFound>\n                    <h2 class=\"text-center text-danger\">\n                        {{\"ITINERARIES.NO-ITINERARIES-AVAILABLE\" | translate}}\n                    </h2>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n<ng-template #loadingData>\n    <div class=\"w-100 h-100 d-flex justify-content-center align-items-center\" [style.background-color]=\"'white'\">\n        <mat-spinner [diameter]=\"50\" matSuffix></mat-spinner>\n    </div>\n</ng-template>";

/***/ }),

/***/ 47661:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/client-trips-itineraries/trip-view/trip-view.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"tripData\" class=\"d-flex flex-column\">\n\n    <div class=\"background-container\">\n        <img [src]=\"tripData?.featuredImage?.filePath\" alt=\"trip-background-image\">\n    </div>\n\n    <div class=\"content-container\">\n        <div class=\"container\">\n            <h1 class=\"text-left m-0\">\n                {{ tripData.name | titlecase }}\n            </h1>\n        </div>\n\n        <app-images-gallery *ngIf=\"tripData?.images\" [images]=\"tripData.images\"></app-images-gallery>\n\n        <div class=\"container\">\n            <p class=\"m-0\">\n               {{ tripData.description }}\n            </p>\n        </div>\n\n        <div class=\"container\">\n            <div class=\"info-card\">\n                <div *ngIf=\"guestsState?.adultsNumber || guestsState?.childrenNumber\" class=\"info-card-left\">\n                    <div class=\"title-container\">\n                        <h4>\n                            {{\"ITINERARIES.NUMBER-GUESTS\" | translate}}\n                        </h4>\n                    </div>\n\n                    <ul>\n                        <li *ngIf=\"guestsState?.adultsNumber > 0\">\n                            {{\"ITINERARIES.SELECTED\" | translate}} {{ guestsState.adultsNumber }} {{\"RESOURCE.RES-FILTERS.NR_ADULTS\" | translate}} \n                        </li>\n\n                        <li *ngIf=\"guestsState?.childrenNumber > 0\">\n                            {{\"ITINERARIES.SELECTED\" | translate}} {{ guestsState.childrenNumber }} {{\"RESOURCE.RES-FILTERS.NR_CHILDREN\" | translate}}\n                        </li>\n\n                        <li *ngIf=\"tripData?.estimatedPrice\">\n                            {{\"ITINERARIES.PRICE-PER-PERSON\" | translate}} €{{ tripData.estimatedPrice }}\n                        </li>\n                    </ul>\n                </div>\n\n                <div class=\"info-card-right\">\n                    <div class=\"title-container\">\n                        <h4>\n                            {{\"ITINERARIES.TRANSPORT\" | translate}}\n                        </h4>\n                    </div>\n\n                    <ul>\n                        <li>\n                            {{ \"TRIPS.AIRLINE_TICKET_INCLUDED\" | translate }}\n                        </li>\n\n                        <li>\n                            {{ \"TRIPS.HAND_LUGGAGE\" | translate }}\n                        </li>\n\n                        <li *ngIf=\"tripData?.departure?.location\">\n                            {{ \"TRIPS.DEPARTURE\" | translate }} - {{ tripData.departure.location }}\n                        </li>\n\n                        <li *ngIf=\"tripData?.departure?.start\">\n                            {{ \"TRIPS.DEPARTURE_TIME\" | translate }} - {{ tripData.departure.start | date : 'HH:mm' }}\n                        </li>\n\n                        <li *ngIf=\"tripData?.arrival?.location\">\n                            {{ \"TRIPS.ARRIVAL\" | translate }} - {{ tripData.arrival.location }}\n                        </li>\n\n                        <li *ngIf=\"tripData?.arrival?.end\">\n                            {{ \"TRIPS.ARRIVAL_TIME\" | translate }} - {{ tripData.departure.end | date : 'HH:mm' }}\n                        </li>\n\n                        <li>\n                            {{ \"TRIPS.AIRPORT_TRANSFER\" | translate }}\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"container\">\n            <div class=\"info-card flex-column\">\n                <div class=\"title-container\">\n                    <h4>\n                        {{ \"ITINERARIES.SELECT-ACCOMODATION\" | translate }}\n                    </h4>\n                </div>\n\n                <div class=\"title-container hotels-container\">\n                    <ng-container *ngIf=\"tripData?.hotelList?.length > 0; else noHotelsForSelectedTrip\">\n                        <ngb-accordion #ngbAccordion [closeOthers]=\"true\" [destroyOnHide]=\"false\" [activeIds]=\"['0']\">\n\n                            <ng-container *ngFor=\"let hotel of tripData.hotelList; let index = index\">\n                                <ngb-panel [id]=\"index + ''\">\n                                    <ng-template ngbPanelHeader let-opened=\"opened\">\n                                        <button [class.opened]=\"opened\" class=\"hotel-item\" (click)=\"handleHotelToggle(ngbAccordion, index + '')\">\n                                            <div class=\"hotel-title\">\n                                                <p>\n                                                    {{ hotel.hotelName }}\n                                                </p>\n\n                                                <span>\n                                                    <ng-container *ngFor=\"let hotelRating of [].constructor(hotel.starRating)\">\n                                                        *\n                                                    </ng-container>\n                                                </span>\n                                            </div>\n\n                                            <div class=\"hotel-price\">\n                                                <p>\n                                                    {{ \"ITINERARIES.PRICE-PER-ONE-PERSON\" | translate }}  /\n                                                </p>\n\n                                                <span>\n                                                    €{{ hotel.rooms | cheapestRoom }}\n                                                </span>\n\n                                                <div class=\"selected-icon\">\n                                                    <div *ngIf=\"opened\" class=\"icon-background\">\n                                                        <i class=\"fas fa-check\"></i>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </button>\n                                    </ng-template>\n                                    <ng-template ngbPanelContent>\n                                        <div class=\"row\">\n                                            <div class=\"col-12 col-md-6 col-lg-4\" *ngFor=\"let tripRoom of hotel.rooms\">\n                                                <app-trip-room-card [tripRoom]=\"tripRoom\"\n                                                                    [nrOfNights]=\"tripData.numberOfNights\"\n                                                                    (tripRoomNrChange)=\"handleNewRoomNr($event)\">\n                                                </app-trip-room-card>\n                                            </div>\n                                        </div>\n                                    </ng-template>\n                                </ngb-panel>\n                            </ng-container>\n\n                        </ngb-accordion>\n                    </ng-container>\n\n                    <ng-template #noHotelsForSelectedTrip>\n                        <p class=\"text-center\">\n                            {{ \"ITINERARIES.NO-HOTELS\" | translate }}\n                        </p>\n                    </ng-template>\n                </div>\n\n                <div class=\"checkout-bar title-container d-flex align-items-center justify-content-between\">\n                    <h4>\n                        {{ \"ITINERARIES.TOTAL-COST\" | translate }}\n                    </h4>\n\n                    <div class=\"d-flex align-items-center justify-content-end\">\n                        <p class=\"m-0\">\n                            €{{ totalPrice }}\n                        </p>\n\n                        <button class=\"btn-auto btn-color-fill\" (click)=\"confirmSelection()\">\n                            Check out\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>";

/***/ }),

/***/ 18856:
/*!***********************************************************************************************!*\
  !*** ./src/app/standalone-components/trip-room-card/trip-room-card.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"room-card\">\n    <div class=\"img-container\">\n        <img [src]=\"tripRoom?.image?.filePath\" alt=\"room image\">\n    </div>\n\n    <div class=\"info-container\">\n        <p class=\"room-name\">\n            {{ tripRoom?.name }}\n        </p>\n\n        <div class=\"room-size\">\n            Fits: {{ tripRoom?.people }} x <i class=\"fas fa-user\"></i>\n            |\n            <span *ngIf=\"tripRoom?.bedType?.quantity > 0\">\n                {{ tripRoom.bedType.quantity }} x {{ tripRoom.bedType.type }}\n            </span>\n        </div>\n\n        <p class=\"price-for\">\n            Price for <ng-container *ngIf=\"tripRoom.people\">{{ tripRoom.people }}</ng-container>\n        </p>\n\n        <div class=\"d-flex justify-content-between\">\n            <p *ngIf=\"nrOfNights\" class=\"bold-blue-text\">\n                {{ nrOfNights }} Nights\n            </p>\n\n            <p *ngIf=\"tripRoom.price && nrOfNights\" class=\"bold-blue-text\">\n                € {{ tripRoom.price }}\n            </p>\n        </div>\n\n        <div class=\"guests-selector\">\n            <button [disabled]=\"roomsNr.value === 0\"\n                    (click)=\"decreaseRoomsNr()\">\n                <i class=\"fas fa-angle-left\"></i>\n            </button>\n            <p>\n                {{ roomsNr.value }}\n                {{ \"RESOURCE.RES-FILTERS.NR_ROOMS\" | translate }}\n            </p>\n            <button [disabled]=\"roomsNr.value === tripRoom.available\" (click)=\"increaseRoomsNr()\">\n                <i class=\"fas fa-angle-right\"></i>\n            </button>\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_client-trips-itineraries_client-trips-itineraries_module_ts.js.map