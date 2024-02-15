// ===============================================================

import axios from 'axios';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

// ===============================================================

const form = document.querySelector('.gallery-form');

const loader = document.querySelector('.loader');

const gallery = document.querySelector('.gallery-list');

// ===============================================================

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const text = form.elements.text.value.trim();

  if (!text) {
    form.reset();
    iziToast.warning(optionsIziToastWarning);
    return;
  }
  gallery.innerHTML = '';

  showLoader();

  searchGallery(text)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning(optionsIziToastError);
        return;
      }
      renderGallery(data.hits);
    })
    .catch(err => console.error('Error loading data:', err))
    .finally(hideLoader);

  form.reset();
}

function searchGallery(request) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const PARAMS = `?key=42127236-8bfdbbfbeed8a2dadaca720e8
	&q=${request}
	&image_type=photo
	&orientation=horizontal
	&safesearch=true
	&per_page=21`;

  const url = BASE_URL + END_POINT + PARAMS;

  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  });
}

// ===============================================================

function templateGallery(dataGallery) {
  return dataGallery
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <ul class="specific-list">
        <li class="specific-item">
          <p class="specific-text">Likes</p>
          <p class="specific-quantity">${likes}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Views</p>
          <p class="specific-quantity">${views}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Comments</p>
          <p class="specific-quantity">${comments}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Downloads</p>
          <p class="specific-quantity">${downloads}</p>
        </li>
      </ul>
    </li>`;
      }
    )
    .join('');
}

function renderGallery(dataGallery) {
  const markup = templateGallery(dataGallery);
  gallery.innerHTML = markup;

  const lightbox = new SimpleLightbox('.gallery-list a', {
    captionDelay: 250,
    captionsData: 'alt',
  });

  lightbox.refresh();
}

// ===============================================================

function showLoader() {
  loader.classList.add('in-active');
}

function hideLoader() {
  loader.classList.remove('in-active');
}

// ===============================================================
