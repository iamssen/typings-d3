[d3-color]
================================================
The type definition for [d3-color] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-color --save
typings install d3-color --save
# or typings install github:iamssen/typings-d3/d3-color --save
```

```typescript
import {color, rgb} from 'd3-color';
// or import * as d3_color from 'd3-color';
```

Using with [angular-cli]
------------------------------------------------
Add this line to `~/angular-cli-build.js` file.

```js
'd3-color/build/d3-color.min.js'
```

Map `d3-color.min.js` file to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-color': 'vendor/d3-color/build/d3-color.min.js'
};
```

License
================================================
MIT


[d3-color]: https://github.com/d3/d3-color
[angular-cli]: https://github.com/angular/angular-cli