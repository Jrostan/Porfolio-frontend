import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comp1/header/header.component';
import { ExpLabComponent } from './comp1/exp-lab/exp-lab.component';
import { TargetaExpComponent } from './comp2/targeta-exp/targeta-exp.component';
import { CapacitacionesComponent } from './comp1/capacitaciones/capacitaciones.component';
import { HabilidadesComponent } from './comp1/habilidades/habilidades.component';
import { TarjetaCapComponent } from './comp2/tarjeta-cap/tarjeta-cap.component';
import { TarjetaHabilidadComponent } from './comp2/tarjeta-habilidad/tarjeta-habilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpLabComponent,
    TargetaExpComponent,
    CapacitacionesComponent,
    HabilidadesComponent,
    TarjetaCapComponent,
    TarjetaHabilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
