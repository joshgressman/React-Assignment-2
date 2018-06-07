import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
 
    return(
        <div className="charDiv" onClick={props.clicked}>
          <p>{props.letter}</p>
          <p>{props.children}</p>
        </div>
    )
}

export default charComponent;