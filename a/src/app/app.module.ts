import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopnavComponent } from './my-container/topnav/topnav.component';
import { HeaderComponent } from './my-container/header/header.component';
import { DatabindComponent } from './databind/databind.component';
import {FormsModule} from '@angular/forms';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ngx bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgifComponent } from './ngif/ngif.component';
@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayComponent,
    NgifComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
