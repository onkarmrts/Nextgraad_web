export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,#241E38,#121524,#0E2A45)] px-4 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
          This Privacy Policy explains how Nextgraad collects, uses, and protects
          your personal information when you access our platform, services, and
          programs.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-10">
          <h2 className="text-xl font-bold text-[#05C8FB]">
            1. Information We Collect
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            We may collect personal details such as your name, email address,
            phone number, educational background, and course preferences when
            you fill out forms, register for programs, or contact us.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            2. How We Use Your Information
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-200 md:text-base">
            <li>To respond to your inquiries and requests</li>
            <li>To provide course information and program updates</li>
            <li>To improve our platform and user experience</li>
            <li>To send relevant communication (if opted in)</li>
          </ul>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            3. Data Security
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            We implement appropriate security measures to protect your personal
            data. However, no online system is completely secure and we cannot
            guarantee absolute protection.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            4. Cookies
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            We may use cookies to improve site performance and analyze user
            behavior. You can control cookies through your browser settings.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            5. Third-Party Services
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            We may use trusted third-party services for analytics, payments, or
            communication. These services may collect limited information
            necessary to provide functionality.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            6. Contact Information
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            If you have questions about this Privacy Policy, contact us at{" "}
            <span className="font-semibold text-[#F86815]">
              support@nextgraad.in
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}