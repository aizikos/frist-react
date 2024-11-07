import './App.css';
import Header from './components/Header';
import {Routes , Route} from 'react-router-dom'
import Home from '../src/components/Pages/Home.js';
import Recipes from '../src/components/Pages/Recipes.js';
import Popular from '../src/components/Pages/Popular.js';
import TopRated from '../src/components/Pages/TopRated.js';
import DetailPage from '../src/components/KinoPage/DetailPage.js';
import ActorsDetail from '../src/components/Actors/ActorDetail.js';



function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/top-rated' element={<TopRated/>}/>
        <Route path='/movies/detail-page/:movie_id' element={<DetailPage/>}/>
        <Route path='/actor/detail-page/:actor_id' element={<ActorsDetail/>}/>
     </Routes>
    </div>
  );
}

export default App;
