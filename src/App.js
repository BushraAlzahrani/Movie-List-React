import './App.css';
import MovieCards from './component/MovieCards';
import Nav from './component/Nav';
import Footer from './component/Footer';
import MovieData from './component/MovieData';

function App() {
  let MovieCard = MovieData.map((data) => {
    return <MovieCards data={data} />

  });
  return (
    <div className="App">
      <Nav/>

     <div className="container">
     {MovieCard}
     </div>
    
     <Footer/>
    </div>
  );
}

export default App;
