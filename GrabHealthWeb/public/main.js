(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./guards/auth.guard.ts":
/*!******************************!*\
  !*** ./guards/auth.guard.ts ***!
  \******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(patientService, router) {
        this.patientService = patientService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.patientService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _find_clinic_find_clinic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./find-clinic/find-clinic.component */ "./src/app/find-clinic/find-clinic.component.ts");
/* harmony import */ var guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! guards/auth.guard */ "./guards/auth.guard.ts");
/* harmony import */ var _booking_status_booking_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./booking-status/booking-status.component */ "./src/app/booking-status/booking-status.component.ts");
/* harmony import */ var _visit_history_visit_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visit-history/visit-history.component */ "./src/app/visit-history/visit-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'patient', component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_3__["PatientComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'edit-profile', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"] },
    { path: 'find-clinic', component: _find_clinic_find_clinic_component__WEBPACK_IMPORTED_MODULE_7__["FindClinicComponent"] },
    { path: 'booking-status', component: _booking_status_booking_status_component__WEBPACK_IMPORTED_MODULE_9__["BookingStatusComponent"] },
    { path: 'visit-history', component: _visit_history_visit_history_component__WEBPACK_IMPORTED_MODULE_10__["VisitHistoryComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<flash-messages></flash-messages>\r\n\r\n<section>\r\n  <router-outlet></router-outlet>\r\n</section>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'patient';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getToken, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _find_clinic_find_clinic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./find-clinic/find-clinic.component */ "./src/app/find-clinic/find-clinic.component.ts");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! guards/auth.guard */ "./guards/auth.guard.ts");
/* harmony import */ var _booking_status_booking_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./booking-status/booking-status.component */ "./src/app/booking-status/booking-status.component.ts");
/* harmony import */ var _visit_history_visit_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./visit-history/visit-history.component */ "./src/app/visit-history/visit-history.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function getToken() {
    return localStorage.getItem('id_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _patient_patient_component__WEBPACK_IMPORTED_MODULE_10__["PatientComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileComponent"],
                _find_clinic_find_clinic_component__WEBPACK_IMPORTED_MODULE_16__["FindClinicComponent"],
                _booking_status_booking_status_component__WEBPACK_IMPORTED_MODULE_20__["BookingStatusComponent"],
                _visit_history_visit_history_component__WEBPACK_IMPORTED_MODULE_21__["VisitHistoryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: getToken
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22__["FlashMessagesModule"].forRoot()
            ],
            providers: [_issue_service__WEBPACK_IMPORTED_MODULE_13__["IssueService"], _services_patient_service__WEBPACK_IMPORTED_MODULE_17__["PatientService"], guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/booking-status/booking-status.component.html":
/*!**************************************************************!*\
  !*** ./src/app/booking-status/booking-status.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <table class=\"table\" id=\"header\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\"><h3><b>Booking Status</b></h3></th>\r\n        </tr>\r\n      </thead>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"container text-center\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Reference Number</th>\r\n          <th scope=\"col\">Clinic Name</th>\r\n          <th scope=\"col\">Booking Status</th>\r\n          <th scope=\"col\">Remarks</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngFor=\"let clinic of clinics\">\r\n        <tr>\r\n          <td></td>\r\n          <td>{{ clinic.name }}</td>\r\n          <td></td>\r\n          <td><button type=\"button\" class=\"btn btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#cancelModal\"><i class=\"fa fa-times-circle\"></i> Cancel</button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<!--Cancel Modal Box-->\r\n<div>\r\n  <div class=\"modal fade\" id=\"cancelModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"cancelModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"cancelModalTitle\"><strong>Confirm Cancellation</strong></h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        \r\n        <div class=\"modal-body\">\r\n          <div class=\"row rowspacing\">\r\n            <div class=\"col\">\r\n              <p><b>Please check the following details:</b></p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row rowspacing\">\r\n            <div class=\"col\">\r\n              <p>You have -- more patients infront of you.</p>\r\n              <p>Do you want to cancel your booking?</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">No</button>\r\n          <button type=\"button\" class=\"btn btn-outline-primary\">Yes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--End of Cancel Modal Box-->"

/***/ }),

/***/ "./src/app/booking-status/booking-status.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/booking-status/booking-status.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-bottom: 20px; }\n\n.container {\n  font-size: 16px; }\n\n#header {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZy1zdGF0dXMvRDpcXFNjaG9vbFxcTmFueWFuZyBQb2x5dGVjaG5pY1xcRmluYWwgUHJvamVjdCBOWVBcXEdyYWJIZWFsdGhXZWJcXEdyYWJIZWFsdGhXZWIvc3JjXFxhcHBcXGJvb2tpbmctc3RhdHVzXFxib29raW5nLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYm9va2luZy1zdGF0dXMvYm9va2luZy1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/booking-status/booking-status.component.ts":
/*!************************************************************!*\
  !*** ./src/app/booking-status/booking-status.component.ts ***!
  \************************************************************/
/*! exports provided: BookingStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingStatusComponent", function() { return BookingStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingStatusComponent = /** @class */ (function () {
    function BookingStatusComponent(router, patientService) {
        this.router = router;
        this.patientService = patientService;
    }
    BookingStatusComponent.prototype.ngOnInit = function () {
        this.getBookedClinics();
    };
    BookingStatusComponent.prototype.getBookedClinics = function () {
        var _this = this;
        this.patientService.getBookedClinics().subscribe(function (res) {
            _this.clinics = res['clinics'];
        }, function (err) {
            console.log(err);
        });
    };
    BookingStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-status',
            template: __webpack_require__(/*! ./booking-status.component.html */ "./src/app/booking-status/booking-status.component.html"),
            styles: [__webpack_require__(/*! ./booking-status.component.scss */ "./src/app/booking-status/booking-status.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]])
    ], BookingStatusComponent);
    return BookingStatusComponent;
}());



/***/ }),

