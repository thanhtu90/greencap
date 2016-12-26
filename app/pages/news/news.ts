/**
 * Created by thanhtu on 9/27/2016.
 */
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewsDetailPage } from '../news-detail/news-detail';
import { NativeStorage } from 'ionic-native';
import { PostService } from '../../providers/PostService';

@Component({
    templateUrl: 'build/pages/news/news.html',
    providers: [PostService]
})
export class NewsListPage {
    news = [];
    constructor( public navCtrl: NavController, private postService: PostService) {
        
        this.postService.getBlogNews().subscribe(
            data => {
                //loading.dismiss();
                if (data.status=='success') {
                    this.news = data.data.post;
                } else {
                    console.log('Loi');
                }
            }
        );

    }

    goToNewDetail(news) {
        this.navCtrl.push(NewsDetailPage, news);
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        NativeStorage.clear();

        NativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
            .then(
                () => console.log('Stored item!'),
                error => console.error('Error storing item', error)
            );

        NativeStorage.getItem('myitem')
            .then(
                data => console.log(data),
                error => console.error(error)
            );

        NativeStorage.remove('myitem');

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
}
