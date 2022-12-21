import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HabIDB } from 'src/Int';

@Component({
  selector: 'app-form-hab',
  templateUrl: './form-hab.component.html',
  styleUrls: ['./form-hab.component.css']
})
export class FormHabComponent implements OnInit {
  @Output() agregarHabilidad: EventEmitter<HabIDB> = new EventEmitter();

  tecno: string = "";
  porcentaje: number = 0;
  colorBarra: string = "";
  colorBarraDebil: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  hexToRgb(hex:string) {// transforma color hex a color rgb
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : 0;
  }

    cargarHab() : void {
      // inicio validando valores
      if((this.tecno.length === 0) || (this.porcentaje <= 0 || this.porcentaje > 100) ) {
        alert("por favor complete todos los campos necesarios")
      } else {

      //redefiniendo los colores
      let temp: any = (this.hexToRgb(this.colorBarra))
      this.colorBarraDebil = 'rgba('+temp.r+','+temp.g+','+temp.b+',0.2)'
          
      //crea y emite el objeto
      const newHab = {
        tecnologia: this.tecno,
        porcentaje: this.porcentaje,
        colorBaraFuerte: this.colorBarra,
        colorBaraDebil: this.colorBarraDebil
      };
        console.log(newHab);
      this.agregarHabilidad.emit(newHab);

    }
  }
}
