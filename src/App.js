import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/ReactRouter1/Navigationbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/ReactRouter1/Home';
import Features from './components/ReactRouter1/Features';
import Pricing from './components/ReactRouter1/Pricing';
import Home2 from './components/ReactRouter2/Home2';
import About from './components/ReactRouter2/About';
import Careers from './components/ReactRouter2/Careers';
import Internship from './components/ReactRouter2/Internship';
import Placement from './components/ReactRouter2/Placement';
import NavigationBar2 from './components/ReactRouter2/NavigationBar2';
import Icon1 from './components/KeralaTourism/icons/Icon1';
import KeralaHome from './components/KeralaTourism/Home';

function App() {
  return (
    <div>
      {/* <Icon1/> */}
      <KeralaHome/>
      
      
      {/* <BrowserRouter>
      <NavigationBar2/>
        <Routes>
          <Route path='/home' element={<Home2 />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='/internship' element={<Internship />}></Route>
          <Route path='/placements' element={<Placement />}></Route>
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
<Navigationbar/>
<Routes>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/features' element={<Features/>}></Route>
  <Route path='/pricing'element={<Pricing/>}></Route>
</Routes>
</BrowserRouter> */}

    </div>
  );
}

export default App;
