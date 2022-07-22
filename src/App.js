import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import ListUser from './pages/List-User/ListUser'
function App() {
   return (
      <Routes>
         <Route path="/" exact element={<Login />} />
         <Route path="/login" element={<Login />} />
         <Route path="/list-user" element={<ListUser />} />
      </Routes>
   )
}

export default App
