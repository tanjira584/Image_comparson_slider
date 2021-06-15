function imgComparison() {
	var x, i;
	x = document.querySelectorAll('.img-com-slider');
	for(i = 0; i < x.length; i++) {
		imageCompare(x[i]);
	}
	function imageCompare(img) {
		var slide, img, w, h, clicked = 0;
		w = img.offsetWidth;
		h = img.offsetHeight;
		img.style.width = (w / 2) + "px";
		slide = document.createElement('DIV');
		slide.setAttribute('class', 'compare-btn');
		img.parentElement.insertBefore(slide, img);
		slide.style.left = (w / 2) - (slide.offsetWidth / 2) + "px";
		slide.style.top = (h / 2) - (slide.offsetHeight / 2) + "px";
		slide.addEventListener('mousedown', slideReady);
		window.addEventListener('mouseup', slideFinish);
		function slideReady(e) {
			e.preventDefault();
			clicked = 1;
			window.addEventListener('mousemove', slideMove);
		}
		function slideFinish() {
			clicked = 0;
		}
		function slideMove(e) {
			if(clicked == 0) return false;
			var pos;
			pos = getCursorPos(e);
			if(pos < 0) {pos = 0;}
			if(pos > w) {pos = w}
			compare(pos);
		}
		function getCursorPos(e) {
			var a, x = 0;
			e = e || window.event;
			a = img.getBoundingClientRect();
			x = e.pageX - a.left;
			x = x - pageXOffset;
			return x;
		}
		function compare(x) {
			img.style.width = x + "px";
			slide.style.left = img.offsetWidth - (slide.offsetWidth / 2) + "px";
		}
	}
}
imgComparison();