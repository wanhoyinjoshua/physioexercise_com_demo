import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CardComponent } from './card/card.component';
import { CardtwobuttonsComponent } from './cardtwobuttons/cardtwobuttons.component';
import { CustomexercisetableviewComponent } from './customexercisetableview/customexercisetableview.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button'
import { ExerciseitemComponent } from './exerciseitem/exerciseitem.component'
import {MatMenuModule} from '@angular/material/menu'

const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    LeftsidebarComponent,
    MaincontentComponent,
    CardComponent,
    CardtwobuttonsComponent,
    CustomexercisetableviewComponent,
    ExerciseitemComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    AppRoutingModule,
    MatMenuModule,
    ...materialModules
  ],
  exports:[
    ...materialModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
