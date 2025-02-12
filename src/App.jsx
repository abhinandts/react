import { useContext } from 'react';
import './App.css'
import { createContext } from 'react';
import { useState } from 'react';

const ThemeContext = createContext(null)

const App = () => {

  const [theme, setTheme] = useState("");

  return (
    <>
      <ThemeContext.Provider value={theme} >
        <Form />
        <label htmlFor="">
          <input type="checkbox" name="" id=""
          checked = {theme === 'dark'}
          onChange={(e)=>setTheme(e.target.checked ? "dark" : "")}
          /> Dark Theme
        </label>
      </ThemeContext.Provider>
    </>
  )
}

export default App;

const Form = () => {
  return (
    <>
      <Panel title={"Panel Heading"} >
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </Panel>
    </>
  )
}

const Button = ({ children }) => {

  const theme = useContext(ThemeContext)
  const className = 'button-' + theme;

  return (
    <button className={className} >
      {children}
    </button>
  )
}

const Panel = ({ title, children }) => {

  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}