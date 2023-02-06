import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../module/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../module/login-usuario';
import { JwtDto } from '../module/jwt-dto';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  status!: boolean; 
  url = "http://localhost:8080/auth/";

  constructor(
    private http: HttpClient,

  ) { }

  public nuevoUsuario(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.http.post<any>(this.url + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.http.post<JwtDto>(this.url + 'login', loginUsuario)
  }
}