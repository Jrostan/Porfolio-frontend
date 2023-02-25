import { Injectable } from '@angular/core';
import { PerfilIBD, ExpIDB, HabIDB, CapIDB, TpIDB  } from 'src/Int';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServconectService {
  
  private backURL = "http://localhost:8080/";
 //dir al Back
  private urlCap = this.backURL+"cap/";
  private urlExp = this.backURL+"exp/";
  private urlPer = this.backURL+"per/";
  private urlHab = this.backURL+"hab/";
  private urlPro = this.backURL+"tp/";


  constructor(
    private http:HttpClient

  ) { }
    /*Servicios Gets...*/
  getPerfil(): Observable<PerfilIBD[]> {
    return this.http.get<PerfilIBD[]>(this.urlPer+"lista");
  }

  getExp(): Observable<ExpIDB[]> {
    return this.http.get<ExpIDB[]>(this.urlExp+"lista");
  }

  getHab(): Observable<HabIDB[]> {
    return this.http.get<HabIDB[]>(this.urlHab+"lista");
  }

  getCap(): Observable<CapIDB[]> {
    return this.http.get<CapIDB[]>(this.urlCap+"lista");
  }

  getPro(): Observable<TpIDB[]> {
    return this.http.get<TpIDB[]>(this.urlPro+"lista")
  }


  /*Servicios Posts...*/

  postExp(data: ExpIDB): Observable<ExpIDB> {
    return this.http.post<ExpIDB>(this.urlExp+"create", data, httpOptions);
  }

  postHab(data: HabIDB): Observable<HabIDB> {
    return this.http.post<HabIDB>(this.urlHab+"create", data, httpOptions);
  }

  postCap(data: CapIDB): Observable<CapIDB> {
    return this.http.post<CapIDB>(this.urlCap+"create", data, httpOptions);
  }

  postPro(data: TpIDB): Observable<TpIDB> {
    return this.http.post<TpIDB>(this.urlPro+"create", data, httpOptions);
  }

    /*Servicios Deletes...*/
  deltHab(data: HabIDB): Observable<HabIDB> {
    const url = (this.urlHab)+"delete/"+(data.id);
    return this.http.delete<HabIDB>(url)
  }

  deltCap(data: CapIDB): Observable<CapIDB> {
    const url = (this.urlCap)+"delete/"+(data.id);
    return this.http.delete<CapIDB>(url)
  }

  deltExp(data: ExpIDB): Observable<ExpIDB> {
    const url = (this.urlExp)+"delete/"+(data.id);
    return this.http.delete<ExpIDB>(url)
  }

  deltPro(data: TpIDB): Observable<TpIDB> {
    const url = (this.urlPro)+"delete/"+(data.id);
    return this.http.delete<TpIDB>(url)
  }

  /*Servicios Puts*/
  upCap(data: CapIDB): Observable<CapIDB> {
    const url = this.urlCap+"update/"+(data.id);
    return this.http.put<CapIDB>(url, data, httpOptions)
  }

  upHab(data: HabIDB): Observable<HabIDB> {
    const url = this.urlHab+"update/"+(data.id);
    return this.http.put<HabIDB>(url, data, httpOptions)
  }

  upexp(data: ExpIDB): Observable<ExpIDB> {
    const url = this.urlExp+"update/"+(data.id);
    return this.http.put<ExpIDB>(url, data, httpOptions)
  }

  upPer(data: PerfilIBD): Observable<PerfilIBD> {
    const url = this.urlPer+"update/"+(data.id);
    return this.http.put<PerfilIBD>(url, data, httpOptions)
  }

  upPro(data: TpIDB): Observable<TpIDB> {
    const url = this.urlPro+"update/"+(data.id);
    return this.http.put<TpIDB>(url, data, httpOptions)
  }
}
