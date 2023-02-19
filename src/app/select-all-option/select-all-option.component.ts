import { Component, Input,Output , SimpleChanges,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select-all-option',
  templateUrl: './select-all-option.component.html',
  styleUrls: ['./select-all-option.component.css']
})
export class SelectAllOptionComponent {
  @Input() toppings: any|undefined;
  @Input() checked: boolean|undefined;
  @Input() toppingList: any|undefined;
  @Output() editedcheck = new EventEmitter<Boolean>();

  ngOnChanges(changes: SimpleChanges) {
    this.checked=changes['checked'].currentValue
}
  toggleAll(event:any){
   

      

    if(this.toppings?.value?.length==this.toppingList.length){
     this.toppings.patchValue([])
     this.checked=false
     console.log(this.checked)
     this.editedcheck.emit(this.checked);
     

    }
    else{
     this.toppings.patchValue(this.toppingList)
     this.checked=true
     console.log(this.checked)
     this.editedcheck.emit(this.checked);
     
    }

   
   }
}
