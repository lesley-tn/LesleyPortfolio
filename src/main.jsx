import { createRoot } from "react-dom/client";
import App from './App';
import "./styles.css";
import { Overlay } from './pages/Overlay';

function MobileDetector (children) {
  const isMobile = /iPhone|iPad|iPod|Anroid/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <div style={{ textAlign: 'center', marginTop:'25vh', marginLeft:'8px', marginRight:'8px'}}>
        <h2 style={{ fontSize: '3vh'}}>Site not available on mobile devices.
        <br/><br/>
        Please visit this site on a PC or laptop.</h2>
      </div>
    )
  };

  return <>{children}</>;
}
createRoot(document.getElementById('root')).render(
  <MobileDetector>
    <App />
    <Overlay />
  </MobileDetector>
);

