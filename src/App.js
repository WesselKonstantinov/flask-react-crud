import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Header from './components/Header';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Divider />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
