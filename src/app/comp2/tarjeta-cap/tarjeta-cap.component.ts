import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CapIDB } from 'src/Int';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { MoveService } from 'src/app/service/move.service';


@Component({
  selector: 'app-tarjeta-cap',
  templateUrl: './tarjeta-cap.component.html',
  styleUrls: ['./tarjeta-cap.component.css']
})
export class TarjetaCapComponent implements OnInit {
  capacitacionesa: CapIDB[] = [];
  faTimes = faTimes;
  status: boolean = false;
  logoName!: string;
  desc!: string;

  @Output() deletCapacitaciones: EventEmitter<CapIDB> = new EventEmitter;
  
  @Input() tarjetas!: CapIDB

  constructor(
    private tokeService: TokenService,
    private router: Router,
    private move: MoveService
  ) { }

  ngOnInit(): void {
    this.logoName = "Logo " + this.tarjetas.formador;
    
    if(this.tokeService.getToken()){
      this.status = true;
    } else {
      this.status = false;
    };
  }

  borrarCap(val: CapIDB) {
    this.deletCapacitaciones.emit(val);
  }

  editCap(val: CapIDB) {
    this.move.editCap(val)
    this.router.navigate(["editcap"])
  }

}
