# react-markdown-props
> Generate markdown properties string.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-markdown-props
```

## usage
```js
import rmp from '@feizheng/react-markdown-props';

rmp('./src/components/index.js');

// output
| Name        | Type   | Required | Default | Description                                 |
| ----------- | ------ | -------- | ------- | ------------------------------------------- |
| className   | string | false    | -       | The extended className for component.       |
| value       | object | false    | null    | Default value.                              |
| onChange    | func   | false    | noop    | The change handler.                         |
| destroyable | bool   | false    | -       | If element destroyed when visible to false. |
| backdrop    | union  | false    | -       | Backdrop props or not display backdrop.     |
```

## resources
- https://github.com/reactjs/react-docgen


## license
Code released under [the MIT license](https://github.com/afeiship/react-markdown-props/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-markdown-props
[version-url]: https://npmjs.org/package/@feizheng/react-markdown-props

[license-image]: https://img.shields.io/npm/l/@feizheng/react-markdown-props
[license-url]: https://github.com/afeiship/react-markdown-props/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-markdown-props
[size-url]: https://github.com/afeiship/react-markdown-props/blob/master/dist/react-markdown-props.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-markdown-props
[download-url]: https://www.npmjs.com/package/@feizheng/react-markdown-props
