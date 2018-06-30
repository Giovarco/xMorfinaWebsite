import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { AddDesignPageComponent } from "./add-design-page/add-design-page.component";

const routes: Routes = [
  { path : "addDesign", component : AddDesignPageComponent },
  { path : "homepage", component : HomePageComponent },
  { path : "contact", component : ContactPageComponent },
  { path: '**', redirectTo: '/homepage'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
