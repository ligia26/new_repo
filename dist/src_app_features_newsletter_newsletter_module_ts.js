(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_newsletter_newsletter_module_ts"],{

/***/ 71125:
/*!**************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/benefit-box/benefit-box.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BenefitBoxComponent": () => (/* binding */ BenefitBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _benefit_box_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./benefit-box.component.html?ngResource */ 38698);
/* harmony import */ var _benefit_box_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./benefit-box.component.scss?ngResource */ 58228);
/* harmony import */ var _benefit_box_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_benefit_box_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let BenefitBoxComponent = class BenefitBoxComponent {
  ngOnInit() {
    if (this.color < 4) {
      if (this.color % 2 === 0) {
        this.colorClass = 'white';
      } else {
        this.colorClass = 'blue';
      }
    } else {
      if (this.color % 2 === 0) {
        this.colorClass = 'blue';
      } else {
        this.colorClass = 'white';
      }
    }
  }
  static #_ = this.propDecorators = {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
BenefitBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-benefit-box',
  template: _benefit_box_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_benefit_box_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BenefitBoxComponent);


/***/ }),

/***/ 99926:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-benefits/newsletter-benefits.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterBenefitsComponent": () => (/* binding */ NewsletterBenefitsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _newsletter_benefits_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsletter-benefits.component.html?ngResource */ 84565);
/* harmony import */ var _newsletter_benefits_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsletter-benefits.component.scss?ngResource */ 95221);
/* harmony import */ var _newsletter_benefits_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_newsletter_benefits_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let NewsletterBenefitsComponent = class NewsletterBenefitsComponent {
  constructor() {
    this.boxes = [];
    this.boxesEn = [{
      icon: 'assets/images/others/newsletter/1.png',
      title: 'Save costs',
      text: '0 commission for reservations without a deposit'
    }, {
      icon: 'assets/images/others/newsletter/2.png',
      title: 'Restaurant support',
      text: '3% commission for reservations with a deposit'
    }, {
      icon: 'assets/images/others/newsletter/3.png',
      title: 'Beneficial lodging options',
      text: '5% commission for bookings with partial/full payment'
    }, {
      icon: 'assets/images/others/newsletter/4.png',
      title: 'Round-the-clock support',
      text: 'Technical support 12/24 7/7'
    }, {
      icon: 'assets/images/others/newsletter/5.png',
      title: 'Direct connection with customers',
      text: 'Direct communication through messaging'
    }, {
      icon: 'assets/images/others/newsletter/6.png',
      title: 'Valuable expertise and advice',
      text: 'Free consultation for published content'
    }, {
      icon: 'assets/images/others/newsletter/7.png',
      title: 'Efficient promotion',
      text: 'Personalized display based on AI, geolocation, and rating'
    }, {
      icon: 'assets/images/others/newsletter/8.png',
      title: 'Access to an extended audience',
      text: 'Local and international visibility of the property'
    }];
    this.boxesRo = [{
      icon: 'assets/images/others/newsletter/1.png',
      title: 'Economii',
      text: '0 comision pentru rezervări fără plata unui avans'
    }, {
      icon: 'assets/images/others/newsletter/2.png',
      title: 'Asistență restaurant',
      text: '3% comision pentru rezervări cu plata unui avans'
    }, {
      icon: 'assets/images/others/newsletter/3.png',
      title: 'Opțiuni de cazare favorabile',
      text: '5% comision pentru rezervările cu plata parțială/integrală'
    }, {
      icon: 'assets/images/others/newsletter/4.png',
      title: 'Asistență 24h/7',
      text: 'Asistență tehnică 12/24 7/7'
    }, {
      icon: 'assets/images/others/newsletter/5.png',
      title: 'Legătură directă cu clienții',
      text: 'Comunicare directă prin mesaje'
    }, {
      icon: 'assets/images/others/newsletter/6.png',
      title: 'Expertiză și consultanță valoroase',
      text: 'Consultație gratuită pentru conținutul publicat'
    }, {
      icon: 'assets/images/others/newsletter/7.png',
      title: 'Promovare eficientă',
      text: 'Display personalizat bazat pe AI, localizare geografică și rating'
    }, {
      icon: 'assets/images/others/newsletter/8.png',
      title: 'Accesul la un public vast',
      text: 'Vizibilitatea locală și internațională a proprietății'
    }];
    this.customOptions = {
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      dotsEach: 4,
      nav: true,
      navSpeed: 700,
      navText: ['<', '>'],
      center: true,
      margin: 15,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 2
        },
        576: {
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
  }
  ngOnInit() {
    if (this.pageLang === 'ro') {
      this.boxes = this.boxesRo;
    } else {
      this.boxes = this.boxesEn;
    }
  }
  static #_ = this.propDecorators = {
    pageLang: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
NewsletterBenefitsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-newsletter-benefits',
  template: _newsletter_benefits_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_newsletter_benefits_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NewsletterBenefitsComponent);


/***/ }),

