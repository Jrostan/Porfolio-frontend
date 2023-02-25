import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExpIDB } from 'src/Int';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { MoveService } from 'src/app/service/move.service';


@Component({
  selector: 'app-targeta-exp',
  templateUrl: './targeta-exp.component.html',
  styleUrls: ['./targeta-exp.component.css']
})
export class TargetaExpComponent implements OnInit {
  experiencias: ExpIDB[] = [];
  status: boolean = false;

  @Output() deletExperiencia: EventEmitter<ExpIDB> = new EventEmitter;

  @Input() tarjetas!: ExpIDB

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

  }

  borrarExp(val: ExpIDB) {
    this.deletExperiencia.emit(val)
  }

  editExp(val: ExpIDB) {
    this.move.editExp(val);
    this.router.navigate(["editexp"])
  }

}
