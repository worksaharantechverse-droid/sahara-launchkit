import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(to: string, name: string) {
  await resend.emails.send({
    from: 'LaunchKit <hello@launchkit.dev>',
    to,
    subject: 'Welcome to LaunchKit!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>Welcome, ${name}!</h1>
        <p>Thanks for joining LaunchKit. Here's how to get started:</p>
        <ol>
          <li>Complete your profile</li>
          <li>Explore the dashboard</li>
          <li>Invite your team</li>
        </ol>
        <p>Need help? Reply to this email.</p>
        <p>Best,<br/>The LaunchKit Team</p>
      </div>
    `
  })
}

export async function sendInvoiceEmail(to: string, name: string, amount: number, invoiceId: string) {
  await resend.emails.send({
    from: 'LaunchKit <billing@launchkit.dev>',
    to,
    subject: `Invoice #${invoiceId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>Invoice #${invoiceId}</h1>
        <p>Dear ${name},</p>
        <p>Your payment of $${amount.toFixed(2)} has been processed.</p>
        <p>Thank you for your business!</p>
      </div>
    `
  })
}

export async function sendResetPasswordEmail(to: string, resetUrl: string) {
  await resend.emails.send({
    from: 'LaunchKit <password@launchkit.dev>',
    to,
    subject: 'Reset your password',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>Password Reset</h1>
        <p>Click the link below to reset your password:</p>
        <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px;">
          Reset Password
        </a>
        <p>This link expires in 1 hour.</p>
      </div>
    `
  })
}
