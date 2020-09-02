const express = require("express");
const app = express();
// const app = require("express")();

app.get("/", (req, res) => {
  //when there is request from the client on the browser then this line is happening
  res.send({});
});

app.listen(8080, (error) => {
  if (error) {
    console.log("There is an error running the surver");
  } else {
    console.log("Server is running on port", 8080);
  }
});