/***/ "./src/app/custom-validators.ts":
/*!**************************************!*\
  !*** ./src/app/custom-validators.ts ***!
  \**************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.patternValidator = function (regex, error) {
        return function (control) {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            var valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    };
    CustomValidators.passwordMatchValidator = function (control) {
        var password = control.get('password').value; // get password from our password form control
        var confirmPassword = control.get('confirmPassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"patient\" class=\"container col\">\r\n    <div class=\"list-group float-left\">\r\n    <a routerLink=\"/profile\" class=\"list-group-item list-group-item-action text-center\" id=\"viewSide\">View Profile</a>\r\n    <a routerLink=\"/edit-profile\" class=\"list-group-item list-group-item-action active text-center\" id=\"editSide\">Edit Profile</a>\r\n  </div>\r\n\r\n  <div class=\"container float-right\" id=\"rightSide\">\r\n    <div class=\"container col-sm-2 float-left text-center\" id=\"rightInner\">\r\n        <img src=\"{{patient.attach}}\" width=\"150px\"/>\r\n        <label>Email:</label>\r\n        <input type=\"text\" class=\"text-line text-center\" [(ngModel)]=\"patient.email\"  value=\"{{patient.email}}\" disabled>\r\n        <br>\r\n        <label>Password:</label>\r\n        <input type=\"password\" class=\"form-control text-line text-center\" [(ngModel)]=\"patient.password\" value=\"{{patient.password}}\">\r\n        <br>\r\n        <label>Confirm Password:</label>\r\n        <input type=\"password\" class=\"form-control text-line text-center\" [(ngModel)]=\"patient.confirmPassword\" value=\"{{patient.confirmPassword}}\">\r\n    </div>\r\n    \r\n    <div class=\"container col-sm-9 float-right\" id=\"rightInner\">\r\n      <label>First Name:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" [(ngModel)]=\"patient.firstName\" value=\"{{patient.firstName}}\" disabled>\r\n      <br>\r\n      <label>Last Name:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" [(ngModel)]=\"patient.lastName\" value=\"{{patient.lastName}}\" disabled>\r\n      <br>\r\n      <label>NRIC/Passport No.:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" [(ngModel)]=\"patient.nric\" value=\"{{patient.nric}}\" disabled>\r\n      <br>\r\n      <label>Gender:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" [(ngModel)]=\"patient.gender\" value=\"{{patient.gender}}\" disabled>\r\n      <br>\r\n      <label>Contact No.:</label>\r\n      <input type=\"text\" class=\"form-control text-line text-center\" [(ngModel)]=\"patient.contactNo\" value=\"{{patient.contactNo}}\">\r\n      <br>\r\n      <label>Date of Birth:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" [(ngModel)]=\"patient.dob\" value=\"{{patient.dob}}\" disabled>\r\n      <br>\r\n      <label>Nationality:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" [(ngModel)]=\"patient.nationality\" value=\"{{patient.nationality}}\" disabled>  \r\n      <br>\r\n      <label>Address:</label>\r\n      <input type=\"text\" class=\"form-control text-line text-center\" [(ngModel)]=\"patient.address\" value=\"{{patient.address}}\">\r\n      <br>\r\n      <label>Postal Code:</label>\r\n      <input type=\"text\" class=\"form-control text-line text-center\" [(ngModel)]=\"patient.postalCode\" value=\"{{patient.postalCode}}\">\r\n\r\n      <button type=\"button\" class=\"btn btn-primary float-right\" id=\"save\" (click)=\"onSaved()\">Save</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#viewSide {\n  margin-top: 50px;\n  width: 250px; }\n\n#rightSide {\n  margin-top: 50px;\n  border-style: solid; }\n\n#rightInner {\n  margin: 5px;\n  padding: 10px; }\n\n.text-line {\n  border: none;\n  /* Get rid of the browser's styling */\n  border-bottom: 1px solid gray;\n  /* Add your own border */\n  background-color: transparent;\n  width: 100%; }\n\nlabel {\n  margin-top: 10px;\n  margin-bottom: 0px;\n  margin-right: 10px;\n  font-weight: bold; }\n\ninput:not([disabled]) {\n  border: 1px solid gray; }\n\n#save {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9maWxlL0Q6XFxTY2hvb2xcXE5hbnlhbmcgUG9seXRlY2huaWNcXEZpbmFsIFByb2plY3QgTllQXFxHcmFiSGVhbHRoV2ViXFxHcmFiSGVhbHRoV2ViL3NyY1xcYXBwXFxlZGl0LXByb2ZpbGVcXGVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQjtFQUNoQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxhQUFZO0VBQUUsc0NBQXNDO0VBQ3BELDhCQUE2QjtFQUFFLHlCQUF5QjtFQUN4RCw4QkFBNkI7RUFDN0IsWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN2aWV3U2lkZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4jcmlnaHRTaWRlIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4jcmlnaHRJbm5lciB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWxpbmUge1xyXG4gICAgYm9yZGVyOiBub25lOyAvKiBHZXQgcmlkIG9mIHRoZSBicm93c2VyJ3Mgc3R5bGluZyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7IC8qIEFkZCB5b3VyIG93biBib3JkZXIgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW5wdXQ6bm90KFtkaXNhYmxlZF0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbiNzYXZlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(router, patientService, flashMessagesService) {
        this.router = router;
        this.patientService = patientService;
        this.flashMessagesService = flashMessagesService;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.getPatientDetails().subscribe(function (res) {
            _this.patient = res['patient'];
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditProfileComponent.prototype.onSaved = function () {
        var _this = this;
        var flashMessagesService = this.flashMessagesService;
        this.patientService.editPatientDetails(this.patient).subscribe(function (res) {
            console.log(res);
            if (res['success']) {
                _this.patientService.getPatientDetails();
                flashMessagesService.show('Profile have been successfully updated', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                flashMessagesService.show('Error', { cssClass: 'alert-danger', timeout: 3000 });
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/edit-profile/edit-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/find-clinic/find-clinic.component.html":
/*!********************************************************!*\
  !*** ./src/app/find-clinic/find-clinic.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <table class=\"table\" id=\"header\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\"><h3><b>Book A Clinic</b></h3></th>\r\n          <th scope=\"col\">\r\n            <form class=\"form-inline my-2 float-right\">\r\n              <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n              <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"container text-center\">\r\n    <table class=\"table table-borderless\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\"><button type=\"button\" (click)=\"West = !West\" class=\"btn btn-outline-primary\">West</button></th>\r\n          <th scope=\"col\"><button type=\"button\" (click)=\"North = !North\" class=\"btn btn-outline-primary\">North</button></th>\r\n          <th scope=\"col\"><button type=\"button\" (click)=\"Central = !Central\" class=\"btn btn-outline-primary\">Central</button></th>\r\n          <th scope=\"col\"><button type=\"button\" (click)=\"Northeast = !Northeast\" class=\"btn btn-outline-primary\">Northeast</button></th>\r\n          <th scope=\"col\"><button type=\"button\" (click)=\"East = !East\" class=\"btn btn-outline-primary\">East</button></th>\r\n        </tr>\r\n      </thead>\r\n    </table>\r\n\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr *ngIf=\"West || North || Central || Northeast || East\">\r\n          <th scope=\"col\">Clinic Name</th>\r\n          <th scope=\"col\">Address</th>\r\n          <th scope=\"col\">Contact</th>\r\n          <th scope=\"col\">Location</th>\r\n          <th scope=\"col\">Book</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngFor=\"let clinic of clinics\">\r\n        <tr *ngIf=\"clinic.location === 'West' && West || clinic.location === 'North' && North || clinic.location === 'Central' && Central || clinic.location === 'Northeast' && Northeast || clinic.location === 'East' && East\">\r\n          <td>{{ clinic.name }}</td>\r\n          <td>{{ clinic.address }}</td>\r\n          <td>{{ clinic.contactNo }}</td>\r\n          <td>{{ clinic.location }}</td>\r\n          <td><button type=\"button\" (click)=\"viewBookingDetails(clinic)\" class=\"btn btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#bookingDetailsModal\"><i class=\"fa fa-book\"></i> Book</button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<!--Booking Details Modal Box-->\r\n<div>\r\n  <div class=\"modal fade\" id=\"bookingDetailsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"bookingDetailsModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"bookingDetailsModalTitle\"><strong>Booking Details</strong></h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        \r\n        <div class=\"modal-body\">\r\n          <div class=\"row rowspacing\">\r\n            <div class=\"col\">\r\n              <p><b>Date:</b> {{today | date: 'dd/MM/yyyy'}}</p>\r\n            </div>\r\n            <div class=\"col\">\r\n                <p><b>Time:</b> {{today | date: 'hh:mm:ss a'}}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row rowspacing\">\r\n            <div class=\"col\">\r\n              <p *ngIf=\"clinic\"><b>Name:</b> {{ clinic.name }}</p>\r\n              <p *ngIf=\"clinic\"><b>Address:</b> {{ clinic.address }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row rowspacing\">\r\n            <div class=\"col\">\r\n              <p *ngFor=\"let session of sessions\"><b>{{ session.name }}: </b>{{ session.value }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row rowspacing\">\r\n            <div class=\"col-6 col-sm-4\">\r\n              <p><b>Select Session:</b></p>\r\n            </div>\r\n            <div class=\"col-6 col-sm-4\">\r\n              <select class=\"form-control\" id=\"selectSession\" [(ngModel)]=\"selectSession\">\r\n                <option></option>\r\n                <option *ngFor=\"let session of sessions\">{{session.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#confirmBookingModal\" data-dismiss=\"modal\">Next</button>\r\n          <button type=\"button\" class=\"btn btn-outline-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--End of Booking Details Modal Box-->\r\n\r\n<!--Confirm Booking Modal Box-->\r\n<div>\r\n  <div class=\"modal fade\" id=\"confirmBookingModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"confirmBookingModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"confirmBookingModalTitle\"><strong>Confirm Booking</strong></h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        \r\n        <div class=\"modal-body\">\r\n          <div class=\"row rowspacing\">\r\n            <div class=\"col\">\r\n              <p><b>Please check the following details:</b></p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"border\">\r\n            <div class=\"row rowspacing\">\r\n              <div class=\"col\">\r\n                <p>The clinic you have chosen is <b>{{ clinic.name }}</b>.</p>\r\n                <p>The session you have selected is <b>{{ selectSession }}</b>.</p>\r\n                <p>To confirm and book, click on 'Book'. Thank you!</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#bookingDetailsModal\" data-dismiss=\"modal\">Back</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onBooking()\" data-dismiss=\"modal\">Book</button>\r\n          <button type=\"button\" class=\"btn btn-outline-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--End of Confirm Booking Modal Box-->"

/***/ }),

/***/ "./src/app/find-clinic/find-clinic.component.scss":
/*!********************************************************!*\
  !*** ./src/app/find-clinic/find-clinic.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-bottom: 20px; }\n\n.container {\n  font-size: 16px; }\n\n#header {\n  margin-top: 10px; }\n\n.border {\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZC1jbGluaWMvRDpcXFNjaG9vbFxcTmFueWFuZyBQb2x5dGVjaG5pY1xcRmluYWwgUHJvamVjdCBOWVBcXEdyYWJIZWFsdGhXZWJcXEdyYWJIZWFsdGhXZWIvc3JjXFxhcHBcXGZpbmQtY2xpbmljXFxmaW5kLWNsaW5pYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmluZC1jbGluaWMvZmluZC1jbGluaWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/find-clinic/find-clinic.component.ts":
/*!******************************************************!*\
  !*** ./src/app/find-clinic/find-clinic.component.ts ***!
  \******************************************************/
/*! exports provided: FindClinicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindClinicComponent", function() { return FindClinicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindClinicComponent = /** @class */ (function () {
    function FindClinicComponent(router, patientService, flashMessagesService) {
        this.router = router;
        this.patientService = patientService;
        this.flashMessagesService = flashMessagesService;
        this.today = Date.now();
        this.sessions = [
            { name: "Session 1", value: "0900 - 1300" },
            { name: "Session 2", value: "1400 - 1800" }
        ];
    }
    FindClinicComponent.prototype.ngOnInit = function () {
        this.getClinics();
    };
    FindClinicComponent.prototype.getClinics = function () {
        var _this = this;
        this.patientService.getClinics().subscribe(function (res) {
            _this.clinics = res['clinics'];
        }, function (err) {
            console.log(err);
        });
    };
    FindClinicComponent.prototype.viewBookingDetails = function (clinic) {
        this.clinic = clinic;
    };
    FindClinicComponent.prototype.onBooking = function () {
        var flashMessagesService = this.flashMessagesService;
        this.patientService.bookClinics(this.clinic).subscribe(function (res) {
            console.log(res);
            if (res['success']) {
                flashMessagesService.show('Successfully booked!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                flashMessagesService.show('You have already made a booking!', { cssClass: 'alert-danger', timeout: 3000 });
            }
        }, function (err) {
            console.log(err);
        });
    };
    FindClinicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find-clinic',
            template: __webpack_require__(/*! ./find-clinic.component.html */ "./src/app/find-clinic/find-clinic.component.html"),
            styles: [__webpack_require__(/*! ./find-clinic.component.scss */ "./src/app/find-clinic/find-clinic.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], FindClinicComponent);
    return FindClinicComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1 class=\"display-2\">GrabHealth</h1>\r\n  <h1 class=\"display-4\">Why choose us?</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../issue.service */ "./src/app/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(issueService) {
        this.issueService = issueService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.issueService.getIssues().subscribe(function (issues) {
            console.log(issues);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_1__["IssueService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/issue.service.ts":
/*!**********************************!*\
  !*** ./src/app/issue.service.ts ***!
  \**********************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IssueService = /** @class */ (function () {
    function IssueService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    IssueService.prototype.getIssues = function () {
        return this.http.get(this.uri + "/issues");
    };
    IssueService.prototype.getIssueById = function (id) {
        return this.http.get(this.uri + "/issues/" + id);
    };
    IssueService.prototype.addIssue = function (title, responsible, description, severity) {
        var issue = {
            title: title,
            responsible: responsible,
            description: description,
            severity: severity
        };
        return this.http.post(this.uri + "/issues/add", issue);
    };
    IssueService.prototype.updateIssue = function (id, title, responsible, description, severity, status) {
        var issue = {
            title: title,
            responsible: responsible,
            description: description,
            severity: severity,
            status: status
        };
        return this.http.post(this.uri + "/issues/update/" + id, issue);
    };
    IssueService.prototype.deleteIssue = function (id) {
        return this.http.get(this.uri + "/issues/delete/" + id);
    };
    IssueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IssueService);
    return IssueService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"Absolute-Center is-Responsive\">\r\n                <div class=\"col-sm-12 col-md-10 col-md-offset-1\">\r\n                    <div class=\"form-group input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"material-icons\">person</i></span>\r\n                        <input type=\"text\" placeholder=\"email\" class=\"form-control text-line\" id=\"email\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.email.errors }\">\r\n                        <div *ngIf=\"submitted && loginForm.controls.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"loginForm.controls.email.errors.required\">Required!</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group input-group\">    \r\n                            <span class=\"input-group-addon\"><i class=\"material-icons\">lock</i></span>\r\n                            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" id=\"password\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.password.errors }\">\r\n                            <div *ngIf=\"submitted && loginForm.controls.password.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"loginForm.controls.password.errors.required\">Required!</div>\r\n                            </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group text-right\">\r\n                        <a href=\"#\" data-toggle=\"modal\" data-target=\"#modal\">Forget Password</a>\r\n\r\n                        <div class=\"modal\" id=\"modal\">\r\n                            <div class=\"modal-dialog\" role=\"document\">\r\n                              <div class=\"modal-content\">\r\n                                <div class=\"modal-header\">\r\n                                  <h5 class=\"modal-title\"><strong>Reset Password</strong></h5>\r\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                  </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                  <p class=\"text-center\">Please enter the following details to request for a password reset.</p>\r\n                                  <div class=\"col text-left\">\r\n                                        <label for=\"contactNo\">Contact No.:</label>\r\n                                        <input type = \"text\" class=\"col-sm-5 form-control\" id=\"contactNo\" formControlName = \"contactNo\">\r\n                                        <label for=\"nric\">NRIC Issue Date:</label>\r\n                                        <input type = \"date\" class=\"col-sm-5 form-control\" id=\"nric\" formControlName = \"nric\">\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                  <button type=\"button\" class=\"btn btn-outline-primary\">Send</button>\r\n                                  <button type=\"button\" class=\"btn btn-outline-secondary\" data-dismiss=\"modal\">Close</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                    </div>\r\n                    \r\n\r\n                    <div class=\"form-group float-right\">\r\n                        <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Absolute-Center {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.Absolute-Center.is-Responsive {\n  width: 50%;\n  height: 50%;\n  min-width: 200px;\n  max-width: 400px;\n  padding: 40px; }\n\ndiv.well {\n  height: 250px; }\n\n.invalid-feedback {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFNjaG9vbFxcTmFueWFuZyBQb2x5dGVjaG5pY1xcRmluYWwgUHJvamVjdCBOWVBcXEdyYWJIZWFsdGhXZWJcXEdyYWJIZWFsdGhXZWIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsT0FBTTtFQUFFLFFBQU87RUFBRSxVQUFTO0VBQUUsU0FBUSxFQUNyQzs7QUFFRDtFQUNFLFdBQVU7RUFDVixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5BYnNvbHV0ZS1DZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwOyBsZWZ0OiAwOyBib3R0b206IDA7IHJpZ2h0OiAwO1xyXG59XHJcbiAgXHJcbi5BYnNvbHV0ZS1DZW50ZXIuaXMtUmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDUwJTsgXHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuXHJcbmRpdi53ZWxse1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn0gXHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, patientService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.patientService = patientService;
        this.submitted = false;
        this.success = false;
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.patientService.authenticatePatient(this.loginForm.value).subscribe(function (res) {
            if (res['success']) {
                _this.patientService.storePatientData(res['token'], res['patient']);
                _this.router.navigateByUrl('profile');
            }
        }, function (err) {
            console.log(err);
            _this.router.navigateByUrl('login');
        });
        this.success = true;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">{{appTitle}}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/patient\" routerLinkActive=\"active\" *ngIf=\"!patientService.loggedIn()\" class=\"nav-link\">Sign Up</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/login\" routerLinkActive=\"active\" *ngIf=\"!patientService.loggedIn()\" class=\"nav-link\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" *ngIf=\"patientService.loggedIn()\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Welcome</a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" *ngIf=\"patientService.loggedIn()\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>\r\n          <a class=\"dropdown-item\" *ngIf=\"patientService.loggedIn()\" routerLink=\"/find-clinic\" routerLinkActive=\"active\">Make An Appointment</a>\r\n          <a class=\"dropdown-item\" *ngIf=\"patientService.loggedIn()\" routerLink=\"/booking-status\" routerLinkActive=\"active\">Appointment Status</a>\r\n          <a class=\"dropdown-item\" *ngIf=\"patientService.loggedIn()\" routerLink=\"/visit-history\" routerLinkActive=\"active\">Visit History</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a (click)=\"onLogoutClick()\" routerLinkActive=\"active\" *ngIf=\"patientService.loggedIn()\" class=\"nav-link\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(router, patientService) {
        this.router = router;
        this.patientService = patientService;
        this.appTitle = 'GrabHealth';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.onLogoutClick = function () {
        this.patientService.logout();
        this.router.navigateByUrl('/');
        return false;
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/patient/patient.component.html":
/*!************************************************!*\
  !*** ./src/app/patient/patient.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"Absolute-Center is-Responsive col-sm-12 col-md-10 col-md-offset-1\">\r\n        <div class=\"form-group\">\r\n          <label for=\"firstName\">First Name:</label>\r\n            <input type = \"text\" class=\"form-control\" id=\"firstName\" formControlName = \"firstName\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.firstName.errors }\">\r\n            <div *ngIf=\"submitted && registrationForm.controls.firstName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.firstName.errors.required\">Required!</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"lastName\">Last Name:</label>\r\n            <input type = \"text\" class=\"form-control\" id=\"lastName\" formControlName = \"lastName\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.lastName.errors }\">\r\n            <div *ngIf=\"submitted && registrationForm.controls.lastName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.lastName.errors.required\">Required!</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"nric\">NRIC/ Passport No.:</label>\r\n            <input type = \"text\" class=\"form-control\" id=\"nric\" formControlName = \"nric\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.nric.errors }\">\r\n            <div *ngIf=\"submitted && registrationForm.controls.nric.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.nric.errors.required\">Required!</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"contactNo\">Contact No.:</label>\r\n            <input type = \"text\" class=\"form-control\" id=\"contactNo\" formControlName = \"contactNo\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.contactNo.errors }\">\r\n            <div *ngIf=\"submitted && registrationForm.controls.contactNo.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.contactNo.errors.required\">Required!</div>\r\n            </div>\r\n        </div>\r\n      \r\n        <div class=\"form-group\">\r\n          <label for=\"gender\">Gender:</label>\r\n            <select class=\"form-control\" id=\"gender\" formControlName = \"gender\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.gender.errors }\">\r\n              <option>Male</option>\r\n              <option>Female</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && registrationForm.controls.gender.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.gender.errors.required\">Required!</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"dob\">Date of Birth:</label>\r\n            <input type = \"date\" class=\"form-control\" id=\"dob\" formControlName = \"dob\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.dob.errors }\">\r\n            <div *ngIf=\"submitted && registrationForm.controls.dob.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.dob.errors.required\">Required!</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"address\">Address:</label>\r\n            <input type = \"text\" placeholder=\"Blk 111 Happy Street 01\" class=\"form-control\" id=\"address\" formControlName = \"address\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.address.errors }\">\r\n            <div *ngIf=\"submitted && registrationForm.controls.address.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.address.errors.required\">Required!</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"postalCode\">Postal Code:</label>\r\n            <input type = \"text\" placeholder=\"512111\" class=\"form-control\" id=\"postalCode\" formControlName = \"postalCode\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.postalCode.errors }\">\r\n            <div *ngIf=\"submitted && registrationForm.controls.postalCode.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.postalCode.errors.required\">Required!</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"nationality\">Nationality:</label>\r\n            <input type = \"text\" class=\"form-control\" id=\"nationality\" formControlName = \"nationality\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.nationality.errors }\">\r\n            <div *ngIf=\"submitted && registrationForm.controls.nationality.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.nationality.errors.required\">Required!</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"attach\">Attach IC/ Passport Photo:</label>\r\n          <div class=\"input-group mb-3\">\r\n            <div class=\"custom-file\">\r\n              <input type=\"file\" class=\"form-control custom-file-input\" id=\"attach\" formControlName = \"attach\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.attach.errors }\">\r\n              <label class=\"custom-file-label\" for=\"attach\">Choose file</label>\r\n            </div>\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\" id=\"\">Upload</span>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"submitted && registrationForm.controls.attach.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"registrationForm.controls.attach.errors.required\">Required!</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email:</label>\r\n            <input type = \"text\" class=\"form-control\" id=\"email\" formControlName = \"email\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.email.errors }\">\r\n            <div *ngIf=\"submitted && registrationForm.controls.email.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.email.errors.required\">Required!</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password:</label>\r\n            <input type = \"password\" class=\"form-control\" id=\"password\" formControlName = \"password\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.password.errors }\">\r\n            <div *ngIf=\"submitted && registrationForm.controls.password.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.password.errors.required\">Required!</div>\r\n            </div>\r\n            <label class=\"invalid-feedback\" *ngIf=\"registrationForm.controls['password'].hasError('minlength')\">Must be at least 8 characters</label>\r\n            <label class=\"invalid-feedback\" *ngIf=\"registrationForm.controls['password'].hasError('hasNumber')\">Must contain at least 1 number</label>\r\n            <label class=\"invalid-feedback\" *ngIf=\"registrationForm.controls['password'].hasError('hasUpperCase')\">Must contain at least 1 Upper Case</label>\r\n            <label class=\"invalid-feedback\" *ngIf=\"registrationForm.controls['password'].hasError('hasLowerCase')\">Must be at least 1 Lower Case</label>\r\n            <label class=\"invalid-feedback\" *ngIf=\"registrationForm.controls['password'].hasError('hasSpecialCharacters')\">Must be at least 1 Special Character</label>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"confirmPassword\">Confirm Password:</label>\r\n          <input  type=\"password\" class=\"form-control\" id=\"confirmPassword\" formControlName=\"confirmPassword\" [ngClass]=\"{ 'is-invalid': submitted && registrationForm.controls.confirmPassword.errors }\">\r\n            <div *ngIf=\"submitted && registrationForm.controls.password.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"registrationForm.controls.password.errors.required\">Required!</div>\r\n            </div>\r\n            <label class=\"invalid-feedback\" *ngIf=\"registrationForm.controls['confirmPassword'].hasError('NoPassswordMatch')\">Password do not match</label>\r\n        </div>\r\n\r\n        <div class=\"form-group float-right\">\r\n          <button class=\"btn btn-primary \" type=\"submit\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/patient/patient.component.scss":
/*!************************************************!*\
  !*** ./src/app/patient/patient.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Absolute-Center {\n  margin: auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding: 50px; }\n\n.Absolute-Center.is-Responsive {\n  width: 50%;\n  height: 50%;\n  min-width: 200px;\n  max-width: 400px; }\n\ndiv.well {\n  height: 250px; }\n\nlabel, .invalid-feedback {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9EOlxcU2Nob29sXFxOYW55YW5nIFBvbHl0ZWNobmljXFxGaW5hbCBQcm9qZWN0IE5ZUFxcR3JhYkhlYWx0aFdlYlxcR3JhYkhlYWx0aFdlYi9zcmNcXGFwcFxccGF0aWVudFxccGF0aWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsUUFBTztFQUFFLFNBQVE7RUFDakIsY0FBYSxFQUNkOztBQUVEO0VBQ0UsV0FBVTtFQUNWLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFic29sdXRlLUNlbnRlciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwOyByaWdodDogMDtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcbiAgXHJcbi5BYnNvbHV0ZS1DZW50ZXIuaXMtUmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDUwJTsgXHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG5kaXYud2VsbHtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59IFxyXG5cclxubGFiZWwsIC5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/patient/patient.component.ts":
/*!**********************************************!*\
  !*** ./src/app/patient/patient.component.ts ***!
  \**********************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-validators */ "./src/app/custom-validators.ts");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientComponent = /** @class */ (function () {
    function PatientComponent(formBuilder, patientService, router) {
        this.formBuilder = formBuilder;
        this.patientService = patientService;
        this.router = router;
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('firstName'),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('lastName'),
            nric: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('nric'),
            contactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('contactNo'),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('gender'),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('dob'),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('address'),
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('postalCode'),
            nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('nationality'),
            attach: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('attach'),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('email'),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('password'),
        });
        this.submitted = false;
        this.success = false;
        this.registrationForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nric: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contactNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            attach: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].patternValidator(/\d/, { hasNumber: true }),
                    _custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].patternValidator(/[A-Z]/, { hasUpperCase: true }),
                    _custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].patternValidator(/[a-z]/, { hasLowerCase: true }),
                    _custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: _custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].passwordMatchValidator
        });
    }
    PatientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registrationForm.invalid) {
            return;
        }
        this.patientService.registerPatient(this.registrationForm.value).subscribe(function (res) {
            if (res['success'])
                _this.router.navigateByUrl('login');
        }, function (err) {
            console.log(err);
        });
        this.success = true;
    };
    PatientComponent.prototype.ngOnInit = function () {
    };
    PatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.scss */ "./src/app/patient/patient.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"patient\" class=\"container col\">\r\n  <div class=\"list-group float-left\">\r\n    <a routerLink=\"/profile\" class=\"list-group-item list-group-item-action active text-center\" id=\"viewSide\">View Profile</a>\r\n    <a routerLink=\"/edit-profile\" class=\"list-group-item list-group-item-action text-center\" id=\"editSide\">Edit Profile</a>\r\n  </div>\r\n\r\n  <div class=\"container float-right\" id=\"rightSide\">\r\n    <div class=\"container col-sm-2 float-left text-center\" id=\"rightInner\">\r\n        <img src=\"{{patient.attach}}\" width=\"150px\"/>\r\n        <label>Email:</label>\r\n        <input type=\"text\" class=\"text-line text-center\" value=\"{{patient.email}}\" disabled>\r\n        <br>\r\n        <label>Password:</label>\r\n        <input type=\"password\" class=\"text-line text-center\" value=\"{{patient.password}}\" disabled>\r\n    </div>\r\n    \r\n    <div class=\"container col-sm-9 float-right\" id=\"rightInner\">\r\n      <label>First Name:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" value=\"{{patient.firstName}}\" disabled>\r\n      <br>\r\n      <label>Last Name:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" value=\"{{patient.lastName}}\" disabled>\r\n      <br>\r\n      <label>NRIC/Passport No.:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" value=\"{{patient.nric}}\" disabled>\r\n      <br>\r\n      <label>Gender:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" value=\"{{patient.gender}}\" disabled>\r\n      <br>\r\n      <label>Contact No.:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" value=\"{{patient.contactNo}}\" disabled>\r\n      <br>\r\n      <label>Date of Birth:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" value=\"{{patient.dob}}\" disabled>\r\n      <br>\r\n      <label>Nationality:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" value=\"{{patient.nationality}}\" disabled>  \r\n      <br>\r\n      <label>Address:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" value=\"{{patient.address}}\" disabled>\r\n      <br>\r\n      <label>Postal Code:</label>\r\n      <input type=\"text\" class=\"text-line text-center\" value=\"{{patient.postalCode}}\" disabled>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#viewSide {\n  margin-top: 50px;\n  width: 250px; }\n\n#rightSide {\n  margin-top: 50px;\n  border-style: solid; }\n\n#rightInner {\n  margin: 5px;\n  padding: 10px; }\n\n.text-line {\n  border: none;\n  /* Get rid of the browser's styling */\n  border-bottom: 1px solid gray;\n  /* Add your own border */\n  background-color: transparent;\n  width: 100%; }\n\nlabel {\n  margin-top: 10px;\n  margin-bottom: 0px;\n  margin-right: 10px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcU2Nob29sXFxOYW55YW5nIFBvbHl0ZWNobmljXFxGaW5hbCBQcm9qZWN0IE5ZUFxcR3JhYkhlYWx0aFdlYlxcR3JhYkhlYWx0aFdlYi9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQjtFQUNoQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxhQUFZO0VBQUUsc0NBQXNDO0VBQ3BELDhCQUE2QjtFQUFFLHlCQUF5QjtFQUN4RCw4QkFBNkI7RUFDN0IsWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZpZXdTaWRlIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbiNyaWdodFNpZGUge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiNyaWdodElubmVyIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRleHQtbGluZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7IC8qIEdldCByaWQgb2YgdGhlIGJyb3dzZXIncyBzdHlsaW5nICovXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTsgLyogQWRkIHlvdXIgb3duIGJvcmRlciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, patientService) {
        this.router = router;
        this.patientService = patientService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.getPatientDetails().subscribe(function (res) {
            _this.patient = res['patient'];
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/patient.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientService = /** @class */ (function () {
    function PatientService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
    }
    PatientService.prototype.registerPatient = function (patient) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:4000/patient/register', patient, { headers: headers });
    };
    PatientService.prototype.authenticatePatient = function (patient) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:4000/patient/authenticate', patient, { headers: headers });
    };
    PatientService.prototype.getPatientDetails = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:4000/patient/profile', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': localStorage.getItem("id_token"),
                'Content-Type': 'application/json'
            }) });
    };
    PatientService.prototype.storePatientData = function (token, patient) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('patient', JSON.stringify(patient));
        this.authToken = token;
        this.patient = patient;
    };
    PatientService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    PatientService.prototype.logout = function () {
        this.authToken = null;
        this.patient = null;
        localStorage.clear();
    };
    PatientService.prototype.loggedIn = function () {
        if (this.loadToken) {
            if (!this.jwtHelperService.isTokenExpired(this.authToken))
                return true;
        }
        else {
            return false;
        }
    };
    //Get Clinic List
    PatientService.prototype.getClinics = function () {
        return this.http.get('http://localhost:4000/patient/getClinic');
    };
    //Book Clinic
    PatientService.prototype.bookClinics = function (clinic) {
        return this.http.post('http://localhost:4000/patient/bookClinic', clinic, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': localStorage.getItem("id_token")
            }) });
    };
    PatientService.prototype.editPatientDetails = function (patient) {
        return this.http.post('http://localhost:4000/patient/editPatientDetail', patient, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': localStorage.getItem("id_token")
            }) });
    };
    //Get Patient's Appointment
    PatientService.prototype.getBookedClinics = function () {
        return this.http.get('http://localhost:4000/patient/getBookedClinic', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': localStorage.getItem("id_token")
            }) });
    };
    PatientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/app/visit-history/visit-history.component.html":
