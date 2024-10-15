import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import axios from 'axios';
import iziToast from 'izitoast';

const listEl = document.querySelector('.js-reviews-box-list');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api-docs';

async function getReviewsData() {
  try {
    const response = await axios.get(`/reviews`);
    return response.data;
  } catch (error) {
    iziToast.error({
      message: 'Error fetching reviews. Please try again later.',
      position: 'topRight',
    });
    return;
  }
}

async function renderReviews() {
  try {
    const reviewsData = await getReviewsData();
    if (!reviewsData || reviewsData.length === 0) {
      listEl.innerHTML = '<li class="reviews-item">Not Found</li>';
      return;
    }
    const reviewsList = reviewsData
      .map(
        review => `
          <li class="swiper-slide reviews-item">
          <div class="reviews-text">${review}</div>

           <div class="reviews-person-details">
            <img src="${avatar_url}"
                 loading="lazy"
                 alt="${author}"
                 class="reviews-img"
                 width="40" height="40">
                 <h3 class="reviews-subtitle">${author}</h3>
                 </div>
          </li>
        `
      )
      .join('');
    listEl.innerHTML = reviewsList;
  } catch (error) {
    iziToast.error({
      message: 'Error rendering reviews. Please try again later.',
      position: 'topRight',
    });
  }
}

async function initSwiper() {
  await renderReviews();

  new Swiper('.reviews-swiper', {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.js-reviews-btn-next',
      prevEl: '.js-reviews-btn-previous',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 2,
      },
    },
  });
}
initSwiper();
