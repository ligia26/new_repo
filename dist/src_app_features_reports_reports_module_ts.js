(self["webpackChunkbestinform"] = self["webpackChunkbestinform"] || []).push([["src_app_features_reports_reports_module_ts"],{

/***/ 36964:
/*!***************************************************************!*\
  !*** ./src/app/features/reports/clients/clients.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsComponent": () => (/* binding */ ClientsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _clients_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients.component.html?ngResource */ 948);
/* harmony import */ var _clients_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.component.scss?ngResource */ 8230);
/* harmony import */ var _clients_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clients_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ClientsComponent = class ClientsComponent {};
ClientsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-clients',
  template: _clients_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_clients_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientsComponent);


/***/ }),

/***/ 49154:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/reports/clients/components/clients-reports/clients-reports.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsReportsComponent": () => (/* binding */ ClientsReportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _clients_reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients-reports.component.html?ngResource */ 45067);
/* harmony import */ var _clients_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients-reports.component.scss?ngResource */ 67292);
/* harmony import */ var _clients_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clients_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/reports.service */ 94930);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);







let ClientsReportsComponent = class ClientsReportsComponent {
  constructor(reportsService, userService, datepipe) {
    this.reportsService = reportsService;
    this.userService = userService;
    this.datepipe = datepipe;
    this.filterEndDate = '';
    this.filterStartDate = '';
    this.filterTime = 'Daily';
    this.filterReportType = 'cancel-clients';
    this.baseUrl = 'https://bestinform.eu';
    this.actualFilter = {
      filterEndDate: this.filterEndDate,
      filterStartDate: this.filterStartDate,
      filterTime: 'Daily',
      filterType: 'cancel-clients'
    };
    this.timePeriods = [{
      value: 'Daily',
      viewValue: 'Daily'
    }, {
      value: 'Monthly',
      viewValue: 'Monthly'
    }, {
      value: 'Annually',
      viewValue: 'Annually'
    }];
    this.reportTypes = [{
      value: 'cancel-clients',
      viewValue: 'Anulări clienți'
    }];
  }
  ngOnInit() {
    this.applyFilter();
  }
  applyFilter() {
    this.actualFilter = {
      filterEndDate: this.filterEndDate,
      filterStartDate: this.filterStartDate,
      filterTime: this.filterTime,
      filterType: this.filterReportType
    };
    console.log('actual filter', this.actualFilter);
    if (this.actualFilter.filterType === 'cancel-clients' && this.actualFilter.filterStartDate === '') {
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/CanceledSaleReport' + this.actualFilter.filterTime + '.html';
      // this.baseUrl + this.actualFilter.filterTime + '.html';
      this.urlToDownload =
      // this.baseUrl + '/jasperserver/rest_v2/reports/reports/CanceledSaleReport' + this.actualFilter.filterTime + '.pdf';
      this.baseUrl + this.actualFilter.filterTime + '.pdf';
    } else if (this.actualFilter.filterType === 'cancel-clients' && this.actualFilter.filterStartDate !== '') {
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/CanceledSaleReport' + this.actualFilter.filterTime + 'Param.html?startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
      // this.baseUrl + this.actualFilter.filterTime + 'Param.html?startDate='
      // +  this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd')
      // + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
      this.urlToDownload =
      // this.baseUrl + '/jasperserver/rest_v2/reports/reports/CanceledSaleReport' + this.actualFilter.filterTime + 'Param.pdf?startDate='
      // +  this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd')
      // + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
      this.baseUrl + this.actualFilter.filterTime + 'Param.pdf?startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
    }
  }
  clearFields() {
    this.filterEndDate = '';
    this.filterStartDate = '';
    this.filterTime = 'Daily';
    this.filterReportType = 'cancel-clients';
    this.applyFilter();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe
  }];
};
ClientsReportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-clients-reports',
  template: _clients_reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [(_clients_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientsReportsComponent);


/***/ }),

/***/ 11465:
/*!*********************************************************************!*\
  !*** ./src/app/features/reports/editorials/editorials.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorialsComponent": () => (/* binding */ EditorialsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _editorials_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editorials.component.html?ngResource */ 67676);
/* harmony import */ var _editorials_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editorials.component.scss?ngResource */ 48814);
/* harmony import */ var _editorials_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editorials_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let EditorialsComponent = class EditorialsComponent {};
EditorialsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-editorials',
  template: _editorials_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_editorials_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditorialsComponent);


/***/ }),

/***/ 58558:
/*!*************************************************************!*\
  !*** ./src/app/features/reports/events/events.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsComponent": () => (/* binding */ EventsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _events_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.component.html?ngResource */ 75142);
/* harmony import */ var _events_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.component.scss?ngResource */ 15316);
/* harmony import */ var _events_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_events_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let EventsComponent = class EventsComponent {};
EventsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-events',
  template: _events_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_events_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EventsComponent);


/***/ }),

/***/ 43630:
/*!*********************************************************!*\
  !*** ./src/app/features/reports/jobs/jobs.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsComponent": () => (/* binding */ JobsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _jobs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs.component.html?ngResource */ 21955);
/* harmony import */ var _jobs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs.component.scss?ngResource */ 37110);
/* harmony import */ var _jobs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jobs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let JobsComponent = class JobsComponent {};
JobsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-jobs',
  template: _jobs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_jobs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], JobsComponent);


/***/ }),

/***/ 50850:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/reports/providers/components/providers-reports/providers-reports.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvidersReportsComponent": () => (/* binding */ ProvidersReportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _providers_reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers-reports.component.html?ngResource */ 87530);
/* harmony import */ var _providers_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers-reports.component.scss?ngResource */ 16401);
/* harmony import */ var _providers_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_providers_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/reports.service */ 94930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/_services/domains.service */ 58820);







