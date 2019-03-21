import React from 'react';
import './GenreForm.scss';

const GenreForm = ({bookData, onChange}) => {
    return (
        <form className="modal-window__form">
            <div className="modal-window__input-item">
                    <p className="modal-window__label">Genre</p>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={bookData.genre}
                        className="modal-window__input"
                        placeholder="Enter Genre"
                        onChange={onChange}
                    />
            </div>
        </form>
    );
}
 
export default GenreForm;