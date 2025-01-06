import { createNewUser } from '../models/user/UserModel.js';
import { hashPassword } from '../utils/bcrypt.js';

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
      res.json({
        status: 'success',
        message: 'User signup route',
      });
    }

    res.json({
      status: 'error',
      message: 'Unable to create and account, Try Again Later',
    });
  } catch (error) {
    if (error.message.includes('E11000 duplicate key error collection')) {
      error.message =
        'The email already exists for another user. Try differnt email address';
      error.statusCode = 409;
    }
    next(error);
  }
}
