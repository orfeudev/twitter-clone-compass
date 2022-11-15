import { useState } from 'react';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
import ThemeProvider from './context/themeContext';
import ThemeWrapper from './components/ThemeWrapper.tsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Layout />
        <GlobalStyles />
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
