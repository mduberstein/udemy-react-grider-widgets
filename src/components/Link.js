import React from "react";

const Link = ({className, href, children}) => {
  const onClick = (event) => {  
    if(event.metaKey || event.ctrlKey) {
      // allow normal browser behavior, i.e. open in the new tab with page refresh
      return;    
    }
    // prevent default browser behavior of full page reload
    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
  <a onClick={onClick} className={className} href={href}>
    {children}
  </a>
  );
};

export default Link;