const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const expressJwt = require("express-jwt");

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client", "build")));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/vidly",
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false,
    useUnifiedTopology: true
  },
  () => console.log(`[+] Connected to the DB`)
);

//Routes
app.use("/auth", require("./routes/authRouter.js"));
app.use("/api", expressJwt({ secret: process.env.SECRET }));
app.use("/api/user", require("./routes/userRouter.js"));
app.use("/api/booking", require("./routes/bookingRouter.js"));
app.use("/location", require("./routes/locationRouter.js"));

//Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`[o] Server is running on port ${PORT}`);
});
