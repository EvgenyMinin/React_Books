import React from 'react';
import './BookItem.scss';

const BookItem = ({
    logo,
    title,
    author
    }) => {
    return (
        <div className="book-item">
            <div className="book-item__logo">
                <img src={logo} alt=""/>
            </div>
            <div className="book-item__title">{title}</div>
            <div className="book-item__author">{author}</div>
        </div>
    );
}
 
export default BookItem;