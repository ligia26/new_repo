(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_role-admin_role-admin_module_ts"],{

/***/ 46676:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/role-admin/admin-conversation-item-card/admin-conversation-item-card.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminConversationItemCardComponent": () => (/* binding */ AdminConversationItemCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_conversation_item_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-conversation-item-card.component.html?ngResource */ 78825);
/* harmony import */ var _admin_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-conversation-item-card.component.scss?ngResource */ 20586);
/* harmony import */ var _admin_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_admin_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/messages-conversations.service */ 33869);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);











let AdminConversationItemCardComponent = class AdminConversationItemCardComponent {
  constructor(userServices, conversationsServices, toastService, modalService, cdr, router) {
    this.userServices = userServices;
    this.conversationsServices = conversationsServices;
    this.toastService = toastService;
    this.modalService = modalService;
    this.cdr = cdr;
    this.router = router;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.myActiveConversationsList = [];
    this.unassignedConversationsList = [];
    this.myClosedConversationsList = [];
    this.allConversationsList = [];
    this.testallConversationsList = [];
    this.arrayAllElements = [];
    // Mat Table - pagination, sorting, filtering
    this.pageItems = [15, 50, 100];
    this.page = 0;
    this.sorting = "date";
    this.dir = 'desc';
    this.pageSize = 15;
  }
  ngOnInit() {
    this.getCurrentUser();
    this.listChanges();
  }
  getCurrentUser() {
    this.userServices.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: currentUser => {
        this.currentUser = currentUser.id;
        this.isAdmin = currentUser.roles.includes('ROLE_SUPER_ADMIN') ? true : false;
        this.isStaff = currentUser.roles.includes('ROLE_STAFF') ? true : false;
        //LISTE
        this.getList();
      }
    });
  }
  getList() {
    if (this.categoryConversation === 'myConversations') {
      this.listMyConversation();
    } else if (this.categoryConversation === 'unassignedConversations') {
      this.listUnassignedConversation();
    } else if (this.categoryConversation === 'myClosedConversations') {
      this.listClosedConversation();
    } else if (this.categoryConversation === 'allConversations') {
      this.listAllConversation();
    } else {
      return;
    }
  }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Documents List
    this.getList();
  }
  // Listen to data changes and refresh the user list
  listChanges() {
    this.modalService.listChangedObs.subscribe(data => {
      console.log('schimbaree');
      // If the response is true
      if (data) {
        // Get Documents List
        this.updatedList();
        // Reset Obs Trigger
        this.modalService.triggerUserListChanges(false);
      }
    });
  }
  updatedList() {
    this.listMyConversation();
    this.listUnassignedConversation();
    this.listClosedConversation();
    this.listAllConversation();
  }
  joinConversation(idConversation, userId) {
    this.conversationsServices.addUserToConversation(idConversation, userId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log('join conv: ', userId, idConversation, res);
        //navigate to conversation
        this.router.navigate(['/private/admin/inbox/' + idConversation]);
        this.modalService.triggerUserListChanges(true);
        this.toastService.showToast("Succes", "V-ati alaturat conversatiei cu succes!", "success");
        this.cdr.detectChanges();
        this.listChanges();
      }
    });
  }
  leaveConversation(idConversation) {
    this.conversationsServices.leaveConversation(idConversation).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.modalService.triggerUserListChanges(true);
        this.toastService.showToast("Succes", "Ati parasit conversatia!", "success");
        this.cdr.detectChanges();
        this.listChanges();
      }
    });
  }
  //get my conversation
  listMyConversation() {
    const filter = {
      onlyMine: true,
      active: true
    };
    this.conversationsServices.listBestinformConversationFiltered(this.page, this.pageSize, this.sorting, this.dir, filter)
    // .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: convList => {
        this.myActiveConversationsList = convList.content;
        this.totalMyConversation = convList.totalElements;
        console.log('CONVERSATIILE MELE ACTIVE', convList);
      }
    });
  }
  //get unassigned conversation
  listUnassignedConversation() {
    const filter = {
      onlyMine: false,
      active: true
    };
    this.conversationsServices.listBestinformConversationFiltered(this.page, this.pageSize, this.sorting, this.dir, filter)
    // .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: convList => {
        this.unassignedConversationsList = convList.content;
        this.totalUnassignedConversation = convList.totalElements;
        console.log('CONVERSATIILE NEATRIBUITE', this.unassignedConversationsList);
      }
    });
  }
  //get unassigned conversation
  listClosedConversation() {
    const filter = {
      onlyMine: true,
      active: false
    };
    this.conversationsServices.listBestinformConversationFiltered(this.page, this.pageSize, this.sorting, this.dir, filter)
    // .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: convList => {
        this.myClosedConversationsList = convList.content;
        this.totalMyClosedConversations = convList.totalElements;
        console.log('CONVERSATIILE MELE INCHISE', this.myClosedConversationsList);
      }
    });
  }
  //get unassigned conversation
  listAllConversation() {
    const filter = {
      onlyMine: null,
      active: null
    };
    this.conversationsServices.listBestinformConversationFiltered(this.page, this.pageSize, this.sorting, this.dir, filter)
    // .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: convList => {
        this.allConversationsList = convList.content;
        this.allConversations = convList.totalElements;
        console.log('TOATE CONVERSATIILE', this.allConversationsList);
        // this.allConversationsList.forEach(conversation => {
        //   const found= conversation.participants.find(({ userId }) => userId === this.currentUser);
        //   console.log('found',this.currentUser, found);      
        // });
      }
    });
  }

  alreadyJoiedCheck(conversation) {
    const found = conversation.participants.find(({
      userId
    }) => userId === this.currentUser);
    return found === undefined ? false : true;
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService
  }, {
    type: src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__.MessagesConversationsService
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_3__.ModalService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }];
  static #_2 = this.propDecorators = {
    categoryConversation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator]
    }]
  };
};
AdminConversationItemCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-admin-conversation-item-card',
  template: _admin_conversation_item_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_admin_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AdminConversationItemCardComponent);


/***/ }),

/***/ 57503:
/*!********************************************************************************!*\
  !*** ./src/app/features/role-admin/admin-dasboard/admin-dasboard.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDasboardComponent": () => (/* binding */ AdminDasboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_dasboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-dasboard.component.html?ngResource */ 87557);
/* harmony import */ var _admin_dasboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dasboard.component.scss?ngResource */ 67354);
/* harmony import */ var _admin_dasboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_admin_dasboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);





let AdminDasboardComponent = class AdminDasboardComponent {
  constructor(userService) {
    this.userService = userService;
    this.isAdmin = false;
    this.isStaff = false;
  }
  ngOnInit() {
    this.currentUser();
  }
  currentUser() {
    this.userService.getCurrentUser().subscribe(user => {
      console.log(user);
      if (user.roles[0] === 'ROLE_STAFF') {
        this.isStaff = true;
        this.isAdmin = false;
      } else if (user.roles[0] === 'ROLE_SUPER_ADMIN') {
        this.isStaff = false;
        this.isAdmin = true;
      } else {
        this.isStaff = false;
        this.isAdmin = false;
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }];
};
AdminDasboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-admin-dasboard',
  template: _admin_dasboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_admin_dasboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AdminDasboardComponent);


/***/ }),

/***/ 58007:
/*!**************************************************************************!*\
  !*** ./src/app/features/role-admin/admin-inbox/admin-inbox.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminInboxComponent": () => (/* binding */ AdminInboxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_inbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-inbox.component.html?ngResource */ 31872);
/* harmony import */ var _admin_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-inbox.component.scss?ngResource */ 8880);
/* harmony import */ var _admin_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_admin_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);






let AdminInboxComponent = class AdminInboxComponent {
  constructor(userService) {
    this.userService = userService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.userService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.isAdmin = res.roles.includes('ROLE_SUPER_ADMIN') ? true : false;
        this.isStaff = res.roles.includes('ROLE_STAFF') ? true : false;
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }];
};
AdminInboxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-admin-inbox',
  template: _admin_inbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_admin_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AdminInboxComponent);


/***/ }),

/***/ 50362:
/*!**********************************************************!*\
  !*** ./src/app/features/role-admin/role-admin.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleAdminModule": () => (/* binding */ RoleAdminModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _admin_dasboard_admin_dasboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-dasboard/admin-dasboard.component */ 57503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _staff_management_staff_management_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staff-management/staff-management.module */ 35944);
/* harmony import */ var src_app_standalone_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/standalone-components/conversation/conversation.component */ 51440);
/* harmony import */ var _admin_conversation_item_card_admin_conversation_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-conversation-item-card/admin-conversation-item-card.component */ 46676);
/* harmony import */ var _admin_inbox_admin_inbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-inbox/admin-inbox.component */ 58007);
/* harmony import */ var _view_messages_admin_view_messages_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-messages-admin/view-messages-admin.component */ 72626);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/standalone-components/all-notifications/all-notifications.component */ 97376);
/* harmony import */ var _standalone_components_clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../standalone-components/clients-list/clients-list.component */ 94494);














const routes = [{
  path: 'dashboard',
  component: _admin_dasboard_admin_dasboard_component__WEBPACK_IMPORTED_MODULE_0__.AdminDasboardComponent
}, {
  path: 'inbox',
  component: _admin_inbox_admin_inbox_component__WEBPACK_IMPORTED_MODULE_5__.AdminInboxComponent
}, {
  path: 'inbox/:idConversation',
  component: _view_messages_admin_view_messages_admin_component__WEBPACK_IMPORTED_MODULE_6__.ViewMessagesAdminComponent
}, {
  path: 'all-notifications',
  component: src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_8__.AllNotificationsComponent
}, {
  path: 'settings',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings.module */ 56867)).then(m => m.SettingsModule)
}, {
  path: 'manage-staff',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../staff-management/staff-management.module */ 35944)).then(m => m.StaffManagementModule)
}, {
  path: 'manage-providers',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2020_ngx-owl-carousel-o_mjs"), __webpack_require__.e("default-src_app_shared__domains_ts-node_modules_css-loader_dist_cjs_js_ruleSet_1_rules_6_rule-fd9a58"), __webpack_require__.e("default-src_app_features_providers-management_providers-management_module_ts"), __webpack_require__.e("default-src_app_features_role-provider_view-provider-messages_view-provider-messages_componen-fb491b")]).then(__webpack_require__.bind(__webpack_require__, /*! ../providers-management/providers-management.module */ 54632)).then(m => m.ProvidersManagementModule)
}, {
  path: 'editorials',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared__domains_ts-node_modules_css-loader_dist_cjs_js_ruleSet_1_rules_6_rule-fd9a58"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_editorials_editorials_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../editorials/editorials.module */ 51008)).then(m => m.EditorialsModule)
}, {
  path: 'events',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_events_events_module_ts"), __webpack_require__.e("default-src_app_standalone-components_resource-card_resource-card_component_ts"), __webpack_require__.e("src_app_shared__services_resource-filter_service_ts-src_app_shared__services_resources_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../events/events.module */ 36764)).then(m => m.EventsModule)
}, {
  path: 'resources',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ol_Map_js-node_modules_ol_layer_Tile_js-node_modules_ol_source_OSM_js"), __webpack_require__.e("default-src_app_standalone-components_display-user_display-user_component_ts"), __webpack_require__.e("default-src_app_features_domain-listing__components_shared-exp-map_shared-exp-map_component_t-a8c67b"), __webpack_require__.e("default-src_app_standalone-components_shared-experiences-info_shared-experiences-info_component_ts"), __webpack_require__.e("default-src_app_features_resources_resources_module_ts"), __webpack_require__.e("src_app_shared__services_resources_service_ts-src_app_shared__services_shared-experiences_ser-2d769a0")]).then(__webpack_require__.bind(__webpack_require__, /*! ../resources/resources.module */ 26022)).then(m => m.ResourcesModule)
}, {
  path: 'reservations',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_standalone-components_room-card_room-card_component_ts-node_modules_angular_m-c08a2c"), __webpack_require__.e("default-src_app_features_reservations_reservations_module_ts"), __webpack_require__.e("default-src_app_features_reservations_cancel-reservation-modal_cancel-reservation-modal_compo-bdeb9f"), __webpack_require__.e("src_app_shared__services_resources_service_ts-_6b220")]).then(__webpack_require__.bind(__webpack_require__, /*! ../reservations/reservations.module */ 94436)).then(m => m.ReservationsModule)
}, {
  path: 'templates',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_chips_mjs"), __webpack_require__.e("src_app_features_resource-templates_templates_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../resource-templates/templates.module */ 40763)).then(m => m.ResourceTemplatesModule)
}, {
  path: 'domains',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_domains_domains_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../domains/domains.module */ 56822)).then(m => m.DomainsModule)
}, {
  path: 'cms',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_cms_cms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../cms/cms.module */ 89106)).then(m => m.CmsModule)
}, {
  path: 'reports',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_reports_reports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../reports/reports.module */ 46291)).then(m => m.ReportsModule)
}, {
  path: 'forum',
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_features_forums_forums_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../forums/forums.module */ 79470)).then(m => m.ForumsModule)
}, {
  path: 'logs',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_system-logs_system-logs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../system-logs/system-logs.module */ 2229)).then(m => m.SystemLogsModule)
}, {
  path: 'itineraries',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_itineraries_itineraries_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../itineraries/itineraries.module */ 1176)).then(m => m.ItinerariesModule)
}, {
  path: 'trips',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_trips_trips_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../trips/trips.module */ 76860)).then(m => m.TripsModule)
}, {
  path: 'jobs',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_jobs__components_view-job_view-job_component_ts"), __webpack_require__.e("src_app_features_jobs-dashboard_jobs-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../jobs-dashboard/jobs-dashboard.module */ 94798)).then(m => m.JobsDashboardModule)
}, {
  path: 'client-jobs',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_standalone-components_display-user_display-user_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_chips_mjs"), __webpack_require__.e("default-src_app_features_jobs__components_view-job_view-job_component_ts"), __webpack_require__.e("default-src_app_features_jobs_jobs_module_ts"), __webpack_require__.e("default-src_app_standalone-components_resource-card-with-template_resource-card-with-template-b14844"), __webpack_require__.e("src_app_shared__services_resources_service_ts-src_app_shared__services_shared-experiences_ser-2d769a1")]).then(__webpack_require__.bind(__webpack_require__, /*! ../jobs/jobs.module */ 87596)).then(m => m.JobsModule)
}, {
  path: 'clients',
  component: _standalone_components_clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_9__.ClientsListComponent
}, {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}];
let RoleAdminModule = class RoleAdminModule {};
RoleAdminModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_admin_dasboard_admin_dasboard_component__WEBPACK_IMPORTED_MODULE_0__.AdminDasboardComponent, _admin_conversation_item_card_admin_conversation_item_card_component__WEBPACK_IMPORTED_MODULE_4__.AdminConversationItemCardComponent, _admin_inbox_admin_inbox_component__WEBPACK_IMPORTED_MODULE_5__.AdminInboxComponent, _view_messages_admin_view_messages_admin_component__WEBPACK_IMPORTED_MODULE_6__.ViewMessagesAdminComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _staff_management_staff_management_module__WEBPACK_IMPORTED_MODULE_2__.StaffManagementModule, src_app_standalone_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_3__.ConversationComponent, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_7__.DashboardHeaderComponent, src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_8__.AllNotificationsComponent]
})], RoleAdminModule);


