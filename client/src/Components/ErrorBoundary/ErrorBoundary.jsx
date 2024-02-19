// ErrorBoundary.jsx
import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      console.error(error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  const handleResetError = () => {
    setHasError(false);
  };

  if (hasError) {
    return (
      <>
        <Typography variant="h6" color="red">
          Something went wrong.
        </Typography>
        <Button onClick={handleResetError} color="blue">
          Try Again
        </Button>
      </>
    );
  }

  return children;
};

export default ErrorBoundary;
