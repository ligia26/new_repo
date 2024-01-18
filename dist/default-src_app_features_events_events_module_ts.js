(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_features_events_events_module_ts"],{

/***/ 76945:
/*!*******************************************************************!*\
  !*** ./src/app/features/events/_services/event-ticket.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTicketService": () => (/* binding */ EventTicketService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let EventTicketService = class EventTicketService {
  constructor(http) {
    this.http = http;
    this.eventId$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.refreshTicketList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.ticketsList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.deleteArray$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  }
  /** Listeners */
  refreshTicketListData() {
    return this.refreshTicketList$.asObservable();
  }
  ticketListData() {
    return this.ticketsList$.asObservable();
  }
  addTicketToList(ticket) {
    this.ticketsList$.next(this.ticketsList$.getValue().concat(ticket));
  }
  addTicketToDeleteArray(ticket) {
    this.deleteArray$.next(this.deleteArray$.getValue().concat(ticket));
  }
  //------------------REQUESTS------------------
  createTicket(resourceId, ticket) {
    return this.http.post('/bestinform/createTicket?resourceId=' + resourceId, ticket);
  }
  updateTicket(ticketId, ticket) {
    return this.http.put('/bestinform/updateTicket?ticketId=' + ticketId, ticket);
  }
  deleteTicket(ticketId) {
    return this.http.delete('/bestinform/deleteTicket?ticketId=' + ticketId);
  }
  getTicketList(resourceId) {
    return this.http.get('/bestinform/getTicketListByResourceId?resourceId=' + resourceId);
    // .pipe(tap((res:any) => this.initList$.next(res)))
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
EventTicketService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], EventTicketService);


/***/ }),

/***/ 21999:
/*!****************************************************************************!*\
  !*** ./src/app/features/events/add-edit-event/add-edit-event.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditEventComponent": () => (/* binding */ AddEditEventComponent)
/* harmony export */ });
/* harmony import */ var _Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_event_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-event.component.html?ngResource */ 71007);
/* harmony import */ var _add_edit_event_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-event.component.scss?ngResource */ 9984);
/* harmony import */ var _add_edit_event_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_add_edit_event_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/events.service */ 18100);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/_services/system-settings.service */ 42912);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/_services/templates.service */ 71453);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _components_add_edit_event_ticket_add_edit_event_ticket_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/add-edit-event-ticket/add-edit-event-ticket.component */ 70449);
/* harmony import */ var _services_event_ticket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_services/event-ticket.service */ 76945);
/* harmony import */ var _components_delete_event_ticket_delete_event_ticket_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/delete-event-ticket/delete-event-ticket.component */ 75671);
/* harmony import */ var _shared_services_location_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/_services/location.service */ 63712);
/* harmony import */ var _shared_services_createResource_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/_services/createResource.service */ 92821);

























let AddEditEventComponent = class AddEditEventComponent {
  constructor(route, router, fb, eventsService, toastService, systemSettingsService, resourceService, translate, templatesService, datePipe, usersService, ticketService, dialog, locationService, createResourceService, systemService, resourcesService) {
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.eventsService = eventsService;
    this.toastService = toastService;
    this.systemSettingsService = systemSettingsService;
    this.resourceService = resourceService;
    this.translate = translate;
    this.templatesService = templatesService;
    this.datePipe = datePipe;
    this.usersService = usersService;
    this.ticketService = ticketService;
    this.dialog = dialog;
    this.locationService = locationService;
    this.createResourceService = createResourceService;
    this.systemService = systemService;
    this.resourcesService = resourcesService;
    this.displayedResourcesColumns = ['title', 'address', 'category', 'purchase', 'status', 'actions'];
    this.dataSourceChoose = [];
    this.dataSourceRelated = [];
    this.resToBeAdded = [];
    this.pageSizeArray = [10, 25, 100];
    this.sorting = "date";
    this.dir = 'desc';
    this.ticketList = [];
    this.countries = [];
    this.cities = [];
    // images url and files
    this.thumbnailUrl = {
      fileName: undefined,
      filePath: undefined
    };
    this.galleryUrls = [];
    this.galleryFiles = [];
    this.$fileObservables = [];
    // Material Chips
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.COMMA];
    this.addOnBlur = true;
    this.benefitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('');
    this.benefits = [];
    this.allBenefits = ['Parcare gratuita', 'Aer conditionat', 'Bauturi gratis', 'Cabina foto', 'Candy bar'];
    this.allowedToSubmitEvent = true;
    this.emptyEventData = {
      title: '',
      slug: '',
      description: '',
      categoryId: '634fa85b74d11420d8f572d6',
      domain: ''
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('')
    });
    this.currentDay = moment__WEBPACK_IMPORTED_MODULE_3__();
    this.nextDay = this.currentDay.clone().add(1, 'days');
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
    this.tripsAndItineraries = [];
    this.filteredBenefits = this.benefitCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(fruit => fruit ? this._filter(fruit) : this.allBenefits.slice()));
  }
  ngOnInit() {
    this.runAfterAsyncOperations();
    this.checkTermsAndConditions();
    this.getCountries();
    this.pageSizeChoose = 10;
    this.pageNumberChoose = 1;
    this.pageNumberRelated = 1;
    this.pageSizeRelated = 10;
    this.resToBeAdded = [];
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
    this.createResourceService.providerData().subscribe({
      next: providerData => {
        console.log('PROVIDER DATA', providerData);
        if (providerData) {
          this.providerData = providerData;
        }
      }
    });
    this.initFormGroup();
    this.getEventData();
    this.getResourceCategories();
    this.ticketsList();
    // this.applyFilterForRelatedRes();
  }

  getEventCategoryId() {
    return new Promise((resolve, reject) => {
      this.systemService.getSystemSetting().subscribe({
        next: resp => {
          this.eventCategoryId = resp.eventCategoryId;
          console.log('RES SETTINGS', resp);
          console.log('id categorie event', this.eventCategoryId);
          resolve(); // Resolve the promise once the operation is complete
        },

        error: err => {
          reject(err); // Reject the promise if there's an error
        }
      });
    });
  }

  getTripsAndItinerariesIds() {
    return new Promise((resolve, reject) => {
      this.systemService.getSystemSetting().subscribe({
        next: resp => {
          // this.eventCategoryId = resp.eventCategoryId;
          console.log('RES SETTINGS for trips itin', resp);
          this.tripsAndItineraries.push(resp?.journeyThemeCategoryId);
          this.tripsAndItineraries.push(resp?.typeOfDestinationCategoryId);
          this.tripsAndItineraries.push(resp?.typeOfJourneyCategoryId);
          this.tripsItinObj = {
            journeyThemeCategoryId: resp?.journeyThemeCategoryId,
            typeOfDestinationCategoryId: resp?.typeOfDestinationCategoryId,
            typeOfJourneyCategoryId: resp?.typeOfJourneyCategoryId
          };
          resolve(); // Resolve the promise once the operation is complete
        },

        error: err => {
          reject(err); // Reject the promise if there's an error
        }
      });
    });
  }

  getJobCategoryId() {
    return new Promise((resolve, reject) => {
      this.resourcesService.getListOfDomains().subscribe({
        next: domains => {
          domains.forEach(domain => {
            if (domain.key === 'jobs') {
              this.resourcesService.listCategoryFiltered(0, 1, null, null, {
                domainId: domain.id
              }).subscribe({
                next: category => {
                  this.jobCategoryId = category.content[0].id;
                  resolve(); // Resolve the promise once the operation is complete
                },

                error: err => {
                  reject(err); // Reject the promise if there's an error
                }
              });
            }
          });
        }
      });
    });
  }

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      this.usersService.getCurrentUser().subscribe({
        next: response => {
          this.user = response;
          if (response.roles.includes('ROLE_PROVIDER')) {
            this.isProvider = true;
          }
          if (response.roles.includes('ROLE_STAFF')) {
            this.isStaff = true;
          }
          if (response.roles.includes('ROLE_SUPER_ADMIN')) {
            this.isAdmin = true;
          }
          resolve(); // Resolve the promise once the operation is complete
        },

        error: err => {
          reject(err); // Reject the promise if there's an error
        }
      });
    });
  }

  runAfterAsyncOperations() {
    var _this = this;
    return (0,_Users_ligia_bestinform_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.getEventCategoryId();
        yield _this.getJobCategoryId();
        yield _this.getCurrentUser();
        yield _this.getTripsAndItinerariesIds();
        //  async operations are complete, you can now call the next function
        _this.applyFilter();
      } catch (error) {
        console.error('Error occurred:', error);
      }
    })();
  }
  initFormGroup() {
    this.eventForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      slug: [''],
      shortDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      categoryId: this.categoryEvent,
      resourceTypeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      domain: this.domainIdForEventCategory,
      address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      geographicalCoordinates: this.geographicalCoordinates = this.fb.group({
        latitude: [null],
        longitude: [null]
      }),
      status: ['Draft'],
      attributes: this.attributesArray,
      bookingType: this.bookingTypeForCurrentTemplate,
      startDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      endDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      filterTitleChoose: ['']
    });
  }
  getResourceCategories() {
    this.systemSettingsService.getSystemSetting().subscribe(setting => {
      console.log('sys set eveniment categ', setting.eventCategoryId);
      this.categoryEvent = setting.eventCategoryId;
      this.getDomain(setting.eventCategoryId);
      this.resourceService.getAllResourceTypesByResourceCategory(setting.eventCategoryId).subscribe(resourceTypes => {
        console.log('restypes', resourceTypes);
        this.resourceTypes = resourceTypes;
      });
    });
  }
  getDomain(idCategory) {
    console.log('id categ', idCategory);
    this.resourceService.getResourceCategoryById(idCategory).subscribe(category => {
      console.log('category', category);
      this.domainIdForEventCategory = category.domainId;
    });
  }
  selectedResourceType(value) {
    // console.log('res value',value);
    const filterObj = {
      resourceTypeId: value
    };
    this.tabs = [];
    this.templatesService.listResourceTemplateFiltered(0, -1, '', '', filterObj).subscribe(template => {
      if (template.content.length === 1) {
        this.currentTemplateId = template.content[0].id;
        this.template = template.content[0];
        console.log('TEMPLATE', template.content[0]);
        this.bookingTypeForCurrentTemplate = template.content[0].bookingType;
        this.getTemplateData();
      }
    });
  }
  getTemplateData() {
    this.resourceService.getAttributesFromTemplate(this.currentTemplateId).subscribe(attributeTabs => {
      console.log('array cu taburile de atribute', attributeTabs);
      if (this.isEditMode) {
        this.compareAttributes(this.eventData.attributes, attributeTabs);
        this.tabs.forEach(tab => {
          this.createForm(tab);
        });
      } else {
        this.tabs = attributeTabs;
        attributeTabs.forEach(attributeTab => {
          this.createForm(attributeTab);
          console.log('attr tab', attributeTab);
        });
      }
    });
  }
  compareAttributes(eventAttr, templateAttributes) {
    this.tabs = [];
    // console.log('res', eventAttr);
    // console.log('temp', templateAttributes);
    templateAttributes.forEach(templateTab => {
      eventAttr.forEach(resourceTab => {
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
          this.tabs.push({
            tabName: templateTab.tabName,
            tabAttributes: array
          });
        }
      });
      //after combining the resource attributes with the template attributes, see if you have all the template tabs
      const findTab = this.tabs.find(section => templateTab.tabName === section.tabName);
      // console.log('find tab',findTab);
      //if not, add the tab with the name of the missing one and an empty array
      if (!findTab) {
        this.tabs.push({
          tabName: templateTab.tabName,
          tabAttributes: []
        });
      }
    });
  }
  createForm(tab) {
    // console.log('CREATE FORM', tab);
    for (let inputField of tab.tabAttributes) {
      // console.log('CREATE INPUT', inputField);
      if (inputField.valueType === 'toggle') {
        this.form.addControl(inputField.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(inputField.attributeValue ? inputField.attributeValue : 'false'));
      } else if (inputField.valueType === 'multiple-select') {
        // console.log('MULTIPLE SELECT', this.isEditMode, inputField.attributeValue.split(','));
        this.form.addControl(inputField.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(inputField.attributeValue ? inputField.attributeValue.split(',') : []));
      }
      this.form.addControl(inputField.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(inputField.attributeValue ? inputField.attributeValue : '', inputField.propertyRequired ? _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required : null));
    }
    // console.log('form', this.form.value);
  }
  // get event data data if in edit mode, else load empty event data
  getEventData() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.switchMap)(params => {
      if (params.get('id')) {
        this.isEditMode = true;
        this.ticketService.eventId$.next(params.get('id'));
        return this.eventsService.getResourceById(params.get('id'));
      } else {
        this.isEditMode = false;
        this.resToBeAdded = [];
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(this.emptyEventData);
      }
    })).subscribe(event => {
      this.eventData = event;
      console.log('EVENT', this.eventData);
      this.eventForm.patchValue(event);
      // this.totalElementsRelated = event.relatedResources.length;
      if (event.relatedResources?.length > 0) {
        this.getRelatedResource(event.relatedResources[0]);
      }
      if (this.eventForm.value.resourceTypeId) {
        this.geographicalCoordinates.patchValue(event.geographicalCoordinates);
        this.selectedResourceType(this.eventForm.value.resourceTypeId);
        for (let attributeTab of event.attributes) {
          this.createForm(attributeTab);
          console.log('attr tabs for edit', attributeTab);
        }
      }
      if (this.isEditMode) {
        if (event.country) {
          console.log('event country', event.country);
          this.getCities(event.country);
        }
        this.thumbnailUrl = Object.assign({}, event.featuredImage);
        this.galleryUrls = Object.assign([], event.images);
        // console.log(this.galleryUrls);
        if (!event.featuredImage) {
          this.thumbnailUrl = {
            fileName: undefined,
            filePath: undefined
          };
        }
      }
    });
  }
  // getRelatedResources(relatedResourcesIds){
  //     if(this.resToBeAdded.length < relatedResourcesIds.length) {
  //         relatedResourcesIds.forEach(resource => {
  //             this.eventsService.getResourceById(resource)
  //                 .pipe(takeUntil(this.ngUnsubscribe))
  //                 .subscribe({
  //                     next: res => {
  //                         this.addToRelatedRes(res);
  //                     }
  //                 })
  //         })
  //     }
  // }
  getRelatedResource(relatedResourcesId) {
    this.eventsService.getResourceById(relatedResourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.addToRelatedRes(res);
      }
    });
  }
  removeBenefit(benefit) {
    const index = this.benefits.indexOf(benefit);
    if (index >= 0) {
      this.benefits.splice(index, 1);
    }
  }
  addBenefit(event) {
    console.log(event);
    // Add our benefit
    // if (value) {
    //   this.benefits.push(value);
    // }
    // Clear the input value
    event.chipInput.clear();
    //this.benefitCtrl.setValue(null);
    // console.log(this.benefits);
    console.log(this.benefits);
  }
  selected(event) {
    this.benefits.push(event.option.viewValue);
    // this.benefitInput.nativeElement.value = '';
    this.benefitCtrl.setValue(null);
  }
  _filter(value) {
    const filterValue = value.toLowerCase();
    return this.allBenefits.filter(benefit => benefit.toLowerCase().includes(filterValue));
  }
  submitEvent() {
    if (!this.allowedToSubmitEvent) return;
    this.allowedToSubmitEvent = false;
    console.log('valorile eventului', this.eventForm.value);
    /*console.log(this.benefits);
    console.log(this.thumbnailUrl);
    console.log(this.galleryUrls);*/
    this.makeAttributesForm();
    this.eventForm.markAllAsTouched();
    if (this.eventForm.valid) {
      if (this.isEditMode) {
        this.eventForm.get('domain').setValue(this.domainIdForEventCategory);
        this.eventForm.get('categoryId').setValue(this.categoryEvent);
        this.eventForm.get('attributes').setValue(this.attributesArray);
        this.eventForm.get('bookingType').setValue(this.bookingTypeForCurrentTemplate);
        console.log('value', this.eventForm.value);
        const formToSend = {
          ...this.eventData,
          ...this.eventForm.value,
          startDate: this.datePipe.transform(this.eventForm.value.startDate, 'yyyy-MM-dd') + 'T' + this.datePipe.transform(this.eventForm.value.startDate, 'HH:mm') + 'Z',
          endDate: this.datePipe.transform(this.eventForm.value.endDate, 'yyyy-MM-dd') + 'T' + this.datePipe.transform(this.eventForm.value.endDate, 'HH:mm') + 'Z'
        };
        console.log('FORM TO SEND', formToSend);
        // console.log(this.eventData);
        this.eventsService.updateResource(this.eventData.id, formToSend).subscribe(res => {
          console.log(res);
          if (res.success) {
            //tickets
            if (this.ticketService.ticketsList$.getValue().length > 0) {
              const ticketsList = this.ticketService.ticketsList$.getValue();
              ticketsList.forEach(ticket => {
                if (ticket.state === 'add') {
                  this.$fileObservables.push(this.ticketService.createTicket(this.eventData.id, ticket));
                } else if (ticket.state === 'update') {
                  this.$fileObservables.push(this.ticketService.updateTicket(ticket.id, ticket));
                }
              });
            }
            if (this.ticketService.deleteArray$.getValue().length > 0) {
              const deleteTicketsArray = this.ticketService.deleteArray$.getValue();
              deleteTicketsArray.forEach(ticket => {
                this.$fileObservables.push(this.ticketService.deleteTicket(ticket.id));
              });
            }
            if (this.thumbnailFile) {
              const thumbnailData = new FormData();
              thumbnailData.append('file', this.thumbnailFile);
              // if(this.thumbnailFile !==undefined){
              this.$fileObservables.push(this.eventsService.uploadResourceImage(this.eventData.id, thumbnailData));
              // }else if(this.thumbnailFile ===undefined){
              //     this.$fileObservables.push(this.eventsService.deleteResourceFeatureImage(this.eventData.id));
              // }
            }

            if (this.galleryFiles.length > 0) {
              const imagesData = new FormData();
              this.galleryFiles.forEach(galleryFile => {
                imagesData.append('files', galleryFile);
              });
              this.$fileObservables.push(this.eventsService.uploadDocAttachements(this.eventData.id, 'image', imagesData));
            }
            // if(this.dataSourceRelated){
            //     const resourcesToAdd = [];
            //     this.dataSourceRelated.forEach(resource => {
            //             resourcesToAdd.push(resource.id);
            //     })
            //
            //     // this.$fileObservables.push(this.eventsService.addRelatedresources(this.eventData.id,resourcesToAdd));
            //
            // }
            if (this.resToBeAdded.length > 0 && this.eventData?.relatedResources?.length > 0) {
              if (this.resToBeAdded[0].id === this.eventData.relatedResources[0]) {
                // nu fac nimic
              } else {
                this.$fileObservables.push(this.eventsService.removeRelatedResource(this.eventData.id, this.eventData.relatedResources[0]));
                this.$fileObservables.push(this.eventsService.addRelatedresources(this.resToBeAdded[0].id, this.eventData.id));
              }
            } else if (this.resToBeAdded?.length === 0 && this.eventData?.relatedResources?.length > 0) {
              this.$fileObservables.push(this.eventsService.removeRelatedResource(this.eventData.id, this.eventData?.relatedResources[0]));
            } else if (this.resToBeAdded.length > 0 && (this.eventData?.relatedResources === null || this.eventData?.relatedResources.length === 0)) {
              this.$fileObservables.push(this.eventsService.addRelatedresources(this.resToBeAdded[0].id, this.eventData.id));
            }
            if (this.$fileObservables.length > 0) {
              (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.forkJoin)(...this.$fileObservables).subscribe(forkRes => {
                this.toastService.showToast('succes', 'Eveniment modifcat cu succes', 'success');
                this.router.navigate(['../../list'], {
                  relativeTo: this.route
                });
                this.ticketService.ticketsList$.next([]);
                this.ticketService.refreshTicketList$.next(false);
                this.ticketService.eventId$.next(undefined);
                this.ticketService.deleteArray$.next([]);
              }, () => {
                this.allowedToSubmitEvent = true;
                this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
              });
            } else {
              this.toastService.showToast('succes', 'Eveniment modifcat cu succes', 'success');
              this.router.navigate(['../../list'], {
                relativeTo: this.route
              });
            }
          } else {
            this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
          }
        }, error => {
          this.allowedToSubmitEvent = true;
          this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
        });
      } else {
        this.eventForm.get('domain').setValue(this.domainIdForEventCategory);
        this.eventForm.get('categoryId').setValue(this.categoryEvent);
        this.eventForm.get('attributes').setValue(this.attributesArray);
        this.eventForm.get('bookingType').setValue(this.bookingTypeForCurrentTemplate);
        const formToSend = {
          ...this.eventForm.value,
          startDate: this.datePipe.transform(this.eventForm.value.startDate, 'yyyy-MM-dd') + 'T' + this.datePipe.transform(this.eventForm.value.startDate, 'HH:mm') + 'Z',
          endDate: this.datePipe.transform(this.eventForm.value.endDate, 'yyyy-MM-dd') + 'T' + this.datePipe.transform(this.eventForm.value.endDate, 'HH:mm') + 'Z'
        };
        console.log('value', formToSend);
        const providerId = this.createResourceService.providerData$.getValue()?.providerId && (this.isStaff || this.isAdmin) ? this.createResourceService.providerData$.getValue().providerId : null;
        this.eventsService.addResource(this.eventForm.value, providerId).subscribe(res => {
          console.log(res);
          if (res.success) {
            //add tickets
            if (this.ticketService.ticketsList$.getValue().length > 0) {
              const ticketList = this.ticketService.ticketsList$.getValue();
              ticketList.forEach(ticket => {
                this.$fileObservables.push(this.ticketService.createTicket(res.reason, ticket));
              });
            }
            if (this.thumbnailFile) {
              const thumbnailData = new FormData();
              thumbnailData.append('file', this.thumbnailFile);
              this.$fileObservables.push(this.eventsService.uploadResourceImage(res.reason, thumbnailData));
            }
            if (this.galleryFiles.length > 0) {
              const imagesData = new FormData();
              this.galleryFiles.forEach(galleryFile => {
                imagesData.append('files', galleryFile);
              });
              this.$fileObservables.push(this.eventsService.uploadDocAttachements(res.reason, 'image', imagesData));
            }
            // if(this.dataSourceRelated.length > 0){
            //     const resourceIds = [];
            //     this.dataSourceRelated.forEach(res => {
            //         resourceIds.push(res.id);
            //     })
            //     this.$fileObservables.push(this.eventsService.addRelatedresources(res.reason, resourceIds));
            // }
            if (this.resToBeAdded.length > 0) {
              this.$fileObservables.push(this.eventsService.addRelatedresources(res.reason, this.resToBeAdded[0].id));
            }
            if (this.$fileObservables.length > 0) {
              console.log('avem si alte chestii de rulat');
              (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.forkJoin)(...this.$fileObservables).subscribe(() => {
                this.toastService.showToast('succes', 'Eveniment adaugat cu succes', 'success');
                // this.router.navigate(['/private/staff/events/list']);
                this.ticketService.ticketsList$.next([]);
                this.ticketService.eventId$.next(undefined);
                if (this.isAdmin) {
                  console.log('sunt admin dc nu plec');
                  this.router.navigate(['/private/admin/events/list']);
                } else if (this.isStaff) {
                  this.router.navigate(['/private/staff/events/list']);
                } else if (this.isProvider) {
                  this.router.navigate(['/private/provider/events/list']);
                } else {
                  console.log('ce sunt? nu admin dc nu plec');
                  return;
                }
              }, error => {
                console.log(error);
                this.allowedToSubmitEvent = true;
                this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
              });
            } else {
              console.log('NU avem si alte chestii de rulat');
              this.toastService.showToast('succes', 'Eveniment adaugat cu succes', 'success');
              if (this.isAdmin) {
                this.router.navigate(['/private/admin/events/list']);
              } else if (this.isStaff) {
                this.router.navigate(['/private/staff/events/list']);
              } else if (this.isProvider) {
                this.router.navigate(['/private/provider/events/list']);
              } else {
                return;
              }
            }
          } else {
            this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
          }
        }, () => {
          this.allowedToSubmitEvent = true;
          this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
        });
      }
    } else {
      this.toastService.showToast('Eroare', 'Completati campurile obligatorii', 'error');
    }
  }
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
    // this.eventsService.deleteResourceFeatureImage(this.eventData.id).subscribe((data:any)=>{
    //     console.log('imagine stearsa',data);
    // });
  }

  onImageChange(event, inputRef) {
    if (event.target.files && event.target.files[0]) {
      this.galleryUrls.push({
        fileName: event.target.files[0].name,
        filePath: undefined
      });
      this.galleryFiles.push(event.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        this.galleryUrls[this.galleryUrls.length - 1].filePath = reader.result;
        inputRef.value = null;
      };
      reader.readAsDataURL(this.galleryFiles[this.galleryFiles.length - 1]);
    }
  }
  removeImage(index) {
    this.galleryUrls.splice(index, 1);
    this.galleryFiles.splice(index, 1);
    if (this.isEditMode && this.eventData.images.length > 0) {
      this.eventData.images.splice(index, 1);
    }
  }
  clearFormControl(formControl) {
    if (formControl === 'shortDescription') {
      this.eventForm.get(formControl).patchValue('');
      return;
    }
    this.eventForm.get(formControl).patchValue(this.emptyEventData[formControl]);
  }
  //create slug suggestion
  createSlug(title) {
    const insertedTitle = title.toLocaleLowerCase();
    this.slugSuggestion = insertedTitle.split(' ').join('-');
    console.log(this.slugSuggestion);
    this.eventForm.get("slug").patchValue(this.slugSuggestion);
    // this.cdr.detectChanges();
  }

  columnSize(size) {
    switch (size) {
      case 'full_row':
        return 'col-12';
      case 'half_row':
        return 'col-12 col-lg-6';
      default:
        return 'col-12';
    }
  }
  //Takes FORM values and creates attributes array
  makeAttributesForm() {
    this.attributesArray = [];
    console.log('make attrs', this.tabs);
    if (this.tabs?.length) {
      this.tabs.forEach((tab, indexTab) => {
        this.attributesArray.push({
          tabName: tab.tabName,
          tabAttributes: []
        });
        for (const control in this.form.controls) {
          tab.tabAttributes.forEach(attribute => {
            if (attribute.name === control) {
              this.attributesArray[indexTab].tabAttributes.push({
                attributeId: attribute.id,
                attributeValue: attribute.valueType === 'datetime' ? this.datePipe.transform(this.form.get(control).value, "yyyy-MM-dd") : attribute.valueType === 'multiple-select' ? this.form.get(control).value.join() : this.form.get(control).value
              });
            }
          });
        }
      });
    }
    console.log('FORM OBJ', this.attributesArray);
  }
  // -------------------------------- TICKETS -----------------------------------
  openAddModal() {
    this.dialog.open(_components_add_edit_event_ticket_add_edit_event_ticket_component__WEBPACK_IMPORTED_MODULE_10__.AddEditEventTicketComponent, {
      width: '1500px',
      height: '750px',
      data: undefined
    });
  }
  openEditModal(ticket) {
    this.dialog.open(_components_add_edit_event_ticket_add_edit_event_ticket_component__WEBPACK_IMPORTED_MODULE_10__.AddEditEventTicketComponent, {
      width: '1500px',
      height: '750px',
      data: {
        ticket: ticket
      }
    });
  }
  openDeleteModal(ticket, index) {
    this.dialog.open(_components_delete_event_ticket_delete_event_ticket_component__WEBPACK_IMPORTED_MODULE_12__.DeleteEventTicketComponent, {
      width: '720px',
      height: '400px',
      data: {
        ticket: ticket,
        index: index
      }
    });
  }
  ticketsList() {
    this.ticketService.ticketsList$.next([]);
    // this.ticketService.refreshTicketList$.next(false);
    if (this.ticketService.eventId$.getValue()) {
      this.ticketService.getTicketList(this.ticketService.eventId$.getValue()).subscribe({
        next: ticketList => {
          if (this.ticketService.ticketsList$.getValue().length === 0) {
            this.ticketService.ticketsList$.next(ticketList);
            this.ticketList = ticketList;
          } else {
            this.ticketList = ticketList;
          }
        }
      });
    }
    this.ticketService.refreshTicketListData().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: () => {
        // Check if you are on EDIT Mode
        if (this.ticketService.eventId$.getValue()) {
          this.ticketList = this.ticketService.ticketsList$.getValue();
        } else {
          // Get Room List
          this.ticketService.ticketListData().subscribe({
            next: ticketList => {
              this.ticketList = ticketList;
            }
          });
        }
      }
    });
  }
  getCountries() {
    this.locationService.getAllCountries().subscribe({
      next: countries => {
        this.countries = countries;
      }
    });
  }
  getCities(event) {
    console.log('CITY', event);
    if (event?.value) {
      this.eventForm.get('geographicalCoordinates.latitude').patchValue(0);
      this.eventForm.get('geographicalCoordinates.longitude').patchValue(0);
    }
    const country = {
      country: event?.value ? event.value : event
    };
    if (country) {
      this.locationService.getCityFilter(0, -1, null, null, country).subscribe({
        next: cities => {
          console.log(cities);
          this.cities = cities.content;
        }
      });
    }
  }
  getCoordinates(event) {
    const name = {
      name: event.value
    };
    if (name) {
      this.locationService.getCityFilter(0, -1, null, null, name).subscribe({
        next: city => {
          this.eventForm.get('geographicalCoordinates.latitude').patchValue(city.content[0].geographicalCoordinates.latitude);
          this.eventForm.get('geographicalCoordinates.longitude').patchValue(city.content[0].geographicalCoordinates.longitude);
        }
      });
    }
  }
  applySort(event) {
    console.log(event);
    if (event.direction) {
      this.dir = event.direction;
    }
    this.applyFilter();
  }
  // list of resources from backend
  applyFilter(event) {
    console.log('APPLY FILTER 1');
    const filterObject = {
      title: this.eventForm.value.filterTitleChoose !== '' ? this.eventForm.value.filterTitleChoose : null,
      userId: this.isProvider ? this.user.id : this.createResourceService.providerData$.getValue()?.providerId,
      excludedCategories: [this.eventCategoryId, this.jobCategoryId]
    };
    console.log('FILTER OBJ', filterObject);
    this.eventsService.listResourceFiltered(this.pageNumberChoose - 1, this.pageSizeChoose, this.sorting, this.dir, filterObject).subscribe(res => {
      console.log('marimea paginii din apply FIlter', this.pageSizeChoose);
      this.paginationInfo = res;
      this.totalElements = res["totalElements"];
      this.dataSourceChoose = res["content"];
      console.log(this.resToBeAdded);
    });
    //get total number of elements
    // this.paginationInit(filterObject);
  }

  pageChanged(event) {
    this.pageNumberChoose = event.pageIndex + 1;
    this.pageSizeChoose = event.pageSize;
    this.applyFilter();
  }
  //End resources from backend
  //Related resources
  // applyFilterForRelatedRes(event?) {
  //     this.dataSourceRelated = [...this.resToBeAdded];
  //
  //     console.log('DIN EVENT', this.resToBeAdded)
  // }
  // pageChangedForRelatedRes(event) {
  //     console.log(event);
  //     this.pageNumberRelated = event.pageIndex + 1;
  //     this.pageSizeRelated = event.pageSize;
  //     this.applyFilterForRelatedRes();
  // }
  addToRelatedRes(resource) {
    console.log(resource);
    console.log(this.resToBeAdded);
    if (this.resToBeAdded.length > 0) {
      this.toastService.showToast('Error', 'Exista deja o resursa asociata acestui eveniment!', "error");
    } else {
      this.resToBeAdded.push(resource);
    }
    // const resourcesFiltered = this.resToBeAdded.find(res => res.id === resource.id);
    // // console.log(resourcesFiltered);
    // if(resourcesFiltered){
    //     this.toastService.showToast('Error', 'Aceasta resursa este deja asociata!', "error");
    // }else if (!resourcesFiltered) {
    //     this.resToBeAdded.push(resource);
    //     // this.pageNumberRelated = this.resToBeAdded.length;
    //     // this.totalElementsRelated = this.resToBeAdded.length;
    //     // this.applyFilterForRelatedRes();
    // }
  }

  removeResource(resource) {
    const resourceFiltered = this.dataSourceRelated.filter(res => res.id !== resource);
    console.log('REMOVE', resourceFiltered);
    this.resToBeAdded = [...resourceFiltered];
    this.totalElementsRelated = this.resToBeAdded.length;
    // this.applyFilterForRelatedRes();
  }

  removeRelatedResource() {
    this.resToBeAdded = [];
  }
  startDateChanged(event, nextElementRef) {
    // TODO: min end date ramane blocat pe alta zi decat cea corecta
    /*this.nextDay = moment(event.value).clone().add(1, 'days');
    this.newAvailability.get('endDate').patchValue(this.nextDay);
    if (!moment(event.value).isSameOrAfter(this.nextDay, 'day')) return;*/
    nextElementRef.open();
  }
  endDateChanged(event) {
    // this.nextDay = moment(event.value).clone();
  }
  checkTermsAndConditions() {
    this.usersService.getCurrentSetting().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: settings => {
        console.log('setari', settings);
        this.userAcceptedTerms = settings?.acceptTermsAndConditions;
      }
    });
  }
  ngOnDestroy() {
    this.createResourceService.providerData$.next(undefined);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.Router
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder
  }, {
    type: _shared_services_events_service__WEBPACK_IMPORTED_MODULE_4__.EventsService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_6__.SystemSettingsService
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_7__.ResourcesService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService
  }, {
    type: _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_8__.TemplatesService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_26__.DatePipe
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_9__.UserDataService
  }, {
    type: _services_event_ticket_service__WEBPACK_IMPORTED_MODULE_11__.EventTicketService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog
  }, {
    type: _shared_services_location_service__WEBPACK_IMPORTED_MODULE_13__.LocationService
  }, {
    type: _shared_services_createResource_service__WEBPACK_IMPORTED_MODULE_14__.CreateResourceService
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_6__.SystemSettingsService
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_7__.ResourcesService
  }];
  static #_2 = this.propDecorators = {
    benefitInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.ViewChild,
      args: ['benefitInput']
    }]
  };
};
AddEditEventComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_28__.Component)({
  selector: 'app-add-edit-event',
  template: _add_edit_event_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.DatePipe],
  styles: [(_add_edit_event_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AddEditEventComponent);


/***/ }),

