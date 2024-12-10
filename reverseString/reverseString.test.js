/* eslint-env jest */
import { reverseString } from '.'

test('La función toma unicamente strings como argumento', () => {
  expect(() => reverseString(123)).toThrow('El argumento debe ser un string')
  expect(() => reverseString(55)).toThrow('El argumento debe ser un string')
  expect(() => reverseString(13)).toThrow('El argumento debe ser un string')
})

test('El argumento de la función tira un error al estar vacio', () => {
  expect(() => reverseString('')).toThrow('El string debe tener más de un caracter')
})

test('El argumento de la función tira un error al estar compuesto unicamente de espacios', () => {
  expect(() => reverseString('      ')).toThrow('El string debe estar compuesto unicamente por caracteres')
  expect(() => reverseString('   ')).toThrow('El string debe estar compuesto unicamente por caracteres')
  expect(() => reverseString('  ')).toThrow('El string debe estar compuesto unicamente por caracteres')
})

test('La función devuelve el string invertido', () => {
  expect(reverseString('hola')).toBe('aloh')
  expect(reverseString('adios')).toBe('soida')
  expect(reverseString('buenas')).toBe('saneub')
  expect(reverseString('cerrar')).toBe('rarrec')
})
