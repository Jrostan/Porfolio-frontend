import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExpIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-targeta-exp',
  templateUrl: './targeta-exp.component.html',
  styleUrls: ['./targeta-exp.component.css']
})
export class TargetaExpComponent implements OnInit {
  experiencias: ExpIDB[] = [];
  faTimes = faTimes;

  @Output() deletExperiencia: EventEmitter<ExpIDB> = new EventEmitter;

  @Input() tarjetas!: ExpIDB

  constructor(
    private servconect: ServconectService
  ) { }

  ngOnInit(): void {
   
  }

  borrarExp(val: ExpIDB) {
    this.deletExperiencia.emit(val)
  }

}
