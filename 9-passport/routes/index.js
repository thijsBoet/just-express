var express = require('express');
var router = express.Router();
const request = require('request');
const passport = require("passport")


const apiKey = "90c1383062fa64fd5ec456b8b748b423"
const apiBaseUrl = 'http://api.themoviedb.org/3';
// const apiBaseUrl = 'http://localhost:3030';
const mostPopularUrl = `${apiBaseUrl}/most_popular?api_key=${apiKey}`;
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
})

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log("User Info")
  console.log(req.user)
  request.get(nowPlayingUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData)

    res.render("index", {
      parsedData: parsedData.results
    })
  })
});

router.get("/login",  passport.authenticate("github"))

router.get("/favorites", (req, res) => {
  res.json(req.user.displayName)
})

router.get("/auth", passport.authenticate("github", {
  successRedirect: "/",
  failureRedirect: "/loginFailed"
}))

router.get("/movie/:id", (req, res, next) => {
  const movieId = req.params.id;
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`
  // res.send(thisMovieUrl)
  request.get(thisMovieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);
    res.render("single-movie", {
      parsedData
    })
  })
})

router.post("/search", (req, res, next) => {
  const userSearchTerm = encodeURI(req.body.movieSearch);
  const cat = req.body.cat;
  const movieUrl = `${apiBaseUrl}/search/${cat}/?query=${userSearchTerm}&api_key=${apiKey}`

  request.get(movieUrl, (error, response, movieData) => {
    let parsedData = JSON.parse(movieData);
    if (cat === "person") {
      parsedData.results = parsedData.results[0].known_for;
    }
    res.render("index", {
      parsedData: parsedData.results
    })
  })
})

module.exports = router;