const checkURL = (message) => {
  try {
    new URL(message)
    return true
  } catch {
    return false
  }
}

export default checkURL
