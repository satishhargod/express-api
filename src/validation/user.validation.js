const Joi = require('@hapi/joi');
const { password, objectId } = require('./custom.validation');

const checkEmail = {
  body: Joi.object()
    .keys({
      email: Joi.string().required(),
    }),
};

module.exports = {
  checkEmail
};
