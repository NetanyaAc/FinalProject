"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Bar Saadon on 23/01/2017.
 */
var core_1 = require("@angular/core");
var RightComponent = (function () {
    function RightComponent() {
        this.cssOnitOn = true;
        this.courses = [{ 'name': 'Math', 'id': '0' },
            { 'name': 'English', 'id': '1' },
            { 'name': 'Programing', 'id': '2' },
            { 'name': 'Data Mining', 'id': '3' },
            { 'name': 'Statistic', 'id': '4' },
            { 'name': 'Algorithm', 'id': '5' }
        ];
        this.thisCourse = this.courses[0];
        this.courseClicked = false;
        this.onitStatus = "ONIT";
        // this.name = 'Course Name List';
    }
    RightComponent.prototype.ClickCourse = function (std) {
        console.debug('CLICKED!!');
        this.thisCourse = std;
        this.courseClicked = !this.courseClicked;
    };
    RightComponent.prototype.onClick = function (deleteCourse) {
        console.debug('DELETE BTN');
        this.courseClicked = false;
    };
    RightComponent.prototype.startStop = function () {
        if (this.onitStatus = "ONIT") {
            this.onitStatus = "ON WORK";
            this.cssOnitOn = false;
        }
        else {
            this.onitStatus = "ONIT";
            this.cssOnitOn = true;
        }
    };
    return RightComponent;
}());
RightComponent = __decorate([
    core_1.Component({
        selector: 'right-component',
        templateUrl: "app/components/rightComponent/right-component.html",
        styleUrls: ["app/style_app/style.css"],
    })
], RightComponent);
exports.RightComponent = RightComponent;
