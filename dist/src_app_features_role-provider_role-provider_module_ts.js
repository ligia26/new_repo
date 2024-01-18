(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_role-provider_role-provider_module_ts"],{

/***/ 66917:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-conversation-item-card/provider-conversation-item-card.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderConversationItemCardComponent": () => (/* binding */ ProviderConversationItemCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _provider_conversation_item_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider-conversation-item-card.component.html?ngResource */ 18318);
/* harmony import */ var _provider_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider-conversation-item-card.component.scss?ngResource */ 31980);
/* harmony import */ var _provider_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_provider_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/messages-conversations.service */ 33869);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);








let ProviderConversationItemCardComponent = class ProviderConversationItemCardComponent {
  constructor(conversationsService, usersService) {
    this.conversationsService = conversationsService;
    this.usersService = usersService;
    this.listConversation = [];
    this.listBestinformConversation = [];
    this.listParticipants = [];
    // Mat Table - pagination, sorting, filtering
    this.pageItems = [15, 50, 100];
    this.page = 0;
    this.sorting = "date";
    this.dir = 'desc';
    this.pageSize = 15;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.getConversationList();
  }
  getConversationList() {
    this.conversationsService.listConversationFiltered(this.category, this.page, this.pageSize, this.sorting, this.dir).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: listConv => {
        if (this.category === 'reservation') {
          this.listConversation = listConv.content;
          this.totalConversations = listConv.totalElements;
        } else if (this.category === 'bestinformSupport') {
          this.listBestinformConversation = listConv.content;
          this.totalBestinformConversations = listConv.totalElements;
        } else {
          return;
        }
      }
    });
  }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Documents List
    this.getConversationList();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__.MessagesConversationsService
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }];
  static #_2 = this.propDecorators = {
    category: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    currentUser: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator]
    }]
  };
};
ProviderConversationItemCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-provider-conversation-item-card',
  template: _provider_conversation_item_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_provider_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProviderConversationItemCardComponent);


/***/ }),

/***/ 84841:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-dashboard/provider-dashboard.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderDashboardComponent": () => (/* binding */ ProviderDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _provider_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider-dashboard.component.html?ngResource */ 18977);
/* harmony import */ var _provider_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider-dashboard.component.scss?ngResource */ 41950);
/* harmony import */ var _provider_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_provider_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/system-settings.service */ 42912);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);







let ProviderDashboardComponent = class ProviderDashboardComponent {
  constructor(userData, systemService, resourcesService) {
    this.userData = userData;
    this.systemService = systemService;
    this.resourcesService = resourcesService;
    this.resourcesList = [];
  }
  ngOnInit() {
    this.userData.getCurrentUser().subscribe(res => {
      this.user = res;
      this.getSettings();
    });
  }
  getSettings() {
    this.systemService.getSystemSetting().subscribe({
      next: settings => {
        this.categoryEventsId = settings.eventCategoryId;
        const filters = {
          userId: this.user.id,
          excludedCategories: [this.categoryEventsId]
        };
        this.resourcesService.listResourceFiltered(0, 1, 'date', 'desc', filters).subscribe(resp => {
          this.resourcesList = resp.content;
        });
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_3__.SystemSettingsService
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_4__.ResourcesService
  }];
};
ProviderDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-provider-dashboard',
  template: _provider_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_provider_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProviderDashboardComponent);


/***/ }),

/***/ 97222:
/*!***********************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-inbox/provider-inbox.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderInboxComponent": () => (/* binding */ ProviderInboxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _provider_inbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider-inbox.component.html?ngResource */ 44502);
/* harmony import */ var _provider_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider-inbox.component.scss?ngResource */ 66390);
/* harmony import */ var _provider_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_provider_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/messages-conversations.service */ 33869);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);








