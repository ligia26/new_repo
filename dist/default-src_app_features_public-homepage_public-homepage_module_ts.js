(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_features_public-homepage_public-homepage_module_ts"],{

/***/ 70900:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let AppService = class AppService {};
AppService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], AppService);


/***/ }),

/***/ 72399:
/*!**********************************************!*\
  !*** ./src/app/features/auth/auth.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 60173);
/* harmony import */ var _forgotten_pass_forgotten_pass_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotten-pass/forgotten-pass.component */ 96443);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 14081);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _vime_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vime/angular */ 8662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _provider_register_provider_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider-register/provider-register.component */ 4595);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularx-social-login */ 44260);












let AuthModule = class AuthModule {};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _forgotten_pass_forgotten_pass_component__WEBPACK_IMPORTED_MODULE_1__.ForgottenPassComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, _provider_register_provider_register_component__WEBPACK_IMPORTED_MODULE_4__.ProviderRegisterComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _vime_angular__WEBPACK_IMPORTED_MODULE_8__.VimeModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, angularx_social_login__WEBPACK_IMPORTED_MODULE_11__.SocialLoginModule],
  providers: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [{
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__.FacebookLoginProvider.PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__.FacebookLoginProvider('142661982083241')
      }]
    }
  }]
})], AuthModule);


/***/ }),

/***/ 96443:
/*!**************************************************************************!*\
  !*** ./src/app/features/auth/forgotten-pass/forgotten-pass.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgottenPassComponent": () => (/* binding */ ForgottenPassComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgotten_pass_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotten-pass.component.html?ngResource */ 41998);
/* harmony import */ var _forgotten_pass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotten-pass.component.scss?ngResource */ 46449);
/* harmony import */ var _forgotten_pass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forgotten_pass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/auth.service */ 56566);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);










let ForgottenPassComponent = class ForgottenPassComponent {
  constructor(formbuilder, router, authService, http, toastService, translate) {
    this.formbuilder = formbuilder;
    this.router = router;
    this.authService = authService;
    this.http = http;
    this.toastService = toastService;
    this.translate = translate;
    this.emailSent = false;
    this.hide = true;
  }
  ngOnInit() {
    this.formInit();
  }
  // cancelAction(){
  //   console.log('cancel action');
  //   this.authService.triggerUserChanges(false);
  // }
  formInit() {
    this.formPass = this.formbuilder.group({
      userEmail: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email])],
      userResetCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
      userPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])]
    }, {
      validator: this.checkPasswords
    });
  }
  onSendCodeClick() {
    console.log('TRIMIT MAIL');
    this.formPass.get('userEmail').markAsTouched();
    if (this.formPass.get('userEmail').valid) {
      console.log('bene bos');
      this.authService.sendResetUserPassword(this.formPass.value.userEmail).subscribe(res => {
        console.log(res);
        if (res.success) {
          this.emailSent = true;
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.FORGOTPASS-EMAIL.SUCCESS"), "success");
        } else {
          if (res.reason === "emailNotFound") {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.FORGOTPASS-EMAIL.EMAIL-NOT-FOUND"), "error");
          } else if (res.reason === "fail") {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.FORGOTPASS-EMAIL.FAIL"), "error");
          } else if (res.reason === "sendEmailFail") {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.FORGOTPASS-EMAIL.FAIL"), "error");
          } else if (res.reason === "accountNotActive") {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.FORGOTPASS-EMAIL.NOT-ACTIVE"), "error");
          }
        }
      }, error => {
        console.log(error.error.reason);
        if (error.error.reason === "emailNotFound") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.FORGOTPASS-EMAIL.EMAIL-NOT-FOUND"), "error");
        } else if (error.error.reason === "fail") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.FORGOTPASS-EMAIL.FAIL"), "error");
        } else if (error.error.reason === "sendEmailFail") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.FORGOTPASS-EMAIL.FAIL"), "error");
        } else if (error.error.reason === "accountNotActive") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.FORGOTPASS-EMAIL.NOT-ACTIVE"), "error");
        }
      });
    } else {
      console.log('sal bos');
    }
  }
  onResetPassword() {
    console.log('SCHIMB PAROLA');
    this.formPass.markAllAsTouched();
    if (this.formPass.valid) {
      console.log('formular valid');
      // const passwordString = JSON.stringify(this.formPass.value.userPassword);
      // const encodedPassword = btoa(passwordString);
      const encodedPassword = encodeURI(this.formPass.value.userPassword);
      const password = {
        userEmail: this.formPass.value.userEmail,
        userResetCode: this.formPass.value.userResetCode,
        userPassword: encodedPassword
      };
      console.log('vezi obiect trimis', password);
      this.authService.resetPassword(password).subscribe(reset => {
        console.log(reset);
        if (reset.success) {
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.RESET-PASS.SUCCESS"), "success");
        } else {
          if (reset.reason === "invalidEmail") {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.RESET-PASS.INVALID-EMAIL"), "error");
          } else if (reset.reason === "invalidCode") {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.RESET-PASS.USER-NOT-FOUND"), "error");
          } else if (reset.reason === "invalidPassword") {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.RESET-PASS.INVALID-PASS"), "error");
          } else if (reset.reason === "cannotUseAnOldPassword") {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Nu poți folosi o parola veche!", "error");
          }
          // else if(reset.reason==="accountNotActive"){
          //   this.toastService.showToast(this.translate.instant("TOAST.ERROR"),this.translate.instant("TOAST.RESET-PASS.NOT-ACTIVE"),"error");
          // }
        }

        this.authService.triggerUserChanges(true);
      }, error => {
        console.log(error);
        if (error.error.reason === "invalidEmail") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.RESET-PASS.INVALID-EMAIL"), "error");
        } else if (error.error.reason === "invalidCode") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.RESET-PASS.USER-NOT-FOUND"), "error");
        } else if (error.error.reason === "invalidPassword") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.RESET-PASS.INVALID-PASS"), "error");
        } else if (error.error.reason === "cannotUseAnOldPassword") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Nu poți folosi o parola veche!", "error");
        }
      });
    } else {
      console.log('formular invalid');
    }
  }
  checkPasswords(control) {
    const password = control.get('userPassword');
    const nameRegexp = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const numbers = /[1234567890]/;
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const whiteSpace = /[" "]/;
    //Password required
    if (password.value === null) {
      password.setErrors({
        requiredPass: true
      });
    }
    //Min length password
    if (password.value?.length < 8) {
      password.setErrors({
        passMin: true
      });
    }
    //Max length password
    if (password.value?.length > 16) {
      password.setErrors({
        passMax: true
      });
    }
    //At least a special character
    if (password.value && !nameRegexp.test(password.value)) {
      password.setErrors({
        specialCharacter: true
      });
    }
    //At least a digit
    if (password.value && !numbers.test(password.value)) {
      password.setErrors({
        number: true
      });
    }
    //At least an upper case
    if (password.value && !upper.test(password.value)) {
      password.setErrors({
        upper: true
      });
    }
    //At least a lower case
    if (password.value && !lower.test(password.value)) {
      password.setErrors({
        lower: true
      });
    }
    //No whitespaces
    if (password.value && whiteSpace.test(password.value)) {
      password.setErrors({
        whiteSpace: true
      });
    }
    // else {
    //     password.setErrors(null);
    //     confPassword.setErrors(null);
    // }
    return;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
  }];
};
ForgottenPassComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-forgotten-pass',
  template: _forgotten_pass_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forgotten_pass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForgottenPassComponent);


/***/ }),

/***/ 60173:
/*!********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 74783);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 80810);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/auth.service */ 56566);
/* harmony import */ var _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/localStorage.service */ 72538);
/* harmony import */ var _shared_services_jwtToken_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/jwtToken.service */ 57453);
/* harmony import */ var _forgotten_pass_forgotten_pass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forgotten-pass/forgotten-pass.component */ 96443);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../register/register.component */ 14081);
/* harmony import */ var _reports_services_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reports/_services/reports.service */ 94930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_services_user_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/_services/user-location.service */ 22587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularx-social-login */ 44260);


















let LoginComponent = class LoginComponent {
  constructor(formBuilder, router, authService, localStorage, decode, modalService, toastService, translate, jasperService, userLocationService, socialAuthService
  // @Inject(MAT_DIALOG_DATA) public role: any,
  ) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.authService = authService;
    this.localStorage = localStorage;
    this.decode = decode;
    this.modalService = modalService;
    this.toastService = toastService;
    this.translate = translate;
    this.jasperService = jasperService;
    this.userLocationService = userLocationService;
    this.socialAuthService = socialAuthService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.hide = true;
    this.isFacebookLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(false);
    this.unsubscribe = [];
    this.isLoggedin = undefined;
    console.log('social login 1', this.isLoggedin);
    const loadingSubscr = this.isFacebookLoading$.asObservable().subscribe(res => this.isFacebookLoading = res);
    this.unsubscribe.push(loadingSubscr);
  }
  ngOnInit() {
    this.formInit();
    this.socialAuthService.authState.subscribe(user => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log('social login 2', this.socialUser);
      this.authService.loginWithFacebook('client', this.socialUser.email, this.socialUser.authToken).subscribe(resp => {
        console.log('login fb 1', resp);
        this.toastService.showToast("Succes", "Te-ai logat folosind FACEBOOK! Vei fi redirectionat imediat.", "success");
        this.authService.triggerUserChanges(true);
        this.authService.getCurrentUser().subscribe(response => {
          console.log(response);
          this.isFacebookLoading$.next(false);
          if (response.userSetting?.colorMode) {
            this.localStorage.set('colorMode', response.userSetting?.colorMode);
          } else {
            this.localStorage.set('colorMode', 'light');
          }
          if (response.userSetting?.language) {
            this.localStorage.set('langFromStorage', response.userSetting?.language);
          } else {
            this.localStorage.set('langFromStorage', 'ro');
          }
          if (response.roles.includes('ROLE_PROVIDER')) {
            this.router.navigate(['/private/provider']);
          } else if (response.roles.includes('ROLE_CLIENT')) {
            if (!response.enrollment) {
              this.router.navigate(['/client/enroll']);
            } else {
              this.router.navigate(['/client']).then(() => {
                console.log('after login promise');
                this.userLocationService.checkUserCoordinates();
              });
            }
          }
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.LOGIN.SUCCESS"), "success");
        }, () => {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.LOGIN.INVALID-CREDENTIALS"), "error");
        });
        console.log('eroare', resp);
      }, error => {
        this.isFacebookLoading$.next(false);
        if (error.error.reason === 'emailExists') {
          this.toastService.showToast("Error", "Exista deja un cont asociat email-ului de la contul de Facebook.", "error");
        } else if (error.error.reason === "notApproved") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Autentificarea este momentan închisă!", "error");
        } else {
          this.toastService.showToast("Error", "Conectarea cu Facebook nu a functionat.", "error");
        }
      });
      // this.localStorage.set('token', user.authToken);
      // // this.localStorage.set('refreshToken', res.refreshToken);
      // this.authService.triggerUserChanges(true);
    });
  }

  formInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])],
      twoFA: ['']
    });
  }
  loginWithFacebook() {
    this.isFacebookLoading$.next(true);
    this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_13__.FacebookLoginProvider.PROVIDER_ID).then(r => {
      console.log('response fb', r);
    }, error => {
      this.isFacebookLoading$.next(false);
      console.log('eroare fb login', error);
      this.toastService.showToast("Error", "Conectarea cu Facebook nu a functionat. Eroare primita: " + error, "error");
    });
  }
  sendAuthCode() {
    const dataObj = {
      email: this.loginForm.value.email,
      password: encodeURI(this.loginForm.value.password),
      mobile: false
    };
    console.log('send auth code', dataObj);
    this.authService.sendAuthenticationCode(dataObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log(res);
        this.twoFA = true;
        this.toastService.showToast("Succes", "Codul pentru autentificarea in doi pasi a fost trimis pe contul dvs. de email!", "success");
        this.isLoginLoading = false;
      },
      error: error => {
        this.twoFA = false;
        this.toastService.showToast("Error", "Codul pentru 2FA NU a fost trimis. Mai încearcă o dată!", "error");
        console.log(error);
        this.isLoginLoading = false;
      }
    });
  }
  sendUserInvalidSessionEmail() {
    //   this.toastService.showToast(this.translate.instant("TOAST.ERROR"),"O alta sesiune este deja activă! A fost trimis un mail pentru dezactivarea acesteia!","error");
    console.log("inainte sa se trimita emailul");
    this.authService.sendUserInvalidSessionEmail(this.loginForm.get('email').value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log("succes?", res);
        console.log("s-a trimis emailul la", this.loginForm.get('email').value);
        this.toastService.showToast('Warning!', "O alta sesiune este deja activă! A fost trimis un mail pentru dezactivarea acesteia!", "warning");
        this.router.navigate(['/']);
        this.closeModal();
      }
    });
  }
  twoFALogin() {
    console.log(this.loginForm.value);
    const authCode = this.loginForm.get('twoFA').value;
    this.isLoginLoading = true;
    this.authService.login2FA(authCode).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log('RES 2FA:', res);
        if (res.success === true) {
          this.authService.triggerUserChanges(true);
          console.log('ne-am auth cu doi factori', res);
          this.authService.getCurrentUser().subscribe(response => {
            console.log(response);
            this.isLoginLoading = false;
            if (response.userSetting?.colorMode) {
              this.localStorage.set('colorMode', response.userSetting?.colorMode);
            } else {
              this.localStorage.set('colorMode', 'light');
            }
            if (response.userSetting?.language) {
              this.localStorage.set('langFromStorage', response.userSetting?.language);
            } else {
              this.localStorage.set('langFromStorage', 'ro');
            }
            if (response.roles.includes('ROLE_SUPER_ADMIN')) {
              this.router.navigate(['/private/admin/dashboard']);
              this.jasperService.loginJasper('jasperadmin', 'jasperadmin').subscribe(response => {
                console.log('login jasper 1', response);
              });
            } else if (response.roles.includes('ROLE_STAFF')) {
              console.log('e staff');
              this.router.navigate(['/private/staff']);
              this.jasperService.loginJasper('jasperadmin', 'jasperadmin').subscribe(response => {
                console.log('login jasper 2', response);
              });
            } else if (response.roles.includes('ROLE_PROVIDER')) {
              this.router.navigate(['/private/provider']);
              this.jasperService.loginJasper('jasperadmin', 'jasperadmin').subscribe(response => {
                console.log('login jasper 2', response);
              });
            } else if (response.roles.includes('ROLE_CLIENT')) {
              if (!response.enrollment) {
                this.router.navigate(['/client/enroll']);
              } else {
                this.router.navigate(['/client']).then(() => {
                  console.log('after login promise');
                  this.userLocationService.checkUserCoordinates();
                });
              }
            }
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.LOGIN.SUCCESS"), "success");
          }, () => {
            this.isLoginLoading = false;
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.LOGIN.INVALID-CREDENTIALS"), "error");
          });
        } else if (res === false) {
          this.isLoginLoading = false;
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Codul nu există sau a expirat! Mai încearcă o dată!", "error");
          this.twoFA = false;
          this.loginForm.get('twoFA').setValue('');
        }
      },
      error: error => {
        this.isLoginLoading = false;
        console.log('EROARE AFISATA 2FA:', error.error.reason);
        if (error.error.reason === "accountBlocked") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.LOGIN.ACCOUNT-BLOCKED"), "error");
        } else if (error.error.reason === "inactive" || error.error.reason === "archived") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Contul dvs. a fost dezactivat sau arhivat. Luati legatura cu administratorul site-ului!", "error");
        } else {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "A apărut o problemă tehnica!", "error");
        }
      }
    });
  }
  onLoginClick() {
    console.log(this.loginForm.value);
    this.isLoginLoading = true;
    this.authService.login(this.loginForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (res.reason === '2FA') {
          //to show or hide 2fa form field
          //  this.twoFAActive();
          this.sendAuthCode();
        } else {
          // this.localStorage.set('token', res.token);
          // this.localStorage.set('refreshToken', res.refreshToken);
          this.authService.triggerUserChanges(true);
          this.authService.getCurrentUser().subscribe(response => {
            console.log(response);
            this.isLoginLoading = false;
            if (response.userSetting?.colorMode) {
              this.localStorage.set('colorMode', response.userSetting?.colorMode);
            } else {
              this.localStorage.set('colorMode', 'light');
            }
            if (response.userSetting?.language) {
              this.localStorage.set('langFromStorage', response.userSetting?.language);
            } else {
              this.localStorage.set('langFromStorage', 'ro');
            }
            if (response.roles.includes('ROLE_SUPER_ADMIN')) {
              this.router.navigate(['/private/admin/dashboard']);
              this.jasperService.loginJasper('jasperadmin', 'jasperadmin').subscribe(response => {
                console.log('login jasper 3', response);
              });
            } else if (response.roles.includes('ROLE_STAFF')) {
              console.log('e staff');
              this.router.navigate(['/private/staff']);
              this.jasperService.loginJasper('jasperadmin', 'jasperadmin').subscribe(response => {
                console.log('login jasper 4', response);
              });
            } else if (response.roles.includes('ROLE_PROVIDER')) {
              this.router.navigate(['/private/provider']);
              this.jasperService.loginJasper('jasperadmin', 'jasperadmin').subscribe(response => {
                console.log('login jasper 2', response);
              });
            } else if (response.roles.includes('ROLE_CLIENT')) {
              if (!response.enrollment) {
                this.router.navigate(['/client/enroll']);
              } else {
                this.router.navigate(['/client']).then(() => {
                  console.log('after login promise');
                  this.userLocationService.checkUserCoordinates();
                });
              }
            }
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.LOGIN.SUCCESS"), "success");
          }, err => {
            this.isLoginLoading = false;
            console.log('eroarea mea', err);
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.LOGIN.INVALID-CREDENTIALS"), "error");
          });
        }
      },
      error: error => {
        console.log('error login 1', error);
        this.isLoginLoading = false;
        if (error.error.reason === "invalidCredentials") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.LOGIN.INVALID-CREDENTIALS"), "error");
        } else if (error.error.reason === "notActive") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.LOGIN.NOT-ACTIVE"), "error");
        } else if (error.error.reason === "accountBlocked") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.LOGIN.ACCOUNT-BLOCKED"), "error");
        } else if (error.error.reason === "inactive" || error.error.reason === "archived") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Contul dvs. a fost dezactivat sau arhivat. Luati legatura cu administratorul site-ului!", "error");
        } else if (error.error.reason === "alreadyLoggedIn") {
          this.sendUserInvalidSessionEmail();
        } else if (error.error.reason === "notApproved") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Autentificarea este momentan închisă!", "error");
        }
      }
    });
  }
  openForgotPwd() {
    console.log('open forgot pwd');
    this.modalService.open(_forgotten_pass_forgotten_pass_component__WEBPACK_IMPORTED_MODULE_5__.ForgottenPassComponent, {
      width: "100%",
      maxWidth: 1000,
      height: "90%"
    });
  }
  openRegister() {
    console.log('open register');
    this.modalService.open(_register_register_component__WEBPACK_IMPORTED_MODULE_7__.RegisterComponent, {
      width: "100%",
      maxWidth: 1000,
      height: "90%",
      data: {
        role: 'ROLE_CLIENT'
      }
    });
  }
  closeModal() {
    this.modalService.closeAll();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
  }, {
    type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
  }, {
    type: _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService
  }, {
    type: _shared_services_jwtToken_service__WEBPACK_IMPORTED_MODULE_4__.JwtTokenService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService
  }, {
    type: _reports_services_reports_service__WEBPACK_IMPORTED_MODULE_8__.ReportsService
  }, {
    type: _shared_services_user_location_service__WEBPACK_IMPORTED_MODULE_9__.UserLocationService
  }, {
    type: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__.SocialAuthService
  }];
};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: 'app-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LoginComponent);


/***/ }),

/***/ 4595:
/*!********************************************************************************!*\
  !*** ./src/app/features/auth/provider-register/provider-register.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderRegisterComponent": () => (/* binding */ ProviderRegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _provider_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider-register.component.html?ngResource */ 11196);
/* harmony import */ var _provider_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider-register.component.scss?ngResource */ 87670);
/* harmony import */ var _provider_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_provider_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/auth.service */ 56566);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/location.service */ 63712);












let ProviderRegisterComponent = class ProviderRegisterComponent {
  constructor(formBuilder, router, authService, toastService, translate, data, dialogRef, locationService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.authService = authService;
    this.toastService = toastService;
    this.translate = translate;
    this.data = data;
    this.dialogRef = dialogRef;
    this.locationService = locationService;
    this.hide = true;
    this.hideCurrent = true;
    this.isClient = true;
    this.countries = [];
    this.cities = [];
  }
  ngOnInit() {
    this.getCountries();
    this.formInit();
    // console.log('rolul trimis din modal; ar trebui sa fie provider', this.data.role);
  }
  //no white space validator
  noWhitespaceValidator(control) {
    const isWhitespace = (control && control.value && control.value.toString() || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {
      'whitespace': true
    };
  }
  getCountries() {
    this.locationService.getAllCountries().subscribe({
      next: countries => {
        this.countries = countries;
        console.log('tari', countries);
      }
    });
  }
  getCities(event) {
    const country = {
      country: event.value ? event.value : event
    };
    this.locationService.getCityFilter(0, -1, null, null, country).subscribe({
      next: cities => {
        console.log(cities);
        this.cities = cities.content;
      }
    });
  }
  formInit() {
    this.registerForm = this.formBuilder.group({
      lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.noWhitespaceValidator])],
      firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.noWhitespaceValidator])],
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email])],
      password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
      confPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
      roles: [['ROLE_PROVIDER']],
      companyName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      telephone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.validateTelephoneFormat]],
      fax: [null],
      cui: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      j: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      billingAddress: this.formBuilder.group({
        city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      termsAndCond: []
    }, {
      validator: this.checkPasswords
    });
  }
  validateTelephoneFormat(control) {
    const isValid = /^\d{10}$/.test(control.value); // Adjust the regex according to your telephone number format
    if (!isValid) {
      return {
        telephoneFormat: true
      };
    }
    return null;
  }
  onSendClick() {
    this.registerForm.markAllAsTouched();
    // const user={
    //     firstName:this.registerForm.value.firstName,
    //     lastName:this.registerForm.value.lastName,
    //     email:this.registerForm.value.email,
    //     password:this.registerForm.value.password,
    //     roles:['ROLE_PROVIDER'],
    //     companyName: this.registerForm.value.companyName,
    //     telephone: this.registerForm.value.telephone,
    //     fax: this.registerForm.value.fax,
    //     cui: this.registerForm.value.cui,
    //     j: this.registerForm.value.j,
    // }
    const user = {
      ...this.registerForm.value,
      roles: ['ROLE_PROVIDER'],
      providerStatus: 'new',
      password: encodeURI(this.registerForm.value.password)
    };
    console.log('datele din formular provider:', user);
    if (this.registerForm.valid === true) {
      this.authService.register(user).subscribe(res => {
        // console.log('register',res);
        const id = res.reason;
        if (res.success) {
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.REGISTER.SUCCESS"), "success");
          this.authService.sendRegistrationEmail(id).subscribe(mail => {
            console.log('mail', mail);
            this.dialogRef.close();
            if (mail.success === "false") {
              if (mail.reason === "alreadyActive") {
                this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTRATION-EMAIL.ALREADY-ACTIVE"), "error");
              } else if (mail.reason === "invalidId") {
                this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTRATION-EMAIL.INVALID-ID"), "error");
              } else if (mail.reason === "fail") {
                this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTRATION-EMAIL.FAIL"), "error");
              }
            }
          });
        } else {
          if (res.success === false) {
            if (res.reason === "emailNotValid") {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.EMAIL-INVALID"), "error");
            } else if (res.reason === "invalidPassword") {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.PASSWORD-INVALID"), "error");
            } else if (res.reason === "emailExists") {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.EMAIL-EXISTS"), "error");
            } else if (res.reason === "invalidRole") {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.INVALID-ROLE"), "error");
            }
          }
        }
      }, error => {
        console.log(error);
        if (error.error.reason === "emailNotValid") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.EMAIL-INVALID"), "error");
        } else if (error.error.reason === "invalidPassword") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.PASSWORD-INVALID"), "error");
        } else if (error.error.reason === "emailExists") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.EMAIL-EXISTS"), "error");
        } else if (error.error.reason === "invalidRole") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.INVALID-ROLE"), "error");
        }
      });
    } else {
      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("ERROR.REQUIRED-ALL"), "error");
    }
  }
  checkPasswords(control) {
    const password = control.get('password');
    const confPassword = control.get('confPassword');
    const nameRegexp = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const numbers = /[1234567890]/;
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const whiteSpace = /[" "]/;
    //Confirmation ok
    if (password.value?.length > 0 && confPassword.value?.length > 0 && password.value !== confPassword.value) {
      confPassword.setErrors({
        passInvalid: true
      });
      //Password empty, confirmation filled
    } else if (password.value?.length > 0 && confPassword.value?.length === 0) {
      confPassword.setErrors({
        emptySecond: true
      });
      //Password filled, confirmation empty
    } else if (password.value?.length === 0 && confPassword.value?.length > 0) {
      password.setErrors({
        emptyFirst: true
      });
    }
    //Password required
    if (password.value === null) {
      password.setErrors({
        requiredPass: true
      });
    }
    //Confirmation required
    if (confPassword.value === null) {
      confPassword.setErrors({
        requiredConf: true
      });
    }
    //Min length password
    if (password.value?.length < 8) {
      password.setErrors({
        passMin: true
      });
    }
    //Max length password
    if (password.value?.length > 16) {
      password.setErrors({
        passMax: true
      });
    }
    //At least a special character
    if (password.value && !nameRegexp.test(password.value)) {
      password.setErrors({
        specialCharacter: true
      });
    }
    //At least a digit
    if (password.value && !numbers.test(password.value)) {
      password.setErrors({
        number: true
      });
    }
    //At least an upper case
    if (password.value && !upper.test(password.value)) {
      password.setErrors({
        upper: true
      });
    }
    //At least a lower case
    if (password.value && !lower.test(password.value)) {
      password.setErrors({
        lower: true
      });
    }
    //No whitespaces
    if (password.value && whiteSpace.test(password.value)) {
      password.setErrors({
        whiteSpace: true
      });
    }
    return;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA]
    }]
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef
  }, {
    type: _shared_services_location_service__WEBPACK_IMPORTED_MODULE_4__.LocationService
  }];
};
ProviderRegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-provider-register',
  template: _provider_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_provider_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProviderRegisterComponent);


