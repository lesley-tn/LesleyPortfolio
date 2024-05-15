import { createRoot } from "react-dom/client"
import App from './App';
import "./styles.css"
import { Overlay } from './pages/Overlay';
import { useState } from "react"

function StartPage() {
  const [ready, set] = useState(false)
  return (
    <>
      <App />
      <div className="dot" />
      <div className={`fullscreen bg ${ready ? "ready clicked" : ""}`}>
        <div className="stack">
          <button onClick={() => set(true)}>Start</button>
        </div>
     
      </div>
    </>
  )
}


createRoot(document.getElementById('root')).render(
    <>
        <StartPage />
        <Overlay />
    </>
);