let ProvidersReportsComponent = class ProvidersReportsComponent {
  constructor(reportsService, domainsService, datepipe) {
    this.reportsService = reportsService;
    this.domainsService = domainsService;
    this.datepipe = datepipe;
    this.filterEndDate = '';
    this.filterStartDate = '';
    this.filterTime = 'Daily';
    this.filterReportType = 'all-sales';
    this.filterDomain = '';
    this.filterDomainName = '';
    this.domainsList = [];
    this.baseUrl = 'https://bestinform.eu';
    this.actualFilter = {
      filterEndDate: this.filterEndDate,
      filterStartDate: this.filterStartDate,
      filterTime: 'Daily',
      filterType: 'all-sales',
      filterDomain: this.filterDomain,
      filterDomainName: ''
    };
    this.timePeriods = [{
      value: 'Daily',
      viewValue: 'Daily'
    }, {
      value: 'Monthly',
      viewValue: 'Monthly'
    }, {
      value: 'Annually',
      viewValue: 'Annually'
    }];
    this.reportTypes = [{
      value: 'all-sales',
      viewValue: 'Toate vânzările'
    }, {
      value: 'top-10-best-sales',
      viewValue: 'Top 10 provideri - Resurse consumate'
    }, {
      value: 'top-10-less-sales',
      viewValue: 'Top 10 provideri - Resurse neconsumate'
    }];
  }
  ngOnInit() {
    this.domainsService.getListOfDomains().subscribe(resp => {
      console.log('domenii', resp);
      this.domainsList = resp.map(sourceObject => ({
        itemId: sourceObject.id,
        itemName: sourceObject.nameRo
      }));
      // this.filterDomain = this.domainsList[0].itemId
    });

    this.applyFilter();
  }
  applyFilter() {
    if (this.filterReportType === 'all-sales') {
      this.filterStartDate = '';
      this.filterEndDate = '';
      this.filterDomain = '';
      this.filterDomainName = '';
    }
    this.actualFilter = {
      filterEndDate: this.filterEndDate,
      filterStartDate: this.filterStartDate,
      filterTime: this.filterTime,
      filterType: this.filterReportType,
      filterDomain: this.filterDomain,
      filterDomainName: ''
    };
    this.actualFilter.filterDomainName = this.domainsList.find(item => item.itemId === this.actualFilter.filterDomain)?.itemName;
    console.log('actual filter', this.actualFilter);
    if (this.actualFilter.filterType === 'all-sales') {
      console.log('test 0');
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/ProviderSalesReport' + this.actualFilter.filterTime + '.html';
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/ProviderSalesReport' + this.actualFilter.filterTime + '.pdf';
    } else if (this.actualFilter.filterType === 'top-10-best-sales' && this.actualFilter.filterStartDate === '' && this.actualFilter.filterDomain === '') {
      console.log('test 1');
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/TopDomainSaleReport' + this.actualFilter.filterTime + '.html';
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/TopDomainSaleReport' + this.actualFilter.filterTime + '.pdf';
    } else if (this.actualFilter.filterType === 'top-10-less-sales' && this.actualFilter.filterStartDate === '' && this.actualFilter.filterDomain === '') {
      console.log('test 2');
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/LeastDomainSaleReport' + this.actualFilter.filterTime + '.html';
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/LeastDomainSaleReport' + this.actualFilter.filterTime + '.pdf';
    } else if (this.actualFilter.filterType === 'top-10-best-sales' && this.actualFilter.filterStartDate !== '' && this.actualFilter.filterDomain !== '') {
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/TopDomainSaleReport' + this.actualFilter.filterTime + 'Param.html?' + 'domain=' + this.actualFilter.filterDomain + '&startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/TopDomainSaleReport' + this.actualFilter.filterTime + 'Param.pdf?' + 'domain=' + this.actualFilter.filterDomain + '&startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
    } else if (this.actualFilter.filterType === 'top-10-less-sales' && this.actualFilter.filterStartDate !== '' && this.actualFilter.filterDomain !== '') {
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/LeastDomainSaleReport' + this.actualFilter.filterTime + 'Param.html?' + 'domain=' + this.actualFilter.filterDomain + '&startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/LeastDomainSaleReport' + this.actualFilter.filterTime + 'Param.pdf?' + 'domain=' + this.actualFilter.filterDomain + '&startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
    }
  }
  clearFields() {
    this.filterEndDate = '';
    this.filterStartDate = '';
    this.filterTime = 'Daily';
    this.filterReportType = 'all-sales';
    this.filterDomain = '';
    this.filterDomainName = '';
    this.applyFilter();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService
  }, {
    type: _shared_services_domains_service__WEBPACK_IMPORTED_MODULE_3__.DomainsService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe
  }];
};
ProvidersReportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-providers-reports',
  template: _providers_reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [(_providers_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProvidersReportsComponent);


/***/ }),

/***/ 10649:
/*!*******************************************************************!*\
  !*** ./src/app/features/reports/providers/providers.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvidersComponent": () => (/* binding */ ProvidersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _providers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers.component.html?ngResource */ 44649);
/* harmony import */ var _providers_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers.component.scss?ngResource */ 90142);
/* harmony import */ var _providers_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_providers_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/reports.service */ 94930);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);






let ProvidersComponent = class ProvidersComponent {
  constructor(reportsService, sanitizer) {
    this.reportsService = reportsService;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl('https://bestinform.eu/jasperserver/rest_v2/reports/reports/ProviderSalesReportMonthly.html');
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
  }];
};
ProvidersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-providers',
  template: _providers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_providers_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProvidersComponent);


/***/ }),

/***/ 46291:
/*!****************************************************!*\
  !*** ./src/app/features/reports/reports.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsModule": () => (/* binding */ ReportsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients/clients.component */ 36964);
