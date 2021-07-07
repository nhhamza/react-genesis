import React from 'react';
import { withRouter } from 'react-router';
import './style.scss';
import logoMJ from '../../assets/images/logo_MJ.png';
import logoDAP from '../../assets/images/logo_dap.png';
import t from '../../constants/translates';

const Search = () => {
  return (
    <div className="main">
      <div className="title">
        <div className="title_text">
          <h2>{t.search.title}</h2>
        </div>
      </div>
      <div className="inputDiv">
        <input type="text" placeholder={t.search.placeholder} />
      </div>
      <div className="logos">
        <img src={logoMJ} alt={t.search.altLogoMJ} />
        <img src={logoDAP} alt={t.search.altLogoDAP} />
      </div>
    </div>
  );
};

export default withRouter(Search);
