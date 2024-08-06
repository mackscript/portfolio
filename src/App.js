import React, { useState } from 'react'; // For React 17 and earlier, or if you use JSX
import logo from './logo.svg';
import Landing from './components/common/Landing';

function App() {
  const [display, setDisplay] = useState(false);

  function showContent() {
    setDisplay(true);
  }
  return (
    <div className='conainer_app'>
      <Landing showContent={() => showContent()} />
      {display ? <h1>Mack parker</h1> : null}
    </div>
  );
}

export default App;