/* harmony import */ var _providers_providers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/providers.component */ 10649);
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/resources.component */ 99257);
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/events.component */ 58558);
/* harmony import */ var _editorials_editorials_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editorials/editorials.component */ 11465);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobs/jobs.component */ 43630);
/* harmony import */ var _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../standalone-components/dashboard-header/dashboard-header.component */ 54021);
/* harmony import */ var _resources_components_sales_per_provider_sales_per_provider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources/components/sales-per-provider/sales-per-provider.component */ 45382);
/* harmony import */ var _shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/_services/user-roles.guard */ 16070);
/* harmony import */ var _resources_components_resources_reports_resources_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources/components/resources-reports/resources-reports.component */ 38046);
/* harmony import */ var _providers_components_providers_reports_providers_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./providers/components/providers-reports/providers-reports.component */ 50850);
/* harmony import */ var _clients_components_clients_reports_clients_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clients/components/clients-reports/clients-reports.component */ 49154);


















const routes = [{
  path: 'clients',
  component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_1__.ClientsComponent
}, {
  path: 'providers',
  component: _providers_providers_component__WEBPACK_IMPORTED_MODULE_2__.ProvidersComponent
}, {
  path: 'resources',
  component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_3__.ResourcesComponent
}, {
  path: 'resources/:providerId',
  component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_3__.ResourcesComponent,
  canActivate: [_shared_services_user_roles_guard__WEBPACK_IMPORTED_MODULE_9__.UserRolesGuard],
  data: {
    allowedRoles: ['ROLE_STAFF']
  }
}, {
  path: 'events',
  component: _events_events_component__WEBPACK_IMPORTED_MODULE_4__.EventsComponent
}, {
  path: 'editorials',
  component: _editorials_editorials_component__WEBPACK_IMPORTED_MODULE_5__.EditorialsComponent
}, {
  path: 'jobs',
  component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_6__.JobsComponent
}];
let ReportsModule = class ReportsModule {};
ReportsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
  declarations: [_clients_clients_component__WEBPACK_IMPORTED_MODULE_1__.ClientsComponent, _providers_providers_component__WEBPACK_IMPORTED_MODULE_2__.ProvidersComponent, _resources_resources_component__WEBPACK_IMPORTED_MODULE_3__.ResourcesComponent, _events_events_component__WEBPACK_IMPORTED_MODULE_4__.EventsComponent, _editorials_editorials_component__WEBPACK_IMPORTED_MODULE_5__.EditorialsComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_6__.JobsComponent, _resources_components_sales_per_provider_sales_per_provider_component__WEBPACK_IMPORTED_MODULE_8__.SalesPerProviderComponent, _resources_components_resources_reports_resources_reports_component__WEBPACK_IMPORTED_MODULE_10__.ResourcesReportsComponent, _providers_components_providers_reports_providers_reports_component__WEBPACK_IMPORTED_MODULE_11__.ProvidersReportsComponent, _clients_components_clients_reports_clients_reports_component__WEBPACK_IMPORTED_MODULE_12__.ClientsReportsComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _standalone_components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_7__.DashboardHeaderComponent]
})], ReportsModule);


/***/ }),

/***/ 38046:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/reports/resources/components/resources-reports/resources-reports.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesReportsComponent": () => (/* binding */ ResourcesReportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resources_reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources-reports.component.html?ngResource */ 84269);
/* harmony import */ var _resources_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources-reports.component.scss?ngResource */ 3112);
/* harmony import */ var _resources_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/reports.service */ 94930);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);







let ResourcesReportsComponent = class ResourcesReportsComponent {
  constructor(reportsService, userService, datepipe) {
    this.reportsService = reportsService;
    this.userService = userService;
    this.datepipe = datepipe;
    this.filterEndDate = '';
    this.filterStartDate = '';
    this.filterTime = 'Daily';
    this.filterReportType = 'all-resources';
    this.baseUrl = 'https://bestinform.eu';
    this.actualFilter = {
      filterEndDate: this.filterEndDate,
      filterStartDate: this.filterStartDate,
      filterTime: 'Daily',
      filterType: 'all-sales'
    };
    this.timePeriods = [{
      value: 'Daily',
      viewValue: 'Daily'
    }, {
      value: 'Monthly',
      viewValue: 'Monthly'
    }, {
      value: 'Annually',
      viewValue: 'Annually'
    }];
    this.reportTypes = [{
      value: 'all-resources',
      viewValue: 'Toate resursele'
    }, {
      value: 'domain-sales',
      viewValue: 'Toate domeniile'
    }, {
      value: 'top-10-resources',
      viewValue: 'Top 10 resurse consumate'
    }];
  }
  ngOnInit() {
    this.applyFilter();
  }
  applyFilter() {
    if (this.filterReportType !== 'top-10-resources') {
      this.filterStartDate = '';
      this.filterEndDate = '';
    }
    this.actualFilter = {
      filterEndDate: this.filterEndDate,
      filterStartDate: this.filterStartDate,
      filterTime: this.filterTime,
      filterType: this.filterReportType
    };
    console.log('actual filter', this.actualFilter);
    if (this.actualFilter.filterType === 'all-resources') {
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/ResourceSalesReport' + this.actualFilter.filterTime + '.html';
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/ResourceSalesReport' + this.actualFilter.filterTime + '.pdf';
    } else if (this.actualFilter.filterType === 'domain-sales') {
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/DomainSalesReport' + this.actualFilter.filterTime + '.html';
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/DomainSalesReport' + this.actualFilter.filterTime + '.pdf';
    } else if (this.actualFilter.filterType === 'top-10-resources' && this.actualFilter.filterStartDate === '') {
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/TopResourceTypeSalesReport' + this.actualFilter.filterTime + '.html';
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/TopResourceTypeSalesReport' + this.actualFilter.filterTime + '.pdf';
    } else if (this.actualFilter.filterType === 'top-10-resources' && this.actualFilter.filterStartDate !== '') {
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/TopResourceTypeSalesReport' + this.actualFilter.filterTime + 'Param.html?startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/TopResourceTypeSalesReport' + this.actualFilter.filterTime + 'Param.pdf?startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
    }
  }
  clearFields() {
    this.filterEndDate = '';
    this.filterStartDate = '';
    this.filterTime = 'Daily';
    this.filterReportType = 'top-10-resources';
    this.applyFilter();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe
  }];
};
ResourcesReportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-resources-reports',
  template: _resources_reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [(_resources_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResourcesReportsComponent);


/***/ }),

