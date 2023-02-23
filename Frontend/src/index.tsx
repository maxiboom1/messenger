import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthMenu from './Components/AuthArea/AuthMenu/AuthMenu';
import Layout from './Components/LayoutArea/Layout/Layout';
import './index.css';
import { authStore } from './Redux/AuthState';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// logic here: token && -> user sees layout; 
// !token && authMenu

const token = authStore.getState().token;

root.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

