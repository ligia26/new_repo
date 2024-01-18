(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_resource-templates_templates_module_ts"],{

/***/ 44016:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/resource-templates/add-edit-template/add-edit-template.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditTemplateComponent": () => (/* binding */ AddEditTemplateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-template.component.html?ngResource */ 3135);
/* harmony import */ var _add_edit_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-template.component.scss?ngResource */ 74325);
/* harmony import */ var _add_edit_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_edit_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/templates.service */ 71453);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);













let AddEditTemplateComponent = class AddEditTemplateComponent {
  constructor(fb, resourcesService, templateService, route, toastService, translate, router, modalService, cdr) {
    this.fb = fb;
    this.resourcesService = resourcesService;
    this.templateService = templateService;
    this.route = route;
    this.toastService = toastService;
    this.translate = translate;
    this.router = router;
    this.modalService = modalService;
    this.cdr = cdr;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.isDisabled = false;
    this.emptyTemplateData = {
      name: '',
      slug: ''
    };
    this.categoriesList = [];
    // Material Chips
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.COMMA];
    this.benefitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
    this.benefits = [];
    this.allBenefits = ['Parcare gratuita', 'Aer conditionat', 'Bauturi gratis', 'Cabina foto', 'Candy bar'];
    this.tabIndex = 0;
    this.templatesTabName = ['general_info', 'about', 'contact', 'facilities'];
    this.selectedCategories = [];
    this.selectedAttributes = [];
    this.attributeCheckIndex = 0;
    this.attributesList = [];
    this.attributesListOnEdit = [];
    // key - id-ul unui resource type; value - daca este disabled
    this.checkboxDisabledStates = null;
  }
  ngOnInit() {
    this.templateFormInit();
    this.templateService.getResourceTypes().subscribe(resp => {
      this.resourceTypes = resp;
      console.log('RES TYPES', this.resourceTypes);
      this.getTemplateData();
    });
    this.getAttributeCategories();
  }
  initConfigTabs() {
    this.templatesTabName.forEach(item => {
      this.addAttributeTab(item);
    });
  }
  openModal(templateRef) {
    this.modalService.open(templateRef);
  }
  /** Initialize Form */
  templateFormInit() {
    this.templateForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      resourceTypeIds: [],
      slug: "string",
      geographicalCoordinates: false,
      timetable: false,
      serviceBookingTimeSlots: false,
      // additionalServices: false,
      rentalBooking: false,
      serviceBookingTimePicker: false,
      ticketBooking: false,
      productsList: false,
      culturalBooking: false,
      applyToJob: false,
      carBooking: false,
      noBooking: false,
      relatedResources: false,
      externalUrl: false,
      benefits: this.fb.array(['']),
      attributes: this.fb.array([]),
      bookingType: '',
      categoryId: null,
      listingSetting: this.fb.group({
        cardType: null,
        attributes: [],
        reviews: false,
        location: false
      })
    }, {
      validators: this.customBookingTypeValidation
    });
  }
  customBookingTypeValidation(group) {
    let checked = 0;
    const ticketBooking = group.get('ticketBooking')?.value;
    if (ticketBooking) {
      checked++;
    }
    const rentalBooking = group.get('rentalBooking')?.value;
    if (rentalBooking) {
      checked++;
    }
    const serviceBookingTimeSlots = group.get('serviceBookingTimeSlots')?.value;
    if (serviceBookingTimeSlots) {
      checked++;
    }
    const serviceBookingTimePicker = group.get('serviceBookingTimePicker')?.value;
    if (serviceBookingTimePicker) {
      checked++;
    }
    const productList = group.get('productsList')?.value;
    if (productList) {
      checked++;
    }
    const culturalBooking = group.get('culturalBooking')?.value;
    if (culturalBooking) {
      checked++;
    }
    const applyToJob = group.get('applyToJob')?.value;
    if (applyToJob) {
      checked++;
    }
    const carBooking = group.get('carBooking')?.value;
    if (carBooking) {
      checked++;
    }
    const noBooking = group.get('noBooking')?.value;
    if (noBooking) {
      checked++;
    }
    if (checked === 0) {
      return {
        minimumBooking: true
      };
    } else if (checked > 1) {
      return {
        multipleBooking: true
      };
    }
    return null;
  }
  /** Initialize Data */
  getTemplateData() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(params => {
      if (params.get('id')) {
        this.isEditMode = true;
        return this.templateService.getTemplateById(params.get('id'));
      } else {
        this.isEditMode = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.emptyTemplateData);
      }
    })).subscribe(template => {
      this.templateData = template;
      console.log('TEMPLATE DATA', this.templateData);
      console.log(this.templateData.attributes);
      this.templateForm.patchValue(template);
      console.log('TEMPLATE FORM', this.templateForm.value);
      if (template["benefits"]?.length > 0) {
        this.benefits = template["benefits"];
      }
      this.changeDomain(template["domain"]);
      this.changeResource(template["categoryId"]);
      // Only on EDIT MODE
      if (this.isEditMode) {
        this.remakeFormAttributesArrayForEditMode();
        this.checkResourceTypeForTemplate(template.id);
      } else {
        this.checkResourceTypeForTemplate();
        this.initConfigTabs();
      }
    });
  }
  attributes() {
    return this.templateForm.get('attributes');
  }
  newAttributesTab(tabName) {
    return this.fb.group({
      tabName: tabName,
      tabAttributes: this.fb.array([])
    });
  }
  addAttributeTab(tabName) {
    this.attributes().push(this.newAttributesTab(tabName));
  }
  removeAttributeTab(attrTabIndex) {
    this.attributes().removeAt(attrTabIndex);
  }
  tabAttributes(attrTabIndex) {
    return this.attributes().at(attrTabIndex).get('tabAttributes');
  }
  newTabAttribute(categoryId, categoryName) {
    return this.fb.group({
      categoryName: categoryName,
      categoryId: categoryId,
      categoryAttributes: this.fb.array([])
    });
  }
  addTabAttribute(attrTabIndex, categoryId, categoryName) {
    this.tabAttributes(attrTabIndex).push(this.newTabAttribute(categoryId, categoryName));
  }
  removeTabAttribute(attrTabIndex, tabAttributeIndex) {
    this.tabAttributes(attrTabIndex).removeAt(tabAttributeIndex);
  }
  /** Get Category Attribute*/
  getCategoryAttribute(tabIndex, categoryIndex) {
    return this.tabAttributes(tabIndex).at(categoryIndex).get('categoryAttributes');
  }
  /** Add Category Attribute*/
  addCategoryAttribute(tabIndex, categoryIndex, attributeId, attributeName) {
    this.getCategoryAttribute(tabIndex, categoryIndex).push(this.newCategoryAttribute(attributeId, attributeName));
  }
  /** Create New Category Attribute*/
  newCategoryAttribute(attributeId, attributeName) {
    return this.fb.group({
      id: attributeId,
      name: attributeName
    });
  }
  /** Remove Category Attribute*/
  removeCategoryAttribute(tabIndex, categoryIndex, attributeIndex) {
    return this.getCategoryAttribute(tabIndex, categoryIndex).removeAt(attributeIndex);
  }
  changeTab(event) {
    this.tabIndex = event.index;
  }
  disableCheckBox(event, i) {
    console.log('am ales', event.target.id, i);
    // this.customValue=event;
    // this.showAttributField= this.customValue === 'custom' ? true : false;
    // this.isDisabled=true;
    // this.cdr.detectChanges();
  }

  checkResourceTypeForTemplate(templateId) {
    const resourceTypeIds = this.resourceTypes.map(type => type.id);
    this.templateService.checkResourceTypeForTemplate(resourceTypeIds, templateId || null).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.resourceTypes.forEach(type => {
          this.checkboxDisabledStates = {
            ...this.checkboxDisabledStates,
            [type.id]: false
          };
        });
        if (res && res.length > 0) {
          res.forEach(type => {
            this.checkboxDisabledStates = {
              ...this.checkboxDisabledStates,
              [type.resourceTypeId]: true
            };
          });
          /*const control = this.templateForm.get('resourceTypeIds');
          if (control.enabled && control.value.includes(resTempId)) {
              control.setValue(control.value.filter((id: number) => id !== resTempId));
          }*/
          // this.toastService.showToast("Error", "Există deja un template creat pentru acest tip de resursa!", "error")
        } else if (res.length === 0) {
          console.log(res);
        }
      },
      error: err => {
        console.log('verificam daca exista', err);
      }
    });
  }
  //if for listing settings, the user choose the type of card custom, the field for atribute will show up
  onCustomCardSelect(event) {
    console.log('am ales', event);
    this.customValue = event;
    this.showAttributField = this.customValue === 'custom' ? true : false;
    this.cdr.detectChanges();
  }
  clearFormControl(formControl) {
    this.templateForm.get(formControl).patchValue(null);
  }
  /** Submit Form*/
  submitForm() {
    // Mark form as touched
    this.templateForm.markAllAsTouched();
    // Check if the form is valid
    if (this.templateForm.valid) {
      if (this.templateForm.value.menuItems) {
        this.templateForm.controls.bookingType.setValue('menu');
      }
      if (this.templateForm.value.externalUrl) {
        this.templateForm.controls.bookingType.setValue('externalUrl');
      }
      if (this.templateForm.value.applyToJob) {
        this.templateForm.controls.bookingType.setValue('applyToJob');
      }
      if (this.templateForm.value.serviceBookingTimeSlots) {
        this.templateForm.controls.bookingType.setValue('serviceBookingTimeSlots');
      }
      if (this.templateForm.value.rentalBooking) {
        this.templateForm.controls.bookingType.setValue('rentalBooking');
      }
      if (this.templateForm.value.serviceBookingTimePicker) {
        this.templateForm.controls.bookingType.setValue('menu');
      }
      if (this.templateForm.value.ticketBooking) {
        this.templateForm.controls.bookingType.setValue('ticketBooking');
      }
      if (this.templateForm.value.productsList) {
        this.templateForm.controls.bookingType.setValue('productsList');
      }
      if (this.templateForm.value.culturalBooking) {
        this.templateForm.controls.bookingType.setValue('culturalBooking');
      }
      if (this.templateForm.value.carBooking) {
        this.templateForm.controls.bookingType.setValue('carBooking');
      }
      if (this.templateForm.value.noBooking) {
        this.templateForm.controls.bookingType.setValue('noBooking');
      }
      // Check if you are on editMode
      if (!this.isEditMode) {
        // Create new template
        this.addTemplate();
      } else {
        // Edit template
        this.editTemplate();
      }
    } else {
      console.log(this.templateForm);
    }
  }
  addTemplate() {
    console.log('ADAUGARE TEMPLATE', this.templateForm.value);
    // Request Data
    const requestData = {
      ...this.templateForm.value,
      attributes: this.convertAttributes()
    };
    // Add Template
    this.templateService.addTemplate(requestData).subscribe({
      next: res => {
        console.log(res);
        if (res.success) {
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.TEMPLATE.ADD-SUCCESS"), "success");
          // TODO uncomment this line to redirect you to the list page
          this.router.navigate(['../list'], {
            relativeTo: this.route
          });
        }
      },
      error: error => {
        console.log('EROARE', error);
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.TEMPLATE.ADD-ERROR"), "error");
      }
    });
  }
  editTemplate() {
    console.log('EDIT TEMPLATE', this.templateForm.value);
    const formToSubmit = {
      ...this.templateForm.value,
      benefits: this.benefits,
      attributes: this.convertAttributes()
    };
    this.templateService.updateTemplate(this.templateData["id"], formToSubmit).subscribe({
      next: resp => {
        console.log('DUPA UPDATE', resp);
        if (resp.success) {
          this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.TEMPLATE.UPDATE-SUCCESS"), "success");
          // TODO Activeaza zilina de mai jos cand ia terminat aici
          this.router.navigate(['../../list'], {
            relativeTo: this.route
          });
        }
      },
      error: error => {
        if (error.error.reason === "alreadyExistsFromThisDomain") {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.TEMPLATE.UPDATE-EXISTS"), "error");
        } else {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.TEMPLATE.UPDATE-ERROR"), "error");
        }
      }
    });
  }
  changeDomain(domain) {
    this.resourcesByDomain = [];
    this.resTypesByResource = [];
    this.resourcesService.getResourceByDomain(domain).subscribe(resources => {
      this.resourcesByDomain = resources;
    });
  }
  changeResource(resource) {
    this.resTypesByResource = [];
    this.resourcesService.getAllResourceTypesByResourceCategory(resource).subscribe(resTypes => {
      this.resTypesByResource = resTypes;
    });
  }
  /** Get Categories List*/
  getAttributeCategories() {
    this.templateService.getCategoryList(0, -1, "name", "cresc", {}).subscribe(list => {
      this.attributeCategoryList = list.content.map(data => {
        return {
          categoryId: data.id,
          categoryName: data.name
        };
      });
      console.log('CATEGORII', this.attributeCategoryList);
    });
  }
  selectAll() {
    console.log(this.templateForm.value.categoryId);
  }
  check(isChecked, value, name, tabIndex) {
    console.log(isChecked + ' si ' + value);
    if (isChecked) {
      this.categoriesList.push({
        id: value,
        categoryName: name,
        tabIndex: tabIndex
      });
      console.log('dupa check', this.categoriesList);
    } else {
      let filteredArray = this.categoriesList.filter(e => e.id !== value);
      console.log('uncheck', filteredArray);
      this.categoriesList = filteredArray;
    }
  }
  /** Add Selected Categories*/
  confirmCategories() {
    console.log('VERIFY CATEG SELECTED', this.selectedCategories);
    // Select form attributes array by the index
    let getTabAttributesByIndex = this.templateForm.value.attributes[this.attributeCheckIndex].tabAttributes;
    // // Loop through the form value attributes
    getTabAttributesByIndex.forEach(itemCategory => {
      if (this.selectedCategories.find(item => item.categoryId === itemCategory.categoryId)) {
        console.log('FIND', this.selectedCategories.find(item => item.categoryId === itemCategory.categoryId));
        this.selectedCategories = this.selectedCategories.filter(e => e.categoryId !== itemCategory.categoryId);
        console.log('CONST', getTabAttributesByIndex);
      } else {
        // Index of the attribute
        const attrToRemoveIndex = this.templateForm.value.attributes[this.attributeCheckIndex].tabAttributes.findIndex(e => e.categoryId === itemCategory.categoryId);
        // Remove the attribute by the index from the FORM values
        this.removeTabAttribute(this.attributeCheckIndex, attrToRemoveIndex);
      }
      // Check if the itemCategory exist in the selectedCategories
      // if (this.selectedCategories.findIndex(item => item === itemCategory.categoryId) === -1) {
      // Index of the attribute
      // const attrToRemoveIndex = this.templateForm.value.attributes[this.attributeCheckIndex].tabAttributes.findIndex(e => e.categoryId === itemCategory.categoryId);
      // Remove the attribute by the index from the FORM values
      // this.removeTabAttribute(this.attributeCheckIndex, attrToRemoveIndex);
      // }
    });
    // Loop through the selectedCategories
    this.selectedCategories.forEach(category => {
      // Check If category ID doesn't exist in the form values
      if (this.templateForm.value.attributes[this.attributeCheckIndex].tabAttributes.findIndex(item => item.categoryId === category) === -1) {
        // Add the category ID to the form
        this.addTabAttribute(this.attributeCheckIndex, category.categoryId, category.categoryName);
      }
    });
    this.modalService.closeAll();
  }
  /** Verify if you have any selected attributes in the opened tab*/
  verifyTabCategories(attrTabIndex) {
    // Empty the selected Array
    this.selectedCategories = [];
    // Store the tab index
    this.attributeCheckIndex = attrTabIndex;
    // If the selected TAB have selected categories
    // and add them to selectedCategories array
    if (this.templateForm.value.attributes[attrTabIndex].tabAttributes.length > 0) {
      // Add form value in selectedCategories
      this.templateForm.value.attributes[attrTabIndex].tabAttributes.forEach(item => {
        // Add category from FORM value to selectedCategories
        this.selectedCategories.push({
          categoryId: item.categoryId,
          categoryName: item.categoryName
        });
      });
    }
  }
  /** Add Selected Attributes*/
  confirmAttributes(categoryId) {
    console.log('CATEG ID', categoryId);
    console.log('VERIFY - SELECTED ATTR', this.selectedAttributes);
    // Category Index
    let categoryIndex = this.templateForm.value.attributes[this.tabIndex].tabAttributes.findIndex(item => item.categoryId === categoryId);
    // #START - Remove Category Attributes - Functionality
    // Get Category Attributes
    let categoryFormAttributes = this.getCategoryAttribute(this.tabIndex, categoryIndex).value;
    // Loop through the form value attributes
    categoryFormAttributes.forEach(attribute => {
      // Check if the attribute exist in the selectedAttributes
      if (!this.selectedAttributes.includes(attribute.id)) {
        // Index of the attribute from the original array
        let attrToRemoveIndex = this.getCategoryAttribute(this.tabIndex, categoryIndex).value.indexOf(attribute.id);
        // Remove Attribute
        this.removeCategoryAttribute(this.tabIndex, categoryIndex, attrToRemoveIndex);
      }
    });
    // #START - Add Category Attributes - Functionality
    // Loop through the selectedAttr
    this.selectedAttributes.forEach(attribute => {
      // Check if the attribute exist in the form value
      if (this.templateForm.value.attributes[this.tabIndex].tabAttributes[categoryIndex].categoryAttributes?.findIndex(item => item === attribute.id) === -1) {
        // Add new attribute
        this.addCategoryAttribute(this.tabIndex, categoryIndex, attribute.id, attribute.name);
      }
    });
    this.modalService.closeAll();
  }
  /** Verify if you have any selected attributes in the opened tab*/
  verifyCategAttr(categoryId, tabIndex) {
    // Empty the selectedAttr
    this.selectedAttributes = [];
    // Get the attributesList by the categoryId
    this.templateService.listAttributesFiltered(0, -1, null, null, null, {
      categoryId: categoryId
    }).subscribe(response => {
      this.attributesList = response.content.map(data => {
        return {
          id: data.id,
          name: data.name
        };
      });
    });
    // Populate the selected input with the form values
    this.selectedAttributes = this.templateForm.value.attributes[tabIndex].tabAttributes.find(catId => catId.categoryId === categoryId).categoryAttributes;
  }
  /** Get Categories & Attribute Names for Edit Mode */
  remakeFormAttributesArrayForEditMode() {
    let allCategoriesId = [];
    let allAttributesId = [];
    if (this.templateData.attributes.length === 0) {
      this.initConfigTabs();
    } else {
      this.templateData.attributes.forEach((tab, index, array) => {
        // Get all categories IDs
        tab.tabAttributes.forEach(category => {
          allCategoriesId.push(category.categoryId);
          // Get all attributes IDs
          category.categoryAttributes.forEach(attributeId => {
            allAttributesId.push(attributeId);
          });
        });
        // Last array loop
        if (index === array.length - 1) {
          (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([this.resourcesService.getAttributeCategories(allCategoriesId), this.resourcesService.getAttributes(allAttributesId)]).subscribe({
            next: data => {
              // Request Data
              let categories = data[0];
              let attributes = data[1];
              // Remake the attributes array
              this.templateData = {
                ...this.templateData,
                attributes: this.templateData.attributes.map(attributeObject => {
                  return {
                    // Store the atribute Object as it is
                    ...attributeObject,
                    // Map through the array and modify it as you like
                    tabAttributes: attributeObject.tabAttributes.map(tabAttribute => {
                      // Find the specific attribute by the ID
                      const findCategory = categories.find(data => data.id === tabAttribute.categoryId);
                      console.log('find categ', findCategory);
                      if (findCategory) {
                        // Return object with the combined data
                        return {
                          categoryName: findCategory.name,
                          categoryId: tabAttribute.categoryId,
                          categoryAttributes: tabAttribute.categoryAttributes.map(atribute => {
                            const findAttribute = attributes.find(data => data.id === atribute);
                            return {
                              id: atribute,
                              name: findAttribute?.name
                            };
                          })
                        };
                      }
                    })
                  };
                })
              };
              // Recreate atribute for FORM data
              this.attributesOnEdit();
            }
          });
        }
      });
    }
  }
  /** Update Attributes Form Values for Edit Mode */
  attributesOnEdit() {
    // Loop through the attributes data that we fetched from the GET request
    for (const attribute of this.templateData.attributes) {
      // Create a new FormArray for the tabAttributes field
      const tabAttributes = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]);
      // Then loop through the tabAttributes data to create a new FormGroup for each element
      for (const tabAttribute of attribute.tabAttributes) {
        if (tabAttribute) {
          // Create a new FormArray for the categoryAttributes field
          const categoryAttributes = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]);
          // Then loop through the categoryAttributes data and populate it with FormControl objects for each value in the categoryAttributes array
          for (const categoryAttribute of tabAttribute.categoryAttributes) {
            categoryAttributes.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
              id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(categoryAttribute.id),
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(categoryAttribute.name)
            }));
          }
          // We push the new FormGroup object for the tabAttribute object to the tabAttributes FormArray,
          // and repeat the process for each tabAttribute in the attribute.
          tabAttributes.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(tabAttribute.categoryId),
            categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(tabAttribute.categoryName),
            categoryAttributes
          }));
        }
      }
      // Once we have finished looping through all the attributes,
      // we push the new FormGroup object for the attribute object to the attributes FormArray in the new FormGroup object we created earlier
      this.templateForm.get('attributes').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
        tabName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(attribute.tabName),
        tabAttributes
      }));
    }
    // Finally, we set the value of the original form to the value of the new FormGroup object we just created,
    // which populates the form with the data from the GET request:
    this.templateForm.setValue(this.templateForm.value);
  }
  /** Multiple Select */
  compareSelectedCategoriesObjects(o1, o2) {
    return o1.categoryName === o2.categoryName && o1.categoryId === o2.categoryId;
  }
  compareSelectedAttributesObjects(o1, o2) {
    return o1.name === o2.name && o1.id === o2.id;
  }
  /** Convert Tab Categories/Attributes*/
  convertAttributes() {
    // Remove the Name for Category && Atribute
    return this.templateForm.value.attributes.map(tab => {
      let tabAttributes = tab.tabAttributes.map(category => {
        let categoryAttributes = category.categoryAttributes.map(attr => attr.id);
        return {
          categoryId: category.categoryId,
          categoryAttributes
        };
      });
      return {
        tabName: tab.tabName,
        tabAttributes
      };
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
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }, {
    type: _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_3__.TemplatesService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef
  }];
  static #_2 = this.propDecorators = {
    benefitInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
      args: ['benefitInput']
    }]
  };
};
AddEditTemplateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-add-edit-template',
  template: _add_edit_template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_add_edit_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddEditTemplateComponent);


