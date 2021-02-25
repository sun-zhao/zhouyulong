$(function () {
//    index页面滚动动画
    let $items = $('.content'),
        currentIndex = 0;
    let newArr = function returnArr() {
        let offSetTop = [0];
        Array.prototype.forEach.call($items, function (ele, index) {
            offSetTop.push($(ele).offset().top);
        });
        return offSetTop;
    }()
    let scrollDistance = 0, t = 0;
    $(window).scroll(function (e) {
        scrollDistance = $(this).scrollTop() + 130;

        console.log(scrollDistance)
        for (let i = 0; i <= newArr.length; i++) {
            let x = newArr[i],
                y = newArr[i + 1];
            if (scrollDistance >= x && scrollDistance < y) {
                if (i !== currentIndex) {
                    $($items[i]).addClass('animated fadeInUp').removeClass('animated fadeInUp');
                    currentIndex = i;
                }
                return;
            }
        }

    });
})
