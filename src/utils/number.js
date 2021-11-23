/**
 *
 * @param {number} num Number to shorten.
 * @param {number} [digits=0] The number of digits to appear after the decimal point.
 * @returns {string|number}
 *
 * @example
 * // returns '12.5k'
 * shortenLargeNumber(12543, 1)
 *
 */
const shortenLargeNumber = (num, digits) => {
  var units = ["k", "M", "G", "T", "P", "E", "Z", "Y"],
    decimal

  for (var i = units.length - 1; i >= 0; i--) {
    decimal = Math.pow(1000, i + 1)

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i]
    }
  }

  return num
}

export { shortenLargeNumber }
