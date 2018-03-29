/* global document */

import spotify from './spotify';
import renderAlbums from './AlbumList';

const albumList = document.getElementById('album-list');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

function makeRequest() {
  spotify.search.albums(searchInput.value)
    .then(data => renderAlbums(data.albums.items, albumList));
}

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    makeRequest();
  });
}
