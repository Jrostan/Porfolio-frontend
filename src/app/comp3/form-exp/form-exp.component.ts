import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExpIDB } from 'src/Int';

@Component({
  selector: 'app-form-exp',
  templateUrl: './form-exp.component.html',
  styleUrls: ['./form-exp.component.css']
})
export class FormExpComponent implements OnInit {
  @Output() agregarExperiencia: EventEmitter<ExpIDB> = new EventEmitter();

  puesto: string = "";
  descpuesto: string = "";
  inicio: string = "";
  fin: string = "";
  lugar: string = "";
  logo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  cargarExp() {
    if((this.puesto.length === 0 || this.descpuesto.length === 0) || (this.inicio.length === 0 || this.lugar.length === 0)) {
      alert("por favor complete todos los campos necesarios")
    } else {

    const newExp = {
      puesto: this.puesto,
      inicio: this.inicio,
      final: this.fin,
      dec_puesto: this.descpuesto,
      empresa: this.lugar,
      url_logo: this.logo
    };

    this.agregarExperiencia.emit(newExp);
  };
  }
}
