import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var firebase: any;
/*
  Generated class for the Firebaseservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Firebaseservice {
  static get parameters() {
    return [[Http]];
  }

  constructor(private  http) {
    this.http = http;
    var config = {
      apiKey: 'AIzaSyDwy0MThYgk5IQaxbAuw4piUPjRpHutHyc',
      authDomain: 'greencap-142808.firebaseapp.com',
      databaseURL: 'https://greencap-142808.firebaseio.com',
      storageBucket: 'greencap-142808.appspot.com',
      messagingSenderId: '588954344231'
    };
    firebase.initializeApp(config);
  }

  private url = 'https://greencap-142808.firebaseio.com/';

  getData () {
    return this.http.get(this.url + 'title.json')
        .map(data => data.json());
  }

  updateUserData(userId, name) {
    firebase.database().ref('users/' + userId).set({
      name: name
    });
  }

  writeNewUser( uid, username, contacts) {
    var user_ref = firebase.database().ref('users/');
    // User entry.
    var userData = {
        'name': username,
        'contacts': contacts
    };

    return user_ref.child(uid).set(userData);
  }

  syncMessage ( zone, chats ) {
    var messRef = firebase.database().ref('messages/');
    messRef.on('child_added', function(snapshot) {
        zone.run(() => {
          var msg = snapshot.val().sender + ':' + snapshot.val().msg;
          console.log(msg);
          return chats.push(msg);
      });
    });
  }

  sendNewMessage ( sender, message){
    var mess_ref = firebase.database().ref('messages/');
    // User entry.
    var messData = {
      'sender': sender,
      'msg': message
    };

    return mess_ref.push().set(messData);
  }
}

