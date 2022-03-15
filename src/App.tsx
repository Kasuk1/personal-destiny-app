import { AppRouter } from 'routes/AppRouter';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import { defaultTheme } from './styles/ThemeStyles';

export const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <AppRouter />
  </ThemeProvider>
);
