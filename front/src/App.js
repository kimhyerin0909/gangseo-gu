import './style.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandMark from './components/LandMark';
import Home from './components/Home';
import Footer from './components/Footer';
import Tendency from './components/Tendency';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path="/landmark" element={<LandMark />}/>
            <Route exact path='tendency' element={<Tendency />}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}