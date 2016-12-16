/**
 * Created by thanhtu on 9/26/2016.
 */
import { Component, ViewChild } from '@angular/core';

import { AlertController, App, List, ModalController, NavController } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';
import { NewsDetailPage } from '../news-detail/news-detail';
import { UserData } from '../../providers/user-data';

@Component({
    templateUrl: 'build/pages/analyze-news/analyze-news.html'
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
    analyzeNews = [
        {
            'time' : 'Tuần : 26 - 30/9/2016',
            'title' : 'Nhận định thị trường tuần 37',
            'news' : [
                {
                    'title' : 'EURUSD – Cây nến đảo chiều giảm có thể dẫn đến việc giá tiếp tục trượt sâu trong tuần này',
                    'message' : 'Trong nhận định tuần trước, chúng ta đã thảo luận về việc tìm cơ hội bán ra khi giá hồi lên nhưng vẫn dưới vùng kháng cự 1.1340 – 1.1400. ',
                    'content' : '<p>Trong nhận định tuần trước, chúng ta đã thảo luận về việc tìm cơ hội bán ra khi giá hồi lên nhưng vẫn dưới vùng kháng cự 1.1340 – 1.1400. Chú ý cây nến giảm có bóng trên dài vào ngày thứ Sáu tuần trước thể hiện sức mạnh của bên bán và khả năng cao giá sẽ tiếp tục bị đẩy sâu trong tuần này. Các nhà đầu tư có thể tìm kiếm cơ hội bán ra khi giá hồi lên nhẹ trong tuần này, dự kiến mốc hỗ trợ 1.1045 sẽ là mục tiêu tiếp theo giá tìm đến.</p><img src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/14470446_314375378921907_3629217639236168767_n.jpg?oh=07bbdb74c5f8480ae720d04351313cab&oe=5861C0B9">'
                },
                {
                    'title' : 'GBPUSD – Bảng Anh/ Đôla tiếp cận vùng kháng cự mạnh.',
                    'message' : 'Trong những tuần vừa qua, chúng ta đã đề cập đến việc chờ đợi cơ hội bán đồng bảng khi thị trường tiếp cận vùng kháng cự 1.3375 – 1.3538. ',
                    'content' : '<p>Trong những tuần vừa qua, chúng ta đã đề cập đến việc chờ đợi cơ hội bán đồng bảng khi thị trường tiếp cận vùng kháng cự 1.3375 – 1.3538. Giá đã hồi lên ngay dưới vùng kháng cự mạnh đó vào cuối tuần trước. Hãy chờ đợi tín hiệu hành động bán để đón kịp xu hướng giảm giá trong tuần mới.</p><img src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/14502862_314376208921824_8377033333830496663_n.jpg?oh=7f59b7e24948dd955960a3a2217ef9fb&oe=58735210">'
                },
                {
                    'title' : 'AUDUSD – Đô Úc giảm giá tạo pin bar sau phiên thứ Sáu tuần trước.',
                    'message' : 'Trong nhận định tuần trước, chúng ta xác định xu hướng giảm giá trên cặp tiền này và tìm kiếm cơ hội bán khi giá tăng gần kháng cự 0.7676. ',
                    'content' : '<p>Trong nhận định tuần trước, chúng ta xác định xu hướng giảm giá trên cặp tiền này và tìm kiếm cơ hội bán khi giá tăng gần kháng cự 0.7676. Thị trường đã hồi lên và sau đó bị đẩy xuống mạnh trong phiên giao dịch ngày thứ Sáu tuần vừa qua. Tín hiệu hành động giá đó là một cơ hội tiềm năng để giá có cơ hội tiếp tục giảm sâu trong tuần này, thử mức hỗ trợ 0.7400.</p><img src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/14502850_314376425588469_7166700689366505424_n.jpg?oh=aec187778f05e38b97126672d54eafcf&oe=5884DDD6">'
                }
            ]
        },
        {
            'time' : 'Tuần 19 - 23/9/2016',
            'title' : 'Nhận định thị trường tuần 36',
            'news' : [
                {
                    'title' : 'EURUSD – Cây nến đảo chiều giảm có thể dẫn đến việc giá tiếp tục trượt sâu trong tuần này',
                    'message' : 'Trong nhận định tuần trước, chúng ta đã thảo luận về việc tìm cơ hội bán ra khi giá hồi lên nhưng vẫn dưới vùng kháng cự 1.1340 – 1.1400. ',
                    'content' : 'Trong nhận định tuần trước, chúng ta đã thảo luận về việc tìm cơ hội bán ra khi giá hồi lên nhưng vẫn dưới vùng kháng cự 1.1340 – 1.1400. Chú ý cây nến giảm có bóng trên dài vào ngày thứ Sáu tuần trước thể hiện sức mạnh của bên bán và khả năng cao giá sẽ tiếp tục bị đẩy sâu trong tuần này. Các nhà đầu tư có thể tìm kiếm cơ hội bán ra khi giá hồi lên nhẹ trong tuần này, dự kiến mốc hỗ trợ 1.1045 sẽ là mục tiêu tiếp theo giá tìm đến.'
                },
                {
                    'title' : 'AUDUSD – Đô Úc giảm giá tạo pin bar sau phiên thứ Sáu tuần trước.',
                    'message' : 'Trong nhận định tuần trước, chúng ta xác định xu hướng giảm giá trên cặp tiền này và tìm kiếm cơ hội bán khi giá tăng gần kháng cự 0.7676. ',
                    'content' : 'Trong nhận định tuần trước, chúng ta xác định xu hướng giảm giá trên cặp tiền này và tìm kiếm cơ hội bán khi giá tăng gần kháng cự 0.7676. Thị trường đã hồi lên và sau đó bị đẩy xuống mạnh trong phiên giao dịch ngày thứ Sáu tuần vừa qua. Tín hiệu hành động giá đó là một cơ hội tiềm năng để giá có cơ hội tiếp tục giảm sâu trong tuần này, thử mức hỗ trợ 0.7400.'
                }
            ]
        },
        {
            'time' : 'Tuần 12 - 16/9/2016',
            'title' : 'Nhận định thị trường tuần 35',
            'news' : [
                {
                    'title' : 'EURUSD – Cây nến đảo chiều giảm có thể dẫn đến việc giá tiếp tục trượt sâu trong tuần này',
                    'message' : 'Trong nhận định tuần trước, chúng ta đã thảo luận về việc tìm cơ hội bán ra khi giá hồi lên nhưng vẫn dưới vùng kháng cự 1.1340 – 1.1400. ',
                    'content' : 'Trong nhận định tuần trước, chúng ta xác định xu hướng giảm giá trên cặp tiền này và tìm kiếm cơ hội bán khi giá tăng gần kháng cự 0.7676. Thị trường đã hồi lên và sau đó bị đẩy xuống mạnh trong phiên giao dịch ngày thứ Sáu tuần vừa qua. Tín hiệu hành động giá đó là một cơ hội tiềm năng để giá có cơ hội tiếp tục giảm sâu trong tuần này, thử mức hỗ trợ 0.7400.'
                }
            ]
        },
        {
            'time' : 'Tuần 5 - 9/9/2016',
            'title' : 'Nhận định thị trường tuần 34',
            'news' : [
                {
                    'title' : 'EURUSD – Cây nến đảo chiều giảm có thể dẫn đến việc giá tiếp tục trượt sâu trong tuần này',
                    'message' : 'Trong nhận định tuần trước, chúng ta đã thảo luận về việc tìm cơ hội bán ra khi giá hồi lên nhưng vẫn dưới vùng kháng cự 1.1340 – 1.1400. ',
                    'content' : 'Trong nhận định tuần trước, chúng ta xác định xu hướng giảm giá trên cặp tiền này và tìm kiếm cơ hội bán khi giá tăng gần kháng cự 0.7676. Thị trường đã hồi lên và sau đó bị đẩy xuống mạnh trong phiên giao dịch ngày thứ Sáu tuần vừa qua. Tín hiệu hành động giá đó là một cơ hội tiềm năng để giá có cơ hội tiếp tục giảm sâu trong tuần này, thử mức hỗ trợ 0.7400.'
                },
                {
                    'title' : 'GBPUSD – Bảng Anh/ Đôla tiếp cận vùng kháng cự mạnh.',
                    'message' : 'Trong những tuần vừa qua, chúng ta đã đề cập đến việc chờ đợi cơ hội bán đồng bảng khi thị trường tiếp cận vùng kháng cự 1.3375 – 1.3538. ',
                    'content' : 'Trong nhận định tuần trước, chúng ta xác định xu hướng giảm giá trên cặp tiền này và tìm kiếm cơ hội bán khi giá tăng gần kháng cự 0.7676. Thị trường đã hồi lên và sau đó bị đẩy xuống mạnh trong phiên giao dịch ngày thứ Sáu tuần vừa qua. Tín hiệu hành động giá đó là một cơ hội tiềm năng để giá có cơ hội tiếp tục giảm sâu trong tuần này, thử mức hỗ trợ 0.7400.'
                },
                {
                    'title' : 'AUDUSD – Đô Úc giảm giá tạo pin bar sau phiên thứ Sáu tuần trước.',
                    'message' : 'Trong nhận định tuần trước, chúng ta xác định xu hướng giảm giá trên cặp tiền này và tìm kiếm cơ hội bán khi giá tăng gần kháng cự 0.7676. ',
                    'content' : 'Trong nhận định tuần trước, chúng ta xác định xu hướng giảm giá trên cặp tiền này và tìm kiếm cơ hội bán khi giá tăng gần kháng cự 0.7676. Thị trường đã hồi lên và sau đó bị đẩy xuống mạnh trong phiên giao dịch ngày thứ Sáu tuần vừa qua. Tín hiệu hành động giá đó là một cơ hội tiềm năng để giá có cơ hội tiếp tục giảm sâu trong tuần này, thử mức hỗ trợ 0.7400.'
                }
            ]
        },
        {
            'time' : 'Tuần 29/8 - 2/9/2016',
            'title' : 'Nhận định thị trường tuần 33',
            'news' : [
                {
                    'title' : 'AUDUSD – Đô Úc giảm giá tạo pin bar sau phiên thứ Sáu tuần trước.',
                    'message' : 'Trong nhận định tuần trước, chúng ta xác định xu hướng giảm giá trên cặp tiền này và tìm kiếm cơ hội bán khi giá tăng gần kháng cự 0.7676. ',
                    'content' : 'Trong nhận định tuần trước, chúng ta xác định xu hướng giảm giá trên cặp tiền này và tìm kiếm cơ hội bán khi giá tăng gần kháng cự 0.7676. Thị trường đã hồi lên và sau đó bị đẩy xuống mạnh trong phiên giao dịch ngày thứ Sáu tuần vừa qua. Tín hiệu hành động giá đó là một cơ hội tiềm năng để giá có cơ hội tiếp tục giảm sâu trong tuần này, thử mức hỗ trợ 0.7400.'
                }
            ]
        }
    ];

    constructor(
        public alertCtrl: AlertController,
        public app: App,
        public modalCtrl: ModalController,
        public navCtrl: NavController,
        public confData: ConferenceData,
        public user: UserData
    ) {

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
