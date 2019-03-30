import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {SectionsService} from "./services/sections.service";
import { NewCardComponent } from './components/new-card/new-card.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableBodyComponent,
    AuthenticationComponent,
    NewCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
