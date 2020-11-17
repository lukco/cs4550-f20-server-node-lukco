const express = require("express")
const app = express()

// @GetMapping("/hello")
// public String function() {
//  return "Hello World";
// }
/*app.get('/hello', (req, res) =>
    res.send('Hello World'))

app.get('/add/:a/:b', (req, res) => {
  const a = parseInt(req.params['a'])
  const b = parseInt(req.params['b'])
  const c = a + b
  res.send({c: c})
})*/

/*const quizzesService = require("./services/quizzes-service")
quizzesService(app)*/

// to simplify it further, we can just do
// if you need quizzesService as a variable, then you can keep it
require("./controllers/quizzes-controller")(app)

/*const questionsService = require("./services/questions-service")
questionsService(app)*/
require("./controllers/questions-controller")(app)

app.listen(3000)

console.log("How may I serve you?")