/***/ }),

/***/ 9948:
/*!******************************************************************************************!*\
  !*** ./src/app/features/resource-templates/prop-categories/prop-categories.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropCategoriesComponent": () => (/* binding */ PropCategoriesComponent)
/* harmony export */ });
/* harmony import */ var _Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _prop_categories_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prop-categories.component.html?ngResource */ 14614);
/* harmony import */ var _prop_categories_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prop-categories.component.scss?ngResource */ 49528);
/* harmony import */ var _prop_categories_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prop_categories_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/templates.service */ 71453);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/modalmedia.service */ 34864);












let PropCategoriesComponent = class PropCategoriesComponent {
  constructor(modalService, fb, templateService, toastService, translate, modalMediaService, cdr) {
    this.modalService = modalService;
    this.fb = fb;
    this.templateService = templateService;
    this.toastService = toastService;
    this.translate = translate;
    this.modalMediaService = modalMediaService;
    this.cdr = cdr;
    // Mat Table - Filter Forms
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.displayedColumns = ['icon', 'name', 'actions'];
    this.dataSource = [];
    this.myDataSource = [];
    this.pageSizeArray = [10, 25, 100];
    this.sorting = 'name';
    this.dir = 'desc';
  }
  ngOnInit() {
    this.pageNumber = 1;
    this.pageSize = 10;
    this.formInit();
    this.listAttributeCategories();
    this.getImage();
  }
  formInit() {
    this.categoryForm = this.fb.group({
      id: [null],
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      zone: [null],
      description: [null],
      icon: this.fb.group({
        fileName: [null],
        filePath: [null]
      })
    });
  }
  onSaveClick() {
    this.categoryForm.markAllAsTouched();
    if (this.categoryForm.valid) {
      const formToSend = {
        name: this.categoryForm.value.name,
        description: this.categoryForm.value.description,
        zone: this.categoryForm.value.zone
        // icon: {
        //     fileName: this.icon.fileName,
        //     filePath: ''
        // }
      };

      if (this.categoryForm.value.id !== null) {
        console.log('EDIT');
        console.log(this.categoryForm.value);
        this.templateService.updateAttributeCategory(this.categoryForm.value.id, this.categoryForm.value).subscribe(update => {
          console.log('UPDATE', update);
          if (update.success) {
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), "Categoria a fost modificată!", "success");
            this.listAttributeCategories();
            this.formInit();
          }
        });
      } else {
        console.log('ADD');
        this.templateService.addAttributeCategory(this.categoryForm.value).subscribe(add => {
          if (add.success) {
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), "Categoria a fost adăugată!", "success");
            this.listAttributeCategories();
            this.formInit();
          }
        });
      }
    }
  }
  removeIcon() {
    this.categoryForm.get('icon').setValue({
      filePath: null,
      fileName: null
    });
  }
  listAttributeCategories() {
    this.templateService.getCategoryList(this.pageNumber - 1, this.pageSize, this.sorting, this.dir, {}).subscribe(res => {
      this.paginationInfo = res;
      this.dataSource = res["content"];
      console.log('CONTENT', this.dataSource);
    });
  }
  pageChanged(event) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.templateService.getCategoryList(this.pageNumber - 1, this.pageSize, this.sorting, this.dir, {}).subscribe(res => {
      console.log('ATTRIBUTES', res);
      this.paginationInfo = res;
      this.dataSource = res["content"];
    });
  }
  searchCategory() {
    this.pageNumber = 1;
    const filters = {
      name: this.searchFilter.value !== '' ? this.searchFilter.value : null
    };
    this.templateService.getCategoryList(this.pageNumber - 1, this.pageSize, this.sorting, this.dir, filters).subscribe(res => {
      this.paginationInfo = res;
      this.dataSource = res["content"];
      this.matPaginator.firstPage();
      console.log('CONTENT', this.dataSource);
    });
  }
  onEditClick(id) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.templateService.getAttributeCategoryById(id).subscribe(category => {
      console.log('MERGE EDIT', category);
      this.categoryForm.patchValue(category);
      this.categoryForm.value.id = id;
    });
  }
  getImage() {
    var _this = this;
    this.modalMediaService.currentImagesArray.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (array) {
        if (array.length > 0) {
          if (array[0].for === 'attr-categ-icon') {
            _this.categoryForm.get('icon').patchValue(array[0].selectedMedia);
            console.log('am adus img');
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  deleteAttributeCategory(id) {
    console.log(id);
    this.templateService.deleteAttributeCategory(id).subscribe(res => {
      if (res.success) {
        this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), "Categoria a fost ștearsă!", "success");
        this.listAttributeCategories();
        this.formInit();
        this.modalService.dismissAll();
      }
    });
  }
  openModal(templateRef) {
    this.modalService.open(templateRef, {
      centered: true
    });
  }
  clearFormControl(formControl) {
    this.categoryForm.get(formControl).patchValue(null);
  }
  // uploadAvatar(event){
  //   this.imgName= null;
  //   const reader = new FileReader();
  //   const file:File=event.target.files[0];
  //   console.log('event',file);
  //   if(file){
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     reader.readAsDataURL(file);
  //
  //     reader.onload = () => {
  //
  //       this.imgPath = reader.result as string;
  //       this.imgName = file.name;
  //     };
  //
  //
  //     // console.log(formData);
  //   //   this.userData.uploadAvatar(formData).subscribe((res: {reason: string, success: true})=>{
  //   //         if(res.success===true){
  //   //           this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"),this.translate.instant("TOAST.UPLOAD-AVATAR.SUCCESS"),"success");
  //   //         }else{
  //   //           this.toastService.showToast(this.translate.instant("TOAST.ERROR"),this.translate.instant("TOAST.UPLOAD-AVATAR.ERROR"),"error")
  //   //         }
  //   //       },
  //   //       () => {this.imgPath=this.oldImage;})
  //   } else if(file=== undefined){
  //     this.imgName = '';
  //   }
  //
  // }
  // uploadAvatar(event) {
  //     if (event.target.files && event.target.files[0]) {
  //         this.icon.fileName = event.target.files[0].name;
  //         this.iconFile = event.target.files[0];
  //
  //         const reader = new FileReader();
  //         reader.onload = () => this.icon.filePath = reader.result;
  //         reader.readAsDataURL(this.iconFile);
  //     }
  //
  //     console.log('POZICA', this.icon);
  // }
  openMedia(content) {
    this.modalMediaService.sendImagesToService([this.categoryForm.value.image]);
    this.modalService.open(content, {
      centered: true,
      size: 'xl'
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_3__.TemplatesService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }, {
    type: _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_5__.ModalMediaService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
  }];
  static #_2 = this.propDecorators = {
    matPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: ['matPaginator']
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort]
    }]
  };
};
PropCategoriesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-prop-categories',
  template: _prop_categories_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_5__.ModalMediaService],
  styles: [(_prop_categories_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PropCategoriesComponent);


/***/ }),

/***/ 11998:
/*!********************************************************************************!*\
  !*** ./src/app/features/resource-templates/properties/properties.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesComponent": () => (/* binding */ PropertiesComponent)
/* harmony export */ });
/* harmony import */ var _Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.component.html?ngResource */ 93966);
/* harmony import */ var _properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties.component.scss?ngResource */ 71595);
/* harmony import */ var _properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/templates.service */ 71453);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/modalmedia.service */ 34864);