let ProviderInboxComponent = class ProviderInboxComponent {
  constructor(userService, messagesService, router, route) {
    this.userService = userService;
    this.messagesService = messagesService;
    this.router = router;
    this.route = route;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.loading = false;
  }
  ngOnInit() {
    this.getCurrentUser();
  }
  initSupport() {
    this.loading = true;
    this.messagesService.createConversation('bestinformSupport', 'Bestinform Support - Provider - ' + new Date().toLocaleDateString('ro')).subscribe(resp => {
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
  getCurrentUser() {
    this.userService.getCurrentUser()
    // .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: user => {
        this.currentUserId = user.id;
        console.log(user);
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_3__.MessagesConversationsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }];
};
ProviderInboxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-provider-inbox',
  template: _provider_inbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_provider_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProviderInboxComponent);


/***/ }),

/***/ 2043:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-settings/provider-settings.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderSettingsComponent": () => (/* binding */ ProviderSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _provider_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider-settings.component.html?ngResource */ 54189);
/* harmony import */ var _provider_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider-settings.component.scss?ngResource */ 70376);
/* harmony import */ var _provider_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_provider_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ProviderSettingsComponent = class ProviderSettingsComponent {};
ProviderSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-provider-settings',
  template: _provider_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_provider_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProviderSettingsComponent);


/***/ }),

/***/ 64916:
/*!****************************************************************!*\
  !*** ./src/app/features/role-provider/role-provider.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleProviderModule": () => (/* binding */ RoleProviderModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _provider_dashboard_provider_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider-dashboard/provider-dashboard.component */ 84841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _standalone_components_edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../standalone-components/edit-account/edit-account.component */ 22025);
/* harmony import */ var _standalone_components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../standalone-components/change-pass/change-pass.component */ 49247);
/* harmony import */ var _provider_inbox_provider_inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider-inbox/provider-inbox.component */ 97222);
/* harmony import */ var _provider_conversation_item_card_provider_conversation_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider-conversation-item-card/provider-conversation-item-card.component */ 66917);
/* harmony import */ var _view_provider_messages_view_provider_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-provider-messages/view-provider-messages.component */ 16048);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _standalone_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../standalone-components/conversation/conversation.component */ 51440);
/* harmony import */ var src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/standalone-components/all-notifications/all-notifications.component */ 97376);
/* harmony import */ var _shared_services_user_status_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/_services/user-status.guard */ 20868);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _provider_settings_provider_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./provider-settings/provider-settings.component */ 2043);
/* harmony import */ var _standalone_components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../standalone-components/user-settings/user-settings.component */ 18832);


