/***/ }),

/***/ 72626:
/*!******************************************************************************************!*\
  !*** ./src/app/features/role-admin/view-messages-admin/view-messages-admin.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMessagesAdminComponent": () => (/* binding */ ViewMessagesAdminComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_messages_admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-messages-admin.component.html?ngResource */ 56708);
/* harmony import */ var _view_messages_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-messages-admin.component.scss?ngResource */ 64715);
/* harmony import */ var _view_messages_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_messages_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/messages-conversations.service */ 33869);
/* harmony import */ var src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/reservations.service */ 84803);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);












let ViewMessagesAdminComponent = class ViewMessagesAdminComponent {
  constructor(conversationsService, usersService, activatedRoute, reservationService, toastService, router) {
    this.conversationsService = conversationsService;
    this.usersService = usersService;
    this.activatedRoute = activatedRoute;
    this.reservationService = reservationService;
    this.toastService = toastService;
    this.router = router;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.openedInfo = false;
  }
  ngOnInit() {
    //get current user
    this.getCurrentUser();
  }
  getCurrentUser() {
    // console.log('hello');
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
        console.log('din get conversation by id');
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
          console.log('Pariticipant: ');
          console.log('Pariticipant: ', this.convParticipantData);
          // this.convParticipantID=user.id;
        }
      });
    }
  }

  getConversationById(id) {
    this.conversationsService.getConversationById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentConversation = res;
        console.log("currentConversation", this.currentConversation);
        //reservation
        if (res.participants.length === 2) {
          res.participants.forEach(userParticipant => {
            if (userParticipant.userId === this.currentUserId) {
              this.alreadyJoined = true;
              return;
            }
            // this.convParticipantID=(userParticipant === this.currentUserId ? 'nimic' : userParticipant);
            if (userParticipant.userId !== this.currentUserId) {
              this.convParticipantID = userParticipant.userId;
              return;
            }
          });
          this.getUserById(this.convParticipantID);
          // this.getReservationById(res.id);
        } else {
          res.participants.forEach(userParticipant => {
            // this.convParticipantID=(userParticipant === this.currentUserId ? 'nimic' : userParticipant);
            if (userParticipant.userId === this.currentUserId) {
              this.alreadyJoined = true;
              return;
            }
            if (userParticipant.userId !== this.currentUserId) {
              this.convParticipantID = userParticipant.userId;
              return;
            }
          });
          this.getUserById(this.convParticipantID);
        }
      }
    });
  }
  joinConversation(idConversation, userId) {
    this.conversationsService.addUserToConversation(idConversation, userId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log('join conv: ', userId, idConversation, res);
        this.alreadyJoined = true;
        // this.modalService.triggerUserListChanges(true);
        this.toastService.showToast("Succes", "V-ati alaturat conversatiei cu succes!", "success");
        // this.cdr.detectChanges();
        // this.listChanges()
      },

      error: err => {
        if (err.reason === 'notAllowed') {
          this.toastService.showToast("Eroare", "Pentru a trimite mesaj, alaturati-va conversatiei!", "error");
        } else if (err.reason === 'invalidId') {
          this.toastService.showToast("Eroare", "A aparul o problema!", "error");
          console.log(err);
        } else {
          console.log(err);
        }
      }
    });
  }
  leaveConversation(idConversation) {
    this.conversationsService.leaveConversation(idConversation).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.alreadyJoined = false;
        // this.modalService.triggerUserListChanges(true);
        this.toastService.showToast("Succes", "Ati parasit conversatia!", "success");
        this.router.navigate(['/private/admin/inbox']);
        // this.cdr.detectChanges();
        // this.listChanges()
      },

      error: err => {
        if (err.reason === 'notInConversation') {
          this.toastService.showToast("Eroare", "Nu v-ati alaturat conversatiei!", "error");
        } else {
          this.toastService.showToast("Eroare", "Ups! A aparut o eroare!", "error");
        }
        console.log(err);
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
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__.ReservationsService
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }];
};
ViewMessagesAdminComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-view-messages-admin',
  template: _view_messages_admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [(_view_messages_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ViewMessagesAdminComponent);


/***/ }),

/***/ 36290:
/*!******************************************************************************************!*\
  !*** ./src/app/features/staff-management/_components/staff-card/staff-card.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffCardComponent": () => (/* binding */ StaffCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _staff_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-card.component.html?ngResource */ 64932);
/* harmony import */ var _staff_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-card.component.scss?ngResource */ 46521);
/* harmony import */ var _staff_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_staff_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);
/* harmony import */ var _shared_services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/staff.service */ 50871);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/_services/toast.service */ 62941);








let StaffCardComponent = class StaffCardComponent {
  constructor(modalService, staffService, toastService, cdr, modalCustomService) {
    this.modalService = modalService;
    this.staffService = staffService;
    this.toastService = toastService;
    this.cdr = cdr;
    this.modalCustomService = modalCustomService;
    this.accountDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.accountDeactivated = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.accountActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {
    console.log(this.user);
    if (!this.name && !this.email && !this.imgUrl) {
      this.name = 'Jonah West';
      this.email = 'johnwest@gmail.com';
      this.imgUrl = 'assets/images/avatars/avatar-3.png';
    }
  }
  openModal(templateRef) {
    this.modalService.open(templateRef, {
      centered: true
    });
  }
  deleteStaffAccount() {
    this.staffService.deleteUser(this.user.id.toString()).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.modalCustomService.triggerUserListChanges(true);
        this.toastService.showToast('Succes', 'Utilizatorul a fost sters', 'success');
        this.cdr.detectChanges();
        this.modalService.dismissAll();
        this.accountDeleted.emit();
      }
    });
  }
  deactivateStaffAccount() {
    this.staffService.changeActiveStatus(this.user.id.toString(), false).subscribe(res => {
      console.log(res);
      if (res.success) {
        // this.toastService.showToast('Succes', 'Utilizatorul a fost dezactivat', 'success');
        this.modalCustomService.triggerUserListChanges(true);
        this.toastService.showToast("Succes", "Providerul a fost dezactivat!", "success");
        this.cdr.detectChanges();
        this.modalService.dismissAll();
        this.accountDeactivated.emit();
      }
    });
  }
  activateStaffAccount() {
    this.staffService.changeActiveStatus(this.user.id.toString(), true).subscribe(res => {
      console.log(res);
      if (res.success) {
        // this.toastService.showToast('Succes', 'Utilizatorul a fost dezactivat', 'success');
        this.modalCustomService.triggerUserListChanges(true);
        this.toastService.showToast("Succes", "Providerul a fost activat!", "success");
        this.cdr.detectChanges();
        this.modalService.dismissAll();
        this.accountActivated.emit();
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal
  }, {
    type: _shared_services_staff_service__WEBPACK_IMPORTED_MODULE_3__.StaffService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }, {
    type: src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalService
  }];
  static #_2 = this.propDecorators = {
    user: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    accountDeleted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    accountDeactivated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    accountActivated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }]
  };
};
StaffCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-staff-card',
  template: _staff_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_staff_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], StaffCardComponent);


/***/ }),

/***/ 34637:
/*!**************************************************************************************!*\
  !*** ./src/app/features/staff-management/add-edit-staff/add-edit-staff.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditStaffComponent": () => (/* binding */ AddEditStaffComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_staff_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-staff.component.html?ngResource */ 34030);
/* harmony import */ var _add_edit_staff_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-staff.component.scss?ngResource */ 40845);
/* harmony import */ var _add_edit_staff_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_edit_staff_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var randexp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! randexp */ 26802);
/* harmony import */ var randexp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(randexp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/staff.service */ 50871);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);











