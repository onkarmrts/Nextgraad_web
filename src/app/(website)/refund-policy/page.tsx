export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,#241E38,#121524,#0E2A45)] px-4 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Refund Policy
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
          This Refund Policy describes the conditions under which Nextgraad
          processes refunds for paid services and programs.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-10">
          <h2 className="text-xl font-bold text-[#05C8FB]">
            1. Refund Eligibility
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            Refunds are applicable only in valid cases such as payment deduction
            without enrollment confirmation, duplicate payments, or technical
            errors.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            2. Non-Refundable Cases
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-200 md:text-base">
            <li>If access to the program/course has already been provided</li>
            <li>If sessions or learning resources have already been delivered</li>
            <li>If the request is raised after the refund validity period</li>
          </ul>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            3. Refund Request Process
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            To request a refund, email us at{" "}
            <span className="font-semibold text-[#F86815]">
              support@nextgraad.in
            </span>{" "}
            with payment proof and registered contact details.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            4. Processing Time
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            If approved, the refund will be processed within{" "}
            <span className="font-semibold text-[#9981BD]">
              7 to 10 working days
            </span>{" "}
            to the original payment method.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
            5. Final Decision
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-200 md:text-base">
            Nextgraad reserves the right to approve or reject refund requests
            after internal verification.
          </p>
        </div>
      </div>
    </div>
  );
}