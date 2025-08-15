import React from 'react';
// import styled from 'styled-components';

const Button = ({buttext}) => {
  return (
      <button className='buton'> 
        <span className="circle1" />
        <span className="circle2" />
        <span className="circle3" />
        <span className="circle4" />
        <span className="circle5" />
        {buttext.map((item,index) => <span key={index} className="text">{item}</span>)}
      </button>
  );
}

;

export default Button;
