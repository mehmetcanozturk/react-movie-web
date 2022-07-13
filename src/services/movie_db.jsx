export class MovieDb{

    static apiKey="3a01017aaf287e88713b7c8edd51e903"
    
    static language="tr"
    
    static getMovies= async(category,setList) =>{
        const apiURL = 'https://api.themoviedb.org/3/movie/'+category+'?api_key='+MovieDb.apiKey+'&language='+MovieDb.language;
        fetch(apiURL).then(response => {
            
            return response.json();
        }).then((data)=>{
            console.log(data)
            setList(data.results);
        })
    }
    static getMovieImages= async(movieID,setList) =>{
        const apiURL='https://api.themoviedb.org/3/movie/'+movieID+'/images?api_key='+MovieDb.apiKey+'&language=en-US'
        fetch(apiURL).then(response => {
            
            return response.json();
        }).then((data)=>{
            console.log(data)
            setList(data.results);
        })
    }

    static Categories={
        TOP_RATED:"top_rated",
        NOW_PLAYING:"now_playing",
        POPULAR:"popular",
        UPCOMING:"upcoming",
    }
    
}