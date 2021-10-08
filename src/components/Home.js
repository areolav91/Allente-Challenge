import { useEffect, useState } from "react";
import MovieList from "./MovieList";


const Home = () => {
  const [movie, setMovies] = useState(null)

  useEffect(() => {
    fetch('https://stoplight.io/mocks/sci-code/diggit:master/12726515/recommendations')

      .then(res => {
        return res.json();
      })
      .then(data => {
        setMovies(data);
      })
  }, [])

  return (
 
    <div className="home">

        <div class="row top-items">
            <div class="col text-left">
                <h4>Vi anbefaler</h4>
            </div>
            <div class="col text-right watchbutton">
                <button type="button" class="btn btn-primary">Se alle</button>
            </div>
        </div>

       
       
      {movie &&
       <MovieList movie={movie} />}
      
    </div>

 

 
  );
}
 
export default Home;
