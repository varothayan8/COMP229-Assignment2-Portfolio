import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

/**
 * Button
 * One component for every call-to-action so styling stays consistent.
 * - `to`   renders a React Router <Link> (internal navigation)
 * - `href` renders an <a> (external link, or a file download with `download`)
 * - neither renders a real <button> (form submit, toggles)
 * `variant`: "primary" | "secondary" | "ghost".
 */
export default function Button({
  to,
  href,
  download,
  variant = "primary",
  icon,
  external = false,
  children,
  ...rest
}) {
  const className = `btn btn--${variant}`;
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </>
  );

  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        className={className}
        href={href}
        download={download}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <button className={className} {...rest}>
      {content}
    </button>
  );
}
