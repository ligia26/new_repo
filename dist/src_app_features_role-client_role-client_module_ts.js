(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_role-client_role-client_module_ts"],{

/***/ 9108:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/role-client/_components/client-profile/client-profile.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientProfileComponent": () => (/* binding */ ClientProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-profile.component.html?ngResource */ 93152);
/* harmony import */ var _client_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-profile.component.scss?ngResource */ 94992);
/* harmony import */ var _client_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);








let ClientProfileComponent = class ClientProfileComponent {
  constructor(userData, cdr, toastService, translate) {
    this.userData = userData;
    this.cdr = cdr;
    this.toastService = toastService;
    this.translate = translate;
    // cover img url and files
    this.coverClientUrl = {
      fileName: undefined,
      filePath: undefined
    };
    //avatar img url and files
    this.avatarClientUrl = {
      fileName: undefined,
      filePath: undefined
    };
  }
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.userData.getCurrentUser().subscribe(data => {
      this.currentUserData = data;
      if (this.currentUserData.coverImage !== null) {
        this.coverClientUrl.fileName = this.currentUserData.coverImage.fileName;
        this.coverClientUrl.filePath = this.currentUserData.coverImage.filePath;
      }
      if (this.currentUserData.avatar !== null) {
        this.avatarClientUrl.fileName = this.currentUserData.avatar.fileName;
        this.avatarClientUrl.filePath = this.currentUserData.avatar.filePath;
      }
    });
  }
  //add cover img
  onCoverImgChange($event) {
    console.log($event);
    if ($event.target.files && $event.target.files[0]) {
      this.coverClientUrl.fileName = $event.target.files[0].name;
      this.coverClientFile = $event.target.files[0];
      this.userData.uploadUserCoverImage(this.coverClientFile).subscribe(succes => {
        console.log(succes);
      }, error => {
        if (error.error.reason === 'fileSizeTooBig') {
          this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
        } else if (error.error.reason === 'wrongExtension') {
          this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
        } else {
          this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
        }
      });
      const reader = new FileReader();
      reader.onload = () => this.coverClientUrl.filePath = reader.result;
      reader.readAsDataURL(this.coverClientFile);
    }
  }
  removeCoverImg() {
    this.coverClientUrl = {
      fileName: undefined,
      filePath: undefined
    };
    this.coverClientFile = undefined;
    console.log("thumbnail removed");
  }
  //change avatar
  onAvatarChange($event) {
    console.log($event);
    if ($event.target.files && $event.target.files[0]) {
      this.avatarClientUrl.fileName = $event.target.files[0].name;
      this.avatarClientFile = $event.target.files[0];
      this.userData.uploadUserAvatar(this.avatarClientFile).subscribe(data => {
        if (data.success) {
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.UPLOAD-AVATAR.SUCCESS"), "success");
        } else {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.UPLOAD-AVATAR.ERROR"), "error");
        }
      }, error => {
        if (error.error.reason === 'fileSizeTooBig') {
          this.toastService.showToast('Error', 'Fișierul încărcat este prea mare. Trebuie să aibă maxim 2MB.', "error");
        } else if (error.error.reason === 'wrongExtension') {
          this.toastService.showToast('Error', 'Formatul imaginii incarcate, nu este permis.', "error");
        } else {
          this.toastService.showToast('Error', 'Fișierul NU a fost încărcat!', "error");
        }
      });
      const reader = new FileReader();
      reader.onload = () => this.avatarClientUrl.filePath = reader.result;
      reader.readAsDataURL(this.avatarClientFile);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
  }];
  static #_2 = this.propDecorators = {
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
      args: [_angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_6__.MatLegacyMenuTrigger]
    }]
  };
};
ClientProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-client-profile',
  template: _client_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientProfileComponent);


/***/ }),

/***/ 19066:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/role-client/_components/conversation-item-card/conversation-item-card.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationItemCardComponent": () => (/* binding */ ConversationItemCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _conversation_item_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation-item-card.component.html?ngResource */ 57198);
/* harmony import */ var _conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversation-item-card.component.scss?ngResource */ 29503);
/* harmony import */ var _conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/messages-conversations.service */ 33869);
/* harmony import */ var src_app_shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/shared-experiences.service */ 229);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);









let ConversationItemCardComponent = class ConversationItemCardComponent {
  constructor(conversationsService, usersService, sharedExperiencesService) {
    this.conversationsService = conversationsService;
    this.usersService = usersService;
    this.sharedExperiencesService = sharedExperiencesService;
    this.conversationArray = [];
    this.conversationUserArray = [];
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    // Mat Table - pagination, sorting, filtering
    this.pageItems = [15, 50, 100];
    this.page = 0;
    this.sorting = "date";
    this.dir = 'desc';
    this.pageSize = 15;
  }
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.usersService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.userId = res.id;
        if (this.category === 'reservation') {
          this.getReservationListConversation();
        } else if (this.category === 'sharedExperience') {
          this.getSharedExperiencesListConversation();
        } else if (this.category === 'bestinformSupport') {
          this.getListBestinformConversations();
        } else {
          this.getListPrivateConversation();
        }
      }
    });
  }
  //get the data of the other conversation participant to display in conversations list
  getUserById(idUser) {
    this.usersService.getUserById(idUser).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.conversationUser = res;
      }
    });
  }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Documents List
    if (this.category === 'reservation') {
      this.getReservationListConversation();
    } else if (this.category === 'sharedExperience') {
      this.getSharedExperiencesListConversation();
    } else if (this.category === 'bestinformSupport') {
      this.getListBestinformConversations();
    } else {
      this.getListPrivateConversation();
    }
  }
  //get the data of shared experience
  getSharedExperienceById(id) {
    this.sharedExperiencesService.getSharedExperienceById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.sharedExperienceImgPath = res?.featuredImage?.filePath;
      }
    });
  }
  //list conversation reservation category
  getReservationListConversation() {
    this.conversationsService.listConversationFiltered(this.category, this.page, this.pageSize, this.sorting, this.dir).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.conversationArray = res.content;
        this.totalReservationConversations = res.totalElements;
      }
    });
  }
  //shared experiences
  getSharedExperiencesListConversation() {
    this.conversationsService.listConversationFiltered(this.category, this.page, this.pageSize, this.sorting, this.dir).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.conversationArray = res.content;
        this.totalSharedExperiencesConversations = res.totalElements;
        //get shared exp id, for featured img
        this.conversationArray.forEach(element => {
          this.sharedExperienceId = element.sharedExperienceId;
          this.getSharedExperienceById(this.sharedExperienceId);
        });
      }
    });
  }
  //listBestinformConversationFilteres
  getListBestinformConversations() {
    this.conversationsService.listConversationFiltered(this.category, this.page, this.pageSize, this.sorting, this.dir).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.conversationArray = res.content;
        this.totalBestinformConversations = res.totalElements;
      }
    });
  }
  //listBestinformConversationFilteres
  getListPrivateConversation() {
    this.conversationsService.listConversationFiltered(this.category, 0, -1, 'date', 'desc').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.conversationArray = res.content;
        this.totalPrivateConversations = res.totalElements;
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__.MessagesConversationsService
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService
  }, {
    type: src_app_shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_3__.SharedExperiencesService
  }];
  static #_2 = this.propDecorators = {
    category: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator]
    }]
  };
};
ConversationItemCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-conversation-item-card',
  template: _conversation_item_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ConversationItemCardComponent);


/***/ }),

/***/ 30902:
/*!*************************************************************************************!*\
  !*** ./src/app/features/role-client/_components/faq-footer/faq-footer.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqFooterComponent": () => (/* binding */ FaqFooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _faq_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-footer.component.html?ngResource */ 45059);
/* harmony import */ var _faq_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq-footer.component.scss?ngResource */ 34808);
/* harmony import */ var _faq_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_faq_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/localStorage.service */ 72538);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_languageStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/languageStorage.service */ 31345);







let FaqFooterComponent = class FaqFooterComponent {
  // currentApplicationVersion = environment.appVersion;
  constructor(translateService, localStorage, languageService) {
    this.translateService = translateService;
    this.localStorage = localStorage;
    this.languageService = languageService;
    this.selectedValue = "ro";
    this.selectedCurrency = "lei";
    this.langName = '';
    this.selectedValue = this.localStorage.get('langFromStorage');
    if (this.selectedValue) {
      this.translateService.use(this.selectedValue);
    } else {
      this.translateService.use('ro');
    }
  }
  changeLang(lang) {
    this.localStorage.set('langFromStorage', lang);
    this.selectedValue = lang;
    this.translateService.use(lang);
    this.langName = this.getLangName(lang);
    this.languageService.triggerUserLanguageChanges(lang);
  }
  getLangName(lang) {
    if (lang == 'en') {
      return 'English';
    } else if (lang == 'ro') {
      return 'Romanian';
    } else {
      return 'English';
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService
  }, {
    type: _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService
  }, {
    type: _shared_services_languageStorage_service__WEBPACK_IMPORTED_MODULE_3__.LanguageStorageService
  }];
};
FaqFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-faq-footer',
  template: _faq_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_faq_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FaqFooterComponent);


/***/ }),

/***/ 81444:
/*!***********************************************************************************!*\
  !*** ./src/app/features/role-client/client-bookings/client-bookings.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientBookingsComponent": () => (/* binding */ ClientBookingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-bookings.component.html?ngResource */ 34627);
/* harmony import */ var _client_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-bookings.component.scss?ngResource */ 43940);
/* harmony import */ var _client_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/reservations.service */ 84803);
/* harmony import */ var src_app_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/settings.service */ 25560);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var src_app_shared_services_resources_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/resources.service */ 3145);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);











let ClientBookingsComponent = class ClientBookingsComponent {
  ngOnInit() {
    this.listChanges();
    this.getCurrentUser();
    // this.activeListChanges();
  }

  constructor(reservationService, userService, settingsService, resourcesService, cdr, modalService) {
    this.reservationService = reservationService;
    this.userService = userService;
    this.settingsService = settingsService;
    this.resourcesService = resourcesService;
    this.cdr = cdr;
    this.modalService = modalService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    // addedReview=new EventEmitter();
    this.pageItems = [15, 25, 100];
    this.page = 0;
    this.pageSize = 15;
    //booking list
    this.activeBookingList = [];
    this.pastBookingList = [];
    this.cancelledBookingList = [];
  }
  getCurrentUser() {
    this.userService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: client => {
        this.clientId = client.id;
        if (this.clientId) {
          this.getSettings();
          this.initBookingLists();
        }
      }
    });
  }
  pageChanged(event) {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    // Get All Documents List
    this.initBookingLists();
  }
  initBookingLists() {
    this.getActiveBookingList();
    this.getPastBookingList();
    this.getCancelledBookingList();
    this.getNotReviewedBookingList();
  }
  //for currency used by client
  getSettings() {
    this.settingsService.getCurrentSettings().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: settings => {
        this.currency = settings.currency === null ? 'EUR' : settings.currency;
      }
    });
  }
  getNotReviewedBookingList() {
    const activeBookingsObject = {
      status: 'past',
      userId: this.clientId,
      bookingTypes: ["rentalBooking", "menu", "ticketBooking", "culturalBooking", "serviceBookingTimeSlots"],
      recommended: "notReviewed"
    };
    this.reservationService.listReservationFiltered(0, 1, 'date', 'desc', activeBookingsObject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: bookings => {
        this.lastNotReviewedBooking = bookings.content[0];
      }
    });
  }
  getActiveBookingList() {
    const activeBookingsObject = {
      status: 'active',
      userId: this.clientId,
      bookingTypes: ["rentalBooking", "menu", "ticketBooking", "culturalBooking", "serviceBookingTimeSlots"]
    };
    this.reservationService.listReservationFiltered(this.page, this.pageSize, 'date', 'desc', activeBookingsObject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: bookings => {
        this.totalActiveElements = bookings.totalElements;
        this.activeBookingList = bookings.content;
      }
    });
  }
  getPastBookingList() {
    const pastBookingsObject = {
      status: 'past',
      userId: this.clientId,
      bookingTypes: ["rentalBooking", "menu", "ticketBooking", "culturalBooking", "serviceBookingTimeSlots"]
    };
    this.reservationService.listReservationFiltered(this.page, this.pageSize, 'date', 'desc', pastBookingsObject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: bookings => {
        this.pastBookingList = bookings.content;
        this.totalPastElements = bookings.totalElements;
      }
    });
  }
  getCancelledBookingList() {
    const activeBookingsObject = {
      status: 'canceled',
      userId: this.clientId,
      bookingTypes: ["rentalBooking", "menu", "ticketBooking", "culturalBooking", "serviceBookingTimeSlots"]
    };
    this.reservationService.listReservationFiltered(this.page, this.pageSize, 'date', 'desc', activeBookingsObject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: bookings => {
        this.cancelledBookingList = bookings.content;
        this.totalCancelledElements = bookings.totalElements;
      }
    });
  }
  //add review to resource
  addReviewToResource(reservationId, review) {
    this.resourcesService.addReviewToResource(reservationId, review).subscribe(reviewData => {
      if (reviewData.success) {
        this.listChanges();
      }
    });
  }
  listChanges() {
    this.resourcesService.triggerListChanges(true);
    this.getNotReviewedBookingList();
    this.getPastBookingList();
    this.getActiveBookingList();
    this.getCancelledBookingList();
  }
  activeListChanges() {
    this.modalService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get Documents List
        this.getActiveBookingList();
        this.getCancelledBookingList();
        this.cdr.detectChanges();
      }
    });
    this.modalService.listChangedObs.subscribe(data => {
      console.log("fara data");
      // If the response is true
      if (data) {
        console.log("cu data");
        // Get Documents List
        this.getActiveBookingList();
        this.getCancelledBookingList();
        this.cdr.detectChanges();
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_2__.ReservationsService
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService
  }, {
    type: src_app_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService
  }, {
    type: src_app_shared_services_resources_service__WEBPACK_IMPORTED_MODULE_5__.ResourcesService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
  }, {
    type: src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_6__.ModalService
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator]
    }]
  };
};
ClientBookingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-client-bookings',
  template: _client_bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientBookingsComponent);


/***/ }),

/***/ 10500:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/role-client/client-bookings/client-trip-bookings/client-trip-booking.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientTripBookingsComponent": () => (/* binding */ ClientTripBookingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_trip_bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-trip-bookings.component.html?ngResource */ 78655);
/* harmony import */ var _client_trip_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-trip-bookings.component.scss?ngResource */ 58582);
/* harmony import */ var _client_trip_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_trip_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_trips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/trips.service */ 40018);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);







let ClientTripBookingsComponent = class ClientTripBookingsComponent {
  constructor(tripsService, userDataService) {
    this.tripsService = tripsService;
    this.userDataService = userDataService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.dir = 'desc';
    this.sort = 'date';
    this.pageItems = [15, 50, 100];
    //list
    this.activeTripList = [];
    this.pastTripList = [];
    this.cancelledTripList = [];
  }
  ngOnInit() {
    this.initateList();
  }
  //initiate list data
  initateList() {
    this.page = 0;
    this.size = 15;
    this.userDataService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: user => {
        this.currentUserId = user.id;
        this.getActiveTripsList();
      }
    });
  }
  //get Active List
  getActiveTripsList() {
    const filter = {
      status: "active",
      userId: this.currentUserId
    };
    this.tripsService.listTripReservationsFiltered(this.page, this.size, this.sort, this.dir, filter).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: trip => {
        this.activeTripList = trip.content;
        this.totalActiveElements = trip.totalElements;
      }
    });
  }
  //get past List
  getPastTripsList() {
    const filter = {
      status: "past",
      userId: this.currentUserId
    };
    this.tripsService.listTripReservationsFiltered(this.page, this.size, this.sort, this.dir, filter).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: trip => {
        this.pastTripList = trip.content;
        this.totalPastElements = trip.totalElements;
      }
    });
  }
  //get cancelled List
  getCancelledTripsList() {
    const filter = {
      status: "canceled",
      userId: this.currentUserId
    };
    this.tripsService.listTripReservationsFiltered(this.page, this.size, this.sort, this.dir, filter).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: trip => {
        this.cancelledTripList = trip.content;
        this.totalCancelledElements = trip.totalElements;
      }
    });
  }
  //pagination and filter
  pageChanged(event, listStatus) {
    console.log(event);
    this.page = event.pageIndex;
    this.size = event.pageSize;
    if (listStatus === 'active') {
      this.getActiveTripsList();
    } else if (listStatus === 'past') {
      this.getPastTripsList();
    } else if (listStatus === 'canceled') {
      this.getCancelledTripsList();
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_trips_service__WEBPACK_IMPORTED_MODULE_2__.TripsService
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }];
};
ClientTripBookingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-client-trip-bookings',
  template: _client_trip_bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_trip_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientTripBookingsComponent);


/***/ }),

/***/ 52072:
/*!*************************************************************************************!*\
  !*** ./src/app/features/role-client/client-dashboard/client-dashboard.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientDashboardComponent": () => (/* binding */ ClientDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-dashboard.component.html?ngResource */ 44391);
/* harmony import */ var _client_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-dashboard.component.scss?ngResource */ 59085);
/* harmony import */ var _client_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ClientDashboardComponent = class ClientDashboardComponent {};
ClientDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-client-dashboard',
  template: _client_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientDashboardComponent);


/***/ }),

/***/ 60698:
/*!*****************************************************************************!*\
  !*** ./src/app/features/role-client/client-inbox/client-inbox.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientInboxComponent": () => (/* binding */ ClientInboxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_inbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-inbox.component.html?ngResource */ 42806);
/* harmony import */ var _client_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-inbox.component.scss?ngResource */ 5588);
/* harmony import */ var _client_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/messages-conversations.service */ 33869);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);








let ClientInboxComponent = class ClientInboxComponent {
  constructor(usersService, conversationsService, messagesService, router, route) {
    this.usersService = usersService;
    this.conversationsService = conversationsService;
    this.messagesService = messagesService;
    this.router = router;
    this.route = route;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.loading = false;
  }
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.usersService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.clientId = res.id;
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  initSupport() {
    this.loading = true;
    this.messagesService.createConversation('bestinformSupport', 'Bestinform Support - Client - ' + new Date().toLocaleDateString('ro')).subscribe(resp => {
      console.log('resp conv', resp);
      this.loading = false;
      this.router.navigate([resp.reason], {
        relativeTo: this.route
      }); // Replace with your redirect route
    }, error => {
      // Handle error if needed
      this.loading = false;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__.MessagesConversationsService
  }, {
    type: src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__.MessagesConversationsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }];
};
ClientInboxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-client-inbox',
  template: _client_inbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientInboxComponent);


/***/ }),

/***/ 88613:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/role-client/client-payment-methods/client-payment-methods.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPaymentMethodsComponent": () => (/* binding */ ClientPaymentMethodsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_payment_methods_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-payment-methods.component.html?ngResource */ 13147);
/* harmony import */ var _client_payment_methods_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-payment-methods.component.scss?ngResource */ 1446);
/* harmony import */ var _client_payment_methods_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_payment_methods_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_services_smartbill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/smartbill.service */ 52311);











let ClientPaymentMethodsComponent = class ClientPaymentMethodsComponent {
  constructor(formBuilder, userService, smartBillService, toastService) {
    this.formBuilder = formBuilder;
    this.userService = userService;
    this.smartBillService = smartBillService;
    this.toastService = toastService;
    this.subscriptionUpdater$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    this.console = console;
  }
  ngOnInit() {
    this.currentDate = new Date().toLocaleDateString();
    this.initForm();
    this.getCountriesList();
    this.getCurrentUser();
    this.getCurrentSubscription();
  }
  initForm() {
    this.paymentDataForm = this.formBuilder.group({
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      postcode: ['']
    });
  }
  getCountriesList() {
    this.countries$ = this.userService.getAllCountries();
  }
  getCitiesByCountry(country) {
    if (!country) {
      this.cities$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
      return;
    }
    this.cities$ = this.userService.listCityFiltered(0, -1, {
      country: country
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(res => res.content));
  }
  getCurrentUser() {
    //get user data
    this.userService.getCurrentUser().subscribe(userData => {
      this.userInfo = userData;
      this.paymentDataForm.patchValue(userData.billingAddress);
      this.getCitiesByCountry(userData?.billingAddress?.country);
      this.getAllPurchasedSubscriptions();
      this.dataLoaded = true;
    });
  }
  getCurrentSubscription() {
    this.currentSubscription$ = this.subscriptionUpdater$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => {
      return this.userService.getCurrentPurchasedSubscription().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(res => {
        if (!res) {
          const newSub = {
            status: 'new'
          };
          return newSub;
        }
        return res;
      }));
    }));
  }
  getAllPurchasedSubscriptions() {
    this.purchasedSubscriptions$ = this.userService.listPurchasedSubscriptionsFiltered(0, -1, 'purchasedDate', 'desc', {
      userId: this.userInfo.id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(res => res.content));
  }
  updateUser() {
    if (this.paymentDataForm.valid) {
      this.userInfo.billingAddress = this.paymentDataForm.value;
      this.userService.updateCurrentUser(this.userInfo).subscribe(resp => {
        console.log(resp);
        this.toastService.showToast("Succes", "Informații actualizate cu succes!", "success");
      }, error => {
        this.toastService.showToast("Eroare", "A aparut o problema!", "error");
      });
    } else {
      this.toastService.showToast("Eroare", "Completați toate câmpurile obligatorii!", "error");
    }
  }
  toStripe() {
    this.userService.executeRecurringPayments().subscribe({
      next: resp => {
        if (resp.success) {
          window.location.href = resp.reason;
        }
      }
    });
  }
  cancelSubscription(subId) {
    this.userService.cancelSubscription(subId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe({
      next: res => {
        if (res.success) {
          this.toastService.showToast("Succes", "Auto renew anulat cu succes!", "success");
          (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(1500).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe({
            next: () => {
              this.subscriptionUpdater$.next();
            }
          });
        }
      },
      error: () => {
        this.toastService.showToast("Eroare", "A aparut o problema!", "error");
      }
    });
  }
  downloadBill(series, number) {
    if (!series || !number) {
      this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
      return;
    }
    this.smartBillService.downloadFile(series, number).subscribe(file => {
      const fileName = 'Factura-Rezervare.pdf';
      const blob = new Blob([file], {
        type: 'text/json; charset=utf-8'
      });
      file_saver__WEBPACK_IMPORTED_MODULE_4___default().saveAs(blob, fileName);
    }, () => {
      this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
    });
  }
  makeAutoRenewTrue(subId) {
    this.userService.makeAutoRenewTrue(subId).subscribe({
      next: response => {
        if (response.reason) {
          this.toastService.showToast('Success', 'Subscription was renewed!', "success");
          (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(1500).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe({
            next: () => {
              this.subscriptionUpdater$.next();
            }
          });
        }
      },
      error: err => {
        if (err.error.reason === 'invalidId') {
          this.toastService.showToast('Error', "Subscription can not be renewed!", "error");
        } else if (err.error.reason === 'tokenExpired' || err.error.reason === 'tokenExpired') {
          this.toastService.showToast('Error', "You need to be logged in to complete this action!", "error");
        }
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _shared_services_smartbill_service__WEBPACK_IMPORTED_MODULE_5__.SmartBillService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }];
};
ClientPaymentMethodsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-client-payment-methods',
  template: _client_payment_methods_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_payment_methods_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientPaymentMethodsComponent);


/***/ }),

/***/ 71414:
/*!***************************************************************************!*\
  !*** ./src/app/features/role-client/client-site/client-site.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientSiteComponent": () => (/* binding */ ClientSiteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_site_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-site.component.html?ngResource */ 81337);
/* harmony import */ var _client_site_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-site.component.scss?ngResource */ 88636);
/* harmony import */ var _client_site_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_site_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ClientSiteComponent = class ClientSiteComponent {};
ClientSiteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-client-site',
  template: _client_site_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_site_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientSiteComponent);


/***/ }),

/***/ 33983:
/*!**********************************************************************!*\
  !*** ./src/app/features/role-client/client-view/client.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientComponent": () => (/* binding */ ClientComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.component.html?ngResource */ 57509);
/* harmony import */ var _client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.component.scss?ngResource */ 45989);
/* harmony import */ var _client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);
/* harmony import */ var src_app_shared_services_friendRequest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/friendRequest.service */ 92143);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_services/reservations.service */ 84803);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/_services/shared-experiences.service */ 229);
/* harmony import */ var _itineraries_services_itineraries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../itineraries/_services/itineraries.service */ 61295);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_services_smartbill_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/_services/smartbill.service */ 52311);

















let ClientComponent = class ClientComponent {
  constructor(firendRequestService, toastService, userService, cdr, resourceService, translate, reservationService, sharedExperienceService, itinerariesService, smartBillService, route) {
    this.firendRequestService = firendRequestService;
    this.toastService = toastService;
    this.userService = userService;
    this.cdr = cdr;
    this.resourceService = resourceService;
    this.translate = translate;
    this.reservationService = reservationService;
    this.sharedExperienceService = sharedExperienceService;
    this.itinerariesService = itinerariesService;
    this.smartBillService = smartBillService;
    this.route = route;
    // initial filter numbers
    this.pageNumber = 0;
    this.pageSize = 9;
    this.pageSizeArray = [1, 9, 27, 102];
    this.sorting = "date";
    this.dir = 'desc';
    //friends
    this.acceptedFriendsList = [];
    this.accFriendList = [];
    //friends request
    this.requestList = [];
    this.pendingFriendList = [];
    this.resourcesList = [];
    // my experiences
    this.experiencesList = [];
    // shared experiences
    this.sharedExperiencesList = [];
    //jobs
    this.jobsList = [];
    this.coursesList = [];
    // we use this to select other outer tabs on component init
    this.selectedOuterTab = 0;
    this.selectedChildOuterTab = 0;
    // carousel config
    this.customOptions = {
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      // dots: true,
      // dotsEach: 4,
      // nav: true,
      navSpeed: 700,
      navText: ['<', '>'],
      // center: true,
      // margin: 24,
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
          items: 5
        }
      }
    };
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
  }
  ngOnInit() {
    this.checkForQueryParams();
    this.resourcesList = [];
    // this.initiateData();
    this.checkForLanguage();
    this.getClientData();
    // Listen to List Changes
    this.listChanges();
  }
  checkForQueryParams() {
    this.route.queryParamMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: params => {
        if (!params) return;
        if (params.has('tab')) {
          if (params.get('tab') === 'favorites') {
            this.selectedOuterTab = 1;
          } else if (params.get('tab') === 'friends') {
            this.selectedOuterTab = 4;
          } else if (params.get('tab') === 'courses') {
            this.selectedOuterTab = 0;
            this.selectedChildOuterTab = 4;
          }
        }
      }
    });
  }
  getClientData() {
    this.userService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.clientInfo = res;
        if (this.clientInfo) {
          this.initiateData();
        }
        // console.log('RES', this.clientInfo);
      }
    });
  }

  pageChanged(event) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    // Get All Documents List
    this.initiateData();
  }
  checkForLanguage() {
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
  }
  getFavouriteResources() {
    this.resourceService.getMyFavoritesResources('ro').subscribe(resList => {
      resList.forEach(resourceCateg => {
        resourceCateg.resources.forEach(res => {
          this.resourcesList.push(res);
        });
      });
    });
  }
  //initialize data
  initiateData() {
    this.getFriends();
    this.getFriendRequest();
    this.getReservationList();
    this.getItineraries();
    this.getSharedExperiencesList();
    this.getFavouriteResources();
    this.getJobsList();
    this.getCoursesList();
    // Change Detection
    this.cdr.detectChanges();
  }
  getItineraries() {
    console.log('get iti 1');
    const filterItinerary = {
      status: 'clientItinerary',
      userId: this.clientInfo.id
    };
    this.itinerariesService.listItinerariesFiltered(0, -1, 'date', 'desc', filterItinerary).subscribe(resp => {
      console.log('resp it', resp);
      this.itinerariesList = resp.content;
    });
  }
  getFriends() {
    const filterObject = {
      status: "accepted"
    };
    this.firendRequestService.listMyFriend(this.pageNumber, this.pageSize, this.sorting, this.dir, filterObject).subscribe(res => {
      this.acceptedFriendsList = res["content"];
      this.acceptedFriendsList.forEach(element => {
        this.userService.getUserById(element.senderId).subscribe(userDate => {
          //populate list with friends
          this.accFriendList.push(userDate);
        });
      });
      console.log('acc friends', this.accFriendList);
    });
  }
  //get friends request
  getFriendRequest() {
    const filterObject = {
      status: "pending"
    };
    this.firendRequestService.listMyFriend(this.pageNumber, this.pageSize, this.sorting, this.dir, filterObject).subscribe(res => {
      this.requestList = res["content"];
      // console.log(this.requestList);
      this.lengthRequests = res["content"].length;
      this.requestList.forEach(element => {
        this.userService.getUserById(element.senderId).subscribe(userDate => {
          //populate list with friends
          this.pendingFriendList.push(userDate);
        });
      });
    });
  }
  //accept friend request
  acceptFriendRequest(friendId) {
    this.requestList.forEach(element => {
      if (element.senderId === friendId) {
        this.requestId = element.id;
      }
    });
    this.firendRequestService.acceptFriendRequest(this.requestId, {}).subscribe(() => {
      this.firendRequestService.triggerListChanges(true);
      // console.log("trigger accept");
      // Set Message & Response
      this.toastService.showToast('Succes', 'Felicitari! Acum sunteti prieteni!', 'success');
    }, () => {
      this.toastService.showToast('Eroare', 'Ups! A aparut o eroare!', 'error');
    });
  }
  //accept friend request
  rejectFriendRequest(friendId) {
    this.requestList.forEach(element => {
      if (element.senderId === friendId) {
        this.rejectReqId = element.id;
      }
    });
    this.firendRequestService.rejectFriendRequest(this.rejectReqId, {}).subscribe(() => {
      this.firendRequestService.triggerListChanges(true);
      // console.log("trigger reject");
      // Set Message & Response
      this.toastService.showToast('Succes', 'Cerere respinsa!', 'success');
    }, () => {
      this.toastService.showToast('Eroare', 'Ups! A aparut o eroare!', 'error');
    });
  }
  //delete friend request
  deleteFriend(friendId) {
    this.acceptedFriendsList.forEach(element => {
      if (element.senderId === friendId) {
        this.deleteReqId = element.id;
      }
    });
    this.firendRequestService.deleteFriend(this.deleteReqId).subscribe(() => {
      this.firendRequestService.triggerListChanges(true);
      // console.log("trigger delete");
      // Set Message & Response
      this.toastService.showToast('Succes', 'Prieten sters cu succes!', 'success');
    }, error => {
      console.log(error);
      this.toastService.showToast('Eroare', 'Ups! A aparut o eroare!', 'error');
    });
  }
  //get the last 3 reservation, for my Experiences tab
  getReservationList() {
    const bookingObject = {
      userId: this.clientInfo.id,
      bookingTypes: ['rentalBooking', 'serviceBookingTimeSlots', 'ticketBooking', 'carBooking', 'culturalBooking', 'menu']
    };
    this.reservationService.listReservationFiltered(0, 3, 'date', 'desc', bookingObject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: bookings => {
        this.experiencesList = bookings.content;
        console.log('BOOKING LIST', this.experiencesList);
      }
    });
  }
  //get the last 3 reservation, for my Experiences tab
  getJobsList() {
    const bookingObject = {
      userId: this.clientInfo.id,
      bookingTypes: ['applyToJob']
    };
    this.reservationService.listReservationFiltered(this.pageNumber, this.pageSize, 'date', 'desc', bookingObject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: bookings => {
        this.jobsList = bookings.content;
        console.log('jobs LIST', this.jobsList);
        this.totalAppliedJobs = bookings.totalElements;
      }
    });
  }
  getSharedExperiencesList() {
    const filterObj = {
      participants: [this.clientInfo.id]
    };
    this.sharedExperienceService.listSharedExperiencesFiltered(this.pageNumber, this.pageSize, this.sorting, this.dir, filterObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: sharedExp => {
        console.log('SHARED EXP', sharedExp.content);
        this.sharedExperiencesList = sharedExp.content;
        this.totalSharedExperiences = sharedExp.totalElements;
      }
    });
  }
  //get courses
  getCoursesList() {
    const bookingObject = {
      userId: this.clientInfo.id,
      bookingTypes: ["productsList", "culturalBooking"]
    };
    this.reservationService.listReservationFiltered(this.pageNumber, this.pageSize, 'date', 'desc', bookingObject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: bookings => {
        this.coursesList = bookings.content;
        this.totalMyCourses = bookings.totalElements;
        console.log('CURSURRIIIIII', this.coursesList);
      }
    });
  }
  // Listen to data changes and refresh the user list
  listChanges() {
    this.firendRequestService.listChangedObs.subscribe(data => {
      this.accFriendList = [];
      this.pendingFriendList = [];
      // If the response is true
      if (data) {
        // Get Documents List
        this.getFriends();
        this.getFriendRequest();
        this.firendRequestService.triggerListChanges(false);
        // console.log("trigger fals");
      }
      // this.cdr.detectChanges();// Reset Obs Trigger
    });
  }
  // Trigger Feedback Message Service
  feedbackTriggered() {
    this.toastService.toastEvents.subscribe(data => {
      if (data) {
        // Scroll Top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        // Listen to layout changes
        this.cdr.detectChanges();
      }
    });
  }
  downloadBill(series, number) {
    if (!series || !number) {
      this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
      return;
    }
    this.smartBillService.downloadFile(series, number).subscribe(file => {
      const fileName = 'Factura-Rezervare.pdf';
      const blob = new Blob([file], {
        type: 'text/json; charset=utf-8'
      });
      file_saver__WEBPACK_IMPORTED_MODULE_9___default().saveAs(blob, fileName);
    }, () => {
      this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_friendRequest_service__WEBPACK_IMPORTED_MODULE_2__.FriendRequestService
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_5__.ResourcesService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService
  }, {
    type: src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_6__.ReservationsService
  }, {
    type: _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_7__.SharedExperiencesService
  }, {
    type: _itineraries_services_itineraries_service__WEBPACK_IMPORTED_MODULE_8__.ItinerariesService
  }, {
    type: _shared_services_smartbill_service__WEBPACK_IMPORTED_MODULE_10__.SmartBillService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
  }];
  static #_2 = this.propDecorators = {
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
      args: [_angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_16__.MatLegacyMenuTrigger]
    }]
  };
};
ClientComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-client',
  template: _client_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientComponent);


/***/ }),

/***/ 88690:
/*!*******************************************************************************!*\
  !*** ./src/app/features/role-client/delete-client/delete-client.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteClientComponent": () => (/* binding */ DeleteClientComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_client_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-client.component.html?ngResource */ 13665);
/* harmony import */ var _delete_client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-client.component.scss?ngResource */ 69244);
/* harmony import */ var _delete_client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_delete_client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/auth.service */ 56566);











