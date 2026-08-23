import { NavLink } from "react-router-dom";
import FooterLogo from "./FooterLogo";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoPinterest,
  logoTwitter,
} from "ionicons/icons";

function FooterNavBar() {
  return (
    <div className="maxWidth mx-auto flex gap-30">
      <div>
        <FooterLogo />
      </div>
      <nav className="flex items-center gap-10 text-sm text-neutralgray-400">
        <ul className="flex flex-col gap-2.5">
          <span className="text-white font-bold pb-2.5">Features</span>
          <li>
            <NavLink to="/shortening">Link Shortening</NavLink>
          </li>
          <li>
            <NavLink to="/branded">Branded Links</NavLink>
          </li>
          <li>
            <NavLink to="/analytics">Analytics</NavLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-2.5">
          <span className="text-white font-bold pb-2.5">Resources</span>
          <li>
            <NavLink to="/shortening">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/branded">Developers</NavLink>
          </li>
          <li>
            <NavLink to="/analytics">Support</NavLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-2.5">
          <span className="text-white font-bold pb-2.5">Company</span>
          <li>
            <NavLink to="/shortening">About</NavLink>
          </li>
          <li>
            <NavLink to="/branded">Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/analytics">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/analytics">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <IonIcon icon={logoFacebook} className="text-white text-3xl" />
        <IonIcon icon={logoTwitter} className="text-white text-3xl" />
        <IonIcon icon={logoPinterest} className="text-white text-3xl" />
        <IonIcon icon={logoInstagram} className="text-white text-3xl" />
      </div>
    </div>
  );
}
export default FooterNavBar;
