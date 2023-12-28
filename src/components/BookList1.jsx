// BookList.js
import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

const Book = ({ book }) => {
  return (
    <li>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.year}</p>
      
    </li>
  );
};

export default BookList;