/***/ 45382:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/reports/resources/components/sales-per-provider/sales-per-provider.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPerProviderComponent": () => (/* binding */ SalesPerProviderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sales_per_provider_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-per-provider.component.html?ngResource */ 1243);
/* harmony import */ var _sales_per_provider_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-per-provider.component.scss?ngResource */ 63592);
/* harmony import */ var _sales_per_provider_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_per_provider_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/reports.service */ 94930);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/_services/userData.service */ 32763);







let SalesPerProviderComponent = class SalesPerProviderComponent {
  constructor(reportsService, userService, datepipe) {
    this.reportsService = reportsService;
    this.userService = userService;
    this.datepipe = datepipe;
    this.filterEndDate = new Date();
    this.filterStartDate = new Date(new Date().setDate(this.filterEndDate.getDate() - 30));
    this.filterTime = 'Daily';
    this.filterReportType = 'all-sales';
    this.baseUrl = 'https://bestinform.eu';
    this.actualFilter = {
      filterEndDate: this.filterEndDate,
      filterStartDate: this.filterStartDate,
      filterTime: 'Daily',
      filterType: 'all-sales'
    };
    this.timePeriods = [{
      value: 'Daily',
      viewValue: 'Daily'
    }, {
      value: 'Monthly',
      viewValue: 'Monthly'
    }, {
      value: 'Annually',
      viewValue: 'Annually'
    }];
    this.reportTypes = [{
      value: 'all-sales',
      viewValue: 'Toate vanzarile'
    }, {
      value: 'all-resources',
      viewValue: 'Toate resursele'
    }, {
      value: 'domain-sales',
      viewValue: 'Toate domeniile'
    }];
  }
  ngOnInit() {
    if (this.userRole === 'staff') {
      this.userService.getUserById(this.providerId).subscribe(resp => {
        console.log('avem provider 2', resp);
        this.providerName = resp.companyName;
        this.applyFilter();
      });
    } else if (this.userRole === 'provider') {
      console.log('sunt provider 3');
      this.userService.getCurrentUser().subscribe(resp => {
        this.providerId = resp.id;
        this.providerName = resp.companyName;
        this.applyFilter();
      });
    }
  }
  applyFilter() {
    this.actualFilter = {
      filterEndDate: this.filterEndDate,
      filterStartDate: this.filterStartDate,
      filterTime: this.filterTime,
      filterType: this.filterReportType
    };
    console.log('actual filter', this.actualFilter);
    if (this.actualFilter.filterType === 'all-sales') {
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/ProviderSalesReport' + this.actualFilter.filterTime + 'Param.html?providerId=' + this.providerId + '&startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
      console.log(this.urlSafe);
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/ProviderSalesReport' + this.actualFilter.filterTime + 'Param.pdf?providerId=' + this.providerId + '&startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
    } else if (this.actualFilter.filterType === 'all-resources') {
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/ResourceSalesReport' + this.actualFilter.filterTime + 'Param.html?providerId=' + this.providerId + '&startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/ResourceSalesReport' + this.actualFilter.filterTime + 'Param.pdf?providerId=' + this.providerId + '&startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
    } else if (this.actualFilter.filterType === 'domain-sales') {
      this.urlSafe = this.baseUrl + '/jasperserver/rest_v2/reports/reports/DomainSalesReport' + this.actualFilter.filterTime + 'Param.html?providerId=' + this.providerId + '&startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
      this.urlToDownload = this.baseUrl + '/jasperserver/rest_v2/reports/reports/DomainSalesReport' + this.actualFilter.filterTime + 'Param.pdf?providerId=' + this.providerId + '&startDate=' + this.datepipe.transform(this.actualFilter.filterStartDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(this.actualFilter.filterEndDate, 'yyyy-MM-dd');
    }
  }
  clearFields() {
    this.filterEndDate = new Date();
    this.filterStartDate = new Date(new Date().setDate(this.filterEndDate.getDate() - 30));
    this.filterTime = 'Daily';
    this.filterReportType = 'all-sales';
    this.applyFilter();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService
  }, {
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe
  }];
  static #_2 = this.propDecorators = {
    providerId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    userRole: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
SalesPerProviderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-sales-per-provider',
  template: _sales_per_provider_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [(_sales_per_provider_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SalesPerProviderComponent);


/***/ }),

/***/ 99257:
/*!*******************************************************************!*\
  !*** ./src/app/features/reports/resources/resources.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesComponent": () => (/* binding */ ResourcesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resources_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.component.html?ngResource */ 40623);
/* harmony import */ var _resources_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.component.scss?ngResource */ 79608);
/* harmony import */ var _resources_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services/userData.service */ 32763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);







