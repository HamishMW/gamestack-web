import { useEffect, useRef } from 'react';

export function useScrollToTop(status) {
  const prevStatus = useRef();

  useEffect(() => {
    if (prevStatus.current === 'entering' && status === 'entered') {
      window.scrollTo(0, 0);
      document.getElementById('MainContent').focus();
    };

    prevStatus.current = status;
  }, [status]);
}
