(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_role-staff_role-staff_module_ts"],{

/***/ 58439:
/*!**********************************************************!*\
  !*** ./src/app/features/role-staff/role-staff.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleStaffModule": () => (/* binding */ RoleStaffModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _staff_dashboard_staff_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-dashboard/staff-dashboard.component */ 528);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _standalone_components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../standalone-components/change-pass/change-pass.component */ 49247);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _standalone_components_edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../standalone-components/edit-account/edit-account.component */ 22025);
/* harmony import */ var _staff_inbox_staff_inbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff-inbox/staff-inbox.component */ 64705);
/* harmony import */ var _staff_conversation_item_card_staff_conversation_item_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-conversation-item-card/staff-conversation-item-card.component */ 23967);
/* harmony import */ var _view_messages_staff_view_messages_staff_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-messages-staff/view-messages-staff.component */ 84449);
/* harmony import */ var src_app_standalone_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/standalone-components/conversation/conversation.component */ 51440);
/* harmony import */ var src_app_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/_services/user-roles.guard */ 16070);
/* harmony import */ var src_app_standalone_components_notifications_component_notifications_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/standalone-components/notifications-component/notifications-component.component */ 20104);
/* harmony import */ var src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/standalone-components/all-notifications/all-notifications.component */ 97376);
/* harmony import */ var _standalone_components_clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../standalone-components/clients-list/clients-list.component */ 94494);

















const routes = [{
  path: 'dashboard',
  component: _staff_dashboard_staff_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.StaffDashboardComponent
}, {
  path: 'staff-inbox',
  component: _staff_inbox_staff_inbox_component__WEBPACK_IMPORTED_MODULE_5__.StaffInboxComponent,
  canActivate: [src_app_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_9__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_STAFF', 'ROLE_SUPER_ADMIN']
  }
}, {
  path: 'staff-messages/:idConversation',
  component: _view_messages_staff_view_messages_staff_component__WEBPACK_IMPORTED_MODULE_7__.ViewMessagesStaffComponent,
  canActivate: [src_app_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_9__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_STAFF', 'ROLE_SUPER_ADMIN']
  }
}, {
  path: 'account',
  component: _standalone_components_edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_4__.EditAccountComponent
}, {
  path: 'notifications',
  component: src_app_standalone_components_notifications_component_notifications_component_component__WEBPACK_IMPORTED_MODULE_10__.NotificationsComponent
}, {
  path: 'all-notifications',
  component: src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_11__.AllNotificationsComponent
}, {
  path: 'change-password',
  component: _standalone_components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_2__.ChangePassComponent
}, {
  path: 'inbox',
  component: _staff_inbox_staff_inbox_component__WEBPACK_IMPORTED_MODULE_5__.StaffInboxComponent
}, {
  path: 'inbox/:idConversation',
  component: _view_messages_staff_view_messages_staff_component__WEBPACK_IMPORTED_MODULE_7__.ViewMessagesStaffComponent
}, {
  path: 'settings',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings.module */ 56867)).then(m => m.SettingsModule)
}, {
  path: 'editorials',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared__domains_ts-node_modules_css-loader_dist_cjs_js_ruleSet_1_rules_6_rule-fd9a58"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_editorials_editorials_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../editorials/editorials.module */ 51008)).then(m => m.EditorialsModule),
  canActivate: [src_app_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_9__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_EDITORIALS_EDIT']
  }
}, {
  path: 'events',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_events_events_module_ts"), __webpack_require__.e("default-src_app_standalone-components_resource-card_resource-card_component_ts"), __webpack_require__.e("src_app_shared__services_resources_service_ts-_6b221")]).then(__webpack_require__.bind(__webpack_require__, /*! ../events/events.module */ 36764)).then(m => m.EventsModule),
  canActivate: [src_app_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_9__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_EVENTS_EDIT']
  }
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
  path: 'resources',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ol_Map_js-node_modules_ol_layer_Tile_js-node_modules_ol_source_OSM_js"), __webpack_require__.e("default-src_app_standalone-components_display-user_display-user_component_ts"), __webpack_require__.e("default-src_app_features_domain-listing__components_shared-exp-map_shared-exp-map_component_t-a8c67b"), __webpack_require__.e("default-src_app_standalone-components_shared-experiences-info_shared-experiences-info_component_ts"), __webpack_require__.e("default-src_app_features_resources_resources_module_ts"), __webpack_require__.e("src_app_shared__services_resources_service_ts-src_app_shared__services_shared-experiences_ser-2d769a0")]).then(__webpack_require__.bind(__webpack_require__, /*! ../resources/resources.module */ 26022)).then(m => m.ResourcesModule),
  canActivate: [src_app_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_9__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_PROVIDERS_EDIT']
  }
}, {
  path: 'reservations',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_standalone-components_room-card_room-card_component_ts-node_modules_angular_m-c08a2c"), __webpack_require__.e("default-src_app_features_reservations_reservations_module_ts"), __webpack_require__.e("default-src_app_features_reservations_cancel-reservation-modal_cancel-reservation-modal_compo-bdeb9f"), __webpack_require__.e("src_app_shared__services_resources_service_ts-_6b220")]).then(__webpack_require__.bind(__webpack_require__, /*! ../reservations/reservations.module */ 94436)).then(m => m.ReservationsModule)
}, {
  path: 'manage-providers',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2020_ngx-owl-carousel-o_mjs"), __webpack_require__.e("default-src_app_shared__domains_ts-node_modules_css-loader_dist_cjs_js_ruleSet_1_rules_6_rule-fd9a58"), __webpack_require__.e("default-src_app_features_providers-management_providers-management_module_ts"), __webpack_require__.e("default-src_app_features_role-provider_view-provider-messages_view-provider-messages_componen-fb491b"), __webpack_require__.e("default-src_app_shared__services_staff_service_ts-node_modules_randexp_lib_randexp_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../providers-management/providers-management.module */ 54632)).then(m => m.ProvidersManagementModule),
  canActivate: [src_app_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_9__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_PROVIDERS_EDIT']
  }
}, {
  path: 'reports',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_reports_reports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../reports/reports.module */ 46291)).then(m => m.ReportsModule)
}, {
  path: 'forum',
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_features_forums_forums_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../forums/forums.module */ 79470)).then(m => m.ForumsModule)
}, {
  path: 'trips',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_trips_trips_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../trips/trips.module */ 76860)).then(m => m.TripsModule)
}, {
  path: 'itineraries',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_itineraries_itineraries_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../itineraries/itineraries.module */ 1176)).then(m => m.ItinerariesModule)
}, {
  path: 'jobs',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_jobs__components_view-job_view-job_component_ts"), __webpack_require__.e("src_app_features_jobs-dashboard_jobs-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../jobs-dashboard/jobs-dashboard.module */ 94798)).then(m => m.JobsDashboardModule)
}, {
  path: 'client-jobs',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_standalone-components_display-user_display-user_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_chips_mjs"), __webpack_require__.e("default-src_app_features_jobs__components_view-job_view-job_component_ts"), __webpack_require__.e("default-src_app_features_jobs_jobs_module_ts"), __webpack_require__.e("default-src_app_standalone-components_resource-card-with-template_resource-card-with-template-b14844"), __webpack_require__.e("src_app_shared__services_resources_service_ts-src_app_shared__services_shared-experiences_ser-2d769a1")]).then(__webpack_require__.bind(__webpack_require__, /*! ../jobs/jobs.module */ 87596)).then(m => m.JobsModule)
}, {
  path: 'clients',
  component: _standalone_components_clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_12__.ClientsListComponent
}, {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}];
let RoleStaffModule = class RoleStaffModule {};
RoleStaffModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
  declarations: [_staff_dashboard_staff_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.StaffDashboardComponent, _staff_inbox_staff_inbox_component__WEBPACK_IMPORTED_MODULE_5__.StaffInboxComponent, _staff_conversation_item_card_staff_conversation_item_card_component__WEBPACK_IMPORTED_MODULE_6__.StaffConversationItemCardComponent, _view_messages_staff_view_messages_staff_component__WEBPACK_IMPORTED_MODULE_7__.ViewMessagesStaffComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_3__.DashboardHeaderComponent, _standalone_components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_2__.ChangePassComponent, _standalone_components_edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_4__.EditAccountComponent, src_app_standalone_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_8__.ConversationComponent, src_app_standalone_components_notifications_component_notifications_component_component__WEBPACK_IMPORTED_MODULE_10__.NotificationsComponent, src_app_standalone_components_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_11__.AllNotificationsComponent]
})], RoleStaffModule);


