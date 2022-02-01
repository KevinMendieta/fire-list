const admin = require("firebase-admin");

// Initialize Firebase
admin.initializeApp();

const triggers = require("./src/triggers");

module.exports = {
  triggers,
};
