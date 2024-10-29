import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './com/navbar/navbar.component';
import { ListaProdComponent } from './com/lista-prod/lista-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
