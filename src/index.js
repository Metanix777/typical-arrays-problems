
exports.min = function min (array) {
  try{return (array.length > 0) ? Math.min(...array) : 0;}catch{return 0;}
}

exports.max = function max (array) {
  try{return (array.length > 0) ? Math.max(...array) : 0;}catch{return 0;}
}

exports.avg = function avg (array) {
  let count, sum=0;
  try{
    array.map(n => sum += n);
    return (array.length > 0) ? sum / array.length : 0;
  }catch {
    return 0;
  }
}

