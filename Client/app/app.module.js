"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Bar Saadon on 23/01/2017.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var left_component_1 = require('./components/leftComponent/left-component');
var right_component_1 = require('./components/rightComponent/right-component');
var pic_user_1 = require('./components/picUser/pic-user');
var navbar_comp_1 = require('./components/navbar/navbar.comp');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing],
            declarations: [app_component_1.AppComponent, left_component_1.LeftComponent, right_component_1.RightComponent, pic_user_1.PicComponent, navbar_comp_1.navBar],
            providers: [
                app_routes_1.appRoutingProviders
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map