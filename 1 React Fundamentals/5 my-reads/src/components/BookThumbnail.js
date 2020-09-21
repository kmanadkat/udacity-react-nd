import React from 'react';
import BookMenu from './BookMenu';

function BookThumbnail(props) {
  const {bookThumb, shelfType, handleUpdate, book} = props;
  return (
    <div className="wrapper position-relative">
      <div className="book-image mx-auto image-shadow"
        style={{
          backgroundImage : 'url(' + bookThumb  +')', 
          ...bookImage}}>
      </div>
      <div className="dropdown" style={floatingButton}>
        <button className={`btn btn-${shelfType!== 'none' ? 'success' : 'primary'}`} style={roundButton} id="dropdownMenuButton" data-toggle="dropdown">
          <span className="font-weight-bold" style={{position: "relative", bottom: "5px", right: "1px"}}>...</span>
        </button>
        <BookMenu bookId={book.id} shelfType={shelfType} handleUpdate={handleUpdate} />
      </div>
    </div>
  );
}

const bookImage = {
  height : "200px",
  width : "150px",
  backgroundSize : "cover",
  backgroundRepeat : "no-repeat",
  backgroundPositionY : "top",
  backgroundPositionX : "center"
};

const floatingButton = {
  position : "absolute",
  top: "-12px",
  right: "-4%",
};

const roundButton = {
  height: "40px",
  width: "40px",
  borderRadius: "50%",
};

export default BookThumbnail;