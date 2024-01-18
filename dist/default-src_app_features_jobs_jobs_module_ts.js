(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_features_jobs_jobs_module_ts"],{

/***/ 71257:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-cv-certification/add-edit-cv-certification.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditCvCertificationComponent": () => (/* binding */ AddEditCvCertificationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_cv_certification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-cv-certification.component.html?ngResource */ 51170);
/* harmony import */ var _add_edit_cv_certification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-cv-certification.component.scss?ngResource */ 86878);
/* harmony import */ var _add_edit_cv_certification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_edit_cv_certification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _services_cv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cv.service */ 97309);







let AddEditCvCertificationComponent = class AddEditCvCertificationComponent {
  constructor(dialogRef, givenData, fb, cvService) {
    this.dialogRef = dialogRef;
    this.givenData = givenData;
    this.fb = fb;
    this.cvService = cvService;
    this.isEditMode = false;
  }
  ngOnInit() {
    this.getLastIndex();
    this.formInit();
    this.checkIfEdit();
  }
  getLastIndex() {
    const certificationList = this.cvService.certificationList$.getValue();
    this.lastIndex = certificationList.length > 0 ? certificationList[certificationList?.length - 1].index : -1;
  }
  formInit() {
    this.certificationForm = this.fb.group({
      index: this.givenData ? this.givenData.givenData.index : this.lastIndex + 1,
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      certificationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      dateOfCertification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      expirationDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      certificationLink: ''
    });
  }
  checkIfEdit() {
    if (this.givenData) {
      this.isEditMode = true;
      this.certificationForm.patchValue(this.givenData.givenData);
    } else {
      this.isEditMode = false;
    }
  }
  confirm() {
    this.certificationForm.markAllAsTouched();
    if (this.certificationForm.valid) {
      if (this.isEditMode) {
        this.updateCertification(this.certificationForm.value);
      } else {
        this.createCertification(this.certificationForm.value);
      }
    }
  }
  updateCertification(certificationValue) {
    const certificationList = this.cvService.certificationList$.getValue();
    // Find selected ticket by index
    const selectedIndex = certificationList.findIndex(obj => obj.index === certificationValue.index);
    // Check if the ticket was found and update
    if (selectedIndex !== -1) {
      certificationList[selectedIndex] = certificationValue;
      this.cvService.certificationList$.next(certificationList);
      this.cvService.refreshCertificationList$.next(true);
      this.close();
    } else {
      console.log('not found');
    }
  }
  createCertification(certificationValue) {
    this.cvService.addCertificationToList(certificationValue);
    this.cvService.refreshCertificationList$.next(true);
    this.close();
    console.log(this.cvService.certificationList$.getValue());
  }
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
  }, {
    type: _services_cv_service__WEBPACK_IMPORTED_MODULE_2__.CVService
  }];
};
AddEditCvCertificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-add-edit-cv-certification',
  template: _add_edit_cv_certification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_add_edit_cv_certification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddEditCvCertificationComponent);


/***/ }),

/***/ 83250:
/*!****************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-cv-education/add-edit-cv-education.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditCvEducationComponent": () => (/* binding */ AddEditCvEducationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_cv_education_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-cv-education.component.html?ngResource */ 85674);
/* harmony import */ var _add_edit_cv_education_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-cv-education.component.scss?ngResource */ 14333);
/* harmony import */ var _add_edit_cv_education_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_edit_cv_education_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _services_cv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cv.service */ 97309);







let AddEditCvEducationComponent = class AddEditCvEducationComponent {
  constructor(dialogRef, givenData, fb, cvService) {
    this.dialogRef = dialogRef;
    this.givenData = givenData;
    this.fb = fb;
    this.cvService = cvService;
    this.isEditMode = false;
  }
  ngOnInit() {
    this.getLastIndex();
    this.formInit();
    this.checkIfEdit();
  }
  getLastIndex() {
    const educationList = this.cvService.educationList$.getValue();
    this.lastIndex = educationList.length > 0 ? educationList[educationList?.length - 1]?.index : -1;
  }
  formInit() {
    this.educationForm = this.fb.group({
      index: this.givenData ? this.givenData.givenData.index : this.lastIndex + 1,
      schoolName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      group: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  checkIfEdit() {
    if (this.givenData) {
      this.isEditMode = true;
      this.educationForm.patchValue(this.givenData.givenData);
    } else {
      this.isEditMode = false;
    }
  }
  confirm() {
    this.educationForm.markAllAsTouched();
    if (this.educationForm.valid) {
      if (this.isEditMode) {
        this.updateEducation(this.educationForm.value);
      } else {
        this.createEducation(this.educationForm.value);
      }
    }
  }
  updateEducation(educationValue) {
    const educationList = this.cvService.educationList$.getValue();
    // Find selected ticket by index
    const selectedIndex = educationList.findIndex(obj => obj.index === educationValue.index);
    // Check if the ticket was found and update
    if (selectedIndex !== -1) {
      educationList[selectedIndex] = educationValue;
      this.cvService.educationList$.next(educationList);
      this.cvService.refreshEducationList$.next(true);
      this.close();
    } else {
      console.log('not found');
    }
  }
  createEducation(educationValue) {
    this.cvService.addEducationToList(educationValue);
    this.cvService.refreshEducationList$.next(true);
    this.close();
    console.log(this.cvService.educationList$.getValue());
  }
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
  }, {
    type: _services_cv_service__WEBPACK_IMPORTED_MODULE_2__.CVService
  }];
};
AddEditCvEducationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-add-edit-cv-education',
  template: _add_edit_cv_education_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_add_edit_cv_education_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddEditCvEducationComponent);


/***/ }),

/***/ 2830:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-cv-experience/add-edit-cv-experience.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditCvExperienceComponent": () => (/* binding */ AddEditCvExperienceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_cv_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-cv-experience.component.html?ngResource */ 55642);
/* harmony import */ var _add_edit_cv_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-cv-experience.component.scss?ngResource */ 77209);
/* harmony import */ var _add_edit_cv_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_edit_cv_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_cv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cv.service */ 97309);







let AddEditCvExperienceComponent = class AddEditCvExperienceComponent {
  constructor(dialogRef, givenData, fb, cvService) {
    this.dialogRef = dialogRef;
    this.givenData = givenData;
    this.fb = fb;
    this.cvService = cvService;
    this.isEditMode = false;
  }
  ngOnInit() {
    this.getLastIndex();
    this.formInit();
    this.checkIfEdit();
  }
  formInit() {
    this.experienceForm = this.fb.group({
      index: [this.givenData ? this.givenData.givenData.index : this.lastIndex + 1],
      positionHeld: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      typeOfContract: '',
      companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      location: '',
      jobStartDate: '',
      jobEndDate: '',
      description: ''
    });
  }
  getLastIndex() {
    const experienceList = this.cvService.experienceList$.getValue();
    this.lastIndex = experienceList.length > 0 ? experienceList[experienceList?.length - 1].index : -1;
  }
  checkIfEdit() {
    if (this.givenData) {
      this.isEditMode = true;
      this.experienceForm.patchValue(this.givenData.givenData);
    } else {
      this.isEditMode = false;
    }
  }
  confirm() {
    this.experienceForm.markAllAsTouched();
    if (this.experienceForm.valid) {
      if (this.isEditMode) {
        this.updateExperience(this.experienceForm.value);
      } else {
        this.createExperience(this.experienceForm.value);
      }
    } else {
      return;
    }
  }
  updateExperience(experienceValue) {
    const experienceList = this.cvService.experienceList$.getValue();
    // Find selected ticket by index
    const selectedIndex = experienceList.findIndex(obj => obj.index === experienceValue.index);
    // Check if the ticket was found and update
    if (selectedIndex !== -1) {
      experienceList[selectedIndex] = experienceValue;
      this.cvService.experienceList$.next(experienceList);
      this.cvService.refreshExperienceList$.next(true);
      this.close();
    } else {
      console.log('not found');
    }
  }
  createExperience(experienceValue) {
    this.cvService.addExperienceToList(experienceValue);
    this.cvService.refreshExperienceList$.next(true);
    this.close();
    console.log(this.cvService.experienceList$.getValue());
  }
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
  }, {
    type: _services_cv_service__WEBPACK_IMPORTED_MODULE_2__.CVService
  }];
};
AddEditCvExperienceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-add-edit-cv-experience',
  template: _add_edit_cv_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_add_edit_cv_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddEditCvExperienceComponent);


/***/ }),

/***/ 45034:
/*!**********************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-job/add-edit-job.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditJobComponent": () => (/* binding */ AddEditJobComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_job_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-job.component.html?ngResource */ 23458);
/* harmony import */ var _add_edit_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-job.component.scss?ngResource */ 80702);
/* harmony import */ var _add_edit_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_edit_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _services_jobs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/jobs.store */ 97391);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/system-settings.service */ 42912);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/job.service */ 88659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/_services/location.service */ 63712);












let AddEditJobComponent = class AddEditJobComponent {
  constructor(jobsStore, settingsService, fb, jobService, router, route, toastService, locationService) {
    this.jobsStore = jobsStore;
    this.settingsService = settingsService;
    this.fb = fb;
    this.jobService = jobService;
    this.router = router;
    this.route = route;
    this.toastService = toastService;
    this.locationService = locationService;
    this.isEditMode = false;
    this.attributesArray = [];
    this.thumbnailUrl = {
      fileName: undefined,
      filePath: undefined
    };
    this.countries = [];
    this.cities = [];
    this.$fileObservables = [];
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
    this.formBtnClicked = false;
  }
  ngOnInit() {
    this.formInit();
    this.getSettings();
    this.getJobResourceType();
    this.getCountries();
    this.checkIfEdit();
  }
  getSettings() {
    this.settingsService.getSystemSetting().subscribe({
      next: settings => {
        this.jobSettings = settings.jobOptions.myJobOffers;
      }
    });
  }
  //Get the domain with unique key 'jobs' and the resourceType for Jobs
  getJobResourceType() {
    this.jobService.getListOfDomains().subscribe({
      next: domainsList => {
        domainsList.forEach(domain => {
          if (domain.key === 'jobs') {
            this.jobForm.get('domain').patchValue(domain.id);
            this.jobService.getResourceTypesByDomainId(domain.id).subscribe({
              next: domainData => {
                this.jobForm.get('resourceTypeId').patchValue(domainData[0].id);
                this.jobForm.get('categoryId').patchValue(domainData[0].categoryId);
                this.getTemplateData(domainData[0].id);
              }
            });
          }
        });
      }
    });
  }
  //Get the attributes from the template
  getTemplateData(resourceTypeId) {
    this.jobService.getListTemplateFiltered(0, -1, null, null, {
      resourceTypeId: resourceTypeId
    }).subscribe({
      next: templates => {
        console.log(templates.content[0]);
        this.jobService.getAttributesFromTemplate(templates.content[0].id).subscribe({
          next: attributes => {
            console.log('ATTRS', attributes);
            if (this.isEditMode) {
              this.compareAttributes(this.jobData.attributes, attributes);
              this.createInputs(this.attributeTabs);
            } else {
              this.attributeTabs = attributes;
              this.createInputs(attributes);
            }
          }
        });
      }
    });
  }
  createInputs(attributes) {
    const attributesForm = this.jobForm.get('attributesForm');
    for (const section of attributes) {
      const sentionFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
      for (const inputField of section.tabAttributes) {
        if (inputField.valueType === 'toggle') {
          sentionFormGroup.addControl(inputField.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(inputField.attributeValue ? inputField.attributeValue : 'false'));
        } else if (inputField.valueType === 'multiple-select') {
          sentionFormGroup.addControl(inputField.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(inputField.attributeValue ? inputField.attributeValue.split(',') : []));
        } else {
          sentionFormGroup.addControl(inputField.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(inputField.attributeValue ? inputField.attributeValue : '', inputField.propertyRequired ? _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required : null));
        }
      }
      attributesForm.addControl(section.tabName, sentionFormGroup);
      console.log('FORM', this.jobForm.value);
    }
  }
  compareAttributes(jobAttr, templateAttributes) {
    this.attributeTabs = [];
    // console.log('res', eventAttr);
    // console.log('temp', templateAttributes);
    templateAttributes.forEach(templateTab => {
      jobAttr.forEach(resourceTab => {
        //verify if you are in the same tab
        if (templateTab.tabName === resourceTab.tabName) {
          const array = [];
          templateTab.tabAttributes.forEach(templateAttribute => {
            if (resourceTab.tabAttributes?.length > 0) {
              resourceTab.tabAttributes.forEach(resourceAttribute => {
                //see if the attributes have the same id
                if (templateAttribute.id === resourceAttribute.attributeId) {
                  //if they have the same id and the attribute is not already in the array
                  const attributeIndex = array.findIndex(attr => attr.id === templateAttribute.id);
                  if (attributeIndex === -1) {
                    //push the attribute from template adding the value from resource
                    array.push({
                      ...templateAttribute,
                      attributeValue: resourceAttribute.attributeValue
                    });
                  }
                } else {
                  //if the attributes dont have the same id, see if you can find it in the resource
                  const find = resourceTab.tabAttributes.find(attr => attr.attributeId === templateAttribute.id);
                  const attributeIndex = array.findIndex(attr => attr.id === templateAttribute.id);
                  //if the attribute isnt on the resource and it isnt on the array
                  if (attributeIndex === -1 && !find) {
                    //push the attribute with no value
                    // console.log('template attr not found', templateAttribute)
                    array.push({
                      ...templateAttribute,
                      attributeValue: ''
                    });
                  }
                }
              });
            } else {
              const attributeIndex = array.findIndex(attr => attr.id === templateAttribute.id);
              if (attributeIndex === -1) {
                //push the attribute with no value
                // console.log('template attr not found', templateAttribute)
                array.push({
                  ...templateAttribute,
                  attributeValue: ''
                });
              }
            }
          });
          this.attributeTabs.push({
            tabName: templateTab.tabName,
            tabAttributes: array
          });
        }
      });
      //after combining the resource attributes with the template attributes, see if you have all the template tabs
      const findTab = this.attributeTabs.find(section => templateTab.tabName === section.tabName);
      // console.log('find tab',findTab);
      //if not, add the tab with the name of the missing one and an empty array
      if (!findTab) {
        this.attributeTabs.push({
          tabName: templateTab.tabName,
          tabAttributes: []
        });
      }
    });
  }
  formInit() {
    this.jobForm = this.fb.group({
      id: null,
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      shortDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      description: '',
      resourceTypeId: '',
      categoryId: '',
      domain: '',
      bookingType: 'applyToJob',
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      slug: '',
      attributesForm: this.fb.group({})
    });
  }
  checkIfEdit() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(params => {
      if (params.get('id')) {
        this.isEditMode = true;
        return this.jobService.getResourceById(params.get('id'));
      } else {
        this.isEditMode = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)('');
      }
    })).subscribe(job => {
      console.log('GET JOB', job);
      this.jobForm.patchValue(job);
      this.jobData = job;
      if (this.isEditMode) {
        if (job.country) {
          this.getCities(job.country);
        }
        this.thumbnailUrl = Object.assign({}, job.featuredImage);
        // console.log(this.galleryUrls);
        if (!job.featuredImage) {
          this.thumbnailUrl = {
            fileName: undefined,
            filePath: undefined
          };
        }
      }
    });
  }
  makeAttributesToSend() {
    const formData = [];
    const attributesForm = this.jobForm.get('attributesForm');
    console.log(attributesForm);
    for (const group in attributesForm.controls) {
      console.log(group);
      const innerGroup = attributesForm.get(group);
      for (const control in innerGroup.controls) {
        console.log(control);
        this.attributeTabs.forEach(section => {
          section.tabAttributes.forEach(attribute => {
            if (attribute.name === control) {
              if (attribute.valueType === 'multiple-select') {
                formData.push({
                  tabName: section.tabName,
                  attributeName: control,
                  attributeId: attribute.id,
                  attributeValue: Array.isArray(attributesForm.get(group).get(control).value) ? attributesForm.get(group).get(control).value.join() : attributesForm.get(group).get(control).value,
                  attributeIconPath: attribute.icon.filePath
                });
              } else {
                formData.push({
                  tabName: section.tabName,
                  attributeName: control,
                  attributeId: attribute.id,
                  attributeValue: attributesForm.get(group).get(control).value,
                  attributeIconPath: attribute.icon.filePath
                });
              }
            }
          });
        });
      }
    }
    console.log('FORM DATA', formData);
    const attributes = formData.reduce((acc, item) => {
      const index = acc.findIndex(x => x.tabName === item.tabName);
      if (index !== -1) {
        acc[index].tabAttributes.push({
          attributeId: item.attributeId,
          attributeValue: item.attributeValue
        });
      } else {
        acc.push({
          tabName: item.tabName,
          tabAttributes: [{
            attributeId: item.attributeId,
            attributeValue: item.attributeValue
          }]
        });
      }
      return acc;
    }, []);
    console.log('ATTRIBUTES', attributes);
    if (attributes.length < 4) {
      if (!attributes.find(t => t.tabName === 'general_info')) {
        attributes.push({
          tabName: 'general_info',
          tabAttributes: []
        });
      }
      if (!attributes.find(t => t.tabName === 'about')) {
        attributes.push({
          tabName: 'about',
          tabAttributes: []
        });
      }
      if (!attributes.find(t => t.tabName === 'facilities')) {
        attributes.push({
          tabName: 'facilities',
          tabAttributes: []
        });
      }
      if (!attributes.find(t => t.tabName === 'contact')) {
        attributes.push({
          tabName: 'contact',
          tabAttributes: []
        });
      }
    }
    this.attributesArray = attributes;
    console.log(this.attributesArray);
  }
  clearForm(formControl) {
    this.jobForm.get(formControl).patchValue(null);
  }
  columnSize(size) {
    switch (size) {
      case 'full_row':
        return 'col-12';
      case 'half_row':
        return 'col-md-6 col-12';
      default:
        return 'col-12';
    }
  }
  //Featured image
  onThumbnailChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.thumbnailUrl.fileName = event.target.files[0].name;
      this.thumbnailFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => this.thumbnailUrl.filePath = reader.result;
      reader.readAsDataURL(this.thumbnailFile);
    }
  }
  removeThumbnail() {
    this.thumbnailUrl = {
      fileName: undefined,
      filePath: undefined
    };
    this.thumbnailFile = undefined;
  }
  getCountries() {
    this.locationService.getAllCountries().subscribe({
      next: countries => {
        this.countries = countries;
      }
    });
  }
  getCities(event) {
    const country = {
      country: event?.value ? event.value : event
    };
    this.locationService.getCityFilter(0, -1, null, null, country).subscribe({
      next: cities => {
        // console.log(cities);
        this.cities = cities.content;
      }
    });
  }
  submitJob() {
    this.jobForm.markAllAsTouched();
    this.formBtnClicked = true;
    if (this.jobForm.valid) {
      this.makeAttributesToSend();
      const jobData = {
        ...this.jobForm.value,
        attributes: this.attributesArray
      };
      if (this.isEditMode) {
        this.updateJob(jobData);
      } else {
        console.log('JOB TO SEND', jobData);
        this.addJob(jobData);
      }
    } else {
      this.toastService.showToast('Error', 'Completati toate campurile obligatorii!', "error");
      return;
    }
  }
  addJob(jobData) {
    this.jobService.addResource(jobData).subscribe({
      next: resp => {
        console.log('AFTER ADD', resp);
        if (resp.success) {
          if (this.thumbnailFile) {
            const thumbnailData = new FormData();
            thumbnailData.append('file', this.thumbnailFile);
            console.log(thumbnailData);
            console.log(this.thumbnailFile);
            this.$fileObservables.push(this.jobService.uploadResourceImage(resp.reason, thumbnailData));
          }
          if (this.$fileObservables.length > 0) {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(...this.$fileObservables).subscribe(() => {
              this.toastService.showToast('succes', 'Job adaugat cu succes', 'success');
              // this.router.navigate(['/private/staff/events/list']);
              this.router.navigate(['../my-job-offers'], {
                relativeTo: this.route
              });
            });
          }
          this.toastService.showToast('succes', 'Job adaugat cu succes', 'success');
          // this.router.navigate(['/private/staff/events/list']);
          this.router.navigate(['../my-job-offers'], {
            relativeTo: this.route
          });
        }
      }
    });
  }
  updateJob(jobData) {
    this.jobService.updateResource(this.jobForm.value.id, jobData).subscribe({
      next: resp => {
        if (resp.success) {
          if (this.thumbnailFile) {
            const thumbnailData = new FormData();
            thumbnailData.append('file', this.thumbnailFile);
            console.log(thumbnailData);
            console.log(this.thumbnailFile);
            this.$fileObservables.push(this.jobService.uploadResourceImage(this.jobForm.value.id, thumbnailData));
          }
          if (this.$fileObservables.length > 0) {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(...this.$fileObservables).subscribe(() => {});
          }
          this.toastService.showToast('succes', 'Job editat cu succes', 'success');
          // this.router.navigate(['/private/staff/events/list']);
          this.router.navigate(['../../my-job-offers'], {
            relativeTo: this.route
          });
        }
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_jobs_store__WEBPACK_IMPORTED_MODULE_2__.JobsStore
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_3__.SystemSettingsService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: _services_job_service__WEBPACK_IMPORTED_MODULE_4__.JobService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
  }, {
    type: _shared_services_location_service__WEBPACK_IMPORTED_MODULE_6__.LocationService
  }];
};
AddEditJobComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-add-edit-job',
  template: _add_edit_job_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_services_jobs_store__WEBPACK_IMPORTED_MODULE_2__.JobsStore],
  styles: [(_add_edit_job_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddEditJobComponent);


/***/ }),

