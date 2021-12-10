import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ApiDjangoService } from 'src/app/services/api-django.service';
@Component({
  selector: 'app-capturar-qr',
  templateUrl: './capturar-qr.page.html',
  styleUrls: ['./capturar-qr.page.scss'],
})
export class CapturarQrPage implements OnInit {
  
  usuarioid = null;

  constructor(
    private barcodeScan: BarcodeScanner,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private apiDjango: ApiDjangoService
  ) {}

  ngOnInit() {
    this.usuarioid = this.route.snapshot.params['id'];
    this.scanner();
  }
  scanner() {
    this.barcodeScan.scan().then(barcodeData => {
      console.log(barcodeData.text);
      var datos= JSON.parse(barcodeData.text)
      datos["rutAlumno"]=(JSON.parse(this.usuarioid))
      console.log(datos)
      //this.presentar(barcodeData.text);
    });
  }
  async presentar(mensaje: any) {
    let toast = await this.toastCtrl.create({
      message: 'Lectura Scanner: ' + mensaje,
      duration: 5000,
      position: 'top'
    });
    await toast.present();
  }
  
  //
  rutProfesor: string;
  curso: number;
  fecha: Date;

  grabar(){
    var asis={
      "rutProfesor": this.rutProfesor,
      "rutAlumno": this.usuarioid,
      "curso": this.curso,
      "fecha": this.fecha
    }
    console.log(asis);
    this.apiDjango.addAsistencia(asis).subscribe(
      (success)=>{
        console.log(success);
      },
      (e)=>{
        console.log(e);
      }
    );
  }
}