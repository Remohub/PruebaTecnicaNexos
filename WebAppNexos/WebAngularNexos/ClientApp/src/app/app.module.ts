import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacientesService } from './pacientes/pacientes.service';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsService } from './doctors/doctors.service';
import { PacientesFormComponent } from './pacientes/pacientes-form/pacientes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PacientesComponent,
    DoctorsComponent,
    PacientesFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'Pacientes', component: PacientesComponent },
      { path: 'Doctors', component: DoctorsComponent },
      { path: 'Pacientes-agregar', component: PacientesFormComponent },
      { path: 'Pacientes-editar/:id', component: PacientesFormComponent },

    ])
  ],
  providers: [PacientesService, DoctorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
