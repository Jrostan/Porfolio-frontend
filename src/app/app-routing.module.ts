import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpLabComponent } from './comp1/exp-lab/exp-lab.component'; 

const routes: Routes = [
  {path: "experiencias", component:ExpLabComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
