/**
 * Created by Bar Saadon on 21/05/2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent }  from './app.component';
import {navBar} from "./components/navbar/navbar.comp";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ navBar ],
    bootstrap:    [ navBar ]
})

export class navBarModule { }