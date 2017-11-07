

//////////////////////////////////////////////////////////////////////////
/////////////////  Component To Create New Contacts    //////////////////
////////////////////////////////////////////////////////////////////////

import React, {Component} from 'react'
import { Link }           from "react-router-dom"
import ImageInput         from './ImageInput'
import serializeForm      from 'form-serialize'
import config             from '../../../../config'
import '../css/style.css'

var image4 = config.origin + "/back.png"

class CreateContact extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("SUBMIT FIRED")
    const values = serializeForm(e.target, {hash: true})
    if (this.props.onCreateContact) {
      console.log(this.props)
      this.props.onCreateContact(values)
    }

  }
  render() {
    return (
      <div>
        <Link className="close-create-contact"  style={{ backgroundImage: `url(${image4})`}} to="/members/contacts">Close</Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
              <ImageInput
                className="create-contact-avatar-input"
                name="avatarURL"
                maxHright={64}
                />
             <div className="create-contact-details">
               <input type="text" name="name" placeholder="Name" />
               <input type="text" name="email" placeholder="Email" />
               <button>Add Contact</button>
             </div>
       </form>
    </div>
    )
  }

}

export default CreateContact
