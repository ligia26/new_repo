(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_shared__services_reservations_service_ts-src_app_standalone-components_all-no-f71d7e"],{

/***/ 33869:
/*!********************************************************************!*\
  !*** ./src/app/shared/_services/messages-conversations.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesConversationsService": () => (/* binding */ MessagesConversationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let MessagesConversationsService = class MessagesConversationsService {
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
  //CONVERSATIONS
  //update conversation
  updateConversation(conversationId, conversationObj) {
    return this.http.put("/bestinform/updateConversation?conversationId=" + conversationId, conversationObj);
  }
  //remove user from conversation
  removeUserFromConversation(conversationId, userId) {
    return this.http.post("/bestinform/removeUserFromConversation?conversationId=" + conversationId + "&userId=" + userId, {});
  }
  //leave conversation
  leaveConversation(conversationId) {
    return this.http.post("/bestinform/leaveConversation?conversationId=" + conversationId, {});
  }
  //create new conversation
  createConversation(category, name) {
    return this.http.post("/bestinform/createConversation?category=" + category + '&name=' + name, []);
  }
  //add user to conversation
  addUserToConversation(conversationId, userId) {
    return this.http.post("/bestinform/addUserToConversation?conversationId=" + conversationId + "&userId=" + userId, {});
  }
  //get conversation by Id
  getConversationById(conversationId) {
    return this.http.get("/bestinform/getConversationById?conversationId=" + conversationId);
  }
  //list conversation filter
  listConversationFiltered(category, page, size, sort, dir) {
    return this.http.post('/bestinform/listConversationFiltered?category=' + category + '&page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, {});
  }
  //list Bestinorm conversation filter
  listBestinformConversationFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listBestinformConversationFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  //MESSAGES
  //send message
  sendMessage(conversationId, messageObj) {
    return this.http.post('/bestinform/sendMessage?conversationId=' + conversationId, messageObj);
  }
  //list message filter
  listMessageFiltered(conversationId, page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listMessageFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir + '&conversationId=' + conversationId, filters);
  }
  //get message by id
  getMessageById(messageId) {
    return this.http.get('/bestinform/getMessageById?messageId=' + messageId);
  }
  //delete message
  deleteMessage(messageId) {
    return this.http.delete("/bestinform/deleteMessage?messageId=" + messageId);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
MessagesConversationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], MessagesConversationsService);


/***/ }),

/***/ 84803:
/*!**********************************************************!*\
  !*** ./src/app/shared/_services/reservations.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationsService": () => (/* binding */ ReservationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let ReservationsService = class ReservationsService {
  // Trigger list changes
  triggerListChanges(message) {
    // Change the subject value
    this.listChanged.next(message);
  }
  constructor(http) {
    this.http = http;
    this.reservationId = null;
    // Functions For Changes Detection
    this.listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.listChangedObs = this.listChanged.asObservable();
  }
  setReservationId(reservationId) {
    return this.reservationId = reservationId;
  }
  //list reservations
  listReservationFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listReservationFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  //get reservation by id
  getReservationById(reservationId) {
    return this.http.get('/bestinform/getReservationById?reservationId=' + reservationId);
  }
  //change validity status
  changeValidityStatus(status, reservationId) {
    return this.http.put('/bestinform/changeValidityStatus?status=' + status + '&reservationId=' + reservationId, {});
  }
  //changeReservationStatus
  changeReservationStatus(status, reservationId, canceledReason) {
    return this.http.put('/bestinform/changeReservationStatus?status=' + status + '&reservationId=' + reservationId, canceledReason);
  }
  // createReservationTimeSlot
  createReservationTimeSlot(resourceId, reservationObj) {
    return this.http.post('/bestinform/createReservationTimeSlot?resourceId=' + resourceId, reservationObj);
  }
  // createReservationTimePicker
  createReservationTimePicker(resourceId, reservationObj) {
    return this.http.post('/bestinform/createReservationTimePicker?resourceId=' + resourceId, reservationObj);
  }
  // createReservationRentalBooking
  createReservationRentalBooking(resourceId, reservationObj) {
    return this.http.post('/bestinform/createReservationRentalBooking?resourceId=' + resourceId, reservationObj);
  }
  // createReservationProduct
  createReservationProduct(resourceId, reservationObj) {
    return this.http.post('/bestinform/createReservationProduct?resourceId=' + resourceId, reservationObj);
  }
  // createReservationCulturalBooking
  createReservationCulturalBooking(resourceId, reservationObj) {
    return this.http.post('/bestinform/createReservationCulturalBooking?resourceId=' + resourceId, reservationObj);
  }
  // createReservationCarBooking
  createReservationCarBooking(resourceId, reservationObj) {
    return this.http.post('/bestinform/createReservationCarBooking?resourceId=' + resourceId, reservationObj);
  }
  // createJobAplication
  createJobAplication(resourceId) {
    return this.http.post('/bestinform/createJobAplication?resourceId=' + resourceId, {});
  }
  // buyTickets
  buyTickets(resourceId, reservationObj) {
    return this.http.post('/bestinform/buyTickets?resourceId=' + resourceId, reservationObj);
  }
  // getUserListJobApplication
  getUserListJobApplication(resourceId) {
    return this.http.get('/bestinform/getUserListJobApplication?resourceId=' + resourceId);
  }
  // getReservationBySlug
  getReservationBySlug(slug) {
    return this.http.get('/bestinform/getReservationBySlug?slug=' + slug);
  }
  updateReservation(reservationId, reservation) {
    return this.http.put('/bestinform/updateReservation?reservationId=' + reservationId, reservation);
  }
  // START: CHECK AVAILABILITY (before updating the reservation)
  getNewAvailablePickerItems(bookingTimePickerId, date, hour, reservationId) {
    return this.http.get('/bestinform/getNewAvailablePickerItems?bookingTimePickerId=' + bookingTimePickerId + '&date=' + date + '&hour=' + hour + '&reservationId=' + reservationId);
  }
  getNewAvailableRooms(resourceId, startTime, endTime, reservationId) {
    return this.http.post('/bestinform/getNewAvailableRooms?resourceId=' + resourceId + '&startTime=' + startTime + '&endTime=' + endTime + '&reservationId=' + reservationId, {});
  }
  // END: CHECK AVAILABILITY
  //trip reservation
  listTripReservationFiltered(pageNumber, pageSize, sort, dir, filters) {
    return this.http.post('/bestinform/listTripReservationsFiltered?page=' + pageNumber + '&size=' + pageSize + '&sort=' + sort + '&dir=' + dir, filters);
  }
  getTripById(tripId) {
    return this.http.get('/bestinform/getTripById?tripId=' + tripId);
  }
  markReservationAsRead(read, reservationId) {
    return this.http.put('/bestinform/markReservationAsRead?read=' + read + '&reservationId=' + reservationId, {});
  }
  //change validity status
  sendClientEmail(reservationId, message) {
    return this.http.put('/bestinform/sendClientEmail?reservationId=' + reservationId, message);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
ReservationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ReservationsService);


/***/ }),

