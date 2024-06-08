import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Restaurants from './Pages/Restaurants'
import View from './Pages/View'


function App() {

  return (
    <Routes >
      <Route element={<Home/>} path='/'/>
      <Route element={<Restaurants/>} path='/restaurants'/>
      <Route element={<View/>} path='/:id/view'/>
    </Routes>
  )
}

export default App
