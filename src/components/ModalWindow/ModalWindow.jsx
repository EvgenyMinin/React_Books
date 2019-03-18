import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import book0 from '../../img/book0.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalWindow.scss';

class ModalWindow extends Component {

    state = {
        bookData: {
            title: '',
            author: '',
            publisher: '',
            paperback: '',
            isbn: '',
            summary: ''
        },
        isOpenInfoModal: false,
        errors: {},
        selectedSidebar: 'general'
    };

    buttons = [
        { name: 'general', label: 'General', icon: 'fa fa-align-center mr-1' },
        { name: 'genre', label: 'Genre', icon: 'fa fa-tags mr-1' },
        { name: 'poster', label: 'Poster', icon: 'fa fa-image mr-1' },
        { name: 'info', label: 'Info', icon: 'fa fa-info-circle mr-1' },
    ];

    schema = {
        title: Joi.string().label('Title').required(),
        author: Joi.string().label('Author').required(),
        publisher: Joi.string().label('Publisher').required(),
        paperback: Joi.string().label('Paperback').allow(''),
        isbn: Joi.string().min(9).label('ISBN').required(),
        summary: Joi.string().label('Summary').allow(''),
    };

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.bookData, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    validateProperty = ({name, value}) => {
        const obj = { [name]:value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleChange = ({currentTarget: input}) => {

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) {
            errors[input.name] = errorMessage;
        } else {
            delete errors[input.name];
        }

        const bookData = {...this.state.bookData};

        bookData[input.name] = input.value;
        this.setState({
            bookData,
            errors
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        this.props.addBook(book0, this.state.bookData.title, this.state.bookData.author);
        this.setState({
            errors: errors || {}
        });
        if (errors) return;
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
                isbn: '',
                summary: ''
            },
            selectedSidebar: 'general'
        });
    }

    handleSidebarChange = (selectedSidebar) => {
        this.setState({
            selectedSidebar
        });
    }

    render() {
        const { isOpenInfoModal, bookData, errors, selectedSidebar } = this.state;
        const { isOpenModal, modal } = this.props;
        const click = (event) => {
            this.handleSubmit(event);
            this.handleShowInfoModal();
            modal();
        };
        const buttons = this.buttons.map(({name, label, icon}) => {
            const isActive = selectedSidebar === name;
            const className = isActive ? 'sidebar-active' : '';
            return (
                <button
                    key={name}
                    onClick={ () => this.handleSidebarChange(name)}
                    className={`sidebar__buttons ${className}`}
                >
                    <i className={icon}></i> {label}
                </button>
            )
        });
        return (
            <React.Fragment>
                <Modal className="modal-window" isOpen={isOpenModal} toggle={modal}>
                    <ModalHeader toggle={modal} className="modal-window__header">
                        <div className="modal-window__header">
                            Add New Books
                        </div>
                    </ModalHeader>
                    <ModalBody className="modal-window__body">
                        <div className="d-flex">
                            <div className="modal-window__sidebar">
                                <div className="sidebar__nav">
                                    {buttons}
                                </div>
                            </div>
                            <Form className="modal-window__form">
                                <FormGroup>
                                    <Label htmlFor="title" className="modal-window__label">Title<span style={{'color': 'red'}}>*</span></Label>
                                        <Input
                                            type="text"
                                            name="title"
                                            value={bookData.title}
                                            className="modal-window__input"
                                            placeholder="Enter Title"
                                            onChange={this.handleChange}
                                            error={errors.title}
                                        />
                                    {errors.title && <div className="alert alert-danger">{errors.title}</div>}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="author" className="modal-window__label">Author<span style={{'color': 'red'}}>*</span></Label>
                                        <Input
                                            type="text"
                                            name="author"
                                            value={bookData.author}
                                            className="modal-window__input"
                                            placeholder="Enter Author"
                                            onChange={this.handleChange}
                                        />
                                    {errors.author && <div className="alert alert-danger">{errors.author}</div>}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="publisher" className="modal-window__label">Publisher<span style={{'color': 'red'}}>*</span></Label>
                                        <Input
                                            type="text"
                                            name="publisher"
                                            value={bookData.publisher}
                                            className="modal-window__input"
                                            placeholder="Enter Publisher"
                                            onChange={this.handleChange}
                                        />
                                    {errors.publisher && <div className="alert alert-danger">{errors.publisher}</div>}
                                </FormGroup>
                                <div className="modal-window__items">
                                    <FormGroup>
                                        <Label htmlFor="paperback" className="modal-window__label">Paperback</Label>
                                            <Input
                                                type="text"
                                                name="paperback"
                                                value={bookData.paperback}
                                                className="modal-window__input"
                                                placeholder="Enter Paperback"
                                                onChange={this.handleChange}
                                            />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="isbn" className="modal-window__label">ISBN<span style={{'color': 'red'}}>*</span></Label>
                                            <Input
                                                type="text"
                                                name="isbn"
                                                value={bookData.isbn}
                                                className="modal-window__input"
                                                placeholder="Enter ISBN"
                                                onChange={this.handleChange}
                                            />
                                        {errors.isbn && <div className="alert alert-danger">{errors.isbn}</div>}
                                    </FormGroup>
                                </div>
                                <FormGroup>
                                    <Label htmlFor="summary" className="modal-window__label">Summary</Label>
                                        <Input
                                            type="text"
                                            name="summary"
                                            value={bookData.summary}
                                            className="modal-window__input"
                                            placeholder="Enter Summary"
                                            onChange={this.handleChange}
                                        />
                                </FormGroup>
                            </Form>
                        </div>
                    </ModalBody>
                    <ModalFooter className="modal-window__footer">
                        <Button className="modal-window__cancel-button" onClick={modal}>CANCEL</Button>
                        <Button className="modal-window__add-button" disabled={this.validate()} onClick={click} >ADD BOOK</Button>
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