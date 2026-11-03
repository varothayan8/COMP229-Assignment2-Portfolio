import Icon from "./Icon.jsx";
import { siteConfig } from "../data/siteConfig.js";

/** SocialLinks — GitHub, LinkedIn and email icon buttons driven by siteConfig. */
export default function SocialLinks() {
  const socialLinks = [
    { name: "github", label: "GitHub profile", href: siteConfig.links.github },
    { name: "linkedin", label: "LinkedIn profile", href: siteConfig.links.linkedin },
    { name: "mail", label: "Send an email", href: `mailto:${siteConfig.email}` },
  ];

  return (
    <ul className="social-links">
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            aria-label={link.label}
            {...(link.name !== "mail" ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          >
            <Icon name={link.name} size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
