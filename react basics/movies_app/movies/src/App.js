import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Components/MovieComponents/Home";
import Nav from "./Nav";
import About from "./Components/About";
import MovieDetails from './Components/MovieComponents/MovieDetails';

function App() {
  
return(
  <Router>
    <div> 
      <Nav />
      <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/:id" element={<MovieDetails/>}></Route>
      </Routes>
    </div>
  </Router>
  
);

}

export default App;

  // const addMovie = (newMovie) => {
  //   //const newMovie = { id: Date.now(), ...movie }
  //   setMovies([...movies, newMovie]);

  //   //render create form
  //   setShowCreateForm(true);
  //   setUpdateMovieId(null);
  // }  
