import { Component, OnInit, Input } from '@angular/core';
import { CapIDB } from 'src/Int';

@Component({
  selector: 'app-tarjeta-cap',
  templateUrl: './tarjeta-cap.component.html',
  styleUrls: ['./tarjeta-cap.component.css']
})
export class TarjetaCapComponent implements OnInit {

  @Input() tarjetas!: CapIDB

  constructor() { }

  ngOnInit(): void {
  }

}
