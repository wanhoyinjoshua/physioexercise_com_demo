import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaincontentComponent} from "../app/maincontent/maincontent.component"
import {CustomexercisetableviewComponent} from "../app//customexercisetableview/customexercisetableview.component"
import {V0customexercisetableComponent} from "../app/v0/v0customexercisetable/v0customexercisetable.component"
import {ExercisecollectionComponent} from "../app/exercisecollection/exercisecollection.component"
import {SearchpageComponent} from "../app/searchpage/searchpage.component"
import {SearchbartwoComponent} from "../app/searchbartwo/searchbartwo.component"
const routes: Routes = [

  {path:'',component:MaincontentComponent},
  {path:'custom/usersviewing',component:CustomexercisetableviewComponent},
  {path:'v0/custom/usersviewing',component:V0customexercisetableComponent},
  {path:'home/collections',component:ExercisecollectionComponent},
  {path:'home/search',component:SearchpageComponent},
  {path:'v1/home/search',component:SearchbartwoComponent},


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
