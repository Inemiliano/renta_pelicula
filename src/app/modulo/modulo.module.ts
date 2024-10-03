import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { CompraComponent } from './compra/compra.component';
import { HistorialComponent } from './historial/historial.component';
import { SeriesComponent } from './series/series.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    CompraComponent,
    HistorialComponent,
    SeriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CompraComponent,
    PrincipalComponent,
    HistorialComponent
  ]
})
export class ModuloModule { }