/***/ 70449:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/events/components/add-edit-event-ticket/add-edit-event-ticket.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditEventTicketComponent": () => (/* binding */ AddEditEventTicketComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_event_ticket_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-event-ticket.component.html?ngResource */ 7864);
/* harmony import */ var _add_edit_event_ticket_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-event-ticket.component.scss?ngResource */ 8121);
/* harmony import */ var _add_edit_event_ticket_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_edit_event_ticket_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _services_event_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/event-ticket.service */ 76945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);








let AddEditEventTicketComponent = class AddEditEventTicketComponent {
  constructor(fb, ticketService, dialogRef, ticketData) {
    this.fb = fb;
    this.ticketService = ticketService;
    this.dialogRef = dialogRef;
    this.ticketData = ticketData;
    this.isEditMode = false;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    console.log('ticket data', this.ticketData);
    this.formInit();
    this.checkIfEdit();
    console.log(this.ticketService.eventId$.getValue());
    this.bookingPoliciesValueChanges();
  }
  bookingPoliciesValueChanges() {
    const bookingPolicies = this.ticketForm.get('bookingPolicies');
    bookingPolicies.valueChanges.pipe(
    // distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe(newValues => {
      for (const bookingType in newValues) {
        if (newValues[bookingType] === true) {
          if (!this.previousBookingType) {
            this.previousBookingType = bookingType;
            this.selectedBookingType = bookingType;
          } else if (bookingType !== this.selectedBookingType) {
            this.previousBookingType = this.selectedBookingType;
            this.selectedBookingType = bookingType;
            break;
          }
        }
      }
      if (this.previousBookingType && this.selectedBookingType && this.previousBookingType !== this.selectedBookingType) {
        bookingPolicies.get(this.previousBookingType).patchValue(false, {
          emitEvent: false
        });
        if (this.previousBookingType === 'depositRequired') {
          if (bookingPolicies.get('depositRequiredPercentage').disabled) {
            bookingPolicies.get('depositRequiredAmount').patchValue(0, {
              emitEvent: false
            });
          }
          if (bookingPolicies.get('depositRequiredAmount').disabled) {
            bookingPolicies.get('depositRequiredPercentage').patchValue(0, {
              emitEvent: false
            });
          }
        }
        if (this.previousBookingType === 'advancePartialPayment') {
          bookingPolicies.get('advancePartialPaymentPercentage').patchValue(0, {
            emitEvent: false
          });
        }
      }
    });
  }
  formInit() {
    this.ticketForm = this.fb.group({
      id: [this.ticketData ? undefined : Math.random().toString(36).substring(2, 17)],
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      regularPrice: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      // weekendPrice: [null, Validators.required],
      // hasSeat: [false],
      // ticketsForBooking: this.fb.array([]),
      limit: [true],
      ticketsLimit: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0)],
      bookingPolicies: this.fb.group({
        depositRequired: false,
        advancePartialPayment: false,
        advanceFullPayment: false,
        depositRequiredPercentage: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^(?:[1-9][0-9]?|100)$')])],
        depositRequiredAmount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[1-9]\\d*$')])],
        advancePartialPaymentPercentage: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^(?:[1-9][0-9]?|100)$')])]
      }, {
        validators: this.requireCheckboxesToBeCheckedValidator()
      })
    });
  }
  requireCheckboxesToBeCheckedValidator(minRequired = 1) {
    return function validate(formGroup) {
      let checked = 0;
      console.log('se apeleaza 2', formGroup);
      Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.controls[key];
        if (control.value === true) {
          checked++;
        }
      });
      if (checked < minRequired) {
        return {
          requireCheckboxesToBeChecked: true
        };
      }
      return null;
    };
  }
  checkIfEdit() {
    if (this.ticketData) {
      this.isEditMode = true;
      this.ticketForm.patchValue(this.ticketData.ticket);
      if (this.ticketData.ticket.bookingPolicies?.advanceFullPayment) {
        this.previousBookingType = 'advanceFullPayment';
        this.selectedBookingType = 'advanceFullPayment';
        this.bookingPolicyEdit(true, 'advanceFullPayment');
      }
      if (this.ticketData.ticket.bookingPolicies?.depositRequiredPercentage > 0) {
        this.ticketForm.get('bookingPolicies.depositRequired').patchValue(true);
        this.ticketForm.get('bookingPolicies.advancePartialPaymentPercentage').disable();
        this.previousBookingType = 'depositRequired';
        this.selectedBookingType = 'depositRequired';
        this.checkDepositType('percentage');
      }
      if (this.ticketData.ticket.bookingPolicies?.depositRequiredAmount > 0) {
        this.ticketForm.get('bookingPolicies.depositRequired').patchValue(true);
        this.ticketForm.get('bookingPolicies.advancePartialPaymentPercentage').disable();
        this.previousBookingType = 'depositRequired';
        this.selectedBookingType = 'depositRequired';
        this.checkDepositType('amount');
      }
      if (this.ticketData.ticket.bookingPolicies?.advancePartialPaymentPercentage > 0) {
        this.ticketForm.get('bookingPolicies.advancePartialPayment').patchValue(true);
        this.ticketForm.get('bookingPolicies.depositRequiredAmount').disable();
        this.ticketForm.get('bookingPolicies.depositRequiredPercentage').disable();
        this.previousBookingType = 'advancePartialPayment';
        this.selectedBookingType = 'advancePartialPayment';
      }
    } else {
      this.isEditMode = false;
    }
  }
  confirm() {
    this.ticketForm.markAllAsTouched();
    if (this.ticketForm.valid) {
      const ticket = {
        ...this.ticketForm.value,
        limit: this.ticketForm.value?.ticketsLimit > 0 ? true : false
      };
      if (this.isEditMode) {
        this.updateTicket(ticket);
      } else {
        this.createTicket(ticket);
      }
    }
  }
  createTicket(ticket) {
    if (this.ticketService.eventId$.getValue()) {
      //EDIT EVENT
      ticket = {
        ...ticket,
        state: 'add'
      };
      this.ticketService.addTicketToList(ticket);
      this.ticketService.refreshTicketList$.next(true);
      console.log(this.ticketService.ticketsList$.getValue());
      this.close();
    } else {
      //ADD EVENT
      this.ticketService.addTicketToList(ticket);
      this.close();
      console.log(this.ticketService.ticketsList$.getValue());
    }
  }
  updateTicket(ticket) {
    if (this.ticketService.eventId$.getValue()) {
      //EDIT EVENT
      if (this.ticketData.ticket.state === 'add') {
        // Get tickets List
        const ticketList = this.ticketService.ticketsList$.getValue();
        // Find selected ticket by index
        const selectedIndex = ticketList.findIndex(obj => obj.id === ticket.id);
        ticket = {
          ...ticket,
          state: 'add'
        };
        // Check if the ticket was found and update
        if (selectedIndex !== -1) {
          ticketList[selectedIndex] = ticket;
          this.ticketService.ticketsList$.next(ticketList);
        } else {
          console.log('ticket not found');
        }
        // Close Modal
        this.close();
      } else {
        // Get tickets List
        const ticketList = this.ticketService.ticketsList$.getValue();
        // Find selected ticket by index
        const selectedIndex = ticketList.findIndex(obj => obj.id === ticket.id);
        ticket = {
          ...ticket,
          state: 'update'
        };
        // Check if the ticket was found and update
        if (selectedIndex !== -1) {
          ticketList[selectedIndex] = ticket;
          this.ticketService.ticketsList$.next(ticketList);
        } else {
          console.log('ticket not found');
        }
        // Close Modal
        this.close();
      }
    } else {
      //ADD EVENT
      // Get tickets List
      const ticketList = this.ticketService.ticketsList$.getValue();
      // Find selected ticket by index
      const selectedIndex = ticketList.findIndex(obj => obj.id === ticket.id);
      // Check if the ticket was found and update
      if (selectedIndex !== -1) {
        ticketList[selectedIndex] = ticket;
        this.ticketService.ticketsList$.next(ticketList);
      } else {
        console.log('ticket not found');
      }
      // Close Modal
      this.close();
    }
  }
  bookingPolicyEdit(event, type) {
    if (event && type === 'depositRequired') {
      this.ticketForm.get('bookingPolicies').get('depositRequiredAmount')?.enable();
      this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage')?.enable();
      this.ticketForm.get('bookingPolicies').get('depositRequiredAmount')?.setValue(0);
      this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage')?.setValue(0);
      this.ticketForm.get('bookingPolicies').get('advanceFullPayment')?.setValue(false);
      this.ticketForm.get('bookingPolicies').get('advancePartialPayment')?.setValue(false);
      this.ticketForm.get('bookingPolicies').get('advancePartialPaymentPercentage')?.setValue(0);
      this.ticketForm.get('bookingPolicies').get('advancePartialPaymentPercentage').disable();
    }
    if (event && type === 'advanceFullPayment') {
      this.ticketForm.get('bookingPolicies').get('depositRequired')?.setValue(false);
      this.ticketForm.get('bookingPolicies').get('depositRequiredAmount')?.setValue(0);
      this.ticketForm.get('bookingPolicies').get('depositRequiredAmount')?.disable();
      this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage')?.setValue(0);
      this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage')?.disable();
      this.ticketForm.get('bookingPolicies').get('advancePartialPayment')?.setValue(false);
      this.ticketForm.get('bookingPolicies').get('advancePartialPaymentPercentage')?.setValue(0);
      this.ticketForm.get('bookingPolicies').get('advancePartialPaymentPercentage')?.disable();
    }
    if (event && type === 'advancePartialPayment') {
      this.ticketForm.get('bookingPolicies').get('advanceFullPayment')?.setValue(false);
      this.ticketForm.get('bookingPolicies').get('advancePartialPaymentPercentage')?.enable();
      this.ticketForm.get('bookingPolicies').get('advancePartialPaymentPercentage')?.setValue(0);
      this.ticketForm.get('bookingPolicies').get('depositRequired')?.setValue(false);
      this.ticketForm.get('bookingPolicies').get('depositRequiredAmount')?.setValue(0);
      this.ticketForm.get('bookingPolicies').get('depositRequiredAmount')?.disable();
      this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage')?.setValue(0);
      this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage')?.disable();
    }
  }
  checkDepositType(type) {
    if (this.ticketForm.get('bookingPolicies').get('depositRequired').value) {
      if (type === 'percentage') {
        if (this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage').value > 0) {
          this.ticketForm.get('bookingPolicies').get('depositRequiredAmount').patchValue(0);
          this.ticketForm.get('bookingPolicies').get('depositRequiredAmount').disable();
        } else if (this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage').value === 0 || !this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage').value) {
          this.ticketForm.get('bookingPolicies').get('depositRequiredAmount').enable();
        }
      } else if (type === 'amount') {
        if (this.ticketForm.get('bookingPolicies').get('depositRequiredAmount').value > 0) {
          this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage').patchValue(0);
          this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage').disable();
        } else if (this.ticketForm.get('bookingPolicies').get('depositRequiredAmount').value === 0 || !this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage').value) {
          this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage').enable();
        }
      }
    }
  }
  depositCheck(event) {
    console.log('depozit check', event);
    if (!event.checked) {
      this.ticketForm.get('bookingPolicies').get('depositRequiredPercentage').patchValue(0);
    }
  }
  advancePaymentCheck(event) {
    if (!event.checked) {
      this.ticketForm.get('bookingPolicies').get('advancePartialPaymentPercentage').patchValue(0);
    }
  }
  close() {
    this.dialogRef.close();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: _services_event_ticket_service__WEBPACK_IMPORTED_MODULE_2__.EventTicketService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA]
    }]
  }];
};
AddEditEventTicketComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-add-edit-event-ticket',
  template: _add_edit_event_ticket_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_add_edit_event_ticket_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddEditEventTicketComponent);


