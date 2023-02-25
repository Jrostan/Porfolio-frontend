import { Component, OnInit } from '@angular/core';
import { HabIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

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
    private tokeService: TokenService 
  ) { }

  ngOnInit(): void {
    if(this.tokeService.getToken()){
      this.status = true;
    } else {
      this.status = false;
    }

    this.servconect.getHab().subscribe((var1) =>(
      this.habilidades = var1.reverse()
    ))

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
