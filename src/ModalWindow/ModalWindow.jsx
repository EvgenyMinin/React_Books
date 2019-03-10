import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalWindow.scss';

const ModalWindow = ({
    isOpenModal,
    modal,
    onSubmit,
    onChange,
    openInfoModal
}) => {
    const click = (e) => {
        onSubmit(e);
        modal();
        openInfoModal();
    }
    return (
        <Modal isOpen={isOpenModal} toggle={modal}>
            <ModalHeader toggle={modal} className="modal-window__header">
                <div className="modal-window__header">
                    Add New Books
                </div>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label htmlFor="title" className="modal-window__label">Title<span style={{'color': 'red'}}>*</span></Label>
                            <Input
                                type="text"
                                id="title"
                                className="modal-window__input"
                                placeholder="Enter Title"
                                onChange={onChange}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="author" className="modal-window__label">Author<span style={{'color': 'red'}}>*</span></Label>
                            <Input
                                type="text"
                                id="author"
                                className="modal-window__input"
                                placeholder="Enter Author"
                                onChange={onChange}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="publisher" className="modal-window__label">Publisher<span style={{'color': 'red'}}>*</span></Label>
                            <Input
                                type="text"
                                id="publisher"
                                className="modal-window__input"
                                placeholder="Enter Publisher"
                                onChange={onChange}
                            />
                    </FormGroup>
                    <div className="modal-window__items">
                        <FormGroup>
                            <Label htmlFor="paperback" className="modal-window__label">Paperback</Label>
                                <Input
                                    type="text"
                                    id="paperback"
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
                                    className="modal-window__input"
                                    placeholder="Enter ISBN"
                                    onChange={onChange}
                                />
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <Label htmlFor="summary" className="modal-window__label">Summary<span style={{'color': 'red'}}>*</span></Label>
                            <Input
                                type="text"
                                id="summary"
                                className="modal-window__input"
                                placeholder="Enter Summary"
                                onChange={onChange}
                            />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter className="modal-window__footer">
                <Button className="modal-window__cancel-button" onClick={modal}>CANCEL</Button>{' '}
                <Button className="modal-window__add-button"  onClick={click}>ADD BOOK</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalWindow;