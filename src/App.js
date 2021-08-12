import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Header from './components/Header';
import MainSection from './components/MainSection';
import amber from '@material-ui/core/colors/amber';
import red from '@material-ui/core/colors/red';

// Override theme colors to be used for buttons
let theme = createTheme({
  palette: {
    error: {
      light: red[200],
      main: red[500]
    },
    warning: {
      light: amber[200],
      main: amber[500]
    }
  }
});
theme = responsiveFontSizes(theme);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Container>
            <Header />
            <Divider />
            <MainSection />
          </Container>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
