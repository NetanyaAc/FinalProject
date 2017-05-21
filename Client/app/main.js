"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Bar Saadon on 23/01/2017.
 */
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
// import { AppModule }  from './app.module';
var left_module_1 = require("./left.module");
var right_module_1 = require("./right.module");
var navbar_module_1 = require("./navbar.module");
// platformBrowserDynamic().bootstrapModule(AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(left_module_1.LeftModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(right_module_1.RightModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(navbar_module_1.navBarModule);
// @NgModule({
//     imports:      [ BrowserModule ],
//     declarations: [ navBar ],
//     bootstrap:    [ navBar ]
// })
// export class main {} 
