const nodemailer = require("nodemailer");

async function sendOrderConfirmation({ to, name, order }) {
  if (process.env.EMAIL_ENABLED !== "true") return;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: `QuickCart order #${order.id} confirmed`,
    text:
      `Hello ${name},\n\n` +
      `Your order #${order.id} has been confirmed.\n` +
      `Total: ₹${Number(order.totalAmount).toLocaleString("en-IN")}\n\n` +
      `Thank you for shopping with QuickCart.`
  });
}

module.exports = { sendOrderConfirmation };