let AddEditStaffComponent = class AddEditStaffComponent {
  constructor(route, router, staffService, fb, toastService, datepipe) {
    this.route = route;
    this.router = router;
    this.staffService = staffService;
    this.fb = fb;
    this.toastService = toastService;
    this.datepipe = datepipe;
    this.showPassword = false;
    this.telephoneValidator = /[1234567890]/;
    //invalid fields
    this.invalidFields = [];
    this.emptyStaffData = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      telephone: '',
      birthdate: '',
      gender: 'male',
      nickname: 'string',
      roles: ['ROLE_STAFF'],
      city: 'Galati'
    };
    this.declaredGenders = ['male', 'female', 'other'];
  }
  ngOnInit() {
    this.today = new Date();
    this.initFormGroup();
    this.getUserData();
  }
  initFormGroup() {
    const specialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const numbers = /[1234567890]/;
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const whiteSpace = /^(?!\s*$).+/;
    this.staffForm = this.fb.group({
      id: [null],
      lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(16), this.regexValidator(new RegExp(lower), {
        lower
      }), this.regexValidator(new RegExp(numbers), {
        numbers
      }), this.regexValidator(new RegExp(upper), {
        upper
      }), this.regexValidator(new RegExp(specialCharacter), {
        specialCharacter
      }), this.regexValidator(new RegExp(whiteSpace), {
        whiteSpace
      })])],
      // telephone: [null,[ Validators.pattern('[- +()0-9]{10,}')]],
      telephone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10)])],
      birthdate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max]],
      gender: [null],
      // viewEvents: [false],
      editEvents: [false],
      // viewEditorials: [false],
      editEditorials: [false],
      // viewProviders: [false],
      editProviders: [false],
      roles: [[]]
    }
    // {
    //     validator: this.checkPassword
    //  } as AbstractControlOptions
    );
  }

  regexValidator(regex, error) {
    return control => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
  findInvalidControls() {
    this.invalidFields = [];
    const controls = this.staffForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        this.invalidFields.push(name);
      }
    }
    // this.password=this.invalidFields.includes('travelClass')
    console.log('INVALIDE', this.invalidFields);
  }
  // get user data data if in edit mode, else load empty staff-dashboard data
  getUserData() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(params => {
      console.log("PARAMS", params);
      if (params.get('id')) {
        this.isEditMode = true;
        return this.staffService.getUserById(params.get('id'));
      } else {
        this.isEditMode = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this.emptyStaffData);
      }
    })).subscribe(staff => {
      this.staffData = staff;
      //   console.log(this.staffData);
      this.staffForm.patchValue(staff);
      // if (this.staffData.roles.includes('ROLE_EVENTS_VIEW')){
      //     this.staffForm.get('viewEvents').setValue(true);
      // }
      if (this.staffData.roles.includes('ROLE_EVENTS_EDIT')) {
        this.staffForm.get('editEvents').setValue(true);
      }
      // if (this.staffData.roles.includes('ROLE_EDITORIALS_VIEW')){
      //     this.staffForm.get('viewEditorials').setValue(true);
      // }
      if (this.staffData.roles.includes('ROLE_EDITORIALS_EDIT')) {
        this.staffForm.get('editEditorials').setValue(true);
      }
      // if (this.staffData.roles.includes('ROLE_PROVIDERS_VIEW')){
      //     this.staffForm.get('viewProviders').setValue(true);
      // }
      if (this.staffData.roles.includes('ROLE_PROVIDERS_EDIT')) {
        this.staffForm.get('editProviders').setValue(true);
      }
      if (this.isEditMode) {
        this.staffForm.get('password').patchValue('');
        this.staffForm.get('password').removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.staffForm.get('password').updateValueAndValidity();
        this.staffForm.get('email').disable();
        /*this.staffForm.removeValidators(this.checkPassword);
        this.staffForm.updateValueAndValidity();*/
      }
      //console.log(this.staffForm.value);
    });
  }

  submitForm() {
    console.log("erori acumulate", this.staffForm.errors);
    this.findInvalidControls();
    console.log(this.staffForm.value);
    this.staffForm.markAllAsTouched();
    // this.staffForm.get('password').value===null;
    // if( this.staffForm.controls["viewEvents"].value === true && !this.staffForm.controls["roles"].value.includes('ROLE_EVENTS_VIEW')) {
    //     this.staffForm.controls["roles"].setValue([...this.staffForm.controls["roles"].value, 'ROLE_EVENTS_VIEW']);
    // } else if (this.staffForm.controls["viewEvents"].value === false && this.staffForm.controls["roles"].value.includes('ROLE_EVENTS_VIEW')) {
    //     const currentArray = this.staffForm.controls["roles"].value;
    //     const updatedArray = currentArray.filter(item => item !== 'ROLE_EVENTS_VIEW');
    //     this.staffForm.controls["roles"].setValue(updatedArray);
    // }
    if (this.staffForm.controls["editEvents"].value === true && !this.staffForm.controls["roles"].value.includes('ROLE_EVENTS_EDIT')) {
      this.staffForm.controls["roles"].setValue([...this.staffForm.controls["roles"].value, 'ROLE_EVENTS_EDIT']);
    } else if (this.staffForm.controls["editEvents"].value === false && this.staffForm.controls["roles"].value.includes('ROLE_EVENTS_EDIT')) {
      const currentArray = this.staffForm.controls["roles"].value;
      const updatedArray = currentArray.filter(item => item !== 'ROLE_EVENTS_EDIT');
      this.staffForm.controls["roles"].setValue(updatedArray);
    }
    // if( this.staffForm.controls["viewEditorials"].value === true && !this.staffForm.controls["roles"].value.includes('ROLE_EDITORIALS_VIEW')) {
    //     this.staffForm.controls["roles"].setValue([...this.staffForm.controls["roles"].value, 'ROLE_EDITORIALS_VIEW']);
    // } else if (this.staffForm.controls["viewEditorials"].value === false && this.staffForm.controls["roles"].value.includes('ROLE_EDITORIALS_VIEW')) {
    //     const currentArray = this.staffForm.controls["roles"].value;
    //     const updatedArray = currentArray.filter(item => item !== 'ROLE_EDITORIALS_VIEW');
    //     this.staffForm.controls["roles"].setValue(updatedArray);
    // }
    if (this.staffForm.controls["editEditorials"].value === true && !this.staffForm.controls["roles"].value.includes('ROLE_EDITORIALS_EDIT')) {
      this.staffForm.controls["roles"].setValue([...this.staffForm.controls["roles"].value, 'ROLE_EDITORIALS_EDIT']);
    } else if (this.staffForm.controls["editEditorials"].value === false && this.staffForm.controls["roles"].value.includes('ROLE_EDITORIALS_EDIT')) {
      const currentArray = this.staffForm.controls["roles"].value;
      const updatedArray = currentArray.filter(item => item !== 'ROLE_EDITORIALS_EDIT');
      this.staffForm.controls["roles"].setValue(updatedArray);
    }
    // if( this.staffForm.controls["viewProviders"].value === true && !this.staffForm.controls["roles"].value.includes('ROLE_PROVIDERS_VIEW')) {
    //     this.staffForm.controls["roles"].setValue([...this.staffForm.controls["roles"].value, 'ROLE_PROVIDERS_VIEW']);
    // } else if (this.staffForm.controls["viewProviders"].value === false && this.staffForm.controls["roles"].value.includes('ROLE_PROVIDERS_VIEW')) {
    //     const currentArray = this.staffForm.controls["roles"].value;
    //     const updatedArray = currentArray.filter(item => item !== 'ROLE_PROVIDERS_VIEW');
    //     this.staffForm.controls["roles"].setValue(updatedArray);
    // }
    if (this.staffForm.controls["editProviders"].value === true && !this.staffForm.controls["roles"].value.includes('ROLE_PROVIDERS_EDIT')) {
      this.staffForm.controls["roles"].setValue([...this.staffForm.controls["roles"].value, 'ROLE_PROVIDERS_EDIT']);
    } else if (this.staffForm.controls["editProviders"].value === false && this.staffForm.controls["roles"].value.includes('ROLE_PROVIDERS_EDIT')) {
      const currentArray = this.staffForm.controls["roles"].value;
      const updatedArray = currentArray.filter(item => item !== 'ROLE_PROVIDERS_EDIT');
      this.staffForm.controls["roles"].setValue(updatedArray);
    }
    if (this.isEditMode) {
      this.staffForm.controls["password"].setErrors(null);
    }
    if (this.staffForm.valid) {
      // if (this.staffForm.value.birthdate !== null) {
      //     this.staffForm.value.birthdate = this.datepipe.transform(this.staffForm.value.birthdate, 'yyyy-MM-dd')
      // }
      console.log('Form valid', this.staffForm.value);
      // convertim data de nastere din Moment Js in 'YYYY-MM-DD'
      // if (this.staffForm.get('birthdate').value._i) {
      //     const birthdayMoment = this.staffForm.get('birthdate').value._i;
      //     this.staffForm.get('birthdate').patchValue(
      //         birthdayMoment.year.toString() + '-'
      //         + (birthdayMoment.month + 1).toString() + '-'
      //         + birthdayMoment.day.toString()
      //     );
      // }
      if (this.isEditMode) {
        const formValuesWithoutPassword = {
          ...this.staffForm.value
        };
        const birth = this.datepipe.transform(this.staffForm.value.birthdate, 'yyyy-MM-dd');
        delete formValuesWithoutPassword['password'];
        console.log(this.staffForm.value);
        console.log(formValuesWithoutPassword);
        this.staffService.updateUser(this.staffForm.value.id, {
          ...this.staffData,
          ...this.staffForm.value,
          birthdate: birth
        }).subscribe(res => {
          if (res.success) {
            this.toastService.showToast('Succes', 'Staff modificat', 'success');
            this.router.navigate(['/private/admin/manage-staff/list']);
          } else {
            if (res.reason === "invalidPassword") {
              this.toastService.showToast('Eroare', 'Parola invalida', 'error');
            } else {
              this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
            }
          }
        }, error => {
          console.log(error);
          this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
        });
      } else {
        const birth = this.datepipe.transform(this.staffForm.value.birthdate, 'yyyy-MM-dd');
        console.log({
          ...this.emptyStaffData,
          ...this.staffForm.value
        });
        this.staffService.addUser({
          ...this.emptyStaffData,
          ...this.staffForm.value,
          birthdate: birth
        }).subscribe(res => {
          if (res.success) {
            this.toastService.showToast('Succes', 'Contul de staff a fost creat cu succes!', 'success');
            // trimitem mail de register
            this.staffService.sendRegistrationEmail(res.reason).subscribe(res => {
              if (res.success) {
                this.toastService.showToast('Succes', 'Email trimis catre user', 'success');
              } else {
                this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
              }
            });
            this.router.navigate(['/private/admin/manage-staff/list']);
          } else {
            if (res.reason === 'emailExists') {
              this.toastService.showToast('Eroare', 'Email-ul a mai fost folosit', 'error');
            } else if (res.reason === 'emailNotValid') {
              this.toastService.showToast('Eroare', 'Email-ul nu este corect', 'error');
            } else {
              this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
            }
          }
        }, error => {
          console.log(error);
          if (error.error.reason === "invalidPassword") {
            this.toastService.showToast('Eroare', 'Parola invalidă', 'error');
          } else if (error.error.reason === "emailExists") {
            this.toastService.showToast('Eroare', 'Există deja un cont asociat acestui email!', 'error');
          } else if (error.error.reason === "emailNotValid") {
            this.toastService.showToast('Eroare', 'Emailul este invalid!', 'error');
          } else if (error.error.reason === "notLoggedIn" || error.error.reson === "tokenExpired") {
            this.toastService.showToast('Eroare', 'Pentru a finaliza această acțiune trebuie să fii logat!', 'error');
          } else {
            this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
          }
        });
      }
    } else {
      this.toastService.showToast('Eroare', 'Completati campurile obligatorii', 'error');
    }
  }
  clearFormControl(formControl) {
    this.staffForm.get(formControl).patchValue(this.emptyStaffData[formControl]);
  }
  // checkAll(item: string, event: any) {
  //     console.log('check all', item, event.target.checked);
  //     if(item === 'providers') {
  //         if (event.target.checked === true) {
  //             this.staffForm.controls.viewProviders.setValue(true);
  //         }
  //     }
  //
  //     if(item === 'editorials') {
  //         if (event.target.checked === true) {
  //             this.staffForm.controls.viewEditorials.setValue(true);
  //         }
  //     }
  //
  //     if(item === 'events') {
  //         if (event.target.checked === true) {
  //             this.staffForm.controls.viewEvents.setValue(true);
  //         }
  //     }
  // }
  generatePassword() {
    const randexp = new randexp__WEBPACK_IMPORTED_MODULE_2__(/^(.\d{1})(.[a-z]\d{1})(.[A-Z]\d{1})(.[@$!%*?&]\d{1})(?=.[a-zA-Z]).{0,1}$/).gen();
    // console.log(randexp);
    let generatedPassword = randexp;
    while (generatedPassword.indexOf(' ') !== -1) {
      // console.log(randexp.indexOf(' '));
      generatedPassword = generatedPassword.slice(0, generatedPassword.indexOf(' ')) + generatedPassword.slice(generatedPassword.indexOf(' ') + 1);
    }
    while (generatedPassword.indexOf('"') !== -1) {
      generatedPassword = generatedPassword.slice(0, generatedPassword.indexOf('"')) + generatedPassword.slice(generatedPassword.indexOf('"') + 1);
    }
    console.log(generatedPassword);
    this.staffForm.get('password').patchValue(generatedPassword);
  }
  resetPassword() {
    this.staffForm.get('password').markAsTouched();
    if (this.staffForm.get('password').valid) {
      console.log(this.staffData.id.toString(), this.staffForm.get('password').value);
      this.staffService.changeUserPassword(this.staffData.id.toString(), this.staffForm.get('password').value).subscribe(res => {
        if (res.success) {
          this.toastService.showToast('Succes', 'Parola a fost modificata cu succes', 'success');
        } else {
          this.toastService.showToast('Eroare', 'Parola nu a fost modificata', 'error');
        }
      });
    } else {
      this.toastService.showToast('Eroare', 'Parola nu indeplineste toate criteriile', 'error');
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _shared_services_staff_service__WEBPACK_IMPORTED_MODULE_3__.StaffService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe
  }];
};
AddEditStaffComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-add-edit-staff-dashboard',
  template: _add_edit_staff_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [(_add_edit_staff_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddEditStaffComponent);


/***/ }),

/***/ 22475:
/*!******************************************************************************!*\
  !*** ./src/app/features/staff-management/staff-list/staff-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffListComponent": () => (/* binding */ StaffListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _staff_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-list.component.html?ngResource */ 10690);
/* harmony import */ var _staff_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-list.component.scss?ngResource */ 92520);
/* harmony import */ var _staff_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_staff_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);
/* harmony import */ var _shared_services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/staff.service */ 50871);