/***/ 1238:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-body/newsletter-body.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterBodyComponent": () => (/* binding */ NewsletterBodyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _newsletter_body_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsletter-body.component.html?ngResource */ 87597);
/* harmony import */ var _newsletter_body_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsletter-body.component.scss?ngResource */ 88505);
/* harmony import */ var _newsletter_body_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_newsletter_body_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let NewsletterBodyComponent = class NewsletterBodyComponent {
  constructor() {
    this.strengths = [];
    this.benefits = [];
    this.strengthEn = [{
      title: 'Personalized consumer profiles',
      text: 'A.I. builds consumer profiles for each individual user by recording and learning from their behaviour and choices on the platform. It also utilizes an optional questionnaire available both during platform enrollment and in the user profile settings menu.'
    }, {
      title: 'Optimized recommendations based on user profiles',
      text: 'A.I. queries the platform\'s databases, generating optimized options and recommendations correlated with users\' consumer profiles. These recommendations encompass all services and offerings provided by our contracted partners.'
    }, {
      title: 'Personalized travel itineraries',
      text: 'A.I. generates comprehensive travel itineraries by correlating destinations and services offered by our partners with consumer profiles.'
    }, {
      title: 'Virtual concierge in your pocket',
      text: 'A.I. provides users with the privilege of having a permanent virtual concierge in their pocket through the Natural Language ChatBot function. In conclusion, A.I. incorporates an advance'
    }];
    this.strengthRo = [{
      title: 'Profiluri de utilizatori personalizate',
      text: 'A.I. creează profiluri de consumator pentru fiecare utilizator prin înregistrarea și învățarea comportamentului și alegerilor acestora pe platformă. Acesta folosește un chestionar opțional disponibil atât în timpul înregistrării pe platformă cât și în meniul cu setările profilului de utilizator.'
    }, {
      title: 'Recomandări optimizate bazate pe profilurile utilizatorilor',
      text: 'A.I. interoghează bazele de date ale platformei, generând opțiuni și recomandări optimizate corelate cu profilurile de consumator ale utilizatorilor. Aceste recomandări înglobează toate serviciile și ofertele furnizate de către partenerii noștri contractați.'
    }, {
      title: 'Itinerarii personalizate de călătorie',
      text: 'A.I. generează itinerarii complete de călătorie prin corelarea destinațiilor și serviciilor oferite de către partenerii noștri cu profilurile consumatorilor.'
    }, {
      title: 'Un concierge virtual în buzunarul dumneavoastră',
      text: 'A.I. oferă utilizatorilor privilegiul de a avea un concierge virtual permanent în buzunarul lor prin funcția Natural Language ChatBot.'
    }];
    this.benefitsEn = ['Bestinform\'s own Channel Manager and payment processor enable partners to upload their availability without requiring a Property Manager System. This ensures a seamless flow of purchases and reservations, providing a complete acquisition and booking process.', 'There is the possibility to connect a partner\'s Property Manager System to the Bestinform platform through API documentation, ensuring a complete flow of purchases and reservations.', 'The possibility of facilitating bookings with guarantee deposits is available.', 'The possibility of facilitating bookings with partial payments is available.', 'The possibility of facilitating purchases.', 'Correct display of service providers\' addresses.', 'Intuitive and user-friendly dashboard for managing property bookings/purchases.', 'Aligning the services and facilities of the resource with potential customers through the mechanism described in the AI chapter.', 'Integration of the property into travel itineraries generated by A.I. based on user profiles.', 'User-friendly reservation tracking menu.', 'User-friendly balance tracking menu.', 'The ability to upload multimedia content.', 'The ability to upload menus, prices, and ICON products to facilitate easier identification of the solutions offered by the property and promote them within the platform.', 'The ability to receive special requests at the time of booking.', 'The ability to cancel a reservation without a deposit if the user\'s rating is unfavorable.', 'A complex system for loading availability based on multiple time intervals within a day (breakfast - break - lunch + dinner), calendar date, time, reserved facility type, number of guests, standard price, discount, limited-time offer, guarantee deposit, configuring reservation slot time with automatic reset (exclusive for restaurants), price category, class, and location (access tickets: cinema, theater, opera, concert, museum, exhibition, zoo, etc.).'];
    this.benefitsRo = ['Managerul de Canal și procesatorul de plăți Bestinform permit partenerilor să încarce disponibilitatea acestora fără să solicite un Sistem de Administrare a Proprietății. Aceasta asigură un flux lin al achizițiilor și al rezervărilor, oferind un proces complet de achiziție și rezervare.', 'Există posibilitatea de a conecta un Sistem de Administrare a Proprietății al unui partener la platforma Bestinform prin intermediul documentației API, asigurând un flux complet de achiziții și rezervări.', 'Există posibilitatea facilitării rezervărilor cu depozite de garanție.', 'Este disponibilă posibilitatea facilitării rezervărilor cu plăți parțiale.', 'Posibilitatea facilității achizițiilor.', 'Afișarea corectă a adreselor furnizorilor de servicii.', 'Tablou de bord intuitiv și ușor de utilizat pentru administrarea rezervărilor/achizițiilor de proprietăți.', 'Alinierea serviciilor și facilităților de resurse cu potențialii clienți prin intermediul mecanismului descris în capitolul AI.', 'Integrarea proprietății în itinerariile de călătorie generate de A.I. pe baza profilurilor de utilizator.', 'Meniu de urmărire a rezervării ușor de utilizat.', 'Meniu de urmărire a soldului ușor de utilizat.', 'Capacitatea de a încărca conținut multimedia.', 'Capacitatea de a încărca meniuri, prețuri și produse ICON pentru o identificare mai rapidă a soluțiilor oferite de proprietate și promovarea acestora pe platformă.', 'Capacitatea de a primi cereri speciale în momentul rezervării.', 'Capacitatea de a anula o rezervare fără plata unui avans dacă rating-ul utilizatorului este nefavorabil.', 'Un sistem complex de încărcare a disponibilității în funcție de mai multe intervale de timp într-o zi (micul dejun – pauză – prânz + cină), data calendaristică, ora, tipul facilității rezervate, numărul de oaspeți, prețul standard, discount-ul, ofertă pe o perioadă limitată, garanție, configurarea perioadei rezervării cu resetare automată (exclusiv pentru restaurante), categoria de preț, clasa și locația (bilete de acces: cinema, teatru, operă, concert, muzeu, expoziție, zoo, etc.)'];
  }
  ngOnInit() {
    console.log('page lang', this.pageLang);
    if (this.pageLang === 'ro') {
      console.log('am intrat');
      this.strengths = this.strengthRo;
      this.benefits = this.benefitsRo;
    } else {
      this.strengths = this.strengthEn;
      this.benefits = this.benefitsEn;
    }
  }
  static #_ = this.propDecorators = {
    pageLang: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
NewsletterBodyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-newsletter-body',
  template: _newsletter_body_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_newsletter_body_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NewsletterBodyComponent);


