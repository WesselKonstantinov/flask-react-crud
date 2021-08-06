import { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    buttonBlue: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.info.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.info.light
        }
    },
    buttonYellow: {
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.warning.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.warning.light
        },
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    buttonRed: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.error.light
        }
    }
}));

const BlueCheckbox = withStyles(theme => ({
    root: {
        '&$checked': {
            color: theme.palette.info.main
        }
    },
    checked: {}
}))(props => <Checkbox color="default" {...props} />);

function UpdateBookDialog({ book, updateBook }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [inputValues, setInputValues] = useState({
        title: book.title,
        author: book.author,
        read: book.read
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        type === 'checkbox' ?
            setInputValues({ ...inputValues, [name]: checked })
            :
            setInputValues({ ...inputValues, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBook(book.id, inputValues.title, inputValues.author, inputValues.read);
        handleClose();
    };

    return (
        <>
            <Button
                className={classes.buttonYellow}
                onClick={handleClickOpen}
                fullWidth
            >
                Update
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Update book details</DialogTitle>
                <DialogContent dividers>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        type="text"
                        id="title"
                        name="title"
                        label="Title"
                        value={inputValues.title}
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        type="text"
                        id="author"
                        name="author"
                        label="Author"
                        value={inputValues.author}
                        onChange={handleInputChange}
                    />
                    <FormControlLabel
                        label="Read?"
                        control={<BlueCheckbox
                            name="read"
                            checked={inputValues.read}
                            onChange={handleInputChange}
                        />}
                    />
                </DialogContent>
                <DialogActions>
                    <ButtonGroup variant="contained" fullWidth>
                        <Button
                            className={classes.buttonRed}
                            onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            className={classes.buttonBlue}
                            onClick={handleSubmit}
                        >
                            Update
                        </Button>
                    </ButtonGroup>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default UpdateBookDialog;