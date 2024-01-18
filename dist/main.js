(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["main"],{

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookieconsent */ 55045);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ 16525);
/* harmony import */ var _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/_services/localStorage.service */ 72538);











let AppComponent = class AppComponent {
  constructor(appSettings, router, platformId, translate, ccService, cookieService, localStorage) {
    this.appSettings = appSettings;
    this.router = router;
    this.platformId = platformId;
    this.translate = translate;
    this.ccService = ccService;
    this.cookieService = cookieService;
    this.localStorage = localStorage;
    this.settings = this.appSettings.settings;
    translate.addLangs(['en', 'de', 'fr', 'ru', 'tr', 'ro']);
    translate.setDefaultLang('ro');
    translate.use('ro');
    // this.cookieService.set('Test', 'Hello World');
    // this.cookieValue = this.cookieService.get('Test');
    // console.log("linkul care imi trebuie mie", router.url.length);
  }

  ngOnInit() {
    console.log('color mode', this.localStorage.get('colorMode'));
    if (this.localStorage.get('colorMode')) {
      document.documentElement.setAttribute('data-theme', this.localStorage.get('colorMode'));
    } else {
      this.localStorage.set('colorMode', 'light');
      document.documentElement.setAttribute('data-theme', this.localStorage.get('colorMode'));
    }
    this.translate.get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy']).subscribe(data => {
      this.ccService.getConfig().content = this.ccService.getConfig().content || {};
      // Override default messages with the translated ones
      this.ccService.getConfig().content.header = data['cookie.header'];
      this.ccService.getConfig().content.message = data['cookie.message'];
      this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
      this.ccService.getConfig().content.allow = data['cookie.allow'];
      this.ccService.getConfig().content.deny = data['cookie.deny'];
      this.ccService.getConfig().content.link = '/content/privacy-policy';
      this.ccService.getConfig().content.policy = data['cookie.policy'];
      this.ccService?.destroy(); // remove previous cookie bar (with default messages)
      this.ccService.init(this.ccService.getConfig()); // update config with translated messages
    });
    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {
      console.log(this.popupOpenSubscription);
      // you can use this.ccService.getConfig() to do stuff...
    });

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => {
      // you can use this.ccService.getConfig() to do stuff...
    });
    this.initializingSubscription = this.ccService.initializing$.subscribe(event => {
      // the cookieconsent is initilializing... Not yet safe to call methods like `NgcCookieConsentService.hasAnswered()`
      console.log(`initializing: ${JSON.stringify(event)}`);
    });
    this.initializedSubscription = this.ccService.initialized$.subscribe(() => {
      // the cookieconsent has been successfully initialized.
      // It's now safe to use methods on NgcCookieConsentService that require it, like `hasAnswered()` for eg...
      console.log(`initialized: ${JSON.stringify(event)}`);
    });
    this.initializationErrorSubscription = this.ccService.initializationError$.subscribe(event => {
      // the cookieconsent has failed to initialize...
      console.log(`initializationError: ${JSON.stringify(event.error?.message)}`);
    });
    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(event => {
      // you can use this.ccService.getConfig() to do stuff...
      console.log('NgcStatusChangeEvent', event);
      if (event.status === 'allow') {
        this.ccService.close(false);
      }
    });
    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(() => {
      // you can use this.ccService.getConfig() to do stuff...
    });
    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(event => {
      // you can use this.ccService.getConfig() to do stuff...
    });
    if (this.ccService.hasConsented()) {
      this.ccService.destroy();
    }
  }
  ngAfterViewInit() {
    //   if (this.router.url.includes('/client')) {
    //     const dfMessenger = document.querySelector('df-messenger');
    //     dfMessenger.addEventListener('df-messenger-ready', () => {
    //       console.log('test df');
    //       // Inject additional parameters to the Dialogflow Messenger
    //       dfMessenger.setAttribute('userId', 'value1');
    //       dfMessenger.setAttribute('userCity', 'value2');
    //     });
    // }
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
        setTimeout(() => {
          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
          }
        });
      }
    });
    document.getElementById('preloader').classList.add('hide');
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
        // this.sidenav.close();
        this.settings.mainToolbarFixed = false;
        setTimeout(() => {
          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
          }
        });
      }
    });
  }
  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializingSubscription.unsubscribe();
    this.initializedSubscription.unsubscribe();
    this.initializationErrorSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
  static #_ = this.ctorParameters = () => [{
    type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID]
    }]
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
  }, {
    type: ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_8__.NgcCookieConsentService
  }, {
    type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__.CookieService
  }, {
    type: _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-progressbar */ 34909);
/* harmony import */ var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-progressbar/http */ 13492);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-embed-video */ 81015);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-input-file */ 89618);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ 58319);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ 28758);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/not-found/not-found.component */ 95707);
/* harmony import */ var _theme_components_lang_lang_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/components/lang/lang.component */ 79578);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_services_universalAppInterceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/_services/universalAppInterceptor.service */ 98757);
/* harmony import */ var _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/_services/localStorage.service */ 72538);
/* harmony import */ var _shared_services_jwtToken_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/_services/jwtToken.service */ 57453);
/* harmony import */ var _vime_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @vime/angular */ 8662);
/* harmony import */ var _theme_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/components/toast/toast.component */ 66462);
/* harmony import */ var _theme_components_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/components/toaster/toaster.component */ 88356);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @kolkov/angular-editor */ 89971);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _shared_services_web_socket_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/_services/web-socket.service */ 50754);
/* harmony import */ var _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular-material-components/moment-adapter */ 73047);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-lazyload-image */ 33957);
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-cookieconsent */ 55045);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-cookie-service */ 16525);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/service-worker */ 63769);













