let DeleteClientComponent = class DeleteClientComponent {
  constructor(userDataService, toastService, router, translate, authService) {
    this.userDataService = userDataService;
    this.toastService = toastService;
    this.router = router;
    this.translate = translate;
    this.authService = authService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.getCurrentUserData();
  }
  getCurrentUserData() {
    this.currentUser$ = this.userDataService.getCurrentUser();
  }
  deleteAccount(userId) {
    this.userDataService.deleteUser(userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (res.success) {
          this.toastService.showToast(this.translate.instant('TOAST.SUCCESS'), this.translate.instant('TOAST.SERVER-ERROR'), 'success');
          /*const a = document.createElement('a');
          a.style.display = 'none';
          a.href = "/bestinform/logout";
          a.click();*/
          this.authService.logout();
          window.location.href = 'https://bestinform.eu/bestinform/logout';
        } else {
          this.toastService.showToast(this.translate.instant('TOAST.ERROR'), this.translate.instant('TOAST.SERVER-ERROR'), 'error');
        }
      },
      error: error => {
        this.toastService.showToast(this.translate.instant('TOAST.ERROR'), this.translate.instant('TOAST.SERVER-ERROR'), 'error');
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }, {
    type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
  }];
};
DeleteClientComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-delete-client',
  template: _delete_client_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_delete_client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DeleteClientComponent);


/***/ }),

/***/ 65036:
/*!*********************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/_services/attributes.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributesService": () => (/* binding */ AttributesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let AttributesService = class AttributesService {
  constructor(http) {
    this.http = http;
    // Stepper
    // step$ = new BehaviorSubject(0);
    this.preferences$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.userData$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
  }
  // /** Stepper Listener*/
  // getStep() {
  //     return this.step$.asObservable()
  // }
  listAttributesFiltered(pageNumber, pageSize, sort1, sort2, dir, filters) {
    return this.http.post('/bestinform/listAttributesFiltered?page=' + pageNumber + '&size=' + pageSize + '&sort1=' + sort1 + '&sort2=' + sort2 + '&dir=' + dir, filters);
  }
  getCurrentUser() {
    return this.http.get('/bestinform/getCurrentUser');
  }
  updateCurrentUser(userData) {
    return this.http.put('/bestinform/updateCurrentUser', userData);
  }
  executeRecurringPayments() {
    return this.http.post('/bestinform/executeRecurringPayments', {});
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
AttributesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AttributesService);


/***/ }),

/***/ 1832:
/*!*************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/_services/enroll-stepper.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnrollStepperService": () => (/* binding */ EnrollStepperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let EnrollStepperService = class EnrollStepperService {
  // stepperStage$ = new BehaviorSubject('Configure/Edit');
  constructor(http) {
    this.http = http;
    // Stepper
    this.step$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    this.stepsTitle$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([{
      id: 0,
      stepName: 'Welcome'
    }, {
      id: 1,
      stepName: 'Attributes'
    }, {
      id: 2,
      stepName: 'Data'
    }, {
      id: 3,
      stepName: 'Finish'
    }]);
    this.stepperStage$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('Add');
    // Listen to Step Stage Changes
    // this.getStepperStage().subscribe({
    //     next: stage => {
    //         console.log('stage', stage);
    //         this.changeStepperStage(stage)
    //     }
    // })
  }
  /** Stepper Listener*/
  getStep() {
    return this.step$.asObservable();
  }
  getStepsTitle() {
    return this.stepsTitle$.asObservable();
  }
  getStepperStage() {
    return this.stepperStage$.asObservable();
  }
  /** Go to next step*/
  nextStep() {
    // Check if you get to the last step
    if (this.step$.getValue() === this.stepsTitle$.getValue()[this.stepsTitle$.getValue().length - 1].id) {
      return;
    }
    // Go one step forward
    this.step$.next(this.step$.getValue() + 1);
  }
  /** Go to previous step*/
  prevStep() {
    // Check if you get to the first step
    if (this.step$.getValue() === this.stepsTitle$.getValue()[0].id) {
      return;
    }
    // Go one step back
    this.step$.next(this.step$.getValue() - 1);
  }
  /** Change Stepper Stage*/
  changeStepperStage(stage) {
    if (stage === 'Add') {
      return this.stepsTitle$.next([{
        id: 0,
        stepName: 'Domeniul'
      }, {
        id: 1,
        stepName: 'Categorie resurse'
      }, {
        id: 2,
        stepName: 'Tipul de resursă'
      }, {
        id: 3,
        stepName: 'Configurație'
      }]);
    } else if (stage === 'Configure/Edit') {
      return this.stepsTitle$.next([{
        id: 0,
        stepName: 'Informatii generale'
      }, {
        id: 1,
        stepName: 'Facilități'
      }, {
        id: 2,
        stepName: 'Setup'
      }, {
        id: 3,
        stepName: 'Politici'
      }, {
        id: 4,
        stepName: 'Galerie'
      }, {
        id: 5,
        stepName: 'Payment'
      }]);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
EnrollStepperService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], EnrollStepperService);


/***/ }),

/***/ 71153:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/client-preferences/client-preferences.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPreferencesComponent": () => (/* binding */ ClientPreferencesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_preferences_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-preferences.component.html?ngResource */ 69129);
/* harmony import */ var _client_preferences_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-preferences.component.scss?ngResource */ 93915);
/* harmony import */ var _client_preferences_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_preferences_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_attributes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/attributes.service */ 65036);
/* harmony import */ var _services_enroll_stepper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/enroll-stepper.service */ 1832);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);








let ClientPreferencesComponent = class ClientPreferencesComponent {
  constructor(attributesService, stepperService, dataService, toastService) {
    this.attributesService = attributesService;
    this.stepperService = stepperService;
    this.dataService = dataService;
    this.toastService = toastService;
    this.allAttributes = [];
    this.categories = [];
    this.preferences = [];
  }
  ngOnInit() {
    this.getAttributesForEnrollment();
  }
  getAttributesForEnrollment() {
    const filter = {
      enrollment: true
    };
    this.attributesService.listAttributesFiltered(0, -1, null, null, null, filter).subscribe({
      next: attributes => {
        console.log('ATTRIBUTES', attributes.content);
        this.allAttributes = attributes.content;
      }
    });
  }
  addValue(attributeId, value) {
    console.log(attributeId, value);
    const attrIndex = this.allAttributes.findIndex(attr => attr.id === attributeId);
    if (attrIndex !== -1) {
      const valueIndex = this.allAttributes[attrIndex].valueOptions.findIndex(val => val === value);
      if (valueIndex !== -1) {
        this.allAttributes[attrIndex].valueOptions[valueIndex] = {
          val: value,
          selected: true
        };
      }
    }
  }
  deleteValue(attributeId, value) {
    const attrIndex = this.allAttributes.findIndex(attr => attr.id === attributeId);
    if (attrIndex !== -1) {
      const valueIndex = this.allAttributes[attrIndex].valueOptions.findIndex(valToCheck => valToCheck.val === value);
      if (valueIndex !== -1) {
        this.allAttributes[attrIndex].valueOptions[valueIndex] = value;
      }
    }
  }
  makePreferencesArray() {
    this.preferences = [];
    console.log(this.allAttributes);
    this.allAttributes.forEach(attribute => {
      // console.log(attribute);
      attribute.valueOptions.forEach(value => {
        // console.log(value);
        if (value.selected) {
          const attributeIndex = this.preferences.findIndex(pref => pref.attributeId === attribute.id);
          console.log(attributeIndex);
          if (attributeIndex === -1) {
            // const attributePref =
            this.preferences.push({
              attributeId: attribute.id,
              attributeValues: [{
                attributeValue: value.val,
                score: 0
              }]
            });
            console.log(this.preferences);
            // this.checkIfData();
            // this.attributesService.preferences$.next(this.preferences);
            // console.log('preferinte', this.preferences);
          } else {
            this.preferences[attributeIndex].attributeValues.push({
              attributeValue: value.val,
              score: 0
            });
            // console.log('preferinte din else', this.preferences);
            // this.attributesService.preferences$.next(this.preferences);
          }

          console.log('preferinte:', this.preferences);
          // this.attributesService.preferences$.next(this.preferences);
        }
      });
    });
  }

  checkIfData() {
    // console.log('avem atribute?',this.attributesService.preferences$.getValue());
    const selectedPreferences = this.attributesService.preferences$.getValue();
    console.log('selected pref', selectedPreferences);
    if (selectedPreferences.length > 0) {
      selectedPreferences.forEach(attribute => {
        // this.addValue(attribute.attributeId, attribute.attributeValues)
        attribute.attributeValues.forEach(attr => {
          console.log('attr:', attr);
          this.addValue(attribute.attributeId, attr.attributeValue);
        });
      });
    }
  }
  //Function to divide all attributes by categories
  // divideCategories(attributes){
  //     attributes.forEach(attribute => {
  //         const indexOfCateg = this.categories.findIndex(categ => categ.categoryId === attribute.categoryId);
  //         if(indexOfCateg === -1){
  //             const category = {
  //                 categoryId: attribute.categoryId,
  //                 attributes: [attribute]
  //             }
  //             this.categories.push(category);
  //         }else{
  //             this.categories[indexOfCateg].attributes.push(attribute);}
  //
  //         console.log(this.categories);
  //     })
  // }
  nextStep() {
    this.makePreferencesArray();
    this.attributesService.preferences$.next(this.preferences);
    // this.checkIfData();
    this.stepperService.nextStep();
  }
  skipStep() {
    this.stepperService.nextStep();
    this.attributesService.preferences$.next([]);
  }
  prevStep() {
    this.attributesService.preferences$.next(this.preferences);
    this.stepperService.prevStep();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_attributes_service__WEBPACK_IMPORTED_MODULE_2__.AttributesService
  }, {
    type: _services_enroll_stepper_service__WEBPACK_IMPORTED_MODULE_3__.EnrollStepperService
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
  }];
};
ClientPreferencesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-client-preferences',
  template: _client_preferences_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_preferences_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientPreferencesComponent);


/***/ }),

/***/ 59065:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/finish-enrollment/finish-enrollment.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinishEnrollmentComponent": () => (/* binding */ FinishEnrollmentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _finish_enrollment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finish-enrollment.component.html?ngResource */ 9370);
/* harmony import */ var _finish_enrollment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finish-enrollment.component.scss?ngResource */ 14381);
/* harmony import */ var _finish_enrollment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_finish_enrollment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_attributes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/attributes.service */ 65036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_user_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/_services/user-location.service */ 22587);







let FinishEnrollmentComponent = class FinishEnrollmentComponent {
  constructor(enrollService, router, userLocationService) {
    this.enrollService = enrollService;
    this.router = router;
    this.userLocationService = userLocationService;
  }
  ngOnInit() {
    this.getCurrentUser();
    this.userLocationService.checkUserCoordinates();
  }
  getCurrentUser() {
    this.enrollService.getCurrentUser().subscribe({
      next: user => {
        this.currentUser = user;
      }
    });
  }
  finish() {
    this.router.navigate(['/client']).then(() => {
      console.log('after login promise');
      this.userLocationService.checkUserCoordinates();
    });
  }
  startTrial() {
    this.enrollService.executeRecurringPayments().subscribe({
      next: resp => {
        if (resp.success) {
          window.location.href = resp.reason;
        }
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_attributes_service__WEBPACK_IMPORTED_MODULE_2__.AttributesService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _shared_services_user_location_service__WEBPACK_IMPORTED_MODULE_3__.UserLocationService
  }];
};
FinishEnrollmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-finish-enrollment',
  template: _finish_enrollment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_finish_enrollment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FinishEnrollmentComponent);


/***/ }),

/***/ 54702:
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/trial-active/trial-active.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrialActiveComponent": () => (/* binding */ TrialActiveComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _trial_active_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trial-active.component.html?ngResource */ 25130);
/* harmony import */ var _trial_active_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trial-active.component.scss?ngResource */ 99176);
/* harmony import */ var _trial_active_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trial_active_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_user_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/_services/user-location.service */ 22587);






let TrialActiveComponent = class TrialActiveComponent {
  constructor(router, userLocationService) {
    this.router = router;
    this.userLocationService = userLocationService;
  }
  ngOnInit() {}
  goToHp() {
    this.router.navigate(['/client']).then(() => {
      console.log('after login promise');
      this.userLocationService.checkUserCoordinates();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }, {
    type: _shared_services_user_location_service__WEBPACK_IMPORTED_MODULE_2__.UserLocationService
  }];
};
TrialActiveComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-trial-active',
  template: _trial_active_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_trial_active_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TrialActiveComponent);


/***/ }),

/***/ 16136:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/user-data/user-data.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataComponent": () => (/* binding */ UserDataComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_data_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-data.component.html?ngResource */ 51193);
/* harmony import */ var _user_data_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-data.component.scss?ngResource */ 44497);
/* harmony import */ var _user_data_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_data_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_enroll_stepper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/enroll-stepper.service */ 1832);
/* harmony import */ var _services_attributes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/attributes.service */ 65036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/_services/toast.service */ 62941);









let UserDataComponent = class UserDataComponent {
  constructor(fb, stepperService, dataService, datePipe, toastService) {
    this.fb = fb;
    this.stepperService = stepperService;
    this.dataService = dataService;
    this.datePipe = datePipe;
    this.toastService = toastService;
  }
  ngOnInit() {
    console.log('PREFERENCES', this.dataService.preferences$.getValue());
    this.formInit();
    this.checkIfDataExists();
    this.getCurrentUser();
  }
  formInit() {
    this.userDataForm = this.fb.group({
      birthdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      gender: ['male', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  checkIfDataExists() {
    if (this.dataService.userData$.getValue()) {
      this.userDataForm.patchValue(this.dataService.userData$.getValue());
    }
  }
  getCurrentUser() {
    this.dataService.getCurrentUser().subscribe({
      next: user => {
        this.currentUser = user;
      }
    });
  }
  nextStep() {
    this.userDataForm.markAllAsTouched();
    if (this.userDataForm.valid) {
      const clientInfo = {
        ...this.currentUser,
        preferences: this.dataService.preferences$.getValue(),
        enrollment: true,
        birthdate: this.datePipe.transform(this.userDataForm.value.birthdate, 'yyyy-MM-dd'),
        gender: this.userDataForm.value.gender,
        telephone: this.userDataForm.value.telephone
      };
      // console.log('CLIENT INFO', clientInfo);
      this.dataService.updateCurrentUser(clientInfo).subscribe({
        next: resp => {
          // console.log(resp);
          if (resp.success) {
            this.stepperService.nextStep();
          }
        },
        error: err => {
          if (err.reason === 'notExists') {
            this.toastService.showToast('Error', 'Aces utilizator nu există!', "error");
          } else if (err.reason === 'notLoggedIn' || err.reason === 'tokenExpired') {
            this.toastService.showToast('Error', 'Pentru a finaliza această acțiune trebuie să fii logat!', "error");
          }
        }
      });
    } else {
      return;
    }
  }
  prevStep() {
    this.userDataForm.markAllAsTouched();
    if (this.userDataForm.valid) {
      this.dataService.userData$.next(this.userDataForm.value);
      this.stepperService.prevStep();
    } else {
      return;
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: _services_enroll_stepper_service__WEBPACK_IMPORTED_MODULE_2__.EnrollStepperService
  }, {
    type: _services_attributes_service__WEBPACK_IMPORTED_MODULE_3__.AttributesService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }];
};
UserDataComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-user-data',
  template: _user_data_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: [(_user_data_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserDataComponent);


/***/ }),

/***/ 9155:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/welcome-screen/welcome-screen.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeScreenComponent": () => (/* binding */ WelcomeScreenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _welcome_screen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-screen.component.html?ngResource */ 7355);
/* harmony import */ var _welcome_screen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-screen.component.scss?ngResource */ 1435);
/* harmony import */ var _welcome_screen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_welcome_screen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_enroll_stepper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/enroll-stepper.service */ 1832);
/* harmony import */ var _services_attributes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/attributes.service */ 65036);






let WelcomeScreenComponent = class WelcomeScreenComponent {
  constructor(stepperService, attributesService) {
    this.stepperService = stepperService;
    this.attributesService = attributesService;
  }
  nextStep() {
    this.stepperService.nextStep();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_enroll_stepper_service__WEBPACK_IMPORTED_MODULE_2__.EnrollStepperService
  }, {
    type: _services_attributes_service__WEBPACK_IMPORTED_MODULE_3__.AttributesService
  }];
};
WelcomeScreenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-welcome-screen',
  template: _welcome_screen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_welcome_screen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], WelcomeScreenComponent);


/***/ }),

/***/ 87934:
/*!*************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnrollmentComponent": () => (/* binding */ EnrollmentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _enrollment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enrollment.component.html?ngResource */ 55845);
/* harmony import */ var _enrollment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enrollment.component.scss?ngResource */ 42496);
/* harmony import */ var _enrollment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_enrollment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_enroll_stepper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/enroll-stepper.service */ 1832);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);






let EnrollmentComponent = class EnrollmentComponent {
  constructor(stepperService, router, route) {
    this.stepperService = stepperService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.route.queryParams.subscribe({
      next: queryParam => {
        if (queryParam.payment === 'success') {
          console.log('e succes');
          this.stepperService.step$.next(4);
          this.step = 4;
        } else {
          this.stepperService.getStep().subscribe({
            next: step => {
              console.log('ENROLLMENT', step);
              this.step = step;
            }
          });
        }
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_enroll_stepper_service__WEBPACK_IMPORTED_MODULE_2__.EnrollStepperService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
EnrollmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-enrollment',
  template: _enrollment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_enrollment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EnrollmentComponent);


/***/ }),

/***/ 27654:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/role-client/itinerary-bookings/itinerary-bookings.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItineraryBookingsComponent": () => (/* binding */ ItineraryBookingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _itinerary_bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itinerary-bookings.component.html?ngResource */ 47900);
/* harmony import */ var _itinerary_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itinerary-bookings.component.scss?ngResource */ 37177);
/* harmony import */ var _itinerary_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_itinerary_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/reservations.service */ 84803);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/settings.service */ 25560);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_services_smartbill_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/_services/smartbill.service */ 52311);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);














let ItineraryBookingsComponent = class ItineraryBookingsComponent {
  constructor(reservationService, userService, settingsService, resourcesService, cdr, route, smartBillService, toastService) {
    this.reservationService = reservationService;
    this.userService = userService;
    this.settingsService = settingsService;
    this.resourcesService = resourcesService;
    this.cdr = cdr;
    this.route = route;
    this.smartBillService = smartBillService;
    this.toastService = toastService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    // addedReview=new EventEmitter();
    this.pageItems = [15, 25, 100];
    this.page = 0;
    this.pageSize = 15;
    //booking list
    this.activeBookingList = [];
    this.pastBookingList = [];
    this.cancelledBookingList = [];
  }
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.itinerayId = paramMap.get('id');
      console.log('itinerary id', this.itinerayId);
    });
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.userService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: client => {
        this.clientId = client.id;
        if (this.clientId) {
          this.initBookingLists();
        }
      }
    });
  }
  pageChanged(event) {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    // Get All Documents List
    this.initBookingLists();
  }
  initBookingLists() {
    this.getActiveBookingList();
    this.getPastBookingList();
    this.getCancelledBookingList();
  }
  //for currency used by client
  getSettings() {
    this.settingsService.getCurrentSettings().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: settings => {
        this.currency = settings.currency === null ? 'EUR' : settings.currency;
      }
    });
  }
  getActiveBookingList() {
    const activeBookingsObject = {
      status: 'active',
      userId: this.clientId,
      bookingTypes: ["rentalBooking", "menu", "ticketBooking", "culturalBooking", "serviceBookingTimeSlots"],
      itineraryId: this.itinerayId
    };
    this.reservationService.listReservationFiltered(this.page, this.pageSize, 'date', 'desc', activeBookingsObject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: bookings => {
        this.totalActiveElements = bookings.totalElements;
        this.activeBookingList = bookings.content;
      }
    });
  }
  getPastBookingList() {
    const pastBookingsObject = {
      status: 'past',
      userId: this.clientId,
      bookingTypes: ["rentalBooking", "menu", "ticketBooking", "culturalBooking", "serviceBookingTimeSlots"],
      itineraryId: this.itinerayId
    };
    this.reservationService.listReservationFiltered(this.page, this.pageSize, 'date', 'desc', pastBookingsObject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: bookings => {
        this.pastBookingList = bookings.content;
        this.totalPastElements = bookings.totalElements;
      }
    });
  }
  getCancelledBookingList() {
    const activeBookingsObject = {
      status: 'canceled',
      userId: this.clientId,
      bookingTypes: ["rentalBooking", "menu", "ticketBooking", "culturalBooking", "serviceBookingTimeSlots"],
      itineraryId: this.itinerayId
    };
    this.reservationService.listReservationFiltered(this.page, this.pageSize, 'date', 'desc', activeBookingsObject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: bookings => {
        this.cancelledBookingList = bookings.content;
        this.totalCancelledElements = bookings.totalElements;
      }
    });
  }
  //add review to resource
  addReviewToResource(reservationId, review) {
    this.resourcesService.addReviewToResource(reservationId, review).subscribe(reviewData => {
      if (reviewData.success) {
        this.listChanges();
      }
    });
  }
  listChanges() {
    this.resourcesService.triggerListChanges(true);
    this.getPastBookingList();
  }
  downloadBill(series, number) {
    if (!series || !number) {
      this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
      return;
    }
    this.smartBillService.downloadFile(series, number).subscribe(file => {
      const fileName = 'Factura-Rezervare.pdf';
      const blob = new Blob([file], {
        type: 'text/json; charset=utf-8'
      });
      file_saver__WEBPACK_IMPORTED_MODULE_6___default().saveAs(blob, fileName);
    }, () => {
      this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_2__.ReservationsService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_5__.ResourcesService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
  }, {
    type: _shared_services_smartbill_service__WEBPACK_IMPORTED_MODULE_7__.SmartBillService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator]
    }]
  };
};
ItineraryBookingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-itinerary-bookings',
  template: _itinerary_bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_itinerary_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ItineraryBookingsComponent);


/***/ }),

/***/ 33827:
/*!************************************************************!*\
  !*** ./src/app/features/role-client/role-client.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleClientModule": () => (/* binding */ RoleClientModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _delete_client_delete_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-client/delete-client.component */ 88690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _client_payment_methods_client_payment_methods_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-payment-methods/client-payment-methods.component */ 88613);
/* harmony import */ var _client_view_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-view/client.component */ 33983);
/* harmony import */ var _client_bookings_client_bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-bookings/client-bookings.component */ 81444);
/* harmony import */ var _components_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/client-profile/client-profile.component */ 9108);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _client_site_client_site_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-site/client-site.component */ 71414);
/* harmony import */ var _client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-dashboard/client-dashboard.component */ 52072);
/* harmony import */ var _components_faq_footer_faq_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/faq-footer/faq-footer.component */ 30902);
/* harmony import */ var _standalone_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../standalone-components/footer/footer.component */ 5754);
/* harmony import */ var _standalone_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../standalone-components/header/header.component */ 46346);
/* harmony import */ var _standalone_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../standalone-components/menu/menu.component */ 68390);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _standalone_components_edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../standalone-components/edit-account/edit-account.component */ 22025);
/* harmony import */ var _standalone_components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../standalone-components/change-pass/change-pass.component */ 49247);
/* harmony import */ var _standalone_components_resource_card_resource_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../standalone-components/resource-card/resource-card.component */ 40462);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _view_client_reservation_view_client_reservation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-client-reservation/view-client-reservation.component */ 172);
/* harmony import */ var _standalone_components_favorite_resource_card_favorite_resource_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../standalone-components/favorite-resource-card/favorite-resource-card.component */ 44879);
/* harmony import */ var _client_inbox_client_inbox_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./client-inbox/client-inbox.component */ 60698);
/* harmony import */ var _components_conversation_item_card_conversation_item_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_components/conversation-item-card/conversation-item-card.component */ 19066);
/* harmony import */ var _view_client_messages_view_client_messages_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view-client-messages/view-client-messages.component */ 68564);
/* harmony import */ var src_app_standalone_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/standalone-components/conversation/conversation.component */ 51440);
/* harmony import */ var src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/standalone-components/all-notifications/all-notifications.component */ 97376);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./settings/settings.component */ 55246);
/* harmony import */ var _standalone_components_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../standalone-components/booking-confirmation/booking-confirmation.component */ 33741);
/* harmony import */ var _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./enrollment/enrollment.component */ 87934);
/* harmony import */ var _enrollment_enrollment_steps_welcome_screen_welcome_screen_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./enrollment/enrollment-steps/welcome-screen/welcome-screen.component */ 9155);
/* harmony import */ var _enrollment_enrollment_steps_client_preferences_client_preferences_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./enrollment/enrollment-steps/client-preferences/client-preferences.component */ 71153);
/* harmony import */ var _enrollment_enrollment_steps_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./enrollment/enrollment-steps/user-data/user-data.component */ 16136);
/* harmony import */ var _enrollment_enrollment_steps_finish_enrollment_finish_enrollment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./enrollment/enrollment-steps/finish-enrollment/finish-enrollment.component */ 59065);
/* harmony import */ var _client_bookings_client_trip_bookings_client_trip_booking_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./client-bookings/client-trip-bookings/client-trip-booking.component */ 10500);
/* harmony import */ var _itinerary_bookings_itinerary_bookings_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./itinerary-bookings/itinerary-bookings.component */ 27654);
/* harmony import */ var _standalone_components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../standalone-components/user-settings/user-settings.component */ 18832);
/* harmony import */ var _enrollment_enrollment_steps_trial_active_trial_active_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./enrollment/enrollment-steps/trial-active/trial-active.component */ 54702);
















































const routes = [{
  path: '',
  component: _client_site_client_site_component__WEBPACK_IMPORTED_MODULE_6__.ClientSiteComponent,
  children: [{
    path: 'events',
    loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_features_events_events_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../events/events.module */ 36764)).then(m => m.EventsModule)
  }, {
    path: 'editorials',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared__domains_ts-node_modules_css-loader_dist_cjs_js_ruleSet_1_rules_6_rule-fd9a58"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_editorials_editorials_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../editorials/editorials.module */ 51008)).then(m => m.EditorialsModule)
  }, {
    path: 'domain',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ol_Map_js-node_modules_ol_layer_Tile_js-node_modules_ol_source_OSM_js"), __webpack_require__.e("default-src_app_standalone-components_room-card_room-card_component_ts-node_modules_angular_m-c08a2c"), __webpack_require__.e("default-src_app_features_domain-listing__components_shared-exp-map_shared-exp-map_component_t-a8c67b"), __webpack_require__.e("default-src_app_standalone-components_resource-card-with-template_resource-card-with-template-b14844"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_domain-listing_domain-listing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../domain-listing/domain-listing.module */ 71622)).then(m => m.DomainListingModule)
  }, {
    path: 'booking-confirmation',
    component: _standalone_components_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_24__.BookingConfirmationComponent
  }, {
    path: 'content',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ol_Map_js-node_modules_ol_layer_Tile_js-node_modules_ol_source_OSM_js"), __webpack_require__.e("default-src_app_features_public-homepage_public-homepage_module_ts"), __webpack_require__.e("default-src_app_features_secondary-pages_secondary-pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../secondary-pages/secondary-pages.module */ 24725)).then(m => m.SecondaryPagesModule)
  }, {
    path: 'enroll',
    component: _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_25__.EnrollmentComponent
  }, {
    path: '',
    redirectTo: 'domain',
    pathMatch: "full"
  }]
}, {
  path: 'dashboard',
  component: _client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.ClientDashboardComponent,
  children: [{
    path: 'profile',
    component: _client_view_client_component__WEBPACK_IMPORTED_MODULE_2__.ClientComponent
  }, {
    path: 'my-account',
    component: _standalone_components_edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_13__.EditAccountComponent
  }, {
    path: 'payment',
    component: _client_payment_methods_client_payment_methods_component__WEBPACK_IMPORTED_MODULE_1__.ClientPaymentMethodsComponent
  }, {
    path: 'my-bookings',
    component: _client_bookings_client_bookings_component__WEBPACK_IMPORTED_MODULE_3__.ClientBookingsComponent
  }, {
    path: 'trip-bookings',
    component: _client_bookings_client_trip_bookings_client_trip_booking_component__WEBPACK_IMPORTED_MODULE_30__.ClientTripBookingsComponent
  }, {
    path: 'itinerary-bookings/:id',
    component: _itinerary_bookings_itinerary_bookings_component__WEBPACK_IMPORTED_MODULE_31__.ItineraryBookingsComponent
  }, {
    path: 'inbox',
    component: _client_inbox_client_inbox_component__WEBPACK_IMPORTED_MODULE_18__.ClientInboxComponent
  }, {
    path: 'inbox/:idConversation',
    component: _view_client_messages_view_client_messages_component__WEBPACK_IMPORTED_MODULE_20__.ViewClientMessagesComponent
  }, {
    path: 'all-notifications',
    component: src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_22__.AllNotificationsComponent
  }, {
    path: 'my-forum',
    loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_features_forums_forums_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../forums/forums.module */ 79470)).then(m => m.ForumsModule)
  }, {
    path: 'my-booking',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_standalone-components_room-card_room-card_component_ts-node_modules_angular_m-c08a2c"), __webpack_require__.e("default-src_app_features_reservations_reservations_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../reservations/reservations.module */ 94436)).then(m => m.ReservationsModule)
  }, {
    path: 'change-password',
    component: _standalone_components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_14__.ChangePassComponent
  }, {
    path: 'delete-account',
    component: _delete_client_delete_client_component__WEBPACK_IMPORTED_MODULE_0__.DeleteClientComponent
  }, {
    path: 'settings',
    component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_23__.SettingsComponent
  }, {
    path: '',
    redirectTo: 'profile',
    pathMatch: "full"
  }]
}];
let RoleClientModule = class RoleClientModule {};
RoleClientModule = (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_35__.NgModule)({
  declarations: [_delete_client_delete_client_component__WEBPACK_IMPORTED_MODULE_0__.DeleteClientComponent, _client_payment_methods_client_payment_methods_component__WEBPACK_IMPORTED_MODULE_1__.ClientPaymentMethodsComponent, _client_view_client_component__WEBPACK_IMPORTED_MODULE_2__.ClientComponent, _client_bookings_client_bookings_component__WEBPACK_IMPORTED_MODULE_3__.ClientBookingsComponent, _components_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_4__.ClientProfileComponent, _client_site_client_site_component__WEBPACK_IMPORTED_MODULE_6__.ClientSiteComponent, _client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.ClientDashboardComponent, _components_faq_footer_faq_footer_component__WEBPACK_IMPORTED_MODULE_8__.FaqFooterComponent, _view_client_reservation_view_client_reservation_component__WEBPACK_IMPORTED_MODULE_16__.ViewClientReservationComponent, _client_inbox_client_inbox_component__WEBPACK_IMPORTED_MODULE_18__.ClientInboxComponent, _components_conversation_item_card_conversation_item_card_component__WEBPACK_IMPORTED_MODULE_19__.ConversationItemCardComponent, _view_client_messages_view_client_messages_component__WEBPACK_IMPORTED_MODULE_20__.ViewClientMessagesComponent, _settings_settings_component__WEBPACK_IMPORTED_MODULE_23__.SettingsComponent, _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_25__.EnrollmentComponent, _enrollment_enrollment_steps_welcome_screen_welcome_screen_component__WEBPACK_IMPORTED_MODULE_26__.WelcomeScreenComponent, _enrollment_enrollment_steps_client_preferences_client_preferences_component__WEBPACK_IMPORTED_MODULE_27__.ClientPreferencesComponent, _enrollment_enrollment_steps_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_28__.UserDataComponent, _enrollment_enrollment_steps_finish_enrollment_finish_enrollment_component__WEBPACK_IMPORTED_MODULE_29__.FinishEnrollmentComponent, _client_bookings_client_trip_bookings_client_trip_booking_component__WEBPACK_IMPORTED_MODULE_30__.ClientTripBookingsComponent, _itinerary_bookings_itinerary_bookings_component__WEBPACK_IMPORTED_MODULE_31__.ItineraryBookingsComponent, _enrollment_enrollment_steps_trial_active_trial_active_component__WEBPACK_IMPORTED_MODULE_33__.TrialActiveComponent],
  exports: [_enrollment_enrollment_steps_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_28__.UserDataComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_37__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormsModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_40__.MatLegacyFormFieldModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_41__.MatLegacySelectModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__.MatIconModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_43__.MatDatepickerModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_44__.MatLegacyInputModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_45__.MatLegacyButtonModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_46__.MatLegacyCheckboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _standalone_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent, _standalone_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__.HeaderComponent, _standalone_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__.MenuComponent, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_12__.DashboardHeaderComponent, _standalone_components_resource_card_resource_card_component__WEBPACK_IMPORTED_MODULE_15__.ResourceCardComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_47__.CarouselModule, _standalone_components_favorite_resource_card_favorite_resource_card_component__WEBPACK_IMPORTED_MODULE_17__.FavoriteResourceCardComponent, src_app_standalone_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_21__.ConversationComponent, src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_22__.AllNotificationsComponent, _standalone_components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_32__.UserSettingsComponent
  // ReservationsModule,
  // ReservationsModule
  ]
})], RoleClientModule);


/***/ }),

/***/ 55246:
/*!*********************************************************************!*\
  !*** ./src/app/features/role-client/settings/settings.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component.html?ngResource */ 66452);
/* harmony import */ var _settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component.scss?ngResource */ 38877);
/* harmony import */ var _settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);








let SettingsComponent = class SettingsComponent {
  constructor(route, router, fb, toastService, userService) {
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.toastService = toastService;
    this.userService = userService;
    this.form = this.fb.group({
      language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      distanceUnitMeasure: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      temperatureUnitMeasure: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      enablePushNotifications: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      enableLocation: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      enableSharedResource: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      acceptTermsAndConditions: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue],
      colorMode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      twoFactorAuthentication: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  getCurrentSettings() {
    this.userService.getCurrentSetting().subscribe(resp => {
      console.log('setari', resp);
      this.form.patchValue(resp);
    });
  }
  ngOnInit() {
    this.getCurrentSettings();
  }
  submit() {
    if (this.form.valid) {
      this.userService.updateCurrentSetting(this.form.value).subscribe(resp => {
        console.log('TRimis setari');
        console.log(resp);
        if (resp.success) {
          this.toastService.showToast('Succes', 'Setările au fost modificate!', 'success');
        } else {
          this.toastService.showToast('Eroare', 'Eroare de la server!', 'error');
        }
      }, () => {
        this.toastService.showToast('Eroare', 'Eroare de la server!', 'error');
      });
    } else {
      this.toastService.showToast('Eroare', 'Trebuie să completați toate câmpurile obligatorii și să acceptați termenii și condițiile', 'error');
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }];
};
SettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-settings',
  template: _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SettingsComponent);


/***/ }),

/***/ 68564:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/role-client/view-client-messages/view-client-messages.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewClientMessagesComponent": () => (/* binding */ ViewClientMessagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_client_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-client-messages.component.html?ngResource */ 6677);
/* harmony import */ var _view_client_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-client-messages.component.scss?ngResource */ 64919);
/* harmony import */ var _view_client_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_client_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/messages-conversations.service */ 33869);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/shared-experiences.service */ 229);
/* harmony import */ var src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/reservations.service */ 84803);
/* harmony import */ var _reservations_cancel_reservation_modal_cancel_reservation_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reservations/cancel-reservation-modal/cancel-reservation-modal.component */ 61723);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);














