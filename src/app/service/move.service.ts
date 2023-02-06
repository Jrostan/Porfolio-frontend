import { Injectable } from '@angular/core';
import { CapIDB } from 'src/Int';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private capacitacion!: CapIDB;

  constructor() { }

  editCap(val: CapIDB): void {
    this.capacitacion = val;
  }

  emitCap(): CapIDB{
    return this.capacitacion
  }

}