let ResourcesComponent = class ResourcesComponent {
  constructor(userService, route) {
    this.userService = userService;
    this.route = route;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params', params);
      if (params?.providerId) {
        console.log('avem provider');
        this.providerId = params?.providerId;
        this.userRole = 'staff';
      } else {
        this.userService.getCurrentUser().subscribe(resp => {
          if (resp.roles.includes('ROLE_PROVIDER')) {
            this.userRole = 'provider';
          } else if (resp.roles.includes('ROLE_SUPER_ADMIN') || resp.roles.includes('ROLE_STAFF')) {
            this.userRole = 'staff';
          }
        });
        console.log('nu avem provider', this.providerId, this.userRole);
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
ResourcesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-resources',
  template: _resources_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: [(_resources_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResourcesComponent);


/***/ }),

/***/ 8230:
/*!****************************************************************************!*\
  !*** ./src/app/features/reports/clients/clients.component.scss?ngResource ***!
  \****************************************************************************/
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

/***/ 67292:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/reports/clients/components/clients-reports/clients-reports.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 48814:
/*!**********************************************************************************!*\
  !*** ./src/app/features/reports/editorials/editorials.component.scss?ngResource ***!
  \**********************************************************************************/
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

/***/ 15316:
/*!**************************************************************************!*\
  !*** ./src/app/features/reports/events/events.component.scss?ngResource ***!
  \**************************************************************************/
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

/***/ 37110:
/*!**********************************************************************!*\
  !*** ./src/app/features/reports/jobs/jobs.component.scss?ngResource ***!
  \**********************************************************************/
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

/***/ 16401:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/reports/providers/components/providers-reports/providers-reports.component.scss?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 90142:
/*!********************************************************************************!*\
  !*** ./src/app/features/reports/providers/providers.component.scss?ngResource ***!
  \********************************************************************************/
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

/***/ 3112:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/reports/resources/components/resources-reports/resources-reports.component.scss?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 63592:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/reports/resources/components/sales-per-provider/sales-per-provider.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 79608:
/*!********************************************************************************!*\
  !*** ./src/app/features/reports/resources/resources.component.scss?ngResource ***!
  \********************************************************************************/
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

/***/ 948:
/*!****************************************************************************!*\
  !*** ./src/app/features/reports/clients/clients.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Rapoarte Clienți\">\n        </app-dashboard-header>\n        <app-clients-reports></app-clients-reports>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 45067:
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/reports/clients/components/clients-reports/clients-reports.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row filterRow\">\n    <div class=\"col-12 col-lg-9\">\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>Tip raport</mat-label>\n                    <mat-select [(ngModel)]=filterReportType>\n                        <mat-option [value]=\"option.value\"\n                                    *ngFor=\"let option of reportTypes\">{{ option.viewValue }}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>Frecvență rezultate</mat-label>\n                    <mat-select [(ngModel)]=filterTime>\n                        <mat-option [value]=\"option.value\"\n                                    *ngFor=\"let option of timePeriods\">{{ option.viewValue }}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <!--Start date filter-->\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>{{'FIELD.START-DATE' | translate}}</mat-label>\n                    <input matInput [(ngModel)]=filterStartDate [matDatepicker]=\"dataPickerStart\">\n                    <mat-hint>DD.MM.YYYY</mat-hint>\n                    <mat-datepicker-toggle matSuffix [for]=\"dataPickerStart\"></mat-datepicker-toggle>\n                    <mat-datepicker #dataPickerStart></mat-datepicker>\n                </mat-form-field>\n                <mat-error *ngIf=\"((filterEndDate < filterStartDate) && (filterStartDate !== '' && filterEndDate !== ''))\">Data de început nu poate fi mai mare decât data de final.</mat-error>\n                <mat-error *ngIf=\"((filterStartDate === '' && filterEndDate !== ''))\">Trebuie să completați ambele date, sau niciuna.</mat-error>\n            </div>\n            <div class=\"col-3\">\n                <!--Finish date filter-->\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>{{'FIELD.END-DATE' | translate}}</mat-label>\n                    <input id=\"inputFilterByEndDate\" matInput [(ngModel)]=filterEndDate\n                           [matDatepicker]=\"dataPickerFinish\">\n                    <mat-hint>DD.MM.YYYY</mat-hint>\n                    <mat-datepicker-toggle matSuffix [for]=\"dataPickerFinish\"></mat-datepicker-toggle>\n                    <mat-datepicker #dataPickerFinish></mat-datepicker>\n\n                </mat-form-field>\n                <mat-error *ngIf=\"((filterEndDate < filterStartDate) && (filterStartDate !== '' && filterEndDate !== ''))\">Data de final nu poate fi mai mică decât data de început.</mat-error>\n                <mat-error *ngIf=\"(filterStartDate !== '' && filterEndDate === '')\">Trebuie să completați ambele date, sau niciuna.</mat-error>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-3 d-flex align-items-center justify-content-end gap-2\">\n        <button type=\"button\" class=\"btn-round btn-color-outline\" id=\"clearFilterBtn\" (click)=\"clearFields()\"><i\n                class=\"fas fa-sync\"></i></button>\n        <button type=\"button\" class=\"btn-long btn-color-fill\" [disabled]=\"(filterEndDate < filterStartDate) || (filterStartDate === '' && filterEndDate !== '')\"\n                (click)=\"applyFilter()\">{{'BTN.FILTER' | translate}}\n            <i class=\"fas fa-filter\"></i></button>\n    </div>\n</div>\n<div class=\"row tableContent\">\n    <div class=\"col-lg-12\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <iframe width=\"100%\" height=\"870px\" [src]=\"urlSafe | safe\"></iframe>\n                <!-- <iframe width=\"100%\" height=\"870px\" [src]=\"urlSafe\"></iframe> -->\n\n            </div>\n            <div class=\"col-md-6\">\n                <p class=\"mt-2\">Raportul prezintă\n                    <strong *ngIf=\"actualFilter.filterType === 'cancel-clients'\">clienții care au anulat consumarea de resurse împreună cu resursele respective</strong>\n                    <span *ngIf=\"actualFilter.filterStartDate !== ''\"> din intervalul </span>\n                    <strong *ngIf=\"actualFilter.filterStartDate !== ''\">{{actualFilter.filterStartDate | date: 'dd.MM.yyyy'}}\n                        - {{actualFilter.filterEndDate | date: 'dd.MM.yyyy'}}</strong> și este afișat cu frecvență\n                    <strong *ngIf=\"actualFilter.filterTime === 'Daily'\">zilnică</strong>\n                    <strong *ngIf=\"actualFilter.filterTime === 'Monthly'\">lunară</strong>\n                    <strong *ngIf=\"actualFilter.filterTime === 'Annually'\">anuală</strong>.\n                </p>\n                <a type=\"button\" class=\"btn-long btn-color-fill\"\n                   [href]=\"urlToDownload | safe\">\n                   <!-- <a type=\"button\" class=\"btn-long btn-color-fill\"\n                   [href]=\"urlToDownload\"> -->\n                   Descarcă\n                    PDF\n                    <i class=\"fas fa-file-pdf\"></i></a>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 67676:
/*!**********************************************************************************!*\
  !*** ./src/app/features/reports/editorials/editorials.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Rapoarte Editoriale\">\n        </app-dashboard-header>\n    </div>\n</div>\n";

/***/ }),

