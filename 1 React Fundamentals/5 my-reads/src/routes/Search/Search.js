import React from 'react';
import * as BooksAPI from '../../utils/BooksAPI';
import SearchInput from './SearchInput';
import Spinner from '../../components/Spinner';
import SearchBooks from './SearchBooks';

class Search extends React.Component{
  state = {
    searchBooks : [],
    isLoading : false,
  }

  addShelfToBooks = (searchBooks) => {
    const {shelf_books} = this.props;
    const shelfAddedBooks = searchBooks.map(searchedBook =>{
      for (let i = 0; i < shelf_books.length; i++) {
        if(searchedBook.id === shelf_books[i].id) {
          searchedBook.shelf = shelf_books[i].shelf;
          return searchedBook;
        }
      }
      searchedBook.shelf = "none";
      return searchedBook;
    });
    return shelfAddedBooks;
  }

  getSearchedBooks = (searchString) => {
    this.setState({isLoading: true}, () => {
      if(searchString.trim() !== ''){
        BooksAPI.search(searchString.trim())
        .then(data => {
          if (!data.error)
          this.setState({ searchBooks : data, isLoading: false});
          else
          this.setState({searchBooks: [], isLoading: false});
        });
      }else{
        this.setState({searchBooks: [], isLoading: false});
      }
    });
  }

  render(){
    const {updateBookShelf} = this.props;
    const shelfAddedBooks = this.addShelfToBooks(this.state.searchBooks);
    return (
      <section className="pb-3 my-5">
        <div className="container">
          <SearchInput getSearchedBooks={this.getSearchedBooks}  />
          {this.state.isLoading
          ? <div className="text-center"><Spinner spinType="primary" /></div>
          : <div className="row"><SearchBooks books={shelfAddedBooks} updateBookShelf={updateBookShelf}/></div>}
        </div>
      </section>
    )
  }
}

export default Search
