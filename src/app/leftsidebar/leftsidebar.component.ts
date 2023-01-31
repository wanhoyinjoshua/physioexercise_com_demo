import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css'],
 
})
export class LeftsidebarComponent {
  @Input()  scroll = false;
  @Output() scrollable = new EventEmitter<boolean>();
  baseState = {
    sidebar: true
  }
  
  activeState = {
    sidebaractive: true,
    sidebar: false
  }

  baseoverlayState = {
    darkoverlay: true,
    activedarkoverlay: false
  }
  activeoverlayState={
    activedarkoverlay: true,
    darkoverlay: false

  }
  arrowsidenav={
    arrowsidenav:false
  }
  unactivearrowsidenav={
    arrowsidenav:true
  }
  active = false;
  change(active:boolean){
    this.active=active
    this.scrollable.emit(active)

  }

  @Output() countChanged: EventEmitter<number> =   new EventEmitter();


}
