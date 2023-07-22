import './App.css';
import Home from './pages/Home';
import AccountTable from './components/table/AccountTable';
import  Chart  from './components/chart/Chart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/table" element={<AccountTable/>}/>
        <Route path="/graph" element={<Chart/>}/>
      </Routes>
    </div>
  );
}

export default App;