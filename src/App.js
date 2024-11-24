import { Navigate, BrowserRouter as Router, useRoutes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import About from './Pages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';
import CoreValues from './Pages/CoreValues';

function App() {

  const UserRoutes = () => useRoutes([
    { path: '/', element: <Home /> },
    // { path: '/contact', element: <Contact /> },
    // { path: '/about', element: <About /> },
    // { path: '/projects', element: <Project /> },
    { path: '*', element: <Navigate to="/" replace />}
  ]);

  return (
    <Router>
      <Header />
      <UserRoutes />
      <Services />
      <AboutUs />
      <CoreValues />
      <Footer />
    </Router>
  );
}

export default App;