/***/ }),

/***/ 23967:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/role-staff/staff-conversation-item-card/staff-conversation-item-card.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffConversationItemCardComponent": () => (/* binding */ StaffConversationItemCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _staff_conversation_item_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-conversation-item-card.component.html?ngResource */ 28918);
/* harmony import */ var _staff_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-conversation-item-card.component.scss?ngResource */ 69350);
/* harmony import */ var _staff_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_staff_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/messages-conversations.service */ 33869);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);











let StaffConversationItemCardComponent = class StaffConversationItemCardComponent {
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
        this.router.navigate(['/private/staff/inbox/' + idConversation]);
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
        this.router.navigate(['/private/staff/inbox/']);
        this.cdr.detectChanges();
        this.listChanges();
      }
    });
  }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Documents List
    this.getList();
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
        this.totalMyActiveConversation = convList.totalElements;
        console.log('CONVERSATIILE MELE ACTIVE', this.myActiveConversationsList);
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
        this.totalUnassignedConversations = convList.totalElements;
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
        this.totalAllConversations = convList.totalElements;
        console.log('TOATE CONVERSATIILE', this.allConversationsList);
      }
    });
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
StaffConversationItemCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-staff-conversation-item-card',
  template: _staff_conversation_item_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_staff_conversation_item_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], StaffConversationItemCardComponent);


/***/ }),

/***/ 528:
/*!**********************************************************************************!*\
  !*** ./src/app/features/role-staff/staff-dashboard/staff-dashboard.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffDashboardComponent": () => (/* binding */ StaffDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _staff_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-dashboard.component.html?ngResource */ 68218);
/* harmony import */ var _staff_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-dashboard.component.scss?ngResource */ 8270);
/* harmony import */ var _staff_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_staff_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);





let StaffDashboardComponent = class StaffDashboardComponent {
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
      this.user = user;
      if (user.roles.includes('ROLE_STAFF')) {
        this.isStaff = true;
        this.isAdmin = false;
      } else if (user.roles.includes('ROLE_SUPER_ADMIN')) {
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
StaffDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-staff-dashboard',
  template: _staff_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_staff_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], StaffDashboardComponent);


/***/ }),

/***/ 64705:
/*!**************************************************************************!*\
  !*** ./src/app/features/role-staff/staff-inbox/staff-inbox.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffInboxComponent": () => (/* binding */ StaffInboxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _staff_inbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-inbox.component.html?ngResource */ 75659);
/* harmony import */ var _staff_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-inbox.component.scss?ngResource */ 52572);
/* harmony import */ var _staff_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_staff_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);






let StaffInboxComponent = class StaffInboxComponent {
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
StaffInboxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-staff-inbox',
  template: _staff_inbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_staff_inbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], StaffInboxComponent);


/***/ }),

/***/ 84449:
/*!******************************************************************************************!*\
  !*** ./src/app/features/role-staff/view-messages-staff/view-messages-staff.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMessagesStaffComponent": () => (/* binding */ ViewMessagesStaffComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_messages_staff_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-messages-staff.component.html?ngResource */ 60465);
/* harmony import */ var _view_messages_staff_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-messages-staff.component.scss?ngResource */ 70949);
/* harmony import */ var _view_messages_staff_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_messages_staff_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_messages_conversations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/messages-conversations.service */ 33869);
/* harmony import */ var src_app_shared_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/reservations.service */ 84803);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);











