import { Component,OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-customexercisetableview',
  templateUrl: './customexercisetableview.component.html',
  template:`<app-exerciseitem (exerciseid)='modifylist($event)'></app-exerciseitem>`,
  styleUrls: ['./customexercisetableview.component.css'],
  animations: [
    // animation triggers go here
    trigger('slideInOut', [
      state(
        'open',
        style({
          'max-height': '20vh',
          opacity: '1',
          visibility: 'visible',
        })
      ),
      state(
        'closed',
        style({
          'max-height': '0px',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      transition('open => closed', [
        group([
          animate(
            '400ms ease-in-out',
            style({
              opacity: '0',
            })
          ),
          animate(
            '600ms ease-in-out',
            style({
              'max-height': '0px',
            })
          ),
          animate(
            '700ms ease-in-out',
            style({
              visibility: 'hidden',
            })
          ),
        ]),
      ]),
      transition('closed => open', [
        group([
          animate(
            '1ms ease-in-out',
            style({
              visibility: 'visible',
            })
          ),
          animate(
            '600ms ease-in-out',
            style({
              'max-height': '50vh',
            })
          ),
          animate(
            '800ms ease-in-out',
            style({
              opacity: '1',
            })
          ),
        ]),
      ]),
    ]),
   
    
  ]
})
export class CustomexercisetableviewComponent implements OnInit {
  opened=false
  
  items :string[]= [];
  none={
    none:true
  }
show={
    show:true
  }
  ngOnInit() {
  }

  emptylist=this.items.length>0?false:true

  modifylist(id:any) {
    
    if(this.items.indexOf(id)!=-1){

      console.log("duplicate need to delete")
      this.items.splice(this.items.indexOf(id),1);
      console.log(this.items)
      
      
      //if it  exits in the array then delete it 
    }
    else{
      this.items.push(id)
      console.log(this.items)
      //if it doesn't push it 
    }
    
  }
  
}
