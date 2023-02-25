import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoveService } from 'src/app/service/move.service';
import { ServconectService } from 'src/app/service/servconect.service';
import { TpIDB } from 'src/Int';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  pro!: TpIDB;

  constructor(
    private servConect: ServconectService,
    private router: Router,
    private move: MoveService
  ) { }

  ngOnInit(): void {
    this.pro = this.move.emitPro()
  }

  onUpdate(): void{
    const id = this.pro.id;
    this.servConect.upPro(this.pro).subscribe(
      data => (
        this.router.navigate(["proyectos"])
      ), err => {
        alert("Error al modificar proyecto")
      }
    )
  }
}
