import React from 'react';

// components
import Footer from './components/Footer';
import Header from './components/Header';

// css
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1></h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
