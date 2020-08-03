import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { IPaciente } from '../paciente';
import { PacientesService } from '../pacientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.css']
})
export class PacientesFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private pacientesService: PacientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  modoEdicion: boolean = false;
  formGroup: FormGroup;
  pacienteId: number;

  ngOnInit() {
    this.formGroup = this.fb.group({

      name: '',
      lastName: '',
      socialSecurityId: 0,
      zipCode: '',
      telephone: ''

    });

    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }

      this.modoEdicion = true;

      this.pacienteId = params["id"];

      this.pacientesService.getPaciente(this.pacienteId.toString())
        .subscribe(paciente => this.cargarFormulario(paciente),
          error => this.router.navigate(["/Pacientes"]));


    });

  }

  cargarFormulario(paciente: IPaciente) {
    this.formGroup.patchValue({

      name: paciente.name,
      lastName: paciente.lastName,
      socialSecurityId: 0,
      zipCode: '',
      telephone: ''
      
    });
  }



  save() {
    let paciente: IPaciente = Object.assign({}, this.formGroup.value);
    console.table(paciente);

    if (this.modoEdicion) {
      // editar el registro
      paciente.id = this.pacienteId;
      this.pacientesService.updatePaciente(paciente)
        .subscribe(paciente => this.onSaveSuccess(),
          error => console.error(error));
    } else {
      // agregar el registro

      this.pacientesService.createPaciente(paciente)
        .subscribe(paciente => this.onSaveSuccess(),
          error => console.error(error));
    }
  }

  onSaveSuccess() {
    this.router.navigate(["/Pacientes"]);
  }

}
