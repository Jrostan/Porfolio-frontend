import { Inject, Injectable } from '@angular/core';
import { PerfilIBD, ExpIDB, HabIDB, CapIDB  } from 'src/Int';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DOCUMENT } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

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
    /*Servicios Gets...*/
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


  /*Servicios Posts...*/
  postExp(data: ExpIDB): Observable<ExpIDB> {
    return this.http.post<ExpIDB>(this.urlExp, data, httpOptions);
  }

  postHab(data: HabIDB): Observable<HabIDB> {
    return this.http.post<HabIDB>(this.urlHab, data, httpOptions);
  }

  postCap(data: CapIDB): Observable<CapIDB> {
    return this.http.post<CapIDB>(this.urlCap, data, httpOptions);
  }

    /*Servicios Delets...*/
  deltHab(data: HabIDB): Observable<HabIDB> {
    const url = (this.urlHab)+"/"+(data.id);
    return this.http.delete<HabIDB>(url)
  }

  deltCap(data: CapIDB): Observable<CapIDB> {
    const url = (this.urlCap)+"/"+(data.id);
    return this.http.delete<CapIDB>(url)
  }

  deltExp(data: ExpIDB): Observable<ExpIDB> {
    const url = (this.urlExp)+"/"+(data.id);
    return this.http.delete<ExpIDB>(url)
  }

}
