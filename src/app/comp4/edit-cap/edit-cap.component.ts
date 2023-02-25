import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoveService } from 'src/app/service/move.service';
import { ServconectService } from 'src/app/service/servconect.service';
import { CapIDB } from 'src/Int';

@Component({
  selector: 'app-edit-cap',
  templateUrl: './edit-cap.component.html',
  styleUrls: ['./edit-cap.component.css']
})
export class EditCapComponent implements OnInit {

   cap!: CapIDB

  constructor(
    private servConect: ServconectService,
    private router: Router,
    private move: MoveService
  ) { }

  ngOnInit(): void {
    this.cap = this.move.emitCap()
  }

  onUpdate(): void{
    const id = this.cap.id;
    this.servConect.upCap(this.cap).subscribe(
      data => {
        this.router.navigate(["capacitaciones"])
      }, err => {
        alert("Error al modificar capacitaciones");
      }
    )
  }

  
}
