import React, { Fragment } from 'react'

function BookBody(props) {
  const {title, authors} = props;

  return (
    <Fragment>
      <p className="book-title mt-2 pt-2 mb-0" style={bookTitleOverflow}>{title || "Unknow title"}</p>
      <p className="my-0 text-muted" style={{lineHeight: "1em"}}>
        {authors.map(author =>(
          <span key={author} style={{fontSize: "12px"}}>{author }</span>
        ))}
      </p>
    </Fragment>
  );
}

const bookTitleOverflow = {
  fontSize: "14px",
  fontWeight: "bold",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

export default BookBody;