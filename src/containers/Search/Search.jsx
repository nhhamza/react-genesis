import React from 'react';
import { withRouter } from 'react-router';
import './style.scss';
import logoMJ from '../../assets/images/logo_MJ.png';
import logoDAP from '../../assets/images/logo_dap.png';
import t from '../../constants/translates';

const Search = () => {
  return (
    <div className="background">
      <div className="page-content">
        <div className="title">
          <div className="title__text">
            <h2>{t.search.title}</h2>
          </div>
        </div>
        <div className="input-component">
          <input
            className="input-component__input"
            type="text"
            placeholder={t.search.placeholder}
          />
        </div>
        <div className="logo-container">
          <img
            className="logo-container__img"
            src={logoMJ}
            alt={t.search.altLogoMJ}
          />
          <img
            className="logo-container__img"
            src={logoDAP}
            alt={t.search.altLogoDAP}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Search);
