const findObjectByValue = (obj, key, value, type, array) => {
  for (const item in obj) {
    if (type && !item.includes(type)) {
      continue
    }

    if (Object.prototype.hasOwnProperty.call(obj, item)) {
      const currentItem = obj[item]

      if (Array.isArray(array) && array.includes(currentItem)) {
        continue
      }

      if (currentItem[key] === value) {
        return currentItem
      }
    }
  }

  return null
}

const findObjectsByValue = (obj, key, value, type, array) => {
  const foundObjects = []

  for (const item in obj) {
    if (type && !item.includes(type)) {
      continue
    }

    if (Object.prototype.hasOwnProperty.call(obj, item)) {
      const currentItem = obj[item]

      if (Array.isArray(array) && array.includes(currentItem)) {
        continue
      }

      if (currentItem[key] === value) {
        foundObjects.push(currentItem)
      }
    }
  }

  return foundObjects.length > 0 ? foundObjects : null
}

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0
}

const sumValues = (obj) => {
  return Object.values(obj).reduce((sum, value) => sum + value)
}

export { findObjectByValue, findObjectsByValue, isEmpty, sumValues }
