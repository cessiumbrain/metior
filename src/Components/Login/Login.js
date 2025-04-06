import './Login.css'
import { FaGoogle } from 'react-icons/fa'
import { Navigate, Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

function Login(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState()

    const auth= getAuth()
    const db = getFirestore(props.app)
    
    //get auth, use the user auth object's id to get the user's db object
    function login(){
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
        .then(async(userCredential)=>{

            const user=userCredential.user

            //get user from db
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()){
                props.setUser(docSnap.data())
            } else {
                setError('database error')
            }
            


        })
        .catch((error)=>{
            const errorCode = error.code
            const errorMessage = error.message
          
        })
    }
    if(props.user){
        return(
        <Navigate to="/home"></Navigate>
    )
    } else {
        return(
            <div className="Login">
                <h1>Log In</h1>
                <label>Email</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"></input>
                <label>Password</label>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"></input>
                {/* <div class="o-auth-google btn">
                    <span>Sign In With Google</span><FaGoogle></FaGoogle>
                </div> */}
                <div onClick={login}class="btn">Login</div>
                <div className="error-div">{error}</div>
                <Link to="/signup">Sign Up</Link>
                <Link>Forgot Password</Link>
            </div>
        )
    }
    
}

export default Login