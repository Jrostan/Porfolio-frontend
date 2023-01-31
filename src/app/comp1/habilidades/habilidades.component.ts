import { Component, OnInit } from '@angular/core';
import { HabIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: HabIDB[] = [];
  status: boolean = false;

  constructor(
    private servconect: ServconectService,
    private Auth: AuthService 
  ) { }

  ngOnInit(): void {

    this.servconect.getHab().subscribe((var1) =>(
      this.habilidades = var1.reverse()
    ))

    this.status = this.Auth.status
  }

  agregarHabilidad(data: HabIDB) {
    this.servconect.postHab(data).subscribe((data) => (
      this.habilidades.push(data)
    ))
  }

  borrar(val:HabIDB){
    this.servconect.deltHab(val).subscribe(()=>(
      this.habilidades = this.habilidades.filter(temp => temp.id !== val.id)
    ))
  }

}
