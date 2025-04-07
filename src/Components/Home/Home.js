import './Home.css'
import {Link} from 'react-router-dom';

function Home(props){
    return(
        <div className="Home">
            <h1>Home</h1>
            <Link className="profile-link" to="/profile">
                <div className="profile btn">
               My Profile
                </div>
            </Link>
            <Link className="my-questionnaires-link" to="/my-questionnaires">
            <div className="my-questionnaires btn">My Questionnaires</div>
            </Link>
        </div>
    )
}

export default Home