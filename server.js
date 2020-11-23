const express = require("express")
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whiteboard', {useNewUrlParser: true});

const quizSchema = mongoose.Schema({
  name: String,
  avg: Number
}, {collection: "quizzes"})

// java = repositories, mongoose = model
// can't have 2 models with the same name!
const quizModel = mongoose.model("QuizModel", quizSchema)

quizModel.find()
.then(quizzes => console.log(quizzes))

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

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});


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