/***/ 65113:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/delete-cv-data-modal/delete-cv-data-modal.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteCvDataModalComponent": () => (/* binding */ DeleteCvDataModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_cv_data_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-cv-data-modal.component.html?ngResource */ 78687);
/* harmony import */ var _delete_cv_data_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-cv-data-modal.component.scss?ngResource */ 11656);
/* harmony import */ var _delete_cv_data_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_delete_cv_data_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _services_cv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cv.service */ 97309);






let DeleteCvDataModalComponent = class DeleteCvDataModalComponent {
  constructor(cvService, dialogRef, data) {
    this.cvService = cvService;
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ngOnInit() {}
  close() {
    this.dialogRef.close();
  }
  deleteData() {
    if (this.data.type === 'education') {
      const list = this.cvService.educationList$.getValue();
      // Exclude the ticket by id
      const filtered = list.filter(data => data.index !== this.data.givenData.index);
      // Check if a room was deleted and update the array
      if (filtered.length !== list.length) {
        this.cvService.educationList$.next(filtered);
        this.cvService.refreshEducationList$.next(true);
      } else {
        console.log(`Room not found`);
      }
    } else if (this.data.type === 'experience') {
      const list = this.cvService.experienceList$.getValue();
      // Exclude the ticket by id
      const filtered = list.filter(data => data.index !== this.data.givenData.index);
      // Check if a room was deleted and update the array
      if (filtered.length !== list.length) {
        this.cvService.experienceList$.next(filtered);
        this.cvService.refreshExperienceList$.next(true);
      } else {
        console.log(`Room not found`);
      }
    } else if (this.data.type === 'certification') {
      const list = this.cvService.certificationList$.getValue();
      // Exclude the ticket by id
      const filtered = list.filter(data => data.index !== this.data.givenData.index);
      // Check if a room was deleted and update the array
      if (filtered.length !== list.length) {
        this.cvService.certificationList$.next(filtered);
        this.cvService.refreshCertificationList$.next(true);
      } else {
        console.log(`Room not found`);
      }
    }
    this.dialogRef.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_cv_service__WEBPACK_IMPORTED_MODULE_2__.CVService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA]
    }]
  }];
};
DeleteCvDataModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-delete-cv-data-modal',
  template: _delete_cv_data_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_delete_cv_data_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DeleteCvDataModalComponent);


/***/ }),

/***/ 49079:
/*!****************************************************************************!*\
  !*** ./src/app/features/jobs/_components/jobs-list/jobs-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsListComponent": () => (/* binding */ JobsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _jobs_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs-list.component.html?ngResource */ 63541);
/* harmony import */ var _jobs_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs-list.component.scss?ngResource */ 39975);
/* harmony import */ var _jobs_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jobs_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _services_jobs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/jobs.store */ 97391);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68951);








let JobsListComponent = class JobsListComponent {
  constructor(jobsStore, translate) {
    this.jobsStore = jobsStore;
    this.translate = translate;
    this.paginationInfo = null;
    this.resourceType = null;
    this.resourcesList = [];
    this.resourceTemplate = null;
    // pagination
    this.pageNr = 0;
    this.pageSize = 5;
    this.sortByProperty = null;
    this.sortDirection = null;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.jobOffersState = this.jobsStore.getMyJobOffersState();
    this.listenToResourceTemplate();
    this.listenToResourceType();
    this.getJobsList();
    this.checkLanguage();
  }
  listenToResourceTemplate() {
    this.jobsStore.resourceTemplateObs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceTemplate = res;
      }
    });
  }
  listenToResourceType() {
    this.jobsStore.resourceTypeObs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceType = res;
      }
    });
  }
  getJobsList() {
    this.jobsStore.getJobOffers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        if (this.resourcesPaginator && this.paginationInfo?.totalElements !== res.totalElements) {
          this.resourcesPaginator.firstPage();
        }
        this.paginationInfo = res;
        this.resourcesList = res.content;
      }
    });
  }
  checkLanguage() {
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
  }
  onSortChange(event) {
    this.sortByProperty = event.value;
    this.sortDirection = 'asc';
    if (this.resourcesPaginator.pageIndex !== 0) {
      this.resourcesPaginator.firstPage();
      return;
    }
    this.jobsStore.updatePagination(this.pageNr, this.pageSize, this.sortByProperty, this.sortDirection);
  }
  onPaginationChange(event) {
    if (event.pageSize !== this.pageSize) {
      this.pageSize = event.pageSize;
      this.resourcesPaginator.firstPage();
    }
    this.pageNr = event.pageIndex;
    this.jobsStore.updatePagination(this.pageNr, this.pageSize, this.sortByProperty, this.sortDirection);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_jobs_store__WEBPACK_IMPORTED_MODULE_2__.JobsStore
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
  }];
  static #_2 = this.propDecorators = {
    resourcesPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['resourcesPaginator']
    }]
  };
};
JobsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-jobs-list',
  template: _jobs_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_jobs_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], JobsListComponent);


/***/ }),

/***/ 52502:
/*!**********************************************************************************!*\
  !*** ./src/app/features/jobs/_components/jobs-sidebar/jobs-sidebar.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsSidebarComponent": () => (/* binding */ JobsSidebarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _jobs_sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs-sidebar.component.html?ngResource */ 93971);
/* harmony import */ var _jobs_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs-sidebar.component.scss?ngResource */ 43103);
/* harmony import */ var _jobs_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jobs_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_jobs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/jobs.store */ 97391);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);










let JobsSidebarComponent = class JobsSidebarComponent {
  constructor(jobsStore, toastService, translate, fb) {
    this.jobsStore = jobsStore;
    this.toastService = toastService;
    this.translate = translate;
    this.fb = fb;
    this.filtersSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.filterAttributes = [];
    this.resourceTitleToSearch = null;
    this.filtersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
    this.anyFilterSelected = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.getFilterAttributes();
  }
  getFilterAttributes() {
    this.jobsStore.getFilterAttributesFromTemplate().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.filterAttributes = [...res];
        console.log(this.filterAttributes);
        this.initFilterForm();
      },
      error: () => {
        this.toastService.showToast(this.translate.instant('TOAST.ERROR'), this.translate.instant('TOAST.SERVER-ERROR'), 'error');
      }
    });
  }
  initFilterForm() {
    if (!this.filterAttributes) {
      return;
    }
    // DO NOT DELETE
    /*this.filterAttributes.forEach( attribute => {
        if (attribute.valueType === 'select') {
            this.filtersForm.addControl(attribute.name, this.fb.control(false));
         } else if (attribute.valueType === 'multiple-select') {
            const newFormGroup = this.fb.group({});
            if (attribute.valueOptions) {
                attribute.valueOptions.forEach( valueOption => {
                    newFormGroup.addControl(valueOption, this.fb.control(false));
                });
            }
            this.filtersForm.addControl(attribute.name, newFormGroup);
        }
    });*/
    this.filterAttributes.forEach(attribute => {
      const newFormGroup = this.fb.group({});
      if (attribute.valueOptions) {
        attribute.valueOptions.forEach(valueOption => {
          newFormGroup.addControl(valueOption, this.fb.control(false));
        });
      }
      this.filtersForm.addControl(attribute.name, newFormGroup);
    });
    this.listenToFormChanges();
  }
  listenToFormChanges() {
    this.filtersForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe(newValue => {
      for (const objectKey of Object.keys(newValue)) {
        const formControls = newValue[objectKey];
        this.anyFilterSelected = Object.values(formControls).some(value => value === true);
        if (this.anyFilterSelected) {
          break;
        }
      }
    });
  }
  searchByTitle() {
    const filtersToSend = {
      title: this.resourceTitleToSearch
    };
    this.jobsStore.updateFilters(filtersToSend);
  }
  applyFilters() {
    this.filtersSubmitted.emit();
    const filtersToSend = {
      attributes: []
    };
    Object.keys(this.filtersForm.controls).forEach(abstractControlName => {
      const abstractControl = this.filtersForm.get(abstractControlName);
      // DO NOT DELETE
      /*if (abstractControl instanceof FormControl) {
          if (abstractControl.value) {
              filtersToSend.attributes.push({
                  attributeName: abstractControlName,
                  attributeValue: abstractControl.value
              });
          }
      } else if (abstractControl instanceof FormGroup) {
          const attributeValues = Object.keys(abstractControl.controls).map( control => {
              if (this.filtersForm.get([abstractControlName, control]).value) {
                  return control;
              }
              return null;
          }).filter( value => value);
           if (attributeValues.length > 0) {
              filtersToSend.attributes.push({
                  attributeName: abstractControlName,
                  attributeValue: attributeValues.join(',')
              });
          }
      }*/
      if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup) {
        const attributeValues = Object.keys(abstractControl.controls).map(control => {
          if (this.filtersForm.get([abstractControlName, control]).value) {
            return control;
          }
          return null;
        }).filter(value => value);
        if (attributeValues.length > 0) {
          filtersToSend.attributes.push({
            attributeName: abstractControlName,
            attributeValue: attributeValues.join(',')
          });
        }
      }
    });
    if (filtersToSend.attributes.length === 0) {
      this.jobsStore.updateFilters({
        attributes: null
      });
      return;
    }
    this.jobsStore.updateFilters(filtersToSend);
  }
  resetFilters() {
    this.filtersForm.reset();
    this.jobsStore.updateFilters({
      attributes: null
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_jobs_store__WEBPACK_IMPORTED_MODULE_2__.JobsStore
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }];
  static #_2 = this.propDecorators = {
    filtersSubmitted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  };
};
JobsSidebarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-jobs-sidebar',
  template: _jobs_sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_jobs_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], JobsSidebarComponent);


/***/ }),

/***/ 12254:
/*!************************************************************************!*\
  !*** ./src/app/features/jobs/_components/view-cv/view-cv.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewCvComponent": () => (/* binding */ ViewCvComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_cv_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-cv.component.html?ngResource */ 41281);
/* harmony import */ var _view_cv_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-cv.component.scss?ngResource */ 15135);
/* harmony import */ var _view_cv_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_cv_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/system-settings.service */ 42912);
/* harmony import */ var _services_cv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cv.service */ 97309);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/_services/userData.service */ 32763);









let ViewCvComponent = class ViewCvComponent {
  constructor(settingsService, cvService, route, userData) {
    this.settingsService = settingsService;
    this.cvService = cvService;
    this.route = route;
    this.userData = userData;
    this.readMore = true;
    this.myCv = false;
  }
  ngOnInit() {
    this.getSettings();
    this.getCvData();
  }
  getSettings() {
    this.settingsService.getSystemSetting().subscribe({
      next: settings => {
        console.log(settings);
        this.cvSettings = settings.jobOptions.myCv;
      }
    });
  }
  getCurrentUser() {
    this.userData.getCurrentUser().subscribe({
      next: currentUser => {
        this.currentUserId = currentUser.id;
        console.log('current user id', this.currentUserId);
      }
    });
  }
  getCvData() {
    this.getCurrentUser();
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => {
      if (params.get('userId')) {
        if (params.get('userId') === this.currentUserId) {
          this.myCv = true;
        }
        return this.cvService.getCvByUserId(params.get('userId'));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)('');
      }
    })).subscribe(cv => {
      console.log('GET CV', cv);
      this.currentCv = cv;
    });
  }
  changeReadMore() {
    this.readMore = !this.readMore;
  }
  downloadCv() {
    const link = document.createElement('a');
    const cv = this.currentCv.pdfCv;
    link.href = cv?.filePath;
    link.download = cv?.fileName;
    link.target = '_blank';
    link.click();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_2__.SystemSettingsService
  }, {
    type: _services_cv_service__WEBPACK_IMPORTED_MODULE_3__.CVService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService
  }];
};
ViewCvComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-view-cv',
  template: _view_cv_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_view_cv_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ViewCvComponent);


/***/ }),

/***/ 97391:
/*!*******************************************************!*\
  !*** ./src/app/features/jobs/_services/jobs.store.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsStore": () => (/* binding */ JobsStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);






