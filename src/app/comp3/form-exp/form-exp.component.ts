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
  descPuesto: string = "";
  fechainicio: string = "";
  fechaFinal: string = "";
  empresa: string = "";
  logo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  cargarExp() {
    if((this.puesto.length === 0 || this.descPuesto.length === 0) || (this.fechainicio.length === 0 || this.empresa.length === 0)) {
      alert("por favor complete todos los campos necesarios")
    } else {

    const newExp = {
      puesto: this.puesto,
      fechainicio: this.fechainicio,
      fechaFinal: this.fechaFinal,
      descPuesto: this.descPuesto,
      empresa: this.empresa,
      urlLogo: this.logo
    };
    window.location.reload();
    this.agregarExperiencia.emit(newExp);
  };
  }
}
