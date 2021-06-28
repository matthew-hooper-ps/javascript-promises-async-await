export function fetchWithTiemout(delay) {
  return new Promise(resolve =>
    setTimeout(resolve, delay)
  )
}