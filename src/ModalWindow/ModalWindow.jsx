import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import book0 from '../img/book0.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalWindow.scss';

class ModalWindow extends Component {

    state = {
        bookData: {
            title: '',
            author: '',
            publisher: '',
            paperback: '',
            ISBN: '',
            summary: ''
        },
        isOpenInfoModal: false,
        errors: {}
    };

    handleChange = ({currentTarget: input}) => {

        const bookData = {...this.state.bookData};

        bookData[input.id] = input.value;
        this.setState({
            bookData
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addBook(book0, this.state.bookData.title, this.state.bookData.author);
    }

    handleShowInfoModal = () => {
        this.setState({
            isOpenInfoModal: true,
        });
    }

    handleHideInfoModal = () => {
        this.setState({
            isOpenInfoModal: false,
            bookData: {
                title: '',
                author: '',
                publisher: '',
                paperback: '',
                ISBN: '',
                summary: ''
            },
        });
    }

    render() {
        const { isOpenInfoModal, bookData } = this.state;
        const { isOpenModal, modal } = this.props;
        const click = (event) => {
            this.handleSubmit(event);
            this.handleShowInfoModal();
            modal();
        }
        return (
            <React.Fragment>
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
                                        onChange={this.handleChange}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="author" className="modal-window__label">Author<span style={{'color': 'red'}}>*</span></Label>
                                    <Input
                                        type="text"
                                        id="author"
                                        className="modal-window__input"
                                        placeholder="Enter Author"
                                        onChange={this.handleChange}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="publisher" className="modal-window__label">Publisher<span style={{'color': 'red'}}>*</span></Label>
                                    <Input
                                        type="text"
                                        id="publisher"
                                        className="modal-window__input"
                                        placeholder="Enter Publisher"
                                        onChange={this.handleChange}
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
                                            onChange={this.handleChange}
                                        />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="isbn" className="modal-window__label">ISBN<span style={{'color': 'red'}}>*</span></Label>
                                        <Input
                                            type="text"
                                            id="isbn"
                                            className="modal-window__input"
                                            placeholder="Enter ISBN"
                                            onChange={this.handleChange}
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
                                        onChange={this.handleChange}
                                    />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="modal-window__footer">
                        <Button className="modal-window__cancel-button" onClick={modal}>CANCEL</Button>
                        <Button className="modal-window__add-button"  onClick={click}>ADD BOOK</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={isOpenInfoModal} toggle={this.handleShowInfoModal}>
                    <ModalBody className="app__modalBody">
                        The book "{bookData.title}" successfully added
                    </ModalBody>
                    <ModalFooter className="modal-window__footer">
                        <Button className="modal-window__add-button" onClick={this.handleHideInfoModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ModalWindow;