# rut-regex

> Regular expression for matching Chile RUT's

## Install

```bash
$ npm install --save rut-regex
```

## Usage

```js
const rutRegex = require('rut-regex')

rutRegex().test('Felipito 8.714.763-0')
// true

rutRegex().test('8.714.763-0 Felipito')
// true

rutRegex({exact: true}).test('Felipito 8.714.763-0')
// false

rutRegex({exact: true}).test('8.714.763-0')
// true

rutRegex({exact: true, dot: false}).test('8714763-0')
// true

rutRegex({exact: true, dot: false, hyphen: false}).test('87147630')
// true

'Ganadores 8.714.763-0 18.972.631-7 :tada:'.match(rutRegex())
// [ '8.714.763-0', '18.972.631-7' ]
```

## API

### rutRegex(options)

Returns a regex for matching Chile RUT's.

#### options

Type: `Object`

##### exact

Type: `boolean`<br>
Default: `false`

Only match an exact string. Useful with `RegExp#test` to check if a string is a RUT.

##### dot

Type: `boolean`<br>
Default: `true`

Dot (.) in RUT.

##### hyphen

Type: `boolean`<br>
Default: `true`

Hyphen (-) in RUT.

## Related

- [rut.js](https://github.com/jlobos/rut.js) - Sencilla y pequeña librería para validar y dar formato al RUT
- [rutificador](https://github.com/lopezjurip/rutificador) - Get chilean RUT from people's name or vice versa from [Rutify – Rutificador](https://rutify.cl/).

## License

MIT © [Jesus Lobos](https://jlobos.com/)
