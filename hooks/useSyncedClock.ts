import { useEffect } from "react";

const MILLISECONDS_IN_SECOND = 1000;

const useSyncedClock = (callback: () => void): void => {
  useEffect(() => {
    let timeoutID: NodeJS.Timeout;

    timeoutID = setTimeout(() => {
      callback();
      timeoutID = setInterval(callback, MILLISECONDS_IN_SECOND);
    }, MILLISECONDS_IN_SECOND - new Date().getMilliseconds());

    return () => clearTimeout(timeoutID);
  }, [callback]);
};

export default useSyncedClock;
