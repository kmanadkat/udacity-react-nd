import React from 'react';
import Shelf from './Shelf';

function Home(props) {
  const {shelf_books, isLoading, updateBookShelf} = props;
  return (
    <section className="pb-3 mb-5">
      <div className="container">
        <Shelf 
          books={shelf_books.filter(book => book.shelf === "currentlyReading")}
          isLoading={isLoading}
          shelfType="currentlyReading"
          handleUpdate={updateBookShelf} />
        <Shelf 
          books={shelf_books.filter(book => book.shelf === "wantToRead")}
          isLoading={isLoading}
          shelfType="wantToRead"
          handleUpdate={updateBookShelf} />
        <Shelf 
          books={shelf_books.filter(book => book.shelf === "read")}
          isLoading={isLoading}
          shelfType="read"
          handleUpdate={updateBookShelf} />
      </div>
    </section>
  )
}

export default Home
