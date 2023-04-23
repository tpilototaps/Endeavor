import React, { Component } from 'react'
import { createSignUpWithEmailAndPassword, createUserDocument } from '../../Utils/Firebase/Firebase'
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css'



export default class SignUpForm extends Component {

constructor(){
    super()
    this.state = {
        displayName : '',
        email : '',
        password : '',
        confirmPassword : '',
    }
}

handleChange = (event) => {
    const { name, value } = event.target
    switch (name){
        case 'displayName':
            this.setState({displayName : value})    
            break;
        case 'email':
            this.setState({email : value})
            break;
        case 'password':
            this.setState({password : value})
            break;
        case 'confirmPassword':
            this.setState({confirmPassword : value})
            break;
        default:
    }
}

handleSubmit = async (event) => {
    event.preventDefault()
    console.log('submitted')

    if (this.state.password !== this.state.confirmPassword){
        alert('Passwords do not match, please try again')
        return
    }
    try {
        const response = await createSignUpWithEmailAndPassword(this.state.email, this.state.password)
        console.log(response)
        await createUserDocument(response.user, this.state.displayName)
        this.setState({email : ''})
    }
    catch (error){
        console.log('error')
        this.setState({email : ''})
    }

}

  render() {
    return (
    <div>
      <form onSubmit = {this.handleSubmit}>
        <input type = 'text' className = 'input' onChange={this.handleChange} required placeholder='Display Name' name = 'displayName' value= {this.displayName}/><br/>
        <input type = 'email' className = 'input' onChange={this.handleChange} required placeholder='Email' name = 'email' value={this.email}/><br/>
        <input type = 'password' className = 'input' onChange={this.handleChange} required placeholder='Password' name = 'password' value={this.password}/><br/>
        <input type = 'password' className = 'input' onChange={this.handleChange} required placeholder='Confirm Password' name = 'confirmPassword' value={this.confirmPassword}/><br/>
        <button type = 'submit' className = 'btn btn-primary'> Sign Up</button><br/><br/>
        <h6> Have an account?</h6>
      </form>
    </div>
    )
  }
}