const routes = [{
  path: 'dashboard',
  component: _provider_dashboard_provider_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.ProviderDashboardComponent
}, {
  path: 'all-notifications',
  component: src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_8__.AllNotificationsComponent
}, {
  path: 'resources',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ol_Map_js-node_modules_ol_layer_Tile_js-node_modules_ol_source_OSM_js"), __webpack_require__.e("default-src_app_standalone-components_display-user_display-user_component_ts"), __webpack_require__.e("default-src_app_features_domain-listing__components_shared-exp-map_shared-exp-map_component_t-a8c67b"), __webpack_require__.e("default-src_app_standalone-components_shared-experiences-info_shared-experiences-info_component_ts"), __webpack_require__.e("default-src_app_features_resources_resources_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../resources/resources.module */ 26022)).then(m => m.ResourcesModule),
  canActivate: [_shared_services_user_status_guard__WEBPACK_IMPORTED_MODULE_9__.UserStatusGuard],
  data: {
    allowedStatuses: ['active']
  }
}, {
  path: 'profile',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2020_ngx-owl-carousel-o_mjs"), __webpack_require__.e("default-src_app_shared__domains_ts-node_modules_css-loader_dist_cjs_js_ruleSet_1_rules_6_rule-fd9a58"), __webpack_require__.e("default-src_app_features_providers-management_providers-management_module_ts"), __webpack_require__.e("default-src_app_shared__services_staff_service_ts-node_modules_randexp_lib_randexp_js"), __webpack_require__.e("src_app_shared__services_modals_service_ts-_81850")]).then(__webpack_require__.bind(__webpack_require__, /*! ../providers-management/providers-management.module */ 54632)).then(m => m.ProvidersManagementModule)
}, {
  path: 'reservations',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_standalone-components_room-card_room-card_component_ts-node_modules_angular_m-c08a2c"), __webpack_require__.e("default-src_app_features_reservations_reservations_module_ts"), __webpack_require__.e("default-src_app_features_reservations_cancel-reservation-modal_cancel-reservation-modal_compo-bdeb9f"), __webpack_require__.e("src_app_shared__services_modals_service_ts-_81851")]).then(__webpack_require__.bind(__webpack_require__, /*! ../reservations/reservations.module */ 94436)).then(m => m.ReservationsModule),
  canActivate: [_shared_services_user_status_guard__WEBPACK_IMPORTED_MODULE_9__.UserStatusGuard],
  data: {
    allowedStatuses: ['active']
  }
}, {
  path: 'events',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_events_events_module_ts"), __webpack_require__.e("default-src_app_standalone-components_resource-card_resource-card_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../events/events.module */ 36764)).then(m => m.EventsModule),
  canActivate: [_shared_services_user_status_guard__WEBPACK_IMPORTED_MODULE_9__.UserStatusGuard],
  data: {
    allowedStatuses: ['active']
  }
}, {
  path: 'reports',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_reports_reports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../reports/reports.module */ 46291)).then(m => m.ReportsModule)
}, {
  path: 'account',
  component: _standalone_components_edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_1__.EditAccountComponent
}, {
  path: 'settings',
  component: _provider_settings_provider_settings_component__WEBPACK_IMPORTED_MODULE_10__.ProviderSettingsComponent
}, {
  path: 'change-password',
  component: _standalone_components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_2__.ChangePassComponent
}, {
  path: 'inbox',
  component: _provider_inbox_provider_inbox_component__WEBPACK_IMPORTED_MODULE_3__.ProviderInboxComponent
}, {
  path: 'forum',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_forums_forums_module_ts"), __webpack_require__.e("src_app_shared__services_modals_service_ts-_81852")]).then(__webpack_require__.bind(__webpack_require__, /*! ../forums/forums.module */ 79470)).then(m => m.ForumsModule)
}, {
  path: 'inbox/:idConversation',
  component: _view_provider_messages_view_provider_messages_component__WEBPACK_IMPORTED_MODULE_5__.ViewProviderMessagesComponent
}, {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}];
let RoleProviderModule = class RoleProviderModule {};
RoleProviderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  declarations: [_provider_dashboard_provider_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.ProviderDashboardComponent, _provider_inbox_provider_inbox_component__WEBPACK_IMPORTED_MODULE_3__.ProviderInboxComponent, _provider_conversation_item_card_provider_conversation_item_card_component__WEBPACK_IMPORTED_MODULE_4__.ProviderConversationItemCardComponent, _view_provider_messages_view_provider_messages_component__WEBPACK_IMPORTED_MODULE_5__.ViewProviderMessagesComponent, _provider_settings_provider_settings_component__WEBPACK_IMPORTED_MODULE_10__.ProviderSettingsComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_6__.DashboardHeaderComponent, _standalone_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_7__.ConversationComponent, src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_8__.AllNotificationsComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule, _standalone_components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_11__.UserSettingsComponent]
})], RoleProviderModule);


/***/ }),

/***/ 20868:
/*!*******************************************************!*\
  !*** ./src/app/shared/_services/user-status.guard.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserStatusGuard": () => (/* binding */ UserStatusGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _jwtToken_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwtToken.service */ 57453);




let UserStatusGuard = class UserStatusGuard {
  constructor(tokenService, router) {
    this.tokenService = tokenService;
    this.router = router;
  }
  canActivate(route) {
    const allowedStatuses = route.data.allowedStatuses;
    const decodedToken = this.tokenService.getDecodedToken();
    if (decodedToken) {
      // console.log('decoded token 2', decodedToken);
      if (!this.tokenService.isTokenExpired()) {
        if (allowedStatuses.includes(decodedToken["approvedStatus"])) {
          return true;
        } else {
          return this.router.navigate(['/']);
        }
      } else {
        return this.router.navigate(['/']);
      }
    } else {
      return this.router.navigate(['/']);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _jwtToken_service__WEBPACK_IMPORTED_MODULE_0__.JwtTokenService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
  }];
};
UserStatusGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], UserStatusGuard);


