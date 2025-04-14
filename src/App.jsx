import './App.css'
import HelloWorld from './hello-world/HelloWorld'
import Calc from './calc/Calc';
import Imc from './imc/Imc';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/hello-world' element={<HelloWorld/>}></Route>
          <Route path='/calc' element={<Calc/>}></Route>
          <Route path='/imc' element={<Imc/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;