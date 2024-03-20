// var $circle = $('.cursor');

// function moveCircle(e) {
//   TweenLite.to($circle, 0.3, {
//     css: {
//       left: e.pageX,
//       top: e.pageY
//     }
//   });
// }

// $(window).on('mousemove', moveCircle);

// const content1 = document.querySelector('.content1')
// const path1length = content1.getTotalLength()

// content1.style.strokeDasharray = path1length
// content1.style.strokeDashoffset = path1length

// function calcDashoffset(scrollY, element, length){
//   const ratio = (scrollY - element.offsetTop)/element.offsetHeight
//   const value = length - (length * ratio)
//   return value < 0 ? 0:value > length ? length : value
// }

// function scrollHandler(){
//   const scrollY = window.scrollY + (window.innerHeight*0.1)
//   content1.style.strokeDashoffset = calcDashoffset(scrollY,content1,path1length)
// }

// window.addEventListener('scroll', scrollHandler)

