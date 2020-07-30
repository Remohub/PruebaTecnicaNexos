import { Component, OnInit } from '@angular/core';
import { IPaciente } from './paciente';
import { PacientesService } from './pacientes.service';
import { error } from 'util';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: IPaciente[];

  
  constructor(private pacientesService: PacientesService) { }

  ngOnInit() {
    this.cargarData();
  }

  cargarData() {
    this.pacientesService.getPacientes()
      .subscribe(personasDesdeWS => this.pacientes = personasDesdeWS,
        error => console.error(error));
  }

}