let ViewClientMessagesComponent = class ViewClientMessagesComponent {
  constructor(conversationsService, usersService, activatedRoute, sharedExperiencesService, reservationService, ngbModalService, modalService, router) {
    this.conversationsService = conversationsService;
    this.usersService = usersService;
    this.activatedRoute = activatedRoute;
    this.sharedExperiencesService = sharedExperiencesService;
    this.reservationService = reservationService;
    this.ngbModalService = ngbModalService;
    this.modalService = modalService;
    this.router = router;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.openedInfo = false;
  }
  ngOnInit() {
    //get current user
    this.getCurrentUser();
    this.getConversationId();
    //  this.getConversationId();
  }

  getConversationId() {
    //get conversation id from route
    this.activatedRoute.params.subscribe(params => {
      this.conversationId = params['idConversation'];
      if (this.conversationId) {
        this.getConversationById(this.conversationId);
      }
      console.log('id-ul conversatiei', this.conversationId);
    });
  }
  //get id to compare the others chat participants 
  getCurrentUser() {
    this.usersService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: user => {
        this.currentUserId = user.id;
      }
    });
  }
  //get data for conv info from header
  getUserById(id) {
    if (id !== this.currentUserId) {
      this.usersService.getUserById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: user => {
          if (user !== null) {
            this.convParticipantData = user;
          }
          // this.convParticipantID=user.id;
          console.log('USERUL LUAT PENTRU DETALIILE DIN HEADER', this.convParticipantData);
        }
      });
    }
  }
  getConversationById(id) {
    this.conversationsService.getConversationById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentConversation = res;
        //reservation
        if (res.participants.length === 2) {
          res.participants.forEach(idUserParticipant => {
            // this.convParticipantID=(idUserParticipant === this.currentUserId ? 'nimic' : idUserParticipant);
            if (idUserParticipant.userId !== this.currentUserId) {
              this.convParticipantID = idUserParticipant.userId;
              console.log('id-ul din conversatie lalala', this.convParticipantID);
            }
          });
          this.getUserById(this.convParticipantID);
          this.getReservationById(res.reservationId);
          console.log('id rezervare: ', res);
        }
        //if conversation is shared experience
        if (this.currentConversation.sharedExperienceId !== null) {
          this.getSharedExperienceById(this.currentConversation.sharedExperienceId);
        }
        // console.log('conv participant id',this.convParticipantID);
        // console.log('current user id',this.currentUserId);
      }
    });
  }

  getSharedExperienceById(idExp) {
    this.sharedExperiencesService.getSharedExperienceById(idExp).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: exp => {
        this.sharedExperienceData = exp;
        // console.log('exp luata dupa id',this.sharedExperienceData);
      }
    });
  }
  //get reservation for info
  getReservationById(idReservation) {
    this.reservationService.getReservationById(idReservation).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.reservationData = res;
        console.log('REZERVARE', this.reservationData);
        // this.getUserById(res.userId);
      }
    });
  }

  cancelReservationModal(elementId) {
    console.log("Modal apelat:", elementId);
    this.ngbModalService.open(_reservations_cancel_reservation_modal_cancel_reservation_modal_component__WEBPACK_IMPORTED_MODULE_6__.CancelReservationModalComponent, {
      centered: true
    });
    this.modalService.setElementId(elementId);
    // this.router.navigate(['/client/dashboard/my-bookings'])
    // this.modalService.triggerUserListChanges(true);
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
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: src_app_shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_4__.SharedExperiencesService
  }, {
    type: src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_5__.ReservationsService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal
  }, {
    type: src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_7__.ModalService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }];
};
ViewClientMessagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-view-client-messages',
  template: _view_client_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  styles: [(_view_client_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ViewClientMessagesComponent);


/***/ }),

/***/ 172:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/role-client/view-client-reservation/view-client-reservation.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewClientReservationComponent": () => (/* binding */ ViewClientReservationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_client_reservation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-client-reservation.component.html?ngResource */ 82325);
/* harmony import */ var _view_client_reservation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-client-reservation.component.scss?ngResource */ 11944);
/* harmony import */ var _view_client_reservation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_client_reservation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ViewClientReservationComponent = class ViewClientReservationComponent {};
ViewClientReservationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-view-client-reservation',
  template: _view_client_reservation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_view_client_reservation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ViewClientReservationComponent);


/***/ }),

/***/ 92143:
/*!***********************************************************!*\
  !*** ./src/app/shared/_services/friendRequest.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendRequestService": () => (/* binding */ FriendRequestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let FriendRequestService = class FriendRequestService {
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
  listMyFriend(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listMyFriend?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  rejectFriendRequest(friendRequestId, friendRequest) {
    return this.http.put('/bestinform/rejectFriendRequest?friendRequestId=' + friendRequestId, friendRequest);
  }
  acceptFriendRequest(friendRequestId, friendRequest) {
    return this.http.put('/bestinform/acceptFriendRequest?friendRequestId=' + friendRequestId, friendRequest);
  }
  sendFriendRequest(userId, friendRequest) {
    return this.http.post('/bestinform/sendFriendRequest?userId=' + userId, friendRequest);
  }
  getFriendRequestById(friendRequestId) {
    return this.http.get('/bestinform/getFriendRequestById?friendRequestId=' + friendRequestId);
  }
  deleteFriend(friendRequestId) {
    return this.http.delete('/bestinform/deleteFriend?friendRequestId=' + friendRequestId);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
FriendRequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], FriendRequestService);


/***/ }),

/***/ 82882:
/*!****************************************************!*\
  !*** ./src/app/shared/_services/modals.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 33741:
/*!**********************************************************************************************!*\
  !*** ./src/app/standalone-components/booking-confirmation/booking-confirmation.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingConfirmationComponent": () => (/* binding */ BookingConfirmationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _booking_confirmation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-confirmation.component.html?ngResource */ 50415);
/* harmony import */ var _booking_confirmation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-confirmation.component.scss?ngResource */ 61869);
/* harmony import */ var _booking_confirmation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_booking_confirmation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);






let BookingConfirmationComponent = class BookingConfirmationComponent {};
BookingConfirmationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  template: _booking_confirmation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_booking_confirmation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BookingConfirmationComponent);


/***/ }),

/***/ 44879:
/*!**************************************************************************************************!*\
  !*** ./src/app/standalone-components/favorite-resource-card/favorite-resource-card.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteResourceCardComponent": () => (/* binding */ FavoriteResourceCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _favorite_resource_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-resource-card.component.html?ngResource */ 29826);
/* harmony import */ var _favorite_resource_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite-resource-card.component.scss?ngResource */ 73189);
/* harmony import */ var _favorite_resource_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_favorite_resource_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/resources.service */ 3145);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);







let FavoriteResourceCardComponent = class FavoriteResourceCardComponent {
  constructor(resourceService) {
    this.resourceService = resourceService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.notFoundImg = "https://theperfectevent.com/wp-content/uploads/2020/01/Main-Scroll-2.jpg";
  }
  ngOnInit() {
    this.getResourceTypeName();
  }
  getResourceTypeName() {
    if (this.resource.resourceTypeId !== null && this.resource.resourceTypeId !== 'string') {
      this.resourceService.getResourceTypeById(this.resource.resourceTypeId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          this.resourceTypeName = res.nameRo;
        }
      });
    }
  }
  addResourceToFavorite() {
    console.log('ADD');
    this.favorite = !this.favorite;
    this.resourceService.addResourceToFavorite(this.resource.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log('l-am scos de la fav?', res);
      }
    });
  }
  deleteResourceFromFavorite() {
    console.log('DEL');
    this.favorite = !this.favorite;
    this.resourceService.deleteResourceFromFavorite(this.resource.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log('l-am scos de la fav?', res);
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }];
  static #_2 = this.propDecorators = {
    resource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    favorite: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
FavoriteResourceCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-favorite-resource-card',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
  template: _favorite_resource_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_favorite_resource_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FavoriteResourceCardComponent);


/***/ }),

