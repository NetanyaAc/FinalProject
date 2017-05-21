/**
 * Created by Bar Saadon on 21/05/2017.
 */
import {Component, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'nav-bar',
    templateUrl:`app/components/navbar/navbar.comp.html`,
    styleUrls:[`app/style_app/style.css`]
})

export class navBar {
    accountName: string;
    role = [
        {'role_admin' : 'admin'},
        {'role_user' : 'user'},
        {'role_TL' : 'Team Leader'}
    ]

    constructor() {
        this.accountName = 'Bar Saadon';
    }

}