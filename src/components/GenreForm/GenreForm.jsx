import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './GenreForm.scss';

const GenreForm = ({bookData, onChange}) => {
    return (
        <Form className="modal-window__form">
            <FormGroup>
                <Label htmlFor="genre" className="modal-window__label">Genre</Label>
                    <Input
                        type="text"
                        name="genre"
                        value={bookData.genre}
                        className="modal-window__input"
                        placeholder="Enter Genre"
                        onChange={onChange}
                    />
            </FormGroup>
        </Form>
    );
}
 
export default GenreForm;