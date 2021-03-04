import * as React from 'react';
// @ts-ignore
import './app.scss';

const App: React.FC = () => (
  <div
    className="box"
    style={{
      alignItems: 'center',
      background: 'orange',
      display: 'flex',
      justifyContent: 'center',
      width: '30rem',
    }}
  >
    <h1>hello world</h1>
  </div>
);

export default App;
