"use strict";
/**
 * Created by Bar Saadon on 23/01/2017.
 */
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
// import { AppModule }  from './app.module';
var left_module_1 = require("./left.module.ts");
var right_module_1 = require("./right.module.ts");
// platformBrowserDynamic().bootstrapModule(AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(left_module_1.LeftModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(right_module_1.RightModule);
//# sourceMappingURL=main.js.map