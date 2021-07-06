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
        <div className="title_text">{t.search.title}</div>
      </div>
      <div className="inputDiv">
        <input type="text" placeholder="Numéro d'écrou ou nom" />
      </div>
      <div className="logos">
        <img src={logoMJ} alt="logo-ministère-justice" />
        <img src={logoDAP} alt="logo-dap" />
      </div>
    </div>
  );
};

export default withRouter(Search);
