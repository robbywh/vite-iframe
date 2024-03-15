import { useRef } from 'react'
const url = 'http://localhost:3000'

function App() {
  const iRef = useRef<HTMLIFrameElement | null>(null);

  const handleLoad = () => {
    if (iRef?.current?.contentWindow) {
      iRef.current.contentWindow.postMessage('hello', '*');
    }
  }

  const hideNavbar = () => {
    if (iRef?.current?.contentWindow) {
      iRef.current.contentWindow.postMessage({
        eventMessage: 'hideNavbar'
      }, '*');
    }
  }

  const logout = () => {
    if (iRef?.current?.contentWindow) {
      iRef.current.contentWindow.postMessage({
        eventMessage: 'logout'
      }, '*');
    }
  }

  return (
    <div className="card">
      <iframe src={url} width={1000} height={1000} ref={iRef} onLoad={handleLoad} />
      <button onClick={hideNavbar}>Hide Navbar</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default App
