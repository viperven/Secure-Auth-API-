const emailvalidator = require("email-validator");
const generateUniqueId = require("generate-unique-id");

const validateEmail = (userEmail) => {
  return emailvalidator.validate(userEmail);
};

const uni = () => {
  let data = generateUniqueId({
    length: 7,
    useLetters: false,
    useNumbers: true,
  });
  return data;
};

module.exports = { validateEmail, uni };
