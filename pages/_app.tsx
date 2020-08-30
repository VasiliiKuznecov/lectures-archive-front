import React from 'react';
import { AppProps } from 'next/app';

import { useFocusStyling } from '../hooks/useFocusStyling';

import '../styles/global.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useFocusStyling();

  return <Component {...pageProps} />;
};

export default MyApp;