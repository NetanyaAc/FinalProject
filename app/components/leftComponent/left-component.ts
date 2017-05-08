/**
 * Created by Bar Saadon on 23/01/2017.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import { IStudent } from 'app/components/leftComponent/student';

// import classElement = ts.ScriptElementKind.classElement;
// import removeItemFromSet = ts.server.removeItemFromSet;
// import {StudentProfile} from  '../studentProfileComp/student-profile-comp';

@Component({
    selector: 'left-component',
    templateUrl:`app/components/leftComponent/left-component.html`,
    styleUrls:[`app/style_app/style.css`],
    // directives: [StudentProfile]
})

export class LeftComponent {
    name: string;

    students: IStudent[] = [
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

    thisStudent  = this.students[0];
    @Output() studentClicked = new EventEmitter();

    constructor() {
        // this.name = 'Bar Saadon';
    }

    public studentClicked = false;


    ClickStudent(){
        console.debug('CLICKED!!');
        this.studentClicked = !this.studentClicked;
    }



    ClickDeleteStudent(){
        // this.studentClicked = false;
        // this.students[];

        console.debug('DELETE!!');
    }

}