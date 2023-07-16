import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import NotFound from './Components/NotFound';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/signin' element={<SignIn></SignIn>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    
    </>
  
  );
}

export default App;
