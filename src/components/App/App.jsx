import React, { Component } from 'react';
import NavPanel from '../NavPanel';
import BookList from '../BookList';
import { getInitialBooks, search, createBook, saveBooksToLS } from '../../helpers/books';
import { ModalWindow, ModalWindowInfo } from '../ModalWindow';
import './App.scss';

class App extends Component {
    state = {
        books: getInitialBooks(),
        selectFilter: 'all',
        searchBook: '',
        isOpenNewBookModal: false,
        isOpenInfoModal: false,
        currentBookId: null,
        currentBookTitle: ''
    }

    handleFilterChange = (selectFilter) => {
        this.setState({
            selectFilter
        });
    }

    getFilteredBook = (books, selectFilter) => {
        switch(selectFilter) { 
            case 'all':
                return books;
            case 'recent':
                return books.slice(0, 6);
            case 'popular':
                return books.filter(book => book.rating >= 4.5);
            case 'free':
                return books.filter(book => book.isFree === true)
            default:
                return books;
        }
    }

    handleChangeRating = (id, newRating) => {
        const books = [...this.state.books];
        const index = books.findIndex(b => b.id === id);
        const book = {...books[index]};
        book.rating = newRating;
        books[index] = book;
        this.setState({
            books
        });
        saveBooksToLS(books);
    }

    handleSearchChange = (searchBook) => {
        this.setState({
            searchBook
        })
    }

    handleAddBook = (img, title, author, publisher, paperback, isbn, summary, genre) => {
        const newBook = createBook(img, title, author, publisher, paperback, isbn, summary, genre);
        const books = [newBook, ...this.state.books];
        saveBooksToLS(books);
        this.setState({
            books,
            currentBookTitle: newBook.title
        });
    }

    handleClickBook = (id) => {
        this.setState({
            currentBookId: id,
            isOpenNewBookModal: true
        });
    }
    
    handleOpenModal = () => {
        this.setState({
            isOpenNewBookModal: true,
            currentBookId: null
        });
    }

    handleCloseModal = () => {
        this.setState({
            isOpenNewBookModal: false
        });
    }

    handleShowInfoModal = () => {
        this.setState({
            isOpenInfoModal: true,
        });
    }

    handleOpenInfoModal = () => {
        this.setState({
            isOpenInfoModal: true
        });
    }

    handleCloseInfoModal = () => {
        this.setState({
            isOpenInfoModal: false
        });
    }

    render() {
        const { books, currentBookId, selectFilter, searchBook, isOpenNewBookModal, isOpenInfoModal, currentBookTitle } = this.state;
        const visibleBooks = this.getFilteredBook(
            search(books, searchBook), selectFilter
        );
        const currentBook = books.find(b => b.id === currentBookId);
        return (
            <div className="wrapper">
                <div className='wrapper__sidebar'>
                    <div className="sidebar">
                        <button className="sidebar__button" onClick={this.handleOpenModal}>
                            <i className="fa fa-plus" /> ADD A BOOK
                        </button>
                    </div>
                    <div className="menu-buttons">
                        <ul className="menu-buttons__block">
                            <li className="menu-buttons__item">
                                <i className="menu-buttons__item-icon fa fa-book mr-2"></i>
                                Now Reading
                            </li>
                            <li className="menu-buttons__item--active">
                                <i className="menu-buttons__item-icon fa fa-globe mr-2"></i>
                                Browse
                            </li>
                            <li className="menu-buttons__item">
                                <i className="menu-buttons__item-icon fa fa-shopping-cart mr-2"></i>
                                Buy Books
                            </li>
                            <li className="menu-buttons__item">
                                <i className="menu-buttons__item-icon fa fa-star mr-2"></i>
                                Favourite Books
                            </li>
                            <li className="menu-buttons__item">
                                <i className="menu-buttons__item-icon fa fa-th-list mr-2"></i>
                                Wishlist
                            </li>
                        </ul>
                    </div>
                </div>
                {isOpenNewBookModal && (
                    <ModalWindow
                        onCloseModal={this.handleCloseModal}
                        addBook={this.handleAddBook}
                        isOpenNewBookModal={isOpenNewBookModal}
                        book={currentBook}
                        onOpenInfoModal={this.handleOpenInfoModal}
                    />
                )}
                {isOpenInfoModal && (
                    <ModalWindowInfo
                        isOpenInfoModal={isOpenInfoModal}
                        onCloseInfoModal={this.handleCloseInfoModal}
                        currentBookTitle={currentBookTitle}
                    />
                )}
                <div className='wrapper__container'>
                    <div className="header">
                        <h2 className="header__title">Browse Available Books</h2>
                        <NavPanel
                            getFilteredBook={selectFilter}
                            onFilterChange={this.handleFilterChange}
                            onSearchChange={this.handleSearchChange}
                        />
                    </div>
                    <div className="content">
                        <BookList
                            books={visibleBooks}
                            onChangeRating={this.handleChangeRating}
                            onClickBook={this.handleClickBook}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;