
import './css/App.css'
// import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Favorites from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* 
          // This is the main route of the application.
          // It renders the Home component when the user navigates to the root URL.
        */}
          <Route path='/favorites' element={<Favorites />} />
          {/* 
          // This route renders a placeholder for the Favorites page.
          // You can replace this with your actual Favorites component later.
        */}
        </Routes>
      </main>
    </div>
  )
}

export default App
