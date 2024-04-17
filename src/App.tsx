import { useRef, useEffect } from 'react'
// import './App.css'
// const url = 'https://staging--adminbpr.netlify.app'
const url = 'http://localhost:3000'

function App() {
  const iRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
      console.log(event.data, event.origin)
    };

    window.addEventListener('message', messageHandler);

    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);

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

  const checkIsLoggedIn = () => {
    if (iRef?.current?.contentWindow) {
      iRef.current.contentWindow.postMessage({
        eventMessage: 'checkIsLoggedIn'
      }, '*');
    }
  }

  return (
    <div className="card">
      {url}
      <iframe src={url} width={1000} height={1000} ref={iRef} onLoad={handleLoad} />
      <button onClick={hideNavbar}>Hide Navbar</button>
      <button onClick={logout}>Logout</button>
      <button onClick={checkIsLoggedIn}>checkIsLoggedIn</button>
    </div>
  )
}

export default App
