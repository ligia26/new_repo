(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_features_role-provider_view-provider-messages_view-provider-messages_componen-fb491b"],{

/***/ 16048:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/role-provider/view-provider-messages/view-provider-messages.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProviderMessagesComponent": () => (/* binding */ ViewProviderMessagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_provider_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-provider-messages.component.html?ngResource */ 27974);
/* harmony import */ var _view_provider_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-provider-messages.component.scss?ngResource */ 52213);
/* harmony import */ var _view_provider_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_provider_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/messages-conversations.service */ 33869);
/* harmony import */ var src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/reservations.service */ 84803);
/* harmony import */ var src_app_shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/shared-experiences.service */ 229);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);











let ViewProviderMessagesComponent = class ViewProviderMessagesComponent {
  constructor(conversationsService, usersService, activatedRoute, sharedExperiencesService, reservationService) {
    this.conversationsService = conversationsService;
    this.usersService = usersService;
    this.activatedRoute = activatedRoute;
    this.sharedExperiencesService = sharedExperiencesService;
    this.reservationService = reservationService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.openedInfo = false;
  }
  ngOnInit() {
    //get current user
    this.getCurrentUser();
  }
  //get id to compare the others chat participants 
  getCurrentUser() {
    this.usersService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: user => {
        this.getConversationId();
        this.currentUserId = user.id;
      }
    });
  }
  getConversationId() {
    //get conversation id from route
    this.activatedRoute.params.subscribe(params => {
      this.conversationId = params['idConversation'];
      if (this.conversationId) {
        this.getConversationById(this.conversationId);
      }
    });
  }
  //get data for conv info from header
  getUserById(id) {
    if (id !== this.currentUserId) {
      this.usersService.getUserById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: user => {
          this.convParticipantData = user;
          // this.convParticipantID=user.id;
        }
      });
    }
  }

  getConversationById(id) {
    this.conversationsService.getConversationById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentConversation = res;
        console.log(this.currentConversation);
        //reservation
        if (res.participants.length === 2) {
          res.participants.forEach(idUserParticipant => {
            // this.convParticipantID=(idUserParticipant === this.currentUserId ? 'nimic' : idUserParticipant);
            if (idUserParticipant.userId !== this.currentUserId) {
              this.convParticipantID = idUserParticipant.userId;
              return;
            }
          });
          this.getUserById(this.convParticipantID);
          this.getReservationById(res.id);
        }
      }
    });
  }
  //get reservation for info
  getReservationById(idReservation) {
    this.reservationService.getReservationById(idReservation).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.reservationData = res;
        // this.getUserById(res.userId);
      }
    });
  }
  //show reservation info button
  displayInfo() {
    this.openedInfo = !this.openedInfo;
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__.MessagesConversationsService
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: src_app_shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_4__.SharedExperiencesService
  }, {
    type: src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__.ReservationsService
  }];
};
ViewProviderMessagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-view-provider-messages',
  template: _view_provider_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [(_view_provider_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ViewProviderMessagesComponent);


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

/***/ 229:
/*!****************************************************************!*\
  !*** ./src/app/shared/_services/shared-experiences.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedExperiencesService": () => (/* binding */ SharedExperiencesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let SharedExperiencesService = class SharedExperiencesService {
  constructor(http) {
    this.http = http;
  }
  listSharedExperiencesFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listSharedExperienceFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  getSharedExperienceById(sharedExperienceId) {
    return this.http.get('/bestinform/getSharedExperienceById?sharedExperienceId=' + sharedExperienceId);
  }
  getSharedExperienceBySlug(sharedExperienceSlug) {
    return this.http.get('/bestinform/getSharedExperienceBySlug?slug=' + sharedExperienceSlug);
  }
  createSharedExperience(sharedExperience) {
    return this.http.post('/bestinform/addSharedExperience', sharedExperience);
  }
  updateSharedExperience(sharedExperienceId, sharedExperience) {
    return this.http.put('/bestinform/updateSharedExperience?sharedExperienceId=' + sharedExperienceId, sharedExperience);
  }
  requestToJoinSharedExperience(sharedExperienceId) {
    return this.http.post('/bestinform/askToJoinSharedExperience?sharedExperienceId=' + sharedExperienceId, {});
  }
  respondToRequest(sharedExperienceId, guestUserId, accepted) {
    return this.http.post('/bestinform/acceptRequestToJoinSharedExperience?sharedExperienceId=' + sharedExperienceId + '&guestUserId=' + guestUserId + '&acceptRequest=' + accepted, {});
  }
  deleteParticipantFromExperience(sharedExperienceId, participantId) {
    return this.http.delete('/bestinform/deleteParticipantFromSharedExperience?sharedExperienceId=' + sharedExperienceId + '&participantId=' + participantId);
  }
  leaveSharedExperience(sharedExperienceId) {
    return this.http.post('/bestinform/leaveSharedExperience?sharedExperienceId=' + sharedExperienceId, {});
  }
  deleteSharedExperience(sharedExperienceId) {
    return this.http.delete('/bestinform/deleteSharedExperience?sharedExperienceId=' + sharedExperienceId);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
SharedExperiencesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], SharedExperiencesService);


/***/ }),