let StaffListComponent = class StaffListComponent {
  constructor(staffService, cdr, modalService) {
    this.staffService = staffService;
    this.cdr = cdr;
    this.modalService = modalService;
    this.usersLoaded = false;
    this.pageSizeArray = [6, 9, 12];
    // users on current page
    this.usersList = [];
  }
  ngOnInit() {
    this.pageNumber = 1;
    this.pageSize = 6;
    this.getUsers();
    // Listen to List Changes
    this.listChanges();
  }
  //changed page
  pageChanged(event) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    console.log(event);
    const activeFilter = {
      firstName: this.searchText,
      roles: ["ROLE_STAFF"]
    };
    // Get All Documents List
    this.staffService.listUsersFiltered(this.pageNumber, this.pageSize, '', '', activeFilter).subscribe(res => {
      console.log(res);
      this.paginationInfo = res;
      this.usersList = res["content"];
      console.log(this.usersList);
      console.log("din page changed", res);
      this.usersLoaded = true;
    });
    // Listen to layout changes
    this.cdr.detectChanges();
  }
  // Listen to data changes and refresh the user list
  listChanges() {
    this.modalService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get Documents List
        this.getUsers();
        // Reset Obs Trigger
        this.modalService.triggerUserListChanges(false);
      }
    });
  }
  getUsers() {
    this.pageNumber = 1;
    const activeFilter = {
      firstName: this.searchText,
      roles: ["ROLE_STAFF"]
    };
    this.staffService.listUsersFiltered(this.pageNumber - 1, this.pageSize, '', '', activeFilter).subscribe(res => {
      console.log(res);
      this.paginationInfo = res;
      this.usersList = res["content"];
      console.log(this.usersList);
      console.log("despre paginare", res);
      this.usersLoaded = true;
    });
    // Listen to layout changes
    this.cdr.detectChanges();
  }
  onPageChange() {
    this.getUsers();
  }
  search(text, event) {
    // console.log(event);
    if (event && event.key === 'Enter' || event) {
      console.log(text);
      this.searchText = text;
      console.log(this.searchText);
      this.getUsers();
    }
    if (!event) {
      console.log(text);
      this.searchText = text;
      console.log(this.searchText);
    }
  }
  ngAfterViewInit() {
    document.getElementById('preloader').classList.add('hide');
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_staff_service__WEBPACK_IMPORTED_MODULE_3__.StaffService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
  }, {
    type: src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalService
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__.MatLegacyPaginator]
    }]
  };
};
StaffListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-staff-dashboard-list',
  template: _staff_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_staff_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], StaffListComponent);


/***/ }),

/***/ 35944:
/*!**********************************************************************!*\
  !*** ./src/app/features/staff-management/staff-management.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffManagementModule": () => (/* binding */ StaffManagementModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-list/staff-list.component */ 22475);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _add_edit_staff_add_edit_staff_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-staff/add-edit-staff.component */ 34637);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _components_staff_card_staff_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/staff-card/staff-card.component */ 36290);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);


















const routes = [{
  path: 'list',
  component: _staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_0__.StaffListComponent
}, {
  path: 'add',
  component: _add_edit_staff_add_edit_staff_component__WEBPACK_IMPORTED_MODULE_1__.AddEditStaffComponent
}, {
  path: 'edit/:id',
  component: _add_edit_staff_add_edit_staff_component__WEBPACK_IMPORTED_MODULE_1__.AddEditStaffComponent
}, {
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
}];
let StaffManagementModule = class StaffManagementModule {};
StaffManagementModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_0__.StaffListComponent, _components_staff_card_staff_card_component__WEBPACK_IMPORTED_MODULE_2__.StaffCardComponent, _add_edit_staff_add_edit_staff_component__WEBPACK_IMPORTED_MODULE_1__.AddEditStaffComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_12__.MatLegacySelectModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_13__.MatLegacyInputModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__.MatLegacyButtonModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_17__.MatLegacyPaginatorModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_3__.DashboardHeaderComponent]
})], StaffManagementModule);


/***/ }),