/***/ }),

/***/ 37527:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-footer/newsletter-footer.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterFooterComponent": () => (/* binding */ NewsletterFooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _newsletter_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsletter-footer.component.html?ngResource */ 27757);
/* harmony import */ var _newsletter_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsletter-footer.component.scss?ngResource */ 33649);
/* harmony import */ var _newsletter_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_newsletter_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let NewsletterFooterComponent = class NewsletterFooterComponent {
  static #_ = this.propDecorators = {
    pageLang: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
NewsletterFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-newsletter-footer',
  template: _newsletter_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_newsletter_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NewsletterFooterComponent);


/***/ }),

/***/ 65858:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-header/newsletter-header.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterHeaderComponent": () => (/* binding */ NewsletterHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _newsletter_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsletter-header.component.html?ngResource */ 68807);
/* harmony import */ var _newsletter_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsletter-header.component.scss?ngResource */ 59664);
/* harmony import */ var _newsletter_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_newsletter_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let NewsletterHeaderComponent = class NewsletterHeaderComponent {
  constructor(router) {
    this.router = router;
  }
  changeRoute(pageLang) {
    console.log('route changed', pageLang);
    this.router.navigate(['/newsletter/' + pageLang]);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
  static #_2 = this.propDecorators = {
    pageLang: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
NewsletterHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-newsletter-header',
  template: _newsletter_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_newsletter_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NewsletterHeaderComponent);


/***/ }),

/***/ 81678:
/*!*************************************************************!*\
  !*** ./src/app/features/newsletter/newsletter.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterComponent": () => (/* binding */ NewsletterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _newsletter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsletter.component.html?ngResource */ 44907);
/* harmony import */ var _newsletter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsletter.component.scss?ngResource */ 83129);
/* harmony import */ var _newsletter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_newsletter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let NewsletterComponent = class NewsletterComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    console.log(route.snapshot);
  }
  ngOnInit() {
    console.log('init');
    const currentRoute = this.route.snapshot.url.join('/');
    if (currentRoute.includes('ro')) {
      this.lang = 'ro';
      console.log('Route contains the string');
    } else if (currentRoute.includes('en')) {
      this.lang = 'en';
      console.log('Route does not contain the string');
    } else {
      this.router.navigate(['/newsletter-old/en']);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
NewsletterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-newsletter',
  template: _newsletter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_newsletter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NewsletterComponent);


/***/ }),

/***/ 88536:
/*!**********************************************************!*\
  !*** ./src/app/features/newsletter/newsletter.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterModule": () => (/* binding */ NewsletterModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _newsletter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsletter.component */ 81678);
/* harmony import */ var _components_newsletter_header_newsletter_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/newsletter-header/newsletter-header.component */ 65858);
/* harmony import */ var _components_newsletter_body_newsletter_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/newsletter-body/newsletter-body.component */ 1238);
/* harmony import */ var _components_newsletter_footer_newsletter_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/newsletter-footer/newsletter-footer.component */ 37527);
/* harmony import */ var _components_benefit_box_benefit_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/benefit-box/benefit-box.component */ 71125);
/* harmony import */ var _components_newsletter_benefits_newsletter_benefits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/newsletter-benefits/newsletter-benefits.component */ 99926);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../not-found/not-found.component */ 95707);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);














const routes = [{
  path: 'en',
  component: _newsletter_component__WEBPACK_IMPORTED_MODULE_1__.NewsletterComponent,
  pathMatch: 'full'
}, {
  path: 'ro',
  component: _newsletter_component__WEBPACK_IMPORTED_MODULE_1__.NewsletterComponent,
  pathMatch: 'full'
}, {
  path: '',
  redirectTo: 'en',
  pathMatch: 'full'
}, {
  path: '**',
  component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent
} // Wildcard route for a 404 page
];

let NewsletterModule = class NewsletterModule {};
NewsletterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_newsletter_component__WEBPACK_IMPORTED_MODULE_1__.NewsletterComponent, _components_newsletter_header_newsletter_header_component__WEBPACK_IMPORTED_MODULE_2__.NewsletterHeaderComponent, _components_newsletter_body_newsletter_body_component__WEBPACK_IMPORTED_MODULE_3__.NewsletterBodyComponent, _components_newsletter_footer_newsletter_footer_component__WEBPACK_IMPORTED_MODULE_4__.NewsletterFooterComponent, _components_benefit_box_benefit_box_component__WEBPACK_IMPORTED_MODULE_5__.BenefitBoxComponent, _components_newsletter_benefits_newsletter_benefits_component__WEBPACK_IMPORTED_MODULE_6__.NewsletterBenefitsComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule]
})], NewsletterModule);


/***/ }),

