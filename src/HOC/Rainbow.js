import React from 'react';

const Rainbow = WrappedComponent => {
  const colors = ['red', 'pink', 'blue', 'orange', 'green', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const randomColor2 = colors[Math.floor(Math.random() * 5)];
  const className = `${randomColor}-text`;
  const className2 = `${randomColor2}-text`;

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} className2={className2} />
      </div>
    );
  };
};

export default Rainbow;
