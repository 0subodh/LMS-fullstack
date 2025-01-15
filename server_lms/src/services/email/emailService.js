import emailTransporter from './transport.js';
import userActivationEmailTemplate from './emailTemplate.js';

export default async function sendUserActivationEmail({ email, name, url }) {
  const transporter = emailTransporter();
  const message = userActivationEmailTemplate({ email, name, url });
  try {
    const info = await transporter.sendMail(message);
    console.log('User activation email sent:', info.messageId);
    return info.messageId;
  } catch (error) {
    console.error('Error sending user activation email:', error);
    return false;
  }
}
