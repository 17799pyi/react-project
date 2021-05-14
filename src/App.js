import React from 'react';
import { isIE } from 'react-device-detect';
// import Bowser from 'bowser';


import IESupportedPage from './pages/IESupportedPage/index.js';
import Routes from './routes/routes.js';
import SnackBar from './components/Snackbar';

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
