import React, { useState } from 'react';
import Auth from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';

Auth.configure(awsconfig);
function App() {
  const [showYay, setShowYay] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowYay(!showYay)}>Show yay</button>
        {showYay && <p>Yay!</p>}
      </header>
    </div>
  );
}

export default withAuthenticator(App);
