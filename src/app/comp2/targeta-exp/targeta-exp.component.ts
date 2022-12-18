import { Component, OnInit, Input } from '@angular/core';
import { ExpIDB } from 'src/Int';


@Component({
  selector: 'app-targeta-exp',
  templateUrl: './targeta-exp.component.html',
  styleUrls: ['./targeta-exp.component.css']
})
export class TargetaExpComponent implements OnInit {

  @Input() tarjetas!: ExpIDB

  constructor() { }

  ngOnInit(): void {
   
  }

}
