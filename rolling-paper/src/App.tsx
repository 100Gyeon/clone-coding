import { Global } from '@emotion/react';
import { GlobalStyles } from './components/common/GlobalStyles';
import { RecoilRoot } from 'recoil';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </>
  );
}

export default App;
