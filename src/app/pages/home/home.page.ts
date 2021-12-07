//Importacion de componentes
import { Component } from '@angular/core';

//
import { NavController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

//django
import { ProfesorI } from 'src/app/model/profesor';
import { ApiDjangoService } from 'src/app/services/api-django.service';
import { Condition } from 'selenium-webdriver';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  usuario: string;
  pass: string;
  //
  array_usuarios: ProfesorI[];


  // En interior se declaran objetos  a injectar en TypeScrip
  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCrtl: ToastController,
    //django
    private api_django: ApiDjangoService
  ) { }

  validar() {
    this.api_django.getProfesor(this.usuario).subscribe(
      (data) => {
        try {
          if (this.pass == data[0].password) {
            //console.log(data)
            this.navCtrl.navigateForward(['/tabs/',this.usuario]);
          } 
        } catch (error) {
          this.validarAlumno();
        }
      },
      (e) => {
        console.log(e)
      }
    )
  }
  validarAlumno() {
    this.api_django.getAlumno(this.usuario).subscribe(
      (data) => {
        try {
          if (this.pass == data[0].password) {
            //console.log(data)
            this.navCtrl.navigateForward(['/tab-alumn/',this.usuario]);
          }
        } catch (error) {
          this.mensaje();  
        }
      },
      (e) => {
        console.log(e)
      }
    )
  }

  async mensaje(){
    const toast= await this.toastCrtl.create({
      message:"No existe el usuario o contraseña",
      duration:5000,
      position:'bottom'
    });
    await toast.present();
  }
}