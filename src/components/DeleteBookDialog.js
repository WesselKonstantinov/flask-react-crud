import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    buttonRed: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.error.light
        },
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },
    buttonGrey: {
        backgroundColor: theme.palette.grey[400],
        '&:hover': {
            backgroundColor: theme.palette.grey[300]
        }
    }
}));

function DeleteBookDialog({ id, deleteBook }) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        deleteBook(id);
        handleClose();
    };

    return (
        <>
            <Button
                className={classes.buttonRed}
                onClick={handleClickOpen}
                fullWidth
            >
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Confirm delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this book?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ButtonGroup variant="contained" fullWidth>
                        <Button
                            className={classes.buttonGrey}
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            className={classes.buttonRed}
                            onClick={handleClick}
                        >
                            Delete
                        </Button>
                    </ButtonGroup>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default DeleteBookDialog;