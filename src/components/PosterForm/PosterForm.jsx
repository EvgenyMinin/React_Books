import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './PosterForm';

const PosterForm = ({bookData, onChange}) => {
    return (
        <Form className="modal-window__form">
            <FormGroup>
                <Label className="modal-window__label">Select poster</Label>
                    <Input
                        type="file"
                        name="poster"
                        value={bookData.image}
                        className="modal-window__input"
                        onChange={onChange}
                    />
            </FormGroup>
        </Form>
    );
}
 
export default PosterForm;