/***/ }),

/***/ 14081:
/*!**************************************************************!*\
  !*** ./src/app/features/auth/register/register.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 78831);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 25763);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/auth.service */ 56566);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);











let RegisterComponent = class RegisterComponent {
  constructor(formBuilder, router, authService, toastService, translate, data) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.authService = authService;
    this.toastService = toastService;
    this.translate = translate;
    this.data = data;
    this.hide = true;
    this.hideCurrent = true;
    this.isClient = true;
  }
  ngOnInit() {
    this.formInit();
    // console.log('rolul trimis din modal; ar trebui sa fie provider', this.data.role);
  }

  formInit() {
    this.registerForm = this.formBuilder.group({
      lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.noWhitespaceValidator])],
      firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.noWhitespaceValidator])],
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email])],
      password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
      confPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
      roles: [this.data.role],
      termsAndCond: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue]
    }, {
      validator: this.checkPasswords
    });
  }
  //no white space validator
  noWhitespaceValidator(control) {
    const isWhitespace = (control && control.value && control.value.toString() || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {
      'whitespace': true
    };
  }
  onSendClick() {
    this.registerForm.markAllAsTouched();
    const user = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: encodeURI(this.registerForm.value.password),
      roles: [this.registerForm.value.roles]
    };
    // console.log('roles',this.registerForm.value.roles);
    // console.log(user);
    if (this.registerForm.valid === true) {
      this.authService.register(user).subscribe(res => {
        console.log('register', res);
        const id = res.reason;
        if (res.success) {
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.REGISTER.SUCCESS"), "success");
          this.authService.sendRegistrationEmail(id).subscribe(mail => {
            this.toastService.showToast('Info', 'Un mail de verificare a fost trimis pe adresa dumneavoastră!', "info");
            // console.log('mail', mail);
            if (mail.success === "false") {
              if (mail.reason === "alreadyActive") {
                this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTRATION-EMAIL.ALREADY-ACTIVE"), "error");
              } else if (mail.reason === "invalidId") {
                this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTRATION-EMAIL.INVALID-ID"), "error");
              } else if (mail.reason === "fail") {
                this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTRATION-EMAIL.FAIL"), "error");
              }
            }
          });
        } else {
          if (res.success === false) {
            if (res.reason === "emailNotValid") {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.EMAIL-INVALID"), "error");
            } else if (res.reason === "invalidPassword") {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.PASSWORD-INVALID"), "error");
            } else if (res.reason === "emailExists") {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.EMAIL-EXISTS"), "error");
            } else if (res.reason === "invalidRole") {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.INVALID-ROLE"), "error");
            }
          }
        }
      }, error => {
        console.log(error);
        if (error.error.reason === "emailNotValid") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.EMAIL-INVALID"), "error");
        } else if (error.error.reason === "invalidPassword") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.PASSWORD-INVALID"), "error");
        } else if (error.error.reason === "emailExists") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.EMAIL-EXISTS"), "error");
        } else if (error.error.reason === "invalidRole") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.REGISTER.INVALID-ROLE"), "error");
        }
      });
    } else {
      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("ERROR.REQUIRED-ALL"), "error");
    }
  }
  checkPasswords(control) {
    const password = control.get('password');
    const confPassword = control.get('confPassword');
    const nameRegexp = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const numbers = /[1234567890]/;
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const whiteSpace = /[" "]/;
    //Confirmation ok
    if (password.value?.length > 0 && confPassword.value?.length > 0 && password.value !== confPassword.value) {
      confPassword.setErrors({
        passInvalid: true
      });
      //Password empty, confirmation filled
    } else if (password.value?.length > 0 && confPassword.value?.length === 0) {
      confPassword.setErrors({
        emptySecond: true
      });
      //Password filled, confirmation empty
    } else if (password.value?.length === 0 && confPassword.value?.length > 0) {
      password.setErrors({
        emptyFirst: true
      });
    }
    //Password required
    if (password.value === null) {
      password.setErrors({
        requiredPass: true
      });
    }
    //Confirmation required
    if (confPassword.value === null) {
      confPassword.setErrors({
        requiredConf: true
      });
    }
    //Min length password
    if (password.value?.length < 8) {
      password.setErrors({
        passMin: true
      });
    }
    //Max length password
    if (password.value?.length > 16) {
      password.setErrors({
        passMax: true
      });
    }
    //At least a special character
    if (password.value && !nameRegexp.test(password.value)) {
      password.setErrors({
        specialCharacter: true
      });
    }
    //At least a digit
    if (password.value && !numbers.test(password.value)) {
      password.setErrors({
        number: true
      });
    }
    //At least an upper case
    if (password.value && !upper.test(password.value)) {
      password.setErrors({
        upper: true
      });
    }
    //At least a lower case
    if (password.value && !lower.test(password.value)) {
      password.setErrors({
        lower: true
      });
    }
    //No whitespaces
    if (password.value && whiteSpace.test(password.value)) {
      password.setErrors({
        whiteSpace: true
      });
    }
    return;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA]
    }]
  }];
};
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-register',
  template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RegisterComponent);


/***/ }),

/***/ 52677:
/*!*************************************************************************************!*\
  !*** ./src/app/features/public-homepage/activate-users/activate-users.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateUsersComponent": () => (/* binding */ ActivateUsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activate_users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate-users.component.html?ngResource */ 8412);
/* harmony import */ var _activate_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activate-users.component.scss?ngResource */ 83370);
/* harmony import */ var _activate_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_activate_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_public_homepage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/public-homepage.service */ 74373);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);







let ActivateUsersComponent = class ActivateUsersComponent {
  constructor(route, homeService, router, toastService) {
    this.route = route;
    this.homeService = homeService;
    this.router = router;
    this.toastService = toastService;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.emailParam = params.email;
      if (params.email && params.registrationcode) {
        this.homeService.activateUserViaCode(params.registrationcode, params.email).subscribe(resp => {
          console.log('resp req 1', resp);
          if (resp.success === true) {
            this.toastService.showToast("Succes", "Contul tău a fost activat! Vei fi redirectionat imediat.", "success");
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 3000);
          } else {
            this.toastService.showToast("Eroare", "Contul tău NU a fost activat! Te rugăm să ne contactezi.", "error");
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 3000);
          }
        }, error => {
          console.log('error', error.error.message);
          if (error.error.reason === 'invalidCode') {
            this.inactiveCode = true;
            this.toastService.showToast("Eroare", "Link-ul de activare nu mai este valabil. Te rugăm să soliciti unul nou.", "error");
          } else {
            if (error.error.reason === 'alreadyActivated') {
              this.toastService.showToast("Succes", "Contul tău a fost deja activat! Vei fi redirectionat imediat.", "success");
              setTimeout(() => {
                this.router.navigate(['/']);
              }, 3000);
            } else {
              this.toastService.showToast("Eroare", "Contul tău NU a fost activat! Te rugăm să ne contactezi.", "error");
              setTimeout(() => {
                this.router.navigate(['/']);
              }, 3000);
            }
          }
        });
      } else {
        this.router.navigate(['/']);
      }
    });
  }
  resendLink() {
    this.homeService.sendRegistrationEmail(this.emailParam).subscribe(resp => {
      console.log('resp link', resp);
      this.toastService.showToast("Succes", "Verifica mailul! Un link nou a fost trimis.", "success");
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
    }, error => {
      this.toastService.showToast("Eroare", "Email-ul nu a putut fi trimis! Te rugăm să ne contactezi.", "error");
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }, {
    type: _services_public_homepage_service__WEBPACK_IMPORTED_MODULE_2__.PublicHomepageService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }];
};
ActivateUsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-activate-users',
  template: _activate_users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_activate_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ActivateUsersComponent);


/***/ }),

/***/ 5252:
/*!********************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/hero-section/hero-section.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroSectionComponent": () => (/* binding */ HeroSectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _hero_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero-section.component.html?ngResource */ 69488);
/* harmony import */ var _hero_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-section.component.scss?ngResource */ 39182);
/* harmony import */ var _hero_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hero_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.settings */ 1182);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/login/login.component */ 60173);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);








let HeroSectionComponent = class HeroSectionComponent {
  constructor(appSettings, sanitizer, modalService) {
    this.appSettings = appSettings;
    this.sanitizer = sanitizer;
    this.modalService = modalService;
    this.fullscreen = false;
    this.settings = this.appSettings.settings;
    console.log(this.settings);
    console.log('user connected 2', this.userConnected);
    setTimeout(() => {
      this.settings.headerBgImage = true;
    });
  }
  ngOnInit() {
    if (this.backgroundImage) {
      this.bgImage = this.sanitizer.bypassSecurityTrustStyle('url(' + this.backgroundImage + ')');
    }
    console.log('user connected 1', this.userConnected);
  }
  ngOnChanges(changes) {
    console.log('changes', changes);
  }
  openAuthModal() {
    this.modalService.open(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, {
      width: "100%",
      maxWidth: 1000,
      height: "90%"
    });
  }
  ngOnDestroy() {
    setTimeout(() => {
      this.settings.headerBgImage = false;
      this.settings.contentOffsetToTop = false;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog
  }];
  static #_2 = this.propDecorators = {
    backgroundImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    buttonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    desc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    fullscreen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    redirectUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    userConnected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  };
};
HeroSectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-hero-section',
  template: _hero_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_hero_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HeroSectionComponent);


/***/ }),

/***/ 15064:
/*!************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/homepage/homepage.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageComponent": () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _homepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.component.html?ngResource */ 39366);
/* harmony import */ var _homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component.scss?ngResource */ 5226);
/* harmony import */ var _homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_public_homepage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/public-homepage.service */ 74373);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/login/login.component */ 60173);
/* harmony import */ var src_app_shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/localStorage.service */ 72538);
/* harmony import */ var src_app_shared_services_languageStorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/languageStorage.service */ 31345);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app.settings */ 1182);
/* harmony import */ var src_app_features_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/features/auth/register/register.component */ 14081);
/* harmony import */ var src_app_features_auth_provider_register_provider_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/features/auth/provider-register/provider-register.component */ 4595);












let HomepageComponent = class HomepageComponent {
  constructor(publicHomepageService, cdr, modalService, localStorage, languageService, settings) {
    this.publicHomepageService = publicHomepageService;
    this.cdr = cdr;
    this.modalService = modalService;
    this.localStorage = localStorage;
    this.languageService = languageService;
    this.settings = settings;
    this.benefits = [];
    this.gallery = null;
    this.c2a = [];
    this.gotVideo = false;
    this.afterViewInitialized = false;
    //this.setLanguage();
  }

  ngOnInit() {
    // this.languageFromStorage=this.localStorage.get('langFromStorage');
    console.log("language from storage", this.localStorage.get('langFromStorage'));
    this.setLanguage();
    this.getHomepageByLanguageAndApp();
    console.log('user connected 3', this.userConnected);
  }
  setLanguage() {
    //console.log("language from storage",this.localStorage.get('langFromStorage'));
    this.languageService.languageChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        console.log("S-a selectat limba", data);
        this.languageFromStorage = this.localStorage.get('langFromStorage');
        // Get Documents List
        this.getHomepageByLanguageAndApp();
        // Reset Obs Trigger
        this.languageService.triggerUserLanguageChanges(false);
        this.cdr.detectChanges();
      }
    });
  }
  openAuthModal() {
    this.modalService.open(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, {
      width: "90%",
      maxWidth: 1000
    });
  }
  getHomepageByLanguageAndApp() {
    this.languageFromStorage = this.localStorage.get('langFromStorage');
    if (this.languageFromStorage !== 'ro' && this.languageFromStorage !== 'en') {
      this.languageFromStorage = 'ro';
      this.localStorage.set('langFromStorage', 'ro');
      this.languageService.triggerUserLanguageChanges(true);
    }
    this.publicHomepageService.getHomepageByLanguageAndApp(this.languageFromStorage, "web").subscribe(hp => {
      //this.languageService.triggerUserLanguageChanges(true);
      console.log('hp din gethomepageby language', hp);
      this.pageId = hp.id;
      this.language = hp.language;
      this.app = hp.app;
      this.publicHomePage = hp;
      this.benefits = hp.benefits;
      this.hero = hp.hero;
      this.gallery = hp.gallery;
      this.trialSection = hp.trialSection;
      this.callToAction = hp.callToAction;
      this.playedVideo = hp.gallery?.videos[1].filePath;
      this.gotVideo = true;
      this.cdr.detectChanges();
      //provider title
      this.stringTitle = this.callToAction["title"];
      this.c2a = this.stringTitle.split("#");
      console.log(hp);
    });
  }
  playVideo(filePath) {
    this.playedVideo = filePath;
    console.log(this.playedVideo);
    this.cdr.detectChanges();
  }
  openRegister() {
    console.log('open register');
    this.modalService.open(src_app_features_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__.RegisterComponent, {
      width: "100%",
      maxWidth: 1000,
      height: "90%",
      data: {
        role: 'ROLE_PROVIDER'
      }
    });
  }
  openProviderRegister() {
    console.log('open provider register');
    this.modalService.open(src_app_features_auth_provider_register_provider_register_component__WEBPACK_IMPORTED_MODULE_8__.ProviderRegisterComponent, {
      width: "100%",
      maxWidth: 1000,
      height: "90%"
    });
  }
  ngAfterViewInit() {
    this.afterViewInitialized = true;
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_public_homepage_service__WEBPACK_IMPORTED_MODULE_2__.PublicHomepageService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog
  }, {
    type: src_app_shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
  }, {
    type: src_app_shared_services_languageStorage_service__WEBPACK_IMPORTED_MODULE_5__.LanguageStorageService
  }, {
    type: _app_settings__WEBPACK_IMPORTED_MODULE_6__.AppSettings
  }];
  static #_2 = this.propDecorators = {
    player: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: ['player']
    }],
    redirectUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    userConnected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  };
};
HomepageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-homepage',
  template: _homepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HomepageComponent);


/***/ }),

/***/ 71956:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/public-footer/public-footer.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicFooterComponent": () => (/* binding */ PublicFooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _public_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-footer.component.html?ngResource */ 23595);
/* harmony import */ var _public_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-footer.component.scss?ngResource */ 81289);
/* harmony import */ var _public_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/localStorage.service */ 72538);
/* harmony import */ var _shared_services_languageStorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/_services/languageStorage.service */ 31345);








let PublicFooterComponent = class PublicFooterComponent {
  constructor(toastService, translateService, localStorage, cdr, languageService) {
    this.toastService = toastService;
    this.translateService = translateService;
    this.localStorage = localStorage;
    this.cdr = cdr;
    this.languageService = languageService;
    this.nr = 1;
    this.selectedValue = "ro";
    this.langName = '';
    this.selectedValue = this.localStorage.get('langFromStorage');
    if (this.selectedValue) {
      this.translateService.use(this.selectedValue);
    } else {
      this.translateService.use('ro');
    }
  }
  showToast(type) {
    this.toastService.showToast('titlu', this.nr.toString(), type);
    this.nr++;
  }
  changeLang(lang) {
    // console.log("Asta este langshort", this.langShort);
    // this.langShort=this.langShort ? this.langShort : 'ro';
    //this.languageService.languageChangedObs.subscribe((data: boolean)=>{
    //this.langShort=lang ? lang : 'ro';
    this.localStorage.set('langFromStorage', lang);
    this.selectedValue = lang;
    this.translateService.use(lang);
    this.langName = this.getLangName(lang);
    this.languageService.triggerUserLanguageChanges(lang);
    // this.languageService.triggerUserLanguageChanges(false);
    //this.cdr.detectChanges();
    //})
    // this.cdr.detectChanges();
    // this.cdr.detectChanges();
    // console.log(this.langName);
    // console.log(lang);
  }

  getLangName(lang) {
    if (lang == 'en') {
      this.langShort = lang;
      return 'English';
    } else if (lang == 'ro') {
      this.langShort = lang;
      return 'Romanian';
    } else {
      this.langShort = 'ro';
      return 'Romanian';
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
  }, {
    type: _shared_services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }, {
    type: _shared_services_languageStorage_service__WEBPACK_IMPORTED_MODULE_4__.LanguageStorageService
  }];
};
PublicFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-public-footer',
  template: _public_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_public_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PublicFooterComponent);


/***/ }),

/***/ 55984:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/public-header/public-header.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicHeaderComponent": () => (/* binding */ PublicHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _public_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-header.component.html?ngResource */ 97275);
/* harmony import */ var _public_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-header.component.scss?ngResource */ 59205);
/* harmony import */ var _public_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.service */ 70900);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/auth.service */ 56566);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Map */ 29272);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/login/login.component */ 60173);
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/View */ 75939);
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/proj */ 63815);
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/layer/Tile */ 65833);
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source/OSM */ 74121);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app.settings */ 1182);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/_services/userData.service */ 32763);
















let PublicHeaderComponent = class PublicHeaderComponent {
  constructor(appService, modalService, authService, ngbModalService, settings, usersService) {
    this.appService = appService;
    this.modalService = modalService;
    this.authService = authService;
    this.ngbModalService = ngbModalService;
    this.settings = settings;
    this.usersService = usersService;
    this.menuIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
  }
  ngOnInit() {
    this.authService.userChangedObs.subscribe(() => {
      this.modalService.closeAll();
    });
  }
  sidenavToggle() {
    this.menuIconClick.emit();
  }
  openAuthModal() {
    this.modalService.open(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, {
      width: "100%",
      maxWidth: 1000,
      height: "90%"
    });
  }
  openNgbModal(templateRef) {
    this.ngbModalService.open(templateRef, {
      centered: true,
      fullscreen: true
    });
    // open layers map init
    this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_9__["default"]({
      view: new ol_View__WEBPACK_IMPORTED_MODULE_10__["default"]({
        center: (0,ol_proj__WEBPACK_IMPORTED_MODULE_5__.fromLonLat)([28.0197559, 45.4462889]),
        zoom: 12
      }),
      layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_11__["default"]({
        source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_12__["default"]()
      })],
      target: 'ol-map'
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _app_service__WEBPACK_IMPORTED_MODULE_2__.AppService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog
  }, {
    type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal
  }, {
    type: _app_settings__WEBPACK_IMPORTED_MODULE_6__.AppSettings
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_7__.UserDataService
  }];
  static #_2 = this.propDecorators = {
    menuIconClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output
    }],
    redirectUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    userConnected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }]
  };
};
PublicHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-public-header',
  template: _public_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_public_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PublicHeaderComponent);


/***/ }),

/***/ 1765:
/*!***********************************************************************!*\
  !*** ./src/app/features/public-homepage/public-homepage.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicHomepageComponent": () => (/* binding */ PublicHomepageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _public_homepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-homepage.component.html?ngResource */ 66859);
/* harmony import */ var _public_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-homepage.component.scss?ngResource */ 42032);
/* harmony import */ var _public_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/userData.service */ 32763);





let PublicHomepageComponent = class PublicHomepageComponent {
  constructor(usersService) {
    this.usersService = usersService;
  }
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.usersService.getCurrentUser().subscribe(resp => {
      console.log('user ph:', resp);
      this.userConnected = true;
      if (resp.roles.includes('ROLE_CLIENT')) {
        this.redirectUrl = '/client/domain';
      } else if (resp.roles.includes('ROLE_PROVIDER')) {
        this.redirectUrl = '/private/provider/dashboard';
      } else if (resp.roles.includes('ROLE_STAFF')) {
        this.redirectUrl = '/private/staff/dashboard';
      } else if (resp.roles.includes('ROLE_SUPER_ADMIN')) {
        this.redirectUrl = '/private/admin/dashboard';
      }
    }, error => {
      this.userConnected = false;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }];
};
PublicHomepageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-public-old-homepage',
  template: _public_homepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_public_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PublicHomepageComponent);


/***/ }),

/***/ 5139:
/*!********************************************************************!*\
  !*** ./src/app/features/public-homepage/public-homepage.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicHomepageModule": () => (/* binding */ PublicHomepageModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 15064);
/* harmony import */ var _public_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-homepage.component */ 1765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _components_public_header_public_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/public-header/public-header.component */ 55984);
/* harmony import */ var _components_public_footer_public_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/public-footer/public-footer.component */ 71956);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _components_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hero-section/hero-section.component */ 5252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.module */ 72399);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-lazyload-image */ 33957);
/* harmony import */ var _activate_users_activate_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activate-users/activate-users.component */ 52677);



















const routes = [{
  path: '',
  component: _public_homepage_component__WEBPACK_IMPORTED_MODULE_1__.PublicHomepageComponent
}, {
  path: 'activate-user',
  component: _activate_users_activate_users_component__WEBPACK_IMPORTED_MODULE_6__.ActivateUsersComponent
}];
let PublicHomepageModule = class PublicHomepageModule {};
PublicHomepageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent, _public_homepage_component__WEBPACK_IMPORTED_MODULE_1__.PublicHomepageComponent, _components_public_header_public_header_component__WEBPACK_IMPORTED_MODULE_2__.PublicHeaderComponent, _components_public_footer_public_footer_component__WEBPACK_IMPORTED_MODULE_3__.PublicFooterComponent, _components_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_4__.HeroSectionComponent, _activate_users_activate_users_component__WEBPACK_IMPORTED_MODULE_6__.ActivateUsersComponent],
  exports: [_components_public_footer_public_footer_component__WEBPACK_IMPORTED_MODULE_3__.PublicFooterComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__.AuthModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_18__.LazyLoadImageModule]
})], PublicHomepageModule);


