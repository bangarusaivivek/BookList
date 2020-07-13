import React,{ createContext, useState, useReducer, useEffect } from 'react'
import uuid from 'uuid/dist/v1';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

function BookContextProvider(props) {
    // const [books,dispatch] = useReducer(bookReducer,[]);


    const [books, setBooks] = useState(()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []
    })
    const addBook = (title, author) => {
        setBooks([...books,{title: title,author: author,id: uuid()}])
    }
    const removeBook = (id) => {
        const remainedBooks = books.filter((book)=> book.id !== id)
        setBooks(remainedBooks);
    }
    useEffect(() => {
        localStorage.setItem('books',JSON.stringify(books))
    },[books]);

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
