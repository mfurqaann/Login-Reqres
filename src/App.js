import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import ListUser from './pages/List-User/ListUser'

import UserDetail from './pages/User-Detail/UserDetail'
function App() {
   return (
      <Routes>
         <Route path="/" exact element={<Login />} />
         <Route path="/login" element={<Login />} />
         <Route path="/users" element={<ListUser />} >
            <Route path=":userId" element={<UserDetail />} />
         </Route>
      </Routes>
   )
}

export default App
