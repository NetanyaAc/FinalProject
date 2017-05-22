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
// import classElement = ts.ScriptElementKind.classElement;
// import removeItemFromSet = ts.server.removeItemFromSet;
// import {StudentProfile} from  '../studentProfileComp/student-profile-comp';
var LeftComponent = (function () {
    function LeftComponent() {
        this.students = [
           {
            "Pname": "Project1- Design",
            "projectNum": 111,
            "days_to_finish": 25,
            "department_city": "Netanya",
        },
        {
            "Pname": "project2- Build",
            "projectNum": 222,
            "days_to_finish": 12,
            "department_city": "Netanya",
        },
        {
             "Pname": "project3- Code",
            "projectNum": 333,
            "days_to_finish": 22,
            "department_city": "Raanana"
        },
        {
             "Pname": "project4- Engineering",
            "projectNum": 444,
            "days_to_finish": 30,
            "department_city": "Haifa"
        }
        ];
        this.thisStudent = this.students[0];
        // @Output() studentClicked = new EventEmitter();
        this.studentClicked = false;
        this.studentClicked = false;
        // this.name = 'Bar Saadon';
    }
    LeftComponent.prototype.ClickStudent = function (std) {
        console.debug('CLICKED!!');
        this.thisStudent = std;
        this.studentClicked = !this.studentClicked;
    };
    LeftComponent.prototype.ClickDeleteStudent = function () {
        this.studentClicked = false;
        // this.students[];
        console.debug('DELETE!!');
    };
    return LeftComponent;
}());
LeftComponent = __decorate([
    core_1.Component({
        selector: 'left-component',
        templateUrl: "app/components/leftComponent/left-component.html",
        styleUrls: ["app/style_app/style.css"],
    })
], LeftComponent);
exports.LeftComponent = LeftComponent;
