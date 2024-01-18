(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_domains_domains_module_ts"],{

/***/ 6076:
/*!*************************************************************************!*\
  !*** ./src/app/features/domains/domains-list/domains-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainsListComponent": () => (/* binding */ DomainsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _domains_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domains-list.component.html?ngResource */ 4508);
/* harmony import */ var _domains_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domains-list.component.scss?ngResource */ 98213);
/* harmony import */ var _domains_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_domains_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/domains.service */ 58820);






let DomainsListComponent = class DomainsListComponent {
  constructor(resourceService, domainService) {
    this.resourceService = resourceService;
    this.domainService = domainService;
    //Travel data
    this.travelCategories = 0;
    this.travelResTypes = 0;
    this.travelId = '63bfcca765dc3f3863af755c';
    //Health data
    this.healthCategories = 0;
    this.healthResTypes = 0;
    this.healthId = '63bfda2765dc3f3863af755f';
    //Culture data
    this.cultureCategories = 0;
    this.cultureResTypes = 0;
    this.cultureId = '63bfda7e65dc3f3863af7560';
    //Education data
    this.educationCategories = 0;
    this.educationResTypes = 0;
    this.educationId = '63bfda9365dc3f3863af7561';
    //Jobs data
    this.jobsCategories = 0;
    this.jobsResTypes = 0;
    this.jobsId = '63bfdaaa65dc3f3863af7562';
  }
  ngOnInit() {
    this.getCategoriesDataTravel();
    this.getCategoriesDataHealth();
    this.getCategoriesDataCulture();
    this.getCategoriesDataEducation();
    this.getCategoriesDataJobs();
  }
  getCategoriesDataTravel() {
    this.domainService.getDomainById(this.travelId).subscribe(domain => {
      this.travelImgPath = domain.image.filePath;
    });
    this.resourceService.getResourceByDomain(this.travelId).subscribe(res => {
      // console.log('TRAVEL', res);
      this.travelCategories = res.length;
      res.forEach(categ => {
        // console.log('categ', categ["resourceTypes"].length);
        this.travelResTypes += categ["resourceTypes"].length;
        // console.log(this.travelResTypes);
      });
    });
  }

  getCategoriesDataHealth() {
    this.domainService.getDomainById(this.healthId).subscribe(domain => {
      this.healthImgPath = domain.image.filePath;
    });
    this.resourceService.getResourceByDomain(this.healthId).subscribe(res => {
      // console.log('HEALTH', res);
      this.healthCategories = res.length;
      res.forEach(categ => {
        this.healthResTypes += categ["resourceTypes"].length;
        // console.log(this.healthResTypes);
      });
    });
  }

  getCategoriesDataCulture() {
    this.domainService.getDomainById(this.cultureId).subscribe(domain => {
      this.cultureImgPath = domain.image.filePath;
    });
    this.resourceService.getResourceByDomain(this.cultureId).subscribe(res => {
      // console.log('CULTURE', res);
      this.cultureCategories = res.length;
      res.forEach(categ => {
        this.cultureResTypes += categ["resourceTypes"].length;
        // console.log(this.cultureResTypes);
      });
    });
  }

  getCategoriesDataEducation() {
    this.domainService.getDomainById(this.educationId).subscribe(domain => {
      this.educationImgPath = domain.image.filePath;
    });
    this.resourceService.getResourceByDomain(this.educationId).subscribe(res => {
      // console.log('EDUCATION', res);
      this.educationCategories = res.length;
      res.forEach(categ => {
        this.educationResTypes += categ["resourceTypes"].length;
        // console.log(this.educationResTypes);
      });
    });
  }

  getCategoriesDataJobs() {
    this.domainService.getDomainById(this.jobsId).subscribe(domain => {
      this.jobsImgPath = domain.image.filePath;
    });
    this.resourceService.getResourceByDomain(this.jobsId).subscribe(res => {
      console.log('JOBS', res);
      this.jobsCategories = res.length;
      res.forEach(categ => {
        console.log(categ);
        this.jobsResTypes += categ["resourceTypes"].length;
        console.log(this.jobsResTypes);
      });
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }, {
    type: _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_3__.DomainsService
  }];
};
DomainsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-domains-list',
  template: _domains_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_domains_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DomainsListComponent);


/***/ }),

/***/ 56822:
/*!****************************************************!*\
  !*** ./src/app/features/domains/domains.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainsModule": () => (/* binding */ DomainsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _domains_list_domains_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domains-list/domains-list.component */ 6076);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-chips */ 59257);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _edit_domain_edit_domain_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-domain/edit-domain.component */ 30343);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);




















const routes = [{
  path: 'list',
  component: _domains_list_domains_list_component__WEBPACK_IMPORTED_MODULE_0__.DomainsListComponent
}, {
  path: ':id',
  component: _edit_domain_edit_domain_component__WEBPACK_IMPORTED_MODULE_1__.EditDomainComponent
}, {
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
}];
let DomainsModule = class DomainsModule {};
DomainsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_domains_list_domains_list_component__WEBPACK_IMPORTED_MODULE_0__.DomainsListComponent, _edit_domain_edit_domain_component__WEBPACK_IMPORTED_MODULE_1__.EditDomainComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_14__.MatLegacyPaginatorModule, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_15__.MatLegacyChipsModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_16__.MatLegacyInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_2__.DashboardHeaderComponent, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__.OverlayModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbTooltipModule]
})], DomainsModule);


/***/ }),

/***/ 30343:
/*!***********************************************************************!*\
  !*** ./src/app/features/domains/edit-domain/edit-domain.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditDomainComponent": () => (/* binding */ EditDomainComponent)
/* harmony export */ });
/* harmony import */ var _Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_domain_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-domain.component.html?ngResource */ 58887);
/* harmony import */ var _edit_domain_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-domain.component.scss?ngResource */ 33866);
/* harmony import */ var _edit_domain_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_edit_domain_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/domains.service */ 58820);
/* harmony import */ var _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/_services/modalmedia.service */ 34864);













