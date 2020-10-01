
exports.min = function min (array) {
  if (array === undefined || array[0] === undefined) return 0;
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
    if (array === undefined || array[0] === undefined) return 0;
    return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    if (array != undefined || array[0] != undefined) return array.reduce((a, b) => a + b, 0) / array.length;
    return 0;
}
