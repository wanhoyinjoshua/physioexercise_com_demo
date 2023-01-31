import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css'],
  template: "<p>Hello, {{name}}!</p>",
})
export class MaincontentComponent {
  @Input() name: string | undefined;

  
  
}
