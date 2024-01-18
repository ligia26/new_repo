(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_standalone-components_footer_footer_component_ts-src_app_standalone-component-7c1c06"],{

/***/ 58820:
/*!*****************************************************!*\
  !*** ./src/app/shared/_services/domains.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainsService": () => (/* binding */ DomainsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let DomainsService = class DomainsService {
  // Trigger list changes
  triggerDomainChanges(message) {
    // Change the subject value
    this.domainChanged.next(message);
  }
  constructor(http) {
    this.http = http;
    // Functions For Changes Detection
    this.domainChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.domainChangedChangedObs = this.domainChanged.asObservable();
  }
  getDomainById(id) {
    return this.http.get('/bestinform/getDomainById?domainId=' + encodeURIComponent(id));
  }
  getListOfDomains() {
    return this.http.get('/bestinform/getListOfDomains');
  }
  updateDomain(domainId, domain) {
    return this.http.post('/bestinform/updateDomain?domainId=' + domainId, domain);
  }
  changeResourceCategoryEnableForListStatus(resourceCategoryId, enableForList) {
    return this.http.put('/bestinform/changeResourceCategoryEnableForListStatus?resourceCategoryId=' + resourceCategoryId + '&enableForList=' + enableForList, {});
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
DomainsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], DomainsService);


/***/ }),

/***/ 77346:
/*!***********************************************************!*\
  !*** ./src/app/shared/_services/notifications.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let NotificationsService = class NotificationsService {
  // Trigger list changes
  triggerUserListChanges(message) {
    // Change the subject value
    this.listChanged.next(message);
  }
  //tot http trebuie?
  constructor(http) {
    this.http = http;
    // Functions For Changes Detection
    this.listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.listChangedObs = this.listChanged.asObservable();
  }
  //list notifications 
  listMyNotifications(page, size, sort, dir) {
    return this.http.post('/bestinform/listMyNotifications?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, {});
  }
  //markNotificationAsRead
  markNotificationAsRead(notificationId) {
    return this.http.put('/bestinform/markNotificationAsRead?notificationId=' + notificationId, {});
  }
  //MarkAllMyNotificationAsRead
  markAllNotificationAsRead() {
    return this.http.put('/bestinform/markAllMyNotificationAsRead', {});
  }
  //createNotification
  createNotification(notificationObj) {
    return this.http.post('/bestinform/createNotification', notificationObj);
  }
  //getNotificationById
  getNotificationById(notificationId) {
    return this.http.get('/bestinform/getNotificationById?notificationId=' + notificationId);
  }
  //deleteNotification
  deleteNotification(notificationId) {
    return this.http.delete('/bestinform/deleteNotification?notificationId=' + notificationId);
  }
  //deleteAllMyNotification
  deleteAllMyNotification() {
    return this.http.delete('/bestinform/deleteAllMyNotification');
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
NotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], NotificationsService);


/***/ }),

/***/ 42912:
/*!*************************************************************!*\
  !*** ./src/app/shared/_services/system-settings.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemSettingsService": () => (/* binding */ SystemSettingsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);




let SystemSettingsService = class SystemSettingsService {
  constructor(http) {
    this.http = http;
    this.systemSettingState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.systemSetting$ = this.systemSettingState.asObservable();
  }
  getSystemSetting() {
    return this.http.get('/bestinform/getSystemSetting').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(res => {
      if (res) {
        this.systemSettingState.next(res);
        return this.systemSetting$;
      }
    }));
  }
  updateSystemSetting(systemBody) {
    return this.http.post('/bestinform/updateSystemSetting', systemBody).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(res => {
      if (res.success) {
        this.systemSettingState.next(systemBody);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(res);
    }));
  }
  getItineraryResourceTypeWithName() {
    return this.http.get('/bestinform/getItineraryResourceTypeWithName');
  }
  getRentalBookingResourceTypes() {
    return this.http.get('/bestinform/getRentalBookingResourceTypes');
  }
  getTicketBookingResourceTypes() {
    return this.http.get('/bestinform/getTicketBookingResourceTypes');
  }
  getMenuResourceTypes() {
    return this.http.get('/bestinform/getMenuResourceTypes');
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
  }];
};
SystemSettingsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], SystemSettingsService);


/***/ }),

/***/ 70209:
/*!**************************************************************************************!*\
  !*** ./src/app/standalone-components/domains-selector/domains-selector.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainsSelectorComponent": () => (/* binding */ DomainsSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _domains_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domains-selector.component.html?ngResource */ 12714);
/* harmony import */ var _domains_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domains-selector.component.scss?ngResource */ 66029);
/* harmony import */ var _domains_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_domains_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/domains.service */ 58820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);














let DomainsSelectorComponent = class DomainsSelectorComponent {
  constructor(dialog, domainsService, toastService, router, translate, cdr) {
    this.dialog = dialog;
    this.domainsService = domainsService;
    this.toastService = toastService;
    this.router = router;
    this.translate = translate;
    this.cdr = cdr;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.domainsService.getListOfDomains().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.listOfDomains = res;
      },
      error: () => {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
      }
    });
  }
  openDomainsModal(modal) {
    this.currentLanguage = this.translate.currentLang;
    this.dialog.open(modal, {
      width: "100%",
      maxWidth: 1400,
      maxHeight: "80vh",
      height: "auto"
    });
  }
  onClickGoToDomain(domainId) {
    this.router.navigateByUrl('/', {
      skipLocationChange: true
    }).then(() => {
      this.router.navigate([`/client/domain/${domainId}`]);
    });
    // this.router.navigate([`/client/domain/${domainId}`]);
    // this.domainsService.triggerDomainChanges(true);
    // this.cdr.detectChanges();
    this.dialog.closeAll();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog
  }, {
    type: _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_2__.DomainsService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
  }];
};
DomainsSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-domains-selector',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule],
  template: _domains_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_domains_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DomainsSelectorComponent);


/***/ }),

/***/ 5754:
/*!******************************************************************!*\
  !*** ./src/app/standalone-components/footer/footer.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 40598);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 34758);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/_services/localStorage.service */ 72538);
/* harmony import */ var _shared_services_languageStorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/_services/languageStorage.service */ 31345);











let FooterComponent = class FooterComponent {
  constructor(translateService, localStorage, languageService) {
    this.translateService = translateService;
    this.localStorage = localStorage;
    this.languageService = languageService;
    this.selectedValue = "ro";
    this.langName = '';
    this.currentApplicationVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appVersion;
    this.selectedValue = this.localStorage.get('langFromStorage');
    if (this.selectedValue) {
      this.translateService.use(this.selectedValue);
    } else {
      this.translateService.use('ro');
    }
  }
  ngOnInit() {
    this.langShort = this.localStorage.get('langFromStorage');
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
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
  }, {
    type: _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
  }, {
    type: _shared_services_languageStorage_service__WEBPACK_IMPORTED_MODULE_5__.LanguageStorageService
  }];
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-footer',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FooterComponent);


/***/ }),

/***/ 46346:
/*!******************************************************************!*\
  !*** ./src/app/standalone-components/header/header.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 88804);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 23640);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ 83278);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_jwtToken_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/jwtToken.service */ 57453);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/_services/auth.service */ 56566);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _domains_selector_domains_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domains-selector/domains-selector.component */ 70209);
/* harmony import */ var src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_services/notifications.service */ 77346);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/_services/system-settings.service */ 42912);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 78947);
















let HeaderComponent = class HeaderComponent {
  constructor(changeDetectorRef, media, userData, tokenService, router, authService, notificationsService, cdr, toastService, appSettings) {
    this.userData = userData;
    this.tokenService = tokenService;
    this.router = router;
    this.authService = authService;
    this.notificationsService = notificationsService;
    this.cdr = cdr;
    this.toastService = toastService;
    this.appSettings = appSettings;
    this.isOpen = false;
    this.isAdmin = false;
    this.isStaff = false;
    this.isClient = false;
    this.isProvider = false;
    this.notificationsList = [];
    this.isResourcesClicked = false;
    this.isCMSClicked = false;
    this.imgPath = "assets/images/others/user.jpg";
    this.mobileQuery = media.matchMedia('(max-width:768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.decodedToken = this.tokenService.getDecodedToken();
  }
  ngOnInit() {
    this.getSettings();
    this.userData.getCurrentUser().subscribe(res => {
      console.log(res);
      this.user = res;
      this.imgPath = res.avatar?.filePath;
      this.name = this.user.firstName + " " + this.user.lastName;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(0, 60000).subscribe(() => this.getNotifications());
      this.listChanged();
      // console.log('numeee', this.name);
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
  getSettings() {
    this.appSettings.getSystemSetting().subscribe(resp => {
      console.log('setari', resp);
      this.mode = resp.mode;
    });
  }
  listChanged() {
    this.notificationsService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get Documents List
        this.getNotifications();
        this.cdr.detectChanges();
        this.notificationsService.triggerUserListChanges(false);
      }
    });
  }
  getNotifications() {
    this.unreadMessages = 0;
    this.notificationsService.listMyNotifications(0, 3, 'date', 'desc').subscribe(notificationsList => {
      this.notificationsList = notificationsList.content;
      // console.log('din header', notificationsList.content);
      notificationsList.content.forEach(element => {
        if (element.read === false) {
          this.unreadMessages = ++this.unreadMessages;
        }
      });
    });
  }
  markAllNotificationAsRead() {
    this.notificationsService.markAllNotificationAsRead().subscribe(response => {
      console.log('markAllNotificationAsRead', response);
      this.unreadMessages = 0;
      this.notificationsService.triggerUserListChanges(true);
      this.toastService.showToast('Succes', 'Mesajele au fost marcate ca citite!', 'success');
    });
  }
  markNotificationAsRead(notificationId) {
    this.notificationsService.markNotificationAsRead(notificationId).subscribe(response => {
      console.log('markNotificationAsRead', response);
      this.notificationsService.triggerUserListChanges(true);
      this.toastService.showToast('Succes', 'Mesaj marcat ca citit!', 'success');
    });
  }
  onResourcesClick() {
    this.isResourcesClicked = !this.isResourcesClicked;
  }
  onCMSClick() {
    this.isCMSClicked = !this.isCMSClicked;
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
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
  }, {
    type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.MediaMatcher
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _shared_services_jwtToken_service__WEBPACK_IMPORTED_MODULE_3__.JwtTokenService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
  }, {
    type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
  }, {
    type: src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__.NotificationsService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_9__.SystemSettingsService
  }];
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-header',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _domains_selector_domains_selector_component__WEBPACK_IMPORTED_MODULE_6__.DomainsSelectorComponent],
  template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HeaderComponent);


/***/ }),

/***/ 68390:
/*!**************************************************************!*\
  !*** ./src/app/standalone-components/menu/menu.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.html?ngResource */ 22042);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss?ngResource */ 36607);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ 83278);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_jwtToken_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/jwtToken.service */ 57453);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/_services/auth.service */ 56566);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/_services/domains.service */ 58820);












let MenuComponent = class MenuComponent {
  constructor(changeDetectorRef, media, userData, tokenService, router, authService, domainService) {
    this.userData = userData;
    this.tokenService = tokenService;
    this.router = router;
    this.authService = authService;
    this.domainService = domainService;
    this.isOpen = false;
    this.isAdmin = false;
    this.isStaff = false;
    this.isProvider = false;
    this.isResourcesClicked = false;
    this.isCMSClicked = false;
    this.isConfigClicked = false;
    this.isReportsClicked = false;
    this.isSettingsClicked = false;
    this.imgPath = "assets/images/others/user.jpg";
    this.mobileQuery = media.matchMedia('(max-width:768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.decodedToken = this.tokenService.getDecodedToken();
  }
  ngOnInit() {
    this.userData.getCurrentUser().subscribe(res => {
      console.log('user', res);
      this.user = res;
      this.imgPath = res.avatar?.filePath;
      this.name = this.user.firstName + " " + this.user.lastName;
      res.roles.forEach(role => {
        if (role === 'ROLE_SUPER_ADMIN') {
          this.isAdmin = true;
          this.isStaff = false;
          this.isProvider = false;
        } else if (role === 'ROLE_STAFF') {
          this.isAdmin = false;
          this.isStaff = true;
          this.isProvider = false;
        } else if (role === 'ROLE_PROVIDER') {
          this.isAdmin = false;
          this.isStaff = false;
          this.isProvider = true;
          this.domainService.getDomainById(this.user.domain).subscribe(resp => {
            console.log('check domain', resp);
            if (resp.key === 'healthcare' && this.user.domain === resp.id) {
              this.isHealthCare = true;
              console.log(' e healthcare');
            }
          });
        }
      });
    });
  }
  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  onResourcesClick() {
    this.isResourcesClicked = !this.isResourcesClicked;
  }
  onCMSClick() {
    this.isCMSClicked = !this.isCMSClicked;
  }
  onConfigClick() {
    this.isConfigClicked = !this.isConfigClicked;
  }
  onReportsClick() {
    this.isReportsClicked = !this.isReportsClicked;
  }
  onSettingsClick() {
    this.isSettingsClicked = !this.isSettingsClicked;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.MediaMatcher
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _shared_services_jwtToken_service__WEBPACK_IMPORTED_MODULE_3__.JwtTokenService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
  }, {
    type: _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_6__.DomainsService
  }];
};
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-menu',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule],
  template: _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MenuComponent);


/***/ }),