/***/ }),

/***/ 74373:
/*!******************************************************************************!*\
  !*** ./src/app/features/public-homepage/services/public-homepage.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicHomepageService": () => (/* binding */ PublicHomepageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let PublicHomepageService = class PublicHomepageService {
  // baseApiBackgroundUrl = "/bestinform/uploadBackgroundImage";
  constructor(http) {
    this.http = http;
    this.baseApiContentUrl = "/bestinform/uploadHomepageImage";
  }
  updateHomepage(hp) {
    return this.http.put('/bestinform/updateHomepage', hp);
  }
  createHomepage(hp) {
    return this.http.post('/bestinform/createHomepage', hp);
  }
  getHomepageByLanguageAndApp(language, app) {
    return this.http.get('/bestinform/getHomepageByLanguageAndApp?language=' + language + '&app=' + app);
  }
  getHomepageById(homepageId) {
    return this.http.get('/bestinform/getHomepageById?homepageId=' + homepageId);
  }
  // Returns an observable
  uploadHomepageImage(homepageId, imageType, file) {
    // Create form data
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append("file", file);
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiContentUrl + '?homepageId=' + homepageId + '?homepageId=imageType=' + imageType, formData);
  }
  // Returns an observable
  //    uploadBackgroundImage(homepageId: string, file: any): Observable<any> {
  //     // Create form data
  //     const formData = new FormData();
  //     // Store form name as "file" with file data
  //     formData.append("file", file);
  //     // Make http post request over api
  //     // with formData as req
  //     return this.http.post(this.baseApiBackgroundUrl + '?homepageId=' + homepageId, formData)
  //   }
  activateUserViaCode(registrationCode, dataObj) {
    return this.http.post('/bestinform/activateUserViaCode?registrationCode=' + registrationCode, dataObj);
  }
  sendRegistrationEmail(email) {
    return this.http.post('/bestinform/resendRegistrationCode', email);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
PublicHomepageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], PublicHomepageService);


/***/ }),

/***/ 63712:
/*!******************************************************!*\
  !*** ./src/app/shared/_services/location.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let LocationService = class LocationService {
  constructor(http) {
    this.http = http;
  }
  getAllCountries() {
    return this.http.get('/bestinform/getAllCountries');
  }
  getCityFilter(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listCityFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
LocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: "root"
})], LocationService);


/***/ }),

/***/ 44260:
/*!******************************************************************************!*\
  !*** ./node_modules/angularx-social-login/fesm2015/angularx-social-login.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmazonLoginProvider": () => (/* binding */ AmazonLoginProvider),
/* harmony export */   "BaseLoginProvider": () => (/* binding */ BaseLoginProvider),
/* harmony export */   "DummyLoginProvider": () => (/* binding */ DummyLoginProvider),
/* harmony export */   "FacebookLoginProvider": () => (/* binding */ FacebookLoginProvider),
/* harmony export */   "GoogleLoginProvider": () => (/* binding */ GoogleLoginProvider),
/* harmony export */   "MicrosoftLoginProvider": () => (/* binding */ MicrosoftLoginProvider),
/* harmony export */   "SocialAuthService": () => (/* binding */ SocialAuthService),
/* harmony export */   "SocialLoginModule": () => (/* binding */ SocialLoginModule),
/* harmony export */   "SocialUser": () => (/* binding */ SocialUser),
/* harmony export */   "VKLoginProvider": () => (/* binding */ VKLoginProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 47367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);





class BaseLoginProvider {
  constructor() {}
  loadScript(id, src, onload, parentElement = null) {
    // get document if platform is only browser
    if (typeof document !== 'undefined' && !document.getElementById(id)) {
      let signInJS = document.createElement('script');
      signInJS.async = true;
      signInJS.src = src;
      signInJS.onload = onload;
      if (!parentElement) {
        parentElement = document.head;
      }
      parentElement.appendChild(signInJS);
    }
  }
}
class SocialUser {}
class GoogleLoginProvider extends BaseLoginProvider {
  constructor(clientId, initOptions = {
    scope: 'email'
  }) {
    super();
    this.clientId = clientId;
    this.initOptions = initOptions;
  }
  initialize() {
    return new Promise((resolve, reject) => {
      try {
        this.loadScript(GoogleLoginProvider.PROVIDER_ID, 'https://apis.google.com/js/api.js', () => {
          gapi.load('client:auth2', () => {
            gapi.client.init(Object.assign(Object.assign({}, this.initOptions), {
              client_id: this.clientId
            })).then(() => {
              this.auth2 = gapi.auth2.getAuthInstance();
              resolve();
            }).catch(err => {
              reject(err);
            });
          });
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  getLoginStatus(loginStatusOptions) {
    const options = Object.assign(Object.assign({}, this.initOptions), loginStatusOptions);
    return new Promise((resolve, reject) => {
      if (this.auth2.isSignedIn.get()) {
        const user = new SocialUser();
        const profile = this.auth2.currentUser.get().getBasicProfile();
        const authResponse = this.auth2.currentUser.get().getAuthResponse(true); // get complete authResponse object
        this.setUserProfile(user, profile);
        user.response = authResponse;
        const resolveUser = authenticationResponse => {
          user.authToken = authenticationResponse.access_token;
          user.idToken = authenticationResponse.id_token;
          resolve(user);
        };
        if (options.refreshToken) {
          this.auth2.currentUser.get().reloadAuthResponse().then(resolveUser);
        } else {
          resolveUser(authResponse);
        }
      } else {
        reject(`No user is currently logged in with ${GoogleLoginProvider.PROVIDER_ID}`);
      }
    });
  }
  signIn(signInOptions) {
    const options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
    return new Promise((resolve, reject) => {
      const offlineAccess = options && options.offline_access;
      const promise = !offlineAccess ? this.auth2.signIn(signInOptions) : this.auth2.grantOfflineAccess(signInOptions);
      promise.then(response => {
        const user = new SocialUser();
        if (response && response.code) {
          user.authorizationCode = response.code;
        } else {
          const profile = this.auth2.currentUser.get().getBasicProfile();
          const authResponse = this.auth2.currentUser.get().getAuthResponse(true);
          const token = authResponse.access_token;
          const backendToken = authResponse.id_token;
          this.setUserProfile(user, profile);
          user.authToken = token;
          user.idToken = backendToken;
          user.response = authResponse;
        }
        resolve(user);
      }, closed => {
        reject(closed);
      }).catch(err => {
        reject(err);
      });
    });
  }
  signOut(revoke) {
    return new Promise((resolve, reject) => {
      let signOutPromise;
      if (revoke) {
        signOutPromise = this.auth2.disconnect();
      } else {
        signOutPromise = this.auth2.signOut();
      }
      signOutPromise.then(err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }).catch(err => {
        reject(err);
      });
    });
  }
  setUserProfile(user, profile) {
    user.id = profile.getId();
    user.name = profile.getName();
    user.email = profile.getEmail();
    user.photoUrl = profile.getImageUrl();
    user.firstName = profile.getGivenName();
    user.lastName = profile.getFamilyName();
  }
}
GoogleLoginProvider.PROVIDER_ID = 'GOOGLE';

/**
 * The service encapsulating the social login functionality. Exposes methods like
 * `signIn`, `signOut`. Also, exposes an `authState` `Observable` that one can
 * subscribe to get the current logged in user information.
 *
 * @dynamic
 */
class SocialAuthService {
  /**
   * @param config A `SocialAuthServiceConfig` object or a `Promise` that resolves to a `SocialAuthServiceConfig` object
   */
  constructor(config) {
    this.providers = new Map();
    this.autoLogin = false;
    this._user = null;
    this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
    /* Consider making this an enum comprising LOADING, LOADED, FAILED etc. */
    this.initialized = false;
    this._initState = new rxjs__WEBPACK_IMPORTED_MODULE_1__.AsyncSubject();
    if (config instanceof Promise) {
      config.then(config => {
        this.initialize(config);
      });
    } else {
      this.initialize(config);
    }
  }
  /** An `Observable` that one can subscribe to get the current logged in user information */
  get authState() {
    return this._authState.asObservable();
  }
  /** An `Observable` to communicate the readiness of the service and associated login providers */
  get initState() {
    return this._initState.asObservable();
  }
  initialize(config) {
    this.autoLogin = config.autoLogin !== undefined ? config.autoLogin : false;
    const {
      onError = console.error
    } = config;
    config.providers.forEach(item => {
      this.providers.set(item.id, item.provider);
    });
    Promise.all(Array.from(this.providers.values()).map(provider => provider.initialize())).then(() => {
      if (this.autoLogin) {
        const loginStatusPromises = [];
        let loggedIn = false;
        this.providers.forEach((provider, key) => {
          let promise = provider.getLoginStatus();
          loginStatusPromises.push(promise);
          promise.then(user => {
            user.provider = key;
            this._user = user;
            this._authState.next(user);
            loggedIn = true;
          }).catch(console.debug);
        });
        Promise.all(loginStatusPromises).catch(() => {
          if (!loggedIn) {
            this._user = null;
            this._authState.next(null);
          }
        });
      }
    }).catch(error => {
      onError(error);
    }).finally(() => {
      this.initialized = true;
      this._initState.next(this.initialized);
      this._initState.complete();
    });
  }
  refreshAuthToken(providerId) {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject(SocialAuthService.ERR_NOT_INITIALIZED);
      } else if (providerId !== GoogleLoginProvider.PROVIDER_ID) {
        reject(SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);
      } else {
        const providerObject = this.providers.get(providerId);
        if (providerObject) {
          providerObject.getLoginStatus({
            refreshToken: true
          }).then(user => {
            user.provider = providerId;
            this._user = user;
            this._authState.next(user);
            resolve();
          }).catch(err => {
            reject(err);
          });
        } else {
          reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
        }
      }
    });
  }
  /**
   * A method used to sign in a user with a specific `LoginProvider`.
   *
   * @param providerId Id with which the `LoginProvider` has been registered with the service
   * @param signInOptions Optional `LoginProvider` specific arguments
   * @returns A `Promise` that resolves to the authenticated user information
   */
  signIn(providerId, signInOptions) {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject(SocialAuthService.ERR_NOT_INITIALIZED);
      } else {
        let providerObject = this.providers.get(providerId);
        if (providerObject) {
          providerObject.signIn(signInOptions).then(user => {
            user.provider = providerId;
            resolve(user);
            this._user = user;
            this._authState.next(user);
          }).catch(err => {
            reject(err);
          });
        } else {
          reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
        }
      }
    });
  }
  /**
   * A method used to sign out the currently loggen in user.
   *
   * @param revoke Optional parameter to specify whether a hard sign out is to be performed
   * @returns A `Promise` that resolves if the operation is successful, rejects otherwise
   */
  signOut(revoke = false) {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject(SocialAuthService.ERR_NOT_INITIALIZED);
      } else if (!this._user) {
        reject(SocialAuthService.ERR_NOT_LOGGED_IN);
      } else {
        let providerId = this._user.provider;
        let providerObject = this.providers.get(providerId);
        if (providerObject) {
          providerObject.signOut(revoke).then(() => {
            resolve();
            this._user = null;
            this._authState.next(null);
          }).catch(err => {
            reject(err);
          });
        } else {
          reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
        }
      }
    });
  }
}
SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
SocialAuthService.ERR_NOT_LOGGED_IN = 'Not logged in';
SocialAuthService.ERR_NOT_INITIALIZED = 'Login providers not ready yet. Are there errors on your console?';
SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN = 'Chosen login provider is not supported for refreshing a token';
SocialAuthService.ɵfac = function SocialAuthService_Factory(t) {
  return new (t || SocialAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"]('SocialAuthServiceConfig'));
};
SocialAuthService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SocialAuthService,
  factory: SocialAuthService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SocialAuthService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: ['SocialAuthServiceConfig']
      }]
    }];
  }, null);
})();

/**
 * The main module of angularx-social-login library.
 */
class SocialLoginModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error('SocialLoginModule is already loaded. Import it in the AppModule only');
    }
  }
  static initialize(config) {
    return {
      ngModule: SocialLoginModule,
      providers: [SocialAuthService, {
        provide: 'SocialAuthServiceConfig',
        useValue: config
      }]
    };
  }
}
SocialLoginModule.ɵfac = function SocialLoginModule_Factory(t) {
  return new (t || SocialLoginModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](SocialLoginModule, 12));
};
SocialLoginModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SocialLoginModule,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
SocialLoginModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [SocialAuthService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SocialLoginModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      providers: [SocialAuthService]
    }]
  }], function () {
    return [{
      type: SocialLoginModule,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.SkipSelf
      }]
    }];
  }, null);
})();

