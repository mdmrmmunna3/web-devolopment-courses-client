import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    // const {user, loading, setLoading} = useContext(AuthContext); line-16 releted
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    // loading when relaod page 
    if(loading) {
        return <div className='text-center mb-3'><Spinner animation="border" variant="info" /></div>
    }

    // redirect route
    if(!user) {
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    else{
        return children;
    }
};

export default PrivateRoute;