export function insertNewUser(req, res, error) {
  try {
    // to do signup process
    // 1. receive the user data
    // 2. encrypt the password
    // 3. insert user into db
    // 4. create an unique activation link and send to email

    res.json({
      status: "success",
      message: "User signup route",
    });
  } catch (error) {
    next(error);
  }
}
