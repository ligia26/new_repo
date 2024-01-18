(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["default-src_app_features_forums_forums_module_ts"],{

/***/ 80538:
/*!************************************************************!*\
  !*** ./src/app/features/forums/_services/forum.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumService": () => (/* binding */ ForumService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);




let ForumService = class ForumService {
  // Trigger list changes
  triggerUserListChanges(message) {
    // Change the subject value
    this.listChanged.next(message);
  }
  constructor(http) {
    this.http = http;
    // Functions For Changes Detection
    this.listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.listChangedObs = this.listChanged.asObservable();
  }
  listForumThreadFiltered(page, size, sort, dir, filterParams) {
    return this.http.post('/bestinform/listForumThreadFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, filterParams);
  }
  changeThreadStatus(threadId, status) {
    return this.http.put('/bestinform/changeThreadStatus?threadId=' + threadId + '&status=' + status, {});
  }
  getThreadById(threadId) {
    return this.http.get('/bestinform/getThreadById?threadId=' + threadId);
  }
  createForumThread(forumObj) {
    return this.http.post('/bestinform/createForumThread', forumObj);
  }
  uploadForumImage(threadId, file) {
    return this.http.post('/bestinform/uploadForumImage?threadId=' + threadId, file);
  }
  updateThread(threadId, threadObj) {
    return this.http.put('/bestinform/updateThread?threadId=' + threadId, threadObj);
  }
  //thread comments
  listThreadComments(threadId, page, size, sort, dir, disable) {
    return this.http.post('/bestinform/listThreadComments?threadId=' + threadId + '&page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir + '&disable=' + disable, {});
  }
  listAllThreadComments(threadId, page, size, sort, dir) {
    return this.http.post('/bestinform/listThreadComments?threadId=' + threadId + '&page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, {});
  }
  addLikeToThreadComment(commentId, like) {
    return this.http.put('/bestinform/addLikeToThreadComment?commentId=' + commentId + '&like=' + like, {});
  }
  addCommentToThread(threadId, comment) {
    return this.http.post('/bestinform/addCommentToThread?threadId=' + threadId, comment);
  }
  disableThreadComment(commentId, disable) {
    return this.http.put('/bestinform/disableThreadComment?commentId=' + commentId + '&disable=' + disable, {});
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
ForumService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ForumService);


/***/ }),

/***/ 98471:
/*!******************************************************************!*\
  !*** ./src/app/features/forums/add-topic/add-topic.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTopicComponent": () => (/* binding */ AddTopicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_topic_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-topic.component.html?ngResource */ 49713);
/* harmony import */ var _add_topic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-topic.component.scss?ngResource */ 79888);
/* harmony import */ var _add_topic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_topic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/forum.service */ 80538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);










let AddTopicComponent = class AddTopicComponent {
  constructor(fb, forumService, activatedRoute, router, cdr, toastService) {
    this.fb = fb;
    this.forumService = forumService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.cdr = cdr;
    this.toastService = toastService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
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
      defaultFontName: '',
      defaultFontSize: '5',
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
    // featuredImageForm:FormControl;
    //tags
    this.addedTags = [];
    //featured image
    // images url and files
    this.thumbnailUrl = {
      fileName: undefined,
      filePath: undefined
    };
    this.trueFile = false;
    //add tags
    this.addOnBlur = true;
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.COMMA];
  }
  ngOnInit() {
    this.getPathSlug();
    this.initForm();
  }
  initForm() {
    this.addTopicForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      category: [''],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      slug: [''],
      status: ['pending_review'],
      tags: [['']]
    });
    // this.featuredImageForm=new FormControl('');
  }
  //get the editorial slug from url
  getPathSlug() {
    this.activatedRoute.params.subscribe(params => {
      this.categorySlug = params['category'];
    });
  }
  //create slug suggestion
  createSlug(title) {
    const insertedTitle = title.toLocaleLowerCase();
    this.slugSuggestion = insertedTitle.split(' ').join('-');
    console.log(this.slugSuggestion);
    this.addTopicForm.get("slug").patchValue(this.slugSuggestion);
    this.cdr.detectChanges();
  }
  addTag(event) {
    const value = (event.value || '').trim();
    // Add our tag
    if (value) {
      this.addedTags.push(value);
    }
    // Clear the input value
    event.chipInput.clear();
  }
  //remove tag
  remove(tag) {
    const index = this.addedTags.indexOf(tag);
    if (index >= 0) {
      this.addedTags.splice(index, 1);
    }
  }
  //featured image
  onThumbnailChange(event) {
    if (event.target.files && event.target.files[0]) {
      const maxSize = 2 * 1024 * 1024;
      if (event.target.files[0].size < maxSize) {
        this.trueFile = true;
        this.thumbnailUrl.fileName = event.target.files[0].name;
        this.thumbnailFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => this.thumbnailUrl.filePath = reader.result;
        reader.readAsDataURL(this.thumbnailFile);
      } else {
        this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
        return;
      }
    }
  }
  removeThumbnail() {
    this.thumbnailUrl = {
      fileName: undefined,
      filePath: undefined
    };
    this.thumbnailFile = undefined;
  }
  createThread(topicObj) {
    this.forumService.createForumThread(topicObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.toastService.showToast("Info", "Topicul a fost creat! Urmează să fie aprobat de către staff.", "info");
        if (res.success === true) {
          //add featured image
          if (this.thumbnailFile !== undefined) {
            const thumbnailData = new FormData();
            thumbnailData.append('file', this.thumbnailFile);
            this.forumService.uploadForumImage(res.reason, thumbnailData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
              next: imgRes => {
                this.toastService.showToast("Success", "Imaginea a fost incarcata!", "success");
                this.router.navigate(['../'], {
                  relativeTo: this.activatedRoute
                });
              },
              error: error => {
                console.log(error);
                // this.toastService.showToast("Error", "Incarcati o imagine reprezentativa!", "error")
                if (error.error.reason === 'fileSizeTooBig') {
                  this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                } else if (error.error.reason === 'wrongExtension') {
                  this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                } else {
                  this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                }
              }
            });
          } else {
            this.router.navigate(['../'], {
              relativeTo: this.activatedRoute
            });
            return;
          }
        }
      },
      error: err => {
        console.log(err);
        this.toastService.showToast("Error", "A aparut o eroare!", "error");
      }
    });
  }
  //save
  saveTopic() {
    const topicObj = {
      ...this.addTopicForm.value,
      tags: this.addedTags,
      category: this.categorySlug
    };
    console.log(topicObj);
    // Check if the form is valid
    if (this.addTopicForm.valid) {
      // Check if you have a user ID
      // Create user
      this.createThread(topicObj);
    } else {
      // Mark all inputs as touched
      this.addTopicForm.markAllAsTouched();
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: _services_forum_service__WEBPACK_IMPORTED_MODULE_2__.ForumService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
  }];
};
AddTopicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-add-topic',
  template: _add_topic_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_add_topic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddTopicComponent);


/***/ }),

/***/ 53178:
/*!********************************************************************************!*\
  !*** ./src/app/features/forums/all-threads-list/all-threads-list.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllThreadsListComponent": () => (/* binding */ AllThreadsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _all_threads_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-threads-list.component.html?ngResource */ 5779);
/* harmony import */ var _all_threads_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-threads-list.component.scss?ngResource */ 1445);
/* harmony import */ var _all_threads_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_all_threads_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/modals.service */ 82882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_forum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/forum.service */ 80538);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);














let AllThreadsListComponent = class AllThreadsListComponent {
  constructor(forumService, ngbModalService, modalService, router, cdr, datepipe, modal, toastService) {
    this.forumService = forumService;
    this.ngbModalService = ngbModalService;
    this.modalService = modalService;
    this.router = router;
    this.cdr = cdr;
    this.datepipe = datepipe;
    this.modal = modal;
    this.toastService = toastService;
    // Mat Table
    this.displayedColumns = ['id', 'title', 'authors', 'category', 'date', 'comments', 'status', 'actions'];
    this.dataList = [];
    this.pageItems = [10, 25, 100];
    // Mat Table - Filter Forms
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    // Mat Table - pagination, sorting, filtering
    this.page = 0;
    this.sorting = "date";
    this.dir = 'desc';
    this.pageSize = 10;
  }
  ngOnInit() {
    // Initialize Data
    this.initiateData();
    // Listen to List Changes
    this.listChanges();
  }
  getDataList() {
    // Filter Data
    const filterData = {
      title: this.searchFilter.value !== '' ? this.searchFilter.value : null
    };
    this.forumService.listForumThreadFiltered(this.page, this.pageSize, this.sorting, this.dir, filterData).subscribe(data => {
      this.dataList = data["content"];
      console.log('Forums', this.dataList);
      this.totalElements = data["totalElements"];
    });
  }
  // Listen to data changes and refresh the user list
  listChanges() {
    this.modalService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get Documents List
        this.getDataList();
        this.cdr.detectChanges();
      }
    });
  }
  applyFilter(event) {
    if (event.direction) {
      this.dir = event.direction === 'desc' || event.direction === '' ? 'asc' : 'desc';
      this.sorting = event.active;
      // Go to first page
      this.paginator.firstPage();
      // Listen to layout changes
      this.cdr.detectChanges();
      // Get All Documents List
      this.getDataList();
    }
  }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Documents List
    this.getDataList();
  }
  // Filter List
  filterData() {
    // Go to first page
    this.paginator.firstPage();
    // Get All Documents List
    this.getDataList();
  }
  // Sort List
  announceSortChange(sortState) {
    if (sortState.direction) {
      this.sorting = sortState.active;
      this.dir = sortState.direction;
      // Go to first page
      this.paginator.firstPage();
      // Listen to layout changes
      this.cdr.detectChanges();
      // Get All Documents List
      this.getDataList();
    }
  }
  //initialize data
  initiateData() {
    this.getDataList();
    // Data Loaded
    this.dataLoaded = true;
    // Change Detection
    this.cdr.detectChanges();
  }
  // closeModal() {
  //   this.ngbModalService.dismissAll();
  // }
  openModal(modal, data) {
    this.modal.open(modal);
    this.statusInput = data;
  }
  closeModal() {
    this.modal.closeAll();
  }
  changeStatus(threadId, status) {
    console.log('change status', threadId, status);
    this.forumService.changeThreadStatus(threadId, status).subscribe({
      next: resp => {
        if (resp.success) {
          this.modalService.triggerUserListChanges(true);
          this.toastService.showToast('Success', 'Statusul resursei a fost modificat!', 'success');
          this.modal.closeAll();
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
        if (err.error.reason === 'notAllowed' || err.error.reason === 'tokenExpired') {
          this.toastService.showToast('Error', 'Nu aveti rolul necesar pentru a face aceasta acțiune!', "error");
        }
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_forum_service__WEBPACK_IMPORTED_MODULE_3__.ForumService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal
  }, {
    type: _shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, {
        static: true
      }]
    }]
  };
};
AllThreadsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-all-threads-list',
  template: _all_threads_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [(_all_threads_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AllThreadsListComponent);


/***/ }),

/***/ 41826:
/*!**********************************************************************!*\
  !*** ./src/app/features/forums/edit-thread/edit-thread.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditThreadComponent": () => (/* binding */ EditThreadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_thread_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-thread.component.html?ngResource */ 49849);
/* harmony import */ var _edit_thread_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-thread.component.scss?ngResource */ 16601);
/* harmony import */ var _edit_thread_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_edit_thread_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _services_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/forum.service */ 80538);
/* harmony import */ var src_app_theme_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/components/toast/toast.component */ 66462);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);