/***/ }),

/***/ 31980:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-conversation-item-card/provider-conversation-item-card.component.scss?ngResource ***!
  \**********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\np {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  color: black;\n  margin-bottom: 0px;\n}\n\n.conv-item-card {\n  padding: 8px 16px 8px 8px;\n  gap: 8px;\n  background-color: #FFFFFF;\n  box-shadow: 4px 4px 12px 8px rgba(35, 31, 32, 0.08);\n  border-radius: 8px;\n}\n.conv-item-card .first-half-conv-item img {\n  width: 58px;\n  height: 58px;\n  border-radius: 100px;\n}\n.conv-item-card .first-half-conv-item h4 {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  color: #231F20;\n}\n.conv-item-card .first-half-conv-item p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  opacity: 0.5;\n  max-width: 600px;\n}\n.conv-item-card .second-half-conv-item p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  color: #231F20;\n  opacity: 0.5;\n}\n.conv-item-card .second-half-conv-item .yellow-label {\n  background: #FFCC04;\n  border-radius: 100px;\n  padding: 2px;\n  width: 20px;\n  height: 20px;\n}\n.conv-item-card .second-half-conv-item .yellow-label p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  color: #231F20;\n  margin: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-provider/provider-conversation-item-card/provider-conversation-item-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;AAiBJ;;AAdA;EAEI,yBAAA;EACA,QAAA;EACA,yBAAA;EACA,mDAAA;EACA,kBAAA;AAgBJ;AAbQ;EACI,WAAA;EACA,YAAA;EACA,oBAAA;AAeZ;AAZQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cD7BA;AC2CZ;AAXQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AAaZ;AARQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cDlDA;ECmDA,YAAA;AAUZ;AAPQ;EACI,mBAAA;EACA,oBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AASZ;AARY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cDlEJ;ECmEI,WAAA;AAUhB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\np{\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 140%;\n    /* identical to box height, or 17px */\n\n    display: flex;\n    align-items: center;\n    color: black;\n    margin-bottom: 0px;\n}\n\n.conv-item-card{\n    //align-items: center;\n    padding: 8px 16px 8px 8px;\n    gap: 8px;\n    background-color: #FFFFFF;\n    box-shadow: 4px 4px 12px 8px rgba(35, 31, 32, 0.08);\n    border-radius: 8px;\n\n    .first-half-conv-item{\n        img{\n            width: 58px;\n            height: 58px;\n            border-radius: 100px;\n        }\n\n        h4{\n            font-weight: 700;\n            font-size: 16px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            color:$paragraph;\n        }\n\n        p{\n            font-weight: 400;\n            font-size: 12px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            opacity: 0.5;\n            max-width: 600px;\n        }\n    }\n\n    .second-half-conv-item{\n        p{\n            font-weight: 400;\n            font-size: 14px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            color: $paragraph;\n            opacity: 0.5;\n        }\n\n        .yellow-label{\n            background: #FFCC04;\n            border-radius: 100px;\n            padding:2px;\n            width: 20px;\n            height: 20px;\n            p{\n                font-weight: 400;\n                font-size: 12px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                color: $paragraph;\n                margin: 0px;\n            }\n\n        }\n    }\n\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 41950:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-dashboard/provider-dashboard.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.dashboard-cards .row {\n  row-gap: 24px;\n  margin-bottom: 24px;\n}\n.dashboard-cards .row .balance {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('balance.jpg');\n  background-size: cover;\n  height: 300px;\n  position: relative;\n}\n.dashboard-cards .row .bookings {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('reservations.jpg');\n  background-size: cover;\n  height: 300px;\n  position: relative;\n}\n.dashboard-cards .row .resources {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('resources.jpg') center;\n  background-size: cover;\n  height: 300px;\n  position: relative;\n}\n.dashboard-cards .row .events {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('events.jpg') center;\n  background-size: cover;\n  height: 300px;\n  position: relative;\n}\n.dashboard-cards .row .title-for-card {\n  position: absolute;\n  bottom: 8px;\n  left: 16px;\n  color: var(--primary-background);\n  font-size: 36px;\n  font-weight: 500;\n}\n\n.title-p {\n  color: #24398A;\n  font-size: 48px;\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-provider/provider-dashboard/provider-dashboard.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAbI;EACE,aAAA;EACA,mBAAA;AAgBN;AAfM;EACE,kBAAA;EACA,+EAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AAgBR;AAbM;EACE,kBAAA;EACA,oFAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AAcR;AAXM;EACE,kBAAA;EACA,wFAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AAYR;AATM;EACE,kBAAA;EACA,qFAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AAUR;AANM;EACE,kBAAA;EACA,WAAA;EACA,UAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;AAQR;;AAIA;EACE,cD9Dc;EC+Dd,eAAA;EACA,gBAAA;AADF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n\n  .dashboard-cards {\n    .row{\n      row-gap: 24px;\n      margin-bottom: 24px;\n      .balance{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"~src/assets/images/others/provider/balance.jpg\");\n        background-size: cover;\n        height: 300px;\n        position: relative;\n      }\n\n      .bookings{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"~src/assets/images/others/provider/reservations.jpg\");\n        background-size: cover;\n        height: 300px;\n        position: relative;\n      }\n\n      .resources{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"~src/assets/images/others/provider/resources.jpg\") center;\n        background-size: cover;\n        height: 300px;\n        position: relative;\n      }\n\n      .events {\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"~src/assets/images/others/staff/events.jpg\") center;\n        background-size: cover;\n        height: 300px;\n        position: relative;\n      }\n\n\n      .title-for-card{\n        position:absolute;\n        bottom: 8px;\n        left:16px;\n        color:var(--primary-background);\n        font-size: 36px;\n        font-weight: 500;\n      }\n\n    }\n  }\n\n\n\n\n\n\n\n.title-p{\n  color:$primary-color;\n  font-size: 48px;\n  font-weight: 700;\n}\n\n//\n//.not-allow {\n//  cursor: not-allowed;\n//}\n//\n//.card-disabled {\n//  pointer-events: none;\n//  filter: grayscale(1);\n//}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 66390:
/*!************************************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-inbox/provider-inbox.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.inbox-container {\n  background-color: var(--primary-background);\n  padding: 0px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.inbox-container #inboxTab {\n  border: none;\n  height: 54px;\n  background-color: var(--secondary-background);\n  color: #231F20;\n  border-bottom: 1px solid #E6E7E8;\n}\n.inbox-container #inboxTab .nav-item {\n  width: 50%;\n}\n.inbox-container #inboxTab .nav-item button {\n  width: 100%;\n  height: 100%;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.inbox-container #inboxTab .nav-item button.active {\n  border: #FFFFFF 1px solid;\n  border-radius: 0px;\n  margin: 0px;\n}\n\n#inboxTab .btn-long.btn-color-fill {\n  height: 30px !important;\n  min-width: 30px !important;\n  width: 30px !important;\n  padding: 5px 10px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-provider/provider-inbox/provider-inbox.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AAkBJ;;AAZI;EACM,YAAA;EACA,YAAA;EACA,6CAAA;EACA,cDVE;ECWA,gCAAA;AAeZ;AAbQ;EACI,UAAA;AAeZ;AAbY;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cDzBJ;ACwCZ;AAZY;EACI,yBAAA;EACA,kBAAA;EACA,WAAA;AAchB;;AANA;EACI,uBAAA;EACA,0BAAA;EACA,sBAAA;EACA,4BAAA;AASJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\n.inbox-container{\n    background-color: var(--primary-background);\n    padding:0px;\n    border-radius: 8px;\n    overflow: hidden;\n}\n\n.inbox-container{\n\n    //tabs styling\n    #inboxTab{\n          border: none;\n          height: 54px;\n          background-color: var(--secondary-background);\n          color:$paragraph;\n            border-bottom: 1px solid #E6E7E8;\n\n        .nav-item{\n            width: 50%;\n\n            button{\n                width:100%;\n                height:100%;\n                font-weight: 600;\n                font-size: 16px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                letter-spacing: -0.02em;\n                color: $paragraph;\n\n            }\n            button.active{\n                border:$background-primary 1px solid;\n                border-radius: 0px;\n                margin: 0px;\n            }\n        }\n    } // end tabs styling\n\n\n}\n\n#inboxTab .btn-long.btn-color-fill {\n    height: 30px !important;\n    min-width: 30px !important;\n    width: 30px !important;\n    padding: 5px 10px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 70376:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-settings/provider-settings.component.scss?ngResource ***!
  \******************************************************************************************************/
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

/***/ 18318:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-conversation-item-card/provider-conversation-item-card.component.html?ngResource ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n<!--    <div class=\"d-flex flex-wrap justify-content-between align-items-center py-3\">-->\n<!--        <h4 class=\"my-2\">Listă mesaje</h4>-->\n<!--&lt;!&ndash;        <button class=\"btn-long btn-color-fill ms-sm-2\" type=\"button\">&ndash;&gt;-->\n<!--&lt;!&ndash;            <i class=\"fas fa-plus\"></i>&ndash;&gt;-->\n<!--&lt;!&ndash;            Începe conversație&ndash;&gt;-->\n<!--&lt;!&ndash;        </button>&ndash;&gt;-->\n<!--    </div>-->\n\n        <div *ngFor=\"let conversation of listConversation\" >\n\n            <div *ngFor=\"let participant of conversation.participants\">\n\n                <!-- reservation -->\n                <div routerLink=\"/private/provider/inbox/{{conversation.id}}\" *ngIf=\"category === 'reservation'\">\n                    <!-- <div *ngFor=\"let participant of conversation.participants\"> -->\n                    <div *ngIf=\"participant?.userId !== currentUser\" class=\"conv-item-card w-100 d-flex justify-content-between align-items-center p-2 my-3\">\n                        <div class=\"d-flex justify-content-between align-items-center gap-2 first-half-conv-item\">\n                            <img src=\"{{ participant?.avatar ? participant?.avatar?.filePath : '../../../../../../../assets/images/others/user.jpg' }}\">\n                            <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                                <h4>{{participant?.userName}}</h4>\n                                <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                                <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex align-items-center second-half-conv-item\">\n                            <p>{{conversation?.lastMessage?.date | date: 'EEEE, HH:mm'}}2/03/2022</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--Pagination-->\n        <mat-paginator *ngIf=\"category === 'reservation'\"\n        [pageSizeOptions]=\"pageItems\"\n        [length]=\"totalConversations\"\n        [pageSize]=\"pageSize\"\n        (page)=\"pageChanged($event)\"\n        ></mat-paginator>\n\n\n\n\n    <div *ngFor=\"let conversation of listBestinformConversation\" >\n        <!-- bestinform Support -->\n        <div routerLink=\"/private/provider/inbox/{{conversation.id}}\" *ngIf=\"category === 'bestinformSupport'\" class=\"conv-item-card w-100 d-flex justify-content-between align-items-center p-2 my-3\">\n                <div class=\"d-flex justify-content-between align-items-center gap-2 first-half-conv-item\">\n                    <img src=\"{{conversation?.featuredImage ? conversation?.featuredImage?.filePath : '../../../../../../../assets/images/others/user.jpg' }}\">\n                    <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                        <h4>{{conversation?.name}}</h4>\n                        <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                        <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                    </div>\n                </div>\n                <div class=\"d-flex align-items-center second-half-conv-item\">\n                    <p>{{conversation?.lastMessage?.date | date: 'EEEE, HH:mm'}}2/03/2022</p>\n                </div>\n        </div>\n    </div>\n    <!--Pagination-->\n    <mat-paginator\n    *ngIf=\"category === 'bestinformSupport'\"\n    [pageSizeOptions]=\"pageItems\"\n    [length]=\"totalBestinformConversations\"\n    [pageSize]=\"pageSize\"\n    (page)=\"pageChanged($event)\"\n    ></mat-paginator>\n</div>\n";

/***/ }),

