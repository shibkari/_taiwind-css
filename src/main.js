import './style.css'
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  loopAdditionalSlides: 2,
  slideToClickedSlide: false,
  centeredSlides: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  watchOverflow: true,
});