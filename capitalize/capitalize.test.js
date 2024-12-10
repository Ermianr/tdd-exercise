/* eslint-env jest */
import { capitalize } from '.'

test('La función toma unicamente strings como argumento', () => {
  expect(() => capitalize(123)).toThrow('El argumento debe ser un string')
  expect(() => capitalize(55)).toThrow('El argumento debe ser un string')
  expect(() => capitalize(13)).toThrow('El argumento debe ser un string')
})

test('El argumento de la función tira un error al estar vacio', () => {
  expect(() => capitalize('')).toThrow('El string debe tener más de un caracter')
})

test('El argumento de la función tira un error al estar compuesto unicamente de espacios', () => {
  expect(() => capitalize('      ')).toThrow('El string debe estar compuesto unicamente por caracteres')
  expect(() => capitalize('   ')).toThrow('El string debe estar compuesto unicamente por caracteres')
  expect(() => capitalize('  ')).toThrow('El string debe estar compuesto unicamente por caracteres')
})

test('La función retorna un string con su primer letra en mayúscula', () => {
  expect(capitalize('Hola')).toBe('Hola')
  expect(capitalize('hOLa')).toBe('Hola')
  expect(capitalize('adiOS')).toBe('Adios')
  expect(capitalize('Hola')).toBe('Hola')
  expect(capitalize('buEnas')).toBe('Buenas')
})
