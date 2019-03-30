(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_table_body_table_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/table-body/table-body.component */ "./src/app/components/table-body/table-body.component.ts");
/* harmony import */ var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/authentication/authentication.component */ "./src/app/components/authentication/authentication.component.ts");





var routes = [
    { path: 'table-body', component: _components_table_body_table_body_component__WEBPACK_IMPORTED_MODULE_3__["TableBodyComponent"] },
    { path: '', component: _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticationComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-header></app-header>\n<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0M6XFxVc2Vyc1xcQW50b25fS3VsYmFzaG55aVxcV2Vic3Rvcm1Qcm9qZWN0c1xcc2NydW0tYm9hcmRcXHNjcnVtLWJvYXJkXFxzcmNcXGFwcFxcY29tcG9uZW50cy8uLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoiLi4vYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'scrum-board';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_table_body_table_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/table-body/table-body.component */ "./src/app/components/table-body/table-body.component.ts");
/* harmony import */ var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/authentication/authentication.component */ "./src/app/components/authentication/authentication.component.ts");
/* harmony import */ var _services_sections_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/sections.service */ "./src/app/services/sections.service.ts");
/* harmony import */ var _components_new_card_new_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/new-card/new-card.component */ "./src/app/components/new-card/new-card.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_table_body_table_body_component__WEBPACK_IMPORTED_MODULE_6__["TableBodyComponent"],
                _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_7__["AuthenticationComponent"],
                _components_new_card_new_card_component__WEBPACK_IMPORTED_MODULE_9__["NewCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [_services_sections_service__WEBPACK_IMPORTED_MODULE_8__["SectionsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card.ts":
/*!*************************!*\
  !*** ./src/app/card.ts ***!
  \*************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card(title, description, section_id) {
        this.title = title;
        this.description = description;
        this.section_id = section_id;
        this.title = title;
        this.description = description;
        this.section_id = section_id;
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/components/authentication/authentication.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication\">\n  <label>\n    <span>email</span>\n    <input class=\"input\" type=\"email\">\n  </label>\n  <label>\n    <span>password</span>\n    <input class=\"input\" type=\"password\">\n  </label>\n  <a routerLink=\"/table-body\" routerLinkActive=\"active\">\n    <input class=\"submit\" type=\"submit\" value=\"log in\">\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/authentication/authentication.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #663399;\n  background-color: #663399;\n  font-family: 'Baloo Chettan', cursive;\n  width: 500px;\n  height: 300px; }\n\nlabel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px; }\n\ninput {\n  border: 1px solid #fff;\n  margin: 0 auto;\n  background-color: #ba75ff;\n  color: white; }\n\n.submit {\n  padding: 10px 20px;\n  background-color: #fff;\n  color: #663399; }\n\n.submit:hover {\n    background-color: #639;\n    color: #ffffff;\n    transition: color, background-color ease .9s; }\n\nspan {\n  color: white;\n  text-transform: uppercase;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uL0M6XFxVc2Vyc1xcQW50b25fS3VsYmFzaG55aVxcV2Vic3Rvcm1Qcm9qZWN0c1xcc2NydW0tYm9hcmRcXHNjcnVtLWJvYXJkXFxzcmNcXGFwcFxcY29tcG9uZW50cy9hdXRoZW50aWNhdGlvblxcYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFJZjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUhoQjtJQU1JLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsNENBQTRDLEVBQUE7O0FBSWhEO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjLEVBQUEiLCJmaWxlIjoiYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aGVudGljYXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjMzOTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2MzM5OTtcclxuICBmb250LWZhbWlseTogJ0JhbG9vIENoZXR0YW4nLCBjdXJzaXZlO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE3NWZmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICM2NjMzOTk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzOTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgZWFzZSAuOXM7XHJcbiAgfVxyXG59XHJcblxyXG5zcGFuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/authentication/authentication.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.ts ***!
  \***********************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/components/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.scss */ "./src/app/components/authentication/authentication.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1 class=\"header__title\">\n    {{header | uppercase }}\n  </h1>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: fixed;\n  top: 0;\n  font-family: 'Baloo Chettan', cursive;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  width: 100%;\n  background-color: #639; }\n  .header__title {\n    margin: 0 auto;\n    color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9DOlxcVXNlcnNcXEFudG9uX0t1bGJhc2hueWlcXFdlYnN0b3JtUHJvamVjdHNcXHNjcnVtLWJvYXJkXFxzY3J1bS1ib2FyZFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7RUFHdEI7SUFDRSxjQUFjO0lBQ2QsV0FBVyxFQUFBIiwiZmlsZSI6ImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmFsb28gQ2hldHRhbicsIGN1cnNpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzOTtcclxuXHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.header = 'scrum board';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/new-card/new-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/new-card/new-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-card\">\n  <input type=\"submit\" value=\"new card\" (click)=\"addItem()\">\n  <input type=\"text\" placeholder=\"title\" [(ngModel)]=\"title\">\n  <input type=\"text\" placeholder=\"description\" [(ngModel)]=\"description\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-card/new-card.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/new-card/new-card.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-card {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  bottom: 0;\n  background-color: #dcbaff;\n  width: 100%;\n  text-align: center;\n  color: #663399; }\n\ninput {\n  background-color: #dcbaff;\n  margin: 10px;\n  border: none;\n  border-bottom: 2px solid #663399;\n  color: #663399; }\n\ninput::-webkit-input-placeholder {\n  color: rebeccapurple; }\n\ninput::-ms-input-placeholder {\n  color: rebeccapurple; }\n\ninput::placeholder {\n  color: rebeccapurple; }\n\ninput[type='submit'] {\n  border: 2px solid #663399;\n  cursor: pointer; }\n\ninput[type='submit']:hover {\n    background-color: rebeccapurple;\n    color: white;\n    transition: color, background-color 1s ease; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1jYXJkL0M6XFxVc2Vyc1xcQW50b25fS3VsYmFzaG55aVxcV2Vic3Rvcm1Qcm9qZWN0c1xcc2NydW0tYm9hcmRcXHNjcnVtLWJvYXJkXFxzcmNcXGFwcFxcY29tcG9uZW50cy9uZXctY2FyZFxcbmV3LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBRHRCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBRHRCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFGakI7SUFJSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLDJDQUEyQyxFQUFBIiwiZmlsZSI6Im5ldy1jYXJkL25ldy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNiYWZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzY2MzM5OTtcclxufVxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjYmFmZjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjYzMzk5O1xyXG4gIGNvbG9yOiAjNjYzMzk5O1xyXG59XHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdzdWJtaXQnXSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzY2MzM5OTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/new-card/new-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/new-card/new-card.component.ts ***!
  \***********************************************************/
/*! exports provided: NewCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCardComponent", function() { return NewCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/card.service */ "./src/app/services/card.service.ts");



