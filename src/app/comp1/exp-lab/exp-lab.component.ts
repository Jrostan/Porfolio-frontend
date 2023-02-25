import { Component, OnInit } from '@angular/core';
import { ExpIDB } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-exp-lab',
  templateUrl: './exp-lab.component.html',
  styleUrls: ['./exp-lab.component.css']
})
export class ExpLabComponent implements OnInit {

  experiencias: ExpIDB[] = [];
  status: boolean = false;

  constructor(
    private servconect: ServconectService,
    private tokeService: TokenService
  ) { }

  ngOnInit(): void {
    if(this.tokeService.getToken()){
      this.status = true;
    } else {
      this.status = false;
    }

    this.servconect.getExp().subscribe((var1) =>(
      this.experiencias = var1.reverse()
      
    ))
  }

  agregarExperiencia(data: ExpIDB) {
    this.servconect.postExp(data).subscribe((data) => (
      this.experiencias.push(data)
    )); 
  }

  borrar(val: ExpIDB) {
    this.servconect.deltExp(val).subscribe(()=>(
      this.experiencias = this.experiencias.filter(temp => temp.id !== val.id)
    ))
  }
}
