import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './modulo/compra/compra.component';
import { PrincipalComponent } from './modulo/principal/principal.component';
import { HistorialComponent } from './modulo/historial/historial.component';

const routes: Routes = [

  {path: 'compra',component:CompraComponent},
  {path: '',component:PrincipalComponent},
  {path: 'historial',component:HistorialComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
