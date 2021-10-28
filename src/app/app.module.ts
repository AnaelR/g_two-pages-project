import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { FormPagesComponent } from './pages/form-pages/form-pages.component';
import { MenuComponent } from './components/menu/menu.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { ImageComponent } from './components/image-container/image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    FormPagesComponent,
    MenuComponent,
    ImageContainerComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