let JobsStore = class JobsStore {
  constructor(http, route, userDataService) {
    this.http = http;
    this.route = route;
    this.userDataService = userDataService;
    // resource type state
    this.resourceTypeState = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.resourceTypeObs$ = this.resourceTypeState.asObservable();
    // resource template state
    this.resourceTemplateState = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.resourceTemplateObs$ = this.resourceTemplateState.asObservable();
    // resources pagination and filters state
    this.resourceListState = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.resourceListObs$ = this.resourceListState.asObservable();
    this.myJobOffers = false;
    // selected resource state
    this.resourceState = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.resourceObs$ = this.resourceState.asObservable();
    this.domainId = null;
    this.userId = null;
    // filters
    this.filtersObj = {};
    // pagination
    this.pageNr = 0;
    this.pageSize = 5;
    this.sortBy = 'lastUpdateDate';
    this.sortDirection = 'desc';
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    // initializarea serviciului se face in job-offers
    this.domainId = this.route.snapshot.params.domainId;
    if (this.route.snapshot.data?.myJobOffers) {
      this.myJobOffers = true;
    }
    this.filtersObj = {
      ...this.filtersObj,
      domain: this.domainId,
      status: this.myJobOffers ? null : 'active'
    };
  }
  getMyJobOffersState() {
    return this.myJobOffers;
  }
  // initializarea state-ului se face in jobs-sidebar
  getFilterAttributesFromTemplate() {
    return this.http.get('/bestinform/getResourceTypesByDomainId?domainId=' + this.domainId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(resourceTypes => {
      if (resourceTypes) {
        this.resourceTypeState.next(resourceTypes[0]);
        console.log(resourceTypes[0]);
        return this.http.post('/bestinform/listResourceTemplateFiltered?page=0&size=1', {
          resourceTypeId: this.resourceTypeState.value.id
        }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(resourceTemplate => {
          if (resourceTemplate) {
            this.resourceTemplateState.next(resourceTemplate.content[0]);
            return this.http.get('/bestinform/getFilterAttributeFromTemplate?templateId=' + this.resourceTemplateState.value.id);
          }
        }));
      }
    }));
  }
  // initializarea state-ului se face in jobs-list
  getJobOffers() {
    if (this.myJobOffers) {
      if (this.userId) {
        return this.listResourceFiltered();
      } else {
        return this.userDataService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(user => this.userId = user.id), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(user => {
          if (user) {
            this.filtersObj = {
              ...this.filtersObj,
              userId: this.userId
            };
            return this.listResourceFiltered();
          }
        }));
      }
    } else {
      return this.listResourceFiltered();
    }
  }
  listResourceFiltered() {
    return this.http.post('/bestinform/listResourceFiltered?page=' + this.pageNr + '&size=' + this.pageSize + '&sort=' + this.sortBy + '&dir=' + this.sortDirection, this.filtersObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(resources => {
      if (resources) {
        this.resourceListState.next(resources);
        return this.resourceListObs$;
      }
    }));
  }
  updateFilters(newFilters) {
    this.filtersObj = {
      ...this.filtersObj,
      ...newFilters
    };
    void (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.getJobOffers());
  }
  updatePagination(pageNr, pageSize, sortByProperty, sortDirection) {
    this.pageNr = pageNr;
    this.pageSize = pageSize;
    this.sortBy = sortByProperty;
    this.sortDirection = sortDirection;
    void (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.getJobOffers());
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_0__.UserDataService
  }];
};
JobsStore = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)()], JobsStore);


/***/ }),

/***/ 26847:
/*!****************************************************************************!*\
  !*** ./src/app/features/jobs/candidates-list/candidates-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidatesListComponent": () => (/* binding */ CandidatesListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _candidates_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candidates-list.component.html?ngResource */ 26751);
/* harmony import */ var _candidates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./candidates-list.component.scss?ngResource */ 32106);
/* harmony import */ var _candidates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_candidates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/system-settings.service */ 42912);
/* harmony import */ var _services_jobs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/jobs.store */ 97391);
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/job.service */ 88659);







let CandidatesListComponent = class CandidatesListComponent {
  constructor(settingsService, jobService) {
    this.settingsService = settingsService;
    this.jobService = jobService;
    // pagination
    this.pageNr = 0;
    this.pageSize = 10;
    this.sortByProperty = 'name';
    this.sortDirection = 'asc';
  }
  ngOnInit() {
    this.getSettings();
    this.getCandidatesList();
  }
  getCandidatesList() {
    const filters = {
      // isPublic: true
    };
    this.jobService.getListCvFilteredpage(this.pageNr, this.pageSize, this.sortByProperty, this.sortDirection, filters).subscribe({
      next: list => {
        this.candidatesList = list.content;
        this.totalElements = list.totalElements;
        console.log(this.candidatesList);
      }
    });
  }
  onPaginationChange(event) {
    if (event.pageSize !== this.pageSize) {
      this.pageSize = event.pageSize;
      this.candidatesPaginator.firstPage();
    }
    this.pageNr = event.pageIndex;
    this.getCandidatesList();
  }
  getSettings() {
    this.settingsService.getSystemSetting().subscribe({
      next: settings => {
        console.log(settings);
        this.candidatesListSettings = settings.jobOptions.candidates;
      }
    });
  }
  scrollResourcesListIntoView() {
    this.jobsListRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_2__.SystemSettingsService
  }, {
    type: _services_job_service__WEBPACK_IMPORTED_MODULE_4__.JobService
  }];
  static #_2 = this.propDecorators = {
    jobsListRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
      args: ['jobsList']
    }],
    candidatesPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
      args: ['candidatesPaginator']
    }]
  };
};
CandidatesListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-candidates-list',
  template: _candidates_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_services_jobs_store__WEBPACK_IMPORTED_MODULE_3__.JobsStore],
  styles: [(_candidates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CandidatesListComponent);


/***/ }),

/***/ 33996:
/*!******************************************************************!*\
  !*** ./src/app/features/jobs/job-offers/job-offers.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobOffersComponent": () => (/* binding */ JobOffersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _job_offers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-offers.component.html?ngResource */ 5988);
/* harmony import */ var _job_offers_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-offers.component.scss?ngResource */ 43033);
/* harmony import */ var _job_offers_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_job_offers_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_jobs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/jobs.store */ 97391);





let JobOffersComponent = class JobOffersComponent {
  constructor(jobsStore) {
    this.jobsStore = jobsStore;
  }
  ngOnInit() {
    this.resourceType$ = this.jobsStore.resourceTypeObs$;
    this.myJobOffers = this.jobsStore.getMyJobOffersState();
  }
  scrollResourcesListIntoView() {
    this.jobsListRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_jobs_store__WEBPACK_IMPORTED_MODULE_2__.JobsStore
  }];
  static #_2 = this.propDecorators = {
    jobsListRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: ['jobsList']
    }]
  };
};
JobOffersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-job-offers',
  template: _job_offers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_services_jobs_store__WEBPACK_IMPORTED_MODULE_2__.JobsStore],
  styles: [(_job_offers_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], JobOffersComponent);


/***/ }),

/***/ 87596:
/*!**********************************************!*\
  !*** ./src/app/features/jobs/jobs.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsModule": () => (/* binding */ JobsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _job_offers_job_offers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-offers/job-offers.component */ 33996);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_jobs_list_jobs_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/jobs-list/jobs-list.component */ 49079);
/* harmony import */ var _components_jobs_sidebar_jobs_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/jobs-sidebar/jobs-sidebar.component */ 52502);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var _standalone_components_resource_card_with_template_resource_card_with_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../standalone-components/resource-card-with-template/resource-card-with-template.component */ 25520);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _components_add_edit_job_add_edit_job_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/add-edit-job/add-edit-job.component */ 45034);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @kolkov/angular-editor */ 89971);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/view-job/view-job.component */ 73758);
/* harmony import */ var _standalone_components_display_user_display_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../standalone-components/display-user/display-user.component */ 4177);
/* harmony import */ var _user_cv_user_cv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-cv/user-cv.component */ 46924);
/* harmony import */ var _standalone_components_cv_card_cv_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../standalone-components/cv-card/cv-card.component */ 9137);
/* harmony import */ var _components_add_edit_cv_experience_add_edit_cv_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/add-edit-cv-experience/add-edit-cv-experience.component */ 2830);
/* harmony import */ var _components_add_edit_cv_education_add_edit_cv_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/add-edit-cv-education/add-edit-cv-education.component */ 83250);
/* harmony import */ var _components_add_edit_cv_certification_add_edit_cv_certification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/add-edit-cv-certification/add-edit-cv-certification.component */ 71257);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _components_apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_components/apply-job/apply-job.component */ 10981);
/* harmony import */ var _components_delete_cv_data_modal_delete_cv_data_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_components/delete-cv-data-modal/delete-cv-data-modal.component */ 65113);
/* harmony import */ var _candidates_list_candidates_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./candidates-list/candidates-list.component */ 26847);
/* harmony import */ var _components_view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_components/view-cv/view-cv.component */ 12254);

































const routes = [{
  path: '',
  redirectTo: 'job-offers',
  pathMatch: "full"
}, {
  path: 'job-offers',
  data: {
    myJobOffers: false
  },
  component: _job_offers_job_offers_component__WEBPACK_IMPORTED_MODULE_0__.JobOffersComponent,
  pathMatch: "full"
}, {
  path: 'my-job-offers',
  data: {
    myJobOffers: true
  },
  component: _job_offers_job_offers_component__WEBPACK_IMPORTED_MODULE_0__.JobOffersComponent,
  pathMatch: "full"
}, {
  path: 'create',
  component: _components_add_edit_job_add_edit_job_component__WEBPACK_IMPORTED_MODULE_4__.AddEditJobComponent
}, {
  path: 'edit/:id',
  component: _components_add_edit_job_add_edit_job_component__WEBPACK_IMPORTED_MODULE_4__.AddEditJobComponent
}, {
  path: 'view/:id',
  component: _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_7__.ViewJobComponent
}, {
  path: 'my-cv',
  component: _user_cv_user_cv_component__WEBPACK_IMPORTED_MODULE_9__.UserCvComponent
}, {
  path: 'candidates',
  component: _candidates_list_candidates_list_component__WEBPACK_IMPORTED_MODULE_16__.CandidatesListComponent
}, {
  path: 'cv/:userId',
  component: _components_view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_17__.ViewCvComponent
}];
let JobsModule = class JobsModule {};
JobsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.NgModule)({
  declarations: [_job_offers_job_offers_component__WEBPACK_IMPORTED_MODULE_0__.JobOffersComponent, _components_jobs_list_jobs_list_component__WEBPACK_IMPORTED_MODULE_1__.JobsListComponent, _components_jobs_sidebar_jobs_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.JobsSidebarComponent, _components_add_edit_job_add_edit_job_component__WEBPACK_IMPORTED_MODULE_4__.AddEditJobComponent, _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_7__.ViewJobComponent, _user_cv_user_cv_component__WEBPACK_IMPORTED_MODULE_9__.UserCvComponent, _components_add_edit_cv_experience_add_edit_cv_experience_component__WEBPACK_IMPORTED_MODULE_11__.AddEditCvExperienceComponent, _components_add_edit_cv_education_add_edit_cv_education_component__WEBPACK_IMPORTED_MODULE_12__.AddEditCvEducationComponent, _components_add_edit_cv_certification_add_edit_cv_certification_component__WEBPACK_IMPORTED_MODULE_13__.AddEditCvCertificationComponent, _components_apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_14__.ApplyJobComponent, _components_delete_cv_data_modal_delete_cv_data_modal_component__WEBPACK_IMPORTED_MODULE_15__.DeleteCvDataModalComponent, _candidates_list_candidates_list_component__WEBPACK_IMPORTED_MODULE_16__.CandidatesListComponent, _components_view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_17__.ViewCvComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forChild(routes), _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_24__.MatLegacyInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatLegacyCheckboxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_29__.MatLegacySelectModule, _standalone_components_resource_card_with_template_resource_card_with_template_component__WEBPACK_IMPORTED_MODULE_3__.ResourceCardWithTemplateComponent, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_30__.MatLegacyPaginatorModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_5__.DashboardHeaderComponent, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_31__.AngularEditorModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _standalone_components_display_user_display_user_component__WEBPACK_IMPORTED_MODULE_8__.DisplayUserComponent, _standalone_components_cv_card_cv_card_component__WEBPACK_IMPORTED_MODULE_10__.CvCardComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__.MatChipsModule]
})], JobsModule);


/***/ }),

/***/ 46924:
/*!************************************************************!*\
  !*** ./src/app/features/jobs/user-cv/user-cv.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCvComponent": () => (/* binding */ UserCvComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_cv_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-cv.component.html?ngResource */ 58591);
/* harmony import */ var _user_cv_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-cv.component.scss?ngResource */ 12588);
/* harmony import */ var _user_cv_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_cv_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/system-settings.service */ 42912);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_cv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/cv.service */ 97309);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _components_add_edit_cv_experience_add_edit_cv_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_components/add-edit-cv-experience/add-edit-cv-experience.component */ 2830);
/* harmony import */ var _components_add_edit_cv_certification_add_edit_cv_certification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_components/add-edit-cv-certification/add-edit-cv-certification.component */ 71257);
/* harmony import */ var _components_add_edit_cv_education_add_edit_cv_education_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_components/add-edit-cv-education/add-edit-cv-education.component */ 83250);












let UserCvComponent = class UserCvComponent {
  constructor(systemSettings, fb, cvService, toastService, dialog) {
    this.systemSettings = systemSettings;
    this.fb = fb;
    this.cvService = cvService;
    this.toastService = toastService;
    this.dialog = dialog;
    this.contactCheck = false;
    this.experienceList = [];
    this.certificationList = [];
    this.educationList = [];
    this.avatarCvUrl = {
      fileName: undefined,
      filePath: undefined
    };
    this.userCvUrl = {
      fileName: undefined,
      filePath: undefined
    };
    this.percentage = 0;
  }
  ngOnInit() {
    this.getSystemSettings();
    this.getCurrentUserCV();
    this.formInit();
    this.lists();
  }
  getPercentage() {
    this.percentage = 0;
    if (this.avatarCvUrl?.filePath && this.currentCv?.description && this.experienceList.length > 0 && this.educationList.length > 0 && this.certificationList.length > 0 && this.contactCheck) {
      this.percentage = 100;
    } else {
      if (this.avatarCvUrl?.filePath) {
        this.percentage += 16.66;
        this.percentageDisplay = this.percentage.toFixed(2);
      }
      if (this.currentCv?.description) {
        this.percentage += 16.66;
        this.percentageDisplay = this.percentage.toFixed(2);
      }
      if (this.experienceList.length > 0) {
        this.percentage += 16.66;
        this.percentageDisplay = this.percentage.toFixed(2);
      }
      if (this.educationList.length > 0) {
        this.percentage += 16.66;
        this.percentageDisplay = this.percentage.toFixed(2);
      }
      if (this.certificationList.length > 0) {
        this.percentage += 16.66;
        this.percentageDisplay = this.percentage.toFixed(2);
      }
      if (this.contactCheck) {
        this.percentage += 16.66;
        this.percentageDisplay = this.percentage.toFixed(2);
      }
    }
  }
  getSystemSettings() {
    this.systemSettings.getSystemSetting().subscribe({
      next: settings => {
        this.myCvImagePath = settings.jobOptions.myCv.image.filePath;
      }
    });
  }
  lists() {
    this.cvService.refreshExperienceListData().subscribe({
      next: () => {
        this.experienceList = this.cvService.experienceList$.getValue();
        this.getPercentage();
      }
    });
    this.cvService.refreshCertificationListData().subscribe({
      next: () => {
        this.certificationList = this.cvService.certificationList$.getValue();
        this.getPercentage();
      }
    });
    this.cvService.refreshEducationListData().subscribe({
      next: () => {
        this.educationList = this.cvService.educationList$.getValue();
        this.getPercentage();
      }
    });
  }
  formInit() {
    this.cvForm = this.fb.group({
      description: '',
      address: '',
      telephone: '',
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email],
      linkedin: '',
      linguisticCompetences: [],
      isPublic: [false],
      accept: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.requiredTrue]
    });
  }
  getCurrentUserCV() {
    this.cvService.getCurrentUserCV().subscribe({
      next: currentCV => {
        console.log('CURRENT CV', currentCV);
        if (currentCV) {
          this.cvForm.patchValue(currentCV);
          this.currentCv = currentCV;
          this.cvService.experienceList$.next(currentCV.experience);
          this.cvService.educationList$.next(currentCV.education);
          this.cvService.certificationList$.next(currentCV.certificationsAndDegrees);
          this.experienceList = currentCV.experience;
          this.educationList = currentCV.education;
          this.certificationList = currentCV.certificationsAndDegrees;
          this.avatarCvUrl = currentCV?.avatar ? currentCV.avatar : this.avatarCvUrl;
          this.userCvUrl = currentCV.pdfCv;
          if (currentCV.address !== '' && currentCV.telephone !== '' && currentCV.email !== '' && currentCV.linkedin !== '') {
            this.contactCheck = true;
          } else {
            this.contactCheck = false;
          }
          this.getPercentage();
        }
      }
    });
  }
  deleteCvAvatar() {
    this.cvService.deleteCvAvatar().subscribe({
      next: resp => {
        if (resp) {
          this.toastService.showToast('Success', 'Avatarul a fost sters!', "success");
          this.avatarCvUrl = {
            fileName: undefined,
            filePath: undefined
          };
        }
      },
      error: err => {
        if (err.reason === 'notExists') {
          this.toastService.showToast('Error', 'Avatarul nu exista!', "error");
        } else if (err.reason === 'notLoggedIn' || err.reason === 'tokenExpired') {
          this.toastService.showToast('Error', 'Pentru a finaliza aceasta actiune trebuie sa fii logat!', "error");
        }
      }
    });
  }
  uploadAvatar(event) {
    if (event.target.files && event.target.files[0]) {
      this.avatarCvUrl.fileName = event.target.files[0].name;
      this.avatarCvFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => this.avatarCvUrl.filePath = reader.result;
      reader.readAsDataURL(this.avatarCvFile);
    }
    if (this.avatarCvFile) {
      const avatarCv = new FormData();
      avatarCv.append('avatar', this.avatarCvFile);
      this.cvService.uploadCVAvatar(avatarCv).subscribe({
        next: resp => {
          console.log(resp);
          if (resp.success) {
            this.toastService.showToast('Success', 'Avatarul a fost incarcat!', 'success');
          }
        },
        error: error => {
          if (error.error.reason === 'fileSizeTooBig') {
            this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
          } else if (error.error.reason === 'wrongExtension') {
            this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
          } else {
            this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
          }
        }
      });
    }
  }
  uploadCvFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.userCvUrl.fileName = event.target.files[0].name;
      this.userCvFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => this.userCvUrl.filePath = reader.result;
      reader.readAsDataURL(this.userCvFile);
    }
    if (this.userCvFile) {
      const cvFile = new FormData();
      cvFile.append('cvFile', this.userCvFile);
      this.cvService.uploadCVFile(cvFile).subscribe({
        next: resp => {
          console.log(resp);
          this.toastService.showToast('Success', 'CV-ul a fost incarcat!', "success");
        }
      });
    }
  }
  deleteCvFile() {
    this.userCvFile = undefined;
    this.userCvUrl = {
      fileName: undefined,
      filePath: undefined
    };
  }
  openAddExperienceModal() {
    this.dialog.open(_components_add_edit_cv_experience_add_edit_cv_experience_component__WEBPACK_IMPORTED_MODULE_5__.AddEditCvExperienceComponent, {
      width: '1500px',
      height: '750px',
      data: undefined
    });
  }
  openAddCertificationModal() {
    this.dialog.open(_components_add_edit_cv_certification_add_edit_cv_certification_component__WEBPACK_IMPORTED_MODULE_6__.AddEditCvCertificationComponent, {
      width: '1500px',
      height: '750px',
      data: undefined
    });
  }
  openAddEducationModal() {
    this.dialog.open(_components_add_edit_cv_education_add_edit_cv_education_component__WEBPACK_IMPORTED_MODULE_7__.AddEditCvEducationComponent, {
      width: '1500px',
      height: '750px',
      data: undefined
    });
  }
  submitForm() {
    this.cvForm.markAllAsTouched();
    if (this.cvForm.valid) {
      const cvToSend = {
        ...this.currentCv,
        ...this.cvForm.value,
        certificationsAndDegrees: this.certificationList,
        education: this.educationList,
        experience: this.experienceList
      };
      if (this.currentCv) {
        this.cvService.updateCurrentUserCV(cvToSend).subscribe({
          next: response => {
            console.log('SUBMIT', response);
            if (response.success) {
              this.cvForm.reset();
              this.toastService.showToast('Success', 'CV-ul a fost modificat!', 'success');
              this.getCurrentUserCV();
            }
          }
        });
      } else {
        this.cvService.createCv(cvToSend).subscribe({
          next: response => {
            if (response.success) {
              this.cvForm.reset();
              this.toastService.showToast('Success', 'CV-ul a fost creat!', 'success');
              this.getCurrentUserCV();
            }
          }
        });
      }
      console.log('SEND', cvToSend);
    } else {
      console.log('no');
      this.toastService.showToast('Error', 'Completati toate campurile necesare!', 'error');
      return;
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_2__.SystemSettingsService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _services_cv_service__WEBPACK_IMPORTED_MODULE_3__.CVService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog
  }];
};
UserCvComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-user-cv',
  template: _user_cv_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_user_cv_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserCvComponent);


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

