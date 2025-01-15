import responseClient from '../middlewares/responseClient.js';
import { createNewSession } from '../models/session/SessionModel.js';
import { createNewUser } from '../models/user/UserModel.js';
import sendUserActivationEmail from '../services/email/emailService.js';
import { hashPassword } from '../utils/bcrypt.js';
import { v4 as uuidv4 } from 'uuid';

export async function insertNewUser(req, res, next) {
  try {
    // to do signup process

    // 1. receive the user data
    const { password } = req.body;

    // 2. encrypt the password
    req.body.password = hashPassword(password);
    console.log(req.body);

    // 3. insert user into db
    const user = await createNewUser(req.body);

    if (user?._id) {
      // 4. create an unique activation link and send to email
      const sessionData = await createNewSession({
        token: uuidv4(),
        association: user.email,
      });

      if (sessionData?._id) {
        const url =
          process.env.ROOT_URL +
          '/activate-user?sessionId=' +
          sessionData._id +
          '&token=' +
          sessionData.token;

        // 5. send email with the activation link
        console.log(url);
        const emailId = await sendUserActivationEmail({
          email: user.email,
          name: user.firstName,
          url,
        });

        if (!emailId) {
          throw new Error('Unable to send email, Try Again Later');
        }

        const message =
          'We have sent you an email with the activation link. Please check your email and follow the instructions to activate your account';
        return responseClient(req, res, message);
      }
    }
    throw new Error('Unable to create and account, Try Again Later');
  } catch (error) {
    if (error.message.includes('E11000 duplicate key error collection')) {
      error.message =
        'The email already exists for another user. Try differnt email address';
      error.statusCode = 409;
    }
    next(error);
  }
}
