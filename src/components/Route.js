import {useEffect, useState} from 'react';

const Route = ({path, children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      // console.log('Location Change to ', window.location.href);
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  },[]);

  return currentPath === path
    ? children
    : null;
};

export default Route;