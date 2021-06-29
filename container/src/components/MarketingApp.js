import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/Marketing';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        console.log('The Container noticed navigation in Marketing');
        //const { pathname: nextPathname } = location;
        const { pathname } = history.location;
        console.log("PATHNAME => ", pathname);
        console.log("NEXT PATHNAME => ", nextPathname);
        if(pathname !== nextPathname) {
          history.push(nextPathname);
        }
      }
    });

    history.listen(onParentNavigate)
  }, []);

  console.log("REF WITH => ", ref);
  console.log("REF WITH CURRENT!! => ", ref.current);

  return (<div ref={ref}/>)
}