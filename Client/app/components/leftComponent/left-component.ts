/**
 * Created by Bar Saadon on 23/01/2017.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import { IStudent } from '../../components/leftComponent/student';

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

    Pname : string;
    projectNum: number;
    days_to_finish: number;
    department_city: string;

    students: IStudent[] = [
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

    thisStudent  = this.students[0];
    // @Output() studentClicked = new EventEmitter();
    public studentClicked = false;
    constructor() {
        // this.name = 'Bar Saadon';
    }

    // public studentClicked = false;


    ClickStudent(std:any){
        console.debug('CLICKED!!');
        this.thisStudent=std;
        this.studentClicked = !this.studentClicked;
    }

 openFriends(std:any){
       alert("Friends List: Karin 0541111111, Bar 0542222222, Oren 0543333333");
       prompt("type question for friend")  //question may be sent to contact selected from list above.    
         }


    ClickDeleteStudent(){
        this.studentClicked = false;
        // this.students[];

        console.debug('DELETE!!');
    }

}