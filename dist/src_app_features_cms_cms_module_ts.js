(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_cms_cms_module_ts"],{

/***/ 92706:
/*!*******************************************************************************!*\
  !*** ./src/app/features/cms/add-edit-homepage/add-edit-homepage.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditHomepageComponent": () => (/* binding */ AddEditHomepageComponent)
/* harmony export */ });
/* harmony import */ var _Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_homepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-homepage.component.html?ngResource */ 3686);
/* harmony import */ var _add_edit_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-homepage.component.scss?ngResource */ 49997);
/* harmony import */ var _add_edit_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_add_edit_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_homepage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/homepage.service */ 69327);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/modalmedia.service */ 34864);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);












let AddEditHomepageComponent = class AddEditHomepageComponent {
  constructor(fb, homepageService, route, toastService, cdr, modalMediaService, modalService) {
    this.fb = fb;
    this.homepageService = homepageService;
    this.route = route;
    this.toastService = toastService;
    this.cdr = cdr;
    this.modalMediaService = modalMediaService;
    this.modalService = modalService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.submitBtnClicked = false;
    this.imageFiles = [];
  }
  ngOnInit() {
    this.initFormGroup();
    this.getHomepageData();
    this.getImagesFromMedia();
  }
  initFormGroup() {
    this.homepageForm = this.fb.group({
      id: [''],
      language: ['ro'],
      app: ['web'],
      hero: this.fb.group({
        title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        contentText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        backgroundImage: [{
          fileName: '',
          filePath: ''
        }],
        buttonText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
      }),
      benefits: this.fb.array([]),
      trialSection: this.fb.group({
        mainTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        subTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        buttonText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        image: [{
          fileName: '',
          filePath: ''
        }]
      }),
      gallery: this.fb.group({
        textContent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        videos: this.fb.array([])
      }),
      callToAction: this.fb.group({
        title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        buttonText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
      })
    });
  }
  get benefits() {
    return this.homepageForm.get('benefits');
  }
  get videos() {
    return this.homepageForm.get('gallery.videos');
  }
  get trialSectionC() {
    return this.homepageForm.get('trialSection');
  }
  customResetForm() {
    const langToKeep = this.homepageForm.value.language;
    const appToKeep = this.homepageForm.value.app;
    this.homepageForm.reset();
    this.benefits.clear();
    this.videos.clear();
    this.homepageForm.controls.language.setValue(langToKeep);
    this.homepageForm.controls.app.setValue(appToKeep);
  }
  getHomepageData() {
    this.customResetForm();
    this.homepageService.getHomepageByLanguageAndApp(this.homepageForm.value.language, this.homepageForm.value.app).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe(homepage => {
      this.isEditMode = true;
      this.homepageData = homepage;
      this.homepageForm.patchValue(this.homepageData);
      console.log('la get', homepage);
      // console.log('la get',this.homepageForm.get('gallery').value);
      if (this.homepageData.benefits) {
        this.homepageData.benefits.forEach(benefit => {
          this.benefits.push(this.fb.group({
            title: [benefit.title, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            content: [benefit.content, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
          }));
        });
      }
      if (this.homepageData.gallery?.videos) {
        this.homepageData.gallery.videos.forEach(video => {
          this.videos.push(this.fb.group({
            fileName: [video.fileName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            filePath: [video.filePath, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            featuredImagePath: [video.featuredImagePath]
          }));
        });
      }
    });
  }
  submitHomepage() {
    this.homepageForm.markAllAsTouched();
    this.submitBtnClicked = true;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    if (this.homepageForm.valid) {
      this.homepageService.updateHomepage(this.homepageData.id, this.homepageForm.value).subscribe(res => {
        if (res.success) {
          if (this.imageFiles.length > 0) {
            const imageRequests$ = [];
            this.imageFiles.forEach(imageFile => {
              const formData = new FormData();
              formData.append("file", imageFile.imageFile);
              imageRequests$.push(this.homepageService.uploadHomepageImage(this.homepageData.id, imageFile.imageType, formData));
            });
            // forkJoin(...imageRequests$).subscribe(() => {
            //     this.toastService.showToast('Succes', 'Homepage modificat cu succes', 'success');
            // }, () => {
            //     this.toastService.showToast('Eroare', 'Homepage modificat, eroare la incarcarea imaginilor', 'error');
            // });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)(...imageRequests$).subscribe({
              next: () => {
                this.toastService.showToast('Succes', 'Homepage modificat cu succes', 'success');
              },
              error: err => {
                this.toastService.showToast('Eroare', 'Homepage modificat, eroare la incarcarea imaginilor', 'error');
              }
            });
          } else {
            this.toastService.showToast('Succes', 'Homepage modificat cu succes', 'success');
          }
        } else {
          this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
        }
      }, () => {
        this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
      });
    } else {
      this.toastService.showToast('Eroare', 'Completati campurile obligatorii', 'error');
    }
  }
  clearFormControl(formControl) {
    this.homepageForm.get(formControl).patchValue('');
  }
  // onImageChange(event, formControl, imageType) {
  //     if (event.target.files && event.target.files[0]) {
  //
  //         const reader = new FileReader();
  //         reader.onload = () => this.homepageForm.get(formControl).patchValue({
  //             fileName: '',
  //             filePath: reader.result
  //         });
  //         reader.readAsDataURL(event.target.files[0]);
  //
  //         this.imageFiles.push({
  //             imageType: imageType,
  //             imageFile: event.target.files[0]
  //         });
  //     }
  // }
  openMedia(content) {
    this.modalService.open(content, {
      centered: true,
      size: 'xl'
    });
  }
  removeImage(formControl, imageType) {
    this.homepageForm.get(formControl).patchValue({
      fileName: '',
      filePath: ''
    });
    // parcurgem arrayul si stergem fisierul daca exista
    if (this.imageFiles.length > 0) {
      this.imageFiles.forEach((file, index) => {
        if (file.imageType === imageType) {
          this.imageFiles.splice(index, 1);
        }
      });
    }
    // daca suntem pe edit, stergem si din homepageData imaginea
    if (this.isEditMode) {
      if (imageType === 'background') {
        this.homepageData.hero.backgroundImage = null;
      } else if (imageType === 'trial') {
        this.homepageData.trialSection.image = null;
      }
    }
  }
  getImagesFromMedia() {
    var _this = this;
    this.modalMediaService.currentImagesArray.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (array) {
        if (array.length > 0) {
          if (array[0].for === 'hero') {
            _this.homepageForm.get('hero.backgroundImage').patchValue(array[0].selectedMedia);
          } else if (array[0].for === 'trial') {
            _this.homepageForm.get('trialSection.image').patchValue(array[0].selectedMedia);
          } else if (array[0].for.startsWith('featuredImage')) {
            const indexToChange = array[0].for.split('-')[1];
            _this.videos.at(indexToChange).patchValue({
              featuredImagePath: array[0].selectedMedia.filePath
            });
            _this.cdr.detectChanges();
          } else if (array[0].for.startsWith('video')) {
            const indexToChange = array[0].for.split('-')[1];
            _this.videos.at(indexToChange).patchValue({
              filePath: array[0].selectedMedia.filePath
            });
            _this.cdr.detectChanges();
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: _shared_services_homepage_service__WEBPACK_IMPORTED_MODULE_3__.HomepageService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
  }, {
    type: _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_5__.ModalMediaService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal
  }];
};
AddEditHomepageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-add-edit-old-homepage',
  template: _add_edit_homepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_5__.ModalMediaService],
  styles: [(_add_edit_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AddEditHomepageComponent);


/***/ }),

/***/ 89106:
/*!********************************************!*\
  !*** ./src/app/features/cms/cms.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsModule": () => (/* binding */ CmsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _add_edit_homepage_add_edit_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-homepage/add-edit-homepage.component */ 92706);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 20820);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var src_app_standalone_components_media_library_media_library_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/standalone-components/media-library/media-library.component */ 31861);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _edit_secondary_page_edit_secondary_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-secondary-page/edit-secondary-page.component */ 66656);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @kolkov/angular-editor */ 89971);





















const routes = [{
  path: 'home',
  component: _add_edit_homepage_add_edit_homepage_component__WEBPACK_IMPORTED_MODULE_0__.AddEditHomepageComponent
}, {
  path: 'edit/:page',
  component: _edit_secondary_page_edit_secondary_page_component__WEBPACK_IMPORTED_MODULE_4__.EditSecondaryPageComponent
},
// {
//   path: 'home/:id',
//   component: AddEditHomepageComponent
// },
{
  path: 'media-library',
  component: src_app_standalone_components_media_library_media_library_component__WEBPACK_IMPORTED_MODULE_1__.MediaLibraryComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}];
let CmsModule = class CmsModule {};
CmsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_add_edit_homepage_add_edit_homepage_component__WEBPACK_IMPORTED_MODULE_0__.AddEditHomepageComponent, _edit_secondary_page_edit_secondary_page_component__WEBPACK_IMPORTED_MODULE_4__.EditSecondaryPageComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_14__.MatLegacyInputModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_15__.MatLegacyButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_17__.NgxMatDatetimePickerModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatLegacyCheckboxModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_19__.MatLegacySelectModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_2__.DashboardHeaderComponent, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_20__.AngularEditorModule]
})], CmsModule);


/***/ }),

/***/ 66656:
/*!***********************************************************************************!*\
  !*** ./src/app/features/cms/edit-secondary-page/edit-secondary-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSecondaryPageComponent": () => (/* binding */ EditSecondaryPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_secondary_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-secondary-page.component.html?ngResource */ 87037);
/* harmony import */ var _edit_secondary_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-secondary-page.component.scss?ngResource */ 74982);
/* harmony import */ var _edit_secondary_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_edit_secondary_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages.service */ 72617);









