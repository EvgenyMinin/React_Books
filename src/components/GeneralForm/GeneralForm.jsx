import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './GeneralForm.scss';

const GeneralForm = ({bookData, errors, onChange}) => {
    return (
        <Form className="modal-window__form">
            <FormGroup>
                <Label htmlFor="title" className="modal-window__label">Title<span style={{'color': 'red'}}>*</span></Label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        value={bookData.title}
                        className="modal-window__input"
                        placeholder="Enter Title"
                        onChange={onChange}
                        error={errors.title}
                    />
                {errors.title && <div className="alert alert-danger">{errors.title}</div>}
            </FormGroup>
            <FormGroup>
                <Label htmlFor="author" className="modal-window__label">Author<span style={{'color': 'red'}}>*</span></Label>
                    <Input
                        type="text"
                        id="author"
                        name="author"
                        value={bookData.author}
                        className="modal-window__input"
                        placeholder="Enter Author"
                        onChange={onChange}
                    />
                {errors.author && <div className="alert alert-danger">{errors.author}</div>}
            </FormGroup>
            <FormGroup>
                <Label htmlFor="publisher" className="modal-window__label">Publisher<span style={{'color': 'red'}}>*</span></Label>
                    <Input
                        type="text"
                        id="publisher"
                        name="publisher"
                        value={bookData.publisher}
                        className="modal-window__input"
                        placeholder="Enter Publisher"
                        onChange={onChange}
                    />
                {errors.publisher && <div className="alert alert-danger">{errors.publisher}</div>}
            </FormGroup>
            <div className="modal-window__items">
                <FormGroup>
                    <Label htmlFor="paperback" className="modal-window__label">Paperback</Label>
                        <Input
                            type="text"
                            id="paperback"
                            name="paperback"
                            value={bookData.paperback}
                            className="modal-window__input"
                            placeholder="Enter Paperback"
                            onChange={onChange}
                        />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="isbn" className="modal-window__label">ISBN<span style={{'color': 'red'}}>*</span></Label>
                        <Input
                            type="text"
                            id="isbn"
                            name="isbn"
                            value={bookData.isbn}
                            className="modal-window__input"
                            placeholder="Enter ISBN"
                            onChange={onChange}
                        />
                    {errors.isbn && <div className="alert alert-danger">{errors.isbn}</div>}
                </FormGroup>
            </div>
            <FormGroup>
                <Label htmlFor="summary" className="modal-window__label">Summary</Label>
                    <Input
                        type="text"
                        id="summary"
                        name="summary"
                        value={bookData.summary}
                        className="modal-window__input"
                        placeholder="Enter Summary"
                        onChange={onChange}
                    />
            </FormGroup>
        </Form>
    );
}
 
export default GeneralForm;