/***/ 97376:
/*!****************************************************************************************!*\
  !*** ./src/app/standalone-components/all-notifications/all-notifications.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllNotificationsComponent": () => (/* binding */ AllNotificationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _all_notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-notifications.component.html?ngResource */ 97526);
/* harmony import */ var _all_notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-notifications.component.scss?ngResource */ 2301);
/* harmony import */ var _all_notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_all_notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/notifications.service */ 77346);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 36060);













let AllNotificationsComponent = class AllNotificationsComponent {
  constructor(userData, router, notificationsService, cdr, toastService) {
    this.userData = userData;
    this.router = router;
    this.notificationsService = notificationsService;
    this.cdr = cdr;
    this.toastService = toastService;
    this.listNotification = [];
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.user = null;
    this.pageSize = 10;
    this.pageSizeArray = [10, 25, 50, 100];
    this.pageNumber = 0;
    this.totalElements = 0;
  }
  ngOnInit() {
    this.getCurrentUser();
    // Listen to List Changes
    this.listChanged();
  }
  listChanged() {
    this.notificationsService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get Documents List
        this.getNotificationsList();
        this.cdr.detectChanges();
        this.notificationsService.triggerUserListChanges(false);
      }
    });
  }
  getCurrentUser() {
    this.userData.getCurrentUser().subscribe(res => {
      this.user = {
        ...res
      };
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(0, 60000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(() => this.getNotificationsList());
      if (res.roles.includes('ROLE_CLIENT')) {
        this.isClient = true;
      }
      if (res.roles.includes('ROLE_PROVIDER')) {
        this.isProvider = true;
      }
      res.roles.forEach(role => {
        if (role === 'ROLE_SUPER_ADMIN') {
          this.isAdmin = true;
          this.isStaff = false;
        } else if (role === 'ROLE_STAFF') {
          this.isAdmin = false;
          this.isStaff = true;
        }
      });
    });
  }
  getNotificationsList() {
    this.unreadMessagesNumber = 0;
    this.notificationsService.listMyNotifications(this.pageNumber, this.pageSize, 'date', 'desc').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(response => {
      this.listNotification = response.content;
      this.totalElements = response.totalElements;
      response.content.forEach(element => {
        if (element.read === false) {
          this.unreadMessagesNumber = ++this.unreadMessagesNumber;
        }
      });
    });
  }
  pageChanged(event) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getNotificationsList();
  }
  markAllAsRead() {
    this.notificationsService.markAllNotificationAsRead().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(response => {
      this.notificationsService.triggerUserListChanges(true);
      this.toastService.showToast('Succes', 'Mesajele au fost marcate ca citite!', 'success');
    });
  }
  markAsRead(idNotification) {
    this.notificationsService.markNotificationAsRead(idNotification).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(response => {
      this.notificationsService.triggerUserListChanges(true);
      this.toastService.showToast('Succes', 'Mesaj marcat ca citit!', 'success');
    });
  }
  goToNotificationObject(notification) {
    if (!notification.objectType || !notification.objectId) return;
    switch (notification.objectType) {
      case "friendRequest":
        {
          switch (true) {
            case this.isClient:
              {
                void this.router.navigate(['/client/dashboard/profile'], {
                  queryParams: {
                    tab: 'friends'
                  }
                });
                break;
              }
            /*case (this.isProvider): {
                void this.router.navigate([]);
                break;
            }*/
            /*case (this.isStaff): {
                void this.router.navigate([]);
                break;
            }*/
            /*case (this.isAdmin): {
                void this.router.navigate([]);
                break;
            }*/
          }

          break;
        }
      case "message":
        {
          switch (true) {
            case this.isClient:
              {
                void this.router.navigate([`/client/dashboard/inbox/${notification.objectId}`]);
                break;
              }
            case this.isProvider:
              {
                void this.router.navigate([`/private/provider/inbox/${notification.objectId}`]);
                break;
              }
            case this.isStaff:
              {
                void this.router.navigate([`/private/staff/inbox/${notification.objectId}`]);
                break;
              }
            case this.isAdmin:
              {
                void this.router.navigate([`/private/admin/inbox/${notification.objectId}`]);
                break;
              }
          }
          break;
        }
      case "reservation":
        {
          switch (true) {
            case this.isClient:
              {
                void this.router.navigate([`/client/dashboard/my-booking/view/${notification.objectId}`]);
                break;
              }
            case this.isProvider:
              {
                void this.router.navigate([`/private/provider/reservations/view/${notification.objectId}`]);
                break;
              }
            case this.isStaff:
              {
                void this.router.navigate([`/private/staff/reservations/view/${notification.objectId}`]);
                break;
              }
            case this.isAdmin:
              {
                void this.router.navigate([`/private/admin/reservations/view/${notification.objectId}`]);
                break;
              }
          }
          break;
        }
      case "resource":
        {
          switch (true) {
            case this.isClient:
              {
                void this.router.navigate([`/client/events/view/${notification.objectSlug}`]);
                break;
              }
            case this.isProvider:
              {
                void this.router.navigate([`/private/provider/resources/edit/${notification.objectId}`]);
                break;
              }
            case this.isStaff:
              {
                void this.router.navigate([`/private/staff/resources/edit/${notification.objectId}`]);
                break;
              }
            case this.isAdmin:
              {
                void this.router.navigate([`/private/admin/resources/edit/${notification.objectId}`]);
                break;
              }
          }
          break;
        }
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
  }];
};
AllNotificationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-all-notifications',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_2__.DashboardHeaderComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule],
  template: _all_notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_all_notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AllNotificationsComponent);


