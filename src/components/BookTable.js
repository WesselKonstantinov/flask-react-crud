import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    buttonYellow: {
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.warning.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.warning.light
        }
    },
    buttonRed: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.error.light
        }
    }
}))

function BookTable({ books, deleteBook }) {
    const classes = useStyles();

    const bookRows = books.map(book =>
        <TableRow key={book.id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.read ? 'Yes' : 'No'}</TableCell>
            <TableCell>
                <ButtonGroup variant="contained" fullWidth>
                    <Button className={classes.buttonYellow}>Update</Button>
                    <Button
                        className={classes.buttonRed}
                        onClick={() => deleteBook(book.id)}
                    >
                        Delete
                    </Button>
                </ButtonGroup>
            </TableCell>
        </TableRow>
    )

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