import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {
  //indicar direccion o elemento a generar como codigo QR
  qrData="http://www.google.cl";
  //establecer el tipo de elemento que sera utilizado
  elementType: 'url' | 'img' | 'canvas'= 'canvas';
  
  
  constructor(private barcodeScanner : BarcodeScanner,
              private toastCtrl: ToastController, 
              private base64ToGallery : Base64ToGallery) { }


  ngOnInit() {
  }
  
  scanerCode(){
  }
}
