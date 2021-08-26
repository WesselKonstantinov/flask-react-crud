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

const putBook = async (editedBook) => {
    const response = await fetch(`http://localhost:5000/books/${editedBook.id}`, {
        method: 'PUT',
        body: JSON.stringify(editedBook),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

const deleteBook = async (book) => {
    await fetch(`http://localhost:5000/books/${book.id}`, {
        method: 'DELETE',
    });
};

function MainSection() {
    const queryClient = useQueryClient();
    const [open, setOpen] = useState(false);
    const postMutation = useMutation(newBook => postBook(newBook), {
        onSuccess: () => {
            queryClient.invalidateQueries('books');
            setOpen(true);
        },
        onError: () => setOpen(true)
    });

    const putMutation = useMutation(editedBook => putBook(editedBook), {
        onSuccess: () => {
            queryClient.invalidateQueries('books');
            setOpen(true);
        },
        onError: () => setOpen(true)
    });

    const deleteMutation = useMutation(book => deleteBook(book), {
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
                postMutation={postMutation}
                putMutation={putMutation}
                deleteMutation={deleteMutation}
                open={open}
                handleClose={handleClose}
            />
            <AddBookDialog postMutation={postMutation} />
            <BookTable
                putMutation={putMutation}
                deleteMutation={deleteMutation}
            />
        </main>
    );
}

export default MainSection;