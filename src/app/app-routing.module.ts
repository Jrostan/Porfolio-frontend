import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpLabComponent } from './comp1/exp-lab/exp-lab.component'; 
import { CapacitacionesComponent } from "./comp1/capacitaciones/capacitaciones.component"
import { HabilidadesComponent } from "./comp1/habilidades/habilidades.component"
import { EditCapComponent } from './comp4/edit-cap/edit-cap.component';
import { EditHabComponent } from './comp4/edit-hab/edit-hab.component';
import { EditExpComponent } from './comp4/edit-exp/edit-exp.component';
import { HomeComponent } from './comp1/home/home.component';
import { ProyectosComponent } from './comp1/proyectos/proyectos.component';
import { EditPerComponent } from './comp4/edit-per/edit-per.component';
import { EditProComponent } from './comp4/edit-pro/edit-pro.component';


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "home", component:HomeComponent},
  {path: "experiencias", component:ExpLabComponent},
  {path: "capacitaciones", component:CapacitacionesComponent},
  {path: "habilidades", component:HabilidadesComponent},
  {path: "proyectos", component:ProyectosComponent},
  {path: "editcap", component:EditCapComponent},
  {path: "edithab", component:EditHabComponent},
  {path: "editexp", component:EditExpComponent},
  {path: "editper", component:EditPerComponent},
  {path: "editpro", component:EditProComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}, //en el redirectTo se indica hacia donde se redirecciona
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
