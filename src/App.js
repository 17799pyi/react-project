import React from 'react';
import { isIE } from 'react-device-detect';

import IESupportedPage from './scenarios/IIESupportedPage/index.js';
import Routes from './router/routes.js';
import SnackBar from './constituents/ISnackbar';

function App() {

  if (isIE) return <IESupportedPage />

  return (
    <>
      <SnackBar />
      <Routes />
    </>
  );
}

export default App;
