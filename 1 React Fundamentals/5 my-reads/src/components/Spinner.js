import React from 'react'

function Spinner(props) {
  const {spinType, otherClasses} = props;
  return (
    <div className={`spinner-grow text-${spinType} ${otherClasses || ''}`} role="status"></div>
  );
}

export default Spinner;