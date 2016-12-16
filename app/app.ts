import { Component, ViewChild } from '@angular/core';

import { Events, ionicBootstrap, MenuController, Nav, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';

import { AccountPage } from './pages/account/account';
import { ConferenceData } from './providers/conference-data';

import { LoginPage } from './pages/login/login';
import { SignupPage } from './pages/signup/signup';
import { TabsPage } from './pages/tabs/tabs';
import { TutorialPage } from './pages/tutorial/tutorial';

import { UserData } from './providers/user-data';
import { AccountService } from './providers/AccountService';
import { OneSignal } from 'ionic-native';
import { Firebaseservice } from './providers/firebaseservice/firebaseservice';

interface PageObj {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@Component({
  templateUrl: 'build/app.html',
  providers: [Firebaseservice, AccountService]
})
class ConferenceApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageObj[] = [
    { title: 'Phân Tích', component: TabsPage, icon: 'calendar' },
    { title: 'Tin Tức', component: TabsPage, index: 1, icon: 'contacts' },
    { title: 'Thư Viện', component: TabsPage, index: 2, icon: 'map' },
    { title: 'Hỗ Trợ', component: TabsPage, index: 3, icon: 'information-circle' },
  ];
  loggedInPages: PageObj[] = [
    { title: 'Account', component: AccountPage, icon: 'person' },
    { title: 'Logout', component: TabsPage, icon: 'log-out' }
  ];
  loggedOutPages: PageObj[] = [
    { title: 'Login', component: LoginPage, icon: 'log-in' },
    { title: 'Signup', component: SignupPage, icon: 'person-add' }
  ];
  rootPage: any;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    platform: Platform,
    confData: ConferenceData,
    public accountService: AccountService
  ) {
    // Call any initial plugins when ready
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      /*
      OneSignal.setLogLevel({
        logLevel: 6,
        visualLevel: 6
      });
      */
      /* old -- version
      let notificationOpenedCallback = function(jsonData) {
        console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
      };

      OneSignal.init('de2b7c56-0f7b-4e84-bdf3-85a58b7b0565',
          {googleProjectNumber: '588954344231', autoRegister: true})
          .subscribe(jsonData => {
            console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
          });

      OneSignal.enableInAppAlertNotification(true);
      */
      var notificationOpenedCallback = function(jsonData) {
        console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
      };

      window['plugins'].OneSignal.init('de2b7c56-0f7b-4e84-bdf3-85a58b7b0565',
          {googleProjectNumber: '588954344231'},
          notificationOpenedCallback);

      // Show an alert box if a notification comes in when the user is in your app.
      window['plugins'].OneSignal.enableInAppAlertNotification(true);

    });

    // load the conference data
    confData.load();
    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === 'true');
    });

    if (this.accountService.validateProfile()) {
      this.rootPage = TabsPage;
    } else {
      this.rootPage = TutorialPage;
    }
    this.listenToLoginEvents();
  }

  openPage(page: PageObj) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      this.nav.setRoot(page.component, {tabIndex: page.index});

    } else {
      this.nav.setRoot(page.component);
    }

    if (page.title === 'Logout') {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
        this.userData.logout();
      }, 1000);
    }
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
}


// Pass the main App component as the first argument
// Pass any providers for your app in the second argument
// Set any config for your app as the third argument, see the docs for
// more ways to configure your app:
// http://ionicframework.com/docs/v2/api/config/Config/
// Place the tabs on the bottom for all platforms
// See the theming docs for the default values:
// http://ionicframework.com/docs/v2/theming/platform-specific-styles/

ionicBootstrap(ConferenceApp, [ConferenceData, UserData], { });
