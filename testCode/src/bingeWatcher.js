var logIn = function login(x, y) {
  if (typeof x !== "string" || typeof y !== "string") {
    throw new Error("Please enter your first and last name.");
  }

  return x + ' ' + y;
};

module.exports = logIn;