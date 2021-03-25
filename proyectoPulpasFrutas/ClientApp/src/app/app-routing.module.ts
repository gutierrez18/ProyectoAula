import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductoRegistroComponent } from './pulpa/producto-registro/producto-registro.component';
import { ProductoConsultaComponent } from './pulpa/producto-consulta/producto-consulta.component';
import { ClienteRegistroComponent } from './cliente/cliente-registro/cliente-registro.component';
import { ClienteConsultaComponent } from './cliente/cliente-consulta/cliente-consulta.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'Registrar_producto', component: ProductoRegistroComponent },
      {path: 'Consultar_Producto', component: ProductoConsultaComponent },
      {path: 'Registrar_cliente', component: ClienteRegistroComponent },
      {path: 'Consultar_cliente', component: ClienteConsultaComponent },
    ]),
  ]
})
export class AppRoutingModule { }
