import React from 'react'

class ChatWindow extends React.Component {
  state = {
    inputMessage: ''
  }

  handleInputChange = (event) => {
    this.setState({inputMessage: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {user, addNewMessage} = this.props;
    addNewMessage({
      username: user.username,
      text: this.state.inputMessage
    });
    this.setState({inputMessage: ''});
  }

  render() {
    const {user, messages} = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <ul className="message-list">
          {messages.map((message, index) => (
            <li key={index} className={message.username === user.username ? 'message sender' : 'message recipient'}>
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>
        <div>
          <form className="input-group" onSubmit={this.handleSubmit}>
            <input 
              type="text"
              className="form-control"
              placeholder="Enter your message..."
              value={this.state.inputMessage}
              onChange={this.handleInputChange}
              required />
            <div className="input-group-append">
              <button className="btn submit-button">SEND</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ChatWindow;