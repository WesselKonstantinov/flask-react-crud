import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    alert: {
        marginTop: theme.spacing(4),
    },
}));

function FeedbackAlert({ postMutation, putMutation, open, handleClose }) {
    const classes = useStyles();

    return (
        <>
            <Collapse in={open}>
                {postMutation.isSuccess && <Alert
                    className={classes.alert}
                    severity="success"
                    onClose={handleClose}
                >
                    Book added!
                </Alert>}
                {postMutation.isError && <Alert
                    className={classes.alert}
                    severity="error"
                    onClose={handleClose}
                >
                    An error occurred: {postMutation.error.message}
                </Alert>}
                {putMutation.isSuccess && <Alert
                    className={classes.alert}
                    severity="success"
                    onClose={handleClose}
                >
                    Book updated!
                </Alert>}
                {putMutation.isError && <Alert
                    className={classes.alert}
                    severity="error"
                    onClose={handleClose}
                >
                    An error occurred: {putMutation.error.message}
                </Alert>}
            </Collapse>
        </>
    );
}

export default FeedbackAlert;