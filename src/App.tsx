import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <header />
      Privet
      <Outlet />
    </div>
  );
}

export default App;