let ViewMessagesStaffComponent = class ViewMessagesStaffComponent {
  constructor(conversationsService, usersService, activatedRoute, reservationService, toastService) {
    this.conversationsService = conversationsService;
    this.usersService = usersService;
    this.activatedRoute = activatedRoute;
    this.reservationService = reservationService;
    this.toastService = toastService;
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
          res.participants.forEach(idUserParticipant => {
            console.log('cati sunt in conversatie? ar trebui 2', idUserParticipant);
            if (idUserParticipant.userId === this.currentUserId) {
              this.hideJoinButton = true;
              return;
            }
            // this.convParticipantID=(idUserParticipant === this.currentUserId ? 'nimic' : idUserParticipant);
            if (idUserParticipant.userId !== this.currentUserId) {
              this.convParticipantID = idUserParticipant.userId;
              return;
            }
          });
          this.getUserById(this.convParticipantID);
          // this.getReservationById(res.id);
        } else {
          res.participants.forEach(idUserParticipant => {
            console.log('cati sunt in conversatie?', idUserParticipant);
            // this.convParticipantID=(idUserParticipant === this.currentUserId ? 'nimic' : idUserParticipant);
            if (idUserParticipant.userId !== this.currentUserId) {
              this.convParticipantID = idUserParticipant.userId;
              this.hideJoinButton = true;
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
        // this.modalService.triggerUserListChanges(true);
        this.toastService.showToast("Succes", "Ati parasit conversatia!", "success");
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
    console.log("openedInfo a fost accesat", this.openedInfo);
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
  }];
};
ViewMessagesStaffComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-view-messages-staff',
  template: _view_messages_staff_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [(_view_messages_staff_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ViewMessagesStaffComponent);


/***/ }),

/***/ 20104:
/*!****************************************************************************************************!*\
  !*** ./src/app/standalone-components/notifications-component/notifications-component.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _notifications_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-component.component.html?ngResource */ 71712);
/* harmony import */ var _notifications_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications-component.component.scss?ngResource */ 16772);
/* harmony import */ var _notifications_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notifications_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/web-socket.service */ 50754);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/notifications.service */ 77346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);










let NotificationsComponent = class NotificationsComponent {
  constructor(notificationsService, http, stompService) {
    this.notificationsService = notificationsService;
    this.http = http;
    this.stompService = stompService;
    // topic = 'https://bestinform.eu/user/topic/private-notifications';
    this.topic = '/topic/private-notifications';
    this.listNotification = [];
    this.getNotifications();
  }
  ngOnInit() {
    this.stompService.subscribe(this.topic, () => {
      this.getNotifications();
    });
  }
  getNotifications() {
    this.notificationsService.listMyNotifications(0, 10, 'desc', 'date').subscribe(notificationsList => {
      this.listNotification = notificationsList.content;
      console.log(notificationsList.content);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }, {
    type: src_app_shared_services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__.WebSocketAPI
  }];
};
NotificationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-notifications-component',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
  template: _notifications_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [src_app_shared_services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__.WebSocketAPI],
  styles: [(_notifications_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NotificationsComponent);


/***/ }),