/***/ 66029:
/*!***************************************************************************************************!*\
  !*** ./src/app/standalone-components/domains-selector/domains-selector.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.btn-open-modal {\n  width: 55px;\n  height: 44px;\n}\n.btn-open-modal .fa-th-large {\n  font-size: 24px;\n  color: #24398A;\n}\n\n.row {\n  row-gap: 24px;\n}\n\n.mat-mdc-card-title {\n  color: #24398A;\n  font-weight: 700;\n  font-size: 32px;\n}\n\n.domain-container {\n  position: relative;\n  cursor: pointer;\n  border-radius: 8px;\n  overflow: hidden;\n  height: 40vw;\n  max-height: 500px;\n}\n.domain-container:hover img {\n  transition: transform 0.2s;\n  transform: scale(1.05);\n}\n.domain-container:after {\n  content: \"\";\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 49.83%, #000000 100%);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.domain-container img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.domain-container h2 {\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  bottom: 8px;\n  color: var(--primary-background);\n  z-index: 1;\n  margin: 0;\n  word-break: break-word;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/domains-selector/domains-selector.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EAEE,WAAA;EACA,YAAA;AAiBF;AAfE;EACE,eAAA;EACA,cDRY;ACyBhB;;AAbA;EACE,aAAA;AAgBF;;AAbA;EACE,cDjBc;ECkBd,gBAAA;EACA,eAAA;AAgBF;;AAbA;EACE,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EAiBA,YAAA;EACA,iBAAA;AAAF;AAhBE;EACE,0BAAA;EACA,sBAAA;AAkBJ;AAfE;EACE,WAAA;EACA,0EAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;AAiBJ;AAXE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AAaJ;AAVE;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gCAAA;EACA,UAAA;EACA,SAAA;EACA,sBAAA;AAYJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.btn-open-modal {\n  //background-color: var(--primary-background);\n  width: 55px;\n  height: 44px;\n\n  .fa-th-large{\n    font-size:24px;\n    color:$primary-color;\n  }\n}\n\n.row {\n  row-gap: 24px\n}\n\n.mat-mdc-card-title {\n  color:$primary-color;\n  font-weight: 700;\n  font-size: 32px;\n}\n\n.domain-container {\n  position: relative;\n  cursor: pointer;\n  border-radius: 8px;\n  overflow: hidden;\n\n  &:hover img {\n    transition: transform .2s;\n    transform: scale(1.05);\n  }\n\n  &:after {\n    content: '';\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 49.83%, #000000 100%);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  height: 40vw;\n  max-height: 500px;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  h2 {\n    position: absolute;\n    left: 16px;\n    right: 16px;\n    bottom: 8px;\n    color: var(--primary-background);\n    z-index: 1;\n    margin: 0;\n    word-break: break-word;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 34758:
/*!*******************************************************************************!*\
  !*** ./src/app/standalone-components/footer/footer.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.footer {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  background-color: var(--header-footer-background);\n  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.08);\n}\n\n/* Set top-lef and bottom-left corner radius */\n:host ::ng-deep .mat-form-field-outline-start {\n  border-radius: 30px 0 0 30px !important;\n  min-width: 30px !important;\n}\n\n/* Set top-right and bottom-right corner radius */\n:host ::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 30px 30px 0 !important;\n}\n\n:host ::ng-deep .private-footer .mat-form-field-wrapper {\n  padding-bottom: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/footer/footer.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EAGE,iBAAA;EACA,oBAAA;EACA,iDAAA;EACA,4CAAA;AAgBF;;AAdA,8CAAA;AACA;EACE,uCAAA;EACA,0BAAA;AAiBF;;AAdA,iDAAA;AACA;EACE,uCAAA;AAiBF;;AAdA;EACE,8BAAA;AAiBF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../theme/styles/components/colors\";\n\n.footer {\n  //position: absolute;\n  //bottom: 0;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  background-color: var(--header-footer-background);\n  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.08);\n}\n/* Set top-lef and bottom-left corner radius */\n:host ::ng-deep .mat-form-field-outline-start {\n  border-radius: 30px 0 0 30px !important;\n  min-width: 30px !important;\n}\n\n/* Set top-right and bottom-right corner radius */\n:host ::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 30px 30px 0 !important;\n}\n\n:host ::ng-deep .private-footer .mat-form-field-wrapper {\n  padding-bottom: 0px !important;\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 23640:
/*!*******************************************************************************!*\
  !*** ./src/app/standalone-components/header/header.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.notif-menu {\n  width: 700px;\n  border-radius: 8px;\n  font-size: 16px;\n  color: #231F20;\n  width: 400px;\n  overflow: hidden;\n}\n\n.header-notifications {\n  background-color: #24398A;\n  padding: 13px 24px;\n}\n.header-notifications h5 {\n  font-style: normal;\n  color: white;\n  margin-bottom: 0px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n}\n.header-notifications h6 {\n  font-family: \"Roboto\";\n  font-style: normal;\n  color: white;\n  margin-bottom: 0px;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 160%;\n  cursor: pointer;\n}\n\n.all-notifications .read-bkg {\n  background-color: white;\n}\n.all-notifications .unread-bkg {\n  background-color: rgba(36, 57, 138, 0.08);\n  border-left: 2px solid #FFCC04;\n}\n.all-notifications .notification-single-card {\n  height: 66px;\n  padding: 11px 24px;\n}\n.all-notifications .notification-single-card:hover {\n  cursor: pointer;\n  background-color: rgba(36, 57, 138, 0.3);\n}\n.all-notifications .notification-single-card p {\n  margin-bottom: 0px;\n}\n.all-notifications .notification-single-card .icon-notif {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  margin-right: 14px;\n  border-radius: 50%;\n}\n.all-notifications .notification-single-card p.message-notif {\n  font-style: normal;\n  color: #231F20;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n.all-notifications .notification-single-card p.time-notif {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  color: #24398A;\n  opacity: 0.48;\n}\n.all-notifications .notification-single-card .check-notif i {\n  cursor: pointer;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 14px;\n  line-height: 16px;\n  color: #24398A;\n  opacity: 0.48;\n}\n\n.header {\n  background-color: var(--header-footer-background);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  top: 0;\n  z-index: 999;\n}\n.header .dev-padding {\n  padding-top: 35px;\n  padding-bottom: 1rem;\n}\n.header .prod-padding {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.header .container .user button .mat-focus-indicator:hover {\n  background-color: white !important;\n}\n.header .container .user button:active {\n  background-color: transparent !important;\n}\n.header .container button {\n  position: relative;\n  background-color: var(--header-footer-background);\n  border: none;\n}\n.header .container button .fa-bell {\n  font-size: 24px;\n  color: #24398A;\n}\n.header .container button .fa-circle {\n  position: absolute;\n  right: 15px;\n  bottom: 30px;\n  color: #E6536C;\n  z-index: 2;\n  font-size: 6px;\n}\n@media (max-width: 1200px) {\n  .header .container button .fa-circle {\n    right: 10px;\n  }\n}\n@media (max-width: 992px) {\n  .header .container button .fa-circle {\n    right: 5px;\n  }\n}\n@media (max-width: 768px) {\n  .header .container button .fa-circle {\n    right: 0;\n  }\n}\n.header .container .user-info {\n  padding-right: 16px !important;\n}\n.header .container .user-info .name-container {\n  max-height: 44px;\n  text-align: right;\n  line-height: 22px;\n  align-items: center;\n}\n.header .container .user-info .name-container .welcome {\n  font-size: 14px;\n  font-weight: 400;\n  color: #231F20;\n}\n.header .container .user-info .name-container .username {\n  font-size: 16px;\n  font-weight: 500;\n  color: #24398A;\n}\n@media (max-width: 576px) {\n  .header .container .user-info .name-container {\n    display: none;\n  }\n}\n.header .container .user-info img {\n  margin-right: 12px;\n  margin-left: 12px;\n  border-radius: 100px;\n  height: 44px;\n  width: 44px;\n  object-fit: cover;\n}\n.header .user-menu {\n  width: 700px;\n  border-radius: 8px;\n  font-size: 16px;\n  color: #231F20;\n  padding-top: 27px;\n  padding-bottom: 27px;\n}\n.label {\n  height: 24px;\n  border-radius: 4px;\n  background-color: #FFCC29 !important;\n  color: var(--primary-background);\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.divider {\n  color: rgba(35, 31, 32, 0.8);\n}\n\na.menu-item {\n  height: 30px;\n  color: #231F20;\n  font-weight: 500;\n  font-size: 16px;\n  transition: transform 600ms ease;\n}\na.menu-item:hover {\n  border-radius: 8px;\n  color: #24398A;\n  background-color: rgba(36, 57, 138, 0.3);\n  transform: translateY(1px);\n}\n\n.read-notification {\n  background-color: #FFF !important;\n}\n\n.unread-notification {\n  background-color: rgba(36, 57, 138, 0.08) !important;\n}\n\ndiv.notif {\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n}\ndiv.notif i.notif-dot {\n  font-size: 6px;\n  color: #E6536C;\n  position: relative;\n  top: -18px;\n  display: flex;\n  justify-content: center;\n}\ndiv.notif span {\n  font-size: 16px;\n  color: #231F20;\n  line-height: 20px;\n  white-space: pre-wrap;\n}\ndiv.notif span .date, div.notif span .name {\n  font-size: 12px;\n  font-weight: 300;\n  display: inline-flex;\n  align-content: center;\n  align-items: center;\n}\ndiv.notif span .date i.divider-dot, div.notif span .name i.divider-dot {\n  font-size: 4px;\n  color: rgba(35, 31, 32, 0.8);\n}\ndiv.notif img {\n  width: 48px;\n  height: 48px;\n  border-radius: 100%;\n}\n\n.top-bottom, a.top-bottom {\n  text-decoration: none;\n  color: #24398A;\n  font-weight: 500;\n  padding-left: 24px;\n}\n.top-bottom i, a.top-bottom i {\n  font-size: 14px;\n}\n\nmat-sidenav-container {\n  position: fixed;\n  left: 0;\n  bottom: 80px;\n  top: 0;\n  background-color: #24398A !important;\n  color: #FFFFFF !important;\n}\nmat-sidenav-container button .fa-times {\n  color: #FFFFFF !important;\n  font-size: 16px;\n}\n\nmat-sidenav {\n  background-color: #24398A !important;\n  width: 200px;\n}\n\n.item {\n  color: #FFFFFF !important;\n}\n.item:active {\n  background-color: #FFFFFF !important;\n  color: #231F20 !important;\n}\n\n.mat-list-item {\n  width: 170px;\n  color: #FFFFFF !important;\n}\n\nmat-sidenav-content {\n  display: none;\n}\n\n.second-bar {\n  background-color: #24398A;\n}\n.second-bar .first {\n  width: 100%;\n  background-color: #24398A !important;\n  height: 80px;\n  color: #FFFFFF !important;\n}\n.second-bar .first .item {\n  color: #FFFFFF !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  text-decoration: none;\n  width: 12%;\n  max-height: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.second-bar .first .item i {\n  font-size: 24px !important;\n}\n@media (max-width: 992px) {\n  .second-bar .first .item {\n    width: 15%;\n  }\n}\n.second-bar .first .item:hover {\n  background-color: var(--primary-background);\n  color: #231F20 !important;\n}\n.second-bar .first .item:active, .second-bar .first .item:focus {\n  background-color: #FFFFFF !important;\n  color: #231F20 !important;\n}\n@media (max-width: 768px) {\n  .second-bar .first {\n    display: none;\n  }\n}\n.second-bar .second {\n  position: relative;\n  width: 100%;\n  background-color: #24398A !important;\n  height: 80px;\n  color: #FFFFFF !important;\n}\n@media (min-width: 769px) {\n  .second-bar .second {\n    display: none;\n  }\n}\n.second-bar .second mat-list-item .item-sm {\n  padding-right: 0;\n}\n\nmat-menu .mat-menu-panel {\n  max-width: 700px !important;\n  width: 700px !important;\n}\n\n::ng-deep .mat-menu-panel.notif-menu {\n  width: 344px;\n  max-width: 344px !important;\n}\n\n.version-alert {\n  background-color: red;\n  color: #fff;\n  text-align: center;\n  font-weight: 700;\n  position: fixed;\n  min-height: 26px;\n  width: 100%;\n  z-index: 999999;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/header/header.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACE,YAAA;EACA,kBAAA;EACA,eAAA;EACA,cDFM;ECKN,YAAA;EACA,gBAAA;AAeF;;AAZA;EACE,yBDdc;ECed,kBAAA;AAeF;AAbE;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAeN;AAbE;EACI,qBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EAEA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;AAcN;;AARE;EACI,uBAAA;AAWN;AAPE;EACI,yCAAA;EACA,8BAAA;AASN;AANE;EAMI,YAAA;EACA,kBAAA;AAGN;AATI;EACE,eAAA;EACA,wCAAA;AAWN;AALM;EACE,kBAAA;AAOR;AAJM;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AAMV;AAHM;EACI,kBAAA;EACA,cDpEE;ECqEF,gBAAA;EACA,eAAA;EACA,iBAAA;EAGA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAGV;AAAM;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD5FM;EC6FN,aAAA;AAEV;AACM;EACI,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDtGM;ECuGN,aAAA;AACV;;AAKA;EAGE,iDAAA;EACA,2CAAA;EAEA,MAAA;EACA,YAAA;AALF;AAaE;EACE,iBAAA;EAEA,oBAAA;AAZJ;AAeE;EACE,iBAAA;EACA,oBAAA;AAbJ;AAwBU;EACE,kCAAA;AAtBZ;AA2BQ;EACE,wCAAA;AAzBV;AA+BI;EACE,kBAAA;EACA,iDAAA;EACA,YAAA;AA7BN;AA+BM;EACE,eAAA;EACA,cDnKQ;ACsIhB;AAgCM;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cD7IQ;EC8IR,UAAA;EACA,cAAA;AA9BR;AAgCQ;EARF;IASI,WAAA;EA7BR;AACF;AA+BQ;EAZF;IAaI,UAAA;EA5BR;AACF;AA8BQ;EAhBF;IAiBI,QAAA;EA3BR;AACF;AA+BI;EACE,8BAAA;AA7BN;AA+BM;EACE,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;AA7BR;AA+BQ;EACE,eAAA;EACA,gBAAA;EACA,cDpMF;ACuKR;AAgCQ;EACE,eAAA;EACA,gBAAA;EACA,cD9MM;ACgLhB;AAiCQ;EAlBF;IAmBI,aAAA;EA9BR;AACF;AAiCM;EACE,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;AA/BR;AAoCE;EACE,YAAA;EACA,kBAAA;EACA,eAAA;EACA,cDjOI;ECkOJ,iBAAA;EACA,oBAAA;AAlCJ;AA+DA;EACE,YAAA;EACA,kBAAA;EACA,oCAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;AA7DF;;AAgEA;EACE,4BAAA;AA7DF;;AAgEA;EACE,YAAA;EACA,cD/QM;ECgRN,gBAAA;EACA,eAAA;EACA,gCAAA;AA7DF;AA+DE;EACE,kBAAA;EACA,cD1RY;EC2RZ,wCAAA;EACA,0BAAA;AA7DJ;;AAiEA;EACE,iCAAA;AA9DF;;AAiEA;EACE,oDAAA;AA9DF;;AAiEA;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;AA9DF;AAiEE;EACE,cAAA;EACA,cDrRY;ECsRZ,kBAAA;EACA,UAAA;EACA,aAAA;EAEA,uBAAA;AAhEJ;AAmEE;EACE,eAAA;EACA,cDxTI;ECyTJ,iBAAA;EACA,qBAAA;AAjEJ;AAmEI;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,qBAAA;EACA,mBAAA;AAjEN;AAmEM;EACE,cAAA;EACA,4BAAA;AAjER;AAsEE;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AApEJ;;AA2EE;EACE,qBAAA;EACC,cD1VW;EC4VZ,gBAAA;EACA,kBAAA;AAzEJ;AA0EQ;EACF,eAAA;AAxEN;;AAmFA;EAEE,eAAA;EACA,OAAA;EACA,YAAA;EACA,MAAA;EACA,oCAAA;EACA,yBAAA;AAjFF;AAmFE;EACE,yBAAA;EACA,eAAA;AAjFJ;;AAsFA;EACE,oCAAA;EACA,YAAA;AAnFF;;AAsFA;EACE,yBAAA;AAnFF;AAqFE;EACE,oCAAA;EACA,yBAAA;AAnFJ;;AAuFA;EACE,YAAA;EACA,yBAAA;AApFF;;AAuFA;EACE,aAAA;AApFF;;AAwFA;EACE,yBDnZc;AC8ThB;AAsFE;EAIE,WAAA;EACA,oCAAA;EACA,YAAA;EACA,yBAAA;AAvFJ;AAyFI;EACE,yBAAA;EACA,0BAAA;EACA,2BAAA;EACA,qBAAA;EACA,UAAA;EACA,gBAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAvFN;AAyFM;EACE,0BAAA;AAvFR;AA2FM;EAjBF;IAkBI,UAAA;EAxFN;AACF;AA0FM;EACE,2CAAA;EACA,yBAAA;AAxFR;AA2FM;EACE,oCAAA;EACA,yBAAA;AAzFR;AA6FI;EAzCF;IA0CI,aAAA;EA1FJ;AACF;AA+FE;EAKE,kBAAA;EAGA,WAAA;EACA,oCAAA;EACA,YAAA;EACA,yBAAA;AAnGJ;AAyFI;EADF;IAEI,aAAA;EAtFJ;AACF;AAgGI;EACE,gBAAA;AA9FN;;AAsGA;EACE,2BAAA;EACA,uBAAA;AAnGF;;AAuGE;EACE,YAAA;EACA,2BAAA;AApGJ;;AAwGA;EACE,qBAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;AArGF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../theme/styles/components/colors\";\n\n\n.notif-menu{\n  width: 700px;\n  border-radius: 8px;\n  font-size: 16px;\n  color: $title;\n  // padding-top: 27px;\n  // padding-bottom: 27px;\n  width: 400px;\n  overflow: hidden;\n}\n\n.header-notifications{\n  background-color: $primary-color;\n  padding: 13px 24px;\n\n  h5{\n      font-style: normal;\n      color: white;\n      margin-bottom: 0px;\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n  }\n  h6{\n      font-family: 'Roboto';\n      font-style: normal;\n      color: white;\n      margin-bottom: 0px;\n\n      font-weight: 300;\n      font-size: 16px;\n      line-height: 160%;\n      cursor: pointer;\n  }\n}\n\n.all-notifications{\n\n  .read-bkg{\n      background-color: white;\n\n  }\n\n  .unread-bkg{\n      background-color: rgba($primary-color,0.08);\n      border-left: 2px solid #FFCC04;\n  }\n\n  .notification-single-card {\n    &:hover {\n      cursor: pointer;\n      background-color: rgba($primary-color, 0.3);\n    }\n\n      height: 66px;\n      padding: 11px 24px;\n\n      p{\n        margin-bottom: 0px;\n      }\n\n      .icon-notif{\n          flex-shrink: 0;\n          width: 30px;\n          height: 30px;\n          margin-right: 14px;\n          border-radius: 50%;\n      }\n\n      p.message-notif{\n          font-style: normal;\n          color: $paragraph;\n          font-weight: 400;\n          font-size: 16px;\n          line-height: 18px;\n\n\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 1;\n          /* autoprefixer: ignore next */\n          -webkit-box-orient: vertical;\n      }\n\n      p.time-notif{\n          font-style: normal;\n          font-weight: 400;\n          font-size: 12px;\n          line-height: 14px;\n          color: $primary-color;\n          opacity: 0.48;\n      }\n\n      .check-notif i{\n          cursor: pointer;\n          font-style: normal;\n          font-weight: 900;\n          font-size: 14px;\n          line-height: 16px;\n          color: $primary-color;\n          opacity: 0.48;\n      }\n  }\n\n}\n\n.header {\n  //padding-top: 1rem;\n  //padding-bottom: 1rem;\n  background-color: var(--header-footer-background);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  //position:fixed;\n  top:0;\n  z-index: 999;\n\n  .main-header {\n    //padding-top: 35px;\n    ////padding-top: 1rem;\n    //padding-bottom: 1rem;\n  }\n\n  .dev-padding {\n    padding-top: 35px;\n    //padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .prod-padding {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .container{\n\n    .user{\n      //a:hover{\n      //  background-color: transparent!important;\n      //}\n      button{\n        .mat-focus-indicator{\n          &:hover{\n            background-color: white!important;\n          }\n        }\n\n\n        &:active{\n          background-color: transparent!important;\n        }\n\n      }\n    }\n\n    button {\n      position: relative;\n      background-color: var(--header-footer-background);\n      border:none;\n\n      .fa-bell{\n        font-size:24px;\n        color:$primary-color;\n      }\n\n      .fa-circle{\n        position: absolute;\n        right:15px;\n        bottom:30px;\n        color:$archived-color;\n        z-index: 2;\n        font-size:6px;\n\n        @media(max-width:1200px ){\n          right:10px;\n        }\n\n        @media(max-width:992px ){\n          right:5px;\n        }\n\n        @media(max-width:768px ){\n          right:0;\n        }\n      }\n    }\n\n    .user-info{\n      padding-right: 16px!important;\n\n      .name-container{\n        max-height: 44px;\n        text-align: right;\n        line-height: 22px;\n        align-items: center;\n\n        .welcome{\n          font-size:14px;\n          font-weight: 400;\n          color:$title;\n        }\n\n        .username{\n          font-size:16px;\n          font-weight: 500;\n          color:$primary-color;\n        }\n\n        @media(max-width: 576px){\n          display: none;\n        }\n\n      }\n      img{\n        margin-right: 12px;\n        margin-left: 12px;\n        border-radius: 100px;\n        height: 44px;\n        width: 44px;\n        object-fit: cover;\n      }\n    }\n  }\n\n  .user-menu {\n    width: 700px;\n    border-radius: 8px;\n    font-size: 16px;\n    color: $title;\n    padding-top: 27px;\n    padding-bottom: 27px;\n\n    //a.menu-item {\n    //  height: 26px;\n    //  margin-bottom: 18px;\n    //  color: $primary-color;\n    //}\n\n\n  }\n\n  // .notif-menu{\n  //   width: 700px;\n  //   border-radius: 8px;\n  //   font-size: 16px;\n  //   color: $title;\n  //   // padding-top: 27px;\n  //   // padding-bottom: 27px;\n  //   width: 400px;\n  // }\n\n  @media(max-width: 1400px){\n    .theme-container{\n      //margin-left:12px;\n      //margin-right:12px;\n    }\n  }\n}\n\n.label{\n  height: 24px;\n  border-radius: 4px;\n  background-color:$secondary-color!important;\n  color:var(--primary-background);\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.divider{\n  color:rgba($title,0.8);\n}\n\na.menu-item {\n  height: 30px;\n  color: $title;\n  font-weight: 500;\n  font-size:16px;\n  transition: transform 600ms ease;\n\n  &:hover{\n    border-radius: 8px;\n    color: $primary-color;\n    background-color: rgba($primary-color,0.30);\n    transform: translateY(1px);\n  }\n}\n\n.read-notification{\n  background-color: #FFF!important;\n}\n\n.unread-notification{\n  background-color: rgba($primary-color,0.08)!important;\n}\n\ndiv.notif{\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n\n\n  i.notif-dot{\n    font-size:6px;\n    color:$archived-color;\n    position:relative;\n    top:-18px;\n    display: flex;\n    //align-items: center;\n    justify-content: center;\n\n  }\n  span{\n    font-size:16px;\n    color:$title;\n    line-height: 20px;\n    white-space: pre-wrap;\n\n    .date, .name{\n      font-size:12px;\n      font-weight: 300;\n      display: inline-flex;\n      align-content: center;\n      align-items: center;\n\n      i.divider-dot{\n        font-size:4px;\n        color:rgba($title, 0.8);\n      }\n    }\n  }\n\n  img{\n    width: 48px;\n    height: 48px;\n    border-radius: 100%;\n  }\n}\n\n// .containerNotificationHeader{\n  // background-color: $primary-color;\n\n  .top-bottom, a.top-bottom{\n    text-decoration: none;\n     color:$primary-color;\n    // color: white;\n    font-weight: 500;\n    padding-left: 24px;\n        i{\n      font-size:14px;\n    }\n  }\n\n\n// }\n\n\n\n\n\nmat-sidenav-container{\n  //position:absolute;\n  position:fixed;\n  left:0;\n  bottom: 80px;\n  top:0;\n  background-color: $primary-color!important;\n  color:$background-primary!important;\n\n  button .fa-times{\n    color:$background-primary!important;\n    font-size:16px;\n  }\n\n}\n\nmat-sidenav{\n  background-color: $primary-color!important;\n  width: 200px;\n}\n\n.item{\n  color:$background-primary!important;\n\n  &:active{\n    background-color: $background-primary!important;\n    color:$title!important;\n  }\n}\n\n.mat-list-item{\n  width:170px;\n  color:$background-primary!important;\n}\n\nmat-sidenav-content{\n  display: none;\n}\n\n\n.second-bar{\n  background-color:$primary-color;\n  .first{\n    //position: relative;\n    //top:76px;\n    //left:0;\n    width: 100%;\n    background-color:$primary-color!important;\n    height: 80px;\n    color: $background-primary!important;\n\n    .item{\n      color: $background-primary!important;\n      font-size: 16px!important;\n      font-weight: 400!important;\n      text-decoration: none;\n      width: 12%;\n      max-height: 100%;\n      height: 100%;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n\n      i{\n        font-size:24px!important;\n      }\n\n\n      @media(max-width: 992px) {\n        width:15%;\n      }\n\n      &:hover{\n        background-color: var(--primary-background);\n        color:$title!important;\n      }\n\n      &:active, &:focus{\n        background-color: $background-primary!important;\n        color:$title!important;\n      }\n    }\n\n    @media(max-width: 768px){\n      display: none;\n    }\n  }\n\n\n\n  .second{\n    @media(min-width: 769px){\n      display: none;\n    }\n\n    position: relative;\n    //top:76px;\n    //left:0;\n    width: 100%;\n    background-color:$primary-color!important;\n    height: 80px;\n    color: $background-primary!important;\n\n    mat-list-item .item-sm{\n      padding-right:0;\n    }\n\n\n  }\n\n}\n\nmat-menu .mat-menu-panel{\n  max-width: 700px!important;\n  width: 700px!important;\n}\n\n::ng-deep{\n  .mat-menu-panel.notif-menu {\n    width: 344px;\n    max-width: 344px !important;\n  }\n}\n\n.version-alert{\n  background-color: red;\n  color: #fff;\n  text-align: center;\n  font-weight: 700;\n  position: fixed;\n  min-height: 26px;\n  width: 100%;\n  z-index: 999999;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 36607:
/*!***************************************************************************!*\
  !*** ./src/app/standalone-components/menu/menu.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.header {\n  background-color: var(--primary-background);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  top: 0;\n  z-index: 999;\n}\n.header .main-header {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.header .container .user button .mat-focus-indicator:hover {\n  background-color: white !important;\n}\n.header .container .user button:active {\n  background-color: transparent !important;\n}\n.header .container button {\n  position: relative;\n  background-color: var(--primary-background);\n  border: none;\n}\n.header .container button .fa-bell {\n  font-size: 24px;\n  color: #24398A;\n}\n.header .container button .fa-circle {\n  position: absolute;\n  right: 15px;\n  bottom: 30px;\n  color: #E6536C;\n  z-index: 2;\n  font-size: 6px;\n}\n@media (max-width: 1200px) {\n  .header .container button .fa-circle {\n    right: 10px;\n  }\n}\n@media (max-width: 992px) {\n  .header .container button .fa-circle {\n    right: 5px;\n  }\n}\n@media (max-width: 768px) {\n  .header .container button .fa-circle {\n    right: 0;\n  }\n}\n.header .container .user-info {\n  padding-right: 16px !important;\n}\n.header .container .user-info .name-container {\n  max-height: 44px;\n  text-align: right;\n  line-height: 22px;\n  align-items: center;\n}\n.header .container .user-info .name-container .welcome {\n  font-size: 14px;\n  font-weight: 400;\n  color: #231F20;\n}\n.header .container .user-info .name-container .username {\n  font-size: 16px;\n  font-weight: 500;\n  color: #24398A;\n}\n@media (max-width: 576px) {\n  .header .container .user-info .name-container {\n    display: none;\n  }\n}\n.header .container .user-info img {\n  margin-right: 12px;\n  margin-left: 12px;\n  border-radius: 100px;\n  height: 44px;\n  width: 44px;\n  object-fit: cover;\n}\n.header .user-menu {\n  width: 700px;\n  border-radius: 8px;\n  font-size: 16px;\n  color: #231F20;\n  padding-top: 27px;\n  padding-bottom: 27px;\n}\n.header .notif-menu {\n  width: 700px;\n  border-radius: 8px;\n  font-size: 16px;\n  color: #231F20;\n  padding-top: 27px;\n  padding-bottom: 27px;\n  width: 400px;\n}\n.label {\n  height: 24px;\n  border-radius: 4px;\n  background-color: #FFCC29 !important;\n  color: var(--primary-background);\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.divider {\n  color: rgba(35, 31, 32, 0.8);\n}\n\na.menu-item {\n  height: 30px;\n  color: #231F20;\n  font-weight: 500;\n  font-size: 16px;\n  transition: transform 600ms ease;\n}\na.menu-item:hover {\n  border-radius: 8px;\n  color: #24398A;\n  background-color: rgba(36, 57, 138, 0.3);\n  transform: translateY(1px);\n}\n\n.custom-dropdown-menu button {\n  color: #24398A;\n}\n\na.notif {\n  height: 70px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n}\na.notif i.notif-dot {\n  font-size: 6px;\n  color: #E6536C;\n  position: relative;\n  top: -18px;\n  display: flex;\n  justify-content: center;\n}\na.notif span {\n  font-size: 16px;\n  color: #231F20;\n  line-height: 20px;\n  white-space: pre-wrap;\n}\na.notif span .date, a.notif span .name {\n  font-size: 12px;\n  font-weight: 300;\n  display: inline-flex;\n  align-content: center;\n  align-items: center;\n}\na.notif span .date i.divider-dot, a.notif span .name i.divider-dot {\n  font-size: 4px;\n  color: rgba(35, 31, 32, 0.8);\n}\na.notif img {\n  width: 48px;\n  height: 48px;\n  border-radius: 100%;\n}\n\na.top-bottom {\n  text-decoration: none;\n  color: #24398A;\n  font-weight: 500;\n}\na.top-bottom i {\n  font-size: 14px;\n}\n\nmat-sidenav-container {\n  position: fixed;\n  left: 0;\n  bottom: 80px;\n  top: 0;\n  background-color: #24398A !important;\n  color: #FFFFFF !important;\n}\nmat-sidenav-container button .fa-times {\n  color: #FFFFFF !important;\n  font-size: 16px;\n}\n\nmat-sidenav {\n  background-color: #24398A !important;\n  width: 200px;\n}\n\n.item {\n  color: #FFFFFF !important;\n}\n.item:active {\n  background-color: #FFFFFF !important;\n  color: #231F20 !important;\n}\n\n.mat-list-item {\n  width: 170px;\n  color: #FFFFFF !important;\n}\n\nmat-sidenav-content {\n  display: none;\n}\n\n.second-bar {\n  background-color: #24398A;\n}\n.second-bar .first {\n  width: 100%;\n  background-color: #24398A !important;\n  height: 80px;\n  color: #FFFFFF !important;\n}\n.second-bar .first .item {\n  cursor: pointer;\n  color: #FFFFFF !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  text-decoration: none;\n  width: 12%;\n  max-height: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.second-bar .first .item i {\n  font-size: 24px;\n}\n.second-bar .first .item i[class*=fa-chevron] {\n  font-size: 12px;\n}\n@media (max-width: 992px) {\n  .second-bar .first .item {\n    width: 15%;\n  }\n}\n.second-bar .first .item:hover {\n  background-color: var(--primary-background);\n  color: #231F20 !important;\n}\n.second-bar .first .item:active, .second-bar .first .item:focus {\n  background-color: #FFFFFF !important;\n  color: #231F20 !important;\n}\n@media (max-width: 768px) {\n  .second-bar .first {\n    display: none;\n  }\n}\n.second-bar .second {\n  position: relative;\n  width: 100%;\n  background-color: #24398A !important;\n  height: 80px;\n  color: #FFFFFF !important;\n}\n@media (min-width: 769px) {\n  .second-bar .second {\n    display: none;\n  }\n}\n.second-bar .second mat-list-item .item-sm {\n  padding-right: 0;\n}\n\nmat-menu .mat-menu-panel {\n  max-width: 700px !important;\n  width: 700px !important;\n}\n\n::ng-deep .mat-menu-panel.notif-menu {\n  width: 344px;\n  max-width: 344px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/menu/menu.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAbA;EAGE,2CAAA;EACA,2CAAA;EAEA,MAAA;EACA,YAAA;AAaF;AAXE;EACE,iBAAA;EACA,oBAAA;AAaJ;AAFU;EACE,kCAAA;AAIZ;AACQ;EACE,wCAAA;AACV;AAKI;EACE,kBAAA;EACA,2CAAA;EACA,YAAA;AAHN;AAKM;EACE,eAAA;EACA,cD7CQ;AC0ChB;AAMM;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cDvBQ;ECwBR,UAAA;EACA,cAAA;AAJR;AAMQ;EARF;IASI,WAAA;EAHR;AACF;AAKQ;EAZF;IAaI,UAAA;EAFR;AACF;AAIQ;EAhBF;IAiBI,QAAA;EADR;AACF;AAKI;EACE,8BAAA;AAHN;AAKM;EACE,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;AAHR;AAKQ;EACE,eAAA;EACA,gBAAA;EACA,cD9EF;AC2ER;AAMQ;EACE,eAAA;EACA,gBAAA;EACA,cDxFM;ACoFhB;AAOQ;EAlBF;IAmBI,aAAA;EAJR;AACF;AAOM;EACE,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;AALR;AAUE;EACE,YAAA;EACA,kBAAA;EACA,eAAA;EACA,cD3GI;EC4GJ,iBAAA;EACA,oBAAA;AARJ;AAmBE;EACE,YAAA;EACA,kBAAA;EACA,eAAA;EACA,cD5HI;EC6HJ,iBAAA;EACA,oBAAA;EACA,YAAA;AAjBJ;AA4BA;EACE,YAAA;EACA,kBAAA;EACA,oCAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;AA1BF;;AA6BA;EACE,4BAAA;AA1BF;;AA6BA;EACE,YAAA;EACA,cDzJM;EC0JN,gBAAA;EACA,eAAA;EACA,gCAAA;AA1BF;AA4BE;EACE,kBAAA;EACA,cDpKY;ECqKZ,wCAAA;EACA,0BAAA;AA1BJ;;AA+BE;EACE,cD5KY;ACgJhB;;AAgCA;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;AA7BF;AA+BE;EACE,cAAA;EACA,cD5JY;EC6JZ,kBAAA;EACA,UAAA;EACA,aAAA;EAEA,uBAAA;AA9BJ;AAiCE;EACE,eAAA;EACA,cD/LI;ECgMJ,iBAAA;EACA,qBAAA;AA/BJ;AAiCI;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,qBAAA;EACA,mBAAA;AA/BN;AAiCM;EACE,cAAA;EACA,4BAAA;AA/BR;AAoCE;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AAlCJ;;AAsCA;EACE,qBAAA;EACA,cD9Nc;EC+Nd,gBAAA;AAnCF;AAoCE;EACE,eAAA;AAlCJ;;AAyCA;EAEE,eAAA;EACA,OAAA;EACA,YAAA;EACA,MAAA;EACA,oCAAA;EACA,yBAAA;AAvCF;AAyCE;EACE,yBAAA;EACA,eAAA;AAvCJ;;AA4CA;EACE,oCAAA;EACA,YAAA;AAzCF;;AA4CA;EACE,yBAAA;AAzCF;AA2CE;EACE,oCAAA;EACA,yBAAA;AAzCJ;;AA6CA;EACE,YAAA;EACA,yBAAA;AA1CF;;AA6CA;EACE,aAAA;AA1CF;;AA8CA;EACE,yBDjRc;ACsOhB;AA4CE;EAIE,WAAA;EACA,oCAAA;EACA,YAAA;EACA,yBAAA;AA7CJ;AA+CI;EACE,eAAA;EACA,yBAAA;EACA,0BAAA;EACA,2BAAA;EACA,qBAAA;EACA,UAAA;EACA,gBAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AA7CN;AA+CM;EACE,eAAA;AA7CR;AA+CM;EACE,eAAA;AA7CR;AAiDM;EArBF;IAsBI,UAAA;EA9CN;AACF;AAgDM;EACE,2CAAA;EACA,yBAAA;AA9CR;AAiDM;EACE,oCAAA;EACA,yBAAA;AA/CR;AAmDI;EA7CF;IA8CI,aAAA;EAhDJ;AACF;AAqDE;EAKE,kBAAA;EAGA,WAAA;EACA,oCAAA;EACA,YAAA;EACA,yBAAA;AAzDJ;AA+CI;EADF;IAEI,aAAA;EA5CJ;AACF;AAsDI;EACE,gBAAA;AApDN;;AA4DA;EACE,2BAAA;EACA,uBAAA;AAzDF;;AA6DE;EACE,YAAA;EACA,2BAAA;AA1DJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../theme/styles/components/colors\";\n\n\n\n.header {\n  //padding-top: 1rem;\n  //padding-bottom: 1rem;\n  background-color: var(--primary-background);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  //position:fixed;\n  top:0;\n  z-index: 999;\n\n  .main-header {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .container{\n\n    .user{\n      //a:hover{\n      //  background-color: transparent!important;\n      //}\n      button{\n        .mat-focus-indicator{\n          &:hover{\n            background-color: white!important;\n          }\n        }\n\n\n        &:active{\n          background-color: transparent!important;\n        }\n\n      }\n    }\n\n    button {\n      position: relative;\n      background-color: var(--primary-background);\n      border:none;\n\n      .fa-bell{\n        font-size:24px;\n        color:$primary-color;\n      }\n\n      .fa-circle{\n        position: absolute;\n        right:15px;\n        bottom:30px;\n        color:$archived-color;\n        z-index: 2;\n        font-size:6px;\n\n        @media(max-width:1200px ){\n          right:10px;\n        }\n\n        @media(max-width:992px ){\n          right:5px;\n        }\n\n        @media(max-width:768px ){\n          right:0;\n        }\n      }\n    }\n\n    .user-info{\n      padding-right: 16px!important;\n\n      .name-container{\n        max-height: 44px;\n        text-align: right;\n        line-height: 22px;\n        align-items: center;\n\n        .welcome{\n          font-size:14px;\n          font-weight: 400;\n          color:$title;\n        }\n\n        .username{\n          font-size:16px;\n          font-weight: 500;\n          color:$primary-color;\n        }\n\n        @media(max-width: 576px){\n          display: none;\n        }\n\n      }\n      img{\n        margin-right: 12px;\n        margin-left: 12px;\n        border-radius: 100px;\n        height: 44px;\n        width: 44px;\n        object-fit: cover;\n      }\n    }\n  }\n\n  .user-menu {\n    width: 700px;\n    border-radius: 8px;\n    font-size: 16px;\n    color: $title;\n    padding-top: 27px;\n    padding-bottom: 27px;\n\n    //a.menu-item {\n    //  height: 26px;\n    //  margin-bottom: 18px;\n    //  color: $primary-color;\n    //}\n\n\n  }\n\n  .notif-menu{\n    width: 700px;\n    border-radius: 8px;\n    font-size: 16px;\n    color: $title;\n    padding-top: 27px;\n    padding-bottom: 27px;\n    width: 400px;\n  }\n\n  @media(max-width: 1400px){\n    .theme-container{\n      //margin-left:12px;\n      //margin-right:12px;\n    }\n  }\n}\n\n.label{\n  height: 24px;\n  border-radius: 4px;\n  background-color:$secondary-color!important;\n  color:var(--primary-background);\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.divider{\n  color:rgba($title,0.8);\n}\n\na.menu-item {\n  height: 30px;\n  color: $title;\n  font-weight: 500;\n  font-size:16px;\n  transition: transform 600ms ease;\n\n  &:hover{\n    border-radius: 8px;\n    color: $primary-color;\n    background-color: rgba($primary-color,0.30);\n    transform: translateY(1px);\n  }\n}\n\n.custom-dropdown-menu {\n  button {\n    color: $primary-color;\n  }\n}\n\na.notif{\n  height: 70px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n\n  i.notif-dot{\n    font-size:6px;\n    color:$archived-color;\n    position:relative;\n    top:-18px;\n    display: flex;\n    //align-items: center;\n    justify-content: center;\n\n  }\n  span{\n    font-size:16px;\n    color:$title;\n    line-height: 20px;\n    white-space: pre-wrap;\n\n    .date, .name{\n      font-size:12px;\n      font-weight: 300;\n      display: inline-flex;\n      align-content: center;\n      align-items: center;\n\n      i.divider-dot{\n        font-size:4px;\n        color:rgba($title, 0.8);\n      }\n    }\n  }\n\n  img{\n    width: 48px;\n    height: 48px;\n    border-radius: 100%;\n  }\n}\n\na.top-bottom{\n  text-decoration: none;\n  color:$primary-color;\n  font-weight: 500;\n  i{\n    font-size:14px;\n  }\n}\n\n\n\n\nmat-sidenav-container{\n  //position:absolute;\n  position:fixed;\n  left:0;\n  bottom: 80px;\n  top:0;\n  background-color: $primary-color!important;\n  color:$background-primary!important;\n\n  button .fa-times{\n    color:$background-primary!important;\n    font-size:16px;\n  }\n\n}\n\nmat-sidenav{\n  background-color: $primary-color!important;\n  width: 200px;\n}\n\n.item{\n  color:$background-primary!important;\n\n  &:active{\n    background-color: $background-primary!important;\n    color:$title!important;\n  }\n}\n\n.mat-list-item{\n  width:170px;\n  color:$background-primary!important;\n}\n\nmat-sidenav-content{\n  display: none;\n}\n\n\n.second-bar{\n  background-color:$primary-color;\n  .first{\n    //position: relative;\n    //top:76px;\n    //left:0;\n    width: 100%;\n    background-color:$primary-color!important;\n    height: 80px;\n    color: $background-primary!important;\n\n    .item{\n      cursor: pointer;\n      color: $background-primary!important;\n      font-size: 16px!important;\n      font-weight: 400!important;\n      text-decoration: none;\n      width: 12%;\n      max-height: 100%;\n      height: 100%;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n\n      i{\n        font-size:24px;\n      }\n      i[class*=\"fa-chevron\"] {\n        font-size: 12px;\n      }\n\n\n      @media(max-width: 992px) {\n        width:15%;\n      }\n\n      &:hover{\n        background-color: var(--primary-background);\n        color:$title!important;\n      }\n\n      &:active, &:focus{\n        background-color: $background-primary!important;\n        color:$title!important;\n      }\n    }\n\n    @media(max-width: 768px){\n      display: none;\n    }\n  }\n\n\n\n  .second{\n    @media(min-width: 769px){\n      display: none;\n    }\n\n    position: relative;\n    //top:76px;\n    //left:0;\n    width: 100%;\n    background-color:$primary-color!important;\n    height: 80px;\n    color: $background-primary!important;\n\n    mat-list-item .item-sm{\n      padding-right:0;\n    }\n\n\n  }\n\n}\n\nmat-menu .mat-menu-panel{\n  max-width: 700px!important;\n  width: 700px!important;\n}\n\n::ng-deep{\n  .mat-menu-panel.notif-menu {\n    width: 344px;\n    max-width: 344px !important;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12714:
/*!***************************************************************************************************!*\
  !*** ./src/app/standalone-components/domains-selector/domains-selector.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<button mat-button class=\"btn-open-modal\" (click)=\"openDomainsModal(domainsModal)\">\n    <i class=\"fas fa-th-large\"></i>\n</button>\n\n<ng-template #domainsModal>\n    <mat-card>\n        <mat-card-header class=\"justify-content-between mb-4\">\n            <mat-card-title>\n                {{ \"RESOURCE.DOMAIN.SELECT\" | translate}}\n            </mat-card-title>\n            <mat-card-subtitle>\n                {{ \"RESOURCE.DOMAIN.CHECK_INFO\" | translate}}\n            </mat-card-subtitle>\n\n            <button class=\"btn-round btn-color-outline\" type=\"button\" mat-dialog-close=\"true\">\n                <i class=\"fas fa-times\"></i>\n            </button>\n        </mat-card-header>\n\n        <mat-card-content>\n            <div class=\"row\">\n                <div *ngFor=\"let domain of listOfDomains\" class=\"col-12 col-md-6 col-xl\">\n\n                    <div class=\"domain-container\" (click)=\"onClickGoToDomain(domain.id)\">\n                        <img [src]=\"domain.image.filePath\" alt=\"domain-image\">\n\n                        <h2>{{ currentLanguage === 'ro' ? domain.nameRo : domain.nameEn}}</h2>\n                    </div>\n\n                </div>\n            </div>\n        </mat-card-content>\n    </mat-card>\n</ng-template>";

/***/ }),

