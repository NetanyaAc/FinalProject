"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Bar Saadon on 29/01/2017.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// import { AppComponent }  from './app.component';
var pic_user_1 = require("./components/picUser/pic-user");
var right_component_1 = require("./components/rightComponent/right-component");
var RightModule = (function () {
    function RightModule() {
    }
    return RightModule;
}());
RightModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [right_component_1.RightComponent, pic_user_1.PicComponent],
        bootstrap: [right_component_1.RightComponent]
    })
], RightModule);
exports.RightModule = RightModule;
//# sourceMappingURL=right.module.js.map