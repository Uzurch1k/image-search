// ===============================================================

export function templateGallery(dataGallery) {
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

// ===============================================================
