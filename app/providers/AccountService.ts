/**
 * Created by thanhtu on 10/20/2016.
 */
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Platform, Storage, LocalStorage} from 'ionic-angular';

@Injectable()
export class AccountService {
    static get parameters() {
        return [[Platform], [Http]];
    }
    private response =[] ;
    private url = 'http://api.greencapinvestment.com/';

    constructor(public platform, private http) {}
    /**
     *
     * gọi api đăng nhập marrybaby
     * @param user_login
     * @param user_pass
     * @param is_cache
     * @returns {json}
     */
    login(user_login, user_pass) {
        let body = new FormData();
        body.append('user_login', user_login);
        body.append('user_pass', user_pass);
        console.log(body);
        return this.http.post(this.url + '/v1/account/login', body).map(res => res.json());

    }

    /**
     *
     * @param user_data object
     * @returns {*}
     */
    register(user_data) {
        // var url = 'http://api.1000ngayvang.vn/v1/account/register?user_login=' + user_data.user_login + '&user_pass=' + user_data.user_pass + '&user_pass_confirmation=' + user_data.user_pass_confirmation + '&name=' + user_data.name + '&gender=' + user_data.gender + '&phone=' + user_data.phone + '&birthday=' + user_data.birthday + '&address=' + user_data.address + '&district_id=' + user_data.district_id + '&city_id=' + user_data.city_id + '&baby_name=' + user_data.baby_name + '&baby_gender=' + user_data.baby_gender + '&baby_birthday=' + user_data.baby_birthday;
        var url = 'http://api.1000ngayvang.vn/v1/account/register?user_login=' + user_data.user_login + '&user_pass=' + user_data.user_pass + '&name=' + user_data.name + '&gender=' + user_data.gender + '&city_id=' + user_data.city_id + '&phone=' + user_data.phone;

        // this.response = this.http.post(url, '').map(res => res.json());

        // return this.response;
    }

    fbRegister(user_data) {
        var url = 'http://api.1000ngayvang.vn/v1/account/fb-register?email=' + user_data.email + '&name=' + user_data.name;

        // this.response = this.http.post(url, '').map(res => res.json());
        // return this.response;
    }

    update(user_data) {
        var url = 'http://api.1000ngayvang.vn/v1/account/update?user_id=' + user_data.user_id + '&name=' + user_data.name + ' &phone=' + user_data.phone + '&birthday=' + user_data.birthday + '&gender=' + user_data.gender + '&city_id=' + user_data.city_id + '&is_app=' + user_data.is_app;

        // this.response = this.http.put(url, '').map(res => res.json());

        // return this.response;
    }

    /**
     * set userData to cache
     * @param data
     * @param is_personal_info_only
     */
    setUserInfo(data, is_personal_info_only = false) {
        if (!is_personal_info_only) {
            // window.localStorage.setItem('user', JSON.stringify(data));
            // set số ngày hiện tại của bé vô storage
            // window.localStorage.setItem('babyDay', babyDay);
        } else {
            var current_user = this.getUserInfo();

            current_user.email = data.email;
            current_user.name = data.name;
            current_user.birthday = data.birthday;
            current_user.gender = data.gender;
            current_user.phone = data.phone;
            current_user.address = data.address;
            current_user.city = data.city;
            current_user.district = data.district;
            current_user.avatar = data.avatar;
            current_user.is_vendor = data.is_vendor;
            // window.localStorage.setItem('user', JSON.stringify(current_user));
        }

         // sent userInfo to onesignal
        console.log('OneSignal.sendTags');
         // if (window.plugins === undefined) return;

         // set User Tags
         // https://documentation.onesignal.com/docs/phonegap--cordova-sdk-api#sendTags
        let userData = data;
        let accountInfo = {
            id: userData.ID,
            email: userData.email,
            name: userData.name,
            birthday: userData.birthday,
            gender: userData.gender,
            phone: userData.phone,
            address: userData.address,
            city: userData.city,
            district: userData.district,
            baby_name: userData.baby_name,
            baby_gender: userData.baby_gender,
            baby_birthday: userData.baby_birthday,
            is_vendor: userData.is_vendor
        };

        console.log(userData, accountInfo);
         // window.plugins.OneSignal.sendTags(accountInfo);
         // end sent
    }