/***/ }),

/***/ 51440:
/*!******************************************************************************!*\
  !*** ./src/app/standalone-components/conversation/conversation.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationComponent": () => (/* binding */ ConversationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _conversation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation.component.html?ngResource */ 35500);
/* harmony import */ var _conversation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversation.component.scss?ngResource */ 37835);
/* harmony import */ var _conversation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_conversation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/messages-conversations.service */ 33869);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 34497);















let ConversationComponent = class ConversationComponent {
  constructor(formBuilder, conversationsServices, usersService, scroller, datePipe, sanitizer) {
    this.formBuilder = formBuilder;
    this.conversationsServices = conversationsServices;
    this.usersService = usersService;
    this.scroller = scroller;
    this.datePipe = datePipe;
    this.sanitizer = sanitizer;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.sendMessageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.noWhitespaceValidator()]);
    this.messageToSend = {};
    //list of messages
    this.messageList = [];
    //before this, hr-today divider
    this.setTodayArray = [];
    this.today = new Date();
    this.isTodayMsg = false;
  }
  ngOnInit() {
    this.initData();
  }
  initData() {
    console.log('id conversatie', this.conversationID);
    this.getCurrentUser();
    this.getIdConversation();
  }
  makeLinksClickable(text) {
    // Regular expression to match URLs with or without http/https prefix
    const urlRegex = /((http(s)?:\/\/)|(www\.))[^\s]+/g;
    // Replace URLs with anchor tags
    const linkedText = text.replace(urlRegex, url => {
      // Check if the URL starts with "www." and add "http://" if not
      if (url.startsWith("www.")) {
        url = "https://" + url;
      }
      return `<a href="${url}" class="message-link" target="_blank">${url}</a>`;
    });
    // Sanitize the HTML to prevent security issues
    return this.sanitizer.bypassSecurityTrustHtml(linkedText);
  }
  // Function to process messages and add hyperlinks
  processMessages(messages) {
    return messages.map(message => {
      return {
        ...message,
        text: this.makeLinksClickable(message.text)
      };
    });
  }
  get processedMessages() {
    return this.processMessages(this.messageList);
  }
  isLink(text) {
    // Regular expression to match URLs with or without http/https prefix
    const urlRegex = /((https?:\/\/)|(www\.[^\s]+))/g;
    // Test if the text contains a match to the URL regex
    return urlRegex.test(text);
  }
  //get current user data for message list
  getCurrentUser() {
    this.usersService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: user => {
        console.log('USERUL MEU', user);
        this.userData = user;
        this.currentUserId = this.userData.id;
        if (this.currentUserId) {
          this.getIdConversation();
        }
      }
    });
  }
  // Listen to data changes and refresh the user list
  listChanges() {
    this.conversationsServices.triggerListChanges(true);
    this.getMessagesList();
  }
  //get id conversation from reservation
  getIdConversation() {
    this.conversationId = this.conversationID;
    this.getConversationById(this.conversationID);
    if (this.conversationId) {
      this.getMessagesList();
    }
  }
  getConversationById(idConv) {
    this.conversationsServices.getConversationById(idConv).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: conversation => {
        this.conversationData = conversation;
      }
    });
  }
  //
  // checkToday(date:any){
  //   const today=this.datePipe.transform(this.today, 'dd/MM/YYYY');
  //   const msgDate= this.datePipe.transform(date, 'dd/MM/YYYY');
  //   this.isTodayMsg = (today === msgDate) ? true : false;
  //   return;
  // }
  sendMessage() {
    //tratam daca cumva trebuie adaugate si atasamente
    if (this.sendMessageForm.valid) {
      this.messageToSend.text = this.sendMessageForm.value;
      console.log(this.messageToSend);
      //if the message is not null
      if (this.messageToSend.text !== '') {
        this.conversationsServices.sendMessage(this.conversationId, this.messageToSend).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: res => {
            this.sendMessageForm.reset();
            this.listChanges();
            //this.getMessagesList();
            console.log('s-a trimis:', res, this.conversationId, this.messageToSend);
          },
          error: error => {
            console.log('nu s-a trimis:', error, this.conversationId, this.messageToSend);
          }
        });
      } else {
        console.log('invalid message');
      }
    }
  }
  noWhitespaceValidator() {
    return control => {
      const value = control.value;
      if (value && value.trim().length === 0) {
        return {
          noWhitespace: true
        };
      }
      return null;
    };
  }
  getMessagesList() {
    const filters = {
      // userId: ,
      // text: ''
    };
    this.conversationsServices.listMessageFiltered(this.conversationID, 0, -1, 'date', 'asc', filters).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.messageList = res.content;
        console.log(this.messageList);
      }
    });
  }
  getUserById(id) {
    this.usersService.getUserById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: user => {
        this.nameUser = user?.lastName + ' ' + user?.firstName + ': ';
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__.MessagesConversationsService
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.ViewportScroller
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
  }];
  static #_2 = this.propDecorators = {
    conversationID: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  };
};
ConversationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-conversation',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule],
  template: _conversation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_conversation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ConversationComponent);


