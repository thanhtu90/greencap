import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { AnalyzeNewsPage } from  '../analyze-news/analyze-news';
import { NewsListPage } from '../news/news';
import { LibraryPage } from '../library/library';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = AnalyzeNewsPage;
  //tab1Root: any = SchedulePage;
  tab2Root: any = NewsListPage;
  // tab2Root: any = SpeakerListPage;
  tab3Root: any = LibraryPage;
  // tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
