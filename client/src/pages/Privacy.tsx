import LegalPage from "@/components/LegalPage";
import EstimateSection from "@/components/EstimateSection";
import { COMPANY } from "@/lib/constants";

export default function Privacy() {
  const email = <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>;
  const phone = <a href={`tel:+${COMPANY.phone.tel}`}>{COMPANY.phone.display}</a>;
  return (
    <>
      <LegalPage eyebrow="Your information" title="Privacy Policy" effective="November 3, 2026">
        <p>{COMPANY.legalLine}</p>
        <p>
          This policy describes how Innovate Deck (Innovate Building Inc.) handles information collected through innovatedeck.com and
          estimate requests. Contact us at {email} or {phone} with privacy questions.
        </p>
        <h2>Information you choose to provide</h2>
        <p>
          When you request an estimate or contact us, you may provide your name, phone number, email, project address
          or city, the service you are interested in and project details. If you choose to receive text messages, we
          record that choice and the consent language shown to you. Please send only information relevant to your
          project, and do not include financial account details or other sensitive information.
        </p>
        <h2>How information is used</h2>
        <p>
          We use inquiry information to respond to you, understand your project, prepare or discuss an estimate,
          schedule appointments and communicate about work you requested. We also use relevant records to operate the
          website, prevent misuse and answer questions or disputes. Requesting an estimate does not require agreeing to
          receive text messages.
        </p>
        <h2 id="sms">SMS and mobile information</h2>
        <p>
          No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Text
          messaging originator opt-in data and consent will not be shared with any third parties.
        </p>
        <p>
          SMS consent is optional and separate from requesting an estimate. With your consent we may text you about your
          quote, appointments and project updates. Message frequency varies. Msg &amp; data rates may apply. Reply STOP at
          any time to opt out, or HELP for help. You can also contact us at {email} or {phone}. See our{" "}
          <a href="/terms#sms">SMS / Text Messaging Terms</a>.
        </p>
        <h2>Service providers and disclosure</h2>
        <p>
          We use service providers for website hosting, form processing, customer records and communications. They
          process information only as needed to provide those services. We may also disclose information where required
          by law or to respond to a lawful request, protect rights or address suspected misuse. These operational
          disclosures never include sharing your mobile number or SMS consent for third-party marketing.
        </p>
        <h2>Technical information</h2>
        <p>
          Our hosting and form providers may process technical information such as IP address, browser type, request
          times and security events. The website may look up your approximate region from your IP address to show the
          right local phone number and service area; it does not use your precise location. If you arrived from an ad
          or link, the website may keep the campaign tags (for example utm_source or gclid) in your browser and send them
          with an estimate request so we know how you found us.
        </p>
        <h2>Retention and security</h2>
        <p>
          We keep information as long as needed for your inquiry, any project, our business records and legal
          obligations. We use reasonable safeguards to limit access, but no online transmission or storage is completely
          secure. Contact us to ask about correcting or deleting your information; some records may need to be kept for
          legitimate business or legal reasons.
        </p>
        <h2>Your choices</h2>
        <p>
          You can ask to access or correct your information, ask about deletion, or change how we contact you. We may
          need to verify your identity first. You can stop texts at any time by replying STOP. Choosing not to receive
          texts does not stop you from reaching us by phone or email.
        </p>
        <h2>External links and children</h2>
        <p>
          Links to other websites (for example manufacturers or permit offices) are provided for convenience and have
          their own privacy practices. This website is intended for homeowners and property owners and is not directed
          to children under 13.
        </p>
        <h2>Changes and contact</h2>
        <p>
          We may update this policy as the website or our practices change; the effective date above shows the current
          version. Questions: {email} or {phone}.
        </p>
      </LegalPage>
      <EstimateSection idPrefix="privacy" />
    </>
  );
}
