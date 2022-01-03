import { Global } from '@emotion/react';
import { GlobalStyles } from './components/common/GlobalStyles';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Main />
    </>
  );
}

export default App;