/***/ 9137:
/*!********************************************************************!*\
  !*** ./src/app/standalone-components/cv-card/cv-card.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CvCardComponent": () => (/* binding */ CvCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cv_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cv-card.component.html?ngResource */ 63285);
/* harmony import */ var _cv_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cv-card.component.scss?ngResource */ 37749);
/* harmony import */ var _cv_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cv_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _features_jobs_components_add_edit_cv_experience_add_edit_cv_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/jobs/_components/add-edit-cv-experience/add-edit-cv-experience.component */ 2830);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _features_jobs_components_add_edit_cv_certification_add_edit_cv_certification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/jobs/_components/add-edit-cv-certification/add-edit-cv-certification.component */ 71257);
/* harmony import */ var _features_jobs_components_add_edit_cv_education_add_edit_cv_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/jobs/_components/add-edit-cv-education/add-edit-cv-education.component */ 83250);
/* harmony import */ var _features_jobs_components_delete_cv_data_modal_delete_cv_data_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/jobs/_components/delete-cv-data-modal/delete-cv-data-modal.component */ 65113);











let CvCardComponent = class CvCardComponent {
  constructor(dialog) {
    this.dialog = dialog;
  }
  ngOnInit() {
    this.makeDisplayObject();
  }
  makeDisplayObject() {
    if (this.isExperience) {
      this.displayObject = {
        title: this.givenData.positionHeld,
        subtitle: this.givenData.companyName,
        startDate: this.givenData.jobStartDate,
        endDate: this.givenData.jobEndDate,
        location: this.givenData.location
      };
      this.type = 'experience';
    } else if (this.isEducation) {
      this.displayObject = {
        title: this.givenData.schoolName,
        subtitle: this.givenData.group,
        startDate: this.givenData.startDate,
        endDate: this.givenData.endDate,
        location: this.givenData.location
      };
      this.type = 'education';
    } else if (this.isCertification) {
      this.displayObject = {
        title: this.givenData.name,
        subtitle: this.givenData.company,
        startDate: this.givenData.dateOfCertification,
        endDate: this.givenData.expirationDate,
        location: this.givenData.certificationId
      };
      this.type = 'certification';
    }
  }
  openEditModal(givenData) {
    if (this.isCertification) {
      this.dialog.open(_features_jobs_components_add_edit_cv_certification_add_edit_cv_certification_component__WEBPACK_IMPORTED_MODULE_3__.AddEditCvCertificationComponent, {
        width: '1500px',
        height: '750px',
        data: {
          givenData: givenData
        }
      });
    } else if (this.isEducation) {
      this.dialog.open(_features_jobs_components_add_edit_cv_education_add_edit_cv_education_component__WEBPACK_IMPORTED_MODULE_4__.AddEditCvEducationComponent, {
        width: '1500px',
        height: '750px',
        data: {
          givenData: givenData
        }
      });
    } else if (this.isExperience) {
      this.dialog.open(_features_jobs_components_add_edit_cv_experience_add_edit_cv_experience_component__WEBPACK_IMPORTED_MODULE_2__.AddEditCvExperienceComponent, {
        width: '1500px',
        height: '750px',
        data: {
          givenData: givenData
        }
      });
    }
  }
  openDeleteModal(givenData, type) {
    this.dialog.open(_features_jobs_components_delete_cv_data_modal_delete_cv_data_modal_component__WEBPACK_IMPORTED_MODULE_5__.DeleteCvDataModalComponent, {
      width: '720px',
      height: '400px',
      data: {
        givenData: givenData,
        type: type
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog
  }];
  static #_2 = this.propDecorators = {
    givenData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    isExperience: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    isEducation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    isCertification: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  };
};
CvCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-cv-card',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule],
  template: _cv_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_cv_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CvCardComponent);


/***/ }),

