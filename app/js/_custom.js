document.addEventListener("DOMContentLoaded", function() {

	var swiperSlide = new Swiper('.swiper-container', {
		spaceBetween: 30,
		effect: 'fade',
		loop: true,
		thumbs:{
			swiper: headerSlider
		}
	});

	var headerSlider = new Swiper('.header-slider', {
		slidesPerView: 3,
		// spaceBetween: 900,
		centeredSlides: true,
		loop: true,
		thumbs: {
			swiper: swiperSlide,
		}
	});
	headerSlider.activeIndex

	const scene = document.getElementById('scene');
	const parallaxInstanceFirst = new Parallax(scene);

	window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
	}


		document.querySelector('.header-slider__block .swiper-slide-active').onmousemove = function(e){
			var X = e.pageX;
			var Y = e.pageY;
			var top = Y - 15 + 'px';
			var left = X + 10 + 'px';
			document.getElementById('tip').style=`display:block; top:${top}; left:${left}`
		};
		document.querySelector('.header-slider__block .swiper-slide-active').onmouseout = function(){
			document.getElementById('tip').style = 'display:none'
		};
	
});
