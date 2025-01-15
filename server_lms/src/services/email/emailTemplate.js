export default function userActivationEmailTemplate({ email, name, url }) {
  const message = {
    from: `Library Management System <${process.env.SMTP_EMAIL}>`,
    to: email,
    subject: 'Activate Your New Account ✔',
    text: `Hello ${name}, please activate your account by clicking the link below.${url}`,
    html: `
      <h1>Hello ${name},</h1>
      <p>Please activate your account by clicking the link below.</p>
      <a href="${url}">Activate Account</a>
    `,
  };
  return message;
}