let EditSecondaryPageComponent = class EditSecondaryPageComponent {
  constructor(fb, route, pagesService) {
    this.fb = fb;
    this.route = route;
    this.pagesService = pagesService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.editorConfig = {
      editable: true,
      height: '300',
      minHeight: '200px',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      enableToolbar: true,
      showToolbar: true,
      defaultParagraphSeparator: 'p',
      defaultFontName: 'Roboto',
      defaultFontSize: '',
      fonts: [{
        class: 'arial',
        name: 'Arial'
      }, {
        class: 'times-new-roman',
        name: 'Times New Roman'
      }],
      customClasses: [{
        name: 'Title',
        class: 'format-title'
      }, {
        name: 'Paragraph',
        class: 'format-paragraph'
      }],
      sanitize: true,
      toolbarPosition: 'top',
      toolbarHiddenButtons: [['subscript'], ['superscript'], ['backgroundColor']]
    };
  }
  ngOnInit() {
    console.log('init');
    this.initForm();
    this.listenToRoute();
  }
  initForm() {
    this.pageForm = this.fb.group({
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      slug: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      content: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  listenToRoute() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(route => {
      if (route.has('page')) {
        console.log('avem param');
        return this.pagesService.getSecondaryPageById(route.get('page'));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (!res) return;
        this.pageData = res;
        this.pageForm.patchValue(this.pageData);
      },
      error: () => {
        // this.toastService.showToast(
        //     this.translate.instant("TOAST.ERROR"),
        //     this.translate.instant("TOAST.BOOKING.NOT_FOUND"),
        //     "error");
      }
    });
  }
  savePage() {
    console.log('save page');
    this.pagesService.updateSecondaryPage(this.pageData.id, this.pageForm.value).subscribe(resp => {
      console.log('test', resp);
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _pages_service__WEBPACK_IMPORTED_MODULE_2__.PagesService
  }];
};
EditSecondaryPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-edit-secondary-page',
  template: _edit_secondary_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_edit_secondary_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditSecondaryPageComponent);


/***/ }),

/***/ 72617:
/*!***********************************************!*\
  !*** ./src/app/features/cms/pages.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesService": () => (/* binding */ PagesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let PagesService = class PagesService {
  constructor(http) {
    this.http = http;
  }
  getSecondaryPageById(pageId) {
    return this.http.get("/bestinform/getSecondaryPageById?secondaryPageId=" + pageId);
  }
  updateSecondaryPage(pageId, pageContent) {
    return this.http.put("/bestinform/updateSecondaryPage?secondaryPageId=" + pageId, pageContent);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
PagesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], PagesService);


/***/ }),

/***/ 69327:
/*!******************************************************!*\
  !*** ./src/app/shared/_services/homepage.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageService": () => (/* binding */ HomepageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let HomepageService = class HomepageService {
  constructor(http) {
    this.http = http;
  }
  getHomepageByLanguageAndApp(language, app) {
    return this.http.get('/bestinform/getHomepageByLanguageAndApp?language=' + language + '&app=' + app);
  }
  getHomepageById(homepageId) {
    return this.http.get('/bestinform/getHomepageById?homepageId=' + homepageId);
  }
  createHomepage(homepageObject) {
    return this.http.post('/bestinform/createHomepage', homepageObject);
  }
  updateHomepage(homepageId, homepageObject) {
    return this.http.put('/bestinform/updateHomepage?homepageId=' + homepageId, homepageObject);
  }
  uploadHomepageImage(homepageId, imageType, file) {
    return this.http.post('/bestinform/uploadHomepageImage?homepageId=' + homepageId + '&imageType=' + imageType, file);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
HomepageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], HomepageService);


/***/ }),

/***/ 71453:
/*!*******************************************************!*\
  !*** ./src/app/shared/_services/templates.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesService": () => (/* binding */ TemplatesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let TemplatesService = class TemplatesService {
  constructor(http) {
    this.http = http;
  }
  // --------------------------------------TEMPLATES---------------------------------
  listResourceTemplateFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listResourceTemplateFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  getCategoryById(id) {
    const idArray = [id];
    return this.http.post('/bestinform/getResourceCategories', idArray);
  }
  getResourceTypeById(id) {
    const idArray = [id];
    return this.http.get('/bestinform/getResourceTypeById?resourceTypeId=' + id);
  }
  addTemplate(template) {
    return this.http.post('/bestinform/createResourceTemplate', template);
  }
  getTemplateById(id) {
    return this.http.get('/bestinform/getResourceTemplateById?resourceTemplateId=' + id);
  }
  deleteTemplate(id) {
    return this.http.delete('/bestinform/deleteResourceTemplate?resourceTemplateId=' + id);
  }
  updateTemplate(id, template) {
    return this.http.put('/bestinform/updateResourceTemplate?resourceTemplateId=' + id, template);
  }
  existsResourceForTemplate(resourceTemplateId) {
    return this.http.get('/bestinform/existsResourceForTemplate?resourceTemplateId=' + resourceTemplateId);
  }
  checkResourceTypeForTemplate(body, resourceTemplateId) {
    return this.http.post('/bestinform/checkResourceTypeForTemplate?resourceTemplateId=' + resourceTemplateId, body);
  }
  // --------------------------------ATTRIBUTE CATEG----------------------------------
  getCategoryList(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/getCategoryList?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  getAttributeCategoryById(id) {
    return this.http.get('/bestinform/getCategoryById?categoryId=' + id);
  }
  updateAttributeCategory(id, category) {
    return this.http.put('/bestinform/updateCategory?categoryId=' + id, category);
  }
  addAttributeCategory(category) {
    return this.http.post('/bestinform/addCategory', category);
  }
  deleteAttributeCategory(id) {
    return this.http.delete('/bestinform/deleteCategory?categoryId=' + id);
  }
  // --------------------------------- ATTRIBUTES ------------------------------------
  listAttributesFiltered(page, size, sort, sort2, dir, filters) {
    return this.http.post('/bestinform/listAttributesFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&sort2=' + sort2 + '&dir=' + dir, filters);
  }
  getMaxOrderByCategory(categoryId) {
    return this.http.get('/bestinform/getAttributeMaxOrderByCategoryId?categoryId=' + categoryId);
  }
  changeAttributeOrder(attributeId, order) {
    return this.http.put('/bestinform/changeAttributeOrder?attributeId=' + attributeId + '&order=' + order, {});
  }
  getAttributeById(attributeId) {
    return this.http.get('/bestinform/getAttributeById?attributeId=' + attributeId);
  }
  addAttribute(attribute) {
    return this.http.post('/bestinform/addAttribute', attribute);
  }
  updateAttribute(attributeId, attribute) {
    return this.http.put('/bestinform/updateAttribute?attributeId=' + attributeId, attribute);
  }
  deleteAttribute(attributeId) {
    return this.http.delete('/bestinform/deleteAttribute?attributeId=' + attributeId);
  }
  getResourceTypes() {
    return this.http.get('/bestinform/getAllResourceTypes');
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
TemplatesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], TemplatesService);


/***/ }),

/***/ 31861:
/*!********************************************************************************!*\
  !*** ./src/app/standalone-components/media-library/media-library.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaLibraryComponent": () => (/* binding */ MediaLibraryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _media_library_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-library.component.html?ngResource */ 51195);
/* harmony import */ var _media_library_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-library.component.scss?ngResource */ 1230);
/* harmony import */ var _media_library_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_library_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_services_media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/media.service */ 21847);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var src_app_shared_services_templates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/templates.service */ 71453);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/_services/toast.service */ 62941);

















