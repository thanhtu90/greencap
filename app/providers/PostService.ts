/**
 * Created by thanhtu on 12/20/2016.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the Firebaseservice provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class PostService {
    response = [];
    static get parameters() {
        return [[Http]];
    }

    constructor(private  http) {
        this.http = http;
    }

    private url = 'http://api.greencapinvestment.com/';

    getPost (id) {
        return this.http.get(this.url + 'v1/post/' + id).map(data => data.json());
    }

    getDetail(id) {
        return this.http.get(this.url + 'v1/post/' + id).map(data => data.json());
    }

    getTechnicalNews() {
        return this.http.get(this.url + 'v1/technical_new' ).map(data => data.json());
    }

    getBlogNews() {
        return this.http.get(this.url + 'v1/posts' ).map(data => data.json());
    }

    getlibrary() {
        return this.http.get(this.url + 'v1/library' ).map(data => data.json());
    }

}

