(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_landing-channel-manager_landing-channel-manager_module_ts"],{

/***/ 66518:
/*!***************************************************************************************!*\
  !*** ./src/app/features/landing-channel-manager/landing-channel-manager.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingChannelManagerComponent": () => (/* binding */ LandingChannelManagerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _landing_channel_manager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-channel-manager.component.html?ngResource */ 23002);
/* harmony import */ var _landing_channel_manager_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-channel-manager.component.scss?ngResource */ 49466);
/* harmony import */ var _landing_channel_manager_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_landing_channel_manager_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let LandingChannelManagerComponent = class LandingChannelManagerComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.channelManager = {
      title: '',
      subtitle: '',
      contentOne: '',
      contentTwo: ''
    };
    this.channelManagerRo = {
      title: 'Optimizarea Parteneriatului Prin Channel Manager',
      subtitle: 'Administrare Simplă a Rezervărilor și Interacțiuni Eficiente',
      contentOne: 'Platforma Bestinform conține un sistem integrat, cu o interfață user-friendly, denumit „Channel Manager”. Prin intermediul acestuia, partenerul poate gestiona fluxul complet de rezervări și administra datele despre oferte și disponibilitatea acestora.',
      contentTwo: 'Totodată, prin Channel Manager, partenerul primește notificări despre interacțiunile utilizatorilor cu proprietatea listată, consultă Registrul de rezervări, comunică, prin mesageria platformei, cu utilizatorii, cotactează suportul tehnic, verifică balanța actualizată în timp real, generează și exportă rapoarte despre evoluția parteneriatului.'
    };
    this.channelManagerEn = {
      title: 'Partnership Optimization Through Channel Manager',
      subtitle: 'Simple Reservation Management and Efficient Interactions',
      contentOne: 'The Bestinform platform contains an integrated system with a user friendly interface called "Channel Manager. Through it, the partner can manage the complete booking flow and manage data about offers and availability.',
      contentTwo: 'At the same time, through Channel Manager, the partner receives notifications about user interactions\n with the listed property, consults the Booking Register, communicates with users via the platform messaging, quotes technical support, checks the real time updated balance, generates and exports reports about the partnership progress.'
    };
    this.bookings = {
      title: '',
      subtitle: '',
      content: ''
    };
    this.bookingsRo = {
      title: 'Garantăm Rezervări Fiabile',
      subtitle: 'Protecție pentru Parteneri prin Sistemul Bestinform',
      content: 'Bestinform asigură partenerul de integritatea rezervărilor și elimină potențialele rezervări frauduloase ce pot încurca disponibilitatea și activitatea proprietații.'
    };
    this.bookingsEn = {
      title: 'We guarantee Reliable Bookings',
      subtitle: 'Protection for Partners through the Bestinform System',
      content: 'Bestinform assures the partner of the integrity of the reservations and eliminates potential fraudulent reservations that can confuse the availability and activity of the property.'
    };
    this.users = {
      title: '',
      subtitle: '',
      content: ''
    };
    this.usersRo = {
      title: 'Înțelegerea Utilizatorilor Prin Evaluări Precise',
      subtitle: 'Sistemul de Rating Bestinform pentru Oferirea unor Experiențe Personalizate',
      content: 'Bestinform contribuie la identificarea corectă a tipului de consumator din rândul utilizatorilor. În Registrul de rezervări, este disponibil un rating (Standard/Premium/VIP) pentru fiecare utilizator care efectuează o rezervare. De asemenea, și partenerul are posibilitatea de a acorda un calificativ utilizatorilor cu rezervări confirmate.'
    };
    this.usersEn = {
      title: 'Understanding Users Through Accurate Ratings',
      subtitle: 'The Bestinform Rating System for Providing Personalized Experiences',
      content: 'Bestinform helps to correctly identify the type of consumer among your users. A rating (Standard/Premium/VIP) is available in the Booking Register for each user making a booking. The partner also has the possibility to give a rating to users with confirmed bookings.'
    };
    this.perfectPartnership = {
      title: '',
      subtitle: '',
      items: [{
        title: '',
        content: ''
      }]
    };
    this.perfectPartnershipRo = {
      title: 'Parteneriatul Perfect',
      subtitle: 'Transformând Potențialul în Realitate Prin Platforma Bestinform',
      items: [{
        title: 'Promovare',
        content: 'Promovăm proprietatea dumneavoastră prin algoritmi de inteligență artificială, obținând un procent ridicat de potrivire a profilului și serviciilor dumneavoastră cu profilurile de consumator ale utilizatorilor platformei. (Pe scurt, aducem, în locația dumneavoastră, clienții potriviți.)'
      }, {
        title: 'Suport tehnic',
        content: 'Suport tehnic dedicat pentru înregistrarea corectă în platformă, colectarea datelor relevante și a conținutului multimedia, tutorial video și manual pentru utilizarea sistemului Channel Manager, asistență tehnică 24/7 cu agent dedicat.'
      }, {
        title: 'APIs',
        content: 'Dacă partenerul utilizează un sistem propriu de gestiune a rezervărilor, acesta poate fi conectat, prin API, la sistemul Channel Manager.'
      }]
    };
    this.perfectPartnershipEn = {
      title: 'The Perfect Partnership',
      subtitle: 'Transforming Potential into Reality Through the Bestinform Platform',
      items: [{
        title: 'Promotion',
        content: 'We promote your property through artificial intelligence algorithms, achieving a high match rate of your profile and services with the consumer profiles of the platform users. (In short, we bring the right customers to your location).'
      }, {
        title: 'Technical support',
        content: 'Dedicated technical support for correct registration in the platform, collection of relevant data and multimedia content, video tutorial and manual for using the Channel Manager system, 24/7 technical support with dedicated agent.'
      }, {
        title: 'APIs',
        content: 'If the partner uses its own booking management system, it can be connected via API to the Channel Manager system.'
      }]
    };
    this.businessImpact = {
      title: '',
      items: [{
        icon: '',
        title: '',
        content: ''
      }]
    };
    this.businessImpactRo = {
      title: 'Maximizează Impactul Afacerii Tale',
      items: [{
        icon: 'assets/images/others/landing-partners/optim-display-2x.png',
        title: 'Afișare optimă',
        content: 'Afișăm, într-un format optim și eficient, toate datele despre proprietate, facilități, meniu, servicii și produse reprezentative. Conținutul multimedia permite încărcarea de fișiere video'
      }, {
        icon: 'assets/images/others/landing-partners/payment-2x.png',
        title: 'Plată în avans',
        content: 'Pentru garantarea rezervării, în Channel Manager este disponibilă și posibilitatea de facilitare a rezervărilor cu plata în avans, în funcție de opțiunile predefinite ale partenerului.'
      }, {
        icon: 'assets/images/others/landing-partners/scan-2x.png',
        title: 'Generare',
        content: 'Toate rezervările efectuate pe bază de disponibilitate online sunt generate și transmise printr-un formular electronic (E-Voucher), care conține un cod QR și date despre utilizator și solicitările acestuia.'
      }, {
        icon: 'assets/images/others/landing-partners/policy-2x.png',
        title: 'Propriile politici',
        content: 'Partenerul are libertatea de a-și stabili propriile politici de modificare sau anulare a rezervărilor.'
      }]
    };
    this.businessImpactEn = {
      title: 'Maximize Your Business Impact',
      items: [{
        icon: 'assets/images/others/landing-partners/optim-display-2x.png',
        title: 'Optimal display',
        content: 'We display, in an optimal and efficient format, all data about the property, facilities, menu, services and representative products. Multimedia content allows uploading of video files.'
      }, {
        icon: 'assets/images/others/landing-partners/payment-2x.png',
        title: 'Prepaid bookings',
        content: 'To guarantee your booking, the Channel Manager also offers the possibility to facilitate prepaid bookings, depending on the partner s predefined options.'
      }, {
        icon: 'assets/images/others/landing-partners/scan-2x.png',
        title: 'Generated codes',
        content: 'All bookings made on the basis of online availability are generated and transmitted via an electronic form (E Voucher), which contains a QR code and data about the user and his/her requests.'
      }, {
        icon: 'assets/images/others/landing-partners/policy-2x.png',
        title: 'Own policies',
        content: 'The Partner is free to set its own policies for changing or cancelling reservations.'
      }]
    };
  }
  ngOnInit() {
    console.log('on init');
    const currentRoute = this.route.snapshot.url.join('/');
    if (currentRoute.includes('ro')) {
      this.pageLang = 'ro';
      this.channelManager = this.channelManagerRo;
      this.bookings = this.bookingsRo;
      this.users = this.usersRo;
      this.perfectPartnership = this.perfectPartnershipRo;
      this.businessImpact = this.businessImpactRo;
    } else if (currentRoute.includes('en')) {
      this.pageLang = 'en';
      this.channelManager = this.channelManagerEn;
      this.bookings = this.bookingsEn;
      this.users = this.usersEn;
      this.perfectPartnership = this.perfectPartnershipEn;
      this.businessImpact = this.businessImpactEn;
    } else {
      this.router.navigate(['/provideroffer/en']);
    }
  }
  changeRoute(pageLang) {
    console.log('route changed', pageLang);
    this.router.navigate(['/provideroffer/' + pageLang]);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
  }];
};
LandingChannelManagerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-landing-channel-manager',
  template: _landing_channel_manager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_landing_channel_manager_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LandingChannelManagerComponent);


