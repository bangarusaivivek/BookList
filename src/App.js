import React from 'react';
import BookContextProvider from './Contexts/BookContext';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BookContextProvider >
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
