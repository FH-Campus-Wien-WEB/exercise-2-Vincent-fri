window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {

  const article = document.createElement('article')

  //  id setzen
  article.id = movie.imdbID

  // Poster
  const img = document.createElement('img')
  img.src = movie.Poster
  img.alt = movie.Title
  article.appendChild(img)

  // Titel
  const h1 = document.createElement('h1')
  h1.textContent = movie.Title
  article.appendChild(h1)

  // Genres
  const genreDiv = document.createElement('div')
  movie.Genres.forEach(function(genre) {
    const span = document.createElement('span')
    span.textContent = genre
    span.className = 'genre'
    genreDiv.appendChild(span)
  })
  article.appendChild(genreDiv)

  // Released
  const released = document.createElement('p')
  released.textContent = 'Released: ' + movie.Released
  article.appendChild(released)

  // Runtime
  const runtime = document.createElement('p')
  runtime.textContent = 'Runtime: ' + movie.Runtime + ' min'
  article.appendChild(runtime)

  // Directors
  const directors = document.createElement('p')
  directors.textContent = 'Directors: ' + movie.Directors.join(', ')
  article.appendChild(directors)

  // Writers
  const writers = document.createElement('p')
  writers.textContent = 'Writers: ' + movie.Writers.join(', ')
  article.appendChild(writers)

  // Actors
  const actors = document.createElement('p')
  actors.textContent = 'Actors: ' + movie.Actors.join(', ')
  article.appendChild(actors)

  // Plot
  const plot = document.createElement('p')
  plot.textContent = 'Plot: ' + movie.Plot
  article.appendChild(plot)

  // Ratings
  const metascore = document.createElement('p')
  metascore.textContent = 'Metascore: ' + movie.Metascore
  article.appendChild(metascore)

  const imdb = document.createElement('p')
  imdb.textContent = 'IMDb Rating: ' + movie.imdbRating
  article.appendChild(imdb)

  // Edit Button
  const button = document.createElement('button')
  button.textContent = 'Edit'
  button.onclick = function () {
  location.href = 'edit.html?imdbID=' + movie.imdbID
}
  article.appendChild(button)

  // alles ins DOM
  bodyElement.appendChild(article)
}

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
