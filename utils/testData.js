/**
 * Centralized test data. In a real project this could be split per-module
 * or pulled from a fixtures JSON / API / database seed.
 */
const users = {
  validUser: {
    username: process.env.TEST_USERNAME || 'standard_user',
    password: process.env.TEST_PASSWORD || 'secret_sauce',
  },
  invalidUser: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
};

const messages = {
  invalidLogin: 'Username and password do not match',
};

module.exports = { users, messages };
