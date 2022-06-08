import './App.css';
import Cards from './components/Cards';
// import CctvMarker from './components/CctvMarker';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Cards />
      </div>
    </div>
  );
}