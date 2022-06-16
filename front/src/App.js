import './style.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandMark from './components/LandMark';
import CctvMarker from './components/CctvMarker';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path="/landmark" element={<LandMark />}/>
            <Route exact path="/cctv" element={<CctvMarker />}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}