/***/ 20586:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/role-admin/admin-conversation-item-card/admin-conversation-item-card.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\np {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  color: black;\n  margin-bottom: 0px;\n}\n\n.conv-item-card {\n  padding: 8px 16px 8px 8px;\n  gap: 8px;\n  background-color: #FFFFFF;\n  box-shadow: 4px 4px 12px 8px rgba(35, 31, 32, 0.08);\n  border-radius: 8px;\n}\n.conv-item-card .first-half-conv-item img {\n  width: 58px;\n  height: 58px;\n  border-radius: 100px;\n}\n.conv-item-card .first-half-conv-item h4 {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  color: #231F20;\n}\n.conv-item-card .first-half-conv-item p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  opacity: 0.5;\n  max-width: 600px;\n}\n.conv-item-card .second-half-conv-item p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  color: #231F20;\n  opacity: 0.5;\n}\n.conv-item-card .conv-handling-class h5 {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n}\n.conv-item-card .conv-handling-class h5.chat-controlled-by-you {\n  color: #24398A;\n}\n.conv-item-card .conv-handling-class h5.chat-controlled-by-others {\n  color: #231F20;\n}\n.conv-item-card .conv-handling-class p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  opacity: 0.5;\n  max-width: 600px;\n}\n.conv-item-card .conv-handling-class button {\n  min-width: 110px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-admin/admin-conversation-item-card/admin-conversation-item-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;AAiBJ;;AAdA;EAEI,yBAAA;EACA,QAAA;EACA,yBAAA;EACA,mDAAA;EACA,kBAAA;AAgBJ;AAbQ;EACI,WAAA;EACA,YAAA;EACA,oBAAA;AAeZ;AAZQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cD7BA;AC2CZ;AAXQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AAaZ;AARQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cDlDA;ECmDA,YAAA;AAUZ;AAFQ;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAGZ;AADY;EACI,cD5EA;AC+EhB;AAAY;EACI,cD3EJ;AC6EZ;AAEQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AAAZ;AAGQ;EACI,gBAAA;AADZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\np{\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 140%;\n    /* identical to box height, or 17px */\n\n    display: flex;\n    align-items: center;\n    color: black;\n    margin-bottom: 0px;\n}\n\n.conv-item-card{\n    //align-items: center;\n    padding: 8px 16px 8px 8px;\n    gap: 8px;\n    background-color: #FFFFFF;\n    box-shadow: 4px 4px 12px 8px rgba(35, 31, 32, 0.08);\n    border-radius: 8px;\n\n    .first-half-conv-item{\n        img{\n            width: 58px;\n            height: 58px;\n            border-radius: 100px;\n        }\n\n        h4{\n            font-weight: 700;\n            font-size: 16px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            color:$paragraph;\n        }\n\n        p{\n            font-weight: 400;\n            font-size: 12px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            opacity: 0.5;\n            max-width: 600px;\n        }\n    }\n\n    .second-half-conv-item{\n        p{\n            font-weight: 400;\n            font-size: 14px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            color: $paragraph;\n            opacity: 0.5;\n        }\n\n\n    }\n    //the part with leave and join buttons\n    .conv-handling-class{\n\n        h5{\n            font-style: normal;\n            font-weight: 700;\n            font-size: 16px;\n            line-height: 140%;\n            /* or 22px */\n\n            display: flex;\n            align-items: center;\n            letter-spacing: -0.02em;\n\n            &.chat-controlled-by-you{\n                color: $primary-color;\n            }\n\n            &.chat-controlled-by-others{\n                color: $paragraph;\n            }\n        }\n\n        p{\n            font-weight: 400;\n            font-size: 12px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            opacity: 0.5;\n            max-width: 600px;\n        }\n\n        button{\n            min-width:110px;\n            // min-width:auto;\n            // max-width: 120px;\n        }\n    }\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 67354:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/role-admin/admin-dasboard/admin-dasboard.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.dashboard-staff {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n.dashboard-staff .dashboard-cards .row {\n  row-gap: 24px;\n  margin-bottom: 24px;\n}\n.dashboard-staff .dashboard-cards .row .resources {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('resourcess.jpg');\n  background-size: cover;\n  height: 300px;\n  position: relative;\n}\n.dashboard-staff .dashboard-cards .row .templates {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('templates.jpg');\n  background-size: cover;\n  height: 300px;\n  position: relative;\n}\n.dashboard-staff .dashboard-cards .row .editorials {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('editorials.jpg') center;\n  background-size: cover;\n  height: 300px;\n}\n.dashboard-staff .dashboard-cards .row .events {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('events.jpg');\n  background-size: cover;\n  height: 300px;\n}\n.dashboard-staff .dashboard-cards .row .trips {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('trips.jpg');\n  background-size: cover;\n  height: 300px;\n}\n.dashboard-staff .dashboard-cards .row .title-for-card {\n  position: relative;\n  top: 215px;\n  left: 16px;\n  color: var(--primary-background);\n  font-size: 48px;\n  font-weight: 500;\n}\n\n.dashboard-admin {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n.dashboard-admin .row {\n  row-gap: 24px;\n}\n.dashboard-admin .row .staff-list {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('staff-list.jpg');\n  background-size: cover;\n  height: 800px;\n  position: relative;\n}\n.dashboard-admin .row .history-log {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('history-log.jpg');\n  background-size: cover;\n  height: 800px;\n  position: relative;\n  cursor: pointer;\n}\n.dashboard-admin .row .title-for-card {\n  position: absolute;\n  bottom: 8px;\n  left: 16px;\n  color: var(--primary-background);\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.title-p {\n  color: #24398A;\n  font-size: 48px;\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-admin/admin-dasboard/admin-dasboard.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;AAkBF;AAfI;EACE,aAAA;EACA,mBAAA;AAiBN;AAhBM;EACE,kBAAA;EACA,kFAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AAiBR;AAdM;EACE,kBAAA;EACA,iFAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AAeR;AAZM;EACE,kBAAA;EACA,yFAAA;EAEA,sBAAA;EACA,aAAA;AAaR;AAVM;EACE,kBAAA;EACA,8EAAA;EAEA,sBAAA;EACA,aAAA;AAWR;AARM;EACE,kBAAA;EACA,6EAAA;EAEA,sBAAA;EACA,aAAA;AASR;AANM;EACE,kBAAA;EACA,UAAA;EACA,UAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;AAQR;;AAEA;EACE,gBAAA;EACA,mBAAA;AACF;AACE;EACE,aAAA;AACJ;AACI;EACE,kBAAA;EACA,kFAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AAAN;AAGI;EACE,kBAAA;EACA,mFAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;AAFN;AAKI;EACE,kBAAA;EACA,WAAA;EACA,UAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;AAHN;;AAYA;EACE,cD7Gc;EC8Gd,eAAA;EACA,gBAAA;AATF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\n.dashboard-staff{\n  margin-top:40px;\n  margin-bottom: 40px;\n\n  .dashboard-cards {\n    .row{\n      row-gap: 24px;\n      margin-bottom: 24px;\n      .resources{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"../../../../assets/images/others/staff/resourcess.jpg\");\n        background-size: cover;\n        height: 300px;\n        position: relative;\n      }\n\n      .templates{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"../../../../assets/images/others/staff/templates.jpg\");\n        background-size: cover;\n        height: 300px;\n        position:relative;\n      }\n\n      .editorials{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"../../../../assets/images/others/staff/editorials.jpg\") center;\n        background-size: cover;\n        height: 300px;\n      }\n\n      .events{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"~src/assets/images/others/staff/events.jpg\");\n        background-size: cover;\n        height: 300px;\n      }\n\n      .trips{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"../../../../assets/images/others/staff/trips.jpg\");\n        background-size: cover;\n        height: 300px;\n      }\n\n      .title-for-card{\n        position:relative;\n        top:215px;\n        left:16px;\n        color:var(--primary-background);\n        font-size: 48px;\n        font-weight: 500;\n      }\n\n    }\n  }\n\n\n\n}\n\n.dashboard-admin{\n  margin-top:40px;\n  margin-bottom: 40px;\n\n  .row{\n    row-gap: 24px;\n\n    .staff-list{\n      border-radius: 8px;\n      background: linear-gradient(to right, $primary-color, transparent),\n      url(\"../../../../assets/images/others/admin/staff-list.jpg\");\n      background-size: cover;\n      height: 800px;\n      position: relative;\n    }\n\n    .history-log{\n      border-radius: 8px;\n      background: linear-gradient(to right, $primary-color, transparent),\n      url(\"../../../../assets/images/others/admin/history-log.jpg\");\n      background-size: cover;\n      height: 800px;\n      position:relative;\n      cursor: pointer;\n    }\n\n    .title-for-card{\n      position:absolute;\n      bottom: 8px;\n      left:16px;\n      color:var(--primary-background);\n      font-size: 24px;\n      font-weight: 500;\n    }\n  }\n\n}\n\n\n\n\n.title-p{\n  color:$primary-color;\n  font-size: 48px;\n  font-weight: 700;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8880:
/*!***************************************************************************************!*\
  !*** ./src/app/features/role-admin/admin-inbox/admin-inbox.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.inbox-container {\n  background-color: var(--primary-background);\n  padding: 0px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.inbox-container #inboxTab {\n  border: none;\n  height: 54px;\n  background-color: var(--secondary-background);\n  color: #231F20;\n}\n.inbox-container #inboxTab .nav-item {\n  width: 25%;\n}\n.inbox-container #inboxTab .nav-item button {\n  width: 100%;\n  height: 100%;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.inbox-container #inboxTab .nav-item button.active {\n  border: #FFFFFF 1px solid;\n  border-radius: 0px;\n  margin: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-admin/admin-inbox/admin-inbox.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AAkBJ;;AAZI;EACM,YAAA;EACA,YAAA;EACA,6CAAA;EACA,cDVE;ACyBZ;AAbQ;EACI,UAAA;AAeZ;AAbY;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cDxBJ;ACuCZ;AAZY;EACI,yBAAA;EACA,kBAAA;EACA,WAAA;AAchB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\n.inbox-container{\n    background-color: var(--primary-background);\n    padding:0px;\n    border-radius: 8px;\n    overflow: hidden;\n}\n\n.inbox-container{\n\n    //tabs styling\n    #inboxTab{\n          border: none;\n          height: 54px;\n          background-color: var(--secondary-background);\n          color:$paragraph;\n\n        .nav-item{\n            width: 25%;\n\n            button{\n                width:100%;\n                height:100%;\n                font-weight: 600;\n                font-size: 16px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                letter-spacing: -0.02em;\n                color: $paragraph;\n\n            }\n            button.active{\n                border:$background-primary 1px solid;\n                border-radius: 0px;\n                margin: 0px;\n            }\n        }\n    } // end tabs styling\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 64715:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/role-admin/view-messages-admin/view-messages-admin.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.view-message-container {\n  background-color: var(--primary-background);\n  padding: 0px;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.view-message-container button.join-leave-button {\n  min-width: 110px;\n}\n.view-message-container button.join-leave-button i {\n  color: white;\n}\n\n.hidden-info {\n  padding: 16px;\n  background: rgba(36, 57, 138, 0.08);\n}\n.hidden-info h4 {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.hidden-info p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.hidden-info i {\n  margin: 4px;\n}\n.hidden-info .red {\n  color: red;\n}\n.hidden-info .opacity {\n  opacity: 0.5;\n}\n\n.info-not-display {\n  display: none;\n}\n\n.info-display {\n  display: block;\n}\n\n.conversation-header-class {\n  padding: 16px 24px;\n  gap: 8px;\n  height: 90px;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n}\n.conversation-header-class img {\n  width: 58px;\n  height: 58px;\n  border-radius: 100px;\n}\n.conversation-header-class h4 {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.conversation-header-class p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  color: #24398A;\n  opacity: 0.48;\n  margin-bottom: 0px;\n}\n.conversation-header-class i {\n  width: 18px;\n  height: 18px;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 140%;\n  /* or 17px */\n  letter-spacing: 0.1px;\n  /* Primary */\n  color: #24398A;\n}\n\n.conversation-component-container {\n  padding: 16px 24px;\n  gap: 8px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-admin/view-messages-admin/view-messages-admin.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAkBJ;AAhBI;EACI,gBAAA;AAkBR;AAjBQ;EACI,YAAA;AAmBZ;;AAbA;EACI,aAAA;EACA,mCAAA;AAgBJ;AAfI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDnBI;ECoBJ,kBAAA;AAiBR;AAfI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD1BI;EC4BJ,kBAAA;AAgBR;AAdI;EACI,WAAA;AAgBR;AAdI;EACI,UAAA;AAgBR;AAdI;EACI,YAAA;AAgBR;;AAZA;EACI,aAAA;AAeJ;;AAbA;EACI,cAAA;AAgBJ;;AAbA;EACI,kBAAA;EACA,QAAA;EACA,YAAA;EACA,4FAAA;EACA,2CAAA;AAgBJ;AAdI;EACI,WAAA;EACA,YAAA;EACA,oBAAA;AAgBR;AAdI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDhEI;ECiEJ,kBAAA;AAgBR;AAdI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD5EQ;EC6ER,aAAA;EACA,kBAAA;AAgBR;AAdI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAGA,qBAAA;EAEA,YAAA;EAEA,cD9FQ;AC0GhB;;AATA;EACI,kBAAA;EACA,QAAA;AAYJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\n.view-message-container{\n    background-color: var(--primary-background);\n    padding:0px;\n    border-radius: 8px;\n    overflow: hidden;\n    margin-bottom:20px;\n\n    button.join-leave-button{\n        min-width:110px;\n        i{\n            color:white\n\n        }\n    }\n}\n\n.hidden-info{\n    padding:16px;\n    background: rgba(36, 57, 138, 0.08);\n    h4{\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 140%;\n        color: $paragraph;\n        margin-bottom: 0px;\n    }\n    p{\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 140%;\n        color: $paragraph;\n        // opacity: 0.48;\n        margin-bottom:0px;\n    }\n    i{\n        margin:4px;\n    }\n    .red{\n        color: red;\n    }\n    .opacity{\n        opacity: 0.5;\n    }\n}\n\n.info-not-display{\n    display: none;\n}\n.info-display{\n    display: block;\n}\n\n.conversation-header-class{\n    padding: 16px 24px;\n    gap: 8px;\n    height: 90px;\n    background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n\n    img{\n        width: 58px;\n        height: 58px;\n        border-radius: 100px;\n    }\n    h4{\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 140%;\n        color: $paragraph;\n        margin-bottom: 0px;\n    }\n    p{\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 140%;\n        color: $primary-color;\n        opacity: 0.48;\n        margin-bottom:0px;\n    }\n    i{\n        width: 18px;\n        height: 18px;\n        font-style: normal;\n        font-weight: 900;\n        font-size: 12px;\n        line-height: 140%;\n        /* or 17px */\n\n\n        letter-spacing: 0.1px;\n\n        /* Primary */\n\n        color: $primary-color;\n    }\n}\n.conversation-component-container{\n    padding: 16px 24px;\n    gap: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 46521:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/staff-management/_components/staff-card/staff-card.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-staff.card > div {\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), var(--primary-background);\n}\n\n.card-staff.card {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.card-staff.card .card-body {\n  gap: 1rem;\n}\n.card-staff.card .card-body .img-container {\n  position: relative;\n}\n.card-staff.card .card-body .img-container img {\n  height: 6rem;\n  width: 6rem;\n  border-radius: 100%;\n  object-fit: cover;\n}\n.card-staff.card .card-body .img-container button {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 24px;\n  height: 24px;\n  border: 2px solid var(--primary-background);\n}\n.card-staff.card .card-body .img-container button i {\n  font-size: 10px;\n}\n.card-staff.card .card-body div {\n  letter-spacing: -0.02em;\n  line-height: 140%;\n  color: #24398A;\n}\n.card-staff.card .card-body div h3 {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 140%;\n  margin-bottom: 4px;\n}\n.card-staff.card .card-body div p {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 140%;\n  margin-bottom: 5px;\n}\n.card-staff.card .card-footer .row {\n  row-gap: 1rem;\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n}\n.modal-card.card .card-header h3 {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n.modal-card.card .card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.modal-card.card .card-body .card-staff {\n  border: 1px solid #24398A;\n}\n.modal-card.card .card-footer .row {\n  row-gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/staff-management/_components/staff-card/staff-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,2CAAA;AAkBF;;AAfA;EACE,8GAAA;AAkBF;;AAfA;EACE,yCAAA;EACA,kBAAA;EACA,gBAAA;AAkBF;AAhBE;EACE,SAAA;AAkBJ;AAhBI;EACE,kBAAA;AAkBN;AAhBM;EACE,YAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;AAkBR;AAfM;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,2CAAA;AAiBR;AAfQ;EACE,eAAA;AAiBV;AAXI;EACE,uBAAA;EACA,iBAAA;EACA,cD7CU;AC0DhB;AAXM;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAaR;AAVM;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAYR;AALI;EACE,aAAA;AAON;;AAFA;EACE,eAAA;AAKF;AAFI;EACE,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,cD/EU;ACmFhB;AACI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDpFM;ACqFZ;AAEI;EACE,yBAAA;AAAN;AAMI;EACE,aAAA;AAJN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-staff.card > div {\n  background: linear-gradient(0deg, rgba($primary-color, 0.04), rgba($primary-color, 0.04)), var(--primary-background);\n}\n\n.card-staff.card {\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n\n  .card-body {\n    gap: 1rem;\n\n    .img-container {\n      position: relative;\n\n      img {\n        height: 6rem;\n        width: 6rem;\n        border-radius: 100%;\n        object-fit: cover;\n      }\n\n      button {\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        width: 24px;\n        height: 24px;\n        border: 2px solid var(--primary-background);\n\n        i {\n          font-size: 10px;\n        }\n      }\n\n    }\n\n    div {\n      letter-spacing: -0.02em;\n      line-height: 140%;\n      color: $primary-color;\n\n      h3 {\n        font-weight: 700;\n        font-size: 24px;\n        line-height: 140%;\n        margin-bottom: 4px;\n      }\n\n      p {\n        font-weight: 300;\n        font-size: 16px;\n        line-height: 140%;\n        margin-bottom: 5px;\n      }\n    }\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n\n  .card-header {\n    h3 {\n      font-size: 24px;\n      font-weight: 600;\n      letter-spacing: -0.02em;\n      color: $primary-color;\n    }\n  }\n\n  .card-body {\n    & > p {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n    }\n\n    .card-staff {\n      border: 1px solid $primary-color ;\n    }\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 40845:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/staff-management/add-edit-staff/add-edit-staff.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.card {\n  margin-bottom: 1rem;\n}\n.card .card-header {\n  padding-top: 50px;\n}\n.card .card-header h3 {\n  margin: 0;\n}\n.card .card-body mat-form-field {\n  width: 100%;\n}\n.card .card-body .modules-row, .card .card-body .modules-header {\n  padding: 16px 0;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #34A853;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #34A853;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/staff-management/add-edit-staff/add-edit-staff.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDRY;ECSZ,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAbA;EACE,2CAAA;AAgBF;;AAbA;EACE,mBAAA;AAgBF;AAdE;EACE,iBAAA;AAgBJ;AAdI;EACE,SAAA;AAgBN;AAVI;EACE,WAAA;AAYN;AANI;EACE,eAAA;AAQN;AAKA;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AAHF;;AAMA;EACE,UAAA;EACA,QAAA;EACA,SAAA;AAHF;;AAMA;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EAEA,gBAAA;AAHF;;AAMA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EAEA,gBAAA;AAHF;;AAMA;EAEE,yBDjDgB;AC6ClB;;AAOA;EACE,2BAAA;AAJF;;AAOA;EAGE,2BAAA;AAJF;;AAOA,oBAAA;AACA;EACE,mBAAA;AAJF;;AAOA;EACE,kBAAA;AAJF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.card {\n  margin-bottom: 1rem;\n\n  .card-header {\n    padding-top: 50px;\n\n    h3 {\n      margin: 0;\n    }\n  }\n\n  .card-body {\n\n    mat-form-field {\n      width: 100%;\n    }\n\n\n\n\n    .modules-row, .modules-header{\n      padding: 16px 0;\n    }\n\n\n  }\n\n  .card-footer {\n\n  }\n}\n\n\n//-------------------SWITCHES-----------------\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  //background-color: #2196F3;\n  background-color: $active-btn-color;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px $active-btn-color;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n//------------------------SWITCHES END---------------------------\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 92520:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/staff-management/staff-list/staff-list.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.card {\n  margin-bottom: 1rem;\n}\n.card .card-header {\n  padding-top: 50px;\n}\n.card .card-body .row {\n  row-gap: 1.5rem;\n}\n.card .card-footer p {\n  margin: 0;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 16px;\n}\n\nmat-icon {\n  color: rgba(36, 57, 138, 0.24);\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/staff-management/staff-list/staff-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDRY;ECSZ,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAbA;EACE,2CAAA;AAgBF;;AAbA;EACE,mBAAA;AAgBF;AAdE;EACE,iBAAA;AAgBJ;AAXI;EACE,eAAA;AAaN;AAPI;EACE,SAAA;EACA,cDvCU;ECwCV,gBAAA;EACA,eAAA;AASN;;AAJA;EACE,8BAAA;EACA,eAAA;AAOF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.card {\n  margin-bottom: 1rem;\n\n  .card-header {\n    padding-top: 50px;\n  }\n\n  .card-body {\n\n    .row {\n      row-gap: 1.5rem;\n    }\n  }\n\n  .card-footer {\n\n    p {\n      margin: 0;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 16px;\n    }\n  }\n}\n\nmat-icon{\n  color: rgba($primary-color, 0.24);\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 78825:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/role-admin/admin-conversation-item-card/admin-conversation-item-card.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <p class=\"my-2\">Messages</p>\n\n    <!-- my conversations -->\n    <div *ngIf=\"categoryConversation === 'myConversations'\">\n        <div *ngFor=\"let conversation of myActiveConversationsList\"   class=\"conv-item-card my-3\">\n            <div class=\"d-flex justify-content-between align-items-center  my-2\">\n                <div routerLink=\"/private/admin/inbox/{{conversation.id}}\" class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                    <img class=\"img-class\" src=\"../../../../../../../assets/images/others/user.jpg\">\n                    <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                        <h4>{{conversation.name}}</h4><!--de verificat daca trebuie numele userului numele problemei-->\n                        <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                        <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                    </div>\n                </div>\n\n                <div class=\"d-flex justify-content-end align-items-center second-half-conv-item gap-2 conv-handling-class\">\n                    <p>{{conversation.date | date: 'EEEE,d MMMM HH:mm'}}</p>\n                    <button (click)=\"leaveConversation(conversation.id)\" class=\"btn-long btn-color-fill\"><i class=\"fas fa-sign-out-alt\"></i>Leave</button>\n                </div>\n            </div>\n        </div>\n         <!--Pagination-->\n         <mat-paginator\n         [pageSizeOptions]=\"pageItems\"\n         [length]=\"totalMyConversation\"\n         [pageSize]=\"pageSize\"\n         (page)=\"pageChanged($event)\"\n        >\n        </mat-paginator>\n    </div>\n\n    <!-- Unassigned conversation -->\n    <div *ngIf=\"categoryConversation === 'unassignedConversations'\">\n        <div *ngFor=\"let conversation of unassignedConversationsList\"  class=\"conv-item-card my-3\">\n            <div class=\"d-flex justify-content-between align-items-center  my-3\">\n                <div routerLink=\"/private/admin/inbox/{{conversation.id}}\" class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                    <img class=\"img-class\" src=\"../../../../../../../assets/images/others/user.jpg\">\n                    <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                        <h4>{{conversation.name}}</h4><!--de verificat daca trebuie numele userului numele problemei-->\n                        <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                        <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                    </div>\n                </div>\n                <div class=\"d-flex justify-content-end align-items-center second-half-conv-item gap-2 conv-handling-class\">\n                    <p>{{conversation.date | date: 'EEEE,d MMMM HH:mm'}}</p>\n                    <button (click)=\"joinConversation(conversation.id, currentUser)\" class=\"btn-long btn-color-fill\"><i class=\"fas fa-sign-in-alt\"></i> Join</button>\n                </div>\n            </div>\n        </div>\n\n        <!--Pagination-->\n        <mat-paginator\n        [pageSizeOptions]=\"pageItems\"\n        [length]=\"totalUnassignedConversation\"\n        [pageSize]=\"pageSize\"\n        (page)=\"pageChanged($event)\"\n       >\n       </mat-paginator>\n    </div>\n\n\n    <!-- my closed conversations -->\n    <div *ngIf=\"categoryConversation === 'myClosedConversations'\">\n        <div *ngFor=\"let conversation of myClosedConversationsList\"  class=\"conv-item-card my-3\">\n            <div class=\"d-flex justify-content-between align-items-center p-2 my-3\">\n                <div routerLink=\"/private/admin/inbox/{{conversation.id}}\" class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                    <img class=\"img-class\" src=\"../../../../../../../assets/images/others/user.jpg\">\n                    <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                        <h4>{{conversation.name}}</h4><!--de verificat daca trebuie numele userului numele problemei-->\n                        <!-- <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p> -->\n                        <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                    </div>\n                </div>\n                <div class=\"d-flex justify-content-end align-items-center second-half-conv-item gap-2 conv-handling-class\">\n                    <p>{{conversation.date | date: 'EEEE,d MMMM HH:mm'}}</p>\n                    <!-- <button (click)=\"joinConversation(currentUser, conversation.id)\" class=\"btn-long btn-color-fill\" disabled><i class=\"fas fa-sign-in-alt\"></i> Join</button> -->\n                </div>\n            </div>\n        </div>\n\n        <!--Pagination-->\n        <mat-paginator\n        [pageSizeOptions]=\"pageItems\"\n        [length]=\"totalMyClosedConversations\"\n        [pageSize]=\"pageSize\"\n        (page)=\"pageChanged($event)\"\n        >\n        </mat-paginator>\n    </div>\n\n\n    <!--all conversation-->\n    <div *ngIf=\"categoryConversation === 'allConversations'\">\n        <div *ngFor=\"let conversation of allConversationsList\"  class=\"conv-item-card my-3 d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap\">\n            <!-- <div *ngFor=\"let participant of conversation.participants\"> -->\n\n            <!-- <div *ngFor=\"let participant of conversation.participants\">\n\n            </div> -->\n            <div class=\"d-flex col-12 col-lg-7 justify-content-between align-items-center my-3\">\n                <!-- Staff -->\n                <div routerLink='/private/admin/inbox/{{conversation.id}}' class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                    <img class=\"img-class\" src=\"../../../../../../../assets/images/others/user.jpg\">\n                    <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                        <h4>{{conversation?.name}}</h4>\n                        <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                        <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                    </div>\n                </div>\n\n                <div class=\"d-flex align-items-center second-half-conv-item\">\n                    <p>{{conversation.date | date: 'EEEE,d MMMM HH:mm'}}</p>\n                </div>\n            </div>\n\n            <div class=\"d-flex col-12 col-lg-5 justify-content-between align-items-center buttons-part\">\n                <div class=\"col-md-6\">\n                    <p>Chat controlled by:</p>\n                    <div *ngFor=\"let participant of conversation.participants\">\n                        <div *ngIf=\"participant.userId !== conversation.userId\">\n                            <h5 class=\"chat-controlled-by-you\"> {{ participant.userName }}</h5>\n                        </div>\n                    </div>\n                    <div *ngIf=\"(conversation.participants.length === 1)\">\n                        <h5 class=\"chat-controlled-by-you\"> None</h5>\n                    </div>\n                    <!-- <h5 class=\"chat-controlled-by-others\">None</h5> -->\n                </div>\n                <div  class=\"d-flex justify-content-end align-items-center gap-2 col-md-6 conv-handling-class flex-wrap flex-md-nowrap\" >\n                    \n                    <button *ngIf=\"alreadyJoiedCheck(conversation) === false\" class=\"btn-long btn-color-fill\" (click)=\"joinConversation(conversation.id,currentUser)\"><i class=\"fas fa-sign-in-alt\"></i> Join</button>\n                    <button *ngIf=\"alreadyJoiedCheck(conversation) === true\" class=\"btn-long btn-color-fill\" (click)=\"leaveConversation(conversation.id)\"><i class=\"fas fa-sign-out-alt\"></i> Leave</button>\n                </div>\n            </div>\n\n            <!-- </div> -->\n        </div>\n\n        <!--Pagination-->\n        <mat-paginator\n        [pageSizeOptions]=\"pageItems\"\n        [length]=\"allConversations\"\n        [pageSize]=\"pageSize\"\n        (page)=\"pageChanged($event)\"\n        >\n        </mat-paginator>\n    </div>\n\n\n\n    <!-- <div routerLink=\"\"  class=\"conv-item-card d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap my-3\">\n        <div class=\"d-flex col-12 col-lg-7 justify-content-between align-items-center p-2 my-3\">\n            <div class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                <img class=\"img-class\" src=\"../../../../../../../assets/images/others/user.jpg\">\n                <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                    <h4>Popa Vasilescu</h4>\n                    <p>Incepeti o conversatie!</p>\n                     <p>{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                </div>\n            </div>\n            <div class=\"d-flex align-items-center second-half-conv-item\">\n                <p>2/03/2022</p>\n            </div>\n        </div>\n\n        <div class=\"d-flex col-12 col-lg-5 justify-content-between align-items-center buttons-part\">\n            <div class=\"col-md-6\">\n                <p>Chat controlled by:</p>\n                <h5 class=\"chat-controlled-by-you\">(You) Max Wellson</h5>\n                 <h5 class=\"chat-controlled-by-others\">None</h5>\n            </div>\n            <div  class=\"d-flex justify-content-end align-items-center gap-2 col-md-6 conv-handling-class flex-wrap flex-md-nowrap\">\n                <button class=\"btn-long btn-color-fill\" disabled><i class=\"fas fa-sign-in-alt\"></i> Join</button>\n                <button class=\"btn-long btn-color-fill\"><i class=\"fas fa-sign-out-alt\"></i> Leave</button>\n\n            </div>\n        </div>\n    </div> -->\n</div>\n";

/***/ }),

