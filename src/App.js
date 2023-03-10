import {Route,Routes,BrowserRouter} from "react-router-dom";
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'


import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container customClass='minHeight'>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/projects' element={<Projects/>}></Route>
          <Route exact path='/company' element={<Company/>}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App