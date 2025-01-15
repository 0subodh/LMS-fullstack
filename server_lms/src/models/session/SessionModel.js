import SessionSchema from './SessionSchema.js';

// insert new session
export const createNewSession = (sessionData) => {
  return SessionSchema.create(sessionData);
};