/***/ 69350:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/role-staff/staff-conversation-item-card/staff-conversation-item-card.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\np {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 140%;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  color: black;\n  margin-bottom: 0px;\n}\n\n.conv-item-card {\n  padding: 8px 16px 8px 8px;\n  gap: 8px;\n  background-color: #FFFFFF;\n  box-shadow: 4px 4px 12px 8px rgba(35, 31, 32, 0.08);\n  border-radius: 8px;\n}\n.conv-item-card .first-half-conv-item img {\n  width: 58px;\n  height: 58px;\n  border-radius: 100px;\n}\n.conv-item-card .first-half-conv-item h4 {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  color: #231F20;\n}\n.conv-item-card .first-half-conv-item p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  opacity: 0.5;\n  max-width: 600px;\n}\n.conv-item-card .second-half-conv-item p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  color: #231F20;\n  opacity: 0.5;\n}\n.conv-item-card .conv-handling-class h5 {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n}\n.conv-item-card .conv-handling-class h5.chat-controlled-by-you {\n  color: #24398A;\n}\n.conv-item-card .conv-handling-class h5.chat-controlled-by-others {\n  color: #231F20;\n}\n.conv-item-card .conv-handling-class p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  opacity: 0.5;\n  max-width: 600px;\n}\n.conv-item-card .conv-handling-class button {\n  min-width: 110px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-staff/staff-conversation-item-card/staff-conversation-item-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;AAiBJ;;AAdA;EAEI,yBAAA;EACA,QAAA;EACA,yBAAA;EACA,mDAAA;EACA,kBAAA;AAgBJ;AAbQ;EACI,WAAA;EACA,YAAA;EACA,oBAAA;AAeZ;AAZQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cD7BA;AC2CZ;AAXQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AAaZ;AARQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cDlDA;ECmDA,YAAA;AAUZ;AAFQ;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAGZ;AADY;EACI,cD5EA;AC+EhB;AAAY;EACI,cD3EJ;AC6EZ;AAEQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AAAZ;AAGQ;EACI,gBAAA;AADZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\np{\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 140%;\n    /* identical to box height, or 17px */\n\n    display: flex;\n    align-items: center;\n    color: black;\n    margin-bottom: 0px;\n}\n\n.conv-item-card{\n    //align-items: center;\n    padding: 8px 16px 8px 8px;\n    gap: 8px;\n    background-color: #FFFFFF;\n    box-shadow: 4px 4px 12px 8px rgba(35, 31, 32, 0.08);\n    border-radius: 8px;\n\n    .first-half-conv-item{\n        img{\n            width: 58px;\n            height: 58px;\n            border-radius: 100px;\n        }\n\n        h4{\n            font-weight: 700;\n            font-size: 16px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            color:$paragraph;\n        }\n\n        p{\n            font-weight: 400;\n            font-size: 12px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            opacity: 0.5;\n            max-width: 600px;\n        }\n    }\n\n    .second-half-conv-item{\n        p{\n            font-weight: 400;\n            font-size: 14px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            color: $paragraph;\n            opacity: 0.5;\n        }\n\n\n    }\n    //the part with leave and join buttons\n    .conv-handling-class{\n\n        h5{\n            font-style: normal;\n            font-weight: 700;\n            font-size: 16px;\n            line-height: 140%;\n            /* or 22px */\n\n            display: flex;\n            align-items: center;\n            letter-spacing: -0.02em;\n\n            &.chat-controlled-by-you{\n                color: $primary-color;\n            }\n\n            &.chat-controlled-by-others{\n                color: $paragraph;\n            }\n        }\n\n        p{\n            font-weight: 400;\n            font-size: 12px;\n            line-height: 140%;\n            display: flex;\n            align-items: center;\n            opacity: 0.5;\n            max-width: 600px;\n        }\n\n        button{\n            min-width:110px;\n            // min-width:auto;\n            // max-width: 120px;\n        }\n    }\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8270:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/role-staff/staff-dashboard/staff-dashboard.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.dashboard-staff {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n.dashboard-staff .dashboard-cards .row {\n  row-gap: 24px;\n  margin-bottom: 24px;\n}\n.dashboard-staff .dashboard-cards .row .resources {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('resourcess.jpg');\n  background-size: cover;\n  height: 300px;\n  position: relative;\n}\n.dashboard-staff .dashboard-cards .row .templates {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('templates.jpg');\n  background-size: cover;\n  height: 300px;\n  position: relative;\n}\n.dashboard-staff .dashboard-cards .row .editorials {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('editorials.jpg') center;\n  background-size: cover;\n  height: 300px;\n  position: relative;\n}\n.dashboard-staff .dashboard-cards .row .events {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('events.jpg');\n  background-size: cover;\n  height: 300px;\n  position: relative;\n}\n.dashboard-staff .dashboard-cards .row .trips {\n  border-radius: 8px;\n  background: linear-gradient(to right, #24398A, transparent), url('trips.jpg');\n  background-size: cover;\n  height: 300px;\n  position: relative;\n}\n.dashboard-staff .dashboard-cards .row .title-for-card {\n  position: absolute;\n  bottom: 8px;\n  left: 16px;\n  color: var(--primary-background);\n  font-size: 36px;\n  font-weight: 500;\n}\n\n.title-p {\n  color: #24398A;\n  font-size: 48px;\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-staff/staff-dashboard/staff-dashboard.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;AAkBF;AAfI;EACE,aAAA;EACA,mBAAA;AAiBN;AAhBM;EACE,kBAAA;EACA,kFAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AAiBR;AAdM;EACE,kBAAA;EACA,iFAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AAeR;AAXM;EACE,kBAAA;EACA,yFAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AAYR;AARM;EACE,kBAAA;EACA,8EAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AASR;AALM;EACE,kBAAA;EACA,6EAAA;EAEA,sBAAA;EACA,aAAA;EACA,kBAAA;AAMR;AAFM;EACE,kBAAA;EACA,WAAA;EACA,UAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;AAIR;;AAKA;EACE,cD1Ec;EC2Ed,eAAA;EACA,gBAAA;AAFF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.dashboard-staff{\n  margin-top:40px;\n  margin-bottom: 40px;\n\n  .dashboard-cards {\n    .row{\n      row-gap: 24px;\n      margin-bottom: 24px;\n      .resources{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"../../../../assets/images/others/staff/resourcess.jpg\");\n        background-size: cover;\n        height: 300px;\n        position: relative;\n      }\n\n      .templates{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"~src/assets/images/others/staff/templates.jpg\");\n        background-size: cover;\n        height: 300px;\n        position: relative;\n\n      }\n\n      .editorials{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"~src/assets/images/others/staff/editorials.jpg\") center;\n        background-size: cover;\n        height: 300px;\n        position: relative;\n\n      }\n\n      .events{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"~src/assets/images/others/staff/events.jpg\");\n        background-size: cover;\n        height: 300px;\n        position: relative;\n\n      }\n\n      .trips{\n        border-radius: 8px;\n        background: linear-gradient(to right, $primary-color, transparent),\n        url(\"~src/assets/images/others/staff/trips.jpg\");\n        background-size: cover;\n        height: 300px;\n        position: relative;\n\n      }\n\n      .title-for-card{\n        position:absolute;\n        bottom: 8px;\n        left:16px;\n        color:var(--primary-background);\n        font-size: 36px;\n        font-weight: 500;\n      }\n\n    }\n  }\n\n\n\n}\n.title-p{\n  color:$primary-color;\n  font-size: 48px;\n  font-weight: 700;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 52572:
/*!***************************************************************************************!*\
  !*** ./src/app/features/role-staff/staff-inbox/staff-inbox.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.inbox-container {\n  background-color: var(--primary-background);\n  padding: 0px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.inbox-container #inboxTab {\n  border: none;\n  height: 54px;\n  background-color: var(--secondary-background);\n  color: #231F20;\n}\n.inbox-container #inboxTab .nav-item {\n  width: 33%;\n}\n.inbox-container #inboxTab .nav-item button {\n  width: 100%;\n  height: 100%;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.inbox-container #inboxTab .nav-item button.active {\n  border: #FFFFFF 1px solid;\n  border-radius: 0px;\n  margin: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-staff/staff-inbox/staff-inbox.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AAkBJ;;AAZI;EACM,YAAA;EACA,YAAA;EACA,6CAAA;EACA,cDVE;ACyBZ;AAbQ;EACI,UAAA;AAeZ;AAbY;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cDxBJ;ACuCZ;AAZY;EACI,yBAAA;EACA,kBAAA;EACA,WAAA;AAchB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\n.inbox-container{\n    background-color: var(--primary-background);\n    padding:0px;\n    border-radius: 8px;\n    overflow: hidden;\n}\n\n.inbox-container{\n\n    //tabs styling\n    #inboxTab{\n          border: none;\n          height: 54px;\n          background-color: var(--secondary-background);\n          color:$paragraph;\n\n        .nav-item{\n            width: 33%;\n\n            button{\n                width:100%;\n                height:100%;\n                font-weight: 600;\n                font-size: 16px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                letter-spacing: -0.02em;\n                color: $paragraph;\n\n            }\n            button.active{\n                border:$background-primary 1px solid;\n                border-radius: 0px;\n                margin: 0px;\n            }\n        }\n    } // end tabs styling\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 70949:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/role-staff/view-messages-staff/view-messages-staff.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.view-message-container {\n  background-color: var(--primary-background);\n  padding: 0px;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.view-message-container button.join-leave-button {\n  min-width: 110px;\n}\n.view-message-container button.join-leave-button i {\n  color: white;\n}\n\n.info-not-display {\n  display: none !important;\n}\n\n.info-display {\n  display: block !important;\n}\n\n.hidden-info {\n  padding: 16px;\n  background: rgba(36, 57, 138, 0.08);\n}\n.hidden-info h4 {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.hidden-info p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.hidden-info i {\n  margin: 4px;\n}\n.hidden-info .red {\n  color: red;\n}\n.hidden-info .opacity {\n  opacity: 0.5;\n}\n\n.conversation-header-class {\n  padding: 16px 24px;\n  gap: 8px;\n  height: 90px;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n}\n.conversation-header-class img {\n  width: 58px;\n  height: 58px;\n  border-radius: 100px;\n}\n.conversation-header-class h4 {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 140%;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n.conversation-header-class p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  color: #24398A;\n  opacity: 0.48;\n  margin-bottom: 0px;\n}\n.conversation-header-class i {\n  width: 18px;\n  height: 18px;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 140%;\n  /* or 17px */\n  letter-spacing: 0.1px;\n  /* Primary */\n  color: #24398A;\n}\n\n.conversation-component-container {\n  padding: 16px 24px;\n  gap: 8px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/role-staff/view-messages-staff/view-messages-staff.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAkBJ;AAhBI;EACI,gBAAA;AAkBR;AAjBQ;EACI,YAAA;AAmBZ;;AAdA;EACI,wBAAA;AAiBJ;;AAfA;EACI,yBAAA;AAkBJ;;AAfA;EACI,aAAA;EACA,mCAAA;AAkBJ;AAjBI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDzBI;EC0BJ,kBAAA;AAmBR;AAjBI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDhCI;ECkCJ,kBAAA;AAkBR;AAhBI;EACI,WAAA;AAkBR;AAhBI;EACI,UAAA;AAkBR;AAhBI;EACI,YAAA;AAkBR;;AAZA;EACI,kBAAA;EACA,QAAA;EACA,YAAA;EACA,4FAAA;EACA,2CAAA;AAeJ;AAbI;EACI,WAAA;EACA,YAAA;EACA,oBAAA;AAeR;AAbI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cDjEI;ECkEJ,kBAAA;AAeR;AAbI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD7EQ;EC8ER,aAAA;EACA,kBAAA;AAeR;AAbI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAGA,qBAAA;EAEA,YAAA;EAEA,cD/FQ;AC0GhB;;AARA;EACI,kBAAA;EACA,QAAA;AAWJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\n.view-message-container{\n    background-color: var(--primary-background);\n    padding:0px;\n    border-radius: 8px;\n    overflow: hidden;\n    margin-bottom:20px;\n\n    button.join-leave-button{\n        min-width:110px;\n        i{\n            color:white\n\n        }\n    }\n}\n.info-not-display{\n    display: none!important;\n}\n.info-display{\n    display: block!important;\n}\n\n.hidden-info{\n    padding:16px;\n    background: rgba(36, 57, 138, 0.08);\n    h4{\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 140%;\n        color: $paragraph;\n        margin-bottom: 0px;\n    }\n    p{\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 140%;\n        color: $paragraph;\n        // opacity: 0.48;\n        margin-bottom:0px;\n    }\n    i{\n        margin:4px;\n    }\n    .red{\n        color: red;\n    }\n    .opacity{\n        opacity: 0.5;\n    }\n}\n\n\n\n.conversation-header-class{\n    padding: 16px 24px;\n    gap: 8px;\n    height: 90px;\n    background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n\n    img{\n        width: 58px;\n        height: 58px;\n        border-radius: 100px;\n    }\n    h4{\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 140%;\n        color: $paragraph;\n        margin-bottom: 0px;\n    }\n    p{\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 140%;\n        color: $primary-color;\n        opacity: 0.48;\n        margin-bottom:0px;\n    }\n    i{\n        width: 18px;\n        height: 18px;\n        font-style: normal;\n        font-weight: 900;\n        font-size: 12px;\n        line-height: 140%;\n        /* or 17px */\n\n\n        letter-spacing: 0.1px;\n\n        /* Primary */\n\n        color: $primary-color;\n    }\n}\n.conversation-component-container{\n    padding: 16px 24px;\n    gap: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 16772:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/standalone-components/notifications-component/notifications-component.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 28918:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/role-staff/staff-conversation-item-card/staff-conversation-item-card.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <p class=\"my-2\">Messages</p>\n\n    <!-- my conversations -->\n    <div *ngIf=\"categoryConversation === 'myConversations'\">\n        <div *ngFor=\"let conversation of myActiveConversationsList\"   class=\"conv-item-card my-3\">\n            <div class=\"d-flex justify-content-between align-items-center  my-2\">\n                <div routerLink=\"/private/staff/inbox/{{conversation.id}}\" class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                    <img class=\"img-class\" src=\"../../../../../../../assets/images/others/user.jpg\">\n                    <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                        <h4>{{conversation.name}}</h4><!--de verificat daca trebuie numele userului numele problemei-->\n                        <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                        <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                    </div>\n                </div>\n\n                <div class=\"d-flex justify-content-end align-items-center second-half-conv-item gap-2 conv-handling-class\">\n                    <p>{{conversation.date | date: 'EEEE,d MMMM HH:mm'}}</p>\n                    <button (click)=\"leaveConversation(conversation.id)\" class=\"btn-long btn-color-fill\"><i class=\"fas fa-sign-out-alt\"></i>Leave</button>\n                </div>\n            </div>\n        </div>\n         <!--Pagination-->\n         <mat-paginator\n         [pageSizeOptions]=\"pageItems\"\n         [length]=\"totalMyActiveConversation\"\n         [pageSize]=\"pageSize\"\n         (page)=\"pageChanged($event)\"\n         >\n         </mat-paginator>\n    </div>\n\n    <!-- Unassigned conversation -->\n    <div *ngIf=\"categoryConversation === 'unassignedConversations'\">\n        <div *ngFor=\"let conversation of unassignedConversationsList\"  class=\"conv-item-card my-3\">\n            <div class=\"d-flex justify-content-between align-items-center  my-3\">\n                <div routerLink=\"/private/staff/inbox/{{conversation.id}}\" class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                    <img class=\"img-class\" src=\"../../../../../../../assets/images/others/user.jpg\">\n                    <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                        <h4>{{conversation.name}}</h4><!--de verificat daca trebuie numele userului numele problemei-->\n                        <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                        <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                    </div>\n                </div>\n                <div class=\"d-flex justify-content-end align-items-center second-half-conv-item gap-2 conv-handling-class\">\n                    <p>{{conversation.date | date: 'EEEE,d MMMM HH:mm'}}</p>\n                    <button (click)=\"joinConversation(conversation.id, currentUser)\" class=\"btn-long btn-color-fill\"><i class=\"fas fa-sign-in-alt\"></i> Join</button>\n                </div>\n            </div>\n        </div>\n\n         <!--Pagination-->\n         <mat-paginator\n         [pageSizeOptions]=\"pageItems\"\n         [length]=\"totalUnassignedConversations\"\n         [pageSize]=\"pageSize\"\n         (page)=\"pageChanged($event)\"\n         >\n         </mat-paginator>\n    </div>\n\n\n    <!-- my closed conversations -->\n    <div *ngIf=\"categoryConversation === 'myClosedConversations'\">\n        <div *ngFor=\"let conversation of myClosedConversationsList\"  class=\"conv-item-card my-3\">\n            <div class=\"d-flex justify-content-between align-items-center p-2 my-3\">\n                <div routerLink=\"/private/staff/inbox/{{conversation.id}}\" class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                    <img class=\"img-class\" src=\"../../../../../../../assets/images/others/user.jpg\">\n                    <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                        <h4>{{conversation.name}}</h4><!--de verificat daca trebuie numele userului numele problemei-->\n                        <!-- <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p> -->\n                        <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                    </div>\n                </div>\n                <div class=\"d-flex justify-content-end align-items-center second-half-conv-item gap-2 conv-handling-class\">\n                    <p>{{conversation.date | date: 'EEEE,d MMMM HH:mm'}}</p>\n                    <!-- <button (click)=\"joinConversation(currentUser, conversation.id)\" class=\"btn-long btn-color-fill\" disabled><i class=\"fas fa-sign-in-alt\"></i> Join</button> -->\n                </div>\n            </div>\n        </div>\n         <!--Pagination-->\n         <mat-paginator\n         [pageSizeOptions]=\"pageItems\"\n         [length]=\"totalMyClosedConversations\"\n         [pageSize]=\"pageSize\"\n         (page)=\"pageChanged($event)\"\n         >\n         </mat-paginator>\n    </div>\n\n\n    <!--all conversation-->\n    <div *ngIf=\"categoryConversation === 'allConversations'\">\n        <div *ngFor=\"let conversation of allConversationsList\"  class=\"conv-item-card my-3 d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap\">\n            <!-- <div *ngFor=\"let participant of conversation.participants\"> -->\n\n            <!-- <div *ngFor=\"let participant of conversation.participants\">\n\n            </div> -->\n            <div class=\"d-flex col-12 col-lg-7 justify-content-between align-items-center my-3\">\n                <!-- Staff -->\n                <div routerLink='/private/staff/inbox/{{conversation.id}}' class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                    <img class=\"img-class\" src=\"../../../../../../../assets/images/others/user.jpg\">\n                    <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                        <h4>{{conversation?.name}}</h4>\n                        <p *ngIf=\"conversation?.lastMessage === null\">Incepeti o conversatie!</p>\n                        <p *ngIf=\"conversation?.lastMessage !== null\">{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                    </div>\n                </div>\n\n                <div class=\"d-flex align-items-center second-half-conv-item\">\n                    <p>{{conversation.date | date: 'EEEE,d MMMM HH:mm'}}</p>\n                </div>\n            </div>\n\n            <div class=\"d-flex col-12 col-lg-5 justify-content-between align-items-center buttons-part\">\n                <div class=\"col-md-6\">\n                    <p>Chat controlled by:</p>\n                    <div *ngFor=\"let participant of conversation.participants\">\n                        <div *ngIf=\"participant.userId !== conversation.userId\">\n                            <h5 class=\"chat-controlled-by-you\"> {{ participant.userName }}</h5>\n                        </div>\n                    </div>\n                    <div *ngIf=\"(conversation.participants.length === 1)\">\n                        <h5 class=\"chat-controlled-by-you\"> None</h5>\n                    </div>\n                    <!-- <h5 class=\"chat-controlled-by-others\">None</h5> -->\n                </div>\n                <div  class=\"d-flex justify-content-end align-items-center gap-2 col-md-6 conv-handling-class flex-wrap flex-md-nowrap\">\n                    <button class=\"btn-long btn-color-fill\" (click)=\"joinConversation(conversation.id,currentUser)\"><i class=\"fas fa-sign-in-alt\"></i> Join</button>\n                    <button class=\"btn-long btn-color-fill\" (click)=\"leaveConversation(conversation.id)\"><i class=\"fas fa-sign-out-alt\"></i> Leave</button>\n\n                </div>\n            </div>\n\n            <!-- </div> -->\n        </div>\n\n        <!--Pagination-->\n        <mat-paginator\n        [pageSizeOptions]=\"pageItems\"\n        [length]=\"totalAllConversations\"\n        [pageSize]=\"pageSize\"\n        (page)=\"pageChanged($event)\"\n        >\n        </mat-paginator>\n    </div>\n\n\n\n    <!-- <div routerLink=\"\"  class=\"conv-item-card d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap my-3\">\n        <div class=\"d-flex col-12 col-lg-7 justify-content-between align-items-center p-2 my-3\">\n            <div class=\"d-flex justify-content-start align-items-center gap-2 first-half-conv-item\">\n                <img class=\"img-class\" src=\"../../../../../../../assets/images/others/user.jpg\">\n                <div class=\"d-flex flex-column align-items-start justify-content-center\">\n                    <h4>Popa Vasilescu</h4>\n                    <p>Incepeti o conversatie!</p>\n                     <p>{{conversation?.lastMessage?.userName}} : {{conversation?.lastMessage?.content}}</p>\n                </div>\n            </div>\n            <div class=\"d-flex align-items-center second-half-conv-item\">\n                <p>2/03/2022</p>\n            </div>\n        </div>\n\n        <div class=\"d-flex col-12 col-lg-5 justify-content-between align-items-center buttons-part\">\n            <div class=\"col-md-6\">\n                <p>Chat controlled by:</p>\n                <h5 class=\"chat-controlled-by-you\">(You) Max Wellson</h5>\n                 <h5 class=\"chat-controlled-by-others\">None</h5>\n            </div>\n            <div  class=\"d-flex justify-content-end align-items-center gap-2 col-md-6 conv-handling-class flex-wrap flex-md-nowrap\">\n                <button class=\"btn-long btn-color-fill\" disabled><i class=\"fas fa-sign-in-alt\"></i> Join</button>\n                <button class=\"btn-long btn-color-fill\"><i class=\"fas fa-sign-out-alt\"></i> Leave</button>\n\n            </div>\n        </div>\n    </div> -->\n</div>\n";

/***/ }),

