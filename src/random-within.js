import linear from "@rojo2/linear-interpolation";

/**
 * Returns a random number within `a` and `b`.
 *
 * @param {number} a - Minimum value
 * @param {number} b - Maximum value
 * @param {Function} [random=Math.random] - Random generator function to be used
 * @returns {number} - Returns a random number within `a` and `b`
 */
export default function randomWithin(a, b, random = Math.random) {
  return linear(random(), a, b);
}

