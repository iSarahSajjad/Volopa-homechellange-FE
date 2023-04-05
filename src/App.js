import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WalletDashboard from './App/pages/WalletDashboard';
import Login from './App/pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<WalletDashboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
