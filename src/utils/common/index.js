import { omitBy, isNil } from 'lodash';
import bookshelf from '../../db/bookshelf';
import env from '../../env';
const encryptor = require('simple-encryptor')(env.MY_SECRET_KEY);

export const modelOmitNull = context => (
  omitBy(bookshelf.Model.prototype.toJSON.apply(context), isNil)
);

export const encryptPassword = (password) => {
  return encryptor.encrypt(password);
}

export const decryptPassword = (password) => {
  return encryptor.decrypt(password);
}