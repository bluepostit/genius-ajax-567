const authToken = "YOUR API TOKEN";

// Show song by ID

// add event listener to the show form
// get user input (id)
// create URL with the id
// send HTTP request (fetch) to Genius API - url we created
// parse JSON => object
// extract data from this object (things we need)
// inject into DOM.

const showForm = document.querySelector('#songForm');
showForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = document.querySelector('#song-id').value;
  console.log(id);
  const url = `https://api.genius.com/songs/${id}?access_token=${authToken}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const title = data.response.song.title;
      console.log(title);
      const titleEl = document.querySelector('#title');
      titleEl.innerText = title;

      const artist = data.response.song.album.artist.name;
      const artistEl = document.querySelector('#artist');
      artistEl.innerText = artist;

      const album = data.response.song.album.name;
      const albumEl = document.querySelector('#album');
      albumEl.innerText = album;
    })
});


// Search songs

// add event listener to the search form
// get user input (keyword)
// create URL with the keyword
// send HTTP request (fetch) to Genius API - url we created
// parse JSON => object
// extract data from this object (things we need) - FIRST HIT
// inject into DOM.

const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const keyword = document.querySelector('#search').value;
  console.log(keyword);

  const url = `https://api.genius.com/search?q=${keyword}&access_token=${authToken}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      const hit = data.response.hits[0];

      const title = hit.result.title
      console.log(title)
      const titleEl = document.querySelector("#title")
      titleEl.innerText = title

      const artist = hit.result.primary_artist.name
      const artistEl = document.querySelector("#artist")
      artistEl.innerText = artist

      const albumEl = document.querySelector("#album")
      albumEl.innerText = ''
    });
});
