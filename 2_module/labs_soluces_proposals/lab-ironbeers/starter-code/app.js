const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// add the partials here:
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// add the routes here:
app.get('/', (req, res) => res.render('index'));

app.get('/beers', (req, res, next) => {
  punkAPI
    .getBeers()
    .then((beers) => {
      res.render('beers.hbs', { beers });
    })
    .catch(next);
});

app.get('/beers/:id', (req, res, next) => {
  punkAPI
    .getBeer(req.params.id)
    .then((oneBeer) => {
      res.render('beer_detail.hbs', {
        beer: oneBeer[0],
        displayDetails: true,
      });
    })
    .catch(next);
});

app.get('/random-beer', (req, res, next) => {
  punkAPI
    .getRandom()
    .then((randomBeer) => {
      res.render('beer_detail.hbs', {
        beer: randomBeer[0],
        displayDetails: true,
      });
    })
    .catch(next);
});

app.use((req, res, next) => {
  res.render('not_found.hbs');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.render('error.hbs');
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
