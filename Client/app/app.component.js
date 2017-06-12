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
// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { LeftComponent } from './components/leftComponent/left-component';
// import { PicComponent } from './components/picUser/pic-user';
var AppComponent = (function () {
    // name: string;
    function AppComponent() {
        // this.name = 'Bar Application Angular 2 !';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: "app/html_app/app.html",
            styleUrls: ["app/style_app/style.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map