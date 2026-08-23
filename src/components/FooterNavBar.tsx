import { Link } from "react-router-dom";
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
    <div className="maxWidth mx-auto flex gap-40 justify-center">
      <div>
        <FooterLogo />
      </div>
      <nav className="flex justify-center gap-30 text-sm text-neutralgray-400">
        <ul className="flex flex-col gap-2.5">
          <span className="text-white font-bold pb-2.5">Features</span>
          <li>
            <Link to="/shortening">Link Shortening</Link>
          </li>
          <li>
            <Link to="/branded">Branded Links</Link>
          </li>
          <li>
            <Link to="/analytics">Analytics</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2.5">
          <span className="text-white font-bold pb-2.5">Resources</span>
          <li>
            <Link to="/shortening">Blog</Link>
          </li>
          <li>
            <Link to="/branded">Developers</Link>
          </li>
          <li>
            <Link to="/analytics">Support</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2.5">
          <span className="text-white font-bold pb-2.5">Company</span>
          <li>
            <Link to="/shortening">About</Link>
          </li>
          <li>
            <Link to="/branded">Our Team</Link>
          </li>
          <li>
            <Link to="/analytics">Careers</Link>
          </li>
          <li>
            <Link to="/analytics">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-3.5">
        <IonIcon icon={logoFacebook} className="text-white text-3xl" />
        <IonIcon icon={logoTwitter} className="text-white text-3xl" />
        <IonIcon icon={logoPinterest} className="text-white text-3xl" />
        <IonIcon icon={logoInstagram} className="text-white text-3xl" />
      </div>
    </div>
  );
}
export default FooterNavBar;