let PropertiesComponent = class PropertiesComponent {
  constructor(fb, modalService, templatesService, translate, toastService, modalMediaService, cdr) {
    this.fb = fb;
    this.modalService = modalService;
    this.templatesService = templatesService;
    this.translate = translate;
    this.toastService = toastService;
    this.modalMediaService = modalMediaService;
    this.cdr = cdr;
    this.categList = [];
    this.maxOrderByCategory = [];
    // Mat Table - Filter Forms
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.displayedColumns = ['id', 'icon', 'alias', 'valueType', 'visibleInList', 'category', 'actions'];
    this.dataSource = [];
    this.myDataSource = [];
    // initial filter numbers
    this.pageNumber = 0;
    // pageSize: number;
    this.pageSize = 10;
    this.pageSizeArray = [10, 25, 100];
    this.sorting = 'categoryId';
    this.sort2 = 'order';
    this.dir = 'asc';
    // Material Chips
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.COMMA];
    this.optionCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.options = [];
    this.allOptions = [];
    this.filteredOptions = this.optionCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(fruit => fruit ? this._filter(fruit) : this.allOptions.slice()));
  }
  ngOnInit() {
    this.pageNumber = 1;
    // this.pageSize = 5;
    this.formInit();
    this.listAttributes();
    this.getAllCategories();
    this.getResourceTypes();
    this.imgPath = "./assets/images/others/icon.png";
    this.getIcon();
  }
  getIcon() {
    var _this = this;
    this.modalMediaService.currentImagesArray.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (array) {
        if (array.length > 0) {
          if (array[0].for === 'attr-icon') {
            _this.propertiesForm.get('icon').patchValue(array[0].selectedMedia);
            _this.imgPath = array[0].selectedMedia.filePath;
            _this.cdr.detectChanges();
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  formInit() {
    this.imgPath = "./assets/images/others/icon.png";
    this.options = [];
    this.propertiesForm = this.fb.group({
      id: [null],
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      alias: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      categoryId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      description: [null],
      valueType: ['text', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      order: [null],
      offset: [null],
      size: [null],
      valuePlaceholder: [null],
      visibleInList: [null],
      visibleInForm: true,
      propertyRequired: [null],
      uniqueValue: [null],
      icon: this.fb.group({
        fileName: [null],
        filePath: [null]
      }),
      valueOptions: [],
      // featured: [null],
      usedInFiltering: true,
      resourceTypeIds: [],
      enrollment: true
    });
  }
  display(event) {
    this.resourceTypesToSend = event.value;
    console.log(this.propertiesForm.value.resourceTypeIds);
  }
  getAllCategories() {
    this.templatesService.getCategoryList(0, -1, this.sorting, this.dir, {}).subscribe(categories => {
      // console.log('CATEGORII', categories);
      this.categories = categories["content"];
    });
  }
  getMaxOrderByCategory() {
    this.templatesService.getCategoryList(0, -1, this.sorting, this.dir, {}).subscribe(categories => {
      // console.log('CATEGORII', categories);
      categories["content"].forEach(categ => {
        this.templatesService.getMaxOrderByCategory(categ.id).subscribe(order => {
          this.maxOrderByCategory.push({
            categoryId: categ.id,
            maxOrder: Number(order.reason)
          });
        });
      });
    });
  }
  listAttributes() {
    this.getMaxOrderByCategory();
    this.loaded = false;
    this.categList = [];
    // this.maxOrderByCategory=[];
    this.listOfObservables$ = [];
    this.templatesService.listAttributesFiltered(this.pageNumber - 1, this.pageSize, this.sorting, this.sort2, this.dir, {}).subscribe(attributes => {
      this.paginationInfo = attributes;
      attributes["content"].forEach(attribute => {
        this.categList.push({
          id: attribute.id,
          alias: attribute.alias,
          icon: attribute.icon,
          categoryId: attribute.categoryId,
          categoryName: '',
          valueType: attribute.valueType,
          visibleInList: attribute.visibleInList,
          order: attribute.order,
          maxOrderCategory: 0
        });
        this.listOfObservables$.push(this.templatesService.getAttributeCategoryById(attribute.categoryId));
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(this.listOfObservables$).subscribe(res => {
        // console.log('OBS',res);
        res.forEach((category, index) => {
          this.categList[index].categoryName = category?.name;
          this.maxOrderByCategory.forEach(categoryMaxOrder => {
            if (this.categList[index].categoryId === categoryMaxOrder.categoryId) {
              this.categList[index].maxOrderCategory = categoryMaxOrder.maxOrder;
            }
          });
        });
        this.loaded = true;
        // console.log('categ list cu maxorder', this.categList);
        // console.log('maxOrderByCategory ce e asta?',this.maxOrderByCategory);
      });

      this.dataSource = attributes["content"];
    });
  }
  pageChanged(event) {
    this.getMaxOrderByCategory();
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    const filters = {
      name: this.searchFilter.value !== '' ? this.searchFilter.value : null
    };
    this.loaded = false;
    this.categList = [];
    this.listOfObservables$ = [];
    this.templatesService.listAttributesFiltered(this.pageNumber - 1, this.pageSize, this.sorting, this.sort2, this.dir, filters).subscribe(attributes => {
      this.paginationInfo = attributes;
      attributes["content"].forEach(attribute => {
        this.categList.push({
          id: attribute.id,
          alias: attribute.alias,
          icon: attribute.icon,
          categoryId: attribute.categoryId,
          categoryName: '',
          valueType: attribute.valueType,
          visibleInList: attribute.visibleInList,
          order: attribute.order,
          maxOrderCategory: 0
        });
        this.listOfObservables$.push(this.templatesService.getAttributeCategoryById(attribute.categoryId));
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(this.listOfObservables$).subscribe(res => {
        // console.log('OBS',res);
        res.forEach((category, index) => {
          this.categList[index].categoryName = category?.name;
          this.maxOrderByCategory.forEach(categoryMaxOrder => {
            if (this.categList[index].categoryId === categoryMaxOrder.categoryId) {
              this.categList[index].maxOrderCategory = categoryMaxOrder.maxOrder;
            }
          });
        });
        this.loaded = true;
        console.log('categ list cu maxorder', this.categList);
      });
      this.dataSource = attributes["content"];
    });
  }
  searchProperties() {
    this.loaded = false;
    this.categList = [];
    this.listOfObservables$ = [];
    this.pageNumber = 1;
    this.getMaxOrderByCategory();
    const filters = {
      name: this.searchFilter.value !== '' ? this.searchFilter.value : null
    };
    this.templatesService.listAttributesFiltered(this.pageNumber - 1, this.pageSize, this.sorting, this.sort2, this.dir, filters).subscribe(attributes => {
      this.paginationInfo = attributes;
      this.dataSource = attributes["content"];
      console.log('FILTER', attributes);
      if (this.dataSource.length === 0) {
        console.log('gol');
        this.loaded = true;
      } else {
        attributes["content"].forEach(attribute => {
          this.categList.push({
            id: attribute.id,
            alias: attribute.alias,
            icon: attribute.icon,
            categoryId: attribute.categoryId,
            categoryName: '',
            valueType: attribute.valueType,
            visibleInList: attribute.visibleInList,
            order: attribute.order,
            maxOrderCategory: 0
          });
          this.listOfObservables$.push(this.templatesService.getAttributeCategoryById(attribute.categoryId));
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(this.listOfObservables$).subscribe(res => {
          // console.log('OBS',res);
          res.forEach((category, index) => {
            this.categList[index].categoryName = category.name;
            this.maxOrderByCategory.forEach(categoryMaxOrder => {
              if (this.categList[index].categoryId === categoryMaxOrder.categoryId) {
                this.categList[index].maxOrderCategory = categoryMaxOrder.maxOrder;
              }
            });
          });
          this.loaded = true;
          console.log('categ list cu maxorder', this.categList);
        });
      }
    });
  }
  clearFormControl(formControl) {
    this.propertiesForm.get(formControl).patchValue(null);
  }
  openModal(templateRef) {
    this.modalService.open(templateRef, {
      centered: true
    });
  }
  onSaveClick() {
    this.propertiesForm.markAllAsTouched();
    if (this.propertiesForm.valid) {
      if (this.propertiesForm.value.id !== null) {
        this.propertiesForm.get('valueOptions').setValue(this.options);
        // const formToSubmit = {
        //     ...this.attribute,
        //     ...this.propertiesForm.value
        // };
        this.templatesService.updateAttribute(this.propertiesForm.value.id, this.propertiesForm.value).subscribe(update => {
          // console.log("DUPA UPDATE", update);
          if (update.success) {
            this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), "Proprietatea a fost editata!", "success");
            this.listAttributes();
            this.formInit();
          }
        }, error => {
          if (error.error.message === "notUnique") {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Aceasta proprietate exista deja!", "error");
          } else if (error.error.message === "notLoggedIn" || error.error.message === "tokenExpired") {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Trebue sa fii logat pentru aceasta actiune!", "error");
          } else if (error.error.message === "orderNotUniqueForCategory") {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Există deja un atribut cu același număr de ordine!", "error");
          } else {
            this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
          }
        });
      } else {
        this.templatesService.getMaxOrderByCategory(this.propertiesForm.value.categoryId).subscribe(maxOrder => {
          this.propertiesForm.get('valueOptions').setValue(this.options);
          this.propertiesForm.get('order').setValue(Number(maxOrder.reason) + 1);
          this.templatesService.addAttribute(this.propertiesForm.value).subscribe(add => {
            // console.log('DUPA ADD', add);
            if (add.success) {
              this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), "Proprietatea a fost adaugata!", "success");
              this.listAttributes();
              this.formInit();
            }
          }, error => {
            if (error.error.message === "notUnique") {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Aceasta proprietate exista deja!", "error");
            } else if (error.error.message === "notLoggedIn" || error.error.message === "tokenExpired") {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), "Trebue sa fii logat pentru aceasta actiune!", "error");
            } else {
              this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
            }
          });
        });
      }
    }
  }
  onEditClick(id) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.templatesService.getAttributeById(id).subscribe(attribute => {
      console.log('MERGE EDIT', attribute);
      this.attribute = attribute;
      this.propertiesForm.patchValue(attribute);
      this.propertiesForm.value.id = id;
      this.options = attribute.valueOptions;
      this.imgPath = attribute.icon.filePath ? attribute.icon.filePath : "./assets/images/others/icon.png";
    });
  }
  getResourceTypes() {
    this.templatesService.getResourceTypes().subscribe(res => {
      console.log(res);
      this.resourceTypes = res.sort((a, b) => a["nameRo"].localeCompare(b["nameRo"]));
      console.log('res types', this.resourceTypes);
    });
  }
  deleteAttribute(id) {
    this.templatesService.deleteAttribute(id).subscribe(del => {
      console.log(del);
      if (del.success) {
        this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), "Proprietatea a fost stearsa!", "success");
        this.modalService.dismissAll();
        this.listAttributes();
      }
    }, () => {
      this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
    });
  }
  decrementOrder(order, id) {
    console.log("order si id la decrement", order, id);
    if (order > 0) {
      const newOrder = order - 1;
      this.templatesService.changeAttributeOrder(id, newOrder).subscribe(dec => {
        console.log(dec);
        this.listAttributes();
      });
    }
  }
  incrementOrder(categoryId, order, attributeId) {
    console.log('id categorie: ' + categoryId + ' order: ' + order + ' attributeId ' + attributeId);
    this.listAttributes();
    this.templatesService.getMaxOrderByCategory(categoryId).subscribe(maxOrder => {
      if (order < Number(maxOrder.reason)) {
        const newOrder = order + 1;
        this.templatesService.changeAttributeOrder(attributeId, newOrder).subscribe(res => {
          this.listAttributes();
        });
      }
    });
  }
  removeOption(option) {
    const index = this.options.indexOf(option);
    if (index >= 0) {
      this.options.splice(index, 1);
    }
  }
  addOption(event) {
    const value = (event.value || '').trim();
    // Add our benefit
    if (value) {
      this.options.push(value);
    }
    // Clear the input value
    event.chipInput.clear();
    this.optionCtrl.setValue(null);
  }
  editOption(option, event) {
    const value = event.value.trim();
    // Remove fruit if it no longer has a name
    if (!value) {
      this.removeOption(option);
      return;
    }
    // Edit existing fruit
    const index = this.options.indexOf(option);
    if (index >= 0) {
      this.options[index] = value;
    }
  }
  _filter(value) {
    const filterValue = value.toLowerCase();
    return this.allOptions.filter(benefit => benefit.toLowerCase().includes(filterValue));
  }
  // uploadAvatar(event){
  //     const reader = new FileReader();
  //     const file:File=event.target.files[0];
  //     //console.log('event',file);
  //     if(file){
  //         const formData = new FormData();
  //         formData.append("file", file);
  //         reader.readAsDataURL(file);
  //
  //         reader.onload = () => {
  //
  //             this.imgPath = reader.result as string;
  //         };
  //     }
  // }
  deleteIcon() {
    this.imgPath = "./assets/images/others/icon.png";
    this.propertiesForm.get('icon').setValue({
      fileName: null,
      filePath: null
    });
  }
  openMedia(content) {
    this.modalMediaService.sendImagesToService([this.propertiesForm.value.icon]);
    this.modalService.open(content, {
      centered: true,
      size: 'xl'
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal
  }, {
    type: _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_3__.TemplatesService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_5__.ModalMediaService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef
  }];
};
PropertiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-properties',
  template: _properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_shared_services_modalmedia_service__WEBPACK_IMPORTED_MODULE_5__.ModalMediaService],
  styles: [(_properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PropertiesComponent);


/***/ }),

/***/ 38125:
/*!****************************************************************************************!*\
  !*** ./src/app/features/resource-templates/templates-list/templates-list.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesListComponent": () => (/* binding */ TemplatesListComponent)
/* harmony export */ });
/* harmony import */ var _Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _templates_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates-list.component.html?ngResource */ 33177);
/* harmony import */ var _templates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates-list.component.scss?ngResource */ 90141);
/* harmony import */ var _templates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_templates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/templates.service */ 71453);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);











let TemplatesListComponent = class TemplatesListComponent {
  constructor(modalService, toastService, templateService, cdr, translate, userDataService) {
    this.modalService = modalService;
    this.toastService = toastService;
    this.templateService = templateService;
    this.cdr = cdr;
    this.translate = translate;
    this.userDataService = userDataService;
    // Mat Table - Filter Forms
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.displayedColumns = ['title', 'resType', 'actions'];
    this.dataSource = [];
    this.myDataSource = [];
    this.pageSizeArray = [10, 25, 100];
    this.sorting = 'name';
    this.dir = 'desc';
    this.objectCache = {};
  }
  ngOnInit() {
    this.pageNumber = 1;
    this.pageSize = 10;
    this.loadTemplates();
    this.cdr.detectChanges();
  }
  openModal(templateRef, userId) {
    this.userDataService.getUserById(userId).subscribe(data => {
      this.userData = data;
      console.log('user', data);
    });
    this.modalService.open(templateRef, {
      centered: true
    });
  }
  searchTemplate() {
    this.loadTemplates();
  }
  deleteTemplates(id) {
    this.templateService.deleteTemplate(id).subscribe(res => {
      console.log('DEL', res);
      if (res.success) {
        this.toastService.showToast(this.translate.instant("TOAST.SUCCESS"), this.translate.instant("TOAST.TEMPLATE.DELETE-SUCCESS"), "success");
      }
      this.modalService.dismissAll();
      this.loadTemplates();
    }, error => {
      console.log('EROARE', error);
      if (error.error.reason) {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), 'Șablonul nu poate fi șters dacă a fost atribuit unei resurse existente.', "error");
      } else {
        this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.TEMPLATE.DELETE-ERROR"), "error");
      }
      this.modalService.dismissAll();
    });
  }
  // Define a function to get the object name from the cache or fetch it from the API
  getObjectNames(ids) {
    var _this = this;
    return (0,_Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const names = [];
      console.log('IDS GIVEN', ids);
      for (const id of ids) {
        if (_this.objectCache[id]) {
          // If the object is already in the cache, add its name to the array
          names.push(_this.objectCache[id].nameRo);
        } else {
          // If the object is not in the cache, fetch it from the API
          const response = yield _this.templateService.getResourceTypeById(id).toPromise();
          console.log('OBJECT RESPONSE', response);
          const object = response;
          console.log('OBJECT', object);
          // Store the object in the cache
          if (object !== null) {
            _this.objectCache[id] = object;
            // Add the object's name to the array
            names.push(object.nameRo);
            console.log('NAMES', names);
          }
        }
      }
      return names;
    })();
  }
  loadTemplates() {
    var _this2 = this;
    return (0,_Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this2.templateService.listResourceTemplateFiltered(_this2.pageNumber - 1, _this2.pageSize, _this2.sorting, _this2.dir, {
        name: _this2.searchFilter.value
      }).toPromise();
      const data = response;
      for (const template of data.content) {
        console.log('TEMPLATE', template);
        // Get the object names and join them into a single string
        if (template.resourceTypeIds?.length > 0) {
          console.log('avem resourceTypesIds');
          const objectNames = yield _this2.getObjectNames(template.resourceTypeIds);
          template.objectNames = objectNames.join(', ');
        }
      }
      _this2.templates = data.content;
      _this2.totalElements = data.totalElements;
      console.log('TEMPLATEURI', _this2.templates);
    })();
  }
  pageChanged(event) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadTemplates();
  }
  clearFilter() {
    this.searchFilter.patchValue('');
    this.searchTemplate();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_4__.TemplatesService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService
  }];
};
TemplatesListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-templates-list',
  template: _templates_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_templates_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TemplatesListComponent);


/***/ }),

/***/ 37963:
/*!********************************************************************!*\
  !*** ./src/app/features/resource-templates/templates.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesComponent": () => (/* binding */ TemplatesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _templates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.component.html?ngResource */ 24859);
/* harmony import */ var _templates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates.component.scss?ngResource */ 81146);
/* harmony import */ var _templates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TemplatesComponent = class TemplatesComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
TemplatesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-templates',
  template: _templates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_templates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TemplatesComponent);


/***/ }),

/***/ 40763:
/*!*****************************************************************!*\
  !*** ./src/app/features/resource-templates/templates.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceTemplatesModule": () => (/* binding */ ResourceTemplatesModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _templates_list_templates_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates-list/templates-list.component */ 38125);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-template/add-edit-template.component */ 44016);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 26523);
