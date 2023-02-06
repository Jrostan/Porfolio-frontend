import { Component, OnInit } from '@angular/core';
import { CapIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent implements OnInit {

  capacitaciones: CapIDB[] = [];
  status!: boolean;

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

    this.servconect.getCap().subscribe((var1) =>(
      this.capacitaciones = var1.reverse()
    ))
  }
  
  agregarCpacitacion(data: CapIDB) {
    this.servconect.postCap(data).subscribe((data) => (
      this.capacitaciones.push(data)
    ));
  }

  borrar(val: CapIDB) {
    this.servconect.deltCap(val).subscribe(()=>(
      this.capacitaciones = this.capacitaciones.filter(temp => temp.id !== val.id)
    ))
  }
}
