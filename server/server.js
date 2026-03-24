const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data.
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies = [
    {
      "Title": "Interstellar",
      "Released": "2014-11-07",
      "Runtime": 169,
      "Genres": ["Time Travel", "Drama", "Sci-Fi"],
      "Directors": ["Christopher Nolan"],
      "Writers": ["Jonathan Nolan", "Christopher Nolan"],
      "Actors": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      "Plot": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 74,
      "imdbRating": 8.7
    },
    {
      "Title": "The Last: Naruto the Movie",
      "Released": "2014-06-12",
      "Runtime": 112,
      "Genres": ["Romance", "Drama", "Adult Animation"],
      "Directors": ["Tsuneo Kobayashi"],
      "Writers": ["Maruo Kyôzuka", "Masashi Kishimoto", "Seth Walther"],
      "Actors": ["Junko Takeuchi", "Nana Mizuki", "Jun Fukuyama"],
      "Plot": "Hinata Hyuga's younger sister has been kidnapped, so Naruto must do what he can to save her.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjk1NzA4Njg4Ml5BMl5BanBnXkFtZTgwMDgxODQ5MzE@._V1_SX300.jpg",
      "Metascore": 75,
      "imdbRating": 7.6
    },
    {
      "Title": "American Pie",
      "Released": "1999-07-09",
      "Runtime": 95,
      "Genres": ["Comedy"],
      "Directors": ["Paul Weitz"],
      "Writers": ["Adam Herz"],
      "Actors": ["Jason Biggs", "Chris Klein", "Thomas Ian Nicholas"],
      "Plot": "Four teenage boys enter a pact to lose their virginity by prom night.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg3ODY5ODI1NF5BMl5BanBnXkFtZTgwMTkxNTYxMTE@._V1_SX300.jpg",
      "Metascore": 58,
      "imdbRating": 7.0
    }
  ];
  res.send(movies);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

