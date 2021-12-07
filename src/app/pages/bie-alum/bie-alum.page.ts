import { Component, OnInit } from '@angular/core';

/* importar usuario  */
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

/*  */
import { AlumnoI } from 'src/app/model/alumno';
import { AsistenciaI } from 'src/app/model/asistencia';
import { CursoI } from 'src/app/model/curso';
import { ApiDjangoService } from 'src/app/services/api-django.service';

@Component({
  selector: 'app-bie-alum',
  templateUrl: './bie-alum.page.html',
  styleUrls: ['./bie-alum.page.scss'],
})
export class BieAlumPage implements OnInit {

  /* Alumnos */

  array_alum: AlumnoI[];
  array_curso: CursoI[];

  usuarioid = null;

  constructor(
    private loading: LoadingController,
    private route: ActivatedRoute,
    private api_django_service: ApiDjangoService,
  ) { }

  ngOnInit() {
    this.usuarioid = this.route.snapshot.params['id'];
    this.cargarAlumno();
    this.cargarClase();
  }

  async cargarAlumno() {
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.api_django_service.getAlumno(this.usuarioid).subscribe(resp => {
      loading.dismiss();
      this.array_alum = resp;
    });
  }
  async cargarClase() {
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.api_django_service.getCursos().subscribe(resp => {
      loading.dismiss();
      this.array_curso = resp;
    });
  }
}
