import React, { Component } from 'react';
import book1 from '../../img/Image.png';
import book2 from '../../img/Image-1.png';
import book3 from '../../img/Image-2.png';
import book4 from '../../img/Image-3.png';
import book5 from '../../img/Image-4.png';
import book6 from '../../img/Image-5.png';
import book7 from '../../img/Image-6.png';
import book8 from '../../img/Image-7.png';
import book9 from '../../img/Image-8.png';
import book10 from '../../img/Image-9.png';
import NavPanel from '../NavPanel';
import BookList from '../BookList';
import ModalWindow from '../ModalWindow/ModalWindow';
import './App.scss';

class App extends Component {

    maxId = 1;
    createBook = (logo, title, author, isFree = false) => {
        return {
            id: this.maxId++,
            logo,
            title,
            author,
            isFree,
            rating: 0
        }
    }

    state = {
        books: [
            this.createBook(book1, 'Jewels of Nizam', 'by Geeta Devi', true),
            this.createBook(book2, 'Cakes & Bakes', 'by Sanjeev Kapoor'),
            this.createBook(book3, 'Jamie’s Kitchen', 'by Jamie Oliver'),
            this.createBook(book4, 'Inexpensive Family Meals', 'by Simon Holst'),
            this.createBook(book5, 'Paleo Slow Cooking', 'by Chrissy Gower'),
            this.createBook(book6, 'Cook Like an Italian', 'by Tobie Puttock'),
            this.createBook(book7, 'Suneeta Vaswani', 'by Geeta Devi'),
            this.createBook(book8, 'Jamie Does', 'by Jamie Oliver'),
            this.createBook(book9, 'Jamie’s italy', 'by Jamie Oliver'),
            this.createBook(book10, 'Vegetables Cookbook', 'by Matthew Biggs'),
        ],
        selectFilter: 'all',
        searchBook: '',
        isOpenNewBookModal: false,
    }

    search = (books, searchBook) => {
        if (searchBook.length === 0) return books;
        return books.filter( b => b.title
            .toLowerCase()
            .indexOf(searchBook.toLowerCase()) > -1
        );
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
        const newBook = this.createBook(img, title, author);
        this.setState(({books}) => {
            const newBooksArray = [
                newBook,
                ...books
            ];
            return {
                books: newBooksArray,
            }
        });
    }

    render() {
        const { books, selectFilter, searchBook, isOpenNewBookModal } = this.state;
        const visibleBooks = this.getFilteredBook(
            this.search(books, searchBook), selectFilter
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