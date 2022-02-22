import './App.css';
import GlobalFonts from './fonts/fontStyles';
import Home from './pages';
/* import Mint from './pages/mint' */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalFonts />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/mint" element={<Mint/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