/***/ 75142:
/*!**************************************************************************!*\
  !*** ./src/app/features/reports/events/events.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Rapoarte Evenimente\">\n        </app-dashboard-header>\n    </div>\n</div>\n";

/***/ }),

/***/ 21955:
/*!**********************************************************************!*\
  !*** ./src/app/features/reports/jobs/jobs.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Rapoarte Job-uri\">\n        </app-dashboard-header>\n    </div>\n</div>\n";

/***/ }),

/***/ 87530:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/reports/providers/components/providers-reports/providers-reports.component.html?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row filterRow\">\n    <div class=\"col-12 col-lg-9\">\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>Tip raport</mat-label>\n                    <mat-select [(ngModel)]=filterReportType>\n                        <mat-option [value]=\"option.value\"\n                                    *ngFor=\"let option of reportTypes\">{{ option.viewValue }}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"col-2\">\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>Frecvență rezultate</mat-label>\n                    <mat-select [(ngModel)]=filterTime>\n                        <mat-option [value]=\"option.value\"\n                                    *ngFor=\"let option of timePeriods\">{{ option.viewValue }}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"col-2\" *ngIf=\"domainsList.length > 0 && (filterReportType === 'top-10-best-sales') || (filterReportType === 'top-10-less-sales')\">\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>Domeniu</mat-label>\n                    <mat-select [(ngModel)]=filterDomain>\n                        <mat-option>-</mat-option>\n                        <mat-option [value]=\"option.itemId\"\n                                    *ngFor=\"let option of domainsList\" >{{ option.itemName }}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"col-2\" *ngIf=\"(filterReportType === 'top-10-best-sales') || (filterReportType === 'top-10-less-sales')\">\n                <!--Start date filter-->\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>{{'FIELD.START-DATE' | translate}}</mat-label>\n                    <input matInput [(ngModel)]=filterStartDate [matDatepicker]=\"dataPickerStart\">\n                    <mat-hint>DD.MM.YYYY</mat-hint>\n                    <mat-datepicker-toggle matSuffix [for]=\"dataPickerStart\"></mat-datepicker-toggle>\n                    <mat-datepicker #dataPickerStart></mat-datepicker>\n                </mat-form-field>\n                <mat-error *ngIf=\"((filterEndDate < filterStartDate) && (filterStartDate !== '' && filterEndDate !== ''))\">Data de început nu poate fi mai mare decât data de final.</mat-error>\n                <mat-error *ngIf=\"((filterStartDate === '' && filterEndDate !== ''))\">Trebuie să completați ambele date.</mat-error>\n                <mat-error *ngIf=\"((filterStartDate === '' && filterEndDate === '') && filterDomain !== '')\">Trebuie să completați datele.</mat-error>\n\n            </div>\n            <div class=\"col-2\" *ngIf=\"(filterReportType === 'top-10-best-sales') || (filterReportType === 'top-10-less-sales')\">\n                <!--Finish date filter-->\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>{{'FIELD.END-DATE' | translate}}</mat-label>\n                    <input id=\"inputFilterByEndDate\" matInput [(ngModel)]=filterEndDate\n                           [matDatepicker]=\"dataPickerFinish\">\n                    <mat-hint>DD.MM.YYYY</mat-hint>\n                    <mat-datepicker-toggle matSuffix [for]=\"dataPickerFinish\"></mat-datepicker-toggle>\n                    <mat-datepicker #dataPickerFinish></mat-datepicker>\n\n                </mat-form-field>\n                <mat-error *ngIf=\"((filterEndDate < filterStartDate) && (filterStartDate !== '' && filterEndDate !== ''))\">Data de final nu poate fi mai mică decât data de început.</mat-error>\n                <mat-error *ngIf=\"(filterStartDate !== '' && filterEndDate === '')\">Trebuie să completați ambele date.</mat-error>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-3 d-flex align-items-center justify-content-end gap-2\">\n        <button type=\"button\" class=\"btn-round btn-color-outline\" id=\"clearFilterBtn\" (click)=\"clearFields()\"><i\n                class=\"fas fa-sync\"></i></button>\n        <button type=\"button\" class=\"btn-long btn-color-fill\" [disabled]=\"(filterEndDate < filterStartDate) || (filterStartDate === '' && filterEndDate !== '') || ((filterStartDate === '' && filterEndDate === '') && filterDomain !== '')\"\n                (click)=\"applyFilter()\">{{'BTN.FILTER' | translate}}\n            <i class=\"fas fa-filter\"></i></button>\n    </div>\n</div>\n<div class=\"row tableContent\">\n    <div class=\"col-lg-12\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <iframe width=\"100%\" height=\"870px\" [src]=\"urlSafe | safe\"></iframe>\n            </div>\n            <div class=\"col-md-6\">\n                <p class=\"mt-2\">Raportul prezintă\n                    <strong *ngIf=\"actualFilter.filterType === 'all-sales'\">totalul vănzărilor per fiecare provider</strong>\n                    <strong *ngIf=\"actualFilter.filterType === 'top-10-best-sales'\">top 10 provideri ale căror resurse au fost consumate</strong>\n                    <strong *ngIf=\"actualFilter.filterType === 'top-10-less-sales'\">top 10 provideri cu resursele cele mai putin tranzacționate</strong>\n                    <span *ngIf=\"actualFilter.filterDomain\"> din domeniul </span>\n                    <strong *ngIf=\"actualFilter.filterDomain\"> {{actualFilter.filterDomainName}}</strong>\n                    <span *ngIf=\"actualFilter.filterStartDate !== ''\"> din intervalul </span>\n                    <strong *ngIf=\"actualFilter.filterStartDate !== ''\">{{actualFilter.filterStartDate | date: 'dd.MM.yyyy'}}\n                        - {{actualFilter.filterEndDate | date: 'dd.MM.yyyy'}}</strong> afișat cu frecvență\n                    <strong *ngIf=\"actualFilter.filterTime === 'Daily'\">zilnică</strong>\n                    <strong *ngIf=\"actualFilter.filterTime === 'Monthly'\">lunară</strong>\n                    <strong *ngIf=\"actualFilter.filterTime === 'Annually'\">anuală</strong>.\n                </p>\n                <a type=\"button\" class=\"btn-long btn-color-fill\"\n                   [href]=\"urlToDownload | safe\">Descarcă\n                    PDF\n                    <i class=\"fas fa-file-pdf\"></i></a>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 44649:
/*!********************************************************************************!*\
  !*** ./src/app/features/reports/providers/providers.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Rapoarte Provideri\">\n        </app-dashboard-header>\n        <app-providers-reports></app-providers-reports>\n</div>\n";

/***/ }),

