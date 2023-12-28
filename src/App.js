import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Index from './Components/Resume/Index';
import TemplatesComponent from './Templates/TemplatesComponent';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/details" element={<Index/>}/>
          <Route path='/templates' element={<TemplatesComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
