import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
  isAdmin: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.isAdmin = false;
    },
    setImages: (state, action) => {
      state.images = action.payload.images;
    },
  },
  devTools: false
});

export const { setLogin, setLogout, setImages } =
  authSlice.actions;
export default authSlice.reducer;