/***/ }),

/***/ 75671:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/events/components/delete-event-ticket/delete-event-ticket.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteEventTicketComponent": () => (/* binding */ DeleteEventTicketComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_event_ticket_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-event-ticket.component.html?ngResource */ 5655);
/* harmony import */ var _delete_event_ticket_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-event-ticket.component.scss?ngResource */ 91834);
/* harmony import */ var _delete_event_ticket_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_delete_event_ticket_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _services_event_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/event-ticket.service */ 76945);






let DeleteEventTicketComponent = class DeleteEventTicketComponent {
  constructor(ticketService, dialogRef, ticketData) {
    this.ticketService = ticketService;
    this.dialogRef = dialogRef;
    this.ticketData = ticketData;
  }
  ngOnInit() {
    this.currentTicket = this.ticketData.ticket;
  }
  close() {
    this.dialogRef.close();
  }
  deleteTicket() {
    //chef if you are on EDIT RESOURCE
    if (this.ticketService.eventId$.getValue()) {
      //check if you want to delete a room added now
      if (this.ticketData.ticket.state === 'add') {
        // Get Room List
        const ticketList = this.ticketService.ticketsList$.getValue();
        // Exclude the room by id
        const filteredTickets = ticketList.filter(ticket => ticket.id !== this.ticketData.ticket.id);
        // Check if a room was deleted and update the array
        if (filteredTickets.length !== ticketList.length) {
          this.ticketService.ticketsList$.next(filteredTickets);
          this.ticketService.refreshTicketList$.next(true);
          this.close();
        } else {
          console.log(`Room not found`);
        }
      } else {
        //just move the ticket in the delete array
        const ticketList = this.ticketService.ticketsList$.getValue();
        // Exclude the room by id
        const filteredTickets = ticketList.filter(ticket => ticket.id !== this.ticketData.ticket.id);
        // Check if a room was deleted and update the array
        if (filteredTickets.length !== ticketList.length) {
          this.ticketService.ticketsList$.next(filteredTickets);
          this.ticketService.addTicketToDeleteArray(this.ticketData.ticket);
          this.ticketService.refreshTicketList$.next(true);
          this.close();
        }
      }
    } else {
      //on CREATE RESOURCE
      // Get ticket List
      const ticketList = this.ticketService.ticketsList$.getValue();
      // Exclude the ticket by id
      const filteredTickets = ticketList.filter(ticket => ticket.id !== this.ticketData.ticket.id);
      // Check if a room was deleted and update the array
      if (filteredTickets.length !== ticketList.length) {
        this.ticketService.ticketsList$.next(filteredTickets);
      } else {
        console.log(`Room not found`);
      }
      console.log('DELETE');
      this.dialogRef.close();
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_event_ticket_service__WEBPACK_IMPORTED_MODULE_2__.EventTicketService
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
DeleteEventTicketComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-delete-event-ticket',
  template: _delete_event_ticket_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_delete_event_ticket_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DeleteEventTicketComponent);


/***/ }),

/***/ 67107:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/events/components/dynamic-attributes/dynamic-attributes.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicAttributesComponent": () => (/* binding */ DynamicAttributesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dynamic_attributes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-attributes.component.html?ngResource */ 61819);
/* harmony import */ var _dynamic_attributes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-attributes.component.scss?ngResource */ 48590);
/* harmony import */ var _dynamic_attributes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dynamic_attributes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let DynamicAttributesComponent = class DynamicAttributesComponent {
  constructor() {}
  ngOnInit() {
    // console.log(this.control);
    console.log(this.control.name);
  }
  changeValue(event) {
    let checked = event.target.checked;
    this.control.setValue(checked ? 'true' : 'false');
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    control: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    inputFormData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
DynamicAttributesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-dynamic-attributes',
  template: _dynamic_attributes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dynamic_attributes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DynamicAttributesComponent);


/***/ }),

/***/ 1773:
/*!**********************************************************************!*\
  !*** ./src/app/features/events/events-list/events-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsListComponent": () => (/* binding */ EventsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _events_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-list.component.html?ngResource */ 46709);
/* harmony import */ var _events_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-list.component.scss?ngResource */ 26993);
/* harmony import */ var _events_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_events_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/events.service */ 18100);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _shared_locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/locations */ 96829);
/* harmony import */ var _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/_services/system-settings.service */ 42912);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/_services/templates.service */ 71453);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/_services/location.service */ 63712);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);




















let EventsListComponent = class EventsListComponent {
  constructor(eventsService, modalService, toastService, userService, locations, systemService, resourceService, translate, templateService, datePipe, locationService) {
    this.eventsService = eventsService;
    this.modalService = modalService;
    this.toastService = toastService;
    this.userService = userService;
    this.locations = locations;
    this.systemService = systemService;
    this.resourceService = resourceService;
    this.translate = translate;
    this.templateService = templateService;
    this.datePipe = datePipe;
    this.locationService = locationService;
    this.displayedColumns = ['id', 'name', 'date', 'location', 'status', 'views', 'actions'];
    this.dataSource = [];
    this.attributesReviewed = [];
    this.pageSizeArray = [10, 25, 100];
    this.sorting = "lastUpdateDate";
    this.dir = 'desc';
    this.eventsList = [];
    this.isAdvanced = false;
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.COMMA];
    this.benefitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('');
    this.benefits = [];
    this.allBenefits = ['Parcare gratuita', 'Aer conditionat', 'Bauturi gratis', 'Cabina foto', 'Candy bar'];
    this.countries = [];
    this.cities = [];
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('')
    });
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    this.filteredBenefits = this.benefitCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(benefit => benefit ? this._filter(benefit) : this.allBenefits.slice()));
  }
  ngOnInit() {
    this.getCurrentUser();
    this.attributesArray = [];
    this.pageNumber = 0;
    this.pageSize = 10;
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
    this.getCountries();
    // this.countries = this.locations.countries;
    // this.getEventsCategory();
    this.changeStatusFormInit();
  }
  test() {
    console.log(this.dateTimeFilter);
  }
  //get user an role, to check wich event you can edit
  getCurrentUser() {
    this.userService.getCurrentUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.ngUnsubscribe)).subscribe(user => {
      this.currentUserId = user.id;
      this.currentUserRole = user.roles[0];
      console.log('ID SI ROL', this.currentUserId, this.currentUserRole);
      this.getEventsCategory();
    });
  }
  getEventsCategory() {
    this.systemService.getSystemSetting().subscribe(settings => {
      console.log('setting', settings);
      this.categoryEventsId = settings.eventCategoryId;
      this.applyFilter();
      // this.getDomain(settings.eventCategoryId);
      this.getResourcesTypesByCategoryId(settings.eventCategoryId);
    });
  }
  getDomain(idCategory) {
    this.resourceService.getResourceCategoryById(idCategory).subscribe(category => {
      this.domainIdForEventCategory = category.domainId;
    });
  }
  getResourcesTypesByCategoryId(idCategory) {
    this.resourceService.getAllResourceTypesByResourceCategory(idCategory).subscribe(resourceTypes => {
      // console.log('TIPURI DE RESURSA', resourceTypes);
      this.resourceTypes = resourceTypes;
    });
  }
  changeStatusFormInit() {
    this.changeStatusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required)
    });
  }
  selectedResourceType(value) {
    console.log(value);
    const filterObj = {
      resourceTypeId: value
    };
    this.templateService.listResourceTemplateFiltered(0, -1, '', '', filterObj).subscribe(template => {
      console.log('list template dupa restype', template);
      if (template.content.length === 1) {
        this.currentTemplateId = template.content[0].id;
        this.currentTemplate = template.content[0];
        console.log('list template dupa restype 2', template.content[0].id);
        this.getTemplateData(template.content[0].id);
      } else {
        this.attributesArray = [];
      }
    });
  }
  getTemplateData(templateId) {
    this.resourceService.getAttributesFromTemplate(templateId).subscribe(attributeTabs => {
      console.log('array cu taburile de atribute', attributeTabs);
      this.tabs = attributeTabs;
      attributeTabs.forEach(attributeTab => {
        this.createForm(attributeTab);
      });
    });
  }
  createForm(tab) {
    // this.attributesFilterArray= [];
    for (let inputField of tab.tabAttributes) {
      console.log('inputField', inputField);
      if (inputField.usedInFiltering) {
        this.attributesArray.push(inputField);
        if (inputField.valueType === 'toggle') {
          this.form.addControl(inputField.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(inputField.attributeValue ? inputField.attributeValue : 'false'));
        }
        this.form.addControl(inputField.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(inputField.attributeValue ? inputField.attributeValue : '', inputField.propertyRequired ? _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required : null));
      }
    }
    console.log('form', this.form.value);
  }
  makeAttributesArrayForFilter() {
    this.attributesFilterArray = [];
    console.log(this.form);
    for (const control in this.form.controls) {
      console.log('control', this.form.get(control).value);
      if (this.form.get(control).value !== '') {
        const type = typeof this.form.get(control).value;
        this.attributesFilterArray.push({
          attributeName: control,
          attributeValue: type === "object" ? this.datePipe.transform(this.form.get(control).value, "yyyy-MM-dd") : this.form.get(control).value
        });
      }
    }
    console.log('FORM OBJ', this.attributesFilterArray);
  }
  // selectedCountry(event) {
  //     console.log('TARA', event.value);
  //     this.cities = this.locations.countries[event.value].cities;
  //     console.log(this.cities);
  // }
  advancedClick() {
    this.isAdvanced = !this.isAdvanced;
  }
  callSubmitButton(event) {
    event.preventDefault();
    if (event.key === "Enter") this.applyFilter();
  }
  applySort(event) {
    console.log(event);
    if (event.direction) {
      this.dir = event.direction;
      if (event.active === 'location') {
        this.sorting = 'city';
      } else if (event.active === 'name') {
        this.sorting = 'title';
      } else {
        this.sorting = event.active;
      }
    }
    this.applyFilter();
  }
  applyFilter(event) {
    this.attributesFilterArray = [];
    //  this.pageNumber = 0;
    this.makeAttributesArrayForFilter();
    const filterObject = {
      title: this.filterTitle !== '' ? this.filterTitle : null,
      country: this.filterCountry !== undefined ? this.filterCountry : null,
      city: this.filterCity !== '' ? this.filterCity : null,
      categoryId: this.categoryEventsId,
      resourceTypeId: this.filterEventType !== '' ? this.filterEventType : null,
      status: this.filterStatus !== '' ? this.filterStatus : null,
      // sharedExperience: this.filterSharedExperience !== null ? this.filterSharedExperience : null,
      attributes: this.attributesFilterArray.length === 0 ? undefined : this.attributesFilterArray,
      // bookingType: 'ticketBooking',
      userId: this.currentUserRole === 'ROLE_PROVIDER' ? this.currentUserId : null
    };
    this.eventsService.listResourceFiltered(this.pageNumber, this.pageSize, this.sorting, this.dir, filterObject).subscribe(res => {
      // console.log('marimea paginii din apply FIlter', this.pageSize);
      this.paginationInfo = res;
      this.totalElements = res["totalElements"];
      this.dataSource = res["content"];
      console.log('totalElements', this.totalElements);
      // console.log(this.dataSource);
    });
    // //get total number of elements
    // this.paginationInit(filterObject);
  }

  pageChanged(event) {
    console.log(event);
    this.attributesFilterArray = [];
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.makeAttributesArrayForFilter();
    // console.log('SCHIMBARE PAGINA EVENT:',event);
    // if (event) {
    //     this.dir = event.direction;
    // }
    this.applyFilter();
  }
  openModal(templateRef, idUser) {
    this.userName = '';
    this.modalService.open(templateRef);
    this.userService.getUserById(idUser).subscribe(data => {
      this.userName = data.firstName + ' ' + data.lastName;
    });
  }
  deleteResource(resourceId) {
    // console.log(resourceId);
    this.eventsService.deleteResource(resourceId).subscribe(res => {
      // console.log(res);
      if (res.success) {
        this.toastService.showToast('Succes', 'Evenimentul a fost sters', 'success');
        this.modalService.closeAll();
        this.applyFilter();
      }
    }, () => {
      this.toastService.showToast('Eroare', 'Eroare de la server', 'error');
    });
  }
  openModalData(templateRef, idUser, rowStatus) {
    this.changeStatusForm.patchValue({
      status: rowStatus
    });
    this.userName = '';
    console.log(this.changeStatusForm.value.status);
    this.modalService.open(templateRef);
    this.userService.getUserById(idUser).subscribe(data => {
      this.userName = data.firstName + ' ' + data.lastName;
    });
  }
  changeEventStatus(resourceId, status) {
    console.log('status de schimbat', status);
    this.eventsService.changeResourceStatus(resourceId, status).subscribe(resp => {
      console.log('dupa changestatus', resp);
      if (resp.success) {
        this.toastService.showToast('Success', 'Statusul a fost modificat!', "success");
        if (status === 'active') {
          this.eventsService.createResourceNotification(resourceId).subscribe(res => {
            console.log('res notif', res);
          });
        }
        this.applyFilter();
        this.modalService.closeAll();
      }
    }, error => {
      console.log(error.error.reason);
      if (error.error.reason === "invalidId") {
        this.toastService.showToast('Error', 'Id-ul evenimentului este invalid', 'error');
      } else if (error.error.reason === "notLoggedIn" || error.error.reason === "tokenExpired") {
        this.toastService.showToast('Error', 'Pentru a finaliza aceasta actiune trebuie sa fiti logat!', 'error');
      } else {
        this.toastService.showToast('Error', 'Server error!', 'error');
      }
    });
  }
  add(event) {
    const value = (event.value || '').trim();
    if (value) {
      this.benefits.push(value);
    }
    // Clear the input value
    event.chipInput.clear();
    this.benefitCtrl.setValue(undefined);
  }
  remove(benefit) {
    const index = this.benefits.indexOf(benefit);
    if (index >= 0) {
      this.benefits.splice(index, 1);
    }
  }
  selected(event) {
    this.benefits.push(event.option.viewValue);
    this.benefitInput.nativeElement.value = '';
    this.benefitCtrl.setValue(null);
  }
  _filter(value) {
    const filterValue = value.toLowerCase();
    return this.allBenefits.filter(benefit => benefit.toLowerCase().includes(filterValue));
  }
  getCountries() {
    this.locationService.getAllCountries().subscribe({
      next: countries => {
        this.countries = countries;
      }
    });
  }
  getCities(event) {
    this.filterCity = "";
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
  clearFields() {
    this.pageNumber = 0;
    this.filterTitle = undefined;
    this.filterCountry = undefined;
    this.filterCity = undefined;
    this.filterEventType = undefined;
    this.filterStatus = undefined;
    this.filterStatus = undefined;
    this.attributesFilterArray = [];
    this.filterEventType = undefined;
    this.attributesArray = [];
    this.cities = [];
    this.applyFilter();
  }
  archiveResource(resourceId) {
    this.eventsService.changeResourceStatus(resourceId, "archived").subscribe({
      next: resp => {
        if (resp.success) {
          this.toastService.showToast('Success', 'Resursa a fost arhivată!', 'success');
          // this.getListType();
          this.applyFilter();
          this.modalService.closeAll();
        }
      },
      error: err => {
        console.log(err);
        if (err.error.reason === 'invalidId') {
          this.toastService.showToast('Error', 'Această resursă nu mai există în baza de date!', "error");
        }
        if (err.error.reason === 'notLoggedIn' || err.error.reason === 'tokenExpired') {
          this.toastService.showToast('Error', 'Pentru a finaliza această acțiune trebuie să fii logat!', "error");
        }
      }
    });
  }
  closeModal() {
    this.modalService.closeAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService
  }, {
    type: _shared_locations__WEBPACK_IMPORTED_MODULE_5__.Locations
  }, {
    type: _shared_services_system_settings_service__WEBPACK_IMPORTED_MODULE_6__.SystemSettingsService
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_7__.ResourcesService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService
  }, {
    type: _shared_services_templates_service__WEBPACK_IMPORTED_MODULE_8__.TemplatesService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe
  }, {
    type: _shared_services_location_service__WEBPACK_IMPORTED_MODULE_9__.LocationService
  }];
  static #_2 = this.propDecorators = {
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort]
    }],
    benefitInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
      args: ['benefitInput']
    }]
  };
};
EventsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: 'app-events-list',
  template: _events_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_shared_locations__WEBPACK_IMPORTED_MODULE_5__.Locations, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe],
  styles: [(_events_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EventsListComponent);


/***/ }),

/***/ 36764:
/*!**************************************************!*\
  !*** ./src/app/features/events/events.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsModule": () => (/* binding */ EventsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _events_list_events_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-list/events-list.component */ 1773);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _add_edit_event_add_edit_event_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-event/add-edit-event.component */ 21999);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/legacy-chips */ 59257);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 26523);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 20820);
/* harmony import */ var _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular-material-components/moment-adapter */ 73047);
/* harmony import */ var _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-event/view-event.component */ 48352);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _components_dynamic_attributes_dynamic_attributes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dynamic-attributes/dynamic-attributes.component */ 67107);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _components_add_edit_event_ticket_add_edit_event_ticket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-edit-event-ticket/add-edit-event-ticket.component */ 70449);
/* harmony import */ var _standalone_components_event_ticket_preview_event_ticket_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../standalone-components/event-ticket-preview/event-ticket-preview.component */ 6330);
/* harmony import */ var _components_delete_event_ticket_delete_event_ticket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/delete-event-ticket/delete-event-ticket.component */ 75671);
/* harmony import */ var _standalone_components_resource_card_resource_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../standalone-components/resource-card/resource-card.component */ 40462);































const routes = [{
  path: 'list',
  component: _events_list_events_list_component__WEBPACK_IMPORTED_MODULE_0__.EventsListComponent
}, {
  path: 'add',
  component: _add_edit_event_add_edit_event_component__WEBPACK_IMPORTED_MODULE_1__.AddEditEventComponent
}, {
  path: 'edit/:id',
  component: _add_edit_event_add_edit_event_component__WEBPACK_IMPORTED_MODULE_1__.AddEditEventComponent
}, {
  path: 'view/:id',
  component: _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_2__.ViewEventComponent
}, {
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
}
/*{
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
},*/];
// If using Moment
const CUSTOM_MOMENT_FORMATS = {
  parse: {
    dateInput: 'DD MM YYYY hh:mm a'
  },
  display: {
    dateInput: 'LLLL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};
let EventsModule = class EventsModule {};
EventsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_events_list_events_list_component__WEBPACK_IMPORTED_MODULE_0__.EventsListComponent, _add_edit_event_add_edit_event_component__WEBPACK_IMPORTED_MODULE_1__.AddEditEventComponent, _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_2__.ViewEventComponent, _components_dynamic_attributes_dynamic_attributes_component__WEBPACK_IMPORTED_MODULE_4__.DynamicAttributesComponent, _components_add_edit_event_ticket_add_edit_event_ticket_component__WEBPACK_IMPORTED_MODULE_6__.AddEditEventTicketComponent, _components_delete_event_ticket_delete_event_ticket_component__WEBPACK_IMPORTED_MODULE_8__.DeleteEventTicketComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_15__.MatLegacyInputModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_16__.MatLegacyTableModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_17__.MatLegacyPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_24__.MatLegacyButtonModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_25__.MatLegacySelectModule, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_26__.MatLegacyChipsModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatLegacyAutocompleteModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatLegacyCheckboxModule, _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_29__.NgxMatMomentModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_30__.NgxMatDatetimePickerModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_5__.DashboardHeaderComponent, _standalone_components_event_ticket_preview_event_ticket_preview_component__WEBPACK_IMPORTED_MODULE_7__.EventTicketPreviewComponent, _standalone_components_resource_card_resource_card_component__WEBPACK_IMPORTED_MODULE_9__.ResourceCardComponent],
  providers: [{
    provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_30__.NGX_MAT_DATE_FORMATS,
    useValue: CUSTOM_MOMENT_FORMATS
  }]
})], EventsModule);


/***/ }),