/***/ 94992:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/role-client/_components/client-profile/client-profile.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.my-profile-container {\n  background-color: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  padding: 20px;\n}\n\n.profile-rectangle {\n  background-color: var(--primary-background);\n  max-height: 66px;\n  margin-bottom: 24px;\n  border: 1px solid var(--secondary-background);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-top: none;\n}\n\n.profile-picture {\n  width: 112px;\n  height: 112px;\n  border-radius: 50%;\n  position: relative;\n  object-fit: cover;\n  transform: translateY(-33px);\n}\n\n.user-information h2 {\n  color: #24398A;\n  margin: 0;\n}\n.user-information p {\n  color: #231F20;\n  margin: 0;\n}\n\n.intro-class h2 {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 140%;\n  color: #231F20;\n}\n.intro-class p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  color: rgba(35, 31, 32, 0.5);\n}\n.intro-class p.intro-add-details {\n  color: rgba(36, 57, 138, 0.5);\n}\n.intro-class span {\n  padding-right: 10px;\n}\n\n.image-container {\n  position: relative;\n  width: 100%;\n  min-height: 7.5rem;\n  height: 100%;\n  border: 1px solid rgba(36, 57, 138, 0.08);\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom: none;\n  overflow: hidden;\n}\n.image-container .no-image {\n  width: 100%;\n  min-height: inherit;\n  background: rgba(36, 57, 138, 0.04);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #24398A;\n  cursor: pointer;\n  gap: 0.75rem;\n}\n.image-container .no-image:before {\n  content: \"\\f03e\";\n  font-family: \"Font Awesome 5 Free\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.25rem;\n}\n.image-container .no-image:after {\n  font-size: 1rem;\n  content: attr(translatedContent);\n}\n.image-container .cover-img {\n  max-height: 350px;\n  object-fit: cover;\n}\n.image-container .btn-thumbnail, .image-container .btn-gallery {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n  border: none;\n}\n.image-container .btn-thumbnail i, .image-container .btn-gallery i {\n  color: var(--primary-background);\n  font-weight: 900;\n  font-size: 16px;\n}\n.image-container .btn-thumbnail {\n  position: absolute;\n  top: 2.125rem;\n  right: 2.125rem;\n}\n.image-container .btn-gallery {\n  position: absolute;\n  top: 0.875rem;\n  right: 0.875rem;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/_components/client-profile/client-profile.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,2CAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,aAAA;AAkBF;;AAfA;EACE,2CAAA;EACA,gBAAA;EACA,mBAAA;EACA,6CAAA;EACA,8BAAA;EACA,+BAAA;EACA,gBAAA;AAkBF;;AAfA;EACE,YAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,4BAAA;AAkBF;;AAdE;EACE,cD9BY;EC+BZ,SAAA;AAiBJ;AAdE;EACE,cD9BQ;EC+BR,SAAA;AAgBJ;;AAXE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AAcJ;AAXE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,4BAAA;AAaJ;AAVE;EACE,6BAAA;AAYJ;AATE;EACE,mBAAA;AAWJ;;AAPA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,yCAAA;EACA,2BAAA;EACA,4BAAA;EACA,mBAAA;EAEA,gBAAA;AASF;AAPE;EACE,WAAA;EACA,mBAAA;EACA,mCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cDnFY;ECoFZ,eAAA;EACA,YAAA;AASJ;AAPI;EACE,gBAAA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;AASN;AANI;EACE,eAAA;EACA,gCAAA;AAQN;AAJE;EACE,iBAAA;EACA,iBAAA;AAMJ;AAHE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mCAAA;EACA,mBAAA;EACA,YAAA;AAKJ;AAHI;EACE,gCAAA;EACA,gBAAA;EACA,eAAA;AAKN;AADE;EACE,kBAAA;EACA,aAAA;EACA,eAAA;AAGJ;AAAE;EACE,kBAAA;EACA,aAAA;EACA,eAAA;AAEJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.my-profile-container{\n  background-color: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  padding: 20px;\n}\n\n.profile-rectangle{\n  background-color: var(--primary-background);\n  max-height: 66px;\n  margin-bottom: 24px;\n  border: 1px solid var(--secondary-background);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-top: none;\n}\n\n.profile-picture {\n  width: 112px;\n  height: 112px;\n  border-radius: 50%;\n  position: relative;\n  object-fit: cover;\n  transform: translateY(-33px);\n}\n\n.user-information {\n  h2 {\n    color: $primary-color;\n    margin: 0;\n  }\n\n  p {\n    color: $paragraph;\n    margin: 0;\n  }\n}\n\n.intro-class{\n  h2{\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 140%;\n    color: #231F20;\n  }\n\n  p{\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 20px;\n    color: rgba(35, 31, 32, 0.5);\n  }\n\n  p.intro-add-details{\n    color: rgba(36, 57, 138, 0.5);\n  }\n\n  span{\n    padding-right:10px;\n  }\n}\n\n.image-container {\n  position: relative;\n  width: 100%;\n  min-height: 7.5rem;\n  height: 100%;\n  border: 1px solid rgba($primary-color, 0.08);\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom: none;\n  // border-radius: 8px;\n  overflow: hidden;\n\n  & .no-image {\n    width: 100%;\n    min-height: inherit;\n    background: rgba($primary-color, 0.04);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: $primary-color;\n    cursor: pointer;\n    gap: 0.75rem;\n\n    &:before {\n      content: '\\f03e';\n      font-family: 'Font Awesome 5 Free';\n      font-style: normal;\n      font-weight: 400;\n      font-size: 2.25rem;\n    }\n\n    &:after {\n      font-size: 1rem;\n      content: attr(translatedContent);\n    }\n  }\n\n  .cover-img{\n    max-height: 350px;\n    object-fit: cover;\n  }\n\n  .btn-thumbnail, .btn-gallery {\n    width: 2rem;\n    height: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba($primary-color, 0.16);\n    border-radius: 100%;\n    border: none;\n\n    i {\n      color: var(--primary-background);\n      font-weight: 900;\n      font-size: 16px;\n    }\n  }\n\n  .btn-thumbnail {\n    position: absolute;\n    top: 2.125rem;\n    right: 2.125rem;\n  }\n\n  .btn-gallery {\n    position: absolute;\n    top: 0.875rem;\n    right: 0.875rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 29503:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/features/role-client/_components/conversation-item-card/conversation-item-card.component.scss?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\np {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  color: black;\n  margin-bottom: 0px;\n}\n\n.conv-item-card {\n  align-items: center;\n  padding: 8px 16px 8px 8px;\n  gap: 8px;\n  background-color: #FFFFFF;\n  box-shadow: 4px 4px 12px 8px rgba(35, 31, 32, 0.08);\n  border-radius: 8px;\n}\n.conv-item-card .first-half-conv-item img {\n  width: 58px;\n  height: 58px;\n  border-radius: 100px;\n}\n.conv-item-card .first-half-conv-item h4 {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  color: #231F20;\n}\n.conv-item-card .first-half-conv-item p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  opacity: 0.5;\n  max-width: 600px;\n}\n.conv-item-card .second-half-conv-item p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  color: #231F20;\n  opacity: 0.5;\n}\n.conv-item-card .second-half-conv-item .yellow-label {\n  background: #FFCC04;\n  border-radius: 100px;\n  padding: 2px;\n  width: 20px;\n  height: 20px;\n}\n.conv-item-card .second-half-conv-item .yellow-label p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  color: #231F20;\n  margin: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/_components/conversation-item-card/conversation-item-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;AAiBJ;;AAdA;EACI,mBAAA;EACA,yBAAA;EACA,QAAA;EACA,yBAAA;EACA,mDAAA;EACA,kBAAA;AAiBJ;AAdQ;EACI,WAAA;EACA,YAAA;EACA,oBAAA;AAgBZ;AAbQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cD7BA;AC4CZ;AAZQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AAcZ;AATQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cDlDA;ECmDA,YAAA;AAWZ;AARQ;EACI,mBAAA;EACA,oBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AAUZ;AATY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cDlEJ;ECmEI,WAAA;AAWhB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\np{\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 140%;\n    /* identical to box height, or 17px */\n\n    display: flex;\n    align-items: center;\n    color: black;\n    margin-bottom: 0px;\n}\n\n.conv-item-card{\n    align-items: center;\n    padding: 8px 16px 8px 8px;\n    gap: 8px;\n    background-color: #FFFFFF;\n    box-shadow: 4px 4px 12px 8px rgba(35, 31, 32, 0.08);\n    border-radius: 8px;\n\n    .first-half-conv-item{\n        img{\n            width: 58px;\n            height: 58px;\n            border-radius: 100px;\n        }\n    \n        h4{\n            font-weight: 700;\n            font-size: 16px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            color:$paragraph;\n        }\n\n        p{\n            font-weight: 400;\n            font-size: 12px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            opacity: 0.5;\n            max-width: 600px;\n        }\n    }\n\n    .second-half-conv-item{\n        p{\n            font-weight: 400;\n            font-size: 14px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            color: $paragraph;\n            opacity: 0.5;\n        }\n\n        .yellow-label{\n            background: #FFCC04;\n            border-radius: 100px;\n            padding:2px;\n            width: 20px;\n            height: 20px;\n            p{\n                font-weight: 400;\n                font-size: 12px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                color: $paragraph;\n                margin: 0px;\n            }\n            \n        }\n    }\n    \n\n\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 34808:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/role-client/_components/faq-footer/faq-footer.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.entire-comp {\n  width: 100%;\n}\n.entire-comp .footer {\n  background-color: var(--header-footer-background);\n}\n.entire-comp .footer .p-title {\n  font-size: 38px;\n  font-weight: 700;\n}\n.entire-comp .footer .container-links {\n  font-size: 12px;\n  font-weight: 700;\n}\n.entire-comp .footer mat-form-field {\n  width: 100%;\n}\n\n/* Set top-lef and bottom-left corner radius */\n:host ::ng-deep .mat-form-field-outline-start {\n  border-radius: 30px 0 0 30px !important;\n  min-width: 30px !important;\n}\n\n/* Set top-right and bottom-right corner radius */\n:host ::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 30px 30px 0 !important;\n}\n\n.container-links a {\n  text-decoration: none;\n  color: #000;\n}\n\n.container-links a:hover {\n  color: #24398A;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/_components/faq-footer/faq-footer.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;AAkBF;AAjBE;EACE,iDAAA;AAmBJ;AAjBI;EACE,eAAA;EACA,gBAAA;AAmBN;AAhBI;EACE,eAAA;EACA,gBAAA;AAkBN;AAfI;EACE,WAAA;AAiBN;;AAXA,8CAAA;AACA;EACE,uCAAA;EACA,0BAAA;AAcF;;AAXA,iDAAA;AACA;EACE,uCAAA;AAcF;;AAXA;EACE,qBAAA;EACA,WAAA;AAcF;;AAXA;EACE,cDxCc;ACsDhB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n.entire-comp{\n  width: 100%;\n  .footer{\n    background-color:var(--header-footer-background);\n\n    .p-title{\n      font-size:38px ;\n      font-weight: 700;\n    }\n\n    .container-links{\n      font-size:12px;\n      font-weight: 700;\n    }\n\n    mat-form-field{\n      width:100%;\n    }\n\n  }\n}\n\n/* Set top-lef and bottom-left corner radius */\n:host ::ng-deep .mat-form-field-outline-start {\n  border-radius: 30px 0 0 30px !important;\n  min-width: 30px !important;\n}\n\n/* Set top-right and bottom-right corner radius */\n:host ::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 30px 30px 0 !important;\n}\n\n.container-links a {\n  text-decoration: none;\n  color: #000;\n}\n\n.container-links a:hover {\n  color: $primary-color;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43940:
/*!************************************************************************************************!*\
  !*** ./src/app/features/role-client/client-bookings/client-bookings.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.my-bookings-container {\n  background-color: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n\n.booking-delighted-container {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n  background-blend-mode: normal, luminosity, normal;\n}\n.booking-delighted-container .booking-delighted-text {\n  max-width: 540px;\n}\n.booking-delighted-container h2 {\n  color: white;\n  font-weight: 700;\n  font-size: 36px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n}\n.booking-delighted-container p {\n  color: white;\n  margin-bottom: 0px;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n}\n.booking-delighted-container p span {\n  color: rgb(255, 204, 4);\n  margin: 0px 5px 0px 5px;\n}\n\n.client-general-box .page-header h2 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 140%;\n  /* identical to box height, or 45px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Primary */\n  color: #24398A;\n}\n\n.experiences-card-class {\n  border: 1px #edf0fa solid;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.experiences-card-class p {\n  margin-bottom: 2px !important;\n}\n.experiences-card-class h4, .experiences-card-class a {\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  color: #24398A;\n  flex-grow: 1;\n  text-decoration: none;\n}\n.experiences-card-class p {\n  font-weight: 400;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  /* Title */\n  color: #231F20;\n}\n.experiences-card-class .rate-button .btn-rate-booking {\n  border: none;\n  height: 100%;\n}\n.experiences-card-class .rate-button .btn-rate-booking i.active-thumbs-up {\n  font-style: normal;\n  font-weight: 900;\n  font-size: 24px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #34A853;\n}\n.experiences-card-class .rate-button .btn-rate-booking i.active-thumbs-down {\n  font-style: normal;\n  font-weight: 900;\n  font-size: 24px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #EA4335;\n}\n.experiences-card-class .rate-button .btn-rate-booking:hover {\n  background: rgba(237, 240, 250, 0.8);\n}\n.experiences-card-class .rate-button .btn-rate-booking:focus, .experiences-card-class .rate-button .btn-rate-booking:active {\n  background: rgba(237, 240, 250, 0.48);\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled {\n  cursor: not-allowed;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled i.active-thumbs-up {\n  opacity: 50%;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled i.active-thumbs-down {\n  opacity: 50%;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled:hover {\n  box-shadow: none;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 {\n  background-color: #24398A;\n  border-right: 1px white dotted;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 .col-lg-9 h4 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #FFFFFF;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 .col-lg-9 p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #2CCEA7;\n}\n.experiences-card-class .align-items-center.py-3.col-lg-1 {\n  background-color: #24398A;\n}\n.experiences-card-class .align-items-center.py-3.col-lg-1 .col-lg-3 {\n  color: white;\n  font-weight: 900;\n  font-size: 14px;\n  line-height: 140%;\n  /* identical to box height, or 20px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n.hide-button {\n  display: none;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .mobile-header {\n    display: block;\n    background-color: var(--primary-background);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  }\n  .web-header {\n    display: none;\n  }\n  .my-bookings-container .px-10 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .container.my-bookings-container {\n    background: white;\n    margin-top: 20px !important;\n  }\n  .client-general-box {\n    padding: 0px;\n  }\n  .my-bookings-container {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n    border-radius: 0px;\n  }\n}\n@media only screen and (min-width: 481px) and (max-width: 768px) {\n  .my-bookings-container .px-10 {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n@media only screen and (min-width: 769px) and (max-width: 1023px) {\n  .my-bookings-container .px-10 {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/client-bookings/client-bookings.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;AAkBJ;;AAfA;EAEI,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,oHAAA;EAGA,iDAAA;AAeJ;AAdI;EACI,gBAAA;AAgBR;AAbI;EACI,YAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAeR;AAZI;EACI,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EAEA,uBAAA;AAaR;AAZQ;EACI,uBAAA;EACA,uBAAA;AAcZ;;AANI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;EAEA,cD3DQ;ACiEhB;;AADA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;AAIJ;AADI;EACI,6BAAA;AAGR;AAIQ;EACI,gBAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,YAAA;EACA,qBAAA;AAHZ;AAKQ;EACI,gBAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EAEA,UAAA;EAEA,cD7FA;ACuFZ;AAiBQ;EACI,YAAA;EACA,YAAA;AAfZ;AAiBY;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;AAfhB;AAkBY;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;AAhBhB;AAmBY;EACE,oCAAA;AAjBd;AAoBY;EACE,qCAAA;AAlBd;AAsBQ;EACI,mBAAA;AApBZ;AAsBY;EACI,YAAA;AApBhB;AAuBY;EACI,YAAA;AArBhB;AAwBY;EACE,gBAAA;AAtBd;AA4BI;EACI,yBDrKQ;ECsKR,8BAAA;AA1BR;AA8BY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;AA5BhB;AA8BY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;AA5BhB;AAkCK;EACG,yBDnMQ;ACmKhB;AAkCQ;EACI,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AAhCZ;;AA0CA;EACA,aAAA;AAvCA;;AA0CA;EACI;IACI,cAAA;IACA,2CAAA;IACA,2CAAA;EAvCN;EAyCE;IACI,aAAA;EAvCN;EA0CE;IACI,iBAAA;IACA,kBAAA;EAxCN;EA2CE;IACI,iBAAA;IACA,2BAAA;EAzCN;EA6CE;IACI,YAAA;EA3CN;EA8CE;IACI,6BAAA;IACA,YAAA;IACA,gBAAA;IACA,kBAAA;EA5CN;AACF;AAgDA;EAGI;IACI,kBAAA;IACA,mBAAA;EAhDN;AACF;AAqDA;EAGI;IACI,kBAAA;IACA,mBAAA;EArDN;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.my-bookings-container{\n    background-color: var(--primary-background);\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n}\n\n.booking-delighted-container{\n    // background-color: var(--primary-background);\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n    background: radial-gradient(100% 787.93% at 0% 100%,\n    rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%) ,\n    #24398A;\n    background-blend-mode: normal, luminosity, normal;\n    .booking-delighted-text{\n        max-width: 540px;\n    }\n\n    h2{\n        color:white;\n        font-weight: 700;\n        font-size: 36px;\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n    }\n\n    p{\n        color:white;\n        margin-bottom: 0px;\n        font-weight: 400;\n        font-size: 16px;\n\n        letter-spacing: -0.02em;\n        span {\n            color: rgba(255, 204, 4, 1);\n            margin:0px 5px 0px 5px;\n        }\n    }\n\n\n}\n\n.client-general-box .page-header{\n    h2{\n        font-weight: 700;\n        font-size: 32px;\n        line-height: 140%;\n        /* identical to box height, or 45px */\n\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n\n        /* Primary */\n\n        color: $primary-color;\n    }\n}\n\n//my-experiences-card-style / shared experiences-card-style------------------------------------------------\n.experiences-card-class{\n    border: 1px $background-secondary solid;\n    border-radius: 8px;\n    overflow: hidden;\n\n    //diminuate paragraph bottom margin\n    p{\n        margin-bottom: 2px!important;\n    }\n\n\n    //white part of the card\n    //title, date, location\n    // .col-lg-9.p-2.align-items-center{\n        h4,a{\n            font-weight: 600;\n            font-size: 16px;\n\n            display: flex;\n            align-items: center;\n            color: #24398A;\n            flex-grow: 1;\n            text-decoration: none;\n        }\n        p{\n            font-weight: 400;\n            font-size: 12px;\n\n            display: flex;\n            align-items: center;\n            text-align: center;\n\n            /* Title */\n\n            color: $paragraph;\n        }\n   // }\n\n\n\n\n\n    .rate-button{\n        // background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), white;\n\n        .btn-rate-booking {\n            border: none;\n            height: 100%;\n\n            i.active-thumbs-up{\n                font-style: normal;\n                font-weight: 900;\n                font-size: 24px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                text-align: center;\n                color: #34A853;\n            }\n\n            i.active-thumbs-down{\n                font-style: normal;\n                font-weight: 900;\n                font-size: 24px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                text-align: center;\n                color: #EA4335;\n            }\n\n            &:hover {\n              background: rgba($background-secondary, 80%);\n            }\n\n            &:focus, &:active {\n              background: rgba($background-secondary, 48%);\n            }\n        }\n\n        .btn-rate-booking:disabled{\n            cursor: not-allowed;\n\n            i.active-thumbs-up{\n                opacity: 50%;\n            }\n\n            i.active-thumbs-down{\n                opacity: 50%\n            }\n\n            &:hover {\n              box-shadow: none;\n            }\n        }\n    }\n\n    //blue part\n    .blue.align-items-center.col-lg-2{\n        background-color: $primary-color;\n        border-right: 1px white dotted;\n\n        //price and completed/canceled\n        .col-lg-9{\n            h4{\n                font-weight: 600;\n                font-size: 16px;\n                line-height: 140%;\n                /* or 22px */\n                display: flex;\n                align-items: center;\n                text-align: center;\n                color: #FFFFFF;\n            }\n            p{\n                font-weight: 400;\n                font-size: 12px;\n                line-height: 140%;\n                /* identical to box height, or 17px */\n                display: flex;\n                align-items: center;\n                text-align: center;\n                color: #2CCEA7;\n            }\n        }\n    }\n\n     // ... dots\n     .align-items-center.py-3.col-lg-1{\n        background-color: $primary-color;\n\n        .col-lg-3{\n            color: white;\n            font-weight: 900;\n            font-size: 14px;\n            line-height: 140%;\n            /* identical to box height, or 20px */\n            display: flex;\n            align-items: center;\n            text-align: center;\n        }\n     }\n}\n\n.rate-button{\n    // background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), white;\n}\n\n//after the customer gives a review, hide the other one\n.hide-button{\ndisplay:none\n}\n\n@media only screen and (min-width:320px) and (max-width: 480px){\n    .mobile-header{\n        display: block;\n        background-color: var(--primary-background);\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    }\n    .web-header{\n        display: none;\n    }\n\n    .my-bookings-container .px-10{\n        padding-left: 0px;\n        padding-right: 0px;\n    }\n\n    .container.my-bookings-container{\n        background: white;\n        margin-top:20px!important;\n    }\n\n    //no margin/padding for container-fluid\n    .client-general-box{\n        padding:0px;\n    }\n\n    .my-bookings-container{\n        background-color: transparent;\n        border: none;\n        box-shadow:none;\n        border-radius: 0px;\n    }\n\n}\n\n@media only screen and (min-width:481px) and (max-width: 768px){\n\n\n    .my-bookings-container .px-10{\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n\n\n}\n\n@media only screen and (min-width:769px) and (max-width: 1023px){\n\n\n    .my-bookings-container .px-10{\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n\n\n}\n\n@media only screen and (min-width:1024px) and (max-width: 1200px){\n\n}\n\n@media only screen and (min-width:1200px){\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 58582:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/features/role-client/client-bookings/client-trip-bookings/client-trip-bookings.component.scss?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.my-bookings-container {\n  background-color: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n\n.booking-delighted-container {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n  background-blend-mode: normal, luminosity, normal;\n}\n.booking-delighted-container .booking-delighted-text {\n  max-width: 540px;\n}\n.booking-delighted-container h2 {\n  color: white;\n  font-weight: 700;\n  font-size: 36px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n}\n.booking-delighted-container p {\n  color: white;\n  margin-bottom: 0px;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n}\n.booking-delighted-container p span {\n  color: rgb(255, 204, 4);\n  margin: 0px 5px 0px 5px;\n}\n\n.client-general-box .page-header h2 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 140%;\n  /* identical to box height, or 45px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Primary */\n  color: #24398A;\n}\n\n.experiences-card-class {\n  border: 1px #edf0fa solid;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.experiences-card-class p {\n  margin-bottom: 2px !important;\n}\n.experiences-card-class h4, .experiences-card-class a {\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  color: #24398A;\n  flex-grow: 1;\n  text-decoration: none;\n}\n.experiences-card-class p {\n  font-weight: 400;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  /* Title */\n  color: #231F20;\n}\n.experiences-card-class .rate-button .btn-rate-booking {\n  border: none;\n  height: 100%;\n}\n.experiences-card-class .rate-button .btn-rate-booking i.active-thumbs-up {\n  font-style: normal;\n  font-weight: 900;\n  font-size: 24px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #34A853;\n}\n.experiences-card-class .rate-button .btn-rate-booking i.active-thumbs-down {\n  font-style: normal;\n  font-weight: 900;\n  font-size: 24px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #EA4335;\n}\n.experiences-card-class .rate-button .btn-rate-booking:hover {\n  background: rgba(237, 240, 250, 0.8);\n}\n.experiences-card-class .rate-button .btn-rate-booking:focus, .experiences-card-class .rate-button .btn-rate-booking:active {\n  background: rgba(237, 240, 250, 0.48);\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled {\n  cursor: not-allowed;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled i.active-thumbs-up {\n  opacity: 50%;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled i.active-thumbs-down {\n  opacity: 50%;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled:hover {\n  box-shadow: none;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 {\n  background-color: #24398A;\n  border-right: 1px white dotted;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 .col-lg-9 h4 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #FFFFFF;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 .col-lg-9 p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #2CCEA7;\n}\n.experiences-card-class .align-items-center.py-3.col-lg-1 {\n  background-color: #24398A;\n}\n.experiences-card-class .align-items-center.py-3.col-lg-1 .col-lg-3 {\n  color: white;\n  font-weight: 900;\n  font-size: 14px;\n  line-height: 140%;\n  /* identical to box height, or 20px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n.hide-button {\n  display: none;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .mobile-header {\n    display: block;\n    background-color: var(--primary-background);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  }\n  .web-header {\n    display: none;\n  }\n  .my-bookings-container .px-10 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .container.my-bookings-container {\n    background: white;\n    margin-top: 20px !important;\n  }\n  .client-general-box {\n    padding: 0px;\n  }\n  .my-bookings-container {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n    border-radius: 0px;\n  }\n}\n@media only screen and (min-width: 481px) and (max-width: 768px) {\n  .my-bookings-container .px-10 {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n@media only screen and (min-width: 769px) and (max-width: 1023px) {\n  .my-bookings-container .px-10 {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/client-bookings/client-trip-bookings/client-trip-bookings.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;AAkBJ;;AAfA;EAEI,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,oHAAA;EAGA,iDAAA;AAeJ;AAdI;EACI,gBAAA;AAgBR;AAbI;EACI,YAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAeR;AAZI;EACI,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EAEA,uBAAA;AAaR;AAZQ;EACI,uBAAA;EACA,uBAAA;AAcZ;;AANI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;EAEA,cD3DQ;ACiEhB;;AADA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;AAIJ;AADI;EACI,6BAAA;AAGR;AAIQ;EACI,gBAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,YAAA;EACA,qBAAA;AAHZ;AAKQ;EACI,gBAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EAEA,UAAA;EAEA,cD7FA;ACuFZ;AAiBQ;EACI,YAAA;EACA,YAAA;AAfZ;AAiBY;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;AAfhB;AAkBY;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;AAhBhB;AAmBY;EACE,oCAAA;AAjBd;AAoBY;EACE,qCAAA;AAlBd;AAsBQ;EACI,mBAAA;AApBZ;AAsBY;EACI,YAAA;AApBhB;AAuBY;EACI,YAAA;AArBhB;AAwBY;EACE,gBAAA;AAtBd;AA4BI;EACI,yBDrKQ;ECsKR,8BAAA;AA1BR;AA8BY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;AA5BhB;AA8BY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;AA5BhB;AAkCK;EACG,yBDnMQ;ACmKhB;AAkCQ;EACI,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AAhCZ;;AA0CA;EACA,aAAA;AAvCA;;AA0CA;EACI;IACI,cAAA;IACA,2CAAA;IACA,2CAAA;EAvCN;EAyCE;IACI,aAAA;EAvCN;EA0CE;IACI,iBAAA;IACA,kBAAA;EAxCN;EA2CE;IACI,iBAAA;IACA,2BAAA;EAzCN;EA6CE;IACI,YAAA;EA3CN;EA8CE;IACI,6BAAA;IACA,YAAA;IACA,gBAAA;IACA,kBAAA;EA5CN;AACF;AAgDA;EAGI;IACI,kBAAA;IACA,mBAAA;EAhDN;AACF;AAqDA;EAGI;IACI,kBAAA;IACA,mBAAA;EArDN;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.my-bookings-container{\n    background-color: var(--primary-background);\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n}\n\n.booking-delighted-container{\n    // background-color: var(--primary-background);\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n    background: radial-gradient(100% 787.93% at 0% 100%,\n    rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%) ,\n    #24398A;\n    background-blend-mode: normal, luminosity, normal;\n    .booking-delighted-text{\n        max-width: 540px;\n    }\n\n    h2{\n        color:white;\n        font-weight: 700;\n        font-size: 36px;\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n    }\n\n    p{\n        color:white;\n        margin-bottom: 0px;\n        font-weight: 400;\n        font-size: 16px;\n\n        letter-spacing: -0.02em;\n        span {\n            color: rgba(255, 204, 4, 1);\n            margin:0px 5px 0px 5px;\n        }\n    }\n\n\n}\n\n.client-general-box .page-header{\n    h2{\n        font-weight: 700;\n        font-size: 32px;\n        line-height: 140%;\n        /* identical to box height, or 45px */\n\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n\n        /* Primary */\n\n        color: $primary-color;\n    }\n}\n\n//my-experiences-card-style / shared experiences-card-style------------------------------------------------\n.experiences-card-class{\n    border: 1px $background-secondary solid;\n    border-radius: 8px;\n    overflow: hidden;\n\n    //diminuate paragraph bottom margin\n    p{\n        margin-bottom: 2px!important;\n    }\n\n\n    //white part of the card\n    //title, date, location\n    // .col-lg-9.p-2.align-items-center{\n        h4,a{\n            font-weight: 600;\n            font-size: 16px;\n\n            display: flex;\n            align-items: center;\n            color: #24398A;\n            flex-grow: 1;\n            text-decoration: none;\n        }\n        p{\n            font-weight: 400;\n            font-size: 12px;\n\n            display: flex;\n            align-items: center;\n            text-align: center;\n\n            /* Title */\n\n            color: $paragraph;\n        }\n   // }\n\n\n\n\n\n    .rate-button{\n        // background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), white;\n\n        .btn-rate-booking {\n            border: none;\n            height: 100%;\n\n            i.active-thumbs-up{\n                font-style: normal;\n                font-weight: 900;\n                font-size: 24px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                text-align: center;\n                color: #34A853;\n            }\n\n            i.active-thumbs-down{\n                font-style: normal;\n                font-weight: 900;\n                font-size: 24px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                text-align: center;\n                color: #EA4335;\n            }\n\n            &:hover {\n              background: rgba($background-secondary, 80%);\n            }\n\n            &:focus, &:active {\n              background: rgba($background-secondary, 48%);\n            }\n        }\n\n        .btn-rate-booking:disabled{\n            cursor: not-allowed;\n\n            i.active-thumbs-up{\n                opacity: 50%;\n            }\n\n            i.active-thumbs-down{\n                opacity: 50%\n            }\n\n            &:hover {\n              box-shadow: none;\n            }\n        }\n    }\n\n    //blue part\n    .blue.align-items-center.col-lg-2{\n        background-color: $primary-color;\n        border-right: 1px white dotted;\n\n        //price and completed/canceled\n        .col-lg-9{\n            h4{\n                font-weight: 600;\n                font-size: 16px;\n                line-height: 140%;\n                /* or 22px */\n                display: flex;\n                align-items: center;\n                text-align: center;\n                color: #FFFFFF;\n            }\n            p{\n                font-weight: 400;\n                font-size: 12px;\n                line-height: 140%;\n                /* identical to box height, or 17px */\n                display: flex;\n                align-items: center;\n                text-align: center;\n                color: #2CCEA7;\n            }\n        }\n    }\n\n     // ... dots\n     .align-items-center.py-3.col-lg-1{\n        background-color: $primary-color;\n\n        .col-lg-3{\n            color: white;\n            font-weight: 900;\n            font-size: 14px;\n            line-height: 140%;\n            /* identical to box height, or 20px */\n            display: flex;\n            align-items: center;\n            text-align: center;\n        }\n     }\n}\n\n.rate-button{\n    // background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), white;\n}\n\n//after the customer gives a review, hide the other one\n.hide-button{\ndisplay:none\n}\n\n@media only screen and (min-width:320px) and (max-width: 480px){\n    .mobile-header{\n        display: block;\n        background-color: var(--primary-background);\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    }\n    .web-header{\n        display: none;\n    }\n\n    .my-bookings-container .px-10{\n        padding-left: 0px;\n        padding-right: 0px;\n    }\n\n    .container.my-bookings-container{\n        background: white;\n        margin-top:20px!important;\n    }\n\n    //no margin/padding for container-fluid\n    .client-general-box{\n        padding:0px;\n    }\n\n    .my-bookings-container{\n        background-color: transparent;\n        border: none;\n        box-shadow:none;\n        border-radius: 0px;\n    }\n\n}\n\n@media only screen and (min-width:481px) and (max-width: 768px){\n\n\n    .my-bookings-container .px-10{\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n\n\n}\n\n@media only screen and (min-width:769px) and (max-width: 1023px){\n\n\n    .my-bookings-container .px-10{\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n\n\n}\n\n@media only screen and (min-width:1024px) and (max-width: 1200px){\n\n}\n\n@media only screen and (min-width:1200px){\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 59085:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/role-client/client-dashboard/client-dashboard.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n}", "",{"version":3,"sources":["webpack://./src/app/features/role-client/client-dashboard/client-dashboard.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;AACF","sourcesContent":[":host {\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5588:
/*!******************************************************************************************!*\
  !*** ./src/app/features/role-client/client-inbox/client-inbox.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.inbox-container {\n  background-color: var(--primary-background);\n  padding: 0px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.inbox-container #inboxTab {\n  border: none;\n  height: 54px;\n  background-color: var(--secondary-background);\n  color: #231F20;\n  border-bottom: 1px solid #E6E7E8;\n}\n.inbox-container #inboxTab .nav-item {\n  width: 25%;\n}\n.inbox-container #inboxTab .nav-item button {\n  width: 100%;\n  height: 100%;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.inbox-container #inboxTab .nav-item button.active {\n  border: #FFFFFF 1px solid;\n  border-radius: 0px;\n  margin: 0px;\n}\n\n#inboxTab .btn-long.btn-color-fill {\n  height: 30px !important;\n  min-width: 30px !important;\n  width: 30px !important;\n  padding: 5px 10px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/client-inbox/client-inbox.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AAkBJ;;AAZI;EACM,YAAA;EACA,YAAA;EACA,6CAAA;EACA,cDVE;ECWJ,gCAAA;AAeR;AAbQ;EACI,UAAA;AAeZ;AAbY;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cDzBJ;ACwCZ;AAZY;EACI,yBAAA;EACA,kBAAA;EACA,WAAA;AAchB;;AALA;EACI,uBAAA;EACA,0BAAA;EACA,sBAAA;EACA,4BAAA;AAQJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.inbox-container{\n    background-color: var(--primary-background);\n    padding:0px;\n    border-radius: 8px;\n    overflow: hidden;\n}\n\n.inbox-container{\n\n    //tabs styling\n    #inboxTab{\n          border: none;\n          height: 54px;\n          background-color: var(--secondary-background);\n          color:$paragraph;\n        border-bottom: 1px solid #E6E7E8;\n\n        .nav-item{\n            width: 25%;\n\n            button{\n                width:100%;\n                height:100%;\n                font-weight: 600;\n                font-size: 16px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                letter-spacing: -0.02em;\n                color: $paragraph;\n\n            }\n            button.active{\n                border:$background-primary 1px solid;\n                border-radius: 0px;\n                margin: 0px;\n            }\n        }\n    } // end tabs styling\n\n\n}\n\n\n#inboxTab .btn-long.btn-color-fill {\n    height: 30px !important;\n    min-width: 30px !important;\n    width: 30px !important;\n    padding: 5px 10px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1446:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/role-client/client-payment-methods/client-payment-methods.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.payment-methods-container {\n  background-color: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n\n.payment-methods-container.mr-billing {\n  margin-right: 16px;\n}\n\n.web-header .page-header h2 {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 140%;\n  /* identical to box height, or 45px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Inside auto layout */\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n\n.payment-methods-container p.subscribe-mention {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 160%;\n  /* or 19px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Title */\n  color: rgba(35, 31, 32, 0.3);\n  /* Inside auto layout */\n  flex: none;\n  order: 0;\n  flex-grow: 1;\n}\n\n.payment-methods-container p.lock-encrypted {\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 160%;\n  /* or 19px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Title */\n  color: #231F20;\n  /* Inside auto layout */\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n.payment-methods-container p.lock-encrypted i {\n  padding-right: 6px;\n}\n\n.payment-methods-container h2 {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 20px;\n  /* identical to box height, or 83% */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.1px;\n  /* Inside auto layout */\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n\n.subcription-class p {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 160%;\n  /* identical to box height, or 26px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Title */\n  color: #231F20;\n}\n\n.subcription-class p span {\n  color: #24398A;\n  padding: 0 5px;\n}\n\n.subcription-class .d-flex.justify-content-between.subscription-details p {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Primary */\n  color: rgba(36, 57, 138, 0.8);\n}\n\n.subcription-class .d-flex.justify-content-between.subscription-details p.subscription-date {\n  color: rgba(35, 31, 32, 0.8);\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: block !important;\n  align-items: center;\n  letter-spacing: -0.02em;\n}\n\n.subcription-class .d-flex.justify-content-end p.subscription-cancel {\n  cursor: pointer;\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 140%;\n  /* identical to box height, or 20px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.1px;\n  /* Primary */\n  color: #24398A;\n}\n.subcription-class .d-flex.justify-content-end p.subscription-cancel i {\n  padding-right: 6px;\n}\n\n.colored-bck-subscription {\n  background: linear-gradient(0deg, rgba(237, 240, 250, 0.8) 0%, rgba(237, 240, 250, 0.2) 100%);\n}\n\ni.fas.fa-times-circle,\ni.fa-chevron-down {\n  color: rgba(35, 31, 32, 0.3);\n}\n\nh2 {\n  color: #24398A;\n}\n\n.experiences-card-class {\n  border: 1px #edf0fa solid;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.experiences-card-class p {\n  margin-bottom: 2px !important;\n}\n.experiences-card-class h4, .experiences-card-class a {\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  color: #24398A;\n  flex-grow: 1;\n  text-decoration: none;\n}\n.experiences-card-class p {\n  font-weight: 400;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  /* Title */\n  color: #231F20;\n}\n.experiences-card-class .rate-button .btn-rate-booking {\n  border: none;\n  height: 100%;\n}\n.experiences-card-class .rate-button .btn-rate-booking i.active-thumbs-up {\n  font-style: normal;\n  font-weight: 900;\n  font-size: 24px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #34A853;\n}\n.experiences-card-class .rate-button .btn-rate-booking i.active-thumbs-down {\n  font-style: normal;\n  font-weight: 900;\n  font-size: 24px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #EA4335;\n}\n.experiences-card-class .rate-button .btn-rate-booking:hover {\n  background: rgba(237, 240, 250, 0.8);\n}\n.experiences-card-class .rate-button .btn-rate-booking:focus, .experiences-card-class .rate-button .btn-rate-booking:active {\n  background: rgba(237, 240, 250, 0.48);\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled {\n  cursor: not-allowed;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled i.active-thumbs-up {\n  opacity: 50%;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled i.active-thumbs-down {\n  opacity: 50%;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled:hover {\n  box-shadow: none;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 {\n  background-color: #24398A;\n  border-right: 1px white dotted;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 .col-lg-9 h4 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #FFFFFF;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 .col-lg-9 p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #2CCEA7;\n}\n.experiences-card-class .align-items-center.py-3.col-lg-1 {\n  background-color: #24398A;\n}\n.experiences-card-class .align-items-center.py-3.col-lg-1 .col-lg-3 {\n  color: white;\n  font-weight: 900;\n  font-size: 14px;\n  line-height: 140%;\n  /* identical to box height, or 20px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .mobile-header {\n    display: block;\n    background-color: var(--primary-background);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  }\n  .web-header {\n    display: none;\n  }\n  .my-profile-container .px-10 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .container.my-profile-container {\n    background: white;\n    margin-top: 20px !important;\n  }\n  .payment-methods-container.mr-billing {\n    margin-right: 0px;\n  }\n}\n@media only screen and (min-width: 481px) and (max-width: 768px) {\n  .mobile-header {\n    display: none !important;\n  }\n  .payment-methods-container .px-8 {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .applied-jobs-card-class img {\n    display: none;\n  }\n  .payment-methods-container.mr-billing {\n    margin-right: 0px;\n  }\n}\n@media only screen and (min-width: 769px) and (max-width: 1023px) {\n  .mobile-header {\n    display: none !important;\n  }\n  .payment-methods-container .px-8 {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1200px) {\n  .mobile-header {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  .mobile-header {\n    display: none !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/client-payment-methods/client-payment-methods.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACI,2CAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;AAiBJ;;AAbA;EACI,kBAAA;AAgBJ;;AAZA;EACI,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;AAcJ;;AAXA;EACI,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,4BAAA;EACA,uBAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;AAaJ;;AAVA;EAII,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,cD1DQ;EC2DR,uBAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;AAUJ;AAzBI;EACG,kBAAA;AA2BP;;AATA;EACI,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,oCAAA;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EAEA,uBAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;AAUJ;;AANA;EACI,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EAEA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,UAAA;EACA,cDnGQ;AC0GZ;;AAJA;EACI,cD5GY;EC6GZ,cAAA;AAOJ;;AAHA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;EAEA,6BAAA;AAGJ;;AAAA;EACI,4BAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,yBAAA;EACA,mBAAA;EACA,uBAAA;AAEJ;;AAEA;EACI,eAAA;EAKA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EAEA,YAAA;EAEA,cDnKY;AC6JhB;AAZI;EACI,kBAAA;AAcR;;AAOA;EACI,6FAAA;AAJJ;;AAOA;;EAEI,4BAAA;AAJJ;;AAOA;EACI,cDjLY;AC6KhB;;AAQA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;AALJ;AAQI;EACI,6BAAA;AANR;AAaI;EACI,gBAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,YAAA;EACA,qBAAA;AAZR;AAcI;EACI,gBAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EAEA,UAAA;EAEA,cDlNI;ACmMZ;AA0BQ;EACI,YAAA;EACA,YAAA;AAxBZ;AA0BY;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;AAxBhB;AA2BY;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;AAzBhB;AA4BY;EACI,oCAAA;AA1BhB;AA6BY;EACI,qCAAA;AA3BhB;AA+BQ;EACI,mBAAA;AA7BZ;AA+BY;EACI,YAAA;AA7BhB;AAgCY;EACI,YAAA;AA9BhB;AAiCY;EACI,gBAAA;AA/BhB;AAqCI;EACI,yBD1RQ;EC2RR,8BAAA;AAnCR;AAuCY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;AArChB;AAuCY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;AArChB;AA2CI;EACI,yBDxTQ;AC+QhB;AA2CQ;EACI,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AAzCZ;;AA8CA;EACI;IACI,cAAA;IACA,2CAAA;IACA,2CAAA;EA3CN;EA6CE;IACI,aAAA;EA3CN;EA8CE;IACI,iBAAA;IACA,kBAAA;EA5CN;EA+CE;IACI,iBAAA;IACA,2BAAA;EA7CN;EAiDF;IACI,iBAAA;EA/CF;AACF;AAoDA;EAEI;IACI,wBAAA;EAnDN;EAwDE;IACI,kBAAA;IACA,mBAAA;EAtDN;EA2DM;IACG,aAAA;EAzDT;EA8DF;IACI,iBAAA;EA5DF;AACF;AA+DA;EAEI;IACI,wBAAA;EA9DN;EAiEE;IACI,kBAAA;IACA,mBAAA;EA/DN;AACF;AAoEA;EAEI;IACI,wBAAA;EAnEN;AACF;AAsEA;EAEI;IACI,wBAAA;EArEN;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","\n@import \"/src/app/theme/styles/components/colors\";\n\n.payment-methods-container{\n    background-color: var(--primary-background);\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n}\n\n//right margin\n.payment-methods-container.mr-billing{\n    margin-right: 16px;\n}\n\n//title\n.web-header .page-header h2{\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 32px;\n    line-height: 140%;\n    /* identical to box height, or 45px */\n\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n    /* Inside auto layout */\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n}\n\n.payment-methods-container p.subscribe-mention{\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 160%;\n    /* or 19px */\n\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n    /* Title */\n    color:rgba(35, 31, 32, 0.3);\n    /* Inside auto layout */\n    flex: none;\n    order: 0;\n    flex-grow: 1;\n}\n\n.payment-methods-container p.lock-encrypted{\n    i{\n       padding-right: 6px;\n    }\n    font-weight: 900;\n    font-size: 12px;\n    line-height: 160%;\n    /* or 19px */\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n    /* Title */\n    color: $paragraph;\n    /* Inside auto layout */\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n}\n\n//titles from divs\n.payment-methods-container h2{\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 20px;\n    /* identical to box height, or 83% */\n\n    display: flex;\n    align-items: center;\n    text-align: center;\n    letter-spacing: 0.1px;\n\n    /* Inside auto layout */\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n}\n\n//my subscription\n.subcription-class p{\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 160%;\n\n    /* identical to box height, or 26px */\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n\n    /* Title */\n    color: $paragraph;\n}\n\n.subcription-class p span{\n    color: $primary-color;\n    padding: 0 5px;\n}\n\n//subscription details\n.subcription-class .d-flex.justify-content-between.subscription-details p{\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 140%;\n    /* or 22px */\n\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n\n    /* Primary */\n\n    color: rgba($primary-color, 0.8);\n}\n\n.subcription-class .d-flex.justify-content-between.subscription-details p.subscription-date{\n    color: rgba($paragraph, 0.8);\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 140%;\n    /* or 22px */\n\n    display: block!important;\n    align-items: center;\n    letter-spacing: -0.02em;\n}\n\n//cancel subscription\n.subcription-class .d-flex.justify-content-end p.subscription-cancel{\n    cursor: pointer;\n    i{\n        padding-right: 6px;\n    }\n\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 140%;\n    /* identical to box height, or 20px */\n\n    display: flex;\n    align-items: center;\n    text-align: center;\n    letter-spacing: 0.1px;\n\n    /* Primary */\n\n    color: $primary-color;\n\n\n}\n.colored-bck-subscription{\n    background: linear-gradient(0deg, rgba($background-secondary,0.8) 0%, rgba($background-secondary,0.2) 100%);\n}\n//icons color\ni.fas.fa-times-circle,\ni.fa-chevron-down{\n    color: rgba($paragraph, 0.3);\n}\n\nh2{\n    color:$primary-color;\n}\n\n//my-experiences-card-style / shared experiences-card-style------------------------------------------------\n.experiences-card-class{\n    border: 1px $background-secondary solid;\n    border-radius: 8px;\n    overflow: hidden;\n\n    //diminuate paragraph bottom margin\n    p{\n        margin-bottom: 2px!important;\n    }\n\n\n    //white part of the card\n    //title, date, location\n    // .col-lg-9.p-2.align-items-center{\n    h4,a{\n        font-weight: 600;\n        font-size: 16px;\n\n        display: flex;\n        align-items: center;\n        color: #24398A;\n        flex-grow: 1;\n        text-decoration: none;\n    }\n    p{\n        font-weight: 400;\n        font-size: 12px;\n\n        display: flex;\n        align-items: center;\n        text-align: center;\n\n        /* Title */\n\n        color: $paragraph;\n    }\n    // }\n\n\n\n\n\n    .rate-button{\n        // background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), white;\n\n        .btn-rate-booking {\n            border: none;\n            height: 100%;\n\n            i.active-thumbs-up{\n                font-style: normal;\n                font-weight: 900;\n                font-size: 24px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                text-align: center;\n                color: #34A853;\n            }\n\n            i.active-thumbs-down{\n                font-style: normal;\n                font-weight: 900;\n                font-size: 24px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                text-align: center;\n                color: #EA4335;\n            }\n\n            &:hover {\n                background: rgba($background-secondary, 80%);\n            }\n\n            &:focus, &:active {\n                background: rgba($background-secondary, 48%);\n            }\n        }\n\n        .btn-rate-booking:disabled{\n            cursor: not-allowed;\n\n            i.active-thumbs-up{\n                opacity: 50%;\n            }\n\n            i.active-thumbs-down{\n                opacity: 50%\n            }\n\n            &:hover {\n                box-shadow: none;\n            }\n        }\n    }\n\n    //blue part\n    .blue.align-items-center.col-lg-2{\n        background-color: $primary-color;\n        border-right: 1px white dotted;\n\n        //price and completed/canceled\n        .col-lg-9{\n            h4{\n                font-weight: 600;\n                font-size: 16px;\n                line-height: 140%;\n                /* or 22px */\n                display: flex;\n                align-items: center;\n                text-align: center;\n                color: #FFFFFF;\n            }\n            p{\n                font-weight: 400;\n                font-size: 12px;\n                line-height: 140%;\n                /* identical to box height, or 17px */\n                display: flex;\n                align-items: center;\n                text-align: center;\n                color: #2CCEA7;\n            }\n        }\n    }\n\n    // ... dots\n    .align-items-center.py-3.col-lg-1{\n        background-color: $primary-color;\n\n        .col-lg-3{\n            color: white;\n            font-weight: 900;\n            font-size: 14px;\n            line-height: 140%;\n            /* identical to box height, or 20px */\n            display: flex;\n            align-items: center;\n            text-align: center;\n        }\n    }\n}\n\n@media only screen and (min-width:320px) and (max-width: 480px){\n    .mobile-header{\n        display: block;\n        background-color: var(--primary-background);\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    }\n    .web-header{\n        display: none;\n    }\n\n    .my-profile-container .px-10{\n        padding-left: 0px;\n        padding-right: 0px;\n    }\n\n    .container.my-profile-container{\n        background: white;\n        margin-top:20px!important;\n    }\n\n    //right margin\n.payment-methods-container.mr-billing{\n    margin-right: 0px;\n}\n\n\n}\n\n@media only screen and (min-width:481px) and (max-width: 768px){\n    //hide mobile header for this screen\n    .mobile-header{\n        display: none!important;\n    }\n\n\n\n    .payment-methods-container .px-8{\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n\n    //applied jobs\n    .applied-jobs-card-class{\n        img{\n           display: none;\n        }\n    }\n\n        //right margin\n.payment-methods-container.mr-billing{\n    margin-right: 0px;\n}\n}\n\n@media only screen and (min-width:769px) and (max-width: 1023px){\n    //hide mobile header for this screen\n    .mobile-header{\n        display: none!important;\n    }\n\n    .payment-methods-container .px-8{\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n\n\n}\n\n@media only screen and (min-width:1024px) and (max-width: 1200px){\n    //hide mobile header for this screen\n    .mobile-header{\n        display: none!important;\n    }\n}\n\n@media only screen and (min-width:1200px){\n    //hide mobile header for this screen\n    .mobile-header{\n        display: none!important;\n    }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88636:
/*!****************************************************************************************!*\
  !*** ./src/app/features/role-client/client-site/client-site.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n}", "",{"version":3,"sources":["webpack://./src/app/features/role-client/client-site/client-site.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;AACF","sourcesContent":[":host {\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 45989:
/*!***********************************************************************************!*\
  !*** ./src/app/features/role-client/client-view/client.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.my-profile-container {\n  background-color: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n\n.client-general-box .page-header h2 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 140%;\n  /* identical to box height, or 45px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Primary */\n  color: #24398A;\n}\n\n.shared-exp-card {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  height: 120px;\n}\n.shared-exp-card .info {\n  padding: 8px 12px;\n  width: 90%;\n}\n.shared-exp-card .info .name {\n  color: #24398A;\n  font-size: 16px;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n.shared-exp-card .info .row p {\n  margin-bottom: 0;\n  font-size: 12px;\n  line-height: 15px;\n  color: #24398A;\n  font-weight: 700;\n}\n.shared-exp-card .info .row p span {\n  color: #231F20;\n  font-weight: 400;\n}\n.shared-exp-card .menu-button {\n  width: 10%;\n  background-color: #24398A;\n  color: var(--primary-background);\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  cursor: pointer;\n}\n\n.experiences-card-class {\n  border: 1px #edf0fa solid;\n  border-radius: 8px;\n  overflow: hidden;\n  width: 392px;\n  height: 84px;\n}\n.experiences-card-class p {\n  margin-bottom: 2px !important;\n}\n.experiences-card-class .my-exp-details h4 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  align-items: center;\n  color: #24398A;\n  flex-grow: 1;\n  max-width: 400px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n.experiences-card-class .my-exp-details p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  /* Title */\n  color: #231F20;\n}\n.experiences-card-class .my-exp-price {\n  background-color: #24398A;\n  border-right: 1px white dotted;\n}\n.experiences-card-class .my-exp-price .col-lg-9 h4 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #FFFFFF;\n}\n.experiences-card-class .my-exp-price .col-lg-9 p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #2CCEA7;\n}\n.experiences-card-class .my-exp-options {\n  background-color: #24398A;\n}\n.experiences-card-class .my-exp-options .col-lg-3 {\n  color: white;\n  font-weight: 900;\n  font-size: 14px;\n  line-height: 140%;\n  /* identical to box height, or 20px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n.applied-jobs-card-class {\n  border: 1px #edf0fa solid;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.applied-jobs-card-class img {\n  overflow: hidden;\n  object-fit: cover;\n  height: 100%;\n  width: 76px;\n}\n.applied-jobs-card-class .applied-jobs-details {\n  width: 270px;\n}\n.applied-jobs-card-class .applied-jobs-details .green {\n  color: #34A853;\n}\n.applied-jobs-card-class .applied-jobs-details h4 {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 120%;\n  /* or 19px */\n  letter-spacing: -0.02em;\n  /* Primary */\n  color: #24398A;\n  flex: none;\n  order: 0;\n  flex-grow: 1;\n}\n.applied-jobs-card-class .applied-jobs-details h5 {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 126%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.applied-jobs-card-class .applied-jobs-details p {\n  margin-bottom: 0px;\n  font-weight: 400;\n  font-size: 8px;\n  line-height: 140%;\n  /* or 11px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.applied-jobs-card-class .menu-button-jobs {\n  height: 100px;\n  width: 36px;\n  background-color: #24398A;\n  color: var(--primary-background);\n  cursor: pointer;\n}\n.applied-jobs-card-class .col-4.col-sm-4.col-md-3.col-lg-3.col-xl-3.d-flex.justify-content-end.align-self-end.p-2 p {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  text-align: right;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin-bottom: 2px !important;\n}\n\n.courses-class {\n  border: 1px #edf0fa solid;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.courses-class img {\n  overflow: hidden;\n  object-fit: cover;\n  height: 100%;\n  width: 76px;\n}\n.courses-class .cours-details {\n  width: 270px;\n}\n.courses-class .cours-details h4 {\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  margin-bottom: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n.courses-class .cours-details p {\n  font-weight: 700;\n  font-size: 8px;\n  line-height: 126%;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin-bottom: 0px;\n}\n.courses-class .cours-details p span {\n  font-weight: 400;\n  font-size: 8px;\n  line-height: 126%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.courses-class .cours-details p i {\n  margin-right: 5px;\n}\n.courses-class .menu-button-courses {\n  height: 80px;\n  width: 36px;\n  background-color: #24398A;\n  color: var(--primary-background);\n  cursor: pointer;\n}\n\n.friends-notification {\n  background-color: #FFCC29;\n  border-radius: 50%;\n}\n\n.firends-card {\n  border: 1px #edf0fa solid;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.firends-card img {\n  height: 66px;\n  width: 66px;\n  border-radius: 50%;\n}\n.firends-card .col-8.col-sm-8.col-md-9.col-lg-9.col-xl-10 h4 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.02em;\n  /* Title */\n  color: #231F20;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n.firends-card .col-8.col-sm-8.col-md-9.col-lg-9.col-xl-10 p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Title */\n  color: rgba(35, 31, 32, 0.5);\n  flex: none;\n  order: 0;\n  flex-grow: 1;\n}\n.firends-card .col-2.col-sm-2.col-md-1.col-lg-1.col-xl-1 {\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 140%;\n  /* or 17px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.1px;\n  color: #24398A;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n\n.loialty-points-card .loialty-rectangle {\n  border: 1px #edf0fa solid;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.loialty-points-card img {\n  height: 40px;\n  width: 40px;\n  margin-right: 4px;\n}\n.loialty-points-card h4 {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 140%;\n  /* identical to box height, or 28px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  /* Primary */\n  color: #24398A;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  margin: 8px 0px 0px !important;\n}\n.loialty-points-card h4 span {\n  color: #FFCC29;\n  padding: 0px 4px;\n}\n.loialty-points-card h5 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  color: #24398A;\n  flex: none;\n  order: 0;\n  flex-grow: 1;\n}\n.loialty-points-card li ul {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  /* or 20px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Title */\n  color: #231F20;\n  flex: none;\n  order: 0;\n  flex-grow: 1;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .mobile-header {\n    display: block;\n    background-color: var(--primary-background);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  }\n  .web-header {\n    display: none;\n  }\n  .my-profile-container .px-10 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .container.my-profile-container {\n    background: white;\n    margin-top: 20px !important;\n  }\n  .client-general-box {\n    padding: 0px;\n  }\n  .my-profile-container {\n    border: none;\n    box-shadow: none;\n    border-radius: 0px;\n  }\n  .applied-jobs-card-class img {\n    display: none;\n  }\n}\n@media only screen and (min-width: 481px) and (max-width: 768px) {\n  .mobile-header {\n    display: none !important;\n  }\n  .my-profile-container .px-10 {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .applied-jobs-card-class img {\n    display: none;\n  }\n}\n@media only screen and (min-width: 769px) and (max-width: 1023px) {\n  .mobile-header {\n    display: none !important;\n  }\n  .my-profile-container .px-10 {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1200px) {\n  .mobile-header {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  .mobile-header {\n    display: none !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/client-view/client.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;AAkBJ;;AANI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;EAEA,cD7BQ;ACmChB;;AACA;EACI,yCAAA;EACA,kBAAA;EAEA,aAAA;AACJ;AACI;EACI,iBAAA;EACA,UAAA;AACR;AAAQ;EACI,cD9CI;EC+CJ,eAAA;EACA,gBAAA;EAEA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AACZ;AAGY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD/DA;ECgEA,gBAAA;AADhB;AAGgB;EACI,cD/DZ;ECgEY,gBAAA;AADpB;AAQI;EACI,UAAA;EACA,yBD7EQ;EC8ER,gCAAA;EACA,4BAAA;EACA,+BAAA;EACA,eAAA;AANR;;AASA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;AANJ;AAQI;EACI,6BAAA;AANR;AAaQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EAEA,YAAA;EACA,mBAAA;EACA,cAAA;EACA,YAAA;EAEA,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAbZ;AAeQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EAEA,UAAA;EAEA,cD5HA;AC4GZ;AAqBI;EACI,yBDvIQ;ECwIR,8BAAA;AAnBR;AAuBY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;AArBhB;AAuBY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;AArBhB;AA2BK;EACG,yBDrKQ;AC4IhB;AA2BQ;EACI,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AAzBZ;;AAgCA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;AA7BJ;AA+BI;EAEI,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,WAAA;AA9BR;AAiCG;EACC,YAAA;AA/BJ;AAgCI;EACI,cAAA;AA9BR;AAgCI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,cD/MQ;ECgNR,UAAA;EACA,QAAA;EACA,YAAA;AA9BR;AAiCI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDrNI;ACsLZ;AAmCI;EACI,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cDlOI;ACiMZ;AAuCG;EAEC,aAAA;EACA,WAAA;EACA,yBDjPY;ECkPZ,gCAAA;EAGA,eAAA;AAxCJ;AA4CQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDhQI;ECkQJ,6BAAA;AA3CZ;;AAiDA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;AA9CJ;AAgDI;EAEI,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,WAAA;AA/CR;AAkDI;EACI,YAAA;AAhDR;AAkDQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACC,cDxRD;ECyRC,kBAAA;EAEA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAjDb;AAoDQ;EACI,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;EACA,kBAAA;AAlDZ;AAoDY;EACI,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;AAlDhB;AAoDY;EACI,iBAAA;AAlDhB;AAuDI;EAEI,YAAA;EACA,WAAA;EACA,yBDjUQ;ECkUR,gCAAA;EAGA,eAAA;AAxDR;;AA4DA;EACI,yBDxUc;ECyUd,kBAAA;AAzDJ;;AA6DA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;AA1DJ;AA4DI;EACI,YAAA;EACA,WAAA;EACA,kBAAA;AA1DR;AA+DQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,uBAAA;EACA,UAAA;EACA,cDjWA;ECkWA,UAAA;EACA,QAAA;EACA,YAAA;AA7DZ;AAgEQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,4BAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;AA9DZ;AAmEI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,cDtYQ;ECuYR,UAAA;EACA,QAAA;EACA,YAAA;AAjER;;AA2EI;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;AAxER;AA2EI;EACI,YAAA;EACA,WAAA;EACA,iBAAA;AAzER;AA4EI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,cDxaQ;ECyaR,UAAA;EACA,QAAA;EACA,YAAA;EACA,8BAAA;AA1ER;AA4EQ;EACI,cD7aM;EC8aN,gBAAA;AA1EZ;AA6EI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,cD1bQ;EC2bR,UAAA;EACA,QAAA;EACA,YAAA;AA3ER;AA6EI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,cAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;AA3ER;;AAiFA;EACI;IACI,cAAA;IACA,2CAAA;IACA,2CAAA;EA9EN;EAgFE;IACI,aAAA;EA9EN;EAiFE;IACI,iBAAA;IACA,kBAAA;EA/EN;EAkFE;IACI,iBAAA;IACA,2BAAA;EAhFN;EAoFE;IACI,YAAA;EAlFN;EAqFE;IAEI,YAAA;IACA,gBAAA;IACA,kBAAA;EApFN;EAyFM;IACG,aAAA;EAvFT;AACF;AA2FA;EAEI;IACI,wBAAA;EA1FN;EA6FE;IACI,kBAAA;IACA,mBAAA;EA3FN;EAgGM;IACG,aAAA;EA9FT;AACF;AAkGA;EAEI;IACI,wBAAA;EAjGN;EAoGE;IACI,kBAAA;IACA,mBAAA;EAlGN;AACF;AAuGA;EAEI;IACI,wBAAA;EAtGN;AACF;AAyGA;EAEI;IACI,wBAAA;EAxGN;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.my-profile-container{\n    background-color: var(--primary-background);\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n}\n\n// owl-carousel-o{\n//     .owl-carousel{\n//         .owl-item{\n//             width:250px!important;\n//         }\n//     }\n// }\n\n.client-general-box .page-header{\n    h2{\n        font-weight: 700;\n        font-size: 32px;\n        line-height: 140%;\n        /* identical to box height, or 45px */\n\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n\n        /* Primary */\n\n        color: $primary-color;\n    }\n}\n//tabs style in _general.scss\n\n\n//my-experiences-card-style / shared experiences-card-style------------------------------------------------\n.shared-exp-card{\n    border: 1px solid rgba($primary-color, 0.16);\n    border-radius: 8px;\n    // width: 392px;\n    height: 120px;\n\n    .info{\n        padding: 8px 12px;\n        width: 90%;\n        .name{\n            color:$primary-color;\n            font-size: 16px;\n            font-weight: 700;\n\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-line-clamp: 1;\n            /* autoprefixer: ignore next */\n            -webkit-box-orient: vertical;\n        }\n\n        .row{\n            p{\n                margin-bottom: 0;\n                font-size: 12px;\n                line-height: 15px;\n                color: $primary-color;\n                font-weight: 700;\n\n                span{\n                    color:$title;\n                    font-weight: 400;\n                }\n            }\n        }\n\n    }\n\n    .menu-button{\n        width: 10%;\n        background-color: $primary-color;\n        color:var(--primary-background);\n        border-top-right-radius: 8px;\n        border-bottom-right-radius: 8px;\n        cursor:pointer;}\n\n}\n.experiences-card-class{\n    border: 1px $background-secondary solid;\n    border-radius: 8px;\n    overflow: hidden;\n    width: 392px;\n    height: 84px;\n    //diminuate paragraph bottom margin\n    p{\n        margin-bottom: 2px!important;\n    }\n\n\n    //white part of the card\n    //title, date, location\n    .my-exp-details{\n        h4{\n            font-weight: 600;\n            font-size: 16px;\n            line-height: 140%;\n\n            /* or 22px */\n            align-items: center;\n            color: #24398A;\n            flex-grow: 1;\n\n            max-width: 400px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-line-clamp: 1;\n            /* autoprefixer: ignore next */\n            -webkit-box-orient: vertical;\n        }\n        p{\n            font-weight: 400;\n            font-size: 12px;\n            line-height: 140%;\n            /* identical to box height, or 17px */\n\n            display: flex;\n            align-items: center;\n            text-align: center;\n\n            /* Title */\n\n            color: $paragraph;\n        }\n    }\n\n    //blue part\n    .my-exp-price{\n        background-color: $primary-color;\n        border-right: 1px white dotted;\n\n        //price and completed/canceled\n        .col-lg-9{\n            h4{\n                font-weight: 600;\n                font-size: 16px;\n                line-height: 140%;\n                /* or 22px */\n                display: flex;\n                align-items: center;\n                text-align: center;\n                color: #FFFFFF;\n            }\n            p{\n                font-weight: 400;\n                font-size: 12px;\n                line-height: 140%;\n                /* identical to box height, or 17px */\n                display: flex;\n                align-items: center;\n                text-align: center;\n                color: #2CCEA7;\n            }\n        }\n    }\n\n     // ... dots\n     .my-exp-options{\n        background-color: $primary-color;\n\n        .col-lg-3{\n            color: white;\n            font-weight: 900;\n            font-size: 14px;\n            line-height: 140%;\n            /* identical to box height, or 20px */\n            display: flex;\n            align-items: center;\n            text-align: center;\n        }\n     }\n}\n\n//Applied jobs card-style / My courses card-style-----------------------------------------------------------------------------------\n\n.applied-jobs-card-class{\n    border: 1px $background-secondary solid;\n    border-radius: 8px;\n    overflow: hidden;\n\n    img{\n\n        overflow: hidden;\n        object-fit: cover;\n        height: 100%;\n        width: 76px;\n    }\n   //text col\n   .applied-jobs-details{\n    width:270px;\n    .green{\n        color: #34A853;;\n    }\n    h4{\n        font-weight: 700;\n        font-size: 16px;\n        line-height: 120%;\n        /* or 19px */\n        letter-spacing: -0.02em;\n        /* Primary */\n        color: $primary-color;\n        flex: none;\n        order: 0;\n        flex-grow: 1;\n    }\n\n    h5{\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 126%;\n        letter-spacing: -0.02em;\n        color: $paragraph;\n        // margin-bottom:0px;\n\n    }\n    p{\n        margin-bottom:0px;\n        font-weight: 400;\n        font-size: 8px;\n        line-height: 140%;\n        /* or 11px */\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n        color: $paragraph;\n\n\n    }\n   }\n\n   .menu-button-jobs{\n    // width: 10%;\n    height: 100px;\n    width:36px;\n    background-color: $primary-color;\n    color:var(--primary-background);\n    // border-top-right-radius: 8px;\n    // border-bottom-right-radius: 8px;\n    cursor:pointer;}\n\n    //date col\n    .col-4.col-sm-4.col-md-3.col-lg-3.col-xl-3.d-flex.justify-content-end.align-self-end.p-2{\n        p{\n            font-weight: 500;\n            font-size: 12px;\n            line-height: 140%;\n            /* identical to box height, or 17px */\n            text-align: right;\n            letter-spacing: -0.02em;\n            color: $primary-color;\n\n            margin-bottom: 2px!important;\n        }\n    }\n\n}\n\n.courses-class{\n    border: 1px $background-secondary solid;\n    border-radius: 8px;\n    overflow: hidden;\n\n    img{\n\n        overflow: hidden;\n        object-fit: cover;\n        height: 100%;\n        width: 76px;\n    }\n\n    .cours-details{\n        width:270px;\n\n        h4{\n            font-weight: 700;\n            font-size: 12px;\n            line-height: 140%;\n            letter-spacing: -0.02em;\n             color: $paragraph;\n             margin-bottom: 0px;\n\n             overflow: hidden;\n             text-overflow: ellipsis;\n             display: -webkit-box;\n             -webkit-line-clamp: 1;\n             /* autoprefixer: ignore next */\n             -webkit-box-orient: vertical;\n        }\n\n        p{\n            font-weight: 700;\n            font-size: 8px;\n            line-height: 126%;\n            letter-spacing: -0.02em;\n            color: #24398A;\n            margin-bottom:0px;\n\n            span{\n                font-weight: 400;\n                font-size: 8px;\n                line-height: 126%;\n                letter-spacing: -0.02em;\n                color: #231F20;\n            }\n            i{\n                margin-right: 5px;\n            }\n        }\n    }\n\n    .menu-button-courses{\n        // width: 10%;\n        height: 80px;\n        width:36px;\n        background-color: $primary-color;\n        color:var(--primary-background);\n        // border-top-right-radius: 8px;\n        // border-bottom-right-radius: 8px;\n        cursor:pointer;}\n}\n\n//My Friends card-style / Friends request card-style-----------------------------------------------------------------------------------\n.friends-notification{\n    background-color: $secondary-color;\n    border-radius: 50%;\n\n}\n\n.firends-card{\n    border: 1px $background-secondary solid;\n    border-radius: 8px;\n    overflow: hidden;\n\n    img{\n        height: 66px;\n        width: 66px;\n        border-radius: 50%;\n    }\n\n    //text column\n    .col-8.col-sm-8.col-md-9.col-lg-9.col-xl-10{\n        h4{\n            font-weight: 600;\n            font-size: 16px;\n            line-height: 140%;\n            /* or 22px */\n            display: flex;\n            align-items: center;\n            text-align: center;\n            letter-spacing: -0.02em;\n            /* Title */\n            color: $paragraph;\n            flex: none;\n            order: 0;\n            flex-grow: 0;\n        }\n\n        p{\n            font-weight: 400;\n            font-size: 12px;\n            line-height: 140%;\n            /* identical to box height, or 17px */\n            display: flex;\n            align-items: center;\n            letter-spacing: -0.02em;\n            /* Title */\n            color: rgba(35, 31, 32, 0.5);\n            flex: none;\n            order: 0;\n            flex-grow: 1;\n        }\n    }\n\n    //dots column\n    .col-2.col-sm-2.col-md-1.col-lg-1.col-xl-1{\n        font-weight: 900;\n        font-size: 12px;\n        line-height: 140%;\n        /* or 17px */\n        display: flex;\n        align-items: center;\n        text-align: center;\n        letter-spacing: 0.1px;\n        color: $primary-color;\n        flex: none;\n        order: 0;\n        flex-grow: 0;\n    }\n\n\n}\n\n//Loialty points\n\n.loialty-points-card{\n\n    .loialty-rectangle{\n        border: 1px $background-secondary solid;\n        border-radius: 8px;\n        overflow: hidden;\n    }\n\n    img{\n        height: 40px;\n        width: 40px;\n        margin-right: 4px;\n    }\n\n    h4{\n        font-weight: 600;\n        font-size: 20px;\n        line-height: 140%;\n        /* identical to box height, or 28px */\n        display: flex;\n        align-items: center;\n        text-align: center;\n        /* Primary */\n        color: $primary-color;\n        flex: none;\n        order: 0;\n        flex-grow: 0;\n        margin:8px 0px 0px!important;\n\n        span{\n            color: $secondary-color;\n            padding: 0px 4px;\n        }\n    }\n    h5{\n        font-weight: 600;\n        font-size: 16px;\n        line-height: 140%;\n        /* or 22px */\n        display: flex;\n        align-items: center;\n        color: $primary-color;\n        flex: none;\n        order: 0;\n        flex-grow: 1;\n    }\n    li ul{\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 140%;\n        /* or 20px */\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n        /* Title */\n        color: #231F20;\n        flex: none;\n        order: 0;\n        flex-grow: 1;\n    }\n\n\n}\n\n@media only screen and (min-width:320px) and (max-width: 480px){\n    .mobile-header{\n        display: block;\n        background-color: var(--primary-background);\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    }\n    .web-header{\n        display: none;\n    }\n\n    .my-profile-container .px-10{\n        padding-left: 0px;\n        padding-right: 0px;\n    }\n\n    .container.my-profile-container{\n        background: white;\n        margin-top:20px!important;\n    }\n\n    //no margin/padding for container-fluid\n    .client-general-box{\n        padding:0px;\n    }\n\n    .my-profile-container{\n        //background-color: transparent;\n        border: none;\n        box-shadow:none;\n        border-radius: 0px;\n    }\n\n    //applied jobs\n    .applied-jobs-card-class{\n        img{\n           display: none;\n        }\n    }\n}\n\n@media only screen and (min-width:481px) and (max-width: 768px){\n    //hide mobile header for this screen\n    .mobile-header{\n        display: none!important;\n    }\n\n    .my-profile-container .px-10{\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n\n    //applied jobs\n    .applied-jobs-card-class{\n        img{\n           display: none;\n        }\n    }\n}\n\n@media only screen and (min-width:769px) and (max-width: 1023px){\n    //hide mobile header for this screen\n    .mobile-header{\n        display: none!important;\n    }\n\n    .my-profile-container .px-10{\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n\n\n}\n\n@media only screen and (min-width:1024px) and (max-width: 1200px){\n    //hide mobile header for this screen\n    .mobile-header{\n        display: none!important;\n    }\n}\n\n@media only screen and (min-width:1200px){\n    //hide mobile header for this screen\n    .mobile-header{\n        display: none!important;\n    }\n\n}\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 69244:
/*!********************************************************************************************!*\
  !*** ./src/app/features/role-client/delete-client/delete-client.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.card {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  margin-bottom: 4rem;\n}\n.card .card-header {\n  padding-top: 50px;\n}\n.card .card-footer p {\n  margin: 0;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.user-info-container {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 24px;\n  padding: 24px;\n  gap: 24px;\n}\n.user-info-container .profile-picture {\n  object-fit: cover;\n  width: 120px;\n  height: 120px;\n  border-radius: 100px;\n}\n.user-info-container .user-info h3 {\n  color: #24398A;\n  margin-bottom: 12px;\n}\n.user-info-container .user-info p {\n  color: #231F20;\n  margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/delete-client/delete-client.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDRY;ECSZ,gBAAA;AAkBJ;;AAdA;EACE,2CAAA;AAiBF;;AAdA;EACE,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,mBAAA;AAiBF;AAfE;EACE,iBAAA;AAiBJ;AARI;EACE,SAAA;EACA,cDnCU;ECoCV,gBAAA;EACA,eAAA;AAUN;;AALA;EACE,yCAAA;EACA,mBAAA;EACA,aAAA;EACA,SAAA;AAQF;AANE;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;AAQJ;AAJI;EACE,cDzDU;EC0DV,mBAAA;AAMN;AAHI;EACE,cDzDM;EC0DN,gBAAA;AAKN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.card {\n  border: 1px solid rgba($primary-color, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  margin-bottom: 4rem;\n\n  .card-header {\n    padding-top: 50px;\n  }\n\n  .card-body {\n\n  }\n\n  .card-footer {\n\n    p {\n      margin: 0;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 16px;\n    }\n  }\n}\n\n.user-info-container {\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 24px;\n  padding: 24px;\n  gap: 24px;\n\n  .profile-picture {\n    object-fit: cover;\n    width: 120px;\n    height: 120px;\n    border-radius: 100px;\n  }\n\n  .user-info {\n    h3 {\n      color: $primary-color;\n      margin-bottom: 12px;\n    }\n\n    p {\n      color: $paragraph;\n      margin-bottom: 0;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 93915:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/client-preferences/client-preferences.component.scss?ngResource ***!
  \**********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content {\n  text-align: center;\n  align-self: center;\n}\n.content p.upper {\n  font-size: 16px;\n  color: var(--primary-background);\n}\n.content h1 {\n  color: #FFCC29;\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 48px;\n}\n.content .preferences .attribute-name {\n  color: var(--primary-background);\n  font-size: 16px;\n  font-weight: 700;\n  text-align: start;\n}\n.content .preferences .attribute-chip {\n  border: 1px solid var(--primary-background);\n  border-radius: 100px;\n  padding: 16px 24px;\n  font-size: 14px;\n  margin-bottom: 8px;\n  cursor: pointer;\n  color: var(--primary-background);\n}\n.content .preferences .attribute-chip i.fa-plus {\n  color: var(--primary-background);\n}\n.content .preferences .attribute-chip i.fa-times {\n  color: #24398A;\n}\n.content .preferences .selected {\n  background: var(--primary-background);\n  color: #24398A;\n}\n.content .footer-btns button {\n  margin-bottom: 60px;\n  border: none;\n  background: transparent;\n  color: var(--primary-background);\n  font-size: 24px;\n}\n.content .footer-btns i.fas {\n  line-height: unset;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/enrollment/enrollment-steps/client-preferences/client-preferences.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,eAAA;EACA,gCAAA;AAkBJ;AAfE;EACE,cDTc;ECUd,eAAA;EACA,gBAAA;EACA,mBAAA;AAiBJ;AAZI;EACE,gCAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAcN;AAXI;EACE,2CAAA;EACA,oBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;AAaN;AAXM;EACE,gCAAA;AAaR;AAVM;EACE,cDxCQ;ACoDhB;AARI;EACE,qCAAA;EACA,cD9CU;ACwDhB;AALI;EACE,mBAAA;EACA,YAAA;EACA,uBAAA;EACA,gCAAA;EACA,eAAA;AAON;AAJI;EACE,kBAAA;AAMN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.content {\n  text-align: center;\n  align-self: center;\n\n  p.upper {\n    font-size: 16px;\n    color: var(--primary-background);\n  }\n\n  h1 {\n    color: $secondary-color;\n    font-size: 48px;\n    font-weight: 700;\n    margin-bottom: 48px;\n  }\n\n  .preferences{\n\n    .attribute-name{\n      color: var(--primary-background);\n      font-size: 16px;\n      font-weight: 700;\n      text-align: start;\n    }\n\n    .attribute-chip{\n      border: 1px solid var(--primary-background);\n      border-radius: 100px;\n      padding: 16px 24px;\n      font-size: 14px;\n      margin-bottom: 8px;\n      cursor: pointer;\n      color:var(--primary-background);\n\n      i.fa-plus{\n        color:var(--primary-background);\n      }\n\n      i.fa-times{\n        color: $primary-color;\n      }\n    }\n\n    .selected{\n      background: var(--primary-background);\n      color: $primary-color;\n    }\n  }\n\n  .footer-btns{\n    button{\n      margin-bottom: 60px;\n      border: none;\n      background: transparent;\n      color: var(--primary-background);\n      font-size: 24px;\n    }\n\n    i.fas {\n      line-height: unset;\n    }\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14381:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/finish-enrollment/finish-enrollment.component.scss?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content {\n  text-align: center;\n  align-self: center;\n}\n.content p.upper {\n  font-size: 16px;\n  color: var(--primary-background);\n}\n.content h1 {\n  color: #FFCC29;\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 48px;\n}\n.content .welcome {\n  color: var(--primary-background);\n  font-size: 24px;\n  font-weight: 400;\n}\n.content .welcome .name {\n  color: #FFCC29;\n}\n.content .footer-btns button {\n  margin-bottom: 60px;\n  border: none;\n  background: transparent;\n  color: var(--primary-background);\n  font-size: 24px;\n}\n.content .footer-btns i.fas {\n  line-height: unset;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/enrollment/enrollment-steps/finish-enrollment/finish-enrollment.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,eAAA;EACA,gCAAA;AAkBJ;AAfE;EACE,cDTc;ECUd,eAAA;EACA,gBAAA;EACA,mBAAA;AAiBJ;AAdE;EACE,gCAAA;EACA,eAAA;EACA,gBAAA;AAgBJ;AAfI;EACE,cDpBY;ACqClB;AAZI;EACE,mBAAA;EACA,YAAA;EACA,uBAAA;EACA,gCAAA;EACA,eAAA;AAcN;AAXI;EACE,kBAAA;AAaN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.content {\n  text-align: center;\n  align-self: center;\n\n  p.upper {\n    font-size: 16px;\n    color: var(--primary-background);\n  }\n\n  h1 {\n    color: $secondary-color;\n    font-size: 48px;\n    font-weight: 700;\n    margin-bottom: 48px;\n  }\n\n  .welcome{\n    color: var(--primary-background);\n    font-size: 24px;\n    font-weight: 400;\n    .name{\n      color: $secondary-color;\n    }\n  }\n\n  .footer-btns{\n    button{\n      margin-bottom: 60px;\n      border: none;\n      background: transparent;\n      color: var(--primary-background);\n      font-size: 24px;\n    }\n\n    i.fas {\n      line-height: unset;\n    }\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 99176:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/trial-active/trial-active.component.scss?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content {\n  text-align: center;\n  align-self: center;\n}\n.content p.upper {\n  font-size: 16px;\n  color: var(--primary-background);\n}\n.content h1 {\n  color: #FFCC29;\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 48px;\n}\n.content .welcome {\n  color: var(--primary-background);\n  font-size: 24px;\n  font-weight: 400;\n}\n.content .welcome .name {\n  color: #FFCC29;\n}\n.content .footer-btns button {\n  margin-bottom: 60px;\n  border: none;\n  background: transparent;\n  color: var(--primary-background);\n  font-size: 24px;\n}\n.content .footer-btns i.fas {\n  line-height: unset;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/enrollment/enrollment-steps/trial-active/trial-active.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,eAAA;EACA,gCAAA;AAkBJ;AAfE;EACE,cDTc;ECUd,eAAA;EACA,gBAAA;EACA,mBAAA;AAiBJ;AAdE;EACE,gCAAA;EACA,eAAA;EACA,gBAAA;AAgBJ;AAfI;EACE,cDpBY;ACqClB;AAZI;EACE,mBAAA;EACA,YAAA;EACA,uBAAA;EACA,gCAAA;EACA,eAAA;AAcN;AAXI;EACE,kBAAA;AAaN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.content {\n  text-align: center;\n  align-self: center;\n\n  p.upper {\n    font-size: 16px;\n    color: var(--primary-background);\n  }\n\n  h1 {\n    color: $secondary-color;\n    font-size: 48px;\n    font-weight: 700;\n    margin-bottom: 48px;\n  }\n\n  .welcome{\n    color: var(--primary-background);\n    font-size: 24px;\n    font-weight: 400;\n    .name{\n      color: $secondary-color;\n    }\n  }\n\n  .footer-btns{\n    button{\n      margin-bottom: 60px;\n      border: none;\n      background: transparent;\n      color: var(--primary-background);\n      font-size: 24px;\n    }\n\n    i.fas {\n      line-height: unset;\n    }\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 44497:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/user-data/user-data.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content {\n  text-align: center;\n  align-self: center;\n}\n.content p.upper {\n  font-size: 16px;\n  color: var(--primary-background);\n}\n.content h1 {\n  color: #FFCC29;\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 48px;\n}\n.content .user-data .personal-data {\n  text-align: start;\n  color: var(--primary-background);\n  font-size: 24px;\n  font-weight: 400;\n}\n.content .user-data .custom-field ::ng-deep.mat-form-field-label {\n  /*change color of label*/\n  color: #FFFFFF !important;\n}\n.content .user-data .custom-field ::ng-deep.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #FFFFFF !important;\n}\n.content .user-data .custom-field ::ng-deep.mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #FFFFFF !important;\n}\n.content .user-data .custom-field ::ng-deep.mat-select-value-text {\n  /*change color of underline when focused*/\n  color: #FFFFFF !important;\n}\n.content .user-data .custom-field ::ng-deep.mat-form-field-infix {\n  /*change color of underline when focused*/\n  color: #FFFFFF !important;\n}\n.content .user-data .custom-field ::ng-deep.mat-select-arrow {\n  /*change color of underline when focused*/\n  color: #FFFFFF !important;\n}\n.content .user-data .custom-field ::ng-deep.mat-mdc-icon-button {\n  /*change color of underline when focused*/\n  color: #FFFFFF !important;\n}\n.content .footer-btns button {\n  margin-bottom: 60px;\n  border: none;\n  background: transparent;\n  color: var(--primary-background);\n  font-size: 24px;\n}\n.content .footer-btns i.fas {\n  line-height: unset;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/enrollment/enrollment-steps/user-data/user-data.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,eAAA;EACA,gCAAA;AAkBJ;AAfE;EACE,cDTc;ECUd,eAAA;EACA,gBAAA;EACA,mBAAA;AAiBJ;AAbI;EACE,iBAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;AAeN;AAZM;EACE,wBAAA;EACA,yBAAA;AAcR;AAXM;EACE,4BAAA;EACA,oCAAA;AAaR;AAVM;EACE,yCAAA;EACA,oCAAA;AAYR;AATM;EACE,yCAAA;EACA,yBAAA;AAWR;AARM;EACE,yCAAA;EACA,yBAAA;AAUR;AARM;EACE,yCAAA;EACA,yBAAA;AAUR;AAPM;EACE,yCAAA;EACA,yBAAA;AASR;AAFI;EACE,mBAAA;EACA,YAAA;EACA,uBAAA;EACA,gCAAA;EACA,eAAA;AAIN;AADI;EACE,kBAAA;AAGN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.content {\n  text-align: center;\n  align-self: center;\n\n  p.upper {\n    font-size: 16px;\n    color: var(--primary-background);\n  }\n\n  h1 {\n    color: $secondary-color;\n    font-size: 48px;\n    font-weight: 700;\n    margin-bottom: 48px;\n  }\n\n  .user-data{\n    .personal-data{\n      text-align: start;\n      color: var(--primary-background);\n      font-size: 24px;\n      font-weight: 400;\n    }\n    .custom-field{\n      ::ng-deep.mat-form-field-label{\n        /*change color of label*/\n        color: $background-primary!important;\n      }\n\n      ::ng-deep.mat-form-field-underline {\n        /*change color of underline*/\n        background-color: $background-primary !important;\n      }\n\n      ::ng-deep.mat-form-field-ripple {\n        /*change color of underline when focused*/\n        background-color: $background-primary !important;\n      }\n\n      ::ng-deep.mat-select-value-text {\n        /*change color of underline when focused*/\n        color: $background-primary !important;\n      }\n\n      ::ng-deep.mat-form-field-infix {\n        /*change color of underline when focused*/\n        color: $background-primary !important;\n      }\n      ::ng-deep.mat-select-arrow {\n        /*change color of underline when focused*/\n        color: $background-primary !important;\n      }\n\n      ::ng-deep.mat-mdc-icon-button{\n        /*change color of underline when focused*/\n        color: $background-primary !important;\n      }\n    }\n  }\n\n\n  .footer-btns{\n    button{\n      margin-bottom: 60px;\n      border: none;\n      background: transparent;\n      color: var(--primary-background);\n      font-size: 24px;\n    }\n\n    i.fas {\n      line-height: unset;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1435:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/welcome-screen/welcome-screen.component.scss?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content {\n  text-align: center;\n  align-self: center;\n}\n.content p.upper {\n  font-size: 16px;\n}\n.content p {\n  color: var(--primary-background);\n  font-size: 24px;\n}\n.content h1 {\n  color: #FFCC29;\n  font-size: 48px;\n  font-weight: 700;\n}\n.content .next-btn {\n  margin-bottom: 60px;\n  width: 100%;\n  border: none;\n  background: transparent;\n  color: var(--primary-background);\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.content .next-btn i.fas {\n  line-height: unset;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/enrollment/enrollment-steps/welcome-screen/welcome-screen.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,eAAA;AAkBJ;AAfE;EACE,gCAAA;EACA,eAAA;AAiBJ;AAdE;EACE,cDbc;ECcd,eAAA;EACA,gBAAA;AAgBJ;AAbE;EACE,mBAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,gCAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAeJ;AAbI;EACE,kBAAA;AAeN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.content {\n  text-align: center;\n  align-self: center;\n\n  p.upper {\n    font-size: 16px;\n  }\n\n  p {\n    color: var(--primary-background);\n    font-size: 24px;\n  }\n\n  h1 {\n    color: $secondary-color;\n    font-size: 48px;\n    font-weight: 700;\n  }\n\n  .next-btn {\n    margin-bottom: 60px;\n    width: 100%;\n    border: none;\n    background: transparent;\n    color: var(--primary-background);\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    i.fas {\n      line-height: unset;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 42496:
/*!**************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background {\n  background: linear-gradient(rgba(36, 57, 138, 0.95), rgba(36, 57, 138, 0.95)), url(/assets/images/others/homepage-bg.jpg);\n  object-fit: cover;\n  background-size: cover !important;\n  min-height: calc(100vh - 95px);\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.background .content-stepper {\n  width: 75%;\n  overflow-y: scroll;\n}\n.background .content-stepper::-webkit-scrollbar {\n  width: 0.5em; /* Adjust the width as per your preference */\n}\n.background .content-stepper::-webkit-scrollbar-track {\n  background-color: transparent; /* Set the track color to transparent */\n}\n.background .content-stepper::-webkit-scrollbar-thumb {\n  background-color: transparent; /* Set the thumb color to transparent */\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/enrollment/enrollment.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,yHAAA;EAKA,iBAAA;EACA,iCAAA;EAEA,8BAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;AAaF;AAXE;EACE,UAAA;EACA,kBAAA;AAaJ;AAVE;EACE,YAAA,EAAA,4CAAA;AAYJ;AATE;EACE,6BAAA,EAAA,uCAAA;AAWJ;AARE;EACE,6BAAA,EAAA,uCAAA;AAUJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.background {\n  background: linear-gradient(\n      rgba($primary-color, 0.95),\n      rgba($primary-color, 0.95)\n    ),\n    url(/assets/images/others/homepage-bg.jpg);\n  object-fit: cover;\n  background-size: cover !important;\n  //height: 100vh;\n  min-height: calc(100vh - 95px);\n  width: 100%;\n  margin: 0;\n  padding: 0;\n\n  .content-stepper {\n    width: 75%;\n    overflow-y: scroll;\n  }\n\n  .content-stepper::-webkit-scrollbar {\n    width: 0.5em; /* Adjust the width as per your preference */\n  }\n\n  .content-stepper::-webkit-scrollbar-track {\n    background-color: transparent; /* Set the track color to transparent */\n  }\n\n  .content-stepper::-webkit-scrollbar-thumb {\n    background-color: transparent; /* Set the thumb color to transparent */\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 37177:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/role-client/itinerary-bookings/itinerary-bookings.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.my-bookings-container {\n  background-color: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n\n.booking-delighted-container {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n  background-blend-mode: normal, luminosity, normal;\n}\n.booking-delighted-container .booking-delighted-text {\n  max-width: 540px;\n}\n.booking-delighted-container h2 {\n  color: white;\n  font-weight: 700;\n  font-size: 36px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n}\n.booking-delighted-container p {\n  color: white;\n  margin-bottom: 0px;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n}\n.booking-delighted-container p span {\n  color: rgb(255, 204, 4);\n  margin: 0px 5px 0px 5px;\n}\n\n.client-general-box .page-header h2 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 140%;\n  /* identical to box height, or 45px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Primary */\n  color: #24398A;\n}\n\n.experiences-card-class {\n  border: 1px #edf0fa solid;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.experiences-card-class p {\n  margin-bottom: 2px !important;\n}\n.experiences-card-class h4, .experiences-card-class a {\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  color: #24398A;\n  flex-grow: 1;\n  text-decoration: none;\n}\n.experiences-card-class p {\n  font-weight: 400;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  /* Title */\n  color: #231F20;\n}\n.experiences-card-class .rate-button .btn-rate-booking {\n  border: none;\n  height: 100%;\n}\n.experiences-card-class .rate-button .btn-rate-booking i.active-thumbs-up {\n  font-style: normal;\n  font-weight: 900;\n  font-size: 24px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #34A853;\n}\n.experiences-card-class .rate-button .btn-rate-booking i.active-thumbs-down {\n  font-style: normal;\n  font-weight: 900;\n  font-size: 24px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #EA4335;\n}\n.experiences-card-class .rate-button .btn-rate-booking:hover {\n  background: rgba(237, 240, 250, 0.8);\n}\n.experiences-card-class .rate-button .btn-rate-booking:focus, .experiences-card-class .rate-button .btn-rate-booking:active {\n  background: rgba(237, 240, 250, 0.48);\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled {\n  cursor: not-allowed;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled i.active-thumbs-up {\n  opacity: 50%;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled i.active-thumbs-down {\n  opacity: 50%;\n}\n.experiences-card-class .rate-button .btn-rate-booking:disabled:hover {\n  box-shadow: none;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 {\n  background-color: #24398A;\n  border-right: 1px white dotted;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 .col-lg-9 h4 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #FFFFFF;\n}\n.experiences-card-class .blue.align-items-center.col-lg-2 .col-lg-9 p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #2CCEA7;\n}\n.experiences-card-class .align-items-center.py-3.col-lg-1 {\n  background-color: #24398A;\n}\n.experiences-card-class .align-items-center.py-3.col-lg-1 .col-lg-3 {\n  color: white;\n  font-weight: 900;\n  font-size: 14px;\n  line-height: 140%;\n  /* identical to box height, or 20px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n.hide-button {\n  display: none;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .mobile-header {\n    display: block;\n    background-color: var(--primary-background);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  }\n  .web-header {\n    display: none;\n  }\n  .my-bookings-container .px-10 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .container.my-bookings-container {\n    background: white;\n    margin-top: 20px !important;\n  }\n  .client-general-box {\n    padding: 0px;\n  }\n  .my-bookings-container {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n    border-radius: 0px;\n  }\n}\n@media only screen and (min-width: 481px) and (max-width: 768px) {\n  .my-bookings-container .px-10 {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n@media only screen and (min-width: 769px) and (max-width: 1023px) {\n  .my-bookings-container .px-10 {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/itinerary-bookings/itinerary-bookings.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,2CAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;AAkBF;;AAfA;EAEE,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,oHAAA;EAGA,iDAAA;AAeF;AAdE;EACE,gBAAA;AAgBJ;AAbE;EACE,YAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAeJ;AAZE;EACE,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EAEA,uBAAA;AAaJ;AAZI;EACE,uBAAA;EACA,uBAAA;AAcN;;AANE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;EAEA,cD3DY;ACiEhB;;AADA;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;AAIF;AADE;EACE,6BAAA;AAGJ;AAIE;EACE,gBAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,YAAA;EACA,qBAAA;AAHJ;AAKE;EACE,gBAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EAEA,UAAA;EAEA,cD7FQ;ACuFZ;AAiBI;EACE,YAAA;EACA,YAAA;AAfN;AAiBM;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;AAfR;AAkBM;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;AAhBR;AAmBM;EACE,oCAAA;AAjBR;AAoBM;EACE,qCAAA;AAlBR;AAsBI;EACE,mBAAA;AApBN;AAsBM;EACE,YAAA;AApBR;AAuBM;EACE,YAAA;AArBR;AAwBM;EACE,gBAAA;AAtBR;AA4BE;EACE,yBDrKY;ECsKZ,8BAAA;AA1BJ;AA8BM;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;AA5BR;AA8BM;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;AA5BR;AAkCE;EACE,yBDnMY;ACmKhB;AAkCI;EACE,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AAhCN;;AA0CA;EACE,aAAA;AAvCF;;AA0CA;EACE;IACE,cAAA;IACA,2CAAA;IACA,2CAAA;EAvCF;EAyCA;IACE,aAAA;EAvCF;EA0CA;IACE,iBAAA;IACA,kBAAA;EAxCF;EA2CA;IACE,iBAAA;IACA,2BAAA;EAzCF;EA6CA;IACE,YAAA;EA3CF;EA8CA;IACE,6BAAA;IACA,YAAA;IACA,gBAAA;IACA,kBAAA;EA5CF;AACF;AAgDA;EAGE;IACE,kBAAA;IACA,mBAAA;EAhDF;AACF;AAqDA;EAGE;IACE,kBAAA;IACA,mBAAA;EArDF;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.my-bookings-container{\n  background-color: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n\n.booking-delighted-container{\n  // background-color: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  background: radial-gradient(100% 787.93% at 0% 100%,\n          rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%) ,\n  #24398A;\n  background-blend-mode: normal, luminosity, normal;\n  .booking-delighted-text{\n    max-width: 540px;\n  }\n\n  h2{\n    color:white;\n    font-weight: 700;\n    font-size: 36px;\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n  }\n\n  p{\n    color:white;\n    margin-bottom: 0px;\n    font-weight: 400;\n    font-size: 16px;\n\n    letter-spacing: -0.02em;\n    span {\n      color: rgba(255, 204, 4, 1);\n      margin:0px 5px 0px 5px;\n    }\n  }\n\n\n}\n\n.client-general-box .page-header{\n  h2{\n    font-weight: 700;\n    font-size: 32px;\n    line-height: 140%;\n    /* identical to box height, or 45px */\n\n    display: flex;\n    align-items: center;\n    letter-spacing: -0.02em;\n\n    /* Primary */\n\n    color: $primary-color;\n  }\n}\n\n//my-experiences-card-style / shared experiences-card-style------------------------------------------------\n.experiences-card-class{\n  border: 1px $background-secondary solid;\n  border-radius: 8px;\n  overflow: hidden;\n\n  //diminuate paragraph bottom margin\n  p{\n    margin-bottom: 2px!important;\n  }\n\n\n  //white part of the card\n  //title, date, location\n  // .col-lg-9.p-2.align-items-center{\n  h4,a{\n    font-weight: 600;\n    font-size: 16px;\n\n    display: flex;\n    align-items: center;\n    color: #24398A;\n    flex-grow: 1;\n    text-decoration: none;\n  }\n  p{\n    font-weight: 400;\n    font-size: 12px;\n\n    display: flex;\n    align-items: center;\n    text-align: center;\n\n    /* Title */\n\n    color: $paragraph;\n  }\n  // }\n\n\n\n\n\n  .rate-button{\n    // background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), white;\n\n    .btn-rate-booking {\n      border: none;\n      height: 100%;\n\n      i.active-thumbs-up{\n        font-style: normal;\n        font-weight: 900;\n        font-size: 24px;\n        line-height: 140%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        color: #34A853;\n      }\n\n      i.active-thumbs-down{\n        font-style: normal;\n        font-weight: 900;\n        font-size: 24px;\n        line-height: 140%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        color: #EA4335;\n      }\n\n      &:hover {\n        background: rgba($background-secondary, 80%);\n      }\n\n      &:focus, &:active {\n        background: rgba($background-secondary, 48%);\n      }\n    }\n\n    .btn-rate-booking:disabled{\n      cursor: not-allowed;\n\n      i.active-thumbs-up{\n        opacity: 50%;\n      }\n\n      i.active-thumbs-down{\n        opacity: 50%\n      }\n\n      &:hover {\n        box-shadow: none;\n      }\n    }\n  }\n\n  //blue part\n  .blue.align-items-center.col-lg-2{\n    background-color: $primary-color;\n    border-right: 1px white dotted;\n\n    //price and completed/canceled\n    .col-lg-9{\n      h4{\n        font-weight: 600;\n        font-size: 16px;\n        line-height: 140%;\n        /* or 22px */\n        display: flex;\n        align-items: center;\n        text-align: center;\n        color: #FFFFFF;\n      }\n      p{\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 140%;\n        /* identical to box height, or 17px */\n        display: flex;\n        align-items: center;\n        text-align: center;\n        color: #2CCEA7;\n      }\n    }\n  }\n\n  // ... dots\n  .align-items-center.py-3.col-lg-1{\n    background-color: $primary-color;\n\n    .col-lg-3{\n      color: white;\n      font-weight: 900;\n      font-size: 14px;\n      line-height: 140%;\n      /* identical to box height, or 20px */\n      display: flex;\n      align-items: center;\n      text-align: center;\n    }\n  }\n}\n\n.rate-button{\n  // background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), white;\n}\n\n//after the customer gives a review, hide the other one\n.hide-button{\n  display:none\n}\n\n@media only screen and (min-width:320px) and (max-width: 480px){\n  .mobile-header{\n    display: block;\n    background-color: var(--primary-background);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  }\n  .web-header{\n    display: none;\n  }\n\n  .my-bookings-container .px-10{\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .container.my-bookings-container{\n    background: white;\n    margin-top:20px!important;\n  }\n\n  //no margin/padding for container-fluid\n  .client-general-box{\n    padding:0px;\n  }\n\n  .my-bookings-container{\n    background-color: transparent;\n    border: none;\n    box-shadow:none;\n    border-radius: 0px;\n  }\n\n}\n\n@media only screen and (min-width:481px) and (max-width: 768px){\n\n\n  .my-bookings-container .px-10{\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n\n}\n\n@media only screen and (min-width:769px) and (max-width: 1023px){\n\n\n  .my-bookings-container .px-10{\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n\n}\n\n@media only screen and (min-width:1024px) and (max-width: 1200px){\n\n}\n\n@media only screen and (min-width:1200px){\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 38877:
/*!**********************************************************************************!*\
  !*** ./src/app/features/role-client/settings/settings.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 64919:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/role-client/view-client-messages/view-client-messages.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.view-message-container {\n  background-color: var(--primary-background);\n  padding: 0px;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n\n.hidden-info {\n  padding: 16px;\n  background: rgba(36, 57, 138, 0.08);\n}\n.hidden-info h4 {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.hidden-info p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.hidden-info i {\n  margin: 4px;\n}\n.hidden-info .red {\n  color: red;\n}\n.hidden-info .opacity {\n  opacity: 0.5;\n}\n.hidden-info .cancel-reservation-header {\n  cursor: pointer;\n}\n\n.info-not-display {\n  display: none;\n}\n\n.info-display {\n  display: block;\n}\n\n.conversation-header-class {\n  padding: 16px 24px;\n  gap: 8px;\n  height: 90px;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n}\n.conversation-header-class img {\n  width: 58px;\n  height: 58px;\n  border-radius: 100px;\n}\n.conversation-header-class h4 {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.conversation-header-class p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  color: #24398A;\n  opacity: 0.48;\n  margin-bottom: 0px;\n}\n.conversation-header-class i {\n  width: 18px;\n  height: 18px;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 140%;\n  /* or 17px */\n  letter-spacing: 0.1px;\n  /* Primary */\n  color: #24398A;\n}\n\n.conversation-component-container {\n  padding: 16px 24px;\n  gap: 8px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-client/view-client-messages/view-client-messages.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAkBJ;;AAfA;EACI,aAAA;EACA,mCAAA;AAkBJ;AAjBI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDXI;ECYJ,kBAAA;AAmBR;AAjBI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDlBI;ECoBJ,kBAAA;AAkBR;AAhBI;EACI,WAAA;AAkBR;AAhBI;EACI,UAAA;AAkBR;AAhBI;EACI,YAAA;AAkBR;AAhBI;EACI,eAAA;AAkBR;;AAdA;EACI,aAAA;AAiBJ;;AAfA;EACI,cAAA;AAkBJ;;AAfA;EACI,kBAAA;EACA,QAAA;EACA,YAAA;EACA,4FAAA;EACA,2CAAA;AAkBJ;AAhBI;EACI,WAAA;EACA,YAAA;EACA,oBAAA;AAkBR;AAhBI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD3DI;EC4DJ,kBAAA;AAkBR;AAhBI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDvEQ;ECwER,aAAA;EACA,kBAAA;AAkBR;AAhBI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAGA,qBAAA;EAEA,YAAA;EAEA,cDzFQ;ACuGhB;;AAXA;EACI,kBAAA;EACA,QAAA;AAcJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.view-message-container{\n    background-color: var(--primary-background);\n    padding:0px;\n    border-radius: 8px;\n    overflow: hidden;\n    margin-bottom:20px;\n}\n\n.hidden-info{\n    padding:16px;\n    background: rgba(36, 57, 138, 0.08);\n    h4{\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 140%;\n        color: $paragraph;\n        margin-bottom: 0px;\n    }\n    p{\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 140%;\n        color: $paragraph;\n        // opacity: 0.48;\n        margin-bottom:0px;\n    }\n    i{\n        margin:4px;\n    }\n    .red{\n        color: red;\n    }\n    .opacity{\n        opacity: 0.5;\n    }\n    .cancel-reservation-header{\n        cursor: pointer;\n    }\n}\n\n.info-not-display{\n    display: none;\n}\n.info-display{\n    display: block;\n}\n\n.conversation-header-class{\n    padding: 16px 24px;\n    gap: 8px;\n    height: 90px;\n    background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n\n    img{\n        width: 58px;\n        height: 58px;\n        border-radius: 100px;\n    }\n    h4{\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 140%;\n        color: $paragraph;\n        margin-bottom: 0px;\n    }\n    p{\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 140%;\n        color: $primary-color;\n        opacity: 0.48;\n        margin-bottom:0px;\n    }\n    i{\n        width: 18px;\n        height: 18px;\n        font-style: normal;\n        font-weight: 900;\n        font-size: 12px;\n        line-height: 140%;\n        /* or 17px */\n\n\n        letter-spacing: 0.1px;\n\n        /* Primary */\n\n        color: $primary-color;\n    }\n}\n.conversation-component-container{\n    padding: 16px 24px;\n    gap: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 11944:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/role-client/view-client-reservation/view-client-reservation.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 61869:
/*!***********************************************************************************************************!*\
  !*** ./src/app/standalone-components/booking-confirmation/booking-confirmation.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-background {\n  background-color: var(--primary-background);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.page-title {\n  font-weight: 700;\n  font-size: clamp(1.5rem, 1.3rem + 1vw, 2.5rem);\n  line-height: 140%;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin: 48px auto;\n}\n\n.checkmark-container {\n  margin-bottom: 100px;\n  width: 112px;\n  height: 112px;\n  background: rgba(36, 57, 138, 0.08);\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.checkmark-container i {\n  color: #24398A;\n  font-size: 48px;\n  font-weight: 900;\n}\n\n.bold-text {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  margin-bottom: 20px;\n}\n\n.normal-text {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: 0.1px;\n  color: #231F20;\n  margin-bottom: 100px;\n}\n.normal-text span {\n  font-weight: 600;\n  color: #24398A;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/booking-confirmation/booking-confirmation.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,2CAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAkBF;;AAfA;EACE,gBAAA;EACA,8CAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,cAAA;EACA,iBAAA;AAkBF;;AAfA;EACE,oBAAA;EACA,YAAA;EACA,aAAA;EACA,mCAAA;EACA,oBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAkBF;AAhBE;EACE,cD9BY;EC+BZ,eAAA;EACA,gBAAA;AAkBJ;;AAdA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDrCM;ECsCN,mBAAA;AAiBF;;AAdA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;EACA,cD7CU;EC8CV,oBAAA;AAiBF;AAfE;EACE,gBAAA;EACA,cDvDY;ECwDZ,eAAA;AAiBJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../theme/styles/components/colors\";\n\n.page-background {\n  background-color: var(--primary-background);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.page-title {\n  font-weight: 700;\n  font-size: clamp(1.5rem, 1.3rem + 1vw, 2.5rem);\n  line-height: 140%;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #24398A;\n  margin: 48px auto;\n}\n\n.checkmark-container {\n  margin-bottom: 100px;\n  width: 112px;\n  height: 112px;\n  background: rgba($primary-color, 0.08);\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  i {\n    color: $primary-color;\n    font-size: 48px;\n    font-weight: 900;\n  }\n}\n\n.bold-text {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: $title;\n  margin-bottom: 20px;\n}\n\n.normal-text {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: 0.1px;\n  color: $paragraph;\n  margin-bottom: 100px;\n\n  span {\n    font-weight: 600;\n    color: $primary-color;\n    cursor: pointer;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 73189:
/*!***************************************************************************************************************!*\
  !*** ./src/app/standalone-components/favorite-resource-card/favorite-resource-card.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.resource-card {\n  border-radius: 8px;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  max-width: 240px;\n  box-shadow: 0px 4px 8px rgba(35, 31, 32, 0.08);\n  border: 1px solid rgba(36, 57, 138, 0.24);\n}\n\n.img-container {\n  width: 100%;\n  height: 110px;\n  flex-shrink: 0;\n  position: relative;\n}\n.img-container button.btn-add {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(35, 31, 32, 0.08);\n  border: 1px solid var(--primary-background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-container button.btn-add i {\n  font-size: 14px;\n  color: var(--primary-background);\n}\n.img-container button.btn-add:hover i {\n  color: #FFCC29;\n}\n.img-container button.btn-del {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #24398A;\n  border: 1px solid var(--primary-background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-container button.btn-del i {\n  font-size: 14px;\n  color: var(--primary-background);\n}\n.img-container img {\n  object-fit: cover;\n  height: 100%;\n}\n\n.resource-info {\n  padding: 8px;\n}\n.resource-info > h6 {\n  color: #24398A;\n  font-weight: 700;\n  line-height: 19px;\n  min-height: 38px;\n}\n.resource-info > p {\n  font-size: 12px;\n  line-height: 16px;\n  min-height: 32px;\n}\n.resource-info h6, .resource-info p {\n  margin-bottom: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.resource-info div p:first-child {\n  color: #24398A;\n}\n.resource-info div p:first-child span {\n  color: #231F20;\n}\n.resource-info div p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 120%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/favorite-resource-card/favorite-resource-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,8CAAA;EACA,yCAAA;AAkBF;;AAfA;EACE,WAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,2CAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAkBJ;AAhBI;EACE,eAAA;EACA,gCAAA;AAkBN;AAdM;EACE,cDnCU;ACmDlB;AATE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBDnDY;ECoDZ,2CAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAWJ;AATI;EACE,eAAA;EACA,gCAAA;AAWN;AALE;EACE,iBAAA;EACA,YAAA;AAOJ;;AAHA;EACE,YAAA;AAMF;AAJE;EACE,cD3EY;EC4EZ,gBAAA;EACA,iBAAA;EACA,gBAAA;AAMJ;AAHE;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;AAKJ;AAFE;EACE,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,4BAAA;AAIJ;AAAI;EACE,cDnGU;ACqGhB;AAAM;EACE,cDlGA;ACoGR;AAEI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAAN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.resource-card {\n  border-radius: 8px;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  max-width: 240px;\n  box-shadow: 0px 4px 8px rgba($title, 0.08);\n  border: 1px solid rgba($primary-color, 0.24);\n}\n\n.img-container {\n  width: 100%;\n  height: 110px;\n  flex-shrink: 0;\n  position: relative;\n\n  button.btn-add {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    background: rgba($title, 0.08);\n    border: 1px solid var(--primary-background);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      font-size: 14px;\n      color: var(--primary-background);\n    }\n\n    &:hover{\n      i{\n        color:$secondary-color;\n      }\n    }\n\n\n  }\n\n  button.btn-del {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    background: $primary-color;\n    border: 1px solid var(--primary-background);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      font-size: 14px;\n      color: var(--primary-background);\n    }\n\n\n  }\n\n  img {\n    object-fit: cover;\n    height: 100%;\n  }\n}\n\n.resource-info {\n  padding: 8px;\n\n  & > h6 {\n    color: $primary-color;\n    font-weight: 700;\n    line-height: 19px;\n    min-height: 38px;\n  }\n\n  & > p {\n    font-size: 12px;\n    line-height: 16px;\n    min-height: 32px;\n  }\n\n  h6, p {\n    margin-bottom: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n  div {\n    & p:first-child {\n      color: $primary-color;\n\n      span {\n        color: $title;\n      }\n    }\n\n    p {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 120%;\n    }\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 93152:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/role-client/_components/client-profile/client-profile.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"w-100 mt-4\">\n    <div class=\"image-container\">\n        <input type=\"file\"\n               hidden\n               accept=\"image/*\"\n               #thumbnail\n               id=\"thumbnailInput\"\n               (change)=\"onCoverImgChange($event)\"\n               >\n        <div *ngIf=\"!thumbnail.value && !coverClientUrl?.filePath\" class=\"no-image\"\n             attr.translatedContent = \"{{ 'GENERAL.INSERT_IMAGE' | translate}}\"\n             (click)=\"thumbnail.click()\"></div>\n\n        <img *ngIf=\"thumbnail.value || coverClientUrl?.filePath\" class=\"img-fluid w-100 cover-img\"\n             src={{coverClientUrl?.filePath}} alt=\"thumbnail\">\n        <button *ngIf=\"thumbnail.value || coverClientUrl?.filePath\"\n                (click)=\"thumbnail.click()\"\n                type=\"button\"\n                id=\"btnRemoveFeaturedImage\"\n                class=\"btn-thumbnail\">\n                <i class=\"fas fa-pen\"></i>\n        </button>\n    </div>\n</div>\n<!--px-10 ca imaginea de profil sa fie pana in capat, adaugam paddingul abia de aici, iar in componenta principala, punem padding dupa prima componenta adaugata(dupa app-client-profile)-->\n        <!---------------------Rectangle-------------------------->\n<div class=\"d-flex align-items-center justify-content-between\n            py-2 px-4 px-md-5\n            profile-rectangle\">\n\n    <div class=\"d-flex gap-2 gap-md-4\">\n        <img class=\"img-fluid profile-picture\"\n             src=\"{{avatarClientUrl?.filePath ? avatarClientUrl?.filePath : '/assets/images/others/user.jpg'}}\">\n            <!-- <img src=\"../../../../../assets/images/others/banner-default-min.jpg\"> -->\n\n        <div class=\"d-none  d-sm-flex flex-column justify-content-center\n                    user-information\">\n            <h2>{{currentUserData?.firstName + ' ' +currentUserData?.lastName}}</h2>\n            <p>{{currentUserData?.email}}</p>\n        </div>\n    </div>\n\n    <div class=\"d-flex align-items-center\">\n            <button class=\"btn-auto btn-color-fill d-none d-sm-flex\" [matMenuTriggerFor]=\"settingsMenu\">\n                <i class=\"fas fa-pen\" aria-hidden=\"false\"></i>\n                {{ \"GENERAL.EDIT\" | translate}}\n            </button>\n\n            <button class=\"btn-round btn-color-fill d-flex d-sm-none\" [matMenuTriggerFor]=\"settingsMenu\">\n                <i class=\"fas fa-pen\" aria-hidden=\"false\"></i>\n            </button>\n\n        <mat-menu #settingsMenu=\"matMenu\">\n            <input type=\"file\"\n            hidden\n            accept=\"image/*\"\n            #avatarChange\n            id=\"avatarChange\"\n            (change)=\"onAvatarChange($event)\"\n            >\n            <button mat-menu-item\n            (click)=\"avatarChange.click()\">\n                <i class=\"fas fa-camera\"></i>\n              Edit Avatar\n            </button>\n            <button mat-menu-item\n            (click)=\"thumbnail.click()\">\n                <i class=\"fas fa-image\"></i>\n              Edit Cover\n            </button>\n            <button mat-menu-item routerLink=\"../my-account\">\n                <i class=\"fas fa-user\"></i>\n                Edit Profile\n            </button>\n            <button mat-menu-item routerLink=\"../change-password\">\n                <i class=\"fas fa-shield-alt\"></i>\n                Change Password\n            </button>\n            <button mat-menu-item routerLink=\"../delete-account\">\n                <i class=\"fas fa-times\"></i>\n                Delete Account\n            </button>\n          </mat-menu>\n    </div>\n</div>\n\n\n<!---------------------Intro-------------------------->\n<div class=\"d-flex flex-column\n            gap-4\n            intro-class my-profile-container\">\n\n    <div class=\"d-flex align-items-center justify-content-between\">\n        <h2 class=\"m-0\">Intro</h2>\n\n        <div class=\"d-flex gap-4\">\n            <p *ngIf=\"currentUserData?.county && currentUserData?.city\" class=\"m-0\">\n            <span>\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n            </span>\n                {{currentUserData.county + \", \" + currentUserData.city}}\n            </p>\n\n            <p *ngIf=\"currentUserData?.registrationDate\" class=\"m-0\">\n                <span><i class=\"far fa-calendar\"></i></span>\n                {{ \"GENERAL.JOINED\" | translate }}\n                {{ currentUserData.registrationDate | date : 'MMM YYYY' }}\n            </p>\n        </div>\n    </div>\n\n    <div class=\"d-flex justify-content-start\">\n        <p *ngIf=\"!currentUserData?.description\" class=\"intro-add-details m-0\">\n            <span><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n            {{ \"GENERAL.ABOUT_YOURSELF\" | translate }}\n        </p>\n\n        <p *ngIf=\"currentUserData?.description\" class=\"m-0 text-break\">\n            {{ currentUserData.description }}\n        </p>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 57198:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/features/role-client/_components/conversation-item-card/conversation-item-card.component.html?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <p class=\"my-2\">Messages</p>\n\n\n    <div *ngFor=\"let conversation of conversationArray\">\n\n        <!-- reservation -->\n        <div routerLink=\"/client/dashboard/inbox/{{conversation.id}}\" *ngIf=\"category === 'reservation'\" class=\"conv-item-card d-flex justify-content-between align-items-center p-2 my-3\">\n                <div class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                    <img src=\"{{conversation?.featuredImage ? conversation?.featuredImage?.filePath : '../../../../../../../assets/images/others/user.jpg' }}\">\n                    <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                        <h4>{{conversation?.name}} </h4>\n                        <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                        <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                    </div>\n                </div>\n\n            <div class=\"d-flex align-items-center second-half-conv-item\">\n                <p>{{conversation?.lastMessage?.date | date: 'EEEE, HH:mm'}}</p>\n            </div>\n        </div>\n\n        <!-- shared experiences -->\n        <div routerLink=\"/client/dashboard/inbox/{{conversation.id}}\" *ngIf=\"category === 'sharedExperience'\"  class=\"conv-item-card d-flex justify-content-between align-items-center p-2 my-3\">\n            <div class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                <img src=\"{{conversation?.featuredImage ? conversation?.featuredImage?.filePath : '../../../../../../../assets/images/others/user.jpg' }}\">\n                <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                    <!-- de pus link catre mesaje -->\n                    <h4>{{conversation?.name}}</h4>\n                    <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                    <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                </div>\n            </div>\n\n            <div class=\"d-flex align-items-center second-half-conv-item\">\n                <p>{{conversation?.lastMessage?.date | date: 'EEEE, HH:mm'}}</p>\n            </div>\n        </div>\n\n        <!-- Bestinform support -->\n        <div routerLink=\"/client/dashboard/inbox/{{conversation.id}}\" *ngIf=\"category === 'bestinformSupport'\"  class=\"conv-item-card d-flex justify-content-between align-items-center p-2 my-3\">\n            <div class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                <img src=\"{{conversation?.featuredImage ? conversation?.featuredImage.filePath : '../../../../../assets/images/logos/Icon_Logo.png'}}\">\n                <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                    <!-- de pus link catre mesaje -->\n                    <h4>{{conversation?.name}}</h4>\n                    <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                    <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                </div>\n            </div>\n\n            <div class=\"d-flex align-items-center second-half-conv-item\">\n                <p>{{conversation?.lastMessage?.date | date: 'EEEE, HH:mm'}}</p>\n            </div>\n        </div>\n\n        <!-- others private -->\n        <div routerLink=\"/client/dashboard/inbox/{{conversation.id}}\" *ngIf=\"category === 'private'\"  class=\"conv-item-card d-flex justify-content-between align-items-center p-2 my-3\">\n            <div class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                <img src=\"{{conversation?.featuredImage ? conversation?.featuredImage?.filePath : '../../../../../../../assets/images/others/user.jpg' }}\" >\n                <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                    <!-- de pus link catre mesaje -->\n                    <h4>{{conversation?.name}}</h4>\n                    <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                    <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                </div>\n            </div>\n\n            <div class=\"d-flex align-items-center second-half-conv-item\">\n                <p>{{conversation?.lastMessage?.date | date: 'EEEE, HH:mm a'}}</p>\n            </div>\n        </div>\n    </div>\n\n    <!--Pagination-->\n    <mat-paginator\n    [pageSizeOptions]=\"pageItems\"\n    [length]=\"(category === 'reservation') ? totalReservationConversations  :\n    (category === 'sharedExperience') ? totalSharedExperiencesConversations :\n    (category === 'bestinformSupport') ? totalBestinformConversations:\n    totalPrivateConversations\"\n    [pageSize]=\"pageSize\"\n    (page)=\"pageChanged($event)\"\n    >\n    </mat-paginator>\n\n</div>\n";

/***/ }),

/***/ 45059:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/role-client/_components/faq-footer/faq-footer.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row entire-comp p-0 mx-0\">\n\n    <div class=\"footer container-fluid col-12 pt-5\">\n\n\n        <div class=\"container mb-3\">\n            <p class=\"p-title\">FAQ</p>\n            <div class=\"accordion accordion-flush\" id=\"faq\">\n                <div class=\"accordion-item\">\n                    <h2 class=\"accordion-header\" id=\"flush-headingOne\">\n                        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#first\" aria-expanded=\"false\" aria-controls=\"#first\">\n                            Ce este bestinform?\n                        </button>\n                    </h2>\n                    <div id=\"first\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-headingOne\" data-bs-parent=\"#faq\">\n                        <div class=\"accordion-body\">Raspuns</div>\n                    </div>\n                </div>\n\n                <div class=\"accordion-item\">\n                    <h2 class=\"accordion-header\" id=\"flush-headingtwo\">\n                        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#second\" aria-expanded=\"false\" aria-controls=\"#second\">\n                            Cum folosesti serviciul de explorare?\n                        </button>\n                    </h2>\n                    <div id=\"second\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-headingtwo\" data-bs-parent=\"#faq\">\n                        <div class=\"accordion-body\">Raspuns</div>\n                    </div>\n                </div>\n\n                <div class=\"accordion-item\">\n                    <h2 class=\"accordion-header\" id=\"flush-headingfour\">\n                        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#four\" aria-expanded=\"false\" aria-controls=\"#four\">\n                            Ce este un provider?\n                        </button>\n                    </h2>\n                    <div id=\"four\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-headingfour\" data-bs-parent=\"#faq\">\n                        <div class=\"accordion-body\">Raspuns</div>\n                    </div>\n                </div>\n\n                <div class=\"accordion-item\">\n                    <h2 class=\"accordion-header\" id=\"flush-headingfive\">\n                        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#five\" aria-expanded=\"false\" aria-controls=\"#five\">\n                            Pe ce platforme pot descarca aplicatia?\n                        </button>\n                    </h2>\n                    <div id=\"five\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-headingfive\" data-bs-parent=\"#faq\">\n                        <div class=\"accordion-body\">Raspuns</div>\n                    </div>\n                </div>\n\n                <div class=\"accordion-item\">\n                    <h2 class=\"accordion-header\" id=\"flush-headingthree\">\n                        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#three\" aria-expanded=\"false\" aria-controls=\"#three\">\n                            Care sunt beneficiile premium?\n                        </button>\n                    </h2>\n                    <div id=\"three\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-headingthree\" data-bs-parent=\"#faq\">\n                        <div class=\"accordion-body\">Raspuns</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"container py-3 d-flex flex-column flex-lg-row justify-content-between container-links\">\n            <a>{{'TERMS-OF-USE' | translate}}</a>\n            <a routerLink=\"/content/privacy-policy\" target=\"_blank\">{{'PRIVACY-STATEMENT' | translate}}</a>\n            <a>{{'HOW-SITE-WORKS' | translate}}</a>\n            <a>Site map</a>\n            <a>{{'CONTACT-US' | translate}}</a>\n        </div>\n\n        <div class=\"container mb-3\">\n            <div class=\"row\">\n<!--                <div class=\"col-12 col-md-3 col-lg-2\">-->\n<!--                    <mat-form-field appearance=\"outline\" >-->\n<!--                        <mat-select [(ngModel)]=\"selectedCurrency\" name=\"food\">-->\n<!--                            <mat-option [value]=\"'usd'\">USD</mat-option>-->\n<!--                            <mat-option [value]=\"'lei'\">LEI</mat-option>-->\n<!--                        </mat-select>-->\n<!--                    </mat-form-field>-->\n<!--                </div>-->\n                <div class=\"col-12 col-md-4 col-lg-3\">\n                    <mat-form-field appearance=\"outline\" >\n                        <mat-select [(ngModel)]=\"selectedValue\" name=\"food\" (selectionChange)=\"changeLang(selectedValue)\">\n                            <mat-option [value]=\"'ro'\">Română</mat-option>\n                            <mat-option [value]=\"'en'\">Engleză</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"container\">\n\n            <!-- <p>{{'TRANSLATE' | translate}}</p> -->\n            <p><strong> © BestInform Romania. All rights reserved.</strong></p>\n            <div class=\"d-flex justify-content-center align-items-center w-100 py-3\">\n                <img src=\"assets/images/logos/fonduri-ue.png\" class=\"w-25\">\n                <p class=\"w-25 mb-0\">Pentru informaţii\n                    detaliate despre celelalte programe cofinanţate de Uniunea\n                    Europeană, vă invităm să vizitaţi <a href=\"https://www.fonduri-ue.ro/\" target=\"_blank\">www.fonduri-ue.ro\n                    </a></p>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 34627:
/*!************************************************************************************************!*\
  !*** ./src/app/features/role-client/client-bookings/client-bookings.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<!--Title bar-->\n<div class=\"container-fluid client-general-box\">\n\n    <div  class=\"container\" >\n        <app-dashboard-header pageTitleOne=\"{{ 'MY_BOOKINS' | translate }}\"\n                                routeTitleOne=\"../../dashboard/my-bookings\"\n                                pageTitleTwo=\" {{ 'TITLES.TRIP-BOOKINGS' | translate }}\"\n                                routeTitleTwo=\"../../dashboard/trip-bookings\"\n                              [buttonBackRoute]=\"'../../dashboard/profile'\">\n        </app-dashboard-header>\n    </div>\n\n    <!--delighted with your experience section-->\n    <div class=\"container booking-delighted-container mb-2 px-10 py-4 d-flex justify-content-between align-items-center\"\n    *ngIf=\"lastNotReviewedBooking!==undefined\">\n        <div class=\"booking-delighted-text\">\n            <h2>Încântat de experiența ta?</h2>\n            <p>Spune-ne parerea ta despre experiența cu <span>{{lastNotReviewedBooking?.resourceId}}</span> din <span>{{lastNotReviewedBooking?.checkIn | date: 'd MMM y'}} - {{lastNotReviewedBooking?.checkOut | date: 'd MMM y'}}</span> ?</p>\n        </div>\n        <div class=\"d-flex gap-2 flex-wrap\">\n            <button\n            class=\"btn-long btn-white-border-outline\"\n            (click)=\"addReviewToResource(lastNotReviewedBooking.id, false)\">\n            <i class=\"fas fa-thumbs-down\"></i> Dislike\n            </button>\n            <button\n            class=\"btn-long btn-white-fill\"\n            (click)=\"addReviewToResource(lastNotReviewedBooking.id, true)\">\n            <i class=\"fas fa-thumbs-up\"></i> Like</button>\n        </div>\n    </div>\n\n    <div class=\"container my-bookings-container px-0 mb-4\">\n        <div class=\"px-10\">\n            <!--Active tab-->\n\n            <mat-tab-group mat-stretch-tabs=\"false\" class=\"remove-border-bottom\" dynamicHeight>\n                <mat-tab label=\"Active\" >\n                    <!--if booking list is empty-->\n                    <div *ngIf=\"activeBookingList.length===0\" class=\"py-4\"><p>{{\"RESERVATION.EMPTY-LIST-MSG\" | translate}}</p></div>\n                    <!--list of bookings-->\n                    <div *ngFor=\"let booking of activeBookingList\" class=\"my-2 experiences-card-class d-flex\">\n                        <div class=\"col-6 col-sm-6 col-md-7 col-lg-9 p-2 align-items-center\">\n                            <h4><a routerLink=\"../../dashboard/my-booking/view/{{booking.id}}\">{{booking.name}}</a></h4>\n                            <p>{{booking.checkIn | date: 'dd MMM y'}} - {{booking.checkOut | date: 'dd MMM y'}}</p>\n                            <p>{{booking.city}}, {{booking.country}}</p>\n                        </div>\n                        <div class=\"d-flex blue col-4 col-sm-3 col-md-3 col-lg-2 justify-content-center align-items-center p-3\">\n                            <div  class=\"d-flex col-lg-9 justify-content-center\">\n                                <h4>€ {{booking.totalPrice}}</h4>\n                            </div>\n                        </div>\n                        <div class=\"d-flex col-2 col-sm-3 col-md-2 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"experiencesMenu\">\n                            <div  class=\"col-lg-3 d-flex justify-content-center\">\n                                <i class=\"fas fa-arrow-right\"></i>\n                            </div>\n                        </div>\n                        <mat-menu #experiencesMenu=\"matMenu\">\n                            <button mat-menu-item routerLink=\"../../dashboard/my-booking/view/{{booking.id}}\">\n                                <i class=\"fas fa-eye\"></i>\n                                Vezi rezervare\n                                </button>\n                            <button mat-menu-item routerLink=\"../../dashboard/inbox/{{booking.conversationId}}\">\n                                <i class=\"fas fa-comment-alt\"></i>\n                              Contact provider\n                            </button>\n                            <!-- <button mat-menu-item>\n                                <i class=\"fas fa-times\"></i>\n                                Remove\n                            </button> -->\n                          </mat-menu>\n                    </div>\n\n                    <!--Pagination-->\n                <mat-paginator\n                [pageSizeOptions]=\"pageItems\"\n                [length]=\"totalActiveElements\"\n                [pageSize]=\"pageSize\"\n                (page)=\"pageChanged($event)\"\n                 >\n                 </mat-paginator>\n                </mat-tab>\n<!--Past tab-->\n                <mat-tab label=\"Past\" >\n                    <!--if booking list is empty-->\n                    <div *ngIf=\"pastBookingList.length===0\" class=\"py-4\"><p>{{\"RESERVATION.EMPTY-LIST-MSG\" | translate}}</p></div>\n\n                    <!--list of bookings-->\n                    <div *ngFor=\"let booking of pastBookingList\" class=\"my-2 experiences-card-class d-flex\">\n                        <div class=\"col-5 col-sm-5 col-md-5 col-lg-7 p-2 align-items-center\">\n                            <h4><a routerLink=\"../../dashboard/my-booking/view/{{booking.id}}\">{{booking.name}}</a></h4>\n                            <p>{{booking.checkIn | date: 'dd MMM y'}} - {{booking.checkOut | date: 'dd MMM y'}}</p>\n                            <p>{{booking.city}}, {{booking.country}} </p>\n                        </div>\n                        <div class=\"rate-button d-flex flex-wrap col-3 col-sm-4 col-md-4 col-lg-2 align-items-center justify-content-end\">\n                            <button type=\"button\"\n                                *ngIf=\"booking.recommended===true || booking.recommended === null\"\n                                [disabled]=\"booking.recommended===true\"\n                                class=\"btn-rate-booking w-50\"\n                                (click)=\"addReviewToResource(booking.id, true)\">\n                                <i class=\"fas fa-thumbs-up active-thumbs-up\"></i>\n                            </button>\n                            <button type=\"button\"\n                                class=\"btn-rate-booking w-50\"\n                                (click)=\"addReviewToResource(booking.id, false)\"\n                                *ngIf=\"booking.recommended===false || booking.recommended === null\"\n                                [disabled]=\"booking.recommended===false\">\n                                <i class=\"fas fa-thumbs-down active-thumbs-down\"></i>\n                            </button>\n                        </div>\n                        <div class=\"d-flex blue col-2 col-sm-2 col-md-2 col-lg-2 align-items-center p-3\">\n                            <div  class=\"col-lg-9 d-flex justify-content-center\">\n                                <h4>€ {{booking.totalPrice}}</h4>\n                            </div>\n                        </div>\n                        <div class=\"d-flex col-1 col-sm-1 col-md-1 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"experiencesMenu\">\n                            <div  class=\"col-lg-3 d-flex justify-content-center\">\n                                <i class=\"fas fa-arrow-right\"></i>\n                            </div>\n                        </div>\n                        <mat-menu #experiencesMenu=\"matMenu\">\n                            <button mat-menu-item routerLink=\"../../dashboard/my-booking/view/{{booking.id}}\">\n                                <i class=\"fas fa-eye\"></i>\n                                Vezi rezervare\n                                </button>\n                            <button mat-menu-item routerLink=\"../../dashboard/inbox/{{booking.conversationId}}\">\n                                <i class=\"fas fa-comment-alt\"></i>\n                            Contact provider\n                            </button>\n                            <!-- <button mat-menu-item>\n                                <i class=\"fas fa-times\"></i>\n                                Remove\n                            </button> -->\n                        </mat-menu>\n                    </div>\n                    <!--Pagination-->\n                <mat-paginator\n                [pageSizeOptions]=\"pageItems\"\n                [length]=\"totalPastElements\"\n                [pageSize]=\"pageSize\"\n                (page)=\"pageChanged($event)\"\n                 >\n                 </mat-paginator>\n                </mat-tab>\n<!--Canceled tab-->\n\n                <mat-tab label=\"Cancelled\" >\n\n                    <!--if booking list is empty-->\n                    <div *ngIf=\"cancelledBookingList.length===0\" class=\"py-4\"><p>{{\"RESERVATION.EMPTY-LIST-MSG\" | translate}}</p></div>\n\n                    <!--list of bookings-->\n                    <div *ngFor=\"let booking of cancelledBookingList\" class=\"my-2 experiences-card-class d-flex\">\n                        <div class=\"col-6 col-sm-6 col-md-7 col-lg-9 p-2 align-items-center\">\n                            <h4><a routerLink=\"../../dashboard/my-booking/view/{{booking.id}}\">{{booking.name}}</a></h4>\n                            <p>{{booking.city}}, {{booking.country}}</p>\n                        </div>\n                        <div class=\"d-flex blue col-4 col-sm-3 col-md-3 col-lg-2 align-items-center p-3\">\n                            <div  class=\"col-lg-9 d-flex justify-content-center\">\n                                <h4>€ {{booking.totalPrice}}</h4>\n                            </div>\n                        </div>\n                        <div class=\"d-flex col-2 col-sm-3 col-md-2 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"experiencesMenu\">\n                            <div  class=\"col-lg-3 d-flex justify-content-center\">\n                                <i class=\"fas fa-arrow-right\"></i>\n                            </div>\n                        </div>\n                        <mat-menu #experiencesMenu=\"matMenu\">\n                            <button mat-menu-item routerLink=\"../../dashboard/my-booking/view/{{booking.id}}\">\n                                <i class=\"fas fa-eye\"></i>\n                                Vezi rezervare\n                                </button>\n                            <button mat-menu-item routerLink=\"../../dashboard/inbox/{{booking.conversationId}}\">\n                            <i class=\"fas fa-comment-alt\"></i>\n                              Contact provider\n                            </button>\n                            <!-- <button mat-menu-item>\n                                <i class=\"fas fa-times\"></i>\n                                Remove\n                            </button> -->\n                          </mat-menu>\n                    </div>\n\n                    <!--Pagination-->\n                    <mat-paginator\n                    [pageSizeOptions]=\"pageItems\"\n                    [length]=\"totalCancelledElements\"\n                    [pageSize]=\"pageSize\"\n                    (page)=\"pageChanged($event)\"\n                    >\n                    </mat-paginator>\n                </mat-tab>\n\n            </mat-tab-group>\n\n        </div>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 78655:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/features/role-client/client-bookings/client-trip-bookings/client-trip-bookings.component.html?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Title bar-->\n<div class=\"container-fluid client-general-box\">\n\n    <div  class=\"container\" >\n        <app-dashboard-header pageTitleOne=\"{{ 'MY_BOOKINS' | translate }}\"\n                                routeTitleOne=\"../../dashboard/my-bookings\"\n                                pageTitleTwo=\" {{ 'TITLES.TRIP-BOOKINGS' | translate }}\"\n                                routeTitleTwo=\"../../dashboard/trip-bookings\"\n                              [buttonBackRoute]=\"'../../dashboard/profile'\">\n        </app-dashboard-header>\n    </div>\n\n\n<div class=\"container my-bookings-container px-0 mb-4\">\n    <div class=\"px-10\">\n\n            <!--Active tab-->\n            <mat-tab-group mat-stretch-tabs=\"false\" class=\"remove-border-bottom\" dynamicHeight>\n                <mat-tab label=\"Active\" >\n                    <!--if booking list is empty-->\n                    <div *ngIf=\"activeTripList.length===0\" class=\"py-4\"><p>{{\"RESERVATION.EMPTY-LIST-MSG\" | translate}}</p>\n                    </div>\n                    <!--list of bookings-->\n                    <div *ngFor=\"let booking of activeTripList\" class=\"my-2 experiences-card-class d-flex\">\n                        <div class=\"col-6 col-sm-6 col-md-7 col-lg-9 p-2 align-items-center\">\n                            <h4><a routerLink=\"../../dashboard/my-booking/view-trip-reservation/{{booking.id}}\">{{booking.name}}</a></h4>\n                            <p>{{booking.checkIn | date: 'dd MMM y'}} - {{booking.checkOut | date: 'dd MMM y'}}</p>\n                            <p>{{booking.countryName}}, {{booking.locationName}}</p>\n                        </div>\n                        <div class=\"d-flex blue col-4 col-sm-3 col-md-3 col-lg-2 justify-content-center align-items-center p-3\">\n                            <div  class=\"d-flex col-lg-9 justify-content-center\">\n                                <h4>€ {{booking.totalPrice}}</h4>\n                            </div>\n                        </div>\n                        <div class=\"d-flex col-2 col-sm-3 col-md-2 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"activeTripMenu\">\n                            <div  class=\"col-lg-3 d-flex justify-content-center\">\n                                <i class=\"fas fa-arrow-right\"></i>\n                            </div>\n                        </div>\n                        <mat-menu #activeTripMenu=\"matMenu\">\n                            <button mat-menu-item routerLink=\"../../dashboard/my-booking/view-trip-reservation/{{booking.id}}\">\n                                <i class=\"fas fa-eye\"></i>\n                            Vezi rezervare\n                            </button>\n                            <!-- <button mat-menu-item>\n                                <i class=\"fas fa-times\"></i>\n                                Remove\n                            </button> -->\n                        </mat-menu>\n                    </div>\n\n                    <!--Pagination-->\n                    <mat-paginator\n                    [pageSizeOptions]=\"pageItems\"\n                    [length]=\"totalActiveElements\"\n                    [pageSize]=\"size\"\n                    (page)=\"pageChanged($event, 'active')\"\n                    >\n                    </mat-paginator>\n            </mat-tab>\n\n            <!--past tab-->\n            <mat-tab label=\"Past\" >\n                <!--if booking list is empty-->\n                <div *ngIf=\"pastTripList.length===0\" class=\"py-4\"><p>{{\"RESERVATION.EMPTY-LIST-MSG\" | translate}}</p>\n                </div>\n                <!--list of bookings-->\n                <div *ngFor=\"let booking of pastTripList\" class=\"my-2 experiences-card-class d-flex\">\n                    <div class=\"col-6 col-sm-6 col-md-7 col-lg-9 p-2 align-items-center\">\n                        <h4><a routerLink=\"../../dashboard/my-booking/view-trip-reservation/{{booking.id}}\">{{booking.name}}</a></h4>\n                        <p>{{booking.checkIn | date: 'dd MMM y'}} - {{booking.checkOut | date: 'dd MMM y'}}</p>\n                        <p>{{booking.countryName}}, {{booking.locationName}}</p>\n                    </div>\n                    <div class=\"d-flex blue col-4 col-sm-3 col-md-3 col-lg-2 justify-content-center align-items-center p-3\">\n                        <div  class=\"d-flex col-lg-9 justify-content-center\">\n                            <h4>€ {{booking.totalPrice}}</h4>\n                        </div>\n                    </div>\n                    <div class=\"d-flex col-2 col-sm-3 col-md-2 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"pastTripMenu\">\n                        <div  class=\"col-lg-3 d-flex justify-content-center\">\n                            <i class=\"fas fa-arrow-right\"></i>\n                        </div>\n                    </div>\n                    <mat-menu #pastTripMenu=\"matMenu\">\n                        <button mat-menu-item routerLink=\"../../dashboard/my-booking/view-trip-reservation/{{booking.id}}\">\n                            <i class=\"fas fa-eye\"></i>\n                        Vezi rezervare\n                        </button>\n                        <!-- <button mat-menu-item>\n                            <i class=\"fas fa-times\"></i>\n                            Remove\n                        </button> -->\n                    </mat-menu>\n                </div>\n\n                <!--Pagination-->\n                <mat-paginator\n                [pageSizeOptions]=\"pageItems\"\n                [length]=\"totalPastElements\"\n                [pageSize]=\"size\"\n                (page)=\"pageChanged($event, 'past')\"\n                >\n                </mat-paginator>\n            </mat-tab>\n\n\n            <!--cancelled tab-->\n            <mat-tab label=\"Cancelled\" >\n                <!--if booking list is empty-->\n                <div *ngIf=\"cancelledTripList.length===0\" class=\"py-4\"><p>{{\"RESERVATION.EMPTY-LIST-MSG\" | translate}}</p>\n                </div>\n                <!--list of bookings-->\n                <div *ngFor=\"let booking of cancelledTripList\" class=\"my-2 experiences-card-class d-flex\">\n                    <div class=\"col-6 col-sm-6 col-md-7 col-lg-9 p-2 align-items-center\">\n                        <h4><a routerLink=\"../../dashboard/my-booking/view-trip-reservation/{{booking.id}}\">{{booking.name}}</a></h4>\n                        <p>{{booking.checkIn | date: 'dd MMM y'}} - {{booking.checkOut | date: 'dd MMM y'}}</p>\n                        <p>{{booking.countryName}}, {{booking.locationName}}</p>\n                    </div>\n                    <div class=\"d-flex blue col-4 col-sm-3 col-md-3 col-lg-2 justify-content-center align-items-center p-3\">\n                        <div  class=\"d-flex col-lg-9 justify-content-center\">\n                            <h4>€ {{booking.totalPrice}}</h4>\n                        </div>\n                    </div>\n                    <div class=\"d-flex col-2 col-sm-3 col-md-2 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"cancelledTripMenu\">\n                        <div  class=\"col-lg-3 d-flex justify-content-center\">\n                            <i class=\"fas fa-arrow-right\"></i>\n                        </div>\n                    </div>\n                    <mat-menu #cancelledTripMenu=\"matMenu\">\n                        <button mat-menu-item routerLink=\"../../dashboard/my-booking/view-trip-reservation/{{booking.id}}\">\n                            <i class=\"fas fa-eye\"></i>\n                        Vezi rezervare\n                        </button>\n                        <!-- <button mat-menu-item>\n                            <i class=\"fas fa-times\"></i>\n                            Remove\n                        </button> -->\n                    </mat-menu>\n                </div>\n\n                <!--Pagination-->\n                <mat-paginator\n                [pageSizeOptions]=\"pageItems\"\n                [length]=\"totalCancelledElements\"\n                [pageSize]=\"size\"\n                (page)=\"pageChanged($event, 'cancelled')\"\n                >\n                </mat-paginator>\n            </mat-tab>\n\n\n        </mat-tab-group>\n    </div>\n</div>\n";

/***/ }),

