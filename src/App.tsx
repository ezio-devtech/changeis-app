import React from 'react';
import './App.css';
import FakeImageDisplay from './FakeImageDisplay';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FakeImageDisplay />
      </header>
    </div>
  );
};

export default App;
