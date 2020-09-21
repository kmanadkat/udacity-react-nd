import React from 'react';
import {Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './routes/Home/Home';
import Search from './routes/Search/Search';
import Book from './routes/Book/Book';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class App extends React.Component {
  state = {
    shelf_books : [],
    isLoading : true,
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then(data => {
      this.setState({shelf_books: data, isLoading: false});
    });
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(data => {
        let shelfBooks = this.state.shelf_books;
        const bookIndex = shelfBooks.findIndex(b => b.id === book.id);
        if(bookIndex !== -1){
          if(shelf === "none") shelfBooks.splice(bookIndex, 1);
          else shelfBooks[bookIndex].shelf = shelf;
          this.setState({shelf_books: shelfBooks});
        }else{
          BooksAPI.get(book.id)
          .then(data => {
            shelfBooks = [...shelfBooks, data];
            this.setState({shelf_books: shelfBooks});
          });
        }
      });
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render={()=>(
          <Home 
            shelf_books={this.state.shelf_books}
            isLoading={this.state.isLoading}
            updateBookShelf={this.updateBookShelf}
          />
        )} />
        <Route exact path="/search" render={()=>(
          <Search 
            shelf_books={this.state.shelf_books}
            updateBookShelf={this.updateBookShelf}
          />
        )} />
        <Route exact path="/book/:bookId" component={Book} />
      </div>
    );
  }
}

export default App;
