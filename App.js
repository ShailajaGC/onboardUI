import React, {useState} from 'react';
import Onboard from './components/onboard';
import Home from './components/Home';

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  }

  return (
    <>
      { showOnboard && <Onboard handleDone={handleOnboardFinish} /> }
      { !showOnboard && <Home/> }
    </>
  );
};

export default App