/***/ 68218:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/role-staff/staff-dashboard/staff-dashboard.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n<div *ngIf=\"isStaff\" class=\"row dashboard-staff\">\n    <p class=\"title-p\">\n        {{'TITLES.CONTROL-PANEL' | translate}}\n    </p>\n\n    <div class=\"dashboard-cards\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-6\" *ngIf=\"user.roles.includes('ROLE_PROVIDERS_EDIT')\">\n                <div class=\"resources\" role=\"button\" routerLink=\"../resources/list\">\n                    <p class=\"title-for-card mb-0\">{{'TITLES.RESOURCES' | translate}}</p>\n                </div>\n            </div>\n            <div class=\"{{user.roles.includes('ROLE_PROVIDERS_EDIT') ? 'col-12 col-md-6' : 'col-12'}}\">\n                <div class=\"templates\"  role=\"button\" routerLink=\"../templates\" id=\"toTemplates\">\n                    <p class=\"title-for-card mb-0\">{{'TITLES.TEMPLATES' | translate}}</p>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"{{user.roles.includes('ROLE_EVENTS_EDIT') && !user.roles.includes('ROLE_EDITORIALS_EDIT') ? 'col-12 col-md-6' : 'col-12 col-lg-4'}}\" *ngIf=\"user.roles.includes('ROLE_EVENTS_EDIT')\">\n                <div class=\"events\" role=\"button\" routerLink=\"../events\" id=\"toEvents\">\n                    <p class=\"title-for-card  mb-0\">{{'TITLES.EVENTS' | translate}}</p>\n                </div>\n            </div>\n            <div class=\"{{!user.roles.includes('ROLE_EVENTS_EDIT') && !user.roles.includes('ROLE_EDITORIALS_EDIT') ? 'col-12' : ((user.roles.includes('ROLE_EVENTS_EDIT') && !user.roles.includes('ROLE_EDITORIALS_EDIT') || (!user.roles.includes('ROLE_EVENTS_EDIT') && user.roles.includes('ROLE_EDITORIALS_EDIT')) ? 'col-12 col-md-6' : 'col-12 col-lg-4'))}}\">\n                <div class=\"trips\">\n                    <p class=\"title-for-card  mb-0\">{{'TITLES.TRIPS-OFFERS' | translate}}</p>\n                </div>\n            </div>\n            <div class=\"{{user.roles.includes('ROLE_EDITORIALS_EDIT') && !user.roles.includes('ROLE_EVENTS_EDIT') ? 'col-12 col-md-6' : 'col-12 col-lg-4'}}\" *ngIf=\"user.roles.includes('ROLE_EDITORIALS_EDIT')\" >\n                <div class=\"editorials\" role=\"button\" routerLink=\"../editorials\" id=\"toEditorials\">\n                    <p class=\"title-for-card  mb-0\">{{'TITLES.EDITORIALS' | translate}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n    <div *ngIf=\"isAdmin\" class=\"row dashboard-admin\">\n        <p class=\"title-p\">\n            {{'TITLES.CONTROL-PANEL' | translate}}\n        </p>\n\n        <div class=\"dashboard-cards-admin\">\n            <div class=\"row\">\n                <div class=\"col-12 col-md-6\" role=\"button\" routerLink=\"../staff-management/list\">\n                    <div class=\"staff-list\">\n                        <p class=\"title-for-card mb-0\">{{'TITLES.STAFF-LIST' | translate}}</p>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-6\">\n                    <div class=\"history-log\">\n                        <p class=\"title-for-card mb-0\">{{'TITLES.HISTORY-LOG' | translate}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 75659:
/*!***************************************************************************************!*\
  !*** ./src/app/features/role-staff/staff-inbox/staff-inbox.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Title bar-->\n<div ngclass=\"container-fluid\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Inbox\"\n        [buttonBackRoute]=\"'../dashboard'\">\n        </app-dashboard-header>\n    </div>\n\n\n    <!-- Tabs -->\n    <div  class=\"container inbox-container \" *ngIf=\"isStaff\">\n        <ul class=\"nav nav-tabs\" id=\"inboxTab\" role=\"tablist\" >\n            <!-- Myconversation -->\n            <li class=\"nav-item\" role=\"presentation\">\n              <button class=\"nav-link active\" id=\"my-conversation-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#myConversation\" type=\"button\" role=\"tab\" aria-controls=\"myConversation\" aria-selected=\"false\">Conversațiile mele</button>\n            </li>\n\n            <!-- Bestinform Support -->\n            <li class=\"nav-item\" role=\"presentation\">\n                <button class=\"nav-link\" id=\"bestinform-support-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#bestinformSupport\" type=\"button\" role=\"tab\" aria-controls=\"bestinformSupport\" aria-selected=\"false\">Bestinform Support</button>\n            </li>\n\n            <!-- Closed conversation -->\n            <li class=\"nav-item\" role=\"presentation\">\n                <button class=\"nav-link\" id=\"closed-conversation-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#closedConversation\" type=\"button\" role=\"tab\" aria-controls=\"closedConversation\" aria-selected=\"false\">Conversații închise</button>\n            </li>\n\n            <!-- All Bestinform Support -->\n            <!-- <li  class=\"nav-item\" role=\"presentation\">\n                    <button *ngIf=\"isAdmin\" class=\"nav-link\" id=\"all-bestinform-support-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#allBestinformSupport\" type=\"button\" role=\"tab\" aria-controls=\"allBestinformSupport\" aria-selected=\"false\">Toate conversațiile</button>\n            </li> -->\n\n          </ul>\n\n\n        <!-- Content of tabs -->\n        <div class=\"tab-content\" id=\"myTabContent\">\n            <!-- Content booking suport -->\n            <div class=\"tab-pane fade show active\" id=\"myConversation\" role=\"tabpanel\" aria-labelledby=\"booking-support-tab\">\n                <app-staff-conversation-item-card [categoryConversation]=\"'myConversations'\"></app-staff-conversation-item-card>\n            </div>\n\n            <!-- Content bestinform suport -->\n            <div class=\"tab-pane fade\" id=\"bestinformSupport\" role=\"tabpanel\" aria-labelledby=\"bestinform-support-tab\">\n              <app-staff-conversation-item-card [categoryConversation]=\"'unassignedConversations'\"></app-staff-conversation-item-card>\n\n            </div>\n\n            <!-- Closed conversation -->\n            <div class=\"tab-pane fade\" id=\"closedConversation\" role=\"tabpanel\" aria-labelledby=\"closed-conversation-tab\">\n                <app-staff-conversation-item-card [categoryConversation]=\"'myClosedConversations'\"></app-staff-conversation-item-card>\n\n              </div>\n\n            <!-- All Bestinform Support -->\n            <!-- <div *ngIf=\"isAdmin\" class=\"tab-pane fade\" id=\"allBestinformSupport\" role=\"tabpanel\" aria-labelledby=\"all-bestinform-support-tab\">\n                <app-staff-conversation-item-card [categoryConversation]=\"'allConversations'\"></app-staff-conversation-item-card>\n            </div> -->\n        </div>\n\n    </div>\n\n    <div  class=\"container inbox-container \" *ngIf=\"isAdmin\">\n        <ul class=\"nav nav-tabs\" id=\"inboxTab\" role=\"tablist\">\n\n            <!-- All Bestinform Support -->\n            <li  class=\"nav-item\" role=\"presentation\">\n                    <button  class=\"nav-link active\" id=\"all-bestinform-support-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#allBestinformSupport\" type=\"button\" role=\"tab\" aria-controls=\"allBestinformSupport\" aria-selected=\"false\">Toate conversațiile</button>\n            </li>\n\n          </ul>\n\n\n        <!-- Content of tabs -->\n        <div class=\"tab-content\" id=\"myTabContent\">\n            <!-- All Bestinform Support -->\n            <div class=\"tab-pane fade show active\" id=\"allBestinformSupport\" role=\"tabpanel\" aria-labelledby=\"all-bestinform-support-tab\">\n                <app-staff-conversation-item-card [categoryConversation]=\"'allConversations'\"></app-staff-conversation-item-card>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n";

/***/ }),

