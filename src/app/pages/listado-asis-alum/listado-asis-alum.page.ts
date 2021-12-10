import { Component, OnInit } from '@angular/core';

import { ApiDjangoService } from 'src/app/services/api-django.service';
import { AsistenciaI } from 'src/app/model/asistencia';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-asis-alum',
  templateUrl: './listado-asis-alum.page.html',
  styleUrls: ['./listado-asis-alum.page.scss'],
})
export class ListadoAsisAlumPage implements OnInit {

  constructor(
    private api_django_service: ApiDjangoService,
    private route: ActivatedRoute
  ) { }

  nombre: any;
  curso: number;
  rut: any;
  arrayAsis: AsistenciaI[];
  fecha: Date;

  ngOnInit() {
    var datosC = JSON.parse(localStorage.getItem("datos_curso"));
    this.nombre = datosC.nombre_alum;
    this.curso = this.route.snapshot.params['id'];
    this.rut = datosC.rutAlum;
    this.cargarAsis();
  }

  cargarAsis() {
    this.api_django_service.getAsistenciaAlum(this.rut).subscribe(dat => {
      this.arrayAsis = dat;
    })
  }

}