/***/ 87557:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/role-admin/admin-dasboard/admin-dasboard.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <div *ngIf=\"isAdmin\" class=\"row dashboard-admin\">\n        <p class=\"title-p\">\n            {{'TITLES.CONTROL-PANEL' | translate}}\n        </p>\n\n        <div class=\"dashboard-cards-admin\">\n            <div class=\"row\">\n                <div class=\"col-12 col-md-6\" role=\"button\" routerLink=\"/private/admin/manage-staff\">\n                    <div class=\"staff-list\">\n                        <p class=\"title-for-card mb-0\">{{'TITLES.STAFF-LIST' | translate}}</p>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-6\" role=\"button\" routerLink=\"/private/admin/logs/list\">\n                    <div class=\"history-log\">\n                        <p class=\"title-for-card mb-0\">{{'TITLES.HISTORY-LOG' | translate}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 31872:
/*!***************************************************************************************!*\
  !*** ./src/app/features/role-admin/admin-inbox/admin-inbox.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Title bar-->\n<div ngclass=\"container-fluid\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Inbox\"\n        [buttonBackRoute]=\"'../dashboard'\">\n        </app-dashboard-header>\n    </div>\n\n\n    <!-- Tabs -->\n    <div  class=\"container inbox-container \">\n        <ul class=\"nav nav-tabs\" id=\"inboxTab\" role=\"tablist\" >\n            <!-- Myconversation -->\n            <li class=\"nav-item\" role=\"presentation\">\n              <button class=\"nav-link active\" id=\"my-conversation-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#myConversation\" type=\"button\" role=\"tab\" aria-controls=\"myConversation\" aria-selected=\"false\">Conversațiile mele</button>\n            </li>\n\n            <!-- Bestinform Support -->\n            <li class=\"nav-item\" role=\"presentation\">\n                <button class=\"nav-link\" id=\"bestinform-support-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#bestinformSupport\" type=\"button\" role=\"tab\" aria-controls=\"bestinformSupport\" aria-selected=\"false\">Bestinform Support</button>\n            </li>\n\n            <!-- Closed conversation -->\n            <li class=\"nav-item\" role=\"presentation\">\n                <button class=\"nav-link\" id=\"closed-conversation-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#closedConversation\" type=\"button\" role=\"tab\" aria-controls=\"closedConversation\" aria-selected=\"false\">Conversații închise</button>\n            </li>\n\n            <!-- All Bestinform Support -->\n            <li  class=\"nav-item\" role=\"presentation\">\n                    <button *ngIf=\"isAdmin\" class=\"nav-link\" id=\"all-bestinform-support-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#allBestinformSupport\" type=\"button\" role=\"tab\" aria-controls=\"allBestinformSupport\" aria-selected=\"false\">Toate conversațiile</button>\n            </li>\n\n          </ul>\n\n\n        <!-- Content of tabs -->\n        <div class=\"tab-content\" id=\"myTabContent\">\n            <!-- Content booking suport -->\n            <div class=\"tab-pane fade show active\" id=\"myConversation\" role=\"tabpanel\" aria-labelledby=\"booking-support-tab\">\n                <app-admin-conversation-item-card [categoryConversation]=\"'myConversations'\"></app-admin-conversation-item-card>\n            </div>\n\n            <!-- Content bestinform suport -->\n            <div class=\"tab-pane fade\" id=\"bestinformSupport\" role=\"tabpanel\" aria-labelledby=\"bestinform-support-tab\">\n              <app-admin-conversation-item-card [categoryConversation]=\"'unassignedConversations'\"></app-admin-conversation-item-card>\n\n            </div>\n\n            <!-- Closed conversation -->\n            <div class=\"tab-pane fade\" id=\"closedConversation\" role=\"tabpanel\" aria-labelledby=\"closed-conversation-tab\">\n                <app-admin-conversation-item-card [categoryConversation]=\"'myClosedConversations'\"></app-admin-conversation-item-card>\n            </div>\n\n            <!-- All Bestinform Support -->\n            <div class=\"tab-pane fade\" id=\"allBestinformSupport\" role=\"tabpanel\" aria-labelledby=\"all-bestinform-support-tab\">\n                <app-admin-conversation-item-card [categoryConversation]=\"'allConversations'\"></app-admin-conversation-item-card>\n            </div>\n        </div>\n\n    </div>\n\n\n</div>\n";

/***/ }),

