import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoveService } from 'src/app/service/move.service';
import { ServconectService } from 'src/app/service/servconect.service';
import { ExpIDB } from 'src/Int';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  exp!: ExpIDB;

  constructor(
    private servConect: ServconectService,
    private router: Router,
    private move: MoveService
  ) { }

  ngOnInit(): void {
    this.exp = this.move.emitExp();
  }

  onUpdate(): void{
    const id = this.exp.id;
    this.servConect.upexp(this.exp).subscribe(
      data => {
        this.router.navigate(["experiencias"])
      }, err => {
        alert("Error al modificar experiencia");
      }
    )
  }
}