const config = {
  fileAccept: '*'
};
const cookieConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },

  palette: {
    popup: {
      background: '#24398A'
    },
    button: {
      background: '#FFCC29'
    }
  },
  theme: 'edgeless',
  type: 'opt-out',
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}} 
    <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="/content/privacy-policy" target="_blank" rel="noopener">Află mai multe</a>    </span>
    `
  }
};
function HttpLoaderFactory(httpClient) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__.TranslateHttpLoader(httpClient, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + '/assets/i18n/', '.json');
}
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent, _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent, _theme_components_lang_lang_component__WEBPACK_IMPORTED_MODULE_8__.LangComponent, _theme_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__.ToastComponent, _theme_components_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_13__.ToasterComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClient]
    }
  }), ngx_embed_video__WEBPACK_IMPORTED_MODULE_0__.EmbedVideo.forRoot(), ngx_progressbar__WEBPACK_IMPORTED_MODULE_23__.NgProgressModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_24__.NgProgressHttpModule, ngx_input_file__WEBPACK_IMPORTED_MODULE_25__.InputFileModule.forRoot(config), _app_routing__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbModule, _vime_angular__WEBPACK_IMPORTED_MODULE_27__.VimeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_30__.MatLegacyPaginatorModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_31__.MatLegacyTableModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_32__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_33__.MatLegacyInputModule, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_34__.AngularEditorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__.MatDialogModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_38__.NgxQRCodeModule, _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_39__.NgxMatMomentModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_40__.LazyLoadImageModule, ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_41__.NgcCookieConsentModule.forRoot(cookieConfig), _angular_service_worker__WEBPACK_IMPORTED_MODULE_42__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.isDevMode)(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })],
  providers: [_app_settings__WEBPACK_IMPORTED_MODULE_6__.AppSettings, _shared_services_web_socket_service__WEBPACK_IMPORTED_MODULE_14__.WebSocketAPI, {
    provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__.OverlayContainer,
    useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_2__.CustomOverlayContainer
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS,
    useClass: _shared_services_universalAppInterceptor_service__WEBPACK_IMPORTED_MODULE_9__.UniversalAppInterceptor,
    multi: true
  }, {
    provide: _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__.LocalStorageService,
    useClass: _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__.LocalStorageService
  }, {
    provide: _shared_services_jwtToken_service__WEBPACK_IMPORTED_MODULE_11__.JwtTokenService,
    useClass: _shared_services_jwtToken_service__WEBPACK_IMPORTED_MODULE_11__.JwtTokenService
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MAT_DATE_LOCALE,
    useValue: 'ro-RO'
  }, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_44__.CookieService],
  exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_17__.CUSTOM_ELEMENTS_SCHEMA]
})], AppModule);


/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/not-found/not-found.component */ 95707);
/* harmony import */ var _shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/_services/user-roles.guard */ 16070);
/* harmony import */ var _lowercase_url_serializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lowercase-url-serializer */ 29124);







const routes = [{
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ol_Map_js-node_modules_ol_layer_Tile_js-node_modules_ol_source_OSM_js"), __webpack_require__.e("default-src_app_features_public-homepage_public-homepage_module_ts"), __webpack_require__.e("default-src_app_shared__services_languageStorage_service_ts-src_app_shared__services_user-loc-b20d77"), __webpack_require__.e("src_app_shared__services_resource-filter_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/public-homepage/public-homepage.module */ 5139)).then(m => m.PublicHomepageModule)
}, {
  path: 'private',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_standalone-components_footer_footer_component_ts-src_app_standalone-component-7c1c06"), __webpack_require__.e("src_app_features_private_private_module_ts-src_app_shared__services_languageStorage_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/private/private.module */ 13599)).then(m => m.PrivateModule)
}, {
  path: 'client',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2020_ngx-owl-carousel-o_mjs"), __webpack_require__.e("default-src_app_shared__services_reservations_service_ts-src_app_standalone-components_all-no-f71d7e"), __webpack_require__.e("default-src_app_standalone-components_resource-card_resource-card_component_ts"), __webpack_require__.e("default-src_app_standalone-components_change-pass_change-pass_component_ts-src_app_standalone-f14a88"), __webpack_require__.e("default-src_app_shared__services_languageStorage_service_ts-src_app_shared__services_user-loc-b20d77"), __webpack_require__.e("default-src_app_features_reservations_cancel-reservation-modal_cancel-reservation-modal_compo-bdeb9f"), __webpack_require__.e("default-src_app_standalone-components_footer_footer_component_ts-src_app_standalone-component-7c1c06"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_role-client_role-client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/role-client/role-client.module */ 33827)).then(m => m.RoleClientModule),
  canActivate: [_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_1__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_CLIENT', 'ROLE_SUPER_ADMIN', 'ROLE_PROVIDER', 'ROLE_STAFF']
  }
}, {
  path: 'newsletter-old',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2020_ngx-owl-carousel-o_mjs"), __webpack_require__.e("src_app_features_newsletter_newsletter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/newsletter/newsletter.module */ 88536)).then(m => m.NewsletterModule)
}, {
  path: 'provideroffer',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_landing-channel-manager_landing-channel-manager_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/landing-channel-manager/landing-channel-manager.module */ 74006)).then(m => m.LandingChannelManagerModule)
}, {
  path: 'newsletter',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2020_ngx-owl-carousel-o_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_landing-bestinform_landing-bestinform_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/landing-bestinform/landing-bestinform.module */ 36787)).then(m => m.LandingBestinformModule)
}, {
  path: 'parteneri',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_landing-partner_landing-partner_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/landing-partner/landing-partner.module */ 10136)).then(m => m.LandingPartnerModule)
}, {
  path: 'content',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ol_Map_js-node_modules_ol_layer_Tile_js-node_modules_ol_source_OSM_js"), __webpack_require__.e("default-src_app_features_public-homepage_public-homepage_module_ts"), __webpack_require__.e("default-src_app_shared__services_languageStorage_service_ts-src_app_shared__services_user-loc-b20d77"), __webpack_require__.e("default-src_app_features_secondary-pages_secondary-pages_module_ts"), __webpack_require__.e("src_app_shared__services_resource-filter_service_ts-src_app_standalone-components_dashboard-h-29d14b")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/secondary-pages/secondary-pages.module */ 24725)).then(m => m.SecondaryPagesModule)
},
// {path: '', loadChildren: () => import('./features/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)},
{
  path: '**',
  component: _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
    // linia urmatoarea fiind comentata, lazy module loading este activat
    // preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabledBlocking'
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__.UrlSerializer,
    useClass: _lowercase_url_serializer__WEBPACK_IMPORTED_MODULE_2__.LowercaseUrlSerializer
  }]
})], AppRoutingModule);


/***/ }),

/***/ 1182:
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettings": () => (/* binding */ AppSettings),
/* harmony export */   "Settings": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class Settings {
  constructor(url, name, theme, toolbar, stickyMenuToolbar, header, rtl, searchPanelVariant, searchOnBtnClick, currency,
  //additional options
  mainToolbarFixed, contentOffsetToTop, headerBgImage, headerBgVideo, loadMore) {
    this.url = url;
    this.name = name;
    this.theme = theme;
    this.toolbar = toolbar;
    this.stickyMenuToolbar = stickyMenuToolbar;
    this.header = header;
    this.rtl = rtl;
    this.searchPanelVariant = searchPanelVariant;
    this.searchOnBtnClick = searchOnBtnClick;
    this.currency = currency;
    this.mainToolbarFixed = mainToolbarFixed;
    this.contentOffsetToTop = contentOffsetToTop;
    this.headerBgImage = headerBgImage;
    this.headerBgVideo = headerBgVideo;
    this.loadMore = loadMore;
  }
}
let AppSettings = class AppSettings {
  constructor() {
    this.settings = new Settings('https://bestinform.eu', 'Bestinform',
    // theme name
    'blue',
    // blue, green, red, pink, purple, grey, orange-dark
    1,
    // 1 or 2
    true,
    // true = sticky, false = not sticky
    'image',
    // default, image, carousel, map, video
    false,
    // true = rtl, false = ltr
    1,
    //  1, 2  or 3
    false,
    //  true = search on button click
    'USD',
    // USD, EUR
    //NOTE:  don't change additional options values, they used for theme performance
    false, false, false, false, {
      start: false,
      step: 1,
      load: false,
      page: 1,
      complete: false,
      result: 0
    });
  }
};
AppSettings = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], AppSettings);


/***/ }),

/***/ 95707:
/*!***********************************************************!*\
  !*** ./src/app/features/not-found/not-found.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component.html?ngResource */ 79484);
/* harmony import */ var _not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component.scss?ngResource */ 66302);
/* harmony import */ var _not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let NotFoundComponent = class NotFoundComponent {
  constructor(router) {
    this.router = router;
  }
  goHome() {
    this.router.navigate(['/']);
  }
  ngAfterViewInit() {
    document.getElementById('preloader').classList.add('hide');
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
NotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-not-found',
  template: _not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NotFoundComponent);


/***/ }),

/***/ 94930:
/*!***************************************************************!*\
  !*** ./src/app/features/reports/_services/reports.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsService": () => (/* binding */ ReportsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 19337);




let ReportsService = class ReportsService {
  constructor(http) {
    this.http = http;
    // fara port aici
    this.url = 'https://bestinform.eu/jasperserver/rest_v2/login';
    this.options = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
  }
  loginJasper(username, password) {
    const formData = new URLSearchParams();
    formData.set('j_username', username);
    formData.set('j_password', password);
    return this.http.post(this.url, formData.toString(), {
      ...this.options,
      observe: 'response'
    }).pipe(
    // Use the tap operator to process the response
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      // Check if the response contains a 'Set-Cookie' header
      if (response.headers.has('Set-Cookie')) {
        console.log('headers jasper', response.headers);
        console.log('cookie jasper', response.headers.get('Set-Cookie'));
        // Get the value of the 'Set-Cookie' header
        const cookieValue = response.headers.get('Set-Cookie');
        // Save the cookie value to local storage
        localStorage.setItem('JasperID', cookieValue);
      }
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
ReportsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ReportsService);


/***/ }),

/***/ 29124:
/*!*********************************************!*\
  !*** ./src/app/lowercase-url-serializer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LowercaseUrlSerializer": () => (/* binding */ LowercaseUrlSerializer)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 60124);

class LowercaseUrlSerializer extends _angular_router__WEBPACK_IMPORTED_MODULE_0__.DefaultUrlSerializer {
  parse(url) {
    // Convert the URL to lowercase before parsing
    return super.parse(url.toLowerCase());
  }
}

/***/ }),

/***/ 31873:
/*!*******************************************************************!*\
  !*** ./src/app/shared/_components/bf-chips/bf-chips.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BfChipsComponent": () => (/* binding */ BfChipsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bf_chips_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bf-chips.component.html?ngResource */ 2758);
/* harmony import */ var _bf_chips_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bf-chips.component.scss?ngResource */ 70944);
/* harmony import */ var _bf_chips_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bf_chips_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let BfChipsComponent = class BfChipsComponent {
  static #_ = this.propDecorators = {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
BfChipsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-bf-chips',
  template: _bf_chips_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_bf_chips_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BfChipsComponent);


/***/ }),

/***/ 47338:
/*!***************************************************************************!*\
  !*** ./src/app/shared/_components/choose-media/choose-media.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseMediaComponent": () => (/* binding */ ChooseMediaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _choose_media_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-media.component.html?ngResource */ 75826);
/* harmony import */ var _choose_media_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-media.component.scss?ngResource */ 26756);
/* harmony import */ var _choose_media_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_choose_media_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/media.service */ 21847);
/* harmony import */ var _services_modalmedia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/modalmedia.service */ 34864);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/toast.service */ 62941);










let ChooseMediaComponent = class ChooseMediaComponent {
  constructor(fb, mediaService, modalMediaService, toastService) {
    this.fb = fb;
    this.mediaService = mediaService;
    this.modalMediaService = modalMediaService;
    this.toastService = toastService;
    this.pageSizeArray = [24, 36, 72, 96];
    this.dir = 'desc';
    this.sort = 'date';
    this.selectedImages = [];
    this.selectedFilesArray = [];
    this.selectedFiles = [];
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.listenForSelectedMedia();
    this.pageSize = 24;
    this.pageNumber = 1;
    this.formInit();
    this.getMedia();
  }
  listenForSelectedMedia() {
    if (!this.multipleSelect) return;
    this.modalMediaService.currentImagesArray.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.selectedImages = [...res];
      }
    });
    this.modalMediaService.currentFilesArray.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.selectedFilesArray = [...res];
      }
    });
  }
  formInit() {
    this.mediaForm = this.fb.group({
      name: [null],
      category: this.category
    });
  }
  getMedia() {
    this.pageNumber = 1;
    const filterObj = {
      category: this.mediaForm.value.category ? this.mediaForm.value.category : null,
      name: this.mediaForm.value.name ? this.mediaForm.value.name : null
    };
    this.mediaService.listMediaFiltered(this.pageNumber - 1, this.pageSize, this.sort, this.dir, filterObj).subscribe(mediaList => {
      console.log(mediaList);
      this.mediaList = mediaList.content;
      this.paginationInfo = mediaList;
    });
  }
  pageChange(event) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    const filterObj = {
      category: this.mediaForm.value.category ? this.mediaForm.value.category : null,
      name: this.mediaForm.value.name ? this.mediaForm.value.name : null
    };
    this.mediaService.listMediaFiltered(this.pageNumber - 1, this.pageSize, this.sort, this.dir, filterObj).subscribe(mediaList => {
      console.log(mediaList);
      this.mediaList = mediaList.content;
      this.paginationInfo = mediaList;
    });
  }
  checkForSelection(media) {
    // console.log('check', media);
    if (media.category === 'image') {
      // console.log('case 1', this.selectedImages.some((image: any) => image.filePath === media.path))
      return this.selectedImages.some(image => image.filePath === media.path);
    } else {
      // console.log('case 2', this.selectedFilesArray.some((file: any) => file.filePath === media.path))
      return this.selectedFilesArray.some(file => file.filePath === media.path);
    }
  }
  onSelectMedia(event, media) {
    console.log(media);
    const selectedMedia = {
      filePath: media.path,
      fileName: media.name
    };
    if (!this.multipleSelect) {
      if (event.target.checked) {
        this.selectedImages = [];
        this.selectedImages.push({
          for: this.for,
          selectedMedia: selectedMedia
        });
        this.modalMediaService.changeImageArray(this.selectedImages);
        console.log(selectedMedia);
      }
    } else {
      if (event.target.checked) {
        if (media.category === 'image') {
          this.selectedImages.push(selectedMedia);
          this.modalMediaService.changeImageArray(this.selectedImages);
        } else {
          this.selectedFilesArray.push(selectedMedia);
          this.modalMediaService.changeFileArray(this.selectedFilesArray);
        }
      } else {
        if (media.category === 'image') {
          if (this.selectedImages.findIndex(x => x.fileName === selectedMedia.fileName) !== -1) {
            this.selectedImages.splice(this.selectedImages.findIndex(x => x.fileName === selectedMedia.fileName), 1);
            this.modalMediaService.changeImageArray(this.selectedImages);
          }
        } else {
          if (this.selectedFilesArray.findIndex(x => x.fileName === selectedMedia.fileName) !== -1) {
            this.selectedFilesArray.splice(this.selectedFilesArray.findIndex(x => x.fileName === selectedMedia.fileName), 1);
            this.modalMediaService.changeFileArray(this.selectedFilesArray);
          }
        }
      }
    }
  }
  onImgChange(event) {
    this.selectedFiles = event.target.files;
    // this.cdr.detectChanges();
    this.addMedia();
  }
  addMedia() {
    if (this.selectedFiles.length > 0) {
      this.mediaService.addMedia().subscribe(resp => {
        this.mediaId = resp.reason;
        this.uploadImage(this.mediaId);
      });
    }
  }
  uploadImage(solutionId) {
    if (this.selectedFiles.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('file', this.selectedFiles[i]);
      }
      this.mediaService.uploadMedia(solutionId, formData).subscribe(res => {
        this.getMedia();
      }, error => {
        console.log('nu s-a trimis', error);
        if (error.error.reason === 'fileSizeTooBig') {
          this.toastService.showToast('Error', 'Fișierul încărcat este prea mare. Trebuie să aibă maxim 2MB.', "error");
        } else {
          this.toastService.showToast('Error', 'Fișierul NU a fost încărcat!', "error");
        }
      });
    }
  }
  ngOnDestroy() {
    // daca suntem pe single select, golim arrayul din serviciu
    if (!this.multipleSelect) {
      this.modalMediaService.changeImageArray([]);
      this.modalMediaService.changeFileArray([]);
    }
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: _services_media_service__WEBPACK_IMPORTED_MODULE_2__.MediaService
  }, {
    type: _services_modalmedia_service__WEBPACK_IMPORTED_MODULE_3__.ModalMediaService
  }, {
    type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }];
  static #_2 = this.propDecorators = {
    category: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    multipleSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    modalRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    for: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }]
  };
};
ChooseMediaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-choose-media',
  template: _choose_media_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_choose_media_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ChooseMediaComponent);


/***/ }),

/***/ 86373:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/_components/custom-checkbox/custom-checkbox.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomCheckboxComponent": () => (/* binding */ CustomCheckboxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _custom_checkbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-checkbox.component.html?ngResource */ 93976);
/* harmony import */ var _custom_checkbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-checkbox.component.scss?ngResource */ 42590);
/* harmony import */ var _custom_checkbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom_checkbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let CustomCheckboxComponent = class CustomCheckboxComponent {
  changeValue(event) {
    const checked = event.target.checked;
    this.control.setValue(checked ? 'true' : 'false');
  }
  static #_ = this.propDecorators = {
    control: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
CustomCheckboxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-custom-checkbox',
  template: _custom_checkbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_custom_checkbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CustomCheckboxComponent);


/***/ }),

/***/ 50751:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/_components/dynamic-inputs/dynamic-inputs.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicInputsComponent": () => (/* binding */ DynamicInputsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dynamic_inputs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-inputs.component.html?ngResource */ 52277);
/* harmony import */ var _dynamic_inputs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-inputs.component.scss?ngResource */ 4588);
/* harmony import */ var _dynamic_inputs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dynamic_inputs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);





let DynamicInputsComponent = class DynamicInputsComponent {
  constructor() {
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngOnInit() {
    this.formControl = this.control;
  }
  clearInput() {
    this.control.patchValue('');
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.propDecorators = {
    control: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    inputFormData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
DynamicInputsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-dynamic-inputs',
  template: _dynamic_inputs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dynamic_inputs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DynamicInputsComponent);


/***/ }),

/***/ 46700:
/*!*******************************************************!*\
  !*** ./src/app/shared/_pipes/flight-duration.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightDurationPipe": () => (/* binding */ FlightDurationPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let FlightDurationPipe = class FlightDurationPipe {
  transform(value) {
    const hours = value.match(/(\d+)H/)?.[1] || '0';
    const minutes = value.match(/(\d+)M/)?.[1] || '0';
    return `${hours} ore si ${minutes} minute`;
  }
};
FlightDurationPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'flightDuration'
})], FlightDurationPipe);


/***/ }),

/***/ 39313:
/*!********************************************************!*\
  !*** ./src/app/shared/_pipes/minutes-to-hours.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinutesToHours": () => (/* binding */ MinutesToHours)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let MinutesToHours = class MinutesToHours {
  transform(value) {
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    return hours + ' : ' + (minutes == 0 ? '00' : minutes);
  }
};
MinutesToHours = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'minutesToHours'
})], MinutesToHours);


/***/ }),

/***/ 40844:
/*!********************************************!*\
  !*** ./src/app/shared/_pipes/safe.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 34497);



let SafePipe = class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer
  }];
};
SafePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
  name: 'safe'
})], SafePipe);


/***/ }),

/***/ 89611:
/*!************************************************************!*\
  !*** ./src/app/shared/_pipes/value-type-transform.pipe.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueTypeTransformPipe": () => (/* binding */ ValueTypeTransformPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 38699);



let ValueTypeTransformPipe = class ValueTypeTransformPipe {
  constructor(translate) {
    this.translate = translate;
  }
  transform(valueType) {
    if (valueType === "text") {
      return "Text";
    } else if (valueType === "number") {
      return this.translate.instant("VALUE-TYPE.NUMBER");
    } else if (valueType === "textarea") {
      return this.translate.instant("VALUE-TYPE.TEXTAREA");
    } else if (valueType === "select") {
      return this.translate.instant("VALUE-TYPE.SELECT");
    } else if (valueType === "multiple-select") {
      return this.translate.instant("VALUE-TYPE.MULTIPLE-SELECT");
    } else {
      return valueType;
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService
  }];
};
ValueTypeTransformPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
  name: 'valueTypeTransform'
})], ValueTypeTransformPipe);


/***/ }),

/***/ 56566:
/*!**************************************************!*\
  !*** ./src/app/shared/_services/auth.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _localStorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.service */ 72538);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);







let AuthService = class AuthService {
  constructor(http, localStorage, router) {
    this.http = http;
    this.localStorage = localStorage;
    this.router = router;
    this.JWT_TOKEN = "token";
    this.REFRESH_TOKEN = "refreshToken";
    // Functions For User Changes Detection
    this.userChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.userChangedObs = this.userChanged.asObservable();
    // Functions 2FA auth
    this.twoFA = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.twoFAObs = this.twoFA.asObservable();
  }
  // Trigger
  triggerUserChanges(message) {
    // Change the subject value
    this.userChanged.next(message);
  }
  // Trigger
  trigger2FA(message) {
    // Change the subject value
    this.twoFA.next(message);
  }
  login(data) {
    return this.http.post("/bestinform/login", data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(tokens => this.doLoginUser(data.email, tokens)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      console.log('login service', res);
      return res;
    })
    // ,
    // catchError(() => {
    //     // console.log('error login service', error.error.reason)
    //     return of(false);
    // })
    );
  }

  login2FA(authenticationCode) {
    return this.http.post("/bestinform/login2FA?authenticationCode=" + authenticationCode, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(tokens => this.doLoginUser(authenticationCode, tokens)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      console.log('2fa login service', res);
      return res;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.log('2fa error login service', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
    }));
  }
  sendAuthenticationCode(dataObj) {
    return this.http.post("/bestinform/sendAuthenticationCode", dataObj);
  }
  sendUserInvalidSessionEmail(email) {
    return this.http.get("/bestinform/sendUserInvalidSessionEmail?email=" + email);
  }
  doLoginUser(username, tokens) {
    console.log('do login service', tokens);
    this.loggedUser = username;
    this.storeTokens(tokens);
  }
  storeTokens(tokens) {
    console.log('store tokens', tokens);
    this.localStorage.set(this.JWT_TOKEN, tokens.token);
    this.localStorage.set(this.REFRESH_TOKEN, tokens.refreshToken);
  }
  logout() {
    this.loggedUser = null;
    // this.router.navigate(["/home"]);
    console.log('logout');
    // window.location.href = 'https://bestinform.eu/bestinform/logout';
    this.http.post("/bestinform/logoutUser", {}).subscribe(resp => {
      console.log('m-am delogat', resp);
      this.removeTokens();
      this.localStorage.remove('colorMode');
      this.localStorage.set('langFromStorage', 'ro');
    });
  }
  removeTokens() {
    this.localStorage.remove(this.JWT_TOKEN);
    this.localStorage.remove(this.REFRESH_TOKEN);
    this.router.navigate(['/']);
  }
  refreshToken() {
    return this.http.post('/bestinform/refreshToken?refreshToken=' + this.getRefreshToken(), {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(tokens => {
      this.storeTokens(tokens);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.log('error refresh token');
      this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
    }));
  }
  getRefreshToken() {
    return this.localStorage.get(this.REFRESH_TOKEN);
  }
  getJWTToken() {
    // console.log('token', this.localStorage.get(this.JWT_TOKEN));
    // console.log('token 2', Object.entries(localStorage));
    return this.localStorage.get(this.JWT_TOKEN);
  }
  isLoggedIn() {
    return !!this.getJWTToken();
  }
  register(user) {
    return this.http.post("/bestinform/registerUser", user);
  }
  sendRegistrationEmail(id) {
    return this.http.get("/bestinform/sendRegistrationEmail?userId=" + id);
  }
  sendResetUserPassword(email) {
    return this.http.get("/bestinform/sendResetUserPassword?email=" + email);
  }
  resetPassword(password) {
    return this.http.post("/bestinform/resetNewPassword", password);
  }
  getCurrentUser() {
    return this.http.get("/bestinform/getCurrentUser");
  }
  loginWithFacebook(role, email, token) {
    return this.http.post("/bestinform/loginWithFacebook?role=client", {
      accessToken: token
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(tokens => this.doLoginUser(email, tokens)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      console.log('login service social', res);
      return res;
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }, {
    type: _localStorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }];
};
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: "root"
})], AuthService);


/***/ }),

/***/ 57453:
/*!******************************************************!*\
  !*** ./src/app/shared/_services/jwtToken.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtTokenService": () => (/* binding */ JwtTokenService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 79168);



let JwtTokenService = class JwtTokenService {
  setToken(token) {
    if (token) {
      this.jwtToken = token;
    }
  }
  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(this.jwtToken);
    }
  }
  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken["exp"] : null;
  }
  isTokenExpired() {
    const expiryTime = this.getExpiryTime();
    if (expiryTime) {
      return 1000 * +expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
  getDecodedToken() {
    this.jwtToken = localStorage.getItem('token');
    if (this.jwtToken) {
      this.decodeToken();
      return this.decodedToken;
    }
    return null;
  }
};
JwtTokenService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], JwtTokenService);


/***/ }),

/***/ 72538:
/*!**********************************************************!*\
  !*** ./src/app/shared/_services/localStorage.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let LocalStorageService = class LocalStorageService {
  set(key, value) {
    localStorage.setItem(key, value);
  }
  get(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : null;
  }
  remove(key) {
    localStorage.removeItem(key);
  }
};
LocalStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], LocalStorageService);


/***/ }),

/***/ 21847:
/*!***************************************************!*\
  !*** ./src/app/shared/_services/media.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaService": () => (/* binding */ MediaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let MediaService = class MediaService {
  constructor(http) {
    this.http = http;
  }
  //list of photos
  listMediaFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listMediaFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  //update media
  updateMedia(mediaId, mediaData) {
    return this.http.put('/bestinform/updateMedia?mediaId=' + mediaId, mediaData);
  }
  //change media status
  changeMediaStatus(status, mediaId) {
    return this.http.put('/bestinform/changeMediaStatus?status=' + status + '&mediaId=' + mediaId, {});
  }
  //upload media
  uploadMedia(mediaId, file) {
    return this.http.post('/bestinform/uploadMedia?mediaId=' + mediaId, file);
  }
  //add media
  addMedia() {
    return this.http.post('/bestinform/addMedia', {});
  }
  //get media by id
  getMediaById(mediaId) {
    return this.http.get('/bestinform/getMediaById?mediaId=' + mediaId);
  }
  //delete media by id
  deleteMediaById(mediaId) {
    return this.http.delete('/bestinform/deleteMediaById?mediaId=' + mediaId, {});
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
MediaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: "root"
})], MediaService);


/***/ }),

/***/ 34864:
/*!********************************************************!*\
  !*** ./src/app/shared/_services/modalmedia.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalMediaService": () => (/* binding */ ModalMediaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);



let ModalMediaService = class ModalMediaService {
  constructor() {
    this.selectedImageMedia = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.currentImagesArray = this.selectedImageMedia.asObservable();
    this.selectedFileMedia = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.currentFilesArray = this.selectedFileMedia.asObservable();
    this.serviceImages = [];
    this.serviceFiles = [];
  }
  changeImageArray(message) {
    this.selectedImageMedia.next(message);
  }
  changeFileArray(message) {
    this.selectedFileMedia.next(message);
  }
  sendImagesToService(images) {
    this.serviceImages = [...images];
  }
  getImagesFromService() {
    return [...this.serviceImages];
  }
  sendFilesToService(files) {
    this.serviceFiles = [...files];
  }
  getFilesFromService() {
    return [...this.serviceFiles];
  }
  static #_ = this.ctorParameters = () => [];
};
ModalMediaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
}), (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], ModalMediaService);


/***/ }),

/***/ 62941:
/*!***************************************************!*\
  !*** ./src/app/shared/_services/toast.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);



let ToastService = class ToastService {
  constructor() {
    this._toastEvents = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.toastEvents = this._toastEvents.asObservable();
  }
  showToast(title, message, type, hidden) {
    this._toastEvents.next({
      message,
      title,
      type: type,
      hidden
    });
  }
  static #_ = this.ctorParameters = () => [];
};
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ToastService);


/***/ }),

/***/ 98757:
/*!*********************************************************************!*\
  !*** ./src/app/shared/_services/universalAppInterceptor.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversalAppInterceptor": () => (/* binding */ UniversalAppInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 56566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.service */ 62941);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _features_reports_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/reports/_services/reports.service */ 94930);









let UniversalAppInterceptor = class UniversalAppInterceptor {
  constructor(authService, toastService, reportsService, router) {
    this.authService = authService;
    this.toastService = toastService;
    this.reportsService = reportsService;
    this.router = router;
    this.isRefreshing = false;
    this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
  }
  intercept(req, next) {
    // console.log('INTERCEPTEZ', req);
    if (req.url.startsWith("/bestinform")) {
      if (!req.url.startsWith("/bestinform/login") && !req.url.startsWith("/bestinform/registerUser") && !req.url.startsWith("/bestinform/sendRegistrationEmail") && !req.url.startsWith("/bestinform/sendResetUserPassword?email=") && !req.url.startsWith("/bestinform/resetNewPassword") && !req.url.startsWith("/bestinform/getHomepageByLanguageAndApp") && !req.url.startsWith("/bestinform/listEditorialFiltered") && !req.url.startsWith("/bestinform/listResourceTemplateFiltered") && !req.url.startsWith("/bestinform/getAttributeById") && !req.url.startsWith("/bestinform/getAttributeMaxOrderByCategoryId") && !req.url.startsWith("/bestinform/listAttributesFiltered") && !req.url.startsWith("/bestinform/sendAuthenticationCode")
      // !req.url.startsWith("/bestinform/sendProviderApprovedEmail?userId")
      ) {
        // console.log('trebuie pus token');
        if (this.authService.getJWTToken()) {
          // console.log('iau token');
          req = this.addToken(req, this.authService.getJWTToken());
        } else {
          req = req.clone({
            // pt dev
            url: 'https://bestinform.eu' + req.url
            // pt build
            // url:  'https://bestinform.eu' + req.url
          });
        }
      } else {
        console.log('NU AM TOKEN');
        req = req.clone({
          // pt dev
          url: 'https://bestinform.eu' + req.url
          // pt build
          // url:  'https://bestinform.eu' + req.url
        });
      }
    }

    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.log('EROAREEE', error);
      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse && error.status === 401 && error.error.reason === 'tokenExpired') {
        return this.handleTokenExpiredError(req, next);
      } else if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse && error.status === 401 && error.error.reason === 'notLoggedIn') {
        console.log('NOT LOGGED IN');
        // this.toastService.showToast('Eroare', 'Sesiunea ta a expirat! Te rugam sa te loghezi din nou.', 'error');
        this.router.navigate(['/']); // Redirect to homepage
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
      }
    }));
  }
  addToken(request, token) {
    // console.log('adaug token');
    return request.clone({
      // pt dev
      url: 'https://bestinform.eu' + request.url,
      // pt build
      // url:  'https://bestinform.eu' + request.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  handleTokenExpiredError(request, next) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.authService.refreshToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(token => {
        console.log('REFRESH TOKEN 1', token);
        this.isRefreshing = false;
        this.refreshTokenSubject.next(token.token);
        this.reportsService.loginJasper('jasperadmin', 'jasperadmin').subscribe(resp => {
          console.log('resp jasper');
          console.log(resp);
        });
        return next.handle(this.addToken(request, token.token));
      }));
    } else {
      return this.refreshTokenSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(token => token != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(jwt => {
        // console.log('REFRESH TOKEN 2', jwt);
        return next.handle(this.addToken(request, jwt));
      }));
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
  }, {
    type: _toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService
  }, {
    type: _features_reports_services_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }];
};
UniversalAppInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)()], UniversalAppInterceptor);


/***/ }),

/***/ 16070:
/*!******************************************************!*\
  !*** ./src/app/shared/_services/user-roles.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRolesGuard": () => (/* binding */ UserRolesGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _jwtToken_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwtToken.service */ 57453);




let UserRolesGuard = class UserRolesGuard {
  constructor(tokenService, router) {
    this.tokenService = tokenService;
    this.router = router;
  }
  canActivate(route) {
    const allowedRoles = route.data.allowedRoles;
    const decodedToken = this.tokenService.getDecodedToken();
    if (decodedToken) {
      console.log('decoded token', decodedToken);
      if (!this.tokenService.isTokenExpired()) {
        console.log('nu e expirat');
        if (decodedToken["roles"].some(role => allowedRoles.includes(role.authority))) {
          return true;
        } else {
          if (decodedToken["roles"].some(role => role.authority === 'ROLE_STAFF')) {
            return this.router.navigate(['/private/staff']);
          } else {
            return this.router.navigate(['/']);
          }
        }
      } else {
        console.log(' e expirat');
        return this.router.navigate(['/']);
      }
    } else {
      console.log('nu s-a decodat');
      return this.router.navigate(['/']);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _jwtToken_service__WEBPACK_IMPORTED_MODULE_0__.JwtTokenService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
  }];
};
UserRolesGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], UserRolesGuard);


/***/ }),

/***/ 50754:
/*!********************************************************!*\
  !*** ./src/app/shared/_services/web-socket.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketAPI": () => (/* binding */ WebSocketAPI)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stompjs */ 68979);
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sockjs-client */ 14166);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let WebSocketAPI = class WebSocketAPI {
  constructor() {
    // webSocketEndPoint = 'https://bestinform.eu/bestinform/our-websocket';
    // topic = 'https://bestinform.eu/user/topic/private-notifications';
    // stompClient: any;
    // responseSubject= new Subject<any>();
    this.socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_1__('https://bestinform.eu/bestinform/our-websocket');
    this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_0__.over(this.socket);
    //comp unde folosim, probabil una standalone
    // notificationComponent: NotificationsComponent;
    // constructor(notifComponent: NotificationsComponent){
    //     this.notificationComponent = notifComponent;
    // }
    // _connect() {
    //     console.log("Initialize WebSocket Connection");
    //     // let ws = new SockJS(this.webSocketEndPoint);
    //     // this.stompClient = Stomp.over(ws);
    //     const _this = this;
    //     // let _this: this;
    //     _this.stompClient.connect({}, function (frame) {
    //         _this.stompClient.subscribe("http://localhost/",_this.topic, function (sdkEvent) {
    //             _this.onMessageReceived(sdkEvent);
    //         });
    //         // _this.stompClient.publish(_this.topic, 'Oh herrow');
    //         //_this.stompClient.reconnect_delay = 2000;
    //     }, this.errorCallBack);
    // }
    // _disconnect() {
    //     console.log('din disconect',this.stompClient);
    //     if (this.stompClient !== null) {
    //         this.stompClient.disconnect();
    //     }
    //     console.log("Disconnected");
    // }
    // // on error, schedule a reconnection attempt
    // errorCallBack(error) {
    //     console.log("errorCallBack -> " + error)
    //     setTimeout(() => {
    //         this._connect();
    //     }, 5000);
    // }
    // //send message via webSocket
    // _send(message) {
    //     console.log("calling logout api via web socket");
    //     this.stompClient.send("/private/staff/notifications", {}, JSON.stringify(message));
    // }
    // onMessageReceived(message) {
    //     console.log("Message Recieved from Server :: " + message);
    //     this.notificationComponent.handleMessage(JSON.stringify(message.body));
    // }
  }

  subscribe(topic, callback) {
    const connected = this.stompClient.connected;
    if (connected) {
      this.subscribeToTopic(topic, callback);
      return;
    }
    //is stomp client is not connected, connect and subscribe to the topic
    this.stompClient.connect({}, () => {
      this.subscribeToTopic(topic, callback);
    });
  }
  subscribeToTopic(topic, callback) {
    this.stompClient.subscribe(topic, () => {
      callback();
    });
  }
};
WebSocketAPI = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: "root"
})], WebSocketAPI);


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 26523);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/badge */ 83335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 64865);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/legacy-card */ 77315);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-chips */ 59257);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 58446);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/legacy-list */ 60744);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 47578);
/* harmony import */ var _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/legacy-radio */ 3493);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/legacy-slide-toggle */ 43921);
/* harmony import */ var _angular_material_legacy_slider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/legacy-slider */ 99120);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 57402);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/legacy-tabs */ 32821);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 63370);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/pipes/pipes.module */ 39045);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/directives/directives.module */ 19212);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _pipes_value_type_transform_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_pipes/value-type-transform.pipe */ 89611);
/* harmony import */ var _components_dynamic_inputs_dynamic_inputs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/dynamic-inputs/dynamic-inputs.component */ 50751);
/* harmony import */ var _components_custom_checkbox_custom_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/custom-checkbox/custom-checkbox.component */ 86373);
/* harmony import */ var _components_choose_media_choose_media_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/choose-media/choose-media.component */ 47338);
/* harmony import */ var _components_bf_chips_bf_chips_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/bf-chips/bf-chips.component */ 31873);
/* harmony import */ var _pipes_minutes_to_hours_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_pipes/minutes-to-hours.pipe */ 39313);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_pipes/safe.pipe */ 40844);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng-lazyload-image */ 33957);




















































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  wheelPropagation: false,
  suppressScrollX: true
};
let SharedModule = class SharedModule {};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatLegacyAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__.MatBottomSheetModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_18__.MatLegacyButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__.MatButtonToggleModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_20__.MatLegacyCardModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatLegacyCheckboxModule, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_22__.MatLegacyChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_24__.MatLegacyDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_28__.MatLegacyInputModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_29__.MatLegacyListModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_30__.MatLegacyMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatNativeDateModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_32__.MatLegacyPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__.MatProgressBarModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatLegacyProgressSpinnerModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_35__.MatLegacyRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatRippleModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_36__.MatLegacySelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__.MatSidenavModule, _angular_material_legacy_slider__WEBPACK_IMPORTED_MODULE_38__.MatLegacySliderModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_39__.MatLegacySlideToggleModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_40__.MatLegacySnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__.MatSortModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_42__.MatLegacyTableModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_43__.MatLegacyTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__.MatToolbarModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_45__.MatLegacyTooltipModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_46__.MatStepperModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_47__.PerfectScrollbarModule, _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_48__.NgbDropdownModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_49__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_28__.MatLegacyInputModule, _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_50__.NgxQRCodeModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_51__.LazyLoadImageModule],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatLegacyAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__.MatBottomSheetModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_18__.MatLegacyButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__.MatButtonToggleModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_20__.MatLegacyCardModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatLegacyCheckboxModule, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_22__.MatLegacyChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_24__.MatLegacyDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_28__.MatLegacyInputModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_29__.MatLegacyListModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_30__.MatLegacyMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatNativeDateModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_32__.MatLegacyPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__.MatProgressBarModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatLegacyProgressSpinnerModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_35__.MatLegacyRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatRippleModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_36__.MatLegacySelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__.MatSidenavModule, _angular_material_legacy_slider__WEBPACK_IMPORTED_MODULE_38__.MatLegacySliderModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_39__.MatLegacySlideToggleModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_40__.MatLegacySnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__.MatSortModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_42__.MatLegacyTableModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_43__.MatLegacyTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__.MatToolbarModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_45__.MatLegacyTooltipModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_46__.MatStepperModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_47__.PerfectScrollbarModule, _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_49__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_28__.MatLegacyInputModule, _pipes_value_type_transform_pipe__WEBPACK_IMPORTED_MODULE_2__.ValueTypeTransformPipe, _components_dynamic_inputs_dynamic_inputs_component__WEBPACK_IMPORTED_MODULE_3__.DynamicInputsComponent, _components_custom_checkbox_custom_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CustomCheckboxComponent, _components_choose_media_choose_media_component__WEBPACK_IMPORTED_MODULE_5__.ChooseMediaComponent, _components_bf_chips_bf_chips_component__WEBPACK_IMPORTED_MODULE_6__.BfChipsComponent, _pipes_minutes_to_hours_pipe__WEBPACK_IMPORTED_MODULE_7__.MinutesToHours, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_8__.SafePipe],
  declarations: [_pipes_value_type_transform_pipe__WEBPACK_IMPORTED_MODULE_2__.ValueTypeTransformPipe, _components_dynamic_inputs_dynamic_inputs_component__WEBPACK_IMPORTED_MODULE_3__.DynamicInputsComponent, _components_dynamic_inputs_dynamic_inputs_component__WEBPACK_IMPORTED_MODULE_3__.DynamicInputsComponent, _components_custom_checkbox_custom_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CustomCheckboxComponent, _components_choose_media_choose_media_component__WEBPACK_IMPORTED_MODULE_5__.ChooseMediaComponent, _components_bf_chips_bf_chips_component__WEBPACK_IMPORTED_MODULE_6__.BfChipsComponent, _pipes_minutes_to_hours_pipe__WEBPACK_IMPORTED_MODULE_7__.MinutesToHours, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_8__.SafePipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_8__.SafePipe],
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_47__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }]
})], SharedModule);


/***/ }),

/***/ 79578:
/*!*********************************************************!*\
  !*** ./src/app/theme/components/lang/lang.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangComponent": () => (/* binding */ LangComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _lang_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang.component.html?ngResource */ 96023);
/* harmony import */ var _lang_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang.component.scss?ngResource */ 64371);
/* harmony import */ var _lang_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lang_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





let LangComponent = class LangComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.langName = '';
  }
  ngOnInit() {
    this.langName = this.getLangName(this.translateService.getDefaultLang());
  }
  changeLang(lang) {
    this.translateService.use(lang);
    this.langName = this.getLangName(lang);
  }
  getLangName(lang) {
    if (lang == 'en') {
      return 'English';
    } else if (lang == 'de') {
      return 'German';
    } else if (lang == 'fr') {
      return 'French';
    } else if (lang == 'ru') {
      return 'Russian';
    } else if (lang == 'tr') {
      return 'Turkish';
    } else if (lang == 'ro') {
      return 'Romanian';
    } else {
      return 'English';
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService
  }];
};
LangComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-lang',
  template: _lang_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_lang_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LangComponent);


/***/ }),

/***/ 66462:
/*!***********************************************************!*\
  !*** ./src/app/theme/components/toast/toast.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastComponent": () => (/* binding */ ToastComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _toast_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.component.html?ngResource */ 69710);
/* harmony import */ var _toast_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.component.scss?ngResource */ 90731);
/* harmony import */ var _toast_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toast_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);







let ToastComponent = class ToastComponent {
  constructor(router) {
    this.router = router;
    this.disposeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.visible = false;
    this.hideErrorPopup = false;
  }
  ngOnInit() {
    this.visible = true;
    console.log('tipul erorii', this.type);
    console.log('autohide', this.hidden);
    if (this.type !== 'success') {
      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe(event => {
        console.log('s-a schimbat ruta', event);
        // Hide the error pop-up when a route change is detected
        this.hide();
      });
    }
  }
  hide() {
    this.visible = false;
    this.disposeEvent.emit();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
  static #_2 = this.propDecorators = {
    disposeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    message: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
ToastComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-toast',
  template: _toast_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_toast_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ToastComponent);


/***/ }),

/***/ 88356:
/*!***************************************************************!*\
  !*** ./src/app/theme/components/toaster/toaster.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToasterComponent": () => (/* binding */ ToasterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _toaster_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toaster.component.html?ngResource */ 92160);
/* harmony import */ var _toaster_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toaster.component.scss?ngResource */ 14726);
/* harmony import */ var _toaster_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toaster_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);





let ToasterComponent = class ToasterComponent {
  constructor(toastService, cdr) {
    this.toastService = toastService;
    this.cdr = cdr;
    this.currentToasts = [];
  }
  ngOnInit() {
    this.subscribeToToasts();
  }
  subscribeToToasts() {
    this.toastService.toastEvents.subscribe(toasts => {
      const currentToast = {
        type: toasts["type"],
        title: toasts["title"],
        message: toasts["message"],
        hidden: toasts["hidden"]
      };
      this.currentToasts.push(currentToast);
      if (this.currentToasts[this.currentToasts.length - 1]["type"] === 'success' && this.currentToasts.some(toast => toast["type"] === 'error')) {
        this.currentToasts.splice(0, this.currentToasts.length - 1);
      }
      this.cdr.detectChanges();
    });
  }
  dispose(index) {
    this.currentToasts.splice(index, 1);
    this.cdr.detectChanges();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
  }];
};
ToasterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-toaster',
  template: _toaster_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_toaster_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ToasterComponent);


/***/ }),

/***/ 19212:
/*!*******************************************************!*\
  !*** ./src/app/theme/directives/directives.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./only-number.directive */ 47536);




let DirectivesModule = class DirectivesModule {};
DirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_only_number_directive__WEBPACK_IMPORTED_MODULE_0__.OnlyNumberDirective],
  exports: [_only_number_directive__WEBPACK_IMPORTED_MODULE_0__.OnlyNumberDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
})], DirectivesModule);


/***/ }),

/***/ 47536:
/*!***********************************************************!*\
  !*** ./src/app/theme/directives/only-number.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlyNumberDirective": () => (/* binding */ OnlyNumberDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


let OnlyNumberDirective = class OnlyNumberDirective {
  onInputChange(e) {
    if (e.target.value.length == 0 && e.which == 48) {
      return false;
    }
    const verified = String.fromCharCode(e.which).match(/[^0-9]/g);
    if (verified) {
      e.preventDefault();
      return false;
    }
    // var regex = new RegExp("[^0-9]");
    // var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    // if (regex.test(key)) {
    //     event.preventDefault();
    //     return false;
    // }
  }
  static #_ = this.propDecorators = {
    onInputChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keypress', ['$event']]
    }]
  };
};
OnlyNumberDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: 'input[appOnlyNumber]'
})], OnlyNumberDirective);


/***/ }),

/***/ 39045:
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_pipes_flight_duration_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/_pipes/flight-duration.pipe */ 46700);




let PipesModule = class PipesModule {};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  declarations: [_shared_pipes_flight_duration_pipe__WEBPACK_IMPORTED_MODULE_0__.FlightDurationPipe],
  exports: [_shared_pipes_flight_duration_pipe__WEBPACK_IMPORTED_MODULE_0__.FlightDurationPipe]
})], PipesModule);


/***/ }),

/***/ 28758:
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomOverlayContainer": () => (/* binding */ CustomOverlayContainer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);



let CustomOverlayContainer = class CustomOverlayContainer extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayContainer {
  _createContainer() {
    const container = document.createElement('div');
    container.classList.add('cdk-overlay-container');
    document.getElementById('app').appendChild(container);
    this._containerElement = container;
  }
};
CustomOverlayContainer = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], CustomOverlayContainer);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  // appVersion: require('../../package.json').version + '-dev',
  appVersion: (__webpack_require__(/*! ../../package.json */ 4147).version),
  recaptcha: {
    siteKey: '6Ldk110oAAAAACkHBSY93L06izm_IE2TKa1fnmkB'
  },
  production: false,
  url: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
  (0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
});

/***/ }),

/***/ 41993:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 41993;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 79595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 66302:
/*!************************************************************************!*\
  !*** ./src/app/features/not-found/not-found.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content-404 {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.content-404 .img-wrapper {\n  max-width: 700px;\n}", "",{"version":3,"sources":["webpack://./src/app/features/not-found/not-found.component.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;AACJ;AACI;EACI,gBAAA;AACR","sourcesContent":[".content-404 {\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n\n    .img-wrapper {\n        max-width: 700px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 70944:
/*!********************************************************************************!*\
  !*** ./src/app/shared/_components/bf-chips/bf-chips.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bf-chips {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 8px;\n  border-radius: 30px;\n  background: rgba(36, 57, 138, 0.18);\n}\n.bf-chips .chips-icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgba(36, 57, 138, 0.48);\n  border-radius: 100px;\n  width: 24px;\n  height: 24px;\n  color: white;\n  margin-right: 8px;\n}\n.bf-chips .chips-icon img {\n  width: 15px;\n  height: 15px;\n}\n.bf-chips .chips-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: black;\n}", "",{"version":3,"sources":["webpack://./src/app/shared/_components/bf-chips/bf-chips.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;AACF;AACE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mCAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;AACJ;AACI;EACE,WAAA;EACA,YAAA;AACN;AAGE;EACE,eAAA;EACA,gBAAA;EACA,YAAA;AADJ","sourcesContent":[".bf-chips {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 8px;\n  border-radius: 30px;\n  background: rgba(36, 57, 138, 0.18);\n\n  .chips-icon {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: rgba(36, 57, 138, 0.48);\n    border-radius: 100px;\n    width: 24px;\n    height: 24px;\n    color: white;\n    margin-right: 8px;\n\n    img {\n      width: 15px;\n      height: 15px;\n    }\n  }\n\n  .chips-name {\n    font-size: 14px;\n    font-weight: 600;\n    color: black;\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26756:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/_components/choose-media/choose-media.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.card {\n  background-color: var(--primary-background);\n}\n.card .card-header {\n  background-color: transparent;\n  border-bottom: none;\n}\n.card .card-body .media-container .media-label {\n  aspect-ratio: 1/1;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.card .card-body .media-container .media-label .img-fluid {\n  border-radius: 8px !important;\n  object-fit: cover;\n}\n.card .card-body .media-container .thumbnailInput:checked + .media-label {\n  border: 2px solid #24398A;\n  padding: 0;\n  border-radius: 8px;\n}\n.card .card-body .media-container .video-frame {\n  border: 1px solid rgba(36, 57, 138, 0.5);\n  border-radius: 8px;\n  padding: 0 5px;\n}\n.card .card-body .media-container .video-frame i {\n  font-size: 36px;\n  color: #24398A;\n}\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-height: 18px;\n}\n@media (max-width: 992px) {\n  .line-clamp {\n    line-height: 15px;\n    -webkit-line-clamp: 3;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/shared/_components/choose-media/choose-media.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,2CAAA;AAkBF;AAhBE;EACE,6BAAA;EACA,mBAAA;AAkBJ;AAZM;EACE,iBAAA;EACA,kBAAA;EACA,eAAA;AAcR;AAZQ;EACE,6BAAA;EACA,iBAAA;AAcV;AATM;EACE,yBAAA;EACA,UAAA;EACA,kBAAA;AAWR;AARM;EACE,wCAAA;EACA,kBAAA;EACA,cAAA;AAUR;AARQ;EACE,eAAA;EACA,cDrCM;AC+ChB;;AADA;EACE,oBAAA;EACA,qBAAA;EACA,4BAAA;EACA,gBAAA;EACA,iBAAA;AAIF;AAFE;EAPF;IAQI,iBAAA;IACA,qBAAA;EAKF;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.card {\n  background-color: var(--primary-background);\n\n  .card-header {\n    background-color: transparent;\n    border-bottom: none;\n\n  }\n\n  .card-body {\n    .media-container {\n      .media-label {\n        aspect-ratio: 1 / 1;\n        border-radius: 8px;\n        cursor: pointer;\n\n        .img-fluid {\n          border-radius: 8px !important;\n          object-fit: cover;\n        }\n      }\n\n\n      .thumbnailInput:checked + .media-label {\n        border: 2px solid $primary-color;\n        padding: 0;\n        border-radius: 8px;\n      }\n\n      .video-frame {\n        border: 1px solid rgba($primary-color, 0.5);\n        border-radius: 8px;\n        padding: 0 5px;\n\n        i {\n          font-size: 36px;\n          color: $primary-color;\n        }\n      }\n\n\n    }\n  }\n}\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-height: 18px;\n\n  @media(max-width: 992px){\n    line-height: 15px;\n    -webkit-line-clamp: 3;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 42590:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/_components/custom-checkbox/custom-checkbox.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The switch - the box around the slider */\n.checkbox-container {\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid rgba(36, 57, 138, 0.14);\n  border-radius: 25px;\n  padding: 10px 20px;\n  margin-right: 25px;\n  /* Hide default HTML checkbox */\n  /* The slider */\n  /* Rounded sliders */\n}\n.checkbox-container .checkbox-name {\n  font-size: 16px;\n  font-weight: 400;\n  margin-right: 25px;\n  color: black;\n}\n.checkbox-container .switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.checkbox-container .switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.checkbox-container .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.checkbox-container .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n.checkbox-container input:checked + .slider {\n  background-color: #34A853;\n}\n.checkbox-container input:focus + .slider {\n  box-shadow: 0 0 1px #34A853;\n}\n.checkbox-container input:checked + .slider:before {\n  transform: translateX(26px);\n}\n.checkbox-container .slider.round {\n  border-radius: 34px;\n}\n.checkbox-container .slider.round:before {\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/app/shared/_components/custom-checkbox/custom-checkbox.component.scss"],"names":[],"mappings":"AAAA,2CAAA;AAEA;EACE,oBAAA;EACA,mBAAA;EACA,8BAAA;EACA,yCAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EAgBA,+BAAA;EAOA,eAAA;EAuCA,oBAAA;AA3DF;AADE;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;AAGJ;AAAE;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AAEJ;AAEE;EACE,UAAA;EACA,QAAA;EACA,SAAA;AAAJ;AAIE;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EAEA,gBAAA;AAFJ;AAKE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EAEA,gBAAA;AAHJ;AAME;EACE,yBAAA;AAJJ;AAOE;EACE,2BAAA;AALJ;AAQE;EAGE,2BAAA;AANJ;AAUE;EACE,mBAAA;AARJ;AAWE;EACE,kBAAA;AATJ","sourcesContent":["/* The switch - the box around the slider */\n\n.checkbox-container {\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid rgba(36, 57, 138, 0.14);\n  border-radius: 25px;\n  padding: 10px 20px;\n  margin-right: 25px;\n\n  .checkbox-name {\n    font-size: 16px;\n    font-weight: 400;\n    margin-right: 25px;\n    color: black;\n  }\n\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n\n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n\n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n\n  input:checked + .slider {\n    background-color: #34A853;\n  }\n\n  input:focus + .slider {\n    box-shadow: 0 0 1px #34A853;\n  }\n\n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 34px;\n  }\n\n  .slider.round:before {\n    border-radius: 50%;\n  }\n\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4588:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/_components/dynamic-inputs/dynamic-inputs.component.scss?ngResource ***!
  \********************************************************************************************/
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

/***/ 64371:
/*!**********************************************************************!*\
  !*** ./src/app/theme/components/lang/lang.component.scss?ngResource ***!
  \**********************************************************************/
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

/***/ 90731:
/*!************************************************************************!*\
  !*** ./src/app/theme/components/toast/toast.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".success {\n  background-color: #198754;\n}\n\n.error {\n  background-color: #dc3545;\n}\n\n.warning {\n  background-color: #FFCC29;\n}\n\n.info {\n  background-color: #2F9DF4;\n}\n\np {\n  margin-bottom: 0px;\n  color: white;\n}\n\ni {\n  margin: 0 15px;\n  color: white;\n}\n\ni.fas.fa-times {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/components/toast/toast.component.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;AACF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,kBAAA;EACA,YAAA;AACF;;AAEA;EACE,cAAA;EACA,YAAA;AACF;;AAEA;EACE,eAAA;AACF","sourcesContent":[".success {\n  background-color: #198754;\n}\n\n.error {\n  background-color: #dc3545;\n}\n\n.warning {\n  background-color: #FFCC29;\n}\n\n.info {\n  background-color: #2F9DF4;\n}\n\np{\n  margin-bottom:0px;\n  color: white;\n\n}\ni{\n  margin:0 15px;\n  color: white;\n}\n\ni.fas.fa-times{\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14726:
/*!****************************************************************************!*\
  !*** ./src/app/theme/components/toaster/toaster.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toaster {\n  z-index: 100000;\n  right: 0;\n  top: calc(76px + 0.5rem);\n}", "",{"version":3,"sources":["webpack://./src/app/theme/components/toaster/toaster.component.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,QAAA;EACA,wBAAA;AACF","sourcesContent":[".toaster {\n  z-index: 100000;\n  right: 0;\n  top: calc(76px + 0.5rem );\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 25532:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-ps": 46235,
	"./ar-ps.js": 46235,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 24507,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 24507,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku-kmr": 19619,
	"./ku-kmr.js": 19619,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 82469,
	"./tg.js": 82469,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 25532;

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"app\" class=\"app\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"\n            [ngClass]=\"[settings.theme, 'toolbar-'+settings.toolbar]\"\n            [class.main-toolbar-fixed]=\"settings.mainToolbarFixed\">\n            <!-- Toaster -->\n    <app-toaster></app-toaster>\n    <div class=\"app-content\">\n        <router-outlet></router-outlet>\n    </div>\n    <ng-progress\n        [spinner]=\"false\"\n        [meteor]=\"false\"\n        color=\"#e91e63\"></ng-progress>\n        <!--hide chat if coming-soon page-->\n    <df-messenger *ngIf=\"router.url.includes('/client')\"\n            intent=\"WELCOME\"\n            chat-title=\"Events\"\n            agent-id=\"d4e6cb7e-652b-4925-a4b6-761d914217cb\"\n            language-code=\"en\"\n    ></df-messenger>\n</div>\n\n\n";

/***/ }),

/***/ 79484:
/*!************************************************************************!*\
  !*** ./src/app/features/not-found/not-found.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <div class=\"content-404 text-center\">\n        <div class=\"img-wrapper\">\n            <img src=\"assets/404.png\" alt=\"\" class=\"img-fluid\"/>\n        </div>\n        <h1>Error 404</h1>\n        <p>Opps, it seems that this page does not exist.</p>\n        <button class=\"btn-long btn-color-fill\" type=\"button\" routerLink=\"/\">Go Home</button>\n    </div>\n</div>\n";

/***/ }),

/***/ 2758:
/*!********************************************************************************!*\
  !*** ./src/app/shared/_components/bf-chips/bf-chips.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bf-chips\">\n    <div class=\"chips-icon\">\n        <img class=\"img-fluid\" [src]=\"icon.filePath\" [alt]=\"icon.fileName\">\n    </div>\n    <span class=\"chips-name\">{{name}}</span>\n</div>";

/***/ }),

/***/ 75826:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/_components/choose-media/choose-media.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card\">\n    <div class=\"card-header d-flex justify-content-lg-between align-items-center flex-wrap justify-content-center gap-2\">\n        <h3 class=\"title mb-0 d-flex\">{{'MEDIA.CHOOSE-MEDIA' | translate}}</h3>\n        <div class=\"d-flex gap-2 flex-wrap justify-content-center\">\n            <button class=\"btn-color-outline btn-long me-lg-2\" (click)=\"modalRef.dismiss()\"><i\n                    class=\"fas fa-arrow-left\"></i>{{'BTN.BACK' | translate}}</button>\n            <label class=\"btn-color-fill btn-long\" role=\"button\" for=\"fileUpload\"><i class=\"fas fa-plus\"></i>{{'BTN.ADD-MEDIA' | translate}}</label>\n            <input class=\"d-none\" type=\"file\" name=\"fileUpload\" id=\"fileUpload\"\n                   accept=\".png, .jpg, .jpeg, .jfif, .gif, .mp4, .MPG, .mov, .AVI, .VOB\"\n                   (change)=\"onImgChange($event)\"/>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"mediaForm\">\n                <div class=\"row mb-2\">\n                    <div class=\"col-12 col-lg-4\">\n                        <mat-form-field class=\"w-100\" appearance=\"outline\">\n                            <mat-label>{{'GENERAL.SEARCH' | translate}}</mat-label>\n                            <input matInput placeholder=\"{{'GENERAL.SEARCH' | translate}}\" type=\"text\" formControlName=\"name\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-12 col-lg-4\">\n                        <mat-form-field class=\"w-100\" appearance=\"outline\">\n                            <mat-label>{{'MEDIA.CATEGORY' | translate}}</mat-label>\n                            <mat-select formControlName=\"category\">\n                                <mat-option [value]=\"null\">-</mat-option>\n                                <mat-option value=\"image\">{{'MEDIA.IMG' | translate}}</mat-option>\n                                <mat-option value=\"pdf\">PDF</mat-option>\n                                <mat-option value=\"document\">Document</mat-option>\n                                <mat-option value=\"video\">Video</mat-option>\n                                <mat-option value=\"other \">{{'MEDIA.OTHER' | translate}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-12 col-lg-4\">\n                        <button class=\"btn-long btn-color-fill w-100\" type=\"button\" (click)=\"getMedia()\">\n                            <i class=\"fas fa-filter\"></i>\n                            {{'BTN.FILTER' | translate}}\n                        </button>\n                    </div>\n                </div>\n            </form>\n            <div class=\"row gy-3\">\n                <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 media-container\" *ngFor=\"let media of mediaList; let i=index\">\n                    <div *ngIf=\"media.category === 'image'\" class=\"media-container-wrapper\">\n                        <input name=\"media\" class=\"thumbnailInput d-none\"\n                               type=\"{{multipleSelect ? 'checkbox' : 'radio'}}\" [id]=\"i\"\n                               [checked]=\"checkForSelection(media)\"\n                               (change)=\"onSelectMedia($event, media)\">\n                        <label class=\"media-label w-100\" [for]=\"i\">\n                            <img src=\"{{media.path}}\" class=\"w-100 h-100 img-fluid\">\n                        </label>\n                    </div>\n\n                    <div *ngIf=\"media.category === 'video'\" class=\"media-container-wrapper video-frame\">\n                        <input name=\"media\" class=\"thumbnailInput d-none\"\n                               type=\"{{multipleSelect ? 'checkbox' : 'radio'}}\" [id]=\"i\"\n                               [checked]=\"checkForSelection(media)\"\n                               (change)=\"onSelectMedia($event, media)\">\n                        <label class=\"media-label w-100\" [for]=\"i\">\n                            <i class=\"fas fa-video h-75 d-flex align-items-center flex-column justify-content-center\"></i>\n                            <p class=\"mb-0 w-100 line-clamp h-25\">{{media.name}}</p>\n                        </label>\n                    </div>\n                </div>\n\n                <mat-paginator [length]=\"paginationInfo?.totalElements\"\n                               [pageSize]=\"pageSize\"\n                               [pageSizeOptions]=\"pageSizeArray\"\n                               (page)=\"pageChange($event)\">\n                </mat-paginator>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 93976:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/_components/custom-checkbox/custom-checkbox.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"checkbox-container mb-4 w-100\">\n    <span class=\"checkbox-name\">{{name | titlecase}}</span>\n    <label class=\"switch\">\n        <input type=\"checkbox\" (change)=\"changeValue($event)\" [checked]=\"control.value === 'true'\">\n        <span class=\"slider round\"></span>\n    </label>\n\n</div>\n";

/***/ }),

/***/ 52277:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/_components/dynamic-inputs/dynamic-inputs.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container [ngSwitch]=\"inputFormData.valueType\">\n\n    <!--Simple Text-->\n    <mat-form-field class=\"w-100\" appearance=\"standard\" *ngSwitchCase=\"'text'\">\n        <mat-label>{{inputFormData.name}}</mat-label>\n        <input matInput *ngIf=\"inputFormData.name ==='Email'\"\n               type=\"text\"\n               [formControl]=\"formControl\"\n               required pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$\" >\n\n        <input matInput *ngIf=\"inputFormData.name !=='Email'\"\n               type=\"text\"\n               [formControl]=\"formControl\"\n               [placeholder]=\"inputFormData.valuePlaceholder\"\n               >\n\n        <!-- <input matInput *ngIf=\"inputFormData.name ==='Telephone'\"\n        type=\"text\"\n        [formControl]=\"formControl\"\n        pattern=\"'^[0-9]+$'\" > -->\n\n        <button *ngIf=\"control.value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearInput()\">\n            <mat-icon>close</mat-icon>\n        </button>\n\n        <!--Error Message-->\n        <mat-error *ngIf=\"control.hasError('required') && control.touched\">\n            Input is <strong>required</strong>\n        </mat-error>\n\n        <mat-error *ngIf=\"control.invalid && control.touched && !control.hasError('required')\">\n            Acest <strong>email</strong> nu este corect!\n        </mat-error>\n\n        <!-- <mat-error *ngIf=\"(inputFormData.name ==='Telephone') && control.invalid && control.touched && !control.hasError('required')\">\n            Acest camp nu este valid!\n        </mat-error> -->\n\n    </mat-form-field>\n\n    <!--Textarea-->\n    <mat-form-field class=\"w-100\" appearance=\"standard\" *ngSwitchCase=\"'textarea'\">\n        <mat-label>{{inputFormData.name}}</mat-label>\n        <textarea matInput\n                  cdkTextareaAutosize\n                  cdkAutosizeMinRows=\"1\"\n                  cdkAutosizeMaxRows=\"20\"\n                  [formControl]=\"formControl\"\n                  [placeholder]=\"inputFormData.valuePlaceholder\">\n        </textarea>\n\n        <!--Error Message-->\n        <mat-error *ngIf=\"control.hasError('required') && control.touched\">\n            Input is <strong>required</strong>\n        </mat-error>\n    </mat-form-field>\n\n    <!--Number-->\n    <mat-form-field class=\"w-100\" appearance=\"standard\" *ngSwitchCase=\"'number'\">\n        <mat-label>{{inputFormData.name}}</mat-label>\n        <input type=\"text\" matInput\n               [placeholder]=\"inputFormData.valuePlaceholder\"\n               [formControl]=\"formControl\"\n        [pattern]=\"'^[0-9]*[0-9][0-9]*$'\">\n\n<!--        <button *ngIf=\"control.value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearInput()\">-->\n<!--            <mat-icon>close</mat-icon>-->\n<!--        </button>-->\n\n        <!--Error Message-->\n        <mat-error *ngIf=\"control.hasError('required') && control.touched\">\n            Input is <strong>required</strong>\n        </mat-error>\n\n        <mat-error *ngIf=\"!control.hasError('required') && control.touched && control.invalid\">\n            Asigură-te ca ai adăugat <strong>un număr pozitiv</strong>.\n        </mat-error>\n    </mat-form-field>\n\n    <!--Select-->\n    <mat-form-field class=\"w-100\" appearance=\"standard\" *ngSwitchCase=\"'select'\">\n        <mat-label>{{inputFormData.name}}</mat-label>\n        <mat-select [formControl]=\"formControl\">\n            <mat-option *ngFor=\"let option of inputFormData.valueOptions\"\n                        [value]=\"option\">\n                {{option}}\n            </mat-option>\n        </mat-select>\n\n        <!--Error Message-->\n        <mat-error *ngIf=\"control.hasError('required') && control.touched\">\n            Input is <strong>required</strong>\n        </mat-error>\n    </mat-form-field>\n\n    <!--Multiple Select-->\n    <mat-form-field class=\"w-100\" appearance=\"standard\" *ngSwitchCase=\"'multiple-select'\">\n        <mat-label>{{inputFormData.name}}</mat-label>\n        <mat-select [formControl]=\"formControl\" multiple>\n            <mat-option *ngFor=\"let option of inputFormData.valueOptions\"\n                        [value]=\"option\">\n                {{option}}\n            </mat-option>\n        </mat-select>\n\n        <!--Error Message-->\n        <mat-error *ngIf=\"control.hasError('required') && control.touched\">\n            Input is <strong>required</strong>\n        </mat-error>\n    </mat-form-field>\n\n    <!--Toggle-->\n    <div *ngSwitchCase=\"'toggle'\">\n        <app-custom-checkbox [name]=\"inputFormData.name\" [control]=\"formControl\"/>\n    </div>\n\n    <!--Checkbox-->\n    <div *ngSwitchCase=\"'checkbox'\">\n        <mat-checkbox color=\"primary\" [formControl]=\"formControl\">{{inputFormData.name}}</mat-checkbox>\n<!--        <app-custom-checkbox [name]=\"inputFormData.name\" [control]=\"control\"/>-->\n    </div>\n\n\n    <mat-form-field appearance=\"standard\" *ngSwitchCase=\"'datetime'\" class=\"w-100\">\n        <mat-label>{{inputFormData.name}}</mat-label>\n        <input matInput [matDatepicker]=\"picker\" [formControl]=\"formControl\" [placeholder]=\"inputFormData.valuePlaceholder\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"w-100\" appearance=\"standard\" *ngSwitchCase=\"'coord'\">\n        <mat-label>{{inputFormData.name}}</mat-label>\n        <input type=\"number\" matInput\n               [placeholder]=\"inputFormData.valuePlaceholder\"\n               [formControl]=\"formControl\">\n\n        <!--        <button *ngIf=\"control.value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearInput()\">-->\n        <!--            <mat-icon>close</mat-icon>-->\n        <!--        </button>-->\n        <mat-icon matSuffix [matTooltip]=\"'ex format: 45.1234'\">info</mat-icon>\n        <!--Error Message-->\n        <mat-error *ngIf=\"control.hasError('required') && control.touched\">\n            Input is <strong>required</strong>\n        </mat-error>\n    </mat-form-field>\n\n</ng-container>\n\n\n\n";

/***/ }),

/***/ 96023:
/*!**********************************************************************!*\
  !*** ./src/app/theme/components/lang/lang.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<button mat-button [matMenuTriggerFor]=\"langMenu\" #langMenuTrigger=\"matMenuTrigger\" class=\"lang-btn\">\n    <img [src]=\"'assets/images/flags/'+translateService.currentLang+'.svg'\" width=\"18\" [alt]=\"translateService.currentLang\" class=\"mat-elevation-z1\">\n    <span Show=\"false\" Show.gt-md class=\"uppercase flag-name\">{{langName}}</span>\n    <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\n</button>\n<mat-menu #langMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-menu-panel lang\">\n    <span (mouseleave)=\"langMenuTrigger.closeMenu()\">\n        <button *ngFor=\"let lang of translateService.getLangs()\" mat-menu-item (click)=\"changeLang(lang)\">\n            <img [src]=\"'assets/images/flags/'+lang+'.svg'\" width=\"18\" [alt]=\"lang\" class=\"mat-elevation-z1\">\n            <span class=\"flag-name\">{{getLangName(lang)}}</span>\n        </button>\n    </span>\n</mat-menu>\n";

/***/ }),

/***/ 69710:
/*!************************************************************************!*\
  !*** ./src/app/theme/components/toast/toast.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ngb-toast *ngIf=\"visible\"\n           [ngClass]=\"type === 'success' ? 'success' : type ==='error' ? 'error' : type ==='warning' ? 'warning' : 'info'\"\n           [autohide]=\"type === 'success' || hidden\"\n           [delay]=\"5000\"\n           (hidden)=\"hide()\">\n    <div class=\"d-flex justify-content-start gap-2 align-items-center\">\n        <i *ngIf=\"type === 'success'\" class=\"fas fa-check\"></i>\n        <i *ngIf=\"type === 'error'\" class=\"fas fa-times-circle\"></i>\n        <i *ngIf=\"type === 'info'\" class=\"fas fa-info-circle\"></i>\n        <i *ngIf=\"type === 'warning'\" class=\"fas fa-exclamation-triangle\"></i>\n        <div class=\"w-100\">\n            <div class=\"d-flex justify-content-between align-items-center\">\n                <p><b>{{title}}</b></p>\n                <i class=\"fas fa-times\" (click)=\"hide()\"></i>\n            </div>\n            <p>{{ message }}</p>\n        </div>\n    </div>\n    \n</ngb-toast>\n";

/***/ }),

/***/ 92160:
/*!****************************************************************************!*\
  !*** ./src/app/theme/components/toaster/toaster.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"toaster position-fixed px-3 py-2 m-16\">\n    <div *ngFor=\"let toast of currentToasts; index as i\">\n        <app-toast\n                [type]=\"toast.type\"\n                [title]=\"toast.title\"\n                [message]=\"toast.message\"\n                [hidden]=\"toast.hidden\"\n                (disposeEvent)=\"dispose(i)\"\n        ></app-toast>\n    </div>\n</div>\n";

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"bestinform","version":"1.0.0","scripts":{"ng":"ng","start":"ng serve","prebuild":"npm --no-git-tag-version version patch","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e","dev:ssr":"ng run bestinform:serve-ssr","serve:ssr":"node dist/server/main.js","build:ssr":"ng build --configuration production && ng run bestinform:server:production","prerender":"ng run bestinform:prerender"},"private":true,"dependencies":{"@angular-material-components/datetime-picker":"^9.0.0","@angular-material-components/moment-adapter":"^9.0.0","@angular/animations":"15.1.0","@angular/cdk":"^15.1.0","@angular/common":"^15.1.0","@angular/compiler":"15.1.0","@angular/core":"15.1.0","@angular/forms":"15.1.0","@angular/material":"15.1.0","@angular/material-moment-adapter":"^15.1.0","@angular/platform-browser":"15.1.0","@angular/platform-browser-dynamic":"15.1.0","@angular/platform-server":"15.1.0","@angular/pwa":"^15.0.1","@angular/router":"15.1.0","@angular/service-worker":"15.1.0","@fortawesome/angular-fontawesome":"^0.12.1","@fortawesome/fontawesome-svg-core":"^6.3.0","@fortawesome/free-brands-svg-icons":"^6.3.0","@fortawesome/free-solid-svg-icons":"^6.3.0","@kolkov/angular-editor":"^3.0.0-beta.0","@ng-bootstrap/ng-bootstrap":"^14.0.1","@nguniversal/express-engine":"15.1.0","@ngx-translate/core":"14.0.0","@ngx-translate/http-loader":"7.0.0","@popperjs/core":"^2.11.6","@techiediaries/ngx-qrcode":"^9.1.0","@vime/angular":"^5.4.0","@vime/core":"^5.4.0","angularx-social-login":"^4.1.0","apexcharts":"^3.36.3","bootstrap":"^5.2.3","bootstrap-icons":"^1.10.3","cookieconsent":"^3.1.1","dom-to-image":"^2.6.0","express":"4.18.2","file-saver":"^2.0.5","html-to-pdfmake":"^2.4.18","html2canvas":"^1.4.1","jquery":"^3.6.4","jspdf":"^2.5.1","jwt-decode":"^3.1.2","moment":"^2.29.4","net":"^1.0.2","ng-apexcharts":"^1.7.4","ng-lazyload-image":"^9.1.3","ng-recaptcha":"^12.0.2","ngx-cookie-service":"^16.0.0","ngx-cookieconsent":"^4.0.2","ngx-editor":"^15.1.0","ngx-embed-video":"1.0.4","ngx-input-file":"10.2.0","ngx-owl-carousel-o":"^15.0.0","ngx-perfect-scrollbar":"10.1.1","ngx-progressbar":"9.0.0","ngx-qrcode-styling":"^1.2.3","ngx-sharebuttons":"^11.0.0","ol":"^7.2.2","pdfmake":"^0.2.7","randexp":"^0.5.3","rxjs":"7.8.0","sockjs-client":"^1.6.1","stompjs":"^2.3.3","zone.js":"0.12.0"},"devDependencies":{"@angular-devkit/build-angular":"15.1.1","@angular-eslint/builder":"15.2.0","@angular-eslint/eslint-plugin":"15.2.0","@angular-eslint/eslint-plugin-template":"15.2.0","@angular-eslint/schematics":"15.2.0","@angular-eslint/template-parser":"15.2.0","@angular/cli":"15.1.1","@angular/compiler-cli":"15.1.0","@angular/language-service":"15.1.0","@angular/localize":"^15.1.0","@nguniversal/builders":"15.1.0","@types/express":"4.17.15","@types/file-saver":"^2.0.5","@types/googlemaps":"3.43.3","@types/jasmine":"4.3.1","@types/jasminewd2":"2.0.10","@types/node":"^18.11.18","@typescript-eslint/eslint-plugin":"5.48.1","@typescript-eslint/parser":"5.48.1","eslint":"^8.31.0","jasmine-core":"4.5.0","jasmine-spec-reporter":"7.0.0","karma":"6.4.1","karma-chrome-launcher":"3.1.1","karma-coverage-istanbul-reporter":"3.0.3","karma-jasmine":"5.1.0","karma-jasmine-html-reporter":"2.0.0","protractor":"7.0.0","ts-node":"10.9.1","typescript":"4.9.4"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map