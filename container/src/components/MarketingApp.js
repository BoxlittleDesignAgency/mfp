import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/Marketing';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  console.log("REF WITH => ", ref);
  console.log("REF WITH CURRENT => ", ref.current);

  return (<div ref={ref}/>)
}