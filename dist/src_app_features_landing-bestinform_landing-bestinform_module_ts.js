(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_landing-bestinform_landing-bestinform_module_ts"],{

/***/ 73095:
/*!*****************************************************************************!*\
  !*** ./src/app/features/landing-bestinform/landing-bestinform.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingBestinformComponent": () => (/* binding */ LandingBestinformComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _landing_bestinform_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-bestinform.component.html?ngResource */ 67058);
/* harmony import */ var _landing_bestinform_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-bestinform.component.scss?ngResource */ 40103);
/* harmony import */ var _landing_bestinform_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_landing_bestinform_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _landing_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-service.service */ 89219);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);








let LandingBestinformComponent = class LandingBestinformComponent {
  constructor(router, route, fb, landingService, toastService) {
    this.router = router;
    this.route = route;
    this.fb = fb;
    this.landingService = landingService;
    this.toastService = toastService;
    this.isFormLoading = false;
    this.hero = {
      title: '',
      subtitle: '',
      content: ''
    };
    this.heroEn = {
      title: 'increase YOUR BUSINESS revenue!',
      subtitle: 'DISCOVER THE ADVANTAGES OF BESTINFORM',
      content: 'Fill out the form and we will contact you to provide you with support for registering in the application'
    };
    this.heroRo = {
      title: 'crește-ȚI cifra de AFACERi acum!',
      subtitle: 'DESCOPERĂ AVANTAJELE BESTINFORM',
      content: 'Completează formularul și noi te contactăm ca să îți oferim sprijin pentru înscrierea în aplicație'
    };
    this.form = {
      title: '',
      subtitle: '',
      gdprInfo: '',
      gdprBtn: '',
      button: '',
      name: '',
      email: '',
      phone: ''
    };
    this.formEn = {
      title: 'Start',
      subtitle: 'Be among the first to discover new opportunities',
      gdprInfo: 'I have read and agree to the processing of this data, according to the ',
      gdprBtn: 'Privacy Policy',
      button: 'Send',
      name: 'Name and surname',
      email: 'Email address',
      phone: 'Phone Number'
    };
    this.formRo = {
      title: 'Start',
      subtitle: 'Fii printre primii care descoperă noi oportunități',
      gdprInfo: 'Am citit și sunt de acord cu prelucrarea acestor date, conform ',
      gdprBtn: 'Politicii de confidențialitate',
      button: 'Trimiteți',
      name: 'Nume și prenume',
      email: 'Adresă de email',
      phone: 'Număr de telefon'
    };
    this.whoWeAre = {
      title: '',
      subtitle: '',
      content: '',
      carouselItems: [{
        icon: '',
        text: ''
      }]
    };
    this.whoWeAreEn = {
      title: 'Who we are?',
      subtitle: 'All-in-one platform powered by artificial intelligence that will revolutionize your business',
      content: 'Making it the go-to platform for planning and booking their next adventure, either if that is a holiday, bussiness travel or spending day by day their time in the city they live in.',
      carouselItems: [{
        icon: 'assets/images/others/landing/res-types-1.png',
        text: 'Attractions, cinemas, special experiences, events, sports'
      }, {
        icon: 'assets/images/others/landing/res-types-2.png',
        text: 'Flights, transportation'
      }, {
        icon: 'assets/images/others/landing/res-types-3.png',
        text: 'Hotels, restaurants, Caterings'
      }]
    };
    this.whoWeAreRo = {
      title: 'Cine suntem?',
      subtitle: 'Platformă all-in-one alimentată de inteligență artificială care îți va revoluționa business-ul',
      content: 'Destinația favorită a clienților tăi pentru planificarea/rezervarea activităților zilnice și a călătoriilor.',
      carouselItems: [{
        icon: 'assets/images/others/landing/res-types-1.png',
        text: 'Atracții, cinematografe, experiențe speciale, evenimente, sport'
      }, {
        icon: 'assets/images/others/landing/res-types-2.png',
        text: 'Zboruri, transport'
      }, {
        icon: 'assets/images/others/landing/res-types-3.png',
        text: 'Hoteluri, restaurante, catering'
      }]
    };
    this.benefits = {
      title: '',
      items: [{
        title: '',
        content: ''
      }]
    };
    this.benefitsEn = {
      title: 'Your benefits after registering in the Bestinform App',
      items: [{
        title: 'Channel Manager',
        content: 'The Bestinform platform contains an integrated system with a user-friendly interface called "Channel Manager". Through it, the partner can manage the complete booking flow and manage data about offers and availability. At the same time, through Channel Manager, the partner receives notifications about user interactions with the listed property, consults the Booking Register, communicates with users via the platform messaging, quotes technical support, checks the real-time updated balance, generates and exports reports about the partnership progress.'
      }, {
        title: 'Reliable Bookings',
        content: 'Bestinform assures the partner of the integrity of the reservations and eliminates potential fraudulent reservations that can confuse the availability and activity of the property.'
      }, {
        title: 'Identify Consumers',
        content: 'Bestinform helps to correctly identify the type of consumer among your users. A rating (Standard/Premium/VIP) is available in the Booking Register for each user making a booking. The partner also has the possibility to give a rating to users with confirmed bookings.'
      }, {
        title: 'Promotion',
        content: 'We promote your property through artificial intelligence algorithms, achieving a high match rate of your profile and services with the consumer profiles of the platform users. (In short, we bring the right customers to your location).'
      }, {
        title: 'Technical Support',
        content: 'Dedicated technical support for correct registration in the platform, collection of relevant data and multimedia content, video tutorial and manual for using the Channel Manager system, 24/7 technical support with dedicated agent.'
      }, {
        title: 'Optimal Display',
        content: 'We display, in an optimal and efficient format, all data about the property, facilities, menu, services and representative products. Multimedia content allows uploading of video files.'
      }, {
        title: 'Prepaid bookings',
        content: 'To guarantee your booking, the Channel Manager also offers the possibility to facilitate prepaid bookings, depending on the partner\'s predefined options.'
      }, {
        title: 'Generated codes',
        content: 'All bookings made on the basis of online availability are generated and transmitted via an electronic form (E-Voucher), which contains a QR code and data about the user and his/her requests.'
      }, {
        title: 'APIs',
        content: 'If the partner uses its own booking management system, it can be connected via API to the Channel Manager system.'
      }, {
        title: 'Own policies',
        content: 'The Partner is free to set its own policies for changing or cancelling reservations'
      }]
    };
    this.benefitsRo = {
      title: 'Beneficiile tale după înscrierea în Bestinform App',
      items: [{
        title: 'Channel Manager',
        content: 'Platforma Bestinform conține un sistem integrat, cu o interfață user-friendly, denumit „Channel Manager”. Prin intermediul acestuia, partenerul poate gestiona  fluxul complet de rezervări și administra datele despre oferte și disponibilitatea acestora. Totodată, prin Channel Manager, partenerul primește notificări despre interacțiunile utilizatorilor cu proprietatea listată, consultă Registrul de rezervări, comunică, prin mesageria platformei, cu utilizatorii, cotactează suportul tehnic, verifică balanța actualizată în timp real, generează și exportă rapoarte despre evoluția parteneriatului.'
      }, {
        title: 'Integritatea rezervărilor',
        content: 'Bestinform asigură partenerul de integritatea rezervărilor și elimină potențialele rezervări frauduloase ce pot încurca disponibilitatea și activitatea proprietații.'
      }, {
        title: 'Identificare consumator',
        content: 'Bestinform contribuie la identificarea corectă a tipului de consumator din rândul utilizatorilor. În Registrul de rezervări, este disponibil un rating (Standard/Premium/VIP) pentru fiecare utilizator care efectuează o rezervare. De asemenea, și partenerul are posibilitatea de a acorda un calificativ utilizatorilor cu rezervări confirmate.'
      }, {
        title: 'Promovare',
        content: 'Promovăm proprietatea dumneavoastră prin algoritmi de inteligență artificială, obținând un procent ridicat de potrivire a profilului și serviciilor dumneavoastră cu profilurile de consumator ale utilizatorilor platformei. (Pe scurt, aducem, în locația dumneavoastră, clienții potriviți.)'
      }, {
        title: 'Suport tehnic',
        content: 'Suport tehnic dedicat pentru înregistrarea corectă în platformă, colectarea datelor relevante și a conținutului multimedia, tutorial video și manual pentru utilizarea sistemului Channel Manager, asistență tehnică 24/7 cu agent dedicat.'
      }, {
        title: 'Afișare optimă',
        content: 'Afișăm, într-un format optim și eficient, toate datele despre proprietate, facilități, meniu, servicii și produse reprezentative. Conținutul multimedia permite încărcarea de fișiere video'
      }, {
        title: 'Plată în avans',
        content: 'Pentru garantarea rezervării, în Channel Manager este disponibilă și posibilitatea de facilitare a rezervărilor cu plata în avans, în funcție de opțiunile predefinite ale partenerului.'
      }, {
        title: 'Generare',
        content: 'Toate rezervările efectuate pe bază de disponibilitate online sunt generate și transmise printr-un formular electronic (E-Voucher), care conține un cod QR și date despre utilizator și solicitările acestuia.'
      }, {
        title: 'API',
        content: 'Dacă partenerul utilizează un sistem propriu de gestiune a rezervărilor, acesta poate fi conectat, prin API, la sistemul Channel Manager.'
      }, {
        title: 'Propriile politici',
        content: 'Partenerul are libertatea de a-și stabili propriile politici de modificare sau anulare a rezervărilor.'
      }]
    };
    this.cta = {
      title: '',
      subtitle: ''
    };
    this.ctaEn = {
      title: 'Choose innovation with Bestinform!',
      subtitle: "Fill out the form and we'll call you to discuss how you can take advantage of our platform to grow your business."
    };
    this.ctaRo = {
      title: 'Alege inovația cu Bestinform!',
      subtitle: 'Completează formularul și te sunăm pentru o discuție despre cum poți beneficia de avantajele platformei noastre în creșterea afacerii tale.'
    };
    this.aboutUs = {
      title: '',
      subtitle: '',
      subSubtitle: '',
      items: [{
        title: '',
        content: ''
      }]
    };
    this.aboutUsEn = {
      title: 'Do you want to know even more about us?',
      subtitle: 'All-in-One Platform for Travel and Leisure',
      subSubtitle: 'Personalized experience, complete travel planning, virtual concierge, and single platform convenience all in one.',
      items: [{
        title: 'Personalized Experience',
        content: 'Bestinform builds consumer profiles for each user, learning from their preferences and choices to generate optimized recommendations tailored to their needs.'
      }, {
        title: 'Virtual Concierge',
        content: 'Users have access to a 24/7 virtual concierge through our natural language chatbot, providing personalized suggestions and assistance throughout their journey.'
      }, {
        title: 'Complete Travel Planning',
        content: 'Our platform generates complete travel itineraries, correlating destinations and services offered by our partner network, ensuring a seamless and hassle-free experience.'
      }, {
        title: 'Single Platform Convenience',
        content: 'Bestinform brings together easy discovery, booking, and planning in one convenient platform, eliminating the need for users to juggle multiple websites and applications.'
      }]
    };
    this.aboutUsRo = {
      title: 'Vrei să știi și mai multe despre noi?',
      subtitle: 'Platforma All-in-One pentru călătorii și timp liber',
      subSubtitle: 'Experiență personalizată, planificare completă a călătoriilor, concierge virtual și comoditatea unei platforme unice, toate într-un singur loc.',
      items: [{
        title: 'Experiență personalizată',
        content: 'Bestinform construiește profiluri de consumator pentru fiecare utilizator, învățând din preferințele și alegerile acestora pentru a genera recomandări optimizate, adaptate la nevoile lor.'
      }, {
        title: 'Concierge virtual',
        content: 'Utilizatorii au acces la un concierge virtual 24 de ore din 24, 7 zile din 7, prin intermediul chatbot-ului nostru în limbaj natural, care le oferă sugestii și asistență personalizată pe tot parcursul călătoriei lor.'
      }, {
        title: 'Planificare completă a călătoriilor',
        content: 'Platforma noastră generează itinerarii de călătorie complete, corelând destinațiile și serviciile oferite de rețeaua noastră de parteneri, asigurând o experiență perfectă și fără probleme.'
      }, {
        title: 'Conveniență pe o singură platformă',
        content: 'Bestinform reunește descoperirea, rezervarea și planificarea cu ușurință într-o singură platformă convenabilă, eliminând necesitatea ca utilizatorii să jongleze cu mai multe site-uri web și aplicații.'
      }]
    };
    this.services = {
      title: '',
      subtitle: '',
      items: [{
        photo: '',
        title: '',
        content: ''
      }]
    };
    this.servicesEn = {
      title: 'Catering to diverse user groups',
      subtitle: 'AI-powered travel platform for diverse user groups.',
      items: [{
        photo: 'assets/images/others/landing/time-pressed-travellers.png',
        title: 'Time-pressed travelers',
        content: 'Our platform provides comprehensive solutions to harmonize work and leisure time effortlessly, saving users valuable time and effort.'
      }, {
        photo: 'assets/images/others/landing/tech-savy-travellers.png',
        title: 'Technology savvy travelers',
        content: 'Bestinform caters to tech-savvy travelers, utilizing AI-powered personalized recommendations to help them adapt quickly to new environments.'
      }, {
        photo: 'assets/images/others/landing/family-coord.png',
        title: 'Family coordinators',
        content: 'Bestinform offers family-centric suggestions that prioritize safety and educational value, making travel planning and coordination stress-free for families.'
      }, {
        photo: 'assets/images/others/landing/exp-seekers.png',
        title: 'Experience seekers',
        content: 'Bestinform provides unique and personalized suggestions for neighborhood exploration, romantic escapes, and social gatherings, catering to the desires of experience-seeking individuals.'
      }]
    };
    this.servicesRo = {
      title: 'Servicii pentru diverse grupuri de utilizatori',
      subtitle: 'Platformă de agrement și călătorii alimentată de AI pentru diferite grupuri de utilizatori.',
      items: [{
        photo: 'assets/images/others/landing/time-pressed-travellers.png',
        title: 'Călători presați de timp',
        content: 'Platforma noastră oferă soluții cuprinzătoare pentru a armoniza fără efort timpul de lucru și timpul liber, economisind timp și efort prețios pentru utilizatori.'
      }, {
        photo: 'assets/images/others/landing/tech-savy-travellers.png',
        title: 'Pasionații de tehnologie',
        content: 'Bestinform se adresează utilizatorilor competenți în utilizarea de tehnologii noi, utilizând recomandări personalizate bazate pe inteligența artificială pentru a-i ajuta să se adapteze rapid la medii noi.'
      }, {
        photo: 'assets/images/others/landing/family-coord.png',
        title: 'Coordonatori de familie',
        content: 'Bestinform oferă sugestii centrate pe familie, care prioritizează siguranța și valoarea educațională, transformând planificarea și coordonarea călătoriilor în acțiuni lipsite de stres.'
      }, {
        photo: 'assets/images/others/landing/exp-seekers.png',
        title: 'Căutători de experiențe',
        content: 'Bestinform oferă sugestii unice și personalizate pentru explorarea cartierelor, evadări romantice și întâlniri sociale, răspunzând dorințelor persoanelor în căutare de experiențe noi.'
      }]
    };
    this.features = {
      smallTitle: '',
      title: '',
      content: '',
      image: '',
      items: [{
        icon: '',
        title: '',
        content: ''
      }]
    };
    this.featuresEn = {
      smallTitle: 'Your All-in-One travel and leisure solution',
      title: 'Revolutionizing travel and leisure',
      content: 'Bestinform offers a revolutionary solution for travelers, providing comprehensive and up-to-date information along with personalized suggestions and seamless booking capabilities.',
      image: 'assets/images/others/landing/app-photo.png',
      items: [{
        icon: 'assets/images/others/landing/user.png',
        title: 'Enhanced user engagement',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      }, {
        icon: 'assets/images/others/landing/niche.png',
        title: 'Unique niche',
        content: 'With exclusive partnerships with European providers, Bestinform is positioned to differentiate itself and capture a unique position in the market. '
      }, {
        icon: 'assets/images/others/landing/innovation.png',
        title: 'Innovative product',
        content: 'An one-stop solution for up-to-date information, effortless booking and tailored recommendations'
      }]
    };
    this.featuresRo = {
      smallTitle: 'Soluția dvs. All-in-One pentru călătorii și timp liber',
      title: 'Revoluționând călătoriile și petrecerea timpului liber',
      image: 'assets/images/others/landing/app-photo.png',
      content: 'Produs inovator: Bestinform oferă o soluție revoluționară pentru călători, oferind informații complete și actualizate, împreună cu sugestii personalizate și posibilități de rezervare direct din aplicație.',
      items: [{
        icon: 'assets/images/others/landing/user.png',
        title: 'Implicare intensivă a utilizatorilor',
        content: 'Concierge-ul nostru virtual cu inteligență artificială maximizează implicarea utilizatorilor prin oferirea unor funcționalități solide, concepute pentru a optimiza experiența de călătorie și de petrecere a timpului liber.'
      }, {
        icon: 'assets/images/others/landing/niche.png',
        title: 'Nișă unică',
        content: 'Având inclusiv parteneriate exclusive cu furnizori europeni ca parte a strategiei, Bestinform este poziționat pentru a se diferenția și a capta o poziție unică pe piață.'
      }, {
        icon: 'assets/images/others/landing/innovation.png',
        title: 'Produs inovator',
        content: 'O soluție unică pentru informații actualizate, rezervări fără efort și recomandări personalizate.'
      }]
    };
    this.experience = {
      title: '',
      mainContent: '',
      secondContent: '',
      items: [{
        title: '',
        content: ''
      }]
    };
    this.experienceEn = {
      title: 'Enriching the Bestinform experience',
      mainContent: 'Bestinform goes beyond providing a comprehensive travel and leisure platform. We understand that our users seek not only practical information but also inspiration and valuable insights. That\'s why we have included an Editorial Section in our app, dedicated to delivering engaging articles and content related to various domains covered, including tourism, emergent destinations, culture, entertainment, food industry, travel and leisure innovations, and more.',
      secondContent: 'By incorporating an Editorial Section into Bestinform, we aim to create a holistic and enriching travel and leisure experience. We believe that valuable content adds depth to our platform, allowing users to immerse themselves in the world of travel and culture while planning their next adventure. Through our curated articles, news updates, insider tips, expert perspectives, and inspirational content, the Bestinform Editorial Section provides a valuable resource for users to discover, learn, and stay connected with the ever-evolving travel and leisure landscape.',
      items: [{
        title: 'Curated articles',
        content: 'Our editorial team carefully curates articles that cover a wide range of topics, ensuring that users stay informed about the latest trends, events, and destinations in the travel and leisure industry. '
      }, {
        title: 'News and updates',
        content: 'Stay up-to-date with the latest news and updates from the world of travel, culture, and entertainment. From emerging destinations to new attractions, we bring you the most relevant information to enrich your travel experiences.'
      }, {
        title: 'Insider tips and guides',
        content: 'Our editorial section provides insider tips and guides to help users discover hidden gems, local secrets, and off-the-beaten-path experiences. We aim to empower travelers to explore and immerse themselves in their destinations fully.'
      }, {
        title: 'Expert perspectives',
        content: 'We collaborate with industry experts and influencers to provide expert perspectives and insights. Through interviews, opinion pieces, and feature articles, we offer unique and valuable perspectives on various aspects of travel, culture, and leisure.'
      }, {
        title: 'Inspiration for adventure',
        content: 'Whether it\'s planning a weekend getaway, seeking cultural experiences, or embarking on an adrenaline-filled adventure, our editorial section offers inspiration and ideas to fuel your wanderlust and ignite your passion for exploration.'
      }]
    };
    this.experienceRo = {
      title: 'Îmbogățirea experienței Bestinform',
      mainContent: 'Bestinform nu se limitează la a oferi o platformă completă de călătorie și agrement. Înțelegem că utilizatorii noștri caută nu doar informații practice, ci și inspirație și perspective valoroase. De aceea, am inclus în aplicația noastră o Secțiune editorială, dedicată furnizării de articole și conținut atractiv legat de diverse domenii acoperite, inclusiv turism, destinații emergente, cultură, divertisment, industria alimentară, inovații în domeniul călătoriilor și al petrecerii timpului liber și multe altele.',
      secondContent: 'Prin încorporarea unei secțiuni editoriale în Bestinform, ne propunem să creăm o experiență holistică legată de călătorie și agrement. Credem că un conținut valoros adaugă profunzime platformei noastre, permițând utilizatorilor să se cufunde în lumea călătoriilor și culturii agrementului în timp ce își planifică următoarea aventură. Prin articolele noastre, știrile actualizate, sfaturi, perspectivele experților și conținutul inspirațional, Secțiunea editorială Bestinform oferă o resursă valoroasă pentru ca utilizatorii să descopere, să învețe și să rămână conectați cu peisajul în continuă evoluție al călătoriilor și al timpului liber.',
      items: [{
        title: 'Articole selectate',
        content: 'Echipa noastră editorială alege cu atenție articole care acoperă o gamă largă de subiecte, asigurându-se că utilizatorii rămân informați cu privire la cele mai recente tendințe, evenimente și destinații din industria călătoriilor și a timpului liber.'
      }, {
        title: 'Știri și actualizări',
        content: 'Rămâneți la curent cu cele mai recente știri și actualizări din lumea călătoriilor, a culturii și a divertismentului. De la destinații emergente la noi atracții, vă oferim cele mai relevante informații pentru a vă îmbogăți experiențele de călătorie.'
      }, {
        title: 'Sfaturi',
        content: 'Secțiunea noastră editorială oferă sfaturi pentru a-i ajuta pe utilizatori să descopere locuri ascunse, mici experiențe secrete locale și experiențe în afara traseelor clasice. Ne propunem să le dăm călătorilor posibilitatea de a explora și de a se cufunda pe deplin într-o aventură, nu o simplă călătorie.'
      }, {
        title: 'Perspective ale experților',
        content: 'Colaborăm cu experți din industrie și influenceri pentru a oferi perspective și perspective de specialitate. Prin interviuri, articole de opinie și articole de fond, oferim perspective valoroase asupra diferitelor aspecte ale călătoriilor, culturii și timpului liber.'
      }, {
        title: 'Inspirație pentru aventură',
        content: 'Fie că planificați o escapadă de weekend, căutați experiențe culturale sau vă îmbarcați într-o aventură plină de adrenalină, secțiunea noastră editorială vă oferă inspirație și idei pentru a vă alimenta pofta de călătorii și a vă aprinde pasiunea pentru explorare.'
      }]
    };
    this.dataBlocks = {
      icon: '',
      titleOne: '',
      contentOne: '',
      titleTwo: '',
      points: [{
        title: '',
        content: ''
      }],
      titleThree: '',
      image: '',
      contentTwo: ''
    };
    this.dataBlocksEn = {
      icon: 'assets/images/others/landing/percent.png',
      titleOne: 'Growth of the travel industry post-pandemic',
      contentOne: 'According to some estimates, the industry\'s growth post-pandemic has ranged from 50% to 70% of pre-pandemic levels, depending on the region and specific sector.',
      titleTwo: 'Language and image recognition capabilities of AI systems have improved rapidly',
      points: [{
        title: 'Technological advancements',
        content: 'Bestinform leverages the latest advancements in artificial intelligence and data analytics to continuously improve user experience and offer personalized recommendations.'
      }, {
        title: 'Market gap',
        content: 'Currently, there is no competitor offering a comprehensive solution that meets all the needs of our target audience in a single platform.'
      }],
      titleThree: 'Growing Market and technological advancements',
      image: 'assets/images/others/landing/graph.png',
      contentTwo: 'The capability of each AI system is normalized to an initialperformance of -100'
    };
    this.dataBlocksRo = {
      icon: 'assets/images/others/landing/percent.png',
      titleOne: 'Creșterea industriei de călătorii după pandemie',
      contentOne: 'Potrivit unor estimări, creșterea industriei după pandemie a variat între 50% și 70% din nivelurile pre-pandemie, în funcție de regiune și sectorul specific.',
      titleTwo: 'Capacitățile de recunoaștere a limbajului și imaginilor ale sistemelor AI s-au îmbunătățit rapid.',
      points: [{
        title: 'Progrese tehnologice',
        content: 'Bestinform valorifică cele mai recente progrese în domeniul inteligenței artificiale și al analizei datelor pentru a îmbunătăți continuu experiența utilizatorilor și pentru a oferi recomandări personalizate.'
      }, {
        title: 'Decalaj pe piață',
        content: 'În prezent, nu există niciun concurent care să ofere o soluție cuprinzătoare care să satisfacă toate nevoile publicului nostru țintă într-o singură platformă.'
      }],
      titleThree: 'Piața în creștere și progrese tehnologice',
      image: 'assets/images/others/landing/graph.png',
      contentTwo: 'Capacitatea fiecărui sistem AI este normalizată la o performanță inițială de -100.'
    };
    this.ctaFooter = {
      title: ''
    };
    this.ctaFooterEn = {
      title: 'Join Bestinform App, the state-of-the-art all-in-one app designed to enrich your daily experiences.'
    };
    this.ctaFooterRo = {
      title: 'Alăturați-vă Bestinform App, aplicația all-in-one de ultimă generație, concepută pentru a îmbogăți experiențele zilnice.'
    };
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      dotsEach: 4,
      nav: false,
      navSpeed: 700,
      navText: ['<', '>'],
      center: false,
      margin: 20,
      responsive: {
        0: {
          items: 1.5
        },
        500: {
          items: 1.5
        },
        576: {
          items: 1.5
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    };
    this.successMessage = "";
    this.successMessageEn = "The form has been submitted successfully!";
    this.successMessageRo = "Formularul a fost trimis cu succes!";
    this.errorMessage = "";
    this.errorMessageEn = "The form could NOT be submitted. Make sure you have filled in all the fields and try again.";
    this.errorMessageRo = "Formularul NU a putut fi trimis. Asigurați-vă că ați completat toate câmpurile și încercați din nou.";
    this.errorDuplicateMessage = "";
    this.errorDuplicateMessageEn = "The form could NOT be submitted. Your email or phone number already exists in our database.";
    this.errorDuplicateMessageRo = "Formularul NU a putut fi trimis. Email-ul sau numărul dvs. de telefon există deja în baza noastră de date.";
    this.contactForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^\\+?\\d{11}$')]],
      gdpr: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.token = undefined;
  }
  ngOnInit() {
    console.log('on init');
    const currentRoute = this.route.snapshot.url.join('/');
    if (currentRoute.includes('ro')) {
      this.pageLang = 'ro';
      this.hero = this.heroRo;
      this.form = this.formRo;
      this.whoWeAre = this.whoWeAreRo;
      this.benefits = this.benefitsRo;
      this.cta = this.ctaRo;
      this.aboutUs = this.aboutUsRo;
      this.services = this.servicesRo;
      this.features = this.featuresRo;
      this.experience = this.experienceRo;
      this.dataBlocks = this.dataBlocksRo;
      this.successMessage = this.successMessageRo;
      this.errorMessage = this.errorMessageRo;
      this.ctaFooter = this.ctaFooterRo;
      this.errorDuplicateMessage = this.errorDuplicateMessageRo;
    } else if (currentRoute.includes('en')) {
      this.pageLang = 'en';
      this.hero = this.heroEn;
      this.form = this.formEn;
      this.whoWeAre = this.whoWeAreEn;
      this.benefits = this.benefitsEn;
      this.cta = this.ctaEn;
      this.aboutUs = this.aboutUsEn;
      this.services = this.servicesEn;
      this.features = this.featuresEn;
      this.experience = this.experienceEn;
      this.dataBlocks = this.dataBlocksEn;
      this.successMessage = this.successMessageEn;
      this.errorMessage = this.errorMessageEn;
      this.ctaFooter = this.ctaFooterEn;
      this.errorDuplicateMessage = this.errorDuplicateMessageEn;
    } else {
      this.router.navigate(['/newsletter/en']);
    }
  }
  changeRoute(pageLang) {
    console.log('route changed', pageLang);
    this.router.navigate(['/newsletter/' + pageLang]);
  }
  onSubmit() {
    this.isFormLoading = true;
    if (this.contactForm.valid) {
      console.debug(`Token [${this.token}] generated`);
      console.log('Form submitted:', this.contactForm.value);
      this.landingService.createLandingContact(this.contactForm.value).subscribe(resp => {
        console.log('resp form', resp);
        this.toastService.showToast("Succes", this.successMessage, "success");
        this.contactForm.reset();
        this.isFormLoading = false;
        this.token = undefined;
      }, error => {
        console.log(error.error.reason);
        if (error.error.reason === 'duplicate_parameter' || error.error.reason === 'telephoneExists' || error.error.reason === 'emailExists') {
          this.toastService.showToast("Eroare", this.errorDuplicateMessage, "error");
        } else {
          this.toastService.showToast("Eroare", this.errorMessage, "error");
        }
        this.isFormLoading = false;
        this.token = undefined;
      });
    } else {
      this.isFormLoading = false;
      this.token = undefined;
      console.log('Form is invalid.');
      this.toastService.showToast("Eroare", this.errorMessage, "error");
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _landing_service_service__WEBPACK_IMPORTED_MODULE_2__.LandingService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }];
};
LandingBestinformComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-landing-bestinform',
  template: _landing_bestinform_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_landing_bestinform_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LandingBestinformComponent);


