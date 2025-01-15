import responseClient from './responseClient.js';

export default function errorHandler(error, req, res, next) {
  const statusCode = error.statusCode || 500;
  const message = error.message;
  responseClient(req, res, message, statusCode);
}