/***/ 86878:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-cv-certification/add-edit-cv-certification.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dialog-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.dialog-container .dialog-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 25px 100px;\n  background-color: #24398A;\n}\n.dialog-container .dialog-header h2 {\n  color: white;\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n}\n.dialog-container .dialog-header button {\n  border: 2px solid white !important;\n}\n.dialog-container .dialog-content {\n  padding: 0 100px;\n  margin-top: 78px;\n  flex: 1;\n}\n.dialog-container .dialog-content .section-name {\n  font-size: 24px;\n  color: #24398A;\n  font-weight: 600;\n}\n.dialog-container .dialog-content .limit-check {\n  height: 57px;\n}\n.dialog-container .dialog-content .section-subtitle {\n  color: black;\n  font-weight: 700;\n  font-size: 20px;\n}\n.dialog-container .dialog-footer {\n  display: flex;\n  padding: 24px 100px;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid rgba(36, 57, 138, 0.16);\n}", "",{"version":3,"sources":["webpack://./src/app/features/jobs/_components/add-edit-cv-certification/add-edit-cv-certification.component.scss"],"names":[],"mappings":"AACA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;AAAF;AAGE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,yBAAA;AADJ;AAGI;EACE,YAAA;EACA,eAAA;EACA,gBAAA;EACA,SAAA;AADN;AAII;EAUE,kCAAA;AAXN;AAiBE;EACE,gBAAA;EACA,gBAAA;EACA,OAAA;AAfJ;AAiBI;EACE,eAAA;EACA,cAAA;EACA,gBAAA;AAfN;AAkBI;EACE,YAAA;AAhBN;AAmBI;EACE,YAAA;EACA,gBAAA;EACA,eAAA;AAjBN;AAuBE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,6CAAA;AArBJ","sourcesContent":["\n.dialog-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  // Header\n  .dialog-header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 25px 100px;\n    background-color: #24398A;\n\n    h2 {\n      color: white;\n      font-size: 32px;\n      font-weight: 700;\n      margin: 0;\n    }\n\n    button {\n      //display: flex;\n      //align-items: center;\n      //justify-content: center;\n      //width: 45px;\n      //height: 45px;\n      //border: 2px solid white;\n      //border-radius: 50%;\n      //background: transparent;\n      //color: white;\n      border: 2px solid white !important;\n    }\n\n  }\n\n  // Content\n  .dialog-content {\n    padding: 0 100px;\n    margin-top: 78px;\n    flex: 1;\n\n    .section-name {\n      font-size: 24px;\n      color: #24398A;\n      font-weight: 600;\n    }\n\n    .limit-check {\n      height: 57px;\n    }\n\n    .section-subtitle {\n      color: black;\n      font-weight: 700;\n      font-size: 20px;\n    }\n\n  }\n\n  // Footer\n  .dialog-footer {\n    display: flex;\n    padding: 24px 100px;\n    align-items: center;\n    justify-content: space-between;\n    border-top: 1px solid rgba(36, 57, 138, 0.16);\n  }\n\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14333:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-cv-education/add-edit-cv-education.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dialog-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.dialog-container .dialog-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 25px 100px;\n  background-color: #24398A;\n}\n.dialog-container .dialog-header h2 {\n  color: white;\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n}\n.dialog-container .dialog-header button {\n  border: 2px solid white !important;\n}\n.dialog-container .dialog-content {\n  padding: 0 100px;\n  margin-top: 78px;\n  flex: 1;\n}\n.dialog-container .dialog-content .section-name {\n  font-size: 24px;\n  color: #24398A;\n  font-weight: 600;\n}\n.dialog-container .dialog-content .limit-check {\n  height: 57px;\n}\n.dialog-container .dialog-content .section-subtitle {\n  color: black;\n  font-weight: 700;\n  font-size: 20px;\n}\n.dialog-container .dialog-footer {\n  display: flex;\n  padding: 24px 100px;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid rgba(36, 57, 138, 0.16);\n}", "",{"version":3,"sources":["webpack://./src/app/features/jobs/_components/add-edit-cv-education/add-edit-cv-education.component.scss"],"names":[],"mappings":"AACA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;AAAF;AAGE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,yBAAA;AADJ;AAGI;EACE,YAAA;EACA,eAAA;EACA,gBAAA;EACA,SAAA;AADN;AAII;EAUE,kCAAA;AAXN;AAiBE;EACE,gBAAA;EACA,gBAAA;EACA,OAAA;AAfJ;AAiBI;EACE,eAAA;EACA,cAAA;EACA,gBAAA;AAfN;AAkBI;EACE,YAAA;AAhBN;AAmBI;EACE,YAAA;EACA,gBAAA;EACA,eAAA;AAjBN;AAuBE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,6CAAA;AArBJ","sourcesContent":["\n.dialog-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  // Header\n  .dialog-header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 25px 100px;\n    background-color: #24398A;\n\n    h2 {\n      color: white;\n      font-size: 32px;\n      font-weight: 700;\n      margin: 0;\n    }\n\n    button {\n      //display: flex;\n      //align-items: center;\n      //justify-content: center;\n      //width: 45px;\n      //height: 45px;\n      //border: 2px solid white;\n      //border-radius: 50%;\n      //background: transparent;\n      //color: white;\n      border: 2px solid white !important;\n    }\n\n  }\n\n  // Content\n  .dialog-content {\n    padding: 0 100px;\n    margin-top: 78px;\n    flex: 1;\n\n    .section-name {\n      font-size: 24px;\n      color: #24398A;\n      font-weight: 600;\n    }\n\n    .limit-check {\n      height: 57px;\n    }\n\n    .section-subtitle {\n      color: black;\n      font-weight: 700;\n      font-size: 20px;\n    }\n\n  }\n\n  // Footer\n  .dialog-footer {\n    display: flex;\n    padding: 24px 100px;\n    align-items: center;\n    justify-content: space-between;\n    border-top: 1px solid rgba(36, 57, 138, 0.16);\n  }\n\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 77209:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-cv-experience/add-edit-cv-experience.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dialog-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.dialog-container .dialog-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 25px 100px;\n  background-color: #24398A;\n}\n.dialog-container .dialog-header h2 {\n  color: white;\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n}\n.dialog-container .dialog-header button {\n  border: 2px solid white !important;\n}\n.dialog-container .dialog-content {\n  padding: 0 100px;\n  margin-top: 78px;\n  flex: 1;\n}\n.dialog-container .dialog-content .section-name {\n  font-size: 24px;\n  color: #24398A;\n  font-weight: 600;\n}\n.dialog-container .dialog-content .limit-check {\n  height: 57px;\n}\n.dialog-container .dialog-content .section-subtitle {\n  color: black;\n  font-weight: 700;\n  font-size: 20px;\n}\n.dialog-container .dialog-footer {\n  display: flex;\n  padding: 24px 100px;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid rgba(36, 57, 138, 0.16);\n}", "",{"version":3,"sources":["webpack://./src/app/features/jobs/_components/add-edit-cv-experience/add-edit-cv-experience.component.scss"],"names":[],"mappings":"AACA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;AAAF;AAGE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,yBAAA;AADJ;AAGI;EACE,YAAA;EACA,eAAA;EACA,gBAAA;EACA,SAAA;AADN;AAII;EAUE,kCAAA;AAXN;AAiBE;EACE,gBAAA;EACA,gBAAA;EACA,OAAA;AAfJ;AAiBI;EACE,eAAA;EACA,cAAA;EACA,gBAAA;AAfN;AAkBI;EACE,YAAA;AAhBN;AAmBI;EACE,YAAA;EACA,gBAAA;EACA,eAAA;AAjBN;AAuBE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,6CAAA;AArBJ","sourcesContent":["\n.dialog-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  // Header\n  .dialog-header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 25px 100px;\n    background-color: #24398A;\n\n    h2 {\n      color: white;\n      font-size: 32px;\n      font-weight: 700;\n      margin: 0;\n    }\n\n    button {\n      //display: flex;\n      //align-items: center;\n      //justify-content: center;\n      //width: 45px;\n      //height: 45px;\n      //border: 2px solid white;\n      //border-radius: 50%;\n      //background: transparent;\n      //color: white;\n      border: 2px solid white !important;\n    }\n\n  }\n\n  // Content\n  .dialog-content {\n    padding: 0 100px;\n    margin-top: 78px;\n    flex: 1;\n\n    .section-name {\n      font-size: 24px;\n      color: #24398A;\n      font-weight: 600;\n    }\n\n    .limit-check {\n      height: 57px;\n    }\n\n    .section-subtitle {\n      color: black;\n      font-weight: 700;\n      font-size: 20px;\n    }\n\n  }\n\n  // Footer\n  .dialog-footer {\n    display: flex;\n    padding: 24px 100px;\n    align-items: center;\n    justify-content: space-between;\n    border-top: 1px solid rgba(36, 57, 138, 0.16);\n  }\n\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 80702:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-job/add-edit-job.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.48), rgba(35, 31, 32, 0.48));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n.content-container .image-container {\n  position: relative;\n  width: 50%;\n  min-height: 7.5rem;\n  height: 100%;\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.content-container .image-container .no-image {\n  width: 100%;\n  min-height: inherit;\n  background: rgba(36, 57, 138, 0.04);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #24398A;\n  cursor: pointer;\n  gap: 0.75rem;\n}\n.content-container .image-container .no-image:before {\n  content: \"\\f03e\";\n  font-family: \"Font Awesome 5 Free\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.25rem;\n}\n.content-container .image-container .no-image:after {\n  font-size: 1rem;\n  content: attr(translatedContent);\n}\n.content-container .image-container .btn-thumbnail {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n  border: none;\n  position: absolute;\n  top: 2.125rem;\n  right: 2.125rem;\n}\n.content-container .image-container .btn-thumbnail i {\n  color: var(--primary-background);\n  font-weight: 900;\n  font-size: 16px;\n}\n.content-container .image-container .featured-image {\n  width: 100%;\n  max-height: 400px;\n  object-fit: cover;\n}\n\n.custom-accordion .mat-expansion-panel-header-title {\n  justify-content: space-between;\n  align-items: center;\n}\n.custom-accordion .mat-expansion-panel-header-title i {\n  display: none;\n}\n\n.custom-accordion .mat-expansion-panel-header-title.panel-warning {\n  color: red;\n}\n.custom-accordion .mat-expansion-panel-header-title.panel-warning i {\n  display: inline-block;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/jobs/_components/add-edit-job/add-edit-job.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAfE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAiBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF;AAbE;EACE,kBAAA;EACA,UAAA;EACA,kBAAA;EACA,YAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;AAeJ;AAbI;EACE,WAAA;EACA,mBAAA;EACA,mCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cDjDU;ECkDV,eAAA;EACA,YAAA;AAeN;AAbM;EACE,gBAAA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;AAeR;AAZM;EACE,eAAA;EACA,gCAAA;AAcR;AAVI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mCAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;AAYN;AAVM;EACE,gCAAA;EACA,gBAAA;EACA,eAAA;AAYR;AARI;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;AAUN;;AALA;EACE,8BAAA;EACA,mBAAA;AAQF;AAPE;EACE,aAAA;AASJ;;AALA;EACE,UAAA;AAQF;AAPE;EACE,qBAAA;AASJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n\n  .image-container {\n    position: relative;\n    width: 50%;\n    min-height: 7.5rem;\n    height: 100%;\n    border: 2px solid rgba($primary-color, 0.08);\n    border-radius: 8px;\n    overflow: hidden;\n\n    & .no-image {\n      width: 100%;\n      min-height: inherit;\n      background: rgba($primary-color, 0.04);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: $primary-color;\n      cursor: pointer;\n      gap: 0.75rem;\n\n      &:before {\n        content: '\\f03e';\n        font-family: 'Font Awesome 5 Free';\n        font-style: normal;\n        font-weight: 400;\n        font-size: 2.25rem;\n      }\n\n      &:after {\n        font-size: 1rem;\n        content: attr(translatedContent);\n      }\n    }\n\n    .btn-thumbnail {\n      width: 2rem;\n      height: 2rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: rgba($primary-color, 0.16);\n      border-radius: 100%;\n      border: none;\n      position: absolute;\n      top: 2.125rem;\n      right: 2.125rem;\n\n      i {\n        color: var(--primary-background);\n        font-weight: 900;\n        font-size: 16px;\n      }\n    }\n\n    .featured-image{\n      width: 100%;\n      max-height: 400px;\n      object-fit: cover;\n    }\n  }\n}\n\n.custom-accordion .mat-expansion-panel-header-title {\n  justify-content: space-between;\n  align-items: center;\n  i {\n    display: none;\n  }\n}\n\n.custom-accordion .mat-expansion-panel-header-title.panel-warning {\n  color: red;\n  i {\n    display: inline-block;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 11656:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/delete-cv-data-modal/delete-cv-data-modal.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dialog-container {\n  padding: 48px 52px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.dialog-container .dialog-header h2 {\n  color: #24398A;\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 24px;\n}\n.dialog-container .dialog-header p {\n  font-weight: 400;\n  font-size: 16px;\n  color: #231F20;\n}\n.dialog-container .dialog-header .section-title {\n  font-weight: 700;\n  font-size: 20px;\n  color: black;\n}\n.dialog-container .dialog-header .section-title span {\n  font-weight: 400;\n  font-size: 20px;\n  color: #24398A;\n}\n.dialog-container .dialog-footer {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/app/features/jobs/_components/delete-cv-data-modal/delete-cv-data-modal.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AACF;AAII;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;AAFN;AAKI;EACE,gBAAA;EACA,eAAA;EACA,cAAA;AAHN;AAMI;EACE,gBAAA;EACA,eAAA;EACA,YAAA;AAJN;AAMM;EACE,gBAAA;EACA,eAAA;EACA,cAAA;AAJR;AAsBE;EACE,aAAA;EACA,SAAA;EACA,mBAAA;AApBJ","sourcesContent":[".dialog-container {\n  padding: 48px 52px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  // Header\n  .dialog-header {\n\n    h2 {\n      color: #24398A;\n      font-size: 24px;\n      font-weight: 600;\n      margin-bottom: 24px;\n    }\n\n    p {\n      font-weight: 400;\n      font-size: 16px;\n      color: #231F20;\n    }\n\n    .section-title {\n      font-weight: 700;\n      font-size: 20px;\n      color: black;\n\n      span {\n        font-weight: 400;\n        font-size: 20px;\n        color: #24398A;\n      }\n    }\n\n  }\n\n  // Content\n  //.dialog-content {\n  //  border: 1px solid #24398A;\n  //  border-radius: 8px;\n  //  padding: 16px;\n  //  margin-bottom: 48px;\n  //\n  //\n  //\n  //}\n\n  // Footer\n  .dialog-footer {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 39975:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/jobs-list/jobs-list.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.resource-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.sort-filter {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.sort-filter .btn-long {\n  margin-top: -19px;\n}\n\n.resource-list {\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n  padding: 24px 0;\n}\n\n.no-data-class {\n  margin-bottom: 200px;\n}\n.no-data-class img {\n  width: 80px;\n  height: 80px;\n}\n.no-data-class h4 {\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/jobs/_components/jobs-list/jobs-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAhBA;EACE,aAAA;EACA,sBAAA;AAmBF;;AAhBA;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;AAmBF;AAjBE;EACE,iBAAA;AAmBJ;;AAfA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EACA,eAAA;AAkBF;;AAfA;EACE,oBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,YAAA;AAkBJ;AAfE;EACE,cD1BQ;AC2CZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import '/src/app/theme/styles/components/colors';\n.resource-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.sort-filter {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  .btn-long{\n    margin-top: -19px;\n  }\n}\n\n.resource-list {\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n  padding: 24px 0;\n}\n\n.no-data-class{\n  margin-bottom:200px;\n\n  img{\n    width: 80px;\n    height: 80px;\n  }\n\n  h4{\n    color:$paragraph;\n  }\n\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43103:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/jobs-sidebar/jobs-sidebar.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.filters-container {\n  margin-top: 24px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.filters-container .mat-radio-button {\n  display: block;\n}\n\n:host ::ng-deep .filters-container .mat-expansion-panel-spacing {\n  margin: 0;\n}\n:host ::ng-deep .filters-container .mat-expansion-panel {\n  box-shadow: none !important;\n}\n\n.btn-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 12px 24px;\n}\n.btn-container .btn-reset {\n  background: #EA4335;\n}\n.btn-container .btn-reset:hover {\n  background: rgba(234, 67, 53, 0.72);\n}\n.btn-container button {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/jobs/_components/jobs-sidebar/jobs-sidebar.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;AAkBF;;AAfA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;AAkBF;AAhBE;EACE,cAAA;AAkBJ;;AAbE;EACE,SAAA;AAgBJ;AAbE;EACE,2BAAA;AAeJ;;AAXA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,kBAAA;AAcF;AAZE;EACE,mBDKY;ACShB;AAZI;EACE,mCAAA;AAcN;AAVE;EACE,WAAA;AAYJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.mat-form-field {\n  width: 100%;\n}\n\n.filters-container {\n  margin-top: 24px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba($primary-color, 0.16);\n  border-radius: 8px;\n  overflow: hidden;\n\n  .mat-radio-button {\n    display: block;\n  }\n}\n\n:host ::ng-deep .filters-container {\n  .mat-expansion-panel-spacing {\n    margin: 0;\n  }\n\n  .mat-expansion-panel {\n    box-shadow: none !important;\n  }\n}\n\n.btn-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 12px 24px;\n\n  .btn-reset {\n    background: $dislike-color;\n\n    &:hover {\n      background: rgba($dislike-color, 0.72)\n    }\n  }\n\n  button {\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 15135:
/*!*************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/view-cv/view-cv.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.48), rgba(35, 31, 32, 0.48));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.title-container {\n  background-color: var(--primary-background);\n  padding-top: 24px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 24px;\n}\n.title-container .header-cv {\n  background-color: #24398A;\n  width: 100%;\n  padding: 24px 0;\n}\n.title-container .header-cv .container .user-data {\n  row-gap: 15px;\n}\n.title-container .header-cv .container .user-data .avatar {\n  width: 96px;\n  aspect-ratio: 1/1;\n  border-radius: 100%;\n}\n.title-container .header-cv .container .user-data .user {\n  color: var(--primary-background);\n  font-weight: 700;\n}\n.title-container .header-cv .container .user-data .user p.user-name {\n  font-size: 48px;\n  line-height: 67px;\n}\n.title-container .header-cv .container .user-data .user p.function {\n  font-size: 20px;\n  line-height: 28px;\n}\n\n.resource-title-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.resource-title-bar a {\n  text-decoration: none;\n}\n.resource-title-bar a:hover {\n  color: var(--primary-background);\n}\n.resource-title-bar .resource-title {\n  margin-bottom: 0;\n  color: #24398A;\n  font-size: clamp(1.25rem, 2vw + 1rem, 2.5rem);\n}\n\n.content-container {\n  padding: 48px 0;\n  background-color: rgba(36, 57, 138, 0.04);\n}\n.content-container .cv-content {\n  border-radius: 8px;\n  box-shadow: 0 4px 4px 0 rgba(35, 31, 32, 0.08), 0 4px 4px 0 rgba(35, 31, 32, 0.08);\n  padding: 48px;\n  background-color: var(--primary-background);\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 48px;\n}\n.content-container .cv-content p.cv-section-title {\n  color: #24398A;\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 28px;\n}\n.content-container .cv-content p.cv-section-title span {\n  font-size: 20px;\n  color: #231F20;\n}\n.content-container .cv-content p.cv-section-subtitle {\n  color: #24398A;\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 0 !important;\n}\n.content-container .cv-content p.cv-section-subtitle span {\n  color: #231F20;\n  font-weight: 400;\n}\n.content-container .cv-content p.summary-title {\n  font-weight: 700;\n  font-size: 20px;\n}\n.content-container .cv-content p.summary {\n  font-size: 16px;\n  line-height: 22px;\n  margin-bottom: 0 !important;\n}\n.content-container .cv-content .separator {\n  border-bottom: 2px solid rgba(36, 57, 138, 0.15);\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.content-container .cv-content .experience-content {\n  border-left: 2px solid rgba(36, 57, 138, 0.15);\n}\n.content-container .cv-content .experience-content .description-section p.experience-desc {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n.content-container .cv-content .experience-content .description-section .more {\n  cursor: pointer;\n  color: #24398A;\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/jobs/_components/view-cv/view-cv.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAfE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAiBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF;AAbE;EACE,yBDjCY;ECkCZ,WAAA;EACA,eAAA;AAeJ;AAZM;EACE,aAAA;AAcR;AAZQ;EACE,WAAA;EACA,iBAAA;EACA,mBAAA;AAcV;AAXQ;EACE,gCAAA;EACA,gBAAA;AAaV;AAXU;EACE,eAAA;EACA,iBAAA;AAaZ;AAVU;EACE,eAAA;EACA,iBAAA;AAYZ;;AADA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAIF;AAFE;EACE,qBAAA;AAIJ;AAFI;EACE,gCAAA;AAIN;AAAE;EACE,gBAAA;EACA,cDpFY;ECqFZ,6CAAA;AAEJ;;AAGA;EACE,eAAA;EACA,yCAAA;AAAF;AAEE;EACE,kBAAA;EACA,kFAAA;EACA,aAAA;EACA,2CAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAAJ;AAEI;EACE,cDzGU;EC0GV,eAAA;EACA,gBAAA;EACA,iBAAA;AAAN;AAEM;EACE,eAAA;EACA,cD5GA;AC4GR;AAII;EACE,cDrHU;ECsHV,eAAA;EACA,gBAAA;EACA,2BAAA;AAFN;AAIM;EACE,cDvHA;ECwHA,gBAAA;AAFR;AAMI;EACE,gBAAA;EACA,eAAA;AAJN;AAOI;EACE,eAAA;EACA,iBAAA;EACA,2BAAA;AALN;AAQI;EACE,gDAAA;EACA,gBAAA;EACA,mBAAA;AANN;AASI;EACE,8CAAA;AAPN;AAUQ;EACE,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,4BAAA;AARV;AAWQ;EACE,eAAA;EACA,cDhKM;ECiKN,gBAAA;AATV","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n\n}\n\n.title-container {\n  background-color: var(--primary-background);\n  padding-top: 24px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 24px;\n\n  .header-cv {\n    background-color: $primary-color;\n    width: 100%;\n    padding: 24px 0;\n\n    .container {\n      .user-data {\n        row-gap: 15px;\n\n        .avatar {\n          width: 96px;\n          aspect-ratio: 1/1;\n          border-radius: 100%;\n        }\n\n        .user {\n          color: var(--primary-background);\n          font-weight: 700;\n\n          p.user-name {\n            font-size: 48px;\n            line-height: 67px;\n          }\n\n          p.function {\n            font-size: 20px;\n            line-height: 28px;\n          }\n        }\n      }\n\n    }\n\n\n  }\n}\n\n.resource-title-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    text-decoration: none;\n\n    &:hover {\n      color: var(--primary-background);\n    }\n  }\n\n  .resource-title {\n    margin-bottom: 0;\n    color: $primary-color;\n    font-size: clamp(1.25rem, 2vw + 1rem, 2.5rem);\n  }\n\n}\n\n.content-container {\n  padding: 48px 0;\n  background-color: rgba($primary-color, 0.04);\n\n  .cv-content {\n    border-radius: 8px;\n    box-shadow: 0 4px 4px 0 rgba($title, 0.08), 0 4px 4px 0 rgba($title, 0.08);\n    padding: 48px;\n    background-color: var(--primary-background);\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    row-gap: 48px;\n\n    p.cv-section-title {\n      color: $primary-color;\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 28px;\n\n      span{\n        font-size:20px;\n        color: $title;\n      }\n    }\n\n    p.cv-section-subtitle {\n      color: $primary-color;\n      font-size: 16px;\n      font-weight: 700;\n      margin-bottom: 0 !important;\n\n      span {\n        color: $title;\n        font-weight: 400;\n      }\n    }\n\n    p.summary-title {\n      font-weight: 700;\n      font-size: 20px;\n    }\n\n    p.summary{\n      font-size: 16px;\n      line-height: 22px;\n      margin-bottom: 0!important;\n    }\n\n    .separator{\n      border-bottom: 2px solid rgba($primary-color, 0.15);\n      margin-top:10px;\n      margin-bottom: 10px;\n    }\n\n    .experience-content{\n      border-left: 2px solid rgba($primary-color, 0.15);\n\n      .description-section{\n        p.experience-desc{\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 1;\n          line-clamp: 1;\n          -webkit-box-orient: vertical;\n        }\n\n        .more{\n          cursor: pointer;\n          color: $primary-color;\n          font-weight: 700;\n        }\n      }\n    }\n\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 32106:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/jobs/candidates-list/candidates-list.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.48), rgba(35, 31, 32, 0.48));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n.content-container .container:first-child {\n  margin-bottom: -64px;\n}\n\n.resource-title-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.resource-title-bar a {\n  text-decoration: none;\n}\n.resource-title-bar a:hover {\n  color: var(--primary-background);\n}\n.resource-title-bar .resource-title {\n  margin-bottom: 0;\n  color: #24398A;\n  font-size: clamp(1.25rem, 2vw + 1rem, 2.5rem);\n}\n.resource-title-bar .label-applied {\n  font-size: 20px;\n  border: 1px solid #69C98C;\n  background-color: rgba(105, 201, 140, 0.3);\n  border-radius: 8px;\n  padding: 0 10px;\n  color: #69C98C;\n}\n\n.container .title-section {\n  margin-bottom: 36px;\n  position: relative;\n  font-size: 24px;\n  font-weight: 600;\n}\n.container .title-section:after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  max-width: 160px;\n  height: 2px;\n  background-color: #FFCC29;\n}\n.container .section-subtitle {\n  font-size: 20px;\n  font-weight: 700;\n}\n.container .img-icon {\n  width: 16px;\n  aspect-ratio: 1/1;\n  margin-right: 5px;\n}\n.container p .label-name {\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/jobs/candidates-list/candidates-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAfE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAiBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF;AAbE;EACE,oBAAA;AAeJ;;AAXA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAcF;AAZE;EACE,qBAAA;AAcJ;AAZI;EACE,gCAAA;AAcN;AAVE;EACE,gBAAA;EACA,cDrDY;ECsDZ,6CAAA;AAYJ;AATE;EACE,eAAA;EACA,yBAAA;EACA,0CAAA;EACA,kBAAA;EACA,eAAA;EACA,cDtCU;ACiDd;;AANE;EACE,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;AASJ;AAPI;EACE,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,gBAAA;EAEA,WAAA;EACA,yBDlFY;AC0FlB;AAJE;EACE,eAAA;EACA,gBAAA;AAMJ;AAHE;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;AAKJ;AADI;EACE,gBAAA;AAGN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n\n  .container:first-child {\n    margin-bottom: -64px;\n  }\n}\n\n.resource-title-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    text-decoration: none;\n\n    &:hover {\n      color: var(--primary-background);\n    }\n  }\n\n  .resource-title {\n    margin-bottom: 0;\n    color: $primary-color;\n    font-size: clamp(1.25rem, 2vw + 1rem, 2.5rem);\n  }\n\n  .label-applied{\n    font-size: 20px;\n    border: 1px solid $active-color;\n    background-color: rgba($active-color, 0.3);\n    border-radius: 8px;\n    padding: 0 10px;\n    color:$active-color;\n  }\n}\n\n.container {\n  .title-section {\n    margin-bottom: 36px;\n    position: relative;\n    font-size: 24px;\n    font-weight: 600;\n\n    &:after {\n      content: '';\n      display: inline-block;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      max-width: 160px;\n      //margin: 0 auto;\n      height: 2px;\n      background-color: $secondary-color;\n    }\n  }\n\n  .section-subtitle {\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  .img-icon {\n    width: 16px;\n    aspect-ratio: 1/1;\n    margin-right: 5px;\n  }\n\n  p {\n    .label-name {\n      font-weight: 500;\n    }\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43033:
/*!*******************************************************************************!*\
  !*** ./src/app/features/jobs/job-offers/job-offers.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.48), rgba(35, 31, 32, 0.48));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/jobs/job-offers/job-offers.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAfE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAiBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12588:
/*!*************************************************************************!*\
  !*** ./src/app/features/jobs/user-cv/user-cv.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.48), rgba(35, 31, 32, 0.48));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n.content-container .job-title {\n  text-align: center;\n}\n.content-container .cv-completion {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  padding: 20px;\n}\n.content-container .cv-completion p {\n  margin-bottom: 0 !important;\n}\n.content-container .cv-completion .progress {\n  width: 96px;\n  height: 96px;\n  border-radius: 100%;\n  border: 8px solid #FFCC29;\n  background-color: var(--primary-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  font-weight: 700;\n}\n.content-container .cv-completion .cv-category-completion p {\n  color: #24398A;\n  font-weight: 700;\n  font-size: 16px;\n}\n.content-container .cv-completion .cv-category-completion i {\n  font-size: 16px;\n  font-weight: 900;\n  line-height: unset;\n}\n.content-container .cv-completion .cv-category-completion i.fa-times {\n  color: #EA4335;\n}\n.content-container .cv-completion .cv-category-completion i.fa-check {\n  color: #2CCEA7;\n}\n.content-container .user-avatar {\n  height: 85% !important;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  padding: 20px;\n}\n.content-container .user-avatar .avatar-img {\n  width: 120px;\n  aspect-ratio: 1/1;\n  max-height: 120px;\n  max-width: 120px;\n  border-radius: 100%;\n  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.08));\n  object-fit: cover;\n}\n.content-container .user-avatar .avatar-btns {\n  gap: 8px;\n}\n.content-container .user-avatar .avatar-btns .btn-long {\n  width: 50% !important;\n  min-width: 10px !important;\n}\n.content-container .upload-resume {\n  background: rgba(36, 57, 138, 0.04);\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  padding: 20px;\n}\n.content-container .upload-resume i.fa-file {\n  color: #24398A;\n  font-size: 36px;\n  line-height: unset;\n}\n.content-container .section-cv {\n  margin-bottom: 24px;\n}\n.content-container .section-cv .title-section {\n  margin-bottom: 36px;\n  position: relative;\n  font-size: 24px;\n  font-weight: 600;\n}\n.content-container .section-cv .title-section:after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  max-width: 160px;\n  height: 2px;\n  background-color: #FFCC29;\n}\n.content-container .section-cv .add-btn {\n  border-radius: 8px;\n  border: 1px dotted rgba(36, 57, 138, 0.16);\n  background-color: transparent;\n  width: 100%;\n  padding: 15px 0;\n  color: rgba(36, 57, 138, 0.16);\n  font-weight: 600;\n  font-size: 16px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/jobs/user-cv/user-cv.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAfE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAiBJ;;AAZA;EACE,2CAAA;EACA,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAeF;AAbE;EACE,kBAAA;AAeJ;AAZE;EACE,yCAAA;EACA,kBAAA;EACA,aAAA;AAcJ;AAZI;EACE,2BAAA;AAcN;AATI;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,2CAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AAWN;AAPM;EACE,cD/DQ;ECgER,gBAAA;EACA,eAAA;AASR;AANM;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;AAQR;AALM;EACE,cDnCQ;AC0ChB;AAJM;EACE,cDxCI;AC8CZ;AADE;EACE,sBAAA;EACA,yCAAA;EACA,kBAAA;EACA,aAAA;AAGJ;AADI;EACE,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,oDAAA;EACA,iBAAA;AAGN;AAAI;EACE,QAAA;AAEN;AAAM;EACE,qBAAA;EACA,0BAAA;AAER;AAIE;EACE,mCAAA;EACA,yCAAA;EACA,kBAAA;EACA,aAAA;AAFJ;AAII;EACE,cDtHU;ECuHV,eAAA;EACA,kBAAA;AAFN;AAME;EACE,mBAAA;AAJJ;AAMI;EACE,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;AAJN;AAMM;EACE,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,gBAAA;EAEA,WAAA;EACA,yBD7IU;ACwIlB;AAaI;EACE,kBAAA;EACA,0CAAA;EACA,6BAAA;EACA,WAAA;EACA,eAAA;EACA,8BAAA;EACA,gBAAA;EACA,eAAA;AAXN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.48), rgba($title, 0.48));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding-top: 48px;\n  padding-bottom: 48px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n\n  .job-title {\n    text-align: center;\n  }\n\n  .cv-completion {\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    border-radius: 8px;\n    padding: 20px;\n\n    p {\n      margin-bottom: 0 !important;\n    }\n  }\n\n  .cv-completion {\n    .progress {\n      width: 96px;\n      height: 96px;\n      border-radius: 100%;\n      border: 8px solid $secondary-color;\n      background-color: var(--primary-background);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 20px;\n      font-weight: 700;\n    }\n\n    .cv-category-completion {\n      p {\n        color: $primary-color;\n        font-weight: 700;\n        font-size: 16px;\n      }\n\n      i {\n        font-size: 16px;\n        font-weight: 900;\n        line-height: unset;\n      }\n\n      i.fa-times {\n        color: $dislike-color;\n      }\n\n      i.fa-check {\n        color: $like-color;\n      }\n    }\n  }\n\n  .user-avatar {\n    height: 85% !important;\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    border-radius: 8px;\n    padding: 20px;\n\n    .avatar-img {\n      width: 120px;\n      aspect-ratio: 1/1;\n      max-height: 120px;\n      max-width: 120px;\n      border-radius: 100%;\n      filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.08));\n      object-fit: cover;\n    }\n\n    .avatar-btns {\n      gap: 8px;\n\n      .btn-long {\n        width: 50% !important;\n        min-width: 10px !important;\n      }\n    }\n\n  }\n\n  .upload-resume {\n    background: rgba(36, 57, 138, 0.04);\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    border-radius: 8px;\n    padding: 20px;\n\n    i.fa-file {\n      color: $primary-color;\n      font-size: 36px;\n      line-height: unset;\n    }\n  }\n\n  .section-cv {\n    margin-bottom: 24px;\n\n    .title-section {\n      margin-bottom: 36px;\n      position: relative;\n      font-size: 24px;\n      font-weight: 600;\n\n      &:after {\n        content: '';\n        display: inline-block;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        max-width: 160px;\n        //margin: 0 auto;\n        height: 2px;\n        background-color: $secondary-color;\n      }\n    }\n\n    .card-list{\n\n    }\n\n    .add-btn {\n      border-radius: 8px;\n      border: 1px dotted rgba(36, 57, 138, 0.16);\n      background-color: transparent;\n      width: 100%;\n      padding: 15px 0;\n      color: rgba(36, 57, 138, 0.16);\n      font-weight: 600;\n      font-size: 16px;\n    }\n\n  }\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 37749:
/*!*********************************************************************************!*\
  !*** ./src/app/standalone-components/cv-card/cv-card.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.cv-card {\n  height: 155px;\n  max-height: 155px;\n  margin-bottom: 10px;\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  border: none;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.08));\n}\n.cv-card .card-body p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n.cv-card .card-body .info p {\n  font-size: 16px;\n}\n.cv-card .card-body .info .title {\n  font-weight: 600;\n  color: #24398A;\n}\n.cv-card .card-body .info .extra {\n  opacity: 0.8;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/cv-card/cv-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,2CAAA;EACA,kBAAA;EACA,YAAA;EACA,oDAAA;AAkBF;AAfI;EACE,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAiBN;AAdM;EACE,eAAA;AAgBR;AAbM;EACE,gBAAA;EACA,cD1BQ;ACyChB;AAZM;EACE,YAAA;AAcR","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.cv-card {\n  height: 155px;\n  max-height: 155px;\n  margin-bottom: 10px;\n  background-color: var(--primary-background);\n  border-radius: 8px;\n  border: none;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.08));\n\n  .card-body {\n    p{\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      /* autoprefixer: ignore next */\n      -webkit-box-orient: vertical;\n    }\n    .info {\n      p {\n        font-size: 16px;\n      }\n\n      .title {\n        font-weight: 600;\n        color: $primary-color;\n      }\n\n      .extra {\n        opacity: 0.8;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 51170:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-cv-certification/add-edit-cv-certification.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"dialog-container\">\n\n    <!--Header-->\n    <div class=\"dialog-header\">\n        <h2>{{isEditMode ? ('JOBS.EDIT-CERTIFICATION' | translate) : ('JOBS.NEW-CERTIFICATION' | translate)}}</h2>\n        <button type=\"button\" class=\"btn-round btn-color-fill\" (click)=\"close()\">\n            <i class=\"fas fa-times\"></i>\n        </button>\n    </div>\n\n    <!--Body-->\n    <mat-dialog-content class=\"dialog-content\">\n\n        <form [formGroup]=\"certificationForm\">\n            <div class=\"row mb-3\">\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.CERTIFICATION-NAME' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'JOBS.CERTIFICATION-NAME' | translate}}\" formControlName=\"name\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.COMPANY-NAME' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'JOBS.COMPANY-NAME' | translate}}\" formControlName=\"company\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.CERTIFICATION-ID' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'JOBS.CERTIFICATION-ID' | translate}}\" formControlName=\"certificationId\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.CERTIFICATION-LINK' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'JOBS.CERTIFICATION-LINK' | translate}}\" formControlName=\"certificationLink\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.DATE-OF-CERTIFICATION' | translate}}</mat-label>\n                        <input matInput [matDatepicker]=\"pickerStart\" formControlName=\"dateOfCertification\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\n                        <mat-datepicker #pickerStart></mat-datepicker>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.EXPIRATION-DATE' | translate}}</mat-label>\n                        <input matInput [matDatepicker]=\"pickerEnd\" formControlName=\"expirationDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n                        <mat-datepicker #pickerEnd></mat-datepicker>\n                    </mat-form-field>\n                </div>\n\n            </div>\n\n\n        </form>\n\n\n    </mat-dialog-content>\n\n    <!--Footer-->\n    <mat-dialog-actions class=\"dialog-footer\">\n        <!--Cancel Button-->\n        <button class=\"btn-long btn-color-outline\" (click)=\"close()\">\n            <i class=\"fas fa-times\"></i>\n            Anulează\n        </button>\n\n        <!--Confirm Button-->\n        <button class=\"btn-long btn-color-fill\" (click)=\"confirm()\">\n            Confirmă\n            <i class=\"fas fa-check\"></i>\n        </button>\n    </mat-dialog-actions>\n\n</div>\n";

/***/ }),

