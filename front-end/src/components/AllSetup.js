import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const buttonStyle = {
  width: '280px',
  height: '45px',
  left: '1028px',
  top: '603px',
  background: '#FD7652',
  boxShadow: '4px 4px 4px rgba(43, 50, 87, 0.25)',
  borderRadius: '34.5px',
  border: 'none',
  alignSelf: 'center',
  maxWidth: '100%',
  marginTop: '40px',
};

const AllSetup = () => {
  const history = useHistory();
  const buttonHandler = () => {
    history.push('/dashboard');
  };
  return (
    <Container>
      <h1>All set up!</h1>
      <Button
        style={buttonStyle}
        type="button"
        variant="primary"
        onClick={() => buttonHandler()}
      >
        Go to dashboard
      </Button>
    </Container>
  );
};

export default AllSetup;
