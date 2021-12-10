import { Component, OnInit } from '@angular/core';

/** */
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

/* django */
import { ProfesorI } from 'src/app/model/profesor';
import { AsistenciaI } from 'src/app/model/asistencia';
import { ApiDjangoService } from 'src/app/services/api-django.service';
import { CursoI } from 'src/app/model/curso';
import { stringify } from '@angular/compiler/src/util';

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
  array_asis: AsistenciaI[];
  array_curso: CursoI[];
  usuarioid = null;
  nombre_com: any;
  constructor(
    private navCtrl: NavController,
    private loading: LoadingController,
    private route: ActivatedRoute,
    private api_django_service: ApiDjangoService
  ) { }

  ngOnInit() {
    this.usuarioid = this.route.snapshot.params['id'];
    this.cargarProfe();
    this.cargarCurso();
  }

  async cargarProfe() {
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.api_django_service.getProfesor(this.usuarioid).subscribe(resp => {
      loading.dismiss();
      this.array_profe = resp;
      this.nombre_com= this.array_profe[0].nombre+" "+this.array_profe[0].apellido;
    });
  }


  async cargarCurso() {
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.api_django_service.getCurso(this.usuarioid).subscribe(resp => {
      loading.dismiss();
      this.array_curso = resp;
    });
  }

  listar(idC:number){
    var datosC={
      idCurso:idC,
      rutProfe:this.usuarioid,
      nombre_profe: this.nombre_com
    }
    localStorage.setItem("datos_curso",JSON.stringify(datosC))    
    this.navCtrl.navigateForward(['/tabs/'+ this.usuarioid+'/listado-asis-profe/'+idC]);
  }
}
