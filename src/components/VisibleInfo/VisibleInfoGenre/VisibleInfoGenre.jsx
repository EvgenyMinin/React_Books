import React from 'react';

const VisibleInfoGenre = ({bookData}) => {
    return (
        <div>
            <p className="visible-info__text"><span className="visible-info__label">Genre:</span> {bookData.genre}</p>
        </div>
    );
}
 
export default VisibleInfoGenre;