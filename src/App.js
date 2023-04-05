import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WalletDashboard from './App/pages/WalletDashboard';
import Login from './App/pages/Login';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Navigate to={'/dashboard'}/>} />
        <Route exact path='/dashboard' element={<PrivateRoute/>}>
            <Route exact path='/dashboard' element={<WalletDashboard/>}/>
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
