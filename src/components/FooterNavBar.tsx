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
    <div className="page-container mx-auto flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
      <div className="shrink-0">
        <FooterLogo />
      </div>
      <nav className="flex flex-col gap-9 text-sm text-neutralgray-400 sm:flex-row sm:gap-18 lg:gap-20">
        <ul className="flex flex-col gap-2.5">
          <li className="pb-2.5 font-bold text-white">Features</li>
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
          <li className="pb-2.5 font-bold text-white">Resources</li>
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
          <li className="pb-2.5 font-bold text-white">Company</li>
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
      <div className="flex gap-5">
        <IonIcon icon={logoFacebook} className="text-white text-2xl" />
        <IonIcon icon={logoTwitter} className="text-white text-2xl" />
        <IonIcon icon={logoPinterest} className="text-white text-2xl" />
        <IonIcon icon={logoInstagram} className="text-white text-2xl" />
      </div>
    </div>
  );
}
export default FooterNavBar;
