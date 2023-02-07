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
import {MatMenuModule} from '@angular/material/menu';
import { V0customexercisetableComponent } from '../app/v0/v0customexercisetable/v0customexercisetable.component'
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table' 
import { CommonModule } from '@angular/common'; 
import {MatDialogModule} from '@angular/material/dialog';
import { PopupcardComponent } from './popupcard/popupcard.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

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
    V0customexercisetableComponent,
    PopupcardComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    AppRoutingModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    ...materialModules
  ],
  exports:[
    ...materialModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
