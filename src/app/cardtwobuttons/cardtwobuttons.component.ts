import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardtwobuttons',
  template:`
  <h1 class="card__title">{{title}}</h1>

  <p class="card__content">
  {{description}}
  </p>

  <a href="{{linkurl}}" class="sign-up">{{buttontext}}</a>
        <a href="{{linkurl2}}" class="sign-up">{{buttontext2}}</a>
  `,
  templateUrl: './cardtwobuttons.component.html',
  styleUrls: ['./cardtwobuttons.component.css']
})
export class CardtwobuttonsComponent {
  @Input() title: string|undefined;
  @Input() description: string|undefined;
  @Input() buttontext: string|undefined;
  @Input() linkurl: string|undefined;
  @Input() buttontext2: string|undefined;
  @Input() linkurl2: string|undefined;
  @Input() modal: boolean|undefined;

}
