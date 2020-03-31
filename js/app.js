// console.log('Hello')

// let currentSlide = 1;
// let nextSlide = 1;
// const slideNum = 2;

// document.addEventListener("wheel", throttle(scrollChange, 1500));

// function init() {
//     for (let i = 2; i <= slideNum; i++) {
//         let slide = document.querySelector(`#section${ i }`);
//         slide.classList.add('hidden');
//     }
// }

// init();

// function scrollChange(e) {
//     console.log(e);
//     if (e.deltaY > 0) {
//         if (currentSlide !== slideNum) {
//             nextSlide = currentSlide + 1;
//             changeSlide();
//         }
//     } else {
//         if (currentSlide !== 1) {
//             nextSlide = currentSlide - 1;
//             changeSlide();
//         } 
//     }
// }

// function changeSlide() {
//     console.log({ currentSlide, nextSlide });

//     // Do styling stuff to change slides 
//     let curr = document.querySelector(`#section${ currentSlide }`);
//     let next = document.querySelector(`#section${ nextSlide }`);
//     curr.classList.add('hidden');
//     next.classList.remove('hidden');

//     currentSlide = nextSlide;
// }

// function throttle(func, limit) {
//     let inThrottle;
//     return function() {
//         const args = arguments;
//         const context = this;
//         if (!inThrottle) {
//             func.apply(context, args);
//             inThrottle = true;
//             setTimeout(() => (inThrottle = false), limit);
//         }
//     };
// }