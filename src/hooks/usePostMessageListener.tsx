import * as React from 'react';

type EventMessage = 'hideNavbar' | 'logout';

interface EventMessageData {
  data: {
    eventMessage: EventMessage;
  }
}

const usePostMessageListener = () => {

  const handleLogout = () => {
  };

  React.useEffect(() => {
    const messageHandler = (event: EventMessageData) => {
      switch (event.data.eventMessage) {
      case 'hideNavbar': {
        break;
      }
      case 'logout': {
        handleLogout();
        break;
      }
      default:
        break;
      }
    };

    window.addEventListener('message', messageHandler);

    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);
};

export default usePostMessageListener;
