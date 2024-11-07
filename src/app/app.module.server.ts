import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloModule } from './modulo/modulo.module';
import { FormsModule } from '@angular/forms';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModule,
    FormsModule
    
  ],
  bootstrap: [AppComponent] 
})

export class AppServerModule { }



