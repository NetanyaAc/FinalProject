"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Bar Saadon on 29/01/2017.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// import { AppComponent }  from './app.component';
var left_component_1 = require("./components/leftComponent/left-component");
var pic_user_1 = require("./components/picUser/pic-user");
var LeftModule = (function () {
    function LeftModule() {
    }
    return LeftModule;
}());
LeftModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [left_component_1.LeftComponent, pic_user_1.PicComponent],
        bootstrap: [left_component_1.LeftComponent]
    })
], LeftModule);
exports.LeftModule = LeftModule;
