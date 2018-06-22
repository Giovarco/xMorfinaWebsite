import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  // If the user tries to accessa a non-existing end-point, redirect to Home Page
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
  { path : "homepage", component : HomePageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
