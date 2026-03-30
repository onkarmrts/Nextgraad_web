export default function TermsPage() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,#241E38,#121524,#0E2A45)] px-4 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Terms of Service
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
          These Terms of Service govern your use of the Nextgraad platform,
          services, programs, and learning resources.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-10">
          <h2 className="text-xl font-bold text-[#05C8FB]">
            1. Acceptance of Terms
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            By using our platform, you agree to follow these Terms. If you do
            not agree, please stop using Nextgraad services.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            2. Services Offered
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            Nextgraad provides career programs, AI ecosystem tools, internships,
            and recruitment-related services.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            3. User Responsibilities
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-200 md:text-base">
            <li>You must provide accurate information while registering</li>
            <li>You must not misuse the platform for illegal activities</li>
            <li>
              You must not copy, distribute, or resell Nextgraad learning
              content
            </li>
          </ul>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            4. Payments
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            Payments are mandatory for paid programs. Access to paid services is
            provided only after successful payment confirmation.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            5. Intellectual Property
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            All content including videos, training material, branding, and
            documentation are intellectual property of Nextgraad and must not be
            reused without written permission.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            6. Limitation of Liability
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            Nextgraad is not responsible for indirect losses, including missed
            opportunities or damages due to reliance on our services.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            7. Changes to Terms
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            Nextgraad may update these Terms at any time. Continued usage means
            you accept the updated Terms.
          </p>
        </div>
      </div>
    </div>
  );
}