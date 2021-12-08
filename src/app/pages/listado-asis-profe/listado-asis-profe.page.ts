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
  curso:number;
  rutProfe:string;
  arrayAsis: AsistenciaI[];
  arrayProfe: ProfesorI[];

  constructor(
    private navCtrl: NavController,
    private loading: LoadingController,
    private route: ActivatedRoute,
    private api_django_service: ApiDjangoService
  ) { }

  ngOnInit() {
    this.cargarAsis();
    var datosC=JSON.parse(localStorage.getItem("datos_curso"))
    this.curso=datosC.idCurso;
  }
  async cargarAsis() {
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.api_django_service.getAsistencia(this.curso).subscribe(resp => {
      loading.dismiss();
      this.arrayAsis = resp;
    });
  }
  
  async cargarProfe() {
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.api_django_service.getProfesor(this.rutProfe).subscribe(resp => {
      loading.dismiss();
      this.arrayProfe = resp.nombre;
    });
  }
}
