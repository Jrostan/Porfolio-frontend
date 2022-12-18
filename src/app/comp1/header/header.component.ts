import { Component, OnInit,} from '@angular/core';
import { PerfilIBD } from 'src/Int';
import { ServconectService } from 'src/app/service/servconect.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  datosPerfil: PerfilIBD[] = []; 

  titulo: string = "este es el header"

  constructor(
    private servconect: ServconectService
  ) { }

  ngOnInit(): void {


    this.servconect.getPerfil().subscribe((var1) =>(
      this.datosPerfil = var1
    ))
  }
}
