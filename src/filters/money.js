export default function(money, fraction) {
  let m = Number.parseFloat(money)
  if (Number.isNaN(m)) {
    m = 0
  }

  let f = Number.parseInt(fraction)
  if (Number.isNaN(f)) {
    f = 2
  }
  if (f < 0) {
    f = 0
  }

  return m.toFixed(f)
}
