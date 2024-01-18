"use strict";
(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_shared__services_modals_service_ts-_81851"],{

/***/ 82882:
/*!****************************************************!*\
  !*** ./src/app/shared/_services/modals.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);



let ModalService = class ModalService {
  constructor() {
    // Functions For Changes Detection
    this.listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.listChangedObs = this.listChanged.asObservable();
  }
  // Trigger list changes
  triggerUserListChanges(message) {
    // Change the subject value
    this.listChanged.next(message);
  }
  // Set the element id
  setElementId(elementId) {
    this.elementId = elementId;
  }
  setElementInfo(elementInfo) {
    this.elementInfo = elementInfo;
  }
  // Return the element id value
  getElementId() {
    return this.elementId;
  }
  getElementInfo() {
    console.log('element info', this.elementInfo);
    return this.elementInfo;
  }
};
ModalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ModalService);


/***/ })

}]);
//# sourceMappingURL=src_app_shared__services_modals_service_ts-_81851.js.map