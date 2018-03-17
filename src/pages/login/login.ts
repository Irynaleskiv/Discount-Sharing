import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';
import { AuthService } from "../../providers/auth.service";


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, private authService: AuthService) { }

  onLogin() {
    this.submitted = true;

    this.authService.facebookLogin()
      .then((data) => {
        console.log('data', data);
        this.userData.login(this.login.username);
        this.navCtrl.push(TabsPage);
      });

    // if (form.valid) {
      this.userData.login(this.login.username);
    //   this.navCtrl.push(TabsPage);
    // }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