/***/ 85674:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-cv-education/add-edit-cv-education.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"dialog-container\">\n\n    <!--Header-->\n    <div class=\"dialog-header\">\n        <h2>{{isEditMode ? ('JOBS.EDIT-EDUCATION' | translate) : ('JOBS.NEW-EDUCATION' | translate)}}</h2>\n        <button type=\"button\" class=\"btn-round btn-color-fill\" (click)=\"close()\">\n            <i class=\"fas fa-times\"></i>\n        </button>\n    </div>\n\n    <!--Body-->\n    <mat-dialog-content class=\"dialog-content\">\n\n        <form [formGroup]=\"educationForm\">\n            <div class=\"row mb-3\">\n\n                <div class=\"col-12\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.SCHOOL-NAME' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'JOBS.SCHOOL-NAME' | translate}}\" formControlName=\"schoolName\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.GROUP' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'JOBS.GROUP' | translate}}\" formControlName=\"group\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.LOCATION' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'JOBS.LOCATION' | translate}}\" formControlName=\"location\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.STARTED-WORKING' | translate}}</mat-label>\n                        <input matInput [matDatepicker]=\"pickerStart\" formControlName=\"startDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\n                        <mat-datepicker #pickerStart></mat-datepicker>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.FINISHED-WORKING' | translate}}</mat-label>\n                        <input matInput [matDatepicker]=\"pickerEnd\" formControlName=\"endDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n                        <mat-datepicker #pickerEnd></mat-datepicker>\n                    </mat-form-field>\n                </div>\n\n            </div>\n\n\n        </form>\n\n\n    </mat-dialog-content>\n\n    <!--Footer-->\n    <mat-dialog-actions class=\"dialog-footer\">\n        <!--Cancel Button-->\n        <button class=\"btn-long btn-color-outline\" (click)=\"close()\">\n            <i class=\"fas fa-times\"></i>\n            Anulează\n        </button>\n\n        <!--Confirm Button-->\n        <button class=\"btn-long btn-color-fill\" (click)=\"confirm()\">\n            Confirmă\n            <i class=\"fas fa-check\"></i>\n        </button>\n    </mat-dialog-actions>\n\n</div>\n";

/***/ }),

/***/ 55642:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-cv-experience/add-edit-cv-experience.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"dialog-container\">\n\n    <!--Header-->\n    <div class=\"dialog-header\">\n        <h2>{{isEditMode ? ('JOBS.EDIT-EXPERIENCE' | translate) : ('JOBS.NEW-EXPERIENCE' | translate)}}</h2>\n        <button type=\"button\" class=\"btn-round btn-color-fill\" (click)=\"close()\">\n            <i class=\"fas fa-times\"></i>\n        </button>\n    </div>\n\n    <!--Body-->\n    <mat-dialog-content class=\"dialog-content\">\n\n        <form [formGroup]=\"experienceForm\">\n            <div class=\"row mb-3\">\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.POSITION' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'JOBS.POSITION' | translate}}\" formControlName=\"positionHeld\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.TYPE-OF-CONTRACT' | translate}}</mat-label>\n                        <mat-select formControlName=\"typeOfContract\">\n                            <mat-option value=\"8\">{{'JOBS.8H' | translate}}</mat-option>\n                            <mat-option value=\"6\">{{'JOBS.6H' | translate}}</mat-option>\n                            <mat-option value=\"4\">{{'JOBS.4H' | translate}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.COMPANY-NAME' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'JOBS.COMPANY-NAME' | translate}}\" formControlName=\"companyName\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.LOCATION' | translate}}</mat-label>\n                        <input matInput placeholder=\"{{'JOBS.LOCATION' | translate}}\" formControlName=\"location\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.STARTED-WORKING' | translate}}</mat-label>\n                        <input matInput [matDatepicker]=\"pickerStart\" formControlName=\"jobStartDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\n                        <mat-datepicker #pickerStart></mat-datepicker>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.FINISHED-WORKING' | translate}}</mat-label>\n                        <input matInput [matDatepicker]=\"pickerEnd\" formControlName=\"jobEndDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n                        <mat-datepicker #pickerEnd></mat-datepicker>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>{{'JOBS.DESCRIPTION' | translate}}</mat-label>\n                        <textarea matInput placeholder=\"{{'JOBS.DESCRIPTION' | translate}}\" formControlName=\"description\"></textarea>\n                    </mat-form-field>\n                </div>\n\n            </div>\n\n\n        </form>\n\n\n    </mat-dialog-content>\n\n    <!--Footer-->\n    <mat-dialog-actions class=\"dialog-footer\">\n        <!--Cancel Button-->\n        <button class=\"btn-long btn-color-outline\" (click)=\"close()\">\n            <i class=\"fas fa-times\"></i>\n            Anulează\n        </button>\n\n        <!--Confirm Button-->\n        <button class=\"btn-long btn-color-fill\" (click)=\"confirm()\">\n            Confirmă\n            <i class=\"fas fa-check\"></i>\n        </button>\n    </mat-dialog-actions>\n\n</div>\n";

/***/ }),