/***/ 44391:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/role-client/client-dashboard/client-dashboard.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header></app-header>\n<!--<app-menu></app-menu>-->\n<div class=\"inner-app-content\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n";

/***/ }),

/***/ 42806:
/*!******************************************************************************************!*\
  !*** ./src/app/features/role-client/client-inbox/client-inbox.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Title bar-->\n<div class=\"container-fluid\">\n\n    <div  class=\"container\" >\n        <app-dashboard-header pageTitleOne=\"Inbox\"\n                              [buttonBackRoute]=\"'../../../../dashboard'\">\n        </app-dashboard-header>\n    </div>\n\n    <!-- Tabs -->\n    <div  class=\"container inbox-container \">\n        <ul class=\"nav nav-tabs\" id=\"inboxTab\" role=\"tablist\">\n            <!-- Booking Support -->\n            <li class=\"nav-item\" role=\"presentation\">\n              <button class=\"nav-link active\" id=\"booking-support-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#bookingSupport\" type=\"button\" role=\"tab\" aria-controls=\"bookingSupport\" aria-selected=\"false\">Rezervari</button>\n            </li>\n\n            <!-- Shared Experience -->\n            <li class=\"nav-item\" role=\"presentation\">\n              <button class=\"nav-link\" id=\"shared-experiences-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#sharedExperience\" type=\"button\" role=\"tab\" aria-controls=\"sharedExperience\" aria-selected=\"true\">Shared Experience</button>\n            </li>\n\n\n            <!-- Bestinform Support -->\n            <li class=\"nav-item\" role=\"presentation\" >\n                <button class=\"nav-link d-flex align-items-center justify-content-between\" id=\"bestinform-support-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#bestinformSupport\" type=\"button\" role=\"tab\" aria-controls=\"bestinformSupport\" aria-selected=\"false\">Bestinform Support\n                    <button class=\"btn-long btn-color-fill\" type=\"button\" (click)=\"initSupport()\"  [disabled]=\"loading\">\n                        <i class=\"fas fa-plus\"></i>\n                    </button>\n                </button>\n\n            </li>\n\n            <!-- Servicii cumparate -->\n            <li class=\"nav-item\" role=\"presentation\">\n              <button class=\"nav-link\" id=\"private-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#private\" type=\"button\" role=\"tab\" aria-controls=\"servicesPurchased\" aria-selected=\"false\">Private</button>\n            </li>\n          </ul>\n\n\n        <!-- Content of tabs -->\n        <div class=\"tab-content\" id=\"myTabContent\">\n            <!-- Content booking suport -->\n            <div class=\"tab-pane fade show active\" id=\"bookingSupport\" role=\"tabpanel\" aria-labelledby=\"booking-support-tab\">\n              <app-conversation-item-card [category]=\"'reservation'\"></app-conversation-item-card>\n            </div>\n\n            <!-- Content Shared experiences -->\n            <div class=\"tab-pane fade\" id=\"sharedExperience\" role=\"tabpanel\" aria-labelledby=\"shared-experiences-tab\">\n            <app-conversation-item-card [category]=\"'sharedExperience'\"></app-conversation-item-card>\n            </div>\n\n            <!-- Content bestinform suport -->\n            <div class=\"tab-pane fade\" id=\"bestinformSupport\" role=\"tabpanel\" aria-labelledby=\"bestinform-support-tab\">\n              <app-conversation-item-card [category]=\"'bestinformSupport'\"></app-conversation-item-card>\n            </div>\n\n            <!-- Content puchased _services -->\n            <div class=\"tab-pane fade\" id=\"private\" role=\"tabpanel\" aria-labelledby=\"private-tab\">\n              <app-conversation-item-card [category]=\"'private'\"></app-conversation-item-card>\n            </div>\n        </div>\n\n    </div>\n</div>\n";

/***/ }),

