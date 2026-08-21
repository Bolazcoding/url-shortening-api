import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-10">
        <Logo />
        <nav className="flex items-center gap-10 text-neutralgray-500 font-bold">
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/resources">Resources</NavLink>
        </nav>
      </div>
      <div className="flex items-center gap-10 font-bold">
        <Link className="text-neutralgray-500" to="/login">
          Login
        </Link>
        <Button className="py-2 px-6">Sign Up</Button>
      </div>
    </div>
  );
}
export default NavBar;
