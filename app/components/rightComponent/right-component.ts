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
    courses = [{'name': 'Math', 'id': '0'},
        {'name': 'English', 'id': '1'},
        {'name': 'Programing', 'id': '2'},
        {'name': 'Data Mining', 'id': '3'},
        {'name': 'Statistic', 'id': '4'},
        {'name': 'Algorithm', 'id': '5'}
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
}