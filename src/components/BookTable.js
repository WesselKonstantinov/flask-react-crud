import { useQuery } from 'react-query';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import UpdateBookDialog from './UpdateBookDialog';
import DeleteBookDialog from './DeleteBookDialog';

function BookTable({ deleteBook, updateBook }) {
    const getBooks = async () => {
        const response = await fetch('http://localhost:5000/books');
        return response.json();
    };

    const { isLoading, isError, error, data } = useQuery('books', getBooks);

    if (isLoading) {
        return <Typography>Loading books...</Typography>
    }

    if (isError) {
        return <Typography>An error has occurred: {error.message}</Typography>
    }

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
                    {data.map(book =>
                        <TableRow key={book.id}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.read ? 'Yes' : 'No'}</TableCell>
                            <TableCell>
                                {/* <ButtonGroup variant="contained" fullWidth>
                    <UpdateBookDialog updateBook={updateBook} book={book} />
                    <DeleteBookDialog deleteBook={deleteBook} id={book.id} />
                </ButtonGroup> */}
                            </TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BookTable;