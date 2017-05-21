"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Bar Saadon on 23/01/2017.
 */
var core_1 = require("@angular/core");
// import classElement = ts.ScriptElementKind.classElement;
// import removeItemFromSet = ts.server.removeItemFromSet;
// import {StudentProfile} from  '../studentProfileComp/student-profile-comp';
var LeftComponent = (function () {
    function LeftComponent() {
        // this.name = 'Bar Saadon';
        this.students = [
            {
                "name": "Bar",
                "id": 0,
                "age": 25,
                "city": "Netanya",
                "lang": "Hebrew"
            },
            {
                "name": "Netalie",
                "id": 1,
                "age": 28,
                "city": "Netanya",
                "lang": "Hebrew"
            },
            {
                "name": "David",
                "id": 2,
                "age": 35,
                "city": "New York",
                "lang": "English"
            },
            {
                "name": "Ben",
                "id": 3,
                "age": 25,
                "city": "Barcelona",
                "lang": "Spanish"
            }
        ];
        this.thisStudent = this.students[0];
        this.studentClicked = new core_1.EventEmitter();
        this.studentClicked = false;
    }
    LeftComponent.prototype.ClickStudent = function () {
        console.debug('CLICKED!!');
        this.studentClicked = !this.studentClicked;
    };
    LeftComponent.prototype.ClickDeleteStudent = function () {
        // this.studentClicked = false;
        // this.students[];
        console.debug('DELETE!!');
    };
    return LeftComponent;
}());
__decorate([
    core_1.Output()
], LeftComponent.prototype, "studentClicked");
LeftComponent = __decorate([
    core_1.Component({
        selector: 'left-component',
        templateUrl: "app/components/leftComponent/left-component.html",
        styleUrls: ["app/style_app/style.css"]
    })
], LeftComponent);
exports.LeftComponent = LeftComponent;
//# sourceMappingURL=left-component.js.map