/**
 * Created by thanhtu on 9/27/2016.
 */
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewsDetailPage } from '../news-detail/news-detail';
import { NativeStorage } from 'ionic-native';

@Component({
    templateUrl: 'build/pages/news/news.html'
})
export class NewsListPage {
    news = [
        {
            'title' : 'Trước giờ G: Sắc đỏ bao trùm chứng khoán toàn cầu trừ Trung Quốc',
            'imgsrc' : 'http://cafefcdn.com/thumb_w/640/2016/1x-1-1474936099061.png',
            'excerpt' : 'Trước thềm cuộc tranh đấu trực tiếp đầu tiên giữa 2 ứng cử viên Tổng thống diễn ra, một cơn bán tháo mạnh mẽ đã xảy ra trên phạm vi toàn cầu.',
            'content' : '<p>Trong khi cuộc giao tranh giữa 2 vị <a draggable="false" href="http://cafef.vn/ung-vien-tong-thong.html" target="_blank" title="ứng viên Tổng thống">ứng viên Tổng thống</a> còn chưa ngã ngũ thì tài sản an toàn vẫn là lựa chọn ưu tiên của nhà đầu tư. Tháng trước, Citigroup cho biết thắng lợi của phe Cộng hoà có thể tác động mạnh đến TTCK và sự kiện vào tối thứ 2 sẽ gây nên bất ổn cả trên thị trường tiền tệ và vàng.</p><div class="VCSortableInPreviewMode IMSCurrentEditorEditObject" type="Photo"> <div><img alt=" Biến động trên thị trường chứng khoán (đường màu trắng) tăng cùng chiều với tài sản an toàn (đường màu xanh). " id="img_4cfcbe10-8449-11e6-b939-01b8b69b7923" photoid="4cfcbe10-8449-11e6-b939-01b8b69b7923" src="http://cafefcdn.com/thumb_w/640/2016/1x-1-1474936099061.png" rel="http://cafefcdn.com/2016/1x-1-1474936099061.png" type="photo" h="675" w="1200" style="max-width:100%;" data-original="http://cafefcdn.com/2016/1x-1-1474936099061.png"></div> <div class="PhotoCMS_Caption"> <p style="text-align:center;margin:0px;">Biến động trên thị trường chứng khoán (đường màu trắng) tăng cùng chiều với tài sản an toàn (đường màu xanh).</p> </div> </div><p>Kết phiên ngày hôm qua, chỉ số MSCI toàn cầu giảm 0,9%. Chỉ số S&amp;P 500 cũng giảm 0,9% xuống còn 2.146,10 điểm trong khi Stoxx Europe 600 Index giảm mạnh đến 1,6%.</p>'
        },
        {
            'title' : 'Yen could surge if Trump wins debate',
            'imgsrc' : 'http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/09/26/103969381-GettyImages-588647568.530x298.jpg?v=1474912421',
            'excerpt' : '"I think the yen will perform well if Trump looks more likely to win in November," said Jane Foley, FX analyst at Rabobank.',
            'content' : '<p><a href="/japan/" target="_blank">Japan</a> may be adding <a href="/donald-trump/" target="_blank">Donald</a><a href="/donald-trump/" target="_self">Trump</a> to its laundry list of challenges.</p><img src="http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/09/26/103969381-GettyImages-588647568.530x298.jpg?v=1474912421" alt="Yen " width="530" height="298"><p>"Markets believe that a resurgent Trump should be associated with greater market uncertainty," said Thierry Wizman, interest rates and FX strategist at Macquarie Group.</p>'
        },
        {
            'title' : 'Dòng tiền ầm ầm đổ vào thị trường, VnIndex nhẹ nhàng vượt mốc 680 điểm',
            'imgsrc' : 'http://cafefcdn.com/thumb_w/660/2016/ckck-1474946292685.png',
            'excerpt' : 'Hàng loạt thông tin tích cực như ngân hàng giảm lãi suất hay giá dầu thế giới phục hồi đã giúp tâm lý nhà đầu tư khá hưng phấn ngay từ những phút đầu phiên giao dịch.',
            'content' : '<p>Tại thời điểm 10h15’, chỉ số VnIndex tăng 4,26 điểm (0,63%) lên 681,3 điểm; Hnx-Index tăng 0,21 điểm (0,25%) lên 83,32 điểm. Thanh khoản toàn thị trường đạt 50 triệu đơn vị, tương ứng giá trị 1.010 tỷ đồng.</p><p>Bên cạnh đó, dòng tiên cũng đổ mạnh vào các cổ phiếu cơ bản như AAA, BMP, CAV, CVT, NTP, LIX, PTB, SVC…nhằm đón đầu KQKD quý 3.</p><div><img contenteditable="false" data-original="http://s.cafef.vn/chart.ashx?center=1&amp;date=2016-09-276&amp;width=270&amp;height=200&amp;ran" id="img_1" src="http://s.cafef.vn/chart.ashx?center=1&amp;date=2016-09-276&amp;width=270&amp;height=200&amp;ran&amp;ran=310220" style="border:solid 1px #ccc;"><img contenteditable="false" data-original="http://s.cafef.vn/chart.ashx?center=2&amp;date=2016-09-276&amp;width=270&amp;height=200&amp;ran" id="img_2" src="http://s.cafef.vn/chart.ashx?center=2&amp;date=2016-09-276&amp;width=270&amp;height=200&amp;ran&amp;ran=91826" style="border:solid 1px #ccc;"></div>'
        },
        {
            'title' : 'Cuộc tranh luận đầu tiên của Trump - Clinton: Liên tục chỉ trích, ăn miếng trả miếng',
            'imgsrc' : 'http://cafefcdn.com/zoom/120_90/2016/clinton-20trump-20split-1474938342552-133-0-946-1300-crop-1474947360076.png',
            'excerpt' : 'Trump-Clinton đáp trả nhau trong vấn đề đầu tiên',
            'content' : '<p><b><i>Lester (ngắt lời): </i></b>Xin tạm dừng phần đáp trả của cựu Ngoại trưởng tại đây. Thưa ông Trump, theo ông, cụ thể thì làm cách nào chúng ta có thể mang công ăn việc làm trở lại nước Mỹ?</p><div class="VCSortableInPreviewMode active noCaption" type="Photo" style=""><div><img src="http://cafefcdn.com/thumb_w/640/2016/4-1474942047847-1474944809801.jpg" id="img_9377b660-845d-11e6-b939-01b8b69b7923" w="660" h="409" alt="Cuộc tranh luận đầu tiên của Trump - Clinton: Liên tục chỉ trích, ăn miếng trả miếng - Ảnh 1." title="Cuộc tranh luận đầu tiên của Trump - Clinton: Liên tục chỉ trích, ăn miếng trả miếng - Ảnh 1." rel="lightbox" photoid="9377b660-845d-11e6-b939-01b8b69b7923" type="photo" style="max-width:100%;" data-original="http://cafefcdn.com/2016/4-1474942047847-1474944809801.jpg"></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]" class="NLPlaceholderShow"></p></div></div><p><span style="background-color: initial;"><b><i>Trump</i></b>:</span><br></p><p>Trước khi trả lời câu hỏi của tôi, xin được nói rõ là cha tôi cho tôi một khoản vay nhỏ vào năm 1975 và tôi đi lên từ đó, tạo ra hàng triệu hàng triệu tài sản khác giá trị cao hơn gấp bội. Tôi nói vậy vì theo tôi đây là cách tư duy mà đất nước chúng ta cần. Hiện tại giới lãnh đạo của ta đang mất phương hướng.</p><p>Năng lượng sạch là một ví dụ. Một số nước sẽ trở thành cường quốc năng lượng sạch của thế kỉ 21. Donald thì cho rằng biến đổi khí hậu là một trò lừa bịp của người Trung Quốc. Nhưng tôi thì nghĩ đây là một vấn đề thực sự.</p><div class="VCSortableInPreviewMode active" type="Photo" style=""><div><img src="http://cafefcdn.com/thumb_w/640/2016/6-1474943519319-1474944884729.jpg" id="img_c13acce0-845d-11e6-b939-01b8b69b7923" w="660" h="409" alt="Cuộc tranh luận đầu tiên của Trump - Clinton: Liên tục chỉ trích, ăn miếng trả miếng - Ảnh 3." title="Cuộc tranh luận đầu tiên của Trump - Clinton: Liên tục chỉ trích, ăn miếng trả miếng - Ảnh 3." rel="lightbox" photoid="c13acce0-845d-11e6-b939-01b8b69b7923" type="photo" style="max-width:100%;" data-original="http://cafefcdn.com/2016/6-1474943519319-1474944884729.jpg"></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]" class="">Xử lý ảnh: Mạnh Quân</p></div></div><p><b><i>Clinton: </i></b>Đâu có lâu đến vậy. Tôi nghĩ chồng tôi (cựu Tổng thống Mỹ Bill Clinton - PV) đã làm rất tốt vào những năm 90 đấy chứ. Tôi cũng nghĩ đến những gì đã phát huy tác dụng bấy giờ, và làm sao để chúng ta có thể tái diễn được điều đó.</p><div class="VCSortableInPreviewMode" type="Photo" style=""><div><img src="http://cafefcdn.com/thumb_w/640/2016/5-1474945390473-1474946830697.jpg" id="img_4871d560-8462-11e6-b939-01b8b69b7923" w="660" h="409" alt="Cuộc tranh luận đầu tiên của Trump - Clinton: Liên tục chỉ trích, ăn miếng trả miếng - Ảnh 5." title="Cuộc tranh luận đầu tiên của Trump - Clinton: Liên tục chỉ trích, ăn miếng trả miếng - Ảnh 5." rel="lightbox" photoid="4871d560-8462-11e6-b939-01b8b69b7923" type="photo" style="max-width:100%;" data-original="http://cafefcdn.com/2016/5-1474945390473-1474946830697.jpg"></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]" class="">Xử lý ảnh: Mạnh Quân</p></div></div><p><b><i>Trump: </i></b>Và rồi tự dưng bà lại quay sang chống lại nó.</p><div class="VCSortableInPreviewMode" type="Photo" style=""><div><img src="http://cafefcdn.com/thumb_w/640/2016/3-1474941720156-1474941790320-1474944639657.png" id="img_2e622df0-845d-11e6-b939-01b8b69b7923" w="660" h="409" alt="Cuộc tranh luận đầu tiên của Trump - Clinton: Liên tục chỉ trích, ăn miếng trả miếng - Ảnh 7." title="Cuộc tranh luận đầu tiên của Trump - Clinton: Liên tục chỉ trích, ăn miếng trả miếng - Ảnh 7." rel="lightbox" photoid="2e622df0-845d-11e6-b939-01b8b69b7923" type="photo" style="max-width:100%;" data-original="http://cafefcdn.com/2016/3-1474941720156-1474941790320-1474944639657.png"></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]" class="">Xử lý ảnh: Mạnh Quân</p></div></div>'
        }
    ];

    constructor( public navCtrl: NavController) {

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
