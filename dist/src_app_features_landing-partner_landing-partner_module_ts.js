(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_landing-partner_landing-partner_module_ts"],{

/***/ 60516:
/*!***********************************************************************!*\
  !*** ./src/app/features/landing-partner/landing-partner.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPartnerComponent": () => (/* binding */ LandingPartnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _landing_partner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-partner.component.html?ngResource */ 28353);
/* harmony import */ var _landing_partner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-partner.component.scss?ngResource */ 80941);
/* harmony import */ var _landing_partner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_landing_partner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





var LangOptions;
(function (LangOptions) {
  LangOptions[LangOptions["RO"] = 0] = "RO";
  LangOptions[LangOptions["EN"] = 1] = "EN";
})(LangOptions || (LangOptions = {}));
let LandingPartnerComponent = class LandingPartnerComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.heroSection = {
      notificationSection: {
        locationsIcons: [{
          iconPath: 'assets/images/others/partner-landing/social-proof1.png'
        }, {
          iconPath: 'assets/images/others/partner-landing/social-proof2.png'
        }, {
          iconPath: 'assets/images/others/partner-landing/social-proof3.png'
        }],
        locationsNr: ['și alte 34,078 locații s-au înscris în Bestinform', 'and 34,078 other locations have signed up to Bestinform'],
        title: ['Transformă Locația Ta în Destinația Nr.1 pentru Clienții Perfecți!', 'Turn Your Location into the No.1 Destination for Perfect Customers!'],
        paragraph: ['Conectăm locația ta la milioane de călători cu ajutorul AI. Transformăm turismul cu fiecare rezervare realizată.', 'We connect your location to millions of travelers using AI. We transform tourism with every booking made.'],
        bigImg: {
          imgPath: 'assets/images/others/partner-landing/hero-new.jpg'
        },
        heartImg: {
          imgPath: 'assets/images/others/partner-landing/heart.png'
        },
        starImg: {
          imgPath: 'assets/images/others/partner-landing/Star.png'
        },
        confettiImg: {
          imgPath: 'assets/images/others/partner-landing/confetti.png'
        },
        confettiTxtTop: ['Marian S. a rezervat o camera', 'Marian S. booked a room'],
        confettiTxtBottom: ['Alina C. a rezervat o masa de 6 persoane', 'Alina C. reserved a table for 6 people']
      },
      imagesSection: {
        title: ['Umple-ți Calendarul de Rezervări cu Clienți Ideali:', 'Fill your Booking Calendar with Ideal Clients:'],
        paragraph: ['Imaginează-ți zilele în care te trezești dimineața, verifici calendarul și vezi că e plin de rezervări de la clienții pe care ți-i dorești cu adevărat, clienții care apreciază și valorizează ceea ce oferi. Aceasta nu este doar o viziune îndepărtată - este realitatea pe care ți-o oferă aplicatia noastră.', 'Imagine the days when you wake up in the morning, check your calendar and see that it\'s full of bookings from the clients you really want, the clients who appreciate and value what you offer. This is not just a distant vision - it is the reality that our app gives you.'],
        imageLeft: {
          imgPath: 'assets/images/others/partner-landing/hero-left.png'
        },
        imageCenter: {
          imgPath: 'assets/images/others/partner-landing/hero-center.png'
        },
        imageRight: {
          imgPath: 'assets/images/others/partner-landing/hero-right.png'
        },
        vectorLeft: {
          imgPath: 'assets/images/others/partner-landing/Vector 1.png'
        },
        vectorRight: {
          imgPath: 'assets/images/others/partner-landing/Vector 2.png'
        }
      }
    };
    this.menu = {
      home: ['Acasă', 'Home'],
      char: ['Caracteristici', 'Characteristics'],
      offer: ['Ce oferim', 'What we offer'],
      benefits: ['Beneficii', 'Benefits'],
      join: ['Devino partener', 'Become a partner'],
      start: ['Începe acum', 'Start now']
    };
    this.featuresSection = {
      titleSection: {
        title: ['Ce oferim', 'Features'],
        paragraph: ['Descoperă avantajele unice ale aplicației Bestinform.', 'Discover the unique advantages of the Bestinform application.']
      },
      tiles: [{
        icon: 'assets/images/others/partner-landing/Approval.svg',
        title: ['Listare Gratuită', 'Free Listing'],
        paragraph: ['Cu Bestinform, adăugarea și listarea locației tale este GRATUITĂ. Extinde-ți vizibilitatea și ajungi la milioane de călători dornici să descopere experiența ta unică.', 'With Bestinform, adding and listing your location is FREE. Expand your visibility and reach millions of travelers eager to discover your unique experience.']
      }, {
        icon: 'assets/images/others/partner-landing/Pair.svg',
        title: ['Potrivire inteligentă', 'Smart Matching'],
        paragraph: ['Bestinform nu doar că găsește clienți, ci face potrivirea perfectă. Datorită inteligenței artificiale avansate, te conectăm cu exact clienții ideali pe care îi cauți.', 'Bestinform doesn\'t just find customers, it makes the perfect match. Thanks to advanced artificial intelligence, we connect you with exactly the ideal customers you are looking for.']
      }, {
        icon: 'assets/images/others/partner-landing/Online Booking.svg',
        title: ['Rezervări Online Ușoare', 'Easy Online Bookings'],
        paragraph: ['Cu opțiunea noastră de rezervări online, clienții pot face rezervări fără efort, iar tu vei primi notificări în timp real. Simplu, rapid și eficient!', 'With our online booking option, customers can book effortlessly and you will receive real-time notifications. Simple, fast and effective!']
      }, {
        icon: 'assets/images/others/partner-landing/User Friendly.svg',
        title: ['Ușor de utilizat', 'User Friendly'],
        paragraph: ['Nicio complicație. Nicio bătaie de cap. Cu sistemul nostru intuitiv, gestionarea profilului și a  rezervărilor venite din Bestinform este extraordinar de simplă.', 'No complications. No hassle. With our intuitive system, managing your profile and bookings from Bestinform is incredibly simple.']
      }, {
        icon: 'assets/images/others/partner-landing/Real Time.svg',
        title: ['Actualizări în Timp Real', 'Real Time Updates'],
        paragraph: ['Rămâi la curent cu tot ce se întâmplă. Modificări? Anulări? Vezi totul imediat, fără întârzieri.', 'Stay up to date with everything that\'s happening. Changes? Cancellations? See everything immediately, without delays.']
      }, {
        icon: 'assets/images/others/partner-landing/Statistics.svg',
        title: ['Statistici Ultra Valoroase', 'Ultra Valuable Stats'],
        paragraph: ['Înțelege mai bine preferințele clienților și optimizează-ți serviciile. Accesează date și statistici relevante pentru a lua decizii înțelepte și a crește afacerea ta.', 'Better understand customer preferences and optimize your services. Access relevant data and statistics to make smart decisions and grow your business.']
      }]
    };
    this.benefitsSection = {
      titleSection: {
        title: ['Beneficii', 'Benefits'],
        paragraph: ['Iată de ce Bestinform este cea mai bună opțiune pentru promovarea proprietății tale.', 'This is why Bestinform is the best option for promoting your property.']
      },
      benefits: [{
        title: ['Vizibilitate maximă', 'Maximum visibility'],
        iconPath: 'assets/images/others/partner-landing/clients.png',
        imgPath: 'assets/images/others/partner-landing/benefits-img-1.png',
        description: ['Într-o lume digitală unde vizibilitatea determină succesul, vă oferim cheia către o poartă de aur. Prin accesul la o bază extinsă de utilizatori în continuă creștere, locația dvs. nu va fi doar observată - va fi căutată, apreciată și vizitată. Lasă clienții noi să vină la tine ca albinele la miere.', 'In a digital world where visibility determines success, we give you the key to a golden gate. With access to an extensive and ever-growing user base, your location will not only be noticed - it will be searched for, liked and visited. Let new customers come to you like bees to honey.'],
        isActive: false
      }, {
        title: ['Clienți ideali, puține anulări', 'Ideal customers, few cancellations'],
        iconPath: 'assets/images/others/partner-landing/Happy Client.png',
        imgPath: ' assets/images/others/partner-landing/benefits-img-2.png',
        description: ['Cu o rată impresionantă de doar 10% anulări, tehnologia noastră unică bestinform redefinește standardul în materie de rezervări online. Prin profilarea virtuală eficientă a clienților, asigurăm nu doar o potrivire optimă între serviciul oferit și necesitățile clienților, dar și o încredere sporită în deciziile lor. Alege să te alături comunității noastre și să beneficiezi de un flflux de clienți constant și fidel.', 'With an impressive cancellation rate of just 10%, our unique bestinform technology redefines the standard in online booking. Through effective virtual customer profiling, we ensure not only an optimal match between the service offered and customer needs, but also increased confidence in their decisions. Choose to join our community and benefit from a constant and loyal flow of customers.'],
        isActive: false
      }, {
        title: ['Feedback Valoros', 'Valuable Feedback'],
        iconPath: 'assets/images/others/partner-landing/feedback.png',
        imgPath: 'assets/images/others/partner-landing/benefits-img-3.png',
        description: ['Feedback-ul nu este doar un cuvânt la modă. Este esența îmbunătățirii continue. Prin intermediul aplicației noastre, veți avea acces instant la părerile clienților. Înțelegând ce doresc ei cu adevărat, veți fi mereu cu un pas înainte, adaptându-vă și crescând într-un mod care îi va surprinde și impresiona.', 'Feedback is not just a buzzword. It is the essence of continuous improvement. Through our app, you will have instant access to customer reviews. By understanding what they really want, you\'ll always be one step ahead, adapting and growing in a way that will surprise and impress them.'],
        isActive: false
      }, {
        title: ['Expunere Maximă', 'Maximum Exposure'],
        iconPath: ' assets/images/others/partner-landing/World.png',
        imgPath: ' assets/images/others/partner-landing/benefits-img-4.png',
        description: ['Imaginează-ți locația ta strălucind în aplicație ca o stea pe cerul nopții. Cu avantajele noastre promoționale exclusive, nu veți fi doar un alt punct pe hartă, ci destinația principală. Oferim spotul luminii asupra dvs., asigurându-ne că strălucește la potențialul maxim.', 'Imagine your location shining in the app like a star in the night sky. With our exclusive promotional benefits, you will not be just another dot on the map, but the main destination. We shine the spotlight on you, making sure it shines to its fullest potential.'],
        isActive: false
      }],
      clientSection: {
        title: ['Ce spun clientii nostri', 'What our customers say'],
        clients: [{
          iconPath: 'assets/images/others/partner-landing/client-1.png',
          name: ' Adrian M.',
          job: 'Proprietar Hotel',
          review: ['"Conform previziunilor noastre, Bestinform, ne va aduce o crestere de 150% a rezervarilor in doar 3 luni! Aceasta nu este doar o aplicație, este o revoluție a modului în care oamenii călătoresc."', '"According to our forecasts, Bestinform will bring us a 150% increase in bookings in just 3 months! This is not just an app, it is revolutionizing the way people travel."']
        }, {
          iconPath: 'assets/images/others/partner-landing/client-2.png',
          name: 'Elena V.',
          job: 'Manager Restaurant',
          review: ['Am fost sceptică la început, dar feedback-ul în timp real și recomandările bazate pe AI sunt de neegalat. Bestinform m-a convins!', 'I was skeptical at first, but the real-time feedback and AI-based recommendations are second to none. Bestinform convinced me!']
        }, {
          iconPath: 'assets/images/others/partner-landing/client-3.png',
          name: 'Marius V.',
          job: 'Proprietar Hotel',
          review: ['"Nu m-aș mai întoarce vreodată la a nu folosi Bestinform!"', 'I would never go back to not using Bestinform!']
        }]
      }
    };
    this.faqSection = {
      title: ['FAQ', 'FAQ'],
      sections: [{
        question: ['Cât de greu este să integrez locația mea cu Bestinform?', 'How hard is it to integrate my location with Bestinform?'],
        answer: ['Integrarea cu Bestinform se face cât ai spune “pește”. Tot ce îți trebuie este un cont și un telefon mobil în proprietate cu care să scanezi codurile QR.', 'The integration with Bestinform is made in no time. All you need is an account and a mobile phone you own to scan QR codes with.']
      }, {
        question: ['Ce costuri sunt implicate?', 'What costs are involved?'],
        answer: ['Pentru parteneri nu există niciun cost de setup. Singurele costuri sunt extraordinar de mici și sunt percepute în diferite moduri în funcție de tipul proprietății tale. <br> <br> Ia legătura cu echipa Bestinform pentru detalii.', 'There is no setup cost for partners. The only costs are extraordinarily low and are charged in different ways depending on the type of your property. <br> <br> Get in touch with the Bestinform team for details.']
      }, {
        question: ['Cum protejați datele mele și ale clienților?', 'How do you protect my and customer data?'],
        answer: ['Datele tale și ale clienților sunt tratate cu maximă importanță de Bestinform și nu sunt distribuite. ', 'Your and customer data are treated with utmost importance by Bestinform and are not shared.']
      }, {
        question: ['În cât timp pot vedea rezultate?', 'How soon can I see results?'],
        answer: ['Bestinform îți va prezenta proprietatea clienților ideali din prima secundă în care aceasta este listată, iar rezervările vor apărea încă din prima zi de utilizare Bestinform.', 'Bestinform will present your property to ideal clients from the first second it is listed, and bookings will appear from the first day of using Bestinform.']
      }, {
        question: ['Care sunt cerințele tehnice?', 'What are the technical requirements?'],
        answer: ['Singura cerință pentru procesarea rezervărilor venite din Bestinform este deținerea unui device mobil care poate scana codurile QR ale clienților.', 'The only requirement for processing reservations from Bestinform is to have a mobile device that can scan customers\' QR codes.']
      }, {
        question: ['Cum mă asigur că proprietatea mea este vizibilă?', 'How do I make sure my property is visible?'],
        answer: ['Proprietățile partenere sunt vizibile permanent pentru utilizatorii care au profilul virtual compatibil cu proprietatea. <br> <br> Din momentul înscrierii, vizibilitatea proprietății este garantată.', 'Partner properties are permanently visible to users who have the virtual profile compatible with the property. <br> <br> From the moment of registration, the visibility of the property is guaranteed.']
      }, {
        question: ['Ce fel de suport oferiți?', 'What kind of support do you offer?'],
        answer: ['Echipa noastră de suport tehnic este aici pentru tine zilnic, 7 zile pe săptămână, 12 ore pe zi, fie că preferi să ne suni sau să discuți direct prin live chat.', 'Our technical support team is here for you every day, 7 days a week, 12 hours a day, whether you prefer to call us or chat directly via live chat.']
      }]
    };
    this.footer = {
      text: ['Orice mare poveste are un început. A ta începe cu Bestinform!', 'Every great story has a beginning. Yours starts with Bestinform!']
    };
    this.parallaxRatioNotifications = 0.3;
    this.parallaxRatioImages = 0.3;
    this.activeImageIndex = 0;
    this.activeBenefit = null;
    this.lastScroll = 500;
    this.isSticky = true;
  }
  onScroll() {
    // console.log('scroll', window.scrollY)
    if (window.scrollY < 0) {
      this.isSticky = true;
      this.lastScroll = window.scrollY;
    } else if (window.scrollY < this.lastScroll) {
      this.isSticky = true;
      this.lastScroll = window.scrollY;
      // console.log('scroll in sus', this.lastScroll, window.scrollY)
    } else if (window.scrollY > this.lastScroll && window.scrollY > 0) {
      this.isSticky = false;
      this.lastScroll = window.scrollY;
      // console.log('scroll in jos', this.lastScroll, window.scrollY)
    }
  }

  ngOnInit() {
    const currentRoute = this.route.snapshot.url.join('/');
    if (currentRoute.includes('ro')) {
      this.pageLang = LangOptions.RO;
    } else if (currentRoute.includes('en')) {
      this.pageLang = LangOptions.EN;
    } else {
      void this.router.navigate(['/parteneri/ro']);
    }
    this.startBenefitsLoading();
    this.intersection();
  }
  intersection() {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.changeBenefitActive(0);
        }
      });
    });
    observer.observe(document.getElementById('benefit-slides'));
  }
  changeBenefitActive(index) {
    for (let i = 0; i < this.benefitsSection.benefits?.length; i++) {
      if (i === index) {
        this.activeImageIndex = index;
        this.benefitsSection.benefits[i].isActive = true;
        this.activeBenefit = {
          imgPath: this.benefitsSection.benefits[i].imgPath,
          description: this.benefitsSection.benefits[i].description[this.pageLang]
        };
      } else {
        this.benefitsSection.benefits[i].isActive = false;
      }
    }
  }
  startBenefitsLoading() {
    this.activeImageIndex = 0;
    this.benefitsSection.benefits[this.activeImageIndex].isActive = true;
    this.activeBenefit = {
      imgPath: this.benefitsSection.benefits[this.activeImageIndex].imgPath,
      description: this.benefitsSection.benefits[this.activeImageIndex].description[this.pageLang]
    };
    setInterval(() => {
      this.benefitsSection.benefits[this.activeImageIndex].isActive = false;
      if (this.activeImageIndex === this.benefitsSection.benefits.length - 1) {
        this.activeImageIndex = 0;
      } else {
        this.activeImageIndex++;
      }
      this.activeBenefit = {
        imgPath: this.benefitsSection.benefits[this.activeImageIndex].imgPath,
        description: this.benefitsSection.benefits[this.activeImageIndex].description[this.pageLang]
      };
      this.benefitsSection.benefits[this.activeImageIndex].isActive = true;
    }, 15000);
  }
  changeRoute() {
    void this.router.navigate(['/parteneri/' + (this.pageLang == LangOptions.RO ? 'ro' : 'en')]);
  }
  get LangOptions() {
    return LangOptions;
  }
  scroll(el) {
    el.scrollIntoView();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
  }];
  static #_2 = this.propDecorators = {
    onScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['window:scroll', ['$event']]
    }]
  };
};
LandingPartnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-landing-partner',
  template: _landing_partner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_landing_partner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LandingPartnerComponent);


