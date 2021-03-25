import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {
persona:Persona;
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    
    this.persona = new Persona;
  }
  

  add(){
    this.personaService.post(this.persona);
    alert('datos guardados');

  }

}
