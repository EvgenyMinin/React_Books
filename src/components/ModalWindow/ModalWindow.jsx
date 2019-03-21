import React, { Component } from 'react';
import Joi from 'joi-browser';
import ReactModal from 'react-modal';
import book0 from '../../img/book0.png';
import './ModalWindow.scss';
import VisibleForm from './../VisibleForm/index';

class ModalWindow extends Component {

    state = {
        bookData: this.props.book || {
            title: '',
            author: '',
            publisher: '',
            paperback: '',
            isbn: '',
            summary: '',
            genre: '',
        },
        isOpenInfoModal: false,
        errors: {},
        selectedSidebar: 'general',
        isOpenNewBookModal: false
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
        isbn: Joi.number().min(9).label('ISBN').required(),
        summary: Joi.string().label('Summary').allow(''),
        genre: Joi.string().label('Genre').allow(''),
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
        this.props.addBook(book0, this.state.bookData.title, this.state.bookData.author, this.state.bookData.publisher, this.state.bookData.paperback, this.state.bookData.isbn, this.state.bookData.summary, this.state.bookData.genre);
        this.setState({
            errors: errors || {}
        });
        if (errors) return;
    }

    handleSidebarChange = (selectedSidebar) => {
        this.setState({
            selectedSidebar
        });
    }

    render() {
        const { bookData, errors, selectedSidebar } = this.state;
        const { onCloseModal, isOpenNewBookModal, onOpenInfoModal } = this.props;
        const click = (event) => {
            this.handleSubmit(event);
            onOpenInfoModal();
            onCloseModal();
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
                <ReactModal
                    isOpen={isOpenNewBookModal}
                    className="modal-window"
                    overlayClassName="modal-window__overlay"
                    ariaHideApp={false}
                >
                    <div className="modal-window__header">
                        <h2>Add New Books</h2>
                        <button className='modal-window__header--close fa fa-times' onClick={onCloseModal} />
                    </div>
                    <div className="modal-window__body">
                        <div className="modal-window__sidebar">
                            <div className="sidebar__nav">
                                {buttons}
                            </div>
                        </div>
                        <div className="modal-window__content">
                            <VisibleForm
                                selectedSidebar={selectedSidebar}
                                onChange={this.handleChange}
                                bookData={bookData}
                                errors={errors}
                            />
                        </div>
                    </div>
                    <div className="modal-window__footer">
                        <button className="modal-window__cancel-button" onClick={onCloseModal}>CANCEL</button>
                            {this.props.book
                                ? null
                                : <button className="modal-window__add-button" disabled={!!this.validate()} onClick={click} >ADD BOOK</button>
                            }
                    </div>
                </ReactModal>
            </React.Fragment>
        );
    }
}

export default ModalWindow;