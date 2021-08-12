import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    alert: {
        marginTop: theme.spacing(4),
    },
}));

function FeedbackAlert({ mutation, open, handleClose }) {
    const classes = useStyles();

    return (
        <>
            <Collapse in={open}>
                {mutation.isSuccess && <Alert
                    className={classes.alert}
                    severity="success"
                    onClose={handleClose}
                >
                    Book added!
                </Alert>}
                {mutation.isError && <Alert
                    className={classes.alert}
                    severity="error"
                    onClose={handleClose}
                >
                    An error occurred: {mutation.error.message}
                </Alert>}
            </Collapse>
        </>
    );
}

export default FeedbackAlert;