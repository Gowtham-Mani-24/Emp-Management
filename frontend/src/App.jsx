import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from './pages/Login'
import Register from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { AddEmployee } from './pages/AddEmployee'
import { EditEmployee } from './pages/EditEmployee'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/employees/add' element={<AddEmployee />}/>
      <Route path='/employees/edit/:id' element={<EditEmployee />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