let EditThreadComponent = class EditThreadComponent {
  constructor(forumService, toastService, fb, activatedRoute, router) {
    this.forumService = forumService;
    this.toastService = toastService;
    this.fb = fb;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    //tags
    this.addedTags = [];
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
    this.addOnBlur = true;
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.COMMA];
  }
  ngOnInit() {
    this.getPathId();
    this.initForm();
  }
  initForm() {
    this.editThreadForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      slug: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      tags: [['']],
      description: ['']
    });
  }
  getPathId() {
    this.activatedRoute.params.subscribe(params => {
      this.idThread = params['id'];
      this.getEditorialById(this.idThread);
    });
  }
  getEditorialById(idThread) {
    this.forumService.getThreadById(idThread).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: thread => {
        this.threadData = thread;
        this.addedTags = thread.tags;
        this.editThreadForm.patchValue({
          ...this.threadData,
          tags: this.addedTags
        });
      }
    });
  }
  addTag(event) {
    const value = (event.value || '').trim();
    // Add our tag
    if (value) {
      this.addedTags.push(value);
    }
    // Clear the input value
    event.chipInput.clear();
  }
  //remove tag
  remove(tag) {
    const index = this.addedTags.indexOf(tag);
    if (index >= 0) {
      this.addedTags.splice(index, 1);
    }
  }
  updateThread(updatedThread) {
    this.forumService.updateThread(this.idThread, updatedThread).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.toastService.showToast("Success", "Topicul a fost updatat cu succes!", "success");
        this.router.navigate(['../../'], {
          relativeTo: this.activatedRoute
        });
      },
      error: err => {
        console.log(err);
        this.toastService.showToast("Error", "Topicul a fost updatat cu succes!", "error");
      }
    });
  }
  //update thread
  saveThread() {
    const updatedThread = {
      ...this.editThreadForm.value,
      tags: this.addedTags
    };
    if (this.editThreadForm.valid) {
      this.updateThread(updatedThread);
    } else {
      this.editThreadForm.markAllAsTouched();
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_forum_service__WEBPACK_IMPORTED_MODULE_2__.ForumService
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }];
};
EditThreadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-edit-thread',
  template: _edit_thread_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [src_app_theme_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__.ToastComponent],
  styles: [(_edit_thread_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditThreadComponent);


/***/ }),

/***/ 79470:
/*!**************************************************!*\
  !*** ./src/app/features/forums/forums.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumsModule": () => (/* binding */ ForumsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _all_threads_list_all_threads_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-threads-list/all-threads-list.component */ 53178);
/* harmony import */ var _threads_list_threads_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./threads-list/threads-list.component */ 43929);
/* harmony import */ var _shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/_services/user-roles.guard */ 16070);
/* harmony import */ var _add_topic_add_topic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-topic/add-topic.component */ 98471);
/* harmony import */ var _view_topic_view_topic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-topic/view-topic.component */ 24232);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @kolkov/angular-editor */ 89971);
/* harmony import */ var _edit_thread_edit_thread_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-thread/edit-thread.component */ 41826);
/* harmony import */ var _thread_comments_list_thread_comments_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thread-comments-list/thread-comments-list.component */ 51446);















const routes = [{
  path: 'threads',
  component: _all_threads_list_all_threads_list_component__WEBPACK_IMPORTED_MODULE_2__.AllThreadsListComponent,
  canActivate: [_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_4__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_SUPER_ADMIN', 'ROLE_STAFF']
  }
}, {
  path: 'threads/edit/:id',
  component: _edit_thread_edit_thread_component__WEBPACK_IMPORTED_MODULE_7__.EditThreadComponent,
  canActivate: [_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_4__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_SUPER_ADMIN', 'ROLE_STAFF']
  }
}, {
  path: ':category',
  component: _threads_list_threads_list_component__WEBPACK_IMPORTED_MODULE_3__.ThreadsListComponent
}, {
  path: ':category/add',
  component: _add_topic_add_topic_component__WEBPACK_IMPORTED_MODULE_5__.AddTopicComponent,
  canActivate: [_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_4__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_CLIENT']
  }
}, {
  path: ':category/view/:id',
  component: _view_topic_view_topic_component__WEBPACK_IMPORTED_MODULE_6__.ViewTopicComponent,
  canActivate: [_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_4__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_CLIENT', 'ROLE_PROVIDER']
  }
}];
let ForumsModule = class ForumsModule {};
ForumsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  declarations: [_all_threads_list_all_threads_list_component__WEBPACK_IMPORTED_MODULE_2__.AllThreadsListComponent, _threads_list_threads_list_component__WEBPACK_IMPORTED_MODULE_3__.ThreadsListComponent, _add_topic_add_topic_component__WEBPACK_IMPORTED_MODULE_5__.AddTopicComponent, _view_topic_view_topic_component__WEBPACK_IMPORTED_MODULE_6__.ViewTopicComponent, _edit_thread_edit_thread_component__WEBPACK_IMPORTED_MODULE_7__.EditThreadComponent, _thread_comments_list_thread_comments_list_component__WEBPACK_IMPORTED_MODULE_8__.ThreadCommentsListComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__.DashboardHeaderComponent, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_14__.AngularEditorModule]
})], ForumsModule);


/***/ }),

/***/ 51446:
/*!****************************************************************************************!*\
  !*** ./src/app/features/forums/thread-comments-list/thread-comments-list.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreadCommentsListComponent": () => (/* binding */ ThreadCommentsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _thread_comments_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread-comments-list.component.html?ngResource */ 79069);
/* harmony import */ var _thread_comments_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thread-comments-list.component.scss?ngResource */ 11182);
/* harmony import */ var _thread_comments_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thread_comments_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _services_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/forum.service */ 80538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/modals.service */ 82882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/toast.service */ 62941);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);















let ThreadCommentsListComponent = class ThreadCommentsListComponent {
  constructor(forumService, ngbModalService, modalService, router, datepipe, modal, toastService) {
    this.forumService = forumService;
    this.ngbModalService = ngbModalService;
    this.modalService = modalService;
    this.router = router;
    this.datepipe = datepipe;
    this.modal = modal;
    this.toastService = toastService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.displayedColumns = ['id', 'userName', 'date', 'content', 'disable', 'actions'];
    this.dataList = [];
    this.pageItems = [10, 25, 100];
    // Mat Table - Filter Forms
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    // Mat Table - pagination, sorting, filtering
    this.page = 0;
    this.sorting = "date";
    this.dir = 'desc';
    this.pageSize = 10;
  }
  ngOnInit() {
    // Initialize Data
    this.initiateData();
    // Listen to List Changes
    this.listChanges();
  }
  getDataList() {
    // Filter Data
    // const filterData = {
    //   title: this.searchFilter.value !== '' ? this.searchFilter.value : null,
    // };
    this.forumService.listAllThreadComments(this.threadId, this.page, this.pageSize, this.sorting, this.dir).subscribe(data => {
      this.dataList = data["content"];
      console.log('Forums', this.dataList);
      this.totalElements = data["totalElements"];
    });
  }
  // Listen to data changes and refresh the user list
  listChanges() {
    this.forumService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get Documents List
        this.getDataList();
      }
    });
    this.forumService.triggerUserListChanges(false);
  }
  applyFilter(event) {
    if (event.direction) {
      this.dir = event.direction === 'desc' || event.direction === '' ? 'asc' : 'desc';
      this.sorting = event.active;
      // Go to first page
      this.page = 0;
      // Get All Documents List
      this.getDataList();
    }
  }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Documents List
    this.getDataList();
  }
  // Filter List
  filterData() {
    this.page = 0;
    this.getDataList();
  }
  // Sort List
  announceSortChange(sortState) {
    if (sortState.direction) {
      this.sorting = sortState.active;
      this.dir = sortState.direction;
      this.page = 0;
      // Get All Documents List
      this.getDataList();
    }
  }
  //initialize data
  initiateData() {
    this.getDataList();
    // Data Loaded
    this.dataLoaded = true;
  }
  disableComment(commentId, disable) {
    this.forumService.disableThreadComment(commentId, disable).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        this.toastService.showToast('Success', 'Comentariul a fost dezactivat!', 'success');
        this.forumService.triggerUserListChanges(true);
        this.closeModal();
      },
      error: err => {
        this.toastService.showToast('Error', 'A aparut o eroare!', 'error');
        console.log(err.reason);
      }
    });
  }
  openModal(modal, data) {
    this.modal.open(modal, {
      maxWidth: 720
    });
    this.statusInput = data;
  }
  closeModal() {
    this.modal.closeAll();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_forum_service__WEBPACK_IMPORTED_MODULE_2__.ForumService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
  }, {
    type: src_app_shared_services_modals_service__WEBPACK_IMPORTED_MODULE_3__.ModalService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog
  }, {
    type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
  }];
  static #_2 = this.propDecorators = {
    threadId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, {
        static: true
      }]
    }]
  };
};
ThreadCommentsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-thread-comments-list',
  template: _thread_comments_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [(_thread_comments_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ThreadCommentsListComponent);


/***/ }),

/***/ 43929:
/*!************************************************************************!*\
  !*** ./src/app/features/forums/threads-list/threads-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreadsListComponent": () => (/* binding */ ThreadsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _threads_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./threads-list.component.html?ngResource */ 72790);
/* harmony import */ var _threads_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./threads-list.component.scss?ngResource */ 16970);
/* harmony import */ var _threads_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_threads_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/modals.service */ 82882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_forum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/forum.service */ 80538);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);













let ThreadsListComponent = class ThreadsListComponent {
  constructor(forumService, ngbModalService, modalService, router, cdr, datepipe, route, userService) {
    this.forumService = forumService;
    this.ngbModalService = ngbModalService;
    this.modalService = modalService;
    this.router = router;
    this.cdr = cdr;
    this.datepipe = datepipe;
    this.route = route;
    this.userService = userService;
    // Mat Table
    this.dataList = [];
    this.pageItems = [10, 25, 100];
    // Mat Table - Filter Forms
    this.searchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    // Mat Table - pagination, sorting, filtering
    this.page = 0;
    this.sorting = "date";
    this.dir = 'desc';
    this.pageSize = 10;
  }
  ngOnInit() {
    // Initialize Data
    this.initiateData();
    // // Listen to List Changes
    // this.listChanges();
  }

  getDataList() {
    // Filter Data
    const filterData = {
      title: this.searchFilter.value !== '' ? this.searchFilter.value : null,
      category: this.forumCategory,
      status: "active"
      // userId: "string",
    };

    this.forumService.listForumThreadFiltered(this.page, this.pageSize, this.sorting, this.dir, filterData).subscribe(data => {
      this.dataList = data["content"];
      console.log('Forums', this.dataList);
      this.totalElements = data["totalElements"];
    });
  }
  initiateData() {
    this.route.params.subscribe(params => {
      if (params['category']) {
        console.log('category FORUM', params['category']);
        this.forumCategory = params['category'];
        this.getDataList();
        // Data Loaded
        this.dataLoaded = true;
        // Change Detection
        this.cdr.detectChanges();
      }
    });
  }
  //
  // listChanges(){
  //   this.modalService.listChangedObs.subscribe((data: boolean) => {
  //     // If the response is true
  //     if (data) {
  //       // Get Documents List
  //       this.getDataList();
  //       this.cdr.detectChanges();
  //     }
  //   })
  // }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Documents List
    this.getDataList();
  }
  // Filter List
  filterData() {
    // Go to first page
    this.paginator.firstPage();
    // Get All Documents List
    this.getDataList();
  }
  closeModal() {
    this.ngbModalService.dismissAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_forum_service__WEBPACK_IMPORTED_MODULE_3__.ForumService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal
  }, {
    type: _shared_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, {
        static: true
      }]
    }]
  };
};
ThreadsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-threads-list',
  template: _threads_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe],
  styles: [(_threads_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ThreadsListComponent);


/***/ }),

