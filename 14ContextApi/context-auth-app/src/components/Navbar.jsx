import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Navbar(){
    const {user} = useContext(AuthContext);

    return (
        <div>
            {user ? ( <h3>Welcome {user.name}</h3> ) : <h3>Please Login</h3>}
        </div>
    )
}

export default Navbar;