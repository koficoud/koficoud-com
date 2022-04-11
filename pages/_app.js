import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TagManager from 'react-gtm-module';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PLTD4SW' });
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default MyApp;
