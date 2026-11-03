import SocialLinks from "./SocialLinks.jsx";
import { siteConfig } from "../data/siteConfig.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {siteConfig.legalName}. Built with React.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
