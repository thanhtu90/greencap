import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';
import { AlertController } from 'ionic-angular';

import { AccountService } from  '../../providers/AccountService'

@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [AccountService]
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, public accountService: AccountService,public alertCtrl: AlertController) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.login(this.login.username);
      this.accountService.login(this.login.username,this.login.password).subscribe(
          data => {
            if (data.status == 'success') {

                this.accountService.logged_in(data);

                this.navCtrl.push(TabsPage);
            } else {
                this.showAlert(data);
            }
          },
          err => {
            console.log('Loi');
          });
      // this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

    showAlert(data) {
        let alert = this.alertCtrl.create({
            title: 'Đăng nhập không thành công!',
            subTitle: data.data,
            buttons: ['OK']
        });
        alert.present();
    }
}