/***/ 23458:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/add-edit-job/add-edit-job.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n\n    <div class=\"background-container\">\n        <img [src]=\"jobSettings?.image?.filePath\" alt=\"category-background-image\">\n    </div>\n\n    <div class=\"content-container\">\n        <div class=\"container\">\n            <app-dashboard-header pageTitleOne=\"{{ isEditMode\n                        ? ('JOBS.EDIT-JOB' | translate)\n                        : ('JOBS.ADD-JOB' | translate) }}\"\n                                  [buttonBackRoute]=\"isEditMode ? '../../my-job-offers' : '../my-job-offers'\"\n                                  (buttonCall)=\"submitJob()\"></app-dashboard-header>\n            <div class=\"row\" [formGroup]=\"jobForm\">\n                <div class=\"col-12\">\n                    <mat-form-field class=\"w-100\">\n                        <mat-label>{{'EVENTS.TITLE' | translate}}</mat-label>\n                        <input matInput formControlName=\"title\">\n                        <i class=\"fas fa-times\" type=\"button\" *ngIf=\"jobForm.get('title').value\"\n                           (click)=\"clearForm('title')\" matSuffix></i>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12\">\n                    <mat-form-field class=\"w-100\">\n                        <mat-label>{{'EVENTS.SHORT-DESCRIPTION' | translate}}</mat-label>\n                        <input matInput formControlName=\"shortDescription\">\n                        <i class=\"fas fa-times\" type=\"button\" *ngIf=\"jobForm.get('shortDescription').value\"\n                           (click)=\"clearForm('shortDescription')\" matSuffix></i>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 mb-4\">\n                    <angular-editor\n                            formControlName=\"description\"\n                            name=\"content\"\n                            id=\"postContent\"\n                            [config]=\"editorConfig\">\n\n                    </angular-editor>\n                </div>\n\n\n                <mat-accordion class=\"custom-accordion\" multi>\n\n                    <div formGroupName=\"attributesForm\">\n                        <ng-container *ngFor=\"let tab of attributeTabs\">\n\n                            <!--                    general info-->\n                            <mat-expansion-panel *ngIf=\"tab.tabName === 'general_info' && tab.tabAttributes?.length > 0\">\n                                <mat-expansion-panel-header>\n                                    <mat-panel-title [ngClass]=\"formBtnClicked && jobForm.get('attributesForm').get(tab.tabName).invalid\n                                                                ? 'panel-warning' : null\">\n                                        {{'EVENTS.GENERAL-INFO' | translate}}\n                                        <i class=\"fas fa-exclamation-circle\"></i>\n                                    </mat-panel-title>\n                                </mat-expansion-panel-header>\n\n                                <!--<div *ngFor=\"let tab of attributeTabs\">\n                                    <div class=\"row\" *ngIf=\"tab.tabName === 'general_info'\">\n                                        <div *ngFor=\"let attribute  of tab.tabAttributes\"\n                                             [className]=\"columnSize(attribute.size)\"\n                                        >\n                                            <app-dynamic-inputs\n                                                    [control]=\"jobForm.get('attributesForm').get(attribute.name)\"\n                                                    [inputFormData]=\"attribute\"/>\n\n                                        </div>\n                                    </div>\n                                </div>-->\n\n                                <div class=\"row\">\n                                    <div *ngFor=\"let attribute  of tab.tabAttributes\"\n                                         [className]=\"columnSize(attribute.size)\"\n                                    >\n                                        <app-dynamic-inputs\n                                                [control]=\"jobForm.get('attributesForm').get(tab.tabName).get(attribute.name)\"\n                                                [inputFormData]=\"attribute\"/>\n\n                                    </div>\n                                </div>\n\n\n                            </mat-expansion-panel>\n\n                            <!--                    about-->\n                            <mat-expansion-panel *ngIf=\"tab.tabName === 'about' && tab.tabAttributes?.length > 0\">\n                                <mat-expansion-panel-header>\n                                    <mat-panel-title [ngClass]=\"formBtnClicked && jobForm.get('attributesForm').get(tab.tabName).invalid\n                                                                ? 'panel-warning' : null\">\n                                        Criterii\n                                        <i class=\"fas fa-exclamation-circle\"></i>\n                                    </mat-panel-title>\n                                </mat-expansion-panel-header>\n\n                                <!--<div *ngFor=\"let tab of attributeTabs\">\n                                    <div class=\"row\" *ngIf=\"tab.tabName === 'about'\">\n                                        <div *ngFor=\"let attribute  of tab.tabAttributes\"\n                                             [className]=\"columnSize(attribute.size)\"\n                                        >\n                                            <app-dynamic-inputs\n                                                    [control]=\"jobForm.get('attributesForm').get(attribute.name)\"\n                                                    [inputFormData]=\"attribute\"/>\n\n                                        </div>\n                                    </div>\n                                </div>-->\n\n                                <div class=\"row\">\n                                    <div *ngFor=\"let attribute  of tab.tabAttributes\"\n                                         [className]=\"columnSize(attribute.size)\"\n                                    >\n                                        <app-dynamic-inputs\n                                                [control]=\"jobForm.get('attributesForm').get(tab.tabName).get(attribute.name)\"\n                                                [inputFormData]=\"attribute\"/>\n\n                                    </div>\n                                </div>\n\n\n                            </mat-expansion-panel>\n\n                            <!--                    facilities-->\n                            <mat-expansion-panel *ngIf=\"tab.tabName === 'facilities' && tab.tabAttributes?.length > 0\">\n                                <mat-expansion-panel-header>\n                                    <mat-panel-title [ngClass]=\"formBtnClicked && jobForm.get('attributesForm').get(tab.tabName).invalid\n                                                                ? 'panel-warning' : null\">\n                                        {{'EVENTS.BENEFITS' | translate}}\n                                        <i class=\"fas fa-exclamation-circle\"></i>\n                                    </mat-panel-title>\n                                </mat-expansion-panel-header>\n\n                                <!--<div *ngFor=\"let tab of attributeTabs\">\n                                    <div class=\"row\" *ngIf=\"tab.tabName === 'facilities'\">\n                                        <div *ngFor=\"let attribute  of tab.tabAttributes\"\n                                             [className]=\"columnSize(attribute.size)\"\n                                        >\n                                            <app-dynamic-inputs\n                                                    [control]=\"jobForm.get('attributesForm').get(attribute.name)\"\n                                                    [inputFormData]=\"attribute\"/>\n\n                                        </div>\n                                    </div>\n                                </div>-->\n\n                                <div class=\"row\">\n                                    <div *ngFor=\"let attribute  of tab.tabAttributes\"\n                                         [className]=\"columnSize(attribute.size)\"\n                                    >\n                                        <app-dynamic-inputs\n                                                [control]=\"jobForm.get('attributesForm').get(tab.tabName).get(attribute.name)\"\n                                                [inputFormData]=\"attribute\"/>\n\n                                    </div>\n                                </div>\n\n\n                            </mat-expansion-panel>\n\n                            <!--                    contact-->\n                            <mat-expansion-panel *ngIf=\"tab.tabName === 'contact' && tab.tabAttributes?.length > 0\">\n                                <mat-expansion-panel-header>\n                                    <mat-panel-title [ngClass]=\"formBtnClicked && jobForm.get('attributesForm').get(tab.tabName).invalid\n                                                                ? 'panel-warning' : null\">\n                                        Contact\n                                        <i class=\"fas fa-exclamation-circle\"></i>\n                                    </mat-panel-title>\n                                </mat-expansion-panel-header>\n\n                                <!--<div *ngFor=\"let tab of attributeTabs\">\n                                    <div class=\"row\" *ngIf=\"tab.tabName === 'contact'\">\n                                        <div *ngFor=\"let attribute  of tab.tabAttributes\"\n                                             [className]=\"columnSize(attribute.size)\"\n                                        >\n                                            <app-dynamic-inputs\n                                                    [control]=\"jobForm.get('attributesForm').get(attribute.name)\"\n                                                    [inputFormData]=\"attribute\"/>\n\n                                        </div>\n                                    </div>\n                                </div>-->\n\n                                <div class=\"row\">\n                                    <div *ngFor=\"let attribute  of tab.tabAttributes\"\n                                         [className]=\"columnSize(attribute.size)\"\n                                    >\n                                        <app-dynamic-inputs\n                                                [control]=\"jobForm.get('attributesForm').get(tab.tabName).get(attribute.name)\"\n                                                [inputFormData]=\"attribute\"/>\n\n                                    </div>\n                                </div>\n\n\n                            </mat-expansion-panel>\n                        </ng-container>\n                    </div>\n\n                    <!--                    location-->\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title [ngClass]=\"formBtnClicked && (jobForm.get('address').invalid || jobForm.get('country').invalid || jobForm.get('city').invalid)\n                                                                ? 'panel-warning' : null\">\n                                {{'JOBS.LOCATION' | translate}}\n                                <i class=\"fas fa-exclamation-circle\"></i>\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <mat-form-field class=\"w-100\">\n                                    <mat-label>{{'EVENTS.ADDRESS' | translate}}</mat-label>\n                                    <input matInput formControlName=\"address\">\n                                    <i class=\"fas fa-times\" type=\"button\" *ngIf=\"jobForm.get('address').value\"\n                                       (click)=\"clearForm('address')\" matSuffix></i>\n                                    <mat-error *ngIf=\"jobForm.get('address').hasError('required')\">Input is required!</mat-error>\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field class=\"w-100\">\n                                    <mat-label>{{'EVENTS.COUNTRY' | translate}}</mat-label>\n                                    <mat-select formControlName=\"country\" (selectionChange)=\"getCities($event)\">\n                                        <mat-option *ngFor=\"let country of countries\"\n                                                    [value]=\"country\">{{country}}</mat-option>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"jobForm.get('country').hasError('required')\">Input is required!</mat-error>\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field class=\"w-100\">\n                                    <mat-label>{{'EVENTS.CITY' | translate}}</mat-label>\n                                    <mat-select formControlName=\"city\">\n                                        <mat-option *ngFor=\"let city of cities\"\n                                                    [value]=\"city.name\">{{city.name}}</mat-option>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"jobForm.get('city').hasError('required')\">Input is required!</mat-error>\n                                </mat-form-field>\n                            </div>\n\n                        </div>\n\n                    </mat-expansion-panel>\n\n\n                    <!--                    FEATURED IMAGE-->\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                {{ 'FIELD.FEATURED_IMAGE' | translate}}\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <div class=\"thumbnail d-flex justify-content-center\">\n                            <div class=\"image-container\">\n                                <input type=\"file\"\n                                       hidden\n                                       accept=\"image/*\"\n                                       #thumbnail\n                                       id=\"thumbnailInput\"\n                                       (change)=\"onThumbnailChange($event)\">\n                                <div *ngIf=\"!thumbnail.value && !thumbnailUrl?.filePath\" class=\"no-image\"\n                                     attr.translatedContent=\"{{ 'GENERAL.INSERT_IMAGE' | translate}}\"\n                                     (click)=\"thumbnail.click()\"></div>\n\n                                <img *ngIf=\"thumbnail.value || thumbnailUrl?.filePath\" class=\"img-fluid featured-image\"\n                                     [src]=\"thumbnailUrl.filePath\" alt=\"thumbnail\">\n                                <button *ngIf=\"thumbnail.value || thumbnailUrl?.filePath\"\n                                        (click)=\"removeThumbnail(); thumbnail.value=''\"\n                                        type=\"button\"\n                                        id=\"btnRemoveFeaturedImage\"\n                                        class=\"btn-thumbnail\">\n                                    <i class=\"fas fa-times\"></i>\n                                </button>\n                            </div>\n                        </div>\n\n\n                    </mat-expansion-panel>\n\n                </mat-accordion>\n\n\n            </div>\n        </div>\n    </div>\n\n</div>";

/***/ }),

/***/ 78687:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/delete-cv-data-modal/delete-cv-data-modal.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"dialog-container d-flex justify-content-center align-items-center flex-column\">\n\n    <!--Header-->\n    <div class=\"dialog-header d-flex justify-content-center align-items-center flex-column\">\n        <h2 *ngIf=\"data.type === 'experience'\">Esti sigur că vrei să ștergi experiența? </h2>\n        <h2 *ngIf=\"data.type === 'education'\">Esti sigur că vrei să ștergi educația? </h2>\n        <h2 *ngIf=\"data.type === 'certification'\">Esti sigur că vrei să ștergi certificatul? </h2>\n<!--        <p>Acțiunea de stergere este permanentă și complet irevocabilă.</p>-->\n        <div class=\"row\">\n\n            <!--Name-->\n            <div class=\"col-12\">\n                <h4 class=\"section-title\">Pozitia: <span>{{data.givenData?.positionHeld}}</span></h4>\n            </div>\n\n\n        </div>\n\n    </div>\n\n    <!--Body-->\n<!--    <mat-dialog-content class=\"dialog-content\">-->\n\n\n\n\n<!--    </mat-dialog-content>-->\n\n    <!--Footer-->\n    <mat-dialog-actions class=\"dialog-footer\">\n        <!--Cancel Button-->\n        <button class=\"btn-long btn-color-outline w-100\" (click)=\"close()\">\n            <i class=\"fas fa-times\"></i>\n            Anulează\n        </button>\n\n        <!--Confirm Button-->\n        <button class=\"btn-long btn-color-fill w-100\" (click)=\"deleteData()\">\n            Confirmă\n            <i class=\"fas fa-check\"></i>\n        </button>\n    </mat-dialog-actions>\n\n</div>\n\n";

/***/ }),

/***/ 63541:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/jobs-list/jobs-list.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"resource-container\">\n\n    <div class=\"sort-filter\">\n        <button class=\"btn-long btn-color-fill me-3\" *ngIf=\"jobOffersState\" [routerLink]=\"['../create']\"><i class=\"fas fa-plus\"></i>Add\n            new job\n        </button>\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Sort By</mat-label>\n            <mat-select (selectionChange)=\"onSortChange($event)\">\n                <mat-option [value]=\"'title'\">Name</mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n    <div class=\"resource-list\">\n        <ng-container *ngFor=\"let resource of resourcesList\">\n            <app-resource-card-with-template\n                    [routerLink]=\"['../view', resource.id]\"\n                    [cardType]=\"'long'\"\n                    [htmlDescription]=\"true\"\n                    [resourceTypeName]=\"currentLanguage === 'ro' ? resourceType.nameRo : resourceType.nameEn\"\n                    [resourceTemplate]=\"resourceTemplate\"\n                    [resourceData]=\"resource\"\n                    [isMyJob]=\"jobOffersState\">\n            </app-resource-card-with-template>\n        </ng-container>\n    </div>\n\n    <div *ngIf=\"resourcesList.length === 0\"\n         class=\"d-flex no-data-class justify-content-center flex-column align-items-center gap-3\">\n        <img src=\"../../../../../assets/images/others/no_data_icon.png\">\n        <h4>{{'GENERAL.NO_DATA'|translate}}</h4>\n    </div>\n\n    <div class=\"resource-pagination\">\n        <mat-paginator [length]=\"paginationInfo?.totalElements\"\n                       [pageSize]=\"pageSize\"\n                       [pageSizeOptions]=\"[5, 10, 15, 20]\"\n                       (page)=\"onPaginationChange($event)\"\n                       #resourcesPaginator\n                       aria-label=\"Select page\">\n        </mat-paginator>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 93971:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/jobs-sidebar/jobs-sidebar.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p class=\"m-0\">\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Search title</mat-label>\n        <input (keyup.enter)=\"searchByTitle()\" [(ngModel)]=\"resourceTitleToSearch\" matInput placeholder=\"Search...\">\n        <mat-icon role=\"button\" *ngIf=\"!resourceTitleToSearch\" matSuffix (click)=\"searchByTitle()\">search</mat-icon>\n        <mat-icon role=\"button\" *ngIf=\"resourceTitleToSearch\" matSuffix (click)=\"resourceTitleToSearch = null\">clear</mat-icon>\n    </mat-form-field>\n</p>\n\n<div *ngIf=\"filterAttributes\" class=\"filters-container\">\n    <form (ngSubmit)=\"applyFilters()\" [formGroup]=\"filtersForm\">\n        <mat-accordion [multi]=\"true\">\n            <mat-expansion-panel *ngFor=\"let attribute of filterAttributes\" [expanded]=\"true\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title class=\"fw-bold\">\n                        {{ attribute.name }}\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n\n                <!-- DO NOT DELETE -->\n                <!--<ng-container *ngIf=\"attribute.valueType === 'select'\">\n                    <mat-radio-group\n                            [formControlName]=\"attribute.name\">\n                        <mat-radio-button *ngFor=\"let valueOption of attribute.valueOptions\" [value]=\"valueOption\" color=\"primary\">\n                            {{valueOption}}\n                        </mat-radio-button>\n                    </mat-radio-group>\n                </ng-container>\n\n                <ng-container *ngIf=\"attribute.valueType === 'multiple-select'\" [formGroupName]=\"attribute.name\">\n                    <p *ngFor=\"let valueOption of attribute.valueOptions\" class=\"m-0\">\n                        <mat-checkbox [formControlName]=\"valueOption\" color=\"primary\">{{ valueOption }}</mat-checkbox>\n                    </p>\n                </ng-container>-->\n\n                <ng-container [formGroupName]=\"attribute.name\">\n                    <p *ngFor=\"let valueOption of attribute.valueOptions\" class=\"m-0\">\n                        <mat-checkbox [formControlName]=\"valueOption\" color=\"primary\">{{ valueOption }}</mat-checkbox>\n                    </p>\n                </ng-container>\n\n            </mat-expansion-panel>\n        </mat-accordion>\n\n        <div class=\"btn-container\">\n            <button *ngIf=\"anyFilterSelected\" (click)=\"resetFilters()\"\n                    type=\"button\"\n                    class=\"btn-auto btn-color-fill btn-reset\">\n                <i class=\"fas fa-times\"></i>\n                Clear Filters\n            </button>\n\n            <button type=\"submit\" class=\"btn-auto btn-color-fill\">\n                <i class=\"fas fa-check\"></i>\n                Apply\n            </button>\n        </div>\n    </form>\n</div>\n";

/***/ }),

