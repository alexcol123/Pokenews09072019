import React from 'react';
import Rainbow from '../HOC/Rainbow';

function About({className2}) {

  return (
    <div className="About">
      <h4 className="center ">About</h4>
      <p className={className2}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi,
        doloribus non, commodi voluptatibus voluptatem voluptas aspernatur ad
        repellendus maxime possimus. Autem dolorum, nihil perferendis earum odio
        eligendi ex consectetur. Ducimus nemo ab nostrum quam.
      </p>
    </div>
  );
}

export default Rainbow(About);