/* harmony import */ var _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-slide-toggle */ 43921);
/* harmony import */ var _templates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates.component */ 37963);
/* harmony import */ var _prop_categories_prop_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prop-categories/prop-categories.component */ 9948);
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/properties.component */ 11998);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/legacy-chips */ 59257);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
























const routes = [{
  path: 'list',
  component: _templates_list_templates_list_component__WEBPACK_IMPORTED_MODULE_0__.TemplatesListComponent
}, {
  path: 'add',
  component: _add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_1__.AddEditTemplateComponent
}, {
  path: 'categories',
  component: _prop_categories_prop_categories_component__WEBPACK_IMPORTED_MODULE_3__.PropCategoriesComponent
}, {
  path: 'properties',
  component: _properties_properties_component__WEBPACK_IMPORTED_MODULE_4__.PropertiesComponent
}, {
  path: 'edit/:id',
  component: _add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_1__.AddEditTemplateComponent
}, {
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
}];
let ResourceTemplatesModule = class ResourceTemplatesModule {};
ResourceTemplatesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_templates_list_templates_list_component__WEBPACK_IMPORTED_MODULE_0__.TemplatesListComponent, _add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_1__.AddEditTemplateComponent, _templates_component__WEBPACK_IMPORTED_MODULE_2__.TemplatesComponent, _prop_categories_prop_categories_component__WEBPACK_IMPORTED_MODULE_3__.PropCategoriesComponent, _properties_properties_component__WEBPACK_IMPORTED_MODULE_4__.PropertiesComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_13__.MatLegacyInputModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_14__.MatLegacyTableModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_15__.MatLegacyPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_19__.MatLegacySelectModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatLegacyAutocompleteModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatLegacySlideToggleModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipsModule, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_23__.MatLegacyChipsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_6__.DashboardHeaderComponent]
})], ResourceTemplatesModule);


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

