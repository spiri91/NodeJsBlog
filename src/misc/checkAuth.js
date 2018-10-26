module.exports.checkAuth = function () {
  return (req) => {
    let headerValue = req.get('auth');
    let realToken = process.env.TOKEN;

    if (!headerValue || headerValue !== realToken) throw new Error(401);
  }
}