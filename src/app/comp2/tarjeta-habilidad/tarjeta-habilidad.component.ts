import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HabIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tarjeta-habilidad',
  templateUrl: './tarjeta-habilidad.component.html',
  styleUrls: ['./tarjeta-habilidad.component.css']
})
export class TarjetaHabilidadComponent implements OnInit {
  habilidades: HabIDB[] = [];
  faTimes = faTimes;

  @Output() deletHabilidad: EventEmitter<HabIDB> = new EventEmitter;

  @Input() tarjeta!: HabIDB;
  textoCss!: string;
  habilidadCss!: string;
  avancePos!: string;
  avanceNeg!: string;

  constructor(
    private servconect: ServconectService
    
  ) { }

  ngOnInit(): void {
    this.textoCss ='"'+this.tarjeta.tecnologia+'"'
    this.habilidadCss = '"'+this.tarjeta.porcentaje+'%"'
    this.avancePos = (180*(this.tarjeta.porcentaje/100))+"deg"
    this.avanceNeg = '-'+(180*(this.tarjeta.porcentaje/100))+'deg'
  }

  borraHab(val: HabIDB) {
    this.deletHabilidad.emit(val)
  };
}
