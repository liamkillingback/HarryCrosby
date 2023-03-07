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
          <Route
            exact
            path='https://harrycrosby.onrender.com/'
            element={<Layout />}
          >
            <Route
              exact
              path='https://harrycrosby.onrender.com/'
              element={<Home />}
            />
            <Route
              exact
              path='https://harrycrosby.onrender.com/Gallery'
              element={<GalleryPage />}
            />
            <Route
              exact
              path='https://harrycrosby.onrender.com/Contact'
              element={<ContactPage />}
            />
            <Route
              exact
              path='https://harrycrosby.onrender.com/Animation'
              element={<AnimationPage />}
            />
            <Route
              exact
              path='https://harrycrosby.onrender.com/Profile'
              element={
                isAuth ? (
                  <ProfilePage />
                ) : (
                  <Navigate to='https://harrycrosby.onrender.com/Login' />
                )
              }
            />
            <Route
              exact
              path='https://harrycrosby.onrender.com/Login'
              element={<LoginPage />}
            />
            <Route
              exact
              path='https://harrycrosby.onrender.com/Register'
              element={<RegisterPage />}
            />
            <Route
              exact
              path='https://harrycrosby.onrender.com/addImages'
              element={
                isAuth ? (
                  <AddImagesPage />
                ) : (
                  <Navigate to='https://harrycrosby.onrender.com/' />
                )
              }
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
