import { Component, OnInit,ViewChild,ElementRef, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchcollectionform',
  templateUrl: './searchcollectionform.component.html',
  styleUrls: ['./searchcollectionform.component.css']
})
export class SearchcollectionformComponent {

  constructor(private router: Router) {}
  filteredOptions:any;
  searchCollectionForm=new FormControl('');
  options: string[] = ['osteoporosis','c5-injury'];
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if(this.options.filter(option => option.toLowerCase().includes(filterValue))[0]==undefined){
      return [`Sorry we dont have results for ${value}!`]
    }
    else{
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
  
    }
  
  
  }

    
  ngOnInit() {
  

    this.filteredOptions = this.searchCollectionForm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  
  }

  @Output() exerciseformselected= new EventEmitter<string>();
  
  changeselected() {
   console.log(this.searchCollectionForm.value)
    

  }
  selected(){
   
    if(this.searchCollectionForm.value==null||this.searchCollectionForm.value.includes("Sorry")){
      this.exerciseformselected.emit("");
      console.log("")
    }
    else{
      this.exerciseformselected.emit(this.searchCollectionForm.value);
      console.log(this.searchCollectionForm.value)
    }
    


  }
}
