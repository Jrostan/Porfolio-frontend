import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comp1/header/header.component';
import { ExpLabComponent } from './comp1/exp-lab/exp-lab.component';
import { TargetaExpComponent } from './comp2/targeta-exp/targeta-exp.component';
import { CapacitacionesComponent } from './comp1/capacitaciones/capacitaciones.component';
import { HabilidadesComponent } from './comp1/habilidades/habilidades.component';
import { TarjetaCapComponent } from './comp2/tarjeta-cap/tarjeta-cap.component';
import { TarjetaHabilidadComponent } from './comp2/tarjeta-habilidad/tarjeta-habilidad.component';
import { FormCapComponent } from './comp3/form-cap/form-cap.component';
import { FormExpComponent } from './comp3/form-exp/form-exp.component';
import { FormHabComponent } from './comp3/form-hab/form-hab.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InterceptorService } from './service/interceptor-service';
import { EditCapComponent } from './comp4/edit-cap/edit-cap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpLabComponent,
    TargetaExpComponent,
    CapacitacionesComponent,
    HabilidadesComponent,
    TarjetaCapComponent,
    TarjetaHabilidadComponent,
    FormCapComponent,
    FormExpComponent,
    FormHabComponent,
    EditCapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true //india a angular que tu app trabaja con multiples proveedores
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