    /**
     * get userInfo from cache
     *
     * @returns {{ID: string, email: string, name: string, birthday: int, gender: string, phone: string, city: string, district: string, avatar: string, baby_id: string, baby_name: string, baby_gender: string, baby_birthday: int, is_vendor: string}}
     */
    getUserInfo() {

         let accountInfo = {
         id: '999',
         email: 'vietanh@ringier.com.vn',
         name: 'viet anh',
         birthday: '19821115',
         gender: 'male',
         phone: '098347028',
         address: '12 Tôn Đản',
         city: 'TP. Hồ Chí Minh',
         district: '',
         avatar: 'http://www.marrybaby.vn/wp-content/uploads/users/1/2014/02/14/avatar_1392364088-150x150.jpg',
         baby_name: 'Ken',
         baby_gender: 'male',
         baby_birthday: '20120919',
         is_vendor: '1'
         };
        return accountInfo;
        // return JSON.parse(window.localStorage.getItem('user'));
    }

    getBabyInfo(baby_id) {
        var url = 'http://api.1000ngayvang.vn/v1/account/get-baby-info?baby_id=' + baby_id;
        return this.http.get(url).map(res => res.json());
    }

    getCityList() {
        var url = 'http://api.1000ngayvang.vn/v1/location/cities';
        // this.response = this.http.get(url).map(res => res.json());

        // return this.response;
    }

    getDistrictList(city_id) {
        if (city_id) {
            var url = 'http://api.1000ngayvang.vn/v1/location/district-by-city/' + city_id;
        } else {
            url = 'http://api.1000ngayvang.vn/v1/location/districts';
        }
        // this.response = this.http.get(url).map(res => res.json());

        // return this.response;
    }

    clearUserData() {
        /*
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('babyDay');
        window.localStorage.removeItem('baby_list');
        */
        console.log('notification.local.clearAll');
        // schedule list data notification
        /*
        if (window.plugins) {
            console.log('notification.local.clearAll');
            cordova.plugins.notification.local.clearAll();
        }
        */
    }

    changeAvatar(user_id, base64_image) {
        // this.response = this.http.post('http://api.1000ngayvang.vn/v1/account/uploadAvatar?user_id=' + user_id + '&base64_image=' + base64_image, '').map(res => res.json());

        // return this.response;
    }

    validateProfile() {
        /*
        var user_data = this.getUserInfo();
        if (!user_data || !user_data.ID || !user_data.email || !user_data.name || !user_data.phone ) {
            return false;
        } else {
            return true;
        }
        */
        return false;
    }


    changePassword(user_id, new_pw, new_pw_confirmation) {
        // this.response = this.http.put('http://api.1000ngayvang.vn/v1/account/change-password?user_id=' + user_id + '&new_pw=' + new_pw + '&new_pw_confirmation=' + new_pw_confirmation, '').map(res => res.json());

        // return this.response;
    }

    foo(bar){
        window.localStorage.setItem('foo', bar);
    }

    logged_in(data){
        // Put user_data into storage
        localStorage.setItem('userdata', JSON.stringify(data.data));

        // // Retrieve the object from storage
        // var udata = JSON.parse(localStorage.getItem('userdata'));
        // // for debug
        // console.log(udata);
        // console.log('ID: ' + udata.ID);
        // console.log('Display name: ' +udata.display_name);
        // console.log('Name: ' +udata.name);
        // console.log('Email: ' +udata.email);
        // console.log('Ip: ' +udata.ip);
    }
}
