/**
 * Created by Bar Saadon on 26/01/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'pic-user',
    template:`
    <div>
        <img class="pic-user-style" src="http://www.icaninfotech.com/wp-content/uploads/2015/04/angularjs-development-services.png"/>
    </div>
`,
    styleUrls:[`app/style_app/style.css`],
})
export class PicComponent {
    name: string;

    constructor() {
        // this.name = 'Bar Application Angular 2 !';
    }
}