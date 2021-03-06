const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../errors/unauthorized-err');
const { emailNotValid, emailOrPasswordNotTrue } = require('../utils');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 300,
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: emailNotValid,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError(emailOrPasswordNotTrue);
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError(emailOrPasswordNotTrue);
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
