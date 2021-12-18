import {Route,Routes } from 'react-router-dom';

//pages
import AllMeetupsPage from "./pages/AllMeetups";
import FaviritesPage from './pages/Favorites.jsx';
//import NewMeetup from './pages/NewMeetup.jsx';
//component
import NewMeetupPage from './pages/NewMeetup.jsx';

import Layout from './components/layout/Layout';

function App() {
  return (
    <div >
      <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage/>}>
        </Route>
        <Route path="/new-meetup" element={<NewMeetupPage/>}>
        </Route>
        <Route path="/favorites" element={<FaviritesPage/>}/>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
