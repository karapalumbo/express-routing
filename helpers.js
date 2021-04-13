function mean(nums) {
  let total = 0;
  let i;
  for (i = 0; i < nums.length; i += 1) {
    total += nums[i];
  }
  return total / nums.length;
}

function convertAndValidateNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNumber = Number(numsAsStrings[i]);

    if (Number.isNaN(valToNumber)) {
      return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(valToNumber);
  }
  return result;
}

function median(nums) {
  nums.sort((a, b) => a - b);

  let mid = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[mid] + nums[mid - 1]) / 2;
  } else {
    median = nums[mid];
  }
  return median;
}

function mode(arr) {
  let mode = {};
  let max = 0;
  let count = 0;

  arr.forEach(function (e) {
    if (mode[e]) {
      mode[e]++;
    } else {
      mode[e] = 1;
    }

    if (count < mode[e]) {
      max = e;
      count = mode[e];
    }
  });

  return max;
}

module.exports = {
  mean,
  median,
  mode,
  convertAndValidateNumsArray,
};
