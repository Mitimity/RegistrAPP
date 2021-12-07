import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { ToastController } from '@ionic/angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

import { CursoI } from 'src/app/model/curso';
import { AsistenciaI } from 'src/app/model/asistencia';
import { ApiDjangoService } from 'src/app/services/api-django.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
//
//import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {
  //
  array_curso: CursoI[];
  usuarioid = null;
  //Datos asistencia
  valor: string;
  date= null;
  mostrar=1;


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
              private formsModule: FormsModule,
              //private pipe: DatePipe,
              ) {}


  ngOnInit() {
    this.usuarioid = this.route.snapshot.params['id'];
    this.cargarClase();
  }
  //Cargar clases para input
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
    console.log(this.valor)
    this.mostrar=2;
    var asistencia={
      "rutProfesor": this.usuarioid,
      "fecha": this.date,
      "curso": this.valor,
    }
    console.log(asistencia)
    this.qrData=JSON.stringify(asistencia)
  }

  /*
    var rutProfe=(JSON.parse( localStorage.getItem("usuario"))).rut
    var idCurso = localStorage.getItem("idCurso")
    console.log("Rut:"+rutProfe)
    console.log("IdCurso:"+idCurso)

    var now = Date.now()
    this.fecha= this.pipe.transform(now,'yyyy-MM-dd')
    this.hora=this.pipe.transform(now,'HH:mm:ss')
    var idAsistencia= this.api.getConteo().subscribe(
      (data)=>{
        console.log("Cantidad de Asistencias:"+data)
        var asistencia={
          "idAsistencia": data,
          "rutProfesor": rutProfe,
          "fecha": this.fecha,
          "hora": this.hora,
          "curso": idCurso
        }
        console.log(asistencia)
        this.qrData=JSON.stringify(asistencia)
      },
      (e)=>{
        console.log(e)
      }
    )
    
  }
  
  
  */
}
