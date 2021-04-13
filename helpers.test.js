const {
  mean,
  median,
  mode,
  convertAndValidateNumsArray,
} = require("./helpers");

describe("mean", function () {
  test("Mean should find average of all nums", function () {
    const res = mean([1, 3, 5, 7]);
    expect(res).toEqual(4);
  });
});

describe("median", function () {
  test("Median should find middle num in arr", function () {
    const res = median([1, 3, 5, 7, 9]);
    expect(res).toEqual(5);
  });
});

describe("mode", function () {
  test("Mode should find the value that appears most frequently", function () {
    const res = mode([1, 3, 5, 5]);
    expect(res).toEqual(5);
  });
});
