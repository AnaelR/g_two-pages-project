import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePagesComponent} from "./pages/home-pages/home-pages.component";
import {FormPagesComponent} from "./pages/form-pages/form-pages.component";

const routes: Routes = [
  {
    path: '',
    component: HomePagesComponent
  },
  {
    path: 'form',
    component: FormPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