/***/ 13147:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/role-client/client-payment-methods/client-payment-methods.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"Payment Methods\"\n                          [buttonBackRoute]=\"'..'\">\n    </app-dashboard-header>\n</div>\n\n\n<div class=\"container payment-methods-container px-4 py-4 mb-4 w-100\">\n    <form [formGroup]=\"paymentDataForm\" id=\"paymentDataForm\">\n        <div class=\"d-flex flex-wrap flex-sm-wrap flex-md-nowrap justify-content-center  justify-content-sm-center justify-content-md-between justify-content-lg-between\">\n            <!-- <div class=\"payment-methods-container mb-2 mb-md-2 px-8 py-4 ml-lg-2 w-100 w-sm-30 w-md-40 w-lg-40 w-xl-40 d-flex flex-column justify-content-between\"> -->\n            <div class=\"payment-methods-container px-8 py-4 py-lg-4 mr-lg-2 w-100 w-sm-30 w-md-40 w-lg-40 w-xl-40 d-flex flex-column justify-content-between\">\n                <h2>Billing address</h2>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <!---Country--------------------------------------------------------------------------------->\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>Country</mat-label>\n                            <mat-select formControlName=\"country\" (selectionChange)=\"getCitiesByCountry($event.value)\">\n                                <ng-container *ngIf=\"(countries$ | async) as countries\">\n                                    <mat-option *ngFor=\"let country of countries\" [value]=\"country\">{{ country }}</mat-option>\n                                </ng-container>\n                            </mat-select>\n                            <mat-error>{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-6\">\n                        <!---City--------------------------------------------------------------------------------->\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>Oraș</mat-label>\n                            <mat-select formControlName=\"city\">\n                                <ng-container *ngIf=\"(cities$ | async) as cities\">\n                                    <mat-option *ngFor=\"let city of cities\" [value]=\"city.name\">{{ city.name }}</mat-option>\n                                </ng-container>\n                            </mat-select>\n                            <mat-error>{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-10\">\n                        <!---Address--------------------------------------------------------------------------------->\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>Adresa</mat-label>\n                            <input matInput placeholder=\"Adresa\" formControlName=\"address\">\n                            <mat-error>{{'ERROR.REQUIRED'|translate}}</mat-error>\n<!--                            <mat-icon type=\"button\" mat-icon-button matSuffix><i class=\"fas fa-times-circle\"></i></mat-icon>-->\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <!---Post Code--------------------------------------------------------------------------------->\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>Cod postal</mat-label>\n                            <input matInput placeholder=\"Cod postal\" formControlName=\"postcode\">\n<!--                            <mat-icon type=\"button\" mat-icon-button matSuffix><i class=\"fas fa-times-circle\"></i></mat-icon>-->\n                        </mat-form-field>\n\n                    </div>\n                </div>\n                <!---Street--------------------------------------------------------------------------->\n<!--                <mat-form-field appearance=\"standard\" class=\"w-100\">-->\n<!--                    <mat-label>Strada</mat-label>-->\n<!--                    <input matInput placeholder=\"Strada\" formControlName=\"street\">-->\n<!--                        <mat-icon type=\"button\" mat-icon-button matSuffix><i class=\"fas fa-times-circle\"></i></mat-icon>-->\n<!--                </mat-form-field>-->\n\n                <!---County--------------------------------------------------------------------------------->\n<!--                <mat-form-field appearance=\"standard\" class=\"w-100\">-->\n<!--                    <mat-label>Oras</mat-label>-->\n<!--                    <input matInput placeholder=\"Adresa\" formControlName=\"county\">-->\n<!--                    <mat-error>{{'ERROR.REQUIRED'|translate}}</mat-error>-->\n<!--                        <mat-icon type=\"button\" mat-icon-button matSuffix><i class=\"fas fa-chevron-down\"></i></mat-icon>-->\n<!--                </mat-form-field>-->\n\n                <button class=\"btn-long btn-color-fill my-2 w-100\" (click)=\"updateUser()\"><i class=\"fas fa-save\"></i>Update</button>\n            </div>\n            <!-----Payment-------------------------------------------------------------------->\n<!--            <div class=\"payment-methods-container mb-2 mb-md-2 px-8 py-4 ml-lg-2 w-100 w-sm-30 w-md-40 w-lg-40 w-xl-40 d-flex flex-column justify-content-between\">-->\n\n<!--                <h2>Payment</h2>-->\n<!--                <p class=\"lock-encrypted mt-5 mb-0\"><i class=\"fas fa-lock\"></i> End-to-end encrypted</p>-->\n<!--                &lt;!&ndash;-Card holder name-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->\n<!--                <mat-form-field appearance=\"standard\" class=\"w-100\">-->\n<!--                    <mat-label>Cardholder Name</mat-label>-->\n<!--                    <input matInput placeholder=\"Cardholder name\" formControlName=\"cardHolderName\">-->\n<!--                        <mat-icon type=\"button\" mat-icon-button matSuffix><i class=\"fas fa-times-circle\"></i></mat-icon>-->\n<!--                </mat-form-field>-->\n\n<!--                &lt;!&ndash;-Card Number-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->\n<!--                <mat-form-field appearance=\"standard\" class=\"w-100\">-->\n<!--                    <mat-label>Card number</mat-label>-->\n<!--                    <input matInput placeholder=\"Strada\" formControlName=\"cardNumber\">-->\n<!--                        <mat-icon type=\"button\" mat-icon-button matSuffix><i class=\"fas fa-times-circle\"></i></mat-icon>-->\n<!--                </mat-form-field>-->\n\n<!--                &lt;!&ndash;-Exp. date (MM/YY)-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->\n<!--                <mat-form-field appearance=\"standard\" class=\"w-100\">-->\n<!--                    <mat-label>Exp. date (MM/YY)</mat-label>-->\n<!--                    <input matInput placeholder=\"Exp. date (MM/YY)\" formControlName=\"expirationDate\">-->\n<!--                        <mat-icon type=\"button\" mat-icon-button matSuffix><i class=\"fas fa-times-circle\"></i></mat-icon>-->\n<!--                </mat-form-field>-->\n\n<!--                &lt;!&ndash;-Security Code (CVC)-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->\n<!--                <mat-form-field appearance=\"standard\" class=\"w-100\">-->\n<!--                    <mat-label>Security Code (CVC)</mat-label>-->\n<!--                    <input matInput placeholder=\"Security Code (CVC)\" formControlName=\"securityCode\">-->\n<!--                        <mat-icon type=\"button\" mat-icon-button matSuffix><i class=\"fas fa-times-circle\"></i></mat-icon>-->\n<!--                </mat-form-field>-->\n\n<!--                <p class=\"subscribe-mention\">Bestinform will automatically continue your membership and charge the membership fee (currently USD 14.99/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.-->\n<!--                </p>-->\n\n<!--                <button class=\"btn-long btn-color-fill my-2 w-100\"><i class=\"fas fa-save\"></i>Save</button>-->\n<!--            </div>-->\n        </div>\n    </form>\n\n    <ng-container *ngIf=\"(currentSubscription$ | async) as currentSubscription\">\n        <div class=\"payment-methods-container px-8 py-4 my-2 w-100 subcription-class\">\n            <div class=\"d-flex justify-content-between align-items-center\">\n                <h2 class=\"py-4\">My Subscription</h2>\n                <button *ngIf=\"!currentSubscription?.autoRenew && currentSubscription?.status === 'canceled' || currentSubscription?.status === 'new'\" class=\"btn-long btn-color-fill\" (click)=\"toStripe()\">Achizitionare pachet</button>\n                <button *ngIf=\"!currentSubscription?.autoRenew && currentSubscription?.status === 'paid'\" class=\"btn-long btn-color-fill\" (click)=\"makeAutoRenewTrue(currentSubscription?.id)\" >Renew Subscription</button>\n                <button *ngIf=\"(currentSubscription?.autoRenew && currentSubscription?.status === 'paid') || currentSubscription?.status === 'trial'\" class=\"btn-long btn-color-fill\" (click)=\"cancelSubscription(currentSubscription?.id)\" >Cancel subscription</button>\n\n            </div>\n\n            <ng-container *ngIf=\"currentSubscription?.status !== 'new'\">\n                <div class=\"colored-bck-subscription payment-methods-container px-8 py-4 my-2 w-100\">\n                    <div class=\"d-flex justify-content-between\">\n                        <h4 class=\"mb-0\">My Subscription</h4>\n                      </div>\n\n                    <ng-container *ngIf=\"currentSubscription?.status === 'trial' || currentSubscription?.status === 'paid'\">\n                        <p *ngIf=\"currentSubscription?.autoRenew\" class=\"d-block d-md-block\">\n                            Urmatoarea plata va avea loc pe data de <span><b>{{ currentSubscription?.expirationDate | date : 'dd MMM YYYY' }}</b></span>, pentru suma de <span><b>{{ currentSubscription?.purchasedPrice }} EUR</b></span>. Va rugam sa fiti siguri ca aveti suma respectiva pe card, pana la data respectiva!\n                        </p>\n\n                        <p *ngIf=\"!currentSubscription?.autoRenew\" class=\"d-block d-md-block\">\n                            Abonamentul curent va expira in data de <span><b>{{ currentSubscription?.expirationDate | date : 'dd MMM YYYY' }}</b></span>, pretul acestuia fiind de <span><b>{{ currentSubscription?.purchasedPrice }} EUR</b></span>.\n                            Dupa data expirarii veti primi viitoare instructiuni in vederea reactivarii!\n                        </p>\n\n                        <h5>Subscription details</h5>\n                        <div class=\"d-flex justify-content-between subscription-details\">\n                            <p>Start date</p>\n                            <p class=\"subscription-date\">{{ currentSubscription?.purchasedDate | date : 'dd MMM YYYY' }}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between subscription-details\">\n                            <p>End date</p>\n                            <p class=\"subscription-date\">{{ currentSubscription?.expirationDate | date : 'dd MMM YYYY' }}</p>\n                        </div>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"currentSubscription?.status === 'canceled'\">\n                        <p class=\"d-block d-md-block\">\n                            Dorim să vă informam că abonamentul dumneavoastră a expirat în data de {{ currentSubscription?.expirationDate | date : 'dd MMM YYYY' }}.\n                            Pentru a crea un nou abonament, vă rugam să apăsați butonul de mai sus.\n                            Mulțumim pentru înțelegere și pentru fidelitate fata de serviciul nostru!\n                        </p>\n                    </ng-container>\n\n<!--                    <div *ngIf=\"(currentSubscription?.status === 'trial' || currentSubscription?.status === 'paid') && currentSubscription?.autoRenew\"-->\n<!--                         class=\"d-flex justify-content-end\">-->\n<!--                        <p (click)=\"cancelSubscription(currentSubscription?.id)\" class=\"subscription-cancel\">-->\n<!--                            <i class=\"fas fa-ban\"></i>-->\n<!--                            Cancel subscription-->\n<!--                        </p>-->\n<!--                    </div>-->\n                </div>\n            </ng-container>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"(purchasedSubscriptions$ | async) as purchasedSubscriptions\">\n        <div class=\"payment-methods-container px-8 py-4 my-2 w-100 subcription-class\">\n            <div class=\"d-flex justify-content-between align-items-center\">\n                <h2 class=\"py-4\">All Subscriptions</h2>\n            </div>\n\n            <!--if subscriptions list is empty-->\n            <div *ngIf=\"!purchasedSubscriptions || purchasedSubscriptions?.length === 0\" class=\"py-4\"><p>No previous subscriptions</p></div>\n\n            <!--list of subscription-->\n            <div *ngFor=\"let subscription of purchasedSubscriptions\" class=\"my-2 experiences-card-class d-flex\">\n                <div class=\"col-6 col-sm-6 col-md-7 col-lg-9 p-2 align-items-center\">\n                    <h4>Status: {{subscription?.expirationDate < (currentDate | date:'yyyy-MM-dd') ? 'Expired' : 'Active'}}</h4>\n                    <p>{{subscription?.purchasedDate | date: 'dd MMM y'}} - {{subscription?.expirationDate | date: 'dd MMM y'}}</p>\n                </div>\n                <div class=\"d-flex blue col-4 col-sm-3 col-md-3 col-lg-2 justify-content-center align-items-center p-3\">\n                    <div  class=\"d-flex col-lg-9 justify-content-center\">\n                        <h4>{{subscription?.currency | uppercase}} {{subscription?.purchasedPrice}}</h4>\n                    </div>\n                </div>\n                <div class=\"d-flex col-2 col-sm-3 col-md-2 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"subscriptionsMenu\">\n                    <div  class=\"col-lg-3 d-flex justify-content-center\">\n                        <i class=\"fas fa-arrow-right\"></i>\n                    </div>\n                </div>\n                <mat-menu #subscriptionsMenu=\"matMenu\">\n                    <button mat-menu-item (click)=\"downloadBill(subscription?.bill?.series, subscription?.bill?.number)\">\n                        <i class=\"fas fa-file\"></i>\n                        Descarcă factura\n                    </button>\n                </mat-menu>\n            </div>\n        </div>\n    </ng-container>\n</div>\n";

