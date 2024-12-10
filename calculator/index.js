function validFormat (num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return false
  } else {
    return true
  }
}

function add (num1, num2) {
  if (validFormat(num1, num2)) {
    return num1 + num2
  } else {
    throw new Error('Alguno de los números tiene un parametro invalido')
  }
}

function substract (num1, num2) {
  if (validFormat(num1, num2)) {
    return num1 - num2
  } else {
    throw new Error('Alguno de los números tiene un parametro invalido')
  }
}

function divide (num1, num2) {
  if (validFormat(num1, num2)) {
    return num1 / num2
  } else {
    throw new Error('Alguno de los números tiene un parametro invalido')
  }
}

function multiply (num1, num2) {
  if (validFormat(num1, num2)) {
    return num1 * num2
  } else {
    throw new Error('Alguno de los números tiene un parametro invalido')
  }
}

const calculator = {
  add,
  substract,
  divide,
  multiply
}

export { calculator }
