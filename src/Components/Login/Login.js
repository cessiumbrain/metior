import './Login.css'
import { FaGoogle } from 'react-icons/fa'
import { Navigate, Link } from 'react-router-dom'

function Login(props){

    if(props.user){
        return(
        <Navigate to="/home"></Navigate>
    )
    } else {
        return(
            <div className="Login">
                <h1>Log In</h1>
                <label>Username</label>
                <input></input>
                <label>Password</label>
                <input></input>
                {/* <div class="o-auth-google btn">
                    <span>Sign In With Google</span><FaGoogle></FaGoogle>
                </div> */}
                <Link to="/signup">Sign Up</Link>
                <Link>Forgot Password</Link>
            </div>
        )
    }
    
}

export default Login