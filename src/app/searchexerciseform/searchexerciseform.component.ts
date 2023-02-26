import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchexerciseform',
  templateUrl: './searchexerciseform.component.html',
  styleUrls: ['./searchexerciseform.component.css']
})
export class SearchexerciseformComponent {

  constructor(private router: Router) {}
  searchExerciseForm: FormGroup;
  myControl = new FormControl('');
  bodycontrol=new FormControl('')
  customexerciseslink="v0/custom/usersviewing"
  isExercisegroup:any;
  tabchange(event:any){
    
    if(event.index==0){
      this. isExercisegroup=false
    }
    else{
      this. isExercisegroup=true

    }

    console.log(this.isExercisegroup)

  }
  goToSearch(linkurl:any){
    const navigationDetails: string[] = [linkurl];
  
    this.router.navigate(navigationDetails);

  }
  
  options: string[] = ['Parkinsons', 'C4-C6', 'Osteoarthrtisi'];

  bodyoptions:string[] = ['hand', 'brain', 'feet'];
  exercisetypeoption:string[]= ['cardoi', 'shit', 'strnegth'];
  filteredOptions: Observable<string[]>;


  toppings = new FormControl([]);
  toppingList: any = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  checked:boolean=false

  exercisetypeformcontrol = new FormControl([]);
  exercisetypeList: any = ['cardio', 'strngthign', 'rom', 'rom', 'wheelchair', 'skill'];
 exercisetypechecked:boolean=false

 exercisediffformcontrol = new FormControl([]);
 exercisediffList: any = ["easy","modearet","hard"];
exercisediffchecked:boolean=false

equipformcontrol = new FormControl([]);
equipList: any = ['theraband',"mirror","treadmill"];
equipchecked:boolean=false
advancedoptionisShow:boolean=false;
fontStyleControl = new FormControl('Select age group to improve relevance of exercises!');
fontStyle?: string;
private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();
  if(this.options.filter(option => option.toLowerCase().includes(filterValue))[0]==undefined){
    return [`Sorry we dont have results for ${value}!`]
  }
  else{
    return this.options.filter(option => option.toLowerCase().includes(filterValue));

  }


}
public getScreenWidth: any;
public getScreenHeight: any;
  
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
  this.getScreenHeight = window.innerHeight;

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  
  }

  onChange(e:any,formcontrol:any,optionslist:any,checked:any){
    console.log(formcontrol?.value?.length==optionslist.length)
 
    if(formcontrol?.value?.length==optionslist.length){
      console.log("hi")
      this.checked=true
    }
    else{
      this.checked=false
    }
   


  }


  onextypeChange(){
    console.log(this.exercisetypeformcontrol?.value?.length==this.exercisetypeList.length)
 
    if(this.exercisetypeformcontrol?.value?.length==this.exercisetypeList.length){
      console.log("hi")
      this. exercisetypechecked=true
    }
    else{
      this. exercisetypechecked=false
    }
   


  }


  onexdiffChange(){
    console.log(this.exercisediffformcontrol?.value?.length==this.exercisediffList.length)
 
    if(this.exercisediffformcontrol?.value?.length==this.exercisediffList.length){
      console.log("hi")
      this. exercisediffchecked=true
    }
    else{
      this. exercisediffchecked=false
    }
   


  }
  onequipChange(){
    console.log(this.equipformcontrol?.value?.length==this.equipList.length)
 
    if(this.equipformcontrol?.value?.length==this.equipList.length){
      console.log("hi")
      this. equipchecked=true
    }
    else{
      this. equipchecked=false
    }
   


  }






    toggleAll(event:any,formcontrol:any,optionslist:any,checked:any){
      
      

     if(formcontrol?.value?.length==optionslist.length){
      formcontrol.patchValue([])
      this["checked"]=false
     
      

     }
     else{
      formcontrol.patchValue(optionslist)
      this.checked=true
      
      
     }

    
    }

    extypetoggleAll(){
      
      

      if(this.exercisetypeformcontrol?.value?.length==this.exercisetypeList.length){
        this.exercisetypeformcontrol?.patchValue([])
       this.exercisetypechecked=false
      
       
 
      }
      else{
        this.exercisetypeformcontrol?.patchValue(this.exercisetypeList)
       this.exercisetypechecked=true
       
       
      }
 
     
     }

     exdifftoggleAll(){
      
      

      if(this.exercisediffformcontrol?.value?.length==this.exercisediffList.length){
        this.exercisediffformcontrol?.patchValue([])
       this.exercisediffchecked=false
      
       
 
      }
      else{
        this.exercisediffformcontrol?.patchValue(this.exercisediffList)
       this.exercisediffchecked=true
       
       
      }
 
     
     }

     equiptoggleAll(){
      
      

      if(this.equipformcontrol?.value?.length==this.equipList.length){
        this.equipformcontrol?.patchValue([])
       this.equipchecked=false
      
       
 
      }
      else{
        this.equipformcontrol?.patchValue(this.equipList)
       this.equipchecked=true
       
       
      }
 
     
     }


     onChangeadvancedoptions(e:any){
      this.advancedoptionisShow=e.checked


     }

     @ViewChild('widgetsContent') widgetsContent: ElementRef;
     scrollLeft(){
      
      this.widgetsContent.nativeElement.scrollLeft -= this.getScreenWidth*0.3;
    }
  
    scrollRight(){
      this.widgetsContent.nativeElement.scrollLeft += this.getScreenWidth*0.3;
    }
  

}
