import { Inject, Injectable } from '@angular/core';
import { PerfilIBD, ExpIDB, HabIDB, CapIDB  } from 'src/Int';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DOCUMENT } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ServconectService {
  
  private apiURL = "http://localhost:3200/";

  private urlHed = this.apiURL+"perfil/";
  private urlExp = this.apiURL+"experiencia_laboral/";
  private urlHab = this.apiURL+"Habilidades_digitales/";
  private urlCap = this.apiURL+"capacitaciones/";
  

  constructor(
    private http:HttpClient

  ) { }

  getPerfil(): Observable<PerfilIBD[]> {
    return this.http.get<PerfilIBD[]>(this.urlHed);
  }

  getExp(): Observable<ExpIDB[]> {
    return this.http.get<ExpIDB[]>(this.urlExp);
  }

  getHab(): Observable<HabIDB[]> {
    return this.http.get<HabIDB[]>(this.urlHab);
  }

  getCap(): Observable<CapIDB[]> {
    return this.http.get<CapIDB[]>(this.urlCap);
  }

}
