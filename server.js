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

let quizzes = [
  {
    _id: "123",
    title: "Q1"
  },
  {
    _id: "234",
    title: "Q2"
  },
  {
    _id: "345",
    title: "Q3"
  },
  {
    _id: "456",
    title: "Q4"
  },
  {
    _id: "567",
    title: "Q5"
  }
]

const questions = [
  {
    _id: "123", question: "What's your favorite color?", quizId: "123"
  },
  {
    _id: "234", question: "What's your favorite pet?", quizId: "123"
  },
  {
    _id: "345", question: "What's your favorite car?", quizId: "123"
  },
  {
    _id: "456", question: "What's your favorite flavor?", quizId: "234"
  },
  {
    _id: "567", question: "What's your favorite brand?", quizId: "234"
  },
  {
    _id: "678", question: "What's your favorite season?", quizId: "345"
  }
]

app.get("/api/questions", (req, res) =>
    res.send(questions))

app.get("/api/quizzes/:qid/questions", (req, res) =>
    res.send(questions.filter(q => q.quizId === req.params['qid'])))

app.get("/api/quizzes", (req, res) =>
    res.send(quizzes))

app.get("/api/quizzes/:qid", (req, res) =>
    res.send(quizzes.find(q => q._id === req.params['qid'])))

app.listen(3000)

console.log("How may I serve you?")
