import React, { Component } from 'react';
import CreateContact from './CreateContact';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import {Route} from 'react-router-dom'

class App extends Component {
  state = {
    contacts : [],
  };

  componentDidMount(){
    ContactsAPI.getAll()
      .then(data => {
        this.setState(() => ({ contacts : data }));
      })
  }

  removeContact = (contact) => {
    this.setState((currentState)=> ({
      contacts : currentState.contacts.filter(c => c.id !== contact.id),
    }));
    ContactsAPI.remove(contact);
  }

  createContact = (contact) =>{
    ContactsAPI.create(contact)
      .then((contact)=> {
        this.setState((prevState)=> (
          { contacts : [...prevState.contacts, contact] }
        ))
      })
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact}/>
        )} />
        <Route path="/create" render={({history}) => (
          <CreateContact onCreateContact={(contact) => {
            this.createContact(contact);
            history.push('/');
          }}/>
        )} />
      </div>
    );
  }
}

export default App;
