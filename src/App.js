import './App.css';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Banner />

      <Routes>
        <Route path='/' element={<Homepage />} />


      </Routes>


    </div>
  );
}

export default App;
