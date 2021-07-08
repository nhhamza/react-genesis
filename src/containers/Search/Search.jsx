import React from 'react';
import { withRouter } from 'react-router';
import './style.scss';
import SearchIcon from '@material-ui/icons/Search';
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
          <SearchIcon />
          <input
            className="input-component__input"
            type="text"
            placeholder={t.search.placeholder}
          />
          <select id="input-component__select" name="input-component__select">
            <option value="detenu">Détenu</option>
            <option value="UGC">UGC</option>
          </select>
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
