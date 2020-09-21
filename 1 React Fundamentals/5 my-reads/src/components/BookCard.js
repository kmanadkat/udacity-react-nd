import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import NoThumb from '../assets/imgs/noThumbnail.png';
import BookBody from './BookBody';
import BookThumbnail from './BookThumbnail';

function BookCard(props) {
  const {book, shelfType, handleUpdate} = props;
  const bookThumb = (book.imageLinks && book.imageLinks.smallThumbnail)|| NoThumb;
  book.authors = book.authors || [];
  return (
    <Fragment>
      <div className="book-card text-center position-relative">
        <BookThumbnail bookThumb={bookThumb} book={book} shelfType={shelfType} handleUpdate={handleUpdate}/>
        <BookBody title={book.title} authors={book.authors} />
      </div>
      <Link className="btn btn-link" to={`/book/${book.id}`}>Read more</Link>
    </Fragment>
  );
}

export default BookCard;