/***/ 40598:
/*!*******************************************************************************!*\
  !*** ./src/app/standalone-components/footer/footer.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"footer container-fluid private-footer\">\n    <div class=\"container d-flex flex-wrap justify-content-between align-items-center\">\n        <p class=\"m-0\"><strong> © BestInform Romania. All rights reserved.  {{currentApplicationVersion}}</strong></p>\n        <mat-form-field appearance=\"outline\">\n            <mat-select [(ngModel)]=\"selectedValue\" name=\"food\" (selectionChange)=\"changeLang(selectedValue)\">\n                <mat-option [value]=\"'ro'\">Română</mat-option>\n                <mat-option [value]=\"'en'\">Engleză</mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n    <div class=\"d-flex justify-content-center align-items-center w-100\">\n        <img src=\"assets/images/logos/fonduri-ue.png\" class=\"w-25\" alt=\"fonduri-ue\">\n        <p class=\"w-25 mb-0\">Pentru informaţii\n            detaliate despre celelalte programe cofinanţate de Uniunea\n            Europeană, vă invităm să vizitaţi <a href=\"https://www.fonduri-ue.ro/\" target=\"_blank\">www.fonduri-ue.ro\n            </a></p>\n    </div>\n</div>\n";

/***/ }),

/***/ 88804:
/*!*******************************************************************************!*\
  !*** ./src/app/standalone-components/header/header.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<div *ngIf=\"user\" class=\"header container-fluid px-0\">\n    <div class=\"version-alert\" *ngIf=\"mode === 'dev'\">\n        <span>Acum folositi versiunea de\n            <span *ngIf=\"mode === 'dev'\">DEZVOLTARE</span>\n<!--            <span *ngIf=\"mode === 'prod'\">PRODUCȚIE</span>-->\n            a aplicatiei.</span>\n    </div>\n    <div class=\"container main-header\" [ngClass]=\"mode === 'dev' ? 'dev-padding': 'prod-padding'\">\n        <div class=\"row justify-content-between align-items-center\">\n\n            <!--           LOGO-->\n            <!-- <a class=\"logo col\"\n               [routerLink]=\"isAdmin ? '/private/admin/dashboard'\n               : isStaff ? '/private/staff/dashboard'\n               : isProvider ? '/private/provider/dashboard'\n               : isClient? '/client/domain' : '/' \">\n                <img src=\"\\assets\\images\\logos\\logo-bestinform-blue.png\" alt=\"header-logo\">\n            </a> -->\n            \n\n            <a class=\"logo col\" [routerLink]=\"isAdmin ? '/private/admin/dashboard'\n            : isStaff ? '/private/staff/dashboard'\n            : isProvider ? '/private/provider/dashboard'\n            : isClient? '/client/domain' : '/'\" >\n            <img src=\"\\assets\\Logo-blue.png\" alt=\"header-logo\">\n\n            </a>\n\n            <!--            ABOUT USER - NOTIFICATIONS - MENU-->\n            <div class=\"user col\">\n                <div class=\"row d-flex justify-content-end\">\n                    <div class=\"col-1 d-flex align-items-center justify-content-center\" *ngIf=\"isClient\" matTooltip=\"Alege domeniul\">\n                        <app-domains-selector></app-domains-selector>\n                    </div>\n\n                    <button [matMenuTriggerFor]=\"notifMenu\" #notifMenuTrigger=\"matMenuTrigger\" matTooltip=\"Vezi notificări\"\n                            class=\"notifcation col-1 d-flex align-items-center justify-content-center\"\n                            id=\"privateNotificationMenuTrigger\"><i class=\"fas fa-bell\">\n                        <i class=\"fas fa-circle\" *ngIf=\"unreadMessages !== 0\"></i></i></button>\n\n                    <button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" matTooltip=\"Profilul meu\"\n                            class=\"col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10 col-6 d-flex justify-content-end px-0\"\n                            id=\"privateMenuTrigger\">\n                        <!--            <mat-icon class=\"mat-icon-sm\">person</mat-icon>-->\n                        <!--            <span Show=\"false\" Show.gt-sm class=\"mx-1 uppercase\">{{ 'ACCOUNT' | translate }}</span>-->\n                        <div class=\"d-flex user-info align-items-center\">\n                            <div class=\"name-container\">\n                                <p class=\"welcome m-0\">{{\"ENROLLMENT.WELCOME-BACK\" | translate}},</p>\n                                <p class=\"username m-0\" *ngIf=\"!isProvider\">{{(name?.length > 13) ? (name | slice:0:13) + \"...\" : name}}</p>\n                                <p class=\"username m-0\" *ngIf=\"isProvider\">{{user.companyName?.length > 13 ?  (user.companyName | slice:0:13) + \"...\" : user.companyName }}</p>\n\n                            </div>\n                            <img [src]=\"imgPath\" alt=\"user-image\">\n                            <!--                <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>-->\n                            <i class=\"fas fa-chevron-down\"></i>\n                        </div>\n                    </button>\n                </div>\n\n            </div>\n\n            <!--            NOTIFICATIONS MENU-->\n            <mat-menu #notifMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\"\n                      class=\"notif-menu asd py-0 my-0 ph-dropdown-inner\">\n\n                <span (mouseleave)=\"notifMenuTrigger.closeMenu()\">\n\n                    <!-- <div class=\"containerNotificationHeader d-flex align-items-baseline justify-content-between\">\n                        <h6 class=\"top-bottom\">{{unreadMessages}} notifications unread</h6>\n                        <a class=\"top-bottom d-flex justify-content-end align-items-center\" (click)=\"markAllNotificationAsRead()\">\n                            <i class=\"fas fa-check-double me-2\"></i>Mark as read\n                        </a>\n                    </div> -->\n                    <!-- <a class=\"top-bottom d-flex justify-content-end align-items-center\" (click)=\"markAllNotificationAsRead()\">\n                            <i class=\"fas fa-check-double me-2\"></i>Mark as read\n                    </a> -->\n\n                    <!-- <div class=\"divider my-2\"></div> -->\n\n                    <!--nou-->\n\n                    <div class=\"header-notifications d-flex justify-content-between align-item-center\">\n                        <h5>{{unreadMessages}} notifications unread</h5>\n                        <h6 (click)=\"markAllNotificationAsRead()\"><i class=\"fas fa-check-double\"></i> Mark as read</h6>\n                    </div>\n\n                    <div class=\"all-notifications\" *ngIf=\"notificationsList.length > 0\">\n                        <div *ngFor=\"let notification of notificationsList\"\n                             (click)=\"goToNotificationObject(notification)\"\n                             class=\"notification-single-card\"\n                             [ngClass]=\"{'read-bkg' : notification.read === true,\n                                         'unread-bkg' : notification.read === false}\" >\n                            <div class=\"d-flex justify-content-between\">\n                                <!--notification data-->\n                                <div class=\"d-flex justify-content-start align-item-center\">\n                                    <img class=\"icon-notif\" src=\"{{notification?.icon?.filePath}}\">\n                                    <!-- <i class=\"fas fa-check icon-notif\"></i> -->\n\n                                    <div>\n                                        <p class=\"message-notif\"> {{notification?.message}}</p>\n                                        <p class=\"time-notif\">{{notification?.date | date: 'EEEE, d MMMM, HH:mm'}}</p>\n                                    </div>\n                                </div>\n                                <!--check notif as read-->\n                                <div *ngIf=\"notification?.read === false\" class=\"check-notif\"\n                                matTooltip=\"Mark as read\" (click)=\"markNotificationAsRead(notification.id); $event.stopPropagation()\">\n                                    <i class=\"fas fa-check\"></i>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                    <!--nou-->\n\n                    <!-- the last 3 notifications -->\n                    <!-- <div *ngFor=\"let notification of notificationsList\">\n                        <div (click)=\"markNotificationAsRead(notification.id)\" [ngClass]=\"{'read-notification notif d-flex-inline justify-content-between m-0 px-1': (notification.read === true), 'unread-notification notif d-flex-inline justify-content-between m-0 px-1': (notification.read === false)}\" mat-menu-item   >\n\n                             <span class=\"col-8\">{{(notification?.subject).length > 55 ? ((notification?.subject | slice:0:55) + \"...\" ): notification?.subject}}\n                                 <div class=\"d-flex flex-row\">\n\n                                     <span class=\"date\">{{notification?.date | date: 'dd-MM-y'}}</span>\n                                 </div>\n                             </span>\n                             <img class=\"col-3\" src={{notification?.icon?.filePath}}>\n                            </div>\n                    </div> -->\n\n\n                    <!-- <a mat-menu-item class=\"notif d-flex-inline justify-content-between m-0 px-1\"\n                       routerLink=\"\">\n                        <i class=\"notif-dot fas fa-circle  col-1\"></i>\n                        <span class=\"col-8\">{{(\"Esti gata de o noua aventura alaturi de noi? Incrie-te!\").length > 55 ? (\"Esti gata de o noua aventura alaturi de noi? Incrie-te!\" | slice:0:55) + \"...\" : \"Esti gata de o noua aventura alaturi de noi? Incrie-te!\"}}\n                            <div class=\"d-flex flex-row\">\n                                <span class=\"name\">Jane Doe<i class=\"divider-dot fas fa-circle mx-2\"></i></span>\n                                <span class=\"date\">22-02-2022</span>\n                            </div>\n                        </span>\n                        <img class=\"col-3\" src=\"../../../assets/images/others/user.jpg\">\n                </a> -->\n                    <div *ngIf=\"notificationsList.length === 0\">\n                        <p class=\"py-2 px-4\">There are no notifications at the moment</p>\n                    </div>\n                    <div class=\"divider my-2\"></div>\n\n\n                    <a class=\"top-bottom d-flex justify-content-start\"\n                    [routerLink]=\"isAdmin ? '/private/admin/all-notifications'\n                    : isStaff ? '/private/staff/all-notifications'\n                    : isProvider ? '/private/provider/all-notifications'\n                    : isClient? '/client/dashboard/all-notifications' : '/' \">\n                        <span>\n                            Vezi toate notificarile <i class=\"fas fa-chevron-right ms-2\"></i>\n                        </span>\n                    </a>\n\n\n                </span>\n            </mat-menu>\n\n            <!--            USER MENU-->\n            <mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\"\n                      class=\"user-menu px-3 py-1 ph-dropdown-inner\">\n            <span (mouseleave)=\"userMenuTrigger.closeMenu()\">\n\n                <!--<a mat-menu-item class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\"\n                   routerLink=\"\">\n                    <span><i class=\"fas fa-home me-2\"></i>{{ 'HOME' | translate }}</span>\n                </a>-->\n\n                <!--<a mat-menu-item class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\">\n                    <span><i class=\"fas fa-bell me-2\"></i>{{ 'NOTIFICATIONS' | translate }}</span>\n                    <span class=\"label d-flex align-items-center flex-row px-2\">400</span>\n                </a>-->\n\n                <a mat-menu-item\n                   class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\"\n                   routerLink=\"/client/dashboard/inbox\"\n                   *ngIf=\"isClient\">\n                    <span><i class=\"fas fa-inbox me-2\"></i>Inbox</span>\n                    <!-- <span class=\"label d-flex align-items-center flex-row px-2\">12</span> -->\n                </a>\n\n                <a mat-menu-item\n                class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\"\n                routerLink=\"/private/provider/inbox\"\n                *ngIf=\"isProvider\">\n                 <span><i class=\"fas fa-inbox me-2\"></i>Inbox</span>\n                 <!-- <span class=\"label d-flex align-items-center flex-row px-2\">12</span> -->\n                 </a>\n\n                <a mat-menu-item\n                class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\"\n                routerLink=\"/private/staff/inbox\"\n                *ngIf=\"isStaff\">\n                <span><i class=\"fas fa-inbox me-2\"></i>Inbox</span>\n                <!-- <span class=\"label d-flex align-items-center flex-row px-2\">12</span> -->\n                </a>\n\n                <a mat-menu-item\n                class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\"\n                routerLink=\"/private/admin/inbox\"\n                *ngIf=\"isAdmin\">\n                <span><i class=\"fas fa-inbox me-2\"></i>Inbox</span>\n                <!-- <span class=\"label d-flex align-items-center flex-row px-2\">12</span> -->\n                </a>\n\n                <a *ngIf=\"isAdmin\" mat-menu-item\n                   class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\" id=\"toStaffManagement\"\n                   routerLink=\"/private/admin/manage-staff\">\n                    <span><i class=\"fas fa-user-cog me-2\"></i>Staff Management</span>\n                </a>\n\n                <a *ngIf=\"isAdmin\" mat-menu-item\n                   class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\" id=\"toHistoryLog\"\n                   routerLink=\"/private/admin/logs/list\">\n                    <span><i class=\"fas fa-history me-2\"></i>History Log</span>\n                </a>\n\n                <!--<a *ngIf=\"isStaff\" mat-menu-item\n                   class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2 \" routerLink=\"\">\n                    <span><i class=\"fas fa-comment-dots me-2\"></i>{{'MESSAGES' | translate}}</span>\n                    <span class=\"label d-flex align-items-center flex-row px-2\">400</span>\n                </a>-->\n\n                <!--<a mat-menu-item class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\"\n                   routerLink=\"\"\n                   *ngIf=\"isClient\"\n                >\n                    <span><i class=\"fas fa-store me-2\"></i>{{ 'ACTIVITIES' | translate }}</span>\n                </a>-->\n\n                <!--<a mat-menu-item class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2 \"\n                   routerLink=\"\"\n                   *ngIf=\"isClient\"\n                >\n                    <span><i class=\"fas fa-coins me-2\"></i>{{'LOYALTY-POINTS' | translate}}</span>\n                </a>-->\n\n                <a mat-menu-item class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2 \" routerLink=\"/client/dashboard/my-bookings\"\n                   *ngIf=\"isClient\"\n                >\n                    <span><i class=\"fas fa-list me-2\"></i>{{'MY_BOOKINS' | translate}}</span>\n                </a>\n\n                <a mat-menu-item class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2 \"\n                   [routerLink]=\"'/client/dashboard/profile'\" [queryParams]=\"{tab: 'favorites'}\"\n                   *ngIf=\"isClient\"\n                >\n                    <span><i class=\"fas fa-star me-2\"></i>{{'FAVOURITES'| translate}}</span>\n                </a>\n\n                <a mat-menu-item class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2 \"\n                   routerLink=\"/client/dashboard/payment\"\n                   *ngIf=\"isClient\"\n                >\n                    <span><i class=\"fas fa-wallet me-2\"></i>{{'PAYMENT-METHOD' | translate}}</span>\n                </a>\n\n                <div class=\"divider my-2\"></div>\n\n                <!--<a mat-menu-item class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\"\n                   *ngIf=\"isClient\"\n                   routerLink=\"\">\n                    <span><i class=\"fas fa-cog me-2\"></i>{{'SETTINGS' | translate}}</span>\n                </a>-->\n\n                <!--<a *ngIf=\"isStaff\" mat-menu-item\n                   class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\"\n                   routerLink=\"/dashboard/account/change-password\" id=\"toChangePassword\">\n                    <span> <i class=\"fas fa-user-lock me-2\"></i>{{'CHANGE_PASSWORD' | translate}}</span>\n                </a>-->\n\n\n\n                <a mat-menu-item *ngIf=\"isClient || isStaff || isProvider\"\n                   class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\" id=\"toEditProfile\"\n                   [routerLink]=\"isClient ? '/client/dashboard/profile'\n                                : isStaff ? '/private/staff/account'\n                                : isProvider ? '/private/provider/account' : ''\">\n                    <span><i class=\"fas fa-user me-2\"></i>{{'GENERAL.MY-ACCOUNT' | translate}}</span>\n                </a>\n\n                <a mat-menu-item *ngIf=\"isClient || isStaff || isProvider\"\n                   class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\" id=\"toChangePassword\"\n                   [routerLink]=\"isClient ? '/client/dashboard/change-password'\n                                : isStaff ? '/private/staff/change-password'\n                                : isProvider ? '/private/provider/change-password' : ''\">\n                    <span><i class=\"fas fa-lock me-2\"></i>{{'CHANGE_PASSWORD' | translate}}</span>\n                </a>\n\n                <a mat-menu-item *ngIf=\"isClient\"\n                   class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\" id=\"toEditAccount\" routerLink=\"/client/dashboard/settings\">\n                    <span><i class=\"fas fa-cog me-2\"></i>{{'SETTINGS' | translate}}</span>\n                </a>\n\n                <a mat-menu-item *ngIf=\"isProvider\"\n                   class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\" id=\"toEditProviderSettings\" routerLink=\"/private/provider/settings\">\n                    <span><i class=\"fas fa-cog me-2\"></i>{{'SETTINGS' | translate}}</span>\n                </a>\n\n                 <a mat-menu-item class=\"menu-item d-flex justify-content-between align-items-center my-1 px-2\"\n                    (click)=\"authService.logout()\">\n\n<!--                    <span>{{ 'LOGOUT' | translate }}</span>-->\n                    <span> <i class=\"fas fa-sign-out-alt me-2\"></i>{{'LOGOUT' | translate}}</span>\n                </a>\n\n            </span>\n            </mat-menu>\n        </div>\n    </div>\n\n\n\n</div>\n";

/***/ }),

