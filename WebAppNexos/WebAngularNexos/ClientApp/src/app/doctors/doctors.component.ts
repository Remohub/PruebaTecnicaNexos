import { Component, OnInit } from '@angular/core';
import { IDoctor } from './doctor';
import { DoctorsService } from './doctors.service';
import { error } from 'util';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: IDoctor[];

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit() {
    this.cargarData();
  }

  cargarData() {
    this.doctorsService.getDoctors()
      .subscribe(doctorsDesdeWS => this.doctors = doctorsDesdeWS,
        error => console.error(error));
  }

}
