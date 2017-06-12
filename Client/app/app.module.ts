/**
 * Created by Bar Saadon on 23/01/2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routes';

import { AppComponent }  from './app.component';
import { LeftComponent } from './components/leftComponent/left-component';
import { RightComponent } from './components/rightComponent/right-component';
import { PicComponent } from './components/picUser/pic-user';
import { navBar } from './components/navbar/navbar.comp';


@NgModule({
    imports:      [ BrowserModule, routing],
    declarations: [ AppComponent, LeftComponent, RightComponent, PicComponent, navBar ],
    providers: [
        appRoutingProviders
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }