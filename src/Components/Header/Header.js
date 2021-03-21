import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import { auth } from '../../Firebase/firebase.utils';
//Components
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import './Header.sass';

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo__container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/authentication">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
