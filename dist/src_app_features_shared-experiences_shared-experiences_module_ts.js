(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_shared-experiences_shared-experiences_module_ts"],{

/***/ 46218:
/*!****************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/activity-place/activity-place.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityPlaceComponent": () => (/* binding */ ActivityPlaceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activity_place_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-place.component.html?ngResource */ 86321);
/* harmony import */ var _activity_place_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-place.component.scss?ngResource */ 41250);
/* harmony import */ var _activity_place_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_activity_place_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);









let ActivityPlaceComponent = class ActivityPlaceComponent {
  constructor(resourceService, modalService, datePipe) {
    this.resourceService = resourceService;
    this.modalService = modalService;
    this.datePipe = datePipe;
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.chosenResourceTimeslots = [];
    this.showErrorMsg = false;
    this.today = new Date();
    this.timeslotsArray = [];
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.sentResource = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.pageSizeArray = [5, 10, 25, 100];
    this.sorting = 'date';
    this.dir = 'desc';
  }
  ngOnInit() {
    this.pageSize = 5;
    this.pageNumber = 1;
    this.getActivityResources();
  }
  getActivityResources() {
    this.resourcesArray = [];
    const filterObj = {
      title: this.searchFilter.value !== '' ? this.searchFilter.value : null,
      sharedExperience: true,
      availableResource: true
    };
    this.resourceService.listResourceFiltered(this.pageNumber - 1, this.pageSize, this.sorting, this.dir, filterObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: resources => {
        console.log(resources.content);
        this.paginationInfo = resources;
        this.resourcesArray = resources.content;
      }
    });
  }
  pageChanged(event) {
    this.resourcesArray = [];
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    const filterObj = {
      title: this.searchFilter.value !== '' ? this.searchFilter.value : null,
      sharedExperience: true,
      availableResource: true
    };
    this.resourceService.listResourceFiltered(this.pageNumber - 1, this.pageSize, this.sorting, this.dir, filterObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: resources => {
        this.paginationInfo = resources;
        this.resourcesArray = resources.content;
      }
    });
  }
  getTimepickerForResource(resourceId) {
    this.resourceService.getTimeslotsByResourceId(resourceId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: timeslots => {
        this.timeslotsArray = timeslots;
        console.log('toate activitatile', timeslots);
        console.log('TIMESLOTS FOR CHOSEN RS', timeslots[0]?.slotItems);
        this.bookingTimeslotId = null;
        this.date = null;
      }
    });
  }
  bookingTimeslotChanged(id) {
    console.log(id);
    this.bookingTimeslotId = id;
    this.date = null;
    this.chosenResourceTimeslots = [];
  }
  sendResource(objToSend) {
    this.sentResource.emit(objToSend);
  }
  dateChanged() {
    console.log(this.datePipe.transform(this.date, 'EEEE'));
    this.slotChosen = undefined;
    this.resourceService.getAvailableSlotByDate(this.bookingTimeslotId, this.datePipe.transform(this.date, 'yyyy-MM-dd')).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: timeslots => {
        console.log('TIMESLOTS FOR CHOSEN RS', timeslots);
        this.chosenResourceTimeslots = timeslots;
      }
    });
  }
  confirm() {
    if (this.chosenResource !== null && this.date !== null && this.slotChosen !== undefined) {
      const objToSend = {
        ...this.chosenResource,
        chosenDate: this.datePipe.transform(this.date, 'yyyy-MM-dd'),
        chosenSlot: this.slotChosen,
        bookingTimeslot: this.bookingTimeslotId
      };
      console.log(this.slotChosen);
      this.sendResource(objToSend);
      this.modalService.dismissAll();
      this.showErrorMsg = false;
    } else {
      this.showErrorMsg = true;
      return;
    }
  }
  openModal(content, resource) {
    this.modalService.open(content, {
      centered: true,
      size: 'md'
    });
    this.getTimepickerForResource(resource.id);
    console.log(resource);
    this.chosenResource = resource;
    this.chosenResourceTimeslots = [];
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
  }];
  static #_2 = this.propDecorators = {
    sentResource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }]
  };
};
ActivityPlaceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-activity-place',
  template: _activity_place_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [(_activity_place_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ActivityPlaceComponent);


/***/ }),

/***/ 65463:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/button-create/button-create.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonCreateComponent": () => (/* binding */ ButtonCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _button_create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-create.component.html?ngResource */ 29131);
/* harmony import */ var _button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-create.component.scss?ngResource */ 26928);
/* harmony import */ var _button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/_services/userData.service */ 32763);






let ButtonCreateComponent = class ButtonCreateComponent {
  constructor(userService) {
    this.userService = userService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.userService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: currentUser => {
        this.user = currentUser;
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }];
};
ButtonCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-button-create',
  template: _button_create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ButtonCreateComponent);


/***/ }),

/***/ 2914:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/select-time/select-time.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectTimeComponent": () => (/* binding */ SelectTimeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _select_time_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-time.component.html?ngResource */ 34613);
/* harmony import */ var _select_time_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-time.component.scss?ngResource */ 75660);
/* harmony import */ var _select_time_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_select_time_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SelectTimeComponent = class SelectTimeComponent {};
SelectTimeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-select-time',
  template: _select_time_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_select_time_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SelectTimeComponent);


/***/ }),

/***/ 38442:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/create-shared-experience/create-shared-experience.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSharedExperienceComponent": () => (/* binding */ CreateSharedExperienceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_shared_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-shared-experience.component.html?ngResource */ 52534);
/* harmony import */ var _create_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-shared-experience.component.scss?ngResource */ 34129);
/* harmony import */ var _create_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_create_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/shared-experiences.service */ 229);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/resources.service */ 3145);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);













let CreateSharedExperienceComponent = class CreateSharedExperienceComponent {
  constructor(fb, datePipe, modalService, sharedExperienceService, route, resourceService, toastService, router) {
    this.fb = fb;
    this.datePipe = datePipe;
    this.modalService = modalService;
    this.sharedExperienceService = sharedExperienceService;
    this.route = route;
    this.resourceService = resourceService;
    this.toastService = toastService;
    this.router = router;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.currentDay = moment__WEBPACK_IMPORTED_MODULE_5___default()();
    this.gotResource = false;
    this.isEditMode = false;
    this.today = new Date();
    this.emptyData = {
      name: '',
      slug: '',
      description: '',
      resourceType: '',
      resourceId: null
    };
  }
  ngOnInit() {
    this.gotResource = false;
    this.formInit();
    this.checkIfEdit();
  }
  formInit() {
    this.sharedExperienceForm = this.fb.group({
      name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.noWhitespaceValidator]],
      description: [null],
      participantsMaxNumber: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0)],
      hasParticipantsLimit: [false],
      startDate: [null],
      startHour: [null],
      // endHour:[null,[Validators.required]],
      // endDate: [null, [Validators.required]],
      date: [null],
      hour: [null],
      bookingTimeSlotId: [null],
      dressCode: [null],
      resourceId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      place: [null],
      city: [null],
      country: [null]
    });
    // this.sharedExperienceForm.get('date').disable();
    // this.sharedExperienceForm.get('hour').disable();
  }

  noWhitespaceValidator(control) {
    const isWhitespace = (control && control.value && control.value.toString() || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {
      'whitespace': true
    };
  }
  getResourceById(resourceId) {
    this.resourceService.getResourceById(resourceId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.chosenResource = res;
      }
    });
  }
  checkIfEdit() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(params => {
      if (params.get('slug')) {
        this.isEditMode = true;
        this.gotResource = true;
        return this.sharedExperienceService.getSharedExperienceBySlug(params.get('slug'));
      } else {
        this.isEditMode = false;
        this.gotResource = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.emptyData);
      }
    })).subscribe(experience => {
      console.log('exp pe edit', experience);
      this.sharedExperienceForm.patchValue(experience);
      this.currentExperience = experience;
      this.sharedExperienceForm.get('hour').patchValue(experience.startHour);
      this.sharedExperienceForm.get('date').patchValue(this.datePipe.transform(experience.date, 'yyyy-MM-dd'));
      this.getResourceById(experience.resourceId);
    });
  }
  onEditClick() {
    this.sharedExperienceForm.markAllAsTouched();
    if (this.sharedExperienceForm.valid) {
      this.sharedExperienceForm.value.startDate = this.datePipe.transform(this.sharedExperienceForm.value.startDate, 'yyyy-MM-dd');
      // this.sharedExperienceForm.value.startDate = this.sharedExperienceForm.value.startDate._d;
      // console.log(this.sharedExperienceForm.value);
      const expToSend = {
        ...this.currentExperience,
        ...this.sharedExperienceForm.value
      };
      console.log('to send', expToSend);
      this.sharedExperienceService.updateSharedExperience(this.currentExperience.id, expToSend).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          console.log('dupa update', res);
          if (res.success) {
            // this.openModal(this.after);
            // this.sharedId= res.reason;
            this.toastService.showToast('Success', 'Experienta impartasita a fost modificata!', 'success');
            console.log('RUTA', this.route);
            this.router.navigate([`../../lobby/${this.currentExperience.slug}`], {
              relativeTo: this.route
            });
          }
        }
      });
    }
  }
  onCreateClick() {
    this.sharedExperienceForm.markAllAsTouched();
    console.log(this.sharedExperienceForm.value);
    if (this.sharedExperienceForm.valid) {
      const experienceObj = {
        ...this.sharedExperienceForm.value,
        timeSlotReservation: {
          itemsNumber: 1,
          date: this.sharedExperienceForm.value.date,
          hour: this.sharedExperienceForm.value.hour,
          bookingTimeSlotId: this.sharedExperienceForm.value.bookingTimeSlotId
        }
      };
      this.sharedExperienceForm.value.startDate = this.datePipe.transform(this.sharedExperienceForm.value.startDate, 'yyyy-MM-dd');
      // this.sharedExperienceForm.value.startDate = this.sharedExperienceForm.value.startDate._d;
      console.log('SHARED EXP OBJ', experienceObj);
      this.sharedExperienceService.createSharedExperience(experienceObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
        next: res => {
          console.log('dupa create', res);
          if (res.success) {
            this.openModal(this.after);
            this.sharedId = res.reason;
          }
        }
      });
    }
  }
  openModal(content) {
    this.modalService.open(content, {
      centered: true,
      size: 'xl'
    });
  }
  getResourceFromModal(event) {
    console.log('EVENT', event);
    this.chosenResource = event;
    this.gotResource = true;
    this.sharedExperienceForm.patchValue({
      resourceId: event.id,
      city: event.city,
      country: event.country,
      place: event.address,
      date: event.chosenDate,
      hour: event.chosenSlot.startHour,
      startDate: event.chosenDate,
      startHour: event.chosenSlot.startHour,
      bookingTimeSlotId: event.bookingTimeslot
    });
    this.modalService.dismissAll();
  }
  clickDeletePlace() {
    this.gotResource = false;
    this.sharedExperienceForm.patchValue({
      resourceId: null,
      city: null,
      country: null,
      place: null,
      date: null,
      hour: null,
      bookingTimeSlotId: null
    });
    console.log(this.sharedExperienceForm.value);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal
  }, {
    type: _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_2__.SharedExperiencesService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
  }, {
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_3__.ResourcesService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
  }];
  static #_2 = this.propDecorators = {
    after: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
      args: ['after']
    }]
  };
};
CreateSharedExperienceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-create-shared-experience',
  template: _create_shared_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [(_create_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CreateSharedExperienceComponent);


/***/ }),