/***/ }),

/***/ 74006:
/*!************************************************************************************!*\
  !*** ./src/app/features/landing-channel-manager/landing-channel-manager.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingChannelManagerModule": () => (/* binding */ LandingChannelManagerModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _landing_channel_manager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-channel-manager.component */ 66518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not-found/not-found.component */ 95707);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







const routes = [{
  path: 'en',
  component: _landing_channel_manager_component__WEBPACK_IMPORTED_MODULE_0__.LandingChannelManagerComponent,
  pathMatch: 'full'
}, {
  path: 'ro',
  component: _landing_channel_manager_component__WEBPACK_IMPORTED_MODULE_0__.LandingChannelManagerComponent,
  pathMatch: 'full'
}, {
  path: '',
  redirectTo: 'en',
  pathMatch: 'full'
}, {
  path: '**',
  component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent
} // Wildcard route for a 404 page
];

let LandingChannelManagerModule = class LandingChannelManagerModule {};
LandingChannelManagerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_landing_channel_manager_component__WEBPACK_IMPORTED_MODULE_0__.LandingChannelManagerComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
})], LandingChannelManagerModule);


/***/ }),

/***/ 49466:
/*!****************************************************************************************************!*\
  !*** ./src/app/features/landing-channel-manager/landing-channel-manager.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n* {\n  font-family: \"Helvetica\", sans-serif !important;\n}\n\n@media only screen and (min-width: 1200px) {\n  .img-mobile {\n    display: none;\n  }\n  p {\n    color: #000;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 35px;\n  }\n  h2 {\n    color: #000;\n    font-size: 60px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 64.5px;\n  }\n  h3 {\n    color: #7B7B7B;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 35px;\n  }\n  .big-pb {\n    padding-bottom: 130px;\n  }\n  .big-px {\n    padding-top: 130px;\n    padding-bottom: 130px;\n  }\n  .medium-pb {\n    padding-bottom: 100px;\n  }\n  .channel-manager-wrap {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n  .channel-manager-wrap h2 {\n    max-width: 880px;\n    margin: 0 auto;\n  }\n  .channel-manager-wrap .left-column {\n    max-width: 600px;\n    margin-right: 90px;\n  }\n  .channel-manager-wrap .right-column {\n    max-width: 48%;\n  }\n  .bookings-wrap {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n  .bookings-wrap .right-column {\n    max-width: 560px;\n    margin-left: auto;\n  }\n  .bookings-wrap .left-column {\n    max-width: 65%;\n    margin-right: 60px;\n  }\n  .users-wrap .right-column {\n    max-width: 60%;\n  }\n  .users-wrap .right-column h2 {\n    max-width: 900px;\n  }\n  .users-wrap .right-column h3 {\n    max-width: 800px;\n  }\n  .users-wrap .left-column {\n    max-width: 560px;\n    margin-right: 135px;\n    margin-left: -140px;\n  }\n  #perfect-partnership .content-item {\n    position: relative;\n  }\n  #perfect-partnership .content-item:not(:last-child)::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    width: 75%;\n    border-bottom: 2px solid #7B7B7B;\n  }\n  #perfect-partnership .content-wrap {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n  #perfect-partnership .content-item h3 {\n    color: #000;\n    font-weight: 500;\n    line-height: 25px;\n    margin-bottom: 18px;\n  }\n  #perfect-partnership .content-item p {\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 30px;\n    margin-bottom: 0px;\n  }\n  #perfect-partnership .content-item:not(:last-child) {\n    padding-bottom: 40px;\n  }\n  #perfect-partnership .content-item:not(:first-child) {\n    padding-top: 40px;\n  }\n  #perfect-partnership hr {\n    border-color: #7B7B7B;\n    margin: 0;\n    width: 75%;\n    opacity: 1;\n    border-width: 2px;\n  }\n  div#perfect-partnership {\n    overflow: hidden;\n  }\n  #perfect-partnership img {\n    position: absolute;\n    right: -350px;\n    top: 0;\n  }\n  #perfect-partnership .content-wrap {\n    position: relative;\n  }\n  #perfect-partnership .left-column {\n    z-index: 9;\n    max-width: 40%;\n  }\n  div#business-impact .impact-items {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n  div#business-impact .content-wrap {\n    margin-left: 50px;\n    margin-right: 50px;\n  }\n  div#business-impact .overflow-container {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n  }\n  div#business-impact .white {\n    background-color: white;\n    position: relative;\n    padding: 75px 90px;\n  }\n  div#business-impact .dark-blue {\n    background-color: #24398A;\n    color: white;\n    padding: 20px;\n    position: relative;\n    z-index: 1;\n  }\n  div#business-impact .overflow-image {\n    position: absolute;\n    top: -195px; /* Adjust this value as needed */\n    left: 50%; /* Center the image horizontally */\n    transform: translateX(-50%); /* Center the image horizontally */\n    width: auto; /* Allow the image to adjust its width */\n    max-height: 305px; /* Set the maximum width of the image */\n    z-index: -1;\n  }\n  div#business-impact .custom-height-col {\n    min-height: 285px; /* Set the minimum height of the columns */\n  }\n  div#business-impact .item:not(:last-child) {\n    margin-bottom: 100px;\n  }\n  div#business-impact h3 {\n    color: #000;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .eu-header {\n    flex-direction: column;\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n  .eu-header .w-25 {\n    width: 85% !important;\n  }\n  .img-web {\n    display: none;\n  }\n  p {\n    color: #000;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 26px;\n    margin-bottom: 0px;\n  }\n  h2 {\n    color: #000;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 31.5px;\n  }\n  h3 {\n    color: #7B7B7B;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 23.5px;\n  }\n  .big-pb {\n    padding-bottom: 80px;\n  }\n  .big-px {\n    padding-top: 80px;\n    padding-bottom: 80px;\n  }\n  .medium-pb {\n    padding-bottom: 80px;\n  }\n  .channel-manager-wrap .content-wrap,\n  .bookings-wrap .content-wrap,\n  .users-wrap .content-wrap {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  div#partners-features {\n    text-align: center;\n  }\n  .channel-manager-wrap .img-web {\n    display: none;\n  }\n  .channel-manager-wrap .text-center {\n    padding: 0;\n  }\n  .channel-manager-wrap .img-mobile {\n    width: 225px;\n    height: auto;\n    margin: 30px auto;\n  }\n  .bookings-wrap .img-mobile {\n    width: 260px;\n    height: auto;\n    margin-bottom: 30px;\n  }\n  .users-wrap .img-mobile {\n    width: 260px;\n    height: auto;\n    margin-bottom: 30px;\n  }\n  div#perfect-partnership {\n    padding-bottom: 0;\n    text-align: center;\n  }\n  div#perfect-partnership .content-item {\n    position: relative;\n  }\n  div#perfect-partnership .content-item:not(:last-child)::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 35%;\n    border-bottom: 2px solid #7B7B7B;\n  }\n  div#perfect-partnership .content-wrap {\n    flex-wrap: wrap;\n    flex-direction: column-reverse;\n  }\n  div#perfect-partnership .content-item h3 {\n    color: #000;\n    font-size: 30px;\n    font-weight: 500;\n    line-height: 25px;\n    margin-bottom: 18px;\n  }\n  div#perfect-partnership .content-wrap .big-px {\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n  div#perfect-partnership .content-wrap .right-column {\n    padding-bottom: 70px;\n  }\n  div#perfect-partnership hr {\n    width: 30%;\n    margin: 0 auto;\n    border: 2px solid #7B7B7B;\n    opacity: 1;\n  }\n  div#perfect-partnership .content-item:not(:last-child) {\n    padding-bottom: 35px;\n  }\n  div#perfect-partnership .content-item:not(:first-child) {\n    padding-top: 35px;\n  }\n  #business-impact {\n    padding: 0;\n  }\n  #business-impact .content-wrap {\n    --bs-gutter-x: 1.5rem;\n    --bs-gutter-y: 0;\n    padding-right: calc(var(--bs-gutter-x) * 0.5);\n    padding-left: calc(var(--bs-gutter-x) * 0.5);\n  }\n  #business-impact h3, #business-impact p {\n    color: #fff;\n  }\n  #business-impact h3 {\n    font-size: 30px;\n    margin-bottom: 18px;\n  }\n  #business-impact .item {\n    flex-wrap: wrap;\n    text-align: center;\n    justify-content: center;\n  }\n  #business-impact .item:not(:last-child) {\n    margin-bottom: 80px;\n  }\n  #business-impact .item img {\n    height: 155px;\n    margin-bottom: 40px;\n  }\n}\n#landing-header-bar {\n  background-color: #24398A;\n}\n#landing-header-bar .language {\n  background-color: #24398A;\n  color: var(--primary-background);\n  border: none;\n}\n\ndiv#partners-features h2 {\n  padding-bottom: 20px;\n}\n\ndiv#partners-features h3 {\n  padding-bottom: 33px;\n}\n\ndiv#partners-features p:last-child {\n  margin-bottom: 0px;\n}\n\ndiv#business-impact .content-wrap {\n  background-color: #5365E5;\n}\ndiv#business-impact h2 {\n  color: #fff;\n}\ndiv#business-impact p {\n  font-size: 20px;\n  line-height: 30px;\n  margin-bottom: 0;\n}\ndiv#business-impact .custom-height-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.footer {\n  padding: 30px 0;\n  background-color: #24398A;\n  color: var(--primary-background);\n  gap: 15px;\n}\n.footer p {\n  color: #fff;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 30px; /* 214.286% */\n  letter-spacing: -0.408px;\n}\n.footer .fab {\n  font-family: \"Font Awesome 5 Brands\" !important;\n}\n.footer i {\n  font-size: 24px;\n}\n\n.social-media a {\n  color: #fff;\n}\n\n.social-media a:hover {\n  color: #D8D8D8;\n}\n\n.financeArea {\n  padding-bottom: 120px;\n  background: #F0F0F0;\n}\n.financeArea .imgWrapper {\n  max-width: 433px;\n  margin: 0 auto;\n  padding-bottom: 20px;\n}\n.financeArea p {\n  max-width: 600px;\n  margin: 0 auto;\n  text-align: center;\n  color: #000;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: -0.408px;\n}\n\n@media only screen and (max-width: 767px) {\n  .financeArea {\n    padding-bottom: 30px;\n    padding-top: 30px;\n  }\n}\np.text-small {\n  font-size: 14px;\n  line-height: 20px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/landing-channel-manager/landing-channel-manager.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,+CAAA;AAkBF;;AAfA;EAEE;IACE,aAAA;EAiBF;EAdA;IACE,WAAA;IACA,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;EAgBF;EAbA;IACE,WAAA;IACA,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;EAeF;EAZA;IACE,cAAA;IACA,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;EAcF;EAXA;IACE,qBAAA;EAaF;EAVA;IACE,kBAAA;IACA,qBAAA;EAYF;EATA;IACE,qBAAA;EAWF;EARA;IAEE,kBAAA;IACA,mBAAA;EASF;EAPE;IACE,gBAAA;IACA,cAAA;EASJ;EANE;IACE,gBAAA;IACA,kBAAA;EAQJ;EALE;IACE,cAAA;EAOJ;EADA;IACE,kBAAA;IACA,mBAAA;EAGF;EADE;IACE,gBAAA;IACA,iBAAA;EAGJ;EAAE;IACE,cAAA;IACA,kBAAA;EAEJ;EAKE;IACE,cAAA;EAHJ;EAME;IACE,gBAAA;EAJJ;EAOE;IACE,gBAAA;EALJ;EASE;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EAPJ;EAaE;IACE,kBAAA;EAXJ;EAcE;IACE,WAAA;IACA,kBAAA;IACA,SAAA;IAGA,UAAA;IACA,gCAAA;EAdJ;EAiBE;IACE,kBAAA;IACA,mBAAA;EAfJ;EAkBE;IACE,WAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;EAhBJ;EAmBE;IACE,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;IACA,kBAAA;EAjBJ;EAoBE;IACE,oBAAA;EAlBJ;EAqBE;IACE,iBAAA;EAnBJ;EAsBE;IACE,qBAAA;IACA,SAAA;IACA,UAAA;IACA,UAAA;IACA,iBAAA;EApBJ;EAyBA;IACE,gBAAA;EAvBF;EA0BA;IACE,kBAAA;IACA,aAAA;IACA,MAAA;EAxBF;EA2BA;IACE,kBAAA;EAzBF;EA4BA;IACE,UAAA;IACA,cAAA;EA1BF;EA6BA;IACE,kBAAA;IACA,mBAAA;EA3BF;EAgCE;IACE,iBAAA;IACA,kBAAA;EA9BJ;EAiCE;IACE,kBAAA;IACA,aAAA;IACA,uBAAA;IACA,uBAAA;EA/BJ;EAkCE;IACE,uBAAA;IACA,kBAAA;IACA,kBAAA;EAhCJ;EAmCE;IACE,yBD/MU;ICgNV,YAAA;IACA,aAAA;IACA,kBAAA;IACA,UAAA;EAjCJ;EAqCE;IACE,kBAAA;IACA,WAAA,EAAA,gCAAA;IACA,SAAA,EAAA,kCAAA;IACA,2BAAA,EAAA,kCAAA;IACA,WAAA,EAAA,wCAAA;IACA,iBAAA,EAAA,uCAAA;IACA,WAAA;EAnCJ;EAsCE;IACE,iBAAA,EAAA,0CAAA;EApCJ;EAuCE;IACE,oBAAA;EArCJ;EAwCE;IACE,WAAA;EAtCJ;AACF;AA6CA;EAEE;IACE,sBAAA;IACA,iBAAA;IACA,oBAAA;EA5CF;EA8CE;IACE,qBAAA;EA5CJ;EAgDA;IACE,aAAA;EA9CF;EAiDA;IACE,WAAA;IACA,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;IACA,kBAAA;EA/CF;EAkDA;IACE,WAAA;IACA,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;EAhDF;EAmDA;IACE,cAAA;IACA,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;EAjDF;EAoDA;IACE,oBAAA;EAlDF;EAqDA;IACE,iBAAA;IACA,oBAAA;EAnDF;EAsDA;IACE,oBAAA;EApDF;EAuDA;;;IAGE,eAAA;IACA,sBAAA;EArDF;EAwDA;IACE,kBAAA;EAtDF;EA0DE;IACE,aAAA;EAxDJ;EA2DE;IACE,UAAA;EAzDJ;EA4DE;IACE,YAAA;IACA,YAAA;IACA,iBAAA;EA1DJ;EA+DE;IACE,YAAA;IACA,YAAA;IACA,mBAAA;EA7DJ;EAkEE;IACE,YAAA;IACA,YAAA;IACA,mBAAA;EAhEJ;EAqEA;IACE,iBAAA;IACA,kBAAA;EAnEF;EAqEE;IACE,kBAAA;EAnEJ;EAsEE;IACE,WAAA;IACA,kBAAA;IACA,SAAA;IACA,SAAA;IACA,2BAAA;IACA,UAAA;IACA,gCAAA;EApEJ;EAuEE;IACE,eAAA;IACA,8BAAA;EArEJ;EAwEE;IACE,WAAA;IACA,eAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;EAtEJ;EAyEE;IACE,iBAAA;IACA,oBAAA;EAvEJ;EA0EE;IACE,oBAAA;EAxEJ;EA2EE;IACE,UAAA;IACA,cAAA;IACA,yBAAA;IACA,UAAA;EAzEJ;EA4EE;IACE,oBAAA;EA1EJ;EA6EE;IACE,iBAAA;EA3EJ;EA+EA;IACE,UAAA;EA7EF;EA+EE;IACE,qBAAA;IACA,gBAAA;IACA,6CAAA;IACA,4CAAA;EA7EJ;EAiFE;IACE,WAAA;EA/EJ;EAkFE;IACE,eAAA;IACA,mBAAA;EAhFJ;EAmFE;IACE,eAAA;IACA,kBAAA;IACA,uBAAA;EAjFJ;EAoFE;IACE,mBAAA;EAlFJ;EAqFE;IACE,aAAA;IACA,mBAAA;EAnFJ;AACF;AA2FA;EACE,yBDtbc;AC6VhB;AA2FE;EACE,yBDzbY;EC0bZ,gCAAA;EACA,YAAA;AAzFJ;;AA6FA;EACE,oBAAA;AA1FF;;AA6FA;EACE,oBAAA;AA1FF;;AA6FA;EACE,kBAAA;AA1FF;;AA+FE;EACE,yBAAA;AA5FJ;AA+FE;EACE,WAAA;AA7FJ;AAgGE;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;AA9FJ;AAiGE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;AA/FJ;;AAqGA;EAeE,eAAA;EACA,yBDpfc;ECqfd,gCAAA;EACA,SAAA;AAhHF;AAgGE;EACE,WAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;EACA,wBAAA;AA9FJ;AAiGE;EACE,+CAAA;AA/FJ;AAwGE;EACE,eAAA;AAtGJ;;AA0GA;EACE,WAAA;AAvGF;;AA0GA;EACE,cAAA;AAvGF;;AA0GA;EACE,qBAAA;EACA,mBAAA;AAvGF;AAyGE;EACE,gBAAA;EACA,cAAA;EACA,oBAAA;AAvGJ;AA0GE;EACE,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,iBAAA;EACA,wBAAA;AAxGJ;;AA4GA;EACE;IACE,oBAAA;IACA,iBAAA;EAzGF;AACF;AA8GA;EACE,eAAA;EACA,iBAAA;AA5GF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n* {\n  font-family: \"Helvetica\", sans-serif !important;\n}\n\n@media only screen and (min-width: 1200px) {\n\n  .img-mobile {\n    display: none;\n  }\n\n  p {\n    color: #000;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 35px;\n  }\n\n  h2 {\n    color: #000;\n    font-size: 60px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 64.5px;\n  }\n\n  h3 {\n    color: #7B7B7B;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 35px;\n  }\n\n  .big-pb {\n    padding-bottom: 130px;\n  }\n\n  .big-px {\n    padding-top: 130px;\n    padding-bottom: 130px;\n  }\n\n  .medium-pb {\n    padding-bottom: 100px;\n  }\n\n  .channel-manager-wrap {\n\n    padding-left: 50px;\n    padding-right: 50px;\n\n    h2 {\n      max-width: 880px;\n      margin: 0 auto;\n    }\n\n    .left-column {\n      max-width: 600px;\n      margin-right: 90px;\n    }\n\n    .right-column {\n      max-width: 48%;\n    }\n\n\n  }\n\n  .bookings-wrap {\n    padding-left: 50px;\n    padding-right: 50px;\n\n    .right-column {\n      max-width: 560px;\n      margin-left: auto;\n    }\n\n    .left-column {\n      max-width: 65%;\n      margin-right: 60px;\n    }\n\n  }\n\n  .users-wrap {\n\n    .right-column {\n      max-width: 60%;\n    }\n\n    .right-column h2 {\n      max-width: 900px;\n    }\n\n    .right-column h3 {\n      max-width: 800px;\n    }\n\n\n    .left-column {\n      max-width: 560px;\n      margin-right: 135px;\n      margin-left: -140px;\n    }\n  }\n\n  #perfect-partnership {\n\n    .content-item {\n      position: relative;\n    }\n\n    .content-item:not(:last-child)::after {\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      //left: 50%;\n      //transform: translateX(-50%);\n      width: 75%;\n      border-bottom: 2px solid #7B7B7B;\n    }\n\n    .content-wrap {\n      padding-left: 50px;\n      padding-right: 50px;\n    }\n\n    .content-item h3 {\n      color: #000;\n      font-weight: 500;\n      line-height: 25px;\n      margin-bottom: 18px;\n    }\n\n    .content-item p {\n      font-size: 20px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 30px;\n      margin-bottom: 0px;\n    }\n\n    .content-item:not(:last-child) {\n      padding-bottom: 40px;\n    }\n\n    .content-item:not(:first-child) {\n      padding-top: 40px\n    }\n\n    hr {\n      border-color: #7B7B7B;\n      margin: 0;\n      width: 75%;\n      opacity: 1;\n      border-width: 2px;\n    }\n\n  }\n\n  div#perfect-partnership {\n    overflow: hidden;\n  }\n\n  #perfect-partnership img {\n    position: absolute;\n    right: -350px;\n    top: 0;\n  }\n\n  #perfect-partnership  .content-wrap {\n    position: relative;\n  }\n\n  #perfect-partnership .left-column {\n    z-index: 9;\n    max-width: 40%;\n  }\n\n  div#business-impact .impact-items {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  div#business-impact {\n\n    .content-wrap {\n      margin-left: 50px;\n      margin-right: 50px;\n    }\n\n    .overflow-container {\n      position: relative;\n      display: flex;\n      justify-content: center;\n      align-items: flex-start;\n    }\n\n    .white {\n      background-color: white;\n      position: relative;\n      padding: 75px 90px;\n    }\n\n    .dark-blue {\n      background-color: $primary-color;\n      color: white;\n      padding: 20px;\n      position: relative;\n      z-index: 1;\n    }\n\n\n    .overflow-image {\n      position: absolute;\n      top: -195px; /* Adjust this value as needed */\n      left: 50%; /* Center the image horizontally */\n      transform: translateX(-50%); /* Center the image horizontally */\n      width: auto; /* Allow the image to adjust its width */\n      max-height: 305px; /* Set the maximum width of the image */\n      z-index: -1;\n    }\n\n    .custom-height-col {\n      min-height: 285px; /* Set the minimum height of the columns */\n    }\n\n    .item:not(:last-child) {\n      margin-bottom: 100px;\n    }\n\n    h3 {\n      color: #000;\n    }\n\n  }\n\n\n}\n\n@media only screen and (max-width: 1199px) {\n\n  .eu-header {\n    flex-direction: column;\n    padding-top: 15px;\n    padding-bottom: 15px;\n\n    .w-25 {\n      width: 85% !important;\n    }\n  }\n\n  .img-web {\n    display: none;\n  }\n\n  p {\n    color: #000;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 26px;\n    margin-bottom: 0px;\n  }\n\n  h2 {\n    color: #000;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 31.5px;\n  }\n\n  h3 {\n    color: #7B7B7B;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 23.5px;\n  }\n\n  .big-pb {\n    padding-bottom: 80px;\n  }\n\n  .big-px {\n    padding-top: 80px;\n    padding-bottom: 80px;\n  }\n\n  .medium-pb {\n    padding-bottom: 80px;\n  }\n\n  .channel-manager-wrap .content-wrap,\n  .bookings-wrap .content-wrap,\n  .users-wrap .content-wrap{\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n\n  div#partners-features {\n    text-align: center;\n  }\n\n  .channel-manager-wrap {\n    .img-web {\n      display: none;\n    }\n\n    .text-center {\n      padding: 0;\n    }\n\n    .img-mobile {\n      width: 225px;\n      height: auto;\n      margin: 30px auto;\n    }\n  }\n\n  .bookings-wrap {\n    .img-mobile {\n      width: 260px;\n      height: auto;\n      margin-bottom: 30px;\n    }\n  }\n\n  .users-wrap {\n    .img-mobile {\n      width: 260px;\n      height: auto;\n      margin-bottom: 30px;\n    }\n  }\n\n\n  div#perfect-partnership {\n    padding-bottom: 0;\n    text-align: center;\n\n    .content-item {\n      position: relative;\n    }\n\n    .content-item:not(:last-child)::after {\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 35%;\n      border-bottom: 2px solid #7B7B7B;\n    }\n\n    .content-wrap {\n      flex-wrap: wrap;\n      flex-direction: column-reverse;\n    }\n\n    .content-item h3 {\n      color: #000;\n      font-size: 30px;\n      font-weight: 500;\n      line-height: 25px;\n      margin-bottom: 18px;\n    }\n\n    .content-wrap .big-px {\n      padding-top: 70px;\n      padding-bottom: 70px;\n    }\n\n    .content-wrap .right-column {\n      padding-bottom: 70px;\n    }\n\n    hr {\n      width: 30%;\n      margin: 0 auto;\n      border: 2px solid #7B7B7B;\n      opacity: 1;\n    }\n\n    .content-item:not(:last-child) {\n      padding-bottom: 35px;\n    }\n\n    .content-item:not(:first-child) {\n      padding-top: 35px;\n    }\n  }\n\n  #business-impact {\n    padding: 0;\n\n    .content-wrap {\n      --bs-gutter-x: 1.5rem;\n      --bs-gutter-y: 0;\n      padding-right: calc(var(--bs-gutter-x) * 0.5);\n      padding-left: calc(var(--bs-gutter-x) * 0.5);\n  }\n\n\n    h3, p {\n      color: #fff;\n    }\n\n    h3 {\n      font-size: 30px;\n      margin-bottom: 18px;\n    }\n\n    .item {\n      flex-wrap: wrap;\n      text-align: center;\n      justify-content: center;\n    }\n\n    .item:not(:last-child) {\n      margin-bottom: 80px;\n    }\n\n    .item img {\n      height: 155px;\n      margin-bottom: 40px;\n    }\n  }\n\n\n\n}\n\n\n#landing-header-bar {\n  background-color: $primary-color;\n\n  .language {\n    background-color: $primary-color;\n    color: var(--primary-background);\n    border: none;\n  }\n}\n\ndiv#partners-features h2 {\n  padding-bottom: 20px;\n}\n\ndiv#partners-features h3 {\n  padding-bottom: 33px;\n}\n\ndiv#partners-features p:last-child {\n  margin-bottom: 0px;\n}\n\ndiv#business-impact {\n\n  .content-wrap {\n    background-color: #5365E5;\n  }\n\n  h2 {\n    color: #fff;\n  }\n\n  p {\n    font-size: 20px;\n    line-height: 30px;\n    margin-bottom: 0;\n  }\n\n  .custom-height-col {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n}\n\n\n\n.footer{\n\n  p {\n    color:#fff;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 30px; /* 214.286% */\n    letter-spacing: -0.408px;\n  }\n\n  .fab {\n    font-family: 'Font Awesome 5 Brands' !important;\n  }\n\n  padding: 30px 0;\n  background-color: $primary-color;\n  color: var(--primary-background);\n  gap: 15px;\n\n\n  i{\n    font-size: 24px;\n  }\n}\n\n.social-media a {\n  color: #fff;\n}\n\n.social-media a:hover {\n  color: #D8D8D8;\n}\n\n.financeArea {\n  padding-bottom: 120px;\n  background: #F0F0F0;\n\n  .imgWrapper {\n    max-width: 433px;\n    margin: 0 auto;\n    padding-bottom: 20px;\n  }\n\n  p {\n    max-width: 600px;\n    margin: 0 auto;\n    text-align: center;\n    color: #000;\n    font-size: 18px;\n    line-height: 22px;\n    letter-spacing: -0.408px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .financeArea {\n    padding-bottom: 30px;\n    padding-top: 30px;\n  }\n}\n\n\n\np.text-small {\n  font-size: 14px;\n  line-height: 20px;\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 23002:
/*!****************************************************************************************************!*\
  !*** ./src/app/features/landing-channel-manager/landing-channel-manager.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--<div class=\"d-flex justify-content-center align-items-center w-100 eu-header\">-->\n<!--    <img src=\"assets/images/logos/fonduri-ue.png\" class=\"w-25\">-->\n<!--    <p class=\"w-25 mb-0 text-small\">Pentru informaţii-->\n<!--        detaliate despre celelalte programe cofinanţate de Uniunea-->\n<!--        Europeană, vă invităm să vizitaţi <a href=\"https://www.fonduri-ue.ro/\" target=\"_blank\">www.fonduri-ue.ro-->\n<!--        </a></p>-->\n<!--</div>-->\n<div id=\"landing-header-bar\" class=\"container-fluid\">\n    <div class=\"container\">\n        <div class=\"py-4 d-flex justify-content-between align-items-center\">\n            <a>\n                <img src=\"assets/Betsinform_logo.png\" width=\"200px\">\n            </a>\n            <select class=\"language\" [(ngModel)]=\"pageLang\" (change)=\"changeRoute(pageLang)\">\n                <option value=\"en\">EN</option>\n                <option value=\"ro\">RO</option>\n            </select>\n        </div>\n    </div>\n</div>\n<div id=\"partners-features\" class=\"container-fluid\">\n    <div class=\"feature-section channel-manager-wrap big-px\">\n        <div class=\"row text-center big-pb\">\n            <h2>{{channelManager.title}}</h2>\n            <h3>{{channelManager.subtitle}}</h3>\n        </div>\n        <div class=\"d-flex align-items-center content-wrap\">\n            <div class=\"col left-column\">\n                <img src=\"assets/images/others/landing-partners/channel-manager-illustration-2x.png\" class=\"img-fluid img-web\">\n            </div>\n            <div class=\"col right-column\">\n                <p> {{channelManager.contentOne}}</p>\n                <img src=\"assets/images/others/landing-partners/channel-manager-illustration-2x.png\" class=\"img-fluid img-mobile\">\n                <p>{{channelManager.contentTwo}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"feature-section bookings-wrap big-pb\">\n        <div class=\"content-wrap d-flex align-items-center\">\n            <div class=\"col left-column\">\n                <h2>{{bookings.title}}</h2>\n                <h3>{{bookings.subtitle}}</h3>\n                <img src=\"assets/images/others/landing-partners/bookings-illustration-2x.png\" class=\"img-fluid img-mobile\">\n                <p>{{bookings.content}}</p>\n            </div>\n            <div class=\"col right-column\">\n                <img src=\"assets/images/others/landing-partners/bookings-illustration-2x.png\" class=\"img-fluid img-web\">\n            </div>\n        </div>\n    </div>\n    <div class=\"feature-section users-wrap big-pb\">\n        <div class=\"d-flex align-items-center content-wrap\">\n            <div class=\"col left-column\">\n                <img src=\"assets/images/others/landing-partners/users-illustration-2x.png\" class=\"img-fluid img-web\">\n            </div>\n            <div class=\"col right-column\">\n                <h2>{{users.title}}</h2>\n                <h3>{{users.subtitle}}</h3>\n                <img src=\"assets/images/others/landing-partners/users-illustration-2x.png\" class=\"img-fluid img-mobile\">\n                <p>{{users.content}}</p>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n<div id=\"perfect-partnership\" class=\"container-fluid big-pb\">\n    <div class=\"row text-center\">\n        <h2>\n            {{perfectPartnership.title}}\n        </h2>\n        <h3>\n            {{perfectPartnership.subtitle}}\n        </h3>\n    </div>\n    <div class=\"d-flex align-items-center content-wrap big-px\">\n        <div class=\"col left-column\">\n            <div class=\"content-item\" *ngFor=\"let item of perfectPartnership.items\">\n                <h3>{{item.title}}</h3>\n                <p>{{item.content}}</p>\n            </div>\n        </div>\n        <div class=\"col right-column\">\n            <img src=\"assets/images/others/landing-partners/perfect-partnership-2x.png\" class=\"img-fluid\">\n        </div>\n    </div>\n</div>\n<div id=\"business-impact\" class=\"container-fluid\">\n    <div class=\"content-wrap big-px\">\n        <div class=\"text-center\">\n            <h2 class=\"medium-pb\">\n                {{businessImpact.title}}\n            </h2>\n        </div>\n        <div class=\"impact-items\">\n            <div class=\"d-flex item\" *ngFor=\"let item of businessImpact.items\">\n                <div class=\"col-md-3 custom-height-col dark-blue\">\n                    <div class=\"overflow-container\">\n                        <img [src]=\"item.icon\"\n                             class=\"overflow-image img-fluid\">\n                    </div>\n                </div>\n                <div class=\"col-md-9 custom-height-col white\">\n                    <h3>\n                        {{item.title}}\n                    </h3>\n                    <p>\n                        {{item.content}}\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"footer d-flex flex-column justify-content-between align-items-center\">\n    <img src=\"assets/images/logos/Logo%20-%20White.png\" width=\"165px\">\n    <div class=\"social-media\">\n        <a href=\"https://www.facebook.com/profile.php?id=100076116217462\" target=\"_blank\">\n            <i class=\"fab fa-facebook-f me-3\"></i>\n        </a>\n\n        <a href=\"https://www.instagram.com/bestinform.app/?igshid=OGQ5ZDc2ODk2ZA%3D%3D\" target=\"_blank\">\n            <i class=\"fab fa-instagram\"></i>\n        </a>\n    </div>\n    <p *ngIf=\"pageLang === 'en'\">© 2023 Bestinform | All rights reserved.</p>\n    <p *ngIf=\"pageLang === 'ro'\">© 2023 Bestinform | Toate drepturile rezervate.</p>\n</div>\n\n<div class=\"d-flex justify-content-center align-items-center w-100 eu-header\">\n    <img src=\"assets/images/logos/fonduri-ue.png\" class=\"w-25\">\n    <p class=\"w-25 mb-0 text-small\">Pentru informaţii\n        detaliate despre celelalte programe cofinanţate de Uniunea\n        Europeană, vă invităm să vizitaţi <a href=\"https://www.fonduri-ue.ro/\" target=\"_blank\">www.fonduri-ue.ro\n        </a></p>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_landing-channel-manager_landing-channel-manager_module_ts.js.map