/***/ 74325:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/resource-templates/add-edit-template/add-edit-template.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.error-msg {\n  color: red;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.template-ae.card {\n  margin-bottom: 1rem;\n  padding: 24px;\n}\n.template-ae.card .card-header {\n  border-bottom: none;\n}\n.template-ae.card .card-header .p-title {\n  font-size: 24px;\n  font-weight: 600;\n}\n.template-ae.card .card-body {\n  padding: 0;\n}\n.template-ae.card .card-body .form-title {\n  font-size: 24px;\n  font-weight: 600;\n  color: #24398A;\n}\n.template-ae.card .card-body .row {\n  row-gap: 1.5rem;\n}\n.template-ae.card .card-body .config-group {\n  margin-bottom: 47px !important;\n}\n\n.description {\n  color: rgba(35, 31, 32, 0.5);\n  margin-bottom: 47px;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.template-modules, .voucher {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 24px;\n  padding: 50px;\n  margin-bottom: 47px;\n}\n@media (max-width: 768px) {\n  .template-modules, .voucher {\n    padding: 25px;\n  }\n}\n\n.content {\n  padding: 25px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #34A853;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #34A853;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.checkbox-container {\n  /* The container */\n  /* Hide the browser's default checkbox */\n  /* Create a custom checkbox */\n  /* On mouse-over, add a grey background color */\n  /* When the checkbox is checked, add a blue background */\n  /* Create the checkmark/indicator (hidden when not checked) */\n  /* Show the checkmark when checked */\n  /* Style the checkmark/indicator */\n}\n.checkbox-container .container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.checkbox-container .container span {\n  color: #231F20;\n}\n.checkbox-container .container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkbox-container .checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 24px;\n  width: 24px;\n  background-color: var(--primary-background);\n  border: 1px solid rgba(35, 31, 32, 0.24);\n  border-radius: 4px;\n}\n.checkbox-container .container:hover input ~ .checkmark {\n  background-color: var(--primary-background);\n}\n.checkbox-container .container input:checked ~ .checkmark {\n  background-color: white;\n}\n.checkbox-container .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.checkbox-container .container input:checked ~ .checkmark:after {\n  display: block;\n}\n.checkbox-container .container .checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid #24398A;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-template.card {\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n  height: 160px;\n  max-height: 160px;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.card-template.card .card-body {\n  gap: 1rem;\n  letter-spacing: -0.02em;\n  line-height: 140%;\n  color: #24398A;\n}\n.card-template.card .card-body h3 {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 140%;\n  margin-bottom: 4px;\n}\n.card-template.card .card-body p {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 140%;\n  margin-bottom: 5px;\n}\n.card-template.card .card-footer .row {\n  row-gap: 1rem;\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n}\n.modal-card.card .card-header h3 {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n.modal-card.card .card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.modal-card.card .card-body .text-clickable {\n  text-decoration: none;\n  color: #24398A;\n  cursor: pointer;\n}\n.modal-card.card .card-footer .row {\n  row-gap: 1rem;\n}\n\n.fa-times-circle {\n  color: #24398A;\n}\n\n.blue-scroll-bar::-webkit-scrollbar {\n  width: 44px;\n  height: 100px;\n  border-radius: 100px;\n}\n.blue-scroll-bar::-webkit-scrollbar-thumb {\n  background-color: rgba(36, 57, 138, 0.6);\n  border-radius: 100px;\n  border: 20px solid transparent;\n  background-clip: content-box;\n}\n.blue-scroll-bar::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.blue-scroll-bar::-webkit-scrollbar-track {\n  background-color: rgba(36, 57, 138, 0.08);\n  border-radius: 100px;\n  border: 20px solid var(--primary-background);\n  background-clip: content-box;\n}\n\n.attributes-tab-body {\n  padding: 25px;\n}\n.attributes-tab-body .category-name {\n  display: block;\n  font-weight: 700;\n  font-size: 20px;\n}\n.attributes-tab-body .attribute-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 50px;\n  padding: 15px 25px;\n}\n.attributes-tab-body .attribute-container span, .attributes-tab-body .attribute-container i {\n  font-size: 16px;\n}\n.attributes-tab-body .attribute-container .remove-attribute-btn {\n  display: flex;\n  background: transparent;\n  border: none;\n}\n.attributes-tab-body .add-attribute-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 50px;\n  padding: 15px 25px;\n  width: 100%;\n  font-size: 16px;\n}\n\n.template-modules .d-flex {\n  padding-right: 57px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/resource-templates/add-edit-template/add-edit-template.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,UAAA;AAkBF;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDZY;ECaZ,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAZA;EACE,2CAAA;AAeF;;AAZA;EACE,mBAAA;EACA,aAAA;AAeF;AAZE;EACE,mBAAA;AAcJ;AAZI;EACE,eAAA;EACA,gBAAA;AAcN;AAVE;EACE,UAAA;AAYJ;AAVI;EACE,eAAA;EACA,gBAAA;EACA,cD9CU;AC0DhB;AARI;EACE,eAAA;AAUN;AAPI;EACE,8BAAA;AASN;;AAHA;EACE,4BAAA;EACA,mBAAA;AAMF;;AAHA;EACE,eAAA;EACA,WAAA;AAMF;;AAHA;EACE,yCAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;AAMF;AAJE;EANF;IAOI,aAAA;EAOF;AACF;;AAFA;EACE,aAAA;AAKF;;AAAA;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AAGF;;AAAA;EACE,UAAA;EACA,QAAA;EACA,SAAA;AAGF;;AAAA;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EAEA,gBAAA;AAGF;;AAAA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EAEA,gBAAA;AAGF;;AAAA;EACE,yBDnFgB;ACsFlB;;AAAA;EACE,2BAAA;AAGF;;AAAA;EAGE,2BAAA;AAGF;;AAAA,oBAAA;AACA;EACE,mBAAA;AAGF;;AAAA;EACE,kBAAA;AAGF;;AAGA;EACE,kBAAA;EAiBA,wCAAA;EASA,6BAAA;EAYA,+CAAA;EAKA,wDAAA;EAKA,6DAAA;EAOA,oCAAA;EAKA,kCAAA;AArDF;AANE;EACE,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EAGA,iBAAA;AAQJ;AANI;EACE,cDnKE;AC2KR;AAHE;EACE,kBAAA;EACA,UAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;AAKJ;AADE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,2CAAA;EACA,wCAAA;EACA,kBAAA;AAGJ;AACE;EACE,2CAAA;AACJ;AAGE;EACE,uBAAA;AADJ;AAKE;EACE,WAAA;EACA,kBAAA;EACA,aAAA;AAHJ;AAOE;EACE,cAAA;AALJ;AASE;EACE,SAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,qBAAA;EACA,yBAAA;EAGA,wBAAA;AAPJ;;AAeA;EACE,2CAAA;AAZF;;AAeA;EACE,yCAAA;EACA,kBAAA;EACA,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;AAZF;AAcE;EACE,SAAA;EACA,uBAAA;EACA,iBAAA;EACA,cDxPY;AC4OhB;AAcI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAZN;AAeI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAbN;AAoBI;EACE,aAAA;AAlBN;;AAuBA;EACE,eAAA;AApBF;AAuBI;EACE,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,cD1RU;ACqQhB;AA0BI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cD/RM;ACuQZ;AA2BI;EACE,qBAAA;EACA,cDzSU;EC0SV,eAAA;AAzBN;AA+BI;EACE,aAAA;AA7BN;;AAmCA;EACE,cDxTc;ACwRhB;;AAqCE;EACE,WAAA;EACA,aAAA;EACA,oBAAA;AAlCJ;AAsCE;EAEE,wCAAA;EACA,oBAAA;EACA,8BAAA;EACA,4BAAA;AArCJ;AAuCI;EACE,qCAAA;AArCN;AAyCE;EACE,yCAAA;EACA,oBAAA;EACA,4CAAA;EACA,4BAAA;AAvCJ;;AA8CA;EACE,aAAA;AA3CF;AA6CE;EACE,cAAA;EACA,gBAAA;EACA,eAAA;AA3CJ;AA8CE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,yCAAA;EACA,mBAAA;EACA,kBAAA;AA5CJ;AA8CI;EACE,eAAA;AA5CN;AA+CI;EACE,aAAA;EACA,uBAAA;EACA,YAAA;AA7CN;AAiDE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yCAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;AA/CJ;;AAoDA;EACE,mBAAA;AAjDF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.error-msg {\n  color: red;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n}\n\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.template-ae.card {\n  margin-bottom: 1rem;\n  padding: 24px;\n\n\n  .card-header {\n    border-bottom: none;\n\n    .p-title {\n      font-size: 24px;\n      font-weight: 600;\n    }\n  }\n\n  .card-body {\n    padding: 0;\n\n    .form-title {\n      font-size: 24px;\n      font-weight: 600;\n      color: $primary-color;\n      // margin-bottom: 47px;\n    }\n\n    .row {\n      row-gap: 1.5rem;\n    }\n\n    .config-group {\n      margin-bottom: 47px !important;\n    }\n  }\n\n}\n\n.description {\n  color: rgba($paragraph, 0.5);\n  margin-bottom: 47px;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.template-modules, .voucher {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 24px;\n  padding: 50px;\n  margin-bottom: 47px;\n\n  @media(max-width: 768px) {\n    padding: 25px;\n  }\n\n}\n\n\n.content {\n  padding: 25px;\n}\n\n\n//------------------------------------- Switches -------------------------------------\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: $active-btn-color;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px $active-btn-color;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n//-------------------------------------SWITCHES END-------------------------------------\n\n//-------------------------------------CHECKBOX-------------------------------------\n.checkbox-container {\n  /* The container */\n  .container {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    span {\n      color: $title;\n    }\n  }\n\n  /* Hide the browser's default checkbox */\n  .container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 24px;\n    width: 24px;\n    background-color: var(--primary-background);\n    border: 1px solid rgba(35, 31, 32, 0.24);\n    border-radius: 4px;\n  }\n\n  /* On mouse-over, add a grey background color */\n  .container:hover input ~ .checkmark {\n    background-color: var(--primary-background);\n  }\n\n  /* When the checkbox is checked, add a blue background */\n  .container input:checked ~ .checkmark {\n    background-color: white;\n  }\n\n  /* Create the checkmark/indicator (hidden when not checked) */\n  .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n\n  /* Show the checkmark when checked */\n  .container input:checked ~ .checkmark:after {\n    display: block;\n  }\n\n  /* Style the checkmark/indicator */\n  .container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid $primary-color;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n}\n\n//-------------------------------------CHECKBOX END-------------------------------------\n\n//-------------------------------------MODAL-------------------------------------\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-template.card {\n  border: 1px solid rgba($primary-color, 0.24);\n  border-radius: 8px;\n  height: 160px;\n  max-height: 160px;\n  overflow: hidden;\n  overflow-y: auto;\n\n  .card-body {\n    gap: 1rem;\n    letter-spacing: -0.02em;\n    line-height: 140%;\n    color: $primary-color;\n\n    h3 {\n      font-weight: 700;\n      font-size: 24px;\n      line-height: 140%;\n      margin-bottom: 4px;\n    }\n\n    p {\n      font-weight: 300;\n      font-size: 16px;\n      line-height: 140%;\n      margin-bottom: 5px;\n    }\n\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n\n  .card-header {\n    h3 {\n      font-size: 24px;\n      font-weight: 600;\n      letter-spacing: -0.02em;\n      color: $primary-color;\n    }\n  }\n\n  .card-body {\n    & > p {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n    }\n\n    .text-clickable {\n      text-decoration: none;\n      color: $primary-color;\n      cursor: pointer;\n    }\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n\n.fa-times-circle {\n  color: $primary-color;\n}\n\n.blue-scroll-bar {\n\n  &::-webkit-scrollbar {\n    width: 44px;\n    height: 100px;\n    border-radius: 100px;\n\n  }\n\n  &::-webkit-scrollbar-thumb {\n    //background-color: var(--primary-background);\n    background-color: rgba($primary-color, 0.6);\n    border-radius: 100px;\n    border: 20px solid transparent;\n    background-clip: content-box;\n\n    &:hover {\n      background-color: rgba(black, 0.12);\n    }\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: rgba($primary-color, 0.08);\n    border-radius: 100px;\n    border: 20px solid var(--primary-background);\n    background-clip: content-box;\n\n\n  }\n}\n\n//------------------------------------- Configurator Tab - Categories/Attributes Section --------------------------\n.attributes-tab-body {\n  padding: 25px;\n\n  .category-name {\n    display: block;\n    font-weight: 700;\n    font-size: 20px;\n  }\n\n  .attribute-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 1px solid rgba($primary-color, 0.24);\n    border-radius: 50px;\n    padding: 15px 25px;\n\n    span, i {\n      font-size: 16px;\n    }\n\n    .remove-attribute-btn {\n      display: flex;\n      background: transparent;\n      border: none;\n    }\n  }\n\n  .add-attribute-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid rgba($primary-color, 0.24);\n    border-radius: 50px;\n    padding: 15px 25px;\n    width: 100%;\n    font-size: 16px;\n  }\n}\n\n\n.template-modules .d-flex {\n  padding-right: 57px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 49528:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/resource-templates/prop-categories/prop-categories.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-prop-categories.card {\n  margin-bottom: 1rem;\n}\n.card-prop-categories.card .card-body table .mat-row .img-table {\n  object-position: center;\n  object-fit: cover;\n  width: 45px;\n  max-width: 45px;\n  aspect-ratio: 1/1;\n}\n.card-prop-categories.card .card-body .row {\n  row-gap: 1.5rem;\n}\n.card-prop-categories.card .card-body .p-title {\n  font-weight: 600;\n  font-size: 24px;\n  color: #24398A;\n}\n.card-prop-categories.card .card-body .add-form .fa-times-circle {\n  color: rgba(36, 57, 138, 0.48);\n  background-color: var(--primary-background);\n  border-radius: 100%;\n}\n.card-prop-categories.card .card-footer p {\n  margin: 0;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-category.card > div {\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), var(--primary-background);\n}\n\n.card-category.card {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.card-category.card .card-body {\n  gap: 1rem;\n  letter-spacing: -0.02em;\n  line-height: 140%;\n  color: #24398A;\n}\n.card-category.card .card-body h3 {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 140%;\n  margin-bottom: 4px;\n}\n.card-category.card .card-body p {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 140%;\n  margin-bottom: 5px;\n}\n.card-category.card .card-footer .row {\n  row-gap: 1rem;\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n}\n.modal-card.card .card-header h3 {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n.modal-card.card .card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.modal-card.card .card-footer .row {\n  row-gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/resource-templates/prop-categories/prop-categories.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDRY;ECSZ,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAZA;EACE,2CAAA;AAeF;;AAZA;EACE,mBAAA;AAeF;AAPM;EACE,uBAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,iBAAA;AASR;AAJI;EACE,eAAA;AAMN;AAHI;EACE,gBAAA;EACA,eAAA;EACA,cDhDU;ACqDhB;AADM;EACE,8BAAA;EACA,2CAAA;EACA,mBAAA;AAGR;AAOI;EACE,SAAA;EACA,cDnEU;ECoEV,gBAAA;EACA,eAAA;AALN;;AAaA;EACE,2CAAA;AAVF;;AAaA;EACE,8GAAA;AAVF;;AAaA;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;AAVF;AAYE;EACE,SAAA;EACA,uBAAA;EACA,iBAAA;EACA,cD9FY;ACoFhB;AAYI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAVN;AAaI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAXN;AAkBI;EACE,aAAA;AAhBN;;AAqBA;EACE,eAAA;AAlBF;AAqBI;EACE,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,cDhIU;AC6GhB;AAwBI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDrIM;AC+GZ;AA4BI;EACE,aAAA;AA1BN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n}\n\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-prop-categories.card {\n  margin-bottom: 1rem;\n\n  // .card-header {\n\n  // }\n\n  .card-body {\n    table{\n      .mat-row .img-table{\n        object-position: center;\n        object-fit: cover;\n        width:45px;\n        max-width: 45px;\n        aspect-ratio : 1 / 1;\n      }\n    }\n\n\n    .row {\n      row-gap: 1.5rem;\n    }\n\n    .p-title{\n      font-weight: 600;\n      font-size: 24px;\n      color: $primary-color;\n    }\n\n    .add-form{\n      .fa-times-circle{\n        color:rgba($primary-color, 0.48 );\n        background-color:var(--primary-background);\n        border-radius: 100%;\n      }\n    }\n\n\n\n  }\n\n  .card-footer {\n\n    p {\n      margin: 0;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 16px;\n    }\n  }\n}\n\n\n//--------------Modal----------------\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-category.card > div {\n  background: linear-gradient(0deg, rgba($primary-color, 0.04), rgba($primary-color, 0.04)), var(--primary-background);\n}\n\n.card-category.card {\n  border: 1px solid $primary-color;\n  border-radius: 8px;\n  overflow: hidden;\n\n  .card-body {\n    gap: 1rem;\n    letter-spacing: -0.02em;\n    line-height: 140%;\n    color: $primary-color;\n\n    h3 {\n      font-weight: 700;\n      font-size: 24px;\n      line-height: 140%;\n      margin-bottom: 4px;\n    }\n\n    p {\n      font-weight: 300;\n      font-size: 16px;\n      line-height: 140%;\n      margin-bottom: 5px;\n    }\n\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n\n  .card-header {\n    h3 {\n      font-size: 24px;\n      font-weight: 600;\n      letter-spacing: -0.02em;\n      color: $primary-color;\n    }\n  }\n\n  .card-body {\n    & > p {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n    }\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 71595:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/resource-templates/properties/properties.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.properties-card.card, .properties-list-card.card {\n  margin-bottom: 1rem;\n}\n.properties-card.card .card-body .row, .properties-list-card.card .card-body .row {\n  row-gap: 1.5rem;\n}\n.properties-card.card .card-body .p-title, .properties-list-card.card .card-body .p-title {\n  font-weight: 600;\n  font-size: 24px;\n  color: #24398A;\n}\n.properties-card.card .card-body .add-form i, .properties-list-card.card .card-body .add-form i {\n  background-color: var(--primary-background);\n  border-radius: 100%;\n  color: rgba(36, 57, 138, 0.24);\n}\n.properties-card.card .card-body .add-form .icon-col, .properties-list-card.card .card-body .add-form .icon-col {\n  padding-top: 10.5px;\n}\n.properties-card.card .card-body .add-form .icon-col .upload-icon, .properties-list-card.card .card-body .add-form .icon-col .upload-icon {\n  border-color: rgba(36, 57, 138, 0.48);\n  height: 40px;\n}\n.properties-card.card .card-body .add-form .icon-col .upload-icon .btnn-upload, .properties-list-card.card .card-body .add-form .icon-col .upload-icon .btnn-upload {\n  border-color: rgba(36, 57, 138, 0.48);\n  width: 46px;\n  color: #24398A;\n  background: transparent;\n}\n.properties-card.card .card-body .add-form .icon-col .upload-icon .btnn-upload:hover, .properties-list-card.card .card-body .add-form .icon-col .upload-icon .btnn-upload:hover {\n  background-color: var(--secondary-background);\n}\n.properties-card.card .card-body .add-form .icon-col .icon, .properties-list-card.card .card-body .add-form .icon-col .icon {\n  height: 40px;\n  object-fit: scale-down;\n}\n.properties-card.card .card-body table .icon-table, .properties-list-card.card .card-body table .icon-table {\n  width: 45px;\n  max-width: 45px;\n  object-fit: cover;\n  aspect-ratio: 1/1;\n  object-position: center;\n  font-size: 12px;\n}\n.properties-card.card .card-footer p, .properties-list-card.card .card-footer p {\n  margin: 0;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-property.card > div {\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), var(--primary-background);\n}\n\n.card-property.card {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.card-property.card .card-body {\n  gap: 1rem;\n  letter-spacing: -0.02em;\n  line-height: 140%;\n  color: #24398A;\n}\n.card-property.card .card-body h3 {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 140%;\n  margin-bottom: 4px;\n}\n.card-property.card .card-body p {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 140%;\n  margin-bottom: 5px;\n}\n.card-property.card .card-footer .row {\n  row-gap: 1rem;\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n}\n.modal-card.card .card-header h3 {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n.modal-card.card .card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.modal-card.card .card-footer .row {\n  row-gap: 1rem;\n}\n\nimg.icon-table {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/resource-templates/properties/properties.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAiBF;AAfE;EACE,SAAA;EACA,cDTY;ECUZ,gBAAA;AAiBJ;AAdE;EACE,aAAA;AAgBJ;;AAXA;EACE,2CAAA;AAcF;;AAXA;EACE,mBAAA;AAcF;AAPI;EACE,eAAA;AASN;AANI;EACE,gBAAA;EACA,eAAA;EACA,cDtCU;AC8ChB;AAJM;EACE,2CAAA;EACA,mBAAA;EACA,8BAAA;AAMR;AAHM;EACE,mBAAA;AAKR;AAJQ;EACE,qCAAA;EACA,YAAA;AAMV;AAJU;EACE,qCAAA;EACA,WAAA;EACA,cDzDI;EC0DJ,uBAAA;AAMZ;AAJY;EACE,6CAAA;AAMd;AAAQ;EACE,YAAA;EACA,sBAAA;AAEV;AAMQ;EACE,WAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,uBAAA;EACA,eAAA;AAJV;AAaI;EACE,SAAA;EACA,cD9FU;EC+FV,gBAAA;EACA,eAAA;AAXN;;AAmBA;EACE,2CAAA;AAhBF;;AAmBA;EACE,8GAAA;AAhBF;;AAmBA;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;AAhBF;AAkBE;EACE,SAAA;EACA,uBAAA;EACA,iBAAA;EACA,cDzHY;ACyGhB;AAkBI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAhBN;AAmBI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAjBN;AAwBI;EACE,aAAA;AAtBN;;AA2BA;EACE,eAAA;AAxBF;AA2BI;EACE,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,cD3JU;ACkIhB;AA8BI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDhKM;ACoIZ;AAkCI;EACE,aAAA;AAhCN;;AAqCA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AAlCF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n}\n\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.properties-card.card , .properties-list-card.card{\n  margin-bottom: 1rem;\n\n   //.card-header {\n   //}\n\n  .card-body {\n\n    .row {\n      row-gap: 1.5rem;\n    }\n\n    .p-title{\n      font-weight: 600;\n      font-size: 24px;\n      color: $primary-color;\n    }\n\n    .add-form{\n      i{\n        background-color: var(--primary-background);\n        border-radius: 100%;\n        color:rgba($primary-color, 0.24);\n      }\n\n      .icon-col{\n        padding-top: 10.5px;\n        .upload-icon{\n          border-color: rgba($primary-color, 0.48 );\n          height: 40px;\n\n          .btnn-upload{\n            border-color: rgba($primary-color, 0.48 );\n            width: 46px;\n            color: $primary-color;\n            background:transparent;\n\n            &:hover{\n              background-color: var(--secondary-background);\n            }\n          }\n\n        }\n\n        .icon{\n          height: 40px;\n          object-fit:scale-down;\n        }\n      }\n\n    }\n\n    table{\n\n        .icon-table{\n          width: 45px;\n          max-width: 45px;\n          object-fit: cover;\n          aspect-ratio: 1 / 1;\n          object-position: center;\n          font-size:12px;\n        }\n\n\n    }\n  }\n\n  .card-footer {\n\n    p {\n      margin: 0;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 16px;\n    }\n  }\n}\n\n\n//--------------Modal----------------\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-property.card > div {\n  background: linear-gradient(0deg, rgba($primary-color, 0.04), rgba($primary-color, 0.04)), var(--primary-background);\n}\n\n.card-property.card {\n  border: 1px solid $primary-color;\n  border-radius: 8px;\n  overflow: hidden;\n\n  .card-body {\n    gap: 1rem;\n    letter-spacing: -0.02em;\n    line-height: 140%;\n    color: $primary-color;\n\n    h3 {\n      font-weight: 700;\n      font-size: 24px;\n      line-height: 140%;\n      margin-bottom: 4px;\n    }\n\n    p {\n      font-weight: 300;\n      font-size: 16px;\n      line-height: 140%;\n      margin-bottom: 5px;\n    }\n\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n\n  .card-header {\n    h3 {\n      font-size: 24px;\n      font-weight: 600;\n      letter-spacing: -0.02em;\n      color: $primary-color;\n    }\n  }\n\n  .card-body {\n    & > p {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n    }\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\nimg.icon-table {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 90141:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/resource-templates/templates-list/templates-list.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.events-list.card {\n  margin-bottom: 1rem;\n}\n.events-list.card .card-body .row {\n  row-gap: 1.5rem;\n}\n.events-list.card .card-footer p {\n  margin: 0;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 16px;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n}\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-event.card > div {\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), var(--primary-background);\n}\n\n.card-event.card {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.card-event.card .card-body {\n  gap: 1rem;\n  letter-spacing: -0.02em;\n  line-height: 140%;\n  color: #24398A;\n}\n.card-event.card .card-body h3 {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 140%;\n  margin-bottom: 4px;\n}\n.card-event.card .card-body p {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 140%;\n  margin-bottom: 5px;\n}\n.card-event.card .card-footer .row {\n  row-gap: 1rem;\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n}\n.modal-card.card .card-header h3 {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n.modal-card.card .card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.modal-card.card .card-footer .row {\n  row-gap: 1rem;\n}\n\n.clear-field {\n  color: rgba(36, 57, 138, 0.4);\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/resource-templates/templates-list/templates-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDRY;ECSZ,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAbA;EACE,2CAAA;AAgBF;;AAbA;EACE,mBAAA;AAgBF;AARI;EACE,eAAA;AAUN;AAJI;EACE,SAAA;EACA,cDvCU;ECwCV,gBAAA;EACA,eAAA;AAMN;;AADA;EACE,WAAA;AAIF;;AADA;EACE,eAAA;AAIF;;AAEA;EACE,2CAAA;AACF;;AAEA;EACE,8GAAA;AACF;;AAEA;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;AACF;AACE;EACE,SAAA;EACA,uBAAA;EACA,iBAAA;EACA,cD1EY;AC2EhB;AACI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AACN;AAEI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAAN;AAOI;EACE,aAAA;AALN;;AAUA;EACE,eAAA;AAPF;AAUI;EACE,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,cD5GU;ACoGhB;AAaI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDjHM;ACsGZ;AAiBI;EACE,aAAA;AAfN;;AAoBA;EACE,6BAAA;AAjBF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.events-list.card {\n  margin-bottom: 1rem;\n\n  .card-header {\n\n  }\n\n  .card-body {\n\n    .row {\n      row-gap: 1.5rem;\n    }\n  }\n\n  .card-footer {\n\n    p {\n      margin: 0;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 16px;\n    }\n  }\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  // width: 100%;\n}\n\n//--------------Modal----------------\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-event.card > div {\n  background: linear-gradient(0deg, rgba($primary-color, 0.04), rgba($primary-color, 0.04)), var(--primary-background);\n}\n\n.card-event.card {\n  border: 1px solid $primary-color;\n  border-radius: 8px;\n  overflow: hidden;\n\n  .card-body {\n    gap: 1rem;\n    letter-spacing: -0.02em;\n    line-height: 140%;\n    color: $primary-color;\n\n    h3 {\n      font-weight: 700;\n      font-size: 24px;\n      line-height: 140%;\n      margin-bottom: 4px;\n    }\n\n    p {\n      font-weight: 300;\n      font-size: 16px;\n      line-height: 140%;\n      margin-bottom: 5px;\n    }\n\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n\n  .card-header {\n    h3 {\n      font-size: 24px;\n      font-weight: 600;\n      letter-spacing: -0.02em;\n      color: $primary-color;\n    }\n  }\n\n  .card-body {\n    & > p {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n    }\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n.clear-field{\n  color: rgba($primary-color, 0.4);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 81146:
/*!*********************************************************************************!*\
  !*** ./src/app/features/resource-templates/templates.component.scss?ngResource ***!
  \*********************************************************************************/
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

/***/ 3135:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/resource-templates/add-edit-template/add-edit-template.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"\n                            {{ isEditMode\n                            ? ('TEMPLATES.EDIT' | translate) + templateData?.name\n                            : ('TEMPLATES.ADD' | translate) }}\"\n                          [buttonBackRoute]=\"isEditMode ? '../../../templates/list' : '../../templates/list'\"\n                          (buttonCall)=\"submitForm()\">\n    </app-dashboard-header>\n\n    <div class=\"template-ae card mb-5\">\n        <div class=\"card-header\">\n\n        </div>\n        <div class=\"card-body\">\n            <form [formGroup]=\"templateForm\" id=\"templateForm\">\n                <!--        (ngSubmit)=\"submitEvent()\"-->\n                <div class=\"container\">\n                    <p class=\"form-title\">{{'TEMPLATES.GENERAL-INFO' | translate}}</p>\n                    <p class=\"description\">*Adăugați numele si alegeți tipul resursei pentru șablonul construit.</p>\n\n                    <div class=\"row mb-5\">\n                        <div class=\"col-12\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{'TEMPLATES.NAME' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'TEMPLATES.NAME' | translate}}\" formControlName=\"name\"\n                                       id=\"nameInput\">\n                                <i class=\"fas fa-times-circle\" *ngIf=\"templateForm.get('name').value\"\n                                   (click)=\"clearFormControl('name')\" matSuffix></i>\n\n                                <!--Error Msg-->\n                                <mat-error *ngIf=\"templateForm.controls.name.hasError('required')\">Acest camp este\n                                    obligatoriu\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n\n\n                        <!--TODO De refacut - Apar erori in consola datorita form inputului. Inainte era doar STRING si acum e ARRAY de stringuri-->\n                        <!--Resource Type-->\n                        <div class=\"col-12\" *ngIf=\"resourceTypes && checkboxDisabledStates\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{'TEMPLATES.RES-TYPE' | translate}}</mat-label>\n                                <mat-select  formControlName=\"resourceTypeIds\"\n                                             id=\"resourceTypeInput\"\n                                             multiple>\n                                    <mat-option *ngFor=\"let resType of resourceTypes; let i =index;\"\n                                                [value]=\"resType.id\"\n                                                [disabled]=\"checkboxDisabledStates[resType.id]\">\n                                                {{resType.nameRo}}\n                                            </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n\n                    </div>\n\n                    <p class=\"form-title\">{{'TEMPLATES.TEMPLATE-MODULES' | translate}}</p>\n                    <p class=\"description mb-0\">*Șablonul resursei se va crea în funcție de modulele selectate mai jos.</p>\n                    <p class=\"error-msg\" *ngIf=\"templateForm.hasError('minimumBooking')\">Choose one booking type!</p>\n                    <p class=\"error-msg\" *ngIf=\"templateForm.hasError('multipleBooking')\">You are not allowed to choose more than one booking type!</p>\n\n                    <div class=\"template-modules\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele unde este necesară specificarea locației.\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"geoLocationSwitch\">{{'TEMPLATES.GEO-LOCATION' | translate}}</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" [checked]=\"true\" formControlName=\"geographicalCoordinates\"\n                                           id=\"geoLocationSwitch\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele unde se fac rezervări la o anumită oră aleasă de client (ex. restaurant).\">\n                                <label  class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"bookingTimeSwitch\">{{'TEMPLATES.BOOKING-TIME' | translate}}</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"serviceBookingTimePicker\"\n                                           id=\"bookingTimeSwitch\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele cu disponibilitate într-un anumit interval orar.\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"timetableSwitch\">{{'TEMPLATES.TIMETABLE' | translate}}</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"timetable\" id=\"timetableSwitch\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele ale căror rezervări se achizitionează pe baza de bilete. (ex. Zoo)\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"ticketBookingSwitch\">{{'TEMPLATES.TICKET-BOOKING' | translate}}</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"ticketBooking\"\n                                           id=\"ticketBookingSwitch\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                             <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele ale căror rezervări se achizitionează pe baza de bilete numerotate. (ex. Piese de teatru)\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"culturalBookingSwitch\">{{'TEMPLATES.CULTURAL-BOOKING' | translate}}</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"culturalBooking\"\n                                           id=\"culturalBookingSwitch\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele unde se fac rezervări pentru un anumit interval orar setat de către provider (ex. Teren de tenis, Sedinta Psihoterapie, etc.)\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"bookingTimeSlotsSwitch\">{{'TEMPLATES.BOOKING-TIME-SLOTS' | translate}}</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"serviceBookingTimeSlots\"\n                                           id=\"bookingTimeSlotsSwitch\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele care oferă acces la închirieri auto.\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"carBookingSwitch\">{{'TEMPLATES.CAR-BOOKING' | translate}}</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"carBooking\" id=\"carBookingSwitch\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele cărora li se pot asocia alte resurse. (ex. restaurant, vila, motel etc.)\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"relatedResourcesSwitch\">{{'TEMPLATES.RELATED-RESOURCES' | translate}}</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"relatedResources\"\n                                           id=\"relatedResourcesSwitch\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele care permit rezervări. (ex. hotel, motel, vila)\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"rentalBookingSwitch\">{{'TEMPLATES.RENTAL-BOOKING' | translate}}</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"rentalBooking\"\n                                           id=\"rentalBookingSwitch\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele care oferă o listă de produse. (ex. cursuri de achizitionat, resurse din categoria Fitness&Nutrition)\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"productListSwitch\">{{'TEMPLATES.PRODUCT-LIST' | translate}}</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"productsList\"\n                                           id=\"productListSwitch\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele care permit candidarea la job-uri.(ex. job-uri)\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"applyToJob\">Aplicare Job</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"applyToJob\"\n                                           id=\"applyToJob\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                            <!-- <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"additionalServicesSwitch\">{{'TEMPLATES.ADDITIONAL-SERVICES' | translate}}</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"additionalServices\"\n                                           id=\"additionalServicesSwitch\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div> -->\n\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele la care nu se fac rezervări prin intermediul acestui site. Vom direcționa clienții spre un url extern.\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"externalUrl\">URL Extern</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"externalUrl\"\n                                           id=\"externalUrl\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\" matTooltip=\"Potrivit pentru resursele care nu necesită rezervări. (ex. monumente, mănăstiri)\">\n                                <label class=\"custom-control-label d-flex align-items-center\"\n                                       for=\"noBooking\">Fără rezervări</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" checked formControlName=\"noBooking\"\n                                           id=\"noBooking\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <p class=\"form-title\">Configurator</p>\n                    <p class=\"description\">*Configurarea șablonului se va face pentru fiecare specificație in parte(ex. Generale, Despre, etc.), adăugând categoria, iar in funcție de aceasta, se vor selecta proprietățile specifice.</p>\n\n                    <div formArrayName=\"attributes\" class=\"templates-configurator config-group\">\n                        <mat-tab-group class=\"conf-tabs\" animationDuration=\"0ms\" mat-stretch-tabs=\"true\" dynamicHeight\n                                       [selectedIndex]=\"tabIndex\" (selectedTabChange)=\"changeTab($event)\">\n\n\n                            <div *ngFor=\"let attributeTab of attributes().controls; let attrTabIndex=index\">\n\n                                <!--Tab Name-->\n                                <mat-tab [formGroupName]=\"attrTabIndex\" [label]=\"attributeTab.value.tabName === 'general_info' ? ('EVENTS.GENERAL-INFO' | translate) : (attributeTab.value.tabName ==='about' ? ('JOBS.ABOUT' | translate) : (attributeTab.value.tabName === 'contact' ? 'Contact' : ('EVENTS.FACILITIES' | translate)))\">\n\n                                    <div class=\"attributes-tab-body\">\n\n                                        <!-- Category Btn-->\n                                        <button type=\"button\" class=\"btn-long btn-color-fill\"\n                                                matTooltip=\"Selectați o categorie de proprietăți\" (click)=\"openModal(addCategory); verifyTabCategories(attrTabIndex);\">\n                                            Categorie\n                                            <i class=\"fas fa-plus\"></i>\n                                        </button>\n\n                                        <!--List Selected Categories -->\n                                        <div formArrayName=\"tabAttributes\">\n                                            <div class=\"mt-5\"\n                                                 *ngFor=\"let tabAttribute of tabAttributes(tabIndex).controls; let tabAttributeIndex=index\">\n\n                                                <!--Category Info-->\n                                                <span class=\"category-name mb-3\">{{tabAttribute.value.categoryName}}</span>\n\n                                                <!--Attributes-->\n                                                <div class=\"row\">\n                                                    <!--Selected Attributes List-->\n                                                    <div class=\"col-lg-4 col-md-6 col-12\"\n                                                         *ngFor=\"let attribute of tabAttribute.value.categoryAttributes; let attributeIndex=index \">\n\n\n                                                        <div class=\"attribute-container\">\n\n                                                            <span>{{attribute.name}}</span>\n\n                                                            <button type=\"button\" class=\"remove-attribute-btn\"\n                                                                    (click)=\"removeCategoryAttribute(attrTabIndex,tabAttributeIndex,attributeIndex)\">\n                                                                <i class=\"fas fa-times\"></i>\n                                                            </button>\n\n                                                        </div>\n                                                    </div>\n                                                    <!--Add Attributes-->\n                                                    <div class=\"col-lg-4 col-md-6 col-12\">\n                                                        <button matTooltip=\"Selectați proprietățile din categoria aleasă\" type=\"button\" class=\"add-attribute-btn\"\n                                                                (click)=\"openModal(addProperty); verifyCategAttr(tabAttribute.value.categoryId, attrTabIndex)\">\n                                                            <span class=\"me-3 d-inline-block\">Adauga proprietate</span>\n                                                            <i class=\"fas fa-plus\"></i>\n                                                        </button>\n                                                    </div>\n                                                </div>\n\n                                                <!--Modal ADD Property-->\n                                                <ng-template #addProperty let-d=\"dismiss\">\n                                                    <div class=\"modal-card card\">\n                                                        <div class=\"card-header border-0\">\n                                                            <h3 class=\"m-0\">Selectare proprietati\n                                                            </h3>\n                                                        </div>\n\n                                                        <div class=\"card-body\">\n                                                            <p>Selecteaza proprietatile din lista de mai jos:</p>\n\n                                                            <mat-form-field appearance=\"outline\">\n                                                                <mat-label>Proprietati</mat-label>\n                                                                <mat-select multiple appearance=\"outline\"\n                                                                            [compareWith]=\"compareSelectedAttributesObjects\"\n                                                                            [(value)]=\"selectedAttributes\">\n                                                                    <mat-option *ngFor=\"let attribute of attributesList\"\n                                                                                [value]=\"attribute\">{{attribute.name}}</mat-option>\n                                                                </mat-select>\n                                                            </mat-form-field>\n<!--                                                            <div class=\"d-flex justify-content-between flex-row\">-->\n<!--                                                                <a class=\"text-clickable\" (click)=\"selectAll()\">Alege-->\n<!--                                                                    tot</a>-->\n<!--                                                                <a class=\"text-clickable\">Sterge tot</a>-->\n<!--                                                            </div>-->\n\n                                                        </div>\n\n                                                        <div class=\"card-footer border-0\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-6\">\n                                                                    <button type=\"button\"\n                                                                            class=\"btn-auto btn-color-outline w-100\"\n                                                                            (click)=\"closeModal()\">\n                                                                        <i class=\"fas fa-times\"></i>\n                                                                        {{ 'BTN.CANCEL' | translate}}\n                                                                    </button>\n                                                                </div>\n\n                                                                <div class=\"col-12 col-sm-6\">\n                                                                    <button type=\"button\"\n                                                                            class=\"btn-auto btn-color-fill w-100\"\n                                                                            (click)=\"confirmAttributes(tabAttribute.value.categoryId)\">\n                                                                        <i class=\"fas fa-check\"></i>\n                                                                        {{ 'BTN.CONFIRM' | translate}}\n                                                                    </button>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </ng-template>\n\n                                            </div>\n                                        </div>\n\n                                        <!--Modal ADD CATEGORY-->\n                                        <ng-template #addCategory let-d=\"dismiss\">\n                                            <div class=\"modal-card card\">\n                                                <div class=\"card-header border-0\">\n                                                    <h3 class=\"m-0\">Selectare categorii proprietati\n                                                    </h3>\n                                                </div>\n\n                                                <div class=\"card-body\">\n                                                    <p>Selecteaza categoriile de proprietati din lista de mai jos:</p>\n\n                                                    <mat-form-field appearance=\"outline\">\n                                                        <mat-label>Categorii</mat-label>\n                                                        <mat-select multiple appearance=\"outline\"\n                                                                    [compareWith]=\"compareSelectedCategoriesObjects\"\n                                                                    [(value)]=\"selectedCategories\">\n                                                            <mat-option *ngFor=\"let category of attributeCategoryList\"\n                                                                        [value]=\"category\">{{category.categoryName}}</mat-option>\n                                                        </mat-select>\n                                                    </mat-form-field>\n\n                                                    <!--SelectAll && Clear Buttons-->\n<!--                                                    <div class=\"d-flex justify-content-between flex-row\">-->\n<!--                                                        <a class=\"text-clickable\" (click)=\"selectAll()\">Alege tot</a>-->\n<!--                                                        <a class=\"text-clickable\">Sterge tot</a>-->\n<!--                                                    </div>-->\n\n                                                </div>\n\n                                                <div class=\"card-footer border-0\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-6\">\n                                                            <button type=\"button\"\n                                                                    class=\"btn-auto btn-color-outline w-100\"\n                                                                    id=\"btnModalCategoryDismissAdd\"\n                                                                    (click)=\"closeModal()\">\n                                                                <i class=\"fas fa-times\"></i>\n                                                                {{ 'BTN.CANCEL' | translate}}\n                                                            </button>\n                                                        </div>\n\n                                                        <div class=\"col-12 col-sm-6\">\n                                                            <button type=\"button\" class=\"btn-auto btn-color-fill w-100\"\n                                                                    id=\"id-btn-confirm-add-category\"\n                                                                    (click)=\"confirmCategories()\">\n                                                                <i class=\"fas fa-check\"></i>\n                                                                {{ 'BTN.CONFIRM' | translate}}\n                                                            </button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </ng-template>\n                                    </div>\n\n                                </mat-tab>\n                            </div>\n                        </mat-tab-group>\n                    </div>\n\n\n                    <p class=\"form-title\">Setări de listare</p>\n                    <p class=\"description\">*Setarea listării va configura modul în care resursele vor fi afișate în listă, si detaliile specifice care vor fi vizibile in cardul ales.</p>\n                    <div formGroupName=\"listingSetting\" class=\"mb-4\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>Tipul cardului</mat-label>\n                                    <mat-select (ngModel)=\"customValue\" (ngModelChange)=\"onCustomCardSelect($event)\" formControlName=\"cardType\" id=\"cardType\">\n                                        <mat-option value=\"default\">Default</mat-option>\n                                        <mat-option value=\"event\">Event</mat-option>\n                                        <mat-option value=\"editorial\">Editorial</mat-option>\n                                        <mat-option value=\"culture\">Culture</mat-option>\n                                        <mat-option value=\"custom\">Custom</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n    \n                            <div *ngIf=\"showAttributField===true\" class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>Atribute</mat-label>\n                                    <mat-select formControlName=\"attributes\" id=\"attributes\" multiple>\n                                        <div *ngFor=\"let tab of templateForm.get('attributes').value\">\n                                            <mat-optgroup *ngFor=\"let category of tab.tabAttributes\"\n                                                          [label]=\"category.categoryName\">\n                                                <mat-option *ngFor=\"let attr of category.categoryAttributes\"\n                                                            [value]=\"attr.id\">{{attr.name}}</mat-option>\n                                            </mat-optgroup>\n                                        </div>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        \n                        <div class=\"row\">\n                            <div class=\"col-12 col-lg-6\" >\n                                <div class=\"d-flex justify-content-between\">\n                                    <label matTooltip=\"Arată review-uri\" class=\"custom-control-label d-flex align-items-center\"\n                                           for=\"reviews\">Reviews</label>\n                                    <label matTooltip=\"Arată review-uri\" class=\"switch\">\n                                        <input type=\"checkbox\" [checked]=\"true\" id=\"reviews\" formControlName=\"reviews\">\n                                        <span class=\"slider round\"></span>\n                                    </label>\n                                </div>\n                            </div>\n    \n                            <div class=\"col-12 col-lg-6\" >\n                                <div class=\"d-flex justify-content-between\">\n                                    <label matTooltip=\"Arată locația\" class=\"custom-control-label d-flex align-items-center\"\n                                           for=\"location\">Location</label>\n                                    <label matTooltip=\"Arată locația\" class=\"switch\">\n                                        <input type=\"checkbox\" [checked]=\"true\" id=\"location\" formControlName=\"location\">\n                                        <span class=\"slider round\"></span>\n                                    </label>\n                                </div>\n    \n                            </div>\n                        </div>\n                        \n                    </div>\n\n<!--                    <p class=\"form-title\">{{'TEMPLATES.VOUCHER' | translate}}</p>-->\n<!--                    <div class=\"row voucher\">-->\n<!--                        <div class=\"col-12 col-lg-6 col-xl-4 d-flex justify-content-between\">-->\n<!--                            <label class=\"custom-control-label d-flex align-items-center\"-->\n<!--                                   for=\"generateQRCodeSwitch\">{{'TEMPLATES.GENERATE-QR' | translate}}</label>-->\n<!--                            <label class=\"switch\">-->\n<!--                                <input type=\"checkbox\" checked id=\"generateQRCodeSwitch\">-->\n<!--                                <span class=\"slider round\"></span>-->\n<!--                            </label>-->\n<!--                        </div>-->\n\n<!--                        <div class=\"col-md-12\">-->\n<!--                            <mat-form-field appearance=\"standard\">-->\n<!--                                <mat-label>{{'TEMPLATES.QR-TITLE' | translate}}</mat-label>-->\n<!--                                <input matInput placeholder=\"{{'TEMPLATES.QR-TITLE' | translate}}\"-->\n<!--                                       id=\"titleQR\">-->\n<!--                                &lt;!&ndash;                            <i class=\"fas fa-times-circle\" type=\"button\" *ngIf=\"templateForm.get('titleQR').value\"&ndash;&gt;-->\n<!--                                &lt;!&ndash;                               (click)=\"clearFormControl('titleQR')\" style=\"color:#24398A\" matSuffix></i>&ndash;&gt;-->\n<!--                            </mat-form-field>-->\n<!--                        </div>-->\n\n<!--                        <div class=\"col-md-12\">-->\n<!--                            <mat-form-field appearance=\"standard\">-->\n<!--                                <mat-label>{{'TEMPLATES.QR-DESCRIPTION' | translate}}</mat-label>-->\n<!--                                <input matInput placeholder=\"{{'TEMPLATES.QR-DESCRIPTION' | translate}}\"-->\n<!--                                       id=\"descriptionQR\">-->\n<!--                                &lt;!&ndash;                            <i class=\"fas fa-times-circle\" type=\"button\" *ngIf=\"templateForm.get('descriptionQR').value\"&ndash;&gt;-->\n<!--                                &lt;!&ndash;                               (click)=\"clearFormControl('descriptionQR')\" style=\"color:#24398A\" matSuffix></i>&ndash;&gt;-->\n<!--                            </mat-form-field>-->\n<!--                        </div>-->\n<!--                    </div>-->\n\n                </div>\n\n\n            </form>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 14614:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/resource-templates/prop-categories/prop-categories.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"{{ 'TEMPLATES.LIST' | translate}}\"\n                          routeTitleOne=\"../../templates/list\"\n                          pageTitleTwo=\" {{ 'PROP-CATEGORIES.TITLE' | translate }}\"\n                          routeTitleTwo=\"../../templates/categories\"\n                          pageTitleThree=\"{{'PROPERTIES.TITLE' | translate}}\"\n                          routeTitleThree=\"../../templates/properties\"\n                          [buttonBackRoute]=\"'../../dashboard'\">\n    </app-dashboard-header>\n\n\n<div class=\"card-prop-categories card\">\n    <div class=\"card-header border-0\">\n    </div>\n\n    <div class=\"card-body \">\n        <div class=\"container\">\n            <div class=\"row\">\n\n<!--                ADD COLUMN-->\n                <div class=\"col-12 col-lg-6\">\n\n                    <p class=\"p-title\">{{categoryForm.get('id').value ?('PROP-CATEGORIES.EDIT' | translate) : ('PROP-CATEGORIES.ADD' | translate)}}</p>\n                   <div class=\"add-form mb-3\">\n                       <form [formGroup]=\"categoryForm\">\n                           <mat-form-field appearance=\"standard\" class=\"w-100\">\n                               <mat-label>{{'FIELD.NAME' | translate}}</mat-label>\n                               <input matInput placeholder=\"{{'FIELD.NAME' | translate}}\" formControlName=\"name\"  required>\n                               <i class=\"fas fa-times-circle\" type=\"button\" *ngIf=\"categoryForm.get('name').value\"\n                                  (click)=\"clearFormControl('name')\" matSuffix></i>\n                               <mat-error  *ngIf=\"categoryForm.controls.name.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                               </mat-error>\n                           </mat-form-field>\n\n                           <mat-form-field appearance=\"standard\" class=\"w-100\">\n                               <mat-label>{{'USER.DESCRIPTION' | translate}}</mat-label>\n                               <input matInput placeholder=\"{{'USER.DESCRIPTION' | translate}}\" formControlName=\"description\"  required>\n                                                           <i class=\"fas fa-times-circle\" type=\"button\" *ngIf=\"categoryForm.get('description').value\"\n                                                              (click)=\"clearFormControl('description')\" matSuffix></i>\n                                                           <mat-error  *ngIf=\"categoryForm.controls.description.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                                                           </mat-error>\n                           </mat-form-field>\n\n                           <mat-form-field appearance=\"standard\" class=\"w-100\">\n                               <mat-label>{{'PROP-CATEGORIES.ZONE' | translate}}</mat-label>\n                               <mat-select formControlName=\"zone\" id=\"zoneSelect\">\n                                   <mat-option value=\"general-info\">{{'PROP-CATEGORIES.GENERAL-INFO' | translate}}</mat-option>\n                                   <mat-option value=\"contact\">{{'PROP-CATEGORIES.CONTACT' | translate}}</mat-option>\n                                   <mat-option value=\"location\">{{'PROP-CATEGORIES.LOCATION' | translate}}</mat-option>\n                                   <mat-option value=\"facilities\">{{'PROP-CATEGORIES.FACILITIES' | translate}}</mat-option>\n                                   <mat-option value=\"services\">{{'PROP-CATEGORIES.SERVICES' | translate}}</mat-option>\n                               </mat-select>\n                           </mat-form-field>\n\n                           <div class=\"file d-flex justify-content-md-between align-items-center flex-wrap justify-content-center gap-2\">\n                               <p class=\"mb-0\">{{!categoryForm.get('icon').value?.filePath ? 'No file chosen' : categoryForm.get('icon').value?.fileName}}</p>\n                               <div class=\"d-flex align-items-center\">\n                                   <button type=\"button\" class=\"btn-round btn-color-outline me-2\" *ngIf=\"categoryForm.get('icon').value?.filePath\" (click)=\"removeIcon(); cdr.detectChanges()\"><i class=\"fas fa-trash\"></i></button>\n                                   <button class=\"btn-long btn-color-outline\" (click)=\"openMedia(icon)\" type=\"button\">Choose file <i class=\"fas fa-file\"></i></button>\n\n                               </div>\n                                </div>\n\n                           <ng-template #icon let-modal>\n                               <app-choose-media [category]=\"'image'\"\n                                                 [multipleSelect]=\"false\"\n                                                 [for]=\"'attr-categ-icon'\"\n                                                 [modalRef]=\"modal\"></app-choose-media>\n                           </ng-template>\n                       </form>\n                   </div>\n                    <button class=\"btn-long btn-color-fill w-100\" (click)=\"onSaveClick()\"><i class=\"fas fa-save\"></i>{{'BTN.SAVE' | translate}}</button>\n                </div>\n\n<!--                TABLE COLUMN-->\n                <div class=\"col-12 col-lg-6\">\n                    <div class=\"p-title\">{{'PROP-CATEGORIES.LIST' | translate}}</div>\n                    <mat-form-field class=\"w-100\" appearance=\"standard\">\n                        <mat-label>{{'GENERAL.SEARCH' | translate }}</mat-label>\n                        <input matInput type=\"text\" [formControl]=\"searchFilter\" placeholder=\"{{'GENERAL.SEARCH' | translate }}\"\n                               (keyup.enter)=\"searchCategory()\">\n                    </mat-form-field>\n\n                    <table mat-table matSort appMatTableResponsive [dataSource]=\"dataSource\" class=\"w-100\" >\n\n                        <!-- ICON Column -->\n                        <ng-container matColumnDef=\"icon\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Icon</th>\n                            <td data-column-name=\"Icon\" mat-cell\n                                *matCellDef=\"let row\">\n                                <img [src]=\"row.icon?.filePath\" alt=\"icon\" class=\"img-table\">\n                            </td>\n                        </ng-container>\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"name\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'FIELD.NAME' | translate}}</th>\n                            <td data-column-name=\"Denumire\" mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n                        </ng-container>\n\n                        <!-- Actions Column -->\n                        <ng-container matColumnDef=\"actions\">\n                            <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> {{'TEMPLATES.ACTIONS' | translate}}</th>\n                            <td mat-cell *matCellDef=\"let row; let i = index;\">\n                                <div class=\"d-flex actions-container flex-wrap py-2\">\n                                    <button class=\"btn-round btn-no-outline\"\n                                            id=\"btnListEditPropCategories-{{i}}\"\n                                            (click)=\"onEditClick(row.id)\"\n                                    matTooltip=\"Edit\">\n                                        <i class=\"fas fa-pen\"></i>\n                                    </button>\n\n                                    <button class=\"btn-round btn-no-outline\"\n                                            id=\"btnOpenModalDeleteTemplate-{{i}}\"\n                                            (click)=\"openModal(deleteCategory)\"\n                                    matTooltip=\"{{'BTN.DELETE' | translate}}\">\n                                        <i class=\"fas fa-trash\"></i>\n                                    </button>\n                                </div>\n\n                                <!--Modal Delete Category-->\n                                <ng-template #deleteCategory let-c=\"close\" let-d=\"dismiss\">\n                                    <div class=\"modal-card card\">\n                                        <div class=\"card-header border-0\">\n                                            <h3 class=\"m-0\">\n                                                {{ 'PROP-CATEGORIES.DELETE-TITLE' | translate }}\n                                            </h3>\n                                        </div>\n\n                                        <div class=\"card-body\">\n                                            <p>{{ 'PROP-CATEGORIES.DELETE-WARNING' | translate}}</p>\n\n                                            <div class=\"card-category card\">\n                                                <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">\n                                                    <h3>{{row.name}}</h3>\n                                                </div>\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"card-footer border-0\">\n                                            <div class=\"row\">\n                                                <div class=\"col-12 col-sm-6\">\n                                                    <button class=\"btn-auto btn-color-outline w-100\"\n                                                            id=\"btnModalPropCategoriesDismissDelete-{{i}}\"\n                                                            (click)=\"c()\">\n                                                        <i class=\"fas fa-times\"></i>\n                                                        {{ 'BTN.CANCEL' | translate}}\n                                                    </button>\n                                                </div>\n\n                                                <div class=\"col-12 col-sm-6\">\n                                                    <button class=\"btn-auto btn-color-fill w-100\"\n                                                            id=\"btnModalTemplateConfirmDelete-{{i}}\"\n                                                            (click)=\"deleteAttributeCategory(row.id)\">\n                                                        <i class=\"fas fa-check\"></i>\n                                                        {{ 'BTN.CONFIRM' | translate}}\n                                                    </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </td>\n                        </ng-container>\n\n\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                        Row shown when there is no matching data.\n                        <tr class=\"mat-row\" *matNoDataRow>\n                            <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{searchFilter.value}}\"</td>\n                        </tr>\n                    </table>\n\n                    <mat-paginator [pageSizeOptions]=\"pageSizeArray\"\n                                   [pageSize]=\"pageSize\"\n                                   [length]=\"paginationInfo?.totalElements\"\n                                   (page)=\"pageChanged($event)\"\n                                   #matPaginator\n                                   aria-label=\"Select page of Property Categories\"></mat-paginator>\n\n\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-footer border-0\">\n\n    </div>\n</div>\n</div>\n";