/***/ 60465:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/role-staff/view-messages-staff/view-messages-staff.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Title bar-->\n<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Mesagerie\"\n        [buttonBackRoute]=\"'/private/staff/inbox'\">\n        </app-dashboard-header>\n    </div>\n\n    <div  class=\"container view-message-container\">\n        <!--Reservation-->\n        <div  class=\"conversation-header-class d-flex justify-content-between align-items-center\">\n            <!-- img, name, email -->\n            <div class=\"d-flex justify-content-start align-items-center gap-3\">\n                <img src=\"{{((currentConversation?.featuredImage !== null) && (currentConversation?.featuredImage?.filePath !== 'string')) ? currentConversation?.featuredImage?.filePath : '../../../../../../../assets/images/others/user.jpg'}}\">\n                <div>\n                    <h4>{{convParticipantData ? (convParticipantData?.firstName +' '+ convParticipantData?.lastName) : 'Unknown'}} - {{currentConversation?.name}}</h4>\n                    <p>{{convParticipantData ? convParticipantData?.email : 'Unknown email'}}</p>\n                </div>\n            </div>\n         <!-- info button -->\n         <div class=\"d-flex align-items-center gap-2\" >\n            <!-- info conversation -->\n            <button *ngIf=\"(currentConversation?.category === 'reservation')\" (click)=\"displayInfo()\" class=\"btn-round btn-color-outline\"><i class=\"fas fa-info\"></i></button>\n            <!-- join conversation -->\n            <button *ngIf=\"hideJoinButton ===true\" class=\"btn-long btn-color-fill join-leave-button\" (click)=\"joinConversation(currentConversation?.id, currentUserId)\"><i class=\"fas fa-sign-in-alt\"></i> Join</button>\n            <!-- leave conversation -->\n            <button *ngIf=\"hideJoinButton !==true\" class=\"btn-long btn-color-fill join-leave-button\" (click)=\"leaveConversation(currentConversation?.id)\"><i class=\"fas fa-sign-out-alt\"></i> Leave</button>\n                    </div>\n\n        </div>\n\n         <!--info button-->\n         <div [ngClass]=\"{'info-display' : openedInfo,\n          'info-not-display' :  !openedInfo}\">\n            <div class=\"hidden-info row align-items-center\" *ngIf=\"(currentConversation?.category === 'reservation')\" >\n                <div class=\"col-4\">\n                    <h4>Reservation nr. {{reservationData?.reservationNumber}}</h4>\n                    <p class=\"opacity\">{{reservationData?.name}}</p>\n                </div>\n                <div class=\"col-4\">\n                    <p><i class=\"fas fa-envelope\"></i> {{convParticipantData?.email}}</p>\n                    <p><i class=\"fas fa-phone-alt\"></i>{{convParticipantData?.telephone}}</p>\n                </div>\n                <div class=\"col-4 d-flex justify-content-end align-items-center gap-2\">\n                    <p><i class=\"fas fa-ban\"></i> cancel reservation</p>\n                    <p class=\"red opacity\"><i class=\"fas fa-exclamation-triangle\"></i> report user</p>\n                </div>\n            </div>\n         </div>\n\n\n        <div class=\"conversation-component-container\">\n            <app-conversation [conversationID]=\"conversationId\"></app-conversation>\n        </div>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 71712:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/standalone-components/notifications-component/notifications-component.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"main-content\" class=\"container\">\n<h2>it works</h2>\n\n<div *ngFor=\"let notification of listNotification\">\n    <p>{{notification.subject}}</p>\n</div>\n    <!-- <div class=\"row\">\n        <div class=\"col-md-12\">\n           {{ greeting }}\n        </div>\n    </div>\n    \n  <div class=\"row\">\n      <div class=\"col-md-6\">\n          <form class=\"form-inline\">\n              <div class=\"form-group\">\n                  <label for=\"connect\">WebSocket connection:</label> -->\n                  <!-- <button (click)=\"connect()\" class=\"btn btn-default\" type=\"submit\">Connect</button>\n                  <button (click)=\"disconnect()\" class=\"btn btn-default\" type=\"submit\" >Disconnect\n                  </button> -->\n              <!-- </div>\n          </form>\n      </div>\n      <div class=\"col-md-6\">\n          <form class=\"form-inline\">\n              <div class=\"form-group\">\n                  <label for=\"name\">What is your name?</label>\n                  <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control\" name=\"name\"> <br>\n               <button (click)=\"sendMessage()\" class=\"btn btn-default\" type=\"submit\">Send</button> \n          </form>\n      </div>\n\n      <p> {{ greeting }}</p> \n  </div>-->\n \n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_features_role-staff_role-staff_module_ts.js.map