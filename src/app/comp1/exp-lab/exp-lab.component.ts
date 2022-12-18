import { Component, OnInit } from '@angular/core';
import { ExpIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';


@Component({
  selector: 'app-exp-lab',
  templateUrl: './exp-lab.component.html',
  styleUrls: ['./exp-lab.component.css']
})
export class ExpLabComponent implements OnInit {

  experiencias: ExpIDB[] = [];

  constructor(
    private servconect: ServconectService
  ) { }

  ngOnInit(): void {

    this.servconect.getExp().subscribe((var1) =>(
      this.experiencias = var1
    ))
  }

}
