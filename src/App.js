import { useState } from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Header from './components/Header';
import BookTable from './components/BookTable';
import AddBookDialog from './components/AddBookDialog';
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

// Mock data
const allBooks = [
  { id: 1, title: 'boek 1', author: 'auteur 1', read: false },
  { id: 2, title: 'boek 2', author: 'auteur 2', read: true },
  { id: 3, title: 'boek 3', author: 'auteur 3', read: false },
  { id: 4, title: 'boek 4', author: 'auteur 4', read: false },
  { id: 5, title: 'boek 5', author: 'auteur 5', read: true }
]

function App() {
  const [books, setBooks] = useState(allBooks);

  const addBook = (title, author, read) => {
    const newBook = { id: new Date().valueOf(), title, author, read };
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    const remainingBooks = books.filter(book => id !== book.id);
    setBooks(remainingBooks);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Divider />
          <main>
            <AddBookDialog addBook={addBook} />
            <BookTable books={books} deleteBook={deleteBook} />
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
