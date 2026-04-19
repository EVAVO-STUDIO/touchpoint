import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: `Terms of use for the ${siteConfig.name} website operated by ${siteConfig.company}.`,
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="Last updated: April 2026">
      <p>
        These Terms of Use (<strong>"Terms"</strong>) govern your access to
        and use of the Touchpoint website (the <strong>"Site"</strong>),
        operated by <strong>{siteConfig.contact.entity}</strong> (
        <strong>"New Wave Synergy"</strong>, <strong>"we"</strong>,{' '}
        <strong>"us"</strong>). By accessing or using the Site, you agree to
        be bound by these Terms. If you do not agree, please do not use the
        Site.
      </p>

      <h2>1. About the Site</h2>
      <p>
        The Site provides information about the Touchpoint solution — a
        digital asset intelligence layer for the built environment — and
        invites enquiries regarding pilot engagements, partnerships, and
        investor conversations. The Site is informational in nature and does
        not constitute an offer to sell or a contract for services.
      </p>

      <h2>2. Permitted use</h2>
      <ul>
        <li>
          You may access and view the Site for lawful, non-commercial purposes
          related to evaluating our offering.
        </li>
        <li>
          You must not interfere with the Site's security, integrity, or
          availability; attempt to gain unauthorised access; or use it to
          transmit malicious code.
        </li>
        <li>
          You must not reproduce, distribute, or create derivative works from
          the Site's content without our prior written permission, except as
          permitted under the <em>Copyright Act 1968 (Cth)</em>.
        </li>
      </ul>

      <h2>3. Intellectual property</h2>
      <p>
        All content on the Site — including the Touchpoint name, logos,
        wordmarks, written copy, graphics, and software — is owned by or
        licensed to New Wave Synergy and is protected by Australian and
        international intellectual property laws. Nothing on the Site should
        be interpreted as granting any licence or right to use our
        intellectual property without our prior written consent.
      </p>

      <h2>4. Information accuracy</h2>
      <p>
        We aim to keep the information on the Site accurate and current, but
        we do not warrant that it is free from errors or omissions. The Site
        may describe capabilities that are under development or planned. No
        statement on the Site should be treated as professional, legal,
        engineering, financial, or investment advice.
      </p>

      <h2>5. Third-party links</h2>
      <p>
        The Site may contain links to third-party websites, including{' '}
        <a
          href={siteConfig.parent.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.parent.url.replace('https://', '')}
        </a>
        . Such links are provided for convenience only. We do not endorse, and
        are not responsible for, the content, practices, or privacy policies
        of third-party sites.
      </p>

      <h2>6. Consumer guarantees (Australia)</h2>
      <p>
        Our services come with guarantees that cannot be excluded under the{' '}
        <em>Australian Consumer Law</em> (Schedule 2 of the{' '}
        <em>Competition and Consumer Act 2010 (Cth)</em>). Nothing in these
        Terms excludes, restricts, or modifies any guarantee, right, or
        remedy to which you are entitled under that law and which cannot
        lawfully be excluded.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, and subject to Section 6:
      </p>
      <ul>
        <li>
          The Site is provided on an <strong>"as is"</strong> and{' '}
          <strong>"as available"</strong> basis without warranties of any
          kind.
        </li>
        <li>
          We are not liable for any indirect, incidental, consequential,
          special, or punitive damages, or for any loss of profits, revenue,
          data, or business opportunities arising from your use of the Site.
        </li>
        <li>
          Our total aggregate liability in connection with the Site is
          limited to AUD $100 or the resupply of services, whichever is
          greater, at our election.
        </li>
      </ul>

      <h2>8. Privacy</h2>
      <p>
        Our collection and handling of personal information is described in
        our <a href="/privacy">Privacy Policy</a>, which forms part of these
        Terms.
      </p>

      <h2>9. Changes to the Site and these Terms</h2>
      <p>
        We may modify, suspend, or discontinue any part of the Site at any
        time without notice. We may also update these Terms from time to
        time. The current version will always be available on the Site with
        the effective date shown. Continued use after changes indicates your
        acceptance.
      </p>

      <h2>10. Governing law and jurisdiction</h2>
      <p>
        These Terms are governed by the laws of Victoria, Australia, without
        regard to conflict-of-law principles. You submit to the exclusive
        jurisdiction of the courts of Victoria and the Federal Court of
        Australia in relation to any dispute arising from or in connection
        with these Terms or the Site.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms can be directed to{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