/***/ 24232:
/*!********************************************************************!*\
  !*** ./src/app/features/forums/view-topic/view-topic.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTopicComponent": () => (/* binding */ ViewTopicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_topic_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-topic.component.html?ngResource */ 94864);
/* harmony import */ var _view_topic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-topic.component.scss?ngResource */ 51293);
/* harmony import */ var _view_topic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_topic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/forum.service */ 80538);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/_services/userData.service */ 32763);











let ViewTopicComponent = class ViewTopicComponent {
  constructor(route, forumService, userService) {
    this.route = route;
    this.forumService = forumService;
    this.userService = userService;
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    //comments data
    this.listThreadComments = [];
    // Mat Table - pagination, sorting, filtering
    this.page = 0;
    this.sorting = "date";
    this.dir = 'desc';
    this.pageSize = 10;
    this.pageItems = [10, 20, 50, 100];
    this.editorConfig = {
      editable: true,
      height: '200',
      minHeight: '200px',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      enableToolbar: true,
      showToolbar: true,
      defaultParagraphSeparator: 'p',
      defaultFontName: '',
      defaultFontSize: '5',
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
    this.newCommentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
  }
  ngOnInit() {
    this.getCurrentUser();
    this.getPathTrhreadId();
    this.listChanges();
  }
  getCurrentUser() {
    this.userService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: user => {
        this.currentUserId = user.id;
        this.currentUserName = user.firstName + ' ' + user.lastName;
        this.currentUserAvatar = user.avatar !== null ? user.avatar.filePath : '../../../../assets/images/others/user.jpg';
      }
    });
  }
  getPathTrhreadId() {
    this.route.params.subscribe(params => {
      this.threadId = params['id'];
      //thread data
      this.getThreadById(this.threadId);
      //comments list
      this.getListThreadComments();
    });
  }
  getThreadById(id) {
    this.forumService.getThreadById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: threadData => {
        this.threadData = threadData;
        console.log('datele forumului', this.threadData);
      }
    });
  }
  getListThreadComments() {
    this.forumService.listThreadComments(this.threadId, this.page, this.pageSize, this.sorting, this.dir, false).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: commentsObj => {
        this.listThreadComments = commentsObj.content;
        this.totalElements = commentsObj.totalElements;
      }
    });
  }
  addComment() {
    const comment = this.newCommentForm.value;
    // this.nrWords=this.wordCount(comment) -1;
    this.forumService.addCommentToThread(this.threadId, comment).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log(res);
        this.forumService.triggerUserListChanges(true);
      }
    });
  }
  // Listen to data changes and refresh the user list
  listChanges() {
    this.forumService.listChangedObs.subscribe(data => {
      // If the response is true
      if (data) {
        // Get Documents List
        this.getListThreadComments();
      }
    });
    this.forumService.triggerUserListChanges(false);
  }
  goTo(element) {
    element.scrollIntoView();
  }
  likeComment(commentId) {
    this.forumService.addLikeToThreadComment(commentId, true).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
      next: res => {
        console.log(res);
      }
    });
  }
  // Page Changer
  pageChanged(event) {
    this.page = event["pageIndex"];
    this.pageSize = event["pageSize"];
    // Get All Documents List
    this.getListThreadComments();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _services_forum_service__WEBPACK_IMPORTED_MODULE_2__.ForumService
  }, {
    type: src_app_shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator]
    }]
  };
};
ViewTopicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-view-topic',
  template: _view_topic_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [(_view_topic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ViewTopicComponent);


/***/ }),

