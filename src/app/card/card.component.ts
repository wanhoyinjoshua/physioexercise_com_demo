import { Component, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
 popup:any;
}
@Component({
  selector: 'app-card',
  template:`
  <h1 class="card__title">{{title}}</h1>

  <p class="card__content">
  {{description}}
  </p>

  <a href="{{linkurl}}" class="sign-up">{{buttontext}}</a>

  `,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent {
  @Input() title: string|undefined;
  @Input() description: string|undefined;
  @Input() buttontext: string|undefined;
  @Input() linkurl: string|undefined;
  @Input() modal: boolean|undefined;

  animal: string;
  name: string;


 

}

