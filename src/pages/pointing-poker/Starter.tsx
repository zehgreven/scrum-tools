import React from 'react';

// import { Container } from './styles';

const Starter: React.FC = () => {
  return <div className="starter">
    <p>Start a session:
        <button>START</button>
      </p>
      <p>or Join a session: 
        <input type="text" />
        <button>Join</button>
      </p>
  </div>;
}

export default Starter;