/***/ 22042:
/*!***************************************************************************!*\
  !*** ./src/app/standalone-components/menu/menu.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"isStaff || isAdmin\" class=\"second-bar\">\n    <div class=\"container\">\n        <mat-toolbar class=\"first p-0\">\n            <a class=\"item d-flex m-0\" [routerLink]=\"isStaff ? '/private/staff/dashboard' : '/private/admin/dashboard'\">\n                <i class=\"fas fa-puzzle-piece d-flex align-items-center\"></i>\n                <span>Dashboard</span>\n            </a>\n            <a class=\"item d-flex m-0 \" *ngIf=\"isAdmin || (isStaff && user.roles.includes('ROLE_PROVIDERS_EDIT'))\"\n               [routerLink]=\"isStaff ? '/private/staff/manage-providers/active' : '/private/admin/manage-providers/active'\">\n                <i class=\"fas fa-user-cog d-flex align-items-center\"></i>\n                <span>{{ 'STAFF.PROVIDERS' | translate }}</span>\n            </a>\n\n            <a class=\"item d-flex m-0 \"\n               [routerLink]=\"isStaff ? '/private/staff/clients' : '/private/admin/clients'\">\n                <i class=\"fas fa-users d-flex align-items-center\"></i>\n                <span>{{ 'STAFF.USERS' | translate }}</span>\n            </a>\n\n            <a class=\"item d-flex m-0 align-items-center\" (click)=\"sablonMenuTrigger.openMenu()\"  *ngIf=\"isAdmin || isStaff\"\n               #sablonMenuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"sablon\">\n                <i class=\"fas fa-icons d-flex align-items-center\"></i>\n                <span>{{ 'STAFF.RESOURCES' | translate }}<i class=\"fas fa-chevron-down ms-2\"></i></span>\n            </a>\n            <mat-menu #sablon=\"matMenu\">\n                <span class=\"custom-dropdown-menu\">\n<!--                     (mouseleave)=\"sablonMenuTrigger.closeMenu()\"-->\n                    <button *ngIf=\"isAdmin || (isStaff &&  user.roles.includes('ROLE_PROVIDERS_EDIT'))\" [routerLink]=\"isStaff ? '/private/staff/resources' : '/private/admin/resources'\"\n                            mat-menu-item><i class=\"fas fa-icons me-2\"></i>{{ 'STAFF.LIST' | translate }}</button>\n                    <button [routerLink]=\"isStaff ? '/private/staff/templates' : '/private/admin/templates'\"\n                            mat-menu-item><i\n                            class=\"fas fa-layer-group me-2\"></i>{{ 'TEMPLATES.LIST' | translate }}</button>\n                    <button [routerLink]=\"isStaff ? '/private/staff/domains' : '/private/admin/domains'\"\n                            mat-menu-item><i class=\"fas fa-shapes me-2\"></i>{{ 'STAFF.DOMAINS' | translate }}</button>\n                    <button *ngIf=\"isAdmin || (isStaff && user.roles.includes('ROLE_EVENTS_EDIT'))\" [routerLink]=\"isStaff ? '/private/staff/events' : '/private/admin/events'\" mat-menu-item><i\n                            class=\"fas fa-globe me-2\"></i>{{ 'STAFF.EVENTS' | translate }}</button>\n                    <!-- <button mat-menu-item><i class=\"fas fa-globe me-2\"></i>{{ 'STAFF.OFFERS' | translate }}</button> -->\n                </span>\n            </mat-menu>\n\n            <!--            <a class=\"item d-flex m-0\">-->\n            <!--                <i class=\"fas fa-icons d-flex align-items-center\"></i>-->\n            <!--                <span>Trips</span>-->\n            <!--            </a>-->\n\n            <!--            <a class=\"item d-flex m-0\"-->\n            <!--               [routerLink]=\"isStaff ? '/private/staff/itineraries/add' : '/private/admin/itineraries/add'\">-->\n            <!--                <i class=\"fas fa-icons d-flex align-items-center\"></i>-->\n            <!--                <span>Itineraries</span>-->\n            <!--            </a>-->\n\n            <a class=\"item d-flex m-0\" (click)=\"cmsTrigger.openMenu()\"\n               #cmsTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"cms\">\n                <i class=\"fas fa-cogs d-flex align-items-center\"></i>\n                <span class=\"mb-0 pb-0\">CMS<i class=\"fas fa-chevron-down ms-2\"></i></span>\n            </a>\n            <mat-menu #cms=\"matMenu\">\n                <span class=\"custom-dropdown-menu\" (mouseleave)=\"cmsTrigger.closeMenu()\">\n                    <button [routerLink]=\"isStaff ? '/private/staff/cms/home' : '/private/admin/cms/home'\"\n                            mat-menu-item><i class=\"fas fa-home me-2\"></i>{{ 'STAFF.HOMEPAGE' | translate }}</button>\n                    <button mat-menu-item><i class=\"fas fa-columns me-2\"></i>{{ 'STAFF.PAGES' | translate }}</button>\n                    <button *ngIf=\"isAdmin || (isStaff && user.roles.includes('ROLE_EDITORIALS_EDIT'))\" [routerLink]=\"isStaff ? '/private/staff/editorials' : '/private/admin/editorials'\"\n                            mat-menu-item><i\n                            class=\"fas fa-pen-nib me-2\"></i>{{ 'STAFF.EDITORIALS' | translate }}</button>\n                    <button mat-menu-item\n                            [routerLink]=\"isStaff ? '/private/staff/jobs/list' : '/private/admin/jobs/list'\"><i\n                            class=\"fas fa-briefcase me-2\"></i>{{ 'STAFF.JOBS_TRADE' | translate }}</button>\n<!--                    <button mat-menu-item-->\n<!--                            [routerLink]=\"isStaff ? '/private/staff/jobs/candidates' : '/private/admin/jobs/candidates'\"><i-->\n<!--                            class=\"fas fa-briefcase me-2\"></i>{{ 'STAFF.CANDIDATES_CV' | translate }}</button>-->\n                    <button mat-menu-item\n                            [routerLink]=\"isStaff ? '/private/staff/forum/threads' : '/private/admin/forum/threads'\"><i\n                            class=\"fas fa-users me-2\"></i>{{ 'STAFF.FORUMS' | translate }}</button>\n                    <button [routerLink]=\"isStaff ? '/private/staff/cms/media-library' : '/private/admin/cms/media-library'\"\n                            mat-menu-item><i\n                            class=\"fas fa-images me-2\"></i>{{ 'STAFF.MEDIA-LIBRARY' | translate }}</button>\n                </span>\n            </mat-menu>\n\n            <a class=\"item d-flex m-0\" (click)=\"configTrigger.openMenu()\"\n               #configTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"config\">\n                <i class=\"fas fa-cogs d-flex align-items-center\"></i>\n                <span class=\"mb-0 pb-0\">Configurator<i class=\"fas fa-chevron-down ms-2\"></i></span>\n            </a>\n            <mat-menu #config=\"matMenu\">\n                <span class=\"custom-dropdown-menu\" (mouseleave)=\"configTrigger.closeMenu()\">\n                    <!--                    <button mat-menu-item><i-->\n                    <!--                            class=\"fas fa-money-bill-wave me-2\"></i>{{ 'STAFF.SUBSCRIPTIONS' | translate }}</button>-->\n                    <!--                    <button mat-menu-item><i-->\n                    <!--                            class=\"fas fa-cog me-2\"></i>{{ 'STAFF.NOTIFICATIONS' | translate }}</button>-->\n                    <!--                    <button [routerLink]=\"isStaff ? '/private/staff/configurator/locations' : '/private/admin/configurator/locations'\"-->\n                    <!--                            mat-menu-item><i class=\"fas fa-map-marker-alt me-2\"></i>{{ 'STAFF.LOCATIONS' | translate }}</button>-->\n                    <button [routerLink]=\"isStaff ? '/private/staff/itineraries/list' : '/private/admin/itineraries/list'\"\n                            mat-menu-item><i class=\"fas fa-cog me-2\"></i>Itinerarii</button>\n                    <button [routerLink]=\"isStaff ? '/private/staff/trips/list' : '/private/admin/trips/list'\"\n                            mat-menu-item><i class=\"fas fa-cog me-2\"></i>Trips</button>\n                    <button [routerLink]=\"isStaff ? '/private/staff/trips/countries' : '/private/admin/trips/countries'\"\n                            mat-menu-item><i class=\"fas fa-cog me-2\"></i>Locații Trips</button>\n                </span>\n            </mat-menu>\n\n            <a class=\"item d-flex m-0\" (click)=\"reportsTrigger.openMenu()\"\n               #reportsTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"reports\">\n                <i class=\"fas fa-file d-flex align-items-center\"></i>\n                <span class=\"mb-0 pb-0\">{{'STAFF.REPORTS' | translate}}\n                    <i class=\"fas fa-chevron-down ms-2\"></i></span>\n            </a>\n\n            <mat-menu #reports=\"matMenu\">\n                <span class=\"custom-dropdown-menu\" (mouseleave)=\"reportsTrigger.closeMenu()\">\n                    <button mat-menu-item\n                            [routerLink]=\"isStaff ? '/private/staff/reports/clients' : '/private/admin/reports/clients'\"><i\n                            class=\"fas fa-chart-line me-2\"></i>Clients</button>\n                    <button mat-menu-item\n                            [routerLink]=\"isStaff ? '/private/staff/reports/providers' : '/private/admin/reports/providers'\"><i\n                            class=\"fas fa-chart-line me-2\"></i>Providers</button>\n                    <button mat-menu-item\n                            [routerLink]=\"isStaff ? '/private/staff/reports/resources' : '/private/admin/reports/resources'\"><i\n                            class=\"fas fa-chart-line me-2\"></i>Resources</button>\n    <!--                    <button mat-menu-item-->\n    <!--                            [routerLink]=\"isStaff ? '/private/staff/reports/events' : '/private/admin/reports/events'\"><i-->\n    <!--                            class=\"fas fa-chart-line me-2\"></i>Events</button>-->\n    <!--                    <button mat-menu-item-->\n    <!--                            [routerLink]=\"isStaff ? '/private/staff/reports/editorials' : '/private/admin/reports/editorials'\"><i-->\n    <!--                            class=\"fas fa-chart-line me-2\"></i>Editorials</button>-->\n    <!--                    <button mat-menu-item-->\n    <!--                            [routerLink]=\"isStaff ? '/private/staff/reports/jobs' : '/private/admin/reports/jobs'\"><i-->\n    <!--                            class=\"fas fa-chart-line me-2\"></i>Jobs</button>-->\n                </span>\n            </mat-menu>\n\n\n            <a class=\"item d-flex m-0 align-items-center\" (click)=\"systemSettingsTrigger.openMenu()\"\n               #systemSettingsTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"systemSettings\">\n               <i class=\"fas fa-tools\"></i>\n                <span>Setări<i class=\"fas fa-chevron-down ms-2\"></i></span>\n            </a>\n            <mat-menu #systemSettings=\"matMenu\">\n                <span class=\"custom-dropdown-menu\" (mouseleave)=\"sablonMenuTrigger.closeMenu()\">\n                    <button [routerLink]=\"isStaff ? '/private/staff/settings/system-settings' : '/private/admin/settings/system-settings'\"\n                            mat-menu-item><i class=\"fas fa-sliders-h me-2\"></i>Setări sistem</button>\n                    <button [routerLink]=\"isStaff ? '/private/staff/settings/integration-settings' : '/private/admin/settings/integration-settings'\"\n                            mat-menu-item><i class=\"fas fa-sliders-h me-2\"></i>Setări integrări</button>\n                </span>\n            </mat-menu>\n\n        </mat-toolbar>\n\n        <!--            BLUE BAR FOR STAFF ON RESPONSIVE-->\n        <mat-toolbar class=\"second\">\n            <button mat-icon-button (click)=\"snav.toggle()\"><i class=\"fas fa-bars\"></i></button>\n        </mat-toolbar>\n\n\n        <mat-sidenav-container class=\"side-menu-container\" [hasBackdrop]=\"true\">\n            <mat-sidenav #snav #snavRef [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                         [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"0\" [(opened)]=\"isOpen\">\n                <mat-nav-list>\n                    <div class=\"row-button d-flex justify-content-end me-2\">\n                        <button mat-icon-button (click)=\"snav.close()\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </div>\n\n                    <a mat-list-item class=\"item m-0\" routerLink=\"/dashboard\">\n                        <i class=\"fas fa-puzzle-piece me-2\"></i>\n                        <span>Dashboard</span>\n                    </a>\n                    <a mat-list-item class=\"item d-flex m-0\" routerLink=\"\">\n                        <i class=\"fas fa-user-cog me-2\"></i>\n                        <span>{{ 'STAFF.PROVIDERS' | translate }}</span>\n                    </a>\n                    <a mat-list-item class=\"item d-flex m-0 align-items-center\" (click)=\"onResourcesClick()\" *ngIf=\"user.approvedStatus === 'active'\">\n                        <i class=\"fas fa-icons d-flex me-2\"></i>\n                        <span>{{ 'STAFF.RESOURCES' | translate }}\n                            <i *ngIf=\"!isResourcesClicked\" class=\"fas fa-chevron-down ms-2\"></i>\n                    <i *ngIf=\"isResourcesClicked\" class=\"fas fa-chevron-up ms-2\"></i>\n                </span>\n                    </a>\n                    <div class=\"menu-res\" *ngIf=\"isResourcesClicked\">\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\" routerLink=\"\">\n                            <i class=\"fas fa-icons me-2\"></i>\n                            <span>{{ 'STAFF.LIST' | translate }}</span>\n                        </a>\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\" routerLink=\"\">\n                            <i class=\"fas fa-layer-group me-2\"></i>\n                            <span>{{ 'STAFF.PATTERNS' | translate }}</span>\n                        </a>\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\" routerLink=\"/dashboard/domains/list\">\n                            <i class=\"fas fa-shapes me-2\"></i>\n                            <span>{{ 'STAFF.DOMAINS' | translate }}</span>\n                        </a>\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\" routerLink=\"\">\n                            <i class=\"fas fa-globe me-2\"></i>\n                            <span>{{ 'STAFF.EVENTS' | translate }}</span>\n                        </a>\n\n                        <!-- <a mat-list-item class=\"item-sm ml-3 p-0\" routerLink=\"\">\n                            <i class=\"fas fa-globe me-2\"></i>\n                            <span>{{ 'STAFF.OFFERS' | translate }}</span>\n                        </a> -->\n                    </div>\n\n                    <a mat-list-item class=\"item d-flex m-0 align-items-center\" (click)=\"onCMSClick()\">\n                        <i class=\"fas fa-cogs d-flex me-2\"></i>\n                        <span>CMS\n                            <i *ngIf=\"!isCMSClicked\" class=\"fas fa-chevron-down ms-2\"></i>\n                            <i *ngIf=\"isCMSClicked\" class=\"fas fa-chevron-up ms-2\"></i>\n                        </span>\n                    </a>\n\n                    <div class=\"menu-cms\" *ngIf=\"isCMSClicked\">\n                        <a mat-list-item class=\"item-sm ml-3 p-0\" routerLink=\"\">\n                            <i class=\"fas fa-home me-2\"></i>\n                            <span>{{ 'HOME' | translate }}</span>\n                        </a>\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\" routerLink=\"\">\n                            <i class=\"fas fa-columns me-2\"></i>\n                            <span>{{ 'STAFF.PAGES' | translate }}</span>\n                        </a>\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\" routerLink=\"\">\n                            <i class=\"fas fa-pen-nib me-2\"></i>\n                            <span>{{ 'STAFF.EDITORIALS' | translate }}</span>\n                        </a>\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\"  [routerLink]=\"isStaff ? '/private/staff/jobs/list' : '/private/admin/jobs/list'\">\n                            <i class=\"fas fa-briefcase me-2\"></i>\n                            <span>{{ 'STAFF.JOBS_TRADE' | translate }}</span>\n                        </a>\n\n<!--                        <a mat-list-item class=\"item-sm ml-3 p-0\"  [routerLink]=\"isStaff ? '/private/staff/jobs/candidates' : '/private/admin/jobs/candidates'\">-->\n<!--                            <i class=\"fas fa-briefcase me-2\"></i>-->\n<!--                            <span>{{ 'STAFF.CANDIDATES_CV' | translate }}</span>-->\n<!--                        </a>-->\n\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\"\n                           [routerLink]=\"isStaff ? '/private/staff/forum/threads' : '/private/admin/forum/threads'\">\n                            <i class=\"fas fa-users me-2\"></i>\n                            <span>Forum</span>\n                        </a>\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\" routerLink=\"\">\n                            <i class=\"fas fa-images me-2\"></i>\n                            <span>{{ 'STAFF.MEDIA-LIBRARY' | translate }}</span>\n                        </a>\n                    </div>\n\n                    <a mat-list-item class=\"item d-flex m-0 align-items-center\" (click)=\"onConfigClick()\">\n                        <i class=\"fas fa-cogs d-flex me-2\"></i>\n                        <span>Configurator\n                            <i *ngIf=\"!isConfigClicked\" class=\"fas fa-chevron-down ms-2\"></i>\n                            <i *ngIf=\"isConfigClicked\" class=\"fas fa-chevron-up ms-2\"></i>\n                        </span>\n                    </a>\n\n                    <div class=\"menu-cms\" *ngIf=\"isConfigClicked\">\n                        <a mat-list-item class=\"item-sm ml-3 p-0\"\n                           [routerLink]=\"isStaff ? '/private/staff/itineraries/list' : '/private/admin/itineraries/list'\">\n                            <i class=\"fas fa-users me-2\"></i>\n                            <span>Itinerarii</span>\n                        </a>\n                        <a mat-list-item class=\"item-sm ml-3 p-0\"\n                           [routerLink]=\"isStaff ? '/private/staff/trips/list' : '/private/admin/trips/list'\">\n                            <i class=\"fas fa-users me-2\"></i>\n                            <span>Trips</span>\n                        </a>\n                        <a mat-list-item class=\"item-sm ml-3 p-0\"\n                           [routerLink]=\"isStaff ? '/private/staff/trips/countries' : '/private/admin/trips/countries'\">\n                            <i class=\"fas fa-users me-2\"></i>\n                            <span>Locații Trips</span>\n                        </a>\n                    </div>\n\n                    <a mat-list-item class=\"item d-flex m-0 align-items-center\" (click)=\"onReportsClick()\">\n                        <i class=\"fas fa-file d-flex me-2\"></i>\n                        <span>Rapoarte\n                            <i *ngIf=\"!isReportsClicked\" class=\"fas fa-chevron-down ms-2\"></i>\n                            <i *ngIf=\"isReportsClicked\" class=\"fas fa-chevron-up ms-2\"></i>\n                        </span>\n                    </a>\n\n                    <div class=\"menu-cms\" *ngIf=\"isReportsClicked\">\n                        <a mat-list-item class=\"item-sm ml-3 p-0\"\n                           [routerLink]=\"isStaff ? '/private/staff/reports/clients' : '/private/admin/reports/clients'\">\n                            <i class=\"fas fa-chart-line me-2\"></i>\n                            <span>Clients</span>\n                        </a>\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\"\n                           [routerLink]=\"isStaff ? '/private/staff/reports/providers' : '/private/admin/reports/providers'\">\n                            <i class=\"fas fa-chart-line me-2\"></i>\n                            <span>Providers</span>\n                        </a>\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\"\n                           [routerLink]=\"isStaff ? '/private/staff/reports/resources' : '/private/admin/reports/resources'\">\n                            <i class=\"fas fa-chart-line me-2\"></i>\n                            <span>Resources</span>\n                        </a>\n\n<!--                        <a mat-list-item class=\"item-sm ml-3 p-0\"-->\n<!--                           [routerLink]=\"isStaff ? '/private/staff/reports/events' : '/private/admin/reports/events'\">-->\n<!--                            <i class=\"fas fa-chart-line me-2\"></i>-->\n<!--                            <span>Events</span>-->\n<!--                        </a>-->\n\n<!--                        <a mat-list-item class=\"item-sm ml-3 p-0\"-->\n<!--                           [routerLink]=\"isStaff ? '/private/staff/reports/editorials' : '/private/admin/reports/editorials'\">-->\n<!--                            <i class=\"fas fa-chart-line me-2\"></i>-->\n<!--                            <span>Editorials</span>-->\n<!--                        </a>-->\n\n<!--                        <a mat-list-item class=\"item-sm ml-3 p-0\"-->\n<!--                           [routerLink]=\"isStaff ? '/private/staff/reports/jobs' : '/private/admin/reports/jobs'\">-->\n<!--                            <i class=\"fas fa-chart-line me-2\"></i>-->\n<!--                            <span>Jobs</span>-->\n<!--                        </a>-->\n                    </div>\n\n                    <a mat-list-item class=\"item d-flex m-0 align-items-center\" (click)=\"onSettingsClick()\">\n                        <i class=\"fas fa-tools me-2\"></i>\n                        <span>Setări\n                            <i *ngIf=\"!isReportsClicked\" class=\"fas fa-chevron-down ms-2\"></i>\n                            <i *ngIf=\"isReportsClicked\" class=\"fas fa-chevron-up ms-2\"></i>\n                        </span>\n                    </a>\n\n                    <div class=\"menu-cms\" *ngIf=\"isSettingsClicked\">\n                        <a mat-list-item class=\"item-sm ml-3 p-0\"\n                           [routerLink]=\"isStaff ? '/private/staff/settings/system-settings' : '/private/admin/settings/system-settings'\">\n                           <i class=\"fas fa-sliders-h me-2\"></i>\n                            <span>Setări sistem</span>\n                        </a>\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\"\n                           [routerLink]=\"isStaff ? '/private/admin/settings/integration-settings' : '/private/admin/settings/integration-settings'\">\n                           <i class=\"fas fa-sliders-h me-2\"></i>\n                            <span>Setări integrări</span>\n                        </a>\n                    </div>\n\n\n                </mat-nav-list>\n            </mat-sidenav>\n            <mat-sidenav-content>\n\n            </mat-sidenav-content>\n        </mat-sidenav-container>\n    </div>\n\n\n</div>\n\n<div *ngIf=\"isProvider\" class=\"second-bar\">\n    <div class=\"container\">\n        <mat-toolbar class=\"first p-0\">\n            <a class=\"item d-flex m-0\" routerLink=\"/private/provider/dashboard\">\n                <i class=\"fas fa-puzzle-piece d-flex align-items-center\"></i>\n                <span>Dashboard</span>\n            </a>\n            <!-- <a class=\"item d-flex m-0 \" routerLink=\"/private/provider/reservations/my-list\">\n                <i class=\"fas fa-icons d-flex align-items-center\"></i>\n                <span>{{ 'PROVIDER.BOOKINGS' | translate }}</span>\n            </a> -->\n\n            <a class=\"item d-flex m-0\" routerLink=\"/private/provider/resources/my-list\" *ngIf=\"user.approvedStatus === 'active'\">\n                <i class=\"fas fa-list d-flex align-items-center\"></i>\n                <span>{{ 'PROVIDER.RESOURCES' | translate }}</span>\n            </a>\n\n            <a class=\"item d-flex m-0\" routerLink=\"/private/provider/profile/view\">\n                <i class=\"fas fa-user d-flex align-items-center\"></i>\n                <span>{{ 'PROVIDER.MY_PROFILE' | translate }}</span>\n            </a>\n\n            <a class=\"item d-flex m-0\" routerLink=\"/private/provider/events/list\" *ngIf=\"user.approvedStatus === 'active'\">\n                <i class=\"fas fa-icons d-flex align-items-center\"></i>\n                <span>{{ 'PROVIDER.EVENTS' | translate }}</span>\n            </a>\n\n            <a class=\"item d-flex m-0\" (click)=\"reportsProvTrigger.openMenu()\"\n               #reportsProvTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"reportsProv\">\n                <i class=\"fas fa-file d-flex align-items-center\"></i>\n                <span class=\"mb-0 pb-0\">{{'STAFF.REPORTS' | translate}}\n                    <i class=\"fas fa-chevron-down ms-2\"></i></span>\n            </a>\n\n            <mat-menu #reportsProv=\"matMenu\">\n                <span class=\"custom-dropdown-menu\" (mouseleave)=\"reportsProvTrigger.closeMenu()\">\n<!--                    <button mat-menu-item [routerLink]=\"'/private/provider/reports/clients'\"><i-->\n<!--                            class=\"fas fa-chart-line me-2\"></i>Clients</button>-->\n                    <button mat-menu-item [routerLink]=\"'/private/provider/reports/resources'\"><i\n                            class=\"fas fa-chart-line me-2\"></i>Resources</button>\n<!--                    <button mat-menu-item [routerLink]=\"'/private/provider/reports/events'\"><i-->\n<!--                            class=\"fas fa-chart-line me-2\"></i>Events</button>-->\n                </span>\n            </mat-menu>\n\n            <a class=\"item d-flex m-0\" routerLink=\"/private/provider/forum/medical\" *ngIf=\"isHealthCare\">\n                <i class=\"fas fa-comment d-flex align-items-center\"></i>\n                <span>Forum Medical</span>\n            </a>\n\n        </mat-toolbar>\n\n        <!--            BLUE BAR FOR STAFF ON RESPONSIVE-->\n        <mat-toolbar class=\"second\">\n            <button mat-icon-button (click)=\"snav.toggle()\"><i class=\"fas fa-bars\"></i></button>\n        </mat-toolbar>\n\n\n        <mat-sidenav-container class=\"side-menu-container\" [hasBackdrop]=\"true\">\n            <mat-sidenav #snav #snavRef [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                         [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"0\" [(opened)]=\"isOpen\">\n                <mat-nav-list>\n                    <div class=\"row-button d-flex justify-content-end me-2\">\n                        <button mat-icon-button (click)=\"snav.close()\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </div>\n\n                    <a mat-list-item class=\"item m-0\" routerLink=\"/private/provider/dashboard\">\n                        <i class=\"fas fa-puzzle-piece me-2\"></i>\n                        <span>Dashboard</span>\n                    </a>\n                    <a mat-list-item class=\"item m-0\" routerLink=\"/private/provider/reservations/my-list\">\n                        <i class=\"fas fa-icons me-2\"></i>\n                        <span>{{ 'PROVIDER.BOOKINGS' | translate }}</span>\n                    </a>\n\n                    <a mat-list-item class=\"item m-0\" routerLink=\"/private/provider/resources/my-list\" *ngIf=\"user.approvedStatus === 'active'\">\n                        <i class=\"fas fa-list me-2\"></i>\n                        <span>{{ 'PROVIDER.RESOURCES' | translate }}</span>\n                    </a>\n\n                    <a mat-list-item class=\"item m-0\" routerLink=\"/private/provider/profile/view\">\n                        <i class=\"fas fa-user me-2\"></i>\n                        <span>{{ 'PROVIDER.MY_PROFILE' | translate }}</span>\n                    </a>\n\n                    <a mat-list-item class=\"item m-0\" routerLink=\"/private/provider/profile/view\" *ngIf=\"user.approvedStatus === 'active'\">\n                        <i class=\"fas fa-icons me-2\"></i>\n                        <span>{{ 'PROVIDER.EVENTS' | translate }}</span>\n                    </a>\n\n                    <a mat-list-item class=\"item d-flex m-0 align-items-center\" (click)=\"onReportsClick()\">\n                        <i class=\"fas fa-file d-flex me-2\"></i>\n                        <span>Rapoarte\n                            <i *ngIf=\"!isReportsClicked\" class=\"fas fa-chevron-down ms-2\"></i>\n                            <i *ngIf=\"isReportsClicked\" class=\"fas fa-chevron-up ms-2\"></i>\n                        </span>\n                    </a>\n\n                    <div class=\"menu-cms\" *ngIf=\"isReportsClicked\">\n<!--                        <a mat-list-item class=\"item-sm ml-3 p-0\" [routerLink]=\"'/private/provider/reports/clients'\">-->\n<!--                            <i class=\"fas fa-chart-line me-2\"></i>-->\n<!--                            <span>Clients</span>-->\n<!--                        </a>-->\n\n\n                        <a mat-list-item class=\"item-sm ml-3 p-0\" [routerLink]=\"'/private/provider/reports/resources'\">\n                            <i class=\"fas fa-chart-line me-2\"></i>\n                            <span>Resources</span>\n                        </a>\n\n<!--                        <a mat-list-item class=\"item-sm ml-3 p-0\" [routerLink]=\"'/private/provider/reports/events'\">-->\n<!--                            <i class=\"fas fa-chart-line me-2\"></i>-->\n<!--                            <span>Events</span>-->\n<!--                        </a>-->\n                    </div>\n                    <a mat-list-item class=\"item m-0\" routerLink=\"/private/provider/forum/medical\" *ngIf=\"isHealthCare\">\n                        <i class=\"fas fa-comment me-2\"></i>\n                        <span>Forum Medical</span>\n                    </a>\n                </mat-nav-list>\n            </mat-sidenav>\n            <mat-sidenav-content>\n\n            </mat-sidenav-content>\n        </mat-sidenav-container>\n    </div>\n\n\n</div>\n";

/***/ }),

