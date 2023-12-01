import React from 'react';
// components
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Works from './components/Works';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <About/>
      <Works/>
      <Contacts/>
    </>
  );
};

export default App;