// Simulates login / logout without actually requiring an Internet connection.
//
// Useful for certain development situations.
//
// For example, if you want to simulate the greatest football referee England has ever produced:
//
//  const dummyUser: SocialUser = {
//     id: '0123456789',
//     name: 'Howard Webb',
//     email: 'howard@webb.com',
//     firstName: 'Howard',
//     lastName: 'Webb',
//     authToken: 'dummyAuthToken',
//     photoUrl: 'https://en.wikipedia.org/wiki/Howard_Webb#/media/File:Howard_Webb_march11.jpg',
//     provider: 'DUMMY',
//     idToken: 'dummyIdToken',
//     authorizationCode: 'dummyAuthCode'
// };
//
//  let config = new AuthServiceConfig([
//  { ... },
//  {
//       id: DummyLoginProvider.PROVIDER_ID,
//       provider: new DummyLoginProvider(dummyUser)  // Pass your user into the constructor
//   },
//  { ... }
//  ]);
class DummyLoginProvider extends BaseLoginProvider {
  constructor(dummy) {
    super();
    if (dummy) {
      this.dummy = dummy;
    } else {
      this.dummy = DummyLoginProvider.DEFAULT_USER;
    }
    // Start not logged in
    this.loggedIn = false;
  }
  getLoginStatus() {
    return new Promise((resolve, reject) => {
      if (this.loggedIn) {
        resolve(this.dummy);
      } else {
        reject('No user is currently logged in.');
      }
    });
  }
  initialize() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  signIn() {
    return new Promise((resolve, reject) => {
      this.loggedIn = true;
      resolve(this.dummy);
    });
  }
  signOut(revoke) {
    return new Promise((resolve, reject) => {
      this.loggedIn = false;
      resolve();
    });
  }
}
DummyLoginProvider.PROVIDER_ID = 'DUMMY';
DummyLoginProvider.DEFAULT_USER = {
  id: '1234567890',
  name: 'Mickey Mouse',
  email: 'mickey@mouse.com',
  firstName: 'Mickey',
  lastName: 'Mouse',
  authToken: 'dummyAuthToken',
  photoUrl: 'https://en.wikipedia.org/wiki/File:Mickey_Mouse.png',
  provider: 'DUMMY',
  idToken: 'dummyIdToken',
  authorizationCode: 'dummyAuthCode',
  response: {}
};
class FacebookLoginProvider extends BaseLoginProvider {
  constructor(clientId, initOptions = {}) {
    super();
    this.clientId = clientId;
    this.requestOptions = {
      scope: 'email,public_profile',
      locale: 'en_US',
      fields: 'name,email,picture,first_name,last_name',
      version: 'v10.0'
    };
    this.requestOptions = Object.assign(Object.assign({}, this.requestOptions), initOptions);
  }
  initialize() {
    return new Promise((resolve, reject) => {
      try {
        this.loadScript(FacebookLoginProvider.PROVIDER_ID, `//connect.facebook.net/${this.requestOptions.locale}/sdk.js`, () => {
          FB.init({
            appId: this.clientId,
            autoLogAppEvents: true,
            cookie: true,
            xfbml: true,
            version: this.requestOptions.version
          });
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  getLoginStatus() {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          let authResponse = response.authResponse;
          FB.api(`/me?fields=${this.requestOptions.fields}`, fbUser => {
            let user = new SocialUser();
            user.id = fbUser.id;
            user.name = fbUser.name;
            user.email = fbUser.email;
            user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal&access_token=' + authResponse.accessToken;
            user.firstName = fbUser.first_name;
            user.lastName = fbUser.last_name;
            user.authToken = authResponse.accessToken;
            user.response = fbUser;
            resolve(user);
          });
        } else {
          reject(`No user is currently logged in with ${FacebookLoginProvider.PROVIDER_ID}`);
        }
      });
    });
  }
  signIn(signInOptions) {
    const options = Object.assign(Object.assign({}, this.requestOptions), signInOptions);
    return new Promise((resolve, reject) => {
      FB.login(response => {
        if (response.authResponse) {
          let authResponse = response.authResponse;
          FB.api(`/me?fields=${options.fields}`, fbUser => {
            let user = new SocialUser();
            user.id = fbUser.id;
            user.name = fbUser.name;
            user.email = fbUser.email;
            user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
            user.firstName = fbUser.first_name;
            user.lastName = fbUser.last_name;
            user.authToken = authResponse.accessToken;
            user.response = fbUser;
            resolve(user);
          });
        } else {
          reject('User cancelled login or did not fully authorize.');
        }
      }, options);
    });
  }
  signOut() {
    return new Promise((resolve, reject) => {
      FB.logout(response => {
        resolve();
      });
    });
  }
}
FacebookLoginProvider.PROVIDER_ID = 'FACEBOOK';
class AmazonLoginProvider extends BaseLoginProvider {
  constructor(clientId, initOptions = {
    scope: 'profile',
    scope_data: {
      profile: {
        essential: false
      }
    },
    redirect_uri: location.origin
  }) {
    super();
    this.clientId = clientId;
    this.initOptions = initOptions;
  }
  initialize() {
    let amazonRoot = null;
    if (document) {
      amazonRoot = document.createElement('div');
      amazonRoot.id = 'amazon-root';
      document.body.appendChild(amazonRoot);
    }
    window.onAmazonLoginReady = () => {
      amazon.Login.setClientId(this.clientId);
    };
    return new Promise((resolve, reject) => {
      try {
        this.loadScript('amazon-login-sdk', 'https://assets.loginwithamazon.com/sdk/na/login1.js', () => {
          resolve();
        }, amazonRoot);
      } catch (err) {
        reject(err);
      }
    });
  }
  getLoginStatus() {
    return new Promise((resolve, reject) => {
      let token = this.retrieveToken();
      if (token) {
        amazon.Login.retrieveProfile(token, response => {
          if (response.success) {
            let user = new SocialUser();
            user.id = response.profile.CustomerId;
            user.name = response.profile.Name;
            user.email = response.profile.PrimaryEmail;
            user.response = response.profile;
            resolve(user);
          } else {
            reject(response.error);
          }
        });
      } else {
        reject(`No user is currently logged in with ${AmazonLoginProvider.PROVIDER_ID}`);
      }
    });
  }
  signIn(signInOptions) {
    const options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
    return new Promise((resolve, reject) => {
      amazon.Login.authorize(options, authResponse => {
        if (authResponse.error) {
          reject(authResponse.error);
        } else {
          amazon.Login.retrieveProfile(authResponse.access_token, response => {
            let user = new SocialUser();
            user.id = response.profile.CustomerId;
            user.name = response.profile.Name;
            user.email = response.profile.PrimaryEmail;
            user.authToken = authResponse.access_token;
            user.response = response.profile;
            this.persistToken(authResponse.access_token);
            resolve(user);
          });
        }
      });
    });
  }
  signOut() {
    return new Promise((resolve, reject) => {
      try {
        amazon.Login.logout();
        this.clearToken();
        resolve();
      } catch (err) {
        reject(err.message);
      }
    });
  }
  persistToken(token) {
    localStorage.setItem(`${AmazonLoginProvider.PROVIDER_ID}_token`, token);
  }
  retrieveToken() {
    return localStorage.getItem(`${AmazonLoginProvider.PROVIDER_ID}_token`);
  }
  clearToken() {
    localStorage.removeItem(`${AmazonLoginProvider.PROVIDER_ID}_token`);
  }
}
AmazonLoginProvider.PROVIDER_ID = 'AMAZON';
class VKLoginProvider extends BaseLoginProvider {
  constructor(clientId, initOptions = {
    fields: 'photo_max,contacts',
    version: '5.124'
  }) {
    super();
    this.clientId = clientId;
    this.initOptions = initOptions;
    this.VK_API_URL = '//vk.com/js/api/openapi.js';
    this.VK_API_GET_USER = 'users.get';
  }
  initialize() {
    return new Promise((resolve, reject) => {
      try {
        this.loadScript(VKLoginProvider.PROVIDER_ID, this.VK_API_URL, () => {
          VK.init({
            apiId: this.clientId
          });
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  getLoginStatus() {
    return new Promise((resolve, reject) => this.getLoginStatusInternal(resolve, reject));
  }
  signIn() {
    return new Promise((resolve, reject) => this.signInInternal(resolve, reject));
  }
  signOut() {
    return new Promise((resolve, reject) => {
      VK.Auth.logout(response => {
        resolve();
      });
    });
  }
  signInInternal(resolve, reject) {
    VK.Auth.login(loginResponse => {
      if (loginResponse.status === 'connected') {
        this.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
      }
    });
  }
  getUser(userId, token, resolve) {
    VK.Api.call(this.VK_API_GET_USER, {
      user_id: userId,
      fields: this.initOptions.fields,
      v: this.initOptions.version
    }, userResponse => {
      resolve(this.createUser(Object.assign({}, {
        token
      }, userResponse.response[0])));
    });
  }
  getLoginStatusInternal(resolve, reject) {
    VK.Auth.getLoginStatus(loginResponse => {
      if (loginResponse.status === 'connected') {
        this.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
      }
    });
  }
  createUser(response) {
    const user = new SocialUser();
    user.id = response.id;
    user.name = `${response.first_name} ${response.last_name}`;
    user.photoUrl = response.photo_max;
    user.authToken = response.token;
    return user;
  }
}
VKLoginProvider.PROVIDER_ID = 'VK';

/**
 * Protocol modes supported by MSAL.
 */
var ProtocolMode;
(function (ProtocolMode) {
  ProtocolMode["AAD"] = "AAD";
  ProtocolMode["OIDC"] = "OIDC";
})(ProtocolMode || (ProtocolMode = {}));
const COMMON_AUTHORITY = 'https://login.microsoftonline.com/common/';
/**
 * Microsoft Authentication using MSAL v2: https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-browser
 */
class MicrosoftLoginProvider extends BaseLoginProvider {
  constructor(clientId, initOptions) {
    super();
    this.clientId = clientId;
    this.initOptions = {
      authority: COMMON_AUTHORITY,
      scopes: ['openid', 'email', 'profile', 'User.Read'],
      knownAuthorities: [],
      protocolMode: ProtocolMode.AAD,
      clientCapabilities: [],
      cacheLocation: 'sessionStorage'
    };
    this.initOptions = Object.assign(Object.assign({}, this.initOptions), initOptions);
  }
  initialize() {
    return new Promise((resolve, reject) => {
      this.loadScript(MicrosoftLoginProvider.PROVIDER_ID, 'https://alcdn.msauth.net/browser/2.13.1/js/msal-browser.js', () => {
        var _a;
        try {
          const config = {
            auth: {
              clientId: this.clientId,
              redirectUri: (_a = this.initOptions.redirect_uri) !== null && _a !== void 0 ? _a : location.origin,
              authority: this.initOptions.authority,
              knownAuthorities: this.initOptions.knownAuthorities,
              protocolMode: this.initOptions.protocolMode,
              clientCapabilities: this.initOptions.clientCapabilities
            },
            cache: !this.initOptions.cacheLocation ? null : {
              cacheLocation: this.initOptions.cacheLocation
            }
          };
          this._instance = new msal.PublicClientApplication(config);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  getSocialUser(loginResponse) {
    return new Promise((resolve, reject) => {
      //After login, use Microsoft Graph API to get user info
      let meRequest = new XMLHttpRequest();
      meRequest.onreadystatechange = () => {
        if (meRequest.readyState == 4) {
          try {
            if (meRequest.status == 200) {
              let userInfo = JSON.parse(meRequest.responseText);
              let user = new SocialUser();
              user.provider = MicrosoftLoginProvider.PROVIDER_ID;
              user.id = loginResponse.idToken;
              user.authToken = loginResponse.accessToken;
              user.name = loginResponse.idTokenClaims.name;
              user.email = loginResponse.account.username;
              user.idToken = loginResponse.idToken;
              user.response = loginResponse;
              user.firstName = userInfo.givenName;
              user.lastName = userInfo.surname;
              resolve(user);
            } else {
              reject(`Error retrieving user info: ${meRequest.status}`);
            }
          } catch (err) {
            reject(err);
          }
        }
      };
      //Microsoft Graph ME Endpoint: https://docs.microsoft.com/en-us/graph/api/user-get?view=graph-rest-1.0&tabs=http
      meRequest.open('GET', 'https://graph.microsoft.com/v1.0/me');
      meRequest.setRequestHeader('Authorization', `Bearer ${loginResponse.accessToken}`);
      try {
        meRequest.send();
      } catch (err) {
        reject(err);
      }
    });
  }
  getLoginStatus() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      const accounts = this._instance.getAllAccounts();
      if ((accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0) {
        const loginResponse = yield this._instance.ssoSilent({
          scopes: this.initOptions.scopes,
          loginHint: accounts[0].username
        });
        return yield this.getSocialUser(loginResponse);
      } else {
        throw `No user is currently logged in with ${MicrosoftLoginProvider.PROVIDER_ID}`;
      }
    });
  }
  signIn() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      const loginResponse = yield this._instance.loginPopup({
        scopes: this.initOptions.scopes,
        prompt: this.initOptions.prompt
      });
      return yield this.getSocialUser(loginResponse);
    });
  }
  signOut(revoke) {
    var _a, _b;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      const accounts = this._instance.getAllAccounts();
      if ((accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0) {
        yield this._instance.logoutPopup({
          account: accounts[0],
          postLogoutRedirectUri: (_b = (_a = this.initOptions.logout_redirect_uri) !== null && _a !== void 0 ? _a : this.initOptions.redirect_uri) !== null && _b !== void 0 ? _b : location.href
        });
      }
    });
  }
}
MicrosoftLoginProvider.PROVIDER_ID = 'MICROSOFT';

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 47367:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/AsyncSubject.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSubject": () => (/* binding */ AsyncSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 80228);

class AsyncSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor() {
    super(...arguments);
    this._value = null;
    this._hasValue = false;
    this._isComplete = false;
  }
  _checkFinalizedStatuses(subscriber) {
    const {
      hasError,
      _hasValue,
      _value,
      thrownError,
      isStopped,
      _isComplete
    } = this;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped || _isComplete) {
      _hasValue && subscriber.next(_value);
      subscriber.complete();
    }
  }
  next(value) {
    if (!this.isStopped) {
      this._value = value;
      this._hasValue = true;
    }
  }
  complete() {
    const {
      _hasValue,
      _value,
      _isComplete
    } = this;
    if (!_isComplete) {
      this._isComplete = true;
      _hasValue && super.next(_value);
      super.complete();
    }
  }
}

/***/ }),

/***/ 46449:
/*!***************************************************************************************!*\
  !*** ./src/app/features/auth/forgotten-pass/forgotten-pass.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.btn-close-modal {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.container .forgotten .logo {\n  width: 100%;\n  margin: auto;\n  margin-top: 48px;\n  margin-bottom: 48px;\n}\n.container .forgotten .title {\n  margin-bottom: 48px;\n}\n.container .forgotten .title .title-text {\n  font-size: 24px;\n  font-weight: 700;\n  color: #24398A;\n}\n.container .forgotten .title .subtitle-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: #231F20;\n}\n.container .forgotten .forgotten-body {\n  padding: 20px 0 20px 0;\n}\n.container .forgotten .forgotten-body form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin: auto;\n}\n.container .forgotten .forgotten-body form .mat-form-field {\n  width: 100%;\n}\n.container .forgotten .forgotten-body form .container-buttons {\n  margin-top: 290px;\n  width: 100%;\n}\n.container .forgotten .forgotten-body form .container-buttons button {\n  width: 95%;\n}\n@media (max-width: 1200px) {\n  .container .image {\n    display: none;\n  }\n}\n@media (max-width: 576px) {\n  .container {\n    width: 320px;\n  }\n  .container .forgotten {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .container .image {\n    display: none;\n  }\n}\n\n.mat-button-toggle-checked {\n  background-color: #24398A !important;\n  color: #FFFFFF !important;\n  border: 1px solid var(--primary-background);\n}\n\n.image {\n  background: url('client_image.png') center no-repeat;\n  background-size: cover;\n}\n\n.mat-button {\n  border: 1px solid #24398A;\n  border-radius: 100px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/auth/forgotten-pass/forgotten-pass.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,WAAA;EACA,SAAA;AAkBF;;AAPI;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;AAUN;AAPI;EACE,mBAAA;AASN;AAPM;EACE,eAAA;EACA,gBAAA;EACA,cD5BQ;ACqChB;AANM;EACE,eAAA;EACA,gBAAA;EACA,cD9BA;ACsCR;AAJI;EACE,sBAAA;AAMN;AAJM;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AAMR;AAJQ;EACE,WAAA;AAMV;AAHQ;EACE,iBAAA;EACA,WAAA;AAKV;AAHU;EACE,UAAA;AAKZ;AAiBI;EAfF;IAgBI,aAAA;EAdJ;AACF;AAiBE;EA7EF;IA8EI,YAAA;EAdF;EAgBE;IACE,kBAAA;IACA,mBAAA;EAdJ;EAiBE;IACE,aAAA;EAfJ;AACF;;AAmBA;EACE,oCAAA;EACA,yBAAA;EACA,2CAAA;AAhBF;;AAmBA;EACE,oDAAA;EACA,sBAAA;AAhBF;;AAmBA;EACE,yBAAA;EACA,+BAAA;AAhBF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\n.btn-close-modal {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.container {\n  //width: 1440px;\n  //height: 840px;\n\n  .forgotten {\n    //padding-left: 100px;\n    //padding-right: 100px;\n\n    .logo {\n      width: 100%;\n      margin: auto;\n      margin-top: 48px;\n      margin-bottom: 48px;\n    }\n\n    .title {\n      margin-bottom: 48px;\n\n      .title-text {\n        font-size: 24px;\n        font-weight: 700;\n        color: $primary-color;\n      }\n\n      .subtitle-text {\n        font-size: 16px;\n        font-weight: 400;\n        color: $title;\n      }\n    }\n\n    .forgotten-body {\n      padding: 20px 0 20px 0;\n\n      form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 100%;\n        margin: auto;\n\n        .mat-form-field {\n          width: 100%;\n        }\n\n        .container-buttons{\n          margin-top:290px;\n          width: 100%;\n\n          button{\n            width: 95%;\n          }\n        }\n      }\n    }\n  }\n\n  .image {\n    //position: relative;\n    //.btn-round{\n    //  height: 40px;\n    //  width: 40px;\n    //  position:absolute;\n    //  top:20px;\n    //  right:20px;\n    //\n    //  i{\n    //    font-size:24px;\n    //    color:$title;\n    //  }\n    //}\n\n    @media(max-width: 1200px) {\n      display: none;\n    }\n  }\n\n  @media(max-width: 576px) {\n    width: 320px;\n\n    .forgotten {\n      padding-left: 20px;\n      padding-right: 20px;\n    }\n\n    .image {\n      display: none;\n    }\n  }\n}\n\n.mat-button-toggle-checked {\n  background-color: $primary-color !important;\n  color: $background-primary !important;\n  border: 1px solid var(--primary-background);\n}\n\n.image {\n  background: url(\"../../../../assets/images/login/client_image.png\") center no-repeat;\n  background-size: cover;\n}\n\n.mat-button{\n  border:1px solid $primary-color;\n  border-radius: 100px!important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 80810:
/*!*********************************************************************!*\
  !*** ./src/app/features/auth/login/login.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.btn-close-modal {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.container .login .logo {\n  width: 100%;\n  margin: auto;\n  margin-top: 48px;\n}\n.container .login .login-body {\n  padding: 20px 0 20px 0;\n  margin-top: 56px;\n}\n.container .login .login-body form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin: auto;\n}\n.container .login .login-body form .mat-form-field {\n  width: 100%;\n}\n.container .login .login-body form .row .mat-checkbox, .container .login .login-body form .row a {\n  width: 50%;\n  padding: 0;\n}\n.container .login .login-body form .row a {\n  text-align: right;\n}\n.container .login .login-body .text-center {\n  width: 100%;\n}\n.container .login .login-body .text-center button {\n  width: 100%;\n}\n.container .login .login-body .container-hr {\n  width: 100%;\n  align-items: center;\n}\n.container .login .login-body .container-hr hr {\n  margin-top: 1rem;\n  border: 0;\n  border-top: 1px solid #231F20;\n  height: 0;\n}\n.container .login .login-body .container-hr p {\n  text-align: center;\n  color: #231F20;\n}\n.container .login .login-body .container-btn button {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.16);\n  margin-bottom: 16px;\n  color: #231F20;\n}\n.container .login .login-body .container-btn button i {\n  color: #231F20;\n  font-size: 16px;\n}\n.container .login .login-body .register {\n  max-width: 100%;\n  margin-top: 100px !important;\n  margin: auto;\n}\n.container .login .login-body .register p, .container .login .login-body .register a {\n  margin: 0 auto;\n}\n.container .login a.ml-2 {\n  text-decoration: none;\n}\n.container .login .register.d-flex.flex-row.justify-content-between p {\n  margin-right: 0px;\n}\n@media (max-width: 1200px) {\n  .container .image {\n    display: none;\n  }\n}\n@media (max-width: 576px) {\n  .container {\n    width: 320px;\n  }\n  .container .login {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .container .image {\n    display: none;\n  }\n}\n\n.image {\n  background: url('Image.png') center no-repeat;\n  background-size: cover;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/auth/login/login.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,kBAAA;EACA,WAAA;EACA,SAAA;AAkBF;;AAPI;EACE,WAAA;EACA,YAAA;EACA,gBAAA;AAUN;AAPI;EACE,sBAAA;EACA,gBAAA;AASN;AAPM;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AASR;AAPQ;EACE,WAAA;AASV;AAAU;EACE,UAAA;EACA,UAAA;AAEZ;AACU;EACE,iBAAA;AACZ;AAIM;EACE,WAAA;AAFR;AAIQ;EACE,WAAA;AAFV;AAMM;EACE,WAAA;EACA,mBAAA;AAJR;AAKQ;EACE,gBAAA;EACA,SAAA;EACA,6BAAA;EACA,SAAA;AAHV;AAMQ;EACE,kBAAA;EACA,cDrEF;ACiER;AASQ;EACE,4EAAA;EACA,mBAAA;EACA,cD7EF;ACsER;AASU;EACE,cDhFJ;ECiFI,eAAA;AAPZ;AAYM;EACE,eAAA;EACA,4BAAA;EACA,YAAA;AAVR;AAYQ;EACE,cAAA;AAVV;AAeI;EACE,qBAAA;AAbN;AAeI;EACE,iBAAA;AAbN;AAiCI;EAfF;IAgBI,aAAA;EA9BJ;AACF;AAiCE;EA3HF;IA4HI,YAAA;EA9BF;EAgCE;IACE,kBAAA;IACA,mBAAA;EA9BJ;EAiCE;IACE,aAAA;EA/BJ;AACF;;AAmCA;EACE,6CAAA;EACA,sBAAA;AAhCF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\n.btn-close-modal {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.container {\n  //width: 1440px;\n  //height: 840px;\n\n  .login {\n    //padding-left: 100px;\n    //padding-right: 100px;\n\n    .logo {\n      width: 100%;\n      margin: auto;\n      margin-top: 48px;\n    }\n\n    .login-body {\n      padding: 20px 0 20px 0;\n      margin-top: 56px;\n\n      form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 100%;\n        margin: auto;\n\n        .mat-form-field {\n          width: 100%;\n        }\n\n        .row {\n          //width: 100%;\n          //display: flex;\n          //justify-content: space-between !important;\n          //margin-bottom: 24px;\n\n          .mat-checkbox, a {\n            width: 50%;\n            padding: 0;\n          }\n\n          a {\n            text-align: right;\n          }\n        }\n      }\n\n      .text-center {\n        width: 100%;\n\n        button {\n          width: 100%;\n        }\n      }\n\n      .container-hr {\n        width: 100%;\n        align-items: center;\n        hr {\n          margin-top: 1rem;\n          border: 0;\n          border-top: 1px solid $title;\n          height: 0;\n        }\n\n        p {\n          text-align: center;\n          color:$title;\n        }\n      }\n\n      .container-btn{\n        button{\n          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.16);\n          margin-bottom: 16px;\n          color:$title;\n\n          i{\n            color:$title;\n            font-size:16px;\n          }\n        }\n      }\n\n      .register{\n        max-width: 100%;\n        margin-top:100px!important;\n        margin:auto;\n\n        p,a{\n          margin:0 auto;\n        }\n      }\n    }\n\n    a.ml-2{\n      text-decoration: none;\n    }\n    .register.d-flex.flex-row.justify-content-between p{\n      margin-right: 0px;\n    }\n\n  }\n\n  .image{\n    //position: relative;\n    //.btn-round{\n    //  height: 40px;\n    //  width: 40px;\n    //  position:absolute;\n    //  top:20px;\n    //  right:20px;\n    //\n    //  i{\n    //    font-size:24px;\n    //    color:$title;\n    //  }\n    //}\n\n    @media(max-width: 1200px){\n      display: none;\n    }\n  }\n\n  @media(max-width: 576px){\n    width: 320px;\n\n    .login{\n      padding-left: 20px;\n      padding-right: 20px;\n    }\n\n    .image{\n      display: none;\n    }\n  }\n}\n\n.image {\n  background: url(\"../../../../assets/images/login/Image.png\") center no-repeat;\n  background-size: cover;\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 87670:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/auth/provider-register/provider-register.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n:host::ng-deep.mat-checkbox-label {\n  white-space: normal !important;\n}\n\n.btn-close-modal {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.container .register .logo {\n  width: 100%;\n  margin: auto;\n  margin-top: 15px;\n  margin-bottom: 30px;\n}\n.container .register .title {\n  margin-bottom: 15px;\n}\n.container .register .title .title-text {\n  font-size: 24px;\n  font-weight: 700;\n  color: #24398A;\n}\n.container .register .title .subtitle-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: #231F20;\n}\n.container .register .register-body {\n  padding: 20px 0 20px 0;\n}\n.container .register .register-body form {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: auto;\n}\n.container .register .register-body form .mat-form-field {\n  width: 100%;\n}\n.container .register .register-body form .container-buttons {\n  margin-top: 30px;\n  width: 100%;\n}\n.container .btn-long.btn-white-fill.ml-2 {\n  border-radius: 40px;\n}\n@media (max-width: 1200px) {\n  .container .image {\n    display: none;\n  }\n}\n@media (max-width: 576px) {\n  .container {\n    width: 320px;\n  }\n  .container .register {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .container .image {\n    display: none;\n  }\n}\n\n.image {\n  background: url('client_image.png') center no-repeat;\n  background-size: cover;\n}\n\n.reg-buttons {\n  margin-top: 30px;\n}\n.reg-buttons .mat-button, .reg-buttons button {\n  border: 1px solid #24398A;\n  border-radius: 100px !important;\n  width: 200px;\n  max-width: 200px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/auth/provider-register/provider-register.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,8BAAA;AAkBF;;AAfA;EACE,kBAAA;EACA,WAAA;EACA,SAAA;AAkBF;;AAPI;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;AAUN;AAPI;EACE,mBAAA;AASN;AAPM;EACE,eAAA;EACA,gBAAA;EACA,cDhCQ;ACyChB;AANM;EACE,eAAA;EACA,gBAAA;EACA,cDlCA;AC0CR;AAJI;EACE,sBAAA;AAMN;AAJM;EACE,aAAA;EACA,sBAAA;EAEA,WAAA;EACA,YAAA;AAKR;AAHQ;EACE,WAAA;AAKV;AAFO;EACE,gBAAA;EACA,WAAA;AAIT;AAME;EACE,mBAAA;AAJJ;AAyBI;EAfF;IAgBI,aAAA;EAtBJ;AACF;AAyBE;EApFF;IAqFI,YAAA;EAtBF;EAwBE;IACE,kBAAA;IACA,mBAAA;EAtBJ;EAyBE;IACE,aAAA;EAvBJ;AACF;;AA2BA;EACE,oDAAA;EACA,sBAAA;AAxBF;;AA6BA;EACE,gBAAA;AA1BF;AA2BE;EACE,yBAAA;EACA,+BAAA;EACA,YAAA;EACA,gBAAA;AAzBJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\n:host::ng-deep.mat-checkbox-label {\n  white-space: normal !important;\n}\n\n.btn-close-modal {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.container {\n  //width: 1000px;\n  //height: 758px;\n\n  .register {\n    //padding-left: 100px;\n    //padding-right: 100px;\n\n    .logo {\n      width: 100%;\n      margin: auto;\n      margin-top: 15px;\n      margin-bottom: 30px;\n    }\n\n    .title {\n      margin-bottom: 15px;\n\n      .title-text {\n        font-size: 24px;\n        font-weight: 700;\n        color: $primary-color;\n      }\n\n      .subtitle-text {\n        font-size: 16px;\n        font-weight: 400;\n        color: $title;\n      }\n    }\n\n    .register-body {\n      padding: 20px 0 20px 0;\n\n      form {\n        display: flex;\n        flex-direction: column;\n        //align-items: center;\n        width: 100%;\n        margin: auto;\n\n        .mat-form-field {\n          width: 100%;\n        }\n\n       .container-buttons{\n         margin-top: 30px;\n         width: 100%;\n\n         //button{\n         //  width: 50%;\n         //}\n       }\n      }\n    }\n  }\n\n  .btn-long.btn-white-fill.ml-2{\n    border-radius: 40px;\n  }\n  .col.btn-long.btn-color-fill.ml-2{\n    //max-width:40%;\n  }\n\n  .image {\n    //position: relative;\n    //.btn-round{\n    //  height: 40px;\n    //  width: 40px;\n    //  position:absolute;\n    //  top:20px;\n    //  right:20px;\n    //\n    //  i{\n    //    font-size:24px;\n    //    color:$title;\n    //  }\n    //}\n\n    @media(max-width: 1200px) {\n      display: none;\n    }\n  }\n\n  @media(max-width: 576px) {\n    width: 320px;\n\n    .register {\n      padding-left: 20px;\n      padding-right: 20px;\n    }\n\n    .image {\n      display: none;\n    }\n  }\n}\n\n.image {\n  background: url(\"../../../../assets/images/login/client_image.png\") center no-repeat;\n  background-size: cover;\n}\n\n\n\n.reg-buttons {\n  margin-top: 30px;\n  .mat-button, button{\n    border:1px solid $primary-color;\n    border-radius: 100px!important;\n    width: 200px;\n    max-width: 200px;\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 25763:
/*!***************************************************************************!*\
  !*** ./src/app/features/auth/register/register.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n:host::ng-deep.mat-checkbox-label {\n  white-space: normal !important;\n}\n\n.btn-close-modal {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.container .register .logo {\n  width: 100%;\n  margin: auto;\n  margin-top: 48px;\n  margin-bottom: 48px;\n}\n.container .register .title {\n  margin-bottom: 48px;\n}\n.container .register .title .title-text {\n  font-size: 24px;\n  font-weight: 700;\n  color: #24398A;\n}\n.container .register .title .subtitle-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: #231F20;\n}\n.container .register .register-body {\n  padding: 20px 0 20px 0;\n}\n.container .register .register-body form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin: auto;\n}\n.container .register .register-body form .mat-form-field {\n  width: 100%;\n}\n.container .register .register-body form .container-buttons {\n  margin-top: 48px;\n  width: 100%;\n}\n.container .register .register-body form .container-buttons button {\n  width: 50%;\n}\n.container .btn-long.btn-white-fill.ml-2 {\n  border-radius: 40px;\n}\n.container .col.btn-long.btn-color-fill.ml-2 {\n  max-width: 40%;\n}\n@media (max-width: 1200px) {\n  .container .image {\n    display: none;\n  }\n}\n@media (max-width: 576px) {\n  .container {\n    width: 320px;\n  }\n  .container .register {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .container .image {\n    display: none;\n  }\n}\n\n.image {\n  background: url('client_image.png') center no-repeat;\n  background-size: cover;\n}\n\n.mat-button {\n  border: 1px solid #24398A;\n  border-radius: 100px !important;\n  width: 95%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/auth/register/register.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,8BAAA;AAkBF;;AAfA;EACE,kBAAA;EACA,WAAA;EACA,SAAA;AAkBF;;AAPI;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;AAUN;AAPI;EACE,mBAAA;AASN;AAPM;EACE,eAAA;EACA,gBAAA;EACA,cDhCQ;ACyChB;AANM;EACE,eAAA;EACA,gBAAA;EACA,cDlCA;AC0CR;AAJI;EACE,sBAAA;AAMN;AAJM;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AAMR;AAJQ;EACE,WAAA;AAMV;AAHO;EACE,gBAAA;EACA,WAAA;AAKT;AAHS;EACE,UAAA;AAKX;AAEE;EACE,mBAAA;AAAJ;AAEE;EACE,cAAA;AAAJ;AAkBI;EAfF;IAgBI,aAAA;EAfJ;AACF;AAkBE;EApFF;IAqFI,YAAA;EAfF;EAiBE;IACE,kBAAA;IACA,mBAAA;EAfJ;EAkBE;IACE,aAAA;EAhBJ;AACF;;AAoBA;EACE,oDAAA;EACA,sBAAA;AAjBF;;AAqBA;EACE,yBAAA;EACA,+BAAA;EACA,UAAA;AAlBF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../theme/styles/components/colors\";\n\n:host::ng-deep.mat-checkbox-label {\n  white-space: normal !important;\n}\n\n.btn-close-modal {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.container {\n  //width: 1000px;\n  //height: 758px;\n\n  .register {\n    //padding-left: 100px;\n    //padding-right: 100px;\n\n    .logo {\n      width: 100%;\n      margin: auto;\n      margin-top: 48px;\n      margin-bottom: 48px;\n    }\n\n    .title {\n      margin-bottom: 48px;\n\n      .title-text {\n        font-size: 24px;\n        font-weight: 700;\n        color: $primary-color;\n      }\n\n      .subtitle-text {\n        font-size: 16px;\n        font-weight: 400;\n        color: $title;\n      }\n    }\n\n    .register-body {\n      padding: 20px 0 20px 0;\n\n      form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 100%;\n        margin: auto;\n\n        .mat-form-field {\n          width: 100%;\n        }\n\n       .container-buttons{\n         margin-top: 48px;\n         width: 100%;\n\n         button{\n           width: 50%;\n         }\n       }\n      }\n    }\n  }\n\n  .btn-long.btn-white-fill.ml-2{\n    border-radius: 40px;\n  }\n  .col.btn-long.btn-color-fill.ml-2{\n    max-width:40%;\n  }\n\n  .image {\n    //position: relative;\n    //.btn-round{\n    //  height: 40px;\n    //  width: 40px;\n    //  position:absolute;\n    //  top:20px;\n    //  right:20px;\n    //\n    //  i{\n    //    font-size:24px;\n    //    color:$title;\n    //  }\n    //}\n\n    @media(max-width: 1200px) {\n      display: none;\n    }\n  }\n\n  @media(max-width: 576px) {\n    width: 320px;\n\n    .register {\n      padding-left: 20px;\n      padding-right: 20px;\n    }\n\n    .image {\n      display: none;\n    }\n  }\n}\n\n.image {\n  background: url(\"../../../../assets/images/login/client_image.png\") center no-repeat;\n  background-size: cover;\n}\n\n\n.mat-button{\n  border:1px solid $primary-color;\n  border-radius: 100px!important;\n  width: 95%;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83370:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/public-homepage/activate-users/activate-users.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content-404 {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.content-404 .img-wrapper {\n  max-width: 700px;\n}", "",{"version":3,"sources":["webpack://./src/app/features/public-homepage/activate-users/activate-users.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;AACF;AACE;EACE,gBAAA;AACJ","sourcesContent":[".content-404 {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  .img-wrapper {\n    max-width: 700px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 39182:
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/hero-section/hero-section.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.width-public-hp {\n  max-width: 694px;\n}\n\n.header-image-content.offset-bottom.home-page {\n  align-items: center !important;\n}\n\n.header-container {\n  width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.header-button button.btn-long.btn-white-fill span {\n  padding-left: 32px;\n  padding-right: 32px;\n  width: 140px;\n}\n\n.header-image-wrapper {\n  position: relative;\n  overflow: hidden;\n  margin-top: -72px;\n}\n.header-image-wrapper .header-image-content {\n  position: absolute;\n  min-height: 320px;\n  color: #fff;\n  z-index: 1;\n}\n.header-image-wrapper .header-image-content .title {\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 76.8px;\n  text-align: left;\n  color: #FFCC29;\n}\n.header-image-wrapper .header-image-content .desc {\n  margin: 0;\n  font-size: 24px;\n  text-align: left;\n  font-weight: 400;\n  line-height: 38.4px;\n}\n.header-image-wrapper .header-image-content .mat-raised-button {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n  margin: 0 4px;\n}\n.header-image-wrapper .mask {\n  background: linear-gradient(to bottom, rgba(36, 57, 138, 0), rgb(36, 57, 138));\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.header-image-wrapper .bg {\n  width: 110%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.header-image-wrapper .bg-anime {\n  -webkit-animation-name: MOVE-BG;\n  -webkit-animation-duration: 15s;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  -moz-animation-name: MOVE-BG;\n  -moz-animation-duration: 15s;\n  -moz-animation-timing-function: ease-in-out;\n  -moz-animation-iteration-count: infinite;\n  -moz-animation-direction: alternate;\n  -ms-animation-name: MOVE-BG;\n  -ms-animation-duration: 15s;\n  -ms-animation-timing-function: ease-in-out;\n  -ms-animation-iteration-count: infinite;\n  -ms-animation-direction: alternate;\n  animation-name: MOVE-BG;\n  animation-duration: 15s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n.header-image-wrapper.fullscreen {\n  height: calc(100vh - 72px) !important;\n}\n.header-image-wrapper.fullscreen .header-image-content {\n  height: calc(100vh - 72px) !important;\n  width: 100%;\n}\n@keyframes MOVE-BG {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-7%);\n  }\n}\n.header-image-wrapper[dir=rtl] .bg-anime {\n  animation-name: MOVE-BG-RTL;\n}\n@keyframes MOVE-BG-RTL {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(7%);\n  }\n}\n.header-image-wrapper.fullscreen {\n  height: 100vh !important;\n  margin-top: 0 !important;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/public-homepage/components/hero-section/hero-section.component.scss","webpack://./src/app/theme/styles/_variables.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACE,gBAAA;AAiBF;;AAdA;EACE,8BAAA;AAiBF;;AAZA;EACE,WAAA;EACA,6CAAA;EACA,4CAAA;EACA,kBAAA;EACA,iBAAA;AAeF;;AAZA;EACE,kBAAA;EACA,mBAAA;EACA,YAAA;AAeF;;AAZA;EACE,kBAAA;EACA,gBAAA;EACA,iBAAA;AAeF;AAdE;EACE,kBAAA;EACA,iBC5BsB;ED6BtB,WAAA;EACA,UAAA;AAgBJ;AAfI;EACE,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cDtCY;ACuDlB;AAfI;EACE,SAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AAiBN;AAfI;EACE,0BAAA;EACA,uBAAA;EACA,aAAA;AAiBN;AAbE;EACE,8EAAA;EAEA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;AAcJ;AAZE;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,sBAAA;EACA,4BAAA;EACA,2BAAA;AAcJ;AAZE;EACE,+BAAA;EACA,+BAAA;EACA,8CAAA;EACA,2CAAA;EACA,sCAAA;EACA,4BAAA;EACA,4BAAA;EACA,2CAAA;EACA,wCAAA;EACA,mCAAA;EACA,2BAAA;EACA,2BAAA;EACA,0CAAA;EACA,uCAAA;EACA,kCAAA;EACA,uBAAA;EACA,uBAAA;EACA,sCAAA;EACA,mCAAA;EACA,8BAAA;AAcJ;AAZE;EACE,qCAAA;AAcJ;AAbI;EACE,qCAAA;EACA,WAAA;AAeN;AAPA;EAAqB;IAAO,wBAAA;EAoC1B;EApCsD;IAAK,0BAAA;EAuC3D;AACF;AArCE;EAIE,2BAAA;AAuCJ;AAhCA;EAAyB;IAAO,wBAAA;EA6D9B;EA7D0D;IAAK,yBAAA;EAgE/D;AACF;AAmEA;EACE,wBAAA;EACA,wBAAA;AAjEF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/variables\";\n@import \"/src/app/theme/styles/components/colors\";\n\n.width-public-hp{\n  max-width: 694px;\n}\n\n.header-image-content.offset-bottom.home-page{\n  align-items: center!important;\n  //padding-left: 200px;\n  //place-content:center!important;\n}\n\n.header-container{\n  width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.header-button button.btn-long.btn-white-fill span{\n  padding-left: 32px;\n  padding-right: 32px;\n  width:140px;\n}\n\n.header-image-wrapper{\n  position: relative;\n  overflow: hidden;\n  margin-top: -$main-toolbar-height;\n  .header-image-content{\n    position: absolute;\n    min-height: $header-image-min-height;\n    color: #fff;\n    z-index: 1;\n    .title{\n      font-size: 48px;\n      font-weight: 700;\n      line-height: 76.8px;\n      text-align: left;\n      color: $secondary-color;\n    }\n    .desc{\n      margin: 0;\n      font-size: 24px;\n      text-align: left;\n      font-weight:400;\n      line-height: 38.4px;\n    }\n    .mat-raised-button{\n      color: rgba(0, 0, 0, 0.87);\n      background-color: white;\n      margin: 0 4px;\n\n    }\n  }\n  .mask{\n    background: linear-gradient(to bottom,rgba(36, 57, 138, 0)\n    , rgba(36, 57, 138, 1));\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    left: 0;\n    z-index: 1;\n  }\n  .bg{\n    width: 110%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n  .bg-anime{\n    -webkit-animation-name: MOVE-BG;\n    -webkit-animation-duration: 15s;\n    -webkit-animation-timing-function: ease-in-out;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-direction: alternate;\n    -moz-animation-name: MOVE-BG;\n    -moz-animation-duration: 15s;\n    -moz-animation-timing-function: ease-in-out;\n    -moz-animation-iteration-count: infinite;\n    -moz-animation-direction: alternate;\n    -ms-animation-name: MOVE-BG;\n    -ms-animation-duration: 15s;\n    -ms-animation-timing-function: ease-in-out;\n    -ms-animation-iteration-count: infinite;\n    -ms-animation-direction: alternate;\n    animation-name: MOVE-BG;\n    animation-duration: 15s;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n  }\n  &.fullscreen{\n    height: calc(100vh - #{$main-toolbar-height}) !important;\n    .header-image-content{\n      height: calc(100vh - #{$main-toolbar-height}) !important;\n      width: 100%;\n    }\n  }\n}\n\n@-webkit-keyframes MOVE-BG { from { -webkit-transform: translateX(0); } to { -webkit-transform: translateX(-7%); } }\n@-moz-keyframes MOVE-BG { from { -moz-transform: translateX(0); } to { -moz-transform: translateX(-7%); } }\n@-ms-keyframes MOVE-BG { from { -ms-transform: translateX(0); } to { -ms-transform: translateX(-7%); } }\n@keyframes MOVE-BG { from { transform: translateX(0); } to { transform: translateX(-7%); } }\n\n.header-image-wrapper[dir=\"rtl\"]{\n  .bg-anime{\n    -webkit-animation-name: MOVE-BG-RTL;\n    -moz-animation-name: MOVE-BG-RTL;\n    -ms-animation-name: MOVE-BG-RTL;\n    animation-name: MOVE-BG-RTL;\n  }\n}\n\n@-webkit-keyframes MOVE-BG-RTL { from { -webkit-transform: translateX(0); } to { -webkit-transform: translateX(7%); } }\n@-moz-keyframes MOVE-BG-RTL { from { -moz-transform: translateX(0); } to { -moz-transform: translateX(7%); } }\n@-ms-keyframes MOVE-BG-RTL { from { -ms-transform: translateX(0); } to { -ms-transform: translateX(7%); } }\n@keyframes MOVE-BG-RTL { from { transform: translateX(0); } to { transform: translateX(7%); } }\n\n//// xs\n//@media screen and (max-width: 599px) {\n//  .header-image-wrapper{\n//    .header-image-content{\n//      min-height: $header-image-min-height - 80px;\n//      &.offset-bottom{\n//        min-height: $header-image-min-height + $main-content-header-offset-to-top - 80px;\n//      }\n//      &.home-page{\n//        min-height: $header-image-min-height + $main-content-header-offset-to-top;\n//      }\n//      .title{\n//        font-size: 24px;\n//      }\n//      .desc{\n//        font-size: 16px;\n//      }\n//    }\n//  }\n//}\n//\n//// sm\n//@media screen and (min-width: 600px) and (max-width: 959px) {\n//  .header-image-wrapper{\n//    .header-image-content{\n//      min-height: $header-image-min-height - 40px;\n//      &.offset-bottom{\n//        min-height: $header-image-min-height + $main-content-header-offset-to-top - 40px;\n//      }\n//      &.home-page{\n//        min-height: $header-image-min-height + $main-content-header-offset-to-top + 40px;\n//      }\n//      .title{\n//        font-size: 36px;\n//      }\n//      .desc{\n//        font-size: 18px;\n//      }\n//    }\n//  }\n//}\n//\n//@media screen and (min-width: 360px) and (max-width:600px) {\n//\n//  .header-image-content.offset-bottom.home-page{\n//    align-items: flex-start!important;\n//    padding-left: 0px;\n//  }\n//\n//  // .header-button button.btn-long.btn-white-fill{\n//  //     padding-left: 32px;\n//  //     padding-right: 32px;\n//\n//  // }\n//\n//  .headerTitleDescContent{\n//    justify-content: flex-start;\n//    padding: 24px 39px;\n//  }\n//\n//  .col-2.mt-3.ng-star-inserted{\n//    width: 100%;\n//  }\n//\n//  button.btn-long.btn-white-fill.ng-star-inserted  {\n//    width: 100%;\n//    padding-left: 32px;\n//    padding-right: 32px;\n//  }\n//\n//  .header-image-content.offset-bottom.home-page{\n//    place-content: end!important;\n//    align-items: end!important;\n//  }\n//\n//  .header-image-wrapper{\n//    .header-image-content{\n//      min-height: $header-image-min-height - 40px;\n//      .title{\n//        font-size: 32px;\n//        font-weight: 700;\n//        line-height: 44.8px;\n//      }\n//      .desc{\n//        font-size: 16px;\n//        font-weight: 400;\n//        line-height: 25.6px;\n//      }\n//    }\n//  }\n//\n//\n//\n//\n//}\n//\n//\n//\n////\n//@media screen and (min-width: 600px) and (max-width:1023px) {\n//  //content div padding\n//  //.headerTitleDescContent{\n//  //    justify-content: flex-start;\n//  //    padding: 34px 49px;\n//  //}\n//\n//  .header-image-content.offset-bottom.home-page{\n//    align-items: flex-start!important;\n//    padding-left: 0px!important;\n//  }\n//\n//\n//  //button header\n//  .col-2.mt-4.ng-star-inserted{\n//    width: 100%;\n//  }\n//\n//  .header-image-content.offset-bottom.home-page{\n//    place-content: end!important;\n//    align-items: end!important;\n//  }\n//}\n//\n//@media screen and (min-width: 765px) and (max-width:1022px) {\n//  .header-image-content.offset-bottom.home-page{\n//    align-items: flex-start!important;\n//    padding-left: 0px!important;\n//  }\n//}\n\n.header-image-wrapper.fullscreen {\n  height: 100vh !important;\n  margin-top: 0 !important;\n}\n","$font-family: 'Montserrat';\n$theme-max-width: 1300px;\n$top-toolbar-height: 36px;\n$main-toolbar-height: 72px;\n$user-menu-width: 220px;\n$header-image-min-height: 320px;\n$header-video-min-height: 360px;\n$header-carousel-height: 460px;\n$header-map-height: 550px;\n$main-content-header-offset-to-top: 80px;\n\n$main-sidenav-width: 250px;\n$search-sidenav-width: 288px;"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5226:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/homepage/homepage.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.section-title.public-homepage-section-title {\n  text-align: left;\n  text-transform: unset;\n  color: white;\n}\n\nh2, .mat-icon-xlg {\n  color: #FFCC29;\n}\n\np {\n  color: white;\n}\n\n.section-title.public-homepage-section-title::after {\n  display: none;\n}\n\n.phb-benefits {\n  background-color: #24398A;\n  padding-top: 96px;\n  padding-bottom: 96px;\n}\n\n.phb-benefits p {\n  color: #FFCC29;\n  font-size: 16px;\n  font-weight: 300;\n  color: white;\n  max-width: 400px;\n}\n\n.phb-benefits h2 {\n  color: #FFCC29;\n  font-size: 24px;\n  line-height: 38.4px;\n  font-weight: 700;\n  align-items: center;\n  display: flex;\n}\n\n.col-title {\n  padding-top: 48px;\n  padding-bottom: 48px;\n}\n\n.phb-benefits .col.col-title h1 {\n  color: white;\n  font-size: 32px;\n  line-height: 51px;\n  font-weight: 700;\n  font-style: normal;\n}\n\n.section {\n  margin-top: 0px;\n}\n\n.phb-benefits .public-homepage-section-title .benefits-section-class .mat-icon {\n  color: #FFCC29;\n  width: 20px !important;\n  height: 11.15px;\n  align-items: center;\n}\n\n.gallery-text-section h1 {\n  color: #231F20;\n  font-size: 32px;\n  font-weight: 700;\n  line-height: 51.2px;\n}\n\n.gallery-text-section p {\n  color: #231F20;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 38.4px;\n}\n\n.file-name {\n  display: flex;\n  position: absolute;\n  bottom: 8px;\n}\n\n.left-video,\n.mobile-video {\n  position: relative;\n}\n\n.file-name {\n  position: absolute;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5); /* Black see-through */\n  color: #f1f1f1;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  color: white;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 0 4px;\n  text-align: left;\n  align-items: flex-end !important;\n  opacity: 1;\n}\n\n.file-name span {\n  color: white;\n  font-size: 12px;\n}\n\n.icon {\n  cursor: pointer;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n  opacity: 2;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.free-trial-section-hpb p {\n  color: #24398A;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 38.4px;\n}\n\n.free-trial-text.col h1 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 51.2px;\n}\n\n.free-trial-text.col h1.second-title-trial {\n  font-weight: 700;\n  font-size: 72px;\n  line-height: 115.2px;\n}\n\n.free-trial-text.col p {\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 38.4px;\n}\n\n.free-trial-section-hpb h2, .free-trial-section-hpb p {\n  color: #24398A;\n}\n\n.free-trial-section-hpb .section-title,\n.free-trial-section-hpb p {\n  text-align: right;\n  text-transform: unset;\n  color: #24398A;\n}\n\n.free-trial-section-hpb .row {\n  justify-content: flex-end;\n}\n\n.free-trial-section-hpb {\n  background-color: #eff0f5;\n}\n\nimg.d-block.w-100 {\n  height: 130px;\n  object-fit: cover;\n}\n\n.became-provider p,\n.became-provider h1 {\n  text-align: center;\n}\n\n.became-provider-container .d-flex {\n  justify-content: center;\n}\n\n.became-provider p {\n  color: white;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 25.6px;\n  max-width: 425px;\n  padding: 72px 0px;\n}\n\n.became-provider {\n  background-image: linear-gradient(rgba(36, 56, 138, 0.836), rgba(36, 56, 138, 0.836)), url('devino-provider-min.jpg');\n}\n\n.became-provider h1.section-title.py-2 {\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 67px;\n  font-style: normal;\n  padding-top: 70.5px !important;\n}\n\n.became-provider button {\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\n\n.parent {\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n  grid-template-rows: repeat(4, 1fr);\n  grid-column-gap: 32px;\n  grid-row-gap: 24px;\n}\n\n.div1 {\n  grid-area: 1/1/5/2;\n}\n\n.div2 {\n  grid-area: 1/2/2/3;\n}\n\n.div3 {\n  grid-area: 2/2/3/3;\n}\n\n.div4 {\n  grid-area: 3/2/4/3;\n}\n\n.div5 {\n  grid-area: 4/2/5/3;\n}\n\nvideo {\n  width: 100%;\n  height: 650px;\n  max-height: 650px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\nvm-player {\n  --vm-player-border-radius: 8px;\n}\n\n.video-img-container.parent img.d-block {\n  border-radius: 8px;\n}\n\n.wrap-videos {\n  display: none;\n}\n\n.free-trial-button-container {\n  justify-content: flex-end;\n}\n\n@media screen and (max-width: 768px) {\n  .phb-benefits .row {\n    flex-direction: column;\n  }\n  .phb-benefits .col-6 {\n    width: 100%;\n    padding-bottom: 24px;\n  }\n  .phb-benefits {\n    padding: 48px 24px;\n  }\n  .col.col-title {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .col.col-title h1 {\n    color: white;\n    font-size: 24px;\n    line-height: 51px;\n    font-weight: 700;\n    font-style: normal;\n  }\n  .phb-benefits .col-6 h2 {\n    color: #FFCC29;\n    font-size: 20px;\n    line-height: 28px;\n    font-weight: 700;\n    display: flex;\n  }\n  .phb-benefits .col-6 h2 mat-icon {\n    height: 20px;\n    left: 23px;\n  }\n  .phb-benefits .col-6 p {\n    color: white;\n    font-size: 16px;\n    line-height: 25.6px;\n    font-weight: 300;\n  }\n  .gallery-text-section {\n    padding: 48px 24px;\n  }\n  .gallery-text-section h1.col-title {\n    padding-top: 48px !important;\n    padding-bottom: 48px !important;\n  }\n  .wrap-videos {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n  }\n  .mobile-video {\n    width: 42%;\n    margin: 10px;\n  }\n  .left-video {\n    display: none;\n  }\n  .parent {\n    display: flex;\n    flex-direction: column;\n  }\n  .wrap-videos .mobile-video img {\n    height: 98px;\n    object-fit: cover;\n  }\n  .free-trial-img {\n    display: none;\n  }\n  .free-trial-text.col h1,\n  .free-trial-text p {\n    text-align: center;\n  }\n  .free-trial-text.col h1 {\n    font-weight: 700;\n    font-size: 32px;\n    line-height: 44.8px;\n  }\n  .free-trial-text.col h1.second-title-trial {\n    font-weight: 700;\n    font-size: 72px;\n    line-height: 86.4px;\n  }\n  .free-trial-text.col p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 25.6px;\n  }\n  .free-trial-section-hpb .free-trial-text .button.btn-long.btn-color-outline {\n    min-width: 100%;\n  }\n  .free-trial-section-hpb,\n  .became-provider {\n    padding: 48px 24px;\n  }\n  .d-flex.justify-content-end {\n    width: 100%;\n  }\n  button.btn-long.btn-white-fill,\n  button.btn-long.btn-color-outline {\n    width: 100%;\n  }\n  .became-provider .container div.row.d-flex h1,\n  .became-provider .container div.row.d-flex p {\n    margin-right: 0px;\n  }\n  .became-provider .became-provider-container h1.section-title {\n    font-size: 24px !important;\n    font-weight: 700;\n    line-height: 34px;\n    font-style: normal;\n    padding-top: 70.5px !important;\n  }\n  .became-provider .row.d-flex p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 25.6px;\n  }\n  .became-provider-container .became-provider-title h1,\n  .became-provider-container .became-provider-title p {\n    text-align: left;\n  }\n  .became-provider-container .d-flex {\n    justify-content: center;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .phb-benefits .row {\n    flex-direction: column;\n  }\n  .phb-benefits .col-6 {\n    width: 100%;\n  }\n  .phb-benefits {\n    padding: 48px 24px;\n  }\n  .phb-benefits p {\n    color: #FFCC29;\n    font-size: 16px;\n    font-weight: 300;\n    color: white;\n    max-width: 100%;\n  }\n  .col.col-title {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .gallery-text-section {\n    padding: 48px 24px;\n  }\n  .wrap-videos {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n  }\n  .mobile-video {\n    width: 22%;\n    margin: 10px;\n  }\n  .left-video {\n    display: none;\n  }\n  .parent {\n    display: flex;\n    flex-direction: column;\n  }\n  .wrap-videos .mobile-video img {\n    height: 98px;\n    object-fit: cover;\n  }\n  .free-trial-img {\n    display: none;\n  }\n  .free-trial-text.col h1,\n  .free-trial-text p {\n    text-align: center;\n  }\n  .free-trial-text.col h1 {\n    font-weight: 700;\n    font-size: 32px;\n    line-height: 44.8px;\n  }\n  .free-trial-text.col h1.second-title-trial {\n    font-weight: 700;\n    font-size: 72px;\n    line-height: 86.4px;\n  }\n  .free-trial-text.col p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 25.6px;\n  }\n  .free-trial-section-hpb,\n  .became-provider {\n    padding: 48px 24px;\n  }\n  .free-trial-button-container {\n    justify-content: center;\n  }\n  .became-provider .container div.row.d-flex h1,\n  .became-provider .container div.row.d-flex p {\n    margin-right: 0px;\n  }\n  .became-provider .row.d-flex h1.section-title {\n    margin-top: 30px !important;\n    margin-bottom: 30px !important;\n  }\n  .became-provider-container .d-flex {\n    justify-content: center;\n  }\n}\n@media screen and (min-width: 1023px) and (max-width: 1399px) {\n  img.d-block.w-100 {\n    height: 88px;\n    object-fit: cover;\n  }\n  .became-provider-container .d-flex {\n    justify-content: center;\n  }\n}\n@media screen and (min-width: 1200px) and (max-width: 1400px) {\n  img.d-block.w-100 {\n    height: 108px;\n    object-fit: cover;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .free-trial-text {\n    padding-right: 36px;\n  }\n  .free-trial-img {\n    padding-left: 36px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/public-homepage/components/homepage/homepage.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,qBAAA;EACA,YAAA;AAkBF;;AAfA;EACE,cDNgB;ACwBlB;;AAfA;EACE,YAAA;AAkBF;;AAfA;EACE,aAAA;AAkBF;;AAfA;EACE,yBDpBc;ECqBd,iBAAA;EACA,oBAAA;AAkBF;;AAfA;EACE,cDxBgB;ECyBhB,eAAA;EAEA,gBAAA;EACA,YAAA;EACA,gBAAA;AAiBF;;AAdA;EACE,cDjCgB;ECkChB,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,aAAA;AAiBF;;AAdA;EACE,iBAAA;EACA,oBAAA;AAiBF;;AAdA;EACE,YAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AAiBF;;AAdA;EACE,eAAA;AAiBF;;AAbA;EACE,cD5DgB;EC6DhB,sBAAA;EACA,eAAA;EACA,mBAAA;AAgBF;;AAVA;EACE,cDpEM;ECqEN,eAAA;EACA,gBAAA;EACA,mBAAA;AAaF;;AAVA;EACE,cD1EU;EC2EV,eAAA;EACA,gBAAA;EACA,mBAAA;AAaF;;AAVA;EACE,aAAA;EACA,kBAAA;EACA,WAAA;AAaF;;AAVA;;EAEE,kBAAA;AAaF;;AATA;EACE,kBAAA;EACA,SAAA;EAEA,8BAAA,EAAA,sBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EAEA,cAAA;EACA,gBAAA;EACA,gCAAA;EACA,UAAA;AAUF;;AAPA;EACE,YAAA;EAGA,eAAA;AAQF;;AAJA;EACE,eAAA;EACA,YAAA;EAEA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,oCAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAMF;;AAAA;EACE,cDlJc;ECmJd,eAAA;EACA,gBAAA;EACA,mBAAA;AAGF;;AAAA;EACE,gBAAA;EACA,eAAA;EACA,mBAAA;AAGF;;AAAA;EACE,gBAAA;EACA,eAAA;EACA,oBAAA;AAGF;;AAAA;EACE,gBAAA;EACA,eAAA;EACA,mBAAA;AAGF;;AAAA;EACE,cD3Kc;AC8KhB;;AAAA;;EAEE,iBAAA;EACA,qBAAA;EACA,cDlLc;ACqLhB;;AAAA;EACE,yBAAA;AAGF;;AACA;EACE,yBAAA;AAEF;;AACA;EACE,aAAA;EACA,iBAAA;AAEF;;AAEA;;EAEE,kBAAA;AACF;;AAGA;EACE,uBAAA;AAAF;;AAGA;EACE,YAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EAEA,iBAAA;AADF;;AAIA;EACE,qHAAA;AADF;;AAIA;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,8BAAA;AADF;;AAKA;EACE,uBAAA;EAAA,kBAAA;EACA,cAAA;AAFF;;AAMA;EACE,aAAA;EACA,8BAAA;EACA,kCAAA;EACA,qBAAA;EACA,kBAAA;AAHF;;AAMA;EACE,kBAAA;AAHF;;AAMA;EACE,kBAAA;AAHF;;AAMA;EACE,kBAAA;AAHF;;AAMA;EACE,kBAAA;AAHF;;AAMA;EACE,kBAAA;AAHF;;AAMA;EACE,WAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AAHF;;AAOA;EAEE,8BAAA;AALF;;AAUA;EACE,kBAAA;AAPF;;AAWA;EACE,aAAA;AARF;;AAWA;EACE,yBAAA;AARF;;AAYA;EAEE;IACE,sBAAA;EAVF;EAYA;IACE,WAAA;IACA,oBAAA;EAVF;EAYA;IACE,kBAAA;EAVF;EAcA;IACE,iBAAA;IACA,oBAAA;EAZF;EAeA;IACE,YAAA;IACA,eAAA;IACA,iBAAA;IACA,gBAAA;IACA,kBAAA;EAbF;EAgBA;IACE,cAAA;IACA,eAAA;IACA,iBAAA;IACA,gBAAA;IACA,aAAA;EAdF;EAiBA;IAGE,YAAA;IACA,UAAA;EAjBF;EAqBA;IACE,YAAA;IACA,eAAA;IACA,mBAAA;IACA,gBAAA;EAnBF;EAyBA;IACE,kBAAA;EAvBF;EA0BA;IACE,4BAAA;IACA,+BAAA;EAxBF;EAkCA;IACE,aAAA;IACA,eAAA;IACA,mBAAA;EAhCF;EAmCA;IACE,UAAA;IACA,YAAA;EAjCF;EAoCA;IACE,aAAA;EAlCF;EAqCA;IACE,aAAA;IACA,sBAAA;EAnCF;EAsCA;IACE,YAAA;IACA,iBAAA;EApCF;EAuCA;IACE,aAAA;EArCF;EAwCA;;IAEE,kBAAA;EAtCF;EAyCA;IACE,gBAAA;IACA,eAAA;IACA,mBAAA;EAvCF;EA0CA;IACE,gBAAA;IACA,eAAA;IACA,mBAAA;EAxCF;EA2CA;IACE,gBAAA;IACA,eAAA;IACA,mBAAA;EAzCF;EA6CA;IACE,eAAA;EA3CF;EA8CA;;IAEE,kBAAA;EA5CF;EAiDA;IACE,WAAA;EA/CF;EAmDA;;IAEE,WAAA;EAjDF;EAoDA;;IAEE,iBAAA;EAlDF;EAgEA;IACE,0BAAA;IACA,gBAAA;IACA,iBAAA;IACA,kBAAA;IACA,8BAAA;EA9DF;EAmEA;IACE,gBAAA;IACA,eAAA;IACA,mBAAA;EAjEF;EAoEA;;IAEE,gBAAA;EAlEF;EAqEA;IACE,uBAAA;EAnEF;AACF;AAuEA;EAEE;IACE,sBAAA;EAtEF;EAyEA;IACE,WAAA;EAvEF;EAyEA;IACE,kBAAA;EAvEF;EA0EA;IACE,cD3ec;IC4ed,eAAA;IAEA,gBAAA;IACA,YAAA;IACA,eAAA;EAzEF;EA4EA;IACE,iBAAA;IACA,oBAAA;EA1EF;EA8EA;IACE,kBAAA;EA5EF;EAgFA;IACE,aAAA;IACA,eAAA;IACA,mBAAA;EA9EF;EAiFA;IACE,UAAA;IACA,YAAA;EA/EF;EAkFA;IACE,aAAA;EAhFF;EAmFA;IACE,aAAA;IACA,sBAAA;EAjFF;EAoFA;IACE,YAAA;IACA,iBAAA;EAlFF;EAqFA;IACE,aAAA;EAnFF;EAsFA;;IAEE,kBAAA;EApFF;EAuFA;IACE,gBAAA;IACA,eAAA;IACA,mBAAA;EArFF;EAwFA;IACE,gBAAA;IACA,eAAA;IACA,mBAAA;EAtFF;EAyFA;IACE,gBAAA;IACA,eAAA;IACA,mBAAA;EAvFF;EA2FA;;IAEE,kBAAA;EAzFF;EA6FA;IACE,uBAAA;EA3FF;EA+FA;;IAEE,iBAAA;EA7FF;EAiGA;IACE,2BAAA;IACA,8BAAA;EA/FF;EAmGA;IACE,uBAAA;EAjGF;AACF;AAsGA;EAEE;IACE,YAAA;IACA,iBAAA;EArGF;EAwGA;IACE,uBAAA;EAtGF;AACF;AA0GA;EACE;IACE,aAAA;IACA,iBAAA;EAxGF;AACF;AA2GA;EACE;IACE,mBAAA;EAzGF;EA4GA;IACE,kBAAA;EA1GF;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"../../../../theme/styles/components/colors\";\n\n.section-title.public-homepage-section-title {\n  text-align: left;\n  text-transform: unset;\n  color: white;\n}\n\nh2, .mat-icon-xlg {\n  color: $secondary-color;\n}\n\np {\n  color: white;;\n}\n\n.section-title.public-homepage-section-title::after {\n  display: none;\n}\n\n.phb-benefits {\n  background-color: $primary-color;\n  padding-top: 96px;\n  padding-bottom: 96px;\n}\n\n.phb-benefits p {\n  color: $secondary-color;\n  font-size: 16px;\n  // height: 25.6px;\n  font-weight: 300;\n  color: white;\n  max-width: 400px;\n}\n\n.phb-benefits h2 {\n  color: $secondary-color;\n  font-size: 24px;\n  line-height: 38.4px;\n  font-weight: 700;\n  align-items: center;\n  display: flex;\n}\n\n.col-title {\n  padding-top: 48px;\n  padding-bottom: 48px;\n}\n\n.phb-benefits .col.col-title h1 {\n  color: white;\n  font-size: 32px;\n  line-height: 51px;\n  font-weight: 700;\n  font-style: normal;\n}\n\n.section {\n  margin-top: 0px;\n}\n\n//benefits icon\n.phb-benefits .public-homepage-section-title .benefits-section-class .mat-icon {\n  color: $secondary-color;\n  width: 20px !important;\n  height: 11.15px;\n  align-items: center;\n}\n\n//gallery section\n//text\n\n.gallery-text-section h1 {\n  color: $title;\n  font-size: 32px;\n  font-weight: 700;\n  line-height: 51.2px;\n}\n\n.gallery-text-section p {\n  color: $paragraph;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 38.4px;\n}\n\n.file-name {\n  display: flex;\n  position: absolute;\n  bottom: 8px;\n}\n\n.left-video,\n.mobile-video {\n  position: relative;\n  //width: 100%;\n}\n\n.file-name {\n  position: absolute;\n  bottom: 0;\n  //   background: rgb(0, 0, 0);\n  background: rgba(0, 0, 0, 0.5); /* Black see-through */\n  color: #f1f1f1;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  color: white;\n  font-size: 12px;\n  border-radius: 10px;\n  //   font-weight: 300;\n  padding: 0 4px;\n  text-align: left;\n  align-items: flex-end !important;\n  opacity: 1;\n}\n\n.file-name span {\n  color: white;\n  // bottom: 0!important;\n  // right: 0!important;\n  font-size: 12px;\n\n}\n\n.icon {\n  cursor: pointer;\n  color: white;\n  // font-size: 100px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n  opacity: 2;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n// free trial section\n\n.free-trial-section-hpb p {\n  color: $primary-color;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 38.4px;\n}\n\n.free-trial-text.col h1 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 51.2px;\n}\n\n.free-trial-text.col h1.second-title-trial {\n  font-weight: 700;\n  font-size: 72px;\n  line-height: 115.2px;\n}\n\n.free-trial-text.col p {\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 38.4px;\n}\n\n.free-trial-section-hpb h2, .free-trial-section-hpb p {\n  color: $primary-color;\n}\n\n.free-trial-section-hpb .section-title,\n.free-trial-section-hpb p {\n  text-align: right;\n  text-transform: unset;\n  color: $primary-color;\n}\n\n.free-trial-section-hpb .row {\n  justify-content: flex-end;\n}\n\n\n.free-trial-section-hpb {\n  background-color: #eff0f5\n}\n\nimg.d-block.w-100 {\n  height: 130px;\n  object-fit: cover;\n}\n\n//became provider\n.became-provider p,\n.became-provider h1 {\n  text-align: center;\n\n}\n\n.became-provider-container .d-flex {\n  justify-content: center;\n}\n\n.became-provider p {\n  color: white;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 25.6px;\n  max-width: 425px;\n\n  padding: 72px 0px;\n}\n\n.became-provider {\n  background-image: linear-gradient(rgba(36, 56, 138, 0.836), rgba(36, 56, 138, 0.836)), url('../../../../../assets/images/others/devino-provider-min.jpg');\n}\n\n.became-provider h1.section-title.py-2 {\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 67px;\n  font-style: normal;\n  padding-top: 70.5px !important;\n  //padding-bottom: 72px!important;\n}\n\n.became-provider button {\n  width: fit-content;\n  margin: 0 auto;\n}\n\n\n.parent {\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n  grid-template-rows: repeat(4, 1fr);\n  grid-column-gap: 32px;\n  grid-row-gap: 24px;\n}\n\n.div1 {\n  grid-area: 1 / 1 / 5 / 2;\n}\n\n.div2 {\n  grid-area: 1 / 2 / 2 / 3;\n}\n\n.div3 {\n  grid-area: 2 / 2 / 3 / 3;\n}\n\n.div4 {\n  grid-area: 3 / 2 / 4 / 3;\n}\n\n.div5 {\n  grid-area: 4 / 2 / 5 / 3;\n}\n\nvideo {\n  width: 100%;\n  height: 650px;\n  max-height: 650px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n\nvm-player {\n  // --vm-control-scale: 1.75;\n  --vm-player-border-radius: 8px;\n\n  // --vm-player-height:700px;\n}\n\n.video-img-container.parent img.d-block {\n  border-radius: 8px;\n\n}\n\n.wrap-videos {\n  display: none;\n}\n\n.free-trial-button-container {\n  justify-content: flex-end;\n}\n\n//-----------------------mobile------------------------------ -->\n@media screen and (max-width: 768px) {\n  //benefits\n  .phb-benefits .row {\n    flex-direction: column;\n  }\n  .phb-benefits .col-6 {\n    width: 100%;\n    padding-bottom: 24px;\n  }\n  .phb-benefits {\n    padding: 48px 24px;\n  }\n\n  //benefits title\n  .col.col-title {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n\n  .col.col-title h1 {\n    color: white;\n    font-size: 24px;\n    line-height: 51px;\n    font-weight: 700;\n    font-style: normal;\n  }\n\n  .phb-benefits .col-6 h2 {\n    color: #FFCC29;\n    font-size: 20px;\n    line-height: 28px;\n    font-weight: 700;\n    display: flex;\n  }\n\n  .phb-benefits .col-6 h2 mat-icon {\n    // color: #FFCC29;\n    // width: 12px;\n    height: 20px;\n    left: 23px;\n    // transform: rotate(90deg);\n  }\n\n  .phb-benefits .col-6 p {\n    color: white;\n    font-size: 16px;\n    line-height: 25.6px;\n    font-weight: 300;\n\n  }\n\n\n  //gallery\n  .gallery-text-section {\n    padding: 48px 24px;\n  }\n\n  .gallery-text-section h1.col-title {\n    padding-top: 48px !important;\n    padding-bottom: 48px !important;\n  }\n\n  // .gallery-text-section h1.section-title.py-2.col-title{\n  //     color: $title;\n  //     font-size: 32px!important;\n  //     line-height: 51px;\n  //     font-weight: 700;\n  // }\n\n  .wrap-videos {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n  }\n\n  .mobile-video {\n    width: 42%;\n    margin: 10px;\n  }\n\n  .left-video {\n    display: none;\n  }\n\n  .parent {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .wrap-videos .mobile-video img {\n    height: 98px;\n    object-fit: cover;\n  }\n\n  .free-trial-img {\n    display: none;\n  }\n\n  .free-trial-text.col h1,\n  .free-trial-text p {\n    text-align: center;\n  }\n\n  .free-trial-text.col h1 {\n    font-weight: 700;\n    font-size: 32px;\n    line-height: 44.8px;\n  }\n\n  .free-trial-text.col h1.second-title-trial {\n    font-weight: 700;\n    font-size: 72px;\n    line-height: 86.4px;\n  }\n\n  .free-trial-text.col p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 25.6px;\n  }\n\n  //????????????????????\n  .free-trial-section-hpb .free-trial-text .button.btn-long.btn-color-outline {\n    min-width: 100%;\n  }\n\n  .free-trial-section-hpb,\n  .became-provider {\n    padding: 48px 24px;\n  }\n\n\n  // .row.d-flex.justify-content-center,\n  .d-flex.justify-content-end {\n    width: 100%;\n  }\n\n\n  button.btn-long.btn-white-fill,\n  button.btn-long.btn-color-outline {\n    width: 100%;\n  }\n\n  .became-provider .container div.row.d-flex h1,\n  .became-provider .container div.row.d-flex p {\n    margin-right: 0px;\n\n  }\n\n  .became-provider-container {\n    //padding: 0 40px;\n\n  }\n\n  // .became-provider .row.d-flex.justify-content-center h1.section-title{\n  //     margin-top: 30px!important;\n  //     margin-bottom: 30px!important;\n  //  }\n\n  .became-provider .became-provider-container h1.section-title {\n    font-size: 24px !important;\n    font-weight: 700;\n    line-height: 34px;\n    font-style: normal;\n    padding-top: 70.5px !important;\n\n    //padding-bottom: 72px!important;\n  }\n\n  .became-provider .row.d-flex p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 25.6px;\n  }\n\n  .became-provider-container .became-provider-title h1,\n  .became-provider-container .became-provider-title p {\n    text-align: left;\n  }\n\n  .became-provider-container .d-flex {\n    justify-content: center;\n  }\n}\n\n//-------------------------tablets----------------------------------------------------\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  //benefits\n  .phb-benefits .row {\n    flex-direction: column;\n\n  }\n  .phb-benefits .col-6 {\n    width: 100%;\n  }\n  .phb-benefits {\n    padding: 48px 24px;\n  }\n\n  .phb-benefits p {\n    color: $secondary-color;\n    font-size: 16px;\n    // height: 25.6px;\n    font-weight: 300;\n    color: white;\n    max-width: 100%;\n  }\n\n  .col.col-title {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n\n  //gallery\n  .gallery-text-section {\n    padding: 48px 24px;\n  }\n\n\n  .wrap-videos {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n  }\n\n  .mobile-video {\n    width: 22%;\n    margin: 10px;\n  }\n\n  .left-video {\n    display: none;\n  }\n\n  .parent {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .wrap-videos .mobile-video img {\n    height: 98px;\n    object-fit: cover;\n  }\n\n  .free-trial-img {\n    display: none;\n  }\n\n  .free-trial-text.col h1,\n  .free-trial-text p {\n    text-align: center;\n  }\n\n  .free-trial-text.col h1 {\n    font-weight: 700;\n    font-size: 32px;\n    line-height: 44.8px;\n  }\n\n  .free-trial-text.col h1.second-title-trial {\n    font-weight: 700;\n    font-size: 72px;\n    line-height: 86.4px;\n  }\n\n  .free-trial-text.col p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 25.6px;\n  }\n\n\n  .free-trial-section-hpb,\n  .became-provider {\n    padding: 48px 24px;\n  }\n\n\n  .free-trial-button-container {\n    justify-content: center;\n  }\n\n\n  .became-provider .container div.row.d-flex h1,\n  .became-provider .container div.row.d-flex p {\n    margin-right: 0px;\n\n  }\n\n  .became-provider .row.d-flex h1.section-title {\n    margin-top: 30px !important;\n    margin-bottom: 30px !important;\n\n  }\n\n  .became-provider-container .d-flex {\n    justify-content: center;\n  }\n\n}\n\n//-------------------------------------------------------------------------------------\n@media screen and (min-width: 1023px) and (max-width: 1399px) {\n\n  img.d-block.w-100 {\n    height: 88px;\n    object-fit: cover;\n  }\n\n  .became-provider-container .d-flex {\n    justify-content: center;\n  }\n\n}\n\n@media screen and (min-width: 1200px) and (max-width: 1400px) {\n  img.d-block.w-100 {\n    height: 108px;\n    object-fit: cover;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .free-trial-text {\n    padding-right: 36px;\n  }\n\n  .free-trial-img {\n    padding-left: 36px;\n  }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 81289:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/public-footer/public-footer.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\na {\n  text-decoration: none;\n  color: #231F20;\n}\n\np {\n  color: #231F20;\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 0.875rem;\n  margin-bottom: 0.375rem;\n}\n\nh1 {\n  color: #231F20;\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 2rem;\n  margin-bottom: 0.75rem;\n}\n\nh5 {\n  color: #231F20;\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n}\n\nstrong {\n  font-weight: 700;\n}\n\n.contact {\n  margin-bottom: 2.375rem;\n}\n.contact div:first-child {\n  text-align: center;\n}\n.contact .social-media-icons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n.contact .social-media-icons i {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  margin-right: 1.625rem;\n}\n.contact .social-media-icons i:nth-child(5) {\n  margin-right: 0;\n}\n\n.menu-links div {\n  margin-bottom: 1.5rem;\n}\n.menu-links div p:last-child {\n  margin-bottom: 0;\n}\n\n.footer {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  background: var(--header-footer-background);\n}\n\n.dropdown-toggle::after {\n  display: none;\n}\n\n.dropdown-menu.show {\n  background: var(--header-footer-background);\n  color: #231F20;\n}\n\n.w-fit-content {\n  width: -moz-fit-content;\n  width: fit-content;\n  flex-basis: 100%;\n}\n\n.btn-white-fill {\n  color: rgba(35, 31, 32, 0.48);\n  border: 1px solid rgba(35, 31, 32, 0.48);\n  background: rgba(35, 31, 32, 0);\n}\n.btn-white-fill i {\n  color: rgba(35, 31, 32, 0.48);\n}\n\n@media only screen and (min-width: 576px) {\n  .w-fit-content {\n    flex-basis: 50%;\n  }\n  .contact {\n    margin-bottom: 2.375rem;\n  }\n  .contact div:first-child {\n    text-align: start;\n  }\n  .contact .social-media-icons i {\n    margin-top: 0rem;\n    margin-bottom: 0rem;\n    margin-right: 1.625rem;\n  }\n  .contact .social-media-icons i:nth-child(5) {\n    margin-right: 2.5rem;\n  }\n  .contact .social-media-icons img:nth-child(6) {\n    margin-right: 0.75rem;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .w-fit-content {\n    flex-basis: unset;\n  }\n}\n/* Set top-lef and bottom-left corner radius */\n:host ::ng-deep .mat-form-field-outline-start {\n  border-radius: 30px 0 0 30px !important;\n  min-width: 30px !important;\n}\n\n/* Set top-right and bottom-right corner radius */\n:host ::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 30px 30px 0 !important;\n}\n\n.ue-container {\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 768px) {\n  .ue-container {\n    flex-wrap: wrap;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/public-homepage/components/public-footer/public-footer.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,qBAAA;EACA,cDCM;ACiBR;;AAfA;EACE,cDFU;ECGV,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;AAkBF;;AAfA;EACE,cDXU;ECYV,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,sBAAA;AAkBF;;AAfA;EACE,cDpBU;ECqBV,iCAAA;EACA,kBAAA;EACA,eAAA;EACA,sBAAA;AAkBF;;AAfA;EACE,gBAAA;AAkBF;;AAfA;EACE,uBAAA;AAkBF;AAfE;EACE,kBAAA;AAiBJ;AAdE;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;AAgBJ;AAdI;EACE,gBAAA;EACA,mBAAA;EACA,sBAAA;AAgBN;AAdI;EACE,eAAA;AAgBN;;AAVE;EACE,qBAAA;AAaJ;AAVE;EACE,gBAAA;AAYJ;;AARA;EACE,iBAAA;EACA,oBAAA;EACA,2CAAA;AAWF;;AARA;EACE,aAAA;AAWF;;AARA;EACE,2CAAA;EACA,cD9EU;ACyFZ;;AARA;EACE,uBAAA;EAAA,kBAAA;EACA,gBAAA;AAWF;;AARA;EACE,6BAAA;EACA,wCAAA;EACA,+BAAA;AAWF;AATE;EACE,6BAAA;AAWJ;;AANA;EACE;IACE,eAAA;EASF;EANA;IACE,uBAAA;EAQF;EANE;IACE,iBAAA;EAQJ;EAJI;IACE,gBAAA;IACA,mBAAA;IACA,sBAAA;EAMN;EAJI;IACE,oBAAA;EAMN;EAJI;IACE,qBAAA;EAMN;AACF;AADA;EACE;IACE,iBAAA;EAGF;AACF;AACA,8CAAA;AACA;EACE,uCAAA;EACA,0BAAA;AACF;;AAEA,iDAAA;AACA;EACE,uCAAA;AACF;;AAEA;EACE,gBAAA;EACA,cAAA;AACF;;AAEA;EACE;IACE,eAAA;EACF;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import 'src/app/theme/styles/components/_colors.scss';\n\na{\n  text-decoration: none;\n  color: $title;\n}\n\np {\n  color: $paragraph;\n  font-family: 'Roboto', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 0.875rem;\n  margin-bottom: 0.375rem;\n}\n\nh1 {\n  color: $paragraph;\n  font-family: 'Roboto', sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 2rem;\n  margin-bottom: 0.75rem;\n}\n\nh5 {\n  color: $paragraph;\n  font-family: 'Roboto', sans-serif;\n  font-style: normal;\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n}\n\nstrong {\n  font-weight: 700;\n}\n\n.contact {\n  margin-bottom: 2.375rem;\n\n\n  div:first-child {\n    text-align: center;\n  }\n\n  .social-media-icons {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n\n    i {\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n      margin-right: 1.625rem;\n    }\n    i:nth-child(5) {\n      margin-right: 0;\n    }\n  }\n}\n\n.menu-links {\n  div {\n    margin-bottom: 1.5rem;\n  }\n\n  div p:last-child {\n    margin-bottom: 0;\n  }\n}\n\n.footer {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  background: var(--header-footer-background);\n}\n\n.dropdown-toggle::after {\n  display: none;\n}\n\n.dropdown-menu.show {\n  background: var(--header-footer-background);\n  color: $paragraph;\n}\n\n.w-fit-content {\n  width: fit-content;\n  flex-basis: 100%;\n}\n\n.btn-white-fill {\n  color: rgba($paragraph, 0.48);\n  border: 1px solid rgba($paragraph, 0.48);\n  background: rgba($paragraph, 0%);\n\n  i {\n    color: rgba($paragraph, 0.48);\n  }\n}\n\n// media queries\n@media only screen and (min-width: 576px) {\n  .w-fit-content {\n    flex-basis: 50%;\n  }\n\n  .contact {\n    margin-bottom: 2.375rem;\n\n    div:first-child {\n      text-align: start;\n    }\n\n    .social-media-icons {\n      i {\n        margin-top: 0rem;\n        margin-bottom: 0rem;\n        margin-right: 1.625rem;\n      }\n      i:nth-child(5) {\n        margin-right: 2.5rem;\n      }\n      img:nth-child(6){\n        margin-right: 0.75rem;\n      }\n    }\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .w-fit-content {\n    flex-basis: unset;\n  }\n}\n\n\n/* Set top-lef and bottom-left corner radius */\n:host ::ng-deep .mat-form-field-outline-start {\n  border-radius: 30px 0 0 30px !important;\n  min-width: 30px !important;\n}\n\n/* Set top-right and bottom-right corner radius */\n:host ::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 30px 30px 0 !important;\n}\n\n.ue-container{\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 768px) {\n  .ue-container {\n    flex-wrap: wrap;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 59205:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/public-header/public-header.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card {\n  height: 100%;\n}\n.card div {\n  background-color: white;\n}\n\n.logo img.not-mobile {\n  width: 200px;\n  height: auto;\n}\n\n#main-toolbar {\n  position: absolute;\n}\n\n@media only screen and (max-width: 768px) {\n  #main-toolbar {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/features/public-homepage/components/public-header/public-header.component.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;AACF;AAAE;EACE,uBAAA;AAEJ;;AAEA;EACE,YAAA;EACA,YAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE;IACE,aAAA;EACF;AACF","sourcesContent":[".card {\n  height: 100%;\n  & div {\n    background-color: white;\n  }\n}\n\n.logo img.not-mobile{\n  width: 200px;\n  height:auto;\n}\n\n#main-toolbar {\n  position: absolute;\n}\n\n@media only screen and (max-width: 768px) {\n  #main-toolbar {\n    display: none;\n  }\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 42032:
/*!************************************************************************************!*\
  !*** ./src/app/features/public-homepage/public-homepage.component.scss?ngResource ***!
  \************************************************************************************/
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

/***/ 41998:
/*!***************************************************************************************!*\
  !*** ./src/app/features/auth/forgotten-pass/forgotten-pass.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container h-100 position-relative\">\n    <button class=\"btn-close-modal btn-round btn-white-fill\" type=\"button\" mat-dialog-close=\"true\">\n        <i class=\"fas fa-times\"></i>\n    </button>\n\n    <div class=\"row h-100\">\n        <div class=\"col-md-6 forgotten\">\n            <div class=\"p-3\">\n                <div class=\"logo\">\n                    <img src=\"../../../../assets/images/login/Logo.png\" height=\"50px\" alt=\"Logo\">\n                </div>\n                <div class=\"title\">\n                    <p class=\"title-text m-0\">{{'TITLES.FORGOT-PASS' | translate}}</p>\n                    <p class=\"subtitle-text m-0\">{{'TITLES.FORGOT-PASS-DIRECTIONS' | translate}}</p>\n                </div>\n                <div class=\"forgotten-body\">\n                    <form [formGroup]=\"formPass\">\n\n                        <mat-form-field appearance=\"legacy\" class=\" mb-14\">\n                            <mat-label>Email</mat-label>\n                            <input matInput placeholder=\"Email\" formControlName=\"userEmail\" required tabindex=\"1\" id=\"emailInput\">\n\n                            <mat-error *ngIf=\"formPass.controls.userEmail.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"formPass.get('userEmail').hasError('email')\">{{'ERROR.EMAIL'|translate}}\n                            </mat-error>\n\n                        </mat-form-field>\n\n                        <mat-form-field *ngIf=\"emailSent\" appearance=\"legacy\" class=\"p-0 mb-14\">\n                            <mat-label>{{'FIELD.RESET-CODE' | translate }}</mat-label>\n                            <input matInput placeholder=\"{{'FIELD.RESET-CODE' | translate }}\" formControlName=\"userResetCode\" required tabindex=\"2\" id=\"resetCodeInput\">\n\n\n                        </mat-form-field>\n\n                        <mat-form-field *ngIf=\"emailSent\" appearance=\"legacy\" class=\"p-0 mb-14\">\n                            <mat-label>{{'FIELD.NEW-PASSWORD' | translate}}</mat-label>\n                            <input matInput placeholder=\"{{'FIELD.NEW-PASSWORD' | translate}}\" formControlName=\"userPassword\"  [type]=\"hide ? 'password' : 'text'\" required tabindex=\"3\" id=\"newPwdInput\">\n\n                            <mat-error *ngIf=\"formPass.controls.userPassword.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"formPass.get('userPassword').hasError('requiredPass')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"formPass.get('userPassword').hasError('passMin')\">{{'ERROR.PASS-MIN-LENGTH'|translate}}</mat-error>\n                            <mat-error *ngIf=\"formPass.get('userPassword').hasError('passMax')\">{{'ERROR.PASS-MAX-LENGTH'|translate}}</mat-error>\n                            <mat-error *ngIf=\"formPass.get('userPassword').hasError('emptyFirst')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"formPass.get('userPassword').hasError('specialCharacter')\">{{'ERROR.PASS-SPECIAL-CHAR'|translate}}</mat-error>\n                            <mat-error *ngIf=\"formPass.get('userPassword').hasError('number')\">{{'ERROR.PASS-DIGIT'|translate}}</mat-error>\n                            <mat-error *ngIf=\"formPass.get('userPassword').hasError('upper')\">{{'ERROR.PASS-UPPERCASE'|translate}}</mat-error>\n                            <mat-error *ngIf=\"formPass.get('userPassword').hasError('lower')\">{{'ERROR.PASS-LOWERCASE'|translate}}</mat-error>\n                            <mat-error *ngIf=\"formPass.get('userPassword').hasError('whiteSpace')\">{{'ERROR.PASS-WHITESPACE'|translate}}</mat-error>\n\n\n                            <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\n                                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                            </button>\n                        </mat-form-field>\n\n                        <div class=\"container-buttons d-inline-flex justify-content-between\">\n                            <button class=\"btn-long btn-color-outline\" mat-button [mat-dialog-close]=\"true\" type=\"button\"><i\n                                    class=\"fas fa-arrow-left mr-2\"\n                            ></i>{{'BTN.CANCEL' | translate}}\n                            </button>\n                            <button *ngIf=\"!emailSent\" class=\"btn-long btn-color-fill ml-2\" type=\"button\" (click)=\"onSendCodeClick()\">{{'BTN.SUBMIT' | translate}}<i\n                                    class=\"fas fa-arrow-right\" tabindex=\"4\" id=\"sendCodeBtn\"></i></button>\n                            <button *ngIf=\"emailSent\" class=\"btn-long btn-color-fill ml-2\" type=\"button\" (click)=\"onResetPassword()\">{{'BTN.SUBMIT' | translate}}<i\n                                    class=\"fas fa-arrow-right\" tabindex=\"4\" id=\"submitResetPwdBtn\"></i></button>\n\n\n                        </div>\n\n                    </form>\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"image col-md-6\">\n<!--            <img  src=\"./../../assets/images/login/client_image.png\" alt=\"\" class=\"img-fluid\"/>-->\n            <!--            <div class=\"close\">-->\n            <!--                <button class=\"btn-round btn-white-fill\"><i class=\"fas fa-times\"></i></button>-->\n            <!--            </div>-->\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 74783:
/*!*********************************************************************!*\
  !*** ./src/app/features/auth/login/login.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container h-100 position-relative\">\n    <button class=\"btn-close-modal btn-round btn-white-fill\" type=\"button\" mat-dialog-close=\"true\">\n        <i class=\"fas fa-times\"></i>\n    </button>\n\n    <div class=\"row h-100\">\n        <div class=\"col-md-6 login\">\n            <div class=\"p-3\">\n                <div class=\"logo\">\n                    <img src=\"../../../../assets/images/login/Logo.png\" height=\"50px\" alt=\"Logo\">\n                </div>\n                <div class=\"login-body\">\n                    <form [formGroup]=\"loginForm\">\n                        <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                            <mat-label>Email</mat-label>\n                            <input matInput placeholder=\"Email\" formControlName=\"email\" id=\"emailInput\">\n                            <mat-error\n                                    *ngIf=\"loginForm.controls.email.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"loginForm.controls.email.hasError('email')\">{{'ERROR.EMAIL'|translate}}\n                            </mat-error>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                            <mat-label>{{'FIELD.PASSWORD'| translate}}</mat-label>\n                            <input matInput placeholder=\"{{'FIELD.PASSWORD'| translate}}\" formControlName=\"password\"\n                                   id=\"passwordInput\"\n                                   [type]=\"hide ? 'password' : 'text'\">\n                            <mat-error\n                                    *ngIf=\"loginForm.controls.password.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\n                                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                            </button>\n                        </mat-form-field>\n                        <mat-form-field *ngIf=\"twoFA ===true\" appearance=\"legacy\" class=\"p-0 mb-14\">\n                            <mat-label>Code</mat-label>\n                            <input matInput placeholder=\"Code\" formControlName=\"twoFA\" id=\"twoFAInput\">\n                        </mat-form-field>\n                        <div class=\"d-flex justify-content-end flex-row w-100 py-3\">\n                            <!--                            <mat-checkbox>{{'FIELD.REMEMBER-ME' | translate}}</mat-checkbox>-->\n                            <a (click)=\"openForgotPwd()\" id=\"toForgotPwdBtn\"\n                               role=\"button\">{{'FIELD.FORGOT-PASS' | translate}}</a>\n                        </div>\n                        <div class=\"text-center\" *ngIf=\"twoFA !==true\">\n                            <button (click)=\"onLoginClick()\" id=\"submitLoginBtn\" class=\"btn-long btn-color-fill\"\n                                    type=\"submit\" [disabled]=\"isLoginLoading\">{{'BTN.LOGIN' | translate}}<i\n                                    class=\"fas fa-arrow-right\"></i></button>\n                        </div>\n                        <div class=\"text-center\" *ngIf=\"twoFA ===true\">\n                            <button id=\"submitLoginBtn\" class=\"btn-long btn-color-fill\" (click)=\"twoFALogin()\"\n                                    [disabled]=\"!loginForm.get('twoFA').value || isLoginLoading\">{{'BTN.LOGIN' | translate}}<i\n                                    class=\"fas fa-arrow-right\"></i></button>\n                        </div>\n\n                    </form>\n\n                    <div class=\"row d-flex justify-content-between container-hr my-2 mx-0\">\n                        <hr class=\"col-md-5 col-sm-5 col-5\">\n                        <p class=\"ws-nowrap p-2 m-0 col-md-2 col-sm-2 col-2\">{{'GENERAL.OR' | translate}}</p>\n                        <hr class=\"col-md-5 col-sm-5 col-5\">\n                    </div>\n\n                    <div class=\"container-btn d-flex flex-column\">\n                        <button class=\"btn-long btn-white-fill d-flex justify-content-between\" type=\"button\"\n                                (click)=\"loginWithFacebook()\" [disabled]=\"isFacebookLoading\">\n                            <ng-container *ngIf=\"isFacebookLoading===false\">\n                                <i class=\"fab fa-facebook\"></i>{{'BTN.FACEBOOK-LOGIN' | translate}}<i></i>\n                            </ng-container>\n                            <ng-container *ngIf=\"isFacebookLoading === true\">\n                                <i class=\"fab fa-facebook\"></i>{{'GENERAL.LOAD_AUTHENTICATION'| translate}}\n                                <span\n                                        class=\"spinner-border spinner-border-sm align-middle ms-2\"></span>\n                            </ng-container>\n                        </button>\n                        <!--                        <button class=\"btn-long btn-white-fill d-flex justify-content-between\" type=\"button\"><i class=\"fab fa-google\"></i>{{'BTN.GOOGLE-LOGIN' | translate}}<i></i></button>-->\n                    </div>\n\n                    <div class=\"register d-flex flex-row justify-content-between\">\n                        <p>{{'GENERAL.ACCOUNT' | translate}}</p>\n                        <a class=\"ml-2\" (click)=\"openRegister()\" role=\"button\">{{'GENERAL.SIGNUP' | translate}}</a>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n        <div class=\"image col-md-6\">\n            <!--            <img class=\"img-fluid\" src=\"../../../assets/images/login/Image.png\" alt=\"\"/>-->\n            <!--            <div class=\"close\">-->\n            <!--                <button class=\"btn-round btn-white-fill\"><i class=\"fas fa-times\"></i></button>-->\n            <!--            </div>-->\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 11196:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/auth/provider-register/provider-register.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container h-100 position-relative\">\n    <button class=\"btn-close-modal btn-round btn-white-fill\" type=\"button\" [mat-dialog-close]=\"true\">\n        <i class=\"fas fa-times\"></i>\n    </button>\n\n    <div class=\"row d-flex justify-content-between h-100\">\n        <div class=\"col-md-6 register\">\n            <div class=\"p-3\">\n                <div class=\"logo\">\n                    <img src=\"../../../../assets/images/login/Logo.png\" height=\"50px\" alt=\"Logo\">\n                </div>\n                <div class=\"title\">\n                    <p class=\"title-text m-0\">{{ 'TITLES.REGISTER-PROVIDER' | translate }}</p>\n                    <p class=\"subtitle-text m-0\">{{'TITLES.REGISTER-DIRECTIONS' | translate}}</p>\n                </div>\n                <div class=\"register-body\">\n                    <form [formGroup]=\"registerForm\">\n\n                        <div>\n                            <h5>{{ 'TITLES.ACCOUNT-INFO' | translate }}</h5>\n                            <!--First name-->\n                            <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                                <mat-label>{{'USER.LASTNAME' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'USER.LASTNAME' | translate}}\" formControlName=\"lastName\" tabindex=\"1\">\n                                <mat-error *ngIf=\"registerForm.controls.lastName.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.controls.lastName.hasError('whitespace')\">Campul nu poate conține doar spații goale.</mat-error>\n\n                            </mat-form-field>\n                            <!--Last name-->\n                            <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                                <mat-label>{{'USER.FIRSTNAME' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'USER.FIRSTNAME' | translate}}\" formControlName=\"firstName\" tabindex=\"2\">\n                                <mat-error *ngIf=\"registerForm.controls.firstName.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.controls.lastName.hasError('whitespace')\">Campul nu poate conține doar spații goale.</mat-error>\n\n                            </mat-form-field>\n\n\n                            <!--Email-->\n                            <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                                <mat-label>Email</mat-label>\n                                <input matInput placeholder=\"Email\" formControlName=\"email\" required tabindex=\"3\">\n\n                                <mat-error *ngIf=\"registerForm.controls.email.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">{{'ERROR.EMAIL'|translate}}\n                                </mat-error>\n                            </mat-form-field>\n\n                            <!--Password-->\n                            <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                                <mat-label>{{'FIELD.PASSWORD' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'FIELD.PASSWORD' | translate}}\" formControlName=\"password\"\n                                       [type]=\"hide ? 'password' : 'text'\" required tabindex=\"4\">\n\n                                <mat-error *ngIf=\"registerForm.controls.password.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('requiredPass')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('passMin')\">{{'ERROR.PASS-MIN-LENGTH'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('passMax')\">{{'ERROR.PASS-MAX-LENGTH'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('emptyFirst')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('specialCharacter')\">{{'ERROR.PASS-SPECIAL-CHAR'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('number')\">{{'ERROR.PASS-DIGIT'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('upper')\">{{'ERROR.PASS-UPPERCASE'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('lower')\">{{'ERROR.PASS-LOWERCASE'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('whiteSpace')\">{{'ERROR.PASS-WHITESPACE'|translate}}</mat-error>\n\n                                <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\n                                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                            </mat-form-field>\n\n                            <!--Password-->\n                            <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                                <mat-label>{{'FIELD.CONFIRM-PASSWORD' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'FIELD.CONFIRM-PASSWORD' | translate}}\" formControlName=\"confPassword\"\n                                       [type]=\"hideCurrent ? 'password' : 'text'\" required tabindex=\"5\">\n\n                                <button mat-icon-button matSuffix (click)=\"hideCurrent = !hideCurrent\" type=\"button\"\n                                        class=\"text-muted\">\n                                    <mat-icon>{{hideCurrent ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n\n                                <mat-error *ngIf=\"registerForm.get('confPassword').hasError('requiredConf')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('confPassword').hasError('passInvalid')\">{{'ERROR.SAME-PASS-REQ'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.get('confPassword').hasError('emptySecond')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n\n                            </mat-form-field>\n                        </div>\n\n\n                        <div class=\"mt-4\">\n                            <h5>{{'TITLES.COMPANY-DETAILS'|translate}}</h5>\n\n                            <!--Company name-->\n                            <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                                <mat-label>{{'USER.COMPANY-NAME' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'USER.COMPANY-NAME' | translate}}\" formControlName=\"companyName\" tabindex=\"6\">\n                                <mat-error *ngIf=\"registerForm.controls.companyName.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            </mat-form-field>\n\n\n                            <!--Telephone-->\n                            <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                                <mat-label>{{'USER.TELEPHONE' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'USER.TELEPHONE' | translate}}\" formControlName=\"telephone\" tabindex=\"7\">\n                                <mat-error *ngIf=\"registerForm.controls.telephone.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                <mat-error *ngIf=\"registerForm.controls.telephone.errors?.telephoneFormat\">Numar de telefon invalid</mat-error>\n                            </mat-form-field>\n\n                            <!--Fax-->\n                            <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                                <mat-label>{{'USER.FAX' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'USER.FAX' | translate}}\" formControlName=\"fax\" tabindex=\"8\">\n                            </mat-form-field>\n\n                            <!--CUI-->\n                            <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                                <mat-label>{{'USER.CUI' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'USER.CUI' | translate}}\" formControlName=\"cui\" tabindex=\"9\">\n                                <mat-error *ngIf=\"registerForm.controls.cui.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            </mat-form-field>\n\n                            <!-- J -->\n                            <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                                <mat-label>{{'USER.J' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'USER.J' | translate}}\" formControlName=\"j\" tabindex=\"10\">\n                                <mat-error *ngIf=\"registerForm.controls.j.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            </mat-form-field>\n\n\n\n                            <div formGroupName=\"billingAddress\">\n                                <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                                    <mat-label>{{('USER.OFFICE-ADDRESS' | translate)}}</mat-label>\n                                    <input matInput formControlName=\"address\" tabindex=\"12\">\n                                    <mat-error *ngIf=\"registerForm.get('billingAddress.address').hasError('required')\">\n                                        {{\"ERROR.REQUIRED\" | translate}}\n                                    </mat-error>\n                                </mat-form-field>\n\n                                <!--City and County-->\n                                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                                    <mat-label>{{'USER.COUNTRY' | translate}}</mat-label>\n                                    <mat-select formControlName=\"country\" (selectionChange)=\"getCities($event)\">\n                                        <mat-option *ngFor=\"let country of countries\" [value]=\"country\">\n                                            {{country}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n\n                                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                                    <mat-label>{{'USER.CITY' | translate}}</mat-label>\n                                    <mat-select formControlName=\"city\">\n                                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.name\">\n                                            {{city.name}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n\n                            </div>\n\n                            <mat-checkbox formControlName=\"termsAndCond\" class=\"mt-3\">Am citit și sunt de acord cu <a href=\"/content/terms-and-conditions\" target=\"_blank\">Termenii și Condițiile</a> și cu\n                                <a href=\"/content/privacy-policy\" target=\"_blank\">Politica de Confidențialitate.</a></mat-checkbox>\n                        </div>\n\n\n\n                    <div class=\"d-flex reg-buttons\n                                align-items-center\n                                justify-content-center justify-content-sm-between\n                                flex-wrap gap-4\">\n                        <button class=\"col btn-long btn-white-fill ml-2\" mat-button [mat-dialog-close]=\"true\" type=\"button\" ><i\n                                class=\"fas fa-arrow-left\"></i> {{'BTN.CANCEL' | translate}}\n                        </button>\n                        <button class=\"col btn-long btn-color-fill ml-2\" type=\"button\" (click)=\"onSendClick()\" [disabled]=\"!registerForm.controls.termsAndCond.value\">{{'BTN.SUBMIT' | translate}} <i\n                            class=\"fas fa-arrow-right\" tabindex=\"16\"></i></button>\n                    </div>\n\n                    </form>\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"image col-md-6\">\n<!--            <img *ngIf=\"isClient\" src=\"./../../assets/images/login/client_image.png \">-->\n<!--            <img *ngIf=\"!isClient\" src=\"../../../../assets/images/login/provider_image.png\">-->\n            <!--            <div class=\"close\">-->\n            <!--                <button class=\"btn-round btn-white-fill\"><i class=\"fas fa-times\"></i></button>-->\n            <!--            </div>-->\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 78831:
/*!***************************************************************************!*\
  !*** ./src/app/features/auth/register/register.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container h-100 position-relative\">\n    <button class=\"btn-close-modal btn-round btn-white-fill\" type=\"button\" [mat-dialog-close]=\"true\">\n        <i class=\"fas fa-times\"></i>\n    </button>\n\n    <div class=\"row d-flex justify-content-between h-100\">\n        <div class=\"col-md-6 register\">\n            <div class=\"p-3\">\n                <div class=\"logo\">\n                    <img src=\"../../../../assets/images/login/Logo.png\" height=\"50px\" alt=\"Logo\">\n                </div>\n                <div class=\"title\">\n                    <p class=\"title-text m-0\">{{'TITLES.REGISTER-CLI' | translate}}</p>\n                    <p class=\"subtitle-text m-0\">{{'TITLES.REGISTER-DIRECTIONS' | translate}}</p>\n                </div>\n                <div class=\"register-body\">\n                    <form [formGroup]=\"registerForm\">\n\n                        <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                            <mat-label>{{'USER.LASTNAME' | translate}}</mat-label>\n                            <input matInput required placeholder=\"{{'USER.LASTNAME' | translate}}\" formControlName=\"lastName\" tabindex=\"1\">\n                            <mat-error *ngIf=\"registerForm.controls.lastName.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.controls.lastName.hasError('whitespace')\">Campul nu poate conține doar spații goale.</mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                            <mat-label>{{'USER.FIRSTNAME' | translate}}</mat-label>\n                            <input matInput required placeholder=\"{{'USER.FIRSTNAME' | translate}}\" formControlName=\"firstName\" tabindex=\"2\">\n                            <mat-error *ngIf=\"registerForm.controls.firstName.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.controls.firstName.hasError('whitespace')\">Campul nu poate conține doar spații goale.</mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                            <mat-label>Email</mat-label>\n                            <input matInput placeholder=\"Email\" formControlName=\"email\" required tabindex=\"3\">\n\n                            <mat-error *ngIf=\"registerForm.controls.email.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">{{'ERROR.EMAIL'|translate}}\n                            </mat-error>\n\n                        </mat-form-field>\n\n\n                        <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                            <mat-label>{{'FIELD.PASSWORD' | translate}}</mat-label>\n                            <input matInput placeholder=\"{{'FIELD.PASSWORD' | translate}}\" formControlName=\"password\"\n                                   [type]=\"hide ? 'password' : 'text'\" required tabindex=\"4\">\n\n                            <mat-error *ngIf=\"registerForm.controls.password.errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('password').hasError('requiredPass')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('password').hasError('passMin')\">{{'ERROR.PASS-MIN-LENGTH'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('password').hasError('passMax')\">{{'ERROR.PASS-MAX-LENGTH'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('password').hasError('emptyFirst')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('password').hasError('specialCharacter')\">{{'ERROR.PASS-SPECIAL-CHAR'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('password').hasError('number')\">{{'ERROR.PASS-DIGIT'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('password').hasError('upper')\">{{'ERROR.PASS-UPPERCASE'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('password').hasError('lower')\">{{'ERROR.PASS-LOWERCASE'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('password').hasError('whiteSpace')\">{{'ERROR.PASS-WHITESPACE'|translate}}</mat-error>\n\n                            <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\n                                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                            </button>\n\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"legacy\" class=\"p-0 mb-14\">\n                            <mat-label>{{'FIELD.CONFIRM-PASSWORD' | translate}}</mat-label>\n                            <input matInput placeholder=\"{{'FIELD.CONFIRM-PASSWORD' | translate}}\" formControlName=\"confPassword\"\n                                   [type]=\"hideCurrent ? 'password' : 'text'\" required tabindex=\"5\">\n\n                            <button mat-icon-button matSuffix (click)=\"hideCurrent = !hideCurrent\" type=\"button\"\n                                    class=\"text-muted\">\n                                <mat-icon>{{hideCurrent ? 'visibility_off' : 'visibility'}}</mat-icon>\n                            </button>\n\n                            <mat-error *ngIf=\"registerForm.get('confPassword').hasError('requiredConf')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('confPassword').hasError('passInvalid')\">{{'ERROR.SAME-PASS-REQ'|translate}}</mat-error>\n                            <mat-error *ngIf=\"registerForm.get('confPassword').hasError('emptySecond')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n\n                        </mat-form-field>\n\n                        <mat-checkbox required formControlName=\"termsAndCond\" class=\"mt-3\">Am citit și sunt de acord cu <a href=\"/content/terms-and-conditions\" target=\"_blank\">Termenii și Condițiile</a> și cu\n                            <a href=\"/content/privacy-policy\" target=\"_blank\">Politica de Confidențialitate.</a></mat-checkbox>\n\n                        <div class=\"row container-buttons d-inline-flex justify-content-between\">\n                        <button class=\"col btn-long btn-white-fill ml-2\" mat-button [mat-dialog-close]=\"true\" type=\"button\" ><i\n                                class=\"fas fa-arrow-left\"></i> {{'BTN.CANCEL' | translate}}\n                        </button>\n                        <button class=\"col btn-long btn-color-fill ml-2\" type=\"button\" mat-dialog-close (click)=\"onSendClick()\" [disabled]=\"!registerForm.valid\">{{'BTN.SUBMIT' | translate}} <i\n                            class=\"fas fa-arrow-right\" tabindex=\"6\"></i></button>\n                    </div>\n\n                    </form>\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"image col-md-6\">\n<!--            <img *ngIf=\"isClient\" src=\"./../../assets/images/login/client_image.png \">-->\n<!--            <img *ngIf=\"!isClient\" src=\"../../../../assets/images/login/provider_image.png\">-->\n            <!--            <div class=\"close\">-->\n            <!--                <button class=\"btn-round btn-white-fill\"><i class=\"fas fa-times\"></i></button>-->\n            <!--            </div>-->\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 8412:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/public-homepage/activate-users/activate-users.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <div class=\"content-404 text-center\">\n        <div class=\"img-wrapper\">\n            <img src=\"assets/waiting.png\" alt=\"\" class=\"img-fluid\"/>\n        </div>\n        <h1>Verificare</h1>\n        <p *ngIf=\"!inactiveCode\">Datele se încarcă...</p>\n        <p *ngIf=\"inactiveCode\">Apasă pe butonul de mai jos pentru a solicita un nou link de activare.</p>\n        <button class=\"btn-long btn-color-fill\" type=\"button\" *ngIf=\"inactiveCode\" (click)=\"resendLink()\">Retrimite Link</button>\n    </div>\n</div>\n";

/***/ }),

/***/ 69488:
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/hero-section/hero-section.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"header-image-wrapper\" [class.fullscreen]=\"fullscreen\">\n    <div class=\"header-container\">\n        <div class=\"bg\" [style.background-image]=\"bgImage\"></div>\n        <div class=\"mask\"></div>\n\n        <div class=\"header-image-content d-flex align-items-end\">\n            <div class=\"container\">\n                <div class=\"headerTitleDescContent\" >\n                    <div class=\"row mt-4\">\n                        <h1 *ngIf=\"title\" class=\"title\">{{title}}</h1>\n                    </div>\n                    <div class=\"row mt-4 width-public-hp\">\n                        <p *ngIf=\"desc\" class=\"desc\">{{desc}}</p>\n                    </div>\n                    <div class=\"row mt-4 header-button\">\n                        <div class=\"col-2\">\n                            <button class=\"btn-long btn-white-fill\" *ngIf=\"!userConnected\" (click)=\"openAuthModal()\">{{buttonText}} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                            <button class=\"btn-long btn-white-fill\" *ngIf=\"userConnected\" [routerLink]=\"redirectUrl\">{{buttonText}} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 39366:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/homepage/homepage.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<main [class.content-offset-to-top]=\"true\">\n\n    <app-public-header [redirectUrl]=\"redirectUrl\" [userConnected]=\"userConnected\"></app-public-header>\n\n\n    <app-hero-section *ngIf=\"hero?.backgroundImage.filePath\"\n                      [backgroundImage]=hero?.backgroundImage.filePath\n                      [title]=hero?.title\n                      [desc]=hero?.contentText\n                      [fullscreen]=\"true\"\n                      [buttonText]=hero?.buttonText\n                      [redirectUrl]=\"redirectUrl\"\n                      [userConnected]=\"userConnected\">\n    </app-hero-section>\n\n\n    <!--Benefits section-->\n\n    <div class=\"container-fluid phb-benefits py-10\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col col-title\">\n                    <h1 class=\"section-title public-homepage-section-title\">{{ 'HOMEPAGE.BENEFITS' | translate }}</h1>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <h2>\n                        <mat-icon>play_arrow</mat-icon>\n                        {{benefits[0]?.title}}</h2>\n                    <p class=\"mt-2\">{{benefits[0]?.content}}</p>\n                </div>\n                <div class=\"col-6\">\n                    <h2>\n                        <mat-icon>play_arrow</mat-icon>\n                        {{benefits[2]?.title}}</h2>\n                    <p class=\"mt-2\">{{benefits[2]?.content}}</p>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <h2>\n                        <mat-icon>play_arrow</mat-icon>\n                        {{benefits[1]?.title}}</h2>\n                    <p class=\"mt-2\">{{benefits[1]?.content}}</p>\n                </div>\n                <div class=\"col-6\">\n                    <h2>\n                        <mat-icon>play_arrow</mat-icon>\n                        {{benefits[3]?.title}}</h2>\n                    <p class=\"mt-2\">{{benefits[3]?.content}}</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <!--Gallery text-->\n\n    <div class=\"container-fluid gallery-text-section py-10\">\n        <div class=\"container pb-5\">\n            <div class=\"row\">\n                <h1 class=\"section-title col-title mb-0\">{{ 'HOMEPAGE.GALLERY' | translate }}</h1>\n                <p class=\"py-2\">{{gallery?.textContent}}</p>\n            </div>\n        </div>\n\n        <!-----------gallery text end------------------->\n\n        <!--Gallery video-->\n\n        <div *ngIf=\"gotVideo && afterViewInitialized\" class=\"container-fluid gallery-video-section\">\n            <div class=\"container\">\n                <div class=\"parent video-img-container\">\n                    <div class=\"div1\" *ngIf=\"gallery?.videos[0].filePath === playedVideo\">\n                        <!-- <div class=\"col-10 w-100 big-video\" *ngIf=\"gotVideo && playedVideo\"> -->\n                        <div class=\"col-10 w-100 big-video\">\n<!--                            <vm-player>-->\n<!--                                <vm-video poster={{gallery?.videos[0].featuredImagePath}}>-->\n<!--                                    <source data-src={{gallery?.videos[0].filePath}} type=\"video/mp4\"/>-->\n<!--                                    <track-->\n<!--                                            default-->\n<!--                                    />-->\n<!--                                </vm-video>-->\n<!--                                <vm-default-ui no-click-to-play>-->\n<!--                                </vm-default-ui>-->\n<!--                            </vm-player>-->\n                            <video [src]=\"gallery?.videos[0].filePath\"\n                                   [poster]=\"gallery?.videos[0].featuredImagePath\" autoplay muted loop playsinline controls></video>\n                        </div>\n                    </div>\n\n                    <div class=\"div1\" *ngIf=\"gallery?.videos[1].filePath === playedVideo\">\n                        <!-- <div class=\"col-10 w-100 big-video\" *ngIf=\"gotVideo && playedVideo\"> -->\n                        <div class=\"col-10 w-100 big-video\">\n                            <video [poster]=\"gallery?.videos[1].featuredImagePath\"\n                                   [src]=\"gallery?.videos[1].filePath\" autoplay muted loop playsinline controls>\n                            </video>\n<!--                            <vm-player>-->\n<!--                                <vm-video poster={{gallery?.videos[1].featuredImagePath}}>-->\n<!--                                    <source data-src={{gallery?.videos[1].filePath}} type=\"video/mp4\"/>-->\n<!--                                    <track-->\n<!--                                            default-->\n<!--                                    />-->\n<!--                                </vm-video>-->\n<!--                                <vm-default-ui no-click-to-play>-->\n<!--                                </vm-default-ui>-->\n<!--                            </vm-player>-->\n                        </div>\n                    </div>\n\n                    <div class=\"div1\" *ngIf=\"gallery?.videos[2].filePath === playedVideo\">\n                        <!-- <div class=\"col-10 w-100 big-video\" *ngIf=\"gotVideo && playedVideo\"> -->\n                        <div class=\"col-10 w-100 big-video\">\n<!--                            <vm-player>-->\n<!--                                <vm-video poster={{gallery?.videos[2].featuredImagePath}}>-->\n<!--                                    <source data-src={{gallery?.videos[2].filePath}} type=\"video/mp4\"/>-->\n<!--                                    <track-->\n<!--                                            default-->\n<!--                                    />-->\n<!--                                </vm-video>-->\n<!--                                <vm-default-ui no-click-to-play>-->\n<!--                                </vm-default-ui>-->\n<!--                            </vm-player>-->\n                            <video [poster]=\"gallery?.videos[2].featuredImagePath\"\n                                   [src]=\"gallery?.videos[2].filePath\" autoplay muted loop playsinline controls>\n                            </video>\n                        </div>\n                    </div>\n\n                    <div class=\"div1\" *ngIf=\"gallery?.videos[3].filePath === playedVideo\">\n                        <!-- <div class=\"col-10 w-100 big-video\" *ngIf=\"gotVideo && playedVideo\"> -->\n                        <div class=\"col-10 w-100 big-video\">\n<!--                            <vm-player>-->\n<!--                                <vm-video poster={{gallery?.videos[3].featuredImagePath}}>-->\n<!--                                    <source data-src={{gallery?.videos[3].filePath}} type=\"video/mp4\"/>-->\n<!--                                    <track-->\n<!--                                            default-->\n<!--                                    />-->\n<!--                                </vm-video>-->\n<!--                                <vm-default-ui no-click-to-play>-->\n<!--                                </vm-default-ui>-->\n<!--                            </vm-player>-->\n                            <video [poster]=\"gallery?.videos[3].featuredImagePath\"\n                                   [src]=\"gallery?.videos[3].filePath\" autoplay muted loop playsinline controls>\n                            </video>\n                        </div>\n                    </div>\n\n                    <div class=\"div2 left-video\">\n                        <img class=\"d-block w-100\" src={{gallery?.videos[1].featuredImagePath}} alt=\"First slide\">\n\n                        <div class=\"file-name\"><span>{{gallery?.videos[1].fileName}}</span></div>\n                        <div class=\"icon\" (click)=\"playVideo(gallery?.videos[1].filePath)\"><i class=\"fa fa-play\"\n                                                                                              aria-hidden=\"true\"></i>\n                        </div>\n                    </div>\n                    <div class=\"div3 left-video\">\n                        <img class=\"d-block w-100\" src={{gallery?.videos[2].featuredImagePath}} alt=\"First slide\">\n\n                        <div class=\"file-name\"><span>{{gallery?.videos[2].fileName}}</span></div>\n                        <div class=\"icon\" (click)=\"playVideo(gallery?.videos[2].filePath)\"><i class=\"fa fa-play\"\n                                                                                              aria-hidden=\"true\"></i>\n                        </div>\n                    </div>\n                    <div class=\"div4 left-video\">\n                        <img class=\"d-block w-100\" src={{gallery?.videos[0].featuredImagePath}} alt=\"First slide\">\n\n                        <div class=\"file-name\"><span>{{gallery?.videos[0].fileName}}</span></div>\n                        <div class=\"icon\" (click)=\"playVideo(gallery?.videos[0].filePath)\"><i class=\"fa fa-play\"\n                                                                                              aria-hidden=\"true\"></i>\n                        </div>\n                    </div>\n                    <div class=\"div5 left-video\">\n                        <img class=\"d-block w-100\" src={{gallery?.videos[3].featuredImagePath}} alt=\"First slide\">\n                        <div class=\"file-name\"><span>{{gallery?.videos[3].fileName}}</span></div>\n                        <div class=\"icon\" (click)=\"playVideo(gallery?.videos[3].filePath)\"><i class=\"fa fa-play\"\n                                                                                              aria-hidden=\"true\"></i>\n                        </div>\n                    </div>\n                    <!--------mobile---------------->\n\n                    <div class=\"wrap-videos\">\n                        <div class=\"mobile-video\">\n                            <img class=\"d-block w-100\" src={{gallery?.videos[1].featuredImagePath}} alt=\"First slide\">\n\n                            <div class=\"file-name\"><span>{{gallery?.videos[1].fileName}}</span></div>\n                            <div class=\"icon\" (click)=\"playVideo(gallery?.videos[1].filePath)\"><i class=\"fa fa-play\"\n                                                                                                  aria-hidden=\"true\"></i>\n                            </div>\n                        </div>\n                        <div class=\"mobile-video\">\n                            <img class=\"d-block w-100\" src={{gallery?.videos[2].featuredImagePath}} alt=\"First slide\">\n                            <div class=\"file-name\"><span>{{gallery?.videos[2].fileName}}</span></div>\n                            <div class=\"icon\" (click)=\"playVideo(gallery?.videos[2].filePath)\"><i class=\"fa fa-play\"\n                                                                                                  aria-hidden=\"true\"></i>\n                            </div>\n                        </div>\n                        <div class=\"mobile-video\">\n                            <img class=\"d-block w-100\" src=\"{{gallery?.videos[0].featuredImagePath}}\" alt=\"First slide\">\n                            <div class=\"file-name\"><span>{{gallery?.videos[0].fileName}}</span></div>\n                            <div class=\"icon\" (click)=\"playVideo(gallery?.videos[0].filePath)\"><i class=\"fa fa-play\"\n                                                                                                  aria-hidden=\"true\"></i>\n                            </div>\n\n                        </div>\n                        <div class=\"mobile-video\">\n                            <img class=\"d-block w-100\" src={{gallery?.videos[3].featuredImagePath}} alt=\"First slide\">\n                            <div class=\"file-name\"><span>{{gallery?.videos[3].fileName}}</span></div>\n                            <div class=\"icon\" (click)=\"playVideo(gallery?.videos[3].filePath)\"><i class=\"fa fa-play\"\n                                                                                                  aria-hidden=\"true\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n\n    <!--Free trial-->\n\n    <div class=\"container-fluid free-trial-section-hpb py-10\">\n        <div class=\"container\">\n            <div class=\"row align-items-center\">\n                <div class=\"col md-6 free-trial-text\">\n                    <h1 class=\"section-title py-2\">{{trialSection?.mainTitle}}</h1>\n                    <h1 class=\"section-title second-title-trial py-2\">{{trialSection?.subTitle}}</h1>\n                    <p class=\"py-2\">{{trialSection?.content}}</p>\n                    <div class=\"d-flex free-trial-button-container py-2\">\n                        <button class=\"btn-long btn-color-outline\" (click)=\"openAuthModal()\">\n                            {{ trialSection?.buttonText }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"col md-6 free-trial-img\" *ngIf=\"trialSection?.image?.filePath\">\n                    <img [lazyLoad]=\"trialSection?.image?.filePath\" alt=\"freeTrial\"\n                         class=\"mw-100 d-block\" width=\"612\" height=\"480\">\n\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n\n\n    <!--Become provider-->\n\n    <div class=\"container-fluid became-provider py-10\">\n        <div class=\"container\">\n            <div class=\"became-provider-container\">\n                <div class=\"row became-provider-title justify-content-center\">\n                    <h1 class=\"section-title mb-0 px-0\"><span style=\"color:white\">{{c2a[0]}}</span> <span\n                            style=\"color:#FFCC04\"> {{c2a[1]}}</span></h1>\n                    <p class=\"mb-0\">{{callToAction?.content}}</p>\n                </div>\n                <div class=\"row\">\n                    <button (click)=\"openProviderRegister()\" class=\"btn-long btn-white-fill w-fit-content\" >\n                        <!-- <span>{{ 'REGISTER' | translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></span> -->\n                        {{ callToAction?.buttonText }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</main>\n";

/***/ }),

