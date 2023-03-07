import axios from 'axios';
//devUrl http://localhost:3001
export default axios.create({
  baseURL: 'https://harrycrosbyserver.onrender.com',
});
