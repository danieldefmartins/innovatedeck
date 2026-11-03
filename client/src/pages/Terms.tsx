import LegalPage from "@/components/LegalPage";
import EstimateSection from "@/components/EstimateSection";
import { COMPANY } from "@/lib/constants";

export default function Terms() {
  const email = <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>;
  const phone = <a href={`tel:+${COMPANY.phone.tel}`}>{COMPANY.phone.display}</a>;
  return (
    <>
      <LegalPage eyebrow="Clear expectations" title="Terms & Conditions" effective="November 3, 2026">
        <p>{COMPANY.legalLine}</p>
        <p>
          These terms cover use of the Innovate Deck website and our optional text messaging program. Questions can be
          sent to {email} or {phone}.
        </p>
        <h2>Website information</h2>
        <p>
          The website gives general information about decks, materials, costs and planning. It is not a site
          assessment, engineering specification or permit determination. Prices and cost ranges on the site are general
          guidance; your price depends on your property, the design and the materials you choose.
        </p>
        <h2>Estimates and project agreements</h2>
        <p>
          Submitting a form or contacting us is a request to talk about an estimate. It does not create a construction
          contract, reserve a build date or require you to buy anything. Price, scope, materials, schedule, payment
          terms, permits and any warranty are set in a separate written proposal or agreement, and that agreement
          governs the project. Photos on the website show our past work and do not guarantee an identical result at
          another property.
        </p>
        <h2>Information you submit</h2>
        <p>
          Please give accurate contact details and only information you are allowed to share. Do not submit unlawful
          content, malicious files or unnecessary sensitive information.
        </p>
        <h2 id="sms">SMS / Text Messaging Terms</h2>
        <p>
          Program name: Innovate Deck text messages. If you check the optional SMS consent box, you agree to receive
          text messages from Innovate Deck at the number you provide. Message types include quote follow-ups,
          appointment scheduling and reminders, project updates and customer care. Message frequency varies. Msg &amp;
          data rates may apply. Consent is not a condition of purchase or of submitting an estimate request.
        </p>
        <p>
          Reply STOP to cancel, HELP for help. After you opt out you may receive one confirmation message, and further
          program messages will stop unless you opt in again. For support, contact {phone} or {email}.
        </p>
        <p>
          You must be authorized to use the phone number you provide. Tell us if that number changes. Carriers are not
          liable for delayed or undelivered messages. Do not use text messages for emergencies. Our{" "}
          <a href="/privacy">Privacy Policy</a> explains how mobile information and consent are handled.
        </p>
        <h2>Website use</h2>
        <p>
          Use the website lawfully and do not interfere with its operation, bypass security or misuse the forms.
          Website text, branding and photos may not be republished without permission.
        </p>
        <h2>Availability</h2>
        <p>
          The website and forms may sometimes be unavailable. If a form does not confirm that your request was received,
          please call or text {phone} instead of assuming it was delivered.
        </p>
        <h2>Updates and contact</h2>
        <p>
          We may update these terms; the effective date above shows the current version. Nothing in these terms limits
          rights that cannot lawfully be limited. Questions: {email} or {phone}.
        </p>
      </LegalPage>
      <EstimateSection idPrefix="terms" />
    </>
  );
}