let EditDomainComponent = class EditDomainComponent {
  constructor(resourceService, modalService, toastService, route, translate, domainService, formBuilder, modalMediaService, cdr) {
    this.resourceService = resourceService;
    this.modalService = modalService;
    this.toastService = toastService;
    this.route = route;
    this.translate = translate;
    this.domainService = domainService;
    this.formBuilder = formBuilder;
    this.modalMediaService = modalMediaService;
    this.cdr = cdr;
    this.isAdvanced = [];
    this.categorySearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
    this.resourcesList = [];
    this.resourceTypes = [];
    this.types = [];
    this.total = [];
    this.pageSizeArray = [10, 25, 100];
    this.sorting = 'order';
    this.dir = 'desc';
    this.domainThumbnail = null;
    this.domainIcon = null;
    this.domainImagesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      fileName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      filePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
    });
    this.domainIconForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      fileName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      filePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
    });
    this.domainVideoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      fileName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      filePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
    });
    this.categoryImagesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      fileName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      filePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
    });
    this.categoryIconForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      fileName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      filePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
    });
  }
  ngOnInit() {
    var _this = this;
    this.route.params.subscribe(param => {
      this.currentDomainId = param["id"];
    });
    this.pageNumber = 1;
    this.pageSize = 10;
    this.listCategories();
    this.getCurrentDomain();
    this.categoryInit();
    this.resTypeInit();
    this.modalMediaService.currentImagesArray.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (array) {
        if (array.length > 0) {
          if (array[0].for === 'domain-img') {
            _this.changeDomainImage(array[0].selectedMedia);
          } else if (array[0].for === 'domain-icon') {
            _this.changeDomainIcon(array[0].selectedMedia);
          } else if (array[0].for === 'category-img') {
            _this.changeCategoryImage(array[0].selectedMedia);
          } else if (array[0].for === 'category-icon') {
            _this.changeCategoryIcon(array[0].selectedMedia);
          } else if (array[0].for === 'resType-img') {
            _this.resTypeForm.get('image').patchValue(array[0].selectedMedia);
          } else if (array[0].for === 'resType-icn') {
            _this.resTypeForm.get('icon').patchValue(array[0].selectedMedia);
          } else if (array[0].for === 'domain-video') {
            _this.changeDomainVideo(array[0].selectedMedia);
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  changeDomainImage(imagesObj) {
    this.domainImagesForm.setValue(imagesObj);
    const domainToSend = {
      ...this.currentDomain,
      image: this.domainImagesForm.value
    };
    this.domainService.updateDomain(this.currentDomainId, domainToSend).subscribe(res => {
      if (res.success) {
        this.toastService.showToast('Success', 'Imaginea domeniului a fost încărcată!', "success");
      }
    }, error => {
      this.toastService.showToast('Error', 'Imaginea domeniului nu a putut fi încărcată!', "error");
    });
  }
  changeDomainVideo(videoObj) {
    this.domainVideoForm.setValue(videoObj);
    const domainToSend = {
      ...this.currentDomain,
      video: this.domainVideoForm.value
    };
    this.domainService.updateDomain(this.currentDomainId, domainToSend).subscribe(res => {
      if (res.success) {
        this.toastService.showToast('Success', 'Videoclipul domeniului a fost încărcat!', "success");
      }
    }, error => {
      this.toastService.showToast('Error', 'Videoclipul domeniului nu a putut fi încărcat!', "error");
    });
  }
  changeDomainIcon(iconObj) {
    this.domainIconForm.setValue(iconObj);
    const domainToSend = {
      ...this.currentDomain,
      icon: this.domainIconForm.value
    };
    this.domainService.updateDomain(this.currentDomainId, domainToSend).subscribe(res => {
      if (res.success) {
        this.toastService.showToast('Success', 'Iconul domeniului a fost încărcat!', "success");
      }
    }, error => {
      this.toastService.showToast('Error', 'Iconul domeniului nu a putut fi încărcat!', "error");
    });
  }
  changeCategoryImage(imagesObj) {
    this.categoryImagesForm.setValue(imagesObj);
    const categoryToSend = {
      ...this.categoryToChange,
      image: this.categoryImagesForm.value
    };
    console.log(categoryToSend);
    this.resourceService.updateResourceCategory(this.categoryToChange.id, categoryToSend).subscribe(res => {
      if (res.success) {
        this.toastService.showToast('Success', 'Imaginea categoriei a fost încărcată!', "success");
      }
    }, error => {
      this.toastService.showToast('Error', 'Imaginea categoriei nu a putut fi încărcată!', "error");
    });
  }
  changeCategoryIcon(iconObj) {
    this.categoryIconForm.setValue(iconObj);
    const categoryToSend = {
      ...this.categoryToChange,
      icon: this.categoryIconForm.value
    };
    this.resourceService.updateResourceCategory(this.categoryToChange.id, categoryToSend).subscribe(res => {
      if (res.success) {
        this.toastService.showToast('Success', 'Iconul categoriei a fost încărcat!', "success");
      }
    }, error => {
      this.toastService.showToast('Error', 'Iconul categoriei nu a putut fi încărcat!', "error");
    });
  }
  categoryInit() {
    this.categoryForm = this.formBuilder.group({
      nameEn: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      nameRo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      enableForList: [false]
    });
  }
  resTypeInit() {
    this.resTypeForm = this.formBuilder.group({
      nameEn: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      nameRo: [null],
      notificationHours: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]\\d*$')],
      location: [false],
      adultNumber: [false],
      adultChildrenNumber: [false],
      adultChildrenAndRoomNumber: [false],
      dateAsDay: [false],
      dateInterval: [false],
      dateAsHour: [false],
      hoursInterval: [false],
      icon: this.formBuilder.group({
        fileName: [null],
        filePath: [null]
      }),
      image: this.formBuilder.group({
        fileName: [null],
        filePath: [null]
      })
    }, {
      validators: this.customCheckValidation
    });
  }
  customCheckValidation(group) {
    let dateGroup = 0;
    let personGroup = 0;
    if (group.get('adultNumber').value) {
      personGroup++;
    }
    if (group.get('adultChildrenNumber').value) {
      personGroup++;
    }
    if (group.get('adultChildrenAndRoomNumber').value) {
      personGroup++;
    }
    if (group.get('dateAsDay').value) {
      dateGroup++;
    }
    if (group.get('dateInterval').value) {
      dateGroup++;
    }
    if (group.get('dateAsHour').value) {
      dateGroup++;
    }
    if (group.get('hoursInterval').value) {
      dateGroup++;
    }
    if (dateGroup > 1 && personGroup > 1) {
      console.log('DATE INVALID');
      return {
        dateInvalid: true,
        personInvalid: true
      };
    } else if (dateGroup > 1) {
      return {
        dateInvalid: true
      };
    } else if (personGroup > 1) {
      return {
        personInvalid: true
      };
    }
    return null;
  }
  getCurrentDomain() {
    // this.currentDomainImage=[];
    this.domainService.getDomainById(this.currentDomainId).subscribe(domain => {
      console.log("domeniu", domain);
      // this.currentDomainImage = domain.image;
      this.currentDomain = domain;
      this.domainImagesForm.patchValue(domain.image);
      this.domainIconForm.patchValue(domain.icon);
      this.domainVideoForm.patchValue(domain.video);
      console.log(this.domainImagesForm.value);
    });
  }
  openModal(templateRef) {
    this.categoryInit();
    this.resTypeInit();
    this.modalService.open(templateRef, {
      centered: true
    });
    console.log(this.resTypeForm.value);
  }
  //open modal to edit resource type
  openModalValue(templateRef, data) {
    this.currentResTypeData = data;
    this.modalService.open(templateRef, {
      centered: true
    });
    this.resTypeForm.patchValue({
      nameEn: data.nameEn,
      nameRo: data.nameRo,
      notificationHours: data.notificationHours,
      location: data.filterOption.location,
      adultNumber: data.filterOption.adultNumber,
      adultChildrenNumber: data.filterOption.adultChildrenNumber,
      adultChildrenAndRoomNumber: data.filterOption.adultChildrenAndRoomNumber,
      dateAsDay: data.filterOption.dateAsDay,
      dateInterval: data.filterOption.dateInterval,
      dateAsHour: data.filterOption.dateAsHour,
      hoursInterval: data.filterOption.hoursInterval,
      image: data.image,
      icon: data.icon
    });
    console.log('FORM pentru nameEN/nameRO', this.resTypeForm.value);
  }
  clickMore(index, resId) {
    this.isAdvanced[index] = !this.isAdvanced[index];
    for (let j = 0; j < this.resourcesList.length; j++) {
      if (j !== index) {
        this.isAdvanced[j] = false;
        this.removeCategoryThumbnail();
        this.removeCategoryIcon();
      }
    }
    this.resourceService.getResourceCategoryById(resId).subscribe(category => {
      this.categoryToChange = category;
      this.categoryImagesForm.patchValue(category.image);
      this.categoryIconForm.patchValue(category.icon);
      console.log('categtochange', category);
    });
  }
  listCategories() {
    this.total = [];
    const filterObject = {
      domainId: this.currentDomainId,
      name: this.categorySearch.value !== '' ? this.categorySearch.value : null
    };
    //get pentru categorii
    // this.resourceService.getResourceByDomain(this.currentDomain).subscribe((res: any) => {
    //     console.log('LISTA 2', res);
    // });
    this.resourceService.listCategoryFiltered(this.pageNumber - 1, this.pageSize, this.sorting, this.dir, filterObject).subscribe(res => {
      this.resourcesList = res["content"];
      this.paginationInfo = res;
      console.log('LISTA CATEGORII', this.resourcesList);
      //for each pentru fiecare categorie in parte si asignarea unui index
      this.resourcesList.forEach((resource, index) => {
        //get pentru tipurile de resurse din fiecare categorie
        this.resourceService.getAllResourceTypesByResourceCategory(resource.id).subscribe(types => {
          //array ce contine numele si id-ul fiecarei categorii pentru adaugare tip de resurse
          this.total.push({
            index: index,
            categoryId: resource.id,
            name: resource.name,
            resTypes: types
          });
          //array cu tipurile de resurse
          this.resourceTypes[index] = types;
          console.log('TYPES', types);
        });
      });
    });
  }
  updateCategory(event, categoryId) {
    console.log('update category', event.target.checked);
    this.domainService.changeResourceCategoryEnableForListStatus(categoryId, event.target.checked).subscribe(resp => {
      console.log(resp);
    });
  }
  //DE STERS EVENTUAL
  addNewCategory(categoryNameEn, categoryNameRo, enableForList) {
    this.categoryForm.markAllAsTouched();
    if (this.categoryForm.valid) {
      this.resourceService.getMaxOrderForCategory(this.currentDomainId).subscribe(maxOrder => {
        const category = {
          nameEn: categoryNameEn,
          nameRo: categoryNameRo,
          enableForList: enableForList,
          description: "",
          domainId: this.currentDomainId,
          icon: {
            fileName: "",
            filePath: ""
          },
          order: Number(maxOrder.reason) + 1,
          resourceTypes: []
        };
        console.log('OBIECT CATEGORY', category);
        this.resourceService.addResourceCategory(category).subscribe(res => {
          if (res.success) {
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.DOMAIN.ADD-CATEGORY-SUCCESS"), "success");
          }
          this.modalService.dismissAll();
          this.listCategories();
        }, () => {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.DOMAIN.INVALID-ID"), "error");
        });
      });
    }
  }
  deleteCategory(id) {
    this.resourceService.deleteResourceCategory(id).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.DOMAIN.DEL-CATEGORY-SUCCESS"), "success");
      }
      this.modalService.dismissAll();
      this.listCategories();
    }, err => {
      console.log(err);
      if (err.error.reason === 'cannotDeleteCategoryWithResources') {
        this.toastService.showToast('Error', "Nu poți șterge o categorie care este atribuită unei resurse existente!", 'error');
      } else {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.DOMAIN.INVALID-ID"), "error");
      }
    });
  }
  //select just one checkBox for person number and date, add-res-type modal
  //nr pers
  changeSelectionPersons(event, index) {
    this.nrPersIndex = event.target.checked ? index : undefined;
  }
  //date
  changeSelectionDate(event, index) {
    this.dateIndex = event.target.checked ? index : undefined;
  }
  pageChanged(event) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.total = [];
    const filterObject = {
      domainId: this.currentDomainId,
      name: this.categorySearch.value !== '' ? this.categorySearch.value : null
    };
    //get pentru categorii
    this.resourceService.listCategoryFiltered(this.pageNumber - 1, this.pageSize, this.sorting, this.dir, filterObject).subscribe(res => {
      this.resourcesList = res["content"];
      this.paginationInfo = res;
      //for each pentru fiecare categorie in parte si asignarea unui index
      this.resourcesList.forEach((resource, index) => {
        //get pentru tipurile de resurse din fiecare categorie
        this.resourceService.getAllResourceTypesByResourceCategory(resource["id"]).subscribe(types => {
          //array ce contine numele si id-ul fiecarei categorii pentru adaugare tip de resurse
          this.total.push({
            index: index,
            categoryId: resource["id"],
            name: resource["name"],
            resTypes: types
          });
          //array cu tipurile de resurse
          this.resourceTypes[index] = types;
        });
      });
    });
  }
  //for search field
  searchCategory() {
    this.total = [];
    this.pageNumber = 1;
    const filterObject = {
      domain: this.currentDomain,
      name: this.categorySearch.value !== '' ? this.categorySearch.value : null
    };
    //get pentru categorii
    this.resourceService.listCategoryFiltered(this.pageNumber - 1, this.pageSize, this.sorting, this.dir, filterObject).subscribe(res => {
      this.resourcesList = res["content"];
      console.log('FILTRAT', this.resourcesList);
      this.paginationInfo = res;
      //for each pentru fiecare categorie in parte si asignarea unui index
      this.resourcesList.forEach((resource, index) => {
        //get pentru tipurile de resurse din fiecare categorie
        this.resourceService.getAllResourceTypesByResourceCategory(resource["id"]).subscribe(types => {
          //array ce contine numele si id-ul fiecarei categorii pentru adaugare tip de resurse
          this.total.push({
            index: index,
            categoryId: resource["id"],
            name: resource["name"],
            resTypes: types
          });
          //array cu tipurile de resurse
          this.resourceTypes[index] = types;
        });
      });
    });
  }
  addResType(categoryId) {
    this.resTypeForm.markAllAsTouched();
    if (this.resTypeForm.valid) {
      this.resourceService.getMaxOrderForResType(categoryId).subscribe(maxOrder => {
        console.log('max order', maxOrder.reason);
        if (maxOrder.success) {
          const resType = {
            nameEn: this.resTypeForm.value.nameEn,
            nameRo: this.resTypeForm.value.nameRo,
            notificationHours: this.resTypeForm.value.notificationHours,
            description: '',
            categoryId: categoryId,
            icon: this.resTypeForm.value.icon,
            image: this.resTypeForm.value.image,
            order: Number(maxOrder.reason) + 1,
            filterOption: {
              location: this.resTypeForm.value.location,
              adultNumber: this.resTypeForm.value.adultNumber,
              adultChildrenNumber: this.resTypeForm.value.adultChildrenNumber,
              adultChildrenAndRoomNumber: this.resTypeForm.value.adultChildrenAndRoomNumber,
              dateAsDay: this.resTypeForm.value.dateAsDay,
              dateInterval: this.resTypeForm.value.dateInterval,
              dateAsHour: this.resTypeForm.value.dateAsHour,
              hoursInterval: this.resTypeForm.value.hoursInterval
            }
          };
          this.resourceService.addResourceType(resType).subscribe(res => {
            if (res.success) {
              this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.DOMAIN.ADD-RESTYPE-SUCCESS"), "success");
              this.modalService.dismissAll();
              this.listCategories();
              this.resTypeInit();
              console.log("din addResourceType: ", resType);
            }
          }, error => {
            console.log(error.error.reason);
            if (error.error.reason === "alreadyExists") {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.DOMAIN.ADD-RESTYPE-EXISTS"), "error");
            } else {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.DOMAIN.INVALID-ID"), "error");
            }
          });
        }
      });
    }
  }
  deleteResType(resTypeId) {
    console.log(resTypeId);
    this.resourceService.deleteResourceTypeById(resTypeId).subscribe(res => {
      // console.log(res);
      if (res.success) {
        this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.DOMAIN.DEL-RESTYPE-SUCCESS"), "success");
      }
      this.modalService.dismissAll();
      this.listCategories();
    }, error => {
      if (error.error.reason === 'cannotDeleteResourceTypeWithResources') {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), 'Nu poți șterge un tip de resursă dacă acesta este atribuit unei resurse existente.', "error");
      } else {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.DOMAIN.INVALID-ID"), "error");
      }
    });
  }
  updateResType(resTypeId) {
    console.log(resTypeId);
    this.resTypeForm.markAllAsTouched();
    if (this.resTypeForm.valid) {
      const resType = {
        ...this.currentResTypeData,
        nameEn: this.resTypeForm.value.nameEn,
        nameRo: this.resTypeForm.value.nameRo,
        notificationHours: this.resTypeForm.value.notificationHours,
        icon: this.resTypeForm.value.icon,
        image: this.resTypeForm.value.image,
        filterOption: {
          location: this.resTypeForm.value.location,
          adultNumber: this.resTypeForm.value.adultNumber,
          adultChildrenNumber: this.resTypeForm.value.adultChildrenNumber,
          adultChildrenAndRoomNumber: this.resTypeForm.value.adultChildrenAndRoomNumber,
          dateAsDay: this.resTypeForm.value.dateAsDay,
          dateInterval: this.resTypeForm.value.dateInterval,
          dateAsHour: this.resTypeForm.value.dateAsHour,
          hoursInterval: this.resTypeForm.value.hoursInterval
        }
      };
      this.resourceService.updateResourceType(resTypeId, resType).subscribe(res => {
        console.log('DUPA UPDATE', res);
        if (res.success) {
          this.listCategories();
          this.modalService.dismissAll();
        }
      });
    }
  }
  clearFormControlresType(formControl) {
    this.resTypeForm.get(formControl).patchValue(null);
  }
  clearFormControlCategory(formControl) {
    this.categoryForm.get(formControl).patchValue(null);
  }
  removeDomainIcon() {
    this.domainIconForm.setValue({
      filePath: '',
      fileName: ''
    });
  }
  removeDomainThumbnail() {
    this.domainImagesForm.setValue({
      filePath: '',
      fileName: ''
    });
  }
  removeDomainVideo() {
    this.domainVideoForm.setValue({
      filePath: '',
      fileName: ''
    });
  }
  removeCategoryThumbnail() {
    this.categoryImagesForm.setValue({
      filePath: '',
      fileName: ''
    });
  }
  removeCategoryIcon() {
    this.categoryIconForm.setValue({
      filePath: '',
      fileName: ''
    });
  }
  removeResTypeThumbnail() {
    this.resTypeForm.get('image').setValue({
      filePath: '',
      fileName: ''
    });
  }
  removeResTypeIcon() {
    this.resTypeForm.get('icon').setValue({
      filePath: '',
      fileName: ''
    });
  }
  openMedia(content) {
    this.modalMediaService.sendImagesToService([this.domainImagesForm.value]);
    this.modalService.open(content, {
      centered: true,
      size: 'xl'
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__.ResourcesService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
  }, {
    type: _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_5__.DomainsService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_6__.ModalMediaService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
  }];
};
EditDomainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-edit-domain',
  template: _edit_domain_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_6__.ModalMediaService],
  styles: [(_edit_domain_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], EditDomainComponent);


/***/ }),

/***/ 3145:
/*!*******************************************************!*\
  !*** ./src/app/shared/_services/resources.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesService": () => (/* binding */ ResourcesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let ResourcesService = class ResourcesService {
  // Trigger list changes
  triggerListChanges(message) {
    // Change the subject value
    this.listChanged.next(message);
  }
  constructor(http) {
    this.http = http;
    // Functions For Changes Detection
    this.listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.listChangedObs = this.listChanged.asObservable();
  }
  getAttributesFromTemplate(id) {
    return this.http.get('/bestinform/getAttributesFromTemplate?resourceTemplateId=' + id);
  }
  getListOfDomains() {
    return this.http.get('/bestinform/getListOfDomains');
  }
  getResourceByDomain(resourceDomain) {
    return this.http.get('/bestinform/getAllResourceCategoriesByResourceDomain?resourceDomain=' + encodeURIComponent(resourceDomain));
  }
  getResourceCategoryById(categoryId) {
    return this.http.get('/bestinform/getResourceCategoryById?resourceCategoryId=' + categoryId);
  }
  updateResourceCategory(categoryId, resCategory) {
    return this.http.put('/bestinform/updateResourceCategory?resourceCategoryId=' + categoryId, resCategory);
  }
  getAllResourceTypes() {
    return this.http.get('/bestinform/getAllResourceTypes');
  }
  getAllResourceCategoriesByResourceDomain(domainId, hideCategories) {
    return this.http.get('/bestinform/getAllResourceCategoriesByResourceDomain?resourceDomain=' + domainId + '&hideCategories=' + (hideCategories ? hideCategories : false));
  }
  getAllResourceTypesByResourceCategory(id) {
    return this.http.get('/bestinform/getAllResourceTypesByResourceCategory?resourceCategoryId=' + id);
  }
  deleteResourceTypeById(id) {
    return this.http.delete('/bestinform/deleteResourceTypeById?resourceTypeId=' + id);
  }
  getResourceTypeById(resourceTypeId) {
    return this.http.get('/bestinform/getResourceTypeById?resourceTypeId=' + resourceTypeId);
  }
  deleteResourceCategory(resourceId) {
    return this.http.delete('/bestinform/deleteCategoryById?resourceCategoryId=' + resourceId);
  }
  getMaxOrderForCategory(domainId) {
    return this.http.get('/bestinform/getMaxOrderByDomainId?domainId=' + domainId);
  }
  getMaxOrderForResType(categoryId) {
    return this.http.get('/bestinform/getMaxOrderByCategoryId?categoryId=' + categoryId);
  }
  addResourceCategory(category) {
    return this.http.post('/bestinform/addResourceCategory', category);
  }
  // addReviewToResource(reservationId, review:boolean) {
  //     return this.http.post('/bestinform/addReviewToResource?reservationId='+reservationId+'&review='+review,{});
  // }
  //changeReservationStatus
  addReviewToResource(reservationId, review) {
    return this.http.post('/bestinform/addReviewToResource?reservationId=' + reservationId + '&review=' + review, {});
  }
  addResourceType(resType) {
    return this.http.post('/bestinform/addResourceType', resType);
  }
  listCategoryFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listResourceCategoriesFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters);
  }
  //resources list
  listResourceFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listResourceFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters ? filters : {});
  }
  updateResourceType(resTypeId, resType) {
    return this.http.put('/bestinform/updateResourceType?resourceTypeId=' + resTypeId, resType);
  }
  getResourceById(resourceId) {
    return this.http.get('/bestinform/getResourceById?resourceId=' + resourceId);
  }
  getAttributes(attributesList) {
    return this.http.post('/bestinform/getAttributes', attributesList);
  }
  getAttributeCategories(categoryList) {
    return this.http.post('/bestinform/getAttributeCategories', categoryList);
  }
  //Favorites resources
  getMyFavoritesResources(language) {
    return this.http.get('/bestinform/getMyFavoriteResources?language=' + language);
  }
  deleteResourceFromFavorite(resourceId) {
    return this.http.post('/bestinform/deleteResourceFromFavorites?resourceId=' + resourceId, {});
  }
  addResourceToFavorite(resourceId) {
    return this.http.post('/bestinform/addResourceToFavorites?resourceId=' + resourceId, {});
  }
  getDomainById(domainId) {
    return this.http.get('/bestinform/getDomainById?domainId=' + domainId);
  }
  //temporar
  deleteResource(resourceId) {
    return this.http.delete('/bestinform/deleteResource?resourceId=' + resourceId);
  }
  changeStatusForResource(resourceId, status) {
    return this.http.put('/bestinform/changeResourceStatus?resourceId=' + resourceId + '&status=' + status, {});
  }
  getTimepickerByResourceId(resourceId) {
    return this.http.get('/bestinform/getBookingTimePickerByResourceId?resourceId=' + resourceId);
  }
  getRoomById(roomId) {
    return this.http.get('/bestinform/getRoomById?roomItemId=' + roomId);
  }
  getProductsByResourceId(resourceId) {
    return this.http.get('/bestinform/getProductListByResourceId?resourceId=' + resourceId);
  }
  getTimeslotsByResourceId(resourceId) {
    return this.http.get('/bestinform/getBookingTimeSlotListByResourceId?resourceId=' + resourceId);
  }
  getAvailableSlotByDate(timeslotId, date) {
    return this.http.get('/bestinform/getAvailableSlotsByDate?bookingTimeSlotId=' + timeslotId + '&date=' + date);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
ResourcesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ResourcesService);


