import { Component, OnInit } from '@angular/core';
import { ServconectService } from 'src/app/service/servconect.service';
import { TokenService } from 'src/app/service/token.service';
import { TpIDB } from 'src/Int';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: TpIDB[] = [];
  status: boolean = false;

  constructor(
    private servconect: ServconectService,
    private tokeService: TokenService
  ) { }

  ngOnInit(): void {
    if(this.tokeService.getToken()){
      this.status = true;
    } else {
      this.status = false;
    }

    this.servconect.getPro().subscribe((var1) => (
      this.proyectos = var1.reverse()
    ))
  }

  agregarProyecto(data: TpIDB) {
    this.servconect.postPro(data).subscribe((data) => (
      this.proyectos.push(data)
    ))
  }

  borrar(val: TpIDB) {
    this.servconect.deltPro(val).subscribe(() => (
      this.proyectos = this.proyectos.filter(temp => temp.id !== val.id)
    ))
    console.log("dkkasjka");
  }
}
