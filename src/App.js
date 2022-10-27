import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  
    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div >
     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
