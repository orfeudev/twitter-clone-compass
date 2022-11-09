import { useState } from 'react';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout />
      <GlobalStyles />
    </>
  );
}

export default App;
