import {useState} from 'react';
import './Profile.css'

function Profile(props){    
    const [firstName, setFirstName] = useState(props.user.firstName)

    return(
        <div className="Profile">
            <h1>My Profile</h1>
            <form>

            </form>
        </div>
    )
}

export default Profile