import React from 'react';

const VisibleInfoGeneral = ({bookData}) => {
    return (
        <div>
            <p className="visible-info__text"><span className="visible-info__label">Title:</span> {bookData.title}</p>
            <p className="visible-info__text"><span className="visible-info__label">Author:</span> {bookData.author}</p>
            <p className="visible-info__text"><span className="visible-info__label">Publisher:</span> {bookData.publisher}</p>
            <p className="visible-info__text"><span className="visible-info__label">Paperback:</span> {bookData.paperback}</p>
            <p className="visible-info__text"><span className="visible-info__label">ISBN:</span> {bookData.isbn}</p>
            <p className="visible-info__text"><span className="visible-info__label">Summary:</span> {bookData.summary}</p>
        </div>
    );
}
 
export default VisibleInfoGeneral;