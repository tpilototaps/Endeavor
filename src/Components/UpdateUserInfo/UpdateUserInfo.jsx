import React, { Component } from 'react'
import { ref, set } from 'firebase/database'
import './UpdateUserInfo.css'

export default class UpdateUserInfo extends Component {

    constructor(){
        super()
        this.state = {
            db : '',
            email: '',
            password: ''
        }
        this.interface = this.interface.bind(this);
    }

    componentDidMount(){
        this.setState({
            // db : dataFromFireStore
        });
    }
  render() {
    return (
        <div className='main'>
        <form className= 'container' >
          <div className='fields'>
          <input className='input' type = 'email'  placeholder='Email' name = 'email' value={this.state.email} onChange={(event) => {this.setState({email: event.target.value});}}/>
          <input className='input' type = 'password'  placeholder='Password' name = 'password' value={this.state.password} onChange={(event) => {this.setState({password: event.target.value});}}/><br/> 

            <button className='btn btn-success' id = 'updateBtn' onClick = {this.interface}>Update Account</button>

            </div>
             </form>
          </div>
    )
  }
  interface(event){
    const id = event.target.id;

    if( id === 'addBtn'){
        this.insertData();
    }
    else if( id === 'updateBtn'){
        this.insertData();
    }
    else if( id === 'deleteBtn'){
        this.insertData();
    }
    else if( id === 'selectBtn'){
        this.insertData();
    }
  }
  getAllInputs(){
    return{
        email : this.state.email,
        password : this.state.password
    }
  }

  insertData(event){
    event.preventDefault()
    console.log('did this work')
        const db = this.state.db;
        const data = this.getAllInputs();
        console.log(data)

        set(ref(db, 'Customer/'+data.username),
        {
            emailAddress: data.name,
            chosenPassword: data.password
        })
        .then(() => {alert('data was added successsfully')})
        .catch((error) => {alert('error')})
        ;
  }

}

// const UpdateUserInfo = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate()

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             console.log(userCredential);
//         }).catch((error) => {
//             console.log(error);
//         })
//         navigate('/Feed')
//     }



//   return (
//     <div className='main'>
//       <form className= 'container' onSubmit={handleSubmit}>
//       <div className='fields'>
//         <input className='input' type = 'email'  required placeholder='Email' name = 'email' value={email} onChange={(event) => setEmail(event.target.value)}/>
//         <input className='input' type = 'password'  required placeholder='Password' name = 'password' value={password} onChange={(event) => setPassword(event.target.value)}/><br/> 
//         <button className='btn btn-success' type = 'submit'>Update Account</button>
//         <button className='btn btn-danger' type = 'button' >Delete Account</button>
//       </div>
//       </form>
//     </div>
//   )
// }

// export default UpdateUserInfo