import React, { Component } from 'react';
import './common/style.scss';
import book1 from './img/Image.png';
import book2 from './img/Image-1.png';
import book3 from './img/Image-2.png';
import book4 from './img/Image-3.png';
import book5 from './img/Image-4.png';
import book6 from './img/Image-5.png';
import book7 from './img/Image-6.png';
import book8 from './img/Image-7.png';
import book9 from './img/Image-8.png';
import book10 from './img/Image-9.png';

class App extends Component {
    render() { 
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
                        <div className="book">
                            <div className="book__logo">
                                <img src={book1} alt=""/>
                            </div>
                            <div className="book__title">Jewels of Nizam</div>
                            <div className="book__author">by Geeta Devi</div>
                        </div>
                        <div className="book">
                            <div className="book__logo">
                                <img src={book2} alt=""/>
                            </div>
                            <div className="book__title">Cakes & Bakes</div>
                            <div className="book__author">by Sanjeev Kapoor</div>
                        </div>
                        <div className="book">
                            <div className="book__logo">
                                <img src={book3} alt=""/>
                            </div>
                            <div className="book__title">Jamie’s Kitchen</div>
                            <div className="book__author">by Jamie Oliver</div>
                        </div>
                        <div className="book">
                            <div className="book__logo">
                                <img src={book4} alt=""/>
                            </div>
                            <div className="book__title">Inexpensive Family Meals</div>
                            <div className="book__author">by Simon Holst</div>
                        </div>
                        <div className="book">
                            <div className="book__logo">
                                <img src={book5} alt=""/>
                            </div>
                            <div className="book__title">Paleo Slow Cooking</div>
                            <div className="book__author">by Chrissy Gower</div>
                        </div>
                        <div className="book">
                            <div className="book__logo">
                                <img src={book6} alt=""/>
                            </div>
                            <div className="book__title">Cook Like an Italian</div>
                            <div className="book__author">by Tobie Puttock</div>
                        </div>
                        <div className="book">
                            <div className="book__logo">
                                <img src={book7} alt=""/>
                            </div>
                            <div className="book__title">Suneeta Vaswani</div>
                            <div className="book__author">by Geeta Devi</div>
                        </div>
                        <div className="book">
                            <div className="book__logo">
                                <img src={book8} alt=""/>
                            </div>
                            <div className="book__title">Jamie Does</div>
                            <div className="book__author">by Jamie Oliver</div>
                        </div>
                        <div className="book">
                            <div className="book__logo">
                                <img src={book9} alt=""/>
                            </div>
                            <div className="book__title">Jamie’s italy</div>
                            <div className="book__author">by Jamie Oliver</div>
                        </div>
                        <div className="book">
                            <div className="book__logo">
                                <img src={book10} alt=""/>
                            </div>
                            <div className="book__title">Vegetables Cookbook</div>
                            <div className="book__author">by Matthew Biggs</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;