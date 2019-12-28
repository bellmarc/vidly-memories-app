const express = require("express");
const bookingRouter = express.Router();
const Booking = require("../models/booking.js");

//getAll
bookingRouter.get("/", (req, res, next) => {
  Booking.find((err, bookings) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(bookings);
  });
});

//getByUser
bookingRouter.get("/:_clientId", (req, res, next) => {
  Booking.find((err, bookings) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(bookings);
  });
});

//Post
bookingRouter.post("/:_proId", (req, res, next) => {
  req.body.clientId = req.user._id;
  req.body.proId = req.params._proId;
  console.log(req.user.proId);
  const newBooking = new Booking(req.body);
  //save professional's ID to booking & client
  newBooking.save((err, savedBooking) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedBooking);
  });
});

module.exports = bookingRouter;
