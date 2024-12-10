function reverseString (string) {
  if (typeof string !== 'string') {
    throw new Error('El argumento debe ser un string')
  } else if (string.length === 0) {
    throw new Error('El string debe tener más de un caracter')
  } else if (string.trim().length === 0) {
    throw new Error('El string debe estar compuesto unicamente por caracteres')
  }
  const modifyString = string.toLocaleLowerCase()
  let finalString = ''
  let counter = modifyString.length - 1
  while (counter >= 0) {
    finalString += modifyString[counter]
    counter--
  }
  return finalString
}

export { reverseString }