/***/ }),

/***/ 54021:
/*!**************************************************************************************!*\
  !*** ./src/app/standalone-components/dashboard-header/dashboard-header.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardHeaderComponent": () => (/* binding */ DashboardHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-header.component.html?ngResource */ 88876);
/* harmony import */ var _dashboard_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-header.component.scss?ngResource */ 75770);
/* harmony import */ var _dashboard_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







let DashboardHeaderComponent = class DashboardHeaderComponent {
  constructor() {
    this.isCallUsed = false;
    this.isExtraCallUsed = false;
    this.isBackCallUsed = false;
    this.buttonCall = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.buttonExtraCall = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.buttonBackCall = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  handleCall() {
    this.buttonCall.emit();
  }
  handleExtraCall() {
    this.buttonExtraCall.emit();
  }
  handleBackCall() {
    this.buttonBackCall.emit();
  }
  ngOnInit() {
    this.isBackCallUsed = this.buttonBackCall.observed;
    this.isCallUsed = this.buttonCall.observed;
    this.isExtraCallUsed = this.buttonExtraCall.observed;
  }
  static #_ = this.propDecorators = {
    pageTitleOne: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    routeTitleOne: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    pageTitleTwo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    routeTitleTwo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    pageTitleThree: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    routeTitleThree: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonBackRoute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonAddRoute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonCallName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonCall: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    buttonExtraName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonExtraCall: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    buttonBackName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    buttonBackCall: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  };
};
DashboardHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule],
  template: _dashboard_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dashboard_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DashboardHeaderComponent);


/***/ }),