/***/ 79888:
/*!*******************************************************************************!*\
  !*** ./src/app/features/forums/add-topic/add-topic.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content {\n  background-color: var(--primary-background);\n  margin-bottom: 12px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 12px;\n}\n\n.card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\nh3 {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.1px;\n  color: #24398A;\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n\n.table-container {\n  padding: 24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header {\n  padding-top: 44.5px;\n  padding-bottom: 42.5px;\n  border-color: transparent;\n  background-color: rgb(237, 239, 245);\n}\n\n.card.custom-table.gutter-b {\n  border: none;\n  padding: 24px;\n}\n\n.info-card {\n  padding: 24px;\n  gap: 24px;\n  margin-bottom: 48px;\n  background: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid var(--secondary-background);\n}\n\n.image-container {\n  position: relative;\n  width: 100%;\n  min-height: 7.5rem;\n  height: 100%;\n  border: 2px solid rgba(36, 57, 138, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.image-container .no-image {\n  width: 100%;\n  min-height: inherit;\n  background: rgba(36, 57, 138, 0.04);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #24398A;\n  cursor: pointer;\n  gap: 0.75rem;\n}\n.image-container .no-image:before {\n  content: \"\\f03e\";\n  font-family: \"Font Awesome 5 Free\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.25rem;\n}\n.image-container .no-image:after {\n  font-size: 1rem;\n  content: attr(translatedContent);\n}\n.image-container .btn-thumbnail, .image-container .btn-gallery {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(36, 57, 138, 0.16);\n  border-radius: 100%;\n  border: none;\n}\n.image-container .btn-thumbnail i, .image-container .btn-gallery i {\n  color: var(--primary-background);\n  font-weight: 900;\n  font-size: 16px;\n}\n.image-container .btn-thumbnail {\n  position: absolute;\n  top: 2.125rem;\n  right: 2.125rem;\n}\n.image-container .btn-gallery {\n  position: absolute;\n  top: 0.875rem;\n  right: 0.875rem;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/forums/add-topic/add-topic.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,mBAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;AAkBJ;;AAfE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDXQ;AC6BZ;;AAdA;EACE,WAAA;AAiBF;;AAdA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;EACA,oBAAA;AAiBF;;AAdA;EACE,aAAA;EACA,kBAAA;EACA,6BAAA;AAiBF;;AAdA;EACE,mBAAA;EACA,sBAAA;EACA,yBAAA;EACA,oCAAA;AAiBF;;AAdA;EACE,YAAA;EACA,aAAA;AAiBF;;AAdA;EACE,aAAA;EACA,SAAA;EACA,mBAAA;EAEA,mBAAA;EACA,kBAAA;EACA,6CAAA;AAgBF;;AAbA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;AAgBF;AAdE;EACE,WAAA;EACA,mBAAA;EACA,mCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cDjFY;ECkFZ,eAAA;EACA,YAAA;AAgBJ;AAdI;EACE,gBAAA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;AAgBN;AAbI;EACE,eAAA;EACA,gCAAA;AAeN;AAXE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mCAAA;EACA,mBAAA;EACA,YAAA;AAaJ;AAXI;EACE,gCAAA;EACA,gBAAA;EACA,eAAA;AAaN;AATE;EACE,kBAAA;EACA,aAAA;EACA,eAAA;AAWJ;AARE;EACE,kBAAA;EACA,aAAA;EACA,eAAA;AAUJ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.content{\n    background-color: var(--primary-background);\n    margin-bottom:12px;\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n    overflow: hidden;\n    padding: 12px;\n}\n.card-body {\n  & > p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 140%;\n    letter-spacing: -0.02em;\n    color: $paragraph;\n  }\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\nh3{\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.1px;\n  color: #24398A;\n  padding-top:14px;\n  padding-bottom:14px;\n}\n\n.table-container{\n  padding:24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header{\n  padding-top: 44.5px;\n  padding-bottom: 42.5px;\n  border-color:transparent;\n  background-color: rgba(237, 239, 245, 1);\n}\n\n.card.custom-table.gutter-b{\n  border:none;\n  padding:24px;\n}\n\n.info-card{\n  padding:24px;\n  gap: 24px;\n  margin-bottom: 48px;\n\n  background: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid var(--secondary-background);\n}\n\n.image-container {\n  position: relative;\n  width: 100%;\n  min-height: 7.5rem;\n  height: 100%;\n  border: 2px solid rgba($primary-color, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n\n  & .no-image {\n    width: 100%;\n    min-height: inherit;\n    background: rgba($primary-color, 0.04);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: $primary-color;\n    cursor: pointer;\n    gap: 0.75rem;\n\n    &:before {\n      content: '\\f03e';\n      font-family: 'Font Awesome 5 Free';\n      font-style: normal;\n      font-weight: 400;\n      font-size: 2.25rem;\n    }\n\n    &:after {\n      font-size: 1rem;\n      content: attr(translatedContent);\n    }\n  }\n//thumbnail css\n  .btn-thumbnail, .btn-gallery {\n    width: 2rem;\n    height: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba($primary-color, 0.16);\n    border-radius: 100%;\n    border: none;\n\n    i {\n      color: var(--primary-background);\n      font-weight: 900;\n      font-size: 16px;\n    }\n  }\n\n  .btn-thumbnail {\n    position: absolute;\n    top: 2.125rem;\n    right: 2.125rem;\n  }\n\n  .btn-gallery {\n    position: absolute;\n    top: 0.875rem;\n    right: 0.875rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1445:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/forums/all-threads-list/all-threads-list.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\ntable {\n  width: 100%;\n}\n\n.card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.table-container {\n  padding: 24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header {\n  padding-top: 44.5px;\n  padding-bottom: 42.5px;\n  border-color: transparent;\n  background-color: rgb(237, 239, 245);\n}\n\n.card.custom-table.gutter-b {\n  border: none;\n}\n\n.card-event h3 {\n  max-width: 400px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n\n@media only screen and (min-width: 992px) {\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted {\n    max-width: 300px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted {\n    max-width: 120px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  td.mat-cell.cdk-cell.cdk-column-category.mat-column-category.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-date.mat-column-date.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-authors.mat-column-authors.ng-star-inserted {\n    max-width: 50px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\ni.fa-search {\n  color: rgba(36, 57, 138, 0.24);\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\na.title-link {\n  text-decoration: none;\n  color: #24398A;\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/forums/all-threads-list/all-threads-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAhBA;EACE,WAAA;AAmBF;;AAfE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDLQ;ACuBZ;;AAdA;EACE,aAAA;EACA,kBAAA;EACA,6BAAA;AAiBF;;AAdA;EACE,mBAAA;EACA,sBAAA;EACA,yBAAA;EACA,oCAAA;AAiBF;;AAdA;EACE,YAAA;AAiBF;;AAbE;EACE,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAgBJ;;AAXA;EAEE;IACE,gBAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAaF;AACF;AAVA;EAGE;IACE,gBAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAUF;EAPA;;;IAGE,eAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EASF;AACF;AANA;EACE,8BAAA;AAQF;;AALA;;;;;;IAAA;AAQA;EACE,qBAAA;EACA,cDxFc;ECyFd,gBAAA;AAOF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import '/src/app/theme/styles/components/colors';\ntable{\n  width:100%;\n}\n\n.card-body {\n  & > p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 140%;\n    letter-spacing: -0.02em;\n    color: $paragraph;\n  }\n}\n\n.table-container{\n  padding:24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header{\n  padding-top: 44.5px;\n  padding-bottom: 42.5px;\n  border-color:transparent;\n  background-color: rgba(237, 239, 245, 1);\n}\n\n.card.custom-table.gutter-b{\n  border:none;\n}\n\n.card-event{\n  h3{\n    max-width:400px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    /* autoprefixer: ignore next */\n    -webkit-box-orient: vertical;\n  }\n}\n\n\n@media only screen and (min-width:992px){\n  //title cell\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted{\n    max-width: 300px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\n@media only screen and (min-width:992px) and (max-width: 1199px){\n\n\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted{\n    max-width: 120px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  td.mat-cell.cdk-cell.cdk-column-category.mat-column-category.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-date.mat-column-date.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-authors.mat-column-authors.ng-star-inserted{\n    max-width: 50px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\ni.fa-search{\n  color: rgba($primary-color, 0.24);\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\n\na.title-link{\n  text-decoration: none;\n  color:$primary-color;\n  font-weight: 500;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 16601:
/*!***********************************************************************************!*\
  !*** ./src/app/features/forums/edit-thread/edit-thread.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content {\n  background-color: var(--primary-background);\n  margin-bottom: 12px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\nh3 {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 140%;\n  /* identical to box height, or 34px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.02em;\n  /* Primary */\n  color: #24398A;\n}\n\n.thread-container #threadTab {\n  border: none;\n  height: 54px;\n  background-color: var(--secondary-background);\n  color: #231F20;\n  padding: 0px;\n}\n.thread-container #threadTab .nav-item {\n  width: 50%;\n}\n.thread-container #threadTab .nav-item button {\n  width: 100%;\n  height: 100%;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.thread-container #threadTab .nav-item button.active {\n  border: #FFFFFF 1px solid;\n  border-radius: 0px;\n  margin: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/forums/edit-thread/edit-thread.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,mBAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,gBAAA;AAkBJ;;AAbA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,uBAAA;EAEA,YAAA;EAEA,cDzBY;ACsChB;;AAPI;EACM,YAAA;EACA,YAAA;EACA,6CAAA;EACA,cD9BE;EC+BF,YAAA;AAUV;AARQ;EACI,UAAA;AAUZ;AARY;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cD7CJ;ACuDZ;AAPY;EACI,yBAAA;EACA,kBAAA;EACA,WAAA;AAShB","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.content{\n    background-color: var(--primary-background);\n    margin-bottom:12px;\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n    overflow: hidden;\n    // padding: 12px;\n}\n\n\nh3{\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 140%;\n    /* identical to box height, or 34px */\n\n    display: flex;\n    align-items: center;\n    text-align: center;\n    letter-spacing: -0.02em;\n\n    /* Primary */\n\n    color: $primary-color;\n}\n\n.thread-container{\n\n    //tabs styling\n    #threadTab{\n          border: none;\n          height: 54px;\n          background-color: var(--secondary-background);\n          color:$paragraph;\n          padding: 0px;\n\n        .nav-item{\n            width: 50%;\n\n            button{\n                width:100%;\n                height:100%;\n                font-weight: 600;\n                font-size: 16px;\n                line-height: 140%;\n                display: flex;\n                align-items: center;\n                letter-spacing: -0.02em;\n                color: $paragraph;\n\n            }\n            button.active{\n                border:$background-primary 1px solid;\n                border-radius: 0px;\n                margin: 0px;\n            }\n        }\n    } // end tabs styling\n\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 11182:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/forums/thread-comments-list/thread-comments-list.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\ntable {\n  width: 100%;\n}\n\n.card-body > p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.table-container {\n  padding: 24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header {\n  border-color: transparent;\n}\n\n.card.custom-table.gutter-b {\n  border: none;\n}\n\n.card-event h3 {\n  max-width: 400px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n\nspan.singleLineComment {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n\n.userImage {\n  height: 64px;\n  width: 64px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\nh3 {\n  font-weight: 700;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #24398A;\n}\n\np.date {\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 126%;\n  /* or 15px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n  margin-bottom: 0px;\n}\n\np.comment {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n\n.lightBlueBkg {\n  background-color: rgba(36, 57, 138, 0.24);\n}\n\n@media only screen and (min-width: 992px) {\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted {\n    max-width: 300px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted {\n    max-width: 120px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  td.mat-cell.cdk-cell.cdk-column-category.mat-column-category.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-date.mat-column-date.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-authors.mat-column-authors.ng-star-inserted {\n    max-width: 50px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\ni.fa-search {\n  color: rgba(36, 57, 138, 0.24);\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\na.title-link {\n  text-decoration: none;\n  color: #24398A;\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/forums/thread-comments-list/thread-comments-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAhBA;EACE,WAAA;AAmBF;;AAfE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,cDLQ;ACuBZ;;AAdA;EACE,aAAA;EACA,kBAAA;EACA,6BAAA;AAiBF;;AAdA;EAGE,yBAAA;AAeF;;AAXA;EACE,YAAA;AAcF;;AAVE;EACE,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAaJ;;AAVA;EACE,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAaF;;AAVA;EACE,YAAA;EACA,WAAA;EACA,kBAAA;EACA,cAAA;AAaF;;AAVA;EACE,gBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cDhEc;AC6EhB;;AAVA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,uBAAA;EAEA,cDzEU;EC0EV,kBAAA;AAWF;;AARA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cDpFU;AC+FZ;;AARA;EACE,yCAAA;AAWF;;AARA;EAEE;IACE,gBAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAUF;AACF;AAPA;EAGE;IACE,gBAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAOF;EAJA;;;IAGE,eAAA;IACA,uBAAA;IACA,gBAAA;IACA,mBAAA;EAMF;AACF;AAHA;EACE,8BAAA;AAKF;;AAFA;;;;;;IAAA;AAQA;EACE,qBAAA;EACA,cD5Ic;EC6Id,gBAAA;AAIF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import '/src/app/theme/styles/components/colors';\ntable{\n  width:100%;\n}\n\n.card-body {\n  & > p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 140%;\n    letter-spacing: -0.02em;\n    color: $paragraph;\n  }\n}\n\n.table-container{\n  padding:24px;\n  border-radius: 8px;\n  border: solid 1px transparent;\n}\n\n.card-header{\n  // padding-top: 44.5px;\n  // padding-bottom: 42.5px;\n  border-color:transparent;\n  // background-color: rgba(237, 239, 245, 1);\n}\n\n.card.custom-table.gutter-b{\n  border:none;\n}\n\n.card-event{\n  h3{\n    max-width:400px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    /* autoprefixer: ignore next */\n    -webkit-box-orient: vertical;\n  }\n}\nspan.singleLineComment{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n\n.userImage{\n  height: 64px;\n  width: 64px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\nh3{\n  font-weight: 700;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: $primary-color;\n}\n\np.date{\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 126%;\n  /* or 15px */\n  \n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.02em;\n  \n  color: $paragraph;\n  margin-bottom: 0px; \n}\n\np.comment{\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: $paragraph\n}\n\n.lightBlueBkg{\n  background-color: rgba($primary-color, 0.24);\n}\n\n@media only screen and (min-width:992px){\n  //title cell\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted{\n    max-width: 300px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\n@media only screen and (min-width:992px) and (max-width: 1199px){\n\n\n  td.mat-cell.cdk-cell.cdk-column-title.mat-column-title.ng-star-inserted{\n    max-width: 120px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  td.mat-cell.cdk-cell.cdk-column-category.mat-column-category.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-date.mat-column-date.ng-star-inserted,\n  td.mat-cell.cdk-cell.cdk-column-authors.mat-column-authors.ng-star-inserted{\n    max-width: 50px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\ni.fa-search{\n  color: rgba($primary-color, 0.24);\n}\n\n/*:host {\n    ::ng-deep .filters-inputs {\n      .mat-form-field-wrapper {\n        padding: 0;\n      }\n    }\n  }*/\n\na.title-link{\n  text-decoration: none;\n  color:$primary-color;\n  font-weight: 500;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 16970:
/*!*************************************************************************************!*\
  !*** ./src/app/features/forums/threads-list/threads-list.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content {\n  background-color: var(--primary-background);\n  margin-bottom: 34px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 24px;\n}\n\n.content p, .content h6, .content h4 {\n  margin-bottom: 0px;\n}\n.content .pointer {\n  cursor: pointer;\n}\n.content .header-class {\n  border-bottom: solid 1px #24398A;\n}\n.content .header-class h4 {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.02em;\n  /* Primary */\n  color: #24398A;\n}\n.content .thread-card {\n  border-bottom: solid 1px var(--secondary-background);\n}\n.content .thread-card img {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n}\n.content .thread-card button.btn-round.btn-white-fill {\n  padding: 8px !important;\n  height: 30px;\n  width: 30px;\n}\n.content .thread-card button.btn-round.btn-white-fill i {\n  font-style: normal;\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 140% !important;\n  /* identical to box height, or 17px */\n  display: flex;\n  align-items: center;\n  justify-self: center;\n}\n.content .thread-card h4 {\n  font-weight: 300;\n  font-size: 24px;\n  line-height: 140%;\n  /* identical to box height, or 34px */\n  color: #231F20;\n  display: -webkit-box;\n  align-items: center;\n  letter-spacing: -0.02em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n.content .thread-card p {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Title */\n  color: rgba(35, 31, 32, 0.5);\n}\n.content .thread-card p b {\n  margin-right: 5px;\n  color: #231F20;\n}\n.content .thread-card .reply-view-class h6 {\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 140%;\n  /* identical to box height, or 34px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Title */\n  color: #231F20;\n}\n.content .thread-card .reply-view-class p {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  /* Title */\n  color: #231F20;\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/forums/threads-list/threads-list.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAdA;EACI,2CAAA;EACA,mBAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;AAiBJ;;AAZI;EACI,kBAAA;AAeR;AAZI;EACI,eAAA;AAcR;AAXI;EACI,gCAAA;AAaR;AAXQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,uBAAA;EAEA,YAAA;EAEA,cAAA;AAUZ;AAJI;EACI,oDAAA;AAMR;AALQ;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAOZ;AAJQ;EACI,uBAAA;EACA,YAAA;EACA,WAAA;AAMZ;AALY;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,4BAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,oBAAA;AAMhB;AADQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EACA,cDtEA;ECuEA,oBAAA;EACA,mBAAA;EACA,uBAAA;EAEA,gBAAA;EACA,uBAAA;EACA,qBAAA;EACA,8BAAA;EACA,4BAAA;AAEZ;AACQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,UAAA;EACA,4BAAA;AADZ;AAEY;EACI,iBAAA;EACA,cDhGJ;ACgGZ;AAOY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,UAAA;EAEA,cDnHJ;AC2GZ;AAWY;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,UAAA;EAEA,cDlIJ;ACsHZ","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n\n.content{\n    background-color: var(--primary-background);\n    margin-bottom:34px;\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n    overflow: hidden;\n    padding: 24px;\n}\n\n.content{\n\n    p, h6, h4{\n        margin-bottom: 0px;\n    }\n\n    .pointer{\n        cursor: pointer;\n    }\n\n    .header-class{\n        border-bottom: solid 1px $primary-color;\n\n        h4{\n            font-weight: 300;\n            font-size: 16px;\n            line-height: 140%;\n            /* or 22px */\n\n            display: flex;\n            align-items: center;\n            text-align: center;\n            letter-spacing: -0.02em;\n\n            /* Primary */\n\n            color: #24398A;\n\n        }\n    }\n\n\n    .thread-card{\n        border-bottom: solid 1px var(--secondary-background);\n        img{\n            width: 64px;\n            height: 64px;\n            border-radius: 50%;\n        }\n\n        button.btn-round.btn-white-fill{\n            padding: 8px!important;\n            height: 30px;\n            width:30px;\n            i{\n                font-style: normal;\n                font-weight: 900;\n                font-size: 12px;\n                line-height: 140%!important;\n                /* identical to box height, or 17px */\n\n                display: flex;\n                align-items: center;\n                justify-self: center;\n\n            }\n        }\n\n        h4{\n            font-weight: 300;\n            font-size: 24px;\n            line-height: 140%;\n            /* identical to box height, or 34px */\n            color: $paragraph;\n            display: -webkit-box;\n            align-items: center;\n            letter-spacing: -0.02em;\n\n            overflow: hidden;\n            text-overflow: ellipsis;\n            -webkit-line-clamp: 1;\n            /* autoprefixer: ignore next */\n            -webkit-box-orient: vertical;\n        }\n\n        p{\n            font-weight: 700;\n            font-size: 16px;\n            line-height: 140%;\n            /* or 22px */\n\n            display: flex;\n            align-items: center;\n            letter-spacing: -0.02em;\n\n            /* Title */\n            color: rgba($paragraph, 0.5);\n            b{\n                margin-right: 5px;\n                color: $paragraph;\n\n            }\n\n        }\n\n        .reply-view-class{\n            h6{\n                font-weight: 400;\n                font-size: 24px;\n                line-height: 140%;\n                /* identical to box height, or 34px */\n\n                display: flex;\n                align-items: center;\n                letter-spacing: -0.02em;\n\n                /* Title */\n\n                color: $paragraph;\n            }\n\n            p{\n                font-weight: 300;\n                font-size: 16px;\n                line-height: 140%;\n                /* or 22px */\n\n                display: flex;\n                align-items: center;\n                letter-spacing: -0.02em;\n\n                /* Title */\n\n                color: $paragraph;\n\n            }\n        }\n\n    }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 51293:
/*!*********************************************************************************!*\
  !*** ./src/app/features/forums/view-topic/view-topic.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-background: #FFFFFF;\n  --secondary-background: #edf0fa;\n  --header-footer-background: #FFF ;\n}\n\n[data-theme=dark]:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n.positive-amount {\n  color: rgb(105, 201, 140) !important;\n}\n\n.negative-amount {\n  color: rgb(241, 56, 88) !important;\n}\n\n.content {\n  background-color: var(--primary-background);\n  margin-bottom: 12px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 12px;\n}\n\n.content-card {\n  background-color: var(--primary-background);\n  margin-bottom: 12px;\n  border: 1px solid rgba(36, 57, 138, 0.16);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 0px;\n}\n\n.wysiwyg-coverer {\n  min-width: 90%;\n}\n\n.wysiwyg-coverer img {\n  width: 100%;\n}\n\n.padding-card {\n  padding: 12px;\n}\n\n.border-right {\n  border-right: 1px solid var(--secondary-background);\n}\n\n.border-bottom {\n  border-bottom: 1px solid var(--secondary-background);\n}\n\n.photo-n-name {\n  min-width: 10%;\n}\n\n.content p {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 140%;\n  /* or 22px */\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  margin-bottom: 0px;\n}\n.content p b {\n  color: #000000;\n}\n.content p span {\n  opacity: 0.5;\n}\n.content p .profil-img {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n.content h3 {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 24px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #231F20;\n}\n.content .small-button {\n  width: 24px;\n  height: 24px;\n}\n.content .profil-img {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n\n.content-card img {\n  width: 100%;\n}\n.content-card p {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #000000;\n  margin-bottom: 0px;\n}\n.content-card p i {\n  color: #24398A;\n}\n.content-card h5 {\n  font-weight: 300;\n  font-size: 20px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #000000;\n}\n.content-card h6 {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 140%;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n  color: #000000;\n  margin-bottom: 0px;\n}\n.content-card .profil-img {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n.content-card .featured-img {\n  height: 256px;\n  overflow: hidden;\n  border-radius: 8px;\n}\n.content-card .featured-img img {\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n}\n.content-card .wysiwyg-coverer .angular-editor-textarea {\n  overflow: scroll;\n}\n.content-card .wysiwyg-coverer .send-coverer {\n  max-width: 100%;\n}\n.content-card .content-comment {\n  max-width: 100%;\n}\n\n.content-card .padding-card .content-comment img {\n  max-width: 100% !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .border-right {\n    border-color: transparent;\n  }\n  .content-card .profil-img {\n    width: 64px;\n    height: 64px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/theme/styles/components/_colors.scss","webpack://./src/app/features/forums/view-topic/view-topic.component.scss"],"names":[],"mappings":"AAcA;EACE,6BAAA;EACA,+BAAA;EACA,iCAAA;ACbF;;ADgBA;EACE,6BAAA;EACA,+BAAA;ACbF;;ADyCA;EACI,oCAAA;ACtCJ;;ADyCA;EACQ,kCAAA;ACtCR;;AAfA;EACI,2CAAA;EACA,mBAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;AAkBJ;;AAfA;EACI,2CAAA;EACA,mBAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;AAkBJ;;AAdA;EACI,cAAA;AAiBJ;;AAfA;EACI,WAAA;AAkBJ;;AAfA;EACI,aAAA;AAkBJ;;AAfA;EACI,mDAAA;AAkBJ;;AAfA;EACI,oDAAA;AAkBJ;;AAfA;EACI,cAAA;AAkBJ;;AAbI;EACI,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;AAeR;AAdQ;EACI,cAAA;AAgBZ;AAbQ;EACI,YAAA;AAeZ;AAZQ;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;AAcZ;AAVI;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cD/EI;AC2FZ;AATI;EACI,WAAA;EACA,YAAA;AAWR;AARI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;AAUR;;AAFI;EACI,WAAA;AAKR;AAOI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,kBAAA;AALR;AAMQ;EACI,cDhII;AC4HhB;AAOI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;AALR;AAQI;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,kBAAA;AANR;AAUI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;AARR;AAYI;EACI,aAAA;EACA,gBAAA;EACA,kBAAA;AAVR;AAWQ;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AATZ;AAeQ;EACI,gBAAA;AAbZ;AAgBQ;EACG,eAAA;AAdX;AAkBI;EACI,eAAA;AAhBR;;AAmBA;EACI,0BAAA;AAhBJ;;AAmBA;EACI;IACI,yBAAA;EAhBN;EAkBE;IACI,WAAA;IACA,YAAA;EAhBN;AACF","sourcesContent":["// theme colors\n$primary-color: #24398A;\n\n$secondary-color: #FFCC29;\n\n$title: #231F20;\n$paragraph: #231F20;\n$link: #0D4494;\n\n$background-primary: #FFFFFF !default;\n$background-secondary: #edf0fa !default;\n\n$header-footer-color: #FFF;\n\n:root {\n  --primary-background: #{$background-primary};\n  --secondary-background: #{$background-secondary};\n  --header-footer-background: #{$header-footer-color}\n}\n\n[data-theme='dark']:root {\n  --primary-background: #EDE9E8;\n  --secondary-background: #EDE9E8;\n}\n\n//label colors\n$active-color:#69C98C;\n$pending-color:#FCCC3D;\n$inactive-color:#858495;\n$draft-color:#2F9DF4;\n$archived-color:#E6536C;\n$inprogress-color:#236BB4;\n\n$bkg-active-color:rgba(105, 201, 140, 0.2);\n$bkg-pending-color:rgba(252, 204, 61, 0.2);\n$bkg-inactive-color:rgba(133, 132, 149, 0.2);\n$bkg-draft-color:rgba(47, 157, 244, 0.2);\n$bkg-archived-color:rgba(230, 83, 108, 0.2);\n$bkg-inprogress-color:rgba(73, 80, 250, 0.2);\n\n$like-color:#2CCEA7;\n$dislike-color: #EA4335;;\n\n\n//label buttons active/inactive/disabled\n\n$active-btn-color:#34A853;\n$inactive-btn-color:#848484;\n$disabled-btn-color:#E64335;\n\n.positive-amount{\n    color:rgba(105, 201, 140, 1)!important;\n}\n\n.negative-amount{\n        color:rgba(241, 56, 88, 1)!important;\n}\n\n","@import \"/src/app/theme/styles/components/colors\";\n\n.content{\n    background-color: var(--primary-background);\n    margin-bottom:12px;\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n    overflow: hidden;\n    padding: 12px;\n}\n\n.content-card{\n    background-color: var(--primary-background);\n    margin-bottom:12px;\n    border: 1px solid rgba(36, 57, 138, 0.16);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n    overflow: hidden;\n    padding: 0px;\n}\n\n\n.wysiwyg-coverer{\n    min-width: 90%;\n}\n.wysiwyg-coverer img {\n    width: 100%;\n}\n\n.padding-card{\n    padding: 12px;\n}\n\n.border-right{\n    border-right: 1px solid var(--secondary-background);\n}\n\n.border-bottom{\n    border-bottom: 1px solid var(--secondary-background);\n}\n\n.photo-n-name{\n    min-width: 10%;\n}\n\n\n.content{\n    p{\n        font-family: 'Roboto';\n        font-style: normal;\n        font-weight: 300;\n        font-size: 16px;\n        line-height: 140%;\n        /* or 22px */\n\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n        margin-bottom: 0px;\n        b{\n            color: #000000;\n        }\n\n        span{\n            opacity: 0.5;\n        }\n\n        .profil-img{\n            width: 64px;\n            height: 64px;\n            border-radius: 50%;\n            flex-shrink: 0;\n            object-fit: cover;\n        }\n    }\n\n    h3{\n        font-style: normal;\n        font-weight: 300;\n        font-size: 24px;\n        line-height: 140%;\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n        color: $paragraph;\n    }\n\n    .small-button{\n        width: 24px;\n        height: 24px;\n    }\n\n    .profil-img{\n        width: 64px;\n        height: 64px;\n        border-radius: 50%;\n        flex-shrink: 0;\n        object-fit: cover;\n\n    }\n}\n\n\n\n.content-card{\n    img{\n        width: 100%;\n    }\n    // i{\n    //     font-weight: 900;\n    //     font-size: 14px;\n    //     line-height: 140%;\n    //     display: flex;\n    //     align-items: center;\n    //     letter-spacing: -0.02em;\n    //     color: $primary-color;\n    //     margin-bottom: 0px;\n    // }\n    p{\n        font-weight: 300;\n        font-size: 14px;\n        line-height: 140%;\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n        color: #000000;\n        margin-bottom: 0px;\n        i{\n            color: $primary-color;\n        }\n    }\n    h5{\n        font-weight: 300;\n        font-size: 20px;\n        line-height: 140%;\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n        color: #000000;\n    }\n\n    h6{\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 140%;\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.02em;\n        color: #000000;\n        margin-bottom: 0px;\n\n    }\n\n    .profil-img{\n        width: 64px;\n        height: 64px;\n        border-radius: 50%;\n        flex-shrink: 0;\n        object-fit: cover;\n\n    }\n\n    .featured-img{\n        height: 256px;\n        overflow: hidden;\n        border-radius: 8px;\n        img{\n            width: 100%;\n            height: auto;\n            object-fit: cover;\n        }\n\n    }\n\n    .wysiwyg-coverer{\n        .angular-editor-textarea{\n            overflow: scroll;\n        }\n\n        .send-coverer{\n           max-width: 100%;\n        }\n    }\n\n    .content-comment{\n        max-width: 100%;\n    }\n}\n.content-card .padding-card .content-comment img{\n    max-width: 100%!important;\n}\n\n@media only screen and (max-width: 767px) {\n    .border-right{\n        border-color: transparent;\n    }\n    .content-card .profil-img{\n        width: 64px;\n        height: 64px;\n    }\n  }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 49713:
/*!*******************************************************************************!*\
  !*** ./src/app/features/forums/add-topic/add-topic.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container mb-5\">\n    <app-dashboard-header pageTitleOne=\"{{'THREAD.ADD_THREAD' | translate}}\"\n    [buttonBackRoute]=\"'../'\"\n    [buttonCallName]=\"'Save'\"\n    (buttonCall)=\"saveTopic()\"\n    ><!--de adaugat linkul catre adaga thread-->\n    </app-dashboard-header>\n\n    <div class=\"content\">\n        <div [formGroup]=\"addTopicForm\" id=\"addTopicForm\" (ngSubmit)=\"saveTopic()\" class=\"card custom-table gutter-b\">\n            <!--Title-->\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>{{'THREAD.TITLE' | translate}}</mat-label>\n                    <input formControlName=\"title\" matInput placeholder=\"{{'THREAD.TITLE' | translate}}\" (change)=\"createSlug(addTopicForm.value.title)\">\n                    <mat-icon *ngIf=\"addTopicForm.get('title').value\"\n                              (click)=\"addTopicForm.get('title').setValue('')\"\n                              role=\"button\" matSuffix>clear</mat-icon>\n                    <mat-error *ngIf=\"addTopicForm.get('title').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                </mat-form-field>\n            \n            <!--Status-->\n            <!-- <mat-form-field class=\"w-100\" appearance=\"standard\">\n                <mat-label>{{'FIELD.STATUS' | translate}}</mat-label>\n                <mat-select formControlName=\"status\" id=\"status\" value=\"Draft\">\n                    <mat-option value=\"active\">Active</mat-option>\n                    <mat-option value=\"pending_review\">Pending review</mat-option>\n                    <mat-option value=\"archived\">Archived</mat-option>\n                </mat-select>\n            </mat-form-field> -->\n\n            <!--Featured Image-->\n            <h3>{{\"FIELD.FEATURED_IMAGE\" | translate}}</h3>\n\n            <div class=\"image-container mb-5\">\n                <input type=\"file\"\n                       hidden\n                       accept=\"image/*\"\n                       #thumbnail\n                       id=\"thumbnailInput\"\n                       (change)=\"onThumbnailChange($event)\">\n                <div *ngIf=\"!thumbnail.value && !thumbnailUrl?.filePath\" class=\"no-image\"\n                     attr.translatedContent=\"{{ 'GENERAL.INSERT_IMAGE' | translate}}\"\n                     (click)=\"thumbnail.click()\"></div>\n\n                <img *ngIf=\"thumbnail.value || thumbnailUrl?.filePath\" class=\"img-fluid w-100\"\n                     [src]=\"thumbnailUrl.filePath\" alt=\"thumbnail\">\n                <button *ngIf=\"thumbnail.value || thumbnailUrl?.filePath\"\n                        (click)=\"removeThumbnail(); thumbnail.value=''\"\n                        type=\"button\"\n                        id=\"btnRemoveFeaturedImage\"\n                        class=\"btn-thumbnail\">\n                    <i class=\"fas fa-times\"></i>\n                </button>\n            </div>\n\n            <!--Description-->\n            <h3>{{\"USER.DESCRIPTION\" | translate}}</h3>\n                <angular-editor\n                formControlName=\"description\"\n                name=\"description\"\n                id=\"postThread\"\n                [config]=\"editorConfig\">\n                </angular-editor>\n                <mat-error *ngIf=\"addTopicForm.get('description').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n            <h3>Altele</h3>\n\n            <!--Slug-->\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>{{\"THREAD.SLUG\" | translate}}</mat-label>\n                    <input formControlName=\"slug\" matInput placeholder=\"Permalink\">\n                    <mat-icon *ngIf=\"addTopicForm.get('slug').value\"\n                                (click)=\"addTopicForm.get('slug').setValue('')\"\n                                role=\"button\" matSuffix>clear</mat-icon>\n                    <mat-error *ngIf=\"addTopicForm.get('slug').hasError('required')\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                </mat-form-field>\n                \n            <!--Tags-->\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>{{'FIELD.TAGS' | translate}}</mat-label>\n                    <mat-chip-list #tagList aria-label=\"Tags\">\n                        <mat-chip *ngFor=\"let tag of addedTags\" (removed)=\"remove(tag)\">\n                        {{tag}}\n                        <button matChipRemove>\n                            <mat-icon>close</mat-icon>\n                        </button>\n                        </mat-chip>\n                        <input\n                            id=\"tagList\"\n                            placeholder=\"Add new...\"\n                            [matChipInputFor]=\"tagList\"\n                            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                            [matChipInputAddOnBlur]=\"addOnBlur\"\n                            (matChipInputTokenEnd)=\"addTag($event)\">\n                    </mat-chip-list>\n                </mat-form-field>\n\n\n            </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 5779:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/forums/all-threads-list/all-threads-list.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container mb-5\">\n    <app-dashboard-header pageTitleOne=\"Listă thread-uri\"\n                          [buttonBackRoute]=\"'../../dashboard'\">\n    </app-dashboard-header>\n    <div class=\"custom-table gutter-b\">\n\n        <!----Table---------------------------------------------------------------------------->\n        <div *ngIf=\"dataLoaded\">\n            <div class=\"row filterRow\">\n                <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                    <input matInput type=\"text\" [formControl]=\"searchFilter\" (keyup.enter)=\"filterData()\" placeholder=\"Căutare\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"row tableContent\">\n\n                <table class=\"editorals-table-class\" mat-table matSort appMatTableResponsive [dataSource]=\"dataList\" (matSortChange) = applyFilter($event)>\n\n                    <!--id-->\n                    <ng-container matColumnDef=\"id\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> #</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\" attr.data-column-name=\"#\"> {{ (i + 1) + pageSize * (page)}} </td>\n                    </ng-container>\n\n                    <!--Title-->\n                    <ng-container matColumnDef=\"title\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'FIELD.TITLE'| translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.TITLE'| translate}}\"> {{element.title}} </td>\n                    </ng-container>\n\n                    <!--Authors-->\n                    <ng-container matColumnDef=\"authors\">\n                        <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.AUTHOR'|translate}}</th>\n                        <td mat-cell  *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.AUTHOR'|translate}}\"> {{element.userName}}</td>\n                    </ng-container>\n\n                    <!--Category-->\n                    <ng-container matColumnDef=\"category\">\n                        <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.CATEGORY'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.CATEGORY'|translate}}\">\n                            <span *ngIf=\"element.category === 'fitness'\">Fitness</span>\n                            <span *ngIf=\"element.category === 'nutrition'\">Nutriție</span>\n                            <span *ngIf=\"element.category === 'medical'\">Medical</span>\n                        </td>\n                    </ng-container>\n\n\n                    <!--Create data-->\n                    <ng-container matColumnDef=\"date\">\n                        <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.CREATION_DATE'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.CREATION_DATE'|translate}}\">{{element.date | date:'dd/MM/yyyy'}}</td>\n                    </ng-container>\n\n\n                    <!--comments-->\n                    <ng-container matColumnDef=\"comments\">\n                        <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'THREAD.COMMENTS'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'THREAD.COMMENTS'|translate}}\"> \n                            <span class=\"justify-content-end d-flex me-5\">{{element.replies}}</span>\n                        </td>\n                    </ng-container>\n\n                    <!--Status column-->\n                    <ng-container matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n                        <td attr.data-column-name=\"Status\" mat-cell *matCellDef=\"let element\">\n                                    <span class=\"custom-label\"\n                                        [ngClass]=\"{\n                                    'label-active' : element.status === 'active',\n                                    'label-pending' : element.status === 'pending_review',\n                                    'label-archived' : element.status === 'archived'\n\n                                }\">\n                                        <span [ngSwitch]=\"element.status\">\n                                        <span *ngSwitchCase=\"'active'\">Activ</span>\n                                        <span *ngSwitchCase=\"'pending_review'\">Pending</span>\n                                        <span *ngSwitchCase=\"'archived'\">Arhivat</span>\n\n                                        </span>\n                                    </span>\n                        </td>\n                    </ng-container>\n\n                    <!--actions-->\n                    <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> {{'FIELD.ACTIONS'|translate}}</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index\" data-column-name=\"Acțiuni\">\n                            <div class=\" d-flex actions-container py-2\" >\n\n                                <!--Edit button-->\n                                <button class=\"btn-round btn-no-outline\" \n                                [routerLink]=\"'../../forum/threads/edit/'+element.id\" \n                                matTooltip=\"Editează\" \n                                id=\"editEditorial_{{i}}\">\n                                    <i class=\"fa fa-pen\"></i>\n                                </button>\n\n                                <!--Change status button-->\n                                <button class=\"btn-round btn-no-outline\"\n                                matTooltip=\"Schimbă status\"\n                                (click)=\"openModal(changeStatusModal, element.status)\">\n                                    <i class=\"fas fa-toggle-on\"></i>\n\n                                </button>\n\n                                <!--Change status Modal-->\n                                <ng-template #changeStatusModal let-c=\"close\" let-d=\"dismiss\">\n                                    <div class=\"modal-card card\">\n                                        <div class=\"card-header border-0\">\n                                            <h3 class=\"m-0\">\n                                                {{\"THREAD.CHANGE_STATUS\" | translate}}\n                                            </h3>\n                                        </div>\n\n                                        <div class=\"card-body\">\n\n                                            <div class=\"card-event card\">\n                                                <div class=\"card-body d-flex justify-content-center align-items-start flex-column\">\n                                                    <h3>#{{ (i + 1) + pageSize * (page) }} {{element.title}}</h3>\n                                                    <!--                                        <p class=\"m-0\">{{userData?.firstName+' '+userData?.lastName}}</p>-->\n                                                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                                        <mat-label>{{\"THREAD.CHANGE_STATUS\" | translate}}</mat-label>\n                                                        <mat-select [(ngModel)]=\"statusInput\">\n                                                            <mat-option value=\"active\">Active</mat-option>\n                                                            <mat-option value=\"pending_review\">Pending review</mat-option>\n                                                            <mat-option value=\"archived\">Archived</mat-option>\n                                                        </mat-select>\n                                                    </mat-form-field>\n                                                </div>\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"card-footer border-0\">\n                                            <div class=\"row\">\n                                                <div class=\"col-12 col-sm-6\">\n                                                    <button class=\"btn-auto btn-color-outline w-100\"\n                                                            (click)=\"closeModal()\">\n                                                        <i class=\"fas fa-times\"></i>\n                                                        {{ 'BTN.CANCEL' | translate}}\n                                                    </button>\n                                                </div>\n\n                                                <div class=\"col-12 col-sm-6\">\n                                                    <button class=\"btn-auto btn-color-fill w-100\"\n                                                            (click)=\"changeStatus(element.id, statusInput )\">\n                                                        <i class=\"fas fa-check\"></i>\n                                                        {{ 'BTN.CONFIRM' | translate}}\n                                                    </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ng-template>\n\n                            </div>\n                    </ng-container>\n\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n\n\n                <!--Pagination-->\n                <mat-paginator\n                        [pageSizeOptions]=\"pageItems\"\n                        [length]=\"totalElements\"\n                        [pageSize]=\"pageSize\"\n                        (page)=\"pageChanged($event)\"\n                >\n                </mat-paginator>\n\n            </div>\n            <!-- Table container -->\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 49849:
/*!***********************************************************************************!*\
  !*** ./src/app/features/forums/edit-thread/edit-thread.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"containter-fluid\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"{{'THREAD.EDIT_THREAD' | translate}}\"\n        [buttonBackRoute]=\"'../../'\"\n        [buttonCallName]=\"'Save'\"\n        (buttonCall)=\"saveThread()\"\n        ><!--de adaugat linkul catre adaga thread-->\n        </app-dashboard-header>\n    </div>\n\n        <!-- Tabs -->\n    <div class=\"container\">\n        <div  class=\"content thread-container\">\n            <ul class=\"nav nav-tabs\" id=\"threadTab\" role=\"tablist\" >\n                <!-- General info -->\n                <li class=\"nav-item\" role=\"presentation\">\n                <button class=\"nav-link active\" id=\"general-info-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#generalInfo\" type=\"button\" role=\"tab\" aria-controls=\"generalInfo\" aria-selected=\"false\">{{'THREAD.GENERAL_INFO' | translate}}</button>\n                </li>\n\n                <!-- Comments -->\n                <li class=\"nav-item\" role=\"presentation\">\n                    <button class=\"nav-link\" id=\"thread-comments-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#threadComments\" type=\"button\" role=\"tab\" aria-controls=\"threadComments\" aria-selected=\"false\">{{'THREAD.THREAD_COMMENTS' | translate}}</button>\n                </li>\n            </ul>\n\n            <!-- Content of tabs -->\n            <div class=\"tab-content\" id=\"myTabContent\">\n                <!-- General info -->\n                <div class=\"tab-pane fade show active p-4\" id=\"generalInfo\" role=\"tabpanel\" aria-labelledby=\"general-info-tab\">\n                <h3>{{'THREAD.GENERAL_INFO' | translate}}</h3>\n                <!--thread info-->\n                    <div [formGroup]=\"editThreadForm\">\n                        <div class=\"row\">\n                            <!-- Title Column-->\n                            <mat-form-field appearance=\"legacy\" class=\"col-1 col-md-3\">\n                                <mat-label>{{'FIELD.TITLE' | translate}}</mat-label>\n                                <input matInput formControlName=\"title\" placeholder=\"{{'FIELD.TITLE' | translate}}\">\n                                <i class=\"fas fa-times clear-form\" type=\"button\" *ngIf=\"editThreadForm.get('title').value\"\n                                    (click)=\"editThreadForm.get('title').patchValue('')\" matSuffix></i>\n                                <mat-error *ngIf=\"editThreadForm.get('title').errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            </mat-form-field>\n\n                            <!-- Slug Column-->\n                            <mat-form-field appearance=\"legacy\" class=\"col-1 col-md-3\">\n                                <mat-label>{{'FIELD.SLUG' | translate}}</mat-label>\n                                <input matInput formControlName=\"slug\" placeholder=\"{{'FIELD.SLUG' | translate}}\">\n                                <i class=\"fas fa-times clear-form\" type=\"button\" *ngIf=\"editThreadForm.get('title').value\"\n                                    (click)=\"editThreadForm.get('SLUG').patchValue('')\" matSuffix></i>\n                                <mat-error *ngIf=\"editThreadForm.get('slug').errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            </mat-form-field>\n\n\n                            <!--status-->\n                            <mat-form-field appearance=\"legacy\" class=\"col-1 col-md-3\">\n                                <mat-label>{{'FIELD.STATUS' | translate}}</mat-label>\n                                <mat-select formControlName=\"status\" id=\"status\" value=\"pending_review\" >\n                                  <mat-option value=\"active\" >{{'STATUS.ACTIVE' | translate}}</mat-option>\n                                  <mat-option value=\"pending_review\">{{'STATUS.PENDING' | translate}}</mat-option>\n                                  <mat-option value=\"archived\">{{'STATUS.ARCHIVED' | translate}}</mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"editThreadForm.get('status').errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                              </mat-form-field>\n\n                            <!--status-->\n                            <mat-form-field appearance=\"legacy\" class=\"col-1 col-md-3\">\n                                <mat-label>Categorie</mat-label>\n                                <mat-select formControlName=\"category\" id=\"category\" >\n                                    <mat-option value=\"medical\" >Medical</mat-option>\n                                    <mat-option value=\"fitness\">Fitness</mat-option>\n                                    <mat-option value=\"nutrition\">Nutrition</mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"editThreadForm.get('status').errors?.required\">{{'ERROR.REQUIRED'|translate}}</mat-error>\n                            </mat-form-field>\n                        </div>\n                        <!--Tags-->\n                        <div class=\"row\">\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>{{'FIELD.TAGS' | translate}}</mat-label>\n                                <mat-chip-list #tagList aria-label=\"Tags\">\n                                    <mat-chip *ngFor=\"let tag of addedTags\" (removed)=\"remove(tag)\">\n                                    {{tag}}\n                                    <button matChipRemove>\n                                        <mat-icon>close</mat-icon>\n                                    </button>\n                                    </mat-chip>\n                                    <input\n                                        id=\"tagList\"\n                                        placeholder=\"Add new...\"\n                                        [matChipInputFor]=\"tagList\"\n                                        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                        [matChipInputAddOnBlur]=\"addOnBlur\"\n                                        (matChipInputTokenEnd)=\"addTag($event)\">\n                                </mat-chip-list>\n                            </mat-form-field>\n                        </div>\n                        <!--description-->\n                        <div>\n                            <h3>Descriere</h3>\n                            <angular-editor\n                            formControlName=\"description\"\n                            name=\"description\"\n                            [config]=\"editorConfig\">\n                            </angular-editor>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Comments -->\n                <div class=\"tab-pane fade p-4\" id=\"threadComments\" role=\"tabpanel\" aria-labelledby=\"thread-comments-tab\">\n                    <app-thread-comments-list [threadId]=\"idThread\"></app-thread-comments-list>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n</div>\n";

/***/ }),

