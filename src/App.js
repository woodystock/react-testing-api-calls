import './App.css';
import GibliBrowser from './browser/GibliBrowser';
import { FilmsProvider } from './FilmsContext';

function App() {
  return (
  <FilmsProvider>
      <GibliBrowser />
  </FilmsProvider>
  )
}

export default App;
