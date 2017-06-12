/**
 * Created by Bar Saadon on 09/06/2017.
 */
// import { Routes, RouterModule } from '@angular/router';
// import { Home } from './components/home/home.component';
//
//
//
// // Route config let's you map routes to components
// const routes: Routes = [
//     // map '/persons' to the people list component
//     {
//         path: 'persons',
//         component: Home,
//     },
//     // map '/' to '/persons' as our default route
//     {
//         path: '',
//         redirectTo: '/persons',
//         pathMatch: 'full'
//     },
// ];
//
// export const appRouterModule = RouterModule.forRoot(routes);


//import { NgModule }      from '@angular/core';

import { LeftComponent } from './components/leftComponent/left-component';
import { RightComponent } from './components/rightComponent/right-component';


import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'left-component', pathMatch: 'full' },
    { path: 'left-component', component: LeftComponent },
    { path: 'right-component', component: RightComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);


