import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-capturar-qr',
  templateUrl: './capturar-qr.page.html',
  styleUrls: ['./capturar-qr.page.scss'],
})
export class CapturarQrPage implements OnInit {

  constructor(
    private barcodeScan: BarcodeScanner,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.scanner();
  }
  scanner() {
    this.barcodeScan.scan().then(barcodeData => {
      this.presentar(barcodeData.text);
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
}