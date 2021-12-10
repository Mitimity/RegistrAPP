import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiDjangoService } from 'src/app/services/api-django.service';

import { AsistenciaI } from 'src/app/model/asistencia';
import { ProfesorI } from 'src/app/model/profesor';


@Component({
  selector: 'app-listado-asis-profe',
  templateUrl: './listado-asis-profe.page.html',
  styleUrls: ['./listado-asis-profe.page.scss'],
})
export class ListadoAsisProfePage implements OnInit {
  //
  curso: number;
  rutProfe: string;
  nombre_profe: string;
  arrayAsis: AsistenciaI[];
  arrayProfe: ProfesorI[];

  constructor(
    private navCtrl: NavController,
    private loading: LoadingController,
    private route: ActivatedRoute,
    private api_django_service: ApiDjangoService
  ) { }

  ngOnInit() {
    var datosC = JSON.parse(localStorage.getItem("datos_curso"));
    this.curso = datosC.idCurso;
    this.nombre_profe = datosC.nombre_profe;
    this.cargarAsis();
  }
  cargarAsis() {
    this.api_django_service.getAsistencia(this.curso).subscribe(resp => {
      this.arrayAsis = resp;
    })
  }
}