/***/ 58228:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/benefit-box/benefit-box.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.box {\n  height: 260px;\n  width: 245px;\n  padding: 20px 10px;\n  text-align: center;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n  margin: 0 auto;\n}\n.box .title {\n  font-size: 22px;\n  line-height: 22px;\n  font-weight: 500;\n  text-align: center;\n  min-height: 45px;\n}\n.box .text {\n  font-size: 18px;\n  line-height: 30px;\n  text-align: center;\n  margin-bottom: 0px;\n  min-height: 90px;\n}\n.box .image img {\n  height: 56px;\n  width: auto;\n}\n\n.white {\n  background-color: var(--primary-background);\n  color: #24398A;\n}\n.white .text {\n  color: #7B7B7B;\n  opacity: 0.8;\n}\n\n.blue {\n  background-color: #24398A;\n  color: var(--primary-background);\n}\n.blue .text {\n  color: #D8D8D8;\n  opacity: 0.8;\n}\n\n@media only screen and (max-width: 767px) {\n  p.title {\n    font-size: 18px !important;\n    line-height: 22px !important;\n    min-height: 35px !important;\n  }\n  p.text {\n    font-size: 16px !important;\n    line-height: 22px !important;\n    min-height: 50px !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/newsletter/_components/benefit-box/benefit-box.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACE,aAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;EACA,cAAA;AAiBF;AAfE;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AAiBJ;AAdE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;AAgBJ;AALI;EACE,YAAA;EACA,WAAA;AAON;;AADA;EACE,2CAAA;EACA,cDhDc;ACoDhB;AAFE;EACE,cAAA;EACA,YAAA;AAIJ;;AACA;EACE,yBD1Dc;EC2Dd,gCAAA;AAEF;AADE;EACE,cAAA;EACA,YAAA;AAGJ;;AAEA;EAEE;IACE,0BAAA;IACA,4BAAA;IACA,2BAAA;EAAF;EAGA;IACE,0BAAA;IACA,4BAAA;IACA,2BAAA;EADF;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n\n.box {\n  height: 260px;\n  width: 245px;\n  padding: 20px 10px;\n  text-align: center;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n  margin: 0 auto;\n\n  .title {\n    font-size: 22px;\n    line-height: 22px;\n    font-weight: 500;\n    text-align: center;\n    min-height: 45px;\n  }\n\n  .text {\n    font-size: 18px;\n    line-height: 30px;\n    text-align: center;\n    margin-bottom: 0px;\n    min-height: 90px;\n\n  }\n\n  .image {\n\n    //position: absolute;\n    //top: 20px;\n    //left: 20px;\n    //width: 207px;\n\n    img {\n      height: 56px;\n      width: auto;\n    }\n  }\n\n}\n\n.white {\n  background-color: var(--primary-background);\n  color: $primary-color;\n\n  .text{\n    color: #7B7B7B;\n    opacity: 0.8;\n  }\n\n}\n\n.blue {\n  background-color: $primary-color;\n  color: var(--primary-background);\n  .text{\n    color: #D8D8D8;\n    opacity: 0.8;\n  }\n}\n\n\n@media only screen and (max-width: 767px) {\n\n  p.title {\n    font-size: 18px !important;\n    line-height: 22px !important;\n    min-height: 35px !important;\n  }\n\n  p.text {\n    font-size: 16px !important;\n    line-height: 22px !important;\n    min-height: 50px !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 95221:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-benefits/newsletter-benefits.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.p-full {\n  padding-top: 120px;\n  padding-bottom: 120px;\n}\n\n.pb-full {\n  padding-bottom: 120px;\n}\n\n.container-fluid {\n  background-color: #F0F0F0;\n  position: relative;\n}\n.container-fluid .container-additional h1 {\n  font-size: 60px;\n  margin-bottom: 100px;\n  text-align: center;\n}\n.container-fluid .container-additional .full-width {\n  gap: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  .container-fluid .container-additional .full-width {\n    display: none;\n  }\n}\n@media (min-width: 576px) {\n  .container-fluid .container-additional .mobile {\n    display: none;\n  }\n}\n.container-fluid .image {\n  height: 441px;\n  min-height: 441px;\n}\n@media (min-width: 768px) {\n  .container-fluid .image {\n    display: none;\n  }\n}\n.container-fluid .image img.additional-img {\n  position: absolute;\n  height: 441px;\n  bottom: 0;\n  left: 0;\n}\n\n@media only screen and (max-width: 767px) {\n  .p-full {\n    padding-top: 80px !important;\n    padding-bottom: 80px !important;\n  }\n  .pb-full {\n    padding-bottom: 80px;\n  }\n  h1 {\n    font-size: 30px !important;\n    margin-bottom: 45px !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/newsletter/_components/newsletter-benefits/newsletter-benefits.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,qBAAA;AAkBF;;AAfA;EACE,qBAAA;AAkBF;;AAfA;EACE,yBAAA;EACA,kBAAA;AAkBF;AAdI;EACE,eAAA;EACA,oBAAA;EACA,kBAAA;AAgBN;AAbI;EACE,SAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;AAeN;AAbM;EAPF;IAQI,aAAA;EAgBN;AACF;AAZM;EADF;IAEI,aAAA;EAeN;AACF;AAXE;EACE,aAAA;EACA,iBAAA;AAaJ;AAZI;EAHF;IAII,aAAA;EAeJ;AACF;AAdI;EACE,kBAAA;EACA,aAAA;EACA,SAAA;EACA,OAAA;AAgBN;;AAZA;EAEE;IACE,4BAAA;IACA,+BAAA;EAcF;EAXA;IACE,oBAAA;EAaF;EAVA;IACE,0BAAA;IACA,8BAAA;EAYF;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.p-full {\n  padding-top: 120px;\n  padding-bottom: 120px;\n}\n\n.pb-full {\n  padding-bottom: 120px;\n}\n\n.container-fluid{\n  background-color: #F0F0F0;\n  position: relative;\n\n  .container-additional {\n\n    h1 {\n      font-size: 60px;\n      margin-bottom: 100px;\n      text-align: center;\n    }\n\n    .full-width{\n      gap: 20px;\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: row;\n      justify-content: center;\n      //padding-bottom:145px ;\n      @media (max-width: 600px) {\n        display: none;\n      }\n    }\n\n    .mobile{\n      @media (min-width: 576px) {\n        display: none;\n      }\n    }\n  }\n\n  .image{\n    height: 441px;\n    min-height: 441px;\n    @media (min-width: 768px) {\n      display: none;\n    }\n    img.additional-img {\n      position: absolute;\n      height: 441px;\n      bottom: 0;\n      left: 0;\n    }\n  }\n}\n@media only screen and (max-width: 767px) {\n\n  .p-full {\n    padding-top: 80px !important;\n    padding-bottom: 80px !important;\n  }\n\n  .pb-full {\n    padding-bottom: 80px;\n  }\n\n  h1 {\n    font-size: 30px !important;\n    margin-bottom: 45px !important;\n  }\n\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88505:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-body/newsletter-body.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n* {\n  font-family: \"Helvetica\", sans-serif !important;\n  letter-spacing: -0.408px;\n}\n\nbody {\n  background: #F0F0F0;\n}\n\n.p-full {\n  padding-top: 120px;\n  padding-bottom: 120px;\n}\n\n.pb-full {\n  padding-bottom: 120px;\n}\n\n.strengthsArea {\n  position: relative;\n  background: #F0F0F0 url('strengths.png') right top -80px no-repeat;\n}\n@media (max-width: 1200px) {\n  .strengthsArea {\n    background-size: 70%;\n  }\n}\n@media (max-width: 768px) {\n  .strengthsArea {\n    background-image: none;\n    background-color: #F0F0F0;\n  }\n}\n\n.benefitsArea {\n  background: #F0F0F0 url('partners.png') left bottom no-repeat;\n}\n\n.container-text {\n  border-bottom: 2px solid #24398A;\n}\n\n.strengths {\n  width: 100%;\n}\n.strengths h1 {\n  font-size: 60px;\n  margin-bottom: 100px;\n}\n.strengths .section-strength {\n  align-self: start;\n  margin-bottom: 65px;\n}\n.strengths .section-strength .circle {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: relative;\n}\n.strengths .section-strength .checkmark {\n  position: absolute;\n  top: 20%;\n  left: 40%;\n  width: 10px;\n  height: 20px;\n  border: solid #231F20;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.strengths .section-strength .circle {\n  background-color: #D8D8D8;\n}\n.strengths .section-strength .checkmark {\n  border-color: #24398A;\n}\n.strengths .section-strength h5 {\n  font-size: 30px;\n  font-weight: 500;\n}\n.strengths .section-strength p {\n  font-size: 24px;\n  font-weight: 400;\n  margin-left: 50px;\n  color: #7B7B7B;\n  margin-bottom: 0;\n  max-width: 535px;\n  line-height: 30px;\n  letter-spacing: -0.408px;\n}\n.strengths .section-strength:last-child {\n  margin-bottom: 0px;\n}\n\np.conclusion {\n  font-size: 30px;\n  font-weight: 400;\n  color: #24398A;\n  padding-top: 120px;\n}\n\n.benefits h1 {\n  font-size: 60px;\n  margin-bottom: 100px;\n}\n.benefits img.benefit-img {\n  width: 30%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n@media (max-width: 768px) {\n  .benefits img.benefit-img {\n    display: none;\n  }\n}\n.benefits .section-benefit {\n  align-self: end;\n  width: 75%;\n}\n@media (max-width: 768px) {\n  .benefits .section-benefit {\n    width: 100%;\n  }\n}\n.benefits .section-benefit ol {\n  list-style: none;\n  counter-reset: my-awesome-counter;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  align-self: end;\n}\n.benefits .section-benefit ol li {\n  counter-increment: my-awesome-counter;\n  display: flex;\n  font-size: 24px;\n  line-height: 30px;\n  color: #7B7B7B;\n  margin-bottom: 30px;\n  max-width: 835px;\n}\n.benefits .section-benefit ol li::before {\n  content: \"0\" counter(my-awesome-counter);\n  font-weight: 500;\n  font-size: 30px;\n  margin-right: 0.5rem;\n  line-height: 30px;\n  color: #24398A;\n}\n.benefits .section-benefit ol li:nth-child(n+10)::before {\n  content: counter(my-awesome-counter);\n  font-weight: 500;\n  font-size: 30px;\n  margin-right: 0.5rem;\n  line-height: 30px;\n  color: #24398A;\n}\n\n.section-benefit ol li:last-child {\n  margin-bottom: 0px !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .benefitsArea {\n    background: #F0F0F0;\n  }\n  h1 {\n    font-size: 30px !important;\n    margin-bottom: 45px !important;\n  }\n  .section-strength h5 {\n    font-size: 20px !important;\n    line-height: 30px !important;\n  }\n  .section-strength p {\n    font-size: 16px !important;\n    line-height: 22px !important;\n  }\n  .p-full {\n    padding-top: 80px !important;\n    padding-bottom: 80px !important;\n  }\n  .pb-full {\n    padding-bottom: 80px;\n  }\n  p.conclusion {\n    font-size: 20px !important;\n    line-height: 30px !important;\n    padding-top: 80px !important;\n  }\n  .section-benefit ol li {\n    font-size: 16px !important;\n    line-height: 22px !important;\n  }\n  .section-benefit ol li:before {\n    font-size: 20px !important;\n    line-height: 30px !important;\n    font-weight: 500;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/newsletter/_components/newsletter-body/newsletter-body.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,+CAAA;EACA,wBAAA;AAkBF;;AAfA;EACE,mBAAA;AAkBF;;AAfA;EACE,kBAAA;EACA,qBAAA;AAkBF;;AAfA;EACE,qBAAA;AAkBF;;AAfA;EACE,kBAAA;EACA,kEAAA;AAkBF;AAjBE;EAHF;IAII,oBAAA;EAoBF;AACF;AAnBE;EANF;IAOI,sBAAA;IACA,yBAAA;EAsBF;AACF;;AAnBA;EACE,6DAAA;AAsBF;;AAlBA;EACE,gCAAA;AAqBF;;AAjBA;EACE,WAAA;AAoBF;AAlBE;EACE,eAAA;EACA,oBAAA;AAoBJ;AAjBE;EACE,iBAAA;EACA,mBAAA;AAmBJ;AAjBI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AAmBN;AAhBI;EAEC,kBAAA;EACC,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,yBAAA;EAGA,wBAAA;AAiBN;AAdI;EACE,yBAAA;AAgBN;AAbI;EACE,qBD/EU;AC8FhB;AAZI;EACE,eAAA;EACA,gBAAA;AAcN;AAXI;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,wBAAA;AAaN;AAPE;EACE,kBAAA;AASJ;;AALA;EACE,eAAA;EACA,gBAAA;EACA,cD7Gc;EC8Gd,kBAAA;AAQF;;AAHE;EACE,eAAA;EACA,oBAAA;AAMJ;AAHE;EACE,UAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;AAKJ;AAJI;EALF;IAMI,aAAA;EAOJ;AACF;AAJE;EACE,eAAA;EACA,UAAA;AAMJ;AALI;EAHF;IAII,WAAA;EAQJ;AACF;AANI;EACE,gBAAA;EACA,iCAAA;EACA,eAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;AAQN;AALI;EACE,qCAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;AAON;AAJI;EACE,wCAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,cDlKU;ACwKhB;AAHI;EACE,oCAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,cD3KU;ACgLhB;;AACA;EACE,6BAAA;AAEF;;AACA;EACE;IACE,mBAAA;EAEF;EACA;IACE,0BAAA;IACA,8BAAA;EACF;EAME;IACE,0BAAA;IACA,4BAAA;EAJJ;EAOE;IACE,0BAAA;IACA,4BAAA;EALJ;EAUA;IACE,4BAAA;IACA,+BAAA;EARF;EAWA;IACE,oBAAA;EATF;EAYA;IACE,0BAAA;IACA,4BAAA;IACA,4BAAA;EAVF;EAaA;IACE,0BAAA;IACA,4BAAA;EAXF;EAcA;IACE,0BAAA;IACA,4BAAA;IACA,gBAAA;EAZF;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n* {\n  font-family: \"Helvetica\", sans-serif !important;\n  letter-spacing: -0.408px;\n}\n\nbody {\n  background: #F0F0F0;\n}\n\n.p-full {\n  padding-top: 120px;\n  padding-bottom: 120px;\n}\n\n.pb-full {\n  padding-bottom: 120px;\n}\n\n.strengthsArea {\n  position: relative;\n  background: #F0F0F0 url(\"~src/assets/images/others/newsletter/strengths.png\") right top -80px no-repeat;\n  @media (max-width: 1200px) {\n    background-size: 70%;\n  }\n  @media (max-width: 768px) {\n    background-image: none;\n    background-color: #F0F0F0;\n  }\n}\n\n.benefitsArea {\n  background: #F0F0F0 url(\"~src/assets/images/others/newsletter/partners.png\") left bottom  no-repeat;\n\n}\n\n.container-text {\n  border-bottom: 2px solid $primary-color;\n\n}\n\n.strengths {\n  width: 100%;\n\n  h1 {\n    font-size: 60px;\n    margin-bottom: 100px;\n  }\n\n  .section-strength {\n    align-self: start;\n    margin-bottom: 65px;\n\n    .circle {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      position: relative;\n    }\n\n    .checkmark {\n\n     position: absolute;\n      top: 20%;\n      left: 40%;\n      width: 10px;\n      height: 20px;\n      border: solid $title;\n      border-width: 0 2px 2px 0;\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n    }\n\n    .circle {\n      background-color: #D8D8D8;\n    }\n\n    .checkmark {\n      border-color: $primary-color;\n    }\n\n    h5 {\n      font-size: 30px;\n      font-weight: 500;\n    }\n\n    p {\n      font-size: 24px;\n      font-weight: 400;\n      margin-left: 50px;\n      color: #7B7B7B;\n      margin-bottom: 0;\n      max-width: 535px;\n      line-height: 30px;\n      letter-spacing: -0.408px;\n\n    }\n\n  }\n\n  .section-strength:last-child {\n    margin-bottom: 0px;\n  }\n}\n\np.conclusion {\n  font-size: 30px;\n  font-weight: 400;\n  color: $primary-color;\n  padding-top: 120px;\n}\n\n\n.benefits {\n  h1 {\n    font-size: 60px;\n    margin-bottom: 100px;\n  }\n\n  img.benefit-img {\n    width: 30%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    @media (max-width: 768px) {\n      display: none;\n    }\n  }\n\n  .section-benefit {\n    align-self: end;\n    width: 75%;\n    @media (max-width: 768px) {\n      width: 100%;\n    }\n\n    ol {\n      list-style: none;\n      counter-reset: my-awesome-counter;\n      flex-wrap: wrap;\n      margin: 0;\n      padding: 0;\n      align-self: end;\n    }\n\n    ol li {\n      counter-increment: my-awesome-counter;\n      display: flex;\n      font-size: 24px;\n      line-height: 30px;\n      color: #7B7B7B;\n      margin-bottom: 30px;\n      max-width: 835px;\n    }\n\n    ol li::before {\n      content: \"0\" counter(my-awesome-counter);\n      font-weight: 500;\n      font-size: 30px;\n      margin-right: 0.5rem;\n      line-height: 30px;\n      color: $primary-color;\n    }\n\n    ol li:nth-child(n+10)::before {\n      content: counter(my-awesome-counter);\n      font-weight: 500;\n      font-size: 30px;\n      margin-right: 0.5rem;\n      line-height: 30px;\n      color: $primary-color;\n    }\n  }\n}\n\n\n.section-benefit ol li:last-child {\n  margin-bottom: 0px !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .benefitsArea {\n    background: #F0F0F0;\n  }\n\n  h1 {\n    font-size: 30px !important;\n    margin-bottom: 45px !important;\n  }\n\n\n\n  .section-strength {\n\n    h5 {\n      font-size: 20px !important;\n      line-height: 30px !important;\n    }\n\n    p {\n      font-size: 16px !important;\n      line-height: 22px !important;\n    }\n  }\n\n\n  .p-full {\n    padding-top: 80px !important;\n    padding-bottom: 80px !important;\n  }\n\n  .pb-full {\n    padding-bottom: 80px;\n  }\n\n  p.conclusion {\n    font-size: 20px !important;\n    line-height: 30px !important;\n    padding-top: 80px !important;\n  }\n\n  .section-benefit ol li {\n    font-size: 16px !important;\n    line-height: 22px !important;\n  }\n\n  .section-benefit ol li:before {\n    font-size: 20px !important;\n    line-height: 30px !important;\n    font-weight: 500;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33649:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-footer/newsletter-footer.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.footer {\n  padding: 30px 0;\n  background-color: #24398A;\n  color: var(--primary-background);\n  gap: 15px;\n}\n.footer i {\n  font-size: 24px;\n}\n\n.social-media a {\n  color: #fff;\n}\n\n.social-media a:hover {\n  color: #D8D8D8;\n}\n\n.financeArea {\n  padding-bottom: 120px;\n  background: #F0F0F0;\n}\n.financeArea .imgWrapper {\n  max-width: 433px;\n  margin: 0 auto;\n  padding-bottom: 20px;\n}\n.financeArea p {\n  max-width: 600px;\n  margin: 0 auto;\n  text-align: center;\n  color: #000;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: -0.408px;\n}\n\n@media only screen and (max-width: 767px) {\n  .financeArea {\n    padding-bottom: 30px;\n    padding-top: 30px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/newsletter/_components/newsletter-footer/newsletter-footer.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,eAAA;EACA,yBDHc;ECId,gCAAA;EACA,SAAA;AAkBF;AAfE;EACE,eAAA;AAiBJ;;AAbA;EACE,WAAA;AAgBF;;AAbA;EACE,cAAA;AAgBF;;AAbA;EACE,qBAAA;EACA,mBAAA;AAgBF;AAdE;EACE,gBAAA;EACA,cAAA;EACA,oBAAA;AAgBJ;AAbE;EACE,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,iBAAA;EACA,wBAAA;AAeJ;;AAXA;EACE;IACE,oBAAA;IACA,iBAAA;EAcF;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.footer{\n  padding: 30px 0;\n  background-color: $primary-color;\n  color: var(--primary-background);\n  gap: 15px;\n\n\n  i{\n    font-size: 24px;\n  }\n}\n\n.social-media a {\n  color: #fff;\n}\n\n.social-media a:hover {\n  color: #D8D8D8;\n}\n\n.financeArea {\n  padding-bottom: 120px;\n  background: #F0F0F0;\n\n  .imgWrapper {\n    max-width: 433px;\n    margin: 0 auto;\n    padding-bottom: 20px;\n  }\n\n  p {\n    max-width: 600px;\n    margin: 0 auto;\n    text-align: center;\n    color: #000;\n    font-size: 18px;\n    line-height: 22px;\n    letter-spacing: -0.408px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .financeArea {\n    padding-bottom: 30px;\n    padding-top: 30px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 59664:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-header/newsletter-header.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n* {\n  font-family: \"Helvetica\", sans-serif !important;\n}\n\n.blue-bar {\n  background-color: #24398A;\n}\n.blue-bar .language {\n  background-color: #24398A;\n  color: var(--primary-background);\n  border: none;\n}\n\n@media only screen and (max-width: 767px) {\n  p {\n    font-size: 14px !important;\n    line-height: 20px !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/newsletter/_components/newsletter-header/newsletter-header.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAhBA;EACE,+CAAA;AAmBF;;AAhBA;EACE,yBDLc;ACwBhB;AAjBE;EACE,yBDRY;ECSZ,gCAAA;EACA,YAAA;AAmBJ;;AAZA;EACE;IACE,0BAAA;IACA,4BAAA;EAeF;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n* {\n  font-family: \"Helvetica\", sans-serif !important;\n}\n\n.blue-bar{\n  background-color: $primary-color;\n\n  .language{\n    background-color: $primary-color;\n    color: var(--primary-background);\n    border: none;\n  }\n}\n\n\n\n\n@media only screen and (max-width: 767px) {\n  p {\n    font-size: 14px !important;\n    line-height: 20px !important;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83129:
/*!**************************************************************************!*\
  !*** ./src/app/features/newsletter/newsletter.component.scss?ngResource ***!
  \**************************************************************************/
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

/***/ 38698:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/benefit-box/benefit-box.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"box\" [ngClass]=\"colorClass\">\n    <div class=\"image d-flex justify-content-center align-items-center\">\n        <img [src]=\"data.icon\" alt=\"\">\n    </div>\n\n    <p class=\"title mb-0\">{{data.title}}</p>\n    <p class=\"text mb-0\">{{data.text}}</p>\n</div>\n";

/***/ }),