/***/ 48352:
/*!********************************************************************!*\
  !*** ./src/app/features/events/view-event/view-event.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewEventComponent": () => (/* binding */ ViewEventComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_event_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-event.component.html?ngResource */ 67814);
/* harmony import */ var _view_event_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-event.component.scss?ngResource */ 8606);
/* harmony import */ var _view_event_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_event_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/events.service */ 18100);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/resource-filter.service */ 41682);










let ViewEventComponent = class ViewEventComponent {
  constructor(route, router, eventsService, resourceFilterService, resourceService) {
    this.route = route;
    this.router = router;
    this.eventsService = eventsService;
    this.resourceFilterService = resourceFilterService;
    this.resourceService = resourceService;
    this.dataIsLoaded = false;
    // event attributes
    this.eventBenefits = [];
    this.allBenefits = ['Parcare gratuita', 'Aer conditionat', 'Bauturi gratis', 'Cabina foto', 'Candy bar'];
  }
  ngOnInit() {
    this.getEventData();
  }
  getEventData() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => {
      if (params.get('id')) {
        return this.eventsService.getResourceBySlug(params.get('id'));
      } else {
        this.router.navigate(['private']);
      }
    })).subscribe(event => {
      this.eventData = event;
      this.$otherEvents = this.eventsService.listResourceFiltered(0, 5, null, null, {
        categoryId: this.eventData.categoryId,
        status: 'active'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(pagination => pagination.content.filter(resource => resource.id !== this.eventData.id)));
      console.log('event data', this.eventData);
      this.getDomain(event.domain);
      this.domainId = event.domain;
      this.categoryId = event.categoryId;
      this.resourceTypeId = event.resourceTypeId;
      this.eventId = event.id;
      if (event.images) {
        this.selectedImage = event.images[0].filePath;
        console.log(this.selectedImage);
      }
      /*if (event.attributes) {
        event.attributes.forEach(attribute => {
          if (this.allBenefits.includes(attribute.attributeName) && attribute.attributeValue) {
            this.eventBenefits.push(attribute.attributeName);
          }
          if (attribute.attributeName === 'Data de inceput') {
            this.startTime = attribute.attributeValue;
            console.log(this.startTime);
          }
          if (attribute.attributeName === 'Data de sfarsit') {
            this.endTIme = attribute.attributeValue;
            console.log(this.endTIme);
          }
        });
      }*/
      this.dataIsLoaded = true;
    }, () => {
      this.router.navigate(['private']);
    });
  }
  navigateToEventsTicket() {
    // resetam valorile din serviciu
    this.resourceFilterService.initServiceStates();
    this.router.navigate(['client/domain', this.domainId, 'category', this.categoryId, 'resource-type', this.resourceTypeId, 'view', this.eventId], {
      queryParams: {
        book: 'ticket'
      }
    });
  }
  getDomain(domainId) {
    this.resourceService.getDomainById(domainId).subscribe({
      next: domain => {
        this.domain = domain?.nameEn;
      }
    });
  }
  changeImage(filePath) {
    this.selectedImage = filePath;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _shared_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService
  }, {
    type: _shared_services_resource_filter_service__WEBPACK_IMPORTED_MODULE_4__.ResourceFilterService
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__.ResourcesService
  }];
};
ViewEventComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-view-event',
  template: _view_event_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_view_event_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ViewEventComponent);


/***/ }),

/***/ 92821:
/*!************************************************************!*\
  !*** ./src/app/shared/_services/createResource.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateResourceService": () => (/* binding */ CreateResourceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let CreateResourceService = class CreateResourceService {
  constructor(http) {
    this.http = http;
    // refreshTicketList$ = new BehaviorSubject(false)
    this.providerData$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
  }
  /** Listeners */
  // refreshTicketListData() {
  //     return this.refreshTicketList$.asObservable();
  // }
  providerData() {
    return this.providerData$.asObservable();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
CreateResourceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], CreateResourceService);


/***/ }),

/***/ 18100:
/*!****************************************************!*\
  !*** ./src/app/shared/_services/events.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsService": () => (/* binding */ EventsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let EventsService = class EventsService {
  // private headerOptions = { headers: new HttpHeaders().set('Content-Type', 'multipart/form-data') };
  constructor(http) {
    this.http = http;
  }
  listResourceFiltered(page, size, sort, dir, filters) {
    return this.http.post('/bestinform/listResourceFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filters ? filters : {});
  }
  // addResource(resourceObj) {
  //   return this.http.post('/bestinform/addResource', resourceObj);
  // }
  addResource(data, userId) {
    if (userId) {
      return this.http.post('/bestinform/addResource?userId=' + userId, data);
    } else {
      return this.http.post('/bestinform/addResource', data);
    }
  }
  updateResource(resourceId, resourceObj) {
    return this.http.put('/bestinform/updateResource?resourceId=' + resourceId, resourceObj);
  }
  getResourceById(resourceId) {
    return this.http.get('/bestinform/getResourceById?resourceId=' + resourceId);
  }
  getResourceBySlug(resourceSlug) {
    return this.http.get('/bestinform/getResourceBySlug?slug=' + resourceSlug);
  }
  uploadResourceImage(resourceId, file) {
    return this.http.post('/bestinform/uploadResourceImage?resourceId=' + resourceId, file);
  }
  uploadDocAttachements(resourceId, type, file) {
    return this.http.post('/bestinform/uploadDocAttachments?resourceId=' + resourceId + '&type=' + type, file);
  }
  deleteResource(resourceId) {
    return this.http.delete('/bestinform/deleteResource?resourceId=' + resourceId);
  }
  changeResourceStatus(resourceId, status) {
    return this.http.put('/bestinform/changeResourceStatus?resourceId=' + resourceId + '&status=' + status, {});
  }
  addRelatedresources(targetResourceId, eventId) {
    return this.http.put('/bestinform/addRelatedResource?targetResourceId=' + targetResourceId + '&eventId=' + eventId, {});
  }
  removeRelatedResource(eventId, targetResourceId) {
    return this.http.put('/bestinform/removeRelatedResource?eventId=' + eventId + '&targetResourceId=' + targetResourceId, {});
  }
  deleteResourceFeatureImage(resourceId) {
    return this.http.delete('/bestinform/deleteResourceFeatureImage?resourceId=' + resourceId);
  }
  createResourceNotification(resourceId) {
    return this.http.post('/bestinform/createResourceNotification?resourceId=' + resourceId, {});
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
EventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], EventsService);


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

/***/ 6330:
/*!**********************************************************************************************!*\
  !*** ./src/app/standalone-components/event-ticket-preview/event-ticket-preview.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTicketPreviewComponent": () => (/* binding */ EventTicketPreviewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _event_ticket_preview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-ticket-preview.component.html?ngResource */ 81321);
/* harmony import */ var _event_ticket_preview_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-ticket-preview.component.scss?ngResource */ 69738);
/* harmony import */ var _event_ticket_preview_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_ticket_preview_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);





let EventTicketPreviewComponent = class EventTicketPreviewComponent {
  static #_ = this.propDecorators = {
    ticketData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
EventTicketPreviewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-event-ticket-preview',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
  template: _event_ticket_preview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_event_ticket_preview_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EventTicketPreviewComponent);


/***/ }),