/***/ 18977:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-dashboard/provider-dashboard.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container my-5\">\n        <p class=\"title-p\">\n            {{'TITLES.CONTROL-PANEL' | translate}}\n        </p>\n\n        <div class=\"dashboard-cards\">\n            <div class=\"row\">\n                <div class=\"col-12 col-md-6\">\n                    <div class=\"balance\" role=\"button\" id=\"toBalance\" [routerLink]=\"'../reservations/list'\" [queryParams]=\"{resourceid: resourcesList[0]?.id}\">\n                        <p class=\"title-for-card m-0\">{{'TITLES.BOOKINGS' | translate}}</p>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-6\">\n                    <!-- <div class=\"bookings\"  role=\"button\" id=\"toBookings\" routerLink=\"../reservations/my-list\"> -->\n                        <div class=\"bookings\"  role=\"button\" id=\"toBookings\" routerLink=\"../profile/view\">\n                        <p class=\"title-for-card m-0\">{{'GENERAL.MY-PROFILE' | translate}}</p>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-12 col-md-6\" *ngIf=\"user?.approvedStatus === 'active'\">\n                    <div class=\"resources\" role=\"button\" id=\"toResources\" routerLink=\"../resources/my-list\">\n                        <p class=\"title-for-card m-0\">{{'TITLES.RESOURCES' | translate}}</p>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-6\" *ngIf=\"user?.approvedStatus === 'active'\">\n                    <div class=\"events\" role=\"button\" id=\"toEvents\" routerLink=\"../events/list\">\n                        <p class=\"title-for-card m-0\">{{'TITLES.EVENTS' | translate}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n</div>\n";

