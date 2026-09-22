import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import Register from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { AddEmployee } from './pages/AddEmployee'
import { EditEmployee } from './pages/EditEmployee'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Navbar } from './components/Navbar'
import { NotFound } from './pages/NotFound'

function App() {


  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/employees/add' element={
          <ProtectedRoute>
            <AddEmployee />
          </ProtectedRoute>
        } />
        <Route path='/employees/edit/:id' element={
          <ProtectedRoute>
            <EditEmployee />
          </ProtectedRoute>
        } />
        <Route 
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
