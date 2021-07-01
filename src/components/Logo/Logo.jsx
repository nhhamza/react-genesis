import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.scss';
import text from '../../constants/translates';

const Logo = () => {
  return (
    <div className="logo__container">
      <img src={logo} alt="logo" className="logo__icon" />
      <span className="logo-title__left">{text.logo.drinks}</span>
    </div>
  );
};

export default Logo;
