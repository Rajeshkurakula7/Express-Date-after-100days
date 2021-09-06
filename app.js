const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const TodayDate = new Date();
  const result = addDays(
    new Date(
      TodayDate.getFullYear(),
      TodayDate.getMonth(),
      TodayDate.getDate()
    ),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

app.listen(2000);
module.exports = app;
