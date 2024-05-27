const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res,
    json([
      {
        id: "1",
        title: "Book review ",
      },
      {
        id: "2",
        title: "Book review 2",
      },
      {
        id: "3",
        title: "Book review 3",
      },
    ]);
});
const port = 4000;
app.listen("localhost", port, () => {
  console.log("listening on port");
});