/***/ 9984:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/events/add-edit-event/add-edit-event.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.panel-title {\n  font-size: 1.5rem;\n  color: #24398A;\n  font-weight: 600;\n}\n\n.panel-subtitle {\n  font-weight: 400;\n  font-size: 16px;\n  color: #231F20;\n}\n\n.section-title {\n  font-weight: 600;\n  font-size: 24px;\n  color: #24398A;\n}\n\n.section-content {\n  padding: 46px 100px;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n}\n\n.list-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(36, 57, 138, 0.1607843137);\n  padding: 10px 0;\n  border-radius: 8px 8px 0 0;\n}\n.list-title .title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #24398A;\n  margin: 0;\n}\n\n.list-content {\n  background-color: rgba(36, 57, 138, 0.08);\n  border-radius: 0 0 8px 8px;\n  padding: 20px;\n}\n.list-content .ticket-list .btn-delete {\n  background-color: #24398A;\n  color: #FFFFFF;\n  border-top-right-radius: 8px;\n  border: none;\n  width: 40px;\n  height: 50px;\n}\n.list-content .ticket-list .btn-edit {\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(0deg, rgba(36, 57, 138, 0.48), rgba(36, 57, 138, 0.48)), #FFFFFF;\n  color: #FFFFFF;\n  border-bottom-right-radius: 8px;\n  border: none;\n  width: 40px;\n  height: 50px;\n}\n.list-content .add-btn {\n  border-radius: 8px;\n  border: 1px dotted rgba(36, 57, 138, 0.16);\n  background-color: transparent;\n  width: 100%;\n  padding: 15px 0;\n  color: rgba(36, 57, 138, 0.16);\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.mat-expansion-panel-header {\n  height: 4.875rem;\n}\n\n.mat-expansion-panel-header-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  gap: 1rem;\n  color: #24398A !important;\n}\n.mat-expansion-panel-header-title i {\n  font-weight: 900;\n  font-size: 2rem;\n}\n\n:host ::ng-deep .mat-expansion-indicator:after {\n  color: #24398A !important;\n}\n\n:host ::ng-deep .mat-expansion-panel-body {\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), var(--primary-background);\n  padding: 1rem 1.5rem;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-expansion-panel {\n  box-shadow: none !important;\n}\n\n.gallery-container {\n  row-gap: 1rem;\n}\n.gallery-container .image-container img {\n  max-height: 400px;\n  object-fit: contain;\n}\n\n.image-container {\n  position: relative;\n  width: 100%;\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.image-container .no-image {\n  width: 100%;\n  height: 120px;\n  min-height: inherit;\n  background: rgba(36, 57, 138, 0.04);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #24398A;\n  cursor: pointer;\n  gap: 0.75rem;\n}\n.image-container .no-image:before {\n  content: \"\\f03e\";\n  font-family: \"Font Awesome 5 Free\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.25rem;\n}\n.image-container .no-image:after {\n  font-size: 1rem;\n  content: attr(translatedContent);\n}\n.image-container .btn-thumbnail, .image-container .btn-gallery {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n  border: none;\n}\n.image-container .btn-thumbnail i, .image-container .btn-gallery i {\n  color: var(--primary-background);\n  font-weight: 900;\n  font-size: 16px;\n}\n.image-container .btn-thumbnail {\n  position: absolute;\n  top: 2.125rem;\n  right: 2.125rem;\n}\n.image-container .btn-gallery {\n  position: absolute;\n  top: 0.875rem;\n  right: 0.875rem;\n}\n.image-container .gallery-img {\n  height: 120px !important;\n  width: 100%;\n  object-fit: cover;\n}\n.image-container .featured-image {\n  width: 100%;\n  height: 600px !important;\n  object-fit: contain;\n}\n\n.footer-container {\n  background-color: var(--primary-background);\n  padding: 3rem 1.5rem;\n  font-size: 0.875rem;\n  border-radius: 0px 0px 8px 8px;\n}\n\n::ng-deep .ngx-mat-timepicker form {\n  display: flex !important;\n  justify-content: center !important;\n}\n\n.mat-accordion .mat-expansion-panel:last-of-type {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.clear-form {\n  color: rgba(36, 57, 138, 0.48);\n  background-color: var(--primary-background);\n  border-radius: 100%;\n}\n\n.related-resource {\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/events/add-edit-event/add-edit-event.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDRY;ECSZ,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAbA;EACE,iBAAA;EACA,cDnBc;ECoBd,gBAAA;AAgBF;;AAbA;EACE,gBAAA;EACA,eAAA;EACA,cDrBU;ACqCZ;;AAbA;EACE,gBAAA;EACA,eAAA;EACA,cAAA;AAgBF;;AAbA;EACE,mBAAA;EACA,4FAAA;AAgBF;;AAbA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iDAAA;EACA,eAAA;EACA,0BAAA;AAgBF;AAdE;EACE,eAAA;EACA,gBAAA;EACA,cAAA;EACA,SAAA;AAgBJ;;AAZA;EACE,yCAAA;EACA,0BAAA;EACA,aAAA;AAeF;AAZI;EACE,yBAAA;EACA,cAAA;EACA,4BAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AAcN;AAXI;EACE,iKAAA;EACA,cAAA;EACA,+BAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AAaN;AARE;EACE,kBAAA;EACA,0CAAA;EACA,6BAAA;EACA,WAAA;EACA,eAAA;EACA,8BAAA;EACA,gBAAA;EACA,eAAA;AAUJ;;AANA;EACE,gBAAA;AASF;;AANA;EACE,iBAAA;EACA,gBAAA;EACA,SAAA;EACA,yBAAA;AASF;AARE;EACE,gBAAA;EACA,eAAA;AAUJ;;AANA;EACE,yBAAA;AASF;;AANA;EACE,8GAAA;EACA,oBAAA;AASF;;AANA;EACE,WAAA;AASF;;AANA;EACE,2BAAA;AASF;;AANA;EACE,aAAA;AASF;AAPE;EACE,iBAAA;EACA,mBAAA;AASJ;;AALA;EACE,kBAAA;EACA,WAAA;EAGA,yCAAA;EACA,kBAAA;EACA,gBAAA;AAMF;AAJE;EACE,WAAA;EACA,aAAA;EACA,mBAAA;EACA,mCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cDxJY;ECyJZ,eAAA;EACA,YAAA;AAMJ;AAJI;EACE,gBAAA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;AAMN;AAHI;EACE,eAAA;EACA,gCAAA;AAKN;AADE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mCAAA;EACA,mBAAA;EACA,YAAA;AAGJ;AADI;EACE,gCAAA;EACA,gBAAA;EACA,eAAA;AAGN;AACE;EACE,kBAAA;EACA,aAAA;EACA,eAAA;AACJ;AAEE;EACE,kBAAA;EACA,aAAA;EACA,eAAA;AAAJ;AAGE;EACE,wBAAA;EACA,WAAA;EACA,iBAAA;AADJ;AAIE;EACE,WAAA;EACA,wBAAA;EACA,mBAAA;AAFJ;;AAMA;EACE,2CAAA;EACA,oBAAA;EACA,mBAAA;EACA,8BAAA;AAHF;;AAMA;EACE,wBAAA;EACA,kCAAA;AAHF;;AAMA;EACE,6BAAA;EACA,4BAAA;AAHF;;AAMA;EACE,8BAAA;EACA,2CAAA;EACA,mBAAA;AAHF;;AAMA;EACE,cDvOU;ACoOZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n}\n\n.panel-title {\n  font-size: 1.5rem;\n  color: $primary-color;\n  font-weight: 600;\n}\n\n.panel-subtitle {\n  font-weight: 400;\n  font-size: 16px;\n  color: $paragraph;\n}\n\n.section-title {\n  font-weight: 600;\n  font-size: 24px;\n  color: #24398A;\n}\n\n.section-content {\n  padding: 46px 100px;\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), #FFFFFF;\n}\n\n.list-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #24398A29;\n  padding: 10px 0;\n  border-radius: 8px 8px 0 0;\n\n  .title {\n    font-size: 20px;\n    font-weight: 600;\n    color: #24398A;\n    margin: 0;\n  }\n}\n\n.list-content {\n  background-color: rgba(36, 57, 138, 0.08);\n  border-radius: 0 0 8px 8px;\n  padding: 20px;\n\n  .ticket-list{\n    .btn-delete{\n      background-color:#24398A;\n      color: #FFFFFF;\n      border-top-right-radius: 8px;\n      border:none;\n      width: 40px;\n      height: 50px;\n    }\n\n    .btn-edit{\n      background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(0deg, rgba(36, 57, 138, 0.48), rgba(36, 57, 138, 0.48)), #FFFFFF;\n      color: #FFFFFF;\n      border-bottom-right-radius: 8px;\n      border:none;\n      width: 40px;\n      height: 50px;\n    }\n  }\n\n\n  .add-btn {\n    border-radius: 8px;\n    border: 1px dotted rgba(36, 57, 138, 0.16);\n    background-color: transparent;\n    width: 100%;\n    padding: 15px 0;\n    color: rgba(36, 57, 138, 0.16);\n    font-weight: 600;\n    font-size: 16px;\n  }\n}\n\n.mat-expansion-panel-header {\n  height: 4.875rem;\n}\n\n.mat-expansion-panel-header-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  gap: 1rem;\n  color: $primary-color !important;\n  i {\n    font-weight: 900;\n    font-size: 2rem;\n  }\n}\n\n:host ::ng-deep .mat-expansion-indicator:after {\n  color: $primary-color !important;\n}\n\n:host ::ng-deep .mat-expansion-panel-body {\n  background: linear-gradient(0deg, rgba($primary-color, 0.04), rgba($primary-color, 0.04)), var(--primary-background);\n  padding: 1rem 1.5rem;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-expansion-panel {\n  box-shadow: none !important;\n}\n\n.gallery-container {\n  row-gap: 1rem;\n\n  .image-container img {\n    max-height: 400px;\n    object-fit: contain;\n  }\n}\n\n.image-container {\n  position: relative;\n  width: 100%;\n  //min-height: 7.5rem;\n  //height: 100%;\n  border: 2px solid rgba($primary-color, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n\n  & .no-image {\n    width: 100%;\n    height: 120px;\n    min-height: inherit;\n    background: rgba($primary-color, 0.04);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: $primary-color;\n    cursor: pointer;\n    gap: 0.75rem;\n\n    &:before {\n      content: '\\f03e';\n      font-family: 'Font Awesome 5 Free';\n      font-style: normal;\n      font-weight: 400;\n      font-size: 2.25rem;\n    }\n\n    &:after {\n      font-size: 1rem;\n      content: attr(translatedContent);\n    }\n  }\n\n  .btn-thumbnail, .btn-gallery {\n    width: 2rem;\n    height: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba($primary-color, 0.16);\n    border-radius: 100%;\n    border: none;\n\n    i {\n      color: var(--primary-background);\n      font-weight: 900;\n      font-size: 16px;\n    }\n  }\n\n  .btn-thumbnail {\n    position: absolute;\n    top: 2.125rem;\n    right: 2.125rem;\n  }\n\n  .btn-gallery {\n    position: absolute;\n    top: 0.875rem;\n    right: 0.875rem;\n  }\n\n  .gallery-img{\n    height: 120px!important;\n    width: 100%;\n    object-fit: cover;\n  }\n\n  .featured-image{\n    width: 100%;\n    height: 600px!important;\n    object-fit: contain;\n  }\n}\n\n.footer-container {\n  background-color: var(--primary-background);\n  padding: 3rem 1.5rem;\n  font-size: 0.875rem;\n  border-radius: 0px 0px 8px 8px;\n}\n\n::ng-deep .ngx-mat-timepicker form {\n  display: flex !important;\n  justify-content: center !important;\n}\n\n.mat-accordion .mat-expansion-panel:last-of-type {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.clear-form{\n  color:rgba($primary-color, 0.48 );\n  background-color:var(--primary-background);\n  border-radius: 100%;\n}\n\n.related-resource{\n  color: $paragraph;\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8121:
/*!******************************************************************************************************************!*\
  !*** ./src/app/features/events/components/add-edit-event-ticket/add-edit-event-ticket.component.scss?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dialog-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.dialog-container .dialog-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 25px 100px;\n  background-color: #24398A;\n}\n.dialog-container .dialog-header h2 {\n  color: white;\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n}\n.dialog-container .dialog-header button {\n  border: 2px solid white !important;\n}\n.dialog-container .dialog-content {\n  padding: 0 100px;\n  margin-top: 78px;\n  flex: 1;\n}\n.dialog-container .dialog-content .section-name {\n  font-size: 24px;\n  color: #24398A;\n  font-weight: 600;\n}\n.dialog-container .dialog-content .limit-check {\n  height: 57px;\n}\n.dialog-container .dialog-content .section-subtitle {\n  color: black;\n  font-weight: 700;\n  font-size: 20px;\n}\n.dialog-container .dialog-content .add-remove-tickets {\n  border: 1px solid #24398A;\n  padding: 10px 15px;\n  width: 100%;\n  max-width: 130px;\n  border-radius: 70px;\n}\n.dialog-container .dialog-content .add-remove-tickets .add-remove-btn {\n  display: flex;\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  color: #24398A;\n}\n.dialog-container .dialog-content .policy {\n  color: black;\n  font-size: 16px;\n}\n.dialog-container .dialog-footer {\n  display: flex;\n  padding: 24px 100px;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid rgba(36, 57, 138, 0.16);\n}", "",{"version":3,"sources":["webpack://./src/app/features/events/components/add-edit-event-ticket/add-edit-event-ticket.component.scss"],"names":[],"mappings":"AACA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;AAAF;AAGE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,yBAAA;AADJ;AAGI;EACE,YAAA;EACA,eAAA;EACA,gBAAA;EACA,SAAA;AADN;AAII;EAUE,kCAAA;AAXN;AAiBE;EACE,gBAAA;EACA,gBAAA;EACA,OAAA;AAfJ;AAiBI;EACE,eAAA;EACA,cAAA;EACA,gBAAA;AAfN;AAkBI;EACE,YAAA;AAhBN;AAmBI;EACE,YAAA;EACA,gBAAA;EACA,eAAA;AAjBN;AAoBI;EACE,yBAAA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,mBAAA;AAlBN;AAoBM;EACE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;AAlBR;AAsBI;EACE,YAAA;EACA,eAAA;AApBN;AAyBE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,6CAAA;AAvBJ","sourcesContent":["\n.dialog-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  // Header\n  .dialog-header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 25px 100px;\n    background-color: #24398A;\n\n    h2 {\n      color: white;\n      font-size: 32px;\n      font-weight: 700;\n      margin: 0;\n    }\n\n    button {\n      //display: flex;\n      //align-items: center;\n      //justify-content: center;\n      //width: 45px;\n      //height: 45px;\n      //border: 2px solid white;\n      //border-radius: 50%;\n      //background: transparent;\n      //color: white;\n      border: 2px solid white !important;\n    }\n\n  }\n\n  // Content\n  .dialog-content {\n    padding: 0 100px;\n    margin-top: 78px;\n    flex: 1;\n\n    .section-name {\n      font-size: 24px;\n      color: #24398A;\n      font-weight: 600;\n    }\n\n    .limit-check {\n      height: 57px;\n    }\n\n    .section-subtitle {\n      color: black;\n      font-weight: 700;\n      font-size: 20px;\n    }\n\n    .add-remove-tickets {\n      border: 1px solid #24398A;\n      padding: 10px 15px;\n      width: 100%;\n      max-width: 130px;\n      border-radius: 70px;\n\n      .add-remove-btn {\n        display: flex;\n        background: transparent;\n        border: none;\n        font-size: 12px;\n        color: #24398A;\n      }\n    }\n\n    .policy{\n      color: black;\n      font-size:16px;\n    }\n  }\n\n  // Footer\n  .dialog-footer {\n    display: flex;\n    padding: 24px 100px;\n    align-items: center;\n    justify-content: space-between;\n    border-top: 1px solid rgba(36, 57, 138, 0.16);\n  }\n\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 91834:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/events/components/delete-event-ticket/delete-event-ticket.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dialog-container {\n  padding: 48px 52px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.dialog-container .dialog-header h2 {\n  color: #24398A;\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 24px;\n}\n.dialog-container .dialog-header p {\n  font-weight: 400;\n  font-size: 16px;\n  color: #231F20;\n}\n.dialog-container .dialog-content {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 48px;\n}\n.dialog-container .dialog-content .section-title {\n  font-weight: 700;\n  font-size: 14px;\n  color: #231F20;\n}\n.dialog-container .dialog-content .section-title span {\n  font-weight: 400;\n  font-size: 14px;\n}\n.dialog-container .dialog-footer {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/app/features/events/components/delete-event-ticket/delete-event-ticket.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AACF;AAII;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;AAFN;AAKI;EACE,gBAAA;EACA,eAAA;EACA,cAAA;AAHN;AASE;EACE,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AAPJ;AASI;EACE,gBAAA;EACA,eAAA;EACA,cAAA;AAPN;AASM;EACE,gBAAA;EACA,eAAA;AAPR;AAcE;EACE,aAAA;EACA,SAAA;EACA,mBAAA;AAZJ","sourcesContent":[".dialog-container {\n  padding: 48px 52px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  // Header\n  .dialog-header {\n\n    h2 {\n      color: #24398A;\n      font-size: 24px;\n      font-weight: 600;\n      margin-bottom: 24px;\n    }\n\n    p {\n      font-weight: 400;\n      font-size: 16px;\n      color: #231F20;\n    }\n\n  }\n\n  // Content\n  .dialog-content {\n    border: 1px solid #24398A;\n    border-radius: 8px;\n    padding: 16px;\n    margin-bottom: 48px;\n\n    .section-title {\n      font-weight: 700;\n      font-size: 14px;\n      color: #231F20;\n\n      span {\n        font-weight: 400;\n        font-size: 14px;\n      }\n    }\n\n  }\n\n  // Footer\n  .dialog-footer {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 48590:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/events/components/dynamic-attributes/dynamic-attributes.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #34A853;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #34A853;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/events/components/dynamic-attributes/dynamic-attributes.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AAiBF;;AAdA;EACE,UAAA;EACA,QAAA;EACA,SAAA;AAiBF;;AAdA;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EAEA,gBAAA;AAiBF;;AAdA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EAEA,gBAAA;AAiBF;;AAdA;EAEE,yBDIgB;ACYlB;;AAbA;EACE,2BAAA;AAgBF;;AAbA;EAGE,2BAAA;AAgBF;;AAbA,oBAAA;AACA;EACE,mBAAA;AAgBF;;AAbA;EACE,kBAAA;AAgBF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n//------------------------------------- Switches -------------------------------------\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  //background-color: #2196F3;\n  background-color: $active-btn-color;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px $active-btn-color;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n//-------------------------------------SWITCHES END-------------------------------------\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26993:
/*!***********************************************************************************!*\
  !*** ./src/app/features/events/events-list/events-list.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n}\n.page-header h2 {\n  margin: 0;\n  color: #24398A;\n  font-weight: 700;\n}\n.page-header div {\n  row-gap: 1rem;\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.events-list.card {\n  margin-bottom: 1rem;\n}\n.events-list.card .card-body .row {\n  row-gap: 1.5rem;\n}\n.events-list.card .card-footer p {\n  margin: 0;\n  color: #24398A;\n  font-weight: 400;\n  font-size: 16px;\n}\n\ntable {\n  width: 100%;\n}\n@media (min-width: 1400px) {\n  table .custom-column-w {\n    width: 40%;\n  }\n}\ntable .view-event {\n  text-decoration: none;\n  color: #24398A;\n  font-weight: 500;\n}\n\n.mat-form-field {\n  font-size: 14px;\n}\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-event.card > div {\n  background: linear-gradient(0deg, rgba(36, 57, 138, 0.04), rgba(36, 57, 138, 0.04)), var(--primary-background);\n}\n\n.card-event.card {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.card-event.card .card-body {\n  gap: 1rem;\n  letter-spacing: -0.02em;\n  line-height: 140%;\n  color: #24398A;\n}\n.card-event.card .card-body h3 {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 140%;\n  margin-bottom: 4px;\n}\n.card-event.card .card-body p {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 140%;\n  margin-bottom: 5px;\n}\n.card-event.card .card-footer .row {\n  row-gap: 1rem;\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n}\n.modal-card.card .card-header h3 {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n.modal-card.card .card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.modal-card.card .card-body .mat-error {\n  color: red;\n}\n.modal-card.card .card-footer .row {\n  row-gap: 1rem;\n}\n\n.advanced-display {\n  display: none;\n}\n\n.advanced-filter-first {\n  margin-top: 10px;\n}\n.advanced-filter-first mat-form-field {\n  width: 20%;\n}\n\n.advanced-filter-second {\n  margin-top: 10px;\n}\n.advanced-filter-second mat-form-field {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/events/events-list/events-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;AAkBF;AAhBE;EACE,SAAA;EACA,cDRY;ECSZ,gBAAA;AAkBJ;AAfE;EACE,aAAA;AAiBJ;;AAbA;EACE,2CAAA;AAgBF;;AAbA;EACE,mBAAA;AAgBF;AARI;EACE,eAAA;AAUN;AAJI;EACE,SAAA;EACA,cDvCU;ECwCV,gBAAA;EACA,eAAA;AAMN;;AADA;EACE,WAAA;AAIF;AAAI;EAFF;IAGI,UAAA;EAGJ;AACF;AAAE;EACE,qBAAA;EACA,cD1DY;EC2DZ,gBAAA;AAEJ;;AAEA;EACE,eAAA;AACF;;AAKA;EACE,2CAAA;AAFF;;AAKA;EACE,8GAAA;AAFF;;AAKA;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;AAFF;AAIE;EACE,SAAA;EACA,uBAAA;EACA,iBAAA;EACA,cDvFY;ACqFhB;AAII;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAFN;AAKI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAHN;AAWI;EACE,aAAA;AATN;;AAcA;EACE,eAAA;AAXF;AAcI;EACE,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,cD1HU;AC8GhB;AAiBI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cD/HM;ACgHZ;AAkBI;EACE,UAAA;AAhBN;AAsBI;EACE,aAAA;AApBN;;AA2BA;EACE,aAAA;AAxBF;;AA2BA;EACE,gBAAA;AAxBF;AAyBE;EACE,UAAA;AAvBJ;;AA2BA;EACE,gBAAA;AAxBF;AAyBE;EACE,WAAA;AAvBJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.page-header {\n  margin-top: 64px;\n  margin-bottom: 40px;\n  row-gap: 1rem;\n\n  h2 {\n    margin: 0;\n    color: $primary-color;\n    font-weight: 700;\n  }\n\n  div {\n    row-gap: 1rem;\n  }\n}\n\n.card > div {\n  background-color: var(--primary-background);\n}\n\n.events-list.card {\n  margin-bottom: 1rem;\n\n  // .card-header {\n\n  // }\n\n  .card-body {\n\n    .row {\n      row-gap: 1.5rem;\n    }\n  }\n\n  .card-footer {\n\n    p {\n      margin: 0;\n      color: $primary-color;\n      font-weight: 400;\n      font-size: 16px;\n    }\n  }\n}\n\ntable {\n  width: 100%;\n\n  .custom-column-w{\n\n    @media(min-width: 1400px){\n      width:40%;\n    }\n  }\n\n  .view-event{\n    text-decoration: none;\n    color: $primary-color;\n    font-weight: 500 ;\n  }\n}\n\n.mat-form-field {\n  font-size: 14px;\n // width: 100%;\n}\n\n//--------------Modal----------------\n\n.modal-card.card > div {\n  background-color: var(--primary-background);\n}\n\n.card-event.card > div {\n  background: linear-gradient(0deg, rgba($primary-color, 0.04), rgba($primary-color, 0.04)), var(--primary-background);\n}\n\n.card-event.card {\n  border: 1px solid $primary-color;\n  border-radius: 8px;\n  overflow: hidden;\n\n  .card-body {\n    gap: 1rem;\n    letter-spacing: -0.02em;\n    line-height: 140%;\n    color: $primary-color;\n\n    h3 {\n      font-weight: 700;\n      font-size: 24px;\n      line-height: 140%;\n      margin-bottom: 4px;\n    }\n\n    p {\n      font-weight: 300;\n      font-size: 16px;\n      line-height: 140%;\n      margin-bottom: 5px;\n    }\n\n\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n.modal-card.card {\n  padding: 1.5rem;\n\n  .card-header {\n    h3 {\n      font-size: 24px;\n      font-weight: 600;\n      letter-spacing: -0.02em;\n      color: $primary-color;\n    }\n  }\n\n  .card-body {\n    & > p {\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 140%;\n      letter-spacing: -0.02em;\n      color: $paragraph;\n    }\n\n    .mat-error{\n      color: red;\n    }\n  }\n\n  .card-footer {\n\n    .row {\n      row-gap: 1rem;\n    }\n  }\n}\n\n\n\n.advanced-display{\n  display: none;\n}\n\n.advanced-filter-first{\n  margin-top:10px;\n  mat-form-field{\n    width:20%;\n  }\n}\n\n.advanced-filter-second{\n  margin-top:10px;\n  mat-form-field{\n    width:100%;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8606:
/*!*********************************************************************************!*\
  !*** ./src/app/features/events/view-event/view-event.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.white-background {\n  background-color: var(--primary-background);\n}\n\nh1 {\n  font-weight: 700;\n  color: #231F20;\n}\n\n.responsive-header-text {\n  font-size: 24px;\n}\n@media (width >= 768px) {\n  .responsive-header-text {\n    font-size: 32px;\n  }\n}\n@media (width >= 1200px) {\n  .responsive-header-text {\n    font-size: 48px;\n  }\n}\n\n.thumbnail {\n  width: 100%;\n  max-height: 600px;\n  object-fit: cover;\n  margin-bottom: 1.5rem;\n}\n\n.event-location-time {\n  font-weight: 400;\n  font-size: 16px;\n  color: #231F20;\n  margin-bottom: 3rem;\n}\n.event-location-time p, .event-location-time i {\n  margin-bottom: 0;\n  line-height: 24px;\n}\n\n.event-details {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  padding: 1rem 1.5rem;\n  margin-bottom: 3rem;\n  background-color: var(--primary-background);\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.event-details p {\n  margin-bottom: 0;\n}\n.event-details div:first-child h1 span {\n  color: #FFCC29;\n}\n.event-details div:first-child p {\n  font-weight: 700;\n  font-size: 20px;\n}\n.event-details div:nth-child(2) h2 {\n  font-weight: 400;\n  font-size: 32px;\n}\n.event-details div:nth-child(2) div i {\n  color: #FFCC29;\n}\n\n.event-description {\n  white-space: pre-line;\n}\n\n.gallery-container {\n  aspect-ratio: 16/9;\n  max-height: 100%;\n}\n.gallery-container img {\n  border-radius: 8px;\n}\n.gallery-container .selected-image {\n  max-height: inherit;\n}\n.gallery-container .selected-image img {\n  height: 100%;\n  object-fit: cover;\n}\n.gallery-container .side-gallery-container {\n  max-height: inherit;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.gallery-container .side-gallery-container .image-container {\n  aspect-ratio: 16/9;\n  width: 100%;\n}\n.gallery-container .side-gallery-container .image-container:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n.gallery-container .side-gallery-container .image-container img {\n  aspect-ratio: 16/9;\n  width: 100%;\n  object-fit: cover;\n}\n\n.might-like-section {\n  background: rgba(13, 68, 148, 0.04);\n}\n.might-like-section .cards-container {\n  padding-top: 48px;\n  padding-bottom: 48px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/events/view-event/view-event.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,2CAAA;AAkBF;;AAfA;EACE,gBAAA;EACA,cDFU;ACoBZ;;AAfA;EACE,eAAA;AAkBF;AAjBE;EAFF;IAGI,eAAA;EAoBF;AACF;AAnBE;EALF;IAMI,eAAA;EAsBF;AACF;;AAnBA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,qBAAA;AAsBF;;AAnBA;EACE,gBAAA;EACA,eAAA;EACA,cDzBU;EC0BV,mBAAA;AAsBF;AApBE;EACE,gBAAA;EACA,iBAAA;AAsBJ;;AAlBA;EACE,yBAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,2CAAA;EACA,SAAA;EACA,eAAA;AAqBF;AAnBE;EACE,gBAAA;AAqBJ;AAfM;EACE,cDtDU;ACuElB;AAbI;EACE,gBAAA;EACA,eAAA;AAeN;AAVI;EACE,gBAAA;EACA,eAAA;AAYN;AARM;EACE,cDxEU;ACkFlB;;AAJA;EACE,qBAAA;AAOF;;AAJA;EACE,kBAAA;EACA,gBAAA;AAOF;AALE;EACE,kBAAA;AAOJ;AAJE;EACE,mBAAA;AAMJ;AAJI;EACE,YAAA;EACA,iBAAA;AAMN;AAFE;EACE,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AAIJ;AAFI;EACE,kBAAA;EACA,WAAA;AAIN;AAFM;EACE,eAAA;EACA,sBAAA;AAIR;AADM;EACE,kBAAA;EACA,WAAA;EACA,iBAAA;AAGR;;AAGA;EACE,mCAAA;AAAF;AAEE;EACE,iBAAA;EACA,oBAAA;AAAJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.white-background {\n  background-color: var(--primary-background);\n}\n\nh1 {\n  font-weight: 700;\n  color: $paragraph;\n}\n\n.responsive-header-text {\n  font-size: 24px;\n  @media (width >= 768px) {\n    font-size: 32px;\n  }\n  @media (width >= 1200px) {\n    font-size: 48px;\n  }\n}\n\n.thumbnail {\n  width: 100%;\n  max-height: 600px;\n  object-fit: cover;\n  margin-bottom: 1.5rem;\n}\n\n.event-location-time {\n  font-weight: 400;\n  font-size: 16px;\n  color: $paragraph;\n  margin-bottom: 3rem;\n\n  p, i {\n    margin-bottom: 0;\n    line-height: 24px;\n  }\n}\n\n.event-details {\n  border: 1px solid $primary-color;\n  border-radius: 8px;\n  padding: 1rem 1.5rem;\n  margin-bottom: 3rem;\n  background-color: var(--primary-background);\n  gap: 1rem;\n  flex-wrap: wrap;\n\n  p {\n    margin-bottom: 0;\n  }\n\n  div:first-child {\n\n    h1 {\n      span {\n        color: $secondary-color;\n      }\n    }\n\n    p {\n      font-weight: 700;\n      font-size: 20px;\n    }\n  }\n\n  div:nth-child(2) {\n    h2 {\n      font-weight: 400;\n      font-size: 32px;\n    }\n\n    div {\n      i {\n        color: $secondary-color;\n      }\n    }\n  }\n}\n\n.event-description {\n  white-space: pre-line;\n}\n\n.gallery-container {\n  aspect-ratio: 16/9;\n  max-height: 100%;\n\n  img {\n    border-radius: 8px;\n  }\n\n  .selected-image {\n    max-height: inherit;\n\n    img {\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .side-gallery-container {\n    max-height: inherit;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n\n    .image-container {\n      aspect-ratio: 16 / 9;\n      width: 100%;\n\n      &:hover {\n        cursor: pointer;\n        transform: scale(1.05);\n      }\n\n      img {\n        aspect-ratio: 16 / 9;\n        width: 100%;\n        object-fit: cover;\n      }\n    }\n  }\n}\n\n.might-like-section {\n  background: rgba(13, 68, 148, 0.04);\n\n  .cards-container {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 69738:
/*!***********************************************************************************************************!*\
  !*** ./src/app/standalone-components/event-ticket-preview/event-ticket-preview.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.card-list {\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 0;\n  border: 1px solid #24398A;\n  background-color: #24398A;\n}\n\n.ticket-card {\n  margin-bottom: 10px;\n}\n.ticket-card .card-header {\n  background-color: #24398A;\n  height: 50px;\n}\n.ticket-card .card-header h4 {\n  color: #FFFFFF !important;\n  margin-bottom: 0 !important;\n}\n.ticket-card .card-body .info {\n  padding-right: 16px;\n}\n.ticket-card .card-body .info p span {\n  font-weight: 700;\n}\n.ticket-card .card-body .price {\n  border: 1px solid #24398A;\n  border-radius: 8px;\n  width: 152px;\n  height: 113px;\n  color: #24398A;\n  font-weight: 700;\n  text-align: center;\n}\n.ticket-card .card-body .price .sum {\n  font-size: 48px;\n  line-height: 55px;\n}\n.ticket-card .card-body .price .details {\n  font-size: 16px;\n  line-height: 18px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/event-ticket-preview/event-ticket-preview.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,2BAAA;EACA,8BAAA;EACA,+BAAA;EACA,0BAAA;EAEA,yBAAA;EACA,yBDRc;ACyBhB;;AAbA;EACE,mBAAA;AAgBF;AAdE;EACE,yBDhBY;ECiBZ,YAAA;AAgBJ;AAdI;EACE,yBAAA;EACA,2BAAA;AAgBN;AAXI;EACE,mBAAA;AAaN;AAXQ;EACE,gBAAA;AAaV;AARI;EACE,yBAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,cDxCU;ECyCV,gBAAA;EACA,kBAAA;AAUN;AARM;EACE,eAAA;EACA,iBAAA;AAUR;AAPM;EACE,eAAA;EACA,iBAAA;AASR","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.card-list{\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 0;\n\n  border: 1px solid $primary-color;\n  background-color: $primary-color;\n\n}\n\n.ticket-card{\n  margin-bottom: 10px;\n\n  .card-header{\n    background-color: $primary-color;\n    height: 50px;\n\n    h4{\n      color: $background-primary!important;\n      margin-bottom: 0!important;\n    }\n  }\n\n  .card-body{\n    .info{\n      padding-right: 16px ;\n      p{\n        span{\n          font-weight: 700;\n        }\n      }\n    }\n\n    .price{\n      border: 1px solid $primary-color;\n      border-radius: 8px;\n      width: 152px;\n      height: 113px;\n      color: $primary-color;\n      font-weight: 700;\n      text-align: center;\n\n      .sum{\n        font-size: 48px;\n        line-height: 55px ;\n      }\n\n      .details{\n        font-size: 16px;\n        line-height: 18px;\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 71007:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/events/add-edit-event/add-edit-event.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"{{ isEditMode\n                        ? ('EVENTS.EDIT' | translate)\n                        : ( providerData ? ('EVENTS.ADD' | translate) +' pentru '+providerData?.companyName+' ('+providerData?.cui+')' : ('EVENTS.ADD' | translate) ) }}\"\n                          [buttonBackRoute]=\"isEditMode ? '../../../events/list' : '../../events/list'\"\n                          (buttonCall)=\"submitEvent()\">\n    </app-dashboard-header>\n    <div class=\"form-container mb-5\">\n        <form [formGroup]=\"eventForm\" id=\"eventForm\" (ngSubmit)=\"submitEvent()\">\n            <div class=\"accordion-container\">\n                <mat-accordion>\n                    <mat-expansion-panel [expanded]=\"true\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <i class=\"fas fa-info-circle\"></i>\n                                General\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <h3 class=\"panel-title\">\n                            {{'EVENTS.GENERAL-INFO' | translate}}\n                        </h3>\n\n                        <div class=\"row mb-5\">\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>{{'EVENTS.TITLE'|translate}}</mat-label>\n                                    <input formControlName=\"title\" matInput type=\"text\" id=\"titleInput\"\n                                           (change)=\"createSlug(eventForm.value.title)\">\n                                    <i class=\"fas fa-times-circle clear-form\" *ngIf=\"eventForm.get('title').value\"\n                                       (click)=\"clearFormControl('title')\"\n                                       id=\"btnEventClearTitle\"\n                                       type=\"button\" matSuffix></i>\n                                    <mat-error>{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>{{'EVENTS.EXTENSION'|translate}}</mat-label>\n                                    <input formControlName=\"slug\" matInput type=\"text\" id=\"slugInput\">\n                                    <i class=\"fas fa-times-circle clear-form\" *ngIf=\"eventForm.get('title').value\"\n                                       (click)=\"clearFormControl('title')\"\n                                       id=\"btnEventClearSlug\"\n                                       type=\"button\" matSuffix></i>\n                                    <mat-error>{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Data de început</mat-label>\n                                    <input matInput [min]=\"currentDay\" [ngxMatDatetimePicker]=\"startPicker\"\n                                           placeholder=\"Choose a date\" formControlName=\"startDate\">\n                                    <mat-datepicker-toggle matSuffix\n                                                           [for]=\"startPicker\"></mat-datepicker-toggle>\n                                    <ngx-mat-datetime-picker #startPicker [stepMinute]=\"15\">\n                                    </ngx-mat-datetime-picker>\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-12 col-lg-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Data de final</mat-label>\n                                    <input matInput [min]=\"currentDay\" [ngxMatDatetimePicker]=\"endPicker\"\n                                           placeholder=\"Choose a date\" formControlName=\"endDate\">\n                                    <mat-datepicker-toggle matSuffix\n                                                           [for]=\"endPicker\"></mat-datepicker-toggle>\n                                    <ngx-mat-datetime-picker #endPicker [stepMinute]=\"15\">\n                                    </ngx-mat-datetime-picker>\n                                </mat-form-field>\n                            </div>\n\n\n                            <div class=\"col-12\">\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>{{'EVENTS.SHORT-DESCRIPTION'|translate}}</mat-label>\n                                    <input formControlName=\"shortDescription\" matInput id=\"shortDescInput\">\n\n                                    <mat-error>{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                    <!--TODO: cum ramane cu short description-->\n                                    <i class=\"fas fa-times-circle clear-form\" *ngIf=\"eventForm.get('shortDescription').value\"\n                                       (click)=\"clearFormControl('shortDescription')\"\n                                       id=\"btnEventClearShortDescription\"\n                                       type=\"button\" matSuffix></i>\n                                </mat-form-field>\n                            </div>\n\n\n                            <div class=\"col-12\">\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>{{'EVENTS.DESCRIPTION'|translate}}</mat-label>\n                                    <textarea formControlName=\"description\" matInput id=\"descriptionInput\"\n                                              cdkTextareaAutosize\n                                              cdkAutosizeMinRows=\"1\"\n                                              cdkAutosizeMaxRows=\"5\"></textarea>\n                                    <mat-error>{{'ERROR.REQUIRED'|translate}}</mat-error>\n                                    <i class=\"fas fa-times-circle clear-form\" *ngIf=\"eventForm.get('description').value\"\n                                       (click)=\"clearFormControl('description')\"\n                                       id=\"btnEventClearDescription\"\n                                       type=\"button\" matSuffix></i>\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-12\">\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>{{'EVENTS.EVENT-TYPE'|translate}}</mat-label>\n                                    <mat-select formControlName=\"resourceTypeId\"\n                                                (selectionChange)=\"selectedResourceType($event.value)\">\n                                        <mat-option *ngFor=\"let resType of resourceTypes\"\n                                                    [value]=\"resType.id\">{{currentLanguage === 'ro' ? resType.nameRo : resType.nameEn}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n\n                            <form [formGroup]=\"form\">\n                                <div class=\"row\" *ngFor=\"let tab of tabs\">\n                                    <h3 class=\"panel-title\"\n                                        *ngIf=\"tab.tabName=== 'general_info' || tab.tabName==='facilities' || tab.tabName=== 'contact' || tab.tabName==='about'\">{{tab.tabName === 'general_info' ? ('EVENTS.GENERAL-INFO' | translate) : (tab.tabName === 'facilities' ? ('EVENTS.FACILITIES' | translate) : (tab.tabName === 'contact' ? 'Contact' : 'About'))}}</h3>\n\n                                    <div class=\"row\" *ngFor=\"let attribute of tab.tabAttributes\">\n\n                                        <app-dynamic-inputs [control]=\"form.get(attribute.name)\"\n                                                            [inputFormData]=\"attribute\"\n                                                            [className]=\"columnSize(attribute.size)\" [ngClass]=\"!tripsAndItineraries.includes(attribute.categoryId) ? '': 'd-none'\"></app-dynamic-inputs>\n\n\n                                    </div>\n\n\n                                    <div *ngIf=\"tab.tabName==='general_info'\">\n                                        <div *ngFor=\"let category of tripsItinObj | keyvalue\" class=\"row\">\n                                            <div [ngSwitch]=\"category.key\">\n                                                <h5 *ngSwitchCase=\"'journeyThemeCategoryId'\">Journey Theme</h5>\n                                                <h5 *ngSwitchCase=\"'typeOfDestinationCategoryId'\">Type Of\n                                                    Destination</h5>\n                                                <h5 *ngSwitchCase=\"'typeOfJourneyCategoryId'\">Type of Journey</h5>\n                                            </div>\n\n                                            <div *ngFor=\"let inputForm  of tab.tabAttributes \"\n                                                 [className]=\"columnSize(inputForm.size)\"\n                                                 [ngClass]=\"category.value === inputForm.categoryId ? 'col-md-6': 'd-none'\">\n                                                <app-dynamic-inputs [control]=\"form.get(inputForm.name)\"\n                                                                    [inputFormData]=\"inputForm\"/>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </form>\n\n\n                            <!--                            <h3 class=\"panel-title\">-->\n                            <!--                                {{'EVENTS.BENEFITS'|translate}}-->\n                            <!--                            </h3>-->\n\n                            <!--                            <div class=\"row\">-->\n                            <!--                                <div class=\"col-12\">-->\n                            <!--                                    <mat-form-field appearance=\"standard\">-->\n                            <!--                                        <mat-label> {{'EVENTS.BENEFITS'|translate}}</mat-label>-->\n                            <!--                                        <mat-chip-list #benefitsList aria-label=\"Benefits selection\">-->\n                            <!--                                            <mat-chip-->\n                            <!--                                                    *ngFor=\"let benefit of benefits; let i = index\"-->\n                            <!--                                                    (removed)=\"removeBenefit(benefit)\">-->\n                            <!--                                                {{benefit}}-->\n                            <!--                                                <button id=\"btnRemoveChip-{{i}}\" matChipRemove>-->\n                            <!--                                                    <mat-icon>cancel</mat-icon>-->\n                            <!--                                                </button>-->\n                            <!--                                            </mat-chip>-->\n\n                            <!--                                            &lt;!&ndash; <input-->\n                            <!--                                                    id=\"benefitsInput\"-->\n                            <!--                                                    #benefitInput-->\n                            <!--                                                    [formControl]=\"benefitCtrl\"-->\n                            <!--                                                    [matAutocomplete]=\"auto\"-->\n                            <!--                                                    [matChipInputFor]=\"benefitsList\"-->\n                            <!--                                                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"-->\n                            <!--                                                    (matChipInputTokenEnd)=\"addBenefit($event)\"> &ndash;&gt;-->\n                            <!--                                            <input-->\n                            <!--                                                    id=\"benefitsInput\"-->\n                            <!--                                                    [formControl]=\"benefitCtrl\"-->\n                            <!--                                                    [matAutocomplete]=\"auto\"-->\n                            <!--                                                    [matChipInputFor]=\"benefitsList\"-->\n                            <!--                                                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"-->\n                            <!--                                                    (matChipInputTokenEnd)=\"addBenefit($event)\"-->\n                            <!--                                            >-->\n                            <!--                                        </mat-chip-list>-->\n                            <!--                                        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">-->\n                            <!--                                            <mat-option *ngFor=\"let benefit of filteredBenefits | async\"-->\n                            <!--                                                        [value]=\"benefit\" id=\"{{benefit}}\">-->\n                            <!--                                                {{benefit}}-->\n                            <!--                                            </mat-option>-->\n                            <!--                                        </mat-autocomplete>-->\n                            <!--                                    </mat-form-field>-->\n                            <!--                                </div>-->\n                            <!--                            </div>-->\n                        </div>\n                    </mat-expansion-panel>\n\n\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <i class=\"fas fa-info-circle\"></i>\n                                {{'EVENTS.THUMBNAIL-GALLERY'|translate}}\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <h3 class=\"panel-title\">\n                            {{'EVENTS.UPLOAD-IMAGES'|translate}}\n                        </h3>\n\n                        <p class=\"panel-subtitle\">\n                            {{'EVENTS.THUMBNAIL'|translate}}\n                        </p>\n\n\n                        <div class=\"image-container mb-5\">\n                            <input type=\"file\"\n                                   hidden\n                                   accept=\"image/*\"\n                                   #thumbnail\n                                   id=\"thumbnailInput\"\n                                   (change)=\"onThumbnailChange($event)\">\n                            <div *ngIf=\"!thumbnail.value && !thumbnailUrl?.filePath\" class=\"no-image\"\n                                 attr.translatedContent=\"{{ 'GENERAL.INSERT_IMAGE' | translate}}\"\n                                 (click)=\"thumbnail.click()\"></div>\n\n                            <img *ngIf=\"thumbnail.value || thumbnailUrl?.filePath\" class=\"img-fluid w-100 featured-image\"\n                                 [src]=\"thumbnailUrl.filePath\" alt=\"thumbnail\">\n                            <button *ngIf=\"thumbnail.value || thumbnailUrl?.filePath\"\n                                    (click)=\"removeThumbnail(); thumbnail.value=''\"\n                                    type=\"button\"\n                                    id=\"btnRemoveFeaturedImage\"\n                                    class=\"btn-thumbnail\">\n                                <i class=\"fas fa-times\"></i>\n                            </button>\n                        </div>\n\n                        <p class=\"panel-subtitle\">\n                            Gallery\n                        </p>\n\n                        <div class=\"row gallery-container\">\n                            <div class=\"col-12 col-lg-6\">\n                                <div class=\"image-container\">\n                                    <input type=\"file\"\n                                           accept=\"image/*\"\n                                           hidden\n                                           #add_image\n                                           id=\"galleryInput\"\n                                           (change)=\"onImageChange($event, add_image)\">\n                                    <div class=\"no-image\"\n                                         attr.translatedContent=\"{{ 'GENERAL.INSERT_IMAGE' | translate}}\"\n                                         (click)=\"add_image.click()\"></div>\n                                </div>\n                            </div>\n\n                            <div *ngFor=\"let image of galleryUrls; let i = index\" class=\"col-6 col-lg-2\">\n                                <div class=\"image-container\">\n                                    <img class=\"img-fluid gallery-img\"\n                                         [src]=\"image.filePath\" alt=\"image-{{i}}\">\n                                    <button (click)=\"removeImage(i)\"\n                                            id=\"btnRemoveGalleryImage-{{i}}\"\n                                            type=\"button\"\n                                            class=\"btn-gallery\">\n                                        <i class=\"fas fa-times\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </mat-expansion-panel>\n\n\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <i class=\"fas fa-info-circle\"></i>\n                                {{'EVENTS.LOCATION' | translate}}\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <h3 class=\"panel-title\">\n                            {{'EVENTS.MAP' | translate}}\n                        </h3>\n\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                    <mat-label>{{'EVENTS.ADDRESS' | translate}}</mat-label>\n                                    <input matInput formControlName=\"address\">\n                                </mat-form-field>\n                            </div>\n\n                            <!--                            SE TRANSFORMA IN SELECT-->\n                            <div class=\"col-12 col-md-6\">\n                                <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                    <mat-label>{{'EVENTS.COUNTRY' | translate}}</mat-label>\n                                    <mat-select formControlName=\"country\" (selectionChange)=\"getCities($event)\">\n                                        <mat-option *ngFor=\"let country of countries\" [value]=\"country\">\n                                            {{country}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n\n                            <!--                            SE TRANSFORMA IN SELECT-->\n                            <div class=\"col-12 col-md-6\">\n                                <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                    <mat-label>{{'EVENTS.CITY' | translate}}</mat-label>\n                                    <mat-select formControlName=\"city\" (selectionChange)=\"getCoordinates($event)\">\n                                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.name\">\n                                            {{city.name}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"template?.geographicalCoordinates\">\n                            <form [formGroup]=\"geographicalCoordinates\">\n                                <div class=\"row\">\n                                    <div class=\"col-12\">\n                                        MAP\n                                    </div>\n                                    <div class=\"col-12 col-md-6\">\n                                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                            <mat-label>{{'EVENTS.LATITUDE' | translate}}</mat-label>\n                                            <input matInput formControlName=\"latitude\">\n                                            <i class=\"fas fa-compass clear-form\" matSuffix></i>\n                                        </mat-form-field>\n                                    </div>\n\n                                    <div class=\"col-12 col-md-6\">\n                                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                            <mat-label>{{'EVENTS.LONGITUDE' | translate}}</mat-label>\n                                            <input matInput formControlName=\"longitude\">\n                                            <i class=\"fas fa-compass clear-form\" matSuffix></i>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n\n\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <i class=\"fas fa-info-circle\"></i>\n                                Ticketing\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <!--                        <h3 class=\"panel-title\">-->\n                        <!--                            General Information-->\n                        <!--                        </h3>-->\n\n                        <!--                        <div class=\"row\">-->\n                        <!--                            <div class=\"col-12\">-->\n                        <!--                                <mat-form-field appearance=\"standard\" class=\"w-100\">-->\n                        <!--                                    <mat-label>{{'EVENTS.ADDRESS' | translate}}</mat-label>-->\n                        <!--                                    <input matInput formControlName=\"address\">-->\n                        <!--                                    <i class=\"fas fa-times-circle clear-form\" *ngIf=\"eventForm.get('title').value\"-->\n                        <!--                                       (click)=\"clearFormControl('title')\"-->\n                        <!--                                       id=\"btnEventClearTicketName\"-->\n                        <!--                                       type=\"button\" matSuffix></i>-->\n                        <!--                                </mat-form-field>-->\n                        <!--                            </div>-->\n                        <!--                        </div>-->\n\n                        <div class=\"row\">\n                            <!--Title Section-->\n                            <div class=\"col-12 mb-3\">\n                                <h2 class=\"section-title\">Tipuri de bilete</h2>\n                            </div>\n\n                            <div class=\"col-12\">\n\n                                <!--List Title-->\n                                <div class=\"list-title\">\n                                    <h5 class=\"title\">Listare bilete</h5>\n                                </div>\n\n                                <!--List Content-->\n                                <div class=\"list-content\">\n                                    <div class=\"row\">\n                                        <div class=\"ticket-list col-12 col-md-4 col-lg-3\"\n                                             *ngFor=\"let ticket of ticketList; let i=index\">\n\n                                            <div class=\"ticket d-flex justify-content-center\">\n                                                <app-event-ticket-preview class=\"w-100\"\n                                                                          [ticketData]=\"ticket\"></app-event-ticket-preview>\n                                                <div class=\"actions d-flex flex-column align-items-start\">\n                                                    <button class=\"btn-delete\" type=\"button\"\n                                                            (click)=\"openDeleteModal(ticket, i)\"><i\n                                                            class=\"fas fa-times\"></i></button>\n                                                    <button class=\"btn-edit\" type=\"button\"\n                                                            (click)=\"openEditModal(ticket)\"><i class=\"fas fa-pen\"></i>\n                                                    </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-12\">\n                                            <button class=\"add-btn\" (click)=\"openAddModal()\" type=\"button\">\n                                                Adăugare\n                                                <i class=\"fas fa-plus\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n\n\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <i class=\"fas fa-info-circle\"></i>\n                                Resurse asociate\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <h3 class=\"panel-title mb-3\" *ngIf=\"resToBeAdded.length > 0\">\n                            Resurse asociate evenimentului: <span class=\"related-resource\"\n                                                                  *ngFor=\"let res of resToBeAdded\">{{res?.title}}</span>\n                        </h3>\n\n\n                        <h3 class=\"panel-title mb-3\">\n                            Alege din resursele urmatoare:\n                        </h3>\n\n                        <div class=\"container mb-3\">\n                            <div class=\"row filteRow\">\n                                <mat-form-field appearance=\"standard\">\n                                    <mat-label>Cauta</mat-label>\n                                    <input matInput type=\"text\" formControlName=\"filterTitleChoose\"\n                                           (keydown.enter)=\"applyFilter()\">\n                                    <i class=\"fas fa-times-circle clear-form\"\n                                       *ngIf=\"eventForm.get('filterTitleChoose').value\"\n                                       (click)=\"clearFormControl('filterTitleChoose'); applyFilter()\"\n                                       id=\"btnEventClearSearchBar\"\n                                       type=\"button\" matSuffix></i>\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"row tableContent\">\n                                <!--Table start-->\n                                <table mat-table matSort appMatTableResponsive [dataSource]=\"dataSourceChoose\"\n                                       class=\"w-100\">\n\n                                    <!-- Resource Name Column -->\n                                    <ng-container matColumnDef=\"title\">\n                                        <th mat-header-cell *matHeaderCellDef\n                                            mat-sort-header> {{'RESOURCES.NAME' | translate}} </th>\n                                        <td attr.attr.data-column-name=\"{{'RESOURCES.NAME' | translate}}\" mat-cell\n                                            *matCellDef=\"let row\">\n                                            <i class=\"fas fa-users shared\" *ngIf=\"row.sharedExperience\"></i>\n                                            {{row.title}}\n                                        </td>\n                                    </ng-container>\n\n                                    <!-- toress column -->\n                                    <ng-container matColumnDef=\"address\">\n                                        <th mat-header-cell *matHeaderCellDef\n                                            mat-sort-header> {{'RESOURCES.LOCATION' | translate}} </th>\n                                        <td attr.data-column-name=\"{{'RESOURCES.LOCATION' | translate}}\" mat-cell\n                                            *matCellDef=\"let row\"> {{row.address}} {{row.city}} </td>\n                                    </ng-container>\n\n                                    <!--Category column-->\n                                    <ng-container matColumnDef=\"category\">\n                                        <th mat-header-cell *matHeaderCellDef\n                                            mat-sort-header> {{'RESOURCES.CATEGORY' | translate}} </th>\n                                        <td attr.data-column-name=\"{{'RESOURCES.CATEGORY' | translate}}\" mat-cell\n                                            *matCellDef=\"let row\">{{row.resourceCategoryName}}</td>\n                                    </ng-container>\n\n                                    <!--Purchase column-->\n                                    <ng-container matColumnDef=\"purchase\">\n                                        <th mat-header-cell *matHeaderCellDef\n                                            mat-sort-header> {{'RESOURCES.PURCHASE' | translate}} </th>\n                                        <td attr.data-column-name=\"{{'RESOURCES.PURCHASE' | translate}}\" mat-cell\n                                            *matCellDef=\"let row\"><span\n                                                class=\"d-flex justify-content-end me-3\">{{row.totalBookingNumber}}</span>\n                                        </td>\n                                    </ng-container>\n\n                                    <!--Status column-->\n                                    <ng-container matColumnDef=\"status\">\n                                        <th mat-header-cell *matHeaderCellDef\n                                            mat-sort-header> {{'RESOURCES.STATUS' | translate}} </th>\n                                        <td attr.data-column-name=\"{{'RESOURCES.STATUS' | translate}}\" mat-cell\n                                            *matCellDef=\"let row\">\n                            <span class=\"custom-label\"\n                                  [ngClass]=\"{\n                            'label-pending' : row.status === 'pending_review',\n                            'label-active' : row.status === 'active',\n                            'label-inactive' : row.status === 'inactive'\n                        }\">\n                                <span [ngSwitch]=\"row.status\">\n                                   <span *ngSwitchCase=\"'pending_review'\">În așteptare</span>\n                                   <span *ngSwitchCase=\"'active'\">Activ</span>\n                                   <span *ngSwitchCase=\"'inactive'\">Inactiv</span>\n                                </span>\n                            </span>\n                                        </td>\n                                    </ng-container>\n\n                                    <!-- Actions Column -->\n                                    <ng-container matColumnDef=\"actions\">\n                                        <th mat-header-cell *matHeaderCellDef\n                                            class=\"actions-class\"> {{'RESOURCES.ACTIONS' | translate}}</th>\n                                        <td mat-cell *matCellDef=\"let row; let i = index;\">\n                                            <div class=\"d-flex actions-container\">\n\n                                                <!--Add-->\n                                                <button *ngIf=\"resToBeAdded[0]?.id !== row.id\"\n                                                        [disabled]=\"resToBeAdded.length > 0\"\n                                                        class=\"btn-round btn-no-outline\"\n                                                        type=\"button\"\n                                                        matTooltip=\"Adauga resursa\"\n                                                        (click)=\"addToRelatedRes(row)\">\n                                                    <i class=\"fas fa-plus\"></i>\n                                                </button>\n\n                                                <!--Remove related resource-->\n                                                <button *ngIf=\"resToBeAdded[0]?.id === row.id\"\n                                                        class=\"btn-round btn-no-outline\"\n                                                        type=\"button\"\n                                                        matTooltip=\"Elimina resursa\"\n                                                        (click)=\"removeRelatedResource()\">\n                                                    <i class=\"fas fa-trash\"></i>\n                                                </button>\n                                            </div>\n\n                                            <!--                                            &lt;!&ndash;Modal Delete Resource&ndash;&gt;-->\n                                            <!--                                            <ng-template #deleteResourceModal let-c=\"close\" let-d=\"dismiss\">-->\n                                            <!--                                                <div class=\"modal-card card\">-->\n                                            <!--                                                    <div class=\"card-header border-0\">-->\n                                            <!--                                                        <h3 class=\"m-0\">-->\n                                            <!--                                                            Ștergere resursă-->\n                                            <!--                                                        </h3>-->\n                                            <!--                                                    </div>-->\n\n                                            <!--                                                    <div class=\"card-body\">-->\n                                            <!--                                                        <p>{{ 'TEMPLATES.DELETE-WARNING' | translate}}</p>-->\n\n                                            <!--                                                        <div class=\"card-event card\">-->\n                                            <!--                                                            <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">-->\n                                            <!--                                                                <h3>#{{ (i + 1) + pageSize * (pageNumber) }} {{row.title}}</h3>-->\n                                            <!--                                                                &lt;!&ndash;                                        <p class=\"m-0\">{{userData?.firstName+' '+userData?.lastName}}</p>&ndash;&gt;-->\n                                            <!--                                                            </div>-->\n                                            <!--                                                        </div>-->\n\n                                            <!--                                                    </div>-->\n\n                                            <!--                                                    <div class=\"card-footer border-0\">-->\n                                            <!--                                                        <div class=\"row\">-->\n                                            <!--                                                            <div class=\"col-12 col-sm-6\">-->\n                                            <!--                                                                <button class=\"btn-auto btn-color-outline w-100\"-->\n                                            <!--                                                                        id=\"btnModalEventDismissDelete-{{i}}\"-->\n                                            <!--                                                                        (click)=\"closeModal()\">-->\n                                            <!--                                                                    <i class=\"fas fa-times\"></i>-->\n                                            <!--                                                                    {{ 'BTN.CANCEL' | translate}}-->\n                                            <!--                                                                </button>-->\n                                            <!--                                                            </div>-->\n\n                                            <!--                                                            <div class=\"col-12 col-sm-6\">-->\n                                            <!--                                                                <button class=\"btn-auto btn-color-fill w-100\"-->\n                                            <!--                                                                        id=\"btnModalTemplateConfirmDelete-{{i}}\"-->\n                                            <!--                                                                        (click)=\"deleteResource(row.id)\">-->\n                                            <!--                                                                    <i class=\"fas fa-check\"></i>-->\n                                            <!--                                                                    {{ 'BTN.CONFIRM' | translate}}-->\n                                            <!--                                                                </button>-->\n                                            <!--                                                            </div>-->\n                                            <!--                                                        </div>-->\n                                            <!--                                                    </div>-->\n                                            <!--                                                </div>-->\n                                            <!--                                            </ng-template>-->\n\n\n                                        </td>\n                                    </ng-container>\n\n\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedResourcesColumns\"></tr>\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedResourcesColumns;\"></tr>\n\n                                    <!-- Row shown when there is no matching data. -->\n                                    <tr class=\"mat-row\" *matNoDataRow>\n\n                                        <td class=\"mat-cell\" colspan=\"4\">{{'PROVIDER.NO_DATA'|translate}}</td>\n                                    </tr>\n                                </table>\n\n                                <!--Pagination-->\n                                <mat-paginator\n                                        [pageSizeOptions]=\"pageSizeArray\"\n                                        [length]=\"totalElements\"\n                                        [pageSize]=\"pageSizeChoose\"\n                                        (page)=\"pageChanged($event)\">\n                                </mat-paginator>\n\n                            </div>\n\n                        </div>\n\n\n                        <!--                        <div class=\"container mb-3\">-->\n                        <!--                            <div class=\"row tableContent\">-->\n                        <!--                                &lt;!&ndash;Table start&ndash;&gt;-->\n                        <!--                                <table mat-table matSort appMatTableResponsive [dataSource]=\"dataSourceRelated\"-->\n                        <!--                                       class=\"w-100\">-->\n\n                        <!--                                    &lt;!&ndash; Resource Name Column &ndash;&gt;-->\n                        <!--                                    <ng-container matColumnDef=\"title\">-->\n                        <!--                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'RESOURCES.NAME' | translate}} </th>-->\n                        <!--                                        <td attr.attr.data-column-name=\"{{'RESOURCES.NAME' | translate}}\" mat-cell *matCellDef=\"let row\">-->\n                        <!--                                            <i class=\"fas fa-users shared\" *ngIf=\"row.sharedExperience\"></i>-->\n                        <!--                                            {{row.title}}-->\n                        <!--                                        </td>-->\n                        <!--                                    </ng-container>-->\n\n                        <!--                                    &lt;!&ndash; Address column &ndash;&gt;-->\n                        <!--                                    <ng-container matColumnDef=\"address\">-->\n                        <!--                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'RESOURCES.LOCATION' | translate}} </th>-->\n                        <!--                                        <td attr.data-column-name=\"{{'RESOURCES.LOCATION' | translate}}\" mat-cell-->\n                        <!--                                            *matCellDef=\"let row\"> {{row.address}} {{row.city}} </td>-->\n                        <!--                                    </ng-container>-->\n\n                        <!--                                    &lt;!&ndash;Category column&ndash;&gt;-->\n                        <!--                                    <ng-container matColumnDef=\"category\">-->\n                        <!--                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'RESOURCES.CATEGORY' | translate}} </th>-->\n                        <!--                                        <td attr.data-column-name=\"{{'RESOURCES.CATEGORY' | translate}}\" mat-cell-->\n                        <!--                                            *matCellDef=\"let row\">{{row.resourceCategoryName}}</td>-->\n                        <!--                                    </ng-container>-->\n\n                        <!--                                    &lt;!&ndash;Purchase column&ndash;&gt;-->\n                        <!--                                    <ng-container matColumnDef=\"purchase\">-->\n                        <!--                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'RESOURCES.PURCHASE' | translate}} </th>-->\n                        <!--                                        <td attr.data-column-name=\"{{'RESOURCES.PURCHASE' | translate}}\" mat-cell *matCellDef=\"let row\"><span-->\n                        <!--                                                class=\"d-flex justify-content-end me-3\">{{row.totalBookingNumber}}</span></td>-->\n                        <!--                                    </ng-container>-->\n\n                        <!--                                    &lt;!&ndash;Status column&ndash;&gt;-->\n                        <!--                                    <ng-container matColumnDef=\"status\">-->\n                        <!--                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'RESOURCES.STATUS' | translate}} </th>-->\n                        <!--                                        <td attr.data-column-name=\"{{'RESOURCES.STATUS' | translate}}\" mat-cell *matCellDef=\"let row\">-->\n                        <!--                            <span class=\"custom-label\"-->\n                        <!--                                  [ngClass]=\"{-->\n                        <!--                            'label-pending' : row.status === 'pending_review',-->\n                        <!--                            'label-active' : row.status === 'active',-->\n                        <!--                            'label-inactive' : row.status === 'inactive'-->\n                        <!--                        }\">-->\n                        <!--                                <span [ngSwitch]=\"row.status\">-->\n                        <!--                                   <span *ngSwitchCase=\"'pending_review'\">În așteptare</span>-->\n                        <!--                                   <span *ngSwitchCase=\"'active'\">Activ</span>-->\n                        <!--                                   <span *ngSwitchCase=\"'inactive'\">Inactiv</span>-->\n                        <!--                                </span>-->\n                        <!--                            </span>-->\n                        <!--                                        </td>-->\n                        <!--                                    </ng-container>-->\n\n                        <!--                                    &lt;!&ndash; Actions Column &ndash;&gt;-->\n                        <!--                                    <ng-container matColumnDef=\"actions\">-->\n                        <!--                                        <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> {{'RESOURCES.ACTIONS' | translate}}</th>-->\n                        <!--                                        <td mat-cell *matCellDef=\"let row; let i = index;\">-->\n                        <!--                                            <div class=\"d-flex actions-container\">-->\n\n                        <!--                                                &lt;!&ndash;Add&ndash;&gt;-->\n                        <!--                                                <button class=\"btn-round btn-no-outline\"-->\n                        <!--                                                        matTooltip=\"Sterge resursa\"-->\n                        <!--                                                        type=\"button\"-->\n                        <!--                                                (click)=\"removeResource(row.id)\">-->\n                        <!--                                                    <i class=\"fas fa-times\"></i>-->\n                        <!--                                                </button>-->\n                        <!--                                            </div>-->\n\n                        <!--                                            &lt;!&ndash;                                            &lt;!&ndash;Modal Delete Resource&ndash;&gt;&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                            <ng-template #deleteResourceModal let-c=\"close\" let-d=\"dismiss\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                <div class=\"modal-card card\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                    <div class=\"card-header border-0\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                        <h3 class=\"m-0\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                            Ștergere resursă&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                        </h3>&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                    </div>&ndash;&gt;-->\n\n                        <!--                                            &lt;!&ndash;                                                    <div class=\"card-body\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                        <p>{{ 'TEMPLATES.DELETE-WARNING' | translate}}</p>&ndash;&gt;-->\n\n                        <!--                                            &lt;!&ndash;                                                        <div class=\"card-event card\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                            <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                <h3>#{{ (i + 1) + pageSize * (pageNumber) }} {{row.title}}</h3>&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                &lt;!&ndash;                                        <p class=\"m-0\">{{userData?.firstName+' '+userData?.lastName}}</p>&ndash;&gt;&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                            </div>&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                        </div>&ndash;&gt;-->\n\n                        <!--                                            &lt;!&ndash;                                                    </div>&ndash;&gt;-->\n\n                        <!--                                            &lt;!&ndash;                                                    <div class=\"card-footer border-0\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                        <div class=\"row\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                            <div class=\"col-12 col-sm-6\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                <button class=\"btn-auto btn-color-outline w-100\"&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                        id=\"btnModalEventDismissDelete-{{i}}\"&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                        (click)=\"closeModal()\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                    <i class=\"fas fa-times\"></i>&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                    {{ 'BTN.CANCEL' | translate}}&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                </button>&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                            </div>&ndash;&gt;-->\n\n                        <!--                                            &lt;!&ndash;                                                            <div class=\"col-12 col-sm-6\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                <button class=\"btn-auto btn-color-fill w-100\"&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                        id=\"btnModalTemplateConfirmDelete-{{i}}\"&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                        (click)=\"deleteResource(row.id)\">&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                    <i class=\"fas fa-check\"></i>&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                    {{ 'BTN.CONFIRM' | translate}}&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                                </button>&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                            </div>&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                        </div>&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                    </div>&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                                </div>&ndash;&gt;-->\n                        <!--                                            &lt;!&ndash;                                            </ng-template>&ndash;&gt;-->\n\n\n                        <!--                                        </td>-->\n                        <!--                                    </ng-container>-->\n\n\n                        <!--                                    <tr mat-header-row *matHeaderRowDef=\"displayedResourcesColumns\"></tr>-->\n                        <!--                                    <tr mat-row *matRowDef=\"let row; columns: displayedResourcesColumns;\"></tr>-->\n\n                        <!--                                    &lt;!&ndash; Row shown when there is no matching data. &ndash;&gt;-->\n                        <!--                                    <tr class=\"mat-row\" *matNoDataRow>-->\n\n                        <!--                                        <td class=\"mat-cell\" colspan=\"4\">{{'PROVIDER.NO_DATA'|translate}}</td>-->\n                        <!--                                    </tr>-->\n                        <!--                                </table>-->\n\n                        <!--                                &lt;!&ndash;Pagination&ndash;&gt;-->\n                        <!--                                <mat-paginator-->\n                        <!--                                        [pageSizeOptions]=\"pageSizeArray\"-->\n                        <!--                                        [length]=\"totalElementsRelated\"-->\n                        <!--                                        [pageSize]=\"pageSizeRelated\"-->\n                        <!--                                        (page)=\"pageChangedForRelatedRes($event)\" >-->\n                        <!--                                </mat-paginator>-->\n\n                        <!--                            </div>-->\n                        <!--                        </div>-->\n\n\n                    </mat-expansion-panel>\n\n                </mat-accordion>\n            </div>\n\n            <div class=\"footer-container d-flex flex-wrap justify-content-center justify-content-xl-between align-items-center\">\n                <div class=\"d-flex gap-2\">\n                    <mat-checkbox [checked]=\"userAcceptedTerms\" id=\"termsCheckbox\"></mat-checkbox>\n                    <p>\n                        Am citit și sunt de acord cu <a href=\"/content/privacy-policy\" target=\"_blank\">Politica de\n                        Confidențialitate</a> a site-ului bestinform.eu.\n                    </p>\n                </div>\n\n                <div class=\"d-flex gap-2\">\n                    <button type=\"button\" class=\"btn-auto btn-color-outline w-50\" id=\"cancel-event-form\"\n                            [routerLink]=\" isEditMode ? '../../list' : '../../events/list'\">\n                        <i class=\"fas fa-times\"></i>\n                        {{ 'BTN.CANCEL' | translate}}\n                    </button>\n\n                    <button type=\"button\" class=\"btn-auto btn-color-fill w-50\" id=\"submit-event-form\" id=\"submitEvent\"\n                            (click)=\"submitEvent()\">\n                        {{ 'BTN.SUBMIT' | translate}}\n                        <i class=\"fa fa-arrow-right\"></i>\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n";

/***/ }),

