import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import UpdateBookDialog from './UpdateBookDialog';
import DeleteBookDialog from './DeleteBookDialog';

function BookTable({ books, deleteBook, updateBook }) {
    const bookRows = books.map(book =>
        <TableRow key={book.id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.read ? 'Yes' : 'No'}</TableCell>
            <TableCell>
                <ButtonGroup variant="contained" fullWidth>
                    <UpdateBookDialog updateBook={updateBook} book={book} />
                    <DeleteBookDialog deleteBook={deleteBook} id={book.id} />
                </ButtonGroup>
            </TableCell>
        </TableRow>
    );

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Read?</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bookRows}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BookTable;