/***/ }),

/***/ 81337:
/*!****************************************************************************************!*\
  !*** ./src/app/features/role-client/client-site/client-site.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header></app-header>\n<!--<app-menu></app-menu>-->\n<div class=\"inner-app-content\">\n    <router-outlet></router-outlet>\n</div>\n<app-faq-footer></app-faq-footer>\n";

/***/ }),

/***/ 57509:
/*!***********************************************************************************!*\
  !*** ./src/app/features/role-client/client-view/client.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--mobile title bar-->\n<!--<div class=\"page-header mobile-header py-3 d-flex align-items-center\">\n\n    <div class=\"d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap\">\n            <i class=\"fas fa-arrow-left d-flex px-3\" routerLink=\"/private/clients\"></i>\n    </div>\n    <h2 class=\"d-flex m-auto\">My profile</h2>\n</div>-->\n\n<!--Title bar-->\n<div class=\"container\">\n    <!--<div class=\"container py-4 px-0 web-header\">\n        <div class=\"page-header d-flex justify-content-between align-items-center flex-wrap\">\n            <h2>My profile</h2>\n\n            <div class=\"d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap\">\n                <button id=\"btnBackHeaderViewClient\" class=\"btn-long btn-color-outline mr-2\" routerLink=\"/dashboard/clients/\">\n                    <i class=\"fas fa-arrow-left\"></i>\n                    {{ 'BTN.BACK' | translate }}\n                </button>\n            </div>\n        </div>\n    </div>-->\n\n\n    <app-client-profile></app-client-profile>\n    <div class=\"my-4 px-5 py-3 my-profile-container\">\n        <mat-tab-group mat-stretch-tabs=\"false\" class=\"remove-border-bottom\" dynamicHeight [selectedIndex]=\"selectedOuterTab\">\n            <mat-tab label=\"Activity center\" >\n                <mat-tab-group dynamicHeight mat-align-tabs=\"start\" [selectedIndex]=\"selectedChildOuterTab\">\n                    <!--My experiences card------------------------------------------>\n                    <mat-tab label=\"My experiences\">\n                        <div class=\"d-flex justify-content-start gap-2 flex-wrap\">\n                            <div *ngFor=\"let experience of experiencesList\">\n                                <div class=\"my-2 experiences-card-class d-flex justify-content-start\">\n                                    <div class=\"my-exp-details col-6 col-sm-6 col-md-7 col-lg-8 p-2 d-flex align-items-start flex-column justify-content-center\">\n                                        <h4 [routerLink]=\"'/client/dashboard/my-booking/view/' + experience.id\">{{experience.name}}</h4>\n                                        <p>{{experience.checkIn | date:'d MMM y'}} - {{experience.checkOut | date:'d MMM y'}}</p>\n                                        <p>{{experience.city}}, {{experience.country}}</p>\n                                    </div>\n                                    <div class=\"my-exp-price d-flex col-4 col-sm-3 col-md-3 col-lg-3 align-items-center p-3\">\n                                        <div  class=\"col-lg-9 \">\n                                            <h4>{{experience.totalPrice | number: '1.0-2'}} {{experience.currency}}</h4>\n                                            <p>Completed</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"my-exp-options d-flex col-2 col-sm-3 col-md-2 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"experiencesMenu\">\n                                        <div  class=\"col-lg-3 d-flex justify-content-center\">\n                                            <i class=\"fas fa-ellipsis-v\"></i>\n                                        </div>\n                                    </div>\n                                    <mat-menu #experiencesMenu=\"matMenu\">\n                                        <button mat-menu-item routerLink=\"../inbox/{{experience.conversationId}}\" >\n                                            <i class=\"fas fa-comment-alt\"></i>\n                                          Contact provider\n                                        </button>\n                                        <!-- <button mat-menu-item>\n                                            <i class=\"fas fa-times\"></i>\n                                            Remove\n                                        </button> -->\n                                    </mat-menu>\n                                </div>\n                            </div>\n                        </div>\n                        <!--See more-->\n                        <div class=\"d-flex justify-content-end align-items-center\">\n                            <p><a routerLink=\"../../dashboard/my-bookings\">Vezi mai mult <i class=\"fas fa-arrow-right\"></i></a></p>\n                        </div>\n                    </mat-tab>\n                     <!--End My experiences card------------------------------------------>\n\n                    <mat-tab label=\"Itinerariile mele\">\n                        <div class=\"d-flex justify-content-start gap-2 flex-wrap\">\n                            <div *ngFor=\"let experience of itinerariesList\">\n                                <div class=\"my-2 experiences-card-class d-flex justify-content-start\" *ngIf=\"experience.resources !== null && experience.resources.length > 0\">\n                                    <div class=\"my-exp-details col-6 col-sm-6 col-md-7 col-lg-8 p-2 d-flex align-items-start flex-column justify-content-center\">\n                                        <h4 *ngIf=\"experience.name; else elseBlock\">{{experience.name}}</h4>\n                                        <ng-template #elseBlock><h4>Fără nume generat</h4></ng-template>\n\n                                        <p>{{experience.resources[0]?.startDate | date:'d MMM y'}} - {{experience.resources[0]?.endDate | date:'d MMM y'}}</p>\n                                            <p>{{experience.resources[0]?.city}} {{experience.resources[0]?.country}}</p>\n\n                                    </div>\n                                    <div class=\"my-exp-price d-flex col-4 col-sm-3 col-md-3 col-lg-3 align-items-center p-3\">\n                                        <div  class=\"col-lg-9 \">\n                                            <h4>{{(experience.accommodationPrice\n                                            + experience.dayActivityPrice\n                                            + experience.eatAndDrinkPrice\n                                            + experience.eveningActivityPrice\n                                            + experience.transportPrice) | number: '1.0-2'}} {{experience.currency}}</h4>\n<!--                                            <p>Completed</p>-->\n                                        </div>\n                                    </div>\n                                    <div class=\"my-exp-options d-flex col-2 col-sm-3 col-md-2 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"experiencesMenu\">\n                                        <div  class=\"col-lg-3 d-flex justify-content-center\">\n                                            <i class=\"fas fa-ellipsis-v\"></i>\n                                        </div>\n                                    </div>\n                                    <mat-menu #experiencesMenu=\"matMenu\">\n                                        <button mat-menu-item routerLink=\"../itinerary-bookings/{{experience.id}}\" >\n                                            <i class=\"fas fa-eye\"></i>\n                                            View Itinerary\n                                        </button>\n\n                                        <button mat-menu-item (click)=\"downloadBill(experience?.bill?.series, experience?.bill?.number)\">\n                                            <i class=\"fas fa-file\"></i>\n                                            Descarcă factura\n                                        </button>\n                                        <!-- <button mat-menu-item>\n                                            <i class=\"fas fa-times\"></i>\n                                            Remove\n                                        </button> -->\n                                    </mat-menu>\n                                </div>\n                            </div>\n                        </div>\n                        <!--See more-->\n<!--                        <div class=\"d-flex justify-content-end align-items-center\">-->\n<!--                            <p><a routerLink=\"../../dashboard/my-bookings\">Vezi mai mult <i class=\"fas fa-arrow-right\"></i></a></p>-->\n<!--                        </div>-->\n                    </mat-tab>\n\n\n                    <!--Shared Experiences tab/card----------------------------------------------->\n                    <mat-tab label=\"Shared experiences\">\n                        <div class=\"row g-2 py-2 \">\n<!--                        <div class=\"d-flex justify-content-between gap-2 flex-wrap\">-->\n                            <div *ngFor=\"let sharedExperience of sharedExperiencesList\" class=\"col-12 col-md-6 col-lg-4\">\n                                <div class=\"shared-exp-card w-100 d-flex flex-row\">\n                                    <div class=\"info d-flex flex-column align-items-start justify-content-center\">\n                                        <p class=\"name mb-0\">{{sharedExperience.name}}</p>\n                                        <div class=\"row\">\n                                            <div class=\"col-12 col-md-7\">\n                                                <div class=\"d-flex flex-column\">\n                                                    <p>Place: <span>{{sharedExperience.place}}</span></p>\n                                                    <p>Date: <span>{{(sharedExperience.startDate | date:'d MMM yyyy')+' - '+(sharedExperience.endDate | date:'d MMM yyyy')}}</span></p>\n                                                    <p>Starting at: <span>{{sharedExperience.startHour ? sharedExperience.startHour : '-'}}</span></p>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-12 col-md-5\">\n                                                <div class=\"d-flex flex-column align-items-start align-items-md-end\">\n                                                    <p>Status: <span>{{sharedExperience.status ? sharedExperience.status : '-'}}</span></p>\n                                                    <p><i class=\"fas fa-map-marker-alt me-2\"></i> <span>{{sharedExperience.city+', '+ sharedExperience.country}}</span></p>\n                                                    <p>Ending at: <span>{{sharedExperience.endHour ? sharedExperience.endHour : '-'}}</span></p>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"menu-button d-flex justify-content-center align-items-center\" [matMenuTriggerFor]=\"sharedExperiencesMenu\">\n                                        <i class=\"fas fa-ellipsis-v\"></i>\n                                    </div>\n                                </div>\n\n                                <mat-menu #sharedExperiencesMenu=\"matMenu\">\n                                    <button mat-menu-item  routerLink=\"../inbox/{{sharedExperience.conversationId}}\">\n                                        <i class=\"fas fa-comment-alt\"></i>\n                                    Contact provider\n                                    </button>\n                                    <!-- <button mat-menu-item>\n                                        <i class=\"fas fa-times\"></i>\n                                        Remove\n                                    </button> -->\n                                </mat-menu>\n                                </div>\n                            </div>\n\n                            <!--Pagination-->\n                            <mat-paginator\n                            [pageSizeOptions]=\"pageSizeArray\"\n                            [length]=\"totalSharedExperiences\"\n                            [pageSize]=\"pageSize\"\n                            (page)=\"pageChanged($event)\"\n                            >\n                            </mat-paginator>\n                    </mat-tab>\n                    <!--End shared experiences tab/card-->\n\n                    <!--Applied Jobs tab/card-->\n                    <mat-tab label=\"Applied Jobs\">\n                        <!--applied Jobs-->\n                        <div class=\"row g-2 py-2 \">\n                        <!--loop with jobs-->\n                        <div *ngFor=\"let job of jobsList\" class=\"col-12 col-md-6 col-lg-4\">\n                            <div class=\"applied-jobs-card-class d-flex justify-content-between align-items-center my-2\">\n                                <!--img col-->\n                                <div class=\"d-flex justify-content-center align-self-stretch\">\n                                    <img src=\"{{job?.featuredImage?.filePath}}\">\n                                </div>\n                                <!--text col-->\n                                <div class=\"applied-jobs-details p-2 d-flex flex-column\">\n                                    <div class=\"d-flex flex-column align-items-start\">\n                                        <h4>{{job.name}}</h4>\n                                        <!-- <h5>Job Full-Time</h5> -->\n                                    </div>\n                                    <div class=\"d-flex flex-column align-items-end\">\n                                        <h5><span><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                                        </span>{{job.city}}, {{job.country}}</h5>\n                                        <p class=\"green\"><span><i class=\"fas fa-check-double\"></i></span>Applied on {{job.date | date: 'dd.MM.y'}}</p>\n                                    </div>\n\n                                </div>\n                                <!--date col-->\n                                <!-- <div class=\"col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-end align-self-end p-2\">\n                                </div> -->\n                                <div class=\"menu-button-jobs d-flex justify-content-center align-items-center\" [matMenuTriggerFor]=\"applyJobMenu\">\n                                    <i class=\"fas fa-ellipsis-v\"></i>\n                                </div>\n                            </div>\n                            <mat-menu #applyJobMenu=\"matMenu\">\n                                <button mat-menu-item  routerLink=\"../inbox/{{job.conversationId}}\">\n                                    <i class=\"fas fa-comment-alt\"></i>\n                                Contact provider\n                                </button>\n                                <!-- <button mat-menu-item>\n                                    <i class=\"fas fa-times\"></i>\n                                    Remove\n                                </button> -->\n                            </mat-menu>\n                        </div>\n\n                        </div>\n\n\n\n                        <!--Pagination-->\n                        <mat-paginator\n                        [pageSizeOptions]=\"pageSizeArray\"\n                        [length]=\"totalAppliedJobs\"\n                        [pageSize]=\"pageSize\"\n                        (page)=\"pageChanged($event)\"\n                        >\n                        </mat-paginator>\n                    </mat-tab>\n                    <!--Applied Jobs tab/card-->\n\n                    <!--My courses Jobs tab/card-->\n                    <mat-tab label=\"My courses\">\n                        <div class=\"row g-2 py-2 \">\n\n                            <div *ngFor=\"let course of coursesList\" class=\"col-12 col-md-6 col-lg-4\">\n\n                                <div class=\"courses-class d-flex justify-content-between align-items-center my-2\">\n                                    <!--img col-->\n                                    <div class=\"d-flex justify-content-center align-self-stretch\">\n                                        <img src=\"{{course?.featuredImage === null ? '../../../../../../assets/images/others/inspire.jpg' : course?.featuredImage?.filePath}}\">\n                                    </div>\n                                    <!--text col-->\n                                    <div class=\"cours-details p-2 d-flex flex-column\">\n                                        <div class=\"d-flex flex-column align-items-start mb-2\">\n                                            <h4>{{course?.name}}</h4>\n                                            <!-- <h4>Object-Oriented Programming</h4> -->\n                                        </div>\n                                        <div class=\"d-flex align-items-center justify-content-between\">\n                                            <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                                                <!-- <p>Duration: <span>45 min</span></p>\n                                                <p>Starts at: <span>16:30</span></p> -->\n                                            </div>\n                                            <div class=\"d-flex flex-column align-items-end justify-content-center\">\n                                                <p><i class=\"fas fa-globe\"></i> Online</p>\n                                                <p>Date: <span>{{course?.date | date: \"dd.MM.y\"}}</span></p>\n                                            </div>\n\n                                        </div>\n\n                                    </div>\n                                    <!--date col-->\n                                    <div class=\"menu-button-courses d-flex justify-content-center align-items-center\" [matMenuTriggerFor]=\"coursesMenu\">\n                                        <i class=\"fas fa-ellipsis-v\"></i>\n                                    </div>\n                                </div>\n\n                                <mat-menu #coursesMenu=\"matMenu\">\n                                    <button mat-menu-item routerLink=\"../inbox/{{course.conversationId}}\">\n                                        <i class=\"fas fa-comment-alt\"></i>\n                                    Contact provider\n                                    </button>\n                                    <button mat-menu-item routerLink=\"../my-booking/view/{{course.id}}\">\n                                        <i class=\"fas fa-eye\"></i>\n                                        View\n                                    </button>\n                                </mat-menu>\n                            </div>\n                        </div>\n\n\n\n                         <!--Pagination-->\n                         <mat-paginator\n                         [pageSizeOptions]=\"pageSizeArray\"\n                         [length]=\"totalMyCourses\"\n                         [pageSize]=\"pageSize\"\n                         (page)=\"pageChanged($event)\"\n                         >\n                         </mat-paginator>\n                    </mat-tab>\n                    <!--End My courses Jobs tab/card-->\n                </mat-tab-group>\n            </mat-tab>\n\n            <!--Favorites tab-->\n            <mat-tab label=\"Favorites\">\n                    <ng-template matTabContent>\n                        <div class=\"mt-3 fav-client\">\n                        <owl-carousel-o [options]=\"customOptions\">\n                            <ng-container *ngFor = \"let resource of resourcesList\">\n                                <ng-template carouselSlide>\n                                    <app-favorite-resource-card [resource]=\"resource\" [favorite]=\"true\"></app-favorite-resource-card>\n                                </ng-template>\n                            </ng-container>\n                        </owl-carousel-o>\n                        </div>\n                    </ng-template>\n            </mat-tab>\n\n            <!--Loialty Points-->\n            <mat-tab label=\"Loialty Points\">\n                <div class=\"loialty-points-card my-2\">\n                    <div class=\"d-flex align-items-center\">\n                        <img src=\"../../../../assets/images/others/loialty-points.png\">\n                        <h4>You've got <span> {{clientInfo?.loyaltyPoints}} </span> points!</h4>\n                    </div>\n                    <div class=\" loialty-rectangle my-2 px-2\">\n                        <h5>Here are ways to spend them:</h5>\n                        <ul>\n                            <li>Free nights at more than 7,000 Hotels, Resorts and Events.\n                            <li>Special events and experiences through Bestinform's Trips & Experiences.</li>\n                            <li>Redeeming for gift cards or gear, with our travel partners and more.</li>\n                        </ul>\n                    </div>\n                </div>\n            </mat-tab>\n             <!--End Loialty Points tab/card-->\n\n            <!--Friends tab--------------------------------------------------------------------------->\n           <mat-tab label=\"Friends\">\n               <mat-tab-group dynamicHeight mat-align-tabs=\"start\">\n                   <!-- My Friends tab -->\n                   <mat-tab label=\"My friends\">\n                       <div class=\"firends-card d-flex align-items-center my-2\"  *ngFor=\"let friend of accFriendList\">\n                          <!-- img col -->\n                           <div class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-1 d-flex justify-content-center p-2\">\n                               <!-- <img src=\"../../../../assets/images/others/user.jpg\"> -->\n                               <img [src]=friend?.avatar?.filePath>\n                            </div>\n                           <!-- text col -->\n                           <div class=\"col-8 col-sm-8 col-md-9 col-lg-9 col-xl-10 p-2\">\n                               <h4>{{friend?.lastName}} {{friend?.firstName[0]}}.</h4>\n                                <p>{{friend?.email}}</p>\n\n                           </div>\n                          <!-- dots col -->\n                           <div class=\"col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 d-flex align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"friendsMenu\">\n                                   <i class=\"fas fa-ellipsis-v\"></i>\n                           </div>\n                           <mat-menu #friendsMenu=\"matMenu\">\n                               <button mat-menu-item>\n                                   <i class=\"fas fa-comment-alt\"></i>\n                                 Send a message\n                               </button>\n                               <button mat-menu-item (click)=\"deleteFriend(friend?.id)\">\n                                   <i class=\"fas fa-user-times\"></i>\n                                   Remove friend\n                               </button>\n                             </mat-menu>\n                       </div>\n                   </mat-tab>\n                  <!-- End my Friends -->\n\n                   <!--Friends request tab-->\n                   <mat-tab>\n                       <ng-template mat-tab-label>\n                           Friend Requests\n                           <div class=\"friends-notification px-2 mx-2\">{{lengthRequests}}</div>\n                         </ng-template>\n                       <div class=\"firends-card d-flex align-items-center my-2\" *ngFor=\"let friendRequest of pendingFriendList\">\n                           <!--img col-->\n                           <div class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-1 d-flex justify-content-center p-2\">\n                            <img src={{friendRequest.avatar?.filePath}}>\n                        </div>\n                           <!--text col-->\n                           <div class=\"col-8 col-sm-8 col-md-9 col-lg-9 col-xl-10 p-2\">\n                               <h4>{{friendRequest.lastName}} {{friendRequest.firstName[0]}}.</h4>\n                               <p>{{friendRequest.email}}</p>\n\n                           </div>\n                           <!--dots col-->\n                           <div class=\"col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 d-flex align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"friendRequestMenu\">\n                                   <i class=\"fas fa-ellipsis-v\"></i>\n                           </div>\n                           <mat-menu #friendRequestMenu=\"matMenu\">\n                               <button mat-menu-item (click)=\"acceptFriendRequest(friendRequest.id)\">\n                               <i class=\"fas fa-user-check\"></i>\n                                 Accept request\n                               </button>\n                               <button mat-menu-item (click)=\"rejectFriendRequest(friendRequest.id)\">\n                                   <i class=\"fas fa-user-times\"></i>\n                                  Decline Request\n                               </button>\n                             </mat-menu>\n                       </div>\n                   </mat-tab>\n                   <!--End Friends Request-->\n               </mat-tab-group>\n           </mat-tab>\n            <!--End Friends tab-->\n          </mat-tab-group>\n\n    </div>\n\n</div>\n\n\n\n";

/***/ }),

