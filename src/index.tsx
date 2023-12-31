import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Router>
        <App/>
        <ToastContainer/>
    </Router>
)
