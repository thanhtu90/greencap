/**
 * Created by thanhtu on 9/26/2016.
 */
import { Component, ViewChild } from '@angular/core';

import { AlertController, App, List, ModalController, NavController } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';
import { NewsDetailPage } from '../news-detail/news-detail';
import { UserData } from '../../providers/user-data';
import { PostService } from '../../providers/PostService';

@Component({
    templateUrl: 'build/pages/analyze-news/analyze-news.html',
    providers: [PostService]
})

export class AnalyzeNewsPage {
    // the list is a child of the schedule page
    // @ViewChild('scheduleList') gets a reference to the list
    // with the variable #scheduleList, `read: List` tells it to return
    // the List and not a reference to the element
    @ViewChild('scheduleList', {read: List}) scheduleList: List;

    dayIndex = 0;
    queryText = '';
    segment = 'all';
    excludeTracks = [];
    shownSessions = [];
    groups = [];
    analyzeNews = [];
    constructor(
        public alertCtrl: AlertController,
        public app: App,
        public modalCtrl: ModalController,
        public navCtrl: NavController,
        public confData: ConferenceData,
        public user: UserData,
        private postService: PostService
    ) {

        this.postService.getTechnicalNews().subscribe(
            data => {
                //loading.dismiss();
                if (data.status=='success') {
                    this.analyzeNews = data.data.post;
                } else {
                    console.log('Loi');
                }
            }
        );

    }

    ionViewDidEnter() {
        this.app.setTitle('AnalyzeNews');
    }

    goToNewDetail(sessionData) {
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(NewsDetailPage, sessionData);
    }

}
