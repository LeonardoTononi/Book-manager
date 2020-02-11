import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './title.styles.scss';

const Title = props => {
  const { auth, profile } = props;
  if (!auth.uid) return <Redirect to='/signIn-and-signUp' />;

  return (
    <header className='welcome-container'>
      <h1 className='welcome-title'>{`Welcome ${profile.displayName}`}</h1>
      <p>
        You can find a book and add it to your shelf, then click on it and have
        a look to more details.
      </p>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Title);