/***/ 84565:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-benefits/newsletter-benefits.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid p-full\">\n    <div class=\"container container-additional\">\n        <h1 *ngIf=\"pageLang === 'en'\">Additional benefits</h1>\n        <h1 *ngIf=\"pageLang === 'ro'\">Beneficii suplimentare</h1>\n        <div class=\"full-width\">\n            <div *ngFor=\"let box of boxes;let i=index\">\n                <app-benefit-box [color]=\"i\" [data]=\"box\"/>\n            </div>\n        </div>\n\n        <div class=\"mobile\">\n            <owl-carousel-o [options]=\"customOptions\">\n                <ng-container *ngFor = \"let box of boxes; let i=index\">\n                    <ng-template carouselSlide>\n                        <app-benefit-box [color]=\"i\" [data]=\"box\"/>\n                    </ng-template>\n                </ng-container>\n            </owl-carousel-o>\n        </div>\n\n    </div>\n    <div class=\"image\">\n        <img src=\"assets/images/others/newsletter/partners.png\" class=\"additional-img\">\n    </div>\n</div>\n";

/***/ }),

/***/ 87597:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-body/newsletter-body.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"body\">\n    <div class=\"container-fluid strengthsArea p-full\">\n        <div class=\"container\">\n            <div class=\"strengths\">\n                <h1 *ngIf=\"pageLang === 'ro'\">Punctele forte ale A.I.</h1>\n                <h1 *ngIf=\"pageLang === 'en'\">Strengths of A.I.</h1>\n                <div class=\"section-strength w-100\" *ngFor=\"let strength of strengths\">\n\n                    <h5 class=\"d-flex\">\n                        <div class=\"circle me-2\">\n                            <div class=\"checkmark\"></div>\n                        </div>\n                        {{strength.title}}\n                    </h5>\n                    <p>{{strength.text}}</p>\n                </div>\n\n\n            </div>\n            <p class=\"conclusion mb-0\" *ngIf=\"pageLang === 'en'\">In conclusion, A.I. incorporates an advanced system for\n                processing and\n                prioritizing the displayed resources\n                to our users, surpassing traditional platforms through the complexity and multitude of suggestions\n                provided.\n                It functions like an awareness campaign, promoting lesser-known activities or resources that are\n                relevant to\n                the users. This creates a synergy between the users' potential consumer interests and the service\n                providers'\n                offerings.</p>\n            <p class=\"conclusion mb-0\" *ngIf=\"pageLang === 'ro'\">În concluzie, A.I. include un sistem avansat de\n                procesare și de stabilire a priorităților resurselor afișate pentru utilizatorii noștri, depășind\n                platformele tradiționale prin complexitatea și multitudinea sugestiilor furnizate. Aceasta funcționează\n                ca o campanie de conștientizare, promovând activități sau resurse mai puțin cunoscute care sunt\n                relevante pentru utilizatori. Aceasta creează o sinergie între potențialele interese de consumator ale\n                utilizatorilor și ofertele furnizorilor de servicii.</p>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid benefitsArea p-half\">\n    <div class=\"benefits d-flex flex-row justify-content-end align-items-end pb-full\">\n        <!--                <img src=\"assets/images/others/newsletter/partners.png\" class=\"benefit-img\">-->\n        <div class=\"section-benefit\">\n            <h1 *ngIf=\"pageLang === 'en'\">Benefits for Partners</h1>\n            <h1 *ngIf=\"pageLang === 'ro'\">Beneficiile pentru Parteneri</h1>\n            <ol>\n                <li *ngFor=\"let benefit of benefits\"> {{benefit}}</li>\n            </ol>\n        </div>\n    </div>\n    <div class=\"container container-text\"></div>\n</div>\n\n";

