import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoveService } from 'src/app/service/move.service';
import { ServconectService } from 'src/app/service/servconect.service';
import { PerfilIBD } from 'src/Int';

@Component({
  selector: 'app-edit-per',
  templateUrl: './edit-per.component.html',
  styleUrls: ['./edit-per.component.css']
})
export class EditPerComponent implements OnInit {

  per!: PerfilIBD;

  constructor(
    private servConect: ServconectService,
    private router: Router,
    private move: MoveService
  ) { }

  ngOnInit(): void {

    this.per = this.move.emitPer()
  }

  onUpdate(): void{
    const id = this.per.id;
    this.servConect.upPer(this.per).subscribe(
      data => {
        this.router.navigate(["home"])
      }, err => {
        alert("Error al modificar el perfil")
      }
    )
  }
}
