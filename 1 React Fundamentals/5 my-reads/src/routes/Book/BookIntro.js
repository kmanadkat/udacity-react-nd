import React from 'react'

function BookIntro(props) {
  const {book} = props;
  const bookTitle = book.title || 'Unknow Title';
  book.authors = book.authors || [];
  return (
    <div className="col-md-8">
      <h3>{bookTitle}</h3>
      <p>{book.subtitle}</p>
      <p className="text-muted">
        {book.authors.map((author, index) =>(
          <span key={index}>{index !== 0 && ','} {author}</span>
        ))}
      </p>
      <hr/>
      <p>{book.description}</p>
    </div>
  );
}

export default BookIntro;