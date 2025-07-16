import { Outlet } from 'react-router-dom';
import Navbar from './Features/Navbar.tsx';
import Footer from './Features/Footer.tsx';
//import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
