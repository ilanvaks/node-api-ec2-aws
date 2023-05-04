import express from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

const dogs = [ 
  {
  name: "Paco",
  breed: "Chihauhua",
  age: 34
  },
  {
  name: "Paco",
  breed: "Chihauhua",
  age: 34
  },
  {
  name: "Paco",
  breed: "Labrador",
  age: 34
  },
  {
  name: "Paco",
  breed: "Yorki",
  age: 34
  },
  {
  name: "Bob",
  breed: "Pitbull",
  age: 34
 }
]


app.get("/", (req, res) => res.send("Welcome to my api"))

app.listen(4000, () => console.log("Api running 😎"))