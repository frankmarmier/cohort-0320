module.exports = function isAuthenticated(request, response, next) {
  console.log("User is authenticated... please proceed");
  if (false) {
    next();
  } else {
    response.redirect("/signin");
  }
};