/***/ 79069:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/forums/thread-comments-list/thread-comments-list.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"custom-table gutter-b\">\n\n    <div *ngIf=\"dataLoaded\">\n        <!-- <div class=\"row filterRow\">\n            <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                <input matInput type=\"text\" [formControl]=\"searchFilter\" (keyup)=\"filterData()\" placeholder=\"Căutare\">\n            </mat-form-field>\n        </div> -->\n        <div *ngIf=\"dataList.length === 0\">\n          {{'THREAD.NO_COMMENTS' | translate}}\n        </div>\n\n        <div *ngIf=\"dataList.length !== 0\" class=\"row\">\n\n            <table class=\"editorals-table-class\" mat-table matSort appMatTableResponsive [dataSource]=\"dataList\" (matSortChange) = applyFilter($event)>\n                <!--id-->\n                <ng-container matColumnDef=\"id\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> #</th>\n                    <td data-column-name=\"#\" mat-cell\n                    *matCellDef=\"let element; let i = index;\"> {{ (i + 1) + pageSize * (page)}} </td>                \n                </ng-container>\n\n                <!--Title-->\n                <ng-container matColumnDef=\"title\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> {{'FIELD.TITLE'| translate}}</th>\n                    <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.TITLE'| translate}}\"> {{element.title}} </td>\n                </ng-container>\n\n                <!--Authors-->\n                <ng-container matColumnDef=\"userName\">\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.AUTHOR'|translate}}</th>\n                    <td mat-cell  *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.AUTHOR'|translate}}\"> {{element.userName}}</td>\n                </ng-container>\n\n                \n                <!--Create data-->\n                <ng-container matColumnDef=\"date\">\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'FIELD.CREATION_DATE'|translate}}</th>\n                    <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'FIELD.CREATION_DATE'|translate}}\">{{element.date | date:'dd/MM/yyyy'}}</td>\n                </ng-container>\n\n\n                <!--comments-->\n                <ng-container matColumnDef=\"content\">\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'THREAD.COMMENT' | translate}}</th>\n                    <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'THREAD.COMMENT' | translate}}\"> \n                        <span class=\"singleLineComment\" [innerHtml]=\"element.content\"></span>\n                    </td>\n                </ng-container>\n\n                <!--disabled-->\n                <ng-container matColumnDef=\"disable\">\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef> {{'THREAD.DISABLED_COMMENT' | translate}}</th>\n                    <td mat-cell *matCellDef=\"let element\" attr.data-column-name=\"{{'THREAD.DISABLED_COMMENT' | translate}}\"> \n                        <span class=\"custom-label\"\n                        [ngClass]=\"{\n                  'label-active' : element.disable === false,\n                  'label-archived' : element.disable === true\n                  }\">\n                      <span [ngSwitch]=\"element.disable\">\n                         <span *ngSwitchCase=\"false\">Activ</span>\n                         <span *ngSwitchCase=\"true\">Dezactivat</span>\n                     </span>\n                  </span>\n                    </td>\n                </ng-container>\n\n\n                <!--actions-->\n                <ng-container matColumnDef=\"actions\">\n                    <th mat-header-cell *matHeaderCellDef class=\"actions-class\"> {{'FIELD.ACTIONS'|translate}}</th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\" data-column-name=\"Acțiuni\">\n                        <div class=\" d-flex actions-container py-2\" >\n\n                            <!--View more -->\n                            <button class=\"btn-round btn-no-outline\"\n                            matTooltip=\"See more\"\n                            (click)=\"openModal(viewCommentModal, element.content)\">\n                            <i class=\"fas fa-chevron-right\"></i>\n                        </button>\n\n                            <!--comment details Modal-->\n                            <ng-template #viewCommentModal let-c=\"close\" let-d=\"dismiss\">\n                                <div class=\"modal-card card\">\n                                    <div class=\"card-header d-flex justify-content-between align-items-center\">\n                                        <h3 class=\"m-0\">{{'THREAD.VIEW_COMMENT'|translate}}</h3>\n                                        <i class=\"fas fa-times\" (click)=\"closeModal()\" ></i>\n                                    </div>\n\n                                    <div class=\"card-body\">\n                                        <div class=\"card-event card\">\n                                                <div class=\"lightBlueBkg d-flex justify-content-start align-items-center gap-2 p-2\">\n                                                    <img class=\"userImage\" src=\"{{element.userImagePath}}\">\n                                                    <div>\n                                                        <h4>{{element.userName}}</h4>\n                                                        <p class=\"date\">{{element.date | date: 'dd MMM y, HH:mm'}}</p>\n                                                    </div>\n                                                    \n                                                </div>\n                                                <p class=\"comment p-2\" [innerHTML]=\"element.content\"></p>\n                                                \n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"card-footer border-0\">\n                                        <div class=\"row p-2\">\n                                            <div class=\"col-12 col-sm-6\">\n                                                <button class=\"btn-auto btn-color-outline w-100\"\n                                                        (click)=\"closeModal()\">\n                                                    <i class=\"fas fa-times\"></i>\n                                                    {{ 'BTN.CANCEL' | translate}}\n                                                </button>\n                                            </div>\n\n                                            <div class=\"col-12 col-sm-6\" *ngIf=\"element.disable===false\">\n                                                <button class=\"btn-auto btn-color-fill w-100\"\n                                                        (click)=\"disableComment(element.id, true)\">\n                                                        <i class=\"fas fa-ban\"></i>\n                                                        {{ 'THREAD.DISABLE_COMMENT' | translate}}\n                                                </button>\n                                            </div>\n\n                                            <div class=\"col-12 col-sm-6\" *ngIf=\"element.disable===true\">\n                                                <button class=\"btn-auto btn-color-fill w-100\"\n                                                        (click)=\"disableComment(element.id, false)\">\n                                                        <i class=\"fas fa-eye\"></i>\n                                                        {{'THREAD.ENABLE_COMMENT' | translate}}\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                        </div>\n                </ng-container>\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n\n\n            <!--Pagination-->\n            <mat-paginator\n                    [pageSizeOptions]=\"pageItems\"\n                    [length]=\"totalElements\"\n                    [pageSize]=\"pageSize\"\n                    (page)=\"pageChanged($event)\"\n            >\n            </mat-paginator>\n\n        </div>\n        <!-- Table container -->\n    </div>\n\n</div>";