/***/ 7864:
/*!******************************************************************************************************************!*\
  !*** ./src/app/features/events/components/add-edit-event-ticket/add-edit-event-ticket.component.html?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"dialog-container\">\n\n    <!--Header-->\n    <div class=\"dialog-header\">\n        <h2>{{isEditMode ? 'Editare bilet' : 'Adăugare bilet'}}</h2>\n        <button type=\"button\" class=\"btn-long btn-color-fill\" (click)=\"close()\">\n            <i class=\"fas fa-arrow-left me-2\"></i> Înapoi\n        </button>\n    </div>\n\n    <!--Body-->\n    <mat-dialog-content class=\"dialog-content\">\n\n        <form [formGroup]=\"ticketForm\">\n            <div class=\"row mb-3\">\n                <h3 class=\"section-name\">Informatii generale</h3>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>Denumire</mat-label>\n                        <input matInput placeholder=\"Denumire\" formControlName=\"name\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                    <mat-label>Nr. tickete disponibile</mat-label>\n                    <input matInput placeholder=\"Nr. tickete disponibile\" formControlName=\"ticketsLimit\" type=\"number\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-md-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"legacy\">\n                        <mat-label>Pret (EUR/persoana)</mat-label>\n                        <input matInput placeholder=\"Pret obisnuit\" type=\"number\" formControlName=\"regularPrice\">\n                    </mat-form-field>\n                </div>\n\n<!--                <div class=\"col-12 col-md-6\">-->\n<!--                    <mat-form-field class=\"w-100\" appearance=\"legacy\">-->\n<!--                        <mat-label>Pret de weekend (EUR/persoana)</mat-label>-->\n<!--                        <input matInput placeholder=\"Pret pentru weekend\" type=\"number\" formControlName=\"weekendPrice\">-->\n<!--                    </mat-form-field>-->\n<!--                </div>-->\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6 col-12\">\n                    <!--Category Name-->\n                    <h3 class=\"section-name\">Politici de rezervare</h3>\n                    <mat-error *ngIf=\"ticketForm.get('bookingPolicies').hasError('requireCheckboxesToBeChecked') && ticketForm.get('bookingPolicies').touched\">\n                        You have to check one\n                    </mat-error>\n\n                    <!--Checkboxes-->\n                    <div class=\"d-flex flex-column\" formGroupName=\"bookingPolicies\">\n                        <mat-checkbox formControlName=\"depositRequired\" (change)=\"bookingPolicyEdit($event.checked, 'depositRequired')\">Se cere depozit</mat-checkbox>\n                        <div class=\"row\" *ngIf=\"ticketForm.get('bookingPolicies').get('depositRequired').value === true\">\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>Depozit (%)</mat-label>\n                                <input matInput type=\"text\" formControlName=\"depositRequiredPercentage\" (ngModelChange)=\"checkDepositType('percentage')\">\n                                <mat-error *ngIf=\"ticketForm.get('bookingPolicies').get('depositRequiredPercentage').hasError('pattern')\">\n                                    Sunt acceptate doar numere cuprinse între 1 și 100.\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\">\n                            <mat-form-field appearance=\"standard\" class=\"w-100\">\n                                <mat-label>Depozit (EUR)</mat-label>\n                                <input matInput type=\"text\" formControlName=\"depositRequiredAmount\" (ngModelChange)=\"checkDepositType('amount')\">\n                                <mat-error *ngIf=\"ticketForm.get('bookingPolicies').get('depositRequiredAmount').hasError('pattern')\">\n                                    Sunt acceptate doar numere mai mari ca 0.\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n\n                    </div>\n                        <mat-checkbox formControlName=\"advanceFullPayment\" (change)=\"bookingPolicyEdit($event.checked, 'advanceFullPayment')\">Plata completa in avans</mat-checkbox>\n                        <mat-checkbox formControlName=\"advancePartialPayment\" (change)=\"bookingPolicyEdit($event.checked, 'advancePartialPayment')\">Plata partiala in avans</mat-checkbox>\n\n                        <mat-form-field appearance=\"standard\" class=\"w-100\" *ngIf=\"ticketForm.get('bookingPolicies').get('advancePartialPayment').value\">\n                            <mat-label>Avans (%)</mat-label>\n                            <input matInput type=\"text\" formControlName=\"advancePartialPaymentPercentage\">\n                            <mat-error *ngIf=\"ticketForm.get('bookingPolicies').get('advancePartialPaymentPercentage').hasError('pattern')\">\n                                Sunt acceptate doar numere cuprinse între 1 și 100.\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n        </form>\n\n\n\n    </mat-dialog-content>\n\n    <!--Footer-->\n    <mat-dialog-actions class=\"dialog-footer\">\n        <!--Cancel Button-->\n        <button class=\"btn-long btn-color-outline\" (click)=\"close()\">\n            <i class=\"fas fa-times\"></i>\n            Anulează\n        </button>\n\n        <!--Confirm Button-->\n        <button class=\"btn-long btn-color-fill\" (click)=\"confirm()\">\n            Confirmă\n            <i class=\"fas fa-check\"></i>\n        </button>\n    </mat-dialog-actions>\n\n</div>\n";

/***/ }),

