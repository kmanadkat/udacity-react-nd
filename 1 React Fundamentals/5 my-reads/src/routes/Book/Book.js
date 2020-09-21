import React from 'react';
import BookIntro from './BookIntro';
import BookView from './BookView';
import * as BooksAPI from '../../utils/BooksAPI';


class Book extends React.Component {
  state = {book: null}

  componentDidMount(){
    const bookId = this.props.match.params.bookId;
    BooksAPI.get(bookId)
    .then(data => {
      this.setState({ book: data});
    });
  }
  
  render() {
    return(
      <section className="py-5 my-3">
        <div className="container">
          {this.state.book ? 
          (<div className="row">
              <BookView book={this.state.book} />
              <BookIntro book={this.state.book} />
          </div>) : 
          (<div className="text-center">
             <div className="spinner-grow text-primary" role="status"></div>
          </div>)}
        </div>
      </section>
    )
  }
}

export default Book;