/***/ 84269:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/reports/resources/components/resources-reports/resources-reports.component.html?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row filterRow\">\n    <div class=\"col-12 col-lg-9\">\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>Tip raport</mat-label>\n                    <mat-select [(ngModel)]=filterReportType>\n                        <mat-option [value]=\"option.value\"\n                                    *ngFor=\"let option of reportTypes\">{{ option.viewValue }}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>Frecvență rezultate</mat-label>\n                    <mat-select [(ngModel)]=filterTime>\n                        <mat-option [value]=\"option.value\"\n                                    *ngFor=\"let option of timePeriods\">{{ option.viewValue }}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\" *ngIf=\"filterReportType === 'top-10-resources'\">\n                <!--Start date filter-->\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>{{'FIELD.START-DATE' | translate}}</mat-label>\n                    <input matInput [(ngModel)]=filterStartDate [matDatepicker]=\"dataPickerStart\">\n                    <mat-hint>DD.MM.YYYY</mat-hint>\n                    <mat-datepicker-toggle matSuffix [for]=\"dataPickerStart\"></mat-datepicker-toggle>\n                    <mat-datepicker #dataPickerStart></mat-datepicker>\n                </mat-form-field>\n                <mat-error *ngIf=\"((filterEndDate < filterStartDate) && (filterStartDate !== '' && filterEndDate !== ''))\">Data de început nu poate fi mai mare decât data de final.</mat-error>\n                <mat-error *ngIf=\"((filterStartDate === '' && filterEndDate !== ''))\">Trebuie să completați ambele date, sau niciuna.</mat-error>\n            </div>\n            <div class=\"col-3\" *ngIf=\"filterReportType === 'top-10-resources'\">\n                <!--Finish date filter-->\n                <mat-form-field appearance=\"standard\">\n                    <mat-label>{{'FIELD.END-DATE' | translate}}</mat-label>\n                    <input id=\"inputFilterByEndDate\" matInput [(ngModel)]=filterEndDate\n                           [matDatepicker]=\"dataPickerFinish\">\n                    <mat-hint>DD.MM.YYYY</mat-hint>\n                    <mat-datepicker-toggle matSuffix [for]=\"dataPickerFinish\"></mat-datepicker-toggle>\n                    <mat-datepicker #dataPickerFinish></mat-datepicker>\n\n                </mat-form-field>\n                <mat-error *ngIf=\"((filterEndDate < filterStartDate) && (filterStartDate !== '' && filterEndDate !== ''))\">Data de final nu poate fi mai mică decât data de început.</mat-error>\n                <mat-error *ngIf=\"(filterStartDate !== '' && filterEndDate === '')\">Trebuie să completați ambele date, sau niciuna.</mat-error>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-3 d-flex align-items-center justify-content-end gap-2\">\n        <button type=\"button\" class=\"btn-round btn-color-outline\" id=\"clearFilterBtn\" (click)=\"clearFields()\"><i\n                class=\"fas fa-sync\"></i></button>\n        <button type=\"button\" class=\"btn-long btn-color-fill\" [disabled]=\"(filterEndDate < filterStartDate) || (filterStartDate === '' && filterEndDate !== '')\"\n                (click)=\"applyFilter()\">{{'BTN.FILTER' | translate}}\n            <i class=\"fas fa-filter\"></i></button>\n    </div>\n</div>\n<div class=\"row tableContent\">\n    <div class=\"col-lg-12\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <iframe width=\"100%\" height=\"870px\" [src]=\"urlSafe | safe\"></iframe>\n            </div>\n            <div class=\"col-md-6\">\n                <p class=\"mt-2\">Raportul prezintă\n                    <strong *ngIf=\"actualFilter.filterType === 'all-resources'\">totalul vănzărilor per fiecare resursă</strong>\n                    <strong *ngIf=\"actualFilter.filterType === 'domain-sales'\">totalul vănzărilor per fiecare domeniu</strong>\n                    <strong *ngIf=\"actualFilter.filterType === 'top-10-resources'\">top 10 tipuri de resurse consumate</strong>\n\n                    <span *ngIf=\"actualFilter.filterStartDate !== ''\"> din intervalul </span>\n                    <strong *ngIf=\"actualFilter.filterStartDate !== ''\">{{actualFilter.filterStartDate | date: 'dd.MM.yyyy'}}\n                        - {{actualFilter.filterEndDate | date: 'dd.MM.yyyy'}}</strong> afișat cu frecvență\n                    <strong *ngIf=\"actualFilter.filterTime === 'Daily'\">zilnică</strong>\n                    <strong *ngIf=\"actualFilter.filterTime === 'Monthly'\">lunară</strong>\n                    <strong *ngIf=\"actualFilter.filterTime === 'Annually'\">anuală</strong>.\n                </p>\n                <a type=\"button\" class=\"btn-long btn-color-fill\"\n                   [href]=\"urlToDownload | safe\">Descarcă\n                    PDF\n                    <i class=\"fas fa-file-pdf\"></i></a>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 1243:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/reports/resources/components/sales-per-provider/sales-per-provider.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row filterRow\">\n            <div class=\"col-12 col-lg-9\">\n                <div class=\"row\">\n                    <div class=\"col-3\">\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Tip raport</mat-label>\n                            <mat-select [(ngModel)]=filterReportType>\n                                <mat-option [value]=\"option.value\"\n                                            *ngFor=\"let option of reportTypes\">{{ option.viewValue }}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-3\">\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Frecvență rezultate</mat-label>\n                            <mat-select [(ngModel)]=filterTime>\n                                <mat-option [value]=\"option.value\"\n                                            *ngFor=\"let option of timePeriods\">{{ option.viewValue }}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n\n                    <div class=\"col-3\">\n                        <!--Start date filter-->\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>{{'FIELD.START-DATE' | translate}}</mat-label>\n                            <input matInput [(ngModel)]=filterStartDate [matDatepicker]=\"dataPickerStart\">\n                            <mat-hint>DD.MM.YYYY</mat-hint>\n                            <mat-datepicker-toggle matSuffix [for]=\"dataPickerStart\"></mat-datepicker-toggle>\n                            <mat-datepicker #dataPickerStart></mat-datepicker>\n                        </mat-form-field>\n                        <mat-error *ngIf=\"filterEndDate < filterStartDate\">Data de început nu poate fi mai mare decât data de final.</mat-error>\n                    </div>\n                    <div class=\"col-3\">\n                        <!--Finish date filter-->\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>{{'FIELD.END-DATE' | translate}}</mat-label>\n                            <input id=\"inputFilterByEndDate\" matInput [(ngModel)]=filterEndDate\n                                   [matDatepicker]=\"dataPickerFinish\">\n                            <mat-hint>DD.MM.YYYY</mat-hint>\n                            <mat-datepicker-toggle matSuffix [for]=\"dataPickerFinish\"></mat-datepicker-toggle>\n                            <mat-datepicker #dataPickerFinish></mat-datepicker>\n\n                        </mat-form-field>\n                        <mat-error *ngIf=\"filterEndDate < filterStartDate\">Data de final nu poate fi mai mică decât data de început.</mat-error>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"col-12 col-lg-3 d-flex align-items-center justify-content-end gap-2\">\n                <button type=\"button\" class=\"btn-round btn-color-outline\" id=\"clearFilterBtn\" (click)=\"clearFields()\"><i\n                        class=\"fas fa-sync\"></i></button>\n                <button type=\"button\" class=\"btn-long btn-color-fill\" [disabled]=\"filterEndDate < filterStartDate\"\n                        (click)=\"applyFilter()\">{{'BTN.FILTER' | translate}}\n                    <i class=\"fas fa-filter\"></i></button>\n            </div>\n        </div>\n        <div class=\"row tableContent\">\n            <div class=\"col-lg-12\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <iframe width=\"100%\" height=\"870px\" [src]=\"urlSafe | safe\"></iframe>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <p class=\"mt-2\">Raportul prezintă\n                            <strong *ngIf=\"actualFilter.filterType === 'all-sales'\">totalul vănzărilor</strong>\n                            <strong *ngIf=\"actualFilter.filterType === 'all-resources'\">totalul vănzărilor per fiecare resursă</strong>\n                            <strong *ngIf=\"actualFilter.filterType === 'domain-sales'\">totalul vănzărilor per fiecare domeniu</strong>\n                            pentru provider-ul\n                            <strong>{{providerName}}</strong> din intervalul\n                            <strong>{{actualFilter.filterStartDate | date: 'dd.MM.yyyy'}}\n                                - {{actualFilter.filterEndDate | date: 'dd.MM.yyyy'}}</strong> afișat cu frecvență\n                            <strong *ngIf=\"actualFilter.filterTime === 'Daily'\">zilnică</strong>\n                            <strong *ngIf=\"actualFilter.filterTime === 'Monthly'\">lunară</strong>\n                            <strong *ngIf=\"actualFilter.filterTime === 'Annually'\">anuală</strong>.\n                        </p>\n                        <a type=\"button\" class=\"btn-long btn-color-fill\"\n                           [href]=\"urlToDownload | safe\">Descarcă\n                            PDF\n                            <i class=\"fas fa-file-pdf\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n";

/***/ }),

/***/ 40623:
/*!********************************************************************************!*\
  !*** ./src/app/features/reports/resources/resources.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid client-general-box\">\n    <div class=\"container\">\n        <app-dashboard-header pageTitleOne=\"Rapoarte Resurse\">\n        </app-dashboard-header>\n\n        <div *ngIf=\"(userRole === 'provider') || ((userRole === 'staff') && providerId)\">\n            <app-sales-per-provider [providerId]=\"providerId\" [userRole]=\"userRole\" ></app-sales-per-provider>\n        </div>\n\n\n        <div *ngIf=\"((userRole === 'staff') && !providerId)\">\n            <app-resources-reports></app-resources-reports>\n        </div>\n\n    </div>\n</div>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_features_reports_reports_module_ts.js.map