/***/ }),

/***/ 98213:
/*!**************************************************************************************!*\
  !*** ./src/app/features/domains/domains-list/domains-list.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.domains-list .row {\n  row-gap: 24px;\n  margin-bottom: 24px;\n}\n.domains-list .row .travel {\n  position: relative;\n}\n.domains-list .row .travel .img-gradient {\n  background-size: cover;\n  height: 300px;\n  border-radius: 8px;\n  position: relative;\n}\n.domains-list .row .travel .img-gradient img {\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.domains-list .row .travel .img-gradient::after {\n  border-radius: 8px;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to right, #24398A, transparent);\n}\n.domains-list .row .health {\n  position: relative;\n}\n.domains-list .row .health .img-gradient {\n  background-size: cover;\n  height: 300px;\n  border-radius: 8px;\n  position: relative;\n}\n.domains-list .row .health .img-gradient img {\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.domains-list .row .health .img-gradient::after {\n  border-radius: 8px;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to right, #24398A, transparent);\n}\n.domains-list .row .culture {\n  position: relative;\n}\n.domains-list .row .culture .img-gradient {\n  background-size: cover;\n  height: 300px;\n  border-radius: 8px;\n  position: relative;\n}\n.domains-list .row .culture .img-gradient img {\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.domains-list .row .culture .img-gradient::after {\n  border-radius: 8px;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to right, #24398A, transparent);\n}\n.domains-list .row .education {\n  position: relative;\n}\n.domains-list .row .education .img-gradient {\n  background-size: cover;\n  height: 300px;\n  border-radius: 8px;\n  position: relative;\n}\n.domains-list .row .education .img-gradient img {\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.domains-list .row .education .img-gradient::after {\n  border-radius: 8px;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to right, #24398A, transparent);\n}\n.domains-list .row .jobs {\n  position: relative;\n}\n.domains-list .row .jobs .img-gradient {\n  background-size: cover;\n  height: 300px;\n  border-radius: 8px;\n  position: relative;\n}\n.domains-list .row .jobs .img-gradient img {\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.domains-list .row .jobs .img-gradient::after {\n  border-radius: 8px;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to right, #24398A, transparent);\n}\n\n.domain-title {\n  position: absolute;\n  left: 16px;\n  bottom: 40px;\n  font-size: 36px;\n  font-weight: 500;\n  color: var(--primary-background);\n}\n\n.domain-subtitle {\n  position: absolute;\n  left: 16px;\n  bottom: 8px;\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--primary-background);\n}\n\nbutton {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domains/domains-list/domains-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdE;EAEE,aAAA;EACA,mBAAA;AAgBJ;AAdI;EACE,kBAAA;AAgBN;AAfM;EACE,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;AAiBR;AAfQ;EACE,kBAAA;EACA,iBAAA;EACA,uBAAA;AAiBV;AAZM;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,2DAAA;AAcR;AAPI;EACE,kBAAA;AASN;AARM;EACE,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;AAUR;AARQ;EACE,kBAAA;EACA,iBAAA;EACA,uBAAA;AAUV;AALM;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,2DAAA;AAOR;AAHI;EACE,kBAAA;AAKN;AAJM;EACE,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;AAMR;AAJQ;EACE,kBAAA;EACA,iBAAA;EACA,uBAAA;AAMV;AADM;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,2DAAA;AAGR;AACI;EACE,kBAAA;AACN;AAAM;EACE,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;AAER;AAAQ;EACE,kBAAA;EACA,iBAAA;EACA,uBAAA;AAEV;AAGM;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,2DAAA;AADR;AAKI;EACE,kBAAA;AAHN;AAIM;EACE,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;AAFR;AAIQ;EACE,kBAAA;EACA,iBAAA;EACA,uBAAA;AAFV;AAOM;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,2DAAA;AALR;;AAaA;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,gCAAA;AAVF;;AAaA;EACE,kBAAA;EACA,UAAA;EACD,WAAA;EACC,eAAA;EACA,gBAAA;EACA,gCAAA;AAVF;;AAaA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;AAVF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.domains-list {\n  .row {\n\n    row-gap: 24px;\n    margin-bottom: 24px;\n\n    .travel {\n      position: relative;\n      .img-gradient{\n        background-size: cover;\n        height: 300px;\n        border-radius: 8px;\n        position:relative;\n\n        img{\n          border-radius: 8px;\n          object-fit: cover;\n          object-position: center;\n        }\n\n      }\n\n      .img-gradient::after {\n        border-radius: 8px;\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(to right, $primary-color, transparent);\n      }\n    }\n\n\n\n\n    .health {\n      position: relative;\n      .img-gradient{\n        background-size: cover;\n        height: 300px;\n        border-radius: 8px;\n        position:relative;\n\n        img{\n          border-radius: 8px;\n          object-fit: cover;\n          object-position: center;\n        }\n\n      }\n\n      .img-gradient::after {\n        border-radius: 8px;\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(to right, $primary-color, transparent);\n      }\n    }\n\n    .culture {\n      position: relative;\n      .img-gradient{\n        background-size: cover;\n        height: 300px;\n        border-radius: 8px;\n        position:relative;\n\n        img{\n          border-radius: 8px;\n          object-fit: cover;\n          object-position: center;\n        }\n\n      }\n\n      .img-gradient::after {\n        border-radius: 8px;\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(to right, $primary-color, transparent);\n      }\n    }\n\n    .education {\n      position: relative;\n      .img-gradient{\n        background-size: cover;\n        height: 300px;\n        border-radius: 8px;\n        position:relative;\n\n        img{\n          border-radius: 8px;\n          object-fit: cover;\n          object-position: center;\n        }\n\n      }\n\n      .img-gradient::after {\n        border-radius: 8px;\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(to right, $primary-color, transparent);\n      }\n    }\n\n    .jobs {\n      position: relative;\n      .img-gradient{\n        background-size: cover;\n        height: 300px;\n        border-radius: 8px;\n        position:relative;\n\n        img{\n          border-radius: 8px;\n          object-fit: cover;\n          object-position: center;\n        }\n\n      }\n\n      .img-gradient::after {\n        border-radius: 8px;\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(to right, $primary-color, transparent);\n      }\n    }\n  }\n\n\n}\n\n.domain-title{\n  position:absolute;\n  left:16px;\n  bottom: 40px;\n  font-size:36px;\n  font-weight: 500;\n  color:var(--primary-background);\n}\n\n.domain-subtitle{\n  position:absolute;\n  left:16px;\n bottom: 8px;\n  font-size:20px;\n  font-weight: 500;\n  color:var(--primary-background);\n}\n\nbutton{\n  position:absolute;\n  top:10px;\n  right:10px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33866:
/*!************************************************************************************!*\
  !*** ./src/app/features/domains/edit-domain/edit-domain.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.error-msg {\n  color: red;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.custom-tooltip ::ng-deep .tooltip-inner {\n  background-color: rgba(0, 0, 0, 0.6); /* Replace 'red' with the desired background color */\n}\n\n.resources-card.card {\n  margin-bottom: 1rem;\n}\n.resources-card.card .card-body {\n  padding: 48px;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-image-col .thumbnail-button {\n  width: 100%;\n  height: 350px;\n  background-color: rgba(36, 57, 138, 0.04);\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-image-col .thumbnail-button i {\n  font-size: 64px;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-image-col .thumbnail-button span {\n  font-size: 16px;\n  font-weight: 400;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-image-col .img-thumbnail {\n  height: 350px;\n  max-height: 350px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-image-col .img-thumbnail img {\n  height: 348px;\n  max-height: 348px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-icon-col .icon-button {\n  width: 30%;\n  height: 120px;\n  border: 2px solid rgba(36, 57, 138, 0.16);\n  color: rgba(36, 57, 138, 0.16);\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  font-size: 32px;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-icon-col .img-icon {\n  height: 120px;\n  max-height: 120px;\n  width: 30%;\n  border: 2px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-icon-col .img-icon img {\n  height: 116px;\n  max-height: 116px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-icon-col .icon-text {\n  font-size: 12px;\n  text-align: center;\n  width: 50%;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-icon-col .dimension-text {\n  color: #24398A;\n  font-size: 16px;\n  font-weight: 700;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-video .thumbnail-button {\n  width: 100%;\n  height: 350px;\n  background-color: rgba(36, 57, 138, 0.04);\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-video .thumbnail-button i {\n  font-size: 64px;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-video .thumbnail-button span {\n  font-size: 16px;\n  font-weight: 400;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-video .img-thumbnail {\n  height: 350px;\n  max-height: 350px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.resources-card.card .card-body .thumbnail-icon .upload-video .img-thumbnail video {\n  height: 348px;\n  max-height: 348px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.resources-card.card .card-body .row {\n  row-gap: 1.5rem;\n}\n.resources-card.card .card-body .resources .resource {\n  border-bottom: 1px solid rgba(36, 57, 138, 0.16);\n  margin-bottom: 16px;\n}\n.resources-card.card .card-body .resources .resource i.fa-chevron-up, .resources-card.card .card-body .resources .resource i.fa-chevron-down, .resources-card.card .card-body .resources .resource i.fa-times {\n  padding: 16px;\n  cursor: pointer;\n  color: #24398A;\n}\n.resources-card.card .card-body .resources .resource .resource-title {\n  font-size: 24px;\n  font-weight: 700;\n}\n.resources-card.card .card-body .resources .resource .hide {\n  display: none;\n}\n.resources-card.card .card-body .resources .resource .upload-image-res .thumbnail-res {\n  width: 100%;\n  height: 240px;\n  background-color: rgba(36, 57, 138, 0.04);\n  border: 2px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.08);\n  font-size: 24px;\n  font-weight: 600;\n  padding: 0;\n}\n.resources-card.card .card-body .resources .resource .upload-image-res .thumbnail-res i {\n  font-size: 64px;\n}\n.resources-card.card .card-body .resources .resource .upload-image-res .thumbnail-res span {\n  font-size: 16px;\n  font-weight: 400;\n}\n.resources-card.card .card-body .resources .resource .upload-image-res .img-thumbnail {\n  height: 240px;\n  max-height: 240px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.resources-card.card .card-body .resources .resource .upload-image-res .img-thumbnail img {\n  height: 238px;\n  max-height: 238px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.resources-card.card .card-body .resources .resource .upload-image-res .img-thumbnail .delete {\n  color: #FFFFFF !important;\n}\n.resources-card.card .card-body .resources .resource .upload-icon-res .icon-button {\n  width: 100%;\n  height: 120px;\n  border: 2px solid rgba(36, 57, 138, 0.16);\n  color: rgba(36, 57, 138, 0.16);\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  font-size: 32px;\n}\n.resources-card.card .card-body .resources .resource .upload-icon-res .icon-res {\n  height: 120px;\n  max-height: 120px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.resources-card.card .card-body .resources .resource .upload-icon-res .icon-res img {\n  height: 118px;\n  max-height: 118px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.resources-card.card .card-body .resources .resource .upload-icon-res .icon-res .delete {\n  color: #FFFFFF !important;\n}\n.resources-card.card .card-body .resources .resource .upload-icon-res .icon-text {\n  font-size: 12px;\n}\n.resources-card.card .card-body .resources .resource .upload-icon-res .dimension-text {\n  color: #24398A;\n  font-size: 16px;\n  font-weight: 700;\n}\n.resources-card.card .card-body .resources .resource .card-res-types .header-res-types {\n  background-color: rgba(36, 57, 138, 0.16);\n}\n.resources-card.card .card-body .resources .resource .card-res-types .header-res-types .title-res-card {\n  font-weight: 600;\n  font-size: 20px;\n  color: rgba(36, 57, 138, 0.5);\n  text-align: center;\n}\n.resources-card.card .card-body .resources .resource .card-res-types .body-res-types {\n  background-color: rgba(36, 57, 138, 0.08);\n}\n.resources-card.card .card-body .resources .resource .card-res-types .body-res-types .card-res .res-body {\n  background-color: var(--primary-background);\n  padding: 8px 16px;\n}\n.resources-card.card .card-body .resources .resource .card-res-types .body-res-types .card-res .line-clamp {\n  height: 2.5rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.resources-card.card .card-body .resources .resource .card-res-types .body-res-types .card-res button.x-button-location {\n  border-top-right-radius: 8px;\n  border: transparent;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(0deg, #24398A, #24398A), #FFFFFF;\n}\n.resources-card.card .card-body .resources .resource .card-res-types .body-res-types .card-res button.x-button-location i {\n  color: white;\n}\n.resources-card.card .card-body .resources .resource .card-res-types .body-res-types .card-res button.edit-button-location {\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(0deg, rgba(36, 57, 138, 0.48), rgba(36, 57, 138, 0.48)), #FFFFFF;\n  border-bottom-right-radius: 8px;\n  color: white;\n  border: transparent;\n}\n.resources-card.card .card-body .resources .resource .card-res-types .body-res-types .btn-add-res {\n  border: 1px dashed rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.16);\n  background-color: transparent;\n  height: 62px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.resources-card.card .card-footer p {\n  margin: 0;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-resource.card > div {\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), var(--primary-background);\n}\n\n.add-design.card > div {\n  background: #FFFFFF !important;\n}\n\n.add-design.card {\n  border: none !important;\n}\n\n.card-resource.card {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.card-resource.card .card-body {\n  gap: 1rem;\n  letter-spacing: -0.02em;\n  line-height: 140%;\n}\n.card-resource.card .card-body h3 {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 140%;\n  margin-bottom: 4px;\n}\n.card-resource.card .card-body p {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 140%;\n  margin-bottom: 5px;\n}\n.card-resource.card .card-body ::ng-deep .mat-form-field-appearance-outline .mat-form-field-suffix {\n  top: 0 !important;\n}\n.card-resource.card .card-body mat-form-field {\n  color: #24398A;\n}\n.card-resource.card .card-body mat-form-field mat-error {\n  color: red;\n}\n.card-resource.card .card-body mat-form-field i {\n  top: 0;\n  background-color: var(--primary-background);\n  border-radius: 100%;\n  color: rgba(36, 57, 138, 0.24);\n}\n.card-resource.card .card-footer .row {\n  row-gap: 1rem;\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n}\n.modal-card.card .card-header h3 {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n.modal-card.card .card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.modal-card.card .card-body .modal-title {\n  font-size: 16px;\n  color: #231F20;\n  font-weight: 700;\n}\n.modal-card.card .card-body .thumbnail-res-type-col .thumbnail-res-type {\n  height: 240px;\n  background-color: rgba(36, 57, 138, 0.04);\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  color: rgba(36, 57, 138, 0.08);\n  font-size: 16px;\n  font-weight: 600;\n}\n.modal-card.card .card-body .thumbnail-res-type-col .thumbnail-res-type i {\n  font-size: 64px;\n}\n.modal-card.card .card-body .thumbnail-res-type-col .thumbnail-res-type span {\n  font-size: 16px;\n  font-weight: 400;\n}\n.modal-card.card .card-body .thumbnail-res-type-col .img-thumbnail-restype {\n  height: 240px;\n  max-height: 240px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.modal-card.card .card-body .thumbnail-res-type-col .img-thumbnail-restype img {\n  height: 238px;\n  max-height: 238px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.modal-card.card .card-body .thumbnail-res-type-col .img-thumbnail-restype .delete {\n  color: #FFFFFF !important;\n}\n.modal-card.card .card-body .icon-res-type .domain-title {\n  font-size: 24px;\n  color: #24398A;\n  font-weight: 700;\n}\n.modal-card.card .card-body .icon-res-type .icon-text {\n  font-size: 12px;\n  width: 50%;\n}\n.modal-card.card .card-body .icon-res-type .icon-button-res-type {\n  width: 100%;\n  height: 120px;\n  min-height: 120px;\n  border: 2px solid rgba(36, 57, 138, 0.16);\n  color: rgba(36, 57, 138, 0.16);\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  font-size: 32px;\n}\n.modal-card.card .card-body .icon-res-type .icon-thumbnail-restype {\n  height: 120px;\n  max-height: 120px;\n  width: 100%;\n  border: 2px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  position: relative;\n  padding: 0;\n}\n.modal-card.card .card-body .icon-res-type .icon-thumbnail-restype img {\n  height: 118px;\n  max-height: 118px;\n  border-radius: 8px;\n  object-fit: cover;\n  object-position: center;\n}\n.modal-card.card .card-footer .row {\n  row-gap: 1rem;\n}\n\n.domain-title {\n  font-size: 24px;\n  color: #24398A;\n  font-weight: 700;\n}\n\n.btn-thumbnail, .btn-icon {\n  right: 10px;\n  top: 10px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: var(--primary-background);\n  background: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n}\n.btn-thumbnail i, .btn-icon i {\n  color: var(--primary-background);\n}\n\n.checkbox-container.container {\n  /* The container */\n  /* Hide the browser's default checkbox */\n  /* Create a custom checkbox */\n  /* On mouse-over, add a grey background color */\n  /* When the checkbox is checked, add a blue background */\n  /* Create the checkmark/indicator (hidden when not checked) */\n  /* Show the checkmark when checked */\n  /* Style the checkmark/indicator */\n}\n.checkbox-container.container .container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.checkbox-container.container .container span {\n  color: #231F20;\n}\n.checkbox-container.container .container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkbox-container.container .checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 24px;\n  width: 24px;\n  background-color: var(--primary-background);\n  border: 1px solid rgba(35, 31, 32, 0.24);\n  border-radius: 4px;\n}\n.checkbox-container.container .container:hover input ~ .checkmark {\n  background-color: var(--primary-background);\n}\n.checkbox-container.container .container input:checked ~ .checkmark {\n  background-color: white;\n}\n.checkbox-container.container .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.checkbox-container.container .container input:checked ~ .checkmark:after {\n  display: block;\n}\n.checkbox-container.container .container .checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid #231F20;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/domains/edit-domain/edit-domain.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,UAAA;AAkBF;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDZY;ECaZ,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAZA;EACE,2CAAA;AAeF;;AAXA;EACI,oCAAA,EAAA,oDAAA;AAcJ;;AATA;EACE,mBAAA;AAYF;AANE;EACE,aAAA;AAQJ;AADQ;EACE,WAAA;EACA,aAAA;EACA,yCAAA;EACA,yCAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AAGV;AADU;EACE,eAAA;AAGZ;AAAU;EACE,eAAA;EACA,gBAAA;AAEZ;AAEQ;EACE,aAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AAAV;AAEU;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AAAZ;AAMQ;EACE,UAAA;EACA,aAAA;EACA,yCAAA;EACA,8BAAA;EACA,2CAAA;EACA,kBAAA;EACA,eAAA;AAJV;AAQQ;EACE,aAAA;EACA,iBAAA;EACA,UAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AANV;AAQU;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AANZ;AAWQ;EACE,eAAA;EACA,kBAAA;EACA,UAAA;AATV;AAYQ;EACE,cD5HM;EC6HN,eAAA;EACA,gBAAA;AAVV;AAeQ;EACE,WAAA;EACA,aAAA;EACA,yCAAA;EACA,yCAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AAbV;AAeU;EACE,eAAA;AAbZ;AAgBU;EACE,eAAA;EACA,gBAAA;AAdZ;AAkBQ;EACE,aAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AAhBV;AAkBU;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AAhBZ;AAsBI;EACE,eAAA;AApBN;AAyBM;EACE,gDAAA;EACA,mBAAA;AAvBR;AAyBQ;EACE,aAAA;EACA,eAAA;EACA,cDvLM;ACgKhB;AA0BQ;EACE,eAAA;EACA,gBAAA;AAxBV;AA2BQ;EACE,aAAA;AAzBV;AA6BU;EACE,WAAA;EACA,aAAA;EACA,yCAAA;EACA,yCAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;EACA,UAAA;AA3BZ;AA6BY;EACE,eAAA;AA3Bd;AA8BY;EACE,eAAA;EACA,gBAAA;AA5Bd;AAgCU;EACE,aAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AA9BZ;AAgCY;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AA9Bd;AAiCY;EACE,yBAAA;AA/Bd;AAuCU;EACE,WAAA;EACA,aAAA;EACA,yCAAA;EACA,8BAAA;EACA,2CAAA;EACA,kBAAA;EACA,eAAA;AArCZ;AAwCU;EACE,aAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AAtCZ;AAwCY;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AAtCd;AAyCY;EACE,yBAAA;AAvCd;AA2CU;EACE,eAAA;AAzCZ;AA4CU;EACE,cDtRI;ECuRJ,eAAA;EACA,gBAAA;AA1CZ;AA+CU;EACE,yCAAA;AA7CZ;AA+CY;EACE,gBAAA;EACA,eAAA;EACA,6BAAA;EACA,kBAAA;AA7Cd;AAiDU;EACE,yCAAA;AA/CZ;AAmDc;EACE,2CAAA;EACA,iBAAA;AAjDhB;AAqDc;EACE,cAAA;EACA,oBAAA;EACA,qBAAA;EACA,4BAAA;EACA,gBAAA;AAnDhB;AAsDc;EACE,4BAAA;EACA,mBAAA;EACA,iIAAA;AApDhB;AAsDgB;EACE,YAAA;AApDlB;AAwDc;EACE,iKAAA;EACA,+BAAA;EACA,YAAA;EACA,mBAAA;AAtDhB;AA0DY;EACE,0CAAA;EACA,kBAAA;EACA,8BAAA;EACA,6BAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;AAxDd;AAkEI;EACE,SAAA;EACA,cDhWU;ECiWV,gBAAA;EACA,eAAA;AAhEN;;AAyEA;EACE,2CAAA;AAtEF;;AAyEA;EACE,8GAAA;AAtEF;;AAyEA;EACE,8BAAA;AAtEF;;AAyEA;EACE,uBAAA;AAtEF;;AAyEA;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;AAtEF;AAwEE;EACE,SAAA;EACA,uBAAA;EACA,iBAAA;AAtEJ;AAwEI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAtEN;AAyEI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAvEN;AA0EI;EACE,iBAAA;AAxEN;AA2EI;EACE,cDxZU;AC+UhB;AA2EM;EACE,UAAA;AAzER;AA6EQ;EACE,MAAA;EACA,2CAAA;EACA,mBAAA;EACA,8BAAA;AA3EV;AA0FI;EACE,aAAA;AAxFN;;AA6FA;EACE,eAAA;AA1FF;AA6FI;EACE,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,cDhcU;ACqWhB;AAgGI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDrcM;ACuWZ;AAiGI;EACE,eAAA;EACA,cD3cE;EC4cF,gBAAA;AA/FN;AAoGM;EACE,aAAA;EACA,yCAAA;EACA,yCAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AAlGR;AAoGQ;EACE,eAAA;AAlGV;AAqGQ;EACE,eAAA;EACA,gBAAA;AAnGV;AAuGM;EACE,aAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AArGR;AAuGQ;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AArGV;AAwGQ;EACE,yBAAA;AAtGV;AA6GM;EACE,eAAA;EACA,cDlgBQ;ECmgBR,gBAAA;AA3GR;AA8GM;EACE,eAAA;EACA,UAAA;AA5GR;AAgHM;EACE,WAAA;EACA,aAAA;EACA,iBAAA;EACA,yCAAA;EACA,8BAAA;EACA,2CAAA;EACA,kBAAA;EACA,eAAA;AA9GR;AAiHM;EACE,aAAA;EACA,iBAAA;EACA,WAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AA/GR;AAiHQ;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AA/GV;AAwHI;EACE,aAAA;AAtHN;;AA4HA;EACE,eAAA;EACA,cDvjBc;ECwjBd,gBAAA;AAzHF;;AA6HA;EACE,WAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,gCAAA;EACA,mCAAA;EACA,mBAAA;AA1HF;AA2HE;EACE,gCAAA;AAzHJ;;AA6HA;EACE,kBAAA;EAiBA,wCAAA;EASA,6BAAA;EAYA,+CAAA;EAKA,wDAAA;EAKA,6DAAA;EAOA,oCAAA;EAKA,kCAAA;AA/KF;AAoHE;EACE,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EAGA,iBAAA;AAlHJ;AAoHI;EACE,cDvlBE;ACqeR;AAuHE;EACE,kBAAA;EACA,UAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;AArHJ;AAyHE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,2CAAA;EACA,wCAAA;EACA,kBAAA;AAvHJ;AA2HE;EACE,2CAAA;AAzHJ;AA6HE;EACE,uBAAA;AA3HJ;AA+HE;EACE,WAAA;EACA,kBAAA;EACA,aAAA;AA7HJ;AAiIE;EACE,cAAA;AA/HJ;AAmIE;EACE,SAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,qBAAA;EACA,yBAAA;EAGA,wBAAA;AAjIJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.error-msg{\n  color: red;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n}\n\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n\n.custom-tooltip ::ng-deep .tooltip-inner {\n    background-color:rgba(0, 0, 0, 0.6); /* Replace 'red' with the desired background color */\n  }\n\n\n\n.resources-card.card {\n  margin-bottom: 1rem;\n\n  .card-header {\n\n  }\n\n  .card-body {\n    padding: 48px;\n\n    .thumbnail-icon {\n\n      .upload-image-col {\n\n\n        .thumbnail-button {\n          width: 100%;\n          height: 350px;\n          background-color: rgba($primary-color, 0.04);\n          border: 2px solid rgba($primary-color, 0.08);\n          border-radius: 8px;\n          color: rgba($primary-color, 0.08);\n          font-size: 24px;\n          font-weight: 600;\n\n          i {\n            font-size: 64px;\n          }\n\n          span {\n            font-size: 16px;\n            font-weight: 400;\n          }\n        }\n\n        .img-thumbnail {\n          height: 350px;\n          max-height: 350px;\n          border: 1px solid rgba($primary-color, 0.16);\n          border-radius: 8px;\n          position: relative;\n          padding: 0;\n\n          img {\n            height: 348px;\n            max-height: 348px;\n            border-radius: 8px;\n            object-fit: cover;\n            object-position: center;\n          }\n        }\n      }\n\n      .upload-icon-col {\n        .icon-button {\n          width: 30%;\n          height: 120px;\n          border: 2px solid rgba($primary-color, 0.16);\n          color: rgba($primary-color, 0.16);\n          background-color: var(--primary-background);\n          border-radius: 8px;\n          font-size: 32px;\n        }\n\n\n        .img-icon {\n          height: 120px;\n          max-height: 120px;\n          width: 30%;\n          border: 2px solid rgba($primary-color, 0.16);\n          border-radius: 8px;\n          position: relative;\n          padding: 0;\n\n          img {\n            height: 116px;\n            max-height: 116px;\n            border-radius: 8px;\n            object-fit: cover;\n            object-position: center;\n          }\n        }\n\n\n        .icon-text {\n          font-size: 12px;\n          text-align: center;\n          width: 50%;\n        }\n\n        .dimension-text {\n          color: $primary-color;\n          font-size: 16px;\n          font-weight: 700;\n        }\n      }\n\n      .upload-video{\n        .thumbnail-button {\n          width: 100%;\n          height: 350px;\n          background-color: rgba($primary-color, 0.04);\n          border: 2px solid rgba($primary-color, 0.08);\n          border-radius: 8px;\n          color: rgba($primary-color, 0.08);\n          font-size: 24px;\n          font-weight: 600;\n\n          i {\n            font-size: 64px;\n          }\n\n          span {\n            font-size: 16px;\n            font-weight: 400;\n          }\n        }\n\n        .img-thumbnail {\n          height: 350px;\n          max-height: 350px;\n          border: 1px solid rgba($primary-color, 0.16);\n          border-radius: 8px;\n          position: relative;\n          padding: 0;\n\n          video {\n            height: 348px;\n            max-height: 348px;\n            border-radius: 8px;\n            object-fit: cover;\n            object-position: center;\n          }\n        }\n      }\n    }\n\n    .row {\n      row-gap: 1.5rem;\n    }\n\n    .resources {\n\n      .resource {\n        border-bottom: 1px solid rgba(36, 57, 138, 0.16);\n        margin-bottom: 16px;\n\n        i.fa-chevron-up, i.fa-chevron-down, i.fa-times {\n          padding: 16px;\n          cursor: pointer;\n          color: $primary-color\n        }\n\n        .resource-title {\n          font-size: 24px;\n          font-weight: 700;\n        }\n\n        .hide {\n          display: none;\n        }\n\n        .upload-image-res {\n          .thumbnail-res{\n            width: 100%;\n            height: 240px;\n            background-color: rgba($primary-color, 0.04);\n            border: 2px solid rgba($primary-color, 0.16);\n            border-radius: 8px;\n            color: rgba($primary-color, 0.08);\n            font-size: 24px;\n            font-weight: 600;\n            padding: 0;\n\n            i {\n              font-size: 64px;\n            }\n\n            span {\n              font-size: 16px;\n              font-weight: 400;\n            }\n          }\n\n          .img-thumbnail {\n            height: 240px;\n            max-height: 240px;\n            border: 1px solid rgba($primary-color, 0.16);\n            border-radius: 8px;\n            position: relative;\n            padding: 0;\n\n            img {\n              height: 238px;\n              max-height: 238px;\n              border-radius: 8px;\n              object-fit: cover;\n              object-position: center;\n            }\n\n            .delete{\n              color:$background-primary!important;\n            }\n\n\n          }\n        }\n\n        .upload-icon-res {\n          .icon-button {\n            width: 100%;\n            height: 120px;\n            border: 2px solid rgba($primary-color, 0.16);\n            color: rgba($primary-color, 0.16);\n            background-color: var(--primary-background);\n            border-radius: 8px;\n            font-size: 32px;\n          }\n\n          .icon-res{\n            height:120px;\n            max-height: 120px;\n            border: 1px solid rgba($primary-color, 0.16);\n            border-radius: 8px;\n            position: relative;\n            padding: 0;\n\n            img {\n              height: 118px;\n              max-height: 118px;\n              border-radius: 8px;\n              object-fit: cover;\n              object-position: center;\n            }\n\n            .delete{\n              color:$background-primary!important;\n            }\n          }\n\n          .icon-text {\n            font-size: 12px;\n          }\n\n          .dimension-text {\n            color: $primary-color;\n            font-size: 16px;\n            font-weight: 700;\n          }\n        }\n\n        .card-res-types {\n          .header-res-types {\n            background-color: rgba($primary-color, 0.16);\n\n            .title-res-card {\n              font-weight: 600;\n              font-size: 20px;\n              color: rgba($primary-color, 0.5);\n              text-align: center;\n            }\n          }\n\n          .body-res-types {\n            background-color: rgba($primary-color, 0.08);\n\n            .card-res {\n\n              .res-body {\n                background-color: var(--primary-background);\n                padding: 8px 16px;\n              }\n\n\n              .line-clamp{\n                height: 2.5rem;\n                display: -webkit-box;\n                -webkit-line-clamp: 2;\n                -webkit-box-orient: vertical;\n                overflow: hidden;\n              }\n\n              button.x-button-location {\n                border-top-right-radius: 8px;\n                border: transparent;\n                background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(0deg, #24398A, #24398A), #FFFFFF;\n\n                i {\n                  color: white;\n                }\n              }\n\n              button.edit-button-location {\n                background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(0deg, rgba(36, 57, 138, 0.48), rgba(36, 57, 138, 0.48)), #FFFFFF;;\n                border-bottom-right-radius: 8px;\n                color: white;\n                border: transparent;\n              }\n            }\n\n            .btn-add-res {\n              border: 1px dashed rgba($primary-color, 0.16);\n              border-radius: 8px;\n              color: rgba($primary-color, 0.16);\n              background-color: transparent;\n              height: 62px;\n              font-size: 16px;\n              font-weight: 600;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .card-footer {\n\n    p {\n      margin: 0;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 16px;\n    }\n  }\n}\n\n\n\n//-----Modal----\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-resource.card > div {\n  background: linear-gradient(0deg, rgba($primary-color, 0.04), rgba($primary-color, 0.04)), var(--primary-background);\n}\n\n.add-design.card > div {\n  background: $background-primary !important;\n}\n\n.add-design.card {\n  border: none !important;\n}\n\n.card-resource.card {\n  border: 1px solid $primary-color;\n  border-radius: 8px;\n  overflow: hidden;\n\n  .card-body {\n    gap: 1rem;\n    letter-spacing: -0.02em;\n    line-height: 140%;\n\n    h3 {\n      font-weight: 700;\n      font-size: 24px;\n      line-height: 140%;\n      margin-bottom: 4px;\n    }\n\n    p {\n      font-weight: 300;\n      font-size: 16px;\n      line-height: 140%;\n      margin-bottom: 5px;\n    }\n\n    ::ng-deep .mat-form-field-appearance-outline .mat-form-field-suffix{\n      top:0!important;\n    }\n\n    mat-form-field {\n      color: $primary-color;\n\n      mat-error{\n        color:red;\n      }\n\n\n        i{\n          top:0;\n          background-color: var(--primary-background);\n          border-radius: 100%;\n          color:rgba($primary-color, 0.24);\n        }\n\n\n\n      //.btn-icn {\n      //  border: none;\n      //  background: transparent;\n      //  color: $primary-color;\n      //}\n    }\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n\n  .card-header {\n    h3 {\n      font-size: 24px;\n      font-weight: 600;\n      letter-spacing: -0.02em;\n      color: $primary-color;\n    }\n  }\n\n  .card-body {\n    & > p {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n    }\n\n    .modal-title {\n      font-size: 16px;\n      color: $title;\n      font-weight: 700;\n    }\n\n\n    .thumbnail-res-type-col{\n      .thumbnail-res-type{\n        height: 240px;\n        background-color: rgba($primary-color, 0.04);\n        border: 2px solid rgba($primary-color, 0.08);\n        border-radius: 8px;\n        color: rgba($primary-color, 0.08);\n        font-size: 16px;\n        font-weight: 600;\n\n        i {\n          font-size: 64px;\n        }\n\n        span {\n          font-size: 16px;\n          font-weight: 400;\n        }\n      }\n\n      .img-thumbnail-restype{\n        height:240px;\n        max-height: 240px;\n        border: 1px solid rgba($primary-color, 0.16);\n        border-radius: 8px;\n        position: relative;\n        padding: 0;\n\n        img {\n          height: 238px;\n          max-height: 238px;\n          border-radius: 8px;\n          object-fit: cover;\n          object-position: center;\n        }\n\n        .delete{\n          color:$background-primary!important;\n        }\n      }\n\n    }\n\n    .icon-res-type{\n      .domain-title {\n        font-size: 24px;\n        color: $primary-color;\n        font-weight: 700;\n      }\n\n      .icon-text {\n        font-size: 12px;\n        width: 50%;\n      }\n\n\n      .icon-button-res-type {\n        width: 100%;\n        height: 120px;\n        min-height: 120px;\n        border: 2px solid rgba($primary-color, 0.16);\n        color: rgba($primary-color, 0.16);\n        background-color: var(--primary-background);\n        border-radius: 8px;\n        font-size: 32px;\n      }\n\n      .icon-thumbnail-restype {\n        height: 120px;\n        max-height: 120px;\n        width: 100%;\n        border: 2px solid rgba($primary-color, 0.16);\n        border-radius: 8px;\n        position: relative;\n        padding: 0;\n\n        img {\n          height: 118px;\n          max-height: 118px;\n          border-radius: 8px;\n          object-fit: cover;\n          object-position: center;\n        }}\n\n\n    }\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n////general classes\n.domain-title {\n  font-size: 24px;\n  color: $primary-color;\n  font-weight: 700;\n}\n\n\n.btn-thumbnail, .btn-icon{\n  right:10px;\n  top: 10px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: var(--primary-background);\n  background: rgba($primary-color, 0.16);\n  border-radius: 100%;\n  i{\n    color:var(--primary-background);\n  }\n}\n\n.checkbox-container.container{\n  /* The container */\n  .container {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    span{\n      color: $title;\n    }\n  }\n\n  /* Hide the browser's default checkbox */\n  .container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 24px;\n    width: 24px;\n    background-color: var(--primary-background);\n    border: 1px solid rgba(35, 31, 32, 0.24);\n    border-radius: 4px;\n  }\n\n  /* On mouse-over, add a grey background color */\n  .container:hover input ~ .checkmark {\n    background-color: var(--primary-background);\n  }\n\n  /* When the checkbox is checked, add a blue background */\n  .container input:checked ~ .checkmark {\n    background-color: white;\n  }\n\n  /* Create the checkmark/indicator (hidden when not checked) */\n  .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n\n  /* Show the checkmark when checked */\n  .container input:checked ~ .checkmark:after {\n    display: block;\n  }\n\n  /* Style the checkmark/indicator */\n  .container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid $title;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4508:
/*!**************************************************************************************!*\
  !*** ./src/app/features/domains/domains-list/domains-list.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"{{'TITLES.DOMAINS-LIST' | translate}}\"></app-dashboard-header>\n<div class=\"domains-list\">\n    <div class=\"row\">\n        <div class=\"col-12 col-md-6\">\n            <div class=\"travel\">\n                <div class=\"img-gradient\">\n                    <img [src]=\"travelImgPath\" alt=\"{{'RESOURCE.DOMAIN.TRAVEL_ENTERTAINMENT' | translate}}\" class=\"w-100 h-100 img-fluid\">\n                </div>\n                <button type=\"button\" routerLink=\"../{{travelId}}\" class=\"btn-round btn-white-fill\" id=\"btn-navigate-to-travel&entertainment\"><i class=\"fas fa-pen\"></i></button>\n                <p class=\"domain-title mb-0\">{{'RESOURCE.DOMAIN.TRAVEL_ENTERTAINMENT' | translate}}</p>\n                <p class=\"domain-subtitle d-inline-flex justify-content-start mb-0\"><span class=\"me-2\">{{travelCategories}} {{'GENERAL.CATEGORIES' | translate}}</span> <span>{{travelResTypes}} {{'GENERAL.RES-TYPES' | translate}}</span></p>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-6\">\n            <div class=\"health\">\n                <div class=\"img-gradient\">\n                    <img [src]=\"healthImgPath\" alt=\"{{'RESOURCE.DOMAIN.HEALTHCARE' | translate}}\" class=\"w-100 h-100 img-fluid\">\n                </div>\n                <button type=\"button\" routerLink=\"../{{healthId}}\" class=\"btn-round btn-white-fill\"><i class=\"fas fa-pen\"></i></button>\n                <p class=\"domain-title mb-0\">{{'RESOURCE.DOMAIN.HEALTHCARE' | translate}}</p>\n                <p class=\"domain-subtitle d-inline-flex justify-content-start mb-0\"><span class=\"me-2\">{{healthCategories}} {{'GENERAL.CATEGORIES' | translate}}</span> <span>{{healthResTypes}} {{'GENERAL.RES-TYPES' | translate}}</span></p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-12 col-xl-4\">\n            <div class=\"culture\">\n                <div class=\"img-gradient\">\n                    <img [src]=\"cultureImgPath\" alt=\"{{'RESOURCE.DOMAIN.CULTURE' | translate}}\" class=\"w-100 h-100 img-fluid\">\n                </div>\n                <button type=\"button\" routerLink=\"../{{cultureId}}\" class=\"btn-round btn-white-fill\" id=\"btn-navigate-to-\"><i class=\"fas fa-pen\"></i></button>\n                <p class=\"domain-title mb-0\">{{'RESOURCE.DOMAIN.CULTURE_ART' | translate}}</p>\n                <p class=\"domain-subtitle d-inline-flex justify-content-start mb-0\"><span class=\"me-2\">{{cultureCategories}} {{'GENERAL.CATEGORIES' | translate}}</span> <span>{{cultureResTypes}} {{'GENERAL.RES-TYPES' | translate}}</span></p>\n            </div>\n        </div>\n        <div class=\"col-12 col-xl-4\">\n            <div class=\"education\">\n                <div class=\"img-gradient\">\n                    <img [src]=\"educationImgPath\" alt=\"{{'RESOURCE.DOMAIN.EDUCATION' | translate}}\" class=\"w-100 h-100 img-fluid\">\n                </div>\n                <button type=\"button\" routerLink=\"../{{educationId}}\" class=\"btn-round btn-white-fill\"><i class=\"fas fa-pen\"></i></button>\n                <p class=\"domain-title mb-0\">{{'RESOURCE.DOMAIN.EDUCATION' | translate}}</p>\n                <p class=\"domain-subtitle d-inline-flex justify-content-start mb-0\"><span class=\"me-2\">{{educationCategories}} {{'GENERAL.CATEGORIES' | translate}}</span> <span>{{educationResTypes}} {{'GENERAL.RES-TYPES' | translate}}</span></p>\n            </div>\n        </div>\n        <div class=\"col-12 col-xl-4\">\n            <div class=\"jobs\">\n                <div class=\"img-gradient\">\n                    <img [src]=\"jobsImgPath\" alt=\"{{'RESOURCE.DOMAIN.JOBS' | translate}}\" class=\"w-100 h-100 img-fluid\">\n                </div>\n                <button type=\"button\" routerLink=\"../{{jobsId}}\" class=\"btn-round btn-white-fill\"><i class=\"fas fa-pen\"></i></button>\n                <p class=\"domain-title mb-0\">{{'RESOURCE.DOMAIN.JOBS' | translate}}</p>\n                <p class=\"domain-subtitle d-inline-flex justify-content-start mb-0\"><span class=\"me-2\">{{jobsCategories}} {{'GENERAL.CATEGORIES' | translate}}</span> <span>{{jobsResTypes}} {{'GENERAL.RES-TYPES' | translate}}</span></p>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n";

/***/ }),

/***/ 58887:
/*!************************************************************************************!*\
  !*** ./src/app/features/domains/edit-domain/edit-domain.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"{{currentDomain?.nameEn}}\"\n                          [buttonBackRoute]=\"'..'\">\n    </app-dashboard-header>\n\n    <div class=\"resources-card card\">\n        <div class=\"card-header border-0\">\n\n        </div>\n\n        <div class=\"card-body\">\n            <!--       ------------------ DOMAIN IMAGES ------------------->\n            <div class=\"thumbnail-icon mb-3\">\n                <p class=\"domain-title\">Thumbnail & Icon</p>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"upload-image-col col-md-8  px-0\">\n\n                            <!--                        ADD THUMBNAIL BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!domainImagesForm.get('filePath').value\"\n                                    class=\"thumbnail-button d-flex flex-column align-items-center justify-content-center\"\n                                    (click)=\"openMedia(content)\"\n                                    id=\"changeDomainsThumbnail\">\n                                <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}} <span>1400 x 1400px</span>\n                            </button>\n\n                            <!--                        IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"domainImagesForm.get('filePath').value\" class=\"img-thumbnail\">\n                                <img class=\"img-fluid w-100\"\n                                     [src]=\"domainImagesForm.get('filePath').value\" alt=\"thumbnail\">\n                                <button\n                                        (click)=\"removeDomainThumbnail(); cdr.detectChanges()\"\n                                        type=\"button\"\n                                        id=\"btnRemoveDomainThumbnail\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                        </div>\n\n                        <ng-template #content let-modal>\n                            <app-choose-media [category]=\"'image'\"\n                                              [multipleSelect]=\"false\"\n                                              [for]=\"'domain-img'\"\n                                              [modalRef]=\"modal\"></app-choose-media>\n                        </ng-template>\n\n                        <div class=\"upload-icon-col col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center\">\n                            <p class=\"domain-title\">Upload Icon</p>\n                            <button *ngIf=\"!domainIconForm.get('filePath').value\"\n                                    class=\"icon-button d-flex flex-column align-items-center justify-content-center mb-3\"\n                                    (click)=\"openMedia(domainIcon)\" id=\"changeDomainIcon\">\n                                <i class=\"fas fa-file-upload\"></i></button>\n\n                            <!--                        IF THERE IS AN ICON, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                            <div *ngIf=\"domainIconForm.get('filePath').value\" class=\"img-icon position-relative mb-3\">\n                                <img class=\"img-fluid w-100\"\n                                     [src]=\"domainIconForm.get('filePath').value\" alt=\"icon\">\n                                <button\n                                        (click)=\"removeDomainIcon(); cdr.detectChanges()\"\n                                        type=\"button\"\n                                        id=\"btnRemoveFeaturedImage\"\n                                        class=\"btn-icon position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                            <p class=\"icon-text\">{{'RESOURCE.DOMAIN.ICON_CLICK' | translate}}</p>\n                            <p class=\"dimension-text\">112 px x 112 px</p>\n\n                            <ng-template #domainIcon let-modal>\n                                <app-choose-media [category]=\"'image'\"\n                                                  [multipleSelect]=\"false\"\n                                                  [for]=\"'domain-icon'\"\n                                                  [modalRef]=\"modal\"></app-choose-media>\n                            </ng-template>\n\n                        </div>\n\n                        <div class=\"upload-video col-12 px-0\">\n\n                            <!--                        ADD Video BUTTON, IF THERE IS NO THUMBNAIL-->\n                            <button *ngIf=\"!domainVideoForm.get('filePath').value\"\n                                    class=\"thumbnail-button d-flex flex-column align-items-center justify-content-center\"\n                                    (click)=\"openMedia(domainVideo)\"\n                                    id=\"changeDomainsVideo\">\n                                <i class=\"fas fa-video\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}} <span>1400 x 1400px</span>\n                            </button>\n\n                            <!--                        IF THERE IS A Video, DISPLAY Video AND REMOVE video BUTTON-->\n                            <div *ngIf=\"domainVideoForm.get('filePath').value\" class=\"img-thumbnail\">\n                                <video class=\"img-fluid w-100\"\n                                       [src]=\"domainVideoForm.get('filePath').value\" alt=\"thumbnail\" controls></video>\n                                <button\n                                        (click)=\"removeDomainVideo(); cdr.detectChanges()\"\n                                        type=\"button\"\n                                        id=\"btnRemoveDomainVideo\"\n                                        class=\"btn-thumbnail position-absolute\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                        </div>\n\n                        <ng-template #domainVideo let-modal>\n                            <app-choose-media [category]=\"'video'\"\n                                              [multipleSelect]=\"false\"\n                                              [for]=\"'domain-video'\"\n                                              [modalRef]=\"modal\"></app-choose-media>\n                        </ng-template>\n                    </div>\n                </div>\n\n            </div>\n\n            <!-------------------- CATEGORIES ---------------------->\n            <div class=\"categories\">\n                <div class=\"d-flex justify-content-between flex-wrap\">\n                    <p class=\"domain-title\">{{'RESOURCE.DOMAIN.CATEGORIES' | translate}}</p>\n                    <button class=\"btn-long btn-color-fill\" id=\"btnAdd-resource\" (click)=\"openModal(addResource)\">\n                        <i class=\"fas fa-plus\"></i>\n                        {{'BTN.ADD' | translate}}\n                    </button>\n                </div>\n\n                <div class=\"resources\" *ngFor=\"let res of resourcesList;let i = index\">\n                    <div class=\"resource\">\n                        <div class=\"row\">\n                            <div class=\"col-7 col-md-9 col-lg-10 col-xl-11\">\n                                <p class=\"resource-title mb-0\">{{res.nameEn}}</p>\n                                <p *ngIf=\"!isAdvanced[i]\" class=\"resource-type mb-0\">{{'GENERAL.RES-TYPES' | translate}}\n                                    :\n                                    <span>{{resourceTypes[i]?.length}}</span></p>\n                            </div>\n                            <div class=\"col-5 col-md-3 col-lg-2 col-xl-1 d-flex justify-content-center align-items-center\">\n                                <i (click)=\"clickMore(i, res.id)\"\n                                   [ngClass]=\"isAdvanced[i] ? 'fas fa-chevron-up' : 'fas fa-chevron-down'\"></i>\n                                <i class=\"fas fa-times\" (click)=\"openModal(deleteResource)\"></i>\n                            </div>\n                        </div>\n                        <div class=\"sectiune\" [ngClass]=\"{'hide': !isAdvanced[i]}\">\n                            <!--------------------------CATEGORY THUMBNAIL&ICON ------------------>\n                            <div class=\"container mb-3\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <input type=\"checkbox\" [checked]=\"res.enableForList\"\n                                               (change)=\"updateCategory($event, res.id)\"> Afișare categorie în listă\n                                    </div>\n                                    <div class=\"upload-image-res col-md-8  px-0\">\n                                        <button *ngIf=\"!categoryImagesForm.get('filePath').value\"\n                                                class=\"thumbnail-res d-flex flex-column align-items-center justify-content-center\"\n                                                (click)=\"openMedia(categoryImage)\" id=\"changeCategThumbnail\">\n                                            <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                                            <span>1400 x 1400px</span>\n                                        </button>\n                                        <!--                        IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                                        <div *ngIf=\"categoryImagesForm.get('filePath').value\" class=\"img-thumbnail\">\n                                            <img class=\"img-fluid w-100\"\n                                                 [src]=\"categoryImagesForm.get('filePath').value\" alt=\"thumbnail\">\n                                            <button\n                                                    (click)=\"removeCategoryThumbnail(); cdr.detectChanges()\"\n                                                    type=\"button\"\n                                                    id=\"btnRemoveCategoryThumbnail\"\n                                                    class=\"btn-thumbnail position-absolute \">\n                                                <i class=\"delete fas fa-times \"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n\n                                    <ng-template #categoryImage let-modal>\n                                        <app-choose-media [category]=\"'image'\"\n                                                          [multipleSelect]=\"false\"\n                                                          [for]=\"'category-img'\"\n                                                          [modalRef]=\"modal\"></app-choose-media>\n                                    </ng-template>\n\n                                    <div class=\"upload-icon-res col-md-4 col-sm-12 d-flex align-items-center\">\n                                        <div class=\"container\">\n                                            <div class=\"row\">\n                                                <div class=\"col-5\">\n                                                    <button *ngIf=\"!categoryIconForm.get('filePath').value\"\n                                                            class=\"icon-button d-flex flex-column align-items-center justify-content-center mb-3\"\n                                                            (click)=\"openMedia(categoryIcon)\" id=\"changeCategIcon\">\n                                                        <i class=\"fas fa-file-upload\"></i></button>\n\n                                                    <div *ngIf=\"categoryIconForm.get('filePath').value\"\n                                                         class=\"icon-res\">\n                                                        <img class=\"img-fluid w-100\"\n                                                             [src]=\"categoryIconForm.get('filePath').value\"\n                                                             alt=\"thumbnail\">\n                                                        <button\n                                                                (click)=\"removeCategoryIcon(); cdr.detectChanges()\"\n                                                                type=\"button\"\n                                                                id=\"btnRemoveCategoryIcon\"\n                                                                class=\"btn-thumbnail position-absolute\">\n                                                            <i class=\"fas fa-times delete\"></i>\n                                                        </button>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-7\">\n                                                    <p class=\"domain-title mb-0\">Upload Icon</p>\n                                                    <p class=\"icon-text mb-0\">{{'RESOURCE.DOMAIN.ICON_CLICK' | translate}}</p>\n                                                    <p class=\"dimension-text mb-0\">112 px x 112 px</p>\n                                                </div>\n                                            </div>\n                                            <ng-template #categoryIcon let-modal>\n                                                <app-choose-media [category]=\"'image'\"\n                                                                  [multipleSelect]=\"false\"\n                                                                  [for]=\"'category-icon'\"\n                                                                  [modalRef]=\"modal\"></app-choose-media>\n                                            </ng-template>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!--------------------------RESOURCE TYPES ------------------------->\n                            <div class=\"card card-res-types\">\n                                <div class=\"card-header header-res-types\">\n                                    <p class=\"title-res-card mb-0\">Resource Types</p>\n                                </div>\n                                <div class=\"card-body body-res-types\">\n                                    <div class=\"container\">\n                                        <div class=\"row mb-3\">\n\n                                            <div class=\"col-xl-3 col-md-6 col-12\"\n                                                 *ngFor=\"let resource of resourceTypes[i]\">\n\n                                                <div class=\"row card-res\">\n                                                    <div class=\"res-body rounded shadow-sm col-9\">\n                                                        <p class=\"mb-0\"><b>{{'RESOURCE.DOMAIN.NAME' | translate}}</b>\n                                                        </p>\n                                                        <p>{{(resource?.nameEn?.length > 25) ? (resource?.nameEn | slice:0:25) + '...' : resource?.nameEn }}\n                                                            <span *ngIf=\"resource?.nameRo?.length > 0\">\n                                                        / {{(resource?.nameRo?.length > 25) ? (resource?.nameRo| slice:0:25) + '...' : resource?.nameRo }}\n                                                    </span>\n                                                        </p>\n\n                                                        <p class=\"mb-0\">\n                                                            <b>{{'RESOURCE.DOMAIN.AVAILABLE_FILTERS' | translate}}:</b>\n                                                        </p>\n                                                        <p class=\" line-clamp mb-0\">\n                                                            <span *ngIf=\"resource?.filterOption?.location\">Location, </span>\n                                                            <span *ngIf=\"resource?.filterOption?.adultNumber\">Number of adults, </span>\n                                                            <span *ngIf=\"resource?.filterOption?.adultChildrenNumber\">Number of adults, </span>\n                                                            <span *ngIf=\"resource?.filterOption?.adultChildrenAndRoomNumber\">Number of adults, children, room, </span>\n                                                            <span *ngIf=\"resource?.filterOption?.dateAsDay\">Date as day, </span>\n                                                            <span *ngIf=\"resource?.filterOption?.dateInterval\">Date interval, </span>\n                                                            <span *ngIf=\"resource?.filterOption?.dateAsHour\">Date as hour, </span>\n                                                            <span *ngIf=\"resource?.filterOption?.hoursInterval\">Hours interval</span>\n                                                        </p>\n                                                    </div>\n                                                    <div class=\"col-2 p-0\">\n                                                        <button class=\"x-button-location h-25 w-100 \"\n                                                                (click)=\"openModal(deleteResourceType)\"><i\n                                                                class=\"fas fa-times p-0\"></i></button>\n                                                        <button class=\"edit-button-location h-25 w-100 \"\n                                                                (click)=\"openModalValue(editResourceType, resource)\"><i\n                                                                class=\"fas fa-pen\"></i></button>\n                                                    </div>\n\n                                                    <!--            Modal Edit Resource Type-->\n                                                    <ng-template #editResourceType let-c=\"close\" let-d=\"dismiss\">\n                                                        <div class=\"modal-card card\">\n                                                            <div class=\"card-header border-0\">\n                                                                <h3 class=\"m-0\">\n                                                                    {{'RESOURCE.DOMAIN.EDIT-RES-TYPE' | translate}}\n                                                                </h3>\n                                                            </div>\n\n\n                                                            <div class=\"card-body\">\n                                                                <form [formGroup]=\"resTypeForm\">\n\n                                                                    <div class=\"card-resource add-design card\">\n                                                                        <div class=\"card-body no-wrapper px-0 d-flex justify-content-center align-items-start flex-column\">\n                                                                            <p class=\"modal-title\">{{'RESOURCE.DOMAIN.GENERAL-INFO' | translate}}</p>\n                                                                            <mat-form-field\n                                                                                    class=\"col-md-6  col-sm-6 w-100\"\n                                                                                    appearance=\"outline\">\n                                                                                <mat-label>{{'TITLES.NAME-EN' | translate}}</mat-label>\n                                                                                <input matInput\n                                                                                       placeholder=\"{{'TITLES.NAME-EN' | translate}}\"\n                                                                                       formControlName=\"nameEn\">\n                                                                                <i class=\"fas fa-times-circle\"\n                                                                                   type=\"button\"\n                                                                                   *ngIf=\"resTypeForm.get('nameEn').value\"\n                                                                                   (click)=\"clearFormControlresType('nameEn')\"\n                                                                                   matSuffix></i>\n                                                                                <mat-error\n                                                                                        *ngIf=\"resTypeForm.controls.nameEn.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                                                                                </mat-error>\n\n                                                                            </mat-form-field>\n\n                                                                            <mat-form-field\n                                                                                    class=\"col-md-6  col-sm-6 w-100\"\n                                                                                    appearance=\"outline\">\n                                                                                <mat-label>{{'TITLES.NAME-RO' | translate}}</mat-label>\n                                                                                <input matInput\n                                                                                       placeholder=\"{{'TITLES.NAME-RO' | translate}}\"\n                                                                                       formControlName=\"nameRo\">\n                                                                                <i class=\"fas fa-times-circle\"\n                                                                                   type=\"button\"\n                                                                                   *ngIf=\"resTypeForm.get('nameRo').value\"\n                                                                                   (click)=\"clearFormControlresType('nameRo')\"\n                                                                                   matSuffix></i>\n                                                                                <mat-error\n                                                                                        *ngIf=\"resTypeForm.controls.nameRo.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                                                                                </mat-error>\n\n                                                                            </mat-form-field>\n\n                                                                            <mat-form-field\n                                                                                    class=\"col-md-6  col-sm-6 w-100\"\n                                                                                    appearance=\"outline\">\n                                                                                <mat-label>Interval de timp pentru\n                                                                                    reminder rezervare (ore)\n                                                                                </mat-label>\n                                                                                <input matInput\n                                                                                       placeholder=\"Interval de timp pentru reminder rezervare (ore)\"\n                                                                                       formControlName=\"notificationHours\"\n                                                                                       type=\"text\">\n                                                                                <i class=\"fas fa-times-circle\"\n                                                                                   type=\"button\"\n                                                                                   *ngIf=\"resTypeForm.get('notificationHours').value\"\n                                                                                   (click)=\"clearFormControlresType('notificationHours')\"\n                                                                                   matSuffix></i>\n                                                                                <mat-error\n                                                                                        *ngIf=\"resTypeForm.controls.notificationHours.hasError('pattern')\">\n                                                                                    Sunt acceptate doar numere.\n                                                                                </mat-error>\n\n                                                                            </mat-form-field>\n\n\n                                                                            <p class=\"modal-title\">Thumbnail & Icon</p>\n                                                                            <div class=\"thumbnail-icon-res-type container\">\n                                                                                <div class=\"row\">\n                                                                                    <div class=\"thumbnail-res-type-col col-sm-5 col-12 px-0\">\n                                                                                        <button *ngIf=\"!resTypeForm.get('image').value.filePath\"\n                                                                                                class=\"thumbnail-res-type d-flex flex-column align-items-center justify-content-center w-100\"\n                                                                                                (click)=\"openMedia(imageResType)\"\n                                                                                                id=\"changeResTypeThumbnailonEdit\">\n                                                                                            <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                                                                                            <span>1400 x 1400px</span>\n                                                                                        </button>\n\n                                                                                        <!--                        IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                                                                                        <div *ngIf=\"resTypeForm.get('image').value.filePath\"\n                                                                                             class=\"img-thumbnail-restype\">\n                                                                                            <img class=\"img-fluid w-100\"\n                                                                                                 [src]=\"resTypeForm.get('image').value.filePath\"\n                                                                                                 alt=\"thumbnail\">\n                                                                                            <button\n                                                                                                    (click)=\"removeResTypeThumbnail(); cdr.detectChanges()\"\n                                                                                                    type=\"button\"\n                                                                                                    id=\"btnRemoveResTypeThumbnailonEdit\"\n                                                                                                    class=\"btn-thumbnail position-absolute\">\n                                                                                                <i class=\"fas fa-times delete\"></i>\n                                                                                            </button>\n                                                                                        </div>\n                                                                                    </div>\n\n                                                                                    <ng-template #imageResType\n                                                                                                 let-modal>\n                                                                                        <app-choose-media\n                                                                                                [category]=\"'image'\"\n                                                                                                [multipleSelect]=\"false\"\n                                                                                                [for]=\"'resType-img'\"\n                                                                                                [modalRef]=\"modal\"></app-choose-media>\n                                                                                    </ng-template>\n\n                                                                                    <div class=\"icon-res-type col-sm-7 col-12 px-0\">\n                                                                                        <div class=\"container h-100\">\n                                                                                            <div class=\"row h-100 d-flex justify-content-center align-items-center\">\n                                                                                                <div class=\"col-5 h-100 d-flex justify-content-center align-items-center\">\n                                                                                                    <button *ngIf=\"!resTypeForm.get('icon').value.filePath\"\n                                                                                                            class=\"icon-button-res-type d-flex flex-column align-items-center justify-content-center\"\n                                                                                                            (click)=\"openMedia(iconResType)\"\n                                                                                                            id=\"changeResTypeIcononedit\">\n                                                                                                        <i class=\"fas fa-file-upload\"></i>\n                                                                                                    </button>\n                                                                                                    <!--                        IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                                                                                                    <div *ngIf=\"resTypeForm.get('icon').value.filePath\"\n                                                                                                         class=\"icon-thumbnail-restype\">\n                                                                                                        <img class=\"img-fluid w-100\"\n                                                                                                             [src]=\"resTypeForm.get('icon').value.filePath\"\n                                                                                                             alt=\"thumbnail\">\n                                                                                                        <button\n                                                                                                                (click)=\"removeResTypeIcon(); cdr.detectChanges()\"\n                                                                                                                type=\"button\"\n                                                                                                                id=\"btnRemoveResTypeIcononEdit\"\n                                                                                                                class=\"btn-thumbnail position-absolute\">\n                                                                                                            <i class=\"fas fa-times delete\"></i>\n                                                                                                        </button>\n                                                                                                    </div>\n                                                                                                </div>\n\n                                                                                                <ng-template\n                                                                                                    #iconResType\n                                                                                                    let-modal>\n                                                                                                    <app-choose-media\n                                                                                                            [category]=\"'image'\"\n                                                                                                            [multipleSelect]=\"false\"\n                                                                                                            [for]=\"'resType-icn'\"\n                                                                                                            [modalRef]=\"modal\"></app-choose-media>\n                                                                                                </ng-template>\n\n                                                                                                <div class=\"col-7\">\n                                                                                                    <p class=\"domain-title mb-0\">\n                                                                                                        Upload\n                                                                                                        Icon</p>\n                                                                                                    <p class=\"icon-text w-100 mb-0\">{{'RESOURCE.DOMAIN.ICON_CLICK' | translate}}</p>\n                                                                                                    <p class=\"domain-title mb-0\">\n                                                                                                        112 px\n                                                                                                        x 112 px</p>\n                                                                                                </div>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                </div>\n\n                                                                            </div>\n\n\n                                                                            <p class=\"modal-title\">{{'RESOURCE.DOMAIN.AVAILABLE_FILTERS' | translate}}</p>\n                                                                            <div class=\"checkbox-container container\">\n                                                                                <div class=\"row\">\n                                                                                    <div class=\"col-sm-6 col-12 px-0\">\n                                                                                        <label class=\"container\"><span\n                                                                                                [innerHTML]=\"'RESOURCE.RES-FILTERS.LOCATION' | translate\"></span>\n                                                                                            <input type=\"checkbox\"\n                                                                                                   class=\"is-invalid\"\n                                                                                                   formControlName=\"location\">\n                                                                                            <span class=\"checkmark\"></span>\n                                                                                        </label>\n\n                                                                                        <label class=\"container\"><span\n                                                                                                [innerHTML]=\"'RESOURCE.RES-FILTERS.ADULTS' | translate\"></span>\n                                                                                            <input type=\"checkbox\"\n                                                                                                   class=\"is-invalid\"\n                                                                                                   formControlName=\"adultNumber\"\n                                                                                            >\n                                                                                            <span class=\"checkmark\"></span>\n                                                                                        </label>\n\n                                                                                        <label class=\"container\"><span\n                                                                                                [innerHTML]=\"'RESOURCE.RES-FILTERS.ADULTS-KIDS' | translate\"></span>\n                                                                                            <input type=\"checkbox\"\n                                                                                                   class=\"is-invalid\"\n                                                                                                   formControlName=\"adultChildrenNumber\"\n                                                                                            >\n                                                                                            <span class=\"checkmark\"></span>\n                                                                                        </label>\n\n                                                                                        <label class=\"container\"><span\n                                                                                                [innerHTML]=\"'RESOURCE.RES-FILTERS.ADULTS-KIDS-ROOMS' | translate\"></span>\n                                                                                            <input type=\"checkbox\"\n                                                                                                   class=\"is-invalid\"\n                                                                                                   formControlName=\"adultChildrenAndRoomNumber\"\n                                                                                            >\n                                                                                            <span class=\"checkmark\"></span>\n                                                                                        </label>\n\n                                                                                        <p class=\"error-msg\" *ngIf=\"resTypeForm.hasError('personInvalid')\">Puteti alege o singura filtrare in functie de numarul de persoane!</p>\n\n                                                                                    </div>\n\n                                                                                    <div class=\"col-sm-6 col-12 px-0\">\n                                                                                        <label class=\"container\"><span\n                                                                                                [innerHTML]=\"'RESOURCE.RES-FILTERS.DATE-DAY' | translate\"></span>\n                                                                                            <input type=\"checkbox\"\n                                                                                                   class=\"is-invalid\"\n                                                                                                   formControlName=\"dateAsDay\"\n                                                                                            >\n                                                                                            <span class=\"checkmark\"></span>\n                                                                                        </label>\n\n                                                                                        <label class=\"container\"><span\n                                                                                                [innerHTML]=\"'RESOURCE.RES-FILTERS.DATE-FROM-DAY' | translate\"></span>\n                                                                                            <input type=\"checkbox\"\n                                                                                                   class=\"is-invalid\"\n                                                                                                   formControlName=\"dateInterval\"\n                                                                                                   >\n                                                                                            <span class=\"checkmark\"></span>\n                                                                                        </label>\n\n                                                                                        <label class=\"container\"><span\n                                                                                                [innerHTML]=\"'RESOURCE.RES-FILTERS.DATE-DAY-TIME' | translate\"></span>\n                                                                                            <input type=\"checkbox\"\n                                                                                                   class=\"is-invalid\"\n                                                                                                   formControlName=\"dateAsHour\"\n                                                                                                  >\n                                                                                            <span class=\"checkmark\"></span>\n                                                                                        </label>\n\n                                                                                        <label class=\"container\"><span\n                                                                                                [innerHTML]=\"'RESOURCE.RES-FILTERS.DATE-DAY-FROM-TIME' | translate\"></span>\n                                                                                            <input type=\"checkbox\"\n                                                                                                   class=\"is-invalid\"\n                                                                                                   formControlName=\"hoursInterval\">\n                                                                                            <span class=\"checkmark\"></span>\n                                                                                        </label>\n                                                                                        <p class=\"error-msg\" *ngIf=\"resTypeForm.hasError('dateInvalid')\">Puteti alege o singura filtrare in functie de data!</p>\n\n\n                                                                                    </div>\n\n                                                                                </div>\n\n\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </form>\n\n                                                            </div>\n\n                                                            <div class=\"card-footer border-0\">\n                                                                <div class=\"row\">\n                                                                    <div class=\"col-12 col-sm-6\">\n                                                                        <button class=\"btn-auto btn-color-outline w-100\"\n                                                                                id=\"btn-dismiss-edit\"\n                                                                                (click)=\"d(); resTypeInit()\">\n                                                                            <i class=\"fas fa-times\"></i>\n                                                                            {{ 'BTN.CANCEL' | translate}}\n                                                                        </button>\n                                                                    </div>\n\n                                                                    <div class=\"col-12 col-sm-6\">\n                                                                        <button class=\"btn-auto btn-color-fill w-100\"\n                                                                                id=\"btn-save-res-type-edit\"\n                                                                                (click)=\"updateResType(resource.id)\">\n                                                                            <i class=\"fas fa-check\"></i>\n                                                                            {{ 'BTN.CONFIRM' | translate}}\n                                                                        </button>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </ng-template>\n\n                                                </div>\n\n                                                <!--            Modal Delete ResourceType-->\n                                                <ng-template #deleteResourceType let-c=\"close\" let-d=\"dismiss\">\n                                                    <div class=\"modal-card card\">\n                                                        <div class=\"card-header border-0\">\n                                                            <h3 class=\"m-0\">\n                                                                {{ 'TITLES.DELETE-RESTYPE' | translate }}\n                                                            </h3>\n                                                        </div>\n\n                                                        <div class=\"card-body\">\n                                                            <p>{{ 'TITLES.DELETE-CATEGORY-DIRECTIONS' | translate}}</p>\n                                                            <div class=\"card-resource card\">\n                                                                <div class=\"card-body d-flex justify-content-between align-items-center flex-row\">\n                                                                    <h3>{{resource.nameEn}} / {{resource.nameRo}}</h3>\n                                                                </div>\n                                                            </div>\n\n                                                        </div>\n\n                                                        <div class=\"card-footer border-0\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-6\">\n                                                                    <button class=\"btn-auto btn-color-outline w-100\"\n                                                                            id=\"btn-dismiss-delete-{{i}}\"\n                                                                            (click)=\"d()\">\n                                                                        <i class=\"fas fa-times\"></i>\n                                                                        {{ 'BTN.CANCEL' | translate}}\n                                                                    </button>\n                                                                </div>\n\n                                                                <div class=\"col-12 col-sm-6\">\n                                                                    <button class=\"btn-auto btn-color-fill w-100\"\n                                                                            id=\"btn-confirm-delete-{{i}}\"\n                                                                            (click)=\"deleteResType(resource.id)\"\n                                                                    >\n                                                                        <i class=\"fas fa-check\"></i>\n                                                                        {{ 'BTN.CONFIRM' | translate}}\n                                                                    </button>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </ng-template>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <button class=\"btn-add-res\" id=\"btnAdd-resourceType\"\n                                                    (click)=\"openModal(addResourceType)\">\n                                                {{'BTN.ADD' | translate}}<i class=\"fas fa-plus ms-2\"></i></button>\n\n                                            <!--            Modal Add Resource Type-->\n                                            <ng-template #addResourceType let-c=\"close\" let-d=\"dismiss\">\n                                                <div class=\"modal-card card\">\n                                                    <div class=\"card-header border-0\">\n                                                        <h3 class=\"m-0\">\n                                                            {{'RESOURCE.DOMAIN.ADD-RES-TYPE' | translate}}\n                                                        </h3>\n                                                    </div>\n\n\n                                                    <div class=\"card-body\">\n                                                        <form [formGroup]=\"resTypeForm\">\n\n                                                            <div class=\"card-resource add-design card\">\n                                                                <div class=\"card-body no-wrapper px-0 d-flex justify-content-center align-items-start flex-column\">\n                                                                    <p class=\"modal-title\">{{'RESOURCE.DOMAIN.GENERAL-INFO' | translate}}</p>\n                                                                    <mat-form-field class=\"col-md-6  col-sm-6 w-100\"\n                                                                                    appearance=\"outline\">\n                                                                        <mat-label>{{'TITLES.NAME' | translate}}\n                                                                            (engleza)\n                                                                        </mat-label>\n                                                                        <input matInput\n                                                                               placeholder=\"{{'TITLES.NAME' | translate}} (engleza)\"\n                                                                               formControlName=\"nameEn\">\n                                                                        <i class=\"fas fa-times-circle\" type=\"button\"\n                                                                           *ngIf=\"resTypeForm.get('nameEn').value\"\n                                                                           (click)=\"clearFormControlresType('nameEn')\"\n                                                                           matSuffix></i>\n\n                                                                        <mat-error\n                                                                                *ngIf=\"resTypeForm.controls.nameEn.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                                                                        </mat-error>\n\n                                                                    </mat-form-field>\n\n                                                                    <mat-form-field class=\"col-md-6  col-sm-6 w-100\"\n                                                                                    appearance=\"outline\">\n                                                                        <mat-label>{{'TITLES.NAME' | translate}}\n                                                                            (romana)\n                                                                        </mat-label>\n                                                                        <input matInput\n                                                                               placeholder=\"{{'TITLES.NAME' | translate}} (romana)\"\n                                                                               formControlName=\"nameRo\">\n                                                                        <i class=\"fas fa-times-circle\" type=\"button\"\n                                                                           *ngIf=\"resTypeForm.get('nameRo').value\"\n                                                                           (click)=\"clearFormControlresType('nameRo')\"\n                                                                           matSuffix></i>\n\n                                                                        <mat-error\n                                                                                *ngIf=\"resTypeForm.controls.nameRo.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                                                                        </mat-error>\n\n                                                                    </mat-form-field>\n\n                                                                    <mat-form-field class=\"col-md-6  col-sm-6 w-100\"\n                                                                                    appearance=\"outline\">\n                                                                        <mat-label>Interval de timp pentru reminder\n                                                                            rezervare (ore)\n                                                                        </mat-label>\n                                                                        <input matInput\n                                                                               placeholder=\"Interval de timp pentru reminder rezervare (ore)\"\n                                                                               formControlName=\"notificationHours\"\n                                                                               type=\"text\">\n                                                                        <i class=\"fas fa-times-circle\" type=\"button\"\n                                                                           *ngIf=\"resTypeForm.get('notificationHours').value\"\n                                                                           (click)=\"clearFormControlresType('notificationHours')\"\n                                                                           matSuffix></i>\n                                                                        <mat-error\n                                                                                *ngIf=\"resTypeForm.controls.notificationHours.hasError('pattern')\">\n                                                                            Sunt acceptate doar numere.\n                                                                        </mat-error>\n\n                                                                    </mat-form-field>\n\n\n                                                                    <p class=\"modal-title\">Thumbnail & Icon</p>\n                                                                    <div class=\"thumbnail-icon-res-type container\">\n                                                                        <div class=\"row\">\n                                                                            <div class=\"thumbnail-res-type-col col-sm-5 col-12 px-0\">\n                                                                                <button *ngIf=\"!resTypeForm.get('image').value.filePath\"\n                                                                                        class=\"thumbnail-res-type d-flex flex-column align-items-center justify-content-center w-100\"\n                                                                                        (click)=\"openMedia(imageResType)\"\n                                                                                        id=\"changeResTypeThumbnailonAdd\">\n                                                                                    <i class=\"far fa-image\"></i>{{'RESOURCE.DOMAIN.THUMBNAIL_CLICK' | translate}}\n                                                                                    <span>1400 x 1400px</span>\n                                                                                </button>\n\n                                                                                <!--                        IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                                                                                <div *ngIf=\"resTypeForm.get('image').value.filePath\"\n                                                                                     class=\"img-thumbnail-restype\">\n                                                                                    <img class=\"img-fluid w-100\"\n                                                                                         [src]=\"resTypeForm.get('image').value.filePath\"\n                                                                                         alt=\"thumbnail\">\n                                                                                    <button\n                                                                                            (click)=\"removeResTypeThumbnail(); cdr.detectChanges()\"\n                                                                                            type=\"button\"\n                                                                                            id=\"btnRemoveResTypeThumbnailonAdd\"\n                                                                                            class=\"btn-thumbnail position-absolute\">\n                                                                                        <i class=\"fas fa-times delete\"></i>\n                                                                                    </button>\n                                                                                </div>\n                                                                            </div>\n\n                                                                            <ng-template #imageResType let-modal>\n                                                                                <app-choose-media [category]=\"'image'\"\n                                                                                                  [multipleSelect]=\"false\"\n                                                                                                  [for]=\"'resType-img'\"\n                                                                                                  [modalRef]=\"modal\"></app-choose-media>\n                                                                            </ng-template>\n\n                                                                            <div class=\"icon-res-type col-sm-7 col-12 px-0\">\n                                                                                <div class=\"container h-100\">\n                                                                                    <div class=\"row h-100 d-flex justify-content-center align-items-center\">\n                                                                                        <div class=\"col-5 h-100 d-flex justify-content-center align-items-center\">\n                                                                                            <button *ngIf=\"!resTypeForm.get('icon').value.filePath\"\n                                                                                                    class=\"icon-button-res-type d-flex flex-column align-items-center justify-content-center\"\n                                                                                                    (click)=\"openMedia(iconResType)\"\n                                                                                                    id=\"changeResTypeIcononadd\">\n                                                                                                <i class=\"fas fa-file-upload\"></i>\n                                                                                            </button>\n                                                                                            <!--                        IF THERE IS A THUMBNAIL, DISPLAY THUMBNAIL AND REMOVE THUMBNAIL BUTTON-->\n                                                                                            <div *ngIf=\"resTypeForm.get('icon').value.filePath\"\n                                                                                                 class=\"icon-thumbnail-restype\">\n                                                                                                <img class=\"img-fluid w-100\"\n                                                                                                     [src]=\"resTypeForm.get('icon').value.filePath\"\n                                                                                                     alt=\"thumbnail\">\n                                                                                                <button\n                                                                                                        (click)=\"removeResTypeIcon(); cdr.detectChanges()\"\n                                                                                                        type=\"button\"\n                                                                                                        id=\"btnRemoveResTypeIcononadd\"\n                                                                                                        class=\"btn-thumbnail position-absolute\">\n                                                                                                    <i class=\"fas fa-times delete\"></i>\n                                                                                                </button>\n                                                                                            </div>\n                                                                                        </div>\n\n                                                                                        <ng-template #iconResType\n                                                                                                     let-modal>\n                                                                                            <app-choose-media\n                                                                                                    [category]=\"'image'\"\n                                                                                                    [multipleSelect]=\"false\"\n                                                                                                    [for]=\"'resType-icn'\"\n                                                                                                    [modalRef]=\"modal\"></app-choose-media>\n                                                                                        </ng-template>\n\n                                                                                        <div class=\"col-7\">\n                                                                                            <p class=\"domain-title mb-0\">\n                                                                                                Upload\n                                                                                                Icon</p>\n                                                                                            <p class=\"icon-text w-100 mb-0\">{{'RESOURCE.DOMAIN.ICON_CLICK' | translate}}</p>\n                                                                                            <p class=\"domain-title mb-0\">\n                                                                                                112 px\n                                                                                                x 112 px</p>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n\n                                                                    </div>\n\n\n                                                                    <p class=\"modal-title\">{{'RESOURCE.DOMAIN.AVAILABLE_FILTERS' | translate}}</p>\n                                                                    <div class=\"checkbox-container container\">\n                                                                        <div class=\"row custom-tooltip\">\n                                                                            <div class=\"col-sm-6 col-12 px-0\">\n                                                                                <label ngbTooltip=\"Filtrare dupa locație\"\n                                                                                       class=\"container\"><span\n                                                                                        [innerHTML]=\"'RESOURCE.RES-FILTERS.LOCATION' | translate\"></span>\n                                                                                    <input type=\"checkbox\"\n                                                                                           class=\"is-invalid\"\n                                                                                           formControlName=\"location\">\n                                                                                    <span class=\"checkmark\"></span>\n                                                                                </label>\n\n                                                                                <label ngbTooltip=\"Filtrare dupa numărul de adulți\"\n                                                                                       class=\"container\"><span\n                                                                                        [innerHTML]=\"'RESOURCE.RES-FILTERS.ADULTS' | translate\"></span>\n                                                                                    <input type=\"checkbox\"\n                                                                                           class=\"is-invalid\"\n                                                                                           formControlName=\"adultNumber\"\n                                                                                           >\n                                                                                    <span class=\"checkmark\"></span>\n                                                                                </label>\n\n                                                                                <label ngbTooltip=\"Filtrare pentru numărul de adulți și numarul de copii\"\n                                                                                       class=\"container\"><span\n                                                                                        [innerHTML]=\"'RESOURCE.RES-FILTERS.ADULTS-KIDS' | translate\"></span>\n                                                                                    <input type=\"checkbox\"\n                                                                                           class=\"is-invalid\"\n                                                                                           formControlName=\"adultChildrenNumber\"\n                                                                                           >\n                                                                                    <span class=\"checkmark\"></span>\n                                                                                </label>\n\n                                                                                <label ngbTooltip=\"Filtrare pentru: numărul de adulți,numărul de copii, camere\"\n                                                                                       class=\"container\"><span\n                                                                                        [innerHTML]=\"'RESOURCE.RES-FILTERS.ADULTS-KIDS-ROOMS' | translate\"></span>\n                                                                                    <input type=\"checkbox\"\n                                                                                           class=\"is-invalid\"\n                                                                                           formControlName=\"adultChildrenAndRoomNumber\"\n                                                                                          >\n                                                                                    <span class=\"checkmark\"></span>\n                                                                                </label>\n\n                                                                                <p class=\"error-msg\" *ngIf=\"resTypeForm.hasError('personInvalid')\">Puteti alege o singura filtrare in functie de numarul de persoane!</p>\n                                                                            </div>\n\n                                                                            <div class=\"col-sm-6 col-12 px-0\">\n                                                                                <label ngbTooltip=\"Filtrare dupa o zi\"\n                                                                                       class=\"container\"><span\n                                                                                        [innerHTML]=\"'RESOURCE.RES-FILTERS.DATE-DAY' | translate\"></span>\n                                                                                    <input type=\"checkbox\"\n                                                                                           class=\"is-invalid\"\n                                                                                           formControlName=\"dateAsDay\"\n                                                                                          >\n                                                                                    <span class=\"checkmark\"></span>\n                                                                                </label>\n\n                                                                                <label ngbTooltip=\"Filtrare dupa un interval de zile (de la - până la)\"\n                                                                                       class=\"container\"><span\n                                                                                        [innerHTML]=\"'RESOURCE.RES-FILTERS.DATE-FROM-DAY' | translate\"></span>\n                                                                                    <input type=\"checkbox\"\n                                                                                           class=\"is-invalid\"\n                                                                                           formControlName=\"dateInterval\">\n\n                                                                                    <span class=\"checkmark\"></span>\n                                                                                </label>\n\n                                                                                <label ngbTooltip=\"Filtrare dupa zi si oră\"\n                                                                                       class=\"container\"><span\n                                                                                        [innerHTML]=\"'RESOURCE.RES-FILTERS.DATE-DAY-TIME' | translate\"></span>\n                                                                                    <input type=\"checkbox\"\n                                                                                           class=\"is-invalid\"\n                                                                                           formControlName=\"dateAsHour\"\n                                                                                          >\n                                                                                    <span class=\"checkmark\"></span>\n                                                                                </label>\n\n                                                                                <label ngbTooltip=\"Filtrare dupa zi si un interval orar(de la ora - până la ora)\"\n                                                                                       class=\"container\"><span\n                                                                                        [innerHTML]=\"'RESOURCE.RES-FILTERS.DATE-DAY-FROM-TIME' | translate\"></span>\n                                                                                    <input type=\"checkbox\"\n                                                                                           class=\"is-invalid\"\n                                                                                           formControlName=\"hoursInterval\"\n                                                                                          >\n                                                                                    <span class=\"checkmark\"></span>\n                                                                                </label>\n\n                                                                                <p class=\"error-msg\" *ngIf=\"resTypeForm.hasError('dateInvalid')\">Puteti alege o singura filtrare in functie de data!</p>\n                                                                            </div>\n\n                                                                        </div>\n\n\n                                                                    </div>\n\n                                                                </div>\n                                                            </div>\n                                                        </form>\n\n                                                    </div>\n\n                                                    <div class=\"card-footer border-0\">\n                                                        <div class=\"row\">\n                                                            <div class=\"col-12 col-sm-6\">\n                                                                <button class=\"btn-auto btn-color-outline w-100\"\n                                                                        id=\"btn-dismiss-add-edit\"\n                                                                        (click)=\"d(); resTypeInit()\">\n                                                                    <i class=\"fas fa-times\"></i>\n                                                                    {{ 'BTN.CANCEL' | translate}}\n                                                                </button>\n                                                            </div>\n\n                                                            <div class=\"col-12 col-sm-6\">\n                                                                <button class=\"btn-auto btn-color-fill w-100\"\n                                                                        id=\"btn-save-res-type\"\n                                                                        (click)=\"addResType(res.id)\">\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                    {{ 'BTN.CONFIRM' | translate}}\n                                                                </button>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </ng-template>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <!--            Modal Delete Resource-->\n                    <ng-template #deleteResource let-c=\"close\" let-d=\"dismiss\">\n                        <div class=\"modal-card card\">\n                            <div class=\"card-header border-0\">\n                                <h3 class=\"m-0\">\n                                    {{ 'TITLES.DELETE-CATEGORY' | translate }}\n                                </h3>\n                            </div>\n\n                            <div class=\"card-body\">\n                                <p>{{ 'TITLES.DELETE-CATEGORY-DIRECTIONS' | translate}}</p>\n                                <div class=\"card-resource card\">\n                                    <div class=\"card-body d-flex justify-content-between align-items-center flex-row\">\n                                        <h3>{{res.nameEn}} / {{res.nameRo}}</h3>\n                                        <p>{{'TITLES.TYPE-OF-RES' | translate}}:\n                                            <span>{{resourceTypes[i]?.length}}</span>\n                                        </p>\n                                    </div>\n                                </div>\n\n                            </div>\n\n                            <div class=\"card-footer border-0\">\n                                <div class=\"row\">\n                                    <div class=\"col-12 col-sm-6\">\n                                        <button class=\"btn-auto btn-color-outline w-100\"\n                                                id=\"btn-dismiss-delete-{{i}}\"\n                                                (click)=\"d()\">\n                                            <i class=\"fas fa-times\"></i>\n                                            {{ 'BTN.CANCEL' | translate}}\n                                        </button>\n                                    </div>\n\n                                    <div class=\"col-12 col-sm-6\">\n                                        <button class=\"btn-auto btn-color-fill w-100\"\n                                                id=\"btn-confirm-delete-{{i}}\"\n                                                (click)=\"deleteCategory(res.id)\"\n                                        >\n                                            <i class=\"fas fa-check\"></i>\n                                            {{ 'BTN.CONFIRM' | translate}}\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n\n\n                </div>\n            </div>\n\n\n            <mat-paginator [pageSizeOptions]=\"pageSizeArray\"\n                           [pageSize]=\"pageSize\"\n                           [length]=\"paginationInfo?.totalElements\"\n                           (page)=\"pageChanged($event)\"\n                           aria-label=\"Select page of resources\"></mat-paginator>\n\n            <!--        [length]=\"paginationInfo?.totalElements\"-->\n            <!--        (page)=\"pageChanged($event)\"-->\n\n        </div>\n\n    </div>\n\n</div>\n\n<!--            Modal Add Resource-->\n<ng-template #addResource let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-card card\">\n        <div class=\"card-header border-0\">\n            <h3 class=\"m-0\">\n                {{'TITLES.NEW-CATEGORY' | translate}}\n            </h3>\n        </div>\n\n        <div class=\"card-body\">\n\n            <div class=\"card-resource add-design card\">\n                <div class=\"card-body no-wrapper px-0 d-flex justify-content-center align-items-start flex-column\">\n                    <form [formGroup]=\"categoryForm\" class=\"w-100\">\n                        <mat-form-field class=\"col-md-12  col-sm-12\" appearance=\"outline\">\n                            <mat-label>{{'TITLES.NAME-EN' | translate}}</mat-label>\n                            <input matInput placeholder=\"{{'TITLES.NEW-CATEGORY' | translate}}\" formControlName=\"nameEn\"\n                                   #categoryNameEn>\n                            <i class=\"fas fa-times-circle\" type=\"button\" *ngIf=\"categoryForm.get('nameEn').value\"\n                               (click)=\"clearFormControlCategory('nameEn')\" matSuffix></i>\n\n                            <mat-error\n                                    *ngIf=\"categoryForm.controls.nameEn.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                            </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field class=\"col-md-12  col-sm-12\" appearance=\"outline\">\n                            <mat-label>{{'TITLES.NAME-RO' | translate}}</mat-label>\n                            <input matInput placeholder=\"{{'TITLES.NEW-CATEGORY' | translate}}\" formControlName=\"nameRo\"\n                                   #categoryNameRo>\n\n                            <mat-error\n                                    *ngIf=\"categoryForm.controls.nameRo.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                            </mat-error>\n                        </mat-form-field>\n\n\n                        <input type=\"checkbox\" formControlName=\"enableForList\" #enableForList> Afișare categorie în\n                        listă\n\n\n                    </form>\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"card-footer border-0\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-6\">\n                    <button class=\"btn-auto btn-color-outline w-100\"\n                            id=\"btn-dismiss-add\"\n                            (click)=\"d(); categoryInit()\">\n                        <i class=\"fas fa-times\"></i>\n                        {{ 'BTN.CANCEL' | translate}}\n                    </button>\n                </div>\n\n                <div class=\"col-12 col-sm-6\">\n                    <button class=\"btn-auto btn-color-fill w-100\"\n                            id=\"btn-confirm-add-category\"\n                            (click)=\"addNewCategory(categoryNameEn.value, categoryNameRo.value, enableForList.checked)\"\n                    >\n                        <i class=\"fas fa-check\"></i>\n                        {{ 'BTN.CONFIRM' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_domains_domains_module_ts.js.map