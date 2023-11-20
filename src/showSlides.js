let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// 슬라이드2 - 하단 메리트 설명 부분
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

// Thumbnail image controls
function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
  let j;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (m > slides2.length) {slideIndex2 = 1}
  if (m < 1) {slideIndex2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";
  }
  for (j = 0; j < dots2.length; j++) {
    dots2[j].className = dots2[j].className.replace(" active2", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active2";
}

// 스크롤 이벤트 구현
(function () {
  var $moveObj = $('header.main, .main_wrap, .con_wrap, .bottom_banner_wrap');
  var timeout;
  var progress = 'stop';

  $(window).scroll(function () {
      var st = $(document).scrollTop();

      if(st > 0) {
          $moveObj.addClass('open');
      }
  });

  $('.main_wrap').on('touchmove mousewheel', function (e) {
      var updown = e.originalEvent.deltaY < 0;
      e.preventDefault();
      e.stopPropagation();

      if(!updown) {
          $moveObj.addClass('open');
      }
  })

  $(".con_wrap").on('mousewheel', function (e) {
      var st = $(document).scrollTop();
      var updown = e.originalEvent.deltaY < 0;
      var sectionheight = $('.main_wrap').height();

      if(st === 0 && updown) {
          console.log('section down scroll up');
          e.preventDefault();
          e.stopPropagation();
          $moveObj.removeClass('open');
      }
  })

  var firstY = 0
  var prevY = 0

  $('.con_wrap').on('touchmove', function (e) {
      var movedY = e.originalEvent.targetTouches[0].screenY;

      if ($(document).scrollTop() !== 0) {
          return;
      }

      // down
      if (prevY !== 0 && movedY - prevY > 0) {
          e.preventDefault();
          e.stopPropagation();

          if (firstY === 0) {
              firstY = e.originalEvent.targetTouches[0].screenY
          }

          if (firstY !== 0 && movedY - firstY > 100) {
          
              $moveObj.removeClass('open');
          }
      }

      prevY = movedY;

  })

  $('.con_wrap').on('touchend', function (e) {
      firstY = 0
  })

  function getSectionTransform() {
      var obj = $('.main_wrap');

      var transformMatrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform")    ||
        obj.css("-ms-transform")     ||
        obj.css("-o-transform")      ||
        obj.css("transform");
      var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
      // var x = matrix[12] || matrix[4];//translate x
      var y = matrix[13] || matrix[5];//translate y
      return y;
  }

})()
