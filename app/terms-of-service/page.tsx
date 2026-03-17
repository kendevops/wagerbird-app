import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — WagerBird",
  description:
    "Review the Terms of Service that govern your access to and use of WagerBird products and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-yellow)]">
            Legal
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            WagerBird Terms of Service
          </h1>
          <p className="text-sm text-white/60">
            Effective Date: March 17, 2026 · Last Updated: March 17, 2026
          </p>
        </header>

        <section className="space-y-6 text-sm leading-relaxed text-white/80">
          <p>
            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot;
            &quot;you,&quot; or &quot;your&quot;) and SkyBurst Technology, Inc., a Delaware corporation doing business as
            WagerBird (&quot;SkyBurst,&quot; &quot;WagerBird,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
            governing your access to and use of the WagerBird platform, the website located at wagerbird.com, and all
            related content, features, tools, and services (collectively, the &quot;Services&quot;).
          </p>
          <p>
            BY ACCESSING OR USING THE SERVICES IN ANY MANNER, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE
            TO BE BOUND BY THESE TERMS IN THEIR ENTIRETY. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE
            THE SERVICES.
          </p>
          <p>
            Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by
            reference.
          </p>

          <SectionHeading id="eligibility">1. Eligibility and Geographic Restrictions</SectionHeading>
          <p className="font-semibold text-white">1.1 Age Requirement</p>
          <p>
            THE SERVICES ARE INTENDED SOLELY FOR INDIVIDUALS WHO ARE TWENTY-ONE (21) YEARS OF AGE OR OLDER. By
            accessing or using the Services, you represent and warrant that you are at least 21 years of age. If you are
            under 21, you are not permitted to use the Services under any circumstances.
          </p>

          <p className="font-semibold text-white">1.2 Legal Jurisdiction</p>
          <p>
            You represent and warrant that your use of the Services is lawful in your jurisdiction. Sports betting,
            fantasy sports, and the receipt of sports analytics information may be subject to regulation or prohibition
            in certain states, countries, or territories. It is your sole responsibility to determine the legality of
            your activities in your jurisdiction before using the Services.
          </p>

          <p className="font-semibold text-white">1.3 Account Eligibility</p>
          <p>
            You may not create an account or use the Services if: (a) you have previously been suspended or terminated
            from the Services; (b) you are prohibited from receiving services, goods, or software originating from the
            United States under applicable law; or (c) you are acting on behalf of any person or entity that is
            prohibited from using the Services.
          </p>

          <SectionHeading id="services">2. Description of Services</SectionHeading>
          <p className="font-semibold text-white">2.1 Sports Analytics and Information</p>
          <p>
            WagerBird provides sports betting analytics, predictive modeling outputs, statistical analysis, confidence
            scoring, and related informational content (collectively, &quot;Analytics Content&quot;). The Services are
            designed to assist users in making informed decisions. WagerBird is an information and analytics platform
            only. WagerBird does not accept wagers, operate as a sportsbook, act as a bookmaker, or provide gambling
            services of any kind.
          </p>

          <p className="font-semibold text-white">2.2 Affiliate Referrals</p>
          <p>
            The Services may include affiliate links, referral links, promotional codes, and links to third-party
            sportsbooks and sports wagering platforms (&quot;Sportsbook Partners&quot;). When you click on such links or
            use such promotional codes, WagerBird may receive compensation from Sportsbook Partners. Your use of any
            Sportsbook Partner platform is governed solely by that platform&apos;s own terms of service, privacy policy,
            and applicable law.
          </p>

          <p className="font-semibold text-white">2.3 No Professional Gambling Advice</p>
          <p>
            ALL ANALYTICS CONTENT PROVIDED THROUGH THE SERVICES IS FOR INFORMATIONAL AND ENTERTAINMENT PURPOSES ONLY AND
            DOES NOT CONSTITUTE PROFESSIONAL GAMBLING ADVICE, FINANCIAL ADVICE, LEGAL ADVICE, OR ANY OTHER FORM OF
            PROFESSIONAL ADVICE. You acknowledge that sports wagering involves substantial risk of loss and that you
            bear sole responsibility for any wagering decisions you make.
          </p>

          <SectionHeading id="accounts">3. Account Registration and Security</SectionHeading>
          <p className="font-semibold text-white">3.1 Registration</p>
          <p>
            To access certain features of the Services, you may be required to create an account. You agree to provide
            accurate, current, and complete information during registration and to update such information as necessary
            to keep it accurate, current, and complete.
          </p>

          <p className="font-semibold text-white">3.2 Account Security</p>
          <p>
            You are solely responsible for maintaining the confidentiality of your account credentials and for all
            activities that occur under your account. You agree to notify WagerBird immediately at{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>{" "}
            of any unauthorized use of your account or any other breach of security.
          </p>

          <p className="font-semibold text-white">3.3 Account Termination by User</p>
          <p>
            You may terminate your account at any time by contacting us at{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>
            . Termination of your account does not relieve you of any obligations incurred prior to termination.
          </p>

          <SectionHeading id="billing">4. Subscriptions, Purchases, and Payment Terms</SectionHeading>
          <p className="font-semibold text-white">4.1 One-Time Purchases</p>
          <p>
            Certain Services or content may be made available for purchase on a one-time basis (&quot;One-Time
            Purchase&quot;). Unless expressly stated otherwise, all One-Time Purchases are final.
          </p>

          <p className="font-semibold text-white">4.2 Recurring Subscriptions</p>
          <p>
            Certain Services are offered on a subscription basis with recurring billing cycles (&quot;Subscription&quot;).
            By enrolling in a Subscription, you authorize WagerBird or its billing agent to charge the applicable
            subscription fee to your designated payment method at the beginning of each billing period until cancelled.
          </p>

          <p className="font-semibold text-white">4.3 Pricing, Taxes, and Refunds</p>
          <p>
            WagerBird reserves the right to change fees at any time, with notice where required by law. Except as
            required by applicable law or as expressly provided in these Terms, all fees paid are non-refundable.
          </p>

          <SectionHeading id="gambling-disclaimer">
            5. Gambling Disclaimer and Risk Acknowledgment
          </SectionHeading>
          <p>
            WAGERBIRD IS NOT A GAMBLING OPERATOR, SPORTSBOOK, BETTING EXCHANGE, OR BOOKMAKER. WAGERBIRD DOES NOT ACCEPT,
            PROCESS, OR FACILITATE WAGERS OF ANY KIND. THE ANALYTICS CONTENT AND INFORMATION PROVIDED THROUGH THE
            SERVICES ARE INTENDED FOR INFORMATIONAL PURPOSES ONLY AND DO NOT GUARANTEE ANY OUTCOME IN SPORTS WAGERING.
          </p>

          <SectionHeading id="prohibited-uses">6. Prohibited Uses</SectionHeading>
          <p>
            You agree not to use the Services to violate any law, engage in fraudulent activity, introduce malware,
            interfere with the operation of the Services, or otherwise misuse the platform. This includes, without
            limitation, scraping, reverse engineering, reselling Analytics Content, or allowing unauthorized access to
            your account.
          </p>

          <SectionHeading id="ip">7. Intellectual Property</SectionHeading>
          <p>
            The Services and all related content, software, models, data compilations, trade secrets, logos, trademarks,
            and other intellectual property (&quot;WagerBird IP&quot;) are owned exclusively by SkyBurst Technology,
            Inc. or its licensors and are protected by applicable laws. Subject to your compliance with these Terms,
            WagerBird grants you a limited, non-exclusive, non-transferable, revocable license to access and use the
            Services for your personal, non-commercial use.
          </p>

          <SectionHeading id="third-party">8. Third-Party Links and Services</SectionHeading>
          <p>
            The Services may contain links to third-party websites, platforms, or services, including Sportsbook
            Partners. These links are provided for your convenience only. WagerBird does not control and is not
            responsible for the content or practices of any third-party service.
          </p>

          <SectionHeading id="disclaimers">9. Disclaimers and Limitation of Liability</SectionHeading>
          <p>
            THE SERVICES AND ALL ANALYTICS CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WAGERBIRD AND ITS
            AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
            ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICES.
          </p>

          <SectionHeading id="indemnification">10. Indemnification</SectionHeading>
          <p>
            You agree to indemnify, defend, and hold harmless WagerBird and its affiliates from and against any and all
            claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out
            of or in any way connected with your access to or use of the Services, your violation of these Terms, or
            your violation of any third-party right or law.
          </p>

          <SectionHeading id="disputes">11. Dispute Resolution; Arbitration</SectionHeading>
          <p>
            Before initiating formal proceedings, you agree to first contact WagerBird at{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>{" "}
            with a written description of the dispute. If the dispute cannot be resolved informally, it shall be
            resolved through binding arbitration to the fullest extent permitted by law, subject to any applicable
            rights to opt out or pursue claims in small claims court.
          </p>

          <SectionHeading id="misc">12. Miscellaneous</SectionHeading>
          <p>
            These Terms and any dispute arising hereunder shall be governed by and construed in accordance with the laws
            of the State of Delaware, without regard to its conflict of law principles. If any provision of these Terms
            is held to be invalid or unenforceable, that provision will be enforced to the maximum extent permissible,
            and the remaining provisions will remain in full force and effect.
          </p>
          <p>
            We may update these Terms from time to time. We will post the revised Terms on this page with an updated
            effective date. Your continued use of the Services after any such changes become effective constitutes your
            acceptance of the new Terms.
          </p>

          <SectionHeading id="contact">13. Contact Us</SectionHeading>
          <p>
            If you have questions about these Terms or the Services, please contact us at{" "}
            <a href="mailto:info@wagerbird.com" className="underline underline-offset-4">
              info@wagerbird.com
            </a>
            .
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

