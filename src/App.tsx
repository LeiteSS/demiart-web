import Router from './routes';

import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
