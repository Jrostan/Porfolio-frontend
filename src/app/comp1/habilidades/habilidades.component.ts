import { Component, OnInit } from '@angular/core';
import { HabIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: HabIDB[] = [];

  constructor(
    private servconect: ServconectService
  ) { }

  ngOnInit(): void {

    this.servconect.getHab().subscribe((var1) =>(
      this.habilidades = var1
    ))
  }

  agregarHabilidad(data: HabIDB) {
    this.servconect.postHab(data).subscribe((data) => (
      this.habilidades.push(data)
    ))
  }

}
