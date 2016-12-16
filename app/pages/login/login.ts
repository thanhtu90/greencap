import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';

import { AccountService } from  '../../providers/AccountService'

@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [AccountService]
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, public accountService: AccountService) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.accountService.login('tu','thanhtu').subscribe(
          data => {
            if (data.status == 'success') {
                // console.log('Thanh cong roi : '+data.data);
                this.navCtrl.push(TabsPage);
            } else {
                // console.log('Fail roi nha : '+data.status+' Data ne : ' +data.data);
                this.accountService.foo('Dcm');
                var tmp = window.localStorage.getItem('foo');
                console.log(tmp);
                //this.navCtrl.push(TabsPage);
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
}
