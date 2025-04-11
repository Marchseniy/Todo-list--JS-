function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorageItem(key) {
  return JSON.parse(localStorage.getItem(key))
}

export { setLocalStorageItem, getLocalStorageItem }