/***/ 2301:
/*!*****************************************************************************************************!*\
  !*** ./src/app/standalone-components/all-notifications/all-notifications.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content {\n  background-color: var(--primary-background);\n  padding: 0px;\n  margin-bottom: 34px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.second-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0px;\n  margin-bottom: 34px;\n  height: 286px;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.12), rgba(36, 57, 138, 0.12)), #FFFFFF;\n  border-radius: 8px;\n}\n.second-content h4 {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  color: #24398A;\n  opacity: 0.48;\n}\n\np {\n  margin-bottom: 0px;\n}\n\n.content .header-notifications {\n  background-color: #24398A;\n  padding: 13px 24px;\n}\n.content .header-notifications h5 {\n  font-style: normal;\n  color: white;\n  margin-bottom: 0px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n}\n.content .header-notifications h6 {\n  font-family: \"Roboto\";\n  font-style: normal;\n  color: white;\n  margin-bottom: 0px;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 160%;\n  cursor: pointer;\n}\n.content .all-notifications .read-bkg {\n  background-color: white;\n}\n.content .all-notifications .unread-bkg {\n  background-color: rgba(36, 57, 138, 0.08);\n  border-left: 2px solid #FFCC04;\n}\n.content .all-notifications .notification-single-card {\n  height: 66px;\n  padding: 17px 25px;\n}\n.content .all-notifications .notification-single-card:hover {\n  cursor: pointer;\n  background-color: rgba(36, 57, 138, 0.3);\n}\n.content .all-notifications .notification-single-card .icon-notif {\n  width: 30px;\n  height: 30px;\n  margin-right: 14px;\n  border-radius: 50%;\n}\n.content .all-notifications .notification-single-card p.message-notif {\n  font-style: normal;\n  color: #231F20;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n.content .all-notifications .notification-single-card p.time-notif {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  color: #24398A;\n  opacity: 0.48;\n}\n.content .all-notifications .notification-single-card .check-notif i {\n  cursor: pointer;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 14px;\n  line-height: 16px;\n  color: #24398A;\n  opacity: 0.48;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/all-notifications/all-notifications.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACI,2CAAA;EACA,YAAA;EACA,mBAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,gBAAA;AAiBJ;;AAdA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EAEA,aAAA;EAEA,4FAAA;EACA,kBAAA;AAeJ;AAbI;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;AAeR;;AAXA;EACI,kBAAA;AAcJ;;AAVI;EACI,yBD3CQ;EC4CR,kBAAA;AAaR;AAXQ;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAaZ;AAXQ;EACI,qBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EAEA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;AAYZ;AANQ;EACI,uBAAA;AAQZ;AAJQ;EACI,yCAAA;EACA,8BAAA;AAMZ;AAHQ;EAMI,YAAA;EACA,kBAAA;AAAZ;AANY;EACI,eAAA;EACA,wCAAA;AAQhB;AAFY;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AAIhB;AADY;EACI,kBAAA;EACA,cD5FJ;EC6FI,gBAAA;EACA,eAAA;EACA,iBAAA;EAGA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAChB;AAEY;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDpHA;ECqHA,aAAA;AAAhB;AAGY;EACI,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD9HA;EC+HA,aAAA;AADhB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n\n.content{\n    background-color: var(--primary-background);\n    padding: 0px;\n    margin-bottom:34px;\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n    overflow: hidden;\n}\n\n.second-content{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0px;\n    margin-bottom: 34px;\n\n    height: 286px;\n\n    background: linear-gradient(0deg, rgba(36, 57, 138, 0.12), rgba(36, 57, 138, 0.12)), #FFFFFF;\n    border-radius: 8px;\n\n    h4{\n        font-style: normal;\n        font-weight: 700;\n        font-size: 16px;\n        line-height: 140%;\n        display: flex;\n        align-items: center;\n        color: #24398A;\n        opacity: 0.48;\n    }\n}\n\np{\n    margin-bottom: 0px;\n}\n\n.content{\n    .header-notifications{\n        background-color: $primary-color;\n        padding: 13px 24px;\n\n        h5{\n            font-style: normal;\n            color: white;\n            margin-bottom: 0px;\n            font-weight: 400;\n            font-size: 16px;\n            line-height: 140%;\n        }\n        h6{\n            font-family: 'Roboto';\n            font-style: normal;\n            color: white;\n            margin-bottom: 0px;\n\n            font-weight: 300;\n            font-size: 16px;\n            line-height: 160%;\n            cursor: pointer;\n        }\n    }\n\n    .all-notifications{\n\n        .read-bkg{\n            background-color: white;\n\n        }\n\n        .unread-bkg{\n            background-color: rgba($primary-color,0.08);\n            border-left: 2px solid #FFCC04;\n        }\n\n        .notification-single-card{\n            &:hover {\n                cursor: pointer;\n                background-color: rgba($primary-color, 0.3);\n            }\n\n            height: 66px;\n            padding: 17px 25px;\n\n            .icon-notif{\n                width: 30px;\n                height: 30px;\n                margin-right: 14px;\n                border-radius: 50%;\n            }\n\n            p.message-notif{\n                font-style: normal;\n                color: $paragraph;\n                font-weight: 400;\n                font-size: 16px;\n                line-height: 18px;\n\n\n                overflow: hidden;\n                text-overflow: ellipsis;\n                display: -webkit-box;\n                -webkit-line-clamp: 1;\n                /* autoprefixer: ignore next */\n                -webkit-box-orient: vertical;\n            }\n\n            p.time-notif{\n                font-style: normal;\n                font-weight: 400;\n                font-size: 12px;\n                line-height: 14px;\n                color: $primary-color;\n                opacity: 0.48;\n            }\n\n            .check-notif i{\n                cursor: pointer;\n                font-style: normal;\n                font-weight: 900;\n                font-size: 14px;\n                line-height: 16px;\n                color: $primary-color;\n                opacity: 0.48;\n            }\n        }\n\n    }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 37835:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/conversation/conversation.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.conversation-general-class {\n  background-color: var(--primary-background);\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n\n.conversation-general-class .conversationBox {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 560px;\n  margin-bottom: 20px;\n}\n.conversation-general-class .align-message-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: end;\n}\n.conversation-general-class .align-message-left {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: start;\n}\n.conversation-general-class .message-class {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 126%;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0px;\n  /* or 18px */\n  letter-spacing: -0.02em;\n}\n.conversation-general-class .message-class.reciver-bubble-message {\n  display: flex;\n  align-items: flex-start;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), rgba(255, 255, 255, 0.72);\n  box-shadow: 0px 4px 4px rgba(36, 57, 138, 0.08);\n  border-radius: 0px 8px 8px 8px;\n  padding: 8px;\n  color: #231F20;\n}\n.conversation-general-class .message-class.current-user-bubble-message {\n  display: flex;\n  align-items: flex-end;\n  background: #24398A;\n  box-shadow: 0px 4px 4px rgba(36, 57, 138, 0.08);\n  border-radius: 8px 0px 8px 8px;\n  padding: 8px;\n  color: white;\n}\n.conversation-general-class .sending-date-time {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  display: flex;\n  color: #24398A;\n  opacity: 0.5;\n}\n.conversation-general-class .hr-text {\n  line-height: 1em;\n  position: relative;\n  outline: 0;\n  border: 0;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  text-align: center;\n  letter-spacing: -0.02em;\n  /* Primary */\n  color: #24398A;\n  opacity: 0.48;\n}\n.conversation-general-class .hr-text:before {\n  content: \"\";\n  background: linear-gradient(to right, transparent, #818078, transparent);\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  height: 1px;\n}\n.conversation-general-class .hr-text:after {\n  content: attr(data-content);\n  position: relative;\n  display: inline-block;\n  color: black;\n  padding: 0 0.5em;\n  line-height: 1.5em;\n  color: #818078;\n  background-color: #fcfcfa;\n}\n.conversation-general-class .input-message-class input {\n  height: 50px;\n  align-items: center;\n  padding: 8px 12px 8px 24px;\n  background: rgba(36, 57, 138, 0.08);\n  border-radius: 100px;\n  border: transparent;\n}\n.conversation-general-class .input-message-class input:focus, .conversation-general-class .input-message-class input:focus-visible {\n  border: 1px solid rgba(36, 57, 138, 0.5);\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/conversation/conversation.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,iBAAA;EACA,oBAAA;AAkBJ;;AAXI;EACE,kBAAA;EACA,kBAAA;EAEA,aAAA;EACA,mBAAA;AAaN;AARI;EACE,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,oBAAA;AAUN;AAPI;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,sBAAA;AASN;AALI;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,WAAA;EACA,YAAA;EAIA,uBAAA;AAIR;AAFQ;EACI,aAAA;EACA,uBAAA;EACA,8GAAA;EACA,+CAAA;EACA,8BAAA;EACA,YAAA;EACA,cDnDA;ACuDZ;AADQ;EACI,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,+CAAA;EACA,8BAAA;EACA,YAAA;EACA,YAAA;AAGZ;AAGI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,cAAA;EACA,YAAA;AADN;AAMI;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,kBAAA;EACA,uBAAA;EAEA,YAAA;EAEA,cAAA;EAEA,aAAA;AARR;AAUQ;EACE,WAAA;EAGA,wEAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,WAAA;AAVV;AAYQ;EACE,2BAAA;EACA,kBAAA;EACA,qBAAA;EACA,YAAA;EAEA,gBAAA;EACA,kBAAA;EAEA,cAAA;EACA,yBAAA;AAZV;AAiBQ;EAEE,YAAA;EACA,mBAAA;EACA,0BAAA;EACA,mCAAA;EACA,oBAAA;EACA,mBAAA;AAhBV;AAkBU;EACE,wCAAA;AAhBZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../theme/styles/components/colors\";\n\n.conversation-general-class{\n    background-color: var(--primary-background);\n    padding-top:32px;\n    padding-bottom:32px;\n}\n\n\n\n.conversation-general-class{\n\n    .conversationBox{\n      overflow-y: scroll;\n      overflow-x: hidden;\n\n      height:560px;\n      margin-bottom:20px;\n\n\n    }\n\n    .align-message-right{\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n      justify-content: end;\n    }\n\n    .align-message-left{\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: start;\n    }\n\n    //messages bubble style\n    .message-class {\n        font-style: normal;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 126%;\n        width: fit-content;\n        margin:0px;\n        /* or 18px */\n\n        // display: flex;\n        // flex-direction: column;\n        letter-spacing: -0.02em;\n\n        &.reciver-bubble-message {\n            display: flex;\n            align-items: flex-start;\n            background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), rgba(255, 255, 255, 0.72);\n            box-shadow: 0px 4px 4px rgba(36, 57, 138, 0.08);\n            border-radius: 0px 8px 8px 8px;\n            padding:8px;\n            color: $paragraph;\n        }\n\n        &.current-user-bubble-message {\n            display: flex;\n            align-items: flex-end;\n            background: #24398A;\n            box-shadow: 0px 4px 4px rgba(36, 57, 138, 0.08);\n            border-radius: 8px 0px 8px 8px;\n            padding:8px;\n            color:white;\n        }\n\n\n    }\n    //date-hour message paragraf\n    .sending-date-time{\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 18px;\n      display: flex;\n      color: #24398A;\n      opacity: 0.5;\n    }\n\n\n    //divider between days\n    .hr-text {\n        line-height: 1em;\n        position: relative;\n        outline: 0;\n        border: 0;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 140%;\n        /* identical to box height, or 17px */\n\n        text-align: center;\n        letter-spacing: -0.02em;\n\n        /* Primary */\n\n        color: #24398A;\n\n        opacity: 0.48;\n\n        &:before {\n          content: '';\n          // use the linear-gradient for the fading effect\n          // use a solid background color for a solid bar\n          background: linear-gradient(to right, transparent, #818078, transparent);\n          position: absolute;\n          left: 0;\n          top: 50%;\n          width: 100%;\n          height: 1px;\n        }\n        &:after {\n          content: attr(data-content);\n          position: relative;\n          display: inline-block;\n          color: black;\n\n          padding: 0 .5em;\n          line-height: 1.5em;\n          // this is really the only tricky part, you need to specify the background color of the container element...\n          color: #818078;\n          background-color: #fcfcfa;\n        }\n      }\n\n      .input-message-class{\n        input{\n          // height: 74px;\n          height: 50px;\n          align-items: center;\n          padding: 8px 12px 8px 24px;\n          background: rgba(36, 57, 138, 0.08);\n          border-radius: 100px;\n          border:transparent;\n\n          &:focus, &:focus-visible{\n            border: 1px solid rgba($primary-color,0.5);\n          }\n        }\n\n        //button inside input\n        // button.btn-long{\n        //   margin-left: -215px;\n        // }\n      }\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 75770:
