import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const nombre = 'Joseph'
  return (
    <div className="App">
        <h1>Hola {nombre}</h1>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
  )
}

export default App
