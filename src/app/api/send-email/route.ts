
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// Read required environment variables
function getEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

// Escape user-provided content before inserting it into HTML
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    // Basic request size check
    const contentLength = Number(
      request.headers.get("content-length") || 0
    );

    if (contentLength > 20_000) {
      return NextResponse.json(
        { success: false, message: "Request is too large." },
        { status: 413 }
      );
    }

    let body: Record<string, unknown>;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    // Get form information
    const firstName = getString(body.firstName);
    const lastName = getString(body.lastName);
    const email = getString(body.email);
    const phone = getString(body.phone);
    const countryCode = getString(body.countryCode);
    const company = getString(body.company);
    const jobTitle = getString(body.jobTitle);
    const message = getString(body.message);

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (
      firstName.length > 100 ||
      lastName.length > 100 ||
      email.length > 254 ||
      phone.length > 40 ||
      countryCode.length > 20 ||
      company.length > 150 ||
      jobTitle.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields are too long.",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // SMTP configuration
    const SMTP_HOST = getEnv("SMTP_HOST");
    const SMTP_PORT = Number(getEnv("SMTP_PORT"));
    const SMTP_USER = getEnv("SMTP_USER");
    const SMTP_PASSWORD = getEnv("SMTP_PASSWORD");

    // Email configuration
    const MAIL_FROM = getEnv("MAIL_FROM");
    const MAIL_TO = getEnv("MAIL_TO");

    // Company information
    const COMPANY_NAME =
      process.env.COMPANY_NAME || "Arihant Staffing";

    const COMPANY_EMAIL =
      process.env.COMPANY_EMAIL || MAIL_TO;

    const COMPANY_PHONE =
      process.env.COMPANY_PHONE || "";

    const WEBSITE_URL =
      process.env.WEBSITE_URL || "https://arihantstaffing.com";

    if (![465, 587].includes(SMTP_PORT)) {
      throw new Error("SMTP_PORT must be 465 or 587.");
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    // Safe HTML values
    const safe = {
      firstName: escapeHtml(firstName),
      lastName: escapeHtml(lastName),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      countryCode: escapeHtml(countryCode),
      company: escapeHtml(company || "Not provided"),
      jobTitle: escapeHtml(jobTitle || "Not provided"),
      message: escapeHtml(message).replace(/\r?\n/g, "<br />"),
      companyName: escapeHtml(COMPANY_NAME),
      companyEmail: escapeHtml(COMPANY_EMAIL),
      companyPhone: escapeHtml(COMPANY_PHONE || "Contact us by email"),
      websiteUrl: escapeHtml(WEBSITE_URL),
    };

    const fullName = `${safe.firstName} ${safe.lastName}`;

    // ==========================================
    // EMAIL 1: SEND ENQUIRY TO ADMIN
    // ==========================================

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: `New Website Enquiry - ${firstName} ${lastName}`,

      text: `
New contact form enquiry received.

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${countryCode} ${phone}
Company: ${company || "Not provided"}
Job Title: ${jobTitle || "Not provided"}

Message:
${message}
      `,

      html: `
        <div style="max-width:650px;margin:auto;font-family:Arial,sans-serif;color:#253047;padding:20px">
          <h2 style="color:#12356b">New Website Enquiry</h2>
          <p>You have received a new enquiry from the Arihant Staffing website.</p>

          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:12px;border:1px solid #ddd"><strong>Name</strong></td>
              <td style="padding:12px;border:1px solid #ddd">${fullName}</td>
            </tr>
            <tr>
              <td style="padding:12px;border:1px solid #ddd"><strong>Email</strong></td>
              <td style="padding:12px;border:1px solid #ddd">${safe.email}</td>
            </tr>
            <tr>
              <td style="padding:12px;border:1px solid #ddd"><strong>Phone</strong></td>
              <td style="padding:12px;border:1px solid #ddd">${safe.countryCode} ${safe.phone}</td>
            </tr>
            <tr>
              <td style="padding:12px;border:1px solid #ddd"><strong>Company</strong></td>
              <td style="padding:12px;border:1px solid #ddd">${safe.company}</td>
            </tr>
            <tr>
              <td style="padding:12px;border:1px solid #ddd"><strong>Job Title</strong></td>
              <td style="padding:12px;border:1px solid #ddd">${safe.jobTitle}</td>
            </tr>
          </table>

          <h3 style="margin-top:25px">Message / Requirements</h3>

          <div style="padding:18px;background:#f8fafc;border:1px solid #e5e7eb;line-height:1.7">
            ${safe.message}
          </div>

          <p style="margin-top:25px;color:#64748b;font-size:12px">
            Submitted through ${safe.companyName}.
          </p>
        </div>
      `,
    });

    // ==========================================
    // EMAIL 2: SEND THANK-YOU EMAIL TO CUSTOMER
    // ==========================================

    let confirmationSent = false;

    try {
      await transporter.sendMail({
        from: MAIL_FROM,
        to: email,
        replyTo: MAIL_TO,

        subject: "Thank You! We've Received Your Request - Arihant Staffing",

        text: `
Thank You! We've Received Your Request.

Thank you for reaching out to ${COMPANY_NAME}. We appreciate your interest in our services.

Our team has successfully received your inquiry and will review the information you've submitted. One of our specialists will contact you within 1 business day to discuss your requirements and the next steps.

What Happens Next?

- Our team reviews your request.
- We match your requirements with the right specialist.
- We contact you via email or phone to schedule a consultation.
- We discuss your hiring goals and recommend the best workforce solution.

Need Immediate Assistance?

Email: ${COMPANY_EMAIL}
Phone: ${COMPANY_PHONE}

While You Wait, Explore Our Services:

- IT Staffing
- Global Capability Center (GCC) Solutions
- Healthcare Staffing
- Contract & Permanent Hiring
- Recruitment Process Outsourcing (RPO)

We look forward to helping you build exceptional teams.

Thank you for choosing ${COMPANY_NAME}.
${WEBSITE_URL}
        `,

        html: `
          <div style="margin:0;padding:35px 15px;background:#f4f6fa;font-family:Arial,Helvetica,sans-serif;color:#253047">

            <div style="max-width:650px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">

              <div style="padding:35px 30px;background:#12356b;color:#ffffff">
                <h1 style="margin:0;font-size:28px">Thank You!</h1>
                <p style="margin:10px 0 0;font-size:16px;color:#e2eaff">
                  We've Received Your Request.
                </p>
              </div>

              <div style="padding:30px">

                <p style="font-size:16px;line-height:1.7">
                  Hello ${safe.firstName},
                </p>

                <p style="font-size:15px;line-height:1.8">
                  Thank you for reaching out to
                  <strong>${safe.companyName}</strong>.
                  We appreciate your interest in our services.
                </p>

                <p style="font-size:15px;line-height:1.8">
                  Our team has successfully received your inquiry and will review
                  the information you've submitted. One of our specialists will
                  contact you within <strong>1 business day</strong> to discuss
                  your requirements and the next steps.
                </p>

                <h3 style="color:#12356b;margin-top:28px">
                  What Happens Next?
                </h3>

                <div style="font-size:14px;line-height:2">
                  ✓ Our team reviews your request.<br />
                  ✓ We match your requirements with the right specialist.<br />
                  ✓ We contact you via email or phone to schedule a consultation.<br />
                  ✓ We discuss your hiring goals and recommend the best workforce solution.
                </div>

                <div style="padding:20px;margin-top:25px;background:#f4f7fc;border-radius:8px">

                  <h3 style="margin:0 0 10px;color:#12356b">
                    Need Immediate Assistance?
                  </h3>

                  <p style="font-size:14px;line-height:1.7">
                    If your requirement is urgent, feel free to contact us directly.
                  </p>

                  <p style="font-size:14px">
                    <strong>Email:</strong>
                    <a href="mailto:${safe.companyEmail}" style="color:#1d4ed8">
                      ${safe.companyEmail}
                    </a>
                  </p>

                  <p style="font-size:14px">
                    <strong>Phone:</strong> ${safe.companyPhone}
                  </p>

                </div>

                <h3 style="color:#12356b;margin-top:28px">
                  While You Wait...
                </h3>

                <p style="font-size:14px;line-height:1.7">
                  Explore more about our services:
                </p>

                <ul style="font-size:14px;line-height:2;padding-left:22px">
                  <li>IT Staffing</li>
                  <li>Global Capability Center (GCC) Solutions</li>
                  <li>Healthcare Staffing</li>
                  <li>Contract &amp; Permanent Hiring</li>
                  <li>Recruitment Process Outsourcing (RPO)</li>
                </ul>

                <p style="font-size:15px;line-height:1.8;margin-top:28px">
                  We look forward to helping you build exceptional teams.
                </p>

                <p style="font-size:15px;line-height:1.8">
                  Thank you for choosing <strong>${safe.companyName}</strong>.
                </p>

                <p style="margin-top:25px">
                  <a href="${safe.websiteUrl}" style="color:#1d4ed8">
                    Visit our website
                  </a>
                </p>

              </div>

              <div style="padding:20px 30px;background:#f4f6fa;text-align:center;color:#64748b;font-size:12px">
                © ${new Date().getFullYear()} ${safe.companyName}. All rights reserved.
              </div>

            </div>
          </div>
        `,
      });

      confirmationSent = true;

    } catch (confirmationError) {
      // Admin email was already sent, so do not report the enquiry as lost.
      console.error("Customer confirmation email failed:", confirmationError);
    }

    return NextResponse.json({
      success: true,
      confirmationSent,
      message: confirmationSent
        ? "Your enquiry has been submitted successfully."
        : "Your enquiry was received, but the confirmation email could not be sent.",
    });

  } catch (error) {
    console.error("Email API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your enquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