/***/ 56708:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/role-admin/view-messages-admin/view-messages-admin.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Title bar-->\n<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Mesagerie\"\n        [buttonBackRoute]=\"'../../inbox'\">\n        </app-dashboard-header>\n    </div>\n\n    <div *ngIf=\"convParticipantData\" class=\"container view-message-container\">\n        <!--Reservation-->\n        <div  class=\"conversation-header-class d-flex justify-content-between align-items-center\">\n            <!-- img, name, email -->\n            <div class=\"d-flex justify-content-start align-items-center gap-3\">\n                <img src=\"{{((currentConversation?.featuredImage !== null) && (currentConversation?.featuredImage?.filePath !== 'string')) ? currentConversation?.featuredImage?.filePath : '../../../../../../../assets/images/others/user.jpg'}}\">\n                <div>\n                    <h4>{{convParticipantData?.firstName +' '+ convParticipantData?.lastName}} - {{currentConversation?.name}}</h4>\n                    <p>{{convParticipantData?.email}}</p>\n                </div>\n            </div>\n         <!-- info button -->\n         <div class=\"d-flex align-items-center gap-2\" >\n            <!-- info conversation -->\n            <button *ngIf=\"(currentConversation?.category === 'reservation')\" (click)=\"displayInfo()\" class=\"btn-round btn-color-outline\"><i class=\"fas fa-info\"></i></button>\n            <!-- join conversation -->\n            <button *ngIf=\"!alreadyJoined\" class=\"btn-long btn-color-fill join-leave-button\" (click)=\"joinConversation(currentConversation?.id, currentUserId)\"><i class=\"fas fa-sign-in-alt\"></i> Join</button>\n            <!-- leave conversation -->\n            <button *ngIf=\"alreadyJoined\" class=\"btn-long btn-color-fill join-leave-button\" (click)=\"leaveConversation(currentConversation?.id)\"><i class=\"fas fa-sign-out-alt\"></i> Leave</button>\n                    </div>\n\n        </div>\n\n         <!--info button-->\n         <div [ngClass]=\"openedInfo ? 'info-display' : 'info-not-display'\">\n            <div class=\"hidden-info row align-items-center\" *ngIf=\"(currentConversation?.category === 'reservation')\" >\n                <div class=\"col-4\">\n                    <h4>Reservation nr. {{reservationData?.reservationNumber}}</h4>\n                    <p class=\"opacity\">{{reservationData?.name}}</p>\n                </div>\n                <div class=\"col-4\">\n                    <p><i class=\"fas fa-envelope\"></i> {{convParticipantData?.email}}</p>\n                    <p><i class=\"fas fa-phone-alt\"></i>{{convParticipantData?.telephone}}</p>\n                </div>\n                <div class=\"col-4 d-flex justify-content-end align-items-center gap-2\">\n                    <p><i class=\"fas fa-ban\"></i> cancel reservation</p>\n                    <p class=\"red opacity\"><i class=\"fas fa-exclamation-triangle\"></i> report user</p>\n                </div>\n            </div>\n         </div>\n\n\n        <div class=\"conversation-component-container\">\n            <app-conversation [conversationID]=\"conversationId\"></app-conversation>\n        </div>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 64932:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/staff-management/_components/staff-card/staff-card.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card-staff card h-100\">\n    <div class=\"card-body d-flex justify-content-start align-items-center\">\n        <div class=\"img-container\">\n            <img [src]=\"user.avatar.filePath\" alt=\"profile-picture\">\n            <button class=\"btn-round btn-color-fill\" routerLink=\"/private/admin/manage-staff/edit/{{user.id}}\" id=\"editStaffBtn_{{index}}\">\n                <i class=\"fas fa-pen\"></i>\n            </button>\n        </div>\n\n        <div class=\"d-flex flex-column\">\n            <h3>{{ user.firstName + ' ' + user.lastName }}</h3>\n            <p>{{ user.email }}</p>\n            <p class=\"m-0\">\n                <i class=\"fas fa-shield-alt\"></i>\n                Staff Member\n            </p>\n        </div>\n    </div>\n\n    <div class=\"card-footer border-0\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-6\">\n                <button *ngIf=\"user.activeStatus\" class=\"btn-auto btn-color-fill w-100\"  (click)=\"openModal(deactivateAccount)\" id=\"deactivateStaffBtn_{{index}}\">\n                    <i class=\"fas fa-ban\"></i>\n                    {{'BTN.DEACTIVATE' | translate}}\n                </button>\n\n                <button *ngIf=\"!user.activeStatus\" class=\"btn-auto btn-color-fill w-100\"  (click)=\"openModal(activateAccount)\" id=\"deactivateStaffBtn_{{index}}\">\n                    <i class=\"fas fa-check\"></i>\n                    {{'BTN.ACTIVATE' | translate}}\n                </button>\n            </div>\n\n\n            <div class=\"col-12 col-sm-6\">\n                <button class=\"btn-auto btn-color-outline w-100\" (click)=\"openModal(deleteAccount)\" id=\"deleteStaffBtn_{{index}}\">\n                    <i class=\"fas fa-user-times\"></i>\n                    {{'BTN.DELETE' | translate}}\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--Modal Templates DELETE ACCOUNT-->\n<ng-template #deleteAccount let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-card card\">\n        <div class=\"card-header border-0\">\n            <h3 class=\"m-0\">\n                {{ 'GENERAL.DELETE_ACCOUNT' | translate }}\n            </h3>\n        </div>\n\n        <div class=\"card-body\">\n            <p>{{ 'MESSAGE.ACCOUNT_DELETE_WARNING' | translate}}</p>\n\n            <div class=\"card-staff card\">\n                <div class=\"card-body d-flex justify-content-start align-items-center\">\n                    <div class=\"img-container\">\n                        <img [src]=\"user.avatar.filePath\" alt=\"profile-picture\">\n                    </div>\n\n                    <div class=\"d-flex flex-column\">\n                        <h3>{{ user.firstName + ' ' + user.lastName }}</h3>\n                        <p>{{ user.email }}</p>\n                        <p class=\"m-0\">\n                            <i class=\"fas fa-shield-alt\"></i>\n                            Staff Member\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card-footer border-0\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-6\">\n                    <button class=\"btn-auto btn-color-outline w-100\" (click)=\"d()\" id=\"cancelDeleteStaffBtn\">\n                        <i class=\"fas fa-times\"></i>\n                        {{ 'BTN.CANCEL' | translate}}\n                    </button>\n                </div>\n\n                <div class=\"col-12 col-sm-6\">\n                    <button class=\"btn-auto btn-color-fill w-100\" id=\"confirmDeleteStaffBtn\" (click)=\"deleteStaffAccount()\">\n                        <i class=\"fas fa-check\"></i>\n                        {{ 'BTN.CONFIRM' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<!--DEACTIVATE ACCOUNT-->\n<ng-template #deactivateAccount let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-card card\">\n        <div class=\"card-header border-0\">\n            <h3 class=\"m-0\">\n                {{ 'GENERAL.DEACTIVATE_ACCOUNT' | translate }}\n            </h3>\n        </div>\n\n        <div class=\"card-body\">\n            <p>{{ 'MESSAGE.ACCOUNT_DEACTIVATE_WARNING' | translate}}</p>\n\n            <div class=\"card-staff card\">\n                <div class=\"card-body d-flex justify-content-start align-items-center\">\n                    <div class=\"img-container\">\n                        <img [src]=\"user.avatar.filePath\" alt=\"profile-picture\">\n<!--                        <button class=\"btn-round btn-color-fill\" routerLink=\"/dashboard/staff-management/edit/{{user.id}}\">-->\n<!--                            <i class=\"fas fa-pen\"></i>-->\n<!--                        </button>-->\n                    </div>\n\n                    <div class=\"d-flex flex-column\">\n                        <h3>{{ user.firstName + ' ' + user.lastName }}</h3>\n                        <p>{{ user.email }}</p>\n                        <p class=\"m-0\">\n                            <i class=\"fas fa-shield-alt\"></i>\n                            Staff Member\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card-footer border-0\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-6\">\n                    <button class=\"btn-auto btn-color-outline w-100\" (click)=\"d()\" id=\"cancelDeactivateStaffBtn\">\n                        <i class=\"fas fa-times\"></i>\n                        {{ 'BTN.CANCEL' | translate}}\n                    </button>\n                </div>\n\n                <div class=\"col-12 col-sm-6\">\n                    <button class=\"btn-auto btn-color-fill w-100\" (click)=\"deactivateStaffAccount()\" id=\"confirmDeactivateStaffBtn\">\n                        <i class=\"fas fa-check\"></i>\n                        {{ 'BTN.CONFIRM' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<!--ACTIVATE ACCOUNT-->\n<ng-template #activateAccount let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-card card\">\n        <div class=\"card-header border-0\">\n            <h3 class=\"m-0\">\n                {{ 'GENERAL.ACTIVATE_ACCOUNT' | translate }}\n            </h3>\n        </div>\n\n        <div class=\"card-body\">\n            <p>{{ 'MESSAGE.ACCOUNT_ACTIVATE_WARNING' | translate}}</p>\n\n            <div class=\"card-staff card\">\n                <div class=\"card-body d-flex justify-content-start align-items-center\">\n                    <div class=\"img-container\">\n                        <img [src]=\"user.avatar.filePath\" alt=\"profile-picture\">\n                        <!--                        <button class=\"btn-round btn-color-fill\" routerLink=\"/dashboard/staff-management/edit/{{user.id}}\">-->\n                        <!--                            <i class=\"fas fa-pen\"></i>-->\n                        <!--                        </button>-->\n                    </div>\n\n                    <div class=\"d-flex flex-column\">\n                        <h3>{{ user.firstName + ' ' + user.lastName }}</h3>\n                        <p>{{ user.email }}</p>\n                        <p class=\"m-0\">\n                            <i class=\"fas fa-shield-alt\"></i>\n                            Staff Member\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card-footer border-0\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-6\">\n                    <button class=\"btn-auto btn-color-outline w-100\" (click)=\"d()\" id=\"cancelActivateStaffBtn\">\n                        <i class=\"fas fa-times\"></i>\n                        {{ 'BTN.CANCEL' | translate}}\n                    </button>\n                </div>\n\n                <div class=\"col-12 col-sm-6\">\n                    <button class=\"btn-auto btn-color-fill w-100\" (click)=\"activateStaffAccount()\" id=\"confirmActivateStaffBtn\">\n                        <i class=\"fas fa-check\"></i>\n                        {{ 'BTN.CONFIRM' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>";

/***/ }),

