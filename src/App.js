import { useState } from 'react';
import { createTheme, makeStyles, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Header from './components/Header';
import BookTable from './components/BookTable';
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

const useStyles = makeStyles(theme => ({
  buttonGreen: {
    backgroundColor: theme.palette.success.main,
    color: '#fff',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: '33%',
    '&:hover': {
      backgroundColor: theme.palette.success.light
    }
  }
}));

// Mock data
const allBooks = [
  { id: 1, title: 'boek 1', author: 'auteur 1', read: false },
  { id: 2, title: 'boek 2', author: 'auteur 2', read: true },
  { id: 3, title: 'boek 3', author: 'auteur 3', read: false },
  { id: 4, title: 'boek 4', author: 'auteur 4', read: false },
  { id: 5, title: 'boek 5', author: 'auteur 5', read: true }
]

function App() {
  const classes = useStyles();

  const [books, setBooks] = useState(allBooks);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Divider />
          <main>
            <Button className={classes.buttonGreen}>Add book</Button>
            <BookTable books={books} />
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
