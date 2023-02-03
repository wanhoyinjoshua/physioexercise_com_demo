import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaincontentComponent} from "../app/maincontent/maincontent.component"
import {CustomexercisetableviewComponent} from "../app//customexercisetableview/customexercisetableview.component"
const routes: Routes = [

  {path:'',component:MaincontentComponent},
  {path:'custom/usersviewing',component:CustomexercisetableviewComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
