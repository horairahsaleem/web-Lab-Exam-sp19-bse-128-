// NewBookForm.js
import React, { useState } from 'react';

const NewBookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields (add more validation if needed)
    if (!title || !author || !genre || !year) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new book object
    const newBook = {
      title,
      author,
      genre,
      year,
    };

    // Call the parent component's callback to add the new book
    onAddBook(newBook);
   const onAddBook=()=>{
    return

   }

    // Clear form fields
    setTitle('');
    setAuthor('');
    setGenre('');
    setYear('');
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <br />
        <label>
          Genre:
          <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </label>
        <br />
        <label>
          Year:
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default NewBookForm;
