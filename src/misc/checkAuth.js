module.exports.checkAuth = function () {
  return (req, next) => {
    let headerValue = req.get('auth');
    let realToken = process.env.TOKEN;

    if (!headerValue || headerValue !== realToken) throw new Error(401);

    next();
  }
}