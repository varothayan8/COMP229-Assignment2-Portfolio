import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Icon from "../components/Icon.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { siteConfig } from "../data/siteConfig.js";

const EMPTY_FORM = { firstName: "", lastName: "", phone: "", email: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\-.\s\d]{7,20}$/;

/**
 * validateContactForm
 * Returns an object of field -> error message. An empty object means valid.
 * Phone is optional but must look like a phone number when provided.
 */
function validateContactForm(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "Enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Enter a valid email address, like name@example.com.";
  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) errors.phone = "Use digits, spaces, + or dashes only.";
  if (values.message.trim().length < 10) errors.message = "Write at least 10 characters.";
  return errors;
}

/**
 * Contact — contact panel plus a controlled form.
 * On a valid submit the contact (first name, last name, email) is saved to
 * MongoDB via POST /api/contacts, then the visitor is redirected to Home with router
 * state; Home shows the confirmation message.
 */
export default function Contact() {
  usePageMeta("Contact Me", "Contact Varothayan Arumairatnam by email, LinkedIn or GitHub, or send a message through the contact form.");

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(EMPTY_FORM);
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    // Clear an error as soon as the visitor edits that field.
    if (formErrors[name]) setFormErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const errors = validateContactForm(formValues);
    setFormErrors(errors);

    const firstInvalidField = Object.keys(errors)[0];
    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    // Save the contact to MongoDB through the Express REST API (POST api/contacts).
    setSubmitError("");
    setSubmitting(true);
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: formValues.firstName.trim(),
          lastname: formValues.lastName.trim(),
          email: formValues.email.trim(),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not send your message.");
    } catch (err) {
      setSubmitError(err.message || "Could not send your message. Please try again.");
      setSubmitting(false);
      return;
    }
    setSubmitting(false);
    navigate("/", { state: { contactSubmitted: true, firstName: formValues.firstName.trim() } });
  }

  // Renders one labelled input with its validation message wired for screen readers.
  function renderField({ name, label, type = "text", autoComplete, required = true, textarea = false }) {
    const errorId = `${name}-error`;
    const sharedProps = {
      id: name,
      name,
      value: formValues[name],
      onChange: handleChange,
      autoComplete,
      "aria-invalid": formErrors[name] ? "true" : undefined,
      "aria-describedby": formErrors[name] ? errorId : undefined,
    };
    return (
      <div className="field">
        <label htmlFor={name}>{label}{required ? "" : " (optional)"}</label>
        {textarea ? <textarea rows="5" {...sharedProps} /> : <input type={type} {...sharedProps} />}
        {formErrors[name] && <p className="field__error" id={errorId}>{formErrors[name]}</p>}
      </div>
    );
  }

  return (
    <main className="container section">
      <SectionHeading as="h1" title="Contact Me" intro="I'm open to co-op and junior developer opportunities. The fastest way to reach me is email." />

      <div className="contact-layout">
        <aside className="contact-panel glass" aria-label="Contact details">
          <h2>Contact details</h2>
          <ul>
            <li><Icon name="mail" /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li><Icon name="linkedin" /><a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn profile</a></li>
            <li><Icon name="github" /><a href={siteConfig.links.github} target="_blank" rel="noreferrer noopener">GitHub profile</a></li>
            <li><Icon name="pin" /><span>{siteConfig.location}</span></li>
          </ul>
          <p className="contact-panel__note">{siteConfig.availability}.</p>
        </aside>

        <form className="contact-form glass" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            {renderField({ name: "firstName", label: "First name", autoComplete: "given-name" })}
            {renderField({ name: "lastName", label: "Last name", autoComplete: "family-name" })}
          </div>
          <div className="form-row">
            {renderField({ name: "phone", label: "Contact number", type: "tel", autoComplete: "tel", required: false })}
            {renderField({ name: "email", label: "Email address", type: "email", autoComplete: "email" })}
          </div>
          {renderField({ name: "message", label: "Message", textarea: true })}
          {submitError && <p className="field__error" role="alert">{submitError}</p>}
          <Button type="submit" icon="send" disabled={submitting}>{submitting ? "Sending…" : "Send message"}</Button>
        </form>
      </div>
    </main>
  );
}
