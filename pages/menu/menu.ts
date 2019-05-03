import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  styleUrls: ['./menu.css']
})
export class MenuPage {

  constructor(
    public navCtrl: NavController
  ) {

  }

}