/***/ 5655:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/events/components/delete-event-ticket/delete-event-ticket.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"dialog-container\">\n\n    <!--Header-->\n    <div class=\"dialog-header\">\n        <h2>Stergere Card</h2>\n        <p>Acțiunea de stergere card este permanentă și complet irevocabilă.</p>\n    </div>\n\n    <!--Body-->\n    <mat-dialog-content class=\"dialog-content\">\n\n\n        <div class=\"row\">\n\n            <!--Name-->\n            <div class=\"col-12\">\n                <h5 class=\"section-title\">Numele: <span>{{currentTicket.name}}</span></h5>\n            </div>\n\n            <!--Regular Price-->\n            <div class=\"col-md-6 col-12\">\n                <h5 class=\"section-title\">Regular price: <span>{{currentTicket.regularPrice}} EUR</span></h5>\n            </div>\n\n            <!--Weekend Price-->\n            <div class=\"col-md-6 col-12\">\n                <h5 class=\"section-title\">Weekend price: <span>{{currentTicket.weekendPrice}} EUR</span></h5>\n            </div>\n\n            <!--Tickets limit-->\n            <div class=\"col-md-6 col-12\" *ngIf=\"currentTicket.limit\">\n                <h5 class=\"section-title\">Nr. tickete disponibile: <span>{{currentTicket.ticketsLimit}}</span></h5>\n            </div>\n\n\n        </div>\n\n\n    </mat-dialog-content>\n\n    <!--Footer-->\n    <mat-dialog-actions class=\"dialog-footer\">\n        <!--Cancel Button-->\n        <button class=\"btn-long btn-color-outline w-100\" (click)=\"close()\">\n            <i class=\"fas fa-times\"></i>\n            Anulează\n        </button>\n\n        <!--Confirm Button-->\n        <button class=\"btn-long btn-color-fill w-100\" (click)=\"deleteTicket()\">\n            Confirmă\n            <i class=\"fas fa-check\"></i>\n        </button>\n    </mat-dialog-actions>\n\n</div>\n\n";

/***/ }),

/***/ 61819:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/events/components/dynamic-attributes/dynamic-attributes.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container [ngSwitch]=\"inputFormData.valueType\">\n\n    <!--Simple Text-->\n    <mat-form-field class=\"w-100\" appearance=\"standard\" *ngSwitchCase=\"'text'\">\n        <mat-label>{{inputFormData.name | titlecase}}</mat-label>\n        <input matInput\n               type=\"text\"\n               [formControl]=\"control\"\n               [placeholder]=\"inputFormData.valuePlaceholder\">\n    </mat-form-field>\n\n    <!--Textarea-->\n    <mat-form-field class=\"w-100\" appearance=\"standard\" *ngSwitchCase=\"'textarea'\">\n        <mat-label>{{inputFormData.name | titlecase}}</mat-label>\n        <textarea matInput\n                  [formControl]=\"control\"\n                  [placeholder]=\"inputFormData.valuePlaceholder\">\n        </textarea>\n    </mat-form-field>\n\n    <!--Number-->\n    <mat-form-field class=\"w-100\" appearance=\"standard\" *ngSwitchCase=\"'number'\">\n        <mat-label>{{inputFormData.name | titlecase}}</mat-label>\n        <input type=\"number\" matInput\n               [placeholder]=\"inputFormData.valuePlaceholder\"\n               [formControl]=\"control\">\n    </mat-form-field>\n\n    <!--Select-->\n    <mat-form-field class=\"w-100\" appearance=\"standard\" *ngSwitchCase=\"'select'\">\n        <mat-label>{{inputFormData.name | titlecase}}</mat-label>\n        <mat-select [formControl]=\"control\">\n            <mat-option *ngFor=\"let option of inputFormData.valueOptions\"\n                        [value]=\"option\">\n                {{option}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n\n    <div *ngSwitchCase=\"'toggle'\" class=\"w-100 d-flex align-items-center justify-content-between mb-2\">\n        <label class=\"custom-control-label d-flex align-items-center\"\n               for=\"switch\">{{inputFormData.name | titlecase}}</label>\n        <label class=\"switch\">\n            <input type=\"checkbox\" [formControl]=\"control\" id=\"switch\" checked>\n            <span class=\"slider round\"></span>\n        </label>\n    </div>\n\n\n    <mat-form-field appearance=\"standard\" *ngSwitchCase=\"'datetime'\" class=\"w-100\">\n        <mat-label>{{inputFormData.name | titlecase}}</mat-label>\n        <input matInput [matDatepicker]=\"picker\" [formControl]=\"control\" [placeholder]=\"inputFormData.valuePlaceholder\">\n<!--        <mat-hint>MM/DD/YYYY</mat-hint>-->\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n\n</ng-container>\n\n";

/***/ }),

