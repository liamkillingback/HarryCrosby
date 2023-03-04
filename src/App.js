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
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/Gallery' element={<GalleryPage />} />
            <Route path='/Contact' element={<ContactPage />} />
            <Route path='/Animation' element={<AnimationPage />} />
            <Route
              path='/Profile'
              element={isAuth ? <ProfilePage /> : <Navigate to='/Login' />}
            />
            <Route path='/Login' element={<LoginPage />} />
            <Route path='/Register' element={<RegisterPage />} />
            <Route
              path='/addImages'
              element={isAuth ? <AddImagesPage /> : <Navigate to='/' />}
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
