/**
 * Created by Bar Saadon on 23/01/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'right-component',
    templateUrl:`app/components/rightComponent/right-component.html`,
    styleUrls:[`app/style_app/style.css`],
})
export class RightComponent {
    name: string;
    courses = [
        {'name': 'task1: build', 'id': '1'},
        {'name': 'task2: Report', 'id': '2'},
        {'name': 'task3: Overview', 'id': '3'},
        {'name': 'task4: Dwell', 'id': '4'},
        {'name': 'task5: Control', 'id': '5'},
        {'name': 'task6: Operate', 'id': '6'}
    ];

    thisCourse = this.courses[0];


    public courseClicked = false;

    constructor() {
        // this.name = 'Course Name List';
    }

    ClickCourse(std:any){
        console.debug('CLICKED!!');

        this.thisCourse = std;

        this.courseClicked = !this.courseClicked;
    }

    onClick(deleteCourse){
        console.debug('DELETE BTN');
        this.courseClicked = false;
    }

onit_clicked(std:any){
           alert("'On It' clicked + timer on");
           
        //change label to DONE and color to GREEN, add timer

}
    
}