/***/ 34030:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/staff-management/add-edit-staff/add-edit-staff.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\" {{ isEditMode\n                            ? ('STAFF.EDIT_STAFF_MEMBER' | translate)\n                            : ('STAFF.ADD_STAFF_MEMBER' | translate) }}\"\n                          [buttonBackRoute]=\"isEditMode ? '../../../manage-staff' : '../../manage-staff'\"\n                          (buttonCall)=\"submitForm()\">\n    </app-dashboard-header>\n\n<div class=\"card\">\n    <div class=\"card-header border-0\">\n        <h3>\n            Personal Information\n        </h3>\n    </div>\n\n    <div class=\"card-body\">\n        <form [formGroup]=\"staffForm\" id=\"ngForm\" (ngSubmit)=\"submitForm()\">\n            <div class=\"row\">\n                <div class=\"col-12 col-md-6\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{'USER.LASTNAME' | translate}}</mat-label>\n                                <input formControlName=\"lastName\" matInput type=\"text\" id=\"lastName\">\n                                <mat-error *ngIf=\"staffForm.get('lastName').hasError('required')\">{{'ERROR.REQUIRED' | translate}}</mat-error>\n                                <button type=\"button\" *ngIf=\"staffForm.get('lastName').value\" (click)=\"clearFormControl('lastName')\" mat-icon-button matSuffix>\n                                    <mat-icon>close</mat-icon>\n                                </button>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-6\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{'USER.FIRSTNAME' | translate}}</mat-label>\n                                <input formControlName=\"firstName\" matInput type=\"text\" id=\"firstName\">\n                                <button type=\"button\" *ngIf=\"staffForm.get('firstName').value\" (click)=\"clearFormControl('firstName')\" mat-icon-button matSuffix>\n                                    <mat-icon>close</mat-icon>\n                                </button>\n                                <mat-error *ngIf=\"staffForm.get('firstName').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Email</mat-label>\n                                <input formControlName=\"email\" matInput type=\"text\" id=\"email\">\n                                <button type=\"button\" *ngIf=\"staffForm.get('email').value\" (click)=\"clearFormControl('email')\" mat-icon-button matSuffix>\n                                    <mat-icon>close</mat-icon>\n                                </button>\n                                <mat-error *ngIf=\"staffForm.get('email').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                <mat-error *ngIf=\"staffForm.get('email').hasError('email')\">{{'ERROR.EMAIL'|translate}}</mat-error>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{'USER.BIRTHDAY' | translate}}</mat-label>\n                                <input formControlName=\"birthdate\" matInput [matDatepicker]=\"picker\" id=\"birthdate\" [max]=\"today\">\n                                <mat-hint>DD/MM/YYYY</mat-hint>\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker></mat-datepicker>\n                            </mat-form-field>\n                        </div>\n\n<!--                        <div class=\"col-5\">-->\n<!--                            <mat-form-field appearance=\"standard\">-->\n<!--                                <mat-label>Type</mat-label>-->\n<!--                                <mat-select>-->\n<!--                                    <mat-option value=\"public\">Public</mat-option>-->\n<!--                                    <mat-option value=\"private\">Private</mat-option>-->\n<!--                                </mat-select>-->\n<!--                            </mat-form-field>-->\n<!--                        </div>-->\n\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{'USER.PHONE' | translate}}</mat-label>\n                                <input formControlName=\"telephone\" matInput type=\"text\" id=\"telephone\">\n\n                                <mat-error *ngIf=\"staffForm.controls.telephone.hasError('pattern')\">\n                                    {{'ERROR.TELEPHONE'|translate}}\n                                  </mat-error>\n                                <mat-error *ngIf=\"staffForm.controls.telephone.hasError('minlength')\">\n                                    {{'ERROR.TELEPHONE-LEN'|translate}}\n                                </mat-error>\n                                <mat-error *ngIf=\"staffForm.controls.telephone.hasError('maxlength')\">\n                                    {{'ERROR.TELEPHONE-LEN'|translate}}\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n\n<!--                        <div class=\"col-5\">-->\n<!--                            <mat-form-field appearance=\"standard\">-->\n<!--                                <mat-label>Type</mat-label>-->\n<!--                                <mat-select>-->\n<!--                                    <mat-option value=\"public\">Public</mat-option>-->\n<!--                                    <mat-option value=\"private\">Private</mat-option>-->\n<!--                                </mat-select>-->\n<!--                            </mat-form-field>-->\n<!--                        </div>-->\n\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{'USER.GENDER' | translate}}</mat-label>\n                                <mat-select formControlName=\"gender\" id=\"gender\">\n                                    <mat-option *ngFor=\"let gender of declaredGenders\" [value]=\"gender\" [id]=\"gender\">\n                                        {{ gender | titlecase }}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n<!--                        <div class=\"col-5\">-->\n<!--                            <mat-form-field appearance=\"standard\">-->\n<!--                                <mat-label>Type</mat-label>-->\n<!--                                <mat-select>-->\n<!--                                    <mat-option [value]=\"'public'\">Public</mat-option>-->\n<!--                                    <mat-option [value]=\"'private'\">Private</mat-option>-->\n<!--                                </mat-select>-->\n<!--                            </mat-form-field>-->\n<!--                        </div>-->\n\n                        <div class=\"col-7\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{'FIELD.PASSWORD' | translate}}</mat-label>\n                                <input formControlName=\"password\" matInput [type]=\"showPassword ? 'text' : 'password'\" name=\"password\" autocomplete=\"new-password\" id=\"password\">\n                                <button type=\"button\" (click)=\"showPassword = !showPassword\" mat-icon-button matSuffix id=\"showPwdBtn\">\n                                    <mat-icon>{{showPassword ? 'visibility' : 'visibility_off'}}</mat-icon>\n                                </button>\n\n                                <mat-error *ngIf=\"staffForm.controls.password.hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                <mat-error *ngIf=\"staffForm.controls.password.hasError('minlength')\">{{'ERROR.PASS-MIN-LENGTH'|translate}}</mat-error>\n                                <mat-error *ngIf=\"staffForm.controls.password.hasError('maxlength')\">{{'ERROR.PASS-MAX-LENGTH'|translate}}</mat-error>\n                                <mat-error *ngIf=\"staffForm.get('password').hasError('upper')\">{{'ERROR.PASS-UPPERCASE'|translate}}</mat-error>\n                                <mat-error *ngIf=\"staffForm.get('password').hasError('lower')\">{{'ERROR.PASS-LOWERCASE'|translate}}</mat-error>\n                                <mat-error *ngIf=\"staffForm.get('password').hasError('whiteSpace')\">{{'ERROR.PASS-WHITESPACE'|translate}}</mat-error>\n                                <mat-error *ngIf=\"staffForm.get('password').hasError('specialCharacter')\">{{'ERROR.PASS-SPECIAL-CHAR'|translate}}.</mat-error>\n                                <mat-error *ngIf=\"staffForm.get('password').hasError('numbers')\">{{'ERROR.PASS-DIGIT'|translate}}</mat-error>\n\n                                <!-- <mat-error *ngIf=\"staffForm.controls.password.hasError('pattern')\">{{'ERROR.PASS-DIGIT'|translate}}</mat-error>\n                                <mat-error *ngIf=\"staffForm.controls.password.hasError('pattern')\">{{'ERROR.PASS-UPPERCASE'|translate}}</mat-error>-->\n\n                                <!-- this.form.controls['your form control name'].value -->\n                                <!-- <mat-error *ngIf=\"staffForm.get('password').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error> -->\n                                <!-- <mat-error *ngIf=\"staffForm.get('password').hasError('passMin')\">{{'ERROR.PASS-MIN-LENGTH'|translate}}</mat-error> -->\n                                <!-- <mat-error *ngIf=\"staffForm.get('password').hasError('min')\">{{'ERROR.PASS-MAX-LENGTH'|translate}}</mat-error> -->\n                                <!-- <mat-error *ngIf=\"staffForm.get('password').hasError('passMax')\">{{'ERROR.PASS-MAX-LENGTH'|translate}}</mat-error> -->\n\n                                <!-- <mat-error *ngIf=\"staffForm.get('password').hasError('number')\">{{'ERROR.PASS-DIGIT'|translate}}</mat-error> -->\n\n                            </mat-form-field>\n                            <!-- <mat-error *ngIf=\"staffForm.controls.password.hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error> -->\n\n                        </div>\n\n                        <div class=\"col-5\">\n                            <button *ngIf=\"!isEditMode\"\n                                    id=\"generatePwdBtn\"\n                                    type=\"button\"\n                                    class=\"btn-auto btn-color-outline w-100\"\n                                    (click)=\"generatePassword()\">\n                                <i class=\"fas fa-sync\"></i>\n                                {{'GENERATE_PASSWORD' | translate}}\n                            </button>\n\n                            <button *ngIf=\"isEditMode\"\n                                    type=\"button\"\n                                    id=\"resetPwdBtn\"\n                                    class=\"btn-auto btn-color-outline w-100\"\n                                    (click)=\"resetPassword()\">\n                                <i class=\"fas fa-sync\"></i>\n                                {{'RESET_PASSWORD' | translate}}\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <div class=\"modules\">\n                        <div class=\"row modules-header border-bottom\">\n                            <div class=\"col-6\">{{'GENERAL.MODULES' | translate}}</div>\n<!--                            <div class=\"col-3\">View</div>-->\n                            <div class=\"col-6\">Edit</div>\n                        </div>\n                        <div class=\"row modules-row\">\n                            <div class=\"col-6\">\n                                {{'GENERAL.EVENTS' | translate}}\n                            </div>\n<!--                            <div class=\"col-3\">-->\n<!--                                <label class=\"switch\">-->\n<!--                                    <input type=\"checkbox\" formControlName=\"viewEvents\"-->\n<!--                                           id=\"viewEvents\">-->\n<!--                                    <span class=\"slider round\"></span>-->\n<!--                                </label>-->\n<!--                            </div>-->\n                            <div class=\"col-6\">\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" formControlName=\"editEvents\"\n                                           id=\"editEvents\">\n<!--                                    (change)=\"checkAll('events', $event)\"-->\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n                        </div>\n\n                        <div class=\"row modules-row\">\n                            <div class=\"col-6\">\n                                {{'GENERAL.EDITORIALS' | translate}}\n                            </div>\n<!--                            <div class=\"col-3\"><label class=\"switch\">-->\n<!--                                <input type=\"checkbox\" formControlName=\"viewEditorials\"-->\n<!--                                       id=\"viewEditorials\">-->\n<!--                                <span class=\"slider round\"></span>-->\n<!--                            </label></div>-->\n                            <div class=\"col-6\">\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" formControlName=\"editEditorials\"\n                                           id=\"editEditorials\">\n<!--                                    (change)=\"checkAll('editorials', $event)\"-->\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n                        </div>\n\n                        <div class=\"row modules-row\">\n                            <div class=\"col-6\">\n                                Provideri & Resurse\n                            </div>\n<!--                            <div class=\"col-3\"><label class=\"switch\">-->\n<!--                                <input type=\"checkbox\" formControlName=\"viewProviders\"-->\n<!--                                       id=\"viewProviders\">-->\n<!--                                <span class=\"slider round\"></span>-->\n<!--                            </label></div>-->\n                            <div class=\"col-6\">\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" formControlName=\"editProviders\"\n                                           id=\"editProviders\">\n<!--                                    (change)=\"checkAll('providers', $event)\"-->\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"card-footer border-0 d-flex justify-content-end\">\n        <button class=\"btn-long btn-color-fill\" form=\"ngForm\" id=\"submitStaffBtnDown\">\n            <i class=\"fas fa-save\"></i>\n            {{'BTN.SAVE' | translate}}\n        </button>\n    </div>\n</div>\n</div>\n";

/***/ }),

/***/ 10690:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/staff-management/staff-list/staff-list.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"{{'TITLES.STAFF-MEMBERS-LIST' | translate}}\"\n                          [buttonBackRoute]=\"'../../dashboard'\"\n                          [buttonAddRoute]=\"'../../manage-staff/add'\">\n    </app-dashboard-header>\n\n    <div *ngIf=\"usersLoaded\" class=\"card\">\n        <div class=\"card-header border-0 d-flex w-100 justify-content-between align-items-center\">\n            <mat-form-field class=\"example-full-width w-100\" appearance=\"legacy\">\n                <mat-label>{{'GENERAL.SEARCH' | translate}}</mat-label>\n                <input #searchBar (keydown.enter)=\"search(searchBar.value, $event)\" matInput placeholder=\"{{'GENERAL.SEARCH' | translate}}\"\n                       type=\"text\">\n                <mat-icon matSuffix (click)=\"search(searchBar.value, $event)\">search</mat-icon>\n            </mat-form-field>\n\n            <!-- <mat-form-field appearance=\"standard\">\n                <mat-select [(value)]=\"pageSize\" (selectionChange)=\"getUsers()\">\n                    <mat-option *ngFor=\"let size of pageSizeArray\" [value]=\"size\">\n                        {{size}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field> -->\n\n            <!--<a mat-button [matMenuTriggerFor]=\"countsMenu\" #countsMenuTrigger=\"matMenuTrigger\">\n                {{pageSize}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\n            </a>\n            <mat-menu #countsMenu=\"matMenu\" xPosition=\"after\" overlapTrigger=\"true\">\n                    <span (mouseleave)=\"countsMenuTrigger.closeMenu()\">\n                        <button mat-menu-item *ngFor=\"let size of pageSizeArray\" (click)=\"changeCount(count)\">\n                            <span>{{size}}</span>\n                        </button>\n                    </span>\n            </mat-menu>-->\n\n        </div>\n\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div *ngFor=\"let user of usersList; let i = index\" class=\"col-12 col-md-6 col-lg-4\">\n                    <app-staff-card [user]=\"user\" [index]=\"i\" (accountDeactivated)=\"getUsers()\"\n                                    (accountDeleted)=\"getUsers()\" (accountActivated)=\"getUsers()\"></app-staff-card>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card-footer border-0 d-flex justify-content-between align-items-center\">\n            <!-- <p>Showing {{pageSize}} of {{paginationInfo.totalElements}} entries</p> -->\n\n            <!-- <ngb-pagination [collectionSize]=\"paginationInfo.totalElements\"\n                            [pageSize]=\"pageSize\"\n                            [(page)]=\"pageNumber\"\n                            [maxSize]=\"3\"\n                            [boundaryLinks]=\"false\"\n                            (pageChange)=\"getUsers()\"\n            ></ngb-pagination> -->\n\n            <!--Pagination-->\n            <mat-paginator class=\"w-100\"\n                           [pageSizeOptions]=\"pageSizeArray\"\n                           [length]=\"paginationInfo.totalElements\"\n                           [pageSize]=\"pageSize\"\n                           (page)=\"pageChanged($event)\">\n            </mat-paginator>\n        </div>\n    </div>\n\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_role-admin_role-admin_module_ts.js.map