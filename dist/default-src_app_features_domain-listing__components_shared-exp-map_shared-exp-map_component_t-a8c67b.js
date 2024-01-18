(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_features_domain-listing__components_shared-exp-map_shared-exp-map_component_t-a8c67b"],{

/***/ 57603:
/*!************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/shared-exp-map/shared-exp-map.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedExpMapComponent": () => (/* binding */ SharedExpMapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shared_exp_map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-exp-map.component.html?ngResource */ 19303);
/* harmony import */ var _shared_exp_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-exp-map.component.scss?ngResource */ 59067);
/* harmony import */ var _shared_exp_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_exp_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Map */ 29272);
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/View */ 75939);
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/proj */ 63815);
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/layer/Tile */ 65833);
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source/OSM */ 74121);
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/layer/Vector */ 79995);
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/source/Vector */ 33535);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol */ 6788);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/geom */ 83733);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style */ 864);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style */ 44483);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style */ 95567);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/control */ 8569);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);

















let SharedExpMapComponent = class SharedExpMapComponent {
  constructor(data) {
    this.data = data;
    this.experienceData = this.data.experienceData;
    this.isValidCoords = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    console.log('din modalul shared exp', this.experienceData);
    this.checkCoordinates();
  }
  checkCoordinates() {
    const lat = this.experienceData?.geographicalCoordinates?.latitude;
    const long = this.experienceData?.geographicalCoordinates?.longitude;
    console.log('aici verificam coordonatele', lat, long);
    // if (lat && long && lat >= -90 && lat <= 90 && long >= -180 && long <= 180) {
    //   this.isValidCoords = true;
    this.initMap();
    // }
  }

  initMap() {
    console.log('se initializeaza map-ul');
    const resourceFeature = new ol__WEBPACK_IMPORTED_MODULE_4__["default"]({
      geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_5__["default"]((0,ol_proj__WEBPACK_IMPORTED_MODULE_2__.fromLonLat)([+this.experienceData.geographicalCoordinates.longitude, +this.experienceData.geographicalCoordinates.latitude]))
    });
    resourceFeature.setStyle(new ol_style__WEBPACK_IMPORTED_MODULE_6__["default"]({
      text: new ol_style__WEBPACK_IMPORTED_MODULE_7__["default"]({
        text: '\uf3c5',
        font: '900 35px "Font Awesome 5 Free"',
        textBaseline: 'bottom',
        fill: new ol_style__WEBPACK_IMPORTED_MODULE_8__["default"]({
          color: 'red'
        })
      })
    }));
    // open layers map init
    this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_9__["default"]({
      view: new ol_View__WEBPACK_IMPORTED_MODULE_10__["default"]({
        center: (0,ol_proj__WEBPACK_IMPORTED_MODULE_2__.fromLonLat)([+this.experienceData.geographicalCoordinates.longitude, +this.experienceData.geographicalCoordinates.latitude]),
        zoom: 15
      }),
      layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_11__["default"]({
        source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_12__["default"]()
      }), new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_13__["default"]({
        source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_14__["default"]({
          features: [resourceFeature]
        })
      })],
      controls: [new ol_control__WEBPACK_IMPORTED_MODULE_15__["default"]()]
    });
  }
  ngAfterViewInit() {
    console.log('se seteaza mark-up-ul');
    if (this.map) {
      this.map.setTarget('ol-map');
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA]
    }]
  }];
};
SharedExpMapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-shared-exp-map',
  template: _shared_exp_map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_shared_exp_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SharedExpMapComponent);


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

/***/ 43209:
/*!******************************************************************************!*\
  !*** ./src/app/standalone-components/seats-viewer/seats-viewer.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeatsViewerComponent": () => (/* binding */ SeatsViewerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _seats_viewer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seats-viewer.component.html?ngResource */ 29989);
/* harmony import */ var _seats_viewer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seats-viewer.component.scss?ngResource */ 13551);
/* harmony import */ var _seats_viewer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_seats_viewer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 63370);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);
/* harmony import */ var _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-radio */ 3493);









let SeatsViewerComponent = class SeatsViewerComponent {
  constructor() {
    this.seatSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.isEditMode = true;
    this.hasBookedWithReservation = false;
    this.selectedSeatsMatrix = null;
    // width by nr of columns
    this.maxZoneWidth = 0;
  }
  ngOnInit() {
    this.checkIfEditMode();
    if (!this.isEditMode) {
      this.createEmptySeatsMatrix();
    } else {
      this.hasBookedWithReservation = this.checkIfBookedWithReservation();
    }
  }
  ngOnChanges() {
    console.log('se apeleaza on changes');
    if (!this.isEditMode) return;
    this.createMaxZoneWidth();
  }
  checkIfEditMode() {
    if (this.seatSelection.observed) {
      this.isEditMode = false;
    }
  }
  checkIfBookedWithReservation() {
    for (const zone of this.culturalRoom.zones) {
      for (const row of zone.rowsForBooking) {
        for (const seat of row.seats) {
          if (seat.seatStatus === 'bookedWithReservation') {
            return true;
          }
        }
      }
    }
    return false;
  }
  createEmptySeatsMatrix() {
    this.selectedSeatsMatrix = [];
    for (const zone of this.culturalRoom.zones) {
      this.checkIfMaxWidth(zone.columns);
      for (let rowIndex = 0; rowIndex < zone.rows; rowIndex++) {
        const row = [];
        for (let columnIndex = 0; columnIndex < zone.columns; columnIndex++) {
          row.push(null);
        }
        this.selectedSeatsMatrix.push(row);
      }
    }
    console.log('empty seats matrix', this.selectedSeatsMatrix);
  }
  createMaxZoneWidth() {
    this.maxZoneWidth = 0;
    for (const zone of this.culturalRoom.zones) {
      this.checkIfMaxWidth(zone.columns);
    }
  }
  toggleSeat(zoneIndex, rowIndex, seatIndex) {
    console.log('seat toggle', zoneIndex, rowIndex, seatIndex);
    const selectedZone = this.culturalRoom?.zones[zoneIndex];
    const selectedRow = selectedZone?.rowsForBooking[rowIndex];
    const selectedSeat = selectedRow?.seats[seatIndex];
    if (selectedSeat.seatStatus === 'booked' || selectedSeat.seatStatus === 'empty') return;
    // because each row index resets to 0 for each zone, we calculate the absolute row index to use in the matrix
    let rowOffset = 0;
    if (zoneIndex >= 1) {
      for (let index = 0; index < zoneIndex; index++) {
        rowOffset += this.culturalRoom.zones[index].rows;
      }
    }
    if (selectedSeat?.seatStatus === 'available') {
      selectedSeat.seatStatus = 'selected';
      this.selectedSeatsMatrix[rowIndex + rowOffset][seatIndex] = {
        price: selectedZone.price,
        rowLabel: selectedRow.rowLabel,
        seatColumnLabel: selectedSeat.seatColumnLabel
      };
    } else if (selectedSeat?.seatStatus === 'selected') {
      selectedSeat.seatStatus = 'available';
      this.selectedSeatsMatrix[rowIndex + rowOffset][seatIndex] = null;
    }
    console.log(this.selectedSeatsMatrix);
    // transformam matricea intr-un singur array si scoatem valorile null, apoi emitem arrayul de locuri
    console.log(this.selectedSeatsMatrix.flat().filter(seat => seat));
    this.seatSelection.emit(this.selectedSeatsMatrix.flat().filter(seat => seat));
  }
  checkIfMaxWidth(columns) {
    this.maxZoneWidth = this.maxZoneWidth < columns ? columns : this.maxZoneWidth;
  }
  onChangeSeatStatus(event, zoneIndex, rowIndex, seatIndex) {
    console.log(event, zoneIndex, rowIndex, seatIndex);
    const currentRow = this.culturalRoom.zones[zoneIndex].rowsForBooking[rowIndex].seats;
    this.regenerateSeatLabels(currentRow);
    if (this.isRowEmpty(currentRow)) {
      this.culturalRoom.zones[zoneIndex].rowsForBooking[rowIndex].rowLabel = null;
      this.regenerateRowLabels();
    } else {
      this.regenerateRowLabels();
    }
  }
  regenerateSeatLabels(seats) {
    let seatLabelCounter = 1;
    for (const seat of seats) {
      if (seat.seatStatus !== 'empty') {
        seat.seatColumnLabel = seatLabelCounter;
        seatLabelCounter++;
      } else {
        seat.seatColumnLabel = null;
      }
    }
  }
  regenerateRowLabels() {
    let rowLabelAsNumber = 1;
    for (const zone of this.culturalRoom.zones) {
      for (const row of zone.rowsForBooking) {
        if (!this.isRowEmpty(row.seats)) {
          row.rowLabel = this.rowsGenerationType === 'numbers' ? rowLabelAsNumber.toString() : this.numberToLetters(rowLabelAsNumber);
          rowLabelAsNumber++;
        }
      }
    }
  }
  numberToLetters(number) {
    let str = '',
      q,
      r;
    while (number > 0) {
      q = (number - 1) / 26;
      r = (number - 1) % 26;
      number = Math.floor(q);
      str = String.fromCharCode(65 + r) + str;
    }
    return str;
  }
  isRowEmpty(seats) {
    let rowIsEmpty = true;
    seats.forEach(seat => {
      if (seat.seatStatus !== 'empty') {
        rowIsEmpty = false;
      }
    });
    return rowIsEmpty;
  }
  static #_ = this.propDecorators = {
    culturalRoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    rowsGenerationType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    seatSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  };
};
SeatsViewerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-seats-viewer',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatLegacyTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_7__.MatLegacyMenuModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_8__.MatLegacyRadioModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule],
  template: _seats_viewer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_seats_viewer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SeatsViewerComponent);


/***/ }),

/***/ 43155:
/*!*****************************************!*\
  !*** ./node_modules/rbush/rbush.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function (t, i) {
   true ? module.exports = i() : 0;
}(this, function () {
  "use strict";

  function t(t, r, e, a, h) {
    !function t(n, r, e, a, h) {
      for (; a > e;) {
        if (a - e > 600) {
          var o = a - e + 1,
            s = r - e + 1,
            l = Math.log(o),
            f = .5 * Math.exp(2 * l / 3),
            u = .5 * Math.sqrt(l * f * (o - f) / o) * (s - o / 2 < 0 ? -1 : 1),
            m = Math.max(e, Math.floor(r - s * f / o + u)),
            c = Math.min(a, Math.floor(r + (o - s) * f / o + u));
          t(n, r, m, c, h);
        }
        var p = n[r],
          d = e,
          x = a;
        for (i(n, e, r), h(n[a], p) > 0 && i(n, e, a); d < x;) {
          for (i(n, d, x), d++, x--; h(n[d], p) < 0;) d++;
          for (; h(n[x], p) > 0;) x--;
        }
        0 === h(n[e], p) ? i(n, e, x) : i(n, ++x, a), x <= r && (e = x + 1), r <= x && (a = x - 1);
      }
    }(t, r, e || 0, a || t.length - 1, h || n);
  }
  function i(t, i, n) {
    var r = t[i];
    t[i] = t[n], t[n] = r;
  }
  function n(t, i) {
    return t < i ? -1 : t > i ? 1 : 0;
  }
  var r = function (t) {
    void 0 === t && (t = 9), this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), this.clear();
  };
  function e(t, i, n) {
    if (!n) return i.indexOf(t);
    for (var r = 0; r < i.length; r++) if (n(t, i[r])) return r;
    return -1;
  }
  function a(t, i) {
    h(t, 0, t.children.length, i, t);
  }
  function h(t, i, n, r, e) {
    e || (e = p(null)), e.minX = 1 / 0, e.minY = 1 / 0, e.maxX = -1 / 0, e.maxY = -1 / 0;
    for (var a = i; a < n; a++) {
      var h = t.children[a];
      o(e, t.leaf ? r(h) : h);
    }
    return e;
  }
  function o(t, i) {
    return t.minX = Math.min(t.minX, i.minX), t.minY = Math.min(t.minY, i.minY), t.maxX = Math.max(t.maxX, i.maxX), t.maxY = Math.max(t.maxY, i.maxY), t;
  }
  function s(t, i) {
    return t.minX - i.minX;
  }
  function l(t, i) {
    return t.minY - i.minY;
  }
  function f(t) {
    return (t.maxX - t.minX) * (t.maxY - t.minY);
  }
  function u(t) {
    return t.maxX - t.minX + (t.maxY - t.minY);
  }
  function m(t, i) {
    return t.minX <= i.minX && t.minY <= i.minY && i.maxX <= t.maxX && i.maxY <= t.maxY;
  }
  function c(t, i) {
    return i.minX <= t.maxX && i.minY <= t.maxY && i.maxX >= t.minX && i.maxY >= t.minY;
  }
  function p(t) {
    return {
      children: t,
      height: 1,
      leaf: !0,
      minX: 1 / 0,
      minY: 1 / 0,
      maxX: -1 / 0,
      maxY: -1 / 0
    };
  }
  function d(i, n, r, e, a) {
    for (var h = [n, r]; h.length;) if (!((r = h.pop()) - (n = h.pop()) <= e)) {
      var o = n + Math.ceil((r - n) / e / 2) * e;
      t(i, o, n, r, a), h.push(n, o, o, r);
    }
  }
  return r.prototype.all = function () {
    return this._all(this.data, []);
  }, r.prototype.search = function (t) {
    var i = this.data,
      n = [];
    if (!c(t, i)) return n;
    for (var r = this.toBBox, e = []; i;) {
      for (var a = 0; a < i.children.length; a++) {
        var h = i.children[a],
          o = i.leaf ? r(h) : h;
        c(t, o) && (i.leaf ? n.push(h) : m(t, o) ? this._all(h, n) : e.push(h));
      }
      i = e.pop();
    }
    return n;
  }, r.prototype.collides = function (t) {
    var i = this.data;
    if (!c(t, i)) return !1;
    for (var n = []; i;) {
      for (var r = 0; r < i.children.length; r++) {
        var e = i.children[r],
          a = i.leaf ? this.toBBox(e) : e;
        if (c(t, a)) {
          if (i.leaf || m(t, a)) return !0;
          n.push(e);
        }
      }
      i = n.pop();
    }
    return !1;
  }, r.prototype.load = function (t) {
    if (!t || !t.length) return this;
    if (t.length < this._minEntries) {
      for (var i = 0; i < t.length; i++) this.insert(t[i]);
      return this;
    }
    var n = this._build(t.slice(), 0, t.length - 1, 0);
    if (this.data.children.length) {
      if (this.data.height === n.height) this._splitRoot(this.data, n);else {
        if (this.data.height < n.height) {
          var r = this.data;
          this.data = n, n = r;
        }
        this._insert(n, this.data.height - n.height - 1, !0);
      }
    } else this.data = n;
    return this;
  }, r.prototype.insert = function (t) {
    return t && this._insert(t, this.data.height - 1), this;
  }, r.prototype.clear = function () {
    return this.data = p([]), this;
  }, r.prototype.remove = function (t, i) {
    if (!t) return this;
    for (var n, r, a, h = this.data, o = this.toBBox(t), s = [], l = []; h || s.length;) {
      if (h || (h = s.pop(), r = s[s.length - 1], n = l.pop(), a = !0), h.leaf) {
        var f = e(t, h.children, i);
        if (-1 !== f) return h.children.splice(f, 1), s.push(h), this._condense(s), this;
      }
      a || h.leaf || !m(h, o) ? r ? (n++, h = r.children[n], a = !1) : h = null : (s.push(h), l.push(n), n = 0, r = h, h = h.children[0]);
    }
    return this;
  }, r.prototype.toBBox = function (t) {
    return t;
  }, r.prototype.compareMinX = function (t, i) {
    return t.minX - i.minX;
  }, r.prototype.compareMinY = function (t, i) {
    return t.minY - i.minY;
  }, r.prototype.toJSON = function () {
    return this.data;
  }, r.prototype.fromJSON = function (t) {
    return this.data = t, this;
  }, r.prototype._all = function (t, i) {
    for (var n = []; t;) t.leaf ? i.push.apply(i, t.children) : n.push.apply(n, t.children), t = n.pop();
    return i;
  }, r.prototype._build = function (t, i, n, r) {
    var e,
      h = n - i + 1,
      o = this._maxEntries;
    if (h <= o) return a(e = p(t.slice(i, n + 1)), this.toBBox), e;
    r || (r = Math.ceil(Math.log(h) / Math.log(o)), o = Math.ceil(h / Math.pow(o, r - 1))), (e = p([])).leaf = !1, e.height = r;
    var s = Math.ceil(h / o),
      l = s * Math.ceil(Math.sqrt(o));
    d(t, i, n, l, this.compareMinX);
    for (var f = i; f <= n; f += l) {
      var u = Math.min(f + l - 1, n);
      d(t, f, u, s, this.compareMinY);
      for (var m = f; m <= u; m += s) {
        var c = Math.min(m + s - 1, u);
        e.children.push(this._build(t, m, c, r - 1));
      }
    }
    return a(e, this.toBBox), e;
  }, r.prototype._chooseSubtree = function (t, i, n, r) {
    for (; r.push(i), !i.leaf && r.length - 1 !== n;) {
      for (var e = 1 / 0, a = 1 / 0, h = void 0, o = 0; o < i.children.length; o++) {
        var s = i.children[o],
          l = f(s),
          u = (m = t, c = s, (Math.max(c.maxX, m.maxX) - Math.min(c.minX, m.minX)) * (Math.max(c.maxY, m.maxY) - Math.min(c.minY, m.minY)) - l);
        u < a ? (a = u, e = l < e ? l : e, h = s) : u === a && l < e && (e = l, h = s);
      }
      i = h || i.children[0];
    }
    var m, c;
    return i;
  }, r.prototype._insert = function (t, i, n) {
    var r = n ? t : this.toBBox(t),
      e = [],
      a = this._chooseSubtree(r, this.data, i, e);
    for (a.children.push(t), o(a, r); i >= 0 && e[i].children.length > this._maxEntries;) this._split(e, i), i--;
    this._adjustParentBBoxes(r, e, i);
  }, r.prototype._split = function (t, i) {
    var n = t[i],
      r = n.children.length,
      e = this._minEntries;
    this._chooseSplitAxis(n, e, r);
    var h = this._chooseSplitIndex(n, e, r),
      o = p(n.children.splice(h, n.children.length - h));
    o.height = n.height, o.leaf = n.leaf, a(n, this.toBBox), a(o, this.toBBox), i ? t[i - 1].children.push(o) : this._splitRoot(n, o);
  }, r.prototype._splitRoot = function (t, i) {
    this.data = p([t, i]), this.data.height = t.height + 1, this.data.leaf = !1, a(this.data, this.toBBox);
  }, r.prototype._chooseSplitIndex = function (t, i, n) {
    for (var r, e, a, o, s, l, u, m = 1 / 0, c = 1 / 0, p = i; p <= n - i; p++) {
      var d = h(t, 0, p, this.toBBox),
        x = h(t, p, n, this.toBBox),
        v = (e = d, a = x, o = void 0, s = void 0, l = void 0, u = void 0, o = Math.max(e.minX, a.minX), s = Math.max(e.minY, a.minY), l = Math.min(e.maxX, a.maxX), u = Math.min(e.maxY, a.maxY), Math.max(0, l - o) * Math.max(0, u - s)),
        M = f(d) + f(x);
      v < m ? (m = v, r = p, c = M < c ? M : c) : v === m && M < c && (c = M, r = p);
    }
    return r || n - i;
  }, r.prototype._chooseSplitAxis = function (t, i, n) {
    var r = t.leaf ? this.compareMinX : s,
      e = t.leaf ? this.compareMinY : l;
    this._allDistMargin(t, i, n, r) < this._allDistMargin(t, i, n, e) && t.children.sort(r);
  }, r.prototype._allDistMargin = function (t, i, n, r) {
    t.children.sort(r);
    for (var e = this.toBBox, a = h(t, 0, i, e), s = h(t, n - i, n, e), l = u(a) + u(s), f = i; f < n - i; f++) {
      var m = t.children[f];
      o(a, t.leaf ? e(m) : m), l += u(a);
    }
    for (var c = n - i - 1; c >= i; c--) {
      var p = t.children[c];
      o(s, t.leaf ? e(p) : p), l += u(s);
    }
    return l;
  }, r.prototype._adjustParentBBoxes = function (t, i, n) {
    for (var r = n; r >= 0; r--) o(i[r], t);
  }, r.prototype._condense = function (t) {
    for (var i = t.length - 1, n = void 0; i >= 0; i--) 0 === t[i].children.length ? i > 0 ? (n = t[i - 1].children).splice(n.indexOf(t[i]), 1) : this.clear() : a(t[i], this.toBBox);
  }, r;
});

/***/ }),

/***/ 59067:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/shared-exp-map/shared-exp-map.component.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#ol-map {\n  height: 850px;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/features/domain-listing/_components/shared-exp-map/shared-exp-map.component.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,WAAA;AACJ","sourcesContent":["#ol-map {\n    height: 850px;\n    width: 100%;\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 13551:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/seats-viewer/seats-viewer.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.cultural-room-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: -moz-fit-content;\n  width: fit-content;\n  gap: 16px;\n}\n\n.stage {\n  display: flex;\n  min-width: 98px;\n  margin-left: auto;\n  margin-right: 34px;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  border: 2px solid #231F20;\n  border-radius: 8px;\n}\n.stage p {\n  color: #231F20;\n  margin-bottom: 0;\n  font-size: 18px;\n}\n\n.booking-zone {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.booking-zone > p {\n  margin-bottom: 0;\n}\n\n.booking-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 4px;\n}\n\n.seat {\n  height: 30px;\n  width: 30px;\n  border: 2px solid;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n}\n.seat:first-child {\n  margin-left: auto;\n}\n.seat p {\n  margin-bottom: 0;\n}\n.seat.booked {\n  border-color: #231F20;\n  background-color: #E6536C;\n  color: #231F20;\n  cursor: not-allowed;\n}\n.seat.booked-with-reservation {\n  border-color: #231F20;\n  background-color: #231F20;\n  color: white;\n  cursor: not-allowed;\n}\n.seat.available {\n  border-color: #231F20;\n  background-color: #69C98C;\n  color: #231F20;\n  opacity: 0.5;\n}\n.seat.available:hover {\n  opacity: 1;\n}\n.seat.selected {\n  border-color: #231F20;\n  background-color: rgb(35, 92, 19);\n  color: #231F20;\n  opacity: 1;\n}\n.seat.selected:hover {\n  opacity: 0.8;\n}\n.seat.empty {\n  border-color: #858495;\n  background-color: #858495;\n  color: #858495;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.seat.on-edit {\n  cursor: pointer;\n  pointer-events: auto;\n}\n\n.seat-change-menu {\n  display: none;\n  position: absolute;\n  top: 30px;\n  left: 0;\n  background-color: white;\n  color: #231F20;\n  border: 2px solid black;\n  border-radius: 8px;\n  z-index: 1;\n  cursor: default;\n  padding: 10px 20px;\n  width: 150px;\n}\n\n.seat:hover > .seat-change-menu {\n  display: block;\n}\n\n.not-allowed {\n  cursor: not-allowed !important;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/seats-viewer/seats-viewer.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAbA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,2BAAA;EACA,uBAAA;EAAA,kBAAA;EACA,SAAA;AAgBF;;AAbA;EACE,aAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAlBa;EAmBb,yBAAA;EACA,kBAAA;AAgBF;AAdE;EACE,cDpBI;ECqBJ,gBAAA;EACA,eAAA;AAgBJ;;AAZA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EAGA,QAAA;AAaF;AAXE;EACE,gBAAA;AAaJ;;AATA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,2BAAA;EACA,QAAA;AAYF;;AATA;EACE,YAnDa;EAoDb,WApDa;EAqDb,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;AAYF;AAVE;EACE,iBAAA;AAYJ;AATE;EACE,gBAAA;AAWJ;AARE;EACE,qBDnEI;ECoEJ,yBD3CY;EC4CZ,cDrEI;ECsEJ,mBAAA;AAUJ;AAPE;EACE,qBD1EI;EC2EJ,yBD3EI;EC4EJ,YAAA;EACA,mBAAA;AASJ;AANE;EACE,qBDjFI;ECkFJ,yBD7DU;EC8DV,cDnFI;ECoFJ,YAAA;AAQJ;AANI;EACE,UAAA;AAQN;AAJE;EACE,qBD5FI;EC6FJ,iCAAA;EACA,cD9FI;EC+FJ,UAAA;AAMJ;AAJI;EACE,YAAA;AAMN;AAFE;EACE,qBDhFY;ECiFZ,yBDjFY;ECkFZ,cDlFY;ECmFZ,mBAAA;EACA,oBAAA;AAIJ;AADE;EACE,eAAA;EACA,oBAAA;AAGJ;;AACA;EACE,aAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,uBAAA;EACA,cD1HM;EC2HN,uBAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;AAEF;;AACA;EACE,cAAA;AAEF;;AACA;EACE,8BAAA;AAEF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n$seat-size-px: 30px;\n\n.cultural-room-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: fit-content;\n  gap: 16px;\n}\n\n.stage {\n  display: flex;\n  min-width: calc(3 * $seat-size-px + 8px);\n  margin-left: auto;\n  margin-right: calc($seat-size-px + 4px);\n  align-items: center;\n  justify-content: center;\n  height: $seat-size-px;\n  border: 2px solid $title;\n  border-radius: 8px;\n\n  p {\n    color: $title;\n    margin-bottom: 0;\n    font-size: $seat-size-px * 0.6;\n  }\n}\n\n.booking-zone {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  //align-items: flex-start;\n  //justify-content: flex-start;\n  gap: 4px;\n\n  & > p {\n    margin-bottom: 0;\n  }\n}\n\n.booking-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 4px;\n}\n\n.seat {\n  height: $seat-size-px;\n  width: $seat-size-px;\n  border: 2px solid;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n\n  &:first-child {\n    margin-left: auto;\n  }\n\n  p {\n    margin-bottom: 0;\n  }\n\n  &.booked {\n    border-color: $title;\n    background-color: $archived-color;\n    color: $title;\n    cursor: not-allowed;\n  }\n\n  &.booked-with-reservation {\n    border-color: $title;\n    background-color: $title;\n    color: white;\n    cursor: not-allowed;\n  }\n\n  &.available {\n    border-color: $title;\n    background-color: $active-color;\n    color: $title;\n    opacity: 0.5;\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n\n  &.selected {\n    border-color: $title;\n    background-color: rgb(35, 92, 19);\n    color: $title;\n    opacity: 1;\n\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n\n  &.empty {\n    border-color: $inactive-color;\n    background-color: $inactive-color;\n    color: $inactive-color;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  &.on-edit {\n    cursor: pointer;\n    pointer-events: auto;\n  }\n}\n\n.seat-change-menu {\n  display: none;\n  position: absolute;\n  top: 30px;\n  left: 0;\n  background-color: white;\n  color: $title;\n  border: 2px solid black;\n  border-radius: 8px;\n  z-index: 1;\n  cursor: default;\n  padding: 10px 20px;\n  width: 150px;\n}\n\n.seat:hover > .seat-change-menu {\n  display: block;\n}\n\n.not-allowed {\n  cursor: not-allowed !important;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 19303:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/domain-listing/_components/shared-exp-map/shared-exp-map.component.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"experienceData\">\n\n        <div id=\"ol-map\"></div>\n\n</div>";

/***/ }),

/***/ 29989:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/seats-viewer/seats-viewer.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"culturalRoom\">\n    <div class=\"cultural-room-container\">\n        <div class=\"stage\" [ngStyle]=\"{\n                                'width.px': (maxZoneWidth - 2) * 30 + (maxZoneWidth - 3) * 4,\n                                'margin-right.px': maxZoneWidth <= 3 ? 0 : 'auto'\n                                }\">\n            <p>Stage</p>\n        </div>\n\n        <div *ngFor=\"let zone of culturalRoom?.zones; let zoneIndex = index\"\n             class=\"booking-zone\">\n            <p>\n                Price: €{{ zone?.price }}\n            </p>\n\n            <div *ngFor=\"let row of zone?.rowsForBooking; let rowIndex = index\"\n                 class=\"booking-row\">\n                <ng-container *ngIf=\"row?.rowLabel\">\n                    Row: {{ row.rowLabel }}\n                </ng-container>\n\n                <ng-container *ngFor=\"let seat of row?.seats; let seatIndex = index; let last = last\">\n                    <ng-container *ngIf=\"isEditMode\">\n                        <div [ngClass]=\"{\n                            'booked' : seat?.seatStatus === 'booked',\n                            'booked-with-reservation' : seat?.seatStatus === 'bookedWithReservation',\n                            'available' : seat?.seatStatus === 'available',\n                            'empty' : seat?.seatStatus === 'empty',\n                            'selected' : seat?.seatStatus === 'selected',\n                            'on-edit' : isEditMode && seat?.seatStatus !== 'bookedWithReservation',\n                            'not-allowed' : isEditMode && hasBookedWithReservation && seat?.seatStatus === 'empty'\n                         }\"\n                             [style.margin-right.px]=\"\n                            ((maxZoneWidth - zone?.columns) >= 2 && last)\n                            ? (((maxZoneWidth - zone?.columns) - (maxZoneWidth - zone?.columns) % 2) / 2 * 30 + ((maxZoneWidth - zone?.columns) - (maxZoneWidth - zone?.columns) % 2) / 2 * 4)\n                            : 0\"\n                             class=\"seat\">\n                            <p *ngIf=\"seat.seatStatus !== 'empty'\">\n                                {{ seat?.seatColumnLabel }}\n                            </p>\n\n                            <div *ngIf=\"(hasBookedWithReservation && seat.seatStatus !== 'empty') || !hasBookedWithReservation\"\n                                 class=\"seat-change-menu\">\n                                <ng-container *ngIf=\"seat.seatStatus !== 'bookedWithReservation'; else seatHasBeenBooked\">\n                                    <p>Select seat type:</p>\n                                    <mat-radio-group [(ngModel)]=\"seat.seatStatus\" (change)=\"onChangeSeatStatus($event, zoneIndex, rowIndex, seatIndex)\">\n                                        <mat-radio-button value=\"available\">Available</mat-radio-button>\n                                        <mat-radio-button *ngIf=\"!hasBookedWithReservation\" value=\"empty\">Empty</mat-radio-button>\n                                        <mat-radio-button value=\"booked\">Booked</mat-radio-button>\n                                    </mat-radio-group>\n                                </ng-container>\n\n                                <ng-template #seatHasBeenBooked>\n                                    This seat has been booked by a client.\n                                </ng-template>\n                            </div>\n                        </div>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"!isEditMode\">\n                        <div [matTooltip]=\"row?.rowLabel + '_' + seat?.seatColumnLabel + ', ' +\n                         '                 status: ' + (seat?.seatStatus === 'bookedWithReservation' || seat?.seatStatus === 'booked' ? 'booked' : 'available')\"\n                             [ngClass]=\"{\n                            'booked' : (seat?.seatStatus === 'booked' || seat?.seatStatus === 'bookedWithReservation'),\n                            'available' : seat?.seatStatus === 'available',\n                            'empty' : seat?.seatStatus === 'empty',\n                            'selected' : seat?.seatStatus === 'selected'\n                         }\"\n                             (click)=\"toggleSeat(zoneIndex, rowIndex, seatIndex)\"\n                             [style.margin-right.px]=\"\n                            ((maxZoneWidth - zone?.columns) >= 2 && last)\n                            ? (((maxZoneWidth - zone?.columns) - (maxZoneWidth - zone?.columns) % 2) / 2 * 30 + ((maxZoneWidth - zone?.columns) - (maxZoneWidth - zone?.columns) % 2) / 2 * 4)\n                            : 0\"\n                             class=\"seat\">\n                            <p *ngIf=\"seat.seatStatus !== 'empty'\">\n                                {{ seat?.seatColumnLabel }}\n                            </p>\n                        </div>\n                    </ng-container>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</ng-container>\n";

/***/ }),

/***/ 6788:
/*!************************************!*\
  !*** ./node_modules/ol/Feature.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStyleFunction": () => (/* binding */ createStyleFunction),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object.js */ 62594);
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/EventType.js */ 90322);
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asserts.js */ 11703);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ 75544);
/**
 * @module ol/Feature
 */





/**
 * @typedef {typeof Feature|typeof import("./render/Feature.js").default} FeatureClass
 */

/**
 * @typedef {Feature|import("./render/Feature.js").default} FeatureLike
 */

/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *   import("./Observable").OnSignature<import("./ObjectEventType").Types|'change:geometry', import("./Object").ObjectEvent, Return> &
 *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types
 *     |'change:geometry', Return>} FeatureOnSignature
 */

/***
 * @template Geometry
 * @typedef {Object<string, *> & { geometry?: Geometry }} ObjectWithGeometry
 */

/**
 * @classdesc
 * A vector object for geographic features with a geometry and other
 * attribute properties, similar to the features in vector file formats like
 * GeoJSON.
 *
 * Features can be styled individually with `setStyle`; otherwise they use the
 * style of their vector layer.
 *
 * Note that attribute properties are set as {@link module:ol/Object~BaseObject} properties on
 * the feature object, so they are observable, and have get/set accessors.
 *
 * Typically, a feature has a single geometry property. You can set the
 * geometry using the `setGeometry` method and get it with `getGeometry`.
 * It is possible to store more than one geometry on a feature using attribute
 * properties. By default, the geometry used for rendering is identified by
 * the property name `geometry`. If you want to use another geometry property
 * for rendering, use the `setGeometryName` method to change the attribute
 * property associated with the geometry for the feature.  For example:
 *
 * ```js
 *
 * import Feature from 'ol/Feature.js';
 * import Polygon from 'ol/geom/Polygon.js';
 * import Point from 'ol/geom/Point.js';
 *
 * const feature = new Feature({
 *   geometry: new Polygon(polyCoords),
 *   labelPoint: new Point(labelCoords),
 *   name: 'My Polygon',
 * });
 *
 * // get the polygon geometry
 * const poly = feature.getGeometry();
 *
 * // Render the feature as a point using the coordinates from labelPoint
 * feature.setGeometryName('labelPoint');
 *
 * // get the point geometry
 * const point = feature.getGeometry();
 * ```
 *
 * @api
 * @template {import("./geom/Geometry.js").default} [Geometry=import("./geom/Geometry.js").default]
 */
class Feature extends _Object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {Geometry|ObjectWithGeometry<Geometry>} [geometryOrProperties]
   *     You may pass a Geometry object directly, or an object literal containing
   *     properties. If you pass an object literal, you may include a Geometry
   *     associated with a `geometry` key.
   */
  constructor(geometryOrProperties) {
    super();

    /***
     * @type {FeatureOnSignature<import("./events").EventsKey>}
     */
    this.on;

    /***
     * @type {FeatureOnSignature<import("./events").EventsKey>}
     */
    this.once;

    /***
     * @type {FeatureOnSignature<void>}
     */
    this.un;

    /**
     * @private
     * @type {number|string|undefined}
     */
    this.id_ = undefined;

    /**
     * @type {string}
     * @private
     */
    this.geometryName_ = 'geometry';

    /**
     * User provided style.
     * @private
     * @type {import("./style/Style.js").StyleLike}
     */
    this.style_ = null;

    /**
     * @private
     * @type {import("./style/Style.js").StyleFunction|undefined}
     */
    this.styleFunction_ = undefined;

    /**
     * @private
     * @type {?import("./events.js").EventsKey}
     */
    this.geometryChangeKey_ = null;
    this.addChangeListener(this.geometryName_, this.handleGeometryChanged_);
    if (geometryOrProperties) {
      if (typeof /** @type {?} */geometryOrProperties.getSimplifiedGeometry === 'function') {
        const geometry = /** @type {Geometry} */geometryOrProperties;
        this.setGeometry(geometry);
      } else {
        /** @type {Object<string, *>} */
        const properties = geometryOrProperties;
        this.setProperties(properties);
      }
    }
  }

  /**
   * Clone this feature. If the original feature has a geometry it
   * is also cloned. The feature id is not set in the clone.
   * @return {Feature<Geometry>} The clone.
   * @api
   */
  clone() {
    const clone = /** @type {Feature<Geometry>} */
    new Feature(this.hasProperties() ? this.getProperties() : null);
    clone.setGeometryName(this.getGeometryName());
    const geometry = this.getGeometry();
    if (geometry) {
      clone.setGeometry( /** @type {Geometry} */geometry.clone());
    }
    const style = this.getStyle();
    if (style) {
      clone.setStyle(style);
    }
    return clone;
  }

  /**
   * Get the feature's default geometry.  A feature may have any number of named
   * geometries.  The "default" geometry (the one that is rendered by default) is
   * set when calling {@link module:ol/Feature~Feature#setGeometry}.
   * @return {Geometry|undefined} The default geometry for the feature.
   * @api
   * @observable
   */
  getGeometry() {
    return (/** @type {Geometry|undefined} */this.get(this.geometryName_)
    );
  }

  /**
   * Get the feature identifier.  This is a stable identifier for the feature and
   * is either set when reading data from a remote source or set explicitly by
   * calling {@link module:ol/Feature~Feature#setId}.
   * @return {number|string|undefined} Id.
   * @api
   */
  getId() {
    return this.id_;
  }

  /**
   * Get the name of the feature's default geometry.  By default, the default
   * geometry is named `geometry`.
   * @return {string} Get the property name associated with the default geometry
   *     for this feature.
   * @api
   */
  getGeometryName() {
    return this.geometryName_;
  }

  /**
   * Get the feature's style. Will return what was provided to the
   * {@link module:ol/Feature~Feature#setStyle} method.
   * @return {import("./style/Style.js").StyleLike|undefined} The feature style.
   * @api
   */
  getStyle() {
    return this.style_;
  }

  /**
   * Get the feature's style function.
   * @return {import("./style/Style.js").StyleFunction|undefined} Return a function
   * representing the current style of this feature.
   * @api
   */
  getStyleFunction() {
    return this.styleFunction_;
  }

  /**
   * @private
   */
  handleGeometryChange_() {
    this.changed();
  }

  /**
   * @private
   */
  handleGeometryChanged_() {
    if (this.geometryChangeKey_) {
      (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.unlistenByKey)(this.geometryChangeKey_);
      this.geometryChangeKey_ = null;
    }
    const geometry = this.getGeometry();
    if (geometry) {
      this.geometryChangeKey_ = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.listen)(geometry, _events_EventType_js__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE, this.handleGeometryChange_, this);
    }
    this.changed();
  }

  /**
   * Set the default geometry for the feature.  This will update the property
   * with the name returned by {@link module:ol/Feature~Feature#getGeometryName}.
   * @param {Geometry|undefined} geometry The new geometry.
   * @api
   * @observable
   */
  setGeometry(geometry) {
    this.set(this.geometryName_, geometry);
  }

  /**
   * Set the style for the feature to override the layer style.  This can be a
   * single style object, an array of styles, or a function that takes a
   * resolution and returns an array of styles. To unset the feature style, call
   * `setStyle()` without arguments or a falsey value.
   * @param {import("./style/Style.js").StyleLike} [style] Style for this feature.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */
  setStyle(style) {
    this.style_ = style;
    this.styleFunction_ = !style ? undefined : createStyleFunction(style);
    this.changed();
  }

  /**
   * Set the feature id.  The feature id is considered stable and may be used when
   * requesting features or comparing identifiers returned from a remote source.
   * The feature id can be used with the
   * {@link module:ol/source/Vector~VectorSource#getFeatureById} method.
   * @param {number|string|undefined} id The feature id.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */
  setId(id) {
    this.id_ = id;
    this.changed();
  }

  /**
   * Set the property name to be used when getting the feature's default geometry.
   * When calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with
   * this name will be returned.
   * @param {string} name The property name of the default geometry.
   * @api
   */
  setGeometryName(name) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_);
    this.geometryName_ = name;
    this.addChangeListener(this.geometryName_, this.handleGeometryChanged_);
    this.handleGeometryChanged_();
  }
}

/**
 * Convert the provided object into a feature style function.  Functions passed
 * through unchanged.  Arrays of Style or single style objects wrapped
 * in a new feature style function.
 * @param {!import("./style/Style.js").StyleFunction|!Array<import("./style/Style.js").default>|!import("./style/Style.js").default} obj
 *     A feature style function, a single style, or an array of styles.
 * @return {import("./style/Style.js").StyleFunction} A style function.
 */
function createStyleFunction(obj) {
  if (typeof obj === 'function') {
    return obj;
  }
  /**
   * @type {Array<import("./style/Style.js").default>}
   */
  let styles;
  if (Array.isArray(obj)) {
    styles = obj;
  } else {
    (0,_asserts_js__WEBPACK_IMPORTED_MODULE_3__.assert)(typeof /** @type {?} */obj.getZIndex === 'function', 41); // Expected an `import("./style/Style.js").Style` or an array of `import("./style/Style.js").Style`
    const style = /** @type {import("./style/Style.js").default} */obj;
    styles = [style];
  }
  return function () {
    return styles;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feature);

/***/ }),

/***/ 73231:
/*!**************************************!*\
  !*** ./node_modules/ol/colorlike.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asColorLike": () => (/* binding */ asColorLike)
/* harmony export */ });
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ 56224);
/**
 * @module ol/colorlike
 */


/**
 * A type accepted by CanvasRenderingContext2D.fillStyle
 * or CanvasRenderingContext2D.strokeStyle.
 * Represents a color, pattern, or gradient. The origin for patterns and
 * gradients as fill style is an increment of 512 css pixels from map coordinate
 * `[0, 0]`. For seamless repeat patterns, width and height of the pattern image
 * must be a factor of two (2, 4, 8, ..., 512).
 *
 * @typedef {string|CanvasPattern|CanvasGradient} ColorLike
 * @api
 */

/**
 * @param {import("./color.js").Color|ColorLike} color Color.
 * @return {ColorLike} The color as an {@link ol/colorlike~ColorLike}.
 * @api
 */
function asColorLike(color) {
  if (Array.isArray(color)) {
    return (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.toString)(color);
  }
  return color;
}

/***/ }),

/***/ 8569:
/*!***********************************************!*\
  !*** ./node_modules/ol/control/FullScreen.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Control_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Control.js */ 28664);
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/EventType.js */ 90322);
/* harmony import */ var _MapProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MapProperty.js */ 86063);
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css.js */ 87058);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events.js */ 75544);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom.js */ 27425);
/**
 * @module ol/control/FullScreen
 */






const events = ['fullscreenchange', 'webkitfullscreenchange', 'MSFullscreenChange'];

/**
 * @enum {string}
 */
const FullScreenEventType = {
  /**
   * Triggered after the map entered fullscreen.
   * @event FullScreenEventType#enterfullscreen
   * @api
   */
  ENTERFULLSCREEN: 'enterfullscreen',
  /**
   * Triggered after the map leave fullscreen.
   * @event FullScreenEventType#leavefullscreen
   * @api
   */
  LEAVEFULLSCREEN: 'leavefullscreen'
};

/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes|
 *     'enterfullscreen'|'leavefullscreen', import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types, import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|
 *     'enterfullscreen'|'leavefullscreen'|import("../ObjectEventType").Types, Return>} FullScreenOnSignature
 */

/**
 * @typedef {Object} Options
 * @property {string} [className='ol-full-screen'] CSS class name.
 * @property {string|Text|HTMLElement} [label='\u2922'] Text label to use for the button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string|Text|HTMLElement} [labelActive='\u00d7'] Text label to use for the
 * button when full-screen is active.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [activeClassName=className + '-true'] CSS class name for the button
 * when full-screen is active.
 * @property {string} [inactiveClassName=className + '-false'] CSS class name for the button
 * when full-screen is inactive.
 * @property {string} [tipLabel='Toggle full-screen'] Text label to use for the button tip.
 * @property {boolean} [keys=false] Full keyboard access.
 * @property {HTMLElement|string} [target] Specify a target if you want the
 * control to be rendered outside of the map's viewport.
 * @property {HTMLElement|string} [source] The element to be displayed
 * fullscreen. When not provided, the element containing the map viewport will
 * be displayed fullscreen.
 */

/**
 * @classdesc
 * Provides a button that when clicked fills up the full screen with the map.
 * The full screen source element is by default the element containing the map viewport unless
 * overridden by providing the `source` option. In which case, the dom
 * element introduced using this parameter will be displayed in full screen.
 *
 * When in full screen mode, a close button is shown to exit full screen mode.
 * The [Fullscreen API](https://www.w3.org/TR/fullscreen/) is used to
 * toggle the map in full screen mode.
 *
 * @fires FullScreenEventType#enterfullscreen
 * @fires FullScreenEventType#leavefullscreen
 * @api
 */
class FullScreen extends _Control_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    super({
      element: document.createElement('div'),
      target: options.target
    });

    /***
     * @type {FullScreenOnSignature<import("../events").EventsKey>}
     */
    this.on;

    /***
     * @type {FullScreenOnSignature<import("../events").EventsKey>}
     */
    this.once;

    /***
     * @type {FullScreenOnSignature<void>}
     */
    this.un;

    /**
     * @private
     * @type {boolean}
     */
    this.keys_ = options.keys !== undefined ? options.keys : false;

    /**
     * @private
     * @type {HTMLElement|string|undefined}
     */
    this.source_ = options.source;

    /**
     * @type {boolean}
     * @private
     */
    this.isInFullscreen_ = false;

    /**
     * @private
     */
    this.boundHandleMapTargetChange_ = this.handleMapTargetChange_.bind(this);

    /**
     * @private
     * @type {string}
     */
    this.cssClassName_ = options.className !== undefined ? options.className : 'ol-full-screen';

    /**
     * @private
     * @type {Array<import("../events.js").EventsKey>}
     */
    this.documentListeners_ = [];

    /**
     * @private
     * @type {Array<string>}
     */
    this.activeClassName_ = options.activeClassName !== undefined ? options.activeClassName.split(' ') : [this.cssClassName_ + '-true'];

    /**
     * @private
     * @type {Array<string>}
     */
    this.inactiveClassName_ = options.inactiveClassName !== undefined ? options.inactiveClassName.split(' ') : [this.cssClassName_ + '-false'];
    const label = options.label !== undefined ? options.label : '\u2922';

    /**
     * @private
     * @type {Text|HTMLElement}
     */
    this.labelNode_ = typeof label === 'string' ? document.createTextNode(label) : label;
    const labelActive = options.labelActive !== undefined ? options.labelActive : '\u00d7';

    /**
     * @private
     * @type {Text|HTMLElement}
     */
    this.labelActiveNode_ = typeof labelActive === 'string' ? document.createTextNode(labelActive) : labelActive;
    const tipLabel = options.tipLabel ? options.tipLabel : 'Toggle full-screen';

    /**
     * @private
     * @type {HTMLElement}
     */
    this.button_ = document.createElement('button');
    this.button_.title = tipLabel;
    this.button_.setAttribute('type', 'button');
    this.button_.appendChild(this.labelNode_);
    this.button_.addEventListener(_events_EventType_js__WEBPACK_IMPORTED_MODULE_1__["default"].CLICK, this.handleClick_.bind(this), false);
    this.setClassName_(this.button_, this.isInFullscreen_);
    this.element.className = `${this.cssClassName_} ${_css_js__WEBPACK_IMPORTED_MODULE_2__.CLASS_UNSELECTABLE} ${_css_js__WEBPACK_IMPORTED_MODULE_2__.CLASS_CONTROL}`;
    this.element.appendChild(this.button_);
  }

  /**
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(event) {
    event.preventDefault();
    this.handleFullScreen_();
  }

  /**
   * @private
   */
  handleFullScreen_() {
    const map = this.getMap();
    if (!map) {
      return;
    }
    const doc = map.getOwnerDocument();
    if (!isFullScreenSupported(doc)) {
      return;
    }
    if (isFullScreen(doc)) {
      exitFullScreen(doc);
    } else {
      let element;
      if (this.source_) {
        element = typeof this.source_ === 'string' ? doc.getElementById(this.source_) : this.source_;
      } else {
        element = map.getTargetElement();
      }
      if (this.keys_) {
        requestFullScreenWithKeys(element);
      } else {
        requestFullScreen(element);
      }
    }
  }

  /**
   * @private
   */
  handleFullScreenChange_() {
    const map = this.getMap();
    if (!map) {
      return;
    }
    const wasInFullscreen = this.isInFullscreen_;
    this.isInFullscreen_ = isFullScreen(map.getOwnerDocument());
    if (wasInFullscreen !== this.isInFullscreen_) {
      this.setClassName_(this.button_, this.isInFullscreen_);
      if (this.isInFullscreen_) {
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.replaceNode)(this.labelActiveNode_, this.labelNode_);
        this.dispatchEvent(FullScreenEventType.ENTERFULLSCREEN);
      } else {
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.replaceNode)(this.labelNode_, this.labelActiveNode_);
        this.dispatchEvent(FullScreenEventType.LEAVEFULLSCREEN);
      }
      map.updateSize();
    }
  }

  /**
   * @param {HTMLElement} element Target element
   * @param {boolean} fullscreen True if fullscreen class name should be active
   * @private
   */
  setClassName_(element, fullscreen) {
    if (fullscreen) {
      element.classList.remove(...this.inactiveClassName_);
      element.classList.add(...this.activeClassName_);
    } else {
      element.classList.remove(...this.activeClassName_);
      element.classList.add(...this.inactiveClassName_);
    }
  }

  /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */
  setMap(map) {
    const oldMap = this.getMap();
    if (oldMap) {
      oldMap.removeChangeListener(_MapProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"].TARGET, this.boundHandleMapTargetChange_);
    }
    super.setMap(map);
    this.handleMapTargetChange_();
    if (map) {
      map.addChangeListener(_MapProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"].TARGET, this.boundHandleMapTargetChange_);
    }
  }

  /**
   * @private
   */
  handleMapTargetChange_() {
    const listeners = this.documentListeners_;
    for (let i = 0, ii = listeners.length; i < ii; ++i) {
      (0,_events_js__WEBPACK_IMPORTED_MODULE_5__.unlistenByKey)(listeners[i]);
    }
    listeners.length = 0;
    const map = this.getMap();
    if (map) {
      const doc = map.getOwnerDocument();
      if (isFullScreenSupported(doc)) {
        this.element.classList.remove(_css_js__WEBPACK_IMPORTED_MODULE_2__.CLASS_UNSUPPORTED);
      } else {
        this.element.classList.add(_css_js__WEBPACK_IMPORTED_MODULE_2__.CLASS_UNSUPPORTED);
      }
      for (let i = 0, ii = events.length; i < ii; ++i) {
        listeners.push((0,_events_js__WEBPACK_IMPORTED_MODULE_5__.listen)(doc, events[i], this.handleFullScreenChange_, this));
      }
      this.handleFullScreenChange_();
    }
  }
}

/**
 * @param {Document} doc The root document to check.
 * @return {boolean} Fullscreen is supported by the current platform.
 */
function isFullScreenSupported(doc) {
  const body = doc.body;
  return !!(body['webkitRequestFullscreen'] || body.requestFullscreen && doc.fullscreenEnabled);
}

/**
 * @param {Document} doc The root document to check.
 * @return {boolean} Element is currently in fullscreen.
 */
function isFullScreen(doc) {
  return !!(doc['webkitIsFullScreen'] || doc.fullscreenElement);
}

/**
 * Request to fullscreen an element.
 * @param {HTMLElement} element Element to request fullscreen
 */
function requestFullScreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element['webkitRequestFullscreen']) {
    element['webkitRequestFullscreen']();
  }
}

/**
 * Request to fullscreen an element with keyboard input.
 * @param {HTMLElement} element Element to request fullscreen
 */
function requestFullScreenWithKeys(element) {
  if (element['webkitRequestFullscreen']) {
    element['webkitRequestFullscreen']();
  } else {
    requestFullScreen(element);
  }
}

/**
 * Exit fullscreen.
 * @param {Document} doc The document to exit fullscren from
 */
function exitFullScreen(doc) {
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc['webkitExitFullscreen']) {
    doc['webkitExitFullscreen']();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullScreen);

/***/ }),

/***/ 56262:
/*!******************************************!*\
  !*** ./node_modules/ol/featureloader.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadFeaturesXhr": () => (/* binding */ loadFeaturesXhr),
/* harmony export */   "setWithCredentials": () => (/* binding */ setWithCredentials),
/* harmony export */   "xhr": () => (/* binding */ xhr)
/* harmony export */ });
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ 71134);
/**
 * @module ol/featureloader
 */


/**
 *
 * @type {boolean}
 * @private
 */
let withCredentials = false;

/**
 * {@link module:ol/source/Vector~VectorSource} sources use a function of this type to
 * load features.
 *
 * This function takes up to 5 arguments. These are an {@link module:ol/extent~Extent} representing
 * the area to be loaded, a `{number}` representing the resolution (map units per pixel), an
 * {@link module:ol/proj/Projection~Projection} for the projection, an optional success callback that should get
 * the loaded features passed as an argument and an optional failure callback with no arguments. If
 * the callbacks are not used, the corresponding vector source will not fire `'featuresloadend'` and
 * `'featuresloaderror'` events. `this` within the function is bound to the
 * {@link module:ol/source/Vector~VectorSource} it's called from.
 *
 * The function is responsible for loading the features and adding them to the
 * source.
 * @typedef {function(this:(import("./source/Vector").default|import("./VectorTile.js").default),
 *           import("./extent.js").Extent,
 *           number,
 *           import("./proj/Projection.js").default,
 *           function(Array<import("./Feature.js").default>): void=,
 *           function(): void=): void} FeatureLoader
 * @api
 */

/**
 * {@link module:ol/source/Vector~VectorSource} sources use a function of this type to
 * get the url to load features from.
 *
 * This function takes an {@link module:ol/extent~Extent} representing the area
 * to be loaded, a `{number}` representing the resolution (map units per pixel)
 * and an {@link module:ol/proj/Projection~Projection} for the projection  as
 * arguments and returns a `{string}` representing the URL.
 * @typedef {function(import("./extent.js").Extent, number, import("./proj/Projection.js").default): string} FeatureUrlFunction
 * @api
 */

/**
 * @param {string|FeatureUrlFunction} url Feature URL service.
 * @param {import("./format/Feature.js").default} format Feature format.
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @param {function(Array<import("./Feature.js").default>, import("./proj/Projection.js").default): void} success Success
 *      Function called with the loaded features and optionally with the data projection.
 * @param {function(): void} failure Failure
 *      Function called when loading failed.
 */
function loadFeaturesXhr(url, format, extent, resolution, projection, success, failure) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', typeof url === 'function' ? url(extent, resolution, projection) : url, true);
  if (format.getType() == 'arraybuffer') {
    xhr.responseType = 'arraybuffer';
  }
  xhr.withCredentials = withCredentials;
  /**
   * @param {Event} event Event.
   * @private
   */
  xhr.onload = function (event) {
    // status will be 0 for file:// urls
    if (!xhr.status || xhr.status >= 200 && xhr.status < 300) {
      const type = format.getType();
      /** @type {Document|Node|Object|string|undefined} */
      let source;
      if (type == 'json' || type == 'text') {
        source = xhr.responseText;
      } else if (type == 'xml') {
        source = xhr.responseXML;
        if (!source) {
          source = new DOMParser().parseFromString(xhr.responseText, 'application/xml');
        }
      } else if (type == 'arraybuffer') {
        source = /** @type {ArrayBuffer} */xhr.response;
      }
      if (source) {
        success( /** @type {Array<import("./Feature.js").default>} */

        format.readFeatures(source, {
          extent: extent,
          featureProjection: projection
        }), format.readProjection(source));
      } else {
        failure();
      }
    } else {
      failure();
    }
  };
  /**
   * @private
   */
  xhr.onerror = failure;
  xhr.send();
}

/**
 * Create an XHR feature loader for a `url` and `format`. The feature loader
 * loads features (with XHR), parses the features, and adds them to the
 * vector source.
 * @param {string|FeatureUrlFunction} url Feature URL service.
 * @param {import("./format/Feature.js").default} format Feature format.
 * @return {FeatureLoader} The feature loader.
 * @api
 */
function xhr(url, format) {
  /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {import("./proj/Projection.js").default} projection Projection.
   * @param {function(Array<import("./Feature.js").default>): void} [success] Success
   *      Function called when loading succeeded.
   * @param {function(): void} [failure] Failure
   *      Function called when loading failed.
   */
  return function (extent, resolution, projection, success, failure) {
    const source = /** @type {import("./source/Vector").default} */this;
    loadFeaturesXhr(url, format, extent, resolution, projection,
    /**
     * @param {Array<import("./Feature.js").default>} features The loaded features.
     * @param {import("./proj/Projection.js").default} dataProjection Data
     * projection.
     */
    function (features, dataProjection) {
      source.addFeatures(features);
      if (success !== undefined) {
        success(features);
      }
    }, /* FIXME handle error */failure ? failure : _functions_js__WEBPACK_IMPORTED_MODULE_0__.VOID);
  };
}

/**
 * Setter for the withCredentials configuration for the XHR.
 *
 * @param {boolean} xhrWithCredentials The value of withCredentials to set.
 * Compare https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/
 * @api
 */
function setWithCredentials(xhrWithCredentials) {
  withCredentials = xhrWithCredentials;
}

/***/ }),

/***/ 10426:
/*!*********************************************!*\
  !*** ./node_modules/ol/geom/flat/length.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lineStringLength": () => (/* binding */ lineStringLength),
/* harmony export */   "linearRingLength": () => (/* binding */ linearRingLength)
/* harmony export */ });
/**
 * @module ol/geom/flat/length
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Length.
 */
function lineStringLength(flatCoordinates, offset, end, stride) {
  let x1 = flatCoordinates[offset];
  let y1 = flatCoordinates[offset + 1];
  let length = 0;
  for (let i = offset + stride; i < end; i += stride) {
    const x2 = flatCoordinates[i];
    const y2 = flatCoordinates[i + 1];
    length += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    x1 = x2;
    y1 = y2;
  }
  return length;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Perimeter.
 */
function linearRingLength(flatCoordinates, offset, end, stride) {
  let perimeter = lineStringLength(flatCoordinates, offset, end, stride);
  const dx = flatCoordinates[end - stride] - flatCoordinates[offset];
  const dy = flatCoordinates[end - stride + 1] - flatCoordinates[offset + 1];
  perimeter += Math.sqrt(dx * dx + dy * dy);
  return perimeter;
}

/***/ }),

/***/ 24472:
/*!************************************************!*\
  !*** ./node_modules/ol/geom/flat/linechunk.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lineChunk": () => (/* binding */ lineChunk)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math.js */ 52761);


/**
 * Creates chunks of equal length from a linestring
 * @param {number} chunkLength Length of each chunk.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Start offset of the `flatCoordinates`.
 * @param {number} end End offset of the `flatCoordinates`.
 * @param {number} stride Stride.
 * @return {Array<Array<number>>} Chunks of linestrings with stride 2.
 */
function lineChunk(chunkLength, flatCoordinates, offset, end, stride) {
  const chunks = [];
  let cursor = offset;
  let chunkM = 0;
  let currentChunk = flatCoordinates.slice(offset, 2);
  while (chunkM < chunkLength && cursor + stride < end) {
    const [x1, y1] = currentChunk.slice(-2);
    const x2 = flatCoordinates[cursor + stride];
    const y2 = flatCoordinates[cursor + stride + 1];
    const segmentLength = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    chunkM += segmentLength;
    if (chunkM >= chunkLength) {
      const m = (chunkLength - chunkM + segmentLength) / segmentLength;
      const x = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(x1, x2, m);
      const y = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(y1, y2, m);
      currentChunk.push(x, y);
      chunks.push(currentChunk);
      currentChunk = [x, y];
      if (chunkM == chunkLength) {
        cursor += stride;
      }
      chunkM = 0;
    } else if (chunkM < chunkLength) {
      currentChunk.push(flatCoordinates[cursor + stride], flatCoordinates[cursor + stride + 1]);
      cursor += stride;
    } else {
      const missing = segmentLength - chunkM;
      const x = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(x1, x2, missing / segmentLength);
      const y = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(y1, y2, missing / segmentLength);
      currentChunk.push(x, y);
      chunks.push(currentChunk);
      currentChunk = [x, y];
      chunkM = 0;
      cursor += stride;
    }
  }
  if (chunkM > 0) {
    chunks.push(currentChunk);
  }
  return chunks;
}

/***/ }),

/***/ 2590:
/*!****************************************************!*\
  !*** ./node_modules/ol/geom/flat/straightchunk.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchingChunk": () => (/* binding */ matchingChunk)
/* harmony export */ });
/**
 * @module ol/geom/flat/straightchunk
 */

/**
 * @param {number} maxAngle Maximum acceptable angle delta between segments.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {Array<number>} Start and end of the first suitable chunk of the
 * given `flatCoordinates`.
 */
function matchingChunk(maxAngle, flatCoordinates, offset, end, stride) {
  let chunkStart = offset;
  let chunkEnd = offset;
  let chunkM = 0;
  let m = 0;
  let start = offset;
  let acos, i, m12, m23, x1, y1, x12, y12, x23, y23;
  for (i = offset; i < end; i += stride) {
    const x2 = flatCoordinates[i];
    const y2 = flatCoordinates[i + 1];
    if (x1 !== undefined) {
      x23 = x2 - x1;
      y23 = y2 - y1;
      m23 = Math.sqrt(x23 * x23 + y23 * y23);
      if (x12 !== undefined) {
        m += m12;
        acos = Math.acos((x12 * x23 + y12 * y23) / (m12 * m23));
        if (acos > maxAngle) {
          if (m > chunkM) {
            chunkM = m;
            chunkStart = start;
            chunkEnd = i;
          }
          m = 0;
          start = i - stride;
        }
      }
      m12 = m23;
      x12 = x23;
      y12 = y23;
    }
    x1 = x2;
    y1 = y2;
  }
  m += m23;
  return m > chunkM ? [start, i] : [chunkStart, chunkEnd];
}

/***/ }),

/***/ 16727:
/*!***********************************************!*\
  !*** ./node_modules/ol/geom/flat/textpath.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawTextOnPath": () => (/* binding */ drawTextOnPath)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math.js */ 52761);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform.js */ 28707);
/**
 * @module ol/geom/flat/textpath
 */



/**
 * @param {Array<number>} flatCoordinates Path to put text on.
 * @param {number} offset Start offset of the `flatCoordinates`.
 * @param {number} end End offset of the `flatCoordinates`.
 * @param {number} stride Stride.
 * @param {string} text Text to place on the path.
 * @param {number} startM m along the path where the text starts.
 * @param {number} maxAngle Max angle between adjacent chars in radians.
 * @param {number} scale The product of the text scale and the device pixel ratio.
 * @param {function(string, string, Object<string, number>):number} measureAndCacheTextWidth Measure and cache text width.
 * @param {string} font The font.
 * @param {Object<string, number>} cache A cache of measured widths.
 * @param {number} rotation Rotation to apply to the flatCoordinates to determine whether text needs to be reversed.
 * @return {Array<Array<*>>|null} The result array (or null if `maxAngle` was
 * exceeded). Entries of the array are x, y, anchorX, angle, chunk.
 */
function drawTextOnPath(flatCoordinates, offset, end, stride, text, startM, maxAngle, scale, measureAndCacheTextWidth, font, cache, rotation) {
  let x2 = flatCoordinates[offset];
  let y2 = flatCoordinates[offset + 1];
  let x1 = 0;
  let y1 = 0;
  let segmentLength = 0;
  let segmentM = 0;
  function advance() {
    x1 = x2;
    y1 = y2;
    offset += stride;
    x2 = flatCoordinates[offset];
    y2 = flatCoordinates[offset + 1];
    segmentM += segmentLength;
    segmentLength = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
  do {
    advance();
  } while (offset < end - stride && segmentM + segmentLength < startM);
  let interpolate = segmentLength === 0 ? 0 : (startM - segmentM) / segmentLength;
  const beginX = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(x1, x2, interpolate);
  const beginY = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(y1, y2, interpolate);
  const startOffset = offset - stride;
  const startLength = segmentM;
  const endM = startM + scale * measureAndCacheTextWidth(font, text, cache);
  while (offset < end - stride && segmentM + segmentLength < endM) {
    advance();
  }
  interpolate = segmentLength === 0 ? 0 : (endM - segmentM) / segmentLength;
  const endX = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(x1, x2, interpolate);
  const endY = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(y1, y2, interpolate);

  // Keep text upright
  let reverse;
  if (rotation) {
    const flat = [beginX, beginY, endX, endY];
    (0,_transform_js__WEBPACK_IMPORTED_MODULE_1__.rotate)(flat, 0, 4, 2, rotation, flat, flat);
    reverse = flat[0] > flat[2];
  } else {
    reverse = beginX > endX;
  }
  const PI = Math.PI;
  const result = [];
  const singleSegment = startOffset + stride === offset;
  offset = startOffset;
  segmentLength = 0;
  segmentM = startLength;
  x2 = flatCoordinates[offset];
  y2 = flatCoordinates[offset + 1];
  let previousAngle;
  // All on the same segment
  if (singleSegment) {
    advance();
    previousAngle = Math.atan2(y2 - y1, x2 - x1);
    if (reverse) {
      previousAngle += previousAngle > 0 ? -PI : PI;
    }
    const x = (endX + beginX) / 2;
    const y = (endY + beginY) / 2;
    result[0] = [x, y, (endM - startM) / 2, previousAngle, text];
    return result;
  }

  // rendering across line segments
  text = text.replace(/\n/g, ' '); // ensure rendering in single-line as all calculations below don't handle multi-lines

  for (let i = 0, ii = text.length; i < ii;) {
    advance();
    let angle = Math.atan2(y2 - y1, x2 - x1);
    if (reverse) {
      angle += angle > 0 ? -PI : PI;
    }
    if (previousAngle !== undefined) {
      let delta = angle - previousAngle;
      delta += delta > PI ? -2 * PI : delta < -PI ? 2 * PI : 0;
      if (Math.abs(delta) > maxAngle) {
        return null;
      }
    }
    previousAngle = angle;
    const iStart = i;
    let charLength = 0;
    for (; i < ii; ++i) {
      const index = reverse ? ii - i - 1 : i;
      const len = scale * measureAndCacheTextWidth(font, text[index], cache);
      if (offset + stride < end && segmentM + segmentLength < startM + charLength + len / 2) {
        break;
      }
      charLength += len;
    }
    if (i === iStart) {
      continue;
    }
    const chars = reverse ? text.substring(ii - iStart, ii - i) : text.substring(iStart, i);
    interpolate = segmentLength === 0 ? 0 : (startM + charLength / 2 - segmentM) / segmentLength;
    const x = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(x1, x2, interpolate);
    const y = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(y1, y2, interpolate);
    result.push([x, y, charLength / 2, angle, chars]);
    startM += charLength;
  }
  return result;
}

/***/ }),

/***/ 30995:
/*!*********************************************!*\
  !*** ./node_modules/ol/layer/BaseVector.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.js */ 74268);
/* harmony import */ var rbush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rbush */ 43155);
/* harmony import */ var _style_Style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/Style.js */ 864);
/* harmony import */ var _style_flat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/flat.js */ 78041);
/**
 * @module ol/layer/BaseVector
 */





/**
 * @template {import("../source/Vector.js").default|import("../source/VectorTile.js").default} VectorSourceType
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {import("../render.js").OrderFunction} [renderOrder] Render order. Function to be used when sorting
 * features before rendering. By default features are drawn in the order that they are created. Use
 * `null` to avoid the sort, but get an undefined draw order.
 * @property {number} [renderBuffer=100] The buffer in pixels around the viewport extent used by the
 * renderer when getting features from the vector source for the rendering or hit-detection.
 * Recommended value: the size of the largest symbol, line width or label.
 * @property {VectorSourceType} [source] Source.
 * @property {import("../Map.js").default} [map] Sets the layer as overlay on a map. The map will not manage
 * this layer in its layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it managed by the map is to
 * use [map.addLayer()]{@link import("../Map.js").default#addLayer}.
 * @property {boolean} [declutter=false] Declutter images and text. Decluttering is applied to all
 * image and text styles of all Vector and VectorTile layers that have set this to `true`. The priority
 * is defined by the z-index of the layer, the `zIndex` of the style and the render order of features.
 * Higher z-index means higher priority. Within the same z-index, a feature rendered before another has
 * higher priority.
 *
 * As an optimization decluttered features from layers with the same `className` are rendered above
 * the fill and stroke styles of all of those layers regardless of z-index.  To opt out of this
 * behavior and place declutterd features with their own layer configure the layer with a `className`
 * other than `ol-layer`.
 * @property {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null} [style] Layer style. When set to `null`, only
 * features that have their own style will be rendered. See {@link module:ol/style/Style~Style} for the default style
 * which will be used if this is not set.
 * @property {import("./Base.js").BackgroundColor} [background] Background color for the layer. If not specified, no background
 * will be rendered.
 * @property {boolean} [updateWhileAnimating=false] When set to `true`, feature batches will
 * be recreated during animations. This means that no vectors will be shown clipped, but the
 * setting will have a performance impact for large amounts of vector data. When set to `false`,
 * batches will be recreated when no animation is active.
 * @property {boolean} [updateWhileInteracting=false] When set to `true`, feature batches will
 * be recreated during interactions. See also `updateWhileAnimating`.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */

/**
 * @enum {string}
 * @private
 */
const Property = {
  RENDER_ORDER: 'renderOrder'
};

/**
 * @classdesc
 * Vector data that is rendered client-side.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @template {import("../source/Vector.js").default|import("../source/VectorTile.js").default} VectorSourceType
 * @template {import("../renderer/canvas/VectorLayer.js").default|import("../renderer/canvas/VectorTileLayer.js").default|import("../renderer/canvas/VectorImageLayer.js").default|import("../renderer/webgl/PointsLayer.js").default} RendererType
 * @extends {Layer<VectorSourceType, RendererType>}
 * @api
 */
class BaseVectorLayer extends _Layer_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param {Options<VectorSourceType>} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const baseOptions = Object.assign({}, options);
    delete baseOptions.style;
    delete baseOptions.renderBuffer;
    delete baseOptions.updateWhileAnimating;
    delete baseOptions.updateWhileInteracting;
    super(baseOptions);

    /**
     * @private
     * @type {boolean}
     */
    this.declutter_ = options.declutter !== undefined ? options.declutter : false;

    /**
     * @type {number}
     * @private
     */
    this.renderBuffer_ = options.renderBuffer !== undefined ? options.renderBuffer : 100;

    /**
     * User provided style.
     * @type {import("../style/Style.js").StyleLike}
     * @private
     */
    this.style_ = null;

    /**
     * Style function for use within the library.
     * @type {import("../style/Style.js").StyleFunction|undefined}
     * @private
     */
    this.styleFunction_ = undefined;
    this.setStyle(options.style);

    /**
     * @type {boolean}
     * @private
     */
    this.updateWhileAnimating_ = options.updateWhileAnimating !== undefined ? options.updateWhileAnimating : false;

    /**
     * @type {boolean}
     * @private
     */
    this.updateWhileInteracting_ = options.updateWhileInteracting !== undefined ? options.updateWhileInteracting : false;
  }

  /**
   * @return {boolean} Declutter.
   */
  getDeclutter() {
    return this.declutter_;
  }

  /**
   * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
   * that resolves with an array of features. The array will either contain the topmost feature
   * when a hit was detected, or it will be empty.
   *
   * The hit detection algorithm used for this method is optimized for performance, but is less
   * accurate than the one used in [map.getFeaturesAtPixel()]{@link import("../Map.js").default#getFeaturesAtPixel}.
   * Text is not considered, and icons are only represented by their bounding box instead of the exact
   * image.
   *
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with an array of features.
   * @api
   */
  getFeatures(pixel) {
    return super.getFeatures(pixel);
  }

  /**
   * @return {number|undefined} Render buffer.
   */
  getRenderBuffer() {
    return this.renderBuffer_;
  }

  /**
   * @return {function(import("../Feature.js").default, import("../Feature.js").default): number|null|undefined} Render
   *     order.
   */
  getRenderOrder() {
    return (/** @type {import("../render.js").OrderFunction|null|undefined} */
      this.get(Property.RENDER_ORDER)
    );
  }

  /**
   * Get the style for features.  This returns whatever was passed to the `style`
   * option at construction or to the `setStyle` method.
   * @return {import("../style/Style.js").StyleLike|null|undefined} Layer style.
   * @api
   */
  getStyle() {
    return this.style_;
  }

  /**
   * Get the style function.
   * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
   * @api
   */
  getStyleFunction() {
    return this.styleFunction_;
  }

  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     animating.
   */
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }

  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     interacting.
   */
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }

  /**
   * Render declutter items for this layer
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  renderDeclutter(frameState) {
    if (!frameState.declutterTree) {
      frameState.declutterTree = new rbush__WEBPACK_IMPORTED_MODULE_0__(9);
    }
    /** @type {*} */
    this.getRenderer().renderDeclutter(frameState);
  }

  /**
   * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
   *     Render order.
   */
  setRenderOrder(renderOrder) {
    this.set(Property.RENDER_ORDER, renderOrder);
  }

  /**
   * Set the style for features.  This can be a single style object, an array
   * of styles, or a function that takes a feature and resolution and returns
   * an array of styles. If set to `null`, the layer has no style (a `null` style),
   * so only features that have their own styles will be rendered in the layer. Call
   * `setStyle()` without arguments to reset to the default style. See
   * [the ol/style/Style module]{@link module:ol/style/Style~Style} for information on the default style.
   *
   * If your layer has a static style, you can use [flat style]{@link module:ol/style/flat~FlatStyle} object
   * literals instead of using the `Style` and symbolizer constructors (`Fill`, `Stroke`, etc.):
   * ```js
   * vectorLayer.setStyle({
   *   "fill-color": "yellow",
   *   "stroke-color": "black",
   *   "stroke-width": 4
   * })
   * ```
   *
   * @param {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null} [style] Layer style.
   * @api
   */
  setStyle(style) {
    /**
     * @type {import("../style/Style.js").StyleLike|null}
     */
    let styleLike;
    if (style === undefined) {
      styleLike = _style_Style_js__WEBPACK_IMPORTED_MODULE_2__.createDefaultStyle;
    } else if (style === null) {
      styleLike = null;
    } else if (typeof style === 'function') {
      styleLike = style;
    } else if (style instanceof _style_Style_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      styleLike = style;
    } else if (Array.isArray(style)) {
      const len = style.length;

      /**
       * @type {Array<Style>}
       */
      const styles = new Array(len);
      for (let i = 0; i < len; ++i) {
        const s = style[i];
        if (s instanceof _style_Style_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          styles[i] = s;
        } else {
          styles[i] = (0,_style_flat_js__WEBPACK_IMPORTED_MODULE_3__.toStyle)(s);
        }
      }
      styleLike = styles;
    } else {
      styleLike = (0,_style_flat_js__WEBPACK_IMPORTED_MODULE_3__.toStyle)(style);
    }
    this.style_ = styleLike;
    this.styleFunction_ = style === null ? undefined : (0,_style_Style_js__WEBPACK_IMPORTED_MODULE_2__.toFunction)(this.style_);
    this.changed();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseVectorLayer);

/***/ }),

/***/ 79995:
/*!*****************************************!*\
  !*** ./node_modules/ol/layer/Vector.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseVector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseVector.js */ 30995);
/* harmony import */ var _renderer_canvas_VectorLayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderer/canvas/VectorLayer.js */ 55538);
/**
 * @module ol/layer/Vector
 */



/**
 * @classdesc
 * Vector data is rendered client-side, as vectors. This layer type provides most accurate rendering
 * even during animations. Points and labels stay upright on rotated views. For very large
 * amounts of vector data, performance may suffer during pan and zoom animations. In this case,
 * try {@link module:ol/layer/VectorImage~VectorImageLayer}.
 *
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @template {import("../source/Vector.js").default} VectorSourceType
 * @extends {BaseVectorLayer<VectorSourceType, CanvasVectorLayerRenderer>}
 * @api
 */
class VectorLayer extends _BaseVector_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {import("./BaseVector.js").Options<VectorSourceType>} [options] Options.
   */
  constructor(options) {
    super(options);
  }
  createRenderer() {
    return new _renderer_canvas_VectorLayer_js__WEBPACK_IMPORTED_MODULE_1__["default"](this);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VectorLayer);

/***/ }),

/***/ 81091:
/*!********************************************!*\
  !*** ./node_modules/ol/loadingstrategy.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "bbox": () => (/* binding */ bbox),
/* harmony export */   "tile": () => (/* binding */ tile)
/* harmony export */ });
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proj.js */ 63815);
/**
 * @module ol/loadingstrategy
 */



/**
 * Strategy function for loading all features with a single request.
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @return {Array<import("./extent.js").Extent>} Extents.
 * @api
 */
function all(extent, resolution) {
  return [[-Infinity, -Infinity, Infinity, Infinity]];
}

/**
 * Strategy function for loading features based on the view's extent and
 * resolution.
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @return {Array<import("./extent.js").Extent>} Extents.
 * @api
 */
function bbox(extent, resolution) {
  return [extent];
}

/**
 * Creates a strategy function for loading features based on a tile grid.
 * @param {import("./tilegrid/TileGrid.js").default} tileGrid Tile grid.
 * @return {function(import("./extent.js").Extent, number, import("./proj.js").Projection): Array<import("./extent.js").Extent>} Loading strategy.
 * @api
 */
function tile(tileGrid) {
  return (
    /**
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @param {import("./proj.js").Projection} projection Projection.
     * @return {Array<import("./extent.js").Extent>} Extents.
     */
    function (extent, resolution, projection) {
      const z = tileGrid.getZForResolution((0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.fromUserResolution)(resolution, projection));
      const tileRange = tileGrid.getTileRangeForExtentAndZ((0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.fromUserExtent)(extent, projection), z);
      /** @type {Array<import("./extent.js").Extent>} */
      const extents = [];
      /** @type {import("./tilecoord.js").TileCoord} */
      const tileCoord = [z, 0, 0];
      for (tileCoord[1] = tileRange.minX; tileCoord[1] <= tileRange.maxX; ++tileCoord[1]) {
        for (tileCoord[2] = tileRange.minY; tileCoord[2] <= tileRange.maxY; ++tileCoord[2]) {
          extents.push((0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.toUserExtent)(tileGrid.getTileCoordExtent(tileCoord), projection));
        }
      }
      return extents;
    }
  );
}

/***/ }),

/***/ 24388:
/*!*************************************************!*\
  !*** ./node_modules/ol/render/VectorContext.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/render/VectorContext
 */

/**
 * @classdesc
 * Context for drawing geometries.  A vector context is available on render
 * events and does not need to be constructed directly.
 * @api
 */
class VectorContext {
  /**
   * Render a geometry with a custom renderer.
   *
   * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   */
  drawCustom(geometry, feature, renderer, hitDetectionRenderer) {}

  /**
   * Render a geometry.
   *
   * @param {import("../geom/Geometry.js").default} geometry The geometry to render.
   */
  drawGeometry(geometry) {}

  /**
   * Set the rendering style.
   *
   * @param {import("../style/Style.js").default} style The rendering style.
   */
  setStyle(style) {}

  /**
   * @param {import("../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../Feature.js").default} feature Feature.
   */
  drawCircle(circleGeometry, feature) {}

  /**
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("../style/Style.js").default} style Style.
   */
  drawFeature(feature, style) {}

  /**
   * @param {import("../geom/GeometryCollection.js").default} geometryCollectionGeometry Geometry collection.
   * @param {import("../Feature.js").default} feature Feature.
   */
  drawGeometryCollection(geometryCollectionGeometry, feature) {}

  /**
   * @param {import("../geom/LineString.js").default|import("./Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawLineString(lineStringGeometry, feature) {}

  /**
   * @param {import("../geom/MultiLineString.js").default|import("./Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiLineString(multiLineStringGeometry, feature) {}

  /**
   * @param {import("../geom/MultiPoint.js").default|import("./Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiPoint(multiPointGeometry, feature) {}

  /**
   * @param {import("../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiPolygon(multiPolygonGeometry, feature) {}

  /**
   * @param {import("../geom/Point.js").default|import("./Feature.js").default} pointGeometry Point geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawPoint(pointGeometry, feature) {}

  /**
   * @param {import("../geom/Polygon.js").default|import("./Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawPolygon(polygonGeometry, feature) {}

  /**
   * @param {import("../geom/SimpleGeometry.js").default|import("./Feature.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawText(geometry, feature) {}

  /**
   * @param {import("../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(fillStyle, strokeStyle) {}

  /**
   * @param {import("../style/Image.js").default} imageStyle Image style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with a text style.
   */
  setImageStyle(imageStyle, declutterImageWithText) {}

  /**
   * @param {import("../style/Text.js").default} textStyle Text style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with an image style.
   */
  setTextStyle(textStyle, declutterImageWithText) {}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VectorContext);

/***/ }),

/***/ 90441:
/*!**************************************************!*\
  !*** ./node_modules/ol/render/canvas/Builder.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Instruction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction.js */ 93272);
/* harmony import */ var _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../extent/Relationship.js */ 64066);
/* harmony import */ var _VectorContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VectorContext.js */ 24388);
/* harmony import */ var _colorlike_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../colorlike.js */ 73231);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../extent.js */ 55407);
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../canvas.js */ 74921);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../array.js */ 84698);
/* harmony import */ var _geom_flat_inflate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geom/flat/inflate.js */ 1961);
/**
 * @module ol/render/canvas/Builder
 */








class CanvasBuilder extends _VectorContext_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super();

    /**
     * @protected
     * @type {number}
     */
    this.tolerance = tolerance;

    /**
     * @protected
     * @const
     * @type {import("../../extent.js").Extent}
     */
    this.maxExtent = maxExtent;

    /**
     * @protected
     * @type {number}
     */
    this.pixelRatio = pixelRatio;

    /**
     * @protected
     * @type {number}
     */
    this.maxLineWidth = 0;

    /**
     * @protected
     * @const
     * @type {number}
     */
    this.resolution = resolution;

    /**
     * @private
     * @type {Array<*>}
     */
    this.beginGeometryInstruction1_ = null;

    /**
     * @private
     * @type {Array<*>}
     */
    this.beginGeometryInstruction2_ = null;

    /**
     * @private
     * @type {import("../../extent.js").Extent}
     */
    this.bufferedMaxExtent_ = null;

    /**
     * @protected
     * @type {Array<*>}
     */
    this.instructions = [];

    /**
     * @protected
     * @type {Array<number>}
     */
    this.coordinates = [];

    /**
     * @private
     * @type {import("../../coordinate.js").Coordinate}
     */
    this.tmpCoordinate_ = [];

    /**
     * @protected
     * @type {Array<*>}
     */
    this.hitDetectionInstructions = [];

    /**
     * @protected
     * @type {import("../canvas.js").FillStrokeState}
     */
    this.state = /** @type {import("../canvas.js").FillStrokeState} */{};
  }

  /**
   * @protected
   * @param {Array<number>} dashArray Dash array.
   * @return {Array<number>} Dash array with pixel ratio applied
   */
  applyPixelRatio(dashArray) {
    const pixelRatio = this.pixelRatio;
    return pixelRatio == 1 ? dashArray : dashArray.map(function (dash) {
      return dash * pixelRatio;
    });
  }

  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} stride Stride.
   * @protected
   * @return {number} My end
   */
  appendFlatPointCoordinates(flatCoordinates, stride) {
    const extent = this.getBufferedMaxExtent();
    const tmpCoord = this.tmpCoordinate_;
    const coordinates = this.coordinates;
    let myEnd = coordinates.length;
    for (let i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
      tmpCoord[0] = flatCoordinates[i];
      tmpCoord[1] = flatCoordinates[i + 1];
      if ((0,_extent_js__WEBPACK_IMPORTED_MODULE_1__.containsCoordinate)(extent, tmpCoord)) {
        coordinates[myEnd++] = tmpCoord[0];
        coordinates[myEnd++] = tmpCoord[1];
      }
    }
    return myEnd;
  }

  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} closed Last input coordinate equals first.
   * @param {boolean} skipFirst Skip first coordinate.
   * @protected
   * @return {number} My end.
   */
  appendFlatLineCoordinates(flatCoordinates, offset, end, stride, closed, skipFirst) {
    const coordinates = this.coordinates;
    let myEnd = coordinates.length;
    const extent = this.getBufferedMaxExtent();
    if (skipFirst) {
      offset += stride;
    }
    let lastXCoord = flatCoordinates[offset];
    let lastYCoord = flatCoordinates[offset + 1];
    const nextCoord = this.tmpCoordinate_;
    let skipped = true;
    let i, lastRel, nextRel;
    for (i = offset + stride; i < end; i += stride) {
      nextCoord[0] = flatCoordinates[i];
      nextCoord[1] = flatCoordinates[i + 1];
      nextRel = (0,_extent_js__WEBPACK_IMPORTED_MODULE_1__.coordinateRelationship)(extent, nextCoord);
      if (nextRel !== lastRel) {
        if (skipped) {
          coordinates[myEnd++] = lastXCoord;
          coordinates[myEnd++] = lastYCoord;
          skipped = false;
        }
        coordinates[myEnd++] = nextCoord[0];
        coordinates[myEnd++] = nextCoord[1];
      } else if (nextRel === _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_2__["default"].INTERSECTING) {
        coordinates[myEnd++] = nextCoord[0];
        coordinates[myEnd++] = nextCoord[1];
        skipped = false;
      } else {
        skipped = true;
      }
      lastXCoord = nextCoord[0];
      lastYCoord = nextCoord[1];
      lastRel = nextRel;
    }

    // Last coordinate equals first or only one point to append:
    if (closed && skipped || i === offset + stride) {
      coordinates[myEnd++] = lastXCoord;
      coordinates[myEnd++] = lastYCoord;
    }
    return myEnd;
  }

  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Array<number>} builderEnds Builder ends.
   * @return {number} Offset.
   */
  drawCustomCoordinates_(flatCoordinates, offset, ends, stride, builderEnds) {
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      const builderEnd = this.appendFlatLineCoordinates(flatCoordinates, offset, end, stride, false, false);
      builderEnds.push(builderEnd);
      offset = end;
    }
    return offset;
  }

  /**
   * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   */
  drawCustom(geometry, feature, renderer, hitDetectionRenderer) {
    this.beginGeometry(geometry, feature);
    const type = geometry.getType();
    const stride = geometry.getStride();
    const builderBegin = this.coordinates.length;
    let flatCoordinates, builderEnd, builderEnds, builderEndss;
    let offset;
    switch (type) {
      case 'MultiPolygon':
        flatCoordinates = /** @type {import("../../geom/MultiPolygon.js").default} */geometry.getOrientedFlatCoordinates();
        builderEndss = [];
        const endss = /** @type {import("../../geom/MultiPolygon.js").default} */geometry.getEndss();
        offset = 0;
        for (let i = 0, ii = endss.length; i < ii; ++i) {
          const myEnds = [];
          offset = this.drawCustomCoordinates_(flatCoordinates, offset, endss[i], stride, myEnds);
          builderEndss.push(myEnds);
        }
        this.instructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].CUSTOM, builderBegin, builderEndss, geometry, renderer, _geom_flat_inflate_js__WEBPACK_IMPORTED_MODULE_4__.inflateMultiCoordinatesArray]);
        this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].CUSTOM, builderBegin, builderEndss, geometry, hitDetectionRenderer || renderer, _geom_flat_inflate_js__WEBPACK_IMPORTED_MODULE_4__.inflateMultiCoordinatesArray]);
        break;
      case 'Polygon':
      case 'MultiLineString':
        builderEnds = [];
        flatCoordinates = type == 'Polygon' ? /** @type {import("../../geom/Polygon.js").default} */geometry.getOrientedFlatCoordinates() : geometry.getFlatCoordinates();
        offset = this.drawCustomCoordinates_(flatCoordinates, 0, /** @type {import("../../geom/Polygon.js").default|import("../../geom/MultiLineString.js").default} */geometry.getEnds(), stride, builderEnds);
        this.instructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].CUSTOM, builderBegin, builderEnds, geometry, renderer, _geom_flat_inflate_js__WEBPACK_IMPORTED_MODULE_4__.inflateCoordinatesArray]);
        this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].CUSTOM, builderBegin, builderEnds, geometry, hitDetectionRenderer || renderer, _geom_flat_inflate_js__WEBPACK_IMPORTED_MODULE_4__.inflateCoordinatesArray]);
        break;
      case 'LineString':
      case 'Circle':
        flatCoordinates = geometry.getFlatCoordinates();
        builderEnd = this.appendFlatLineCoordinates(flatCoordinates, 0, flatCoordinates.length, stride, false, false);
        this.instructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].CUSTOM, builderBegin, builderEnd, geometry, renderer, _geom_flat_inflate_js__WEBPACK_IMPORTED_MODULE_4__.inflateCoordinates]);
        this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].CUSTOM, builderBegin, builderEnd, geometry, hitDetectionRenderer || renderer, _geom_flat_inflate_js__WEBPACK_IMPORTED_MODULE_4__.inflateCoordinates]);
        break;
      case 'MultiPoint':
        flatCoordinates = geometry.getFlatCoordinates();
        builderEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
        if (builderEnd > builderBegin) {
          this.instructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].CUSTOM, builderBegin, builderEnd, geometry, renderer, _geom_flat_inflate_js__WEBPACK_IMPORTED_MODULE_4__.inflateCoordinates]);
          this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].CUSTOM, builderBegin, builderEnd, geometry, hitDetectionRenderer || renderer, _geom_flat_inflate_js__WEBPACK_IMPORTED_MODULE_4__.inflateCoordinates]);
        }
        break;
      case 'Point':
        flatCoordinates = geometry.getFlatCoordinates();
        this.coordinates.push(flatCoordinates[0], flatCoordinates[1]);
        builderEnd = this.coordinates.length;
        this.instructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].CUSTOM, builderBegin, builderEnd, geometry, renderer]);
        this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].CUSTOM, builderBegin, builderEnd, geometry, hitDetectionRenderer || renderer]);
        break;
      default:
    }
    this.endGeometry(feature);
  }

  /**
   * @protected
   * @param {import("../../geom/Geometry").default|import("../Feature.js").default} geometry The geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  beginGeometry(geometry, feature) {
    this.beginGeometryInstruction1_ = [_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].BEGIN_GEOMETRY, feature, 0, geometry];
    this.instructions.push(this.beginGeometryInstruction1_);
    this.beginGeometryInstruction2_ = [_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].BEGIN_GEOMETRY, feature, 0, geometry];
    this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }

  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates
    };
  }

  /**
   * Reverse the hit detection instructions.
   */
  reverseHitDetectionInstructions() {
    const hitDetectionInstructions = this.hitDetectionInstructions;
    // step 1 - reverse array
    hitDetectionInstructions.reverse();
    // step 2 - reverse instructions within geometry blocks
    let i;
    const n = hitDetectionInstructions.length;
    let instruction;
    let type;
    let begin = -1;
    for (i = 0; i < n; ++i) {
      instruction = hitDetectionInstructions[i];
      type = /** @type {import("./Instruction.js").default} */instruction[0];
      if (type == _Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].END_GEOMETRY) {
        begin = i;
      } else if (type == _Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].BEGIN_GEOMETRY) {
        instruction[2] = i;
        (0,_array_js__WEBPACK_IMPORTED_MODULE_5__.reverseSubArray)(this.hitDetectionInstructions, begin, i);
        begin = -1;
      }
    }
  }

  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(fillStyle, strokeStyle) {
    const state = this.state;
    if (fillStyle) {
      const fillStyleColor = fillStyle.getColor();
      state.fillStyle = (0,_colorlike_js__WEBPACK_IMPORTED_MODULE_6__.asColorLike)(fillStyleColor ? fillStyleColor : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultFillStyle);
    } else {
      state.fillStyle = undefined;
    }
    if (strokeStyle) {
      const strokeStyleColor = strokeStyle.getColor();
      state.strokeStyle = (0,_colorlike_js__WEBPACK_IMPORTED_MODULE_6__.asColorLike)(strokeStyleColor ? strokeStyleColor : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultStrokeStyle);
      const strokeStyleLineCap = strokeStyle.getLineCap();
      state.lineCap = strokeStyleLineCap !== undefined ? strokeStyleLineCap : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineCap;
      const strokeStyleLineDash = strokeStyle.getLineDash();
      state.lineDash = strokeStyleLineDash ? strokeStyleLineDash.slice() : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineDash;
      const strokeStyleLineDashOffset = strokeStyle.getLineDashOffset();
      state.lineDashOffset = strokeStyleLineDashOffset ? strokeStyleLineDashOffset : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineDashOffset;
      const strokeStyleLineJoin = strokeStyle.getLineJoin();
      state.lineJoin = strokeStyleLineJoin !== undefined ? strokeStyleLineJoin : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineJoin;
      const strokeStyleWidth = strokeStyle.getWidth();
      state.lineWidth = strokeStyleWidth !== undefined ? strokeStyleWidth : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineWidth;
      const strokeStyleMiterLimit = strokeStyle.getMiterLimit();
      state.miterLimit = strokeStyleMiterLimit !== undefined ? strokeStyleMiterLimit : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultMiterLimit;
      if (state.lineWidth > this.maxLineWidth) {
        this.maxLineWidth = state.lineWidth;
        // invalidate the buffered max extent cache
        this.bufferedMaxExtent_ = null;
      }
    } else {
      state.strokeStyle = undefined;
      state.lineCap = undefined;
      state.lineDash = null;
      state.lineDashOffset = undefined;
      state.lineJoin = undefined;
      state.lineWidth = undefined;
      state.miterLimit = undefined;
    }
  }

  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Fill instruction.
   */
  createFill(state) {
    const fillStyle = state.fillStyle;
    /** @type {Array<*>} */
    const fillInstruction = [_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].SET_FILL_STYLE, fillStyle];
    if (typeof fillStyle !== 'string') {
      // Fill is a pattern or gradient - align it!
      fillInstruction.push(true);
    }
    return fillInstruction;
  }

  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(state) {
    this.instructions.push(this.createStroke(state));
  }

  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Stroke instruction.
   */
  createStroke(state) {
    return [_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].SET_STROKE_STYLE, state.strokeStyle, state.lineWidth * this.pixelRatio, state.lineCap, state.lineJoin, state.miterLimit, this.applyPixelRatio(state.lineDash), state.lineDashOffset * this.pixelRatio];
  }

  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState):Array<*>} createFill Create fill.
   */
  updateFillStyle(state, createFill) {
    const fillStyle = state.fillStyle;
    if (typeof fillStyle !== 'string' || state.currentFillStyle != fillStyle) {
      if (fillStyle !== undefined) {
        this.instructions.push(createFill.call(this, state));
      }
      state.currentFillStyle = fillStyle;
    }
  }

  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState): void} applyStroke Apply stroke.
   */
  updateStrokeStyle(state, applyStroke) {
    const strokeStyle = state.strokeStyle;
    const lineCap = state.lineCap;
    const lineDash = state.lineDash;
    const lineDashOffset = state.lineDashOffset;
    const lineJoin = state.lineJoin;
    const lineWidth = state.lineWidth;
    const miterLimit = state.miterLimit;
    if (state.currentStrokeStyle != strokeStyle || state.currentLineCap != lineCap || lineDash != state.currentLineDash && !(0,_array_js__WEBPACK_IMPORTED_MODULE_5__.equals)(state.currentLineDash, lineDash) || state.currentLineDashOffset != lineDashOffset || state.currentLineJoin != lineJoin || state.currentLineWidth != lineWidth || state.currentMiterLimit != miterLimit) {
      if (strokeStyle !== undefined) {
        applyStroke.call(this, state);
      }
      state.currentStrokeStyle = strokeStyle;
      state.currentLineCap = lineCap;
      state.currentLineDash = lineDash;
      state.currentLineDashOffset = lineDashOffset;
      state.currentLineJoin = lineJoin;
      state.currentLineWidth = lineWidth;
      state.currentMiterLimit = miterLimit;
    }
  }

  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  endGeometry(feature) {
    this.beginGeometryInstruction1_[2] = this.instructions.length;
    this.beginGeometryInstruction1_ = null;
    this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length;
    this.beginGeometryInstruction2_ = null;
    const endGeometryInstruction = [_Instruction_js__WEBPACK_IMPORTED_MODULE_3__["default"].END_GEOMETRY, feature];
    this.instructions.push(endGeometryInstruction);
    this.hitDetectionInstructions.push(endGeometryInstruction);
  }

  /**
   * Get the buffered rendering extent.  Rendering will be clipped to the extent
   * provided to the constructor.  To account for symbolizers that may intersect
   * this extent, we calculate a buffered extent (e.g. based on stroke width).
   * @return {import("../../extent.js").Extent} The buffered rendering extent.
   * @protected
   */
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_) {
      this.bufferedMaxExtent_ = (0,_extent_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.maxExtent);
      if (this.maxLineWidth > 0) {
        const width = this.resolution * (this.maxLineWidth + 1) / 2;
        (0,_extent_js__WEBPACK_IMPORTED_MODULE_1__.buffer)(this.bufferedMaxExtent_, width, this.bufferedMaxExtent_);
      }
    }
    return this.bufferedMaxExtent_;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasBuilder);

/***/ }),

/***/ 92080:
/*!*******************************************************!*\
  !*** ./node_modules/ol/render/canvas/BuilderGroup.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Builder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Builder.js */ 90441);
/* harmony import */ var _ImageBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageBuilder.js */ 79606);
/* harmony import */ var _LineStringBuilder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LineStringBuilder.js */ 86721);
/* harmony import */ var _PolygonBuilder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PolygonBuilder.js */ 70356);
/* harmony import */ var _TextBuilder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextBuilder.js */ 89153);
/**
 * @module ol/render/canvas/BuilderGroup
 */







/**
 * @type {Object<import("../canvas.js").BuilderType, typeof Builder>}
 */
const BATCH_CONSTRUCTORS = {
  'Circle': _PolygonBuilder_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'Default': _Builder_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  'Image': _ImageBuilder_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  'LineString': _LineStringBuilder_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  'Polygon': _PolygonBuilder_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'Text': _TextBuilder_js__WEBPACK_IMPORTED_MODULE_4__["default"]
};
class BuilderGroup {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Max extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    /**
     * @private
     * @type {number}
     */
    this.tolerance_ = tolerance;

    /**
     * @private
     * @type {import("../../extent.js").Extent}
     */
    this.maxExtent_ = maxExtent;

    /**
     * @private
     * @type {number}
     */
    this.pixelRatio_ = pixelRatio;

    /**
     * @private
     * @type {number}
     */
    this.resolution_ = resolution;

    /**
     * @private
     * @type {!Object<string, !Object<import("../canvas.js").BuilderType, Builder>>}
     */
    this.buildersByZIndex_ = {};
  }

  /**
   * @return {!Object<string, !Object<import("../canvas.js").BuilderType, import("./Builder.js").SerializableInstructions>>} The serializable instructions
   */
  finish() {
    const builderInstructions = {};
    for (const zKey in this.buildersByZIndex_) {
      builderInstructions[zKey] = builderInstructions[zKey] || {};
      const builders = this.buildersByZIndex_[zKey];
      for (const builderKey in builders) {
        const builderInstruction = builders[builderKey].finish();
        builderInstructions[zKey][builderKey] = builderInstruction;
      }
    }
    return builderInstructions;
  }

  /**
   * @param {number|undefined} zIndex Z index.
   * @param {import("../canvas.js").BuilderType} builderType Replay type.
   * @return {import("../VectorContext.js").default} Replay.
   */
  getBuilder(zIndex, builderType) {
    const zIndexKey = zIndex !== undefined ? zIndex.toString() : '0';
    let replays = this.buildersByZIndex_[zIndexKey];
    if (replays === undefined) {
      replays = {};
      this.buildersByZIndex_[zIndexKey] = replays;
    }
    let replay = replays[builderType];
    if (replay === undefined) {
      const Constructor = BATCH_CONSTRUCTORS[builderType];
      replay = new Constructor(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_);
      replays[builderType] = replay;
    }
    return replay;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuilderGroup);

/***/ }),

/***/ 48743:
/*!***************************************************!*\
  !*** ./node_modules/ol/render/canvas/Executor.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Instruction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Instruction.js */ 93272);
/* harmony import */ var _TextBuilder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextBuilder.js */ 89153);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transform.js */ 9287);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extent.js */ 55407);
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvas.js */ 74921);
/* harmony import */ var _geom_flat_textpath_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geom/flat/textpath.js */ 16727);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../array.js */ 84698);
/* harmony import */ var _geom_flat_length_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geom/flat/length.js */ 10426);
/* harmony import */ var _geom_flat_transform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geom/flat/transform.js */ 28707);
/**
 * @module ol/render/canvas/Executor
 */










/**
 * @typedef {Object} BBox
 * @property {number} minX Minimal x.
 * @property {number} minY Minimal y.
 * @property {number} maxX Maximal x.
 * @property {number} maxY Maximal y
 * @property {*} value Value.
 */

/**
 * @typedef {Object} ImageOrLabelDimensions
 * @property {number} drawImageX DrawImageX.
 * @property {number} drawImageY DrawImageY.
 * @property {number} drawImageW DrawImageW.
 * @property {number} drawImageH DrawImageH.
 * @property {number} originX OriginX.
 * @property {number} originY OriginY.
 * @property {Array<number>} scale Scale.
 * @property {BBox} declutterBox DeclutterBox.
 * @property {import("../../transform.js").Transform} canvasTransform CanvasTransform.
 */

/**
 * @typedef {{0: CanvasRenderingContext2D, 1: number, 2: import("../canvas.js").Label|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement, 3: ImageOrLabelDimensions, 4: number, 5: Array<*>, 6: Array<*>}} ReplayImageOrLabelArgs
 */

/**
 * @template T
 * @typedef {function(import("../../Feature.js").FeatureLike, import("../../geom/SimpleGeometry.js").default): T} FeatureCallback
 */

/**
 * @type {import("../../extent.js").Extent}
 */
const tmpExtent = (0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.createEmpty)();

/** @type {import("../../coordinate.js").Coordinate} */
const p1 = [];
/** @type {import("../../coordinate.js").Coordinate} */
const p2 = [];
/** @type {import("../../coordinate.js").Coordinate} */
const p3 = [];
/** @type {import("../../coordinate.js").Coordinate} */
const p4 = [];

/**
 * @param {ReplayImageOrLabelArgs} replayImageOrLabelArgs Arguments to replayImageOrLabel
 * @return {BBox} Declutter bbox.
 */
function getDeclutterBox(replayImageOrLabelArgs) {
  return replayImageOrLabelArgs[3].declutterBox;
}
const rtlRegEx = new RegExp( /* eslint-disable prettier/prettier */
'[' + String.fromCharCode(0x00591) + '-' + String.fromCharCode(0x008ff) + String.fromCharCode(0x0fb1d) + '-' + String.fromCharCode(0x0fdff) + String.fromCharCode(0x0fe70) + '-' + String.fromCharCode(0x0fefc) + String.fromCharCode(0x10800) + '-' + String.fromCharCode(0x10fff) + String.fromCharCode(0x1e800) + '-' + String.fromCharCode(0x1efff) + ']'
/* eslint-enable prettier/prettier */);

/**
 * @param {string} text Text.
 * @param {CanvasTextAlign} align Alignment.
 * @return {number} Text alignment.
 */
function horizontalTextAlign(text, align) {
  if (align === 'start') {
    align = rtlRegEx.test(text) ? 'right' : 'left';
  } else if (align === 'end') {
    align = rtlRegEx.test(text) ? 'left' : 'right';
  }
  return _TextBuilder_js__WEBPACK_IMPORTED_MODULE_1__.TEXT_ALIGN[align];
}

/**
 * @param {Array<string>} acc Accumulator.
 * @param {string} line Line of text.
 * @param {number} i Index
 * @return {Array<string>} Accumulator.
 */
function createTextChunks(acc, line, i) {
  if (i > 0) {
    acc.push('\n', '');
  }
  acc.push(line, '');
  return acc;
}
class Executor {
  /**
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The replay can have overlapping geometries.
   * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions
   */
  constructor(resolution, pixelRatio, overlaps, instructions) {
    /**
     * @protected
     * @type {boolean}
     */
    this.overlaps = overlaps;

    /**
     * @protected
     * @type {number}
     */
    this.pixelRatio = pixelRatio;

    /**
     * @protected
     * @const
     * @type {number}
     */
    this.resolution = resolution;

    /**
     * @private
     * @type {boolean}
     */
    this.alignFill_;

    /**
     * @protected
     * @type {Array<*>}
     */
    this.instructions = instructions.instructions;

    /**
     * @protected
     * @type {Array<number>}
     */
    this.coordinates = instructions.coordinates;

    /**
     * @private
     * @type {!Object<number,import("../../coordinate.js").Coordinate|Array<import("../../coordinate.js").Coordinate>|Array<Array<import("../../coordinate.js").Coordinate>>>}
     */
    this.coordinateCache_ = {};

    /**
     * @private
     * @type {!import("../../transform.js").Transform}
     */
    this.renderedTransform_ = (0,_transform_js__WEBPACK_IMPORTED_MODULE_2__.create)();

    /**
     * @protected
     * @type {Array<*>}
     */
    this.hitDetectionInstructions = instructions.hitDetectionInstructions;

    /**
     * @private
     * @type {Array<number>}
     */
    this.pixelCoordinates_ = null;

    /**
     * @private
     * @type {number}
     */
    this.viewRotation_ = 0;

    /**
     * @type {!Object<string, import("../canvas.js").FillState>}
     */
    this.fillStates = instructions.fillStates || {};

    /**
     * @type {!Object<string, import("../canvas.js").StrokeState>}
     */
    this.strokeStates = instructions.strokeStates || {};

    /**
     * @type {!Object<string, import("../canvas.js").TextState>}
     */
    this.textStates = instructions.textStates || {};

    /**
     * @private
     * @type {Object<string, Object<string, number>>}
     */
    this.widths_ = {};

    /**
     * @private
     * @type {Object<string, import("../canvas.js").Label>}
     */
    this.labels_ = {};
  }

  /**
   * @param {string|Array<string>} text Text.
   * @param {string} textKey Text style key.
   * @param {string} fillKey Fill style key.
   * @param {string} strokeKey Stroke style key.
   * @return {import("../canvas.js").Label} Label.
   */
  createLabel(text, textKey, fillKey, strokeKey) {
    const key = text + textKey + fillKey + strokeKey;
    if (this.labels_[key]) {
      return this.labels_[key];
    }
    const strokeState = strokeKey ? this.strokeStates[strokeKey] : null;
    const fillState = fillKey ? this.fillStates[fillKey] : null;
    const textState = this.textStates[textKey];
    const pixelRatio = this.pixelRatio;
    const scale = [textState.scale[0] * pixelRatio, textState.scale[1] * pixelRatio];
    const textIsArray = Array.isArray(text);
    const align = textState.justify ? _TextBuilder_js__WEBPACK_IMPORTED_MODULE_1__.TEXT_ALIGN[textState.justify] : horizontalTextAlign(Array.isArray(text) ? text[0] : text, textState.textAlign || _canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultTextAlign);
    const strokeWidth = strokeKey && strokeState.lineWidth ? strokeState.lineWidth : 0;
    const chunks = textIsArray ? text : text.split('\n').reduce(createTextChunks, []);
    const {
      width,
      height,
      widths,
      heights,
      lineWidths
    } = (0,_canvas_js__WEBPACK_IMPORTED_MODULE_3__.getTextDimensions)(textState, chunks);
    const renderWidth = width + strokeWidth;
    const contextInstructions = [];
    // make canvas 2 pixels wider to account for italic text width measurement errors
    const w = (renderWidth + 2) * scale[0];
    const h = (height + strokeWidth) * scale[1];
    /** @type {import("../canvas.js").Label} */
    const label = {
      width: w < 0 ? Math.floor(w) : Math.ceil(w),
      height: h < 0 ? Math.floor(h) : Math.ceil(h),
      contextInstructions: contextInstructions
    };
    if (scale[0] != 1 || scale[1] != 1) {
      contextInstructions.push('scale', scale);
    }
    if (strokeKey) {
      contextInstructions.push('strokeStyle', strokeState.strokeStyle);
      contextInstructions.push('lineWidth', strokeWidth);
      contextInstructions.push('lineCap', strokeState.lineCap);
      contextInstructions.push('lineJoin', strokeState.lineJoin);
      contextInstructions.push('miterLimit', strokeState.miterLimit);
      contextInstructions.push('setLineDash', [strokeState.lineDash]);
      contextInstructions.push('lineDashOffset', strokeState.lineDashOffset);
    }
    if (fillKey) {
      contextInstructions.push('fillStyle', fillState.fillStyle);
    }
    contextInstructions.push('textBaseline', 'middle');
    contextInstructions.push('textAlign', 'center');
    const leftRight = 0.5 - align;
    let x = align * renderWidth + leftRight * strokeWidth;
    const strokeInstructions = [];
    const fillInstructions = [];
    let lineHeight = 0;
    let lineOffset = 0;
    let widthHeightIndex = 0;
    let lineWidthIndex = 0;
    let previousFont;
    for (let i = 0, ii = chunks.length; i < ii; i += 2) {
      const text = chunks[i];
      if (text === '\n') {
        lineOffset += lineHeight;
        lineHeight = 0;
        x = align * renderWidth + leftRight * strokeWidth;
        ++lineWidthIndex;
        continue;
      }
      const font = chunks[i + 1] || textState.font;
      if (font !== previousFont) {
        if (strokeKey) {
          strokeInstructions.push('font', font);
        }
        if (fillKey) {
          fillInstructions.push('font', font);
        }
        previousFont = font;
      }
      lineHeight = Math.max(lineHeight, heights[widthHeightIndex]);
      const fillStrokeArgs = [text, x + leftRight * widths[widthHeightIndex] + align * (widths[widthHeightIndex] - lineWidths[lineWidthIndex]), 0.5 * (strokeWidth + lineHeight) + lineOffset];
      x += widths[widthHeightIndex];
      if (strokeKey) {
        strokeInstructions.push('strokeText', fillStrokeArgs);
      }
      if (fillKey) {
        fillInstructions.push('fillText', fillStrokeArgs);
      }
      ++widthHeightIndex;
    }
    Array.prototype.push.apply(contextInstructions, strokeInstructions);
    Array.prototype.push.apply(contextInstructions, fillInstructions);
    this.labels_[key] = label;
    return label;
  }

  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../coordinate.js").Coordinate} p1 1st point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p2 2nd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p3 3rd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p4 4th point of the background box.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   */
  replayTextBackground_(context, p1, p2, p3, p4, fillInstruction, strokeInstruction) {
    context.beginPath();
    context.moveTo.apply(context, p1);
    context.lineTo.apply(context, p2);
    context.lineTo.apply(context, p3);
    context.lineTo.apply(context, p4);
    context.lineTo.apply(context, p1);
    if (fillInstruction) {
      this.alignFill_ = /** @type {boolean} */fillInstruction[2];
      this.fill_(context);
    }
    if (strokeInstruction) {
      this.setStrokeStyle_(context, /** @type {Array<*>} */strokeInstruction);
      context.stroke();
    }
  }

  /**
   * @private
   * @param {number} sheetWidth Width of the sprite sheet.
   * @param {number} sheetHeight Height of the sprite sheet.
   * @param {number} centerX X.
   * @param {number} centerY Y.
   * @param {number} width Width.
   * @param {number} height Height.
   * @param {number} anchorX Anchor X.
   * @param {number} anchorY Anchor Y.
   * @param {number} originX Origin X.
   * @param {number} originY Origin Y.
   * @param {number} rotation Rotation.
   * @param {import("../../size.js").Size} scale Scale.
   * @param {boolean} snapToPixel Snap to pixel.
   * @param {Array<number>} padding Padding.
   * @param {boolean} fillStroke Background fill or stroke.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @return {ImageOrLabelDimensions} Dimensions for positioning and decluttering the image or label.
   */
  calculateImageOrLabelDimensions_(sheetWidth, sheetHeight, centerX, centerY, width, height, anchorX, anchorY, originX, originY, rotation, scale, snapToPixel, padding, fillStroke, feature) {
    anchorX *= scale[0];
    anchorY *= scale[1];
    let x = centerX - anchorX;
    let y = centerY - anchorY;
    const w = width + originX > sheetWidth ? sheetWidth - originX : width;
    const h = height + originY > sheetHeight ? sheetHeight - originY : height;
    const boxW = padding[3] + w * scale[0] + padding[1];
    const boxH = padding[0] + h * scale[1] + padding[2];
    const boxX = x - padding[3];
    const boxY = y - padding[0];
    if (fillStroke || rotation !== 0) {
      p1[0] = boxX;
      p4[0] = boxX;
      p1[1] = boxY;
      p2[1] = boxY;
      p2[0] = boxX + boxW;
      p3[0] = p2[0];
      p3[1] = boxY + boxH;
      p4[1] = p3[1];
    }
    let transform;
    if (rotation !== 0) {
      transform = (0,_transform_js__WEBPACK_IMPORTED_MODULE_2__.compose)((0,_transform_js__WEBPACK_IMPORTED_MODULE_2__.create)(), centerX, centerY, 1, 1, rotation, -centerX, -centerY);
      (0,_transform_js__WEBPACK_IMPORTED_MODULE_2__.apply)(transform, p1);
      (0,_transform_js__WEBPACK_IMPORTED_MODULE_2__.apply)(transform, p2);
      (0,_transform_js__WEBPACK_IMPORTED_MODULE_2__.apply)(transform, p3);
      (0,_transform_js__WEBPACK_IMPORTED_MODULE_2__.apply)(transform, p4);
      (0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.createOrUpdate)(Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1]), tmpExtent);
    } else {
      (0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.createOrUpdate)(Math.min(boxX, boxX + boxW), Math.min(boxY, boxY + boxH), Math.max(boxX, boxX + boxW), Math.max(boxY, boxY + boxH), tmpExtent);
    }
    if (snapToPixel) {
      x = Math.round(x);
      y = Math.round(y);
    }
    return {
      drawImageX: x,
      drawImageY: y,
      drawImageW: w,
      drawImageH: h,
      originX: originX,
      originY: originY,
      declutterBox: {
        minX: tmpExtent[0],
        minY: tmpExtent[1],
        maxX: tmpExtent[2],
        maxY: tmpExtent[3],
        value: feature
      },
      canvasTransform: transform,
      scale: scale
    };
  }

  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../canvas.js").Label|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} imageOrLabel Image.
   * @param {ImageOrLabelDimensions} dimensions Dimensions.
   * @param {number} opacity Opacity.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   * @return {boolean} The image or label was rendered.
   */
  replayImageOrLabel_(context, contextScale, imageOrLabel, dimensions, opacity, fillInstruction, strokeInstruction) {
    const fillStroke = !!(fillInstruction || strokeInstruction);
    const box = dimensions.declutterBox;
    const canvas = context.canvas;
    const strokePadding = strokeInstruction ? strokeInstruction[2] * dimensions.scale[0] / 2 : 0;
    const intersects = box.minX - strokePadding <= canvas.width / contextScale && box.maxX + strokePadding >= 0 && box.minY - strokePadding <= canvas.height / contextScale && box.maxY + strokePadding >= 0;
    if (intersects) {
      if (fillStroke) {
        this.replayTextBackground_(context, p1, p2, p3, p4, /** @type {Array<*>} */fillInstruction, /** @type {Array<*>} */strokeInstruction);
      }
      (0,_canvas_js__WEBPACK_IMPORTED_MODULE_3__.drawImageOrLabel)(context, dimensions.canvasTransform, opacity, imageOrLabel, dimensions.originX, dimensions.originY, dimensions.drawImageW, dimensions.drawImageH, dimensions.drawImageX, dimensions.drawImageY, dimensions.scale);
    }
    return true;
  }

  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   */
  fill_(context) {
    if (this.alignFill_) {
      const origin = (0,_transform_js__WEBPACK_IMPORTED_MODULE_2__.apply)(this.renderedTransform_, [0, 0]);
      const repeatSize = 512 * this.pixelRatio;
      context.save();
      context.translate(origin[0] % repeatSize, origin[1] % repeatSize);
      context.rotate(this.viewRotation_);
    }
    context.fill();
    if (this.alignFill_) {
      context.restore();
    }
  }

  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {Array<*>} instruction Instruction.
   */
  setStrokeStyle_(context, instruction) {
    context['strokeStyle'] = /** @type {import("../../colorlike.js").ColorLike} */instruction[1];
    context.lineWidth = /** @type {number} */instruction[2];
    context.lineCap = /** @type {CanvasLineCap} */instruction[3];
    context.lineJoin = /** @type {CanvasLineJoin} */instruction[4];
    context.miterLimit = /** @type {number} */instruction[5];
    context.lineDashOffset = /** @type {number} */instruction[7];
    context.setLineDash( /** @type {Array<number>} */instruction[6]);
  }

  /**
   * @private
   * @param {string|Array<string>} text The text to draw.
   * @param {string} textKey The key of the text state.
   * @param {string} strokeKey The key for the stroke state.
   * @param {string} fillKey The key for the fill state.
   * @return {{label: import("../canvas.js").Label, anchorX: number, anchorY: number}} The text image and its anchor.
   */
  drawLabelWithPointPlacement_(text, textKey, strokeKey, fillKey) {
    const textState = this.textStates[textKey];
    const label = this.createLabel(text, textKey, fillKey, strokeKey);
    const strokeState = this.strokeStates[strokeKey];
    const pixelRatio = this.pixelRatio;
    const align = horizontalTextAlign(Array.isArray(text) ? text[0] : text, textState.textAlign || _canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultTextAlign);
    const baseline = _TextBuilder_js__WEBPACK_IMPORTED_MODULE_1__.TEXT_ALIGN[textState.textBaseline || _canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultTextBaseline];
    const strokeWidth = strokeState && strokeState.lineWidth ? strokeState.lineWidth : 0;

    // Remove the 2 pixels we added in createLabel() for the anchor
    const width = label.width / pixelRatio - 2 * textState.scale[0];
    const anchorX = align * width + 2 * (0.5 - align) * strokeWidth;
    const anchorY = baseline * label.height / pixelRatio + 2 * (0.5 - baseline) * strokeWidth;
    return {
      label: label,
      anchorX: anchorX,
      anchorY: anchorY
    };
  }

  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {Array<*>} instructions Instructions array.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   * @return {T|undefined} Callback result.
   * @template T
   */
  execute_(context, contextScale, transform, instructions, snapToPixel, featureCallback, hitExtent, declutterTree) {
    /** @type {Array<number>} */
    let pixelCoordinates;
    if (this.pixelCoordinates_ && (0,_array_js__WEBPACK_IMPORTED_MODULE_4__.equals)(transform, this.renderedTransform_)) {
      pixelCoordinates = this.pixelCoordinates_;
    } else {
      if (!this.pixelCoordinates_) {
        this.pixelCoordinates_ = [];
      }
      pixelCoordinates = (0,_geom_flat_transform_js__WEBPACK_IMPORTED_MODULE_5__.transform2D)(this.coordinates, 0, this.coordinates.length, 2, transform, this.pixelCoordinates_);
      (0,_transform_js__WEBPACK_IMPORTED_MODULE_2__.setFromArray)(this.renderedTransform_, transform);
    }
    let i = 0; // instruction index
    const ii = instructions.length; // end of instructions
    let d = 0; // data index
    let dd; // end of per-instruction data
    let anchorX, anchorY, prevX, prevY, roundX, roundY, image, text, textKey, strokeKey, fillKey;
    let pendingFill = 0;
    let pendingStroke = 0;
    let lastFillInstruction = null;
    let lastStrokeInstruction = null;
    const coordinateCache = this.coordinateCache_;
    const viewRotation = this.viewRotation_;
    const viewRotationFromTransform = Math.round(Math.atan2(-transform[1], transform[0]) * 1e12) / 1e12;
    const state = /** @type {import("../../render.js").State} */{
      context: context,
      pixelRatio: this.pixelRatio,
      resolution: this.resolution,
      rotation: viewRotation
    };

    // When the batch size gets too big, performance decreases. 200 is a good
    // balance between batch size and number of fill/stroke instructions.
    const batchSize = this.instructions != instructions || this.overlaps ? 0 : 200;
    let /** @type {import("../../Feature.js").FeatureLike} */feature;
    let x, y, currentGeometry;
    while (i < ii) {
      const instruction = instructions[i];
      const type = /** @type {import("./Instruction.js").default} */
      instruction[0];
      switch (type) {
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].BEGIN_GEOMETRY:
          feature = /** @type {import("../../Feature.js").FeatureLike} */
          instruction[1];
          currentGeometry = instruction[3];
          if (!feature.getGeometry()) {
            i = /** @type {number} */instruction[2];
          } else if (hitExtent !== undefined && !(0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.intersects)(hitExtent, currentGeometry.getExtent())) {
            i = /** @type {number} */instruction[2] + 1;
          } else {
            ++i;
          }
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].BEGIN_PATH:
          if (pendingFill > batchSize) {
            this.fill_(context);
            pendingFill = 0;
          }
          if (pendingStroke > batchSize) {
            context.stroke();
            pendingStroke = 0;
          }
          if (!pendingFill && !pendingStroke) {
            context.beginPath();
            prevX = NaN;
            prevY = NaN;
          }
          ++i;
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].CIRCLE:
          d = /** @type {number} */instruction[1];
          const x1 = pixelCoordinates[d];
          const y1 = pixelCoordinates[d + 1];
          const x2 = pixelCoordinates[d + 2];
          const y2 = pixelCoordinates[d + 3];
          const dx = x2 - x1;
          const dy = y2 - y1;
          const r = Math.sqrt(dx * dx + dy * dy);
          context.moveTo(x1 + r, y1);
          context.arc(x1, y1, r, 0, 2 * Math.PI, true);
          ++i;
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].CLOSE_PATH:
          context.closePath();
          ++i;
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].CUSTOM:
          d = /** @type {number} */instruction[1];
          dd = instruction[2];
          const geometry = /** @type {import("../../geom/SimpleGeometry.js").default} */
          instruction[3];
          const renderer = instruction[4];
          const fn = instruction.length == 6 ? instruction[5] : undefined;
          state.geometry = geometry;
          state.feature = feature;
          if (!(i in coordinateCache)) {
            coordinateCache[i] = [];
          }
          const coords = coordinateCache[i];
          if (fn) {
            fn(pixelCoordinates, d, dd, 2, coords);
          } else {
            coords[0] = pixelCoordinates[d];
            coords[1] = pixelCoordinates[d + 1];
            coords.length = 2;
          }
          renderer(coords, state);
          ++i;
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].DRAW_IMAGE:
          d = /** @type {number} */instruction[1];
          dd = /** @type {number} */instruction[2];
          image = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
          instruction[3];

          // Remaining arguments in DRAW_IMAGE are in alphabetical order
          anchorX = /** @type {number} */instruction[4];
          anchorY = /** @type {number} */instruction[5];
          let height = /** @type {number} */instruction[6];
          const opacity = /** @type {number} */instruction[7];
          const originX = /** @type {number} */instruction[8];
          const originY = /** @type {number} */instruction[9];
          const rotateWithView = /** @type {boolean} */instruction[10];
          let rotation = /** @type {number} */instruction[11];
          const scale = /** @type {import("../../size.js").Size} */
          instruction[12];
          let width = /** @type {number} */instruction[13];
          const declutterMode = /** @type {"declutter"|"obstacle"|"none"|undefined} */
          instruction[14];
          const declutterImageWithText = /** @type {import("../canvas.js").DeclutterImageWithText} */
          instruction[15];
          if (!image && instruction.length >= 20) {
            // create label images
            text = /** @type {string} */instruction[19];
            textKey = /** @type {string} */instruction[20];
            strokeKey = /** @type {string} */instruction[21];
            fillKey = /** @type {string} */instruction[22];
            const labelWithAnchor = this.drawLabelWithPointPlacement_(text, textKey, strokeKey, fillKey);
            image = labelWithAnchor.label;
            instruction[3] = image;
            const textOffsetX = /** @type {number} */instruction[23];
            anchorX = (labelWithAnchor.anchorX - textOffsetX) * this.pixelRatio;
            instruction[4] = anchorX;
            const textOffsetY = /** @type {number} */instruction[24];
            anchorY = (labelWithAnchor.anchorY - textOffsetY) * this.pixelRatio;
            instruction[5] = anchorY;
            height = image.height;
            instruction[6] = height;
            width = image.width;
            instruction[13] = width;
          }
          let geometryWidths;
          if (instruction.length > 25) {
            geometryWidths = /** @type {number} */instruction[25];
          }
          let padding, backgroundFill, backgroundStroke;
          if (instruction.length > 17) {
            padding = /** @type {Array<number>} */instruction[16];
            backgroundFill = /** @type {boolean} */instruction[17];
            backgroundStroke = /** @type {boolean} */instruction[18];
          } else {
            padding = _canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultPadding;
            backgroundFill = false;
            backgroundStroke = false;
          }
          if (rotateWithView && viewRotationFromTransform) {
            // Canvas is expected to be rotated to reverse view rotation.
            rotation += viewRotation;
          } else if (!rotateWithView && !viewRotationFromTransform) {
            // Canvas is not rotated, images need to be rotated back to be north-up.
            rotation -= viewRotation;
          }
          let widthIndex = 0;
          for (; d < dd; d += 2) {
            if (geometryWidths && geometryWidths[widthIndex++] < width / this.pixelRatio) {
              continue;
            }
            const dimensions = this.calculateImageOrLabelDimensions_(image.width, image.height, pixelCoordinates[d], pixelCoordinates[d + 1], width, height, anchorX, anchorY, originX, originY, rotation, scale, snapToPixel, padding, backgroundFill || backgroundStroke, feature);
            /** @type {ReplayImageOrLabelArgs} */
            const args = [context, contextScale, image, dimensions, opacity, backgroundFill ? /** @type {Array<*>} */lastFillInstruction : null, backgroundStroke ? /** @type {Array<*>} */lastStrokeInstruction : null];
            if (declutterTree) {
              if (declutterMode === 'none') {
                // not rendered in declutter group
                continue;
              } else if (declutterMode === 'obstacle') {
                // will always be drawn, thus no collision detection, but insert as obstacle
                declutterTree.insert(dimensions.declutterBox);
                continue;
              } else {
                let imageArgs;
                let imageDeclutterBox;
                if (declutterImageWithText) {
                  const index = dd - d;
                  if (!declutterImageWithText[index]) {
                    // We now have the image for an image+text combination.
                    declutterImageWithText[index] = args;
                    // Don't render anything for now, wait for the text.
                    continue;
                  }
                  imageArgs = declutterImageWithText[index];
                  delete declutterImageWithText[index];
                  imageDeclutterBox = getDeclutterBox(imageArgs);
                  if (declutterTree.collides(imageDeclutterBox)) {
                    continue;
                  }
                }
                if (declutterTree.collides(dimensions.declutterBox)) {
                  continue;
                }
                if (imageArgs) {
                  // We now have image and text for an image+text combination.
                  declutterTree.insert(imageDeclutterBox);
                  // Render the image before we render the text.
                  this.replayImageOrLabel_.apply(this, imageArgs);
                }
                declutterTree.insert(dimensions.declutterBox);
              }
            }
            this.replayImageOrLabel_.apply(this, args);
          }
          ++i;
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].DRAW_CHARS:
          const begin = /** @type {number} */instruction[1];
          const end = /** @type {number} */instruction[2];
          const baseline = /** @type {number} */instruction[3];
          const overflow = /** @type {number} */instruction[4];
          fillKey = /** @type {string} */instruction[5];
          const maxAngle = /** @type {number} */instruction[6];
          const measurePixelRatio = /** @type {number} */instruction[7];
          const offsetY = /** @type {number} */instruction[8];
          strokeKey = /** @type {string} */instruction[9];
          const strokeWidth = /** @type {number} */instruction[10];
          text = /** @type {string} */instruction[11];
          textKey = /** @type {string} */instruction[12];
          const pixelRatioScale = [/** @type {number} */instruction[13], /** @type {number} */instruction[13]];
          const textState = this.textStates[textKey];
          const font = textState.font;
          const textScale = [textState.scale[0] * measurePixelRatio, textState.scale[1] * measurePixelRatio];
          let cachedWidths;
          if (font in this.widths_) {
            cachedWidths = this.widths_[font];
          } else {
            cachedWidths = {};
            this.widths_[font] = cachedWidths;
          }
          const pathLength = (0,_geom_flat_length_js__WEBPACK_IMPORTED_MODULE_7__.lineStringLength)(pixelCoordinates, begin, end, 2);
          const textLength = Math.abs(textScale[0]) * (0,_canvas_js__WEBPACK_IMPORTED_MODULE_3__.measureAndCacheTextWidth)(font, text, cachedWidths);
          if (overflow || textLength <= pathLength) {
            const textAlign = this.textStates[textKey].textAlign;
            const startM = (pathLength - textLength) * horizontalTextAlign(text, textAlign);
            const parts = (0,_geom_flat_textpath_js__WEBPACK_IMPORTED_MODULE_8__.drawTextOnPath)(pixelCoordinates, begin, end, 2, text, startM, maxAngle, Math.abs(textScale[0]), _canvas_js__WEBPACK_IMPORTED_MODULE_3__.measureAndCacheTextWidth, font, cachedWidths, viewRotationFromTransform ? 0 : this.viewRotation_);
            drawChars: if (parts) {
              /** @type {Array<ReplayImageOrLabelArgs>} */
              const replayImageOrLabelArgs = [];
              let c, cc, chars, label, part;
              if (strokeKey) {
                for (c = 0, cc = parts.length; c < cc; ++c) {
                  part = parts[c]; // x, y, anchorX, rotation, chunk
                  chars = /** @type {string} */part[4];
                  label = this.createLabel(chars, textKey, '', strokeKey);
                  anchorX = /** @type {number} */part[2] + (textScale[0] < 0 ? -strokeWidth : strokeWidth);
                  anchorY = baseline * label.height + (0.5 - baseline) * 2 * strokeWidth * textScale[1] / textScale[0] - offsetY;
                  const dimensions = this.calculateImageOrLabelDimensions_(label.width, label.height, part[0], part[1], label.width, label.height, anchorX, anchorY, 0, 0, part[3], pixelRatioScale, false, _canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultPadding, false, feature);
                  if (declutterTree && declutterTree.collides(dimensions.declutterBox)) {
                    break drawChars;
                  }
                  replayImageOrLabelArgs.push([context, contextScale, label, dimensions, 1, null, null]);
                }
              }
              if (fillKey) {
                for (c = 0, cc = parts.length; c < cc; ++c) {
                  part = parts[c]; // x, y, anchorX, rotation, chunk
                  chars = /** @type {string} */part[4];
                  label = this.createLabel(chars, textKey, fillKey, '');
                  anchorX = /** @type {number} */part[2];
                  anchorY = baseline * label.height - offsetY;
                  const dimensions = this.calculateImageOrLabelDimensions_(label.width, label.height, part[0], part[1], label.width, label.height, anchorX, anchorY, 0, 0, part[3], pixelRatioScale, false, _canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultPadding, false, feature);
                  if (declutterTree && declutterTree.collides(dimensions.declutterBox)) {
                    break drawChars;
                  }
                  replayImageOrLabelArgs.push([context, contextScale, label, dimensions, 1, null, null]);
                }
              }
              if (declutterTree) {
                declutterTree.load(replayImageOrLabelArgs.map(getDeclutterBox));
              }
              for (let i = 0, ii = replayImageOrLabelArgs.length; i < ii; ++i) {
                this.replayImageOrLabel_.apply(this, replayImageOrLabelArgs[i]);
              }
            }
          }
          ++i;
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].END_GEOMETRY:
          if (featureCallback !== undefined) {
            feature = /** @type {import("../../Feature.js").FeatureLike} */
            instruction[1];
            const result = featureCallback(feature, currentGeometry);
            if (result) {
              return result;
            }
          }
          ++i;
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].FILL:
          if (batchSize) {
            pendingFill++;
          } else {
            this.fill_(context);
          }
          ++i;
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].MOVE_TO_LINE_TO:
          d = /** @type {number} */instruction[1];
          dd = /** @type {number} */instruction[2];
          x = pixelCoordinates[d];
          y = pixelCoordinates[d + 1];
          roundX = x + 0.5 | 0;
          roundY = y + 0.5 | 0;
          if (roundX !== prevX || roundY !== prevY) {
            context.moveTo(x, y);
            prevX = roundX;
            prevY = roundY;
          }
          for (d += 2; d < dd; d += 2) {
            x = pixelCoordinates[d];
            y = pixelCoordinates[d + 1];
            roundX = x + 0.5 | 0;
            roundY = y + 0.5 | 0;
            if (d == dd - 2 || roundX !== prevX || roundY !== prevY) {
              context.lineTo(x, y);
              prevX = roundX;
              prevY = roundY;
            }
          }
          ++i;
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].SET_FILL_STYLE:
          lastFillInstruction = instruction;
          this.alignFill_ = instruction[2];
          if (pendingFill) {
            this.fill_(context);
            pendingFill = 0;
            if (pendingStroke) {
              context.stroke();
              pendingStroke = 0;
            }
          }
          context.fillStyle = /** @type {import("../../colorlike.js").ColorLike} */
          instruction[1];
          ++i;
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].SET_STROKE_STYLE:
          lastStrokeInstruction = instruction;
          if (pendingStroke) {
            context.stroke();
            pendingStroke = 0;
          }
          this.setStrokeStyle_(context, /** @type {Array<*>} */instruction);
          ++i;
          break;
        case _Instruction_js__WEBPACK_IMPORTED_MODULE_6__["default"].STROKE:
          if (batchSize) {
            pendingStroke++;
          } else {
            context.stroke();
          }
          ++i;
          break;
        default:
          // consume the instruction anyway, to avoid an infinite loop
          ++i;
          break;
      }
    }
    if (pendingFill) {
      this.fill_(context);
    }
    if (pendingStroke) {
      context.stroke();
    }
    return undefined;
  }

  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  execute(context, contextScale, transform, viewRotation, snapToPixel, declutterTree) {
    this.viewRotation_ = viewRotation;
    this.execute_(context, contextScale, transform, this.instructions, snapToPixel, undefined, undefined, declutterTree);
  }

  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @return {T|undefined} Callback result.
   * @template T
   */
  executeHitDetection(context, transform, viewRotation, featureCallback, hitExtent) {
    this.viewRotation_ = viewRotation;
    return this.execute_(context, 1, transform, this.hitDetectionInstructions, true, featureCallback, hitExtent);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Executor);

/***/ }),

/***/ 96827:
/*!********************************************************!*\
  !*** ./node_modules/ol/render/canvas/ExecutorGroup.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getPixelIndexArray": () => (/* binding */ getPixelIndexArray)
/* harmony export */ });
/* harmony import */ var _Executor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Executor.js */ 48743);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../array.js */ 84698);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../extent.js */ 55407);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../transform.js */ 9287);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom.js */ 27425);
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../obj.js */ 32234);
/* harmony import */ var _geom_flat_transform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geom/flat/transform.js */ 28707);
/**
 * @module ol/render/canvas/ExecutorGroup
 */









/**
 * @const
 * @type {Array<import("../canvas.js").BuilderType>}
 */
const ORDER = ['Polygon', 'Circle', 'LineString', 'Image', 'Text', 'Default'];
class ExecutorGroup {
  /**
   * @param {import("../../extent.js").Extent} maxExtent Max extent for clipping. When a
   * `maxExtent` was set on the Builder for this executor group, the same `maxExtent`
   * should be set here, unless the target context does not exceed that extent (which
   * can be the case when rendering to tiles).
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The executor group can have overlapping geometries.
   * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions
   * The serializable instructions.
   * @param {number} [renderBuffer] Optional rendering buffer.
   */
  constructor(maxExtent, resolution, pixelRatio, overlaps, allInstructions, renderBuffer) {
    /**
     * @private
     * @type {import("../../extent.js").Extent}
     */
    this.maxExtent_ = maxExtent;

    /**
     * @private
     * @type {boolean}
     */
    this.overlaps_ = overlaps;

    /**
     * @private
     * @type {number}
     */
    this.pixelRatio_ = pixelRatio;

    /**
     * @private
     * @type {number}
     */
    this.resolution_ = resolution;

    /**
     * @private
     * @type {number|undefined}
     */
    this.renderBuffer_ = renderBuffer;

    /**
     * @private
     * @type {!Object<string, !Object<import("../canvas.js").BuilderType, import("./Executor").default>>}
     */
    this.executorsByZIndex_ = {};

    /**
     * @private
     * @type {CanvasRenderingContext2D}
     */
    this.hitDetectionContext_ = null;

    /**
     * @private
     * @type {import("../../transform.js").Transform}
     */
    this.hitDetectionTransform_ = (0,_transform_js__WEBPACK_IMPORTED_MODULE_0__.create)();
    this.createExecutors_(allInstructions);
  }

  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  clip(context, transform) {
    const flatClipCoords = this.getClipCoords(transform);
    context.beginPath();
    context.moveTo(flatClipCoords[0], flatClipCoords[1]);
    context.lineTo(flatClipCoords[2], flatClipCoords[3]);
    context.lineTo(flatClipCoords[4], flatClipCoords[5]);
    context.lineTo(flatClipCoords[6], flatClipCoords[7]);
    context.clip();
  }

  /**
   * Create executors and populate them using the provided instructions.
   * @private
   * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions The serializable instructions
   */
  createExecutors_(allInstructions) {
    for (const zIndex in allInstructions) {
      let executors = this.executorsByZIndex_[zIndex];
      if (executors === undefined) {
        executors = {};
        this.executorsByZIndex_[zIndex] = executors;
      }
      const instructionByZindex = allInstructions[zIndex];
      for (const builderType in instructionByZindex) {
        const instructions = instructionByZindex[builderType];
        executors[builderType] = new _Executor_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.resolution_, this.pixelRatio_, this.overlaps_, instructions);
      }
    }
  }

  /**
   * @param {Array<import("../canvas.js").BuilderType>} executors Executors.
   * @return {boolean} Has executors of the provided types.
   */
  hasExecutors(executors) {
    for (const zIndex in this.executorsByZIndex_) {
      const candidates = this.executorsByZIndex_[zIndex];
      for (let i = 0, ii = executors.length; i < ii; ++i) {
        if (executors[i] in candidates) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {function(import("../../Feature.js").FeatureLike, import("../../geom/SimpleGeometry.js").default, number): T} callback Feature callback.
   * @param {Array<import("../../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(coordinate, resolution, rotation, hitTolerance, callback, declutteredFeatures) {
    hitTolerance = Math.round(hitTolerance);
    const contextSize = hitTolerance * 2 + 1;
    const transform = (0,_transform_js__WEBPACK_IMPORTED_MODULE_0__.compose)(this.hitDetectionTransform_, hitTolerance + 0.5, hitTolerance + 0.5, 1 / resolution, -1 / resolution, -rotation, -coordinate[0], -coordinate[1]);
    const newContext = !this.hitDetectionContext_;
    if (newContext) {
      this.hitDetectionContext_ = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createCanvasContext2D)(contextSize, contextSize, undefined, {
        willReadFrequently: true
      });
    }
    const context = this.hitDetectionContext_;
    if (context.canvas.width !== contextSize || context.canvas.height !== contextSize) {
      context.canvas.width = contextSize;
      context.canvas.height = contextSize;
    } else if (!newContext) {
      context.clearRect(0, 0, contextSize, contextSize);
    }

    /**
     * @type {import("../../extent.js").Extent}
     */
    let hitExtent;
    if (this.renderBuffer_ !== undefined) {
      hitExtent = (0,_extent_js__WEBPACK_IMPORTED_MODULE_3__.createEmpty)();
      (0,_extent_js__WEBPACK_IMPORTED_MODULE_3__.extendCoordinate)(hitExtent, coordinate);
      (0,_extent_js__WEBPACK_IMPORTED_MODULE_3__.buffer)(hitExtent, resolution * (this.renderBuffer_ + hitTolerance), hitExtent);
    }
    const indexes = getPixelIndexArray(hitTolerance);
    let builderType;

    /**
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
     * @return {T|undefined} Callback result.
     */
    function featureCallback(feature, geometry) {
      const imageData = context.getImageData(0, 0, contextSize, contextSize).data;
      for (let i = 0, ii = indexes.length; i < ii; i++) {
        if (imageData[indexes[i]] > 0) {
          if (!declutteredFeatures || builderType !== 'Image' && builderType !== 'Text' || declutteredFeatures.includes(feature)) {
            const idx = (indexes[i] - 3) / 4;
            const x = hitTolerance - idx % contextSize;
            const y = hitTolerance - (idx / contextSize | 0);
            const result = callback(feature, geometry, x * x + y * y);
            if (result) {
              return result;
            }
          }
          context.clearRect(0, 0, contextSize, contextSize);
          break;
        }
      }
      return undefined;
    }

    /** @type {Array<number>} */
    const zs = Object.keys(this.executorsByZIndex_).map(Number);
    zs.sort(_array_js__WEBPACK_IMPORTED_MODULE_4__.ascending);
    let i, j, executors, executor, result;
    for (i = zs.length - 1; i >= 0; --i) {
      const zIndexKey = zs[i].toString();
      executors = this.executorsByZIndex_[zIndexKey];
      for (j = ORDER.length - 1; j >= 0; --j) {
        builderType = ORDER[j];
        executor = executors[builderType];
        if (executor !== undefined) {
          result = executor.executeHitDetection(context, transform, rotation, featureCallback, hitExtent);
          if (result) {
            return result;
          }
        }
      }
    }
    return undefined;
  }

  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   * @return {Array<number>|null} Clip coordinates.
   */
  getClipCoords(transform) {
    const maxExtent = this.maxExtent_;
    if (!maxExtent) {
      return null;
    }
    const minX = maxExtent[0];
    const minY = maxExtent[1];
    const maxX = maxExtent[2];
    const maxY = maxExtent[3];
    const flatClipCoords = [minX, minY, minX, maxY, maxX, maxY, maxX, minY];
    (0,_geom_flat_transform_js__WEBPACK_IMPORTED_MODULE_5__.transform2D)(flatClipCoords, 0, 8, 2, transform, flatClipCoords);
    return flatClipCoords;
  }

  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return (0,_obj_js__WEBPACK_IMPORTED_MODULE_6__.isEmpty)(this.executorsByZIndex_);
  }

  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and test to integer pixel.
   * @param {Array<import("../canvas.js").BuilderType>} [builderTypes] Ordered replay types to replay.
   *     Default is {@link module:ol/render/replay~ORDER}
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  execute(context, contextScale, transform, viewRotation, snapToPixel, builderTypes, declutterTree) {
    /** @type {Array<number>} */
    const zs = Object.keys(this.executorsByZIndex_).map(Number);
    zs.sort(_array_js__WEBPACK_IMPORTED_MODULE_4__.ascending);

    // setup clipping so that the parts of over-simplified geometries are not
    // visible outside the current extent when panning
    if (this.maxExtent_) {
      context.save();
      this.clip(context, transform);
    }
    builderTypes = builderTypes ? builderTypes : ORDER;
    let i, ii, j, jj, replays, replay;
    if (declutterTree) {
      zs.reverse();
    }
    for (i = 0, ii = zs.length; i < ii; ++i) {
      const zIndexKey = zs[i].toString();
      replays = this.executorsByZIndex_[zIndexKey];
      for (j = 0, jj = builderTypes.length; j < jj; ++j) {
        const builderType = builderTypes[j];
        replay = replays[builderType];
        if (replay !== undefined) {
          replay.execute(context, contextScale, transform, viewRotation, snapToPixel, declutterTree);
        }
      }
    }
    if (this.maxExtent_) {
      context.restore();
    }
  }
}

/**
 * This cache is used to store arrays of indexes for calculated pixel circles
 * to increase performance.
 * It is a static property to allow each Replaygroup to access it.
 * @type {Object<number, Array<number>>}
 */
const circlePixelIndexArrayCache = {};

/**
 * This methods creates an array with indexes of all pixels within a circle,
 * ordered by how close they are to the center.
 * A cache is used to increase performance.
 * @param {number} radius Radius.
 * @return {Array<number>} An array with indexes within a circle.
 */
function getPixelIndexArray(radius) {
  if (circlePixelIndexArrayCache[radius] !== undefined) {
    return circlePixelIndexArrayCache[radius];
  }
  const size = radius * 2 + 1;
  const maxDistanceSq = radius * radius;
  const distances = new Array(maxDistanceSq + 1);
  for (let i = 0; i <= radius; ++i) {
    for (let j = 0; j <= radius; ++j) {
      const distanceSq = i * i + j * j;
      if (distanceSq > maxDistanceSq) {
        break;
      }
      let distance = distances[distanceSq];
      if (!distance) {
        distance = [];
        distances[distanceSq] = distance;
      }
      distance.push(((radius + i) * size + (radius + j)) * 4 + 3);
      if (i > 0) {
        distance.push(((radius - i) * size + (radius + j)) * 4 + 3);
      }
      if (j > 0) {
        distance.push(((radius + i) * size + (radius - j)) * 4 + 3);
        if (i > 0) {
          distance.push(((radius - i) * size + (radius - j)) * 4 + 3);
        }
      }
    }
  }
  const pixelIndex = [];
  for (let i = 0, ii = distances.length; i < ii; ++i) {
    if (distances[i]) {
      pixelIndex.push(...distances[i]);
    }
  }
  circlePixelIndexArrayCache[radius] = pixelIndex;
  return pixelIndex;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExecutorGroup);

/***/ }),

/***/ 79606:
/*!*******************************************************!*\
  !*** ./node_modules/ol/render/canvas/ImageBuilder.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Builder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.js */ 90441);
/* harmony import */ var _Instruction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction.js */ 93272);
/**
 * @module ol/render/canvas/ImageBuilder
 */


class CanvasImageBuilder extends _Builder_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);

    /**
     * @private
     * @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement}
     */
    this.hitDetectionImage_ = null;

    /**
     * @private
     * @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement}
     */
    this.image_ = null;

    /**
     * @private
     * @type {number|undefined}
     */
    this.imagePixelRatio_ = undefined;

    /**
     * @private
     * @type {number|undefined}
     */
    this.anchorX_ = undefined;

    /**
     * @private
     * @type {number|undefined}
     */
    this.anchorY_ = undefined;

    /**
     * @private
     * @type {number|undefined}
     */
    this.height_ = undefined;

    /**
     * @private
     * @type {number|undefined}
     */
    this.opacity_ = undefined;

    /**
     * @private
     * @type {number|undefined}
     */
    this.originX_ = undefined;

    /**
     * @private
     * @type {number|undefined}
     */
    this.originY_ = undefined;

    /**
     * @private
     * @type {boolean|undefined}
     */
    this.rotateWithView_ = undefined;

    /**
     * @private
     * @type {number|undefined}
     */
    this.rotation_ = undefined;

    /**
     * @private
     * @type {import("../../size.js").Size|undefined}
     */
    this.scale_ = undefined;

    /**
     * @private
     * @type {number|undefined}
     */
    this.width_ = undefined;

    /**
     * @private
     * @type {"declutter"|"obstacle"|"none"|undefined}
     */
    this.declutterMode_ = undefined;

    /**
     * Data shared with a text builder for combined decluttering.
     * @private
     * @type {import("../canvas.js").DeclutterImageWithText}
     */
    this.declutterImageWithText_ = undefined;
  }

  /**
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} pointGeometry Point geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawPoint(pointGeometry, feature) {
    if (!this.image_) {
      return;
    }
    this.beginGeometry(pointGeometry, feature);
    const flatCoordinates = pointGeometry.getFlatCoordinates();
    const stride = pointGeometry.getStride();
    const myBegin = this.coordinates.length;
    const myEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
    this.instructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].DRAW_IMAGE, myBegin, myEnd, this.image_,
    // Remaining arguments to DRAW_IMAGE are in alphabetical order
    this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_ * this.imagePixelRatio_, this.originY_ * this.imagePixelRatio_, this.rotateWithView_, this.rotation_, [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_), this.declutterMode_, this.declutterImageWithText_]);
    this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].DRAW_IMAGE, myBegin, myEnd, this.hitDetectionImage_,
    // Remaining arguments to DRAW_IMAGE are in alphabetical order
    this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]);
    this.endGeometry(feature);
  }

  /**
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiPoint(multiPointGeometry, feature) {
    if (!this.image_) {
      return;
    }
    this.beginGeometry(multiPointGeometry, feature);
    const flatCoordinates = multiPointGeometry.getFlatCoordinates();
    const stride = multiPointGeometry.getStride();
    const myBegin = this.coordinates.length;
    const myEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
    this.instructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].DRAW_IMAGE, myBegin, myEnd, this.image_,
    // Remaining arguments to DRAW_IMAGE are in alphabetical order
    this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_ * this.imagePixelRatio_, this.originY_ * this.imagePixelRatio_, this.rotateWithView_, this.rotation_, [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_), this.declutterMode_, this.declutterImageWithText_]);
    this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].DRAW_IMAGE, myBegin, myEnd, this.hitDetectionImage_,
    // Remaining arguments to DRAW_IMAGE are in alphabetical order
    this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]);
    this.endGeometry(feature);
  }

  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    this.reverseHitDetectionInstructions();
    // FIXME this doesn't really protect us against further calls to draw*Geometry
    this.anchorX_ = undefined;
    this.anchorY_ = undefined;
    this.hitDetectionImage_ = null;
    this.image_ = null;
    this.imagePixelRatio_ = undefined;
    this.height_ = undefined;
    this.scale_ = undefined;
    this.opacity_ = undefined;
    this.originX_ = undefined;
    this.originY_ = undefined;
    this.rotateWithView_ = undefined;
    this.rotation_ = undefined;
    this.width_ = undefined;
    return super.finish();
  }

  /**
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   * @param {Object} [sharedData] Shared data.
   */
  setImageStyle(imageStyle, sharedData) {
    const anchor = imageStyle.getAnchor();
    const size = imageStyle.getSize();
    const origin = imageStyle.getOrigin();
    this.imagePixelRatio_ = imageStyle.getPixelRatio(this.pixelRatio);
    this.anchorX_ = anchor[0];
    this.anchorY_ = anchor[1];
    this.hitDetectionImage_ = imageStyle.getHitDetectionImage();
    this.image_ = imageStyle.getImage(this.pixelRatio);
    this.height_ = size[1];
    this.opacity_ = imageStyle.getOpacity();
    this.originX_ = origin[0];
    this.originY_ = origin[1];
    this.rotateWithView_ = imageStyle.getRotateWithView();
    this.rotation_ = imageStyle.getRotation();
    this.scale_ = imageStyle.getScaleArray();
    this.width_ = size[0];
    this.declutterMode_ = imageStyle.getDeclutterMode();
    this.declutterImageWithText_ = sharedData;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasImageBuilder);

/***/ }),

/***/ 8112:
/*!****************************************************!*\
  !*** ./node_modules/ol/render/canvas/Immediate.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VectorContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VectorContext.js */ 24388);
/* harmony import */ var _colorlike_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../colorlike.js */ 73231);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transform.js */ 9287);
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../canvas.js */ 74921);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../array.js */ 84698);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../extent.js */ 55407);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../math.js */ 52761);
/* harmony import */ var _geom_flat_transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geom/flat/transform.js */ 28707);
/* harmony import */ var _geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geom/SimpleGeometry.js */ 41303);
/**
 * @module ol/render/canvas/Immediate
 */
// FIXME test, especially polygons with holes and multipolygons
// FIXME need to handle large thick features (where pixel size matters)
// FIXME add offset and end to ol/geom/flat/transform~transform2D?











/**
 * @classdesc
 * A concrete subclass of {@link module:ol/render/VectorContext~VectorContext} that implements
 * direct rendering of features and geometries to an HTML5 Canvas context.
 * Instances of this class are created internally by the library and
 * provided to application code as vectorContext member of the
 * {@link module:ol/render/Event~RenderEvent} object associated with postcompose, precompose and
 * render events emitted by layers and maps.
 */
class CanvasImmediateRenderer extends _VectorContext_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {number} [squaredTolerance] Optional squared tolerance for simplification.
   * @param {import("../../proj.js").TransformFunction} [userTransform] Transform from user to view projection.
   */
  constructor(context, pixelRatio, extent, transform, viewRotation, squaredTolerance, userTransform) {
    super();

    /**
     * @private
     * @type {CanvasRenderingContext2D}
     */
    this.context_ = context;

    /**
     * @private
     * @type {number}
     */
    this.pixelRatio_ = pixelRatio;

    /**
     * @private
     * @type {import("../../extent.js").Extent}
     */
    this.extent_ = extent;

    /**
     * @private
     * @type {import("../../transform.js").Transform}
     */
    this.transform_ = transform;

    /**
     * @private
     * @type {number}
     */
    this.transformRotation_ = transform ? (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.toFixed)(Math.atan2(transform[1], transform[0]), 10) : 0;

    /**
     * @private
     * @type {number}
     */
    this.viewRotation_ = viewRotation;

    /**
     * @private
     * @type {number}
     */
    this.squaredTolerance_ = squaredTolerance;

    /**
     * @private
     * @type {import("../../proj.js").TransformFunction}
     */
    this.userTransform_ = userTransform;

    /**
     * @private
     * @type {?import("../canvas.js").FillState}
     */
    this.contextFillState_ = null;

    /**
     * @private
     * @type {?import("../canvas.js").StrokeState}
     */
    this.contextStrokeState_ = null;

    /**
     * @private
     * @type {?import("../canvas.js").TextState}
     */
    this.contextTextState_ = null;

    /**
     * @private
     * @type {?import("../canvas.js").FillState}
     */
    this.fillState_ = null;

    /**
     * @private
     * @type {?import("../canvas.js").StrokeState}
     */
    this.strokeState_ = null;

    /**
     * @private
     * @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement}
     */
    this.image_ = null;

    /**
     * @private
     * @type {number}
     */
    this.imageAnchorX_ = 0;

    /**
     * @private
     * @type {number}
     */
    this.imageAnchorY_ = 0;

    /**
     * @private
     * @type {number}
     */
    this.imageHeight_ = 0;

    /**
     * @private
     * @type {number}
     */
    this.imageOpacity_ = 0;

    /**
     * @private
     * @type {number}
     */
    this.imageOriginX_ = 0;

    /**
     * @private
     * @type {number}
     */
    this.imageOriginY_ = 0;

    /**
     * @private
     * @type {boolean}
     */
    this.imageRotateWithView_ = false;

    /**
     * @private
     * @type {number}
     */
    this.imageRotation_ = 0;

    /**
     * @private
     * @type {import("../../size.js").Size}
     */
    this.imageScale_ = [0, 0];

    /**
     * @private
     * @type {number}
     */
    this.imageWidth_ = 0;

    /**
     * @private
     * @type {string}
     */
    this.text_ = '';

    /**
     * @private
     * @type {number}
     */
    this.textOffsetX_ = 0;

    /**
     * @private
     * @type {number}
     */
    this.textOffsetY_ = 0;

    /**
     * @private
     * @type {boolean}
     */
    this.textRotateWithView_ = false;

    /**
     * @private
     * @type {number}
     */
    this.textRotation_ = 0;

    /**
     * @private
     * @type {import("../../size.js").Size}
     */
    this.textScale_ = [0, 0];

    /**
     * @private
     * @type {?import("../canvas.js").FillState}
     */
    this.textFillState_ = null;

    /**
     * @private
     * @type {?import("../canvas.js").StrokeState}
     */
    this.textStrokeState_ = null;

    /**
     * @private
     * @type {?import("../canvas.js").TextState}
     */
    this.textState_ = null;

    /**
     * @private
     * @type {Array<number>}
     */
    this.pixelCoordinates_ = [];

    /**
     * @private
     * @type {import("../../transform.js").Transform}
     */
    this.tmpLocalTransform_ = (0,_transform_js__WEBPACK_IMPORTED_MODULE_2__.create)();
  }

  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawImages_(flatCoordinates, offset, end, stride) {
    if (!this.image_) {
      return;
    }
    const pixelCoordinates = (0,_geom_flat_transform_js__WEBPACK_IMPORTED_MODULE_3__.transform2D)(flatCoordinates, offset, end, stride, this.transform_, this.pixelCoordinates_);
    const context = this.context_;
    const localTransform = this.tmpLocalTransform_;
    const alpha = context.globalAlpha;
    if (this.imageOpacity_ != 1) {
      context.globalAlpha = alpha * this.imageOpacity_;
    }
    let rotation = this.imageRotation_;
    if (this.transformRotation_ === 0) {
      rotation -= this.viewRotation_;
    }
    if (this.imageRotateWithView_) {
      rotation += this.viewRotation_;
    }
    for (let i = 0, ii = pixelCoordinates.length; i < ii; i += 2) {
      const x = pixelCoordinates[i] - this.imageAnchorX_;
      const y = pixelCoordinates[i + 1] - this.imageAnchorY_;
      if (rotation !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const centerX = x + this.imageAnchorX_;
        const centerY = y + this.imageAnchorY_;
        (0,_transform_js__WEBPACK_IMPORTED_MODULE_2__.compose)(localTransform, centerX, centerY, 1, 1, rotation, -centerX, -centerY);
        context.setTransform.apply(context, localTransform);
        context.translate(centerX, centerY);
        context.scale(this.imageScale_[0], this.imageScale_[1]);
        context.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, -this.imageAnchorX_, -this.imageAnchorY_, this.imageWidth_, this.imageHeight_);
        context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        context.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, x, y, this.imageWidth_, this.imageHeight_);
      }
    }
    if (this.imageOpacity_ != 1) {
      context.globalAlpha = alpha;
    }
  }

  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawText_(flatCoordinates, offset, end, stride) {
    if (!this.textState_ || this.text_ === '') {
      return;
    }
    if (this.textFillState_) {
      this.setContextFillState_(this.textFillState_);
    }
    if (this.textStrokeState_) {
      this.setContextStrokeState_(this.textStrokeState_);
    }
    this.setContextTextState_(this.textState_);
    const pixelCoordinates = (0,_geom_flat_transform_js__WEBPACK_IMPORTED_MODULE_3__.transform2D)(flatCoordinates, offset, end, stride, this.transform_, this.pixelCoordinates_);
    const context = this.context_;
    let rotation = this.textRotation_;
    if (this.transformRotation_ === 0) {
      rotation -= this.viewRotation_;
    }
    if (this.textRotateWithView_) {
      rotation += this.viewRotation_;
    }
    for (; offset < end; offset += stride) {
      const x = pixelCoordinates[offset] + this.textOffsetX_;
      const y = pixelCoordinates[offset + 1] + this.textOffsetY_;
      if (rotation !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1) {
        context.translate(x - this.textOffsetX_, y - this.textOffsetY_);
        context.rotate(rotation);
        context.translate(this.textOffsetX_, this.textOffsetY_);
        context.scale(this.textScale_[0], this.textScale_[1]);
        if (this.textStrokeState_) {
          context.strokeText(this.text_, 0, 0);
        }
        if (this.textFillState_) {
          context.fillText(this.text_, 0, 0);
        }
        context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        if (this.textStrokeState_) {
          context.strokeText(this.text_, x, y);
        }
        if (this.textFillState_) {
          context.fillText(this.text_, x, y);
        }
      }
    }
  }

  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} close Close.
   * @private
   * @return {number} end End.
   */
  moveToLineTo_(flatCoordinates, offset, end, stride, close) {
    const context = this.context_;
    const pixelCoordinates = (0,_geom_flat_transform_js__WEBPACK_IMPORTED_MODULE_3__.transform2D)(flatCoordinates, offset, end, stride, this.transform_, this.pixelCoordinates_);
    context.moveTo(pixelCoordinates[0], pixelCoordinates[1]);
    let length = pixelCoordinates.length;
    if (close) {
      length -= 2;
    }
    for (let i = 2; i < length; i += 2) {
      context.lineTo(pixelCoordinates[i], pixelCoordinates[i + 1]);
    }
    if (close) {
      context.closePath();
    }
    return end;
  }

  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawRings_(flatCoordinates, offset, ends, stride) {
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      offset = this.moveToLineTo_(flatCoordinates, offset, ends[i], stride, true);
    }
    return offset;
  }

  /**
   * Render a circle geometry into the canvas.  Rendering is immediate and uses
   * the current fill and stroke styles.
   *
   * @param {import("../../geom/Circle.js").default} geometry Circle geometry.
   * @api
   */
  drawCircle(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/Circle.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    if (!(0,_extent_js__WEBPACK_IMPORTED_MODULE_4__.intersects)(this.extent_, geometry.getExtent())) {
      return;
    }
    if (this.fillState_ || this.strokeState_) {
      if (this.fillState_) {
        this.setContextFillState_(this.fillState_);
      }
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
      }
      const pixelCoordinates = (0,_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_5__.transformGeom2D)(geometry, this.transform_, this.pixelCoordinates_);
      const dx = pixelCoordinates[2] - pixelCoordinates[0];
      const dy = pixelCoordinates[3] - pixelCoordinates[1];
      const radius = Math.sqrt(dx * dx + dy * dy);
      const context = this.context_;
      context.beginPath();
      context.arc(pixelCoordinates[0], pixelCoordinates[1], radius, 0, 2 * Math.PI);
      if (this.fillState_) {
        context.fill();
      }
      if (this.strokeState_) {
        context.stroke();
      }
    }
    if (this.text_ !== '') {
      this.drawText_(geometry.getCenter(), 0, 2, 2);
    }
  }

  /**
   * Set the rendering style.  Note that since this is an immediate rendering API,
   * any `zIndex` on the provided style will be ignored.
   *
   * @param {import("../../style/Style.js").default} style The rendering style.
   * @api
   */
  setStyle(style) {
    this.setFillStrokeStyle(style.getFill(), style.getStroke());
    this.setImageStyle(style.getImage());
    this.setTextStyle(style.getText());
  }

  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  setTransform(transform) {
    this.transform_ = transform;
  }

  /**
   * Render a geometry into the canvas.  Call
   * {@link module:ol/render/canvas/Immediate~CanvasImmediateRenderer#setStyle renderer.setStyle()} first to set the rendering style.
   *
   * @param {import("../../geom/Geometry.js").default|import("../Feature.js").default} geometry The geometry to render.
   * @api
   */
  drawGeometry(geometry) {
    const type = geometry.getType();
    switch (type) {
      case 'Point':
        this.drawPoint( /** @type {import("../../geom/Point.js").default} */geometry);
        break;
      case 'LineString':
        this.drawLineString( /** @type {import("../../geom/LineString.js").default} */geometry);
        break;
      case 'Polygon':
        this.drawPolygon( /** @type {import("../../geom/Polygon.js").default} */geometry);
        break;
      case 'MultiPoint':
        this.drawMultiPoint( /** @type {import("../../geom/MultiPoint.js").default} */geometry);
        break;
      case 'MultiLineString':
        this.drawMultiLineString( /** @type {import("../../geom/MultiLineString.js").default} */
        geometry);
        break;
      case 'MultiPolygon':
        this.drawMultiPolygon( /** @type {import("../../geom/MultiPolygon.js").default} */geometry);
        break;
      case 'GeometryCollection':
        this.drawGeometryCollection( /** @type {import("../../geom/GeometryCollection.js").default} */
        geometry);
        break;
      case 'Circle':
        this.drawCircle( /** @type {import("../../geom/Circle.js").default} */geometry);
        break;
      default:
    }
  }

  /**
   * Render a feature into the canvas.  Note that any `zIndex` on the provided
   * style will be ignored - features are rendered immediately in the order that
   * this method is called.  If you need `zIndex` support, you should be using an
   * {@link module:ol/layer/Vector~VectorLayer} instead.
   *
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {import("../../style/Style.js").default} style Style.
   * @api
   */
  drawFeature(feature, style) {
    const geometry = style.getGeometryFunction()(feature);
    if (!geometry) {
      return;
    }
    this.setStyle(style);
    this.drawGeometry(geometry);
  }

  /**
   * Render a GeometryCollection to the canvas.  Rendering is immediate and
   * uses the current styles appropriate for each geometry in the collection.
   *
   * @param {import("../../geom/GeometryCollection.js").default} geometry Geometry collection.
   */
  drawGeometryCollection(geometry) {
    const geometries = geometry.getGeometriesArray();
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      this.drawGeometry(geometries[i]);
    }
  }

  /**
   * Render a Point geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} geometry Point geometry.
   */
  drawPoint(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/Point.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    const flatCoordinates = geometry.getFlatCoordinates();
    const stride = geometry.getStride();
    if (this.image_) {
      this.drawImages_(flatCoordinates, 0, flatCoordinates.length, stride);
    }
    if (this.text_ !== '') {
      this.drawText_(flatCoordinates, 0, flatCoordinates.length, stride);
    }
  }

  /**
   * Render a MultiPoint geometry  into the canvas.  Rendering is immediate and
   * uses the current style.
   *
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} geometry MultiPoint geometry.
   */
  drawMultiPoint(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/MultiPoint.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    const flatCoordinates = geometry.getFlatCoordinates();
    const stride = geometry.getStride();
    if (this.image_) {
      this.drawImages_(flatCoordinates, 0, flatCoordinates.length, stride);
    }
    if (this.text_ !== '') {
      this.drawText_(flatCoordinates, 0, flatCoordinates.length, stride);
    }
  }

  /**
   * Render a LineString into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} geometry LineString geometry.
   */
  drawLineString(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/LineString.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    if (!(0,_extent_js__WEBPACK_IMPORTED_MODULE_4__.intersects)(this.extent_, geometry.getExtent())) {
      return;
    }
    if (this.strokeState_) {
      this.setContextStrokeState_(this.strokeState_);
      const context = this.context_;
      const flatCoordinates = geometry.getFlatCoordinates();
      context.beginPath();
      this.moveToLineTo_(flatCoordinates, 0, flatCoordinates.length, geometry.getStride(), false);
      context.stroke();
    }
    if (this.text_ !== '') {
      const flatMidpoint = geometry.getFlatMidpoint();
      this.drawText_(flatMidpoint, 0, 2, 2);
    }
  }

  /**
   * Render a MultiLineString geometry into the canvas.  Rendering is immediate
   * and uses the current style.
   *
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} geometry MultiLineString geometry.
   */
  drawMultiLineString(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/MultiLineString.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    const geometryExtent = geometry.getExtent();
    if (!(0,_extent_js__WEBPACK_IMPORTED_MODULE_4__.intersects)(this.extent_, geometryExtent)) {
      return;
    }
    if (this.strokeState_) {
      this.setContextStrokeState_(this.strokeState_);
      const context = this.context_;
      const flatCoordinates = geometry.getFlatCoordinates();
      let offset = 0;
      const ends = /** @type {Array<number>} */geometry.getEnds();
      const stride = geometry.getStride();
      context.beginPath();
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        offset = this.moveToLineTo_(flatCoordinates, offset, ends[i], stride, false);
      }
      context.stroke();
    }
    if (this.text_ !== '') {
      const flatMidpoints = geometry.getFlatMidpoints();
      this.drawText_(flatMidpoints, 0, flatMidpoints.length, 2);
    }
  }

  /**
   * Render a Polygon geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} geometry Polygon geometry.
   */
  drawPolygon(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/Polygon.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    if (!(0,_extent_js__WEBPACK_IMPORTED_MODULE_4__.intersects)(this.extent_, geometry.getExtent())) {
      return;
    }
    if (this.strokeState_ || this.fillState_) {
      if (this.fillState_) {
        this.setContextFillState_(this.fillState_);
      }
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
      }
      const context = this.context_;
      context.beginPath();
      this.drawRings_(geometry.getOrientedFlatCoordinates(), 0, /** @type {Array<number>} */geometry.getEnds(), geometry.getStride());
      if (this.fillState_) {
        context.fill();
      }
      if (this.strokeState_) {
        context.stroke();
      }
    }
    if (this.text_ !== '') {
      const flatInteriorPoint = geometry.getFlatInteriorPoint();
      this.drawText_(flatInteriorPoint, 0, 2, 2);
    }
  }

  /**
   * Render MultiPolygon geometry into the canvas.  Rendering is immediate and
   * uses the current style.
   * @param {import("../../geom/MultiPolygon.js").default} geometry MultiPolygon geometry.
   */
  drawMultiPolygon(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/MultiPolygon.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    if (!(0,_extent_js__WEBPACK_IMPORTED_MODULE_4__.intersects)(this.extent_, geometry.getExtent())) {
      return;
    }
    if (this.strokeState_ || this.fillState_) {
      if (this.fillState_) {
        this.setContextFillState_(this.fillState_);
      }
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
      }
      const context = this.context_;
      const flatCoordinates = geometry.getOrientedFlatCoordinates();
      let offset = 0;
      const endss = geometry.getEndss();
      const stride = geometry.getStride();
      context.beginPath();
      for (let i = 0, ii = endss.length; i < ii; ++i) {
        const ends = endss[i];
        offset = this.drawRings_(flatCoordinates, offset, ends, stride);
      }
      if (this.fillState_) {
        context.fill();
      }
      if (this.strokeState_) {
        context.stroke();
      }
    }
    if (this.text_ !== '') {
      const flatInteriorPoints = geometry.getFlatInteriorPoints();
      this.drawText_(flatInteriorPoints, 0, flatInteriorPoints.length, 2);
    }
  }

  /**
   * @param {import("../canvas.js").FillState} fillState Fill state.
   * @private
   */
  setContextFillState_(fillState) {
    const context = this.context_;
    const contextFillState = this.contextFillState_;
    if (!contextFillState) {
      context.fillStyle = fillState.fillStyle;
      this.contextFillState_ = {
        fillStyle: fillState.fillStyle
      };
    } else {
      if (contextFillState.fillStyle != fillState.fillStyle) {
        contextFillState.fillStyle = fillState.fillStyle;
        context.fillStyle = fillState.fillStyle;
      }
    }
  }

  /**
   * @param {import("../canvas.js").StrokeState} strokeState Stroke state.
   * @private
   */
  setContextStrokeState_(strokeState) {
    const context = this.context_;
    const contextStrokeState = this.contextStrokeState_;
    if (!contextStrokeState) {
      context.lineCap = strokeState.lineCap;
      context.setLineDash(strokeState.lineDash);
      context.lineDashOffset = strokeState.lineDashOffset;
      context.lineJoin = strokeState.lineJoin;
      context.lineWidth = strokeState.lineWidth;
      context.miterLimit = strokeState.miterLimit;
      context.strokeStyle = strokeState.strokeStyle;
      this.contextStrokeState_ = {
        lineCap: strokeState.lineCap,
        lineDash: strokeState.lineDash,
        lineDashOffset: strokeState.lineDashOffset,
        lineJoin: strokeState.lineJoin,
        lineWidth: strokeState.lineWidth,
        miterLimit: strokeState.miterLimit,
        strokeStyle: strokeState.strokeStyle
      };
    } else {
      if (contextStrokeState.lineCap != strokeState.lineCap) {
        contextStrokeState.lineCap = strokeState.lineCap;
        context.lineCap = strokeState.lineCap;
      }
      if (!(0,_array_js__WEBPACK_IMPORTED_MODULE_6__.equals)(contextStrokeState.lineDash, strokeState.lineDash)) {
        context.setLineDash(contextStrokeState.lineDash = strokeState.lineDash);
      }
      if (contextStrokeState.lineDashOffset != strokeState.lineDashOffset) {
        contextStrokeState.lineDashOffset = strokeState.lineDashOffset;
        context.lineDashOffset = strokeState.lineDashOffset;
      }
      if (contextStrokeState.lineJoin != strokeState.lineJoin) {
        contextStrokeState.lineJoin = strokeState.lineJoin;
        context.lineJoin = strokeState.lineJoin;
      }
      if (contextStrokeState.lineWidth != strokeState.lineWidth) {
        contextStrokeState.lineWidth = strokeState.lineWidth;
        context.lineWidth = strokeState.lineWidth;
      }
      if (contextStrokeState.miterLimit != strokeState.miterLimit) {
        contextStrokeState.miterLimit = strokeState.miterLimit;
        context.miterLimit = strokeState.miterLimit;
      }
      if (contextStrokeState.strokeStyle != strokeState.strokeStyle) {
        contextStrokeState.strokeStyle = strokeState.strokeStyle;
        context.strokeStyle = strokeState.strokeStyle;
      }
    }
  }

  /**
   * @param {import("../canvas.js").TextState} textState Text state.
   * @private
   */
  setContextTextState_(textState) {
    const context = this.context_;
    const contextTextState = this.contextTextState_;
    const textAlign = textState.textAlign ? textState.textAlign : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultTextAlign;
    if (!contextTextState) {
      context.font = textState.font;
      context.textAlign = textAlign;
      context.textBaseline = textState.textBaseline;
      this.contextTextState_ = {
        font: textState.font,
        textAlign: textAlign,
        textBaseline: textState.textBaseline
      };
    } else {
      if (contextTextState.font != textState.font) {
        contextTextState.font = textState.font;
        context.font = textState.font;
      }
      if (contextTextState.textAlign != textAlign) {
        contextTextState.textAlign = textAlign;
        context.textAlign = textAlign;
      }
      if (contextTextState.textBaseline != textState.textBaseline) {
        contextTextState.textBaseline = textState.textBaseline;
        context.textBaseline = textState.textBaseline;
      }
    }
  }

  /**
   * Set the fill and stroke style for subsequent draw operations.  To clear
   * either fill or stroke styles, pass null for the appropriate parameter.
   *
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(fillStyle, strokeStyle) {
    if (!fillStyle) {
      this.fillState_ = null;
    } else {
      const fillStyleColor = fillStyle.getColor();
      this.fillState_ = {
        fillStyle: (0,_colorlike_js__WEBPACK_IMPORTED_MODULE_8__.asColorLike)(fillStyleColor ? fillStyleColor : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultFillStyle)
      };
    }
    if (!strokeStyle) {
      this.strokeState_ = null;
    } else {
      const strokeStyleColor = strokeStyle.getColor();
      const strokeStyleLineCap = strokeStyle.getLineCap();
      const strokeStyleLineDash = strokeStyle.getLineDash();
      const strokeStyleLineDashOffset = strokeStyle.getLineDashOffset();
      const strokeStyleLineJoin = strokeStyle.getLineJoin();
      const strokeStyleWidth = strokeStyle.getWidth();
      const strokeStyleMiterLimit = strokeStyle.getMiterLimit();
      const lineDash = strokeStyleLineDash ? strokeStyleLineDash : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineDash;
      this.strokeState_ = {
        lineCap: strokeStyleLineCap !== undefined ? strokeStyleLineCap : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineCap,
        lineDash: this.pixelRatio_ === 1 ? lineDash : lineDash.map(n => n * this.pixelRatio_),
        lineDashOffset: (strokeStyleLineDashOffset ? strokeStyleLineDashOffset : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineDashOffset) * this.pixelRatio_,
        lineJoin: strokeStyleLineJoin !== undefined ? strokeStyleLineJoin : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineJoin,
        lineWidth: (strokeStyleWidth !== undefined ? strokeStyleWidth : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineWidth) * this.pixelRatio_,
        miterLimit: strokeStyleMiterLimit !== undefined ? strokeStyleMiterLimit : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultMiterLimit,
        strokeStyle: (0,_colorlike_js__WEBPACK_IMPORTED_MODULE_8__.asColorLike)(strokeStyleColor ? strokeStyleColor : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultStrokeStyle)
      };
    }
  }

  /**
   * Set the image style for subsequent draw operations.  Pass null to remove
   * the image style.
   *
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   */
  setImageStyle(imageStyle) {
    let imageSize;
    if (!imageStyle || !(imageSize = imageStyle.getSize())) {
      this.image_ = null;
      return;
    }
    const imagePixelRatio = imageStyle.getPixelRatio(this.pixelRatio_);
    const imageAnchor = imageStyle.getAnchor();
    const imageOrigin = imageStyle.getOrigin();
    this.image_ = imageStyle.getImage(this.pixelRatio_);
    this.imageAnchorX_ = imageAnchor[0] * imagePixelRatio;
    this.imageAnchorY_ = imageAnchor[1] * imagePixelRatio;
    this.imageHeight_ = imageSize[1] * imagePixelRatio;
    this.imageOpacity_ = imageStyle.getOpacity();
    this.imageOriginX_ = imageOrigin[0];
    this.imageOriginY_ = imageOrigin[1];
    this.imageRotateWithView_ = imageStyle.getRotateWithView();
    this.imageRotation_ = imageStyle.getRotation();
    const imageScale = imageStyle.getScaleArray();
    this.imageScale_ = [imageScale[0] * this.pixelRatio_ / imagePixelRatio, imageScale[1] * this.pixelRatio_ / imagePixelRatio];
    this.imageWidth_ = imageSize[0] * imagePixelRatio;
  }

  /**
   * Set the text style for subsequent draw operations.  Pass null to
   * remove the text style.
   *
   * @param {import("../../style/Text.js").default} textStyle Text style.
   */
  setTextStyle(textStyle) {
    if (!textStyle) {
      this.text_ = '';
    } else {
      const textFillStyle = textStyle.getFill();
      if (!textFillStyle) {
        this.textFillState_ = null;
      } else {
        const textFillStyleColor = textFillStyle.getColor();
        this.textFillState_ = {
          fillStyle: (0,_colorlike_js__WEBPACK_IMPORTED_MODULE_8__.asColorLike)(textFillStyleColor ? textFillStyleColor : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultFillStyle)
        };
      }
      const textStrokeStyle = textStyle.getStroke();
      if (!textStrokeStyle) {
        this.textStrokeState_ = null;
      } else {
        const textStrokeStyleColor = textStrokeStyle.getColor();
        const textStrokeStyleLineCap = textStrokeStyle.getLineCap();
        const textStrokeStyleLineDash = textStrokeStyle.getLineDash();
        const textStrokeStyleLineDashOffset = textStrokeStyle.getLineDashOffset();
        const textStrokeStyleLineJoin = textStrokeStyle.getLineJoin();
        const textStrokeStyleWidth = textStrokeStyle.getWidth();
        const textStrokeStyleMiterLimit = textStrokeStyle.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: textStrokeStyleLineCap !== undefined ? textStrokeStyleLineCap : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineCap,
          lineDash: textStrokeStyleLineDash ? textStrokeStyleLineDash : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineDash,
          lineDashOffset: textStrokeStyleLineDashOffset ? textStrokeStyleLineDashOffset : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineDashOffset,
          lineJoin: textStrokeStyleLineJoin !== undefined ? textStrokeStyleLineJoin : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineJoin,
          lineWidth: textStrokeStyleWidth !== undefined ? textStrokeStyleWidth : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultLineWidth,
          miterLimit: textStrokeStyleMiterLimit !== undefined ? textStrokeStyleMiterLimit : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultMiterLimit,
          strokeStyle: (0,_colorlike_js__WEBPACK_IMPORTED_MODULE_8__.asColorLike)(textStrokeStyleColor ? textStrokeStyleColor : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultStrokeStyle)
        };
      }
      const textFont = textStyle.getFont();
      const textOffsetX = textStyle.getOffsetX();
      const textOffsetY = textStyle.getOffsetY();
      const textRotateWithView = textStyle.getRotateWithView();
      const textRotation = textStyle.getRotation();
      const textScale = textStyle.getScaleArray();
      const textText = textStyle.getText();
      const textTextAlign = textStyle.getTextAlign();
      const textTextBaseline = textStyle.getTextBaseline();
      this.textState_ = {
        font: textFont !== undefined ? textFont : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultFont,
        textAlign: textTextAlign !== undefined ? textTextAlign : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultTextAlign,
        textBaseline: textTextBaseline !== undefined ? textTextBaseline : _canvas_js__WEBPACK_IMPORTED_MODULE_7__.defaultTextBaseline
      };
      this.text_ = textText !== undefined ? Array.isArray(textText) ? textText.reduce((acc, t, i) => acc += i % 2 ? ' ' : t, '') : textText : '';
      this.textOffsetX_ = textOffsetX !== undefined ? this.pixelRatio_ * textOffsetX : 0;
      this.textOffsetY_ = textOffsetY !== undefined ? this.pixelRatio_ * textOffsetY : 0;
      this.textRotateWithView_ = textRotateWithView !== undefined ? textRotateWithView : false;
      this.textRotation_ = textRotation !== undefined ? textRotation : 0;
      this.textScale_ = [this.pixelRatio_ * textScale[0], this.pixelRatio_ * textScale[1]];
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasImmediateRenderer);

/***/ }),

/***/ 93272:
/*!******************************************************!*\
  !*** ./node_modules/ol/render/canvas/Instruction.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "beginPathInstruction": () => (/* binding */ beginPathInstruction),
/* harmony export */   "closePathInstruction": () => (/* binding */ closePathInstruction),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fillInstruction": () => (/* binding */ fillInstruction),
/* harmony export */   "strokeInstruction": () => (/* binding */ strokeInstruction)
/* harmony export */ });
/**
 * @module ol/render/canvas/Instruction
 */

/**
 * @enum {number}
 */
const Instruction = {
  BEGIN_GEOMETRY: 0,
  BEGIN_PATH: 1,
  CIRCLE: 2,
  CLOSE_PATH: 3,
  CUSTOM: 4,
  DRAW_CHARS: 5,
  DRAW_IMAGE: 6,
  END_GEOMETRY: 7,
  FILL: 8,
  MOVE_TO_LINE_TO: 9,
  SET_FILL_STYLE: 10,
  SET_STROKE_STYLE: 11,
  STROKE: 12
};

/**
 * @type {Array<Instruction>}
 */
const fillInstruction = [Instruction.FILL];

/**
 * @type {Array<Instruction>}
 */
const strokeInstruction = [Instruction.STROKE];

/**
 * @type {Array<Instruction>}
 */
const beginPathInstruction = [Instruction.BEGIN_PATH];

/**
 * @type {Array<Instruction>}
 */
const closePathInstruction = [Instruction.CLOSE_PATH];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instruction);

/***/ }),

/***/ 86721:
/*!************************************************************!*\
  !*** ./node_modules/ol/render/canvas/LineStringBuilder.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Builder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.js */ 90441);
/* harmony import */ var _Instruction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction.js */ 93272);
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas.js */ 74921);
/**
 * @module ol/render/canvas/LineStringBuilder
 */



class CanvasLineStringBuilder extends _Builder_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);
  }

  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   * @return {number} end.
   */
  drawFlatCoordinates_(flatCoordinates, offset, end, stride) {
    const myBegin = this.coordinates.length;
    const myEnd = this.appendFlatLineCoordinates(flatCoordinates, offset, end, stride, false, false);
    const moveToLineToInstruction = [_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].MOVE_TO_LINE_TO, myBegin, myEnd];
    this.instructions.push(moveToLineToInstruction);
    this.hitDetectionInstructions.push(moveToLineToInstruction);
    return end;
  }

  /**
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawLineString(lineStringGeometry, feature) {
    const state = this.state;
    const strokeStyle = state.strokeStyle;
    const lineWidth = state.lineWidth;
    if (strokeStyle === undefined || lineWidth === undefined) {
      return;
    }
    this.updateStrokeStyle(state, this.applyStroke);
    this.beginGeometry(lineStringGeometry, feature);
    this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultLineDash, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultLineDashOffset], _Instruction_js__WEBPACK_IMPORTED_MODULE_1__.beginPathInstruction);
    const flatCoordinates = lineStringGeometry.getFlatCoordinates();
    const stride = lineStringGeometry.getStride();
    this.drawFlatCoordinates_(flatCoordinates, 0, flatCoordinates.length, stride);
    this.hitDetectionInstructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.strokeInstruction);
    this.endGeometry(feature);
  }

  /**
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiLineString(multiLineStringGeometry, feature) {
    const state = this.state;
    const strokeStyle = state.strokeStyle;
    const lineWidth = state.lineWidth;
    if (strokeStyle === undefined || lineWidth === undefined) {
      return;
    }
    this.updateStrokeStyle(state, this.applyStroke);
    this.beginGeometry(multiLineStringGeometry, feature);
    this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultLineDash, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultLineDashOffset], _Instruction_js__WEBPACK_IMPORTED_MODULE_1__.beginPathInstruction);
    const ends = multiLineStringGeometry.getEnds();
    const flatCoordinates = multiLineStringGeometry.getFlatCoordinates();
    const stride = multiLineStringGeometry.getStride();
    let offset = 0;
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      offset = this.drawFlatCoordinates_(flatCoordinates, offset, /** @type {number} */ends[i], stride);
    }
    this.hitDetectionInstructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.strokeInstruction);
    this.endGeometry(feature);
  }

  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const state = this.state;
    if (state.lastStroke != undefined && state.lastStroke != this.coordinates.length) {
      this.instructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.strokeInstruction);
    }
    this.reverseHitDetectionInstructions();
    this.state = null;
    return super.finish();
  }

  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(state) {
    if (state.lastStroke != undefined && state.lastStroke != this.coordinates.length) {
      this.instructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.strokeInstruction);
      state.lastStroke = this.coordinates.length;
    }
    state.lastStroke = 0;
    super.applyStroke(state);
    this.instructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.beginPathInstruction);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasLineStringBuilder);

/***/ }),

/***/ 70356:
/*!*********************************************************!*\
  !*** ./node_modules/ol/render/canvas/PolygonBuilder.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Builder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.js */ 90441);
/* harmony import */ var _Instruction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction.js */ 93272);
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas.js */ 74921);
/* harmony import */ var _geom_flat_simplify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geom/flat/simplify.js */ 96543);
/**
 * @module ol/render/canvas/PolygonBuilder
 */




class CanvasPolygonBuilder extends _Builder_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);
  }

  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawFlatCoordinatess_(flatCoordinates, offset, ends, stride) {
    const state = this.state;
    const fill = state.fillStyle !== undefined;
    const stroke = state.strokeStyle !== undefined;
    const numEnds = ends.length;
    this.instructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.beginPathInstruction);
    this.hitDetectionInstructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.beginPathInstruction);
    for (let i = 0; i < numEnds; ++i) {
      const end = ends[i];
      const myBegin = this.coordinates.length;
      const myEnd = this.appendFlatLineCoordinates(flatCoordinates, offset, end, stride, true, !stroke);
      const moveToLineToInstruction = [_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].MOVE_TO_LINE_TO, myBegin, myEnd];
      this.instructions.push(moveToLineToInstruction);
      this.hitDetectionInstructions.push(moveToLineToInstruction);
      if (stroke) {
        // Performance optimization: only call closePath() when we have a stroke.
        // Otherwise the ring is closed already (see appendFlatLineCoordinates above).
        this.instructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.closePathInstruction);
        this.hitDetectionInstructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.closePathInstruction);
      }
      offset = end;
    }
    if (fill) {
      this.instructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.fillInstruction);
      this.hitDetectionInstructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.fillInstruction);
    }
    if (stroke) {
      this.instructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.strokeInstruction);
      this.hitDetectionInstructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.strokeInstruction);
    }
    return offset;
  }

  /**
   * @param {import("../../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../../Feature.js").default} feature Feature.
   */
  drawCircle(circleGeometry, feature) {
    const state = this.state;
    const fillStyle = state.fillStyle;
    const strokeStyle = state.strokeStyle;
    if (fillStyle === undefined && strokeStyle === undefined) {
      return;
    }
    this.setFillStrokeStyles_();
    this.beginGeometry(circleGeometry, feature);
    if (state.fillStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].SET_FILL_STYLE, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultFillStyle]);
    }
    if (state.strokeStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultLineDash, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultLineDashOffset]);
    }
    const flatCoordinates = circleGeometry.getFlatCoordinates();
    const stride = circleGeometry.getStride();
    const myBegin = this.coordinates.length;
    this.appendFlatLineCoordinates(flatCoordinates, 0, flatCoordinates.length, stride, false, false);
    const circleInstruction = [_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].CIRCLE, myBegin];
    this.instructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.beginPathInstruction, circleInstruction);
    this.hitDetectionInstructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.beginPathInstruction, circleInstruction);
    if (state.fillStyle !== undefined) {
      this.instructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.fillInstruction);
      this.hitDetectionInstructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.fillInstruction);
    }
    if (state.strokeStyle !== undefined) {
      this.instructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.strokeInstruction);
      this.hitDetectionInstructions.push(_Instruction_js__WEBPACK_IMPORTED_MODULE_1__.strokeInstruction);
    }
    this.endGeometry(feature);
  }

  /**
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawPolygon(polygonGeometry, feature) {
    const state = this.state;
    const fillStyle = state.fillStyle;
    const strokeStyle = state.strokeStyle;
    if (fillStyle === undefined && strokeStyle === undefined) {
      return;
    }
    this.setFillStrokeStyles_();
    this.beginGeometry(polygonGeometry, feature);
    if (state.fillStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].SET_FILL_STYLE, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultFillStyle]);
    }
    if (state.strokeStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultLineDash, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultLineDashOffset]);
    }
    const ends = polygonGeometry.getEnds();
    const flatCoordinates = polygonGeometry.getOrientedFlatCoordinates();
    const stride = polygonGeometry.getStride();
    this.drawFlatCoordinatess_(flatCoordinates, 0, /** @type {Array<number>} */ends, stride);
    this.endGeometry(feature);
  }

  /**
   * @param {import("../../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiPolygon(multiPolygonGeometry, feature) {
    const state = this.state;
    const fillStyle = state.fillStyle;
    const strokeStyle = state.strokeStyle;
    if (fillStyle === undefined && strokeStyle === undefined) {
      return;
    }
    this.setFillStrokeStyles_();
    this.beginGeometry(multiPolygonGeometry, feature);
    if (state.fillStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].SET_FILL_STYLE, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultFillStyle]);
    }
    if (state.strokeStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_1__["default"].SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultLineDash, _canvas_js__WEBPACK_IMPORTED_MODULE_2__.defaultLineDashOffset]);
    }
    const endss = multiPolygonGeometry.getEndss();
    const flatCoordinates = multiPolygonGeometry.getOrientedFlatCoordinates();
    const stride = multiPolygonGeometry.getStride();
    let offset = 0;
    for (let i = 0, ii = endss.length; i < ii; ++i) {
      offset = this.drawFlatCoordinatess_(flatCoordinates, offset, endss[i], stride);
    }
    this.endGeometry(feature);
  }

  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    this.reverseHitDetectionInstructions();
    this.state = null;
    // We want to preserve topology when drawing polygons.  Polygons are
    // simplified using quantization and point elimination. However, we might
    // have received a mix of quantized and non-quantized geometries, so ensure
    // that all are quantized by quantizing all coordinates in the batch.
    const tolerance = this.tolerance;
    if (tolerance !== 0) {
      const coordinates = this.coordinates;
      for (let i = 0, ii = coordinates.length; i < ii; ++i) {
        coordinates[i] = (0,_geom_flat_simplify_js__WEBPACK_IMPORTED_MODULE_3__.snap)(coordinates[i], tolerance);
      }
    }
    return super.finish();
  }

  /**
   * @private
   */
  setFillStrokeStyles_() {
    const state = this.state;
    const fillStyle = state.fillStyle;
    if (fillStyle !== undefined) {
      this.updateFillStyle(state, this.createFill);
    }
    if (state.strokeStyle !== undefined) {
      this.updateStrokeStyle(state, this.applyStroke);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasPolygonBuilder);

/***/ }),

/***/ 89153:
/*!******************************************************!*\
  !*** ./node_modules/ol/render/canvas/TextBuilder.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEXT_ALIGN": () => (/* binding */ TEXT_ALIGN),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Builder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.js */ 90441);
/* harmony import */ var _Instruction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Instruction.js */ 93272);
/* harmony import */ var _colorlike_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../colorlike.js */ 73231);
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas.js */ 74921);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util.js */ 92204);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../extent.js */ 55407);
/* harmony import */ var _geom_flat_linechunk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geom/flat/linechunk.js */ 24472);
/* harmony import */ var _geom_flat_straightchunk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geom/flat/straightchunk.js */ 2590);
/**
 * @module ol/render/canvas/TextBuilder
 */








/**
 * @const
 * @type {{left: 0, center: 0.5, right: 1, top: 0, middle: 0.5, hanging: 0.2, alphabetic: 0.8, ideographic: 0.8, bottom: 1}}
 */
const TEXT_ALIGN = {
  'left': 0,
  'center': 0.5,
  'right': 1,
  'top': 0,
  'middle': 0.5,
  'hanging': 0.2,
  'alphabetic': 0.8,
  'ideographic': 0.8,
  'bottom': 1
};
class CanvasTextBuilder extends _Builder_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);

    /**
     * @private
     * @type {Array<HTMLCanvasElement>}
     */
    this.labels_ = null;

    /**
     * @private
     * @type {string|Array<string>}
     */
    this.text_ = '';

    /**
     * @private
     * @type {number}
     */
    this.textOffsetX_ = 0;

    /**
     * @private
     * @type {number}
     */
    this.textOffsetY_ = 0;

    /**
     * @private
     * @type {boolean|undefined}
     */
    this.textRotateWithView_ = undefined;

    /**
     * @private
     * @type {number}
     */
    this.textRotation_ = 0;

    /**
     * @private
     * @type {?import("../canvas.js").FillState}
     */
    this.textFillState_ = null;

    /**
     * @type {!Object<string, import("../canvas.js").FillState>}
     */
    this.fillStates = {};
    this.fillStates[_canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultFillStyle] = {
      fillStyle: _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultFillStyle
    };

    /**
     * @private
     * @type {?import("../canvas.js").StrokeState}
     */
    this.textStrokeState_ = null;

    /**
     * @type {!Object<string, import("../canvas.js").StrokeState>}
     */
    this.strokeStates = {};

    /**
     * @private
     * @type {import("../canvas.js").TextState}
     */
    this.textState_ = /** @type {import("../canvas.js").TextState} */{};

    /**
     * @type {!Object<string, import("../canvas.js").TextState>}
     */
    this.textStates = {};

    /**
     * @private
     * @type {string}
     */
    this.textKey_ = '';

    /**
     * @private
     * @type {string}
     */
    this.fillKey_ = '';

    /**
     * @private
     * @type {string}
     */
    this.strokeKey_ = '';

    /**
     * Data shared with an image builder for combined decluttering.
     * @private
     * @type {import("../canvas.js").DeclutterImageWithText}
     */
    this.declutterImageWithText_ = undefined;
  }

  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const instructions = super.finish();
    instructions.textStates = this.textStates;
    instructions.fillStates = this.fillStates;
    instructions.strokeStates = this.strokeStates;
    return instructions;
  }

  /**
   * @param {import("../../geom/SimpleGeometry.js").default|import("../Feature.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawText(geometry, feature) {
    const fillState = this.textFillState_;
    const strokeState = this.textStrokeState_;
    const textState = this.textState_;
    if (this.text_ === '' || !textState || !fillState && !strokeState) {
      return;
    }
    const coordinates = this.coordinates;
    let begin = coordinates.length;
    const geometryType = geometry.getType();
    let flatCoordinates = null;
    let stride = geometry.getStride();
    if (textState.placement === 'line' && (geometryType == 'LineString' || geometryType == 'MultiLineString' || geometryType == 'Polygon' || geometryType == 'MultiPolygon')) {
      if (!(0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.intersects)(this.getBufferedMaxExtent(), geometry.getExtent())) {
        return;
      }
      let ends;
      flatCoordinates = geometry.getFlatCoordinates();
      if (geometryType == 'LineString') {
        ends = [flatCoordinates.length];
      } else if (geometryType == 'MultiLineString') {
        ends = /** @type {import("../../geom/MultiLineString.js").default} */geometry.getEnds();
      } else if (geometryType == 'Polygon') {
        ends = /** @type {import("../../geom/Polygon.js").default} */geometry.getEnds().slice(0, 1);
      } else if (geometryType == 'MultiPolygon') {
        const endss = /** @type {import("../../geom/MultiPolygon.js").default} */geometry.getEndss();
        ends = [];
        for (let i = 0, ii = endss.length; i < ii; ++i) {
          ends.push(endss[i][0]);
        }
      }
      this.beginGeometry(geometry, feature);
      const repeat = textState.repeat;
      const textAlign = repeat ? undefined : textState.textAlign;
      // No `justify` support for line placement.
      let flatOffset = 0;
      for (let o = 0, oo = ends.length; o < oo; ++o) {
        let chunks;
        if (repeat) {
          chunks = (0,_geom_flat_linechunk_js__WEBPACK_IMPORTED_MODULE_3__.lineChunk)(repeat * this.resolution, flatCoordinates, flatOffset, ends[o], stride);
        } else {
          chunks = [flatCoordinates.slice(flatOffset, ends[o])];
        }
        for (let c = 0, cc = chunks.length; c < cc; ++c) {
          const chunk = chunks[c];
          let chunkBegin = 0;
          let chunkEnd = chunk.length;
          if (textAlign == undefined) {
            const range = (0,_geom_flat_straightchunk_js__WEBPACK_IMPORTED_MODULE_4__.matchingChunk)(textState.maxAngle, chunk, 0, chunk.length, 2);
            chunkBegin = range[0];
            chunkEnd = range[1];
          }
          for (let i = chunkBegin; i < chunkEnd; i += stride) {
            coordinates.push(chunk[i], chunk[i + 1]);
          }
          const end = coordinates.length;
          flatOffset = ends[o];
          this.drawChars_(begin, end);
          begin = end;
        }
      }
      this.endGeometry(feature);
    } else {
      let geometryWidths = textState.overflow ? null : [];
      switch (geometryType) {
        case 'Point':
        case 'MultiPoint':
          flatCoordinates = /** @type {import("../../geom/MultiPoint.js").default} */geometry.getFlatCoordinates();
          break;
        case 'LineString':
          flatCoordinates = /** @type {import("../../geom/LineString.js").default} */geometry.getFlatMidpoint();
          break;
        case 'Circle':
          flatCoordinates = /** @type {import("../../geom/Circle.js").default} */geometry.getCenter();
          break;
        case 'MultiLineString':
          flatCoordinates = /** @type {import("../../geom/MultiLineString.js").default} */geometry.getFlatMidpoints();
          stride = 2;
          break;
        case 'Polygon':
          flatCoordinates = /** @type {import("../../geom/Polygon.js").default} */geometry.getFlatInteriorPoint();
          if (!textState.overflow) {
            geometryWidths.push(flatCoordinates[2] / this.resolution);
          }
          stride = 3;
          break;
        case 'MultiPolygon':
          const interiorPoints = /** @type {import("../../geom/MultiPolygon.js").default} */geometry.getFlatInteriorPoints();
          flatCoordinates = [];
          for (let i = 0, ii = interiorPoints.length; i < ii; i += 3) {
            if (!textState.overflow) {
              geometryWidths.push(interiorPoints[i + 2] / this.resolution);
            }
            flatCoordinates.push(interiorPoints[i], interiorPoints[i + 1]);
          }
          if (flatCoordinates.length === 0) {
            return;
          }
          stride = 2;
          break;
        default:
      }
      const end = this.appendFlatPointCoordinates(flatCoordinates, stride);
      if (end === begin) {
        return;
      }
      if (geometryWidths && (end - begin) / 2 !== flatCoordinates.length / stride) {
        let beg = begin / 2;
        geometryWidths = geometryWidths.filter((w, i) => {
          const keep = coordinates[(beg + i) * 2] === flatCoordinates[i * stride] && coordinates[(beg + i) * 2 + 1] === flatCoordinates[i * stride + 1];
          if (!keep) {
            --beg;
          }
          return keep;
        });
      }
      this.saveTextStates_();
      if (textState.backgroundFill || textState.backgroundStroke) {
        this.setFillStrokeStyle(textState.backgroundFill, textState.backgroundStroke);
        if (textState.backgroundFill) {
          this.updateFillStyle(this.state, this.createFill);
        }
        if (textState.backgroundStroke) {
          this.updateStrokeStyle(this.state, this.applyStroke);
          this.hitDetectionInstructions.push(this.createStroke(this.state));
        }
      }
      this.beginGeometry(geometry, feature);

      // adjust padding for negative scale
      let padding = textState.padding;
      if (padding != _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultPadding && (textState.scale[0] < 0 || textState.scale[1] < 0)) {
        let p0 = textState.padding[0];
        let p1 = textState.padding[1];
        let p2 = textState.padding[2];
        let p3 = textState.padding[3];
        if (textState.scale[0] < 0) {
          p1 = -p1;
          p3 = -p3;
        }
        if (textState.scale[1] < 0) {
          p0 = -p0;
          p2 = -p2;
        }
        padding = [p0, p1, p2, p3];
      }

      // The image is unknown at this stage so we pass null; it will be computed at render time.
      // For clarity, we pass NaN for offsetX, offsetY, width and height, which will be computed at
      // render time.
      const pixelRatio = this.pixelRatio;
      this.instructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_5__["default"].DRAW_IMAGE, begin, end, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [1, 1], NaN, undefined, this.declutterImageWithText_, padding == _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultPadding ? _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultPadding : padding.map(function (p) {
        return p * pixelRatio;
      }), !!textState.backgroundFill, !!textState.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_, this.textOffsetX_, this.textOffsetY_, geometryWidths]);
      const scale = 1 / pixelRatio;
      // Set default fill for hit detection background
      const currentFillStyle = this.state.fillStyle;
      if (textState.backgroundFill) {
        this.state.fillStyle = _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultFillStyle;
        this.hitDetectionInstructions.push(this.createFill(this.state));
      }
      this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_5__["default"].DRAW_IMAGE, begin, end, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [scale, scale], NaN, undefined, this.declutterImageWithText_, padding, !!textState.backgroundFill, !!textState.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_ ? _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultFillStyle : this.fillKey_, this.textOffsetX_, this.textOffsetY_, geometryWidths]);
      // Reset previous fill
      if (textState.backgroundFill) {
        this.state.fillStyle = currentFillStyle;
        this.hitDetectionInstructions.push(this.createFill(this.state));
      }
      this.endGeometry(feature);
    }
  }

  /**
   * @private
   */
  saveTextStates_() {
    const strokeState = this.textStrokeState_;
    const textState = this.textState_;
    const fillState = this.textFillState_;
    const strokeKey = this.strokeKey_;
    if (strokeState) {
      if (!(strokeKey in this.strokeStates)) {
        this.strokeStates[strokeKey] = {
          strokeStyle: strokeState.strokeStyle,
          lineCap: strokeState.lineCap,
          lineDashOffset: strokeState.lineDashOffset,
          lineWidth: strokeState.lineWidth,
          lineJoin: strokeState.lineJoin,
          miterLimit: strokeState.miterLimit,
          lineDash: strokeState.lineDash
        };
      }
    }
    const textKey = this.textKey_;
    if (!(textKey in this.textStates)) {
      this.textStates[textKey] = {
        font: textState.font,
        textAlign: textState.textAlign || _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultTextAlign,
        justify: textState.justify,
        textBaseline: textState.textBaseline || _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultTextBaseline,
        scale: textState.scale
      };
    }
    const fillKey = this.fillKey_;
    if (fillState) {
      if (!(fillKey in this.fillStates)) {
        this.fillStates[fillKey] = {
          fillStyle: fillState.fillStyle
        };
      }
    }
  }

  /**
   * @private
   * @param {number} begin Begin.
   * @param {number} end End.
   */
  drawChars_(begin, end) {
    const strokeState = this.textStrokeState_;
    const textState = this.textState_;
    const strokeKey = this.strokeKey_;
    const textKey = this.textKey_;
    const fillKey = this.fillKey_;
    this.saveTextStates_();
    const pixelRatio = this.pixelRatio;
    const baseline = TEXT_ALIGN[textState.textBaseline];
    const offsetY = this.textOffsetY_ * pixelRatio;
    const text = this.text_;
    const strokeWidth = strokeState ? strokeState.lineWidth * Math.abs(textState.scale[0]) / 2 : 0;
    this.instructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_5__["default"].DRAW_CHARS, begin, end, baseline, textState.overflow, fillKey, textState.maxAngle, pixelRatio, offsetY, strokeKey, strokeWidth * pixelRatio, text, textKey, 1]);
    this.hitDetectionInstructions.push([_Instruction_js__WEBPACK_IMPORTED_MODULE_5__["default"].DRAW_CHARS, begin, end, baseline, textState.overflow, fillKey ? _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultFillStyle : fillKey, textState.maxAngle, 1, offsetY, strokeKey, strokeWidth, text, textKey, 1 / pixelRatio]);
  }

  /**
   * @param {import("../../style/Text.js").default} textStyle Text style.
   * @param {Object} [sharedData] Shared data.
   */
  setTextStyle(textStyle, sharedData) {
    let textState, fillState, strokeState;
    if (!textStyle) {
      this.text_ = '';
    } else {
      const textFillStyle = textStyle.getFill();
      if (!textFillStyle) {
        fillState = null;
        this.textFillState_ = fillState;
      } else {
        fillState = this.textFillState_;
        if (!fillState) {
          fillState = /** @type {import("../canvas.js").FillState} */{};
          this.textFillState_ = fillState;
        }
        fillState.fillStyle = (0,_colorlike_js__WEBPACK_IMPORTED_MODULE_6__.asColorLike)(textFillStyle.getColor() || _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultFillStyle);
      }
      const textStrokeStyle = textStyle.getStroke();
      if (!textStrokeStyle) {
        strokeState = null;
        this.textStrokeState_ = strokeState;
      } else {
        strokeState = this.textStrokeState_;
        if (!strokeState) {
          strokeState = /** @type {import("../canvas.js").StrokeState} */{};
          this.textStrokeState_ = strokeState;
        }
        const lineDash = textStrokeStyle.getLineDash();
        const lineDashOffset = textStrokeStyle.getLineDashOffset();
        const lineWidth = textStrokeStyle.getWidth();
        const miterLimit = textStrokeStyle.getMiterLimit();
        strokeState.lineCap = textStrokeStyle.getLineCap() || _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultLineCap;
        strokeState.lineDash = lineDash ? lineDash.slice() : _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultLineDash;
        strokeState.lineDashOffset = lineDashOffset === undefined ? _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultLineDashOffset : lineDashOffset;
        strokeState.lineJoin = textStrokeStyle.getLineJoin() || _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultLineJoin;
        strokeState.lineWidth = lineWidth === undefined ? _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultLineWidth : lineWidth;
        strokeState.miterLimit = miterLimit === undefined ? _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultMiterLimit : miterLimit;
        strokeState.strokeStyle = (0,_colorlike_js__WEBPACK_IMPORTED_MODULE_6__.asColorLike)(textStrokeStyle.getColor() || _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultStrokeStyle);
      }
      textState = this.textState_;
      const font = textStyle.getFont() || _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultFont;
      (0,_canvas_js__WEBPACK_IMPORTED_MODULE_1__.registerFont)(font);
      const textScale = textStyle.getScaleArray();
      textState.overflow = textStyle.getOverflow();
      textState.font = font;
      textState.maxAngle = textStyle.getMaxAngle();
      textState.placement = textStyle.getPlacement();
      textState.textAlign = textStyle.getTextAlign();
      textState.repeat = textStyle.getRepeat();
      textState.justify = textStyle.getJustify();
      textState.textBaseline = textStyle.getTextBaseline() || _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultTextBaseline;
      textState.backgroundFill = textStyle.getBackgroundFill();
      textState.backgroundStroke = textStyle.getBackgroundStroke();
      textState.padding = textStyle.getPadding() || _canvas_js__WEBPACK_IMPORTED_MODULE_1__.defaultPadding;
      textState.scale = textScale === undefined ? [1, 1] : textScale;
      const textOffsetX = textStyle.getOffsetX();
      const textOffsetY = textStyle.getOffsetY();
      const textRotateWithView = textStyle.getRotateWithView();
      const textRotation = textStyle.getRotation();
      this.text_ = textStyle.getText() || '';
      this.textOffsetX_ = textOffsetX === undefined ? 0 : textOffsetX;
      this.textOffsetY_ = textOffsetY === undefined ? 0 : textOffsetY;
      this.textRotateWithView_ = textRotateWithView === undefined ? false : textRotateWithView;
      this.textRotation_ = textRotation === undefined ? 0 : textRotation;
      this.strokeKey_ = strokeState ? (typeof strokeState.strokeStyle == 'string' ? strokeState.strokeStyle : (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.getUid)(strokeState.strokeStyle)) + strokeState.lineCap + strokeState.lineDashOffset + '|' + strokeState.lineWidth + strokeState.lineJoin + strokeState.miterLimit + '[' + strokeState.lineDash.join() + ']' : '';
      this.textKey_ = textState.font + textState.scale + (textState.textAlign || '?') + (textState.repeat || '?') + (textState.justify || '?') + (textState.textBaseline || '?');
      this.fillKey_ = fillState ? typeof fillState.fillStyle == 'string' ? fillState.fillStyle : '|' + (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.getUid)(fillState.fillStyle) : '';
    }
    this.declutterImageWithText_ = sharedData;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasTextBuilder);

/***/ }),

/***/ 37149:
/*!****************************************************!*\
  !*** ./node_modules/ol/render/canvas/hitdetect.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HIT_DETECT_RESOLUTION": () => (/* binding */ HIT_DETECT_RESOLUTION),
/* harmony export */   "createHitDetectionImageData": () => (/* binding */ createHitDetectionImageData),
/* harmony export */   "hitDetect": () => (/* binding */ hitDetect)
/* harmony export */ });
/* harmony import */ var _Immediate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Immediate.js */ 8112);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style.js */ 57920);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../array.js */ 84698);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../math.js */ 52761);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom.js */ 27425);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../extent.js */ 55407);
/**
 * @module ol/render/canvas/hitdetect
 */







const HIT_DETECT_RESOLUTION = 0.5;

/**
 * @param {import("../../size.js").Size} size Canvas size in css pixels.
 * @param {Array<import("../../transform.js").Transform>} transforms Transforms
 * for rendering features to all worlds of the viewport, from coordinates to css
 * pixels.
 * @param {Array<import("../../Feature.js").FeatureLike>} features
 * Features to consider for hit detection.
 * @param {import("../../style/Style.js").StyleFunction|undefined} styleFunction
 * Layer style function.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @return {ImageData} Hit detection image data.
 */
function createHitDetectionImageData(size, transforms, features, styleFunction, extent, resolution, rotation) {
  const width = size[0] * HIT_DETECT_RESOLUTION;
  const height = size[1] * HIT_DETECT_RESOLUTION;
  const context = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createCanvasContext2D)(width, height);
  context.imageSmoothingEnabled = false;
  const canvas = context.canvas;
  const renderer = new _Immediate_js__WEBPACK_IMPORTED_MODULE_1__["default"](context, HIT_DETECT_RESOLUTION, extent, null, rotation);
  const featureCount = features.length;
  // Stretch hit detection index to use the whole available color range
  const indexFactor = Math.floor((256 * 256 * 256 - 1) / featureCount);
  const featuresByZIndex = {};
  for (let i = 1; i <= featureCount; ++i) {
    const feature = features[i - 1];
    const featureStyleFunction = feature.getStyleFunction() || styleFunction;
    if (!featureStyleFunction) {
      continue;
    }
    let styles = featureStyleFunction(feature, resolution);
    if (!styles) {
      continue;
    }
    if (!Array.isArray(styles)) {
      styles = [styles];
    }
    const index = i * indexFactor;
    const color = index.toString(16).padStart(7, '#00000');
    for (let j = 0, jj = styles.length; j < jj; ++j) {
      const originalStyle = styles[j];
      const geometry = originalStyle.getGeometryFunction()(feature);
      if (!geometry || !(0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.intersects)(extent, geometry.getExtent())) {
        continue;
      }
      const style = originalStyle.clone();
      const fill = style.getFill();
      if (fill) {
        fill.setColor(color);
      }
      const stroke = style.getStroke();
      if (stroke) {
        stroke.setColor(color);
        stroke.setLineDash(null);
      }
      style.setText(undefined);
      const image = originalStyle.getImage();
      if (image) {
        const imgSize = image.getImageSize();
        if (!imgSize) {
          continue;
        }
        const imgContext = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createCanvasContext2D)(imgSize[0], imgSize[1], undefined, {
          alpha: false
        });
        const img = imgContext.canvas;
        imgContext.fillStyle = color;
        imgContext.fillRect(0, 0, img.width, img.height);
        style.setImage(new _style_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
          img: img,
          imgSize: imgSize,
          anchor: image.getAnchor(),
          anchorXUnits: 'pixels',
          anchorYUnits: 'pixels',
          offset: image.getOrigin(),
          opacity: 1,
          size: image.getSize(),
          scale: image.getScale(),
          rotation: image.getRotation(),
          rotateWithView: image.getRotateWithView()
        }));
      }
      const zIndex = style.getZIndex() || 0;
      let byGeometryType = featuresByZIndex[zIndex];
      if (!byGeometryType) {
        byGeometryType = {};
        featuresByZIndex[zIndex] = byGeometryType;
        byGeometryType['Polygon'] = [];
        byGeometryType['Circle'] = [];
        byGeometryType['LineString'] = [];
        byGeometryType['Point'] = [];
      }
      const type = geometry.getType();
      if (type === 'GeometryCollection') {
        const geometries = /** @type {import("../../geom/GeometryCollection.js").default} */geometry.getGeometriesArrayRecursive();
        for (let i = 0, ii = geometries.length; i < ii; ++i) {
          const geometry = geometries[i];
          byGeometryType[geometry.getType().replace('Multi', '')].push(geometry, style);
        }
      } else {
        byGeometryType[type.replace('Multi', '')].push(geometry, style);
      }
    }
  }
  const zIndexKeys = Object.keys(featuresByZIndex).map(Number).sort(_array_js__WEBPACK_IMPORTED_MODULE_4__.ascending);
  for (let i = 0, ii = zIndexKeys.length; i < ii; ++i) {
    const byGeometryType = featuresByZIndex[zIndexKeys[i]];
    for (const type in byGeometryType) {
      const geomAndStyle = byGeometryType[type];
      for (let j = 0, jj = geomAndStyle.length; j < jj; j += 2) {
        renderer.setStyle(geomAndStyle[j + 1]);
        for (let k = 0, kk = transforms.length; k < kk; ++k) {
          renderer.setTransform(transforms[k]);
          renderer.drawGeometry(geomAndStyle[j]);
        }
      }
    }
  }
  return context.getImageData(0, 0, canvas.width, canvas.height);
}

/**
 * @param {import("../../pixel").Pixel} pixel Pixel coordinate on the hit
 * detection canvas in css pixels.
 * @param {Array<F>} features Features. Has to
 * match the `features` array that was passed to `createHitDetectionImageData()`.
 * @param {ImageData} imageData Hit detection image data generated by
 * `createHitDetectionImageData()`.
 * @return {Array<F>} Features.
 * @template {import("../../Feature.js").FeatureLike} F
 */
function hitDetect(pixel, features, imageData) {
  const resultFeatures = [];
  if (imageData) {
    const x = Math.floor(Math.round(pixel[0]) * HIT_DETECT_RESOLUTION);
    const y = Math.floor(Math.round(pixel[1]) * HIT_DETECT_RESOLUTION);
    // The pixel coordinate is clamped down to the hit-detect canvas' size to account
    // for browsers returning coordinates slightly larger than the actual canvas size
    // due to a non-integer pixel ratio.
    const index = ((0,_math_js__WEBPACK_IMPORTED_MODULE_5__.clamp)(x, 0, imageData.width - 1) + (0,_math_js__WEBPACK_IMPORTED_MODULE_5__.clamp)(y, 0, imageData.height - 1) * imageData.width) * 4;
    const r = imageData.data[index];
    const g = imageData.data[index + 1];
    const b = imageData.data[index + 2];
    const i = b + 256 * (g + 256 * r);
    const indexFactor = Math.floor((256 * 256 * 256 - 1) / features.length);
    if (i && i % indexFactor === 0) {
      resultFeatures.push(features[i / indexFactor - 1]);
    }
  }
  // @ts-ignore Features are copied from `features` to `resultFeatures` so the type should be the same
  return resultFeatures;
}

/***/ }),

/***/ 55538:
/*!********************************************************!*\
  !*** ./node_modules/ol/renderer/canvas/VectorLayer.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_canvas_BuilderGroup_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../render/canvas/BuilderGroup.js */ 92080);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.js */ 94698);
/* harmony import */ var _render_canvas_ExecutorGroup_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../render/canvas/ExecutorGroup.js */ 96827);
/* harmony import */ var _render_EventType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/EventType.js */ 2443);
/* harmony import */ var _ViewHint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ViewHint.js */ 69528);
/* harmony import */ var _render_canvas_hitdetect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/canvas/hitdetect.js */ 37149);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../transform.js */ 9287);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../extent.js */ 55407);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dom.js */ 27425);
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vector.js */ 4382);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../array.js */ 84698);
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../proj.js */ 63815);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util.js */ 92204);
/* harmony import */ var _coordinate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../coordinate.js */ 36250);
/**
 * @module ol/renderer/canvas/VectorLayer
 */















/**
 * @classdesc
 * Canvas renderer for vector layers.
 * @api
 */
class CanvasVectorLayerRenderer extends _Layer_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
   */
  constructor(vectorLayer) {
    super(vectorLayer);

    /** @private */
    this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this);

    /**
     * @type {boolean}
     */
    this.animatingOrInteracting_;

    /**
     * @type {ImageData|null}
     */
    this.hitDetectionImageData_ = null;

    /**
     * @type {Array<import("../../Feature.js").default>}
     */
    this.renderedFeatures_ = null;

    /**
     * @private
     * @type {number}
     */
    this.renderedRevision_ = -1;

    /**
     * @private
     * @type {number}
     */
    this.renderedResolution_ = NaN;

    /**
     * @private
     * @type {import("../../extent.js").Extent}
     */
    this.renderedExtent_ = (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.createEmpty)();

    /**
     * @private
     * @type {import("../../extent.js").Extent}
     */
    this.wrappedRenderedExtent_ = (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.createEmpty)();

    /**
     * @private
     * @type {number}
     */
    this.renderedRotation_;

    /**
     * @private
     * @type {import("../../coordinate").Coordinate}
     */
    this.renderedCenter_ = null;

    /**
     * @private
     * @type {import("../../proj/Projection").default}
     */
    this.renderedProjection_ = null;

    /**
     * @private
     * @type {function(import("../../Feature.js").default, import("../../Feature.js").default): number|null}
     */
    this.renderedRenderOrder_ = null;

    /**
     * @private
     * @type {import("../../render/canvas/ExecutorGroup").default}
     */
    this.replayGroup_ = null;

    /**
     * A new replay group had to be created by `prepareFrame()`
     * @type {boolean}
     */
    this.replayGroupChanged = true;

    /**
     * @type {import("../../render/canvas/ExecutorGroup").default}
     */
    this.declutterExecutorGroup = null;

    /**
     * Clipping to be performed by `renderFrame()`
     * @type {boolean}
     */
    this.clipping = true;

    /**
     * @private
     * @type {CanvasRenderingContext2D}
     */
    this.compositionContext_ = null;

    /**
     * @private
     * @type {number}
     */
    this.opacity_ = 1;
  }

  /**
   * @param {ExecutorGroup} executorGroup Executor group.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  renderWorlds(executorGroup, frameState, declutterTree) {
    const extent = frameState.extent;
    const viewState = frameState.viewState;
    const center = viewState.center;
    const resolution = viewState.resolution;
    const projection = viewState.projection;
    const rotation = viewState.rotation;
    const projectionExtent = projection.getExtent();
    const vectorSource = this.getLayer().getSource();
    const pixelRatio = frameState.pixelRatio;
    const viewHints = frameState.viewHints;
    const snapToPixel = !(viewHints[_ViewHint_js__WEBPACK_IMPORTED_MODULE_3__["default"].ANIMATING] || viewHints[_ViewHint_js__WEBPACK_IMPORTED_MODULE_3__["default"].INTERACTING]);
    const context = this.compositionContext_;
    const width = Math.round(frameState.size[0] * pixelRatio);
    const height = Math.round(frameState.size[1] * pixelRatio);
    const multiWorld = vectorSource.getWrapX() && projection.canWrapX();
    const worldWidth = multiWorld ? (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.getWidth)(projectionExtent) : null;
    const endWorld = multiWorld ? Math.ceil((extent[2] - projectionExtent[2]) / worldWidth) + 1 : 1;
    let world = multiWorld ? Math.floor((extent[0] - projectionExtent[0]) / worldWidth) : 0;
    do {
      const transform = this.getRenderTransform(center, resolution, rotation, pixelRatio, width, height, world * worldWidth);
      executorGroup.execute(context, 1, transform, rotation, snapToPixel, undefined, declutterTree);
    } while (++world < endWorld);
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const compositionContext = (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.createCanvasContext2D)(this.context.canvas.width, this.context.canvas.height, _Layer_js__WEBPACK_IMPORTED_MODULE_1__.canvasPool);
      this.compositionContext_ = compositionContext;
    } else {
      this.compositionContext_ = this.context;
    }
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const alpha = this.context.globalAlpha;
      this.context.globalAlpha = this.opacity_;
      this.context.drawImage(this.compositionContext_.canvas, 0, 0);
      this.context.globalAlpha = alpha;
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.releaseCanvas)(this.compositionContext_);
      _Layer_js__WEBPACK_IMPORTED_MODULE_1__.canvasPool.push(this.compositionContext_.canvas);
      this.compositionContext_ = null;
    }
  }

  /**
   * Render declutter items for this layer
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeclutter(frameState) {
    if (this.declutterExecutorGroup) {
      this.setupCompositionContext_();
      this.renderWorlds(this.declutterExecutorGroup, frameState, frameState.declutterTree);
      this.releaseCompositionContext_();
    }
  }

  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement|null} target Target that may be used to render content to.
   * @return {HTMLElement|null} The rendered element.
   */
  renderFrame(frameState, target) {
    const pixelRatio = frameState.pixelRatio;
    const layerState = frameState.layerStatesArray[frameState.layerIndex];

    // set forward and inverse pixel transforms
    (0,_transform_js__WEBPACK_IMPORTED_MODULE_5__.makeScale)(this.pixelTransform, 1 / pixelRatio, 1 / pixelRatio);
    (0,_transform_js__WEBPACK_IMPORTED_MODULE_5__.makeInverse)(this.inversePixelTransform, this.pixelTransform);
    const canvasTransform = (0,_transform_js__WEBPACK_IMPORTED_MODULE_5__.toString)(this.pixelTransform);
    this.useContainer(target, canvasTransform, this.getBackground(frameState));
    const context = this.context;
    const canvas = context.canvas;
    const replayGroup = this.replayGroup_;
    const declutterExecutorGroup = this.declutterExecutorGroup;
    let render = replayGroup && !replayGroup.isEmpty() || declutterExecutorGroup && !declutterExecutorGroup.isEmpty();
    if (!render) {
      const hasRenderListeners = this.getLayer().hasListener(_render_EventType_js__WEBPACK_IMPORTED_MODULE_6__["default"].PRERENDER) || this.getLayer().hasListener(_render_EventType_js__WEBPACK_IMPORTED_MODULE_6__["default"].POSTRENDER);
      if (!hasRenderListeners) {
        return null;
      }
    }

    // resize and clear
    const width = Math.round(frameState.size[0] * pixelRatio);
    const height = Math.round(frameState.size[1] * pixelRatio);
    if (canvas.width != width || canvas.height != height) {
      canvas.width = width;
      canvas.height = height;
      if (canvas.style.transform !== canvasTransform) {
        canvas.style.transform = canvasTransform;
      }
    } else if (!this.containerReused) {
      context.clearRect(0, 0, width, height);
    }
    this.preRender(context, frameState);
    const viewState = frameState.viewState;
    const projection = viewState.projection;
    this.opacity_ = layerState.opacity;
    this.setupCompositionContext_();

    // clipped rendering if layer extent is set
    let clipped = false;
    if (render && layerState.extent && this.clipping) {
      const layerExtent = (0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.fromUserExtent)(layerState.extent, projection);
      render = (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.intersects)(layerExtent, frameState.extent);
      clipped = render && !(0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.containsExtent)(layerExtent, frameState.extent);
      if (clipped) {
        this.clipUnrotated(this.compositionContext_, frameState, layerExtent);
      }
    }
    if (render) {
      this.renderWorlds(replayGroup, frameState);
    }
    if (clipped) {
      this.compositionContext_.restore();
    }
    this.releaseCompositionContext_();
    this.postRender(context, frameState);
    if (this.renderedRotation_ !== viewState.rotation) {
      this.renderedRotation_ = viewState.rotation;
      this.hitDetectionImageData_ = null;
    }
    return this.container;
  }

  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature").default>>} Promise
   * that resolves with an array of features.
   */
  getFeatures(pixel) {
    return new Promise(resolve => {
      if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const size = [this.context.canvas.width, this.context.canvas.height];
        (0,_transform_js__WEBPACK_IMPORTED_MODULE_5__.apply)(this.pixelTransform, size);
        const center = this.renderedCenter_;
        const resolution = this.renderedResolution_;
        const rotation = this.renderedRotation_;
        const projection = this.renderedProjection_;
        const extent = this.wrappedRenderedExtent_;
        const layer = this.getLayer();
        const transforms = [];
        const width = size[0] * _render_canvas_hitdetect_js__WEBPACK_IMPORTED_MODULE_7__.HIT_DETECT_RESOLUTION;
        const height = size[1] * _render_canvas_hitdetect_js__WEBPACK_IMPORTED_MODULE_7__.HIT_DETECT_RESOLUTION;
        transforms.push(this.getRenderTransform(center, resolution, rotation, _render_canvas_hitdetect_js__WEBPACK_IMPORTED_MODULE_7__.HIT_DETECT_RESOLUTION, width, height, 0).slice());
        const source = layer.getSource();
        const projectionExtent = projection.getExtent();
        if (source.getWrapX() && projection.canWrapX() && !(0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.containsExtent)(projectionExtent, extent)) {
          let startX = extent[0];
          const worldWidth = (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.getWidth)(projectionExtent);
          let world = 0;
          let offsetX;
          while (startX < projectionExtent[0]) {
            --world;
            offsetX = worldWidth * world;
            transforms.push(this.getRenderTransform(center, resolution, rotation, _render_canvas_hitdetect_js__WEBPACK_IMPORTED_MODULE_7__.HIT_DETECT_RESOLUTION, width, height, offsetX).slice());
            startX += worldWidth;
          }
          world = 0;
          startX = extent[2];
          while (startX > projectionExtent[2]) {
            ++world;
            offsetX = worldWidth * world;
            transforms.push(this.getRenderTransform(center, resolution, rotation, _render_canvas_hitdetect_js__WEBPACK_IMPORTED_MODULE_7__.HIT_DETECT_RESOLUTION, width, height, offsetX).slice());
            startX -= worldWidth;
          }
        }
        this.hitDetectionImageData_ = (0,_render_canvas_hitdetect_js__WEBPACK_IMPORTED_MODULE_7__.createHitDetectionImageData)(size, transforms, this.renderedFeatures_, layer.getStyleFunction(), extent, resolution, rotation);
      }
      resolve((0,_render_canvas_hitdetect_js__WEBPACK_IMPORTED_MODULE_7__.hitDetect)(pixel, this.renderedFeatures_, this.hitDetectionImageData_));
    });
  }

  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
    if (!this.replayGroup_) {
      return undefined;
    }
    const resolution = frameState.viewState.resolution;
    const rotation = frameState.viewState.rotation;
    const layer = this.getLayer();

    /** @type {!Object<string, import("../Map.js").HitMatch<T>|true>} */
    const features = {};

    /**
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
     * @param {number} distanceSq The squared distance to the click position
     * @return {T|undefined} Callback result.
     */
    const featureCallback = function (feature, geometry, distanceSq) {
      const key = (0,_util_js__WEBPACK_IMPORTED_MODULE_8__.getUid)(feature);
      const match = features[key];
      if (!match) {
        if (distanceSq === 0) {
          features[key] = true;
          return callback(feature, layer, geometry);
        }
        matches.push(features[key] = {
          feature: feature,
          layer: layer,
          geometry: geometry,
          distanceSq: distanceSq,
          callback: callback
        });
      } else if (match !== true && distanceSq < match.distanceSq) {
        if (distanceSq === 0) {
          features[key] = true;
          matches.splice(matches.lastIndexOf(match), 1);
          return callback(feature, layer, geometry);
        }
        match.geometry = geometry;
        match.distanceSq = distanceSq;
      }
      return undefined;
    };
    let result;
    const executorGroups = [this.replayGroup_];
    if (this.declutterExecutorGroup) {
      executorGroups.push(this.declutterExecutorGroup);
    }
    executorGroups.some(executorGroup => {
      return result = executorGroup.forEachFeatureAtCoordinate(coordinate, resolution, rotation, hitTolerance, featureCallback, executorGroup === this.declutterExecutorGroup && frameState.declutterTree ? frameState.declutterTree.all().map(item => item.value) : null);
    });
    return result;
  }

  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   */
  handleFontsChanged() {
    const layer = this.getLayer();
    if (layer.getVisible() && this.replayGroup_) {
      layer.changed();
    }
  }

  /**
   * Handle changes in image style state.
   * @param {import("../../events/Event.js").default} event Image style change event.
   * @private
   */
  handleStyleImageChange_(event) {
    this.renderIfReadyAndVisible();
  }

  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(frameState) {
    const vectorLayer = this.getLayer();
    const vectorSource = vectorLayer.getSource();
    if (!vectorSource) {
      return false;
    }
    const animating = frameState.viewHints[_ViewHint_js__WEBPACK_IMPORTED_MODULE_3__["default"].ANIMATING];
    const interacting = frameState.viewHints[_ViewHint_js__WEBPACK_IMPORTED_MODULE_3__["default"].INTERACTING];
    const updateWhileAnimating = vectorLayer.getUpdateWhileAnimating();
    const updateWhileInteracting = vectorLayer.getUpdateWhileInteracting();
    if (this.ready && !updateWhileAnimating && animating || !updateWhileInteracting && interacting) {
      this.animatingOrInteracting_ = true;
      return true;
    }
    this.animatingOrInteracting_ = false;
    const frameStateExtent = frameState.extent;
    const viewState = frameState.viewState;
    const projection = viewState.projection;
    const resolution = viewState.resolution;
    const pixelRatio = frameState.pixelRatio;
    const vectorLayerRevision = vectorLayer.getRevision();
    const vectorLayerRenderBuffer = vectorLayer.getRenderBuffer();
    let vectorLayerRenderOrder = vectorLayer.getRenderOrder();
    if (vectorLayerRenderOrder === undefined) {
      vectorLayerRenderOrder = _vector_js__WEBPACK_IMPORTED_MODULE_9__.defaultOrder;
    }
    const center = viewState.center.slice();
    const extent = (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.buffer)(frameStateExtent, vectorLayerRenderBuffer * resolution);
    const renderedExtent = extent.slice();
    const loadExtents = [extent.slice()];
    const projectionExtent = projection.getExtent();
    if (vectorSource.getWrapX() && projection.canWrapX() && !(0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.containsExtent)(projectionExtent, frameState.extent)) {
      // For the replay group, we need an extent that intersects the real world
      // (-180° to +180°). To support geometries in a coordinate range from -540°
      // to +540°, we add at least 1 world width on each side of the projection
      // extent. If the viewport is wider than the world, we need to add half of
      // the viewport width to make sure we cover the whole viewport.
      const worldWidth = (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.getWidth)(projectionExtent);
      const gutter = Math.max((0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.getWidth)(extent) / 2, worldWidth);
      extent[0] = projectionExtent[0] - gutter;
      extent[2] = projectionExtent[2] + gutter;
      (0,_coordinate_js__WEBPACK_IMPORTED_MODULE_10__.wrapX)(center, projection);
      const loadExtent = (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.wrapX)(loadExtents[0], projection);
      // If the extent crosses the date line, we load data for both edges of the worlds
      if (loadExtent[0] < projectionExtent[0] && loadExtent[2] < projectionExtent[2]) {
        loadExtents.push([loadExtent[0] + worldWidth, loadExtent[1], loadExtent[2] + worldWidth, loadExtent[3]]);
      } else if (loadExtent[0] > projectionExtent[0] && loadExtent[2] > projectionExtent[2]) {
        loadExtents.push([loadExtent[0] - worldWidth, loadExtent[1], loadExtent[2] - worldWidth, loadExtent[3]]);
      }
    }
    if (this.ready && this.renderedResolution_ == resolution && this.renderedRevision_ == vectorLayerRevision && this.renderedRenderOrder_ == vectorLayerRenderOrder && (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.containsExtent)(this.wrappedRenderedExtent_, extent)) {
      if (!(0,_array_js__WEBPACK_IMPORTED_MODULE_11__.equals)(this.renderedExtent_, renderedExtent)) {
        this.hitDetectionImageData_ = null;
        this.renderedExtent_ = renderedExtent;
      }
      this.renderedCenter_ = center;
      this.replayGroupChanged = false;
      return true;
    }
    this.replayGroup_ = null;
    const replayGroup = new _render_canvas_BuilderGroup_js__WEBPACK_IMPORTED_MODULE_12__["default"]((0,_vector_js__WEBPACK_IMPORTED_MODULE_9__.getTolerance)(resolution, pixelRatio), extent, resolution, pixelRatio);
    let declutterBuilderGroup;
    if (this.getLayer().getDeclutter()) {
      declutterBuilderGroup = new _render_canvas_BuilderGroup_js__WEBPACK_IMPORTED_MODULE_12__["default"]((0,_vector_js__WEBPACK_IMPORTED_MODULE_9__.getTolerance)(resolution, pixelRatio), extent, resolution, pixelRatio);
    }
    const userProjection = (0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.getUserProjection)();
    let userTransform;
    if (userProjection) {
      for (let i = 0, ii = loadExtents.length; i < ii; ++i) {
        const extent = loadExtents[i];
        const userExtent = (0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.toUserExtent)(extent, projection);
        vectorSource.loadFeatures(userExtent, (0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.toUserResolution)(resolution, projection), userProjection);
      }
      userTransform = (0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.getTransformFromProjections)(userProjection, projection);
    } else {
      for (let i = 0, ii = loadExtents.length; i < ii; ++i) {
        vectorSource.loadFeatures(loadExtents[i], resolution, projection);
      }
    }
    const squaredTolerance = (0,_vector_js__WEBPACK_IMPORTED_MODULE_9__.getSquaredTolerance)(resolution, pixelRatio);
    let ready = true;
    const render =
    /**
     * @param {import("../../Feature.js").default} feature Feature.
     */
    feature => {
      let styles;
      const styleFunction = feature.getStyleFunction() || vectorLayer.getStyleFunction();
      if (styleFunction) {
        styles = styleFunction(feature, resolution);
      }
      if (styles) {
        const dirty = this.renderFeature(feature, squaredTolerance, styles, replayGroup, userTransform, declutterBuilderGroup);
        ready = ready && !dirty;
      }
    };
    const userExtent = (0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.toUserExtent)(extent, projection);
    /** @type {Array<import("../../Feature.js").default>} */
    const features = vectorSource.getFeaturesInExtent(userExtent);
    if (vectorLayerRenderOrder) {
      features.sort(vectorLayerRenderOrder);
    }
    for (let i = 0, ii = features.length; i < ii; ++i) {
      render(features[i]);
    }
    this.renderedFeatures_ = features;
    this.ready = ready;
    const replayGroupInstructions = replayGroup.finish();
    const executorGroup = new _render_canvas_ExecutorGroup_js__WEBPACK_IMPORTED_MODULE_13__["default"](extent, resolution, pixelRatio, vectorSource.getOverlaps(), replayGroupInstructions, vectorLayer.getRenderBuffer());
    if (declutterBuilderGroup) {
      this.declutterExecutorGroup = new _render_canvas_ExecutorGroup_js__WEBPACK_IMPORTED_MODULE_13__["default"](extent, resolution, pixelRatio, vectorSource.getOverlaps(), declutterBuilderGroup.finish(), vectorLayer.getRenderBuffer());
    }
    this.renderedResolution_ = resolution;
    this.renderedRevision_ = vectorLayerRevision;
    this.renderedRenderOrder_ = vectorLayerRenderOrder;
    this.renderedExtent_ = renderedExtent;
    this.wrappedRenderedExtent_ = extent;
    this.renderedCenter_ = center;
    this.renderedProjection_ = projection;
    this.replayGroup_ = executorGroup;
    this.hitDetectionImageData_ = null;
    this.replayGroupChanged = true;
    return true;
  }

  /**
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {number} squaredTolerance Squared render tolerance.
   * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
   * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Builder group.
   * @param {import("../../proj.js").TransformFunction} [transform] Transform from user to view projection.
   * @param {import("../../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
   * @return {boolean} `true` if an image is loading.
   */
  renderFeature(feature, squaredTolerance, styles, builderGroup, transform, declutterBuilderGroup) {
    if (!styles) {
      return false;
    }
    let loading = false;
    if (Array.isArray(styles)) {
      for (let i = 0, ii = styles.length; i < ii; ++i) {
        loading = (0,_vector_js__WEBPACK_IMPORTED_MODULE_9__.renderFeature)(builderGroup, feature, styles[i], squaredTolerance, this.boundHandleStyleImageChange_, transform, declutterBuilderGroup) || loading;
      }
    } else {
      loading = (0,_vector_js__WEBPACK_IMPORTED_MODULE_9__.renderFeature)(builderGroup, feature, styles, squaredTolerance, this.boundHandleStyleImageChange_, transform, declutterBuilderGroup);
    }
    return loading;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasVectorLayerRenderer);

/***/ }),

/***/ 4382:
/*!********************************************!*\
  !*** ./node_modules/ol/renderer/vector.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultOrder": () => (/* binding */ defaultOrder),
/* harmony export */   "getSquaredTolerance": () => (/* binding */ getSquaredTolerance),
/* harmony export */   "getTolerance": () => (/* binding */ getTolerance),
/* harmony export */   "renderFeature": () => (/* binding */ renderFeature)
/* harmony export */ });
/* harmony import */ var _ImageState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ImageState.js */ 85227);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ 92204);
/**
 * @module ol/renderer/vector
 */



/**
 * Feature callback. The callback will be called with three arguments. The first
 * argument is one {@link module:ol/Feature~Feature feature} or {@link module:ol/render/Feature~RenderFeature render feature}
 * at the pixel, the second is the {@link module:ol/layer/Layer~Layer layer} of the feature and will be null for
 * unmanaged layers. The third is the {@link module:ol/geom/SimpleGeometry~SimpleGeometry} of the feature. For features
 * with a GeometryCollection geometry, it will be the first detected geometry from the collection.
 * @template T
 * @typedef {function(import("../Feature.js").FeatureLike, import("../layer/Layer.js").default<import("../source/Source").default>, import("../geom/SimpleGeometry.js").default): T} FeatureCallback
 */

/**
 * Tolerance for geometry simplification in device pixels.
 * @type {number}
 */
const SIMPLIFY_TOLERANCE = 0.5;

/**
 * @const
 * @type {Object<import("../geom/Geometry.js").Type,
 *                function(import("../render/canvas/BuilderGroup.js").default, import("../geom/Geometry.js").default,
 *                         import("../style/Style.js").default, Object): void>}
 */
const GEOMETRY_RENDERERS = {
  'Point': renderPointGeometry,
  'LineString': renderLineStringGeometry,
  'Polygon': renderPolygonGeometry,
  'MultiPoint': renderMultiPointGeometry,
  'MultiLineString': renderMultiLineStringGeometry,
  'MultiPolygon': renderMultiPolygonGeometry,
  'GeometryCollection': renderGeometryCollectionGeometry,
  'Circle': renderCircleGeometry
};

/**
 * @param {import("../Feature.js").FeatureLike} feature1 Feature 1.
 * @param {import("../Feature.js").FeatureLike} feature2 Feature 2.
 * @return {number} Order.
 */
function defaultOrder(feature1, feature2) {
  return parseInt((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getUid)(feature1), 10) - parseInt((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getUid)(feature2), 10);
}

/**
 * @param {number} resolution Resolution.
 * @param {number} pixelRatio Pixel ratio.
 * @return {number} Squared pixel tolerance.
 */
function getSquaredTolerance(resolution, pixelRatio) {
  const tolerance = getTolerance(resolution, pixelRatio);
  return tolerance * tolerance;
}

/**
 * @param {number} resolution Resolution.
 * @param {number} pixelRatio Pixel ratio.
 * @return {number} Pixel tolerance.
 */
function getTolerance(resolution, pixelRatio) {
  return SIMPLIFY_TOLERANCE * resolution / pixelRatio;
}

/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Builder group.
 * @param {import("../geom/Circle.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").default} feature Feature.
 * @param {import("../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
 */
function renderCircleGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const fillStyle = style.getFill();
  const strokeStyle = style.getStroke();
  if (fillStyle || strokeStyle) {
    const circleReplay = builderGroup.getBuilder(style.getZIndex(), 'Circle');
    circleReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    circleReplay.drawCircle(geometry, feature);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = (declutterBuilderGroup || builderGroup).getBuilder(style.getZIndex(), 'Text');
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature);
  }
}

/**
 * @param {import("../render/canvas/BuilderGroup.js").default} replayGroup Replay group.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {import("../style/Style.js").default} style Style.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {function(import("../events/Event.js").default): void} listener Listener function.
 * @param {import("../proj.js").TransformFunction} [transform] Transform from user to view projection.
 * @param {import("../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
 * @return {boolean} `true` if style is loading.
 */
function renderFeature(replayGroup, feature, style, squaredTolerance, listener, transform, declutterBuilderGroup) {
  let loading = false;
  const imageStyle = style.getImage();
  if (imageStyle) {
    const imageState = imageStyle.getImageState();
    if (imageState == _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].LOADED || imageState == _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR) {
      imageStyle.unlistenImageChange(listener);
    } else {
      if (imageState == _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].IDLE) {
        imageStyle.load();
      }
      imageStyle.listenImageChange(listener);
      loading = true;
    }
  }
  renderFeatureInternal(replayGroup, feature, style, squaredTolerance, transform, declutterBuilderGroup);
  return loading;
}

/**
 * @param {import("../render/canvas/BuilderGroup.js").default} replayGroup Replay group.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {import("../style/Style.js").default} style Style.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
 * @param {import("../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
 */
function renderFeatureInternal(replayGroup, feature, style, squaredTolerance, transform, declutterBuilderGroup) {
  const geometry = style.getGeometryFunction()(feature);
  if (!geometry) {
    return;
  }
  const simplifiedGeometry = geometry.simplifyTransformed(squaredTolerance, transform);
  const renderer = style.getRenderer();
  if (renderer) {
    renderGeometry(replayGroup, simplifiedGeometry, style, feature);
  } else {
    const geometryRenderer = GEOMETRY_RENDERERS[simplifiedGeometry.getType()];
    geometryRenderer(replayGroup, simplifiedGeometry, style, feature, declutterBuilderGroup);
  }
}

/**
 * @param {import("../render/canvas/BuilderGroup.js").default} replayGroup Replay group.
 * @param {import("../geom/Geometry.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 */
function renderGeometry(replayGroup, geometry, style, feature) {
  if (geometry.getType() == 'GeometryCollection') {
    const geometries = /** @type {import("../geom/GeometryCollection.js").default} */geometry.getGeometries();
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      renderGeometry(replayGroup, geometries[i], style, feature);
    }
    return;
  }
  const replay = replayGroup.getBuilder(style.getZIndex(), 'Default');
  replay.drawCustom( /** @type {import("../geom/SimpleGeometry.js").default} */geometry, feature, style.getRenderer(), style.getHitDetectionRenderer());
}

/**
 * @param {import("../render/canvas/BuilderGroup.js").default} replayGroup Replay group.
 * @param {import("../geom/GeometryCollection.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").default} feature Feature.
 * @param {import("../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
 */
function renderGeometryCollectionGeometry(replayGroup, geometry, style, feature, declutterBuilderGroup) {
  const geometries = geometry.getGeometriesArray();
  let i, ii;
  for (i = 0, ii = geometries.length; i < ii; ++i) {
    const geometryRenderer = GEOMETRY_RENDERERS[geometries[i].getType()];
    geometryRenderer(replayGroup, geometries[i], style, feature, declutterBuilderGroup);
  }
}

/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/LineString.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {import("../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
 */
function renderLineStringGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const strokeStyle = style.getStroke();
  if (strokeStyle) {
    const lineStringReplay = builderGroup.getBuilder(style.getZIndex(), 'LineString');
    lineStringReplay.setFillStrokeStyle(null, strokeStyle);
    lineStringReplay.drawLineString(geometry, feature);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = (declutterBuilderGroup || builderGroup).getBuilder(style.getZIndex(), 'Text');
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature);
  }
}

/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/MultiLineString.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {import("../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
 */
function renderMultiLineStringGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const strokeStyle = style.getStroke();
  if (strokeStyle) {
    const lineStringReplay = builderGroup.getBuilder(style.getZIndex(), 'LineString');
    lineStringReplay.setFillStrokeStyle(null, strokeStyle);
    lineStringReplay.drawMultiLineString(geometry, feature);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = (declutterBuilderGroup || builderGroup).getBuilder(style.getZIndex(), 'Text');
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature);
  }
}

/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/MultiPolygon.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").default} feature Feature.
 * @param {import("../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
 */
function renderMultiPolygonGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const fillStyle = style.getFill();
  const strokeStyle = style.getStroke();
  if (strokeStyle || fillStyle) {
    const polygonReplay = builderGroup.getBuilder(style.getZIndex(), 'Polygon');
    polygonReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    polygonReplay.drawMultiPolygon(geometry, feature);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = (declutterBuilderGroup || builderGroup).getBuilder(style.getZIndex(), 'Text');
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature);
  }
}

/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/Point.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {import("../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
 */
function renderPointGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const imageStyle = style.getImage();
  const textStyle = style.getText();
  /** @type {import("../render/canvas.js").DeclutterImageWithText} */
  let declutterImageWithText;
  if (imageStyle) {
    if (imageStyle.getImageState() != _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].LOADED) {
      return;
    }
    let imageBuilderGroup = builderGroup;
    if (declutterBuilderGroup) {
      const declutterMode = imageStyle.getDeclutterMode();
      if (declutterMode !== 'none') {
        imageBuilderGroup = declutterBuilderGroup;
        if (declutterMode === 'obstacle') {
          // draw in non-declutter group:
          const imageReplay = builderGroup.getBuilder(style.getZIndex(), 'Image');
          imageReplay.setImageStyle(imageStyle, declutterImageWithText);
          imageReplay.drawPoint(geometry, feature);
        } else if (textStyle && textStyle.getText()) {
          declutterImageWithText = {};
        }
      }
    }
    const imageReplay = imageBuilderGroup.getBuilder(style.getZIndex(), 'Image');
    imageReplay.setImageStyle(imageStyle, declutterImageWithText);
    imageReplay.drawPoint(geometry, feature);
  }
  if (textStyle && textStyle.getText()) {
    let textBuilderGroup = builderGroup;
    if (declutterBuilderGroup) {
      textBuilderGroup = declutterBuilderGroup;
    }
    const textReplay = textBuilderGroup.getBuilder(style.getZIndex(), 'Text');
    textReplay.setTextStyle(textStyle, declutterImageWithText);
    textReplay.drawText(geometry, feature);
  }
}

/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/MultiPoint.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {import("../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
 */
function renderMultiPointGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const imageStyle = style.getImage();
  const textStyle = style.getText();
  /** @type {import("../render/canvas.js").DeclutterImageWithText} */
  let declutterImageWithText;
  if (imageStyle) {
    if (imageStyle.getImageState() != _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].LOADED) {
      return;
    }
    let imageBuilderGroup = builderGroup;
    if (declutterBuilderGroup) {
      const declutterMode = imageStyle.getDeclutterMode();
      if (declutterMode !== 'none') {
        imageBuilderGroup = declutterBuilderGroup;
        if (declutterMode === 'obstacle') {
          // draw in non-declutter group:
          const imageReplay = builderGroup.getBuilder(style.getZIndex(), 'Image');
          imageReplay.setImageStyle(imageStyle, declutterImageWithText);
          imageReplay.drawMultiPoint(geometry, feature);
        } else if (textStyle && textStyle.getText()) {
          declutterImageWithText = {};
        }
      }
    }
    const imageReplay = imageBuilderGroup.getBuilder(style.getZIndex(), 'Image');
    imageReplay.setImageStyle(imageStyle, declutterImageWithText);
    imageReplay.drawMultiPoint(geometry, feature);
  }
  if (textStyle && textStyle.getText()) {
    let textBuilderGroup = builderGroup;
    if (declutterBuilderGroup) {
      textBuilderGroup = declutterBuilderGroup;
    }
    const textReplay = textBuilderGroup.getBuilder(style.getZIndex(), 'Text');
    textReplay.setTextStyle(textStyle, declutterImageWithText);
    textReplay.drawText(geometry, feature);
  }
}

/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/Polygon.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {import("../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
 */
function renderPolygonGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const fillStyle = style.getFill();
  const strokeStyle = style.getStroke();
  if (fillStyle || strokeStyle) {
    const polygonReplay = builderGroup.getBuilder(style.getZIndex(), 'Polygon');
    polygonReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    polygonReplay.drawPolygon(geometry, feature);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = (declutterBuilderGroup || builderGroup).getBuilder(style.getZIndex(), 'Text');
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature);
  }
}

/***/ }),

/***/ 33535:
/*!******************************************!*\
  !*** ./node_modules/ol/source/Vector.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorSourceEvent": () => (/* binding */ VectorSourceEvent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Collection.js */ 74051);
/* harmony import */ var _CollectionEventType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../CollectionEventType.js */ 15269);
/* harmony import */ var _events_Event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/Event.js */ 72733);
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../events/EventType.js */ 90322);
/* harmony import */ var _ObjectEventType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ObjectEventType.js */ 11613);
/* harmony import */ var _structs_RBush_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../structs/RBush.js */ 27079);
/* harmony import */ var _Source_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Source.js */ 78823);
/* harmony import */ var _VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VectorEventType.js */ 9526);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions.js */ 71134);
/* harmony import */ var _loadingstrategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loadingstrategy.js */ 81091);
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asserts.js */ 11703);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../extent.js */ 55407);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../array.js */ 84698);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util.js */ 92204);
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../obj.js */ 32234);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../events.js */ 75544);
/* harmony import */ var _featureloader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../featureloader.js */ 56262);
/**
 * @module ol/source/Vector
 */



















/**
 * A function that takes an {@link module:ol/extent~Extent} and a resolution as arguments, and
 * returns an array of {@link module:ol/extent~Extent} with the extents to load. Usually this
 * is one of the standard {@link module:ol/loadingstrategy} strategies.
 *
 * @typedef {function(import("../extent.js").Extent, number, import("../proj/Projection.js").default): Array<import("../extent.js").Extent>} LoadingStrategy
 * @api
 */

/**
 * @classdesc
 * Events emitted by {@link module:ol/source/Vector~VectorSource} instances are instances of this
 * type.
 * @template {import("../geom/Geometry.js").default} [Geometry=import("../geom/Geometry.js").default]
 */
class VectorSourceEvent extends _events_Event_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {string} type Type.
   * @param {import("../Feature.js").default<Geometry>} [feature] Feature.
   * @param {Array<import("../Feature.js").default<Geometry>>} [features] Features.
   */
  constructor(type, feature, features) {
    super(type);

    /**
     * The added or removed feature for the `ADDFEATURE` and `REMOVEFEATURE` events, `undefined` otherwise.
     * @type {import("../Feature.js").default<Geometry>|undefined}
     * @api
     */
    this.feature = feature;

    /**
     * The loaded features for the `FEATURESLOADED` event, `undefined` otherwise.
     * @type {Array<import("../Feature.js").default<Geometry>>|undefined}
     * @api
     */
    this.features = features;
  }
}

/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types, import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<import("./VectorEventType").VectorSourceEventTypes, VectorSourceEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
 *     import("./VectorEventType").VectorSourceEventTypes, Return>} VectorSourceOnSignature
 */

/**
 * @template {import("../geom/Geometry.js").default} [Geometry=import("../geom/Geometry.js").default]
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {Array<import("../Feature.js").default<Geometry>>|Collection<import("../Feature.js").default<Geometry>>} [features]
 * Features. If provided as {@link module:ol/Collection~Collection}, the features in the source
 * and the collection will stay in sync.
 * @property {import("../format/Feature.js").default} [format] The feature format used by the XHR
 * feature loader when `url` is set. Required if `url` is set, otherwise ignored.
 * @property {import("../featureloader.js").FeatureLoader} [loader]
 * The loader function used to load features, from a remote source for example.
 * If this is not set and `url` is set, the source will create and use an XHR
 * feature loader. The `'featuresloadend'` and `'featuresloaderror'` events
 * will only fire if the `success` and `failure` callbacks are used.
 *
 * Example:
 *
 * ```js
 * import Vector from 'ol/source/Vector.js';
 * import GeoJSON from 'ol/format/GeoJSON.js';
 * import {bbox} from 'ol/loadingstrategy.js';
 *
 * const vectorSource = new Vector({
 *   format: new GeoJSON(),
 *   loader: function(extent, resolution, projection, success, failure) {
 *      const proj = projection.getCode();
 *      const url = 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
 *          'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
 *          'outputFormat=application/json&srsname=' + proj + '&' +
 *          'bbox=' + extent.join(',') + ',' + proj;
 *      const xhr = new XMLHttpRequest();
 *      xhr.open('GET', url);
 *      const onError = function() {
 *        vectorSource.removeLoadedExtent(extent);
 *        failure();
 *      }
 *      xhr.onerror = onError;
 *      xhr.onload = function() {
 *        if (xhr.status == 200) {
 *          const features = vectorSource.getFormat().readFeatures(xhr.responseText);
 *          vectorSource.addFeatures(features);
 *          success(features);
 *        } else {
 *          onError();
 *        }
 *      }
 *      xhr.send();
 *    },
 *    strategy: bbox,
 *  });
 * ```
 * @property {boolean} [overlaps=true] This source may have overlapping geometries.
 * Setting this to `false` (e.g. for sources with polygons that represent administrative
 * boundaries or TopoJSON sources) allows the renderer to optimise fill and
 * stroke operations.
 * @property {LoadingStrategy} [strategy] The loading strategy to use.
 * By default an {@link module:ol/loadingstrategy.all}
 * strategy is used, a one-off strategy which loads all features at once.
 * @property {string|import("../featureloader.js").FeatureUrlFunction} [url]
 * Setting this option instructs the source to load features using an XHR loader
 * (see {@link module:ol/featureloader.xhr}). Use a `string` and an
 * {@link module:ol/loadingstrategy.all} for a one-off download of all features from
 * the given URL. Use a {@link module:ol/featureloader~FeatureUrlFunction} to generate the url with
 * other loading strategies.
 * Requires `format` to be set as well.
 * When default XHR feature loader is provided, the features will
 * be transformed from the data projection to the view projection
 * during parsing. If your remote data source does not advertise its projection
 * properly, this transformation will be incorrect. For some formats, the
 * default projection (usually EPSG:4326) can be overridden by setting the
 * dataProjection constructor option on the format.
 * Note that if a source contains non-feature data, such as a GeoJSON geometry
 * or a KML NetworkLink, these will be ignored. Use a custom loader to load these.
 * @property {boolean} [useSpatialIndex=true]
 * By default, an RTree is used as spatial index. When features are removed and
 * added frequently, and the total number of features is low, setting this to
 * `false` may improve performance.
 *
 * Note that
 * {@link module:ol/source/Vector~VectorSource#getFeaturesInExtent},
 * {@link module:ol/source/Vector~VectorSource#getClosestFeatureToCoordinate} and
 * {@link module:ol/source/Vector~VectorSource#getExtent} cannot be used when `useSpatialIndex` is
 * set to `false`, and {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent} will loop
 * through all features.
 *
 * When set to `false`, the features will be maintained in an
 * {@link module:ol/Collection~Collection}, which can be retrieved through
 * {@link module:ol/source/Vector~VectorSource#getFeaturesCollection}.
 * @property {boolean} [wrapX=true] Wrap the world horizontally. For vector editing across the
 * -180° and 180° meridians to work properly, this should be set to `false`. The
 * resulting geometry coordinates will then exceed the world bounds.
 */

/**
 * @classdesc
 * Provides a source of features for vector layers. Vector features provided
 * by this source are suitable for editing. See {@link module:ol/source/VectorTile~VectorTile} for
 * vector data that is optimized for rendering.
 *
 * @fires VectorSourceEvent
 * @api
 * @template {import("../geom/Geometry.js").default} [Geometry=import("../geom/Geometry.js").default]
 */
class VectorSource extends _Source_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param {Options<Geometry>} [options] Vector source options.
   */
  constructor(options) {
    options = options || {};
    super({
      attributions: options.attributions,
      interpolate: true,
      projection: undefined,
      state: 'ready',
      wrapX: options.wrapX !== undefined ? options.wrapX : true
    });

    /***
     * @type {VectorSourceOnSignature<import("../events").EventsKey>}
     */
    this.on;

    /***
     * @type {VectorSourceOnSignature<import("../events").EventsKey>}
     */
    this.once;

    /***
     * @type {VectorSourceOnSignature<void>}
     */
    this.un;

    /**
     * @private
     * @type {import("../featureloader.js").FeatureLoader}
     */
    this.loader_ = _functions_js__WEBPACK_IMPORTED_MODULE_2__.VOID;

    /**
     * @private
     * @type {import("../format/Feature.js").default|undefined}
     */
    this.format_ = options.format;

    /**
     * @private
     * @type {boolean}
     */
    this.overlaps_ = options.overlaps === undefined ? true : options.overlaps;

    /**
     * @private
     * @type {string|import("../featureloader.js").FeatureUrlFunction|undefined}
     */
    this.url_ = options.url;
    if (options.loader !== undefined) {
      this.loader_ = options.loader;
    } else if (this.url_ !== undefined) {
      (0,_asserts_js__WEBPACK_IMPORTED_MODULE_3__.assert)(this.format_, 7); // `format` must be set when `url` is set
      // create a XHR feature loader for "url" and "format"
      this.loader_ = (0,_featureloader_js__WEBPACK_IMPORTED_MODULE_4__.xhr)(this.url_, /** @type {import("../format/Feature.js").default} */this.format_);
    }

    /**
     * @private
     * @type {LoadingStrategy}
     */
    this.strategy_ = options.strategy !== undefined ? options.strategy : _loadingstrategy_js__WEBPACK_IMPORTED_MODULE_5__.all;
    const useSpatialIndex = options.useSpatialIndex !== undefined ? options.useSpatialIndex : true;

    /**
     * @private
     * @type {RBush<import("../Feature.js").default<Geometry>>}
     */
    this.featuresRtree_ = useSpatialIndex ? new _structs_RBush_js__WEBPACK_IMPORTED_MODULE_6__["default"]() : null;

    /**
     * @private
     * @type {RBush<{extent: import("../extent.js").Extent}>}
     */
    this.loadedExtentsRtree_ = new _structs_RBush_js__WEBPACK_IMPORTED_MODULE_6__["default"]();

    /**
     * @type {number}
     * @private
     */
    this.loadingExtentsCount_ = 0;

    /**
     * @private
     * @type {!Object<string, import("../Feature.js").default<Geometry>>}
     */
    this.nullGeometryFeatures_ = {};

    /**
     * A lookup of features by id (the return from feature.getId()).
     * @private
     * @type {!Object<string, import("../Feature.js").default<Geometry>>}
     */
    this.idIndex_ = {};

    /**
     * A lookup of features by uid (using getUid(feature)).
     * @private
     * @type {!Object<string, import("../Feature.js").default<Geometry>>}
     */
    this.uidIndex_ = {};

    /**
     * @private
     * @type {Object<string, Array<import("../events.js").EventsKey>>}
     */
    this.featureChangeKeys_ = {};

    /**
     * @private
     * @type {Collection<import("../Feature.js").default<Geometry>>|null}
     */
    this.featuresCollection_ = null;

    /** @type {Collection<import("../Feature.js").default<Geometry>>} */
    let collection;
    /** @type {Array<import("../Feature.js").default<Geometry>>} */
    let features;
    if (Array.isArray(options.features)) {
      features = options.features;
    } else if (options.features) {
      collection = options.features;
      features = collection.getArray();
    }
    if (!useSpatialIndex && collection === undefined) {
      collection = new _Collection_js__WEBPACK_IMPORTED_MODULE_7__["default"](features);
    }
    if (features !== undefined) {
      this.addFeaturesInternal(features);
    }
    if (collection !== undefined) {
      this.bindFeaturesCollection_(collection);
    }
  }

  /**
   * Add a single feature to the source.  If you want to add a batch of features
   * at once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}
   * instead. A feature will not be added to the source if feature with
   * the same id is already there. The reason for this behavior is to avoid
   * feature duplication when using bbox or tile loading strategies.
   * Note: this also applies if an {@link module:ol/Collection~Collection} is used for features,
   * meaning that if a feature with a duplicate id is added in the collection, it will
   * be removed from it right away.
   * @param {import("../Feature.js").default<Geometry>} feature Feature to add.
   * @api
   */
  addFeature(feature) {
    this.addFeatureInternal(feature);
    this.changed();
  }

  /**
   * Add a feature without firing a `change` event.
   * @param {import("../Feature.js").default<Geometry>} feature Feature.
   * @protected
   */
  addFeatureInternal(feature) {
    const featureKey = (0,_util_js__WEBPACK_IMPORTED_MODULE_8__.getUid)(feature);
    if (!this.addToIndex_(featureKey, feature)) {
      if (this.featuresCollection_) {
        this.featuresCollection_.remove(feature);
      }
      return;
    }
    this.setupChangeEvents_(featureKey, feature);
    const geometry = feature.getGeometry();
    if (geometry) {
      const extent = geometry.getExtent();
      if (this.featuresRtree_) {
        this.featuresRtree_.insert(extent, feature);
      }
    } else {
      this.nullGeometryFeatures_[featureKey] = feature;
    }
    this.dispatchEvent(new VectorSourceEvent(_VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__["default"].ADDFEATURE, feature));
  }

  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @private
   */
  setupChangeEvents_(featureKey, feature) {
    this.featureChangeKeys_[featureKey] = [(0,_events_js__WEBPACK_IMPORTED_MODULE_10__.listen)(feature, _events_EventType_js__WEBPACK_IMPORTED_MODULE_11__["default"].CHANGE, this.handleFeatureChange_, this), (0,_events_js__WEBPACK_IMPORTED_MODULE_10__.listen)(feature, _ObjectEventType_js__WEBPACK_IMPORTED_MODULE_12__["default"].PROPERTYCHANGE, this.handleFeatureChange_, this)];
  }

  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @return {boolean} The feature is "valid", in the sense that it is also a
   *     candidate for insertion into the Rtree.
   * @private
   */
  addToIndex_(featureKey, feature) {
    let valid = true;
    const id = feature.getId();
    if (id !== undefined) {
      if (!(id.toString() in this.idIndex_)) {
        this.idIndex_[id.toString()] = feature;
      } else {
        valid = false;
      }
    }
    if (valid) {
      (0,_asserts_js__WEBPACK_IMPORTED_MODULE_3__.assert)(!(featureKey in this.uidIndex_), 30); // The passed `feature` was already added to the source
      this.uidIndex_[featureKey] = feature;
    }
    return valid;
  }

  /**
   * Add a batch of features to the source.
   * @param {Array<import("../Feature.js").default<Geometry>>} features Features to add.
   * @api
   */
  addFeatures(features) {
    this.addFeaturesInternal(features);
    this.changed();
  }

  /**
   * Add features without firing a `change` event.
   * @param {Array<import("../Feature.js").default<Geometry>>} features Features.
   * @protected
   */
  addFeaturesInternal(features) {
    const extents = [];
    const newFeatures = [];
    const geometryFeatures = [];
    for (let i = 0, length = features.length; i < length; i++) {
      const feature = features[i];
      const featureKey = (0,_util_js__WEBPACK_IMPORTED_MODULE_8__.getUid)(feature);
      if (this.addToIndex_(featureKey, feature)) {
        newFeatures.push(feature);
      }
    }
    for (let i = 0, length = newFeatures.length; i < length; i++) {
      const feature = newFeatures[i];
      const featureKey = (0,_util_js__WEBPACK_IMPORTED_MODULE_8__.getUid)(feature);
      this.setupChangeEvents_(featureKey, feature);
      const geometry = feature.getGeometry();
      if (geometry) {
        const extent = geometry.getExtent();
        extents.push(extent);
        geometryFeatures.push(feature);
      } else {
        this.nullGeometryFeatures_[featureKey] = feature;
      }
    }
    if (this.featuresRtree_) {
      this.featuresRtree_.load(extents, geometryFeatures);
    }
    if (this.hasListener(_VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__["default"].ADDFEATURE)) {
      for (let i = 0, length = newFeatures.length; i < length; i++) {
        this.dispatchEvent(new VectorSourceEvent(_VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__["default"].ADDFEATURE, newFeatures[i]));
      }
    }
  }

  /**
   * @param {!Collection<import("../Feature.js").default<Geometry>>} collection Collection.
   * @private
   */
  bindFeaturesCollection_(collection) {
    let modifyingCollection = false;
    this.addEventListener(_VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__["default"].ADDFEATURE,
    /**
     * @param {VectorSourceEvent<Geometry>} evt The vector source event
     */
    function (evt) {
      if (!modifyingCollection) {
        modifyingCollection = true;
        collection.push(evt.feature);
        modifyingCollection = false;
      }
    });
    this.addEventListener(_VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__["default"].REMOVEFEATURE,
    /**
     * @param {VectorSourceEvent<Geometry>} evt The vector source event
     */
    function (evt) {
      if (!modifyingCollection) {
        modifyingCollection = true;
        collection.remove(evt.feature);
        modifyingCollection = false;
      }
    });
    collection.addEventListener(_CollectionEventType_js__WEBPACK_IMPORTED_MODULE_13__["default"].ADD,
    /**
     * @param {import("../Collection.js").CollectionEvent<import("../Feature.js").default<Geometry>>} evt The collection event
     */
    evt => {
      if (!modifyingCollection) {
        modifyingCollection = true;
        this.addFeature(evt.element);
        modifyingCollection = false;
      }
    });
    collection.addEventListener(_CollectionEventType_js__WEBPACK_IMPORTED_MODULE_13__["default"].REMOVE,
    /**
     * @param {import("../Collection.js").CollectionEvent<import("../Feature.js").default<Geometry>>} evt The collection event
     */
    evt => {
      if (!modifyingCollection) {
        modifyingCollection = true;
        this.removeFeature(evt.element);
        modifyingCollection = false;
      }
    });
    this.featuresCollection_ = collection;
  }

  /**
   * Remove all features from the source.
   * @param {boolean} [fast] Skip dispatching of {@link module:ol/source/Vector.VectorSourceEvent#event:removefeature} events.
   * @api
   */
  clear(fast) {
    if (fast) {
      for (const featureId in this.featureChangeKeys_) {
        const keys = this.featureChangeKeys_[featureId];
        keys.forEach(_events_js__WEBPACK_IMPORTED_MODULE_10__.unlistenByKey);
      }
      if (!this.featuresCollection_) {
        this.featureChangeKeys_ = {};
        this.idIndex_ = {};
        this.uidIndex_ = {};
      }
    } else {
      if (this.featuresRtree_) {
        const removeAndIgnoreReturn = feature => {
          this.removeFeatureInternal(feature);
        };
        this.featuresRtree_.forEach(removeAndIgnoreReturn);
        for (const id in this.nullGeometryFeatures_) {
          this.removeFeatureInternal(this.nullGeometryFeatures_[id]);
        }
      }
    }
    if (this.featuresCollection_) {
      this.featuresCollection_.clear();
    }
    if (this.featuresRtree_) {
      this.featuresRtree_.clear();
    }
    this.nullGeometryFeatures_ = {};
    const clearEvent = new VectorSourceEvent(_VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__["default"].CLEAR);
    this.dispatchEvent(clearEvent);
    this.changed();
  }

  /**
   * Iterate through all features on the source, calling the provided callback
   * with each one.  If the callback returns any "truthy" value, iteration will
   * stop and the function will return the same value.
   * Note: this function only iterate through the feature that have a defined geometry.
   *
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     on the source.  Return a truthy value to stop iteration.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeature(callback) {
    if (this.featuresRtree_) {
      return this.featuresRtree_.forEach(callback);
    }
    if (this.featuresCollection_) {
      this.featuresCollection_.forEach(callback);
    }
  }

  /**
   * Iterate through all features whose geometries contain the provided
   * coordinate, calling the callback with each feature.  If the callback returns
   * a "truthy" value, iteration will stop and the function will return the same
   * value.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     whose goemetry contains the provided coordinate.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   */
  forEachFeatureAtCoordinateDirect(coordinate, callback) {
    const extent = [coordinate[0], coordinate[1], coordinate[0], coordinate[1]];
    return this.forEachFeatureInExtent(extent, function (feature) {
      const geometry = feature.getGeometry();
      if (geometry.intersectsCoordinate(coordinate)) {
        return callback(feature);
      }
      return undefined;
    });
  }

  /**
   * Iterate through all features whose bounding box intersects the provided
   * extent (note that the feature's geometry may not intersect the extent),
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you are interested in features whose geometry intersects an extent, call
   * the {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.
   *
   * When `useSpatialIndex` is set to false, this method will loop through all
   * features, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     whose bounding box intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeatureInExtent(extent, callback) {
    if (this.featuresRtree_) {
      return this.featuresRtree_.forEachInExtent(extent, callback);
    }
    if (this.featuresCollection_) {
      this.featuresCollection_.forEach(callback);
    }
  }

  /**
   * Iterate through all features whose geometry intersects the provided extent,
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you only want to test for bounding box intersection, call the
   * {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     whose geometry intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeatureIntersectingExtent(extent, callback) {
    return this.forEachFeatureInExtent(extent,
    /**
     * @param {import("../Feature.js").default<Geometry>} feature Feature.
     * @return {T|undefined} The return value from the last call to the callback.
     */
    function (feature) {
      const geometry = feature.getGeometry();
      if (geometry.intersectsExtent(extent)) {
        const result = callback(feature);
        if (result) {
          return result;
        }
      }
    });
  }

  /**
   * Get the features collection associated with this source. Will be `null`
   * unless the source was configured with `useSpatialIndex` set to `false`, or
   * with an {@link module:ol/Collection~Collection} as `features`.
   * @return {Collection<import("../Feature.js").default<Geometry>>|null} The collection of features.
   * @api
   */
  getFeaturesCollection() {
    return this.featuresCollection_;
  }

  /**
   * Get a snapshot of the features currently on the source in random order. The returned array
   * is a copy, the features are references to the features in the source.
   * @return {Array<import("../Feature.js").default<Geometry>>} Features.
   * @api
   */
  getFeatures() {
    let features;
    if (this.featuresCollection_) {
      features = this.featuresCollection_.getArray().slice(0);
    } else if (this.featuresRtree_) {
      features = this.featuresRtree_.getAll();
      if (!(0,_obj_js__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(this.nullGeometryFeatures_)) {
        (0,_array_js__WEBPACK_IMPORTED_MODULE_15__.extend)(features, Object.values(this.nullGeometryFeatures_));
      }
    }
    return (/** @type {Array<import("../Feature.js").default<Geometry>>} */
      features
    );
  }

  /**
   * Get all features whose geometry intersects the provided coordinate.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {Array<import("../Feature.js").default<Geometry>>} Features.
   * @api
   */
  getFeaturesAtCoordinate(coordinate) {
    const features = [];
    this.forEachFeatureAtCoordinateDirect(coordinate, function (feature) {
      features.push(feature);
    });
    return features;
  }

  /**
   * Get all features whose bounding box intersects the provided extent.  Note that this returns an array of
   * all features intersecting the given extent in random order (so it may include
   * features whose geometries do not intersect the extent).
   *
   * When `useSpatialIndex` is set to false, this method will return all
   * features.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {import("../proj/Projection.js").default} [projection] Include features
   * where `extent` exceeds the x-axis bounds of `projection` and wraps around the world.
   * @return {Array<import("../Feature.js").default<Geometry>>} Features.
   * @api
   */
  getFeaturesInExtent(extent, projection) {
    if (this.featuresRtree_) {
      const multiWorld = projection && projection.canWrapX() && this.getWrapX();
      if (!multiWorld) {
        return this.featuresRtree_.getInExtent(extent);
      }
      const extents = (0,_extent_js__WEBPACK_IMPORTED_MODULE_16__.wrapAndSliceX)(extent, projection);
      return [].concat(...extents.map(anExtent => this.featuresRtree_.getInExtent(anExtent)));
    }
    if (this.featuresCollection_) {
      return this.featuresCollection_.getArray().slice(0);
    }
    return [];
  }

  /**
   * Get the closest feature to the provided coordinate.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(import("../Feature.js").default<Geometry>):boolean} [filter] Feature filter function.
   *     The filter function will receive one argument, the {@link module:ol/Feature~Feature feature}
   *     and it should return a boolean value. By default, no filtering is made.
   * @return {import("../Feature.js").default<Geometry>} Closest feature.
   * @api
   */
  getClosestFeatureToCoordinate(coordinate, filter) {
    // Find the closest feature using branch and bound.  We start searching an
    // infinite extent, and find the distance from the first feature found.  This
    // becomes the closest feature.  We then compute a smaller extent which any
    // closer feature must intersect.  We continue searching with this smaller
    // extent, trying to find a closer feature.  Every time we find a closer
    // feature, we update the extent being searched so that any even closer
    // feature must intersect it.  We continue until we run out of features.
    const x = coordinate[0];
    const y = coordinate[1];
    let closestFeature = null;
    const closestPoint = [NaN, NaN];
    let minSquaredDistance = Infinity;
    const extent = [-Infinity, -Infinity, Infinity, Infinity];
    filter = filter ? filter : _functions_js__WEBPACK_IMPORTED_MODULE_2__.TRUE;
    this.featuresRtree_.forEachInExtent(extent,
    /**
     * @param {import("../Feature.js").default<Geometry>} feature Feature.
     */
    function (feature) {
      if (filter(feature)) {
        const geometry = feature.getGeometry();
        const previousMinSquaredDistance = minSquaredDistance;
        minSquaredDistance = geometry.closestPointXY(x, y, closestPoint, minSquaredDistance);
        if (minSquaredDistance < previousMinSquaredDistance) {
          closestFeature = feature;
          // This is sneaky.  Reduce the extent that it is currently being
          // searched while the R-Tree traversal using this same extent object
          // is still in progress.  This is safe because the new extent is
          // strictly contained by the old extent.
          const minDistance = Math.sqrt(minSquaredDistance);
          extent[0] = x - minDistance;
          extent[1] = y - minDistance;
          extent[2] = x + minDistance;
          extent[3] = y + minDistance;
        }
      }
    });
    return closestFeature;
  }

  /**
   * Get the extent of the features currently in the source.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../extent.js").Extent} [extent] Destination extent. If provided, no new extent
   *     will be created. Instead, that extent's coordinates will be overwritten.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent(extent) {
    return this.featuresRtree_.getExtent(extent);
  }

  /**
   * Get a feature by its identifier (the value returned by feature.getId()).
   * Note that the index treats string and numeric identifiers as the same.  So
   * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
   *
   * @param {string|number} id Feature identifier.
   * @return {import("../Feature.js").default<Geometry>|null} The feature (or `null` if not found).
   * @api
   */
  getFeatureById(id) {
    const feature = this.idIndex_[id.toString()];
    return feature !== undefined ? feature : null;
  }

  /**
   * Get a feature by its internal unique identifier (using `getUid`).
   *
   * @param {string} uid Feature identifier.
   * @return {import("../Feature.js").default<Geometry>|null} The feature (or `null` if not found).
   */
  getFeatureByUid(uid) {
    const feature = this.uidIndex_[uid];
    return feature !== undefined ? feature : null;
  }

  /**
   * Get the format associated with this source.
   *
   * @return {import("../format/Feature.js").default|undefined} The feature format.
   * @api
   */
  getFormat() {
    return this.format_;
  }

  /**
   * @return {boolean} The source can have overlapping geometries.
   */
  getOverlaps() {
    return this.overlaps_;
  }

  /**
   * Get the url associated with this source.
   *
   * @return {string|import("../featureloader.js").FeatureUrlFunction|undefined} The url.
   * @api
   */
  getUrl() {
    return this.url_;
  }

  /**
   * @param {Event} event Event.
   * @private
   */
  handleFeatureChange_(event) {
    const feature = /** @type {import("../Feature.js").default<Geometry>} */
    event.target;
    const featureKey = (0,_util_js__WEBPACK_IMPORTED_MODULE_8__.getUid)(feature);
    const geometry = feature.getGeometry();
    if (!geometry) {
      if (!(featureKey in this.nullGeometryFeatures_)) {
        if (this.featuresRtree_) {
          this.featuresRtree_.remove(feature);
        }
        this.nullGeometryFeatures_[featureKey] = feature;
      }
    } else {
      const extent = geometry.getExtent();
      if (featureKey in this.nullGeometryFeatures_) {
        delete this.nullGeometryFeatures_[featureKey];
        if (this.featuresRtree_) {
          this.featuresRtree_.insert(extent, feature);
        }
      } else {
        if (this.featuresRtree_) {
          this.featuresRtree_.update(extent, feature);
        }
      }
    }
    const id = feature.getId();
    if (id !== undefined) {
      const sid = id.toString();
      if (this.idIndex_[sid] !== feature) {
        this.removeFromIdIndex_(feature);
        this.idIndex_[sid] = feature;
      }
    } else {
      this.removeFromIdIndex_(feature);
      this.uidIndex_[featureKey] = feature;
    }
    this.changed();
    this.dispatchEvent(new VectorSourceEvent(_VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__["default"].CHANGEFEATURE, feature));
  }

  /**
   * Returns true if the feature is contained within the source.
   * @param {import("../Feature.js").default<Geometry>} feature Feature.
   * @return {boolean} Has feature.
   * @api
   */
  hasFeature(feature) {
    const id = feature.getId();
    if (id !== undefined) {
      return id in this.idIndex_;
    }
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_8__.getUid)(feature) in this.uidIndex_;
  }

  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    if (this.featuresRtree_) {
      return this.featuresRtree_.isEmpty() && (0,_obj_js__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(this.nullGeometryFeatures_);
    }
    if (this.featuresCollection_) {
      return this.featuresCollection_.getLength() === 0;
    }
    return true;
  }

  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  loadFeatures(extent, resolution, projection) {
    const loadedExtentsRtree = this.loadedExtentsRtree_;
    const extentsToLoad = this.strategy_(extent, resolution, projection);
    for (let i = 0, ii = extentsToLoad.length; i < ii; ++i) {
      const extentToLoad = extentsToLoad[i];
      const alreadyLoaded = loadedExtentsRtree.forEachInExtent(extentToLoad,
      /**
       * @param {{extent: import("../extent.js").Extent}} object Object.
       * @return {boolean} Contains.
       */
      function (object) {
        return (0,_extent_js__WEBPACK_IMPORTED_MODULE_16__.containsExtent)(object.extent, extentToLoad);
      });
      if (!alreadyLoaded) {
        ++this.loadingExtentsCount_;
        this.dispatchEvent(new VectorSourceEvent(_VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__["default"].FEATURESLOADSTART));
        this.loader_.call(this, extentToLoad, resolution, projection, features => {
          --this.loadingExtentsCount_;
          this.dispatchEvent(new VectorSourceEvent(_VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__["default"].FEATURESLOADEND, undefined, features));
        }, () => {
          --this.loadingExtentsCount_;
          this.dispatchEvent(new VectorSourceEvent(_VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__["default"].FEATURESLOADERROR));
        });
        loadedExtentsRtree.insert(extentToLoad, {
          extent: extentToLoad.slice()
        });
      }
    }
    this.loading = this.loader_.length < 4 ? false : this.loadingExtentsCount_ > 0;
  }
  refresh() {
    this.clear(true);
    this.loadedExtentsRtree_.clear();
    super.refresh();
  }

  /**
   * Remove an extent from the list of loaded extents.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */
  removeLoadedExtent(extent) {
    const loadedExtentsRtree = this.loadedExtentsRtree_;
    let obj;
    loadedExtentsRtree.forEachInExtent(extent, function (object) {
      if ((0,_extent_js__WEBPACK_IMPORTED_MODULE_16__.equals)(object.extent, extent)) {
        obj = object;
        return true;
      }
    });
    if (obj) {
      loadedExtentsRtree.remove(obj);
    }
  }

  /**
   * Remove a single feature from the source.  If you want to remove all features
   * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
   * instead.
   * @param {import("../Feature.js").default<Geometry>} feature Feature to remove.
   * @api
   */
  removeFeature(feature) {
    if (!feature) {
      return;
    }
    const featureKey = (0,_util_js__WEBPACK_IMPORTED_MODULE_8__.getUid)(feature);
    if (featureKey in this.nullGeometryFeatures_) {
      delete this.nullGeometryFeatures_[featureKey];
    } else {
      if (this.featuresRtree_) {
        this.featuresRtree_.remove(feature);
      }
    }
    const result = this.removeFeatureInternal(feature);
    if (result) {
      this.changed();
    }
  }

  /**
   * Remove feature without firing a `change` event.
   * @param {import("../Feature.js").default<Geometry>} feature Feature.
   * @return {import("../Feature.js").default<Geometry>|undefined} The removed feature
   *     (or undefined if the feature was not found).
   * @protected
   */
  removeFeatureInternal(feature) {
    const featureKey = (0,_util_js__WEBPACK_IMPORTED_MODULE_8__.getUid)(feature);
    const featureChangeKeys = this.featureChangeKeys_[featureKey];
    if (!featureChangeKeys) {
      return;
    }
    featureChangeKeys.forEach(_events_js__WEBPACK_IMPORTED_MODULE_10__.unlistenByKey);
    delete this.featureChangeKeys_[featureKey];
    const id = feature.getId();
    if (id !== undefined) {
      delete this.idIndex_[id.toString()];
    }
    delete this.uidIndex_[featureKey];
    this.dispatchEvent(new VectorSourceEvent(_VectorEventType_js__WEBPACK_IMPORTED_MODULE_9__["default"].REMOVEFEATURE, feature));
    return feature;
  }

  /**
   * Remove a feature from the id index.  Called internally when the feature id
   * may have changed.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @return {boolean} Removed the feature from the index.
   * @private
   */
  removeFromIdIndex_(feature) {
    let removed = false;
    for (const id in this.idIndex_) {
      if (this.idIndex_[id] === feature) {
        delete this.idIndex_[id];
        removed = true;
        break;
      }
    }
    return removed;
  }

  /**
   * Set the new loader of the source. The next render cycle will use the
   * new loader.
   * @param {import("../featureloader.js").FeatureLoader} loader The loader to set.
   * @api
   */
  setLoader(loader) {
    this.loader_ = loader;
  }

  /**
   * Points the source to a new url. The next render cycle will use the new url.
   * @param {string|import("../featureloader.js").FeatureUrlFunction} url Url.
   * @api
   */
  setUrl(url) {
    (0,_asserts_js__WEBPACK_IMPORTED_MODULE_3__.assert)(this.format_, 7); // `format` must be set when `url` is set
    this.url_ = url;
    this.setLoader((0,_featureloader_js__WEBPACK_IMPORTED_MODULE_4__.xhr)(url, this.format_));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VectorSource);

/***/ }),

/***/ 9526:
/*!***************************************************!*\
  !*** ./node_modules/ol/source/VectorEventType.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/source/VectorEventType
 */

/**
 * @enum {string}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * Triggered when a feature is added to the source.
   * @event module:ol/source/Vector.VectorSourceEvent#addfeature
   * @api
   */
  ADDFEATURE: 'addfeature',
  /**
   * Triggered when a feature is updated.
   * @event module:ol/source/Vector.VectorSourceEvent#changefeature
   * @api
   */
  CHANGEFEATURE: 'changefeature',
  /**
   * Triggered when the clear method is called on the source.
   * @event module:ol/source/Vector.VectorSourceEvent#clear
   * @api
   */
  CLEAR: 'clear',
  /**
   * Triggered when a feature is removed from the source.
   * See {@link module:ol/source/Vector~VectorSource#clear source.clear()} for exceptions.
   * @event module:ol/source/Vector.VectorSourceEvent#removefeature
   * @api
   */
  REMOVEFEATURE: 'removefeature',
  /**
   * Triggered when features starts loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloadstart
   * @api
   */
  FEATURESLOADSTART: 'featuresloadstart',
  /**
   * Triggered when features finishes loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloadend
   * @api
   */
  FEATURESLOADEND: 'featuresloadend',
  /**
   * Triggered if feature loading results in an error.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloaderror
   * @api
   */
  FEATURESLOADERROR: 'featuresloaderror'
});

/**
 * @typedef {'addfeature'|'changefeature'|'clear'|'removefeature'|'featuresloadstart'|'featuresloadend'|'featuresloaderror'} VectorSourceEventTypes
 */

/***/ }),

/***/ 27079:
/*!******************************************!*\
  !*** ./node_modules/ol/structs/RBush.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var rbush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rbush */ 43155);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extent.js */ 55407);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ 92204);
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../obj.js */ 32234);
/**
 * @module ol/structs/RBush
 */





/**
 * @typedef {Object} Entry
 * @property {number} minX MinX.
 * @property {number} minY MinY.
 * @property {number} maxX MaxX.
 * @property {number} maxY MaxY.
 * @property {Object} [value] Value.
 */

/**
 * @classdesc
 * Wrapper around the RBush by Vladimir Agafonkin.
 * See https://github.com/mourner/rbush.
 *
 * @template T
 */
class RBush {
  /**
   * @param {number} [maxEntries] Max entries.
   */
  constructor(maxEntries) {
    /**
     * @private
     */
    this.rbush_ = new rbush__WEBPACK_IMPORTED_MODULE_0__(maxEntries);

    /**
     * A mapping between the objects added to this rbush wrapper
     * and the objects that are actually added to the internal rbush.
     * @private
     * @type {Object<string, Entry>}
     */
    this.items_ = {};
  }

  /**
   * Insert a value into the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  insert(extent, value) {
    /** @type {Entry} */
    const item = {
      minX: extent[0],
      minY: extent[1],
      maxX: extent[2],
      maxY: extent[3],
      value: value
    };
    this.rbush_.insert(item);
    this.items_[(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.getUid)(value)] = item;
  }

  /**
   * Bulk-insert values into the RBush.
   * @param {Array<import("../extent.js").Extent>} extents Extents.
   * @param {Array<T>} values Values.
   */
  load(extents, values) {
    const items = new Array(values.length);
    for (let i = 0, l = values.length; i < l; i++) {
      const extent = extents[i];
      const value = values[i];

      /** @type {Entry} */
      const item = {
        minX: extent[0],
        minY: extent[1],
        maxX: extent[2],
        maxY: extent[3],
        value: value
      };
      items[i] = item;
      this.items_[(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.getUid)(value)] = item;
    }
    this.rbush_.load(items);
  }

  /**
   * Remove a value from the RBush.
   * @param {T} value Value.
   * @return {boolean} Removed.
   */
  remove(value) {
    const uid = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.getUid)(value);

    // get the object in which the value was wrapped when adding to the
    // internal rbush. then use that object to do the removal.
    const item = this.items_[uid];
    delete this.items_[uid];
    return this.rbush_.remove(item) !== null;
  }

  /**
   * Update the extent of a value in the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  update(extent, value) {
    const item = this.items_[(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.getUid)(value)];
    const bbox = [item.minX, item.minY, item.maxX, item.maxY];
    if (!(0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.equals)(bbox, extent)) {
      this.remove(value);
      this.insert(extent, value);
    }
  }

  /**
   * Return all values in the RBush.
   * @return {Array<T>} All.
   */
  getAll() {
    const items = this.rbush_.all();
    return items.map(function (item) {
      return item.value;
    });
  }

  /**
   * Return all values in the given extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<T>} All in extent.
   */
  getInExtent(extent) {
    /** @type {Entry} */
    const bbox = {
      minX: extent[0],
      minY: extent[1],
      maxX: extent[2],
      maxY: extent[3]
    };
    const items = this.rbush_.search(bbox);
    return items.map(function (item) {
      return item.value;
    });
  }

  /**
   * Calls a callback function with each value in the tree.
   * If the callback returns a truthy value, this value is returned without
   * checking the rest of the tree.
   * @param {function(T): *} callback Callback.
   * @return {*} Callback return value.
   */
  forEach(callback) {
    return this.forEach_(this.getAll(), callback);
  }

  /**
   * Calls a callback function with each value in the provided extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(T): *} callback Callback.
   * @return {*} Callback return value.
   */
  forEachInExtent(extent, callback) {
    return this.forEach_(this.getInExtent(extent), callback);
  }

  /**
   * @param {Array<T>} values Values.
   * @param {function(T): *} callback Callback.
   * @private
   * @return {*} Callback return value.
   */
  forEach_(values, callback) {
    let result;
    for (let i = 0, l = values.length; i < l; i++) {
      result = callback(values[i]);
      if (result) {
        return result;
      }
    }
    return result;
  }

  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return (0,_obj_js__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(this.items_);
  }

  /**
   * Remove all values from the RBush.
   */
  clear() {
    this.rbush_.clear();
    this.items_ = {};
  }

  /**
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} Extent.
   */
  getExtent(extent) {
    const data = this.rbush_.toJSON();
    return (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.createOrUpdate)(data.minX, data.minY, data.maxX, data.maxY, extent);
  }

  /**
   * @param {RBush} rbush R-Tree.
   */
  concat(rbush) {
    this.rbush_.load(rbush.rbush_.all());
    for (const i in rbush.items_) {
      this.items_[i] = rbush.items_[i];
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RBush);

/***/ }),

/***/ 17840:
/*!*****************************************!*\
  !*** ./node_modules/ol/style/Circle.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegularShape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegularShape.js */ 32053);
/**
 * @module ol/style/Circle
 */



/**
 * @typedef {Object} Options
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {number} radius Circle radius.
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {Array<number>} [displacement=[0,0]] displacement
 * @property {number|import("../size.js").Size} [scale=1] Scale. A two dimensional scale will produce an ellipse.
 * Unless two dimensional scaling is required a better result may be obtained with an appropriate setting for `radius`.
 * @property {number} [rotation=0] Rotation in radians
 * (positive rotation clockwise, meaningful only when used in conjunction with a two dimensional scale).
 * @property {boolean} [rotateWithView=false] Whether to rotate the shape with the view
 * (meaningful only when used in conjunction with a two dimensional scale).
 * @property {"declutter"|"obstacle"|"none"|undefined} [declutterMode] Declutter mode
 */

/**
 * @classdesc
 * Set circle style for vector features.
 * @api
 */
class CircleStyle extends _RegularShape_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {
      radius: 5
    };
    super({
      points: Infinity,
      fill: options.fill,
      radius: options.radius,
      stroke: options.stroke,
      scale: options.scale !== undefined ? options.scale : 1,
      rotation: options.rotation !== undefined ? options.rotation : 0,
      rotateWithView: options.rotateWithView !== undefined ? options.rotateWithView : false,
      displacement: options.displacement !== undefined ? options.displacement : [0, 0],
      declutterMode: options.declutterMode
    });
  }

  /**
   * Clones the style.
   * @return {CircleStyle} The cloned style.
   * @api
   */
  clone() {
    const scale = this.getScale();
    const style = new CircleStyle({
      fill: this.getFill() ? this.getFill().clone() : undefined,
      stroke: this.getStroke() ? this.getStroke().clone() : undefined,
      radius: this.getRadius(),
      scale: Array.isArray(scale) ? scale.slice() : scale,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    style.setOpacity(this.getOpacity());
    return style;
  }

  /**
   * Set the circle radius.
   *
   * @param {number} radius Circle radius.
   * @api
   */
  setRadius(radius) {
    this.radius_ = radius;
    this.render();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleStyle);

/***/ }),

/***/ 95567:
/*!***************************************!*\
  !*** ./node_modules/ol/style/Fill.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/style/Fill
 */

/**
 * @typedef {Object} Options
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike|null} [color=null] A color, gradient or pattern.
 * See {@link module:ol/color~Color} and {@link module:ol/colorlike~ColorLike} for possible formats.
 * Default null; if null, the Canvas/renderer default black will be used.
 */

/**
 * @classdesc
 * Set fill style for vector features.
 * @api
 */
class Fill {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options || {};

    /**
     * @private
     * @type {import("../color.js").Color|import("../colorlike.js").ColorLike|null}
     */
    this.color_ = options.color !== undefined ? options.color : null;
  }

  /**
   * Clones the style. The color is not cloned if it is an {@link module:ol/colorlike~ColorLike}.
   * @return {Fill} The cloned style.
   * @api
   */
  clone() {
    const color = this.getColor();
    return new Fill({
      color: Array.isArray(color) ? color.slice() : color || undefined
    });
  }

  /**
   * Get the fill color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike|null} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }

  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike|null} color Color.
   * @api
   */
  setColor(color) {
    this.color_ = color;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fill);

/***/ }),

/***/ 57920:
/*!***************************************!*\
  !*** ./node_modules/ol/style/Icon.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events/EventType.js */ 90322);
/* harmony import */ var _ImageState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImageState.js */ 85227);
/* harmony import */ var _Image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.js */ 55192);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color.js */ 56224);
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asserts.js */ 11703);
/* harmony import */ var _IconImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IconImage.js */ 95158);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.js */ 92204);
/**
 * @module ol/style/Icon
 */








/**
 * @typedef {'fraction' | 'pixels'} IconAnchorUnits
 * Anchor unit can be either a fraction of the icon size or in pixels.
 */

/**
 * @typedef {'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'} IconOrigin
 * Icon origin. One of 'bottom-left', 'bottom-right', 'top-left', 'top-right'.
 */

/**
 * @typedef {Object} Options
 * @property {Array<number>} [anchor=[0.5, 0.5]] Anchor. Default value is the icon center.
 * @property {IconOrigin} [anchorOrigin='top-left'] Origin of the anchor: `bottom-left`, `bottom-right`,
 * `top-left` or `top-right`.
 * @property {IconAnchorUnits} [anchorXUnits='fraction'] Units in which the anchor x value is
 * specified. A value of `'fraction'` indicates the x value is a fraction of the icon. A value of `'pixels'` indicates
 * the x value in pixels.
 * @property {IconAnchorUnits} [anchorYUnits='fraction'] Units in which the anchor y value is
 * specified. A value of `'fraction'` indicates the y value is a fraction of the icon. A value of `'pixels'` indicates
 * the y value in pixels.
 * @property {import("../color.js").Color|string} [color] Color to tint the icon. If not specified,
 * the icon will be left as is.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images. Note that you must provide a
 * `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {HTMLImageElement|HTMLCanvasElement} [img] Image object for the icon. If the `src` option is not provided then the
 * provided image must already be loaded. And in that case, it is required
 * to provide the size of the image, with the `imgSize` option.
 * @property {import("../size.js").Size} [imgSize] Image size in pixels. Only required if `img` is set and `src` is not.
 * The provided `imgSize` needs to match the actual size of the image.
 * @property {Array<number>} [displacement=[0, 0]] Displacement of the icon in pixels.
 * Positive values will shift the icon right and up.
 * @property {number} [opacity=1] Opacity of the icon.
 * @property {number} [width] The width of the icon in pixels. This can't be used together with `scale`.
 * @property {number} [height] The height of the icon in pixels. This can't be used together with `scale`.
 * @property {number|import("../size.js").Size} [scale=1] Scale.
 * @property {boolean} [rotateWithView=false] Whether to rotate the icon with the view.
 * @property {number} [rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {Array<number>} [offset=[0, 0]] Offset which, together with `size` and `offsetOrigin`, defines the
 * sub-rectangle to use from the original (sprite) image.
 * @property {IconOrigin} [offsetOrigin='top-left'] Origin of the offset: `bottom-left`, `bottom-right`,
 * `top-left` or `top-right`.
 * @property {import("../size.js").Size} [size] Icon size in pixels. Used together with `offset` to define the
 * sub-rectangle to use from the original (sprite) image.
 * @property {string} [src] Image source URI.
 * @property {"declutter"|"obstacle"|"none"|undefined} [declutterMode] Declutter mode.
 */

/**
 * @param {number} width The width.
 * @param {number} height The height.
 * @param {number|undefined} wantedWidth The wanted width.
 * @param {number|undefined} wantedHeight The wanted height.
 * @return {number|Array<number>} The scale.
 */
function calculateScale(width, height, wantedWidth, wantedHeight) {
  if (wantedWidth !== undefined && wantedHeight !== undefined) {
    return [wantedWidth / width, wantedHeight / height];
  }
  if (wantedWidth !== undefined) {
    return wantedWidth / width;
  }
  if (wantedHeight !== undefined) {
    return wantedHeight / height;
  }
  return 1;
}

/**
 * @classdesc
 * Set icon style for vector features.
 * @api
 */
class Icon extends _Image_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options || {};

    /**
     * @type {number}
     */
    const opacity = options.opacity !== undefined ? options.opacity : 1;

    /**
     * @type {number}
     */
    const rotation = options.rotation !== undefined ? options.rotation : 0;

    /**
     * @type {number|import("../size.js").Size}
     */
    const scale = options.scale !== undefined ? options.scale : 1;

    /**
     * @type {boolean}
     */
    const rotateWithView = options.rotateWithView !== undefined ? options.rotateWithView : false;
    super({
      opacity: opacity,
      rotation: rotation,
      scale: scale,
      displacement: options.displacement !== undefined ? options.displacement : [0, 0],
      rotateWithView: rotateWithView,
      declutterMode: options.declutterMode
    });

    /**
     * @private
     * @type {Array<number>}
     */
    this.anchor_ = options.anchor !== undefined ? options.anchor : [0.5, 0.5];

    /**
     * @private
     * @type {Array<number>}
     */
    this.normalizedAnchor_ = null;

    /**
     * @private
     * @type {IconOrigin}
     */
    this.anchorOrigin_ = options.anchorOrigin !== undefined ? options.anchorOrigin : 'top-left';

    /**
     * @private
     * @type {IconAnchorUnits}
     */
    this.anchorXUnits_ = options.anchorXUnits !== undefined ? options.anchorXUnits : 'fraction';

    /**
     * @private
     * @type {IconAnchorUnits}
     */
    this.anchorYUnits_ = options.anchorYUnits !== undefined ? options.anchorYUnits : 'fraction';

    /**
     * @private
     * @type {?string}
     */
    this.crossOrigin_ = options.crossOrigin !== undefined ? options.crossOrigin : null;

    /**
     * @type {HTMLImageElement|HTMLCanvasElement}
     */
    const image = options.img !== undefined ? options.img : null;

    /**
     * @private
     * @type {import("../size.js").Size|undefined}
     */
    this.imgSize_ = options.imgSize;

    /**
     * @type {string|undefined}
     */
    let src = options.src;
    (0,_asserts_js__WEBPACK_IMPORTED_MODULE_1__.assert)(!(src !== undefined && image), 4); // `image` and `src` cannot be provided at the same time
    (0,_asserts_js__WEBPACK_IMPORTED_MODULE_1__.assert)(!image || image && this.imgSize_, 5); // `imgSize` must be set when `image` is provided

    if ((src === undefined || src.length === 0) && image) {
      src = /** @type {HTMLImageElement} */image.src || (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.getUid)(image);
    }
    (0,_asserts_js__WEBPACK_IMPORTED_MODULE_1__.assert)(src !== undefined && src.length > 0, 6); // A defined and non-empty `src` or `image` must be provided

    // `width` or `height` cannot be provided together with `scale`
    (0,_asserts_js__WEBPACK_IMPORTED_MODULE_1__.assert)(!((options.width !== undefined || options.height !== undefined) && options.scale !== undefined), 69);

    /**
     * @type {import("../ImageState.js").default}
     */
    const imageState = options.src !== undefined ? _ImageState_js__WEBPACK_IMPORTED_MODULE_3__["default"].IDLE : _ImageState_js__WEBPACK_IMPORTED_MODULE_3__["default"].LOADED;

    /**
     * @private
     * @type {import("../color.js").Color}
     */
    this.color_ = options.color !== undefined ? (0,_color_js__WEBPACK_IMPORTED_MODULE_4__.asArray)(options.color) : null;

    /**
     * @private
     * @type {import("./IconImage.js").default}
     */
    this.iconImage_ = (0,_IconImage_js__WEBPACK_IMPORTED_MODULE_5__.get)(image, /** @type {string} */src, this.imgSize_ !== undefined ? this.imgSize_ : null, this.crossOrigin_, imageState, this.color_);

    /**
     * @private
     * @type {Array<number>}
     */
    this.offset_ = options.offset !== undefined ? options.offset : [0, 0];
    /**
     * @private
     * @type {IconOrigin}
     */
    this.offsetOrigin_ = options.offsetOrigin !== undefined ? options.offsetOrigin : 'top-left';

    /**
     * @private
     * @type {Array<number>}
     */
    this.origin_ = null;

    /**
     * @private
     * @type {import("../size.js").Size}
     */
    this.size_ = options.size !== undefined ? options.size : null;

    /**
     * Calculate the scale if width or height were given.
     */
    if (options.width !== undefined || options.height !== undefined) {
      let width, height;
      if (options.size) {
        [width, height] = options.size;
      } else {
        const image = this.getImage(1);
        if (image instanceof HTMLCanvasElement || image.src && image.complete) {
          width = image.width;
          height = image.height;
        } else {
          this.initialOptions_ = options;
          const onload = () => {
            this.unlistenImageChange(onload);
            if (!this.initialOptions_) {
              return;
            }
            const imageSize = this.iconImage_.getSize();
            this.setScale(calculateScale(imageSize[0], imageSize[1], options.width, options.height));
          };
          this.listenImageChange(onload);
          return;
        }
      }
      if (width !== undefined) {
        this.setScale(calculateScale(width, height, options.width, options.height));
      }
    }
  }

  /**
   * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
   * @return {Icon} The cloned style.
   * @api
   */
  clone() {
    let scale, width, height;
    if (this.initialOptions_) {
      width = this.initialOptions_.width;
      height = this.initialOptions_.height;
    } else {
      scale = this.getScale();
      scale = Array.isArray(scale) ? scale.slice() : scale;
    }
    const clone = new Icon({
      anchor: this.anchor_.slice(),
      anchorOrigin: this.anchorOrigin_,
      anchorXUnits: this.anchorXUnits_,
      anchorYUnits: this.anchorYUnits_,
      color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || undefined,
      crossOrigin: this.crossOrigin_,
      imgSize: this.imgSize_,
      offset: this.offset_.slice(),
      offsetOrigin: this.offsetOrigin_,
      opacity: this.getOpacity(),
      rotateWithView: this.getRotateWithView(),
      rotation: this.getRotation(),
      scale,
      width,
      height,
      size: this.size_ !== null ? this.size_.slice() : undefined,
      src: this.getSrc(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    return clone;
  }

  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   */
  getAnchor() {
    let anchor = this.normalizedAnchor_;
    if (!anchor) {
      anchor = this.anchor_;
      const size = this.getSize();
      if (this.anchorXUnits_ == 'fraction' || this.anchorYUnits_ == 'fraction') {
        if (!size) {
          return null;
        }
        anchor = this.anchor_.slice();
        if (this.anchorXUnits_ == 'fraction') {
          anchor[0] *= size[0];
        }
        if (this.anchorYUnits_ == 'fraction') {
          anchor[1] *= size[1];
        }
      }
      if (this.anchorOrigin_ != 'top-left') {
        if (!size) {
          return null;
        }
        if (anchor === this.anchor_) {
          anchor = this.anchor_.slice();
        }
        if (this.anchorOrigin_ == 'top-right' || this.anchorOrigin_ == 'bottom-right') {
          anchor[0] = -anchor[0] + size[0];
        }
        if (this.anchorOrigin_ == 'bottom-left' || this.anchorOrigin_ == 'bottom-right') {
          anchor[1] = -anchor[1] + size[1];
        }
      }
      this.normalizedAnchor_ = anchor;
    }
    const displacement = this.getDisplacement();
    const scale = this.getScaleArray();
    // anchor is scaled by renderer but displacement should not be scaled
    // so divide by scale here
    return [anchor[0] - displacement[0] / scale[0], anchor[1] + displacement[1] / scale[1]];
  }

  /**
   * Set the anchor point. The anchor determines the center point for the
   * symbolizer.
   *
   * @param {Array<number>} anchor Anchor.
   * @api
   */
  setAnchor(anchor) {
    this.anchor_ = anchor;
    this.normalizedAnchor_ = null;
  }

  /**
   * Get the icon color.
   * @return {import("../color.js").Color} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }

  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement} Image or Canvas element.
   * @api
   */
  getImage(pixelRatio) {
    return this.iconImage_.getImage(pixelRatio);
  }

  /**
   * Get the pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} The pixel ratio of the image.
   * @api
   */
  getPixelRatio(pixelRatio) {
    return this.iconImage_.getPixelRatio(pixelRatio);
  }

  /**
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return this.iconImage_.getSize();
  }

  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return this.iconImage_.getImageState();
  }

  /**
   * @return {HTMLImageElement|HTMLCanvasElement} Image element.
   */
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }

  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   */
  getOrigin() {
    if (this.origin_) {
      return this.origin_;
    }
    let offset = this.offset_;
    if (this.offsetOrigin_ != 'top-left') {
      const size = this.getSize();
      const iconImageSize = this.iconImage_.getSize();
      if (!size || !iconImageSize) {
        return null;
      }
      offset = offset.slice();
      if (this.offsetOrigin_ == 'top-right' || this.offsetOrigin_ == 'bottom-right') {
        offset[0] = iconImageSize[0] - size[0] - offset[0];
      }
      if (this.offsetOrigin_ == 'bottom-left' || this.offsetOrigin_ == 'bottom-right') {
        offset[1] = iconImageSize[1] - size[1] - offset[1];
      }
    }
    this.origin_ = offset;
    return this.origin_;
  }

  /**
   * Get the image URL.
   * @return {string|undefined} Image src.
   * @api
   */
  getSrc() {
    return this.iconImage_.getSrc();
  }

  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   * @api
   */
  getSize() {
    return !this.size_ ? this.iconImage_.getSize() : this.size_;
  }

  /**
   * Get the width of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
   * @return {number} Icon width (in pixels).
   * @api
   */
  getWidth() {
    const scale = this.getScaleArray();
    if (this.size_) {
      return this.size_[0] * scale[0];
    }
    if (this.iconImage_.getImageState() == _ImageState_js__WEBPACK_IMPORTED_MODULE_3__["default"].LOADED) {
      return this.iconImage_.getSize()[0] * scale[0];
    }
    return undefined;
  }

  /**
   * Get the height of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
   * @return {number} Icon height (in pixels).
   * @api
   */
  getHeight() {
    const scale = this.getScaleArray();
    if (this.size_) {
      return this.size_[1] * scale[1];
    }
    if (this.iconImage_.getImageState() == _ImageState_js__WEBPACK_IMPORTED_MODULE_3__["default"].LOADED) {
      return this.iconImage_.getSize()[1] * scale[1];
    }
    return undefined;
  }

  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   */
  setScale(scale) {
    delete this.initialOptions_;
    super.setScale(scale);
  }

  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(listener) {
    this.iconImage_.addEventListener(_events_EventType_js__WEBPACK_IMPORTED_MODULE_6__["default"].CHANGE, listener);
  }

  /**
   * Load not yet loaded URI.
   * When rendering a feature with an icon style, the vector renderer will
   * automatically call this method. However, you might want to call this
   * method yourself for preloading or other purposes.
   * @api
   */
  load() {
    this.iconImage_.load();
  }

  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(listener) {
    this.iconImage_.removeEventListener(_events_EventType_js__WEBPACK_IMPORTED_MODULE_6__["default"].CHANGE, listener);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ 95158:
/*!********************************************!*\
  !*** ./node_modules/ol/style/IconImage.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "get": () => (/* binding */ get)
/* harmony export */ });
/* harmony import */ var _events_Target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/Target.js */ 38393);
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/EventType.js */ 90322);
/* harmony import */ var _ImageState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ImageState.js */ 85227);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color.js */ 56224);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom.js */ 27425);
/* harmony import */ var _IconImageCache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IconImageCache.js */ 73797);
/* harmony import */ var _Image_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Image.js */ 66771);
/**
 * @module ol/style/IconImage
 */









/**
 * @type {CanvasRenderingContext2D}
 */
let taintedTestContext = null;
class IconImage extends _events_Target_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {HTMLImageElement|HTMLCanvasElement} image Image.
   * @param {string|undefined} src Src.
   * @param {import("../size.js").Size} size Size.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../ImageState.js").default} imageState Image state.
   * @param {import("../color.js").Color} color Color.
   */
  constructor(image, src, size, crossOrigin, imageState, color) {
    super();

    /**
     * @private
     * @type {HTMLImageElement|HTMLCanvasElement}
     */
    this.hitDetectionImage_ = null;

    /**
     * @private
     * @type {HTMLImageElement|HTMLCanvasElement}
     */
    this.image_ = image;

    /**
     * @private
     * @type {string|null}
     */
    this.crossOrigin_ = crossOrigin;

    /**
     * @private
     * @type {Object<number, HTMLCanvasElement>}
     */
    this.canvas_ = {};

    /**
     * @private
     * @type {import("../color.js").Color}
     */
    this.color_ = color;

    /**
     * @private
     * @type {?function():void}
     */
    this.unlisten_ = null;

    /**
     * @private
     * @type {import("../ImageState.js").default}
     */
    this.imageState_ = imageState;

    /**
     * @private
     * @type {import("../size.js").Size}
     */
    this.size_ = size;

    /**
     * @private
     * @type {string|undefined}
     */
    this.src_ = src;

    /**
     * @private
     */
    this.tainted_;
  }

  /**
   * @private
   */
  initializeImage_() {
    this.image_ = new Image();
    if (this.crossOrigin_ !== null) {
      this.image_.crossOrigin = this.crossOrigin_;
    }
  }

  /**
   * @private
   * @return {boolean} The image canvas is tainted.
   */
  isTainted_() {
    if (this.tainted_ === undefined && this.imageState_ === _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].LOADED) {
      if (!taintedTestContext) {
        taintedTestContext = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createCanvasContext2D)(1, 1, undefined, {
          willReadFrequently: true
        });
      }
      taintedTestContext.drawImage(this.image_, 0, 0);
      try {
        taintedTestContext.getImageData(0, 0, 1, 1);
        this.tainted_ = false;
      } catch (e) {
        taintedTestContext = null;
        this.tainted_ = true;
      }
    }
    return this.tainted_ === true;
  }

  /**
   * @private
   */
  dispatchChangeEvent_() {
    this.dispatchEvent(_events_EventType_js__WEBPACK_IMPORTED_MODULE_3__["default"].CHANGE);
  }

  /**
   * @private
   */
  handleImageError_() {
    this.imageState_ = _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR;
    this.unlistenImage_();
    this.dispatchChangeEvent_();
  }

  /**
   * @private
   */
  handleImageLoad_() {
    this.imageState_ = _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].LOADED;
    if (this.size_) {
      this.image_.width = this.size_[0];
      this.image_.height = this.size_[1];
    } else {
      this.size_ = [this.image_.width, this.image_.height];
    }
    this.unlistenImage_();
    this.dispatchChangeEvent_();
  }

  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement} Image or Canvas element.
   */
  getImage(pixelRatio) {
    if (!this.image_) {
      this.initializeImage_();
    }
    this.replaceColor_(pixelRatio);
    return this.canvas_[pixelRatio] ? this.canvas_[pixelRatio] : this.image_;
  }

  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Image or Canvas element.
   */
  getPixelRatio(pixelRatio) {
    this.replaceColor_(pixelRatio);
    return this.canvas_[pixelRatio] ? pixelRatio : 1;
  }

  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return this.imageState_;
  }

  /**
   * @return {HTMLImageElement|HTMLCanvasElement} Image element.
   */
  getHitDetectionImage() {
    if (!this.image_) {
      this.initializeImage_();
    }
    if (!this.hitDetectionImage_) {
      if (this.isTainted_()) {
        const width = this.size_[0];
        const height = this.size_[1];
        const context = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createCanvasContext2D)(width, height);
        context.fillRect(0, 0, width, height);
        this.hitDetectionImage_ = context.canvas;
      } else {
        this.hitDetectionImage_ = this.image_;
      }
    }
    return this.hitDetectionImage_;
  }

  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   */
  getSize() {
    return this.size_;
  }

  /**
   * @return {string|undefined} Image src.
   */
  getSrc() {
    return this.src_;
  }

  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.imageState_ !== _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].IDLE) {
      return;
    }
    if (!this.image_) {
      this.initializeImage_();
    }
    this.imageState_ = _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].LOADING;
    try {
      /** @type {HTMLImageElement} */this.image_.src = this.src_;
    } catch (e) {
      this.handleImageError_();
    }
    this.unlisten_ = (0,_Image_js__WEBPACK_IMPORTED_MODULE_4__.listenImage)(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
  }

  /**
   * @param {number} pixelRatio Pixel ratio.
   * @private
   */
  replaceColor_(pixelRatio) {
    if (!this.color_ || this.canvas_[pixelRatio] || this.imageState_ !== _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].LOADED) {
      return;
    }
    const image = this.image_;
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(image.width * pixelRatio);
    canvas.height = Math.ceil(image.height * pixelRatio);
    const ctx = canvas.getContext('2d');
    ctx.scale(pixelRatio, pixelRatio);
    ctx.drawImage(image, 0, 0);
    ctx.globalCompositeOperation = 'multiply';
    ctx.fillStyle = (0,_color_js__WEBPACK_IMPORTED_MODULE_5__.asString)(this.color_);
    ctx.fillRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(image, 0, 0);
    this.canvas_[pixelRatio] = canvas;
  }

  /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */
  unlistenImage_() {
    if (this.unlisten_) {
      this.unlisten_();
      this.unlisten_ = null;
    }
  }
}

/**
 * @param {HTMLImageElement|HTMLCanvasElement} image Image.
 * @param {string} src Src.
 * @param {import("../size.js").Size} size Size.
 * @param {?string} crossOrigin Cross origin.
 * @param {import("../ImageState.js").default} imageState Image state.
 * @param {import("../color.js").Color} color Color.
 * @return {IconImage} Icon image.
 */
function get(image, src, size, crossOrigin, imageState, color) {
  let iconImage = _IconImageCache_js__WEBPACK_IMPORTED_MODULE_6__.shared.get(src, crossOrigin, color);
  if (!iconImage) {
    iconImage = new IconImage(image, src, size, crossOrigin, imageState, color);
    _IconImageCache_js__WEBPACK_IMPORTED_MODULE_6__.shared.set(src, crossOrigin, color, iconImage);
  }
  return iconImage;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconImage);

/***/ }),

/***/ 55192:
/*!****************************************!*\
  !*** ./node_modules/ol/style/Image.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ 92204);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../size.js */ 61994);
/**
 * @module ol/style/Image
 */



/**
 * @typedef {Object} Options
 * @property {number} opacity Opacity.
 * @property {boolean} rotateWithView If the image should get rotated with the view.
 * @property {number} rotation Rotation.
 * @property {number|import("../size.js").Size} scale Scale.
 * @property {Array<number>} displacement Displacement.
 * @property {"declutter"|"obstacle"|"none"|undefined} declutterMode Declutter mode: `declutter`, `obstacle`, 'none */

/**
 * @classdesc
 * A base class used for creating subclasses and not instantiated in
 * apps. Base class for {@link module:ol/style/Icon~Icon}, {@link module:ol/style/Circle~CircleStyle} and
 * {@link module:ol/style/RegularShape~RegularShape}.
 * @abstract
 * @api
 */
class ImageStyle {
  /**
   * @param {Options} options Options.
   */
  constructor(options) {
    /**
     * @private
     * @type {number}
     */
    this.opacity_ = options.opacity;

    /**
     * @private
     * @type {boolean}
     */
    this.rotateWithView_ = options.rotateWithView;

    /**
     * @private
     * @type {number}
     */
    this.rotation_ = options.rotation;

    /**
     * @private
     * @type {number|import("../size.js").Size}
     */
    this.scale_ = options.scale;

    /**
     * @private
     * @type {import("../size.js").Size}
     */
    this.scaleArray_ = (0,_size_js__WEBPACK_IMPORTED_MODULE_0__.toSize)(options.scale);

    /**
     * @private
     * @type {Array<number>}
     */
    this.displacement_ = options.displacement;

    /**
     * @private
     * @type {"declutter"|"obstacle"|"none"|undefined}
     */
    this.declutterMode_ = options.declutterMode;
  }

  /**
   * Clones the style.
   * @return {ImageStyle} The cloned style.
   * @api
   */
  clone() {
    const scale = this.getScale();
    return new ImageStyle({
      opacity: this.getOpacity(),
      scale: Array.isArray(scale) ? scale.slice() : scale,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
  }

  /**
   * Get the symbolizer opacity.
   * @return {number} Opacity.
   * @api
   */
  getOpacity() {
    return this.opacity_;
  }

  /**
   * Determine whether the symbolizer rotates with the map.
   * @return {boolean} Rotate with map.
   * @api
   */
  getRotateWithView() {
    return this.rotateWithView_;
  }

  /**
   * Get the symoblizer rotation.
   * @return {number} Rotation.
   * @api
   */
  getRotation() {
    return this.rotation_;
  }

  /**
   * Get the symbolizer scale.
   * @return {number|import("../size.js").Size} Scale.
   * @api
   */
  getScale() {
    return this.scale_;
  }

  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */
  getScaleArray() {
    return this.scaleArray_;
  }

  /**
   * Get the displacement of the shape
   * @return {Array<number>} Shape's center displacement
   * @api
   */
  getDisplacement() {
    return this.displacement_;
  }

  /**
   * Get the declutter mode of the shape
   * @return {"declutter"|"obstacle"|"none"|undefined} Shape's declutter mode
   * @api
   */
  getDeclutterMode() {
    return this.declutterMode_;
  }

  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @abstract
   * @return {Array<number>} Anchor.
   */
  getAnchor() {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.abstract)();
  }

  /**
   * Get the image element for the symbolizer.
   * @abstract
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */
  getImage(pixelRatio) {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.abstract)();
  }

  /**
   * @abstract
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */
  getHitDetectionImage() {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.abstract)();
  }

  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   */
  getPixelRatio(pixelRatio) {
    return 1;
  }

  /**
   * @abstract
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.abstract)();
  }

  /**
   * @abstract
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.abstract)();
  }

  /**
   * Get the origin of the symbolizer.
   * @abstract
   * @return {Array<number>} Origin.
   */
  getOrigin() {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.abstract)();
  }

  /**
   * Get the size of the symbolizer (in pixels).
   * @abstract
   * @return {import("../size.js").Size} Size.
   */
  getSize() {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.abstract)();
  }

  /**
   * Set the displacement.
   *
   * @param {Array<number>} displacement Displacement.
   * @api
   */
  setDisplacement(displacement) {
    this.displacement_ = displacement;
  }

  /**
   * Set the opacity.
   *
   * @param {number} opacity Opacity.
   * @api
   */
  setOpacity(opacity) {
    this.opacity_ = opacity;
  }

  /**
   * Set whether to rotate the style with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(rotateWithView) {
    this.rotateWithView_ = rotateWithView;
  }

  /**
   * Set the rotation.
   *
   * @param {number} rotation Rotation.
   * @api
   */
  setRotation(rotation) {
    this.rotation_ = rotation;
  }

  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   */
  setScale(scale) {
    this.scale_ = scale;
    this.scaleArray_ = (0,_size_js__WEBPACK_IMPORTED_MODULE_0__.toSize)(scale);
  }

  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(listener) {
    (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.abstract)();
  }

  /**
   * Load not yet loaded URI.
   * @abstract
   */
  load() {
    (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.abstract)();
  }

  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(listener) {
    (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.abstract)();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageStyle);

/***/ }),

/***/ 32053:
/*!***********************************************!*\
  !*** ./node_modules/ol/style/RegularShape.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ImageState.js */ 85227);
/* harmony import */ var _Image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.js */ 55192);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color.js */ 56224);
/* harmony import */ var _colorlike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colorlike.js */ 73231);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom.js */ 27425);
/* harmony import */ var _render_canvas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/canvas.js */ 74921);
/**
 * @module ol/style/RegularShape
 */








/**
 * Specify radius for regular polygons, or radius1 and radius2 for stars.
 * @typedef {Object} Options
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {number} points Number of points for stars and regular polygons. In case of a polygon, the number of points
 * is the number of sides.
 * @property {number} [radius] Radius of a regular polygon.
 * @property {number} [radius1] First radius of a star. Ignored if radius is set.
 * @property {number} [radius2] Second radius of a star.
 * @property {number} [angle=0] Shape's angle in radians. A value of 0 will have one of the shape's points facing up.
 * @property {Array<number>} [displacement=[0, 0]] Displacement of the shape in pixels.
 * Positive values will shift the shape right and up.
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {number} [rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {boolean} [rotateWithView=false] Whether to rotate the shape with the view.
 * @property {number|import("../size.js").Size} [scale=1] Scale. Unless two dimensional scaling is required a better
 * result may be obtained with appropriate settings for `radius`, `radius1` and `radius2`.
 * @property {"declutter"|"obstacle"|"none"|undefined} [declutterMode] Declutter mode.
 */

/**
 * @typedef {Object} RenderOptions
 * @property {import("../colorlike.js").ColorLike} [strokeStyle] StrokeStyle.
 * @property {number} strokeWidth StrokeWidth.
 * @property {number} size Size.
 * @property {Array<number>|null} lineDash LineDash.
 * @property {number} lineDashOffset LineDashOffset.
 * @property {CanvasLineJoin} lineJoin LineJoin.
 * @property {number} miterLimit MiterLimit.
 */

/**
 * @classdesc
 * Set regular shape style for vector features. The resulting shape will be
 * a regular polygon when `radius` is provided, or a star when `radius1` and
 * `radius2` are provided.
 * @api
 */
class RegularShape extends _Image_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {Options} options Options.
   */
  constructor(options) {
    /**
     * @type {boolean}
     */
    const rotateWithView = options.rotateWithView !== undefined ? options.rotateWithView : false;
    super({
      opacity: 1,
      rotateWithView: rotateWithView,
      rotation: options.rotation !== undefined ? options.rotation : 0,
      scale: options.scale !== undefined ? options.scale : 1,
      displacement: options.displacement !== undefined ? options.displacement : [0, 0],
      declutterMode: options.declutterMode
    });

    /**
     * @private
     * @type {Object<number, HTMLCanvasElement>}
     */
    this.canvas_ = undefined;

    /**
     * @private
     * @type {HTMLCanvasElement}
     */
    this.hitDetectionCanvas_ = null;

    /**
     * @private
     * @type {import("./Fill.js").default}
     */
    this.fill_ = options.fill !== undefined ? options.fill : null;

    /**
     * @private
     * @type {Array<number>}
     */
    this.origin_ = [0, 0];

    /**
     * @private
     * @type {number}
     */
    this.points_ = options.points;

    /**
     * @protected
     * @type {number}
     */
    this.radius_ = options.radius !== undefined ? options.radius : options.radius1;

    /**
     * @private
     * @type {number|undefined}
     */
    this.radius2_ = options.radius2;

    /**
     * @private
     * @type {number}
     */
    this.angle_ = options.angle !== undefined ? options.angle : 0;

    /**
     * @private
     * @type {import("./Stroke.js").default}
     */
    this.stroke_ = options.stroke !== undefined ? options.stroke : null;

    /**
     * @private
     * @type {import("../size.js").Size}
     */
    this.size_ = null;

    /**
     * @private
     * @type {RenderOptions}
     */
    this.renderOptions_ = null;
    this.render();
  }

  /**
   * Clones the style.
   * @return {RegularShape} The cloned style.
   * @api
   */
  clone() {
    const scale = this.getScale();
    const style = new RegularShape({
      fill: this.getFill() ? this.getFill().clone() : undefined,
      points: this.getPoints(),
      radius: this.getRadius(),
      radius2: this.getRadius2(),
      angle: this.getAngle(),
      stroke: this.getStroke() ? this.getStroke().clone() : undefined,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(scale) ? scale.slice() : scale,
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    style.setOpacity(this.getOpacity());
    return style;
  }

  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   */
  getAnchor() {
    const size = this.size_;
    if (!size) {
      return null;
    }
    const displacement = this.getDisplacement();
    const scale = this.getScaleArray();
    // anchor is scaled by renderer but displacement should not be scaled
    // so divide by scale here
    return [size[0] / 2 - displacement[0] / scale[0], size[1] / 2 + displacement[1] / scale[1]];
  }

  /**
   * Get the angle used in generating the shape.
   * @return {number} Shape's rotation in radians.
   * @api
   */
  getAngle() {
    return this.angle_;
  }

  /**
   * Get the fill style for the shape.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }

  /**
   * Set the fill style.
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setFill(fill) {
    this.fill_ = fill;
    this.render();
  }

  /**
   * @return {HTMLCanvasElement} Image element.
   */
  getHitDetectionImage() {
    if (!this.hitDetectionCanvas_) {
      this.createHitDetectionCanvas_(this.renderOptions_);
    }
    return this.hitDetectionCanvas_;
  }

  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement} Image or Canvas element.
   * @api
   */
  getImage(pixelRatio) {
    let image = this.canvas_[pixelRatio];
    if (!image) {
      const renderOptions = this.renderOptions_;
      const context = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createCanvasContext2D)(renderOptions.size * pixelRatio, renderOptions.size * pixelRatio);
      this.draw_(renderOptions, context, pixelRatio);
      image = context.canvas;
      this.canvas_[pixelRatio] = image;
    }
    return image;
  }

  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   */
  getPixelRatio(pixelRatio) {
    return pixelRatio;
  }

  /**
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return this.size_;
  }

  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return _ImageState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADED;
  }

  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   */
  getOrigin() {
    return this.origin_;
  }

  /**
   * Get the number of points for generating the shape.
   * @return {number} Number of points for stars and regular polygons.
   * @api
   */
  getPoints() {
    return this.points_;
  }

  /**
   * Get the (primary) radius for the shape.
   * @return {number} Radius.
   * @api
   */
  getRadius() {
    return this.radius_;
  }

  /**
   * Get the secondary radius for the shape.
   * @return {number|undefined} Radius2.
   * @api
   */
  getRadius2() {
    return this.radius2_;
  }

  /**
   * Get the size of the symbolizer (in pixels).
   * @return {import("../size.js").Size} Size.
   * @api
   */
  getSize() {
    return this.size_;
  }

  /**
   * Get the stroke style for the shape.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }

  /**
   * Set the stroke style.
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setStroke(stroke) {
    this.stroke_ = stroke;
    this.render();
  }

  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(listener) {}

  /**
   * Load not yet loaded URI.
   */
  load() {}

  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(listener) {}

  /**
   * Calculate additional canvas size needed for the miter.
   * @param {string} lineJoin Line join
   * @param {number} strokeWidth Stroke width
   * @param {number} miterLimit Miter limit
   * @return {number} Additional canvas size needed
   * @private
   */
  calculateLineJoinSize_(lineJoin, strokeWidth, miterLimit) {
    if (strokeWidth === 0 || this.points_ === Infinity || lineJoin !== 'bevel' && lineJoin !== 'miter') {
      return strokeWidth;
    }
    // m  | ^
    // i  | |\                  .
    // t >|  #\
    // e  | |\ \              .
    // r      \s\
    //      |  \t\          .                 .
    //          \r\                      .   .
    //      |    \o\      .          .  . . .
    //          e \k\            .  .    . .
    //      |      \e\  .    .  .       . .
    //       d      \ \  .  .          . .
    //      | _ _a_ _\#  .            . .
    //   r1          / `             . .
    //      |                       . .
    //       b     /               . .
    //      |                     . .
    //           / r2            . .
    //      |                        .   .
    //         /                           .   .
    //      |α                                   .   .
    //       /                                         .   .
    //      ° center
    let r1 = this.radius_;
    let r2 = this.radius2_ === undefined ? r1 : this.radius2_;
    if (r1 < r2) {
      const tmp = r1;
      r1 = r2;
      r2 = tmp;
    }
    const points = this.radius2_ === undefined ? this.points_ : this.points_ * 2;
    const alpha = 2 * Math.PI / points;
    const a = r2 * Math.sin(alpha);
    const b = Math.sqrt(r2 * r2 - a * a);
    const d = r1 - b;
    const e = Math.sqrt(a * a + d * d);
    const miterRatio = e / a;
    if (lineJoin === 'miter' && miterRatio <= miterLimit) {
      return miterRatio * strokeWidth;
    }
    // Calculate the distance from center to the stroke corner where
    // it was cut short because of the miter limit.
    //              l
    //        ----+---- <= distance from center to here is maxr
    //       /####|k ##\
    //      /#####^#####\
    //     /#### /+\# s #\
    //    /### h/+++\# t #\
    //   /### t/+++++\# r #\
    //  /### a/+++++++\# o #\
    // /### p/++ fill +\# k #\
    ///#### /+++++^+++++\# e #\
    //#####/+++++/+\+++++\#####\
    const k = strokeWidth / 2 / miterRatio;
    const l = strokeWidth / 2 * (d / e);
    const maxr = Math.sqrt((r1 + k) * (r1 + k) + l * l);
    const bevelAdd = maxr - r1;
    if (this.radius2_ === undefined || lineJoin === 'bevel') {
      return bevelAdd * 2;
    }
    // If outer miter is over the miter limit the inner miter may reach through the
    // center and be longer than the bevel, same calculation as above but swap r1 / r2.
    const aa = r1 * Math.sin(alpha);
    const bb = Math.sqrt(r1 * r1 - aa * aa);
    const dd = r2 - bb;
    const ee = Math.sqrt(aa * aa + dd * dd);
    const innerMiterRatio = ee / aa;
    if (innerMiterRatio <= miterLimit) {
      const innerLength = innerMiterRatio * strokeWidth / 2 - r2 - r1;
      return 2 * Math.max(bevelAdd, innerLength);
    }
    return bevelAdd * 2;
  }

  /**
   * @return {RenderOptions}  The render options
   * @protected
   */
  createRenderOptions() {
    let lineJoin = _render_canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultLineJoin;
    let miterLimit = 0;
    let lineDash = null;
    let lineDashOffset = 0;
    let strokeStyle;
    let strokeWidth = 0;
    if (this.stroke_) {
      strokeStyle = this.stroke_.getColor();
      if (strokeStyle === null) {
        strokeStyle = _render_canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultStrokeStyle;
      }
      strokeStyle = (0,_colorlike_js__WEBPACK_IMPORTED_MODULE_4__.asColorLike)(strokeStyle);
      strokeWidth = this.stroke_.getWidth();
      if (strokeWidth === undefined) {
        strokeWidth = _render_canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultLineWidth;
      }
      lineDash = this.stroke_.getLineDash();
      lineDashOffset = this.stroke_.getLineDashOffset();
      lineJoin = this.stroke_.getLineJoin();
      if (lineJoin === undefined) {
        lineJoin = _render_canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultLineJoin;
      }
      miterLimit = this.stroke_.getMiterLimit();
      if (miterLimit === undefined) {
        miterLimit = _render_canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultMiterLimit;
      }
    }
    const add = this.calculateLineJoinSize_(lineJoin, strokeWidth, miterLimit);
    const maxRadius = Math.max(this.radius_, this.radius2_ || 0);
    const size = Math.ceil(2 * maxRadius + add);
    return {
      strokeStyle: strokeStyle,
      strokeWidth: strokeWidth,
      size: size,
      lineDash: lineDash,
      lineDashOffset: lineDashOffset,
      lineJoin: lineJoin,
      miterLimit: miterLimit
    };
  }

  /**
   * @protected
   */
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const size = this.renderOptions_.size;
    this.canvas_ = {};
    this.size_ = [size, size];
  }

  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The rendering context.
   * @param {number} pixelRatio The pixel ratio.
   */
  draw_(renderOptions, context, pixelRatio) {
    context.scale(pixelRatio, pixelRatio);
    // set origin to canvas center
    context.translate(renderOptions.size / 2, renderOptions.size / 2);
    this.createPath_(context);
    if (this.fill_) {
      let color = this.fill_.getColor();
      if (color === null) {
        color = _render_canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultFillStyle;
      }
      context.fillStyle = (0,_colorlike_js__WEBPACK_IMPORTED_MODULE_4__.asColorLike)(color);
      context.fill();
    }
    if (this.stroke_) {
      context.strokeStyle = renderOptions.strokeStyle;
      context.lineWidth = renderOptions.strokeWidth;
      if (renderOptions.lineDash) {
        context.setLineDash(renderOptions.lineDash);
        context.lineDashOffset = renderOptions.lineDashOffset;
      }
      context.lineJoin = renderOptions.lineJoin;
      context.miterLimit = renderOptions.miterLimit;
      context.stroke();
    }
  }

  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   */
  createHitDetectionCanvas_(renderOptions) {
    if (this.fill_) {
      let color = this.fill_.getColor();

      // determine if fill is transparent (or pattern or gradient)
      let opacity = 0;
      if (typeof color === 'string') {
        color = (0,_color_js__WEBPACK_IMPORTED_MODULE_5__.asArray)(color);
      }
      if (color === null) {
        opacity = 1;
      } else if (Array.isArray(color)) {
        opacity = color.length === 4 ? color[3] : 1;
      }
      if (opacity === 0) {
        // if a transparent fill style is set, create an extra hit-detection image
        // with a default fill style
        const context = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createCanvasContext2D)(renderOptions.size, renderOptions.size);
        this.hitDetectionCanvas_ = context.canvas;
        this.drawHitDetectionCanvas_(renderOptions, context);
      }
    }
    if (!this.hitDetectionCanvas_) {
      this.hitDetectionCanvas_ = this.getImage(1);
    }
  }

  /**
   * @private
   * @param {CanvasRenderingContext2D} context The context to draw in.
   */
  createPath_(context) {
    let points = this.points_;
    const radius = this.radius_;
    if (points === Infinity) {
      context.arc(0, 0, radius, 0, 2 * Math.PI);
    } else {
      const radius2 = this.radius2_ === undefined ? radius : this.radius2_;
      if (this.radius2_ !== undefined) {
        points *= 2;
      }
      const startAngle = this.angle_ - Math.PI / 2;
      const step = 2 * Math.PI / points;
      for (let i = 0; i < points; i++) {
        const angle0 = startAngle + i * step;
        const radiusC = i % 2 === 0 ? radius : radius2;
        context.lineTo(radiusC * Math.cos(angle0), radiusC * Math.sin(angle0));
      }
      context.closePath();
    }
  }

  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The context.
   */
  drawHitDetectionCanvas_(renderOptions, context) {
    // set origin to canvas center
    context.translate(renderOptions.size / 2, renderOptions.size / 2);
    this.createPath_(context);
    context.fillStyle = _render_canvas_js__WEBPACK_IMPORTED_MODULE_3__.defaultFillStyle;
    context.fill();
    if (this.stroke_) {
      context.strokeStyle = renderOptions.strokeStyle;
      context.lineWidth = renderOptions.strokeWidth;
      if (renderOptions.lineDash) {
        context.setLineDash(renderOptions.lineDash);
        context.lineDashOffset = renderOptions.lineDashOffset;
      }
      context.lineJoin = renderOptions.lineJoin;
      context.miterLimit = renderOptions.miterLimit;
      context.stroke();
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegularShape);

/***/ }),

/***/ 12854:
/*!*****************************************!*\
  !*** ./node_modules/ol/style/Stroke.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/style/Stroke
 */

/**
 * @typedef {Object} Options
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [color] A color, gradient or pattern.
 * See {@link module:ol/color~Color} and {@link module:ol/colorlike~ColorLike} for possible formats.
 * Default null; if null, the Canvas/renderer default black will be used.
 * @property {CanvasLineCap} [lineCap='round'] Line cap style: `butt`, `round`, or `square`.
 * @property {CanvasLineJoin} [lineJoin='round'] Line join style: `bevel`, `round`, or `miter`.
 * @property {Array<number>} [lineDash] Line dash pattern. Default is `null` (no dash).
 * @property {number} [lineDashOffset=0] Line dash offset.
 * @property {number} [miterLimit=10] Miter limit.
 * @property {number} [width] Width.
 */

/**
 * @classdesc
 * Set stroke style for vector features.
 * Note that the defaults given are the Canvas defaults, which will be used if
 * option is not defined. The `get` functions return whatever was entered in
 * the options; they will not return the default.
 * @api
 */
class Stroke {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options || {};

    /**
     * @private
     * @type {import("../color.js").Color|import("../colorlike.js").ColorLike}
     */
    this.color_ = options.color !== undefined ? options.color : null;

    /**
     * @private
     * @type {CanvasLineCap|undefined}
     */
    this.lineCap_ = options.lineCap;

    /**
     * @private
     * @type {Array<number>|null}
     */
    this.lineDash_ = options.lineDash !== undefined ? options.lineDash : null;

    /**
     * @private
     * @type {number|undefined}
     */
    this.lineDashOffset_ = options.lineDashOffset;

    /**
     * @private
     * @type {CanvasLineJoin|undefined}
     */
    this.lineJoin_ = options.lineJoin;

    /**
     * @private
     * @type {number|undefined}
     */
    this.miterLimit_ = options.miterLimit;

    /**
     * @private
     * @type {number|undefined}
     */
    this.width_ = options.width;
  }

  /**
   * Clones the style.
   * @return {Stroke} The cloned style.
   * @api
   */
  clone() {
    const color = this.getColor();
    return new Stroke({
      color: Array.isArray(color) ? color.slice() : color || undefined,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : undefined,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth()
    });
  }

  /**
   * Get the stroke color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }

  /**
   * Get the line cap type for the stroke.
   * @return {CanvasLineCap|undefined} Line cap.
   * @api
   */
  getLineCap() {
    return this.lineCap_;
  }

  /**
   * Get the line dash style for the stroke.
   * @return {Array<number>|null} Line dash.
   * @api
   */
  getLineDash() {
    return this.lineDash_;
  }

  /**
   * Get the line dash offset for the stroke.
   * @return {number|undefined} Line dash offset.
   * @api
   */
  getLineDashOffset() {
    return this.lineDashOffset_;
  }

  /**
   * Get the line join type for the stroke.
   * @return {CanvasLineJoin|undefined} Line join.
   * @api
   */
  getLineJoin() {
    return this.lineJoin_;
  }

  /**
   * Get the miter limit for the stroke.
   * @return {number|undefined} Miter limit.
   * @api
   */
  getMiterLimit() {
    return this.miterLimit_;
  }

  /**
   * Get the stroke width.
   * @return {number|undefined} Width.
   * @api
   */
  getWidth() {
    return this.width_;
  }

  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
   * @api
   */
  setColor(color) {
    this.color_ = color;
  }

  /**
   * Set the line cap.
   *
   * @param {CanvasLineCap|undefined} lineCap Line cap.
   * @api
   */
  setLineCap(lineCap) {
    this.lineCap_ = lineCap;
  }

  /**
   * Set the line dash.
   *
   * @param {Array<number>|null} lineDash Line dash.
   * @api
   */
  setLineDash(lineDash) {
    this.lineDash_ = lineDash;
  }

  /**
   * Set the line dash offset.
   *
   * @param {number|undefined} lineDashOffset Line dash offset.
   * @api
   */
  setLineDashOffset(lineDashOffset) {
    this.lineDashOffset_ = lineDashOffset;
  }

  /**
   * Set the line join.
   *
   * @param {CanvasLineJoin|undefined} lineJoin Line join.
   * @api
   */
  setLineJoin(lineJoin) {
    this.lineJoin_ = lineJoin;
  }

  /**
   * Set the miter limit.
   *
   * @param {number|undefined} miterLimit Miter limit.
   * @api
   */
  setMiterLimit(miterLimit) {
    this.miterLimit_ = miterLimit;
  }

  /**
   * Set the width.
   *
   * @param {number|undefined} width Width.
   * @api
   */
  setWidth(width) {
    this.width_ = width;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stroke);

/***/ }),

/***/ 864:
/*!****************************************!*\
  !*** ./node_modules/ol/style/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDefaultStyle": () => (/* binding */ createDefaultStyle),
/* harmony export */   "createEditingStyle": () => (/* binding */ createEditingStyle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "toFunction": () => (/* binding */ toFunction)
/* harmony export */ });
/* harmony import */ var _Circle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Circle.js */ 17840);
/* harmony import */ var _Fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fill.js */ 95567);
/* harmony import */ var _Stroke_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stroke.js */ 12854);
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asserts.js */ 11703);
/**
 * @module ol/style/Style
 */






/**
 * A function that takes an {@link module:ol/Feature~Feature} and a `{number}`
 * representing the view's resolution. The function should return a
 * {@link module:ol/style/Style~Style} or an array of them. This way e.g. a
 * vector layer can be styled. If the function returns `undefined`, the
 * feature will not be rendered.
 *
 * @typedef {function(import("../Feature.js").FeatureLike, number):(Style|Array<Style>|void)} StyleFunction
 */

/**
 * A {@link Style}, an array of {@link Style}, or a {@link StyleFunction}.
 * @typedef {Style|Array<Style>|StyleFunction} StyleLike
 */

/**
 * A function that takes an {@link module:ol/Feature~Feature} as argument and returns an
 * {@link module:ol/geom/Geometry~Geometry} that will be rendered and styled for the feature.
 *
 * @typedef {function(import("../Feature.js").FeatureLike):
 *     (import("../geom/Geometry.js").default|import("../render/Feature.js").default|undefined)} GeometryFunction
 */

/**
 * Custom renderer function. Takes two arguments:
 *
 * 1. The pixel coordinates of the geometry in GeoJSON notation.
 * 2. The {@link module:ol/render~State} of the layer renderer.
 *
 * @typedef {function((import("../coordinate.js").Coordinate|Array<import("../coordinate.js").Coordinate>|Array<Array<import("../coordinate.js").Coordinate>>|Array<Array<Array<import("../coordinate.js").Coordinate>>>),import("../render.js").State): void} RenderFunction
 */

/**
 * @typedef {Object} Options
 * @property {string|import("../geom/Geometry.js").default|GeometryFunction} [geometry] Feature property or geometry
 * or function returning a geometry to render for this style.
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {import("./Image.js").default} [image] Image style.
 * @property {RenderFunction} [renderer] Custom renderer. When configured, `fill`, `stroke` and `image` will be
 * ignored, and the provided function will be called with each render frame for each geometry.
 * @property {RenderFunction} [hitDetectionRenderer] Custom renderer for hit detection. If provided will be used
 * in hit detection rendering.
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {import("./Text.js").default} [text] Text style.
 * @property {number} [zIndex] Z index.
 */

/**
 * @classdesc
 * Container for vector feature rendering styles. Any changes made to the style
 * or its children through `set*()` methods will not take effect until the
 * feature or layer that uses the style is re-rendered.
 *
 * ## Feature styles
 *
 * If no style is defined, the following default style is used:
 * ```js
 *  import {Circle, Fill, Stroke, Style} from 'ol/style.js';
 *
 *  const fill = new Fill({
 *    color: 'rgba(255,255,255,0.4)',
 *  });
 *  const stroke = new Stroke({
 *    color: '#3399CC',
 *    width: 1.25,
 *  });
 *  const styles = [
 *    new Style({
 *      image: new Circle({
 *        fill: fill,
 *        stroke: stroke,
 *        radius: 5,
 *      }),
 *      fill: fill,
 *      stroke: stroke,
 *    }),
 *  ];
 * ```
 *
 * A separate editing style has the following defaults:
 * ```js
 *  import {Circle, Fill, Stroke, Style} from 'ol/style.js';
 *
 *  const styles = {};
 *  const white = [255, 255, 255, 1];
 *  const blue = [0, 153, 255, 1];
 *  const width = 3;
 *  styles['Polygon'] = [
 *    new Style({
 *      fill: new Fill({
 *        color: [255, 255, 255, 0.5],
 *      }),
 *    }),
 *  ];
 *  styles['MultiPolygon'] =
 *      styles['Polygon'];
 *  styles['LineString'] = [
 *    new Style({
 *      stroke: new Stroke({
 *        color: white,
 *        width: width + 2,
 *      }),
 *    }),
 *    new Style({
 *      stroke: new Stroke({
 *        color: blue,
 *        width: width,
 *      }),
 *    }),
 *  ];
 *  styles['MultiLineString'] = styles['LineString'];
 *
 *  styles['Circle'] = styles['Polygon'].concat(
 *    styles['LineString']
 *  );
 *
 *  styles['Point'] = [
 *    new Style({
 *      image: new Circle({
 *        radius: width * 2,
 *        fill: new Fill({
 *          color: blue,
 *        }),
 *        stroke: new Stroke({
 *          color: white,
 *          width: width / 2,
 *        }),
 *      }),
 *      zIndex: Infinity,
 *    }),
 *  ];
 *  styles['MultiPoint'] =
 *      styles['Point'];
 *  styles['GeometryCollection'] =
 *      styles['Polygon'].concat(
 *          styles['LineString'],
 *          styles['Point']
 *      );
 * ```
 *
 * @api
 */
class Style {
  /**
   * @param {Options} [options] Style options.
   */
  constructor(options) {
    options = options || {};

    /**
     * @private
     * @type {string|import("../geom/Geometry.js").default|GeometryFunction}
     */
    this.geometry_ = null;

    /**
     * @private
     * @type {!GeometryFunction}
     */
    this.geometryFunction_ = defaultGeometryFunction;
    if (options.geometry !== undefined) {
      this.setGeometry(options.geometry);
    }

    /**
     * @private
     * @type {import("./Fill.js").default}
     */
    this.fill_ = options.fill !== undefined ? options.fill : null;

    /**
     * @private
     * @type {import("./Image.js").default}
     */
    this.image_ = options.image !== undefined ? options.image : null;

    /**
     * @private
     * @type {RenderFunction|null}
     */
    this.renderer_ = options.renderer !== undefined ? options.renderer : null;

    /**
     * @private
     * @type {RenderFunction|null}
     */
    this.hitDetectionRenderer_ = options.hitDetectionRenderer !== undefined ? options.hitDetectionRenderer : null;

    /**
     * @private
     * @type {import("./Stroke.js").default}
     */
    this.stroke_ = options.stroke !== undefined ? options.stroke : null;

    /**
     * @private
     * @type {import("./Text.js").default}
     */
    this.text_ = options.text !== undefined ? options.text : null;

    /**
     * @private
     * @type {number|undefined}
     */
    this.zIndex_ = options.zIndex;
  }

  /**
   * Clones the style.
   * @return {Style} The cloned style.
   * @api
   */
  clone() {
    let geometry = this.getGeometry();
    if (geometry && typeof geometry === 'object') {
      geometry = /** @type {import("../geom/Geometry.js").default} */geometry.clone();
    }
    return new Style({
      geometry: geometry,
      fill: this.getFill() ? this.getFill().clone() : undefined,
      image: this.getImage() ? this.getImage().clone() : undefined,
      renderer: this.getRenderer(),
      stroke: this.getStroke() ? this.getStroke().clone() : undefined,
      text: this.getText() ? this.getText().clone() : undefined,
      zIndex: this.getZIndex()
    });
  }

  /**
   * Get the custom renderer function that was configured with
   * {@link #setRenderer} or the `renderer` constructor option.
   * @return {RenderFunction|null} Custom renderer function.
   * @api
   */
  getRenderer() {
    return this.renderer_;
  }

  /**
   * Sets a custom renderer function for this style. When set, `fill`, `stroke`
   * and `image` options of the style will be ignored.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */
  setRenderer(renderer) {
    this.renderer_ = renderer;
  }

  /**
   * Sets a custom renderer function for this style used
   * in hit detection.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */
  setHitDetectionRenderer(renderer) {
    this.hitDetectionRenderer_ = renderer;
  }

  /**
   * Get the custom renderer function that was configured with
   * {@link #setHitDetectionRenderer} or the `hitDetectionRenderer` constructor option.
   * @return {RenderFunction|null} Custom renderer function.
   * @api
   */
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }

  /**
   * Get the geometry to be rendered.
   * @return {string|import("../geom/Geometry.js").default|GeometryFunction}
   * Feature property or geometry or function that returns the geometry that will
   * be rendered with this style.
   * @api
   */
  getGeometry() {
    return this.geometry_;
  }

  /**
   * Get the function used to generate a geometry for rendering.
   * @return {!GeometryFunction} Function that is called with a feature
   * and returns the geometry to render instead of the feature's geometry.
   * @api
   */
  getGeometryFunction() {
    return this.geometryFunction_;
  }

  /**
   * Get the fill style.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }

  /**
   * Set the fill style.
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setFill(fill) {
    this.fill_ = fill;
  }

  /**
   * Get the image style.
   * @return {import("./Image.js").default} Image style.
   * @api
   */
  getImage() {
    return this.image_;
  }

  /**
   * Set the image style.
   * @param {import("./Image.js").default} image Image style.
   * @api
   */
  setImage(image) {
    this.image_ = image;
  }

  /**
   * Get the stroke style.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }

  /**
   * Set the stroke style.
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setStroke(stroke) {
    this.stroke_ = stroke;
  }

  /**
   * Get the text style.
   * @return {import("./Text.js").default} Text style.
   * @api
   */
  getText() {
    return this.text_;
  }

  /**
   * Set the text style.
   * @param {import("./Text.js").default} text Text style.
   * @api
   */
  setText(text) {
    this.text_ = text;
  }

  /**
   * Get the z-index for the style.
   * @return {number|undefined} ZIndex.
   * @api
   */
  getZIndex() {
    return this.zIndex_;
  }

  /**
   * Set a geometry that is rendered instead of the feature's geometry.
   *
   * @param {string|import("../geom/Geometry.js").default|GeometryFunction} geometry
   *     Feature property or geometry or function returning a geometry to render
   *     for this style.
   * @api
   */
  setGeometry(geometry) {
    if (typeof geometry === 'function') {
      this.geometryFunction_ = geometry;
    } else if (typeof geometry === 'string') {
      this.geometryFunction_ = function (feature) {
        return (/** @type {import("../geom/Geometry.js").default} */
          feature.get(geometry)
        );
      };
    } else if (!geometry) {
      this.geometryFunction_ = defaultGeometryFunction;
    } else if (geometry !== undefined) {
      this.geometryFunction_ = function () {
        return (/** @type {import("../geom/Geometry.js").default} */geometry
        );
      };
    }
    this.geometry_ = geometry;
  }

  /**
   * Set the z-index.
   *
   * @param {number|undefined} zIndex ZIndex.
   * @api
   */
  setZIndex(zIndex) {
    this.zIndex_ = zIndex;
  }
}

/**
 * Convert the provided object into a style function.  Functions passed through
 * unchanged.  Arrays of Style or single style objects wrapped in a
 * new style function.
 * @param {StyleFunction|Array<Style>|Style} obj
 *     A style function, a single style, or an array of styles.
 * @return {StyleFunction} A style function.
 */
function toFunction(obj) {
  let styleFunction;
  if (typeof obj === 'function') {
    styleFunction = obj;
  } else {
    /**
     * @type {Array<Style>}
     */
    let styles;
    if (Array.isArray(obj)) {
      styles = obj;
    } else {
      (0,_asserts_js__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof /** @type {?} */obj.getZIndex === 'function', 41); // Expected an `Style` or an array of `Style`
      const style = /** @type {Style} */obj;
      styles = [style];
    }
    styleFunction = function () {
      return styles;
    };
  }
  return styleFunction;
}

/**
 * @type {Array<Style>|null}
 */
let defaultStyles = null;

/**
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {number} resolution Resolution.
 * @return {Array<Style>} Style.
 */
function createDefaultStyle(feature, resolution) {
  // We don't use an immediately-invoked function
  // and a closure so we don't get an error at script evaluation time in
  // browsers that do not support Canvas. (import("./Circle.js").CircleStyle does
  // canvas.getContext('2d') at construction time, which will cause an.error
  // in such browsers.)
  if (!defaultStyles) {
    const fill = new _Fill_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      color: 'rgba(255,255,255,0.4)'
    });
    const stroke = new _Stroke_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      color: '#3399CC',
      width: 1.25
    });
    defaultStyles = [new Style({
      image: new _Circle_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        fill: fill,
        stroke: stroke,
        radius: 5
      }),
      fill: fill,
      stroke: stroke
    })];
  }
  return defaultStyles;
}

/**
 * Default styles for editing features.
 * @return {Object<import("../geom/Geometry.js").Type, Array<Style>>} Styles
 */
function createEditingStyle() {
  /** @type {Object<import("../geom/Geometry.js").Type, Array<Style>>} */
  const styles = {};
  const white = [255, 255, 255, 1];
  const blue = [0, 153, 255, 1];
  const width = 3;
  styles['Polygon'] = [new Style({
    fill: new _Fill_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      color: [255, 255, 255, 0.5]
    })
  })];
  styles['MultiPolygon'] = styles['Polygon'];
  styles['LineString'] = [new Style({
    stroke: new _Stroke_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      color: white,
      width: width + 2
    })
  }), new Style({
    stroke: new _Stroke_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      color: blue,
      width: width
    })
  })];
  styles['MultiLineString'] = styles['LineString'];
  styles['Circle'] = styles['Polygon'].concat(styles['LineString']);
  styles['Point'] = [new Style({
    image: new _Circle_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      radius: width * 2,
      fill: new _Fill_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        color: blue
      }),
      stroke: new _Stroke_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        color: white,
        width: width / 2
      })
    }),
    zIndex: Infinity
  })];
  styles['MultiPoint'] = styles['Point'];
  styles['GeometryCollection'] = styles['Polygon'].concat(styles['LineString'], styles['Point']);
  return styles;
}

/**
 * Function that is called with a feature and returns its default geometry.
 * @param {import("../Feature.js").FeatureLike} feature Feature to get the geometry for.
 * @return {import("../geom/Geometry.js").default|import("../render/Feature.js").default|undefined} Geometry to render.
 */
function defaultGeometryFunction(feature) {
  return feature.getGeometry();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ 44483:
/*!***************************************!*\
  !*** ./node_modules/ol/style/Text.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fill.js */ 95567);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../size.js */ 61994);
/**
 * @module ol/style/Text
 */



/**
 * @typedef {'point' | 'line'} TextPlacement
 * Default text placement is `'point'`. Note that
 * `'line'` requires the underlying geometry to be a {@link module:ol/geom/LineString~LineString},
 * {@link module:ol/geom/Polygon~Polygon}, {@link module:ol/geom/MultiLineString~MultiLineString} or
 * {@link module:ol/geom/MultiPolygon~MultiPolygon}.
 */

/**
 * @typedef {'left' | 'center' | 'right'} TextJustify
 */

/**
 * The default fill color to use if no fill was set at construction time; a
 * blackish `#333`.
 *
 * @const {string}
 */
const DEFAULT_FILL_COLOR = '#333';

/**
 * @typedef {Object} Options
 * @property {string} [font] Font style as CSS `font` value, see:
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font. Default is `'10px sans-serif'`
 * @property {number} [maxAngle=Math.PI/4] When `placement` is set to `'line'`, allow a maximum angle between adjacent characters.
 * The expected value is in radians, and the default is 45° (`Math.PI / 4`).
 * @property {number} [offsetX=0] Horizontal text offset in pixels. A positive will shift the text right.
 * @property {number} [offsetY=0] Vertical text offset in pixels. A positive will shift the text down.
 * @property {boolean} [overflow=false] For polygon labels or when `placement` is set to `'line'`, allow text to exceed
 * the width of the polygon at the label position or the length of the path that it follows.
 * @property {TextPlacement} [placement='point'] Text placement.
 * @property {number} [repeat] Repeat interval. When set, the text will be repeated at this interval, which specifies
 * the distance between two text anchors in pixels. Only available when `placement` is set to `'line'`. Overrides 'textAlign'.
 * @property {number|import("../size.js").Size} [scale] Scale.
 * @property {boolean} [rotateWithView=false] Whether to rotate the text with the view.
 * @property {number} [rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {string|Array<string>} [text] Text content or rich text content. For plain text provide a string, which can
 * contain line breaks (`\n`). For rich text provide an array of text/font tuples. A tuple consists of the text to
 * render and the font to use (or `''` to use the text style's font). A line break has to be a separate tuple (i.e. `'\n', ''`).
 * **Example:** `['foo', 'bold 10px sans-serif', ' bar', 'italic 10px sans-serif', ' baz', '']` will yield "**foo** *bar* baz".
 * **Note:** Rich text is not supported for `placement: 'line'` or the immediate rendering API.
 * @property {CanvasTextAlign} [textAlign] Text alignment. Possible values: `'left'`, `'right'`, `'center'`, `'end'` or `'start'`.
 * Default is `'center'` for `placement: 'point'`. For `placement: 'line'`, the default is to let the renderer choose a
 * placement where `maxAngle` is not exceeded.
 * @property {TextJustify} [justify] Text justification within the text box.
 * If not set, text is justified towards the `textAlign` anchor.
 * Otherwise, use options `'left'`, `'center'`, or `'right'` to justify the text within the text box.
 * **Note:** `justify` is ignored for immediate rendering and also for `placement: 'line'`.
 * @property {CanvasTextBaseline} [textBaseline='middle'] Text base line. Possible values: `'bottom'`, `'top'`, `'middle'`, `'alphabetic'`,
 * `'hanging'`, `'ideographic'`.
 * @property {import("./Fill.js").default|null} [fill] Fill style. If none is provided, we'll use a dark fill-style (#333). Specify `null` for no fill.
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {import("./Fill.js").default} [backgroundFill] Fill style for the text background when `placement` is
 * `'point'`. Default is no fill.
 * @property {import("./Stroke.js").default} [backgroundStroke] Stroke style for the text background  when `placement`
 * is `'point'`. Default is no stroke.
 * @property {Array<number>} [padding=[0, 0, 0, 0]] Padding in pixels around the text for decluttering and background. The order of
 * values in the array is `[top, right, bottom, left]`.
 */

/**
 * @classdesc
 * Set text style for vector features.
 * @api
 */
class Text {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options || {};

    /**
     * @private
     * @type {string|undefined}
     */
    this.font_ = options.font;

    /**
     * @private
     * @type {number|undefined}
     */
    this.rotation_ = options.rotation;

    /**
     * @private
     * @type {boolean|undefined}
     */
    this.rotateWithView_ = options.rotateWithView;

    /**
     * @private
     * @type {number|import("../size.js").Size|undefined}
     */
    this.scale_ = options.scale;

    /**
     * @private
     * @type {import("../size.js").Size}
     */
    this.scaleArray_ = (0,_size_js__WEBPACK_IMPORTED_MODULE_0__.toSize)(options.scale !== undefined ? options.scale : 1);

    /**
     * @private
     * @type {string|Array<string>|undefined}
     */
    this.text_ = options.text;

    /**
     * @private
     * @type {CanvasTextAlign|undefined}
     */
    this.textAlign_ = options.textAlign;

    /**
     * @private
     * @type {TextJustify|undefined}
     */
    this.justify_ = options.justify;

    /**
     * @private
     * @type {number|undefined}
     */
    this.repeat_ = options.repeat;

    /**
     * @private
     * @type {CanvasTextBaseline|undefined}
     */
    this.textBaseline_ = options.textBaseline;

    /**
     * @private
     * @type {import("./Fill.js").default}
     */
    this.fill_ = options.fill !== undefined ? options.fill : new _Fill_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      color: DEFAULT_FILL_COLOR
    });

    /**
     * @private
     * @type {number}
     */
    this.maxAngle_ = options.maxAngle !== undefined ? options.maxAngle : Math.PI / 4;

    /**
     * @private
     * @type {TextPlacement}
     */
    this.placement_ = options.placement !== undefined ? options.placement : 'point';

    /**
     * @private
     * @type {boolean}
     */
    this.overflow_ = !!options.overflow;

    /**
     * @private
     * @type {import("./Stroke.js").default}
     */
    this.stroke_ = options.stroke !== undefined ? options.stroke : null;

    /**
     * @private
     * @type {number}
     */
    this.offsetX_ = options.offsetX !== undefined ? options.offsetX : 0;

    /**
     * @private
     * @type {number}
     */
    this.offsetY_ = options.offsetY !== undefined ? options.offsetY : 0;

    /**
     * @private
     * @type {import("./Fill.js").default}
     */
    this.backgroundFill_ = options.backgroundFill ? options.backgroundFill : null;

    /**
     * @private
     * @type {import("./Stroke.js").default}
     */
    this.backgroundStroke_ = options.backgroundStroke ? options.backgroundStroke : null;

    /**
     * @private
     * @type {Array<number>|null}
     */
    this.padding_ = options.padding === undefined ? null : options.padding;
  }

  /**
   * Clones the style.
   * @return {Text} The cloned style.
   * @api
   */
  clone() {
    const scale = this.getScale();
    return new Text({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(scale) ? scale.slice() : scale,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : undefined,
      stroke: this.getStroke() ? this.getStroke().clone() : undefined,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : undefined,
      backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : undefined,
      padding: this.getPadding() || undefined
    });
  }

  /**
   * Get the `overflow` configuration.
   * @return {boolean} Let text overflow the length of the path they follow.
   * @api
   */
  getOverflow() {
    return this.overflow_;
  }

  /**
   * Get the font name.
   * @return {string|undefined} Font.
   * @api
   */
  getFont() {
    return this.font_;
  }

  /**
   * Get the maximum angle between adjacent characters.
   * @return {number} Angle in radians.
   * @api
   */
  getMaxAngle() {
    return this.maxAngle_;
  }

  /**
   * Get the label placement.
   * @return {TextPlacement} Text placement.
   * @api
   */
  getPlacement() {
    return this.placement_;
  }

  /**
   * Get the repeat interval of the text.
   * @return {number|undefined} Repeat interval in pixels.
   * @api
   */
  getRepeat() {
    return this.repeat_;
  }

  /**
   * Get the x-offset for the text.
   * @return {number} Horizontal text offset.
   * @api
   */
  getOffsetX() {
    return this.offsetX_;
  }

  /**
   * Get the y-offset for the text.
   * @return {number} Vertical text offset.
   * @api
   */
  getOffsetY() {
    return this.offsetY_;
  }

  /**
   * Get the fill style for the text.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }

  /**
   * Determine whether the text rotates with the map.
   * @return {boolean|undefined} Rotate with map.
   * @api
   */
  getRotateWithView() {
    return this.rotateWithView_;
  }

  /**
   * Get the text rotation.
   * @return {number|undefined} Rotation.
   * @api
   */
  getRotation() {
    return this.rotation_;
  }

  /**
   * Get the text scale.
   * @return {number|import("../size.js").Size|undefined} Scale.
   * @api
   */
  getScale() {
    return this.scale_;
  }

  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */
  getScaleArray() {
    return this.scaleArray_;
  }

  /**
   * Get the stroke style for the text.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }

  /**
   * Get the text to be rendered.
   * @return {string|Array<string>|undefined} Text.
   * @api
   */
  getText() {
    return this.text_;
  }

  /**
   * Get the text alignment.
   * @return {CanvasTextAlign|undefined} Text align.
   * @api
   */
  getTextAlign() {
    return this.textAlign_;
  }

  /**
   * Get the justification.
   * @return {TextJustify|undefined} Justification.
   * @api
   */
  getJustify() {
    return this.justify_;
  }

  /**
   * Get the text baseline.
   * @return {CanvasTextBaseline|undefined} Text baseline.
   * @api
   */
  getTextBaseline() {
    return this.textBaseline_;
  }

  /**
   * Get the background fill style for the text.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getBackgroundFill() {
    return this.backgroundFill_;
  }

  /**
   * Get the background stroke style for the text.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }

  /**
   * Get the padding for the text.
   * @return {Array<number>|null} Padding.
   * @api
   */
  getPadding() {
    return this.padding_;
  }

  /**
   * Set the `overflow` property.
   *
   * @param {boolean} overflow Let text overflow the path that it follows.
   * @api
   */
  setOverflow(overflow) {
    this.overflow_ = overflow;
  }

  /**
   * Set the font.
   *
   * @param {string|undefined} font Font.
   * @api
   */
  setFont(font) {
    this.font_ = font;
  }

  /**
   * Set the maximum angle between adjacent characters.
   *
   * @param {number} maxAngle Angle in radians.
   * @api
   */
  setMaxAngle(maxAngle) {
    this.maxAngle_ = maxAngle;
  }

  /**
   * Set the x offset.
   *
   * @param {number} offsetX Horizontal text offset.
   * @api
   */
  setOffsetX(offsetX) {
    this.offsetX_ = offsetX;
  }

  /**
   * Set the y offset.
   *
   * @param {number} offsetY Vertical text offset.
   * @api
   */
  setOffsetY(offsetY) {
    this.offsetY_ = offsetY;
  }

  /**
   * Set the text placement.
   *
   * @param {TextPlacement} placement Placement.
   * @api
   */
  setPlacement(placement) {
    this.placement_ = placement;
  }

  /**
   * Set the repeat interval of the text.
   * @param {number|undefined} [repeat] Repeat interval in pixels.
   * @api
   */
  setRepeat(repeat) {
    this.repeat_ = repeat;
  }

  /**
   * Set whether to rotate the text with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(rotateWithView) {
    this.rotateWithView_ = rotateWithView;
  }

  /**
   * Set the fill.
   *
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setFill(fill) {
    this.fill_ = fill;
  }

  /**
   * Set the rotation.
   *
   * @param {number|undefined} rotation Rotation.
   * @api
   */
  setRotation(rotation) {
    this.rotation_ = rotation;
  }

  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size|undefined} scale Scale.
   * @api
   */
  setScale(scale) {
    this.scale_ = scale;
    this.scaleArray_ = (0,_size_js__WEBPACK_IMPORTED_MODULE_0__.toSize)(scale !== undefined ? scale : 1);
  }

  /**
   * Set the stroke.
   *
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setStroke(stroke) {
    this.stroke_ = stroke;
  }

  /**
   * Set the text.
   *
   * @param {string|Array<string>|undefined} text Text.
   * @api
   */
  setText(text) {
    this.text_ = text;
  }

  /**
   * Set the text alignment.
   *
   * @param {CanvasTextAlign|undefined} textAlign Text align.
   * @api
   */
  setTextAlign(textAlign) {
    this.textAlign_ = textAlign;
  }

  /**
   * Set the justification.
   *
   * @param {TextJustify|undefined} justify Justification.
   * @api
   */
  setJustify(justify) {
    this.justify_ = justify;
  }

  /**
   * Set the text baseline.
   *
   * @param {CanvasTextBaseline|undefined} textBaseline Text baseline.
   * @api
   */
  setTextBaseline(textBaseline) {
    this.textBaseline_ = textBaseline;
  }

  /**
   * Set the background fill.
   *
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setBackgroundFill(fill) {
    this.backgroundFill_ = fill;
  }

  /**
   * Set the background stroke.
   *
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setBackgroundStroke(stroke) {
    this.backgroundStroke_ = stroke;
  }

  /**
   * Set the padding (`[top, right, bottom, left]`).
   *
   * @param {Array<number>|null} padding Padding.
   * @api
   */
  setPadding(padding) {
    this.padding_ = padding;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ 78041:
/*!***************************************!*\
  !*** ./node_modules/ol/style/flat.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDefaultStyle": () => (/* binding */ createDefaultStyle),
/* harmony export */   "toStyle": () => (/* binding */ toStyle)
/* harmony export */ });
/* harmony import */ var _style_Circle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/Circle.js */ 17840);
/* harmony import */ var _Fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fill.js */ 95567);
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon.js */ 57920);
/* harmony import */ var _RegularShape_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RegularShape.js */ 32053);
/* harmony import */ var _Stroke_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stroke.js */ 12854);
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style.js */ 864);
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text.js */ 44483);
/**
 * @module ol/style/flat
 */









/**
 * For static styling, the [layer.setStyle()]{@link module:ol/layer/Vector~VectorLayer#setStyle} method
 * can be called with an object literal that has fill, stroke, text, icon, regular shape, and/or circle properties.
 * @api
 *
 * @typedef {FlatFill & FlatStroke & FlatText & FlatIcon & FlatShape & FlatCircle} FlatStyle
 */

/**
 * A flat style literal or an array of the same.
 *
 * @typedef {FlatStyle|Array<FlatStyle>} FlatStyleLike
 */

/**
 * Fill style properties applied to polygon features.
 *
 * @typedef {Object} FlatFill
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [fill-color] The fill color.
 */

/**
 * Stroke style properties applied to line strings and polygon boundaries.  To apply a stroke, at least one of
 * `stroke-color` or `stroke-width` must be provided.
 *
 * @typedef {Object} FlatStroke
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [stroke-color] The stroke color.
 * @property {number} [stroke-width] Stroke pixel width.
 * @property {CanvasLineCap} [stroke-line-cap='round'] Line cap style: `butt`, `round`, or `square`.
 * @property {CanvasLineJoin} [stroke-line-join='round'] Line join style: `bevel`, `round`, or `miter`.
 * @property {Array<number>} [stroke-line-dash] Line dash pattern.
 * @property {number} [stroke-line-dash-offset=0] Line dash offset.
 * @property {number} [stroke-miter-limit=10] Miter limit.
 */

/**
 * Label style properties applied to all features.  At a minimum, a `text-value` must be provided.
 *
 * @typedef {Object} FlatText
 * @property {string|Array<string>} [text-value] Text content or rich text content. For plain text provide a string, which can
 * contain line breaks (`\n`). For rich text provide an array of text/font tuples. A tuple consists of the text to
 * render and the font to use (or `''` to use the text style's font). A line break has to be a separate tuple (i.e. `'\n', ''`).
 * **Example:** `['foo', 'bold 10px sans-serif', ' bar', 'italic 10px sans-serif', ' baz', '']` will yield "**foo** *bar* baz".
 * **Note:** Rich text is not supported for `'text-placement': 'line'` or the immediate rendering API.
 * @property {string} [text-font] Font style as CSS `font` value, see:
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font. Default is `'10px sans-serif'`
 * @property {number} [text-max-angle=Math.PI/4] When `text-placement` is set to `'line'`, allow a maximum angle between adjacent characters.
 * The expected value is in radians, and the default is 45° (`Math.PI / 4`).
 * @property {number} [text-offset-x=0] Horizontal text offset in pixels. A positive will shift the text right.
 * @property {number} [text-offset-y=0] Vertical text offset in pixels. A positive will shift the text down.
 * @property {boolean} [text-overflow=false] For polygon labels or when `placement` is set to `'line'`, allow text to exceed
 * the width of the polygon at the label position or the length of the path that it follows.
 * @property {import("./Text.js").TextPlacement} [text-placement='point'] Text placement.
 * @property {number} [text-repeat] Repeat interval in pixels. When set, the text will be repeated at this interval. Only available when
 * `text-placement` is set to `'line'`. Overrides `text-align`.
 * @property {number|import("../size.js").Size} [text-scale] Scale.
 * @property {boolean} [text-rotate-with-view=false] Whether to rotate the text with the view.
 * @property {number} [text-rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {CanvasTextAlign} [text-align] Text alignment. Possible values: `'left'`, `'right'`, `'center'`, `'end'` or `'start'`.
 * Default is `'center'` for `'text-placement': 'point'`. For `'text-placement': 'line'`, the default is to let the renderer choose a
 * placement where `text-max-angle` is not exceeded.
 * @property {import('./Text.js').TextJustify} [text-justify] Text justification within the text box.
 * If not set, text is justified towards the `textAlign` anchor.
 * Otherwise, use options `'left'`, `'center'`, or `'right'` to justify the text within the text box.
 * **Note:** `text-justify` is ignored for immediate rendering and also for `'text-placement': 'line'`.
 * @property {CanvasTextBaseline} [text-baseline='middle'] Text base line. Possible values: `'bottom'`, `'top'`, `'middle'`, `'alphabetic'`,
 * `'hanging'`, `'ideographic'`.
 * @property {Array<number>} [text-padding=[0, 0, 0, 0]] Padding in pixels around the text for decluttering and background. The order of
 * values in the array is `[top, right, bottom, left]`.
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [text-fill-color] The fill color. Specify `'none'` to avoid hit detection on the fill.
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [text-background-fill-color] The fill color.
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [text-stroke-color] The stroke color.
 * @property {CanvasLineCap} [text-stroke-line-cap='round'] Line cap style: `butt`, `round`, or `square`.
 * @property {CanvasLineJoin} [text-stroke-line-join='round'] Line join style: `bevel`, `round`, or `miter`.
 * @property {Array<number>} [text-stroke-line-dash] Line dash pattern.
 * @property {number} [text-stroke-line-dash-offset=0] Line dash offset.
 * @property {number} [text-stroke-miter-limit=10] Miter limit.
 * @property {number} [text-stroke-width] Stroke pixel width.
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [text-background-stroke-color] The stroke color.
 * @property {CanvasLineCap} [text-background-stroke-line-cap='round'] Line cap style: `butt`, `round`, or `square`.
 * @property {CanvasLineJoin} [text-background-stroke-line-join='round'] Line join style: `bevel`, `round`, or `miter`.
 * @property {Array<number>} [text-background-stroke-line-dash] Line dash pattern.
 * @property {number} [text-background-stroke-line-dash-offset=0] Line dash offset.
 * @property {number} [text-background-stroke-miter-limit=10] Miter limit.
 * @property {number} [text-background-stroke-width] Stroke pixel width.
 */

/**
 * Icon style properties applied to point features.  One of `icon-src` or `icon-img` must be provided to render
 * points with an icon.
 *
 * @typedef {Object} FlatIcon
 * @property {string} [icon-src] Image source URI.
 * @property {HTMLImageElement|HTMLCanvasElement} [icon-img] Image object for the icon. If the `icon-src` option is not provided then the
 * provided image must already be loaded. And in that case, it is required
 * to provide the size of the image, with the `icon-img-size` option.
 * @property {import("../size.js").Size} [icon-img-size] Image size in pixels. Only required if `icon-img` is set and `icon-src` is not.
 * The provided size needs to match the actual size of the image.
 * @property {Array<number>} [icon-anchor=[0.5, 0.5]] Anchor. Default value is the icon center.
 * @property {import("./Icon.js").IconOrigin} [icon-anchor-origin='top-left'] Origin of the anchor: `bottom-left`, `bottom-right`,
 * `top-left` or `top-right`.
 * @property {import("./Icon.js").IconAnchorUnits} [icon-anchor-x-units='fraction'] Units in which the anchor x value is
 * specified. A value of `'fraction'` indicates the x value is a fraction of the icon. A value of `'pixels'` indicates
 * the x value in pixels.
 * @property {import("./Icon.js").IconAnchorUnits} [icon-anchor-y-units='fraction'] Units in which the anchor y value is
 * specified. A value of `'fraction'` indicates the y value is a fraction of the icon. A value of `'pixels'` indicates
 * the y value in pixels.
 * @property {import("../color.js").Color|string} [icon-color] Color to tint the icon. If not specified,
 * the icon will be left as is.
 * @property {null|string} [icon-cross-origin] The `crossOrigin` attribute for loaded images. Note that you must provide a
 * `icon-cross-origin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {Array<number>} [icon-offset=[0, 0]] Offset, which, together with the size and the offset origin, define the
 * sub-rectangle to use from the original icon image.
 * @property {Array<number>} [icon-displacement=[0,0]] Displacement of the icon.
 * @property {import("./Icon.js").IconOrigin} [icon-offset-origin='top-left'] Origin of the offset: `bottom-left`, `bottom-right`,
 * `top-left` or `top-right`.
 * @property {number} [icon-opacity=1] Opacity of the icon.
 * @property {number|import("../size.js").Size} [icon-scale=1] Scale.
 * @property {number} [icon-width] Width of the icon. If not specified, the actual image width will be used. Cannot be combined
 * with `scale`.
 * @property {number} [icon-height] Height of the icon. If not specified, the actual image height will be used. Cannot be combined
 * with `scale`.
 * @property {number} [icon-rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {boolean} [icon-rotate-with-view=false] Whether to rotate the icon with the view.
 * @property {import("../size.js").Size} [icon-size] Icon size in pixel. Can be used together with `icon-offset` to define the
 * sub-rectangle to use from the origin (sprite) icon image.
 * @property {"declutter"|"obstacle"|"none"|undefined} [icon-declutter-mode] Declutter mode
 */

/**
 * Regular shape style properties for rendering point features.  At least `shape-points` must be provided.
 *
 * @typedef {Object} FlatShape
 * @property {number} [shape-points] Number of points for stars and regular polygons. In case of a polygon, the number of points
 * is the number of sides.
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [shape-fill-color] The fill color.
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [shape-stroke-color] The stroke color.
 * @property {number} [shape-stroke-width] Stroke pixel width.
 * @property {CanvasLineCap} [shape-stroke-line-cap='round'] Line cap style: `butt`, `round`, or `square`.
 * @property {CanvasLineJoin} [shape-stroke-line-join='round'] Line join style: `bevel`, `round`, or `miter`.
 * @property {Array<number>} [shape-stroke-line-dash] Line dash pattern.
 * @property {number} [shape-stroke-line-dash-offset=0] Line dash offset.
 * @property {number} [shape-stroke-miter-limit=10] Miter limit.
 * @property {number} [shape-radius] Radius of a regular polygon.
 * @property {number} [shape-radius1] First radius of a star. Ignored if radius is set.
 * @property {number} [shape-radius2] Second radius of a star.
 * @property {number} [shape-angle=0] Shape's angle in radians. A value of 0 will have one of the shape's point facing up.
 * @property {Array<number>} [shape-displacement=[0,0]] Displacement of the shape
 * @property {number} [shape-rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {boolean} [shape-rotate-with-view=false] Whether to rotate the shape with the view.
 * @property {number|import("../size.js").Size} [shape-scale=1] Scale. Unless two dimensional scaling is required a better
 * result may be obtained with appropriate settings for `shape-radius`, `shape-radius1` and `shape-radius2`.
 * @property {"declutter"|"obstacle"|"none"|undefined} [shape-declutter-mode] Declutter mode.
 */

/**
 * Circle style properties for rendering point features.  At least `circle-radius` must be provided.
 *
 * @typedef {Object} FlatCircle
 * @property {number} [circle-radius] Circle radius.
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [circle-fill-color] The fill color.
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [circle-stroke-color] The stroke color.
 * @property {number} [circle-stroke-width] Stroke pixel width.
 * @property {CanvasLineCap} [circle-stroke-line-cap='round'] Line cap style: `butt`, `round`, or `square`.
 * @property {CanvasLineJoin} [circle-stroke-line-join='round'] Line join style: `bevel`, `round`, or `miter`.
 * @property {Array<number>} [circle-stroke-line-dash] Line dash pattern.
 * @property {number} [circle-stroke-line-dash-offset=0] Line dash offset.
 * @property {number} [circle-stroke-miter-limit=10] Miter limit.
 * @property {Array<number>} [circle-displacement=[0,0]] displacement
 * @property {number|import("../size.js").Size} [circle-scale=1] Scale. A two dimensional scale will produce an ellipse.
 * Unless two dimensional scaling is required a better result may be obtained with an appropriate setting for `circle-radius`.
 * @property {number} [circle-rotation=0] Rotation in radians
 * (positive rotation clockwise, meaningful only when used in conjunction with a two dimensional scale).
 * @property {boolean} [circle-rotate-with-view=false] Whether to rotate the shape with the view
 * (meaningful only when used in conjunction with a two dimensional scale).
 * @property {"declutter"|"obstacle"|"none"|undefined} [circle-declutter-mode] Declutter mode
 */

/**
 * @param {FlatStyle} flatStyle A flat style literal.
 * @return {import("./Style.js").default} A style instance.
 */
function toStyle(flatStyle) {
  const style = new _Style_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    fill: getFill(flatStyle, ''),
    stroke: getStroke(flatStyle, ''),
    text: getText(flatStyle),
    image: getImage(flatStyle)
  });
  return style;
}

/**
 * @param {FlatStyle} flatStyle The flat style.
 * @param {string} prefix The property prefix.
 * @return {Fill|null|undefined} The fill (if any).
 */
function getFill(flatStyle, prefix) {
  const color = flatStyle[prefix + 'fill-color'];
  if (!color) {
    return;
  }
  if (color === 'none') {
    return null;
  }
  return new _Fill_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    color: color
  });
}

/**
 * @param {FlatStyle} flatStyle The flat style.
 * @param {string} prefix The property prefix.
 * @return {Stroke|undefined} The stroke (if any).
 */
function getStroke(flatStyle, prefix) {
  const width = flatStyle[prefix + 'stroke-width'];
  const color = flatStyle[prefix + 'stroke-color'];
  if (!width && !color) {
    return;
  }
  return new _Stroke_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    width: width,
    color: color,
    lineCap: flatStyle[prefix + 'stroke-line-cap'],
    lineJoin: flatStyle[prefix + 'stroke-line-join'],
    lineDash: flatStyle[prefix + 'stroke-line-dash'],
    lineDashOffset: flatStyle[prefix + 'stroke-line-dash-offset'],
    miterLimit: flatStyle[prefix + 'stroke-miter-limit']
  });
}

/**
 * @param {FlatStyle} flatStyle The flat style.
 * @return {Text|undefined} The text (if any).
 */
function getText(flatStyle) {
  const value = flatStyle['text-value'];
  if (!value) {
    return;
  }
  const text = new _Text_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
    text: value,
    font: flatStyle['text-font'],
    maxAngle: flatStyle['text-max-angle'],
    offsetX: flatStyle['text-offset-x'],
    offsetY: flatStyle['text-offset-y'],
    overflow: flatStyle['text-overflow'],
    placement: flatStyle['text-placement'],
    repeat: flatStyle['text-repeat'],
    scale: flatStyle['text-scale'],
    rotateWithView: flatStyle['text-rotate-with-view'],
    rotation: flatStyle['text-rotation'],
    textAlign: flatStyle['text-align'],
    justify: flatStyle['text-justify'],
    textBaseline: flatStyle['text-baseline'],
    padding: flatStyle['text-padding'],
    fill: getFill(flatStyle, 'text-'),
    backgroundFill: getFill(flatStyle, 'text-background-'),
    stroke: getStroke(flatStyle, 'text-'),
    backgroundStroke: getStroke(flatStyle, 'text-background-')
  });
  return text;
}

/**
 * @param {FlatStyle} flatStyle The flat style.
 * @return {import("./Image.js").default|undefined} The image (if any).
 */
function getImage(flatStyle) {
  const iconSrc = flatStyle['icon-src'];
  const iconImg = flatStyle['icon-img'];
  if (iconSrc || iconImg) {
    const icon = new _Icon_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      src: iconSrc,
      img: iconImg,
      imgSize: flatStyle['icon-img-size'],
      anchor: flatStyle['icon-anchor'],
      anchorOrigin: flatStyle['icon-anchor-origin'],
      anchorXUnits: flatStyle['icon-anchor-x-units'],
      anchorYUnits: flatStyle['icon-anchor-y-units'],
      color: flatStyle['icon-color'],
      crossOrigin: flatStyle['icon-cross-origin'],
      offset: flatStyle['icon-offset'],
      displacement: flatStyle['icon-displacement'],
      opacity: flatStyle['icon-opacity'],
      scale: flatStyle['icon-scale'],
      width: flatStyle['icon-width'],
      height: flatStyle['icon-height'],
      rotation: flatStyle['icon-rotation'],
      rotateWithView: flatStyle['icon-rotate-with-view'],
      size: flatStyle['icon-size'],
      declutterMode: flatStyle['icon-declutter-mode']
    });
    return icon;
  }
  const shapePoints = flatStyle['shape-points'];
  if (shapePoints) {
    const prefix = 'shape-';
    const shape = new _RegularShape_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      points: shapePoints,
      fill: getFill(flatStyle, prefix),
      stroke: getStroke(flatStyle, prefix),
      radius: flatStyle['shape-radius'],
      radius1: flatStyle['shape-radius1'],
      radius2: flatStyle['shape-radius2'],
      angle: flatStyle['shape-angle'],
      displacement: flatStyle['shape-displacement'],
      rotation: flatStyle['shape-rotation'],
      rotateWithView: flatStyle['shape-rotate-with-view'],
      scale: flatStyle['shape-scale'],
      declutterMode: flatStyle['shape-declutter-mode']
    });
    return shape;
  }
  const circleRadius = flatStyle['circle-radius'];
  if (circleRadius) {
    const prefix = 'circle-';
    const circle = new _style_Circle_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
      radius: circleRadius,
      fill: getFill(flatStyle, prefix),
      stroke: getStroke(flatStyle, prefix),
      displacement: flatStyle['circle-displacement'],
      scale: flatStyle['circle-scale'],
      rotation: flatStyle['circle-rotation'],
      rotateWithView: flatStyle['circle-rotate-with-view'],
      declutterMode: flatStyle['circle-declutter-mode']
    });
    return circle;
  }
  return;
}

/**
 * @return {import('./flat.js').FlatStyle} The default flat style.
 */
function createDefaultStyle() {
  return {
    'fill-color': 'rgba(255,255,255,0.4)',
    'stroke-color': '#3399CC',
    'stroke-width': 1.25,
    'circle-radius': 5,
    'circle-fill-color': 'rgba(255,255,255,0.4)',
    'circle-stroke-width': 1.25,
    'circle-stroke-color': '#3399CC'
  };
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_domain-listing__components_shared-exp-map_shared-exp-map_component_t-a8c67b.js.map