let MediaLibraryComponent = class MediaLibraryComponent {
  constructor(mediaService, templateService, cdr, modalService, formBuider, toastService) {
    this.mediaService = mediaService;
    this.templateService = templateService;
    this.cdr = cdr;
    this.modalService = modalService;
    this.formBuider = formBuider;
    this.toastService = toastService;
    //to close the subscribe, saving time
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.sort = "date";
    this.dir = "desc";
    this.categoryMediaList = ['image', 'pdf', 'document', 'other'];
    //get all media for galery
    this.filteredMedia = [];
    //upload file
    this.selectedFiles = [];
    this.urlfeaturedImg = '/assets/images/others/Showcase.jpg';
    this.selectedFile = Blob;
    this.mediaForm = this.formBuider.group({
      // id: new FormControl(''),
      alternativeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      // date: new FormControl(''),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
      // path: new FormControl(''),
      // size: new FormControl(null),
      // userId: new FormControl('')
    });

    this.searchMediaFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.categoryMediaFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
    this.unsubscribe = [];
    const loadingSubscr = this.isLoading$.asObservable().subscribe(res => this.isLoading = res);
    this.unsubscribe.push(loadingSubscr);
  }
  ngOnInit() {
    this.page = 0;
    this.size = 18;
    this.getMediaList();
    console.log("valoare filtru ", this.searchMediaFilter.value.alternativeNamet);
  }
  //display all media
  getMediaList() {
    const filter = {
      name: !this.searchMediaFilter.value ? null : this.searchMediaFilter.value,
      category: !this.categoryMediaFilter.value ? null : this.categoryMediaFilter.value
    };
    console.log(filter);
    this.mediaService.listMediaFiltered(this.page, this.size, this.sort, this.dir, filter).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: mediaData => {
        this.filteredMedia = mediaData.content;
        this.allMedia = mediaData.totalElements;
        // console.log("all media", this.filteredMedia);
        this.cdr.detectChanges();
      }
    });
  }
  loadForm(mediaId) {
    this.mediaService.getMediaById(mediaId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: mediaByIdData => {
        console.log(mediaByIdData);
        console.log(mediaByIdData.alternativeName, mediaByIdData.category);
        this.mediaId = mediaByIdData.id;
        this.mediaCategory = mediaByIdData.category;
        this.mediaName = mediaByIdData.name;
        this.mediaAlternativeName = mediaByIdData.alternativeName;
        this.mediaPath = mediaByIdData.path;
        this.mediaCategory = mediaByIdData.category;
        this.mediaForm.patchValue(mediaByIdData);
      }
    });
  }
  onImgChanged(event) {
    console.log('on img changed');
    this.isLoading$.next(true);
    this.selectedFiles = event.target.files;
    this.cdr.detectChanges();
    this.addMedia();
  }
  addMedia() {
    // this.isLoading = true;
    if (this.selectedFiles.length > 0) {
      this.mediaService.addMedia().subscribe(resp => {
        console.log(resp);
        this.mediaId = resp.reason;
        this.uploadFile(this.mediaId);
        this.isLoading$.next(false);
        this.toastService.showToast("Succes", "Fișierul a fost încărcat cu succes.", "success");
      });
    }
  }
  uploadFile(solutionId) {
    if (this.selectedFiles.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('file', this.selectedFiles[i]);
      }
      this.mediaService.uploadMedia(solutionId, formData).subscribe(res => {
        this.toastService.showToast("Succes", "Fișierul a fost încărcat cu succes.", "success");
        this.getMediaList();
      }, error => {
        console.log('nu s-a incarcat', error);
        if (error.error.reason === 'fileSizeTooBig') {
          this.toastService.showToast('Error', 'Fișierul încărcat este prea mare. Trebuie să aibă maxim 2MB.', "error");
        } else if (error.error.reason === 'wrongExtension') {
          this.toastService.showToast('Error', 'Acest format de fisier nu este permis!', "error");
        } else {
          this.toastService.showToast('Error', 'Fișierul NU a fost încărcat!', "error");
        }
      });
    }
  }
  //   onImgChanged(event:any){
  //     console.log(event);
  //     const files = event.target.files;
  //     if (files.length === 0)
  //         return;
  //     //read the image
  //     const reader = new FileReader();
  //     this.imagePath = files;
  //     console.log("imaginea incarcata, imagePath:", this.imagePath);
  //     //get image
  //     this.uploadedImageEvent=event.target.files[0];
  //     // this.mediaName=this.uploadedImageEvent.name;
  //     // // this.mediaAlternativeName=this.mediaForm.value.alternativeName;
  //     // this.mediaType=this.uploadedImageEvent.type==="text/plain" ? "document" : this.uploadedImageEvent.type==="image/png" ? "image" : "other";
  //     // this.mediaForm.get('name').patchValue(this.mediaName);
  //     // // this.mediaForm.get('alternativeName').patchValue(this.mediaAlternativeName);
  //     // this.mediaForm.get('category').patchValue(this.mediaType);
  //     reader.readAsDataURL(files[0]);
  //       this.nameFeaturedImg=files[0].name;
  //       reader.onload = () => {
  //       //new image link
  //       this.urlfeaturedImg = reader.result;
  //       this.cdr.detectChanges();
  //   }
  // }
  //???????????????????
  // addMedia(){
  // if(this.imagePath.length > 0){
  //   this.mediaService.addMedia()
  // .pipe(takeUntil(this.ngUnsubscribe))
  // .subscribe({
  //   next: (newFile:{success:boolean, reason:string})=>{
  //     console.log(newFile.reason);
  //     console.log(this.imagePath);
  //     this.uploadMedia(newFile.reason, this.imagePath);
  //   }
  // })
  // }
  // else{
  //   return;
  // }
  // }
  //edit media
  editMedia(mediaId) {
    const updatedMediaData = {
      name: this.mediaForm.value.name,
      alternativeName: this.mediaForm.value.alternativeName,
      category: this.mediaForm.value.category
    };
    this.mediaService.updateMedia(mediaId, updatedMediaData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: data => {
        console.log(data);
        this.toastService.showToast('Success', 'Fișierul modificat cu succes!', "success");
      }
    });
  }
  uploadMedia(idMedia, file) {
    this.mediaService.uploadMedia(idMedia, file).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: response => {
        console.log("fisier incarcat cu succes", response);
      },
      error: error => {
        console.log('nu s-a incarcat:', error);
        if (error.error.reason === 'fileSizeTooBig') {
          this.toastService.showToast('Error', 'Fișierul încărcat este prea mare. Trebuie să aibă maxim 2MB.', "error");
        } else {
          this.toastService.showToast('Error', 'Fișierul NU a fost încărcat!', "error");
        }
      }
    });
  }
  beforeDismiss() {
    this.singleMedia = {};
    return true;
  }
  openAddFileModal(content) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
      beforeDismiss: this.beforeDismiss
    });
  }
  openEditModal(content, media) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
      beforeDismiss: this.beforeDismiss
    });
    console.log(media);
    if (media.id) {
      this.loadForm(media.id);
    }
  }
  //pagination
  getServerData($event) {
    this.page = $event.pageIndex;
    this.size = $event.pageSize;
    this.getMediaList();
  }
  // //delete image
  deleteMedia(mediaId) {
    console.log("am intrat in functia de delete si stergem id-ul: ", mediaId);
    this.mediaService.deleteMediaById(mediaId).subscribe(resp => {
      console.log(resp);
      this.getMediaList();
      setTimeout(() => {
        this.modalService.dismissAll();
      }, 1000);
    });
  }
  //delete modal
  openDeleteModal(content, media) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
      beforeDismiss: this.beforeDismiss
    });
    this.mediaId = media.id;
  }
  imgPreviewModal(content, media) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
      beforeDismiss: this.beforeDismiss
    });
    this.mediaId = media.id;
    this.mediaPath = media.path;
    this.mediaAlternativeName = media.alternativeName;
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_media_service__WEBPACK_IMPORTED_MODULE_2__.MediaService
  }, {
    type: src_app_shared_services_templates_service__WEBPACK_IMPORTED_MODULE_3__.TemplatesService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }];
};
MediaLibraryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-media-library',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule],
  template: _media_library_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_media_library_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MediaLibraryComponent);


/***/ }),

/***/ 49997:
/*!********************************************************************************************!*\
  !*** ./src/app/features/cms/add-edit-homepage/add-edit-homepage.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.panel-title {\n  font-size: 1.5rem;\n  color: #24398A;\n  font-weight: 600;\n}\n\n.panel-subtitle {\n  font-weight: 400;\n  font-size: 16px;\n  color: #231F20;\n}\n\n.mat-expansion-panel-header {\n  height: 4.875rem;\n}\n\n.accordion-container .mat-expansion-panel-header-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  gap: 1rem;\n  color: #24398A;\n}\n.accordion-container .mat-expansion-panel-header-title i {\n  font-weight: 900;\n  font-size: 2rem;\n}\n\n:host ::ng-deep .accordion-container .mat-expansion-indicator:after {\n  color: #24398A !important;\n}\n\n:host ::ng-deep .accordion-container .mat-expansion-panel-body {\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), var(--primary-background);\n  padding: 1rem 1.5rem;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-expansion-panel {\n  box-shadow: none !important;\n}\n\n.gallery-container {\n  row-gap: 1rem;\n}\n.gallery-container .image-container img {\n  height: 100%;\n  object-fit: cover;\n}\n\n.image-container {\n  position: relative;\n  width: 100%;\n  min-height: 7.5rem;\n  height: 100%;\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.image-container .no-image {\n  width: 100%;\n  min-height: inherit;\n  background: rgba(36, 57, 138, 0.04);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #24398A;\n  cursor: pointer;\n  gap: 0.75rem;\n}\n.image-container .no-image:before {\n  content: \"\\f03e\";\n  font-family: \"Font Awesome 5 Free\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.25rem;\n}\n.image-container .no-image:after {\n  font-size: 1rem;\n  content: attr(translatedContent);\n}\n.image-container .btn-thumbnail, .image-container .btn-gallery {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n  border: none;\n}\n.image-container .btn-thumbnail i, .image-container .btn-gallery i {\n  color: var(--primary-background);\n  font-weight: 900;\n  font-size: 16px;\n}\n.image-container .btn-thumbnail {\n  position: absolute;\n  top: 2.125rem;\n  right: 2.125rem;\n}\n.image-container .btn-gallery {\n  position: absolute;\n  top: 0.875rem;\n  right: 0.875rem;\n}\n\n.fields-container {\n  background-color: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 3rem;\n}\n.fields-container:last-child {\n  margin-bottom: 0;\n}\n\n.footer-container {\n  background-color: var(--primary-background);\n  padding: 3rem 1.5rem;\n  font-size: 0.875rem;\n  border-radius: 0px 0px 8px 8px;\n}\n\n.mat-accordion .mat-expansion-panel:last-of-type {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.accordion-container .mat-expansion-panel-header-title.warning-highlight {\n  color: red;\n}\n\n.clear-form {\n  color: rgba(36, 57, 138, 0.48);\n  background-color: var(--primary-background);\n  border-radius: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/cms/add-edit-homepage/add-edit-homepage.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDRY;ECSZ,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAbA;EACE,iBAAA;EACA,cDnBc;ECoBd,gBAAA;AAgBF;;AAbA;EACE,gBAAA;EACA,eAAA;EACA,cDrBU;ACqCZ;;AAbA;EACE,gBAAA;AAgBF;;AAbA;EACE,iBAAA;EACA,gBAAA;EACA,SAAA;EACA,cDrCc;ACqDhB;AAfE;EACE,gBAAA;EACA,eAAA;AAiBJ;;AAbA;EACE,yBAAA;AAgBF;;AAbA;EACE,8GAAA;EACA,oBAAA;AAgBF;;AAbA;EACE,WAAA;AAgBF;;AAbA;EACE,2BAAA;AAgBF;;AAbA;EACE,aAAA;AAgBF;AAdE;EACE,YAAA;EACA,iBAAA;AAgBJ;;AAZA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;AAeF;AAbE;EACE,WAAA;EACA,mBAAA;EACA,mCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cDtFY;ECuFZ,eAAA;EACA,YAAA;AAeJ;AAbI;EACE,gBAAA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;AAeN;AAZI;EACE,eAAA;EACA,gCAAA;AAcN;AAVE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mCAAA;EACA,mBAAA;EACA,YAAA;AAYJ;AAVI;EACE,gCAAA;EACA,gBAAA;EACA,eAAA;AAYN;AARE;EACE,kBAAA;EACA,aAAA;EACA,eAAA;AAUJ;AAPE;EACE,kBAAA;EACA,aAAA;EACA,eAAA;AASJ;;AALA;EACE,2CAAA;EACA,yCAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;AAQF;AANE;EACE,gBAAA;AAQJ;;AAJA;EACE,2CAAA;EACA,oBAAA;EACA,mBAAA;EACA,8BAAA;AAOF;;AAJA;EACE,6BAAA;EACA,4BAAA;AAOF;;AAJA;EACE,UAAA;AAOF;;AAHA;EACE,8BAAA;EACA,2CAAA;EACA,mBAAA;AAMF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n}\n\n.panel-title {\n  font-size: 1.5rem;\n  color: $primary-color;\n  font-weight: 600;\n}\n\n.panel-subtitle {\n  font-weight: 400;\n  font-size: 16px;\n  color: $paragraph;\n}\n\n.mat-expansion-panel-header {\n  height: 4.875rem;\n}\n\n.accordion-container .mat-expansion-panel-header-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  gap: 1rem;\n  color: $primary-color;\n  i {\n    font-weight: 900;\n    font-size: 2rem;\n  }\n}\n\n:host ::ng-deep .accordion-container .mat-expansion-indicator:after {\n  color: $primary-color !important;\n}\n\n:host ::ng-deep .accordion-container .mat-expansion-panel-body {\n  background: linear-gradient(0deg, rgba($primary-color, 0.04), rgba($primary-color, 0.04)), var(--primary-background);\n  padding: 1rem 1.5rem;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-expansion-panel {\n  box-shadow: none !important;\n}\n\n.gallery-container {\n  row-gap: 1rem;\n\n  .image-container img {\n    height: 100%;\n    object-fit: cover;\n  }\n}\n\n.image-container {\n  position: relative;\n  width: 100%;\n  min-height: 7.5rem;\n  height: 100%;\n  border: 2px solid rgba($primary-color, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n\n  & .no-image {\n    width: 100%;\n    min-height: inherit;\n    background: rgba($primary-color, 0.04);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: $primary-color;\n    cursor: pointer;\n    gap: 0.75rem;\n\n    &:before {\n      content: '\\f03e';\n      font-family: 'Font Awesome 5 Free';\n      font-style: normal;\n      font-weight: 400;\n      font-size: 2.25rem;\n    }\n\n    &:after {\n      font-size: 1rem;\n      content: attr(translatedContent);\n    }\n  }\n\n  .btn-thumbnail, .btn-gallery {\n    width: 2rem;\n    height: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba($primary-color, 0.16);\n    border-radius: 100%;\n    border: none;\n\n    i {\n      color: var(--primary-background);\n      font-weight: 900;\n      font-size: 16px;\n    }\n  }\n\n  .btn-thumbnail {\n    position: absolute;\n    top: 2.125rem;\n    right: 2.125rem;\n  }\n\n  .btn-gallery {\n    position: absolute;\n    top: 0.875rem;\n    right: 0.875rem;\n  }\n}\n\n.fields-container {\n  background-color: var(--primary-background);\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 3rem;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n}\n\n.footer-container {\n  background-color: var(--primary-background);\n  padding: 3rem 1.5rem;\n  font-size: 0.875rem;\n  border-radius: 0px 0px 8px 8px;\n}\n\n.mat-accordion .mat-expansion-panel:last-of-type {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.accordion-container .mat-expansion-panel-header-title.warning-highlight {\n  color: red;\n}\n\n\n.clear-form{\n  color:rgba($primary-color, 0.48 );\n  background-color:var(--primary-background);\n  border-radius: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 74982:
/*!************************************************************************************************!*\
  !*** ./src/app/features/cms/edit-secondary-page/edit-secondary-page.component.scss?ngResource ***!
  \************************************************************************************************/
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