/***/ 2327:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/lobby-shared-experience/lobby-shared-experience.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LobbySharedExperienceComponent": () => (/* binding */ LobbySharedExperienceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _lobby_shared_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lobby-shared-experience.component.html?ngResource */ 62923);
/* harmony import */ var _lobby_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lobby-shared-experience.component.scss?ngResource */ 11171);
/* harmony import */ var _lobby_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lobby_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/shared-experiences.service */ 229);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);










let LobbySharedExperienceComponent = class LobbySharedExperienceComponent {
  constructor(sharedExperienceService, route, userDataService, toastService, translate) {
    this.sharedExperienceService = sharedExperienceService;
    this.route = route;
    this.userDataService = userDataService;
    this.toastService = toastService;
    this.translate = translate;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.isHost = false;
  }
  ngOnInit() {
    this.getSharedExperience();
    this.checkIfHost();
  }
  checkIfHost() {
    this.userDataService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: user => {
        this.currentUserId = user.id;
        if (this.currentExperience.userId === user.id) {
          this.isHost = true;
        }
      }
    });
  }
  makeParticipantsArrays() {
    this.arrayParticipants = [];
    this.arrayPending = [];
    if (this.currentExperience?.participants.length > 0) {
      this.currentExperience?.participants.forEach(participant => {
        console.log(participant);
        if (participant.accepted && participant.type !== 'owner') {
          this.arrayParticipants.push(participant);
        } else if (!participant.accepted && participant.type === 'request') {
          this.arrayPending.push(participant);
        }
      });
    }
  }
  getSharedExperience() {
    this.route.params.subscribe(params => {
      console.log(params['slug']);
      if (params['slug'] !== null) {
        this.sharedExperienceService.getSharedExperienceBySlug(params['slug']).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: experience => {
            console.log('experienta mea', experience);
            this.currentExperience = {
              ...experience
            };
            this.makeParticipantsArrays();
            console.log('experienta curenta', this.currentExperience);
          }
        });
      } else {
        console.log('nu am slug');
      }
    });
  }
  // requestToJoinSharedExp(){
  //   this.sharedExperienceService.requestToJoinSharedExperience(this.currentExperience.id)
  //       .pipe(takeUntil(this.ngUnsubscribe))
  //       .subscribe({
  //         next:(response: {success: boolean, reason: string})=>{
  //           if(response){
  //             this.toastService.showToast('Success', 'Cererea ta a fost trimisa!', "success")
  //           }
  //         },
  //         error: () => {
  //           this.toastService.showToast(
  //               this.translate.instant("TOAST.ERROR"),
  //               this.translate.instant("TOAST.SERVER-ERROR"),
  //               "error");
  //         }})
  // }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_2__.SharedExperiencesService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }];
};
LobbySharedExperienceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-lobby-shared-experience',
  template: _lobby_shared_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_lobby_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LobbySharedExperienceComponent);


/***/ }),

/***/ 9855:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/shared-experiences-list/shared-experiences-list.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedExperiencesListComponent": () => (/* binding */ SharedExperiencesListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shared_experiences_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-experiences-list.component.html?ngResource */ 83485);
/* harmony import */ var _shared_experiences_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-experiences-list.component.scss?ngResource */ 83710);
/* harmony import */ var _shared_experiences_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_experiences_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/shared-experiences.service */ 229);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);







let SharedExperiencesListComponent = class SharedExperiencesListComponent {
  constructor(sharedExperiencesService) {
    this.sharedExperiencesService = sharedExperiencesService;
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.pageSizeArray = [5, 10, 25, 100];
    this.sorting = 'startDate';
    this.dir = 'desc';
  }
  ngOnInit() {
    this.pageNumber = 1;
    this.pageSize = 5;
    this.getSharedExperiences();
  }
  getSharedExperiences() {
    this.sharedExperiences = [];
    const filters = {
      name: this.searchFilter.value !== '' ? this.searchFilter.value : null
    };
    this.sharedExperiencesService.listSharedExperiencesFiltered(this.pageNumber - 1, this.pageSize, this.sorting, this.dir, filters).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: sharedExperiences => {
        console.log('shared', sharedExperiences.content);
        this.sharedExperiences = sharedExperiences.content;
        this.paginationInfo = sharedExperiences;
      }
    });
  }
  pageChanged(event) {
    console.log('schimb pagina');
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.sharedExperiences = [];
    this.sharedExperiencesService.listSharedExperiencesFiltered(this.pageNumber - 1, this.pageSize, this.sorting, this.dir, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: sharedExperiences => {
        // console.log('shared', sharedExperiences.content);
        this.sharedExperiences = sharedExperiences.content;
        this.paginationInfo = sharedExperiences;
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_2__.SharedExperiencesService
  }];
};
SharedExperiencesListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-shared-experiences-list',
  template: _shared_experiences_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_shared_experiences_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SharedExperiencesListComponent);


/***/ }),

/***/ 88653:
/*!**************************************************************************!*\
  !*** ./src/app/features/shared-experiences/shared-experiences.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedExperiencesModule": () => (/* binding */ SharedExperiencesModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_experiences_list_shared_experiences_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-experiences-list/shared-experiences-list.component */ 9855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_button_create_button_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/button-create/button-create.component */ 65463);
/* harmony import */ var _standalone_components_shared_experiences_card_shared_experiences_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../standalone-components/shared-experiences-card/shared-experiences-card.component */ 33130);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _create_shared_experience_create_shared_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-shared-experience/create-shared-experience.component */ 38442);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 20820);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _components_activity_place_activity_place_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/activity-place/activity-place.component */ 46218);
/* harmony import */ var _standalone_components_card_activity_place_card_activity_place_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../standalone-components/card-activity-place/card-activity-place.component */ 56943);
/* harmony import */ var _components_after_create_delete_after_create_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/after-create-delete/after-create-delete.component */ 8546);
/* harmony import */ var _view_shared_experience_view_shared_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-shared-experience/view-shared-experience.component */ 95095);
/* harmony import */ var _standalone_components_shared_experiences_info_shared_experiences_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../standalone-components/shared-experiences-info/shared-experiences-info.component */ 75925);
/* harmony import */ var _standalone_components_display_user_display_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../standalone-components/display-user/display-user.component */ 4177);
/* harmony import */ var _lobby_shared_experience_lobby_shared_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lobby-shared-experience/lobby-shared-experience.component */ 2327);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _components_select_time_select_time_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/select-time/select-time.component */ 2914);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 52922);

























