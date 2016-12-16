/**
 * Created by thanhtu on 9/26/2016.
 */
import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


@Component({
    templateUrl: 'build/pages/news-detail/news-detail.html'
})
export class NewsDetailPage {
    new: any;

    constructor(public navParams: NavParams) {
        this.new = navParams.data;
    }
}
