import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = ["Features", "Pricing", "Resources"];

  return (
    <div className="relative flex items-center justify-between">
      <div className="flex items-center gap-10">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-bold text-neutralgray-500 lg:flex">
          {links.map((link) => (
            <NavLink key={link} to={`/${link.toLowerCase()}`}>
              {link}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="hidden items-center gap-9 text-sm font-bold lg:flex">
        <Link className="text-neutralgray-500" to="/login">
          Login
        </Link>
        <Button className="bg-primaryblue-400 px-6 py-2.5">Sign Up</Button>
      </div>
      <button
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="text-2xl leading-none text-neutralgray-500 lg:hidden"
      >
        ☰
      </button>
      {open && (
        <nav className="absolute top-14 z-30 w-full rounded-xl bg-primarypurple-950 p-6 text-center text-base font-bold text-white shadow-xl lg:hidden">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <NavLink
                onClick={() => setOpen(false)}
                key={link}
                to={`/${link.toLowerCase()}`}
              >
                {link}
              </NavLink>
            ))}
          </div>
          <div className="my-6 h-px bg-white/25" />
          <div className="flex flex-col gap-6">
            <Link onClick={() => setOpen(false)} to="/login">
              Login
            </Link>
            <Button className="bg-primaryblue-400 w-full py-3">Sign Up</Button>
          </div>
        </nav>
      )}
    </div>
  );
}
export default NavBar;
