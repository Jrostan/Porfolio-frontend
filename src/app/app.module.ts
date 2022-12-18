import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comp1/header/header.component';
import { ExpLabComponent } from './comp1/exp-lab/exp-lab.component';
import { TargetaExpComponent } from './comp2/targeta-exp/targeta-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpLabComponent,
    TargetaExpComponent
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
