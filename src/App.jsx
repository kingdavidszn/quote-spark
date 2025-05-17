import { useEffect, useState } from 'react';
import './App.css';
import quotes from './quotes'; // ✅ Import your 500 quotes here

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % quotes.length;
        setQuote(quotes[nextIndex]);
        return nextIndex;
      });
    }, 2000); // 2-second interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#111',
      color: '#fff',
      textAlign: 'center',
      padding: '2rem',
      transition: 'all 0.5s ease-in-out'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>QuoteSpark 🔥</h1>
      <p style={{ fontStyle: 'italic', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
        "{quote.text}"
      </p>
      <p style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>— {quote.author}</p>
    </div>
  );
}

export default App;
