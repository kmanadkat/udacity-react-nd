import React from 'react'

function BookMenu(props){
  const {bookId, shelfType, handleUpdate,} = props;
  return (
    <div className="dropdown-menu">
      <button 
        className={`dropdown-item ${shelfType === "currentlyReading" && 'disabled'}`}
        onClick={() => handleUpdate({id: bookId}, "currentlyReading")}
        >Start reading
      </button>
      <button 
        className={`dropdown-item ${shelfType === "wantToRead" && 'disabled'}`}
        onClick={() => handleUpdate({id: bookId}, "wantToRead")}
        >Save for later
      </button>
      <button 
        className={`dropdown-item ${shelfType === "read" && 'disabled'}`}
        onClick={() => handleUpdate({id: bookId}, "read")}
        >Mark completed
      </button>
      <button 
        className={`dropdown-item ${shelfType === "none" && 'disabled'}`}
        onClick={() => handleUpdate({id: bookId}, "none")}
        >Remove from shelf
      </button>
    </div>
  );
}

export default BookMenu;