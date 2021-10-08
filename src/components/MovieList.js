
import Card from 'react-bootstrap/Card'





const MovieList = ({ movie }) => {
    return (

      <div className="movie-list">
        
        {movie.map(movie => (
          
          <div className="movie-preview" key={movie.id} >
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.images.background.url}></Card.Img>
            <Card.Body>
            <Card.Title>{ movie.title }</Card.Title>
            <Card.Text>Genre: { movie.genres[0] }</Card.Text>
            </Card.Body>
            </Card>
            
          </div>
          
        ))}
        </div>
       
  
       
        
      
      
    );
  }
   
  export default MovieList;