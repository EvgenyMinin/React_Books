import React from 'react';
import ReactStars from 'react-stars';
import './BookItem.scss';

const BookItem = ({
    id,
    logo,
    title,
    author,
    rating,
    onChangeRating
    }) => {
    return (
        <div className="book-item">
            <div className="book-item__logo">
                <img src={logo} alt=""/>
            </div>
            <div className="book-item__title">{title}</div>
            <div className="book-item__author">{author}</div>
            <div className="book-item__rating">
                <ReactStars
                    value={rating}
                    count={5}
                    color2={"#ffb009"}
                    onChange={ (newRating) => onChangeRating(id, newRating)}
                    numberOfStars={5}
                    name={title}
                />
            </div>
        </div>
    );
}
 
export default BookItem;