/***/ }),

/***/ 10136:
/*!********************************************************************!*\
  !*** ./src/app/features/landing-partner/landing-partner.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPartnerModule": () => (/* binding */ LandingPartnerModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _landing_partner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-partner.component */ 60516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not-found/not-found.component */ 95707);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _standalone_components_landing_form_landing_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../standalone-components/landing-form/landing-form.component */ 13765);
/* harmony import */ var _shared_directives_parallax_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_directives/parallax.directive */ 22578);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _standalone_components_feedback_page_feedback_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../standalone-components/feedback-page/feedback-page.component */ 2977);











const routes = [{
  path: 'en',
  component: _landing_partner_component__WEBPACK_IMPORTED_MODULE_0__.LandingPartnerComponent,
  pathMatch: 'full'
}, {
  path: 'ro',
  component: _landing_partner_component__WEBPACK_IMPORTED_MODULE_0__.LandingPartnerComponent,
  pathMatch: 'full'
}, {
  path: 'formular/en',
  component: _standalone_components_landing_form_landing_form_component__WEBPACK_IMPORTED_MODULE_2__.LandingFormComponent,
  pathMatch: 'full'
}, {
  path: 'formular/ro',
  component: _standalone_components_landing_form_landing_form_component__WEBPACK_IMPORTED_MODULE_2__.LandingFormComponent,
  pathMatch: 'full'
}, {
  path: 'formular/success/ro',
  component: _standalone_components_feedback_page_feedback_page_component__WEBPACK_IMPORTED_MODULE_4__.FeedbackPageComponent,
  pathMatch: 'full'
}, {
  path: 'formular/success/en',
  component: _standalone_components_feedback_page_feedback_page_component__WEBPACK_IMPORTED_MODULE_4__.FeedbackPageComponent,
  pathMatch: 'full'
}, {
  path: '',
  redirectTo: 'ro',
  pathMatch: 'full'
}, {
  path: '**',
  component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent
} // Wildcard route for a 404 page
];

let LandingPartnerModule = class LandingPartnerModule {};
LandingPartnerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_landing_partner_component__WEBPACK_IMPORTED_MODULE_0__.LandingPartnerComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _standalone_components_landing_form_landing_form_component__WEBPACK_IMPORTED_MODULE_2__.LandingFormComponent, _shared_directives_parallax_directive__WEBPACK_IMPORTED_MODULE_3__.ParallaxDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPanelHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPanelToggle]
})], LandingPartnerModule);


/***/ }),

/***/ 22578:
/*!**********************************************************!*\
  !*** ./src/app/shared/_directives/parallax.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParallaxDirective": () => (/* binding */ ParallaxDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var ParallaxDirective_1;


let ParallaxDirective = ParallaxDirective_1 = class ParallaxDirective {
  static #_ = this.windowHeight = window.innerHeight;
  constructor(eleRef) {
    this.eleRef = eleRef;
    this.parallaxRatio = 1;
    this.ngAfterViewInitCompleted = false;
    this.isTestDivScrolledIntoView = true;
  }
  ngAfterViewInit() {
    // this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top - this.eleRef.nativeElement.parentElement.getBoundingClientRect().top;
    this.ngAfterViewInitCompleted = true;
    console.log(ParallaxDirective_1.windowHeight);
    /*console.log(this.eleRef.nativeElement.parentElement.getBoundingClientRect());
    console.log(this.eleRef.nativeElement.getBoundingClientRect());
    console.log(this.initialTop);*/
  }

  onWindowScroll() {
    // this.isScrolledIntoView();
    if (this.ngAfterViewInitCompleted && this.isTestDivScrolledIntoView) {
      // cand dam scroll, elementul se misca direct proportional cu valoarea parallaxRatio
      this.eleRef.nativeElement.style.top = this.initialTop - window.scrollY * this.parallaxRatio + 'px';
    }
  }
  isScrolledIntoView() {
    const rect = this.eleRef.nativeElement.getBoundingClientRect();
    const topShown = rect.top >= 0;
    const bottomShown = rect.bottom <= window.innerHeight;
    this.isTestDivScrolledIntoView = topShown && bottomShown;
  }
  static #_2 = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }];
  static #_3 = this.propDecorators = {
    parallaxRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onWindowScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["window:scroll"]
    }]
  };
};
ParallaxDirective = ParallaxDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[appParallax]',
  standalone: true
})], ParallaxDirective);


/***/ }),

/***/ 96829:
/*!*************************************!*\
  !*** ./src/app/shared/locations.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Locations": () => (/* binding */ Locations)
/* harmony export */ });
class Locations {
  constructor() {
    this.countries = [{
      index: 0,
      name: "Romania",
      cities: ['Galati', 'Braila', 'Bucuresti', 'Cluj', 'Arad']
    }, {
      index: 1,
      name: "Spania",
      cities: ['Barcelona', 'Madrid']
    }];
    this.counties = ['Bucureşti', 'Alba', 'Arad', 'Argeş', 'Bacău', 'Bihor', 'Bistriţa-Năsăud', 'Botoşani', 'Braşov', 'Brăila', 'Buzău', 'Caraş-Severin', 'Călăraşi', 'Cluj', 'Constanţa', 'Covasna', 'Dâmboviţa', 'Dolj', 'Galaţi', 'Giurgiu', 'Gorj', 'Harghita', 'Hunedoara', 'Ialomiţa', 'Iaşi', 'Ilfov', 'Maramureş', 'Mehedinţi', 'Mureş', 'Neamţ', 'Olt', 'Prahova', 'Satu Mare', 'Sălaj', 'Sibiu', 'Suceava', 'Teleorman', 'Timiş', 'Tulcea', 'Vâlcea', 'Vaslui', 'Vrancea'];
  }
}

/***/ }),

/***/ 2977:
/*!********************************************************************************!*\
  !*** ./src/app/standalone-components/feedback-page/feedback-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackPageComponent": () => (/* binding */ FeedbackPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _feedback_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-page.component.html?ngResource */ 32314);
/* harmony import */ var _feedback_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback-page.component.scss?ngResource */ 95022);
/* harmony import */ var _feedback_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_feedback_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);






var LangOptions;
(function (LangOptions) {
  LangOptions[LangOptions["RO"] = 0] = "RO";
  LangOptions[LangOptions["EN"] = 1] = "EN";
})(LangOptions || (LangOptions = {}));
let FeedbackPageComponent = class FeedbackPageComponent {
  constructor(router, route, location) {
    this.router = router;
    this.route = route;
    this.location = location;
    this.text = {
      successMsg: ['Felicitări! Solicitarea ta de înscriere a fost trimisă cu succes!', 'Congratulations! Your registration request has been successfully submitted!'],
      button: ['Înapoi spre site', 'Back to the site']
    };
    this.location.subscribe(event => {
      // Check if the user is trying to navigate back
      if (event && event.type === 'popstate') {
        window.location.reload();
      }
    });
  }
  ngOnInit() {
    const currentRoute = this.route.snapshot.url.join('/');
    if (currentRoute.includes('ro')) {
      this.pageLang = LangOptions.RO;
    } else if (currentRoute.includes('en')) {
      this.pageLang = LangOptions.EN;
    } else {
      void this.router.navigate(['/parteneri/success/ro']);
    }
  }
  goToPartnerHP() {
    // this.router.navigate(['/parteneri/' + (this.pageLang == LangOptions.RO ? 'ro' : 'en')]);
    window.location.href = '/parteneri/' + (this.pageLang == LangOptions.RO ? 'ro' : 'en');
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location
  }];
};
FeedbackPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-feedback-page',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  template: _feedback_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_feedback_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FeedbackPageComponent);


/***/ }),

/***/ 13765:
/*!******************************************************************************!*\
  !*** ./src/app/standalone-components/landing-form/landing-form.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingFormComponent": () => (/* binding */ LandingFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _landing_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-form.component.html?ngResource */ 47530);
/* harmony import */ var _landing_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-form.component.scss?ngResource */ 14477);
/* harmony import */ var _landing_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_landing_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _features_landing_bestinform_landing_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/landing-bestinform/landing-service.service */ 89219);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_locations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/locations */ 96829);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);