/***/ }),

/***/ 36787:
/*!**************************************************************************!*\
  !*** ./src/app/features/landing-bestinform/landing-bestinform.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingBestinformModule": () => (/* binding */ LandingBestinformModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _landing_bestinform_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-bestinform.component */ 73095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not-found/not-found.component */ 95707);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-recaptcha */ 51073);













const routes = [{
  path: 'en',
  component: _landing_bestinform_component__WEBPACK_IMPORTED_MODULE_0__.LandingBestinformComponent,
  pathMatch: 'full'
}, {
  path: 'ro',
  component: _landing_bestinform_component__WEBPACK_IMPORTED_MODULE_0__.LandingBestinformComponent,
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

let LandingBestinformModule = class LandingBestinformModule {};
LandingBestinformModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_landing_bestinform_component__WEBPACK_IMPORTED_MODULE_0__.LandingBestinformComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__.RecaptchaModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__.RecaptchaFormsModule],
  providers: [{
    provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__.RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6Ldn1F0oAAAAAGsXgMLrKkl6i-16owTvR8TQ4vXR'
    }
  }]
})], LandingBestinformModule);


/***/ }),

/***/ 40103:
/*!******************************************************************************************!*\
  !*** ./src/app/features/landing-bestinform/landing-bestinform.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n* {\n  font-family: \"Helvetica\", sans-serif !important;\n}\n\n#landing-header-bar {\n  background-color: #24398A;\n}\n#landing-header-bar .language {\n  background-color: #24398A;\n  color: var(--primary-background);\n  border: none;\n}\n\nh2 {\n  font-size: 60px;\n  font-weight: 500;\n  line-height: 50px;\n  margin-bottom: 20px;\n}\n\nh3 {\n  font-size: 60px;\n  font-weight: 700;\n  line-height: 64.5px;\n  margin-bottom: 20px;\n}\n\nh4 {\n  font-size: 30px;\n  font-weight: 400;\n  line-height: 35px;\n}\n\nh5 {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 25px;\n}\n\np {\n  color: #000;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 30px;\n}\n\n#heroSection {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.hero-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/assets/images/others/landing/client-offer-banner.png\");\n  background-size: cover;\n  background-position: bottom;\n  z-index: -1; /* Place behind other elements */\n}\n\n.hero-content::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(217, 217, 217, 0) 100%);\n  z-index: -1;\n}\n\n#heroSection .hero-subtitle {\n  color: #F5F6FF;\n  font-style: normal;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n#heroSection .hero-title {\n  color: #F5F6FF;\n  font-style: normal;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n#heroSection .hero-text {\n  color: #FFF;\n  font-style: normal;\n  font-weight: 400;\n}\n#heroSection .form-inputs {\n  display: flex;\n  flex-direction: column;\n  max-width: 350px;\n  width: 100%;\n  margin: 0 auto;\n}\n#heroSection .hero-title,\n#heroSection .hero-subtitle,\n#heroSection .hero-text {\n  max-width: 735px;\n}\n#heroSection ::ng-deep .mdc-text-field {\n  border-radius: 0 !important;\n}\n#heroSection ::ng-deep mat-label {\n  color: #283080;\n  font-family: \"Helvetica\", sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 30px;\n  opacity: 0.5;\n  text-transform: uppercase;\n}\n#heroSection ::ng-deep .mdc-floating-label--float-above mat-label {\n  font-size: 18px;\n  line-height: 20px;\n}\n#heroSection .form-box {\n  display: flex;\n  padding: 35px 15%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 25px;\n  flex-shrink: 0;\n  border-radius: 20px;\n  background: #24398A;\n  box-shadow: 5px 5px 8px 0px rgba(40, 48, 128, 0.1);\n}\n#heroSection .form-box .form-title {\n  color: #fff;\n  text-align: center;\n  font-size: 60px;\n  font-weight: 700;\n  line-height: 64.5px;\n}\n#heroSection .form-box .form-subtitle {\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 35px;\n}\n#heroSection .form-box .form-gdpr {\n  color: #fff;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 15px;\n}\n#heroSection .form-box .form-gdpr a {\n  color: #fff;\n  transition: 0.3s;\n}\n#heroSection .form-box .form-gdpr a:hover {\n  color: #808080;\n}\n#heroSection .form-box .form-gdpr ::ng-deep label {\n  color: #fff;\n}\n#heroSection .form-box .form-gdpr ::ng-deep .mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background {\n  background-color: transparent !important;\n  border-color: #fff !important;\n}\n#heroSection .form-box button.form-button {\n  color: #fff;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 22px;\n  letter-spacing: -0.408px;\n  display: flex;\n  width: 100%;\n  padding: 12px 15px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 100px;\n  background: #5365E5;\n  flex-shrink: 0;\n  border: 2px solid #5365E5;\n  margin-bottom: 5px;\n  max-width: 350px;\n  cursor: pointer;\n}\n#heroSection .form-box button.form-button:disabled {\n  cursor: not-allowed;\n  pointer-events: all !important;\n}\n#heroSection .form-box button.form-button:not(:disabled):hover {\n  background: #fff;\n  color: #5365E5;\n  transition: 0.5s;\n}\n\n#whoWeAre {\n  padding-bottom: 140px;\n}\n#whoWeAre h2 {\n  color: #5365E5;\n}\n#whoWeAre h3 {\n  color: #000;\n  max-width: 1055px;\n}\n#whoWeAre p.main-content {\n  color: #000;\n  font-size: 30px;\n  line-height: 35px;\n  max-width: 950px;\n  margin-bottom: 50px;\n}\n#whoWeAre .carousel-wrap {\n  max-width: 970px;\n  width: 100%;\n}\n#whoWeAre .carousel-item-box {\n  border-radius: 20px;\n  background: #FFF;\n  box-shadow: 5px 5px 8px 0px rgba(40, 48, 128, 0.1);\n  padding: 25px;\n  height: 390px;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n#whoWeAre .carousel-item-box p {\n  min-height: 95px;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 25px;\n  text-transform: capitalize;\n}\n#whoWeAre .carousel-item-box .img-wrap {\n  width: 170px;\n  height: 170px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 25px;\n}\n\n#benefits h2 {\n  max-width: 880px;\n  color: #5365E5;\n  padding-bottom: 10px;\n}\n#benefits .benefit-item:not(:last-child) {\n  border-bottom: 1px solid #5365E5;\n}\n#benefits .b-counter {\n  color: #5365E5;\n  font-weight: 500;\n}\n#benefits h5 {\n  color: #000;\n}\n\n#formSection, #formSectionTwo {\n  position: relative;\n}\n#formSection .ctaCol, #formSectionTwo .ctaCol {\n  background: url(\"/assets/images/others/landing/woman-on-phone.png\");\n  background-repeat: no-repeat;\n  position: relative;\n  z-index: -1;\n  max-height: 965px;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n}\n#formSection .ctaCol::before, #formSectionTwo .ctaCol::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #5365E5;\n  opacity: 0.8;\n  z-index: -1;\n}\n#formSection .ctaContent h2,\n#formSection .ctaContent h3, #formSectionTwo .ctaContent h2,\n#formSectionTwo .ctaContent h3 {\n  color: #fff;\n}\n#formSection .ctaContent h2, #formSectionTwo .ctaContent h2 {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n#formSection .ctaContent h3, #formSectionTwo .ctaContent h3 {\n  font-weight: 400;\n}\n#formSection .form-box, #formSectionTwo .form-box {\n  gap: 25px;\n}\n#formSection .formCol, #formSectionTwo .formCol {\n  padding-top: 200px;\n  padding-bottom: 200px;\n  background: #FFF;\n  box-shadow: 5px 5px 8px 0px rgba(40, 48, 128, 0.1);\n}\n#formSection .form-box, #formSection .formCol, #formSectionTwo .form-box, #formSectionTwo .formCol {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#formSection .form-box form, #formSectionTwo .form-box form {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n#formSection .form-title, #formSectionTwo .form-title {\n  color: #24398A;\n  text-align: center;\n  font-size: 60px;\n  font-weight: 700;\n  line-height: 64.5px;\n}\n#formSection .form-subtitle, #formSectionTwo .form-subtitle {\n  color: #24398A;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 35px;\n}\n#formSection .form-button, #formSectionTwo .form-button {\n  color: #fff;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 22px;\n  letter-spacing: -0.408px;\n  display: flex;\n  width: 100%;\n  padding: 12px 105px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 100px;\n  background: #5365E5;\n  flex-shrink: 0;\n  border: 2px solid #5365E5;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n#formSection button.form-button:disabled, #formSectionTwo button.form-button:disabled {\n  cursor: not-allowed;\n  pointer-events: all !important;\n}\n#formSection button.form-button:not(:disabled):hover, #formSectionTwo button.form-button:not(:disabled):hover {\n  background: #fff;\n  color: #5365E5;\n  transition: 0.5s;\n}\n#formSection .form-gdpr, #formSectionTwo .form-gdpr {\n  color: #24398A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 15px;\n}\n#formSection .form-gdpr ::ng-deep label, #formSectionTwo .form-gdpr ::ng-deep label {\n  color: #24398A !important;\n}\n#formSection .form-gdpr a, #formSectionTwo .form-gdpr a {\n  color: #24398A !important;\n  transition: 0.3s;\n}\n#formSection .form-gdpr a:hover, #formSectionTwo .form-gdpr a:hover {\n  color: #808080;\n}\n#formSection ::ng-deep .mdc-text-field, #formSectionTwo ::ng-deep .mdc-text-field {\n  border-radius: 0 !important;\n  background: var(--pure-white, #FFF);\n  /* 1 */\n  box-shadow: 5px 5px 8px 0px rgba(40, 48, 128, 0.1);\n}\n#formSection ::ng-deep mat-label, #formSectionTwo ::ng-deep mat-label {\n  color: #283080;\n  font-family: \"Helvetica\", sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 30px;\n  opacity: 0.5;\n  text-transform: uppercase;\n}\n#formSection ::ng-deep .mdc-floating-label--float-above mat-label, #formSectionTwo ::ng-deep .mdc-floating-label--float-above mat-label {\n  font-size: 18px;\n  line-height: 20px;\n}\n\n#aboutUs {\n  background-color: #F5F6FF;\n}\n#aboutUs h2 {\n  color: var(--lite-bestinform-blue, #5365E5);\n}\n#aboutUs h3 {\n  color: #000;\n}\n#aboutUs h4 {\n  color: #7B7B7B;\n}\n#aboutUs h5 {\n  color: #000;\n}\n#aboutUs .title-area {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n#services {\n  background-color: #F5F6FF;\n}\n#services h3 {\n  color: #000;\n}\n#services h4 {\n  color: #7B7B7B;\n}\n#services h5 {\n  color: #000;\n}\n#services img {\n  width: 276px;\n  height: 274px;\n  object-fit: cover;\n  border-radius: 20px;\n}\n\n#features {\n  background: #F5F6FF;\n}\n#features h5 {\n  color: #5365E5;\n}\n#features h2 {\n  color: #000;\n  font-weight: 700 !important;\n  line-height: 60px;\n}\n#features .info-col p {\n  color: #000;\n  font-size: 30px;\n  line-height: 35px;\n}\n#features .image-col {\n  max-width: 855px;\n}\n#features .image-col img {\n  border-radius: 20px;\n}\n#features .row.features-items {\n  padding-top: 100px;\n}\n#features .icon-wrapp img {\n  height: 45px;\n  max-width: 55px;\n}\n\n#experience .experience-box {\n  background-color: #24398A;\n  padding: 66px;\n}\n#experience h2 {\n  font-weight: 700;\n}\n#experience h2, #experience p {\n  color: #fff;\n}\n#experience .experience-info {\n  margin: 0px 60px;\n}\n#experience .experience-info p {\n  color: #7B7B7B;\n}\n#experience .experience-items {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n#experience .experience-items .item {\n  padding: 20px;\n  max-width: 755px;\n}\n#experience .experience-items .item:nth-child(even) {\n  margin-left: auto;\n}\n#experience .experience-items .item-content {\n  display: flex;\n  align-items: flex-start;\n}\n#experience .experience-items .point {\n  width: 20px;\n  height: 20px;\n  background-color: #000; /* Adjust color as needed */\n  border-radius: 50%;\n  margin-right: 20px;\n}\n#experience .experience-items .item-text {\n  flex: 1;\n}\n#experience .experience-items h5 {\n  margin-bottom: 20px;\n  margin-top: -2px;\n  color: #000;\n}\n#experience .experience-items p {\n  margin: 0;\n  color: #000;\n}\n\n#dataGrid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n#dataGrid .light-blue-col {\n  background-color: #5365E5;\n}\n#dataGrid .dark-blue-col {\n  background-color: #24398A;\n}\n#dataGrid .col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 60px 20px;\n  box-sizing: border-box;\n}\n#dataGrid .col div {\n  max-width: 610px;\n  margin: 0 auto;\n}\n#dataGrid .percent-col, #dataGrid .title-col, #dataGrid .points-col, #dataGrid .graph-col {\n  height: 100%;\n}\n#dataGrid .percent-col {\n  text-align: center;\n}\n#dataGrid h5, #dataGrid p, #dataGrid h2 {\n  color: #fff;\n}\n\n#cta {\n  background-image: url(\"/assets/images/others/landing/bg-last.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  text-align: center;\n  padding: 70px 20px;\n}\n#cta h4 {\n  max-width: 870px;\n  margin: 0 auto;\n  color: #fff;\n}\n\n.footer {\n  padding: 30px 0;\n  background-color: #24398A;\n  color: var(--primary-background);\n  gap: 15px;\n}\n.footer p {\n  color: #fff;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 30px; /* 214.286% */\n  letter-spacing: -0.408px;\n}\n.footer .social-media a {\n  color: #fff;\n}\n.footer .social-media a:hover {\n  color: #D8D8D8;\n}\n.footer .fab {\n  font-family: \"Font Awesome 5 Brands\" !important;\n}\n.footer i {\n  font-size: 24px;\n}\n\n@media only screen and (min-width: 1200px) {\n  .custom-container {\n    padding-left: 100px;\n    padding-right: 100px;\n  }\n  .hero-content {\n    height: 100%;\n  }\n  #heroSection .hero-wrap {\n    margin-bottom: 180px;\n  }\n  #heroSection .rounded-shape-white {\n    position: absolute;\n    bottom: 50px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100%;\n    z-index: 1;\n    margin-bottom: -100px;\n    max-height: 300px;\n  }\n  #heroSection .rounded-shape-blue {\n    display: none;\n  }\n  #heroSection .hero-content {\n    padding: 80px 100px;\n  }\n  #heroSection .hero-subtitle {\n    font-size: 32px;\n    line-height: 80px;\n  }\n  #heroSection .hero-title {\n    font-size: 58px;\n    line-height: 80px;\n    margin-bottom: 30px;\n  }\n  #heroSection .hero-text {\n    font-size: 30px;\n    line-height: 35px;\n  }\n  #benefits {\n    position: relative;\n  }\n  #benefits .custom-container {\n    position: relative;\n  }\n  #benefits .mobile-benefits {\n    display: none;\n  }\n  #benefits .b-counter {\n    font-size: 24px;\n    line-height: 25px;\n    margin-top: 50px;\n  }\n  #benefits .b-content {\n    margin-bottom: 50px;\n  }\n  #benefits img.app-photo {\n    position: absolute;\n    right: 0px;\n    top: -685px;\n    max-height: 780px;\n    z-index: 2;\n  }\n  #formSection .row, #formSectionTwo .row {\n    margin: 0 -100px;\n  }\n  #formSection .ctaContent h2, #formSectionTwo .ctaContent h2 {\n    font-size: 60px;\n    line-height: 64.5px;\n  }\n  #formSection .ctaContent h3, #formSectionTwo .ctaContent h3 {\n    font-size: 30px;\n    line-height: 35px;\n  }\n  #formSection .ctaContent, #formSectionTwo .ctaContent {\n    padding-left: 85px;\n    padding-right: 60px;\n  }\n  #aboutUs {\n    padding-top: 130px;\n    padding-bottom: 130px;\n  }\n  #aboutUs p {\n    margin-bottom: 0;\n  }\n  #aboutUs .square-info {\n    position: relative;\n  }\n  #aboutUs .column {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    max-width: 423px;\n    margin: 0 auto;\n  }\n  #aboutUs .left-column {\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin-right: 270px;\n    text-align: right;\n  }\n  #aboutUs .right-column {\n    justify-content: flex-start;\n    align-items: flex-start;\n    margin-left: 270px;\n    text-align: left;\n  }\n  #aboutUs .item {\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n  #aboutUs .center-image {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    /* Add your image styling here */\n  }\n  #aboutUs .center-image img {\n    width: 455px;\n  }\n  #aboutUs .title-area {\n    padding-bottom: 120px;\n  }\n  #aboutUs h2 {\n    margin-bottom: 70px;\n  }\n  #aboutUs h3 {\n    margin-bottom: 25px;\n  }\n  #services .services-row {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    padding-top: 130px;\n  }\n  #services .service-col {\n    flex-basis: calc(50% - 10px); /* 50% width with some spacing */\n    margin-bottom: 55px;\n    box-sizing: border-box;\n    display: flex;\n    align-items: flex-start;\n  }\n  #services .service-content {\n    max-width: 310px;\n  }\n  #services .img-wrapper {\n    margin-right: 45px;\n  }\n  #features {\n    padding-top: 130px;\n    padding-bottom: 210px;\n  }\n  #features .features-items {\n    gap: 30px;\n  }\n  #features .icon-wrapp {\n    margin-right: 25px;\n  }\n  #experience {\n    margin-top: -100px;\n    padding-bottom: 115px;\n  }\n  #experience .experience-box {\n    margin: 0px 60px;\n    display: flex;\n    align-items: flex-start;\n    gap: 95px;\n  }\n  #experience .exp-content {\n    max-width: 901px;\n  }\n  #experience p {\n    font-size: 30px;\n    line-height: 35px;\n  }\n  #experience .experience-info {\n    padding-top: 95px;\n    padding-bottom: 95px;\n  }\n  #experience .experience-items p {\n    font-size: 20px;\n    line-height: 30px;\n  }\n  #dataGrid p {\n    margin-bottom: 0;\n  }\n  #dataGrid .col {\n    height: 756px;\n  }\n  #dataGrid .percent-col img {\n    width: 285px;\n    height: auto;\n    margin-bottom: 35px;\n  }\n  #dataGrid .title-col h2 {\n    font-weight: 700;\n    text-transform: uppercase;\n    line-height: 70px;\n  }\n  #dataGrid .points-col .item-content {\n    display: flex;\n    align-items: flex-start;\n  }\n  #dataGrid .points-col .item:not(:last-child) {\n    margin-bottom: 50px;\n  }\n  #dataGrid .points-col .point {\n    width: 20px;\n    height: 20px;\n    background-color: #fff; /* Adjust color as needed */\n    border-radius: 50%;\n    margin-right: 20px;\n  }\n  #dataGrid .points-col .item-text {\n    flex: 1;\n  }\n  #dataGrid .points-col h5 {\n    margin-bottom: 20px;\n  }\n  #dataGrid .graph-col h2 {\n    font-size: 60px;\n    font-weight: 700;\n    line-height: 64.5px;\n    margin-bottom: 30px;\n  }\n  #dataGrid .graph-col img {\n    margin-bottom: 30px;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .eu-header {\n    flex-direction: column;\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n  .eu-header .w-25 {\n    width: 85% !important;\n  }\n  .custom-container:not(.hero-content) {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  h2 {\n    font-size: 20px;\n    line-height: 50px;\n    margin-bottom: 0px;\n  }\n  h3 {\n    font-size: 30px;\n    line-height: 31.5px;\n  }\n  #heroSection .hero-info {\n    position: relative;\n    padding-top: 70px;\n    padding-bottom: 100px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  #heroSection .hero-background {\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: top;\n  }\n  #heroSection .hero-content::before {\n    height: 90%;\n  }\n  #heroSection .hero-form {\n    padding: 0;\n    margin-top: -15px;\n  }\n  #heroSection .form-box {\n    padding: 35px 30px;\n  }\n  #heroSection .form-box .form-title {\n    font-size: 30px;\n    line-height: 35px;\n  }\n  #heroSection .form-box .form-subtitle {\n    font-size: 14px;\n    line-height: 23.5px;\n  }\n  #heroSection .form-box .form-gdpr {\n    font-size: 10px;\n    line-height: 15px;\n  }\n  #heroSection .form-box .form-button {\n    font-size: 18px !important;\n    line-height: 22px !important;\n  }\n  #heroSection .form-box ::ng-deep mat-label {\n    font-size: 14px;\n    line-height: 30px;\n  }\n  #heroSection .form-box ::ng-deep .mdc-floating-label--float-above mat-label {\n    font-size: 14px;\n    line-height: 20px;\n  }\n  #heroSection .rounded-shape-white {\n    display: none;\n  }\n  #heroSection .rounded-shape-blue {\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100%;\n    z-index: 1;\n  }\n  #heroSection .hero-subtitle {\n    font-size: 15px;\n    line-height: 20px;\n  }\n  #heroSection .hero-title {\n    font-size: 24px;\n    line-height: 29px;\n    margin-bottom: 10px;\n  }\n  #heroSection .hero-text {\n    font-size: 14px;\n    line-height: 23.5px;\n  }\n  #whoWeAre {\n    padding-top: 60px;\n  }\n  #whoWeAre p.main-content {\n    font-size: 20px;\n    line-height: 26px;\n  }\n  #benefits .custom-container {\n    position: relative;\n  }\n  #benefits h2 {\n    font-size: 28px;\n    font-weight: 700;\n    line-height: 31.5px;\n    padding-bottom: 35px;\n    max-width: 260px;\n  }\n  #benefits .desktop-benefits {\n    display: none;\n  }\n  #benefits .b-counter {\n    font-size: 20px;\n    line-height: 25px;\n    margin-bottom: 0;\n  }\n  #benefits .b-content {\n    font-size: 10px;\n    line-height: 15px;\n  }\n  #benefits h5 {\n    font-size: 13px;\n    line-height: 25px;\n    margin-bottom: 0;\n  }\n  #benefits .benefit-col:first-child {\n    border-right: 1px solid #5365E5;\n  }\n  #benefits img.app-photo {\n    position: absolute;\n    right: 0px;\n    top: -75px;\n    max-height: 200px;\n    z-index: 2;\n  }\n  #formSection, #formSectionTwo {\n    overflow: hidden;\n  }\n  #formSection .custom-container, #formSectionTwo .custom-container {\n    padding: 0;\n  }\n  #formSection .row, #formSectionTwo .row {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  #formSection .ctaCol, #formSectionTwo .ctaCol {\n    text-align: center;\n    padding: 35px 55px;\n  }\n  #formSection h2, #formSectionTwo h2 {\n    font-size: 30px;\n    font-weight: 700;\n    line-height: 31.5px;\n    margin-bottom: 15px;\n  }\n  #formSection h3, #formSectionTwo h3 {\n    font-size: 20px;\n    line-height: 26px;\n    margin-bottom: 0px;\n  }\n  #formSection .formCol, #formSectionTwo .formCol {\n    padding: 55px;\n  }\n  #formSection .form-title, #formSectionTwo .form-title {\n    font-size: 30px;\n    line-height: 35px;\n    margin-bottom: 0px;\n  }\n  #formSection .form-subtitle, #formSectionTwo .form-subtitle {\n    font-size: 14px;\n    line-height: 23.5px;\n  }\n  #formSection .form-gdpr, #formSectionTwo .form-gdpr {\n    font-size: 10px;\n    line-height: 15px;\n  }\n  #aboutUs {\n    padding-top: 45px;\n    padding-bottom: 45px;\n  }\n  #aboutUs h2 {\n    margin-bottom: 15px;\n  }\n  #aboutUs h3 {\n    margin-bottom: 30px;\n  }\n  #aboutUs h4 {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 30px;\n  }\n  #aboutUs h5 {\n    font-size: 13px;\n    line-height: 25px;\n  }\n  #aboutUs p {\n    font-size: 10px;\n    line-height: 15px;\n  }\n  #aboutUs .center-image img {\n    max-width: 185px;\n  }\n  #aboutUs .square-info {\n    flex-direction: column;\n    text-align: center;\n  }\n  #aboutUs .center-image {\n    order: 0;\n    margin-bottom: 30px;\n  }\n  #aboutUs .left-column {\n    order: 1;\n  }\n  #aboutUs .right-column {\n    order: 2;\n  }\n  #aboutUs .square-info .item:not(:last-child) {\n    margin-bottom: 20px;\n  }\n  #services h3, #services h4 {\n    text-align: center;\n  }\n  #services h4 {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #services h5 {\n    font-size: 13px;\n    line-height: 20px;\n  }\n  #services p {\n    font-size: 10px;\n    line-height: 15px;\n    margin-bottom: 0;\n  }\n  #services img {\n    width: 68px !important;\n    height: 68px !important;\n    border-radius: 5px !important;\n    margin-bottom: 10px;\n  }\n  #services .services-row {\n    gap: 15px;\n    padding-top: 50px;\n  }\n  #services .service-col {\n    flex-basis: calc(50% - 10px); /* 50% width with some spacing */\n    margin-bottom: 0px;\n    box-sizing: border-box;\n  }\n  #features {\n    padding-bottom: 100px;\n  }\n  #features .main-features {\n    flex-direction: column;\n    padding-top: 50px;\n  }\n  #features h5 {\n    padding-bottom: 30px;\n    padding-top: 30px;\n    text-align: center;\n    font-size: 20px;\n    line-height: 23px;\n    max-width: 70%;\n    margin: 0 auto;\n  }\n  #features h2 {\n    color: #000;\n    text-align: center;\n    font-size: 30px;\n    line-height: 31.5px;\n    padding-bottom: 30px;\n  }\n  #features p {\n    text-align: center;\n    font-size: 20px !important;\n    line-height: 26px !important;\n  }\n  #features .features-items {\n    padding-top: 30px !important;\n    flex-direction: column;\n  }\n  #features .feature-item {\n    padding-bottom: 15px;\n  }\n  #features .feature-item h5 {\n    font-size: 13px;\n    line-height: 18px;\n  }\n  #features .feature-item p {\n    color: #5365E5;\n    font-size: 10px !important;\n    line-height: 15px !important;\n  }\n  #features .feature-item .d-flex {\n    flex-direction: column;\n    text-align: center;\n  }\n  #features .feature-item .d-flex h5 {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  #experience {\n    margin-top: -80px;\n    padding-bottom: 75px;\n  }\n  #experience .experience-box {\n    padding: 40px 20px;\n  }\n  #experience .experience-box h2 {\n    text-align: center;\n    font-size: 13px;\n    font-weight: 500;\n    line-height: 25px;\n  }\n  #experience .experience-box p {\n    text-align: center;\n    font-size: 10px;\n    line-height: 15px;\n  }\n  #experience .experience-info {\n    margin: 0;\n    text-align: center;\n    padding-top: 35px;\n  }\n  #experience .experience-info p {\n    font-size: 20px;\n    line-height: 23.5px;\n  }\n  #experience .experience-items {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n  }\n  #experience .experience-items .point {\n    display: none;\n  }\n  #experience .experience-items .item {\n    text-align: center;\n    padding: 10px;\n  }\n  #experience .experience-items .item h5 {\n    font-size: 13px;\n    line-height: 25px;\n    margin-bottom: 0;\n  }\n  #experience .experience-items .item p {\n    font-size: 10px;\n    line-height: 15px;\n  }\n  #dataGrid p {\n    font-size: 8px;\n    line-height: 12px;\n  }\n  #dataGrid .col {\n    padding: 35px 20px;\n  }\n  #dataGrid .percent-col img {\n    width: 70px;\n    margin-bottom: 10px;\n  }\n  #dataGrid .percent-col h5 {\n    font-size: 10px;\n    line-height: 16px;\n    margin-bottom: 10px;\n  }\n  #dataGrid .title-col h2 {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 23px;\n    text-transform: uppercase;\n  }\n  #dataGrid .points-col {\n    text-align: center;\n  }\n  #dataGrid .points-col .point {\n    display: none;\n  }\n  #dataGrid .points-col h5 {\n    font-size: 10px;\n    line-height: 25px;\n    margin-bottom: 0px;\n  }\n  #dataGrid .graph-col {\n    text-align: center;\n  }\n  #dataGrid .graph-col h2 {\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 16px;\n    margin-bottom: 10px;\n  }\n  #dataGrid .graph-col img {\n    margin-bottom: 10px;\n  }\n  #cta {\n    padding: 36px;\n  }\n  #cta h4 {\n    font-size: 20px;\n    line-height: 35px;\n  }\n}\n@media only screen and (min-width: 576px) and (max-width: 1199px) {\n  .hero-info {\n    min-height: 365px;\n  }\n}\n@media only screen and (min-width: 1921px) {\n  .custom-container, #dataGrid {\n    max-width: 1920px;\n    margin: 0 auto;\n  }\n  #formSection .row,\n  #formSectionTwo .row {\n    margin: 0;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1500px) {\n  #benefits img.app-photo {\n    position: absolute;\n    right: 0px;\n    top: -265px;\n    max-height: 400px;\n    z-index: 2;\n  }\n}\np.text-small {\n  font-size: 14px;\n  line-height: 20px;\n}\n\nre-captcha.is-invalid > div {\n  border: 1px solid #dc3545 !important;\n  border-radius: 0.2rem;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/landing-bestinform/landing-bestinform.component.scss"],"names":[],"mappings":"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","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n\n* {\n  font-family: \"Helvetica\", sans-serif !important;\n}\n\n#landing-header-bar {\n  background-color: $primary-color;\n\n  .language {\n    background-color: $primary-color;\n    color: var(--primary-background);\n    border: none;\n  }\n}\n\nh2 {\n  font-size: 60px;\n  font-weight: 500;\n  line-height: 50px;\n  margin-bottom: 20px;\n}\n\nh3 {\n  font-size: 60px;\n  font-weight: 700;\n  line-height: 64.5px;\n  margin-bottom: 20px;\n}\n\nh4 {\n  font-size: 30px;\n  font-weight: 400;\n  line-height: 35px;\n}\n\nh5 {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 25px;\n}\np {\n  color: #000;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 30px;\n}\n#heroSection {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.hero-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url('/assets/images/others/landing/client-offer-banner.png');\n  background-size: cover;\n  background-position: bottom;\n  z-index: -1; /* Place behind other elements */\n}\n.hero-content::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(217, 217, 217, 0.00) 100%);\n  z-index: -1;\n}\n#heroSection {\n  .hero-subtitle {\n    color: #F5F6FF;\n    font-style: normal;\n    font-weight: 500;\n    text-transform: uppercase;\n  }\n\n  .hero-title {\n    color: #F5F6FF;\n    font-style: normal;\n    font-weight: 900;\n    text-transform: uppercase;\n  }\n\n  .hero-text {\n    color: #FFF;\n    font-style: normal;\n    font-weight: 400;\n  }\n\n  .form-inputs {\n    display: flex;\n    flex-direction: column;\n    max-width: 350px;\n    width: 100%;\n    margin: 0 auto;\n  }\n\n  .hero-title,\n  .hero-subtitle,\n  .hero-text {\n    max-width: 735px;\n  }\n\n  ::ng-deep .mdc-text-field {\n    border-radius: 0 !important;\n  }\n\n  ::ng-deep mat-label {\n    color: #283080;\n    font-family: \"Helvetica\", sans-serif ;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 30px;\n    opacity: 0.5;\n    text-transform: uppercase;\n  }\n\n  ::ng-deep .mdc-floating-label--float-above mat-label {\n    font-size: 18px;\n    line-height: 20px;\n  }\n\n  .form-box {\n    display: flex;\n    padding: 35px 15%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n    flex-shrink: 0;\n    border-radius: 20px;\n    background: $primary-color;\n    box-shadow: 5px 5px 8px 0px rgba(40, 48, 128, 0.10);\n\n    .form-title {\n      color: #fff;\n      text-align: center;\n      font-size: 60px;\n      font-weight: 700;\n      line-height: 64.5px;\n    }\n\n    .form-subtitle {\n      color: #fff;\n      text-align: center;\n      font-size: 20px;\n      font-weight: 400;\n      line-height: 35px;\n    }\n\n    .form-gdpr {\n      color: #fff;\n      //text-align: center;\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 15px;\n\n      a {\n        color: #fff;\n        transition: 0.3s;\n      }\n\n      a:hover {\n        color: #808080;\n      }\n\n      ::ng-deep label {\n        color: #fff;\n      }\n\n      ::ng-deep .mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background {\n        background-color: transparent !important;\n        border-color: #fff !important;\n      }\n    }\n\n    button.form-button {\n      color: #fff;\n      text-align: center;\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 22px;\n      letter-spacing: -0.408px;\n      display: flex;\n      width: 100%;\n      //height: 50px;\n      padding: 12px 15px;\n      justify-content: center;\n      align-items: center;\n      gap: 10px;\n      border-radius: 100px;\n      background: #5365E5;\n      flex-shrink: 0;\n      border: 2px solid #5365E5;\n      margin-bottom: 5px;\n      max-width: 350px;\n      cursor: pointer;\n    }\n\n    button.form-button:disabled {\n      cursor: not-allowed;\n      pointer-events: all !important;\n    }\n\n    button.form-button:not(:disabled):hover {\n      background: #fff;\n      color: #5365E5;\n      transition: 0.5s;\n    }\n  }\n}\n#whoWeAre {\n\n  padding-bottom: 140px;\n\n  h2 {\n    color: #5365E5;\n  }\n\n  h3 {\n    color: #000;\n    max-width: 1055px;\n  }\n\n  p.main-content {\n    color: #000;\n    font-size: 30px;\n    line-height: 35px;\n    max-width: 950px;\n    margin-bottom: 50px;\n  }\n\n  .carousel-wrap {\n    max-width: 970px;\n    width: 100%;\n  }\n\n  .carousel-item-box {\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 5px 5px 8px 0px rgba(40, 48, 128, 0.10);\n    padding: 25px;\n    height: 390px;\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    margin-right: 10px;\n    margin-bottom: 10px;\n\n    p {\n      min-height: 95px;\n      font-size: 24px;\n      font-weight: 500;\n      line-height: 25px;\n      text-transform: capitalize;\n    }\n\n    .img-wrap {\n      width: 170px;\n      height: 170px;\n      display: flex;\n      align-items: center;\n      margin-bottom: 25px;\n    }\n  }\n}\n#benefits {\n\n  h2 {\n    max-width: 880px;\n    color: #5365E5;\n    padding-bottom: 10px;\n  }\n\n  .benefit-item:not(:last-child) {\n    border-bottom: 1px solid #5365E5;\n  }\n\n  .b-counter {\n    color: #5365E5;\n    font-weight: 500;\n  }\n\n  h5 {\n    color: #000;\n  }\n\n}\n#formSection, #formSectionTwo {\n  position: relative;\n\n  .ctaCol {\n    background: url('/assets/images/others/landing/woman-on-phone.png');\n    background-repeat: no-repeat;\n    position: relative;\n    z-index: -1;\n    //height: 100vh;\n    max-height: 965px;\n    background-size: cover;\n    display: flex;\n    align-items: center;\n  }\n\n  .ctaCol::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #5365E5;\n    opacity: 0.8;\n    z-index: -1;\n  }\n\n  .ctaContent h2,\n  .ctaContent h3 {\n    color: #fff;\n  }\n\n  .ctaContent h2 {\n    font-weight: 700;\n    text-transform: uppercase;\n  }\n\n  .ctaContent h3 {\n    font-weight: 400;\n  }\n\n  .form-box {\n    gap: 25px;\n  }\n\n  .formCol {\n    padding-top: 200px;\n    padding-bottom: 200px;\n    background: #FFF;\n    box-shadow: 5px 5px 8px 0px rgba(40, 48, 128, 0.10);\n  }\n\n  .form-box, .formCol {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .form-box form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n\n  .form-title {\n    color: $primary-color;\n    text-align: center;\n    font-size: 60px;\n    font-weight: 700;\n    line-height: 64.5px;\n  }\n\n  .form-subtitle {\n    color: $primary-color;\n    text-align: center;\n    font-size: 20px;\n    font-weight: 400;\n    line-height: 35px;\n  }\n\n  .form-button {\n    color: #fff;\n    text-align: center;\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 22px;\n    letter-spacing: -0.408px;\n    display: flex;\n    width: 100%;\n    padding: 12px 105px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    border-radius: 100px;\n    background: #5365E5;\n    flex-shrink: 0;\n    border: 2px solid #5365E5;\n    margin-bottom: 5px;\n    cursor: pointer;\n  }\n\n  button.form-button:disabled {\n    cursor: not-allowed;\n    pointer-events: all !important;\n  }\n\n  button.form-button:not(:disabled):hover {\n    background: #fff;\n    color: #5365E5;\n    transition: 0.5s;\n  }\n\n  .form-gdpr {\n    color: $primary-color;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 15px;\n\n    ::ng-deep label {\n      color: $primary-color !important;\n    }\n\n    a {\n      color: $primary-color !important;\n      transition: 0.3s;\n    }\n\n    a:hover {\n      color: #808080;\n    }\n  }\n\n  ::ng-deep .mdc-text-field {\n    border-radius: 0 !important;\n    background: var(--pure-white, #FFF);\n\n    /* 1 */\n    box-shadow: 5px 5px 8px 0px rgba(40, 48, 128, 0.10);\n  }\n\n  ::ng-deep mat-label {\n    color: #283080;\n    font-family: \"Helvetica\", sans-serif ;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 30px;\n    opacity: 0.5;\n    text-transform: uppercase;\n  }\n\n  ::ng-deep .mdc-floating-label--float-above mat-label {\n    font-size: 18px;\n    line-height: 20px;\n  }\n\n\n}\n\n#aboutUs {\n  background-color: #F5F6FF;\n\n  h2 {\n    color: var(--lite-bestinform-blue, #5365E5);\n  }\n\n  h3 {\n    color: #000;\n  }\n\n  h4 {\n    color: #7B7B7B;\n  }\n\n  h5 {\n    color: #000;\n  }\n\n  .title-area {\n    max-width: 1000px;\n    margin: 0 auto;\n  }\n}\n\n#services {\n  background-color: #F5F6FF;\n\n  h3 {\n    color: #000;\n  }\n\n  h4 {\n    color: #7B7B7B;\n  }\n\n  h5 {\n    color: #000;\n  }\n\n  img {\n    width: 276px;\n    height: 274px;\n    object-fit: cover;\n    border-radius: 20px;\n  }\n}\n\n#features {\n\n\n  background: #F5F6FF;\n\n  h5 {\n    color: #5365E5;\n  }\n\n  h2 {\n    color: #000;\n    font-weight: 700 !important;\n    line-height: 60px;\n  }\n\n  .info-col p {\n    color: #000;\n    font-size: 30px;\n    line-height: 35px;\n  }\n\n  .image-col {\n    max-width: 855px;\n\n    img {\n      border-radius: 20px;\n    }\n  }\n\n  .row.features-items {\n    padding-top: 100px;\n  }\n\n  .icon-wrapp img {\n    height: 45px;\n    max-width: 55px;\n  }\n}\n\n\n#experience {\n  .experience-box {\n    background-color: $primary-color;\n    padding: 66px;\n  }\n\n  h2 {\n    font-weight: 700;\n  }\n\n  h2,p {\n    color: #fff;\n  }\n\n  .experience-info {\n    margin: 0px 60px;\n\n    p{\n      color: #7B7B7B;\n    }\n  }\n\n  .experience-items {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n\n    .item {\n      padding: 20px;\n      max-width: 755px;\n    }\n\n    .item:nth-child(even){\n      margin-left: auto;\n    }\n\n    .item-content {\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .point {\n      width: 20px;\n      height: 20px;\n      background-color: #000; /* Adjust color as needed */\n      border-radius: 50%;\n      margin-right: 20px;\n    }\n\n    .item-text {\n      flex: 1;\n    }\n\n    h5 {\n      margin-bottom: 20px;\n      margin-top: -2px;\n      color: #000;\n    }\n\n    p {\n      margin: 0;\n      color: #000;\n    }\n  }\n\n\n}\n\n#dataGrid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n\n  .light-blue-col {\n    background-color: #5365E5;\n  }\n\n  .dark-blue-col {\n    background-color: $primary-color;\n  }\n\n  .col {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 60px 20px;\n    box-sizing: border-box;\n    //border: 1px solid #ccc; /* Adding a border for visualization */\n\n  }\n\n  .col div {\n    max-width: 610px;\n    margin: 0 auto;\n  }\n\n\n  .percent-col, .title-col, .points-col, .graph-col {\n    height: 100%;\n  }\n\n  .percent-col {\n    text-align: center;\n  }\n\n  h5, p, h2 {\n    color: #fff;\n  }\n}\n\n#cta {\n\n  background-image: url(\"/assets/images/others/landing/bg-last.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  text-align: center;\n  padding: 70px 20px;\n\n  h4 {\n    max-width: 870px;\n    margin: 0 auto;\n    color: #fff;\n  }\n}\n\n.footer{\n\n  p {\n    color:#fff;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 30px; /* 214.286% */\n    letter-spacing: -0.408px;\n  }\n\n  .social-media a {\n    color: #fff;\n  }\n\n  .social-media a:hover {\n    color: #D8D8D8;\n  }\n\n  .fab {\n    font-family: 'Font Awesome 5 Brands' !important;\n  }\n\n  padding: 30px 0;\n  background-color: $primary-color;\n  color: var(--primary-background);\n  gap: 15px;\n\n\n  i{\n    font-size: 24px;\n  }\n}\n\n\n@media only screen and (min-width: 1200px) {\n  .custom-container {\n    padding-left: 100px;\n    padding-right: 100px;\n  }\n\n  .hero-content {\n    height: 100%;\n  }\n\n  #heroSection {\n\n    .hero-wrap {\n      margin-bottom: 180px;\n    }\n\n    .rounded-shape-white {\n      position: absolute;\n      bottom: 50px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 100%;\n      z-index: 1;\n      margin-bottom: -100px;\n      max-height: 300px;\n    }\n\n    .rounded-shape-blue {\n      display: none;\n    }\n\n    .hero-content {\n      padding: 80px 100px;\n    }\n\n    .hero-subtitle {\n      font-size: 32px;\n      line-height: 80px;\n    }\n\n    .hero-title {\n      font-size: 58px;\n      line-height: 80px;\n      margin-bottom: 30px;\n    }\n\n    .hero-text {\n      font-size: 30px;\n      line-height: 35px;\n    }\n  }\n\n  #benefits {\n\n    position: relative;\n\n    .custom-container {\n      position: relative;\n    }\n\n    .mobile-benefits {\n      display: none;\n    }\n\n    .b-counter {\n      font-size: 24px;\n      line-height: 25px;\n      margin-top: 50px;\n    }\n\n    .b-content {\n      margin-bottom: 50px;\n    }\n\n    img.app-photo {\n      position: absolute;\n      right: 0px;\n      top: -685px;\n      max-height: 780px;\n      z-index: 2;\n    }\n  }\n\n  #formSection, #formSectionTwo {\n\n    .row {\n      margin: 0 -100px;\n    }\n\n    .ctaContent h2 {\n      font-size: 60px;\n      line-height: 64.5px;\n    }\n\n    .ctaContent h3 {\n      font-size: 30px;\n      line-height: 35px;\n    }\n\n    .ctaContent {\n      padding-left: 85px;\n      padding-right: 60px;\n    }\n  }\n\n  #aboutUs {\n\n    padding-top:  130px;\n    padding-bottom: 130px;\n\n    p {\n      margin-bottom: 0;\n    }\n\n    .square-info {\n      position: relative;\n    }\n\n    .column {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      max-width: 423px;\n      margin: 0 auto;\n    }\n\n    .left-column {\n      justify-content: flex-end;\n      align-items: flex-end;\n      margin-right: 270px;\n      text-align: right;\n    }\n\n    .right-column {\n      justify-content: flex-start;\n      align-items: flex-start;\n      margin-left: 270px;\n      text-align: left;\n    }\n\n    .item {\n      margin-bottom: 15px;\n      margin-top: 15px;\n    }\n\n    .center-image {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      /* Add your image styling here */\n    }\n\n    .center-image img {\n      width: 455px;\n    }\n\n    .title-area {\n      padding-bottom: 120px;\n    }\n\n    h2 {\n      margin-bottom: 70px;\n    }\n\n    h3 {\n      margin-bottom: 25px;\n    }\n\n  }\n\n  #services {\n    .services-row {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      padding-top: 130px;\n    }\n\n    .service-col {\n      flex-basis: calc(50% - 10px); /* 50% width with some spacing */\n      margin-bottom: 55px;\n      box-sizing: border-box;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .service-content {\n      max-width: 310px;\n    }\n\n    .img-wrapper {\n\n      margin-right: 45px;\n    }\n  }\n\n  #features {\n    padding-top: 130px;\n    padding-bottom: 210px;\n\n    .features-items {\n      gap: 30px;\n    }\n\n    .icon-wrapp {\n      margin-right: 25px;\n    }\n  }\n\n  #experience {\n\n    margin-top: -100px;\n    padding-bottom: 115px;\n\n    .experience-box {\n      margin: 0px 60px;\n      display: flex;\n      align-items: flex-start;\n      gap: 95px;\n    }\n\n    .exp-content {\n      max-width: 901px;\n    }\n\n    p {\n      font-size: 30px;\n      line-height: 35px;\n    }\n\n    .experience-info {\n      padding-top: 95px;\n      padding-bottom: 95px;\n    }\n\n    .experience-items {\n\n      p {\n        font-size: 20px;\n        line-height: 30px;\n      }\n    }\n  }\n\n #dataGrid {\n\n   p {\n     margin-bottom: 0;\n   }\n\n   .col {\n     height: 756px;\n   }\n\n   .percent-col {\n      img {\n       width: 285px;\n       height: auto;\n        margin-bottom: 35px;\n     }\n\n   }\n\n   .title-col {\n     h2 {\n       font-weight: 700;\n       text-transform: uppercase;\n       line-height: 70px;\n     }\n   }\n\n   .points-col {\n     .item-content {\n       display: flex;\n       align-items: flex-start;\n     }\n\n     .item:not(:last-child) {\n       margin-bottom: 50px;\n     }\n\n     .point {\n       width: 20px;\n       height: 20px;\n       background-color: #fff; /* Adjust color as needed */\n       border-radius: 50%;\n       margin-right: 20px;\n     }\n\n     .item-text {\n       flex: 1;\n     }\n\n     h5 {\n       margin-bottom: 20px;\n     }\n   }\n\n   .graph-col {\n     h2 {\n       font-size: 60px;\n       font-weight: 700;\n       line-height: 64.5px;\n       margin-bottom: 30px;\n     }\n\n     img {\n       margin-bottom: 30px;\n     }\n   }\n\n }\n\n\n\n}\n\n@media only screen and (max-width: 1199px) {\n\n  .eu-header {\n    flex-direction: column;\n    padding-top: 15px;\n    padding-bottom: 15px;\n\n    .w-25 {\n      width: 85% !important;\n    }\n  }\n\n  .custom-container:not(.hero-content){\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  h2 {\n    font-size: 20px;\n    line-height: 50px;\n    margin-bottom: 0px;\n  }\n\n  h3{\n    font-size: 30px;\n    line-height: 31.5px;\n  }\n\n\n  #heroSection {\n\n    .hero-info {\n      position: relative;\n      padding-top: 70px;\n      padding-bottom: 100px;\n      padding-left: 30px;\n      padding-right: 30px;\n    }\n\n    .hero-background {\n      background-repeat: no-repeat;\n      background-size: contain;\n      background-position: top;\n    }\n\n    .hero-content::before {\n      height: 90%;\n    }\n\n    .hero-form {\n      padding: 0;\n      margin-top: -15px;\n    }\n\n    .form-box {\n      padding: 35px 30px;\n\n      .form-title {\n        font-size: 30px;\n        line-height: 35px;\n      }\n\n      .form-subtitle {\n        font-size: 14px;\n        line-height: 23.5px;\n      }\n\n      .form-gdpr {\n        font-size: 10px;\n        line-height: 15px;\n      }\n\n      .form-button {\n        font-size: 18px !important;\n        line-height: 22px !important;\n      }\n\n      ::ng-deep mat-label {\n        font-size: 14px;\n        line-height: 30px;\n      }\n\n      ::ng-deep .mdc-floating-label--float-above mat-label {\n        font-size: 14px;\n        line-height: 20px;\n      }\n\n    }\n\n    .rounded-shape-white {\n      display: none;\n    }\n\n    .rounded-shape-blue {\n      position: absolute;\n      bottom: 0px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 100%;\n      z-index: 1;\n    }\n\n    .hero-subtitle {\n      font-size: 15px;\n      line-height: 20px;\n    }\n\n    .hero-title {\n      font-size: 24px;\n      line-height: 29px;\n      margin-bottom: 10px;\n    }\n\n    .hero-text {\n      font-size: 14px;\n      line-height: 23.5px;\n    }\n  }\n\n  #whoWeAre {\n    padding-top: 60px;\n\n    p.main-content {\n      font-size: 20px;\n      line-height: 26px;\n    }\n  }\n\n  #benefits {\n\n    .custom-container {\n      position: relative;\n    }\n\n    h2 {\n      font-size: 28px;\n      font-weight: 700;\n      line-height: 31.5px;\n      padding-bottom: 35px;\n      max-width: 260px;\n    }\n\n    .desktop-benefits {\n      display: none;\n    }\n\n    .b-counter {\n      font-size: 20px;\n      line-height: 25px;\n      margin-bottom: 0;\n    }\n\n    .b-content {\n      font-size: 10px;\n      line-height: 15px;\n    }\n\n    h5 {\n      font-size: 13px;\n      line-height: 25px;\n      margin-bottom: 0;\n    }\n\n    .benefit-col:first-child {\n      border-right: 1px solid #5365E5;\n    }\n\n    img.app-photo {\n      position: absolute;\n      right: 0px;\n      top: -75px;\n      max-height: 200px;\n      z-index: 2;\n    }\n  }\n\n  #formSection, #formSectionTwo {\n\n    overflow: hidden;\n\n    .custom-container {\n      padding: 0;\n    }\n\n    .row {\n      flex-wrap: wrap;\n      flex-direction: column;\n    }\n\n    .ctaCol {\n      text-align: center;\n      padding: 35px 55px;\n    }\n\n    h2 {\n      font-size: 30px;\n      font-weight: 700;\n      line-height: 31.5px;\n      margin-bottom: 15px;\n    }\n\n    h3 {\n      font-size: 20px;\n      line-height: 26px;\n      margin-bottom: 0px;\n    }\n\n    .formCol{\n      padding: 55px;\n    }\n\n    .form-title {\n      font-size: 30px;\n      line-height: 35px;\n      margin-bottom: 0px;\n    }\n\n    .form-subtitle {\n      font-size: 14px;\n      line-height: 23.5px;\n    }\n\n    .form-gdpr {\n      //text-align: center;\n      font-size: 10px;\n      line-height: 15px;\n    }\n  }\n\n  #aboutUs {\n\n    padding-top: 45px;\n    padding-bottom: 45px;\n\n    h2 {\n      margin-bottom: 15px;\n    }\n\n    h3 {\n      margin-bottom: 30px;\n    }\n\n    h4 {\n      font-size: 20px;\n      line-height: 24px;\n      margin-bottom: 30px;\n    }\n\n    h5 {\n      font-size: 13px;\n      line-height: 25px;\n    }\n\n    p {\n      font-size: 10px;\n      line-height: 15px;\n    }\n\n    .center-image img {\n      max-width: 185px;\n    }\n\n    .square-info {\n      flex-direction: column;\n      text-align: center;\n    }\n\n    .center-image {\n      order: 0;\n      margin-bottom: 30px;\n    }\n\n    .left-column {\n      order: 1;\n    }\n\n    .right-column {\n      order: 2;\n    }\n\n    .square-info .item:not(:last-child) {\n      margin-bottom: 20px;\n    }\n  }\n\n  #services {\n    h3, h4 {\n      text-align: center;\n    }\n\n    h4 {\n      font-size: 20px;\n      line-height: 24px;\n    }\n\n    h5 {\n      font-size: 13px;\n      line-height: 20px;\n    }\n\n    p {\n      font-size: 10px;\n      line-height: 15px;\n      margin-bottom: 0;\n    }\n\n    img {\n      width: 68px !important;\n      height: 68px !important;\n      border-radius: 5px !important;\n      margin-bottom: 10px;\n    }\n\n    .services-row {\n      gap:15px;\n      padding-top: 50px;\n    }\n\n    .service-col {\n      flex-basis: calc(50% - 10px); /* 50% width with some spacing */\n      margin-bottom: 0px;\n      box-sizing: border-box;\n    }\n  }\n\n  #features {\n\n    padding-bottom: 100px;\n\n    .main-features {\n      flex-direction: column;\n      padding-top: 50px;\n    }\n\n    h5 {\n      padding-bottom: 30px;\n      padding-top: 30px;\n      text-align: center;\n      font-size: 20px;\n      line-height: 23px;\n      max-width: 70%;\n      margin: 0 auto;\n    }\n\n    h2 {\n      color: #000;\n      text-align: center;\n      font-size: 30px;\n      line-height: 31.5px;\n      padding-bottom: 30px;\n    }\n\n    p {\n      text-align: center;\n      font-size: 20px !important;\n      line-height: 26px !important;\n    }\n\n    .features-items {\n      padding-top: 30px !important;\n      flex-direction: column;\n    }\n\n    .feature-item {\n      padding-bottom: 15px;\n\n      h5 {\n        font-size: 13px;\n        line-height: 18px;\n      }\n\n      p{\n        color: #5365E5;\n        font-size: 10px !important;\n        line-height: 15px !important;\n      }\n    }\n\n    .feature-item .d-flex {\n      flex-direction: column;\n      text-align: center;\n\n      h5 {\n        padding-top: 10px;\n        padding-bottom: 10px;\n      }\n    }\n  }\n\n  #experience {\n    margin-top: -80px;\n    padding-bottom: 75px;\n\n    .experience-box {\n      padding: 40px 20px;\n\n      h2 {\n        text-align: center;\n        font-size: 13px;\n        font-weight: 500;\n        line-height: 25px;\n      }\n\n      p {\n        text-align: center;\n        font-size: 10px;\n        line-height: 15px;\n      }\n    }\n\n    .experience-info {\n      margin: 0;\n      text-align: center;\n      padding-top: 35px;\n\n      p{\n        font-size: 20px;\n        line-height: 23.5px;\n      }\n    }\n\n    .experience-items {\n      display: grid;\n      grid-template-columns: repeat(1, 1fr);\n\n      .point {\n        display: none;\n      }\n\n      .item {\n        text-align: center;\n        padding: 10px;\n\n        h5 {\n          font-size: 13px;\n          line-height: 25px;\n          margin-bottom: 0;\n        }\n\n        p {\n          font-size: 10px;\n          line-height: 15px;\n        }\n      }\n    }\n  }\n\n  #dataGrid {\n\n    p {\n      font-size: 8px;\n      line-height: 12px;\n    }\n\n    .col {\n      padding: 35px 20px;\n    }\n\n    .percent-col {\n      img {\n        width: 70px;\n        margin-bottom: 10px;\n      }\n\n      h5 {\n        font-size: 10px;\n        line-height: 16px;\n        margin-bottom: 10px;\n      }\n    }\n\n    .title-col {\n      h2 {\n        text-align: center;\n        font-size: 16px;\n        font-weight: 700;\n        line-height: 23px;\n        text-transform: uppercase;\n      }\n    }\n\n    .points-col {\n      text-align: center;\n      .point {\n        display: none;\n      }\n\n      h5 {\n        font-size: 10px;\n        line-height: 25px;\n        margin-bottom: 0px;\n      }\n    }\n\n    .graph-col {\n      text-align: center;\n\n      h2 {\n        font-size: 10px;\n        font-weight: 500;\n        line-height: 16px;\n        margin-bottom: 10px;\n      }\n\n      img {\n        margin-bottom: 10px;\n      }\n    }\n  }\n\n  #cta {\n    padding: 36px;\n\n    h4 {\n      font-size: 20px;\n      line-height: 35px;\n    }\n  }\n}\n\n@media only screen and (min-width: 576px) and (max-width: 1199px){\n  .hero-info {\n    min-height: 365px;\n  }\n}\n\n@media only screen and (min-width: 1921px) {\n  .custom-container, #dataGrid {\n    max-width: 1920px;\n    margin: 0 auto;\n  }\n\n  #formSection .row,\n  #formSectionTwo .row {\n    margin: 0;\n  }\n\n\n}\n\n@media only screen and (min-width: 1200px) and (max-width: 1500px) {\n  #benefits img.app-photo {\n    position: absolute;\n    right: 0px;\n    top: -265px;\n    max-height: 400px;\n    z-index: 2;\n  }\n}\n\np.text-small {\n  font-size: 14px;\n  line-height: 20px;\n}\n\nre-captcha.is-invalid > div {\n  border: 1px solid #dc3545 !important;\n  border-radius: 0.2rem;\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 67058:
