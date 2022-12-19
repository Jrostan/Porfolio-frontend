import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpLabComponent } from './comp1/exp-lab/exp-lab.component'; 
import { CapacitacionesComponent } from "./comp1/capacitaciones/capacitaciones.component"
import { HabilidadesComponent } from "./comp1/habilidades/habilidades.component"


const routes: Routes = [
  {path: "experiencias", component:ExpLabComponent},
  {path: "capacitaciones", component:CapacitacionesComponent},
  {path: "habilidades", component:HabilidadesComponent},
  {path: "**", redirectTo: "experiencias", pathMatch: "full"}, //en el redicto se indica hacia donde se redirecciona
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
