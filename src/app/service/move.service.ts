import { Injectable } from '@angular/core';
import { CapIDB, ExpIDB, HabIDB, PerfilIBD, TpIDB } from 'src/Int';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private capacitacion!: CapIDB;
  private habilidad!: HabIDB;
  private experiencia!: ExpIDB;
  private personaPrincipal!: PerfilIBD;
  private proyectos!: TpIDB;

  constructor() { }

  editCap(val: CapIDB): void {
    this.capacitacion = val;
  }

  emitCap(): CapIDB{
    return this.capacitacion
  }

  editHab(val: HabIDB): void{
    this.habilidad = val;
  }

  emitHab(): HabIDB{
    return this.habilidad
  }

  editExp(val: ExpIDB): void{
    this.experiencia = val;
  }

  emitExp(): ExpIDB{
    return this.experiencia;
  }

  editPer(val: PerfilIBD): void{
    this.personaPrincipal = val;
  }

  emitPer(): PerfilIBD{
    return this.personaPrincipal;
  }

  editPro(val: TpIDB): void{
    this.proyectos = val;
  }

  emitPro(): TpIDB{
    return this.proyectos;
  }
}
