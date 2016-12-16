import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from  '../login/login'


interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'build/pages/tutorial/tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Greencap Investment',
        description: 'Châm ngôn của <b>Greencap Investment</b> chính là "Tự do tài chính trong một thế giới khủng hoảng".',
        image: 'img/GreenCapLogo.png',
      },
      {
        title: 'Công Cụ Độc Quyền',
        description: '<b>Greencap Investment</b> - Ứng dụng độc quyền cung cấp phân tích thị trường.',
        image: 'img/tut-report.png',
      },
      {
        title: 'Giải Pháp Từ Greencap Investment',
        description: '<b>Greencap Investment</b> sẽ cùng bạn khám phá bí mật đằng sau "Công Thức 4 Bước Kỳ Diệu" để đầu tư lợi nhuận và an toàn.',
        image: 'img/tut-tree.png',
      }
    ];
  }

  startApp() {
    var logged_in = false;
    if (logged_in){
      this.navCtrl.push(TabsPage);
    } else {
      this.navCtrl.push(LoginPage);
    }

    // this.navCtrl.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