/***/ 46709:
/*!***********************************************************************************!*\
  !*** ./src/app/features/events/events-list/events-list.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <app-dashboard-header pageTitleOne=\"{{ 'EVENTS.LIST' | translate }}\"\n                          [buttonBackRoute]=\"'../../dashboard'\"\n                          [buttonAddRoute]=\"'../../events/add'\">\n    </app-dashboard-header>\n\n    <div class=\"row filterRow\" (keydown.enter)=\"callSubmitButton($event)\">\n        <div class=\"col-7\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <mat-form-field appearance=\"standard\" class=\"w-100\">\n                        <mat-label>{{'FIELD.TITLE' | translate}}</mat-label>\n                        <input id=\"inputFilterByTitle\" matInput [(ngModel)]=filterTitle\n                               placeholder=\"Ex. expozitie\"\n                               #inputTitle>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3\">\n                    <mat-form-field appearance=\"standard\" class=\"w-100\">\n                        <mat-label>{{'FIELD.COUNTRY' | translate}}</mat-label>\n                        <mat-select id=\"selectFilterByCountry\" [(ngModel)]=filterCountry\n                                    (selectionChange)=\"getCities($event)\">\n                            <mat-option *ngFor=\"let country of countries\"\n                                        [value]=\"country\">{{country}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3\">\n                    <mat-form-field appearance=\"standard\" class=\"w-100\">\n                        <mat-label>{{'FIELD.CITY' | translate}}</mat-label>\n                        <mat-select id=\"selectFilterByCity\" [(ngModel)]=filterCity>\n                            <mat-option *ngFor=\"let city of cities\" [value]=\"city.name\">{{city.name}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3\">\n                    <mat-form-field appearance=\"standard\" class=\"w-100\">\n                        <mat-label>{{'EVENTS.EVENT-TYPE'|translate}}</mat-label>\n                        <mat-select [(ngModel)]=\"filterEventType\"\n                                    (selectionChange)=\"selectedResourceType($event.value)\">\n                            <mat-option *ngFor=\"let resType of resourceTypes\"\n                                        [value]=\"resType.id\">{{currentLanguage === 'ro' ? resType.nameRo : resType.nameEn}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-5 d-flex align-items-center justify-content-end gap-2\">\n            <button type=\"button\" class=\"btn-round btn-color-outline\" id=\"clearFilterBtn\" (click)=\"clearFields()\"><i class=\"fas fa-sync\"></i></button>\n            <button type=\"button\" class=\"btn-long btn-color-outline\" id=\"advancedFilterBtn\" (click)=\"advancedClick()\"><i [ngClass]=\"isAdvanced ? 'fas fa-arrow-up' : 'fas fa-arrow-down'\"></i>{{'BTN.ADVANCED-FILTER' | translate}}</button>\n            <button type=\"button\" class=\"btn-long btn-color-fill\" (click)=\"applyFilter()\">{{'BTN.FILTER' | translate}} <i class=\"fas fa-filter\"></i></button>\n        </div>\n\n        <div [ngClass]=\"{'d-none': !isAdvanced}\">\n            <div class=\"advanced-filter-first row\">\n                    <!-- <div class=\"col-3\">\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>{{'EVENTS.SHARED-EXPERIENCE' | translate}}</mat-label>\n                            <mat-select id=\"selectSharedExperience\" [(ngModel)]=\"filterSharedExperience\">\n                                <mat-option value=\"true\">{{'BTN.YES' | translate}}</mat-option>\n                                <mat-option value=\"false\">{{'BTN.NO' | translate}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div> -->\n                    <div class=\"col-3\">\n                        <mat-form-field appearance=\"standard\" class=\"w-100\">\n                            <mat-label>Status</mat-label>\n                            <mat-select id=\"statusFilter\" [(ngModel)]=\"filterStatus\">\n                                <mat-option value=\"Active\"\n                                            id=\"ActiveStatusFilter\">{{'STATUS.ACTIVE' | translate}}</mat-option>\n                                <mat-option value=\"Pending\"\n                                            id=\"PendingStatusFilter\">{{'STATUS.PENDING' | translate}}</mat-option>\n                                <mat-option value=\"Inactive\"\n                                            id=\"InactiveStatusFilter\">{{'STATUS.INACTIVE' | translate}}</mat-option>\n                                <mat-option value=\"Draft\"\n                                            id=\"DraftStatusFilter\">{{'STATUS.DRAFT' | translate}}</mat-option>\n                                <mat-option value=\"Archived\"\n                                            id=\"ArchivedStatusFilter\">{{'STATUS.ARCHIVED' | translate}}</mat-option>\n                                <mat-option value=\"In progress\"\n                                            id=\"In progressStatusFilter\">{{'STATUS.IN_PROGRESS' | translate}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-3\" *ngFor=\"let attribute of attributesArray\">\n\n                        <app-dynamic-inputs [control]=\"form.get(attribute?.name)\"\n                                            [inputFormData]=\"attribute\"\n                        ></app-dynamic-inputs>\n                    </div>\n                </div>\n        </div>\n    </div>\n\n    <div class=\"row tableContent\">\n\n            <table mat-table matSort appMatTableResponsive [dataSource]=\"dataSource\" (matSortChange)=applySort($event)>\n\n                <!-- ID Column -->\n                <ng-container matColumnDef=\"id\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> #</th>\n                    <td data-column-name=\"#\" mat-cell\n                        *matCellDef=\"let row; let i = index;\"> {{ (i + 1) + pageSize * (pageNumber)}} </td>\n                </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Denumire</th>\n                    <td data-column-name=\"Denumire\" mat-cell *matCellDef=\"let row\" class=\"custom-column-w\"><a\n                            routerLink=\"/client/events/view/{{row.slug}}\" class=\"view-event\">{{row.title}} </a>\n                    </td>\n                </ng-container>\n\n                <!-- Date Column -->\n                <ng-container matColumnDef=\"date\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Data</th>\n                    <td data-column-name=\"Date\" mat-cell *matCellDef=\"let row\"> {{row.date | date}} </td>\n                </ng-container>\n\n                <!-- Location Column -->\n                <ng-container matColumnDef=\"location\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Location</th>\n                    <td data-column-name=\"Location\" mat-cell\n                        *matCellDef=\"let row\"> {{(row.city || 'necompletat') + ', ' + (row.country || 'necompletat')}} </td>\n                </ng-container>\n\n                <!--            Status Column-->\n                <ng-container matColumnDef=\"status\">\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.STATUS'|translate}}</th>\n                    <td mat-cell *matCellDef=\"let row\" attr.data-column-name=\"{{'FIELD.STATUS'|translate}}\">\n        <span class=\"custom-label\"\n              [ngClass]=\"{\n                            'label-pending' : row.status === 'pending_review',\n                            'label-active' : row.status === 'active',\n                            'label-inactive' : row.status === 'inactive'\n                        }\"><span [ngSwitch]=\"row.status\">\n                                   <span *ngSwitchCase=\"'pending_review'\">În așteptare</span>\n                                   <span *ngSwitchCase=\"'active'\">Activ</span>\n                                   <span *ngSwitchCase=\"'inactive'\">Inactiv</span>\n                                </span></span>\n                        <!-- {{element.status}} -->\n\n                    </td>\n                </ng-container>\n\n                <!--Views column-->\n                <ng-container matColumnDef=\"views\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Vizualizari </th>\n                    <td attr.data-column-name=\"Vizualizari\" mat-cell *matCellDef=\"let row\"><span\n                            class=\"d-flex justify-content-end me-3\">{{row.views}}</span></td>\n                </ng-container>\n\n                <!-- Actions Column -->\n                <ng-container matColumnDef=\"actions\">\n                    <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> Acțiuni</th>\n                    <td mat-cell *matCellDef=\"let row; let i = index;\">\n                        <div *ngIf=\"( currentUserId === row.userId ||  (currentUserRole === 'ROLE_STAFF') || (currentUserRole === 'ROLE_SUPER_ADMIN') )\" class=\"d-flex actions-container flex-wrap py-2\">\n                            <!--                        <button class=\"btn-round btn-no-outline\"-->\n                            <!--                                matTooltip=\"Vizualizează\"-->\n                            <!--                                id=\"btnListViewEvent-{{i}}\"-->\n                            <!--                                routerLink=\"../../events/view/{{ row.id }}\">-->\n                            <!--                            <i class=\"far fa-eye\"></i>-->\n                            <!--                        </button>-->\n\n                            <button class=\"btn-round btn-no-outline\"\n                                    matTooltip=\"Editează\"\n                                    id=\"btnListEditEvent-{{i}}\"\n                                    routerLink=\"../../events/edit/{{ row.id }}\">\n                                <i class=\"fas fa-pen\"></i>\n                            </button>\n\n                            <!--Reservation-->\n                            <button class=\"btn-round btn-no-outline\"\n                                    matTooltip=\"Rezervari\"\n                                    [routerLink]=\"'../../reservations/list'\"\n                                    [queryParams]=\"{eventid: row.id}\">\n                                <i class=\"fas fa-list\"></i>\n                            </button>\n\n                            <button class=\"btn-round btn-no-outline\"\n                                    matTooltip=\"Schimba status\"\n                                    id=\"btnListEditEvent-{{i}}\"\n\n                                    (click)=\"openModalData(changeStatus, row.userId, row.status)\">\n                                <i class=\"fas fa-toggle-on\"></i>\n                            </button>\n\n                            <button class=\"btn-round btn-no-outline\"\n                                    matTooltip=\"Arhivare\"\n                                    id=\"btnOpenModalArchiveEvent-{{i}}\"\n                                    (click)=\"openModal(archiveResourceModal, row.userId)\">\n                                <i class=\"fas fa-archive\"></i>\n                            </button>\n\n                            <button class=\"btn-round btn-no-outline\"\n                                    matTooltip=\"Șterge\"\n                                    id=\"btnOpenModalDeleteEvent-{{i}}\"\n                                    *ngIf=\"currentUserRole !== 'ROLE_PROVIDER'\"\n                                    (click)=\"openModal(deleteEvent, row.userId)\">\n                                <i class=\"fas fa-trash\"></i>\n                            </button>\n\n                        </div>\n\n\n\n                        <!--Modal Delete Resource-->\n                        <ng-template #deleteEvent let-c=\"close\" let-d=\"dismiss\">\n                            <div class=\"modal-card card\">\n                                <div class=\"card-header border-0\">\n                                    <h3 class=\"m-0\">\n                                        {{ 'GENERAL.DELETE_EVENT' | translate }}\n                                    </h3>\n                                </div>\n\n                                <div class=\"card-body\">\n                                    <p>{{ 'MESSAGE.EVENT_DELETE_WARNING' | translate}}</p>\n\n                                    <div class=\"card-event card\">\n                                        <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">\n                                            <h3>#{{ (i + 1) + pageSize * (pageNumber - 1)}} {{row.title}}</h3>\n                                            <p class=\"m-0\">{{userName}}</p>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"card-footer border-0\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-outline w-100\"\n                                                    id=\"btnModalEventDismissDelete-{{i}}\"\n                                                    (click)=\"d()\">\n                                                <i class=\"fas fa-times\"></i>\n                                                {{ 'BTN.CANCEL' | translate}}\n                                            </button>\n                                        </div>\n\n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-fill w-100\"\n                                                    id=\"btnModalEventConfirmDelete-{{i}}\"\n                                                    (click)=\"deleteResource(row.id)\">\n                                                <i class=\"fas fa-check\"></i>\n                                                {{ 'BTN.CONFIRM' | translate}}\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n\n                        <!--Change Status -->\n                        <ng-template #changeStatus let-c=\"close\" let-d=\"dismiss\">\n                            <div class=\"modal-card card\">\n                                <div class=\"card-header border-0\">\n                                    <h3 class=\"m-0\">\n                                        {{'EDITORIALS.CHANGE-STATUS-TITLE' | translate}}\n                                    </h3>\n                                </div>\n\n                                <div class=\"card-body\">\n                                    <p>{{ 'MESSAGE.EVENT_DELETE_WARNING' | translate}}</p>\n\n                                    <div class=\"card-event card\">\n                                        <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">\n                                            <h3>#{{ (i + 1) + pageSize * (pageNumber - 1)}} {{row.title}}</h3>\n                                            <p class=\"m-0\">{{userName}}</p>\n                                        </div>\n                                    </div>\n\n                                    <form [formGroup]=\"changeStatusForm\">\n                                        <mat-form-field appearance=\"outline\" class=\"w-100 pt-3\">\n                                            <mat-label>Status</mat-label>\n                                            <mat-select formControlName=\"status\" id=\"statusChange\">\n                                                <mat-option *ngIf=\"currentUserRole !== 'ROLE_PROVIDER'\" value=\"active\"\n                                                            id=\"Active\">{{'STATUS.ACTIVE' | translate}}</mat-option>\n                                                <mat-option value=\"pending_review\"\n                                                            id=\"Pending\">{{'STATUS.PENDING' | translate}}</mat-option>\n                                                <mat-option value=\"inactive\"\n                                                            id=\"Inactive\">{{'STATUS.INACTIVE' | translate}}</mat-option>\n                                            </mat-select>\n                                            <mat-error *ngIf=\"changeStatusForm.controls.status.hasError('required')\">\n                                                {{'ERROR.REQUIRED' | translate}}\n                                            </mat-error>\n                                        </mat-form-field>\n                                    </form>\n                                </div>\n\n                                <div class=\"card-footer border-0\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-outline w-100\"\n                                                    id=\"btnModalEventDismissDelete-{{i}}\"\n                                                    (click)=\"closeModal()\">\n                                                <i class=\"fas fa-times\"></i>\n                                                {{ 'BTN.CANCEL' | translate}}\n                                            </button>\n                                        </div>\n\n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-fill w-100\"\n                                                    id=\"btnModalEventConfirmDelete-{{i}}\"\n                                                    (click)=\"changeEventStatus(row.id, changeStatusForm.controls.status.value)\">\n                                                <i class=\"fas fa-check\"></i>\n                                                {{ 'BTN.CONFIRM' | translate}}\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n\n                        <!--                    Modal Archive Resource-->\n                        <ng-template #archiveResourceModal let-c=\"close\" let-d=\"dismiss\">\n                            <div class=\"modal-card card\">\n                                <div class=\"card-header border-0\">\n                                    <h3 class=\"m-0\">\n                                        Arhivare eveniment\n                                    </h3>\n                                </div>\n\n                                <div class=\"card-body\">\n                                    <p>Acțiunea de ascundere eveniment nu este permanentă și complet irevocabilă.</p>\n\n                                    <div class=\"card-event card\">\n                                        <div class=\"card-body d-flex justify-content-between align-items-center flex-row\">\n                                            <h3 class=\"mb-0\">#{{ (i + 1) + pageSize * (pageNumber) }} {{row.title}}</h3>\n                                            <!--                                        <p class=\"m-0\">{{userData?.firstName+' '+userData?.lastName}}</p>-->\n                                            <span class=\"custom-label\"\n                                                  [ngClass]=\"{\n                            'label-pending' : row.status === 'pending_review',\n                            'label-active' : row.status === 'active',\n                            'label-inactive' : row.status === 'inactive'\n                        }\"><span [ngSwitch]=\"row.status\">\n                                   <span *ngSwitchCase=\"'pending_review'\">În așteptare</span>\n                                   <span *ngSwitchCase=\"'active'\">Activ</span>\n                                   <span *ngSwitchCase=\"'inactive'\">Inactiv</span>\n                                </span></span>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"card-footer border-0\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-outline w-100\"\n                                                    id=\"btnModalEventDismissDelete-{{i}}\"\n                                                    (click)=\"closeModal()\">\n                                                <i class=\"fas fa-times\"></i>\n                                                {{ 'BTN.CANCEL' | translate}}\n                                            </button>\n                                        </div>\n\n                                        <div class=\"col-12 col-sm-6\">\n                                            <button class=\"btn-auto btn-color-fill w-100\"\n                                                    id=\"btnModalTemplateConfirmDelete-{{i}}\"\n                                                    (click)=\"archiveResource(row.id)\">\n                                                <i class=\"fas fa-check\"></i>\n                                                {{ 'BTN.CONFIRM' | translate}}\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </td>\n                </ng-container>\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <!-- Row shown when there is no matching data. -->\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{inputTitle.value}}\"</td>\n                </tr>\n            </table>\n\n            <mat-paginator [pageSizeOptions]=\"pageSizeArray\"\n                           [pageSize]=\"pageSize\"\n                           [length]=\"totalElements\"\n                           (page)=\"pageChanged($event)\"\n                           aria-label=\"Select page of events\">\n            </mat-paginator>\n\n        </div>\n\n        <div class=\"card-footer border-0\">\n\n        </div>\n</div>\n";

/***/ }),

/***/ 67814:
/*!*********************************************************************************!*\
  !*** ./src/app/features/events/view-event/view-event.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"dataIsLoaded\" class=\"white-background d-flex flex-column\">\n    <img *ngIf=\"eventData?.featuredImage?.filePath\"\n         [src]=\"eventData.featuredImage.filePath\" class=\"thumbnail\" alt=\"thumbnail\">\n\n    <div class=\"container\">\n        <h1 class=\"responsive-header-text\">\n            {{ eventData.title | titlecase}}\n        </h1>\n\n        <div class=\"event-location-time d-flex flex-wrap\n                flex-column flex-lg-row\n                justify-content-start\">\n            <div class=\"d-flex align-items-center gap-2\n                    me-lg-auto\" *ngIf=\"eventBenefits?.length > 0\">\n                <i *ngIf=\"eventBenefits.length > 0 \" class=\"fas fa-tag\"></i>\n                <p *ngFor=\"let benefit of eventBenefits; let i = index\">\n                    {{ benefit }}<span *ngIf=\"i !== eventBenefits.length - 1\">,</span>\n                </p>\n            </div>\n\n            <div class=\"d-flex align-items-center gap-2 me-lg-3\">\n                <i class=\"fas fa-list\"></i>\n                <p>{{domain}}</p>\n            </div>\n\n            <div class=\"d-flex align-items-center gap-2 me-lg-3\">\n                <i class=\"far fa-calendar-alt\"></i>\n                <p>\n                    {{ \"EVENTS.DATE-EVENT\" | translate}}:\n                    {{ eventData?.startDate | date : 'dd/MM/yyyy'}}\n                </p>\n            </div>\n\n            <div class=\"d-flex align-items-center gap-2\">\n                <i class=\"far fa-clock\"></i>\n                <p>\n                    {{ \"EVENTS.EVENT-TIME\" | translate}}:\n                    {{ eventData?.startDate | date : 'H:mm'}}\n                </p>\n            </div>\n        </div>\n\n        <div class=\"event-details d-flex align-items-center justify-content-center\">\n            <div class=\"d-flex flex-column align-items-center\n                    me-lg-auto gap-2\">\n                <h1 class=\"d-flex gap-2 m-0\">\n                    {{ eventData?.startDate | date : 'dd'}}\n                    <span>{{ (eventData?.startDate | date : 'MMM') | uppercase}}</span>\n                </h1>\n\n                <p>\n                    {{ eventData?.startDate | date : 'E H:mm'}}\n                </p>\n            </div>\n\n            <div class=\"d-flex flex-column align-items-center align-items-lg-start\n                    gap-2\">\n                <h2 class=\"m-0 text-center\">\n                    {{ eventData.title | titlecase | slice : 0 : 50}}\n                    <ng-container *ngIf=\"eventData.title.length > 50\">\n                        <span [matTooltip]=\"eventData.title\">\n                            ...\n                        </span>\n                    </ng-container>\n                </h2>\n\n                <div *ngIf=\"eventData.address && eventData.city\" class=\"d-flex align-items-center gap-2\">\n                    <i class=\"fas fa-map-marker-alt\"></i>\n                    <p>{{ eventData.address }}, {{ eventData.city }}</p>\n                </div>\n            </div>\n\n            <div class=\"d-flex gap-2 ms-lg-auto\">\n<!--                <button class=\"btn-round btn-white-outline\">-->\n<!--                    <i class=\"fas fa-share\"></i>-->\n<!--                </button>-->\n\n<!--                <button class=\"btn-round btn-white-outline\">-->\n<!--                    <i class=\"far fa-star\"></i>-->\n<!--                </button>-->\n\n                <button class=\"btn-auto btn-color-fill\"\n                        (click)=\"navigateToEventsTicket()\">\n                    <i class=\"fas fa-ticket-alt\"></i>\n                    {{ \"EVENTS.TICKETS\" | translate}}\n                </button>\n            </div>\n        </div>\n\n        <h2 class=\"mb-3\">\n            {{ \"EVENTS.DETAILS\" | translate }}\n        </h2>\n\n        <p class=\"mb-5 event-description\">\n            {{ eventData.description }}\n        </p>\n\n        <div *ngIf=\"eventData.images\" class=\"row gallery-container\">\n            <div class=\"col-9 selected-image\">\n                <img [src]=\"selectedImage\" class=\"img-fluid\" alt=\"selected-image\">\n            </div>\n\n            <div class=\"col-3 side-gallery-container\">\n                <div *ngFor=\"let image of eventData.images\"\n                     (click)=\"changeImage(image.filePath)\"\n                     class=\"image-container\"\n                >\n                    <img [src]=\"image.filePath\" class=\"img-fluid\" alt=\"gallery-image\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-container *ngIf=\"($otherEvents | async) as otherEvents\">\n    <div class=\"might-like-section row container-fluid mx-0\">\n        <div class=\"col\">\n            <div class=\"container cards-container\">\n                <!--<p class=\"p-title m-0\">{{'GENERAL.ACTIVITIES' | translate}}</p>\n                <div class=\"divider\">\n                </div>-->\n                <!--<p class=\"description\">{{'GENERAL.BOOK' | translate}}Cluj-Napoca, Cluj County.</p>-->\n\n                <h3>\n                    You might also like...\n                </h3>\n\n                <div class=\"container d-flex justify-content-between flex-wrap px-0\">\n                    <ng-container *ngFor=\"let event of otherEvents | slice : 0 : 4\">\n                        <app-resource-card [resource]=\"event\"  [routerLink]=\"['/client/events/view/' + event.slug]\"></app-resource-card>\n                    </ng-container>\n                </div>\n                <!--<div class=\"more d-flex justify-content-end\">\n                    <a>{{'GENERAL.SEE-MORE' | translate}} <i class=\"fas fa-arrow-right\"></i></a>\n                </div>-->\n            </div>\n\n        </div>\n    </div>\n</ng-container>\n";

/***/ }),

/***/ 81321:
/*!***********************************************************************************************************!*\
  !*** ./src/app/standalone-components/event-ticket-preview/event-ticket-preview.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card ticket-card\">\n    <div class=\"card-body d-flex justify-content-between\">\n        <div class=\"info\">\n            <p class=\"mb-0\"><span>Denumire: </span><br> {{ticketData?.name}}</p>\n            <p class=\"mb-0\"><span>Preț: </span><br>  {{ticketData?.regularPrice}}</p>\n<!--            <p class=\"mb-0\"><span>Preț de weekend: </span><br>  {{ticketData?.weekendPrice}}</p>-->\n            <p class=\"mb-0\"><span>Nr. tickete disponibile: </span> <br> {{ticketData?.ticketsLimit}}</p>\n        </div>\n\n\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_events_events_module_ts.js.map