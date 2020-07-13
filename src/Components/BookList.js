import React,{ useContext } from 'react'
import { BookContext } from '../Contexts/BookContext';
import BookDetails from './BookDetails';

function BookList() {
    const { books } = useContext(BookContext);
    const bookLi = books.map(book => {
        return (
            <BookDetails book={book} key={book.id} />
        )
    })
    return books.length ? (
        <div className="book-list">
            {bookLi}
        </div>
    ) : 
    (
        <div className="empty">No books to read</div>
    )
}

export default BookList
