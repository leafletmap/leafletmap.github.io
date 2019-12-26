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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"container\">\n    <app-google-maps></app-google-maps>\n    <app-leaflet-geosearch></app-leaflet-geosearch>\n    <!-- https://leaflet-ng2.yagajs.org/1.0.0/examples/ -->\n</div>"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _google_maps_google_maps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-maps/google-maps.component */ "./src/app/google-maps/google-maps.component.ts");
/* harmony import */ var _leaflet_geosearch_leaflet_geosearch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leaflet-geosearch/leaflet-geosearch.component */ "./src/app/leaflet-geosearch/leaflet-geosearch.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _google_maps_google_maps_component__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsComponent"],
                _leaflet_geosearch_leaflet_geosearch_component__WEBPACK_IMPORTED_MODULE_7__["LeafletGeosearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/google-maps/google-maps.component.css":
/*!*******************************************************!*\
  !*** ./src/app/google-maps/google-maps.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1tYXBzL2dvb2dsZS1tYXBzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/google-maps/google-maps.component.html":
/*!********************************************************!*\
  !*** ./src/app/google-maps/google-maps.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  google-maps works!\n</p>\n"

/***/ }),

/***/ "./src/app/google-maps/google-maps.component.ts":
/*!******************************************************!*\
  !*** ./src/app/google-maps/google-maps.component.ts ***!
  \******************************************************/
/*! exports provided: GoogleMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsComponent", function() { return GoogleMapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoogleMapsComponent = /** @class */ (function () {
    //http://angular-ui.github.io/ui-leaflet/#!/examples/google-maps
    function GoogleMapsComponent() {
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
    };
    GoogleMapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-maps',
            template: __webpack_require__(/*! ./google-maps.component.html */ "./src/app/google-maps/google-maps.component.html"),
            styles: [__webpack_require__(/*! ./google-maps.component.css */ "./src/app/google-maps/google-maps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());



/***/ }),

/***/ "./src/app/leaflet-geosearch/leaflet-geosearch.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/leaflet-geosearch/leaflet-geosearch.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWZsZXQtZ2Vvc2VhcmNoL2xlYWZsZXQtZ2Vvc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/leaflet-geosearch/leaflet-geosearch.component.html":
/*!********************************************************************!*\
  !*** ./src/app/leaflet-geosearch/leaflet-geosearch.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Leaflet Geosearch and Marker - Angular 7</h2>\n<pre class=\"ml-5 text-danger\">\n    npm i leaflet --save\n    npm i leaflet-geosearch --save\n\n    \"styles\": [\n        ...\n        \"node_modules/leaflet/dist/leaflet.css\",\n        \"node_modules/leaflet-geosearch/assets/css/leaflet.css\"\n    ],\n</pre>\n<!-- start map -->\n<div id=\"contain-map\" class=\"m-auto\" style=\"height: 500px; width: 1000px\"></div>\n<!-- end map -->\n"

/***/ }),

/***/ "./src/app/leaflet-geosearch/leaflet-geosearch.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/leaflet-geosearch/leaflet-geosearch.component.ts ***!
  \******************************************************************/
/*! exports provided: LeafletGeosearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletGeosearchComponent", function() { return LeafletGeosearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_geosearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-geosearch */ "./node_modules/leaflet-geosearch/lib/index.js");
/* harmony import */ var leaflet_geosearch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_geosearch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

// Angular

// Leaflet



var LeafletGeosearchComponent = /** @class */ (function () {
    function LeafletGeosearchComponent(http) {
        this.http = http;
        this.location = {
            x: 105.780128,
            y: 21.029356,
            label: ''
        };
    }
    LeafletGeosearchComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    LeafletGeosearchComponent.prototype.initMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var map, provider, searchControl, marker;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCurrentLocationXY()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getCurrentLocationLabel()];
                    case 2:
                        _a.sent();
                        // refresh map id
                        document.getElementById("contain-map").innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
                        map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]("map", {
                            // Set latitude and longitude of the map center (required)
                            center: [this.location.y, this.location.x],
                            // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
                            zoom: 16
                        });
                        // add icon
                        leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
                            iconUrl: "assets/images/marker-icon.png",
                            // shadowUrl: 'assets/images/icons/Blank.png',
                            iconSize: [25, 41],
                            // shadowSize:   [50, 64], // size of the shadow
                            iconAnchor: [9, 40],
                            // shadowAnchor: [4, 62],  // the same for the shadow
                            popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
                        });
                        leaflet__WEBPACK_IMPORTED_MODULE_2__["control"].scale().addTo(map);
                        // Create a Tile Layer and add it to the map
                        leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                            attribution: '&copy; <a href="http://osm.org/copyright"></a> contributors'
                        }).addTo(map);
                        provider = new leaflet_geosearch__WEBPACK_IMPORTED_MODULE_3__["OpenStreetMapProvider"]();
                        searchControl = new leaflet_geosearch__WEBPACK_IMPORTED_MODULE_3__["GeoSearchControl"]({
                            provider: provider,
                            autoClose: true
                        });
                        map.addControl(searchControl);
                        marker = leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([this.location.y, this.location.x])
                            .addTo(map)
                            .bindPopup(this.location.label)
                            .openPopup();
                        // handler event search
                        map.on("geosearch/showlocation", function (e) {
                            if (marker) {
                                // check
                                map.removeLayer(marker); // remove
                            }
                            _this.location = {
                                x: e.location.x,
                                y: e.location.y,
                                label: e.location.label
                            };
                            marker = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"]([_this.location.y, _this.location.x])
                                .addTo(map)
                                .bindPopup(_this.location.label)
                                .openPopup();
                        });
                        map.on('click', function (e) {
                            _this.http.get("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + e.latlng.lat + "&lon=" + e.latlng.lng).subscribe(function (res) {
                                if (res) {
                                    if (marker) { // check
                                        map.removeLayer(marker); // remove
                                    }
                                    _this.location = {
                                        x: e.latlng.lng,
                                        y: e.latlng.lat,
                                        label: res.display_name,
                                    };
                                    marker = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"]([_this.location.y, _this.location.x]).addTo(map)
                                        .bindPopup(_this.location.label)
                                        .openPopup();
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * GET
     * latitude
     * longitude
     */
    LeafletGeosearchComponent.prototype.getCurrentLocationXY = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.location.y = position.coords.latitude;
                _this.location.x = position.coords.longitude;
                resolve();
            }, function (err) { return reject(err); });
        });
    };
    /**
     * GET
     * Location name by latitude && longitude
     */
    LeafletGeosearchComponent.prototype.getCurrentLocationLabel = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + _this.location.y + "&lon=" + _this.location.x).subscribe(function (res) {
                if (res) {
                    _this.location.label = res.display_name;
                    resolve(res);
                }
            }, function (err) { return reject(err); });
        });
    };
    LeafletGeosearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaflet-geosearch',
            template: __webpack_require__(/*! ./leaflet-geosearch.component.html */ "./src/app/leaflet-geosearch/leaflet-geosearch.component.html"),
            styles: [__webpack_require__(/*! ./leaflet-geosearch.component.css */ "./src/app/leaflet-geosearch/leaflet-geosearch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], LeafletGeosearchComponent);
    return LeafletGeosearchComponent;
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

module.exports = __webpack_require__(/*! e:\My JOB\Test_FE\leafletmap\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map