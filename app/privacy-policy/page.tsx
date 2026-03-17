import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — WagerBird",
  description:
    "Learn how WagerBird collects, uses, and protects your personal information across our products and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-yellow)]">
            Legal
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            WagerBird Privacy Policy
          </h1>
          <p className="text-sm text-white/60">
            Effective Date: March 17, 2026 · Last Updated: March 17, 2026
          </p>
        </header>

        <section className="space-y-6 text-sm leading-relaxed text-white/80">
          <p>
            SkyBurst Technology, Inc., a Delaware corporation doing business as WagerBird (&quot;WagerBird,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), is committed to protecting the privacy and security of your
            personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard
            information obtained through wagerbird.com and all related services, features, and applications
            (collectively, the &quot;Services&quot;).
          </p>
          <p>
            This Privacy Policy is incorporated into and forms part of our Terms of Service. By accessing or using the
            Services, you acknowledge that you have read, understood, and consent to the practices described in this
            Privacy Policy. If you do not agree with this Privacy Policy, you must not access or use the Services.
          </p>
          <p>
            Certain payment processing services are performed by our affiliated billing agent, GSI Media LLC, a Texas
            limited liability company. GSI Media LLC&apos;s collection and use of payment information is subject to this
            Privacy Policy and applicable payment security standards.
          </p>

          <SectionHeading id="information-we-collect">1. Information We Collect</SectionHeading>
          <p className="font-semibold text-white">1.1 Information You Provide Directly</p>
          <p>We collect personal information that you provide to us, including when you:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Create an account</span>: name, email address, username, and password;
            </li>
            <li>
              <span className="font-semibold">Make a purchase or subscription</span>: billing name, billing address, and
              payment instrument information (processed securely by our payment processor — we do not store full payment
              card numbers);
            </li>
            <li>
              <span className="font-semibold">Contact us for support</span>: name, email address, and the content of
              your communications;
            </li>
            <li>Respond to surveys, promotions, or marketing communications;</li>
            <li>Participate in any interactive features of the Services.</li>
          </ul>

          <p className="font-semibold text-white">1.2 Information Collected Automatically</p>
          <p>When you access or use the Services, we automatically collect certain technical and usage information, including:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Log data</span>: IP address, browser type and version, operating system,
              referring URL, pages visited, time and date of your visit, and time spent on pages;
            </li>
            <li>
              <span className="font-semibold">Device information</span>: device identifiers, device type, hardware
              model, and mobile network information;
            </li>
            <li>
              <span className="font-semibold">Usage data</span>: features used, content accessed, search queries,
              clicks, and interactions within the Services;
            </li>
            <li>
              <span className="font-semibold">Location data</span>: general geographic location inferred from your IP
              address (we do not collect precise GPS location without your express consent);
            </li>
            <li>
              <span className="font-semibold">Cookies and similar tracking technologies</span>: as described in Section
              6 below.
            </li>
          </ul>

          <p className="font-semibold text-white">1.3 Information from Third Parties</p>
          <p>We may receive information about you from third-party sources, including:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Sportsbook Partners and affiliate networks</span>: information about
              referrals, conversions, and promotional redemptions when you follow a WagerBird affiliate link;
            </li>
            <li>
              <span className="font-semibold">Analytics providers</span>: aggregated and anonymized data about user
              behavior to improve the Services;
            </li>
            <li>
              <span className="font-semibold">Payment processors</span>: transaction confirmations, fraud signals, and
              billing status information;
            </li>
            <li>
              <span className="font-semibold">Social media platforms</span>: if you choose to connect a social media
              account or log in through a social media service, we may receive profile information as permitted by your
              social media settings.
            </li>
          </ul>

          <p className="font-semibold text-white">1.4 Information We Do Not Collect</p>
          <p>
            We do not knowingly collect: (a) precise GPS or fine-grained location data without consent; (b) biometric or
            health information; (c) sensitive financial account details beyond what is necessary for payment processing;
            or (d) information from children under the age of 18 (and we strictly prohibit use by persons under 21).
          </p>

          <SectionHeading id="how-we-use-information">2. How We Use Your Information</SectionHeading>
          <p>We use the information we collect for the following purposes:</p>
          <p className="font-semibold text-white">2.1 Providing and Improving the Services</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>To create and manage your account and authenticate your identity;</li>
            <li>To process transactions and fulfill your purchases and subscriptions;</li>
            <li>To deliver Analytics Content, picks, predictions, and other Service features;</li>
            <li>To personalize your experience and provide content relevant to your interests;</li>
            <li>To monitor, analyze, and improve the performance, accuracy, and features of the Services;</li>
            <li>To develop new products, features, and services.</li>
          </ul>

          <p className="font-semibold text-white">2.2 Communications</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              To send you transactional communications, including purchase confirmations, billing receipts, and account
              notifications;
            </li>
            <li>
              To send you marketing communications about WagerBird products, features, or promotions (where you have
              consented or where permitted by law), subject to your opt-out rights;
            </li>
            <li>To respond to your inquiries, support requests, and feedback.</li>
          </ul>

          <p className="font-semibold text-white">2.3 Legal and Safety Purposes</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>To comply with applicable law, regulation, legal process, or enforceable governmental request;</li>
            <li>To enforce our Terms of Service and other agreements;</li>
            <li>To detect, investigate, and prevent fraud, unauthorized access, and other illegal activity;</li>
            <li>To protect the rights, property, and safety of WagerBird, our users, and the public.</li>
          </ul>

          <p className="font-semibold text-white">2.4 Aggregate and Anonymized Analytics</p>
          <p>
            We may use and share de-identified, aggregated, or anonymized data — data that cannot reasonably be used to
            identify you — for any lawful purpose, including research, product development, and marketing.
          </p>

          <SectionHeading id="sharing-information">3. Disclosure and Sharing of Your Information</SectionHeading>
          <p>We do not sell your personal information to third parties. We may share your information in the following limited circumstances:</p>
          <p className="font-semibold text-white">3.1 Service Providers and Vendors</p>
          <p>
            We share information with third-party vendors, contractors, and service providers who perform services on
            our behalf, including: payment processing (GSI Media LLC), email delivery, hosting and cloud infrastructure,
            analytics, customer support, and marketing automation. These service providers are contractually obligated
            to use your information only as directed by us and in accordance with this Privacy Policy.
          </p>

          <p className="font-semibold text-white">3.2 Affiliate and Sportsbook Partners</p>
          <p>
            When you click on an affiliate link or use a referral code to visit a Sportsbook Partner, WagerBird may
            share limited information — such as a unique referral identifier or cookie — with the Sportsbook Partner to
            track the referral for compensation purposes. This sharing is limited to what is necessary to credit the
            referral. We do not share your full account profile or payment information with Sportsbook Partners. Any
            information you provide directly to a Sportsbook Partner is subject to that partner&apos;s privacy policy.
          </p>

          <p className="font-semibold text-white">3.3 Business Transfers</p>
          <p>
            In the event of a merger, acquisition, reorganization, sale of assets, or bankruptcy, your information may
            be transferred to the acquiring entity as part of the transaction. We will provide notice prior to the
            transfer of your information if it will be subject to a different privacy policy.
          </p>

          <p className="font-semibold text-white">3.4 Legal Compliance and Safety</p>
          <p>
            We may disclose your information if required to do so by law, regulation, court order, or other legal
            process, or if we believe in good faith that disclosure is necessary to protect the rights, property, or
            safety of WagerBird, our users, or others.
          </p>

          <p className="font-semibold text-white">3.5 With Your Consent</p>
          <p>We may share your information in any other manner with your express prior consent.</p>

          <SectionHeading id="cookies">4. Cookies and Tracking Technologies</SectionHeading>
          <p className="font-semibold text-white">4.1 Types of Tracking Technologies</p>
          <p>
            We and our service providers use cookies, web beacons, pixel tags, local storage, and similar tracking
            technologies (collectively, &quot;Cookies&quot;) to collect information about your interactions with the
            Services. The primary types of Cookies we use include:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Strictly necessary Cookies</span>: required for the Services to function
              (e.g., authentication tokens, session management). These cannot be disabled.
            </li>
            <li>
              <span className="font-semibold">Functional Cookies</span>: enable enhanced functionality and
              personalization, such as remembering your preferences and login status.
            </li>
            <li>
              <span className="font-semibold">Analytics Cookies</span>: allow us to understand how users interact with
              the Services, identify popular features, and diagnose performance issues.
            </li>
            <li>
              <span className="font-semibold">Marketing and Affiliate Cookies</span>: used to track referrals to
              Sportsbook Partners and to deliver relevant promotional content.
            </li>
          </ul>

          <p className="font-semibold text-white">4.2 Your Cookie Choices</p>
          <p>
            You can manage Cookie preferences through your browser settings to refuse or delete Cookies. Most browsers
            allow you to block all Cookies or selectively block third-party Cookies. Please note that blocking certain
            Cookies may impair the functionality of the Services.
          </p>

          <p className="font-semibold text-white">4.3 Do Not Track</p>
          <p>
            Some browsers offer a &quot;Do Not Track&quot; (&quot;DNT&quot;) signal. Our Services do not currently
            respond to DNT signals, as there is no uniform standard for how DNT should be interpreted.
          </p>

          <SectionHeading id="data-retention">5. Data Retention</SectionHeading>
          <p>
            We retain your personal information for as long as your account is active, as necessary to fulfill the
            purposes described in this Privacy Policy, and as required or permitted by applicable law. Specifically:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Account information is retained for the duration of your account and for a reasonable period thereafter to
              handle disputes, enforce our agreements, and comply with legal obligations;
            </li>
            <li>
              Transaction records are retained for a minimum of seven (7) years for tax, accounting, and legal
              compliance purposes;
            </li>
            <li>
              Communication records are retained for up to three (3) years after your last interaction with our support
              team;
            </li>
            <li>Analytics and log data may be retained in aggregated or anonymized form indefinitely.</li>
          </ul>
          <p>
            When personal information is no longer needed, we take reasonable steps to delete, destroy, or de-identify
            it in a secure manner.
          </p>

          <SectionHeading id="data-security">6. Data Security</SectionHeading>
          <p>
            We implement commercially reasonable administrative, technical, and physical safeguards designed to protect
            your personal information against unauthorized access, disclosure, alteration, and destruction. These
            measures include: SSL/TLS encryption for data in transit; hashed and salted password storage; access
            controls limiting employee access to personal information on a need-to-know basis; and regular security
            assessments.
          </p>
          <p>
            However, no method of transmission over the Internet or electronic storage is completely secure. We cannot
            guarantee absolute security of your information and are not responsible for unauthorized access resulting
            from factors outside our reasonable control. If you believe your account or information has been
            compromised, please contact us immediately at{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>
            .
          </p>

          <SectionHeading id="your-rights">7. Your Rights and Choices</SectionHeading>
          <p className="font-semibold text-white">7.1 Access and Correction</p>
          <p>
            You may access, update, or correct your account information at any time by logging into your account
            settings or by contacting us at{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>
            . We will respond to reasonable requests within thirty (30) days.
          </p>

          <p className="font-semibold text-white">7.2 Deletion</p>
          <p>
            You may request the deletion of your personal information by contacting us at{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>
            . We will delete or de-identify your information, subject to our legal obligations and legitimate business
            needs.
          </p>

          <p className="font-semibold text-white">7.3 Opt-Out of Marketing Communications</p>
          <p>
            You may opt out of receiving marketing emails from WagerBird at any time by clicking the &quot;unsubscribe&quot;
            link in any marketing email or by contacting us at{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>
            . Please note that transactional communications are not subject to opt-out.
          </p>

          <p className="font-semibold text-white">7.4 California Residents — CCPA/CPRA Rights</p>
          <p>
            California residents have specific rights under the California Consumer Privacy Act, as amended by the
            California Privacy Rights Act (collectively, &quot;CCPA/CPRA&quot;). To exercise these rights, please
            contact us at{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>{" "}
            or call 1-855-782-8788. We will respond as required under applicable law.
          </p>

          <p className="font-semibold text-white">7.5 Nevada Residents</p>
          <p>
            Nevada residents have the right to opt out of the sale of personal information. WagerBird does not sell
            personal information as defined under NRS Chapter 603A. If you have questions, please contact us at{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>
            .
          </p>

          <p className="font-semibold text-white">7.6 Other State Privacy Rights</p>
          <p>
            Residents of certain other states (including Virginia, Colorado, Connecticut, and Texas) may have
            additional privacy rights under applicable state law, including rights of access, correction, deletion,
            portability, and opt-out of targeted advertising. To exercise such rights, please contact us at{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>
            .
          </p>

          <SectionHeading id="childrens-privacy">8. Children&apos;s Privacy</SectionHeading>
          <p>
            THE SERVICES ARE STRICTLY FOR ADULTS AGED 21 AND OLDER. We do not knowingly collect personal information
            from any individual under the age of 18, and we strictly prohibit use of the Services by anyone under 21. If
            we become aware that we have inadvertently collected personal information from an individual under 18, we
            will take prompt steps to delete such information from our records.
          </p>

          <SectionHeading id="international">9. International Data Transfers</SectionHeading>
          <p>
            The Services are operated and managed from the United States. If you are located outside the United States,
            you acknowledge that your information will be transferred to, stored, and processed in the United States,
            where privacy laws may be different from those in your jurisdiction.
          </p>

          <SectionHeading id="third-parties">10. Links to Third-Party Services</SectionHeading>
          <p>
            The Services may contain links to Sportsbook Partner websites and other third-party sites. This Privacy
            Policy does not apply to any third-party website or service. We encourage you to review the privacy policy
            of each third-party site before providing any personal information. WagerBird is not responsible for the
            privacy practices of any third party.
          </p>

          <SectionHeading id="updates">11. Updates to This Privacy Policy</SectionHeading>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
            requirements, or other operational factors. We will post any revised Privacy Policy on this page with an
            updated &quot;Last Updated&quot; date. For material changes, we will provide advance notice via email or
            prominent in-platform notification. Your continued use of the Services after the effective date of any
            revision constitutes your acceptance of the updated Privacy Policy.
          </p>

          <SectionHeading id="contact">12. Contact Us</SectionHeading>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:</p>
          <p>
            SkyBurst Technology, Inc. — Privacy Team
            <br />
            d/b/a WagerBird
            <br />
            251 Little Falls Drive, Wilmington, DE 19808
            <br />
            Email:{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>
            <br />
            Website:{" "}
            <a href="https://www.wagerbird.com" className="underline underline-offset-4">
              www.wagerbird.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="pt-4 text-base font-semibold text-white sm:text-lg">
      {children}
    </h2>
  );
}

