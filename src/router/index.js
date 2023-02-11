import {Routes,Route} from 'react-router-dom';
import EmailChip from '../components/EmailChip';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Counter from '../pages/Counter';
import Users from '../pages/Users';

const MainRoute = () =>{
  return(
    <Routes>
      <Route element={<Home/>} path="/" index/>
      <Route element={<Login/>} path="login"/>
      <Route element={<EmailChip/>} path="email-chips" />
      <Route element={<Counter/>} path="counter" />
      <Route element={<Users/>} path="users" />
    </Routes>
  )
}

export default MainRoute;