/***/ 13665:
/*!********************************************************************************************!*\
  !*** ./src/app/features/role-client/delete-client/delete-client.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"{{ 'GENERAL.DELETE_ACCOUNT' | translate }}\"\n                          [buttonBackRoute]=\"'..'\">\n    </app-dashboard-header>\n    <div class=\"card\">\n        <div class=\"card-header border-0\">\n            <h3>\n                {{ 'GENERAL.DELETE_ACCOUNT' | translate }}\n            </h3>\n\n            <p class=\"mb-6\">\n                {{ 'GENERAL.DELETE_ACCOUNT_WARNING' | translate }}\n            </p>\n        </div>\n\n        <div class=\"card-body\">\n\n            <div *ngIf=\"currentUser$ | async as currentUser\" class=\"user-info-container d-flex justify-content-between align-items-center\">\n                <div class=\"d-flex gap-2\">\n                    <img class=\"profile-picture\" [src]=\"currentUser.avatar.filePath\" alt=\"profile-picture\">\n\n                    <div class=\"user-info d-flex flex-column align-items-start justify-content-center\">\n                        <h3>\n                            {{ currentUser.firstName + ' ' + currentUser.lastName}}\n                        </h3>\n\n                        <p>\n                            {{ currentUser.email }}\n                        </p>\n                    </div>\n                </div>\n\n                <div class=\"action-buttons d-flex gap-2\">\n                    <button class=\"btn-long btn-color-outline\" type=\"button\" routerLink=\"..\">\n                        <i class=\"fas fa-arrow-left\"></i>\n                        {{ \"BTN.DELETE_ABORT\" | translate }}\n                    </button>\n\n                    <button class=\"btn-long btn-color-fill\" type=\"button\" (click)=\"deleteAccount(currentUser.id)\">\n                        {{ \"BTN.DELETE_CONFIRM\" | translate }}\n                        <i class=\"fas fa-arrow-right\"></i>\n                    </button>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"card-footer border-0\">\n\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 69129:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/client-preferences/client-preferences.component.html?ngResource ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"content d-flex flex-column align-items-center h-100 w-100\">\n    <p class=\"p-4 mb-0 upper\">STEP 1 OF 3</p>\n    <h1>{{'ENROLLMENT.CHOOSE-PREFERENCES' | translate}}</h1>\n\n    <div class=\"preferences container\">\n        <div *ngFor=\"let attribute of allAttributes\" class=\"row\">\n            <p *ngIf=\"attribute?.valueOptions.length > 0\" class=\"attribute-name col-12\">{{attribute.name | titlecase}}</p> <br>\n            <div *ngFor=\"let value of attribute?.valueOptions\" class=\"col-3 mb-3\">\n                <div (click)=\"value.selected ? deleteValue(attribute.id, value.val) : addValue(attribute.id, value)\" [ngClass]=\"value.selected ? 'selected' : 'not-selected'\" class=\"attribute-chip d-flex justify-content-between align-items-center\">\n                    <span>{{value.selected ? (value.val | titlecase) : (value | titlecase)}}</span>\n                    <i *ngIf=\"!value.selected\" class=\"fas fa-plus\"></i>\n                    <i *ngIf=\"value.selected\" class=\"fas fa-times\"></i>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"footer-btns w-100 d-flex justify-content-between\">\n        <button class=\"back-btn\" type=\"button\" (click)=\"prevStep()\"><i class=\"fas fa-chevron-left\"></i>\n        </button>\n        <button class=\"skip-btn\" type=\"button\" (click)=\"skipStep()\">Skip\n        </button>\n        <button class=\"next-btn\" type=\"button\" (click)=\"nextStep()\"><i class=\"fas fa-chevron-right\"></i>\n        </button>\n    </div>\n\n</div>";

/***/ }),

/***/ 9370:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/finish-enrollment/finish-enrollment.component.html?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"content d-flex flex-column align-items-center justify-content-between h-100 w-100\">\n    <p class=\"p-4 mb-0 upper\">{{'ENROLLMENT.CONGRATS' | translate}}</p>\n    <h1>{{'ENROLLMENT.ACTIVE-ACCOUNT' | translate}}</h1>\n    <p class=\"welcome\">{{'ENROLLMENT.WELCOME' | translate}}<span class=\"name\">{{currentUser?.firstName+' '+currentUser?.lastName}}</span>!</p>\n\n    <div class=\"footer-btns w-100 d-flex justify-content-between\">\n        <button class=\"back-btn\" type=\"button\">\n        </button>\n<!--        <button class=\"skip-btn\" type=\"button\" (click)=\"finish()\">{{'ENROLLMENT.GO-TO-HP' | translate}}-->\n<!--        </button>-->\n        <button class=\"skip-btn\" type=\"button\" (click)=\"startTrial()\">{{'ENROLLMENT.TRIAL' | translate}}\n        </button>\n        <button class=\"next-btn\" type=\"button\">\n        </button>\n    </div>\n\n</div>";

/***/ }),

/***/ 25130:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/trial-active/trial-active.component.html?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"content d-flex flex-column align-items-center justify-content-between h-100 w-100\">\n    <p class=\"p-4 mb-0 upper\">{{'ENROLLMENT.CONGRATS' | translate}}</p>\n    <h1>Pachetul trial a fost activat!</h1>\n    <p class=\"welcome\">Bun venit în versiunea de trial a aplicației noastre! Ești acum pe cale să experimentezi toate funcționalitățile pe care le oferim. Ne bucurăm că te-ai alăturat comunității noastre!</p>\n\n    <div class=\"footer-btns w-100 d-flex justify-content-between\">\n        <button class=\"back-btn\" type=\"button\">\n        </button>\n        <button class=\"skip-btn\" type=\"button\" (click)=\"goToHp()\">{{'ENROLLMENT.GO-TO-HP' | translate}}\n        </button>\n        <button class=\"next-btn\" type=\"button\">\n        </button>\n    </div>\n\n</div>";

/***/ }),

/***/ 51193:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/user-data/user-data.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"content d-flex flex-column align-items-center justify-content-between h-100 w-100\">\n    <p class=\"p-4 mb-0 upper\">STEP 2 OF 3</p>\n    <h1>{{'ENROLLMENT.NICE-TO-MEET-YOU' | translate}}</h1>\n\n    <div class=\"user-data\">\n        <p class=\"personal-data\">{{'ENROLLMENT.PERSONAL-DATA' | translate}}</p>\n        <form [formGroup]=\"userDataForm\">\n            <mat-form-field appearance=\"standard\" class=\"w-100 custom-field\">\n                <mat-label>{{'ENROLLMENT.BIRTHDAY' | translate}}</mat-label>\n                <input matInput [matDatepicker]=\"picker\" formControlName=\"birthdate\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n                <mat-error *ngIf=\"userDataForm.get('birthdate').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"standard\" class=\"w-100 custom-field\">\n                <mat-label>{{'ENROLLMENT.TELEPHONE' | translate}}</mat-label>\n                <input matInput formControlName=\"telephone\">\n                <mat-error *ngIf=\"userDataForm.get('telephone').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"standard\" class=\"w-100 custom-field\">\n                <mat-label>{{'ENROLLMENT.GENDER' | translate}}</mat-label>\n                <mat-select formControlName=\"gender\">\n                    <mat-option value=\"male\">{{'ENROLLMENT.MALE' | translate}}</mat-option>\n                    <mat-option value=\"female\">{{'ENROLLMENT.FEMALE' | translate}}</mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"userDataForm.get('gender').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n            </mat-form-field>\n\n        </form>\n    </div>\n\n    <div class=\"footer-btns w-100 d-flex justify-content-between\">\n        <button class=\"back-btn\" type=\"button\" (click)=\"prevStep()\"><i class=\"fas fa-chevron-left\"></i>\n        </button>\n        <button class=\"skip-btn\" type=\"button\" (click)=\"nextStep()\">{{'ENROLLMENT.NEXT-STEP' | translate}}\n        </button>\n        <button class=\"next-btn\" type=\"button\" (click)=\"nextStep()\"><i class=\"fas fa-chevron-right\"></i>\n        </button>\n    </div>\n</div>";

/***/ }),

/***/ 7355:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment-steps/welcome-screen/welcome-screen.component.html?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"content d-flex flex-column justify-content-around align-items-center h-100 w-100\">\n    <p class=\"p-4 mb-0 upper\">{{'ENROLLMENT.WELCOME-BACK' | translate}}</p>\n    <h1>{{'ENROLLMENT.CONTINUE-WITH-DATA' | translate}}</h1>\n    <p>{{'ENROLLMENT.WELCOME-DIR' | translate}}</p>\n    <button class=\"next-btn\" type=\"button\" (click)=\"nextStep()\"><i></i>{{'ENROLLMENT.NEXT-STEP' | translate}}<i class=\"fas fa-chevron-right\"></i>\n    </button>\n</div>\n";

/***/ }),

/***/ 55845:
/*!**************************************************************************************!*\
  !*** ./src/app/features/role-client/enrollment/enrollment.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--    *ngIf=\"dataLoaded\"-->\n<div class=\"background d-flex justify-content-center\">\n    <div [ngSwitch]=\"step\" class=\"content-stepper\">\n        <div *ngSwitchCase=\"0\" class=\"h-100\">\n            <app-welcome-screen/>\n        </div>\n        <div *ngSwitchCase=\"1\" class=\"h-100\">\n            <app-client-preferences/>\n        </div>\n        <div *ngSwitchCase=\"2\" class=\"h-100\">\n            <app-user-data/>\n        </div>\n\n        <div *ngSwitchCase=\"3\" class=\"h-100\">\n            <app-finish-enrollment/>\n        </div>\n\n        <div *ngSwitchCase=\"4\" class=\"h-100\">\n            <app-trial-active/>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 47900:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/role-client/itinerary-bookings/itinerary-bookings.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<!--Title bar-->\n<div class=\"container-fluid client-general-box\">\n\n    <div  class=\"container\" >\n        <app-dashboard-header pageTitleOne=\"Rezervări itinerariu\"\n                              routeTitleOne=\"../../dashboard/itinerary-bookings\"\n                              [buttonBackRoute]=\"'../../'\">\n        </app-dashboard-header>\n    </div>\n\n    <div class=\"container my-bookings-container px-0 mb-4\">\n        <div class=\"px-10\">\n            <!--Active tab-->\n\n            <mat-tab-group mat-stretch-tabs=\"false\" class=\"remove-border-bottom\" dynamicHeight>\n                <mat-tab label=\"Active\" >\n                    <!--if booking list is empty-->\n                    <div *ngIf=\"activeBookingList.length===0\" class=\"py-4\"><p>{{\"RESERVATION.EMPTY-LIST-MSG\" | translate}}</p></div>\n                    <!--list of bookings-->\n                    <div *ngFor=\"let booking of activeBookingList\" class=\"my-2 experiences-card-class d-flex\">\n                        <div class=\"col-6 col-sm-6 col-md-7 col-lg-9 p-2 align-items-center\">\n                            <h4><a routerLink=\"../../my-booking/view/{{booking.id}}\">{{booking.name}}</a></h4>\n                            <p>{{booking.checkIn | date: 'dd MMM y'}} - {{booking.checkOut | date: 'dd MMM y'}}</p>\n                            <p>{{booking.city}}, {{booking.country}}</p>\n                        </div>\n                        <div class=\"d-flex blue col-4 col-sm-3 col-md-3 col-lg-2 justify-content-center align-items-center p-3\">\n                            <div  class=\"d-flex col-lg-9 justify-content-center\">\n                                <h4>€ {{booking.totalPrice}}</h4>\n                            </div>\n                        </div>\n                        <div class=\"d-flex col-2 col-sm-3 col-md-2 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"experiencesMenu\">\n                            <div  class=\"col-lg-3 d-flex justify-content-center\">\n                                <i class=\"fas fa-arrow-right\"></i>\n                            </div>\n                        </div>\n                        <mat-menu #experiencesMenu=\"matMenu\">\n                            <button mat-menu-item routerLink=\"../../inbox/{{booking.conversationId}}\">\n                                <i class=\"fas fa-comment-alt\"></i>\n                                Contact provider\n                            </button>\n\n                            <button mat-menu-item (click)=\"downloadBill(booking?.bill?.series, booking?.bill?.number)\">\n                                <i class=\"fas fa-file\"></i>\n                                Descarcă factura\n                            </button>\n                            <!-- <button mat-menu-item>\n                                <i class=\"fas fa-times\"></i>\n                                Remove\n                            </button> -->\n                        </mat-menu>\n                    </div>\n\n                    <!--Pagination-->\n                    <mat-paginator\n                            [pageSizeOptions]=\"pageItems\"\n                            [length]=\"totalActiveElements\"\n                            [pageSize]=\"pageSize\"\n                            (page)=\"pageChanged($event)\"\n                    >\n                    </mat-paginator>\n                </mat-tab>\n                <!--Past tab-->\n                <mat-tab label=\"Past\" >\n                    <!--if booking list is empty-->\n                    <div *ngIf=\"pastBookingList.length===0\" class=\"py-4\"><p>{{\"RESERVATION.EMPTY-LIST-MSG\" | translate}}</p></div>\n\n                    <!--list of bookings-->\n                    <div *ngFor=\"let booking of pastBookingList\" class=\"my-2 experiences-card-class d-flex\">\n                        <div class=\"col-5 col-sm-5 col-md-5 col-lg-7 p-2 align-items-center\">\n                            <h4><a routerLink=\"../../my-booking/view/{{booking.id}}\">{{booking.name}}</a></h4>\n                            <p>{{booking.checkIn | date: 'dd MMM y'}} - {{booking.checkOut | date: 'dd MMM y'}}</p>\n                            <p>{{booking.city}}, {{booking.country}} </p>\n                        </div>\n                        <div class=\"rate-button d-flex flex-wrap col-3 col-sm-4 col-md-4 col-lg-2 align-items-center justify-content-end\">\n                            <button type=\"button\"\n                                    *ngIf=\"booking.recommended===true || booking.recommended === null\"\n                                    [disabled]=\"booking.recommended===true\"\n                                    class=\"btn-rate-booking w-50\"\n                                    (click)=\"addReviewToResource(booking.id, true)\">\n                                <i class=\"fas fa-thumbs-up active-thumbs-up\"></i>\n                            </button>\n                            <button type=\"button\"\n                                    class=\"btn-rate-booking w-50\"\n                                    (click)=\"addReviewToResource(booking.id, false)\"\n                                    *ngIf=\"booking.recommended===false || booking.recommended === null\"\n                                    [disabled]=\"booking.recommended===false\">\n                                <i class=\"fas fa-thumbs-down active-thumbs-down\"></i>\n                            </button>\n                        </div>\n                        <div class=\"d-flex blue col-2 col-sm-2 col-md-2 col-lg-2 align-items-center p-3\">\n                            <div  class=\"col-lg-9 d-flex justify-content-center\">\n                                <h4>€ {{booking.totalPrice}}</h4>\n                            </div>\n                        </div>\n                        <div class=\"d-flex col-1 col-sm-1 col-md-1 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"experiencesMenu\">\n                            <div  class=\"col-lg-3 d-flex justify-content-center\">\n                                <i class=\"fas fa-arrow-right\"></i>\n                            </div>\n                        </div>\n                        <mat-menu #experiencesMenu=\"matMenu\">\n                            <button mat-menu-item routerLink=\"../../dashboard/inbox/{{booking.conversationId}}\">\n                                <i class=\"fas fa-comment-alt\"></i>\n                                Contact provider\n                            </button>\n\n                            <button mat-menu-item (click)=\"downloadBill(booking?.bill?.series, booking?.bill?.number)\">\n                                <i class=\"fas fa-file\"></i>\n                                Descarcă factura\n                            </button>\n                            <!-- <button mat-menu-item>\n                                <i class=\"fas fa-times\"></i>\n                                Remove\n                            </button> -->\n                        </mat-menu>\n                    </div>\n                    <!--Pagination-->\n                    <mat-paginator\n                            [pageSizeOptions]=\"pageItems\"\n                            [length]=\"totalPastElements\"\n                            [pageSize]=\"pageSize\"\n                            (page)=\"pageChanged($event)\"\n                    >\n                    </mat-paginator>\n                </mat-tab>\n                <!--Canceled tab-->\n\n                <mat-tab label=\"Cancelled\" >\n\n                    <!--if booking list is empty-->\n                    <div *ngIf=\"pastBookingList.length===0\" class=\"py-4\"><p>{{\"RESERVATION.EMPTY-LIST-MSG\" | translate}}</p></div>\n\n                    <!--list of bookings-->\n                    <div *ngFor=\"let booking of cancelledBookingList\" class=\"my-2 experiences-card-class d-flex\">\n                        <div class=\"col-6 col-sm-6 col-md-7 col-lg-9 p-2 align-items-center\">\n                            <h4><a routerLink=\"../../my-booking/view/{{booking.id}}\">{{booking.name}}</a></h4>\n                            <p>{{booking.city}}, {{booking.country}}</p>\n                        </div>\n                        <div class=\"d-flex blue col-4 col-sm-3 col-md-3 col-lg-2 align-items-center p-3\">\n                            <div  class=\"col-lg-9 d-flex justify-content-center\">\n                                <h4>€ {{booking.totalPrice}}</h4>\n                            </div>\n                        </div>\n                        <div class=\"d-flex col-2 col-sm-3 col-md-2 col-lg-1 align-items-center justify-content-center px-0 py-3\" [matMenuTriggerFor]=\"experiencesMenu\">\n                            <div  class=\"col-lg-3 d-flex justify-content-center\">\n                                <i class=\"fas fa-arrow-right\"></i>\n                            </div>\n                        </div>\n                        <mat-menu #experiencesMenu=\"matMenu\">\n                            <button mat-menu-item routerLink=\"../../dashboard/my-booking/view/{{booking.id}}#resConversationId\">\n                                <i class=\"fas fa-comment-alt\"></i>\n                                Contact provider\n                            </button>\n\n                            <button mat-menu-item (click)=\"downloadBill(booking?.bill?.series, booking?.bill?.number)\">\n                                <i class=\"fas fa-file\"></i>\n                                Descarcă factura\n                            </button>\n                            <!-- <button mat-menu-item>\n                                <i class=\"fas fa-times\"></i>\n                                Remove\n                            </button> -->\n                        </mat-menu>\n                    </div>\n\n                    <!--Pagination-->\n                    <mat-paginator\n                            [pageSizeOptions]=\"pageItems\"\n                            [length]=\"totalCancelledElements\"\n                            [pageSize]=\"pageSize\"\n                            (page)=\"pageChanged($event)\"\n                    >\n                    </mat-paginator>\n                </mat-tab>\n\n            </mat-tab-group>\n\n        </div>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 66452:
/*!**********************************************************************************!*\
  !*** ./src/app/features/role-client/settings/settings.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-user-settings></app-user-settings>\n";

/***/ }),

/***/ 6677:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/role-client/view-client-messages/view-client-messages.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Title bar-->\n<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Mesagerie\"\n        [buttonBackRoute]=\"'/client/dashboard/inbox'\">\n        </app-dashboard-header>\n    </div>\n\n    <div class=\"container view-message-container\">\n        <!--Reservation-->\n        <div *ngIf=\"currentConversation\"  class=\"conversation-header-class d-flex justify-content-between align-items-center\">\n            <!-- img, name, email -->\n            <div *ngIf=\"(currentConversation?.category === 'reservation')\" class=\"d-flex justify-content-start align-items-center gap-3\">\n                <img src=\"{{((currentConversation?.featuredImage !== null) && (currentConversation?.featuredImage?.filePath !== 'string')) ? currentConversation?.featuredImage?.filePath : '../../../../../../../assets/images/others/user.jpg'}}\">\n                <div>\n                    <h4>{{currentConversation?.name}}</h4>\n                    <p>{{convParticipantData !== null ? convParticipantData?.email : ''}}</p>\n                </div>\n            </div>\n\n            <!--shared experience-->\n            <div *ngIf=\"(currentConversation?.category === 'sharedExperience')\" class=\"d-flex justify-content-start align-items-center gap-3\">\n                <img src=\"{{(currentConversation?.featuredImage !== null) ? currentConversation?.featuredImage?.filePath : '../../../../../../../assets/images/others/user.jpg'}}\">\n                <div>\n                    <h4>{{currentConversation?.name}}</h4>\n                    <!-- <p>{{convParticipantData?.email}}</p> -->\n                </div>\n            </div>\n\n            <!--Bestinform support-->\n            <div *ngIf=\"(currentConversation?.category === 'bestinformSupport')\" class=\"d-flex justify-content-start align-items-center gap-3\">\n                <img src=\"{{currentConversation?.featuredImage ? currentConversation?.featuredImage.filePath :  '../../../../../../assets/images/logos/logo-bestinform-blue.png'}}\">\n\n                <div>\n                    <h4>{{conversation?.name}}</h4>\n                    <!-- <p>{{convParticipantData?.email}}</p> -->\n                </div>\n            </div>\n\n            <!--Private-->\n            <div *ngIf=\"(currentConversation?.category === 'private')\" class=\"d-flex justify-content-start align-items-center gap-3\">\n                <img src=\"{{currentConversation?.featuredImage ? currentConversation?.featuredImage.filePath :  '../../../../../../../assets/images/others/user.jpg'}}\">\n                <div>\n                    <h4>{{currentConversation?.name}}</h4>\n                    <!-- <p>{{convParticipantData?.email}}</p> -->\n                </div>\n            </div>\n\n            <!-- info button -->\n            <div class=\"d-flex align-items-center\" >\n                <button (click)=\"displayInfo()\" class=\"btn-round btn-color-outline\"><i class=\"fas fa-info\"></i></button>\n            </div>\n        </div>\n        <div [ngClass]=\"openedInfo ? 'info-display' : 'info-not-display'\">\n\n        <!--reservation info-->\n        <div class=\"hidden-info row align-items-center\" *ngIf=\"(currentConversation?.category === 'reservation')\" >\n            <div class=\"col-4\" *ngIf=\"reservationData\">\n                <h4>Reservation nr. {{reservationData?.reservationNumber}}</h4>\n                <p class=\"opacity\">{{reservationData?.name}}</p>\n            </div>\n            <div class=\"col-4\">\n                <p><i class=\"fas fa-envelope\"></i> {{convParticipantData?.email ===null ? 'Unknown' : convParticipantData?.email}}</p>\n                <p><i class=\"fas fa-phone-alt\"></i>{{convParticipantData?.telephone === null ? 'Unknown' : convParticipantData?.telephone}}</p>\n            </div>\n            <div class=\"col-4 d-flex justify-content-end align-items-center gap-2 cancel-reservation-header\" *ngIf=\"reservationData?.status === 'active'\">\n                <p (click)=\"cancelReservationModal(reservationData?.id)\"><i class=\"fas fa-ban\"></i> cancel reservation</p>\n                <!-- <p class=\"red opacity\"><i class=\"fas fa-exclamation-triangle\"></i> report user</p> -->\n\n            </div>\n        </div>\n        </div>\n        <div class=\"conversation-component-container\">\n            <app-conversation [conversationID]=\"conversationId\"></app-conversation>\n        </div>\n    </div>\n\n\n</div>\n";

/***/ }),

/***/ 82325:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/role-client/view-client-reservation/view-client-reservation.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <app-view-reservation-content [reservationId]=\"63f8ab8fd119315d654eb7a0\"></app-view-reservation-content> -->";

/***/ }),

/***/ 50415:
/*!***********************************************************************************************************!*\
  !*** ./src/app/standalone-components/booking-confirmation/booking-confirmation.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"page-background\">\n    <h1 class=\"page-title\">\n        Booking Confirmation\n    </h1>\n\n    <div class=\"checkmark-container\">\n        <i class=\"far fa-check\"></i>\n    </div>\n\n    <h2 class=\"bold-text\">\n        Your booking has been placed!\n    </h2>\n\n    <p class=\"normal-text\">\n        Thanks for the reservation! You’ll find more about your booking on <span [routerLink]=\"['/client/dashboard/my-bookings']\">My Bookings</span>.\n    </p>\n\n    <button type=\"button\" class=\"btn-auto btn-color-fill\" [routerLink]=\"['/client/dashboard/my-bookings']\">\n        View my reservations\n    </button>\n</div>";

/***/ }),

/***/ 29826:
/*!***************************************************************************************************************!*\
  !*** ./src/app/standalone-components/favorite-resource-card/favorite-resource-card.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"resource\" class=\"resource-card d-flex flex-column\">\n    <div class=\"img-container\">\n        <button class=\"btn-add\" *ngIf=\"!favorite\" (click)=\"addResourceToFavorite()\">\n            <i class=\"far fa-star\"></i>\n        </button>\n\n        <button class=\"btn-del\" *ngIf=\"favorite\" (click)=\"deleteResourceFromFavorite()\">\n            <i class=\"favorite fas fa-star\"></i>\n        </button>\n\n        <img [src]=\"resource.featuredImage?.filePath ? resource.featuredImage?.filePath : notFoundImg\" alt=\"resource image\">\n    </div>\n\n    <div class=\"resource-info\">\n        <h6>{{ resource.title }}</h6>\n<!--        <p>{{ resource.description }}</p>-->\n        <p>{{resourceTypeName}}</p>\n\n<!--        <div class=\"d-flex align-items-center justify-content-between\">-->\n<!--            <p>-->\n<!--                {{ \"EVENTS.STARTS\" | translate }}:-->\n<!--                <span>-->\n<!--                    {{ resource.attributes | find : filterStartHour }}-->\n<!--                </span>-->\n<!--            </p>-->\n\n<!--            <p>{{ (resource.attributes | find :  filterStartDate) | date : 'd.M.yyyy' }}</p>-->\n<!--        </div>-->\n\n        <div class=\"d-flex align-items-center justify-content-start gap-1\">\n            <i class=\"fas fa-map-marker-alt\"></i>\n            <p>{{ resource.city }}</p>\n        </div>\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_features_role-client_role-client_module_ts.js.map