/***/ 23595:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/public-footer/public-footer.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"footer\">\n  <div class=\"container\">\n    <div\n      class=\"contact d-flex justify-content-center justify-content-sm-between align-items-center flex-wrap\"\n    >\n      <div>\n        <h1 class=\"\">\n          {{ \"FOOTER.QUESTIONS\" | translate }}\n        </h1>\n\n        <p class=\"m-0\">\n          {{ \"FOOTER.CONTACT_US\" | translate }}\n          <strong><a href=\"tel:+40 722 670 826\">+40 722 670 826</a></strong>\n        </p>\n      </div>\n\n      <div class=\"social-media-icons\">\n        <a\n          href=\"https://www.facebook.com/profile.php/?id=100076116217462\"\n          target=\"_blank\"\n        >\n          <i class=\"fab fa-facebook\"></i\n        ></a>\n        <a\n          href=\"https://instagram.com/bestinform.app?igshid=MzRlODBiNWFlZA==\"\n          target=\"_blank\"\n          ><i class=\"fab fa-instagram\"></i\n        ></a>\n        <a href=\"https://www.tiktok.com/@bestinform\" target=\"_blank\"\n          ><i class=\"fab fa-tiktok\"></i\n        ></a>\n        <!--                <i class=\"fab fa-youtube\"></i>-->\n        <!--                <i class=\"fab fa-twitter\"></i>-->\n        <img\n          src=\"assets/images/logos/google play.png\"\n          alt=\"google play\"\n          width=\"139\"\n          height=\"40\"\n        />\n        <img\n          src=\"assets/images/logos/app store.png\"\n          alt=\"app store\"\n          width=\"138\"\n          height=\"40\"\n        />\n      </div>\n    </div>\n\n    <div class=\"row justify-content-between menu-links\">\n      <div\n        class=\"w-fit-content d-flex flex-column align-items-center align-items-sm-start\"\n      >\n        <h5>\n          <strong>{{ \"FOOTER.ABOUT_BESTINFORM\" | translate }}</strong>\n        </h5>\n        <a\n          href=\"/content/privacy-policy\"\n          target=\"_blank\"\n          >{{ \"FOOTER.PRIVACY\" | translate }}</a\n        >\n        <a\n          href=\"/content/terms-and-conditions\"\n          target=\"_blank\"\n          >{{ \"FOOTER.TERMS\" | translate }}</a\n        >\n      </div>\n\n      <div\n        class=\"w-fit-content d-flex flex-column align-items-center align-items-sm-start\"\n      >\n        <h5>\n          <strong>{{ \"FOOTER.PROVIDERS\" | translate }}</strong>\n        </h5>\n        <a href=\"/newsletter/ro\" target=\"_blank\">{{\n          \"FOOTER.BECOME_PARTNER\" | translate\n        }}</a>\n        <a href=\"/provideroffer/ro\" target=\"_blank\">{{\n          \"FOOTER.BENEFITS\" | translate\n        }}</a>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div\n        class=\"col-12 d-flex flex-column align-items-center align-items-sm-start\"\n      >\n        <mat-form-field appearance=\"outline\">\n          <mat-select\n            [(ngModel)]=\"selectedValue\"\n            (selectionChange)=\"changeLang(selectedValue)\"\n          >\n            <mat-option [value]=\"'ro'\"\n              ><i class=\"fas fa-globe-europe\"></i> Română</mat-option\n            >\n            <mat-option [value]=\"'en'\"\n              ><i class=\"fas fa-globe-europe\"></i> Engleză</mat-option\n            >\n          </mat-select>\n        </mat-form-field>\n\n        <h5 class=\"mb-3\"><strong>Bestinform</strong> Romania</h5>\n\n        <div\n          class=\"d-flex justify-content-center align-items-center w-100 ue-container\"\n        >\n          <img\n            src=\"assets/images/logos/fonduri-ue.png\"\n            width=\"323\"\n            height=\"73\"\n          />\n          <p class=\"mb-0\">\n            {{ \"FOOTER.EU_INFO\" | translate }}\n            <a href=\"https://www.fonduri-ue.ro/\" target=\"_blank\"\n              >www.fonduri-ue.ro\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 97275:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/public-homepage/components/public-header/public-header.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<header class=\"has-bg-image\">\n<mat-toolbar id=\"main-toolbar\" class=\"mat-elevation-z2 bkg-toolbar\">\n    <div class=\"theme-container d-flex justify-content-between\">\n        <a class=\"logo d-flex align-items-center\" routerLink=\"/\" >\n            <div class=\"logo\">\n                <img src=\"\\assets\\Betsinform_logo.png\" width=\"212\" height=\"37\" class=\"not-mobile\" alt=\"\">\n                <img src=\"\\assets\\images\\logos\\logo_bestinform_lightmode.jpg\" class=\"mobile_logo\" alt=\"\">\n            </div>\n        </a>\n        <div class=\"d-flex\">\n            <!-- <button (click)=\"openNgbModal(openLayersMap)\" class=\"btn-round btn-white-fill me-3\">\n                <i class=\"far fa-map\"></i>\n            </button> -->\n            <button id=\"openAuthModalBtn\" class=\"btn-long btn-white-fill toolbar-button\" (click)=\"openAuthModal()\" *ngIf=\"!userConnected\">{{ 'LOGIN' | translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n            <button id=\"openConnectModalBtn\" class=\"btn-long btn-white-fill toolbar-button\" [routerLink]=\"redirectUrl\" *ngIf=\"userConnected\">{{ 'LOGIN' | translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n            <a class=\"mobile-toolbar-button\" (click)=\"openAuthModal()\" *ngIf=\"!userConnected\"><img src=\"./assets/images/others/sign-in-alt.jpg\"></a>\n            <a class=\"mobile-toolbar-button\" [routerLink]=\"redirectUrl\" *ngIf=\"userConnected\"><img src=\"./assets/images/others/sign-in-alt.jpg\"></a>\n        </div>\n    </div>\n</mat-toolbar>\n\n<ng-template #openLayersMap let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"card\">\n        <div class=\"card-header border-0 d-flex justify-content-end\">\n            <button (click)=\"d()\" class=\"btn-round btn-color-fill\">\n                <i class=\"fas fa-times\"></i>\n            </button>\n        </div>\n\n        <div class=\"card-body d-flex flex-grow-1\">\n            <div id=\"ol-map\" class=\"map-container flex-grow-1\"></div>\n        </div>\n\n        <div class=\"card-footer border-0\">\n\n        </div>\n    </div>\n</ng-template>\n</header>\n";

/***/ }),

/***/ 66859:
/*!************************************************************************************!*\
  !*** ./src/app/features/public-homepage/public-homepage.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--<app-public-header [redirectUrl]=\"redirectUrl\" [userConnected]=\"userConnected\"></app-public-header>-->\n<!--<app-hero-section ></app-hero-section>-->\n<app-homepage [redirectUrl]=\"redirectUrl\" [userConnected]=\"userConnected\"></app-homepage>\n<app-public-footer></app-public-footer>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_public-homepage_public-homepage_module_ts.js.map