import React, { useState } from "react";
import "./profile.css";
import { LoginPage } from '../components';
import { useSelector } from "react-redux";



const ProfilePage = () => {
  const token = useSelector((state) => state.token);
  if (!token) {
    return <LoginPage />
  }
  return <div className="profile__container">profile</div>;
};
export default ProfilePage;
