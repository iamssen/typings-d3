[d3-interpolate]
================================================
The type definition for [d3-interpolate] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-interpolate --save
typings install d3-interpolate --save
# or typings install github:iamssen/typings-d3/d3-interpolate --save
```

```typescript
import {interpolate} from 'd3-interpolate';
// or import * as d3_interpolate from 'd3-interpolate';
```

Using with [angular-cli]
------------------------------------------------
Add this line to `~/angular-cli-build.js` file.

```js
'd3-interpolate/build/d3-interpolate.min.js'
```

Map `d3-interpolate.min.js` file to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-interpolate': 'vendor/d3-array/build/d3-interpolate.min.js'
};
```

License
================================================
MIT


[d3-interpolate]: https://github.com/d3/d3-interpolate
[angular-cli]: https://github.com/angular/angular-cli