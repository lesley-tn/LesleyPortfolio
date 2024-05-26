import { createRoot } from "react-dom/client";
import App from './App';
import "./styles.css";
import { Overlay } from './pages/Overlay';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
  </>
);

