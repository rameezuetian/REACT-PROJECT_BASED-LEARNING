import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { setUser } = useContext(AuthContext);

  const handlelogin = () => {
    setUser({
      id: 1,
      name: "Ali",
      email: "ali@gmail.com",
    });
  };

  return <button onClick={handlelogin}>Login</button>;
}


export default Login;