import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TpIDB } from 'src/Int';

@Component({
  selector: 'app-form-pro',
  templateUrl: './form-pro.component.html',
  styleUrls: ['./form-pro.component.css']
})
export class FormProComponent implements OnInit {
  @Output() agregarProyecto: EventEmitter<TpIDB> = new EventEmitter

  proyecto: string = "";
  descripcion: string = "";
  urlImagen: string = "";
  link: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  cargarProyecto() {
    if((this.proyecto.length === 0 || this.descripcion.length === 0) || (this.urlImagen.length === 0 || this.link.length === 0)) {
      alert("por favor complete todos los campos necesarios")
    } else {
      const newPro = {
        proyecto: this.proyecto,
        descripcion: this.descripcion,
        urlImagen: this.urlImagen,
        link: this.link
      };
      window.location.reload();
      this.agregarProyecto.emit(newPro)
    }
  }
}
