let profileStuff = require('../data/profile.json');

module.exports = (app) => {

    const getAllMovies = (req, res) => res.json(movies);



    const deleteMovie = (req, res) => {
        const id = req.params['mid'];
        movies = movies.filter(m => m._id !== id);
        res.json(movies);
    };
    app.delete('/api/movies/:mid', deleteMovie);

    const createMovie = (req, res) => {
        const movie = req.body;
        movies = [...movies, movie];
        res.json(movies);
    };
    app.post('/api/movies', createMovie);

    const saveMovie = (req, res) => {
        const newMovie = req.body;
        const movieId = req.params['mid'];
        movies = movies.map(movie =>
            movie._id === movieId ? newMovie : movie);
        res.json(movies);
    };

    app.get('/api/movies', getAllMovies);
    app.put('/api/movies/:mid', saveMovie);



};
