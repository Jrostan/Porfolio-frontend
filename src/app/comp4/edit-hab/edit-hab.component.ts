import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoveService } from 'src/app/service/move.service';
import { ServconectService } from 'src/app/service/servconect.service';
import { HabIDB } from 'src/Int';

@Component({
  selector: 'app-edit-hab',
  templateUrl: './edit-hab.component.html',
  styleUrls: ['./edit-hab.component.css']
})
export class EditHabComponent implements OnInit {

  hab!: HabIDB;
  colBar!: string;

  constructor(
    private servConect: ServconectService,
    private router: Router,
    private move: MoveService
  ) { }

  ngOnInit(): void {
    this.hab = this.move.emitHab();
    this.colBar = this.hab.colorBarraFuerte//this.rgbToHex(this.hab.colorBarraFuerte)
    
  }

  hexToRgb(hex:string) {// transforma color hex a color rgb
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : 0;
  }

  onUpdate(): void {

    let temp: any = (this.hexToRgb(this.hab.colorBarraFuerte))
    this.hab.colorBarraDebil = 'rgba('+temp.r+','+temp.g+','+temp.b+',0.2)'

    const id = this.hab.id;
    this.servConect.upHab(this.hab).subscribe(
      data => {
        this.router.navigate(["habilidades"])
      }, err => {
        alert("Error al modificar experiencia");
      }
    )
  }
}
