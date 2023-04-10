import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('test'))
      .toBe('test')
  })
  test('with mods', () => {
    expect(classNames('test', { hovered: true, scrollable: true }))
      .toBe('test hovered scrollable')
  })
  test('with additions', () => {
    expect(classNames('test', {}, ['addition1', 'addition2']))
      .toBe('test addition1 addition2')
  })
  test('with turned off mods', () => {
    expect(classNames('test', { hovered: false, scrollable: false }))
      .toBe('test')
  })
  test('with mods turned off by non boolean value', () => {
    expect(classNames('test', { hovered: undefined }))
      .toBe('test')
  })
  test('with addition and mods', () => {
    expect(classNames('test', { hovered: true, scrollable: true }, ['addition1', 'addition2']))
      .toBe('test hovered scrollable addition1 addition2')
  })
  test('with addition and turned off mods', () => {
    expect(classNames('test', { hovered: false, scrollable: false }, ['addition1', 'addition2']))
      .toBe('test addition1 addition2')
  })
})
