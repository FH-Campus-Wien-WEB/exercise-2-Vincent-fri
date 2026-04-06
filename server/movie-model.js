/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
const movies = {
  tt001: {
    imdbID: "tt001",
    Title: "Star Wars: Episode III - Revenge of the Sith",
    Released: "2005-05-19",
    Runtime: 140,
    Genres: ["Action", "Adventure", "Fantasy"],
    Directors: ["George Lucas"],
    Writers: ["George Lucas"],
    Actors: ["Hayden Christensen", "Natalie Portman", "Ewan McGregor"],
    Plot: "As the Clone Wars nears its end, Obi-Wan Kenobi pursues a new threat, while Anakin Skywalker is lured by Chancellor Palpatine into a sinister plot for galactic domination.",
    Poster: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    Metascore: 68,
    imdbRating: 7.7
  },

  tt002: {
    imdbID: "tt002",
    Title: "The Dictator",
    Released: "2012-05-16",
    Runtime: 83,
    Genres: ["Comedy"],
    Directors: ["Larry Charles"],
    Writers: ["Sacha Baron Cohen", "Alec Berg", "David Mandel"],
    Actors: ["Sacha Baron Cohen", "Anna Faris", "John C. Reilly"],
    Plot: "The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.",
    Poster: "https://m.media-amazon.com/images/M/MV5BM2IwMDM3ZmQtNjQ3NS00OTFiLWI5YzEtYWE3YjI5NTk3YzkwXkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 58,
    imdbRating: 6.5
  },

  tt003: {
    imdbID: "tt003",
    Title: "Catch Me If You Can",
    Released: "2002-12-25",
    Runtime: 141,
    Genres: ["Biography", "Crime", "Drama"],
    Directors: ["Steven Spielberg"],
    Writers: ["Frank Abagnale Jr.", "Stan Redding", "Jeff Nathanson"],
    Actors: ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken"],
    Plot: "Barely 17 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
    Metascore: 75,
    imdbRating: 8.1
  }
}


module.exports = movies