/***/ }),

/***/ 44502:
/*!************************************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-inbox/provider-inbox.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Title bar-->\n<div class=\"container-fluid\">\n\n    <div  class=\"container\" >\n        <app-dashboard-header pageTitleOne=\"Inbox\"\n                              [buttonBackRoute]=\"'/private/provider/dashboard'\">\n        </app-dashboard-header>\n    </div>\n\n    <!-- Tabs -->\n    <div  class=\"container inbox-container \">\n        <ul class=\"nav nav-tabs\" id=\"inboxTab\" role=\"tablist\">\n            <!-- Booking Support -->\n            <li class=\"nav-item\" role=\"presentation\">\n              <button class=\"nav-link active\" id=\"booking-support-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#bookingSupport\" type=\"button\" role=\"tab\" aria-controls=\"bookingSupport\" aria-selected=\"false\">Rezervări</button>\n            </li>\n\n            <!-- Bestinform Support -->\n            <li class=\"nav-item\" role=\"presentation\" >\n                <button class=\"nav-link d-flex align-items-center justify-content-between\" id=\"bestinform-support-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#bestinformSupport\" type=\"button\" role=\"tab\" aria-controls=\"bestinformSupport\" aria-selected=\"false\">Bestinform Support\n                    <button class=\"btn-long btn-color-fill\" type=\"button\" (click)=\"initSupport()\"  [disabled]=\"loading\">\n                        <i class=\"fas fa-plus\"></i>\n                    </button>\n                </button>\n\n            </li>\n\n          </ul>\n\n\n        <!-- Content of tabs -->\n        <div class=\"tab-content\" id=\"myTabContent\">\n            <!-- Content booking suport -->\n            <div class=\"tab-pane fade show active\" id=\"bookingSupport\" role=\"tabpanel\" aria-labelledby=\"booking-support-tab\">\n             <app-provider-conversation-item-card [category]=\"'reservation'\" [currentUser]=\"currentUserId\"></app-provider-conversation-item-card>\n\n            </div>\n\n            <!-- Content bestinform suport -->\n            <div class=\"tab-pane fade\" id=\"bestinformSupport\" role=\"tabpanel\" aria-labelledby=\"bestinform-support-tab\">\n              <app-provider-conversation-item-card [category]=\"'bestinformSupport'\" [currentUser]=\"currentUserId\"></app-provider-conversation-item-card>\n            </div>\n        </div>\n\n    </div>\n</div>\n";

/***/ }),

/***/ 54189:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/role-provider/provider-settings/provider-settings.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-user-settings></app-user-settings>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_role-provider_role-provider_module_ts.js.map