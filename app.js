module.exports = function (app) {
  app.get('/hello', function (req, res, next) {
    res.send('Hello world')
  })
}
