import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {handleAddTweet} from '../actions/tweets'

class NewTweet extends Component {
  state = {
    text: '',
    toHome: false
  }

  handleChange = (e) =>{
    const text = e.target.value;
    this.setState(()=> ({
      text: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {text} = this.state
    const {dispatch, id} = this.props;

    dispatch(handleAddTweet(text, id))

    this.setState({text : '', toHome: id ? false : true})
  }

  render() {
    const tweetLeft = 280 - this.state.text.length

    if(this.state.toHome === true){
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form onSubmit={this.handleSubmit} className="new-tweet">
          <textarea 
          className="textarea"
          placeholder="What's happening?"
          value={this.state.text}
          onChange={this.handleChange}
          maxLength={280} />

          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>  }

          <button
            className="btn"
            type="submit"
            disabled={this.state.text === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet);