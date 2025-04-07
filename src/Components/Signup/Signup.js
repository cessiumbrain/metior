import { useState } from "react"
import { FaGoogle, FaCircleExclamation } from "react-icons/fa6"
import { Navigate, Link } from "react-router-dom";
import './Signup.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc} from "firebase/firestore";


function Signup(props){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reenterPassword, setReenterPassword] = useState('')
    const [error, setError]= useState(null)

    const auth = getAuth();
    const db = getFirestore(props.app)


    function validateSignup(){
        if(password !== reenterPassword){
            setError("passwords don't match")
        } else {
            setError(null)
        }
    }
    
    async function test(){
        const docRef = await setDoc(doc(db, 'users', '123yourmom'), {
            'name': 'blbo'
        })
                console.log('docRef')
                console.log(docRef)

    }

    function signUp() {
        
        validateSignup()

        if(error){
            return
        }

      createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log('user', user)
            //create db document for user
            try{
                const docRef = await setDoc(doc(db, 'users', user.uid),{
                    answers: [],
                    selectedQuestionnaires: []
                })
                //set the logged in user
                props.setUser({
                    uid: user.uid,
                    answers: [],
                    selectedQuestionnaires: []
                })
            }catch(error){
                console.log(error)
                setError('metior encountered a database error')
            }

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`firebase auth error code: ${errorCode}, error message: ${errorMessage}`)
          setError('There was a problem creating your account please try again later')
        })
    }

    if(props.user){
        return(
            <Navigate to="/home"></Navigate>
        )
    }else {
        return(
            <div className="Signup">
                <h1>Sign Up</h1>
                
                <label>Email</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email-signup-input"></input>
    
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password-signup-input"></input>
                
                <label>Re-Enter Password</label>
                <input type="password" value={reenterPassword} onChange={(e)=>{setReenterPassword(e.target.value)}} id="reenter-password-signup-input"></input>
    
                <div onClick={()=>{signUp()}} className="submit btn">Sign Up</div>
                {/* <div className="signup-with-google btn">
                    <span>Signup With Google</span>
                    <FaGoogle className='google-logo'></FaGoogle>
                </div> */}
                <div className="error-div">
                    <span>{error}</span>
                </div>
                <Link className="login-link" to="/login">Login</Link>
                <p className="disclaimer"><FaCircleExclamation></FaCircleExclamation> This program is for demonstration purposes, do not enter any real or protected health information</p>
            </div>
        )
    }
        
    
   
}

export default Signup