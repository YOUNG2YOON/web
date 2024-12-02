$(function () {
  $('a[href="#"]').on('click', function (e) {
    e.preventDefault();
  });
});

// 메뉴 클릭시 슬라이드 업다운
$('header .nav .global-menu-btn').on('click', function () {
  $(' header .nav .global-menu').toggleClass('on');
});

gsap.registerPlugin(ScrollTrigger);

const headerOpacity = {
  trigger: 'header',
  start: 'top top',
  toggleActions: 'play none none reverse'
}
const btnOpacity = {
  trigger: 'header',
  start: 'top top',
  toggleActions: 'play none none reverse'
}
const btnOnOpacity = {
  trigger: 'header',
  start: 'top top',
  toggleActions: 'play'
}

gsap.fromTo(
  'header .nav .global-menu',
  { opacity: 0 },
  {
    opacity: 1,
    duration: 0.1,
    scrollTrigger: headerOpacity
  }
);
gsap.fromTo(
  'header .nav .global-menu-btn',
  { opacity: 0 },
  {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: btnOpacity
  }
);
gsap.fromTo(
  'header .nav .global-menu.on',
  { opacity: 0 },
  {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: btnOnOpacity
  }
);



const panel = document.querySelector("#project");

gsap.utils.toArray(".project-wrapper").forEach((panel,i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false,
    ease: 'power1.inOut'
  },
);
});