// import {MatFormFieldModule} from "@angular/material/form-field";
const routes = [{
  path: 'list',
  component: _shared_experiences_list_shared_experiences_list_component__WEBPACK_IMPORTED_MODULE_0__.SharedExperiencesListComponent
}, {
  path: 'add',
  component: _create_shared_experience_create_shared_experience_component__WEBPACK_IMPORTED_MODULE_3__.CreateSharedExperienceComponent
}, {
  path: 'edit/:slug',
  component: _create_shared_experience_create_shared_experience_component__WEBPACK_IMPORTED_MODULE_3__.CreateSharedExperienceComponent
}, {
  path: 'view/:slug',
  component: _view_shared_experience_view_shared_experience_component__WEBPACK_IMPORTED_MODULE_7__.ViewSharedExperienceComponent
}, {
  path: 'lobby/:slug',
  component: _lobby_shared_experience_lobby_shared_experience_component__WEBPACK_IMPORTED_MODULE_10__.LobbySharedExperienceComponent
}, {
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
}];
let SharedExperiencesModule = class SharedExperiencesModule {};
SharedExperiencesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  declarations: [_shared_experiences_list_shared_experiences_list_component__WEBPACK_IMPORTED_MODULE_0__.SharedExperiencesListComponent, _components_button_create_button_create_component__WEBPACK_IMPORTED_MODULE_1__.ButtonCreateComponent, _create_shared_experience_create_shared_experience_component__WEBPACK_IMPORTED_MODULE_3__.CreateSharedExperienceComponent, _components_activity_place_activity_place_component__WEBPACK_IMPORTED_MODULE_4__.ActivityPlaceComponent,
  // AfterCreateDeleteComponent,
  _view_shared_experience_view_shared_experience_component__WEBPACK_IMPORTED_MODULE_7__.ViewSharedExperienceComponent, _lobby_shared_experience_lobby_shared_experience_component__WEBPACK_IMPORTED_MODULE_10__.LobbySharedExperienceComponent, _components_select_time_select_time_component__WEBPACK_IMPORTED_MODULE_11__.SelectTimeComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes), _standalone_components_shared_experiences_card_shared_experiences_card_component__WEBPACK_IMPORTED_MODULE_2__.SharedExperiencesCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_17__.MatLegacyInputModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_18__.MatLegacyPaginatorModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLegacyFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_21__.NgxMatTimepickerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _standalone_components_card_activity_place_card_activity_place_component__WEBPACK_IMPORTED_MODULE_5__.CardActivityPlaceComponent, _standalone_components_shared_experiences_info_shared_experiences_info_component__WEBPACK_IMPORTED_MODULE_8__.SharedExperiencesInfoComponent, _standalone_components_display_user_display_user_component__WEBPACK_IMPORTED_MODULE_9__.DisplayUserComponent, _components_after_create_delete_after_create_delete_component__WEBPACK_IMPORTED_MODULE_6__.AfterCreateDeleteComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_21__.NgxMatDatetimePickerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule]
})], SharedExperiencesModule);


/***/ }),

/***/ 95095:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/view-shared-experience/view-shared-experience.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSharedExperienceComponent": () => (/* binding */ ViewSharedExperienceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_shared_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-shared-experience.component.html?ngResource */ 18196);
/* harmony import */ var _view_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-shared-experience.component.scss?ngResource */ 43985);
/* harmony import */ var _view_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/shared-experiences.service */ 229);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/toast.service */ 62941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);










let ViewSharedExperienceComponent = class ViewSharedExperienceComponent {
  constructor(sharedExperienceService, route, userDataService, toastService, translate, cdr) {
    this.sharedExperienceService = sharedExperienceService;
    this.route = route;
    this.userDataService = userDataService;
    this.toastService = toastService;
    this.translate = translate;
    this.cdr = cdr;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.userJoined = false;
    this.accepted = false;
  }
  ngOnInit() {
    this.getSharedExperience();
    // this.calculateAvailableSpots();
    // this.checkIfUserJoined();
  }

  checkIfHost() {
    this.userDataService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: user => {
        this.currentUser = user;
        if (this.currentExperience?.userId === user.id) {
          this.isHost = true;
          console.log('e host');
        } else {
          this.isHost = false;
          console.log('nu e host');
          this.checkIfUserJoined(user.id);
        }
      }
    });
  }
  checkIfUserJoined(currentUserId) {
    if (this.currentExperience?.participants?.length > 1) {
      const participant = this.currentExperience?.participants.find(partic => partic.userId === currentUserId);
      console.log('lala', participant);
      if (participant) {
        this.userJoined = true;
        if (participant.accepted) {
          this.accepted = true;
        }
      }
      // this.currentExperience?.participants.forEach((participant:any)=>{
      //     console.log('currnt', this.currentUser);
      //     if(participant.userId === currentUserId) {
      //         this.userJoined = true;
      //
      //         if(participant.accepted){
      //             this.accepted = true;
      //         }
      //         console.log('e participant');
      //     }else{
      //         this.userJoined = false;
      //     }
      //
      //
      // })
    }
  }

  getSharedExperience() {
    this.route.params.subscribe(params => {
      // console.log(params['slug']);
      if (params['slug'] !== null) {
        this.sharedExperienceService.getSharedExperienceBySlug(params['slug']).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: experience => {
            console.log('experienta mea', experience);
            this.currentExperience = {
              ...experience
            };
            this.checkIfHost();
            this.calculateAvailableSpots();
          }
        });
      } else {
        console.log('nu am slug');
      }
    });
  }
  calculateAvailableSpots() {
    this.acceptedParticipants = 0;
    // console.log('salut', this.currentExperience?.participantsLimit);
    if (this.currentExperience?.participantsLimit) {
      this.currentExperience.participants.forEach(participant => {
        if (participant.accepted) {
          this.acceptedParticipants++;
          // console.log('participant la calcul', this.acceptedParticipants);
        }
      });

      this.availableSpotsLeft = Number(this.currentExperience?.participantsMaxNumber) - this.acceptedParticipants;
      // console.log('locuri libere',this.availableSpotsLeft);
    }
  }

  requestToJoinSharedExp() {
    this.sharedExperienceService.requestToJoinSharedExperience(this.currentExperience.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: response => {
        // console.log(response);
        if (response) {
          this.toastService.showToast('Success', 'Cererea ta a fost trimisa!', "success");
          this.userJoined = true;
          this.cdr.detectChanges();
        }
      },
      error: err => {
        console.log(err.error.reason);
        if (err.error.reason === 'alreadyExists') {
          this.toastService.showToast('Error', 'Se pare ca te-ai alaturat deja experientei!', "error");
        } else {
          this.toastService.showToast(this.translate.instant("TOAST.ERROR"), this.translate.instant("TOAST.SERVER-ERROR"), "error");
        }
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_shared_experiences_service__WEBPACK_IMPORTED_MODULE_2__.SharedExperiencesService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
  }];
};
ViewSharedExperienceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-view-shared-experience',
  template: _view_shared_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_view_shared_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ViewSharedExperienceComponent);


/***/ }),

/***/ 56943:
/*!********************************************************************************************!*\
  !*** ./src/app/standalone-components/card-activity-place/card-activity-place.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardActivityPlaceComponent": () => (/* binding */ CardActivityPlaceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _card_activity_place_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-activity-place.component.html?ngResource */ 49346);
/* harmony import */ var _card_activity_place_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-activity-place.component.scss?ngResource */ 15147);
/* harmony import */ var _card_activity_place_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_activity_place_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/resources.service */ 3145);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);








let CardActivityPlaceComponent = class CardActivityPlaceComponent {
  constructor(resourceService, translate) {
    this.resourceService = resourceService;
    this.translate = translate;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.getResTypeName();
    this.checkLanguage();
  }
  checkLanguage() {
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.currentLanguage = res.lang;
      }
    });
  }
  getResTypeName() {
    this.resourceService.getResourceTypeById(this.resource?.resourceTypeId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: resType => {
        this.resType = resType;
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
  }];
  static #_2 = this.propDecorators = {
    resource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  };
};
CardActivityPlaceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-card-activity-place',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule],
  template: _card_activity_place_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_card_activity_place_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CardActivityPlaceComponent);


/***/ }),

/***/ 33130:
/*!****************************************************************************************************!*\
  !*** ./src/app/standalone-components/shared-experiences-card/shared-experiences-card.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedExperiencesCardComponent": () => (/* binding */ SharedExperiencesCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shared_experiences_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-experiences-card.component.html?ngResource */ 14854);
/* harmony import */ var _shared_experiences_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-experiences-card.component.scss?ngResource */ 58721);
/* harmony import */ var _shared_experiences_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_experiences_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/resources.service */ 3145);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);









let SharedExperiencesCardComponent = class SharedExperiencesCardComponent {
  constructor(resourceTypeService, userDataService) {
    this.resourceTypeService = resourceTypeService;
    this.userDataService = userDataService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.usersJoined = [];
  }
  ngOnInit() {
    // if (this.experience.resourceType) {
    //     this.getResourceType();
    // }
    console.log(this.experience);
  }
  // getResourceType() {
  //     this.resourceTypeService.getResourceTypeById(this.experience.resourceType)
  //         .pipe(takeUntil(this.ngUnsubscribe))
  //         .subscribe({
  //             next: (resourceType: ResourceType) => {
  //                 this.resourceTypeName = resourceType?.nameEn;
  //             }
  //         })
  // }
  //ARRAY FOR MEMBERS
  // createUsersJoined() {
  //     this.usersJoined = [];
  //     if (this.experience.participants?.length > 0) {
  //         if (this.experience.participants?.length > 3) {
  //             for(let i = 0; i<3; i++ ){
  //                 this.userDataService.getUserById(this.experience.participants[i].userId)
  //                     .pipe(takeUntil(this.ngUnsubscribe))
  //                     .subscribe({
  //                         next: (userData: User) => {
  //                             this.usersJoined.push(userData.avatar.filePath);
  //                         }
  //                     })
  //             }
  //         } else {
  //             for (let participant of this.experience.participants) {
  //                 this.userDataService.getUserById(participant.userId)
  //                     .pipe(takeUntil(this.ngUnsubscribe))
  //                     .subscribe({
  //                         next: (userData: User) => {
  //                             this.usersJoined.push(userData.avatar.filePath);
  //                         }
  //                     })
  //             }
  //         }
  //
  //         console.log('useri', this.usersJoined);
  //     }
  // }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_resources_service__WEBPACK_IMPORTED_MODULE_2__.ResourcesService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }];
  static #_2 = this.propDecorators = {
    experience: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
SharedExperiencesCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-shared-experiences-card',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
  template: _shared_experiences_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_shared_experiences_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SharedExperiencesCardComponent);


