import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

function Login() {

  const dispatch = useDispatch();

  const handleLogin = () => {

    dispatch(
      login({
        name: "Ali",
        email: "ali@gmail.com"
      })
    );
  };

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}

export default Login;