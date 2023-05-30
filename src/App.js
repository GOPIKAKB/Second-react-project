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
import TablePage from './components/CredOpeation/TablePage';
import InputPage from './components/CredOpeation/InputPage';
import Crud1 from './components/CRUD/Crud1';
import View from './components/CRUD/View';
import ipdata from './components/CRUD/Newpage';
import { createContext, useState } from 'react';
import Update from './components/Update';
import Edit from './components/CRUD/Edit';
import Add from './components/CRUD/Add';


export const newContext = createContext()
function App() {
  const [data, setData] = useState(ipdata);
  const [age, setAge] = useState('');
  const [name,setName]=useState('');
  const [place, setPlace] = useState('');
  return (
    <div>
      <newContext.Provider value={[data, setData,age, setAge,name, setName,place, setPlace]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Crud1 />}></Route>
            <Route path='/view/:parameter' element={<View />}></Route>
            <Route path='/edit/:parameter' element={<Edit/>}></Route>
            <Route path='/add' element={<Add/>}></Route>
          </Routes>
        </BrowserRouter>
      </newContext.Provider>

        {/* <Update/> */}

      {/* 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TablePage/>}></Route>
        <Route path='input' element={<InputPage val={val}/>}></Route>

        </Routes>
        </BrowserRouter>  */}


      {/* <Icon1/> */}
      {/* <KeralaHome/> */}


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
