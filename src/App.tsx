import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import styled from 'styled-components';
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledLink isBlue={count > 4} className="App">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </StyledLink>
  );
}

export default App;

interface PStyledLink {
  isBlue?: boolean;
}

const StyledLink = styled.div<PStyledLink>`
  color: ${(props) => (props.isBlue ? 'blue' : 'pink')};
  font-weight: bold;
`;
