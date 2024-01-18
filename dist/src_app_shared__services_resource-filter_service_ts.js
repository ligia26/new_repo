"use strict";
(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_shared__services_resource-filter_service_ts"],{

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


/***/ })

}]);
//# sourceMappingURL=src_app_shared__services_resource-filter_service_ts.js.map