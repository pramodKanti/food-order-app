import React from 'react';

import './ErrorModal.css';

const ErrorModal = React.memo(props => {
  
  return (
    <React.Fragment>
      <div className="error-modal">
        <h2>{props.heading}</h2>
        <p>{props.message}</p>
        <div className="error-modal__actions">
          <button type="button" className='button' onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default ErrorModal;
