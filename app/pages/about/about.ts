import { Component , NgZone} from '@angular/core';

import { PopoverController, ViewController } from 'ionic-angular';
import * as io from 'socket.io-client';
import { Firebaseservice } from '../../providers/firebaseservice/firebaseservice';

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `,
  providers: [Firebaseservice]
})
class PopoverPage {

  constructor(public viewCtrl: ViewController) { }

  close() {
    this.viewCtrl.dismiss();
  }
}


@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';
  socket: SocketIOClient.Socket;
  chatinp = '';
  chats = [];
  person= '111';

  constructor(public popoverCtrl: PopoverController, private zone: NgZone, private firebaseservice: Firebaseservice) {
    /*
    this.socket = io('http://localhost:3000');
    this.socket.on('message', (msg) => {
      this.zone.run(() => {
        this.chats.push(msg);
      });
    });
    */
    this.firebaseservice.syncMessage( this.zone, this.chats);
  }
  send (sender,msg) {
    console.log(msg);
    console.log(sender);
    /*
    if (msg !== '') {
      this.socket.emit('message', msg);
    }
    this.chatinp = '';
    */
    if (msg !== '') {
      this.firebaseservice.sendNewMessage(sender, msg);
    }
    this.chatinp = '';
  }

  getTitle () {
    console.log('get title hit');
    this.firebaseservice.getData()
        .subscribe(data => this.person = data);
    console.log(this.person);
    this.firebaseservice.updateUserData('tu', 'tu_le');
    var temp = {'tu' : true };
    // this.firebaseservice.writeNewUser('ti_du', 'nguyen_thi_ti_du', temp);
  }

  reset () {
    this.person = '';
  }

  writeData() {
    
  }
}
