import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HabIDB } from 'src/Int';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { MoveService } from 'src/app/service/move.service';
import { TokenService } from 'src/app/service/token.service';



@Component({
  selector: 'app-tarjeta-habilidad',
  templateUrl: './tarjeta-habilidad.component.html',
  styleUrls: ['./tarjeta-habilidad.component.css']
})
export class TarjetaHabilidadComponent implements OnInit {
  habilidades: HabIDB[] = [];
  faTimes = faTimes;
  status: boolean = false;

  @Output() deletHabilidad: EventEmitter<HabIDB> = new EventEmitter;

  @Input() tarjeta!: HabIDB;
  textoCss!: string;
  habilidadCss!: string;
  avancePos!: string;
  avanceNeg!: string;

  constructor(
    private router: Router,
    private move: MoveService,
    private tokeService: TokenService
  ) { }

  ngOnInit(): void {

    if(this.tokeService.getToken()){
      this.status = true;
    } else {
      this.status = false;
    };

    this.textoCss ='"'+this.tarjeta.tecnologia+'"'
    this.habilidadCss = '"'+this.tarjeta.porcentaje+'%"'
    this.avancePos = (180*(this.tarjeta.porcentaje/100))+"deg"
    this.avanceNeg = '-'+(180*(this.tarjeta.porcentaje/100))+'deg'
      }

  borrarHab(val: HabIDB) {
    this.deletHabilidad.emit(val)
  };

  editHab(val: HabIDB) {
    this.move.editHab(val)
    this.router.navigate(["edithab"])
  }
  
}