/***/ 52213:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/role-provider/view-provider-messages/view-provider-messages.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.view-message-container {\n  background-color: var(--primary-background);\n  padding: 0px;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n\n.hidden-info {\n  padding: 16px;\n  background: rgba(36, 57, 138, 0.08);\n}\n.hidden-info h4 {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.hidden-info p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.hidden-info i {\n  margin: 4px;\n}\n.hidden-info .red {\n  color: red;\n}\n.hidden-info .opacity {\n  opacity: 0.5;\n}\n\n.info-not-display {\n  display: none;\n}\n\n.info-display {\n  display: block;\n}\n\n.conversation-header-class {\n  padding: 16px 24px;\n  gap: 8px;\n  height: 90px;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n}\n.conversation-header-class img {\n  width: 58px;\n  height: 58px;\n  border-radius: 100px;\n}\n.conversation-header-class h4 {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.conversation-header-class p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  color: #24398A;\n  opacity: 0.48;\n  margin-bottom: 0px;\n}\n.conversation-header-class i {\n  width: 18px;\n  height: 18px;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 140%;\n  /* or 17px */\n  letter-spacing: 0.1px;\n  /* Primary */\n  color: #24398A;\n}\n\n.conversation-component-container {\n  padding: 16px 24px;\n  gap: 8px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-provider/view-provider-messages/view-provider-messages.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAkBJ;;AAfA;EACI,aAAA;EACA,mCAAA;AAkBJ;AAjBI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDXI;ECYJ,kBAAA;AAmBR;AAjBI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDlBI;ECoBJ,kBAAA;AAkBR;AAhBI;EACI,WAAA;AAkBR;AAhBI;EACI,UAAA;AAkBR;AAhBI;EACI,YAAA;AAkBR;;AAdA;EACI,aAAA;AAiBJ;;AAfA;EACI,cAAA;AAkBJ;;AAfA;EACI,kBAAA;EACA,QAAA;EACA,YAAA;EACA,4FAAA;EACA,2CAAA;AAkBJ;AAhBI;EACI,WAAA;EACA,YAAA;EACA,oBAAA;AAkBR;AAhBI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDxDI;ECyDJ,kBAAA;AAkBR;AAhBI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDpEQ;ECqER,aAAA;EACA,kBAAA;AAkBR;AAhBI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAGA,qBAAA;EAEA,YAAA;EAEA,cDtFQ;ACoGhB;;AAXA;EACI,kBAAA;EACA,QAAA;AAcJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\n.view-message-container{\n    background-color: var(--primary-background);\n    padding:0px;\n    border-radius: 8px;\n    overflow: hidden;\n    margin-bottom:20px;\n}\n\n.hidden-info{\n    padding:16px;\n    background: rgba(36, 57, 138, 0.08);\n    h4{\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 140%;\n        color: $paragraph;\n        margin-bottom: 0px;\n    }\n    p{\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 140%;\n        color: $paragraph;\n        // opacity: 0.48;\n        margin-bottom:0px;\n    }\n    i{\n        margin:4px;\n    }\n    .red{\n        color: red;\n    }\n    .opacity{\n        opacity: 0.5;\n    }\n}\n\n.info-not-display{\n    display: none;\n}\n.info-display{\n    display: block;\n}\n\n.conversation-header-class{\n    padding: 16px 24px;\n    gap: 8px;\n    height: 90px;\n    background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n\n    img{\n        width: 58px;\n        height: 58px;\n        border-radius: 100px;\n    }\n    h4{\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 140%;\n        color: $paragraph;\n        margin-bottom: 0px;\n    }\n    p{\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 140%;\n        color: $primary-color;\n        opacity: 0.48;\n        margin-bottom:0px;\n    }\n    i{\n        width: 18px;\n        height: 18px;\n        font-style: normal;\n        font-weight: 900;\n        font-size: 12px;\n        line-height: 140%;\n        /* or 17px */\n\n\n        letter-spacing: 0.1px;\n\n        /* Primary */\n\n        color: $primary-color;\n    }\n}\n.conversation-component-container{\n    padding: 16px 24px;\n    gap: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 27974:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/role-provider/view-provider-messages/view-provider-messages.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Title bar-->\n<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Mesagerie\"\n        [buttonBackRoute]=\"'/private/provider/inbox'\">\n        </app-dashboard-header>\n    </div>\n\n    <div *ngIf=\"convParticipantData && (currentConversation?.category === 'reservation')\" class=\"container view-message-container\">\n        <!--Reservation-->\n        <div  class=\"conversation-header-class d-flex justify-content-between align-items-center\">\n            <!-- img, name, email -->\n            <div class=\"d-flex justify-content-start align-items-center gap-3\">\n                <img src=\"{{((currentConversation?.featuredImage !== null) && (currentConversation?.featuredImage?.filePath !== 'string')) ? currentConversation?.featuredImage?.filePath : '../../../../../../../assets/images/others/user.jpg'}}\">\n                <div>\n                    <h4>{{convParticipantData?.firstName +' '+ convParticipantData?.lastName}}</h4>\n                    <p>{{convParticipantData?.email}}</p>\n                </div>\n            </div>\n         <!-- info button -->\n         <div class=\"d-flex align-items-center\" >\n            <button (click)=\"displayInfo()\" class=\"btn-round btn-color-outline\"><i class=\"fas fa-info\"></i></button>\n        </div>\n\n        </div>\n\n         <!--info button-->\n         <div [ngClass]=\"openedInfo ? 'info-display' : 'info-not-display'\">\n            <div class=\"hidden-info row align-items-center\" *ngIf=\"(currentConversation?.category === 'reservation')\" >\n                <div class=\"col-4\">\n                    <h4>Reservation nr. {{reservationData?.reservationNumber}}</h4>\n                    <p class=\"opacity\">{{reservationData?.name}}</p>\n                </div>\n                <div class=\"col-4\">\n                    <p><i class=\"fas fa-envelope\"></i> {{convParticipantData?.email}}</p>\n                    <p><i class=\"fas fa-phone-alt\"></i>{{convParticipantData?.telephone}}</p>\n                </div>\n                <div class=\"col-4 d-flex justify-content-end align-items-center gap-2\">\n                    <p><i class=\"fas fa-ban\"></i> cancel reservation</p>\n                    <p class=\"red opacity\"><i class=\"fas fa-exclamation-triangle\"></i> report user</p>\n\n                </div>\n            </div>\n         </div>\n\n\n        <div class=\"conversation-component-container\">\n            <app-conversation [conversationID]=\"conversationId\"></app-conversation>\n        </div>\n    </div>\n\n    <!--bestinfoorm support-->\n\n    <div *ngIf=\"currentConversation && (currentConversation?.category === 'bestinformSupport')\" class=\"container view-message-container\">\n        <!--Reservation-->\n        <div class=\"conversation-header-class d-flex justify-content-between align-items-center\">\n            <!-- img, name, email -->\n            <div  class=\"d-flex justify-content-start align-items-center gap-3\">\n                <img src=\"{{((currentConversation?.featuredImage !== null) && (currentConversation?.featuredImage?.filePath !== 'string')) ? currentConversation?.featuredImage?.filePath : '../../../../../../../assets/images/others/user.jpg'}}\">\n                <div>\n                    <h4>Bestinform</h4>\n                    <!-- <p>{{convParticipantData?.email}}</p> -->\n                </div>\n            </div>\n         <!-- info button -->\n            <div class=\"d-flex align-items-center\" >\n                <button (click)=\"displayInfo()\" class=\"btn-round btn-color-outline\"><i class=\"fas fa-info\"></i></button>\n            </div>\n\n        </div>\n\n         <!--info button-->\n         <div [ngClass]=\"openedInfo ? 'info-display' : 'info-not-display'\">\n            <div class=\"hidden-info row align-items-center\" *ngIf=\"(currentConversation?.category === 'reservation')\" >\n\n                <!-- <div class=\"col-4\">\n                    <h4>Reservation nr. {{reservationData?.reservationNumber}}</h4>\n                    <p class=\"opacity\">{{reservationData?.name}}</p>\n                </div>\n                <div class=\"col-4\">\n                    <p><i class=\"fas fa-envelope\"></i> {{convParticipantData?.email}}</p>\n                    <p><i class=\"fas fa-phone-alt\"></i>{{convParticipantData?.telephone}}</p>\n                </div>\n                <div class=\"col-4 d-flex justify-content-end align-items-center gap-2\">\n                    <p><i class=\"fas fa-ban\"></i> cancel reservation</p>\n                    <p class=\"red opacity\"><i class=\"fas fa-exclamation-triangle\"></i> report user</p>\n\n                </div> -->\n            </div>\n         </div>\n\n\n        <div class=\"conversation-component-container\">\n            <app-conversation [conversationID]=\"conversationId\"></app-conversation>\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_role-provider_view-provider-messages_view-provider-messages_componen-fb491b.js.map