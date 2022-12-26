import { Component, OnInit,} from '@angular/core';
import { PerfilIBD } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: string = "";
  password: string = "";
  status: boolean = false;

  datosPerfil: PerfilIBD[] = []; 
  color: string = "red";

  titulo: string = "este es el header"

  constructor(
    private servconect: ServconectService,
    private Auth: AuthService
  ) { }

  ngOnInit(): void {
    this.servconect.getPerfil().subscribe((var1) =>(
      this.datosPerfil = var1
    ))

    this.status = this.Auth.logIn
  }

  Log(){
    if(this.Auth.logIn === true) {
      this.Auth.logout()
    } else {
      this.Auth.login(this.email, this.password)
    }
  }
}