/***/ 41281:
/*!*************************************************************************************!*\
  !*** ./src/app/features/jobs/_components/view-cv/view-cv.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n\n    <div class=\"background-container\">\n        <img [src]=\"cvSettings?.image?.filePath\" alt=\"category-background-image\">\n    </div>\n\n    <div class=\"title-container\">\n\n        <h1 class=\"text-center m-0\">\n           {{myCv ? ('JOBS.MY-CV' | translate) : ('JOBS.CANDIDATE-CV' | translate) }}\n        </h1>\n\n\n        <div class=\"header-cv\">\n            <div class=\"container\">\n                <div class=\"user-data d-flex justify-content-between align-items-center flex-wrap\">\n                    <div class=\"user d-flex justify-content-start align-items-center\">\n                        <img [src]=\"currentCv?.avatar?.filePath\" class=\"avatar me-3\">\n                        <div class=\"user-text\">\n                            <p class=\"user-name mb-0\">{{currentCv?.name}}</p>\n                            <p class=\"function mb-0\">{{currentCv?.email}}</p>\n                        </div>\n                    </div>\n                    <button *ngIf=\"!myCv\" class=\"btn-long btn-white-fill\" [disabled]=\"!currentCv?.pdfCv\" matTooltip=\"{{currentCv?.pdfCv ? '' : 'This user does not have a CV uploaded'}}\" (click)=\"downloadCv()\"><i class=\"fas fa-download\"></i>{{'JOBS.DOWNLOAD_CV' | translate}}</button>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"content-container\">\n        <div class=\"cv-content container\">\n            <div class=\"cv-section\">\n                <p class=\"cv-section-title\">Contact</p>\n\n                <p class=\"cv-section-subtitle\"><i class=\"fas fa-home me-2\"></i>{{'EVENTS.ADDRESS' | translate}}: <span>{{currentCv?.address}}</span></p>\n                <p class=\"cv-section-subtitle\"><i class=\"fas fa-phone-alt me-2\"></i>{{'USER.TELEPHONE' | translate}}: <span>{{currentCv?.telephone}}</span></p>\n                <p class=\"cv-section-subtitle\"><i class=\"fas fa-envelope me-2\"></i>Email: <span>{{currentCv?.email}}</span></p>\n                <p class=\"cv-section-subtitle\"><i class=\"fab fa-linkedin me-2\"></i>LinkedIn: <span>{{currentCv?.linkedin}}</span></p>\n            </div>\n\n            <div class=\"cv-section\">\n                <p class=\"summary-title\">{{'JOBS.SUMMARY' | translate}}</p>\n                <p class=\"summary\">{{currentCv?.description}}</p>\n            </div>\n\n            <div class=\"cv-section\">\n                <p class=\"cv-section-title\">{{'JOBS.EXPERIENCE' | translate}}</p>\n                <div class=\"container\" *ngIf=\"currentCv?.experience?.length > 0\">\n                    <div class=\"row\" *ngFor=\"let exp of currentCv?.experience\">\n                        <div class=\"col-4 col-lg-2\">\n                            <p class=\"cv-section-subtitle\">{{exp?.jobEndDate | date : \"MMMM, yyyy\"}}</p>\n                            <div class=\"separator\"></div>\n                            <p class=\"mb-0\">{{exp?.jobStartDate | date : \"MMMM, yyyy\"}}</p>\n                        </div>\n                        <div class=\"col-8 col-lg-10 experience-content\">\n                            <div class=\"d-flex justify-content-between align-items-center flex-wrap\">\n                                <p class=\"cv-section-title mb-0\">{{exp?.positionHeld}} - <span class=\"summary-title\">{{exp?.companyName}}</span></p>\n                                <p class=\"mb-0\">{{exp?.location}}</p>\n                            </div>\n                            <div class=\"description-section\" *ngIf=\"exp?.description!==''\">\n                                <p [ngClass]=\"readMore ? 'experience-desc mb-0' : 'mb-0'\">{{exp?.description}}</p>\n                                <p class=\"more mb-0\" (click)=\"changeReadMore()\">{{'JOBS.READ-MORE' | translate}} <i class=\"{{readMore ? 'fas fa-chevron-down' : 'fas fa-chevron-up'}}\"></i></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <p class=\"mb-0\" *ngIf=\"currentCv?.experience?.length === 0 || !currentCv?.experience\" >No experience registered</p>\n            </div>\n\n            <div class=\"cv-section\">\n                <p class=\"cv-section-title\">{{'JOBS.EDUCATION' | translate}}</p>\n                <div class=\"container\" *ngIf=\"currentCv?.education?.length > 0\">\n                    <div class=\"row\" *ngFor=\"let education of currentCv?.education\">\n                        <div class=\"col-4 col-lg-2\">\n                            <p class=\"cv-section-subtitle\">{{education?.endDate | date : \"MMMM, yyyy\"}}</p>\n                            <div class=\"separator\"></div>\n                            <p class=\"mb-0\">{{education?.startDate | date : \"MMMM, yyyy\"}}</p>\n                        </div>\n                        <div class=\"col-8 col-lg-10 experience-content\">\n                            <div class=\"d-flex justify-content-between align-items-center flex-wrap\">\n                                <p class=\"cv-section-title mb-0\">{{education?.group}} - <span class=\"summary-title\">{{education?.schoolName}}</span></p>\n                                <p class=\"mb-0\">{{education?.location}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <p class=\"mb-0\" *ngIf=\"currentCv?.education?.length === 0 || !currentCv?.education\">No education registered</p>\n            </div>\n\n<!--            <div class=\"cv-section\">-->\n<!--                <p class=\"cv-section-title\">SKILLS</p>-->\n<!--            </div>-->\n        </div>\n    </div>\n\n\n</div>\n";

/***/ }),

/***/ 26751:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/jobs/candidates-list/candidates-list.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n\n    <div class=\"background-container\">\n        <img [src]=\"candidatesListSettings?.image?.filePath\" alt=\"category-background-image\">\n    </div>\n\n    <div class=\"content-container\">\n\n        <h1 class=\"text-center m-0\">\n            {{\"JOBS.CANDIDATES_LIST\" | translate}}\n        </h1>\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12 col-lg-3\">\n<!--                    <app-jobs-sidebar (filtersSubmitted)=\"scrollResourcesListIntoView()\"></app-jobs-sidebar>-->\n                </div>\n\n                <div class=\"col-12 col-lg-9\">\n                    <div class=\"candidates-list\" *ngFor=\"let candidate of candidatesList\">\n                        <app-display-user [candidate]=\"candidate\" [showMenu]=\"true\" [menuType]=\"'candidate'\"></app-display-user>\n                    </div>\n                </div>\n            </div>\n            <mat-paginator [length]=\"totalElements\"\n                           [pageSize]=\"pageSize\"\n                           [pageSizeOptions]=\"[5, 10, 15, 20]\"\n                           (page)=\"onPaginationChange($event)\"\n                           #candidatesPaginator\n                           aria-label=\"Select page\">\n            </mat-paginator>\n        </div>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 5988:
/*!*******************************************************************************!*\
  !*** ./src/app/features/jobs/job-offers/job-offers.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n\n    <div *ngIf=\"(resourceType$ | async) as resourceType\" class=\"background-container\">\n        <img [src]=\"resourceType?.image?.filePath\" alt=\"category-background-image\">\n    </div>\n\n    <div class=\"content-container\">\n\n        <h1 class=\"text-center m-0\">\n            {{ myJobOffers ? (\"JOBS.MY_JOB_OFFERS\" | translate) : (\"JOBS.ALL_JOB_OFFERS\" | translate) }}\n        </h1>\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12 col-lg-3\">\n                    <app-jobs-sidebar (filtersSubmitted)=\"scrollResourcesListIntoView()\"></app-jobs-sidebar>\n                </div>\n\n                <div class=\"col-12 col-lg-9\" #jobsList>\n                    <app-jobs-list></app-jobs-list>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>";

/***/ }),

/***/ 58591:
/*!*************************************************************************!*\
  !*** ./src/app/features/jobs/user-cv/user-cv.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n\n    <div class=\"background-container\">\n        <img [src]=\"myCvImagePath\" alt=\"category-background-image\">\n    </div>\n\n    <div class=\"content-container\">\n        <div class=\"container\">\n            <h1 class=\"job-title mb-4\">My CV</h1>\n            <div class=\"row mb-4\">\n                <div class=\"col-12 col-lg-8\">\n                    <div class=\"cv-completion mb-4 mb-lg-0\">\n                        <div class=\"row\">\n                            <div class=\"d-flex justify-content-sm-between align-items-center flex-wrap justify-content-center\">\n                                <h1>Complete your CV</h1>\n                                <div class=\"progress mb-2\">{{percentageDisplay}}%</div>\n                            </div>\n\n                            <div class=\"col-12\">\n                                <p>Your CV is not complete yet, here’s why: </p>\n                            </div>\n                            <div class=\"col-12 col-lg-6\">\n                                <div class=\"cv-category-completion d-flex justify-content-between\">\n                                    <p>Profile image</p>\n                                    <i class=\"fas fa-check\" *ngIf=\"avatarCvUrl?.filePath\"></i>\n                                    <i class=\"fas fa-times\" *ngIf=\"!avatarCvUrl?.filePath\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-12 col-lg-6\">\n                                <div class=\"cv-category-completion d-flex justify-content-between\">\n                                    <p>Summary</p>\n                                    <i class=\"fas fa-check\" *ngIf=\"cvForm.get('description').value!==''\"></i>\n                                    <i class=\"fas fa-times\"\n                                       *ngIf=\"cvForm.get('description').value===''||!cvForm.get('description').value\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-12 col-lg-6\">\n                                <div class=\"cv-category-completion d-flex justify-content-between\">\n                                    <p>Contact</p>\n                                    <i class=\"fas fa-check\" *ngIf=\"contactCheck\"></i>\n                                    <i class=\"fas fa-times\" *ngIf=\"!contactCheck\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-12 col-lg-6\">\n                                <div class=\"cv-category-completion d-flex justify-content-between\">\n                                    <p>Work Experience</p>\n                                    <i class=\"fas fa-check\" *ngIf=\"experienceList.length > 0\"></i>\n                                    <i class=\"fas fa-times\" *ngIf=\"experienceList.length === 0\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-12 col-lg-6\">\n                                <div class=\"cv-category-completion d-flex justify-content-between\">\n                                    <p>Education</p>\n                                    <i class=\"fas fa-check\" *ngIf=\"educationList.length > 0\"></i>\n                                    <i class=\"fas fa-times\" *ngIf=\"educationList.length === 0\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-12 col-lg-6\">\n                                <div class=\"cv-category-completion d-flex justify-content-between\">\n                                    <p>Certifications</p>\n                                    <i class=\"fas fa-check\" *ngIf=\"certificationList.length > 0\"></i>\n                                    <i class=\"fas fa-times\" *ngIf=\"certificationList.length === 0\"></i>\n                                </div>\n                            </div>\n<!--                            <div class=\"col-12 col-lg-6\">-->\n<!--                                <div class=\"cv-category-completion d-flex justify-content-between\">-->\n<!--                                    <p>Skills</p>-->\n<!--                                    <i class=\"fas fa-check\"></i>-->\n<!--                                    <i class=\"fas fa-times\"></i>-->\n<!--                                </div>-->\n<!--                            </div>-->\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"col-12 col-lg-4\">\n                    <div class=\"user-avatar\">\n                        <div class=\"profile-image d-flex justify-content-center mb-2\">\n                            <img [src]=\"avatarCvUrl?.filePath ? avatarCvUrl?.filePath : '../../../../assets/images/others/user.jpg'\"\n                                 alt=\"dada\" class=\"avatar-img\">\n                        </div>\n                        <div class=\"avatar-text d-flex flex-column justify-content-between align-items-center\">\n                            <h4>Modifică avatar</h4>\n                            <p>Formate suportate: .jpeg, .png, .jpg</p>\n                        </div>\n                        <div class=\"avatar-btns d-flex justify-content-between align-items-center\">\n                            <button class=\"btn-long btn-white-fill\" type=\"button\" (click)=\"deleteCvAvatar()\"><i\n                                    class=\"fas fa-times\"></i>Șterge\n                            </button>\n                            <button class=\"btn-long btn-color-fill\" type=\"button\" (click)=\"avatarChange.click()\"><i\n                                    class=\"fas fa-pen\"></i>Schimbă\n                            </button>\n                            <input type=\"file\"\n                                   hidden\n                                   accept=\"image/*\"\n                                   #avatarChange\n                                   id=\"avatarChange\"\n                                   (change)=\"uploadAvatar($event)\"\n                            >\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row mb-4\">\n                <div class=\"col-12\">\n                    <div class=\"upload-resume d-flex justify-content-between align-items-center\">\n                        <div class=\"left-side d-flex justify-content-start\">\n                            <i class=\"far fa-file me-2\"></i>\n                            <div class=\"resume-text d-flex flex-column justify-content-center\">\n                                <h5 class=\"mb-0\">Upload Resume</h5>\n                                <p class=\"mb-0\">Formate suportate: .pdf</p>\n                            </div>\n\n                        </div>\n                        <div *ngIf=\"userCvUrl?.filePath\" class=\"existing-file d-flex justify-content-end align-items-center\">\n                            <p class=\"mb-0\">{{userCvUrl?.fileName}}</p>\n                            <button class=\"btn-round btn-no-outline\" (click)=\"deleteCvFile()\"><i class=\"fas fa-trash\"></i></button>\n                        </div>\n                        <button class=\"btn-long btn-color-fill\" (click)=\"uploadCv.click()\" *ngIf=\"!userCvUrl?.filePath\"><i class=\"fas fa-upload me-2\"></i>Încarcă CV</button>\n                        <input type=\"file\"\n                               hidden\n                               accept=\"file/*\"\n                               #uploadCv\n                               id=\"uploadFile\"\n                               (change)=\"uploadCvFile($event)\"\n                        >\n                    </div>\n                </div>\n            </div>\n\n\n            <form [formGroup]=\"cvForm\">\n                <div class=\"section-cv\">\n                    <p class=\"title-section\">Summary</p>\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>Description</mat-label>\n                                <textarea matInput formControlName=\"description\"></textarea>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"section-cv\">\n                    <p class=\"title-section\">Contact</p>\n                    <div class=\"row\">\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>Address</mat-label>\n                                <input matInput formControlName=\"address\">\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>Phone</mat-label>\n                                <input matInput formControlName=\"telephone\">\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>Email</mat-label>\n                                <input matInput formControlName=\"email\">\n                                <mat-error *ngIf=\"cvForm.get('email').hasError('email')\">Acest email nu este valid!</mat-error>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>LinkedIn</mat-label>\n                                <input matInput formControlName=\"linkedin\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"section-cv\">\n                    <p class=\"title-section\">Experience</p>\n                    <div class=\"row\">\n\n                        <div class=\"card-list col-12 col-md-4 col-lg-3\"\n                             *ngFor=\"let experience of experienceList; let i=index\">\n                            <app-cv-card [isExperience]=\"true\" [givenData]=\"experience\"></app-cv-card>\n                        </div>\n                        <div class=\"col-12\">\n                            <button class=\"add-btn\" (click)=\"openAddExperienceModal()\" type=\"button\">\n                                Adăugare\n                                <i class=\"fas fa-plus\"></i>\n                            </button>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"section-cv\">\n                    <p class=\"title-section\">Education</p>\n                    <div class=\"row\">\n\n                        <div class=\"card-list col-12 col-md-4 col-lg-3\"\n                             *ngFor=\"let education of educationList; let i=index\">\n                            <app-cv-card [isEducation]=\"true\" [givenData]=\"education\"></app-cv-card>\n                        </div>\n                        <div class=\"col-12\">\n                            <button class=\"add-btn\" (click)=\"openAddEducationModal()\" type=\"button\">\n                                Adăugare\n                                <i class=\"fas fa-plus\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"section-cv\">\n                    <p class=\"title-section\">Certifications</p>\n                    <div class=\"row\">\n\n                        <div class=\"card-list col-12 col-md-4 col-lg-3\"\n                             *ngFor=\"let certification of certificationList; let i=index\">\n                            <app-cv-card [isCertification]=\"true\" [givenData]=\"certification\"></app-cv-card>\n                        </div>\n                        <div class=\"col-12\">\n                            <button class=\"add-btn\" (click)=\"openAddCertificationModal()\" type=\"button\">\n                                Adăugare\n                                <i class=\"fas fa-plus\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n\n<!--                <div class=\"section-cv\">-->\n<!--                    <p class=\"title-section\">Skills</p>-->\n<!--                    <div class=\"row\">-->\n<!--                        <div class=\"col-12\">-->\n<!--&lt;!&ndash;                            <mat-form-field class=\"w-100\">&ndash;&gt;-->\n<!--&lt;!&ndash;                                <mat-label>Language Skills</mat-label>&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                    <mat-chip-row *ngFor=\"let  of fruits\"&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                                  (removed)=\"remove(fruit)\"&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                                  [editable]=\"true\"&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                                  (edited)=\"edit(fruit, $event)\"&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                                  [aria-description]=\"'press enter to edit ' + fruit.name\">&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                        {{fruit.name}}&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                            <mat-icon>cancel</mat-icon>&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                        </button>&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                    </mat-chip-row>&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                    <input placeholder=\"New fruit...\"&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                           [matChipInputFor]=\"chipGrid\"&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                           [matChipInputAddOnBlur]=\"addOnBlur\"&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                           (matChipInputTokenEnd)=\"add($event)\"/>&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;&lt;!&ndash;                                </mat-chip-grid>&ndash;&gt;&ndash;&gt;-->\n<!--&lt;!&ndash;                            </mat-form-field>&ndash;&gt;-->\n<!--                        </div>-->\n<!--                    </div>-->\n\n<!--                </div>-->\n\n                <div class=\"submit-section d-flex flex-column\">\n                    <mat-checkbox class=\"mb-2\" formControlName=\"isPublic\" color=\"primary\">Accept vizibilitatea CV-ului pentru angajatori.</mat-checkbox>\n                    <mat-checkbox class=\"mb-2\" formControlName=\"accept\" color=\"primary\">Accept termenii si conditiile impuse de Bestinform pentru prelucrarea si modificarea datelor cu caracter personal.</mat-checkbox>\n                    <mat-error *ngIf=\"cvForm.get('accept').hasError('required')\">Acest camp trebuie bifat!</mat-error>\n                    <button class=\"btn-long btn-color-fill w-100\" (click)=\"submitForm()\"><i class=\"fas fa-save me-2\"></i>Salveaza</button>\n                </div>\n            </form>\n\n\n        </div>\n\n    </div>\n</div>\n";

/***/ }),

/***/ 63285:
/*!*********************************************************************************!*\
  !*** ./src/app/standalone-components/cv-card/cv-card.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card cv-card\">\n    <div class=\"card-body d-flex justify-content-between\">\n        <div class=\"info w-100\">\n            <div class=\"top d-flex justify-content-between align-items-center\">\n                <p class=\"title mb-0\" >{{displayObject?.title}}</p>\n                <button class=\"btn-round btn-no-outline\" [matMenuTriggerFor]=\"menu\"><i class=\"fas fa-ellipsis-v\"></i></button>\n                <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item (click)=\"openEditModal(givenData)\">Editeaza</button>\n                    <button mat-menu-item (click)=\"openDeleteModal(givenData,type)\">Sterge</button>\n                </mat-menu>\n            </div>\n\n            <p class=\"subtitle mb-0\" >{{displayObject?.subtitle}}</p>\n            <p class=\"extra mb-0\" >{{(displayObject?.startDate | date : 'dd.MM.yyyy')+' - '+(displayObject?.endDate | date : 'dd.MM.yyyy')}}</p>\n            <p class=\"extra mb-0\" >{{displayObject?.location}}</p>\n        </div>\n\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_jobs_jobs_module_ts.js.map