/*!******************************************************************************************!*\
  !*** ./src/app/features/landing-bestinform/landing-bestinform.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--                <div class=\"d-flex justify-content-center align-items-center w-100 eu-header\">-->\n<!--                    <img src=\"assets/images/logos/fonduri-ue.png\" class=\"w-25\">-->\n<!--                    <p class=\"w-25 mb-0 text-small\">Pentru informaţii-->\n<!--                        detaliate despre celelalte programe cofinanţate de Uniunea-->\n<!--                        Europeană, vă invităm să vizitaţi <a href=\"https://www.fonduri-ue.ro/\" target=\"_blank\">www.fonduri-ue.ro-->\n<!--                        </a></p>-->\n<!--                </div>-->\n<div id=\"landing-header-bar\" class=\"container-fluid\">\n    <div class=\"container\">\n        <div class=\"py-4 d-flex justify-content-between align-items-center\">\n            <a>\n                <img src=\"assets/Betsinform_logo.png\" width=\"200px\">\n            </a>\n            <select class=\"language\" [(ngModel)]=\"pageLang\" (change)=\"changeRoute(pageLang)\">\n                <option value=\"en\">EN</option>\n                <option value=\"ro\">RO</option>\n            </select>\n        </div>\n    </div>\n</div>\n<div  id=\"heroSection\">\n    <div class=\"hero-background\"></div>\n    <div class=\"container-fluid custom-container hero-content\">\n        <div class=\"row justify-content-between align-items-center hero-wrap\">\n            <div class=\"col-xl-8 hero-info\">\n                <p class=\"hero-subtitle mb-0\">{{hero.subtitle}}</p>\n                <h1 class=\"hero-title\">{{hero.title}}</h1>\n                <p class=\"hero-text mb-0\">{{hero.content}}</p>\n                <img src=\"assets/images/others/landing/blue-sep.png\" alt=\"Rounded Shape Blue\" class=\"rounded-shape-blue\">\n\n            </div>\n            <div class=\"col-xl-4 hero-form\">\n                <div class=\"form-box\">\n                    <p class=\"form-title mb-0\">{{form.title}}</p>\n                    <p class=\"form-subtitle mb-0\">{{form.subtitle}}</p>\n                    <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" class=\"form-inputs\">\n                        <mat-form-field>\n                            <mat-label>{{form.name}}</mat-label>\n                            <input matInput formControlName=\"name\" required>\n                        </mat-form-field>\n\n                        <mat-form-field>\n                            <mat-label>{{form.email}}</mat-label>\n                            <input matInput type=\"email\" formControlName=\"email\" required>\n                        </mat-form-field>\n\n                        <mat-form-field>\n                            <mat-label>{{form.phone}}</mat-label>\n                            <input matInput formControlName=\"telephone\" required placeholder=\"Ex. 40756645342 / +40756645342\">\n\n                        </mat-form-field>\n\n                        <p class=\"form-gdpr mb-0\">\n                            <mat-checkbox formControlName=\"gdpr\" color=\"primary\" required>{{form.gdprInfo}}<span><a href=\"/content/privacy-policy\" target=\"_blank\">{{form.gdprBtn}}</a></span>\n                            </mat-checkbox>\n                        </p>\n\n\n                    </form>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <re-captcha id=\"recaptcha\" name=\"recaptcha\" #recaptcha=\"ngModel\" [(ngModel)]=\"token\" required [class.is-invalid]=\"recaptcha.invalid && (recaptcha.dirty || recaptcha.touched)\"></re-captcha>\n                        </div>\n                    </div>\n\n                    <button class=\"form-button\" type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"!contactForm.valid || isFormLoading || recaptcha.invalid\">\n                        <ng-container *ngIf=\"isFormLoading===false\">\n                            {{form.button}}\n                        </ng-container>\n                        <ng-container *ngIf=\"isFormLoading === true\">\n                          <span [style.display]=\"'block'\" class=\"indicator-progress\">\n                            {{form.button}}...{{ \" \" }}\n                              <span\n                                      class=\"spinner-border spinner-border-sm align-middle ms-2\"></span>\n                          </span>\n                        </ng-container>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <img src=\"assets/images/others/landing/round-shape.png\" alt=\"Rounded Shape\" class=\"rounded-shape-white\">\n\n    </div>\n</div>\n<div id=\"whoWeAre\">\n    <div class=\"custom-container\">\n        <h2>{{whoWeAre.title}}</h2>\n        <h3>{{whoWeAre.subtitle}}</h3>\n        <p class=\"main-content\">{{whoWeAre.content}}</p>\n\n        <div class=\"carousel-wrap\">\n            <owl-carousel-o [options]=\"customOptions\">\n                <ng-container *ngFor = \"let item of whoWeAre.carouselItems; let i=index\">\n                    <ng-template carouselSlide>\n                        <div class=\"carousel-item-box\">\n                            <div class=\"img-wrap\">\n                                <img [src]=\"item.icon\" alt=\"icon resource types\" class=\"img-fluid\" />\n                            </div>\n                            <p class=\"mb-0\">{{item.text}}</p>\n                        </div>\n                    </ng-template>\n                </ng-container>\n            </owl-carousel-o>\n        </div>\n\n    </div>\n\n</div>\n<div id=\"benefits\">\n    <div class=\"custom-container\">\n        <h2>{{benefits.title}}</h2>\n        <img src=\"assets/images/others/landing/bestinform-app.png\" alt=\"bestinform app\" class=\"app-photo\" />\n        <div class=\"desktop-benefits\">\n            <div class=\"row\">\n                <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 benefit-item\" *ngFor=\"let item of benefits.items; let i = index\">\n                    <p class=\"b-counter\">{{i+1}}</p>\n                    <h5>{{item.title}}</h5>\n                    <p class=\"b-content\">{{item.content}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"mobile-benefits\">\n            <div class=\"row\">\n                <div class=\"col-6 benefit-col\">\n                    <div *ngFor=\"let item of benefits.items; let i = index\">\n                        <ng-container *ngIf=\"i % 2 === 0\"> <!-- Check if index is even -->\n                            <p class=\"b-counter\">{{i+1}}</p>\n                            <h5>{{item.title}}</h5>\n                            <p class=\"b-content\">{{item.content}}</p>\n                        </ng-container>\n                    </div>\n                </div>\n                <div class=\"col-6 benefit-col\">\n                    <div *ngFor=\"let item of benefits.items; let i = index\">\n                        <ng-container *ngIf=\"i % 2 === 1\"> <!-- Check if index is odd -->\n                            <p class=\"b-counter\">{{i+1}}</p>\n                            <h5>{{item.title}}</h5>\n                            <p class=\"b-content\">{{item.content}}</p>\n                        </ng-container>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n<div id=\"formSection\">\n    <div class=\"custom-container\">\n        <div class=\"row\">\n            <div class=\"col ctaCol\">\n                <div class=\"ctaContent\">\n                    <h2>{{cta.title}}</h2>\n                    <h3>{{cta.subtitle}}</h3>\n                </div>\n            </div>\n            <div class=\"col formCol\">\n                <div class=\"form-box\">\n                    <p class=\"form-title mb-0\">{{form.title}}</p>\n                    <p class=\"form-subtitle mb-0\">{{form.subtitle}}</p>\n                    <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" class=\"form-inputs\">\n                        <mat-form-field>\n                            <mat-label>{{form.name}}</mat-label>\n                            <input matInput formControlName=\"name\" required>\n                        </mat-form-field>\n\n                        <mat-form-field>\n                            <mat-label>{{form.email}}</mat-label>\n                            <input matInput type=\"email\" formControlName=\"email\" required>\n                        </mat-form-field>\n\n                        <mat-form-field>\n                            <mat-label>{{form.phone}}</mat-label>\n                            <input matInput formControlName=\"telephone\" required placeholder=\"Ex. 40756645342 / +40756645342\">\n                        </mat-form-field>\n\n                        <p class=\"form-gdpr mb-0\">\n                            <mat-checkbox formControlName=\"gdpr\" color=\"primary\" required>{{form.gdprInfo}}<span><a href=\"/content/privacy-policy\" target=\"_blank\">{{form.gdprBtn}}</a></span>\n                            </mat-checkbox>\n                        </p>\n                    </form>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <re-captcha id=\"recaptcha\" name=\"recaptcha\" #recaptcha=\"ngModel\" [(ngModel)]=\"token\" required [class.is-invalid]=\"recaptcha.invalid && (recaptcha.dirty || recaptcha.touched)\"></re-captcha>\n                        </div>\n                    </div>\n                    <button class=\"form-button\" type=\"submit\" (click)=\"onSubmit()\"  [disabled]=\"!contactForm.valid || isFormLoading || recaptcha.invalid\">\n                        <ng-container *ngIf=\"isFormLoading===false\">\n                            {{form.button}}\n                        </ng-container>\n                        <ng-container *ngIf=\"isFormLoading === true\">\n                          <span [style.display]=\"'block'\" class=\"indicator-progress\">\n                            {{form.button}}...{{ \" \" }}\n                              <span\n                                      class=\"spinner-border spinner-border-sm align-middle ms-2\"></span>\n                          </span>\n                        </ng-container>\n                    </button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"aboutUs\">\n    <div class=\"custom-container\">\n        <div class=\"title-area\">\n            <h2 class=\"text-center\">{{aboutUs.title}}</h2>\n            <h3 class=\"text-center\">{{aboutUs.subtitle}}</h3>\n            <h4 class=\"text-center\">{{aboutUs.subSubtitle}}</h4>\n        </div>\n        <div class=\"d-flex square-info\">\n            <div class=\"column left-column\">\n                <div class=\"item\" *ngFor=\"let item of aboutUs.items.slice(0, 2)\">\n                    <h5>{{item.title}}</h5>\n                    <p>{{item.content}}</p>\n                </div>\n            </div>\n            <div class=\"center-image\">\n                <img src=\"assets/images/others/landing/Layer_1.png\" alt=\"about us square\" />\n            </div>\n            <div class=\"column right-column\">\n                <div class=\"item\" *ngFor=\"let item of aboutUs.items.slice(2, 4)\">\n                    <h5>{{item.title}}</h5>\n                    <p>{{item.content}}</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n<div id=\"services\">\n    <div class=\"custom-container\">\n        <h3>{{services.title}}</h3>\n        <h4>{{services.subtitle}}</h4>\n        <div class=\"row services-row\">\n            <div class=\"col service-col\" *ngFor=\"let item of services.items\">\n                <div class=\"img-wrapper\">\n                    <img [src]=\"item.photo\" alt=\"service image\"/>\n                </div>\n                <div class=\"service-content\">\n                    <h5>{{item.title}}</h5>\n                    <p>{{item.content}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"features\">\n    <div class=\"custom-container\">\n        <div class=\"row align-items-center main-features\">\n            <div class=\"col image-col\">\n                <img [src]=\"features.image\" alt=\"app photo\" class=\"img-fluid\"/>\n            </div>\n            <div class=\"col info-col\">\n                <h5>{{features.smallTitle}}</h5>\n                <h2>{{features.title}}</h2>\n                <p>{{features.content}}</p>\n            </div>\n        </div>\n        <div class=\"row features-items\">\n            <div class=\"col feature-item\" *ngFor=\"let item of features.items\">\n                <div class=\"d-flex\">\n                    <div class=\"icon-wrapp\">\n                        <img [src]=\"item.icon\" alt=\"feature icon\" class=\"img-fluid\" />\n                    </div>\n                    <div class=\"feature-info\">\n                        <h5>{{item.title}}</h5>\n                        <p>{{item.content}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"experience\">\n    <div class=\"custom-container\">\n        <div class=\"experience-box\">\n            <div class=\"exp-title\">\n                <h2>{{experience.title}}</h2>\n            </div>\n            <div class=\"exp-content\">\n                <p class=\"mb-0\">\n                    {{experience.mainContent}}\n                </p>\n            </div>\n        </div>\n        <div class=\"experience-info\">\n            <p>{{experience.secondContent}}</p>\n        </div>\n        <div class=\"experience-items\">\n            <div class=\"item\" *ngFor=\"let item of experience.items\">\n                <div class=\"item-content\">\n                    <div class=\"point\"></div>\n                    <div class=\"item-text\">\n                        <h5>{{item.title}}</h5>\n                        <p>{{item.content}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n<div id=\"dataGrid\" class=\"grid-container\">\n    <div class=\"col percent-col light-blue-col\">\n        <div>\n            <img [src]=\"dataBlocks.icon\" alt=\"percent icon\" class=\"img-fluid\"/>\n            <h5>{{dataBlocks.titleOne}}</h5>\n            <p>{{dataBlocks.contentOne}}</p>\n        </div>\n    </div>\n    <div class=\"col title-col dark-blue-col\">\n        <div>\n            <h2>{{dataBlocks.titleTwo}}</h2>\n        </div>\n    </div>\n    <div class=\"col points-col dark-blue-col\">\n        <div>\n            <div class=\"item\" *ngFor=\"let item of dataBlocks.points\">\n                <div class=\"item-content\">\n                    <div class=\"point\"></div>\n                    <div class=\"item-text\">\n                        <h5>{{item.title}}</h5>\n                        <p>{{item.content}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col graph-col light-blue-col\">\n        <div>\n            <h2>{{dataBlocks.titleThree}}</h2>\n            <img [src]=\"dataBlocks.image\" alt=\"graph image\" class=\"img-fluid\" />\n            <p>{{dataBlocks.contentTwo}}</p>\n        </div>\n    </div>\n</div>\n<div id=\"formSectionTwo\">\n    <div class=\"custom-container\">\n        <div class=\"row\">\n            <div class=\"col ctaCol\">\n                <div class=\"ctaContent\">\n                    <h2>{{cta.title}}</h2>\n                    <h3>{{cta.subtitle}}</h3>\n                </div>\n            </div>\n            <div class=\"col formCol\">\n                <div class=\"form-box\">\n                    <p class=\"form-title mb-0\">{{form.title}}</p>\n                    <p class=\"form-subtitle mb-0\">{{form.subtitle}}</p>\n                    <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" class=\"form-inputs\">\n                        <mat-form-field>\n                            <mat-label>{{form.name}}</mat-label>\n                            <input matInput formControlName=\"name\" required>\n                        </mat-form-field>\n\n                        <mat-form-field>\n                            <mat-label>{{form.email}}</mat-label>\n                            <input matInput type=\"email\" formControlName=\"email\" required>\n                        </mat-form-field>\n\n                        <mat-form-field>\n                            <mat-label>{{form.phone}}</mat-label>\n                            <input matInput formControlName=\"telephone\" required placeholder=\"Ex. 40756645342 / +40756645342\">\n                        </mat-form-field>\n\n                        <p class=\"form-gdpr mb-0\">\n                            <mat-checkbox formControlName=\"gdpr\" color=\"primary\" required>{{form.gdprInfo}}<span><a href=\"/content/privacy-policy\" target=\"_blank\">{{form.gdprBtn}}</a></span>\n                            </mat-checkbox>\n                        </p>\n                    </form>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <re-captcha id=\"recaptcha\" name=\"recaptcha\" #recaptcha=\"ngModel\" [(ngModel)]=\"token\" required [class.is-invalid]=\"recaptcha.invalid && (recaptcha.dirty || recaptcha.touched)\"></re-captcha>\n                        </div>\n                    </div>\n                    <button class=\"form-button\" type=\"submit\" (click)=\"onSubmit()\"  [disabled]=\"!contactForm.valid || isFormLoading || recaptcha.invalid\">\n                        <ng-container *ngIf=\"isFormLoading===false\">\n                            {{form.button}}\n                        </ng-container>\n                        <ng-container *ngIf=\"isFormLoading === true\">\n                          <span [style.display]=\"'block'\" class=\"indicator-progress\">\n                            {{form.button}}...{{ \" \" }}\n                              <span\n                                      class=\"spinner-border spinner-border-sm align-middle ms-2\"></span>\n                          </span>\n                        </ng-container>\n                    </button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"cta\">\n    <div class=\"custom-container\">\n        <h4>{{ctaFooter.title}}</h4>\n    </div>\n</div>\n<div class=\"footer d-flex flex-column justify-content-between align-items-center\">\n    <img src=\"assets/images/logos/Logo%20-%20White.png\" width=\"165px\">\n    <div class=\"social-media\">\n        <a href=\"https://www.facebook.com/profile.php?id=100076116217462\" target=\"_blank\">\n            <i class=\"fab fa-facebook-f me-3\"></i>\n        </a>\n\n        <a href=\"https://www.instagram.com/bestinform.app/?igshid=OGQ5ZDc2ODk2ZA%3D%3D\" target=\"_blank\">\n            <i class=\"fab fa-instagram\"></i>\n        </a>\n    </div>\n    <p *ngIf=\"pageLang === 'en'\" class=\"mb-0\">© 2023 Bestinform | All rights reserved.</p>\n    <p *ngIf=\"pageLang === 'ro'\" class=\"mb-0\">© 2023 Bestinform | Toate drepturile rezervate.</p>\n</div>\n<div class=\"d-flex justify-content-center align-items-center w-100 eu-header\">\n    <img src=\"assets/images/logos/fonduri-ue.png\" class=\"w-25\">\n    <p class=\"w-25 mb-0 text-small\">Pentru informaţii\n        detaliate despre celelalte programe cofinanţate de Uniunea\n        Europeană, vă invităm să vizitaţi <a href=\"https://www.fonduri-ue.ro/\" target=\"_blank\">www.fonduri-ue.ro\n        </a></p>\n</div>\n";

/***/ }),