/***/ }),

/***/ 72790:
/*!*************************************************************************************!*\
  !*** ./src/app/features/forums/threads-list/threads-list.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"containter-fluid\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"{{forumCategory | titlecase}} Forum\"\n                              [buttonBackRoute]=\"'../../'\"\n                              [buttonAddRoute]=\"'add'\"\n                          ><!--de adaugat linkul catre adaga thread-->\n        </app-dashboard-header>\n    </div>\n    <div class=\"container content\">\n\n\n        <!--Search bar-->\n\n        <!--Card list-->\n        <div>\n\n           <!------------------------------------------------------------------------------------->\n\n           <div *ngIf=\"dataLoaded\">\n                <div>\n                    <mat-form-field appearance=\"legacy\" class=\"w-100\">\n                        <input matInput type=\"text\" [formControl]=\"searchFilter\" (keydown.enter)=\"filterData()\" placeholder=\"Căutare\">\n                    </mat-form-field>\n                </div>\n\n                <!-- <div class=\"header-class my-3 pb-3 d-flex justify-content-between align-items-center\">\n                    <h4>Topic</h4>\n                    <div class=\"d-flex justify-content-end align-items-center gap-2\">\n                        <h4>Replies</h4>\n                        <h4>View</h4>\n                    </div>\n                </div> -->\n                \n\n                <div *ngFor=\"let forum of dataList; let i = index\">\n\n                    <div class=\"thread-card py-3 d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap\">\n                        <!--image / buttons / title / author / time-->\n                        <div class =\"d-flex align-items-center justify-content-start gap-3\">\n                            <!-- <img src=\"{{forum?.featuredImage ? forum?.featuredImage?.filePath : '../../../../../../assets/images/login/client_image.png'}}\"> -->\n                            \n                            <div class=\"d-flex justify-content-center flex-column gap-2\">\n                                <div class=\"d-flex justify-content-start align-items-center gap-2 flex-wrap flex-sm-nowrap\">\n<!--                                    <div class=\"forum-buttons d-flex justify-content-start align-items-center gap-1\">-->\n<!--                                        <button class=\"btn-round btn-white-fill\"><i class=\"fas fa-thumbtack\"></i></button>-->\n<!--                                        <button class=\"btn-round btn-white-fill\"><i class=\"fas fa-star\"></i></button>-->\n<!--                                    </div>-->\n                                        <h4 class=\"pointer\" routerLink=\"view/{{forum.id}}\">#{{ (i + 1) + pageSize * page}} {{forum?.title}}</h4>\n                                </div>\n                                <p><b>{{forum?.userName}}</b> {{forum?.date | date: 'dd/MMM/y'}}</p>\n                            </div>\n                        </div>\n                        <!--replies / views -->\n                        <div class=\"reply-view-class d-flex justify-content-end align-items-center gap-3\">\n                            <div class=\"d-flex flex-column justify-content-center align-items-center\">\n                                <h6>{{forum?.replies}}</h6>\n                                <p>Replies</p>\n                            </div>\n                            <div class=\"d-flex flex-column justify-content-center align-items-center\">\n                                <h6>{{forum?.views}}</h6>\n                                <p>Views</p>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!--Pagination-->\n                <mat-paginator\n                        [pageSizeOptions]=\"pageItems\"\n                        [length]=\"totalElements\"\n                        [pageSize]=\"pageSize\"\n                        (page)=\"pageChanged($event)\"\n                >\n                </mat-paginator>\n            </div>\n\n\n\n        </div>\n\n        <!--Card list-->\n\n    </div>\n</div>\n";

/***/ }),

