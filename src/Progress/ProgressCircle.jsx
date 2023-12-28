import React from 'react';

const ProgressCircle = ({ percentage }) => 
{
  const circleStyle = {
    width: '100px',
    height: '100px',
    position: 'fixed',
    top: '140px',
    left: '20px',
    
  };

  const fillStyle = {
    fill: 'none',
    stroke: 'blue',
    strokeWidth: '10',
    strokeDasharray: `${percentage}, 100`,
    transition: 'stroke-dasharray 0.5s ease-in-out',
  };

  return (
    <div className='w-[150px] h-[100px]'>
    <h1 className='text-center'>Your Progress</h1>
    <svg className="progress-circle" style={circleStyle} >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#f3f4f6"
        strokeWidth="10"
        fill="transparent"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        style={fillStyle}
        
      />
      <text x="50%" y="50%" textAnchor="middle" fill="white" dy=".3em">
        {percentage}%
      </text>
    </svg>
    </div>
  );
};

export default ProgressCircle;
