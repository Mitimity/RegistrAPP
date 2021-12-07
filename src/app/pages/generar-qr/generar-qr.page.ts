import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { ToastController } from '@ionic/angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

import { CursoI } from 'src/app/model/curso';
import { ApiDjangoService } from 'src/app/services/api-django.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {
  date:Date;
  //
  array_curso: CursoI[];
  usuarioid = null;
  //indicar direccion o elemento a generar como codigo QR
  qrData="http://www.google.cl";
  //establecer el tipo de elemento que sera utilizado
  elementType: 'url' | 'img' | 'canvas'= 'canvas';
  
  
  constructor(private barcodeScanner : BarcodeScanner,
              private toastCtrl: ToastController, 
              private base64ToGallery : Base64ToGallery,
              private api_django_service: ApiDjangoService,
              private route: ActivatedRoute,
              private loading: LoadingController,
              ) {}


  ngOnInit() {
    this.usuarioid = this.route.snapshot.params['id'];
    this.cargarClase();
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
  
  scanerCode(){
  }
}
