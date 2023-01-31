import { Component, OnInit,} from '@angular/core';
import { PerfilIBD } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { LoginUsuario } from 'src/app/module/login-usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //variables de login
  isLogged: boolean = false;
  isLogginFail: boolean = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;


  //variables de contenido
  datosPerfil: PerfilIBD[] = []; 

  //variables de aspecto
  color: string = "red";

  titulo: string = "este es el header"

  constructor(
    private servconect: ServconectService,
    private Auth: AuthService,
    private tokenservis: TokenService,
    private router: Router // no lo estoy usando
  ) { }

  ngOnInit(): void {
    if(this.tokenservis.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenservis.getAuthorities();
    };
    
    this.servconect.getPerfil().subscribe((var1) =>(
      this.datosPerfil = var1
    ));
    
  }

  login(): void{
    if(this.isLogged){
      this.Auth.status = false;
      this.isLogged = !this.isLogged;
      this.tokenservis.logOut();
      window.location.reload();
    } else {
      this.onLogin()
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.Auth.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenservis.setToken(data.token);
      this.tokenservis.setUserName(data.nombreUsuario);
      this.tokenservis.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.Auth.status = true;
      this.router.navigate(['']);
    }, err =>{
      this.isLogged = false;
      this.isLogginFail = true;
      this.Auth.status = false;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
      alert(this.errMsj);
    } )
  }
}
