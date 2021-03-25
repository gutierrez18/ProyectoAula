import { Injectable } from '@angular/core';
import { Producto } from '../pulpa/models/producto';

@Injectable({
  providedIn: 'root'
})
export class PulpaService {

  constructor() { }
  get(): Producto[] {
    return JSON.parse(localStorage.getItem('datos'));
    }
    
    post(producto: Producto) {
      let productos: Producto[] = [];
      if (this.get() != null) {
      productos = this.get();
      }
      productos.push(producto);
      localStorage.setItem('datos', JSON.stringify(productos));
      }
      

}