/***/ }),

/***/ 93966:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/resource-templates/properties/properties.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <app-dashboard-header pageTitleOne=\"{{ 'TEMPLATES.LIST' | translate}}\"\n                              routeTitleOne=\"../../templates/list\"\n                              pageTitleTwo=\" {{ 'PROP-CATEGORIES.TITLE' | translate }}\"\n                              routeTitleTwo=\"../../templates/categories\"\n                              pageTitleThree=\"{{'PROPERTIES.TITLE' | translate}}\"\n                              routeTitleThree=\"../../templates/properties\"\n                              [buttonBackRoute]=\"'../../dashboard'\"\n                              (buttonCall)=\"onSaveClick()\">\n        </app-dashboard-header>\n    </div>\n<div class=\"row properties-card card\">\n    <div class=\"card-body \">\n        <div class=\"container add-form\">\n                <form [formGroup]=\"propertiesForm\">\n\n                    <div class=\"row add-property-row mb-5\">\n                        <p class=\"p-title\">\n                            {{propertiesForm.get('id').value ? ('PROPERTIES.EDIT-PROP' | translate) : ('PROPERTIES.ADD-PROP' | translate)}}</p>\n                    <div class=\"col-12 col-lg-6\">\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>{{'PROPERTIES.PROP-NAME' | translate}}</mat-label>\n                            <input matInput placeholder=\"{{'PROPERTIES.PROP-NAME' | translate}}\" formControlName=\"name\"  required>\n                                                        <i class=\"fas fa-times-circle\" type=\"button\" *ngIf=\"propertiesForm.get('name').value\"\n                                                           (click)=\"clearFormControl('name')\" matSuffix></i>\n                                                        <mat-error  *ngIf=\"propertiesForm.controls.name.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                                                        </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-12 col-lg-6\">\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>Public info</mat-label>\n                            <input matInput placeholder=\"Public info\" formControlName=\"alias\"  required>\n                                                        <i class=\"fas fa-times-circle\" type=\"button\" *ngIf=\"propertiesForm.get('alias').value\"\n                                                           (click)=\"clearFormControl('alias')\" matSuffix></i>\n                                                        <mat-error  *ngIf=\"propertiesForm.controls.alias.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                                                        </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-12 col-lg-6\">\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>{{'PROPERTIES.PROP-CATEGORY' | translate}}</mat-label>\n                            <mat-select formControlName=\"categoryId\" id=\"categoryId\" required>\n                                <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-12 col-lg-6\">\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>{{'PROPERTIES.PROP-VALUE-TYPE' | translate}}</mat-label>\n                            <mat-select formControlName=\"valueType\" id=\"valueType\">\n                                <mat-option value=\"text\">Text</mat-option>\n                                <mat-option value=\"number\">{{'VALUE-TYPE.NUMBER' | translate}}</mat-option>\n                                <mat-option value=\"textarea\">{{'VALUE-TYPE.TEXTAREA' | translate}}</mat-option>\n                                <mat-option value=\"select\">{{'VALUE-TYPE.SELECT' | translate}}</mat-option>\n                                <mat-option value=\"multiple-select\">{{'VALUE-TYPE.MULTIPLE-SELECT' | translate}}</mat-option>\n                                <mat-option value=\"toggle\">Toggle</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                        <div class=\"col-12 \" *ngIf=\"propertiesForm.value['valueType']==='select' || propertiesForm.value['valueType']==='multiple-select'\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>{{'PROPERTIES.SELECTION-OPTION' | translate}}</mat-label>\n                                <mat-chip-list mat-chip-grid #chip>\n                                    <mat-chip\n                                            *ngFor=\"let option of options; let i = index\"\n                                            (removed)=\"removeOption(option)\">\n                                        {{option}}\n                                        <button id=\"btnRemoveChip-{{i}}\" matChipRemove>\n                                            <mat-icon>cancel</mat-icon>\n                                        </button>\n                                    </mat-chip>\n                                    <input\n                                            id=\"benefitsInput\"\n                                            placeholder=\"{{'PROPERTIES.ADD-OPTION' | translate}}\"\n                                            [formControl]=\"optionCtrl\"\n                                            [matChipInputFor]=\"chip\"\n                                            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                            (matChipInputTokenEnd)=\"addOption($event)\"\n                                            [matChipInputAddOnBlur]=\"true\"\n                                    >\n                                </mat-chip-list>\n\n                            </mat-form-field>\n                        </div>\n\n                    <div class=\"col-12\">\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>{{'PROPERTIES.DESCRIPTION' | translate}}</mat-label>\n                            <input matInput placeholder=\"{{'PROPERTIES.DESCRIPTION' | translate}}\" formControlName=\"description\">\n                            <i class=\"fas fa-times-circle\" type=\"button\" *ngIf=\"propertiesForm.get('description').value\"\n                               (click)=\"clearFormControl('description')\" matSuffix></i>\n                            <mat-error  *ngIf=\"propertiesForm.controls.description.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                    </div>\n\n                    <div class=\"row technical-info-row\">\n                        <p class=\"p-title\">{{'PROPERTIES.TECHNICAL-INFO' | translate}}</p>\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>{{'PROPERTIES.EXAMPLE' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'PROPERTIES.EXAMPLE' | translate}}\" formControlName=\"valuePlaceholder\" >\n                                                            <i class=\"fas fa-times-circle\" type=\"button\" *ngIf=\"propertiesForm.get('valuePlaceholder').value\"\n                                                               (click)=\"clearFormControl('valuePlaceholder')\" matSuffix></i>\n                                                            <mat-error  *ngIf=\"propertiesForm.controls.valuePlaceholder.errors?.required\">{{'ERROR.REQUIRED' | translate}}\n                                                            </mat-error>\n                            </mat-form-field>\n                        </div>\n\n<!--                        <div class=\"col-12 col-lg-6\">-->\n<!--                            <mat-form-field appearance=\"standard\" class=\"w-100\">-->\n<!--                                <mat-label>{{'PROPERTIES.OFFSET' | translate}}</mat-label>-->\n<!--                                <mat-select formControlName=\"offset\" id=\"offset\">-->\n<!--                                </mat-select>-->\n<!--                            </mat-form-field>-->\n<!--                        </div>-->\n\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>{{'PROPERTIES.FIELD-SIZE' | translate}}</mat-label>\n                                <mat-select formControlName=\"size\" id=\"size\">\n                                    <mat-option [value]=\"null\">-</mat-option>\n                                    <mat-option [value]=\"'full_row'\">Full row</mat-option>\n                                    <mat-option [value]=\"'half_row'\">Half row</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\" >\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>{{'PROPERTIES.VISIBLE-IN-FORM' | translate}}</mat-label>\n                                <mat-select formControlName=\"visibleInForm\" id=\"visibleInForm\">\n                                    <mat-option>-</mat-option>\n                                    <mat-option [value]=\"true\">{{'BTN.YES' | translate}}</mat-option>\n                                    <mat-option [value]=\"false\">{{'BTN.NO' | translate}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>{{'PROPERTIES.VISIBLE-IN-LIST' | translate}}</mat-label>\n                                <mat-select formControlName=\"visibleInList\" id=\"visibleInList\">\n                                    <mat-option [value]=\"true\">{{'BTN.YES' | translate}}</mat-option>\n                                    <mat-option [value]=\"false\">{{'BTN.NO' | translate}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>{{'PROPERTIES.PROP-REQUIRED' | translate}}</mat-label>\n                                <mat-select formControlName=\"propertyRequired\" id=\"propertyRequired\">\n                                    <mat-option [value]=\"true\">{{'BTN.YES' | translate}}</mat-option>\n                                    <mat-option [value]=\"false\">{{'BTN.NO' | translate}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>{{'PROPERTIES.UNIQUE-VALUE' | translate}}</mat-label>\n                                <mat-select formControlName=\"uniqueValue\" id=\"uniqueValue\" >\n                                    <mat-option [value]=\"true\">{{'BTN.YES' | translate}}</mat-option>\n                                    <mat-option [value]=\"false\">{{'BTN.NO' | translate}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>Folosit in filtrare?</mat-label>\n                                <mat-select formControlName=\"usedInFiltering\" id=\"usedInFiltering\" >\n                                    <mat-option [value]=\"true\">{{'BTN.YES' | translate}}</mat-option>\n                                    <mat-option [value]=\"false\">{{'BTN.NO' | translate}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n<!--                        <div class=\"col-12 col-lg-6\">-->\n<!--                            <mat-form-field appearance=\"standard\" class=\"w-100\">-->\n<!--                                <mat-label>Featured</mat-label>-->\n<!--                                <mat-select formControlName=\"featured\" id=\"featured\" >-->\n<!--                                    <mat-option [value]=\"true\">{{'BTN.YES' | translate}}</mat-option>-->\n<!--                                    <mat-option [value]=\"false\">{{'BTN.NO' | translate}}</mat-option>-->\n<!--                                </mat-select>-->\n<!--                            </mat-form-field>-->\n<!--                        </div>-->\n\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>Tipuri de resursa</mat-label>\n                                <mat-select formControlName=\"resourceTypeIds\" multiple (selectionChange)=\"display($event)\">\n                                    <mat-option *ngFor=\"let resourceType of resourceTypes\" [value]=\"resourceType.id\">{{resourceType.nameRo}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6 icon-col\">\n                            <div class=\"d-flex flex-row justify-content-between \">\n                                <div class=\"upload-icon w-75 px-2 border rounded d-flex justify-content-between align-items-center\">\n                                    <p class=\"mb-0\">Upload icon</p>\n                                    <div>\n                                        <button *ngIf=\"imgPath!=='./assets/images/others/icon.png'\" class=\"btnn-upload border rounded me-2\" (click)=\"deleteIcon()\"><i class=\"fas fa-trash\"></i></button>\n\n                                        <button class=\"btnn-upload border rounded\" type=\"button\" (click)=\"openMedia(iconAttr)\" id=\"uploadIconBtn\"><i class=\"fas fa-upload\"></i></button>\n                                    </div>\n\n                                    <ng-template #iconAttr let-modal>\n                                        <app-choose-media [category]=\"'image'\"\n                                                          [multipleSelect]=\"false\"\n                                                          [for]=\"'attr-icon'\"\n                                                          [modalRef]=\"modal\"></app-choose-media>\n                                    </ng-template>\n                                </div>\n                                <img [src]=\"imgPath\" class=\"icon w-25\">\n                            </div>\n\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\">\n                                <mat-checkbox  color=\"primary\" class=\"w-100\" formControlName=\"enrollment\">Enrollment Utilizator</mat-checkbox>\n                        </div>\n                    </div>\n                </form>\n\n\n        </div>\n    </div>\n\n</div>\n\n    <div class=\"pt-4\">\n\n    <h3 class=\"pb-2\">{{'PROPERTIES.PROP-LIST' | translate}}</h3>\n    <div class=\"row filterRow\">\n        <mat-form-field class=\"w-100\" appearance=\"standard\">\n            <mat-label>{{'GENERAL.SEARCH' | translate }}</mat-label>\n            <input matInput type=\"text\" [formControl]=\"searchFilter\" placeholder=\"{{'GENERAL.SEARCH' | translate }}\"\n                   (keyup.enter)=\"searchProperties()\">\n        </mat-form-field>\n    </div>\n\n    <div class=\"row tableContent\">\n\n            <table mat-table matSort appMatTableResponsive [dataSource]=\"categList\" class=\"w-100\" *ngIf=\"loaded\" >\n\n                <!-- id -->\n                <ng-container matColumnDef=\"id\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Order by category</th>\n                    <td data-column-name=\"#\" mat-cell\n                        *matCellDef=\"let row; let i = index;\">{{row.order}} </td>\n                 </ng-container>  \n                    <!--{{ (i + 1) + pageSize * (pageNumber-1)}}-->\n\n                <!-- ICON Column -->\n                <ng-container matColumnDef=\"icon\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Icon </th>\n                    <td data-column-name=\"Icon\" mat-cell *matCellDef=\"let row\">\n                    <img [src]=\"row.icon?.filePath\" alt=\"icon\" class=\"icon-table\">\n                    </td>\n                </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"alias\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Public info</th>\n                    <td data-column-name=\"Public info\" mat-cell *matCellDef=\"let row\"> {{row.alias}} </td>\n                </ng-container>\n\n                <!-- Value Type Column -->\n                <ng-container matColumnDef=\"valueType\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'PROPERTIES.PROP-VALUE-TYPE' | translate}} </th>\n                    <td attr.data-column-name=\"{{'PROPERTIES.PROP-VALUE-TYPE' | translate}}\" mat-cell *matCellDef=\"let row\"> {{row.valueType | valueTypeTransform}} </td>\n                </ng-container>\n\n                <!-- Visible in list Column -->\n                <ng-container matColumnDef=\"visibleInList\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'PROPERTIES.VISIBLE-IN-LIST' | translate}} </th>\n                    <td attr.data-column-name=\"{{'PROPERTIES.VISIBLE-IN-LIST' | translate}}\" mat-cell *matCellDef=\"let row\"> {{row.visibleInList ? (\"BTN.YES\" | translate) : (\"BTN.NO\" | translate) }} </td>\n\n                </ng-container>\n\n\n                <!-- Category Column -->\n                <ng-container matColumnDef=\"category\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'PROPERTIES.PROP-CATEGORY' | translate}} </th>\n                    <td attr.data-column-name=\"{{'PROPERTIES.PROP-CATEGORY' | translate}}\" mat-cell *matCellDef=\"let row\"> {{row.categoryName}} </td>\n                </ng-container>\n\n\n                <!-- Actions Column -->\n                <ng-container matColumnDef=\"actions\">\n                    <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> Acțiuni </th>\n                    <td mat-cell *matCellDef=\"let row; let i = index;\">\n                        <div class=\"d-flex actions-container flex-wrap py-2\">\n                            <button class=\"btn-round btn-no-outline\"\n                                    id=\"btnListEditProperty-{{i}}\"\n                                    matTooltip=\"Edit\"\n                                    (click)=\"onEditClick(row.id)\"\n                                    >\n                                <i class=\"fas fa-pen\"></i>\n                            </button>\n\n                            <button class=\"btn-round btn-no-outline\"\n                                    id=\"btnOpenModalDeleteProperty-{{i}}\"\n                                    (click)=\"openModal(deleteProperty)\"\n                                    matTooltip=\"{{'BTN.DELETE' | translate}}\">\n                                <i class=\"fas fa-times\"></i>\n                            </button>\n\n                            <div [matTooltipDisabled]=\"row.order !== 0\" [matTooltip]=\"'Acest atribut este deja primul in categoria sa.'\">\n                                <button class=\"btn-round btn-no-outline\" (click)=\"decrementOrder(row.order,row.id)\" [disabled]=\"row.order === 0\" \n                                [matTooltip]=\"'Mută mai sus'\">\n                                    <i class=\"fas fa-arrow-up\"></i>\n                                </button>\n                            </div>\n\n                            <div [matTooltipDisabled]=\"row.order !== row.maxOrderCategory\" [matTooltip]=\"'Acest atribut este deja ultimul in categoria sa.'\">\n                            <button class=\"btn-round btn-no-outline\" (click)=\"incrementOrder(row.categoryId, row.order, row.id)\" [disabled]=\"row.order === row.maxOrderCategory\" [matTooltip]=\"'Mută mai jos'\">\n                                <i class=\"fas fa-arrow-down\"></i>\n                                \n                            </button>\n                            </div>\n                        </div>\n\n                        <!--Modal Delete Property-->\n                        <ng-template #deleteProperty let-c=\"close\" let-d=\"dismiss\">\n                            <div class=\"modal-card card\">\n                                <div class=\"card-header border-0\">\n                                    <h3 class=\"m-0\">\n                                        {{ 'PROPERTIES.DELETE-TITLE' | translate }}\n                                    </h3>\n                                </div>\n\n                                <div class=\"card-body\">\n                                    <p>{{ 'PROPERTIES.DELETE-WARNING' | translate}}</p>\n\n                                    <div class=\"card-property card\">\n                                        <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">\n                                            <h3>#{{ (i + 1) + pageSize * (pageNumber - 1)}} {{row.alias}}</h3>\n<!--                                            <p class=\"m-0\">provider</p>-->\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"card-footer border-0\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-outline w-100\"\n                                                    id=\"btnModalPropertyDismissDelete-{{i}}\"\n                                                    (click)=\"d()\">\n                                                <i class=\"fas fa-times\"></i>\n                                                {{ 'BTN.CANCEL' | translate}}\n                                            </button>\n                                        </div>\n\n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-fill w-100\"\n                                                    id=\"btnModalPropertyConfirmDelete-{{i}}\"\n                                                    (click)=\"deleteAttribute(row.id)\">\n                                                <i class=\"fas fa-check\"></i>\n                                                {{ 'BTN.CONFIRM' | translate}}\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </td>\n                </ng-container>\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <!-- Row shown when there is no matching data. -->\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{searchFilter.value}}\"</td>\n                </tr>\n            </table>\n\n            <mat-paginator [pageSizeOptions]=\"pageSizeArray\"\n                           [pageSize]=\"pageSize\"\n                           [length]=\"paginationInfo?.totalElements\"\n                           (page)=\"pageChanged($event)\"\n                           aria-label=\"Select page of properties\"></mat-paginator>\n\n\n\n        </div>\n\n\n\n\n    </div>\n</div>\n\n";

