import React from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/charecterCounter'

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
