import React, { Component } from 'react';
import NavPanel from '../NavPanel';
import BookList from '../BookList';
import ModalWindow from '../ModalWindow/ModalWindow';
import { getInitialBooks, search, createBook, saveBooksToLS } from '../../helpers/books';
import './App.scss';

class App extends Component {
    state = {
        books: getInitialBooks(),
        selectFilter: 'all',
        searchBook: '',
        isOpenNewBookModal: false,
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

    handleShowNewBookModal = () => {
        this.setState({
            isOpenNewBookModal: !this.state.isOpenNewBookModal
        });
    }

    handleAddBook = (img, title, author) => {
        const newBook = createBook(img, title, author);
        const books = [newBook, ...this.state.books];
        console.log(books);
        saveBooksToLS(books);
        this.setState({
            books
        });
    }

    render() {
        const { books, selectFilter, searchBook, isOpenNewBookModal } = this.state;
        const visibleBooks = this.getFilteredBook(
            search(books, searchBook), selectFilter
        );
        return (
            <div className="wrapper">
                <div className='wrapper__sidebar'>
                    <div className="sidebar">
                        <button className="sidebar__button" onClick={this.handleShowNewBookModal}>
                            <i className="fa fa-plus" /> ADD A BOOK
                        </button>
                    </div>
                    <div className="menu-buttons">
                        <ul className="menu-buttons__block">
                            <li className="menu-buttons__item">Now Reading</li>
                            <li className="menu-buttons__item--active">Browse</li>
                            <li className="menu-buttons__item">Buy Books</li>
                            <li className="menu-buttons__item">Favourite Books</li>
                            <li className="menu-buttons__item">Wishlist</li>
                        </ul>
                    </div>
                </div>
                <ModalWindow
                    isOpenModal={isOpenNewBookModal}
                    modal={this.handleShowNewBookModal}
                    addBook={this.handleAddBook}
                />
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
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;