const express = require("express");
const app = express();
const ExpressError = require("./expressError");

const {
  mean,
  median,
  mode,
  convertAndValidateNumsArray,
} = require("./helpers");

app.get("/mean", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("Nums are required", 400);
  }

  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mean",
    result: mean(nums),
  };

  return res.send(result);
});

app.get("/median", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("Nums are required", 400);
  }

  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "median",
    result: median(nums),
  };

  return res.send(result);
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("Nums are required", 400);
  }

  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mode",
    result: mode(nums),
  };

  return res.send(result);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
