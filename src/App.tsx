import React from 'react';
import NavBar from './Component/NavBar';
import Home from './Pages/Home/Home';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
