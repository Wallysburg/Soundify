import PropTypes from 'prop-types';
import React from 'react';
import Link from '../components/Link';
import NavSearch from '../components/NavSearch';
import { SONGS_PATH } from '../constants/RouterConstants';

const propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const Nav = ({ navigateTo }) => (
  <div className="nav">
    <div className="nav__inner container">
      <div className="nav__section">
        <i className="nav__logo__icon ion-radio-waves" />
        <Link
          className="nav__logo__text"
          navigateTo={navigateTo}
          path={SONGS_PATH}
        >
          SoundRedux
        </Link>
      </div>
      <div className="nav__section nav__section--flex" />
      <div className="nav__section">
        <NavSearch navigateTo={navigateTo} />
      </div>
    </div>
  </div>
);

Nav.propTypes = propTypes;

export default Nav;