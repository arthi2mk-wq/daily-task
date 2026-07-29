import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

function Context() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <Button />; 
}

function Button() {
  const theme = useContext(ThemeContext); 
  <h1>use context</h1>
  return <p className={theme}>I am styled by {theme} theme</p>;
}
export default Context;