import React from 'react';
import Spinner from '../../components/Spinner';

function ShelfTitle(props) {
  const shelfTitle = {
    currentlyReading : "📖 Currently Reading Books",
    wantToRead : "📚 Books To Read",
    read : "📦 Completed Reading Books"
  };
  const {shelfType, isLoading} = props;
  return (
    <div className="shadow-sm border bg-light rounded mt-5 py-2 d-flex justify-content-between align-items-center">
      <p className="my-0 pl-4 py-2 font-weight-bold">{shelfTitle[shelfType]}</p>
      {isLoading && <Spinner spinType="success" otherClasses="mr-3" />}
    </div>
  );
}

export default ShelfTitle;