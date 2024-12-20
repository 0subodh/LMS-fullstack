import userSchema from "./UserSchema";

// insert new user
export const insertUser = (userObj) => {
  return userSchema(userObj).save();
};
