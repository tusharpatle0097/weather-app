import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from '../Navbar/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Crud from '../components/Crud';
import CrudView from '../cruds/CrudView';
import CrudUpdate from '../cruds/CrudUpdate';

const Routing = () => {
  return (
    <>
<Router>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='crud' element={<Crud/>}></Route>
        <Route path='/crud-View/:id' element={<CrudView/>}></Route>
        <Route path='/crud-update/:id' element={<CrudUpdate/>}></Route>
    </Routes>
</Router>
    </>
  )
}

export default Routing