/***/ }),

/***/ 27757:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-footer/newsletter-footer.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid financeArea\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"imgWrapper\">\n                <img src=\"assets/images/logos/fonduri-ue.png\" class=\"img-fluid\">\n            </div>\n        </div>\n        <div class=\"col-12\" *ngIf=\"pageLang === 'en'\">\n            <p>Project co-financed from the European Regional Development Fund and the State Budget through the\n                Competitiveness Operational Program 2014 - 2020.</p>\n        </div>\n        <div class=\"col-12\" *ngIf=\"pageLang === 'ro'\">\n            <p>Proiect cofinanțat din Fondul European de Dezvoltare regională și Bugetul de Stat prin Programul operațional competitivitate 2014 - 2020.</p>\n        </div>\n    </div>\n</div>\n\n<div class=\"footer d-flex flex-column justify-content-between align-items-center\">\n    <img src=\"assets/images/logos/Logo%20-%20White.png\" width=\"165px\">\n    <div class=\"social-media\">\n        <a href=\"https://www.facebook.com/profile.php?id=100076116217462\" target=\"_blank\">\n            <i class=\"fab fa-facebook-f me-3\"></i>\n        </a>\n\n        <a href=\"https://www.instagram.com/bestinform.app/?igshid=OGQ5ZDc2ODk2ZA%3D%3D\" target=\"_blank\">\n            <i class=\"fab fa-instagram\"></i>\n        </a>\n    </div>\n    <p *ngIf=\"pageLang === 'en'\">© 2023 Bestinform | All rights reserved.</p>\n    <p *ngIf=\"pageLang === 'ro'\">© 2023 Bestinform | Toate drepturile rezervate.</p>\n</div>\n";

/***/ }),

/***/ 68807:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/newsletter/_components/newsletter-header/newsletter-header.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n\n<div class=\"blue-bar\">\n    <div class=\"container\">\n        <div class=\"content py-4 d-flex justify-content-between align-items-center\">\n            <a>\n                <img src=\"assets/Betsinform_logo.png\" width=\"200px\">\n            </a>\n            <select class=\"language\" [(ngModel)]=\"pageLang\" (change)=\"changeRoute(pageLang)\">\n                <option value=\"en\">EN</option>\n                <option value=\"ro\">RO</option>\n            </select>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 44907:
/*!**************************************************************************!*\
  !*** ./src/app/features/newsletter/newsletter.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-newsletter-header [pageLang]=\"lang\"/>\n<app-newsletter-body [pageLang]=\"lang\"/>\n<app-newsletter-benefits [pageLang]=\"lang\"/>\n<app-newsletter-footer [pageLang]=\"lang\"/>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_newsletter_newsletter_module_ts.js.map