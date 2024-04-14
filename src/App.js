import './App.css';
import responseMovies from './mocks/with-result.json';
import {Movies} from './components/Movies.jsx';

function App() {
 const movies = responseMovies.Search
  return (
   <div className='page'>

         <header>
           <h1>Buscador de películas</h1>
           <form className='form'>
             <input
               style={{
                 border: '1px solid transparent'
               }} name='query' placeholder='Avengers, Star Wars, The Matrix...'
             />
             <input type='checkbox' />
             <button type='submit'>Buscar</button>
           </form>
         </header>

         <main>
            <Movies movies={movies} />
         </main>
       </div>
  );
}

export default App;
