import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/details" element={<Index />}>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
