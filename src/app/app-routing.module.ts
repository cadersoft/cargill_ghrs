import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { ProcessComponent } from './process/process.component';

const routes: Routes = [
  {
    path:"",
    component: Home1Component
  },
  {
    path:"process/:id",
    component:ProcessComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
