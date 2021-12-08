import { Component, OnInit } from '@angular/core';

/** */
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  usuarioid = null;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usuarioid = this.route.snapshot.params['id'];
    this.navCtrl.navigateForward(['/tabs/' + this.usuarioid + '/bie-prof/', this.usuarioid]);
  }

  opcion1() {
    this.navCtrl.navigateForward(['/tabs/' + this.usuarioid + '/generar-qr', this.usuarioid]);
  };
  opcion2() {
    this.navCtrl.navigateForward(['/tabs/' + this.usuarioid + '/bie-prof', this.usuarioid]);
  };
  opcion3() {
    this.navCtrl.navigateForward(['/home']);
  };
  opcion4() {
    this.navCtrl.navigateForward(['/tabs/' + this.usuarioid + '/listado-asis-profe/', this.usuarioid]);
  };
}
