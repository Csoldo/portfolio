import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Layout from './pages/Layout';
import Poker from './pages/Poker';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/about', element: <About /> },
      { path: 'poker', element: <Poker /> },
    ],
  },
]);

export default router;
