import React from 'react'

const Toggle = ({toggleTheme }) => {
     return (
          <div onClick={toggleTheme} >
               Dark/Light Mode
          </div>
     );
};

export default Toggle;