/***/ }),

/***/ 33177:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/resource-templates/templates-list/templates-list.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"{{ 'TEMPLATES.LIST' | translate}}\"\n                          routeTitleOne=\"../../templates/list\"\n                          pageTitleTwo=\" {{ 'PROP-CATEGORIES.TITLE' | translate }}\"\n                          routeTitleTwo=\"../../templates/categories\"\n                          pageTitleThree=\"{{'PROPERTIES.TITLE' | translate}}\"\n                          routeTitleThree=\"../../templates/properties\"\n                          [buttonBackRoute]=\"'../../dashboard'\"\n                          [buttonAddRoute]=\"'../../templates/add'\">\n    </app-dashboard-header>\n\n    <div class=\"row filterRow\">\n        <mat-form-field class=\"w-100\" appearance=\"standard\">\n            <mat-label>{{'GENERAL.SEARCH-NAME' | translate }}</mat-label>\n            <input matInput type=\"text\" [formControl]=\"searchFilter\" placeholder=\"{{'GENERAL.SEARCH-ENTER' | translate }}\"\n                   (keyup.enter)=\"searchTemplate()\">\n            <button *ngIf=\"searchFilter.value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearFilter()\">\n                <i class=\"fas fa-times clear-field\" ></i>\n            </button>\n\n        </mat-form-field>\n    </div>\n\n    <div class=\"row tableContent\">\n            <table mat-table matSort appMatTableResponsive [dataSource]=\"templates\">\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"title\">\n                    <th mat-header-cell *matHeaderCellDef> Nume</th>\n                    <td data-column-name=\"Denumire\" mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n                </ng-container>\n\n\n                <!-- Res Type Column -->\n                <ng-container matColumnDef=\"resType\">\n                    <th mat-header-cell *matHeaderCellDef> Tip de resursa</th>\n                    <td data-column-name=\"Tip de resursa\" mat-cell *matCellDef=\"let row\"> {{row.objectNames}} </td>\n                </ng-container>\n\n                <!-- Actions Column -->\n                <ng-container matColumnDef=\"actions\">\n                    <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> Acțiuni</th>\n                    <td mat-cell *matCellDef=\"let row; let i = index;\">\n                        <div class=\"d-flex actions-container py-2\">\n                            <button class=\"btn-round btn-no-outline\"\n                                    id=\"btnListEditEvent-{{i}}\"\n                                    routerLink=\"../edit/{{ row.id }}\">\n                                <i class=\"fas fa-pen\"></i>\n                            </button>\n\n                            <button class=\"btn-round btn-no-outline\"\n                                    id=\"btnOpenModalDeleteTemplate-{{i}}\"\n                                    (click)=\"openModal(deleteTemplate, row.userId)\">\n                                <i class=\"fas fa-times\"></i>\n                            </button>\n                        </div>\n\n                        <!--Modal Delete Event-->\n                        <ng-template #deleteTemplate let-c=\"close\" let-d=\"dismiss\">\n                            <div class=\"modal-card card\">\n                                <div class=\"card-header border-0\">\n                                    <h3 class=\"m-0\">\n                                        {{ 'TEMPLATES.DELETE' | translate }}\n                                    </h3>\n                                </div>\n\n                                <div class=\"card-body\">\n                                    <p>{{ 'TEMPLATES.DELETE-WARNING' | translate}}</p>\n\n                                    <div class=\"card-event card\">\n                                        <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">\n                                            <h3>#{{ (i + 1) + pageSize * (pageNumber - 1)}} {{row.name}}</h3>\n                                            <p class=\"m-0\">{{userData?.firstName+' '+userData?.lastName}}</p>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"card-footer border-0\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-outline w-100\"\n                                                    id=\"btnModalEventDismissDelete-{{i}}\"\n                                                    (click)=\"d()\">\n                                                <i class=\"fas fa-times\"></i>\n                                                {{ 'BTN.CANCEL' | translate}}\n                                            </button>\n                                        </div>\n\n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-fill w-100\"\n                                                    id=\"btnModalTemplateConfirmDelete-{{i}}\"\n                                                    (click)=\"deleteTemplates(row.id)\">\n                                                <i class=\"fas fa-check\"></i>\n                                                {{ 'BTN.CONFIRM' | translate}}\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </td>\n                </ng-container>\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n<!--                Row shown when there is no matching data.-->\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{searchFilter.value}}\"</td>\n                </tr>\n            </table>\n\n            <mat-paginator [pageSizeOptions]=\"pageSizeArray\"\n                           [pageSize]=\"pageSize\"\n                           [length]=\"totalElements\"\n                           (page)=\"pageChanged($event)\"\n                           aria-label=\"Select page of events\"></mat-paginator>\n\n        </div>\n\n\n</div>\n";

/***/ }),

/***/ 24859:
/*!*********************************************************************************!*\
  !*** ./src/app/features/resource-templates/templates.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>templates works!</p>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_resource-templates_templates_module_ts.js.map