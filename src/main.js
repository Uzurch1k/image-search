// ===============================================================

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ===============================================================

import { templateGallery } from './js/render-functions';
import { searchGallery } from './js/pixabay-api';

const lightbox = new SimpleLightbox('.gallery-list a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// ===============================================================

const optionsIziToastWarning = {
  message: 'Please fill out the input field.',
  backgroundColor: '#FFA000',
  titleColor: '#fff',
  titleSize: '16px',
  titleLineHeight: '1.5',
  messageColor: '#fff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  position: 'topRight',
  timeout: 3000,
  progressBar: false,
};

const optionsIziToastError = {
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  backgroundColor: '#EF4040',
  titleColor: '#fff',
  titleSize: '16px',
  titleLineHeight: '1.5',
  messageColor: '#fff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  position: 'topRight',
  timeout: 3000,
  progressBar: false,
  maxWidth: 400,
};

const optionsIziToastInfo = {
  message: "We're sorry, but you've reached the end of search results.",
  titleColor: '#fff',
  titleSize: '16px',
  titleLineHeight: '1.5',
  messageColor: '#fff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  position: 'topRight',
  timeout: 3000,
  progressBar: false,
  maxWidth: 350,
};

// ===============================================================

const refs = {
  form: document.querySelector('.gallery-form'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery-list'),
  btnLoadMore: document.querySelector('.gallery-load-more'),
  scrollToTopBtn: document.querySelector('.scroll-up'),
};

let text = '';
let page = 1;
const perPage = 15;

// ===============================================================

refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

// ===============================================================

async function onFormSubmit(e) {
  e.preventDefault();
  text = e.target.elements.text.value.trim();

  if (!text) {
    e.target.reset();
    iziToast.warning(optionsIziToastWarning);
    return;
  }

  refs.gallery.innerHTML = '';
  hideLoadMore();
  showLoader();

  try {
    const data = await searchGallery(text, page);
    if (data.hits.length === 0) {
      iziToast.warning(optionsIziToastError);
      hideLoader();
      e.target.reset();
      return;
    }
    renderGallery(data.hits);
    if (data.totalHits <= perPage) {
      hideLoadMore();
    } else {
      showLoadMore();
    }
  } catch (err) {
    console.error('Error loading data:', err);
  }

  hideLoader();
  e.target.reset();
}

// ===============================================================

async function onLoadMoreClick() {
  page += 1;
  hideLoadMore();
  showLoader();

  const data = await searchGallery(text, page);
  const maxPage = Math.ceil(data.totalHits / perPage);

  if (page >= maxPage) {
    iziToast.info(optionsIziToastInfo);
    hideLoadMore();
    hideLoader();
    return;
  }

  renderGallery(data.hits);

  const height = refs.gallery.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({ top: height * 3, behavior: 'smooth' });

  hideLoader();
  showLoadMore();
}

// ===============================================================

function renderGallery(dataGallery) {
  const markup = templateGallery(dataGallery);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

// ===============================================================

function showLoader() {
  refs.loader.classList.add('in-active');
}

function hideLoader() {
  refs.loader.classList.remove('in-active');
}

// ===============================================================

function showLoadMore() {
  refs.btnLoadMore.classList.add('in-active');
}

function hideLoadMore() {
  refs.btnLoadMore.classList.remove('in-active');
}

// ===============================================================

window.addEventListener('scroll', () => {
  if (window.scrollY > 120) {
    refs.scrollToTopBtn.classList.add('show');
  } else {
    refs.scrollToTopBtn.classList.remove('show');
  }
});

refs.scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// ===============================================================