var NewCardComponent = /** @class */ (function () {
    function NewCardComponent(cardService) {
        this.cardService = cardService;
    }
    NewCardComponent.prototype.ngOnInit = function () {
    };
    NewCardComponent.prototype.addItem = function () {
        this.cardService.addCard(this.title, this.description, this.cardId);
        this.title = '';
        this.description = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NewCardComponent.prototype, "cardId", void 0);
    NewCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-card',
            template: __webpack_require__(/*! ./new-card.component.html */ "./src/app/components/new-card/new-card.component.html"),
            styles: [__webpack_require__(/*! ./new-card.component.scss */ "./src/app/components/new-card/new-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]])
    ], NewCardComponent);
    return NewCardComponent;
}());



/***/ }),

/***/ "./src/app/components/table-body/table-body.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/table-body/table-body.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-body\">\n  <div *ngFor=\"let section of sections\" class=\"section\">\n    <header class=\"header\">\n      {{ section.name | uppercase}}\n    </header>\n    <div>\n      <ng-container *ngFor=\"let item of cards; let id = index\">\n        <div *ngIf=\"item.section_id === section.id\" class=\"card\">\n          <div>\n            <i class=\"fas fa-times close\" (click)=\"onDelete(id)\"></i>\n            <h3>\n              {{item.title | uppercase}}\n            </h3>\n            <div class=\"description\">\n              {{item.description}}\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n    <app-new-card [cardId] = section.id></app-new-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/table-body/table-body.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/table-body/table-body.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-body {\n  border: 2px solid #663399;\n  width: 1000px;\n  height: 500px;\n  display: flex;\n  justify-content: space-around;\n  font-family: 'Baloo Chettan', cursive; }\n\n.section {\n  width: 100%; }\n\n.section:not(:last-child) {\n  border-right: 2px solid #639; }\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  height: 50px;\n  background-color: #639;\n  color: white; }\n\n.card {\n  position: relative;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: 0;\n  background-color: #ba75ff;\n  border-bottom: 2px solid #663399;\n  color: white; }\n\nh3 {\n  margin: 0;\n  font-weight: normal;\n  text-align: center; }\n\n.close {\n  top: 5px;\n  right: 5px;\n  position: absolute;\n  cursor: pointer; }\n\n.description {\n  padding: 5px; }\n\n.section {\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWJvZHkvQzpcXFVzZXJzXFxBbnRvbl9LdWxiYXNobnlpXFxXZWJzdG9ybVByb2plY3RzXFxzY3J1bS1ib2FyZFxcc2NydW0tYm9hcmRcXHNyY1xcYXBwXFxjb21wb25lbnRzL3RhYmxlLWJvZHlcXHRhYmxlLWJvZHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoidGFibGUtYm9keS90YWJsZS1ib2R5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWJvZHkge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NjMzOTk7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZm9udC1mYW1pbHk6ICdCYWxvbyBDaGV0dGFuJywgY3Vyc2l2ZTtcclxufVxyXG4uc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNlY3Rpb246bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzYzOTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhNzVmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2MzM5OTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/table-body/table-body.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/table-body/table-body.component.ts ***!
  \***************************************************************/
