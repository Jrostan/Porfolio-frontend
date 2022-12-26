import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CapIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-tarjeta-cap',
  templateUrl: './tarjeta-cap.component.html',
  styleUrls: ['./tarjeta-cap.component.css']
})
export class TarjetaCapComponent implements OnInit {
  capacitacionesa: CapIDB[] = [];
  faTimes = faTimes;
  status: boolean = false;

  @Output() deletCapacitaciones: EventEmitter<CapIDB> = new EventEmitter;

  @Input() tarjetas!: CapIDB

  constructor(
    private servconect: ServconectService,
    private Auth: AuthService 
  ) { }

  ngOnInit(): void {
    this.status = this.Auth.logIn
  }

  borrarCap(val: CapIDB) {
    this.deletCapacitaciones.emit(val)
  }

}
