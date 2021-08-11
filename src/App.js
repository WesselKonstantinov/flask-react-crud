import { QueryClient, QueryClientProvider } from 'react-query';
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

const queryClient = new QueryClient();

function App() {
  // const [books, setBooks] = useState(allBooks);

  // const addBook = (title, author, read) => {
  //   const newBook = { id: new Date().valueOf(), title, author, read };
  //   setBooks([...books, newBook]);
  // };

  // const deleteBook = (id) => {
  //   const remainingBooks = books.filter(book => id !== book.id);
  //   setBooks(remainingBooks);
  // };

  // const updateBook = (id, title, author, read) => {
  //   const updatedBooks = books.map(book => {
  //     if (id === book.id) {
  //       return { ...book, title, author, read };
  //     }
  //     return book;
  //   });
  //   setBooks(updatedBooks);
  // };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Container>
            <Header />
            <Divider />
            <main>
              <AddBookDialog /*addBook={addBook}*/ />
              <BookTable
              // books={books}
              // deleteBook={deleteBook}
              // updateBook={updateBook}
              />
            </main>
          </Container>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