var LangOptions;
(function (LangOptions) {
  LangOptions[LangOptions["RO"] = 0] = "RO";
  LangOptions[LangOptions["EN"] = 1] = "EN";
})(LangOptions || (LangOptions = {}));
let LandingFormComponent = class LandingFormComponent {
  constructor(fb, landingService, toastService, locationsTable, router, route) {
    this.fb = fb;
    this.landingService = landingService;
    this.toastService = toastService;
    this.locationsTable = locationsTable;
    this.router = router;
    this.route = route;
    this.currentStep = 0;
    this.pageTitle = {
      title: ['Formular înscriere', 'Sign up form']
    };
    this.form = {
      firstStep: {
        title: ['Despre tine', 'About you'],
        content: ['Salutare, vrem ca acest proces să fie foarte rapid, așa că o să trecem direct la subiect. Dar, pentru că nu vrem să fim nepoliticoși, mai întâi spune-ne, care este numele tău?', 'Hello, we want to make this process very quick, so we\'ll get straight to the point. But because we don\'t want to be rude, first tell us, what\'s your name?'],
        field: ['Numele tău', 'Your name']
      },
      secondStep: {
        title: ['Unde te putem contacta', 'Where can we contact you?'],
        content: ['Super! Care este adresa ta de email?', 'Super! What is your e-mail adress?'],
        field: ['Email-ul tău', 'Your email']
      },
      thirdStep: {
        title: ['Tip locație', 'Location type'],
        content: ['Ce tip de locație ai?', 'What type of location do you have?'],
        field: {
          club: ['Club/Petrecere', 'Club/Party'],
          museum: ['Muzeu', 'Museum'],
          sport: ['Sport & Aventură', 'Sport & Adventure'],
          cinema: ['Teatru/Cinema', 'Theatre/Cinema'],
          other: ['Alt tip...', 'Other type...']
        }
      },
      fourthStep: {
        title: ['Județ', 'County'],
        content: ['În ce județ este locația ta?', 'What county is your location in?'],
        field: ['Selectează județ', 'Select county']
      },
      fifthStep: {
        title: ['Volum rezervări', 'Booking volume'],
        content: ['Câte rezervări poate accepta simultan locația ta?', 'How many bookings can your venue take at once?'],
        field: ['Sub 50', 'Under 50']
      },
      sixthStep: {
        title: ['Locația ta este compatibilă', 'Your location is compatible'],
        content: ['Super! Pe baza răspunsurilor tale, ai o locație compatibilă pentru a fi promovat GRATUIT pe\n' + '                Bestinform. Haide să ne auzim!', 'Super! Based on your answers, you have a compatible location to be advertised on Bestinform for FREE. Let\'s hear each other!'],
        field: {
          name: ['Numele tău', 'Your name'],
          location: ['Numele locației', 'Location name'],
          phone: ['Numărul tău de telefon', 'Your phone number'],
          email: ['Email-ul tău', 'Your email']
        }
      }
    };
    this.errorMsg = {
      requiredMsg: ['Acest câmp trebuie completat!', 'This field is required!'],
      emailMsg: ['Acest email nu este valid!', 'This email is invalid!'],
      phoneMsg: ['Numărul de telefon nu este valid!', 'Phone number is not valid!'],
      bePhone: ['Numărul de telefon introdus există deja!', 'This phone number already exists!'],
      beEmail: ['Emailul introdus există deja!', 'This email already exists!'],
      beGeneral: ['Acțiunea nu a fost finalizată!', 'Action not finished!'],
      beSuccess: ['Acțiune finalizată!', 'Action finished!'],
      emailExists: ['Acest email este deja asociat unui partener!', 'This email is already associated with a partner!']
    };
    this.buttons = {
      back: ['Înapoi', 'Back'],
      next: ['Înainte', 'Next'],
      finish: ['Finalizează', 'Finish'],
      finishing: ['Finalizare...', 'Finishing...']
    };
    this.menu = {
      home: ['Acasă', 'Home'],
      char: ['Caracteristici', 'Characteristics'],
      offer: ['Ce oferim', 'What we offer'],
      benefits: ['Beneficii', 'Benefits'],
      join: ['Devino partener', 'Become a partner'],
      start: ['Începe acum', 'Start now'],
      required: ['Completati toate campurile obligatorii!', 'Complete all the required fields!']
    };
    this.footer = {
      text: ['Orice mare poveste are un început. A ta începe cu Bestinform!', 'Every great story has a beginning. Yours starts with Bestinform!']
    };
    this.isSubmitLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.unsubscribe = [];
    this.counties = this.locationsTable.counties;
    const loadingSubscr = this.isSubmitLoading$.asObservable().subscribe(res => this.isSubmitLoading = res);
    this.unsubscribe.push(loadingSubscr);
  }
  // lastScroll = 0;
  // isSticky = true;
  // @HostListener('window:scroll', ['$event']) onScroll(){
  //     // console.log('scroll', window.scrollY)
  //     if(window.scrollY < 0){
  //         this.isSticky = true;
  //         this.lastScroll = window.scrollY;
  //     }else if(window.scrollY < this.lastScroll){
  //         this.isSticky = true;
  //         this.lastScroll = window.scrollY;
  //         console.log('scroll in sus', this.lastScroll, window.scrollY)
  //
  //     }else if(window.scrollY > this.lastScroll && window.scrollY > 0){
  //         this.isSticky = false;
  //         this.lastScroll = window.scrollY;
  //         console.log('scroll in jos', this.lastScroll, window.scrollY)
  //     }
  // }
  ngOnInit() {
    const currentRoute = this.route.snapshot.url.join('/');
    if (currentRoute.includes('ro')) {
      this.pageLang = LangOptions.RO;
    } else if (currentRoute.includes('en')) {
      this.pageLang = LangOptions.EN;
    } else {
      void this.router.navigate(['/parteneri/formular/ro']);
    }
    this.initForm();
  }
  changeStep(stepNumber) {
    if (stepNumber < this.currentStep) {
      this.currentStep = stepNumber;
    } else {
      if (stepNumber === 5) {
        this.contentForm.get('lastForm.email').patchValue(this.contentForm.get('initEmail').value);
        this.contentForm.get('lastForm.name').patchValue(this.contentForm.get('initName').value);
      }
      if (this.currentStep === 0) {
        this.contentForm.get('initName').markAsTouched();
        if (this.contentForm.get('initName').valid) {
          dataLayer.push({
            'event': 'registration_step',
            'step': this.currentStep + 1,
            'step_label': 'Despre tine'
          });
          this.currentStep = stepNumber;
        } else {
          return;
        }
      } else if (this.currentStep === 1) {
        this.contentForm.get('initEmail').markAsTouched();
        if (this.contentForm.get('initEmail').valid) {
          dataLayer.push({
            'event': 'registration_step',
            'step': this.currentStep + 1,
            'step_label': 'Unde te putem contacta'
          });
          const firstForm = {
            name: this.contentForm.value.initName,
            email: this.contentForm.value.initEmail
          };
          this.landingService.createLandingContact(firstForm).subscribe({
            next: respCreate => {
              if (respCreate.success) {
                // console.log('create', respCreate);
                this.currentStep = stepNumber;
              }
            },
            error: error => {
              if (error?.error?.reason === 'emailExists') {
                this.toastService.showToast('Error', this.errorMsg.emailExists[this.pageLang], 'error', true);
              } else {
                this.toastService.showToast('Error', this.errorMsg.beGeneral[this.pageLang], 'error', true);
              }
              this.initForm();
              this.currentStep = 0;
            }
          });
        } else {
          return;
        }
      } else if (this.currentStep === 2 || this.currentStep === 3 || this.currentStep === 4) {
        if (this.currentStep === 2) {
          if (stepNumber === 3) {
            console.log('form', this.contentForm.value);
            dataLayer.push({
              'event': 'registration_step',
              'step': this.currentStep + 1,
              'step_label': 'Tip locație',
              'step_selected_option': this.contentForm.value.locationType.locationType,
              'location_type': this.contentForm.value.locationType.locationType
            });
          }
        }
        if (this.currentStep === 3) {
          if (stepNumber === 4) {
            console.log('form', this.contentForm.value);
            dataLayer.push({
              'event': 'registration_step',
              'step': this.currentStep + 1,
              'step_label': 'Judeţ',
              'step_selected_option': this.contentForm.value.county,
              'location_type': this.contentForm.value.locationType.locationType,
              'county': this.contentForm.value.county
            });
          }
        }
        if (this.currentStep === 4) {
          if (stepNumber === 5) {
            dataLayer.push({
              'event': 'registration_step',
              'step': this.currentStep + 1,
              'step_label': 'Volum rezervări',
              'step_selected_option': this.contentForm.value.salesVolume.salesVolume,
              'location_type': this.contentForm.value.locationType.locationType,
              'county': this.contentForm.value.county,
              'booking_volume': this.contentForm.value.salesVolume.salesVolume
            });
          }
        }
        this.currentStep = stepNumber;
      } else if (this.currentStep === 5) {
        this.contentForm.get('lastForm').markAllAsTouched();
        if (this.contentForm.get('lastForm').valid) {
          this.currentStep = stepNumber;
        }
      }
    }
  }
  initForm() {
    this.contentForm = this.fb.group({
      initName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      initEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      county: [''],
      locationType: this.fb.group({
        locationType: ['Restaurant']
      }),
      salesVolume: this.fb.group({
        salesVolume: ['Sub 50']
      }),
      lastForm: this.fb.group({
        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
        locationName: [''],
        telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^(?:\\+4\\d{10}|4\\d{10}|0\\d{9})$')]]
      })
    });
  }
  sendForm() {
    this.isSubmitLoading = true;
    this.contentForm.markAllAsTouched();
    if (this.contentForm.valid) {
      const secondForm = {
        ...this.contentForm.get('lastForm').value,
        initEmail: this.contentForm.value.initEmail,
        county: this.contentForm.value.county,
        locationType: this.contentForm.get('locationType.locationType').value,
        salesVolume: this.contentForm.get('salesVolume.salesVolume').value
      };
      this.landingService.updateLandingSubscription(secondForm).subscribe({
        next: respUpdate => {
          // console.log('update', respUpdate);
          if (respUpdate.success) {
            // Execute the dataLayer.push() function
            dataLayer.push({
              'event': 'form_submitted',
              'form_name': 'Landing Parteneri',
              'form_id': '1',
              'location_type': this.contentForm.get('locationType.locationType').value,
              'county': this.contentForm.value.county,
              'booking_volume': this.contentForm.get('salesVolume.salesVolume').value
            });
            this.isSubmitLoading$.next(false);
            this.toastService.showToast('Success', this.errorMsg.beSuccess[this.pageLang], 'success');
            this.router.navigate(['/parteneri/formular/success/' + (this.pageLang == LangOptions.RO ? 'ro' : 'en')]);
          }
        },
        error: error => {
          if (error.error?.reason === 'invalid_parameter') {
            this.isSubmitLoading$.next(false);
            this.toastService.showToast('Error', this.errorMsg.beEmail[this.pageLang], 'error', true);
          } else if (error.error?.reason === 'duplicate_parameter') {
            this.isSubmitLoading$.next(false);
            this.toastService.showToast('Error', this.errorMsg.bePhone[this.pageLang], 'error', true);
          } else {
            this.isSubmitLoading$.next(false);
            this.toastService.showToast('Error', this.errorMsg.beGeneral[this.pageLang], 'error', true);
          }
        }
      });
      // console.log('second form', secondForm);
    } else {
      this.isSubmitLoading$.next(false);
      this.toastService.showToast('Error', this.errorMsg.requiredMsg[this.pageLang], 'error', true);
      // console.log('not valid');
    }
  }

  changeRoute() {
    void this.router.navigate(['/parteneri/formular/' + (this.pageLang == LangOptions.RO ? 'ro' : 'en')]);
  }
  goToHome() {
    this.router.navigate(['/parteneri/' + (this.pageLang == LangOptions.RO ? 'ro' : 'en')]);
  }
  get LangOptions() {
    return LangOptions;
  }
  scroll(el) {
    el.scrollIntoView();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: _features_landing_bestinform_landing_service_service__WEBPACK_IMPORTED_MODULE_2__.LandingService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _shared_locations__WEBPACK_IMPORTED_MODULE_4__.Locations
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }];
};
LandingFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-landing-form',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__.MatLegacyInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule],
  template: _landing_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_shared_locations__WEBPACK_IMPORTED_MODULE_4__.Locations],
  styles: [(_landing_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LandingFormComponent);


/***/ }),