/***/ }),

/***/ 41250:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/activity-place/activity-place.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.header-modal {\n  background-color: #24398A;\n  color: var(--primary-background);\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  box-shadow: 0px 12px 16px rgba(13, 68, 148, 0.48);\n  text-align: center;\n  height: 88px;\n  margin-bottom: 40px;\n}\n\n.container {\n  background-color: var(--primary-background);\n  min-height: 600px;\n}\n\n.location-list-container {\n  width: 700px;\n}\n\n.modal-content-time {\n  min-height: 400px;\n}\n.modal-content-time .content-body .subtitle {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.modal-content-time .content-body .choose-activity {\n  gap: 8px;\n}\n.modal-content-time .content-body .choose-activity .activity {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  line-height: 20px;\n  background-color: #24398A;\n  color: #FFFFFF;\n  border-radius: 100px;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 1px solid #24398A;\n}\n.modal-content-time .content-body .choose-activity .selected-btn {\n  color: #24398A;\n  background-color: #FFFFFF;\n}\n.modal-content-time .content-body .timeslots-container .mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.modal-content-time .content-body .timeslots-container .mat-radio-group .time-slot {\n  max-width: 335px;\n  border: 1px solid rgba(36, 57, 138, 0.16) !important;\n  border-radius: 20px;\n  padding: 8px 12px;\n}\n.modal-content-time .content-body .timeslots-container .mat-radio-group .time-slot .mat-radio-button {\n  width: 100%;\n}\n.modal-content-time .content-body :host ::ng-deep .timeslots-container .mat-radio-label {\n  justify-content: space-between;\n}\n\n.error-msg {\n  color: red;\n}\n\n::ng-deep .cdk-overlay-container {\n  z-index: 1200 !important;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/shared-experiences/_components/activity-place/activity-place.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,yBDFc;ECGd,gCAAA;EACA,gCAAA;EACA,+BAAA;EACA,iDAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;AAkBF;;AAfA;EACE,2CAAA;EACA,iBAAA;AAkBF;;AAfA;EACE,YAAA;AAkBF;;AAfA;EACE,iBAAA;AAkBF;AAfI;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;AAiBN;AAdI;EACE,QAAA;AAgBN;AAdM;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,iBAAA;EACA,yBDzCQ;EC0CR,cDlCa;ECmCb,oBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,yBAAA;AAgBR;AAbM;EACE,cDjDQ;ECkDR,yBD1Ca;ACyDrB;AATI;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAWN;AATM;EACE,gBAAA;EACA,oDAAA;EACA,mBAAA;EACA,iBAAA;AAWR;AATQ;EACE,WAAA;AAWV;AANI;EACE,8BAAA;AAQN;;AAAA;EACE,UAAA;AAGF;;AACA;EACE,wBAAA;AAEF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.header-modal {\n  background-color: $primary-color;\n  color: var(--primary-background);\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  box-shadow: 0px 12px 16px rgba(13, 68, 148, 0.48);\n  text-align: center;\n  height: 88px;\n  margin-bottom: 40px;\n}\n\n.container {\n  background-color: var(--primary-background);\n  min-height: 600px;\n}\n\n.location-list-container {\n  width: 700px;\n}\n\n.modal-content-time {\n  min-height: 400px;\n\n  .content-body{\n    .subtitle{\n      font-size: 16px;\n      font-weight: 600;\n      margin-bottom: 0;\n    }\n\n    .choose-activity {\n      gap: 8px;\n\n      .activity {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 8px 16px;\n        line-height: 20px;\n        background-color: $primary-color;\n        color: $background-primary;\n        border-radius: 100px;\n        width: fit-content;\n        border: 1px solid $primary-color;\n      }\n\n      .selected-btn{\n        color: $primary-color;\n        background-color: $background-primary;\n      }\n\n    }\n\n\n    .timeslots-container .mat-radio-group {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n\n      .time-slot {\n        max-width: 335px;\n        border: 1px solid rgba($primary-color, 0.16) !important;\n        border-radius: 20px;\n        padding: 8px 12px;\n\n        .mat-radio-button {\n          width: 100%;\n        }\n      }\n    }\n\n    :host ::ng-deep .timeslots-container .mat-radio-label {\n      justify-content: space-between;\n    }\n  }\n\n\n\n}\n\n.error-msg{\n  color: red;\n}\n\n\n::ng-deep .cdk-overlay-container {\n  z-index: 1200 !important;\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26928:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/button-create/button-create.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.create-shared-exp {\n  border-radius: 20px;\n  background-color: rgba(36, 57, 138, 0.3);\n  padding-top: 24px;\n  padding-bottom: 28px;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%), url('backgr-shared-exp.jpeg'), #24398A;\n  background-blend-mode: normal, luminosity, normal;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-shadow: 0 12px 16px rgba(13, 68, 148, 0.48);\n}\n.create-shared-exp .info-col p {\n  font-size: 20px;\n  color: var(--primary-background);\n}\n.create-shared-exp .info-col p.greet {\n  font-weight: 500;\n}\n.create-shared-exp .info-col .name {\n  color: #FFCC29;\n}\n.create-shared-exp .info-col i {\n  rotate: 15deg;\n}\n.create-shared-exp .info-col h3 {\n  color: var(--primary-background);\n}\n.create-shared-exp .btn-col .btn-long {\n  background-color: #00B2FF;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/shared-experiences/_components/button-create/button-create.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,mBAAA;EACA,wCAAA;EACA,iBAAA;EACA,oBAAA;EAEA,mJAAA;EACA,iDAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;EACA,+CAAA;AAiBF;AAdI;EACE,eAAA;EACA,gCAAA;AAgBN;AAbI;EACE,gBAAA;AAeN;AAZI;EACE,cDvBY;ACqClB;AAXI;EACE,aAAA;AAaN;AAVI;EACE,gCAAA;AAYN;AAPI;EACE,yBAAA;AASN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.create-shared-exp{\n  border-radius: 20px;\n  background-color: rgba($primary-color, 0.3);\n  padding-top: 24px;\n  padding-bottom: 28px;\n\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%),url('~src/assets/images/others/images-client/backgr-shared-exp.jpeg'),#24398A;\n  background-blend-mode: normal, luminosity, normal;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-shadow: 0 12px 16px rgba(13, 68, 148, 0.48);\n\n  .info-col{\n    p{\n      font-size: 20px;\n      color: var(--primary-background);\n    }\n\n    p.greet{\n      font-weight: 500;\n    }\n\n    .name{\n      color:$secondary-color;\n    }\n\n    i{\n      rotate: 15deg;\n    }\n\n    h3{\n      color: var(--primary-background);\n    }\n  }\n\n  .btn-col{\n    .btn-long{\n      background-color: #00B2FF;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 75660:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/select-time/select-time.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 34129:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/create-shared-experience/create-shared-experience.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.24), rgba(35, 31, 32, 0.24));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding: 48px 0;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n.content-container h1 {\n  color: #24398A;\n  text-align: center;\n}\n.content-container .shared-experience .col-form .directions {\n  font-weight: 700;\n  font-size: 16px;\n}\n.content-container .shared-experience .col-form .section-title {\n  font-size: 20px;\n  color: #24398A;\n}\n.content-container .shared-experience .col-form .date-display, .content-container .shared-experience .col-form .hour-display {\n  border: 1px solid rgba(36, 57, 138, 0.4);\n  border-radius: 8px;\n  padding: 8px 16px;\n  margin-bottom: 8px;\n}\n.content-container .shared-experience .col-form .date-display span, .content-container .shared-experience .col-form .hour-display span {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 18px;\n}\n.content-container .shared-experience .col-form .resource .btn-del-place {\n  border: none;\n  color: var(--primary-background);\n  background-color: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n  top: 10px;\n  right: 10px;\n  width: 40px;\n  aspect-ratio: 1/1;\n}\n.content-container .shared-experience .col-form .place {\n  height: 120px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  background-color: rgba(36, 57, 138, 0.04);\n  color: rgba(36, 57, 138, 0.16);\n  cursor: pointer;\n}\n.content-container .shared-experience .col-img img {\n  width: 100%;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #34A853;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #34A853;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/shared-experiences/create-shared-experience/create-shared-experience.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAfE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAiBJ;;AAbA;EACE,2CAAA;EACA,eAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;AAgBF;AAdE;EACE,cD/BY;ECgCZ,kBAAA;AAgBJ;AAXM;EACE,gBAAA;EACA,eAAA;AAaR;AAVM;EACE,eAAA;EACA,cD5CQ;ACwDhB;AATM;EACE,wCAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AAWR;AATQ;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;AAWV;AANQ;EACE,YAAA;EACA,gCAAA;EACA,yCAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,iBAAA;AAQV;AAJM;EACE,aAAA;EACA,yCAAA;EACA,kBAAA;EACA,yCAAA;EACA,8BAAA;EACA,eAAA;AAMR;AACM;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AACR;;AAMA,gCAAA;AACA;;EAEE,wBAAA;EACA,SAAA;AAHF;;AAMA,YAAA;AACA;EACE,0BAAA;AAHF;;AASA;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AANF;;AASA;EACE,UAAA;EACA,QAAA;EACA,SAAA;AANF;;AASA;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EAEA,gBAAA;AANF;;AASA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EAEA,gBAAA;AANF;;AASA;EAEE,yBD1GgB;ACmGlB;;AAUA;EACE,2BAAA;AAPF;;AAUA;EAGE,2BAAA;AAPF;;AAUA,oBAAA;AACA;EACE,mBAAA;AAPF;;AAUA;EACE,kBAAA;AAPF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.24), rgba($title, 0.24));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding: 48px 0;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n\n  h1{\n    color: $primary-color;\n    text-align: center;\n  }\n\n  .shared-experience{\n    .col-form{\n      .directions{\n        font-weight: 700;\n        font-size: 16px;\n      }\n\n      .section-title{\n        font-size: 20px;\n        color: $primary-color;\n      }\n\n      .date-display, .hour-display{\n        border: 1px solid rgba($primary-color, 0.4);\n        border-radius: 8px;\n        padding: 8px 16px;\n        margin-bottom: 8px;\n\n        span{\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 18px;\n        }\n      }\n\n      .resource{\n        .btn-del-place{\n          border: none;\n          color:var(--primary-background);\n          background-color: rgba($primary-color, 0.16);\n          border-radius: 100%;\n          top: 10px;\n          right: 10px;\n          width: 40px;\n          aspect-ratio: 1/1;\n        }\n      }\n\n      .place{\n        height: 120px;\n        border: 1px solid rgba($primary-color, 0.16);\n        border-radius: 8px;\n        background-color: rgba($primary-color, 0.04);\n        color: rgba($primary-color, 0.16);\n        cursor: pointer;\n      }\n\n\n    }\n\n    .col-img{\n      img{\n        width: 100%;\n        aspect-ratio: 1/1;\n        object-fit: cover;\n        border-radius: 8px;\n      }\n    }\n  }\n\n}\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n\n\n//------------------------------------- Switches -------------------------------------\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  //background-color: #2196F3;\n  background-color: $active-btn-color;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px $active-btn-color;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n//-------------------------------------SWITCHES END-------------------------------------\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 11171:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/lobby-shared-experience/lobby-shared-experience.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.24), rgba(35, 31, 32, 0.24));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.view-container {\n  background-color: var(--primary-background);\n  padding: 48px 0;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n.view-container h1 {\n  text-align: center;\n}\n.view-container .col-info .chat-button {\n  padding: 6px 24px;\n  background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.48) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n  border-radius: 8px;\n  color: var(--primary-background);\n  border: none;\n}\n.view-container .col-info .lobby-host p {\n  color: #24398A;\n  margin-bottom: 10px;\n}\n.view-container .col-info .lobby-guest .creator {\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  border-radius: 8px;\n  padding: 8px;\n  margin-bottom: 10px;\n}\n.view-container .col-info .lobby-guest p {\n  color: #24398A;\n  margin-bottom: 10px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/shared-experiences/lobby-shared-experience/lobby-shared-experience.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAfE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAiBJ;;AAbA;EACE,2CAAA;EACA,eAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;AAgBF;AAdE;EACE,kBAAA;AAgBJ;AAXI;EACE,iBAAA;EACA,oHAAA;EACA,kBAAA;EACA,gCAAA;EACA,YAAA;AAaN;AATM;EACE,cD9CQ;EC+CR,mBAAA;AAWR;AANM;EACE,yCAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;AAQR;AANM;EACE,cD3DQ;EC4DR,mBAAA;AAQR","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.24), rgba($title, 0.24));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n\n.view-container{\n  background-color: var(--primary-background);\n  padding: 48px 0;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n\n  h1{\n    text-align: center;\n  }\n\n  .col-info{\n\n    .chat-button{\n      padding: 6px 24px;\n      background: radial-gradient(100% 787.93% at 0% 100%, rgba(0, 178, 255, 0.48) 0%, rgba(0, 178, 255, 0) 100%), #24398A;\n      border-radius: 8px;\n      color:var(--primary-background);\n      border: none;\n    }\n\n    .lobby-host{\n      p{\n        color:$primary-color;\n        margin-bottom: 10px;\n      }\n    }\n\n    .lobby-guest{\n      .creator{\n        border: 1px solid rgba($primary-color, 0.16);\n        border-radius: 8px;\n        padding: 8px;\n        margin-bottom: 10px;\n      }\n      p{\n        color:$primary-color;\n        margin-bottom: 10px;\n      }\n    }\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83710:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/shared-experiences-list/shared-experiences-list.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.24), rgba(35, 31, 32, 0.24));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding: 48px 0;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n}\n.content-container .title-shared {\n  font-size: 36px;\n  font-weight: 700;\n  color: #24398A;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/shared-experiences/shared-experiences-list/shared-experiences-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAfE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAiBJ;;AAbA;EACE,2CAAA;EACA,eAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;AAgBF;AAdE;EACE,eAAA;EACA,gBAAA;EACA,cDlCY;ECmCZ,kBAAA;AAgBJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.24), rgba($title, 0.24));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n\n.content-container {\n  background-color: var(--primary-background);\n  padding: 48px 0;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 64px;\n\n  .title-shared{\n    font-size: 36px;\n    font-weight: 700;\n    color: $primary-color;\n    text-align: center;\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43985:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/view-shared-experience/view-shared-experience.component.scss?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.background-container {\n  width: 100%;\n  position: relative;\n}\n.background-container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgba(35, 31, 32, 0.24), rgba(35, 31, 32, 0.24));\n}\n.background-container img {\n  height: auto;\n  max-height: 560px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.view-container {\n  background-color: var(--primary-background);\n  padding: 48px 0;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n.view-container h1 {\n  text-align: center;\n}\n.view-container .col-info .available-spots .spots-left {\n  padding: 2px 8px;\n  border: 1px solid rgba(255, 204, 41, 0.48);\n  background-color: rgba(255, 204, 41, 0.08);\n  border-radius: 8px;\n  font-weight: 400;\n}\n.view-container .col-info .available-spots .fa-crown {\n  color: #FFCC29;\n}\n.view-container .creator {\n  margin-bottom: 40px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/shared-experiences/view-shared-experience/view-shared-experience.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,WAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,iFAAA;AAkBJ;AAfE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;AAiBJ;;AAbA;EACE,2CAAA;EACA,eAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;AAgBF;AAdE;EACE,kBAAA;AAgBJ;AAXM;EACE,gBAAA;EACA,0CAAA;EACA,0CAAA;EACA,kBAAA;EACA,gBAAA;AAaR;AAVM;EACE,cD3CU;ACuDlB;AAPE;EACE,mBAAA;AASJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.background-container {\n  width: 100%;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(0deg, rgba($title, 0.24), rgba($title, 0.24));\n  }\n\n  img {\n    height: auto;\n    max-height: 560px;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n\n.view-container{\n  background-color: var(--primary-background);\n  padding: 48px 0;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n\n  h1{\n    text-align: center;\n  }\n\n  .col-info{\n    .available-spots{\n      .spots-left{\n        padding: 2px 8px;\n        border: 1px solid rgba($secondary-color, 0.48);\n        background-color: rgba($secondary-color, 0.08);\n        border-radius: 8px;\n        font-weight: 400;\n      }\n\n      .fa-crown{\n        color: $secondary-color;\n      }\n    }\n\n  }\n  .creator{\n    margin-bottom: 40px;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 15147:
/*!*********************************************************************************************************!*\
  !*** ./src/app/standalone-components/card-activity-place/card-activity-place.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.activity-card {\n  background: var(--primary-background);\n  border: 1px solid rgba(36, 57, 138, 0.24);\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(35, 31, 32, 0.08);\n  overflow: hidden;\n  cursor: pointer;\n  width: 100%;\n  height: 140px;\n  margin-bottom: 12px;\n}\n.activity-card .img-container {\n  width: 200px;\n  height: 140px;\n}\n.activity-card .img-container img {\n  width: inherit;\n  height: inherit;\n  transition: all 0.3s ease-out;\n}\n.activity-card:hover .img-container img {\n  transform: scale(1.05);\n}\n.activity-card .resource-info {\n  padding: 12px;\n}\n.activity-card .resource-info h3 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/card-activity-place/card-activity-place.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EAEE,qCAAA;EACA,yCAAA;EACA,kBAAA;EACA,4CAAA;EACA,gBAAA;EACA,eAAA;EAEA,WAAA;EACA,aAAA;EACA,mBAAA;AAgBF;AAdE;EACE,YAAA;EACA,aAAA;AAgBJ;AAdI;EACE,cAAA;EACA,eAAA;EACA,6BAAA;AAgBN;AAXI;EACE,sBAAA;AAaN;AATE;EACE,aAAA;AAWJ;AATI;EAEE,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,4BAAA;AAUN","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.activity-card {\n  // display: flex;\n  background: var(--primary-background);\n  border: 1px solid rgba($primary-color, 0.24);\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba($title, 0.08);\n  overflow: hidden;\n  cursor: pointer;\n  // flex-direction: row;\n  width: 100%;\n  height: 140px;\n  margin-bottom:12px ;\n\n  .img-container {\n    width: 200px;\n    height: 140px;\n\n    img {\n      width: inherit;\n      height: inherit;\n      transition: all 0.3s ease-out;\n    }\n  }\n\n  &:hover {\n    .img-container img {\n      transform: scale(1.05);\n    }\n  }\n\n  .resource-info{\n    padding: 12px;\n\n    h3{\n      // max nr of lines\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      line-clamp: 1;\n      -webkit-box-orient: vertical;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 58721:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/standalone-components/shared-experiences-card/shared-experiences-card.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.experience {\n  height: 256px;\n  width: 100%;\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0px 12px 16px rgba(13, 68, 148, 0.48);\n  margin-bottom: 16px;\n}\n.experience img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.experience .top-bar {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 12px;\n}\n.experience .top-bar button {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(35, 31, 32, 0.08);\n  border: 1px solid var(--primary-background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.experience .top-bar button i {\n  font-size: 14px;\n  color: var(--primary-background);\n}\n.experience .top-bar button:hover {\n  border-color: #24398A;\n}\n.experience .top-bar button:hover i {\n  color: #FFCC29;\n}\n.experience .text-background {\n  width: 100%;\n  padding: 15px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background: radial-gradient(69.72% 363.69% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(90deg, #24398A 51.18%, rgba(36, 57, 138, 0) 100%);\n}\n.experience .text-background .top-row h2 {\n  color: var(--primary-background);\n  margin-bottom: 0;\n  font-size: 24px;\n}\n.experience .text-background .top-row p.label-categ {\n  color: var(--primary-background);\n  font-size: 16px;\n  border: 1px solid var(--primary-background);\n  border-radius: 8px;\n  padding: 4px 8px;\n}\n.experience .text-background p {\n  color: var(--primary-background);\n  margin-bottom: 0;\n  font-size: 16px;\n}\n.experience .text-background span {\n  color: #FFCC29;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/standalone-components/shared-experiences-card/shared-experiences-card.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACE,aAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,iDAAA;EACA,mBAAA;AAkBF;AAfE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AAiBJ;AAdE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;AAgBJ;AA0BI;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,2CAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAxBN;AA0BM;EACE,eAAA;EACA,gCAAA;AAxBR;AA2BM;EACE,qBDpFQ;AC2DhB;AA0BQ;EACE,cDpFQ;AC4DlB;AAgCE;EACE,WAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EAGA,gLAAA;AAhCJ;AAoCM;EACE,gCAAA;EACA,gBAAA;EACA,eAAA;AAlCR;AAqCM;EACE,gCAAA;EACA,eAAA;EACA,2CAAA;EACA,kBAAA;EACA,gBAAA;AAnCR;AAwCI;EACE,gCAAA;EACA,gBAAA;EACA,eAAA;AAtCN;AAyCI;EACE,cDlIY;AC2FlB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"src/app/theme/styles/components/_colors.scss\";\n\n.experience {\n  height: 256px;\n  width: 100%;\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0px 12px 16px rgba(13, 68, 148, 0.48);\n  margin-bottom: 16px;\n  //border: 1px solid $primary-color;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .top-bar {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 12px;\n\n    //.members{\n    //  .users-joined{\n    //    width: 48px;\n    //    aspect-ratio: 1/1;\n    //    background-color: $secondary-color;\n    //    color: var(--primary-background);\n    //    border-radius: 100%;\n    //    z-index: 100;\n    //  }\n    //\n    //  .user{\n    //    width: 48px;\n    //    aspect-ratio: 1/1;\n    //    border-radius: 100%;\n    //\n    //    img{\n    //      object-fit: cover;\n    //      border-radius: 100%;\n    //    }\n    //\n    //    .first-avatar{\n    //      opacity: 0.9;\n    //      margin-left: -16px;\n    //      z-index: 90;\n    //    }\n    //\n    //    .second-avatar{\n    //      opacity: 0.6;\n    //      margin-left: -16px;\n    //      z-index: 80;\n    //    }\n    //\n    //    .third-avatar{\n    //      opacity: 0.3;\n    //      margin-left: -16px;\n    //      z-index: 70;\n    //    }\n    //  }\n    //}\n\n    button {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      width: 32px;\n      height: 32px;\n      border-radius: 8px;\n      background: rgba($title, 0.08);\n      border: 1px solid var(--primary-background);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      i {\n        font-size: 14px;\n        color: var(--primary-background);\n      }\n\n      &:hover{\n        border-color: $primary-color;\n        i{\n          color: $secondary-color;\n        }\n\n      }\n\n    }\n  }\n\n  .text-background {\n    width: 100%;\n    padding: 15px 12px;\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    //background: linear-gradient(266.69deg, rgba($primary-color, 0) 0%, $primary-color 100%);\n\n    background: radial-gradient(69.72% 363.69% at 0% 100%, rgba(0, 178, 255, 0.72) 0%, rgba(0, 178, 255, 0) 100%), linear-gradient(90deg, #24398A 51.18%, rgba(36, 57, 138, 0) 100%);\n\n\n    .top-row {\n      h2 {\n        color: var(--primary-background);\n        margin-bottom: 0;\n        font-size: 24px;\n      }\n\n      p.label-categ {\n        color: var(--primary-background);\n        font-size: 16px;\n        border: 1px solid var(--primary-background);\n        border-radius: 8px;\n        padding: 4px 8px;\n      }\n    }\n\n\n    p {\n      color: var(--primary-background);\n      margin-bottom: 0;\n      font-size: 16px;\n    }\n\n    span {\n      color: $secondary-color;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86321:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/activity-place/activity-place.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"header-modal\">\n    <p>Activity Places</p>\n</div>\n\n<div class=\"container\">\n    <div class=\"d-flex justify-content-center\">\n        <!-- <div class=\"col-4 col-filter\">\n\n        </div> -->\n        <!-- <div class=\"col-8 col-places\"> -->\n        <div class=\"location-list-container\">\n            <div class=\"row \">\n                <mat-form-field appearance=\"outline\" class=\"w-100 mb-2\">\n                    <input matInput type=\"text\" [formControl]=\"searchFilter\" (keydown.enter)=\"getActivityResources()\"\n                           placeholder=\"Caută experiență\">\n                </mat-form-field>\n            </div>\n\n\n            <div class=\"resource-list w-100\" *ngFor=\"let resource of resourcesArray\">\n                <!--                <app-card-activity-place [resource] = resource (click)=\"sendResource(resource)\" ></app-card-activity-place>-->\n                <app-card-activity-place [resource]=resource\n                                         (click)=\"openModal(setTime,resource)\"></app-card-activity-place>\n            </div>\n\n            <mat-paginator [pageSizeOptions]=\"pageSizeArray\"\n                           [pageSize]=\"pageSize\"\n                           [length]=\"paginationInfo?.totalElements\"\n                           (page)=\"pageChanged($event)\"\n                           aria-label=\"Select page of resources\">\n            </mat-paginator>\n        </div>\n\n\n    </div>\n</div>\n\n<ng-template #setTime>\n    <div class=\"modal-content-time d-flex flex-column justify-content-between p-4\">\n        <h4 class=\"mb-3\">Configurare experienta la locatia {{chosenResource?.title}}</h4>\n        <p *ngIf=\"showErrorMsg\" class=\"error-msg\">Alegeti categoria, ziua si ora pentru experienta dumneavoastra!</p>\n\n        <div class=\"content-body\">\n            <p class=\"subtitle\"><i class=\"fas fa-icons me-2\"></i>Selectati o categorie</p>\n            <div class=\"choose-activity d-flex flex-wrap mb-3\">\n                <div  *ngFor=\"let activity of timeslotsArray\">\n                    <div>\n                        <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" hidden id=\"flexRadioDefault-{{activity.id}}\" (click)=\"bookingTimeslotChanged(activity.id)\">\n                        <label class=\"form-check-label activity\" for=\"flexRadioDefault-{{activity.id}}\" [ngClass]=\"bookingTimeslotId === activity.id ? 'selected-btn' : ''\">\n                            {{activity.name}}\n                        </label>\n                    </div>\n                </div>\n            </div>\n\n\n            <div *ngIf=\"bookingTimeslotId\">\n                <p class=\"subtitle\"><i class=\"fas fa-calendar-alt me-2\"></i> Selectati data</p>\n\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                    <mat-label>Selectati data</mat-label>\n                    <input matInput [min]=\"today\" [matDatepicker]=\"picker\" [(ngModel)]=\"date\" (ngModelChange)=\"dateChanged()\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n\n                <p><i class=\"fas fa-clock me-2\"></i> Selectati ora</p>\n                <div *ngIf=\"chosenResourceTimeslots.length > 0\" class=\"timeslots-container mb-3\">\n                    <mat-radio-group\n                            aria-label=\"Select a time slot\" color=\"primary\" [(ngModel)]=\"slotChosen\">\n                        <div *ngFor=\"let slot of chosenResourceTimeslots\" class=\"time-slot\">\n                            <mat-radio-button [value]=\"slot\" [labelPosition]=\"'after'\">\n                                {{ slot.startHour }} - {{slot.endHour}}\n                            </mat-radio-button>\n                        </div>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"no-slots mb-3\" *ngIf=\"chosenResourceTimeslots.length === 0\">\n                    <p>Nu exista sloturi</p>\n                </div>\n            </div>\n\n        </div>\n\n\n\n\n\n        <button class=\"btn-long btn-color-fill w-100\" (click)=\"confirm()\">Confirma locatia</button>\n    </div>\n</ng-template>";

/***/ }),

