import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';

import Header from './components/Header';
import Body from './components/Body';
// import RestrauntCard from './components/RestaurantCard';



function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}



export default App;
