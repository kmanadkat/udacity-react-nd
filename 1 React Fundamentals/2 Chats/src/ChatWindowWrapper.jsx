import React from 'react'
import ChatWindow from './ChatWindow'

class ChatWindowWrapper extends React.Component{
  state = {
    users : [{ username: 'Amy' }, { username: 'John' }],
    messages : [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }
  addNewMessage = (message) => {
    this.setState((prevState) => ({
      messages : [...prevState.messages, message]
    }))
  }
  render() {
    return (
      <div className="container">
        <ChatWindow user={this.state.users[0]} messages={this.state.messages} addNewMessage={this.addNewMessage}/>
        <ChatWindow user={this.state.users[1]} messages={this.state.messages} addNewMessage={this.addNewMessage}/>        
      </div>
    );
  }
}

export default ChatWindowWrapper;