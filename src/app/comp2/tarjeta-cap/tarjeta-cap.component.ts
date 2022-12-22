import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CapIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tarjeta-cap',
  templateUrl: './tarjeta-cap.component.html',
  styleUrls: ['./tarjeta-cap.component.css']
})
export class TarjetaCapComponent implements OnInit {
  capacitacionesa: CapIDB[] = [];
  faTimes = faTimes;

  @Output() deletCapacitaciones: EventEmitter<CapIDB> = new EventEmitter;

  @Input() tarjetas!: CapIDB

  constructor(
    private servconect: ServconectService
  ) { }

  ngOnInit(): void {
  }

  borrarCap(val: CapIDB) {
    this.deletCapacitaciones.emit(val)
  }

}