/*!************************************************************!*\
  !*** ./src/app/visit-history/visit-history.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <table class=\"table\" id=\"header\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\"><h3><b>View Visit History</b></h3></th>\r\n        </tr>\r\n      </thead>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"container text-center\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Date</th>\r\n          <th scope=\"col\">Receipt Number</th>\r\n          <th scope=\"col\">View e-Receipt</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/visit-history/visit-history.component.scss":
/*!************************************************************!*\
  !*** ./src/app/visit-history/visit-history.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-bottom: 20px; }\n\n.container {\n  font-size: 16px; }\n\n#header {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXQtaGlzdG9yeS9EOlxcU2Nob29sXFxOYW55YW5nIFBvbHl0ZWNobmljXFxGaW5hbCBQcm9qZWN0IE5ZUFxcR3JhYkhlYWx0aFdlYlxcR3JhYkhlYWx0aFdlYi9zcmNcXGFwcFxcdmlzaXQtaGlzdG9yeVxcdmlzaXQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmlzaXQtaGlzdG9yeS92aXNpdC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/visit-history/visit-history.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/visit-history/visit-history.component.ts ***!
  \**********************************************************/
/*! exports provided: VisitHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitHistoryComponent", function() { return VisitHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisitHistoryComponent = /** @class */ (function () {
    function VisitHistoryComponent() {
    }
    VisitHistoryComponent.prototype.ngOnInit = function () {
    };
    VisitHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visit-history',
            template: __webpack_require__(/*! ./visit-history.component.html */ "./src/app/visit-history/visit-history.component.html"),
            styles: [__webpack_require__(/*! ./visit-history.component.scss */ "./src/app/visit-history/visit-history.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VisitHistoryComponent);
    return VisitHistoryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\School\Nanyang Polytechnic\Final Project NYP\GrabHealthWeb\GrabHealthWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map