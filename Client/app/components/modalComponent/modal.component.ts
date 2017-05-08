/**
 * Created by Bar Saadon on 23/04/2017.
 */
import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";


@Component({
    selector: 'modal-wrapper',
    template: `
    <div bsModal #modalInstance="bs-modal" id="confirmDeleteModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">{{header}}</h4>
          </div>
          <div class="modal-body">
            <ng-content ></ng-content>
        </div>
      </div>
    </div>
</div>
`
})
export class ModalWrapper implements OnInit ,IModalWrapperController{


    @ViewChild("modalInstance")
    modalInstance: ModalDirective;

    constructor() { }

    ngOnInit() { }

    @Input()
    header:string;

    _show:()=>boolean
    @Input()
    set show(val:()=>boolean){
        if(val) {
            let shouldShow = val();
            if (shouldShow)
                this.modalInstance.show();
            else {
                this.modalInstance.hide();
            }
        }
    }

    showModal() {
        this.modalInstance.show();
    }

    hideModal() {
        this.modalInstance.hide();
    }


}

export interface IModalWrapperController{
    showModal();
    hideModal();
}