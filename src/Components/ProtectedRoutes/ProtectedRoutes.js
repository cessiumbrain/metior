import { Outlet, Navigate } from "react-router-dom"

function ProtectedRoutes(props){
    return(
        props.user ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>
    )
}

export default ProtectedRoutes