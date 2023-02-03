import { Input,Component, Output, EventEmitter  } from '@angular/core';
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
  selector: 'app-exerciseitem',
  templateUrl: './exerciseitem.component.html',
  template:` 
  <button (click)="changeselected(!isSelected)" class="button-28" role="button" [innerHTML]="isSelected?add:deselect"></button>
  <mat-panel-title>
            {{title}}
          </mat-panel-title>
          <mat-panel-description>
            {{category}}

          </mat-panel-description>


          <div class="detailflex">
          <span>
              {{exercisedetails}}

          </span>
          <span>
              {{aim}}
          </span>
          <span>
              {{tinstruction}}
          </span>
          <span>
              {{pinstruction}}
          </span>
          <span>
              {{pro}}
          </span>
          <span>
              {{pre}}
          </span>
      </div>

  
  
  `
  
  ,
  styleUrls: ['./exerciseitem.component.css'],
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
export class ExerciseitemComponent {
  @Input() id: string|undefined;
  @Input() title: string|undefined;
  @Input() category: string|undefined;
  @Input() exercisedetails: string|undefined;
  @Input() aim: string|undefined;
  @Input() pinstruction: string|undefined;
  @Input() tinstruction: string|undefined;
  @Input() pro: string|undefined;
  @Input() pre: string|undefined;
  
  

  opened=false  

  isSelected=false

  greenbackground={
    greenbg:true
  }
  normalbackground={
    unselectedbg:true
  }

  buttonword=this.isSelected?"Remove selection":"Add Exercise"
  add="Deselect"
  deselect="Select"
  @Output() exerciseid= new EventEmitter<string>();
  
  changeselected(selected:boolean) {
    this.isSelected=selected;
    this.exerciseid.emit(this.id);
    

  }



}
