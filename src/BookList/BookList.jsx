import React from 'react';
import BookItem from './../BookItem';
import './BookList.scss';

const BookList = ({ books, onChangeRating }) => {
    return (
        books.map(book => (
            <div className="book-list"
                key={book.id}
            >
                <BookItem
                    id={book.id}
                    logo={book.logo}
                    title={book.title}
                    author={book.author}
                    rating={book.rating}
                    onChangeRating={onChangeRating}
                />
            </div>
        ))
    );
}

export default BookList;