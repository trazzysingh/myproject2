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



var routes = [];
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    <trazzy-app></trazzy-app>\n    Welcome to my Space Work {{ title }}!\n  </h1> \n  <employee-list></employee-list> \n  <br>\n    <br>\n    Welcome Employee Details\n    <employee-app></employee-app>\n \n  </div>\n"

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
        this.title = 'Pro Work';
        this.name = 'hi';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hoot',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _workpro_workpro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workpro/workpro.component */ "./src/app/workpro/workpro.component.ts");
/* harmony import */ var _employee_EmployeeComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/EmployeeComponent */ "./src/app/employee/EmployeeComponent.ts");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employeelist/employeelist.component */ "./src/app/employeelist/employeelist.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _workpro_workpro_component__WEBPACK_IMPORTED_MODULE_6__["WorkproComponent"], _employee_EmployeeComponent__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"], _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_8__["EmployeelistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _workpro_workpro_component__WEBPACK_IMPORTED_MODULE_6__["WorkproComponent"], _employee_EmployeeComponent__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"], _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_8__["EmployeelistComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employee/EmployeeComponent.ts":
/*!***********************************************!*\
  !*** ./src/app/employee/EmployeeComponent.ts ***!
  \***********************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
        this.fname = "Tajinder";
        this.lname = "Singh";
        this.gender = "Male";
        this.age = 24;
        //also use Interpolation video 8 
        this.myimage = "https://www.w3.org/html/logo/downloads/HTML5_Logo_64.png";
        this.isdisable = false;
        // Attribute Binding Video 11
        this.colsapn = 2;
        this.isDetails = true;
        this.printmyname = "TrazzysingH";
    }
    EmployeeComponent.prototype.getfullname = function () {
        return this.fname + " " + this.lname;
    };
    // Event Binding
    EmployeeComponent.prototype.onclick = function () {
        console.log("Hello Every One Button Is Clicked");
    };
    EmployeeComponent.prototype.showddtails = function () {
        // alert("Hi");
        this.isDetails = !this.isDetails;
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employee-app',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: ["table{height:400px;padding:10;margin:10px;}"]
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table border=\"1\">\r\n    \r\n        <tr>\r\n                <td><input type=\"text\" [(ngModel)]=\"printmyname\">\r\n                  </td>\r\n                <td>\r\n                    <p>{{printmyname}}</p>\r\n                </td>\r\n        \r\n            </tr>\r\n    <tr>\r\n        <td><button (click)=\"showddtails()\">{{isDetails ? 'Show Deatils' : 'Hide Details' }}</button></td>\r\n        <td>\r\n            <p *ngIf=\"isDetails\">Details Printed.........</p>\r\n        </td>\r\n\r\n    </tr>\r\n    <tr>\r\n        <td><button (click)=\"onclick()\">Click Me</button></td>\r\n        <td><button on-click=\"onclick()\">Click Me</button></td>\r\n\r\n    </tr>\r\n    <tr>\r\n        <!----cause colspan is not property of Dom We use atter to do this--->\r\n\r\n        <!----Use Properties Bindding-->\r\n        <th [attr.colspan]=\"colsapn\">This is header </th>\r\n        <!----use Interpolation....\r\n        // <th attr.colspan=\"{{colsapn}}\">This is header </th>-->\r\n\r\n    </tr>\r\n    <tr>\r\n        <td><button disabled=\"{{isdisable}}\">Interpolation </button></td>\r\n        <td><button [disabled]=\"isdisable\">Property Binding</button></td>\r\n    </tr>\r\n    <tr>\r\n        <td><img src=\"{{myimage}}\"></td>\r\n        <td><img [src]=\"myimage\"></td>\r\n\r\n\r\n    </tr>\r\n    <tr>\r\n        <td>My full Name</td>\r\n        <td>{{getfullname()}}</td>\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>First Name</td>\r\n        <td>{{fname}}</td>\r\n\r\n    </tr>\r\n    <tr>\r\n        <td>Last Name</td>\r\n        <td>{{lname}}</td>\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>Gender</td>\r\n        <td>{{gender}}</td>\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>Age</td>\r\n        <td>{{age}}</td>\r\n\r\n    </tr>\r\n</table>"

/***/ }),