/***/ 80941:
/*!************************************************************************************!*\
  !*** ./src/app/features/landing-partner/landing-partner.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.cursor {\n  cursor: pointer;\n}\n\nh1 {\n  color: #000;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 40px;\n  font-size: clamp(1.5rem, 0.5769230769rem + 2.5641025641vw, 2.5rem);\n}\n\nh2 {\n  color: #010514;\n  text-align: center;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 32px;\n  font-size: clamp(1.25rem, 0.5576923077rem + 1.9230769231vw, 2rem);\n}\n\nh3 {\n  color: #010514;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 24px;\n  font-size: clamp(1.125rem, 0.7788461538rem + 0.9615384615vw, 1.5rem);\n}\n\np {\n  color: rgba(1, 5, 20, 0.8);\n  font-family: Roboto, serif;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 150%;\n  margin-bottom: 0;\n}\n\na, .language {\n  color: #010514;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  cursor: pointer;\n}\n\np.fs-24 {\n  font-size: 24px;\n  font-size: clamp(1rem, 0.5384615385rem + 1.2820512821vw, 1.5rem);\n}\n\np.fs-20 {\n  font-size: 20px;\n  font-size: clamp(0.875rem, 0.5288461538rem + 0.9615384615vw, 1.25rem);\n}\n\np.fs-16, a.fs-16, .language {\n  font-size: 16px;\n  font-size: clamp(0.75rem, 0.5192307692rem + 0.641025641vw, 1rem);\n}\n\n.icon-tile {\n  width: 48px;\n  height: 48px;\n  border-radius: 4px;\n  background: #D7E0FE;\n  padding: 8px;\n}\n@media only screen and (max-width: 576px) {\n  .icon-tile {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n.nav-up {\n  top: -80px !important;\n}\n\n.navbar {\n  background: #FBFFFE;\n  box-shadow: 0 4px 23px 0 rgba(1, 5, 20, 0.1);\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  top: 0;\n  transition: top 0.2s ease-in-out;\n}\n@media only screen and (max-width: 992px) {\n  .navbar a.navbar-toggler {\n    border: none !important;\n  }\n  .navbar a.navbar-toggler i {\n    color: #0D4494;\n  }\n}\n.navbar .navbar-brand img {\n  width: auto;\n  height: 48px;\n}\n@media only screen and (max-width: 576px) {\n  .navbar .navbar-brand img {\n    height: 24px;\n  }\n}\n.navbar ul {\n  gap: 24px;\n}\n@media only screen and (max-width: 576px) {\n  .navbar ul {\n    gap: 0;\n  }\n}\n.navbar ul .nav-link {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.btn-partner {\n  display: flex;\n  padding: 12px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border: none;\n  border-radius: 4px;\n  background: #052BA6;\n  color: #FBFFFE;\n  font-family: Roboto, serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.btn-partner:hover {\n  opacity: 0.7;\n}\n\n.btn-partner-bigger {\n  height: 60px;\n  width: auto;\n  display: flex;\n  padding: 12px 24px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border: none;\n  border-radius: 4px;\n  background: #052BA6;\n  margin-top: 64px;\n  color: #FBFFFE;\n  font-family: Roboto, serif;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.btn-partner-bigger:hover {\n  opacity: 0.7;\n}\n\n@media only screen and (min-width: 992px) {\n  .show-on-mobile {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .up {\n    display: none;\n  }\n}\n\n.down {\n  margin-bottom: 64px;\n}\n@media only screen and (min-width: 576px) {\n  .down {\n    display: none;\n  }\n}\n\n.language {\n  border: none;\n  background: #FBFFFE;\n}\n\n.notification-tile {\n  position: absolute;\n  display: inline-flex;\n  padding: 14px 16px;\n  align-items: center;\n  gap: 16px;\n  border-radius: 8px;\n  background: #FFF;\n  box-shadow: 0 4px 23px 0 rgba(1, 5, 20, 0.15);\n  max-width: 320px;\n}\n@media only screen and (max-width: 576px) {\n  .notification-tile img {\n    width: 16px;\n  }\n}\n\n#heart {\n  top: 167px;\n  left: 2px;\n}\n@media only screen and (max-width: 576px) {\n  #heart {\n    top: 61px;\n    left: 0;\n  }\n}\n\n#confetti-top {\n  top: 49px;\n  left: 282px;\n}\n@media only screen and (max-width: 576px) {\n  #confetti-top {\n    top: 6px;\n    left: 92px;\n  }\n}\n\n#confetti-bottom {\n  left: 19px;\n  top: 436px;\n}\n@media only screen and (max-width: 576px) {\n  #confetti-bottom {\n    top: 196px;\n    left: 0;\n    max-width: 209px;\n  }\n}\n\n#stars {\n  top: 317px;\n  left: 416px;\n  gap: 8px;\n  padding: 8px 16px;\n}\n@media only screen and (max-width: 576px) {\n  #stars {\n    top: 147px;\n    left: 163px;\n  }\n}\n\n#imgLeft {\n  left: -41px;\n  top: 84px;\n}\n\n#vectorLeft {\n  left: 166px;\n  top: 214px;\n}\n\n#imgCenter {\n  position: absolute;\n  top: 350px;\n  left: 430px;\n  /*width: 367px;\n  height: 376px;*/\n}\n@media only screen and (max-width: 1400px) {\n  #imgCenter {\n    display: block;\n    position: static;\n    height: 178px;\n    width: 178px;\n  }\n}\n\n#vectorRight {\n  right: 206px;\n  top: 231px;\n}\n\n#imgRight {\n  right: -43px;\n  top: 70px;\n}\n\n.hero-section {\n  background: #FBFFFE;\n  padding: 115px 0 80px 0;\n}\n@media only screen and (max-width: 576px) {\n  .hero-section {\n    padding: 48px 0;\n  }\n}\n.hero-section .notifications-section {\n  row-gap: 64px;\n  margin-bottom: 160px;\n}\n@media only screen and (max-width: 576px) {\n  .hero-section .notifications-section {\n    margin-bottom: 96px;\n    margin-top: 48px;\n  }\n}\n.hero-section .notifications-section > div:first-child {\n  max-width: 525px;\n  gap: 32px;\n}\n.hero-section .notifications-section > div:first-child > div:last-child img {\n  width: 32px;\n  height: 32px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 100%;\n  border: 3px solid #FBFFFE;\n}\n.hero-section .notifications-section > div:first-child > div:last-child img:not(:last-child) {\n  margin-left: -16px;\n}\n.hero-section .notifications-section > div:first-child > div:last-child p {\n  margin-left: 8px;\n  color: #052BA6;\n  font-family: Roboto, serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.hero-section .notifications-section > div:first-child .btn-partner {\n  padding: 16px 32px;\n  font-size: 18px;\n}\n@media only screen and (max-width: 576px) {\n  .hero-section .notifications-section > div:first-child .btn-partner {\n    padding: 12px 24px;\n    font-size: 14px;\n  }\n}\n.hero-section .notifications-section > div:last-child {\n  max-width: 602px;\n}\n@media only screen and (max-width: 576px) {\n  .hero-section .notifications-section > div:last-child {\n    max-width: 313px;\n  }\n}\n.hero-section .notifications-section > div:last-child > img {\n  width: 536px;\n  height: 536px;\n  border-radius: 100%;\n  border: 3px dashed rgba(5, 43, 166, 0.15);\n  padding: 13px;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n@media only screen and (max-width: 576px) {\n  .hero-section .notifications-section > div:last-child > img {\n    width: 228px;\n    height: 228px;\n    padding: 6px;\n    margin-left: 12px;\n  }\n}\n.hero-section .images-section {\n  height: 598px;\n}\n@media only screen and (max-width: 1400px) {\n  .hero-section .images-section {\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 32px;\n  }\n}\n.hero-section .images-section > div:first-child {\n  max-width: 768px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n}\n.hero-section .images-section > div:first-child h2 {\n  max-width: 548px;\n}\n\n.features-section {\n  background: #FFFBEF;\n  padding: 80px 0;\n}\n@media only screen and (max-width: 576px) {\n  .features-section {\n    padding: 48px 0;\n  }\n}\n.features-section .container > div:first-child {\n  max-width: 512px;\n  margin-bottom: 64px;\n}\n@media only screen and (max-width: 576px) {\n  .features-section .container > div:first-child {\n    margin-bottom: 48px;\n  }\n}\n.features-section .container > div:first-child h2 {\n  text-align: start;\n  margin-bottom: 8px;\n}\n.features-section .container .row {\n  row-gap: 24px;\n}\n\n.offer-card {\n  height: 100%;\n  padding: 24px;\n}\n.offer-card img {\n  margin-bottom: 32px;\n}\n.offer-card h3 {\n  margin-bottom: 16px;\n}\n.offer-card:hover {\n  border-radius: 4px;\n  background: #FBFFFE;\n  box-shadow: 0 4px 23px 0 rgba(11, 17, 15, 0.07);\n}\n@media only screen and (max-width: 576px) {\n  .offer-card {\n    padding: 16px;\n    border-radius: 4px;\n    background: #FBFFFE;\n    box-shadow: 0 4px 23px 0 rgba(11, 17, 15, 0.07);\n  }\n  .offer-card img {\n    margin-bottom: 16px;\n  }\n}\n\n.benefits-section {\n  background: #FBFFFE;\n  padding: 80px 0;\n}\n@media only screen and (max-width: 576px) {\n  .benefits-section {\n    padding: 64px 0;\n  }\n}\n.benefits-section .container > div:first-child {\n  margin-bottom: 48px;\n  flex-wrap: wrap;\n  row-gap: 16px;\n}\n@media only screen and (max-width: 576px) {\n  .benefits-section .container > div:first-child {\n    margin-bottom: 48px;\n  }\n}\n.benefits-section .container > div:first-child > div:first-child {\n  max-width: 512px;\n}\n.benefits-section .container > div:first-child > div:first-child h2 {\n  text-align: start;\n  margin-bottom: 8px;\n}\n.benefits-section .container .benefits-slides {\n  display: flex;\n  align-items: center;\n  gap: 58px;\n  margin-bottom: 160px;\n}\n@media only screen and (max-width: 576px) {\n  .benefits-section .container .benefits-slides {\n    margin-bottom: 32px;\n  }\n}\n.benefits-section .container .benefits-slides > div:first-child {\n  max-width: 525px;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  gap: 16px;\n}\n@media only screen and (max-width: 576px) {\n  .benefits-section .container .benefits-slides > div:first-child {\n    flex-shrink: unset;\n  }\n}\n.benefits-section .container .clients {\n  gap: 64px;\n}\n@media only screen and (max-width: 576px) {\n  .benefits-section .container .clients {\n    gap: 48px;\n  }\n}\n.benefits-section .container .clients > div {\n  display: flex;\n  gap: 20px;\n}\n@media only screen and (max-width: 576px) {\n  .benefits-section .container .clients > div {\n    flex-direction: column;\n  }\n}\n.benefits-section .container .clients > div .client-card {\n  display: flex;\n  padding: 24px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n  flex: 1 0 0;\n  border-radius: 4px;\n  background: #FFF;\n  box-shadow: 0 4px 23px 0 rgba(1, 5, 20, 0.1);\n}\n.benefits-section .container .clients > div .client-card > div:first-child {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n.benefits-section .container .clients > div .client-card > div:first-child img {\n  width: 48px;\n  height: 48px;\n  border-radius: 60px;\n}\n.benefits-section .container .clients > div .client-card > div:first-child div p:first-child {\n  font-weight: 700;\n  line-height: normal;\n}\n.benefits-section .container .clients > div .client-card > div:first-child div p:last-child {\n  color: #052BA6;\n  font-weight: 300;\n}\n\n@keyframes loading {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n.benefit-card {\n  border-radius: 4px;\n  box-shadow: 0 4px 23px 0 rgba(11, 17, 15, 0.1);\n  overflow: hidden;\n}\n.benefit-card .progress-container {\n  display: none;\n  height: 8px;\n  width: 100%;\n  border-radius: 4px 4px 0 0;\n  background: #D7E0FE;\n}\n.benefit-card .progress-container .loading {\n  width: 0;\n  height: 8px;\n  border-radius: 4px;\n  background: #052BA6;\n}\n.benefit-card .benefit-info {\n  display: flex;\n  padding: 24px;\n  align-items: center;\n  gap: 16px;\n  background: #FFF;\n}\n@media only screen and (max-width: 576px) {\n  .benefit-card .benefit-info {\n    padding: 16px;\n  }\n}\n.benefit-card.is-active .progress-container {\n  display: block;\n}\n.benefit-card.is-active .progress-container .loading {\n  animation-name: loading;\n  animation-duration: 15000ms;\n  animation-timing-function: linear;\n}\n.benefit-card.is-active .benefit-info {\n  background: #D7E0FE;\n}\n.benefit-card.is-active .benefit-info img {\n  background: #FBFFFE;\n}\n\n.selected-benefit {\n  display: flex;\n  padding: 24px;\n  flex-direction: column;\n  align-items: center;\n  gap: 64px;\n}\n@media only screen and (max-width: 576px) {\n  .selected-benefit {\n    gap: 16px;\n  }\n}\n.selected-benefit img {\n  aspect-ratio: 16/9;\n  width: 100%;\n  border-radius: 4px;\n  background-blend-mode: soft-light, normal;\n}\n\n.faq-section {\n  padding: 80px 0;\n  background: #F4F7FF;\n}\n.faq-section .container h2 {\n  margin-bottom: 64px;\n}\n.faq-section .container .accordion {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.faq-section .container .accordion .accordion-body {\n  background-color: red;\n}\n.faq-section .container .accordion .question {\n  padding: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.faq-section .container .accordion .question button i {\n  font-size: 24px;\n  color: #010514;\n}\n@media only screen and (max-width: 576px) {\n  .faq-section .container .accordion .question {\n    padding: 16px;\n  }\n  .faq-section .container .accordion .question button i {\n    font-size: 16px;\n  }\n}\n\n:host ::ng-deep .faq-section .accordion-item {\n  border-radius: 4px;\n  border: none;\n  box-shadow: 0 4px 23px 0 rgba(11, 17, 15, 0.1);\n  background: #FBFFFE;\n  overflow: hidden;\n}\n\n:host ::ng-deep .faq-section .accordion-body {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n@media only screen and (max-width: 576px) {\n  :host ::ng-deep .faq-section .accordion-body {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.footer-section {\n  padding: 80px 0;\n  background: #052BA6;\n}\n@media only screen and (max-width: 576px) {\n  .footer-section {\n    padding: 64px 0;\n  }\n}\n.footer-section .container > div:first-child {\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n  max-width: 567px;\n  margin-bottom: 64px;\n}\n.footer-section .container > div:first-child img {\n  height: 35px;\n  width: 165px;\n  align-self: center;\n}\n.footer-section .container > div:first-child > p {\n  align-self: center;\n  color: rgba(251, 255, 254, 0.8);\n  text-align: center;\n  font-family: Roboto, serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 150%;\n  max-width: 382px;\n  opacity: 0.5;\n}\n.footer-section .container > div:first-child > div:nth-child(3) p {\n  color: #FBFFFE;\n  font-family: Montserrat, serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n@media only screen and (max-width: 576px) {\n  .footer-section .container > div:first-child > div:nth-child(3) {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n.footer-section .container > div:first-child > div:last-child {\n  align-self: center;\n  width: 133px;\n}\n.footer-section .container > div:first-child > div:last-child i {\n  font-size: 22px;\n  color: #FBFFFE;\n}\n.footer-section .container > p {\n  text-align: center;\n  color: rgba(251, 255, 254, 0.3);\n  font-family: Montserrat, serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n\n@media only screen and (max-width: 576px) {\n  .ue-logo img, .ue-logo p {\n    width: 75% !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/features/landing-partner/landing-partner.component.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  user-select: none;\n}\n\n.cursor{\n  cursor: pointer;\n}\n\nh1 {\n  color: #000;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 40px;\n  font-size: clamp(1.5rem, 0.576923076923077rem + 2.564102564102564vw, 2.5rem);\n}\n\nh2 {\n  color: #010514;\n  text-align: center;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 32px;\n  font-size: clamp(1.25rem, 0.5576923076923077rem + 1.9230769230769231vw, 2rem);\n}\n\nh3 {\n  color: #010514;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 24px;\n  font-size: clamp(1.125rem, 0.7788461538461539rem + 0.9615384615384616vw, 1.5rem);\n}\n\np {\n  color: rgba(1, 5, 20, 0.80);\n  font-family: Roboto, serif;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 150%;\n  margin-bottom: 0;\n}\n\na, .language {\n  color: #010514;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  cursor: pointer;\n}\n\np.fs-24 {\n  font-size: 24px;\n  font-size: clamp(1rem, 0.5384615384615385rem + 1.282051282051282vw, 1.5rem);\n}\n\np.fs-20 {\n  font-size: 20px;\n  font-size: clamp(0.875rem, 0.5288461538461539rem + 0.9615384615384616vw, 1.25rem);\n}\n\np.fs-16, a.fs-16, .language {\n  font-size: 16px;\n  font-size: clamp(0.75rem, 0.5192307692307693rem + 0.641025641025641vw, 1rem);\n}\n\n.icon-tile {\n  width: 48px;\n  height: 48px;\n  border-radius: 4px;\n  background: #D7E0FE;\n  padding: 8px;\n\n  @media only screen and (max-width: 576px) {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n.nav-up {\n  top: -80px!important;\n}\n\n.navbar {\n  //height: 80px;\n  background: #FBFFFE;\n  box-shadow: 0  4px 23px 0 rgba(1, 5, 20, 0.10);\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  top: 0;\n  transition: top 0.2s ease-in-out;\n\n  @media only screen and (max-width: 992px) {\n    //height: 48px;\n\n    a.navbar-toggler {\n      border: none!important;\n      i{\n        color: #0D4494;\n      }\n    }\n  }\n\n  .navbar-brand img {\n    width: auto;\n    height: 48px;\n\n    @media only screen and (max-width: 576px) {\n      height: 24px;\n    }\n  }\n\n  ul {\n    gap: 24px;\n\n    @media only screen and (max-width: 576px) {\n      gap: 0;\n    }\n\n    .nav-link {\n      padding-left: 0;\n      padding-right: 0;\n    }\n  }\n}\n\n.btn-partner {\n  display: flex;\n  padding: 12px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border: none;\n  border-radius: 4px;\n  background: #052BA6;\n\n  color: #FBFFFE;\n  font-family: Roboto, serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n\n  &:hover {\n    opacity: 0.7;\n  }\n}\n\n.btn-partner-bigger {\n  height: 60px;\n  width: auto;\n  display: flex;\n  padding: 12px 24px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border: none;\n  border-radius: 4px;\n  background: #052BA6;\n  margin-top: 64px;\n\n  color: #FBFFFE;\n  font-family: Roboto, serif;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n\n  &:hover {\n    opacity: 0.7;\n  }\n}\n\n.show-on-mobile{\n  @media only screen and (min-width: 992px) {\n    display: none;\n  }\n}\n\n.up{\n  @media only screen and (max-width: 576px) {\n    display: none;\n  }\n}\n\n.down{\n  margin-bottom: 64px;\n  @media only screen and (min-width: 576px) {\n    display: none;\n  }\n}\n\n.language {\n  border: none;\n  background: #FBFFFE;\n}\n\n.notification-tile {\n  position: absolute;\n  display: inline-flex;\n  padding: 14px 16px;\n  align-items: center;\n  gap: 16px;\n  border-radius: 8px;\n  background: #FFF;\n  box-shadow: 0 4px 23px 0 rgba(1, 5, 20, 0.15);\n  max-width: 320px;\n\n  @media only screen and (max-width: 576px) {\n    img {\n      width: 16px;\n    }\n  }\n}\n\n// START: Notification\n#heart {\n  top: 167px;\n  left: 2px;\n\n  @media only screen and (max-width: 576px) {\n    top: 61px;\n    left: 0;\n  }\n}\n\n#confetti-top {\n  top: 49px;\n  left: 282px;\n\n  @media only screen and (max-width: 576px) {\n    top: 6px;\n    left: 92px;\n  }\n}\n\n#confetti-bottom {\n  left: 19px;\n  top: 436px;\n\n  @media only screen and (max-width: 576px) {\n    top: 196px;\n    left: 0;\n    max-width: 209px;\n  }\n}\n\n#stars {\n  top: 317px;\n  left: 416px;\n  gap: 8px;\n  padding: 8px 16px;\n\n  @media only screen and (max-width: 576px) {\n    top: 147px;\n    left: 163px;\n  }\n}\n// END: Notification\n\n\n// START: Hero Section Images\n#imgLeft {\n  left: -41px;\n  top: 84px;\n}\n\n#vectorLeft {\n  left: 166px;\n  top: 214px;\n}\n\n#imgCenter {\n  position: absolute;\n  top: 350px;\n  left: 430px;\n  /*width: 367px;\n  height: 376px;*/\n\n  @media only screen and (max-width: 1400px) {\n    display: block;\n    position: static;\n    height: 178px;\n    width: 178px;\n  }\n}\n\n#vectorRight {\n  right: 206px;\n  top: 231px;\n}\n\n#imgRight {\n  right: -43px;\n  top: 70px ;\n}\n// END: Hero Section Images\n\n\n.hero-section {\n  background: #FBFFFE;\n  padding: 115px 0 80px 0;\n\n  @media only screen and (max-width: 576px) {\n    padding: 48px 0;\n  }\n\n  .notifications-section {\n    row-gap: 64px;\n    margin-bottom: 160px;\n\n    @media only screen and (max-width: 576px) {\n      margin-bottom: 96px;\n      margin-top: 48px;\n    }\n\n    & > div:first-child {\n      max-width: 525px;\n      gap: 32px;\n\n      & > div:last-child {\n        img {\n          width: 32px;\n          height: 32px;\n          object-fit: cover;\n          object-position: center;\n          border-radius: 100%;\n          border: 3px solid #FBFFFE;\n        }\n\n        img:not(:last-child) {\n          margin-left: -16px;\n        }\n\n        p {\n          margin-left: 8px;\n          color: #052BA6;\n          font-family: Roboto, serif;\n          font-size: 16px;\n          font-style: normal;\n          font-weight: 500;\n          line-height: normal;\n        }\n      }\n\n      .btn-partner {\n        padding: 16px 32px;\n        font-size: 18px;\n\n        @media only screen and (max-width: 576px) {\n          padding: 12px 24px;\n          font-size: 14px;\n        }\n      }\n    }\n\n    & > div:last-child {\n      max-width: 602px;\n\n      @media only screen and (max-width: 576px) {\n        max-width: 313px;\n      }\n\n      & > img {\n        width: 536px;\n        height: 536px;\n        border-radius: 100%;\n        border: 3px dashed rgba(5, 43, 166, 0.15);\n        padding: 13px;\n        flex-shrink: 0;\n        object-fit: cover;\n\n        @media only screen and (max-width: 576px) {\n          width: 228px;\n          height: 228px;\n          padding: 6px;\n          margin-left: 12px;\n        }\n      }\n    }\n  }\n\n  .images-section {\n    height: 598px;\n\n    @media only screen and (max-width: 1400px) {\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 32px;\n    }\n\n    & > div:first-child {\n      max-width: 768px;\n      text-align: center;\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n      align-items: center;\n\n      h2 {\n        max-width: 548px;\n      }\n    }\n  }\n}\n\n.features-section {\n  background: #FFFBEF;\n  padding: 80px 0;\n\n  @media only screen and (max-width: 576px) {\n    padding: 48px 0;\n  }\n\n  .container {\n    & > div:first-child {\n      max-width: 512px;\n      margin-bottom: 64px;\n\n      @media only screen and (max-width: 576px) {\n        margin-bottom: 48px;\n      }\n\n      h2 {\n        text-align: start;\n        margin-bottom: 8px;\n      }\n    }\n\n    .row {\n      row-gap: 24px;\n    }\n  }\n}\n\n.offer-card {\n  height: 100%;\n  padding: 24px;\n\n  img {\n    margin-bottom: 32px;\n  }\n\n  h3 {\n    margin-bottom: 16px;\n  }\n\n  &:hover {\n    border-radius: 4px;\n    background: #FBFFFE;\n    box-shadow: 0 4px 23px 0 rgba(11, 17, 15, 0.07);\n  }\n\n  @media only screen and (max-width: 576px) {\n    padding: 16px;\n    border-radius: 4px;\n    background: #FBFFFE;\n    box-shadow: 0 4px 23px 0 rgba(11, 17, 15, 0.07);\n\n    img {\n      margin-bottom: 16px;\n    }\n  }\n}\n\n.benefits-section {\n  background: #FBFFFE;\n  padding: 80px 0;\n\n  @media only screen and (max-width: 576px) {\n    padding: 64px 0;\n  }\n\n  .container {\n    & > div:first-child {\n      margin-bottom: 48px;\n      flex-wrap: wrap;\n      row-gap: 16px;\n\n      @media only screen and (max-width: 576px) {\n        margin-bottom: 48px;\n      }\n\n      & > div:first-child {\n        max-width: 512px;\n\n        h2 {\n          text-align: start;\n          margin-bottom: 8px;\n        }\n      }\n    }\n\n    .benefits-slides {\n      display: flex;\n      align-items: center;\n      gap: 58px;\n      margin-bottom: 160px;\n\n      @media only screen and (max-width: 576px) {\n        margin-bottom: 32px;\n      }\n\n      & > div:first-child {\n        max-width: 525px;\n        display: flex;\n        flex-direction: column;\n        flex-shrink: 0;\n        gap: 16px;\n\n        @media only screen and (max-width: 576px) {\n          flex-shrink: unset;\n        }\n      }\n    }\n\n    .clients {\n      gap: 64px;\n\n      @media only screen and (max-width: 576px) {\n        gap: 48px;\n      }\n\n      & > div {\n        display: flex;\n        gap: 20px;\n\n        @media only screen and (max-width: 576px) {\n          flex-direction: column;\n        }\n\n        .client-card {\n          display: flex;\n          padding: 24px;\n          flex-direction: column;\n          align-items: flex-start;\n          gap: 16px;\n          flex: 1 0 0;\n          border-radius: 4px;\n          background: #FFF;\n          box-shadow: 0 4px 23px 0 rgba(1, 5, 20, 0.10);\n\n          & > div:first-child {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            gap: 16px;\n\n            img {\n              width: 48px;\n              height: 48px;\n              border-radius: 60px;\n            }\n\n            div {\n              p:first-child {\n                font-weight: 700;\n                line-height: normal;\n              }\n\n              p:last-child {\n                color: #052BA6;\n                font-weight: 300;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n@keyframes loading {\n  from {width: 0;}\n  to {width: 100%;}\n}\n\n.benefit-card {\n  border-radius: 4px;\n  box-shadow: 0 4px 23px 0 rgba(11, 17, 15, 0.10);\n  overflow: hidden;\n\n  .progress-container {\n    display: none;\n    height: 8px;\n    width: 100%;\n    border-radius: 4px 4px 0 0;\n    background: #D7E0FE;\n\n    .loading {\n      width: 0;\n      height: 8px;\n      border-radius: 4px;\n      background: #052BA6;\n    }\n  }\n\n  .benefit-info {\n    display: flex;\n    padding: 24px;\n    align-items: center;\n    gap: 16px;\n    background: #FFF;\n\n    @media only screen and (max-width: 576px) {\n      padding: 16px;\n    }\n  }\n\n  &.is-active {\n    .progress-container {\n      display: block;\n\n      .loading {\n        animation-name: loading;\n        animation-duration: 15000ms;\n        animation-timing-function: linear;\n      }\n    }\n\n    .benefit-info {\n      background: #D7E0FE;\n\n      img {\n        background: #FBFFFE;\n      }\n    }\n  }\n}\n\n.selected-benefit {\n  display: flex;\n  padding: 24px;\n  flex-direction: column;\n  align-items: center;\n  gap: 64px;\n\n  @media only screen and (max-width: 576px) {\n    gap: 16px;\n  }\n\n  img {\n    aspect-ratio: 16/9;\n    width: 100%;\n    border-radius: 4px;\n    background-blend-mode: soft-light, normal;\n  }\n}\n\n.faq-section {\n  padding: 80px 0;\n  background: #F4F7FF;\n\n  .container {\n    h2 {\n      margin-bottom: 64px;\n    }\n\n    .accordion {\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n\n      .accordion-body {\n        background-color: red;\n      }\n\n      .question {\n        padding: 24px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        button i {\n          font-size: 24px;\n          color: #010514;\n        }\n\n        @media only screen and (max-width: 576px) {\n          padding: 16px;\n\n          button i {\n            font-size: 16px;\n          }\n        }\n      }\n    }\n  }\n}\n\n:host ::ng-deep .faq-section .accordion-item {\n  border-radius: 4px;\n  border: none;\n  box-shadow: 0 4px 23px 0 rgba(11, 17, 15, 0.10);\n  background: #FBFFFE;\n  overflow: hidden;\n}\n\n:host ::ng-deep .faq-section .accordion-body {\n  padding-left: 24px;\n  padding-right: 24px;\n\n  @media only screen and (max-width: 576px) {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.footer-section {\n  padding: 80px 0;\n  background: #052BA6;\n\n  @media only screen and (max-width: 576px) {\n    padding: 64px 0;\n  }\n\n  .container {\n     & > div:first-child {\n       display: flex;\n       flex-direction: column;\n       gap: 48px;\n       max-width: 567px;\n       margin-bottom: 64px;\n\n       img {\n         height: 35px;\n         width: 165px;\n         align-self: center;\n       }\n\n       & > p {\n         align-self: center;\n         color: rgba(251, 255, 254, 0.80);\n         text-align: center;\n         font-family: Roboto, serif;\n         font-size: 16px;\n         font-style: normal;\n         font-weight: 300;\n         line-height: 150%;\n         max-width: 382px;\n         opacity: 0.5;\n       }\n\n       & > div:nth-child(3) {\n         p {\n           color: #FBFFFE;\n           font-family: Montserrat, serif;\n           font-size: 16px;\n           font-style: normal;\n           font-weight: 400;\n           line-height: normal;\n         }\n\n         @media only screen and (max-width: 576px) {\n           flex-direction: column;\n           gap: 8px;\n         }\n       }\n\n       & > div:last-child {\n         align-self: center;\n         width: 133px;\n         i {\n           font-size: 22px;\n           color: #FBFFFE;\n         }\n       }\n     }\n\n    & > p {\n      text-align: center;\n      color: rgba(251, 255, 254, 0.30);\n      font-family: Montserrat, serif;\n      font-size: 16px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: normal;\n    }\n  }\n}\n\n.ue-logo{\n  @media only screen and (max-width: 576px) {\n    img, p{\n      width: 75%!important;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 95022:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/feedback-page/feedback-page.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  gap: 64px;\n  padding: 0 24px;\n  height: 100%;\n}\n@media only screen and (min-width: 992px) {\n  .container {\n    gap: 76px;\n    padding: 0 100px;\n  }\n}\n.container img {\n  width: auto;\n  height: 60px;\n}\n.container .success-text {\n  text-align: center;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 36px;\n  color: #24398A;\n}\n.container .btn-back {\n  display: flex;\n  padding: 16px 24px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border: none;\n  border-radius: 4px;\n  background: #24398a;\n  color: #FBFFFE;\n  font-family: Roboto, serif;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.container .btn-back:hover {\n  opacity: 0.7;\n}", "",{"version":3,"sources":["webpack://./src/app/standalone-components/feedback-page/feedback-page.component.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,eAAA;EACA,YAAA;AACF;AACE;EALF;IAMI,SAAA;IACA,gBAAA;EAEF;AACF;AAAE;EACE,WAAA;EACA,YAAA;AAEJ;AACE;EACE,kBAAA;EACA,8BAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,cAAA;AACJ;AAEE;EACE,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EAEA,cAAA;EACA,0BAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AADJ;AAGI;EACE,YAAA;AADN","sourcesContent":[".container {\n  gap: 64px;\n  padding: 0 24px;\n  height: 100%;\n\n  @media only screen and (min-width: 992px) {\n    gap: 76px;\n    padding: 0 100px;\n  }\n\n  img {\n    width: auto;\n    height: 60px;\n  }\n\n  .success-text {\n    text-align: center;\n    font-family: Montserrat, serif;\n    font-style: normal;\n    font-weight: 700;\n    line-height: normal;\n    margin-bottom: 0;\n    font-size: 36px;\n    color: #24398A;\n  }\n\n  .btn-back {\n    display: flex;\n    padding: 16px 24px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    border: none;\n    border-radius: 4px;\n    background: #24398AFF;\n\n    color: #FBFFFE;\n    font-family: Roboto, serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n\n    &:hover {\n      opacity: 0.7;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14477:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/landing-form/landing-form.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*:not(input.field) {\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.cursor {\n  cursor: pointer;\n}\n\nh1 {\n  color: #000;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 40px;\n  font-size: clamp(1.5rem, 0.5769230769rem + 2.5641025641vw, 2.5rem);\n}\n\nh2 {\n  color: #010514;\n  text-align: center;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 32px;\n  font-size: clamp(1.25rem, 0.5576923077rem + 1.9230769231vw, 2rem);\n}\n\nh3 {\n  color: #010514;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 24px;\n  font-size: clamp(1.125rem, 0.7788461538rem + 0.9615384615vw, 1.5rem);\n}\n\np {\n  color: rgba(1, 5, 20, 0.8);\n  font-family: Roboto, serif;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 150%;\n  margin-bottom: 0;\n}\n\na, .language {\n  color: #010514;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  cursor: pointer;\n}\n\np.fs-24 {\n  font-size: 24px;\n  font-size: clamp(1rem, 0.5384615385rem + 1.2820512821vw, 1.5rem);\n}\n\np.fs-20 {\n  font-size: 20px;\n  font-size: clamp(0.875rem, 0.5288461538rem + 0.9615384615vw, 1.25rem);\n}\n\np.fs-16, a.fs-16, .language {\n  font-size: 16px;\n  font-size: clamp(0.75rem, 0.5192307692rem + 0.641025641vw, 1rem);\n}\n\n.icon-tile {\n  width: 48px;\n  height: 48px;\n  border-radius: 4px;\n  background: #D7E0FE;\n  padding: 8px;\n}\n@media only screen and (max-width: 576px) {\n  .icon-tile {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n.nav-up {\n  top: -80px !important;\n}\n\n.navbar {\n  background: #FBFFFE;\n  box-shadow: 0 4px 23px 0 rgba(1, 5, 20, 0.1);\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  top: 0;\n  transition: top 0.2s ease-in-out;\n}\n@media only screen and (max-width: 992px) {\n  .navbar .container-xl {\n    justify-content: center;\n  }\n  .navbar a.navbar-toggler {\n    border: none !important;\n  }\n  .navbar a.navbar-toggler i {\n    color: #0D4494;\n  }\n}\n.navbar .navbar-brand img {\n  width: auto;\n  height: 48px;\n}\n@media only screen and (max-width: 576px) {\n  .navbar .navbar-brand img {\n    height: 24px;\n  }\n}\n.navbar ul {\n  gap: 24px;\n}\n@media only screen and (max-width: 576px) {\n  .navbar ul {\n    gap: 0;\n  }\n}\n.navbar ul .nav-link {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.btn-partner {\n  display: flex;\n  padding: 12px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border: none;\n  border-radius: 4px;\n  background: #052BA6;\n  color: #FBFFFE;\n  font-family: Roboto, serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.btn-partner:hover {\n  opacity: 0.7;\n}\n\n.language {\n  border: none;\n  background: #FBFFFE;\n}\n\n.notification-tile {\n  position: absolute;\n  display: inline-flex;\n  padding: 14px 16px;\n  align-items: center;\n  gap: 16px;\n  border-radius: 8px;\n  background: #FFF;\n  box-shadow: 0 4px 23px 0 rgba(1, 5, 20, 0.15);\n  max-width: 320px;\n}\n@media only screen and (max-width: 576px) {\n  .notification-tile img {\n    width: 16px;\n  }\n}\n\n.section-form {\n  display: flex;\n  width: 1440px;\n  padding: 80px 100px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 64px;\n}\n@media only screen and (max-width: 576px) {\n  .section-form {\n    padding: 16px 0 32px 0;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n}\n.section-form .title-signup {\n  color: #010514;\n  text-align: center;\n  font-family: Montserrat;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.section-form .stepper-form-container {\n  width: 608px;\n  display: flex;\n  padding: 24px 48px;\n  flex-direction: column;\n  align-items: center;\n  gap: 64px;\n  margin-top: 64px;\n  border-radius: var(--radius-radius-sm, 4px);\n  background: #FBFFFE;\n  box-shadow: 0 4px 23px 0 rgba(1, 5, 20, 0.1);\n}\n@media only screen and (max-width: 768px) {\n  .section-form .stepper-form-container {\n    max-width: 400px;\n    padding: 24px;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .section-form .stepper-form-container {\n    max-width: 350px;\n    padding: 24px;\n  }\n}\n.section-form .stepper-form-container .stepper-header {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.section-form .stepper-form-container .stepper-header .step-number {\n  cursor: pointer;\n  min-width: 32px;\n  max-width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: Roboto;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n}\n.section-form .stepper-form-container .stepper-header .dark-blue {\n  background-color: #052BA6;\n  color: #FBFFFE;\n}\n.section-form .stepper-form-container .stepper-header .light-blue {\n  background-color: #D7E0FE;\n  color: #010514;\n}\n.section-form .stepper-form-container .stepper-header .dark-line {\n  width: 32px;\n  stroke-width: 2px;\n  stroke: #D7E0FE;\n}\n@media only screen and (max-width: 768px) {\n  .section-form .stepper-form-container .stepper-header .dark-line {\n    max-width: 20px;\n  }\n}\n.section-form .stepper-form-container .stepper-header .light-line {\n  width: 32px;\n  stroke-width: 2px;\n  stroke: #052BA6;\n}\n@media only screen and (max-width: 768px) {\n  .section-form .stepper-form-container .stepper-header .light-line {\n    max-width: 20px;\n  }\n}\n.section-form .stepper-form-container .stepper-text {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.section-form .stepper-form-container .stepper-text .title-text {\n  align-self: stretch;\n  color: #010514;\n  text-align: center;\n  font-family: Montserrat;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.section-form .stepper-form-container .stepper-text .text {\n  color: rgba(1, 5, 20, 0.8);\n  text-align: center;\n  font-family: Roboto;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 150%; /* 24px */\n}\n.section-form .stepper-form-container .location-type-section, .section-form .stepper-form-container .location-capacity-section {\n  display: flex;\n  width: 512px;\n  align-items: flex-start;\n  align-content: flex-start;\n  gap: 32px var(--gap-2lg, 32px);\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 768px) {\n  .section-form .stepper-form-container .location-type-section, .section-form .stepper-form-container .location-capacity-section {\n    max-width: 350px;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .section-form .stepper-form-container .location-type-section, .section-form .stepper-form-container .location-capacity-section {\n    max-width: 300px;\n  }\n}\n.section-form .stepper-form-container .county-select {\n  display: flex;\n  flex: 1 0 0;\n  padding: var(--gap-sm, 8px);\n  align-items: center;\n  gap: var(--gap-sm, 8px);\n  align-self: stretch;\n  border-radius: var(--radius-radius-sm, 4px);\n  border: 1px solid var(--colors-neutral-400, #94A3B8);\n  background: var(--colors-white, #FFF);\n  color: rgba(1, 5, 20, 0.8);\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 130%; /* 18.2px */\n  letter-spacing: 0.28px;\n}\n.section-form .stepper-form-container .stepper-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 16px;\n}\n.section-form .stepper-form-container .stepper-buttons .btn-prev {\n  display: flex;\n  padding: 12px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 4px;\n  border: 1px solid #D7E0FE;\n  background: #D7E0FE;\n  color: #010514;\n  font-family: Roboto;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.section-form .stepper-form-container .stepper-buttons .btn-next {\n  display: flex;\n  padding: 12px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 4px;\n  background: #052BA6;\n  border: 1px solid #052BA6;\n  color: #FBFFFE;\n  font-family: Roboto;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.section-form .stepper-form-container .stepper-buttons .btn-next:disabled {\n  background: rgb(251, 255, 254);\n  border: 1px solid rgba(1, 5, 20, 0.2);\n  color: rgba(1, 5, 20, 0.2);\n}\n\n/* The container */\n.container-check {\n  display: block;\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  text-align: left;\n  width: auto;\n}\n\n/* Hide the browser's default checkbox */\n.container-check input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border: 1px solid rgba(1, 5, 20, 0.3);\n  border-radius: 4px;\n}\n\n/* On mouse-over, add a grey background color */\n.container-check:hover input ~ .checkmark {\n  background-color: rgba(1, 5, 20, 0.2);\n}\n\n/* When the checkbox is checked, add a blue background */\n.container-check input:checked ~ .checkmark {\n  background-color: rgb(5, 43, 166);\n  border: 1px solid rgb(5, 43, 166);\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.container-check input:checked ~ .checkmark:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n.container-check .checkmark:after {\n  left: 7px;\n  top: 3px;\n  width: 4.5px;\n  height: 9.5px;\n  border: solid rgb(251, 255, 254);\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.footer-section {\n  padding: 80px 0;\n  background: #052BA6;\n}\n@media only screen and (max-width: 576px) {\n  .footer-section {\n    padding: 64px 0;\n  }\n}\n.footer-section .container > div:first-child {\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n  max-width: 567px;\n  margin-bottom: 64px;\n}\n.footer-section .container > div:first-child img {\n  height: 35px;\n  width: 165px;\n  align-self: center;\n}\n.footer-section .container > div:first-child > p {\n  align-self: center;\n  color: rgba(251, 255, 254, 0.8);\n  text-align: center;\n  font-family: Roboto, serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 150%;\n  max-width: 382px;\n  opacity: 0.5;\n}\n.footer-section .container > div:first-child > div:nth-child(3) p {\n  color: #FBFFFE;\n  font-family: Montserrat, serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n@media only screen and (max-width: 576px) {\n  .footer-section .container > div:first-child > div:nth-child(3) {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n.footer-section .container > div:first-child > div:last-child {\n  align-self: center;\n  width: 133px;\n}\n.footer-section .container > div:first-child > div:last-child i {\n  font-size: 22px;\n  color: #FBFFFE;\n}\n.footer-section .container > p {\n  text-align: center;\n  color: rgba(251, 255, 254, 0.3);\n  font-family: Montserrat, serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n\n@media only screen and (max-width: 576px) {\n  .ue-logo {\n    font-size: 12px;\n  }\n  .ue-logo img, .ue-logo p {\n    width: 75% !important;\n  }\n}\n\n.landing-form-field ::ng-deep.mat-form-field-infix {\n  font-size: 16px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/standalone-components/landing-form/landing-form.component.scss"],"names":[],"mappings":"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","sourcesContent":["*:not(input.field) {\n  user-select: none;\n}\n\n.cursor{\n  cursor: pointer;\n}\n\nh1 {\n  color: #000;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 40px;\n  font-size: clamp(1.5rem, 0.576923076923077rem + 2.564102564102564vw, 2.5rem);\n}\n\nh2 {\n  color: #010514;\n  text-align: center;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 32px;\n  font-size: clamp(1.25rem, 0.5576923076923077rem + 1.9230769230769231vw, 2rem);\n}\n\nh3 {\n  color: #010514;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 0;\n  font-size: 24px;\n  font-size: clamp(1.125rem, 0.7788461538461539rem + 0.9615384615384616vw, 1.5rem);\n}\n\np {\n  color: rgba(1, 5, 20, 0.80);\n  font-family: Roboto, serif;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 150%;\n  margin-bottom: 0;\n}\n\na, .language {\n  color: #010514;\n  font-family: Montserrat, serif;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  cursor: pointer;\n}\n\np.fs-24 {\n  font-size: 24px;\n  font-size: clamp(1rem, 0.5384615384615385rem + 1.282051282051282vw, 1.5rem);\n}\n\np.fs-20 {\n  font-size: 20px;\n  font-size: clamp(0.875rem, 0.5288461538461539rem + 0.9615384615384616vw, 1.25rem);\n}\n\np.fs-16, a.fs-16, .language {\n  font-size: 16px;\n  font-size: clamp(0.75rem, 0.5192307692307693rem + 0.641025641025641vw, 1rem);\n}\n\n.icon-tile {\n  width: 48px;\n  height: 48px;\n  border-radius: 4px;\n  background: #D7E0FE;\n  padding: 8px;\n\n  @media only screen and (max-width: 576px) {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n.nav-up {\n  top: -80px!important;\n}\n\n.navbar {\n  //height: 80px;\n  background: #FBFFFE;\n  box-shadow: 0 4px 23px 0 rgba(1, 5, 20, 0.10);\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  top: 0;\n  transition: top 0.2s ease-in-out;\n\n  @media only screen and (max-width: 992px) {\n    //height: 48px;\n\n    .container-xl{\n      justify-content: center;\n    }\n\n    a.navbar-toggler {\n      border: none!important;\n      i{\n        color: #0D4494;\n      }\n    }\n  }\n\n  .navbar-brand img {\n    width: auto;\n    height: 48px;\n\n    @media only screen and (max-width: 576px) {\n      height: 24px;\n    }\n  }\n\n  ul {\n    gap: 24px;\n\n    @media only screen and (max-width: 576px) {\n      gap: 0;\n    }\n\n    .nav-link {\n      padding-left: 0;\n      padding-right: 0;\n    }\n  }\n}\n\n.btn-partner {\n  display: flex;\n  padding: 12px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border: none;\n  border-radius: 4px;\n  background: #052BA6;\n\n  color: #FBFFFE;\n  font-family: Roboto, serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n\n  &:hover {\n    opacity: 0.7;\n  }\n}\n\n.language {\n  border: none;\n  background: #FBFFFE;\n}\n\n.notification-tile {\n  position: absolute;\n  display: inline-flex;\n  padding: 14px 16px;\n  align-items: center;\n  gap: 16px;\n  border-radius: 8px;\n  background: #FFF;\n  box-shadow: 0 4px 23px 0 rgba(1, 5, 20, 0.15);\n  max-width: 320px;\n\n  @media only screen and (max-width: 576px) {\n    img {\n      width: 16px;\n    }\n  }\n}\n\n.section-form {\n  display: flex;\n  width: 1440px;\n  padding: 80px 100px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 64px;\n\n  @media only screen and (max-width: 576px) {\n    padding: 16px 0 32px 0;\n    height: fit-content;\n  }\n\n  .title-signup {\n    color: #010514;\n\n    text-align: center;\n    font-family: Montserrat;\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: normal;\n  }\n\n  .stepper-form-container {\n\n    @media only screen and (max-width: 768px) {\n      max-width: 400px;\n      padding: 24px;\n    }\n\n    @media only screen and (max-width: 576px) {\n      max-width: 350px;\n      padding: 24px;\n    }\n\n    width: 608px;\n    display: flex;\n    padding: 24px 48px;\n    flex-direction: column;\n    align-items: center;\n    gap: 64px;\n    margin-top: 64px;\n\n    border-radius: var(--radius-radius-sm, 4px);\n\n    background: #FBFFFE;\n\n    box-shadow: 0 4px 23px 0 rgba(1, 5, 20, 0.10);\n\n    .stepper-header {\n      display: flex;\n      align-items: center;\n      gap: 4px;\n\n      .step-number {\n        cursor: pointer;\n        min-width: 32px;\n        max-width: 32px;\n        height: 32px;\n        border-radius: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-family: Roboto;\n        font-size: 16px;\n        font-style: normal;\n        font-weight: 300;\n        line-height: normal;\n      }\n\n      .dark-blue {\n        background-color: #052BA6;\n        color: #FBFFFE;\n      }\n\n      .light-blue {\n        background-color: #D7E0FE;\n        color: #010514;\n      }\n\n      .dark-line {\n        width: 32px;\n        stroke-width: 2px;\n        stroke: #D7E0FE;\n\n        @media only screen and (max-width: 768px) {\n          max-width: 20px;\n        }\n      }\n\n      .light-line {\n\n        @media only screen and (max-width: 768px) {\n          max-width: 20px;\n        }\n        width: 32px;\n        stroke-width: 2px;\n        stroke: #052BA6;\n      }\n    }\n\n    .stepper-text {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 16px;\n\n      .title-text {\n        align-self: stretch;\n        color: #010514;\n        text-align: center;\n        font-family: Montserrat;\n        font-size: 24px;\n        font-style: normal;\n        font-weight: 700;\n        line-height: normal;\n      }\n\n      .text {\n        color: rgba(1, 5, 20, 0.80);\n\n        text-align: center;\n        font-family: Roboto;\n        font-size: 16px;\n        font-style: normal;\n        font-weight: 300;\n        line-height: 150%; /* 24px */\n      }\n\n\n    }\n\n    .location-type-section, .location-capacity-section {\n      display: flex;\n      width: 512px;\n      align-items: flex-start;\n      align-content: flex-start;\n      gap: 32px var(--gap-2lg, 32px);\n\n      flex-wrap: wrap;\n\n      @media only screen and (max-width: 768px) {\n        max-width: 350px;\n      }\n\n      @media only screen and (max-width: 576px) {\n        max-width: 300px;\n      }\n    }\n\n    .county-select {\n      display: flex;\n      flex: 1 0 0;\n      padding: var(--gap-sm, 8px);\n      align-items: center;\n      gap: var(--gap-sm, 8px);\n      align-self: stretch;\n      border-radius: var(--radius-radius-sm, 4px);\n\n      border: 1px solid var(--colors-neutral-400, #94A3B8);\n      background: var(--colors-white, #FFF);\n      color: rgba(1, 5, 20, 0.80);\n\n      font-family: Montserrat;\n      font-size: 16px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 130%; /* 18.2px */\n      letter-spacing: 0.28px;\n    }\n\n    .stepper-buttons {\n      display: flex;\n      justify-content: center;\n      align-items: flex-start;\n      gap: 16px;\n\n      .btn-prev {\n        display: flex;\n        padding: 12px 16px;\n        justify-content: center;\n        align-items: center;\n        gap: 10px;\n        border-radius: 4px;\n        border: 1px solid #D7E0FE;\n        background: #D7E0FE;\n        color: #010514;\n        font-family: Roboto;\n        font-size: 16px;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n      }\n\n      .btn-next {\n        display: flex;\n        padding: 12px 16px;\n        justify-content: center;\n        align-items: center;\n        gap: 10px;\n        border-radius: 4px;\n        background: #052BA6;\n        border: 1px solid #052BA6;\n        color: #FBFFFE;\n        font-family: Roboto;\n        font-size: 16px;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n\n        &:disabled {\n          background: rgba(251, 255, 254, 1);\n          border: 1px solid rgba(1, 5, 20, 0.2);\n          color: rgba(1, 5, 20, 0.2);\n        }\n      }\n    }\n\n  }\n}\n\n/* The container */\n.container-check {\n  display: block;\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  text-align: left;\n  width: auto;\n\n}\n\n/* Hide the browser's default checkbox */\n.container-check input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border: 1px solid rgba(1, 5, 20, 0.3);\n  border-radius: 4px;\n}\n\n/* On mouse-over, add a grey background color */\n.container-check:hover input ~ .checkmark {\n  background-color: rgba(1, 5, 20, 0.2);\n}\n\n/* When the checkbox is checked, add a blue background */\n.container-check input:checked ~ .checkmark {\n  background-color: rgba(5, 43, 166, 1);\n  border: 1px solid rgba(5, 43, 166, 1);\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.container-check input:checked ~ .checkmark:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n.container-check .checkmark:after {\n  left: 7px;\n  top: 3px;\n  width: 4.5px;\n  height: 9.5px;\n  border: solid rgba(251, 255, 254, 1);\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.footer-section {\n  padding: 80px 0;\n  background: #052BA6;\n\n  @media only screen and (max-width: 576px) {\n    padding: 64px 0;\n  }\n\n  .container {\n    & > div:first-child {\n      display: flex;\n      flex-direction: column;\n      gap: 48px;\n      max-width: 567px;\n      margin-bottom: 64px;\n\n      img {\n        height: 35px;\n        width: 165px;\n        align-self: center;\n      }\n\n      & > p {\n        align-self: center;\n        color: rgba(251, 255, 254, 0.80);\n        text-align: center;\n        font-family: Roboto, serif;\n        font-size: 16px;\n        font-style: normal;\n        font-weight: 300;\n        line-height: 150%;\n        max-width: 382px;\n        opacity: 0.5;\n      }\n\n      & > div:nth-child(3) {\n        p {\n          color: #FBFFFE;\n          font-family: Montserrat, serif;\n          font-size: 16px;\n          font-style: normal;\n          font-weight: 400;\n          line-height: normal;\n        }\n\n        @media only screen and (max-width: 576px) {\n          flex-direction: column;\n          gap: 8px;\n        }\n      }\n\n      & > div:last-child {\n        align-self: center;\n        width: 133px;\n\n        i {\n          font-size: 22px;\n          color: #FBFFFE;\n        }\n      }\n    }\n\n    & > p {\n      text-align: center;\n      color: rgba(251, 255, 254, 0.30);\n      font-family: Montserrat, serif;\n      font-size: 16px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: normal;\n    }\n  }\n}\n\n.ue-logo{\n  @media only screen and (max-width: 576px) {\n    img, p{\n      width: 75%!important;\n    }\n    font-size: 12px;\n  }\n}\n\n.landing-form-field{\n  ::ng-deep.mat-form-field-infix {\n      font-size: 16px !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 28353:
/*!************************************************************************************!*\
  !*** ./src/app/features/landing-partner/landing-partner.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" [ngClass]=\"!isSticky ?  'nav-up' : ''\">\n    <div  class=\"container-xl\">\n        <a class=\"navbar-brand me-0\" href=\"/parteneri\"><img src=\"assets/images/logos/logo_blue_1.png\" alt=\"bestinform logo\"></a>\n<!--        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">-->\n<!--            <span class=\"navbar-toggler-icon\"></span>-->\n<!--        </button>-->\n<!--        <a class=\"navbar-toggler\" href=\"tel:+40722673283\"><i class=\"fas fa-phone\"></i></a>-->\n        <button class=\"btn-partner show-on-mobile\" [routerLink]=\"pageLang == LangOptions.RO ? '../formular/ro' : '../formular/en'\">Începe</button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mx-auto mb-2 mb-lg-0\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"scroll(home)\">{{menu.home[pageLang]}}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"scroll(characteristics)\" >{{menu.char[pageLang]}}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"scroll(offer)\">{{menu.offer[pageLang]}}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"scroll(benefits)\">{{menu.benefits[pageLang]}}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"scroll(faq)\">FAQs</a>\n                </li>\n                <li class=\"nav-item\">\n<!--                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"scroll(contact)\">Contact</a>-->\n                </li>\n                <li class=\"nav-item align-self-start align-self-sm-center\">\n                    <select class=\"language\" [(ngModel)]=\"pageLang\" (change)=\"changeRoute()\">\n                        <option [value]=\"LangOptions.RO\">RO</option>\n                        <option [value]=\"LangOptions.EN\">EN</option>\n                    </select>\n                </li>\n            </ul>\n            <button class=\"btn-partner\" [routerLink]=\"pageLang == LangOptions.RO ? '../formular/ro' : '../formular/en'\">{{menu.join[pageLang]}}</button>\n        </div>\n    </div>\n</nav>\n\n<section class=\"hero-section d-flex flex-column\">\n    <div class=\"container\">\n        <div class=\"notifications-section\n                    d-flex justify-content-center justify-content-xl-between align-items-center flex-wrap-reverse\" #home>\n            <div class=\"d-flex flex-column align-items-start\">\n\n                <h1>\n                    {{ heroSection.notificationSection.title[pageLang] }}\n                </h1>\n\n                <p class=\"fs-24\">\n                    {{ heroSection.notificationSection.paragraph[pageLang] }}\n                </p>\n\n                <button class=\"btn-partner\" type=\"submit\" #characteristics [routerLink]=\"pageLang == LangOptions.RO ? '../formular/ro' : '../formular/en'\">{{menu.join[pageLang]}}</button>\n\n                <div class=\"d-flex align-items-center\">\n                    <img *ngFor=\"let icon of heroSection.notificationSection.locationsIcons\"\n                         [src]=\"icon.iconPath\" alt=\"location icon\">\n\n                    <p class=\"fs-16\">\n                        {{ heroSection.notificationSection.locationsNr[pageLang] }}\n                    </p>\n                </div>\n            </div>\n\n            <div class=\"d-flex flex-grow-1 position-relative\">\n                <img [src]=\"heroSection.notificationSection.bigImg.imgPath\" alt=\"mobile picture\">\n\n                <div appParallax [parallaxRatio]=\"parallaxRatioNotifications\"\n                     id=\"heart\" class=\"notification-tile\">\n                    <img [src]=\"heroSection.notificationSection.heartImg.imgPath\" alt=\"heart\">\n                </div>\n\n                <div appParallax [parallaxRatio]=\"parallaxRatioNotifications\"\n                     id=\"confetti-top\" class=\"notification-tile\">\n                    <img [src]=\"heroSection.notificationSection.confettiImg.imgPath\" alt=\"confetti\">\n                    <p class=\"fs-16\">{{ heroSection.notificationSection.confettiTxtTop[pageLang] }}</p>\n                </div>\n\n                <div appParallax [parallaxRatio]=\"parallaxRatioNotifications\"\n                     id=\"stars\" class=\"notification-tile\">\n                    <img *ngFor=\"let star of [1,2,3,4,5]\"\n                         [src]=\"heroSection.notificationSection.starImg.imgPath\" alt=\"star {{star}}\">\n                </div>\n\n                <div appParallax [parallaxRatio]=\"parallaxRatioNotifications\"\n                     id=\"confetti-bottom\" class=\"notification-tile\">\n                    <img [src]=\"heroSection.notificationSection.confettiImg.imgPath\" alt=\"confetti\">\n                    <p class=\"fs-16\">{{ heroSection.notificationSection.confettiTxtBottom[pageLang] }}</p>\n                </div >\n            </div>\n        </div>\n\n        <div class=\"images-section position-relative\" >\n            <div class=\"mx-auto\" >\n                <h2>\n                    {{ heroSection.imagesSection.title[pageLang] }}\n                </h2>\n\n                <p class=\"fs-20\">\n                    {{ heroSection.imagesSection.paragraph[pageLang] }}\n                </p>\n            </div>\n\n            <img [src]=\"heroSection.imagesSection.imageLeft.imgPath\"\n                 appParallax [parallaxRatio]=\"parallaxRatioImages\"\n                 id=\"imgLeft\"\n                 class=\"position-absolute d-none d-xxl-inline\"\n                 alt=\"image left\">\n\n            <img [src]=\"heroSection.imagesSection.vectorLeft.imgPath\"\n                 id=\"vectorLeft\"\n                 class=\"position-absolute d-none d-xxl-inline\"\n                 alt=\"line left\">\n\n            <img [src]=\"heroSection.imagesSection.imageCenter.imgPath\"\n                 appParallax [parallaxRatio]=\"parallaxRatioImages\"\n                 id=\"imgCenter\"\n                 alt=\"image center\">\n\n            <img [src]=\"heroSection.imagesSection.vectorRight.imgPath\"\n                 id=\"vectorRight\"\n                 class=\"position-absolute d-none d-xxl-inline\"\n                 alt=\"line right\">\n\n            <img [src]=\"heroSection.imagesSection.imageRight.imgPath\"\n                 appParallax [parallaxRatio]=\"parallaxRatioImages\"\n                 id=\"imgRight\"\n                 class=\"position-absolute d-none d-xxl-inline\"\n                 alt=\"image right\">\n        </div>\n    </div>\n</section>\n\n<section class=\"features-section\" #offer>\n    <div class=\"container\">\n        <div class=\"mx-auto mx-xl-0\">\n            <h2>\n                {{ featuresSection.titleSection.title[pageLang] }}\n            </h2>\n\n            <p class=\"fs-20\">\n                {{ featuresSection.titleSection.paragraph[pageLang] }}\n            </p>\n        </div>\n\n        <div class=\"row\">\n            <div *ngFor=\"let tile of featuresSection.tiles; let tileIndex = index\" class=\"col-12 col-md-6 col-lg-4\">\n                <div class=\"offer-card\">\n                    <img class=\"icon-tile\" [src]=\"tile.icon\" alt=\"offer {{tileIndex}}\">\n                    <h3>\n                        {{ tile.title[pageLang] }}\n                    </h3>\n                    <p class=\"fs-16\">\n                        {{ tile.paragraph[pageLang] }}\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"benefits-section\" #benefits>\n    <div class=\"container\">\n        <div class=\"d-flex justify-content-between align-items-end\">\n            <div>\n                <h2>\n                    {{ benefitsSection.titleSection.title[pageLang] }}\n                </h2>\n\n                <p class=\"fs-20\">\n                    {{ benefitsSection.titleSection.paragraph[pageLang] }}\n                </p>\n            </div>\n\n            <button class=\"btn-partner up\" type=\"submit\" [routerLink]=\"pageLang == LangOptions.RO ? '../formular/ro' : '../formular/en'\">{{menu.start[pageLang]}}</button>\n        </div>\n\n        <div class=\"benefits-slides\" id=\"benefit-slides\">\n            <div>\n                <ng-container *ngFor=\"let benefit of benefitsSection.benefits; index as i\">\n                    <div class=\"benefit-card cursor\" [ngClass]=\"benefit.isActive ? 'is-active' : null\" (click)=\"changeBenefitActive(i)\">\n                        <div class=\"progress-container\">\n                            <div class=\"loading\"></div>\n                        </div>\n                        <div class=\"benefit-info\">\n                            <img class=\"icon-tile\" [src]=\"benefit.iconPath\" alt=\"benefit icon\">\n\n                            <h3>\n                                {{ benefit.title[pageLang] }}\n                            </h3>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"benefit.isActive\"\n                         class=\"d-flex d-xxl-none selected-benefit\">\n                        <img [src]=\"activeBenefit.imgPath\" alt=\"benefit image\">\n\n                        <p class=\"fs-16\">\n                            {{ activeBenefit.description }}\n                        </p>\n                    </div>\n                </ng-container>\n            </div>\n\n            <div class=\"d-none d-xxl-flex selected-benefit\">\n                <img [src]=\"activeBenefit.imgPath\" alt=\"benefit image\">\n\n                <p class=\"fs-16\">\n                    {{ activeBenefit.description }}\n                </p>\n            </div>\n        </div>\n\n        <button class=\"btn-partner down\" type=\"submit\" [routerLink]=\"pageLang == LangOptions.RO ? '../formular/ro' : '../formular/en'\">{{menu.start[pageLang]}}</button>\n\n        <div class=\"clients d-flex flex-column\">\n            <h2>\n                {{ benefitsSection.clientSection.title[pageLang] }}\n            </h2>\n\n            <div>\n                <div *ngFor=\"let client of benefitsSection.clientSection.clients\"\n                    class=\"client-card\">\n                    <div>\n                        <img [src]=\"client.iconPath\" alt=\"client profile\">\n\n                        <div>\n                            <p class=\"fs-16\">{{ client.name }}</p>\n                            <p class=\"fs-16\">{{ client.job }}</p>\n                        </div>\n                    </div>\n\n                    <p class=\"fs-16 \">{{ client.review[pageLang] }}</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</section>\n\n<section class=\"faq-section\" #faq>\n    <div class=\"container\">\n        <h2>\n            {{ faqSection.title[pageLang] }}\n        </h2>\n\n        <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n            <ngb-panel *ngFor=\"let section of faqSection.sections, index as i\">\n                <ng-template ngbPanelHeader let-opened=\"opened\">\n                    <div class=\"question cursor\" (click)=\"acc.toggle('ngb-panel-'+i)\">\n                        <h3>\n                            {{ section.question[pageLang] }}\n                        </h3>\n\n                        <button type=\"button\" ngbPanelToggle class=\"btn-round btn-no-outline\">\n                            <i [ngClass]=\"opened ? 'fas fa-times' : 'fas fa-plus'\"></i>\n                        </button>\n                    </div>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                    <p class=\"fs-16 answer\" [innerHtml]=\"section.answer[pageLang]\">\n                    </p>\n                </ng-template>\n            </ngb-panel>\n        </ngb-accordion>\n\n        <div class=\"d-flex justify-content-center align-items-center w-100\">\n            <button class=\"btn-partner-bigger\" [routerLink]=\"pageLang == LangOptions.RO ? '../formular/ro' : '../formular/en'\">{{menu.join[pageLang]}}</button>\n        </div>\n\n    </div>\n</section>\n\n<footer class=\"footer-section\" #contact>\n     <div class=\"container\">\n         <div class=\"mx-auto\">\n             <img [src]=\"'assets/images/others/partner-landing/Betsinform_logo.png'\" alt=\"bestinform white logo\">\n\n             <p>{{footer.text[pageLang]}}</p>\n\n             <div class=\"d-flex justify-content-between align-items-center\">\n                 <p class=\"fs-16 cursor\" (click)=\"scroll(home)\">{{menu.home[pageLang]}}</p>\n                 <p class=\"fs-16 cursor\" (click)=\"scroll(characteristics)\">{{menu.char[pageLang]}}</p>\n                 <p class=\"fs-16 cursor\" (click)=\"scroll(offer)\">{{menu.offer[pageLang]}}</p>\n                 <p class=\"fs-16 cursor\" (click)=\"scroll(benefits)\">{{menu.benefits[pageLang]}}</p>\n                 <p class=\"fs-16 cursor\" (click)=\"scroll(faq)\">FAQs</p>\n<!--                 <p class=\"fs-16\" (click)=\"scroll(contact)\">Contact</p>-->\n             </div>\n\n             <div class=\"d-flex justify-content-between align-items-center\">\n                 <a href=\"tel:+40722673283\"><i class=\"fas fa-phone\"></i></a>\n                 <a target=\"_blank\" href=\"https://www.facebook.com/profile.php?id=100076116217462\"><i class=\"fab fa-facebook-f\"></i></a>\n                 <a target=\"_blank\" href=\"https://www.tiktok.com/@bestinform\"><i class=\"fab fa-tiktok\"></i></a>\n                 <a target=\"_blank\" href=\"https://www.instagram.com/bestinform.app/?igshid=OGQ5ZDc2ODk2ZA%3D%3D\"><i class=\"fab fa-instagram\"></i></a>\n             </div>\n         </div>\n\n         <p class=\"fs-16\">\n             © Bestinform 2023. All Rights Reserved.\n         </p>\n     </div>\n</footer>\n<div class=\"ue-logo d-flex justify-content-center align-items-center w-100 flex-wrap\">\n    <img src=\"assets/images/logos/fonduri-ue.png\" class=\"w-25\">\n    <p class=\"w-25 mb-0\">Pentru informaţii\n        detaliate despre celelalte programe cofinanţate de Uniunea\n        Europeană, vă invităm să vizitaţi <a href=\"https://www.fonduri-ue.ro/\" target=\"_blank\">www.fonduri-ue.ro\n        </a></p>\n</div>\n\n";

/***/ }),

