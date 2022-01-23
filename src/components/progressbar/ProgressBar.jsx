import React, { useEffect, useRef } from 'react';
import './progressbar.scss'

const ProgressBar = ({ value }) => {

    const barInnerRef = useRef()

    useEffect(() => {
        barInnerRef.current.style.width = `${value}%`
    }, [])

  return <div className='progress-bar'>
        <div ref={barInnerRef} className="progress-bar_inner">
            
        </div>
  </div>;
};

export default ProgressBar;
