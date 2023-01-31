import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <app-leftsidebar
      
      (scrollable)="onScroll($event)">
    </app-leftsidebar>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  scroll=true;
  scrollState = {
    scrollyes: true,
    scrollno: false
  }
 noscrollState={
    scrollno: true,
    scrollyes: false

  }
  onScroll(scroll:boolean){
    if(scroll){
      this.scroll=true
      console.log("hohoho")

    }
    else{
      this.scroll=false
      console.log("false")

    }

  }
}
