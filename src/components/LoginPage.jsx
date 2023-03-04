import { useRef, useState, useEffect, useContext } from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../state';
import axios from './axios';
const LOGIN_URL = '/auth/login';

const Login = () => {
  const dispatch = useDispatch();
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var username = user;
    var password = pwd;
    try {
      const response = await axios.post(LOGIN_URL, { username, password });
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const loggedIn = Boolean(response);
      const token = response?.data?.token;
      const user = response?.data?.user;
      const isAdmin = response?.data?.isAdmin;
      console.log(user);
      if (loggedIn) {
        dispatch(
          setLogin({
            user: user,
            token: token,
            isAdmin: isAdmin
          })
        );
        navigate('/');
      }
    } catch (err) {
      setErrMsg('Username or password incorrect');
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href='/'>Go to Home</a>
          </p>
        </section>
      ) : (
        <section className='login__container'>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form className='login__form' onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input
              className='login__inputs'
              type='text'
              id='username'
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor='password'>Password:</label>
            <input
              className='login__inputs'
              type='password'
              id='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p className='login__need'>
            Need an Account?
            <br />
            <span className='line'>
              {/*put router link here*/}
              <a href='/Register'>Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
