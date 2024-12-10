/* eslint-env jest */
import { calculator } from '.'

test('Se tira un error si el primer argumento es invalido', () => {
  expect(() => calculator.add('1', 2)).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.add('5', 8)).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.substract('5', 8)).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.substract('9', 10)).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.divide('5', 8)).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.divide('6', 0)).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.multiply('5', 8)).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.multiply('6', 3)).toThrow('Alguno de los números tiene un parametro invalido')
})

test('Se tira un error si el segundo argumento es invalido', () => {
  expect(() => calculator.add(1, '2')).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.add(5, '8')).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.substract(4, '8')).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.substract(3, '10')).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.divide(8, '8')).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.divide(9, '0')).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.multiply(10, '8')).toThrow('Alguno de los números tiene un parametro invalido')
  expect(() => calculator.multiply(15, '3')).toThrow('Alguno de los números tiene un parametro invalido')
})

test('Las funciones devuelven el resultado correcto', () => {
  expect(calculator.add(5, 3)).toBe(8)
  expect(calculator.substract(10, 5)).toBe(5)
  expect(calculator.divide(10, 2)).toBe(5)
  expect(calculator.multiply(6, 3)).toBe(18)
})
