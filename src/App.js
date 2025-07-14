import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newsview from './components/Newsview';

function App() {
  return (
    
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Newsview/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