/***/ 29131:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/button-create/button-create.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <div class=\"row create-shared-exp \">\n        <div class=\"info-col col-12 col-md-8 col-lg-9\">\n            <p class=\"greet\">Hello, <span class=\"name\">{{user?.firstName+' '+user?.lastName}}</span><i class=\"fas fa-hand-sparkles\"></i></p>\n            <h3>Create a Shared Experience</h3>\n            <p>Create your personal and unique experience while sharing it with others.</p>\n        </div>\n        <div class=\"btn-col col-12 col-md-4 col-lg-3 d-flex flex-column justify-content-end\">\n            <button class=\"btn-color-fill btn-long\" routerLink=\"../add\">Next step <i class=\"fas fa-arrow-right\"></i></button>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 34613:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/_components/select-time/select-time.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"modal-content-time p-4\">\n    <h4>Selectati data si ora pentru experienta</h4>\n    <p><i class=\"fas fa-calendar-alt me-2\"></i> Selectati data</p>\n    <mat-form-field>\n        <mat-label>Choose a date</mat-label>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    <p><i class=\"fas fa-clock me-2\"></i> Selectati ora</p>\n\n    <button class=\"btn-long btn-color-fill w-100\">Confirma locatia</button>\n</div>";

/***/ }),

/***/ 52534:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/create-shared-experience/create-shared-experience.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n  <div class=\"background-container\">\n    <img\n      src=\"/assets/images/others/createSE%20(1).jpg\"\n      alt=\"Shared Experiences\"\n    />\n  </div>\n\n  <div class=\"content-container\">\n    <div class=\"container\">\n      <h1 class=\"mb-5\">\n        {{\n          isEditMode\n            ? \"Editeaza-ti experienta\"\n            : (\"SHARED-EXPERIENCES.CREATE\" | translate)\n        }}\n      </h1>\n\n      <div class=\"row shared-experience\">\n        <div class=\"col-12 col-md-6 col-form\">\n          <p *ngIf=\"!isEditMode\" class=\"directions\">\n            {{ \"SHARED-EXPERIENCES.CREATE-INFO\" | translate }}\n          </p>\n          <p class=\"section-title\">\n            <i class=\"me-2 fas fa-archive\"></i>\n            {{ \"SHARED-EXPERIENCES.PLACE-DETAILS\" | translate }}\n          </p>\n          <div\n            *ngIf=\"!gotResource\"\n            class=\"place w-100 mb-3 d-flex justify-content-center align-items-center\"\n            (click)=\"openModal(activity)\"\n          >\n            <p class=\"mb-0\">\n              <i class=\"fas fa-search\"></i>\n              {{ \"SHARED-EXPERIENCES.SEARCH-PLACE\" | translate }}\n            </p>\n          </div>\n\n          <div *ngIf=\"gotResource\" class=\"resource position-relative\">\n            <app-card-activity-place\n              [resource]=\"chosenResource\"\n            ></app-card-activity-place>\n            <button\n              *ngIf=\"!isEditMode\"\n              type=\"button\"\n              class=\"btn-del-place position-absolute\"\n              (click)=\"clickDeletePlace()\"\n            >\n              <i class=\"fas fa-times\"></i>\n            </button>\n          </div>\n          <mat-error\n            *ngIf=\"sharedExperienceForm.controls.resourceId.errors?.required\"\n            >Pentru a putea crea o experienta impartasita, trebuie sa alegeti un\n            spatiu pentru desfasurarea acesteia.\n          </mat-error>\n\n          <form [formGroup]=\"sharedExperienceForm\">\n            <!--                        DATE-TIME-->\n            <div *ngIf=\"gotResource\">\n              <p class=\"section-title\">\n                <i class=\"me-2 fas fa-clock\"></i\n                >{{ \"SHARED-EXPERIENCES.DATE&HOUR\" | translate }}\n              </p>\n\n              <div class=\"date-display\">\n                <span>Date: {{ sharedExperienceForm.get(\"date\").value }}</span>\n              </div>\n\n              <div class=\"hour-display\">\n                <span>Time: {{ sharedExperienceForm.get(\"hour\").value }}</span>\n              </div>\n            </div>\n\n            <!--                        <div class=\"row\">-->\n            <!--                            <div class=\"col-12\">-->\n            <!--                                <mat-form-field appearance=\"legacy\" class=\"w-100\">-->\n            <!--                                    <mat-label>{{'SHARED-EXPERIENCES.DATE' | translate}}</mat-label>-->\n            <!--                                    <input matInput formControlName=\"date\" [min]=\"today\">-->\n            <!--                                </mat-form-field>-->\n            <!--                            </div>-->\n\n            <!--                            <div class=\"col-12\">-->\n            <!--                                <mat-form-field appearance=\"legacy\" class=\"w-100\">-->\n            <!--                                    <mat-label>{{'SHARED-EXPERIENCES.TIME' | translate}}</mat-label>-->\n            <!--                                    <input matInput type=\"time\" formControlName=\"hour\">-->\n            <!--                                </mat-form-field>-->\n            <!--                            </div>-->\n            <!--                        </div>-->\n\n            <p class=\"section-title\"><i class=\"me-2 fas fa-pen\"></i> Details</p>\n\n            <mat-form-field appearance=\"legacy\" class=\"w-100\">\n              <mat-label>{{\n                \"SHARED-EXPERIENCES.EXPERIENCE-NAME\" | translate\n              }}</mat-label>\n              <input\n                matInput\n                formControlName=\"name\"\n                placeholder=\"{{\n                  'SHARED-EXPERIENCES.EXPERIENCE-NAME' | translate\n                }}\"\n                required\n              />\n              <mat-error\n                *ngIf=\"sharedExperienceForm.controls.name.errors?.required\"\n                >{{ \"ERROR.REQUIRED\" | translate }}\n              </mat-error>\n              <mat-error *ngIf=\"'whitespace'\"\n                >{{ \"ERROR.PASS-WHITESPACE\" | translate }}\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"legacy\" class=\"w-100\">\n              <mat-label>{{ \"USER.DESCRIPTION\" | translate }}</mat-label>\n              <textarea\n                matInput\n                formControlName=\"description\"\n                rows=\"2\"\n                placeholder=\"{{ 'USER.DESCRIPTION' | translate }}\"\n              ></textarea>\n            </mat-form-field>\n\n            <div class=\"row\">\n              <div\n                class=\"col-12 col-xl-6 d-flex justify-content-between align-items-center\"\n              >\n                <mat-form-field appearance=\"legacy\" class=\"w-75\">\n                  <mat-label>{{\n                    \"SHARED-EXPERIENCES.MAX-GUESTS\" | translate\n                  }}</mat-label>\n                  <input\n                    type=\"number\"\n                    pattern=\"[0-9]*\"\n                    inputmode=\"numeric\"\n                    min=\"0\"\n                    title=\"Non-negative integral number\"\n                    placeholder=\"0\"\n                    matInput\n                    formControlName=\"participantsMaxNumber\"\n                    #guestsNumber\n                  />\n                </mat-form-field>\n\n                <label class=\"switch\">\n                  <input\n                    type=\"checkbox\"\n                    [checked]=\"guestsNumber.value > 0\"\n                    formControlName=\"hasParticipantsLimit\"\n                  />\n                  <span class=\"slider round\"></span>\n                </label>\n              </div>\n\n              <div\n                class=\"col-12 col-xl-6 d-flex justify-content-between align-items-center\"\n              >\n                <mat-form-field appearance=\"legacy\" class=\"w-75\">\n                  <mat-label>{{\n                    \"SHARED-EXPERIENCES.DRESSCODE\" | translate\n                  }}</mat-label>\n                  <input matInput formControlName=\"dressCode\" #dressCodeInput />\n                </mat-form-field>\n\n                <label class=\"switch\">\n                  <input type=\"checkbox\" [checked]=\"!!dressCodeInput.value\" />\n                  <span class=\"slider round\"></span>\n                </label>\n              </div>\n            </div>\n          </form>\n\n          <button\n            *ngIf=\"!isEditMode\"\n            type=\"button\"\n            class=\"btn-long btn-color-fill w-100\"\n            (click)=\"onCreateClick()\"\n          >\n            {{ \"SHARED-EXPERIENCES.CREATE\" | translate\n            }}<i class=\"ms-2 fas fa-arrow-right\"></i>\n          </button>\n          <button\n            *ngIf=\"isEditMode\"\n            type=\"button\"\n            class=\"btn-long btn-color-fill w-100\"\n            (click)=\"onEditClick()\"\n          >\n            Editeaza-ti experienta<i class=\"ms-2 fas fa-arrow-right\"></i>\n          </button>\n        </div>\n        <div class=\"col-md-6 col-img d-none d-md-block img-fluid\">\n          <img\n            src=\"/assets/images/others/createSE%20(1).jpg\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--MODAL-->\n\n<ng-template #activity>\n  <app-activity-place\n    (sentResource)=\"getResourceFromModal($event)\"\n  ></app-activity-place>\n</ng-template>\n\n<ng-template #after>\n  <app-after-create-delete\n    [create]=\"true\"\n    [sharedExperienceId]=\"sharedId\"\n  ></app-after-create-delete>\n</ng-template>\n";

