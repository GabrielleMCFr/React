import { useEffect } from 'react';

// clean up must be done with event listeners for example, to avoid memory leaks
useEffect(()=>{
    document.addEventListener('keydown', handleKeyPress);
    // Specify how to clean up after the effect:, if no clean up we dont return anything
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  })