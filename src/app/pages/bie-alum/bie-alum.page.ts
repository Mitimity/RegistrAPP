import { Component, OnInit } from '@angular/core';

/* importar usuario  */
import { Usuario } from '../model/usuario';

import { ApiService } from 'src/app/api.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bie-alum',
  templateUrl: './bie-alum.page.html',
  styleUrls: ['./bie-alum.page.scss'],
})
export class BieAlumPage implements OnInit {

  /* Alumnos */
  usuarios: Usuario[];
  user: Usuario = {
    nombre: '',
    pass: '',
    tipo: null,
  };
  usuarioid = null;
  
  constructor(
    private apiService: ApiService,
    private loading: LoadingController,
    private route: ActivatedRoute
    ) {}

  ngOnInit():void {
    this.usuarioid = this.route.snapshot.params['id'];
    this.cargarUsuario();

    this.apiService.getTodos().subscribe( resp=>{
      this.usuarios = resp;
    })
  }

  async cargarUsuario() {
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.apiService.getUno(this.usuarioid).subscribe(resp => {
      loading.dismiss();
      this.user=resp;
    });
  }

}