/***/ }),

/***/ 62923:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/lobby-shared-experience/lobby-shared-experience.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n    <div class=\"background-container\">\n        <img [src]=\"currentExperience?.featuredImage?.filePath\" alt=\"{{currentExperience?.name}}\">\n    </div>\n</div>\n\n<div class=\"view-container\">\n    <h1 class=\"mb-4\">{{currentExperience?.name}}</h1>\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-lg-6 col-info\">\n                <app-shared-experiences-info *ngIf=\"currentExperience\"\n                                             [experience]=\"currentExperience\"\n                                             [showMenu]=\"true\"\n                ></app-shared-experiences-info>\n\n                <div class=\"lobby\">\n                    <div class=\"lobby-title d-flex justify-content-between align-items-center\">\n                        <h4>Lobby</h4>\n                        <button class=\"chat-button\" [routerLink]=\"'/client/dashboard/inbox/'+currentExperience?.conversationId\"><i class=\"fas fa-comments me-2\"></i>Chat</button>\n                    </div>\n\n                    <div *ngIf=\"isHost\" class=\"lobby-host\">\n                        <div class=\"pending\" *ngIf=\"arrayPending?.length > 0\">\n                            <p> Pending Participants</p>\n                            <div class=\"pending-participants\" *ngFor=\"let pendingParticipant of arrayPending\">\n                                <app-display-user [userId]=\"pendingParticipant?.userId\" [isAdmin]=\"false\"\n                                                  [showMenu]=\"true\" [menuType]=\"'pending'\" [experienceId]=\"currentExperience?.id\"\n                                (refreshPage)=\"getSharedExperience()\"></app-display-user>\n                            </div>\n                        </div>\n\n                        <div class=\"participants\" *ngIf=\"arrayParticipants?.length > 0\">\n                            <p>Event Participants</p>\n                            <div class=\"guests\" *ngFor=\"let participant of arrayParticipants\">\n                                <app-display-user [userId]=\"participant?.userId\" [isAdmin]=\"false\" [showMenu]=\"true\"\n                                                  [menuType]=\"'participant'\"\n                                                  [experienceId]=\"currentExperience?.id\"\n                                (refreshPage)=\"getSharedExperience()\"></app-display-user>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div  *ngIf=\"!isHost\" class=\"lobby-guest\">\n                        <p class=\"mb-0\">Initiated by</p>\n                        <div class=\"creator\">\n                            <app-display-user *ngIf=\"currentExperience\" [userId]=\"currentExperience.userId\"\n                                              [isAdmin]=\"!isHost\" [showMenu]=\"false\"></app-display-user>\n\n                        </div>\n                        <div class=\"participants\" *ngIf=\"arrayParticipants?.length > 0\">\n                            <p>Event Participants</p>\n                            <div class=\"guests\" *ngFor=\"let participant of arrayParticipants\">\n                                <app-display-user [userId]=\"participant?.userId\" [isAdmin]=\"false\" [showMenu]=\"false\"></app-display-user>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!--                PEntru guests-->\n                <!--                <h4>Initiated by</h4>-->\n                <!--                <div class=\"creator\">-->\n                <!--                    <app-display-user *ngIf=\"currentExperience\" [userId]= \"currentExperience.userId\" [isAdmin]=\"isHost\" [showMenu]=\"true\"></app-display-user>-->\n\n                <!--                </div>-->\n                <!--                <button *ngIf=\"!isHost\"  (click)=\"requestToJoinSharedExp()\" class=\"btn-long btn-color-fill w-100\">Request to join <i class=\"fas fa-arrow-right\"></i></button>-->\n\n            </div>\n            <div class=\"col-12 col-lg-6\">\n                <img [src]=\"currentExperience?.featuredImage?.filePath\" class=\"image-fluid w-100\"\n                     alt=\"{{currentExperience?.name}}\">\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 83485:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/shared-experiences-list/shared-experiences-list.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n  <div class=\"background-container\">\n    <img\n      src=\"/assets/images/others/shared%20exp.jpg\"\n      alt=\"Shared Experiences\"\n    />\n  </div>\n\n  <div class=\"content-container\">\n    <p class=\"title-shared mb-0\">Shared Experiences</p>\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <mat-form-field appearance=\"legacy\" class=\"w-100\">\n          <input\n            matInput\n            type=\"text\"\n            [formControl]=\"searchFilter\"\n            (keydown.enter)=\"getSharedExperiences()\"\n            placeholder=\"Caută experiență\"\n          />\n        </mat-form-field>\n      </div>\n\n      <app-button-create></app-button-create>\n\n      <div class=\"row list-experiences mt-3\">\n        <!--                <div class=\"col-4 col-filters\">-->\n\n        <!--                </div>-->\n        <div class=\"col-12 col-list\">\n          <div class=\"row gap-2\" *ngFor=\"let experience of sharedExperiences\">\n            <app-shared-experiences-card\n              [experience]=\"experience\"\n            ></app-shared-experiences-card>\n          </div>\n        </div>\n\n        <mat-paginator\n          [pageSizeOptions]=\"pageSizeArray\"\n          [pageSize]=\"pageSize\"\n          [length]=\"paginationInfo?.totalElements\"\n          (page)=\"pageChanged($event)\"\n          aria-label=\"Select page of resources\"\n        ></mat-paginator>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 18196:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/shared-experiences/view-shared-experience/view-shared-experience.component.html?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex flex-column\">\n    <div class=\"background-container\">\n        <img [src]=\"currentExperience?.featuredImage?.filePath\" alt=\"{{currentExperience?.name}}\">\n    </div>\n</div>\n\n<div class=\"view-container\">\n    <h1 class=\"mb-4\">{{currentExperience?.name}}</h1>\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-lg-6 col-info\">\n                <div  class=\"available-spots row align-items-center mb-3\">\n                    <div class=\"col-12\" *ngIf=\"!isHost && !userJoined && !accepted && currentExperience?.participantsLimit\">\n                        <p class=\"w-100 mb-0 spots-left\" >Only {{availableSpotsLeft}} slots left! Hurry up and join the fun!</p>\n                    </div>\n                    <div class=\"col-12 d-flex justify-content-end\" *ngIf=\"isHost || userJoined\">\n                        <button *ngIf=\"isHost\" class=\"btn-long btn-color-fill w-50\" routerLink=\"../../lobby/{{currentExperience.slug}}\"><i class=\"fas fa-crown\"></i>Admin lobby<i class=\"fas fa-arrow-right\"></i></button>\n                        <button *ngIf=\"userJoined && accepted\" class=\"btn-long btn-color-fill w-50\" routerLink=\"../../lobby/{{currentExperience.slug}}\">Experience lobby<i class=\"fas fa-arrow-right\"></i></button>\n                        <button class=\"btn-long btn-color-fill\" [disabled]=\"true\" *ngIf=\"userJoined && !accepted\">Deja ai aplicat, asteapta sa fii acceptat!</button>\n                    </div>\n                     </div>\n                <app-shared-experiences-info *ngIf=\"currentExperience\" [experience]=\"currentExperience\" [showMenu]=\"false\"></app-shared-experiences-info>\n                <h4>Initiated by</h4>\n                <div class=\"creator\">\n                    <app-display-user *ngIf=\"currentExperience\" [userId]= \"currentExperience.userId\" [isAdmin]=\"isHost\" [showMenu]=\"false\"></app-display-user>\n\n                </div>\n                <button *ngIf=\"!userJoined && !isHost\"  (click)=\"requestToJoinSharedExp()\" class=\"btn-long btn-color-fill w-100\">Request to join <i class=\"fas fa-arrow-right\"></i></button>\n            </div>\n            <div class=\"col-12 col-lg-6\">\n                <img [src]=\"currentExperience?.featuredImage?.filePath\" class=\"image-fluid w-100\" alt=\"{{currentExperience?.name}}\">\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 49346:
/*!*********************************************************************************************************!*\
  !*** ./src/app/standalone-components/card-activity-place/card-activity-place.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"activity-card d-flex flex-wrap flex-md-nowrap flex-column flex-md-row\">\n    <div class=\"img-container\">\n        <img [src]=\"resource?.featuredImage?.filePath\" alt=\"resource picture\">\n    </div>\n\n    <div class=\"resource-info d-flex justify-content-between flex-column\">\n        <h3>{{resource?.title}}</h3>\n        <p class=\"mb-1\">{{currentLanguage === 'ro' ? resType?.nameRo : resType?.nameEn}}</p>\n        <p class=\"mb-1\"><i class=\"me-2 fas fa-map-marker-alt\"></i>{{resource?.address+', '+ resource?.city+', '+resource?.country}}</p>\n    </div>\n</div>";

/***/ }),

