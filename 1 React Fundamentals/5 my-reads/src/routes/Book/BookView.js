import React from 'react';
import StarRatings from 'react-star-ratings';
import NoThumb from '../../assets/imgs/noThumbnail.png';

function BookView(props) {
  const {book} = props;
  const bookTitle = book.title || 'Unknow Title';
  const bookThumb = (book.imageLinks && book.imageLinks.smallThumbnail)|| NoThumb;
  return (
    <div className="col-md-4">
      <img className="d-block rounded mb-3 shadow-sm" src={bookThumb} width="65%" alt={bookTitle}/>
      <StarRatings
        rating={book.averageRating}
        starRatedColor="green"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="2px"
        name='rating'
      />
      <p className="mt-2 pt-2 mb-0">Pages : <span className="font-weight-bold">{book.pageCount || '-'}</span></p>
      {<p className="mt-0 pt-2 mb-0">Year : <span className="font-weight-bold">{book.publishedDate || '-'}</span></p>}
      {book.publisher && <p className="mt-0 pt-2">By {book.publisher}</p>}
      <div className="mt-3">
        {book.infoLink && <a className="btn btn-sm btn-outline-info px-3" rel="noopener noreferrer" href={book.infoLink} target="_blank">View Info</a>}
        {book.previewLink && <a className="btn btn-sm btn-outline-success px-3 ml-3" rel="noopener noreferrer" href={book.previewLink} target="_blank">Book Preview</a>}
      </div>
    </div>
  );
}

export default BookView;