/***/ 82156:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/card.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_CARD_CONFIG": () => (/* binding */ MAT_CARD_CONFIG),
/* harmony export */   "MatCard": () => (/* binding */ MatCard),
/* harmony export */   "MatCardActions": () => (/* binding */ MatCardActions),
/* harmony export */   "MatCardAvatar": () => (/* binding */ MatCardAvatar),
/* harmony export */   "MatCardContent": () => (/* binding */ MatCardContent),
/* harmony export */   "MatCardFooter": () => (/* binding */ MatCardFooter),
/* harmony export */   "MatCardHeader": () => (/* binding */ MatCardHeader),
/* harmony export */   "MatCardImage": () => (/* binding */ MatCardImage),
/* harmony export */   "MatCardLgImage": () => (/* binding */ MatCardLgImage),
/* harmony export */   "MatCardMdImage": () => (/* binding */ MatCardMdImage),
/* harmony export */   "MatCardModule": () => (/* binding */ MatCardModule),
/* harmony export */   "MatCardSmImage": () => (/* binding */ MatCardSmImage),
/* harmony export */   "MatCardSubtitle": () => (/* binding */ MatCardSubtitle),
/* harmony export */   "MatCardTitle": () => (/* binding */ MatCardTitle),
/* harmony export */   "MatCardTitleGroup": () => (/* binding */ MatCardTitleGroup),
/* harmony export */   "MatCardXlImage": () => (/* binding */ MatCardXlImage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 59121);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to provide the default options the card module. */
const _c0 = ["*"];
const _c1 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
const _c2 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
const _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const MAT_CARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_CARD_CONFIG');
/**
 * Material Design card component. Cards contain content and actions about a single subject.
 * See https://material.io/design/components/cards.html
 *
 * MatCard provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCard {
  constructor(config) {
    this.appearance = config?.appearance || 'raised';
  }
}
MatCard.ɵfac = function MatCard_Factory(t) {
  return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CARD_CONFIG, 8));
};
MatCard.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCard,
  selectors: [["mat-card"]],
  hostAttrs: [1, "mat-mdc-card", "mdc-card"],
  hostVars: 4,
  hostBindings: function MatCard_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined");
    }
  },
  inputs: {
    appearance: "appearance"
  },
  exportAs: ["matCard"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatCard_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: [".mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mat-mdc-card{position:relative;border-radius:var(--mdc-elevated-card-container-shape, var(--mdc-shape-medium, 4px));background-color:var(--mdc-elevated-card-container-color, transparent);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color, transparent)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape, var(--mdc-shape-medium, 4px))}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width, 1px);border-style:solid;border-color:var(--mdc-outlined-card-outline-color, transparent)}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card',
      host: {
        'class': 'mat-mdc-card mdc-card',
        '[class.mat-mdc-card-outlined]': 'appearance === "outlined"',
        '[class.mdc-card--outlined]': 'appearance === "outlined"'
      },
      exportAs: 'matCard',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>\n",
      styles: [".mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mat-mdc-card{position:relative;border-radius:var(--mdc-elevated-card-container-shape, var(--mdc-shape-medium, 4px));background-color:var(--mdc-elevated-card-container-color, transparent);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color, transparent)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape, var(--mdc-shape-medium, 4px))}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width, 1px);border-style:solid;border-color:var(--mdc-outlined-card-outline-color, transparent)}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_CARD_CONFIG]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
// TODO(jelbourn): add `MatActionCard`, which is a card that acts like a button (and has a ripple).
// Supported in MDC with `.mdc-card__primary-action`. Will require additional a11y docs for users.
/**
 * Title of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for one variety of card title; any custom title element may be used in its place.
 *
 * MatCardTitle provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardTitle {}
MatCardTitle.ɵfac = function MatCardTitle_Factory(t) {
  return new (t || MatCardTitle)();
};
MatCardTitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardTitle,
  selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
  hostAttrs: [1, "mat-mdc-card-title"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        'class': 'mat-mdc-card-title'
      }
    }]
  }], null, null);
})();
/**
 * Container intended to be used within the `<mat-card>` component. Can contain exactly one
 * `<mat-card-title>`, one `<mat-card-subtitle>` and one content image of any size
 * (e.g. `<img matCardLgImage>`).
 */
