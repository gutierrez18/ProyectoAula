import { Component, OnInit } from '@angular/core';
import { PulpaService } from 'src/app/services/pulpa.service';
import { Producto } from '../models/producto';


@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html',
  styleUrls: ['./producto-registro.component.css']
})
export class ProductoRegistroComponent implements OnInit {
  producto:Producto;
  constructor(private pulpaService:PulpaService) { }

  ngOnInit(): void {
    this.producto = new Producto;
  }
  add(){
    this.pulpaService.post(this.producto)
    alert('datos guardados');
  }
}
