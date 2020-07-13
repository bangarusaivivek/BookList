import React,{ createContext, useState, useReducer } from 'react'
import uuid from 'uuid/dist/v1';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

function BookContextProvider(props) {
    // const [books,dispatch] = useReducer(bookReducer,[]);


    const [books, setBooks] = useState([])
    const addBook = (title, author) => {
        setBooks([...books,{title: title,author: author,id: uuid()}])
    }
    const removeBook = (id) => {
        const remainedBooks = books.filter((book)=> book.id !== id)
        setBooks(remainedBooks);
    }
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