/***/ 14854:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/standalone-components/shared-experiences-card/shared-experiences-card.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"experience\" routerLink=\"../view/{{experience.slug}}\">\n    <img [src]=\"experience.featuredImage?.filePath\" alt=\"{{experience?.name}}\">\n    <div class=\"top-bar d-flex justify-content-between align-items-center\">\n<!--        <div class=\"members d-flex\">-->\n<!--            <div class=\"users-joined d-flex justify-content-center align-items-center\">-->\n<!--                <p class=\"mb-0\">{{experience.participants?.length}}<i class=\"ms-1 fas fa-user\"></i></p>-->\n<!--            </div>-->\n<!--            <div class=\"user\" *ngFor=\"let user of usersJoined; let i=index\">-->\n<!--                    <img *ngIf=\"i === 0\" class=\"first-avatar\" [src]=\"user\">-->\n<!--                    <img *ngIf=\"i === 1\" class=\"second-avatar\" [src]=\"user\">-->\n<!--                    <img *ngIf=\"i === 2\" class=\"third-avatar\" [src]=\"user\">-->\n<!--            </div>-->\n<!--        </div>-->\n        <button>\n            <i class=\"far fa-star\"></i>\n        </button>\n    </div>\n    <div class=\"text-background\">\n        <div class=\"row w-100\">\n            <div class=\"top-row d-flex justify-content-between\">\n                <h2>{{experience?.name}}</h2>\n                <p *ngIf=\"experience?.resourceType\" class=\"label-categ\">{{experience?.resourceType}}</p>\n            </div>\n            <p class=\"timetable\">Starts: <span>{{experience?.startDate | date: 'HH:mm z d MMMM, y'}}</span></p>\n            <p><i class=\"fas fa-map-marker-alt me-2\"></i>{{experience?.place+', '+experience?.city+', '+experience?.country}}</p>\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_shared-experiences_shared-experiences_module_ts.js.map