import { Component, OnInit, Input } from '@angular/core';
import { HabIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';


@Component({
  selector: 'app-tarjeta-habilidad',
  templateUrl: './tarjeta-habilidad.component.html',
  styleUrls: ['./tarjeta-habilidad.component.css']
})
export class TarjetaHabilidadComponent implements OnInit {
  
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
    this.avancePos = this.tarjeta.porcentaje+"deg"
    this.avanceNeg = '-'+this.tarjeta.porcentaje+'deg'
    //console.log(this.tarjeta.porcentaje);
    //console.log(this.habilidadCss)
  }
}
