import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UseNav = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about'); // Navigate to the "/about" route
  };

  return (
    <>
      <div>Home</div>
      <button onClick={goToAbout}>About</button>
    </>
  );
};

export default UseNav;
