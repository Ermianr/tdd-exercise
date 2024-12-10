function capitalize (string) {
  if (typeof string !== 'string') {
    throw new Error('El argumento debe ser un string')
  } else if (string.length === 0) {
    throw new Error('El string debe tener más de un caracter')
  } else if (string.trim().length === 0) {
    throw new Error('El string debe estar compuesto unicamente por caracteres')
  }
  const modifyString = string.toLocaleLowerCase()
  const firstLetter = modifyString.charAt(0).toUpperCase()
  const finalString = modifyString.substring(1)
  return firstLetter + finalString
}

export { capitalize }
