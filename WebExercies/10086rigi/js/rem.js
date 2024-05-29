$('.nav_btn').click(function (e) {
	$(this).toggleClass('active')
	$('html,.header_out').toggleClass('slide_nav')
	$('.head .nav').toggleClass('on')
	e.stopPropagation()
})
$('.has_sub').click(function () {
	var n = $(this).html();
	$('.m_nav').addClass('on').find('.con').html(n)
})
$('.m_nav').click(function () {
	$(this).removeClass('on');
})
$('.nav a').click(function (e) {
	e.stopPropagation()
})
$('.m_nav .close').click(function () {
	$(this).parent().removeClass('on')
})
$('body').click(function () {
	$('.nav_btn').removeClass('active')
	$('html,.header_out').removeClass('slide_nav')
	$('.head .nav').removeClass('on')
})
$('.nav').click(function (e) {
	e.stopPropagation();
})
$(document).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.header_out').addClass('on');
		} else {
			$('.header_out').removeClass('on');
		}
	})
	
	
$(".go_top").click(function(){
	      $('html,body').animate({scrollTop: '0px'}, 1000);
	    })	