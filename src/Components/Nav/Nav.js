import './Nav.css'
function Nav(props){
    return(
        <div className="Nav">
            <div onClick={()=>props.logout()} className="logout">LogOut</div>
        </div>
    )
}

export default Nav