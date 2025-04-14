import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector:"app-child",
    templateUrl:"./child.component.html",
    styleUrl:'./child.component.css'
})
export class ChildComponent{
    @Output() notifyParent = new EventEmitter<string>();
    sendMessage(){
        this.notifyParent.emit("hello notify parent from child")
    }
}