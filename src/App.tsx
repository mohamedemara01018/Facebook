

import { useSelector } from 'react-redux'
import './App.css'
import Main_home from './pages/homepage/Main_home'
import Login_Register from './pages/login/Login_Register'
import { stateType } from './types'
import Alert from './components/Alert'
import { Route, Routes } from 'react-router-dom'
import Show_post from './pages/homepage/show-post/Show_post'


function App() {
  const user = useSelector((state: stateType) => state.login)
  // localStorage.clear()
  return (
    <div >
      <Alert />
      {(user && user.user && user.token) || (localStorage.getItem('user') && localStorage.getItem('token'))
        ? <Main_home />
        : <Login_Register />}

      <Routes>
        <Route path='/post/:id' element={<Show_post />} />
      </Routes>
    </div>
  )
}

export default App