/*! exports provided: TableBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBodyComponent", function() { return TableBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sections.service */ "./src/app/services/sections.service.ts");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/card.service */ "./src/app/services/card.service.ts");




var TableBodyComponent = /** @class */ (function () {
    function TableBodyComponent(section, card) {
        this.section = section;
        this.card = card;
        this.cards = [];
        this.sections = [];
    }
    TableBodyComponent.prototype.ngOnInit = function () {
        this.sections = this.section.getData();
        this.cards = this.card.getCard();
    };
    TableBodyComponent.prototype.onDelete = function (id) {
        // arr = arr.filter(val => val !== "red");
        //     // this.cards =this.cards.filter(id => id != id)
        console.log(this.cards, id);
    };
    TableBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-body',
            template: __webpack_require__(/*! ./table-body.component.html */ "./src/app/components/table-body/table-body.component.html"),
            styles: [__webpack_require__(/*! ./table-body.component.scss */ "./src/app/components/table-body/table-body.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sections_service__WEBPACK_IMPORTED_MODULE_2__["SectionsService"],
            _services_card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"]])
    ], TableBodyComponent);
    return TableBodyComponent;
}());



/***/ }),

/***/ "./src/app/services/card.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/card.service.ts ***!
  \******************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card */ "./src/app/card.ts");



var CardService = /** @class */ (function () {
    function CardService() {
        this.card = [
            new _card__WEBPACK_IMPORTED_MODULE_2__["Card"]('task1', 'some work 1', 1),
            new _card__WEBPACK_IMPORTED_MODULE_2__["Card"]('task2', 'some work 2', 2),
            new _card__WEBPACK_IMPORTED_MODULE_2__["Card"]('task3', 'some work 3', 3),
            new _card__WEBPACK_IMPORTED_MODULE_2__["Card"]('task4', 'some work 4', 1),
        ];
    }
    CardService.prototype.getCard = function () {
        return this.card;
    };
    CardService.prototype.addCard = function (title, description, section_id) {
        this.card.push(new _card__WEBPACK_IMPORTED_MODULE_2__["Card"](title, description, section_id));
        console.log(this.card);
    };
    CardService.prototype.deleteCard = function () {
    };
    CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/services/sections.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/sections.service.ts ***!
  \**********************************************/
/*! exports provided: SectionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsService", function() { return SectionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionsService = /** @class */ (function () {
    function SectionsService() {
        this.section = [
            { name: "to do", id: 1 },
            { name: "in progress", id: 2 },
            { name: "testing", id: 3 },
            { name: "done", id: 4 },
        ];
    }
    SectionsService.prototype.getData = function () {
        return this.section;
    };
    SectionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SectionsService);
    return SectionsService;
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

module.exports = __webpack_require__(/*! C:\Users\Anton_Kulbashnyi\WebstormProjects\scrum-board\scrum-board\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map