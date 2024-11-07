import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './modulo/compra/compra.component';
import { PrincipalComponent } from './modulo/principal/principal.component';
import { HistorialComponent } from './modulo/historial/historial.component';
import { LoginComponent } from './modulo/login/login.component';
import { LoginForComponent } from './modulo/login-for/login-for.component';
import { SeriesComponent } from './modulo/series/series.component';
import { SubscriptionComponent } from './modulo/subscription/subscription.component';
import { LoginSuscpComponent } from './modulo/login-suscp/login-suscp.component';

const routes: Routes = [

  {path: 'compra',component:CompraComponent},
  {path: 'principal',component:PrincipalComponent},
  {path: 'series',component:SeriesComponent},
  {path: 'historial',component:HistorialComponent},
  {path: '',component:LoginComponent},
  {path: 'formulario',component:LoginForComponent},
  {path: 'subscrip',component:SubscriptionComponent},
  {path: 'pago', component:LoginSuscpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
