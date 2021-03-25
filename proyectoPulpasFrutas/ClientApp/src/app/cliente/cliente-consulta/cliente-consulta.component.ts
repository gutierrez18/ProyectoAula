import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.css']
})
export class ClienteConsultaComponent implements OnInit {
  personas:Persona[];
  searchText:string;


  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
       this.personas = this.personaService.get();
      
  }

}
