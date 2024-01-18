"use strict";
(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_shared__services_resource-filter_service_ts-src_app_shared__services_resources_service_ts"],{

/***/ 41682:
/*!*************************************************************!*\
  !*** ./src/app/shared/_services/resource-filter.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 3145:
/*!*******************************************************!*\
  !*** ./src/app/shared/_services/resources.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=src_app_shared__services_resource-filter_service_ts-src_app_shared__services_resources_service_ts.js.map