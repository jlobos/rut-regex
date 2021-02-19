const test = require('ava')
const r = require('./index.js')

test('match exact RUT', t => {
  t.true(r({exact: true}).test('18.972.631-7'))
  t.true(r({exact: true}).test('9.068.826-k'))
  t.true(r({exact: true}).test('12.585.741-8'))
  t.true(r({exact: true}).test('8.714.763-0'))
  t.true(r({exact: true}).test('100.000.000-K'))
  t.true(r({exact: true}).test('10-8'))
})

test('dot', t => {
  t.true(r({exact: true, dot: false}).test('18972631-7'))
  t.true(r({exact: true, dot: false}).test('9068826-k'))
  t.true(r({exact: true, dot: false}).test('12585741-8'))
  t.true(r({exact: true, dot: false}).test('8714763-0'))
  t.true(r({exact: true, dot: false}).test('100000000-K'))
})

test('hyphen', t => {
  t.true(r({exact: true, hyphen: false}).test('18.972.6317'))
  t.true(r({exact: true, hyphen: false}).test('9.068.826k'))
})

test('dot and hyphen', t => {
  t.true(r({exact: true, dot: false, hyphen: false}).test('189726317'))
  t.true(r({exact: true, dot: false, hyphen: false}).test('9068826k'))
})

test('match RUTs in text', t => {
  const fixture = `
    Lista de Ganadores :tada:
    <ul>
      <li>18.714.763-0</li>
      <li>18.972.631-7</li>
      <li>12.585.741-8</li>
      <li>10-8</li>
    </ul>
  `

  t.deepEqual(fixture.match(r()), [
    '18.714.763-0',
    '18.972.631-7',
    '12.585.741-8',
    '10-8'
  ])
})
