import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/Login' element={<Login/>} />

      </Routes>
    </div>

  );
}

export default App;