/***/ "./src/app/employeelist/employeelist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table border=\"1\" style=\"padding:10px;margin: 10px\">\r\n\r\n    <tr>\r\n        <td>Index</td>\r\n        <td>IsFirst</td>\r\n        <td>IsLast</td>\r\n        <td>IsEven</td>\r\n        <td>IsOdd</td>\r\n        <td>Code</td>\r\n        <td>Name</td>\r\n        <td>Gender</td>\r\n        <td>DOB</td>\r\n    </tr>\r\n\r\n    <tr *ngFor=\" let employee of myemployeelist;trackBy:trackByEmp;let isodd = odd;let iseven = even;let myindex=index;let Islast= last;let Isfirst=first\">\r\n        <td>{{myindex}}</td>\r\n        <td>{{Isfirst}}</td>\r\n        <td>{{Islast}}</td>\r\n        <td>{{iseven}}</td>\r\n        <td>{{isodd}}</td>\r\n        <td>{{employee.code | uppercase}}</td>\r\n        <td>{{employee.name | lowercase}}</td>\r\n        <td>{{employee.gender}}</td>\r\n        <td>{{employee.dob | date:\"short\" }}</td>\r\n    </tr>\r\n    <tr *ngIf=\"!myemployeelist\">\r\n\r\n        <td *ngIf=\"!myemployeelist \" colspan=\"4\">No Record Found</td>\r\n    </tr>\r\n    <tr>\r\n\r\n        <td colspan=\"4\"> <button (click)=\"getemployeelist()\">Click here for More......</button>\r\n        </td>\r\n    </tr>\r\n</table>"

/***/ }),

/***/ "./src/app/employeelist/employeelist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.ts ***!
  \********************************************************/
/*! exports provided: EmployeelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeelistComponent", function() { return EmployeelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeelistComponent = /** @class */ (function () {
    function EmployeelistComponent() {
        this.myemployeelist = [];
        this.myemployeelist = [
            { code: 'emp101', name: 'Lovely', gender: 'Male', dob: '12-03-1993' },
            { code: 'emp102', name: 'Laddi', gender: 'Feamle', dob: '11-10-1990' },
            { code: 'emp103', name: 'Happy', gender: 'Male', dob: '2-06-1997' },
            { code: 'emp104', name: 'Gapu', gender: 'Male', dob: '06-03-1993' },
            { code: 'emp105', name: 'Priti', gender: 'Female', dob: '12-03-1989' },
        ];
    }
    EmployeelistComponent.prototype.getemployeelist = function () {
        this.myemployeelist = [
            { code: 'emp101', name: 'Lovely', gender: 'Male', dob: '12-03-1993' },
            { code: 'emp102', name: 'Laddi', gender: 'Feamle', dob: '11-10-1990' },
            { code: 'emp103', name: 'Happy', gender: 'Male', dob: '11-10-1990' },
            { code: 'emp104', name: 'Gapu', gender: 'Male', dob: '06-03-1993' },
            { code: 'emp105', name: 'Priti', gender: 'Female', dob: '12-03-1989' },
            { code: 'emp106', name: 'pakista', gender: 'male', dob: '12-06-1989' },
            { code: 'emp107', name: 'huuda', gender: 'Female', dob: '12-06-1989' },
        ];
    };
    EmployeelistComponent.prototype.trackByEmp = function (index, MM) {
        return MM.code;
    };
    EmployeelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employee-list',
            template: __webpack_require__(/*! ./employeelist.component.html */ "./src/app/employeelist/employeelist.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeelistComponent);
    return EmployeelistComponent;
}());



/***/ }),

/***/ "./src/app/workpro/workpro.component.html":
/*!************************************************!*\
  !*** ./src/app/workpro/workpro.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"check\">Hi {{name}} this is trazzy</h1>"

/***/ }),

/***/ "./src/app/workpro/workpro.component.ts":
/*!**********************************************!*\
  !*** ./src/app/workpro/workpro.component.ts ***!
  \**********************************************/
/*! exports provided: WorkproComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkproComponent", function() { return WorkproComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkproComponent = /** @class */ (function () {
    function WorkproComponent() {
        this.name = "yo yo Honey Si ngh";
    }
    WorkproComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'trazzy-app',
            template: __webpack_require__(/*! ./workpro.component.html */ "./src/app/workpro/workpro.component.html"),
        })
    ], WorkproComponent);
    return WorkproComponent;
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

module.exports = __webpack_require__(/*! D:\myproject\myapp1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map