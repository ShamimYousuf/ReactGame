import React from 'react';
import './App.css';
import Game from './components/Game';
import Fun from './components/Fun';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
  <>
    <ErrorBoundary>
      <Fun />
    </ErrorBoundary>
    <Game />
  </>

);

export default App;
