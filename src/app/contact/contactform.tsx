
"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  company: string;
  jobTitle: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData | "submit", string>>;

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "+1",
  phone: "",
  company: "",
  jobTitle: "",
  message: "",
};

const countries = [
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
];

export default function PremiumContactForm() {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [formErrors, setFormErrors] =
    useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update form fields
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
      submit: "",
    }));
  };

  // Validate form
  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^[0-9\s()+.-]{7,20}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please tell us about your requirements.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Please enter at least 10 characters.";
    }

    return errors;
  };

  // Submit form and send two emails through the API
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          countryCode: formData.countryCode,
          company: formData.company.trim(),
          jobTitle: formData.jobTitle.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      // Admin email was successfully sent.
      setIsSuccess(true);
      setFormData(initialFormData);

      if (!result.confirmationSent) {
        console.warn(
          "Enquiry delivered to admin, but customer confirmation email failed."
        );
      }
    } catch (error) {
      console.error("Contact form submission error:", error);

      setFormErrors({
        submit:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success screen
  if (isSuccess) {
    return (
      <section className="w-full">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/50 sm:p-12">

          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
            <svg
              className="h-10 w-10 text-emerald-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 12.5 10 17l9-10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
            Successfully Submitted
          </p>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Thank You!
          </h2>

          <p className="mb-3 text-lg font-semibold text-slate-700">
            We've Received Your Request.
          </p>

          <p className="mx-auto mb-8 max-w-lg text-sm leading-7 text-slate-500">
            Thank you for reaching out to Arihant Staffing.
            Our team has successfully received your inquiry
            and will review your requirements. One of our
            specialists will contact you within 1 business day.
          </p>

          <div className="mb-8 rounded-2xl bg-slate-50 p-6 text-left">
            <h3 className="mb-4 font-bold text-slate-900">
              What Happens Next?
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "Our team reviews your request.",
                "We match your requirements with the right specialist.",
                "We contact you via email or phone.",
                "We discuss your hiring goals and recommend the best workforce solution.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-emerald-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-7 text-sm text-slate-500">
            Need immediate assistance? Contact us at{" "}
            <a
              href="mailto:info@arihantstaffing.com"
              className="font-semibold text-brand-blue-600 hover:underline"
            >
              info@arihantstaffing.com
            </a>
            .
          </p>

          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Submit Another Enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-4xl">

        {/* Form heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600">
            Get In Touch
          </p>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let's Build Your{" "}
            <span className="text-brand-blue-600">Dream Team.</span>
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-slate-500">
            Tell us about your hiring requirements. Our staffing
            specialists will connect with you to explore the
            right workforce solutions for your business.
          </p>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {/* First name */}
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                maxLength={100}
                aria-invalid={!!formErrors.firstName}
                className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                  formErrors.firstName
                    ? "border-red-400"
                    : "border-slate-200"
                }`}
              />

              {formErrors.firstName && (
                <p className="mt-2 text-xs text-red-500">
                  {formErrors.firstName}
                </p>
              )}
            </div>

            {/* Last name */}
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Last Name <span className="text-red-500">*</span>
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                maxLength={100}
                aria-invalid={!!formErrors.lastName}
                className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                  formErrors.lastName
                    ? "border-red-400"
                    : "border-slate-200"
                }`}
              />

              {formErrors.lastName && (
                <p className="mt-2 text-xs text-red-500">
                  {formErrors.lastName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Business Email <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                maxLength={254}
                aria-invalid={!!formErrors.email}
                className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                  formErrors.email
                    ? "border-red-400"
                    : "border-slate-200"
                }`}
              />

              {formErrors.email && (
                <p className="mt-2 text-xs text-red-500">
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>

              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  aria-label="Country dialing code"
                  className="w-[112px] shrink-0 rounded-xl border border-slate-200 bg-white px-2 py-3.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                >
                  {countries.map((country, index) => (
                    <option
                      key={`${country.name}-${index}`}
                      value={country.code}
                    >
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel-national"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={20}
                  aria-invalid={!!formErrors.phone}
                  className={`min-w-0 flex-1 rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                    formErrors.phone
                      ? "border-red-400"
                      : "border-slate-200"
                  }`}
                />
              </div>

              {formErrors.phone && (
                <p className="mt-2 text-xs text-red-500">
                  {formErrors.phone}
                </p>
              )}
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Company Name
              </label>

              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
                maxLength={150}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Job title */}
            <div>
              <label
                htmlFor="jobTitle"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Job Title
              </label>

              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                autoComplete="organization-title"
                placeholder="e.g. HR Manager"
                value={formData.jobTitle}
                onChange={handleChange}
                maxLength={150}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Tell Us About Your Requirements{" "}
                <span className="text-red-500">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your hiring needs, required positions, team size, timeline, or any other details..."
                value={formData.message}
                onChange={handleChange}
                maxLength={5000}
                aria-invalid={!!formErrors.message}
                className={`w-full resize-y rounded-xl border bg-white px-4 py-3.5 text-sm leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                  formErrors.message
                    ? "border-red-400"
                    : "border-slate-200"
                }`}
              />

              <div className="mt-2 flex items-center justify-between">
                {formErrors.message ? (
                  <p className="text-xs text-red-500">
                    {formErrors.message}
                  </p>
                ) : (
                  <p className="text-xs text-slate-400">
                    Please provide details about your requirements.
                  </p>
                )}

                <span className="text-xs text-slate-400">
                  {formData.message.length}/5000
                </span>
              </div>
            </div>
          </div>

          {/* API error */}
          {formErrors.submit && (
            <div
              role="alert"
              className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {formErrors.submit}
            </div>
          )}

          {/* Submit button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-brand-blue-600  px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"
                    />
                  </svg>
                  Sending Your Enquiry...
                </>
              ) : (
                <>
                  Submit Your Enquiry
                  <span aria-hidden="true">→</span>
                </>
              )}
            </button>

            <p className="mt-4 text-xs leading-6 text-slate-400">
              By submitting this form, you agree to be contacted
              by Arihant Staffing regarding your enquiry.
              We aim to respond within 1 business day.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