/***/ 1230:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/media-library/media-library.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.spinner {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.form-container {\n  background-color: var(--primary-background);\n  padding: 48px;\n}\n.form-container .col-md-2 .btn-long.btn-color-fill {\n  min-width: 15px;\n}\n\n.thumbnailImageWraper {\n  position: relative;\n}\n\n.overlayImageHover {\n  background-color: rgba(0, 0, 0, 0.2);\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n  border-radius: 8px;\n}\n\n.thumbnailImageWraper:hover .overlayImageHover {\n  opacity: 1;\n}\n\n.edit-btn {\n  position: absolute;\n  top: 75%;\n  left: 75%;\n}\n\n.delete-btn {\n  position: absolute;\n  bottom: 75%;\n  left: 75%;\n}\n\n.delete-btn.btn-round.btn-color-fill,\n.edit-btn.btn-round.btn-color-fill {\n  width: 30px;\n  height: 30px;\n}\n\n.editThumbnail {\n  width: 100%;\n  object-fit: cover;\n  overflow: hidden;\n  border: transparent;\n  border-radius: 8px;\n  height: 315px;\n}\n\n.mediaThumbnail {\n  height: 150px;\n  width: 150px;\n  object-fit: cover;\n  border-radius: 8px;\n  opacity: 1;\n  display: block;\n  backface-visibility: hidden;\n}\n\n.preview-img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  text-align: center;\n}\n\n@media only screen and (min-width: 768px) {\n  .input-group.col-md-4 {\n    width: 33.33333333%;\n  }\n}\n.mediaThumbnail.notImageContainer {\n  height: 100%;\n}\n\n.thumbNailContainer {\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  margin-bottom: 20px;\n}\n\n.notImageContainer {\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\n\n.thumbnailIcon {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.mediaThumbnailTitle {\n  max-width: 100%;\n  background: rgba(255, 255, 255, 0.7);\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);\n  padding: 5px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.mediaThumbnailTitle p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n\n.mediaThumbnailTitle p {\n  margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/media-library/media-library.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDRY;ECSZ,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAbA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AAgBF;;AAbA;EACE,yBAAA;EACA,6BAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kCAAA;AAgBF;;AAbA;EACE;IAAK,uBAAA;EAiBL;EAhBA;IAAO,yBAAA;EAmBP;AACF;AAjBA;EACI,2CAAA;EACA,aAAA;AAmBJ;AAjBI;EACE,eAAA;AAmBN;;AAdA;EACE,kBAAA;AAiBF;;AAbA;EACE,oCAAA;EACA,UAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,oCAAA;EACA,kBAAA;EACA,kBAAA;AAgBF;;AAbA;EACE,UAAA;AAgBF;;AAbA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;AAgBF;;AAbA;EACE,kBAAA;EACA,WAAA;EACA,SAAA;AAgBF;;AAbA;;EAEE,WAAA;EACA,YAAA;AAgBF;;AAZA;EACE,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;AAeF;;AAZA;EACE,aAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,cAAA;EACA,2BAAA;AAeF;;AAXA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;AAcF;;AAXA;EACE;IACE,mBAAA;EAcF;AACF;AAVA;EACE,YAAA;AAYF;;AATA;EAEE,aAAA;EACA,uBAAA;EACA,eAAA;EACA,mBAAA;AAWF;;AATA;EACE,kBAAA;EACA,aAAA;EACA,yBAAA;EACA,eAAA;EACA,qBAAA;EACA,8CAAA;AAYF;;AATA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;AAYF;;AAFA;EACE,eAAA;EACA,oCAAA;EACA,+CAAA;EACA,YAAA;EACA,8BAAA;EACA,+BAAA;AAKF;AAHE;EACE,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAKJ;;AAAA;EACE,gBAAA;AAGF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n}\n\n.loader{\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.spinner {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.form-container{\n    background-color: var(--primary-background);\n    padding:48px;\n\n    .col-md-2 .btn-long.btn-color-fill{\n      min-width: 15px;\n    }\n\n}\n\n.thumbnailImageWraper{\n  position: relative;\n}\n\n//the layer over img from list of media\n.overlayImageHover{\n  background-color: rgba(0,0,0,0.2);\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n  border-radius: 8px;\n}\n//the overlay vizible, when hover\n.thumbnailImageWraper:hover .overlayImageHover{\n  opacity: 1;\n}\n//corners buttons\n.edit-btn{\n  position: absolute;\n  top: 75%;\n  left:75%\n}\n\n.delete-btn{\n  position: absolute;\n  bottom: 75%;\n  left:75%\n}\n\n.delete-btn.btn-round.btn-color-fill,\n.edit-btn.btn-round.btn-color-fill{\n  width:30px;\n  height:30px;\n}\n\n\n.editThumbnail{\n  width: 100%;\n  object-fit: cover;\n  overflow: hidden;\n  border: transparent;\n  border-radius: 8px;\n  height: 315px;\n}\n\n.mediaThumbnail {\n  height: 150px;\n  width: 150px;\n  object-fit: cover;\n  border-radius: 8px;\n  opacity: 1;\n  display: block;\n  backface-visibility: hidden;\n}\n\n//preview image\n.preview-img{\n  width:100%;\n  height: 100%;\n  object-fit: contain;\n  text-align: center;\n}\n\n@media only screen and (min-width: 768px) {\n  .input-group.col-md-4 {\n    width: 33.33333333%;\n  }\n}\n\n\n.mediaThumbnail.notImageContainer {\n  height: 100%;\n}\n\n.thumbNailContainer {\n  // height: 180px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  margin-bottom: 20px;\n}\n.notImageContainer {\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);\n}\n\n.thumbnailIcon {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.1);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n\n  // height: 150px;\n  // width: 150px;\n  // border-radius: 8px;\n  // opacity: 1;\n  // display: block;\n  // backface-visibility: hidden;\n}\n\n.mediaThumbnailTitle {\n  max-width: 100%;\n  background: rgba(255,255,255,.7);\n  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%);\n  padding: 5px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n\n  p{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    /* autoprefixer: ignore next */\n    -webkit-box-orient: vertical;\n  }\n\n  // z-index:0;\n}\n.mediaThumbnailTitle p {\n  margin-bottom: 0;\n}\n\n// @media only screen and (min-width:320px) and (max-width: 480px){\n//   .mediaThumbnail{\n//     height: 200px;\n//     width:200px;\n//   }\n// }\n\n// @media only screen and (min-width:481px) and (max-width: 767){\n//   .mediaThumbnail{\n//     height: 350px;\n//     width:350px;\n//   }\n// }\n\n// @media only screen and (min-width:768px) and (max-width: 991px){\n//   .mediaThumbnail{\n//     height: 80px;\n//     width:80px;\n//   }\n// }\n\n\n// @media only screen and (min-width:992px) and (max-width: 1199px){\n//   .mediaThumbnail{\n//     height: 110px;\n//     width:110px;\n//   }\n// }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3686:
/*!********************************************************************************************!*\
  !*** ./src/app/features/cms/add-edit-homepage/add-edit-homepage.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"Content Management System\"\n                          [buttonBackRoute]=\"'../../dashboard'\"\n                          (buttonCall)=\"submitHomepage()\">\n    </app-dashboard-header>\n\n<div class=\"form-container mb-5\">\n    <form [formGroup]=\"homepageForm\" id=\"homePageForm\" (ngSubmit)=\"submitHomepage()\">\n\n        <div class=\"accordion-container\">\n            <mat-accordion>\n                <!--Homepage Model-->\n                <mat-expansion-panel [expanded]=\"true\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <i class=\"fas fa-info-circle\"></i>\n                            {{ \"HOMEPAGE.MODEL\" | translate}} \n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <h3 class=\"panel-title\">\n                        {{ \"HOMEPAGE.DISPLAY-LANGUAGE-VERSION\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{ \"HOMEPAGE.DISPLAY-LANGUAGE-VERSION\" | translate}}</mat-label>\n                                <mat-select id=\"selectFormHomepageDomain\" formControlName=\"language\" (selectionChange)=\"getHomepageData()\">\n                                    <mat-option [value]=\"'ro'\">Română</mat-option>\n                                    <mat-option [value]=\"'en'\">English</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{ \"HOMEPAGE.VERSION\" | translate}}</mat-label>\n                                <mat-select id=\"selectFormHomepageApp\" formControlName=\"app\" (selectionChange)=\"getHomepageData()\">\n                                    <mat-option [value]=\"'web'\">Web</mat-option>\n                                    <mat-option [value]=\"'mobile'\">Mobile</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n\n                </mat-expansion-panel>\n\n                <!--Sectiune 1 - Hero-->\n                <mat-expansion-panel formGroupName=\"hero\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title [ngClass]=\"{'warning-highlight' : (submitBtnClicked && !homepageForm.get('hero').valid)}\">\n                            <i class=\"fas fa-info-circle\"></i>\n                            {{ \"HOMEPAGE.SECTION\" | translate}} 1 - Hero\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <h3 class=\"panel-title\">\n                        {{ \"FIELD.TITLE\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{ \"HOMEPAGE.TEXT-TITLE\" | translate}}</mat-label>\n                                <input id=\"inputFormHomepageTitle\" formControlName=\"title\" matInput type=\"text\">\n                                <mat-error *ngIf=\"homepageForm.get('hero.title').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n<!--                                <button *ngIf=\"homepageForm.get('hero.title').value\" (click)=\"clearFormControl('hero.title')\"-->\n<!--                                        id=\"btnHomepageClearTitle\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                    <mat-icon>close</mat-icon>-->\n<!--                                </button>-->\n                                <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"homepageForm.get('hero.title').value\" (click)=\"clearFormControl('hero.title')\"\n                                   id=\"btnHomepageClearTitle\" matSuffix></i>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                    <h3 class=\"panel-title\">\n                        {{ \"HOMEPAGE.SUBTITLE\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{ \"HOMEPAGE.TEXT-CONTENT\" | translate}}</mat-label>\n                                <input id=\"inputFormHomepageContentText\" formControlName=\"contentText\" matInput type=\"text\">\n                                <mat-error *ngIf=\"homepageForm.get('hero.contentText').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n<!--                                <button *ngIf=\"homepageForm.get('hero.contentText').value\" (click)=\"clearFormControl('hero.contentText')\"-->\n<!--                                        id=\"btnHomepageClearContentText\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                    <mat-icon>close</mat-icon>-->\n<!--                                </button>-->\n                                <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"homepageForm.get('hero.contentText').value\" (click)=\"clearFormControl('hero.contentText')\"\n                                   id=\"btnHomepageClearContentText\" matSuffix></i>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                    <h3 class=\"panel-title\">\n                        {{ \"HOMEPAGE.BACKGROUND-IMG\" | translate}}\n                    </h3>\n\n                    <div class=\"image-container mb-5\">\n                        <div *ngIf=\"homepageForm.get('hero.backgroundImage').value?.filePath===''\" class=\"no-image\"\n                             attr.translatedContent = \"{{ 'GENERAL.INSERT_IMAGE' | translate}}\"\n                             (click)=\"openMedia(heroModal)\"></div>\n\n                        <ng-template #heroModal let-modal>\n                            <app-choose-media [category]=\"'image'\"\n                                              [multipleSelect]=\"false\"\n                                              [for]=\"'hero'\"\n                                              [modalRef]=\"modal\"></app-choose-media>\n                        </ng-template>\n\n                        <img *ngIf=\" homepageForm.get('hero.backgroundImage').value?.filePath\" class=\"img-fluid w-100\"\n                             [src]=\"homepageForm.get('hero.backgroundImage').value?.filePath\" alt=\"thumbnail\">\n                        <button *ngIf=\"homepageForm.get('hero.backgroundImage').value\"\n                                (click)=\"removeImage('hero.backgroundImage', 'background')\"\n                                type=\"button\"\n                                id=\"btnRemoveFeaturedImage\"\n                                class=\"btn-thumbnail\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n\n                    </div>\n\n                    <h3 class=\"panel-title\">\n                        {{ \"HOMEPAGE.BTN-TEXT\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{ \"HOMEPAGE.BTN-TEXT\" | translate}}</mat-label>\n                                <input id=\"inputFormHomepageButtonText\" formControlName=\"buttonText\" matInput type=\"text\">\n                                <mat-error *ngIf=\"homepageForm.get('hero.buttonText').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n<!--                                <button *ngIf=\"homepageForm.get('hero.buttonText').value\" (click)=\"clearFormControl('hero.buttonText')\"-->\n<!--                                        id=\"btnHomepageClearButtonText\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                    <mat-icon>close</mat-icon>-->\n<!--                                </button>-->\n\n                                <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"homepageForm.get('hero.buttonText').value\" (click)=\"clearFormControl('hero.buttonText')\"\n                                   id=\"btnHomepageClearButtonText\" matSuffix></i>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                </mat-expansion-panel>\n\n                <!--Sectiune 2 - Beneficii-->\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title [ngClass]=\"{'warning-highlight' : (submitBtnClicked && !homepageForm.get('benefits').valid)}\">\n                            <i class=\"fas fa-info-circle\"></i>\n                            {{ \"HOMEPAGE.SECTION\" | translate}} 2 - {{ \"HOMEPAGE.BENEFITS\" | translate}}\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <ng-container formArrayName=\"benefits\">\n                        <ng-container *ngFor=\"let benefit of benefits.controls; index as i\">\n                            <h3 class=\"panel-title\">\n                                {{ \"HOMEPAGE.BENEFIT\" | translate}} {{ i + 1 }}\n                            </h3>\n\n                            <div class=\"fields-container\" [formGroupName]=\"i\">\n                                <h3 class=\"panel-title\">\n                                    {{ \"FIELD.TITLE\" | translate}}\n                                </h3>\n\n                                <div class=\"row\">\n                                    <div class=\"col-12\">\n                                        <mat-form-field appearance=\"standard\">\n                                            <mat-label>{{ \"HOMEPAGE.TEXT-TITLE\" | translate}}</mat-label>\n                                            <input id=\"inputFormHomepageBenefitTitle-{{i}}\" formControlName=\"title\" matInput type=\"text\">\n                                            <mat-error *ngIf=\"benefit.get('title').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n<!--                                            <button *ngIf=\"benefit.get('title').value\" (click)=\"benefit.get('title').patchValue('')\"-->\n<!--                                                    id=\"btnHomepageClearBenefitTitle-{{i}}\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                                <mat-icon>close</mat-icon>-->\n<!--                                            </button>-->\n\n                                            <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"benefit.get('title').value\" (click)=\"benefit.get('title').patchValue('')\"\n                                               id=\"btnHomepageClearBenefitTitle-{{i}}\" matSuffix></i>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n\n                                <h3 class=\"panel-title\">\n                                    {{ \"HOMEPAGE.CONTENT\" | translate}} \n                                </h3>\n\n                                <div class=\"row\">\n                                    <div class=\"col-12\">\n                                        <mat-form-field appearance=\"standard\">\n                                            <mat-label>{{ \"HOMEPAGE.TEXT-CONTENT\" | translate}}</mat-label>\n                                            <textarea formControlName=\"content\" matInput id=\"inputFormHomepageBenefitContent-{{i}}\"\n                                                      cdkTextareaAutosize\n                                                      cdkAutosizeMinRows=\"1\"\n                                                      cdkAutosizeMaxRows=\"20\"></textarea>\n                                            <mat-error *ngIf=\"benefit.get('content').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n<!--                                            <button *ngIf=\"benefit.get('content').value\" (click)=\"benefit.get('content').patchValue('')\"-->\n<!--                                                    id=\"btnHomepageClearBenefitContent-{{i}}\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                                <mat-icon>close</mat-icon>-->\n<!--                                            </button>-->\n\n                                            <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"benefit.get('content').value\" (click)=\"benefit.get('content').patchValue('')\"\n                                               id=\"btnHomepageClearBenefitContent-{{i}}\" matSuffix></i>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </ng-container>\n                    </ng-container>\n\n\n                </mat-expansion-panel>\n\n                <!--Sectiune 3 - Trial Section-->\n                <mat-expansion-panel formGroupName=\"trialSection\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title [ngClass]=\"{'warning-highlight' : (submitBtnClicked && !homepageForm.get('trialSection').valid)}\">\n                            <i class=\"fas fa-info-circle\"></i>\n                            {{ \"HOMEPAGE.SECTION\" | translate}} 3 -{{ \"HOMEPAGE.TRIAL-SECTION\" | translate}}\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <h3 class=\"panel-title\">\n                        {{\"FIELD.TITLE\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{\"HOMEPAGE.TEXT-TITLE\" | translate}}</mat-label>\n                                <input id=\"inputFormHomepageTrialTitle\" formControlName=\"mainTitle\" matInput type=\"text\">\n                                <mat-error *ngIf=\"homepageForm.get('trialSection.mainTitle').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n<!--                                <button *ngIf=\"homepageForm.get('trialSection.mainTitle').value\" (click)=\"clearFormControl('trialSection.mainTitle')\"-->\n<!--                                        id=\"btnHomepageClearTrialTitle\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                    <mat-icon>close</mat-icon>-->\n<!--                                </button>-->\n\n                                <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"homepageForm.get('trialSection.mainTitle').value\" (click)=\"clearFormControl('trialSection.mainTitle')\"\n                                   id=\"btnHomepageClearTrialTitle\" matSuffix></i>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                    <h3 class=\"panel-title\">\n                        {{\"HOMEPAGE.SUBTITLE\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{\"HOMEPAGE.TEXT-SUBTITLE\" | translate}}</mat-label>\n                                <input id=\"inputFormHomepageTrialSubtitle\" formControlName=\"subTitle\" matInput type=\"text\">\n                                <mat-error *ngIf=\"homepageForm.get('trialSection.subTitle').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n<!--                                <button *ngIf=\"homepageForm.get('trialSection.subTitle').value\" (click)=\"clearFormControl('trialSection.subTitle')\"-->\n<!--                                        id=\"btnHomepageClearTrialSubtitle\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                    <mat-icon>close</mat-icon>-->\n<!--                                </button>-->\n\n                                <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"homepageForm.get('trialSection.subTitle').value\" (click)=\"clearFormControl('trialSection.subTitle')\"\n                                   id=\"btnHomepageClearTrialSubtitle\" matSuffix></i>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n\n                    <h3 class=\"panel-title\">\n                        {{\"HOMEPAGE.CONTENT\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{ \"HOMEPAGE.TEXT-CONTENT\" | translate}}</mat-label>\n                                <textarea formControlName=\"content\" matInput id=\"inputFormHomepageTrialContent\"\n                                          cdkTextareaAutosize\n                                          cdkAutosizeMinRows=\"1\"\n                                          cdkAutosizeMaxRows=\"20\"></textarea>\n                                <mat-error *ngIf=\"homepageForm.get('trialSection.content').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n<!--                                <button *ngIf=\"homepageForm.get('trialSection.content').value\" (click)=\"clearFormControl('trialSection.content')\"-->\n<!--                                        id=\"btnHomepageClearTrialContent\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                    <mat-icon>close</mat-icon>-->\n<!--                                </button>-->\n\n                                <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"homepageForm.get('trialSection.content').value\" (click)=\"clearFormControl('trialSection.content')\"\n                                   id=\"btnHomepageClearTrialContent\" matSuffix></i>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n\n                    <h3 class=\"panel-title\">\n                        {{\"HOMEPAGE.BTN-TEXT\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{\"HOMEPAGE.BTN-TEXT\" | translate}}</mat-label>\n                                <input id=\"inputFormHomepageTrialButtonText\" formControlName=\"buttonText\" matInput type=\"buttonText\">\n                                <mat-error *ngIf=\"homepageForm.get('trialSection.content').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n<!--                                <button *ngIf=\"homepageForm.get('trialSection.buttonText').value\" (click)=\"clearFormControl('trialSection.buttonText')\"-->\n<!--                                        id=\"btnHomepageClearTrialButtonText\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                    <mat-icon>close</mat-icon>-->\n<!--                                </button>-->\n\n                                <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"homepageForm.get('trialSection.buttonText').value\" (click)=\"clearFormControl('trialSection.buttonText')\"\n                                   id=\"btnHomepageClearTrialButtonText\" matSuffix></i>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                    <h3 class=\"panel-title\">\n                        {{\"HOMEPAGE.IMAGE\" | translate}}\n                    </h3>\n\n                    <div class=\"image-container mb-5\">\n                        <div *ngIf=\"homepageForm.get('trialSection.image').value?.filePath===''\" class=\"no-image\"\n                             attr.translatedContent = \"{{ 'GENERAL.INSERT_IMAGE' | translate}}\"\n                             (click)=\"openMedia(trialImage)\"></div>\n\n                        <ng-template #trialImage let-modal>\n                            <app-choose-media [category]=\"'image'\"\n                                              [multipleSelect]=\"false\"\n                                              [for]=\"'trial'\"\n                                              [modalRef]=\"modal\"></app-choose-media>\n                        </ng-template>\n\n                        <img *ngIf=\"homepageForm.get('trialSection.image').value?.filePath\" class=\"img-fluid w-100\"\n                             [src]=\"homepageForm.get('trialSection.image').value?.filePath\" alt=\"thumbnail\">\n                        <button *ngIf=\"homepageForm.get('trialSection.image').value\"\n                                (click)=\"removeImage('trialSection.image', 'content')\"\n                                type=\"button\"\n                                id=\"btnRemoveTrialImage\"\n                                class=\"btn-thumbnail\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </div>\n\n                </mat-expansion-panel>\n\n                <!--Sectiune 4 - Galerie-->\n                <mat-expansion-panel formGroupName=\"gallery\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title [ngClass]=\"{'warning-highlight' : (submitBtnClicked && !homepageForm.get('gallery').valid)}\">\n                            <i class=\"fas fa-info-circle\"></i>\n                            {{ \"HOMEPAGE.SECTION\" | translate}} 4 - {{ \"HOMEPAGE.GALLERY\" | translate}}\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <h3 class=\"panel-title\">\n                        {{ \"HOMEPAGE.DESCRIPTION\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{ \"HOMEPAGE.TEXT-CONTENT\" | translate}}</mat-label>\n                                <textarea formControlName=\"textContent\" matInput id=\"inputFormHomepageGalleryContent\"\n                                          cdkTextareaAutosize\n                                          cdkAutosizeMinRows=\"1\"\n                                          cdkAutosizeMaxRows=\"20\"></textarea>\n<!--                                <button *ngIf=\"homepageForm.get('gallery.textContent').value\" (click)=\"clearFormControl('gallery.textContent')\"-->\n<!--                                        id=\"btnHomepageClearGalleryContent\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                    <mat-icon>close</mat-icon>-->\n<!--                                </button>-->\n\n                                <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"homepageForm.get('gallery.textContent').value\" (click)=\"clearFormControl('gallery.textContent')\"\n                                   id=\"btnHomepageClearGalleryContent\" matSuffix></i>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                    <ng-container formArrayName=\"videos\">\n                        <ng-container *ngFor=\"let video of videos.controls; index as i\">\n                            <h3 class=\"panel-title\">\n                                Video {{ i + 1 }}\n                            </h3>\n\n                            <div class=\"fields-container\" [formGroupName]=\"i\">\n                                <h3 class=\"panel-title\">\n                                    {{ \"HOMEPAGE.INFO-VIDEO\" | translate}}\n                                </h3>\n\n                                <div class=\"row\">\n                                    <div class=\"col-12\">\n                                        <mat-form-field appearance=\"standard\">\n                                            <mat-label>{{\"HOMEPAGE.TEXT-TITLE\" | translate}}</mat-label>\n                                            <input id=\"inputFormHomepageVideoTitle-{{i}}\" formControlName=\"fileName\" matInput type=\"text\">\n                                            <mat-error *ngIf=\"video.get('fileName').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n<!--                                            <button *ngIf=\"video.get('fileName').value\" (click)=\"video.get('fileName').patchValue('')\"-->\n<!--                                                    id=\"btnHomepageClearVideoTitle-{{i}}\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                                <mat-icon>close</mat-icon>-->\n<!--                                            </button>-->\n\n                                            <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"video.get('fileName').value\" (click)=\"video.get('fileName').patchValue('')\"\n                                               id=\"btnHomepageClearVideoTitle-{{i}}\" matSuffix></i>\n                                        </mat-form-field>\n                                    </div>\n\n                                    <div class=\"col-12\">\n                                        <mat-form-field appearance=\"standard\">\n                                            <mat-label>Link</mat-label>\n                                            <input id=\"inputFormHomepageVideoPath-{{i}}\" formControlName=\"filePath\" matInput type=\"text\">\n                                            <mat-error *ngIf=\"video.get('filePath').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n<!--                                            <button *ngIf=\"video.get('filePath').value\" (click)=\"video.get('filePath').patchValue('')\"-->\n<!--                                                    id=\"btnHomepageClearVideoPath-{{i}}\" type=\"button\" mat-icon-button matSuffix>-->\n<!--                                                <mat-icon>close</mat-icon>-->\n<!--                                            </button>-->\n\n                                            <i class=\"fas fa-times-circle clear-form\" type=\"button\" *ngIf=\"video.get('filePath').value\" (click)=\"video.get('filePath').patchValue('')\"\n                                               id=\"btnHomepageClearVideoPath-{{i}}\" matSuffix></i>\n                                            <i class=\"fas fa-search clear-form\" type=\"button\" *ngIf=\"!video.get('filePath').value\" (click)=\"openMedia(chooseVideo)\"\n                                               id=\"btnHomepageClearVideoPath-{{i}}\" matSuffix></i>\n                                        </mat-form-field>\n\n                                        <ng-template #chooseVideo let-modal>\n                                            <app-choose-media [category]=\"'video'\"\n                                                              [multipleSelect]=\"false\"\n                                                              [for]=\"'video-'+i\"\n                                                              [modalRef]=\"modal\"></app-choose-media>\n                                        </ng-template>\n                                    </div>\n\n\n                                    <h6>Featured Image</h6>\n                                    <div class=\"col-12\">\n                                        <div class=\"image-container\">\n                                            <div *ngIf=\"!video.get('featuredImagePath').value\" class=\"no-image\"\n                                                 attr.translatedContent = \"{{ 'GENERAL.INSERT_IMAGE' | translate}}\"\n                                                 (click)=\"openMedia(imagePath)\"></div>\n\n                                            <ng-template #imagePath let-modal>\n                                                <app-choose-media [category]=\"'image'\"\n                                                                  [multipleSelect]=\"false\"\n                                                                  [for]=\"'featuredImage-'+i\"\n                                                                  [modalRef]=\"modal\"></app-choose-media>\n                                            </ng-template>\n\n                                            <img *ngIf=\"video.get('featuredImagePath').value\" class=\"img-fluid w-100\"\n                                                 [src]=\"video.get('featuredImagePath').value\" alt=\"thumbnail\">\n                                            <button *ngIf=\"video.get('featuredImagePath').value\"\n                                                    (click)=\"video.get('featuredImagePath').patchValue('')\"\n                                                    type=\"button\"\n                                                    id=\"btnHomepageClearFeaturedImagePath-{{i}}\"\n                                                    class=\"btn-thumbnail\">\n                                                <i class=\"fas fa-times\"></i>\n                                            </button>\n\n                                        </div>\n\n\n                                    </div>\n                                </div>\n\n                            </div>\n                        </ng-container>\n                    </ng-container>\n\n\n                </mat-expansion-panel>\n\n                <!--Sectiune 5 - Call To Action-->\n                <mat-expansion-panel formGroupName=\"callToAction\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title [ngClass]=\"{'warning-highlight' : (submitBtnClicked && !homepageForm.get('callToAction').valid)}\">\n                            <i class=\"fas fa-info-circle\"></i>\n                            {{ \"HOMEPAGE.SECTION\" | translate}} 5 - Call To Action\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <h3 class=\"panel-title\">\n                        {{\"FIELD.TITLE\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{\"HOMEPAGE.TEXT-TITLE\" | translate}}</mat-label>\n                                <input id=\"inputFormHomepageActionTitle\" formControlName=\"title\" matInput type=\"text\">\n                                <mat-error *ngIf=\"homepageForm.get('callToAction.title').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n                                <button *ngIf=\"homepageForm.get('callToAction.title').value\" (click)=\"clearFormControl('callToAction.title')\"\n                                        id=\"btnHomepageClearActionTitle\" type=\"button\" mat-icon-button matSuffix>\n                                    <mat-icon>close</mat-icon>\n                                </button>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n\n                    <h3 class=\"panel-title\">\n                        {{\"HOMEPAGE.CONTENT\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{ \"HOMEPAGE.TEXT-CONTENT\" | translate}}</mat-label>\n                                <textarea formControlName=\"content\" matInput id=\"inputFormHomepageActionContent\"\n                                          cdkTextareaAutosize\n                                          cdkAutosizeMinRows=\"1\"\n                                          cdkAutosizeMaxRows=\"20\"></textarea>\n                                <mat-error *ngIf=\"homepageForm.get('callToAction.content').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n                                <button *ngIf=\"homepageForm.get('callToAction.content').value\" (click)=\"clearFormControl('callToAction.content')\"\n                                        id=\"btnHomepageClearActionContent\" type=\"button\" mat-icon-button matSuffix>\n                                    <mat-icon>close</mat-icon>\n                                </button>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n\n                    <h3 class=\"panel-title\">\n                        {{\"HOMEPAGE.BTN-TEXT\" | translate}}\n                    </h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{\"HOMEPAGE.BTN-TEXT\" | translate}}</mat-label>\n                                <input id=\"inputFormHomepageActionButtonText\" formControlName=\"buttonText\" matInput type=\"text\">\n                                <mat-error *ngIf=\"homepageForm.get('callToAction.buttonText').hasError('required')\">{{ 'ERROR.REQUIRED' | translate }}</mat-error>\n                                <button *ngIf=\"homepageForm.get('callToAction.buttonText').value\" (click)=\"clearFormControl('callToAction.buttonText')\"\n                                        id=\"btnHomepageClearActionButtonText\" type=\"button\" mat-icon-button matSuffix>\n                                    <mat-icon>close</mat-icon>\n                                </button>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n\n        <div class=\"footer-container d-flex flex-wrap justify-content-center justify-content-xl-between align-items-center\">\n            <div class=\"d-flex gap-2\">\n                <mat-checkbox></mat-checkbox>\n                <p>\n                    {{ 'MESSAGE.TERMS_AND_CONDITIONS' | translate}}\n                </p>\n            </div>\n\n            <div class=\"d-flex gap-2\">\n                <button type=\"button\" class=\"btn-auto btn-color-outline w-50\" id=\"btnBackFooterAddEditHomepage\"\n                        routerLink=\"../../../dashboard\">\n                    <i class=\"fas fa-times\"></i>\n                    {{ 'BTN.CANCEL' | translate}}\n                </button>\n\n                <button type=\"submit\" class=\"btn-auto btn-color-fill w-50\" id=\"btnSubmitFooterAddEditHomepage\">\n                    {{ 'BTN.SUBMIT' | translate}}\n                    <i class=\"fa fa-arrow-right\"></i>\n                </button>\n            </div>\n        </div>\n    </form>\n</div>\n</div>\n\n";

/***/ }),

/***/ 87037:
/*!************************************************************************************************!*\
  !*** ./src/app/features/cms/edit-secondary-page/edit-secondary-page.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"Edit Page\"\n                          [buttonBackRoute]=\"'../../dashboard'\"\n                          (buttonCall)=\"savePage()\">\n    </app-dashboard-header>\n\n    <div class=\"card mb-4\">\n        <div class=\"card-body\">\n            <form [formGroup]=\"pageForm\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>{{\"HOMEPAGE.PAGE-NAME\"}}</mat-label>\n                            <input formControlName=\"name\" matInput placeholder=\"Nume pagină\">\n                            <mat-error *ngIf=\"pageForm.get('name').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>{{\"HOMEPAGE.SLUG-NAME\"}}</mat-label>\n                            <input formControlName=\"slug\" matInput placeholder=\"Slug pagină\">\n                            <mat-error *ngIf=\"pageForm.get('slug').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <angular-editor\n                                formControlName=\"content\"\n                                name=\"content\"\n                                id=\"postContent\"\n                                [config]=\"editorConfig\">\n                        </angular-editor>\n                    </div>\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 51195:
/*!*********************************************************************************************!*\
  !*** ./src/app/standalone-components/media-library/media-library.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <div class=\"page-header d-flex justify-content-center justify-content-sm-between align-items-center flex-wrap\">\n        <h2>\n            Librarie media\n        </h2>\n\n        <div class=\"d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap\">\n            <label for=\"fileUpload\">\n              <span class=\"btn-long btn-color-fill\">\n                <i class=\"fas fa-plus\"></i>\n               Adaugă media\n              </span>\n            </label>\n            <input class=\"d-none\" type=\"file\" name=\"fileUpload\" id=\"fileUpload\"\n                   accept=\".png, .jpg, .jpeg, .jfif, .gif, .mp4, .MPG, .mov, .AVI, .VOB\"\n                   onclick=\"value = null\"\n                   (change)=\"onImgChanged($event)\"/>\n        </div>\n    </div>\n\n    <div class=\"form-container mb-5\">\n        <div class=\"row flex-wrap\">\n            <div class=\"col-12 col-md-5\">\n                    <mat-form-field  class=\"w-100\" >\n                        <mat-label>Cautare</mat-label>\n                        <input matInput placeholder=\"Cautare\"  (keyup.enter)=\"getMediaList()\" type=\"text\" [formControl]=\"searchMediaFilter\">\n                    </mat-form-field>\n            </div>\n            <div class=\"col-12 col-md-5\">\n                <mat-form-field class=\"w-100\" >\n                    <mat-label>Categorie</mat-label>\n                    <mat-select [formControl]=\"categoryMediaFilter\" (selectionChange)=\"getMediaList()\">\n                        <mat-option [value]=\"null\"> -</mat-option>\n                        <mat-option value=\"image\">Images</mat-option>\n                        <mat-option value=\"pdf\">Pdf</mat-option>\n                        <mat-option value=\"document\">Documente</mat-option>\n                        <mat-option value=\"video\">Video</mat-option>\n                        <mat-option value=\"other \">Altele</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"col-12 col-md-2\">\n                <button class=\"btn-long btn-color-fill w-100 w-md-25\" (click)=\"getMediaList()\">\n                    <i class=\"fas fa-filter\"></i>\n                    Filter\n                </button>\n            </div>\n\n        </div>\n\n        <!-- <div class=\"loader\" *ngIf=\"isLoading===true\">\n          <div class=\"spinner\"></div>\n        </div> -->\n        <ng-container *ngIf=\"isLoading === true\">\n          <span [style.display]=\"'block'\" clas=\"indicator-progress\">\n             Se incarcă fișierul..{{ \" \" }}\n              <!--<span\n                      class=\"spinner-border spinner-border-sm align-middle ms-2\"\n              ></span> -->\n              <div class=\"loader\" *ngIf=\"isLoading===true\">\n                <div class=\"spinner\"></div>\n              </div>\n          </span>\n        </ng-container>\n\n        <div class=\"row\" *ngIf=\"allMedia && isLoading===false\">\n            <div class=\"col-md-12 row\">\n              <div *ngFor=\"let media of filteredMedia\" class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 thumbNailContainer\">\n                <div *ngIf=\"media.category === 'image'; else notImage \" class=\"thumbnailImageWraper\">\n\n                  <img class=\"mediaThumbnail\" src=\"{{media?.path}}\" alt=\"{{media?.alternativeName}}\">\n                  <div class=\"overlayImageHover\" (click)=\"imgPreviewModal(previewModal, media); \">\n                    <button (click)=\"$event.stopPropagation(); openDeleteModal(deleteModal, media)\" class=\"delete-btn btn-round btn-color-fill\"><i class=\"fas fa-trash-alt\"></i></button>\n                    <button (click)=\"$event.stopPropagation(); openEditModal(content, media)\" class=\"edit-btn btn-round btn-color-fill\"><i class=\"fas fa-pen\"></i></button>\n                  </div>\n                </div>\n\n                <ng-template #notImage>\n                  <div class=\"thumbnailImageWraper\">\n                    <!--icon &title-->\n                    <div class=\"mediaThumbnail d-flex flex-column justify-content-center\">\n                      <i *ngIf=\"media.category!=='video'\" class=\"fas fa-file my-auto mx-auto\"></i>\n                      <i *ngIf=\"media.category==='video'\" class=\"fas fa-video my-auto mx-auto\"></i>\n                      <div class=\"mediaThumbnailTitle mb-0\">\n                        <p>{{media.name}}</p>\n                      </div>\n                    </div>\n                    <!--overlay and buttons-->\n                    <div class=\"overlayImageHover\">\n                      <button (click)=\"openDeleteModal(deleteModal, media)\" class=\"delete-btn btn-round btn-color-fill\"><i class=\"fas fa-trash-alt\"></i></button>\n                      <button (click)=\"openEditModal(content, media)\" class=\"edit-btn btn-round btn-color-fill\"><i class=\"fas fa-pen\"></i></button>\n                    </div>\n\n                  </div>\n                </ng-template>\n              </div>\n              <mat-paginator #paginator [pageSize]=\"size\" [length]=\"allMedia\" [pageIndex]=\"pageIndex\"\n                             [pageSizeOptions]=\"[18, 24, 48, 96]\"\n                             (page)=\"pageEvent = getServerData($event)\"></mat-paginator>\n            </div>\n          </div>\n\n          <!-- <div *ngIf=\"loader===true\" class=\"d-flex flex-column justify-content-center align-items-center\" >\n            <i class=\"fad fa-spinner-third fa-spin\"></i>\n            <p>Se incarcă fisierul.</p>\n          </div> -->\n\n\n    </div>\n\n</div>\n\n<!--Editeaza imagine-->\n<ng-template #content let-modal>\n  <!--header-->\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Editează media</h4>\n      <span aria-hidden=\"true\" (click)=\"modal.dismiss('Cross click')\"><i class=\"fas fa-times\"></i></span>\n  </div>\n<!--body-->\n<div class=\"row p-4\">\n  <!--img-->\n<div class=\"col-6\">\n  <div class=\"editThumbnail\">\n    <img  *ngIf=\"mediaCategory === 'image'\" class=\"editThumbnail\" src=\"{{mediaPath}}\" alt=\"{{mediaAlternativeName}}\">\n    <i *ngIf=\"mediaCategory === 'video'\" class=\"fas fa-video h-100 d-flex justify-content-center align-items-center\"></i>\n    <i *ngIf=\"mediaCategory !== 'video' && mediaCategory !== 'image'\" class=\"fas fa-file h-100 d-flex justify-content-center align-items-center\"></i>\n  </div>\n</div>\n<!--form-->\n<div class=\"col-6\">\n  <form [formGroup]=\"mediaForm\">\n    <mat-form-field  class=\"w-100\" >\n      <mat-label>Nume</mat-label>\n      <input matInput type=\"text\" formControlName=\"name\">\n    </mat-form-field>\n\n    <mat-form-field  class=\"w-100\" >\n      <mat-label>Nume alternativ</mat-label>\n      <input matInput type=\"text\" formControlName=\"alternativeName\">\n    </mat-form-field>\n\n    <mat-form-field class=\"w-100\" >\n      <mat-label>Categorie</mat-label>\n      <mat-select formControlName=\"category\">\n          <mat-option value=\"\">-</mat-option>\n          <mat-option value=\"image\">Images</mat-option>\n          <mat-option value=\"pdf\">Pdf</mat-option>\n          <mat-option value=\"document\">Documente</mat-option>\n          <mat-option value=\"video\">Video</mat-option>\n          <mat-option value=\"other\">Altele</mat-option>\n      </mat-select>\n  </mat-form-field>\n\n    <button\n      (click)=\"deleteMedia(mediaId)\"\n      class=\"btn-long btn-color-fill\"\n      type=\"submit\"\n    >\n        <i class=\"fas fa-trash-alt\"></i>\n        Stergere\n    </button>\n  </form>\n</div>\n</div>\n<!--end body-->\n<!--footer-->\n<div class=\"d-flex justify-content-end\">\n  <div class=\"d-flex justify-content-between align-items-center flex-wrap p-2\">\n    <button  class=\"btn-long btn-color-outline mr-2\" (click)=\"modal.dismiss('Cross click')\">\n        <i class=\"fas fa-arrow-times\"></i>\n        Anulare\n    </button>\n\n    <button class=\"btn-long btn-color-fill ms-2\" type=\"submit\" (click)=\"editMedia(mediaId)\">\n      <i class=\"fas fa-check\"></i>\n        Confirma\n    </button>\n</div>\n</div>\n</ng-template>\n\n\n\n<!--Adauga fisier-->\n<ng-template #addFile let-modal>\n  <!--header-->\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Adaugă media</h4>\n      <span aria-hidden=\"true\" (click)=\"modal.dismiss('Cross click')\"><i class=\"fas fa-times\"></i></span>\n  </div>\n<!--body-->\n<div class=\"row p-4\">\n  <!--img-->\n<div class=\"col-6\">\n  <div class=\"editThumbnail\">\n      <input #fileInput hidden type=\"file\" (change)=\"onImgChanged($event)\">\n          <div class=\"w-100\">\n              <img class=\"editThumbnail\" src='{{urlfeaturedImg}}' (click)=\"fileInput.click()\">\n          </div>\n  </div>\n</div>\n<!--form-->\n<div class=\"col-6\">\n  <form [formGroup]=\"mediaForm\">\n    <mat-form-field  class=\"w-100\" >\n      <mat-label>Nume</mat-label>\n      <input matInput type=\"text\" formControlName=\"name\">\n    </mat-form-field>\n\n    <mat-form-field  class=\"w-100\" >\n      <mat-label>Nume alternativ</mat-label>\n      <input matInput type=\"text\" formControlName=\"alternativeName\">\n    </mat-form-field>\n\n    <mat-form-field class=\"w-100\" >\n      <mat-label>Categorie</mat-label>\n      <mat-select formControlName=\"category\">\n          <mat-option value=\"\">-</mat-option>\n          <mat-option value=\"image\">Imagine</mat-option>\n          <mat-option value=\"pdf\">Pdf</mat-option>\n          <mat-option value=\"document\">Document</mat-option>\n          <mat-option value=\"video\">Video</mat-option>\n          <mat-option value=\"other\">Altele</mat-option>\n      </mat-select>\n  </mat-form-field>\n  </form>\n</div>\n</div>\n<!--end body-->\n<!--footer-->\n<div class=\"d-flex justify-content-end\">\n  <div class=\"d-flex justify-content-between align-items-center flex-wrap p-2\">\n    <button  class=\"btn-long btn-color-outline mr-2\" (click)=\"modal.dismiss('Cross click')\">\n        <i class=\"fas fa-arrow-times\"></i>\n        Anulare\n    </button>\n\n    <button class=\"btn-long btn-color-fill ms-2\" type=\"submit\" (click)=\"addMedia()\">\n      <i class=\"fas fa-check\"></i>\n        Confirma\n    </button>\n</div>\n</div>\n</ng-template>\n\n\n<!--Delete modal-->\n\n<ng-template #deleteModal let-modal>\n <!--header-->\n  <div class=\"modal-header\">\n     <h4 class=\"modal-title\">Sterge media</h4>\n  </div>\n  <!--body-->\n  <div class=\"p-4\">\n    <p>Acțiunea de stergere media este permanentă și complet irevocabilă.\n      Doriti sa continuati?</p>\n  </div>\n  <!--footer-->\n<div class=\"d-flex justify-content-center p-2\">\n  <div class=\"d-flex justify-content-between align-items-center flex-wrap p-2\">\n      <button  class=\"btn-long btn-color-outline mr-2\" (click)=\"modal.dismiss('Cross click')\">\n        <i class=\"fas fa-arrow-times\"></i>\n        Anulare\n      </button>\n\n      <button class=\"btn-long btn-color-fill ms-2\" type=\"submit\" (click)=\"deleteMedia(mediaId)\">\n      <i class=\"fas fa-check\"></i>\n        Confirma\n      </button>\n    </div>\n</div>\n</ng-template>\n\n<!--End delete modal-->\n\n\n<!--Preview Image modal-->\n\n<ng-template #previewModal let-modal>\n  <!--header-->\n   <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{mediaAlternativeName}}</h4>\n   </div>\n   <!--body-->\n   <div class=\"p-4\">\n     <img src=\"{{mediaPath}}\" class=\"preview-img\">\n   </div>\n </ng-template>\n\n <!--Preview image modal-->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_cms_cms_module_ts.js.map