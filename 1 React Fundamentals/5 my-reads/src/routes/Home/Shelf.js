import React, {Fragment} from 'react';
import BookCard from '../../components/BookCard'
import ShelfTitle from './ShelfTitle';

function ShelfBook(props) {
  const {books, shelfType, handleUpdate, isLoading} = props;

  return (
    <Fragment>
      <ShelfTitle isLoading={isLoading} shelfType={shelfType}/>
      <div className="row">
        {books.map(book => (
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 mt-4 pt-2 d-flex flex-column justify-content-between" key={book.id}>
            <BookCard book={book} handleUpdate={handleUpdate} shelfType={book.shelf} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default ShelfBook;