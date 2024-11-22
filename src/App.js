import React from 'react';
import Header from './components/Header';
import { ContentA } from './components/ContentA';
import { ContentB } from './components/ContentB';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <ContentA />
      <ContentB />
      <Footer />
    </div>
  )
}

export default App