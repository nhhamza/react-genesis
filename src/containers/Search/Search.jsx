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
        <div className="search-container">
          <div className="input-component">
            <SearchIcon />
            <input
              className="input-component__input"
              type="text"
              placeholder={t.search.placeholder}
            />
            <select id="input-component__select" name="input-component__select">
              <option value={t.search.searchByInmateValue}>
                {t.search.searchByInmate}
              </option>
              <option value={t.search.searchByCellNumberValue}>
                {t.search.searchByCellNumber}
              </option>
            </select>
          </div>
          <div className="search-container__text">
            {t.search.searchContainerText}
          </div>
          <button type="button" className="blue-button">
            {t.search.buttonLabel}
          </button>
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
