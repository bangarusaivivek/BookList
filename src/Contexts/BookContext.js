import React,{ createContext, useState } from 'react'
import uuid from 'uuid/dist/v1';

export const BookContext = createContext();

function BookContextProvider(props) {
    const [books, setBooks] = useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2},
    ])
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
