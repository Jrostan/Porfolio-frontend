import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MoveService } from 'src/app/service/move.service';
import { TokenService } from 'src/app/service/token.service';
import { TpIDB } from 'src/Int';

@Component({
  selector: 'app-tarjeta-pro',
  templateUrl: './tarjeta-pro.component.html',
  styleUrls: ['./tarjeta-pro.component.css']
})
export class TarjetaProComponent implements OnInit {
  protectos: TpIDB[] = [];
  status: boolean = false;
  altImg!: string;

  @Output() deletProyecto: EventEmitter<TpIDB> = new EventEmitter;

  @Input() tarjetas!: TpIDB;

  constructor(
    private tokeService: TokenService,
    private router: Router,
    private move: MoveService 
  ) { }

  ngOnInit(): void {
    if(this.tokeService.getToken()){
      this.status = true;
    } else {
      this.status = false;
    };

    this.altImg = this.tarjetas.proyecto
  }

  borrarPro(val: TpIDB){
    this.deletProyecto.emit(val)}

  editPro(val: TpIDB) {
    this.move.editPro(val);
    this.router.navigate(["editpro"])
  }
}
