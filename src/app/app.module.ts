import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';

import { AddStazaComponent } from './addstaza/addstaza.component';
import { AddVozacComponent } from './addvozac/addvozac.component';
import { SearchPipe } from './pipes/search'




@NgModule({
imports: [ BrowserModule, HttpModule, routing, FormsModule, ReactiveFormsModule ],
declarations: [ AppComponent, AddStazaComponent, AddVozacComponent, SearchPipe],
bootstrap: [ AppComponent ]
})
export class AppModule { }
