import { useState } from 'react';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
import ThemeProvider from './context/themeContext';
import ThemeWrapper from './components/ThemeWrapper.tsx';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <ThemeWrapper>
        <RouterProvider router={router} />
        <GlobalStyles />
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