/***/ 51073:
/*!*************************************************************!*\
  !*** ./node_modules/ng-recaptcha/fesm2022/ng-recaptcha.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECAPTCHA_BASE_URL": () => (/* binding */ RECAPTCHA_BASE_URL),
/* harmony export */   "RECAPTCHA_LANGUAGE": () => (/* binding */ RECAPTCHA_LANGUAGE),
/* harmony export */   "RECAPTCHA_NONCE": () => (/* binding */ RECAPTCHA_NONCE),
/* harmony export */   "RECAPTCHA_SETTINGS": () => (/* binding */ RECAPTCHA_SETTINGS),
/* harmony export */   "RECAPTCHA_V3_SITE_KEY": () => (/* binding */ RECAPTCHA_V3_SITE_KEY),
/* harmony export */   "ReCaptchaV3Service": () => (/* binding */ ReCaptchaV3Service),
/* harmony export */   "RecaptchaComponent": () => (/* binding */ RecaptchaComponent),
/* harmony export */   "RecaptchaFormsModule": () => (/* binding */ RecaptchaFormsModule),
/* harmony export */   "RecaptchaLoaderService": () => (/* binding */ RecaptchaLoaderService),
/* harmony export */   "RecaptchaModule": () => (/* binding */ RecaptchaModule),
/* harmony export */   "RecaptchaV3Module": () => (/* binding */ RecaptchaV3Module),
/* harmony export */   "RecaptchaValueAccessorDirective": () => (/* binding */ RecaptchaValueAccessorDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);





