import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header />
      Privet
      <Outlet />
    </div>
  );
}

export default App;
