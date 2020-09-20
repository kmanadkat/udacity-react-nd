import React from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateContact extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, {hash: true});
    this.props.onCreateContact(values);
  }

  render(){
    return (
      <div>
        <Link to='/' className='close-create-contact'>Close</Link>
        <form className='create-contact-form' onSubmit={this.handleSubmit}>
          <ImageInput 
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" required/>
            <input type="text" name="handle" placeholder="Handle" required/>
            <button type="submit">Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContact;