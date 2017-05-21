/**
 * Created by Bar Saadon on 23/01/2017.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppModule }  from './app.module';
import { LeftModule }  from './left.module';
import { RightModule } from "./right.module";
import { navBarModule } from "./navbar.module";


// platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(LeftModule);
platformBrowserDynamic().bootstrapModule(RightModule);
platformBrowserDynamic().bootstrapModule(navBarModule);

// @NgModule({
//     imports:      [ BrowserModule ],
//     declarations: [ navBar ],
//     bootstrap:    [ navBar ]
// })

// export class main {}