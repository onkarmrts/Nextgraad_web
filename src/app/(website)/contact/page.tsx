export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,#241E38,#121524,#0E2A45)] px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Contact Us
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
          Get in touch with Nextgraad for support, partnership opportunities, or
          program-related queries.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Contact Info Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-10">
            <h2 className="text-xl font-bold text-[#05C8FB]">
              Contact Information
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-200 md:text-base">
              <span className="font-semibold text-white">Email:</span>{" "}
              support@nextgraad.in <br />
              <span className="font-semibold text-white">Phone:</span> +91 7400179704 <br />
              <span className="font-semibold text-white">Location:</span> India
            </p>

            <h2 className="mt-8 text-xl font-bold text-[#05C8FB]">
              Business Hours
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-200 md:text-base">
              Monday to Saturday <br />
              10:00 AM – 7:00 PM
            </p>
          </div>

          {/* Contact Form Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-10">
            <h2 className="text-xl font-bold text-[#05C8FB]">Send a Message</h2>

            <form className="mt-6 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-white/10 bg-[#121524]/60 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:border-[#05C8FB]"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-[#121524]/60 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:border-[#05C8FB]"
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-[#121524]/60 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:border-[#05C8FB]"
                required
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-[#121524]/60 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:border-[#05C8FB]"
                required
              />

              <button
                type="submit"
                className="mt-2 rounded-xl bg-[#F86815] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                Submit Message
              </button>

              <p className="text-xs text-gray-400">
                By submitting this form, you agree to Nextgraad’s Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}