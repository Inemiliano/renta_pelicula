import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './modulo/compra/compra.component';
import { PrincipalComponent } from './modulo/principal/principal.component';
import { HistorialComponent } from './modulo/historial/historial.component';
import { LoginComponent } from './modulo/login/login.component';
import { LoginForComponent } from './modulo/login-for/login-for.component';

const routes: Routes = [

  {path: 'compra',component:CompraComponent},
  {path: 'principal',component:PrincipalComponent},
  {path: 'historial',component:HistorialComponent},
  {path: 'login',component:LoginComponent},
  {path: '',component:LoginForComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
