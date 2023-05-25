import React from 'react';
import { Display } from './components/Display/Display';
import './app.scss'
import { BtnOperators } from './components/Button-operators/BtnOperators';

function App() {
  return (
    <div className='calc'>
      <Display/>
      <BtnOperators/>
    </div>
  );
}

export default App;