class MatCardTitleGroup {}
MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) {
  return new (t || MatCardTitleGroup)();
};
MatCardTitleGroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCardTitleGroup,
  selectors: [["mat-card-title-group"]],
  hostAttrs: [1, "mat-mdc-card-title-group"],
  ngContentSelectors: _c2,
  decls: 4,
  vars: 0,
  template: function MatCardTitleGroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-title-group',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-title-group'
      },
      template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]\"></ng-content>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Content of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for use with other convenience elements, such as `<mat-card-title>`; any custom
 * content block element may be used in its place.
 *
 * MatCardContent provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardContent {}
MatCardContent.ɵfac = function MatCardContent_Factory(t) {
  return new (t || MatCardContent)();
};
MatCardContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardContent,
  selectors: [["mat-card-content"]],
  hostAttrs: [1, "mat-mdc-card-content"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-content',
      host: {
        'class': 'mat-mdc-card-content'
      }
    }]
  }], null, null);
})();
/**
 * Sub-title of a card, intended for use within `<mat-card>` beneath a `<mat-card-title>`. This
 * component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`.
 *
 * MatCardSubtitle provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardSubtitle {}
MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) {
  return new (t || MatCardSubtitle)();
};
MatCardSubtitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardSubtitle,
  selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
  hostAttrs: [1, "mat-mdc-card-subtitle"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        'class': 'mat-mdc-card-subtitle'
      }
    }]
  }], null, null);
})();
/**
 * Bottom area of a card that contains action buttons, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom action block element may be used in its place.
 *
 * MatCardActions provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardActions {
  constructor() {
    // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
    // as to not conflict with the native `align` attribute.
    /** Position of the actions inside the card. */
    this.align = 'start';
  }
}
MatCardActions.ɵfac = function MatCardActions_Factory(t) {
  return new (t || MatCardActions)();
};
MatCardActions.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardActions,
  selectors: [["mat-card-actions"]],
  hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
  hostVars: 2,
  hostBindings: function MatCardActions_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-actions-align-end", ctx.align === "end");
    }
  },
  inputs: {
    align: "align"
  },
  exportAs: ["matCardActions"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-actions',
      exportAs: 'matCardActions',
      host: {
        'class': 'mat-mdc-card-actions mdc-card__actions',
        '[class.mat-mdc-card-actions-align-end]': 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Header region of a card, intended for use within `<mat-card>`. This header captures
 * a card title, subtitle, and avatar.  This component is an optional convenience for use with
 * other convenience elements, such as `<mat-card-footer>`; any custom header block element may be
 * used in its place.
 *
 * MatCardHeader provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardHeader {}
MatCardHeader.ɵfac = function MatCardHeader_Factory(t) {
  return new (t || MatCardHeader)();
};
MatCardHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCardHeader,
  selectors: [["mat-card-header"]],
  hostAttrs: [1, "mat-mdc-card-header"],
  ngContentSelectors: _c4,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-mdc-card-header-text"]],
  template: function MatCardHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-header'
      },
      template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-mdc-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Footer area a card, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom footer block element may be used in its place.
 *
 * MatCardFooter provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardFooter {}
MatCardFooter.ɵfac = function MatCardFooter_Factory(t) {
  return new (t || MatCardFooter)();
};
MatCardFooter.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardFooter,
  selectors: [["mat-card-footer"]],
  hostAttrs: [1, "mat-mdc-card-footer"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-footer',
      host: {
        'class': 'mat-mdc-card-footer'
      }
    }]
  }], null, null);
})();
// TODO(jelbourn): deprecate the "image" selectors to replace with "media".
// TODO(jelbourn): support `.mdc-card__media-content`.
/**
 * Primary image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom media element may be used in its place.
 *
 * MatCardImage provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardImage {}
MatCardImage.ɵfac = function MatCardImage_Factory(t) {
  return new (t || MatCardImage)();
};
MatCardImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardImage,
  selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
  hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-image], [matCardImage]',
      host: {
        'class': 'mat-mdc-card-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but small. */
