webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Prime Number Generator Coding Exercise</h1>\n  <h2>Overview:</h2>\n  <p>Your task is to use test driven development to implement a prime number generator that\n    returns an ordered list of all prime numbers in a given range (inclusive of the endpoints).\n    You must implement the interface specified below. You may also create any other\n    methods, interfaces and/or classes that you deem necessary to complete the project.\n    You should also develop a small main program to drive your generator and to allow the\n    user to specify the prime number range via the command line. To successfully\n    complete the exercise, all unit tests must pass as well as provide 100% code coverage.\n    Notes:\n    • The code should handle inverse ranges such that 1-10 and 10-1 are equivalent.\n    • Ensure that you run a test against the range 7900 and 7920 (valid primes are 7901,\n    7907, 7919).\n  </p>\n\n  <h3>\n    Interface:\n  </h3>\n  <p>Interface PrimeNumberGenerator &#123;<br/>\n  List<span>&lsaquo;</span> generate(int startingValue, int endingValue);<br/>\n  boolean isPrime(int value);<br/>\n  &#125;\n  </p>\n\n  <h4>Definition (from wikipedia):</h4>\n  <p>\n    In <a href=\"https://en.wikipedia.org/wiki/Mathematics\"><u>mathematics</u></a>\n    , a prime number (or a prime) is a <a href=\"https://en.wikipedia.org/wiki/Natural_number\">\n    <u>natural number</u></a>\n    which has exactly\n    two distinct natural number divisors: 1 and itself. The first twenty-six prime numbers are:\n    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89,\n    97, 101\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li><a routerLink=''>Generator Page</a></li>\n  <li><a routerLink='about'>About Page</a></li>\n</ul>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generator_generator_component__ = __webpack_require__("./src/app/generator/generator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__generator_generator_component__["a" /* GeneratorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generator_generator_component__ = __webpack_require__("./src/app/generator/generator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__generator_generator_component__["a" /* GeneratorComponent */]
    }, {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/generator/generator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container color-dark\">\n\n    <div class=\"col\">\n        <p>Updox Prime Number Generator</p>\n    </div>\n    <div class=\"colist\">\n        <p>Your Prime Number List Item:\n\n            <b>click item to delete</b>\n        </p>\n    </div>\n</div>\n\n<div class=\"container color-light\" [@allPrimeList]='allPrimeList.length'>\n\n    <div class=\"col\">\n        <h3>Startig Number</h3>\n        <input type=\"number\" aria-label=\"number\" [(ngModel)]=\"startingNumber\" />\n        <h3>Ending Number</h3>\n        <input type=\"number\" aria-label='number' [(ngModel)]=\"endingNumber\" min=\"0\"/>\n        <p class=\"sm\">generate all the prime number within the range</p>\n        <form >\n            <input type=\"button\" class=\"btn\" value=\"{{btnText}}\" (click)=\"generatePrimes()\">\n        </form>\n    </div>\n    <div class=\"colist\">\n        <p class=\"life-container\" *ngFor=\"let goal of allPrimeList; let i = index\"\n        (click)=\"removeItem(i)\">\n    {{goal}}\n    </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/generator/generator.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% auto;\n      grid-template-columns: 50% auto; }\n\n.col {\n  padding: .4em 1.3em; }\n\n.colist {\n  margin-left: 80px;\n  word-break: break-all; }\n\n.color-dark {\n  background: #2885C4; }\n\n.color-light {\n  background: #57B3F1; }\n\ninput.txt {\n  border: 0;\n  padding: 1em;\n  width: 80%;\n  margin-bottom: 2em; }\n\ninput.btn {\n  border: 0;\n  display: block;\n  padding: 1em 3em;\n  background: #A5F883;\n  color: #081620;\n  margin-bottom: 1em;\n  cursor: pointer; }\n\n.life-container {\n  background: cadetblue;\n  padding: .5em;\n  font-weight: bold;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/generator/generator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_updPrimeNumberGenerator__ = __webpack_require__("./src/app/generator/models/updPrimeNumberGenerator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneratorComponent = /** @class */ (function () {
    function GeneratorComponent() {
        this.btnText = 'Submit!';
        this.allPrimeList = [];
    }
    /**
     *
     * @param {any} i
     * @memberof GeneratorComponent
     * remove item from list
     */
    GeneratorComponent.prototype.removeItem = function (i) {
        this.allPrimeList.pop();
    };
    /**
     * @memberof GeneratorComponent
     * main method to generate prime numbers by user's input
     */
    GeneratorComponent.prototype.generatePrimes = function () {
        var generator = new __WEBPACK_IMPORTED_MODULE_2__models_updPrimeNumberGenerator__["a" /* UpdPrimeNumGenerator */]();
        //generate primeNumList by given starting and ening number
        this.primeNumList = generator.generate(this.startingNumber, this.endingNumber);
        if (this.primeNumList.length !== 0) {
            this.allPrimeList.push(this.primeNumList);
            //reset values
            this.primeNumList = [];
            this.startingNumber = null;
            this.endingNumber = null;
        }
        else {
            alert('Please enter a valid number');
        }
    };
    GeneratorComponent.prototype.ngOnInit = function () {
        ;
    };
    GeneratorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-home",
            template: __webpack_require__("./src/app/generator/generator.component.html"),
            styles: [__webpack_require__("./src/app/generator/generator.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])("allPrimeList", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])("*=>*", [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(":enter", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(":enter", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])("300ms", [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(".6s ease-in", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: "translateY(-75%)", offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                                    opacity: 0.5,
                                    transform: "translateY(35px)",
                                    offset: 0.3
                                }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: "translateY(0)", offset: 1 })
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(":leave", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])("300ms", [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(".6s ease-in", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: "translateY(0)", offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                                    opacity: 0.5,
                                    transform: "translateY(35px)",
                                    offset: 0.3
                                }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: "translateY(-75%)", offset: 1 })
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        })
        /**
         * @export
         * @class GeneratorComponent
         * @implements {OnInit}
         */
        ,
        __metadata("design:paramtypes", [])
    ], GeneratorComponent);
    return GeneratorComponent;
}());



/***/ }),

/***/ "./src/app/generator/models/updPrimeNumberGenerator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdPrimeNumGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @export
 * @class UpdPrimeNumGenerator
 * @implements {PrimeNumberGenerator}
 */
var UpdPrimeNumGenerator = /** @class */ (function () {
    function UpdPrimeNumGenerator() {
        this.newReturnList = [];
    }
    UpdPrimeNumGenerator.prototype.generate = function (startingNumber, endingNumber) {
        //E.g. start:1, end:5, start should return 1
        var start = startingNumber < endingNumber ? startingNumber : endingNumber;
        //E.g. start:5, end:1, end should return 5
        var end = startingNumber > endingNumber ? startingNumber : endingNumber;
        if (start && end) {
            for (var i = start; i <= end; i++) {
                // check if the number isPrime, then push to newReturnList
                if (this.isPrime(i)) {
                    this.newReturnList.push(i);
                }
            }
        }
        return this.newReturnList;
    };
    /**
     *
     * @param {number} value
     * @returns {boolean}
     * @memberof UpdPrimeNumGenerator
     * method to check if number is prime
     */
    UpdPrimeNumGenerator.prototype.isPrime = function (value) {
        for (var i = 2; i < value; i++) {
            if (value % i === 0) {
                return false;
            }
        }
        return value > 1;
    };
    UpdPrimeNumGenerator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: ''
        })
    ], UpdPrimeNumGenerator);
    return UpdPrimeNumGenerator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map