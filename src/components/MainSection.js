import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import FeedbackAlert from './FeedbackAlert';
import AddBookDialog from './AddBookDialog';
import BookTable from './BookTable';

const postBook = async (newBook) => {
    const response = await fetch('http://localhost:5000/books', {
        method: 'POST',
        body: JSON.stringify(newBook),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

function MainSection() {
    const queryClient = useQueryClient();
    const [open, setOpen] = useState(false);
    const mutation = useMutation(newBook => postBook(newBook), {
        onSuccess: () => {
            queryClient.invalidateQueries('books');
            setOpen(true);
        },
        onError: () => setOpen(true)
    });

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <main>
            <FeedbackAlert
                mutation={mutation}
                open={open}
                handleClose={handleClose}
            />
            <AddBookDialog mutation={mutation} />
            <BookTable />
        </main>
    );
}

export default MainSection;