/**
 * Created by thanhtu on 9/27/2016.
 */
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewsDetailPage } from '../news-detail/news-detail';
import { PostService } from '../../providers/PostService';


@Component({
    templateUrl: 'build/pages/library/library.html',
    providers: [PostService]
})
export class LibraryPage {
    library = [];

    constructor( public navCtrl: NavController, private postService: PostService) {
        this.postService.getlibrary().subscribe(
            data => {
                //loading.dismiss();
                if (data.status=='success') {
                    this.library = data.data.post;
                    console.log(data.data.post);
                } else {
                    console.log('Loi');
                }
            }
        );
    }

    goToNewDetail(news) {
        this.navCtrl.push(NewsDetailPage, news);
    }
}
