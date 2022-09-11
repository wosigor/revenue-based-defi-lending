const express = require("express");
const bodyParser = require("body-parser");

const borrowersRoutes = require("./routes/borrowers-routes");
const lendersRoutes = require("./routes/lenders-routes");

const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/borrowers", borrowersRoutes);
app.use("/lenders", lendersRoutes);

app.use("/", (req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    // means that for some reason a response has already been sent
    next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error ocurred!" });
});

app.listen(5000);
