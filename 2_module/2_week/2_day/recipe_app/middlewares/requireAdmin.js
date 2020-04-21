module.exports = function (roles) {
  return function (req, res, next) {
    if (roles.includes(req.session.currentUser.role)) {
      next();
    } else {
      res.redirect("/");
    }
  };
};
