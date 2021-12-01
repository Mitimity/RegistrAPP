import { Component, OnInit } from '@angular/core';

/** */
import { Usuario } from '../model/usuario';
import { ApiService } from 'src/app/api.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

/* django */
import { ProfesorI } from 'src/app/model/profesor';
import { ApiDjangoService } from 'src/app/services/api-django.service';
import { CursoI } from 'src/app/model/curso';

@Component({
  selector: 'app-bie-prof',
  templateUrl: './bie-prof.page.html',
  styleUrls: ['./bie-prof.page.scss'],
})
export class BieProfPage implements OnInit {

  /* django */
  profesor: ProfesorI = {
    rut: '',
    nombre: '',
    apellido: '',
    password: '',
  };
  array_profe: ProfesorI[];
  array_curso: CursoI[];
/*
  use: Usuario = {
    nombre: '',
    pass: '',
    tipo: null,
  };
  */
  usuarioid = null;

  constructor(
    private api_service: ApiService,
    private navCtrl: NavController,
    private loading: LoadingController,
    private route: ActivatedRoute,
    private api_django_service: ApiDjangoService
  ) { }

  ngOnInit() {
    this.usuarioid = this.route.snapshot.params['id'];
    this.cargarProfe();
    this.cargarClase();
  }
  /*    FIREBASE
  async cargarUsuario() {
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.apiService.getUno(this.usuarioid).subscribe(resp => {
      loading.dismiss();
      this.use=resp;
    });
  }
  */
  async cargarProfe() {
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.api_django_service.getProfesor(this.usuarioid).subscribe(resp => {
      loading.dismiss();
      this.array_profe = resp;
    });
  }

  async cargarClase() {
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.api_django_service.getCurso(this.usuarioid).subscribe(resp => {
      loading.dismiss();
      this.array_curso = resp;
    });
  }
}
