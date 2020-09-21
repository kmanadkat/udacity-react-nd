import React, { Fragment } from 'react';
import BookCard from '../../components/BookCard';

function SearchBooks(props) {
  const {books, updateBookShelf} = props;
  return (
    <Fragment >
      {books.map(book => (
        <div className="col-xl-2 col-lg-3 col-md-4 col-6 mt-4 pt-2 d-flex flex-column justify-content-between" key={book.id}>
          <BookCard
            book={book}
            handleUpdate={updateBookShelf}
            shelfType={book.shelf} />
        </div>
      ))}
    </Fragment>
  );
}

export default SearchBooks;
