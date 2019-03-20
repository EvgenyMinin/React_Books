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

let maxId = 1;

const createBook = (logo, title, author, publisher = "", paperback = "", isbn = "", summary ="", genre = "", isFree = false) => {
    return {
        id: maxId++,
        logo,
        title,
        author,
        publisher,
        paperback,
        isbn,
        summary,
        genre,
        isFree,
        rating: 0
    }
}

const initialBooks = [
    createBook(book1, 'Jewels of Nizam', 'by Geeta Devi', 'Rupa publications', 'paperback', '9788129124364', 'good book', 'Cookery, Food & Nutrition', true),
    createBook(book2, 'Cakes & Bakes', 'by Sanjeev Kapoor'),
    createBook(book3, 'Jamie’s Kitchen', 'by Jamie Oliver'),
    createBook(book4, 'Inexpensive Family Meals', 'by Simon Holst'),
    createBook(book5, 'Paleo Slow Cooking', 'by Chrissy Gower'),
    createBook(book6, 'Cook Like an Italian', 'by Tobie Puttock'),
    createBook(book7, 'Suneeta Vaswani', 'by Geeta Devi'),
    createBook(book8, 'Jamie Does', 'by Jamie Oliver'),
    createBook(book9, 'Jamie’s italy', 'by Jamie Oliver'),
    createBook(book10, 'Vegetables Cookbook', 'by Matthew Biggs'),
];

const saveBooksToLS = (books) => localStorage.setItem("books", JSON.stringify(books));

const getBooksFromLS = () => JSON.parse(localStorage.getItem("books"));
;

const getInitialBooks = () => {
    const books = getBooksFromLS();
    return books ? books : initialBooks;
};

const search = (books, searchBook) => {
    if (searchBook.length === 0) return books;
    return books.filter( b => b.title
        .toLowerCase()
        .indexOf(searchBook.toLowerCase()) > -1
    );
};

export {
    createBook,
    saveBooksToLS,
    getInitialBooks,
    search
};