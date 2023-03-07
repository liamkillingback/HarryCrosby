import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  GalleryPage,
  Home,
  ContactPage,
  AnimationPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  AddImagesPage,
  Layout,
} from './components';

// import pages
import { Navbar, Footer } from './containers';

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Layout />}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Gallery' element={<GalleryPage />} />
            <Route exact path='/Contact' element={<ContactPage />} />
            <Route exact path='/Animation' element={<AnimationPage />} />
            <Route exact path='/Login' element={<LoginPage />} />
            <Route exact path='/Register' element={<RegisterPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
