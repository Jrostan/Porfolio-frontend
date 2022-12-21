import { Component, OnInit } from '@angular/core';
import { CapIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent implements OnInit {

  capacitaciones: CapIDB[] = [];

  constructor(
    private servconect: ServconectService
  ) { }

  ngOnInit(): void {

    this.servconect.getCap().subscribe((var1) =>(
      this.capacitaciones = var1
    ))
  }
  
  agregarCpacitacion(data: CapIDB) {
    this.servconect.postCap(data).subscribe((data) => (
      this.capacitaciones.push(data)
    ));
  }
}
