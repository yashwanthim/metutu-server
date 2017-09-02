import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import { HomePage} from '../home/home'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private googlePlus: GooglePlus) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
home(){
  this.navCtrl.setRoot(HomePage)
}
profile(){
  this.googlePlus.login({})
  .then(res => console.log(res.displayName))
  .catch(err => console.error(err));
  this.navCtrl.setRoot("ProfilePage")
}
}