const RECAPTCHA_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-language");
const RECAPTCHA_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-base-url");
const RECAPTCHA_NONCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-nonce-tag");
const RECAPTCHA_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-settings");
const RECAPTCHA_V3_SITE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-v3-site-key");
function loadScript(renderMode, onLoaded, urlParams, url, nonce) {
  window.ng2recaptchaloaded = () => {
    onLoaded(grecaptcha);
  };
  const script = document.createElement("script");
  script.innerHTML = "";
  const baseUrl = url || "https://www.google.com/recaptcha/api.js";
  script.src = `${baseUrl}?render=${renderMode}&onload=ng2recaptchaloaded${urlParams}`;
  if (nonce) {
    script.setAttribute('nonce', nonce);
  }
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}
const loader = {
  loadScript
};
class RecaptchaLoaderService {
  /**
   * @internal
   * @nocollapse
   */
  static #_ = this.ready = null;
  constructor(
  // eslint-disable-next-line @typescript-eslint/ban-types
  platformId, language, baseUrl, nonce, v3SiteKey) {
    this.platformId = platformId;
    this.language = language;
    this.baseUrl = baseUrl;
    this.nonce = nonce;
    this.v3SiteKey = v3SiteKey;
    this.init();
    this.ready = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) ? RecaptchaLoaderService.ready.asObservable() : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)();
  }
  /** @internal */
  init() {
    if (RecaptchaLoaderService.ready) {
      return;
    }
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
      RecaptchaLoaderService.ready = subject;
      const langParam = this.language ? "&hl=" + this.language : "";
      const renderMode = this.v3SiteKey || "explicit";
      loader.loadScript(renderMode, grecaptcha => subject.next(grecaptcha), langParam, this.baseUrl, this.nonce);
    }
  }
  static #_2 = this.ɵfac = function RecaptchaLoaderService_Factory(t) {
    return new (t || RecaptchaLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_LANGUAGE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_V3_SITE_KEY, 8));
  };
  static #_3 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RecaptchaLoaderService,
    factory: RecaptchaLoaderService.ɵfac
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaLoaderService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_LANGUAGE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_BASE_URL]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_NONCE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_V3_SITE_KEY]
      }]
    }];
  }, null);
})();
let nextId = 0;
class RecaptchaComponent {
  constructor(elementRef, loader, zone, settings) {
    this.elementRef = elementRef;
    this.loader = loader;
    this.zone = zone;
    this.id = `ngrecaptcha-${nextId++}`;
    this.errorMode = "default";
    this.resolved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * @deprecated `(error) output will be removed in the next major version. Use (errored) instead
     */
    // eslint-disable-next-line @angular-eslint/no-output-native
    this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.errored = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (settings) {
      this.siteKey = settings.siteKey;
      this.theme = settings.theme;
      this.type = settings.type;
      this.size = settings.size;
      this.badge = settings.badge;
    }
  }
  ngAfterViewInit() {
    this.subscription = this.loader.ready.subscribe(grecaptcha => {
      if (grecaptcha != null && grecaptcha.render instanceof Function) {
        this.grecaptcha = grecaptcha;
        this.renderRecaptcha();
      }
    });
  }
  ngOnDestroy() {
    // reset the captcha to ensure it does not leave anything behind
    // after the component is no longer needed
    this.grecaptchaReset();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  /**
   * Executes the invisible recaptcha.
   * Does nothing if component's size is not set to "invisible".
   */
  execute() {
    if (this.size !== "invisible") {
      return;
    }
    if (this.widget != null) {
      void this.grecaptcha.execute(this.widget);
    } else {
      // delay execution of recaptcha until it actually renders
      this.executeRequested = true;
    }
  }
  reset() {
    if (this.widget != null) {
      if (this.grecaptcha.getResponse(this.widget)) {
        // Only emit an event in case if something would actually change.
        // That way we do not trigger "touching" of the control if someone does a "reset"
        // on a non-resolved captcha.
        this.resolved.emit(null);
      }
      this.grecaptchaReset();
    }
  }
  /**
   * ⚠️ Warning! Use this property at your own risk!
   *
   * While this member is `public`, it is not a part of the component's public API.
   * The semantic versioning guarantees _will not be honored_! Thus, you might find that this property behavior changes in incompatible ways in minor or even patch releases.
   * You are **strongly advised** against using this property.
   * Instead, use more idiomatic ways to get reCAPTCHA value, such as `resolved` EventEmitter, or form-bound methods (ngModel, formControl, and the likes).å
   */
  get __unsafe_widgetValue() {
    return this.widget != null ? this.grecaptcha.getResponse(this.widget) : null;
  }
  /** @internal */
  expired() {
    this.resolved.emit(null);
  }
  /** @internal */
  onError(args) {
    this.error.emit(args);
    this.errored.emit(args);
  }
  /** @internal */
  captchaResponseCallback(response) {
    this.resolved.emit(response);
  }
  /** @internal */
  grecaptchaReset() {
    if (this.widget != null) {
      this.zone.runOutsideAngular(() => this.grecaptcha.reset(this.widget));
    }
  }
  /** @internal */
  renderRecaptcha() {
    // This `any` can be removed after @types/grecaptcha get updated
    const renderOptions = {
      badge: this.badge,
      callback: response => {
        this.zone.run(() => this.captchaResponseCallback(response));
      },
      "expired-callback": () => {
        this.zone.run(() => this.expired());
      },
      sitekey: this.siteKey,
      size: this.size,
      tabindex: this.tabIndex,
      theme: this.theme,
      type: this.type
    };
    if (this.errorMode === "handled") {
      renderOptions["error-callback"] = (...args) => {
        this.zone.run(() => this.onError(args));
      };
    }
    this.widget = this.grecaptcha.render(this.elementRef.nativeElement, renderOptions);
    if (this.executeRequested === true) {
      this.executeRequested = false;
      this.execute();
    }
  }
  static #_ = this.ɵfac = function RecaptchaComponent_Factory(t) {
    return new (t || RecaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RecaptchaLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RECAPTCHA_SETTINGS, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RecaptchaComponent,
    selectors: [["re-captcha"]],
    hostVars: 1,
    hostBindings: function RecaptchaComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
      }
    },
    inputs: {
      id: "id",
      siteKey: "siteKey",
      theme: "theme",
      type: "type",
      size: "size",
      tabIndex: "tabIndex",
      badge: "badge",
      errorMode: "errorMode"
    },
    outputs: {
      resolved: "resolved",
      error: "error",
      errored: "errored"
    },
    exportAs: ["reCaptcha"],
    decls: 0,
    vars: 0,
    template: function RecaptchaComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      exportAs: "reCaptcha",
      selector: "re-captcha",
      template: ``
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: RecaptchaLoaderService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_SETTINGS]
      }]
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.id"]
    }],
    siteKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    badge: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    errorMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resolved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    errored: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class RecaptchaCommonModule {
  static #_ = this.ɵfac = function RecaptchaCommonModule_Factory(t) {
    return new (t || RecaptchaCommonModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: RecaptchaCommonModule,
    declarations: [RecaptchaComponent],
    exports: [RecaptchaComponent]
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaCommonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [RecaptchaComponent],
      exports: [RecaptchaComponent]
    }]
  }], null, null);
})();
class RecaptchaModule {
  static #_ = this.ɵfac = function RecaptchaModule_Factory(t) {
    return new (t || RecaptchaModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: RecaptchaModule,
    imports: [RecaptchaCommonModule],
    exports: [RecaptchaComponent]
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [RecaptchaLoaderService],
    imports: [RecaptchaCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [RecaptchaComponent],
      imports: [RecaptchaCommonModule],
      providers: [RecaptchaLoaderService]
    }]
  }], null, null);
})();

/**
 * The main service for working with reCAPTCHA v3 APIs.
 *
 * Use the `execute` method for executing a single action, and
 * `onExecute` observable for listening to all actions at once.
 */
class ReCaptchaV3Service {
  constructor(zone, siteKey,
  // eslint-disable-next-line @typescript-eslint/ban-types
  platformId, baseUrl, nonce, language) {
    /** @internal */
    this.onLoadComplete = grecaptcha => {
      this.grecaptcha = grecaptcha;
      if (this.actionBacklog && this.actionBacklog.length > 0) {
        this.actionBacklog.forEach(([action, subject]) => this.executeActionWithSubject(action, subject));
        this.actionBacklog = undefined;
      }
    };
    this.zone = zone;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(platformId);
    this.siteKey = siteKey;
    this.nonce = nonce;
    this.language = language;
    this.baseUrl = baseUrl;
    this.init();
  }
  get onExecute() {
    if (!this.onExecuteSubject) {
      this.onExecuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.onExecuteObservable = this.onExecuteSubject.asObservable();
    }
    return this.onExecuteObservable;
  }
  get onExecuteError() {
    if (!this.onExecuteErrorSubject) {
      this.onExecuteErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.onExecuteErrorObservable = this.onExecuteErrorSubject.asObservable();
    }
    return this.onExecuteErrorObservable;
  }
  /**
   * Executes the provided `action` with reCAPTCHA v3 API.
   * Use the emitted token value for verification purposes on the backend.
   *
   * For more information about reCAPTCHA v3 actions and tokens refer to the official documentation at
   * https://developers.google.com/recaptcha/docs/v3.
   *
   * @param {string} action the action to execute
   * @returns {Observable<string>} an `Observable` that will emit the reCAPTCHA v3 string `token` value whenever ready.
   * The returned `Observable` completes immediately after emitting a value.
   */
  execute(action) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    if (this.isBrowser) {
      if (!this.grecaptcha) {
        if (!this.actionBacklog) {
          this.actionBacklog = [];
        }
        this.actionBacklog.push([action, subject]);
      } else {
        this.executeActionWithSubject(action, subject);
      }
    }
    return subject.asObservable();
  }
  /** @internal */
  executeActionWithSubject(action, subject) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onError = error => {
      this.zone.run(() => {
        subject.error(error);
        if (this.onExecuteErrorSubject) {
          // We don't know any better at this point, unfortunately, so have to resort to `any`
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          this.onExecuteErrorSubject.next({
            action,
            error
          });
        }
      });
    };
    this.zone.runOutsideAngular(() => {
      try {
        this.grecaptcha.execute(this.siteKey, {
          action
        }).then(token => {
          this.zone.run(() => {
            subject.next(token);
            subject.complete();
            if (this.onExecuteSubject) {
              this.onExecuteSubject.next({
                action,
                token
              });
            }
          });
        }, onError);
      } catch (e) {
        onError(e);
      }
    });
  }
  /** @internal */
  init() {
    if (this.isBrowser) {
      if ("grecaptcha" in window) {
        this.grecaptcha = grecaptcha;
      } else {
        const langParam = this.language ? "&hl=" + this.language : "";
        loader.loadScript(this.siteKey, this.onLoadComplete, langParam, this.baseUrl, this.nonce);
      }
    }
  }
  static #_ = this.ɵfac = function ReCaptchaV3Service_Factory(t) {
    return new (t || ReCaptchaV3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_V3_SITE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_LANGUAGE, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ReCaptchaV3Service,
    factory: ReCaptchaV3Service.ɵfac
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReCaptchaV3Service, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_V3_SITE_KEY]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_BASE_URL]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_NONCE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_LANGUAGE]
      }]
    }];
  }, null);
})();
class RecaptchaV3Module {
  static #_ = this.ɵfac = function RecaptchaV3Module_Factory(t) {
    return new (t || RecaptchaV3Module)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: RecaptchaV3Module
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [ReCaptchaV3Service]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaV3Module, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [ReCaptchaV3Service]
    }]
  }], null, null);
})();
class RecaptchaValueAccessorDirective {
  constructor(host) {
    this.host = host;
    this.requiresControllerReset = false;
  }
  writeValue(value) {
    if (!value) {
      this.host.reset();
    } else {
      // In this case, it is most likely that a form controller has requested to write a specific value into the component.
      // This isn't really a supported case - reCAPTCHA values are single-use, and, in a sense, readonly.
      // What this means is that the form controller has recaptcha control state of X, while reCAPTCHA itself can't "restore"
      // to that state. In order to make form controller aware of this discrepancy, and to fix the said misalignment,
      // we'll be telling the controller to "reset" the value back to null.
      if (this.host.__unsafe_widgetValue !== value && Boolean(this.host.__unsafe_widgetValue) === false) {
        this.requiresControllerReset = true;
      }
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
    if (this.requiresControllerReset) {
      this.requiresControllerReset = false;
      this.onChange(null);
    }
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onResolve($event) {
    if (this.onChange) {
      this.onChange($event);
    }
    if (this.onTouched) {
      this.onTouched();
    }
  }
  static #_ = this.ɵfac = function RecaptchaValueAccessorDirective_Factory(t) {
    return new (t || RecaptchaValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RecaptchaComponent));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: RecaptchaValueAccessorDirective,
    selectors: [["re-captcha", "formControlName", ""], ["re-captcha", "formControl", ""], ["re-captcha", "ngModel", ""]],
    hostBindings: function RecaptchaValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resolved", function RecaptchaValueAccessorDirective_resolved_HostBindingHandler($event) {
          return ctx.onResolve($event);
        });
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      multi: true,
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RecaptchaValueAccessorDirective)
    }])]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaValueAccessorDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RecaptchaValueAccessorDirective)
      }],
      selector: "re-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]"
    }]
  }], function () {
    return [{
      type: RecaptchaComponent
    }];
  }, {
    onResolve: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["resolved", ["$event"]]
    }]
  });
})();
class RecaptchaFormsModule {
  static #_ = this.ɵfac = function RecaptchaFormsModule_Factory(t) {
    return new (t || RecaptchaFormsModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: RecaptchaFormsModule,
    declarations: [RecaptchaValueAccessorDirective],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, RecaptchaCommonModule],
    exports: [RecaptchaValueAccessorDirective]
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, RecaptchaCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaFormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [RecaptchaValueAccessorDirective],
      exports: [RecaptchaValueAccessorDirective],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, RecaptchaCommonModule]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_features_landing-bestinform_landing-bestinform_module_ts.js.map