/*!***************************************************************************************************!*\
  !*** ./src/app/standalone-components/dashboard-header/dashboard-header.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".page-titles-row h2 {\n  margin-bottom: 0;\n  opacity: 0.48;\n  cursor: pointer;\n}\n.page-titles-row h2.active-page-link {\n  opacity: 1;\n}\n.page-titles-row h2.no-pointer {\n  cursor: default;\n}\n.page-titles-row h2:not(:last-child) {\n  margin-right: 30px;\n}\n.page-titles-row h2:not(:last-child)::after {\n  content: \"/\";\n  position: absolute;\n  margin-left: 10px;\n}\n\n.titleBar {\n  padding: 35px 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/standalone-components/dashboard-header/dashboard-header.component.scss"],"names":[],"mappings":"AACE;EACE,gBAAA;EACA,aAAA;EACA,eAAA;AAAJ;AAGE;EACE,UAAA;AADJ;AAIE;EACE,eAAA;AAFJ;AAKE;EACE,kBAAA;AAHJ;AAME;EACE,YAAA;EACA,kBAAA;EACA,iBAAA;AAJJ;;AAQA;EACE,iBAAA;AALF","sourcesContent":[".page-titles-row {\n  h2 {\n    margin-bottom: 0;\n    opacity: 0.48;\n    cursor: pointer;\n  }\n\n  h2.active-page-link {\n    opacity: 1;\n  }\n\n  h2.no-pointer {\n    cursor: default;\n  }\n\n  h2:not(:last-child) {\n    margin-right: 30px;\n  }\n\n  h2:not(:last-child)::after {\n    content: '/';\n    position: absolute;\n    margin-left: 10px;\n  }\n}\n\n.titleBar {\n  padding: 35px 0px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 97526:
/*!*****************************************************************************************************!*\
  !*** ./src/app/standalone-components/all-notifications/all-notifications.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Title bar-->\n<div *ngIf=\"user\" class=\"container-fluid\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Notificari\"\n        [buttonBackRoute]=\"isAdmin ? '../dashboard'\n        : isStaff ? '../dashboard'\n        : isProvider ? '../dashboard'\n        : isClient? '/client/domain' : '/' \">\n        </app-dashboard-header>\n    </div>\n\n    <div class=\"container content\" *ngIf=\"listNotification && listNotification.length>0\">\n        <!--header-->\n        <div class=\"header-notifications d-flex justify-content-between align-item-center\">\n            <h5>{{unreadMessagesNumber}} notifications unread</h5>\n            <h6 (click)=\"markAllAsRead()\"><i class=\"fas fa-check-double\"></i> Mark as read</h6>\n        </div>\n\n        <!--notifications-->\n        <div class=\"all-notifications py-2\">\n            <div *ngFor=\"let notification of listNotification\"\n                 (click)=\"goToNotificationObject(notification)\"\n                 class=\"notification-single-card\"\n                 [ngClass]=\"{'read-bkg' : notification.read === true,\n                             'unread-bkg' : notification.read === false}\" >\n                <div class=\"d-flex justify-content-between\">\n                    <!--notification data-->\n                    <div class=\"d-flex justify-content-start align-item-center\">\n                        <img class=\"icon-notif\" src=\"{{notification?.icon?.filePath}}\">\n                        <!-- <i class=\"fas fa-check icon-notif\"></i> -->\n    \n                        <div>\n                            <p class=\"message-notif\"> {{notification?.message}}</p>\n                            <p class=\"time-notif\">{{notification?.date | date: 'EEEE, d MMMM, HH:mm'}}</p>\n                        </div>\n                    </div>\n                    <!--check notif as read-->\n                    <div *ngIf=\"notification?.read === false\" class=\"check-notif\"\n                    matTooltip=\"Mark as read\" (click)=\"markAsRead(notification.id); $event.stopPropagation()\">\n                        <i class=\"fas fa-check\"></i>\n                    </div>\n                </div>\n            </div>\n\n            <mat-paginator [length]=\"totalElements\"\n                           [pageSize]=\"pageSize\"\n                           [pageSizeOptions]=\"pageSizeArray\"\n                           (page)=\"pageChanged($event)\"\n                           aria-label=\"Select page\">\n            </mat-paginator>\n\n        </div>\n    </div>\n    <!--there are no notification at the moment-->\n    <div *ngIf='listNotification && listNotification.length===0' class=\"container second-content\">\n        <h4>There are no notifications at the moment</h4>\n    </div>\n</div> ";

/***/ }),

