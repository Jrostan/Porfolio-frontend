import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CapIDB } from 'src/Int';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-form-cap',
  templateUrl: './form-cap.component.html',
  styleUrls: ['./form-cap.component.css']
})
export class FormCapComponent implements OnInit {
  @Output() agregarCpacitacion: EventEmitter<CapIDB> = new EventEmitter();

  titulo: string = "";
  formacion: string = "";
  urlformador: string = "";
  formador: string = "";

  //status: boolean = false;

  constructor(
    private Auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  cargar() {
    if ((this.titulo.length === 0 || this.formacion.length === 0) || (this.urlformador.length === 0 || this.formador.length === 0)) {
      alert("por favor complete todos los campos necesarios")
    } else {

      const newCap = {
        titulo: this.titulo,
        descripcion: this.formacion,
        urlLogo: this.urlformador,
        formador: this.formador
      };
      window.location.reload();
      this.agregarCpacitacion.emit(newCap);
    };
  }
}