/***/ 32314:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/feedback-page/feedback-page.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container d-flex flex-column justify-content-center align-items-center\">\n    <img src=\"assets/images/logos/logo_blue_1.png\" alt=\"logo\">\n    <p class=\"mb-0 success-text\">{{text.successMsg[pageLang]}}</p>\n    <button class=\"btn-back\" (click)=\"goToPartnerHP()\">{{text.button[pageLang]}}</button>\n</div>";

/***/ }),

/***/ 47530:
/*!*******************************************************************************************!*\
  !*** ./src/app/standalone-components/landing-form/landing-form.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\n    <div  class=\"container-xl\">\n        <a class=\"navbar-brand me-0\" href=\"/parteneri\"><img src=\"assets/images/logos/logo_blue_1.png\" alt=\"bestinform logo\"></a>\n<!--        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">-->\n<!--            <span class=\"navbar-toggler-icon\"></span>-->\n<!--        </button>-->\n<!--        <a class=\"navbar-toggler\" href=\"tel:+40722673283\"><i class=\"fas fa-phone\"></i></a>-->\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mx-auto mb-2 mb-lg-0\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"goToHome()\">{{menu.home[pageLang]}}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"goToHome()\">{{menu.char[pageLang]}}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"goToHome()\">{{menu.offer[pageLang]}}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"goToHome()\">{{menu.benefits[pageLang]}}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"goToHome()\">FAQs</a>\n                </li>\n                <li class=\"nav-item\">\n<!--                    <a class=\"nav-link fs-16\" aria-current=\"page\" (click)=\"scroll(contact)\">Contact</a>-->\n                </li>\n                <li class=\"nav-item align-self-start align-self-sm-center\">\n                    <select class=\"language\" [(ngModel)]=\"pageLang\" (change)=\"changeRoute()\">\n                        <option [value]=\"LangOptions.RO\">RO</option>\n                        <option [value]=\"LangOptions.EN\">EN</option>\n                    </select>\n                </li>\n            </ul>\n<!--            <button class=\"btn-partner\" type=\"submit\">{{menu.join[pageLang]}}</button>-->\n        </div>\n    </div>\n</nav>\n\n<div class=\"section-form w-100\">\n<!--    <p class=\"title-signup mb-0\">{{pageTitle.title[pageLang]}}</p>-->\n    <div class=\"stepper-form-container\">\n        <div class=\"stepper-header\">\n            <div class=\"step-number dark-blue\" (click)=\"changeStep(0)\">1</div>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"2\" viewBox=\"0 0 34 2\" fill=\"none\"\n                 [ngClass]=\"currentStep < 1? 'dark-line' : 'light-line'\">\n                <path d=\"M1 1H33\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/>\n            </svg>\n            <div class=\"step-number\" [ngClass]=\"currentStep > 0 ? 'dark-blue' : 'light-blue'\" (click)=\"changeStep(1)\">2\n            </div>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"2\" viewBox=\"0 0 34 2\" fill=\"none\" class=\"line\"\n                 [ngClass]=\"currentStep < 2 ? 'dark-line' : 'light-line'\">\n                <path d=\"M1 1H33\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/>\n            </svg>\n            <div class=\"step-number\" [ngClass]=\"currentStep > 1 ? 'dark-blue' : 'light-blue'\" (click)=\"changeStep(2)\">3\n            </div>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"2\" viewBox=\"0 0 34 2\" fill=\"none\" class=\"line\"\n                 [ngClass]=\"currentStep < 3 ? 'dark-line' : 'light-line'\">\n                <path d=\"M1 1H33\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/>\n            </svg>\n            <div class=\"step-number\" [ngClass]=\"currentStep > 2 ? 'dark-blue' : 'light-blue'\" (click)=\"changeStep(3)\">4\n            </div>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"2\" viewBox=\"0 0 34 2\" fill=\"none\" class=\"line\"\n                 [ngClass]=\"currentStep < 4 ? 'dark-line' : 'light-line'\">\n                <path d=\"M1 1H33\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/>\n            </svg>\n            <div class=\"step-number\" [ngClass]=\"currentStep > 3 ? 'dark-blue' : 'light-blue'\" (click)=\"changeStep(4)\">5\n            </div>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"2\" viewBox=\"0 0 34 2\" fill=\"none\" class=\"line\"\n                 [ngClass]=\"currentStep < 5 ? 'dark-line' : 'light-line'\">\n                <path d=\"M1 1H33\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/>\n            </svg>\n            <div class=\"step-number\" [ngClass]=\"currentStep > 4 ? 'dark-blue' : 'light-blue'\" (click)=\"changeStep(5)\">6\n            </div>\n        </div>\n\n        <div class=\"stepper-text\" *ngIf=\"currentStep === 0\">\n            <p class=\"mb-0 title-text\">{{form.firstStep.title[pageLang]}}</p>\n            <p class=\"mb-0 text\">{{form.firstStep.content[pageLang]}}</p>\n        </div>\n\n        <div class=\"stepper-text\" *ngIf=\"currentStep === 1\">\n            <p class=\"mb-0 title-text\">{{form.secondStep.title[pageLang]}}</p>\n            <p class=\"mb-0 text\">{{form.secondStep.content[pageLang]}}</p>\n        </div>\n\n        <div class=\"stepper-text\" *ngIf=\"currentStep === 2\">\n            <p class=\"mb-0 title-text\">{{form.thirdStep.title[pageLang]}}</p>\n            <p class=\"mb-0 text\">{{form.thirdStep.content[pageLang]}}</p>\n        </div>\n\n        <div class=\"stepper-text\" *ngIf=\"currentStep === 3\">\n            <p class=\"mb-0 title-text\">{{form.fourthStep.title[pageLang]}}</p>\n            <p class=\"mb-0 text\">{{form.fourthStep.content[pageLang]}}</p>\n        </div>\n\n        <div class=\"stepper-text\" *ngIf=\"currentStep === 4\">\n            <p class=\"mb-0 title-text\">{{form.fifthStep.title[pageLang]}}</p>\n            <p class=\"mb-0 text\">{{form.fifthStep.content[pageLang]}}</p>\n        </div>\n\n        <div class=\"stepper-text\" *ngIf=\"currentStep === 5\">\n            <p class=\"mb-0 title-text\">{{form.sixthStep.title[pageLang]}}</p>\n            <p class=\"mb-0 text\">{{form.sixthStep.content[pageLang]}}</p>\n        </div>\n\n        <form class=\"w-100\" [formGroup]=\"contentForm\">\n            <mat-form-field class=\"w-100 landing-form-field\" *ngIf=\"currentStep === 0\" appearance=\"legacy\">\n                <mat-label>{{form.firstStep.field[pageLang]}}</mat-label>\n                <input matInput formControlName=\"initName\">\n                <mat-error *ngIf=\"contentForm.get('initName').hasError('required')\">{{errorMsg.requiredMsg[pageLang]}}\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field class=\"w-100 landing-form-field\" *ngIf=\"currentStep === 1\">\n                <mat-label>{{form.secondStep.field[pageLang]}}</mat-label>\n                <input matInput formControlName=\"initEmail\">\n                <mat-error *ngIf=\"contentForm.get('initEmail').hasError('required')\">{{errorMsg.requiredMsg[pageLang]}}\n                </mat-error>\n                <mat-error *ngIf=\"contentForm.get('initEmail').hasError('email')\">{{errorMsg.emailMsg[pageLang]}}</mat-error>\n            </mat-form-field>\n\n            <div formGroupName=\"locationType\" class=\"location-type-section\" *ngIf=\"currentStep === 2\">\n                <label class=\"container-check\">Restaurant\n                    <input type=\"radio\" name=\"locationType\" value=\"Restaurant\" formControlName=\"locationType\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"container-check\">Hotel\n                    <input type=\"radio\" name=\"locationType\" value=\"Hotel\" formControlName=\"locationType\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"container-check\">{{form.thirdStep.field.club[pageLang]}}\n                    <input type=\"radio\" name=\"locationType\" value=\"{{form.thirdStep.field.club[pageLang]}}\" formControlName=\"locationType\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"container-check\">{{form.thirdStep.field.museum[pageLang]}}\n                    <input type=\"radio\" name=\"locationType\" value=\"Muzeu\" formControlName=\"locationType\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"container-check\">{{form.thirdStep.field.sport[pageLang]}}\n                    <input type=\"radio\" name=\"locationType\" value=\"{{form.thirdStep.field.sport[pageLang]}}\" formControlName=\"locationType\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"container-check\">{{form.thirdStep.field.cinema[pageLang]}}\n                    <input type=\"radio\" name=\"locationType\" value=\"{{form.thirdStep.field.cinema[pageLang]}}\" formControlName=\"locationType\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"container-check\">{{form.thirdStep.field.other[pageLang]}}\n                    <input type=\"radio\" name=\"locationType\" value=\"{{form.thirdStep.field.other[pageLang]}}\" formControlName=\"locationType\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n\n            <div class=\"w-100\" *ngIf=\"currentStep === 3\">\n                <select class=\"w-100 county-select\" formControlName=\"county\">\n                    <option value=\"\">{{form.fourthStep.field[pageLang]}}</option>\n                    <option *ngFor=\"let county of counties\" [value]=\"county\">{{county}}</option>\n                </select>\n            </div>\n\n            <div formGroupName=\"salesVolume\" class=\"location-capacity-section\" *ngIf=\"currentStep === 4\">\n                <label class=\"container-check\">{{form.fifthStep.field[pageLang]}}\n                    <input type=\"radio\" name=\"salesVolume\" value=\"Sub 50\" formControlName=\"salesVolume\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"container-check\">50 - 100\n                    <input type=\"radio\" name=\"salesVolume\" value=\"50 - 100\" formControlName=\"salesVolume\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"container-check\">100 - 500\n                    <input type=\"radio\" name=\"salesVolume\" value=\"100 - 500\" formControlName=\"salesVolume\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"container-check\">500 - 1000\n                    <input type=\"radio\" name=\"salesVolume\" value=\"500 - 1000\" formControlName=\"salesVolume\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"container-check\">1000 - 5000\n                    <input type=\"radio\" name=\"salesVolume\" value=\"1000 - 5000\" formControlName=\"salesVolume\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"container-check\">5000+\n                    <input type=\"radio\" name=\"salesVolume\" value=\"5000+\" formControlName=\"salesVolume\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n\n            <div formGroupName=\"lastForm\" class=\"form-section w-100\" *ngIf=\"currentStep === 5\">\n                <mat-form-field class=\"w-100 landing-form-field\" appearance=\"legacy\">\n                    <mat-label>{{form.sixthStep.field.name[pageLang]}}</mat-label>\n                    <input matInput formControlName=\"name\">\n                    <mat-error *ngIf=\"contentForm.get('lastForm.name').hasError('required')\">{{errorMsg.requiredMsg[pageLang]}}\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100 landing-form-field\" appearance=\"legacy\">\n                    <mat-label>{{form.sixthStep.field.location[pageLang]}}</mat-label>\n                    <input matInput formControlName=\"locationName\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100 landing-form-field\" appearance=\"legacy\">\n                    <mat-label>{{form.sixthStep.field.phone[pageLang]}}</mat-label>\n                    <input matInput formControlName=\"telephone\">\n                    <mat-error *ngIf=\"contentForm.get('lastForm.telephone').hasError('required')\">{{errorMsg.requiredMsg[pageLang]}}\n                    </mat-error>\n                    <mat-error *ngIf=\"contentForm.get('lastForm.telephone').hasError('pattern')\">{{errorMsg.phoneMsg[pageLang]}}\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100 landing-form-field\" appearance=\"legacy\">\n                    <mat-label>{{form.sixthStep.field.email[pageLang]}}</mat-label>\n                    <input matInput formControlName=\"email\">\n                    <mat-error *ngIf=\"contentForm.get('lastForm.email').hasError('required')\">{{errorMsg.requiredMsg[pageLang]}}\n                    </mat-error>\n                    <mat-error *ngIf=\"contentForm.get('lastForm.email').hasError('email')\">{{errorMsg.emailMsg[pageLang]}}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n        </form>\n        <div class=\"stepper-buttons\">\n            <button class=\"btn-prev\" *ngIf=\"currentStep > 0\" (click)=\"changeStep(currentStep-1)\">{{buttons.back[pageLang]}}</button>\n            <button class=\"btn-next\" *ngIf=\"currentStep < 5\" (click)=\"changeStep(currentStep+1)\">{{buttons.next[pageLang]}}</button>\n            <button class=\"btn-next\" *ngIf=\"currentStep === 5\" (click)=\"sendForm();\"\n                    [disabled]=\"isSubmitLoading\">\n                <ng-container *ngIf=\"isSubmitLoading===false\">\n                    {{buttons.finish[pageLang]}}\n                </ng-container>\n                <ng-container *ngIf=\"isSubmitLoading === true\">\n                      <span [style.display]=\"'block'\" class=\"indicator-progress\">\n                        {{buttons.finishing[pageLang] + ' '}}\n                          <span\n                                  class=\"spinner-border spinner-border-sm align-middle ms-2\"\n                          ></span>\n                      </span>\n                </ng-container>\n            </button>\n        </div>\n    </div>\n</div>\n\n<!--<footer class=\"footer-section\" #contact>-->\n<!--    <div class=\"container\">-->\n<!--        <div class=\"mx-auto\">-->\n<!--            <img [src]=\"'assets/images/others/partner-landing/Betsinform_logo.png'\" alt=\"bestinform white logo\">-->\n\n<!--            <p>{{footer.text[pageLang]}}</p>-->\n\n<!--            <div class=\"d-flex justify-content-between align-items-center\">-->\n<!--                <p class=\"fs-16 cursor\" (click)=\"goToHome()\">{{menu.home[pageLang]}}</p>-->\n<!--                <p class=\"fs-16 cursor\" (click)=\"goToHome()\">{{menu.offer[pageLang]}}</p>-->\n<!--                <p class=\"fs-16 cursor\" (click)=\"goToHome()\">{{menu.char[pageLang]}}</p>-->\n<!--                <p class=\"fs-16 cursor\" (click)=\"goToHome()\">{{menu.benefits[pageLang]}}</p>-->\n<!--                <p class=\"fs-16 cursor\" (click)=\"goToHome()\">FAQs</p>-->\n<!--&lt;!&ndash;                <p class=\"fs-16\" (click)=\"scroll(contact)\">Contact</p>&ndash;&gt;-->\n<!--            </div>-->\n\n<!--            <div class=\"d-flex justify-content-between align-items-center\">-->\n<!--                <a target=\"_blank\" href=\"https://www.facebook.com/profile.php?id=100076116217462\"><i class=\"fab fa-facebook-f\"></i></a>-->\n<!--                <a href=\"tel:+40722673283\"><i class=\"fas fa-phone\"></i></a>-->\n<!--                <a target=\"_blank\" href=\"https://www.tiktok.com/@bestinform\"><i class=\"fab fa-tiktok\"></i></a>-->\n<!--                <a target=\"_blank\" href=\"https://www.instagram.com/bestinform.app/?igshid=OGQ5ZDc2ODk2ZA%3D%3D\"><i class=\"fab fa-instagram\"></i></a>-->\n<!--            </div>-->\n<!--        </div>-->\n\n<!--        <p class=\"fs-16\">-->\n<!--            © Bestinform 2023. All Rights Reserved.-->\n<!--        </p>-->\n<!--    </div>-->\n<!--</footer>-->\n\n<div class=\"ue-logo d-flex justify-content-center align-items-center w-100 flex-wrap\">\n    <img src=\"assets/images/logos/fonduri-ue.png\" class=\"w-25\">\n    <p class=\"w-25 mb-0\">Pentru informaţii\n        detaliate despre celelalte programe cofinanţate de Uniunea\n        Europeană, vă invităm să vizitaţi <a href=\"https://www.fonduri-ue.ro/\" target=\"_blank\">www.fonduri-ue.ro\n        </a></p>\n</div>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_landing-partner_landing-partner_module_ts.js.map