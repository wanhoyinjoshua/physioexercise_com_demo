import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    LeftsidebarComponent,
    MaincontentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...materialModules
  ],
  exports:[
    ...materialModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
