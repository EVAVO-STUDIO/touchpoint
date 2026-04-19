import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.name} by ${siteConfig.company}, in accordance with the Australian Privacy Act 1988 and Australian Privacy Principles.`,
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="Last updated: April 2026">
      <p>
        This Privacy Policy explains how <strong>{siteConfig.contact.entity}</strong>{' '}
        (<strong>"New Wave Synergy"</strong>, <strong>"we"</strong>,{' '}
        <strong>"us"</strong>, <strong>"our"</strong>) collects, uses,
        discloses, and protects personal information in relation to the
        Touchpoint website and service. We are committed to handling personal
        information in accordance with the{' '}
        <em>Privacy Act 1988 (Cth)</em> and the Australian Privacy Principles
        (APPs).
      </p>

      <h2>1. Information we collect</h2>
      <p>
        We collect personal information that is reasonably necessary for our
        business activities. This may include:
      </p>
      <ul>
        <li>
          <strong>Contact details</strong> — name, company, email address,
          phone number, and job title when you submit an enquiry or request a
          pilot conversation.
        </li>
        <li>
          <strong>Enquiry content</strong> — messages, project details, and
          other information you choose to share with us.
        </li>
        <li>
          <strong>Technical information</strong> — limited analytics and log
          data (e.g. device type, approximate location, pages viewed) used to
          operate and improve this website.
        </li>
      </ul>

      <h2>2. How we collect information</h2>
      <p>
        We collect personal information directly from you when you interact
        with our website, submit the contact form, send us an email, or call
        us. Where lawful and practicable, we give you the option of dealing
        with us anonymously or under a pseudonym.
      </p>

      <h2>3. Why we collect and use information</h2>
      <ul>
        <li>To respond to enquiries and partnership opportunities.</li>
        <li>To evaluate, scope, and deliver pilot deployments.</li>
        <li>To provide and improve the Touchpoint service.</li>
        <li>To comply with legal and regulatory obligations.</li>
        <li>
          To send occasional service-related or business communications where
          you have consented or where permitted under the{' '}
          <em>Spam Act 2003 (Cth)</em>.
        </li>
      </ul>

      <h2>4. Disclosure of personal information</h2>
      <p>We may disclose personal information to:</p>
      <ul>
        <li>Our staff, contractors, and service providers acting on our behalf.</li>
        <li>
          Technology providers that host our website, email, or data
          infrastructure (including providers located outside Australia, such
          as the United States and the European Union).
        </li>
        <li>
          Professional advisors (legal, financial, accounting) when reasonably
          necessary.
        </li>
        <li>
          Regulators, law enforcement, or other parties where required or
          authorised by law.
        </li>
      </ul>
      <p>
        Where we disclose personal information overseas, we take reasonable
        steps to ensure the overseas recipient does not breach the APPs.
      </p>

      <h2>5. Cookies and analytics</h2>
      <p>
        This website uses a limited number of cookies and similar technologies
        to operate essential functionality (for example, remembering your
        theme preference). We may also use privacy-respecting analytics to
        understand aggregate site usage. You can disable cookies in your
        browser settings; some functionality may be affected.
      </p>

      <h2>6. Storage and security</h2>
      <p>
        We take reasonable steps to protect personal information from misuse,
        interference, loss, and unauthorised access, modification, or
        disclosure. This includes access controls, encrypted transport, and
        secure cloud infrastructure. No method of transmission over the
        internet is completely secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>7. Retention</h2>
      <p>
        We retain personal information only for as long as is necessary for
        the purposes for which it was collected, to comply with our legal
        obligations, or to resolve disputes. When no longer required, we take
        reasonable steps to destroy or de-identify the information.
      </p>

      <h2>8. Your rights</h2>
      <p>Under the Privacy Act and APPs, you have the right to:</p>
      <ul>
        <li>Request access to personal information we hold about you.</li>
        <li>Request correction of inaccurate or out-of-date information.</li>
        <li>Ask us to stop sending marketing communications.</li>
        <li>
          Make a complaint about how we have handled your personal information.
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us using the details in
        Section 10. We will respond within a reasonable period (generally
        within 30 days).
      </p>

      <h2>9. Complaints</h2>
      <p>
        If you believe we have breached the APPs, please contact us first so
        we can investigate and attempt to resolve the issue. If you are not
        satisfied with our response, you may contact the Office of the
        Australian Information Commissioner (OAIC) at{' '}
        <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
          oaic.gov.au
        </a>
        .
      </p>

      <h2>10. Contact us</h2>
      <p>
        Questions, requests, or complaints regarding this Privacy Policy
        should be directed to:
      </p>
      <p>
        <strong>{siteConfig.contact.person}</strong>
        <br />
        {siteConfig.contact.role}, {siteConfig.contact.entity}
        <br />
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        <br />
        {siteConfig.contact.phoneDisplay}
      </p>

      <h2>11. Updates to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The current
        version, with the effective date shown at the top of the page, will
        always be available on this website. Material changes will be
        communicated where reasonably practicable.
      </p>
    </LegalPage>
  );
}
