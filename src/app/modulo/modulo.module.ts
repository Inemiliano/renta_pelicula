import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraComponent } from './compra/compra.component';
import { HistorialComponent } from './historial/historial.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    CompraComponent,     
    HistorialComponent,   
    PrincipalComponent, 
    LoginComponent     
  ],
  imports: [
    CommonModule          
  ],
  exports: [
    CompraComponent,      
    HistorialComponent,   
    PrincipalComponent     
  ]
})
export class ModuloModule { }