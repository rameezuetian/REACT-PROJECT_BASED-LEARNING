import { useSelector } from "react-redux";

function Navbar() {

  const user = useSelector(
    (state) => state.auth.user
  );

  return (
    <div>
      {user
        ? `Welcome ${user.name}`
        : "Please Login"}
    </div>
  );
}

export default Navbar;