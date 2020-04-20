module.exports = function (roles) {
  let user = {
    role: "ironhacker",
  };

  return function (request, response, next) {
    if (roles.includes(user.role)) {
      next();
    } else {
      response.redirect("/signin");
    }
  };
};
