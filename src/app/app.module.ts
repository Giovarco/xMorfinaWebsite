import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavingationBarComponent } from './navingation-bar/navingation-bar.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HttpClientModule } from "@angular/common/http";
import { AddDesignPageComponent } from './add-design-page/add-design-page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavingationBarComponent,
    ContactPageComponent,
    AddDesignPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
