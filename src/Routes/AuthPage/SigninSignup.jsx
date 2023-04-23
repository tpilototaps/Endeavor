import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import { signInWithGooglePopup, createUserDocument } from '../../Utils/Firebase/Firebase'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SigninSignup.css'

function SigninSignup (){

  const navigate = useNavigate()

  const login = async () => {
    const response = await signInWithGooglePopup();
    console.log(response)
    createUserDocument(response.user)
    navigate('/Feed')

  
  };

    return (
      <div className='main'>
      <div className='container'>
      <div className='fields' >
        <SignUpForm/>
        <button onClick={login} className = 'btn btn-success'>Sign in with Google</button>
        <Link to='/Login'><button className='btn btn-danger'>Log in with password</button></Link> 
      </div>
      </div>
      </div>
    )
};

export default SigninSignup
