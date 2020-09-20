import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ""
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value.trim()})
  }

  resetInput = event => {
    this.setState({ query: "" });
  }

  render() {
    const {contacts, onDeleteContact} = this.props;
    const {query} = this.state;

    // const showingContacts = contacts.filter(c => c.name.indexOf(query) !== -1);
    const showingContacts = query === '' 
      ? contacts 
      : contacts.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input 
            type="text"
            className="search-contacts"
            placeholder="Search Contacts"
            value={query}
            onChange={this.handleInputChange}
          />
          <Link to="/create" className="add-contact">Add Contact</Link>
        </div>

        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length}</span>
            <button onClick={this.resetInput}>Show all</button>
          </div>
        )}

        <ol className="contact-list">
          {showingContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatarURL})`}}></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button className="contact-remove" onClick={() => onDeleteContact(contact)}>Remove</button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;