import React, { Component } from 'react';
import BookItem from '../BookItem';
import book1 from '../img/Image.png';
import book2 from '../img/Image-1.png';
import book3 from '../img/Image-2.png';
import book4 from '../img/Image-3.png';
import book5 from '../img/Image-4.png';
import book6 from '../img/Image-5.png';
import book7 from '../img/Image-6.png';
import book8 from '../img/Image-7.png';
import book9 from '../img/Image-8.png';
import book10 from '../img/Image-9.png';
import './App.scss';

class App extends Component {

    maxId = 1;
    createBook = (logo, title, author) => {
        return {
            id: this.maxId++,
            logo,
            title,
            author,
            rating: 0
        }
    }

    state = {
        books: [
            this.createBook(book1, 'Jewels of Nizam', 'by Geeta Devi'),
            this.createBook(book2, 'Cakes & Bakes', 'by Sanjeev Kapoor'),
            this.createBook(book3, 'Jamie’s Kitchen', 'by Jamie Oliver'),
            this.createBook(book4, 'Inexpensive Family Meals', 'by Simon Holst'),
            this.createBook(book5, 'Paleo Slow Cooking', 'by Chrissy Gower'),
            this.createBook(book6, 'Cook Like an Italian', 'by Tobie Puttock'),
            this.createBook(book7, 'Suneeta Vaswani', 'by Geeta Devi'),
            this.createBook(book8, 'Jamie Does', 'by Jamie Oliver'),
            this.createBook(book9, 'Jamie’s italy', 'by Jamie Oliver'),
            this.createBook(book10, 'Vegetables Cookbook', 'by Matthew Biggs'),
        ]
    }
    render() {
        const books = this.state.books.map(book => (
            <div className="book" key={book.id} >
                <BookItem 
                    logo={book.logo}
                    title={book.title}
                    author={book.author}
                />
            </div>
        ));
        return (
            <div className="wrapper">
                <div className='wrapper__sidebar'>
                    <div className="sidebar">
                        <button className="sidebar__button">
                            + ADD A BOOK
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
                <div className='wrapper__container'>
                    <div className="header">
                        <h2 className="header__title">Browse Available Books</h2>
                        <div className="header__nav">
                            <div className="nav">
                                <ul className="nav__list">
                                    <li className="nav__item"><a style={{color: 'white', backgroundColor: '#97b3ce', borderRadius: '20px', padding:'5px 20px'}} href="#">All Books</a></li>
                                    <li className="nav__item"><a href="#">Most Recent</a></li>
                                    <li className="nav__item"><a href="#">Most Popular</a></li>
                                    <li className="nav__item"><a href="#">Free Books</a></li>
                                </ul>
                            </div>
                            <input className="header__nav--search" placeholder="Enter Keywords" />
                        </div>
                    </div>
                    <div className="content">
                        { books }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;