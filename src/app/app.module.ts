import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
/* barcode */
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

/* inplementacion de servicios */

import { AuthenticationService } from './services/authentication.service';
import { AutGuardService } from './services/aut-guard.service';
import { Storage } from '@ionic/storage';

/* Establecer los servicios como proveedores de servicios */

/* importar librerias */
import { HttpClientModule } from '@angular/common/http';

//
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule
  ],
  
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    Base64ToGallery,
    Storage,
    AutGuardService,
    AuthenticationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
