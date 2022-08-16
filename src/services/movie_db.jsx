export class MovieDb {

    static apiKey = "3f947269b2306b61f1623e01af666c79"

    static language = "en"

    static getMovies = async (category, setList) => {
        const apiURL = 'https://api.themoviedb.org/3/movie/' + category + '?api_key=' + MovieDb.apiKey + '&language=' + MovieDb.language;
        fetch(apiURL).then(response => {

            return response.json();
        }).then((data) => {
            setList(data.results);
        })
    }
    static getMovieImages = async (movieID, setList) => {
        const apiURL = 'https://api.themoviedb.org/3/movie/' + movieID + '/images?api_key=' + MovieDb.apiKey + '&language=en-US'
        fetch(apiURL).then(response => {

            return response.json();
        }).then((data) => {

            setList(data.results);
        })
    }

    static Categories = {
        TOP_RATED: "top_rated",
        NOW_PLAYING: "now_playing",
        POPULAR: "popular",
        UPCOMING: "upcoming",
    }

}