class MatCardSmImage {}
MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) {
  return new (t || MatCardSmImage)();
};
MatCardSmImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardSmImage,
  selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
  hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-sm-image], [matCardImageSmall]',
      host: {
        'class': 'mat-mdc-card-sm-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but medium. */
class MatCardMdImage {}
MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) {
  return new (t || MatCardMdImage)();
};
MatCardMdImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardMdImage,
  selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
  hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-md-image], [matCardImageMedium]',
      host: {
        'class': 'mat-mdc-card-md-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but large. */
class MatCardLgImage {}
MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) {
  return new (t || MatCardLgImage)();
};
MatCardLgImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardLgImage,
  selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
  hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-lg-image], [matCardImageLarge]',
      host: {
        'class': 'mat-mdc-card-lg-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but extra-large. */
class MatCardXlImage {}
MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) {
  return new (t || MatCardXlImage)();
};
MatCardXlImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardXlImage,
  selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
  hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-xl-image], [matCardImageXLarge]',
      host: {
        'class': 'mat-mdc-card-xl-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/**
 * Avatar image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`; any custom media element may be used in its place.
 *
 * MatCardAvatar provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardAvatar {}
MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) {
  return new (t || MatCardAvatar)();
};
MatCardAvatar.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardAvatar,
  selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
  hostAttrs: [1, "mat-mdc-card-avatar"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-avatar], [matCardAvatar]',
      host: {
        'class': 'mat-mdc-card-avatar'
      }
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
class MatCardModule {}
MatCardModule.ɵfac = function MatCardModule_Factory(t) {
  return new (t || MatCardModule)();
};
MatCardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatCardModule,
  declarations: [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage],
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  exports: [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
});
MatCardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [CARD_DIRECTIVES, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      declarations: CARD_DIRECTIVES
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_standalone-components_footer_footer_component_ts-src_app_standalone-component-7c1c06.js.map