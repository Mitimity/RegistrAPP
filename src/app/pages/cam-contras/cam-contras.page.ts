import { Component, OnInit } from '@angular/core';

//librerias
import { NavController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cam-contras',
  templateUrl: './cam-contras.page.html',
  styleUrls: ['./cam-contras.page.scss'],
})

export class CamContrasPage implements OnInit {
  usuario: string;
  pass: string;
/*
  user: Usuario = {
    nombre: '',
    pass: '',
    tipo: 1,
  };

  array_usuarios: Usuario[];
*/
  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCrtl: ToastController
  ) { }

  ngOnInit() {
  }

  validar() {
    console.log('Falta editar');

    /*
this.api.getTodos().subscribe(resp => {
  this.array_usuarios = resp;

  this.array_usuarios.forEach(item => {
    if (item.nombre == this.usuario) {
      this.user.nombre = item.nombre;
      this.user.pass = this.pass;
      this.user.tipo = item.tipo;

      this.updateUsuario(item.id);
    }
  });
});
};
async updateUsuario(id: string) {
  const loading = await this.loadingCtrl.create({
    message: "Actualizando..."
  });
  await loading.present();
  
  this.api.updateUsuario(this.user, id).then(() => {
    loading.dismiss();
    this.navCtrl.navigateForward("/");
  });
}
*/
  }
}
