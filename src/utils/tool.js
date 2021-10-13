module.exports = {
  getRangeHeight: (min, max, minH, maxH, value) => {
    let rate = (maxH - minH) / (max - min)
    return rate * value + minH
  }
}
