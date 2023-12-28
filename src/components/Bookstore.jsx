// IndividualBookStore.js
import React from 'react';

const Bookstore = ({ book }) => {
  // Check if book is undefined or null
  if (!book) {
    return <p>Loading...</p>;
  }

  // Now, you can safely access book properties
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      {/* Other book details */}
    </div>
  );
};

export default Bookstore;

