import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoveService } from 'src/app/service/move.service';
import { ServconectService } from 'src/app/service/servconect.service';
import { TokenService } from 'src/app/service/token.service';
import { PerfilIBD } from 'src/Int';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datosPerfil: PerfilIBD[] = []; 
  status: boolean = false;

  constructor(
    private servconect: ServconectService,
    private tokeService: TokenService,
    private move: MoveService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.tokeService.getToken()){
      this.status = true;
    } else {
      this.status = false;
    };

    this.servconect.getPerfil().subscribe((var1) =>(
      this.datosPerfil = var1
    ))

  }

  editPerfil(val: PerfilIBD) {
    this.move.editPer(val);
    this.router.navigate(["editper"]);
  }
}
