import { Component, OnInit } from '@angular/core';
import { PulpaService } from 'src/app/services/pulpa.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto-consulta',
  templateUrl: './producto-consulta.component.html',
  styleUrls: ['./producto-consulta.component.css']
})
export class ProductoConsultaComponent implements OnInit {
  productos:Producto[];
  searchText:string;



  constructor(private pulpaService:PulpaService) { }

  ngOnInit(): void {
    this.productos=this.pulpaService.get()
  }

}
