import React, { useState } from 'react';

function example = () => {

    const [title, setTitle] = useState ("diary");


  return (
    <div>
        {title}
    </div>
  );
};

export default example