/***/ 94864:
/*!*********************************************************************************!*\
  !*** ./src/app/features/forums/view-topic/view-topic.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"containter-fluid\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"{{threadData?.category | titlecase}} Forum\"\n                              [buttonBackRoute]=\"'../../'\"\n                              (buttonExtraCall)=\"goTo(comm)\"\n                              [buttonExtraName]=\"'Reply to this thread'\">\n                              <!--de adaugat linkul catre adaga thread-->\n        </app-dashboard-header>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"content d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap\">\n            <div class=\"d-flex justify-content-start align-items-center gap-2\">\n                <img class=\"profil-img\" src=\"{{ threadData?.featuredImage !== null ? threadData?.featuredImage?.filePath : '../../../../../../assets/images/others/no-photo.png'}}\"/>\n                <div>\n                <div class=\"d-flex justify-content-start align-items-baseline gap-2\">\n                    <!-- <button class=\"btn-round btn-white-fill small-button\"><i class=\"fas fa-thumbtack\"></i></button>\n                    <button class=\"btn-round btn-white-fill small-button\"><i class=\"fas fa-star\"></i></button> -->\n                    <h3>{{threadData?.title}}</h3>\n                </div>\n                <div class=\"d-flex justify-content-start align-items-center gap-2\">\n                    <p><b>{{threadData?.userName}}</b></p>\n                    <p><span>{{threadData?.lastDateUpdate | date: 'dd MMM, yyyy'}}</span></p>\n                    <p><span>{{threadData?.replies}} replies</span></p>\n                </div>\n            </div>\n        </div>\n        <div class=\"d-flex justify-content-end align-items-center gap-3\">\n            <p class=\"d-flex flex-column justify-content-center align-items-center\"><b>{{threadData?.replies}}</b>Replies </p>\n            <p class=\"d-flex flex-column justify-content-center align-items-center\" ><b>{{threadData?.views}}</b>Views</p>\n            <!-- <button class=\"btn-round btn-color-outline\"><i class=\"far fa-star\"></i></button>\n            <button class=\"btn-round btn-color-outline\"><i class=\"fas fa-share-alt\"></i></button> -->\n        </div>\n    </div>\n\n    <div class=\"content-card\">\n        <!--Pagination-->\n        <mat-paginator\n        [pageSizeOptions]=\"pageItems\"\n        [length]=\"totalElements\"\n        [pageSize]=\"pageSize\"\n        (page)=\"pageChanged($event)\"\n        >\n        </mat-paginator>\n    </div>\n\n    <div class=\"content-card d-flex flex-wrap flex-md-nowrap\">\n        <div class=\"d-flex flex-row flex-md-column align-items-center justify-content-start gap-2 padding-card border-right photo-n-name\">\n            <img class=\"profil-img\" src=\"{{ threadData?.userImagePath ? threadData?.userImagePath : '../../../../../../assets/images/others/no-image.png'}}\"/>\n            <p><b>{{threadData?.userName}}</b></p>\n            <!-- <div class=\"d-flex align-items-center justify-content-center gap-4\">\n                <p><i class=\"fas fa-plus-circle me-2\"></i> 8</p>\n                <p><i class=\"fas fa-comment-dots me-2\"></i> 232</p>\n            </div> -->\n        </div> \n        <div class=\"w-100\">\n            <div class=\"d-flex justify-content-between align-items-center padding-card border-bottom\">\n                <h6>Posted on {{threadData?.date | date: 'dd MMM, yyyy'}} <span *ngIf=\"threadData?.lastDateUpdate\">(edited)</span></h6>\n                <!-- <i class=\"fas fa-share-alt\"></i> -->\n            </div>\n            <div class=\"padding-card\">\n                <div *ngIf=\"threadData?.featuredImage\" class=\"featured-img mb-2\">\n                    <img src=\"{{threadData?.featuredImage?.filePath}}\"/>\n                </div>\n               \n                <div [innerHTML]=\"threadData?.description\"></div>\n            </div>\n        </div>\n    </div>\n\n    <!--wysiwyg Add comment-->\n    <div class=\"content-card d-flex flex-wrap flex-md-nowrap wysiwyg-class\">\n        <div class=\"d-flex flex-row flex-md-column align-items-center justify-content-center gap-2 padding-card border-right photo-n-name\">\n            <img class=\"profil-img\" src='{{currentUserAvatar}}'/>\n            <p><b>{{currentUserName}}</b></p>\n            <!-- <div class=\"d-flex align-items-center justify-content-center gap-4\">\n                <p><i class=\"fas fa-plus-circle me-2\"></i> 8</p>\n                <p><i class=\"fas fa-comment-dots me-2\"></i> 232</p>\n            </div> -->\n        </div> \n        <div #comm class=\"wysiwyg-container\">\n            <!-- <div class=\"d-flex justify-content-between align-items-center padding-card border-bottom\">\n                <h6>Posted on 13 of September, 2022 (edited)</h6>\n                <i class=\"fas fa-share-alt\"></i>\n            </div>\n            <div class=\"padding-card\">content</div> -->\n            <angular-editor\n                [formControl]=\"newCommentForm\"\n                name=\"content\"\n                id=\"postContent\"\n                [config]=\"editorConfig\">\n            </angular-editor>\n            <div class=\"padding-card d-flex justify-content-start justify-content-lg-end align-items-center send-container\">\n                <!-- <p>Cuvinte: {{nrWords}}</p> -->\n                <button type=\"button\" (click)=\"addComment()\" matTooltip=\"Send comment\" class=\"btn-long btn-color-fill\"><i class=\"fas fa-paper-plane\"></i> Send</button>\n            </div> \n\n        </div>\n    </div>\n\n    <!--Comments List-->\n\n    <div *ngFor=\"let comment of listThreadComments\">\n        <div class=\"content-card d-flex flex-wrap flex-md-nowrap\">\n            <div class=\"d-flex flex-row flex-md-column align-items-center justify-content-start gap-2 padding-card border-right photo-n-name\">\n                <img class=\"profil-img\" src=\"{{comment?.userImagePath ? comment?.userImagePath : '../../../../assets/images/login/client_image.png'}}\"/>\n                <p><b>{{comment?.userName}}</b></p>\n                <!-- <div class=\"d-flex align-items-center justify-content-center gap-4\">\n                    <p><i (click)=\"likeComment(comment.id)\" class=\"fas fa-plus-circle me-2\"></i> {{comment?.likes === null ? 0 : comment?.likes}}</p>\n                    <p><i class=\"fas fa-comment-dots me-2\"></i> 232</p>\n                </div> -->\n            </div> \n            <div class=\"w-100\">\n                <div class=\"d-flex justify-content-between align-items-center padding-card border-bottom\">\n                    <h6>Posted on {{comment?.date | date: 'dd MMM, yyyy'}} <span *ngIf=\"comment?.edited\">(edited)</span></h6>\n                    <!-- <i class=\"fas fa-share-alt\"></i> -->\n                </div>\n                <div class=\"padding-card\">\n                    <!-- <div class=\"featured-img mb-2\">\n                        <img  src=\"{{comment?.featuredImage ? comment?.featuredImage?.filePath : '../../../../assets/images/login/client_image.png'}}\"/>\n                    </div> -->\n                   \n                    <div [innerHTML]=\"comment?.content\" class=\"content-comment\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"content-card\">\n        <!--Pagination-->\n        <mat-paginator\n\n        [pageSizeOptions]=\"pageItems\"\n        [length]=\"totalElements\"\n        [pageSize]=\"pageSize\"\n        (page)=\"pageChanged($event)\"\n        >\n        </mat-paginator>\n    </div>\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_forums_forums_module_ts.js.map