import { Component, Output,EventEmitter } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.scss']
})
export class HeaderComponent{
@Output() selectedMenu = new EventEmitter<string>();

    loadRecipe(val:string){
        console.log(val)
        this.selectedMenu.emit(val)
    }

    loadShopping(val:string){
        console.log(val)
        this.selectedMenu.emit(val)
    }
}