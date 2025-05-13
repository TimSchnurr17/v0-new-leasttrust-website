"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Define validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract data from form
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    const result = contactSchema.safeParse({
      name,
      email,
      phone,
      subject,
      message,
    })

    if (!result.success) {
      return {
        success: false,
        message: "Invalid form data. Please check your inputs.",
      }
    }

    // Configure email transport
    // For production, use your actual SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || "smtp.example.com",
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER || "your-email@example.com",
        pass: process.env.EMAIL_PASSWORD || "your-password",
      },
    })

    // Compose email
    const mailOptions = {
      from: `"LeastTrust Website" <${process.env.EMAIL_FROM || "contact@leasttrust.com"}>`,
      to: process.env.EMAIL_TO || "contact@leasttrust.com",
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    // In development, log the email instead of sending it
    if (process.env.NODE_ENV === "development") {
      console.log("Email would be sent:", mailOptions)
      return { success: true }
    } else {
      await transporter.sendMail(mailOptions)
      return { success: true }
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}
