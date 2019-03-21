import React from 'react';
import './GeneralForm.scss';

const GeneralForm = ({bookData, errors, onChange}) => {
    return (
        <form className="modal-window__form">
            <div className="modal-window__input-item">
                <p className="modal-window__label">Title<span style={{'color': 'red'}}>*</span></p>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={bookData.title}
                    className="modal-window__input"
                    placeholder="Enter Title"
                    onChange={onChange}
                    error={errors.title}
                />
            {errors.title && <div className="modal-window__error">{errors.title}</div>}
            </div>
            <div className="modal-window__input-item">
                <p className="modal-window__label">Author<span style={{'color': 'red'}}>*</span></p>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={bookData.author}
                    className="modal-window__input"
                    placeholder="Enter Author"
                    onChange={onChange}
                    error={errors.author}
                />
            {errors.author && <div className="modal-window__error">{errors.author}</div>}
            </div>
            <div className="modal-window__input-item">
                <p className="modal-window__label">Publisher<span style={{'color': 'red'}}>*</span></p>
                        <input
                            type="text"
                            id="publisher"
                            name="publisher"
                            value={bookData.publisher}
                            className="modal-window__input"
                            placeholder="Enter Publisher"
                            onChange={onChange}
                            error={errors.publisher}
                        />
                    {errors.publisher && <div className="modal-window__error">{errors.publisher}</div>}
            </div>
            <div className="modal-window__group">
                <div className="modal-window__input-item">
                    <p className="modal-window__label">Paperback</p>
                    <input
                        type="text"
                        id="paperback"
                        name="paperback"
                        value={bookData.paperback}
                        className="modal-window__input"
                        placeholder="Enter Paperback"
                        onChange={onChange}
                    />
                </div>
                <div className="modal-window__input-item">
                    <p className="modal-window__label">ISBN<span style={{'color': 'red'}}>*</span></p>
                    <input
                        type="text"
                        id="isbn"
                        name="isbn"
                        value={bookData.isbn}
                        className="modal-window__input"
                        placeholder="Enter ISBN"
                        onChange={onChange}
                        error={errors.isbn}
                        style={{'width':'94%'}}
                    />
                {errors.isbn && <div className="modal-window__error">{errors.isbn}</div>}
                </div>
            </div>
            <div className="modal-window__input-item">
                    <p className="modal-window__label">Summary</p>
                    <input
                        type="text"
                        id="summary"
                        name="summary"
                        value={bookData.summary}
                        className="modal-window__input"
                        placeholder="Enter Summary"
                        onChange={onChange}
                    />
            </div>
        </form>
    );
}
 
export default GeneralForm;