import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <Link to="/login">
        <Button variant="dark">
          Login
        </Button>
      </Link>
      <Link to="/signup">
        <Button variant="dark">
          Register
        </Button>
      </Link>
    </div>
  );
}

export default MainPage;
