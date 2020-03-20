import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
menuDisplay:string='recipe';

  loadMenuItem(event){
    console.log("Event fired");
    console.log(event);
    this.menuDisplay=event;
  }
}