/***/ 35500:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/conversation/conversation.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"conversation-general-class\">\n    <!-- conversation list -->\n    <div  class=\"conversationBox\">\n\n        <div id=\"conversationBox\" class=\"container\" *ngFor=\"let message of processedMessages\">\n            <div [ngClass]=\"{'align-message-right' : message.userId === currentUserId,\n    'align-message-left' : message.userId !== currentUserId}\">\n                <div [ngClass]=\"{'current-user-bubble-message' : message.userId === currentUserId,\n      'reciver-bubble-message' : message.userId !== currentUserId}\" class=\"message-class\">\n                    <span *ngIf=\"conversationData?.sharedExperienceId!== null\"> <b>{{message.userName+':&nbsp;'}} </b></span>\n                    <span [innerHTML]=\"message.text\"></span> <!-- Use innerHTML to render HTML content -->\n                </div>\n                <p class=\"sending-date-time\">{{message.date | date: \"EEEE HH:mm\"}}</p>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"input-message-class d-flex align-items-center justify-content-md-between gap-2 flex-wrap flex-md-nowrap\">\n        <input class=\"w-100\" type=\"text\" [formControl]=\"sendMessageForm\" placeholder=\"Type your message here ...\" (keyup.enter)=\"sendMessage()\">\n        <div class=\"d-flex justify-content-end gap-2 \">\n            <button (click)=\"listChanges()\"\n            matTooltip=\"Vezi mesaje noi\"\n            class=\"btn-round btn-color-fill\"\n            type=\"submit\">\n            <i class=\"fas fa-sync-alt\"></i>\n            </button>\n            <button (click)=\"sendMessage()\" class=\"btn-long btn-color-fill\" type=\"submit\">Send message</button>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 88876:
/*!***************************************************************************************************!*\
  !*** ./src/app/standalone-components/dashboard-header/dashboard-header.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row align-items-center titleBar\">\n    <div class=\"col-xxl-7 col-xl-6 page-titles-row\">\n        <div class=\"d-flex flex-wrap\">\n            <h2 [routerLink]=\"routeTitleOne\" routerLinkActive=\"active-page-link\" [ngClass]=\"(routeTitleTwo === undefined && routeTitleThree === undefined) ? 'active-page-link no-pointer': ''\"\n                *ngIf=\"pageTitleOne\">{{pageTitleOne}}</h2>\n            <h2 [routerLink]=\"routeTitleTwo\" routerLinkActive=\"active-page-link\"\n                *ngIf=\"pageTitleTwo\">{{pageTitleTwo}}</h2>\n            <h2 [routerLink]=\"routeTitleThree\" routerLinkActive=\"active-page-link\"\n                *ngIf=\"pageTitleThree\">{{pageTitleThree}}</h2>\n        </div>\n\n    </div>\n\n    <div class=\"col-xxl-5 col-xl-6 page-buttons-row\">\n        <div class=\"d-flex flex-wrap justify-content-xl-end gap-2\">\n            <button id=\"btnBack\" type=\"button\" class=\"btn-long btn-color-outline\" [routerLink]=\"buttonBackRoute\" *ngIf=\"buttonBackRoute\">\n                <i class=\"fas fa-arrow-left\"></i>\n                {{ 'BTN.BACK' | translate}}\n            </button>\n            <button id=\"btnAdd\" class=\"btn-long btn-color-fill ms-sm-2\" type=\"button\" [routerLink]=\"buttonAddRoute\" *ngIf=\"buttonAddRoute\">\n                <i class=\"fas fa-plus\"></i>\n                {{ 'BTN.ADD' | translate }}\n            </button>\n            <button id=\"btnExtra\" type=\"button\" class=\"btn-long btn-color-fill ms-sm-2\" (click)=\"handleExtraCall()\" *ngIf=\"isExtraCallUsed && buttonExtraName\">\n                <i class=\"fas fa-pen\"></i>\n                {{buttonExtraName}}\n            </button>\n            <button id=\"btnBk\" class=\"btn-long btn-color-outline\" type=\"button\" (click)=\"handleBackCall()\" *ngIf=\"isBackCallUsed\">\n                <i class=\"fas fa-arrow-left\"></i>\n                <span *ngIf=\"!buttonBackName\">\n                    {{ 'BTN.BACK' | translate }}\n                </span>\n                <span *ngIf=\"buttonBackName\">\n                    {{buttonBackName}}\n                </span>\n            </button>\n            <button id=\"btnSave\" class=\"btn-long btn-color-fill ms-sm-2\" type=\"button\" (click)=\"handleCall()\" *ngIf=\"isCallUsed\">\n                <i class=\"fas fa-save\"></i>\n                <span *ngIf=\"!buttonCallName\">\n                    {{ 'BTN.SAVE' | translate }}\n                </span>\n                <span *ngIf=\"buttonCallName\">\n                    {{buttonCallName}}\n                </span>\n            </button>\n\n\n        </div>\n    </div>\n</div>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared__services_reservations_service_ts-src_app_standalone-components_all-no-f71d7e.js.map